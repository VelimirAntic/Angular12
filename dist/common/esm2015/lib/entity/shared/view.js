import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, skip } from 'rxjs/operators';
import { ObjectUtils, uuid } from '@igo2/utils';
/**
 * An entity view streams entities from an observable source. These entities
 * can be filtered or sorted without affecting the source. A view can also
 * combine data from multiple sources, joined together.
 */
export class EntityView {
    constructor(source$) {
        this.source$ = source$;
        /**
         * Observable stream of values
         */
        this.values$ = new BehaviorSubject([]);
        /**
         * Whether this view has been lifted
         */
        this.lifted = false;
        /**
         * Join clauses
         */
        this.joins = [];
        /**
         * Observable of a filter clause
         */
        this.filter$ = new BehaviorSubject(undefined);
        /**
         * Observable of filter clauses
         */
        this.filters$ = new BehaviorSubject([]);
        /**
         * Filters index
         */
        this.filterIndex = new Map();
        /**
         * Observable of a sort clause
         */
        this.sort$ = new BehaviorSubject(undefined);
        this.getKey$ = new BehaviorSubject(undefined);
        /**
         * Number of entities
         */
        this.count$ = new BehaviorSubject(0);
        /**
         * Whether the store is empty
         */
        this.empty$ = new BehaviorSubject(true);
    }
    /**
     * Method for indexing
     */
    get getKey() { return this.getKey$.value; }
    get count() { return this.count$.value; }
    get empty() { return this.empty$.value; }
    /**
     * Store index
     */
    get index() { return this._index; }
    /**
     * Get a value from the view by key
     * @param key Key
     * @returns Value
     */
    get(key) {
        if (this._index === undefined) {
            throw new Error('This view has no index, therefore, this method is unavailable.');
        }
        return this.index.get(key);
    }
    /**
     * Get all the values
     * @returns Array of values
     */
    all() {
        return this.values$.value;
    }
    /**
     * Observe all the values
     * @returns Observable of values
     */
    all$() {
        return this.values$;
    }
    /**
     * Get the first value that respects a criteria
     * @returns A value
     */
    firstBy(clause) {
        return this.values$.value.find(clause);
    }
    /**
     * Observe the first value that respects a criteria
     * @returns Observable of a value
     */
    firstBy$(clause) {
        return this.values$.pipe(map((values) => values.find(clause)));
    }
    /**
     * Get all the values that respect a criteria
     * @returns Array of values
     */
    manyBy(clause) {
        return this.values$.value.filter(clause);
    }
    /**
     * Observe all the values that respect a criteria
     * @returns Observable of values
     */
    manyBy$(clause) {
        return this.values$.pipe(map((values) => values.filter(clause)));
    }
    /**
     * Clear the filter and sort and unsubscribe from the source
     */
    clear() {
        this.filter(undefined);
        this.sort(undefined);
    }
    destroy() {
        if (this.values$$ !== undefined) {
            this.values$$.unsubscribe();
        }
        this.clear();
    }
    /**
     * Create an index
     * @param getKey Method to get a value's id
     * @returns The view
     */
    createIndex(getKey) {
        this._index = new Map();
        this.getKey$.next(getKey);
        return this;
    }
    /**
     * Join another source to the stream (chainable)
     * @param clause Join clause
     * @returns The view
     */
    join(clause) {
        if (this.lifted === true) {
            throw new Error('This view has already been lifted, therefore, no join is allowed.');
        }
        this.joins.push(clause);
        return this;
    }
    /**
     * Filter values (chainable)
     * @param clause Filter clause
     * @returns The view
     */
    filter(clause) {
        this.filter$.next(clause);
        return this;
    }
    /**
     * @param clause Filter clause
     * @returns The filter id
     */
    addFilter(clause) {
        const id = uuid();
        this.filterIndex.set(id, clause);
        this.filters$.next(Array.from(this.filterIndex.values()));
        return id;
    }
    /**
     * Remove a filter by id
     * @param clause Filter clause
     */
    removeFilter(id) {
        this.filterIndex.delete(id);
        this.filters$.next(Array.from(this.filterIndex.values()));
    }
    /**
     * Sort values (chainable)
     * @param clauseSort clause
     * @returns The view
     */
    sort(clause) {
        this.sort$.next(clause);
        return this;
    }
    /**
     * Create the final observable
     * @returns Observable
     */
    lift() {
        this.lifted = true;
        const source$ = this.joins.length > 0 ? this.liftJoinedSource() : this.liftSource();
        const observables$ = [
            source$,
            this.filters$,
            this.filter$,
            this.sort$,
            this.getKey$
        ];
        this.values$$ = combineLatest(observables$)
            .pipe(skip(1), debounceTime(5))
            .subscribe((bunch) => {
            const [_values, filters, filter, sort, getKey] = bunch;
            const values = this.processValues(_values, filters, filter, sort);
            const generateIndex = getKey !== undefined;
            this.setValues(values, generateIndex);
        });
    }
    /**
     * Create the source observable when no joins are defined
     * @returns Observable
     */
    liftSource() {
        return this.source$;
    }
    /**
     * Create the source observable when joins are defined
     * @returns Observable
     */
    liftJoinedSource() {
        const sources$ = [this.source$, combineLatest(this.joins.map((join) => join.source))];
        return combineLatest(sources$)
            .pipe(map((bunch) => {
            const [entities, joinData] = bunch;
            return entities.reduce((values, entity) => {
                const value = this.computeJoinedValue(entity, joinData);
                if (value !== undefined) {
                    values.push(value);
                }
                return values;
            }, []);
        }));
    }
    /**
     * Apply joins to a source's entity and return the final value
     * @returns Final value
     */
    computeJoinedValue(entity, joinData) {
        let value = entity;
        let joinIndex = 0;
        while (value !== undefined && joinIndex < this.joins.length) {
            value = this.joins[joinIndex].reduce(value, joinData[joinIndex]);
            joinIndex += 1;
        }
        return value;
    }
    /**
     * Filter and sort values before streaming them
     * @param values Values
     * @param filters Filter clauses
     * @param filter Filter clause
     * @param sort Sort clause
     * @returns Filtered and sorted values
     */
    processValues(values, filters, filter, sort) {
        values = values.slice(0);
        values = this.filterValues(values, filters.concat([filter]));
        values = this.sortValues(values, sort);
        return values;
    }
    /**
     * Filter values
     * @param values Values
     * @param filters Filter clauses
     * @returns Filtered values
     */
    filterValues(values, clauses) {
        if (clauses.length === 0) {
            return values;
        }
        return values
            .filter((value) => {
            return clauses
                .filter((clause) => clause !== undefined)
                .every((clause) => clause(value));
        });
    }
    /**
     * Sort values
     * @param values Values
     * @param sort Sort clause
     * @returns Sorted values
     */
    sortValues(values, clause) {
        if (clause === undefined) {
            return values;
        }
        return values.sort((v1, v2) => {
            return ObjectUtils.naturalCompare(clause.valueAccessor(v1), clause.valueAccessor(v2), clause.direction, clause.nullsFirst);
        });
    }
    /**
     * Set value and optionally generate an index
     * @param values Values
     * @param generateIndex boolean
     */
    setValues(values, generateIndex) {
        if (generateIndex === true) {
            this._index = this.generateIndex(values);
        }
        this.values$.next(values);
        const count = values.length;
        const empty = count === 0;
        this.count$.next(count);
        this.empty$.next(empty);
    }
    /**
     * Generate a complete index of all the values
     * @param entities Entities
     * @returns Index
     */
    generateIndex(values) {
        const entries = values.map((value) => [this.getKey(value), value]);
        return new Map(entries);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9zaGFyZWQvdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUE0QixhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFRaEQ7Ozs7R0FJRztBQUNILE1BQU0sT0FBTyxVQUFVO0lBa0VyQixZQUFvQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQWhFakQ7O1dBRUc7UUFDTSxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFPaEQ7O1dBRUc7UUFDSyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXZCOztXQUVHO1FBQ0ssVUFBSyxHQUF1QixFQUFFLENBQUM7UUFFdkM7O1dBRUc7UUFDSyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQ7O1dBRUc7UUFDSyxhQUFRLEdBQTBDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxGOztXQUVHO1FBQ0ssZ0JBQVcsR0FBb0MsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVqRTs7V0FFRztRQUNLLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQU12QyxZQUFPLEdBQXNDLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBGOztXQUVHO1FBQ00sV0FBTSxHQUFHLElBQUksZUFBZSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBR2pEOztXQUVHO1FBQ00sV0FBTSxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FB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QUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLE1BQU0sS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxhQUFhLENBQUMsTUFBVztRQUMvQixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLElBQUksR0FBRyxDQUFDLE9BQTJCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBtYXAsIHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9iamVjdFV0aWxzLCB1dWlkIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuaW1wb3J0IHtcbiAgRW50aXR5S2V5LFxuICBFbnRpdHlGaWx0ZXJDbGF1c2UsXG4gIEVudGl0eVNvcnRDbGF1c2UsXG4gIEVudGl0eUpvaW5DbGF1c2Vcbn0gZnJvbSAnLi9lbnRpdHkuaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogQW4gZW50aXR5IHZpZXcgc3RyZWFtcyBlbnRpdGllcyBmcm9tIGFuIG9ic2VydmFibGUgc291cmNlLiBUaGVzZSBlbnRpdGllc1xuICogY2FuIGJlIGZpbHRlcmVkIG9yIHNvcnRlZCB3aXRob3V0IGFmZmVjdGluZyB0aGUgc291cmNlLiBBIHZpZXcgY2FuIGFsc29cbiAqIGNvbWJpbmUgZGF0YSBmcm9tIG11bHRpcGxlIHNvdXJjZXMsIGpvaW5lZCB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudGl0eVZpZXc8RSBleHRlbmRzIG9iamVjdCwgViBleHRlbmRzIG9iamVjdCA9IEU+IHtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBzdHJlYW0gb2YgdmFsdWVzXG4gICAqL1xuICByZWFkb25seSB2YWx1ZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWW10+KFtdKTtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzb3VyY2UgKGFuZCBqb2luZWQgc291cmNlcykgdmFsdWVzXG4gICAqL1xuICBwcml2YXRlIHZhbHVlcyQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyB2aWV3IGhhcyBiZWVuIGxpZnRlZFxuICAgKi9cbiAgcHJpdmF0ZSBsaWZ0ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSm9pbiBjbGF1c2VzXG4gICAqL1xuICBwcml2YXRlIGpvaW5zOiBFbnRpdHlKb2luQ2xhdXNlW10gPSBbXTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiBhIGZpbHRlciBjbGF1c2VcbiAgICovXG4gIHByaXZhdGUgZmlsdGVyJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiBmaWx0ZXIgY2xhdXNlc1xuICAgKi9cbiAgcHJpdmF0ZSBmaWx0ZXJzJDogQmVoYXZpb3JTdWJqZWN0PEVudGl0eUZpbHRlckNsYXVzZVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIGluZGV4XG4gICAqL1xuICBwcml2YXRlIGZpbHRlckluZGV4OiBNYXA8c3RyaW5nLCBFbnRpdHlGaWx0ZXJDbGF1c2U+ID0gbmV3IE1hcCgpO1xuXG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIG9mIGEgc29ydCBjbGF1c2VcbiAgICovXG4gIHByaXZhdGUgc29ydCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBmb3IgaW5kZXhpbmdcbiAgICovXG4gIGdldCBnZXRLZXkoKTogKFYpID0+IEVudGl0eUtleSB7IHJldHVybiB0aGlzLmdldEtleSQudmFsdWU7IH1cbiAgcHJpdmF0ZSBnZXRLZXkkOiBCZWhhdmlvclN1YmplY3Q8KFYpID0+IEVudGl0eUtleT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBlbnRpdGllc1xuICAgKi9cbiAgcmVhZG9ubHkgY291bnQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDApO1xuICBnZXQgY291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuY291bnQkLnZhbHVlOyB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHN0b3JlIGlzIGVtcHR5XG4gICAqL1xuICByZWFkb25seSBlbXB0eSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICBnZXQgZW1wdHkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmVtcHR5JC52YWx1ZTsgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSBpbmRleFxuICAgKi9cbiAgZ2V0IGluZGV4KCk6IE1hcDxFbnRpdHlLZXksIFY+IHsgcmV0dXJuIHRoaXMuX2luZGV4OyB9XG4gIHByaXZhdGUgX2luZGV4OiBNYXA8RW50aXR5S2V5LCBWPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdXJjZSQ6IEJlaGF2aW9yU3ViamVjdDxFW10+KSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgYSB2YWx1ZSBmcm9tIHRoZSB2aWV3IGJ5IGtleVxuICAgKiBAcGFyYW0ga2V5IEtleVxuICAgKiBAcmV0dXJucyBWYWx1ZVxuICAgKi9cbiAgZ2V0KGtleTogRW50aXR5S2V5KTogViB7XG4gICAgaWYgKHRoaXMuX2luZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyB2aWV3IGhhcyBubyBpbmRleCwgdGhlcmVmb3JlLCB0aGlzIG1ldGhvZCBpcyB1bmF2YWlsYWJsZS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5kZXguZ2V0KGtleSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUgdmFsdWVzXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIHZhbHVlc1xuICAgKi9cbiAgYWxsKCk6IFZbXSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzJC52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlIGFsbCB0aGUgdmFsdWVzXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGUgb2YgdmFsdWVzXG4gICAqL1xuICBhbGwkKCk6IEJlaGF2aW9yU3ViamVjdDxWW10+IHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXMkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZmlyc3QgdmFsdWUgdGhhdCByZXNwZWN0cyBhIGNyaXRlcmlhXG4gICAqIEByZXR1cm5zIEEgdmFsdWVcbiAgICovXG4gIGZpcnN0QnkoY2xhdXNlOiBFbnRpdHlGaWx0ZXJDbGF1c2U8Vj4pOiBWIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXMkLnZhbHVlLmZpbmQoY2xhdXNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlIHRoZSBmaXJzdCB2YWx1ZSB0aGF0IHJlc3BlY3RzIGEgY3JpdGVyaWFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSBvZiBhIHZhbHVlXG4gICAqL1xuICBmaXJzdEJ5JChjbGF1c2U6IEVudGl0eUZpbHRlckNsYXVzZTxWPik6IE9ic2VydmFibGU8Vj4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcyQucGlwZShtYXAoKHZhbHVlczogVltdKSA9PiB2YWx1ZXMuZmluZChjbGF1c2UpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUgdmFsdWVzIHRoYXQgcmVzcGVjdCBhIGNyaXRlcmlhXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIHZhbHVlc1xuICAgKi9cbiAgbWFueUJ5KGNsYXVzZTogRW50aXR5RmlsdGVyQ2xhdXNlPFY+KTogVltdIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXMkLnZhbHVlLmZpbHRlcihjbGF1c2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ic2VydmUgYWxsIHRoZSB2YWx1ZXMgdGhhdCByZXNwZWN0IGEgY3JpdGVyaWFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSBvZiB2YWx1ZXNcbiAgICovXG4gIG1hbnlCeSQoY2xhdXNlOiBFbnRpdHlGaWx0ZXJDbGF1c2U8Vj4pOiBPYnNlcnZhYmxlPFZbXT4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcyQucGlwZShtYXAoKHZhbHVlczogVltdKSA9PiB2YWx1ZXMuZmlsdGVyKGNsYXVzZSkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgZmlsdGVyIGFuZCBzb3J0IGFuZCB1bnN1YnNjcmliZSBmcm9tIHRoZSBzb3VyY2VcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZmlsdGVyKHVuZGVmaW5lZCk7XG4gICAgdGhpcy5zb3J0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnZhbHVlcyQkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudmFsdWVzJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbmRleFxuICAgKiBAcGFyYW0gZ2V0S2V5IE1ldGhvZCB0byBnZXQgYSB2YWx1ZSdzIGlkXG4gICAqIEByZXR1cm5zIFRoZSB2aWV3XG4gICAqL1xuICBjcmVhdGVJbmRleChnZXRLZXk6IChFKSA9PiBFbnRpdHlLZXkpOiBFbnRpdHlWaWV3PEUsIFY+IHtcbiAgICB0aGlzLl9pbmRleCA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmdldEtleSQubmV4dChnZXRLZXkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEpvaW4gYW5vdGhlciBzb3VyY2UgdG8gdGhlIHN0cmVhbSAoY2hhaW5hYmxlKVxuICAgKiBAcGFyYW0gY2xhdXNlIEpvaW4gY2xhdXNlXG4gICAqIEByZXR1cm5zIFRoZSB2aWV3XG4gICAqL1xuICBqb2luKGNsYXVzZTogRW50aXR5Sm9pbkNsYXVzZSk6IEVudGl0eVZpZXc8RSwgVj4ge1xuICAgIGlmICh0aGlzLmxpZnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIHZpZXcgaGFzIGFscmVhZHkgYmVlbiBsaWZ0ZWQsIHRoZXJlZm9yZSwgbm8gam9pbiBpcyBhbGxvd2VkLicpO1xuICAgIH1cbiAgICB0aGlzLmpvaW5zLnB1c2goY2xhdXNlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgdmFsdWVzIChjaGFpbmFibGUpXG4gICAqIEBwYXJhbSBjbGF1c2UgRmlsdGVyIGNsYXVzZVxuICAgKiBAcmV0dXJucyBUaGUgdmlld1xuICAgKi9cbiAgZmlsdGVyKGNsYXVzZTogRW50aXR5RmlsdGVyQ2xhdXNlPFY+KTogRW50aXR5VmlldzxFLCBWPiB7XG4gICAgdGhpcy5maWx0ZXIkLm5leHQoY2xhdXNlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gY2xhdXNlIEZpbHRlciBjbGF1c2VcbiAgICogQHJldHVybnMgVGhlIGZpbHRlciBpZFxuICAgKi9cbiAgYWRkRmlsdGVyKGNsYXVzZTogRW50aXR5RmlsdGVyQ2xhdXNlPFY+KTogc3RyaW5nIHtcbiAgICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgICB0aGlzLmZpbHRlckluZGV4LnNldChpZCwgY2xhdXNlKTtcbiAgICB0aGlzLmZpbHRlcnMkLm5leHQoQXJyYXkuZnJvbSh0aGlzLmZpbHRlckluZGV4LnZhbHVlcygpKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGZpbHRlciBieSBpZFxuICAgKiBAcGFyYW0gY2xhdXNlIEZpbHRlciBjbGF1c2VcbiAgICovXG4gIHJlbW92ZUZpbHRlcihpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5maWx0ZXJJbmRleC5kZWxldGUoaWQpO1xuICAgIHRoaXMuZmlsdGVycyQubmV4dChBcnJheS5mcm9tKHRoaXMuZmlsdGVySW5kZXgudmFsdWVzKCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0IHZhbHVlcyAoY2hhaW5hYmxlKVxuICAgKiBAcGFyYW0gY2xhdXNlU29ydCBjbGF1c2VcbiAgICogQHJldHVybnMgVGhlIHZpZXdcbiAgICovXG4gIHNvcnQoY2xhdXNlOiBFbnRpdHlTb3J0Q2xhdXNlPFY+KTogRW50aXR5VmlldzxFLCBWPiB7XG4gICAgdGhpcy5zb3J0JC5uZXh0KGNsYXVzZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBmaW5hbCBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGVcbiAgICovXG4gIGxpZnQoKSB7XG4gICAgdGhpcy5saWZ0ZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNvdXJjZSQgPSB0aGlzLmpvaW5zLmxlbmd0aCA+IDAgPyB0aGlzLmxpZnRKb2luZWRTb3VyY2UoKSA6IHRoaXMubGlmdFNvdXJjZSgpO1xuICAgIGNvbnN0IG9ic2VydmFibGVzJCA9IFtcbiAgICAgIHNvdXJjZSQsXG4gICAgICB0aGlzLmZpbHRlcnMkLFxuICAgICAgdGhpcy5maWx0ZXIkLFxuICAgICAgdGhpcy5zb3J0JCxcbiAgICAgIHRoaXMuZ2V0S2V5JFxuICAgIF07XG5cbiAgICB0aGlzLnZhbHVlcyQkID0gY29tYmluZUxhdGVzdChvYnNlcnZhYmxlcyQpXG4gICAgICAucGlwZShza2lwKDEpLCBkZWJvdW5jZVRpbWUoNSkpXG4gICAgICAuc3Vic2NyaWJlKChidW5jaDogW1ZbXSwgRW50aXR5RmlsdGVyQ2xhdXNlW10sIEVudGl0eUZpbHRlckNsYXVzZSwgRW50aXR5U29ydENsYXVzZSwgKFYpID0+IEVudGl0eUtleV0pID0+IHtcbiAgICAgICAgY29uc3QgW192YWx1ZXMsIGZpbHRlcnMsIGZpbHRlciwgc29ydCwgZ2V0S2V5XSA9IGJ1bmNoO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnByb2Nlc3NWYWx1ZXMoX3ZhbHVlcywgZmlsdGVycywgZmlsdGVyLCBzb3J0KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVJbmRleCA9IGdldEtleSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNldFZhbHVlcyh2YWx1ZXMsIGdlbmVyYXRlSW5kZXgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSB3aGVuIG5vIGpvaW5zIGFyZSBkZWZpbmVkXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGVcbiAgICovXG4gIHByaXZhdGUgbGlmdFNvdXJjZSgpOiBPYnNlcnZhYmxlPFZbXT4ge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZSQgYXMgYW55IGFzIE9ic2VydmFibGU8VltdPjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHNvdXJjZSBvYnNlcnZhYmxlIHdoZW4gam9pbnMgYXJlIGRlZmluZWRcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZVxuICAgKi9cbiAgcHJpdmF0ZSBsaWZ0Sm9pbmVkU291cmNlKCk6IE9ic2VydmFibGU8VltdPiB7XG4gICAgY29uc3Qgc291cmNlcyQgPSBbdGhpcy5zb3VyY2UkLCBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5qb2lucy5tYXAoKGpvaW46IEVudGl0eUpvaW5DbGF1c2UpID0+IGpvaW4uc291cmNlKVxuICAgICldO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc291cmNlcyQpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChidW5jaDogW0VbXSwgYW55W11dKSA9PiB7XG4gICAgICAgICAgY29uc3QgW2VudGl0aWVzLCBqb2luRGF0YV0gPSBidW5jaDtcbiAgICAgICAgICByZXR1cm4gZW50aXRpZXMucmVkdWNlKCh2YWx1ZXM6IFZbXSwgZW50aXR5OiBFKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29tcHV0ZUpvaW5lZFZhbHVlKGVudGl0eSwgam9pbkRhdGEpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGpvaW5zIHRvIGEgc291cmNlJ3MgZW50aXR5IGFuZCByZXR1cm4gdGhlIGZpbmFsIHZhbHVlXG4gICAqIEByZXR1cm5zIEZpbmFsIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVKb2luZWRWYWx1ZShlbnRpdHk6IEUsIGpvaW5EYXRhOiBhbnlbXSk6IFYgfCB1bmRlZmluZWQge1xuICAgIGxldCB2YWx1ZSA9IGVudGl0eSBhcyBQYXJ0aWFsPFY+O1xuICAgIGxldCBqb2luSW5kZXggPSAwO1xuICAgIHdoaWxlICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIGpvaW5JbmRleCA8IHRoaXMuam9pbnMubGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuam9pbnNbam9pbkluZGV4XS5yZWR1Y2UodmFsdWUsIGpvaW5EYXRhW2pvaW5JbmRleF0pO1xuICAgICAgam9pbkluZGV4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSBhcyBWO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhbmQgc29ydCB2YWx1ZXMgYmVmb3JlIHN0cmVhbWluZyB0aGVtXG4gICAqIEBwYXJhbSB2YWx1ZXMgVmFsdWVzXG4gICAqIEBwYXJhbSBmaWx0ZXJzIEZpbHRlciBjbGF1c2VzXG4gICAqIEBwYXJhbSBmaWx0ZXIgRmlsdGVyIGNsYXVzZVxuICAgKiBAcGFyYW0gc29ydCBTb3J0IGNsYXVzZVxuICAgKiBAcmV0dXJucyBGaWx0ZXJlZCBhbmQgc29ydGVkIHZhbHVlc1xuICAgKi9cbiAgcHJpdmF0ZSBwcm9jZXNzVmFsdWVzKFxuICAgIHZhbHVlczogVltdLCBmaWx0ZXJzOiBFbnRpdHlGaWx0ZXJDbGF1c2VbXSwgZmlsdGVyOiBFbnRpdHlGaWx0ZXJDbGF1c2UsIHNvcnQ6IEVudGl0eVNvcnRDbGF1c2VcbiAgKTogVltdIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZXMuc2xpY2UoMCk7XG4gICAgdmFsdWVzID0gdGhpcy5maWx0ZXJWYWx1ZXModmFsdWVzLCBmaWx0ZXJzLmNvbmNhdChbZmlsdGVyXSkpO1xuICAgIHZhbHVlcyA9IHRoaXMuc29ydFZhbHVlcyh2YWx1ZXMsIHNvcnQpO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIHZhbHVlc1xuICAgKiBAcGFyYW0gdmFsdWVzIFZhbHVlc1xuICAgKiBAcGFyYW0gZmlsdGVycyBGaWx0ZXIgY2xhdXNlc1xuICAgKiBAcmV0dXJucyBGaWx0ZXJlZCB2YWx1ZXNcbiAgICovXG4gIHByaXZhdGUgZmlsdGVyVmFsdWVzKHZhbHVlczogVltdLCBjbGF1c2VzOiBFbnRpdHlGaWx0ZXJDbGF1c2VbXSk6IFZbXSB7XG4gICAgaWYgKGNsYXVzZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiB2YWx1ZXM7IH1cblxuICAgIHJldHVybiB2YWx1ZXNcbiAgICAgIC5maWx0ZXIoKHZhbHVlOiBWKSA9PiB7XG4gICAgICAgIHJldHVybiBjbGF1c2VzXG4gICAgICAgICAgLmZpbHRlcigoY2xhdXNlOiBFbnRpdHlGaWx0ZXJDbGF1c2UpID0+IGNsYXVzZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIC5ldmVyeSgoY2xhdXNlOiBFbnRpdHlGaWx0ZXJDbGF1c2UpID0+IGNsYXVzZSh2YWx1ZSkpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU29ydCB2YWx1ZXNcbiAgICogQHBhcmFtIHZhbHVlcyBWYWx1ZXNcbiAgICogQHBhcmFtIHNvcnQgU29ydCBjbGF1c2VcbiAgICogQHJldHVybnMgU29ydGVkIHZhbHVlc1xuICAgKi9cbiAgcHJpdmF0ZSBzb3J0VmFsdWVzKHZhbHVlczogVltdLCBjbGF1c2U6IEVudGl0eVNvcnRDbGF1c2UpOiBWW10ge1xuICAgIGlmIChjbGF1c2UgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdmFsdWVzOyB9XG4gICAgcmV0dXJuIHZhbHVlcy5zb3J0KCh2MTogViwgdjI6IFYpID0+IHtcbiAgICAgIHJldHVybiBPYmplY3RVdGlscy5uYXR1cmFsQ29tcGFyZShcbiAgICAgICAgY2xhdXNlLnZhbHVlQWNjZXNzb3IodjEpLFxuICAgICAgICBjbGF1c2UudmFsdWVBY2Nlc3Nvcih2MiksXG4gICAgICAgIGNsYXVzZS5kaXJlY3Rpb24sXG4gICAgICAgIGNsYXVzZS5udWxsc0ZpcnN0XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2YWx1ZSBhbmQgb3B0aW9uYWxseSBnZW5lcmF0ZSBhbiBpbmRleFxuICAgKiBAcGFyYW0gdmFsdWVzIFZhbHVlc1xuICAgKiBAcGFyYW0gZ2VuZXJhdGVJbmRleCBib29sZWFuXG4gICAqL1xuICBwcml2YXRlIHNldFZhbHVlcyh2YWx1ZXM6IFZbXSwgZ2VuZXJhdGVJbmRleDogYm9vbGVhbikge1xuICAgIGlmIChnZW5lcmF0ZUluZGV4ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9pbmRleCA9IHRoaXMuZ2VuZXJhdGVJbmRleCh2YWx1ZXMpO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVzJC5uZXh0KHZhbHVlcyk7XG5cbiAgICBjb25zdCBjb3VudCA9IHZhbHVlcy5sZW5ndGg7XG4gICAgY29uc3QgZW1wdHkgPSBjb3VudCA9PT0gMDtcbiAgICB0aGlzLmNvdW50JC5uZXh0KGNvdW50KTtcbiAgICB0aGlzLmVtcHR5JC5uZXh0KGVtcHR5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIGNvbXBsZXRlIGluZGV4IG9mIGFsbCB0aGUgdmFsdWVzXG4gICAqIEBwYXJhbSBlbnRpdGllcyBFbnRpdGllc1xuICAgKiBAcmV0dXJucyBJbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZUluZGV4KHZhbHVlczogVltdKTogTWFwPEVudGl0eUtleSwgVj4ge1xuICAgIGNvbnN0IGVudHJpZXMgPSB2YWx1ZXMubWFwKCh2YWx1ZTogVikgPT4gW3RoaXMuZ2V0S2V5KHZhbHVlKSwgdmFsdWVdKTtcbiAgICByZXR1cm4gbmV3IE1hcChlbnRyaWVzIGFzIFtFbnRpdHlLZXksIFZdW10pO1xuICB9XG59XG4iXX0=