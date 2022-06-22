import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IgoLanguageModule } from '@igo2/core';
import { GeometryFormFieldComponent } from './geometry-form-field.component';
import { GeometryFormFieldInputComponent } from './geometry-form-field-input.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoGeometryFormFieldModule {
}
IgoGeometryFormFieldModule.ɵfac = function IgoGeometryFormFieldModule_Factory(t) { return new (t || IgoGeometryFormFieldModule)(); };
IgoGeometryFormFieldModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoGeometryFormFieldModule });
IgoGeometryFormFieldModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatButtonToggleModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoGeometryFormFieldModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatIconModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    IgoLanguageModule
                ],
                exports: [
                    GeometryFormFieldComponent,
                    GeometryFormFieldInputComponent
                ],
                declarations: [
                    GeometryFormFieldComponent,
                    GeometryFormFieldInputComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoGeometryFormFieldModule, { declarations: [GeometryFormFieldComponent,
        GeometryFormFieldInputComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
        IgoLanguageModule], exports: [GeometryFormFieldComponent,
        GeometryFormFieldInputComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnktZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9nZW9tZXRyeS9nZW9tZXRyeS1mb3JtLWZpZWxkL2dlb21ldHJ5LWZvcm0tZmllbGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFL0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRXhGOztHQUVHO0FBc0JILE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7NEVBQTFCLDBCQUEwQjtnRkFwQjVCO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixpQkFBaUI7U0FDbEI7dUZBVVUsMEJBQTBCO2NBckJ0QyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YscUJBQXFCO29CQUNyQixpQkFBaUI7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCwwQkFBMEI7b0JBQzFCLCtCQUErQjtpQkFDaEM7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLDBCQUEwQjtvQkFDMUIsK0JBQStCO2lCQUNoQzthQUNGOzt3RkFDWSwwQkFBMEIsbUJBSm5DLDBCQUEwQjtRQUMxQiwrQkFBK0IsYUFoQi9CLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsaUJBQWlCLGFBR2pCLDBCQUEwQjtRQUMxQiwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuaW1wb3J0IHsgR2VvbWV0cnlGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2dlb21ldHJ5LWZvcm0tZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5Rm9ybUZpZWxkSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2dlb21ldHJ5LWZvcm0tZmllbGQtaW5wdXQuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBHZW9tZXRyeUZvcm1GaWVsZENvbXBvbmVudCxcbiAgICBHZW9tZXRyeUZvcm1GaWVsZElucHV0Q29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdlb21ldHJ5Rm9ybUZpZWxkQ29tcG9uZW50LFxuICAgIEdlb21ldHJ5Rm9ybUZpZWxkSW5wdXRDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29HZW9tZXRyeUZvcm1GaWVsZE1vZHVsZSB7fVxuIl19