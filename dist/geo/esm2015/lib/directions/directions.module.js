import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { provideDirectionsSourceService } from './shared/directions-source.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DirectionsInputsComponent } from './directions-inputs/directions-inputs.component';
import { DirectionsComponent } from './directions.component';
import { DirectionsButtonsComponent } from './directions-buttons/directions-buttons.component';
import { DirectionsResultsComponent } from './directions-results/directions-results.component';
import * as i0 from "@angular/core";
export class IgoDirectionsModule {
    static forRoot() {
        return {
            ngModule: IgoDirectionsModule
        };
    }
}
IgoDirectionsModule.ɵfac = function IgoDirectionsModule_Factory(t) { return new (t || IgoDirectionsModule)(); };
IgoDirectionsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoDirectionsModule });
IgoDirectionsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [provideDirectionsSourceService()], imports: [[
            CommonModule,
            DragDropModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatButtonModule,
            MatListModule,
            MatDividerModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatTooltipModule,
            MatAutocompleteModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoDirectionsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    DragDropModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatIconModule,
                    MatButtonModule,
                    MatListModule,
                    MatDividerModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatOptionModule,
                    MatSelectModule,
                    MatTooltipModule,
                    MatAutocompleteModule,
                    IgoLanguageModule
                ],
                exports: [
                    DirectionsComponent,
                    DirectionsInputsComponent,
                    DirectionsButtonsComponent,
                    DirectionsResultsComponent
                ],
                declarations: [
                    DirectionsComponent,
                    DirectionsInputsComponent,
                    DirectionsButtonsComponent,
                    DirectionsResultsComponent
                ],
                providers: [provideDirectionsSourceService()]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoDirectionsModule, { declarations: [DirectionsComponent,
        DirectionsInputsComponent,
        DirectionsButtonsComponent,
        DirectionsResultsComponent], imports: [CommonModule,
        DragDropModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTooltipModule,
        MatAutocompleteModule,
        IgoLanguageModule], exports: [DirectionsComponent,
        DirectionsInputsComponent,
        DirectionsButtonsComponent,
        DirectionsResultsComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kaXJlY3Rpb25zL2RpcmVjdGlvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRS9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFrQy9GLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtTQUM5QixDQUFDO0lBQ0osQ0FBQzs7c0ZBTFUsbUJBQW1CO3FFQUFuQixtQkFBbUI7MEVBRm5CLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxZQTdCcEM7WUFDUCxZQUFZO1lBQ1osY0FBYztZQUNkLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGVBQWU7WUFDZixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTtZQUNmLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCLGlCQUFpQjtTQUNsQjt1RkFlVSxtQkFBbUI7Y0FoQy9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIseUJBQXlCO29CQUN6QiwwQkFBMEI7b0JBQzFCLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNYLG1CQUFtQjtvQkFDcEIseUJBQXlCO29CQUN6QiwwQkFBMEI7b0JBQzFCLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsQ0FBQzthQUM5Qzs7d0ZBQ1ksbUJBQW1CLG1CQVAzQixtQkFBbUI7UUFDcEIseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiwwQkFBMEIsYUExQjFCLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsaUJBQWlCLGFBR2pCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0T3B0aW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuaW1wb3J0IHsgcHJvdmlkZURpcmVjdGlvbnNTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvZGlyZWN0aW9ucy1zb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgRGlyZWN0aW9uc0lucHV0c0NvbXBvbmVudCB9IGZyb20gJy4vZGlyZWN0aW9ucy1pbnB1dHMvZGlyZWN0aW9ucy1pbnB1dHMuY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2RpcmVjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGlvbnNCdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnLi9kaXJlY3Rpb25zLWJ1dHRvbnMvZGlyZWN0aW9ucy1idXR0b25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3Rpb25zUmVzdWx0c0NvbXBvbmVudCB9IGZyb20gJy4vZGlyZWN0aW9ucy1yZXN1bHRzL2RpcmVjdGlvbnMtcmVzdWx0cy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIERyYWdEcm9wTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRPcHRpb25Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEaXJlY3Rpb25zQ29tcG9uZW50LFxuICAgIERpcmVjdGlvbnNJbnB1dHNDb21wb25lbnQsXG4gICAgRGlyZWN0aW9uc0J1dHRvbnNDb21wb25lbnQsXG4gICAgRGlyZWN0aW9uc1Jlc3VsdHNDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgIERpcmVjdGlvbnNDb21wb25lbnQsXG4gICAgRGlyZWN0aW9uc0lucHV0c0NvbXBvbmVudCxcbiAgICBEaXJlY3Rpb25zQnV0dG9uc0NvbXBvbmVudCxcbiAgICBEaXJlY3Rpb25zUmVzdWx0c0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtwcm92aWRlRGlyZWN0aW9uc1NvdXJjZVNlcnZpY2UoKV1cbn0pXG5leHBvcnQgY2xhc3MgSWdvRGlyZWN0aW9uc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SWdvRGlyZWN0aW9uc01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSWdvRGlyZWN0aW9uc01vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==