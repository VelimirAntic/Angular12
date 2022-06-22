import { EntityStoreStrategy } from '@igo2/common';
/**
 * This strategy maintain the store features updated while the map is scrolled.
 * The features's state inside the map's resolution are tagged inMapResolution = true;
 */
export class FeatureStoreInMapResolutionStrategy extends EntityStoreStrategy {
    constructor(options) {
        super(options);
        this.options = options;
        /**
         * Subscription to the store's OL source changes
         */
        this.stores$$ = new Map();
        this.resolution$$ = [];
    }
    /**
     * Bind this strategy to a store and start watching for Ol source changes
     * @param store Feature store
     */
    bindStore(store) {
        super.bindStore(store);
        if (this.active === true) {
            this.watchStore(store);
        }
        this.empty$$ = store.empty$
            .subscribe(() => this.updateEntitiesInResolution(store, store.layer.map.viewController.getResolution()));
    }
    /**
     * Unbind this strategy from a store and stop watching for Ol source changes
     * @param store Feature store
     */
    unbindStore(store) {
        super.unbindStore(store);
        if (this.active === true) {
            this.unwatchStore(store);
        }
    }
    /**
     * Start watching all stores already bound to that strategy at once.
     * @internal
     */
    doActivate() {
        this.stores.forEach((store) => this.watchStore(store));
    }
    /**
     * Stop watching all stores bound to that strategy
     * @internal
     */
    doDeactivate() {
        this.unwatchAll();
    }
    /**
     * Watch for a store's  OL source changes
     * @param store Feature store
     */
    watchStore(store) {
        if (this.stores$$.has(store)) {
            return;
        }
        this.updateEntitiesInResolution(store, store.layer.map.viewController.getResolution());
        this.resolution$$.push(store.layer.map.viewController.resolution$.subscribe((res) => {
            this.updateEntitiesInResolution(store, res);
        }));
    }
    updateEntitiesInResolution(store, mapResolution) {
        if (mapResolution > store.layer.minResolution && mapResolution < store.layer.maxResolution) {
            store.state.updateAll({ inMapResolution: true });
        }
        else {
            store.state.updateAll({ inMapResolution: false });
        }
    }
    /**
     * Stop watching for a store's OL source changes
     * @param store Feature store
     */
    unwatchStore(store) {
        const key = this.stores$$.get(store);
        if (key !== undefined) {
            this.stores$$.delete(store);
        }
    }
    /**
     * Stop watching for OL source changes in all stores.
     */
    unwatchAll() {
        this.stores$$.clear();
        this.resolution$$.map(state => state.unsubscribe());
        if (this.empty$$) {
            this.empty$$.unsubscribe();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWFwLXJlc29sdXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9mZWF0dXJlL3NoYXJlZC9zdHJhdGVnaWVzL2luLW1hcC1yZXNvbHV0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU9uRDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsbUJBQW1CO0lBUzFFLFlBQXNCLE9BQW1EO1FBQ3ZFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURLLFlBQU8sR0FBUCxPQUFPLENBQTRDO1FBUHpFOztXQUVHO1FBQ0ssYUFBUSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO1FBQzNDLGlCQUFZLEdBQW1CLEVBQUUsQ0FBQztJQUsxQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLEtBQW1CO1FBQzNCLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTTthQUN4QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsS0FBbUI7UUFDN0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sVUFBVTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sWUFBWTtRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFVBQVUsQ0FBQyxLQUFtQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNsRixJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRU8sMEJBQTBCLENBQUMsS0FBSyxFQUFFLGFBQXFCO1FBQzdELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUMxRixLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDTCxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFlBQVksQ0FBQyxLQUFtQjtRQUN0QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQUU7SUFDbkQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5U3RvcmVTdHJhdGVneSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVTdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IEZlYXR1cmVTdG9yZUluTWFwUmVzb2x1dGlvblN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4uL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuXG4vKipcbiAqIFRoaXMgc3RyYXRlZ3kgbWFpbnRhaW4gdGhlIHN0b3JlIGZlYXR1cmVzIHVwZGF0ZWQgd2hpbGUgdGhlIG1hcCBpcyBzY3JvbGxlZC5cbiAqIFRoZSBmZWF0dXJlcydzIHN0YXRlIGluc2lkZSB0aGUgbWFwJ3MgcmVzb2x1dGlvbiBhcmUgdGFnZ2VkIGluTWFwUmVzb2x1dGlvbiA9IHRydWU7XG4gKi9cbmV4cG9ydCBjbGFzcyBGZWF0dXJlU3RvcmVJbk1hcFJlc29sdXRpb25TdHJhdGVneSBleHRlbmRzIEVudGl0eVN0b3JlU3RyYXRlZ3kge1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIHN0b3JlJ3MgT0wgc291cmNlIGNoYW5nZXNcbiAgICovXG4gIHByaXZhdGUgc3RvcmVzJCQgPSBuZXcgTWFwPEZlYXR1cmVTdG9yZSwgc3RyaW5nPigpO1xuICBwcml2YXRlIHJlc29sdXRpb24kJDogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBlbXB0eSQkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdGlvbnM6IEZlYXR1cmVTdG9yZUluTWFwUmVzb2x1dGlvblN0cmF0ZWd5T3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhpcyBzdHJhdGVneSB0byBhIHN0b3JlIGFuZCBzdGFydCB3YXRjaGluZyBmb3IgT2wgc291cmNlIGNoYW5nZXNcbiAgICogQHBhcmFtIHN0b3JlIEZlYXR1cmUgc3RvcmVcbiAgICovXG4gIGJpbmRTdG9yZShzdG9yZTogRmVhdHVyZVN0b3JlKSB7XG4gICAgc3VwZXIuYmluZFN0b3JlKHN0b3JlKTtcbiAgICBpZiAodGhpcy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMud2F0Y2hTdG9yZShzdG9yZSk7XG4gICAgfVxuICAgIHRoaXMuZW1wdHkkJCA9IHN0b3JlLmVtcHR5JFxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUVudGl0aWVzSW5SZXNvbHV0aW9uKHN0b3JlLCBzdG9yZS5sYXllci5tYXAudmlld0NvbnRyb2xsZXIuZ2V0UmVzb2x1dGlvbigpKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoaXMgc3RyYXRlZ3kgZnJvbSBhIHN0b3JlIGFuZCBzdG9wIHdhdGNoaW5nIGZvciBPbCBzb3VyY2UgY2hhbmdlc1xuICAgKiBAcGFyYW0gc3RvcmUgRmVhdHVyZSBzdG9yZVxuICAgKi9cbiAgdW5iaW5kU3RvcmUoc3RvcmU6IEZlYXR1cmVTdG9yZSkge1xuICAgIHN1cGVyLnVuYmluZFN0b3JlKHN0b3JlKTtcbiAgICBpZiAodGhpcy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMudW53YXRjaFN0b3JlKHN0b3JlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgd2F0Y2hpbmcgYWxsIHN0b3JlcyBhbHJlYWR5IGJvdW5kIHRvIHRoYXQgc3RyYXRlZ3kgYXQgb25jZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcm90ZWN0ZWQgZG9BY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnN0b3Jlcy5mb3JFYWNoKChzdG9yZTogRmVhdHVyZVN0b3JlKSA9PiB0aGlzLndhdGNoU3RvcmUoc3RvcmUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHdhdGNoaW5nIGFsbCBzdG9yZXMgYm91bmQgdG8gdGhhdCBzdHJhdGVneVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBkb0RlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy51bndhdGNoQWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggZm9yIGEgc3RvcmUncyAgT0wgc291cmNlIGNoYW5nZXNcbiAgICogQHBhcmFtIHN0b3JlIEZlYXR1cmUgc3RvcmVcbiAgICovXG4gIHByaXZhdGUgd2F0Y2hTdG9yZShzdG9yZTogRmVhdHVyZVN0b3JlKSB7XG4gICAgaWYgKHRoaXMuc3RvcmVzJCQuaGFzKHN0b3JlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRW50aXRpZXNJblJlc29sdXRpb24oc3RvcmUsIHN0b3JlLmxheWVyLm1hcC52aWV3Q29udHJvbGxlci5nZXRSZXNvbHV0aW9uKCkpO1xuICAgIHRoaXMucmVzb2x1dGlvbiQkLnB1c2goc3RvcmUubGF5ZXIubWFwLnZpZXdDb250cm9sbGVyLnJlc29sdXRpb24kLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUVudGl0aWVzSW5SZXNvbHV0aW9uKHN0b3JlLCByZXMpO1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRW50aXRpZXNJblJlc29sdXRpb24oc3RvcmUsIG1hcFJlc29sdXRpb246IG51bWJlcikge1xuICAgIGlmIChtYXBSZXNvbHV0aW9uID4gc3RvcmUubGF5ZXIubWluUmVzb2x1dGlvbiAmJiBtYXBSZXNvbHV0aW9uIDwgc3RvcmUubGF5ZXIubWF4UmVzb2x1dGlvbikge1xuICAgICAgc3RvcmUuc3RhdGUudXBkYXRlQWxsKHsgaW5NYXBSZXNvbHV0aW9uOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdG9yZS5zdGF0ZS51cGRhdGVBbGwoeyBpbk1hcFJlc29sdXRpb246IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHdhdGNoaW5nIGZvciBhIHN0b3JlJ3MgT0wgc291cmNlIGNoYW5nZXNcbiAgICogQHBhcmFtIHN0b3JlIEZlYXR1cmUgc3RvcmVcbiAgICovXG4gIHByaXZhdGUgdW53YXRjaFN0b3JlKHN0b3JlOiBGZWF0dXJlU3RvcmUpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnN0b3JlcyQkLmdldChzdG9yZSk7XG4gICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0b3JlcyQkLmRlbGV0ZShzdG9yZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agd2F0Y2hpbmcgZm9yIE9MIHNvdXJjZSBjaGFuZ2VzIGluIGFsbCBzdG9yZXMuXG4gICAqL1xuICBwcml2YXRlIHVud2F0Y2hBbGwoKSB7XG4gICAgdGhpcy5zdG9yZXMkJC5jbGVhcigpO1xuICAgIHRoaXMucmVzb2x1dGlvbiQkLm1hcChzdGF0ZSA9PiBzdGF0ZS51bnN1YnNjcmliZSgpKTtcbiAgICBpZiAodGhpcy5lbXB0eSQkKSB7IHRoaXMuZW1wdHkkJC51bnN1YnNjcmliZSgpOyB9XG4gIH1cbn1cbiJdfQ==