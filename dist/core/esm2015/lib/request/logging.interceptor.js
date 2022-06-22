import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class LoggingInterceptor {
    intercept(req, next) {
        const started = Date.now();
        let ok;
        // extend server response observable with logging
        return next.handle(req).pipe(tap(
        // Succeeds when there is a response; ignore other events
        event => (ok = event instanceof HttpResponse ? 'succeeded' : ''), 
        // Operation failed; error is an HttpErrorResponse
        error => (ok = 'failed')), 
        // Log when response observable either completes or errors
        finalize(() => {
            const elapsed = Date.now() - started;
            const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
            console.log(msg);
        }));
    }
}
LoggingInterceptor.ɵfac = function LoggingInterceptor_Factory(t) { return new (t || LoggingInterceptor)(); };
LoggingInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoggingInterceptor, factory: LoggingInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoggingInterceptor, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9yZXF1ZXN0L2xvZ2dpbmcuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBS0wsWUFBWSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHL0MsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixTQUFTLENBQ1AsR0FBcUIsRUFDckIsSUFBaUI7UUFFakIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksRUFBVSxDQUFDO1FBRWYsaURBQWlEO1FBQ2pELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzFCLEdBQUc7UUFDRCx5REFBeUQ7UUFDekQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxLQUFLLFlBQVksWUFBWSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRSxrREFBa0Q7UUFDbEQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FDekI7UUFDRCwwREFBMEQ7UUFDMUQsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNaLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7WUFDckMsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxhQUFhO2VBQ3hDLEVBQUUsT0FBTyxPQUFPLE1BQU0sQ0FBQztZQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztvRkF6QlUsa0JBQWtCO3dFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBFdmVudCxcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnaW5nSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBzdGFydGVkID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgb2s6IHN0cmluZztcblxuICAgIC8vIGV4dGVuZCBzZXJ2ZXIgcmVzcG9uc2Ugb2JzZXJ2YWJsZSB3aXRoIGxvZ2dpbmdcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKFxuICAgICAgdGFwKFxuICAgICAgICAvLyBTdWNjZWVkcyB3aGVuIHRoZXJlIGlzIGEgcmVzcG9uc2U7IGlnbm9yZSBvdGhlciBldmVudHNcbiAgICAgICAgZXZlbnQgPT4gKG9rID0gZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UgPyAnc3VjY2VlZGVkJyA6ICcnKSxcbiAgICAgICAgLy8gT3BlcmF0aW9uIGZhaWxlZDsgZXJyb3IgaXMgYW4gSHR0cEVycm9yUmVzcG9uc2VcbiAgICAgICAgZXJyb3IgPT4gKG9rID0gJ2ZhaWxlZCcpXG4gICAgICApLFxuICAgICAgLy8gTG9nIHdoZW4gcmVzcG9uc2Ugb2JzZXJ2YWJsZSBlaXRoZXIgY29tcGxldGVzIG9yIGVycm9yc1xuICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0ZWQ7XG4gICAgICAgIGNvbnN0IG1zZyA9IGAke3JlcS5tZXRob2R9IFwiJHtyZXEudXJsV2l0aFBhcmFtc31cIlxuICAgICAgICAgICAgICR7b2t9IGluICR7ZWxhcHNlZH0gbXMuYDtcblxuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=