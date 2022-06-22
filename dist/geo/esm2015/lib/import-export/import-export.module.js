import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { IgoKeyValueModule, IgoDrapDropModule, IgoSpinnerModule } from '@igo2/common';
import { ExportButtonComponent } from './export-button/export-button.component';
import { ImportExportComponent } from './import-export/import-export.component';
import { DropGeoFileDirective } from './shared/drop-geo-file.directive';
import { IgoStyleListModule } from './style-list/style-list.module';
import * as i0 from "@angular/core";
import * as i1 from "./style-list/style-list.module";
export class IgoImportExportModule {
    static forRoot() {
        return {
            ngModule: IgoImportExportModule
        };
    }
}
IgoImportExportModule.ɵfac = function IgoImportExportModule_Factory(t) { return new (t || IgoImportExportModule)(); };
IgoImportExportModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoImportExportModule });
IgoImportExportModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatIconModule,
            MatTooltipModule,
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatTabsModule,
            MatSelectModule,
            MatOptionModule,
            MatFormFieldModule,
            MatInputModule,
            MatSlideToggleModule,
            IgoLanguageModule,
            IgoSpinnerModule,
            IgoKeyValueModule,
            IgoDrapDropModule,
            IgoStyleListModule.forRoot()
        ], IgoStyleListModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoImportExportModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatIconModule,
                    MatTooltipModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatTabsModule,
                    MatSelectModule,
                    MatOptionModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSlideToggleModule,
                    IgoLanguageModule,
                    IgoSpinnerModule,
                    IgoKeyValueModule,
                    IgoDrapDropModule,
                    IgoStyleListModule.forRoot()
                ],
                exports: [ImportExportComponent, DropGeoFileDirective, IgoStyleListModule, ExportButtonComponent],
                declarations: [ImportExportComponent, DropGeoFileDirective, ExportButtonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoImportExportModule, { declarations: [ImportExportComponent, DropGeoFileDirective, ExportButtonComponent], imports: [MatIconModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        IgoLanguageModule,
        IgoSpinnerModule,
        IgoKeyValueModule,
        IgoDrapDropModule, i1.IgoStyleListModule], exports: [ImportExportComponent, DropGeoFileDirective, IgoStyleListModule, ExportButtonComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWV4cG9ydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9pbXBvcnQtZXhwb3J0L2ltcG9ydC1leHBvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBMEJwRSxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztJQUNKLENBQUM7OzBGQUxVLHFCQUFxQjt1RUFBckIscUJBQXFCOzJFQXZCdkI7WUFDUCxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsYUFBYTtZQUNiLGVBQWU7WUFDZixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtTQUM3QixFQUNzRCxrQkFBa0I7dUZBRzlELHFCQUFxQjtjQXhCakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2lCQUM3QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsQ0FBQztnQkFDakcsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLENBQUM7YUFDbkY7O3dGQUNZLHFCQUFxQixtQkFGakIscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLGFBcEIvRSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsaUJBQWlCLG9DQUdULHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Ub2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7IE1hdE9wdGlvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRTbGlkZVRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5pbXBvcnQgeyBNYXRUYWJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7IElnb0xhbmd1YWdlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBJZ29LZXlWYWx1ZU1vZHVsZSwgSWdvRHJhcERyb3BNb2R1bGUsIElnb1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBFeHBvcnRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2V4cG9ydC1idXR0b24vZXhwb3J0LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW1wb3J0RXhwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9pbXBvcnQtZXhwb3J0L2ltcG9ydC1leHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7IERyb3BHZW9GaWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zaGFyZWQvZHJvcC1nZW8tZmlsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWdvU3R5bGVMaXN0TW9kdWxlIH0gZnJvbSAnLi9zdHlsZS1saXN0L3N0eWxlLWxpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdE9wdGlvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGUsXG4gICAgSWdvU3Bpbm5lck1vZHVsZSxcbiAgICBJZ29LZXlWYWx1ZU1vZHVsZSxcbiAgICBJZ29EcmFwRHJvcE1vZHVsZSxcbiAgICBJZ29TdHlsZUxpc3RNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGV4cG9ydHM6IFtJbXBvcnRFeHBvcnRDb21wb25lbnQsIERyb3BHZW9GaWxlRGlyZWN0aXZlLCBJZ29TdHlsZUxpc3RNb2R1bGUsIEV4cG9ydEJ1dHRvbkNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW0ltcG9ydEV4cG9ydENvbXBvbmVudCwgRHJvcEdlb0ZpbGVEaXJlY3RpdmUsIEV4cG9ydEJ1dHRvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSWdvSW1wb3J0RXhwb3J0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29JbXBvcnRFeHBvcnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0ltcG9ydEV4cG9ydE1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==