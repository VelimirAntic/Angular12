import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgoFormFormModule } from './form/form.module';
import { IgoFormGroupModule } from './form-group/form-group.module';
import { IgoFormFieldModule } from './form-field/form-field.module';
import { FormService } from './shared/form.service';
import { FormFieldService } from './shared/form-field.service';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoFormModule {
}
IgoFormModule.ɵfac = function IgoFormModule_Factory(t) { return new (t || IgoFormModule)(); };
IgoFormModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFormModule });
IgoFormModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FormService,
        FormFieldService
    ], imports: [[
            CommonModule,
            IgoFormGroupModule,
            IgoFormFieldModule
        ], IgoFormFormModule,
        IgoFormGroupModule,
        IgoFormFieldModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFormModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoFormGroupModule,
                    IgoFormFieldModule
                ],
                exports: [
                    IgoFormFormModule,
                    IgoFormGroupModule,
                    IgoFormFieldModule
                ],
                declarations: [],
                providers: [
                    FormService,
                    FormFieldService
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFormModule, { imports: [CommonModule,
        IgoFormGroupModule,
        IgoFormFieldModule], exports: [IgoFormFormModule,
        IgoFormGroupModule,
        IgoFormFieldModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFL0Q7O0dBRUc7QUFrQkgsTUFBTSxPQUFPLGFBQWE7OzBFQUFiLGFBQWE7K0RBQWIsYUFBYTtvRUFMYjtRQUNULFdBQVc7UUFDWCxnQkFBZ0I7S0FDakIsWUFkUTtZQUNQLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsa0JBQWtCO1NBQ25CLEVBRUMsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixrQkFBa0I7dUZBUVQsYUFBYTtjQWpCekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLFNBQVMsRUFBRTtvQkFDVCxXQUFXO29CQUNYLGdCQUFnQjtpQkFDakI7YUFDRjs7d0ZBQ1ksYUFBYSxjQWZ0QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQixhQUdsQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBJZ29Gb3JtRm9ybU1vZHVsZSB9IGZyb20gJy4vZm9ybS9mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29Gb3JtR3JvdXBNb2R1bGUgfSBmcm9tICcuL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvRm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnLi9mb3JtLWZpZWxkL2Zvcm0tZmllbGQubW9kdWxlJztcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1GaWVsZFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9mb3JtLWZpZWxkLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJZ29Gb3JtR3JvdXBNb2R1bGUsXG4gICAgSWdvRm9ybUZpZWxkTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJZ29Gb3JtRm9ybU1vZHVsZSxcbiAgICBJZ29Gb3JtR3JvdXBNb2R1bGUsXG4gICAgSWdvRm9ybUZpZWxkTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIEZvcm1TZXJ2aWNlLFxuICAgIEZvcm1GaWVsZFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29Gb3JtTW9kdWxlIHt9XG4iXX0=