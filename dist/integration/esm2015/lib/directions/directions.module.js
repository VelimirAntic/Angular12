import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgoDirectionsModule } from '@igo2/geo';
import { DirectionsToolComponent } from './directions-tool/directions-tool.component';
import * as i0 from "@angular/core";
export class IgoAppDirectionsModule {
    static forRoot() {
        return {
            ngModule: IgoAppDirectionsModule,
            providers: []
        };
    }
}
IgoAppDirectionsModule.ɵfac = function IgoAppDirectionsModule_Factory(t) { return new (t || IgoAppDirectionsModule)(); };
IgoAppDirectionsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppDirectionsModule });
IgoAppDirectionsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoDirectionsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppDirectionsModule, [{
        type: NgModule,
        args: [{
                imports: [IgoDirectionsModule],
                declarations: [DirectionsToolComponent],
                exports: [DirectionsToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppDirectionsModule, { declarations: [DirectionsToolComponent], imports: [IgoDirectionsModule], exports: [DirectionsToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2RpcmVjdGlvbnMvZGlyZWN0aW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFFBQVEsRUFFUixzQkFBc0IsRUFDdkIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQVF0RixNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7NEZBTlUsc0JBQXNCO3dFQUF0QixzQkFBc0I7NEVBTHhCLENBQUMsbUJBQW1CLENBQUM7dUZBS25CLHNCQUFzQjtjQU5sQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7O3dGQUNZLHNCQUFzQixtQkFKbEIsdUJBQXVCLGFBRDVCLG1CQUFtQixhQUVuQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOZ01vZHVsZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSWdvRGlyZWN0aW9uc01vZHVsZSB9IGZyb20gJ0BpZ28yL2dlbyc7XG5pbXBvcnQgeyBEaXJlY3Rpb25zVG9vbENvbXBvbmVudCB9IGZyb20gJy4vZGlyZWN0aW9ucy10b29sL2RpcmVjdGlvbnMtdG9vbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbSWdvRGlyZWN0aW9uc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0RpcmVjdGlvbnNUb29sQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0RpcmVjdGlvbnNUb29sQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIElnb0FwcERpcmVjdGlvbnNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb0FwcERpcmVjdGlvbnNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0FwcERpcmVjdGlvbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuIl19