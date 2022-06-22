import * as i0 from '@angular/core';
import { Injectable, Optional, Component, Input, NgModule, Directive, EventEmitter, ChangeDetectionStrategy, Output, Self, HostListener } from '@angular/core';
import * as i3$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i3$2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i7$1 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i7 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i6 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i11 from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import * as i14 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i12 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i8 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i3$4 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import * as i6$2 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i3 from '@igo2/core';
import { IgoLanguageModule } from '@igo2/core';
import * as i4 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable, BehaviorSubject, Subject, of, merge, ReplaySubject, EMPTY, timer, combineLatest } from 'rxjs';
import { skip, first, catchError, tap, map, mergeMap, debounceTime, take, filter, buffer, debounce } from 'rxjs/operators';
import * as olStyle from 'ol/style';
import * as i1$1 from '@igo2/geo';
import { FeatureDataSource, VectorLayer, ClusterDataSource, moveToOlFeatures, FeatureMotion, IgoFeatureModule } from '@igo2/geo';
import { downloadContent, ObjectUtils, uuid, Clipboard } from '@igo2/utils';
import olPoint from 'ol/geom/Point';
import GeoJSON from 'ol/format/GeoJSON';
import Cluster from 'ol/source/Cluster';
import olVectorSource from 'ol/source/Vector';
import * as i1 from '@angular/common/http';
import * as i2 from '@igo2/auth';
import { IgoAuthModule } from '@igo2/auth';
import * as i5$1 from '@igo2/common';
import { IgoSpinnerModule, ActionStore, ActionbarMode, IgoConfirmDialogModule, IgoStopPropagationModule, IgoListModule, IgoKeyValueModule, IgoCollapsibleModule, IgoActionbarModule, getEntityTitle, IgoPanelModule, IgoFlexibleModule } from '@igo2/common';
import * as i6$1 from '@ngx-translate/core';
import * as i9$1 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i1$2 from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import * as i9 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3$3 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i6$3 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as olproj from 'ol/proj';
import * as oleasing from 'ol/easing';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i2$1 from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i1$3 from '@angular/platform-browser';

class ExportError extends Error {
}
class ExportInvalidFileError extends ExportError {
    constructor() {
        super('Invalid context');
        Object.setPrototypeOf(this, ExportInvalidFileError.prototype);
    }
}
class ExportNothingToExportError extends ExportError {
    constructor() {
        super('Nothing to export');
        Object.setPrototypeOf(this, ExportNothingToExportError.prototype);
    }
}

function handleFileExportError(error, messageService, languageService) {
    if (error instanceof ExportNothingToExportError) {
        this.handleNothingToExportError(messageService, languageService);
        return;
    }
    const translate = languageService.translate;
    const title = translate.instant('igo.context.contextImportExport.export.failed.title');
    const message = translate.instant('igo.context.contextImportExport.export.failed.text');
    messageService.error(message, title);
}
function handleFileExportSuccess(messageService, languageService) {
    const translate = languageService.translate;
    const title = translate.instant('igo.context.contextImportExport.export.success.title');
    const message = translate.instant('igo.context.contextImportExport.export.success.text');
    messageService.success(message, title);
}
function handleNothingToExportError(messageService, languageService) {
    const translate = languageService.translate;
    const title = translate.instant('igo.context.contextImportExport.export.nothing.title');
    const message = translate.instant('igo.context.contextImportExport.export.nothing.text');
    messageService.error(message, title);
}

function handleFileImportSuccess(file, context, messageService, languageService, contextService) {
    if (Object.keys(context).length <= 0) {
        handleNothingToImportError(file, messageService, languageService);
        return;
    }
    const contextTitle = computeLayerTitleFromFile(file);
    addContextToContextList(context, contextTitle, contextService);
    const translate = languageService.translate;
    const messageTitle = translate.instant('igo.context.contextImportExport.import.success.title');
    const message = translate.instant('igo.context.contextImportExport.import.success.text', {
        value: contextTitle
    });
    messageService.success(message, messageTitle);
}
function handleFileImportError(file, error, messageService, languageService, sizeMb) {
    sizeMb = sizeMb ? sizeMb : 30;
    const errMapping = {
        'Invalid file': handleInvalidFileImportError,
        'File is too large': handleSizeFileImportError,
        'Failed to read file': handleUnreadbleFileImportError
    };
    errMapping[error.message](file, error, messageService, languageService, sizeMb);
}
function handleInvalidFileImportError(file, error, messageService, languageService) {
    const translate = languageService.translate;
    const title = translate.instant('igo.context.contextImportExport.import.invalid.title');
    const message = translate.instant('igo.context.contextImportExport.import.invalid.text', {
        value: file.name,
        mimeType: file.type
    });
    messageService.error(message, title);
}
function handleSizeFileImportError(file, error, messageService, languageService, sizeMb) {
    const translate = languageService.translate;
    const title = translate.instant('igo.context.contextImportExport.import.tooLarge.title');
    const message = translate.instant('igo.context.contextImportExport.import.tooLarge.text', {
        value: file.name,
        size: sizeMb
    });
    messageService.error(message, title);
}
function handleUnreadbleFileImportError(file, error, messageService, languageService) {
    const translate = languageService.translate;
    const title = translate.instant('igo.context.contextImportExport.import.unreadable.title');
    const message = translate.instant('igo.context.contextImportExport.import.unreadable.text', {
        value: file.name
    });
    messageService.error(message, title);
}
function handleNothingToImportError(file, messageService, languageService) {
    const translate = languageService.translate;
    const title = translate.instant('igo.context.contextImportExport.import.empty.title');
    const message = translate.instant('igo.context.contextImportExport.import.empty.text', {
        value: file.name
    });
    messageService.error(message, title);
}
function addContextToContextList(context, contextTitle, contextService) {
    context.title = contextTitle;
    context.imported = true;
    contextService.contexts$.value.ours.unshift(context);
    contextService.contexts$.next(contextService.contexts$.value);
    contextService.importedContext.unshift(context);
    contextService.loadContext(context.uri);
}
function getFileExtension(file) {
    return file.name.split('.').pop().toLowerCase();
}
function computeLayerTitleFromFile(file) {
    return file.name.substr(0, file.name.lastIndexOf('.'));
}
function addImportedFeaturesToMap(olFeatures, map, layerTitle) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const stroke = new olStyle.Stroke({
        color: [r, g, b, 1],
        width: 2
    });
    const fill = new olStyle.Fill({
        color: [r, g, b, 0.4]
    });
    const sourceOptions = {
        type: 'vector',
        queryable: true
    };
    const source = new FeatureDataSource(sourceOptions);
    source.ol.addFeatures(olFeatures);
    const layer = new VectorLayer({
        title: layerTitle,
        source,
        style: new olStyle.Style({
            stroke,
            fill,
            image: new olStyle.Circle({
                radius: 5,
                stroke,
                fill
            })
        })
    });
    map.addLayer(layer);
    return layer;
}
function addImportedFeaturesStyledToMap(olFeatures, map, layerTitle, styleListService, styleService) {
    let style;
    let distance;
    if (styleListService.getStyleList(layerTitle.toString() + '.styleByAttribute')) {
        const styleByAttribute = styleListService.getStyleList(layerTitle.toString() + '.styleByAttribute');
        style = (feature) => {
            return styleService.createStyleByAttribute(feature, styleByAttribute);
        };
    }
    else if (styleListService.getStyleList(layerTitle.toString() + '.clusterStyle')) {
        const clusterParam = styleListService.getStyleList(layerTitle.toString() + '.clusterParam');
        distance = styleListService.getStyleList(layerTitle.toString() + '.distance');
        const baseStyle = styleService.createStyle(styleListService.getStyleList(layerTitle.toString() + '.clusterStyle'));
        style = (feature) => {
            return styleService.createClusterStyle(feature, clusterParam, baseStyle);
        };
    }
    else if (styleListService.getStyleList(layerTitle.toString() + '.style')) {
        style = styleService.createStyle(styleListService.getStyleList(layerTitle.toString() + '.style'));
    }
    else {
        style = styleService.createStyle(styleListService.getStyleList('default.style'));
    }
    let source;
    if (styleListService.getStyleList(layerTitle.toString() + '.clusterStyle')) {
        const sourceOptions = {
            distance,
            type: 'cluster',
            queryable: true
        };
        source = new ClusterDataSource(sourceOptions);
        source.ol.source.addFeatures(olFeatures);
    }
    else {
        const sourceOptions = {
            type: 'vector',
            queryable: true
        };
        source = new FeatureDataSource(sourceOptions);
        source.ol.addFeatures(olFeatures);
    }
    const layer = new VectorLayer({
        title: layerTitle,
        source,
        style
    });
    map.addLayer(layer);
    return layer;
}

class ImportError extends Error {
}
class ImportInvalidFileError extends ImportError {
    constructor() {
        super('Invalid file');
        Object.setPrototypeOf(this, ImportInvalidFileError.prototype);
    }
}
class ImportUnreadableFileError extends ImportError {
    constructor() {
        super('Failed to read file');
        Object.setPrototypeOf(this, ImportUnreadableFileError.prototype);
    }
}
class ImportNothingToImportError extends ImportError {
    constructor() {
        super('Nothing to import');
        Object.setPrototypeOf(this, ImportNothingToImportError.prototype);
    }
}
class ImportSizeError extends ImportError {
    constructor() {
        super('File is too large');
        Object.setPrototypeOf(this, ImportNothingToImportError.prototype);
    }
}
class ImportSRSError extends ImportError {
    constructor() {
        super('Invalid SRS definition');
        Object.setPrototypeOf(this, ImportNothingToImportError.prototype);
    }
}

class ContextImportService {
    constructor(config) {
        this.config = config;
        const configFileSizeMb = this.config.getConfig('importExport.clientSideFileSizeMaxMb');
        this.clientSideFileSizeMax =
            (configFileSizeMb ? configFileSizeMb : 30) * Math.pow(1024, 2);
    }
    import(file) {
        return this.importAsync(file);
    }
    getFileImporter(file) {
        const extension = getFileExtension(file);
        const mimeType = file.type;
        const allowedMimeTypes = [...ContextImportService.allowedMimeTypes];
        const allowedExtensions = ContextImportService.allowedExtensions;
        if (allowedMimeTypes.indexOf(mimeType) < 0 &&
            allowedExtensions.indexOf(extension) < 0) {
            return undefined;
        }
        else if (mimeType === 'application/json' ||
            extension === ContextImportService.allowedExtensions) {
            return this.importFile;
        }
        return undefined;
    }
    importAsync(file) {
        const doImport = (observer) => {
            if (file.size >= this.clientSideFileSizeMax) {
                observer.error(new ImportSizeError());
                return;
            }
            const importer = this.getFileImporter(file);
            if (importer === undefined) {
                observer.error(new ImportInvalidFileError());
                return;
            }
            importer.call(this, file, observer);
        };
        return new Observable(doImport);
    }
    importFile(file, observer) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const context = this.parseContextFromFile(file, event.target.result);
                observer.next(context);
            }
            catch (e) {
                observer.error(new ImportUnreadableFileError());
            }
            observer.complete();
        };
        reader.onerror = (evt) => {
            observer.error(new ImportUnreadableFileError());
        };
        reader.readAsText(file, 'UTF-8');
    }
    parseContextFromFile(file, data) {
        const context = JSON.parse(data);
        return context;
    }
}
ContextImportService.allowedMimeTypes = ['application/json'];
ContextImportService.allowedExtensions = 'json';
ContextImportService.ɵfac = function ContextImportService_Factory(t) { return new (t || ContextImportService)(i0.ɵɵinject(i3.ConfigService)); };
ContextImportService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContextImportService, factory: ContextImportService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextImportService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i3.ConfigService }]; }, null); })();

class ContextExportService {
    export(res) {
        return this.exportAsync(res);
    }
    exportAsync(res) {
        const doExport = (observer) => {
            const nothingToExport = this.nothingToExport(res);
            if (nothingToExport === true) {
                observer.error(new ExportNothingToExportError());
                return;
            }
            const contextJSON = JSON.stringify(res);
            downloadContent(contextJSON, 'text/json;charset=utf-8', `${res.uri}.json`);
            observer.complete();
        };
        return new Observable(doExport);
    }
    nothingToExport(res) {
        if (res.map === undefined) {
            return true;
        }
        return false;
    }
}
ContextExportService.ɵfac = function ContextExportService_Factory(t) { return new (t || ContextExportService)(); };
ContextExportService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContextExportService, factory: ContextExportService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextExportService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

var TypePermission;
(function (TypePermission) {
    TypePermission[TypePermission["null"] = 0] = "null";
    TypePermission[TypePermission["read"] = 1] = "read";
    TypePermission[TypePermission["write"] = 2] = "write";
})(TypePermission || (TypePermission = {}));
var Scope;
(function (Scope) {
    Scope[Scope["public"] = 0] = "public";
    Scope[Scope["protected"] = 1] = "protected";
    Scope[Scope["private"] = 2] = "private";
})(Scope || (Scope = {}));

class ContextService {
    constructor(http, authService, languageService, config, messageService, route) {
        this.http = http;
        this.authService = authService;
        this.languageService = languageService;
        this.config = config;
        this.messageService = messageService;
        this.route = route;
        this.context$ = new BehaviorSubject(undefined);
        this.contexts$ = new BehaviorSubject({ ours: [] });
        this.defaultContextId$ = new BehaviorSubject(undefined);
        this.editedContext$ = new BehaviorSubject(undefined);
        this.importedContext = [];
        this.toolsChanged$ = new Subject();
        this.mapViewFromRoute = {};
        this.options = Object.assign({
            basePath: 'contexts',
            contextListFile: '_contexts.json',
            defaultContextUri: '_default'
        }, this.config.getConfig('context'));
        this.baseUrl = this.options.url;
        this.readParamsFromRoute();
        if (this.authService.hasAuthService) {
            this.authService.logged$.subscribe((logged) => {
                if (logged) {
                    this.contexts$.pipe(skip(1), first()).subscribe((c) => {
                        this.handleContextsChange();
                    });
                    this.loadContexts();
                }
            });
        }
        else {
            this.loadContexts();
            this.handleContextsChange(false);
        }
    }
    get defaultContextUri() {
        return this._defaultContextUri || this.options.defaultContextUri;
    }
    set defaultContextUri(uri) {
        this._defaultContextUri = uri;
    }
    get(permissions, hidden) {
        let url = this.baseUrl + '/contexts';
        if (permissions && this.authService.authenticated) {
            url += '?permission=' + permissions.join();
            if (hidden) {
                url += '&hidden=true';
            }
        }
        return this.http.get(url);
    }
    getById(id) {
        const url = this.baseUrl + '/contexts/' + id;
        return this.http.get(url);
    }
    getDetails(id) {
        const url = `${this.baseUrl}/contexts/${id}/details`;
        return this.http.get(url).pipe(catchError((res) => {
            this.handleError(res, id);
            throw res;
        }));
    }
    getDefault() {
        const url = this.baseUrl + '/contexts/default';
        return this.http.get(url).pipe(tap((context) => {
            this.defaultContextId$.next(context.id);
        }));
    }
    getProfilByUser() {
        if (this.baseUrl) {
            const url = this.baseUrl + '/profils?';
            return this.http.get(url);
        }
        return of([]);
    }
    setDefault(id) {
        const url = this.baseUrl + '/contexts/default';
        return this.http.post(url, { defaultContextId: id });
    }
    hideContext(id) {
        const url = this.baseUrl + '/contexts/' + id + '/hide';
        return this.http.post(url, {});
    }
    showContext(id) {
        const url = this.baseUrl + '/contexts/' + id + '/show';
        return this.http.post(url, {});
    }
    delete(id, imported = false) {
        const contexts = { ours: [] };
        Object.keys(this.contexts$.value).forEach((key) => (contexts[key] = this.contexts$.value[key].filter((c) => c.id !== id)));
        if (imported) {
            this.importedContext = this.importedContext.filter((c) => c.id !== id);
            return of(this.contexts$.next(contexts));
        }
        const url = this.baseUrl + '/contexts/' + id;
        return this.http.delete(url).pipe(tap((res) => {
            this.contexts$.next(contexts);
        }));
    }
    create(context) {
        const url = this.baseUrl + '/contexts';
        return this.http.post(url, context).pipe(map((contextCreated) => {
            if (this.authService.authenticated) {
                contextCreated.permission = TypePermission[TypePermission.write];
            }
            else {
                contextCreated.permission = TypePermission[TypePermission.read];
            }
            this.contexts$.value.ours.unshift(contextCreated);
            this.contexts$.next(this.contexts$.value);
            return contextCreated;
        }));
    }
    clone(id, properties = {}) {
        const url = this.baseUrl + '/contexts/' + id + '/clone';
        return this.http.post(url, properties).pipe(map((contextCloned) => {
            contextCloned.permission = TypePermission[TypePermission.write];
            this.contexts$.value.ours.unshift(contextCloned);
            this.contexts$.next(this.contexts$.value);
            return contextCloned;
        }));
    }
    update(id, context) {
        const url = this.baseUrl + '/contexts/' + id;
        return this.http.patch(url, context);
    }
    // =================================================================
    addToolAssociation(contextId, toolId) {
        const url = `${this.baseUrl}/contexts/${contextId}/tools`;
        const association = {
            toolId
        };
        return this.http.post(url, association);
    }
    deleteToolAssociation(contextId, toolId) {
        const url = `${this.baseUrl}/contexts/${contextId}/tools/${toolId}`;
        return this.http.delete(url);
    }
    getPermissions(id) {
        const url = this.baseUrl + '/contexts/' + id + '/permissions';
        return this.http.get(url);
    }
    addPermissionAssociation(contextId, profil, type) {
        const url = `${this.baseUrl}/contexts/${contextId}/permissions`;
        const association = {
            profil,
            typePermission: type
        };
        return this.http.post(url, association).pipe(catchError((res) => {
            this.handleError(res, undefined, true);
            throw [res]; // TODO Not sure about this.
        }));
    }
    deletePermissionAssociation(contextId, permissionId) {
        const url = `${this.baseUrl}/contexts/${contextId}/permissions/${permissionId}`;
        return this.http.delete(url);
    }
    // ======================================================================
    getLocalContexts() {
        const url = this.getPath(this.options.contextListFile);
        return this.http.get(url).pipe(map((res) => {
            return { ours: res };
        }));
    }
    getLocalContext(uri) {
        const url = this.getPath(`${uri}.json`);
        return this.http.get(url).pipe(mergeMap((res) => {
            if (!res.base) {
                return of(res);
            }
            const urlBase = this.getPath(`${res.base}.json`);
            return this.http.get(urlBase).pipe(map((resBase) => {
                const resMerge = res;
                resMerge.map = ObjectUtils.mergeDeep(resBase.map, res.map);
                resMerge.layers = (resBase.layers || [])
                    .concat(res.layers || [])
                    .reverse()
                    .filter((l, index, self) => !l.id || self.findIndex((l2) => l2.id === l.id) === index)
                    .reverse();
                resMerge.toolbar = res.toolbar || resBase.toolbar;
                resMerge.message = res.message || resBase.message;
                resMerge.messages = res.messages || resBase.messages;
                resMerge.tools = (res.tools || [])
                    .concat(resBase.tools || [])
                    .filter((t, index, self) => self.findIndex((t2) => t2.name === t.name) === index);
                return resMerge;
            }), catchError((err) => {
                this.handleError(err, uri);
                throw err;
            }));
        }), catchError((err2) => {
            this.handleError(err2, uri);
            throw err2;
        }));
    }
    loadContexts(permissions, hidden) {
        let request;
        if (this.baseUrl) {
            request = this.get(permissions, hidden);
        }
        else {
            request = this.getLocalContexts();
        }
        request.subscribe((contexts) => {
            contexts.ours = this.importedContext.concat(contexts.ours);
            this.contexts$.next(contexts);
        });
    }
    loadDefaultContext() {
        const loadFct = (direct = false) => {
            if (!direct && this.baseUrl && this.authService.authenticated) {
                this.getDefault().subscribe((_context) => {
                    this.defaultContextUri = _context.uri;
                    this.addContextToList(_context);
                    this.setContext(_context);
                }, () => {
                    this.defaultContextId$.next(undefined);
                    this.loadContext(this.defaultContextUri);
                });
            }
            else {
                this.loadContext(this.defaultContextUri);
            }
        };
        if (this.route && this.route.options.contextKey) {
            this.route.queryParams.pipe(debounceTime(100)).subscribe((params) => {
                const contextParam = params[this.route.options.contextKey];
                let direct = false;
                if (contextParam) {
                    this.defaultContextUri = contextParam;
                    direct = true;
                }
                loadFct(direct);
            });
        }
        else {
            loadFct();
        }
    }
    loadContext(uri) {
        const context = this.context$.value;
        if (context && context.uri === uri) {
            return;
        }
        this.getContextByUri(uri)
            .pipe(first())
            .subscribe((_context) => {
            this.addContextToList(_context);
            this.setContext(_context);
        }, (err) => {
            if (uri !== this.options.defaultContextUri) {
                this.loadContext(this.options.defaultContextUri);
            }
        });
    }
    setContext(context) {
        this.handleContextMessage(context);
        const currentContext = this.context$.value;
        if (currentContext && context && context.id === currentContext.id) {
            if (context.map.view.keepCurrentView === undefined) {
                context.map.view.keepCurrentView = true;
            }
            this.context$.next(context);
            return;
        }
        if (!context.map) {
            context.map = { view: {} };
        }
        Object.assign(context.map.view, this.mapViewFromRoute);
        this.context$.next(context);
    }
    loadEditedContext(uri) {
        this.getContextByUri(uri).subscribe((_context) => {
            this.setEditedContext(_context);
        });
    }
    setEditedContext(context) {
        this.editedContext$.next(context);
    }
    getContextFromMap(igoMap, empty) {
        const view = igoMap.ol.getView();
        const proj = view.getProjection().getCode();
        const center = new olPoint(view.getCenter()).transform(proj, 'EPSG:4326');
        const context = {
            uri: uuid(),
            title: '',
            scope: 'private',
            map: {
                view: {
                    center: center.getCoordinates(),
                    zoom: view.getZoom(),
                    projection: proj,
                    maxZoomOnExtent: igoMap.viewController.maxZoomOnExtent
                }
            },
            layers: [],
            tools: []
        };
        let layers = [];
        if (empty === true) {
            layers = igoMap.layers$
                .getValue()
                .filter((lay) => lay.baseLayer === true ||
                lay.options.id === 'searchPointerSummaryId')
                .sort((a, b) => a.zIndex - b.zIndex);
        }
        else {
            layers = igoMap.layers$.getValue().filter(lay => !lay.id.includes('WfsWorkspaceTableDest')).sort((a, b) => a.zIndex - b.zIndex);
        }
        let i = 0;
        for (const l of layers) {
            const layer = l;
            const opts = {
                id: layer.options.id ? String(layer.options.id) : undefined,
                layerOptions: {
                    title: layer.options.title,
                    zIndex: ++i,
                    visible: layer.visible
                },
                sourceOptions: {
                    type: layer.dataSource.options.type,
                    params: layer.dataSource.options.params,
                    url: layer.dataSource.options.url,
                    queryable: layer.queryable
                }
            };
            if (opts.sourceOptions.type) {
                context.layers.push(opts);
            }
        }
        context.tools = this.tools.map((tool) => {
            return { id: String(tool.id), global: tool.global };
        });
        return context;
    }
    getContextFromLayers(igoMap, layers, name) {
        const currentContext = this.context$.getValue();
        const view = igoMap.ol.getView();
        const proj = view.getProjection().getCode();
        const center = new olPoint(view.getCenter()).transform(proj, 'EPSG:4326');
        const context = {
            uri: name,
            title: name,
            map: {
                view: {
                    center: center.getCoordinates(),
                    zoom: view.getZoom(),
                    projection: proj
                }
            },
            layers: [],
            toolbar: [],
            tools: [],
            extraFeatures: []
        };
        const currentLayers = igoMap.layers$.getValue();
        context.layers = currentLayers
            .filter((l) => l.baseLayer)
            .map((l) => {
            return {
                baseLayer: true,
                sourceOptions: l.options.sourceOptions,
                title: l.options.title,
                visible: l.visible
            };
        });
        layers.forEach((layer) => {
            const layerFound = currentContext.layers.find((contextLayer) => layer.id === contextLayer.source.id && !contextLayer.baseLayer);
            if (layerFound) {
                let layerStyle = layerFound[`style`];
                if (layerFound[`styleByAttribute`]) {
                    layerStyle = undefined;
                }
                else if (layerFound[`clusterBaseStyle`]) {
                    layerStyle = undefined;
                    delete layerFound.sourceOptions[`source`];
                    delete layerFound.sourceOptions[`format`];
                }
                const opts = {
                    baseLayer: layerFound.baseLayer,
                    title: layer.options.title,
                    zIndex: layer.zIndex,
                    styleByAttribute: layerFound[`styleByAttribute`],
                    clusterBaseStyle: layerFound[`clusterBaseStyle`],
                    style: layerStyle,
                    clusterParam: layerFound[`clusterParam`],
                    visible: layer.visible,
                    opacity: layer.opacity,
                    sourceOptions: layerFound.sourceOptions
                };
                context.layers.push(opts);
            }
            else {
                if (!(layer.ol.getSource() instanceof olVectorSource)) {
                    const catalogLayer = layer.options;
                    catalogLayer.zIndex = layer.zIndex;
                    delete catalogLayer.source;
                    context.layers.push(catalogLayer);
                }
                else {
                    let features;
                    const writer = new GeoJSON();
                    if (layer.ol.getSource() instanceof Cluster) {
                        const clusterSource = layer.ol.getSource();
                        features = writer.writeFeatures(clusterSource.getFeatures(), {
                            dataProjection: 'EPSG:4326',
                            featureProjection: 'EPSG:3857'
                        });
                    }
                    else {
                        const source = layer.ol.getSource();
                        features = writer.writeFeatures(source.getFeatures(), {
                            dataProjection: 'EPSG:4326',
                            featureProjection: 'EPSG:3857'
                        });
                    }
                    features = JSON.parse(features);
                    features.name = layer.options.title;
                    context.extraFeatures.push(features);
                }
            }
        });
        context.toolbar = this.toolbar;
        context.tools = this.tools;
        return context;
    }
    setTools(tools) {
        this.tools = tools;
    }
    setToolbar(toolbar) {
        this.toolbar = toolbar;
    }
    handleContextMessage(context) {
        if (this.context$.value && context.uri && this.context$.value.uri !== context.uri) {
            this.messageService.removeAllAreNotError();
        }
        context.messages = context.messages ? context.messages : [];
        context.messages.push(context.message);
        context.messages.map(message => {
            if (message) {
                message.title = message.title
                    ? this.languageService.translate.instant(message.title)
                    : undefined;
                message.text = message.text
                    ? this.languageService.translate.instant(message.text)
                    : undefined;
                this.messageService.message(message);
            }
        });
    }
    getContextByUri(uri) {
        if (this.baseUrl) {
            let contextToLoad;
            for (const key of Object.keys(this.contexts$.value)) {
                contextToLoad = this.contexts$.value[key].find((c) => {
                    return c.uri === uri;
                });
                if (contextToLoad) {
                    break;
                }
            }
            if (contextToLoad && contextToLoad.imported) {
                return of(contextToLoad);
            }
            // TODO : use always id or uri
            const id = contextToLoad ? contextToLoad.id : uri;
            return this.getDetails(id);
        }
        const importedContext = this.contexts$.value.ours.find((currentContext) => {
            return currentContext.uri === uri && currentContext.imported === true;
        });
        if (importedContext) {
            return of(importedContext);
        }
        else {
            return this.getLocalContext(uri);
        }
    }
    getContextLayers(igoMap) {
        const layers = [];
        const mapLayers = igoMap.layers$.getValue();
        mapLayers.forEach((layer) => {
            if (!layer.baseLayer && layer.options.id !== 'searchPointerSummaryId') {
                layers.push(layer);
            }
        });
        return layers;
    }
    readParamsFromRoute() {
        if (!this.route) {
            return;
        }
        this.route.queryParams.subscribe((params) => {
            const centerKey = this.route.options.centerKey;
            if (centerKey && params[centerKey]) {
                const centerParams = params[centerKey];
                this.mapViewFromRoute.center = centerParams.split(',').map(Number);
                this.mapViewFromRoute.geolocate = false;
            }
            const projectionKey = this.route.options.projectionKey;
            if (projectionKey && params[projectionKey]) {
                const projectionParam = params[projectionKey];
                this.mapViewFromRoute.projection = projectionParam;
            }
            const zoomKey = this.route.options.zoomKey;
            if (zoomKey && params[zoomKey]) {
                const zoomParam = params[zoomKey];
                this.mapViewFromRoute.zoom = Number(zoomParam);
            }
        });
    }
    getPath(file) {
        const basePath = this.options.basePath.replace(/\/$/, '');
        return `${basePath}/${file}`;
    }
    handleError(error, uri, permissionError) {
        const context = this.contexts$.value.ours.find((obj) => obj.uri === uri);
        const titleContext = context ? context.title : uri;
        error.error.title = this.languageService.translate.instant('igo.context.contextManager.invalid.title');
        error.error.message = this.languageService.translate.instant('igo.context.contextManager.invalid.text', { value: titleContext });
        error.error.toDisplay = true;
        if (permissionError) {
            error.error.title = this.languageService.translate.instant('igo.context.contextManager.errors.addPermissionTitle');
            error.error.message = this.languageService.translate.instant('igo.context.contextManager.errors.addPermission');
        }
        this.messageService.error(error.error.message, error.error.title);
    }
    handleContextsChange(keepCurrentContext = true) {
        const context = this.context$.value;
        const editedContext = this.editedContext$.value;
        if (!context || context.uri === this.options.defaultContextUri) {
            keepCurrentContext = false;
        }
        if (!keepCurrentContext || !this.findContext(context)) {
            this.defaultContextUri = undefined;
            this.loadDefaultContext();
        }
        else {
            this.getContextByUri(context.uri)
                .pipe(first())
                .subscribe((newContext) => {
                this.toolsChanged$.next(newContext);
            });
            if (this.baseUrl && this.authService.authenticated) {
                this.getDefault().subscribe();
            }
        }
        const editedFound = this.findContext(editedContext);
        if (!editedFound || editedFound.permission !== 'write') {
            this.setEditedContext(undefined);
        }
    }
    addContextToList(context) {
        const contextFound = this.findContext(context);
        if (!contextFound) {
            const contextSimplifie = {
                id: context.id,
                uri: context.uri,
                title: context.title,
                scope: context.scope,
                permission: TypePermission[TypePermission.read]
            };
            if (this.contexts$.value && this.contexts$.value.public) {
                this.contexts$.value.public.push(contextSimplifie);
                this.contexts$.next(this.contexts$.value);
            }
        }
    }
    findContext(context) {
        if (!context) {
            return false;
        }
        const contexts = this.contexts$.value;
        let found;
        for (const key of Object.keys(contexts)) {
            const value = contexts[key];
            found = value.find((c) => (context.id && c.id === context.id) ||
                (context.uri && c.uri === context.uri));
            if (found) {
                break;
            }
        }
        return found;
    }
}
ContextService.ɵfac = function ContextService_Factory(t) { return new (t || ContextService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.LanguageService), i0.ɵɵinject(i3.ConfigService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i3.RouteService, 8)); };
ContextService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContextService, factory: ContextService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.AuthService }, { type: i3.LanguageService }, { type: i3.ConfigService }, { type: i3.MessageService }, { type: i3.RouteService, decorators: [{
                type: Optional
            }] }]; }, null); })();

const _c0$2 = function (a0) { return { size: a0 }; };
function ContextImportExportComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵelementStart(3, "button", 7);
    i0.ɵɵlistener("click", function ContextImportExportComponent_div_8_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r4); const _r2 = i0.ɵɵreference(10); return _r2.click(); });
    i0.ɵɵpipe(4, "async");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "igo-spinner", 8);
    i0.ɵɵpipe(8, "async");
    i0.ɵɵelementStart(9, "input", 9, 10);
    i0.ɵɵlistener("click", function ContextImportExportComponent_div_8_Template_input_click_9_listener() { i0.ɵɵrestoreView(_r4); const _r2 = i0.ɵɵreference(10); return _r2.value = null; })("change", function ContextImportExportComponent_div_8_Template_input_change_9_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.importFiles($event.target.files); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "section", 11);
    i0.ɵɵelementStart(12, "h4");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "ul");
    i0.ɵɵelementStart(16, "li");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(4, 7, ctx_r0.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 9, "igo.geo.importExportForm.importButton"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("shown", i0.ɵɵpipeBind1(8, 11, ctx_r0.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", "none");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 13, "igo.geo.importExportForm.importClarifications"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 15, "igo.geo.importExportForm.importSizeMax", i0.ɵɵpureFunction1(18, _c0$2, ctx_r0.fileSizeMb)));
} }
function ContextImportExportComponent_form_9_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", layer_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(layer_r9.title);
} }
function ContextImportExportComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 12);
    i0.ɵɵelementStart(1, "div", 13);
    i0.ɵɵelementStart(2, "mat-form-field", 14);
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "input", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 13);
    i0.ɵɵelementStart(8, "mat-form-field");
    i0.ɵɵelementStart(9, "mat-label");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-select", 16);
    i0.ɵɵelementStart(13, "mat-option", 17, 18);
    i0.ɵɵlistener("click", function ContextImportExportComponent_form_9_Template_mat_option_click_13_listener() { i0.ɵɵrestoreView(_r11); const _r7 = i0.ɵɵreference(14); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.selectAll(_r7); });
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "mat-divider");
    i0.ɵɵtemplate(18, ContextImportExportComponent_form_9_mat_option_18_Template, 2, 2, "mat-option", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 6);
    i0.ɵɵelementStart(20, "button", 7);
    i0.ɵɵlistener("click", function ContextImportExportComponent_form_9_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.handleExportFormSubmit(ctx_r12.form.value); });
    i0.ɵɵpipe(21, "async");
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "igo-spinner", 8);
    i0.ɵɵpipe(25, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 9, "igo.context.contextImportExport.export.exportContextName"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 11, "igo.context.contextImportExport.export.exportPlaceHolder"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 13, "igo.context.contextImportExport.export.exportSelectAll"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.userControlledLayerList);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.form.valid || i0.ɵɵpipeBind1(21, 15, ctx_r1.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(23, 17, "igo.geo.importExportForm.exportButton"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("shown", i0.ɵɵpipeBind1(25, 19, ctx_r1.loading$));
} }
class ContextImportExportComponent {
    constructor(contextImportService, contextExportService, languageService, messageService, formBuilder, config, contextService) {
        this.contextImportService = contextImportService;
        this.contextExportService = contextExportService;
        this.languageService = languageService;
        this.messageService = messageService;
        this.formBuilder = formBuilder;
        this.config = config;
        this.contextService = contextService;
        this.inputProj = 'EPSG:4326';
        this.loading$ = new BehaviorSubject(false);
        this.forceNaming = false;
        this.activeImportExport = 'import';
        this.buildForm();
    }
    ngOnInit() {
        const configFileSizeMb = this.config.getConfig('importExport.clientSideFileSizeMaxMb');
        this.clientSideFileSizeMax =
            (configFileSizeMb ? configFileSizeMb : 30) * Math.pow(1024, 2);
        this.fileSizeMb = this.clientSideFileSizeMax / Math.pow(1024, 2);
        this.layerList = this.contextService.getContextLayers(this.map);
        this.userControlledLayerList = this.layerList.filter(layer => layer.showInLayerList);
    }
    importFiles(files) {
        this.loading$.next(true);
        for (const file of files) {
            this.contextImportService.import(file).pipe(take(1)).subscribe((context) => this.onFileImportSuccess(file, context), (error) => this.onFileImportError(file, error), () => {
                this.loading$.next(false);
            });
        }
    }
    handleExportFormSubmit(contextOptions) {
        this.loading$.next(true);
        this.res = this.contextService.getContextFromLayers(this.map, contextOptions.layers, contextOptions.name);
        this.res.imported = true;
        this.contextExportService.export(this.res).pipe(take(1)).subscribe(() => { }, (error) => this.onFileExportError(error), () => {
            this.onFileExportSuccess();
            this.loading$.next(false);
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            layers: ['', [Validators.required]],
            name: ['', [Validators.required]]
        });
    }
    onFileImportSuccess(file, context) {
        handleFileImportSuccess(file, context, this.messageService, this.languageService, this.contextService);
    }
    onFileImportError(file, error) {
        this.loading$.next(false);
        handleFileImportError(file, error, this.messageService, this.languageService, this.fileSizeMb);
    }
    onFileExportError(error) {
        this.loading$.next(false);
        handleFileExportError(error, this.messageService, this.languageService);
    }
    onFileExportSuccess() {
        handleFileExportSuccess(this.messageService, this.languageService);
    }
    selectAll(e) {
        if (e._selected) {
            this.form.controls.layers.setValue(this.userControlledLayerList);
            e._selected = true;
        }
        if (e._selected === false) {
            this.form.controls.layers.setValue([]);
        }
    }
    onImportExportChange(event) {
        this.activeImportExport = event.value;
    }
}
ContextImportExportComponent.ɵfac = function ContextImportExportComponent_Factory(t) { return new (t || ContextImportExportComponent)(i0.ɵɵdirectiveInject(ContextImportService), i0.ɵɵdirectiveInject(ContextExportService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i3.ConfigService), i0.ɵɵdirectiveInject(ContextService)); };
ContextImportExportComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextImportExportComponent, selectors: [["igo-context-import-export"]], inputs: { map: "map" }, decls: 10, vars: 11, consts: [[1, "import-export-toggle", "mat-typography"], [3, "value", "change"], [3, "value"], [4, "ngIf"], ["class", "igo-form", 3, "formGroup", 4, "ngIf"], [1, "igo-form"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "button", 3, "disabled", "click"], [3, "shown"], ["type", "file", 3, "click", "change"], ["fileInput", ""], [1, "mat-typography"], [1, "igo-form", 3, "formGroup"], [1, "igo-input-container"], [1, "example-full-width"], ["formControlName", "name", "matInput", "", 3, "value"], ["formControlName", "layers", "multiple", ""], [3, "value", "click"], ["e", ""], [3, "value", 4, "ngFor", "ngForOf"]], template: function ContextImportExportComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-button-toggle-group", 1);
        i0.ɵɵlistener("change", function ContextImportExportComponent_Template_mat_button_toggle_group_change_1_listener($event) { return ctx.onImportExportChange($event); });
        i0.ɵɵelementStart(2, "mat-button-toggle", 2);
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 2);
        i0.ɵɵtext(6);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, ContextImportExportComponent_div_8_Template, 19, 20, "div", 3);
        i0.ɵɵtemplate(9, ContextImportExportComponent_form_9_Template, 26, 21, "form", 4);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.activeImportExport);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", "import");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 7, "igo.geo.importExportForm.importTabTitle"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", "export");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 9, "igo.geo.importExportForm.exportTabTitle"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.activeImportExport === "import");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.activeImportExport === "export");
    } }, directives: [i6.MatButtonToggleGroup, i6.MatButtonToggle, i7.NgIf, i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.NgForm, i5.MatButton, i5$1.SpinnerComponent, i4.FormGroupDirective, i3$1.MatFormField, i3$1.MatLabel, i4.DefaultValueAccessor, i3$2.MatInput, i4.NgControlStatus, i4.FormControlName, i12.MatSelect, i11.MatOption, i14.MatDivider, i7.NgForOf], pipes: [i6$1.TranslatePipe, i7.AsyncPipe], styles: [".import-export-toggle[_ngcontent-%COMP%]{padding:10px;text-align:center}.import-export-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{width:100%}.import-export-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:50%}.igo-input-container[_ngcontent-%COMP%]{padding:10px}.igo-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}h4[_ngcontent-%COMP%]{padding:0 5px}.igo-form[_ngcontent-%COMP%]{padding:15px 5px}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center;padding-top:10px}igo-spinner[_ngcontent-%COMP%]{position:absolute;padding-left:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextImportExportComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-import-export',
                templateUrl: './context-import-export.component.html',
                styleUrls: ['./context-import-export.component.scss']
            }]
    }], function () { return [{ type: ContextImportService }, { type: ContextExportService }, { type: i3.LanguageService }, { type: i3.MessageService }, { type: i4.FormBuilder }, { type: i3.ConfigService }, { type: ContextService }]; }, { map: [{
            type: Input
        }] }); })();

class IgoContextImportExportModule {
    static forRoot() {
        return {
            ngModule: IgoContextImportExportModule
        };
    }
}
IgoContextImportExportModule.ɵfac = function IgoContextImportExportModule_Factory(t) { return new (t || IgoContextImportExportModule)(); };
IgoContextImportExportModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoContextImportExportModule });
IgoContextImportExportModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatDividerModule,
            MatTabsModule,
            MatSelectModule,
            MatOptionModule,
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            IgoLanguageModule,
            IgoSpinnerModule,
            MatTooltipModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoContextImportExportModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatDividerModule,
                    MatTabsModule,
                    MatSelectModule,
                    MatOptionModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatCheckboxModule,
                    IgoLanguageModule,
                    IgoSpinnerModule,
                    MatTooltipModule,
                ],
                exports: [
                    ContextImportExportComponent
                ],
                declarations: [
                    ContextImportExportComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoContextImportExportModule, { declarations: [ContextImportExportComponent], imports: [FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatTabsModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        IgoLanguageModule,
        IgoSpinnerModule,
        MatTooltipModule], exports: [ContextImportExportComponent] }); })();

class MapContextDirective {
    constructor(component, contextService, mediaService) {
        this.contextService = contextService;
        this.mediaService = mediaService;
        this.component = component;
    }
    get map() {
        return this.component.map;
    }
    ngOnInit() {
        this.context$$ = this.contextService.context$
            .pipe(filter(context => context !== undefined))
            .subscribe(context => this.handleContextChange(context));
    }
    ngOnDestroy() {
        this.context$$.unsubscribe();
    }
    handleContextChange(context) {
        if (context.map === undefined) {
            return;
        }
        // This creates a new ol.Map when the context changes. Doing that
        // allows the print tool to work properly even when the map's canvas
        // has been tainted (CORS) with the layers of another context. This could
        // have some side effects such as unbinding all listeners on the first map.
        // A better solution would be to create a new map (preview) before
        // printing and avoid the tainted canvas issue. This will come later so
        // this snippet of code is kept here in case it takes too long becomes
        // an issue
        // const target = this.component.map.ol.getTarget();
        // this.component.map.ol.setTarget(undefined);
        // this.component.map.init();
        // this.component.map.ol.setTarget(target);
        const viewContext = context.map.view;
        if (!this.component.view || viewContext.keepCurrentView !== true) {
            this.component.view = viewContext;
        }
        const controlsContext = context.map.controls;
        if (!this.component.controls && controlsContext) {
            if (this.mediaService.isMobile()) {
                if (typeof (controlsContext.scaleLine) !== 'boolean') {
                    const scaleLineOption = controlsContext.scaleLine;
                    if (!scaleLineOption.minWidth) {
                        scaleLineOption.minWidth = Math.min(64, scaleLineOption.minWidth);
                        controlsContext.scaleLine = scaleLineOption;
                    }
                }
            }
            this.component.controls = controlsContext;
        }
    }
}
MapContextDirective.ɵfac = function MapContextDirective_Factory(t) { return new (t || MapContextDirective)(i0.ɵɵdirectiveInject(i1$1.MapBrowserComponent), i0.ɵɵdirectiveInject(ContextService), i0.ɵɵdirectiveInject(i3.MediaService)); };
MapContextDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MapContextDirective, selectors: [["", "igoMapContext", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapContextDirective, [{
        type: Directive,
        args: [{
                selector: '[igoMapContext]'
            }]
    }], function () { return [{ type: i1$1.MapBrowserComponent }, { type: ContextService }, { type: i3.MediaService }]; }, null); })();

class LayerContextDirective {
    constructor(component, contextService, layerService, configService, styleListService, styleService, route) {
        this.component = component;
        this.contextService = contextService;
        this.layerService = layerService;
        this.configService = configService;
        this.styleListService = styleListService;
        this.styleService = styleService;
        this.route = route;
        this.contextLayers = [];
        this.removeLayersOnContextChange = true;
    }
    get map() {
        return this.component.map;
    }
    ngOnInit() {
        this.context$$ = this.contextService.context$
            .pipe(filter((context) => context !== undefined))
            .subscribe((context) => this.handleContextChange(context));
        if (this.route &&
            this.route.options.visibleOnLayersKey &&
            this.route.options.visibleOffLayersKey &&
            this.route.options.contextKey) {
            const queryParams$$ = this.route.queryParams.subscribe((params) => {
                if (Object.keys(params).length > 0) {
                    this.queryParams = params;
                    queryParams$$.unsubscribe();
                }
            });
        }
    }
    ngOnDestroy() {
        this.context$$.unsubscribe();
    }
    handleContextChange(context) {
        if (context.layers === undefined) {
            return;
        }
        if (this.removeLayersOnContextChange === true) {
            this.map.removeAllLayers();
        }
        else {
            this.map.removeLayers(this.contextLayers);
        }
        this.contextLayers = [];
        const layersAndIndex$ = merge(...context.layers.map((layerOptions, index) => {
            return this.layerService.createAsyncLayer(layerOptions, context.uri);
        }));
        layersAndIndex$
            .pipe(buffer(layersAndIndex$.pipe(debounceTime(500))))
            .subscribe((layers) => {
            layers = layers
                .filter((layer) => layer !== undefined)
                .map((layer) => {
                layer.visible = this.computeLayerVisibilityFromUrl(layer);
                layer.zIndex = layer.zIndex;
                return layer;
            });
            this.contextLayers.concat(layers);
            this.map.addLayers(layers);
            if (context.extraFeatures) {
                context.extraFeatures.forEach((featureCollection) => {
                    const format = new GeoJSON();
                    const title = featureCollection.name;
                    featureCollection = JSON.stringify(featureCollection);
                    featureCollection = format.readFeatures(featureCollection, {
                        dataProjection: 'EPSG:4326',
                        featureProjection: 'EPSG:3857'
                    });
                    if (!this.configService.getConfig('importWithStyle')) {
                        addImportedFeaturesToMap(featureCollection, this.map, title);
                    }
                    else {
                        addImportedFeaturesStyledToMap(featureCollection, this.map, title, this.styleListService, this.styleService);
                    }
                });
            }
        });
    }
    computeLayerVisibilityFromUrl(layer) {
        const params = this.queryParams;
        const currentContext = this.contextService.context$.value.uri;
        const currentLayerid = layer.id;
        let visible = layer.visible;
        if (!params || !currentLayerid) {
            return visible;
        }
        const contextParams = params[this.route.options.contextKey];
        if (contextParams === currentContext || !contextParams) {
            let visibleOnLayersParams = '';
            let visibleOffLayersParams = '';
            let visiblelayers = [];
            let invisiblelayers = [];
            if (this.route.options.visibleOnLayersKey &&
                params[this.route.options.visibleOnLayersKey]) {
                visibleOnLayersParams =
                    params[this.route.options.visibleOnLayersKey];
            }
            if (this.route.options.visibleOffLayersKey &&
                params[this.route.options.visibleOffLayersKey]) {
                visibleOffLayersParams =
                    params[this.route.options.visibleOffLayersKey];
            }
            /* This order is important because to control whichever
             the order of * param. First whe open and close everything.*/
            if (visibleOnLayersParams === '*') {
                visible = true;
            }
            if (visibleOffLayersParams === '*') {
                visible = false;
            }
            // After, managing named layer by id (context.json OR id from datasource)
            visiblelayers = visibleOnLayersParams.split(',');
            invisiblelayers = visibleOffLayersParams.split(',');
            if (visiblelayers.indexOf(currentLayerid) > -1 || visiblelayers.indexOf(currentLayerid.toString()) > -1) {
                visible = true;
            }
            if (invisiblelayers.indexOf(currentLayerid) > -1 || invisiblelayers.indexOf(currentLayerid.toString()) > -1) {
                visible = false;
            }
        }
        return visible;
    }
}
LayerContextDirective.ɵfac = function LayerContextDirective_Factory(t) { return new (t || LayerContextDirective)(i0.ɵɵdirectiveInject(i1$1.MapBrowserComponent), i0.ɵɵdirectiveInject(ContextService), i0.ɵɵdirectiveInject(i1$1.LayerService), i0.ɵɵdirectiveInject(i3.ConfigService), i0.ɵɵdirectiveInject(i1$1.StyleListService), i0.ɵɵdirectiveInject(i1$1.StyleService), i0.ɵɵdirectiveInject(i3.RouteService, 8)); };
LayerContextDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LayerContextDirective, selectors: [["", "igoLayerContext", ""]], inputs: { removeLayersOnContextChange: "removeLayersOnContextChange" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerContextDirective, [{
        type: Directive,
        args: [{
                selector: '[igoLayerContext]'
            }]
    }], function () { return [{ type: i1$1.MapBrowserComponent }, { type: ContextService }, { type: i1$1.LayerService }, { type: i3.ConfigService }, { type: i1$1.StyleListService }, { type: i1$1.StyleService }, { type: i3.RouteService, decorators: [{
                type: Optional
            }] }]; }, { removeLayersOnContextChange: [{
            type: Input
        }] }); })();

var ContextListControlsEnum;
(function (ContextListControlsEnum) {
    ContextListControlsEnum["always"] = "always";
    ContextListControlsEnum["never"] = "never";
    ContextListControlsEnum["default"] = "default";
})(ContextListControlsEnum || (ContextListControlsEnum = {}));

class BookmarkDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
BookmarkDialogComponent.ɵfac = function BookmarkDialogComponent_Factory(t) { return new (t || BookmarkDialogComponent)(i0.ɵɵdirectiveInject(i1$2.MatDialogRef)); };
BookmarkDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BookmarkDialogComponent, selectors: [["igo-bookmark-dialog"]], decls: 14, vars: 14, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], ["matInput", "", "required", "", "autocomplete", "off", "maxlength", "128", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-button", "", 3, "click"]], template: function BookmarkDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelementStart(5, "input", 2);
        i0.ɵɵlistener("ngModelChange", function BookmarkDialogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.title = $event; });
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵlistener("click", function BookmarkDialogComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(ctx.title); });
        i0.ɵɵtext(9);
        i0.ɵɵpipe(10, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 5);
        i0.ɵɵlistener("click", function BookmarkDialogComponent_Template_button_click_11_listener() { return ctx.dialogRef.close(false); });
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 6, "igo.context.bookmarkButton.dialog.title"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(6, 8, "igo.context.bookmarkButton.dialog.placeholder"))("ngModel", ctx.title);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 10, "igo.common.confirmDialog.confirmBtn"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 12, "igo.common.confirmDialog.cancelBtn"), " ");
    } }, directives: [i1$2.MatDialogTitle, i1$2.MatDialogContent, i3$1.MatFormField, i3$2.MatInput, i4.DefaultValueAccessor, i4.RequiredValidator, i4.MaxLengthValidator, i4.NgControlStatus, i4.NgModel, i1$2.MatDialogActions, i5.MatButton], pipes: [i6$1.TranslatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BookmarkDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-bookmark-dialog',
                templateUrl: './bookmark-dialog.component.html'
            }]
    }], function () { return [{ type: i1$2.MatDialogRef }]; }, null); })();

function ContextItemComponent_button_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-icon", 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r2.context.icon ? ctx_r2.context.icon : ctx_r2.context.scope === "public" ? "earth" : "star");
} }
function ContextItemComponent_button_1_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 8);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.context.iconImage, i0.ɵɵsanitizeUrl);
} }
function ContextItemComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function ContextItemComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.favoriteClick(ctx_r4.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtemplate(2, ContextItemComponent_button_1_mat_icon_2_Template, 1, 1, "mat-icon", 5);
    i0.ɵɵtemplate(3, ContextItemComponent_button_1_img_3_Template, 1, 1, "img", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r0.auth.authenticated ? i0.ɵɵpipeBind1(1, 4, "igo.context.contextManager.favorite") : "")("color", ctx_r0.default ? "primary" : "default");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.context.iconImage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.context.iconImage);
} }
function ContextItemComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.save.emit(ctx_r14.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.save"))("color", ctx_r6.color);
} }
function ContextItemComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.managePermissions.emit(ctx_r16.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.managePermissions"))("color", ctx_r8.color);
} }
function ContextItemComponent_div_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.clone.emit(ctx_r18.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.clone"))("color", ctx_r9.color);
} }
function ContextItemComponent_div_4_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.edit.emit(ctx_r20.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r10.color)("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.edit"));
} }
function ContextItemComponent_div_4_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.hide.emit(ctx_r22.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r11.color)("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.hide"));
} }
function ContextItemComponent_div_4_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.show.emit(ctx_r24.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r12.color)("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.show"));
} }
function ContextItemComponent_div_4_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.delete.emit(ctx_r26.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.contextManager.delete"));
} }
function ContextItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, ContextItemComponent_div_4_button_1_Template, 3, 4, "button", 10);
    i0.ɵɵelementStart(2, "div", 11, 12);
    i0.ɵɵtemplate(4, ContextItemComponent_div_4_button_4_Template, 3, 4, "button", 13);
    i0.ɵɵtemplate(5, ContextItemComponent_div_4_button_5_Template, 3, 4, "button", 14);
    i0.ɵɵtemplate(6, ContextItemComponent_div_4_button_6_Template, 3, 4, "button", 15);
    i0.ɵɵtemplate(7, ContextItemComponent_div_4_button_7_Template, 3, 4, "button", 16);
    i0.ɵɵtemplate(8, ContextItemComponent_div_4_button_8_Template, 3, 4, "button", 16);
    i0.ɵɵtemplate(9, ContextItemComponent_div_4_button_9_Template, 3, 3, "button", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 18);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.collapsed = !ctx_r28.collapsed; });
    i0.ɵɵelement(11, "mat-icon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.collapsed && ctx_r1.selected && (ctx_r1.context.permission === ctx_r1.typePermission[ctx_r1.typePermission.write] || ctx_r1.context.imported));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.canShare && !ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.context.permission === ctx_r1.typePermission[ctx_r1.typePermission.write] && !ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.context.hidden && !ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.context.hidden && !ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.context.permission === ctx_r1.typePermission[ctx_r1.typePermission.write] || ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", ctx_r1.color)("target", _r7)("collapsed", ctx_r1.collapsed);
} }
const _c0$1 = function (a0) { return { "mat-list-item-light": a0 }; };
class ContextItemComponent {
    constructor(auth, storageService) {
        this.auth = auth;
        this.storageService = storageService;
        this.typePermission = TypePermission;
        this.color = 'primary';
        this.collapsed = true;
        this._default = false;
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.save = new EventEmitter();
        this.clone = new EventEmitter();
        this.hide = new EventEmitter();
        this.show = new EventEmitter();
        this.favorite = new EventEmitter();
        this.managePermissions = new EventEmitter();
        this.manageTools = new EventEmitter();
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    get default() {
        return this._default;
    }
    set default(value) {
        this._default = value;
    }
    get hidden() {
        return this.context.hidden;
    }
    get canShare() {
        return this.storageService.get('canShare') === true;
    }
    favoriteClick(context) {
        if (this.auth.authenticated) {
            this.favorite.emit(context);
        }
    }
}
ContextItemComponent.ɵfac = function ContextItemComponent_Factory(t) { return new (t || ContextItemComponent)(i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.StorageService)); };
ContextItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextItemComponent, selectors: [["igo-context-item"]], inputs: { context: "context", default: "default", selected: "selected" }, outputs: { edit: "edit", delete: "delete", save: "save", clone: "clone", hide: "hide", show: "show", favorite: "favorite", managePermissions: "managePermissions", manageTools: "manageTools" }, decls: 5, vars: 6, consts: [[1, "mat-list-item", 3, "ngClass"], ["mat-list-avatar", "", "mat-icon-button", "", "igoStopPropagation", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["matLine", ""], ["igoStopPropagation", "", "class", "igo-actions-container", 4, "ngIf"], ["mat-list-avatar", "", "mat-icon-button", "", "igoStopPropagation", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], [3, "svgIcon", 4, "ngIf"], [3, "src", 4, "ngIf"], [3, "svgIcon"], [3, "src"], ["igoStopPropagation", "", 1, "igo-actions-container"], ["class", "save-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], [1, "igo-actions-expand-container"], ["actions", ""], ["mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["class", "clone-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["class", "edit-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click", 4, "ngIf"], ["class", "hide-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click", 4, "ngIf"], ["class", "delete-button", "mat-icon-button", "", "color", "warn", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "igoCollapse", "", 1, "actions-button", 3, "color", "target", "collapsed", "click"], ["svgIcon", "dots-horizontal"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "save-button", 3, "matTooltip", "color", "click"], ["svgIcon", "content-save"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], ["svgIcon", "account-arrow-right"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "clone-button", 3, "matTooltip", "color", "click"], ["svgIcon", "content-copy"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "edit-button", 3, "color", "matTooltip", "click"], ["svgIcon", "pencil"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "hide-button", 3, "color", "matTooltip", "click"], ["svgIcon", "eye"], ["svgIcon", "eye-off"], ["mat-icon-button", "", "color", "warn", "matTooltipShowDelay", "500", 1, "delete-button", 3, "matTooltip", "click"], ["svgIcon", "delete"]], template: function ContextItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list-item", 0);
        i0.ɵɵtemplate(1, ContextItemComponent_button_1_Template, 4, 6, "button", 1);
        i0.ɵɵelementStart(2, "h4", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, ContextItemComponent_div_4_Template, 12, 10, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0$1, ctx.hidden));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.context.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated);
    } }, directives: [i3$3.MatListItem, i7.NgClass, i7.NgIf, i11.MatLine, i5.MatButton, i3$3.MatListAvatarCssMatStyler, i5$1.StopPropagationDirective, i6$2.MatTooltip, i9.MatIcon, i5$1.CollapseDirective], pipes: [i6$1.TranslatePipe], styles: ["[_nghost-%COMP%]{overflow:hidden}.igo-actions-container[_ngcontent-%COMP%]{flex-shrink:0}.igo-actions-expand-container[_ngcontent-%COMP%]{display:inline-flex}mat-list-item[_ngcontent-%COMP%]     .mat-list-item-content .mat-list-text{padding:0}mat-icon.disabled[_ngcontent-%COMP%]{color:#00000061}mat-list-item.mat-list-item-light[_ngcontent-%COMP%]     .mat-list-item-content{color:#969696}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-item',
                templateUrl: './context-item.component.html',
                styleUrls: ['./context-item.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i2.AuthService }, { type: i3.StorageService }]; }, { context: [{
            type: Input
        }], default: [{
            type: Input
        }], selected: [{
            type: Input
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], save: [{
            type: Output
        }], clone: [{
            type: Output
        }], hide: [{
            type: Output
        }], show: [{
            type: Output
        }], favorite: [{
            type: Output
        }], managePermissions: [{
            type: Output
        }], manageTools: [{
            type: Output
        }] }); })();

function ContextListComponent_mat_form_field_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function ContextListComponent_mat_form_field_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.clearFilter(); });
    i0.ɵɵelement(1, "mat-icon", 15);
    i0.ɵɵelementEnd();
} }
function ContextListComponent_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 11);
    i0.ɵɵelementStart(1, "input", 12);
    i0.ɵɵlistener("ngModelChange", function ContextListComponent_mat_form_field_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.term = $event; });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ContextListComponent_mat_form_field_1_button_3_Template, 2, 0, "button", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.auth.authenticated && ctx_r0.configService.getConfig("context") ? "context-filter-min-width" : "context-filter-max-width");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 4, "igo.context.contextManager.filterPlaceHolder"))("ngModel", ctx_r0.term);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.term.length);
} }
function ContextListComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function ContextListComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.toggleSort(true); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.contextManager.sortAlphabetically"));
} }
function ContextListComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function ContextListComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.toggleSort(false); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.contextManager.sortContextOrder"));
} }
function ContextListComponent_igo_actionbar_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-actionbar", 19);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("iconColor", ctx_r3.color)("store", ctx_r3.actionStore)("withIcon", true)("withTitle", ctx_r3.actionbarMode === "overlay")("horizontal", false)("mode", ctx_r3.actionbarMode);
} }
function ContextListComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(7);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.filterUser"))("matMenuTriggerFor", _r5);
} }
function ContextListComponent_ng_container_8_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r17 = i0.ɵɵnextContext().$implicit;
    const _r20 = i0.ɵɵreference(6);
    i0.ɵɵproperty("matMenuTriggerFor", _r20);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", user_r17.title, " ");
} }
function ContextListComponent_ng_container_8_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", user_r17.title, " ");
} }
function ContextListComponent_ng_container_8_mat_checkbox_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 8);
    i0.ɵɵlistener("click", function ContextListComponent_ng_container_8_mat_checkbox_7_Template_mat_checkbox_click_0_listener($event) { return $event.stopPropagation(); })("change", function ContextListComponent_ng_container_8_mat_checkbox_7_Template_mat_checkbox_change_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r27); const child_r24 = restoredCtx.$implicit; const user_r17 = i0.ɵɵnextContext().$implicit; const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.userSelection(child_r24, user_r17); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r24 = ctx.$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", ctx_r21.getPermission(child_r24).checked);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", child_r24.title, " ");
} }
function ContextListComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵelementStart(2, "mat-checkbox", 22);
    i0.ɵɵlistener("click", function ContextListComponent_ng_container_8_Template_mat_checkbox_click_2_listener($event) { return $event.stopPropagation(); })("change", function ContextListComponent_ng_container_8_Template_mat_checkbox_change_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r31); const user_r17 = restoredCtx.$implicit; const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.userSelection(user_r17); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ContextListComponent_ng_container_8_button_3_Template, 2, 2, "button", 23);
    i0.ɵɵtemplate(4, ContextListComponent_ng_container_8_button_4_Template, 2, 1, "button", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-menu", null, 25);
    i0.ɵɵtemplate(7, ContextListComponent_ng_container_8_mat_checkbox_7_Template, 2, 2, "mat-checkbox", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const user_r17 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r6.getPermission(user_r17).checked)("indeterminate", ctx_r6.getPermission(user_r17).indeterminate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", user_r17.childs);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !user_r17.childs);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", user_r17.childs);
} }
function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-context-item", 31);
    i0.ɵɵlistener("edit", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_edit_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.edit.emit(context_r36); })("delete", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_delete_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r39 = i0.ɵɵnextContext(3); return ctx_r39.delete.emit(context_r36); })("clone", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_clone_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.clone.emit(context_r36); })("save", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_save_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r41 = i0.ɵɵnextContext(3); return ctx_r41.save.emit(context_r36); })("hide", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_hide_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r42 = i0.ɵɵnextContext(3); return ctx_r42.hideContext(context_r36); })("show", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_show_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r43 = i0.ɵɵnextContext(3); return ctx_r43.showContext(context_r36); })("favorite", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_favorite_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r44 = i0.ɵɵnextContext(3); return ctx_r44.favorite.emit(context_r36); })("manageTools", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_manageTools_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r45 = i0.ɵɵnextContext(3); return ctx_r45.manageTools.emit(context_r36); })("managePermissions", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_managePermissions_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r46 = i0.ɵɵnextContext(3); return ctx_r46.managePermissions.emit(context_r36); })("select", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_select_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r47 = i0.ɵɵnextContext(3); return ctx_r47.select.emit(context_r36); })("unselect", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_unselect_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r48 = i0.ɵɵnextContext(3); return ctx_r48.unselect.emit(context_r36); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r36 = ctx.$implicit;
    const ctx_r35 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("selected", ctx_r35.selectedContext && ctx_r35.selectedContext.uri === context_r36.uri)("context", context_r36)("default", context_r36.id && ctx_r35.defaultContextId && ctx_r35.defaultContextId === context_r36.id);
} }
function ContextListComponent_ng_template_14_igo_collapsible_0_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-collapsible", 30);
    i0.ɵɵlistener("toggle", function ContextListComponent_ng_template_14_igo_collapsible_0_Template_igo_collapsible_toggle_0_listener($event) { i0.ɵɵrestoreView(_r50); const groupContexts_r32 = i0.ɵɵnextContext().$implicit; const ctx_r49 = i0.ɵɵnextContext(); return (ctx_r49.collapsed[ctx_r49.titleMapping[groupContexts_r32.key]] = $event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtemplate(2, ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template, 1, 3, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupContexts_r32 = i0.ɵɵnextContext().$implicit;
    const ctx_r33 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, ctx_r33.titleMapping[groupContexts_r32.key]))("collapsed", ctx_r33.collapsed[ctx_r33.titleMapping[groupContexts_r32.key]]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", groupContexts_r32.value);
} }
function ContextListComponent_ng_template_14_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-context-item", 32);
    i0.ɵɵlistener("select", function ContextListComponent_ng_template_14_1_ng_template_0_Template_igo_context_item_select_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r56); const context_r54 = restoredCtx.$implicit; const ctx_r55 = i0.ɵɵnextContext(3); return ctx_r55.select.emit(context_r54); })("unselect", function ContextListComponent_ng_template_14_1_ng_template_0_Template_igo_context_item_unselect_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r56); const context_r54 = restoredCtx.$implicit; const ctx_r57 = i0.ɵɵnextContext(3); return ctx_r57.unselect.emit(context_r54); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r54 = ctx.$implicit;
    const ctx_r53 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("selected", ctx_r53.selectedContext && ctx_r53.selectedContext.uri === context_r54.uri)("context", context_r54)("default", ctx_r53.defaultContextId === context_r54.id);
} }
function ContextListComponent_ng_template_14_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContextListComponent_ng_template_14_1_ng_template_0_Template, 1, 3, "ng-template", 10);
} if (rf & 2) {
    const groupContexts_r32 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngForOf", groupContexts_r32.value);
} }
function ContextListComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContextListComponent_ng_template_14_igo_collapsible_0_Template, 3, 5, "igo-collapsible", 28);
    i0.ɵɵtemplate(1, ContextListComponent_ng_template_14_1_Template, 1, 1, undefined, 29);
} if (rf & 2) {
    const groupContexts_r32 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", groupContexts_r32.value.length && ctx_r7.auth.authenticated);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", groupContexts_r32.value.length && !ctx_r7.auth.authenticated);
} }
class ContextListComponent {
    constructor(cdRef, contextService, configService, auth, dialog, languageService, storageService) {
        this.cdRef = cdRef;
        this.contextService = contextService;
        this.configService = configService;
        this.auth = auth;
        this.dialog = dialog;
        this.languageService = languageService;
        this.storageService = storageService;
        this.contextsInitial = { ours: [] };
        this.contexts$ = new BehaviorSubject(this.contextsInitial);
        this.change$ = new ReplaySubject(1);
        this._contexts = { ours: [] };
        this.collapsed = [];
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.save = new EventEmitter();
        this.clone = new EventEmitter();
        this.create = new EventEmitter();
        this.hide = new EventEmitter();
        this.show = new EventEmitter();
        this.showHiddenContexts = new EventEmitter();
        this.favorite = new EventEmitter();
        this.managePermissions = new EventEmitter();
        this.manageTools = new EventEmitter();
        this.filterPermissionsChanged = new EventEmitter();
        this.titleMapping = {
            ours: 'igo.context.contextManager.ourContexts',
            shared: 'igo.context.contextManager.sharedContexts',
            public: 'igo.context.contextManager.publicContexts'
        };
        this.permissions = [];
        this.actionStore = new ActionStore([]);
        this.actionbarMode = ActionbarMode.Overlay;
        this.color = 'primary';
        this.showHidden = false;
        this._term = '';
        this._sortedAlpha = undefined;
        this.showContextFilter = ContextListControlsEnum.always;
        this.thresholdToFilter = 5;
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
        this.cdRef.detectChanges();
        this.next();
    }
    get selectedContext() {
        return this._selectedContext;
    }
    set selectedContext(value) {
        this._selectedContext = value;
        this.cdRef.detectChanges();
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get defaultContextId() {
        return this._defaultContextId;
    }
    set defaultContextId(value) {
        this._defaultContextId = value;
    }
    /**
     * Context filter term
     */
    set term(value) {
        this._term = value;
        this.next();
    }
    get term() {
        return this._term;
    }
    get sortedAlpha() {
        return this._sortedAlpha;
    }
    set sortedAlpha(value) {
        this._sortedAlpha = value;
        this.next();
    }
    ngOnInit() {
        this.change$$ = this.change$
            .pipe(debounce(() => {
            return this.contexts.ours.length === 0 ? EMPTY : timer(50);
        }))
            .subscribe(() => {
            this.contexts$.next(this.filterContextsList(this.contexts));
        });
        this.actionStore.load([
            {
                id: 'emptyContext',
                title: this.languageService.translate.instant('igo.context.contextManager.emptyContext'),
                icon: 'map-outline',
                tooltip: this.languageService.translate.instant('igo.context.contextManager.emptyContextTooltip'),
                handler: () => {
                    this.createContext(true);
                }
            },
            {
                id: 'contextFromMap',
                title: this.languageService.translate.instant('igo.context.contextManager.contextMap'),
                icon: 'map-check',
                tooltip: this.languageService.translate.instant('igo.context.contextManager.contextMapTooltip'),
                handler: () => {
                    this.createContext(false);
                }
            }
        ]);
    }
    next() {
        this.change$.next();
    }
    filterContextsList(contexts) {
        if (this.term === '') {
            if (this.sortedAlpha) {
                contexts = this.sortContextsList(contexts);
            }
            return contexts;
        }
        else {
            const ours = contexts.ours.filter((context) => {
                const filterNormalized = this.term
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');
                const contextTitleNormalized = context.title
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');
                return contextTitleNormalized.includes(filterNormalized);
            });
            let updateContexts = {
                ours
            };
            if (this.contexts.public) {
                const publics = contexts.public.filter((context) => {
                    const filterNormalized = this.term
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    const contextTitleNormalized = context.title
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    return contextTitleNormalized.includes(filterNormalized);
                });
                updateContexts.public = publics;
            }
            if (this.contexts.shared) {
                const shared = contexts.shared.filter((context) => {
                    const filterNormalized = this.term
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    const contextTitleNormalized = context.title
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    return contextTitleNormalized.includes(filterNormalized);
                });
                updateContexts.shared = shared;
            }
            if (this.sortedAlpha) {
                updateContexts = this.sortContextsList(updateContexts);
            }
            return updateContexts;
        }
    }
    ngOnDestroy() {
        this.change$$.unsubscribe();
    }
    showFilter() {
        switch (this.showContextFilter) {
            case ContextListControlsEnum.always:
                return true;
            case ContextListControlsEnum.never:
                return false;
            default:
                let totalLength = this.contexts.ours.length;
                this.contexts.public
                    ? (totalLength += this.contexts.public.length)
                    : (totalLength += 0);
                this.contexts.shared
                    ? (totalLength += this.contexts.shared.length)
                    : (totalLength += 0);
                if (totalLength >= this.thresholdToFilter) {
                    return true;
                }
                return false;
        }
    }
    sortContextsList(contexts) {
        if (contexts) {
            const contextsList = JSON.parse(JSON.stringify(contexts));
            contextsList.ours.sort((a, b) => {
                if (this.normalize(a.title) < this.normalize(b.title)) {
                    return -1;
                }
                if (this.normalize(a.title) > this.normalize(b.title)) {
                    return 1;
                }
                return 0;
            });
            if (contextsList.shared) {
                contextsList.shared.sort((a, b) => {
                    if (this.normalize(a.title) < this.normalize(b.title)) {
                        return -1;
                    }
                    if (this.normalize(a.title) > this.normalize(b.title)) {
                        return 1;
                    }
                    return 0;
                });
            }
            else if (contextsList.public) {
                contextsList.public.sort((a, b) => {
                    if (this.normalize(a.title) < this.normalize(b.title)) {
                        return -1;
                    }
                    if (this.normalize(a.title) > this.normalize(b.title)) {
                        return 1;
                    }
                    return 0;
                });
            }
            return contextsList;
        }
    }
    normalize(str) {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
    toggleSort(sortAlpha) {
        this.sortedAlpha = sortAlpha;
    }
    clearFilter() {
        this.term = '';
    }
    createContext(empty) {
        this.dialog
            .open(BookmarkDialogComponent, { disableClose: false })
            .afterClosed()
            .pipe(take(1))
            .subscribe((title) => {
            if (title) {
                this.create.emit({ title, empty });
            }
        });
    }
    getPermission(user) {
        if (user) {
            const permission = this.permissions.find((p) => p.name === user.name);
            return permission;
        }
    }
    userSelection(user, parent) {
        const permission = this.getPermission(user);
        if (permission) {
            permission.checked = !permission.checked;
            this.storageService.set('contexts.permissions.' + permission.name, permission.checked);
            permission.indeterminate = false;
        }
        if (parent) {
            let indeterminate = false;
            for (const c of parent.childs) {
                const cPermission = this.getPermission(c);
                if (cPermission.checked !== permission.checked) {
                    indeterminate = true;
                    break;
                }
            }
            const parentPermission = this.getPermission(parent);
            if (parentPermission) {
                parentPermission.checked = permission.checked;
                this.storageService.set('contexts.permissions.' + parentPermission.name, permission.checked);
                parentPermission.indeterminate = indeterminate;
            }
        }
        if (user.childs) {
            for (const c of user.childs) {
                const childrenPermission = this.getPermission(c);
                if (childrenPermission &&
                    childrenPermission.checked !== permission.checked) {
                    childrenPermission.checked = permission.checked;
                    this.storageService.set('contexts.permissions.' + childrenPermission.name, permission.checked);
                }
            }
        }
        this.filterPermissionsChanged.emit(this.permissions);
    }
    hideContext(context) {
        context.hidden = true;
        if (!this.showHidden) {
            const contexts = { ours: [], shared: [], public: [] };
            contexts.ours = this.contexts.ours.filter((c) => c.id !== context.id);
            contexts.shared = this.contexts.shared.filter((c) => c.id !== context.id);
            contexts.public = this.contexts.public.filter((c) => c.id !== context.id);
            this.contexts = contexts;
        }
        this.hide.emit(context);
    }
    showContext(context) {
        context.hidden = false;
        this.show.emit(context);
    }
}
ContextListComponent.ɵfac = function ContextListComponent_Factory(t) { return new (t || ContextListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(ContextService), i0.ɵɵdirectiveInject(i3.ConfigService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i1$2.MatDialog), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.StorageService)); };
ContextListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextListComponent, selectors: [["igo-context-list"]], inputs: { contexts: "contexts", selectedContext: "selectedContext", map: "map", defaultContextId: "defaultContextId", term: "term" }, outputs: { select: "select", unselect: "unselect", edit: "edit", delete: "delete", save: "save", clone: "clone", create: "create", hide: "hide", show: "show", showHiddenContexts: "showHiddenContexts", favorite: "favorite", managePermissions: "managePermissions", manageTools: "manageTools", filterPermissionsChanged: "filterPermissionsChanged" }, decls: 17, vars: 16, consts: [[3, "navigation"], [3, "ngClass", 4, "ngIf"], ["class", "sort-alpha", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["class", "add-context-button", "icon", "plus", 3, "iconColor", "store", "withIcon", "withTitle", "horizontal", "mode", 4, "ngIf"], ["class", "users-filter", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "matMenuTriggerFor", 4, "ngIf"], ["accountMenu", "matMenu"], [4, "ngFor", "ngForOf"], [1, "profilsMenu"], [1, "mat-menu-item", 3, "checked", "click", "change"], ["mat-menu-item", ""], ["ngFor", "", 3, "ngForOf"], [3, "ngClass"], ["matInput", "", "type", "text", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "class", "clear-button", "aria-label", "Clear", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "aria-label", "Clear", "color", "warn", 1, "clear-button", 3, "click"], ["svgIcon", "close"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "sort-alpha", 3, "matTooltip", "click"], ["color", "primary", "svgIcon", "sort-alphabetical-variant"], ["color", "warn", "svgIcon", "sort-variant-remove"], ["icon", "plus", 1, "add-context-button", 3, "iconColor", "store", "withIcon", "withTitle", "horizontal", "mode"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "users-filter", 3, "matTooltip", "matMenuTriggerFor"], ["color", "primary", "svgIcon", "filter-menu"], [1, "mat-menu-item", 3, "checked", "indeterminate", "click", "change"], ["mat-menu-item", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", 4, "ngIf"], ["subAccountMenu", "matMenu"], ["class", "mat-menu-item", 3, "checked", "click", "change", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [3, "title", "collapsed", "toggle", 4, "ngIf"], [4, "ngIf"], [3, "title", "collapsed", "toggle"], ["igoListItem", "", "color", "accent", 3, "selected", "context", "default", "edit", "delete", "clone", "save", "hide", "show", "favorite", "manageTools", "managePermissions", "select", "unselect"], ["igoListItem", "", "color", "accent", 3, "selected", "context", "default", "select", "unselect"]], template: function ContextListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-list", 0);
        i0.ɵɵtemplate(1, ContextListComponent_mat_form_field_1_Template, 4, 6, "mat-form-field", 1);
        i0.ɵɵtemplate(2, ContextListComponent_button_2_Template, 3, 3, "button", 2);
        i0.ɵɵtemplate(3, ContextListComponent_button_3_Template, 3, 3, "button", 2);
        i0.ɵɵtemplate(4, ContextListComponent_igo_actionbar_4_Template, 1, 6, "igo-actionbar", 3);
        i0.ɵɵtemplate(5, ContextListComponent_button_5_Template, 3, 4, "button", 4);
        i0.ɵɵelementStart(6, "mat-menu", null, 5);
        i0.ɵɵtemplate(8, ContextListComponent_ng_container_8_Template, 8, 5, "ng-container", 6);
        i0.ɵɵelementStart(9, "span", 7);
        i0.ɵɵelementStart(10, "mat-checkbox", 8);
        i0.ɵɵlistener("click", function ContextListComponent_Template_mat_checkbox_click_10_listener($event) { return $event.stopPropagation(); })("change", function ContextListComponent_Template_mat_checkbox_change_10_listener() { return ctx.showHiddenContexts.emit(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 9);
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, ContextListComponent_ng_template_14_Template, 2, 2, "ng-template", 10);
        i0.ɵɵpipe(15, "keyvalue");
        i0.ɵɵpipe(16, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("navigation", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showFilter());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.sortedAlpha);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.sortedAlpha);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.configService.getConfig("context"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.configService.getConfig("context"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.users);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx.showHidden);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 10, "igo.context.contextManager.showHidden"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(15, 12, i0.ɵɵpipeBind1(16, 14, ctx.contexts$)));
    } }, directives: [i5$1.ListComponent, i7.NgIf, i7$1.MatMenu, i7.NgForOf, i8.MatCheckbox, i7$1.MatMenuItem, i3$1.MatFormField, i7.NgClass, i3$2.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatButton, i3$1.MatSuffix, i9.MatIcon, i6$2.MatTooltip, i5$1.ActionbarComponent, i7$1.MatMenuTrigger, i5$1.CollapsibleComponent, ContextItemComponent, i5$1.ListItemDirective], pipes: [i6$1.TranslatePipe, i5$1.KeyValuePipe, i7.AsyncPipe], styles: [".context-filter-max-width[_ngcontent-%COMP%]{width:calc(100% - 100px);margin:5px;padding-left:6px}.context-filter-min-width[_ngcontent-%COMP%]{width:calc(100% - 135px);margin:5px;padding-left:6px}.clear-button[_ngcontent-%COMP%]{padding-right:5px}mat-form-field[_ngcontent-%COMP%]{height:40px}.profilsMenu[_ngcontent-%COMP%]{display:flex}.profilsMenu[_ngcontent-%COMP%] > mat-checkbox[_ngcontent-%COMP%]{width:8px}.add-context-button[_ngcontent-%COMP%]{margin:0;width:40px;display:inline-flex;overflow:hidden}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextListComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-list',
                templateUrl: './context-list.component.html',
                styleUrls: ['./context-list.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: ContextService }, { type: i3.ConfigService }, { type: i2.AuthService }, { type: i1$2.MatDialog }, { type: i3.LanguageService }, { type: i3.StorageService }]; }, { contexts: [{
            type: Input
        }], selectedContext: [{
            type: Input
        }], map: [{
            type: Input
        }], defaultContextId: [{
            type: Input
        }], select: [{
            type: Output
        }], unselect: [{
            type: Output
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], save: [{
            type: Output
        }], clone: [{
            type: Output
        }], create: [{
            type: Output
        }], hide: [{
            type: Output
        }], show: [{
            type: Output
        }], showHiddenContexts: [{
            type: Output
        }], favorite: [{
            type: Output
        }], managePermissions: [{
            type: Output
        }], manageTools: [{
            type: Output
        }], filterPermissionsChanged: [{
            type: Output
        }], term: [{
            type: Input
        }] }); })();

class ContextListBindingDirective {
    constructor(component, contextService, mapService, languageService, confirmDialogService, messageService, auth, storageService) {
        this.contextService = contextService;
        this.mapService = mapService;
        this.languageService = languageService;
        this.confirmDialogService = confirmDialogService;
        this.messageService = messageService;
        this.auth = auth;
        this.storageService = storageService;
        this.component = component;
    }
    onSelect(context) {
        this.contextService.loadContext(context.uri);
    }
    onEdit(context) {
        this.contextService.loadEditedContext(context.uri);
    }
    onSave(context) {
        const map = this.mapService.getMap();
        const contextFromMap = this.contextService.getContextFromMap(map);
        const msgSuccess = () => {
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.contextManager.dialog.saveMsg', {
                value: context.title
            });
            const title = translate.instant('igo.context.contextManager.dialog.saveTitle');
            this.messageService.success(message, title);
        };
        if (context.imported) {
            contextFromMap.title = context.title;
            this.contextService.delete(context.id, true);
            this.contextService.create(contextFromMap).subscribe((contextCreated) => {
                this.contextService.loadContext(contextCreated.uri);
                msgSuccess();
            });
            return;
        }
        const changes = {
            layers: contextFromMap.layers,
            map: {
                view: contextFromMap.map.view
            }
        };
        this.contextService.update(context.id, changes).subscribe(() => {
            msgSuccess();
        });
    }
    onFavorite(context) {
        this.contextService.setDefault(context.id).subscribe(() => {
            this.contextService.defaultContextId$.next(context.id);
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.contextManager.dialog.favoriteMsg', {
                value: context.title
            });
            const title = translate.instant('igo.context.contextManager.dialog.favoriteTitle');
            this.messageService.success(message, title);
        });
    }
    onManageTools(context) {
        this.contextService.loadEditedContext(context.uri);
    }
    onManagePermissions(context) {
        this.contextService.loadEditedContext(context.uri);
    }
    onDelete(context) {
        const translate = this.languageService.translate;
        this.confirmDialogService
            .open(translate.instant('igo.context.contextManager.dialog.confirmDelete'))
            .subscribe((confirm) => {
            if (confirm) {
                this.contextService
                    .delete(context.id, context.imported)
                    .subscribe(() => {
                    const message = translate.instant('igo.context.contextManager.dialog.deleteMsg', {
                        value: context.title
                    });
                    const title = translate.instant('igo.context.contextManager.dialog.deleteTitle');
                    this.messageService.info(message, title);
                });
            }
        });
    }
    onClone(context) {
        const properties = {
            title: context.title + '-copy',
            uri: context.uri + '-copy'
        };
        this.contextService.clone(context.id, properties).subscribe(() => {
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.contextManager.dialog.cloneMsg', {
                value: context.title
            });
            const title = translate.instant('igo.context.contextManager.dialog.cloneTitle');
            this.messageService.success(message, title);
        });
    }
    onCreate(opts) {
        const { title, empty } = opts;
        const context = this.contextService.getContextFromMap(this.component.map, empty);
        context.title = title;
        this.contextService.create(context).subscribe(() => {
            const translate = this.languageService.translate;
            const titleD = translate.instant('igo.context.bookmarkButton.dialog.createTitle');
            const message = translate.instant('igo.context.bookmarkButton.dialog.createMsg', {
                value: context.title
            });
            this.messageService.success(message, titleD);
            this.contextService.loadContext(context.uri);
        });
    }
    loadContexts() {
        const permissions = ['none'];
        for (const p of this.component.permissions) {
            if (p.checked === true || p.indeterminate === true) {
                permissions.push(p.name);
            }
        }
        this.component.showHidden
            ? this.contextService.loadContexts(permissions, true)
            : this.contextService.loadContexts(permissions, false);
    }
    showHiddenContexts() {
        this.component.showHidden = !this.component.showHidden;
        this.storageService.set('contexts.showHidden', this.component.showHidden);
        this.loadContexts();
    }
    onShowContext(context) {
        this.contextService.showContext(context.id).subscribe();
    }
    onHideContext(context) {
        this.contextService.hideContext(context.id).subscribe();
    }
    ngOnInit() {
        // Override input contexts
        this.component.contexts = { ours: [] };
        this.component.showHidden = this.storageService.get('contexts.showHidden');
        this.contexts$$ = this.contextService.contexts$.subscribe((contexts) => this.handleContextsChange(contexts));
        this.defaultContextId$$ = this.contextService.defaultContextId$.subscribe((id) => {
            this.component.defaultContextId = id;
        });
        // See feature-list.component for an explanation about the debounce time
        this.selectedContext$$ = this.contextService.context$
            .pipe(debounceTime(100))
            .subscribe((context) => (this.component.selectedContext = context));
        this.auth.authenticate$.subscribe((authenticate) => {
            if (authenticate) {
                this.contextService.getProfilByUser().subscribe((profils) => {
                    this.component.users = profils;
                    this.component.permissions = [];
                    const profilsAcc = this.component.users.reduce((acc, cur) => {
                        acc = acc.concat(cur);
                        acc = cur.childs ? acc.concat(cur.childs) : acc;
                        return acc;
                    }, []);
                    for (const user of profilsAcc) {
                        const permission = {
                            name: user.name,
                            checked: this.storageService.get('contexts.permissions.' + user.name)
                        };
                        if (permission.checked === null) {
                            permission.checked = true;
                        }
                        this.component.permissions.push(permission);
                    }
                    const permissions = ['none'];
                    for (const p of this.component.permissions) {
                        if (p.checked === true || p.indeterminate === true) {
                            permissions.push(p.name);
                        }
                    }
                    this.component.showHidden
                        ? this.contextService.loadContexts(permissions, true)
                        : this.contextService.loadContexts(permissions, false);
                });
            }
        });
    }
    ngOnDestroy() {
        this.contexts$$.unsubscribe();
        this.selectedContext$$.unsubscribe();
        this.defaultContextId$$.unsubscribe();
    }
    handleContextsChange(contexts) {
        this.component.contexts = contexts;
    }
}
ContextListBindingDirective.ɵfac = function ContextListBindingDirective_Factory(t) { return new (t || ContextListBindingDirective)(i0.ɵɵdirectiveInject(ContextListComponent, 2), i0.ɵɵdirectiveInject(ContextService), i0.ɵɵdirectiveInject(i1$1.MapService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i5$1.ConfirmDialogService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.StorageService)); };
ContextListBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContextListBindingDirective, selectors: [["", "igoContextListBinding", ""]], hostBindings: function ContextListBindingDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("select", function ContextListBindingDirective_select_HostBindingHandler($event) { return ctx.onSelect($event); })("edit", function ContextListBindingDirective_edit_HostBindingHandler($event) { return ctx.onEdit($event); })("save", function ContextListBindingDirective_save_HostBindingHandler($event) { return ctx.onSave($event); })("favorite", function ContextListBindingDirective_favorite_HostBindingHandler($event) { return ctx.onFavorite($event); })("manageTools", function ContextListBindingDirective_manageTools_HostBindingHandler($event) { return ctx.onManageTools($event); })("managePermissions", function ContextListBindingDirective_managePermissions_HostBindingHandler($event) { return ctx.onManagePermissions($event); })("delete", function ContextListBindingDirective_delete_HostBindingHandler($event) { return ctx.onDelete($event); })("clone", function ContextListBindingDirective_clone_HostBindingHandler($event) { return ctx.onClone($event); })("create", function ContextListBindingDirective_create_HostBindingHandler($event) { return ctx.onCreate($event); })("filterPermissionsChanged", function ContextListBindingDirective_filterPermissionsChanged_HostBindingHandler() { return ctx.loadContexts(); })("showHiddenContexts", function ContextListBindingDirective_showHiddenContexts_HostBindingHandler() { return ctx.showHiddenContexts(); })("show", function ContextListBindingDirective_show_HostBindingHandler($event) { return ctx.onShowContext($event); })("hide", function ContextListBindingDirective_hide_HostBindingHandler($event) { return ctx.onHideContext($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextListBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoContextListBinding]'
            }]
    }], function () { return [{ type: ContextListComponent, decorators: [{
                type: Self
            }] }, { type: ContextService }, { type: i1$1.MapService }, { type: i3.LanguageService }, { type: i5$1.ConfirmDialogService }, { type: i3.MessageService }, { type: i2.AuthService }, { type: i3.StorageService }]; }, { onSelect: [{
            type: HostListener,
            args: ['select', ['$event']]
        }], onEdit: [{
            type: HostListener,
            args: ['edit', ['$event']]
        }], onSave: [{
            type: HostListener,
            args: ['save', ['$event']]
        }], onFavorite: [{
            type: HostListener,
            args: ['favorite', ['$event']]
        }], onManageTools: [{
            type: HostListener,
            args: ['manageTools', ['$event']]
        }], onManagePermissions: [{
            type: HostListener,
            args: ['managePermissions', ['$event']]
        }], onDelete: [{
            type: HostListener,
            args: ['delete', ['$event']]
        }], onClone: [{
            type: HostListener,
            args: ['clone', ['$event']]
        }], onCreate: [{
            type: HostListener,
            args: ['create', ['$event']]
        }], loadContexts: [{
            type: HostListener,
            args: ['filterPermissionsChanged']
        }], showHiddenContexts: [{
            type: HostListener,
            args: ['showHiddenContexts']
        }], onShowContext: [{
            type: HostListener,
            args: ['show', ['$event']]
        }], onHideContext: [{
            type: HostListener,
            args: ['hide', ['$event']]
        }] }); })();

function ContextFormComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r0.prefix, "-");
} }
class ContextFormComponent {
    constructor(formBuilder, languageService, messageService) {
        this.formBuilder = formBuilder;
        this.languageService = languageService;
        this.messageService = messageService;
        this._disabled = false;
        // TODO: replace any by ContextOptions or Context
        this.submitForm = new EventEmitter();
        this.clone = new EventEmitter();
        this.delete = new EventEmitter();
    }
    get btnSubmitText() {
        return this._btnSubmitText;
    }
    set btnSubmitText(value) {
        this._btnSubmitText = value;
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
        this.buildForm();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    ngOnInit() {
        this.buildForm();
    }
    handleFormSubmit(value) {
        let inputs = Object.assign({}, value);
        inputs = ObjectUtils.removeNull(inputs);
        inputs.uri = inputs.uri.replace(' ', '');
        if (inputs.uri) {
            inputs.uri = this.prefix + '-' + inputs.uri;
        }
        else {
            inputs.uri = this.prefix;
        }
        this.submitForm.emit(inputs);
    }
    copyTextToClipboard() {
        const text = this.prefix + '-' + this.form.value.uri.replace(' ', '');
        const successful = Clipboard.copy(text);
        if (successful) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.context.contextManager.dialog.copyTitle');
            const msg = translate.instant('igo.context.contextManager.dialog.copyMsg');
            this.messageService.success(msg, title);
        }
    }
    buildForm() {
        const context = this.context || {};
        const uriSplit = context.uri.split('-');
        this.prefix = uriSplit.shift();
        const uri = uriSplit.join('-');
        this.form = this.formBuilder.group({
            title: [context.title],
            uri: [uri || ' ']
        });
    }
}
ContextFormComponent.ɵfac = function ContextFormComponent_Factory(t) { return new (t || ContextFormComponent)(i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService)); };
ContextFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextFormComponent, selectors: [["igo-context-form"]], inputs: { btnSubmitText: "btnSubmitText", context: "context", disabled: "disabled" }, outputs: { submitForm: "submitForm", clone: "clone", delete: "delete" }, decls: 19, vars: 18, consts: [[1, "igo-form", 3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "required", "", "maxlength", "128", "formControlName", "title", 3, "placeholder"], ["id", "uriInput", 1, "full-width"], ["class", "prefix", 4, "ngIf"], [1, "fieldWrapper"], ["matInput", "", "maxlength", "64", "floatLabel", "always", "formControlName", "uri", 3, "placeholder"], ["id", "copyButton", "type", "button", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", 3, "matTooltip", "click"], ["svgIcon", "content-copy"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], [1, "prefix"]], template: function ContextFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function ContextFormComponent_Template_form_ngSubmit_0_listener() { return ctx.handleFormSubmit(ctx.form.value); });
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵpipe(3, "translate");
        i0.ɵɵelementStart(4, "mat-error");
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-form-field", 3);
        i0.ɵɵtemplate(8, ContextFormComponent_span_8_Template, 2, 1, "span", 4);
        i0.ɵɵelementStart(9, "span", 5);
        i0.ɵɵelement(10, "input", 6);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 7);
        i0.ɵɵlistener("click", function ContextFormComponent_Template_button_click_12_listener() { return ctx.copyTextToClipboard(); });
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelement(14, "mat-icon", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 9);
        i0.ɵɵelementStart(16, "button", 10);
        i0.ɵɵtext(17);
        i0.ɵɵpipe(18, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 8, "igo.context.contextManager.form.title"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 10, "igo.context.contextManager.form.titleRequired"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.prefix);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(11, 12, "igo.context.contextManager.form.uri"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(13, 14, "igo.context.contextManager.form.copy"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", !ctx.form.valid || ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(18, 16, "igo.context.contextManager.form.edit"), " ");
    } }, directives: [i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.FormGroupDirective, i3$1.MatFormField, i3$2.MatInput, i4.DefaultValueAccessor, i4.RequiredValidator, i4.MaxLengthValidator, i4.NgControlStatus, i4.FormControlName, i3$1.MatError, i7.NgIf, i5.MatButton, i6$2.MatTooltip, i9.MatIcon], pipes: [i6$1.TranslatePipe], styles: ["form[_ngcontent-%COMP%]{margin:10px}.full-width[_ngcontent-%COMP%]{width:100%}#uriInput[_ngcontent-%COMP%]   .fieldWrapper[_ngcontent-%COMP%]{display:block;overflow:hidden}#uriInput[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{float:left}#copyButton[_ngcontent-%COMP%]{width:24px;float:right;position:relative;top:-58px;left:5px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextFormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-form',
                templateUrl: './context-form.component.html',
                styleUrls: ['./context-form.component.scss']
            }]
    }], function () { return [{ type: i4.FormBuilder }, { type: i3.LanguageService }, { type: i3.MessageService }]; }, { btnSubmitText: [{
            type: Input
        }], context: [{
            type: Input
        }], disabled: [{
            type: Input
        }], submitForm: [{
            type: Output
        }], clone: [{
            type: Output
        }], delete: [{
            type: Output
        }] }); })();

function ContextEditComponent_igo_context_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-context-form", 1);
    i0.ɵɵlistener("submitForm", function ContextEditComponent_igo_context_form_0_Template_igo_context_form_submitForm_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.submitForm.emit($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("btnSubmitText", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.save"))("context", ctx_r0.context);
} }
class ContextEditComponent {
    constructor(cd) {
        this.cd = cd;
        this.submitForm = new EventEmitter();
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
        this.refresh();
    }
    refresh() {
        this.cd.detectChanges();
    }
}
ContextEditComponent.ɵfac = function ContextEditComponent_Factory(t) { return new (t || ContextEditComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ContextEditComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextEditComponent, selectors: [["igo-context-edit"]], inputs: { context: "context" }, outputs: { submitForm: "submitForm" }, decls: 1, vars: 1, consts: [[3, "btnSubmitText", "context", "submitForm", 4, "ngIf"], [3, "btnSubmitText", "context", "submitForm"]], template: function ContextEditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ContextEditComponent_igo_context_form_0_Template, 2, 4, "igo-context-form", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.context);
    } }, directives: [i7.NgIf, ContextFormComponent], pipes: [i6$1.TranslatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextEditComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-edit',
                templateUrl: './context-edit.component.html'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { context: [{
            type: Input
        }], submitForm: [{
            type: Output
        }] }); })();

class ContextEditBindingDirective {
    constructor(component, contextService, messageService, languageService) {
        this.contextService = contextService;
        this.messageService = messageService;
        this.languageService = languageService;
        this.submitSuccessed = new EventEmitter();
        this.component = component;
    }
    onEdit(context) {
        const id = this.component.context.id;
        this.contextService.update(id, context).subscribe(() => {
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.contextManager.dialog.saveMsg', {
                value: context.title || this.component.context.title
            });
            const title = translate.instant('igo.context.contextManager.dialog.saveTitle');
            this.messageService.success(message, title);
            this.contextService.setEditedContext(undefined);
            this.submitSuccessed.emit(context);
        });
    }
    ngOnInit() {
        this.editedContext$$ = this.contextService.editedContext$.subscribe(context => this.handleEditedContextChange(context));
    }
    ngOnDestroy() {
        this.editedContext$$.unsubscribe();
    }
    handleEditedContextChange(context) {
        this.component.context = context;
    }
}
ContextEditBindingDirective.ɵfac = function ContextEditBindingDirective_Factory(t) { return new (t || ContextEditBindingDirective)(i0.ɵɵdirectiveInject(ContextEditComponent, 2), i0.ɵɵdirectiveInject(ContextService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i3.LanguageService)); };
ContextEditBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContextEditBindingDirective, selectors: [["", "igoContextEditBinding", ""]], hostBindings: function ContextEditBindingDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("submitForm", function ContextEditBindingDirective_submitForm_HostBindingHandler($event) { return ctx.onEdit($event); });
    } }, outputs: { submitSuccessed: "submitSuccessed" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextEditBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoContextEditBinding]'
            }]
    }], function () { return [{ type: ContextEditComponent, decorators: [{
                type: Self
            }] }, { type: ContextService }, { type: i3.MessageService }, { type: i3.LanguageService }]; }, { submitSuccessed: [{
            type: Output
        }], onEdit: [{
            type: HostListener,
            args: ['submitForm', ['$event']]
        }] }); })();

function ContextPermissionsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "igo.context.permission.readOnlyTitle"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 4, "igo.context.permission.readOnlyMsg"));
} }
function ContextPermissionsComponent_div_0_div_2_mat_radio_button_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 8);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.context.permission.scope.public"), " ");
} }
function ContextPermissionsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "mat-radio-group", 4);
    i0.ɵɵlistener("ngModelChange", function ContextPermissionsComponent_div_0_div_2_Template_mat_radio_group_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.context.scope = $event; })("change", function ContextPermissionsComponent_div_0_div_2_Template_mat_radio_group_change_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.scopeChanged.emit(ctx_r8.context); });
    i0.ɵɵelementStart(2, "mat-radio-button", 5);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-radio-button", 6);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ContextPermissionsComponent_div_0_div_2_mat_radio_button_8_Template, 3, 3, "mat-radio-button", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.context.scope);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 4, "igo.context.permission.scope.private"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 6, "igo.context.permission.scope.shared"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.authService.isAdmin);
} }
function ContextPermissionsComponent_div_0_form_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "br");
    i0.ɵɵelementStart(3, "small", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const profil_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", profil_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", profil_r11.title, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(profil_r11.name);
} }
function ContextPermissionsComponent_div_0_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 9);
    i0.ɵɵlistener("ngSubmit", function ContextPermissionsComponent_div_0_form_3_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.handleFormSubmit(ctx_r12.form.value); });
    i0.ɵɵelementStart(1, "mat-form-field", 10);
    i0.ɵɵelement(2, "input", 11);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementStart(4, "mat-autocomplete", 12, 13);
    i0.ɵɵlistener("optionSelected", function ContextPermissionsComponent_div_0_form_3_Template_mat_autocomplete_optionSelected_4_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.onProfilSelected($event.option.value); });
    i0.ɵɵtemplate(6, ContextPermissionsComponent_div_0_form_3_mat_option_6_Template, 5, 3, "mat-option", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-error");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-radio-group", 15);
    i0.ɵɵelementStart(11, "mat-radio-button", 16);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-radio-button", 17);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 18);
    i0.ɵɵelementStart(18, "button", 19);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = i0.ɵɵreference(5);
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r3.form);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 11, "igo.context.permission.user"))("formControl", ctx_r3.formControl)("matAutocomplete", _r9);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("displayWith", ctx_r3.displayFn);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.profils);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 13, "igo.context.permission.profilRequired"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 15, "igo.context.permission.read"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 17, "igo.context.permission.write"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r3.form.valid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 19, "igo.context.permission.addBtn"), " ");
} }
function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const permission_r19 = i0.ɵɵnextContext().$implicit; const ctx_r21 = i0.ɵɵnextContext(5); return ctx_r21.removePermission.emit(permission_r19); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.permission.delete"));
} }
function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelement(1, "mat-icon", 25);
    i0.ɵɵelementStart(2, "h4", 26);
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "small", 21);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 27);
    i0.ɵɵtemplate(7, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_button_7_Template, 3, 3, "button", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const permission_r19 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", permission_r19.profilTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(permission_r19.profil);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r18.canWrite || permission_r19.profil === ctx_r18.authService.decodeToken().user.sourceId);
} }
function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "igo-collapsible", 24);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtemplate(2, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_Template, 8, 3, "ng-template", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupPermissions_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 2, "igo.context.permission." + groupPermissions_r16.key));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", groupPermissions_r16.value);
} }
function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_Template, 3, 4, "igo-collapsible", 23);
} if (rf & 2) {
    const groupPermissions_r16 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", groupPermissions_r16.value.length);
} }
function ContextPermissionsComponent_div_0_igo_list_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "igo-list");
    i0.ɵɵtemplate(1, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_Template, 1, 1, "ng-template", 22);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r4.permissions));
} }
function ContextPermissionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ContextPermissionsComponent_div_0_div_1_Template, 7, 6, "div", 1);
    i0.ɵɵtemplate(2, ContextPermissionsComponent_div_0_div_2_Template, 9, 8, "div", 1);
    i0.ɵɵtemplate(3, ContextPermissionsComponent_div_0_form_3_Template, 21, 21, "form", 2);
    i0.ɵɵtemplate(4, ContextPermissionsComponent_div_0_igo_list_4_Template, 3, 3, "igo-list", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.canWrite);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.canWrite);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.context.scope !== "private" && ctx_r0.canWrite);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.permissions && ctx_r0.context.scope !== "private");
} }
class ContextPermissionsComponent {
    constructor(formBuilder, cd, http, authService, config) {
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.http = http;
        this.authService = authService;
        this.config = config;
        this._profils = [];
        this.formControl = new FormControl();
        this.addPermission = new EventEmitter();
        this.removePermission = new EventEmitter();
        this.scopeChanged = new EventEmitter();
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
        this.cd.detectChanges();
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
        this.cd.detectChanges();
    }
    get profils() {
        return this._profils;
    }
    set profils(value) {
        this._profils = value;
        this.cd.detectChanges();
    }
    get canWrite() {
        return this.context.permission === TypePermission[TypePermission.write];
    }
    ngOnInit() {
        this.buildForm();
        this.baseUrlProfils = this.config.getConfig('context.url') + '/profils-users?';
        this.formValueChanges$$ = this.formControl.valueChanges.subscribe((value) => {
            if (value.length) {
                this.http.get(this.baseUrlProfils + 'q=' + value).subscribe(profils => {
                    this.profils = profils;
                });
                this.profils.filter((profil) => {
                    const filterNormalized = value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    const profilTitleNormalized = profil.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    const profilNameNormalized = profil.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    const profilNormalized = profilNameNormalized + profilTitleNormalized;
                    return profilNormalized.includes(filterNormalized);
                });
            }
            else {
                this.profils = [];
            }
        });
    }
    displayFn(profil) {
        return profil ? profil.title : undefined;
    }
    handleFormSubmit(value) {
        this.addPermission.emit(value);
    }
    buildForm() {
        this.form = this.formBuilder.group({
            profil: [],
            typePermission: ['read']
        });
    }
    onProfilSelected(value) {
        this.form.setValue({
            profil: value.name,
            typePermission: this.form.value.typePermission
        });
    }
}
ContextPermissionsComponent.ɵfac = function ContextPermissionsComponent_Factory(t) { return new (t || ContextPermissionsComponent)(i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.ConfigService)); };
ContextPermissionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextPermissionsComponent, selectors: [["igo-context-permissions"]], inputs: { context: "context", permissions: "permissions" }, outputs: { addPermission: "addPermission", removePermission: "removePermission", scopeChanged: "scopeChanged" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "scopeForm", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "scopeForm"], [3, "ngModel", "ngModelChange", "change"], ["value", "private"], ["value", "protected"], ["value", "public", 4, "ngIf"], ["value", "public"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "required", "", 3, "placeholder", "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "typePermission"], ["value", "read"], ["value", "write"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], [3, "value"], [1, "mat-typography"], ["ngFor", "", 3, "ngForOf"], [3, "title", 4, "ngIf"], [3, "title"], ["mat-list-avatar", "", "svgIcon", "account-outline"], ["mat-line", ""], ["igoStopPropagation", "", 1, "igo-actions-container"], ["mat-icon-button", "", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click"], ["svgIcon", "delete"]], template: function ContextPermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ContextPermissionsComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.context);
    } }, directives: [i7.NgIf, i6$3.MatRadioGroup, i4.NgControlStatus, i4.NgModel, i6$3.MatRadioButton, i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.FormGroupDirective, i3$1.MatFormField, i3$2.MatInput, i4.DefaultValueAccessor, i9$1.MatAutocompleteTrigger, i4.RequiredValidator, i4.FormControlDirective, i9$1.MatAutocomplete, i7.NgForOf, i3$1.MatError, i4.FormControlName, i5.MatButton, i11.MatOption, i5$1.ListComponent, i5$1.CollapsibleComponent, i3$3.MatListItem, i9.MatIcon, i3$3.MatListAvatarCssMatStyler, i11.MatLine, i5$1.StopPropagationDirective, i6$2.MatTooltip], pipes: [i6$1.TranslatePipe, i5$1.KeyValuePipe], styles: ["[_nghost-%COMP%]{margin:10px}.full-width[_ngcontent-%COMP%]{width:100%}mat-radio-button[_ngcontent-%COMP%]{padding:14px 14px 14px 0}.scopeForm[_ngcontent-%COMP%], form[_ngcontent-%COMP%]{padding:5px}mat-option[_ngcontent-%COMP%]     .mat-option-text{line-height:normal;line-height:initial}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextPermissionsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-permissions',
                templateUrl: './context-permissions.component.html',
                styleUrls: ['./context-permissions.component.scss']
            }]
    }], function () { return [{ type: i4.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i1.HttpClient }, { type: i2.AuthService }, { type: i3.ConfigService }]; }, { context: [{
            type: Input
        }], permissions: [{
            type: Input
        }], addPermission: [{
            type: Output
        }], removePermission: [{
            type: Output
        }], scopeChanged: [{
            type: Output
        }] }); })();

class ContextPermissionsBindingDirective {
    constructor(component, contextService, languageService, messageService, cd) {
        this.contextService = contextService;
        this.languageService = languageService;
        this.messageService = messageService;
        this.cd = cd;
        this.component = component;
    }
    onAddPermission(permission) {
        const translate = this.languageService.translate;
        if (!permission.profil) {
            const message = translate.instant('igo.context.contextManager.errors.addPermissionEmpty');
            const title = translate.instant('igo.context.contextManager.errors.addPermissionTitle');
            this.messageService.error(message, title);
            return;
        }
        const contextId = this.component.context.id;
        this.contextService
            .addPermissionAssociation(contextId, permission.profil, permission.typePermission)
            .subscribe(profils => {
            for (const p of profils) {
                this.component.permissions[permission.typePermission].push(p);
            }
            const profil = permission.profil;
            const message = translate.instant('igo.context.permission.dialog.addMsg', {
                value: profil
            });
            const title = translate.instant('igo.context.permission.dialog.addTitle');
            this.messageService.success(message, title);
            this.cd.detectChanges();
        });
    }
    onRemovePermission(permission) {
        const contextId = this.component.context.id;
        this.contextService
            .deletePermissionAssociation(contextId, permission.id)
            .subscribe(() => {
            const index = this.component.permissions[permission.typePermission].findIndex(p => {
                return p.id === permission.id;
            });
            this.component.permissions[permission.typePermission].splice(index, 1);
            const profil = permission.profil;
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.permission.dialog.deleteMsg', {
                value: profil
            });
            const title = translate.instant('igo.context.permission.dialog.deleteTitle');
            this.messageService.success(message, title);
            this.cd.detectChanges();
        });
    }
    onScopeChanged(context) {
        const scope = context.scope;
        this.contextService.update(context.id, { scope }).subscribe(() => {
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.permission.dialog.scopeChangedMsg', {
                value: translate.instant('igo.context.permission.scope.' + scope)
            });
            const title = translate.instant('igo.context.permission.dialog.scopeChangedTitle');
            this.messageService.success(message, title);
        });
    }
    ngOnInit() {
        this.editedContext$$ = this.contextService.editedContext$.subscribe(context => this.handleEditedContextChange(context));
    }
    ngOnDestroy() {
        this.editedContext$$.unsubscribe();
        this.contextService.editedContext$.next(undefined);
    }
    handleEditedContextChange(context) {
        this.component.context = context;
        if (context) {
            this.contextService
                .getPermissions(context.id)
                .subscribe(permissionsArray => {
                permissionsArray = permissionsArray || [];
                const permissions = {
                    read: permissionsArray.filter(p => {
                        return p.typePermission.toString() === 'read';
                    }),
                    write: permissionsArray.filter(p => {
                        return p.typePermission.toString() === 'write';
                    })
                };
                return (this.component.permissions = permissions);
            });
        }
    }
}
ContextPermissionsBindingDirective.ɵfac = function ContextPermissionsBindingDirective_Factory(t) { return new (t || ContextPermissionsBindingDirective)(i0.ɵɵdirectiveInject(ContextPermissionsComponent, 2), i0.ɵɵdirectiveInject(ContextService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ContextPermissionsBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContextPermissionsBindingDirective, selectors: [["", "igoContextPermissionsBinding", ""]], hostBindings: function ContextPermissionsBindingDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("addPermission", function ContextPermissionsBindingDirective_addPermission_HostBindingHandler($event) { return ctx.onAddPermission($event); })("removePermission", function ContextPermissionsBindingDirective_removePermission_HostBindingHandler($event) { return ctx.onRemovePermission($event); })("scopeChanged", function ContextPermissionsBindingDirective_scopeChanged_HostBindingHandler($event) { return ctx.onScopeChanged($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextPermissionsBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoContextPermissionsBinding]'
            }]
    }], function () { return [{ type: ContextPermissionsComponent, decorators: [{
                type: Self
            }] }, { type: ContextService }, { type: i3.LanguageService }, { type: i3.MessageService }, { type: i0.ChangeDetectorRef }]; }, { onAddPermission: [{
            type: HostListener,
            args: ['addPermission', ['$event']]
        }], onRemovePermission: [{
            type: HostListener,
            args: ['removePermission', ['$event']]
        }], onScopeChanged: [{
            type: HostListener,
            args: ['scopeChanged', ['$event']]
        }] }); })();

class BookmarkButtonComponent {
    constructor(dialog, contextService, languageService, messageService) {
        this.dialog = dialog;
        this.contextService = contextService;
        this.languageService = languageService;
        this.messageService = messageService;
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    createContext() {
        this.dialog
            .open(BookmarkDialogComponent, { disableClose: false })
            .afterClosed()
            .pipe(take(1))
            .subscribe(title => {
            if (title) {
                const context = this.contextService.getContextFromMap(this.map);
                context.title = title;
                this.contextService.create(context).subscribe(() => {
                    const translate = this.languageService.translate;
                    const titleD = translate.instant('igo.context.bookmarkButton.dialog.createTitle');
                    const message = translate.instant('igo.context.bookmarkButton.dialog.createMsg', {
                        value: context.title
                    });
                    this.messageService.success(message, titleD);
                    this.contextService.loadContext(context.uri);
                });
            }
        });
    }
}
BookmarkButtonComponent.ɵfac = function BookmarkButtonComponent_Factory(t) { return new (t || BookmarkButtonComponent)(i0.ɵɵdirectiveInject(i1$2.MatDialog), i0.ɵɵdirectiveInject(ContextService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService)); };
BookmarkButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BookmarkButtonComponent, selectors: [["igo-bookmark-button"]], inputs: { map: "map", color: "color" }, decls: 4, vars: 4, consts: [[1, "igo-bookmark-button-container"], ["mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "color", "click"], ["svgIcon", "star"]], template: function BookmarkButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function BookmarkButtonComponent_Template_button_click_1_listener() { return ctx.createContext(); });
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelement(3, "mat-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 2, "igo.context.bookmarkButton.create"))("color", ctx.color);
    } }, directives: [i5.MatButton, i6$2.MatTooltip, i9.MatIcon], pipes: [i6$1.TranslatePipe], styles: [".igo-bookmark-button-container[_ngcontent-%COMP%]{width:40px}.igo-bookmark-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff}.igo-bookmark-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#efefef}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BookmarkButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-bookmark-button',
                templateUrl: './bookmark-button.component.html',
                styleUrls: ['./bookmark-button.component.scss']
            }]
    }], function () { return [{ type: i1$2.MatDialog }, { type: ContextService }, { type: i3.LanguageService }, { type: i3.MessageService }]; }, { map: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

class PoiDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
PoiDialogComponent.ɵfac = function PoiDialogComponent_Factory(t) { return new (t || PoiDialogComponent)(i0.ɵɵdirectiveInject(i1$2.MatDialogRef)); };
PoiDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoiDialogComponent, selectors: [["igo-poi-dialog"]], decls: 14, vars: 14, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", ""], ["matInput", "", "required", "", "autocomplete", "off", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-button", "", 3, "click"]], template: function PoiDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelementStart(5, "input", 2);
        i0.ɵɵlistener("ngModelChange", function PoiDialogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.title = $event; });
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵlistener("click", function PoiDialogComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(ctx.title); });
        i0.ɵɵtext(9);
        i0.ɵɵpipe(10, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 5);
        i0.ɵɵlistener("click", function PoiDialogComponent_Template_button_click_11_listener() { return ctx.dialogRef.close(false); });
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 6, "igo.context.poiButton.dialog.title"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(6, 8, "igo.context.poiButton.dialog.placeholder"))("ngModel", ctx.title);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 10, "igo.common.confirmDialog.confirmBtn"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 12, "igo.common.confirmDialog.cancelBtn"), " ");
    } }, directives: [i1$2.MatDialogTitle, i1$2.MatDialogContent, i3$1.MatFormField, i3$2.MatInput, i4.DefaultValueAccessor, i4.RequiredValidator, i4.NgControlStatus, i4.NgModel, i1$2.MatDialogActions, i5.MatButton], pipes: [i6$1.TranslatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoiDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-poi-dialog',
                templateUrl: './poi-dialog.component.html'
            }]
    }], function () { return [{ type: i1$2.MatDialogRef }]; }, null); })();

class PoiService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.baseUrl = this.config.getConfig('context.url');
    }
    get() {
        if (!this.baseUrl) {
            return EMPTY;
        }
        const url = this.baseUrl + '/pois';
        return this.http.get(url);
    }
    delete(id) {
        const url = this.baseUrl + '/pois/' + id;
        return this.http.delete(url);
    }
    create(context) {
        const url = this.baseUrl + '/pois';
        return this.http.post(url, context);
    }
}
PoiService.ɵfac = function PoiService_Factory(t) { return new (t || PoiService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i3.ConfigService)); };
PoiService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoiService, factory: PoiService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoiService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i3.ConfigService }]; }, null); })();

function PoiButtonComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵlistener("click", function PoiButtonComponent_mat_option_8_Template_mat_option_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const poi_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.zoomOnPoi(poi_r1.id); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 7);
    i0.ɵɵlistener("click", function PoiButtonComponent_mat_option_8_Template_button_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const poi_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.deletePoi(poi_r1); });
    i0.ɵɵelement(4, "mat-icon", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const poi_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", poi_r1.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(poi_r1.title);
} }
class PoiButtonComponent {
    constructor(dialog, authService, poiService, messageService, languageService, confirmDialogService) {
        this.dialog = dialog;
        this.authService = authService;
        this.poiService = poiService;
        this.messageService = messageService;
        this.languageService = languageService;
        this.confirmDialogService = confirmDialogService;
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    ngOnInit() {
        this.authenticate$$ = this.authService.authenticate$.subscribe(auth => {
            if (auth) {
                this.getPois();
            }
        });
    }
    ngOnDestroy() {
        this.authenticate$$.unsubscribe();
    }
    deletePoi(poi) {
        if (poi && poi.id) {
            const translate = this.languageService.translate;
            this.confirmDialogService
                .open(translate.instant('igo.context.poiButton.dialog.confirmDelete'))
                .subscribe(confirm => {
                if (confirm) {
                    this.poiService.delete(poi.id).subscribe(() => {
                        const title = translate.instant('igo.context.poiButton.dialog.deleteTitle');
                        const message = translate.instant('igo.context.poiButton.dialog.deleteMsg', {
                            value: poi.title
                        });
                        this.messageService.info(message, title);
                        this.pois = this.pois.filter(p => p.id !== poi.id);
                    }, err => {
                        err.error.title = 'DELETE Pois';
                        this.messageService.showError(err);
                    });
                }
            });
        }
    }
    getPois() {
        this.poiService.get().pipe(take(1)).subscribe(rep => {
            this.pois = rep;
        }, err => {
            err.error.title = 'GET Pois';
            this.messageService.showError(err);
        });
    }
    createPoi() {
        const view = this.map.ol.getView();
        const proj = view.getProjection().getCode();
        const center = new olPoint(view.getCenter()).transform(proj, 'EPSG:4326');
        const poi = {
            title: '',
            x: center.getCoordinates()[0],
            y: center.getCoordinates()[1],
            zoom: view.getZoom()
        };
        this.dialog
            .open(PoiDialogComponent, { disableClose: false })
            .afterClosed()
            .subscribe(title => {
            if (title) {
                poi.title = title;
                this.poiService.create(poi).subscribe(newPoi => {
                    const translate = this.languageService.translate;
                    const titleD = translate.instant('igo.context.poiButton.dialog.createTitle');
                    const message = translate.instant('igo.context.poiButton.dialog.createMsg', {
                        value: poi.title
                    });
                    this.messageService.success(message, titleD);
                    poi.id = newPoi.id;
                    this.pois.push(poi);
                }, err => {
                    err.error.title = 'POST Pois';
                    this.messageService.showError(err);
                });
            }
        });
    }
    zoomOnPoi(id) {
        const poi = this.pois.find(p => p.id === id);
        const center = olproj.fromLonLat([Number(poi.x), Number(poi.y)], this.map.projection);
        this.map.ol.getView().animate({
            center,
            zoom: poi.zoom,
            duration: 500,
            easing: oleasing.easeOut
        });
    }
}
PoiButtonComponent.ɵfac = function PoiButtonComponent_Factory(t) { return new (t || PoiButtonComponent)(i0.ɵɵdirectiveInject(i1$2.MatDialog), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(PoiService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i5$1.ConfirmDialogService)); };
PoiButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoiButtonComponent, selectors: [["igo-poi-button"]], inputs: { map: "map", color: "color" }, decls: 9, vars: 7, consts: [["floatPlaceholder", "never", 3, "placeholder"], [3, "click"], [1, "titlePoi"], ["igoStopPropagation", "", "mat-icon-button", "", "color", "primary", 1, "addPoi", "buttonPoi", 3, "click"], ["svgIcon", "plus-circle"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["igoStopPropagation", "", "mat-icon-button", "", "color", "warn", 1, "deletePoi", "buttonPoi", 3, "click"], ["svgIcon", "delete"]], template: function PoiButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-select", 0);
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵelementStart(2, "mat-option", 1);
        i0.ɵɵlistener("click", function PoiButtonComponent_Template_mat_option_click_2_listener() { return ctx.createPoi(); });
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function PoiButtonComponent_Template_button_click_6_listener() { return ctx.createPoi(); });
        i0.ɵɵelement(7, "mat-icon", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, PoiButtonComponent_mat_option_8_Template, 5, 2, "mat-option", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(1, 3, "igo.context.poiButton.placeholder"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 5, "igo.context.poiButton.create"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.pois);
    } }, directives: [i12.MatSelect, i11.MatOption, i5.MatButton, i5$1.StopPropagationDirective, i9.MatIcon, i7.NgForOf], pipes: [i6$1.TranslatePipe], styles: ["mat-select[_ngcontent-%COMP%]{width:150px;background-color:#fff;height:40px;padding-top:0}mat-select[_ngcontent-%COMP%]     .mat-select-trigger{height:40px}mat-select[_ngcontent-%COMP%]     .mat-select-value-text, mat-select[_ngcontent-%COMP%]     .mat-select-placeholder{padding:5px;top:12px;position:relative}.mat-option[_ngcontent-%COMP%]{text-overflow:inherit}.titlePoi[_ngcontent-%COMP%]{max-width:135px;overflow:hidden;text-overflow:ellipsis;float:left}.buttonPoi[_ngcontent-%COMP%]{float:right;margin:4px -10px 4px 0}.buttonPoi[_ngcontent-%COMP%]     .mat-icon{margin:0 8px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoiButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-poi-button',
                templateUrl: './poi-button.component.html',
                styleUrls: ['./poi-button.component.scss']
            }]
    }], function () { return [{ type: i1$2.MatDialog }, { type: i2.AuthService }, { type: PoiService }, { type: i3.MessageService }, { type: i3.LanguageService }, { type: i5$1.ConfirmDialogService }]; }, { map: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

class UserDialogComponent {
    constructor(dialogRef, auth, storageService) {
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.storageService = storageService;
        const decodeToken = this.auth.decodeToken();
        this.user = decodeToken.user;
        this.exp = new Date(decodeToken.exp * 1000).toLocaleString();
    }
    clearPreferences() {
        this.storageService.clear();
    }
}
UserDialogComponent.ɵfac = function UserDialogComponent_Factory(t) { return new (t || UserDialogComponent)(i0.ɵɵdirectiveInject(i1$2.MatDialogRef), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.StorageService)); };
UserDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserDialogComponent, selectors: [["igo-user-dialog"]], decls: 20, vars: 18, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-dialog-actions", "", 2, "justify-content", "center"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function UserDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "p");
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 2);
        i0.ɵɵlistener("click", function UserDialogComponent_Template_button_click_13_listener() { return ctx.clearPreferences(); });
        i0.ɵɵtext(14);
        i0.ɵɵpipe(15, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "br");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 3);
        i0.ɵɵelementStart(18, "button", 4);
        i0.ɵɵlistener("click", function UserDialogComponent_Template_button_click_18_listener() { return ctx.dialogRef.close(false); });
        i0.ɵɵtext(19, " OK ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 8, "igo.context.userButton.infoTitle"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(6, 10, "igo.context.userButton.dialog.user"), ": ", ctx.user.sourceId, "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(9, 12, "igo.context.userButton.dialog.email"), ": ", ctx.user.email, "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(12, 14, "igo.context.userButton.dialog.expiration"), ": ", ctx.exp, "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 16, "igo.context.userButton.dialog.clearPreferences"), " ");
    } }, directives: [i1$2.MatDialogTitle, i1$2.MatDialogContent, i5.MatButton, i1$2.MatDialogActions], pipes: [i6$1.TranslatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-user-dialog',
                templateUrl: './user-dialog.component.html'
            }]
    }], function () { return [{ type: i1$2.MatDialogRef }, { type: i2.AuthService }, { type: i3.StorageService }]; }, null); })();

function userButtonSlideInOut() {
    return trigger('userButtonState', [
        state('collapse', style({
            width: '0',
            overflow: 'hidden',
            display: 'none'
        })),
        state('expand', style({
            overflow: 'hidden',
            display: 'display'
        })),
        transition('collapse => expand', animate('200ms')),
        transition('expand => collapse', animate('200ms'))
    ]);
}

function UserButtonComponent_div_0_igo_poi_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-poi-button", 9);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r1.color)("map", ctx_r1.map);
} }
function UserButtonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, UserButtonComponent_div_0_igo_poi_button_2_Template, 1, 2, "igo-poi-button", 3);
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function UserButtonComponent_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.infoUser(); });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelement(5, "mat-icon", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 4);
    i0.ɵɵlistener("click", function UserButtonComponent_div_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.logout(); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelement(8, "mat-icon", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 7);
    i0.ɵɵlistener("click", function UserButtonComponent_div_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.accountClick(); });
    i0.ɵɵelement(10, "mat-icon", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@userButtonState", ctx_r0.expand ? "expand" : "collapse");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasApi);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(4, 7, "igo.context.userButton.infoTitle"))("color", ctx_r0.color);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(7, 9, "igo.context.userButton.logout"))("color", ctx_r0.color);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("color", ctx_r0.auth.authenticated ? ctx_r0.color : "warn");
} }
class UserButtonComponent {
    constructor(dialog, config, auth) {
        this.dialog = dialog;
        this.config = config;
        this.auth = auth;
        this.expand = false;
        this.visible = false;
        this.hasApi = false;
        this.visible = this.config.getConfig('auth') ? true : false;
        this.hasApi = this.config.getConfig('context.url') !== undefined;
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    accountClick() {
        if (this.auth.authenticated) {
            this.expand = !this.expand;
        }
        else {
            this.auth.logout();
        }
    }
    logout() {
        this.expand = false;
        this.auth.logout();
    }
    infoUser() {
        this.dialog.open(UserDialogComponent, { disableClose: false });
    }
}
UserButtonComponent.ɵfac = function UserButtonComponent_Factory(t) { return new (t || UserButtonComponent)(i0.ɵɵdirectiveInject(i1$2.MatDialog), i0.ɵɵdirectiveInject(i3.ConfigService), i0.ɵɵdirectiveInject(i2.AuthService)); };
UserButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserButtonComponent, selectors: [["igo-user-button"]], inputs: { map: "map", color: "color" }, decls: 1, vars: 1, consts: [["class", "igo-user-button-container", 4, "ngIf"], [1, "igo-user-button-container"], [1, "igo-user-button-more-container"], [3, "color", "map", 4, "ngIf"], ["mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "color", "click"], ["svgIcon", "information-outline"], ["svgIcon", "power"], ["mat-icon-button", "", 3, "color", "click"], ["svgIcon", "account-box"], [3, "color", "map"]], template: function UserButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, UserButtonComponent_div_0_Template, 11, 11, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [i7.NgIf, i5.MatButton, i6$2.MatTooltip, i9.MatIcon, PoiButtonComponent], pipes: [i6$1.TranslatePipe], styles: [".igo-user-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff}.igo-user-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#efefef}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.igo-user-button-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{position:absolute;bottom:0}}.igo-user-button-more-container[_ngcontent-%COMP%]{float:left;height:40px}.igo-user-button-more-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:2px;float:left}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.igo-user-button-more-container[_ngcontent-%COMP%]{height:80px;width:150px;position:relative;left:24px}}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"], data: { animation: [userButtonSlideInOut()] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-user-button',
                templateUrl: './user-button.component.html',
                styleUrls: ['./user-button.component.scss'],
                animations: [userButtonSlideInOut()]
            }]
    }], function () { return [{ type: i1$2.MatDialog }, { type: i3.ConfigService }, { type: i2.AuthService }]; }, { map: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

class IgoContextMapButtonModule {
    static forRoot() {
        return {
            ngModule: IgoContextMapButtonModule
        };
    }
}
IgoContextMapButtonModule.ɵfac = function IgoContextMapButtonModule_Factory(t) { return new (t || IgoContextMapButtonModule)(); };
IgoContextMapButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoContextMapButtonModule });
IgoContextMapButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PoiService], imports: [[
            CommonModule,
            IgoLanguageModule,
            IgoConfirmDialogModule,
            IgoStopPropagationModule,
            IgoAuthModule,
            FormsModule,
            MatIconModule,
            MatButtonModule,
            MatSelectModule,
            MatOptionModule,
            MatTooltipModule,
            MatFormFieldModule,
            MatDialogModule,
            MatInputModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoContextMapButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoLanguageModule,
                    IgoConfirmDialogModule,
                    IgoStopPropagationModule,
                    IgoAuthModule,
                    FormsModule,
                    MatIconModule,
                    MatButtonModule,
                    MatSelectModule,
                    MatOptionModule,
                    MatTooltipModule,
                    MatFormFieldModule,
                    MatDialogModule,
                    MatInputModule
                ],
                exports: [BookmarkButtonComponent, PoiButtonComponent, UserButtonComponent, BookmarkDialogComponent],
                declarations: [
                    BookmarkButtonComponent,
                    BookmarkDialogComponent,
                    PoiButtonComponent,
                    PoiDialogComponent,
                    UserButtonComponent,
                    UserDialogComponent
                ],
                providers: [PoiService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoContextMapButtonModule, { declarations: [BookmarkButtonComponent,
        BookmarkDialogComponent,
        PoiButtonComponent,
        PoiDialogComponent,
        UserButtonComponent,
        UserDialogComponent], imports: [CommonModule,
        IgoLanguageModule,
        IgoConfirmDialogModule,
        IgoStopPropagationModule,
        IgoAuthModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule], exports: [BookmarkButtonComponent, PoiButtonComponent, UserButtonComponent, BookmarkDialogComponent] }); })();

const CONTEXT_DIRECTIVES = [
    MapContextDirective,
    LayerContextDirective
];
class IgoContextManagerModule {
    static forRoot() {
        return {
            ngModule: IgoContextManagerModule
        };
    }
}
IgoContextManagerModule.ɵfac = function IgoContextManagerModule_Factory(t) { return new (t || IgoContextManagerModule)(); };
IgoContextManagerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoContextManagerModule });
IgoContextManagerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            MatListModule,
            MatCheckboxModule,
            MatRadioModule,
            MatDialogModule,
            MatMenuModule,
            MatOptionModule,
            MatAutocompleteModule,
            IgoAuthModule,
            IgoListModule,
            IgoKeyValueModule,
            IgoCollapsibleModule,
            IgoStopPropagationModule,
            IgoLanguageModule,
            IgoContextImportExportModule,
            IgoContextMapButtonModule,
            IgoActionbarModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoContextManagerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTooltipModule,
                    MatListModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatDialogModule,
                    MatMenuModule,
                    MatOptionModule,
                    MatAutocompleteModule,
                    IgoAuthModule,
                    IgoListModule,
                    IgoKeyValueModule,
                    IgoCollapsibleModule,
                    IgoStopPropagationModule,
                    IgoLanguageModule,
                    IgoContextImportExportModule,
                    IgoContextMapButtonModule,
                    IgoActionbarModule
                ],
                exports: [
                    ContextListComponent,
                    ContextListBindingDirective,
                    ContextItemComponent,
                    ContextFormComponent,
                    ContextEditComponent,
                    ContextEditBindingDirective,
                    ContextPermissionsComponent,
                    ContextPermissionsBindingDirective,
                    ...CONTEXT_DIRECTIVES
                ],
                declarations: [
                    ContextListComponent,
                    ContextListBindingDirective,
                    ContextItemComponent,
                    ContextFormComponent,
                    ContextEditComponent,
                    ContextEditBindingDirective,
                    ContextPermissionsComponent,
                    ContextPermissionsBindingDirective,
                    ...CONTEXT_DIRECTIVES
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoContextManagerModule, { declarations: [ContextListComponent,
        ContextListBindingDirective,
        ContextItemComponent,
        ContextFormComponent,
        ContextEditComponent,
        ContextEditBindingDirective,
        ContextPermissionsComponent,
        ContextPermissionsBindingDirective, MapContextDirective,
        LayerContextDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatListModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDialogModule,
        MatMenuModule,
        MatOptionModule,
        MatAutocompleteModule,
        IgoAuthModule,
        IgoListModule,
        IgoKeyValueModule,
        IgoCollapsibleModule,
        IgoStopPropagationModule,
        IgoLanguageModule,
        IgoContextImportExportModule,
        IgoContextMapButtonModule,
        IgoActionbarModule], exports: [ContextListComponent,
        ContextListBindingDirective,
        ContextItemComponent,
        ContextFormComponent,
        ContextEditComponent,
        ContextEditBindingDirective,
        ContextPermissionsComponent,
        ContextPermissionsBindingDirective, MapContextDirective,
        LayerContextDirective] }); })();

class ShareMapService {
    constructor(contextService, messageService, route) {
        this.contextService = contextService;
        this.messageService = messageService;
        this.route = route;
    }
    getUrlWithApi(formValues) {
        return `${location.origin + location.pathname}?context=${formValues.uri}`;
    }
    createContextShared(map, formValues) {
        const context = this.contextService.getContextFromMap(map);
        context.scope = 'public';
        context.title = formValues.title;
        context.uri = formValues.uri;
        return this.contextService.create(context);
    }
    updateContextShared(map, formValues, id) {
        const context = this.contextService.getContextFromMap(map);
        return this.contextService.update(id, {
            title: formValues.title,
            map: context.map
        });
    }
    getUrlWithoutApi(map, publicShareOption) {
        if (!this.route ||
            !this.route.options.visibleOnLayersKey ||
            !this.route.options.visibleOffLayersKey ||
            !map.viewController.getZoom()) {
            return;
        }
        const llc = publicShareOption.layerlistControls.querystring;
        let visibleKey = this.route.options.visibleOnLayersKey;
        let invisibleKey = this.route.options.visibleOffLayersKey;
        const layers = map.layers;
        const visibleLayers = layers.filter(lay => lay.visible && !lay.isIgoInternalLayer);
        const invisibleLayers = layers.filter(lay => !lay.visible && !lay.isIgoInternalLayer);
        if (visibleLayers.length === 0) {
            visibleKey = '';
        }
        if (invisibleLayers.length === 0) {
            invisibleKey = '';
        }
        let layersUrl = '';
        let layersToLoop = [];
        if (visibleLayers.length > invisibleLayers.length) {
            layersUrl = `${visibleKey}=*&${invisibleKey}=`;
            layersToLoop = invisibleLayers;
        }
        else {
            layersUrl = `${invisibleKey}=*&${visibleKey}=`;
            layersToLoop = visibleLayers;
        }
        for (const layer of layersToLoop) {
            if (layer.id) {
                layersUrl += layer.id + ',';
            }
        }
        const contextLayersID = [];
        const contextLayers = this.contextService.context$.value.layers;
        for (const contextLayer of contextLayers) {
            if (typeof contextLayer.id !== 'undefined' || typeof contextLayer.source !== 'undefined') {
                contextLayersID.push(contextLayer.id || contextLayer.source.id);
            }
        }
        const addedLayersQueryParamsWms = this.makeLayersByService(layers, contextLayersID, 'wms');
        const addedLayersQueryParamsWmts = this.makeLayersByService(layers, contextLayersID, 'wmts');
        const addedLayersQueryParamsArcgisRest = this.makeLayersByService(layers, contextLayersID, 'arcgisrest');
        const addedLayersQueryParamsImageArcgisRest = this.makeLayersByService(layers, contextLayersID, 'imagearcgisrest');
        const addedLayersQueryParamsTileArcgisRest = this.makeLayersByService(layers, contextLayersID, 'tilearcgisrest');
        layersUrl = layersUrl.substr(0, layersUrl.length - 1);
        const zoomKey = this.route.options.zoomKey;
        const centerKey = this.route.options.centerKey;
        const contextKey = this.route.options.contextKey;
        const zoom = `${zoomKey}=${map.viewController.getZoom()}`;
        const arrayCenter = map.viewController.getCenter('EPSG:4326') || [];
        const long = arrayCenter[0].toFixed(5).replace(/\.([^0]+)0+$/, '.$1');
        const lat = arrayCenter[1].toFixed(5).replace(/\.([^0]+)0+$/, '.$1');
        const center = `${centerKey}=${long},${lat}`.replace(/.00000/g, '');
        let context = '';
        if (this.contextService.context$.value) {
            context = `${contextKey}=${this.contextService.context$.value.uri}`;
        }
        let url = `${location.origin}${location.pathname}?${context}&${zoom}&${center}&${layersUrl}&${llc}&${addedLayersQueryParamsWms}&${llc}&${addedLayersQueryParamsWmts}&${addedLayersQueryParamsArcgisRest}&${addedLayersQueryParamsImageArcgisRest}&${addedLayersQueryParamsTileArcgisRest}`;
        for (let i = 0; i < 5; i++) {
            url = url.replace(/&&/g, '&');
            url = url.endsWith('&') ? url.slice(0, -1) : url;
        }
        url = url.endsWith('&') ? url.slice(0, -1) : url;
        url = url.replace('?&wm', '&wm');
        url = url.replace('?&', '?');
        return url;
    }
    makeLayersByService(layers, contextLayersID, typeService) {
        const addedLayersByService = [];
        for (const layer of layers.filter(l => { var _a; return ((_a = l.dataSource.options) === null || _a === void 0 ? void 0 : _a.type) === typeService; })) {
            if (contextLayersID.indexOf(layer.id) === -1) {
                let linkUrl = encodeURIComponent(layer.dataSource.options.url);
                let addedLayer = '';
                let layerVersion;
                switch (layer.dataSource.options.type.toLowerCase()) {
                    case 'wms':
                        const datasourceOptions = layer.dataSource.options;
                        addedLayer = encodeURIComponent(datasourceOptions.params.LAYERS);
                        layerVersion = datasourceOptions.params.VERSION === '1.3.0' ? layerVersion : datasourceOptions.params.VERSION;
                        break;
                    case 'wmts':
                    case 'arcgisrest':
                    case 'imagearcgisrest':
                    case 'tilearcgisrest':
                        addedLayer = encodeURIComponent(layer.dataSource.options.layer);
                        break;
                }
                const addedLayerPosition = `${addedLayer}:igoz${layer.zIndex}`;
                let version = '';
                if (layerVersion) {
                    const operator = layer.dataSource.options.url.indexOf('?') === -1 ? '?' : '&';
                    version = encodeURIComponent(`${operator}VERSION=${layerVersion}`);
                }
                linkUrl = `${linkUrl}${version}`;
                if (!addedLayersByService.find(definedUrl => definedUrl.url === linkUrl)) {
                    addedLayersByService.push({
                        url: linkUrl,
                        layers: [addedLayerPosition]
                    });
                }
                else {
                    addedLayersByService.forEach(service => {
                        if (service.url === linkUrl) {
                            service.layers.push(addedLayerPosition);
                        }
                    });
                }
            }
        }
        let addedLayersQueryParams = '';
        if (addedLayersByService.length >= 1) {
            let linkUrlKey;
            let layersKey;
            /*
            const linkUrlKey = (typeService === 'wms') ? this.route.options.wmsUrlKey :
              (typeService === 'wmts') ? this.route.options.wmtsUrlKey : '' ;
            const layersKey = (typeService === 'wms') ? this.route.options.wmsLayersKey :
              (typeService === 'wmts') ? this.route.options.wmtsLayersKey : '' ;
      */
            switch (typeService.toLowerCase()) {
                case 'wms':
                    linkUrlKey = this.route.options.wmsUrlKey;
                    layersKey = this.route.options.wmsLayersKey;
                    break;
                case 'wmts':
                    linkUrlKey = this.route.options.wmtsUrlKey;
                    layersKey = this.route.options.wmtsLayersKey;
                    break;
                case 'arcgisrest':
                    linkUrlKey = this.route.options.arcgisUrlKey;
                    layersKey = this.route.options.arcgisLayersKey;
                    break;
                case 'imagearcgisrest':
                    linkUrlKey = this.route.options.iarcgisUrlKey;
                    layersKey = this.route.options.iarcgisLayersKey;
                    break;
                case 'tilearcgisrest':
                    linkUrlKey = this.route.options.tarcgisUrlKey;
                    layersKey = this.route.options.tarcgisLayersKey;
                    break;
                default:
                    linkUrlKey = '';
                    layersKey = '';
            }
            let linkUrlQueryParams = '';
            let layersQueryParams = '';
            addedLayersByService.forEach(service => {
                linkUrlQueryParams += `${service.url},`;
                layersQueryParams += `(${service.layers.join(',')}),`;
            });
            linkUrlQueryParams = linkUrlQueryParams.endsWith(',')
                ? linkUrlQueryParams.slice(0, -1)
                : linkUrlQueryParams;
            layersQueryParams = layersQueryParams.endsWith(',')
                ? layersQueryParams.slice(0, -1)
                : layersQueryParams;
            addedLayersQueryParams = `${linkUrlKey}=${linkUrlQueryParams}&${layersKey}=${layersQueryParams}`;
        }
        return addedLayersQueryParams;
    }
}
ShareMapService.ɵfac = function ShareMapService_Factory(t) { return new (t || ShareMapService)(i0.ɵɵinject(ContextService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i3.RouteService, 8)); };
ShareMapService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ShareMapService, factory: ShareMapService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShareMapService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ContextService }, { type: i3.MessageService }, { type: i3.RouteService, decorators: [{
                type: Optional
            }] }]; }, null); })();

function ShareMapApiComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r0.userId, "-");
} }
function ShareMapApiComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r1.form.valid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.context.shareMap.button"), " ");
} }
function ShareMapApiComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function ShareMapApiComponent_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.updateContextShared(ctx_r4.form.value); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.refreshBtn"), " ");
} }
function ShareMapApiComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelement(2, "textarea", 15, 16);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementStart(5, "button", 17);
    i0.ɵɵlistener("click", function ShareMapApiComponent_div_20_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8); const _r6 = i0.ɵɵreference(3); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.copyTextToClipboard(_r6); });
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelement(7, "mat-icon", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(4, 3, "igo.context.shareMap.placeholderLink"))("value", ctx_r3.url);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(6, 5, "igo.context.shareMap.copy"));
} }
class ShareMapApiComponent {
    constructor(languageService, messageService, auth, shareMapService, formBuilder) {
        this.languageService = languageService;
        this.messageService = messageService;
        this.auth = auth;
        this.shareMapService = shareMapService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.auth.authenticate$.subscribe(auth => {
            const decodeToken = this.auth.decodeToken();
            this.userId = decodeToken.user ? decodeToken.user.id : undefined;
            this.buildForm();
        });
    }
    createUrl(values = {}) {
        const inputs = Object.assign({}, values);
        inputs.uri = this.userId ? `${this.userId}-${values.uri}` : values.uri;
        this.url = this.shareMapService.getUrlWithApi(inputs);
        this.shareMapService.createContextShared(this.map, inputs).subscribe(rep => {
            this.idContextShared = rep.id;
            const title = this.languageService.translate.instant('igo.context.contextManager.dialog.saveTitle');
            const msg = this.languageService.translate.instant('igo.context.contextManager.dialog.saveMsg', {
                value: inputs.title
            });
            this.messageService.success(msg, title);
        }, err => {
            err.error.title = this.languageService.translate.instant('igo.context.shareMap.errorTitle');
            this.messageService.showError(err);
        });
    }
    updateContextShared(values = {}) {
        const inputs = Object.assign({}, values);
        inputs.uri = this.userId ? `${this.userId}-${values.uri}` : values.uri;
        this.shareMapService.updateContextShared(this.map, inputs, this.idContextShared).subscribe(rep => {
            const title = this.languageService.translate.instant('igo.context.contextManager.dialog.saveTitle');
            const msg = this.languageService.translate.instant('igo.context.contextManager.dialog.saveMsg', {
                value: inputs.title
            });
            this.messageService.success(msg, title);
        }, err => {
            err.error.title = this.languageService.translate.instant('igo.context.shareMap.errorTitle');
            this.messageService.showError(err);
        });
    }
    copyTextToClipboard(textArea) {
        const successful = Clipboard.copy(textArea);
        if (successful) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.context.shareMap.dialog.copyTitle');
            const msg = translate.instant('igo.context.shareMap.dialog.copyMsg');
            this.messageService.success(msg, title);
        }
    }
    buildForm() {
        this.url = undefined;
        const id = uuid();
        let title = 'Partage ';
        title += this.userId ? `(${this.userId}-${id})` : `(${id})`;
        this.form = this.formBuilder.group({
            title: [title],
            uri: [id]
        });
    }
}
ShareMapApiComponent.ɵfac = function ShareMapApiComponent_Factory(t) { return new (t || ShareMapApiComponent)(i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(ShareMapService), i0.ɵɵdirectiveInject(i4.FormBuilder)); };
ShareMapApiComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShareMapApiComponent, selectors: [["igo-share-map-api"]], inputs: { map: "map" }, decls: 21, vars: 18, consts: [[1, "igo-form", 3, "formGroup", "ngSubmit"], [1, "igo-input-container"], ["matInput", "", "required", "", "formControlName", "title", 3, "placeholder"], ["id", "uriInput", 1, "igo-input-container"], ["class", "prefix", 4, "ngIf"], [1, "fieldWrapper"], ["matInput", "", "required", "", "formControlName", "uri", 3, "readonly", "placeholder"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "submit", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"], ["class", "igo-input-container linkToShare", 4, "ngIf"], [1, "prefix"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "type", "button", 3, "click"], [1, "igo-input-container", "linkToShare"], ["matInput", "", "readonly", "", "rows", "3", 1, "textAreaWithButton", 3, "placeholder", "value"], ["textArea", ""], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", 3, "matTooltip", "click"], ["svgIcon", "content-copy"]], template: function ShareMapApiComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function ShareMapApiComponent_Template_form_ngSubmit_0_listener() { return ctx.createUrl(ctx.form.value); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementStart(5, "mat-error");
        i0.ɵɵtext(6);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 3);
        i0.ɵɵelementStart(9, "mat-form-field");
        i0.ɵɵtemplate(10, ShareMapApiComponent_span_10_Template, 2, 1, "span", 4);
        i0.ɵɵelementStart(11, "span", 5);
        i0.ɵɵelement(12, "input", 6);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-error");
        i0.ɵɵtext(15);
        i0.ɵɵpipe(16, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 7);
        i0.ɵɵtemplate(18, ShareMapApiComponent_button_18_Template, 3, 4, "button", 8);
        i0.ɵɵtemplate(19, ShareMapApiComponent_button_19_Template, 3, 3, "button", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, ShareMapApiComponent_div_20_Template, 9, 7, "div", 10);
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(4, 10, "igo.context.contextManager.form.title"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 12, "igo.context.contextManager.form.titleRequired"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.userId);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("readonly", !ctx.userId)("placeholder", i0.ɵɵpipeBind1(13, 14, "igo.context.contextManager.form.uri"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 16, "igo.context.contextManager.form.uriRequired"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.url);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.url);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.url);
    } }, directives: [i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.FormGroupDirective, i3$1.MatFormField, i3$2.MatInput, i4.DefaultValueAccessor, i4.RequiredValidator, i4.NgControlStatus, i4.FormControlName, i3$1.MatError, i7.NgIf, i5.MatButton, i6$2.MatTooltip, i9.MatIcon], pipes: [i6$1.TranslatePipe], styles: ["@charset \"UTF-8\";mat-form-field[_ngcontent-%COMP%]{width:100%}#uriInput[_ngcontent-%COMP%]   .fieldWrapper[_ngcontent-%COMP%]{display:block;overflow:hidden}#uriInput[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{float:left}.linkToShare\\a0[_ngcontent-%COMP%] {padding:25px 5px 5px}.linkToShare\\a0[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;width:100%;line-height:1.3;height:40px;overflow-y:hidden;word-wrap:normal;word-break:break-all}.linkToShare\\a0[_ngcontent-%COMP%]   textarea.textAreaWithButton[_ngcontent-%COMP%]{width:calc(100% - 60px)}.linkToShare\\a0[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{float:right;margin:-10px 0}.igo-form[_ngcontent-%COMP%]{padding:20px 5px 5px}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center;padding-top:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShareMapApiComponent, [{
        type: Component,
        args: [{
                selector: 'igo-share-map-api',
                templateUrl: './share-map-api.component.html',
                styleUrls: ['./share-map-api.component.scss']
            }]
    }], function () { return [{ type: i3.LanguageService }, { type: i3.MessageService }, { type: i2.AuthService }, { type: ShareMapService }, { type: i4.FormBuilder }]; }, { map: [{
            type: Input
        }] }); })();

function ShareMapUrlComponent_h4_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.included"));
} }
function ShareMapUrlComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.context"));
} }
function ShareMapUrlComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.center"));
} }
function ShareMapUrlComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.zoom"));
} }
function ShareMapUrlComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.addedLayers"));
} }
function ShareMapUrlComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.visibleInvisible"));
} }
function ShareMapUrlComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.excluded"));
} }
function ShareMapUrlComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.order"));
} }
function ShareMapUrlComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.opacity"));
} }
function ShareMapUrlComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.filterOgc"));
} }
function ShareMapUrlComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.filterTime"));
} }
class ShareMapUrlComponent {
    constructor(languageService, messageService, shareMapService, cdRef) {
        this.languageService = languageService;
        this.messageService = messageService;
        this.shareMapService = shareMapService;
        this.cdRef = cdRef;
        this.publicShareOption = {
            layerlistControls: { querystring: '' }
        };
    }
    ngOnInit() {
        this.resetUrl();
        this.mapState$$ = combineLatest([
            this.map.viewController.state$,
            this.map.status$
        ]).subscribe(c => {
            this.resetUrl();
            this.cdRef.detectChanges();
        });
    }
    ngAfterViewInit() {
        this.resetUrl();
    }
    ngOnDestroy() {
        this.mapState$$.unsubscribe();
    }
    resetUrl(values = {}) {
        this.url = this.shareMapService.getUrlWithoutApi(this.map, this.publicShareOption);
    }
    copyTextToClipboard(textArea) {
        const successful = Clipboard.copy(textArea);
        if (successful) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.context.shareMap.dialog.copyTitle');
            const msg = translate.instant('igo.context.shareMap.dialog.copyMsg');
            this.messageService.success(msg, title);
        }
    }
}
ShareMapUrlComponent.ɵfac = function ShareMapUrlComponent_Factory(t) { return new (t || ShareMapUrlComponent)(i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(ShareMapService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ShareMapUrlComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShareMapUrlComponent, selectors: [["igo-share-map-url"]], inputs: { map: "map" }, decls: 37, vars: 40, consts: [[1, "igo-input-container", "linkToShare"], ["matInput", "", "readonly", "", "rows", "3", 3, "placeholder", "value"], ["textArea", ""], [1, "igo-form-button-group"], ["mat-raised-button", "", 3, "click"], ["svgIcon", "content-copy"], [1, "mat-typography"], [4, "ngIf"]], template: function ShareMapUrlComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelement(2, "textarea", 1, 2);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function ShareMapUrlComponent_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r12); const _r0 = i0.ɵɵreference(3); return ctx.copyTextToClipboard(_r0); });
        i0.ɵɵelement(7, "mat-icon", 5);
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div");
        i0.ɵɵelement(11, "br");
        i0.ɵɵelementStart(12, "section", 6);
        i0.ɵɵtemplate(13, ShareMapUrlComponent_h4_13_Template, 3, 3, "h4", 7);
        i0.ɵɵpipe(14, "translate");
        i0.ɵɵelementStart(15, "ul");
        i0.ɵɵtemplate(16, ShareMapUrlComponent_li_16_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(17, "translate");
        i0.ɵɵtemplate(18, ShareMapUrlComponent_li_18_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(19, "translate");
        i0.ɵɵtemplate(20, ShareMapUrlComponent_li_20_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(21, "translate");
        i0.ɵɵtemplate(22, ShareMapUrlComponent_li_22_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(23, "translate");
        i0.ɵɵtemplate(24, ShareMapUrlComponent_li_24_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(25, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(26, ShareMapUrlComponent_h4_26_Template, 3, 3, "h4", 7);
        i0.ɵɵpipe(27, "translate");
        i0.ɵɵelementStart(28, "ul");
        i0.ɵɵtemplate(29, ShareMapUrlComponent_li_29_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(30, "translate");
        i0.ɵɵtemplate(31, ShareMapUrlComponent_li_31_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(32, "translate");
        i0.ɵɵtemplate(33, ShareMapUrlComponent_li_33_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(34, "translate");
        i0.ɵɵtemplate(35, ShareMapUrlComponent_li_35_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(36, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(4, 14, "igo.context.shareMap.placeholderLink"))("value", ctx.url);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 16, "igo.context.shareMap.copy"), " ");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(14, 18, "igo.context.shareMap.included") !== "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(17, 20, "igo.context.shareMap.context") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(19, 22, "igo.context.shareMap.center") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(21, 24, "igo.context.shareMap.zoom") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(23, 26, "igo.context.shareMap.addedLayers") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(25, 28, "igo.context.shareMap.visibleInvisible") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(27, 30, "igo.context.shareMap.excluded") !== "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(30, 32, "igo.context.shareMap.order") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(32, 34, "igo.context.shareMap.opacity") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(34, 36, "igo.context.shareMap.filterOgc") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(36, 38, "igo.context.shareMap.filterTime") !== "");
    } }, directives: [i3$1.MatFormField, i3$2.MatInput, i5.MatButton, i9.MatIcon, i7.NgIf], pipes: [i6$1.TranslatePipe], styles: ["@charset \"UTF-8\";mat-form-field[_ngcontent-%COMP%]{width:100%}.linkToShare\\a0[_ngcontent-%COMP%] {padding:25px 5px 5px}.linkToShare\\a0[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;width:100%;line-height:1.3;height:40px;overflow-y:hidden;word-wrap:normal;word-break:break-all}.linkToShare\\a0[_ngcontent-%COMP%]   textarea.textAreaWithButton[_ngcontent-%COMP%]{width:calc(100% - 60px)}.linkToShare\\a0[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{float:right;margin:-10px 0}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center;padding-top:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShareMapUrlComponent, [{
        type: Component,
        args: [{
                selector: 'igo-share-map-url',
                templateUrl: './share-map-url.component.html',
                styleUrls: ['./share-map-url.component.scss']
            }]
    }], function () { return [{ type: i3.LanguageService }, { type: i3.MessageService }, { type: ShareMapService }, { type: i0.ChangeDetectorRef }]; }, { map: [{
            type: Input
        }] }); })();

function ShareMapComponent_mat_tab_group_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab-group");
    i0.ɵɵelementStart(1, "mat-tab", 2);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "igo-share-map-api", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-tab", 2);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelement(6, "igo-share-map-url", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(2, 4, "igo.context.shareMap.shareWithApi"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("map", ctx_r0.map);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(5, 6, "igo.context.shareMap.shareWithUrl"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("map", ctx_r0.map);
} }
function ShareMapComponent_igo_share_map_url_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-share-map-url", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("map", ctx_r1.map);
} }
class ShareMapComponent {
    constructor(config) {
        this.config = config;
        this.hasApi = false;
        this.hasApi = this.config.getConfig('context.url') ? true : false;
    }
}
ShareMapComponent.ɵfac = function ShareMapComponent_Factory(t) { return new (t || ShareMapComponent)(i0.ɵɵdirectiveInject(i3.ConfigService)); };
ShareMapComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShareMapComponent, selectors: [["igo-share-map"]], inputs: { map: "map" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "map", 4, "ngIf"], [3, "label"], [3, "map"]], template: function ShareMapComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ShareMapComponent_mat_tab_group_0_Template, 7, 8, "mat-tab-group", 0);
        i0.ɵɵtemplate(1, ShareMapComponent_igo_share_map_url_1_Template, 1, 1, "igo-share-map-url", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hasApi);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hasApi);
    } }, directives: [i7.NgIf, i3$4.MatTabGroup, i3$4.MatTab, ShareMapApiComponent, ShareMapUrlComponent], pipes: [i6$1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShareMapComponent, [{
        type: Component,
        args: [{
                selector: 'igo-share-map',
                templateUrl: './share-map.component.html',
                styleUrls: ['./share-map.component.scss']
            }]
    }], function () { return [{ type: i3.ConfigService }]; }, { map: [{
            type: Input
        }] }); })();

class IgoShareMapModule {
    static forRoot() {
        return {
            ngModule: IgoShareMapModule
        };
    }
}
IgoShareMapModule.ɵfac = function IgoShareMapModule_Factory(t) { return new (t || IgoShareMapModule)(); };
IgoShareMapModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoShareMapModule });
IgoShareMapModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatTooltipModule,
            MatTabsModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoShareMapModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatIconModule,
                    MatTooltipModule,
                    MatTabsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatButtonModule,
                    IgoLanguageModule
                ],
                exports: [ShareMapComponent, ShareMapUrlComponent, ShareMapApiComponent],
                declarations: [ShareMapComponent, ShareMapUrlComponent, ShareMapApiComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoShareMapModule, { declarations: [ShareMapComponent, ShareMapUrlComponent, ShareMapApiComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatTooltipModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        IgoLanguageModule], exports: [ShareMapComponent, ShareMapUrlComponent, ShareMapApiComponent] }); })();

function SidenavComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.sidenav.goBack"));
} }
function SidenavComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.sidenav.mainMenu"));
} }
function SidenavComponent_igo_panel_11_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function SidenavComponent_igo_panel_11_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.zoomToFeatureExtent(); });
    i0.ɵɵelement(1, "mat-icon", 20);
    i0.ɵɵelementEnd();
} }
function SidenavComponent_igo_panel_11_igo_feature_details_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-feature-details", 21);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("feature", ctx_r6.feature);
} }
const _c0 = function () { return ["collapsed", "initial"]; };
function SidenavComponent_igo_panel_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-panel", 6);
    i0.ɵɵelementStart(1, "button", 15);
    i0.ɵɵlistener("click", function SidenavComponent_igo_panel_11_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.toggleTopPanel(); });
    i0.ɵɵelement(2, "mat-icon", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SidenavComponent_igo_panel_11_button_3_Template, 2, 0, "button", 17);
    i0.ɵɵtemplate(4, SidenavComponent_igo_panel_11_igo_feature_details_4_Template, 1, 1, "igo-feature-details", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(4);
    i0.ɵɵproperty("title", ctx_r4.featureTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("svgIcon", i0.ɵɵpureFunction0(4, _c0).indexOf(_r1.state) >= 0 ? "arrow_downward" : "arrow_upward");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.feature.geometry);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(5, _c0).indexOf(_r1.state) >= 0);
} }
class SidenavComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.format = new GeoJSON();
        this._title = this.titleService.getTitle();
        this.topPanelState = 'initial';
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get opened() {
        return this._opened;
    }
    set opened(value) {
        this._opened = value;
    }
    get feature() {
        return this._feature;
    }
    set feature(value) {
        this._feature = value;
    }
    get tool() {
        return this._tool;
    }
    set tool(value) {
        this._tool = value;
    }
    get media() {
        return this._media;
    }
    set media(value) {
        this._media = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        if (value) {
            this._title = value;
        }
    }
    get featureTitle() {
        return this.feature ? getEntityTitle(this.feature) : undefined;
    }
    zoomToFeatureExtent() {
        if (this.feature.geometry) {
            const olFeature = this.format.readFeature(this.feature, {
                dataProjection: this.feature.projection,
                featureProjection: this.map.projection
            });
            moveToOlFeatures(this.map, [olFeature], FeatureMotion.Zoom);
        }
    }
    toggleTopPanel() {
        if (this.topPanelState === 'initial') {
            this.topPanelState = 'expanded';
        }
        else {
            this.topPanelState = 'initial';
        }
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(i0.ɵɵdirectiveInject(i1$3.Title)); };
SidenavComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidenavComponent, selectors: [["igo-sidenav"]], inputs: { map: "map", opened: "opened", feature: "feature", tool: "tool", media: "media", title: "title" }, decls: 12, vars: 8, consts: [["igoSidenavShim", "", "mode", "side", 3, "opened"], ["sidenav", ""], [1, "igo-sidenav-content"], ["initial", "50%", "initialMobile", "100%", "expanded", "calc(100% - 58px)", 3, "state"], ["topPanel", ""], [1, "igo-content"], [3, "title"], ["mat-icon-button", "", "panelLeftButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", 4, "ngIf"], ["mat-icon-button", "", "panelRightButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", 4, "ngIf"], ["igoFlexibleFill", "", 1, "igo-content"], [3, "title", 4, "ngIf"], ["mat-icon-button", "", "panelLeftButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip"], ["svgIcon", "arrow-back"], ["mat-icon-button", "", "panelRightButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip"], ["svgIcon", "menu"], ["mat-icon-button", "", "panelLeftButton", "", 1, "igo-icon-button", 3, "click"], [3, "svgIcon"], ["mat-icon-button", "", "panelRightButton", "", "class", "igo-icon-button", 3, "click", 4, "ngIf"], [3, "feature", 4, "ngIf"], ["mat-icon-button", "", "panelRightButton", "", 1, "igo-icon-button", 3, "click"], ["svgIcon", "zoom-in"], [3, "feature"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-sidenav", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "igo-flexible", 3, 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "igo-panel", 6);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵtemplate(8, SidenavComponent_button_8_Template, 3, 3, "button", 7);
        i0.ɵɵtemplate(9, SidenavComponent_button_9_Template, 3, 3, "button", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 9);
        i0.ɵɵtemplate(11, SidenavComponent_igo_panel_11_Template, 5, 6, "igo-panel", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("opened", ctx.opened);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("state", ctx.topPanelState);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("title", ctx.tool ? i0.ɵɵpipeBind1(7, 6, ctx.tool.title) : ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.tool);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.tool);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.feature && ctx.media !== "mobile");
    } }, directives: [i2$1.MatSidenav, i5$1.FlexibleComponent, i5$1.PanelComponent, i7.NgIf, i5.MatButton, i6$2.MatTooltip, i9.MatIcon, i1$1.FeatureDetailsComponent], pipes: [i6$1.TranslatePipe], styles: ["[_nghost-%COMP%]     .igo-flexible-fill .igo-container, .igo-sidenav-content[_ngcontent-%COMP%]   .igo-flexible-fill[_ngcontent-%COMP%]   .igo-container[_ngcontent-%COMP%]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}[_nghost-%COMP%]     .igo-flexible-fill .igo-container, .igo-sidenav-content[_ngcontent-%COMP%]   .igo-flexible-fill[_ngcontent-%COMP%]   .igo-container[_ngcontent-%COMP%]{border-top-width:1px;border-top-style:solid;border-top-color:#0003}mat-sidenav[_ngcontent-%COMP%]{-o-box-shadow:2px 0px 2px 0px #dddddd;box-shadow:2px 0 2px #ddd}[_nghost-%COMP%]{background-color:#fff}[_nghost-%COMP%]     mat-sidenav{z-index:3!important}mat-sidenav[_ngcontent-%COMP%]{width:400px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){mat-sidenav[_ngcontent-%COMP%]{width:calc(100% - 40px - 5px)}}.igo-sidenav-content[_ngcontent-%COMP%]{margin-top:50px;height:calc(100% - 50px)}igo-feature-details[_ngcontent-%COMP%]     table{width:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavComponent, [{
        type: Component,
        args: [{
                selector: 'igo-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: i1$3.Title }]; }, { map: [{
            type: Input
        }], opened: [{
            type: Input
        }], feature: [{
            type: Input
        }], tool: [{
            type: Input
        }], media: [{
            type: Input
        }], title: [{
            type: Input
        }] }); })();

class IgoSidenavModule {
    static forRoot() {
        return {
            ngModule: IgoSidenavModule
        };
    }
}
IgoSidenavModule.ɵfac = function IgoSidenavModule_Factory(t) { return new (t || IgoSidenavModule)(); };
IgoSidenavModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoSidenavModule });
IgoSidenavModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatSidenavModule,
            MatTooltipModule,
            IgoLanguageModule,
            IgoPanelModule,
            IgoFlexibleModule,
            IgoFeatureModule,
            IgoContextManagerModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoSidenavModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    MatSidenavModule,
                    MatTooltipModule,
                    IgoLanguageModule,
                    IgoPanelModule,
                    IgoFlexibleModule,
                    IgoFeatureModule,
                    IgoContextManagerModule
                ],
                exports: [SidenavComponent],
                declarations: [SidenavComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoSidenavModule, { declarations: [SidenavComponent], imports: [CommonModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatTooltipModule,
        IgoLanguageModule,
        IgoPanelModule,
        IgoFlexibleModule,
        IgoFeatureModule,
        IgoContextManagerModule], exports: [SidenavComponent] }); })();

class IgoContextModule {
    static forRoot() {
        return {
            ngModule: IgoContextModule,
            providers: []
        };
    }
}
IgoContextModule.ɵfac = function IgoContextModule_Factory(t) { return new (t || IgoContextModule)(); };
IgoContextModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoContextModule });
IgoContextModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[MatInputModule, MatFormFieldModule, MatMenuModule], IgoContextImportExportModule,
        IgoContextManagerModule,
        IgoContextMapButtonModule,
        IgoShareMapModule,
        IgoSidenavModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoContextModule, [{
        type: NgModule,
        args: [{
                imports: [MatInputModule, MatFormFieldModule, MatMenuModule],
                declarations: [],
                exports: [
                    IgoContextImportExportModule,
                    IgoContextManagerModule,
                    IgoContextMapButtonModule,
                    IgoShareMapModule,
                    IgoSidenavModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoContextModule, { imports: [MatInputModule, MatFormFieldModule, MatMenuModule], exports: [IgoContextImportExportModule,
        IgoContextManagerModule,
        IgoContextMapButtonModule,
        IgoShareMapModule,
        IgoSidenavModule] }); })();

/*
 * Public API Surface of context
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BookmarkButtonComponent, BookmarkDialogComponent, ContextEditBindingDirective, ContextEditComponent, ContextExportService, ContextFormComponent, ContextImportExportComponent, ContextImportService, ContextItemComponent, ContextListBindingDirective, ContextListComponent, ContextPermissionsBindingDirective, ContextPermissionsComponent, ContextService, ExportError, ExportInvalidFileError, ExportNothingToExportError, IgoContextImportExportModule, IgoContextManagerModule, IgoContextMapButtonModule, IgoContextModule, IgoShareMapModule, IgoSidenavModule, ImportError, ImportInvalidFileError, ImportNothingToImportError, ImportSRSError, ImportSizeError, ImportUnreadableFileError, LayerContextDirective, MapContextDirective, PoiButtonComponent, PoiDialogComponent, PoiService, Scope, ShareMapApiComponent, ShareMapComponent, ShareMapService, ShareMapUrlComponent, SidenavComponent, TypePermission, UserButtonComponent, UserDialogComponent, addContextToContextList, addImportedFeaturesStyledToMap, addImportedFeaturesToMap, computeLayerTitleFromFile, getFileExtension, handleFileExportError, handleFileExportSuccess, handleFileImportError, handleFileImportSuccess, handleInvalidFileImportError, handleNothingToExportError, handleNothingToImportError, handleSizeFileImportError, handleUnreadbleFileImportError };
//# sourceMappingURL=igo2-context.js.map
