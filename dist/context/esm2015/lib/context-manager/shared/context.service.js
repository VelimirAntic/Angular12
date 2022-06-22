import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, tap, catchError, debounceTime, mergeMap, first, skip } from 'rxjs/operators';
import olPoint from 'ol/geom/Point';
import GeoJSON from 'ol/format/GeoJSON';
import Cluster from 'ol/source/Cluster';
import olVectorSource from 'ol/source/Vector';
import { uuid, ObjectUtils } from '@igo2/utils';
import { TypePermission } from './context.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/auth";
import * as i3 from "@igo2/core";
export class ContextService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29udGV4dC9zcmMvbGliL2NvbnRleHQtbWFuYWdlci9zaGFyZWQvY29udGV4dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JELE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRSxPQUFPLEVBQ0wsR0FBRyxFQUNILEdBQUcsRUFDSCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFFBQVEsRUFDUixLQUFLLEVBQ0wsSUFBSSxFQUNMLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBQ3BDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sY0FBYyxNQUFNLGtCQUFrQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBWWhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFjaEQsTUFBTSxPQUFPLGNBQWM7SUF3QnpCLFlBQ1UsSUFBZ0IsRUFDaEIsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsTUFBcUIsRUFDckIsY0FBOEIsRUFDbEIsS0FBbUI7UUFML0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQTdCbEMsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFrQixTQUFTLENBQUMsQ0FBQztRQUMzRCxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQWUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBUyxTQUFTLENBQUMsQ0FBQztRQUMzRCxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFrQixTQUFTLENBQUMsQ0FBQztRQUNqRSxvQkFBZSxHQUEyQixFQUFFLENBQUM7UUFDN0Msa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUM5QyxxQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBeUI1QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzFCO1lBQ0UsUUFBUSxFQUFFLFVBQVU7WUFDcEIsZUFBZSxFQUFFLGdCQUFnQjtZQUNqQyxpQkFBaUIsRUFBRSxVQUFVO1NBQzlCLEVBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQ2pDLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRWhDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzVDLElBQUksTUFBTSxFQUFFO29CQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUNwRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBMUNELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDbkUsQ0FBQztJQUNELElBQUksaUJBQWlCLENBQUMsR0FBVztRQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO0lBQ2hDLENBQUM7SUF1Q0QsR0FBRyxDQUFDLFdBQXNCLEVBQUUsTUFBZ0I7UUFDMUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7UUFDckMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDakQsR0FBRyxJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsR0FBRyxJQUFJLGNBQWMsQ0FBQzthQUN2QjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEVBQVU7UUFDaEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVUsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBQ25CLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sYUFBYSxFQUFFLFVBQVUsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzdDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sR0FBRyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzdDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQW1CLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBQ25CLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxXQUFXLENBQUMsRUFBVTtRQUNwQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXLENBQUMsRUFBVTtRQUNwQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBVSxFQUFFLFFBQVEsR0FBRyxLQUFLO1FBQ2pDLE1BQU0sUUFBUSxHQUFpQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUN2QyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ04sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQ3pFLENBQUM7UUFFRixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDdkUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUMxQztRQUVELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUF3QjtRQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFVLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQy9DLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsRTtpQkFBTTtnQkFDTCxjQUFjLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakU7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsT0FBTyxjQUFjLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsRUFBVSxFQUFFLFVBQVUsR0FBRyxFQUFFO1FBQy9CLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBVSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUNsRCxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUNwQixhQUFhLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQVUsRUFBRSxPQUFnQjtRQUNqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBVSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG9FQUFvRTtJQUVwRSxrQkFBa0IsQ0FBQyxTQUFpQixFQUFFLE1BQWM7UUFDbEQsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxhQUFhLFNBQVMsUUFBUSxDQUFDO1FBQzFELE1BQU0sV0FBVyxHQUFHO1lBQ2xCLE1BQU07U0FDUCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHFCQUFxQixDQUFDLFNBQWlCLEVBQUUsTUFBYztRQUNyRCxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsU0FBUyxVQUFVLE1BQU0sRUFBRSxDQUFDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGNBQWMsQ0FBQyxFQUFVO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxHQUFHLEVBQUUsR0FBRyxjQUFjLENBQUM7UUFDOUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBc0IsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHdCQUF3QixDQUN0QixTQUFpQixFQUNqQixNQUFjLEVBQ2QsSUFBb0I7UUFFcEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxhQUFhLFNBQVMsY0FBYyxDQUFDO1FBQ2hFLE1BQU0sV0FBVyxHQUFHO1lBQ2xCLE1BQU07WUFDTixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBc0IsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDL0QsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUMzQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELDJCQUEyQixDQUN6QixTQUFpQixFQUNqQixZQUFvQjtRQUVwQixNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsU0FBUyxnQkFBZ0IsWUFBWSxFQUFFLENBQUM7UUFDaEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQseUVBQXlFO0lBRXpFLGdCQUFnQjtRQUNkLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDMUMsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLEdBQVc7UUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM3QyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWtCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRyxDQUFDLENBQUMsT0FBd0IsRUFBRSxFQUFFO2dCQUMvQixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0QsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO3FCQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7cUJBQ3hCLE9BQU8sRUFBRTtxQkFDVCxNQUFNLENBQ0wsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLENBQ2pCLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLENBQzVEO3FCQUNBLE9BQU8sRUFBRSxDQUFDO2dCQUNiLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUNsRCxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDbEQsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ3JELFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztxQkFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO3FCQUMzQixNQUFNLENBQ0wsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLENBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FDdkQsQ0FBQztnQkFDSixPQUFPLFFBQVEsQ0FBQztZQUNsQixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sR0FBRyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUFZLENBQUMsV0FBc0IsRUFBRSxNQUFnQjtRQUNuRCxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNuQztRQUNELE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM3QixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUN6QixDQUFDLFFBQXlCLEVBQUUsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxFQUNELEdBQUcsRUFBRTtvQkFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQ0YsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDMUM7UUFDSCxDQUFDLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbEUsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQW9CLENBQUMsQ0FBQztnQkFDckUsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLFlBQVksRUFBRTtvQkFDaEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQztvQkFDdEMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDZjtnQkFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsR0FBVztRQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUVwQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUNsQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQzthQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDYixTQUFTLENBQ1IsQ0FBQyxRQUF5QixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDTixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNsRDtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUF3QjtRQUNqQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxjQUFjLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxDQUFDLEVBQUUsRUFBRTtZQUNqRSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7YUFDekM7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNoQixPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQzVCO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsR0FBVztRQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQXlCLEVBQUUsRUFBRTtZQUNoRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBd0I7UUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQWMsRUFBRSxLQUFlO1FBQy9DLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVDLE1BQU0sTUFBTSxHQUFRLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDekQsSUFBSSxFQUNKLFdBQVcsQ0FDWixDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUc7WUFDZCxHQUFHLEVBQUUsSUFBSSxFQUFFO1lBQ1gsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsU0FBUztZQUNoQixHQUFHLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLE1BQU0sRUFBRSxNQUFNLENBQUMsY0FBYyxFQUFFO29CQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDcEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLGVBQWUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWU7aUJBQ3ZEO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztRQUVGLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPO2lCQUNwQixRQUFRLEVBQUU7aUJBQ1YsTUFBTSxDQUNMLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDTixHQUFHLENBQUMsU0FBUyxLQUFLLElBQUk7Z0JBQ3RCLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLHdCQUF3QixDQUM5QztpQkFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakk7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRTtZQUN0QixNQUFNLEtBQUssR0FBUSxDQUFDLENBQUM7WUFDckIsTUFBTSxJQUFJLEdBQUc7Z0JBQ1gsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztnQkFDM0QsWUFBWSxFQUFFO29CQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUs7b0JBQzFCLE1BQU0sRUFBRSxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2lCQUN2QjtnQkFDRCxhQUFhLEVBQUU7b0JBQ2IsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUk7b0JBQ25DLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNO29CQUN2QyxHQUFHLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRztvQkFDakMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO2lCQUMzQjthQUNGLENBQUM7WUFDRixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO2dCQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtTQUNGO1FBRUQsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3RDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELG9CQUFvQixDQUNsQixNQUFjLEVBQ2QsTUFBZSxFQUNmLElBQVk7UUFFWixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVDLE1BQU0sTUFBTSxHQUFRLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDekQsSUFBSSxFQUNKLFdBQVcsQ0FDWixDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUc7WUFDZCxHQUFHLEVBQUUsSUFBSTtZQUNULEtBQUssRUFBRSxJQUFJO1lBQ1gsR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRTtvQkFDSixNQUFNLEVBQUUsTUFBTSxDQUFDLGNBQWMsRUFBRTtvQkFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjthQUNGO1lBQ0QsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLEtBQUssRUFBRSxFQUFFO1lBQ1QsYUFBYSxFQUFFLEVBQUU7U0FDbEIsQ0FBQztRQUVGLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE1BQU0sR0FBRyxhQUFhO2FBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzthQUMxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNULE9BQU87Z0JBQ0wsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYTtnQkFDdEMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDdEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO2FBQ25CLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVMLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN2QixNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDM0MsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUNmLEtBQUssQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUNqRSxDQUFDO1lBRUYsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO29CQUNsQyxVQUFVLEdBQUcsU0FBUyxDQUFDO2lCQUN4QjtxQkFBTSxJQUFJLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO29CQUN6QyxVQUFVLEdBQUcsU0FBUyxDQUFDO29CQUN2QixPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzFDLE9BQU8sVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDM0M7Z0JBQ0QsTUFBTSxJQUFJLEdBQUc7b0JBQ1gsU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQUFTO29CQUMvQixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLO29CQUMxQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07b0JBQ3BCLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDaEQsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLGtCQUFrQixDQUFDO29CQUNoRCxLQUFLLEVBQUUsVUFBVTtvQkFDakIsWUFBWSxFQUFFLFVBQVUsQ0FBQyxjQUFjLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO29CQUN0QixhQUFhLEVBQUUsVUFBVSxDQUFDLGFBQWE7aUJBQ3hDLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxjQUFjLENBQUMsRUFBRTtvQkFDckQsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDbkMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNuQyxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCxJQUFJLFFBQVEsQ0FBQztvQkFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUM3QixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksT0FBTyxFQUFFO3dCQUMzQyxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBYSxDQUFDO3dCQUN0RCxRQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FDN0IsYUFBYSxDQUFDLFdBQVcsRUFBRSxFQUMzQjs0QkFDRSxjQUFjLEVBQUUsV0FBVzs0QkFDM0IsaUJBQWlCLEVBQUUsV0FBVzt5QkFDL0IsQ0FDRixDQUFDO3FCQUNIO3lCQUFNO3dCQUNMLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFTLENBQUM7d0JBQzNDLFFBQVEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUM3QixNQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCOzRCQUNFLGNBQWMsRUFBRSxXQUFXOzRCQUMzQixpQkFBaUIsRUFBRSxXQUFXO3lCQUMvQixDQUNGLENBQUM7cUJBQ0g7b0JBQ0QsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ3BDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN0QzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDL0IsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTNCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQWlCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxPQUF3QjtRQUNuRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDakYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzVDO1FBRUQsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzdCLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7b0JBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDdkQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDZCxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJO29CQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ3RELENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBa0IsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sZUFBZSxDQUFDLEdBQVc7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksYUFBYSxDQUFDO1lBQ2xCLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuRCxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ25ELE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksYUFBYSxFQUFFO29CQUNqQixNQUFNO2lCQUNQO2FBQ0Y7WUFFRCxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsUUFBUSxFQUFFO2dCQUMzQyxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMxQjtZQUVELDhCQUE4QjtZQUM5QixNQUFNLEVBQUUsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNsRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUI7UUFFRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDeEUsT0FBTyxjQUFjLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksZUFBZSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBYztRQUM3QixNQUFNLE1BQU0sR0FBWSxFQUFFLENBQUM7UUFDM0IsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssd0JBQXdCLEVBQUU7Z0JBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMxQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBSSxTQUFTLElBQUksTUFBTSxDQUFDLFNBQW1CLENBQUMsRUFBRTtnQkFDNUMsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQW1CLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDekM7WUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDdkQsSUFBSSxhQUFhLElBQUksTUFBTSxDQUFDLGFBQXVCLENBQUMsRUFBRTtnQkFDcEQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLGFBQXVCLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7YUFDcEQ7WUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDM0MsSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDLE9BQWlCLENBQUMsRUFBRTtnQkFDeEMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQWlCLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDaEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxPQUFPLENBQUMsSUFBWTtRQUMxQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFELE9BQU8sR0FBRyxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLFdBQVcsQ0FDakIsS0FBd0IsRUFDeEIsR0FBVyxFQUNYLGVBQXlCO1FBRXpCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekUsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDbkQsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUN4RCwwQ0FBMEMsQ0FDM0MsQ0FBQztRQUVGLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDMUQseUNBQXlDLEVBQ3pDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxDQUN4QixDQUFDO1FBRUYsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRTdCLElBQUksZUFBZSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDeEQsc0RBQXNELENBQ3ZELENBQUM7WUFDRixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQzFELGlEQUFpRCxDQUNsRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyxvQkFBb0IsQ0FDMUIsa0JBQWtCLEdBQUcsSUFBSTtRQUV6QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNwQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUM5RCxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsa0JBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7WUFDbkMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNiLFNBQVMsQ0FDUixDQUFDLFVBQTJCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUNGLENBQUM7WUFFSixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUMvQjtTQUNGO1FBQ0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEtBQUssT0FBTyxFQUFFO1lBQ3RELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxPQUFnQjtRQUN2QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsTUFBTSxnQkFBZ0IsR0FBRztnQkFDdkIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUNkLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztnQkFDaEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3BCLFVBQVUsRUFBRSxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQzthQUNoRCxDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQztTQUNGO0lBQ0gsQ0FBQztJQUVPLFdBQVcsQ0FBQyxPQUFnQjtRQUNsQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksS0FBSyxDQUFDO1FBQ1YsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FDaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNKLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDekMsQ0FBQztZQUNGLElBQUksS0FBSyxFQUFFO2dCQUNULE1BQU07YUFDUDtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs0RUE5dUJVLGNBQWM7b0VBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRmIsTUFBTTt1RkFFUCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBK0JJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIG1hcCxcbiAgdGFwLFxuICBjYXRjaEVycm9yLFxuICBkZWJvdW5jZVRpbWUsXG4gIG1lcmdlTWFwLFxuICBmaXJzdCxcbiAgc2tpcFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCBvbFBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQnO1xuaW1wb3J0IEdlb0pTT04gZnJvbSAnb2wvZm9ybWF0L0dlb0pTT04nO1xuaW1wb3J0IENsdXN0ZXIgZnJvbSAnb2wvc291cmNlL0NsdXN0ZXInO1xuaW1wb3J0IG9sVmVjdG9yU291cmNlIGZyb20gJ29sL3NvdXJjZS9WZWN0b3InO1xuXG5pbXBvcnQgeyBUb29sIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IHV1aWQsIE9iamVjdFV0aWxzIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuaW1wb3J0IHtcbiAgQ29uZmlnU2VydmljZSxcbiAgUm91dGVTZXJ2aWNlLFxuICBNZXNzYWdlLFxuICBNZXNzYWdlU2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlXG59IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuaW1wb3J0IHR5cGUgeyBJZ29NYXAsIExheWVyIH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuaW1wb3J0IHsgVHlwZVBlcm1pc3Npb24gfSBmcm9tICcuL2NvbnRleHQuZW51bSc7XG5pbXBvcnQge1xuICBDb250ZXh0c0xpc3QsXG4gIENvbnRleHRTZXJ2aWNlT3B0aW9ucyxcbiAgQ29udGV4dCxcbiAgRGV0YWlsZWRDb250ZXh0LFxuICBDb250ZXh0TWFwVmlldyxcbiAgQ29udGV4dFBlcm1pc3Npb24sXG4gIENvbnRleHRQcm9maWxzXG59IGZyb20gJy4vY29udGV4dC5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0U2VydmljZSB7XG4gIHB1YmxpYyBjb250ZXh0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGV0YWlsZWRDb250ZXh0Pih1bmRlZmluZWQpO1xuICBwdWJsaWMgY29udGV4dHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDb250ZXh0c0xpc3Q+KHsgb3VyczogW10gfSk7XG4gIHB1YmxpYyBkZWZhdWx0Q29udGV4dElkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih1bmRlZmluZWQpO1xuICBwdWJsaWMgZWRpdGVkQ29udGV4dCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERldGFpbGVkQ29udGV4dD4odW5kZWZpbmVkKTtcbiAgcHVibGljIGltcG9ydGVkQ29udGV4dDogQXJyYXk8RGV0YWlsZWRDb250ZXh0PiA9IFtdO1xuICBwdWJsaWMgdG9vbHNDaGFuZ2VkJCA9IG5ldyBTdWJqZWN0PERldGFpbGVkQ29udGV4dD4oKTtcbiAgcHJpdmF0ZSBtYXBWaWV3RnJvbVJvdXRlOiBDb250ZXh0TWFwVmlldyA9IHt9O1xuICBwcml2YXRlIG9wdGlvbnM6IENvbnRleHRTZXJ2aWNlT3B0aW9ucztcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgLy8gVW50aWwgdGhlIENvbnRleHRTZXJ2aWNlIGlzIGNvbXBsZXRlbHkgcmVmYWN0b3JlZCwgdGhpcyBpcyBuZWVkZWRcbiAgLy8gdG8gdHJhY2sgdGhlIGN1cnJlbnQgdG9vbHNcbiAgcHJpdmF0ZSB0b29sczogVG9vbFtdO1xuICBwcml2YXRlIHRvb2xiYXI6IHN0cmluZ1tdO1xuXG4gIGdldCBkZWZhdWx0Q29udGV4dFVyaSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q29udGV4dFVyaSB8fCB0aGlzLm9wdGlvbnMuZGVmYXVsdENvbnRleHRVcmk7XG4gIH1cbiAgc2V0IGRlZmF1bHRDb250ZXh0VXJpKHVyaTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdENvbnRleHRVcmkgPSB1cmk7XG4gIH1cbiAgcHJpdmF0ZSBfZGVmYXVsdENvbnRleHRVcmk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlOiBSb3V0ZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgYmFzZVBhdGg6ICdjb250ZXh0cycsXG4gICAgICAgIGNvbnRleHRMaXN0RmlsZTogJ19jb250ZXh0cy5qc29uJyxcbiAgICAgICAgZGVmYXVsdENvbnRleHRVcmk6ICdfZGVmYXVsdCdcbiAgICAgIH0sXG4gICAgICB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2NvbnRleHQnKVxuICAgICk7XG5cbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLm9wdGlvbnMudXJsO1xuXG4gICAgdGhpcy5yZWFkUGFyYW1zRnJvbVJvdXRlKCk7XG5cbiAgICBpZiAodGhpcy5hdXRoU2VydmljZS5oYXNBdXRoU2VydmljZSkge1xuICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dnZWQkLnN1YnNjcmliZSgobG9nZ2VkKSA9PiB7XG4gICAgICAgIGlmIChsb2dnZWQpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHRzJC5waXBlKHNraXAoMSksIGZpcnN0KCkpLnN1YnNjcmliZSgoYykgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDb250ZXh0c0NoYW5nZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMubG9hZENvbnRleHRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRDb250ZXh0cygpO1xuICAgICAgdGhpcy5oYW5kbGVDb250ZXh0c0NoYW5nZShmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KHBlcm1pc3Npb25zPzogc3RyaW5nW10sIGhpZGRlbj86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPENvbnRleHRzTGlzdD4ge1xuICAgIGxldCB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL2NvbnRleHRzJztcbiAgICBpZiAocGVybWlzc2lvbnMgJiYgdGhpcy5hdXRoU2VydmljZS5hdXRoZW50aWNhdGVkKSB7XG4gICAgICB1cmwgKz0gJz9wZXJtaXNzaW9uPScgKyBwZXJtaXNzaW9ucy5qb2luKCk7XG4gICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgIHVybCArPSAnJmhpZGRlbj10cnVlJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q29udGV4dHNMaXN0Pih1cmwpO1xuICB9XG5cbiAgZ2V0QnlJZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZXh0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5iYXNlVXJsICsgJy9jb250ZXh0cy8nICsgaWQ7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q29udGV4dD4odXJsKTtcbiAgfVxuXG4gIGdldERldGFpbHMoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGV0YWlsZWRDb250ZXh0PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9jb250ZXh0cy8ke2lkfS9kZXRhaWxzYDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEZXRhaWxlZENvbnRleHQ+KHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUVycm9yKHJlcywgaWQpO1xuICAgICAgICB0aHJvdyByZXM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXREZWZhdWx0KCk6IE9ic2VydmFibGU8RGV0YWlsZWRDb250ZXh0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5iYXNlVXJsICsgJy9jb250ZXh0cy9kZWZhdWx0JztcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEZXRhaWxlZENvbnRleHQ+KHVybCkucGlwZShcbiAgICAgIHRhcCgoY29udGV4dCkgPT4ge1xuICAgICAgICB0aGlzLmRlZmF1bHRDb250ZXh0SWQkLm5leHQoY29udGV4dC5pZCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRQcm9maWxCeVVzZXIoKTogT2JzZXJ2YWJsZTxDb250ZXh0UHJvZmlsc1tdPiB7XG4gICAgaWYgKHRoaXMuYmFzZVVybCkge1xuICAgICAgY29uc3QgdXJsID0gdGhpcy5iYXNlVXJsICsgJy9wcm9maWxzPyc7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDb250ZXh0UHJvZmlsc1tdPih1cmwpO1xuICAgIH1cbiAgICByZXR1cm4gb2YoW10pO1xuICB9XG5cbiAgc2V0RGVmYXVsdChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL2NvbnRleHRzL2RlZmF1bHQnO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHsgZGVmYXVsdENvbnRleHRJZDogaWQgfSk7XG4gIH1cblxuICBoaWRlQ29udGV4dChpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5iYXNlVXJsICsgJy9jb250ZXh0cy8nICsgaWQgKyAnL2hpZGUnO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHt9KTtcbiAgfVxuXG4gIHNob3dDb250ZXh0KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL2NvbnRleHRzLycgKyBpZCArICcvc2hvdyc7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwge30pO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBzdHJpbmcsIGltcG9ydGVkID0gZmFsc2UpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCBjb250ZXh0czogQ29udGV4dHNMaXN0ID0geyBvdXJzOiBbXSB9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY29udGV4dHMkLnZhbHVlKS5mb3JFYWNoKFxuICAgICAgKGtleSkgPT5cbiAgICAgICAgKGNvbnRleHRzW2tleV0gPSB0aGlzLmNvbnRleHRzJC52YWx1ZVtrZXldLmZpbHRlcigoYykgPT4gYy5pZCAhPT0gaWQpKVxuICAgICk7XG5cbiAgICBpZiAoaW1wb3J0ZWQpIHtcbiAgICAgIHRoaXMuaW1wb3J0ZWRDb250ZXh0ID0gdGhpcy5pbXBvcnRlZENvbnRleHQuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBpZCk7XG4gICAgICByZXR1cm4gb2YodGhpcy5jb250ZXh0cyQubmV4dChjb250ZXh0cykpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHRoaXMuYmFzZVVybCArICcvY29udGV4dHMvJyArIGlkO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHZvaWQ+KHVybCkucGlwZShcbiAgICAgIHRhcCgocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuY29udGV4dHMkLm5leHQoY29udGV4dHMpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlKGNvbnRleHQ6IERldGFpbGVkQ29udGV4dCk6IE9ic2VydmFibGU8Q29udGV4dD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuYmFzZVVybCArICcvY29udGV4dHMnO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxDb250ZXh0Pih1cmwsIGNvbnRleHQpLnBpcGUoXG4gICAgICBtYXAoKGNvbnRleHRDcmVhdGVkKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICBjb250ZXh0Q3JlYXRlZC5wZXJtaXNzaW9uID0gVHlwZVBlcm1pc3Npb25bVHlwZVBlcm1pc3Npb24ud3JpdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHRDcmVhdGVkLnBlcm1pc3Npb24gPSBUeXBlUGVybWlzc2lvbltUeXBlUGVybWlzc2lvbi5yZWFkXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRleHRzJC52YWx1ZS5vdXJzLnVuc2hpZnQoY29udGV4dENyZWF0ZWQpO1xuICAgICAgICB0aGlzLmNvbnRleHRzJC5uZXh0KHRoaXMuY29udGV4dHMkLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRDcmVhdGVkO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgY2xvbmUoaWQ6IHN0cmluZywgcHJvcGVydGllcyA9IHt9KTogT2JzZXJ2YWJsZTxDb250ZXh0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5iYXNlVXJsICsgJy9jb250ZXh0cy8nICsgaWQgKyAnL2Nsb25lJztcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Q29udGV4dD4odXJsLCBwcm9wZXJ0aWVzKS5waXBlKFxuICAgICAgbWFwKChjb250ZXh0Q2xvbmVkKSA9PiB7XG4gICAgICAgIGNvbnRleHRDbG9uZWQucGVybWlzc2lvbiA9IFR5cGVQZXJtaXNzaW9uW1R5cGVQZXJtaXNzaW9uLndyaXRlXTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyQudmFsdWUub3Vycy51bnNoaWZ0KGNvbnRleHRDbG9uZWQpO1xuICAgICAgICB0aGlzLmNvbnRleHRzJC5uZXh0KHRoaXMuY29udGV4dHMkLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRDbG9uZWQ7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB1cGRhdGUoaWQ6IHN0cmluZywgY29udGV4dDogQ29udGV4dCk6IE9ic2VydmFibGU8Q29udGV4dD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuYmFzZVVybCArICcvY29udGV4dHMvJyArIGlkO1xuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2g8Q29udGV4dD4odXJsLCBjb250ZXh0KTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgYWRkVG9vbEFzc29jaWF0aW9uKGNvbnRleHRJZDogc3RyaW5nLCB0b29sSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vY29udGV4dHMvJHtjb250ZXh0SWR9L3Rvb2xzYDtcbiAgICBjb25zdCBhc3NvY2lhdGlvbiA9IHtcbiAgICAgIHRvb2xJZFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PHZvaWQ+KHVybCwgYXNzb2NpYXRpb24pO1xuICB9XG5cbiAgZGVsZXRlVG9vbEFzc29jaWF0aW9uKGNvbnRleHRJZDogc3RyaW5nLCB0b29sSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9jb250ZXh0cy8ke2NvbnRleHRJZH0vdG9vbHMvJHt0b29sSWR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpO1xuICB9XG5cbiAgZ2V0UGVybWlzc2lvbnMoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGV4dFBlcm1pc3Npb25bXT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuYmFzZVVybCArICcvY29udGV4dHMvJyArIGlkICsgJy9wZXJtaXNzaW9ucyc7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q29udGV4dFBlcm1pc3Npb25bXT4odXJsKTtcbiAgfVxuXG4gIGFkZFBlcm1pc3Npb25Bc3NvY2lhdGlvbihcbiAgICBjb250ZXh0SWQ6IHN0cmluZyxcbiAgICBwcm9maWw6IHN0cmluZyxcbiAgICB0eXBlOiBUeXBlUGVybWlzc2lvblxuICApOiBPYnNlcnZhYmxlPENvbnRleHRQZXJtaXNzaW9uW10+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2NvbnRleHRzLyR7Y29udGV4dElkfS9wZXJtaXNzaW9uc2A7XG4gICAgY29uc3QgYXNzb2NpYXRpb24gPSB7XG4gICAgICBwcm9maWwsXG4gICAgICB0eXBlUGVybWlzc2lvbjogdHlwZVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Q29udGV4dFBlcm1pc3Npb25bXT4odXJsLCBhc3NvY2lhdGlvbikucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUVycm9yKHJlcywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgdGhyb3cgW3Jlc107IC8vIFRPRE8gTm90IHN1cmUgYWJvdXQgdGhpcy5cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVBlcm1pc3Npb25Bc3NvY2lhdGlvbihcbiAgICBjb250ZXh0SWQ6IHN0cmluZyxcbiAgICBwZXJtaXNzaW9uSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2NvbnRleHRzLyR7Y29udGV4dElkfS9wZXJtaXNzaW9ucy8ke3Blcm1pc3Npb25JZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHZvaWQ+KHVybCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZ2V0TG9jYWxDb250ZXh0cygpOiBPYnNlcnZhYmxlPENvbnRleHRzTGlzdD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0UGF0aCh0aGlzLm9wdGlvbnMuY29udGV4dExpc3RGaWxlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDb250ZXh0c0xpc3Q+KHVybCkucGlwZShcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgb3VyczogcmVzIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRMb2NhbENvbnRleHQodXJpOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERldGFpbGVkQ29udGV4dD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0UGF0aChgJHt1cml9Lmpzb25gKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEZXRhaWxlZENvbnRleHQ+KHVybCkucGlwZShcbiAgICAgIG1lcmdlTWFwKChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMuYmFzZSkge1xuICAgICAgICAgIHJldHVybiBvZihyZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybEJhc2UgPSB0aGlzLmdldFBhdGgoYCR7cmVzLmJhc2V9Lmpzb25gKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGV0YWlsZWRDb250ZXh0Pih1cmxCYXNlKS5waXBlKFxuICAgICAgICAgIG1hcCgocmVzQmFzZTogRGV0YWlsZWRDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNNZXJnZSA9IHJlcztcbiAgICAgICAgICAgIHJlc01lcmdlLm1hcCA9IE9iamVjdFV0aWxzLm1lcmdlRGVlcChyZXNCYXNlLm1hcCwgcmVzLm1hcCk7XG4gICAgICAgICAgICByZXNNZXJnZS5sYXllcnMgPSAocmVzQmFzZS5sYXllcnMgfHwgW10pXG4gICAgICAgICAgICAgIC5jb25jYXQocmVzLmxheWVycyB8fCBbXSlcbiAgICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChsLCBpbmRleCwgc2VsZikgPT5cbiAgICAgICAgICAgICAgICAgICFsLmlkIHx8IHNlbGYuZmluZEluZGV4KChsMikgPT4gbDIuaWQgPT09IGwuaWQpID09PSBpbmRleFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5yZXZlcnNlKCk7XG4gICAgICAgICAgICByZXNNZXJnZS50b29sYmFyID0gcmVzLnRvb2xiYXIgfHwgcmVzQmFzZS50b29sYmFyO1xuICAgICAgICAgICAgcmVzTWVyZ2UubWVzc2FnZSA9IHJlcy5tZXNzYWdlIHx8IHJlc0Jhc2UubWVzc2FnZTtcbiAgICAgICAgICAgIHJlc01lcmdlLm1lc3NhZ2VzID0gcmVzLm1lc3NhZ2VzIHx8IHJlc0Jhc2UubWVzc2FnZXM7XG4gICAgICAgICAgICByZXNNZXJnZS50b29scyA9IChyZXMudG9vbHMgfHwgW10pXG4gICAgICAgICAgICAgIC5jb25jYXQocmVzQmFzZS50b29scyB8fCBbXSlcbiAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAodCwgaW5kZXgsIHNlbGYpID0+XG4gICAgICAgICAgICAgICAgICBzZWxmLmZpbmRJbmRleCgodDIpID0+IHQyLm5hbWUgPT09IHQubmFtZSkgPT09IGluZGV4XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gcmVzTWVyZ2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVyciwgdXJpKTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnIyKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyMiwgdXJpKTtcbiAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRDb250ZXh0cyhwZXJtaXNzaW9ucz86IHN0cmluZ1tdLCBoaWRkZW4/OiBib29sZWFuKSB7XG4gICAgbGV0IHJlcXVlc3Q7XG4gICAgaWYgKHRoaXMuYmFzZVVybCkge1xuICAgICAgcmVxdWVzdCA9IHRoaXMuZ2V0KHBlcm1pc3Npb25zLCBoaWRkZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0ID0gdGhpcy5nZXRMb2NhbENvbnRleHRzKCk7XG4gICAgfVxuICAgIHJlcXVlc3Quc3Vic2NyaWJlKChjb250ZXh0cykgPT4ge1xuICAgICAgY29udGV4dHMub3VycyA9IHRoaXMuaW1wb3J0ZWRDb250ZXh0LmNvbmNhdChjb250ZXh0cy5vdXJzKTtcbiAgICAgIHRoaXMuY29udGV4dHMkLm5leHQoY29udGV4dHMpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZERlZmF1bHRDb250ZXh0KCkge1xuICAgIGNvbnN0IGxvYWRGY3QgPSAoZGlyZWN0ID0gZmFsc2UpID0+IHtcbiAgICAgIGlmICghZGlyZWN0ICYmIHRoaXMuYmFzZVVybCAmJiB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0KCkuc3Vic2NyaWJlKFxuICAgICAgICAgIChfY29udGV4dDogRGV0YWlsZWRDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb250ZXh0VXJpID0gX2NvbnRleHQudXJpO1xuICAgICAgICAgICAgdGhpcy5hZGRDb250ZXh0VG9MaXN0KF9jb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChfY29udGV4dCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb250ZXh0SWQkLm5leHQodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRleHQodGhpcy5kZWZhdWx0Q29udGV4dFVyaSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkQ29udGV4dCh0aGlzLmRlZmF1bHRDb250ZXh0VXJpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucm91dGUgJiYgdGhpcy5yb3V0ZS5vcHRpb25zLmNvbnRleHRLZXkpIHtcbiAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dFBhcmFtID0gcGFyYW1zW3RoaXMucm91dGUub3B0aW9ucy5jb250ZXh0S2V5IGFzIHN0cmluZ107XG4gICAgICAgIGxldCBkaXJlY3QgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNvbnRleHRQYXJhbSkge1xuICAgICAgICAgIHRoaXMuZGVmYXVsdENvbnRleHRVcmkgPSBjb250ZXh0UGFyYW07XG4gICAgICAgICAgZGlyZWN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkRmN0KGRpcmVjdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9hZEZjdCgpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRDb250ZXh0KHVyaTogc3RyaW5nKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dCQudmFsdWU7XG5cbiAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnVyaSA9PT0gdXJpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nZXRDb250ZXh0QnlVcmkodXJpKVxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChfY29udGV4dDogRGV0YWlsZWRDb250ZXh0KSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRDb250ZXh0VG9MaXN0KF9jb250ZXh0KTtcbiAgICAgICAgICB0aGlzLnNldENvbnRleHQoX2NvbnRleHQpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKHVyaSAhPT0gdGhpcy5vcHRpb25zLmRlZmF1bHRDb250ZXh0VXJpKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRDb250ZXh0KHRoaXMub3B0aW9ucy5kZWZhdWx0Q29udGV4dFVyaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgc2V0Q29udGV4dChjb250ZXh0OiBEZXRhaWxlZENvbnRleHQpIHtcbiAgICB0aGlzLmhhbmRsZUNvbnRleHRNZXNzYWdlKGNvbnRleHQpO1xuICAgIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0gdGhpcy5jb250ZXh0JC52YWx1ZTtcbiAgICBpZiAoY3VycmVudENvbnRleHQgJiYgY29udGV4dCAmJiBjb250ZXh0LmlkID09PSBjdXJyZW50Q29udGV4dC5pZCkge1xuICAgICAgaWYgKGNvbnRleHQubWFwLnZpZXcua2VlcEN1cnJlbnRWaWV3ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5tYXAudmlldy5rZWVwQ3VycmVudFZpZXcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5jb250ZXh0JC5uZXh0KGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY29udGV4dC5tYXApIHtcbiAgICAgIGNvbnRleHQubWFwID0geyB2aWV3OiB7fSB9O1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dC5tYXAudmlldywgdGhpcy5tYXBWaWV3RnJvbVJvdXRlKTtcblxuICAgIHRoaXMuY29udGV4dCQubmV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGxvYWRFZGl0ZWRDb250ZXh0KHVyaTogc3RyaW5nKSB7XG4gICAgdGhpcy5nZXRDb250ZXh0QnlVcmkodXJpKS5zdWJzY3JpYmUoKF9jb250ZXh0OiBEZXRhaWxlZENvbnRleHQpID0+IHtcbiAgICAgIHRoaXMuc2V0RWRpdGVkQ29udGV4dChfY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRFZGl0ZWRDb250ZXh0KGNvbnRleHQ6IERldGFpbGVkQ29udGV4dCkge1xuICAgIHRoaXMuZWRpdGVkQ29udGV4dCQubmV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGdldENvbnRleHRGcm9tTWFwKGlnb01hcDogSWdvTWFwLCBlbXB0eT86IGJvb2xlYW4pOiBEZXRhaWxlZENvbnRleHQge1xuICAgIGNvbnN0IHZpZXcgPSBpZ29NYXAub2wuZ2V0VmlldygpO1xuICAgIGNvbnN0IHByb2ogPSB2aWV3LmdldFByb2plY3Rpb24oKS5nZXRDb2RlKCk7XG4gICAgY29uc3QgY2VudGVyOiBhbnkgPSBuZXcgb2xQb2ludCh2aWV3LmdldENlbnRlcigpKS50cmFuc2Zvcm0oXG4gICAgICBwcm9qLFxuICAgICAgJ0VQU0c6NDMyNidcbiAgICApO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgIHVyaTogdXVpZCgpLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgc2NvcGU6ICdwcml2YXRlJyxcbiAgICAgIG1hcDoge1xuICAgICAgICB2aWV3OiB7XG4gICAgICAgICAgY2VudGVyOiBjZW50ZXIuZ2V0Q29vcmRpbmF0ZXMoKSxcbiAgICAgICAgICB6b29tOiB2aWV3LmdldFpvb20oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uOiBwcm9qLFxuICAgICAgICAgIG1heFpvb21PbkV4dGVudDogaWdvTWFwLnZpZXdDb250cm9sbGVyLm1heFpvb21PbkV4dGVudFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGF5ZXJzOiBbXSxcbiAgICAgIHRvb2xzOiBbXVxuICAgIH07XG5cbiAgICBsZXQgbGF5ZXJzID0gW107XG4gICAgaWYgKGVtcHR5ID09PSB0cnVlKSB7XG4gICAgICBsYXllcnMgPSBpZ29NYXAubGF5ZXJzJFxuICAgICAgICAuZ2V0VmFsdWUoKVxuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIChsYXkpID0+XG4gICAgICAgICAgICBsYXkuYmFzZUxheWVyID09PSB0cnVlIHx8XG4gICAgICAgICAgICBsYXkub3B0aW9ucy5pZCA9PT0gJ3NlYXJjaFBvaW50ZXJTdW1tYXJ5SWQnXG4gICAgICAgIClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllcnMgPSBpZ29NYXAubGF5ZXJzJC5nZXRWYWx1ZSgpLmZpbHRlcihsYXkgPT4gIWxheS5pZC5pbmNsdWRlcygnV2ZzV29ya3NwYWNlVGFibGVEZXN0JykpLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpO1xuICAgIH1cblxuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IGwgb2YgbGF5ZXJzKSB7XG4gICAgICBjb25zdCBsYXllcjogYW55ID0gbDtcbiAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgIGlkOiBsYXllci5vcHRpb25zLmlkID8gU3RyaW5nKGxheWVyLm9wdGlvbnMuaWQpIDogdW5kZWZpbmVkLFxuICAgICAgICBsYXllck9wdGlvbnM6IHtcbiAgICAgICAgICB0aXRsZTogbGF5ZXIub3B0aW9ucy50aXRsZSxcbiAgICAgICAgICB6SW5kZXg6ICsraSxcbiAgICAgICAgICB2aXNpYmxlOiBsYXllci52aXNpYmxlXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZU9wdGlvbnM6IHtcbiAgICAgICAgICB0eXBlOiBsYXllci5kYXRhU291cmNlLm9wdGlvbnMudHlwZSxcbiAgICAgICAgICBwYXJhbXM6IGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5wYXJhbXMsXG4gICAgICAgICAgdXJsOiBsYXllci5kYXRhU291cmNlLm9wdGlvbnMudXJsLFxuICAgICAgICAgIHF1ZXJ5YWJsZTogbGF5ZXIucXVlcnlhYmxlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAob3B0cy5zb3VyY2VPcHRpb25zLnR5cGUpIHtcbiAgICAgICAgY29udGV4dC5sYXllcnMucHVzaChvcHRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LnRvb2xzID0gdGhpcy50b29scy5tYXAoKHRvb2wpID0+IHtcbiAgICAgIHJldHVybiB7IGlkOiBTdHJpbmcodG9vbC5pZCksIGdsb2JhbDogdG9vbC5nbG9iYWwgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dEZyb21MYXllcnMoXG4gICAgaWdvTWFwOiBJZ29NYXAsXG4gICAgbGF5ZXJzOiBMYXllcltdLFxuICAgIG5hbWU6IHN0cmluZ1xuICApOiBEZXRhaWxlZENvbnRleHQge1xuICAgIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0gdGhpcy5jb250ZXh0JC5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IHZpZXcgPSBpZ29NYXAub2wuZ2V0VmlldygpO1xuICAgIGNvbnN0IHByb2ogPSB2aWV3LmdldFByb2plY3Rpb24oKS5nZXRDb2RlKCk7XG4gICAgY29uc3QgY2VudGVyOiBhbnkgPSBuZXcgb2xQb2ludCh2aWV3LmdldENlbnRlcigpKS50cmFuc2Zvcm0oXG4gICAgICBwcm9qLFxuICAgICAgJ0VQU0c6NDMyNidcbiAgICApO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgIHVyaTogbmFtZSxcbiAgICAgIHRpdGxlOiBuYW1lLFxuICAgICAgbWFwOiB7XG4gICAgICAgIHZpZXc6IHtcbiAgICAgICAgICBjZW50ZXI6IGNlbnRlci5nZXRDb29yZGluYXRlcygpLFxuICAgICAgICAgIHpvb206IHZpZXcuZ2V0Wm9vbSgpLFxuICAgICAgICAgIHByb2plY3Rpb246IHByb2pcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxheWVyczogW10sXG4gICAgICB0b29sYmFyOiBbXSxcbiAgICAgIHRvb2xzOiBbXSxcbiAgICAgIGV4dHJhRmVhdHVyZXM6IFtdXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnJlbnRMYXllcnMgPSBpZ29NYXAubGF5ZXJzJC5nZXRWYWx1ZSgpO1xuICAgIGNvbnRleHQubGF5ZXJzID0gY3VycmVudExheWVyc1xuICAgICAgLmZpbHRlcigobCkgPT4gbC5iYXNlTGF5ZXIpXG4gICAgICAubWFwKChsKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmFzZUxheWVyOiB0cnVlLFxuICAgICAgICAgIHNvdXJjZU9wdGlvbnM6IGwub3B0aW9ucy5zb3VyY2VPcHRpb25zLFxuICAgICAgICAgIHRpdGxlOiBsLm9wdGlvbnMudGl0bGUsXG4gICAgICAgICAgdmlzaWJsZTogbC52aXNpYmxlXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIGxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgY29uc3QgbGF5ZXJGb3VuZCA9IGN1cnJlbnRDb250ZXh0LmxheWVycy5maW5kKFxuICAgICAgICAoY29udGV4dExheWVyKSA9PlxuICAgICAgICAgIGxheWVyLmlkID09PSBjb250ZXh0TGF5ZXIuc291cmNlLmlkICYmICFjb250ZXh0TGF5ZXIuYmFzZUxheWVyXG4gICAgICApO1xuXG4gICAgICBpZiAobGF5ZXJGb3VuZCkge1xuICAgICAgICBsZXQgbGF5ZXJTdHlsZSA9IGxheWVyRm91bmRbYHN0eWxlYF07XG4gICAgICAgIGlmIChsYXllckZvdW5kW2BzdHlsZUJ5QXR0cmlidXRlYF0pIHtcbiAgICAgICAgICBsYXllclN0eWxlID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKGxheWVyRm91bmRbYGNsdXN0ZXJCYXNlU3R5bGVgXSkge1xuICAgICAgICAgIGxheWVyU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGxheWVyRm91bmQuc291cmNlT3B0aW9uc1tgc291cmNlYF07XG4gICAgICAgICAgZGVsZXRlIGxheWVyRm91bmQuc291cmNlT3B0aW9uc1tgZm9ybWF0YF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICBiYXNlTGF5ZXI6IGxheWVyRm91bmQuYmFzZUxheWVyLFxuICAgICAgICAgIHRpdGxlOiBsYXllci5vcHRpb25zLnRpdGxlLFxuICAgICAgICAgIHpJbmRleDogbGF5ZXIuekluZGV4LFxuICAgICAgICAgIHN0eWxlQnlBdHRyaWJ1dGU6IGxheWVyRm91bmRbYHN0eWxlQnlBdHRyaWJ1dGVgXSxcbiAgICAgICAgICBjbHVzdGVyQmFzZVN0eWxlOiBsYXllckZvdW5kW2BjbHVzdGVyQmFzZVN0eWxlYF0sXG4gICAgICAgICAgc3R5bGU6IGxheWVyU3R5bGUsXG4gICAgICAgICAgY2x1c3RlclBhcmFtOiBsYXllckZvdW5kW2BjbHVzdGVyUGFyYW1gXSxcbiAgICAgICAgICB2aXNpYmxlOiBsYXllci52aXNpYmxlLFxuICAgICAgICAgIG9wYWNpdHk6IGxheWVyLm9wYWNpdHksXG4gICAgICAgICAgc291cmNlT3B0aW9uczogbGF5ZXJGb3VuZC5zb3VyY2VPcHRpb25zXG4gICAgICAgIH07XG4gICAgICAgIGNvbnRleHQubGF5ZXJzLnB1c2gob3B0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIShsYXllci5vbC5nZXRTb3VyY2UoKSBpbnN0YW5jZW9mIG9sVmVjdG9yU291cmNlKSkge1xuICAgICAgICAgIGNvbnN0IGNhdGFsb2dMYXllciA9IGxheWVyLm9wdGlvbnM7XG4gICAgICAgICAgY2F0YWxvZ0xheWVyLnpJbmRleCA9IGxheWVyLnpJbmRleDtcbiAgICAgICAgICBkZWxldGUgY2F0YWxvZ0xheWVyLnNvdXJjZTtcbiAgICAgICAgICBjb250ZXh0LmxheWVycy5wdXNoKGNhdGFsb2dMYXllcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGZlYXR1cmVzO1xuICAgICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBHZW9KU09OKCk7XG4gICAgICAgICAgaWYgKGxheWVyLm9sLmdldFNvdXJjZSgpIGluc3RhbmNlb2YgQ2x1c3Rlcikge1xuICAgICAgICAgICAgY29uc3QgY2x1c3RlclNvdXJjZSA9IGxheWVyLm9sLmdldFNvdXJjZSgpIGFzIENsdXN0ZXI7XG4gICAgICAgICAgICBmZWF0dXJlcyA9IHdyaXRlci53cml0ZUZlYXR1cmVzKFxuICAgICAgICAgICAgICBjbHVzdGVyU291cmNlLmdldEZlYXR1cmVzKCksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246ICdFUFNHOjM4NTcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGxheWVyLm9sLmdldFNvdXJjZSgpIGFzIGFueTtcbiAgICAgICAgICAgIGZlYXR1cmVzID0gd3JpdGVyLndyaXRlRmVhdHVyZXMoXG4gICAgICAgICAgICAgIHNvdXJjZS5nZXRGZWF0dXJlcygpLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiAnRVBTRzozODU3J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0dXJlcyA9IEpTT04ucGFyc2UoZmVhdHVyZXMpO1xuICAgICAgICAgIGZlYXR1cmVzLm5hbWUgPSBsYXllci5vcHRpb25zLnRpdGxlO1xuICAgICAgICAgIGNvbnRleHQuZXh0cmFGZWF0dXJlcy5wdXNoKGZlYXR1cmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC50b29sYmFyID0gdGhpcy50b29sYmFyO1xuICAgIGNvbnRleHQudG9vbHMgPSB0aGlzLnRvb2xzO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBzZXRUb29scyh0b29sczogVG9vbFtdKSB7XG4gICAgdGhpcy50b29scyA9IHRvb2xzO1xuICB9XG5cbiAgc2V0VG9vbGJhcih0b29sYmFyOiBzdHJpbmdbXSkge1xuICAgIHRoaXMudG9vbGJhciA9IHRvb2xiYXI7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbnRleHRNZXNzYWdlKGNvbnRleHQ6IERldGFpbGVkQ29udGV4dCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQkLnZhbHVlICYmIGNvbnRleHQudXJpICYmIHRoaXMuY29udGV4dCQudmFsdWUudXJpICE9PSBjb250ZXh0LnVyaSkge1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5yZW1vdmVBbGxBcmVOb3RFcnJvcigpO1xuICAgIH1cblxuICAgIGNvbnRleHQubWVzc2FnZXMgPSBjb250ZXh0Lm1lc3NhZ2VzID8gY29udGV4dC5tZXNzYWdlcyA6IFtdO1xuICAgIGNvbnRleHQubWVzc2FnZXMucHVzaChjb250ZXh0Lm1lc3NhZ2UpO1xuICAgIGNvbnRleHQubWVzc2FnZXMubWFwKG1lc3NhZ2UgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZS50aXRsZSA9IG1lc3NhZ2UudGl0bGVcbiAgICAgICAgICA/IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KG1lc3NhZ2UudGl0bGUpXG4gICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIG1lc3NhZ2UudGV4dCA9IG1lc3NhZ2UudGV4dFxuICAgICAgICAgID8gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQobWVzc2FnZS50ZXh0KVxuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2UobWVzc2FnZSBhcyBNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udGV4dEJ5VXJpKHVyaTogc3RyaW5nKTogT2JzZXJ2YWJsZTxEZXRhaWxlZENvbnRleHQ+IHtcbiAgICBpZiAodGhpcy5iYXNlVXJsKSB7XG4gICAgICBsZXQgY29udGV4dFRvTG9hZDtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuY29udGV4dHMkLnZhbHVlKSkge1xuICAgICAgICBjb250ZXh0VG9Mb2FkID0gdGhpcy5jb250ZXh0cyQudmFsdWVba2V5XS5maW5kKChjKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGMudXJpID09PSB1cmk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29udGV4dFRvTG9hZCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZXh0VG9Mb2FkICYmIGNvbnRleHRUb0xvYWQuaW1wb3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIG9mKGNvbnRleHRUb0xvYWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPIDogdXNlIGFsd2F5cyBpZCBvciB1cmlcbiAgICAgIGNvbnN0IGlkID0gY29udGV4dFRvTG9hZCA/IGNvbnRleHRUb0xvYWQuaWQgOiB1cmk7XG4gICAgICByZXR1cm4gdGhpcy5nZXREZXRhaWxzKGlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbXBvcnRlZENvbnRleHQgPSB0aGlzLmNvbnRleHRzJC52YWx1ZS5vdXJzLmZpbmQoKGN1cnJlbnRDb250ZXh0KSA9PiB7XG4gICAgICByZXR1cm4gY3VycmVudENvbnRleHQudXJpID09PSB1cmkgJiYgY3VycmVudENvbnRleHQuaW1wb3J0ZWQgPT09IHRydWU7XG4gICAgfSk7XG5cbiAgICBpZiAoaW1wb3J0ZWRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gb2YoaW1wb3J0ZWRDb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9jYWxDb250ZXh0KHVyaSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29udGV4dExheWVycyhpZ29NYXA6IElnb01hcCkge1xuICAgIGNvbnN0IGxheWVyczogTGF5ZXJbXSA9IFtdO1xuICAgIGNvbnN0IG1hcExheWVycyA9IGlnb01hcC5sYXllcnMkLmdldFZhbHVlKCk7XG4gICAgbWFwTGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICBpZiAoIWxheWVyLmJhc2VMYXllciAmJiBsYXllci5vcHRpb25zLmlkICE9PSAnc2VhcmNoUG9pbnRlclN1bW1hcnlJZCcpIHtcbiAgICAgICAgbGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsYXllcnM7XG4gIH1cblxuICBwcml2YXRlIHJlYWRQYXJhbXNGcm9tUm91dGUoKSB7XG4gICAgaWYgKCF0aGlzLnJvdXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgY29uc3QgY2VudGVyS2V5ID0gdGhpcy5yb3V0ZS5vcHRpb25zLmNlbnRlcktleTtcbiAgICAgIGlmIChjZW50ZXJLZXkgJiYgcGFyYW1zW2NlbnRlcktleSBhcyBzdHJpbmddKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlclBhcmFtcyA9IHBhcmFtc1tjZW50ZXJLZXkgYXMgc3RyaW5nXTtcbiAgICAgICAgdGhpcy5tYXBWaWV3RnJvbVJvdXRlLmNlbnRlciA9IGNlbnRlclBhcmFtcy5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xuICAgICAgICB0aGlzLm1hcFZpZXdGcm9tUm91dGUuZ2VvbG9jYXRlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb2plY3Rpb25LZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMucHJvamVjdGlvbktleTtcbiAgICAgIGlmIChwcm9qZWN0aW9uS2V5ICYmIHBhcmFtc1twcm9qZWN0aW9uS2V5IGFzIHN0cmluZ10pIHtcbiAgICAgICAgY29uc3QgcHJvamVjdGlvblBhcmFtID0gcGFyYW1zW3Byb2plY3Rpb25LZXkgYXMgc3RyaW5nXTtcbiAgICAgICAgdGhpcy5tYXBWaWV3RnJvbVJvdXRlLnByb2plY3Rpb24gPSBwcm9qZWN0aW9uUGFyYW07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHpvb21LZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMuem9vbUtleTtcbiAgICAgIGlmICh6b29tS2V5ICYmIHBhcmFtc1t6b29tS2V5IGFzIHN0cmluZ10pIHtcbiAgICAgICAgY29uc3Qgem9vbVBhcmFtID0gcGFyYW1zW3pvb21LZXkgYXMgc3RyaW5nXTtcbiAgICAgICAgdGhpcy5tYXBWaWV3RnJvbVJvdXRlLnpvb20gPSBOdW1iZXIoem9vbVBhcmFtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGF0aChmaWxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBiYXNlUGF0aCA9IHRoaXMub3B0aW9ucy5iYXNlUGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xuXG4gICAgcmV0dXJuIGAke2Jhc2VQYXRofS8ke2ZpbGV9YDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoXG4gICAgZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlLFxuICAgIHVyaTogc3RyaW5nLFxuICAgIHBlcm1pc3Npb25FcnJvcj86IGJvb2xlYW5cbiAgKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dHMkLnZhbHVlLm91cnMuZmluZCgob2JqKSA9PiBvYmoudXJpID09PSB1cmkpO1xuICAgIGNvbnN0IHRpdGxlQ29udGV4dCA9IGNvbnRleHQgPyBjb250ZXh0LnRpdGxlIDogdXJpO1xuICAgIGVycm9yLmVycm9yLnRpdGxlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAnaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuaW52YWxpZC50aXRsZSdcbiAgICApO1xuXG4gICAgZXJyb3IuZXJyb3IubWVzc2FnZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmludmFsaWQudGV4dCcsXG4gICAgICB7IHZhbHVlOiB0aXRsZUNvbnRleHQgfVxuICAgICk7XG5cbiAgICBlcnJvci5lcnJvci50b0Rpc3BsYXkgPSB0cnVlO1xuXG4gICAgaWYgKHBlcm1pc3Npb25FcnJvcikge1xuICAgICAgZXJyb3IuZXJyb3IudGl0bGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmVycm9ycy5hZGRQZXJtaXNzaW9uVGl0bGUnXG4gICAgICApO1xuICAgICAgZXJyb3IuZXJyb3IubWVzc2FnZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZXJyb3JzLmFkZFBlcm1pc3Npb24nXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKGVycm9yLmVycm9yLm1lc3NhZ2UsIGVycm9yLmVycm9yLnRpdGxlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29udGV4dHNDaGFuZ2UoXG4gICAga2VlcEN1cnJlbnRDb250ZXh0ID0gdHJ1ZVxuICApIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0JC52YWx1ZTtcbiAgICBjb25zdCBlZGl0ZWRDb250ZXh0ID0gdGhpcy5lZGl0ZWRDb250ZXh0JC52YWx1ZTtcbiAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC51cmkgPT09IHRoaXMub3B0aW9ucy5kZWZhdWx0Q29udGV4dFVyaSkge1xuICAgICAga2VlcEN1cnJlbnRDb250ZXh0ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICgha2VlcEN1cnJlbnRDb250ZXh0IHx8ICF0aGlzLmZpbmRDb250ZXh0KGNvbnRleHQpKSB7XG4gICAgICB0aGlzLmRlZmF1bHRDb250ZXh0VXJpID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5sb2FkRGVmYXVsdENvbnRleHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRDb250ZXh0QnlVcmkoY29udGV4dC51cmkpXG4gICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKG5ld0NvbnRleHQ6IERldGFpbGVkQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b29sc0NoYW5nZWQkLm5leHQobmV3Q29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICBpZiAodGhpcy5iYXNlVXJsICYmIHRoaXMuYXV0aFNlcnZpY2UuYXV0aGVudGljYXRlZCkge1xuICAgICAgICB0aGlzLmdldERlZmF1bHQoKS5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZWRpdGVkRm91bmQgPSB0aGlzLmZpbmRDb250ZXh0KGVkaXRlZENvbnRleHQpO1xuICAgIGlmICghZWRpdGVkRm91bmQgfHwgZWRpdGVkRm91bmQucGVybWlzc2lvbiAhPT0gJ3dyaXRlJykge1xuICAgICAgdGhpcy5zZXRFZGl0ZWRDb250ZXh0KHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDb250ZXh0VG9MaXN0KGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0Rm91bmQgPSB0aGlzLmZpbmRDb250ZXh0KGNvbnRleHQpO1xuICAgIGlmICghY29udGV4dEZvdW5kKSB7XG4gICAgICBjb25zdCBjb250ZXh0U2ltcGxpZmllID0ge1xuICAgICAgICBpZDogY29udGV4dC5pZCxcbiAgICAgICAgdXJpOiBjb250ZXh0LnVyaSxcbiAgICAgICAgdGl0bGU6IGNvbnRleHQudGl0bGUsXG4gICAgICAgIHNjb3BlOiBjb250ZXh0LnNjb3BlLFxuICAgICAgICBwZXJtaXNzaW9uOiBUeXBlUGVybWlzc2lvbltUeXBlUGVybWlzc2lvbi5yZWFkXVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuY29udGV4dHMkLnZhbHVlICYmIHRoaXMuY29udGV4dHMkLnZhbHVlLnB1YmxpYykge1xuICAgICAgICB0aGlzLmNvbnRleHRzJC52YWx1ZS5wdWJsaWMucHVzaChjb250ZXh0U2ltcGxpZmllKTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyQubmV4dCh0aGlzLmNvbnRleHRzJC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kQ29udGV4dChjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dHMgPSB0aGlzLmNvbnRleHRzJC52YWx1ZTtcbiAgICBsZXQgZm91bmQ7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY29udGV4dHMpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbnRleHRzW2tleV07XG4gICAgICBmb3VuZCA9IHZhbHVlLmZpbmQoXG4gICAgICAgIChjKSA9PlxuICAgICAgICAgIChjb250ZXh0LmlkICYmIGMuaWQgPT09IGNvbnRleHQuaWQpIHx8XG4gICAgICAgICAgKGNvbnRleHQudXJpICYmIGMudXJpID09PSBjb250ZXh0LnVyaSlcbiAgICAgICk7XG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG59XG4iXX0=