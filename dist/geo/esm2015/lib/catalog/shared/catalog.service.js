import { Injectable } from '@angular/core';
import { EMPTY, of, zip } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { uuid, ObjectUtils } from '@igo2/utils';
import { getResolutionFromScale } from '../../map';
import { CatalogFactory } from './catalog.abstract';
import { CatalogItemType, TypeCatalog } from './catalog.enum';
import { QueryFormat } from '../../query';
import { generateIdFromSourceOptions } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/core";
import * as i3 from "../../datasource";
export class CatalogService {
    constructor(http, config, languageService, messageService, capabilitiesService) {
        this.http = http;
        this.config = config;
        this.languageService = languageService;
        this.messageService = messageService;
        this.capabilitiesService = capabilitiesService;
    }
    loadCatalogs() {
        const contextConfig = this.config.getConfig('context') || {};
        const catalogConfig = this.config.getConfig('catalog') || {};
        const apiUrl = catalogConfig.url || contextConfig.url;
        const catalogsFromConfig = catalogConfig.sources || [];
        const observables$ = [];
        if (apiUrl) {
            // Base layers catalog
            if (catalogConfig.baseLayers) {
                const translate = this.languageService.translate;
                const title = translate.instant('igo.geo.catalog.baseLayers');
                const baseLayersCatalog = [
                    {
                        id: 'catalog.baselayers',
                        title,
                        url: `${apiUrl}/baselayers`,
                        type: 'baselayers'
                    }
                ];
                observables$.push(of(baseLayersCatalog));
            }
            // Catalogs from API
            const catalogsFromApi$ = this.http
                .get(`${apiUrl}/catalogs`)
                .pipe(map((catalogs) => catalogs.map((c) => Object.assign(c, c.options))), catchError((_response) => EMPTY));
            observables$.push(catalogsFromApi$);
        }
        // Catalogs from config
        if (catalogsFromConfig.length > 0) {
            observables$.push(of(catalogsFromConfig).pipe(map((catalogs) => catalogs.map((c) => {
                if (!c.id) {
                    c.id = uuid();
                }
                return c;
            }))));
        }
        return zip(...observables$).pipe(map((catalogs) => [].concat.apply([], catalogs)));
    }
    loadCatalogItems(catalog) {
        let newCatalog;
        newCatalog = CatalogFactory.createInstanceCatalog(catalog, this);
        return newCatalog.collectCatalogItems();
    }
    loadCatalogBaseLayerItems(catalog) {
        return this.getCatalogBaseLayersOptions(catalog).pipe(map((layersOptions) => {
            const items = layersOptions.map((layerOptions) => {
                return {
                    id: generateIdFromSourceOptions(layerOptions.sourceOptions),
                    title: layerOptions.title,
                    type: CatalogItemType.Layer,
                    externalProvider: catalog.externalProvider,
                    options: layerOptions
                };
            });
            return [
                {
                    id: 'catalog.group.baselayers',
                    type: CatalogItemType.Group,
                    externalProvider: catalog.externalProvider,
                    title: catalog.title,
                    items
                }
            ];
        }));
    }
    getCatalogBaseLayersOptions(catalog) {
        return this.http.get(catalog.url);
    }
    loadCatalogWMSLayerItems(catalog) {
        return this.getCatalogCapabilities(catalog).pipe(map((capabilities) => {
            const items = [];
            if (!capabilities) {
                return items;
            }
            if (capabilities.Service && capabilities.Service.Abstract && capabilities.Service.Abstract.length) {
                catalog.abstract = capabilities.Service.Abstract;
            }
            const finalLayers = [];
            this.flattenWmsCapabilities(capabilities.Capability.Layer, 0, finalLayers, catalog.groupSeparator);
            const capabilitiesCapabilityLayer = Object.assign({}, capabilities.Capability.Layer);
            capabilitiesCapabilityLayer.Layer = finalLayers.filter(f => f.Layer.length !== 0);
            this.includeRecursiveItems(catalog, capabilitiesCapabilityLayer, items);
            return items;
        }));
    }
    flattenWmsCapabilities(parent, level = 0, finalLayers, separator = ' / ') {
        if (!finalLayers.includes(parent.Title)) {
            const modifiedParent = Object.assign({}, parent);
            modifiedParent.Layer = [];
            finalLayers.push(modifiedParent);
        }
        for (const layer of parent.Layer) {
            const modifiedLayer = Object.assign({}, layer);
            if (level > 0) {
                modifiedLayer.Title = parent.Title + separator + layer.Title;
            }
            if (layer.Layer) {
                this.flattenWmsCapabilities(modifiedLayer, level + 1, finalLayers, separator);
            }
            else {
                finalLayers.find(ff => ff.Title === parent.Title).Layer.push(layer);
            }
        }
    }
    loadCatalogWMTSLayerItems(catalog) {
        return this.getCatalogCapabilities(catalog).pipe(map((capabilities) => this.getWMTSItems(catalog, capabilities)));
    }
    loadCatalogArcGISRestItems(catalog) {
        return this.getCatalogCapabilities(catalog).pipe(map((capabilities) => {
            return this.getArcGISRESTItems(catalog, capabilities);
        }));
    }
    loadCatalogCompositeLayerItems(catalog) {
        const compositeCatalog = catalog.composite;
        const catalogsFromInstance = [];
        compositeCatalog.map((component) => {
            component.sortDirection = catalog.sortDirection; // propagate sortDirection with parent value
            catalogsFromInstance.push(CatalogFactory.createInstanceCatalog(component, this));
        });
        // get CatalogItems for each original Catalog-----------------------------------------------------
        const request1$ = [];
        catalogsFromInstance.map((component) => request1$.push(component.collectCatalogItems()));
        // integrate imposed group -----------------------------------------------------
        let request2$ = [];
        function flatDeepLayer(arr) {
            return arr.reduce((acc, val) => acc.concat(val.type === CatalogItemType.Group ? flatDeepLayer(val.items) : val), []);
        }
        if (Object.keys(compositeCatalog).find((k) => compositeCatalog[k].groupImpose)) {
            const pushImposeGroup = (item, index) => {
                const c = catalogsFromInstance[index];
                const outGroupImpose = Object.assign({}, c.groupImpose);
                outGroupImpose.address = c.id;
                outGroupImpose.type = CatalogItemType.Group;
                outGroupImpose.externalProvider = c.externalProvider;
                if (outGroupImpose.sortDirection === undefined) {
                    outGroupImpose.sortDirection = c.sortDirection;
                }
                outGroupImpose.items = [];
                const flatLayer = flatDeepLayer(item);
                flatLayer.map((v) => (v.address = `${outGroupImpose.address}.${outGroupImpose.id}`));
                outGroupImpose.items = flatLayer;
                return outGroupImpose;
            };
            request2$ = request1$.map((obs, idx) => obs.pipe(map((items) => compositeCatalog[idx].groupImpose
                ? pushImposeGroup(items, idx)
                : items)));
        }
        else {
            request2$ = request1$;
        }
        // concat Group -----------------------------------------------------
        const request3$ = zip(...request2$).pipe(map((output) => [].concat(...output) // [].concat.apply([], result1
        ));
        // merge Group (first level only) -----------------------------------------------------
        const groupByGroupId = (data, keyFn) => data.reduce((acc, group) => {
            const groupId = keyFn(group);
            const ind = acc.find((x) => x.id === groupId);
            if (!ind) {
                acc[acc.length] = group;
            }
            else {
                const ix = acc.indexOf(ind);
                if (acc[ix].address.split('|').indexOf(group.address) === -1) {
                    acc[ix].address = `${acc[ix].address}|${group.address}`;
                }
                acc[ix].items.push(...group.items);
            }
            return acc;
        }, []);
        // merge Layer for each Level (catalog, group(recursive))
        const recursiveGroupByLayerAddress = (items, keyFn) => items.reduce((acc, item, idx, arr) => {
            const layerTitle = keyFn(item);
            const outItem = Object.assign({}, item);
            if (item.type === CatalogItemType.Layer) {
                // same title, same address => result: only one item is keep
                // same title, address diff
                const indicesMatchTitle = [];
                const diffAddress = arr.filter((x, i) => {
                    let bInd = false;
                    if (x.title === layerTitle && x.type === CatalogItemType.Layer) {
                        if (i !== idx && x.address !== item.address) {
                            bInd = true;
                        }
                        indicesMatchTitle.push(i);
                    }
                    return bInd;
                }); // $& i !== idx
                if (diffAddress.length > 0) {
                    const nPosition = indicesMatchTitle.findIndex((x) => x === idx) + 1;
                    outItem.title = `${item.title} (${nPosition})`; // source: ${item.address.split('.')[0]}
                }
                const exist = acc.find((x) => x.title === outItem.title && x.type === CatalogItemType.Layer);
                if (!exist) {
                    acc[acc.length] = outItem;
                }
            }
            else if (item.type === CatalogItemType.Group) {
                outItem.items = recursiveGroupByLayerAddress(item.items, (layer) => layer.title);
                acc[acc.length] = outItem;
            }
            return acc;
        }, []);
        const request4$ = request3$.pipe(map((output) => groupByGroupId(output, (group) => group.id)), map((output) => [].concat(...output)), map((data) => recursiveGroupByLayerAddress(data, (layer) => layer.title)));
        return request4$;
    }
    getCatalogCapabilities(catalog) {
        const sType = TypeCatalog[catalog.type];
        return this.capabilitiesService
            .getCapabilities(sType, catalog.url, catalog.version)
            .pipe(catchError((e) => {
            const title = this.languageService.translate.instant('igo.geo.catalog.unavailableTitle');
            const message = catalog.title ? this.languageService.translate.instant('igo.geo.catalog.unavailable', { value: catalog.title }) : this.languageService.translate.instant('igo.geo.catalog.someUnavailable');
            this.messageService.error(message, title);
            console.error(e);
            return of(undefined);
        }));
    }
    prepareCatalogItemLayer(layer, idParent, layersQueryFormat, catalog) {
        const configuredQueryFormat = this.retrieveLayerInfoFormat(layer.Name, layersQueryFormat);
        const metadata = layer.DataURL ? layer.DataURL[0] : undefined;
        const legendOptions = catalog.showLegend && layer.Style
            ? this.capabilitiesService.getStyle(layer.Style)
            : undefined;
        const params = Object.assign({}, catalog.queryParams, {
            LAYERS: layer.Name,
            VERSION: catalog.version
        });
        const baseSourceOptions = {
            type: 'wms',
            url: catalog.url,
            crossOrigin: catalog.setCrossOriginAnonymous ? 'anonymous' : undefined,
            queryFormat: configuredQueryFormat,
            queryHtmlTarget: configuredQueryFormat === QueryFormat.HTML ||
                configuredQueryFormat === QueryFormat.HTMLGML2
                ? 'iframe'
                : undefined,
            optionsFromCapabilities: true
        };
        const sourceOptions = Object.assign({}, baseSourceOptions, catalog.sourceOptions, { params });
        let layerTitle;
        if (catalog.forcedProperties) {
            for (const property of catalog.forcedProperties) {
                if (layer.Name === property.layerName && property.title) {
                    layerTitle = property.title;
                }
            }
        }
        let abstract;
        if (layer.Abstract) {
            abstract = layer.Abstract;
        }
        else if (!layer.Abstract && catalog.abstract) {
            abstract = catalog.abstract;
        }
        const layerPrepare = {
            id: generateIdFromSourceOptions(sourceOptions),
            type: CatalogItemType.Layer,
            title: layerTitle !== undefined ? layerTitle : layer.Title,
            address: idParent,
            externalProvider: catalog.externalProvider || false,
            options: {
                maxResolution: getResolutionFromScale(layer.MaxScaleDenominator),
                minResolution: getResolutionFromScale(layer.MinScaleDenominator),
                metadata: {
                    url: metadata ? metadata.OnlineResource : undefined,
                    extern: metadata ? true : undefined,
                    abstract,
                    type: baseSourceOptions.type
                },
                legendOptions,
                tooltip: { type: catalog.tooltipType },
                sourceOptions
            }
        };
        return ObjectUtils.removeUndefined(layerPrepare);
    }
    prepareCatalogItemGroup(itemListIn, regexes, idGroup, layersQueryFormat, catalog) {
        const groupPrepare = {
            id: idGroup,
            type: CatalogItemType.Group,
            title: itemListIn.Title,
            address: catalog.id,
            externalProvider: catalog.externalProvider || false,
            sortDirection: catalog.sortDirection,
            items: itemListIn.Layer.reduce((items, layer) => {
                if (layer.Layer !== undefined) {
                    // recursive, check next level
                    const idGroupItemNextLevel = idGroup + `.group.${layer.Name || layer.Layer[0].Name}`;
                    const groupItem = this.prepareCatalogItemGroup(layer, regexes, idGroupItemNextLevel, layersQueryFormat, catalog);
                    items.push(groupItem);
                }
                else {
                    if (this.testLayerRegexes(layer.Name, regexes) === false) {
                        return items;
                    }
                    const layerItem = this.prepareCatalogItemLayer(layer, idGroup, layersQueryFormat, catalog);
                    items.push(layerItem);
                }
                return items;
            }, [])
        };
        return groupPrepare;
    }
    includeRecursiveItems(catalog, itemListIn, itemsPrepare, loopLevel = 0) {
        // Dig all levels until last level (layer object are not defined on last level)
        const regexes = (catalog.regFilters || []).map((pattern) => new RegExp(pattern));
        if (!itemListIn.Layer) {
            return;
        }
        for (const item of itemListIn.Layer) {
            if (item.Layer !== undefined) {
                // recursive, check next level
                this.includeRecursiveItems(catalog, item, itemsPrepare, loopLevel + 1);
                continue;
            }
            const layersQueryFormat = this.findCatalogInfoFormat(catalog);
            // group(with layers) and layer(without group) level 1
            if (loopLevel !== 0) {
                // TODO: Slice that into multiple methods
                // Define object of group layer
                const idGroupItem = `catalog.group.${itemListIn.Name || item.Name}`;
                const groupItem = this.prepareCatalogItemGroup(itemListIn, regexes, idGroupItem, layersQueryFormat, catalog);
                if (groupItem.items.length !== 0) {
                    itemsPrepare.push(groupItem);
                }
                // Break the group (don't add a group of layer for each of their layer!)
                break;
            }
            else {
                // layer without group
                if (this.testLayerRegexes(item.Name, regexes) !== false) {
                    const layerItem = this.prepareCatalogItemLayer(item, catalog.id, layersQueryFormat, catalog);
                    itemsPrepare.push(layerItem);
                }
            }
        }
    }
    getWMTSItems(catalog, capabilities) {
        if (!capabilities) {
            return [];
        }
        const layers = capabilities.Contents.Layer;
        const regexes = (catalog.regFilters || []).map((pattern) => new RegExp(pattern));
        if (capabilities.ServiceIdentification &&
            capabilities.ServiceIdentification.Abstract &&
            capabilities.ServiceIdentification.Abstract.length) {
            catalog.abstract = capabilities.ServiceIdentification.Abstract;
        }
        return layers
            .map((layer) => {
            let forcedTitle;
            if (catalog.forcedProperties) {
                for (const property of catalog.forcedProperties) {
                    if (layer.Title === property.layerName && property.title) {
                        forcedTitle = property.title;
                    }
                }
            }
            if (this.testLayerRegexes(layer.Identifier, regexes) === false) {
                return undefined;
            }
            const params = Object.assign({}, catalog.queryParams, {
                version: '1.0.0'
            });
            const baseSourceOptions = {
                type: 'wmts',
                url: catalog.url,
                crossOrigin: catalog.setCrossOriginAnonymous
                    ? 'anonymous'
                    : undefined,
                layer: layer.Identifier,
                matrixSet: catalog.matrixSet,
                optionsFromCapabilities: true,
                requestEncoding: catalog.requestEncoding || 'KVP',
                style: 'default'
            };
            const sourceOptions = Object.assign({}, baseSourceOptions, catalog.sourceOptions, { params });
            return ObjectUtils.removeUndefined({
                id: generateIdFromSourceOptions(sourceOptions),
                type: CatalogItemType.Layer,
                title: forcedTitle !== undefined ? forcedTitle : layer.Title,
                address: catalog.id,
                externalProvider: catalog.externalProvider,
                options: {
                    sourceOptions,
                    metadata: {
                        url: undefined,
                        extern: undefined,
                        abstract: catalog.abstract,
                        type: baseSourceOptions.type
                    }
                }
            });
        })
            .filter((item) => item !== undefined);
    }
    getArcGISRESTItems(catalog, capabilities) {
        if (!capabilities) {
            return [];
        }
        const layers = !capabilities.layers ? [] : capabilities.layers.filter(layer => !layer.type || layer.type === 'Feature Layer');
        if (!capabilities.layers) {
            this.messageService.error(this.languageService.translate.instant('igo.geo.catalog.someUnavailable'), this.languageService.translate.instant('igo.geo.catalog.unavailableTitle'));
        }
        const regexes = (catalog.regFilters || []).map((pattern) => new RegExp(pattern));
        let abstract;
        if (capabilities.serviceDescription && capabilities.serviceDescription.length) {
            const regex = /(<([^>]+)>)/ig;
            abstract = capabilities.serviceDescription.replace(regex, '');
        }
        return layers
            .map((layer) => {
            let forcedTitle;
            if (catalog.forcedProperties) {
                for (const property of catalog.forcedProperties) {
                    if (layer.name === property.layerName && property.title) {
                        forcedTitle = property.title;
                    }
                }
            }
            if (this.testLayerRegexes(layer.id, regexes) === false) {
                return undefined;
            }
            const baseSourceOptions = {
                type: TypeCatalog[catalog.type],
                url: catalog.url,
                crossOrigin: catalog.setCrossOriginAnonymous
                    ? 'anonymous'
                    : undefined,
                layer: layer.id,
                queryable: true,
                queryFormat: 'esrijson',
                matrixSet: catalog.matrixSet,
                optionsFromCapabilities: true,
                style: 'default'
            };
            const sourceOptions = Object.assign({}, baseSourceOptions, catalog.sourceOptions);
            return ObjectUtils.removeUndefined({
                id: generateIdFromSourceOptions(sourceOptions),
                type: CatalogItemType.Layer,
                title: forcedTitle !== undefined ? forcedTitle : layer.name,
                externalProvider: catalog.externalProvider,
                address: catalog.id,
                options: {
                    sourceOptions,
                    minResolution: getResolutionFromScale(layer.maxScale),
                    maxResolution: getResolutionFromScale(layer.minScale),
                    metadata: {
                        url: undefined,
                        extern: undefined,
                        abstract,
                        type: baseSourceOptions.type
                    },
                    title: forcedTitle !== undefined ? forcedTitle : layer.name
                }
            });
        })
            .filter((item) => item !== undefined);
    }
    testLayerRegexes(layerName, regexes) {
        if (regexes.length === 0) {
            return true;
        }
        return regexes.find((regex) => regex.test(layerName)) !== undefined;
    }
    retrieveLayerInfoFormat(layerNameFromCatalog, layersQueryFormat) {
        const currentLayerInfoFormat = layersQueryFormat.find((f) => f.layer === layerNameFromCatalog);
        const baseInfoFormat = layersQueryFormat.find((f) => f.layer === '*');
        let queryFormat;
        if (currentLayerInfoFormat) {
            queryFormat = currentLayerInfoFormat.queryFormat;
        }
        else if (baseInfoFormat) {
            queryFormat = baseInfoFormat.queryFormat;
        }
        return queryFormat;
    }
    findCatalogInfoFormat(catalog) {
        const layersQueryFormat = [];
        if (!catalog.queryFormat) {
            return layersQueryFormat;
        }
        Object.keys(catalog.queryFormat).forEach((configuredInfoFormat) => {
            if (catalog.queryFormat[configuredInfoFormat] instanceof Array) {
                catalog.queryFormat[configuredInfoFormat].forEach((layerName) => {
                    if (!layersQueryFormat.find((specific) => specific.layer === layerName)) {
                        layersQueryFormat.push({
                            layer: layerName,
                            queryFormat: configuredInfoFormat
                        });
                    }
                });
            }
            else {
                if (!layersQueryFormat.find((specific) => specific.layer === catalog.queryFormat[configuredInfoFormat])) {
                    layersQueryFormat.push({
                        layer: catalog.queryFormat[configuredInfoFormat],
                        queryFormat: configuredInfoFormat
                    });
                }
            }
        });
        return layersQueryFormat;
    }
}
CatalogService.ɵfac = function CatalogService_Factory(t) { return new (t || CatalogService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i2.LanguageService), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i3.CapabilitiesService)); };
CatalogService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CatalogService, factory: CatalogService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.ConfigService }, { type: i2.LanguageService }, { type: i2.MessageService }, { type: i3.CapabilitiesService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvY2F0YWxvZy9zaGFyZWQvY2F0YWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFVaEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBT25ELE9BQU8sRUFBVyxjQUFjLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7QUFLMUQsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFDVSxJQUFnQixFQUNoQixNQUFxQixFQUNyQixlQUFnQyxFQUNoQyxjQUE4QixFQUM5QixtQkFBd0M7UUFKeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUMvQyxDQUFDO0lBRUosWUFBWTtRQUNWLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCBvZiwgemlwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHV1aWQsIE9iamVjdFV0aWxzIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlLCBNZXNzYWdlU2VydmljZSwgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FwYWJpbGl0aWVzU2VydmljZSxcbiAgV01TRGF0YVNvdXJjZU9wdGlvbnMsXG4gIFdNU0RhdGFTb3VyY2VPcHRpb25zUGFyYW1zLFxuICBXTVRTRGF0YVNvdXJjZU9wdGlvbnMsXG4gIEFyY0dJU1Jlc3REYXRhU291cmNlT3B0aW9uc1xufSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcbmltcG9ydCB7IExheWVyT3B0aW9ucywgSW1hZ2VMYXllck9wdGlvbnMgfSBmcm9tICcuLi8uLi9sYXllcic7XG5pbXBvcnQgeyBnZXRSZXNvbHV0aW9uRnJvbVNjYWxlIH0gZnJvbSAnLi4vLi4vbWFwJztcblxuaW1wb3J0IHtcbiAgQ2F0YWxvZ0l0ZW0sXG4gIENhdGFsb2dJdGVtTGF5ZXIsXG4gIENhdGFsb2dJdGVtR3JvdXBcbn0gZnJvbSAnLi9jYXRhbG9nLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYXRhbG9nLCBDYXRhbG9nRmFjdG9yeSwgQ29tcG9zaXRlQ2F0YWxvZyB9IGZyb20gJy4vY2F0YWxvZy5hYnN0cmFjdCc7XG5pbXBvcnQgeyBDYXRhbG9nSXRlbVR5cGUsIFR5cGVDYXRhbG9nIH0gZnJvbSAnLi9jYXRhbG9nLmVudW0nO1xuaW1wb3J0IHsgUXVlcnlGb3JtYXQgfSBmcm9tICcuLi8uLi9xdWVyeSc7XG5pbXBvcnQgeyBnZW5lcmF0ZUlkRnJvbVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENhdGFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXBhYmlsaXRpZXNTZXJ2aWNlOiBDYXBhYmlsaXRpZXNTZXJ2aWNlXG4gICkge31cblxuICBsb2FkQ2F0YWxvZ3MoKTogT2JzZXJ2YWJsZTxDYXRhbG9nW10+IHtcbiAgICBjb25zdCBjb250ZXh0Q29uZmlnID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdjb250ZXh0JykgfHwge307XG4gICAgY29uc3QgY2F0YWxvZ0NvbmZpZyA9IHRoaXMuY29uZmlnLmdldENvbmZpZygnY2F0YWxvZycpIHx8IHt9O1xuICAgIGNvbnN0IGFwaVVybCA9IGNhdGFsb2dDb25maWcudXJsIHx8IGNvbnRleHRDb25maWcudXJsO1xuICAgIGNvbnN0IGNhdGFsb2dzRnJvbUNvbmZpZyA9IGNhdGFsb2dDb25maWcuc291cmNlcyB8fCBbXTtcblxuICAgIGNvbnN0IG9ic2VydmFibGVzJCA9IFtdO1xuXG4gICAgaWYgKGFwaVVybCkge1xuICAgICAgLy8gQmFzZSBsYXllcnMgY2F0YWxvZ1xuICAgICAgaWYgKGNhdGFsb2dDb25maWcuYmFzZUxheWVycykge1xuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uY2F0YWxvZy5iYXNlTGF5ZXJzJyk7XG4gICAgICAgIGNvbnN0IGJhc2VMYXllcnNDYXRhbG9nID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnY2F0YWxvZy5iYXNlbGF5ZXJzJyxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgdXJsOiBgJHthcGlVcmx9L2Jhc2VsYXllcnNgLFxuICAgICAgICAgICAgdHlwZTogJ2Jhc2VsYXllcnMnXG4gICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICBvYnNlcnZhYmxlcyQucHVzaChvZihiYXNlTGF5ZXJzQ2F0YWxvZykpO1xuICAgICAgfVxuXG4gICAgICAvLyBDYXRhbG9ncyBmcm9tIEFQSVxuICAgICAgY29uc3QgY2F0YWxvZ3NGcm9tQXBpJCA9IHRoaXMuaHR0cFxuICAgICAgICAuZ2V0PENhdGFsb2dbXT4oYCR7YXBpVXJsfS9jYXRhbG9nc2ApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoY2F0YWxvZ3MpID0+XG4gICAgICAgICAgICBjYXRhbG9ncy5tYXAoKGM6IGFueSkgPT4gT2JqZWN0LmFzc2lnbihjLCBjLm9wdGlvbnMpKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoX3Jlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gRU1QVFkpXG4gICAgICAgICk7XG4gICAgICBvYnNlcnZhYmxlcyQucHVzaChjYXRhbG9nc0Zyb21BcGkkKTtcbiAgICB9XG5cbiAgICAvLyBDYXRhbG9ncyBmcm9tIGNvbmZpZ1xuICAgIGlmIChjYXRhbG9nc0Zyb21Db25maWcubGVuZ3RoID4gMCkge1xuICAgICAgb2JzZXJ2YWJsZXMkLnB1c2goXG4gICAgICAgIG9mKGNhdGFsb2dzRnJvbUNvbmZpZykucGlwZShcbiAgICAgICAgICBtYXAoKGNhdGFsb2dzOiBDYXRhbG9nW10pID0+XG4gICAgICAgICAgICBjYXRhbG9ncy5tYXAoKGMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFjLmlkKSB7XG4gICAgICAgICAgICAgICAgYy5pZCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB6aXAoLi4ub2JzZXJ2YWJsZXMkKS5waXBlKFxuICAgICAgbWFwKChjYXRhbG9nczogQ2F0YWxvZ1tdW10pID0+IFtdLmNvbmNhdC5hcHBseShbXSwgY2F0YWxvZ3MpKVxuICAgICkgYXMgT2JzZXJ2YWJsZTxDYXRhbG9nW10+O1xuICB9XG5cbiAgbG9hZENhdGFsb2dJdGVtcyhjYXRhbG9nOiBDYXRhbG9nKTogT2JzZXJ2YWJsZTxDYXRhbG9nSXRlbVtdPiB7XG4gICAgbGV0IG5ld0NhdGFsb2c6IENhdGFsb2c7XG4gICAgbmV3Q2F0YWxvZyA9IENhdGFsb2dGYWN0b3J5LmNyZWF0ZUluc3RhbmNlQ2F0YWxvZyhjYXRhbG9nLCB0aGlzKTtcbiAgICByZXR1cm4gbmV3Q2F0YWxvZy5jb2xsZWN0Q2F0YWxvZ0l0ZW1zKCk7XG4gIH1cblxuICBsb2FkQ2F0YWxvZ0Jhc2VMYXllckl0ZW1zKGNhdGFsb2c6IENhdGFsb2cpOiBPYnNlcnZhYmxlPENhdGFsb2dJdGVtR3JvdXBbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldENhdGFsb2dCYXNlTGF5ZXJzT3B0aW9ucyhjYXRhbG9nKS5waXBlKFxuICAgICAgbWFwKChsYXllcnNPcHRpb25zOiBMYXllck9wdGlvbnNbXSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IGxheWVyc09wdGlvbnMubWFwKChsYXllck9wdGlvbnM6IExheWVyT3B0aW9ucykgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZ2VuZXJhdGVJZEZyb21Tb3VyY2VPcHRpb25zKGxheWVyT3B0aW9ucy5zb3VyY2VPcHRpb25zKSxcbiAgICAgICAgICAgIHRpdGxlOiBsYXllck9wdGlvbnMudGl0bGUsXG4gICAgICAgICAgICB0eXBlOiBDYXRhbG9nSXRlbVR5cGUuTGF5ZXIsXG4gICAgICAgICAgICBleHRlcm5hbFByb3ZpZGVyOiBjYXRhbG9nLmV4dGVybmFsUHJvdmlkZXIsXG4gICAgICAgICAgICBvcHRpb25zOiBsYXllck9wdGlvbnNcbiAgICAgICAgICB9IGFzIENhdGFsb2dJdGVtTGF5ZXI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnY2F0YWxvZy5ncm91cC5iYXNlbGF5ZXJzJyxcbiAgICAgICAgICAgIHR5cGU6IENhdGFsb2dJdGVtVHlwZS5Hcm91cCxcbiAgICAgICAgICAgIGV4dGVybmFsUHJvdmlkZXI6IGNhdGFsb2cuZXh0ZXJuYWxQcm92aWRlcixcbiAgICAgICAgICAgIHRpdGxlOiBjYXRhbG9nLnRpdGxlLFxuICAgICAgICAgICAgaXRlbXNcbiAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldENhdGFsb2dCYXNlTGF5ZXJzT3B0aW9ucyhcbiAgICBjYXRhbG9nOiBDYXRhbG9nXG4gICk6IE9ic2VydmFibGU8TGF5ZXJPcHRpb25zW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxMYXllck9wdGlvbnNbXT4oY2F0YWxvZy51cmwpO1xuICB9XG5cbiAgbG9hZENhdGFsb2dXTVNMYXllckl0ZW1zKGNhdGFsb2c6IENhdGFsb2cpOiBPYnNlcnZhYmxlPENhdGFsb2dJdGVtW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDYXRhbG9nQ2FwYWJpbGl0aWVzKGNhdGFsb2cpLnBpcGUoXG4gICAgICBtYXAoKGNhcGFiaWxpdGllczogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIGlmICghY2FwYWJpbGl0aWVzKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYXBhYmlsaXRpZXMuU2VydmljZSAmJiBjYXBhYmlsaXRpZXMuU2VydmljZS5BYnN0cmFjdCAmJiBjYXBhYmlsaXRpZXMuU2VydmljZS5BYnN0cmFjdC5sZW5ndGgpIHtcbiAgICAgICAgICBjYXRhbG9nLmFic3RyYWN0ID0gY2FwYWJpbGl0aWVzLlNlcnZpY2UuQWJzdHJhY3Q7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmluYWxMYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mbGF0dGVuV21zQ2FwYWJpbGl0aWVzKGNhcGFiaWxpdGllcy5DYXBhYmlsaXR5LkxheWVyLCAwLCBmaW5hbExheWVycywgY2F0YWxvZy5ncm91cFNlcGFyYXRvcik7XG4gICAgICAgIGNvbnN0IGNhcGFiaWxpdGllc0NhcGFiaWxpdHlMYXllciA9IE9iamVjdC5hc3NpZ24oe30sIGNhcGFiaWxpdGllcy5DYXBhYmlsaXR5LkxheWVyKTtcbiAgICAgICAgY2FwYWJpbGl0aWVzQ2FwYWJpbGl0eUxheWVyLkxheWVyID0gZmluYWxMYXllcnMuZmlsdGVyKGYgPT4gZi5MYXllci5sZW5ndGggIT09IDApO1xuICAgICAgICB0aGlzLmluY2x1ZGVSZWN1cnNpdmVJdGVtcyhcbiAgICAgICAgICBjYXRhbG9nLFxuICAgICAgICAgIGNhcGFiaWxpdGllc0NhcGFiaWxpdHlMYXllcixcbiAgICAgICAgICBpdGVtc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmbGF0dGVuV21zQ2FwYWJpbGl0aWVzKHBhcmVudCwgbGV2ZWwgPSAwLCBmaW5hbExheWVycywgc2VwYXJhdG9yID0gJyAvICcpIHtcbiAgICBpZiAoIWZpbmFsTGF5ZXJzLmluY2x1ZGVzKHBhcmVudC5UaXRsZSkpIHtcbiAgICAgICAgY29uc3QgbW9kaWZpZWRQYXJlbnQgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnQpO1xuICAgICAgICBtb2RpZmllZFBhcmVudC5MYXllciA9IFtdO1xuICAgICAgICBmaW5hbExheWVycy5wdXNoKG1vZGlmaWVkUGFyZW50KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBsYXllciBvZiBwYXJlbnQuTGF5ZXIpIHtcbiAgICAgICAgY29uc3QgbW9kaWZpZWRMYXllciA9IE9iamVjdC5hc3NpZ24oe30sIGxheWVyKTtcbiAgICAgICAgaWYgKGxldmVsID4gMCkge1xuICAgICAgICAgIG1vZGlmaWVkTGF5ZXIuVGl0bGUgPSBwYXJlbnQuVGl0bGUgKyBzZXBhcmF0b3IgKyBsYXllci5UaXRsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5ZXIuTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZmxhdHRlbldtc0NhcGFiaWxpdGllcyhtb2RpZmllZExheWVyLCBsZXZlbCArIDEsIGZpbmFsTGF5ZXJzLCBzZXBhcmF0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmluYWxMYXllcnMuZmluZChmZiA9PiBmZi5UaXRsZSA9PT0gcGFyZW50LlRpdGxlKS5MYXllci5wdXNoKGxheWVyKTtcbiAgICAgICAgIH1cbiAgICB9XG59XG5cbiAgbG9hZENhdGFsb2dXTVRTTGF5ZXJJdGVtcyhjYXRhbG9nOiBDYXRhbG9nKTogT2JzZXJ2YWJsZTxDYXRhbG9nSXRlbVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2F0YWxvZ0NhcGFiaWxpdGllcyhjYXRhbG9nKS5waXBlKFxuICAgICAgbWFwKChjYXBhYmlsaXRpZXM6IGFueSkgPT4gdGhpcy5nZXRXTVRTSXRlbXMoY2F0YWxvZywgY2FwYWJpbGl0aWVzKSlcbiAgICApO1xuICB9XG5cbiAgbG9hZENhdGFsb2dBcmNHSVNSZXN0SXRlbXMoY2F0YWxvZzogQ2F0YWxvZyk6IE9ic2VydmFibGU8Q2F0YWxvZ0l0ZW1bXT4ge1xuICAgIHJldHVybiB0aGlzLmdldENhdGFsb2dDYXBhYmlsaXRpZXMoY2F0YWxvZykucGlwZShcbiAgICAgIG1hcCgoY2FwYWJpbGl0aWVzOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXJjR0lTUkVTVEl0ZW1zKGNhdGFsb2csIGNhcGFiaWxpdGllcyk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBsb2FkQ2F0YWxvZ0NvbXBvc2l0ZUxheWVySXRlbXMoY2F0YWxvZzogQ2F0YWxvZyk6IE9ic2VydmFibGU8Q2F0YWxvZ0l0ZW1bXT4ge1xuICAgIGNvbnN0IGNvbXBvc2l0ZUNhdGFsb2cgPSAoY2F0YWxvZyBhcyBDb21wb3NpdGVDYXRhbG9nKS5jb21wb3NpdGU7XG5cbiAgICBjb25zdCBjYXRhbG9nc0Zyb21JbnN0YW5jZSA9IFtdIGFzIENhdGFsb2dbXTtcbiAgICBjb21wb3NpdGVDYXRhbG9nLm1hcCgoY29tcG9uZW50OiBDYXRhbG9nKSA9PiB7XG4gICAgICBjb21wb25lbnQuc29ydERpcmVjdGlvbiA9IGNhdGFsb2cuc29ydERpcmVjdGlvbjsgLy8gcHJvcGFnYXRlIHNvcnREaXJlY3Rpb24gd2l0aCBwYXJlbnQgdmFsdWVcbiAgICAgIGNhdGFsb2dzRnJvbUluc3RhbmNlLnB1c2goXG4gICAgICAgIENhdGFsb2dGYWN0b3J5LmNyZWF0ZUluc3RhbmNlQ2F0YWxvZyhjb21wb25lbnQsIHRoaXMpXG4gICAgKTtcbiAgfVxuICAgICk7XG5cbiAgICAvLyBnZXQgQ2F0YWxvZ0l0ZW1zIGZvciBlYWNoIG9yaWdpbmFsIENhdGFsb2ctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0IHJlcXVlc3QxJCA9IFtdO1xuICAgIGNhdGFsb2dzRnJvbUluc3RhbmNlLm1hcCgoY29tcG9uZW50OiBDYXRhbG9nKSA9PlxuICAgICAgcmVxdWVzdDEkLnB1c2goY29tcG9uZW50LmNvbGxlY3RDYXRhbG9nSXRlbXMoKSlcbiAgICApO1xuXG4gICAgLy8gaW50ZWdyYXRlIGltcG9zZWQgZ3JvdXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBsZXQgcmVxdWVzdDIkID0gW107XG5cbiAgICBmdW5jdGlvbiBmbGF0RGVlcExheWVyKGFycikge1xuICAgICAgcmV0dXJuIGFyci5yZWR1Y2UoXG4gICAgICAgIChhY2MsIHZhbCkgPT5cbiAgICAgICAgICBhY2MuY29uY2F0KFxuICAgICAgICAgICAgdmFsLnR5cGUgPT09IENhdGFsb2dJdGVtVHlwZS5Hcm91cCA/IGZsYXREZWVwTGF5ZXIodmFsLml0ZW1zKSA6IHZhbFxuICAgICAgICAgICksXG4gICAgICAgIFtdXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIE9iamVjdC5rZXlzKGNvbXBvc2l0ZUNhdGFsb2cpLmZpbmQoKGspID0+IGNvbXBvc2l0ZUNhdGFsb2dba10uZ3JvdXBJbXBvc2UpXG4gICAgKSB7XG4gICAgICBjb25zdCBwdXNoSW1wb3NlR3JvdXAgPSAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYyA9IGNhdGFsb2dzRnJvbUluc3RhbmNlW2luZGV4XTtcbiAgICAgICAgY29uc3Qgb3V0R3JvdXBJbXBvc2UgPSBPYmplY3QuYXNzaWduKHt9LCBjLmdyb3VwSW1wb3NlKTtcbiAgICAgICAgb3V0R3JvdXBJbXBvc2UuYWRkcmVzcyA9IGMuaWQ7XG4gICAgICAgIG91dEdyb3VwSW1wb3NlLnR5cGUgPSBDYXRhbG9nSXRlbVR5cGUuR3JvdXA7XG4gICAgICAgIG91dEdyb3VwSW1wb3NlLmV4dGVybmFsUHJvdmlkZXIgPSBjLmV4dGVybmFsUHJvdmlkZXI7XG4gICAgICAgIGlmIChvdXRHcm91cEltcG9zZS5zb3J0RGlyZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvdXRHcm91cEltcG9zZS5zb3J0RGlyZWN0aW9uID0gYy5zb3J0RGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIG91dEdyb3VwSW1wb3NlLml0ZW1zID0gW107XG5cbiAgICAgICAgY29uc3QgZmxhdExheWVyID0gZmxhdERlZXBMYXllcihpdGVtKTtcbiAgICAgICAgZmxhdExheWVyLm1hcChcbiAgICAgICAgICAodikgPT4gKHYuYWRkcmVzcyA9IGAke291dEdyb3VwSW1wb3NlLmFkZHJlc3N9LiR7b3V0R3JvdXBJbXBvc2UuaWR9YClcbiAgICAgICAgKTtcbiAgICAgICAgb3V0R3JvdXBJbXBvc2UuaXRlbXMgPSBmbGF0TGF5ZXI7XG5cbiAgICAgICAgcmV0dXJuIG91dEdyb3VwSW1wb3NlO1xuICAgICAgfTtcblxuICAgICAgcmVxdWVzdDIkID0gcmVxdWVzdDEkLm1hcCgob2JzLCBpZHgpID0+XG4gICAgICAgIG9icy5waXBlKFxuICAgICAgICAgIG1hcCgoaXRlbXMpID0+XG4gICAgICAgICAgICBjb21wb3NpdGVDYXRhbG9nW2lkeF0uZ3JvdXBJbXBvc2VcbiAgICAgICAgICAgICAgPyBwdXNoSW1wb3NlR3JvdXAoaXRlbXMsIGlkeClcbiAgICAgICAgICAgICAgOiBpdGVtc1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdDIkID0gcmVxdWVzdDEkO1xuICAgIH1cblxuICAgIC8vIGNvbmNhdCBHcm91cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0IHJlcXVlc3QzJCA9IHppcCguLi5yZXF1ZXN0MiQpLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChvdXRwdXQ6IENhdGFsb2dJdGVtW10pID0+IFtdLmNvbmNhdCguLi5vdXRwdXQpIC8vIFtdLmNvbmNhdC5hcHBseShbXSwgcmVzdWx0MVxuICAgICAgKVxuICAgICk7XG5cbiAgICAvLyBtZXJnZSBHcm91cCAoZmlyc3QgbGV2ZWwgb25seSkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdCBncm91cEJ5R3JvdXBJZCA9IChkYXRhLCBrZXlGbikgPT5cbiAgICAgIGRhdGEucmVkdWNlKChhY2MsIGdyb3VwKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwSWQgPSBrZXlGbihncm91cCk7XG4gICAgICAgIGNvbnN0IGluZCA9IGFjYy5maW5kKCh4KSA9PiB4LmlkID09PSBncm91cElkKTtcblxuICAgICAgICBpZiAoIWluZCkge1xuICAgICAgICAgIGFjY1thY2MubGVuZ3RoXSA9IGdyb3VwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGl4ID0gYWNjLmluZGV4T2YoaW5kKTtcbiAgICAgICAgICBpZiAoYWNjW2l4XS5hZGRyZXNzLnNwbGl0KCd8JykuaW5kZXhPZihncm91cC5hZGRyZXNzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFjY1tpeF0uYWRkcmVzcyA9IGAke2FjY1tpeF0uYWRkcmVzc318JHtncm91cC5hZGRyZXNzfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjY1tpeF0uaXRlbXMucHVzaCguLi5ncm91cC5pdGVtcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcblxuICAgIC8vIG1lcmdlIExheWVyIGZvciBlYWNoIExldmVsIChjYXRhbG9nLCBncm91cChyZWN1cnNpdmUpKVxuICAgIGNvbnN0IHJlY3Vyc2l2ZUdyb3VwQnlMYXllckFkZHJlc3MgPSAoaXRlbXMsIGtleUZuKSA9PlxuICAgICAgaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0sIGlkeCwgYXJyKSA9PiB7XG4gICAgICAgIGNvbnN0IGxheWVyVGl0bGUgPSBrZXlGbihpdGVtKTtcbiAgICAgICAgY29uc3Qgb3V0SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuXG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IENhdGFsb2dJdGVtVHlwZS5MYXllcikge1xuICAgICAgICAgIC8vIHNhbWUgdGl0bGUsIHNhbWUgYWRkcmVzcyA9PiByZXN1bHQ6IG9ubHkgb25lIGl0ZW0gaXMga2VlcFxuXG4gICAgICAgICAgLy8gc2FtZSB0aXRsZSwgYWRkcmVzcyBkaWZmXG4gICAgICAgICAgY29uc3QgaW5kaWNlc01hdGNoVGl0bGUgPSBbXTtcbiAgICAgICAgICBjb25zdCBkaWZmQWRkcmVzcyA9IGFyci5maWx0ZXIoKHgsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBiSW5kID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoeC50aXRsZSA9PT0gbGF5ZXJUaXRsZSAmJiB4LnR5cGUgPT09IENhdGFsb2dJdGVtVHlwZS5MYXllcikge1xuICAgICAgICAgICAgICBpZiAoaSAhPT0gaWR4ICYmIHguYWRkcmVzcyAhPT0gaXRlbS5hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgYkluZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5kaWNlc01hdGNoVGl0bGUucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiSW5kO1xuICAgICAgICAgIH0pOyAvLyAkJiBpICE9PSBpZHhcblxuICAgICAgICAgIGlmIChkaWZmQWRkcmVzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuUG9zaXRpb24gPSBpbmRpY2VzTWF0Y2hUaXRsZS5maW5kSW5kZXgoKHgpID0+IHggPT09IGlkeCkgKyAxO1xuICAgICAgICAgICAgb3V0SXRlbS50aXRsZSA9IGAke2l0ZW0udGl0bGV9ICgke25Qb3NpdGlvbn0pYDsgLy8gc291cmNlOiAke2l0ZW0uYWRkcmVzcy5zcGxpdCgnLicpWzBdfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGV4aXN0ID0gYWNjLmZpbmQoXG4gICAgICAgICAgICAoeCkgPT4geC50aXRsZSA9PT0gb3V0SXRlbS50aXRsZSAmJiB4LnR5cGUgPT09IENhdGFsb2dJdGVtVHlwZS5MYXllclxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCFleGlzdCkge1xuICAgICAgICAgICAgYWNjW2FjYy5sZW5ndGhdID0gb3V0SXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSBDYXRhbG9nSXRlbVR5cGUuR3JvdXApIHtcbiAgICAgICAgICBvdXRJdGVtLml0ZW1zID0gcmVjdXJzaXZlR3JvdXBCeUxheWVyQWRkcmVzcyhcbiAgICAgICAgICAgIGl0ZW0uaXRlbXMsXG4gICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLnRpdGxlXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhY2NbYWNjLmxlbmd0aF0gPSBvdXRJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHJlcXVlc3Q0JCA9IHJlcXVlc3QzJC5waXBlKFxuICAgICAgbWFwKChvdXRwdXQpID0+IGdyb3VwQnlHcm91cElkKG91dHB1dCwgKGdyb3VwKSA9PiBncm91cC5pZCkpLFxuICAgICAgbWFwKChvdXRwdXQpID0+IFtdLmNvbmNhdCguLi5vdXRwdXQpKSxcbiAgICAgIG1hcCgoZGF0YSkgPT4gcmVjdXJzaXZlR3JvdXBCeUxheWVyQWRkcmVzcyhkYXRhLCAobGF5ZXIpID0+IGxheWVyLnRpdGxlKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3Q0JDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2F0YWxvZ0NhcGFiaWxpdGllcyhjYXRhbG9nOiBDYXRhbG9nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzVHlwZTogc3RyaW5nID0gVHlwZUNhdGFsb2dbY2F0YWxvZy50eXBlIGFzIHN0cmluZ107XG4gICAgcmV0dXJuIHRoaXMuY2FwYWJpbGl0aWVzU2VydmljZVxuICAgICAgLmdldENhcGFiaWxpdGllcyhzVHlwZSBhcyBhbnksIGNhdGFsb2cudXJsLCBjYXRhbG9nLnZlcnNpb24pXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAnaWdvLmdlby5jYXRhbG9nLnVuYXZhaWxhYmxlVGl0bGUnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgICBjYXRhbG9nLnRpdGxlID8gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAnaWdvLmdlby5jYXRhbG9nLnVuYXZhaWxhYmxlJyxcbiAgICAgICAgICAgIHsgdmFsdWU6IGNhdGFsb2cudGl0bGUgfVxuICAgICAgICAgICkgOiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICdpZ28uZ2VvLmNhdGFsb2cuc29tZVVuYXZhaWxhYmxlJ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKG1lc3NhZ2UsIHRpdGxlKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIHJldHVybiBvZih1bmRlZmluZWQpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUNhdGFsb2dJdGVtTGF5ZXIobGF5ZXIsIGlkUGFyZW50LCBsYXllcnNRdWVyeUZvcm1hdCwgY2F0YWxvZykge1xuICAgIGNvbnN0IGNvbmZpZ3VyZWRRdWVyeUZvcm1hdCA9IHRoaXMucmV0cmlldmVMYXllckluZm9Gb3JtYXQoXG4gICAgICBsYXllci5OYW1lLFxuICAgICAgbGF5ZXJzUXVlcnlGb3JtYXRcbiAgICApO1xuXG4gICAgY29uc3QgbWV0YWRhdGEgPSBsYXllci5EYXRhVVJMID8gbGF5ZXIuRGF0YVVSTFswXSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBsZWdlbmRPcHRpb25zID1cbiAgICAgIGNhdGFsb2cuc2hvd0xlZ2VuZCAmJiBsYXllci5TdHlsZVxuICAgICAgICA/IHRoaXMuY2FwYWJpbGl0aWVzU2VydmljZS5nZXRTdHlsZShsYXllci5TdHlsZSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBjYXRhbG9nLnF1ZXJ5UGFyYW1zLCB7XG4gICAgICBMQVlFUlM6IGxheWVyLk5hbWUsXG4gICAgICBWRVJTSU9OOiBjYXRhbG9nLnZlcnNpb25cbiAgICB9IGFzIFdNU0RhdGFTb3VyY2VPcHRpb25zUGFyYW1zKTtcblxuICAgIGNvbnN0IGJhc2VTb3VyY2VPcHRpb25zID0ge1xuICAgICAgdHlwZTogJ3dtcycsXG4gICAgICB1cmw6IGNhdGFsb2cudXJsLFxuICAgICAgY3Jvc3NPcmlnaW46IGNhdGFsb2cuc2V0Q3Jvc3NPcmlnaW5Bbm9ueW1vdXMgPyAnYW5vbnltb3VzJyA6IHVuZGVmaW5lZCxcbiAgICAgIHF1ZXJ5Rm9ybWF0OiBjb25maWd1cmVkUXVlcnlGb3JtYXQsXG4gICAgICBxdWVyeUh0bWxUYXJnZXQ6XG4gICAgICAgIGNvbmZpZ3VyZWRRdWVyeUZvcm1hdCA9PT0gUXVlcnlGb3JtYXQuSFRNTCB8fFxuICAgICAgICBjb25maWd1cmVkUXVlcnlGb3JtYXQgPT09IFF1ZXJ5Rm9ybWF0LkhUTUxHTUwyXG4gICAgICAgICAgPyAnaWZyYW1lJ1xuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgb3B0aW9uc0Zyb21DYXBhYmlsaXRpZXM6IHRydWVcbiAgICB9O1xuXG4gICAgY29uc3Qgc291cmNlT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIGJhc2VTb3VyY2VPcHRpb25zLFxuICAgICAgY2F0YWxvZy5zb3VyY2VPcHRpb25zLFxuICAgICAgeyBwYXJhbXMgfVxuICAgICkgYXMgV01TRGF0YVNvdXJjZU9wdGlvbnM7XG5cbiAgICBsZXQgbGF5ZXJUaXRsZTtcbiAgICBpZiAoY2F0YWxvZy5mb3JjZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIGNhdGFsb2cuZm9yY2VkUHJvcGVydGllcykge1xuICAgICAgICBpZiAobGF5ZXIuTmFtZSA9PT0gcHJvcGVydHkubGF5ZXJOYW1lICYmIHByb3BlcnR5LnRpdGxlKSB7XG4gICAgICAgICAgbGF5ZXJUaXRsZSA9IHByb3BlcnR5LnRpdGxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFic3RyYWN0O1xuICAgIGlmIChsYXllci5BYnN0cmFjdCkge1xuICAgICAgYWJzdHJhY3QgPSBsYXllci5BYnN0cmFjdDtcbiAgICB9IGVsc2UgaWYgKCFsYXllci5BYnN0cmFjdCAmJiBjYXRhbG9nLmFic3RyYWN0KSB7XG4gICAgICBhYnN0cmFjdCA9IGNhdGFsb2cuYWJzdHJhY3Q7XG4gICAgfVxuXG4gICAgY29uc3QgbGF5ZXJQcmVwYXJlID0ge1xuICAgICAgaWQ6IGdlbmVyYXRlSWRGcm9tU291cmNlT3B0aW9ucyhzb3VyY2VPcHRpb25zKSxcbiAgICAgIHR5cGU6IENhdGFsb2dJdGVtVHlwZS5MYXllcixcbiAgICAgIHRpdGxlOiBsYXllclRpdGxlICE9PSB1bmRlZmluZWQgPyBsYXllclRpdGxlIDogbGF5ZXIuVGl0bGUsXG4gICAgICBhZGRyZXNzOiBpZFBhcmVudCxcbiAgICAgIGV4dGVybmFsUHJvdmlkZXI6IGNhdGFsb2cuZXh0ZXJuYWxQcm92aWRlciB8fCBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbWF4UmVzb2x1dGlvbjogZ2V0UmVzb2x1dGlvbkZyb21TY2FsZShsYXllci5NYXhTY2FsZURlbm9taW5hdG9yKSxcbiAgICAgICAgbWluUmVzb2x1dGlvbjogZ2V0UmVzb2x1dGlvbkZyb21TY2FsZShsYXllci5NaW5TY2FsZURlbm9taW5hdG9yKSxcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICB1cmw6IG1ldGFkYXRhID8gbWV0YWRhdGEuT25saW5lUmVzb3VyY2UgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZXh0ZXJuOiBtZXRhZGF0YSA/IHRydWUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgYWJzdHJhY3QsXG4gICAgICAgICAgdHlwZTogYmFzZVNvdXJjZU9wdGlvbnMudHlwZVxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmRPcHRpb25zLFxuICAgICAgICB0b29sdGlwOiB7IHR5cGU6IGNhdGFsb2cudG9vbHRpcFR5cGUgfSxcbiAgICAgICAgc291cmNlT3B0aW9uc1xuICAgICAgfVxuICAgIH0gYXMgQ2F0YWxvZ0l0ZW07XG5cbiAgICByZXR1cm4gT2JqZWN0VXRpbHMucmVtb3ZlVW5kZWZpbmVkKGxheWVyUHJlcGFyZSk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVDYXRhbG9nSXRlbUdyb3VwKFxuICAgIGl0ZW1MaXN0SW4sXG4gICAgcmVnZXhlcyxcbiAgICBpZEdyb3VwLFxuICAgIGxheWVyc1F1ZXJ5Rm9ybWF0LFxuICAgIGNhdGFsb2dcbiAgKSB7XG4gICAgY29uc3QgZ3JvdXBQcmVwYXJlID0ge1xuICAgICAgaWQ6IGlkR3JvdXAsXG4gICAgICB0eXBlOiBDYXRhbG9nSXRlbVR5cGUuR3JvdXAsXG4gICAgICB0aXRsZTogaXRlbUxpc3RJbi5UaXRsZSxcbiAgICAgIGFkZHJlc3M6IGNhdGFsb2cuaWQsXG4gICAgICBleHRlcm5hbFByb3ZpZGVyOiBjYXRhbG9nLmV4dGVybmFsUHJvdmlkZXIgfHwgZmFsc2UsXG4gICAgICBzb3J0RGlyZWN0aW9uOiBjYXRhbG9nLnNvcnREaXJlY3Rpb24sIC8vIHByb3BhZ2F0ZSBzb3J0RGlyZWN0aW9uXG4gICAgICBpdGVtczogaXRlbUxpc3RJbi5MYXllci5yZWR1Y2UoKGl0ZW1zOiBDYXRhbG9nSXRlbVtdLCBsYXllcjogYW55KSA9PiB7XG4gICAgICAgIGlmIChsYXllci5MYXllciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gcmVjdXJzaXZlLCBjaGVjayBuZXh0IGxldmVsXG4gICAgICAgICAgY29uc3QgaWRHcm91cEl0ZW1OZXh0TGV2ZWwgPVxuICAgICAgICAgICAgaWRHcm91cCArIGAuZ3JvdXAuJHtsYXllci5OYW1lIHx8IGxheWVyLkxheWVyWzBdLk5hbWV9YDtcbiAgICAgICAgICBjb25zdCBncm91cEl0ZW06IENhdGFsb2dJdGVtR3JvdXAgPSB0aGlzLnByZXBhcmVDYXRhbG9nSXRlbUdyb3VwKFxuICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICByZWdleGVzLFxuICAgICAgICAgICAgaWRHcm91cEl0ZW1OZXh0TGV2ZWwsXG4gICAgICAgICAgICBsYXllcnNRdWVyeUZvcm1hdCxcbiAgICAgICAgICAgIGNhdGFsb2dcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaXRlbXMucHVzaChncm91cEl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnRlc3RMYXllclJlZ2V4ZXMobGF5ZXIuTmFtZSwgcmVnZXhlcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbGF5ZXJJdGVtOiBDYXRhbG9nSXRlbUxheWVyPEltYWdlTGF5ZXJPcHRpb25zPiA9IHRoaXMucHJlcGFyZUNhdGFsb2dJdGVtTGF5ZXIoXG4gICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgIGlkR3JvdXAsXG4gICAgICAgICAgICBsYXllcnNRdWVyeUZvcm1hdCxcbiAgICAgICAgICAgIGNhdGFsb2dcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaXRlbXMucHVzaChsYXllckl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgIH0sIFtdKVxuICAgIH07XG4gICAgcmV0dXJuIGdyb3VwUHJlcGFyZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5jbHVkZVJlY3Vyc2l2ZUl0ZW1zKFxuICAgIGNhdGFsb2c6IENhdGFsb2csXG4gICAgaXRlbUxpc3RJbjogYW55LFxuICAgIGl0ZW1zUHJlcGFyZTogQ2F0YWxvZ0l0ZW1bXSxcbiAgICBsb29wTGV2ZWw6IG51bWJlciA9IDBcbiAgKSB7XG4gICAgLy8gRGlnIGFsbCBsZXZlbHMgdW50aWwgbGFzdCBsZXZlbCAobGF5ZXIgb2JqZWN0IGFyZSBub3QgZGVmaW5lZCBvbiBsYXN0IGxldmVsKVxuICAgIGNvbnN0IHJlZ2V4ZXMgPSAoY2F0YWxvZy5yZWdGaWx0ZXJzIHx8IFtdKS5tYXAoXG4gICAgICAocGF0dGVybjogc3RyaW5nKSA9PiBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgKTtcbiAgICBpZiAoIWl0ZW1MaXN0SW4uTGF5ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbUxpc3RJbi5MYXllcikge1xuICAgICAgaWYgKGl0ZW0uTGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyByZWN1cnNpdmUsIGNoZWNrIG5leHQgbGV2ZWxcbiAgICAgICAgdGhpcy5pbmNsdWRlUmVjdXJzaXZlSXRlbXMoY2F0YWxvZywgaXRlbSwgaXRlbXNQcmVwYXJlLCBsb29wTGV2ZWwgKyAxKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxheWVyc1F1ZXJ5Rm9ybWF0ID0gdGhpcy5maW5kQ2F0YWxvZ0luZm9Gb3JtYXQoY2F0YWxvZyk7XG5cbiAgICAgIC8vIGdyb3VwKHdpdGggbGF5ZXJzKSBhbmQgbGF5ZXIod2l0aG91dCBncm91cCkgbGV2ZWwgMVxuICAgICAgaWYgKGxvb3BMZXZlbCAhPT0gMCkge1xuICAgICAgICAvLyBUT0RPOiBTbGljZSB0aGF0IGludG8gbXVsdGlwbGUgbWV0aG9kc1xuICAgICAgICAvLyBEZWZpbmUgb2JqZWN0IG9mIGdyb3VwIGxheWVyXG4gICAgICAgIGNvbnN0IGlkR3JvdXBJdGVtID0gYGNhdGFsb2cuZ3JvdXAuJHtpdGVtTGlzdEluLk5hbWUgfHwgaXRlbS5OYW1lfWA7XG4gICAgICAgIGNvbnN0IGdyb3VwSXRlbSA9IHRoaXMucHJlcGFyZUNhdGFsb2dJdGVtR3JvdXAoXG4gICAgICAgICAgaXRlbUxpc3RJbixcbiAgICAgICAgICByZWdleGVzLFxuICAgICAgICAgIGlkR3JvdXBJdGVtLFxuICAgICAgICAgIGxheWVyc1F1ZXJ5Rm9ybWF0LFxuICAgICAgICAgIGNhdGFsb2dcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZ3JvdXBJdGVtLml0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGl0ZW1zUHJlcGFyZS5wdXNoKGdyb3VwSXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCcmVhayB0aGUgZ3JvdXAgKGRvbid0IGFkZCBhIGdyb3VwIG9mIGxheWVyIGZvciBlYWNoIG9mIHRoZWlyIGxheWVyISlcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBsYXllciB3aXRob3V0IGdyb3VwXG4gICAgICAgIGlmICh0aGlzLnRlc3RMYXllclJlZ2V4ZXMoaXRlbS5OYW1lLCByZWdleGVzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBsYXllckl0ZW0gPSB0aGlzLnByZXBhcmVDYXRhbG9nSXRlbUxheWVyKFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIGNhdGFsb2cuaWQsXG4gICAgICAgICAgICBsYXllcnNRdWVyeUZvcm1hdCxcbiAgICAgICAgICAgIGNhdGFsb2dcbiAgICAgICAgICApO1xuICAgICAgICAgIGl0ZW1zUHJlcGFyZS5wdXNoKGxheWVySXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFdNVFNJdGVtcyhcbiAgICBjYXRhbG9nLFxuICAgIGNhcGFiaWxpdGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICApOiBDYXRhbG9nSXRlbUxheWVyW10ge1xuICAgIGlmICghY2FwYWJpbGl0aWVzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGxheWVycyA9IGNhcGFiaWxpdGllcy5Db250ZW50cy5MYXllcjtcbiAgICBjb25zdCByZWdleGVzID0gKGNhdGFsb2cucmVnRmlsdGVycyB8fCBbXSkubWFwKFxuICAgICAgKHBhdHRlcm46IHN0cmluZykgPT4gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBjYXBhYmlsaXRpZXMuU2VydmljZUlkZW50aWZpY2F0aW9uICYmXG4gICAgICBjYXBhYmlsaXRpZXMuU2VydmljZUlkZW50aWZpY2F0aW9uLkFic3RyYWN0ICYmXG4gICAgICBjYXBhYmlsaXRpZXMuU2VydmljZUlkZW50aWZpY2F0aW9uLkFic3RyYWN0Lmxlbmd0aCkge1xuICAgICAgY2F0YWxvZy5hYnN0cmFjdCA9IGNhcGFiaWxpdGllcy5TZXJ2aWNlSWRlbnRpZmljYXRpb24uQWJzdHJhY3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxheWVyc1xuICAgICAgLm1hcCgobGF5ZXI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZm9yY2VkVGl0bGU7XG4gICAgICAgIGlmIChjYXRhbG9nLmZvcmNlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIGNhdGFsb2cuZm9yY2VkUHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKGxheWVyLlRpdGxlID09PSBwcm9wZXJ0eS5sYXllck5hbWUgJiYgcHJvcGVydHkudGl0bGUpIHtcbiAgICAgICAgICAgICAgZm9yY2VkVGl0bGUgPSBwcm9wZXJ0eS50aXRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGVzdExheWVyUmVnZXhlcyhsYXllci5JZGVudGlmaWVyLCByZWdleGVzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGNhdGFsb2cucXVlcnlQYXJhbXMsIHtcbiAgICAgICAgICB2ZXJzaW9uOiAnMS4wLjAnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlU291cmNlT3B0aW9ucyA9IHtcbiAgICAgICAgICB0eXBlOiAnd210cycsXG4gICAgICAgICAgdXJsOiBjYXRhbG9nLnVybCxcbiAgICAgICAgICBjcm9zc09yaWdpbjogY2F0YWxvZy5zZXRDcm9zc09yaWdpbkFub255bW91c1xuICAgICAgICAgICAgPyAnYW5vbnltb3VzJ1xuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgbGF5ZXI6IGxheWVyLklkZW50aWZpZXIsXG4gICAgICAgICAgbWF0cml4U2V0OiBjYXRhbG9nLm1hdHJpeFNldCxcbiAgICAgICAgICBvcHRpb25zRnJvbUNhcGFiaWxpdGllczogdHJ1ZSxcbiAgICAgICAgICByZXF1ZXN0RW5jb2Rpbmc6IGNhdGFsb2cucmVxdWVzdEVuY29kaW5nIHx8ICdLVlAnLFxuICAgICAgICAgIHN0eWxlOiAnZGVmYXVsdCdcbiAgICAgICAgfSBhcyBXTVRTRGF0YVNvdXJjZU9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNvdXJjZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIGJhc2VTb3VyY2VPcHRpb25zLFxuICAgICAgICAgIGNhdGFsb2cuc291cmNlT3B0aW9ucyxcbiAgICAgICAgICB7IHBhcmFtcyB9XG4gICAgICAgICkgYXMgV01UU0RhdGFTb3VyY2VPcHRpb25zO1xuXG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5yZW1vdmVVbmRlZmluZWQoe1xuICAgICAgICAgIGlkOiBnZW5lcmF0ZUlkRnJvbVNvdXJjZU9wdGlvbnMoc291cmNlT3B0aW9ucyksXG4gICAgICAgICAgdHlwZTogQ2F0YWxvZ0l0ZW1UeXBlLkxheWVyLFxuICAgICAgICAgIHRpdGxlOiBmb3JjZWRUaXRsZSAhPT0gdW5kZWZpbmVkID8gZm9yY2VkVGl0bGUgOiBsYXllci5UaXRsZSxcbiAgICAgICAgICBhZGRyZXNzOiBjYXRhbG9nLmlkLFxuICAgICAgICAgIGV4dGVybmFsUHJvdmlkZXI6IGNhdGFsb2cuZXh0ZXJuYWxQcm92aWRlcixcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzb3VyY2VPcHRpb25zLFxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGV4dGVybjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBhYnN0cmFjdDogY2F0YWxvZy5hYnN0cmFjdCxcbiAgICAgICAgICAgICAgdHlwZTogYmFzZVNvdXJjZU9wdGlvbnMudHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBDYXRhbG9nSXRlbSk7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoaXRlbTogQ2F0YWxvZ0l0ZW1MYXllciB8IHVuZGVmaW5lZCkgPT4gaXRlbSAhPT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXJjR0lTUkVTVEl0ZW1zKFxuICAgIGNhdGFsb2csXG4gICAgY2FwYWJpbGl0aWVzXG4gICk6IENhdGFsb2dJdGVtTGF5ZXJbXSB7XG4gICAgaWYgKCFjYXBhYmlsaXRpZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgbGF5ZXJzID1cbiAgICAhY2FwYWJpbGl0aWVzLmxheWVycyA/IFtdIDogY2FwYWJpbGl0aWVzLmxheWVycy5maWx0ZXIobGF5ZXIgPT4gIWxheWVyLnR5cGUgfHwgbGF5ZXIudHlwZSA9PT0gJ0ZlYXR1cmUgTGF5ZXInKTtcbiAgICBpZiAoIWNhcGFiaWxpdGllcy5sYXllcnMpIHtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IoXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmNhdGFsb2cuc29tZVVuYXZhaWxhYmxlJyksXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmNhdGFsb2cudW5hdmFpbGFibGVUaXRsZScpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlZ2V4ZXMgPSAoY2F0YWxvZy5yZWdGaWx0ZXJzIHx8IFtdKS5tYXAoXG4gICAgICAocGF0dGVybjogc3RyaW5nKSA9PiBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgKTtcblxuICAgIGxldCBhYnN0cmFjdDtcbiAgICBpZiAoY2FwYWJpbGl0aWVzLnNlcnZpY2VEZXNjcmlwdGlvbiAmJiBjYXBhYmlsaXRpZXMuc2VydmljZURlc2NyaXB0aW9uLmxlbmd0aCkge1xuICAgICAgY29uc3QgcmVnZXggPSAvKDwoW14+XSspPikvaWc7XG4gICAgICBhYnN0cmFjdCA9IGNhcGFiaWxpdGllcy5zZXJ2aWNlRGVzY3JpcHRpb24ucmVwbGFjZShyZWdleCwgJycpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXllcnNcbiAgICAgIC5tYXAoKGxheWVyOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGZvcmNlZFRpdGxlO1xuICAgICAgICBpZiAoY2F0YWxvZy5mb3JjZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBjYXRhbG9nLmZvcmNlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChsYXllci5uYW1lID09PSBwcm9wZXJ0eS5sYXllck5hbWUgJiYgcHJvcGVydHkudGl0bGUpIHtcbiAgICAgICAgICAgICAgZm9yY2VkVGl0bGUgPSBwcm9wZXJ0eS50aXRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGVzdExheWVyUmVnZXhlcyhsYXllci5pZCwgcmVnZXhlcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYXNlU291cmNlT3B0aW9ucyA9IHtcbiAgICAgICAgICB0eXBlOiBUeXBlQ2F0YWxvZ1tjYXRhbG9nLnR5cGVdLFxuICAgICAgICAgIHVybDogY2F0YWxvZy51cmwsXG4gICAgICAgICAgY3Jvc3NPcmlnaW46IGNhdGFsb2cuc2V0Q3Jvc3NPcmlnaW5Bbm9ueW1vdXNcbiAgICAgICAgICAgID8gJ2Fub255bW91cydcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGxheWVyOiBsYXllci5pZCBhcyBzdHJpbmcsXG4gICAgICAgICAgcXVlcnlhYmxlOiB0cnVlLFxuICAgICAgICAgIHF1ZXJ5Rm9ybWF0OiAnZXNyaWpzb24nLFxuICAgICAgICAgIG1hdHJpeFNldDogY2F0YWxvZy5tYXRyaXhTZXQsXG4gICAgICAgICAgb3B0aW9uc0Zyb21DYXBhYmlsaXRpZXM6IHRydWUsXG4gICAgICAgICAgc3R5bGU6ICdkZWZhdWx0J1xuICAgICAgICB9IGFzIEFyY0dJU1Jlc3REYXRhU291cmNlT3B0aW9ucztcbiAgICAgICAgY29uc3Qgc291cmNlT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgYmFzZVNvdXJjZU9wdGlvbnMsXG4gICAgICAgICAgY2F0YWxvZy5zb3VyY2VPcHRpb25zXG4gICAgICAgICkgYXMgQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zO1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMucmVtb3ZlVW5kZWZpbmVkKHtcbiAgICAgICAgICBpZDogZ2VuZXJhdGVJZEZyb21Tb3VyY2VPcHRpb25zKHNvdXJjZU9wdGlvbnMpLFxuICAgICAgICAgIHR5cGU6IENhdGFsb2dJdGVtVHlwZS5MYXllcixcbiAgICAgICAgICB0aXRsZTogZm9yY2VkVGl0bGUgIT09IHVuZGVmaW5lZCA/IGZvcmNlZFRpdGxlIDogbGF5ZXIubmFtZSxcbiAgICAgICAgICBleHRlcm5hbFByb3ZpZGVyOiBjYXRhbG9nLmV4dGVybmFsUHJvdmlkZXIsXG4gICAgICAgICAgYWRkcmVzczogY2F0YWxvZy5pZCxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzb3VyY2VPcHRpb25zLFxuICAgICAgICAgICAgbWluUmVzb2x1dGlvbjogZ2V0UmVzb2x1dGlvbkZyb21TY2FsZShsYXllci5tYXhTY2FsZSksXG4gICAgICAgICAgICBtYXhSZXNvbHV0aW9uOiBnZXRSZXNvbHV0aW9uRnJvbVNjYWxlKGxheWVyLm1pblNjYWxlKSxcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgIHVybDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBleHRlcm46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgYWJzdHJhY3QsXG4gICAgICAgICAgICAgIHR5cGU6IGJhc2VTb3VyY2VPcHRpb25zLnR5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTogZm9yY2VkVGl0bGUgIT09IHVuZGVmaW5lZCA/IGZvcmNlZFRpdGxlIDogbGF5ZXIubmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBDYXRhbG9nSXRlbSk7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoaXRlbTogQ2F0YWxvZ0l0ZW1MYXllciB8IHVuZGVmaW5lZCkgPT4gaXRlbSAhPT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgdGVzdExheWVyUmVnZXhlcyhsYXllck5hbWU6IHN0cmluZywgcmVnZXhlczogUmVnRXhwW10pOiBib29sZWFuIHtcbiAgICBpZiAocmVnZXhlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVnZXhlcy5maW5kKChyZWdleDogUmVnRXhwKSA9PiByZWdleC50ZXN0KGxheWVyTmFtZSkpICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIHJldHJpZXZlTGF5ZXJJbmZvRm9ybWF0KFxuICAgIGxheWVyTmFtZUZyb21DYXRhbG9nOiBzdHJpbmcsXG4gICAgbGF5ZXJzUXVlcnlGb3JtYXQ6IHsgbGF5ZXI6IHN0cmluZzsgcXVlcnlGb3JtYXQ6IFF1ZXJ5Rm9ybWF0IH1bXVxuICApOiBRdWVyeUZvcm1hdCB7XG4gICAgY29uc3QgY3VycmVudExheWVySW5mb0Zvcm1hdCA9IGxheWVyc1F1ZXJ5Rm9ybWF0LmZpbmQoXG4gICAgICAoZikgPT4gZi5sYXllciA9PT0gbGF5ZXJOYW1lRnJvbUNhdGFsb2dcbiAgICApO1xuICAgIGNvbnN0IGJhc2VJbmZvRm9ybWF0ID0gbGF5ZXJzUXVlcnlGb3JtYXQuZmluZCgoZikgPT4gZi5sYXllciA9PT0gJyonKTtcbiAgICBsZXQgcXVlcnlGb3JtYXQ6IFF1ZXJ5Rm9ybWF0O1xuICAgIGlmIChjdXJyZW50TGF5ZXJJbmZvRm9ybWF0KSB7XG4gICAgICBxdWVyeUZvcm1hdCA9IGN1cnJlbnRMYXllckluZm9Gb3JtYXQucXVlcnlGb3JtYXQ7XG4gICAgfSBlbHNlIGlmIChiYXNlSW5mb0Zvcm1hdCkge1xuICAgICAgcXVlcnlGb3JtYXQgPSBiYXNlSW5mb0Zvcm1hdC5xdWVyeUZvcm1hdDtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5Rm9ybWF0O1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kQ2F0YWxvZ0luZm9Gb3JtYXQoXG4gICAgY2F0YWxvZzogQ2F0YWxvZ1xuICApOiB7IGxheWVyOiBzdHJpbmc7IHF1ZXJ5Rm9ybWF0OiBRdWVyeUZvcm1hdCB9W10ge1xuICAgIGNvbnN0IGxheWVyc1F1ZXJ5Rm9ybWF0OiB7IGxheWVyOiBzdHJpbmc7IHF1ZXJ5Rm9ybWF0OiBRdWVyeUZvcm1hdCB9W10gPSBbXTtcbiAgICBpZiAoIWNhdGFsb2cucXVlcnlGb3JtYXQpIHtcbiAgICAgIHJldHVybiBsYXllcnNRdWVyeUZvcm1hdDtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoY2F0YWxvZy5xdWVyeUZvcm1hdCkuZm9yRWFjaCgoY29uZmlndXJlZEluZm9Gb3JtYXQpID0+IHtcbiAgICAgIGlmIChjYXRhbG9nLnF1ZXJ5Rm9ybWF0W2NvbmZpZ3VyZWRJbmZvRm9ybWF0XSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGNhdGFsb2cucXVlcnlGb3JtYXRbY29uZmlndXJlZEluZm9Gb3JtYXRdLmZvckVhY2goKGxheWVyTmFtZSkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFsYXllcnNRdWVyeUZvcm1hdC5maW5kKChzcGVjaWZpYykgPT4gc3BlY2lmaWMubGF5ZXIgPT09IGxheWVyTmFtZSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGxheWVyc1F1ZXJ5Rm9ybWF0LnB1c2goe1xuICAgICAgICAgICAgICBsYXllcjogbGF5ZXJOYW1lLFxuICAgICAgICAgICAgICBxdWVyeUZvcm1hdDogY29uZmlndXJlZEluZm9Gb3JtYXQgYXMgUXVlcnlGb3JtYXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWxheWVyc1F1ZXJ5Rm9ybWF0LmZpbmQoXG4gICAgICAgICAgICAoc3BlY2lmaWMpID0+XG4gICAgICAgICAgICAgIHNwZWNpZmljLmxheWVyID09PSBjYXRhbG9nLnF1ZXJ5Rm9ybWF0W2NvbmZpZ3VyZWRJbmZvRm9ybWF0XVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGF5ZXJzUXVlcnlGb3JtYXQucHVzaCh7XG4gICAgICAgICAgICBsYXllcjogY2F0YWxvZy5xdWVyeUZvcm1hdFtjb25maWd1cmVkSW5mb0Zvcm1hdF0sXG4gICAgICAgICAgICBxdWVyeUZvcm1hdDogY29uZmlndXJlZEluZm9Gb3JtYXQgYXMgUXVlcnlGb3JtYXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsYXllcnNRdWVyeUZvcm1hdDtcbiAgfVxufVxuIl19