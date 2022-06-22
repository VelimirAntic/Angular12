(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs/operators'), require('@angular/common/http'), require('rxjs'), require('ts-cacheable'), require('@igo2/utils'), require('jwt-decode'), require('@igo2/core'), require('@angular/common'), require('@azure/msal-angular'), require('@azure/msal-browser'), require('@angular/material/button'), require('@angular/material/icon'), require('@ngx-translate/core'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/material/input'), require('ts-md5')) :
    typeof define === 'function' && define.amd ? define('@igo2/auth', ['exports', '@angular/core', '@angular/router', 'rxjs/operators', '@angular/common/http', 'rxjs', 'ts-cacheable', '@igo2/utils', 'jwt-decode', '@igo2/core', '@angular/common', '@azure/msal-angular', '@azure/msal-browser', '@angular/material/button', '@angular/material/icon', '@ngx-translate/core', '@angular/forms', '@angular/material/form-field', '@angular/material/input', 'ts-md5'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.igo2 = global.igo2 || {}, global.igo2.auth = {}), global.ng.core, global.ng.router, global.rxjs.operators, global.ng.common.http, global.rxjs, global.tsCacheable, global.utils, global.jwt, global.core, global.ng.common, global["msal-angular"], global["msal-browser"], global.ng.material.button, global.ng.material.icon, global["ngxt-core"], global.ng.forms, global.ng.material.formField, global.ng.material.input, global.tsMd5));
})(this, (function (exports, i0, i3, operators, i1, rxjs, tsCacheable, utils, jwtDecode, i2, i1$1, i3$1, msalBrowser, i4, i5, i6, i3$2, i4$1, i5$1, tsMd5) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var jwtDecode__default = /*#__PURE__*/_interopDefaultLegacy(jwtDecode);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);

    var TokenService = /** @class */ (function () {
        function TokenService(injector) {
            this.injector = injector;
        }
        TokenService.prototype.set = function (token) {
            localStorage.setItem(this.tokenKey, token);
        };
        TokenService.prototype.remove = function () {
            localStorage.removeItem(this.tokenKey);
        };
        TokenService.prototype.get = function () {
            return localStorage.getItem(this.tokenKey);
        };
        TokenService.prototype.decode = function () {
            var token = this.get();
            if (!token) {
                return;
            }
            return jwtDecode__default["default"](token);
        };
        TokenService.prototype.isExpired = function () {
            var jwt = this.decode();
            var currentTime = new Date().getTime() / 1000;
            if (jwt && currentTime < jwt.exp) {
                return false;
            }
            return true;
        };
        Object.defineProperty(TokenService.prototype, "tokenKey", {
            get: function () {
                var config = this.injector.get(i2.ConfigService);
                this.options = config.getConfig('auth') || {};
                return this.options.tokenKey;
            },
            enumerable: false,
            configurable: true
        });
        return TokenService;
    }());
    TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(i0__namespace.ɵɵinject(i0__namespace.Injector)); };
    TokenService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TokenService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i0__namespace.Injector }]; }, null);
    })();

    var AuthService = /** @class */ (function () {
        function AuthService(http, tokenService, config, languageService, messageService, router) {
            var _this = this;
            this.http = http;
            this.tokenService = tokenService;
            this.config = config;
            this.languageService = languageService;
            this.messageService = messageService;
            this.router = router;
            this.authenticate$ = new rxjs.BehaviorSubject(undefined);
            this.logged$ = new rxjs.BehaviorSubject(undefined);
            this.anonymous = false;
            this.authenticate$.next(this.authenticated);
            this.authenticate$.subscribe(function (authenticated) {
                _this.logged$.next(authenticated);
                tsCacheable.globalCacheBusterNotifier.next();
            });
        }
        Object.defineProperty(AuthService.prototype, "hasAuthService", {
            get: function () {
                return this.config.getConfig('auth.url') !== undefined;
            },
            enumerable: false,
            configurable: true
        });
        AuthService.prototype.login = function (username, password) {
            var myHeader = new i1.HttpHeaders({ 'Content-Type': 'application/json' });
            var body = {
                username: username,
                password: this.encodePassword(password)
            };
            return this.loginCall(body, myHeader);
        };
        AuthService.prototype.loginWithToken = function (token, type, infosUser) {
            var myHeader = new i1.HttpHeaders({ 'Content-Type': 'application/json' });
            var body = {
                token: token,
                typeConnection: type,
                infosUser: infosUser
            };
            return this.loginCall(body, myHeader);
        };
        AuthService.prototype.loginAnonymous = function () {
            this.anonymous = true;
            this.logged$.next(true);
            return rxjs.of(true);
        };
        AuthService.prototype.refresh = function () {
            var _this = this;
            var url = this.config.getConfig('auth.url');
            return this.http.post(url + "/refresh", {}).pipe(operators.tap(function (data) {
                _this.tokenService.set(data.token);
            }), operators.catchError(function (err) {
                err.error.caught = true;
                throw err;
            }));
        };
        AuthService.prototype.logout = function () {
            this.anonymous = false;
            this.tokenService.remove();
            this.authenticate$.next(false);
            return rxjs.of(true);
        };
        AuthService.prototype.isAuthenticated = function () {
            return !this.tokenService.isExpired();
        };
        AuthService.prototype.getToken = function () {
            return this.tokenService.get();
        };
        AuthService.prototype.decodeToken = function () {
            if (this.isAuthenticated()) {
                return this.tokenService.decode();
            }
            return false;
        };
        AuthService.prototype.goToRedirectUrl = function () {
            if (!this.router) {
                return;
            }
            var redirectUrl = this.redirectUrl || this.router.url;
            var options = this.config.getConfig('auth') || {};
            if (redirectUrl === options.loginRoute) {
                var homeRoute = options.homeRoute || '/';
                this.router.navigateByUrl(homeRoute);
            }
            else if (redirectUrl) {
                this.router.navigateByUrl(redirectUrl);
            }
        };
        AuthService.prototype.getUserInfo = function () {
            var url = this.config.getConfig('auth.url') + '/info';
            return this.http.get(url);
        };
        AuthService.prototype.getProfils = function () {
            var url = this.config.getConfig('auth.url');
            return this.http.get(url + "/profils");
        };
        AuthService.prototype.updateUser = function (user) {
            var url = this.config.getConfig('auth.url');
            return this.http.patch(url, user);
        };
        AuthService.prototype.encodePassword = function (password) {
            return utils.Base64.encode(password);
        };
        Object.defineProperty(AuthService.prototype, "logged", {
            // authenticated or anonymous
            get: function () {
                return this.authenticated || this.isAnonymous;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthService.prototype, "isAnonymous", {
            get: function () {
                return this.anonymous;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthService.prototype, "authenticated", {
            get: function () {
                return this.isAuthenticated();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthService.prototype, "isAdmin", {
            get: function () {
                var token = this.decodeToken();
                if (token && token.user && token.user.isAdmin) {
                    return true;
                }
                return false;
            },
            enumerable: false,
            configurable: true
        });
        AuthService.prototype.loginCall = function (body, headers) {
            var _this = this;
            var url = this.config.getConfig('auth.url');
            return this.http.post(url + "/login", body, { headers: headers }).pipe(operators.tap(function (data) {
                _this.tokenService.set(data.token);
                var tokenDecoded = _this.decodeToken();
                if (tokenDecoded && tokenDecoded.user) {
                    if (tokenDecoded.user.locale) {
                        _this.languageService.setLanguage(tokenDecoded.user.locale);
                    }
                    if (tokenDecoded.user.isExpired) {
                        _this.languageService.translate
                            .get('igo.auth.error.Password expired')
                            .subscribe(function (expiredAlert) { return _this.messageService.alert(expiredAlert); });
                    }
                }
                _this.authenticate$.next(true);
            }), operators.catchError(function (err) {
                err.error.caught = true;
                throw err;
            }));
        };
        return AuthService;
    }());
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0__namespace.ɵɵinject(i1__namespace.HttpClient), i0__namespace.ɵɵinject(TokenService), i0__namespace.ɵɵinject(i2__namespace.ConfigService), i0__namespace.ɵɵinject(i2__namespace.LanguageService), i0__namespace.ɵɵinject(i2__namespace.MessageService), i0__namespace.ɵɵinject(i3__namespace.Router, 8)); };
    AuthService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: i1__namespace.HttpClient }, { type: TokenService }, { type: i2__namespace.ConfigService }, { type: i2__namespace.LanguageService }, { type: i2__namespace.MessageService }, { type: i3__namespace.Router, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    var AuthGoogleComponent = /** @class */ (function () {
        function AuthGoogleComponent(authService, config, languageService, appRef) {
            this.authService = authService;
            this.config = config;
            this.languageService = languageService;
            this.appRef = appRef;
            this.login = new i0.EventEmitter();
            this.options = this.config.getConfig('auth.google') || {};
            if (this.options.apiKey && this.options.clientId) {
                this.loadSDKGoogle();
                this.loadPlatform();
            }
            else {
                console.warn('Google authentification needs "apiKey" and "clientId" options');
            }
        }
        AuthGoogleComponent.prototype.handleSignInClick = function () {
            window.gapi.auth2.getAuthInstance().signIn();
        };
        AuthGoogleComponent.prototype.handleSignOutClick = function () {
            window.gapi.auth2.getAuthInstance().signOut();
        };
        AuthGoogleComponent.prototype.handleClientLoad = function () {
            var _this = this;
            window.gapi.load('client:auth2', function () { return _this.initClient(); });
        };
        AuthGoogleComponent.prototype.initClient = function () {
            var _this = this;
            window.gapi.client
                .init({
                apiKey: this.options.apiKey,
                clientId: this.options.clientId,
                discoveryDocs: [
                    'https://people.googleapis.com/$discovery/rest?version=v1'
                ],
                scope: 'profile'
            })
                .then(function () {
                _this.handleSignOutClick();
                _this.updateTextButton();
                window.gapi.auth2.getAuthInstance().isSignedIn.listen(function (rep) {
                    _this.updateSigninStatus(rep);
                });
            });
        };
        AuthGoogleComponent.prototype.updateSigninStatus = function (isSignedIn) {
            this.updateTextButton();
            if (isSignedIn) {
                this.loginGoogle(window.gapi.client.getToken().access_token);
            }
        };
        AuthGoogleComponent.prototype.updateTextButton = function () {
            var btn = document.querySelector('span[id^="not_signed_"]');
            if (btn && this.languageService.getLanguage() !== 'en') {
                if (btn.innerHTML === 'Sign in with Google') {
                    btn.innerHTML = this.languageService.translate.instant('igo.auth.google.login');
                }
                else if (btn.innerHTML === 'Signed in with Google') {
                    btn.innerHTML = this.languageService.translate.instant('igo.auth.google.logged');
                }
            }
        };
        AuthGoogleComponent.prototype.loginGoogle = function (token) {
            var _this = this;
            this.authService.loginWithToken(token, 'google').subscribe(function () {
                _this.appRef.tick();
                _this.login.emit(true);
            });
        };
        AuthGoogleComponent.prototype.loadSDKGoogle = function () {
            var _this = this;
            var fjs = document.getElementsByTagName('script')[0];
            var js = document.createElement('script');
            js.id = 'google-jssdk';
            js.src = 'https://apis.google.com/js/api.js';
            js.onload = function () {
                _this.handleClientLoad();
            };
            fjs.parentNode.insertBefore(js, fjs);
        };
        AuthGoogleComponent.prototype.loadPlatform = function () {
            var fjs = document.getElementsByTagName('script')[0];
            var js = document.createElement('script');
            js.id = 'google-platform';
            js.src = 'https://apis.google.com/js/platform.js';
            fjs.parentNode.insertBefore(js, fjs);
        };
        return AuthGoogleComponent;
    }());
    AuthGoogleComponent.ɵfac = function AuthGoogleComponent_Factory(t) { return new (t || AuthGoogleComponent)(i0__namespace.ɵɵdirectiveInject(AuthService), i0__namespace.ɵɵdirectiveInject(i2__namespace.ConfigService), i0__namespace.ɵɵdirectiveInject(i2__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ApplicationRef)); };
    AuthGoogleComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AuthGoogleComponent, selectors: [["igo-auth-google"]], outputs: { login: "login" }, decls: 1, vars: 0, consts: [["data-height", "40", "data-width", "265", "data-longtitle", "true", 1, "g-signin2", "google-login-button"]], template: function AuthGoogleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "div", 0);
            }
        }, styles: ["[_nghost-%COMP%]{padding:10px 10px 10px 0;display:inline-block}.google-login-button[_ngcontent-%COMP%]     .abcRioButton{color:#000000de}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthGoogleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-auth-google',
                        templateUrl: './auth-google.component.html',
                        styleUrls: ['./auth-google.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: AuthService }, { type: i2__namespace.ConfigService }, { type: i2__namespace.LanguageService }, { type: i0__namespace.ApplicationRef }]; }, { login: [{
                    type: i0.Output
                }] });
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var AuthMicrosoftComponent = /** @class */ (function () {
        function AuthMicrosoftComponent(authService, config, appRef, msalService, msalGuardConfig) {
            var _this = this;
            this.authService = authService;
            this.config = config;
            this.appRef = appRef;
            this.msalService = msalService;
            this.msalGuardConfig = msalGuardConfig;
            this._destroying$ = new rxjs.Subject();
            this.login = new i0.EventEmitter();
            this.options = this.config.getConfig('auth.microsoft') || {};
            this.msalService.instance = new msalBrowser.PublicClientApplication({
                auth: this.options,
                cache: {
                    cacheLocation: 'sessionStorage'
                }
            });
            this.broadcastService = new i3$1.MsalBroadcastService(this.msalService.instance, this.msalService);
            if (this.options.clientId) {
                this.broadcastService.inProgress$
                    .pipe(operators.filter(function (status) { return status === msalBrowser.InteractionStatus.None; }), operators.takeUntil(this._destroying$))
                    .subscribe(function () {
                    _this.checkAccount();
                });
            }
            else {
                console.warn('Microsoft authentification needs "clientId" option');
            }
        }
        AuthMicrosoftComponent.prototype.loginMicrosoft = function () {
            var _this = this;
            this.msalService.loginPopup(Object.assign({}, this.getConf().authRequest))
                .subscribe(function (response) {
                _this.msalService.instance.setActiveAccount(response.account);
                _this.checkAccount();
            });
        };
        AuthMicrosoftComponent.prototype.checkAccount = function () {
            var _this = this;
            this.msalService.instance
                .acquireTokenSilent(this.getConf().authRequest)
                .then(function (response) {
                var tokenAccess = response.accessToken;
                var tokenId = response.idToken;
                _this.authService.loginWithToken(tokenAccess, 'microsoft', { tokenId: tokenId }).subscribe(function () {
                    _this.appRef.tick();
                    _this.login.emit(true);
                });
            })
                .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (error instanceof msalBrowser.InteractionRequiredAuthError) {
                        // fallback to interaction when silent call fails
                        return [2 /*return*/, this.msalService.acquireTokenPopup(this.getConf().authRequest)];
                    }
                    console.log(error);
                    return [2 /*return*/];
                });
            }); }).catch(function (error) {
                console.log('Silent token fails');
            });
        };
        AuthMicrosoftComponent.prototype.getConf = function () {
            return this.msalGuardConfig.filter(function (conf) { return conf.type === 'add'; })[0];
        };
        return AuthMicrosoftComponent;
    }());
    AuthMicrosoftComponent.ɵfac = function AuthMicrosoftComponent_Factory(t) { return new (t || AuthMicrosoftComponent)(i0__namespace.ɵɵdirectiveInject(AuthService), i0__namespace.ɵɵdirectiveInject(i2__namespace.ConfigService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ApplicationRef), i0__namespace.ɵɵdirectiveInject(i3__namespace$1.MsalService), i0__namespace.ɵɵdirectiveInject(i3$1.MSAL_GUARD_CONFIG)); };
    AuthMicrosoftComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AuthMicrosoftComponent, selectors: [["igo-auth-microsoft"]], outputs: { login: "login" }, decls: 4, vars: 3, consts: [["mat-raised-button", "", 1, "microsoft-login-button", 3, "click"], ["svgIcon", "microsoft"]], template: function AuthMicrosoftComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function AuthMicrosoftComponent_Template_button_click_0_listener() { return ctx.loginMicrosoft(); });
                i0__namespace.ɵɵelement(1, "mat-icon", 1);
                i0__namespace.ɵɵtext(2);
                i0__namespace.ɵɵpipe(3, "translate");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(3, 1, "igo.auth.microsoft.login"), "\n");
            }
        }, directives: [i4__namespace.MatButton, i5__namespace.MatIcon], pipes: [i6__namespace.TranslatePipe], styles: ["[_nghost-%COMP%]{padding:10px 10px 10px 0;display:inline-block;position:relative;top:-15px}[_nghost-%COMP%] > button[_ngcontent-%COMP%]{font-size:15px;height:40px;width:265px}mat-icon[_ngcontent-%COMP%]{margin-right:10px}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthMicrosoftComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-auth-microsoft',
                        templateUrl: './auth-microsoft.component.html',
                        styleUrls: ['./auth-microsoft.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () {
            return [{ type: AuthService }, { type: i2__namespace.ConfigService }, { type: i0__namespace.ApplicationRef }, { type: i3__namespace$1.MsalService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i3$1.MSAL_GUARD_CONFIG]
                        }] }];
        }, { login: [{
                    type: i0.Output
                }] });
    })();

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var MsalServiceb2c = /** @class */ (function () {
        function MsalServiceb2c(instance, location) {
            this.instance = instance;
            this.location = location;
            this.name = '@azure/msal-angular';
            this.version = '2.0.0-beta.2';
            var hash = this.location.path(true).split('#').pop();
            if (hash) {
                this.redirectHash = "#" + hash;
            }
            this.instance.initializeWrapperLibrary(msalBrowser.WrapperSKU.Angular, this.version);
        }
        MsalServiceb2c.prototype.acquireTokenPopup = function (request) {
            return rxjs.from(this.instance.acquireTokenPopup(request));
        };
        MsalServiceb2c.prototype.acquireTokenRedirect = function (request) {
            return rxjs.from(this.instance.acquireTokenRedirect(request));
        };
        MsalServiceb2c.prototype.acquireTokenSilent = function (silentRequest) {
            return rxjs.from(this.instance.acquireTokenSilent(silentRequest));
        };
        MsalServiceb2c.prototype.handleRedirectObservable = function (hash) {
            return rxjs.from(this.instance.handleRedirectPromise(hash || this.redirectHash));
        };
        MsalServiceb2c.prototype.loginPopup = function (request) {
            return rxjs.from(this.instance.loginPopup(request));
        };
        MsalServiceb2c.prototype.loginRedirect = function (request) {
            return rxjs.from(this.instance.loginRedirect(request));
        };
        MsalServiceb2c.prototype.logout = function (logoutRequest) {
            return rxjs.from(this.instance.logout(logoutRequest));
        };
        MsalServiceb2c.prototype.logoutRedirect = function (logoutRequest) {
            return rxjs.from(this.instance.logoutRedirect(logoutRequest));
        };
        MsalServiceb2c.prototype.logoutPopup = function (logoutRequest) {
            return rxjs.from(this.instance.logoutPopup(logoutRequest));
        };
        MsalServiceb2c.prototype.ssoSilent = function (request) {
            return rxjs.from(this.instance.ssoSilent(request));
        };
        /**
         * Gets logger for msal-angular.
         * If no logger set, returns logger instance created with same options as msal-browser
         */
        MsalServiceb2c.prototype.getLogger = function () {
            if (!this.logger) {
                this.logger = this.instance.getLogger().clone(this.name, this.version);
            }
            return this.logger;
        };
        // Create a logger instance for msal-angular with the same options as msal-browser
        MsalServiceb2c.prototype.setLogger = function (logger) {
            this.logger = logger.clone(this.name, this.version);
            this.instance.setLogger(logger);
        };
        return MsalServiceb2c;
    }());
    MsalServiceb2c.ɵfac = function MsalServiceb2c_Factory(t) { return new (t || MsalServiceb2c)(i0__namespace.ɵɵinject(i3$1.MSAL_INSTANCE), i0__namespace.ɵɵinject(i1__namespace$1.Location)); };
    MsalServiceb2c.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: MsalServiceb2c, factory: MsalServiceb2c.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MsalServiceb2c, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i3$1.MSAL_INSTANCE]
                        }] }, { type: i1__namespace$1.Location }];
        }, null);
    })();

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var MsalBroadcastServiceb2c = /** @class */ (function () {
        function MsalBroadcastServiceb2c(msalInstance, authService) {
            var _this = this;
            this.msalInstance = msalInstance;
            this.authService = authService;
            this._msalSubject = new rxjs.Subject();
            this.msalSubject$ = this._msalSubject.asObservable();
            // InProgress as BehaviorSubject so most recent inProgress state will be available upon subscription
            this._inProgress = new rxjs.BehaviorSubject(msalBrowser.InteractionStatus.Startup);
            this.inProgress$ = this._inProgress.asObservable();
            this.msalInstance.addEventCallback(function (message) {
                _this._msalSubject.next(message);
                var status = msalBrowser.EventMessageUtils.getInteractionStatusFromEvent(message);
                if (status !== null) {
                    _this.authService.getLogger().verbose("BroadcastService - " + message.eventType + " results in setting inProgress to " + status);
                    _this._inProgress.next(status);
                }
            });
        }
        return MsalBroadcastServiceb2c;
    }());
    MsalBroadcastServiceb2c.ɵfac = function MsalBroadcastServiceb2c_Factory(t) { return new (t || MsalBroadcastServiceb2c)(i0__namespace.ɵɵinject(i3$1.MSAL_INSTANCE), i0__namespace.ɵɵinject(MsalServiceb2c)); };
    MsalBroadcastServiceb2c.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: MsalBroadcastServiceb2c, factory: MsalBroadcastServiceb2c.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MsalBroadcastServiceb2c, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i3$1.MSAL_INSTANCE]
                        }] }, { type: MsalServiceb2c }];
        }, null);
    })();

    var AuthMicrosoftb2cComponent = /** @class */ (function () {
        function AuthMicrosoftb2cComponent(authService, config, appRef, msalService, msalGuardConfig) {
            var _this = this;
            this.authService = authService;
            this.config = config;
            this.appRef = appRef;
            this.msalService = msalService;
            this.msalGuardConfig = msalGuardConfig;
            this._destroying$ = new rxjs.Subject();
            this.login = new i0.EventEmitter();
            this.options = this.config.getConfig('auth.microsoftb2c') || {};
            this.msalService.instance = new msalBrowser.PublicClientApplication({
                auth: this.options.browserAuthOptions,
                cache: {
                    cacheLocation: 'sessionStorage'
                }
            });
            this.broadcastService = new MsalBroadcastServiceb2c(this.msalService.instance, this.msalService);
            if (this.options.browserAuthOptions.clientId) {
                this.broadcastService.inProgress$
                    .pipe(operators.filter(function (status) { return status === msalBrowser.InteractionStatus.None; }), operators.takeUntil(this._destroying$))
                    .subscribe(function () {
                    _this.checkAccount();
                });
            }
            else {
                console.warn('Microsoft authentification needs "clientId" option');
            }
        }
        AuthMicrosoftb2cComponent.prototype.loginMicrosoftb2c = function () {
            var _this = this;
            this.msalService.loginPopup(Object.assign({}, this.getConf().authRequest))
                .subscribe(function (response) {
                _this.msalService.instance.setActiveAccount(response.account);
                _this.checkAccount();
            });
        };
        AuthMicrosoftb2cComponent.prototype.checkAccount = function () {
            var _this = this;
            this.msalService.instance
                .acquireTokenSilent(this.getConf().authRequest)
                .then(function (response) {
                var token = response.idToken;
                _this.authService.loginWithToken(token, 'microsoftb2c').subscribe(function () {
                    _this.appRef.tick();
                    _this.login.emit(true);
                });
            })
                .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (error instanceof msalBrowser.InteractionRequiredAuthError) {
                        // fallback to interaction when silent call fails
                        return [2 /*return*/, this.msalService.acquireTokenPopup(this.getConf().authRequest)];
                    }
                    return [2 /*return*/];
                });
            }); }).catch(function (error) {
                console.log('Silent token fails');
            });
        };
        AuthMicrosoftb2cComponent.prototype.getConf = function () {
            return this.msalGuardConfig.filter(function (conf) { return conf.type === 'b2c'; })[0];
        };
        return AuthMicrosoftb2cComponent;
    }());
    AuthMicrosoftb2cComponent.ɵfac = function AuthMicrosoftb2cComponent_Factory(t) { return new (t || AuthMicrosoftb2cComponent)(i0__namespace.ɵɵdirectiveInject(AuthService), i0__namespace.ɵɵdirectiveInject(i2__namespace.ConfigService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ApplicationRef), i0__namespace.ɵɵdirectiveInject(MsalServiceb2c), i0__namespace.ɵɵdirectiveInject(i3$1.MSAL_GUARD_CONFIG)); };
    AuthMicrosoftb2cComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AuthMicrosoftb2cComponent, selectors: [["igo-auth-microsoftb2c"]], outputs: { login: "login" }, decls: 4, vars: 3, consts: [["mat-raised-button", "", 1, "microsoft-login-button", 3, "click"], ["svgIcon", "microsoft"]], template: function AuthMicrosoftb2cComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function AuthMicrosoftb2cComponent_Template_button_click_0_listener() { return ctx.loginMicrosoftb2c(); });
                i0__namespace.ɵɵelement(1, "mat-icon", 1);
                i0__namespace.ɵɵtext(2);
                i0__namespace.ɵɵpipe(3, "translate");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(3, 1, "igo.auth.microsoftb2c.login"), "\n");
            }
        }, directives: [i4__namespace.MatButton, i5__namespace.MatIcon], pipes: [i6__namespace.TranslatePipe], styles: ["[_nghost-%COMP%]{padding:10px 10px 10px 0;display:inline-block;position:relative;top:-15px}[_nghost-%COMP%] > button[_ngcontent-%COMP%]{font-size:15px;height:40px;width:265px}mat-icon[_ngcontent-%COMP%]{margin-right:10px}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthMicrosoftb2cComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-auth-microsoftb2c',
                        templateUrl: './auth-microsoftb2c.component.html',
                        styleUrls: ['./auth-microsoftb2c.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () {
            return [{ type: AuthService }, { type: i2__namespace.ConfigService }, { type: i0__namespace.ApplicationRef }, { type: MsalServiceb2c }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i3$1.MSAL_GUARD_CONFIG]
                        }] }];
        }, { login: [{
                    type: i0.Output
                }] });
    })();

    var AuthFacebookComponent = /** @class */ (function () {
        function AuthFacebookComponent(authService, config, appRef) {
            this.authService = authService;
            this.config = config;
            this.appRef = appRef;
            this.login = new i0.EventEmitter();
            this.options = this.config.getConfig('auth.facebook') || {};
            if (this.options.appId) {
                this.loadSDKFacebook();
            }
            else {
                console.warn('Facebook authentification needs "appId" option');
            }
        }
        AuthFacebookComponent.prototype.subscribeEvents = function () {
            var _this = this;
            window.FB.Event.subscribe('auth.statusChange', function (rep) {
                _this.statusChangeCallback(rep);
            });
        };
        AuthFacebookComponent.prototype.statusChangeCallback = function (response) {
            if (response.status === 'connected') {
                var accessToken = response.authResponse.accessToken;
                this.loginFacebook(accessToken);
            }
        };
        AuthFacebookComponent.prototype.loginFacebook = function (token) {
            var _this = this;
            this.authService.loginWithToken(token, 'facebook').subscribe(function () {
                _this.appRef.tick();
                _this.login.emit(true);
            });
        };
        AuthFacebookComponent.prototype.loadSDKFacebook = function () {
            var _this = this;
            if (document.getElementById('facebook-jssdk')) {
                return;
            }
            var urlSDK = 'https://connect.facebook.net/fr_CA/sdk.js#xfbml=1&version=v2.9';
            var fjs = document.getElementsByTagName('script')[0];
            var js = document.createElement('script');
            js.id = 'facebook-jssdk';
            js.src = urlSDK + "&appId=" + this.options.appId;
            js.onload = function () {
                _this.subscribeEvents();
            };
            fjs.parentNode.insertBefore(js, fjs);
        };
        return AuthFacebookComponent;
    }());
    AuthFacebookComponent.ɵfac = function AuthFacebookComponent_Factory(t) { return new (t || AuthFacebookComponent)(i0__namespace.ɵɵdirectiveInject(AuthService), i0__namespace.ɵɵdirectiveInject(i2__namespace.ConfigService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ApplicationRef)); };
    AuthFacebookComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AuthFacebookComponent, selectors: [["igo-auth-facebook"]], outputs: { login: "login" }, decls: 1, vars: 0, consts: [["scope", "public_profile,email", "data-max-rows", "1", "data-size", "large", "data-button-type", "login_with", "data-show-faces", "false", "data-auto-logout-link", "false", "data-use-continue-as", "false", 1, "fb-login-button"]], template: function AuthFacebookComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "div", 0);
            }
        }, styles: ["[_nghost-%COMP%]{padding:10px 10px 10px 0;display:inline-block;position:relative;top:-3px}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthFacebookComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-auth-facebook',
                        templateUrl: './auth-facebook.component.html',
                        styleUrls: ['./auth-facebook.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: AuthService }, { type: i2__namespace.ConfigService }, { type: i0__namespace.ApplicationRef }]; }, { login: [{
                    type: i0.Output
                }] });
    })();

    function AuthInternComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 7);
            i0__namespace.ɵɵlistener("click", function AuthInternComponent_button_12_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.loginAnonymous(); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("disabled", ctx_r0.loading);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 2, "igo.auth.accessAnonymous"), " ");
        }
    }
    function AuthInternComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelement(1, "br");
            i0__namespace.ɵɵelementStart(2, "font", 8);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r1.error);
        }
    }
    var AuthInternComponent = /** @class */ (function () {
        function AuthInternComponent(auth, languageService, fb) {
            this.auth = auth;
            this.languageService = languageService;
            this._allowAnonymous = true;
            this.error = '';
            this.loading = false;
            this.login = new i0.EventEmitter();
            this.form = fb.group({
                username: ['', i3$2.Validators.required],
                password: ['', i3$2.Validators.required]
            });
        }
        Object.defineProperty(AuthInternComponent.prototype, "allowAnonymous", {
            get: function () {
                return this._allowAnonymous;
            },
            set: function (value) {
                this._allowAnonymous = value;
            },
            enumerable: false,
            configurable: true
        });
        AuthInternComponent.prototype.loginUser = function (values) {
            var _this = this;
            this.loading = true;
            this.auth.login(values.username, values.password).subscribe(function () {
                _this.login.emit(true);
                _this.loading = false;
            }, function (error) {
                try {
                    _this.languageService.translate
                        .get('igo.auth.error.' + error.error.message)
                        .subscribe(function (errorMsg) { return (_this.error = errorMsg); });
                }
                catch (e) {
                    _this.error = error.error.message;
                }
                _this.loading = false;
            });
            return false;
        };
        AuthInternComponent.prototype.loginAnonymous = function () {
            var _this = this;
            this.auth.loginAnonymous().subscribe(function () {
                _this.login.emit(true);
            });
        };
        return AuthInternComponent;
    }());
    AuthInternComponent.ɵfac = function AuthInternComponent_Factory(t) { return new (t || AuthInternComponent)(i0__namespace.ɵɵdirectiveInject(AuthService), i0__namespace.ɵɵdirectiveInject(i2__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i3__namespace$2.FormBuilder)); };
    AuthInternComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AuthInternComponent, selectors: [["igo-auth-intern"]], inputs: { allowAnonymous: "allowAnonymous" }, outputs: { login: "login" }, decls: 14, vars: 12, consts: [["role", "form", 3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "required", "", "formControlName", "username", 3, "placeholder"], ["matInput", "", "required", "", "type", "password", "formControlName", "password", 3, "placeholder"], ["mat-raised-button", "", "type", "submit"], ["mat-raised-button", "", "class", "anonymous", "type", "button", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "type", "button", 1, "anonymous", 3, "disabled", "click"], ["size", "3", "color", "red"]], template: function AuthInternComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵlistener("ngSubmit", function AuthInternComponent_Template_form_ngSubmit_0_listener() { return ctx.loginUser(ctx.form.value); });
                i0__namespace.ɵɵelementStart(1, "div");
                i0__namespace.ɵɵelementStart(2, "mat-form-field", 1);
                i0__namespace.ɵɵelement(3, "input", 2);
                i0__namespace.ɵɵpipe(4, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "div");
                i0__namespace.ɵɵelementStart(6, "mat-form-field", 1);
                i0__namespace.ɵɵelement(7, "input", 3);
                i0__namespace.ɵɵpipe(8, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "button", 4);
                i0__namespace.ɵɵtext(10);
                i0__namespace.ɵɵpipe(11, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(12, AuthInternComponent_button_12_Template, 3, 4, "button", 5);
                i0__namespace.ɵɵtemplate(13, AuthInternComponent_div_13_Template, 4, 1, "div", 6);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("formGroup", ctx.form);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵpropertyInterpolate("placeholder", i0__namespace.ɵɵpipeBind1(4, 6, "igo.auth.user"));
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵpropertyInterpolate("placeholder", i0__namespace.ɵɵpipeBind1(8, 8, "igo.auth.password"));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(11, 10, "igo.auth.login"));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.allowAnonymous);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.error);
            }
        }, directives: [i3__namespace$2.ɵNgNoValidate, i3__namespace$2.NgControlStatusGroup, i3__namespace$2.FormGroupDirective, i4__namespace$1.MatFormField, i5__namespace$1.MatInput, i3__namespace$2.DefaultValueAccessor, i3__namespace$2.RequiredValidator, i3__namespace$2.NgControlStatus, i3__namespace$2.FormControlName, i4__namespace.MatButton, i1__namespace$1.NgIf], pipes: [i6__namespace.TranslatePipe], styles: [".full-width[_ngcontent-%COMP%]{width:100%}.anonymous[_ngcontent-%COMP%]{margin-left:10px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthInternComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-auth-intern',
                        templateUrl: './auth-intern.component.html',
                        styleUrls: ['./auth-intern.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.Default
                    }]
            }], function () { return [{ type: AuthService }, { type: i2__namespace.LanguageService }, { type: i3__namespace$2.FormBuilder }]; }, { allowAnonymous: [{
                    type: i0.Input
                }], login: [{
                    type: i0.Output
                }] });
    })();

    function AuthFormComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "div", 3);
        }
    }
    function AuthFormComponent_div_0_div_2_igo_auth_google_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-auth-google", 7);
            i0__namespace.ɵɵlistener("login", function AuthFormComponent_div_0_div_2_igo_auth_google_4_Template_igo_auth_google_login_0_listener() { i0__namespace.ɵɵrestoreView(_r11_1); var ctx_r10 = i0__namespace.ɵɵnextContext(3); return ctx_r10.onLogin(); });
            i0__namespace.ɵɵelementEnd();
        }
    }
    function AuthFormComponent_div_0_div_2_igo_auth_microsoft_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-auth-microsoft", 7);
            i0__namespace.ɵɵlistener("login", function AuthFormComponent_div_0_div_2_igo_auth_microsoft_5_Template_igo_auth_microsoft_login_0_listener() { i0__namespace.ɵɵrestoreView(_r13_1); var ctx_r12 = i0__namespace.ɵɵnextContext(3); return ctx_r12.onLogin(); });
            i0__namespace.ɵɵelementEnd();
        }
    }
    function AuthFormComponent_div_0_div_2_igo_auth_microsoftb2c_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-auth-microsoftb2c", 7);
            i0__namespace.ɵɵlistener("login", function AuthFormComponent_div_0_div_2_igo_auth_microsoftb2c_6_Template_igo_auth_microsoftb2c_login_0_listener() { i0__namespace.ɵɵrestoreView(_r15_1); var ctx_r14 = i0__namespace.ɵɵnextContext(3); return ctx_r14.onLogin(); });
            i0__namespace.ɵɵelementEnd();
        }
    }
    function AuthFormComponent_div_0_div_2_igo_auth_facebook_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-auth-facebook", 7);
            i0__namespace.ɵɵlistener("login", function AuthFormComponent_div_0_div_2_igo_auth_facebook_7_Template_igo_auth_facebook_login_0_listener() { i0__namespace.ɵɵrestoreView(_r17_1); var ctx_r16 = i0__namespace.ɵɵnextContext(3); return ctx_r16.onLogin(); });
            i0__namespace.ɵɵelementEnd();
        }
    }
    function AuthFormComponent_div_0_div_2_igo_auth_intern_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-auth-intern", 8);
            i0__namespace.ɵɵlistener("login", function AuthFormComponent_div_0_div_2_igo_auth_intern_8_Template_igo_auth_intern_login_0_listener() { i0__namespace.ɵɵrestoreView(_r19_1); var ctx_r18 = i0__namespace.ɵɵnextContext(3); return ctx_r18.onLogin(); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("allowAnonymous", ctx_r9.options.allowAnonymous);
        }
    }
    function AuthFormComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵelementStart(1, "h1");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(4, AuthFormComponent_div_0_div_2_igo_auth_google_4_Template, 1, 0, "igo-auth-google", 5);
            i0__namespace.ɵɵtemplate(5, AuthFormComponent_div_0_div_2_igo_auth_microsoft_5_Template, 1, 0, "igo-auth-microsoft", 5);
            i0__namespace.ɵɵtemplate(6, AuthFormComponent_div_0_div_2_igo_auth_microsoftb2c_6_Template, 1, 0, "igo-auth-microsoftb2c", 5);
            i0__namespace.ɵɵtemplate(7, AuthFormComponent_div_0_div_2_igo_auth_facebook_7_Template, 1, 0, "igo-auth-facebook", 5);
            i0__namespace.ɵɵtemplate(8, AuthFormComponent_div_0_div_2_igo_auth_intern_8_Template, 1, 1, "igo-auth-intern", 6);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(3, 6, "igo.auth.connection"));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.options.google && ctx_r2.options.google.enabled !== false);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.options.microsoft && ctx_r2.options.microsoft.enabled !== false);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.options.microsoftb2c && ctx_r2.options.microsoftb2c.enabled !== false);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.options.facebook && ctx_r2.options.facebook.enabled !== false);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r2.options.intern || ctx_r2.options.intern.enabled !== false);
        }
    }
    function AuthFormComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵelementStart(1, "p");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "button", 9);
            i0__namespace.ɵɵlistener("click", function AuthFormComponent_div_0_div_3_Template_button_click_4_listener() { i0__namespace.ɵɵrestoreView(_r21_1); var ctx_r20 = i0__namespace.ɵɵnextContext(2); return ctx_r20.logout(); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind2(3, 2, "igo.auth.welcome", ctx_r3.user));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(6, 5, "igo.auth.signOut"));
        }
    }
    function AuthFormComponent_div_0_div_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 9);
            i0__namespace.ɵɵlistener("click", function AuthFormComponent_div_0_div_4_button_4_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r24_1); var ctx_r23 = i0__namespace.ɵɵnextContext(3); return ctx_r23.home(); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.auth.home"));
        }
    }
    function AuthFormComponent_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵelementStart(1, "p");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(4, AuthFormComponent_div_0_div_4_button_4_Template, 3, 3, "button", 10);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(3, 2, "igo.auth.deconnection"));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r4.options.homeRoute);
        }
    }
    function AuthFormComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtemplate(1, AuthFormComponent_div_0_div_1_Template, 1, 0, "div", 1);
            i0__namespace.ɵɵtemplate(2, AuthFormComponent_div_0_div_2_Template, 9, 8, "div", 2);
            i0__namespace.ɵɵtemplate(3, AuthFormComponent_div_0_div_3_Template, 7, 7, "div", 2);
            i0__namespace.ɵɵtemplate(4, AuthFormComponent_div_0_div_4_Template, 5, 4, "div", 2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r0.auth.logged && ctx_r0.backgroundDisable);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r0.auth.logged && ctx_r0.showLoginDiv);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.auth.logged && ctx_r0.showAlreadyConnectedDiv);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.showLogoutDiv);
        }
    }
    var AuthFormComponent = /** @class */ (function () {
        function AuthFormComponent(auth, config, router) {
            this.auth = auth;
            this.config = config;
            this.router = router;
            this._backgroundDisable = true;
            this._hasAlreadyConnectedDiv = true;
            this._hasLogoutDiv = true;
            this._showAlreadyConnectedDiv = false;
            this._showLogoutDiv = false;
            this.login = new i0.EventEmitter();
            this.visible = true;
            this.options = this.config.getConfig('auth') || {};
            this.visible = Object.getOwnPropertyNames(this.options).length !== 0;
        }
        Object.defineProperty(AuthFormComponent.prototype, "backgroundDisable", {
            get: function () {
                if (this.isLogoutRoute || this.isLogoutRoute) {
                    return false;
                }
                return this._backgroundDisable;
            },
            set: function (value) {
                this._backgroundDisable = value.toString() === 'true';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthFormComponent.prototype, "hasAlreadyConnectedDiv", {
            get: function () {
                return this._hasAlreadyConnectedDiv;
            },
            set: function (value) {
                this._hasAlreadyConnectedDiv = value.toString() === 'true';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthFormComponent.prototype, "hasLogoutDiv", {
            get: function () {
                return this._hasLogoutDiv;
            },
            set: function (value) {
                this._hasLogoutDiv = value.toString() === 'true';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthFormComponent.prototype, "showAlreadyConnectedDiv", {
            get: function () {
                if (this.isLogoutRoute) {
                    return this.hasAlreadyConnectedDiv;
                }
                return this._showAlreadyConnectedDiv;
            },
            set: function (value) {
                this._showAlreadyConnectedDiv = value.toString() === 'true';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthFormComponent.prototype, "showLogoutDiv", {
            get: function () {
                if (this.isLogoutRoute) {
                    return this.hasLogoutDiv;
                }
                return this._showLogoutDiv;
            },
            set: function (value) {
                this._showLogoutDiv = value.toString() === 'true';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthFormComponent.prototype, "showLoginDiv", {
            get: function () {
                if (!this.isLogoutRoute) {
                    return true;
                }
            },
            enumerable: false,
            configurable: true
        });
        AuthFormComponent.prototype.ngOnInit = function () {
            this.analyzeRoute();
            this.getName();
        };
        AuthFormComponent.prototype.onLogin = function () {
            this.auth.goToRedirectUrl();
            this.getName();
            this.login.emit(true);
        };
        AuthFormComponent.prototype.logout = function () {
            var _this = this;
            this.auth.logout().subscribe(function () {
                _this.user = undefined;
                if (_this.router) {
                    if (_this.options.logoutRoute) {
                        _this.router.navigate([_this.options.logoutRoute]);
                    }
                    else if (_this.options.homeRoute) {
                        _this.router.navigate([_this.options.homeRoute]);
                    }
                }
            });
        };
        AuthFormComponent.prototype.home = function () {
            if (this.router && this.options.homeRoute) {
                this.router.navigate([this.options.homeRoute]);
            }
        };
        AuthFormComponent.prototype.getName = function () {
            var tokenDecoded = this.auth.decodeToken();
            if (tokenDecoded) {
                this.user = {
                    name: tokenDecoded.user.firstName || tokenDecoded.user.sourceId
                };
            }
        };
        AuthFormComponent.prototype.analyzeRoute = function () {
            var _this = this;
            if (!this.router) {
                return;
            }
            this.router.events
                .pipe(operators.filter(function (event) { return event instanceof i3.NavigationStart; }))
                .subscribe(function (changeEvent) {
                if (changeEvent.url) {
                    var currentRoute = changeEvent.url;
                    var logoutRoute = _this.options.logoutRoute;
                    var loginRoute = _this.options.loginRoute;
                    _this.isLogoutRoute = currentRoute === logoutRoute;
                    _this.isLoginRoute = currentRoute === loginRoute;
                    if (_this.isLogoutRoute) {
                        _this.auth.logout();
                    }
                }
            });
        };
        return AuthFormComponent;
    }());
    AuthFormComponent.ɵfac = function AuthFormComponent_Factory(t) { return new (t || AuthFormComponent)(i0__namespace.ɵɵdirectiveInject(AuthService), i0__namespace.ɵɵdirectiveInject(i2__namespace.ConfigService), i0__namespace.ɵɵdirectiveInject(i3__namespace.Router, 8)); };
    AuthFormComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AuthFormComponent, selectors: [["igo-auth-form"]], inputs: { backgroundDisable: "backgroundDisable", hasAlreadyConnectedDiv: "hasAlreadyConnectedDiv", hasLogoutDiv: "hasLogoutDiv", showAlreadyConnectedDiv: "showAlreadyConnectedDiv", showLogoutDiv: "showLogoutDiv" }, outputs: { login: "login" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "backgroundDisable", 4, "ngIf"], ["class", "login center-block", 4, "ngIf"], [1, "backgroundDisable"], [1, "login", "center-block"], [3, "login", 4, "ngIf"], [3, "allowAnonymous", "login", 4, "ngIf"], [3, "login"], [3, "allowAnonymous", "login"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"]], template: function AuthFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, AuthFormComponent_div_0_Template, 5, 4, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.visible);
            }
        }, directives: [i1__namespace$1.NgIf, AuthGoogleComponent, AuthMicrosoftComponent, AuthMicrosoftb2cComponent, AuthFacebookComponent, AuthInternComponent, i4__namespace.MatButton], pipes: [i6__namespace.TranslatePipe], styles: ["[_nghost-%COMP%]{z-index:999}div.login[_ngcontent-%COMP%]{z-index:200;width:90%;min-width:360px;max-width:600px;padding:25px 50px;border:1px solid;background-color:#fff;border-color:#888}.center-block[_ngcontent-%COMP%]{position:fixed;top:20%;left:50%;transform:translate(-50%)}.backgroundDisable[_ngcontent-%COMP%]{position:fixed;top:0;left:0;background:#000;opacity:.8;z-index:100;height:100%;width:100%}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthFormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-auth-form',
                        templateUrl: './auth-form.component.html',
                        styleUrls: ['./auth-form.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.Default
                    }]
            }], function () {
            return [{ type: AuthService }, { type: i2__namespace.ConfigService }, { type: i3__namespace.Router, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { backgroundDisable: [{
                    type: i0.Input
                }], hasAlreadyConnectedDiv: [{
                    type: i0.Input
                }], hasLogoutDiv: [{
                    type: i0.Input
                }], showAlreadyConnectedDiv: [{
                    type: i0.Input
                }], showLogoutDiv: [{
                    type: i0.Input
                }], login: [{
                    type: i0.Output
                }] });
    })();

    var LoggedGuard = /** @class */ (function () {
        function LoggedGuard(authService, config, router) {
            this.authService = authService;
            this.config = config;
            this.router = router;
        }
        LoggedGuard.prototype.canActivate = function (route, state) {
            if (this.authService.logged) {
                return true;
            }
            this.authService.redirectUrl = state.url;
            var authConfig = this.config.getConfig('auth');
            if (authConfig && authConfig.loginRoute) {
                this.router.navigateByUrl(authConfig.loginRoute);
            }
            return false;
        };
        return LoggedGuard;
    }());
    LoggedGuard.ɵfac = function LoggedGuard_Factory(t) { return new (t || LoggedGuard)(i0__namespace.ɵɵinject(AuthService), i0__namespace.ɵɵinject(i2__namespace.ConfigService), i0__namespace.ɵɵinject(i3__namespace.Router)); };
    LoggedGuard.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: LoggedGuard, factory: LoggedGuard.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(LoggedGuard, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: AuthService }, { type: i2__namespace.ConfigService }, { type: i3__namespace.Router }]; }, null);
    })();

    var AuthGuard = /** @class */ (function () {
        function AuthGuard(authService, config, router) {
            this.authService = authService;
            this.config = config;
            this.router = router;
        }
        AuthGuard.prototype.canActivate = function (route, state) {
            if (this.authService.authenticated) {
                return true;
            }
            this.authService.redirectUrl = state.url;
            var authConfig = this.config.getConfig('auth');
            if (authConfig && authConfig.loginRoute) {
                this.router.navigateByUrl(authConfig.loginRoute);
            }
            return false;
        };
        return AuthGuard;
    }());
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0__namespace.ɵɵinject(AuthService), i0__namespace.ɵɵinject(i2__namespace.ConfigService), i0__namespace.ɵɵinject(i3__namespace.Router)); };
    AuthGuard.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthGuard, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: AuthService }, { type: i2__namespace.ConfigService }, { type: i3__namespace.Router }]; }, null);
    })();

    var AdminGuard = /** @class */ (function () {
        function AdminGuard(authService, config, router) {
            this.authService = authService;
            this.config = config;
            this.router = router;
        }
        AdminGuard.prototype.canActivate = function (route, state) {
            var token = this.authService.decodeToken();
            if (token && token.user && token.user.isAdmin) {
                return true;
            }
            this.authService.redirectUrl = state.url;
            var authConfig = this.config.getConfig('auth');
            if (authConfig && authConfig.loginRoute) {
                this.router.navigateByUrl(authConfig.loginRoute);
            }
            return false;
        };
        return AdminGuard;
    }());
    AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(i0__namespace.ɵɵinject(AuthService), i0__namespace.ɵɵinject(i2__namespace.ConfigService), i0__namespace.ɵɵinject(i3__namespace.Router)); };
    AdminGuard.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdminGuard, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: AuthService }, { type: i2__namespace.ConfigService }, { type: i3__namespace.Router }]; }, null);
    })();

    var ProfilsGuard = /** @class */ (function () {
        function ProfilsGuard(authService, config, router) {
            this.authService = authService;
            this.config = config;
            this.router = router;
        }
        ProfilsGuard.prototype.canActivate = function (_route, state) {
            var _this = this;
            return this.authService.getProfils().pipe(operators.map(function (profils) {
                var authConfig = _this.config.getConfig('auth');
                if (profils &&
                    profils.profils &&
                    profils.profils.some(function (v) { return authConfig.profilsGuard.indexOf(v) !== -1; })) {
                    return true;
                }
                _this.authService.redirectUrl = state.url;
                if (authConfig && authConfig.loginRoute) {
                    _this.router.navigateByUrl(authConfig.loginRoute);
                }
                return false;
            }));
        };
        return ProfilsGuard;
    }());
    ProfilsGuard.ɵfac = function ProfilsGuard_Factory(t) { return new (t || ProfilsGuard)(i0__namespace.ɵɵinject(AuthService), i0__namespace.ɵɵinject(i2__namespace.ConfigService), i0__namespace.ɵɵinject(i3__namespace.Router)); };
    ProfilsGuard.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ProfilsGuard, factory: ProfilsGuard.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ProfilsGuard, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: AuthService }, { type: i2__namespace.ConfigService }, { type: i3__namespace.Router }]; }, null);
    })();

    var AuthInterceptor = /** @class */ (function () {
        function AuthInterceptor(config, tokenService, http) {
            this.config = config;
            this.tokenService = tokenService;
            this.http = http;
            this.refreshInProgress = false;
        }
        Object.defineProperty(AuthInterceptor.prototype, "trustHosts", {
            get: function () {
                var trustHosts = this.config.getConfig('auth.trustHosts') || [];
                trustHosts.push(window.location.hostname);
                return trustHosts;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthInterceptor.prototype, "hostsWithCredentials", {
            get: function () {
                return this.config.getConfig('auth.hostsWithCredentials') || [];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthInterceptor.prototype, "hostsWithAuthByKey", {
            get: function () {
                return this.config.getConfig('auth.hostsByKey') || [];
            },
            enumerable: false,
            configurable: true
        });
        AuthInterceptor.prototype.intercept = function (originalReq, next) {
            var withCredentials = this.handleHostsWithCredentials(originalReq.url);
            var req = originalReq.clone();
            var hostWithKey = this.handleHostsAuthByKey(originalReq.url);
            if (hostWithKey) {
                req = req.clone({
                    params: req.params.set(hostWithKey.key, hostWithKey.value)
                });
            }
            if (withCredentials) {
                req = originalReq.clone({
                    withCredentials: withCredentials
                });
            }
            this.refreshToken();
            var token = this.tokenService.get();
            var element = document.createElement('a');
            element.href = req.url;
            if (element.host === '') {
                element.href = element.href; // FIX IE11, DO NOT REMOVE
            }
            if (!token || this.trustHosts.indexOf(element.hostname) === -1) {
                return next.handle(req);
            }
            var authHeader = "Bearer " + token;
            var authReq = req.clone({
                headers: req.headers.set('Authorization', authHeader)
            });
            var tokenDecoded = this.tokenService.decode();
            if (authReq.params.get('_i') === 'true' &&
                tokenDecoded &&
                tokenDecoded.user &&
                tokenDecoded.user.sourceId) {
                var hashUser = tsMd5.Md5.hashStr(tokenDecoded.user.sourceId);
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
        };
        AuthInterceptor.prototype.interceptXhr = function (xhr, url) {
            var withCredentials = this.handleHostsWithCredentials(url);
            if (withCredentials) {
                xhr.withCredentials = withCredentials;
                return true;
            }
            this.refreshToken();
            var element = document.createElement('a');
            element.href = url;
            var token = this.tokenService.get();
            if (!token || this.trustHosts.indexOf(element.hostname) === -1) {
                return false;
            }
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            return true;
        };
        AuthInterceptor.prototype.alterUrlWithKeyAuth = function (url) {
            var hostWithKey = this.handleHostsAuthByKey(url);
            var interceptedUrl = url;
            if (hostWithKey) {
                var urlDecomposed = interceptedUrl.split(/[?&]/);
                var urlWithKeyAdded = urlDecomposed.shift();
                var paramsToKeep = urlDecomposed.filter(function (p) { return p.length !== 0; });
                paramsToKeep.push(hostWithKey.key + "=" + hostWithKey.value);
                if (paramsToKeep.length) {
                    urlWithKeyAdded += '?' + paramsToKeep.join('&');
                }
                return urlWithKeyAdded;
            }
            return;
        };
        AuthInterceptor.prototype.handleHostsWithCredentials = function (reqUrl) {
            var e_1, _a;
            var withCredentials = false;
            try {
                for (var _b = __values(this.hostsWithCredentials), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var hostWithCredentials = _c.value;
                    var domainRegex = new RegExp(hostWithCredentials.domainRegFilters);
                    if (domainRegex.test(reqUrl)) {
                        withCredentials = hostWithCredentials.withCredentials !== undefined ? hostWithCredentials.withCredentials : undefined;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return withCredentials;
        };
        AuthInterceptor.prototype.handleHostsAuthByKey = function (reqUrl) {
            var e_2, _a;
            var hostWithKey;
            try {
                for (var _b = __values(this.hostsWithAuthByKey), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var hostWithAuthByKey = _c.value;
                    var domainRegex = new RegExp(hostWithAuthByKey.domainRegFilters);
                    if (domainRegex.test(reqUrl)) {
                        var replace = hostWithAuthByKey.keyProperty + "=" + hostWithAuthByKey.keyValue;
                        var keyAdded = new RegExp(replace, "gm");
                        if (!keyAdded.test(reqUrl)) {
                            hostWithKey = { key: hostWithAuthByKey.keyProperty, value: hostWithAuthByKey.keyValue };
                            break;
                        }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return hostWithKey;
        };
        AuthInterceptor.prototype.refreshToken = function () {
            var _this = this;
            var jwt = this.tokenService.decode();
            var currentTime = new Date().getTime() / 1000;
            if (!this.refreshInProgress &&
                jwt &&
                currentTime < jwt.exp &&
                currentTime > jwt.exp - 1800) {
                this.refreshInProgress = true;
                var url = this.config.getConfig('auth.url');
                return this.http.post(url + "/refresh", {}).subscribe(function (data) {
                    _this.tokenService.set(data.token);
                    _this.refreshInProgress = false;
                }, function (err) {
                    err.error.caught = true;
                    return err;
                });
            }
        };
        return AuthInterceptor;
    }());
    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(i0__namespace.ɵɵinject(i2__namespace.ConfigService), i0__namespace.ɵɵinject(TokenService), i0__namespace.ɵɵinject(i1__namespace.HttpClient)); };
    AuthInterceptor.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthInterceptor, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i2__namespace.ConfigService }, { type: TokenService }, { type: i1__namespace.HttpClient }]; }, null);
    })();

    function MSALConfigFactory(config) {
        var msConf = config.getConfig('auth.microsoft') || {};
        msConf.redirectUri = msConf.redirectUri || window.location.href;
        msConf.authority = msConf.authority || 'https://login.microsoftonline.com/organizations';
        var myMsalObj = new msalBrowser.PublicClientApplication({
            auth: msConf,
            cache: {
                cacheLocation: 'sessionStorage'
            }
        });
        return myMsalObj;
    }
    function MSALConfigFactoryb2c(config) {
        var msConf = config.getConfig('auth.microsoftb2c.browserAuthOptions') || {};
        msConf.redirectUri = msConf.redirectUri || window.location.href;
        msConf.authority = msConf.authority || 'https://login.microsoftonline.com/organizations';
        var myMsalObj = new msalBrowser.PublicClientApplication({
            auth: msConf,
            cache: {
                cacheLocation: 'sessionStorage'
            }
        });
        return myMsalObj;
    }
    function MSALAngularConfigFactory(config) {
        var msConf = config.getConfig('auth.microsoft') || {};
        return {
            interactionType: msalBrowser.InteractionType.Popup,
            authRequest: {
                scopes: ['user.read'],
                loginHint: 'todo',
            },
            type: 'add'
        };
    }
    function MSALAngularConfigFactoryb2c(config) {
        var msConf = config.getConfig('auth.microsoftb2c.browserAuthOptions') || {};
        return {
            interactionType: msalBrowser.InteractionType.Popup,
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
                    provide: i3$1.MSAL_INSTANCE,
                    useFactory: MSALConfigFactoryb2c,
                    deps: [i2.ConfigService]
                },
                {
                    provide: i3$1.MSAL_GUARD_CONFIG,
                    useFactory: MSALAngularConfigFactoryb2c,
                    deps: [i2.ConfigService],
                    multi: true
                },
                MsalServiceb2c
            ];
        }
        else {
            return [
                {
                    provide: i3$1.MSAL_INSTANCE,
                    useFactory: MSALConfigFactory,
                    deps: [i2.ConfigService]
                },
                {
                    provide: i3$1.MSAL_GUARD_CONFIG,
                    useFactory: MSALAngularConfigFactory,
                    deps: [i2.ConfigService],
                    multi: true
                },
                i3$1.MsalService
            ];
        }
    }

    var ProtectedDirective = /** @class */ (function () {
        function ProtectedDirective(authentication, el) {
            if (!authentication.isAuthenticated()) {
                el.nativeElement.parentNode.removeChild(el.nativeElement);
            }
        }
        return ProtectedDirective;
    }());
    ProtectedDirective.ɵfac = function ProtectedDirective_Factory(t) { return new (t || ProtectedDirective)(i0__namespace.ɵɵdirectiveInject(AuthService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    ProtectedDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: ProtectedDirective, selectors: [["", "igoProtected", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ProtectedDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoProtected]'
                    }]
            }], function () { return [{ type: AuthService }, { type: i0__namespace.ElementRef }]; }, null);
    })();

    var AuthStorageService = /** @class */ (function (_super) {
        __extends(AuthStorageService, _super);
        function AuthStorageService(config, http, authService, tokenService) {
            var _this = _super.call(this, config) || this;
            _this.http = http;
            _this.authService = authService;
            _this.tokenService = tokenService;
            _this.authService.authenticate$.subscribe(function (isAuthenticated) {
                if (isAuthenticated && _this.options.url) {
                    _this.http
                        .get(_this.options.url)
                        .subscribe(function (userIgo) {
                        var e_1, _a;
                        if (userIgo && userIgo.preference) {
                            try {
                                for (var _b = __values(Object.keys(userIgo.preference)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var key = _c.value;
                                    var value = userIgo.preference[key];
                                    _super.prototype.set.call(_this, key, value);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                    });
                }
            });
            return _this;
        }
        AuthStorageService.prototype.set = function (key, value, scope) {
            if (scope === void 0) { scope = i2.StorageScope.LOCAL; }
            if (scope === i2.StorageScope.LOCAL &&
                this.authService.authenticated &&
                this.options.url) {
                var preference = {};
                preference[key] = value;
                this.http.patch(this.options.url, { preference: preference }).subscribe();
            }
            _super.prototype.set.call(this, key, value, scope);
        };
        AuthStorageService.prototype.remove = function (key, scope) {
            if (scope === void 0) { scope = i2.StorageScope.LOCAL; }
            if (scope === i2.StorageScope.LOCAL &&
                this.authService.authenticated &&
                this.options.url) {
                var preference = {};
                preference[key] = undefined;
                this.http.patch(this.options.url, { preference: preference }).subscribe();
            }
            _super.prototype.remove.call(this, key, scope);
        };
        AuthStorageService.prototype.clear = function (scope) {
            var _this = this;
            if (scope === void 0) { scope = i2.StorageScope.LOCAL; }
            if (scope === i2.StorageScope.LOCAL &&
                this.authService.authenticated &&
                this.options.url) {
                this.http.patch(this.options.url, { preference: {} }, {
                    params: {
                        mergePreference: 'false'
                    }
                }).subscribe();
            }
            var token;
            if (scope === i2.StorageScope.LOCAL) {
                token = this.tokenService.get();
            }
            _super.prototype.clear.call(this, scope);
            if (token) {
                this.tokenService.set(token);
            }
            if (scope === i2.StorageScope.LOCAL &&
                this.authService.authenticated &&
                this.options.url) {
                this.http
                    .get(this.options.url)
                    .subscribe(function (userIgo) {
                    var e_2, _a;
                    if (userIgo && userIgo.preference) {
                        try {
                            for (var _b = __values(Object.keys(userIgo.preference)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var key = _c.value;
                                var value = userIgo.preference[key];
                                _super.prototype.set.call(_this, key, value);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                });
            }
        };
        return AuthStorageService;
    }(i2.StorageService));
    AuthStorageService.ɵfac = function AuthStorageService_Factory(t) { return new (t || AuthStorageService)(i0__namespace.ɵɵinject(i2__namespace.ConfigService), i0__namespace.ɵɵinject(i1__namespace.HttpClient), i0__namespace.ɵɵinject(AuthService), i0__namespace.ɵɵinject(TokenService)); };
    AuthStorageService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: AuthStorageService, factory: AuthStorageService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthStorageService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i2__namespace.ConfigService }, { type: i1__namespace.HttpClient }, { type: AuthService }, { type: TokenService }]; }, null);
    })();

    var routes = [
        { path: 'login', component: AuthFormComponent },
        { path: 'logout', component: AuthFormComponent }
    ];
    var AuthRoutingModule = /** @class */ (function () {
        function AuthRoutingModule() {
        }
        return AuthRoutingModule;
    }());
    AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
    AuthRoutingModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: AuthRoutingModule });
    AuthRoutingModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [], imports: [[i3.RouterModule.forChild(routes)], i3.RouterModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuthRoutingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i3.RouterModule.forChild(routes)],
                        exports: [i3.RouterModule],
                        providers: []
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(AuthRoutingModule, { imports: [i3__namespace.RouterModule], exports: [i3.RouterModule] }); })();

    var IgoAuthModule = /** @class */ (function () {
        function IgoAuthModule() {
        }
        IgoAuthModule.forRoot = function () {
            return {
                ngModule: IgoAuthModule,
                providers: __spreadArray(__spreadArray([
                    {
                        provide: i1.HTTP_INTERCEPTORS,
                        useClass: AuthInterceptor,
                        multi: true
                    },
                    {
                        provide: i2.StorageService,
                        useClass: AuthStorageService
                    }
                ], __read(provideAuthMicrosoft('add'))), __read(provideAuthMicrosoft('b2c')))
            };
        };
        return IgoAuthModule;
    }());
    IgoAuthModule.ɵfac = function IgoAuthModule_Factory(t) { return new (t || IgoAuthModule)(); };
    IgoAuthModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAuthModule });
    IgoAuthModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i3$2.ReactiveFormsModule,
                i4$1.MatFormFieldModule,
                i5$1.MatInputModule,
                i5.MatIconModule,
                i4.MatButtonModule,
                i2.IgoLanguageModule,
                i3$1.MsalModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAuthModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i3$2.ReactiveFormsModule,
                            i4$1.MatFormFieldModule,
                            i5$1.MatInputModule,
                            i5.MatIconModule,
                            i4.MatButtonModule,
                            i2.IgoLanguageModule,
                            i3$1.MsalModule
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
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAuthModule, { declarations: [AuthFormComponent,
                AuthGoogleComponent,
                AuthInternComponent,
                AuthFacebookComponent,
                AuthMicrosoftComponent,
                AuthMicrosoftb2cComponent,
                ProtectedDirective], imports: [i1$1.CommonModule,
                i3$2.ReactiveFormsModule,
                i4$1.MatFormFieldModule,
                i5$1.MatInputModule,
                i5.MatIconModule,
                i4.MatButtonModule,
                i2.IgoLanguageModule,
                i3$1.MsalModule], exports: [AuthFormComponent, ProtectedDirective] });
    })();

    /*
     * Public API Surface of auth
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AdminGuard = AdminGuard;
    exports.AuthFormComponent = AuthFormComponent;
    exports.AuthGuard = AuthGuard;
    exports.AuthInterceptor = AuthInterceptor;
    exports.AuthRoutingModule = AuthRoutingModule;
    exports.AuthService = AuthService;
    exports.AuthStorageService = AuthStorageService;
    exports.IgoAuthModule = IgoAuthModule;
    exports.LoggedGuard = LoggedGuard;
    exports.MSALAngularConfigFactory = MSALAngularConfigFactory;
    exports.MSALAngularConfigFactoryb2c = MSALAngularConfigFactoryb2c;
    exports.MSALConfigFactory = MSALConfigFactory;
    exports.MSALConfigFactoryb2c = MSALConfigFactoryb2c;
    exports.ProfilsGuard = ProfilsGuard;
    exports.ProtectedDirective = ProtectedDirective;
    exports.TokenService = TokenService;
    exports.provideAuthMicrosoft = provideAuthMicrosoft;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=igo2-auth.umd.js.map
