import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Service where all available form fields are registered.
 */
export class FormFieldService {
    constructor() { }
    static register(type, component) {
        FormFieldService.fields[type] = component;
    }
    /**
     * Return field component by type
     * @param type Field type
     * @returns Field component
     */
    getFieldByType(type) {
        return FormFieldService.fields[type];
    }
}
FormFieldService.fields = {};
FormFieldService.ɵfac = function FormFieldService_Factory(t) { return new (t || FormFieldService)(); };
FormFieldService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormFieldService, factory: FormFieldService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvZm9ybS9zaGFyZWQvZm9ybS1maWVsZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDOztHQUVHO0FBSUgsTUFBTSxPQUFPLGdCQUFnQjtJQVEzQixnQkFBZSxDQUFDO0lBSmhCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBWSxFQUFFLFNBQWM7UUFDMUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBSUQ7Ozs7T0FJRztJQUNILGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O0FBZk0sdUJBQU0sR0FBeUIsRUFBRSxDQUFDO2dGQUY5QixnQkFBZ0I7c0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmYsTUFBTTt1RkFFUCxnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFNlcnZpY2Ugd2hlcmUgYWxsIGF2YWlsYWJsZSBmb3JtIGZpZWxkcyBhcmUgcmVnaXN0ZXJlZC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkU2VydmljZSB7XG5cbiAgc3RhdGljIGZpZWxkczoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcblxuICBzdGF0aWMgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCBjb21wb25lbnQ6IGFueSkge1xuICAgIEZvcm1GaWVsZFNlcnZpY2UuZmllbGRzW3R5cGVdID0gY29tcG9uZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gZmllbGQgY29tcG9uZW50IGJ5IHR5cGVcbiAgICogQHBhcmFtIHR5cGUgRmllbGQgdHlwZVxuICAgKiBAcmV0dXJucyBGaWVsZCBjb21wb25lbnRcbiAgICovXG4gIGdldEZpZWxkQnlUeXBlKHR5cGU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIEZvcm1GaWVsZFNlcnZpY2UuZmllbGRzW3R5cGVdO1xuICB9XG5cbn1cbiJdfQ==