import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgoFeatureDetailsModule } from './feature-details/feature-details.module';
import { IgoFeatureFormModule } from './feature-form/feature-form.module';
import * as i0 from "@angular/core";
export class IgoFeatureModule {
}
IgoFeatureModule.ɵfac = function IgoFeatureModule_Factory(t) { return new (t || IgoFeatureModule)(); };
IgoFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFeatureModule });
IgoFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            CommonModule
        ], IgoFeatureDetailsModule,
        IgoFeatureFormModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    IgoFeatureDetailsModule,
                    IgoFeatureFormModule
                ],
                declarations: [],
                providers: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFeatureModule, { imports: [CommonModule], exports: [IgoFeatureDetailsModule,
        IgoFeatureFormModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9mZWF0dXJlL2ZlYXR1cmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQWExRSxNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO2tFQUFoQixnQkFBZ0I7dUVBRmhCLEVBQUUsWUFSSjtZQUNQLFlBQVk7U0FDYixFQUVDLHVCQUF1QjtRQUN2QixvQkFBb0I7dUZBS1gsZ0JBQWdCO2NBWDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsdUJBQXVCO29CQUN2QixvQkFBb0I7aUJBQ3JCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixTQUFTLEVBQUUsRUFBRTthQUNkOzt3RkFDWSxnQkFBZ0IsY0FUekIsWUFBWSxhQUdaLHVCQUF1QjtRQUN2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSWdvRmVhdHVyZURldGFpbHNNb2R1bGUgfSBmcm9tICcuL2ZlYXR1cmUtZGV0YWlscy9mZWF0dXJlLWRldGFpbHMubW9kdWxlJztcbmltcG9ydCB7IElnb0ZlYXR1cmVGb3JtTW9kdWxlIH0gZnJvbSAnLi9mZWF0dXJlLWZvcm0vZmVhdHVyZS1mb3JtLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIElnb0ZlYXR1cmVEZXRhaWxzTW9kdWxlLFxuICAgIElnb0ZlYXR1cmVGb3JtTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgSWdvRmVhdHVyZU1vZHVsZSB7fVxuIl19