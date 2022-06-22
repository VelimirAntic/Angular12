import { Component, ChangeDetectionStrategy, Input, Optional, Output, EventEmitter } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../shared/auth.service";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "./auth-google.component";
import * as i6 from "./auth-microsoft.component";
import * as i7 from "./auth-microsoftb2c.component";
import * as i8 from "./auth-facebook.component";
import * as i9 from "./auth-intern.component";
import * as i10 from "@angular/material/button";
import * as i11 from "@ngx-translate/core";
function AuthFormComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} }
function AuthFormComponent_div_0_div_2_igo_auth_google_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-auth-google", 7);
    i0.ɵɵlistener("login", function AuthFormComponent_div_0_div_2_igo_auth_google_4_Template_igo_auth_google_login_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(3); return ctx_r10.onLogin(); });
    i0.ɵɵelementEnd();
} }
function AuthFormComponent_div_0_div_2_igo_auth_microsoft_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-auth-microsoft", 7);
    i0.ɵɵlistener("login", function AuthFormComponent_div_0_div_2_igo_auth_microsoft_5_Template_igo_auth_microsoft_login_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.onLogin(); });
    i0.ɵɵelementEnd();
} }
function AuthFormComponent_div_0_div_2_igo_auth_microsoftb2c_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-auth-microsoftb2c", 7);
    i0.ɵɵlistener("login", function AuthFormComponent_div_0_div_2_igo_auth_microsoftb2c_6_Template_igo_auth_microsoftb2c_login_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onLogin(); });
    i0.ɵɵelementEnd();
} }
function AuthFormComponent_div_0_div_2_igo_auth_facebook_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-auth-facebook", 7);
    i0.ɵɵlistener("login", function AuthFormComponent_div_0_div_2_igo_auth_facebook_7_Template_igo_auth_facebook_login_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(3); return ctx_r16.onLogin(); });
    i0.ɵɵelementEnd();
} }
function AuthFormComponent_div_0_div_2_igo_auth_intern_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-auth-intern", 8);
    i0.ɵɵlistener("login", function AuthFormComponent_div_0_div_2_igo_auth_intern_8_Template_igo_auth_intern_login_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(3); return ctx_r18.onLogin(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("allowAnonymous", ctx_r9.options.allowAnonymous);
} }
function AuthFormComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "h1");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AuthFormComponent_div_0_div_2_igo_auth_google_4_Template, 1, 0, "igo-auth-google", 5);
    i0.ɵɵtemplate(5, AuthFormComponent_div_0_div_2_igo_auth_microsoft_5_Template, 1, 0, "igo-auth-microsoft", 5);
    i0.ɵɵtemplate(6, AuthFormComponent_div_0_div_2_igo_auth_microsoftb2c_6_Template, 1, 0, "igo-auth-microsoftb2c", 5);
    i0.ɵɵtemplate(7, AuthFormComponent_div_0_div_2_igo_auth_facebook_7_Template, 1, 0, "igo-auth-facebook", 5);
    i0.ɵɵtemplate(8, AuthFormComponent_div_0_div_2_igo_auth_intern_8_Template, 1, 1, "igo-auth-intern", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 6, "igo.auth.connection"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.options.google && ctx_r2.options.google.enabled !== false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.options.microsoft && ctx_r2.options.microsoft.enabled !== false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.options.microsoftb2c && ctx_r2.options.microsoftb2c.enabled !== false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.options.facebook && ctx_r2.options.facebook.enabled !== false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.options.intern || ctx_r2.options.intern.enabled !== false);
} }
function AuthFormComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 9);
    i0.ɵɵlistener("click", function AuthFormComponent_div_0_div_3_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.logout(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 2, "igo.auth.welcome", ctx_r3.user));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 5, "igo.auth.signOut"));
} }
function AuthFormComponent_div_0_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AuthFormComponent_div_0_div_4_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(3); return ctx_r23.home(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.auth.home"));
} }
function AuthFormComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AuthFormComponent_div_0_div_4_button_4_Template, 3, 3, "button", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "igo.auth.deconnection"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.options.homeRoute);
} }
function AuthFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AuthFormComponent_div_0_div_1_Template, 1, 0, "div", 1);
    i0.ɵɵtemplate(2, AuthFormComponent_div_0_div_2_Template, 9, 8, "div", 2);
    i0.ɵɵtemplate(3, AuthFormComponent_div_0_div_3_Template, 7, 7, "div", 2);
    i0.ɵɵtemplate(4, AuthFormComponent_div_0_div_4_Template, 5, 4, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.auth.logged && ctx_r0.backgroundDisable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.auth.logged && ctx_r0.showLoginDiv);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.auth.logged && ctx_r0.showAlreadyConnectedDiv);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showLogoutDiv);
} }
export class AuthFormComponent {
    constructor(auth, config, router) {
        this.auth = auth;
        this.config = config;
        this.router = router;
        this._backgroundDisable = true;
        this._hasAlreadyConnectedDiv = true;
        this._hasLogoutDiv = true;
        this._showAlreadyConnectedDiv = false;
        this._showLogoutDiv = false;
        this.login = new EventEmitter();
        this.visible = true;
        this.options = this.config.getConfig('auth') || {};
        this.visible = Object.getOwnPropertyNames(this.options).length !== 0;
    }
    get backgroundDisable() {
        if (this.isLogoutRoute || this.isLogoutRoute) {
            return false;
        }
        return this._backgroundDisable;
    }
    set backgroundDisable(value) {
        this._backgroundDisable = value.toString() === 'true';
    }
    get hasAlreadyConnectedDiv() {
        return this._hasAlreadyConnectedDiv;
    }
    set hasAlreadyConnectedDiv(value) {
        this._hasAlreadyConnectedDiv = value.toString() === 'true';
    }
    get hasLogoutDiv() {
        return this._hasLogoutDiv;
    }
    set hasLogoutDiv(value) {
        this._hasLogoutDiv = value.toString() === 'true';
    }
    get showAlreadyConnectedDiv() {
        if (this.isLogoutRoute) {
            return this.hasAlreadyConnectedDiv;
        }
        return this._showAlreadyConnectedDiv;
    }
    set showAlreadyConnectedDiv(value) {
        this._showAlreadyConnectedDiv = value.toString() === 'true';
    }
    get showLogoutDiv() {
        if (this.isLogoutRoute) {
            return this.hasLogoutDiv;
        }
        return this._showLogoutDiv;
    }
    set showLogoutDiv(value) {
        this._showLogoutDiv = value.toString() === 'true';
    }
    get showLoginDiv() {
        if (!this.isLogoutRoute) {
            return true;
        }
    }
    ngOnInit() {
        this.analyzeRoute();
        this.getName();
    }
    onLogin() {
        this.auth.goToRedirectUrl();
        this.getName();
        this.login.emit(true);
    }
    logout() {
        this.auth.logout().subscribe(() => {
            this.user = undefined;
            if (this.router) {
                if (this.options.logoutRoute) {
                    this.router.navigate([this.options.logoutRoute]);
                }
                else if (this.options.homeRoute) {
                    this.router.navigate([this.options.homeRoute]);
                }
            }
        });
    }
    home() {
        if (this.router && this.options.homeRoute) {
            this.router.navigate([this.options.homeRoute]);
        }
    }
    getName() {
        const tokenDecoded = this.auth.decodeToken();
        if (tokenDecoded) {
            this.user = {
                name: tokenDecoded.user.firstName || tokenDecoded.user.sourceId
            };
        }
    }
    analyzeRoute() {
        if (!this.router) {
            return;
        }
        this.router.events
            .pipe(filter((event) => event instanceof NavigationStart))
            .subscribe((changeEvent) => {
            if (changeEvent.url) {
                const currentRoute = changeEvent.url;
                const logoutRoute = this.options.logoutRoute;
                const loginRoute = this.options.loginRoute;
                this.isLogoutRoute = currentRoute === logoutRoute;
                this.isLoginRoute = currentRoute === loginRoute;
                if (this.isLogoutRoute) {
                    this.auth.logout();
                }
            }
        });
    }
}
AuthFormComponent.ɵfac = function AuthFormComponent_Factory(t) { return new (t || AuthFormComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i3.Router, 8)); };
AuthFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthFormComponent, selectors: [["igo-auth-form"]], inputs: { backgroundDisable: "backgroundDisable", hasAlreadyConnectedDiv: "hasAlreadyConnectedDiv", hasLogoutDiv: "hasLogoutDiv", showAlreadyConnectedDiv: "showAlreadyConnectedDiv", showLogoutDiv: "showLogoutDiv" }, outputs: { login: "login" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "backgroundDisable", 4, "ngIf"], ["class", "login center-block", 4, "ngIf"], [1, "backgroundDisable"], [1, "login", "center-block"], [3, "login", 4, "ngIf"], [3, "allowAnonymous", "login", 4, "ngIf"], [3, "login"], [3, "allowAnonymous", "login"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"]], template: function AuthFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AuthFormComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [i4.NgIf, i5.AuthGoogleComponent, i6.AuthMicrosoftComponent, i7.AuthMicrosoftb2cComponent, i8.AuthFacebookComponent, i9.AuthInternComponent, i10.MatButton], pipes: [i11.TranslatePipe], styles: ["[_nghost-%COMP%]{z-index:999}div.login[_ngcontent-%COMP%]{z-index:200;width:90%;min-width:360px;max-width:600px;padding:25px 50px;border:1px solid;background-color:#fff;border-color:#888}.center-block[_ngcontent-%COMP%]{position:fixed;top:20%;left:50%;transform:translate(-50%)}.backgroundDisable[_ngcontent-%COMP%]{position:fixed;top:0;left:0;background:#000;opacity:.8;z-index:100;height:100%;width:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthFormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-auth-form',
                templateUrl: './auth-form.component.html',
                styleUrls: ['./auth-form.component.scss'],
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.ConfigService }, { type: i3.Router, decorators: [{
                type: Optional
            }] }]; }, { backgroundDisable: [{
            type: Input
        }], hasAlreadyConnectedDiv: [{
            type: Input
        }], hasLogoutDiv: [{
            type: Input
        }], showAlreadyConnectedDiv: [{
            type: Input
        }], showLogoutDiv: [{
            type: Input
        }], login: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL2xpYi9hdXRoLWZvcm0vYXV0aC1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL2xpYi9hdXRoLWZvcm0vYXV0aC1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQVUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQ1R0Qyx5QkFBK0U7Ozs7SUFLN0UsMENBRXNCO0lBQXBCLHVOQUFtQjtJQUNyQixpQkFBa0I7Ozs7SUFDbEIsNkNBRXNCO0lBQXBCLDZOQUFtQjtJQUNyQixpQkFBcUI7Ozs7SUFDckIsZ0RBRXNCO0lBQXBCLG1PQUFtQjtJQUNyQixpQkFBd0I7Ozs7SUFDeEIsNENBRXNCO0lBQXBCLDJOQUFtQjtJQUNyQixpQkFBb0I7Ozs7SUFDcEIsMENBR3NCO0lBQXBCLHVOQUFtQjtJQUNyQixpQkFBa0I7OztJQUZoQiw4REFBeUM7OztJQXJCN0MsOEJBQXFFO0lBQ25FLDBCQUFJO0lBQUEsWUFBcUM7O0lBQUEsaUJBQUs7SUFFOUMsc0dBR2tCO0lBQ2xCLDRHQUdxQjtJQUNyQixrSEFHd0I7SUFDeEIsMEdBR29CO0lBQ3BCLHNHQUlrQjtJQUNwQixpQkFBTTs7O0lBdkJBLGVBQXFDO0lBQXJDLGlFQUFxQztJQUd0QyxlQUF3RDtJQUF4RCx1RkFBd0Q7SUFJeEQsZUFBOEQ7SUFBOUQsNkZBQThEO0lBSTlELGVBQW9FO0lBQXBFLG1HQUFv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SUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBRTNDLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxLQUFLLFdBQVcsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEtBQUssVUFBVSxDQUFDO2dCQUVoRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ3BCO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2tGQTVJVSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtRQ3RCOUIsa0VBdUNNOztRQXZDQSxrQ0FBYTs7dUZEc0JOLGlCQUFpQjtjQU43QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTzthQUNqRDs7c0JBMkVJLFFBQVE7d0JBeEVQLGlCQUFpQjtrQkFEcEIsS0FBSztZQWFGLHNCQUFzQjtrQkFEekIsS0FBSztZQVVGLFlBQVk7a0JBRGYsS0FBSztZQVVGLHVCQUF1QjtrQkFEMUIsS0FBSztZQWFGLGFBQWE7a0JBRGhCLEtBQUs7WUFrQkksS0FBSztrQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBBdXRoT3B0aW9ucyB9IGZyb20gJy4uL3NoYXJlZC9hdXRoLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tYXV0aC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGgtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dGgtZm9ybS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcbn0pXG5leHBvcnQgY2xhc3MgQXV0aEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBnZXQgYmFja2dyb3VuZERpc2FibGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNMb2dvdXRSb3V0ZSB8fCB0aGlzLmlzTG9nb3V0Um91dGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmREaXNhYmxlO1xuICB9XG4gIHNldCBiYWNrZ3JvdW5kRGlzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2JhY2tncm91bmREaXNhYmxlID0gdmFsdWUudG9TdHJpbmcoKSA9PT0gJ3RydWUnO1xuICB9XG4gIHByaXZhdGUgX2JhY2tncm91bmREaXNhYmxlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgaGFzQWxyZWFkeUNvbm5lY3RlZERpdigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzQWxyZWFkeUNvbm5lY3RlZERpdjtcbiAgfVxuICBzZXQgaGFzQWxyZWFkeUNvbm5lY3RlZERpdih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc0FscmVhZHlDb25uZWN0ZWREaXYgPSB2YWx1ZS50b1N0cmluZygpID09PSAndHJ1ZSc7XG4gIH1cbiAgcHJpdmF0ZSBfaGFzQWxyZWFkeUNvbm5lY3RlZERpdiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZ2V0IGhhc0xvZ291dERpdigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzTG9nb3V0RGl2O1xuICB9XG4gIHNldCBoYXNMb2dvdXREaXYodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNMb2dvdXREaXYgPSB2YWx1ZS50b1N0cmluZygpID09PSAndHJ1ZSc7XG4gIH1cbiAgcHJpdmF0ZSBfaGFzTG9nb3V0RGl2ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgc2hvd0FscmVhZHlDb25uZWN0ZWREaXYoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNMb2dvdXRSb3V0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzQWxyZWFkeUNvbm5lY3RlZERpdjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dBbHJlYWR5Q29ubmVjdGVkRGl2O1xuICB9XG4gIHNldCBzaG93QWxyZWFkeUNvbm5lY3RlZERpdih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dBbHJlYWR5Q29ubmVjdGVkRGl2ID0gdmFsdWUudG9TdHJpbmcoKSA9PT0gJ3RydWUnO1xuICB9XG4gIHByaXZhdGUgX3Nob3dBbHJlYWR5Q29ubmVjdGVkRGl2ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNob3dMb2dvdXREaXYoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNMb2dvdXRSb3V0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzTG9nb3V0RGl2O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2hvd0xvZ291dERpdjtcbiAgfVxuICBzZXQgc2hvd0xvZ291dERpdih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dMb2dvdXREaXYgPSB2YWx1ZS50b1N0cmluZygpID09PSAndHJ1ZSc7XG4gIH1cbiAgcHJpdmF0ZSBfc2hvd0xvZ291dERpdiA9IGZhbHNlO1xuXG4gIGdldCBzaG93TG9naW5EaXYoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzTG9nb3V0Um91dGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSBsb2dpbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHB1YmxpYyBvcHRpb25zOiBBdXRoT3B0aW9ucztcbiAgcHVibGljIHVzZXI7XG5cbiAgcHVibGljIHZpc2libGUgPSB0cnVlO1xuXG4gIHByaXZhdGUgaXNMb2dpblJvdXRlOiBib29sZWFuO1xuICBwcml2YXRlIGlzTG9nb3V0Um91dGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdhdXRoJykgfHwge307XG4gICAgdGhpcy52aXNpYmxlID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5vcHRpb25zKS5sZW5ndGggIT09IDA7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbmFseXplUm91dGUoKTtcbiAgICB0aGlzLmdldE5hbWUoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxvZ2luKCkge1xuICAgIHRoaXMuYXV0aC5nb1RvUmVkaXJlY3RVcmwoKTtcbiAgICB0aGlzLmdldE5hbWUoKTtcbiAgICB0aGlzLmxvZ2luLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0KCkge1xuICAgIHRoaXMuYXV0aC5sb2dvdXQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51c2VyID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHRoaXMucm91dGVyKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9nb3V0Um91dGUpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5vcHRpb25zLmxvZ291dFJvdXRlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmhvbWVSb3V0ZSkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLm9wdGlvbnMuaG9tZVJvdXRlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBob21lKCkge1xuICAgIGlmICh0aGlzLnJvdXRlciAmJiB0aGlzLm9wdGlvbnMuaG9tZVJvdXRlKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5vcHRpb25zLmhvbWVSb3V0ZV0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCB0b2tlbkRlY29kZWQgPSB0aGlzLmF1dGguZGVjb2RlVG9rZW4oKTtcbiAgICBpZiAodG9rZW5EZWNvZGVkKSB7XG4gICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgIG5hbWU6IHRva2VuRGVjb2RlZC51c2VyLmZpcnN0TmFtZSB8fCB0b2tlbkRlY29kZWQudXNlci5zb3VyY2VJZFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFuYWx5emVSb3V0ZSgpIHtcbiAgICBpZiAoIXRoaXMucm91dGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkpXG4gICAgICAuc3Vic2NyaWJlKChjaGFuZ2VFdmVudDogYW55KSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2VFdmVudC51cmwpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBjaGFuZ2VFdmVudC51cmw7XG4gICAgICAgICAgY29uc3QgbG9nb3V0Um91dGUgPSB0aGlzLm9wdGlvbnMubG9nb3V0Um91dGU7XG4gICAgICAgICAgY29uc3QgbG9naW5Sb3V0ZSA9IHRoaXMub3B0aW9ucy5sb2dpblJvdXRlO1xuXG4gICAgICAgICAgdGhpcy5pc0xvZ291dFJvdXRlID0gY3VycmVudFJvdXRlID09PSBsb2dvdXRSb3V0ZTtcbiAgICAgICAgICB0aGlzLmlzTG9naW5Sb3V0ZSA9IGN1cnJlbnRSb3V0ZSA9PT0gbG9naW5Sb3V0ZTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzTG9nb3V0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwidmlzaWJsZVwiPlxuICA8ZGl2ICpuZ0lmPVwiIWF1dGgubG9nZ2VkICYmIGJhY2tncm91bmREaXNhYmxlXCIgY2xhc3M9XCJiYWNrZ3JvdW5kRGlzYWJsZVwiPjwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCIhYXV0aC5sb2dnZWQgJiYgc2hvd0xvZ2luRGl2XCIgY2xhc3M9XCJsb2dpbiBjZW50ZXItYmxvY2tcIj5cbiAgICA8aDE+e3snaWdvLmF1dGguY29ubmVjdGlvbicgfCB0cmFuc2xhdGV9fTwvaDE+XG5cbiAgICA8aWdvLWF1dGgtZ29vZ2xlXG4gICAgICAqbmdJZj1cIm9wdGlvbnMuZ29vZ2xlICYmIG9wdGlvbnMuZ29vZ2xlLmVuYWJsZWQgIT09IGZhbHNlXCJcbiAgICAgIChsb2dpbik9XCJvbkxvZ2luKClcIj5cbiAgICA8L2lnby1hdXRoLWdvb2dsZT5cbiAgICA8aWdvLWF1dGgtbWljcm9zb2Z0XG4gICAgICAqbmdJZj1cIm9wdGlvbnMubWljcm9zb2Z0ICYmIG9wdGlvbnMubWljcm9zb2Z0LmVuYWJsZWQgIT09IGZhbHNlXCJcbiAgICAgIChsb2dpbik9XCJvbkxvZ2luKClcIj5cbiAgICA8L2lnby1hdXRoLW1pY3Jvc29mdD5cbiAgICA8aWdvLWF1dGgtbWljcm9zb2Z0YjJjXG4gICAgICAqbmdJZj1cIm9wdGlvbnMubWljcm9zb2Z0YjJjICYmIG9wdGlvbnMubWljcm9zb2Z0YjJjLmVuYWJsZWQgIT09IGZhbHNlXCJcbiAgICAgIChsb2dpbik9XCJvbkxvZ2luKClcIj5cbiAgICA8L2lnby1hdXRoLW1pY3Jvc29mdGIyYz5cbiAgICA8aWdvLWF1dGgtZmFjZWJvb2tcbiAgICAgICpuZ0lmPVwib3B0aW9ucy5mYWNlYm9vayAmJiBvcHRpb25zLmZhY2Vib29rLmVuYWJsZWQgIT09IGZhbHNlXCJcbiAgICAgIChsb2dpbik9XCJvbkxvZ2luKClcIj5cbiAgICA8L2lnby1hdXRoLWZhY2Vib29rPlxuICAgIDxpZ28tYXV0aC1pbnRlcm5cbiAgICAgICpuZ0lmPVwiIW9wdGlvbnMuaW50ZXJuIHx8IG9wdGlvbnMuaW50ZXJuLmVuYWJsZWQgIT09IGZhbHNlXCJcbiAgICAgIFthbGxvd0Fub255bW91c109XCJvcHRpb25zLmFsbG93QW5vbnltb3VzXCJcbiAgICAgIChsb2dpbik9XCJvbkxvZ2luKClcIj5cbiAgICA8L2lnby1hdXRoLWludGVybj5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImF1dGgubG9nZ2VkICYmIHNob3dBbHJlYWR5Q29ubmVjdGVkRGl2XCIgY2xhc3M9XCJsb2dpbiBjZW50ZXItYmxvY2tcIj5cbiAgICA8cD57eydpZ28uYXV0aC53ZWxjb21lJyB8wqB0cmFuc2xhdGU6IHVzZXJ9fTwvcD5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwibG9nb3V0KClcIj57eydpZ28uYXV0aC5zaWduT3V0JyB8wqB0cmFuc2xhdGV9fTwvYnV0dG9uPlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwic2hvd0xvZ291dERpdlwiIGNsYXNzPVwibG9naW4gY2VudGVyLWJsb2NrXCI+XG4gICAgPHA+e3snaWdvLmF1dGguZGVjb25uZWN0aW9uJyB8wqB0cmFuc2xhdGV9fTwvcD5cbiAgICA8YnV0dG9uICpuZ0lmPVwib3B0aW9ucy5ob21lUm91dGVcIiBtYXQtcmFpc2VkLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImhvbWUoKVwiPnt7J2lnby5hdXRoLmhvbWUnIHzCoHRyYW5zbGF0ZX19PC9idXR0b24+XG4gIDwvZGl2PlxuXG48L2Rpdj5cbiJdfQ==