import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerActivityDirective } from './spinner-activity.directive';
import { SpinnerComponent } from './spinner.component';
import * as i0 from "@angular/core";
export class IgoSpinnerModule {
}
IgoSpinnerModule.ɵfac = function IgoSpinnerModule_Factory(t) { return new (t || IgoSpinnerModule)(); };
IgoSpinnerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoSpinnerModule });
IgoSpinnerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatProgressSpinnerModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoSpinnerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatProgressSpinnerModule],
                declarations: [SpinnerActivityDirective, SpinnerComponent],
                exports: [SpinnerActivityDirective, SpinnerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoSpinnerModule, { declarations: [SpinnerActivityDirective, SpinnerComponent], imports: [CommonModule, MatProgressSpinnerModule], exports: [SpinnerActivityDirective, SpinnerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9zcGlubmVyL3NwaW5uZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQU92RCxNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO2tFQUFoQixnQkFBZ0I7c0VBSmxCLENBQUMsWUFBWSxFQUFFLHdCQUF3QixDQUFDO3VGQUl0QyxnQkFBZ0I7Y0FMNUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSx3QkFBd0IsQ0FBQztnQkFDakQsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzFELE9BQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDO2FBQ3REOzt3RkFDWSxnQkFBZ0IsbUJBSFosd0JBQXdCLEVBQUUsZ0JBQWdCLGFBRC9DLFlBQVksRUFBRSx3QkFBd0IsYUFFdEMsd0JBQXdCLEVBQUUsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuaW1wb3J0IHsgU3Bpbm5lckFjdGl2aXR5RGlyZWN0aXZlIH0gZnJvbSAnLi9zcGlubmVyLWFjdGl2aXR5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1NwaW5uZXJBY3Rpdml0eURpcmVjdGl2ZSwgU3Bpbm5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTcGlubmVyQWN0aXZpdHlEaXJlY3RpdmUsIFNwaW5uZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIElnb1NwaW5uZXJNb2R1bGUge31cbiJdfQ==