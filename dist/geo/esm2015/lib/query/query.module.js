import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryDirective } from './shared/query.directive';
import { QueryService } from './shared/query.service';
import { provideQuerySearchSource } from './shared/query-search-source.providers';
import * as i0 from "@angular/core";
export class IgoQueryModule {
    static forRoot() {
        return {
            ngModule: IgoQueryModule,
            providers: [provideQuerySearchSource()]
        };
    }
}
IgoQueryModule.ɵfac = function IgoQueryModule_Factory(t) { return new (t || IgoQueryModule)(); };
IgoQueryModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoQueryModule });
IgoQueryModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [QueryService], imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoQueryModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [QueryDirective],
                declarations: [QueryDirective],
                providers: [QueryService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoQueryModule, { declarations: [QueryDirective], imports: [CommonModule], exports: [QueryDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvcXVlcnkvcXVlcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQVFsRixNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1NBQ3hDLENBQUM7SUFDSixDQUFDOzs0RUFOVSxjQUFjO2dFQUFkLGNBQWM7cUVBRmQsQ0FBQyxZQUFZLENBQUMsWUFIaEIsQ0FBQyxZQUFZLENBQUM7dUZBS1osY0FBYztjQU4xQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQzFCOzt3RkFDWSxjQUFjLG1CQUhWLGNBQWMsYUFGbkIsWUFBWSxhQUNaLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgUXVlcnlEaXJlY3RpdmUgfSBmcm9tICcuL3NoYXJlZC9xdWVyeS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUXVlcnlTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvcXVlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBwcm92aWRlUXVlcnlTZWFyY2hTb3VyY2UgfSBmcm9tICcuL3NoYXJlZC9xdWVyeS1zZWFyY2gtc291cmNlLnByb3ZpZGVycyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbUXVlcnlEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtRdWVyeURpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW1F1ZXJ5U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSWdvUXVlcnlNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb1F1ZXJ5TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29RdWVyeU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVRdWVyeVNlYXJjaFNvdXJjZSgpXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==