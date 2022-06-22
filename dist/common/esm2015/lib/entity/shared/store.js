import { BehaviorSubject } from 'rxjs';
import { EntityStateManager } from './state';
import { EntityView } from './view';
import { getEntityId, getEntityProperty } from './entity.utils';
/**
 * An entity store class holds any number of entities
 * as well as their state. It can be observed, filtered and sorted and
 * provides methods to insert, update or delete entities.
 */
export class EntityStore {
    constructor(entities, options = {}) {
        /**
         * Observable of the raw entities
         */
        this.entities$ = new BehaviorSubject([]);
        /**
         * Number of entities
         */
        this.count$ = new BehaviorSubject(0);
        /**
         * Whether the store is empty
         */
        this.empty$ = new BehaviorSubject(true);
        this._pristine = true;
        /**
         * Strategies
         */
        this.strategies = [];
        this.getKey = options.getKey ? options.getKey : getEntityId;
        this.getProperty = options.getProperty ? options.getProperty : getEntityProperty;
        this.state = this.createStateManager();
        this.view = this.createDataView();
        this.stateView = this.createStateView();
        this.view.lift();
        this.stateView.lift();
        if (entities.length > 0) {
            this.load(entities);
        }
        else {
            this._index = this.generateIndex(entities);
        }
    }
    get count() { return this.count$.value; }
    get empty() { return this.empty$.value; }
    /**
     * Store index
     */
    get index() { return this._index; }
    /**
     * Store index
     */
    get pristine() { return this._pristine; }
    /**
     * Get an entity from the store by key
     * @param key Key
     * @returns Entity
     */
    get(key) {
        return this.index.get(key);
    }
    /**
     * Get all entities in the store
     * @returns Array of entities
     */
    all() {
        return this.entities$.value;
    }
    /**
     * Set this store's entities
     * @param entities Entities
     */
    load(entities, pristine = true) {
        this._index = this.generateIndex(entities);
        this._pristine = pristine;
        this.next();
    }
    /**
     * Clear the store's entities but keep the state and views intact.
     * Views won't return any data but future data will be subject to the
     * current views filter and sort
     */
    softClear() {
        if (this.index && this.index.size > 0) {
            this.index.clear();
            this._pristine = true;
            this.next();
        }
        else if (this.index) {
            this.updateCount();
        }
    }
    /**
     * Clear the store's entities, state and views
     */
    clear() {
        this.stateView.clear();
        this.view.clear();
        this.state.clear();
        this.softClear();
    }
    destroy() {
        this.stateView.destroy();
        this.view.destroy();
        this.clear();
    }
    /**
     * Insert an entity into the store
     * @param entity Entity
     */
    insert(entity) {
        this.insertMany([entity]);
    }
    /**
     * Insert many entities into the store
     * @param entities Entities
     */
    insertMany(entities) {
        entities.forEach((entity) => this.index.set(this.getKey(entity), entity));
        this._pristine = false;
        this.next();
    }
    /**
     * Update or insert an entity into the store
     * @param entity Entity
     */
    update(entity) {
        this.updateMany([entity]);
    }
    /**
     * Update or insert many entities into the store
     * @param entities Entities
     */
    updateMany(entities) {
        entities.forEach((entity) => this.index.set(this.getKey(entity), entity));
        this._pristine = false;
        this.next();
    }
    /**
     * Delete an entity from the store
     * @param entity Entity
     */
    delete(entity) {
        this.deleteMany([entity]);
    }
    /**
     * Delete many entities from the store
     * @param entities Entities
     */
    deleteMany(entities) {
        entities.forEach((entity) => this.index.delete(this.getKey(entity)));
        this._pristine = false;
        this.next();
    }
    /**
     * Add a strategy to this store
     * @param strategy Entity store strategy
     * @returns Entity store
     */
    addStrategy(strategy, activate = false) {
        const existingStrategy = this.strategies.find((_strategy) => {
            return strategy.constructor === _strategy.constructor;
        });
        if (existingStrategy !== undefined) {
            throw new Error('A strategy of this type already exists on that EntityStore.');
        }
        this.strategies.push(strategy);
        strategy.bindStore(this);
        if (activate === true) {
            strategy.activate();
        }
        return this;
    }
    /**
     * Remove a strategy from this store
     * @param strategy Entity store strategy
     * @returns Entity store
     */
    removeStrategy(strategy) {
        const index = this.strategies.indexOf(strategy);
        if (index >= 0) {
            this.strategies.splice(index, 1);
            strategy.unbindStore(this);
        }
        return this;
    }
    /**
     * Return strategies of a given type
     * @param type Entity store strategy class
     * @returns Strategies
     */
    getStrategyOfType(type) {
        return this.strategies.find((strategy) => {
            return strategy instanceof type;
        });
    }
    /**
     * Activate strategies of a given type
     * @param type Entity store strategy class
     */
    activateStrategyOfType(type) {
        const strategy = this.getStrategyOfType(type);
        if (strategy !== undefined) {
            strategy.activate();
        }
    }
    /**
     * Deactivate strategies of a given type
     * @param type Entity store strategy class
     */
    deactivateStrategyOfType(type) {
        const strategy = this.getStrategyOfType(type);
        if (strategy !== undefined) {
            strategy.deactivate();
        }
    }
    /**
     * Generate a complete index of all the entities
     * @param entities Entities
     * @returns Index
     */
    generateIndex(entities) {
        const entries = entities.map((entity) => [this.getKey(entity), entity]);
        return new Map(entries);
    }
    /**
     * Push the index's entities into the entities$ observable
     */
    next() {
        this.entities$.next(Array.from(this.index.values()));
        this.updateCount();
    }
    /**
     * Update the store's count and empty
     */
    updateCount() {
        const count = this.index.size;
        const empty = count === 0;
        this.count$.next(count);
        this.empty$.next(empty);
    }
    /**
     * Create the entity state manager
     * @returns EntityStateManager
     */
    createStateManager() {
        return new EntityStateManager({ store: this });
    }
    /**
     * Create the data view
     * @returns EntityView<E>
     */
    createDataView() {
        return new EntityView(this.entities$);
    }
    /**
     * Create the state view
     * @returns EntityView<EntityRecord<E>>
     */
    createStateView() {
        return new EntityView(this.view.all$())
            .join({
            source: this.state.change$,
            reduce: (entity) => {
                const key = this.getKey(entity);
                const state = this.state.get(entity);
                const currentRecord = this.stateView.get(key);
                if (currentRecord !== undefined &&
                    currentRecord.entity === entity &&
                    this.statesAreTheSame(currentRecord.state, state)) {
                    return currentRecord;
                }
                const revision = currentRecord ? currentRecord.revision + 1 : 1;
                const ref = `${key}-${revision}`;
                return { entity, state, revision, ref };
            }
        })
            .createIndex((record) => this.getKey(record.entity));
    }
    statesAreTheSame(currentState, newState) {
        if (currentState === newState) {
            return true;
        }
        const currentStateIsEmpty = Object.keys(currentState).length === 0;
        const newStateIsEmpty = Object.keys(newState).length === 0;
        return currentStateIsEmpty && newStateIsEmpty;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9lbnRpdHkvc2hhcmVkL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2hFOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sV0FBVztJQTZEdEIsWUFBWSxRQUFhLEVBQUUsVUFBOEIsRUFBRTtRQTNEM0Q7O1dBRUc7UUFDTSxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFFbEQ7O1dBRUc7UUFDTSxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFHakQ7O1dBRUc7UUFDTSxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFzQzdDLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFFbEM7O1dBRUc7UUFDSyxlQUFVLEdBQTBCLEVBQUUsQ0FBQztRQUc3QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBRWpGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUks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LE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLGdCQUFnQixDQUFDLFlBQWUsRUFBRSxRQUFXO1FBQ25ELElBQUksWUFBWSxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDbkUsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQzNELE9BQU8sbUJBQW1CLElBQUksZUFBZSxDQUFDO0lBQ2hELENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFbnRpdHlTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEVudGl0eVZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHsgRW50aXR5S2V5LCBFbnRpdHlTdGF0ZSwgRW50aXR5UmVjb3JkLCBFbnRpdHlTdG9yZU9wdGlvbnMgfSBmcm9tICcuL2VudGl0eS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IGdldEVudGl0eUlkLCBnZXRFbnRpdHlQcm9wZXJ0eSB9IGZyb20gJy4vZW50aXR5LnV0aWxzJztcbmltcG9ydCB7IEVudGl0eVN0b3JlU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvc3RyYXRlZ3knO1xuXG4vKipcbiAqIEFuIGVudGl0eSBzdG9yZSBjbGFzcyBob2xkcyBhbnkgbnVtYmVyIG9mIGVudGl0aWVzXG4gKiBhcyB3ZWxsIGFzIHRoZWlyIHN0YXRlLiBJdCBjYW4gYmUgb2JzZXJ2ZWQsIGZpbHRlcmVkIGFuZCBzb3J0ZWQgYW5kXG4gKiBwcm92aWRlcyBtZXRob2RzIHRvIGluc2VydCwgdXBkYXRlIG9yIGRlbGV0ZSBlbnRpdGllcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudGl0eVN0b3JlPEUgZXh0ZW5kcyBvYmplY3QgPSBvYmplY3QsIFMgZXh0ZW5kcyBFbnRpdHlTdGF0ZSA9IEVudGl0eVN0YXRlPiB7XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgdGhlIHJhdyBlbnRpdGllc1xuICAgKi9cbiAgcmVhZG9ubHkgZW50aXRpZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxFW10+KFtdKTtcblxuICAvKipcbiAgICogTnVtYmVyIG9mIGVudGl0aWVzXG4gICAqL1xuICByZWFkb25seSBjb3VudCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMCk7XG4gIGdldCBjb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5jb3VudCQudmFsdWU7IH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc3RvcmUgaXMgZW1wdHlcbiAgICovXG4gIHJlYWRvbmx5IGVtcHR5JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIGdldCBlbXB0eSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZW1wdHkkLnZhbHVlOyB9XG5cbiAgLyoqXG4gICAqIEVudGl0eSBzdG9yZSBzdGF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgc3RhdGU6IEVudGl0eVN0YXRlTWFuYWdlcjxFLCBTPjtcblxuICAvKipcbiAgICogVmlldyBvZiBhbGwgdGhlIGVudGl0aWVzXG4gICAqL1xuICByZWFkb25seSB2aWV3OiBFbnRpdHlWaWV3PEU+O1xuXG4gIC8qKlxuICAgKiBWaWV3IG9mIGFsbCB0aGUgZW50aXRpZXMgYW5kIHRoZWlyIHN0YXRlXG4gICAqL1xuICByZWFkb25seSBzdGF0ZVZpZXc6IEVudGl0eVZpZXc8RSwgRW50aXR5UmVjb3JkPEUsIFM+PjtcblxuICAvKipcbiAgICogTWV0aG9kIHRvIGdldCBhbiBlbnRpdHkncyBpZFxuICAgKi9cbiAgcmVhZG9ubHkgZ2V0S2V5OiAoRSkgPT4gRW50aXR5S2V5O1xuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZ2V0IGFuIGVudGl0eSdzIG5hbWVkIHByb3BlcnR5XG4gICAqL1xuICByZWFkb25seSBnZXRQcm9wZXJ0eTogKEUsIHByb3A6IHN0cmluZykgPT4gYW55O1xuXG4gIC8qKlxuICAgKiBTdG9yZSBpbmRleFxuICAgKi9cbiAgZ2V0IGluZGV4KCk6IE1hcDxFbnRpdHlLZXksIEU+IHsgcmV0dXJuIHRoaXMuX2luZGV4OyB9XG4gIHByaXZhdGUgX2luZGV4OiBNYXA8RW50aXR5S2V5LCBFPjtcblxuICAvKipcbiAgICogU3RvcmUgaW5kZXhcbiAgICovXG4gIGdldCBwcmlzdGluZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3ByaXN0aW5lOyB9XG4gIHByaXZhdGUgX3ByaXN0aW5lOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogU3RyYXRlZ2llc1xuICAgKi9cbiAgcHJpdmF0ZSBzdHJhdGVnaWVzOiBFbnRpdHlTdG9yZVN0cmF0ZWd5W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihlbnRpdGllczogRVtdLCBvcHRpb25zOiBFbnRpdHlTdG9yZU9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZ2V0S2V5ID0gb3B0aW9ucy5nZXRLZXkgPyBvcHRpb25zLmdldEtleSA6IGdldEVudGl0eUlkO1xuICAgIHRoaXMuZ2V0UHJvcGVydHkgPSBvcHRpb25zLmdldFByb3BlcnR5ID8gb3B0aW9ucy5nZXRQcm9wZXJ0eSA6IGdldEVudGl0eVByb3BlcnR5O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuY3JlYXRlU3RhdGVNYW5hZ2VyKCk7XG4gICAgdGhpcy52aWV3ID0gdGhpcy5jcmVhdGVEYXRhVmlldygpO1xuICAgIHRoaXMuc3RhdGVWaWV3ID0gdGhpcy5jcmVhdGVTdGF0ZVZpZXcoKTtcblxuICAgIHRoaXMudmlldy5saWZ0KCk7XG4gICAgdGhpcy5zdGF0ZVZpZXcubGlmdCgpO1xuXG4gICAgaWYgKGVudGl0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubG9hZChlbnRpdGllcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2luZGV4ID0gdGhpcy5nZW5lcmF0ZUluZGV4KGVudGl0aWVzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGVudGl0eSBmcm9tIHRoZSBzdG9yZSBieSBrZXlcbiAgICogQHBhcmFtIGtleSBLZXlcbiAgICogQHJldHVybnMgRW50aXR5XG4gICAqL1xuICBnZXQoa2V5OiBFbnRpdHlLZXkpOiBFIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleC5nZXQoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGVudGl0aWVzIGluIHRoZSBzdG9yZVxuICAgKiBAcmV0dXJucyBBcnJheSBvZiBlbnRpdGllc1xuICAgKi9cbiAgYWxsKCk6IEVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXRpZXMkLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHN0b3JlJ3MgZW50aXRpZXNcbiAgICogQHBhcmFtIGVudGl0aWVzIEVudGl0aWVzXG4gICAqL1xuICBsb2FkKGVudGl0aWVzOiBFW10sIHByaXN0aW5lOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIHRoaXMuX2luZGV4ID0gdGhpcy5nZW5lcmF0ZUluZGV4KGVudGl0aWVzKTtcbiAgICB0aGlzLl9wcmlzdGluZSA9IHByaXN0aW5lO1xuICAgIHRoaXMubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBzdG9yZSdzIGVudGl0aWVzIGJ1dCBrZWVwIHRoZSBzdGF0ZSBhbmQgdmlld3MgaW50YWN0LlxuICAgKiBWaWV3cyB3b24ndCByZXR1cm4gYW55IGRhdGEgYnV0IGZ1dHVyZSBkYXRhIHdpbGwgYmUgc3ViamVjdCB0byB0aGVcbiAgICogY3VycmVudCB2aWV3cyBmaWx0ZXIgYW5kIHNvcnRcbiAgICovXG4gIHNvZnRDbGVhcigpIHtcbiAgICBpZiAodGhpcy5pbmRleCAmJiB0aGlzLmluZGV4LnNpemUgPiAwKSB7XG4gICAgICB0aGlzLmluZGV4LmNsZWFyKCk7XG4gICAgICB0aGlzLl9wcmlzdGluZSA9IHRydWU7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXgpIHtcbiAgICAgIHRoaXMudXBkYXRlQ291bnQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHN0b3JlJ3MgZW50aXRpZXMsIHN0YXRlIGFuZCB2aWV3c1xuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5zdGF0ZVZpZXcuY2xlYXIoKTtcbiAgICB0aGlzLnZpZXcuY2xlYXIoKTtcbiAgICB0aGlzLnN0YXRlLmNsZWFyKCk7XG4gICAgdGhpcy5zb2Z0Q2xlYXIoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZVZpZXcuZGVzdHJveSgpO1xuICAgIHRoaXMudmlldy5kZXN0cm95KCk7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBhbiBlbnRpdHkgaW50byB0aGUgc3RvcmVcbiAgICogQHBhcmFtIGVudGl0eSBFbnRpdHlcbiAgICovXG4gIGluc2VydChlbnRpdHk6IEUpIHtcbiAgICB0aGlzLmluc2VydE1hbnkoW2VudGl0eV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBtYW55IGVudGl0aWVzIGludG8gdGhlIHN0b3JlXG4gICAqIEBwYXJhbSBlbnRpdGllcyBFbnRpdGllc1xuICAgKi9cbiAgaW5zZXJ0TWFueShlbnRpdGllczogRVtdKSB7XG4gICAgZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5OiBFKSA9PiB0aGlzLmluZGV4LnNldCh0aGlzLmdldEtleShlbnRpdHkpLCBlbnRpdHkpKTtcbiAgICB0aGlzLl9wcmlzdGluZSA9IGZhbHNlO1xuICAgIHRoaXMubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBvciBpbnNlcnQgYW4gZW50aXR5IGludG8gdGhlIHN0b3JlXG4gICAqIEBwYXJhbSBlbnRpdHkgRW50aXR5XG4gICAqL1xuICB1cGRhdGUoZW50aXR5OiBFKSB7XG4gICAgdGhpcy51cGRhdGVNYW55KFtlbnRpdHldKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgb3IgaW5zZXJ0IG1hbnkgZW50aXRpZXMgaW50byB0aGUgc3RvcmVcbiAgICogQHBhcmFtIGVudGl0aWVzIEVudGl0aWVzXG4gICAqL1xuICB1cGRhdGVNYW55KGVudGl0aWVzOiBFW10pIHtcbiAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHk6IEUpID0+IHRoaXMuaW5kZXguc2V0KHRoaXMuZ2V0S2V5KGVudGl0eSksIGVudGl0eSkpO1xuICAgIHRoaXMuX3ByaXN0aW5lID0gZmFsc2U7XG4gICAgdGhpcy5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFuIGVudGl0eSBmcm9tIHRoZSBzdG9yZVxuICAgKiBAcGFyYW0gZW50aXR5IEVudGl0eVxuICAgKi9cbiAgZGVsZXRlKGVudGl0eTogRSkge1xuICAgIHRoaXMuZGVsZXRlTWFueShbZW50aXR5XSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIG1hbnkgZW50aXRpZXMgZnJvbSB0aGUgc3RvcmVcbiAgICogQHBhcmFtIGVudGl0aWVzIEVudGl0aWVzXG4gICAqL1xuICBkZWxldGVNYW55KGVudGl0aWVzOiBFW10pIHtcbiAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHk6IEUpID0+IHRoaXMuaW5kZXguZGVsZXRlKHRoaXMuZ2V0S2V5KGVudGl0eSkpKTtcbiAgICB0aGlzLl9wcmlzdGluZSA9IGZhbHNlO1xuICAgIHRoaXMubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHN0cmF0ZWd5IHRvIHRoaXMgc3RvcmVcbiAgICogQHBhcmFtIHN0cmF0ZWd5IEVudGl0eSBzdG9yZSBzdHJhdGVneVxuICAgKiBAcmV0dXJucyBFbnRpdHkgc3RvcmVcbiAgICovXG4gIGFkZFN0cmF0ZWd5KHN0cmF0ZWd5OiBFbnRpdHlTdG9yZVN0cmF0ZWd5LCBhY3RpdmF0ZTogYm9vbGVhbiA9IGZhbHNlKTogRW50aXR5U3RvcmUge1xuICAgIGNvbnN0IGV4aXN0aW5nU3RyYXRlZ3kgPSB0aGlzLnN0cmF0ZWdpZXMuZmluZCgoX3N0cmF0ZWd5OiBFbnRpdHlTdG9yZVN0cmF0ZWd5KSA9PiB7XG4gICAgICByZXR1cm4gc3RyYXRlZ3kuY29uc3RydWN0b3IgPT09IF9zdHJhdGVneS5jb25zdHJ1Y3RvcjtcbiAgICB9KTtcbiAgICBpZiAoZXhpc3RpbmdTdHJhdGVneSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Egc3RyYXRlZ3kgb2YgdGhpcyB0eXBlIGFscmVhZHkgZXhpc3RzIG9uIHRoYXQgRW50aXR5U3RvcmUuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zdHJhdGVnaWVzLnB1c2goc3RyYXRlZ3kpO1xuICAgIHN0cmF0ZWd5LmJpbmRTdG9yZSh0aGlzKTtcblxuICAgIGlmIChhY3RpdmF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgc3RyYXRlZ3kuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzdHJhdGVneSBmcm9tIHRoaXMgc3RvcmVcbiAgICogQHBhcmFtIHN0cmF0ZWd5IEVudGl0eSBzdG9yZSBzdHJhdGVneVxuICAgKiBAcmV0dXJucyBFbnRpdHkgc3RvcmVcbiAgICovXG4gIHJlbW92ZVN0cmF0ZWd5KHN0cmF0ZWd5OiBFbnRpdHlTdG9yZVN0cmF0ZWd5KTogRW50aXR5U3RvcmUge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdHJhdGVnaWVzLmluZGV4T2Yoc3RyYXRlZ3kpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnN0cmF0ZWdpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHN0cmF0ZWd5LnVuYmluZFN0b3JlKHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gc3RyYXRlZ2llcyBvZiBhIGdpdmVuIHR5cGVcbiAgICogQHBhcmFtIHR5cGUgRW50aXR5IHN0b3JlIHN0cmF0ZWd5IGNsYXNzXG4gICAqIEByZXR1cm5zIFN0cmF0ZWdpZXNcbiAgICovXG4gIGdldFN0cmF0ZWd5T2ZUeXBlKHR5cGU6IHR5cGVvZiBFbnRpdHlTdG9yZVN0cmF0ZWd5KTogRW50aXR5U3RvcmVTdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyYXRlZ2llcy5maW5kKChzdHJhdGVneTogRW50aXR5U3RvcmVTdHJhdGVneSkgPT4ge1xuICAgICAgcmV0dXJuIHN0cmF0ZWd5IGluc3RhbmNlb2YgdHlwZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSBzdHJhdGVnaWVzIG9mIGEgZ2l2ZW4gdHlwZVxuICAgKiBAcGFyYW0gdHlwZSBFbnRpdHkgc3RvcmUgc3RyYXRlZ3kgY2xhc3NcbiAgICovXG4gIGFjdGl2YXRlU3RyYXRlZ3lPZlR5cGUodHlwZTogdHlwZW9mIEVudGl0eVN0b3JlU3RyYXRlZ3kpIHtcbiAgICBjb25zdCBzdHJhdGVneSA9IHRoaXMuZ2V0U3RyYXRlZ3lPZlR5cGUodHlwZSk7XG4gICAgaWYgKHN0cmF0ZWd5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0cmF0ZWd5LmFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGUgc3RyYXRlZ2llcyBvZiBhIGdpdmVuIHR5cGVcbiAgICogQHBhcmFtIHR5cGUgRW50aXR5IHN0b3JlIHN0cmF0ZWd5IGNsYXNzXG4gICAqL1xuICBkZWFjdGl2YXRlU3RyYXRlZ3lPZlR5cGUodHlwZTogdHlwZW9mIEVudGl0eVN0b3JlU3RyYXRlZ3kpIHtcbiAgICBjb25zdCBzdHJhdGVneSA9IHRoaXMuZ2V0U3RyYXRlZ3lPZlR5cGUodHlwZSk7XG4gICAgaWYgKHN0cmF0ZWd5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0cmF0ZWd5LmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgYSBjb21wbGV0ZSBpbmRleCBvZiBhbGwgdGhlIGVudGl0aWVzXG4gICAqIEBwYXJhbSBlbnRpdGllcyBFbnRpdGllc1xuICAgKiBAcmV0dXJucyBJbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZUluZGV4KGVudGl0aWVzOiBFW10pOiBNYXA8RW50aXR5S2V5LCBFPiB7XG4gICAgY29uc3QgZW50cmllcyA9IGVudGl0aWVzLm1hcCgoZW50aXR5OiBFKSA9PiBbdGhpcy5nZXRLZXkoZW50aXR5KSwgZW50aXR5XSk7XG4gICAgcmV0dXJuIG5ldyBNYXAoZW50cmllcyBhcyBbRW50aXR5S2V5LCBFXVtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIHRoZSBpbmRleCdzIGVudGl0aWVzIGludG8gdGhlIGVudGl0aWVzJCBvYnNlcnZhYmxlXG4gICAqL1xuICBwcml2YXRlIG5leHQoKSB7XG4gICAgdGhpcy5lbnRpdGllcyQubmV4dChBcnJheS5mcm9tKHRoaXMuaW5kZXgudmFsdWVzKCkpKTtcbiAgICB0aGlzLnVwZGF0ZUNvdW50KCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBzdG9yZSdzIGNvdW50IGFuZCBlbXB0eVxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVDb3VudCgpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuaW5kZXguc2l6ZTtcbiAgICBjb25zdCBlbXB0eSA9IGNvdW50ID09PSAwO1xuICAgIHRoaXMuY291bnQkLm5leHQoY291bnQpO1xuICAgIHRoaXMuZW1wdHkkLm5leHQoZW1wdHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgZW50aXR5IHN0YXRlIG1hbmFnZXJcbiAgICogQHJldHVybnMgRW50aXR5U3RhdGVNYW5hZ2VyXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVN0YXRlTWFuYWdlcigpIHtcbiAgICByZXR1cm4gbmV3IEVudGl0eVN0YXRlTWFuYWdlcjxFLCBTPih7c3RvcmU6IHRoaXN9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGRhdGEgdmlld1xuICAgKiBAcmV0dXJucyBFbnRpdHlWaWV3PEU+XG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZURhdGFWaWV3KCkge1xuICAgIHJldHVybiBuZXcgRW50aXR5VmlldzxFPih0aGlzLmVudGl0aWVzJCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBzdGF0ZSB2aWV3XG4gICAqIEByZXR1cm5zIEVudGl0eVZpZXc8RW50aXR5UmVjb3JkPEU+PlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVTdGF0ZVZpZXcoKSB7XG4gICAgcmV0dXJuIG5ldyBFbnRpdHlWaWV3PEUsIEVudGl0eVJlY29yZDxFLCBTPj4odGhpcy52aWV3LmFsbCQoKSlcbiAgICAgIC5qb2luKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLmNoYW5nZSQsXG4gICAgICAgIHJlZHVjZTogKGVudGl0eTogRSk6IEVudGl0eVJlY29yZDxFLCBTPiA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5nZXRLZXkoZW50aXR5KTtcbiAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUuZ2V0KGVudGl0eSk7XG4gICAgICAgICAgY29uc3QgY3VycmVudFJlY29yZCA9IHRoaXMuc3RhdGVWaWV3LmdldChrZXkpO1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY3VycmVudFJlY29yZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBjdXJyZW50UmVjb3JkLmVudGl0eSA9PT0gZW50aXR5ICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlc0FyZVRoZVNhbWUoY3VycmVudFJlY29yZC5zdGF0ZSwgc3RhdGUpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFJlY29yZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZXZpc2lvbiA9IGN1cnJlbnRSZWNvcmQgPyBjdXJyZW50UmVjb3JkLnJldmlzaW9uICsgMSA6IDE7XG4gICAgICAgICAgY29uc3QgcmVmID0gYCR7a2V5fS0ke3JldmlzaW9ufWA7XG4gICAgICAgICAgcmV0dXJuIHtlbnRpdHksIHN0YXRlLCByZXZpc2lvbiwgcmVmfTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jcmVhdGVJbmRleCgocmVjb3JkOiBFbnRpdHlSZWNvcmQ8RSwgUz4pID0+IHRoaXMuZ2V0S2V5KHJlY29yZC5lbnRpdHkpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGVzQXJlVGhlU2FtZShjdXJyZW50U3RhdGU6IFMsIG5ld1N0YXRlOiBTKTogYm9vbGVhbiB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gbmV3U3RhdGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZUlzRW1wdHkgPSBPYmplY3Qua2V5cyhjdXJyZW50U3RhdGUpLmxlbmd0aCA9PT0gMDtcbiAgICBjb25zdCBuZXdTdGF0ZUlzRW1wdHkgPSBPYmplY3Qua2V5cyhuZXdTdGF0ZSkubGVuZ3RoID09PSAwO1xuICAgIHJldHVybiBjdXJyZW50U3RhdGVJc0VtcHR5ICYmIG5ld1N0YXRlSXNFbXB0eTtcbiAgfVxuXG59XG4iXX0=