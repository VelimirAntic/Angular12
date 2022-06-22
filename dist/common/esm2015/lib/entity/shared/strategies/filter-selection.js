import { EntityStoreStrategy } from './strategy';
/**
 * When active, this strategy filters a store's stateView to return
 * selected entities only.
 */
export class EntityStoreFilterSelectionStrategy extends EntityStoreStrategy {
    constructor() {
        super(...arguments);
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
        if (this.filters.has(store)) {
            return;
        }
        const filter = (record) => {
            return record.state.selected === true;
        };
        this.filters.set(store, store.stateView.addFilter(filter));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXNlbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9zaGFyZWQvc3RyYXRlZ2llcy9maWx0ZXItc2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVqRDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsbUJBQW1CO0lBQTNFOztRQUVFOztXQUVHO1FBQ0ssWUFBTyxHQUE2QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBZ0Z4RCxDQUFDO0lBOUVDOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxLQUFrQjtRQUMxQixLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsS0FBa0I7UUFDNUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sVUFBVTtRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFlBQVk7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNLLFNBQVM7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7O09BRUc7SUFDSyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7T0FFRztJQUNLLFdBQVcsQ0FBQyxLQUFrQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU87U0FDUjtRQUVELE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBNEIsRUFBRSxFQUFFO1lBQzlDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDO1FBQ3hDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNLLGFBQWEsQ0FBQyxLQUFrQjtRQUN0QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5UmVjb3JkIH0gZnJvbSAnLi4vZW50aXR5LmludGVyZmFjZXMnO1xuaW1wb3J0IHsgRW50aXR5U3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBFbnRpdHlTdG9yZVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneSc7XG5cbi8qKlxuICogV2hlbiBhY3RpdmUsIHRoaXMgc3RyYXRlZ3kgZmlsdGVycyBhIHN0b3JlJ3Mgc3RhdGVWaWV3IHRvIHJldHVyblxuICogc2VsZWN0ZWQgZW50aXRpZXMgb25seS5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudGl0eVN0b3JlRmlsdGVyU2VsZWN0aW9uU3RyYXRlZ3kgZXh0ZW5kcyBFbnRpdHlTdG9yZVN0cmF0ZWd5IHtcblxuICAvKipcbiAgICogU3RvcmUgLyBmaWx0ZXIgaWRzIG1hcFxuICAgKi9cbiAgcHJpdmF0ZSBmaWx0ZXJzOiBNYXA8RW50aXR5U3RvcmUsIHN0cmluZz4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhpcyBzdHJhdGVneSB0byBhIHN0b3JlIGFuZCBzdGFydCBmaWx0ZXJpbmcgaXRcbiAgICogQHBhcmFtIHN0b3JlIEVudGl0eSBzdG9yZVxuICAgKi9cbiAgYmluZFN0b3JlKHN0b3JlOiBFbnRpdHlTdG9yZSkge1xuICAgIHN1cGVyLmJpbmRTdG9yZShzdG9yZSk7XG4gICAgaWYgKHRoaXMuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmZpbHRlclN0b3JlKHN0b3JlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoaXMgc3RyYXRlZ3kgZnJvbSBhIHN0b3JlIGFuZCBzdG9wIGZpbHRlcmluZyBpdFxuICAgKiBAcGFyYW0gc3RvcmUgRW50aXR5IHN0b3JlXG4gICAqL1xuICB1bmJpbmRTdG9yZShzdG9yZTogRW50aXR5U3RvcmUpIHtcbiAgICBzdXBlci51bmJpbmRTdG9yZShzdG9yZSk7XG4gICAgaWYgKHRoaXMuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnVuZmlsdGVyU3RvcmUoc3RvcmUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBmaWx0ZXJpbmcgYWxsIHN0b3Jlc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBkb0FjdGl2YXRlKCkge1xuICAgIHRoaXMuZmlsdGVyQWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBmaWx0ZXJpbmcgYWxsIHN0b3Jlc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBkb0RlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy51bmZpbHRlckFsbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhbGwgc3RvcmVzXG4gICAqL1xuICBwcml2YXRlIGZpbHRlckFsbCgpIHtcbiAgICB0aGlzLnN0b3Jlcy5mb3JFYWNoKChzdG9yZTogRW50aXR5U3RvcmUpID0+IHRoaXMuZmlsdGVyU3RvcmUoc3RvcmUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmZpbHRlciBhbGwgc3RvcmVzXG4gICAqL1xuICBwcml2YXRlIHVuZmlsdGVyQWxsKCkge1xuICAgIHRoaXMuc3RvcmVzLmZvckVhY2goKHN0b3JlOiBFbnRpdHlTdG9yZSkgPT4gdGhpcy51bmZpbHRlclN0b3JlKHN0b3JlKSk7XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIGEgc3RvcmUgYW5kIGFkZCBpdCB0byB0aGUgZmlsdGVycyBtYXBcbiAgICovXG4gIHByaXZhdGUgZmlsdGVyU3RvcmUoc3RvcmU6IEVudGl0eVN0b3JlKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVycy5oYXMoc3RvcmUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyID0gKHJlY29yZDogRW50aXR5UmVjb3JkPG9iamVjdD4pID0+IHtcbiAgICAgIHJldHVybiByZWNvcmQuc3RhdGUuc2VsZWN0ZWQgPT09IHRydWU7XG4gICAgfTtcbiAgICB0aGlzLmZpbHRlcnMuc2V0KHN0b3JlLCBzdG9yZS5zdGF0ZVZpZXcuYWRkRmlsdGVyKGZpbHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuZmlsdGVyIGEgc3RvcmUgYW5kIGRlbGV0ZSBpdCBmcm9tIHRoZSBmaWx0ZXJzIG1hcFxuICAgKi9cbiAgcHJpdmF0ZSB1bmZpbHRlclN0b3JlKHN0b3JlOiBFbnRpdHlTdG9yZSkge1xuICAgIGNvbnN0IGZpbHRlcklkID0gdGhpcy5maWx0ZXJzLmdldChzdG9yZSk7XG4gICAgaWYgKGZpbHRlcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdG9yZS5zdGF0ZVZpZXcucmVtb3ZlRmlsdGVyKGZpbHRlcklkKTtcbiAgICB0aGlzLmZpbHRlcnMuZGVsZXRlKHN0b3JlKTtcbiAgfVxufVxuIl19