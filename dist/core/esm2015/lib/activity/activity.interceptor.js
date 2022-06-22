import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./activity.service";
export class ActivityInterceptor {
    constructor(activityService) {
        this.activityService = activityService;
    }
    intercept(req, next) {
        const activity = req.headers.get('activityInterceptor');
        if (activity) {
            const actReq = req.clone({
                headers: req.headers.delete('activityInterceptor')
            });
            if (activity === 'false') {
                return next.handle(actReq);
            }
        }
        const id = this.activityService.register();
        return next.handle(req).pipe(finalize(() => {
            this.activityService.unregister(id);
        }));
    }
}
ActivityInterceptor.ɵfac = function ActivityInterceptor_Factory(t) { return new (t || ActivityInterceptor)(i0.ɵɵinject(i1.ActivityService)); };
ActivityInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ActivityInterceptor, factory: ActivityInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActivityInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.ActivityService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvYWN0aXZpdHkvYWN0aXZpdHkuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUsxQyxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsU0FBUyxDQUNQLEdBQXFCLEVBQ3JCLElBQWlCO1FBRWpCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDeEQsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUN2QixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUM7YUFDbkQsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUI7U0FDRjtRQUVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDMUIsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztzRkF4QlUsbUJBQW1CO3lFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWN0aXZpdHlTZXJ2aWNlIH0gZnJvbSAnLi9hY3Rpdml0eS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2aXR5U2VydmljZTogQWN0aXZpdHlTZXJ2aWNlKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gcmVxLmhlYWRlcnMuZ2V0KCdhY3Rpdml0eUludGVyY2VwdG9yJyk7XG4gICAgaWYgKGFjdGl2aXR5KSB7XG4gICAgICBjb25zdCBhY3RSZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycy5kZWxldGUoJ2FjdGl2aXR5SW50ZXJjZXB0b3InKVxuICAgICAgfSk7XG4gICAgICBpZiAoYWN0aXZpdHkgPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGFjdFJlcSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSB0aGlzLmFjdGl2aXR5U2VydmljZS5yZWdpc3RlcigpO1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZShcbiAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVNlcnZpY2UudW5yZWdpc3RlcihpZCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==