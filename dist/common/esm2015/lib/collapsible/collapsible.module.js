import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CollapseDirective } from './collapse.directive';
import { CollapsibleComponent } from './collapsible.component';
import * as i0 from "@angular/core";
export class IgoCollapsibleModule {
    static forRoot() {
        return {
            ngModule: IgoCollapsibleModule,
            providers: []
        };
    }
}
IgoCollapsibleModule.ɵfac = function IgoCollapsibleModule_Factory(t) { return new (t || IgoCollapsibleModule)(); };
IgoCollapsibleModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoCollapsibleModule });
IgoCollapsibleModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[MatIconModule, MatListModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoCollapsibleModule, [{
        type: NgModule,
        args: [{
                imports: [MatIconModule, MatListModule],
                declarations: [CollapsibleComponent, CollapseDirective],
                exports: [CollapsibleComponent, CollapseDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoCollapsibleModule, { declarations: [CollapsibleComponent, CollapseDirective], imports: [MatIconModule, MatListModule], exports: [CollapsibleComponent, CollapseDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY29sbGFwc2libGUvY29sbGFwc2libGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBTy9ELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOzt3RkFOVSxvQkFBb0I7c0VBQXBCLG9CQUFvQjswRUFKdEIsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO3VGQUk1QixvQkFBb0I7Y0FMaEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7Z0JBQ3ZDLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLGlCQUFpQixDQUFDO2dCQUN2RCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxpQkFBaUIsQ0FBQzthQUNuRDs7d0ZBQ1ksb0JBQW9CLG1CQUhoQixvQkFBb0IsRUFBRSxpQkFBaUIsYUFENUMsYUFBYSxFQUFFLGFBQWEsYUFFNUIsb0JBQW9CLEVBQUUsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcblxuaW1wb3J0IHsgQ29sbGFwc2VEaXJlY3RpdmUgfSBmcm9tICcuL2NvbGxhcHNlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29sbGFwc2libGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdEljb25Nb2R1bGUsIE1hdExpc3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDb2xsYXBzaWJsZUNvbXBvbmVudCwgQ29sbGFwc2VEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbQ29sbGFwc2libGVDb21wb25lbnQsIENvbGxhcHNlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29Db2xsYXBzaWJsZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SWdvQ29sbGFwc2libGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0NvbGxhcHNpYmxlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==