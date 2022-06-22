import * as i0 from '@angular/core';
import { Injectable, Optional, EventEmitter, Component, ChangeDetectionStrategy, Output, Inject, Input, Directive, NgModule } from '@angular/core';
import * as i3 from '@angular/router';
import { NavigationStart, RouterModule } from '@angular/router';
import { tap, catchError, filter, takeUntil, map } from 'rxjs/operators';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject, of, Subject, from } from 'rxjs';
import { globalCacheBusterNotifier } from 'ts-cacheable';
import { Base64 } from '@igo2/utils';
import jwtDecode from 'jwt-decode';
import * as i2 from '@igo2/core';
import { ConfigService, StorageService, StorageScope, IgoLanguageModule } from '@igo2/core';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { __awaiter } from 'tslib';
import * as i3$1 from '@azure/msal-angular';
import { MsalBroadcastService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MsalService, MsalModule } from '@azure/msal-angular';
import { PublicClientApplication, InteractionStatus, InteractionRequiredAuthError, WrapperSKU, EventMessageUtils, InteractionType } from '@azure/msal-browser';
import * as i4 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i5 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i6 from '@ngx-translate/core';
import * as i3$2 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import * as i4$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i5$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { Md5 } from 'ts-md5';

class TokenService {
    constructor(injector) {
        this.injector = injector;
    }
    set(token) {
        localStorage.setItem(this.tokenKey, token);
    }
    remove() {
        localStorage.removeItem(this.tokenKey);
    }
    get() {
        return localStorage.getItem(this.tokenKey);
    }
    decode() {
        const token = this.get();
        if (!token) {
            return;
        }
        return jwtDecode(token);
    }
    isExpired() {
        const jwt = this.decode();
        const currentTime = new Date().getTime() / 1000;
        if (jwt && currentTime < jwt.exp) {
            return false;
        }
        return true;
    }
    get tokenKey() {
        const config = this.injector.get(ConfigService);
        this.options = config.getConfig('auth') || {};
        return this.options.tokenKey;
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(i0.ɵɵinject(i0.Injector)); };
TokenService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TokenService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();

class AuthService {
    constructor(http, tokenService, config, languageService, messageService, router) {
        this.http = http;
        this.tokenService = tokenService;
        this.config = config;
        this.languageService = languageService;
        this.messageService = messageService;
        this.router = router;
        this.authenticate$ = new BehaviorSubject(undefined);
        this.logged$ = new BehaviorSubject(undefined);
        this.anonymous = false;
        this.authenticate$.next(this.authenticated);
        this.authenticate$.subscribe((authenticated) => {
            this.logged$.next(authenticated);
            globalCacheBusterNotifier.next();
        });
    }
    get hasAuthService() {
        return this.config.getConfig('auth.url') !== undefined;
    }
    login(username, password) {
        const myHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = {
            username,
            password: this.encodePassword(password)
        };
        return this.loginCall(body, myHeader);
    }
    loginWithToken(token, type, infosUser) {
        const myHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = {
            token,
            typeConnection: type,
            infosUser
        };
        return this.loginCall(body, myHeader);
    }
    loginAnonymous() {
        this.anonymous = true;
        this.logged$.next(true);
        return of(true);
    }
    refresh() {
        const url = this.config.getConfig('auth.url');
        return this.http.post(`${url}/refresh`, {}).pipe(tap((data) => {
            this.tokenService.set(data.token);
        }), catchError((err) => {
            err.error.caught = true;
            throw err;
        }));
    }
    logout() {
        this.anonymous = false;
        this.tokenService.remove();
        this.authenticate$.next(false);
        return of(true);
    }
    isAuthenticated() {
        return !this.tokenService.isExpired();
    }
    getToken() {
        return this.tokenService.get();
    }
    decodeToken() {
        if (this.isAuthenticated()) {
            return this.tokenService.decode();
        }
        return false;
    }
    goToRedirectUrl() {
        if (!this.router) {
            return;
        }
        const redirectUrl = this.redirectUrl || this.router.url;
        const options = this.config.getConfig('auth') || {};
        if (redirectUrl === options.loginRoute) {
            const homeRoute = options.homeRoute || '/';
            this.router.navigateByUrl(homeRoute);
        }
        else if (redirectUrl) {
            this.router.navigateByUrl(redirectUrl);
        }
    }
    getUserInfo() {
        const url = this.config.getConfig('auth.url') + '/info';
        return this.http.get(url);
    }
    getProfils() {
        const url = this.config.getConfig('auth.url');
        return this.http.get(`${url}/profils`);
    }
    updateUser(user) {
        const url = this.config.getConfig('auth.url');
        return this.http.patch(url, user);
    }
    encodePassword(password) {
        return Base64.encode(password);
    }
    // authenticated or anonymous
    get logged() {
        return this.authenticated || this.isAnonymous;
    }
    get isAnonymous() {
        return this.anonymous;
    }
    get authenticated() {
        return this.isAuthenticated();
    }
    get isAdmin() {
        const token = this.decodeToken();
        if (token && token.user && token.user.isAdmin) {
            return true;
        }
        return false;
    }
    loginCall(body, headers) {
        const url = this.config.getConfig('auth.url');
        return this.http.post(`${url}/login`, body, { headers }).pipe(tap((data) => {
            this.tokenService.set(data.token);
            const tokenDecoded = this.decodeToken();
            if (tokenDecoded && tokenDecoded.user) {
                if (tokenDecoded.user.locale) {
                    this.languageService.setLanguage(tokenDecoded.user.locale);
                }
                if (tokenDecoded.user.isExpired) {
                    this.languageService.translate
                        .get('igo.auth.error.Password expired')
                        .subscribe((expiredAlert) => this.messageService.alert(expiredAlert));
                }
            }
            this.authenticate$.next(true);
        }), catchError((err) => {
            err.error.caught = true;
            throw err;
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(TokenService), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i2.LanguageService), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i3.Router, 8)); };
AuthService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: TokenService }, { type: i2.ConfigService }, { type: i2.LanguageService }, { type: i2.MessageService }, { type: i3.Router, decorators: [{
                type: Optional
            }] }]; }, null); })();

class AuthGoogleComponent {
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
AuthGoogleComponent.ɵfac = function AuthGoogleComponent_Factory(t) { return new (t || AuthGoogleComponent)(i0.ɵɵdirectiveInject(AuthService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i0.ApplicationRef)); };
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
    }], function () { return [{ type: AuthService }, { type: i2.ConfigService }, { type: i2.LanguageService }, { type: i0.ApplicationRef }]; }, { login: [{
            type: Output
        }] }); })();

class AuthMicrosoftComponent {
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
AuthMicrosoftComponent.ɵfac = function AuthMicrosoftComponent_Factory(t) { return new (t || AuthMicrosoftComponent)(i0.ɵɵdirectiveInject(AuthService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(i3$1.MsalService), i0.ɵɵdirectiveInject(MSAL_GUARD_CONFIG)); };
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
    }], function () { return [{ type: AuthService }, { type: i2.ConfigService }, { type: i0.ApplicationRef }, { type: i3$1.MsalService }, { type: undefined, decorators: [{
                type: Inject,
                args: [MSAL_GUARD_CONFIG]
            }] }]; }, { login: [{
            type: Output
        }] }); })();

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class MsalServiceb2c {
    constructor(instance, location) {
        this.instance = instance;
        this.location = location;
        this.name = '@azure/msal-angular';
        this.version = '2.0.0-beta.2';
        const hash = this.location.path(true).split('#').pop();
        if (hash) {
            this.redirectHash = `#${hash}`;
        }
        this.instance.initializeWrapperLibrary(WrapperSKU.Angular, this.version);
    }
    acquireTokenPopup(request) {
        return from(this.instance.acquireTokenPopup(request));
    }
    acquireTokenRedirect(request) {
        return from(this.instance.acquireTokenRedirect(request));
    }
    acquireTokenSilent(silentRequest) {
        return from(this.instance.acquireTokenSilent(silentRequest));
    }
    handleRedirectObservable(hash) {
        return from(this.instance.handleRedirectPromise(hash || this.redirectHash));
    }
    loginPopup(request) {
        return from(this.instance.loginPopup(request));
    }
    loginRedirect(request) {
        return from(this.instance.loginRedirect(request));
    }
    logout(logoutRequest) {
        return from(this.instance.logout(logoutRequest));
    }
    logoutRedirect(logoutRequest) {
        return from(this.instance.logoutRedirect(logoutRequest));
    }
    logoutPopup(logoutRequest) {
        return from(this.instance.logoutPopup(logoutRequest));
    }
    ssoSilent(request) {
        return from(this.instance.ssoSilent(request));
    }
    /**
     * Gets logger for msal-angular.
     * If no logger set, returns logger instance created with same options as msal-browser
     */
    getLogger() {
        if (!this.logger) {
            this.logger = this.instance.getLogger().clone(this.name, this.version);
        }
        return this.logger;
    }
    // Create a logger instance for msal-angular with the same options as msal-browser
    setLogger(logger) {
        this.logger = logger.clone(this.name, this.version);
        this.instance.setLogger(logger);
    }
}
MsalServiceb2c.ɵfac = function MsalServiceb2c_Factory(t) { return new (t || MsalServiceb2c)(i0.ɵɵinject(MSAL_INSTANCE), i0.ɵɵinject(i1$1.Location)); };
MsalServiceb2c.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MsalServiceb2c, factory: MsalServiceb2c.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MsalServiceb2c, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MSAL_INSTANCE]
            }] }, { type: i1$1.Location }]; }, null); })();

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class MsalBroadcastServiceb2c {
    constructor(msalInstance, authService) {
        this.msalInstance = msalInstance;
        this.authService = authService;
        this._msalSubject = new Subject();
        this.msalSubject$ = this._msalSubject.asObservable();
        // InProgress as BehaviorSubject so most recent inProgress state will be available upon subscription
        this._inProgress = new BehaviorSubject(InteractionStatus.Startup);
        this.inProgress$ = this._inProgress.asObservable();
        this.msalInstance.addEventCallback((message) => {
            this._msalSubject.next(message);
            const status = EventMessageUtils.getInteractionStatusFromEvent(message);
            if (status !== null) {
                this.authService.getLogger().verbose(`BroadcastService - ${message.eventType} results in setting inProgress to ${status}`);
                this._inProgress.next(status);
            }
        });
    }
}
MsalBroadcastServiceb2c.ɵfac = function MsalBroadcastServiceb2c_Factory(t) { return new (t || MsalBroadcastServiceb2c)(i0.ɵɵinject(MSAL_INSTANCE), i0.ɵɵinject(MsalServiceb2c)); };
MsalBroadcastServiceb2c.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MsalBroadcastServiceb2c, factory: MsalBroadcastServiceb2c.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MsalBroadcastServiceb2c, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MSAL_INSTANCE]
            }] }, { type: MsalServiceb2c }]; }, null); })();

class AuthMicrosoftb2cComponent {
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
AuthMicrosoftb2cComponent.ɵfac = function AuthMicrosoftb2cComponent_Factory(t) { return new (t || AuthMicrosoftb2cComponent)(i0.ɵɵdirectiveInject(AuthService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(MsalServiceb2c), i0.ɵɵdirectiveInject(MSAL_GUARD_CONFIG)); };
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
    }], function () { return [{ type: AuthService }, { type: i2.ConfigService }, { type: i0.ApplicationRef }, { type: MsalServiceb2c }, { type: undefined, decorators: [{
                type: Inject,
                args: [MSAL_GUARD_CONFIG]
            }] }]; }, { login: [{
            type: Output
        }] }); })();

class AuthFacebookComponent {
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
AuthFacebookComponent.ɵfac = function AuthFacebookComponent_Factory(t) { return new (t || AuthFacebookComponent)(i0.ɵɵdirectiveInject(AuthService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i0.ApplicationRef)); };
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
    }], function () { return [{ type: AuthService }, { type: i2.ConfigService }, { type: i0.ApplicationRef }]; }, { login: [{
            type: Output
        }] }); })();

function AuthInternComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function AuthInternComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.loginAnonymous(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.auth.accessAnonymous"), " ");
} }
function AuthInternComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "font", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
class AuthInternComponent {
    constructor(auth, languageService, fb) {
        this.auth = auth;
        this.languageService = languageService;
        this._allowAnonymous = true;
        this.error = '';
        this.loading = false;
        this.login = new EventEmitter();
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    get allowAnonymous() {
        return this._allowAnonymous;
    }
    set allowAnonymous(value) {
        this._allowAnonymous = value;
    }
    loginUser(values) {
        this.loading = true;
        this.auth.login(values.username, values.password).subscribe(() => {
            this.login.emit(true);
            this.loading = false;
        }, (error) => {
            try {
                this.languageService.translate
                    .get('igo.auth.error.' + error.error.message)
                    .subscribe(errorMsg => (this.error = errorMsg));
            }
            catch (e) {
                this.error = error.error.message;
            }
            this.loading = false;
        });
        return false;
    }
    loginAnonymous() {
        this.auth.loginAnonymous().subscribe(() => {
            this.login.emit(true);
        });
    }
}
AuthInternComponent.ɵfac = function AuthInternComponent_Factory(t) { return new (t || AuthInternComponent)(i0.ɵɵdirectiveInject(AuthService), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i3$2.FormBuilder)); };
AuthInternComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthInternComponent, selectors: [["igo-auth-intern"]], inputs: { allowAnonymous: "allowAnonymous" }, outputs: { login: "login" }, decls: 14, vars: 12, consts: [["role", "form", 3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "required", "", "formControlName", "username", 3, "placeholder"], ["matInput", "", "required", "", "type", "password", "formControlName", "password", 3, "placeholder"], ["mat-raised-button", "", "type", "submit"], ["mat-raised-button", "", "class", "anonymous", "type", "button", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "type", "button", 1, "anonymous", 3, "disabled", "click"], ["size", "3", "color", "red"]], template: function AuthInternComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function AuthInternComponent_Template_form_ngSubmit_0_listener() { return ctx.loginUser(ctx.form.value); });
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "mat-form-field", 1);
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵelementStart(6, "mat-form-field", 1);
        i0.ɵɵelement(7, "input", 3);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 4);
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, AuthInternComponent_button_12_Template, 3, 4, "button", 5);
        i0.ɵɵtemplate(13, AuthInternComponent_div_13_Template, 4, 1, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(4, 6, "igo.auth.user"));
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(8, 8, "igo.auth.password"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 10, "igo.auth.login"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.allowAnonymous);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.error);
    } }, directives: [i3$2.ɵNgNoValidate, i3$2.NgControlStatusGroup, i3$2.FormGroupDirective, i4$1.MatFormField, i5$1.MatInput, i3$2.DefaultValueAccessor, i3$2.RequiredValidator, i3$2.NgControlStatus, i3$2.FormControlName, i4.MatButton, i1$1.NgIf], pipes: [i6.TranslatePipe], styles: [".full-width[_ngcontent-%COMP%]{width:100%}.anonymous[_ngcontent-%COMP%]{margin-left:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthInternComponent, [{
        type: Component,
        args: [{
                selector: 'igo-auth-intern',
                templateUrl: './auth-intern.component.html',
                styleUrls: ['./auth-intern.component.scss'],
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: AuthService }, { type: i2.LanguageService }, { type: i3$2.FormBuilder }]; }, { allowAnonymous: [{
            type: Input
        }], login: [{
            type: Output
        }] }); })();

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
class AuthFormComponent {
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
AuthFormComponent.ɵfac = function AuthFormComponent_Factory(t) { return new (t || AuthFormComponent)(i0.ɵɵdirectiveInject(AuthService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i3.Router, 8)); };
AuthFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthFormComponent, selectors: [["igo-auth-form"]], inputs: { backgroundDisable: "backgroundDisable", hasAlreadyConnectedDiv: "hasAlreadyConnectedDiv", hasLogoutDiv: "hasLogoutDiv", showAlreadyConnectedDiv: "showAlreadyConnectedDiv", showLogoutDiv: "showLogoutDiv" }, outputs: { login: "login" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "backgroundDisable", 4, "ngIf"], ["class", "login center-block", 4, "ngIf"], [1, "backgroundDisable"], [1, "login", "center-block"], [3, "login", 4, "ngIf"], [3, "allowAnonymous", "login", 4, "ngIf"], [3, "login"], [3, "allowAnonymous", "login"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"]], template: function AuthFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AuthFormComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [i1$1.NgIf, AuthGoogleComponent, AuthMicrosoftComponent, AuthMicrosoftb2cComponent, AuthFacebookComponent, AuthInternComponent, i4.MatButton], pipes: [i6.TranslatePipe], styles: ["[_nghost-%COMP%]{z-index:999}div.login[_ngcontent-%COMP%]{z-index:200;width:90%;min-width:360px;max-width:600px;padding:25px 50px;border:1px solid;background-color:#fff;border-color:#888}.center-block[_ngcontent-%COMP%]{position:fixed;top:20%;left:50%;transform:translate(-50%)}.backgroundDisable[_ngcontent-%COMP%]{position:fixed;top:0;left:0;background:#000;opacity:.8;z-index:100;height:100%;width:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthFormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-auth-form',
                templateUrl: './auth-form.component.html',
                styleUrls: ['./auth-form.component.scss'],
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: AuthService }, { type: i2.ConfigService }, { type: i3.Router, decorators: [{
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

class LoggedGuard {
    constructor(authService, config, router) {
        this.authService = authService;
        this.config = config;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.logged) {
            return true;
        }
        this.authService.redirectUrl = state.url;
        const authConfig = this.config.getConfig('auth');
        if (authConfig && authConfig.loginRoute) {
            this.router.navigateByUrl(authConfig.loginRoute);
        }
        return false;
    }
}
LoggedGuard.ɵfac = function LoggedGuard_Factory(t) { return new (t || LoggedGuard)(i0.ɵɵinject(AuthService), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i3.Router)); };
LoggedGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoggedGuard, factory: LoggedGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoggedGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthService }, { type: i2.ConfigService }, { type: i3.Router }]; }, null); })();

class AuthGuard {
    constructor(authService, config, router) {
        this.authService = authService;
        this.config = config;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.authenticated) {
            return true;
        }
        this.authService.redirectUrl = state.url;
        const authConfig = this.config.getConfig('auth');
        if (authConfig && authConfig.loginRoute) {
            this.router.navigateByUrl(authConfig.loginRoute);
        }
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(AuthService), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i3.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthService }, { type: i2.ConfigService }, { type: i3.Router }]; }, null); })();

class AdminGuard {
    constructor(authService, config, router) {
        this.authService = authService;
        this.config = config;
        this.router = router;
    }
    canActivate(route, state) {
        const token = this.authService.decodeToken();
        if (token && token.user && token.user.isAdmin) {
            return true;
        }
        this.authService.redirectUrl = state.url;
        const authConfig = this.config.getConfig('auth');
        if (authConfig && authConfig.loginRoute) {
            this.router.navigateByUrl(authConfig.loginRoute);
        }
        return false;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(i0.ɵɵinject(AuthService), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i3.Router)); };
AdminGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthService }, { type: i2.ConfigService }, { type: i3.Router }]; }, null); })();

class ProfilsGuard {
    constructor(authService, config, router) {
        this.authService = authService;
        this.config = config;
        this.router = router;
    }
    canActivate(_route, state) {
        return this.authService.getProfils().pipe(map((profils) => {
            const authConfig = this.config.getConfig('auth');
            if (profils &&
                profils.profils &&
                profils.profils.some(v => authConfig.profilsGuard.indexOf(v) !== -1)) {
                return true;
            }
            this.authService.redirectUrl = state.url;
            if (authConfig && authConfig.loginRoute) {
                this.router.navigateByUrl(authConfig.loginRoute);
            }
            return false;
        }));
    }
}
ProfilsGuard.ɵfac = function ProfilsGuard_Factory(t) { return new (t || ProfilsGuard)(i0.ɵɵinject(AuthService), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i3.Router)); };
ProfilsGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProfilsGuard, factory: ProfilsGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilsGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthService }, { type: i2.ConfigService }, { type: i3.Router }]; }, null); })();

class AuthInterceptor {
    constructor(config, tokenService, http) {
        this.config = config;
        this.tokenService = tokenService;
        this.http = http;
        this.refreshInProgress = false;
    }
    get trustHosts() {
        const trustHosts = this.config.getConfig('auth.trustHosts') || [];
        trustHosts.push(window.location.hostname);
        return trustHosts;
    }
    get hostsWithCredentials() {
        return this.config.getConfig('auth.hostsWithCredentials') || [];
    }
    get hostsWithAuthByKey() {
        return this.config.getConfig('auth.hostsByKey') || [];
    }
    intercept(originalReq, next) {
        const withCredentials = this.handleHostsWithCredentials(originalReq.url);
        let req = originalReq.clone();
        const hostWithKey = this.handleHostsAuthByKey(originalReq.url);
        if (hostWithKey) {
            req = req.clone({
                params: req.params.set(hostWithKey.key, hostWithKey.value)
            });
        }
        if (withCredentials) {
            req = originalReq.clone({
                withCredentials
            });
        }
        this.refreshToken();
        const token = this.tokenService.get();
        const element = document.createElement('a');
        element.href = req.url;
        if (element.host === '') {
            element.href = element.href; // FIX IE11, DO NOT REMOVE
        }
        if (!token || this.trustHosts.indexOf(element.hostname) === -1) {
            return next.handle(req);
        }
        const authHeader = `Bearer ${token}`;
        let authReq = req.clone({
            headers: req.headers.set('Authorization', authHeader)
        });
        const tokenDecoded = this.tokenService.decode();
        if (authReq.params.get('_i') === 'true' &&
            tokenDecoded &&
            tokenDecoded.user &&
            tokenDecoded.user.sourceId) {
            const hashUser = Md5.hashStr(tokenDecoded.user.sourceId);
            authReq = authReq.clone({
                params: authReq.params.set('_i', hashUser)
            });
        }
        else if (authReq.params.get('_i') === 'true') {
            authReq = authReq.clone({
                params: authReq.params.delete('_i')
            });
        }
        return next.handle(authReq);
    }
    interceptXhr(xhr, url) {
        const withCredentials = this.handleHostsWithCredentials(url);
        if (withCredentials) {
            xhr.withCredentials = withCredentials;
            return true;
        }
        this.refreshToken();
        const element = document.createElement('a');
        element.href = url;
        const token = this.tokenService.get();
        if (!token || this.trustHosts.indexOf(element.hostname) === -1) {
            return false;
        }
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        return true;
    }
    alterUrlWithKeyAuth(url) {
        const hostWithKey = this.handleHostsAuthByKey(url);
        let interceptedUrl = url;
        if (hostWithKey) {
            const urlDecomposed = interceptedUrl.split(/[?&]/);
            let urlWithKeyAdded = urlDecomposed.shift();
            const paramsToKeep = urlDecomposed.filter(p => p.length !== 0);
            paramsToKeep.push(`${hostWithKey.key}=${hostWithKey.value}`);
            if (paramsToKeep.length) {
                urlWithKeyAdded += '?' + paramsToKeep.join('&');
            }
            return urlWithKeyAdded;
        }
        return;
    }
    handleHostsWithCredentials(reqUrl) {
        let withCredentials = false;
        for (const hostWithCredentials of this.hostsWithCredentials) {
            const domainRegex = new RegExp(hostWithCredentials.domainRegFilters);
            if (domainRegex.test(reqUrl)) {
                withCredentials = hostWithCredentials.withCredentials !== undefined ? hostWithCredentials.withCredentials : undefined;
                break;
            }
        }
        return withCredentials;
    }
    handleHostsAuthByKey(reqUrl) {
        let hostWithKey;
        for (const hostWithAuthByKey of this.hostsWithAuthByKey) {
            const domainRegex = new RegExp(hostWithAuthByKey.domainRegFilters);
            if (domainRegex.test(reqUrl)) {
                var replace = `${hostWithAuthByKey.keyProperty}=${hostWithAuthByKey.keyValue}`;
                var keyAdded = new RegExp(replace, "gm");
                if (!keyAdded.test(reqUrl)) {
                    hostWithKey = { key: hostWithAuthByKey.keyProperty, value: hostWithAuthByKey.keyValue };
                    break;
                }
            }
        }
        return hostWithKey;
    }
    refreshToken() {
        const jwt = this.tokenService.decode();
        const currentTime = new Date().getTime() / 1000;
        if (!this.refreshInProgress &&
            jwt &&
            currentTime < jwt.exp &&
            currentTime > jwt.exp - 1800) {
            this.refreshInProgress = true;
            const url = this.config.getConfig('auth.url');
            return this.http.post(`${url}/refresh`, {}).subscribe((data) => {
                this.tokenService.set(data.token);
                this.refreshInProgress = false;
            }, err => {
                err.error.caught = true;
                return err;
            });
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(TokenService), i0.ɵɵinject(i1.HttpClient)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthInterceptor, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i2.ConfigService }, { type: TokenService }, { type: i1.HttpClient }]; }, null); })();

function MSALConfigFactory(config) {
    const msConf = config.getConfig('auth.microsoft') || {};
    msConf.redirectUri = msConf.redirectUri || window.location.href;
    msConf.authority = msConf.authority || 'https://login.microsoftonline.com/organizations';
    const myMsalObj = new PublicClientApplication({
        auth: msConf,
        cache: {
            cacheLocation: 'sessionStorage'
        }
    });
    return myMsalObj;
}
function MSALConfigFactoryb2c(config) {
    const msConf = config.getConfig('auth.microsoftb2c.browserAuthOptions') || {};
    msConf.redirectUri = msConf.redirectUri || window.location.href;
    msConf.authority = msConf.authority || 'https://login.microsoftonline.com/organizations';
    const myMsalObj = new PublicClientApplication({
        auth: msConf,
        cache: {
            cacheLocation: 'sessionStorage'
        }
    });
    return myMsalObj;
}
function MSALAngularConfigFactory(config) {
    const msConf = config.getConfig('auth.microsoft') || {};
    return {
        interactionType: InteractionType.Popup,
        authRequest: {
            scopes: ['user.read'],
            loginHint: 'todo',
        },
        type: 'add'
    };
}
function MSALAngularConfigFactoryb2c(config) {
    const msConf = config.getConfig('auth.microsoftb2c.browserAuthOptions') || {};
    return {
        interactionType: InteractionType.Popup,
        authRequest: {
            scopes: [msConf.clientId]
        },
        type: 'b2c'
    };
}
function provideAuthMicrosoft(type) {
    if (type === 'b2c') {
        return [
            {
                provide: MSAL_INSTANCE,
                useFactory: MSALConfigFactoryb2c,
                deps: [ConfigService]
            },
            {
                provide: MSAL_GUARD_CONFIG,
                useFactory: MSALAngularConfigFactoryb2c,
                deps: [ConfigService],
                multi: true
            },
            MsalServiceb2c
        ];
    }
    else {
        return [
            {
                provide: MSAL_INSTANCE,
                useFactory: MSALConfigFactory,
                deps: [ConfigService]
            },
            {
                provide: MSAL_GUARD_CONFIG,
                useFactory: MSALAngularConfigFactory,
                deps: [ConfigService],
                multi: true
            },
            MsalService
        ];
    }
}

class ProtectedDirective {
    constructor(authentication, el) {
        if (!authentication.isAuthenticated()) {
            el.nativeElement.parentNode.removeChild(el.nativeElement);
        }
    }
}
ProtectedDirective.ɵfac = function ProtectedDirective_Factory(t) { return new (t || ProtectedDirective)(i0.ɵɵdirectiveInject(AuthService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ProtectedDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProtectedDirective, selectors: [["", "igoProtected", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProtectedDirective, [{
        type: Directive,
        args: [{
                selector: '[igoProtected]'
            }]
    }], function () { return [{ type: AuthService }, { type: i0.ElementRef }]; }, null); })();

class AuthStorageService extends StorageService {
    constructor(config, http, authService, tokenService) {
        super(config);
        this.http = http;
        this.authService = authService;
        this.tokenService = tokenService;
        this.authService.authenticate$.subscribe(isAuthenticated => {
            if (isAuthenticated && this.options.url) {
                this.http
                    .get(this.options.url)
                    .subscribe((userIgo) => {
                    if (userIgo && userIgo.preference) {
                        for (const key of Object.keys(userIgo.preference)) {
                            const value = userIgo.preference[key];
                            super.set(key, value);
                        }
                    }
                });
            }
        });
    }
    set(key, value, scope = StorageScope.LOCAL) {
        if (scope === StorageScope.LOCAL &&
            this.authService.authenticated &&
            this.options.url) {
            const preference = {};
            preference[key] = value;
            this.http.patch(this.options.url, { preference }).subscribe();
        }
        super.set(key, value, scope);
    }
    remove(key, scope = StorageScope.LOCAL) {
        if (scope === StorageScope.LOCAL &&
            this.authService.authenticated &&
            this.options.url) {
            const preference = {};
            preference[key] = undefined;
            this.http.patch(this.options.url, { preference }).subscribe();
        }
        super.remove(key, scope);
    }
    clear(scope = StorageScope.LOCAL) {
        if (scope === StorageScope.LOCAL &&
            this.authService.authenticated &&
            this.options.url) {
            this.http.patch(this.options.url, { preference: {} }, {
                params: {
                    mergePreference: 'false'
                }
            }).subscribe();
        }
        let token;
        if (scope === StorageScope.LOCAL) {
            token = this.tokenService.get();
        }
        super.clear(scope);
        if (token) {
            this.tokenService.set(token);
        }
        if (scope === StorageScope.LOCAL &&
            this.authService.authenticated &&
            this.options.url) {
            this.http
                .get(this.options.url)
                .subscribe((userIgo) => {
                if (userIgo && userIgo.preference) {
                    for (const key of Object.keys(userIgo.preference)) {
                        const value = userIgo.preference[key];
                        super.set(key, value);
                    }
                }
            });
        }
    }
}
AuthStorageService.ɵfac = function AuthStorageService_Factory(t) { return new (t || AuthStorageService)(i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(AuthService), i0.ɵɵinject(TokenService)); };
AuthStorageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthStorageService, factory: AuthStorageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i2.ConfigService }, { type: i1.HttpClient }, { type: AuthService }, { type: TokenService }]; }, null); })();

const routes = [
    { path: 'login', component: AuthFormComponent },
    { path: 'logout', component: AuthFormComponent }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[RouterModule.forChild(routes)], RouterModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
                providers: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthRoutingModule, { imports: [i3.RouterModule], exports: [RouterModule] }); })();

class IgoAuthModule {
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

/*
 * Public API Surface of auth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AdminGuard, AuthFormComponent, AuthGuard, AuthInterceptor, AuthRoutingModule, AuthService, AuthStorageService, IgoAuthModule, LoggedGuard, MSALAngularConfigFactory, MSALAngularConfigFactoryb2c, MSALConfigFactory, MSALConfigFactoryb2c, ProfilsGuard, ProtectedDirective, TokenService, provideAuthMicrosoft };
//# sourceMappingURL=igo2-auth.js.map
