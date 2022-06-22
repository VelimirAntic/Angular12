import { Injectable } from '@angular/core';
import { FeatureStore } from '@igo2/geo';
import * as i0 from "@angular/core";
import * as i1 from "../map/map.state";
/**
 * Service that holds the state of the measure module
 */
export class MeasureState {
    constructor(mapState) {
        this.mapState = mapState;
        /**
         * Store that holds the measures
         */
        this.store = new FeatureStore([], {
            map: this.mapState.map
        });
        this.mapState.map.layers$.subscribe((layers) => {
            if ((layers.filter(l => l.id.startsWith('igo-measures-')).length === 0)) {
                this.store.deleteMany(this.store.all());
                this.mapState.map.ol.getOverlays().getArray()
                    .filter(overlay => overlay.options.className.includes('igo-map-tooltip'))
                    .map(overlay => this.mapState.map.ol.removeOverlay(overlay));
            }
        });
    }
}
MeasureState.ɵfac = function MeasureState_Factory(t) { return new (t || MeasureState)(i0.ɵɵinject(i1.MapState)); };
MeasureState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MeasureState, factory: MeasureState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeasureState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MapState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvbWVhc3VyZS9tZWFzdXJlLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBc0IsTUFBTSxXQUFXLENBQUM7OztBQUc3RDs7R0FFRztBQUlILE1BQU0sT0FBTyxZQUFZO0lBU3ZCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFQdEM7O1dBRUc7UUFDSSxVQUFLLEdBQXFDLElBQUksWUFBWSxDQUFxQixFQUFFLEVBQUU7WUFDeEYsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRztTQUN2QixDQUFDLENBQUM7UUFJRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFO3FCQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBRSxPQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztxQkFDakYsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt3RUFuQlUsWUFBWTtrRUFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO3VGQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGZWF0dXJlU3RvcmUsIEZlYXR1cmVXaXRoTWVhc3VyZSB9IGZyb20gJ0BpZ28yL2dlbyc7XG5pbXBvcnQgeyBNYXBTdGF0ZSB9IGZyb20gJy4uL21hcC9tYXAuc3RhdGUnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBob2xkcyB0aGUgc3RhdGUgb2YgdGhlIG1lYXN1cmUgbW9kdWxlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1lYXN1cmVTdGF0ZSB7XG5cbiAgLyoqXG4gICAqIFN0b3JlIHRoYXQgaG9sZHMgdGhlIG1lYXN1cmVzXG4gICAqL1xuICBwdWJsaWMgc3RvcmU6IEZlYXR1cmVTdG9yZTxGZWF0dXJlV2l0aE1lYXN1cmU+ID0gbmV3IEZlYXR1cmVTdG9yZTxGZWF0dXJlV2l0aE1lYXN1cmU+KFtdLCB7XG4gICAgbWFwOiB0aGlzLm1hcFN0YXRlLm1hcFxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcFN0YXRlOiBNYXBTdGF0ZSkge1xuXG4gICAgdGhpcy5tYXBTdGF0ZS5tYXAubGF5ZXJzJC5zdWJzY3JpYmUoKGxheWVycykgPT4ge1xuICAgICAgaWYgKChsYXllcnMuZmlsdGVyKGwgPT4gbC5pZC5zdGFydHNXaXRoKCdpZ28tbWVhc3VyZXMtJykpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kZWxldGVNYW55KHRoaXMuc3RvcmUuYWxsKCkpO1xuICAgICAgICB0aGlzLm1hcFN0YXRlLm1hcC5vbC5nZXRPdmVybGF5cygpLmdldEFycmF5KClcbiAgICAgICAgICAuZmlsdGVyKG92ZXJsYXkgPT4gKG92ZXJsYXkgYXMgYW55KS5vcHRpb25zLmNsYXNzTmFtZS5pbmNsdWRlcygnaWdvLW1hcC10b29sdGlwJykpXG4gICAgICAgICAgLm1hcChvdmVybGF5ID0+IHRoaXMubWFwU3RhdGUubWFwLm9sLnJlbW92ZU92ZXJsYXkob3ZlcmxheSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==