import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IgoStopPropagationModule } from '../../stop-propagation/stop-propagation.module';
import { IgoCustomHtmlModule } from '../../custom-html/custom-html.module';
import { EntityTableRowDirective } from './entity-table-row.directive';
import { EntityTableComponent } from './entity-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { IgoEntityTablePaginatorModule } from '../entity-table-paginator/entity-table-paginator.module';
import { IgoImageModule } from '../../image/image.module';
import { IgoLanguageModule } from '@igo2/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoEntityTableModule {
}
IgoEntityTableModule.ɵfac = function IgoEntityTableModule_Factory(t) { return new (t || IgoEntityTableModule)(); };
IgoEntityTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoEntityTableModule });
IgoEntityTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatTableModule,
            MatAutocompleteModule,
            MatSortModule,
            MatIconModule,
            MatButtonModule,
            MatCheckboxModule,
            MatPaginatorModule,
            MatSelectModule,
            IgoStopPropagationModule,
            IgoCustomHtmlModule,
            IgoEntityTablePaginatorModule,
            IgoImageModule,
            IgoLanguageModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatDatepickerModule,
            MatTooltipModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoEntityTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatTableModule,
                    MatAutocompleteModule,
                    MatSortModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatPaginatorModule,
                    MatSelectModule,
                    IgoStopPropagationModule,
                    IgoCustomHtmlModule,
                    IgoEntityTablePaginatorModule,
                    IgoImageModule,
                    IgoLanguageModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatInputModule,
                    MatDatepickerModule,
                    MatTooltipModule
                ],
                exports: [
                    EntityTableComponent
                ],
                declarations: [
                    EntityTableComponent,
                    EntityTableRowDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoEntityTableModule, { declarations: [EntityTableComponent,
        EntityTableRowDirective], imports: [CommonModule,
        MatTableModule,
        MatAutocompleteModule,
        MatSortModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatSelectModule,
        IgoStopPropagationModule,
        IgoCustomHtmlModule,
        IgoEntityTablePaginatorModule,
        IgoImageModule,
        IgoLanguageModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatTooltipModule], exports: [EntityTableComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9lbnRpdHktdGFibGUvZW50aXR5LXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFM0Q7O0dBRUc7QUErQkgsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjtzRUFBcEIsb0JBQW9COzBFQTdCdEI7WUFDUCxZQUFZO1lBQ1osY0FBYztZQUNkLHFCQUFxQjtZQUNyQixhQUFhO1lBQ2IsYUFBYTtZQUNiLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZix3QkFBd0I7WUFDeEIsbUJBQW1CO1lBQ25CLDZCQUE2QjtZQUM3QixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixnQkFBZ0I7U0FDakI7dUZBU1Usb0JBQW9CO2NBOUJoQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQiw2QkFBNkI7b0JBQzdCLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtpQkFDckI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsdUJBQXVCO2lCQUN4QjthQUNGOzt3RkFDWSxvQkFBb0IsbUJBSjdCLG9CQUFvQjtRQUNwQix1QkFBdUIsYUF6QnZCLFlBQVk7UUFDWixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixhQUFhO1FBQ2IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQixhQUdoQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcblxuaW1wb3J0IHsgSWdvU3RvcFByb3BhZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3RvcC1wcm9wYWdhdGlvbi9zdG9wLXByb3BhZ2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29DdXN0b21IdG1sTW9kdWxlIH0gZnJvbSAnLi4vLi4vY3VzdG9tLWh0bWwvY3VzdG9tLWh0bWwubW9kdWxlJztcbmltcG9ydCB7IEVudGl0eVRhYmxlUm93RGlyZWN0aXZlIH0gZnJvbSAnLi9lbnRpdHktdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFbnRpdHlUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZW50aXR5LXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHsgSWdvRW50aXR5VGFibGVQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICcuLi9lbnRpdHktdGFibGUtcGFnaW5hdG9yL2VudGl0eS10YWJsZS1wYWdpbmF0b3IubW9kdWxlJztcbmltcG9ydCB7IElnb0ltYWdlTW9kdWxlIH0gZnJvbSAnLi4vLi4vaW1hZ2UvaW1hZ2UubW9kdWxlJztcbmltcG9ydCB7IElnb0xhbmd1YWdlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBJZ29TdG9wUHJvcGFnYXRpb25Nb2R1bGUsXG4gICAgSWdvQ3VzdG9tSHRtbE1vZHVsZSxcbiAgICBJZ29FbnRpdHlUYWJsZVBhZ2luYXRvck1vZHVsZSxcbiAgICBJZ29JbWFnZU1vZHVsZSxcbiAgICBJZ29MYW5ndWFnZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRW50aXR5VGFibGVDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRW50aXR5VGFibGVDb21wb25lbnQsXG4gICAgRW50aXR5VGFibGVSb3dEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29FbnRpdHlUYWJsZU1vZHVsZSB7fVxuIl19