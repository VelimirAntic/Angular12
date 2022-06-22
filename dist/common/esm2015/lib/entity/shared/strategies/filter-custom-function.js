import { EntityStoreStrategy } from './strategy';
/**
 * When active, this strategy filters a store's stateView to return
 * selected entities only.
 */
export class EntityStoreFilterCustomFuncStrategy extends EntityStoreStrategy {
    constructor(options) {
        super(options);
        this.options = options;
        /**
         * Store / filter ids map
         */
        this.filters = new Map();
    }
    /**
     * Bind this strategy to a store and start filtering it
     * @param store Entity store
     */
    bindStore(store) {
        super.bindStore(store);
        if (this.active === true) {
            this.filterStore(store);
        }
    }
    /**
     * Unbind this strategy from a store and stop filtering it
     * @param store Entity store
     */
    unbindStore(store) {
        super.unbindStore(store);
        if (this.active === true) {
            this.unfilterStore(store);
        }
    }
    /**
     * Start filtering all stores
     * @internal
     */
    doActivate() {
        this.filterAll();
    }
    /**
     * Stop filtering all stores
     * @internal
     */
    doDeactivate() {
        this.unfilterAll();
    }
    /**
     * Filter all stores
     */
    filterAll() {
        this.stores.forEach((store) => this.filterStore(store));
    }
    /**
     * Unfilter all stores
     */
    unfilterAll() {
        this.stores.forEach((store) => this.unfilterStore(store));
    }
    /**
     * Filter a store and add it to the filters map
     */
    filterStore(store) {
        this.filters.set(store, store.stateView.addFilter(this.options.filterClauseFunc));
    }
    /**
     * Unfilter a store and delete it from the filters map
     */
    unfilterStore(store) {
        const filterId = this.filters.get(store);
        if (filterId === undefined) {
            return;
        }
        store.stateView.removeFilter(filterId);
        this.filters.delete(store);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWN1c3RvbS1mdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9zaGFyZWQvc3RyYXRlZ2llcy9maWx0ZXItY3VzdG9tLWZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVqRDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsbUJBQW1CO0lBRTFFLFlBQXNCLE9BQXVDO1FBQzNELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURLLFlBQU8sR0FBUCxPQUFPLENBQWdDO1FBSTdEOztXQUVHO1FBQ0ssWUFBTyxHQUE2QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBTHRELENBQUM7SUFPRDs7O09BR0c7SUFDSCxTQUFTLENBQUMsS0FBa0I7UUFDMUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLEtBQWtCO1FBQzVCLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFVBQVU7UUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7O09BR0c7SUFDTyxZQUFZO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxTQUFTO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOztPQUVHO0lBQ0ssV0FBVztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7O09BRUc7SUFDSyxXQUFXLENBQUMsS0FBa0I7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRDs7T0FFRztJQUNLLGFBQWEsQ0FBQyxLQUFrQjtRQUN0QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5U3RvcmVTdHJhdGVneUZ1bmNPcHRpb25zIH0gZnJvbSAnLi4vZW50aXR5LmludGVyZmFjZXMnO1xuaW1wb3J0IHsgRW50aXR5U3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBFbnRpdHlTdG9yZVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneSc7XG5cbi8qKlxuICogV2hlbiBhY3RpdmUsIHRoaXMgc3RyYXRlZ3kgZmlsdGVycyBhIHN0b3JlJ3Mgc3RhdGVWaWV3IHRvIHJldHVyblxuICogc2VsZWN0ZWQgZW50aXRpZXMgb25seS5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudGl0eVN0b3JlRmlsdGVyQ3VzdG9tRnVuY1N0cmF0ZWd5IGV4dGVuZHMgRW50aXR5U3RvcmVTdHJhdGVneSB7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdGlvbnM6IEVudGl0eVN0b3JlU3RyYXRlZ3lGdW5jT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIC8gZmlsdGVyIGlkcyBtYXBcbiAgICovXG4gIHByaXZhdGUgZmlsdGVyczogTWFwPEVudGl0eVN0b3JlLCBzdHJpbmc+ID0gbmV3IE1hcCgpO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRoaXMgc3RyYXRlZ3kgdG8gYSBzdG9yZSBhbmQgc3RhcnQgZmlsdGVyaW5nIGl0XG4gICAqIEBwYXJhbSBzdG9yZSBFbnRpdHkgc3RvcmVcbiAgICovXG4gIGJpbmRTdG9yZShzdG9yZTogRW50aXR5U3RvcmUpIHtcbiAgICBzdXBlci5iaW5kU3RvcmUoc3RvcmUpO1xuICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5maWx0ZXJTdG9yZShzdG9yZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGlzIHN0cmF0ZWd5IGZyb20gYSBzdG9yZSBhbmQgc3RvcCBmaWx0ZXJpbmcgaXRcbiAgICogQHBhcmFtIHN0b3JlIEVudGl0eSBzdG9yZVxuICAgKi9cbiAgdW5iaW5kU3RvcmUoc3RvcmU6IEVudGl0eVN0b3JlKSB7XG4gICAgc3VwZXIudW5iaW5kU3RvcmUoc3RvcmUpO1xuICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy51bmZpbHRlclN0b3JlKHN0b3JlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgZmlsdGVyaW5nIGFsbCBzdG9yZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcm90ZWN0ZWQgZG9BY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZpbHRlckFsbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgZmlsdGVyaW5nIGFsbCBzdG9yZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcm90ZWN0ZWQgZG9EZWFjdGl2YXRlKCkge1xuICAgIHRoaXMudW5maWx0ZXJBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgYWxsIHN0b3Jlc1xuICAgKi9cbiAgcHJpdmF0ZSBmaWx0ZXJBbGwoKSB7XG4gICAgdGhpcy5zdG9yZXMuZm9yRWFjaCgoc3RvcmU6IEVudGl0eVN0b3JlKSA9PiB0aGlzLmZpbHRlclN0b3JlKHN0b3JlKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5maWx0ZXIgYWxsIHN0b3Jlc1xuICAgKi9cbiAgcHJpdmF0ZSB1bmZpbHRlckFsbCgpIHtcbiAgICB0aGlzLnN0b3Jlcy5mb3JFYWNoKChzdG9yZTogRW50aXR5U3RvcmUpID0+IHRoaXMudW5maWx0ZXJTdG9yZShzdG9yZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhIHN0b3JlIGFuZCBhZGQgaXQgdG8gdGhlIGZpbHRlcnMgbWFwXG4gICAqL1xuICBwcml2YXRlIGZpbHRlclN0b3JlKHN0b3JlOiBFbnRpdHlTdG9yZSkge1xuICAgIHRoaXMuZmlsdGVycy5zZXQoc3RvcmUsIHN0b3JlLnN0YXRlVmlldy5hZGRGaWx0ZXIodGhpcy5vcHRpb25zLmZpbHRlckNsYXVzZUZ1bmMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmZpbHRlciBhIHN0b3JlIGFuZCBkZWxldGUgaXQgZnJvbSB0aGUgZmlsdGVycyBtYXBcbiAgICovXG4gIHByaXZhdGUgdW5maWx0ZXJTdG9yZShzdG9yZTogRW50aXR5U3RvcmUpIHtcbiAgICBjb25zdCBmaWx0ZXJJZCA9IHRoaXMuZmlsdGVycy5nZXQoc3RvcmUpO1xuICAgIGlmIChmaWx0ZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RvcmUuc3RhdGVWaWV3LnJlbW92ZUZpbHRlcihmaWx0ZXJJZCk7XG4gICAgdGhpcy5maWx0ZXJzLmRlbGV0ZShzdG9yZSk7XG4gIH1cbn1cbiJdfQ==