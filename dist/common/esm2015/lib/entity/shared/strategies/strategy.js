import { BehaviorSubject } from 'rxjs';
/**
 * Entity store strategies. They can do pretty much anything during a store's
 * lifetime. For example, they may act as triggers when something happens.
 * Sharing a strategy is a good idea when multiple strategies would have
 * on cancelling effect on each other.
 *
 * At creation, strategy is inactive and needs to be manually activated.
 */
export class EntityStoreStrategy {
    constructor(options = {}) {
        this.options = options;
        /**
         * Feature store
         * @internal
         */
        this.stores = [];
        this.active$ = new BehaviorSubject(false);
        this.options = options;
    }
    /**
     * Whether this strategy is active
     * @internal
     */
    get active() { return this.active$.value; }
    /**
     * Activate the strategy. If it's already active, it'll be deactivated
     * and activated again.
     */
    activate() {
        if (this.active === true) {
            this.doDeactivate();
        }
        this.active$.next(true);
        this.doActivate();
    }
    /**
     * Activate the strategy. If it's already active, it'll be deactivated
     * and activated again.
     */
    deactivate() {
        this.active$.next(false);
        this.doDeactivate();
    }
    /**
     * Bind this strategy to a store
     * @param store Feature store
     */
    bindStore(store) {
        if (this.stores.indexOf(store) < 0) {
            this.stores.push(store);
        }
    }
    /**
     * Unbind this strategy from store
     * @param store Feature store
     */
    unbindStore(store) {
        const index = this.stores.indexOf(store);
        if (index >= 0) {
            this.stores.splice(index, 1);
        }
    }
    /**
     * Do the stataegy activation
     * @internal
     */
    doActivate() { }
    /**
     * Do the strategy deactivation
     * @internal
     */
    doDeactivate() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9lbnRpdHkvc2hhcmVkL3N0cmF0ZWdpZXMvc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUt2Qzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFPLG1CQUFtQjtJQWU5QixZQUFzQixVQUFzQyxFQUFFO1FBQXhDLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBYjlEOzs7V0FHRztRQUNPLFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBTzVCLFlBQU8sR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQVREOzs7T0FHRztJQUNILElBQUksTUFBTSxLQUFjLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBT3BEOzs7T0FHRztJQUNILFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLEtBQWtCO1FBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxLQUFrQjtRQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sVUFBVSxLQUFJLENBQUM7SUFFekI7OztPQUdHO0lBQ08sWUFBWSxLQUFJLENBQUM7Q0FFNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRW50aXR5U3RvcmVTdHJhdGVneU9wdGlvbnMgfSBmcm9tICcuLi9lbnRpdHkuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBFbnRpdHlTdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcblxuLyoqXG4gKiBFbnRpdHkgc3RvcmUgc3RyYXRlZ2llcy4gVGhleSBjYW4gZG8gcHJldHR5IG11Y2ggYW55dGhpbmcgZHVyaW5nIGEgc3RvcmUnc1xuICogbGlmZXRpbWUuIEZvciBleGFtcGxlLCB0aGV5IG1heSBhY3QgYXMgdHJpZ2dlcnMgd2hlbiBzb21ldGhpbmcgaGFwcGVucy5cbiAqIFNoYXJpbmcgYSBzdHJhdGVneSBpcyBhIGdvb2QgaWRlYSB3aGVuIG11bHRpcGxlIHN0cmF0ZWdpZXMgd291bGQgaGF2ZVxuICogb24gY2FuY2VsbGluZyBlZmZlY3Qgb24gZWFjaCBvdGhlci5cbiAqXG4gKiBBdCBjcmVhdGlvbiwgc3RyYXRlZ3kgaXMgaW5hY3RpdmUgYW5kIG5lZWRzIHRvIGJlIG1hbnVhbGx5IGFjdGl2YXRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudGl0eVN0b3JlU3RyYXRlZ3kge1xuXG4gIC8qKlxuICAgKiBGZWF0dXJlIHN0b3JlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIHN0b3JlczogRW50aXR5U3RvcmVbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgc3RyYXRlZ3kgaXMgYWN0aXZlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuYWN0aXZlJC52YWx1ZTsgfVxuICByZWFkb25seSBhY3RpdmUkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3B0aW9uczogRW50aXR5U3RvcmVTdHJhdGVneU9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGUgdGhlIHN0cmF0ZWd5LiBJZiBpdCdzIGFscmVhZHkgYWN0aXZlLCBpdCdsbCBiZSBkZWFjdGl2YXRlZFxuICAgKiBhbmQgYWN0aXZhdGVkIGFnYWluLlxuICAgKi9cbiAgYWN0aXZhdGUoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRvRGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRvQWN0aXZhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSB0aGUgc3RyYXRlZ3kuIElmIGl0J3MgYWxyZWFkeSBhY3RpdmUsIGl0J2xsIGJlIGRlYWN0aXZhdGVkXG4gICAqIGFuZCBhY3RpdmF0ZWQgYWdhaW4uXG4gICAqL1xuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuYWN0aXZlJC5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLmRvRGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhpcyBzdHJhdGVneSB0byBhIHN0b3JlXG4gICAqIEBwYXJhbSBzdG9yZSBGZWF0dXJlIHN0b3JlXG4gICAqL1xuICBiaW5kU3RvcmUoc3RvcmU6IEVudGl0eVN0b3JlKSB7XG4gICAgaWYgKHRoaXMuc3RvcmVzLmluZGV4T2Yoc3RvcmUpIDwgMCkge1xuICAgICAgdGhpcy5zdG9yZXMucHVzaChzdG9yZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGlzIHN0cmF0ZWd5IGZyb20gc3RvcmVcbiAgICogQHBhcmFtIHN0b3JlIEZlYXR1cmUgc3RvcmVcbiAgICovXG4gIHVuYmluZFN0b3JlKHN0b3JlOiBFbnRpdHlTdG9yZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdG9yZXMuaW5kZXhPZihzdG9yZSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuc3RvcmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvIHRoZSBzdGF0YWVneSBhY3RpdmF0aW9uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIGRvQWN0aXZhdGUoKSB7fVxuXG4gIC8qKlxuICAgKiBEbyB0aGUgc3RyYXRlZ3kgZGVhY3RpdmF0aW9uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIGRvRGVhY3RpdmF0ZSgpIHt9XG5cbn1cbiJdfQ==