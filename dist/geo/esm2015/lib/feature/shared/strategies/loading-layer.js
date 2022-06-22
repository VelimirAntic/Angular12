import { EntityStoreStrategy } from '@igo2/common';
import { ClusterDataSource } from '../../../datasource/shared/datasources/cluster-datasource';
/**
 * This strategy loads a layer's features into it's store counterpart.
 * The layer -> store binding is a one-way binding. That means any OL feature
 * added to the layer will be added to the store but the opposite is false.
 *
 * Important: In it's current state, this strategy is to meant to be combined
 * with a standard Loading strategy and it would probably cause recursion issues.
 */
export class FeatureStoreLoadingLayerStrategy extends EntityStoreStrategy {
    constructor(options) {
        super(options);
        this.options = options;
        /**
         * Subscription to the store's OL source changes
         */
        this.stores$$ = new Map();
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
        this.onSourceChanges(store);
        const olSource = store.layer.ol.getSource();
        olSource.on('change', (event) => {
            this.onSourceChanges(store);
        });
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
        Array.from(this.stores$$.entries()).forEach((entries) => {
        });
        this.stores$$.clear();
    }
    /**
     * Load features from an OL source into a  store or clear the store if the source is empty
     * @param features Store filtered features
     * @param store Feature store
     */
    onSourceChanges(store) {
        let olFeatures = store.layer.ol.getSource().getFeatures();
        if (store.layer.dataSource instanceof ClusterDataSource) {
            olFeatures = olFeatures.flatMap((cluster) => cluster.get('features'));
        }
        if (olFeatures.length === 0) {
            store.clear();
        }
        else {
            store.setStoreOlFeatures(olFeatures);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZlYXR1cmUvc2hhcmVkL3N0cmF0ZWdpZXMvbG9hZGluZy1sYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFJbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFOUY7Ozs7Ozs7R0FPRztBQUNILE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxtQkFBbUI7SUFPdkUsWUFBc0IsT0FBZ0Q7UUFDcEUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREssWUFBTyxHQUFQLE9BQU8sQ0FBeUM7UUFMdEU7O1dBRUc7UUFDSyxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUFJbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxLQUFtQjtRQUMzQixLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsS0FBbUI7UUFDN0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sVUFBVTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sWUFBWTtRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFVBQVUsQ0FBQyxLQUFtQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFlBQVksQ0FBQyxLQUFtQjtRQUN0QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxVQUFVO1FBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQStCLEVBQUUsRUFBRTtRQUNoRixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxlQUFlLENBQUMsS0FBbUI7UUFDekMsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUQsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsWUFBWSxpQkFBaUIsRUFBRTtZQUN2RCxVQUFVLEdBQUksVUFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRSxDQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUN4QixDQUFDO1NBQ0g7UUFDRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNmO2FBQU07WUFDTCxLQUFLLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT2xFdmVudCBmcm9tICdvbC9ldmVudHMvRXZlbnQnO1xuXG5pbXBvcnQgeyBFbnRpdHlTdG9yZVN0cmF0ZWd5IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZVN0b3JlTG9hZGluZ0xheWVyU3RyYXRlZ3lPcHRpb25zIH0gZnJvbSAnLi4vZmVhdHVyZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IENsdXN0ZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvY2x1c3Rlci1kYXRhc291cmNlJztcblxuLyoqXG4gKiBUaGlzIHN0cmF0ZWd5IGxvYWRzIGEgbGF5ZXIncyBmZWF0dXJlcyBpbnRvIGl0J3Mgc3RvcmUgY291bnRlcnBhcnQuXG4gKiBUaGUgbGF5ZXIgLT4gc3RvcmUgYmluZGluZyBpcyBhIG9uZS13YXkgYmluZGluZy4gVGhhdCBtZWFucyBhbnkgT0wgZmVhdHVyZVxuICogYWRkZWQgdG8gdGhlIGxheWVyIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHN0b3JlIGJ1dCB0aGUgb3Bwb3NpdGUgaXMgZmFsc2UuXG4gKlxuICogSW1wb3J0YW50OiBJbiBpdCdzIGN1cnJlbnQgc3RhdGUsIHRoaXMgc3RyYXRlZ3kgaXMgdG8gbWVhbnQgdG8gYmUgY29tYmluZWRcbiAqIHdpdGggYSBzdGFuZGFyZCBMb2FkaW5nIHN0cmF0ZWd5IGFuZCBpdCB3b3VsZCBwcm9iYWJseSBjYXVzZSByZWN1cnNpb24gaXNzdWVzLlxuICovXG5leHBvcnQgY2xhc3MgRmVhdHVyZVN0b3JlTG9hZGluZ0xheWVyU3RyYXRlZ3kgZXh0ZW5kcyBFbnRpdHlTdG9yZVN0cmF0ZWd5IHtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzdG9yZSdzIE9MIHNvdXJjZSBjaGFuZ2VzXG4gICAqL1xuICBwcml2YXRlIHN0b3JlcyQkID0gbmV3IE1hcDxGZWF0dXJlU3RvcmUsIHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3B0aW9uczogRmVhdHVyZVN0b3JlTG9hZGluZ0xheWVyU3RyYXRlZ3lPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGlzIHN0cmF0ZWd5IHRvIGEgc3RvcmUgYW5kIHN0YXJ0IHdhdGNoaW5nIGZvciBPbCBzb3VyY2UgY2hhbmdlc1xuICAgKiBAcGFyYW0gc3RvcmUgRmVhdHVyZSBzdG9yZVxuICAgKi9cbiAgYmluZFN0b3JlKHN0b3JlOiBGZWF0dXJlU3RvcmUpIHtcbiAgICBzdXBlci5iaW5kU3RvcmUoc3RvcmUpO1xuICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy53YXRjaFN0b3JlKHN0b3JlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoaXMgc3RyYXRlZ3kgZnJvbSBhIHN0b3JlIGFuZCBzdG9wIHdhdGNoaW5nIGZvciBPbCBzb3VyY2UgY2hhbmdlc1xuICAgKiBAcGFyYW0gc3RvcmUgRmVhdHVyZSBzdG9yZVxuICAgKi9cbiAgdW5iaW5kU3RvcmUoc3RvcmU6IEZlYXR1cmVTdG9yZSkge1xuICAgIHN1cGVyLnVuYmluZFN0b3JlKHN0b3JlKTtcbiAgICBpZiAodGhpcy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMudW53YXRjaFN0b3JlKHN0b3JlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgd2F0Y2hpbmcgYWxsIHN0b3JlcyBhbHJlYWR5IGJvdW5kIHRvIHRoYXQgc3RyYXRlZ3kgYXQgb25jZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcm90ZWN0ZWQgZG9BY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnN0b3Jlcy5mb3JFYWNoKChzdG9yZTogRmVhdHVyZVN0b3JlKSA9PiB0aGlzLndhdGNoU3RvcmUoc3RvcmUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHdhdGNoaW5nIGFsbCBzdG9yZXMgYm91bmQgdG8gdGhhdCBzdHJhdGVneVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBkb0RlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy51bndhdGNoQWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggZm9yIGEgc3RvcmUncyAgT0wgc291cmNlIGNoYW5nZXNcbiAgICogQHBhcmFtIHN0b3JlIEZlYXR1cmUgc3RvcmVcbiAgICovXG4gIHByaXZhdGUgd2F0Y2hTdG9yZShzdG9yZTogRmVhdHVyZVN0b3JlKSB7XG4gICAgaWYgKHRoaXMuc3RvcmVzJCQuaGFzKHN0b3JlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25Tb3VyY2VDaGFuZ2VzKHN0b3JlKTtcbiAgICBjb25zdCBvbFNvdXJjZSA9IHN0b3JlLmxheWVyLm9sLmdldFNvdXJjZSgpO1xuICAgIG9sU291cmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IE9sRXZlbnQpID0+IHtcbiAgICAgIHRoaXMub25Tb3VyY2VDaGFuZ2VzKHN0b3JlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHdhdGNoaW5nIGZvciBhIHN0b3JlJ3MgT0wgc291cmNlIGNoYW5nZXNcbiAgICogQHBhcmFtIHN0b3JlIEZlYXR1cmUgc3RvcmVcbiAgICovXG4gIHByaXZhdGUgdW53YXRjaFN0b3JlKHN0b3JlOiBGZWF0dXJlU3RvcmUpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnN0b3JlcyQkLmdldChzdG9yZSk7XG4gICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0b3JlcyQkLmRlbGV0ZShzdG9yZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agd2F0Y2hpbmcgZm9yIE9MIHNvdXJjZSBjaGFuZ2VzIGluIGFsbCBzdG9yZXMuXG4gICAqL1xuICBwcml2YXRlIHVud2F0Y2hBbGwoKSB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLnN0b3JlcyQkLmVudHJpZXMoKSkuZm9yRWFjaCgoZW50cmllczogW0ZlYXR1cmVTdG9yZSwgc3RyaW5nXSkgPT4ge1xuICAgIH0pO1xuICAgIHRoaXMuc3RvcmVzJCQuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGZlYXR1cmVzIGZyb20gYW4gT0wgc291cmNlIGludG8gYSAgc3RvcmUgb3IgY2xlYXIgdGhlIHN0b3JlIGlmIHRoZSBzb3VyY2UgaXMgZW1wdHlcbiAgICogQHBhcmFtIGZlYXR1cmVzIFN0b3JlIGZpbHRlcmVkIGZlYXR1cmVzXG4gICAqIEBwYXJhbSBzdG9yZSBGZWF0dXJlIHN0b3JlXG4gICAqL1xuICBwcml2YXRlIG9uU291cmNlQ2hhbmdlcyhzdG9yZTogRmVhdHVyZVN0b3JlKSB7XG4gICAgbGV0IG9sRmVhdHVyZXMgPSBzdG9yZS5sYXllci5vbC5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuXG4gICAgaWYgKHN0b3JlLmxheWVyLmRhdGFTb3VyY2UgaW5zdGFuY2VvZiBDbHVzdGVyRGF0YVNvdXJjZSkge1xuICAgICAgb2xGZWF0dXJlcyA9IChvbEZlYXR1cmVzIGFzIGFueSkuZmxhdE1hcCgoY2x1c3RlcjogYW55KSA9PlxuICAgICAgICBjbHVzdGVyLmdldCgnZmVhdHVyZXMnKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKG9sRmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdG9yZS5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdG9yZS5zZXRTdG9yZU9sRmVhdHVyZXMob2xGZWF0dXJlcyk7XG4gICAgfVxuICB9XG59XG4iXX0=