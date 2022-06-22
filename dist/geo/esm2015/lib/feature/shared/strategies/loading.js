import { EntityStoreStrategy } from '@igo2/common';
import { FeatureMotion } from '../feature.enums';
/**
 * This strategy loads a store's features into it's layer counterpart.
 * The store -> layer binding is a one-way binding. That means any entity
 * added to the store will be added to the layer but the opposite is false.
 *
 * Important: This strategy observes filtered entities, not raw entities. This
 * is not configurable yet.
 */
export class FeatureStoreLoadingStrategy extends EntityStoreStrategy {
    constructor(options) {
        super(options);
        this.options = options;
        /**
         * Subscription to the store's features
         */
        this.stores$$ = new Map();
        this.setMotion(options.motion);
    }
    /**
     * Bind this strategy to a store and start watching for entities changes
     * @param store Feature store
     */
    bindStore(store) {
        super.bindStore(store);
        if (this.active === true) {
            this.watchStore(store);
        }
    }
    /**
     * Unbind this strategy from a store and stop watching for entities changes
     * @param store Feature store
     */
    unbindStore(store) {
        super.unbindStore(store);
        if (this.active === true) {
            this.unwatchStore(store);
        }
    }
    /**
     * Define the motion to apply on load
     * @param motion Feature motion
     */
    setMotion(motion) {
        this.motion = motion;
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
     * Watch for entities changes in a store.
     * Important: Never observe a store's sorted entities. It makes no sense
     * to display sorted entities (instead of unsorted) on a layer and it
     * would potentially result in a lot of useless computation.
     * @param store Feature store
     */
    watchStore(store) {
        if (this.stores$$.has(store)) {
            return;
        }
        const subscription = store.view.all$()
            .subscribe((features) => this.onFeaturesChange(features, store));
        this.stores$$.set(store, subscription);
    }
    /**
     * Stop watching for entities changes in a store.
     * @param store Feature store
     */
    unwatchStore(store) {
        const subscription = this.stores$$.get(store);
        if (subscription !== undefined) {
            subscription.unsubscribe();
            this.stores$$.delete(store);
        }
    }
    /**
     * Stop watching for entities changes in all stores.
     */
    unwatchAll() {
        Array.from(this.stores$$.entries()).forEach((entries) => {
            entries[1].unsubscribe();
        });
        this.stores$$.clear();
    }
    /**
     * Load features into a layer or clear the layer if the array of features is empty.
     * @param features Store filtered features
     * @param store Feature store
     */
    onFeaturesChange(features, store) {
        if (features.length === 0) {
            store.clearLayer();
        }
        else {
            store.setLayerFeatures(features, this.selectMotion(store), this.options.viewScale, this.options.areaRatio, this.options.getFeatureId);
        }
    }
    /**
     * Selects the best motion
     * @param store A FeatureStore to apply the motion
     * @returns The motion selected
     */
    selectMotion(store) {
        if (this.motion !== undefined) {
            return this.motion;
        }
        if (store.pristine === true) {
            // If features have just been loaded into the store, move/zoom on them
            return FeatureMotion.Default;
        }
        else if (store.count > store.view.count) {
            // If features have been filtered, move/zoom on the remaining ones
            return FeatureMotion.Default;
        }
        else {
            // On insert, update or delete, do nothing
            return FeatureMotion.None;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZlYXR1cmUvc2hhcmVkL3N0cmF0ZWdpZXMvbG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSWpEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsbUJBQW1CO0lBU2xFLFlBQXNCLE9BQTJDO1FBQy9ELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURLLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBUGpFOztXQUVHO1FBQ0ssYUFBUSxHQUFHLElBQUksR0FBRyxFQUE4QixDQUFDO1FBTXZELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxTQUFTLENBQUMsS0FBbUI7UUFDM0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLEtBQW1CO1FBQzdCLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxNQUFxQjtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sVUFBVTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sWUFBWTtRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLFVBQVUsQ0FBQyxLQUFtQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2FBQ25DLFNBQVMsQ0FBQyxDQUFDLFFBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFlBQVksQ0FBQyxLQUFtQjtRQUN0QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDOUIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ssVUFBVTtRQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFxQyxFQUFFLEVBQUU7WUFDcEYsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGdCQUFnQixDQUFDLFFBQW1CLEVBQUUsS0FBbUI7UUFDL0QsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6QixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLEtBQUssQ0FBQyxnQkFBZ0IsQ0FDcEIsUUFBUSxFQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQzFCLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssWUFBWSxDQUFDLEtBQW1CO1FBQ3RDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FBRTtRQUV0RCxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzNCLHNFQUFzRTtZQUN0RSxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7U0FDOUI7YUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDekMsa0VBQWtFO1lBQ2xFLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQztTQUM5QjthQUFNO1lBQ0wsMENBQTBDO1lBQzFDLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQztTQUMzQjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFbnRpdHlTdG9yZVN0cmF0ZWd5IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vdGlvbiB9IGZyb20gJy4uL2ZlYXR1cmUuZW51bXMnO1xuaW1wb3J0IHsgRmVhdHVyZSwgRmVhdHVyZVN0b3JlTG9hZGluZ1N0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4uL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBGZWF0dXJlU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbi8qKlxuICogVGhpcyBzdHJhdGVneSBsb2FkcyBhIHN0b3JlJ3MgZmVhdHVyZXMgaW50byBpdCdzIGxheWVyIGNvdW50ZXJwYXJ0LlxuICogVGhlIHN0b3JlIC0+IGxheWVyIGJpbmRpbmcgaXMgYSBvbmUtd2F5IGJpbmRpbmcuIFRoYXQgbWVhbnMgYW55IGVudGl0eVxuICogYWRkZWQgdG8gdGhlIHN0b3JlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGxheWVyIGJ1dCB0aGUgb3Bwb3NpdGUgaXMgZmFsc2UuXG4gKlxuICogSW1wb3J0YW50OiBUaGlzIHN0cmF0ZWd5IG9ic2VydmVzIGZpbHRlcmVkIGVudGl0aWVzLCBub3QgcmF3IGVudGl0aWVzLiBUaGlzXG4gKiBpcyBub3QgY29uZmlndXJhYmxlIHlldC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZlYXR1cmVTdG9yZUxvYWRpbmdTdHJhdGVneSBleHRlbmRzIEVudGl0eVN0b3JlU3RyYXRlZ3kge1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIHN0b3JlJ3MgZmVhdHVyZXNcbiAgICovXG4gIHByaXZhdGUgc3RvcmVzJCQgPSBuZXcgTWFwPEZlYXR1cmVTdG9yZSwgU3Vic2NyaXB0aW9uPigpO1xuXG4gIHByaXZhdGUgbW90aW9uOiBGZWF0dXJlTW90aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcHRpb25zOiBGZWF0dXJlU3RvcmVMb2FkaW5nU3RyYXRlZ3lPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zZXRNb3Rpb24ob3B0aW9ucy5tb3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhpcyBzdHJhdGVneSB0byBhIHN0b3JlIGFuZCBzdGFydCB3YXRjaGluZyBmb3IgZW50aXRpZXMgY2hhbmdlc1xuICAgKiBAcGFyYW0gc3RvcmUgRmVhdHVyZSBzdG9yZVxuICAgKi9cbiAgYmluZFN0b3JlKHN0b3JlOiBGZWF0dXJlU3RvcmUpIHtcbiAgICBzdXBlci5iaW5kU3RvcmUoc3RvcmUpO1xuICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy53YXRjaFN0b3JlKHN0b3JlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoaXMgc3RyYXRlZ3kgZnJvbSBhIHN0b3JlIGFuZCBzdG9wIHdhdGNoaW5nIGZvciBlbnRpdGllcyBjaGFuZ2VzXG4gICAqIEBwYXJhbSBzdG9yZSBGZWF0dXJlIHN0b3JlXG4gICAqL1xuICB1bmJpbmRTdG9yZShzdG9yZTogRmVhdHVyZVN0b3JlKSB7XG4gICAgc3VwZXIudW5iaW5kU3RvcmUoc3RvcmUpO1xuICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy51bndhdGNoU3RvcmUoc3RvcmUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIG1vdGlvbiB0byBhcHBseSBvbiBsb2FkXG4gICAqIEBwYXJhbSBtb3Rpb24gRmVhdHVyZSBtb3Rpb25cbiAgICovXG4gIHNldE1vdGlvbihtb3Rpb246IEZlYXR1cmVNb3Rpb24pIHtcbiAgICB0aGlzLm1vdGlvbiA9IG1vdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB3YXRjaGluZyBhbGwgc3RvcmVzIGFscmVhZHkgYm91bmQgdG8gdGhhdCBzdHJhdGVneSBhdCBvbmNlLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBkb0FjdGl2YXRlKCkge1xuICAgIHRoaXMuc3RvcmVzLmZvckVhY2goKHN0b3JlOiBGZWF0dXJlU3RvcmUpID0+IHRoaXMud2F0Y2hTdG9yZShzdG9yZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agd2F0Y2hpbmcgYWxsIHN0b3JlcyBib3VuZCB0byB0aGF0IHN0cmF0ZWd5XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIGRvRGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnVud2F0Y2hBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCBmb3IgZW50aXRpZXMgY2hhbmdlcyBpbiBhIHN0b3JlLlxuICAgKiBJbXBvcnRhbnQ6IE5ldmVyIG9ic2VydmUgYSBzdG9yZSdzIHNvcnRlZCBlbnRpdGllcy4gSXQgbWFrZXMgbm8gc2Vuc2VcbiAgICogdG8gZGlzcGxheSBzb3J0ZWQgZW50aXRpZXMgKGluc3RlYWQgb2YgdW5zb3J0ZWQpIG9uIGEgbGF5ZXIgYW5kIGl0XG4gICAqIHdvdWxkIHBvdGVudGlhbGx5IHJlc3VsdCBpbiBhIGxvdCBvZiB1c2VsZXNzIGNvbXB1dGF0aW9uLlxuICAgKiBAcGFyYW0gc3RvcmUgRmVhdHVyZSBzdG9yZVxuICAgKi9cbiAgcHJpdmF0ZSB3YXRjaFN0b3JlKHN0b3JlOiBGZWF0dXJlU3RvcmUpIHtcbiAgICBpZiAodGhpcy5zdG9yZXMkJC5oYXMoc3RvcmUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gc3RvcmUudmlldy5hbGwkKClcbiAgICAgIC5zdWJzY3JpYmUoKGZlYXR1cmVzOiBGZWF0dXJlW10pID0+IHRoaXMub25GZWF0dXJlc0NoYW5nZShmZWF0dXJlcywgc3RvcmUpKTtcbiAgICB0aGlzLnN0b3JlcyQkLnNldChzdG9yZSwgc3Vic2NyaXB0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHdhdGNoaW5nIGZvciBlbnRpdGllcyBjaGFuZ2VzIGluIGEgc3RvcmUuXG4gICAqIEBwYXJhbSBzdG9yZSBGZWF0dXJlIHN0b3JlXG4gICAqL1xuICBwcml2YXRlIHVud2F0Y2hTdG9yZShzdG9yZTogRmVhdHVyZVN0b3JlKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5zdG9yZXMkJC5nZXQoc3RvcmUpO1xuICAgIGlmIChzdWJzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnN0b3JlcyQkLmRlbGV0ZShzdG9yZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agd2F0Y2hpbmcgZm9yIGVudGl0aWVzIGNoYW5nZXMgaW4gYWxsIHN0b3Jlcy5cbiAgICovXG4gIHByaXZhdGUgdW53YXRjaEFsbCgpIHtcbiAgICBBcnJheS5mcm9tKHRoaXMuc3RvcmVzJCQuZW50cmllcygpKS5mb3JFYWNoKChlbnRyaWVzOiBbRmVhdHVyZVN0b3JlLCBTdWJzY3JpcHRpb25dKSA9PiB7XG4gICAgICBlbnRyaWVzWzFdLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdG9yZXMkJC5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgZmVhdHVyZXMgaW50byBhIGxheWVyIG9yIGNsZWFyIHRoZSBsYXllciBpZiB0aGUgYXJyYXkgb2YgZmVhdHVyZXMgaXMgZW1wdHkuXG4gICAqIEBwYXJhbSBmZWF0dXJlcyBTdG9yZSBmaWx0ZXJlZCBmZWF0dXJlc1xuICAgKiBAcGFyYW0gc3RvcmUgRmVhdHVyZSBzdG9yZVxuICAgKi9cbiAgcHJpdmF0ZSBvbkZlYXR1cmVzQ2hhbmdlKGZlYXR1cmVzOiBGZWF0dXJlW10sIHN0b3JlOiBGZWF0dXJlU3RvcmUpIHtcbiAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdG9yZS5jbGVhckxheWVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlLnNldExheWVyRmVhdHVyZXMoXG4gICAgICAgIGZlYXR1cmVzLFxuICAgICAgICB0aGlzLnNlbGVjdE1vdGlvbihzdG9yZSksXG4gICAgICAgIHRoaXMub3B0aW9ucy52aWV3U2NhbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy5hcmVhUmF0aW8sXG4gICAgICAgIHRoaXMub3B0aW9ucy5nZXRGZWF0dXJlSWRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIGJlc3QgbW90aW9uXG4gICAqIEBwYXJhbSBzdG9yZSBBIEZlYXR1cmVTdG9yZSB0byBhcHBseSB0aGUgbW90aW9uXG4gICAqIEByZXR1cm5zIFRoZSBtb3Rpb24gc2VsZWN0ZWRcbiAgICovXG4gIHByaXZhdGUgc2VsZWN0TW90aW9uKHN0b3JlOiBGZWF0dXJlU3RvcmUpIHtcbiAgICBpZiAodGhpcy5tb3Rpb24gIT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdGhpcy5tb3Rpb247IH1cblxuICAgIGlmIChzdG9yZS5wcmlzdGluZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gSWYgZmVhdHVyZXMgaGF2ZSBqdXN0IGJlZW4gbG9hZGVkIGludG8gdGhlIHN0b3JlLCBtb3ZlL3pvb20gb24gdGhlbVxuICAgICAgcmV0dXJuIEZlYXR1cmVNb3Rpb24uRGVmYXVsdDtcbiAgICB9IGVsc2UgaWYgKHN0b3JlLmNvdW50ID4gc3RvcmUudmlldy5jb3VudCkge1xuICAgICAgLy8gSWYgZmVhdHVyZXMgaGF2ZSBiZWVuIGZpbHRlcmVkLCBtb3ZlL3pvb20gb24gdGhlIHJlbWFpbmluZyBvbmVzXG4gICAgICByZXR1cm4gRmVhdHVyZU1vdGlvbi5EZWZhdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPbiBpbnNlcnQsIHVwZGF0ZSBvciBkZWxldGUsIGRvIG5vdGhpbmdcbiAgICAgIHJldHVybiBGZWF0dXJlTW90aW9uLk5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0=