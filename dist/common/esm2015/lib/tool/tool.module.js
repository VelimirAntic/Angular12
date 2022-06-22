import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolService } from './shared/tool.service';
import { IgoToolboxModule } from './toolbox/toolbox.module';
import * as i0 from "@angular/core";
export class IgoToolModule {
    static forRoot() {
        return {
            ngModule: IgoToolModule,
            providers: [
                ToolService
            ]
        };
    }
}
IgoToolModule.ɵfac = function IgoToolModule_Factory(t) { return new (t || IgoToolModule)(); };
IgoToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoToolModule });
IgoToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ], IgoToolboxModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoToolModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    IgoToolboxModule
                ],
                declarations: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoToolModule, { imports: [CommonModule], exports: [IgoToolboxModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi90b29sL3Rvb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBVzVELE1BQU0sT0FBTyxhQUFhO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVCxXQUFXO2FBQ1o7U0FDRixDQUFDO0lBQ0osQ0FBQzs7MEVBUlUsYUFBYTsrREFBYixhQUFhO21FQVJmO1lBQ1AsWUFBWTtTQUNiLEVBRUMsZ0JBQWdCO3VGQUlQLGFBQWE7Y0FUekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7aUJBQ2pCO2dCQUNELFlBQVksRUFBRSxFQUFFO2FBQ2pCOzt3RkFDWSxhQUFhLGNBUHRCLFlBQVksYUFHWixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVG9vbFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC90b29sLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWdvVG9vbGJveE1vZHVsZSB9IGZyb20gJy4vdG9vbGJveC90b29sYm94Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIElnb1Rvb2xib3hNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29Ub29sTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29Ub29sTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29Ub29sTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRvb2xTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19