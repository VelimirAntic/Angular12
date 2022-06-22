import { Injectable } from '@angular/core';
import { FeatureStore } from '@igo2/geo';
import * as i0 from "@angular/core";
import * as i1 from "../map/map.state";
/**
 * Service that holds the state of the measure module
 */
export class DrawState {
    constructor(mapState) {
        this.mapState = mapState;
        /**
         * Store that holds the measures
         */
        this.store = new FeatureStore([], {
            map: this.mapState.map
        });
        this.mapState.map.layers$.subscribe(() => {
            if (!this.mapState.map.getLayerById('igo-draw-layer')) {
                this.store.deleteMany(this.store.all());
            }
        });
    }
}
DrawState.ɵfac = function DrawState_Factory(t) { return new (t || DrawState)(i0.ɵɵinject(i1.MapState)); };
DrawState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DrawState, factory: DrawState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MapState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvZHJhdy9kcmF3LnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBVyxNQUFNLFdBQVcsQ0FBQzs7O0FBR2xEOztHQUVHO0FBSUgsTUFBTSxPQUFPLFNBQVM7SUFTcEIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVB0Qzs7V0FFRztRQUNJLFVBQUssR0FBMEIsSUFBSSxZQUFZLENBQVUsRUFBRSxFQUFFO1lBQ2xFLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUc7U0FDdkIsQ0FBQyxDQUFDO1FBSUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDekM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2tFQWhCVSxTQUFTOytEQUFULFNBQVMsV0FBVCxTQUFTLG1CQUZSLE1BQU07dUZBRVAsU0FBUztjQUhyQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZlYXR1cmVTdG9yZSwgRmVhdHVyZSB9IGZyb20gJ0BpZ28yL2dlbyc7XG5pbXBvcnQgeyBNYXBTdGF0ZSB9IGZyb20gJy4uL21hcC9tYXAuc3RhdGUnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBob2xkcyB0aGUgc3RhdGUgb2YgdGhlIG1lYXN1cmUgbW9kdWxlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERyYXdTdGF0ZSB7XG5cbiAgLyoqXG4gICAqIFN0b3JlIHRoYXQgaG9sZHMgdGhlIG1lYXN1cmVzXG4gICAqL1xuICBwdWJsaWMgc3RvcmU6IEZlYXR1cmVTdG9yZTxGZWF0dXJlPiA9IG5ldyBGZWF0dXJlU3RvcmU8RmVhdHVyZT4oW10sIHtcbiAgICBtYXA6IHRoaXMubWFwU3RhdGUubWFwXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwU3RhdGU6IE1hcFN0YXRlKSB7XG5cbiAgICB0aGlzLm1hcFN0YXRlLm1hcC5sYXllcnMkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMubWFwU3RhdGUubWFwLmdldExheWVyQnlJZCgnaWdvLWRyYXctbGF5ZXInKSkge1xuICAgICAgICB0aGlzLnN0b3JlLmRlbGV0ZU1hbnkodGhpcy5zdG9yZS5hbGwoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19