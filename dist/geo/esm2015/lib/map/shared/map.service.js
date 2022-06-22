import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * MapService
 *
 * This service tracks the IgoMap instance, if any.
 * Currently, only one map instance is supported
 * but support for multiple maps may be added in the future.
 * This will impact other services such as the OverlayService
 * because these maps won't be sharing overlayed features.
 */
export class MapService {
    constructor() { }
    getMap() {
        return this.map;
    }
    setMap(map) {
        this.map = map;
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(); };
MapService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9tYXAvc2hhcmVkL21hcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDOzs7Ozs7OztHQVFHO0FBSUgsTUFBTSxPQUFPLFVBQVU7SUFHckIsZ0JBQWUsQ0FBQztJQUVoQixNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOztvRUFYVSxVQUFVO2dFQUFWLFVBQVUsV0FBVixVQUFVLG1CQUZULE1BQU07dUZBRVAsVUFBVTtjQUh0QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4vbWFwJztcblxuLyoqXG4gKiBNYXBTZXJ2aWNlXG4gKlxuICogVGhpcyBzZXJ2aWNlIHRyYWNrcyB0aGUgSWdvTWFwIGluc3RhbmNlLCBpZiBhbnkuXG4gKiBDdXJyZW50bHksIG9ubHkgb25lIG1hcCBpbnN0YW5jZSBpcyBzdXBwb3J0ZWRcbiAqIGJ1dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBtYXBzIG1heSBiZSBhZGRlZCBpbiB0aGUgZnV0dXJlLlxuICogVGhpcyB3aWxsIGltcGFjdCBvdGhlciBzZXJ2aWNlcyBzdWNoIGFzIHRoZSBPdmVybGF5U2VydmljZVxuICogYmVjYXVzZSB0aGVzZSBtYXBzIHdvbid0IGJlIHNoYXJpbmcgb3ZlcmxheWVkIGZlYXR1cmVzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYXBTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBtYXA6IElnb01hcDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0TWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMubWFwO1xuICB9XG5cbiAgc2V0TWFwKG1hcDogSWdvTWFwKSB7XG4gICAgdGhpcy5tYXAgPSBtYXA7XG4gIH1cbn1cbiJdfQ==