import { Injectable } from '@angular/core';
import { StopsStore, StopsFeatureStore, RoutesFeatureStore, StepFeatureStore } from '@igo2/geo';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../map/map.state";
/**
 * Service that holds the state of the direction module
 */
export class DirectionState {
    constructor(mapState) {
        this.mapState = mapState;
        this.zoomToActiveRoute$ = new Subject();
        /**
         * Store that holds the stop
         */
        this.stopsStore = new StopsStore([]);
        /**
         * Store that holds the driving stops as feature
         */
        this.stopsFeatureStore = new StopsFeatureStore([], {
            map: this.mapState.map
        });
        /**
         * Store that holds the driving route as feature
         */
        this.routesFeatureStore = new RoutesFeatureStore([], {
            map: this.mapState.map
        });
        this.stepFeatureStore = new StepFeatureStore([], {
            map: this.mapState.map
        });
        this.debounceTime = 200;
        this.mapState.map.ol.once('rendercomplete', () => {
            this.stopsFeatureStore.empty$.subscribe((empty) => {
                var _a;
                if ((_a = this.stopsFeatureStore.layer) === null || _a === void 0 ? void 0 : _a.options) {
                    this.stopsFeatureStore.layer.options.showInLayerList = !empty;
                }
            });
            this.routesFeatureStore.empty$.subscribe((empty) => {
                var _a;
                if ((_a = this.routesFeatureStore.layer) === null || _a === void 0 ? void 0 : _a.options) {
                    this.routesFeatureStore.layer.options.showInLayerList = !empty;
                }
            });
        });
        this.mapState.map.layers$.subscribe(() => {
            if (!this.mapState.map.getLayerById('igo-direction-stops-layer')) {
                this.stopsStore.deleteMany(this.stopsStore.all());
                this.stopsFeatureStore.deleteMany(this.stopsFeatureStore.all()); // not necessary
            }
            if (!this.mapState.map.getLayerById('igo-direction-route-layer')) {
                this.routesFeatureStore.deleteMany(this.routesFeatureStore.all());
            }
        });
    }
}
DirectionState.ɵfac = function DirectionState_Factory(t) { return new (t || DirectionState)(i0.ɵɵinject(i1.MapState)); };
DirectionState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DirectionState, factory: DirectionState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectionState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MapState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9ucy5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvZGlyZWN0aW9ucy9kaXJlY3Rpb25zLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFtQixVQUFVLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRy9COztHQUVHO0FBSUgsTUFBTSxPQUFPLGNBQWM7SUE2QnpCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUEzQi9CLHVCQUFrQixHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXpEOztXQUVHO1FBQ0ksZUFBVSxHQUFlLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5EOztXQUVHO1FBQ0ksc0JBQWlCLEdBQXNCLElBQUksaUJBQWlCLENBQUMsRUFBRSxFQUFFO1lBQ3RFLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUc7U0FDdkIsQ0FBQyxDQUFDO1FBRUg7O1dBRUc7UUFDSSx1QkFBa0IsR0FBdUIsSUFBSSxrQkFBa0IsQ0FBQyxFQUFFLEVBQUU7WUFDekUsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRztTQUN2QixDQUFDLENBQUM7UUFFSSxxQkFBZ0IsR0FBcUIsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUU7WUFDbkUsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRztTQUN2QixDQUFDLENBQUM7UUFFSSxpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUloQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtZQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFOztnQkFDaEQsSUFBSSxNQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLDBDQUFFLE9BQU8sRUFBRTtvQkFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUEyQixDQUFDLGVBQWUsR0FBRyxDQUFDLEtBQUssQ0FBQztpQkFDcEY7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7O2dCQUNqRCxJQUFJLE1BQUEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssMENBQUUsT0FBTyxFQUFFO29CQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLE9BQTJCLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDO2lCQUNyRjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUFDLEVBQUU7Z0JBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjthQUNsRjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUNuRTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NEVBckRVLGNBQWM7b0VBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRmIsTUFBTTt1RkFFUCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW55TGF5ZXJPcHRpb25zLCBTdG9wc1N0b3JlLCBTdG9wc0ZlYXR1cmVTdG9yZSwgUm91dGVzRmVhdHVyZVN0b3JlLCBTdGVwRmVhdHVyZVN0b3JlIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1hcFN0YXRlIH0gZnJvbSAnLi4vbWFwL21hcC5zdGF0ZSc7XG5cbi8qKlxuICogU2VydmljZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSBvZiB0aGUgZGlyZWN0aW9uIG1vZHVsZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3Rpb25TdGF0ZSB7XG5cbiAgcHVibGljIHpvb21Ub0FjdGl2ZVJvdXRlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqXG4gICAqIFN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0b3BcbiAgICovXG4gIHB1YmxpYyBzdG9wc1N0b3JlOiBTdG9wc1N0b3JlID0gbmV3IFN0b3BzU3RvcmUoW10pO1xuXG4gIC8qKlxuICAgKiBTdG9yZSB0aGF0IGhvbGRzIHRoZSBkcml2aW5nIHN0b3BzIGFzIGZlYXR1cmVcbiAgICovXG4gIHB1YmxpYyBzdG9wc0ZlYXR1cmVTdG9yZTogU3RvcHNGZWF0dXJlU3RvcmUgPSBuZXcgU3RvcHNGZWF0dXJlU3RvcmUoW10sIHtcbiAgICBtYXA6IHRoaXMubWFwU3RhdGUubWFwXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBTdG9yZSB0aGF0IGhvbGRzIHRoZSBkcml2aW5nIHJvdXRlIGFzIGZlYXR1cmVcbiAgICovXG4gIHB1YmxpYyByb3V0ZXNGZWF0dXJlU3RvcmU6IFJvdXRlc0ZlYXR1cmVTdG9yZSA9IG5ldyBSb3V0ZXNGZWF0dXJlU3RvcmUoW10sIHtcbiAgICBtYXA6IHRoaXMubWFwU3RhdGUubWFwXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGVwRmVhdHVyZVN0b3JlOiBTdGVwRmVhdHVyZVN0b3JlID0gbmV3IFN0ZXBGZWF0dXJlU3RvcmUoW10sIHtcbiAgICBtYXA6IHRoaXMubWFwU3RhdGUubWFwXG4gIH0pO1xuXG4gIHB1YmxpYyBkZWJvdW5jZVRpbWU6IG51bWJlciA9IDIwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcFN0YXRlOiBNYXBTdGF0ZSkge1xuXG4gICAgdGhpcy5tYXBTdGF0ZS5tYXAub2wub25jZSgncmVuZGVyY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLmVtcHR5JC5zdWJzY3JpYmUoKGVtcHR5KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLmxheWVyPy5vcHRpb25zKSB7XG4gICAgICAgICAgKHRoaXMuc3RvcHNGZWF0dXJlU3RvcmUubGF5ZXIub3B0aW9ucyBhcyBBbnlMYXllck9wdGlvbnMpLnNob3dJbkxheWVyTGlzdCA9ICFlbXB0eTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnJvdXRlc0ZlYXR1cmVTdG9yZS5lbXB0eSQuc3Vic2NyaWJlKChlbXB0eSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXNGZWF0dXJlU3RvcmUubGF5ZXI/Lm9wdGlvbnMpIHtcbiAgICAgICAgICAodGhpcy5yb3V0ZXNGZWF0dXJlU3RvcmUubGF5ZXIub3B0aW9ucyBhcyBBbnlMYXllck9wdGlvbnMpLnNob3dJbkxheWVyTGlzdCA9ICFlbXB0eTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1hcFN0YXRlLm1hcC5sYXllcnMkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMubWFwU3RhdGUubWFwLmdldExheWVyQnlJZCgnaWdvLWRpcmVjdGlvbi1zdG9wcy1sYXllcicpKSB7XG4gICAgICAgIHRoaXMuc3RvcHNTdG9yZS5kZWxldGVNYW55KHRoaXMuc3RvcHNTdG9yZS5hbGwoKSk7XG4gICAgICAgIHRoaXMuc3RvcHNGZWF0dXJlU3RvcmUuZGVsZXRlTWFueSh0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLmFsbCgpKTsgLy8gbm90IG5lY2Vzc2FyeVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLm1hcFN0YXRlLm1hcC5nZXRMYXllckJ5SWQoJ2lnby1kaXJlY3Rpb24tcm91dGUtbGF5ZXInKSkge1xuICAgICAgICB0aGlzLnJvdXRlc0ZlYXR1cmVTdG9yZS5kZWxldGVNYW55KHRoaXMucm91dGVzRmVhdHVyZVN0b3JlLmFsbCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=