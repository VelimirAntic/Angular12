import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayAction } from './overlay.enum';
import * as i0 from "@angular/core";
export class OverlayService {
    constructor() {
        this.features$ = new BehaviorSubject([
            [],
            undefined
        ]);
    }
    setFeatures(features, action = OverlayAction.None) {
        this.features$.next([features, action]);
    }
    clear() {
        this.features$.next([[], OverlayAction.None]);
    }
}
OverlayService.ɵfac = function OverlayService_Factory(t) { return new (t || OverlayService)(); };
OverlayService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OverlayService, factory: OverlayService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvb3ZlcmxheS9zaGFyZWQvb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSy9DLE1BQU0sT0FBTyxjQUFjO0lBTXpCO1FBTE8sY0FBUyxHQUFHLElBQUksZUFBZSxDQUE2QjtZQUNqRSxFQUFFO1lBQ0YsU0FBUztTQUNWLENBQUMsQ0FBQztJQUVZLENBQUM7SUFFaEIsV0FBVyxDQUFDLFFBQW1CLEVBQUUsU0FBd0IsYUFBYSxDQUFDLElBQUk7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OzRFQWRVLGNBQWM7b0VBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRmIsTUFBTTt1RkFFUCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQvZmVhdHVyZS5pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgT3ZlcmxheUFjdGlvbiB9IGZyb20gJy4vb3ZlcmxheS5lbnVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheVNlcnZpY2Uge1xuICBwdWJsaWMgZmVhdHVyZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxbRmVhdHVyZVtdLCBPdmVybGF5QWN0aW9uXT4oW1xuICAgIFtdLFxuICAgIHVuZGVmaW5lZFxuICBdKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0RmVhdHVyZXMoZmVhdHVyZXM6IEZlYXR1cmVbXSwgYWN0aW9uOiBPdmVybGF5QWN0aW9uID0gT3ZlcmxheUFjdGlvbi5Ob25lKSB7XG4gICAgdGhpcy5mZWF0dXJlcyQubmV4dChbZmVhdHVyZXMsIGFjdGlvbl0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5mZWF0dXJlcyQubmV4dChbW10sIE92ZXJsYXlBY3Rpb24uTm9uZV0pO1xuICB9XG59XG4iXX0=