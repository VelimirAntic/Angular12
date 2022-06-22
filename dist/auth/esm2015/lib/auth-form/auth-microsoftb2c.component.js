import { __awaiter } from "tslib";
import { Component, ChangeDetectionStrategy, Output, EventEmitter, Inject } from '@angular/core';
import { MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { InteractionStatus, PublicClientApplication, InteractionRequiredAuthError } from '@azure/msal-browser';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MsalBroadcastServiceb2c } from '../shared/auth-msalBroadcastServiceb2c.service';
import * as i0 from "@angular/core";
import * as i1 from "../shared/auth.service";
import * as i2 from "@igo2/core";
import * as i3 from "../shared/auth-msalServiceb2c.service.";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@ngx-translate/core";
export class AuthMicrosoftb2cComponent {
    constructor(authService, config, appRef, msalService, msalGuardConfig) {
        this.authService = authService;
        this.config = config;
        this.appRef = appRef;
        this.msalService = msalService;
        this.msalGuardConfig = msalGuardConfig;
        this._destroying$ = new Subject();
        this.login = new EventEmitter();
        this.options = this.config.getConfig('auth.microsoftb2c') || {};
        this.msalService.instance = new PublicClientApplication({
            auth: this.options.browserAuthOptions,
            cache: {
                cacheLocation: 'sessionStorage'
            }
        });
        this.broadcastService = new MsalBroadcastServiceb2c(this.msalService.instance, this.msalService);
        if (this.options.browserAuthOptions.clientId) {
            this.broadcastService.inProgress$
                .pipe(filter((status) => status === InteractionStatus.None), takeUntil(this._destroying$))
                .subscribe(() => {
                this.checkAccount();
            });
        }
        else {
            console.warn('Microsoft authentification needs "clientId" option');
        }
    }
    loginMicrosoftb2c() {
        this.msalService.loginPopup(Object.assign({}, this.getConf().authRequest))
            .subscribe((response) => {
            this.msalService.instance.setActiveAccount(response.account);
            this.checkAccount();
        });
    }
    checkAccount() {
        this.msalService.instance
            .acquireTokenSilent(this.getConf().authRequest)
            .then((response) => {
            const token = response.idToken;
            this.authService.loginWithToken(token, 'microsoftb2c').subscribe(() => {
                this.appRef.tick();
                this.login.emit(true);
            });
        })
            .catch((error) => __awaiter(this, void 0, void 0, function* () {
            if (error instanceof InteractionRequiredAuthError) {
                // fallback to interaction when silent call fails
                return this.msalService.acquireTokenPopup(this.getConf().authRequest);
            }
        })).catch(error => {
            console.log('Silent token fails');
        });
    }
    getConf() {
        return this.msalGuardConfig.filter(conf => conf.type === 'b2c')[0];
    }
}
AuthMicrosoftb2cComponent.ɵfac = function AuthMicrosoftb2cComponent_Factory(t) { return new (t || AuthMicrosoftb2cComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(i3.MsalServiceb2c), i0.ɵɵdirectiveInject(MSAL_GUARD_CONFIG)); };
AuthMicrosoftb2cComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthMicrosoftb2cComponent, selectors: [["igo-auth-microsoftb2c"]], outputs: { login: "login" }, decls: 4, vars: 3, consts: [["mat-raised-button", "", 1, "microsoft-login-button", 3, "click"], ["svgIcon", "microsoft"]], template: function AuthMicrosoftb2cComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function AuthMicrosoftb2cComponent_Template_button_click_0_listener() { return ctx.loginMicrosoftb2c(); });
        i0.ɵɵelement(1, "mat-icon", 1);
        i0.ɵɵtext(2);
        i0.ɵɵpipe(3, "translate");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "igo.auth.microsoftb2c.login"), "\n");
    } }, directives: [i4.MatButton, i5.MatIcon], pipes: [i6.TranslatePipe], styles: ["[_nghost-%COMP%]{padding:10px 10px 10px 0;display:inline-block;position:relative;top:-15px}[_nghost-%COMP%] > button[_ngcontent-%COMP%]{font-size:15px;height:40px;width:265px}mat-icon[_ngcontent-%COMP%]{margin-right:10px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthMicrosoftb2cComponent, [{
        type: Component,
        args: [{
                selector: 'igo-auth-microsoftb2c',
                templateUrl: './auth-microsoftb2c.component.html',
                styleUrls: ['./auth-microsoftb2c.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.ConfigService }, { type: i0.ApplicationRef }, { type: i3.MsalServiceb2c }, { type: undefined, decorators: [{
                type: Inject,
                args: [MSAL_GUARD_CONFIG]
            }] }]; }, { login: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1taWNyb3NvZnRiMmMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2F1dGgtZm9ybS9hdXRoLW1pY3Jvc29mdGIyYy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9saWIvYXV0aC1mb3JtL2F1dGgtbWljcm9zb2Z0YjJjLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUV2QixNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLHVCQUF1QixFQUd2Qiw0QkFBNEIsRUFDN0IsTUFBTSxxQkFBcUIsQ0FBQztBQUk3QixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7Ozs7O0FBU3pGLE1BQU0sT0FBTyx5QkFBeUI7SUFNcEMsWUFDVSxXQUF3QixFQUN4QixNQUFxQixFQUNyQixNQUFzQixFQUN0QixXQUEyQixFQUNBLGVBQTRDO1FBSnZFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQ0Esb0JBQWUsR0FBZixlQUFlLENBQTZCO1FBVGhFLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMxQyxVQUFLLEdBQTBCLElBQUksWUFBWSxF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TEFXMUIsaUJBQWlCOzRFQVhoQix5QkFBeUI7UUNoQ3RDLGlDQUF1RjtRQUE5QixzR0FBUyx1QkFBbUIsSUFBQztRQUNwRiw4QkFBeUM7UUFDekMsWUFDRjs7UUFBQSxpQkFBUzs7UUFEUCxlQUNGO1FBREUscUZBQ0Y7O3VGRDZCYSx5QkFBeUI7Y0FOckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBWUksTUFBTTt1QkFBQyxpQkFBaUI7d0JBUmpCLEtBQUs7a0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNU0FMX0dVQVJEX0NPTkZJRyB9IGZyb20gJ0BhenVyZS9tc2FsLWFuZ3VsYXInO1xuaW1wb3J0IHtcbiAgSW50ZXJhY3Rpb25TdGF0dXMsXG4gIEF1dGhlbnRpY2F0aW9uUmVzdWx0LFxuICBQdWJsaWNDbGllbnRBcHBsaWNhdGlvbixcbiAgUG9wdXBSZXF1ZXN0LFxuICBTaWxlbnRSZXF1ZXN0LFxuICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXG59IGZyb20gJ0BhenVyZS9tc2FsLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQXV0aE1pY3Jvc29mdGIyY09wdGlvbnMsIE1TUE1zYWxHdWFyZENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvYXV0aC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTXNhbEJyb2FkY2FzdFNlcnZpY2ViMmMgfSBmcm9tICcuLi9zaGFyZWQvYXV0aC1tc2FsQnJvYWRjYXN0U2VydmljZWIyYy5zZXJ2aWNlJztcbmltcG9ydCB7IE1zYWxTZXJ2aWNlYjJjIH0gZnJvbSAnLi4vc2hhcmVkL2F1dGgtbXNhbFNlcnZpY2ViMmMuc2VydmljZS4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tYXV0aC1taWNyb3NvZnRiMmMnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aC1taWNyb3NvZnRiMmMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRoLW1pY3Jvc29mdGIyYy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTWljcm9zb2Z0YjJjQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBvcHRpb25zOiBBdXRoTWljcm9zb2Z0YjJjT3B0aW9ucztcbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWluZyQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBAT3V0cHV0KCkgbG9naW46IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBicm9hZGNhc3RTZXJ2aWNlOiBNc2FsQnJvYWRjYXN0U2VydmljZWIyYztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBtc2FsU2VydmljZTogTXNhbFNlcnZpY2ViMmMsXG4gICAgQEluamVjdChNU0FMX0dVQVJEX0NPTkZJRykgcHJpdmF0ZSBtc2FsR3VhcmRDb25maWc6IE1TUE1zYWxHdWFyZENvbmZpZ3VyYXRpb25bXSxcbiAgKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2F1dGgubWljcm9zb2Z0YjJjJykgfHwge307XG5cbiAgICB0aGlzLm1zYWxTZXJ2aWNlLmluc3RhbmNlID0gbmV3IFB1YmxpY0NsaWVudEFwcGxpY2F0aW9uKHtcbiAgICAgIGF1dGg6IHRoaXMub3B0aW9ucy5icm93c2VyQXV0aE9wdGlvbnMsXG4gICAgICBjYWNoZToge1xuICAgICAgICBjYWNoZUxvY2F0aW9uOiAnc2Vzc2lvblN0b3JhZ2UnXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmJyb2FkY2FzdFNlcnZpY2UgPSBuZXcgTXNhbEJyb2FkY2FzdFNlcnZpY2ViMmModGhpcy5tc2FsU2VydmljZS5pbnN0YW5jZSwgdGhpcy5tc2FsU2VydmljZSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmJyb3dzZXJBdXRoT3B0aW9ucy5jbGllbnRJZCkge1xuICAgICAgdGhpcy5icm9hZGNhc3RTZXJ2aWNlLmluUHJvZ3Jlc3MkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChzdGF0dXM6IEludGVyYWN0aW9uU3RhdHVzKSA9PiBzdGF0dXMgPT09IEludGVyYWN0aW9uU3RhdHVzLk5vbmUpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveWluZyQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGVja0FjY291bnQoKTtcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTWljcm9zb2Z0IGF1dGhlbnRpZmljYXRpb24gbmVlZHMgXCJjbGllbnRJZFwiIG9wdGlvbicpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBsb2dpbk1pY3Jvc29mdGIyYygpIHtcbiAgICB0aGlzLm1zYWxTZXJ2aWNlLmxvZ2luUG9wdXAoey4uLnRoaXMuZ2V0Q29uZigpLmF1dGhSZXF1ZXN0fSBhcyBQb3B1cFJlcXVlc3QpXG4gICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEF1dGhlbnRpY2F0aW9uUmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLm1zYWxTZXJ2aWNlLmluc3RhbmNlLnNldEFjdGl2ZUFjY291bnQocmVzcG9uc2UuYWNjb3VudCk7XG4gICAgICB0aGlzLmNoZWNrQWNjb3VudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0FjY291bnQoKSB7XG4gICAgdGhpcy5tc2FsU2VydmljZS5pbnN0YW5jZVxuICAgICAgLmFjcXVpcmVUb2tlblNpbGVudCh0aGlzLmdldENvbmYoKS5hdXRoUmVxdWVzdCBhcyBTaWxlbnRSZXF1ZXN0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBBdXRoZW50aWNhdGlvblJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmlkVG9rZW47XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW5XaXRoVG9rZW4odG9rZW4sICdtaWNyb3NvZnRiMmMnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwUmVmLnRpY2soKTtcbiAgICAgICAgICB0aGlzLmxvZ2luLmVtaXQodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhc3luYyAoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcikge1xuICAgICAgICAgIC8vIGZhbGxiYWNrIHRvIGludGVyYWN0aW9uIHdoZW4gc2lsZW50IGNhbGwgZmFpbHNcbiAgICAgICAgICByZXR1cm4gdGhpcy5tc2FsU2VydmljZS5hY3F1aXJlVG9rZW5Qb3B1cCh0aGlzLmdldENvbmYoKS5hdXRoUmVxdWVzdCBhcyBTaWxlbnRSZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1NpbGVudCB0b2tlbiBmYWlscycpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZigpOiBNU1BNc2FsR3VhcmRDb25maWd1cmF0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5tc2FsR3VhcmRDb25maWcuZmlsdGVyKGNvbmYgPT4gY29uZi50eXBlID09PSAnYjJjJylbMF07XG4gIH1cbn1cbiIsIjxidXR0b24gY2xhc3M9XCJtaWNyb3NvZnQtbG9naW4tYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImxvZ2luTWljcm9zb2Z0YjJjKClcIj5cbiAgPG1hdC1pY29uIHN2Z0ljb249XCJtaWNyb3NvZnRcIj48L21hdC1pY29uPlxuICB7eydpZ28uYXV0aC5taWNyb3NvZnRiMmMubG9naW4nIHwgdHJhbnNsYXRlfX1cbjwvYnV0dG9uPlxuIl19