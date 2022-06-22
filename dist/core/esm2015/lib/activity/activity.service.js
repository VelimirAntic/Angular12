import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { uuid } from '@igo2/utils';
import * as i0 from "@angular/core";
export class ActivityService {
    constructor() {
        this.counter$ = new BehaviorSubject(0);
        this.ids = [];
    }
    register() {
        const id = uuid();
        this.ids.push(id);
        this.counter$.next(this.ids.length);
        return id;
    }
    unregister(id) {
        const index = this.ids.indexOf(id);
        if (index === -1) {
            return;
        }
        this.ids.splice(index, 1);
        this.counter$.next(this.ids.length);
    }
}
ActivityService.ɵfac = function ActivityService_Factory(t) { return new (t || ActivityService)(); };
ActivityService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ActivityService, factory: ActivityService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActivityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9hY3Rpdml0eS9hY3Rpdml0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUtuQyxNQUFNLE9BQU8sZUFBZTtJQUsxQjtRQUpPLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUV6QyxRQUFHLEdBQWEsRUFBRSxDQUFDO0lBRVosQ0FBQztJQUVoQixRQUFRO1FBQ04sTUFBTSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxVQUFVLENBQUMsRUFBVTtRQUNuQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs4RUF2QlUsZUFBZTtxRUFBZixlQUFlLFdBQWYsZUFBZSxtQkFGZCxNQUFNO3VGQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgdXVpZCB9IGZyb20gJ0BpZ28yL3V0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZpdHlTZXJ2aWNlIHtcbiAgcHVibGljIGNvdW50ZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDApO1xuXG4gIHByaXZhdGUgaWRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICByZWdpc3RlcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IGlkID0gdXVpZCgpO1xuICAgIHRoaXMuaWRzLnB1c2goaWQpO1xuICAgIHRoaXMuY291bnRlciQubmV4dCh0aGlzLmlkcy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgdW5yZWdpc3RlcihpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlkcy5pbmRleE9mKGlkKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaWRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICB0aGlzLmNvdW50ZXIkLm5leHQodGhpcy5pZHMubGVuZ3RoKTtcbiAgfVxufVxuIl19