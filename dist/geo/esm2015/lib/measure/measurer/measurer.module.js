import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { IgoLanguageModule } from '@igo2/core';
import { IgoEntityTableModule } from '@igo2/common';
import { MeasureFormatPipe } from './measure-format.pipe';
import { MeasurerItemComponent } from './measurer-item.component';
import { MeasurerComponent } from './measurer.component';
import { MeasurerDialogComponent } from './measurer-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/slide-toggle";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/divider";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@angular/material/icon";
import * as i8 from "@igo2/common";
import * as i9 from "@ngx-translate/core";
/**
 * @ignore
 */
export class IgoMeasurerModule {
}
IgoMeasurerModule.ɵfac = function IgoMeasurerModule_Factory(t) { return new (t || IgoMeasurerModule)(); };
IgoMeasurerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoMeasurerModule });
IgoMeasurerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatIconModule,
            MatTooltipModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatDividerModule,
            IgoLanguageModule,
            IgoEntityTableModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoMeasurerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatIconModule,
                    MatTooltipModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    MatSlideToggleModule,
                    MatDividerModule,
                    IgoLanguageModule,
                    IgoEntityTableModule
                ],
                declarations: [
                    MeasureFormatPipe,
                    MeasurerItemComponent,
                    MeasurerComponent,
                    MeasurerDialogComponent
                ],
                exports: [
                    MeasureFormatPipe,
                    MeasurerComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoMeasurerModule, { declarations: [MeasureFormatPipe,
        MeasurerItemComponent,
        MeasurerComponent,
        MeasurerDialogComponent], imports: [CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatDividerModule,
        IgoLanguageModule,
        IgoEntityTableModule], exports: [MeasureFormatPipe,
        MeasurerComponent] }); })();
i0.ɵɵsetComponentScope(MeasurerComponent, [i1.MatButtonToggleGroup, i1.MatButtonToggle, i2.MatSlideToggle, i3.NgIf, i4.MatDivider, MeasurerItemComponent, i5.MatButton, i6.MatTooltip, i7.MatIcon, i8.EntityTableComponent], [i9.TranslatePipe, i3.AsyncPipe]);
i0.ɵɵsetComponentScope(MeasurerDialogComponent, [i3.NgIf], [i9.TranslatePipe, MeasureFormatPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWVhc3VyZS9tZWFzdXJlci9tZWFzdXJlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7O0FBRXRFOztHQUVHO0FBMkJILE1BQU0sT0FBTyxpQkFBaUI7O2tGQUFqQixpQkFBaUI7bUVBQWpCLGlCQUFpQjt1RUF6Qm5CO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixvQkFBb0I7U0FDckI7dUZBWVUsaUJBQWlCO2NBMUI3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixvQkFBb0I7aUJBQ3JCO2dCQUNELFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLGlCQUFpQjtpQkFDbEI7YUFDRjs7d0ZBQ1ksaUJBQWlCLG1CQVYxQixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQix1QkFBdUIsYUFqQnZCLFlBQVk7UUFDWixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsb0JBQW9CLGFBU3BCLGlCQUFpQjtRQUNqQixpQkFBaUI7dUJBTGpCLGlCQUFpQiwyRkFEakIscUJBQXFCO3VCQUVyQix1QkFBdUIsZ0NBSHZCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdERpdmlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcblxuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IElnb0VudGl0eVRhYmxlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHsgTWVhc3VyZUZvcm1hdFBpcGUgfSBmcm9tICcuL21lYXN1cmUtZm9ybWF0LnBpcGUnO1xuaW1wb3J0IHsgTWVhc3VyZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9tZWFzdXJlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZWFzdXJlckNvbXBvbmVudCB9IGZyb20gJy4vbWVhc3VyZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1lYXN1cmVyRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9tZWFzdXJlci1kaWFsb2cuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlLFxuICAgIElnb0VudGl0eVRhYmxlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1lYXN1cmVGb3JtYXRQaXBlLFxuICAgIE1lYXN1cmVySXRlbUNvbXBvbmVudCxcbiAgICBNZWFzdXJlckNvbXBvbmVudCxcbiAgICBNZWFzdXJlckRpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTWVhc3VyZUZvcm1hdFBpcGUsXG4gICAgTWVhc3VyZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29NZWFzdXJlck1vZHVsZSB7fVxuIl19