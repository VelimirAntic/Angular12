import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../shared/auth.service";
import * as i2 from "@igo2/core";
export class AuthGoogleComponent {
    constructor(authService, config, languageService, appRef) {
        this.authService = authService;
        this.config = config;
        this.languageService = languageService;
        this.appRef = appRef;
        this.login = new EventEmitter();
        this.options = this.config.getConfig('auth.google') || {};
        if (this.options.apiKey && this.options.clientId) {
            this.loadSDKGoogle();
            this.loadPlatform();
        }
        else {
            console.warn('Google authentification needs "apiKey" and "clientId" options');
        }
    }
    handleSignInClick() {
        window.gapi.auth2.getAuthInstance().signIn();
    }
    handleSignOutClick() {
        window.gapi.auth2.getAuthInstance().signOut();
    }
    handleClientLoad() {
        window.gapi.load('client:auth2', () => this.initClient());
    }
    initClient() {
        window.gapi.client
            .init({
            apiKey: this.options.apiKey,
            clientId: this.options.clientId,
            discoveryDocs: [
                'https://people.googleapis.com/$discovery/rest?version=v1'
            ],
            scope: 'profile'
        })
            .then(() => {
            this.handleSignOutClick();
            this.updateTextButton();
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(rep => {
                this.updateSigninStatus(rep);
            });
        });
    }
    updateSigninStatus(isSignedIn) {
        this.updateTextButton();
        if (isSignedIn) {
            this.loginGoogle(window.gapi.client.getToken().access_token);
        }
    }
    updateTextButton() {
        const btn = document.querySelector('span[id^="not_signed_"]');
        if (btn && this.languageService.getLanguage() !== 'en') {
            if (btn.innerHTML === 'Sign in with Google') {
                btn.innerHTML = this.languageService.translate.instant('igo.auth.google.login');
            }
            else if (btn.innerHTML === 'Signed in with Google') {
                btn.innerHTML = this.languageService.translate.instant('igo.auth.google.logged');
            }
        }
    }
    loginGoogle(token) {
        this.authService.loginWithToken(token, 'google').subscribe(() => {
            this.appRef.tick();
            this.login.emit(true);
        });
    }
    loadSDKGoogle() {
        const fjs = document.getElementsByTagName('script')[0];
        const js = document.createElement('script');
        js.id = 'google-jssdk';
        js.src = 'https://apis.google.com/js/api.js';
        js.onload = () => {
            this.handleClientLoad();
        };
        fjs.parentNode.insertBefore(js, fjs);
    }
    loadPlatform() {
        const fjs = document.getElementsByTagName('script')[0];
        const js = document.createElement('script');
        js.id = 'google-platform';
        js.src = 'https://apis.google.com/js/platform.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}
AuthGoogleComponent.ɵfac = function AuthGoogleComponent_Factory(t) { return new (t || AuthGoogleComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i0.ApplicationRef)); };
AuthGoogleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthGoogleComponent, selectors: [["igo-auth-google"]], outputs: { login: "login" }, decls: 1, vars: 0, consts: [["data-height", "40", "data-width", "265", "data-longtitle", "true", 1, "g-signin2", "google-login-button"]], template: function AuthGoogleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } }, styles: ["[_nghost-%COMP%]{padding:10px 10px 10px 0;display:inline-block}.google-login-button[_ngcontent-%COMP%]     .abcRioButton{color:#000000de}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGoogleComponent, [{
        type: Component,
        args: [{
                selector: 'igo-auth-google',
                templateUrl: './auth-google.component.html',
                styleUrls: ['./auth-google.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.ConfigService }, { type: i2.LanguageService }, { type: i0.ApplicationRef }]; }, { login: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1nb29nbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2F1dGgtZm9ybS9hdXRoLWdvb2dsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9saWIvYXV0aC1mb3JtL2F1dGgtZ29vZ2xlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7Ozs7QUFZdkIsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QixZQUNVLFdBQXdCLEVBQ3hCLE1BQXFCLEVBQ3JCLGVBQWdDLEVBQ2hDLE1BQXNCO1FBSHRCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBTnRCLFVBQUssR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVFuRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUxRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ2hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUMvRTtJQUNILENBQUM7SUFFTSxpQkFBaUI7UUFDckIsTUFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFF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QUFDLENBQUM7UUFDRixHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLFlBQVk7UUFDbEIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQztRQUMxQixFQUFFLENBQUMsR0FBRyxHQUFHLHdDQUF3QyxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDOztzRkE5RlUsbUJBQW1CO3NFQUFuQixtQkFBbUI7UUNsQmhDLHlCQUFtRzs7dUZEa0J0RixtQkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtxSkFJVyxLQUFLO2tCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBcHBsaWNhdGlvblJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UsIExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQXV0aEdvb2dsZU9wdGlvbnMgfSBmcm9tICcuLi9zaGFyZWQvYXV0aC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWF1dGgtZ29vZ2xlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGgtZ29vZ2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0aC1nb29nbGUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQXV0aEdvb2dsZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgb3B0aW9uczogQXV0aEdvb2dsZU9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIGxvZ2luOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWZcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdhdXRoLmdvb2dsZScpIHx8IHt9O1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hcGlLZXkgJiYgdGhpcy5vcHRpb25zLmNsaWVudElkKSB7XG4gICAgICB0aGlzLmxvYWRTREtHb29nbGUoKTtcbiAgICAgIHRoaXMubG9hZFBsYXRmb3JtKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignR29vZ2xlIGF1dGhlbnRpZmljYXRpb24gbmVlZHMgXCJhcGlLZXlcIiBhbmQgXCJjbGllbnRJZFwiIG9wdGlvbnMnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2lnbkluQ2xpY2soKSB7XG4gICAgKHdpbmRvdyBhcyBhbnkpLmdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuc2lnbkluKCk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2lnbk91dENsaWNrKCkge1xuICAgICh3aW5kb3cgYXMgYW55KS5nYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25PdXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50TG9hZCgpIHtcbiAgICAod2luZG93IGFzIGFueSkuZ2FwaS5sb2FkKCdjbGllbnQ6YXV0aDInLCAoKSA9PiB0aGlzLmluaXRDbGllbnQoKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRDbGllbnQoKSB7XG4gICAgKHdpbmRvdyBhcyBhbnkpLmdhcGkuY2xpZW50XG4gICAgICAuaW5pdCh7XG4gICAgICAgIGFwaUtleTogdGhpcy5vcHRpb25zLmFwaUtleSxcbiAgICAgICAgY2xpZW50SWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJZCxcbiAgICAgICAgZGlzY292ZXJ5RG9jczogW1xuICAgICAgICAgICdodHRwczovL3Blb3BsZS5nb29nbGVhcGlzLmNvbS8kZGlzY292ZXJ5L3Jlc3Q/dmVyc2lvbj12MSdcbiAgICAgICAgXSxcbiAgICAgICAgc2NvcGU6ICdwcm9maWxlJ1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVTaWduT3V0Q2xpY2soKTtcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0QnV0dG9uKCk7XG4gICAgICAgICh3aW5kb3cgYXMgYW55KS5nYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmlzU2lnbmVkSW4ubGlzdGVuKHJlcCA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVTaWduaW5TdGF0dXMocmVwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2lnbmluU3RhdHVzKGlzU2lnbmVkSW4pIHtcbiAgICB0aGlzLnVwZGF0ZVRleHRCdXR0b24oKTtcbiAgICBpZiAoaXNTaWduZWRJbikge1xuICAgICAgdGhpcy5sb2dpbkdvb2dsZSgod2luZG93IGFzIGFueSkuZ2FwaS5jbGllbnQuZ2V0VG9rZW4oKS5hY2Nlc3NfdG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVGV4dEJ1dHRvbigpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuW2lkXj1cIm5vdF9zaWduZWRfXCJdJyk7XG4gICAgaWYgKGJ0biAmJiB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRMYW5ndWFnZSgpICE9PSAnZW4nKSB7XG4gICAgICBpZiAoYnRuLmlubmVySFRNTCA9PT0gJ1NpZ24gaW4gd2l0aCBHb29nbGUnKSB7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmF1dGguZ29vZ2xlLmxvZ2luJyk7XG4gICAgICB9IGVsc2UgaWYgKGJ0bi5pbm5lckhUTUwgPT09ICdTaWduZWQgaW4gd2l0aCBHb29nbGUnKSB7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmF1dGguZ29vZ2xlLmxvZ2dlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9naW5Hb29nbGUodG9rZW4pIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luV2l0aFRva2VuKHRva2VuLCAnZ29vZ2xlJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuYXBwUmVmLnRpY2soKTtcbiAgICAgIHRoaXMubG9naW4uZW1pdCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFNES0dvb2dsZSgpIHtcbiAgICBjb25zdCBmanMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgY29uc3QganMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBqcy5pZCA9ICdnb29nbGUtanNzZGsnO1xuICAgIGpzLnNyYyA9ICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnO1xuICAgIGpzLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQ2xpZW50TG9hZCgpO1xuICAgIH07XG4gICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkUGxhdGZvcm0oKSB7XG4gICAgY29uc3QgZmpzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIGNvbnN0IGpzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAganMuaWQgPSAnZ29vZ2xlLXBsYXRmb3JtJztcbiAgICBqcy5zcmMgPSAnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvcGxhdGZvcm0uanMnO1xuICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImctc2lnbmluMiBnb29nbGUtbG9naW4tYnV0dG9uXCIgZGF0YS1oZWlnaHQ9XCI0MFwiIGRhdGEtd2lkdGg9XCIyNjVcIiBkYXRhLWxvbmd0aXRsZT1cInRydWVcIj5cbiJdfQ==