import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { IgoConfirmDialogModule, IgoStopPropagationModule } from '@igo2/common';
import { IgoAuthModule } from '@igo2/auth';
import { BookmarkButtonComponent } from './bookmark-button/bookmark-button.component';
import { BookmarkDialogComponent } from './bookmark-button/bookmark-dialog.component';
import { PoiButtonComponent } from './poi-button/poi-button.component';
import { PoiDialogComponent } from './poi-button/poi-dialog.component';
import { PoiService } from './poi-button/shared/poi.service';
import { UserDialogComponent } from './user-button/user-dialog.component';
import { UserButtonComponent } from './user-button/user-button.component';
import * as i0 from "@angular/core";
export class IgoContextMapButtonModule {
    static forRoot() {
        return {
            ngModule: IgoContextMapButtonModule
        };
    }
}
IgoContextMapButtonModule.ɵfac = function IgoContextMapButtonModule_Factory(t) { return new (t || IgoContextMapButtonModule)(); };
IgoContextMapButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoContextMapButtonModule });
IgoContextMapButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoiService], imports: [[
            CommonModule,
            IgoLanguageModule,
            IgoConfirmDialogModule,
            IgoStopPropagationModule,
            IgoAuthModule,
            FormsModule,
            MatIconModule,
            MatButtonModule,
            MatSelectModule,
            MatOptionModule,
            MatTooltipModule,
            MatFormFieldModule,
            MatDialogModule,
            MatInputModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoContextMapButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoLanguageModule,
                    IgoConfirmDialogModule,
                    IgoStopPropagationModule,
                    IgoAuthModule,
                    FormsModule,
                    MatIconModule,
                    MatButtonModule,
                    MatSelectModule,
                    MatOptionModule,
                    MatTooltipModule,
                    MatFormFieldModule,
                    MatDialogModule,
                    MatInputModule
                ],
                exports: [BookmarkButtonComponent, PoiButtonComponent, UserButtonComponent, BookmarkDialogComponent],
                declarations: [
                    BookmarkButtonComponent,
                    BookmarkDialogComponent,
                    PoiButtonComponent,
                    PoiDialogComponent,
                    UserButtonComponent,
                    UserDialogComponent
                ],
                providers: [PoiService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoContextMapButtonModule, { declarations: [BookmarkButtonComponent,
        BookmarkDialogComponent,
        PoiButtonComponent,
        PoiDialogComponent,
        UserButtonComponent,
        UserDialogComponent], imports: [CommonModule,
        IgoLanguageModule,
        IgoConfirmDialogModule,
        IgoStopPropagationModule,
        IgoAuthModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule], exports: [BookmarkButtonComponent, PoiButtonComponent, UserButtonComponent, BookmarkDialogComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tYXAtYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LW1hcC1idXR0b24vY29udGV4dC1tYXAtYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBOEIxRSxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSx5QkFBeUI7U0FDcEMsQ0FBQztJQUNKLENBQUM7O2tHQUxVLHlCQUF5QjsyRUFBekIseUJBQXlCO2dGQUZ6QixDQUFDLFVBQVUsQ0FBQyxZQXpCZDtZQUNQLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixhQUFhO1lBQ2IsV0FBVztZQUNYLGFBQWE7WUFDYixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixjQUFjO1NBQ2Y7dUZBWVUseUJBQXlCO2NBNUJyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtvQkFDeEIsYUFBYTtvQkFDYixXQUFXO29CQUNYLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztnQkFDcEcsWUFBWSxFQUFFO29CQUNaLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixtQkFBbUI7aUJBQ3BCO2dCQUNELFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUN4Qjs7d0ZBQ1kseUJBQXlCLG1CQVRsQyx1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLG1CQUFtQixhQXRCbkIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLGFBQWE7UUFDYixXQUFXO1FBQ1gsYUFBYTtRQUNiLGVBQWU7UUFDZixlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWMsYUFFTix1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0T3B0aW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7IElnb0xhbmd1YWdlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBJZ29Db25maXJtRGlhbG9nTW9kdWxlLCBJZ29TdG9wUHJvcGFnYXRpb25Nb2R1bGUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgSWdvQXV0aE1vZHVsZSB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuXG5pbXBvcnQgeyBCb29rbWFya0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYm9va21hcmstYnV0dG9uL2Jvb2ttYXJrLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9va21hcmtEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2Jvb2ttYXJrLWJ1dHRvbi9ib29rbWFyay1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFBvaUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vcG9pLWJ1dHRvbi9wb2ktYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2lEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BvaS1idXR0b24vcG9pLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9pU2VydmljZSB9IGZyb20gJy4vcG9pLWJ1dHRvbi9zaGFyZWQvcG9pLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vdXNlci1idXR0b24vdXNlci1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3VzZXItYnV0dG9uL3VzZXItYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGUsXG4gICAgSWdvQ29uZmlybURpYWxvZ01vZHVsZSxcbiAgICBJZ29TdG9wUHJvcGFnYXRpb25Nb2R1bGUsXG4gICAgSWdvQXV0aE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0T3B0aW9uTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQm9va21hcmtCdXR0b25Db21wb25lbnQsIFBvaUJ1dHRvbkNvbXBvbmVudCwgVXNlckJ1dHRvbkNvbXBvbmVudCwgQm9va21hcmtEaWFsb2dDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCb29rbWFya0J1dHRvbkNvbXBvbmVudCxcbiAgICBCb29rbWFya0RpYWxvZ0NvbXBvbmVudCxcbiAgICBQb2lCdXR0b25Db21wb25lbnQsXG4gICAgUG9pRGlhbG9nQ29tcG9uZW50LFxuICAgIFVzZXJCdXR0b25Db21wb25lbnQsXG4gICAgVXNlckRpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtQb2lTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29Db250ZXh0TWFwQnV0dG9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29Db250ZXh0TWFwQnV0dG9uTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29Db250ZXh0TWFwQnV0dG9uTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19