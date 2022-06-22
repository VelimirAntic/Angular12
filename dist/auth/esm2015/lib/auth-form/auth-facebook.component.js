import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../shared/auth.service";
import * as i2 from "@igo2/core";
export class AuthFacebookComponent {
    constructor(authService, config, appRef) {
        this.authService = authService;
        this.config = config;
        this.appRef = appRef;
        this.login = new EventEmitter();
        this.options = this.config.getConfig('auth.facebook') || {};
        if (this.options.appId) {
            this.loadSDKFacebook();
        }
        else {
            console.warn('Facebook authentification needs "appId" option');
        }
    }
    subscribeEvents() {
        window.FB.Event.subscribe('auth.statusChange', rep => {
            this.statusChangeCallback(rep);
        });
    }
    statusChangeCallback(response) {
        if (response.status === 'connected') {
            const accessToken = response.authResponse.accessToken;
            this.loginFacebook(accessToken);
        }
    }
    loginFacebook(token) {
        this.authService.loginWithToken(token, 'facebook').subscribe(() => {
            this.appRef.tick();
            this.login.emit(true);
        });
    }
    loadSDKFacebook() {
        if (document.getElementById('facebook-jssdk')) {
            return;
        }
        const urlSDK = 'https://connect.facebook.net/fr_CA/sdk.js#xfbml=1&version=v2.9';
        const fjs = document.getElementsByTagName('script')[0];
        const js = document.createElement('script');
        js.id = 'facebook-jssdk';
        js.src = `${urlSDK}&appId=${this.options.appId}`;
        js.onload = () => {
            this.subscribeEvents();
        };
        fjs.parentNode.insertBefore(js, fjs);
    }
}
AuthFacebookComponent.ɵfac = function AuthFacebookComponent_Factory(t) { return new (t || AuthFacebookComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i0.ApplicationRef)); };
AuthFacebookComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthFacebookComponent, selectors: [["igo-auth-facebook"]], outputs: { login: "login" }, decls: 1, vars: 0, consts: [["scope", "public_profile,email", "data-max-rows", "1", "data-size", "large", "data-button-type", "login_with", "data-show-faces", "false", "data-auto-logout-link", "false", "data-use-continue-as", "false", 1, "fb-login-button"]], template: function AuthFacebookComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } }, styles: ["[_nghost-%COMP%]{padding:10px 10px 10px 0;display:inline-block;position:relative;top:-3px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthFacebookComponent, [{
        type: Component,
        args: [{
                selector: 'igo-auth-facebook',
                templateUrl: './auth-facebook.component.html',
                styleUrls: ['./auth-facebook.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.ConfigService }, { type: i0.ApplicationRef }]; }, { login: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1mYWNlYm9vay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9saWIvYXV0aC1mb3JtL2F1dGgtZmFjZWJvb2suY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2F1dGgtZm9ybS9hdXRoLWZhY2Vib29rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7Ozs7QUFZdkIsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQyxZQUNVLFdBQXdCLEVBQ3hCLE1BQXFCLEVBQ3JCLE1BQXNCO1FBRnRCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFMdEIsVUFBSyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBT25FLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBRU8sZUFBZTtRQUNwQixNQUFjLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9CQUFvQixDQUFDLFFBQVE7UUFDbkMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNuQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVPLGFBQWEsQ0FBQyxLQUFLO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUM3QyxPQUFPO1NBQ1I7UUFFRCxNQUFNLE1BQU0sR0FDVixnRUFBZ0UsQ0FBQztRQUVuRSxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsRUFBRSxHQUFHLGdCQUFnQixDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLFVBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqRCxFQUFFLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7MEZBdkRVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDbEJsQyx5QkFJTTs7dUZEY08scUJBQXFCO2NBTmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7dUhBSVcsS0FBSztrQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQXBwbGljYXRpb25SZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBBdXRoRmFjZWJvb2tPcHRpb25zIH0gZnJvbSAnLi4vc2hhcmVkL2F1dGguaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1hdXRoLWZhY2Vib29rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGgtZmFjZWJvb2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRoLWZhY2Vib29rLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhGYWNlYm9va0NvbXBvbmVudCB7XG4gIHByaXZhdGUgb3B0aW9uczogQXV0aEZhY2Vib29rT3B0aW9ucztcblxuICBAT3V0cHV0KCkgbG9naW46IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWZcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdhdXRoLmZhY2Vib29rJykgfHwge307XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFwcElkKSB7XG4gICAgICB0aGlzLmxvYWRTREtGYWNlYm9vaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZhY2Vib29rIGF1dGhlbnRpZmljYXRpb24gbmVlZHMgXCJhcHBJZFwiIG9wdGlvbicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRXZlbnRzKCkge1xuICAgICh3aW5kb3cgYXMgYW55KS5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGguc3RhdHVzQ2hhbmdlJywgcmVwID0+IHtcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlQ2FsbGJhY2socmVwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdHVzQ2hhbmdlQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXNwb25zZS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG4gICAgICB0aGlzLmxvZ2luRmFjZWJvb2soYWNjZXNzVG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9naW5GYWNlYm9vayh0b2tlbikge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW5XaXRoVG9rZW4odG9rZW4sICdmYWNlYm9vaycpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmFwcFJlZi50aWNrKCk7XG4gICAgICB0aGlzLmxvZ2luLmVtaXQodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRTREtGYWNlYm9vaygpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rLWpzc2RrJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cmxTREsgPVxuICAgICAgJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZnJfQ0Evc2RrLmpzI3hmYm1sPTEmdmVyc2lvbj12Mi45JztcblxuICAgIGNvbnN0IGZqcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICBjb25zdCBqcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGpzLmlkID0gJ2ZhY2Vib29rLWpzc2RrJztcbiAgICBqcy5zcmMgPSBgJHt1cmxTREt9JmFwcElkPSR7dGhpcy5vcHRpb25zLmFwcElkfWA7XG4gICAganMub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdWJzY3JpYmVFdmVudHMoKTtcbiAgICB9O1xuICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTtcbiAgfVxufVxuIiwiPGRpdiBzY29wZT1cInB1YmxpY19wcm9maWxlLGVtYWlsXCJcbiAgICAgY2xhc3M9XCJmYi1sb2dpbi1idXR0b25cIiBkYXRhLW1heC1yb3dzPVwiMVwiIGRhdGEtc2l6ZT1cImxhcmdlXCJcbiAgICAgZGF0YS1idXR0b24tdHlwZT1cImxvZ2luX3dpdGhcIiBkYXRhLXNob3ctZmFjZXM9XCJmYWxzZVwiXG4gICAgIGRhdGEtYXV0by1sb2dvdXQtbGluaz1cImZhbHNlXCIgZGF0YS11c2UtY29udGludWUtYXM9XCJmYWxzZVwiPlxuPC9kaXY+XG4iXX0=