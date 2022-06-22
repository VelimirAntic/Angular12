import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IgoLanguageModule } from '@igo2/core';
import { IgoDynamicOutletModule } from '../../dynamic-component/dynamic-outlet/dynamic-outlet.module';
import { FormFieldComponent } from './form-field.component';
import { FormFieldSelectComponent } from './form-field-select.component';
import { FormFieldTextComponent } from './form-field-text.component';
import { FormFieldTextareaComponent } from './form-field-textarea.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoFormFieldModule {
}
IgoFormFieldModule.ɵfac = function IgoFormFieldModule_Factory(t) { return new (t || IgoFormFieldModule)(); };
IgoFormFieldModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFormFieldModule });
IgoFormFieldModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            IgoLanguageModule,
            IgoDynamicOutletModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFormFieldModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatIconModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    IgoLanguageModule,
                    IgoDynamicOutletModule
                ],
                exports: [
                    FormFieldComponent,
                    FormFieldSelectComponent,
                    FormFieldTextComponent,
                    FormFieldTextareaComponent
                ],
                declarations: [
                    FormFieldComponent,
                    FormFieldSelectComponent,
                    FormFieldTextComponent,
                    FormFieldTextareaComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFormFieldModule, { declarations: [FormFieldComponent,
        FormFieldSelectComponent,
        FormFieldTextComponent,
        FormFieldTextareaComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        IgoLanguageModule,
        IgoDynamicOutletModule], exports: [FormFieldComponent,
        FormFieldSelectComponent,
        FormFieldTextComponent,
        FormFieldTextareaComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUV0RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFFN0U7O0dBRUc7QUEwQkgsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjtvRUFBbEIsa0JBQWtCO3dFQXhCcEI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLHNCQUFzQjtTQUN2Qjt1RkFjVSxrQkFBa0I7Y0F6QjlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsd0JBQXdCO29CQUN4QixzQkFBc0I7b0JBQ3RCLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIsd0JBQXdCO29CQUN4QixzQkFBc0I7b0JBQ3RCLDBCQUEwQjtpQkFDM0I7YUFDRjs7d0ZBQ1ksa0JBQWtCLG1CQU4zQixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QiwwQkFBMEIsYUFwQjFCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsc0JBQXNCLGFBR3RCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcblxuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IElnb0R5bmFtaWNPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi8uLi9keW5hbWljLWNvbXBvbmVudC9keW5hbWljLW91dGxldC9keW5hbWljLW91dGxldC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1GaWVsZFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1maWVsZC1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1GaWVsZFRleHRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZmllbGQtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUZpZWxkVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZmllbGQtdGV4dGFyZWEuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGUsXG4gICAgSWdvRHluYW1pY091dGxldE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRm9ybUZpZWxkQ29tcG9uZW50LFxuICAgIEZvcm1GaWVsZFNlbGVjdENvbXBvbmVudCxcbiAgICBGb3JtRmllbGRUZXh0Q29tcG9uZW50LFxuICAgIEZvcm1GaWVsZFRleHRhcmVhQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZvcm1GaWVsZENvbXBvbmVudCxcbiAgICBGb3JtRmllbGRTZWxlY3RDb21wb25lbnQsXG4gICAgRm9ybUZpZWxkVGV4dENvbXBvbmVudCxcbiAgICBGb3JtRmllbGRUZXh0YXJlYUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElnb0Zvcm1GaWVsZE1vZHVsZSB7fVxuIl19