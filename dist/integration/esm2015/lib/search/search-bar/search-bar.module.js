import { NgModule } from '@angular/core';
import { IgoSearchModule } from '@igo2/geo';
import { SearchBarBindingDirective } from './search-bar-binding.directive';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoAppSearchBarModule {
}
IgoAppSearchBarModule.ɵfac = function IgoAppSearchBarModule_Factory(t) { return new (t || IgoAppSearchBarModule)(); };
IgoAppSearchBarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppSearchBarModule });
IgoAppSearchBarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoSearchModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppSearchBarModule, [{
        type: NgModule,
        args: [{
                imports: [IgoSearchModule],
                declarations: [SearchBarBindingDirective],
                exports: [SearchBarBindingDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppSearchBarModule, { declarations: [SearchBarBindingDirective], imports: [IgoSearchModule], exports: [SearchBarBindingDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL3NlYXJjaC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFM0U7O0dBRUc7QUFNSCxNQUFNLE9BQU8scUJBQXFCOzswRkFBckIscUJBQXFCO3VFQUFyQixxQkFBcUI7MkVBSnZCLENBQUMsZUFBZSxDQUFDO3VGQUlmLHFCQUFxQjtjQUxqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMxQixZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDckM7O3dGQUNZLHFCQUFxQixtQkFIakIseUJBQXlCLGFBRDlCLGVBQWUsYUFFZix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJZ29TZWFyY2hNb2R1bGUgfSBmcm9tICdAaWdvMi9nZW8nO1xuXG5pbXBvcnQgeyBTZWFyY2hCYXJCaW5kaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9zZWFyY2gtYmFyLWJpbmRpbmcuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtJZ29TZWFyY2hNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtTZWFyY2hCYXJCaW5kaW5nRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1NlYXJjaEJhckJpbmRpbmdEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBJZ29BcHBTZWFyY2hCYXJNb2R1bGUge31cbiJdfQ==