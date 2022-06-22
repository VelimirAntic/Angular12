import { Injectable } from '@angular/core';
import { IgoMap } from '@igo2/geo';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/geo";
// import { BehaviorSubject } from 'rxjs';
/**
 * Service that holds the state of the map module
 */
export class MapState {
    constructor(mapService, projectionService // Don't remove this or it'll never be injected
    ) {
        this.mapService = mapService;
        this.projectionService = projectionService;
        this._map = new IgoMap({
            controls: {
                scaleLine: true,
                attribution: {
                    collapsed: true
                }
            }
        });
        this.mapService.setMap(this.map);
    }
    // public mapCenter$ = new BehaviorSubject<boolean>(false);
    get showAllLegendsValue() {
        return this._legendToolShowAll;
    }
    set showAllLegendsValue(value) {
        this._legendToolShowAll = value;
    }
    /**
     * Active map
     */
    get map() { return this._map; }
}
MapState.ɵfac = function MapState_Factory(t) { return new (t || MapState)(i0.ɵɵinject(i1.MapService), i0.ɵɵinject(i1.ProjectionService)); };
MapState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MapState, factory: MapState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MapService }, { type: i1.ProjectionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvbWFwLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBaUMsTUFBTSxXQUFXLENBQUM7OztBQUNsRSwwQ0FBMEM7QUFFMUM7O0dBRUc7QUFJSCxNQUFNLE9BQU8sUUFBUTtJQWtCbkIsWUFDVSxVQUFzQixFQUN0QixpQkFBb0MsQ0FBQywrQ0FBK0M7O1FBRHBGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU1QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQ3JCLFFBQVEsRUFBRTtnQkFDUixTQUFTLEVBQUUsSUFBSTtnQkFDZixXQUFXLEVBQUU7b0JBQ1gsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTlCRCwyREFBMkQ7SUFDM0QsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksbUJBQW1CLENBQUMsS0FBSztRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFHRDs7T0FFRztJQUNILElBQUksR0FBRyxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O2dFQWY1QixRQUFROzhEQUFSLFFBQVEsV0FBUixRQUFRLG1CQUZQLE1BQU07dUZBRVAsUUFBUTtjQUhwQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElnb01hcCwgTWFwU2VydmljZSwgUHJvamVjdGlvblNlcnZpY2UgfSBmcm9tICdAaWdvMi9nZW8nO1xuLy8gaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogU2VydmljZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSBvZiB0aGUgbWFwIG1vZHVsZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYXBTdGF0ZSB7XG5cbiAgLy8gcHVibGljIG1hcENlbnRlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgZ2V0IHNob3dBbGxMZWdlbmRzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xlZ2VuZFRvb2xTaG93QWxsO1xuICB9XG5cbiAgc2V0IHNob3dBbGxMZWdlbmRzVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl9sZWdlbmRUb29sU2hvd0FsbCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2xlZ2VuZFRvb2xTaG93QWxsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY3RpdmUgbWFwXG4gICAqL1xuICBnZXQgbWFwKCk6IElnb01hcCB7IHJldHVybiB0aGlzLl9tYXA7IH1cbiAgcHJpdmF0ZSBfbWFwOiBJZ29NYXA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvamVjdGlvblNlcnZpY2U6IFByb2plY3Rpb25TZXJ2aWNlIC8vIERvbid0IHJlbW92ZSB0aGlzIG9yIGl0J2xsIG5ldmVyIGJlIGluamVjdGVkXG4gICkge1xuICAgIHRoaXMuX21hcCA9IG5ldyBJZ29NYXAoe1xuICAgICAgY29udHJvbHM6IHtcbiAgICAgICAgc2NhbGVMaW5lOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGlvbjoge1xuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm1hcFNlcnZpY2Uuc2V0TWFwKHRoaXMubWFwKTtcbiAgfVxufVxuIl19