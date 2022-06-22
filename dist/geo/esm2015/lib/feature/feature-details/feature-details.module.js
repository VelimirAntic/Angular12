import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IgoLanguageModule } from '@igo2/core';
import { IgoKeyValueModule, IgoImageModule } from '@igo2/common';
import { FeatureDetailsComponent } from './feature-details.component';
import { FeatureDetailsDirective } from './feature-details.directive';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoFeatureDetailsModule {
}
IgoFeatureDetailsModule.ɵfac = function IgoFeatureDetailsModule_Factory(t) { return new (t || IgoFeatureDetailsModule)(); };
IgoFeatureDetailsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFeatureDetailsModule });
IgoFeatureDetailsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            IgoLanguageModule,
            IgoKeyValueModule,
            IgoImageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFeatureDetailsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    IgoLanguageModule,
                    IgoKeyValueModule,
                    IgoImageModule
                ],
                exports: [
                    FeatureDetailsComponent,
                    FeatureDetailsDirective
                ],
                declarations: [
                    FeatureDetailsComponent,
                    FeatureDetailsDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFeatureDetailsModule, { declarations: [FeatureDetailsComponent,
        FeatureDetailsDirective], imports: [CommonModule,
        MatIconModule,
        IgoLanguageModule,
        IgoKeyValueModule,
        IgoImageModule], exports: [FeatureDetailsComponent,
        FeatureDetailsDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1kZXRhaWxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZlYXR1cmUvZmVhdHVyZS1kZXRhaWxzL2ZlYXR1cmUtZGV0YWlscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWpFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUV0RTs7R0FFRztBQWdCSCxNQUFNLE9BQU8sdUJBQXVCOzs4RkFBdkIsdUJBQXVCO3lFQUF2Qix1QkFBdUI7NkVBZHpCO1lBQ1AsWUFBWTtZQUNaLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGNBQWM7U0FDZjt1RkFRVSx1QkFBdUI7Y0FmbkMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIsdUJBQXVCO2lCQUFDO2dCQUMxQixZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2Qix1QkFBdUI7aUJBQUM7YUFDM0I7O3dGQUNZLHVCQUF1QixtQkFIaEMsdUJBQXVCO1FBQ3ZCLHVCQUF1QixhQVh2QixZQUFZO1FBQ1osYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsY0FBYyxhQUdkLHVCQUF1QjtRQUN2Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IElnb0tleVZhbHVlTW9kdWxlLCBJZ29JbWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlLWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IEZlYXR1cmVEZXRhaWxzRGlyZWN0aXZlIH0gZnJvbSAnLi9mZWF0dXJlLWRldGFpbHMuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBJZ29MYW5ndWFnZU1vZHVsZSxcbiAgICBJZ29LZXlWYWx1ZU1vZHVsZSxcbiAgICBJZ29JbWFnZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRmVhdHVyZURldGFpbHNDb21wb25lbnQsXG4gICAgRmVhdHVyZURldGFpbHNEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGZWF0dXJlRGV0YWlsc0NvbXBvbmVudCxcbiAgICBGZWF0dXJlRGV0YWlsc0RpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSWdvRmVhdHVyZURldGFpbHNNb2R1bGUge31cbiJdfQ==