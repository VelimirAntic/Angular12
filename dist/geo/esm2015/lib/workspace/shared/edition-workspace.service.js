import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ActionStore, EntityStoreFilterCustomFuncStrategy, EntityStoreFilterSelectionStrategy, EntityTableColumnRenderer } from '@igo2/common';
import { catchError, map, skipWhile, take } from 'rxjs/operators';
import { FeatureDataSource } from '../../datasource/shared/datasources/feature-datasource';
import { FeatureMotion, FeatureStore, FeatureStoreInMapExtentStrategy, FeatureStoreInMapResolutionStrategy, FeatureStoreLoadingLayerStrategy, FeatureStoreSelectionStrategy } from '../../feature';
import { LinkedProperties, VectorLayer } from '../../layer';
import { EditionWorkspace } from './edition-workspace';
import { BehaviorSubject, throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../layer";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@igo2/auth";
export class EditionWorkspaceService {
    constructor(layerService, storageService, configService, messageService, languageService, http, dialog, authInterceptor) {
        this.layerService = layerService;
        this.storageService = storageService;
        this.configService = configService;
        this.messageService = messageService;
        this.languageService = languageService;
        this.http = http;
        this.dialog = dialog;
        this.authInterceptor = authInterceptor;
        this.ws$ = new BehaviorSubject(undefined);
        this.adding$ = new BehaviorSubject(false);
        this.relationLayers$ = new BehaviorSubject(undefined);
        this.rowsInMapExtentCheckCondition$ = new BehaviorSubject(true);
        this.loading = false;
    }
    get zoomAuto() {
        return this.storageService.get('zoomAuto');
    }
    createWorkspace(layer, map) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.enabled) !== true || layer.dataSource.options.edition.enabled !== true) {
            return;
        }
        let wksConfig;
        if (layer.options.workspace) {
            wksConfig = layer.options.workspace;
        }
        else {
            wksConfig = {};
        }
        wksConfig.srcId = layer.id;
        wksConfig.workspaceId = layer.id;
        wksConfig.enabled = true;
        wksConfig.pageSize = (_b = layer.options.workspace) === null || _b === void 0 ? void 0 : _b.pageSize;
        wksConfig.pageSizeOptions = (_c = layer.options.workspace) === null || _c === void 0 ? void 0 : _c.pageSizeOptions;
        const dataSource = layer.dataSource;
        const wmsLinkId = layer.id + '.WmsWorkspaceTableSrc';
        const wfsLinkId = layer.id + '.WfsWorkspaceTableDest';
        if (!layer.options.linkedLayers) {
            layer.options.linkedLayers = { linkId: wmsLinkId, links: [] };
        }
        const linkProperties = {
            bidirectionnal: true,
            syncedDelete: true,
            linkedIds: [wfsLinkId],
            properties: [
                LinkedProperties.ZINDEX,
                LinkedProperties.VISIBLE
            ]
        };
        if (!((_d = layer.options.workspace) === null || _d === void 0 ? void 0 : _d.minResolution)) {
            linkProperties.properties.push(LinkedProperties.MINRESOLUTION);
        }
        let hasOgcFilters = false;
        if ((_e = dataSource.options.ogcFilters) === null || _e === void 0 ? void 0 : _e.enabled) {
            linkProperties.properties.push(LinkedProperties.OGCFILTERS);
            hasOgcFilters = true;
        }
        if (!((_f = layer.options.workspace) === null || _f === void 0 ? void 0 : _f.maxResolution)) {
            linkProperties.properties.push(LinkedProperties.MAXRESOLUTION);
        }
        let clonedLinks = [];
        if (layer.options.linkedLayers.links) {
            clonedLinks = JSON.parse(JSON.stringify(layer.options.linkedLayers.links));
        }
        clonedLinks.push(linkProperties);
        layer.options.linkedLayers.linkId = layer.options.linkedLayers.linkId ? layer.options.linkedLayers.linkId : wmsLinkId,
            layer.options.linkedLayers.links = clonedLinks;
        let wks;
        this.layerService
            .createAsyncLayer({
            id: wfsLinkId,
            linkedLayers: {
                linkId: wfsLinkId
            },
            workspace: {
                srcId: layer.id,
                workspaceId: undefined,
                enabled: false,
                queryOptions: {
                    mapQueryOnOpenTab: (_h = (_g = layer.options.workspace) === null || _g === void 0 ? void 0 : _g.queryOptions) === null || _h === void 0 ? void 0 : _h.mapQueryOnOpenTab,
                    tabQuery: false
                },
                pageSize: (_j = layer.options.workspace) === null || _j === void 0 ? void 0 : _j.pageSize,
                pageSizeOptions: (_k = layer.options.workspace) === null || _k === void 0 ? void 0 : _k.pageSizeOptions
            },
            showInLayerList: false,
            opacity: 0,
            title: layer.title,
            minResolution: ((_l = layer.options.workspace) === null || _l === void 0 ? void 0 : _l.minResolution) || layer.minResolution || 0,
            maxResolution: ((_m = layer.options.workspace) === null || _m === void 0 ? void 0 : _m.maxResolution) || layer.maxResolution || Infinity,
            sourceOptions: {
                download: dataSource.options.download,
                type: 'wfs',
                url: dataSource.options.urlWfs || dataSource.options.url,
                queryable: true,
                relations: dataSource.options.relations,
                queryTitle: dataSource.options.queryTitle,
                params: dataSource.options.paramsWFS,
                ogcFilters: Object.assign({}, dataSource.ogcFilters$.value, { enabled: hasOgcFilters }),
                sourceFields: dataSource.options.sourceFields || undefined,
                edition: dataSource.options.edition
            }
        })
            .subscribe((workspaceLayer) => {
            map.addLayer(workspaceLayer);
            layer.ol.setProperties({ linkedLayers: { linkId: layer.options.linkedLayers.linkId, links: clonedLinks } }, false);
            workspaceLayer.dataSource.ol.refresh();
            wks = new EditionWorkspace({
                id: layer.id,
                title: layer.title,
                layer: workspaceLayer,
                map,
                entityStore: this.createFeatureStore(workspaceLayer, map),
                actionStore: new ActionStore([]),
                meta: {
                    tableTemplate: undefined
                }
            }, this, this.dialog, this.configService);
            this.createTableTemplate(wks, workspaceLayer);
            workspaceLayer.options.workspace.workspaceId = workspaceLayer.id;
            layer.options.workspace = Object.assign({}, layer.options.workspace, {
                wksConfig
            });
            delete dataSource.options.download;
            return wks;
        });
        return wks;
    }
    createFeatureStore(layer, map) {
        const store = new FeatureStore([], { map });
        store.bindLayer(layer);
        const loadingStrategy = new FeatureStoreLoadingLayerStrategy({});
        const inMapExtentStrategy = new FeatureStoreInMapExtentStrategy({});
        const inMapResolutionStrategy = new FeatureStoreInMapResolutionStrategy({});
        const selectedRecordStrategy = new EntityStoreFilterSelectionStrategy({});
        const selectionStrategy = new FeatureStoreSelectionStrategy({
            layer: new VectorLayer({
                zIndex: 300,
                source: new FeatureDataSource(),
                style: undefined,
                showInLayerList: false,
                exportable: false,
                browsable: false
            }),
            map,
            hitTolerance: 15,
            motion: this.zoomAuto ? FeatureMotion.Default : FeatureMotion.None,
            many: true,
            dragBox: true
        });
        store.addStrategy(loadingStrategy, true);
        store.addStrategy(inMapExtentStrategy, true);
        store.addStrategy(inMapResolutionStrategy, true);
        store.addStrategy(selectionStrategy, true);
        store.addStrategy(selectedRecordStrategy, false);
        store.addStrategy(this.createFilterInMapExtentOrResolutionStrategy(), true);
        return store;
    }
    createTableTemplate(workspace, layer) {
        const fields = layer.dataSource.options.sourceFields || [];
        const relations = layer.dataSource.options.relations || [];
        let rendererType = EntityTableColumnRenderer.UnsanitizedHTML;
        let buttons = [];
        let columns = [];
        let relationsColumn = [];
        buttons = [{
                name: 'edition',
                title: undefined,
                renderer: EntityTableColumnRenderer.ButtonGroup,
                primary: false,
                valueAccessor: () => {
                    return [{
                            editMode: false,
                            icon: 'pencil',
                            color: 'primary',
                            click: (feature) => { workspace.editFeature(feature, workspace); }
                        },
                        {
                            editMode: false,
                            icon: 'delete',
                            color: 'warn',
                            click: (feature) => { workspace.deleteFeature(feature, workspace); }
                        },
                        {
                            editMode: true,
                            icon: 'check',
                            color: 'primary',
                            disabled: this.loading,
                            click: (feature) => { this.saveFeature(feature, workspace); }
                        },
                        {
                            editMode: true,
                            icon: 'alpha-x',
                            color: 'primary',
                            disabled: this.loading,
                            click: (feature) => { this.cancelEdit(workspace, feature); }
                        }];
                }
            }];
        if (fields.length === 0) {
            workspace.entityStore.entities$.pipe(skipWhile(val => val.length === 0), take(1)).subscribe(entities => {
                const ol = entities[0].ol;
                const columnsFromFeatures = ol.getKeys()
                    .filter(col => !col.startsWith('_') &&
                    col !== 'geometry' &&
                    col !== ol.getGeometryName() &&
                    !col.match(/boundedby/gi))
                    .map(key => {
                    return {
                        name: `properties.${key}`,
                        title: key,
                        renderer: rendererType,
                    };
                });
                workspace.meta.tableTemplate = {
                    selection: false,
                    sort: true,
                    columns: columnsFromFeatures
                };
            });
            return;
        }
        columns = fields.map((field) => {
            let column = {
                name: `properties.${field.name}`,
                title: field.alias ? field.alias : field.name,
                renderer: rendererType,
                valueAccessor: undefined,
                cellClassFunc: () => {
                    const cellClass = {};
                    if (field.type) {
                        cellClass[`class_${field.type}`] = true;
                        return cellClass;
                    }
                },
                primary: field.primary === true ? true : false,
                visible: field.visible,
                validation: field.validation,
                type: field.type,
                domainValues: undefined,
                relation: undefined,
                multiple: field.multiple,
                step: field.step,
                tooltip: field.tooltip
            };
            if (field.type === 'list' || field.type === 'autocomplete') {
                this.getDomainValues(field.relation.table).subscribe(result => {
                    column.domainValues = result;
                    column.relation = field.relation;
                });
            }
            return column;
        });
        relationsColumn = relations.map((relation) => {
            return {
                name: `properties.${relation.name}`,
                title: relation.alias ? relation.alias : relation.name,
                renderer: EntityTableColumnRenderer.Icon,
                icon: relation.icon,
                parent: relation.parent,
                type: 'relation',
                tooltip: relation.tooltip,
                onClick: () => {
                    if (this.adding$.getValue() === false) {
                        this.ws$.next(relation.title);
                    }
                },
                cellClassFunc: () => {
                    return { 'class_icon': true };
                }
            };
        });
        columns.push(...relationsColumn);
        columns.push(...buttons);
        workspace.meta.tableTemplate = {
            selection: false,
            sort: true,
            columns
        };
    }
    createFilterInMapExtentOrResolutionStrategy() {
        const filterClauseFunc = (record) => {
            return record.state.inMapExtent === true && record.state.inMapResolution === true;
        };
        return new EntityStoreFilterCustomFuncStrategy({ filterClauseFunc });
    }
    saveFeature(feature, workspace) {
        if (!this.validateFeature(feature, workspace)) {
            return false;
        }
        this.sanitizeParameter(feature, workspace);
        let url = this.configService.getConfig('edition.url');
        if (workspace.layer.dataSource.options.edition.baseUrl) {
            url += workspace.layer.dataSource.options.edition.baseUrl;
        }
        if (feature.newFeature) {
            url += workspace.layer.dataSource.options.edition.addUrl;
            const addHeaders = workspace.layer.dataSource.options.edition.addHeaders;
            const headers = new HttpHeaders(addHeaders);
            this.addFeature(feature, workspace, url, headers);
        }
        else {
            if (workspace.layer.dataSource.options.edition.modifyProtocol !== "post") {
                url += '?' + workspace.layer.dataSource.options.edition.modifyUrl + feature.idkey;
            }
            else {
                url += workspace.layer.dataSource.options.edition.modifyUrl;
            }
            const protocole = workspace.layer.dataSource.options.edition.modifyProtocol;
            const modifyHeaders = workspace.layer.dataSource.options.edition.modifyHeaders;
            const headers = new HttpHeaders(modifyHeaders);
            this.modifyFeature(feature, workspace, url, headers, protocole);
        }
    }
    addFeature(feature, workspace, url, headers) {
        var _a;
        // TODO: adapt to any kind of geometry
        if (workspace.layer.dataSource.options.edition.hasGeometry) {
            //feature.properties[geom] = feature.geometry;
            feature.properties["longitude"] = feature.geometry.coordinates[0];
            feature.properties["latitude"] = feature.geometry.coordinates[1];
        }
        for (const property in feature.properties) {
            for (const sf of workspace.layer.dataSource.options.sourceFields) {
                if (sf.name === property && ((_a = sf.validation) === null || _a === void 0 ? void 0 : _a.readonly)) {
                    delete feature.properties[property];
                }
            }
        }
        this.loading = true;
        this.http.post(`${url}`, feature.properties, { headers: headers }).subscribe(() => {
            this.loading = false;
            workspace.entityStore.stateView.clear();
            workspace.deleteDrawings();
            workspace.entityStore.delete(feature);
            const message = this.languageService.translate.instant('igo.geo.workspace.addSuccess');
            this.messageService.success(message);
            this.refreshMap(workspace.layer, workspace.layer.map);
            this.adding$.next(false);
            this.rowsInMapExtentCheckCondition$.next(true);
        }, error => {
            this.loading = false;
            error.error.caught = true;
            const genericErrorMessage = this.languageService.translate.instant('igo.geo.workspace.addError');
            const messages = workspace.layer.dataSource.options.edition.messages;
            if (messages) {
                let text;
                messages.forEach(message => {
                    const key = Object.keys(message)[0];
                    if (error.error.message.includes(key)) {
                        text = message[key];
                        this.messageService.error(text);
                    }
                });
                if (!text) {
                    this.messageService.error(genericErrorMessage);
                }
            }
            else {
                this.messageService.error(genericErrorMessage);
            }
        });
    }
    deleteFeature(workspace, url) {
        this.loading = true;
        this.http.delete(`${url}`, {}).subscribe(() => {
            this.loading = false;
            const message = this.languageService.translate.instant('igo.geo.workspace.deleteSuccess');
            this.messageService.success(message);
            this.refreshMap(workspace.layer, workspace.layer.map);
            for (const relation of workspace.layer.options.sourceOptions.relations) {
                workspace.map.layers.forEach((layer) => {
                    if (layer.title === relation.title) {
                        layer.dataSource.ol.refresh();
                    }
                });
            }
        }, error => {
            this.loading = false;
            error.error.caught = true;
            const genericErrorMessage = this.languageService.translate.instant('igo.geo.workspace.addError');
            const messages = workspace.layer.dataSource.options.edition.messages;
            if (messages) {
                let text;
                messages.forEach(message => {
                    const key = Object.keys(message)[0];
                    if (error.error.message.includes(key)) {
                        text = message[key];
                        this.messageService.error(text);
                    }
                });
                if (!text) {
                    this.messageService.error(genericErrorMessage);
                }
            }
            else {
                this.messageService.error(genericErrorMessage);
            }
        });
    }
    modifyFeature(feature, workspace, url, headers, protocole = 'patch') {
        var _a;
        //TODO: adapt to any kind of geometry
        if (workspace.layer.dataSource.options.edition.hasGeometry) {
            //feature.properties[geom] = feature.geometry;
            feature.properties["longitude"] = feature.geometry.coordinates[0];
            feature.properties["latitude"] = feature.geometry.coordinates[1];
        }
        for (const property in feature.properties) {
            for (const sf of workspace.layer.dataSource.options.sourceFields) {
                if ((sf.name === property && ((_a = sf.validation) === null || _a === void 0 ? void 0 : _a.readonly)) || property === 'boundedBy') {
                    delete feature.properties[property];
                }
            }
        }
        this.loading = true;
        this.http[protocole](`${url}`, feature.properties, { headers: headers }).subscribe(() => {
            this.loading = false;
            this.cancelEdit(workspace, feature, true);
            const message = this.languageService.translate.instant('igo.geo.workspace.modifySuccess');
            this.messageService.success(message);
            this.refreshMap(workspace.layer, workspace.layer.map);
            let relationLayers = [];
            for (const relation of workspace.layer.options.sourceOptions.relations) {
                workspace.map.layers.forEach((layer) => {
                    if (layer.title === relation.title) {
                        relationLayers.push(layer);
                        layer.dataSource.ol.refresh();
                    }
                });
            }
            this.relationLayers$.next(relationLayers);
        }, error => {
            this.loading = false;
            error.error.caught = true;
            const genericErrorMessage = this.languageService.translate.instant('igo.geo.workspace.addError');
            const messages = workspace.layer.dataSource.options.edition.messages;
            if (messages) {
                let text;
                messages.forEach(message => {
                    const key = Object.keys(message)[0];
                    if (error.error.message.includes(key)) {
                        text = message[key];
                        this.messageService.error(text);
                    }
                });
                if (!text) {
                    this.messageService.error(genericErrorMessage);
                }
            }
            else {
                this.messageService.error(genericErrorMessage);
            }
        });
    }
    cancelEdit(workspace, feature, fromSave = false) {
        feature.edition = false;
        this.adding$.next(false);
        workspace.deleteDrawings();
        if (feature.newFeature) {
            workspace.entityStore.stateView.clear();
            workspace.entityStore.delete(feature);
            workspace.deactivateDrawControl();
            this.rowsInMapExtentCheckCondition$.next(true);
        }
        else {
            if (!fromSave) {
                feature.properties = feature.original_properties;
                feature.geometry = feature.original_geometry;
            }
            delete feature.original_properties;
            delete feature.original_geometry;
        }
    }
    getDomainValues(table) {
        let url = this.configService.getConfig('edition.url') + table;
        return this.http.get(url).pipe(map(result => {
            return result;
        }), catchError((err) => {
            return throwError(err);
        }));
    }
    /*
     * Refresh both wms and wfs layer
     * A new wfs loader is used to ensure cache is not retrieving old data
     * WMS params are updated to ensure layer is correctly refreshed
     */
    refreshMap(layer, map) {
        var _a, _b;
        const wfsOlLayer = layer.dataSource.ol;
        const loader = (extent, resolution, proj, success, failure) => {
            layer.customWFSLoader(layer.ol.getSource(), layer.options.sourceOptions, this.authInterceptor, extent, resolution, proj, success, failure, true);
        };
        wfsOlLayer.setLoader(loader);
        wfsOlLayer.refresh();
        for (const lay of map.layers) {
            if (lay.id !== layer.id &&
                ((_a = lay.options.linkedLayers) === null || _a === void 0 ? void 0 : _a.linkId.includes(layer.id.substr(0, layer.id.indexOf('.') - 1))) &&
                ((_b = lay.options.linkedLayers) === null || _b === void 0 ? void 0 : _b.linkId.includes('WmsWorkspaceTableSrc'))) {
                const wmsOlLayer = lay.dataSource.ol;
                let params = wmsOlLayer.getParams();
                params._t = new Date().getTime();
                wmsOlLayer.updateParams(params);
            }
        }
    }
    validateFeature(feature, workspace) {
        const translate = this.languageService.translate;
        let message;
        let key;
        let valid = true;
        workspace.meta.tableTemplate.columns.forEach(column => {
            if (column.hasOwnProperty('validation') && column.validation) {
                key = getColumnKeyWithoutPropertiesTag(column.name);
                Object.keys(column.validation).forEach((type) => {
                    switch (type) {
                        case 'mandatory': {
                            if (column.validation[type] && (!feature.properties.hasOwnProperty(key) || !feature.properties[key])) {
                                valid = false;
                                message = translate.instant('igo.geo.formValidation.mandatory', {
                                    column: column.title
                                });
                                this.messageService.error(message);
                            }
                            break;
                        }
                        case 'minValue': {
                            if (feature.properties.hasOwnProperty(key) && feature.properties[key] && feature.properties[key] < column.validation[type]) {
                                valid = false;
                                message = translate.instant('igo.geo.formValidation.minValue', {
                                    column: column.title,
                                    value: column.validation[type]
                                });
                                this.messageService.error(message);
                            }
                            break;
                        }
                        case 'maxValue': {
                            if (feature.properties.hasOwnProperty(key) && feature.properties[key] && feature.properties[key] > column.validation[type]) {
                                valid = false;
                                message = translate.instant('igo.geo.formValidation.maxValue', {
                                    column: column.title,
                                    value: column.validation[type]
                                });
                                this.messageService.error(message);
                            }
                            break;
                        }
                        case 'minLength': {
                            if (feature.properties.hasOwnProperty(key) && feature.properties[key] &&
                                feature.properties[key].length < column.validation[type]) {
                                valid = false;
                                message = translate.instant('igo.geo.formValidation.minLength', {
                                    column: column.title,
                                    value: column.validation[type]
                                });
                                this.messageService.error(message);
                            }
                            break;
                        }
                        case 'maxLength': {
                            if (feature.properties.hasOwnProperty(key) && feature.properties[key] &&
                                feature.properties[key].length > column.validation[type]) {
                                valid = false;
                                message = translate.instant('igo.geo.formValidation.maxLength', {
                                    column: column.title,
                                    value: column.validation[type]
                                });
                                this.messageService.error(message);
                            }
                            break;
                        }
                    }
                });
            }
        });
        return valid;
    }
    sanitizeParameter(feature, workspace) {
        workspace.meta.tableTemplate.columns.forEach(column => {
            if (column.type === 'list' && feature.properties[getColumnKeyWithoutPropertiesTag(column.name)]) {
                feature.properties[getColumnKeyWithoutPropertiesTag(column.name)] =
                    feature.properties[getColumnKeyWithoutPropertiesTag(column.name)].toString();
            }
        });
    }
}
EditionWorkspaceService.ɵfac = function EditionWorkspaceService_Factory(t) { return new (t || EditionWorkspaceService)(i0.ɵɵinject(i1.LayerService), i0.ɵɵinject(i2.StorageService), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i2.LanguageService), i0.ɵɵinject(i3.HttpClient), i0.ɵɵinject(i4.MatDialog), i0.ɵɵinject(i5.AuthInterceptor)); };
EditionWorkspaceService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EditionWorkspaceService, factory: EditionWorkspaceService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditionWorkspaceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.LayerService }, { type: i2.StorageService }, { type: i2.ConfigService }, { type: i2.MessageService }, { type: i2.LanguageService }, { type: i3.HttpClient }, { type: i4.MatDialog }, { type: i5.AuthInterceptor }]; }, null); })();
function getColumnKeyWithoutPropertiesTag(column) {
    if (column.includes('properties.')) {
        return column.split('.')[1];
    }
    return column;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGlvbi13b3Jrc3BhY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3dvcmtzcGFjZS9zaGFyZWQvZWRpdGlvbi13b3Jrc3BhY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBaUMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEYsT0FBTyxFQUNMLFdBQVcsRUFFWCxtQ0FBbUMsRUFDbkMsa0NBQWtDLEVBRWxDLHlCQUF5QixFQUVQLE1BQU0sY0FBYyxDQUFDO0FBR3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUUzRixPQUFPLEVBRUwsYUFBYSxFQUNiLFlBQVksRUFDWiwrQkFBK0IsRUFDL0IsbUNBQW1DLEVBQ25DLGdDQUFnQyxFQUNoQyw2QkFBNkIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd0RCxPQUFPLEVBQWtELGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUk1RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUt2RCxPQUFPLEVBQUUsZUFBZSxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQUsvRCxNQUFNLE9BQU8sdUJBQXVCO0lBWWxDLFlBQ1UsWUFBMEIsRUFDMUIsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsSUFBZ0IsRUFDaEIsTUFBaUIsRUFDbEIsZUFBaUM7UUFQaEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFj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QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7NkJBQ3BDOzRCQUNELE1BQU07eUJBQ1A7cUJBQ0E7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDTjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFNBQTJCO1FBQ3BELFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLGdDQUFnQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUMvRixPQUFPLENBQUMsVUFBVSxDQUFDLGdDQUFnQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0QsT0FBTyxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNoRjtRQUVILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OEZBcHJCVSx1QkFBdUI7NkVBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUIsbUJBRnRCLE1BQU07dUZBRVAsdUJBQXVCO2NBSG5DLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7QUF5ckJELFNBQVMsZ0NBQWdDLENBQUMsTUFBYztJQUN0RCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7XG4gIEFjdGlvblN0b3JlLFxuICBFbnRpdHlSZWNvcmQsXG4gIEVudGl0eVN0b3JlRmlsdGVyQ3VzdG9tRnVuY1N0cmF0ZWd5LFxuICBFbnRpdHlTdG9yZUZpbHRlclNlbGVjdGlvblN0cmF0ZWd5LFxuICBFbnRpdHlTdG9yZVN0cmF0ZWd5RnVuY09wdGlvbnMsXG4gIEVudGl0eVRhYmxlQ29sdW1uUmVuZGVyZXIsXG4gIEVudGl0eVRhYmxlVGVtcGxhdGUsXG4gIEVudGl0eVRhYmxlQnV0dG9ufSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlLCBNZXNzYWdlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBza2lwV2hpbGUsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZWxhdGlvbk9wdGlvbnMsIFNvdXJjZUZpZWxkc09wdGlvbnNQYXJhbXMsIFdNU0RhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcbmltcG9ydCB7IEZlYXR1cmVEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvZmVhdHVyZS1kYXRhc291cmNlJztcbmltcG9ydCB7IFdGU0RhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvd2ZzLWRhdGFzb3VyY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7XG4gIEZlYXR1cmUsXG4gIEZlYXR1cmVNb3Rpb24sXG4gIEZlYXR1cmVTdG9yZSxcbiAgRmVhdHVyZVN0b3JlSW5NYXBFeHRlbnRTdHJhdGVneSxcbiAgRmVhdHVyZVN0b3JlSW5NYXBSZXNvbHV0aW9uU3RyYXRlZ3ksXG4gIEZlYXR1cmVTdG9yZUxvYWRpbmdMYXllclN0cmF0ZWd5LFxuICBGZWF0dXJlU3RvcmVTZWxlY3Rpb25TdHJhdGVneX0gZnJvbSAnLi4vLi4vZmVhdHVyZSc7XG5cbmltcG9ydCB7IE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ZpbHRlci9zaGFyZWQvb2djLWZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSW1hZ2VMYXllciwgTGF5ZXJTZXJ2aWNlLCBMYXllcnNMaW5rUHJvcGVydGllcywgTGlua2VkUHJvcGVydGllcywgVmVjdG9yTGF5ZXIgfSBmcm9tICcuLi8uLi9sYXllcic7XG5pbXBvcnQgeyBHZW9Xb3Jrc3BhY2VPcHRpb25zIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9sYXllci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwJztcbmltcG9ydCB7IFF1ZXJ5YWJsZURhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vLi4vcXVlcnkvc2hhcmVkL3F1ZXJ5LmludGVyZmFjZXMnO1xuaW1wb3J0IHsgRWRpdGlvbldvcmtzcGFjZSB9IGZyb20gJy4vZWRpdGlvbi13b3Jrc3BhY2UnO1xuXG5pbXBvcnQgb2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IG9sU291cmNlSW1hZ2VXTVMgZnJvbSAnb2wvc291cmNlL0ltYWdlV01TJztcbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRWRpdGlvbldvcmtzcGFjZVNlcnZpY2Uge1xuXG4gIHB1YmxpYyB3cyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odW5kZWZpbmVkKTtcbiAgcHVibGljIGFkZGluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHVibGljIHJlbGF0aW9uTGF5ZXJzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SW1hZ2VMYXllcltdIHwgVmVjdG9yTGF5ZXJbXT4odW5kZWZpbmVkKTtcbiAgcHVibGljIHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG5cbiAgZ2V0IHpvb21BdXRvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnem9vbUF1dG8nKSBhcyBib29sZWFuO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsYXllclNlcnZpY2U6IExheWVyU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwdWJsaWMgYXV0aEludGVyY2VwdG9yPzogQXV0aEludGVyY2VwdG9yKSB7IH1cblxuICBjcmVhdGVXb3Jrc3BhY2UobGF5ZXI6IEltYWdlTGF5ZXIsIG1hcDogSWdvTWFwKTogRWRpdGlvbldvcmtzcGFjZSB7XG4gICAgaWYgKGxheWVyLm9wdGlvbnMud29ya3NwYWNlPy5lbmFibGVkICE9PSB0cnVlIHx8IGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uLmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHdrc0NvbmZpZztcbiAgICBpZiAobGF5ZXIub3B0aW9ucy53b3Jrc3BhY2UpIHtcbiAgICAgIHdrc0NvbmZpZyA9IGxheWVyLm9wdGlvbnMud29ya3NwYWNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB3a3NDb25maWcgPSB7fTtcbiAgICB9XG4gICAgd2tzQ29uZmlnLnNyY0lkID0gbGF5ZXIuaWQ7XG4gICAgd2tzQ29uZmlnLndvcmtzcGFjZUlkID0gbGF5ZXIuaWQ7XG4gICAgd2tzQ29uZmlnLmVuYWJsZWQgPSB0cnVlO1xuICAgIHdrc0NvbmZpZy5wYWdlU2l6ZSA9IGxheWVyLm9wdGlvbnMud29ya3NwYWNlPy5wYWdlU2l6ZTtcbiAgICB3a3NDb25maWcucGFnZVNpemVPcHRpb25zID0gbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2U/LnBhZ2VTaXplT3B0aW9ucztcblxuICAgIGNvbnN0IGRhdGFTb3VyY2U6IFdNU0RhdGFTb3VyY2UgPSBsYXllci5kYXRhU291cmNlIGFzIFdNU0RhdGFTb3VyY2UgO1xuICAgIGNvbnN0IHdtc0xpbmtJZCA9IGxheWVyLmlkICsgJy5XbXNXb3Jrc3BhY2VUYWJsZVNyYyc7XG4gICAgY29uc3Qgd2ZzTGlua0lkID0gbGF5ZXIuaWQgKyAnLldmc1dvcmtzcGFjZVRhYmxlRGVzdCc7XG4gICAgaWYgKCFsYXllci5vcHRpb25zLmxpbmtlZExheWVycykge1xuICAgICAgbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMgPSB7IGxpbmtJZDogd21zTGlua0lkLCBsaW5rczogW10gfTtcbiAgICB9XG4gICAgY29uc3QgbGlua1Byb3BlcnRpZXMgPSB7XG4gICAgICBiaWRpcmVjdGlvbm5hbDogdHJ1ZSxcbiAgICAgIHN5bmNlZERlbGV0ZTogdHJ1ZSxcbiAgICAgIGxpbmtlZElkczogW3dmc0xpbmtJZF0sXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIExpbmtlZFByb3BlcnRpZXMuWklOREVYLFxuICAgICAgICBMaW5rZWRQcm9wZXJ0aWVzLlZJU0lCTEVdXG4gICAgfSBhcyBMYXllcnNMaW5rUHJvcGVydGllcztcblxuICAgIGlmICghbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2U/Lm1pblJlc29sdXRpb24pIHtcbiAgICAgICBsaW5rUHJvcGVydGllcy5wcm9wZXJ0aWVzLnB1c2goTGlua2VkUHJvcGVydGllcy5NSU5SRVNPTFVUSU9OKTtcbiAgICB9XG4gICAgbGV0IGhhc09nY0ZpbHRlcnMgPSBmYWxzZTtcbiAgICBpZiAoKGRhdGFTb3VyY2Uub3B0aW9ucyBhcyBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnMpLm9nY0ZpbHRlcnM/LmVuYWJsZWQpIHtcbiAgICAgIGxpbmtQcm9wZXJ0aWVzLnByb3BlcnRpZXMucHVzaChMaW5rZWRQcm9wZXJ0aWVzLk9HQ0ZJTFRFUlMpO1xuICAgICAgaGFzT2djRmlsdGVycyA9IHRydWU7XG4gICAgfVxuICAgIGlmICghbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2U/Lm1heFJlc29sdXRpb24pIHtcbiAgICAgIGxpbmtQcm9wZXJ0aWVzLnByb3BlcnRpZXMucHVzaChMaW5rZWRQcm9wZXJ0aWVzLk1BWFJFU09MVVRJT04pO1xuICAgIH1cblxuICAgIGxldCBjbG9uZWRMaW5rczogTGF5ZXJzTGlua1Byb3BlcnRpZXNbXSA9IFtdO1xuICAgIGlmIChsYXllci5vcHRpb25zLmxpbmtlZExheWVycy5saW5rcykge1xuICAgICAgY2xvbmVkTGlua3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGxheWVyLm9wdGlvbnMubGlua2VkTGF5ZXJzLmxpbmtzKSk7XG4gICAgfVxuICAgIGNsb25lZExpbmtzLnB1c2gobGlua1Byb3BlcnRpZXMpO1xuXG4gICAgbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua0lkID0gbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua0lkID8gbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua0lkIDogd21zTGlua0lkLFxuICAgICAgbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua3MgPSBjbG9uZWRMaW5rcztcbiAgICBpbnRlcmZhY2UgV0ZTb3B0aW9ucyBleHRlbmRzIFdGU0RhdGFTb3VyY2VPcHRpb25zLCBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnMgeyB9XG4gICAgbGV0IHdrcztcbiAgICB0aGlzLmxheWVyU2VydmljZVxuICAgICAgLmNyZWF0ZUFzeW5jTGF5ZXIoe1xuICAgICAgICBpZDogd2ZzTGlua0lkLFxuICAgICAgICBsaW5rZWRMYXllcnM6IHtcbiAgICAgICAgICBsaW5rSWQ6IHdmc0xpbmtJZFxuICAgICAgICB9LFxuICAgICAgICB3b3Jrc3BhY2U6IHtcbiAgICAgICAgICBzcmNJZDogbGF5ZXIuaWQsXG4gICAgICAgICAgd29ya3NwYWNlSWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBxdWVyeU9wdGlvbnM6IHtcbiAgICAgICAgICAgIG1hcFF1ZXJ5T25PcGVuVGFiOiBsYXllci5vcHRpb25zLndvcmtzcGFjZT8ucXVlcnlPcHRpb25zPy5tYXBRdWVyeU9uT3BlblRhYixcbiAgICAgICAgICAgIHRhYlF1ZXJ5OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFnZVNpemU6IGxheWVyLm9wdGlvbnMud29ya3NwYWNlPy5wYWdlU2l6ZSxcbiAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM6IGxheWVyLm9wdGlvbnMud29ya3NwYWNlPy5wYWdlU2l6ZU9wdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0luTGF5ZXJMaXN0OiBmYWxzZSxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdGl0bGU6IGxheWVyLnRpdGxlLFxuICAgICAgICBtaW5SZXNvbHV0aW9uOiBsYXllci5vcHRpb25zLndvcmtzcGFjZT8ubWluUmVzb2x1dGlvbiB8fCBsYXllci5taW5SZXNvbHV0aW9uIHx8IDAsXG4gICAgICAgIG1heFJlc29sdXRpb246IGxheWVyLm9wdGlvbnMud29ya3NwYWNlPy5tYXhSZXNvbHV0aW9uIHx8IGxheWVyLm1heFJlc29sdXRpb24gfHwgSW5maW5pdHksXG4gICAgICAgIHNvdXJjZU9wdGlvbnM6IHtcbiAgICAgICAgICBkb3dubG9hZDogZGF0YVNvdXJjZS5vcHRpb25zLmRvd25sb2FkLFxuICAgICAgICAgIHR5cGU6ICd3ZnMnLFxuICAgICAgICAgIHVybDogZGF0YVNvdXJjZS5vcHRpb25zLnVybFdmcyB8fCBkYXRhU291cmNlLm9wdGlvbnMudXJsLFxuICAgICAgICAgIHF1ZXJ5YWJsZTogdHJ1ZSxcbiAgICAgICAgICByZWxhdGlvbnM6IGRhdGFTb3VyY2Uub3B0aW9ucy5yZWxhdGlvbnMsXG4gICAgICAgICAgcXVlcnlUaXRsZTogKGRhdGFTb3VyY2Uub3B0aW9ucyBhcyBRdWVyeWFibGVEYXRhU291cmNlT3B0aW9ucykucXVlcnlUaXRsZSxcbiAgICAgICAgICBwYXJhbXM6IGRhdGFTb3VyY2Uub3B0aW9ucy5wYXJhbXNXRlMsXG4gICAgICAgICAgb2djRmlsdGVyczogT2JqZWN0LmFzc2lnbih7fSwgZGF0YVNvdXJjZS5vZ2NGaWx0ZXJzJC52YWx1ZSwge2VuYWJsZWQ6IGhhc09nY0ZpbHRlcnN9KSxcbiAgICAgICAgICBzb3VyY2VGaWVsZHM6IGRhdGFTb3VyY2Uub3B0aW9ucy5zb3VyY2VGaWVsZHMgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgIGVkaXRpb246IGRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uXG4gICAgICAgIH0gYXMgV0ZTb3B0aW9uc1xuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoKHdvcmtzcGFjZUxheWVyOiBWZWN0b3JMYXllcikgPT4ge1xuICAgICAgICBtYXAuYWRkTGF5ZXIod29ya3NwYWNlTGF5ZXIpO1xuICAgICAgICBsYXllci5vbC5zZXRQcm9wZXJ0aWVzKHsgbGlua2VkTGF5ZXJzOiB7IGxpbmtJZDogbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua0lkLCBsaW5rczogY2xvbmVkTGlua3MgfSB9LCBmYWxzZSk7XG4gICAgICAgIHdvcmtzcGFjZUxheWVyLmRhdGFTb3VyY2Uub2wucmVmcmVzaCgpO1xuXG4gICAgICAgIHdrcyA9IG5ldyBFZGl0aW9uV29ya3NwYWNlKHtcbiAgICAgICAgICBpZDogbGF5ZXIuaWQsXG4gICAgICAgICAgdGl0bGU6IGxheWVyLnRpdGxlLFxuICAgICAgICAgIGxheWVyOiB3b3Jrc3BhY2VMYXllcixcbiAgICAgICAgICBtYXAsXG4gICAgICAgICAgZW50aXR5U3RvcmU6IHRoaXMuY3JlYXRlRmVhdHVyZVN0b3JlKHdvcmtzcGFjZUxheWVyLCBtYXApLFxuICAgICAgICAgIGFjdGlvblN0b3JlOiBuZXcgQWN0aW9uU3RvcmUoW10pLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRhYmxlVGVtcGxhdGU6IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcywgdGhpcy5kaWFsb2csIHRoaXMuY29uZmlnU2VydmljZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlVGFibGVUZW1wbGF0ZSh3a3MsIHdvcmtzcGFjZUxheWVyKTtcblxuICAgICAgICB3b3Jrc3BhY2VMYXllci5vcHRpb25zLndvcmtzcGFjZS53b3Jrc3BhY2VJZCA9IHdvcmtzcGFjZUxheWVyLmlkO1xuICAgICAgICBsYXllci5vcHRpb25zLndvcmtzcGFjZSA9IE9iamVjdC5hc3NpZ24oe30sIGxheWVyLm9wdGlvbnMud29ya3NwYWNlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdrc0NvbmZpZ1xuICAgICAgICAgIH0gYXMgR2VvV29ya3NwYWNlT3B0aW9ucyk7XG5cbiAgICAgICAgZGVsZXRlIGRhdGFTb3VyY2Uub3B0aW9ucy5kb3dubG9hZDtcbiAgICAgICAgcmV0dXJuIHdrcztcblxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gd2tzO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVGZWF0dXJlU3RvcmUobGF5ZXI6IFZlY3RvckxheWVyLCBtYXA6IElnb01hcCk6IEZlYXR1cmVTdG9yZSB7XG4gICAgY29uc3Qgc3RvcmUgPSBuZXcgRmVhdHVyZVN0b3JlKFtdLCB7IG1hcCB9KTtcbiAgICBzdG9yZS5iaW5kTGF5ZXIobGF5ZXIpO1xuXG4gICAgY29uc3QgbG9hZGluZ1N0cmF0ZWd5ID0gbmV3IEZlYXR1cmVTdG9yZUxvYWRpbmdMYXllclN0cmF0ZWd5KHt9KTtcbiAgICBjb25zdCBpbk1hcEV4dGVudFN0cmF0ZWd5ID0gbmV3IEZlYXR1cmVTdG9yZUluTWFwRXh0ZW50U3RyYXRlZ3koe30pO1xuICAgIGNvbnN0IGluTWFwUmVzb2x1dGlvblN0cmF0ZWd5ID0gbmV3IEZlYXR1cmVTdG9yZUluTWFwUmVzb2x1dGlvblN0cmF0ZWd5KHt9KTtcbiAgICBjb25zdCBzZWxlY3RlZFJlY29yZFN0cmF0ZWd5ID0gbmV3IEVudGl0eVN0b3JlRmlsdGVyU2VsZWN0aW9uU3RyYXRlZ3koe30pO1xuICAgIGNvbnN0IHNlbGVjdGlvblN0cmF0ZWd5ID0gbmV3IEZlYXR1cmVTdG9yZVNlbGVjdGlvblN0cmF0ZWd5KHtcbiAgICAgIGxheWVyOiBuZXcgVmVjdG9yTGF5ZXIoe1xuICAgICAgICB6SW5kZXg6IDMwMCxcbiAgICAgICAgc291cmNlOiBuZXcgRmVhdHVyZURhdGFTb3VyY2UoKSxcbiAgICAgICAgc3R5bGU6IHVuZGVmaW5lZCxcbiAgICAgICAgc2hvd0luTGF5ZXJMaXN0OiBmYWxzZSxcbiAgICAgICAgZXhwb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIGJyb3dzYWJsZTogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgbWFwLFxuICAgICAgaGl0VG9sZXJhbmNlOiAxNSxcbiAgICAgIG1vdGlvbjogdGhpcy56b29tQXV0byA/IEZlYXR1cmVNb3Rpb24uRGVmYXVsdCA6IEZlYXR1cmVNb3Rpb24uTm9uZSxcbiAgICAgIG1hbnk6IHRydWUsXG4gICAgICBkcmFnQm94OiB0cnVlXG4gICAgfSk7XG4gICAgc3RvcmUuYWRkU3RyYXRlZ3kobG9hZGluZ1N0cmF0ZWd5LCB0cnVlKTtcbiAgICBzdG9yZS5hZGRTdHJhdGVneShpbk1hcEV4dGVudFN0cmF0ZWd5LCB0cnVlKTtcbiAgICBzdG9yZS5hZGRTdHJhdGVneShpbk1hcFJlc29sdXRpb25TdHJhdGVneSwgdHJ1ZSk7XG4gICAgc3RvcmUuYWRkU3RyYXRlZ3koc2VsZWN0aW9uU3RyYXRlZ3ksIHRydWUpO1xuICAgIHN0b3JlLmFkZFN0cmF0ZWd5KHNlbGVjdGVkUmVjb3JkU3RyYXRlZ3ksIGZhbHNlKTtcbiAgICBzdG9yZS5hZGRTdHJhdGVneSh0aGlzLmNyZWF0ZUZpbHRlckluTWFwRXh0ZW50T3JSZXNvbHV0aW9uU3RyYXRlZ3koKSwgdHJ1ZSk7XG4gICAgcmV0dXJuIHN0b3JlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUYWJsZVRlbXBsYXRlKHdvcmtzcGFjZTogRWRpdGlvbldvcmtzcGFjZSwgbGF5ZXI6IFZlY3RvckxheWVyKTogRW50aXR5VGFibGVUZW1wbGF0ZSB7XG4gICAgY29uc3QgZmllbGRzID0gbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLnNvdXJjZUZpZWxkcyB8fCBbXTtcblxuICAgIGNvbnN0IHJlbGF0aW9ucyA9IGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5yZWxhdGlvbnMgfHwgW107XG5cbiAgICBsZXQgcmVuZGVyZXJUeXBlID0gRW50aXR5VGFibGVDb2x1bW5SZW5kZXJlci5VbnNhbml0aXplZEhUTUw7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICBsZXQgY29sdW1ucyA9IFtdO1xuICAgIGxldCByZWxhdGlvbnNDb2x1bW4gPSBbXTtcblxuICAgIGJ1dHRvbnMgPSBbe1xuICAgICAgbmFtZTogJ2VkaXRpb24nLFxuICAgICAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgICAgIHJlbmRlcmVyOiBFbnRpdHlUYWJsZUNvbHVtblJlbmRlcmVyLkJ1dHRvbkdyb3VwLFxuICAgICAgcHJpbWFyeTogZmFsc2UsXG4gICAgICB2YWx1ZUFjY2Vzc29yOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgICAgICBpY29uOiAncGVuY2lsJyxcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICAgIGNsaWNrOiAoZmVhdHVyZSkgPT4geyB3b3Jrc3BhY2UuZWRpdEZlYXR1cmUoZmVhdHVyZSwgd29ya3NwYWNlKTsgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxuICAgICAgICAgIGljb246ICdkZWxldGUnLFxuICAgICAgICAgIGNvbG9yOiAnd2FybicsXG4gICAgICAgICAgY2xpY2s6IChmZWF0dXJlKSA9PiB7IHdvcmtzcGFjZS5kZWxldGVGZWF0dXJlKGZlYXR1cmUsIHdvcmtzcGFjZSk7IH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGVkaXRNb2RlOiB0cnVlLFxuICAgICAgICAgIGljb246ICdjaGVjaycsXG4gICAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5sb2FkaW5nLFxuICAgICAgICAgIGNsaWNrOiAoZmVhdHVyZSkgPT4geyB0aGlzLnNhdmVGZWF0dXJlKGZlYXR1cmUsIHdvcmtzcGFjZSk7IH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGVkaXRNb2RlOiB0cnVlLFxuICAgICAgICAgIGljb246ICdhbHBoYS14JyxcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgY2xpY2s6IChmZWF0dXJlKSA9PiB7IHRoaXMuY2FuY2VsRWRpdCh3b3Jrc3BhY2UsIGZlYXR1cmUpOyB9XG4gICAgICAgIH1dIGFzIEVudGl0eVRhYmxlQnV0dG9uW107XG4gICAgICB9XG4gICAgfV07XG5cblxuICAgIGlmIChmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3b3Jrc3BhY2UuZW50aXR5U3RvcmUuZW50aXRpZXMkLnBpcGUoXG4gICAgICAgIHNraXBXaGlsZSh2YWwgPT4gdmFsLmxlbmd0aCA9PT0gMCksXG4gICAgICAgIHRha2UoMSlcbiAgICAgICkuc3Vic2NyaWJlKGVudGl0aWVzID0+IHtcbiAgICAgICAgY29uc3Qgb2wgPSAoZW50aXRpZXNbMF0gYXMgRmVhdHVyZSkub2wgYXMgb2xGZWF0dXJlPE9sR2VvbWV0cnk+O1xuICAgICAgICBjb25zdCBjb2x1bW5zRnJvbUZlYXR1cmVzID0gb2wuZ2V0S2V5cygpXG4gICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgIGNvbCA9PiAhY29sLnN0YXJ0c1dpdGgoJ18nKSAmJlxuICAgICAgICAgICAgICBjb2wgIT09ICdnZW9tZXRyeScgJiZcbiAgICAgICAgICAgICAgY29sICE9PSBvbC5nZXRHZW9tZXRyeU5hbWUoKSAmJlxuICAgICAgICAgICAgICAhY29sLm1hdGNoKC9ib3VuZGVkYnkvZ2kpKVxuICAgICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6IGBwcm9wZXJ0aWVzLiR7a2V5fWAsXG4gICAgICAgICAgICAgIHRpdGxlOiBrZXksXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiByZW5kZXJlclR5cGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB3b3Jrc3BhY2UubWV0YS50YWJsZVRlbXBsYXRlID0ge1xuICAgICAgICAgIHNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zRnJvbUZlYXR1cmVzXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb2x1bW5zID0gZmllbGRzLm1hcCgoZmllbGQ6IFNvdXJjZUZpZWxkc09wdGlvbnNQYXJhbXMpID0+IHtcblxuICAgICAgbGV0IGNvbHVtbiA9IHtcbiAgICAgICAgbmFtZTogYHByb3BlcnRpZXMuJHtmaWVsZC5uYW1lfWAsXG4gICAgICAgIHRpdGxlOiBmaWVsZC5hbGlhcyA/IGZpZWxkLmFsaWFzIDogZmllbGQubmFtZSxcbiAgICAgICAgcmVuZGVyZXI6IHJlbmRlcmVyVHlwZSxcbiAgICAgICAgdmFsdWVBY2Nlc3NvcjogdW5kZWZpbmVkLFxuICAgICAgICBjZWxsQ2xhc3NGdW5jOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2VsbENsYXNzID0ge307XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUpIHtcbiAgICAgICAgICAgIGNlbGxDbGFzc1tgY2xhc3NfJHtmaWVsZC50eXBlfWBdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBjZWxsQ2xhc3M7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcmltYXJ5OiBmaWVsZC5wcmltYXJ5ID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICB2aXNpYmxlOiBmaWVsZC52aXNpYmxlLFxuICAgICAgICB2YWxpZGF0aW9uOiBmaWVsZC52YWxpZGF0aW9uLFxuICAgICAgICB0eXBlOiBmaWVsZC50eXBlLFxuICAgICAgICBkb21haW5WYWx1ZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgcmVsYXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgbXVsdGlwbGU6IGZpZWxkLm11bHRpcGxlLFxuICAgICAgICBzdGVwOiBmaWVsZC5zdGVwLFxuICAgICAgICB0b29sdGlwOiBmaWVsZC50b29sdGlwXG4gICAgICB9O1xuXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2xpc3QnIHx8IGZpZWxkLnR5cGUgPT09ICdhdXRvY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMuZ2V0RG9tYWluVmFsdWVzKGZpZWxkLnJlbGF0aW9uLnRhYmxlKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICBjb2x1bW4uZG9tYWluVmFsdWVzID0gcmVzdWx0O1xuICAgICAgICAgIGNvbHVtbi5yZWxhdGlvbiA9IGZpZWxkLnJlbGF0aW9uO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfSk7XG5cbiAgICByZWxhdGlvbnNDb2x1bW4gPSByZWxhdGlvbnMubWFwKChyZWxhdGlvbjogUmVsYXRpb25PcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBgcHJvcGVydGllcy4ke3JlbGF0aW9uLm5hbWV9YCxcbiAgICAgICAgdGl0bGU6IHJlbGF0aW9uLmFsaWFzID8gcmVsYXRpb24uYWxpYXMgOiByZWxhdGlvbi5uYW1lLFxuICAgICAgICByZW5kZXJlcjogRW50aXR5VGFibGVDb2x1bW5SZW5kZXJlci5JY29uLFxuICAgICAgICBpY29uOiByZWxhdGlvbi5pY29uLFxuICAgICAgICBwYXJlbnQ6IHJlbGF0aW9uLnBhcmVudCxcbiAgICAgICAgdHlwZTogJ3JlbGF0aW9uJyxcbiAgICAgICAgdG9vbHRpcDogcmVsYXRpb24udG9vbHRpcCxcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmFkZGluZyQuZ2V0VmFsdWUoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMud3MkLm5leHQocmVsYXRpb24udGl0bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2VsbENsYXNzRnVuYzogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7ICdjbGFzc19pY29uJzogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29sdW1ucy5wdXNoKC4uLnJlbGF0aW9uc0NvbHVtbik7XG4gICAgY29sdW1ucy5wdXNoKC4uLmJ1dHRvbnMpO1xuXG4gICAgd29ya3NwYWNlLm1ldGEudGFibGVUZW1wbGF0ZSA9IHtcbiAgICAgIHNlbGVjdGlvbjogZmFsc2UsXG4gICAgICBzb3J0OiB0cnVlLFxuICAgICAgY29sdW1uc1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZpbHRlckluTWFwRXh0ZW50T3JSZXNvbHV0aW9uU3RyYXRlZ3koKTogRW50aXR5U3RvcmVGaWx0ZXJDdXN0b21GdW5jU3RyYXRlZ3kge1xuICAgIGNvbnN0IGZpbHRlckNsYXVzZUZ1bmMgPSAocmVjb3JkOiBFbnRpdHlSZWNvcmQ8b2JqZWN0PikgPT4ge1xuICAgICAgcmV0dXJuIHJlY29yZC5zdGF0ZS5pbk1hcEV4dGVudCA9PT0gdHJ1ZSAmJiByZWNvcmQuc3RhdGUuaW5NYXBSZXNvbHV0aW9uID09PSB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIG5ldyBFbnRpdHlTdG9yZUZpbHRlckN1c3RvbUZ1bmNTdHJhdGVneSh7ZmlsdGVyQ2xhdXNlRnVuY30gYXMgRW50aXR5U3RvcmVTdHJhdGVneUZ1bmNPcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlRmVhdHVyZShmZWF0dXJlLCB3b3Jrc3BhY2U6IEVkaXRpb25Xb3Jrc3BhY2UpIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGVGZWF0dXJlKGZlYXR1cmUsIHdvcmtzcGFjZSkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2FuaXRpemVQYXJhbWV0ZXIoZmVhdHVyZSwgd29ya3NwYWNlKTtcblxuICAgIGxldCB1cmwgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCdlZGl0aW9uLnVybCcpO1xuXG4gICAgaWYgKHdvcmtzcGFjZS5sYXllci5kYXRhU291cmNlLm9wdGlvbnMuZWRpdGlvbi5iYXNlVXJsKSB7XG4gICAgICB1cmwgKz0gd29ya3NwYWNlLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uLmJhc2VVcmw7XG4gICAgfVxuXG4gICAgaWYgKGZlYXR1cmUubmV3RmVhdHVyZSkge1xuICAgICAgdXJsICs9IHdvcmtzcGFjZS5sYXllci5kYXRhU291cmNlLm9wdGlvbnMuZWRpdGlvbi5hZGRVcmw7XG5cbiAgICAgIGNvbnN0IGFkZEhlYWRlcnMgPSB3b3Jrc3BhY2UubGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmVkaXRpb24uYWRkSGVhZGVycztcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoYWRkSGVhZGVycyk7XG5cbiAgICAgIHRoaXMuYWRkRmVhdHVyZShmZWF0dXJlLCB3b3Jrc3BhY2UsIHVybCwgaGVhZGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh3b3Jrc3BhY2UubGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmVkaXRpb24ubW9kaWZ5UHJvdG9jb2wgIT09IFwicG9zdFwiKSB7XG4gICAgICAgIHVybCArPSAnPycgKyB3b3Jrc3BhY2UubGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmVkaXRpb24ubW9kaWZ5VXJsICsgZmVhdHVyZS5pZGtleTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB1cmwgKz0gd29ya3NwYWNlLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uLm1vZGlmeVVybDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvdG9jb2xlID0gd29ya3NwYWNlLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uLm1vZGlmeVByb3RvY29sO1xuICAgICAgY29uc3QgbW9kaWZ5SGVhZGVycyA9IHdvcmtzcGFjZS5sYXllci5kYXRhU291cmNlLm9wdGlvbnMuZWRpdGlvbi5tb2RpZnlIZWFkZXJzO1xuICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyhtb2RpZnlIZWFkZXJzKTtcblxuICAgICAgdGhpcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIHdvcmtzcGFjZSwgdXJsLCBoZWFkZXJzLCBwcm90b2NvbGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRGZWF0dXJlKGZlYXR1cmUsIHdvcmtzcGFjZTogRWRpdGlvbldvcmtzcGFjZSwgdXJsOiBzdHJpbmcsIGhlYWRlcnM6IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XG4gICAgLy8gVE9ETzogYWRhcHQgdG8gYW55IGtpbmQgb2YgZ2VvbWV0cnlcbiAgICBpZiAod29ya3NwYWNlLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uLmhhc0dlb21ldHJ5KSB7XG4gICAgICAvL2ZlYXR1cmUucHJvcGVydGllc1tnZW9tXSA9IGZlYXR1cmUuZ2VvbWV0cnk7XG4gICAgICBmZWF0dXJlLnByb3BlcnRpZXNbXCJsb25naXR1ZGVcIl0gPSBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdO1xuICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW1wibGF0aXR1ZGVcIl0gPSBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZmVhdHVyZS5wcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHNmIG9mIHdvcmtzcGFjZS5sYXllci5kYXRhU291cmNlLm9wdGlvbnMuc291cmNlRmllbGRzKSB7XG4gICAgICAgIGlmIChzZi5uYW1lID09PSBwcm9wZXJ0eSAmJiBzZi52YWxpZGF0aW9uPy5yZWFkb25seSkge1xuICAgICAgICAgIGRlbGV0ZSBmZWF0dXJlLnByb3BlcnRpZXNbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmh0dHAucG9zdChgJHt1cmx9YCwgZmVhdHVyZS5wcm9wZXJ0aWVzLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgd29ya3NwYWNlLmVudGl0eVN0b3JlLnN0YXRlVmlldy5jbGVhcigpO1xuICAgICAgICB3b3Jrc3BhY2UuZGVsZXRlRHJhd2luZ3MoKTtcbiAgICAgICAgd29ya3NwYWNlLmVudGl0eVN0b3JlLmRlbGV0ZShmZWF0dXJlKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgJ2lnby5nZW8ud29ya3NwYWNlLmFkZFN1Y2Nlc3MnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2VzcyhtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLnJlZnJlc2hNYXAod29ya3NwYWNlLmxheWVyIGFzIFZlY3RvckxheWVyLCB3b3Jrc3BhY2UubGF5ZXIubWFwKTtcbiAgICAgICAgdGhpcy5hZGRpbmckLm5leHQoZmFsc2UpO1xuICAgICAgICB0aGlzLnJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJC5uZXh0KHRydWUpO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGVycm9yLmVycm9yLmNhdWdodCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGdlbmVyaWNFcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmdlby53b3Jrc3BhY2UuYWRkRXJyb3InXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gd29ya3NwYWNlLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uLm1lc3NhZ2VzO1xuICAgICAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMobWVzc2FnZSlbMF07XG4gICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIHRleHQgPSBtZXNzYWdlW2tleV07XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IodGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKGdlbmVyaWNFcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKGdlbmVyaWNFcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVGZWF0dXJlKHdvcmtzcGFjZTogRWRpdGlvbldvcmtzcGFjZSwgdXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuaHR0cC5kZWxldGUoYCR7dXJsfWAsIHt9KS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgJ2lnby5nZW8ud29ya3NwYWNlLmRlbGV0ZVN1Y2Nlc3MnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2VzcyhtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLnJlZnJlc2hNYXAod29ya3NwYWNlLmxheWVyIGFzIFZlY3RvckxheWVyLCB3b3Jrc3BhY2UubGF5ZXIubWFwKTtcbiAgICAgICAgZm9yIChjb25zdCByZWxhdGlvbiBvZiB3b3Jrc3BhY2UubGF5ZXIub3B0aW9ucy5zb3VyY2VPcHRpb25zLnJlbGF0aW9ucykge1xuICAgICAgICAgIHdvcmtzcGFjZS5tYXAubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAobGF5ZXIudGl0bGUgPT09IHJlbGF0aW9uLnRpdGxlKSB7XG4gICAgICAgICAgICAgIGxheWVyLmRhdGFTb3VyY2Uub2wucmVmcmVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZXJyb3IuZXJyb3IuY2F1Z2h0ID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBnZW5lcmljRXJyb3JNZXNzYWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAnaWdvLmdlby53b3Jrc3BhY2UuYWRkRXJyb3InXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHdvcmtzcGFjZS5sYXllci5kYXRhU291cmNlLm9wdGlvbnMuZWRpdGlvbi5tZXNzYWdlcztcbiAgICAgICAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0O1xuICAgICAgICAgICAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMobWVzc2FnZSlbMF07XG4gICAgICAgICAgICAgIGlmIChlcnJvci5lcnJvci5tZXNzYWdlLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ID0gbWVzc2FnZVtrZXldO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IodGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IoZ2VuZXJpY0Vycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IoZ2VuZXJpY0Vycm9yTWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgbW9kaWZ5RmVhdHVyZShmZWF0dXJlLCB3b3Jrc3BhY2U6IEVkaXRpb25Xb3Jrc3BhY2UsIHVybDogc3RyaW5nLCBoZWFkZXJzOiB7W2tleTogc3RyaW5nXTogYW55fSwgcHJvdG9jb2xlID0gJ3BhdGNoJyApIHtcbiAgICAvL1RPRE86IGFkYXB0IHRvIGFueSBraW5kIG9mIGdlb21ldHJ5XG4gICAgaWYgKHdvcmtzcGFjZS5sYXllci5kYXRhU291cmNlLm9wdGlvbnMuZWRpdGlvbi5oYXNHZW9tZXRyeSkge1xuICAgICAgLy9mZWF0dXJlLnByb3BlcnRpZXNbZ2VvbV0gPSBmZWF0dXJlLmdlb21ldHJ5O1xuICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW1wibG9uZ2l0dWRlXCJdID0gZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlc1swXTtcbiAgICAgIGZlYXR1cmUucHJvcGVydGllc1tcImxhdGl0dWRlXCJdID0gZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlc1sxXTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGZlYXR1cmUucHJvcGVydGllcykge1xuICAgICAgZm9yIChjb25zdCBzZiBvZiB3b3Jrc3BhY2UubGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLnNvdXJjZUZpZWxkcykge1xuICAgICAgICBpZiAoKHNmLm5hbWUgPT09IHByb3BlcnR5ICYmIHNmLnZhbGlkYXRpb24/LnJlYWRvbmx5KSB8fCBwcm9wZXJ0eSA9PT0gJ2JvdW5kZWRCeScpIHtcbiAgICAgICAgICBkZWxldGUgZmVhdHVyZS5wcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5odHRwW3Byb3RvY29sZV0oYCR7dXJsfWAsIGZlYXR1cmUucHJvcGVydGllcywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pLnN1YnNjcmliZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FuY2VsRWRpdCh3b3Jrc3BhY2UsIGZlYXR1cmUsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmdlby53b3Jrc3BhY2UubW9kaWZ5U3VjY2VzcydcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zdWNjZXNzKG1lc3NhZ2UpO1xuXG4gICAgICAgIHRoaXMucmVmcmVzaE1hcCh3b3Jrc3BhY2UubGF5ZXIgYXMgVmVjdG9yTGF5ZXIsIHdvcmtzcGFjZS5sYXllci5tYXApO1xuXG4gICAgICAgIGxldCByZWxhdGlvbkxheWVycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHJlbGF0aW9uIG9mIHdvcmtzcGFjZS5sYXllci5vcHRpb25zLnNvdXJjZU9wdGlvbnMucmVsYXRpb25zKSB7XG4gICAgICAgICAgd29ya3NwYWNlLm1hcC5sYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChsYXllci50aXRsZSA9PT0gcmVsYXRpb24udGl0bGUpIHtcbiAgICAgICAgICAgICAgcmVsYXRpb25MYXllcnMucHVzaChsYXllcik7XG4gICAgICAgICAgICAgIGxheWVyLmRhdGFTb3VyY2Uub2wucmVmcmVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVsYXRpb25MYXllcnMkLm5leHQocmVsYXRpb25MYXllcnMpO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGVycm9yLmVycm9yLmNhdWdodCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGdlbmVyaWNFcnJvck1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmdlby53b3Jrc3BhY2UuYWRkRXJyb3InXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gd29ya3NwYWNlLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uLm1lc3NhZ2VzO1xuICAgICAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMobWVzc2FnZSlbMF07XG4gICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIHRleHQgPSBtZXNzYWdlW2tleV07XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IodGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKGdlbmVyaWNFcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKGdlbmVyaWNFcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNhbmNlbEVkaXQod29ya3NwYWNlOiBFZGl0aW9uV29ya3NwYWNlLCBmZWF0dXJlLCBmcm9tU2F2ZSA9IGZhbHNlKSB7XG4gICAgZmVhdHVyZS5lZGl0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5hZGRpbmckLm5leHQoZmFsc2UpO1xuICAgIHdvcmtzcGFjZS5kZWxldGVEcmF3aW5ncygpO1xuXG4gICAgaWYgKGZlYXR1cmUubmV3RmVhdHVyZSkge1xuICAgICAgd29ya3NwYWNlLmVudGl0eVN0b3JlLnN0YXRlVmlldy5jbGVhcigpO1xuICAgICAgd29ya3NwYWNlLmVudGl0eVN0b3JlLmRlbGV0ZShmZWF0dXJlKTtcbiAgICAgIHdvcmtzcGFjZS5kZWFjdGl2YXRlRHJhd0NvbnRyb2woKTtcblxuICAgICAgdGhpcy5yb3dzSW5NYXBFeHRlbnRDaGVja0NvbmRpdGlvbiQubmV4dCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFmcm9tU2F2ZSkge1xuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMgPSBmZWF0dXJlLm9yaWdpbmFsX3Byb3BlcnRpZXM7XG4gICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkgPSBmZWF0dXJlLm9yaWdpbmFsX2dlb21ldHJ5O1xuICAgICAgfVxuICAgICAgZGVsZXRlIGZlYXR1cmUub3JpZ2luYWxfcHJvcGVydGllcztcbiAgICAgIGRlbGV0ZSBmZWF0dXJlLm9yaWdpbmFsX2dlb21ldHJ5O1xuICAgIH1cbiAgfVxuXG4gIGdldERvbWFpblZhbHVlcyh0YWJsZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgdXJsID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygnZWRpdGlvbi51cmwnKSArIHRhYmxlO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLypcbiAgICogUmVmcmVzaCBib3RoIHdtcyBhbmQgd2ZzIGxheWVyXG4gICAqIEEgbmV3IHdmcyBsb2FkZXIgaXMgdXNlZCB0byBlbnN1cmUgY2FjaGUgaXMgbm90IHJldHJpZXZpbmcgb2xkIGRhdGFcbiAgICogV01TIHBhcmFtcyBhcmUgdXBkYXRlZCB0byBlbnN1cmUgbGF5ZXIgaXMgY29ycmVjdGx5IHJlZnJlc2hlZFxuICAgKi9cbiAgcmVmcmVzaE1hcChsYXllcjogVmVjdG9yTGF5ZXIsIG1hcDogSWdvTWFwKSB7XG4gICAgY29uc3Qgd2ZzT2xMYXllciA9IGxheWVyLmRhdGFTb3VyY2Uub2w7XG4gICAgY29uc3QgbG9hZGVyID0gKGV4dGVudCwgcmVzb2x1dGlvbiwgcHJvaiwgc3VjY2VzcywgZmFpbHVyZSkgPT4ge1xuICAgICAgbGF5ZXIuY3VzdG9tV0ZTTG9hZGVyKFxuICAgICAgICBsYXllci5vbC5nZXRTb3VyY2UoKSxcbiAgICAgICAgbGF5ZXIub3B0aW9ucy5zb3VyY2VPcHRpb25zLFxuICAgICAgICB0aGlzLmF1dGhJbnRlcmNlcHRvcixcbiAgICAgICAgZXh0ZW50LFxuICAgICAgICByZXNvbHV0aW9uLFxuICAgICAgICBwcm9qLFxuICAgICAgICBzdWNjZXNzLFxuICAgICAgICBmYWlsdXJlLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH07XG4gICAgd2ZzT2xMYXllci5zZXRMb2FkZXIobG9hZGVyKTtcbiAgICB3ZnNPbExheWVyLnJlZnJlc2goKTtcblxuICAgIGZvciAoY29uc3QgbGF5IG9mIG1hcC5sYXllcnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGF5LmlkICE9PSBsYXllci5pZCAmJlxuICAgICAgICBsYXkub3B0aW9ucy5saW5rZWRMYXllcnM/LmxpbmtJZC5pbmNsdWRlcyhsYXllci5pZC5zdWJzdHIoMCwgbGF5ZXIuaWQuaW5kZXhPZignLicpIC0gMSkpICYmXG4gICAgICAgIGxheS5vcHRpb25zLmxpbmtlZExheWVycz8ubGlua0lkLmluY2x1ZGVzKCdXbXNXb3Jrc3BhY2VUYWJsZVNyYycpXG4gICAgICApXG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCB3bXNPbExheWVyID0gbGF5LmRhdGFTb3VyY2Uub2wgYXMgb2xTb3VyY2VJbWFnZVdNUztcbiAgICAgICAgICBsZXQgcGFyYW1zID0gd21zT2xMYXllci5nZXRQYXJhbXMoKTtcbiAgICAgICAgICBwYXJhbXMuX3QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICB3bXNPbExheWVyLnVwZGF0ZVBhcmFtcyhwYXJhbXMpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGZWF0dXJlKGZlYXR1cmUsIHdvcmtzcGFjZTogRWRpdGlvbldvcmtzcGFjZSkge1xuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgICBsZXQgbWVzc2FnZSA7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgIHdvcmtzcGFjZS5tZXRhLnRhYmxlVGVtcGxhdGUuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBpZiAoY29sdW1uLmhhc093blByb3BlcnR5KCd2YWxpZGF0aW9uJykgJiYgY29sdW1uLnZhbGlkYXRpb24pIHtcbiAgICAgICAga2V5ID0gZ2V0Q29sdW1uS2V5V2l0aG91dFByb3BlcnRpZXNUYWcoY29sdW1uLm5hbWUpO1xuICAgICAgICBPYmplY3Qua2V5cyggY29sdW1uLnZhbGlkYXRpb24pLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21hbmRhdG9yeSc6IHtcbiAgICAgICAgICAgICAgaWYgKGNvbHVtbi52YWxpZGF0aW9uW3R5cGVdICYmICghZmVhdHVyZS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkgfHwgIWZlYXR1cmUucHJvcGVydGllc1trZXldKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZm9ybVZhbGlkYXRpb24ubWFuZGF0b3J5JyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4udGl0bGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdtaW5WYWx1ZSc6IHtcbiAgICAgICAgICAgICAgaWYgKGZlYXR1cmUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGZlYXR1cmUucHJvcGVydGllc1trZXldICYmIGZlYXR1cmUucHJvcGVydGllc1trZXldIDwgY29sdW1uLnZhbGlkYXRpb25bdHlwZV0pIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5mb3JtVmFsaWRhdGlvbi5taW5WYWx1ZScsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29sdW1uLnZhbGlkYXRpb25bdHlwZV1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdtYXhWYWx1ZSc6IHtcbiAgICAgICAgICAgICAgaWYgKGZlYXR1cmUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGZlYXR1cmUucHJvcGVydGllc1trZXldICYmIGZlYXR1cmUucHJvcGVydGllc1trZXldID4gY29sdW1uLnZhbGlkYXRpb25bdHlwZV0pIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5mb3JtVmFsaWRhdGlvbi5tYXhWYWx1ZScsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29sdW1uLnZhbGlkYXRpb25bdHlwZV1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdtaW5MZW5ndGgnOiB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBmZWF0dXJlLnByb3BlcnRpZXNba2V5XSAmJlxuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1trZXldLmxlbmd0aCA8IGNvbHVtbi52YWxpZGF0aW9uW3R5cGVdKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZm9ybVZhbGlkYXRpb24ubWluTGVuZ3RoJyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb2x1bW4udmFsaWRhdGlvblt0eXBlXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ21heExlbmd0aCc6IHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGZlYXR1cmUucHJvcGVydGllc1trZXldICYmXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2tleV0ubGVuZ3RoID4gY29sdW1uLnZhbGlkYXRpb25bdHlwZV0pXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5mb3JtVmFsaWRhdGlvbi5tYXhMZW5ndGgnLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbi50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbHVtbi52YWxpZGF0aW9uW3R5cGVdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIHNhbml0aXplUGFyYW1ldGVyKGZlYXR1cmUsIHdvcmtzcGFjZTogRWRpdGlvbldvcmtzcGFjZSkge1xuICAgIHdvcmtzcGFjZS5tZXRhLnRhYmxlVGVtcGxhdGUuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdsaXN0JyAmJiBmZWF0dXJlLnByb3BlcnRpZXNbZ2V0Q29sdW1uS2V5V2l0aG91dFByb3BlcnRpZXNUYWcoY29sdW1uLm5hbWUpXSkge1xuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbZ2V0Q29sdW1uS2V5V2l0aG91dFByb3BlcnRpZXNUYWcoY29sdW1uLm5hbWUpXSA9XG4gICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2dldENvbHVtbktleVdpdGhvdXRQcm9wZXJ0aWVzVGFnKGNvbHVtbi5uYW1lKV0udG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gZ2V0Q29sdW1uS2V5V2l0aG91dFByb3BlcnRpZXNUYWcoY29sdW1uOiBzdHJpbmcpIHtcbiAgaWYgKGNvbHVtbi5pbmNsdWRlcygncHJvcGVydGllcy4nKSkge1xuICAgIHJldHVybiBjb2x1bW4uc3BsaXQoJy4nKVsxXTtcbiAgfVxuICByZXR1cm4gY29sdW1uO1xufVxuIl19