import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MsalModule } from '@azure/msal-angular';
import { StorageService, IgoLanguageModule } from '@igo2/core';
import { AuthStorageService } from './shared/storage.service';
import { ProtectedDirective } from './shared/protected.directive';
import { AuthInterceptor } from './shared/auth.interceptor';
import { provideAuthMicrosoft } from './shared/auth-microsoft.provider';
import { AuthInternComponent } from './auth-form/auth-intern.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthGoogleComponent } from './auth-form/auth-google.component';
import { AuthFacebookComponent } from './auth-form/auth-facebook.component';
import { AuthMicrosoftComponent } from './auth-form/auth-microsoft.component';
import { AuthMicrosoftb2cComponent } from './auth-form/auth-microsoftb2c.component';
import * as i0 from "@angular/core";
export class IgoAuthModule {
    static forRoot() {
        return {
            ngModule: IgoAuthModule,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                },
                {
                    provide: StorageService,
                    useClass: AuthStorageService
                },
                ...provideAuthMicrosoft('add'),
                ...provideAuthMicrosoft('b2c')
            ]
        };
    }
}
IgoAuthModule.ɵfac = function IgoAuthModule_Factory(t) { return new (t || IgoAuthModule)(); };
IgoAuthModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAuthModule });
IgoAuthModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            IgoLanguageModule,
            MsalModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAuthModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    MatButtonModule,
                    IgoLanguageModule,
                    MsalModule
                ],
                declarations: [
                    AuthFormComponent,
                    AuthGoogleComponent,
                    AuthInternComponent,
                    AuthFacebookComponent,
                    AuthMicrosoftComponent,
                    AuthMicrosoftb2cComponent,
                    ProtectedDirective
                ],
                exports: [AuthFormComponent, ProtectedDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAuthModule, { declarations: [AuthFormComponent,
        AuthGoogleComponent,
        AuthInternComponent,
        AuthFacebookComponent,
        AuthMicrosoftComponent,
        AuthMicrosoftb2cComponent,
        ProtectedDirective], imports: [CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        IgoLanguageModule,
        MsalModule], exports: [AuthFormComponent, ProtectedDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9saWIvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUF3QnBGLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCO2dCQUNELEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDO2dCQUM5QixHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQzthQUMvQjtTQUNGLENBQUM7SUFDSixDQUFDOzswRUFsQlUsYUFBYTsrREFBYixhQUFhO21FQXJCZjtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxhQUFhO1lBQ2IsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixVQUFVO1NBQ1g7dUZBWVUsYUFBYTtjQXRCekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLFVBQVU7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7YUFDakQ7O3dGQUNZLGFBQWEsbUJBVnRCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLGtCQUFrQixhQWhCbEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGFBQWE7UUFDYixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLFVBQVUsYUFXRixpQkFBaUIsRUFBRSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTXNhbE1vZHVsZSB9IGZyb20gJ0BhenVyZS9tc2FsLWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSwgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuaW1wb3J0IHsgQXV0aFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb3RlY3RlZERpcmVjdGl2ZSB9IGZyb20gJy4vc2hhcmVkL3Byb3RlY3RlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9zaGFyZWQvYXV0aC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBwcm92aWRlQXV0aE1pY3Jvc29mdCB9IGZyb20gJy4vc2hhcmVkL2F1dGgtbWljcm9zb2Z0LnByb3ZpZGVyJztcblxuaW1wb3J0IHsgQXV0aEludGVybkNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC1mb3JtL2F1dGgtaW50ZXJuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC1mb3JtL2F1dGgtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEdvb2dsZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC1mb3JtL2F1dGgtZ29vZ2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoRmFjZWJvb2tDb21wb25lbnQgfSBmcm9tICcuL2F1dGgtZm9ybS9hdXRoLWZhY2Vib29rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoTWljcm9zb2Z0Q29tcG9uZW50IH0gZnJvbSAnLi9hdXRoLWZvcm0vYXV0aC1taWNyb3NvZnQuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhNaWNyb3NvZnRiMmNDb21wb25lbnQgfSBmcm9tICcuL2F1dGgtZm9ybS9hdXRoLW1pY3Jvc29mdGIyYy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlLFxuICAgIE1zYWxNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXV0aEZvcm1Db21wb25lbnQsXG4gICAgQXV0aEdvb2dsZUNvbXBvbmVudCxcbiAgICBBdXRoSW50ZXJuQ29tcG9uZW50LFxuICAgIEF1dGhGYWNlYm9va0NvbXBvbmVudCxcbiAgICBBdXRoTWljcm9zb2Z0Q29tcG9uZW50LFxuICAgIEF1dGhNaWNyb3NvZnRiMmNDb21wb25lbnQsXG4gICAgUHJvdGVjdGVkRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtBdXRoRm9ybUNvbXBvbmVudCwgUHJvdGVjdGVkRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29BdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29BdXRoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29BdXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICB1c2VDbGFzczogQXV0aEludGVyY2VwdG9yLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICB1c2VDbGFzczogQXV0aFN0b3JhZ2VTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIC4uLnByb3ZpZGVBdXRoTWljcm9zb2Z0KCdhZGQnKSxcbiAgICAgICAgLi4ucHJvdmlkZUF1dGhNaWNyb3NvZnQoJ2IyYycpXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19