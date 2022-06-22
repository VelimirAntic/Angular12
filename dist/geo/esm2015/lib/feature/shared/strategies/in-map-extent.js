import * as olextent from 'ol/extent';
import { EntityStoreStrategy } from '@igo2/common';
import { skipWhile } from 'rxjs/operators';
/**
 * This strategy maintain the store features updated while the map is moved.
 * The features's state inside the map are tagged inMapExtent = true;
 */
export class FeatureStoreInMapExtentStrategy extends EntityStoreStrategy {
    constructor(options) {
        super(options);
        this.options = options;
        /**
         * Subscription to the store's OL source changes
         */
        this.stores$$ = new Map();
        this.states$$ = [];
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
            .pipe(skipWhile((empty) => !empty))
            .subscribe(() => this.updateEntitiesInExtent(store));
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
        this.updateEntitiesInExtent(store);
        this.states$$.push(store.layer.map.viewController.state$.subscribe(() => {
            this.updateEntitiesInExtent(store);
        }));
    }
    updateEntitiesInExtent(store) {
        var _a, _b;
        if ((_b = (_a = store === null || store === void 0 ? void 0 : store.layer) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.viewController) {
            store.state.updateAll({ inMapExtent: false });
            const mapExtent = store.layer.map.viewController.getExtent();
            let entitiesInMapExtent = [];
            let entitiesWithNoGeom = [];
            for (const entity of store.entities$.value) {
                if (entity.ol) {
                    if (olextent.intersects(entity.ol.getGeometry().getExtent(), mapExtent)) {
                        entitiesInMapExtent.push(entity);
                    }
                }
                else {
                    entitiesWithNoGeom.push(entity);
                }
            }
            if (entitiesInMapExtent.length > 0) {
                store.state.updateMany(entitiesInMapExtent, { inMapExtent: true }, false);
            }
            if (entitiesWithNoGeom.length > 0) {
                store.state.updateMany(entitiesWithNoGeom, { inMapExtent: true }, false);
            }
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
        this.states$$.map(state => state.unsubscribe());
        if (this.empty$$) {
            this.empty$$.unsubscribe();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWFwLWV4dGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZlYXR1cmUvc2hhcmVkL3N0cmF0ZWdpZXMvaW4tbWFwLWV4dGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUV0QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFLbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDOzs7R0FHRztBQUNILE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxtQkFBbUI7SUFTdEUsWUFBc0IsT0FBK0M7UUFDbkUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREssWUFBTyxHQUFQLE9BQU8sQ0FBd0M7UUFQckU7O1dBRUc7UUFDSyxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7UUFDM0MsYUFBUSxHQUFtQixFQUFFLENBQUM7SUFLdEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxLQUFtQjtRQUMzQixLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU07YUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxLQUFtQjtRQUM3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VUFBVTtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUFFO0lBQ25ELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG9sZXh0ZW50IGZyb20gJ29sL2V4dGVudCc7XG5cbmltcG9ydCB7IEVudGl0eVN0b3JlU3RyYXRlZ3kgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBGZWF0dXJlU3RvcmVJbk1hcEV4dGVudFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4uL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNraXBXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBUaGlzIHN0cmF0ZWd5IG1haW50YWluIHRoZSBzdG9yZSBmZWF0dXJlcyB1cGRhdGVkIHdoaWxlIHRoZSBtYXAgaXMgbW92ZWQuXG4gKiBUaGUgZmVhdHVyZXMncyBzdGF0ZSBpbnNpZGUgdGhlIG1hcCBhcmUgdGFnZ2VkIGluTWFwRXh0ZW50ID0gdHJ1ZTtcbiAqL1xuZXhwb3J0IGNsYXNzIEZlYXR1cmVTdG9yZUluTWFwRXh0ZW50U3RyYXRlZ3kgZXh0ZW5kcyBFbnRpdHlTdG9yZVN0cmF0ZWd5IHtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzdG9yZSdzIE9MIHNvdXJjZSBjaGFuZ2VzXG4gICAqL1xuICBwcml2YXRlIHN0b3JlcyQkID0gbmV3IE1hcDxGZWF0dXJlU3RvcmUsIHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBzdGF0ZXMkJDogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBlbXB0eSQkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdGlvbnM6IEZlYXR1cmVTdG9yZUluTWFwRXh0ZW50U3RyYXRlZ3lPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGlzIHN0cmF0ZWd5IHRvIGEgc3RvcmUgYW5kIHN0YXJ0IHdhdGNoaW5nIGZvciBPbCBzb3VyY2UgY2hhbmdlc1xuICAgKiBAcGFyYW0gc3RvcmUgRmVhdHVyZSBzdG9yZVxuICAgKi9cbiAgYmluZFN0b3JlKHN0b3JlOiBGZWF0dXJlU3RvcmUpIHtcbiAgICBzdXBlci5iaW5kU3RvcmUoc3RvcmUpO1xuICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy53YXRjaFN0b3JlKHN0b3JlKTtcbiAgICB9XG4gICAgdGhpcy5lbXB0eSQkID0gc3RvcmUuZW1wdHkkXG4gICAgICAucGlwZShza2lwV2hpbGUoKGVtcHR5KSA9PiAhZW1wdHkpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUVudGl0aWVzSW5FeHRlbnQoc3RvcmUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhpcyBzdHJhdGVneSBmcm9tIGEgc3RvcmUgYW5kIHN0b3Agd2F0Y2hpbmcgZm9yIE9sIHNvdXJjZSBjaGFuZ2VzXG4gICAqIEBwYXJhbSBzdG9yZSBGZWF0dXJlIHN0b3JlXG4gICAqL1xuICB1bmJpbmRTdG9yZShzdG9yZTogRmVhdHVyZVN0b3JlKSB7XG4gICAgc3VwZXIudW5iaW5kU3RvcmUoc3RvcmUpO1xuICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy51bndhdGNoU3RvcmUoc3RvcmUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB3YXRjaGluZyBhbGwgc3RvcmVzIGFscmVhZHkgYm91bmQgdG8gdGhhdCBzdHJhdGVneSBhdCBvbmNlLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBkb0FjdGl2YXRlKCkge1xuICAgIHRoaXMuc3RvcmVzLmZvckVhY2goKHN0b3JlOiBGZWF0dXJlU3RvcmUpID0+IHRoaXMud2F0Y2hTdG9yZShzdG9yZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agd2F0Y2hpbmcgYWxsIHN0b3JlcyBib3VuZCB0byB0aGF0IHN0cmF0ZWd5XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIGRvRGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnVud2F0Y2hBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCBmb3IgYSBzdG9yZSdzICBPTCBzb3VyY2UgY2hhbmdlc1xuICAgKiBAcGFyYW0gc3RvcmUgRmVhdHVyZSBzdG9yZVxuICAgKi9cbiAgcHJpdmF0ZSB3YXRjaFN0b3JlKHN0b3JlOiBGZWF0dXJlU3RvcmUpIHtcbiAgICBpZiAodGhpcy5zdG9yZXMkJC5oYXMoc3RvcmUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVFbnRpdGllc0luRXh0ZW50KHN0b3JlKTtcbiAgICB0aGlzLnN0YXRlcyQkLnB1c2goc3RvcmUubGF5ZXIubWFwLnZpZXdDb250cm9sbGVyLnN0YXRlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVFbnRpdGllc0luRXh0ZW50KHN0b3JlKTtcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVudGl0aWVzSW5FeHRlbnQoc3RvcmUpIHtcbiAgICBpZiAoc3RvcmU/LmxheWVyPy5tYXA/LnZpZXdDb250cm9sbGVyKSB7XG4gICAgICBzdG9yZS5zdGF0ZS51cGRhdGVBbGwoeyBpbk1hcEV4dGVudDogZmFsc2UgfSk7XG4gICAgICBjb25zdCBtYXBFeHRlbnQgPSBzdG9yZS5sYXllci5tYXAudmlld0NvbnRyb2xsZXIuZ2V0RXh0ZW50KCk7XG4gICAgICBsZXQgZW50aXRpZXNJbk1hcEV4dGVudCA9IFtdO1xuICAgICAgbGV0IGVudGl0aWVzV2l0aE5vR2VvbSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBlbnRpdHkgb2Ygc3RvcmUuZW50aXRpZXMkLnZhbHVlKSB7XG4gICAgICAgIGlmIChlbnRpdHkub2wpIHtcbiAgICAgICAgICBpZiAob2xleHRlbnQuaW50ZXJzZWN0cyhlbnRpdHkub2wuZ2V0R2VvbWV0cnkoKS5nZXRFeHRlbnQoKSwgbWFwRXh0ZW50KSkge1xuICAgICAgICAgICAgZW50aXRpZXNJbk1hcEV4dGVudC5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVudGl0aWVzV2l0aE5vR2VvbS5wdXNoKGVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChlbnRpdGllc0luTWFwRXh0ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc3RvcmUuc3RhdGUudXBkYXRlTWFueShlbnRpdGllc0luTWFwRXh0ZW50LCB7IGluTWFwRXh0ZW50OiB0cnVlIH0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbnRpdGllc1dpdGhOb0dlb20ubGVuZ3RoID4gMCkge1xuICAgICAgICBzdG9yZS5zdGF0ZS51cGRhdGVNYW55KGVudGl0aWVzV2l0aE5vR2VvbSwgeyBpbk1hcEV4dGVudDogdHJ1ZSB9LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agd2F0Y2hpbmcgZm9yIGEgc3RvcmUncyBPTCBzb3VyY2UgY2hhbmdlc1xuICAgKiBAcGFyYW0gc3RvcmUgRmVhdHVyZSBzdG9yZVxuICAgKi9cbiAgcHJpdmF0ZSB1bndhdGNoU3RvcmUoc3RvcmU6IEZlYXR1cmVTdG9yZSkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuc3RvcmVzJCQuZ2V0KHN0b3JlKTtcbiAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3RvcmVzJCQuZGVsZXRlKHN0b3JlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcCB3YXRjaGluZyBmb3IgT0wgc291cmNlIGNoYW5nZXMgaW4gYWxsIHN0b3Jlcy5cbiAgICovXG4gIHByaXZhdGUgdW53YXRjaEFsbCgpIHtcbiAgICB0aGlzLnN0b3JlcyQkLmNsZWFyKCk7XG4gICAgdGhpcy5zdGF0ZXMkJC5tYXAoc3RhdGUgPT4gc3RhdGUudW5zdWJzY3JpYmUoKSk7XG4gICAgaWYgKHRoaXMuZW1wdHkkJCkgeyB0aGlzLmVtcHR5JCQudW5zdWJzY3JpYmUoKTsgfVxuICB9XG59XG4iXX0=