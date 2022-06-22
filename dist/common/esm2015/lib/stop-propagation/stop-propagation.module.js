import { NgModule } from '@angular/core';
import { StopDropPropagationDirective } from './stop-drop-propagation.directive';
import { StopPropagationDirective } from './stop-propagation.directive';
import * as i0 from "@angular/core";
export class IgoStopPropagationModule {
    static forRoot() {
        return {
            ngModule: IgoStopPropagationModule,
            providers: []
        };
    }
}
IgoStopPropagationModule.ɵfac = function IgoStopPropagationModule_Factory(t) { return new (t || IgoStopPropagationModule)(); };
IgoStopPropagationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoStopPropagationModule });
IgoStopPropagationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoStopPropagationModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [StopDropPropagationDirective, StopPropagationDirective],
                exports: [StopDropPropagationDirective, StopPropagationDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoStopPropagationModule, { declarations: [StopDropPropagationDirective, StopPropagationDirective], exports: [StopDropPropagationDirective, StopPropagationDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC1wcm9wYWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9zdG9wLXByb3BhZ2F0aW9uL3N0b3AtcHJvcGFnYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQU94RSxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7Z0dBTlUsd0JBQXdCOzBFQUF4Qix3QkFBd0I7OEVBSjFCLEVBQUU7dUZBSUEsd0JBQXdCO2NBTHBDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsRUFBRTtnQkFDWCxZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSx3QkFBd0IsQ0FBQztnQkFDdEUsT0FBTyxFQUFFLENBQUMsNEJBQTRCLEVBQUUsd0JBQXdCLENBQUM7YUFDbEU7O3dGQUNZLHdCQUF3QixtQkFIcEIsNEJBQTRCLEVBQUUsd0JBQXdCLGFBQzNELDRCQUE0QixFQUFFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9wRHJvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9zdG9wLWRyb3AtcHJvcGFnYXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbU3RvcERyb3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSwgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1N0b3BEcm9wUHJvcGFnYXRpb25EaXJlY3RpdmUsIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSWdvU3RvcFByb3BhZ2F0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29TdG9wUHJvcGFnYXRpb25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb1N0b3BQcm9wYWdhdGlvbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXX0=