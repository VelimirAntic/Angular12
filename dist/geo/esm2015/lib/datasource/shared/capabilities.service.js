import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Cacheable } from 'ts-cacheable';
import { WMSCapabilities, WMTSCapabilities, EsriJSON } from 'ol/format';
import { optionsFromCapabilities } from 'ol/source/WMTS.js';
import olAttribution from 'ol/control/Attribution';
import { ObjectUtils } from '@igo2/utils';
import { getResolutionFromScale } from '../../map/shared/map.utils';
import { EsriStyleGenerator } from '../utils/esri-style-generator';
import { QueryFormat, QueryFormatMimeType } from '../../query/shared/query.enums';
import { TimeFilterType, TimeFilterStyle } from '../../filter/shared/time-filter.enum';
import * as olproj from 'ol/proj';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../map/shared/map.service";
export var TypeCapabilities;
(function (TypeCapabilities) {
    TypeCapabilities["wms"] = "wms";
    TypeCapabilities["wmts"] = "wmts";
    TypeCapabilities["arcgisrest"] = "esriJSON";
    TypeCapabilities["imagearcgisrest"] = "esriJSON";
    TypeCapabilities["tilearcgisrest"] = "esriJSON";
})(TypeCapabilities || (TypeCapabilities = {}));
export class CapabilitiesService {
    constructor(http, mapService) {
        this.http = http;
        this.mapService = mapService;
        this.parsers = {
            wms: new WMSCapabilities(),
            wmts: new WMTSCapabilities(),
            esriJSON: new EsriJSON()
        };
    }
    getWMSOptions(baseOptions) {
        const url = baseOptions.url;
        const version = baseOptions.params.VERSION;
        return this.getCapabilities('wms', url, version).pipe(map((capabilities) => {
            return capabilities
                ? this.parseWMSOptions(baseOptions, capabilities)
                : undefined;
        }));
    }
    getWMTSOptions(baseOptions) {
        const url = baseOptions.url;
        const version = baseOptions.version;
        const options = this.getCapabilities('wmts', url, version).pipe(map((capabilities) => {
            return capabilities
                ? this.parseWMTSOptions(baseOptions, capabilities)
                : undefined;
        }));
        return options;
    }
    getCartoOptions(baseOptions) {
        const baseUrl = 'https://' +
            baseOptions.account +
            '.carto.com/api/v2/viz/' +
            baseOptions.mapId +
            '/viz.json';
        return this.http
            .jsonp(baseUrl, 'callback')
            .pipe(map((cartoOptions) => this.parseCartoOptions(baseOptions, cartoOptions)));
    }
    getArcgisOptions(baseOptions) {
        const baseUrl = baseOptions.url + '/' + baseOptions.layer + '?f=json';
        const modifiedUrl = baseOptions.url.replace('FeatureServer', 'MapServer');
        const legendUrl = modifiedUrl + '/legend?f=json';
        const serviceCapabilities = this.getCapabilities('arcgisrest', baseOptions.url);
        const arcgisOptions = this.http.get(baseUrl);
        const legend = this.http.get(legendUrl).pipe(map((res) => res), catchError((err) => {
            console.log('No legend associated with this Feature Service');
            return of(err);
        }));
        return forkJoin([arcgisOptions, legend, serviceCapabilities]).pipe(map((res) => {
            return this.parseArcgisOptions(baseOptions, res[0], res[1], res[2]);
        }));
    }
    getImageArcgisOptions(baseOptions) {
        const baseUrl = baseOptions.url + '/' + baseOptions.layer + '?f=json';
        const modifiedUrl = baseOptions.url.replace('FeatureServer', 'MapServer');
        const legendUrl = modifiedUrl + '/legend?f=json';
        const serviceCapabilities = this.getCapabilities('imagearcgisrest', baseOptions.url);
        const arcgisOptions = this.http.get(baseUrl);
        const legend = this.http.get(legendUrl).pipe(map((res) => res), catchError((err) => {
            console.log('No legend associated with this Image Service');
            return of(err);
        }));
        return forkJoin([arcgisOptions, legend, serviceCapabilities]).pipe(map((res) => {
            return this.parseTileOrImageArcgisOptions(baseOptions, res[0], res[1], res[2]);
        }));
    }
    getTileArcgisOptions(baseOptions) {
        const baseUrl = baseOptions.url + '/' + baseOptions.layer + '?f=json';
        const legendUrl = baseOptions.url + '/legend?f=json';
        const serviceCapabilities = this.getCapabilities('tilearcgisrest', baseOptions.url);
        const arcgisOptions = this.http.get(baseUrl);
        const legendInfo = this.http.get(legendUrl).pipe(map((res) => res), catchError((err) => {
            console.log('No legend associated with this Tile Service');
            return of(err);
        }));
        return forkJoin([arcgisOptions, legendInfo, serviceCapabilities]).pipe(map((res) => this.parseTileOrImageArcgisOptions(baseOptions, res[0], res[1], res[2])));
    }
    getCapabilities(service, baseUrl, version) {
        const params = new HttpParams({
            fromObject: {
                request: 'GetCapabilities',
                service: service.toUpperCase(),
                version: version || '1.3.0',
                _i: 'true'
            }
        });
        let request;
        if (TypeCapabilities[service] === 'esriJSON') {
            request = this.http.get(baseUrl + '?f=json');
        }
        else {
            request = this.http.get(baseUrl, {
                params,
                responseType: 'text'
            });
        }
        return request.pipe(map((res) => {
            if (TypeCapabilities[service] === 'esriJSON') {
                return res;
            }
            if (String(res).toLowerCase().includes('serviceexception') &&
                String(res).toLowerCase().includes('access denied')) {
                throw {
                    error: {
                        message: 'Service error getCapabilities: Access is denied'
                    }
                };
            }
            else {
                return this.parsers[service].read(res);
            }
        }), catchError((e) => {
            if (typeof e.error !== 'undefined') {
                e.error.caught = true;
            }
            throw e;
        }));
    }
    parseWMSOptions(baseOptions, capabilities) {
        const layers = baseOptions.params.LAYERS;
        const layer = this.findDataSourceInCapabilities(capabilities.Capability.Layer, layers);
        if (!layer) {
            throw {
                error: {
                    message: 'Layer not found'
                }
            };
        }
        const metadata = layer.DataURL ? layer.DataURL[0] : undefined;
        const abstract = layer.Abstract ? layer.Abstract : undefined;
        const keywordList = layer.KeywordList ? layer.KeywordList : undefined;
        let queryable = layer.queryable;
        const timeFilter = this.getTimeFilter(layer);
        const timeFilterable = timeFilter && Object.keys(timeFilter).length > 0;
        const legendOptions = layer.Style ? this.getStyle(layer.Style) : undefined;
        let isExtentInGeographic = true;
        if (layer.EX_GeographicBoundingBox) {
            layer.EX_GeographicBoundingBox.forEach((coord, index) => {
                if (index < 2 && (coord > 180 || coord < -180)) {
                    isExtentInGeographic = false;
                }
                if (index >= 2 && (coord > 90 || coord < -90)) {
                    isExtentInGeographic = false;
                }
            });
        }
        else {
            isExtentInGeographic = false;
        }
        const extent = isExtentInGeographic ?
            olproj.transformExtent(layer.EX_GeographicBoundingBox, 'EPSG:4326', this.mapService.getMap().projection) :
            undefined;
        let queryFormat;
        const queryFormatMimeTypePriority = [
            QueryFormatMimeType.GEOJSON,
            QueryFormatMimeType.GEOJSON2,
            QueryFormatMimeType.GML3,
            QueryFormatMimeType.GML2,
            QueryFormatMimeType.JSON,
            QueryFormatMimeType.HTML
        ];
        for (const mimeType of queryFormatMimeTypePriority) {
            if (capabilities.Capability.Request.GetFeatureInfo.Format.indexOf(mimeType) !== -1) {
                const keyEnum = Object.keys(QueryFormatMimeType).find((key) => QueryFormatMimeType[key] === mimeType);
                queryFormat = QueryFormat[keyEnum];
                break;
            }
        }
        if (!queryFormat) {
            queryable = false;
        }
        const options = ObjectUtils.removeUndefined({
            _layerOptionsFromSource: {
                title: layer.Title,
                maxResolution: getResolutionFromScale(layer.MaxScaleDenominator),
                minResolution: getResolutionFromScale(layer.MinScaleDenominator),
                extent,
                metadata: {
                    url: metadata ? metadata.OnlineResource : undefined,
                    extern: metadata ? true : undefined,
                    abstract,
                    keywordList
                },
                legendOptions
            },
            queryable,
            queryFormat,
            timeFilter: timeFilterable ? timeFilter : undefined,
            timeFilterable: timeFilterable ? true : undefined,
            minDate: timeFilterable ? timeFilter.min : undefined,
            maxDate: timeFilterable ? timeFilter.max : undefined,
            stepDate: timeFilterable ? timeFilter.step : undefined
        });
        return ObjectUtils.mergeDeep(options, baseOptions);
    }
    parseWMTSOptions(baseOptions, capabilities) {
        // Put Title source in _layerOptionsFromSource. (For source & catalog in _layerOptionsFromSource, if not already on config)
        const layer = capabilities.Contents.Layer.find((el) => el.Identifier === baseOptions.layer);
        const options = optionsFromCapabilities(capabilities, baseOptions);
        const ouputOptions = Object.assign(options, baseOptions);
        const sourceOptions = ObjectUtils.removeUndefined({
            _layerOptionsFromSource: {
                title: layer.Title
            }
        });
        return ObjectUtils.mergeDeep(sourceOptions, ouputOptions);
    }
    parseCartoOptions(baseOptions, cartoOptions) {
        const layers = [];
        const params = cartoOptions.layers[1].options.layer_definition;
        params.layers.forEach((element) => {
            layers.push({
                type: element.type.toLowerCase(),
                options: element.options,
                legend: element.legend
            });
        });
        const options = ObjectUtils.removeUndefined({
            config: {
                version: params.version,
                layers
            }
        });
        return ObjectUtils.mergeDeep(options, baseOptions);
    }
    parseArcgisOptions(baseOptions, arcgisOptions, legend, serviceCapabilities) {
        var _a;
        const title = arcgisOptions.name;
        let legendInfo;
        if (legend.layers) {
            legendInfo = legend.layers.find(x => x.layerName === title);
        }
        else if ((_a = arcgisOptions.drawingInfo) === null || _a === void 0 ? void 0 : _a.renderer) {
            legendInfo = arcgisOptions.drawingInfo.renderer;
        }
        else {
            legendInfo = undefined;
        }
        let style;
        if (arcgisOptions.drawingInfo) {
            const styleGenerator = new EsriStyleGenerator();
            const units = arcgisOptions.units === 'esriMeters' ? 'm' : 'degrees';
            style = styleGenerator.generateStyle(arcgisOptions, units);
        }
        const attributions = new olAttribution({
            target: arcgisOptions.copyrightText
        });
        let timeExtent;
        let timeFilter;
        if (arcgisOptions.timeInfo) {
            const time = arcgisOptions.timeInfo.timeExtent;
            timeExtent = time[0] + ',' + time[1];
            const min = new Date();
            min.setTime(time[0]);
            const max = new Date();
            max.setTime(time[1]);
            timeFilter = {
                min: min.toUTCString(),
                max: max.toUTCString(),
                range: true,
                type: TimeFilterType.DATETIME,
                style: TimeFilterStyle.CALENDAR
            };
        }
        const params = Object.assign({}, {
            style,
            LAYERS: baseOptions.layer ? 'show:' + baseOptions.layer : undefined,
            time: timeExtent
        });
        const options = ObjectUtils.removeUndefined({
            params,
            _layerOptionsFromSource: {
                title,
                minResolution: getResolutionFromScale(arcgisOptions.maxScale),
                maxResolution: getResolutionFromScale(arcgisOptions.minScale),
                metadata: {
                    extern: false,
                    abstract: arcgisOptions.description || serviceCapabilities.serviceDescription
                },
            },
            legendInfo,
            timeFilter,
            sourceFields: arcgisOptions.fields,
            queryTitle: arcgisOptions.displayField
        });
        options.attributions = attributions;
        return ObjectUtils.mergeDeep(options, baseOptions);
    }
    parseTileOrImageArcgisOptions(baseOptions, arcgisOptions, legend, serviceCapabilities) {
        const title = arcgisOptions.name;
        const legendInfo = legend.layers ? legend.layers.find(x => x.layerName === title) : undefined;
        const attributions = new olAttribution({
            target: arcgisOptions.copyrightText
        });
        let timeExtent;
        let timeFilter;
        if (arcgisOptions.timeInfo) {
            const time = arcgisOptions.timeInfo.timeExtent;
            timeExtent = time[0] + ',' + time[1];
            const min = new Date();
            min.setTime(time[0]);
            const max = new Date();
            max.setTime(time[1]);
            timeFilter = {
                min: min.toUTCString(),
                max: max.toUTCString(),
                range: true,
                type: TimeFilterType.DATETIME,
                style: TimeFilterStyle.CALENDAR
            };
        }
        const params = Object.assign({}, {
            LAYERS: baseOptions.layer ? 'show:' + baseOptions.layer : undefined,
            time: timeExtent
        });
        const options = ObjectUtils.removeUndefined({
            params,
            _layerOptionsFromSource: {
                title,
                minResolution: getResolutionFromScale(arcgisOptions.maxScale),
                maxResolution: getResolutionFromScale(arcgisOptions.minScale),
                metadata: {
                    extern: false,
                    abstract: arcgisOptions.description || serviceCapabilities.serviceDescription
                },
            },
            legendInfo,
            timeFilter,
            sourceFields: arcgisOptions.fields,
            queryTitle: arcgisOptions.displayField
        });
        options.attributions = attributions;
        return ObjectUtils.mergeDeep(options, baseOptions);
    }
    findDataSourceInCapabilities(layerArray, name) {
        if (Array.isArray(layerArray)) {
            let layer;
            layerArray.find((value) => {
                layer = this.findDataSourceInCapabilities(value, name);
                return layer !== undefined;
            }, this);
            return layer;
        }
        else if (layerArray.Layer) {
            return this.findDataSourceInCapabilities(layerArray.Layer, name);
        }
        else {
            if (layerArray.Name && layerArray.Name === name) {
                return layerArray;
            }
            return undefined;
        }
    }
    getTimeFilter(layer) {
        let dimension;
        if (layer.Dimension) {
            const timeFilter = {};
            dimension = layer.Dimension[0];
            if (dimension.values) {
                const minMaxDim = dimension.values.split('/');
                timeFilter.min = minMaxDim[0] !== undefined ? minMaxDim[0] : undefined;
                timeFilter.max = minMaxDim[1] !== undefined ? minMaxDim[1] : undefined;
                timeFilter.step = minMaxDim[2] !== undefined ? minMaxDim[2] : undefined;
            }
            if (dimension.default) {
                timeFilter.value = dimension.default;
            }
            return timeFilter;
        }
    }
    getStyle(Style) {
        const styleOptions = Style.map((style) => {
            return {
                name: style.Name,
                title: style.Title
            };
        })
            // Handle repeat the style "default" in output  (MapServer or OpenLayer)
            .filter((item, index, self) => self.findIndex((i) => i.name === item.name) ===
            index);
        const legendOptions = {
            stylesAvailable: styleOptions
        };
        return legendOptions;
    }
}
CapabilitiesService.ɵfac = function CapabilitiesService_Factory(t) { return new (t || CapabilitiesService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.MapService)); };
CapabilitiesService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CapabilitiesService, factory: CapabilitiesService.ɵfac, providedIn: 'root' });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], CapabilitiesService.prototype, "getCapabilities", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CapabilitiesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.MapService }]; }, { getCapabilities: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwYWJpbGl0aWVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kYXRhc291cmNlL3NoYXJlZC9jYXBhYmlsaXRpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsVUFBVSxFQUNYLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFjLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sYUFBYSxNQUFNLHdCQUF3QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUNMLFdBQVcsRUFDWCxtQkFBbUIsRUFDcEIsTUFBTSxnQ0FBZ0MsQ0FBQztBQWN4QyxPQUFPLEVBQ0wsY0FBYyxFQUNkLGVBQWUsRUFDaEIsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLEtBQUssTUFBTSxNQUFNLFNBQVMsQ0FBQzs7OztBQUVsQyxNQUFNLENBQU4sSUFBWSxnQkFNWDtBQU5ELFdBQVksZ0JBQWdCO0lBQzFCLCtCQUFXLENBQUE7SUFDWCxpQ0FB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QUM7MERBa0REO3VGQWhMVSxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CO3NGQWdJQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cFBhcmFtc1xufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmb3JrSm9pbiwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhY2hlYWJsZSB9IGZyb20gJ3RzLWNhY2hlYWJsZSc7XG5cbmltcG9ydCB7IFdNU0NhcGFiaWxpdGllcywgV01UU0NhcGFiaWxpdGllcywgRXNyaUpTT04gfSBmcm9tICdvbC9mb3JtYXQnO1xuaW1wb3J0IHsgb3B0aW9uc0Zyb21DYXBhYmlsaXRpZXMgfSBmcm9tICdvbC9zb3VyY2UvV01UUy5qcyc7XG5pbXBvcnQgb2xBdHRyaWJ1dGlvbiBmcm9tICdvbC9jb250cm9sL0F0dHJpYnV0aW9uJztcblxuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbWFwL3NoYXJlZC9tYXAuc2VydmljZSc7XG5pbXBvcnQgeyBnZXRSZXNvbHV0aW9uRnJvbVNjYWxlIH0gZnJvbSAnLi4vLi4vbWFwL3NoYXJlZC9tYXAudXRpbHMnO1xuaW1wb3J0IHsgRXNyaVN0eWxlR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbHMvZXNyaS1zdHlsZS1nZW5lcmF0b3InO1xuaW1wb3J0IHtcbiAgUXVlcnlGb3JtYXQsXG4gIFF1ZXJ5Rm9ybWF0TWltZVR5cGVcbn0gZnJvbSAnLi4vLi4vcXVlcnkvc2hhcmVkL3F1ZXJ5LmVudW1zJztcblxuaW1wb3J0IHtcbiAgV01UU0RhdGFTb3VyY2VPcHRpb25zLFxuICBXTVNEYXRhU291cmNlT3B0aW9ucyxcbiAgQ2FydG9EYXRhU291cmNlT3B0aW9ucyxcbiAgQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zLFxuICBUaWxlQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zLFxuICBBcmNHSVNSZXN0SW1hZ2VEYXRhU291cmNlT3B0aW9uc1xufSBmcm9tICcuL2RhdGFzb3VyY2VzJztcbmltcG9ydCB7XG4gIExlZ2VuZE9wdGlvbnMsXG4gIEl0ZW1TdHlsZU9wdGlvbnNcbn0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9sYXllci5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgVGltZUZpbHRlclR5cGUsXG4gIFRpbWVGaWx0ZXJTdHlsZVxufSBmcm9tICcuLi8uLi9maWx0ZXIvc2hhcmVkL3RpbWUtZmlsdGVyLmVudW0nO1xuaW1wb3J0ICogYXMgb2xwcm9qIGZyb20gJ29sL3Byb2onO1xuXG5leHBvcnQgZW51bSBUeXBlQ2FwYWJpbGl0aWVzIHtcbiAgd21zID0gJ3dtcycsXG4gIHdtdHMgPSAnd210cycsXG4gIGFyY2dpc3Jlc3QgPSAnZXNyaUpTT04nLFxuICBpbWFnZWFyY2dpc3Jlc3QgPSAnZXNyaUpTT04nLFxuICB0aWxlYXJjZ2lzcmVzdCA9ICdlc3JpSlNPTidcbn1cblxuZXhwb3J0IHR5cGUgVHlwZUNhcGFiaWxpdGllc1N0cmluZ3MgPSBrZXlvZiB0eXBlb2YgVHlwZUNhcGFiaWxpdGllcztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FwYWJpbGl0aWVzU2VydmljZSB7XG4gIHByaXZhdGUgcGFyc2VycyA9IHtcbiAgICB3bXM6IG5ldyBXTVNDYXBhYmlsaXRpZXMoKSxcbiAgICB3bXRzOiBuZXcgV01UU0NhcGFiaWxpdGllcygpLFxuICAgIGVzcmlKU09OOiBuZXcgRXNyaUpTT04oKVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlKSB7fVxuXG4gIGdldFdNU09wdGlvbnMoXG4gICAgYmFzZU9wdGlvbnM6IFdNU0RhdGFTb3VyY2VPcHRpb25zXG4gICk6IE9ic2VydmFibGU8V01TRGF0YVNvdXJjZU9wdGlvbnM+IHtcbiAgICBjb25zdCB1cmwgPSBiYXNlT3B0aW9ucy51cmw7XG4gICAgY29uc3QgdmVyc2lvbiA9IChiYXNlT3B0aW9ucy5wYXJhbXMgYXMgYW55KS5WRVJTSU9OO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FwYWJpbGl0aWVzKCd3bXMnLCB1cmwsIHZlcnNpb24pLnBpcGUoXG4gICAgICBtYXAoKGNhcGFiaWxpdGllczogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBjYXBhYmlsaXRpZXNcbiAgICAgICAgICA/IHRoaXMucGFyc2VXTVNPcHRpb25zKGJhc2VPcHRpb25zLCBjYXBhYmlsaXRpZXMpXG4gICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRXTVRTT3B0aW9ucyhcbiAgICBiYXNlT3B0aW9uczogV01UU0RhdGFTb3VyY2VPcHRpb25zXG4gICk6IE9ic2VydmFibGU8V01UU0RhdGFTb3VyY2VPcHRpb25zPiB7XG4gICAgY29uc3QgdXJsID0gYmFzZU9wdGlvbnMudXJsO1xuICAgIGNvbnN0IHZlcnNpb24gPSBiYXNlT3B0aW9ucy52ZXJzaW9uO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0Q2FwYWJpbGl0aWVzKCd3bXRzJywgdXJsLCB2ZXJzaW9uKS5waXBlKFxuICAgICAgbWFwKChjYXBhYmlsaXRpZXM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gY2FwYWJpbGl0aWVzXG4gICAgICAgICAgPyB0aGlzLnBhcnNlV01UU09wdGlvbnMoYmFzZU9wdGlvbnMsIGNhcGFiaWxpdGllcylcbiAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGdldENhcnRvT3B0aW9ucyhcbiAgICBiYXNlT3B0aW9uczogQ2FydG9EYXRhU291cmNlT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPENhcnRvRGF0YVNvdXJjZU9wdGlvbnM+IHtcbiAgICBjb25zdCBiYXNlVXJsID1cbiAgICAgICdodHRwczovLycgK1xuICAgICAgYmFzZU9wdGlvbnMuYWNjb3VudCArXG4gICAgICAnLmNhcnRvLmNvbS9hcGkvdjIvdml6LycgK1xuICAgICAgYmFzZU9wdGlvbnMubWFwSWQgK1xuICAgICAgJy92aXouanNvbic7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuanNvbnAoYmFzZVVybCwgJ2NhbGxiYWNrJylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGNhcnRvT3B0aW9uczogYW55KSA9PlxuICAgICAgICAgIHRoaXMucGFyc2VDYXJ0b09wdGlvbnMoYmFzZU9wdGlvbnMsIGNhcnRvT3B0aW9ucylcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldEFyY2dpc09wdGlvbnMoXG4gICAgYmFzZU9wdGlvbnM6IEFyY0dJU1Jlc3REYXRhU291cmNlT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPEFyY0dJU1Jlc3REYXRhU291cmNlT3B0aW9ucz4ge1xuICAgIGNvbnN0IGJhc2VVcmwgPSBiYXNlT3B0aW9ucy51cmwgKyAnLycgKyBiYXNlT3B0aW9ucy5sYXllciArICc/Zj1qc29uJztcbiAgICBjb25zdCBtb2RpZmllZFVybCA9IGJhc2VPcHRpb25zLnVybC5yZXBsYWNlKCdGZWF0dXJlU2VydmVyJywgJ01hcFNlcnZlcicpO1xuICAgIGNvbnN0IGxlZ2VuZFVybCA9IG1vZGlmaWVkVXJsICsgJy9sZWdlbmQ/Zj1qc29uJztcbiAgICBjb25zdCBzZXJ2aWNlQ2FwYWJpbGl0aWVzID0gdGhpcy5nZXRDYXBhYmlsaXRpZXMoJ2FyY2dpc3Jlc3QnLCBiYXNlT3B0aW9ucy51cmwpO1xuICAgIGNvbnN0IGFyY2dpc09wdGlvbnMgPSB0aGlzLmh0dHAuZ2V0KGJhc2VVcmwpO1xuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuaHR0cC5nZXQobGVnZW5kVXJsKS5waXBlKFxuICAgICAgbWFwKChyZXM6IGFueSkgPT4gcmVzKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gbGVnZW5kIGFzc29jaWF0ZWQgd2l0aCB0aGlzIEZlYXR1cmUgU2VydmljZScpO1xuICAgICAgICByZXR1cm4gb2YoZXJyKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gZm9ya0pvaW4oW2FyY2dpc09wdGlvbnMsIGxlZ2VuZCwgc2VydmljZUNhcGFiaWxpdGllc10pLnBpcGUoXG4gICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJjZ2lzT3B0aW9ucyhiYXNlT3B0aW9ucywgcmVzWzBdLCByZXNbMV0sIHJlc1syXSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRJbWFnZUFyY2dpc09wdGlvbnMoXG4gICAgYmFzZU9wdGlvbnM6IEFyY0dJU1Jlc3RJbWFnZURhdGFTb3VyY2VPcHRpb25zIHwgVGlsZUFyY0dJU1Jlc3REYXRhU291cmNlT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPEFyY0dJU1Jlc3RJbWFnZURhdGFTb3VyY2VPcHRpb25zIHwgVGlsZUFyY0dJU1Jlc3REYXRhU291cmNlT3B0aW9ucz4ge1xuICAgIGNvbnN0IGJhc2VVcmwgPSBiYXNlT3B0aW9ucy51cmwgKyAnLycgKyBiYXNlT3B0aW9ucy5sYXllciArICc/Zj1qc29uJztcbiAgICBjb25zdCBtb2RpZmllZFVybCA9IGJhc2VPcHRpb25zLnVybC5yZXBsYWNlKCdGZWF0dXJlU2VydmVyJywgJ01hcFNlcnZlcicpO1xuICAgIGNvbnN0IGxlZ2VuZFVybCA9IG1vZGlmaWVkVXJsICsgJy9sZWdlbmQ/Zj1qc29uJztcbiAgICBjb25zdCBzZXJ2aWNlQ2FwYWJpbGl0aWVzID0gdGhpcy5nZXRDYXBhYmlsaXRpZXMoJ2ltYWdlYXJjZ2lzcmVzdCcsIGJhc2VPcHRpb25zLnVybCk7XG4gICAgY29uc3QgYXJjZ2lzT3B0aW9ucyA9IHRoaXMuaHR0cC5nZXQoYmFzZVVybCk7XG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5odHRwLmdldChsZWdlbmRVcmwpLnBpcGUoXG4gICAgICBtYXAoKHJlczogYW55KSA9PiByZXMpLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBsZWdlbmQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgSW1hZ2UgU2VydmljZScpO1xuICAgICAgICByZXR1cm4gb2YoZXJyKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gZm9ya0pvaW4oW2FyY2dpc09wdGlvbnMsIGxlZ2VuZCwgc2VydmljZUNhcGFiaWxpdGllc10pLnBpcGUoXG4gICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlVGlsZU9ySW1hZ2VBcmNnaXNPcHRpb25zKGJhc2VPcHRpb25zLCByZXNbMF0sIHJlc1sxXSwgcmVzWzJdKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFRpbGVBcmNnaXNPcHRpb25zKFxuICAgIGJhc2VPcHRpb25zOiBUaWxlQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zXG4gICk6IE9ic2VydmFibGU8QXJjR0lTUmVzdEltYWdlRGF0YVNvdXJjZU9wdGlvbnMgfCBUaWxlQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zPiB7XG4gICAgY29uc3QgYmFzZVVybCA9IGJhc2VPcHRpb25zLnVybCArICcvJyArIGJhc2VPcHRpb25zLmxheWVyICsgJz9mPWpzb24nO1xuICAgIGNvbnN0IGxlZ2VuZFVybCA9IGJhc2VPcHRpb25zLnVybCArICcvbGVnZW5kP2Y9anNvbic7XG4gICAgY29uc3Qgc2VydmljZUNhcGFiaWxpdGllcyA9IHRoaXMuZ2V0Q2FwYWJpbGl0aWVzKCd0aWxlYXJjZ2lzcmVzdCcsIGJhc2VPcHRpb25zLnVybCk7XG4gICAgY29uc3QgYXJjZ2lzT3B0aW9ucyA9IHRoaXMuaHR0cC5nZXQoYmFzZVVybCk7XG4gICAgY29uc3QgbGVnZW5kSW5mbyA9IHRoaXMuaHR0cC5nZXQobGVnZW5kVXJsKS5waXBlKFxuICAgICAgbWFwKChyZXM6IGFueSkgPT4gcmVzKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gbGVnZW5kIGFzc29jaWF0ZWQgd2l0aCB0aGlzIFRpbGUgU2VydmljZScpO1xuICAgICAgICByZXR1cm4gb2YoZXJyKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gZm9ya0pvaW4oW2FyY2dpc09wdGlvbnMsIGxlZ2VuZEluZm8sIHNlcnZpY2VDYXBhYmlsaXRpZXNdKS5waXBlKFxuICAgICAgbWFwKChyZXM6IGFueSkgPT5cbiAgICAgICAgdGhpcy5wYXJzZVRpbGVPckltYWdlQXJjZ2lzT3B0aW9ucyhiYXNlT3B0aW9ucywgcmVzWzBdLCByZXNbMV0sIHJlc1syXSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgQENhY2hlYWJsZSh7XG4gICAgbWF4Q2FjaGVDb3VudDogMjBcbiAgfSlcbiAgZ2V0Q2FwYWJpbGl0aWVzKFxuICAgIHNlcnZpY2U6IFR5cGVDYXBhYmlsaXRpZXNTdHJpbmdzLFxuICAgIGJhc2VVcmw6IHN0cmluZyxcbiAgICB2ZXJzaW9uPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbU9iamVjdDoge1xuICAgICAgICByZXF1ZXN0OiAnR2V0Q2FwYWJpbGl0aWVzJyxcbiAgICAgICAgc2VydmljZTogc2VydmljZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uIHx8ICcxLjMuMCcsXG4gICAgICAgIF9pOiAndHJ1ZSdcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCByZXF1ZXN0O1xuICAgIGlmIChUeXBlQ2FwYWJpbGl0aWVzW3NlcnZpY2VdID09PSAnZXNyaUpTT04nKSB7XG4gICAgICByZXF1ZXN0ID0gdGhpcy5odHRwLmdldChiYXNlVXJsICsgJz9mPWpzb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdCA9IHRoaXMuaHR0cC5nZXQoYmFzZVVybCwge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgbWFwKChyZXMpID0+IHtcbiAgICAgICAgaWYgKFR5cGVDYXBhYmlsaXRpZXNbc2VydmljZV0gPT09ICdlc3JpSlNPTicpIHtcbiAgICAgICAgICByZXR1cm4gcmVzIGFzIG9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgU3RyaW5nKHJlcykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnc2VydmljZWV4Y2VwdGlvbicpICYmXG4gICAgICAgICAgU3RyaW5nKHJlcykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnYWNjZXNzIGRlbmllZCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZXJ2aWNlIGVycm9yIGdldENhcGFiaWxpdGllczogQWNjZXNzIGlzIGRlbmllZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlcnNbc2VydmljZV0ucmVhZChyZXMpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBlLmVycm9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGUuZXJyb3IuY2F1Z2h0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVdNU09wdGlvbnMoXG4gICAgYmFzZU9wdGlvbnM6IFdNU0RhdGFTb3VyY2VPcHRpb25zLFxuICAgIGNhcGFiaWxpdGllczogYW55XG4gICk6IFdNU0RhdGFTb3VyY2VPcHRpb25zIHtcbiAgICBjb25zdCBsYXllcnMgPSAoYmFzZU9wdGlvbnMucGFyYW1zIGFzIGFueSkuTEFZRVJTO1xuICAgIGNvbnN0IGxheWVyID0gdGhpcy5maW5kRGF0YVNvdXJjZUluQ2FwYWJpbGl0aWVzKFxuICAgICAgY2FwYWJpbGl0aWVzLkNhcGFiaWxpdHkuTGF5ZXIsXG4gICAgICBsYXllcnNcbiAgICApO1xuXG4gICAgaWYgKCFsYXllcikge1xuICAgICAgdGhyb3cge1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG1lc3NhZ2U6ICdMYXllciBub3QgZm91bmQnXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IG1ldGFkYXRhID0gbGF5ZXIuRGF0YVVSTCA/IGxheWVyLkRhdGFVUkxbMF0gOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgYWJzdHJhY3QgPSBsYXllci5BYnN0cmFjdCA/IGxheWVyLkFic3RyYWN0IDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGtleXdvcmRMaXN0ID0gbGF5ZXIuS2V5d29yZExpc3QgPyBsYXllci5LZXl3b3JkTGlzdCA6IHVuZGVmaW5lZDtcbiAgICBsZXQgcXVlcnlhYmxlID0gbGF5ZXIucXVlcnlhYmxlO1xuICAgIGNvbnN0IHRpbWVGaWx0ZXIgPSB0aGlzLmdldFRpbWVGaWx0ZXIobGF5ZXIpO1xuICAgIGNvbnN0IHRpbWVGaWx0ZXJhYmxlID0gdGltZUZpbHRlciAmJiBPYmplY3Qua2V5cyh0aW1lRmlsdGVyKS5sZW5ndGggPiAwO1xuICAgIGNvbnN0IGxlZ2VuZE9wdGlvbnMgPSBsYXllci5TdHlsZSA/IHRoaXMuZ2V0U3R5bGUobGF5ZXIuU3R5bGUpIDogdW5kZWZpbmVkO1xuICAgIGxldCBpc0V4dGVudEluR2VvZ3JhcGhpYyA9IHRydWU7XG4gICAgaWYgKGxheWVyLkVYX0dlb2dyYXBoaWNCb3VuZGluZ0JveCkge1xuICAgICAgbGF5ZXIuRVhfR2VvZ3JhcGhpY0JvdW5kaW5nQm94LmZvckVhY2goKGNvb3JkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPCAyICYmIChjb29yZCA+IDE4MCB8fCBjb29yZCA8IC0xODApKSB7XG4gICAgICAgICAgaXNFeHRlbnRJbkdlb2dyYXBoaWMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPj0gMiAmJiAoY29vcmQgPiA5MCB8fCBjb29yZCA8IC05MCkpIHtcbiAgICAgICAgICBpc0V4dGVudEluR2VvZ3JhcGhpYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNFeHRlbnRJbkdlb2dyYXBoaWMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbnQgPSBpc0V4dGVudEluR2VvZ3JhcGhpYyA/XG4gICAgICAgIG9scHJvai50cmFuc2Zvcm1FeHRlbnQobGF5ZXIuRVhfR2VvZ3JhcGhpY0JvdW5kaW5nQm94LCAnRVBTRzo0MzI2JywgdGhpcy5tYXBTZXJ2aWNlLmdldE1hcCgpLnByb2plY3Rpb24pIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgbGV0IHF1ZXJ5Rm9ybWF0OiBRdWVyeUZvcm1hdDtcbiAgICBjb25zdCBxdWVyeUZvcm1hdE1pbWVUeXBlUHJpb3JpdHkgPSBbXG4gICAgICBRdWVyeUZvcm1hdE1pbWVUeXBlLkdFT0pTT04sXG4gICAgICBRdWVyeUZvcm1hdE1pbWVUeXBlLkdFT0pTT04yLFxuICAgICAgUXVlcnlGb3JtYXRNaW1lVHlwZS5HTUwzLFxuICAgICAgUXVlcnlGb3JtYXRNaW1lVHlwZS5HTUwyLFxuICAgICAgUXVlcnlGb3JtYXRNaW1lVHlwZS5KU09OLFxuICAgICAgUXVlcnlGb3JtYXRNaW1lVHlwZS5IVE1MXG4gICAgXTtcblxuICAgIGZvciAoY29uc3QgbWltZVR5cGUgb2YgcXVlcnlGb3JtYXRNaW1lVHlwZVByaW9yaXR5KSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNhcGFiaWxpdGllcy5DYXBhYmlsaXR5LlJlcXVlc3QuR2V0RmVhdHVyZUluZm8uRm9ybWF0LmluZGV4T2YoXG4gICAgICAgICAgbWltZVR5cGVcbiAgICAgICAgKSAhPT0gLTFcbiAgICAgICkge1xuICAgICAgICBjb25zdCBrZXlFbnVtID0gT2JqZWN0LmtleXMoUXVlcnlGb3JtYXRNaW1lVHlwZSkuZmluZChcbiAgICAgICAgICAoa2V5KSA9PiBRdWVyeUZvcm1hdE1pbWVUeXBlW2tleV0gPT09IG1pbWVUeXBlXG4gICAgICAgICk7XG4gICAgICAgIHF1ZXJ5Rm9ybWF0ID0gUXVlcnlGb3JtYXRba2V5RW51bV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXF1ZXJ5Rm9ybWF0KSB7XG4gICAgICBxdWVyeWFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zOiBXTVNEYXRhU291cmNlT3B0aW9ucyA9IE9iamVjdFV0aWxzLnJlbW92ZVVuZGVmaW5lZCh7XG4gICAgICBfbGF5ZXJPcHRpb25zRnJvbVNvdXJjZToge1xuICAgICAgICB0aXRsZTogbGF5ZXIuVGl0bGUsXG4gICAgICAgIG1heFJlc29sdXRpb246IGdldFJlc29sdXRpb25Gcm9tU2NhbGUobGF5ZXIuTWF4U2NhbGVEZW5vbWluYXRvciksXG4gICAgICAgIG1pblJlc29sdXRpb246IGdldFJlc29sdXRpb25Gcm9tU2NhbGUobGF5ZXIuTWluU2NhbGVEZW5vbWluYXRvciksXG4gICAgICAgIGV4dGVudCxcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICB1cmw6IG1ldGFkYXRhID8gbWV0YWRhdGEuT25saW5lUmVzb3VyY2UgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZXh0ZXJuOiBtZXRhZGF0YSA/IHRydWUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgYWJzdHJhY3QsXG4gICAgICAgICAga2V5d29yZExpc3RcbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kT3B0aW9uc1xuICAgICAgfSxcbiAgICAgIHF1ZXJ5YWJsZSxcbiAgICAgIHF1ZXJ5Rm9ybWF0LFxuICAgICAgdGltZUZpbHRlcjogdGltZUZpbHRlcmFibGUgPyB0aW1lRmlsdGVyIDogdW5kZWZpbmVkLFxuICAgICAgdGltZUZpbHRlcmFibGU6IHRpbWVGaWx0ZXJhYmxlID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIG1pbkRhdGU6IHRpbWVGaWx0ZXJhYmxlID8gdGltZUZpbHRlci5taW4gOiB1bmRlZmluZWQsXG4gICAgICBtYXhEYXRlOiB0aW1lRmlsdGVyYWJsZSA/IHRpbWVGaWx0ZXIubWF4IDogdW5kZWZpbmVkLFxuICAgICAgc3RlcERhdGU6IHRpbWVGaWx0ZXJhYmxlID8gdGltZUZpbHRlci5zdGVwIDogdW5kZWZpbmVkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0VXRpbHMubWVyZ2VEZWVwKG9wdGlvbnMsIGJhc2VPcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VXTVRTT3B0aW9ucyhcbiAgICBiYXNlT3B0aW9uczogV01UU0RhdGFTb3VyY2VPcHRpb25zLFxuICAgIGNhcGFiaWxpdGllczogYW55XG4gICk6IFdNVFNEYXRhU291cmNlT3B0aW9ucyB7XG4gICAgLy8gUHV0IFRpdGxlIHNvdXJjZSBpbiBfbGF5ZXJPcHRpb25zRnJvbVNvdXJjZS4gKEZvciBzb3VyY2UgJiBjYXRhbG9nIGluIF9sYXllck9wdGlvbnNGcm9tU291cmNlLCBpZiBub3QgYWxyZWFkeSBvbiBjb25maWcpXG4gICAgY29uc3QgbGF5ZXIgPSBjYXBhYmlsaXRpZXMuQ29udGVudHMuTGF5ZXIuZmluZChcbiAgICAgIChlbCkgPT4gZWwuSWRlbnRpZmllciA9PT0gYmFzZU9wdGlvbnMubGF5ZXJcbiAgICApO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IG9wdGlvbnNGcm9tQ2FwYWJpbGl0aWVzKGNhcGFiaWxpdGllcywgYmFzZU9wdGlvbnMpO1xuXG4gICAgY29uc3Qgb3VwdXRPcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCBiYXNlT3B0aW9ucyk7XG4gICAgY29uc3Qgc291cmNlT3B0aW9ucyA9IE9iamVjdFV0aWxzLnJlbW92ZVVuZGVmaW5lZCh7XG4gICAgICBfbGF5ZXJPcHRpb25zRnJvbVNvdXJjZToge1xuICAgICAgICB0aXRsZTogbGF5ZXIuVGl0bGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBPYmplY3RVdGlscy5tZXJnZURlZXAoc291cmNlT3B0aW9ucywgb3VwdXRPcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VDYXJ0b09wdGlvbnMoXG4gICAgYmFzZU9wdGlvbnM6IENhcnRvRGF0YVNvdXJjZU9wdGlvbnMsXG4gICAgY2FydG9PcHRpb25zOiBhbnlcbiAgKTogQ2FydG9EYXRhU291cmNlT3B0aW9ucyB7XG4gICAgY29uc3QgbGF5ZXJzID0gW107XG4gICAgY29uc3QgcGFyYW1zID0gY2FydG9PcHRpb25zLmxheWVyc1sxXS5vcHRpb25zLmxheWVyX2RlZmluaXRpb247XG4gICAgcGFyYW1zLmxheWVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsYXllcnMucHVzaCh7XG4gICAgICAgIHR5cGU6IGVsZW1lbnQudHlwZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBvcHRpb25zOiBlbGVtZW50Lm9wdGlvbnMsXG4gICAgICAgIGxlZ2VuZDogZWxlbWVudC5sZWdlbmRcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3RVdGlscy5yZW1vdmVVbmRlZmluZWQoe1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHZlcnNpb246IHBhcmFtcy52ZXJzaW9uLFxuICAgICAgICBsYXllcnNcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gT2JqZWN0VXRpbHMubWVyZ2VEZWVwKG9wdGlvbnMsIGJhc2VPcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VBcmNnaXNPcHRpb25zKFxuICAgIGJhc2VPcHRpb25zOiBBcmNHSVNSZXN0RGF0YVNvdXJjZU9wdGlvbnMsXG4gICAgYXJjZ2lzT3B0aW9uczogYW55LFxuICAgIGxlZ2VuZDogYW55LFxuICAgIHNlcnZpY2VDYXBhYmlsaXRpZXM6IGFueSxcbiAgKTogQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zIHtcbiAgICBjb25zdCB0aXRsZSA9IGFyY2dpc09wdGlvbnMubmFtZTtcbiAgICBsZXQgbGVnZW5kSW5mbzogYW55O1xuXG4gICAgaWYgKGxlZ2VuZC5sYXllcnMpIHtcbiAgICAgIGxlZ2VuZEluZm8gPSBsZWdlbmQubGF5ZXJzLmZpbmQoeCA9PiB4LmxheWVyTmFtZSA9PT0gdGl0bGUpO1xuICAgIH0gZWxzZSBpZiAoYXJjZ2lzT3B0aW9ucy5kcmF3aW5nSW5mbz8ucmVuZGVyZXIpIHtcbiAgICAgIGxlZ2VuZEluZm8gPSBhcmNnaXNPcHRpb25zLmRyYXdpbmdJbmZvLnJlbmRlcmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWdlbmRJbmZvID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGxldCBzdHlsZTtcbiAgICBpZiAoYXJjZ2lzT3B0aW9ucy5kcmF3aW5nSW5mbykge1xuICAgICAgY29uc3Qgc3R5bGVHZW5lcmF0b3IgPSBuZXcgRXNyaVN0eWxlR2VuZXJhdG9yKCk7XG4gICAgICBjb25zdCB1bml0cyA9IGFyY2dpc09wdGlvbnMudW5pdHMgPT09ICdlc3JpTWV0ZXJzJyA/ICdtJyA6ICdkZWdyZWVzJztcbiAgICAgIHN0eWxlID0gc3R5bGVHZW5lcmF0b3IuZ2VuZXJhdGVTdHlsZShhcmNnaXNPcHRpb25zLCB1bml0cyk7XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0aW9ucyA9IG5ldyBvbEF0dHJpYnV0aW9uKHtcbiAgICAgIHRhcmdldDogYXJjZ2lzT3B0aW9ucy5jb3B5cmlnaHRUZXh0XG4gICAgfSk7XG4gICAgbGV0IHRpbWVFeHRlbnQ7XG4gICAgbGV0IHRpbWVGaWx0ZXI7XG4gICAgaWYgKGFyY2dpc09wdGlvbnMudGltZUluZm8pIHtcbiAgICAgIGNvbnN0IHRpbWUgPSBhcmNnaXNPcHRpb25zLnRpbWVJbmZvLnRpbWVFeHRlbnQ7XG4gICAgICB0aW1lRXh0ZW50ID0gdGltZVswXSArICcsJyArIHRpbWVbMV07XG4gICAgICBjb25zdCBtaW4gPSBuZXcgRGF0ZSgpO1xuICAgICAgbWluLnNldFRpbWUodGltZVswXSk7XG4gICAgICBjb25zdCBtYXggPSBuZXcgRGF0ZSgpO1xuICAgICAgbWF4LnNldFRpbWUodGltZVsxXSk7XG4gICAgICB0aW1lRmlsdGVyID0ge1xuICAgICAgICBtaW46IG1pbi50b1VUQ1N0cmluZygpLFxuICAgICAgICBtYXg6IG1heC50b1VUQ1N0cmluZygpLFxuICAgICAgICByYW5nZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogVGltZUZpbHRlclR5cGUuREFURVRJTUUsXG4gICAgICAgIHN0eWxlOiBUaW1lRmlsdGVyU3R5bGUuQ0FMRU5EQVJcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIExBWUVSUzogYmFzZU9wdGlvbnMubGF5ZXIgPyAnc2hvdzonICsgYmFzZU9wdGlvbnMubGF5ZXIgOiB1bmRlZmluZWQsXG4gICAgICAgIHRpbWU6IHRpbWVFeHRlbnRcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3RVdGlscy5yZW1vdmVVbmRlZmluZWQoe1xuICAgICAgcGFyYW1zLFxuICAgICAgX2xheWVyT3B0aW9uc0Zyb21Tb3VyY2U6IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIG1pblJlc29sdXRpb246IGdldFJlc29sdXRpb25Gcm9tU2NhbGUoYXJjZ2lzT3B0aW9ucy5tYXhTY2FsZSksXG4gICAgICAgIG1heFJlc29sdXRpb246IGdldFJlc29sdXRpb25Gcm9tU2NhbGUoYXJjZ2lzT3B0aW9ucy5taW5TY2FsZSksXG4gICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgZXh0ZXJuOiBmYWxzZSxcbiAgICAgICAgICBhYnN0cmFjdDogYXJjZ2lzT3B0aW9ucy5kZXNjcmlwdGlvbiB8fCBzZXJ2aWNlQ2FwYWJpbGl0aWVzLnNlcnZpY2VEZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxlZ2VuZEluZm8sXG4gICAgICB0aW1lRmlsdGVyLFxuICAgICAgc291cmNlRmllbGRzOiBhcmNnaXNPcHRpb25zLmZpZWxkcyxcbiAgICAgIHF1ZXJ5VGl0bGU6IGFyY2dpc09wdGlvbnMuZGlzcGxheUZpZWxkXG4gICAgfSk7XG4gICAgb3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBhdHRyaWJ1dGlvbnM7XG4gICAgcmV0dXJuIE9iamVjdFV0aWxzLm1lcmdlRGVlcChvcHRpb25zLCBiYXNlT3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlVGlsZU9ySW1hZ2VBcmNnaXNPcHRpb25zKFxuICAgIGJhc2VPcHRpb25zOiBUaWxlQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zIHwgQXJjR0lTUmVzdEltYWdlRGF0YVNvdXJjZU9wdGlvbnMsXG4gICAgYXJjZ2lzT3B0aW9uczogYW55LFxuICAgIGxlZ2VuZDogYW55LFxuICAgIHNlcnZpY2VDYXBhYmlsaXRpZXM6IGFueVxuICApOiBUaWxlQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zIHwgQXJjR0lTUmVzdEltYWdlRGF0YVNvdXJjZU9wdGlvbnMge1xuICAgIGNvbnN0IHRpdGxlID0gYXJjZ2lzT3B0aW9ucy5uYW1lO1xuICAgIGNvbnN0IGxlZ2VuZEluZm8gPSBsZWdlbmQubGF5ZXJzID8gbGVnZW5kLmxheWVycy5maW5kKHggPT4geC5sYXllck5hbWUgPT09IHRpdGxlKSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBhdHRyaWJ1dGlvbnMgPSBuZXcgb2xBdHRyaWJ1dGlvbih7XG4gICAgICB0YXJnZXQ6IGFyY2dpc09wdGlvbnMuY29weXJpZ2h0VGV4dFxuICAgIH0pO1xuICAgIGxldCB0aW1lRXh0ZW50O1xuICAgIGxldCB0aW1lRmlsdGVyO1xuICAgIGlmIChhcmNnaXNPcHRpb25zLnRpbWVJbmZvKSB7XG4gICAgICBjb25zdCB0aW1lID0gYXJjZ2lzT3B0aW9ucy50aW1lSW5mby50aW1lRXh0ZW50O1xuICAgICAgdGltZUV4dGVudCA9IHRpbWVbMF0gKyAnLCcgKyB0aW1lWzFdO1xuICAgICAgY29uc3QgbWluID0gbmV3IERhdGUoKTtcbiAgICAgIG1pbi5zZXRUaW1lKHRpbWVbMF0pO1xuICAgICAgY29uc3QgbWF4ID0gbmV3IERhdGUoKTtcbiAgICAgIG1heC5zZXRUaW1lKHRpbWVbMV0pO1xuICAgICAgdGltZUZpbHRlciA9IHtcbiAgICAgICAgbWluOiBtaW4udG9VVENTdHJpbmcoKSxcbiAgICAgICAgbWF4OiBtYXgudG9VVENTdHJpbmcoKSxcbiAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgIHR5cGU6IFRpbWVGaWx0ZXJUeXBlLkRBVEVUSU1FLFxuICAgICAgICBzdHlsZTogVGltZUZpbHRlclN0eWxlLkNBTEVOREFSXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIExBWUVSUzogYmFzZU9wdGlvbnMubGF5ZXIgPyAnc2hvdzonICsgYmFzZU9wdGlvbnMubGF5ZXIgOiB1bmRlZmluZWQsXG4gICAgICAgIHRpbWU6IHRpbWVFeHRlbnRcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3RVdGlscy5yZW1vdmVVbmRlZmluZWQoe1xuICAgICAgcGFyYW1zLFxuICAgICAgX2xheWVyT3B0aW9uc0Zyb21Tb3VyY2U6IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIG1pblJlc29sdXRpb246IGdldFJlc29sdXRpb25Gcm9tU2NhbGUoYXJjZ2lzT3B0aW9ucy5tYXhTY2FsZSksXG4gICAgICAgIG1heFJlc29sdXRpb246IGdldFJlc29sdXRpb25Gcm9tU2NhbGUoYXJjZ2lzT3B0aW9ucy5taW5TY2FsZSksXG4gICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgZXh0ZXJuOiBmYWxzZSxcbiAgICAgICAgICBhYnN0cmFjdDogYXJjZ2lzT3B0aW9ucy5kZXNjcmlwdGlvbiB8fCBzZXJ2aWNlQ2FwYWJpbGl0aWVzLnNlcnZpY2VEZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxlZ2VuZEluZm8sXG4gICAgICB0aW1lRmlsdGVyLFxuICAgICAgc291cmNlRmllbGRzOiBhcmNnaXNPcHRpb25zLmZpZWxkcyxcbiAgICAgIHF1ZXJ5VGl0bGU6IGFyY2dpc09wdGlvbnMuZGlzcGxheUZpZWxkXG4gICAgfSk7XG4gICAgb3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBhdHRyaWJ1dGlvbnM7XG4gICAgcmV0dXJuIE9iamVjdFV0aWxzLm1lcmdlRGVlcChvcHRpb25zLCBiYXNlT3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIGZpbmREYXRhU291cmNlSW5DYXBhYmlsaXRpZXMobGF5ZXJBcnJheSwgbmFtZSk6IGFueSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGF5ZXJBcnJheSkpIHtcbiAgICAgIGxldCBsYXllcjtcbiAgICAgIGxheWVyQXJyYXkuZmluZCgodmFsdWUpID0+IHtcbiAgICAgICAgbGF5ZXIgPSB0aGlzLmZpbmREYXRhU291cmNlSW5DYXBhYmlsaXRpZXModmFsdWUsIG5hbWUpO1xuICAgICAgICByZXR1cm4gbGF5ZXIgIT09IHVuZGVmaW5lZDtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICByZXR1cm4gbGF5ZXI7XG4gICAgfSBlbHNlIGlmIChsYXllckFycmF5LkxheWVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kRGF0YVNvdXJjZUluQ2FwYWJpbGl0aWVzKGxheWVyQXJyYXkuTGF5ZXIsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobGF5ZXJBcnJheS5OYW1lICYmIGxheWVyQXJyYXkuTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gbGF5ZXJBcnJheTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGltZUZpbHRlcihsYXllcikge1xuICAgIGxldCBkaW1lbnNpb247XG5cbiAgICBpZiAobGF5ZXIuRGltZW5zaW9uKSB7XG4gICAgICBjb25zdCB0aW1lRmlsdGVyOiBhbnkgPSB7fTtcbiAgICAgIGRpbWVuc2lvbiA9IGxheWVyLkRpbWVuc2lvblswXTtcblxuICAgICAgaWYgKGRpbWVuc2lvbi52YWx1ZXMpIHtcbiAgICAgICAgY29uc3QgbWluTWF4RGltID0gZGltZW5zaW9uLnZhbHVlcy5zcGxpdCgnLycpO1xuICAgICAgICB0aW1lRmlsdGVyLm1pbiA9IG1pbk1heERpbVswXSAhPT0gdW5kZWZpbmVkID8gbWluTWF4RGltWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICB0aW1lRmlsdGVyLm1heCA9IG1pbk1heERpbVsxXSAhPT0gdW5kZWZpbmVkID8gbWluTWF4RGltWzFdIDogdW5kZWZpbmVkO1xuICAgICAgICB0aW1lRmlsdGVyLnN0ZXAgPSBtaW5NYXhEaW1bMl0gIT09IHVuZGVmaW5lZCA/IG1pbk1heERpbVsyXSA6IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpbWVuc2lvbi5kZWZhdWx0KSB7XG4gICAgICAgIHRpbWVGaWx0ZXIudmFsdWUgPSBkaW1lbnNpb24uZGVmYXVsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aW1lRmlsdGVyO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0eWxlKFN0eWxlKTogTGVnZW5kT3B0aW9ucyB7XG4gICAgY29uc3Qgc3R5bGVPcHRpb25zOiBJdGVtU3R5bGVPcHRpb25zW10gPSBTdHlsZS5tYXAoKHN0eWxlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBzdHlsZS5OYW1lLFxuICAgICAgICB0aXRsZTogc3R5bGUuVGl0bGVcbiAgICAgIH07XG4gICAgfSlcbiAgICAgIC8vIEhhbmRsZSByZXBlYXQgdGhlIHN0eWxlIFwiZGVmYXVsdFwiIGluIG91dHB1dCAgKE1hcFNlcnZlciBvciBPcGVuTGF5ZXIpXG4gICAgICAuZmlsdGVyKFxuICAgICAgICAoaXRlbSwgaW5kZXgsIHNlbGYpID0+XG4gICAgICAgICAgc2VsZi5maW5kSW5kZXgoKGk6IEl0ZW1TdHlsZU9wdGlvbnMpID0+IGkubmFtZSA9PT0gaXRlbS5uYW1lKSA9PT1cbiAgICAgICAgICBpbmRleFxuICAgICAgKTtcblxuICAgIGNvbnN0IGxlZ2VuZE9wdGlvbnM6IExlZ2VuZE9wdGlvbnMgPSB7XG4gICAgICBzdHlsZXNBdmFpbGFibGU6IHN0eWxlT3B0aW9uc1xuICAgIH0gYXMgTGVnZW5kT3B0aW9ucztcblxuICAgIHJldHVybiBsZWdlbmRPcHRpb25zO1xuICB9XG59XG4iXX0=