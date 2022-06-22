import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IgoLanguageModule } from '@igo2/core';
import { IgoFormFieldModule } from '../form-field/form-field.module';
import { FormGroupComponent } from './form-group.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoFormGroupModule {
}
IgoFormGroupModule.ɵfac = function IgoFormGroupModule_Factory(t) { return new (t || IgoFormGroupModule)(); };
IgoFormGroupModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFormGroupModule });
IgoFormGroupModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatFormFieldModule,
            IgoLanguageModule,
            IgoFormFieldModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFormGroupModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatFormFieldModule,
                    IgoLanguageModule,
                    IgoFormFieldModule
                ],
                exports: [
                    FormGroupComponent
                ],
                declarations: [
                    FormGroupComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFormGroupModule, { declarations: [FormGroupComponent], imports: [CommonModule,
        MatFormFieldModule,
        IgoLanguageModule,
        IgoFormFieldModule], exports: [FormGroupComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU1RDs7R0FFRztBQWVILE1BQU0sT0FBTyxrQkFBa0I7O29GQUFsQixrQkFBa0I7b0VBQWxCLGtCQUFrQjt3RUFicEI7WUFDUCxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixrQkFBa0I7U0FDbkI7dUZBUVUsa0JBQWtCO2NBZDlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osa0JBQWtCO2lCQUNuQjthQUNGOzt3RkFDWSxrQkFBa0IsbUJBSDNCLGtCQUFrQixhQVRsQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixrQkFBa0IsYUFHbEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuaW1wb3J0IHsgSWdvRm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnLi4vZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZ3JvdXAuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlLFxuICAgIElnb0Zvcm1GaWVsZE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZvcm1Hcm91cENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElnb0Zvcm1Hcm91cE1vZHVsZSB7fVxuIl19