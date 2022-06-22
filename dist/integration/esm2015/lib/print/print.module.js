import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgoPrintModule } from '@igo2/geo';
import { PrintToolComponent } from './print-tool/print-tool.component';
import * as i0 from "@angular/core";
export class IgoAppPrintModule {
    static forRoot() {
        return {
            ngModule: IgoAppPrintModule,
            providers: []
        };
    }
}
IgoAppPrintModule.ɵfac = function IgoAppPrintModule_Factory(t) { return new (t || IgoAppPrintModule)(); };
IgoAppPrintModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppPrintModule });
IgoAppPrintModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoPrintModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppPrintModule, [{
        type: NgModule,
        args: [{
                imports: [IgoPrintModule],
                declarations: [PrintToolComponent],
                exports: [PrintToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppPrintModule, { declarations: [PrintToolComponent], imports: [IgoPrintModule], exports: [PrintToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9wcmludC9wcmludC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFFBQVEsRUFFUixzQkFBc0IsRUFDdkIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFRdkUsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7O2tGQU5VLGlCQUFpQjttRUFBakIsaUJBQWlCO3VFQUxuQixDQUFDLGNBQWMsQ0FBQzt1RkFLZCxpQkFBaUI7Y0FON0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDekIsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7d0ZBQ1ksaUJBQWlCLG1CQUpiLGtCQUFrQixhQUR2QixjQUFjLGFBRWQsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElnb1ByaW50TW9kdWxlIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB7IFByaW50VG9vbENvbXBvbmVudCB9IGZyb20gJy4vcHJpbnQtdG9vbC9wcmludC10b29sLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtJZ29QcmludE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1ByaW50VG9vbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcmludFRvb2xDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgSWdvQXBwUHJpbnRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb0FwcFByaW50TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29BcHBQcmludE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXX0=