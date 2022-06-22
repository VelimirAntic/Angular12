import { __decorate } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ObjectUtils } from '@igo2/utils';
import { FEATURE } from '../../../feature';
import { SearchSource } from './source';
import * as olformat from 'ol/format';
import { computeTermSimilarity } from '../search.utils';
import { Cacheable } from 'ts-cacheable';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/core";
/**
 * StoredQueries search source
 */
export class StoredQueriesSearchSource extends SearchSource {
    constructor(http, languageService, storageService, options) {
        super(options, storageService);
        this.http = http;
        this.languageService = languageService;
        this.storedQueriesOptions = options;
        if (this.storedQueriesOptions && !this.storedQueriesOptions.available) {
            return;
        }
        const defaultStoredqueryId = 'rtss';
        const defaultFieldSplitter = [
            { name: 'rtss', defaultValue: '-99' },
            { name: 'chainage', defaultValue: '0', splitPrefix: '\\+' }
        ];
        const defaultOutputformat = 'text/xml; subtype=gml/3.1.1';
        const defaultSrsname = 'EPSG:4326';
        const defaultResultTitle = 'title';
        if (!this.storedQueriesOptions) {
            console.log(' No configuration for this search source (storedqueries). You will use the default values');
            this.storedQueriesOptions = {
                storedquery_id: defaultStoredqueryId,
                fields: defaultFieldSplitter,
                outputformat: defaultOutputformat,
                srsname: defaultSrsname,
                resultTitle: defaultResultTitle
            };
            this.resultTitle = defaultResultTitle;
            console.log('Default values', this.storedQueriesOptions);
        }
        if (!this.storedQueriesOptions.storedquery_id) {
            const err = 'Stored Queries :You have to set "storedquery_id" into StoredQueries options. ex: storedquery_id: "nameofstoredquerie"';
            throw new Error(err);
        }
        if (!this.storedQueriesOptions.fields) {
            throw new Error('Stored Queries :You have to set "fields" into options. ex: fields: {"name": "rtss", "defaultValue": "-99"}');
        }
        this.storedQueriesOptions.outputformat =
            this.storedQueriesOptions.outputformat || 'text/xml; subtype=gml/3.1.1';
        this.storedQueriesOptions.srsname =
            this.storedQueriesOptions.srsname || 'EPSG:4326';
        const storedQueryId = this.storedQueriesOptions.storedquery_id.toLowerCase();
        if (storedQueryId.includes('getfeaturebyid') &&
            this.storedQueriesOptions.outputformat
                .toLowerCase()
                .includes('getfeaturebyid')) {
            let err = 'You must set a geojson format for your stored query. This is due to an openlayers issue)';
            err += ' (wfs 1.1.0 & gml 3.1.1 limitation)';
            throw new Error(err);
        }
        if (!(this.storedQueriesOptions.fields instanceof Array)) {
            this.storedQueriesOptions.fields = [this.storedQueriesOptions.fields];
        }
        this.multipleFieldsQuery =
            this.storedQueriesOptions.fields.length > 1 ? true : false;
        this.storedQueriesOptions.fields.forEach((field, index) => {
            if (this.multipleFieldsQuery && !field.splitPrefix && index !== 0) {
                throw new Error('Stored Queries :You must set a field spliter into your field definition (optional for the first one!)');
            }
            if (!field.defaultValue) {
                throw new Error('Stored Queries :You must set a field default value into your field definition');
            }
        });
        this.storedQueriesOptions.resultTitle =
            this.storedQueriesOptions.resultTitle || this.resultTitle;
    }
    getId() {
        return StoredQueriesSearchSource.id;
    }
    getType() {
        return StoredQueriesSearchSource.type;
    }
    getDefaultOptions() {
        return {
            title: 'Stored Queries',
            searchUrl: 'https://ws.mapserver.transports.gouv.qc.ca/swtq'
        };
    }
    // URL CALL EXAMPLES:
    //  GetFeatureById (mandatory storedquery for wfs server) (outputformat must be in geojson)
    /* eslint-disable max-len */
    //  https://ws.mapserver.transports.gouv.qc.ca/swtq?service=wfs&version=2.0.0&request=GetFeature&storedquery_id=urn:ogc:def:query:OGC-WFS::GetFeatureById&srsname=epsg:4326&outputformat=geojson&ID=a_num_route.132
    //  Custom StoredQuery
    /* eslint-disable max-len */
    //  https://ws.mapserver.transports.gouv.qc.ca/swtq?service=wfs&version=1.1.0&request=GetFeature&storedquery_id=rtss&srsname=epsg:4326&outputformat=text/xml;%20subtype=gml/3.1.1&rtss=0013801110000c&chainage=12
    /**
     * Search a location by name or keyword
     * @param term Location name or keyword
     * @returns Observable of <SearchResult<Feature>[]
     */
    search(term, options) {
        const storedqueriesParams = this.termSplitter(term, this.storedQueriesOptions.fields);
        const params = this.computeRequestParams(options || {}, storedqueriesParams);
        this.options.params = this.options.params ? this.options.params : {};
        this.options.params.page = options.page ? String(options.page) : '1';
        if (new RegExp('.*?gml.*?', 'i').test(this.storedQueriesOptions.outputformat)) {
            return this.http
                .get(this.searchUrl, { params, responseType: 'text' })
                .pipe(map(response => {
                let resultArray = this.extractResults(this.extractWFSData(response), term);
                resultArray.sort((a, b) => (a.meta.score > b.meta.score) ? 1 :
                    (a.meta.score === b.meta.score) ? ((a.meta.titleHtml < b.meta.titleHtml) ? 1 : -1) : -1);
                resultArray.reverse();
                if (resultArray.length > Number(this.options.params.limit)) {
                    const idxEnd = Number(this.options.params.limit) * Number(this.options.params.page);
                    const resultTotLenght = resultArray.length;
                    resultArray = resultArray.slice(0, idxEnd);
                    if (idxEnd < resultTotLenght) {
                        resultArray[resultArray.length - 1].meta.nextPage = true;
                    }
                    else {
                        resultArray[resultArray.length - 1].meta.nextPage = false;
                    }
                }
                return resultArray;
            }));
        }
        else {
            return this.http.get(this.searchUrl, { params }).pipe(map(response => {
                return this.extractResults(this.extractWFSData(response), term);
            }));
        }
    }
    getFormatFromOptions() {
        let olFormatCls;
        const outputFormat = this.storedQueriesOptions.outputformat;
        const patternGml3 = new RegExp('.*?gml.*?', 'i');
        const patternGeojson = new RegExp('.*?json.*?', 'i');
        if (patternGeojson.test(outputFormat)) {
            olFormatCls = olformat.GeoJSON;
        }
        if (patternGml3.test(outputFormat)) {
            olFormatCls = olformat.WFS;
        }
        return new olFormatCls();
    }
    extractWFSData(res) {
        const olFormat = this.getFormatFromOptions();
        const geojson = olformat.GeoJSON;
        const wfsfeatures = olFormat.readFeatures(res);
        const features = JSON.parse(new geojson().writeFeatures(wfsfeatures));
        return features;
    }
    termSplitter(term, fields) {
        const splittedTerm = {};
        let remainingTerm = term;
        let cnt = 0;
        // Used to build the default values
        fields.forEach(field => {
            splittedTerm[field.name] = field.defaultValue;
            const splitterRegex = new RegExp(field.splitPrefix + '(.+)', 'i');
            if (splitterRegex.test(remainingTerm)) {
                cnt = field.splitPrefix ? (cnt += 1) : cnt;
                remainingTerm = remainingTerm.split(splitterRegex)[1];
            }
        });
        if (cnt === 0) {
            splittedTerm[fields[0].name] = term;
            return splittedTerm;
        }
        remainingTerm = term;
        const localFields = [...fields].reverse();
        localFields.forEach(field => {
            const splitterRegex = new RegExp(field.splitPrefix || '' + '(.+)', 'i');
            if (remainingTerm || remainingTerm !== '') {
                const values = remainingTerm.split(splitterRegex);
                remainingTerm = values[0];
                if (values[1]) {
                    splittedTerm[field.name] = values[1].trim();
                }
            }
        });
        return splittedTerm;
    }
    computeRequestParams(options, queryParams) {
        const wfsversion = this.storedQueriesOptions.storedquery_id
            .toLowerCase()
            .includes('getfeaturebyid')
            ? '2.0.0'
            : '1.1.0';
        return new HttpParams({
            fromObject: Object.assign({
                service: 'wfs',
                version: wfsversion,
                request: 'GetFeature',
                storedquery_id: this.storedQueriesOptions.storedquery_id,
                srsname: this.storedQueriesOptions.srsname,
                outputformat: this.storedQueriesOptions.outputformat
            }, queryParams, this.params, options.params || {})
        });
    }
    extractResults(response, term) {
        return response.features.map((data) => {
            return this.dataToResult(data, term);
        });
    }
    dataToResult(data, term) {
        const properties = this.computeProperties(data);
        const id = [this.getId(), properties.type, data.id].join('.');
        const title = data.properties[this.storedQueriesOptions.resultTitle]
            ? this.storedQueriesOptions.resultTitle
            : this.resultTitle;
        return {
            source: this,
            data: {
                type: FEATURE,
                projection: 'EPSG:4326',
                geometry: data.geometry,
                // extent: data.bbox,
                properties,
                meta: {
                    id,
                    title: data.properties[title]
                }
            },
            meta: {
                dataType: FEATURE,
                id,
                title: data.properties.title,
                titleHtml: data.properties[title],
                icon: 'map-marker',
                score: (data.properties.title) ?
                    computeTermSimilarity(term.trim(), data.properties.title) :
                    computeTermSimilarity(term.trim(), data.properties[title]),
            }
        };
    }
    computeProperties(data) {
        const properties = Object.assign({}, ObjectUtils.removeKeys(data.properties, StoredQueriesSearchSource.propertiesBlacklist), { Route: '<span class="routing"> <u>' + this.languageService.translate.instant('igo.geo.seeRouting') + '</u> </span>' });
        return properties;
    }
}
StoredQueriesSearchSource.id = 'storedqueries';
StoredQueriesSearchSource.type = FEATURE;
StoredQueriesSearchSource.propertiesBlacklist = [
    'boundedBy',
    'id',
    'coord_x',
    'coord_y'
];
StoredQueriesSearchSource.ɵfac = function StoredQueriesSearchSource_Factory(t) { return new (t || StoredQueriesSearchSource)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LanguageService), i0.ɵɵinject(i2.StorageService), i0.ɵɵinject('options')); };
StoredQueriesSearchSource.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StoredQueriesSearchSource, factory: StoredQueriesSearchSource.ɵfac });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], StoredQueriesSearchSource.prototype, "search", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StoredQueriesSearchSource, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LanguageService }, { type: i2.StorageService }, { type: undefined, decorators: [{
                type: Inject,
                args: ['options']
            }] }]; }, { search: [] }); })();
/**
 * StoredQueriesReverse search source
 */
// EXAMPLE CALLS
/* eslint-disable max-len */
// https://ws.mapserver.transports.gouv.qc.ca/swtq?service=wfs&version=1.1.0&request=GetFeature&storedquery_id=lim_adm&srsname=epsg:4326&outputformat=text/xml;%20subtype=gml/3.1.1&long=-71.292469&lat=46.748107
//
export class StoredQueriesReverseSearchSource extends SearchSource {
    constructor(http, languageService, storageService, options) {
        super(options, storageService);
        this.http = http;
        this.languageService = languageService;
        this.storedQueriesOptions = options;
        if (!this.storedQueriesOptions || (this.storedQueriesOptions && !this.storedQueriesOptions.available)) {
            return;
        }
        if (!this.storedQueriesOptions.storedquery_id) {
            const err = 'Stored Queries :You have to set "storedquery_id" into StoredQueries options. ex: storedquery_id: "nameofstoredquerie"';
            throw new Error(err);
        }
        if (!this.storedQueriesOptions.longField) {
            throw new Error('Stored Queries :You have to set "longField" to map the longitude coordinate to the query params.');
        }
        if (!this.storedQueriesOptions.latField) {
            throw new Error('Stored Queries :You have to set "latField" to map the latitude coordinate to the query params.');
        }
        this.storedQueriesOptions.outputformat =
            this.storedQueriesOptions.outputformat || 'text/xml; subtype=gml/3.1.1';
        this.storedQueriesOptions.srsname =
            this.storedQueriesOptions.srsname || 'EPSG:4326';
        this.storedQueriesOptions.resultTitle =
            this.storedQueriesOptions.resultTitle || this.resultTitle;
    }
    getId() {
        return StoredQueriesReverseSearchSource.id;
    }
    getType() {
        return StoredQueriesReverseSearchSource.type;
    }
    getDefaultOptions() {
        return {
            title: 'Stored Queries (reverse)',
            searchUrl: 'https://ws.mapserver.transports.gouv.qc.ca/swtq'
        };
    }
    /**
     * Search a location by coordinates
     * @param lonLat Location coordinates
     * @param distance Search raidus around lonLat
     * @returns Observable of <SearchResult<Feature>[]
     */
    reverseSearch(lonLat, options) {
        const params = this.computeRequestParams(lonLat, options || {});
        if (new RegExp('.*?gml.*?', 'i').test(this.storedQueriesOptions.outputformat)) {
            return this.http
                .get(this.searchUrl, { params, responseType: 'text' })
                .pipe(map(response => {
                return this.extractResults(this.extractWFSData(response));
            }));
        }
        else {
            return this.http.get(this.searchUrl, { params }).pipe(map(response => {
                return this.extractResults(this.extractWFSData(response));
            }));
        }
    }
    getFormatFromOptions() {
        let olFormatCls;
        const outputFormat = this.storedQueriesOptions.outputformat;
        const patternGml3 = new RegExp('.*?gml.*?', 'i');
        const patternGeojson = new RegExp('.*?json.*?', 'i');
        if (patternGeojson.test(outputFormat)) {
            olFormatCls = olformat.GeoJSON;
        }
        if (patternGml3.test(outputFormat)) {
            olFormatCls = olformat.WFS;
        }
        return new olFormatCls();
    }
    extractWFSData(res) {
        const olFormat = this.getFormatFromOptions();
        const geojson = olformat.GeoJSON;
        const wfsfeatures = olFormat.readFeatures(res);
        const features = JSON.parse(new geojson().writeFeatures(wfsfeatures));
        return features;
    }
    computeRequestParams(lonLat, options) {
        const longLatParams = {};
        longLatParams[this.storedQueriesOptions.longField] = lonLat[0];
        longLatParams[this.storedQueriesOptions.latField] = lonLat[1];
        return new HttpParams({
            fromObject: Object.assign({
                service: 'WFS',
                version: '1.1.0',
                request: 'GetFeature',
                storedquery_id: this.storedQueriesOptions.storedquery_id,
                srsname: this.storedQueriesOptions.srsname,
                outputformat: this.storedQueriesOptions.outputformat
            }, longLatParams, this.params, options.params || {})
        });
    }
    extractResults(response) {
        return response.features.map((data) => {
            return this.dataToResult(data);
        });
    }
    dataToResult(data) {
        const properties = this.computeProperties(data);
        const id = [this.getId(), properties.type, data.id].join('.');
        const title = data.properties[this.storedQueriesOptions.resultTitle]
            ? this.storedQueriesOptions.resultTitle
            : this.resultTitle;
        return {
            source: this,
            data: {
                type: FEATURE,
                projection: 'EPSG:4326',
                geometry: data.geometry,
                properties,
                meta: {
                    id,
                    title: data.properties[title]
                }
            },
            meta: {
                dataType: FEATURE,
                id,
                title: data.properties[title],
                icon: 'map-marker'
            }
        };
    }
    computeProperties(data) {
        const properties = ObjectUtils.removeKeys(data.properties, StoredQueriesReverseSearchSource.propertiesBlacklist);
        const routing = {
            Route: '<span class="routing"> <u>' + this.languageService.translate.instant('igo.geo.seeRouting') + '</u> </span>'
        };
        return Object.assign(properties, { type: data.properties.doc_type }, routing);
    }
}
StoredQueriesReverseSearchSource.id = 'storedqueriesreverse';
StoredQueriesReverseSearchSource.type = FEATURE;
StoredQueriesReverseSearchSource.propertiesBlacklist = [];
StoredQueriesReverseSearchSource.ɵfac = function StoredQueriesReverseSearchSource_Factory(t) { return new (t || StoredQueriesReverseSearchSource)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LanguageService), i0.ɵɵinject(i2.StorageService), i0.ɵɵinject('options')); };
StoredQueriesReverseSearchSource.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StoredQueriesReverseSearchSource, factory: StoredQueriesReverseSearchSource.ɵfac });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], StoredQueriesReverseSearchSource.prototype, "reverseSearch", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StoredQueriesReverseSearchSource, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LanguageService }, { type: i2.StorageService }, { type: undefined, decorators: [{
                type: Inject,
                args: ['options']
            }] }]; }, { reverseSearch: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVkcXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3NlYXJjaC9zaGFyZWQvc291cmNlcy9zdG9yZWRxdWVyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHOUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBVyxNQUFNLGtCQUFrQixDQUFDO0FBR3BELE9BQU8sRUFBRSxZQUFZLEVBQTZCLE1BQU0sVUFBVSxDQUFDO0FBZ0JuRSxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUV0QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBRXpDOztHQUVHO0FBRUgsTUFBTSxPQUFPLHlCQUEwQixTQUFRLFlBQVk7SUFjekQsWUFDVSxJQUFnQixFQUNoQixlQUFnQyxFQUN4QyxjQUE4QixFQUNYLE9BQTRCO1FBRS9DLEtBQUssQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFMdkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFLeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE9BQTJDLENBQUM7UUFDeEUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFO1lBQ3JFLE9BQU87U0FDUjtRQUVELE1BQU0sb0JBQW9CLEdBQUcs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QUNGLENBQUM7SUFDSixDQUFDO0lBRU8saUJBQWlCLENBQ3ZCLElBQThCO1FBRTlCLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQ3ZDLElBQUksQ0FBQyxVQUFVLEVBQ2YsZ0NBQWdDLENBQUMsbUJBQW1CLENBQ3JELENBQUM7UUFDRixNQUFNLE9BQU8sR0FBRztZQUNkLEtBQUssRUFBRSw0QkFBNEIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsR0FBRyxjQUFjO1NBQ3BILENBQUM7UUFDRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7QUE5TE0sbUNBQUUsR0FBRyxzQkFBc0IsQ0FBQztBQUM1QixxQ0FBSSxHQUFHLE9BQU8sQ0FBQztBQUNmLG9EQUFtQixHQUFhLEVBQUUsQ0FBQztnSEFKL0IsZ0NBQWdDLDJHQWFqQyxTQUFTO3NGQWJSLGdDQUFnQyxXQUFoQyxnQ0FBZ0M7QUFzRTNDO0lBSEMsU0FBUyxDQUFDO1FBQ1QsYUFBYSxFQUFFLEVBQUU7S0FDbEIsQ0FBQztxRUF3QkQ7dUZBN0ZVLGdDQUFnQztjQUQ1QyxVQUFVOztzQkFjTixNQUFNO3VCQUFDLFNBQVM7d0JBeURuQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9iamVjdFV0aWxzIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuaW1wb3J0IHsgRkVBVFVSRSwgRmVhdHVyZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9zZWFyY2guaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTZWFyY2hTb3VyY2UsIFRleHRTZWFyY2gsIFJldmVyc2VTZWFyY2ggfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQge1xuICBTZWFyY2hTb3VyY2VPcHRpb25zLFxuICBUZXh0U2VhcmNoT3B0aW9ucyxcbiAgUmV2ZXJzZVNlYXJjaE9wdGlvbnNcbn0gZnJvbSAnLi9zb3VyY2UuaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICBTdG9yZWRRdWVyaWVzRGF0YSxcbiAgU3RvcmVkUXVlcmllc1Jlc3BvbnNlLFxuICBTdG9yZWRRdWVyaWVzUmV2ZXJzZURhdGEsXG4gIFN0b3JlZFF1ZXJpZXNSZXZlcnNlUmVzcG9uc2UsXG4gIFN0b3JlZFF1ZXJpZXNTZWFyY2hTb3VyY2VPcHRpb25zLFxuICBTdG9yZWRRdWVyaWVzRmllbGRzLFxuICBTdG9yZWRRdWVyaWVzUmV2ZXJzZVNlYXJjaFNvdXJjZU9wdGlvbnNcbn0gZnJvbSAnLi9zdG9yZWRxdWVyaWVzLmludGVyZmFjZXMnO1xuXG5pbXBvcnQgKiBhcyBvbGZvcm1hdCBmcm9tICdvbC9mb3JtYXQnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgY29tcHV0ZVRlcm1TaW1pbGFyaXR5IH0gZnJvbSAnLi4vc2VhcmNoLnV0aWxzJztcbmltcG9ydCB7IENhY2hlYWJsZSB9IGZyb20gJ3RzLWNhY2hlYWJsZSc7XG5cbi8qKlxuICogU3RvcmVkUXVlcmllcyBzZWFyY2ggc291cmNlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yZWRRdWVyaWVzU2VhcmNoU291cmNlIGV4dGVuZHMgU2VhcmNoU291cmNlXG4gIGltcGxlbWVudHMgVGV4dFNlYXJjaCB7XG4gIHN0YXRpYyBpZCA9ICdzdG9yZWRxdWVyaWVzJztcbiAgc3RhdGljIHR5cGUgPSBGRUFUVVJFO1xuICBzdGF0aWMgcHJvcGVydGllc0JsYWNrbGlzdDogc3RyaW5nW10gPSBbXG4gICAgJ2JvdW5kZWRCeScsXG4gICAgJ2lkJyxcbiAgICAnY29vcmRfeCcsXG4gICAgJ2Nvb3JkX3knXG4gIF07XG4gIHB1YmxpYyByZXN1bHRUaXRsZTogJ3RpdGxlJztcbiAgcHVibGljIHN0b3JlZFF1ZXJpZXNPcHRpb25zOiBTdG9yZWRRdWVyaWVzU2VhcmNoU291cmNlT3B0aW9ucztcbiAgcHVibGljIG11bHRpcGxlRmllbGRzUXVlcnk6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ29wdGlvbnMnKSBvcHRpb25zOiBTZWFyY2hTb3VyY2VPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKG9wdGlvbnMsIHN0b3JhZ2VTZXJ2aWNlKTtcbiAgICB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zID0gb3B0aW9ucyBhcyBTdG9yZWRRdWVyaWVzU2VhcmNoU291cmNlT3B0aW9ucztcbiAgICBpZiAodGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucyAmJiAhdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5hdmFpbGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0U3RvcmVkcXVlcnlJZCA9ICdydHNzJztcbiAgICBjb25zdCBkZWZhdWx0RmllbGRTcGxpdHRlcjogU3RvcmVkUXVlcmllc0ZpZWxkc1tdID0gW1xuICAgICAgeyBuYW1lOiAncnRzcycsIGRlZmF1bHRWYWx1ZTogJy05OScgfSxcbiAgICAgIHsgbmFtZTogJ2NoYWluYWdlJywgZGVmYXVsdFZhbHVlOiAnMCcsIHNwbGl0UHJlZml4OiAnXFxcXCsnIH1cbiAgICBdO1xuICAgIGNvbnN0IGRlZmF1bHRPdXRwdXRmb3JtYXQgPSAndGV4dC94bWw7IHN1YnR5cGU9Z21sLzMuMS4xJztcbiAgICBjb25zdCBkZWZhdWx0U3JzbmFtZSA9ICdFUFNHOjQzMjYnO1xuICAgIGNvbnN0IGRlZmF1bHRSZXN1bHRUaXRsZSA9ICd0aXRsZSc7XG5cbiAgICBpZiAoIXRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnIE5vIGNvbmZpZ3VyYXRpb24gZm9yIHRoaXMgc2VhcmNoIHNvdXJjZSAoc3RvcmVkcXVlcmllcykuIFlvdSB3aWxsIHVzZSB0aGUgZGVmYXVsdCB2YWx1ZXMnXG4gICAgICApO1xuICAgICAgdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucyA9IHtcbiAgICAgICAgc3RvcmVkcXVlcnlfaWQ6IGRlZmF1bHRTdG9yZWRxdWVyeUlkLFxuICAgICAgICBmaWVsZHM6IGRlZmF1bHRGaWVsZFNwbGl0dGVyLFxuICAgICAgICBvdXRwdXRmb3JtYXQ6IGRlZmF1bHRPdXRwdXRmb3JtYXQsXG4gICAgICAgIHNyc25hbWU6IGRlZmF1bHRTcnNuYW1lLFxuICAgICAgICByZXN1bHRUaXRsZTogZGVmYXVsdFJlc3VsdFRpdGxlXG4gICAgICB9O1xuICAgICAgdGhpcy5yZXN1bHRUaXRsZSA9IGRlZmF1bHRSZXN1bHRUaXRsZTtcbiAgICAgIGNvbnNvbGUubG9nKCdEZWZhdWx0IHZhbHVlcycsIHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5zdG9yZWRxdWVyeV9pZCkge1xuICAgICAgY29uc3QgZXJyID1cbiAgICAgICAgJ1N0b3JlZCBRdWVyaWVzIDpZb3UgaGF2ZSB0byBzZXQgXCJzdG9yZWRxdWVyeV9pZFwiIGludG8gU3RvcmVkUXVlcmllcyBvcHRpb25zLiBleDogc3RvcmVkcXVlcnlfaWQ6IFwibmFtZW9mc3RvcmVkcXVlcmllXCInO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfVxuICAgIGlmICghdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5maWVsZHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1N0b3JlZCBRdWVyaWVzIDpZb3UgaGF2ZSB0byBzZXQgXCJmaWVsZHNcIiBpbnRvIG9wdGlvbnMuIGV4OiBmaWVsZHM6IHtcIm5hbWVcIjogXCJydHNzXCIsIFwiZGVmYXVsdFZhbHVlXCI6IFwiLTk5XCJ9J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLm91dHB1dGZvcm1hdCA9XG4gICAgICB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLm91dHB1dGZvcm1hdCB8fCAndGV4dC94bWw7IHN1YnR5cGU9Z21sLzMuMS4xJztcbiAgICB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLnNyc25hbWUgPVxuICAgICAgdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5zcnNuYW1lIHx8ICdFUFNHOjQzMjYnO1xuXG4gICAgY29uc3Qgc3RvcmVkUXVlcnlJZCA9IHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMuc3RvcmVkcXVlcnlfaWQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoXG4gICAgICBzdG9yZWRRdWVyeUlkLmluY2x1ZGVzKCdnZXRmZWF0dXJlYnlpZCcpICYmXG4gICAgICB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLm91dHB1dGZvcm1hdFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAuaW5jbHVkZXMoJ2dldGZlYXR1cmVieWlkJylcbiAgICApIHtcbiAgICAgIGxldCBlcnIgPVxuICAgICAgICAnWW91IG11c3Qgc2V0IGEgZ2VvanNvbiBmb3JtYXQgZm9yIHlvdXIgc3RvcmVkIHF1ZXJ5LiBUaGlzIGlzIGR1ZSB0byBhbiBvcGVubGF5ZXJzIGlzc3VlKSc7XG4gICAgICBlcnIgKz0gJyAod2ZzIDEuMS4wICYgZ21sIDMuMS4xIGxpbWl0YXRpb24pJztcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH1cblxuICAgIGlmICghKHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMuZmllbGRzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLmZpZWxkcyA9IFt0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLmZpZWxkc107XG4gICAgfVxuXG4gICAgdGhpcy5tdWx0aXBsZUZpZWxkc1F1ZXJ5ID1cbiAgICAgIHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMuZmllbGRzLmxlbmd0aCA+IDEgPyB0cnVlIDogZmFsc2U7XG5cbiAgICB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLmZpZWxkcy5mb3JFYWNoKChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlRmllbGRzUXVlcnkgJiYgIWZpZWxkLnNwbGl0UHJlZml4ICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnU3RvcmVkIFF1ZXJpZXMgOllvdSBtdXN0IHNldCBhIGZpZWxkIHNwbGl0ZXIgaW50byB5b3VyIGZpZWxkIGRlZmluaXRpb24gKG9wdGlvbmFsIGZvciB0aGUgZmlyc3Qgb25lISknXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoIWZpZWxkLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1N0b3JlZCBRdWVyaWVzIDpZb3UgbXVzdCBzZXQgYSBmaWVsZCBkZWZhdWx0IHZhbHVlIGludG8geW91ciBmaWVsZCBkZWZpbml0aW9uJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5yZXN1bHRUaXRsZSA9XG4gICAgICB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLnJlc3VsdFRpdGxlIHx8IHRoaXMucmVzdWx0VGl0bGU7XG4gIH1cblxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdG9yZWRRdWVyaWVzU2VhcmNoU291cmNlLmlkO1xuICB9XG5cbiAgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdG9yZWRRdWVyaWVzU2VhcmNoU291cmNlLnR5cGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdE9wdGlvbnMoKTogU2VhcmNoU291cmNlT3B0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnU3RvcmVkIFF1ZXJpZXMnLFxuICAgICAgc2VhcmNoVXJsOiAnaHR0cHM6Ly93cy5tYXBzZXJ2ZXIudHJhbnNwb3J0cy5nb3V2LnFjLmNhL3N3dHEnXG4gICAgfTtcbiAgfVxuXG4gIC8vIFVSTCBDQUxMIEVYQU1QTEVTOlxuICAvLyAgR2V0RmVhdHVyZUJ5SWQgKG1hbmRhdG9yeSBzdG9yZWRxdWVyeSBmb3Igd2ZzIHNlcnZlcikgKG91dHB1dGZvcm1hdCBtdXN0IGJlIGluIGdlb2pzb24pXG4gLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAvLyAgaHR0cHM6Ly93cy5tYXBzZXJ2ZXIudHJhbnNwb3J0cy5nb3V2LnFjLmNhL3N3dHE/c2VydmljZT13ZnMmdmVyc2lvbj0yLjAuMCZyZXF1ZXN0PUdldEZlYXR1cmUmc3RvcmVkcXVlcnlfaWQ9dXJuOm9nYzpkZWY6cXVlcnk6T0dDLVdGUzo6R2V0RmVhdHVyZUJ5SWQmc3JzbmFtZT1lcHNnOjQzMjYmb3V0cHV0Zm9ybWF0PWdlb2pzb24mSUQ9YV9udW1fcm91dGUuMTMyXG4gIC8vICBDdXN0b20gU3RvcmVkUXVlcnlcbiAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gIC8vICBodHRwczovL3dzLm1hcHNlcnZlci50cmFuc3BvcnRzLmdvdXYucWMuY2Evc3d0cT9zZXJ2aWNlPXdmcyZ2ZXJzaW9uPTEuMS4wJnJlcXVlc3Q9R2V0RmVhdHVyZSZzdG9yZWRxdWVyeV9pZD1ydHNzJnNyc25hbWU9ZXBzZzo0MzI2Jm91dHB1dGZvcm1hdD10ZXh0L3htbDslMjBzdWJ0eXBlPWdtbC8zLjEuMSZydHNzPTAwMTM4MDExMTAwMDBjJmNoYWluYWdlPTEyXG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhIGxvY2F0aW9uIGJ5IG5hbWUgb3Iga2V5d29yZFxuICAgKiBAcGFyYW0gdGVybSBMb2NhdGlvbiBuYW1lIG9yIGtleXdvcmRcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSBvZiA8U2VhcmNoUmVzdWx0PEZlYXR1cmU+W11cbiAgICovXG5cbiAgQENhY2hlYWJsZSh7XG4gICAgbWF4Q2FjaGVDb3VudDogMjBcbiAgfSlcbiAgc2VhcmNoKFxuICAgIHRlcm06IHN0cmluZyxcbiAgICBvcHRpb25zPzogVGV4dFNlYXJjaE9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHQ8RmVhdHVyZT5bXT4ge1xuICAgIGNvbnN0IHN0b3JlZHF1ZXJpZXNQYXJhbXMgPSB0aGlzLnRlcm1TcGxpdHRlcihcbiAgICAgIHRlcm0sXG4gICAgICB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLmZpZWxkc1xuICAgICk7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb21wdXRlUmVxdWVzdFBhcmFtcyhcbiAgICAgIG9wdGlvbnMgfHwge30sXG4gICAgICBzdG9yZWRxdWVyaWVzUGFyYW1zXG4gICAgKTtcbiAgICB0aGlzLm9wdGlvbnMucGFyYW1zID0gdGhpcy5vcHRpb25zLnBhcmFtcyA/IHRoaXMub3B0aW9ucy5wYXJhbXMgOiB7fTtcbiAgICB0aGlzLm9wdGlvbnMucGFyYW1zLnBhZ2UgPSBvcHRpb25zLnBhZ2UgPyBTdHJpbmcob3B0aW9ucy5wYWdlKSA6ICcxJztcblxuICAgIGlmIChcbiAgICAgIG5ldyBSZWdFeHAoJy4qP2dtbC4qPycsICdpJykudGVzdCh0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLm91dHB1dGZvcm1hdClcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldCh0aGlzLnNlYXJjaFVybCwgeyBwYXJhbXMsIHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0QXJyYXkgPSB0aGlzLmV4dHJhY3RSZXN1bHRzKHRoaXMuZXh0cmFjdFdGU0RhdGEocmVzcG9uc2UpLCB0ZXJtKTtcbiAgICAgICAgICAgIHJlc3VsdEFycmF5LnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgICAgIChhLm1ldGEuc2NvcmUgPiBiLm1ldGEuc2NvcmUpID8gMSA6XG4gICAgICAgICAgICAgIChhLm1ldGEuc2NvcmUgPT09IGIubWV0YS5zY29yZSkgPyAoKGEubWV0YS50aXRsZUh0bWwgPCBiLm1ldGEudGl0bGVIdG1sKSA/IDEgOiAtMSkgOiAtMSk7XG4gICAgICAgICAgICByZXN1bHRBcnJheS5yZXZlcnNlKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0QXJyYXkubGVuZ3RoID4gTnVtYmVyKHRoaXMub3B0aW9ucy5wYXJhbXMubGltaXQpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkeEVuZCA9IE51bWJlcih0aGlzLm9wdGlvbnMucGFyYW1zLmxpbWl0KSAqIE51bWJlcih0aGlzLm9wdGlvbnMucGFyYW1zLnBhZ2UpO1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHRUb3RMZW5naHQgPSByZXN1bHRBcnJheS5sZW5ndGg7XG4gICAgICAgICAgICAgIHJlc3VsdEFycmF5ID0gcmVzdWx0QXJyYXkuc2xpY2UoMCwgaWR4RW5kKTtcbiAgICAgICAgICAgICAgaWYgKGlkeEVuZCA8IHJlc3VsdFRvdExlbmdodCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdEFycmF5W3Jlc3VsdEFycmF5Lmxlbmd0aCAtIDEgXS5tZXRhLm5leHRQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRBcnJheVtyZXN1bHRBcnJheS5sZW5ndGggLSAxIF0ubWV0YS5uZXh0UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0QXJyYXk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZWFyY2hVcmwsIHsgcGFyYW1zIH0pLnBpcGUoXG4gICAgICAgIG1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdFJlc3VsdHModGhpcy5leHRyYWN0V0ZTRGF0YShyZXNwb25zZSksIHRlcm0pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEZvcm1hdEZyb21PcHRpb25zKCkge1xuICAgIGxldCBvbEZvcm1hdENscztcblxuICAgIGNvbnN0IG91dHB1dEZvcm1hdCA9IHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMub3V0cHV0Zm9ybWF0O1xuICAgIGNvbnN0IHBhdHRlcm5HbWwzID0gbmV3IFJlZ0V4cCgnLio/Z21sLio/JywgJ2knKTtcbiAgICBjb25zdCBwYXR0ZXJuR2VvanNvbiA9IG5ldyBSZWdFeHAoJy4qP2pzb24uKj8nLCAnaScpO1xuXG4gICAgaWYgKHBhdHRlcm5HZW9qc29uLnRlc3Qob3V0cHV0Rm9ybWF0KSkge1xuICAgICAgb2xGb3JtYXRDbHMgPSBvbGZvcm1hdC5HZW9KU09OO1xuICAgIH1cbiAgICBpZiAocGF0dGVybkdtbDMudGVzdChvdXRwdXRGb3JtYXQpKSB7XG4gICAgICBvbEZvcm1hdENscyA9IG9sZm9ybWF0LldGUztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IG9sRm9ybWF0Q2xzKCk7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RXRlNEYXRhKHJlcykge1xuICAgIGNvbnN0IG9sRm9ybWF0ID0gdGhpcy5nZXRGb3JtYXRGcm9tT3B0aW9ucygpO1xuICAgIGNvbnN0IGdlb2pzb24gPSBvbGZvcm1hdC5HZW9KU09OO1xuICAgIGNvbnN0IHdmc2ZlYXR1cmVzID0gb2xGb3JtYXQucmVhZEZlYXR1cmVzKHJlcyk7XG4gICAgY29uc3QgZmVhdHVyZXMgPSBKU09OLnBhcnNlKG5ldyBnZW9qc29uKCkud3JpdGVGZWF0dXJlcyh3ZnNmZWF0dXJlcykpO1xuICAgIHJldHVybiBmZWF0dXJlcztcbiAgfVxuXG4gIHByaXZhdGUgdGVybVNwbGl0dGVyKHRlcm06IHN0cmluZywgZmllbGRzOiBTdG9yZWRRdWVyaWVzRmllbGRzW10pOiB7fSB7XG4gICAgY29uc3Qgc3BsaXR0ZWRUZXJtID0ge307XG4gICAgbGV0IHJlbWFpbmluZ1Rlcm0gPSB0ZXJtO1xuICAgIGxldCBjbnQgPSAwO1xuXG4gICAgLy8gVXNlZCB0byBidWlsZCB0aGUgZGVmYXVsdCB2YWx1ZXNcbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBzcGxpdHRlZFRlcm1bZmllbGQubmFtZV0gPSBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICBjb25zdCBzcGxpdHRlclJlZ2V4ID0gbmV3IFJlZ0V4cChmaWVsZC5zcGxpdFByZWZpeCArICcoLispJywgJ2knKTtcbiAgICAgIGlmIChzcGxpdHRlclJlZ2V4LnRlc3QocmVtYWluaW5nVGVybSkpIHtcbiAgICAgICAgY250ID0gZmllbGQuc3BsaXRQcmVmaXggPyAoY250ICs9IDEpIDogY250O1xuICAgICAgICByZW1haW5pbmdUZXJtID0gcmVtYWluaW5nVGVybS5zcGxpdChzcGxpdHRlclJlZ2V4KVsxXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY250ID09PSAwKSB7XG4gICAgICBzcGxpdHRlZFRlcm1bZmllbGRzWzBdLm5hbWVdID0gdGVybTtcbiAgICAgIHJldHVybiBzcGxpdHRlZFRlcm07XG4gICAgfVxuICAgIHJlbWFpbmluZ1Rlcm0gPSB0ZXJtO1xuICAgIGNvbnN0IGxvY2FsRmllbGRzID0gWy4uLmZpZWxkc10ucmV2ZXJzZSgpO1xuICAgIGxvY2FsRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgY29uc3Qgc3BsaXR0ZXJSZWdleCA9IG5ldyBSZWdFeHAoZmllbGQuc3BsaXRQcmVmaXggfHwgJycgKyAnKC4rKScsICdpJyk7XG4gICAgICBpZiAocmVtYWluaW5nVGVybSB8fCByZW1haW5pbmdUZXJtICE9PSAnJykge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSByZW1haW5pbmdUZXJtLnNwbGl0KHNwbGl0dGVyUmVnZXgpO1xuICAgICAgICByZW1haW5pbmdUZXJtID0gdmFsdWVzWzBdO1xuICAgICAgICBpZiAodmFsdWVzWzFdKSB7XG4gICAgICAgICAgc3BsaXR0ZWRUZXJtW2ZpZWxkLm5hbWVdID0gdmFsdWVzWzFdLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzcGxpdHRlZFRlcm07XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVSZXF1ZXN0UGFyYW1zKFxuICAgIG9wdGlvbnM6IFRleHRTZWFyY2hPcHRpb25zLFxuICAgIHF1ZXJ5UGFyYW1zXG4gICk6IEh0dHBQYXJhbXMge1xuICAgIGNvbnN0IHdmc3ZlcnNpb24gPSB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLnN0b3JlZHF1ZXJ5X2lkXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLmluY2x1ZGVzKCdnZXRmZWF0dXJlYnlpZCcpXG4gICAgICA/ICcyLjAuMCdcbiAgICAgIDogJzEuMS4wJztcbiAgICByZXR1cm4gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbU9iamVjdDogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHNlcnZpY2U6ICd3ZnMnLFxuICAgICAgICAgIHZlcnNpb246IHdmc3ZlcnNpb24sXG4gICAgICAgICAgcmVxdWVzdDogJ0dldEZlYXR1cmUnLFxuICAgICAgICAgIHN0b3JlZHF1ZXJ5X2lkOiB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLnN0b3JlZHF1ZXJ5X2lkLFxuICAgICAgICAgIHNyc25hbWU6IHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMuc3JzbmFtZSxcbiAgICAgICAgICBvdXRwdXRmb3JtYXQ6IHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMub3V0cHV0Zm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgICB0aGlzLnBhcmFtcyxcbiAgICAgICAgb3B0aW9ucy5wYXJhbXMgfHwge31cbiAgICAgIClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFJlc3VsdHMoXG4gICAgcmVzcG9uc2U6IFN0b3JlZFF1ZXJpZXNSZXNwb25zZSwgdGVybTogc3RyaW5nXG4gICk6IFNlYXJjaFJlc3VsdDxGZWF0dXJlPltdIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZmVhdHVyZXMubWFwKChkYXRhOiBTdG9yZWRRdWVyaWVzRGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVRvUmVzdWx0KGRhdGEsIHRlcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkYXRhVG9SZXN1bHQoZGF0YTogU3RvcmVkUXVlcmllc0RhdGEsIHRlcm06IHN0cmluZyk6IFNlYXJjaFJlc3VsdDxGZWF0dXJlPiB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuY29tcHV0ZVByb3BlcnRpZXMoZGF0YSk7XG4gICAgY29uc3QgaWQgPSBbdGhpcy5nZXRJZCgpLCBwcm9wZXJ0aWVzLnR5cGUsIGRhdGEuaWRdLmpvaW4oJy4nKTtcbiAgICBjb25zdCB0aXRsZSA9IGRhdGEucHJvcGVydGllc1t0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLnJlc3VsdFRpdGxlXVxuICAgICAgPyB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLnJlc3VsdFRpdGxlXG4gICAgICA6IHRoaXMucmVzdWx0VGl0bGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogRkVBVFVSRSxcbiAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgIGdlb21ldHJ5OiBkYXRhLmdlb21ldHJ5LFxuICAgICAgICAvLyBleHRlbnQ6IGRhdGEuYmJveCxcbiAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRpdGxlOiBkYXRhLnByb3BlcnRpZXNbdGl0bGVdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtZXRhOiB7XG4gICAgICAgIGRhdGFUeXBlOiBGRUFUVVJFLFxuICAgICAgICBpZCxcbiAgICAgICAgdGl0bGU6IGRhdGEucHJvcGVydGllcy50aXRsZSxcbiAgICAgICAgdGl0bGVIdG1sOiBkYXRhLnByb3BlcnRpZXNbdGl0bGVdLFxuICAgICAgICBpY29uOiAnbWFwLW1hcmtlcicsXG4gICAgICAgIHNjb3JlOiAoZGF0YS5wcm9wZXJ0aWVzLnRpdGxlKSA/XG4gICAgICAgIGNvbXB1dGVUZXJtU2ltaWxhcml0eSh0ZXJtLnRyaW0oKSwgZGF0YS5wcm9wZXJ0aWVzLnRpdGxlKSA6XG4gICAgICAgIGNvbXB1dGVUZXJtU2ltaWxhcml0eSh0ZXJtLnRyaW0oKSwgZGF0YS5wcm9wZXJ0aWVzW3RpdGxlXSksXG5cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlUHJvcGVydGllcyhkYXRhOiBTdG9yZWRRdWVyaWVzRGF0YSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBPYmplY3RVdGlscy5yZW1vdmVLZXlzKFxuICAgICAgICBkYXRhLnByb3BlcnRpZXMsXG4gICAgICAgIFN0b3JlZFF1ZXJpZXNTZWFyY2hTb3VyY2UucHJvcGVydGllc0JsYWNrbGlzdFxuICAgICAgKSxcbiAgICAgIHsgUm91dGU6ICc8c3BhbiBjbGFzcz1cInJvdXRpbmdcIj4gPHU+JyArIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnNlZVJvdXRpbmcnKSArICc8L3U+IDwvc3Bhbj4nIH1cbiAgICApO1xuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG59XG5cbi8qKlxuICogU3RvcmVkUXVlcmllc1JldmVyc2Ugc2VhcmNoIHNvdXJjZVxuICovXG5cbi8vIEVYQU1QTEUgQ0FMTFNcbiAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vLyBodHRwczovL3dzLm1hcHNlcnZlci50cmFuc3BvcnRzLmdvdXYucWMuY2Evc3d0cT9zZXJ2aWNlPXdmcyZ2ZXJzaW9uPTEuMS4wJnJlcXVlc3Q9R2V0RmVhdHVyZSZzdG9yZWRxdWVyeV9pZD1saW1fYWRtJnNyc25hbWU9ZXBzZzo0MzI2Jm91dHB1dGZvcm1hdD10ZXh0L3htbDslMjBzdWJ0eXBlPWdtbC8zLjEuMSZsb25nPS03MS4yOTI0NjkmbGF0PTQ2Ljc0ODEwN1xuLy9cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JlZFF1ZXJpZXNSZXZlcnNlU2VhcmNoU291cmNlIGV4dGVuZHMgU2VhcmNoU291cmNlXG4gIGltcGxlbWVudHMgUmV2ZXJzZVNlYXJjaCB7XG4gIHN0YXRpYyBpZCA9ICdzdG9yZWRxdWVyaWVzcmV2ZXJzZSc7XG4gIHN0YXRpYyB0eXBlID0gRkVBVFVSRTtcbiAgc3RhdGljIHByb3BlcnRpZXNCbGFja2xpc3Q6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyByZXN1bHRUaXRsZTogJ3RpdGxlJztcbiAgcHVibGljIHN0b3JlZFF1ZXJpZXNPcHRpb25zOiBTdG9yZWRRdWVyaWVzUmV2ZXJzZVNlYXJjaFNvdXJjZU9wdGlvbnM7XG4gIHB1YmxpYyBtdWx0aXBsZUZpZWxkc1F1ZXJ5OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBASW5qZWN0KCdvcHRpb25zJykgb3B0aW9uczogU2VhcmNoU291cmNlT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihvcHRpb25zLCBzdG9yYWdlU2VydmljZSk7XG4gICAgdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucyA9IG9wdGlvbnMgYXMgU3RvcmVkUXVlcmllc1JldmVyc2VTZWFyY2hTb3VyY2VPcHRpb25zO1xuXG4gICAgaWYgKCF0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zIHx8ICh0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zICYmICF0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLmF2YWlsYWJsZSkgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLnN0b3JlZHF1ZXJ5X2lkKSB7XG4gICAgICBjb25zdCBlcnIgPVxuICAgICAgICAnU3RvcmVkIFF1ZXJpZXMgOllvdSBoYXZlIHRvIHNldCBcInN0b3JlZHF1ZXJ5X2lkXCIgaW50byBTdG9yZWRRdWVyaWVzIG9wdGlvbnMuIGV4OiBzdG9yZWRxdWVyeV9pZDogXCJuYW1lb2ZzdG9yZWRxdWVyaWVcIic7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLmxvbmdGaWVsZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnU3RvcmVkIFF1ZXJpZXMgOllvdSBoYXZlIHRvIHNldCBcImxvbmdGaWVsZFwiIHRvIG1hcCB0aGUgbG9uZ2l0dWRlIGNvb3JkaW5hdGUgdG8gdGhlIHF1ZXJ5IHBhcmFtcy4nXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMubGF0RmllbGQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1N0b3JlZCBRdWVyaWVzIDpZb3UgaGF2ZSB0byBzZXQgXCJsYXRGaWVsZFwiIHRvIG1hcCB0aGUgbGF0aXR1ZGUgY29vcmRpbmF0ZSB0byB0aGUgcXVlcnkgcGFyYW1zLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5vdXRwdXRmb3JtYXQgPVxuICAgICAgdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5vdXRwdXRmb3JtYXQgfHwgJ3RleHQveG1sOyBzdWJ0eXBlPWdtbC8zLjEuMSc7XG4gICAgdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5zcnNuYW1lID1cbiAgICAgIHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMuc3JzbmFtZSB8fCAnRVBTRzo0MzI2JztcbiAgICB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLnJlc3VsdFRpdGxlID1cbiAgICAgIHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMucmVzdWx0VGl0bGUgfHwgdGhpcy5yZXN1bHRUaXRsZTtcbiAgfVxuXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFN0b3JlZFF1ZXJpZXNSZXZlcnNlU2VhcmNoU291cmNlLmlkO1xuICB9XG5cbiAgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdG9yZWRRdWVyaWVzUmV2ZXJzZVNlYXJjaFNvdXJjZS50eXBlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldERlZmF1bHRPcHRpb25zKCk6IFNlYXJjaFNvdXJjZU9wdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ1N0b3JlZCBRdWVyaWVzIChyZXZlcnNlKScsXG4gICAgICBzZWFyY2hVcmw6ICdodHRwczovL3dzLm1hcHNlcnZlci50cmFuc3BvcnRzLmdvdXYucWMuY2Evc3d0cSdcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhIGxvY2F0aW9uIGJ5IGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSBsb25MYXQgTG9jYXRpb24gY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtIGRpc3RhbmNlIFNlYXJjaCByYWlkdXMgYXJvdW5kIGxvbkxhdFxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlIG9mIDxTZWFyY2hSZXN1bHQ8RmVhdHVyZT5bXVxuICAgKi9cbiAgQENhY2hlYWJsZSh7XG4gICAgbWF4Q2FjaGVDb3VudDogMjBcbiAgfSlcbiAgcmV2ZXJzZVNlYXJjaChcbiAgICBsb25MYXQ6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgb3B0aW9ucz86IFJldmVyc2VTZWFyY2hPcHRpb25zXG4gICk6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0PEZlYXR1cmU+W10+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmNvbXB1dGVSZXF1ZXN0UGFyYW1zKGxvbkxhdCwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICBpZiAoXG4gICAgICBuZXcgUmVnRXhwKCcuKj9nbWwuKj8nLCAnaScpLnRlc3QodGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5vdXRwdXRmb3JtYXQpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5nZXQodGhpcy5zZWFyY2hVcmwsIHsgcGFyYW1zLCByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdFJlc3VsdHModGhpcy5leHRyYWN0V0ZTRGF0YShyZXNwb25zZSkpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VhcmNoVXJsLCB7IHBhcmFtcyB9KS5waXBlKFxuICAgICAgICBtYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RSZXN1bHRzKHRoaXMuZXh0cmFjdFdGU0RhdGEocmVzcG9uc2UpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb3JtYXRGcm9tT3B0aW9ucygpIHtcbiAgICBsZXQgb2xGb3JtYXRDbHM7XG5cbiAgICBjb25zdCBvdXRwdXRGb3JtYXQgPSB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLm91dHB1dGZvcm1hdDtcbiAgICBjb25zdCBwYXR0ZXJuR21sMyA9IG5ldyBSZWdFeHAoJy4qP2dtbC4qPycsICdpJyk7XG4gICAgY29uc3QgcGF0dGVybkdlb2pzb24gPSBuZXcgUmVnRXhwKCcuKj9qc29uLio/JywgJ2knKTtcblxuICAgIGlmIChwYXR0ZXJuR2VvanNvbi50ZXN0KG91dHB1dEZvcm1hdCkpIHtcbiAgICAgIG9sRm9ybWF0Q2xzID0gb2xmb3JtYXQuR2VvSlNPTjtcbiAgICB9XG4gICAgaWYgKHBhdHRlcm5HbWwzLnRlc3Qob3V0cHV0Rm9ybWF0KSkge1xuICAgICAgb2xGb3JtYXRDbHMgPSBvbGZvcm1hdC5XRlM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBvbEZvcm1hdENscygpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0V0ZTRGF0YShyZXMpIHtcbiAgICBjb25zdCBvbEZvcm1hdCA9IHRoaXMuZ2V0Rm9ybWF0RnJvbU9wdGlvbnMoKTtcbiAgICBjb25zdCBnZW9qc29uID0gb2xmb3JtYXQuR2VvSlNPTjtcbiAgICBjb25zdCB3ZnNmZWF0dXJlcyA9IG9sRm9ybWF0LnJlYWRGZWF0dXJlcyhyZXMpO1xuICAgIGNvbnN0IGZlYXR1cmVzID0gSlNPTi5wYXJzZShuZXcgZ2VvanNvbigpLndyaXRlRmVhdHVyZXMod2ZzZmVhdHVyZXMpKTtcbiAgICByZXR1cm4gZmVhdHVyZXM7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVSZXF1ZXN0UGFyYW1zKFxuICAgIGxvbkxhdDogW251bWJlciwgbnVtYmVyXSxcbiAgICBvcHRpb25zPzogUmV2ZXJzZVNlYXJjaE9wdGlvbnNcbiAgKTogSHR0cFBhcmFtcyB7XG4gICAgY29uc3QgbG9uZ0xhdFBhcmFtcyA9IHt9O1xuICAgIGxvbmdMYXRQYXJhbXNbdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5sb25nRmllbGRdID0gbG9uTGF0WzBdO1xuICAgIGxvbmdMYXRQYXJhbXNbdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5sYXRGaWVsZF0gPSBsb25MYXRbMV07XG5cbiAgICByZXR1cm4gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbU9iamVjdDogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHNlcnZpY2U6ICdXRlMnLFxuICAgICAgICAgIHZlcnNpb246ICcxLjEuMCcsXG4gICAgICAgICAgcmVxdWVzdDogJ0dldEZlYXR1cmUnLFxuICAgICAgICAgIHN0b3JlZHF1ZXJ5X2lkOiB0aGlzLnN0b3JlZFF1ZXJpZXNPcHRpb25zLnN0b3JlZHF1ZXJ5X2lkLFxuICAgICAgICAgIHNyc25hbWU6IHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMuc3JzbmFtZSxcbiAgICAgICAgICBvdXRwdXRmb3JtYXQ6IHRoaXMuc3RvcmVkUXVlcmllc09wdGlvbnMub3V0cHV0Zm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIGxvbmdMYXRQYXJhbXMsXG4gICAgICAgIHRoaXMucGFyYW1zLFxuICAgICAgICBvcHRpb25zLnBhcmFtcyB8fCB7fVxuICAgICAgKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0UmVzdWx0cyhcbiAgICByZXNwb25zZTogU3RvcmVkUXVlcmllc1JldmVyc2VSZXNwb25zZVxuICApOiBTZWFyY2hSZXN1bHQ8RmVhdHVyZT5bXSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmZlYXR1cmVzLm1hcCgoZGF0YTogU3RvcmVkUXVlcmllc1JldmVyc2VEYXRhKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhVG9SZXN1bHQoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRhdGFUb1Jlc3VsdChkYXRhOiBTdG9yZWRRdWVyaWVzUmV2ZXJzZURhdGEpOiBTZWFyY2hSZXN1bHQ8RmVhdHVyZT4ge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmNvbXB1dGVQcm9wZXJ0aWVzKGRhdGEpO1xuICAgIGNvbnN0IGlkID0gW3RoaXMuZ2V0SWQoKSwgcHJvcGVydGllcy50eXBlLCBkYXRhLmlkXS5qb2luKCcuJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkYXRhLnByb3BlcnRpZXNbdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5yZXN1bHRUaXRsZV1cbiAgICAgID8gdGhpcy5zdG9yZWRRdWVyaWVzT3B0aW9ucy5yZXN1bHRUaXRsZVxuICAgICAgOiB0aGlzLnJlc3VsdFRpdGxlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogRkVBVFVSRSxcbiAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgIGdlb21ldHJ5OiBkYXRhLmdlb21ldHJ5LFxuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGl0bGU6IGRhdGEucHJvcGVydGllc1t0aXRsZV1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgZGF0YVR5cGU6IEZFQVRVUkUsXG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZTogZGF0YS5wcm9wZXJ0aWVzW3RpdGxlXSxcbiAgICAgICAgaWNvbjogJ21hcC1tYXJrZXInXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZVByb3BlcnRpZXMoXG4gICAgZGF0YTogU3RvcmVkUXVlcmllc1JldmVyc2VEYXRhXG4gICk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3RVdGlscy5yZW1vdmVLZXlzKFxuICAgICAgZGF0YS5wcm9wZXJ0aWVzLFxuICAgICAgU3RvcmVkUXVlcmllc1JldmVyc2VTZWFyY2hTb3VyY2UucHJvcGVydGllc0JsYWNrbGlzdFxuICAgICk7XG4gICAgY29uc3Qgcm91dGluZyA9IHtcbiAgICAgIFJvdXRlOiAnPHNwYW4gY2xhc3M9XCJyb3V0aW5nXCI+IDx1PicgKyB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5zZWVSb3V0aW5nJykgKyAnPC91PiA8L3NwYW4+J1xuICAgIH07XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgeyB0eXBlOiBkYXRhLnByb3BlcnRpZXMuZG9jX3R5cGUgfSwgcm91dGluZyk7XG4gIH1cbn1cbiJdfQ==