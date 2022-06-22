import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgoDynamicOutletModule } from './dynamic-outlet/dynamic-outlet.module';
import { DynamicComponentService } from './shared/dynamic-component.service';
import * as i0 from "@angular/core";
export class IgoDynamicComponentModule {
}
IgoDynamicComponentModule.ɵfac = function IgoDynamicComponentModule_Factory(t) { return new (t || IgoDynamicComponentModule)(); };
IgoDynamicComponentModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoDynamicComponentModule });
IgoDynamicComponentModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        DynamicComponentService
    ], imports: [[
            CommonModule,
            IgoDynamicOutletModule
        ], IgoDynamicOutletModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoDynamicComponentModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoDynamicOutletModule
                ],
                exports: [
                    IgoDynamicOutletModule
                ],
                providers: [
                    DynamicComponentService
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoDynamicComponentModule, { imports: [CommonModule,
        IgoDynamicOutletModule], exports: [IgoDynamicOutletModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvZHluYW1pYy1jb21wb25lbnQvZHluYW1pYy1jb21wb25lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQWM3RSxNQUFNLE9BQU8seUJBQXlCOztrR0FBekIseUJBQXlCOzJFQUF6Qix5QkFBeUI7Z0ZBSnpCO1FBQ1QsdUJBQXVCO0tBQ3hCLFlBVFE7WUFDUCxZQUFZO1lBQ1osc0JBQXNCO1NBQ3ZCLEVBRUMsc0JBQXNCO3VGQU1iLHlCQUF5QjtjQVpyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asc0JBQXNCO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsdUJBQXVCO2lCQUN4QjthQUNGOzt3RkFDWSx5QkFBeUIsY0FWbEMsWUFBWTtRQUNaLHNCQUFzQixhQUd0QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSWdvRHluYW1pY091dGxldE1vZHVsZSB9IGZyb20gJy4vZHluYW1pYy1vdXRsZXQvZHluYW1pYy1vdXRsZXQubW9kdWxlJztcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvZHluYW1pYy1jb21wb25lbnQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSWdvRHluYW1pY091dGxldE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSWdvRHluYW1pY091dGxldE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBEeW5hbWljQ29tcG9uZW50U2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElnb0R5bmFtaWNDb21wb25lbnRNb2R1bGUge31cbiJdfQ==