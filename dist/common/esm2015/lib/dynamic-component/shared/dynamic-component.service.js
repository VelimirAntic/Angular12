import { Injectable } from '@angular/core';
import { DynamicComponent } from './dynamic-component';
import * as i0 from "@angular/core";
/**
 * Service to creates DynamicComponent instances from base component classes
 */
export class DynamicComponentService {
    constructor(resolver) {
        this.resolver = resolver;
    }
    /**
     * Creates a DynamicComponent instance from a base component class
     * @param componentCls The component class
     * @returns DynamicComponent instance
     */
    create(componentCls) {
        const factory = this.resolver.resolveComponentFactory(componentCls);
        return new DynamicComponent(factory);
    }
}
DynamicComponentService.ɵfac = function DynamicComponentService_Factory(t) { return new (t || DynamicComponentService)(i0.ɵɵinject(i0.ComponentFactoryResolver)); };
DynamicComponentService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DynamicComponentService, factory: DynamicComponentService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicComponentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2R5bmFtaWMtY29tcG9uZW50L3NoYXJlZC9keW5hbWljLWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXZEOztHQUVHO0FBSUgsTUFBTSxPQUFPLHVCQUF1QjtJQUVsQyxZQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUFHLENBQUM7SUFFMUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxZQUFpQjtRQUN0QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFlBQW1CLENBQUMsQ0FBQztRQUMzRSxPQUFPLElBQUksZ0JBQWdCLENBQXNCLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7OzhGQVpVLHVCQUF1Qjs2RUFBdkIsdUJBQXVCLFdBQXZCLHVCQUF1QixtQkFGdEIsTUFBTTt1RkFFUCx1QkFBdUI7Y0FIbkMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljLWNvbXBvbmVudCc7XG5cbi8qKlxuICogU2VydmljZSB0byBjcmVhdGVzIER5bmFtaWNDb21wb25lbnQgaW5zdGFuY2VzIGZyb20gYmFzZSBjb21wb25lbnQgY2xhc3Nlc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29tcG9uZW50U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgRHluYW1pY0NvbXBvbmVudCBpbnN0YW5jZSBmcm9tIGEgYmFzZSBjb21wb25lbnQgY2xhc3NcbiAgICogQHBhcmFtIGNvbXBvbmVudENscyBUaGUgY29tcG9uZW50IGNsYXNzXG4gICAqIEByZXR1cm5zIER5bmFtaWNDb21wb25lbnQgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZShjb21wb25lbnRDbHM6IGFueSk6IER5bmFtaWNDb21wb25lbnQ8YW55PiB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50Q2xzIGFzIGFueSk7XG4gICAgcmV0dXJuIG5ldyBEeW5hbWljQ29tcG9uZW50PHR5cGVvZiBjb21wb25lbnRDbHM+KGZhY3RvcnkpO1xuICB9XG59XG4iXX0=