import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../dynamic-component/shared/dynamic-component.service";
export class WidgetService {
    constructor(dynamicComponentService) {
        this.dynamicComponentService = dynamicComponentService;
    }
    create(widgetCls) {
        return this.dynamicComponentService.create(widgetCls);
    }
}
WidgetService.ɵfac = function WidgetService_Factory(t) { return new (t || WidgetService)(i0.ɵɵinject(i1.DynamicComponentService)); };
WidgetService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WidgetService, factory: WidgetService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DynamicComponentService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi93aWRnZXQvc2hhcmVkL3dpZGdldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVUzQyxNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUFvQix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUFHLENBQUM7SUFFeEUsTUFBTSxDQUFDLFNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFNBQTRCLENBQUMsQ0FBQztJQUMzRSxDQUFDOzswRUFOVSxhQUFhO21FQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZaLE1BQU07dUZBRVAsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZHluYW1pYy1jb21wb25lbnQvc2hhcmVkL2R5bmFtaWMtY29tcG9uZW50LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5pbXBvcnQgeyBXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV2lkZ2V0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkeW5hbWljQ29tcG9uZW50U2VydmljZTogRHluYW1pY0NvbXBvbmVudFNlcnZpY2UpIHt9XG5cbiAgY3JlYXRlKHdpZGdldENsczogYW55KTogV2lkZ2V0IHtcbiAgICByZXR1cm4gdGhpcy5keW5hbWljQ29tcG9uZW50U2VydmljZS5jcmVhdGUod2lkZ2V0Q2xzIGFzIFdpZGdldENvbXBvbmVudCk7XG4gIH1cbn1cbiJdfQ==