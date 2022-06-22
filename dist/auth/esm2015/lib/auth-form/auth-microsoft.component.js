import { __awaiter } from "tslib";
import { Component, ChangeDetectionStrategy, Output, EventEmitter, Inject } from '@angular/core';
import { MsalBroadcastService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { InteractionStatus, PublicClientApplication, InteractionRequiredAuthError } from '@azure/msal-browser';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../shared/auth.service";
import * as i2 from "@igo2/core";
import * as i3 from "@azure/msal-angular";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@ngx-translate/core";
export class AuthMicrosoftComponent {
    constructor(authService, config, appRef, msalService, msalGuardConfig) {
        this.authService = authService;
        this.config = config;
        this.appRef = appRef;
        this.msalService = msalService;
        this.msalGuardConfig = msalGuardConfig;
        this._destroying$ = new Subject();
        this.login = new EventEmitter();
        this.options = this.config.getConfig('auth.microsoft') || {};
        this.msalService.instance = new PublicClientApplication({
            auth: this.options,
            cache: {
                cacheLocation: 'sessionStorage'
            }
        });
        this.broadcastService = new MsalBroadcastService(this.msalService.instance, this.msalService);
        if (this.options.clientId) {
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
    loginMicrosoft() {
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
            const tokenAccess = response.accessToken;
            const tokenId = response.idToken;
            this.authService.loginWithToken(tokenAccess, 'microsoft', { tokenId }).subscribe(() => {
                this.appRef.tick();
                this.login.emit(true);
            });
        })
            .catch((error) => __awaiter(this, void 0, void 0, function* () {
            if (error instanceof InteractionRequiredAuthError) {
                // fallback to interaction when silent call fails
                return this.msalService.acquireTokenPopup(this.getConf().authRequest);
            }
            console.log(error);
        })).catch(error => {
            console.log('Silent token fails');
        });
    }
    getConf() {
        return this.msalGuardConfig.filter(conf => conf.type === 'add')[0];
    }
}
AuthMicrosoftComponent.ɵfac = function AuthMicrosoftComponent_Factory(t) { return new (t || AuthMicrosoftComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(i3.MsalService), i0.ɵɵdirectiveInject(MSAL_GUARD_CONFIG)); };
AuthMicrosoftComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthMicrosoftComponent, selectors: [["igo-auth-microsoft"]], outputs: { login: "login" }, decls: 4, vars: 3, consts: [["mat-raised-button", "", 1, "microsoft-login-button", 3, "click"], ["svgIcon", "microsoft"]], template: function AuthMicrosoftComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function AuthMicrosoftComponent_Template_button_click_0_listener() { return ctx.loginMicrosoft(); });
        i0.ɵɵelement(1, "mat-icon", 1);
        i0.ɵɵtext(2);
        i0.ɵɵpipe(3, "translate");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "igo.auth.microsoft.login"), "\n");
    } }, directives: [i4.MatButton, i5.MatIcon], pipes: [i6.TranslatePipe], styles: ["[_nghost-%COMP%]{padding:10px 10px 10px 0;display:inline-block;position:relative;top:-15px}[_nghost-%COMP%] > button[_ngcontent-%COMP%]{font-size:15px;height:40px;width:265px}mat-icon[_ngcontent-%COMP%]{margin-right:10px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthMicrosoftComponent, [{
        type: Component,
        args: [{
                selector: 'igo-auth-microsoft',
                templateUrl: './auth-microsoft.component.html',
                styleUrls: ['./auth-microsoft.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.ConfigService }, { type: i0.ApplicationRef }, { type: i3.MsalService }, { type: undefined, decorators: [{
                type: Inject,
                args: [MSAL_GUARD_CONFIG]
            }] }]; }, { login: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1taWNyb3NvZnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2F1dGgtZm9ybS9hdXRoLW1pY3Jvc29mdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9saWIvYXV0aC1mb3JtL2F1dGgtbWljcm9zb2Z0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUV2QixNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQWUsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRixPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLHVCQUF1QixFQUd2Qiw0QkFBNEIsRUFDN0IsTUFBTSxxQkFBcUIsQ0FBQztBQUk3QixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7O0FBUS9CLE1BQU0sT0FBTyxzQkFBc0I7SUFNakMsWUFDVSxXQUF3QixFQUN4QixNQUFxQixFQUNyQixNQUFzQixFQUN0QixXQUF3QixFQUNHLGVBQTRDO1FBSnZFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDRyxvQkFBZSxHQUFmLGVBQWUsQ0FBNkI7UUFUaEUsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzFDLFVBQUssR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVVuRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FB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LENBQUM7SUFDckUsQ0FBQzs7NEZBdkVVLHNCQUFzQixvTEFXdkIsaUJBQWlCO3lFQVhoQixzQkFBc0I7UUM3Qm5DLGlDQUFvRjtRQUEzQixtR0FBUyxvQkFBZ0IsSUFBQztRQUNqRiw4QkFBeUM7UUFDekMsWUFDRjs7UUFBQSxpQkFBUzs7UUFEUCxlQUNGO1FBREUsa0ZBQ0Y7O3VGRDBCYSxzQkFBc0I7Y0FObEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2dCQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBWUksTUFBTTt1QkFBQyxpQkFBaUI7d0JBUmpCLEtBQUs7a0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXNhbEJyb2FkY2FzdFNlcnZpY2UsIE1zYWxTZXJ2aWNlLCBNU0FMX0dVQVJEX0NPTkZJR30gZnJvbSAnQGF6dXJlL21zYWwtYW5ndWxhcic7XG5pbXBvcnQge1xuICBJbnRlcmFjdGlvblN0YXR1cyxcbiAgQXV0aGVudGljYXRpb25SZXN1bHQsXG4gIFB1YmxpY0NsaWVudEFwcGxpY2F0aW9uLFxuICBQb3B1cFJlcXVlc3QsXG4gIFNpbGVudFJlcXVlc3QsXG4gIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Jcbn0gZnJvbSAnQGF6dXJlL21zYWwtYnJvd3Nlcic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBBdXRoTWljcm9zb2Z0T3B0aW9ucywgTVNQTXNhbEd1YXJkQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9hdXRoLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1hdXRoLW1pY3Jvc29mdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLW1pY3Jvc29mdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dGgtbWljcm9zb2Z0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNaWNyb3NvZnRDb21wb25lbnQge1xuICBwcml2YXRlIG9wdGlvbnM6IEF1dGhNaWNyb3NvZnRPcHRpb25zO1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95aW5nJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBsb2dpbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwcml2YXRlIGJyb2FkY2FzdFNlcnZpY2U6IE1zYWxCcm9hZGNhc3RTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIG1zYWxTZXJ2aWNlOiBNc2FsU2VydmljZSxcbiAgICBASW5qZWN0KE1TQUxfR1VBUkRfQ09ORklHKSBwcml2YXRlIG1zYWxHdWFyZENvbmZpZzogTVNQTXNhbEd1YXJkQ29uZmlndXJhdGlvbltdLFxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2F1dGgubWljcm9zb2Z0JykgfHwge307XG5cbiAgICB0aGlzLm1zYWxTZXJ2aWNlLmluc3RhbmNlID0gbmV3IFB1YmxpY0NsaWVudEFwcGxpY2F0aW9uKHtcbiAgICAgIGF1dGg6IHRoaXMub3B0aW9ucyxcbiAgICAgIGNhY2hlOiB7XG4gICAgICAgIGNhY2hlTG9jYXRpb246ICdzZXNzaW9uU3RvcmFnZSdcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYnJvYWRjYXN0U2VydmljZSA9IG5ldyBNc2FsQnJvYWRjYXN0U2VydmljZSh0aGlzLm1zYWxTZXJ2aWNlLmluc3RhbmNlLCB0aGlzLm1zYWxTZXJ2aWNlKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2xpZW50SWQpIHtcbiAgICAgIHRoaXMuYnJvYWRjYXN0U2VydmljZS5pblByb2dyZXNzJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoc3RhdHVzOiBJbnRlcmFjdGlvblN0YXR1cykgPT4gc3RhdHVzID09PSBJbnRlcmFjdGlvblN0YXR1cy5Ob25lKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3lpbmckKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tBY2NvdW50KCk7XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ01pY3Jvc29mdCBhdXRoZW50aWZpY2F0aW9uIG5lZWRzIFwiY2xpZW50SWRcIiBvcHRpb24nKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbG9naW5NaWNyb3NvZnQoKSB7XG4gICAgdGhpcy5tc2FsU2VydmljZS5sb2dpblBvcHVwKHsuLi50aGlzLmdldENvbmYoKS5hdXRoUmVxdWVzdH0gYXMgUG9wdXBSZXF1ZXN0KVxuICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBdXRoZW50aWNhdGlvblJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5tc2FsU2VydmljZS5pbnN0YW5jZS5zZXRBY3RpdmVBY2NvdW50KHJlc3BvbnNlLmFjY291bnQpO1xuICAgICAgdGhpcy5jaGVja0FjY291bnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tBY2NvdW50KCkge1xuICAgIHRoaXMubXNhbFNlcnZpY2UuaW5zdGFuY2VcbiAgICAgIC5hY3F1aXJlVG9rZW5TaWxlbnQodGhpcy5nZXRDb25mKCkuYXV0aFJlcXVlc3QgYXMgU2lsZW50UmVxdWVzdClcbiAgICAgIC50aGVuKChyZXNwb25zZTogQXV0aGVudGljYXRpb25SZXN1bHQpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5BY2Nlc3MgPSByZXNwb25zZS5hY2Nlc3NUb2tlbjtcbiAgICAgICAgY29uc3QgdG9rZW5JZCA9IHJlc3BvbnNlLmlkVG9rZW47XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW5XaXRoVG9rZW4odG9rZW5BY2Nlc3MsICdtaWNyb3NvZnQnLCB7IHRva2VuSWQgfSApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hcHBSZWYudGljaygpO1xuICAgICAgICAgIHRoaXMubG9naW4uZW1pdCh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFzeW5jIChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKSB7XG4gICAgICAgICAgLy8gZmFsbGJhY2sgdG8gaW50ZXJhY3Rpb24gd2hlbiBzaWxlbnQgY2FsbCBmYWlsc1xuICAgICAgICAgIHJldHVybiB0aGlzLm1zYWxTZXJ2aWNlLmFjcXVpcmVUb2tlblBvcHVwKHRoaXMuZ2V0Q29uZigpLmF1dGhSZXF1ZXN0IGFzIFNpbGVudFJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NpbGVudCB0b2tlbiBmYWlscycpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmYoKTogTVNQTXNhbEd1YXJkQ29uZmlndXJhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMubXNhbEd1YXJkQ29uZmlnLmZpbHRlcihjb25mID0+IGNvbmYudHlwZSA9PT0gJ2FkZCcpWzBdO1xuICB9XG59XG4iLCI8YnV0dG9uIGNsYXNzPVwibWljcm9zb2Z0LWxvZ2luLWJ1dHRvblwiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJsb2dpbk1pY3Jvc29mdCgpXCI+XG4gIDxtYXQtaWNvbiBzdmdJY29uPVwibWljcm9zb2Z0XCI+PC9tYXQtaWNvbj5cbiAge3snaWdvLmF1dGgubWljcm9zb2Z0LmxvZ2luJyB8IHRyYW5zbGF0ZX19XG48L2J1dHRvbj5cbiJdfQ==