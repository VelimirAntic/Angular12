(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('rxjs/operators'), require('rxjs'), require('@igo2/utils'), require('@ngx-translate/core'), require('ngx-toastr'), require('@angular/material/icon'), require('@angular/platform-browser'), require('@angular/router'), require('@angular/cdk/layout')) :
    typeof define === 'function' && define.amd ? define('@igo2/core', ['exports', '@angular/core', '@angular/common', '@angular/common/http', 'rxjs/operators', 'rxjs', '@igo2/utils', '@ngx-translate/core', 'ngx-toastr', '@angular/material/icon', '@angular/platform-browser', '@angular/router', '@angular/cdk/layout'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.igo2 = global.igo2 || {}, global.igo2.core = {}), global.ng.core, global.ng.common, global.ng.common.http, global.rxjs.operators, global.rxjs, global.utils, global["ngxt-core"], global.ngxToastr, global.ng.material.icon, global.ng.platformBrowser, global.ng.router, global.ng.cdk.layout));
})(this, (function (exports, i0, common, http, operators, rxjs, utils, i1, i1$1, i1$2, i2, i1$3, i1$4) { 'use strict';

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
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var i1__namespace$4 = /*#__PURE__*/_interopNamespace(i1$4);

    var ActivityService = /** @class */ (function () {
        function ActivityService() {
            this.counter$ = new rxjs.BehaviorSubject(0);
            this.ids = [];
        }
        ActivityService.prototype.register = function () {
            var id = utils.uuid();
            this.ids.push(id);
            this.counter$.next(this.ids.length);
            return id;
        };
        ActivityService.prototype.unregister = function (id) {
            var index = this.ids.indexOf(id);
            if (index === -1) {
                return;
            }
            this.ids.splice(index, 1);
            this.counter$.next(this.ids.length);
        };
        return ActivityService;
    }());
    ActivityService.ɵfac = function ActivityService_Factory(t) { return new (t || ActivityService)(); };
    ActivityService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ActivityService, factory: ActivityService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ActivityService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var ActivityInterceptor = /** @class */ (function () {
        function ActivityInterceptor(activityService) {
            this.activityService = activityService;
        }
        ActivityInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            var activity = req.headers.get('activityInterceptor');
            if (activity) {
                var actReq = req.clone({
                    headers: req.headers.delete('activityInterceptor')
                });
                if (activity === 'false') {
                    return next.handle(actReq);
                }
            }
            var id = this.activityService.register();
            return next.handle(req).pipe(operators.finalize(function () {
                _this.activityService.unregister(id);
            }));
        };
        return ActivityInterceptor;
    }());
    ActivityInterceptor.ɵfac = function ActivityInterceptor_Factory(t) { return new (t || ActivityInterceptor)(i0__namespace.ɵɵinject(ActivityService)); };
    ActivityInterceptor.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ActivityInterceptor, factory: ActivityInterceptor.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ActivityInterceptor, [{
                type: i0.Injectable
            }], function () { return [{ type: ActivityService }]; }, null);
    })();

    var IgoActivityModule = /** @class */ (function () {
        function IgoActivityModule() {
        }
        IgoActivityModule.forRoot = function () {
            return {
                ngModule: IgoActivityModule,
                providers: [
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: ActivityInterceptor,
                        multi: true
                    }
                ]
            };
        };
        return IgoActivityModule;
    }());
    IgoActivityModule.ɵfac = function IgoActivityModule_Factory(t) { return new (t || IgoActivityModule)(); };
    IgoActivityModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoActivityModule });
    IgoActivityModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoActivityModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: []
                    }]
            }], null, null);
    })();

    var version = {
        lib: '1.11.1',
        releaseDate: 1649355043171
    };

    var ConfigService = /** @class */ (function () {
        function ConfigService(injector) {
            this.injector = injector;
            this.config = {};
        }
        /**
         * Use to get the data found in config file
         */
        ConfigService.prototype.getConfig = function (key) {
            return utils.ObjectUtils.resolve(this.config, key);
        };
        /**
         * This method loads "[path]" to get all config's variables
         */
        ConfigService.prototype.load = function (options) {
            var _this = this;
            var baseConfig = options.default || {};
            if (!options.path) {
                this.config = baseConfig;
                return true;
            }
            var http$1 = this.injector.get(http.HttpClient);
            return new Promise(function (resolve, _reject) {
                http$1
                    .get(options.path)
                    .pipe(operators.catchError(function (error) {
                    console.log("Configuration file " + options.path + " could not be read");
                    resolve(true);
                    return rxjs.throwError(error.error || 'Server error');
                }))
                    .subscribe(function (configResponse) {
                    _this.config = utils.ObjectUtils.mergeDeep(utils.ObjectUtils.mergeDeep({ version: version }, baseConfig), configResponse);
                    resolve(true);
                });
            });
        };
        return ConfigService;
    }());
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0__namespace.ɵɵinject(i0__namespace.Injector)); };
    ConfigService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ConfigService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i0__namespace.Injector }]; }, null);
    })();

    var CONFIG_OPTIONS = new i0.InjectionToken('configOptions');
    function provideConfigOptions(options) {
        return {
            provide: CONFIG_OPTIONS,
            useValue: options
        };
    }
    function configFactory(configService, options) {
        return function () { return configService.load(options); };
    }
    function provideConfigLoader() {
        return {
            provide: i0.APP_INITIALIZER,
            useFactory: configFactory,
            multi: true,
            deps: [ConfigService, CONFIG_OPTIONS]
        };
    }

    var IgoConfigModule = /** @class */ (function () {
        function IgoConfigModule() {
        }
        IgoConfigModule.forRoot = function () {
            return {
                ngModule: IgoConfigModule,
                providers: [provideConfigOptions({}), provideConfigLoader()]
            };
        };
        return IgoConfigModule;
    }());
    IgoConfigModule.ɵfac = function IgoConfigModule_Factory(t) { return new (t || IgoConfigModule)(); };
    IgoConfigModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoConfigModule });
    IgoConfigModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoConfigModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: []
                    }]
            }], null, null);
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

    var LanguageLoader = /** @class */ (function () {
        function LanguageLoader(http, prefix, suffix, config) {
            if (suffix === void 0) { suffix = '.json'; }
            this.http = http;
            this.prefix = prefix;
            this.suffix = suffix;
            this.config = config;
        }
        LanguageLoader.prototype.getTranslation = function (lang) {
            var _this = this;
            var translation = require("../locale/" + lang + ".json");
            var igoLocale$ = rxjs.of(translation);
            if (this.config && !this.prefix) {
                var prefix = this.config.getConfig('language.prefix');
                this.prefix = !prefix || Array.isArray(prefix) ? prefix : [prefix];
            }
            if (!this.prefix || this.prefix.length === 0) {
                return igoLocale$;
            }
            var appLocale$ = this.prefix.map(function (prefix) { return _this.http.get("" + prefix + lang + _this.suffix); });
            var locale$ = rxjs.combineLatest(__spreadArray([igoLocale$], __read(appLocale$)));
            return locale$.pipe(operators.map(function (translations) {
                return translations.reduce(function (acc, current) { return utils.ObjectUtils.mergeDeep(acc, current); }, {});
            }));
        };
        return LanguageLoader;
    }());

    function defaultLanguageLoader(http, config) {
        return new LanguageLoader(http, undefined, undefined, config);
    }
    function provideLanguageLoader(loader) {
        return {
            provide: i1.TranslateLoader,
            useFactory: loader || defaultLanguageLoader,
            deps: [http.HttpClient]
        };
    }
    function provideDefaultLanguageLoader(loader) {
        return {
            provide: i1.TranslateLoader,
            useFactory: loader || defaultLanguageLoader,
            deps: [http.HttpClient, ConfigService]
        };
    }

    var IgoMissingTranslationHandler = /** @class */ (function () {
        function IgoMissingTranslationHandler() {
        }
        IgoMissingTranslationHandler.prototype.handle = function (params) {
            if (!params.translateService.langs.length) {
                var error = 'Translations are not yet loaded. \
         Check that the LanguageService is injected.';
                throw new Error(error);
            }
            if (params.key.substr(0, 4) === 'igo.') {
                throw new Error("The Key \"" + params.key + "\" is missing in locale file.");
            }
            else {
                return params.key;
            }
        };
        return IgoMissingTranslationHandler;
    }());

    var IgoLanguageModule = /** @class */ (function () {
        function IgoLanguageModule() {
        }
        IgoLanguageModule.forRoot = function () {
            return {
                ngModule: IgoLanguageModule,
                providers: [provideDefaultLanguageLoader()]
            };
        };
        return IgoLanguageModule;
    }());
    IgoLanguageModule.ɵfac = function IgoLanguageModule_Factory(t) { return new (t || IgoLanguageModule)(); };
    IgoLanguageModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoLanguageModule });
    IgoLanguageModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.TranslateModule.forRoot({
                    missingTranslationHandler: {
                        provide: i1.MissingTranslationHandler,
                        useClass: IgoMissingTranslationHandler
                    }
                })
            ], i1.TranslateModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoLanguageModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.TranslateModule.forRoot({
                                missingTranslationHandler: {
                                    provide: i1.MissingTranslationHandler,
                                    useClass: IgoMissingTranslationHandler
                                }
                            })
                        ],
                        declarations: [],
                        exports: [i1.TranslateModule]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoLanguageModule, { imports: [i1__namespace.TranslateModule], exports: [i1.TranslateModule] }); })();

    var IgoMessageModule = /** @class */ (function () {
        function IgoMessageModule() {
        }
        IgoMessageModule.forRoot = function () {
            return {
                ngModule: IgoMessageModule,
                providers: []
            };
        };
        return IgoMessageModule;
    }());
    IgoMessageModule.ɵfac = function IgoMessageModule_Factory(t) { return new (t || IgoMessageModule)(); };
    IgoMessageModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoMessageModule });
    IgoMessageModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[common.CommonModule,
                i1$1.ToastrModule.forRoot({
                    positionClass: 'toast-bottom-right',
                    timeOut: 10000,
                    extendedTimeOut: 10000,
                    messageClass: 'toast-message mat-typography',
                    closeButton: true,
                    progressBar: true,
                    enableHtml: true,
                    tapToDismiss: true,
                    maxOpened: 4,
                    preventDuplicates: true,
                    resetTimeoutOnDuplicate: true,
                    countDuplicates: false,
                    includeTitleDuplicates: true
                })]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoMessageModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule,
                            i1$1.ToastrModule.forRoot({
                                positionClass: 'toast-bottom-right',
                                timeOut: 10000,
                                extendedTimeOut: 10000,
                                messageClass: 'toast-message mat-typography',
                                closeButton: true,
                                progressBar: true,
                                enableHtml: true,
                                tapToDismiss: true,
                                maxOpened: 4,
                                preventDuplicates: true,
                                resetTimeoutOnDuplicate: true,
                                countDuplicates: false,
                                includeTitleDuplicates: true
                            })],
                        declarations: [],
                        exports: []
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoMessageModule, { imports: [common.CommonModule, i1__namespace$1.ToastrModule] }); })();

    var LanguageService = /** @class */ (function () {
        function LanguageService(translate) {
            this.translate = translate;
            this.language = this.translate.getBrowserLang();
            var lang = this.getLanguage();
            this.translate.setDefaultLang(lang);
        }
        LanguageService.prototype.getLanguage = function () {
            return this.language.match(/en|fr/) ? this.language : 'en';
        };
        LanguageService.prototype.setLanguage = function (language) {
            this.language = language.match(/en|fr/) ? language : 'en';
            this.translate.use(this.language);
            this.translate.reloadLang(this.language);
        };
        return LanguageService;
    }());
    LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(i0__namespace.ɵɵinject(i1__namespace.TranslateService)); };
    LanguageService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(LanguageService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1__namespace.TranslateService }]; }, null);
    })();

    exports.MessageType = void 0;
    (function (MessageType) {
        MessageType["ERROR"] = "error";
        MessageType["ALERT"] = "warning";
        MessageType["WARNING"] = "warning";
        MessageType["INFO"] = "info";
        MessageType["SUCCESS"] = "success";
    })(exports.MessageType || (exports.MessageType = {}));

    var MessageService = /** @class */ (function () {
        function MessageService(injector, configService, languageService) {
            this.injector = injector;
            this.configService = configService;
            this.languageService = languageService;
            this.messages$ = new rxjs.BehaviorSubject([]);
            this.options = this.configService.getConfig('message') || {};
        }
        Object.defineProperty(MessageService.prototype, "toastr", {
            get: function () {
                return this.injector.get(i1$1.ToastrService);
            },
            enumerable: false,
            configurable: true
        });
        MessageService.prototype.showError = function (httpError) {
            httpError.error.caught = true;
            return this.error(httpError.error.message, httpError.error.title);
        };
        MessageService.prototype.message = function (message) {
            this.messages$.next(this.messages$.value.concat([message]));
            message.options = message.options || {};
            var currentDate = new Date();
            message.options.from = message.options.from ? message.options.from : new Date('1 jan 1900');
            message.options.to = message.options.to ? message.options.to : new Date('1 jan 3000');
            if (typeof message.options.from === 'string') {
                message.options.from = new Date(Date.parse(message.options.from.replace(/-/g, ' ')));
            }
            if (typeof message.options.to === 'string') {
                message.options.to = new Date(Date.parse(message.options.to.replace(/-/g, ' ')));
            }
            if (currentDate > message.options.from && currentDate < message.options.to) {
                message = this.handleTemplate(message);
                if (message.text) {
                    var messageShown = void 0;
                    switch (message.type) {
                        case exports.MessageType.SUCCESS:
                            messageShown = this.success(message.text, message.title, message.options);
                            break;
                        case exports.MessageType.ERROR:
                            messageShown = this.error(message.text, message.title, message.options);
                            break;
                        case exports.MessageType.INFO:
                            messageShown = this.info(message.text, message.title, message.options);
                            break;
                        case exports.MessageType.ALERT:
                        case exports.MessageType.WARNING:
                            messageShown = this.alert(message.text, message.title, message.options);
                            break;
                        default:
                            messageShown = this.info(message.text, message.title, message.options);
                            break;
                    }
                    message.options.id = messageShown.toastId;
                }
            }
        };
        MessageService.prototype.success = function (text, title, options) {
            if (title === void 0) { title = 'igo.core.message.success'; }
            if (options === void 0) { options = {}; }
            var message = this.languageService.translate.instant(text);
            var translatedTitle = this.languageService.translate.instant(title);
            return this.toastr.success(message, translatedTitle, options);
        };
        MessageService.prototype.error = function (text, title, options) {
            if (title === void 0) { title = 'igo.core.message.error'; }
            if (options === void 0) { options = {}; }
            var message = this.languageService.translate.instant(text);
            var translatedTitle = this.languageService.translate.instant(title);
            return this.toastr.error(message, translatedTitle, options);
        };
        MessageService.prototype.info = function (text, title, options) {
            if (title === void 0) { title = 'igo.core.message.info'; }
            if (options === void 0) { options = {}; }
            var message = this.languageService.translate.instant(text);
            var translatedTitle = this.languageService.translate.instant(title);
            return this.toastr.info(message, translatedTitle, options);
        };
        MessageService.prototype.alert = function (text, title, options) {
            if (title === void 0) { title = 'igo.core.message.alert'; }
            if (options === void 0) { options = {}; }
            var message = this.languageService.translate.instant(text);
            var translatedTitle = this.languageService.translate.instant(title);
            return this.toastr.warning(message, translatedTitle, options);
        };
        MessageService.prototype.remove = function (id) {
            this.toastr.remove(id);
        };
        MessageService.prototype.removeAllAreNotError = function () {
            var e_1, _a;
            try {
                for (var _b = __values(this.messages$.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var mess = _c.value;
                    if (mess.type !== exports.MessageType.ERROR) {
                        this.remove(mess.options.id);
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
        };
        MessageService.prototype.handleTemplate = function (message) {
            if (!this.options.template || message.html) {
                return message;
            }
            var html = this.options.template;
            html = html.replace('${text}', message.text);
            html = html.replace('${title}', message.title);
            message.html = undefined;
            message.text = html;
            message.title = undefined;
            return message;
        };
        return MessageService;
    }());
    MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(i0__namespace.ɵɵinject(i0.Injector), i0__namespace.ɵɵinject(ConfigService), i0__namespace.ɵɵinject(LanguageService)); };
    MessageService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MessageService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: i0__namespace.Injector, decorators: [{
                            type: i0.Inject,
                            args: [i0.Injector]
                        }] }, { type: ConfigService }, { type: LanguageService }];
        }, null);
    })();

    var ErrorInterceptor = /** @class */ (function () {
        function ErrorInterceptor(messageService, injector) {
            this.messageService = messageService;
            this.injector = injector;
        }
        ErrorInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            var errorContainer = { httpError: undefined };
            return next.handle(req).pipe(operators.catchError(function (error) { return _this.handleError(error, errorContainer); }), operators.finalize(function () {
                _this.handleCaughtError(errorContainer);
                _this.handleUncaughtError(errorContainer);
            }));
        };
        ErrorInterceptor.prototype.handleError = function (httpError, errorContainer) {
            if (httpError instanceof http.HttpErrorResponse) {
                var errorObj = httpError.error === 'object' ? httpError.error : {};
                errorObj.message = httpError.error.message || httpError.statusText;
                errorObj.caught = false;
                httpError = new http.HttpErrorResponse({
                    error: errorObj,
                    headers: httpError.headers,
                    status: httpError.status,
                    statusText: httpError.statusText,
                    url: httpError.url
                });
            }
            errorContainer.httpError = httpError;
            return rxjs.throwError(httpError);
        };
        ErrorInterceptor.prototype.handleCaughtError = function (errorContainer) {
            var httpError = errorContainer.httpError;
            if (httpError && httpError.error.toDisplay) {
                httpError.error.caught = true;
                this.messageService.error(httpError.error.message, httpError.error.title);
            }
        };
        ErrorInterceptor.prototype.handleUncaughtError = function (errorContainer) {
            var httpError = errorContainer.httpError;
            if (httpError && !httpError.error.caught) {
                var translate = this.injector.get(LanguageService).translate;
                var message = translate.instant('igo.core.errors.uncaught.message');
                var title = translate.instant('igo.core.errors.uncaught.title');
                httpError.error.caught = true;
                this.messageService.error(message, title);
            }
        };
        return ErrorInterceptor;
    }());
    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(i0__namespace.ɵɵinject(MessageService), i0__namespace.ɵɵinject(i0__namespace.Injector)); };
    ErrorInterceptor.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ErrorInterceptor, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: MessageService }, { type: i0__namespace.Injector }]; }, null);
    })();

    var IgoErrorModule = /** @class */ (function () {
        function IgoErrorModule(parentModule) {
            if (parentModule) {
                throw new Error('IgoErrorModule is already loaded. Import it in the AppModule only');
            }
        }
        IgoErrorModule.forRoot = function () {
            return {
                ngModule: IgoErrorModule,
                providers: [
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: ErrorInterceptor,
                        multi: true
                    }
                ]
            };
        };
        return IgoErrorModule;
    }());
    IgoErrorModule.ɵfac = function IgoErrorModule_Factory(t) { return new (t || IgoErrorModule)(i0__namespace.ɵɵinject(IgoErrorModule, 12)); };
    IgoErrorModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoErrorModule });
    IgoErrorModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoErrorModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: []
                    }]
            }], function () {
            return [{ type: IgoErrorModule, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.SkipSelf
                        }] }];
        }, null);
    })();

    var IgoCoreModule = /** @class */ (function () {
        function IgoCoreModule(matIconRegistry, domSanitizer) {
            matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/igo2/core/icons/mdi.svg'));
        }
        IgoCoreModule.forRoot = function () {
            return {
                ngModule: IgoCoreModule,
                providers: []
            };
        };
        return IgoCoreModule;
    }());
    IgoCoreModule.ɵfac = function IgoCoreModule_Factory(t) { return new (t || IgoCoreModule)(i0__namespace.ɵɵinject(i1__namespace$2.MatIconRegistry), i0__namespace.ɵɵinject(i2__namespace.DomSanitizer)); };
    IgoCoreModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoCoreModule });
    IgoCoreModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                common.CommonModule,
                http.HttpClientModule,
                IgoActivityModule.forRoot(),
                IgoConfigModule.forRoot(),
                IgoErrorModule.forRoot(),
                IgoLanguageModule.forRoot(),
                IgoMessageModule.forRoot()
            ], IgoActivityModule,
            IgoConfigModule,
            IgoErrorModule,
            IgoLanguageModule,
            IgoMessageModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoCoreModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule,
                            IgoActivityModule.forRoot(),
                            IgoConfigModule.forRoot(),
                            IgoErrorModule.forRoot(),
                            IgoLanguageModule.forRoot(),
                            IgoMessageModule.forRoot()
                        ],
                        declarations: [],
                        exports: [
                            IgoActivityModule,
                            IgoConfigModule,
                            IgoErrorModule,
                            IgoLanguageModule,
                            IgoMessageModule
                        ]
                    }]
            }], function () { return [{ type: i1__namespace$2.MatIconRegistry }, { type: i2__namespace.DomSanitizer }]; }, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoCoreModule, { imports: [common.CommonModule,
                http.HttpClientModule, IgoActivityModule, IgoConfigModule, IgoErrorModule, IgoLanguageModule, IgoMessageModule], exports: [IgoActivityModule,
                IgoConfigModule,
                IgoErrorModule,
                IgoLanguageModule,
                IgoMessageModule] });
    })();

    var IgoGestureConfig = /** @class */ (function (_super) {
        __extends(IgoGestureConfig, _super);
        function IgoGestureConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IgoGestureConfig.prototype.buildHammer = function (element) {
            var mc = _super.prototype.buildHammer.call(this, element);
            mc.set({ touchAction: 'pan-y' });
            return mc;
        };
        return IgoGestureConfig;
    }(i2.HammerGestureConfig));
    IgoGestureConfig.ɵfac = /*@__PURE__*/ function () { var ɵIgoGestureConfig_BaseFactory; return function IgoGestureConfig_Factory(t) { return (ɵIgoGestureConfig_BaseFactory || (ɵIgoGestureConfig_BaseFactory = i0__namespace.ɵɵgetInheritedFactory(IgoGestureConfig)))(t || IgoGestureConfig); }; }();
    IgoGestureConfig.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: IgoGestureConfig, factory: IgoGestureConfig.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoGestureConfig, [{
                type: i0.Injectable
            }], null, null);
    })();

    var IgoGestureModule = /** @class */ (function () {
        function IgoGestureModule() {
        }
        IgoGestureModule.forRoot = function () {
            return {
                ngModule: IgoGestureModule,
                providers: [
                    {
                        provide: i2.HAMMER_GESTURE_CONFIG,
                        useClass: IgoGestureConfig
                    }
                ]
            };
        };
        return IgoGestureModule;
    }());
    IgoGestureModule.ɵfac = function IgoGestureModule_Factory(t) { return new (t || IgoGestureModule)(); };
    IgoGestureModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoGestureModule });
    IgoGestureModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i2.HammerModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoGestureModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.HammerModule],
                        declarations: [],
                        exports: []
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoGestureModule, { imports: [i2.HammerModule] }); })();

    var LoggingInterceptor = /** @class */ (function () {
        function LoggingInterceptor() {
        }
        LoggingInterceptor.prototype.intercept = function (req, next) {
            var started = Date.now();
            var ok;
            // extend server response observable with logging
            return next.handle(req).pipe(operators.tap(
            // Succeeds when there is a response; ignore other events
            function (event) { return (ok = event instanceof http.HttpResponse ? 'succeeded' : ''); }, 
            // Operation failed; error is an HttpErrorResponse
            function (error) { return (ok = 'failed'); }), 
            // Log when response observable either completes or errors
            operators.finalize(function () {
                var elapsed = Date.now() - started;
                var msg = req.method + " \"" + req.urlWithParams + "\"\n             " + ok + " in " + elapsed + " ms.";
                console.log(msg);
            }));
        };
        return LoggingInterceptor;
    }());
    LoggingInterceptor.ɵfac = function LoggingInterceptor_Factory(t) { return new (t || LoggingInterceptor)(); };
    LoggingInterceptor.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: LoggingInterceptor, factory: LoggingInterceptor.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(LoggingInterceptor, [{
                type: i0.Injectable
            }], null, null);
    })();

    var IgoLoggingModule = /** @class */ (function () {
        function IgoLoggingModule() {
        }
        IgoLoggingModule.forRoot = function () {
            return {
                ngModule: IgoLoggingModule,
                providers: [
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: LoggingInterceptor,
                        multi: true
                    }
                ]
            };
        };
        return IgoLoggingModule;
    }());
    IgoLoggingModule.ɵfac = function IgoLoggingModule_Factory(t) { return new (t || IgoLoggingModule)(); };
    IgoLoggingModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoLoggingModule });
    IgoLoggingModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoLoggingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: []
                    }]
            }], null, null);
    })();

    var ROUTE_SERVICE_OPTIONS = new i0.InjectionToken('routeServiceOptions');
    function provideRouteServiceOptions(options) {
        return {
            provide: ROUTE_SERVICE_OPTIONS,
            useValue: options
        };
    }
    var RouteService = /** @class */ (function () {
        function RouteService(router, route, options) {
            this.router = router;
            this.route = route;
            var defaultOptions = {
                centerKey: 'center',
                zoomKey: 'zoom',
                projectionKey: 'projection',
                contextKey: 'context',
                searchKey: 'search',
                visibleOnLayersKey: 'visiblelayers',
                visibleOffLayersKey: 'invisiblelayers',
                directionsCoordKey: 'routing',
                directionsOptionsKey: 'routingOptions',
                toolKey: 'tool',
                wmsUrlKey: 'wmsUrl',
                wmsLayersKey: 'wmsLayers',
                wmtsUrlKey: 'wmtsUrl',
                wmtsLayersKey: 'wmtsLayers',
                arcgisUrlKey: 'arcgisUrl',
                arcgisLayersKey: 'arcgisLayers',
                iarcgisUrlKey: 'iarcgisUrl',
                iarcgisLayersKey: 'iarcgisLayers',
                tarcgisUrlKey: 'tarcgisUrl',
                tarcgisLayersKey: 'tarcgisLayers',
                vectorKey: 'vector'
            };
            this.options = Object.assign({}, defaultOptions, options);
        }
        Object.defineProperty(RouteService.prototype, "queryParams", {
            get: function () {
                var url = decodeURIComponent(location.search);
                if (url.includes('¢er=')) {
                    url = url.replace('¢er', '&center');
                    var queryParams = url
                        .slice(1)
                        .split('&')
                        .map(function (p) { return p.split('='); })
                        .reduce(function (obj, pair) {
                        var _a = __read(pair.map(decodeURIComponent), 2), key = _a[0], value = _a[1];
                        obj[key] = value;
                        return obj;
                    }, {});
                    this.router.navigate([], { queryParams: queryParams });
                }
                return this.route.queryParams;
            },
            enumerable: false,
            configurable: true
        });
        return RouteService;
    }());
    RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(i0__namespace.ɵɵinject(i1__namespace$3.Router), i0__namespace.ɵɵinject(i1__namespace$3.ActivatedRoute), i0__namespace.ɵɵinject(ROUTE_SERVICE_OPTIONS, 8)); };
    RouteService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: RouteService, factory: RouteService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RouteService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: i1__namespace$3.Router }, { type: i1__namespace$3.ActivatedRoute }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ROUTE_SERVICE_OPTIONS]
                        }, {
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    var AnalyticsService = /** @class */ (function () {
        function AnalyticsService(config) {
            this.config = config;
            this.options = this.config.getConfig('analytics') || {};
            if (this.options.provider === 'matomo') {
                this.initMatomo();
            }
        }
        Object.defineProperty(AnalyticsService.prototype, "paq", {
            get: function () {
                return (window._paq = window._paq || []);
            },
            enumerable: false,
            configurable: true
        });
        AnalyticsService.prototype.initMatomo = function () {
            var _this = this;
            if (!this.options.url || !this.options.id) {
                return;
            }
            var url = this.options.url.substr(-1) === '/'
                ? this.options.url + 'matomo'
                : this.options.url;
            // this.paq.push(['trackPageView']);
            // this.paq.push(['enableLinkTracking']);
            (function () {
                _this.paq.push(['setTrackerUrl', url + '.php']);
                _this.paq.push(['setSiteId', _this.options.id]);
                var g = document.createElement('script');
                var s = document.getElementsByTagName('script')[0];
                g.type = 'text/javascript';
                g.async = true;
                g.defer = true;
                g.src = url + '.js';
                s.parentNode.insertBefore(g, s);
            })();
        };
        AnalyticsService.prototype.setUser = function (user, profils) {
            if (this.options.provider === 'matomo') {
                if (!user) {
                    this.paq.push(['resetUserId']);
                    this.paq.push(['deleteCustomVariable', 1, 'user']);
                    this.paq.push(['deleteCustomVariable', 2, 'name']);
                    this.paq.push(['deleteCustomVariable', 3, 'profils']);
                }
                else {
                    this.paq.push(['setUserId', user.id]);
                    var name = user.firstName + " " + user.lastName;
                    this.paq.push(['setCustomVariable', 1, 'user', user.sourceId, 'visit']);
                    this.paq.push(['setCustomVariable', 2, 'name', name, 'visit']);
                    this.paq.push(['setCustomVariable', 3, 'profils', profils, 'visit']);
                }
                this.paq.push(['trackPageView']);
                this.paq.push(['enableLinkTracking']);
            }
        };
        AnalyticsService.prototype.trackSearch = function (term, nbResults) {
            if (this.options.provider === 'matomo') {
                this.paq.push(['trackSiteSearch', term, false, nbResults]);
            }
        };
        AnalyticsService.prototype.trackEvent = function (category, action, name) {
            if (this.options.provider === 'matomo') {
                this.paq.push(['trackEvent', category, action, name]);
            }
        };
        return AnalyticsService;
    }());
    AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(i0__namespace.ɵɵinject(ConfigService)); };
    AnalyticsService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: AnalyticsService, factory: AnalyticsService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AnalyticsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: ConfigService }]; }, null);
    })();

    exports.Media = void 0;
    (function (Media) {
        Media["Mobile"] = "mobile";
        Media["Tablet"] = "tablet";
        Media["Desktop"] = "desktop";
    })(exports.Media || (exports.Media = {}));
    exports.MediaOrientation = void 0;
    (function (MediaOrientation) {
        MediaOrientation["Portrait"] = "portrait";
        MediaOrientation["Landscape"] = "landscape";
    })(exports.MediaOrientation || (exports.MediaOrientation = {}));

    var MediaService = /** @class */ (function () {
        function MediaService(breakpointObserver) {
            var _this = this;
            this.media$ = new rxjs.BehaviorSubject(undefined);
            this.orientation$ = new rxjs.BehaviorSubject(undefined);
            breakpointObserver
                .observe([i1$4.Breakpoints.HandsetLandscape])
                .subscribe(function (res) {
                if (res.matches) {
                    _this.media$.next(exports.Media.Mobile);
                    _this.orientation$.next(exports.MediaOrientation.Landscape);
                }
            });
            breakpointObserver.observe([i1$4.Breakpoints.HandsetPortrait]).subscribe(function (res) {
                if (res.matches) {
                    _this.media$.next(exports.Media.Mobile);
                    _this.orientation$.next(exports.MediaOrientation.Portrait);
                }
            });
            breakpointObserver.observe([i1$4.Breakpoints.TabletLandscape]).subscribe(function (res) {
                if (res.matches) {
                    _this.media$.next(exports.Media.Tablet);
                    _this.orientation$.next(exports.MediaOrientation.Landscape);
                }
            });
            breakpointObserver.observe([i1$4.Breakpoints.TabletPortrait]).subscribe(function (res) {
                if (res.matches) {
                    _this.media$.next(exports.Media.Tablet);
                    _this.orientation$.next(exports.MediaOrientation.Portrait);
                }
            });
            breakpointObserver.observe([i1$4.Breakpoints.WebLandscape]).subscribe(function (res) {
                if (res.matches) {
                    _this.media$.next(exports.Media.Desktop);
                    _this.orientation$.next(exports.MediaOrientation.Landscape);
                }
            });
            breakpointObserver.observe([i1$4.Breakpoints.WebPortrait]).subscribe(function (res) {
                if (res.matches) {
                    _this.media$.next(exports.Media.Desktop);
                    _this.orientation$.next(exports.MediaOrientation.Portrait);
                }
            });
        }
        MediaService.prototype.getMedia = function () {
            return this.media$.value;
        };
        MediaService.prototype.getOrientation = function () {
            return this.orientation$.value;
        };
        MediaService.prototype.isTouchScreen = function () {
            return 'ontouchstart' in document.documentElement ? true : false;
        };
        MediaService.prototype.isMobile = function () {
            var media = this.getMedia();
            return media === 'mobile';
        };
        MediaService.prototype.isDesktop = function () {
            var media = this.getMedia();
            return media === 'desktop';
        };
        return MediaService;
    }());
    MediaService.ɵfac = function MediaService_Factory(t) { return new (t || MediaService)(i0__namespace.ɵɵinject(i1__namespace$4.BreakpointObserver)); };
    MediaService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: MediaService, factory: MediaService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MediaService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1__namespace$4.BreakpointObserver }]; }, null);
    })();

    exports.StorageScope = void 0;
    (function (StorageScope) {
        StorageScope["SESSION"] = "Session";
        StorageScope["LOCAL"] = "Local";
    })(exports.StorageScope || (exports.StorageScope = {}));
    exports.StorageServiceEventEnum = void 0;
    (function (StorageServiceEventEnum) {
        StorageServiceEventEnum["ADDED"] = "Added";
        StorageServiceEventEnum["MODIFIED"] = "Modified";
        StorageServiceEventEnum["REMOVED"] = "Removed";
        StorageServiceEventEnum["CLEARED"] = "Cleared";
    })(exports.StorageServiceEventEnum || (exports.StorageServiceEventEnum = {}));

    var StorageService = /** @class */ (function () {
        function StorageService(config) {
            this.config = config;
            this.storageChange$ = new rxjs.BehaviorSubject(undefined);
            this.options = this.config.getConfig('storage') || { key: 'igo' };
        }
        /**
         * Use to get the data found in storage file
         */
        StorageService.prototype.get = function (key, scope) {
            var value;
            if (!scope || scope === exports.StorageScope.SESSION) {
                value = sessionStorage.getItem(this.options.key + "." + key);
            }
            if (scope === exports.StorageScope.LOCAL || (!value && !scope)) {
                value = localStorage.getItem(this.options.key + "." + key);
            }
            if (value) {
                try {
                    value = JSON.parse(value);
                }
                catch (_a) {
                    value = value;
                }
            }
            return value;
        };
        StorageService.prototype.set = function (key, value, scope) {
            if (scope === void 0) { scope = exports.StorageScope.LOCAL; }
            var previousValue = this.get(key, scope);
            if (scope === exports.StorageScope.SESSION) {
                sessionStorage.setItem(this.options.key + "." + key, JSON.stringify(value));
            }
            else {
                localStorage.setItem(this.options.key + "." + key, JSON.stringify(value));
            }
            var currentValue = this.get(key, scope);
            if (currentValue !== previousValue) {
                this.storageChange$.next({
                    key: key,
                    scope: scope,
                    event: previousValue !== undefined ? exports.StorageServiceEventEnum.MODIFIED : exports.StorageServiceEventEnum.ADDED,
                    previousValue: previousValue,
                    currentValue: currentValue
                });
            }
        };
        StorageService.prototype.remove = function (key, scope) {
            if (scope === void 0) { scope = exports.StorageScope.LOCAL; }
            var previousValue = this.get(key, scope);
            if (scope === exports.StorageScope.SESSION) {
                sessionStorage.removeItem(this.options.key + "." + key);
            }
            else {
                localStorage.removeItem(this.options.key + "." + key);
            }
            this.storageChange$.next({ key: key, scope: scope, event: exports.StorageServiceEventEnum.REMOVED, previousValue: previousValue });
        };
        StorageService.prototype.clear = function (scope) {
            if (scope === void 0) { scope = exports.StorageScope.LOCAL; }
            if (scope === exports.StorageScope.SESSION) {
                sessionStorage.clear();
            }
            else {
                localStorage.clear();
            }
            this.storageChange$.next({ scope: scope, event: exports.StorageServiceEventEnum.CLEARED });
        };
        return StorageService;
    }());
    StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(i0__namespace.ɵɵinject(ConfigService)); };
    StorageService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StorageService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: ConfigService }]; }, null);
    })();

    var NetworkService = /** @class */ (function () {
        function NetworkService(messageService, injector) {
            this.messageService = messageService;
            this.injector = injector;
            this.stateChangeEventEmitter = new i0.EventEmitter();
            this.state = {
                connection: window.navigator.onLine
            };
            this.checkNetworkState();
        }
        NetworkService.prototype.checkNetworkState = function () {
            var _this = this;
            this.onlineSubscription = rxjs.fromEvent(window, 'online').subscribe(function () {
                if (_this.previousMessageId) {
                    _this.messageService.remove(_this.previousMessageId);
                }
                var translate = _this.injector.get(LanguageService).translate;
                var message = translate.instant('igo.core.network.online.message');
                var title = translate.instant('igo.core.network.online.title');
                var messageObj = _this.messageService.info(message, title);
                _this.previousMessageId = messageObj.toastId;
                _this.state.connection = true;
                _this.emitEvent();
            });
            this.offlineSubscription = rxjs.fromEvent(window, 'offline').subscribe(function () {
                if (_this.previousMessageId) {
                    _this.messageService.remove(_this.previousMessageId);
                }
                var translate = _this.injector.get(LanguageService).translate;
                var message = translate.instant('igo.core.network.offline.message');
                var title = translate.instant('igo.core.network.offline.title');
                var messageObj = _this.messageService.info(message, title);
                _this.previousMessageId = messageObj.toastId;
                _this.state.connection = false;
                _this.emitEvent();
            });
        };
        NetworkService.prototype.emitEvent = function () {
            this.stateChangeEventEmitter.emit(this.state);
        };
        NetworkService.prototype.ngOnDestroy = function () {
            try {
                this.offlineSubscription.unsubscribe();
                this.onlineSubscription.unsubscribe();
            }
            catch (e) { }
        };
        NetworkService.prototype.currentState = function (reportState) {
            if (reportState === void 0) { reportState = true; }
            return reportState
                ? this.stateChangeEventEmitter.pipe(operators.debounceTime(300), operators.startWith(this.state))
                : this.stateChangeEventEmitter.pipe(operators.debounceTime(300));
        };
        return NetworkService;
    }());
    NetworkService.ɵfac = function NetworkService_Factory(t) { return new (t || NetworkService)(i0__namespace.ɵɵinject(MessageService), i0__namespace.ɵɵinject(i0__namespace.Injector)); };
    NetworkService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: NetworkService, factory: NetworkService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NetworkService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: MessageService }, { type: i0__namespace.Injector }]; }, null);
    })();

    /*
     * Public API Surface of core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ActivityInterceptor = ActivityInterceptor;
    exports.ActivityService = ActivityService;
    exports.AnalyticsService = AnalyticsService;
    exports.CONFIG_OPTIONS = CONFIG_OPTIONS;
    exports.ConfigService = ConfigService;
    exports.ErrorInterceptor = ErrorInterceptor;
    exports.IgoActivityModule = IgoActivityModule;
    exports.IgoConfigModule = IgoConfigModule;
    exports.IgoCoreModule = IgoCoreModule;
    exports.IgoErrorModule = IgoErrorModule;
    exports.IgoGestureConfig = IgoGestureConfig;
    exports.IgoGestureModule = IgoGestureModule;
    exports.IgoLanguageModule = IgoLanguageModule;
    exports.IgoLoggingModule = IgoLoggingModule;
    exports.IgoMessageModule = IgoMessageModule;
    exports.IgoMissingTranslationHandler = IgoMissingTranslationHandler;
    exports.LanguageLoader = LanguageLoader;
    exports.LanguageService = LanguageService;
    exports.LoggingInterceptor = LoggingInterceptor;
    exports.MediaService = MediaService;
    exports.MessageService = MessageService;
    exports.NetworkService = NetworkService;
    exports.ROUTE_SERVICE_OPTIONS = ROUTE_SERVICE_OPTIONS;
    exports.RouteService = RouteService;
    exports.StorageService = StorageService;
    exports.configFactory = configFactory;
    exports.defaultLanguageLoader = defaultLanguageLoader;
    exports.provideConfigLoader = provideConfigLoader;
    exports.provideConfigOptions = provideConfigOptions;
    exports.provideDefaultLanguageLoader = provideDefaultLanguageLoader;
    exports.provideLanguageLoader = provideLanguageLoader;
    exports.provideRouteServiceOptions = provideRouteServiceOptions;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=igo2-core.umd.js.map
