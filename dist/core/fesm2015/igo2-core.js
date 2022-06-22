import * as i0 from '@angular/core';
import { Injectable, NgModule, InjectionToken, APP_INITIALIZER, Injector, Inject, Optional, SkipSelf, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse, HttpClientModule, HttpResponse } from '@angular/common/http';
import { finalize, catchError, map, tap, debounceTime, startWith } from 'rxjs/operators';
import { BehaviorSubject, throwError, of, combineLatest, fromEvent } from 'rxjs';
import { uuid, ObjectUtils } from '@igo2/utils';
import * as i1 from '@ngx-translate/core';
import { TranslateLoader, TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import * as i1$1 from 'ngx-toastr';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import * as i1$2 from '@angular/material/icon';
import * as i2 from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import * as i1$3 from '@angular/router';
import * as i1$4 from '@angular/cdk/layout';
import { Breakpoints } from '@angular/cdk/layout';

class ActivityService {
    constructor() {
        this.counter$ = new BehaviorSubject(0);
        this.ids = [];
    }
    register() {
        const id = uuid();
        this.ids.push(id);
        this.counter$.next(this.ids.length);
        return id;
    }
    unregister(id) {
        const index = this.ids.indexOf(id);
        if (index === -1) {
            return;
        }
        this.ids.splice(index, 1);
        this.counter$.next(this.ids.length);
    }
}
ActivityService.ɵfac = function ActivityService_Factory(t) { return new (t || ActivityService)(); };
ActivityService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ActivityService, factory: ActivityService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActivityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ActivityInterceptor {
    constructor(activityService) {
        this.activityService = activityService;
    }
    intercept(req, next) {
        const activity = req.headers.get('activityInterceptor');
        if (activity) {
            const actReq = req.clone({
                headers: req.headers.delete('activityInterceptor')
            });
            if (activity === 'false') {
                return next.handle(actReq);
            }
        }
        const id = this.activityService.register();
        return next.handle(req).pipe(finalize(() => {
            this.activityService.unregister(id);
        }));
    }
}
ActivityInterceptor.ɵfac = function ActivityInterceptor_Factory(t) { return new (t || ActivityInterceptor)(i0.ɵɵinject(ActivityService)); };
ActivityInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ActivityInterceptor, factory: ActivityInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActivityInterceptor, [{
        type: Injectable
    }], function () { return [{ type: ActivityService }]; }, null); })();

class IgoActivityModule {
    static forRoot() {
        return {
            ngModule: IgoActivityModule,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ActivityInterceptor,
                    multi: true
                }
            ]
        };
    }
}
IgoActivityModule.ɵfac = function IgoActivityModule_Factory(t) { return new (t || IgoActivityModule)(); };
IgoActivityModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoActivityModule });
IgoActivityModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoActivityModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: []
            }]
    }], null, null); })();

const version = {
    lib: '1.11.1',
    releaseDate: 1649355043171
};

class ConfigService {
    constructor(injector) {
        this.injector = injector;
        this.config = {};
    }
    /**
     * Use to get the data found in config file
     */
    getConfig(key) {
        return ObjectUtils.resolve(this.config, key);
    }
    /**
     * This method loads "[path]" to get all config's variables
     */
    load(options) {
        const baseConfig = options.default || {};
        if (!options.path) {
            this.config = baseConfig;
            return true;
        }
        const http = this.injector.get(HttpClient);
        return new Promise((resolve, _reject) => {
            http
                .get(options.path)
                .pipe(catchError((error) => {
                console.log(`Configuration file ${options.path} could not be read`);
                resolve(true);
                return throwError(error.error || 'Server error');
            }))
                .subscribe((configResponse) => {
                this.config = ObjectUtils.mergeDeep(ObjectUtils.mergeDeep({ version }, baseConfig), configResponse);
                resolve(true);
            });
        });
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0.ɵɵinject(i0.Injector)); };
ConfigService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();

let CONFIG_OPTIONS = new InjectionToken('configOptions');
function provideConfigOptions(options) {
    return {
        provide: CONFIG_OPTIONS,
        useValue: options
    };
}
function configFactory(configService, options) {
    return () => configService.load(options);
}
function provideConfigLoader() {
    return {
        provide: APP_INITIALIZER,
        useFactory: configFactory,
        multi: true,
        deps: [ConfigService, CONFIG_OPTIONS]
    };
}

class IgoConfigModule {
    static forRoot() {
        return {
            ngModule: IgoConfigModule,
            providers: [provideConfigOptions({}), provideConfigLoader()]
        };
    }
}
IgoConfigModule.ɵfac = function IgoConfigModule_Factory(t) { return new (t || IgoConfigModule)(); };
IgoConfigModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoConfigModule });
IgoConfigModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoConfigModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: []
            }]
    }], null, null); })();

class LanguageLoader {
    constructor(http, prefix, suffix = '.json', config) {
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
        this.config = config;
    }
    getTranslation(lang) {
        const translation = require(`../locale/${lang}.json`);
        const igoLocale$ = of(translation);
        if (this.config && !this.prefix) {
            const prefix = this.config.getConfig('language.prefix');
            this.prefix = !prefix || Array.isArray(prefix) ? prefix : [prefix];
        }
        if (!this.prefix || this.prefix.length === 0) {
            return igoLocale$;
        }
        const appLocale$ = this.prefix.map((prefix) => this.http.get(`${prefix}${lang}${this.suffix}`));
        const locale$ = combineLatest([igoLocale$, ...appLocale$]);
        return locale$.pipe(map((translations) => {
            return translations.reduce((acc, current) => ObjectUtils.mergeDeep(acc, current), {});
        }));
    }
}

function defaultLanguageLoader(http, config) {
    return new LanguageLoader(http, undefined, undefined, config);
}
function provideLanguageLoader(loader) {
    return {
        provide: TranslateLoader,
        useFactory: loader || defaultLanguageLoader,
        deps: [HttpClient]
    };
}
function provideDefaultLanguageLoader(loader) {
    return {
        provide: TranslateLoader,
        useFactory: loader || defaultLanguageLoader,
        deps: [HttpClient, ConfigService]
    };
}

class IgoMissingTranslationHandler {
    handle(params) {
        if (!params.translateService.langs.length) {
            const error = 'Translations are not yet loaded. \
         Check that the LanguageService is injected.';
            throw new Error(error);
        }
        if (params.key.substr(0, 4) === 'igo.') {
            throw new Error(`The Key "${params.key}" is missing in locale file.`);
        }
        else {
            return params.key;
        }
    }
}

class IgoLanguageModule {
    static forRoot() {
        return {
            ngModule: IgoLanguageModule,
            providers: [provideDefaultLanguageLoader()]
        };
    }
}
IgoLanguageModule.ɵfac = function IgoLanguageModule_Factory(t) { return new (t || IgoLanguageModule)(); };
IgoLanguageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoLanguageModule });
IgoLanguageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            TranslateModule.forRoot({
                missingTranslationHandler: {
                    provide: MissingTranslationHandler,
                    useClass: IgoMissingTranslationHandler
                }
            })
        ], TranslateModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoLanguageModule, [{
        type: NgModule,
        args: [{
                imports: [
                    TranslateModule.forRoot({
                        missingTranslationHandler: {
                            provide: MissingTranslationHandler,
                            useClass: IgoMissingTranslationHandler
                        }
                    })
                ],
                declarations: [],
                exports: [TranslateModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoLanguageModule, { imports: [i1.TranslateModule], exports: [TranslateModule] }); })();

class IgoMessageModule {
    static forRoot() {
        return {
            ngModule: IgoMessageModule,
            providers: []
        };
    }
}
IgoMessageModule.ɵfac = function IgoMessageModule_Factory(t) { return new (t || IgoMessageModule)(); };
IgoMessageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoMessageModule });
IgoMessageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule,
            ToastrModule.forRoot({
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoMessageModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule,
                    ToastrModule.forRoot({
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoMessageModule, { imports: [CommonModule, i1$1.ToastrModule] }); })();

class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.language = this.translate.getBrowserLang();
        const lang = this.getLanguage();
        this.translate.setDefaultLang(lang);
    }
    getLanguage() {
        return this.language.match(/en|fr/) ? this.language : 'en';
    }
    setLanguage(language) {
        this.language = language.match(/en|fr/) ? language : 'en';
        this.translate.use(this.language);
        this.translate.reloadLang(this.language);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(i0.ɵɵinject(i1.TranslateService)); };
LanguageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LanguageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.TranslateService }]; }, null); })();

var MessageType;
(function (MessageType) {
    MessageType["ERROR"] = "error";
    MessageType["ALERT"] = "warning";
    MessageType["WARNING"] = "warning";
    MessageType["INFO"] = "info";
    MessageType["SUCCESS"] = "success";
})(MessageType || (MessageType = {}));

class MessageService {
    constructor(injector, configService, languageService) {
        this.injector = injector;
        this.configService = configService;
        this.languageService = languageService;
        this.messages$ = new BehaviorSubject([]);
        this.options = this.configService.getConfig('message') || {};
    }
    get toastr() {
        return this.injector.get(ToastrService);
    }
    showError(httpError) {
        httpError.error.caught = true;
        return this.error(httpError.error.message, httpError.error.title);
    }
    message(message) {
        this.messages$.next(this.messages$.value.concat([message]));
        message.options = message.options || {};
        const currentDate = new Date();
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
                let messageShown;
                switch (message.type) {
                    case MessageType.SUCCESS:
                        messageShown = this.success(message.text, message.title, message.options);
                        break;
                    case MessageType.ERROR:
                        messageShown = this.error(message.text, message.title, message.options);
                        break;
                    case MessageType.INFO:
                        messageShown = this.info(message.text, message.title, message.options);
                        break;
                    case MessageType.ALERT:
                    case MessageType.WARNING:
                        messageShown = this.alert(message.text, message.title, message.options);
                        break;
                    default:
                        messageShown = this.info(message.text, message.title, message.options);
                        break;
                }
                message.options.id = messageShown.toastId;
            }
        }
    }
    success(text, title = 'igo.core.message.success', options = {}) {
        const message = this.languageService.translate.instant(text);
        const translatedTitle = this.languageService.translate.instant(title);
        return this.toastr.success(message, translatedTitle, options);
    }
    error(text, title = 'igo.core.message.error', options = {}) {
        const message = this.languageService.translate.instant(text);
        const translatedTitle = this.languageService.translate.instant(title);
        return this.toastr.error(message, translatedTitle, options);
    }
    info(text, title = 'igo.core.message.info', options = {}) {
        const message = this.languageService.translate.instant(text);
        const translatedTitle = this.languageService.translate.instant(title);
        return this.toastr.info(message, translatedTitle, options);
    }
    alert(text, title = 'igo.core.message.alert', options = {}) {
        const message = this.languageService.translate.instant(text);
        const translatedTitle = this.languageService.translate.instant(title);
        return this.toastr.warning(message, translatedTitle, options);
    }
    remove(id) {
        this.toastr.remove(id);
    }
    removeAllAreNotError() {
        for (const mess of this.messages$.value) {
            if (mess.type !== MessageType.ERROR) {
                this.remove(mess.options.id);
            }
        }
    }
    handleTemplate(message) {
        if (!this.options.template || message.html) {
            return message;
        }
        let html = this.options.template;
        html = html.replace('${text}', message.text);
        html = html.replace('${title}', message.title);
        message.html = undefined;
        message.text = html;
        message.title = undefined;
        return message;
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(i0.ɵɵinject(Injector), i0.ɵɵinject(ConfigService), i0.ɵɵinject(LanguageService)); };
MessageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: ConfigService }, { type: LanguageService }]; }, null); })();

class ErrorInterceptor {
    constructor(messageService, injector) {
        this.messageService = messageService;
        this.injector = injector;
    }
    intercept(req, next) {
        const errorContainer = { httpError: undefined };
        return next.handle(req).pipe(catchError(error => this.handleError(error, errorContainer)), finalize(() => {
            this.handleCaughtError(errorContainer);
            this.handleUncaughtError(errorContainer);
        }));
    }
    handleError(httpError, errorContainer) {
        if (httpError instanceof HttpErrorResponse) {
            const errorObj = httpError.error === 'object' ? httpError.error : {};
            errorObj.message = httpError.error.message || httpError.statusText;
            errorObj.caught = false;
            httpError = new HttpErrorResponse({
                error: errorObj,
                headers: httpError.headers,
                status: httpError.status,
                statusText: httpError.statusText,
                url: httpError.url
            });
        }
        errorContainer.httpError = httpError;
        return throwError(httpError);
    }
    handleCaughtError(errorContainer) {
        const httpError = errorContainer.httpError;
        if (httpError && httpError.error.toDisplay) {
            httpError.error.caught = true;
            this.messageService.error(httpError.error.message, httpError.error.title);
        }
    }
    handleUncaughtError(errorContainer) {
        const httpError = errorContainer.httpError;
        if (httpError && !httpError.error.caught) {
            const translate = this.injector.get(LanguageService).translate;
            const message = translate.instant('igo.core.errors.uncaught.message');
            const title = translate.instant('igo.core.errors.uncaught.title');
            httpError.error.caught = true;
            this.messageService.error(message, title);
        }
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(i0.ɵɵinject(MessageService), i0.ɵɵinject(i0.Injector)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorInterceptor, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: MessageService }, { type: i0.Injector }]; }, null); })();

class IgoErrorModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('IgoErrorModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: IgoErrorModule,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ErrorInterceptor,
                    multi: true
                }
            ]
        };
    }
}
IgoErrorModule.ɵfac = function IgoErrorModule_Factory(t) { return new (t || IgoErrorModule)(i0.ɵɵinject(IgoErrorModule, 12)); };
IgoErrorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoErrorModule });
IgoErrorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoErrorModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: []
            }]
    }], function () { return [{ type: IgoErrorModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

class IgoCoreModule {
    constructor(matIconRegistry, domSanitizer) {
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/igo2/core/icons/mdi.svg'));
    }
    static forRoot() {
        return {
            ngModule: IgoCoreModule,
            providers: []
        };
    }
}
IgoCoreModule.ɵfac = function IgoCoreModule_Factory(t) { return new (t || IgoCoreModule)(i0.ɵɵinject(i1$2.MatIconRegistry), i0.ɵɵinject(i2.DomSanitizer)); };
IgoCoreModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoCoreModule });
IgoCoreModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            HttpClientModule,
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoCoreModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
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
    }], function () { return [{ type: i1$2.MatIconRegistry }, { type: i2.DomSanitizer }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoCoreModule, { imports: [CommonModule,
        HttpClientModule, IgoActivityModule, IgoConfigModule, IgoErrorModule, IgoLanguageModule, IgoMessageModule], exports: [IgoActivityModule,
        IgoConfigModule,
        IgoErrorModule,
        IgoLanguageModule,
        IgoMessageModule] }); })();

class IgoGestureConfig extends HammerGestureConfig {
    buildHammer(element) {
        const mc = super.buildHammer(element);
        mc.set({ touchAction: 'pan-y' });
        return mc;
    }
}
IgoGestureConfig.ɵfac = /*@__PURE__*/ function () { let ɵIgoGestureConfig_BaseFactory; return function IgoGestureConfig_Factory(t) { return (ɵIgoGestureConfig_BaseFactory || (ɵIgoGestureConfig_BaseFactory = i0.ɵɵgetInheritedFactory(IgoGestureConfig)))(t || IgoGestureConfig); }; }();
IgoGestureConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: IgoGestureConfig, factory: IgoGestureConfig.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoGestureConfig, [{
        type: Injectable
    }], null, null); })();

class IgoGestureModule {
    static forRoot() {
        return {
            ngModule: IgoGestureModule,
            providers: [
                {
                    provide: HAMMER_GESTURE_CONFIG,
                    useClass: IgoGestureConfig
                }
            ]
        };
    }
}
IgoGestureModule.ɵfac = function IgoGestureModule_Factory(t) { return new (t || IgoGestureModule)(); };
IgoGestureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoGestureModule });
IgoGestureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[HammerModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoGestureModule, [{
        type: NgModule,
        args: [{
                imports: [HammerModule],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoGestureModule, { imports: [HammerModule] }); })();

class LoggingInterceptor {
    intercept(req, next) {
        const started = Date.now();
        let ok;
        // extend server response observable with logging
        return next.handle(req).pipe(tap(
        // Succeeds when there is a response; ignore other events
        event => (ok = event instanceof HttpResponse ? 'succeeded' : ''), 
        // Operation failed; error is an HttpErrorResponse
        error => (ok = 'failed')), 
        // Log when response observable either completes or errors
        finalize(() => {
            const elapsed = Date.now() - started;
            const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
            console.log(msg);
        }));
    }
}
LoggingInterceptor.ɵfac = function LoggingInterceptor_Factory(t) { return new (t || LoggingInterceptor)(); };
LoggingInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoggingInterceptor, factory: LoggingInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoggingInterceptor, [{
        type: Injectable
    }], null, null); })();

class IgoLoggingModule {
    static forRoot() {
        return {
            ngModule: IgoLoggingModule,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: LoggingInterceptor,
                    multi: true
                }
            ]
        };
    }
}
IgoLoggingModule.ɵfac = function IgoLoggingModule_Factory(t) { return new (t || IgoLoggingModule)(); };
IgoLoggingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoLoggingModule });
IgoLoggingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoLoggingModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: []
            }]
    }], null, null); })();

let ROUTE_SERVICE_OPTIONS = new InjectionToken('routeServiceOptions');
function provideRouteServiceOptions(options) {
    return {
        provide: ROUTE_SERVICE_OPTIONS,
        useValue: options
    };
}
class RouteService {
    constructor(router, route, options) {
        this.router = router;
        this.route = route;
        const defaultOptions = {
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
    get queryParams() {
        let url = decodeURIComponent(location.search);
        if (url.includes('¢er=')) {
            url = url.replace('¢er', '&center');
            const queryParams = url
                .slice(1)
                .split('&')
                .map(p => p.split('='))
                .reduce((obj, pair) => {
                const [key, value] = pair.map(decodeURIComponent);
                obj[key] = value;
                return obj;
            }, {});
            this.router.navigate([], { queryParams });
        }
        return this.route.queryParams;
    }
}
RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(i0.ɵɵinject(i1$3.Router), i0.ɵɵinject(i1$3.ActivatedRoute), i0.ɵɵinject(ROUTE_SERVICE_OPTIONS, 8)); };
RouteService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RouteService, factory: RouteService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouteService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1$3.Router }, { type: i1$3.ActivatedRoute }, { type: undefined, decorators: [{
                type: Inject,
                args: [ROUTE_SERVICE_OPTIONS]
            }, {
                type: Optional
            }] }]; }, null); })();

class AnalyticsService {
    constructor(config) {
        this.config = config;
        this.options = this.config.getConfig('analytics') || {};
        if (this.options.provider === 'matomo') {
            this.initMatomo();
        }
    }
    get paq() {
        return (window._paq = window._paq || []);
    }
    initMatomo() {
        if (!this.options.url || !this.options.id) {
            return;
        }
        const url = this.options.url.substr(-1) === '/'
            ? this.options.url + 'matomo'
            : this.options.url;
        // this.paq.push(['trackPageView']);
        // this.paq.push(['enableLinkTracking']);
        (() => {
            this.paq.push(['setTrackerUrl', url + '.php']);
            this.paq.push(['setSiteId', this.options.id]);
            const g = document.createElement('script');
            const s = document.getElementsByTagName('script')[0];
            g.type = 'text/javascript';
            g.async = true;
            g.defer = true;
            g.src = url + '.js';
            s.parentNode.insertBefore(g, s);
        })();
    }
    setUser(user, profils) {
        if (this.options.provider === 'matomo') {
            if (!user) {
                this.paq.push(['resetUserId']);
                this.paq.push(['deleteCustomVariable', 1, 'user']);
                this.paq.push(['deleteCustomVariable', 2, 'name']);
                this.paq.push(['deleteCustomVariable', 3, 'profils']);
            }
            else {
                this.paq.push(['setUserId', user.id]);
                const name = `${user.firstName} ${user.lastName}`;
                this.paq.push(['setCustomVariable', 1, 'user', user.sourceId, 'visit']);
                this.paq.push(['setCustomVariable', 2, 'name', name, 'visit']);
                this.paq.push(['setCustomVariable', 3, 'profils', profils, 'visit']);
            }
            this.paq.push(['trackPageView']);
            this.paq.push(['enableLinkTracking']);
        }
    }
    trackSearch(term, nbResults) {
        if (this.options.provider === 'matomo') {
            this.paq.push(['trackSiteSearch', term, false, nbResults]);
        }
    }
    trackEvent(category, action, name) {
        if (this.options.provider === 'matomo') {
            this.paq.push(['trackEvent', category, action, name]);
        }
    }
}
AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(i0.ɵɵinject(ConfigService)); };
AnalyticsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AnalyticsService, factory: AnalyticsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnalyticsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ConfigService }]; }, null); })();

var Media;
(function (Media) {
    Media["Mobile"] = "mobile";
    Media["Tablet"] = "tablet";
    Media["Desktop"] = "desktop";
})(Media || (Media = {}));
var MediaOrientation;
(function (MediaOrientation) {
    MediaOrientation["Portrait"] = "portrait";
    MediaOrientation["Landscape"] = "landscape";
})(MediaOrientation || (MediaOrientation = {}));

class MediaService {
    constructor(breakpointObserver) {
        this.media$ = new BehaviorSubject(undefined);
        this.orientation$ = new BehaviorSubject(undefined);
        breakpointObserver
            .observe([Breakpoints.HandsetLandscape])
            .subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Mobile);
                this.orientation$.next(MediaOrientation.Landscape);
            }
        });
        breakpointObserver.observe([Breakpoints.HandsetPortrait]).subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Mobile);
                this.orientation$.next(MediaOrientation.Portrait);
            }
        });
        breakpointObserver.observe([Breakpoints.TabletLandscape]).subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Tablet);
                this.orientation$.next(MediaOrientation.Landscape);
            }
        });
        breakpointObserver.observe([Breakpoints.TabletPortrait]).subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Tablet);
                this.orientation$.next(MediaOrientation.Portrait);
            }
        });
        breakpointObserver.observe([Breakpoints.WebLandscape]).subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Desktop);
                this.orientation$.next(MediaOrientation.Landscape);
            }
        });
        breakpointObserver.observe([Breakpoints.WebPortrait]).subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Desktop);
                this.orientation$.next(MediaOrientation.Portrait);
            }
        });
    }
    getMedia() {
        return this.media$.value;
    }
    getOrientation() {
        return this.orientation$.value;
    }
    isTouchScreen() {
        return 'ontouchstart' in document.documentElement ? true : false;
    }
    isMobile() {
        const media = this.getMedia();
        return media === 'mobile';
    }
    isDesktop() {
        const media = this.getMedia();
        return media === 'desktop';
    }
}
MediaService.ɵfac = function MediaService_Factory(t) { return new (t || MediaService)(i0.ɵɵinject(i1$4.BreakpointObserver)); };
MediaService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MediaService, factory: MediaService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1$4.BreakpointObserver }]; }, null); })();

var StorageScope;
(function (StorageScope) {
    StorageScope["SESSION"] = "Session";
    StorageScope["LOCAL"] = "Local";
})(StorageScope || (StorageScope = {}));
var StorageServiceEventEnum;
(function (StorageServiceEventEnum) {
    StorageServiceEventEnum["ADDED"] = "Added";
    StorageServiceEventEnum["MODIFIED"] = "Modified";
    StorageServiceEventEnum["REMOVED"] = "Removed";
    StorageServiceEventEnum["CLEARED"] = "Cleared";
})(StorageServiceEventEnum || (StorageServiceEventEnum = {}));

class StorageService {
    constructor(config) {
        this.config = config;
        this.storageChange$ = new BehaviorSubject(undefined);
        this.options = this.config.getConfig('storage') || { key: 'igo' };
    }
    /**
     * Use to get the data found in storage file
     */
    get(key, scope) {
        let value;
        if (!scope || scope === StorageScope.SESSION) {
            value = sessionStorage.getItem(`${this.options.key}.${key}`);
        }
        if (scope === StorageScope.LOCAL || (!value && !scope)) {
            value = localStorage.getItem(`${this.options.key}.${key}`);
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
    }
    set(key, value, scope = StorageScope.LOCAL) {
        const previousValue = this.get(key, scope);
        if (scope === StorageScope.SESSION) {
            sessionStorage.setItem(`${this.options.key}.${key}`, JSON.stringify(value));
        }
        else {
            localStorage.setItem(`${this.options.key}.${key}`, JSON.stringify(value));
        }
        const currentValue = this.get(key, scope);
        if (currentValue !== previousValue) {
            this.storageChange$.next({
                key, scope,
                event: previousValue !== undefined ? StorageServiceEventEnum.MODIFIED : StorageServiceEventEnum.ADDED,
                previousValue,
                currentValue
            });
        }
    }
    remove(key, scope = StorageScope.LOCAL) {
        const previousValue = this.get(key, scope);
        if (scope === StorageScope.SESSION) {
            sessionStorage.removeItem(`${this.options.key}.${key}`);
        }
        else {
            localStorage.removeItem(`${this.options.key}.${key}`);
        }
        this.storageChange$.next({ key, scope, event: StorageServiceEventEnum.REMOVED, previousValue });
    }
    clear(scope = StorageScope.LOCAL) {
        if (scope === StorageScope.SESSION) {
            sessionStorage.clear();
        }
        else {
            localStorage.clear();
        }
        this.storageChange$.next({ scope, event: StorageServiceEventEnum.CLEARED });
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(i0.ɵɵinject(ConfigService)); };
StorageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ConfigService }]; }, null); })();

class NetworkService {
    constructor(messageService, injector) {
        this.messageService = messageService;
        this.injector = injector;
        this.stateChangeEventEmitter = new EventEmitter();
        this.state = {
            connection: window.navigator.onLine
        };
        this.checkNetworkState();
    }
    checkNetworkState() {
        this.onlineSubscription = fromEvent(window, 'online').subscribe(() => {
            if (this.previousMessageId) {
                this.messageService.remove(this.previousMessageId);
            }
            const translate = this.injector.get(LanguageService).translate;
            const message = translate.instant('igo.core.network.online.message');
            const title = translate.instant('igo.core.network.online.title');
            const messageObj = this.messageService.info(message, title);
            this.previousMessageId = messageObj.toastId;
            this.state.connection = true;
            this.emitEvent();
        });
        this.offlineSubscription = fromEvent(window, 'offline').subscribe(() => {
            if (this.previousMessageId) {
                this.messageService.remove(this.previousMessageId);
            }
            const translate = this.injector.get(LanguageService).translate;
            const message = translate.instant('igo.core.network.offline.message');
            const title = translate.instant('igo.core.network.offline.title');
            const messageObj = this.messageService.info(message, title);
            this.previousMessageId = messageObj.toastId;
            this.state.connection = false;
            this.emitEvent();
        });
    }
    emitEvent() {
        this.stateChangeEventEmitter.emit(this.state);
    }
    ngOnDestroy() {
        try {
            this.offlineSubscription.unsubscribe();
            this.onlineSubscription.unsubscribe();
        }
        catch (e) { }
    }
    currentState(reportState = true) {
        return reportState
            ? this.stateChangeEventEmitter.pipe(debounceTime(300), startWith(this.state))
            : this.stateChangeEventEmitter.pipe(debounceTime(300));
    }
}
NetworkService.ɵfac = function NetworkService_Factory(t) { return new (t || NetworkService)(i0.ɵɵinject(MessageService), i0.ɵɵinject(i0.Injector)); };
NetworkService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NetworkService, factory: NetworkService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NetworkService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: MessageService }, { type: i0.Injector }]; }, null); })();

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActivityInterceptor, ActivityService, AnalyticsService, CONFIG_OPTIONS, ConfigService, ErrorInterceptor, IgoActivityModule, IgoConfigModule, IgoCoreModule, IgoErrorModule, IgoGestureConfig, IgoGestureModule, IgoLanguageModule, IgoLoggingModule, IgoMessageModule, IgoMissingTranslationHandler, LanguageLoader, LanguageService, LoggingInterceptor, Media, MediaOrientation, MediaService, MessageService, MessageType, NetworkService, ROUTE_SERVICE_OPTIONS, RouteService, StorageScope, StorageService, StorageServiceEventEnum, configFactory, defaultLanguageLoader, provideConfigLoader, provideConfigOptions, provideDefaultLanguageLoader, provideLanguageLoader, provideRouteServiceOptions, version };
//# sourceMappingURL=igo2-core.js.map
