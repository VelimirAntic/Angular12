import { __decorate } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '@igo2/auth';
import { ObjectUtils } from '@igo2/utils';
import pointOnFeature from '@turf/point-on-feature';
import { FEATURE } from '../../../feature';
import { GoogleLinks } from './../../../utils/googleLinks';
import { SearchSource } from './source';
import { computeTermSimilarity } from '../search.utils';
import { Cacheable } from 'ts-cacheable';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/common/http";
export class IChercheSearchResultFormatter {
    constructor(languageService) {
        this.languageService = languageService;
    }
    formatResult(result) {
        return result;
    }
}
IChercheSearchResultFormatter.ɵfac = function IChercheSearchResultFormatter_Factory(t) { return new (t || IChercheSearchResultFormatter)(i0.ɵɵinject(i1.LanguageService)); };
IChercheSearchResultFormatter.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: IChercheSearchResultFormatter, factory: IChercheSearchResultFormatter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IChercheSearchResultFormatter, [{
        type: Injectable
    }], function () { return [{ type: i1.LanguageService }]; }, null); })();
// Fix the "+" is replaced with space " " in a query string
// https://github.com/angular/angular/issues/11058
export class IgoHttpParameterCodec {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
/**
 * ICherche search source
 */
export class IChercheSearchSource extends SearchSource {
    constructor(http, languageService, storageService, options, formatter, injector) {
        super(options, storageService);
        this.http = http;
        this.languageService = languageService;
        this.formatter = formatter;
        this.title$ = new BehaviorSubject('');
        this.hashtagsLieuxToKeep = [];
        this.languageService.translate
            .get(this.options.title)
            .subscribe((title) => this.title$.next(title));
        const authService = injector.get(AuthService);
        if (this.settings.length) {
            if (!authService) {
                this.getAllowedTypes();
            }
            else {
                authService.authenticate$.subscribe(() => {
                    this.getAllowedTypes();
                });
            }
        }
    }
    get title() {
        return this.title$.getValue();
    }
    getId() {
        return IChercheSearchSource.id;
    }
    getType() {
        return IChercheSearchSource.type;
    }
    getDefaultOptions() {
        var _a;
        const limit = this.options.params && this.options.params.limit
            ? Number(this.options.params.limit)
            : undefined;
        const ecmax = this.options.params && this.options.params.ecmax
            ? Number(this.options.params.ecmax)
            : undefined;
        const types = ((_a = this.options.params) === null || _a === void 0 ? void 0 : _a.type)
            ? this.options.params.type.replace(/\s/g, '').toLowerCase().split(',')
            : [
                'adresses',
                'codes-postaux',
                'routes',
                'intersections',
                'municipalites',
                'mrc',
                'regadmin',
                'lieux'
            ];
        return {
            title: 'igo.geo.search.icherche.name',
            searchUrl: 'https://geoegl.msp.gouv.qc.ca/apis/icherche',
            settings: [
                {
                    type: 'checkbox',
                    title: 'results type',
                    name: 'type',
                    values: [
                        {
                            title: 'igo.geo.search.icherche.type.address',
                            value: 'adresses',
                            enabled: types.indexOf('adresses') !== -1,
                            hashtags: ['adresse']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.oldAddress',
                            value: 'anciennes-adresses',
                            enabled: types.indexOf('anciennes-adresses') !== -1,
                            hashtags: ['anciennes-adresses']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.postalCode',
                            value: 'codes-postaux',
                            enabled: types.indexOf('codes-postaux') !== -1,
                            hashtags: ['code-postal']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.road',
                            value: 'routes',
                            enabled: types.indexOf('routes') !== -1,
                            hashtags: ['route']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.intersection',
                            value: 'intersections',
                            enabled: types.indexOf('intersections') !== -1,
                            hashtags: ['intersection', '+']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.city',
                            value: 'municipalites',
                            enabled: types.indexOf('municipalites') !== -1,
                            hashtags: ['municipalité', 'mun']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.oldCity',
                            value: 'anciennes-municipalites',
                            enabled: types.indexOf('anciennes-municipalites') !== -1,
                            hashtags: ['anciennes-municipalites']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.mrc',
                            value: 'mrc',
                            enabled: types.indexOf('mrc') !== -1,
                            hashtags: ['mrc']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.regadmin',
                            value: 'regadmin',
                            enabled: types.indexOf('regadmin') !== -1,
                            hashtags: ['région-administrative', 'regadmin']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.entreprise',
                            value: 'entreprises',
                            enabled: types.indexOf('entreprises') !== -1,
                            available: false,
                            hashtags: ['entreprise']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.place',
                            value: 'lieux',
                            enabled: types.indexOf('lieux') !== -1,
                            hashtags: ['lieu']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.exit',
                            value: 'sorties-autoroute',
                            enabled: types.indexOf('sorties-autoroute') !== -1,
                            hashtags: ['sortie', 'sorties', 'exit']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.km',
                            value: 'bornes-km',
                            enabled: types.indexOf('bornes-km') !== -1,
                            hashtags: ['borne', 'bornes', 'repère', 'km']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.gcc',
                            value: 'bornes-gcc',
                            enabled: types.indexOf('bornes-gcc') !== -1,
                            hashtags: ['borne', 'bornes', 'repère', 'gcc', 'ccg']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.cn',
                            value: 'bornes-cn',
                            enabled: types.indexOf('bornes-cn') !== -1,
                            hashtags: ['borne', 'bornes', 'cn']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.sumi',
                            value: 'bornes-sumi',
                            enabled: types.indexOf('bornes-sumi') !== -1,
                            hashtags: ['borne', 'bornes', 'sumi']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.hq',
                            value: 'hq',
                            enabled: types.indexOf('hq') !== -1,
                            hashtags: ['hq']
                        },
                        {
                            title: 'igo.geo.search.icherche.type.cadastre',
                            value: 'cadastre',
                            enabled: types.indexOf('cadastre') !== -1,
                            hashtags: ['cadastre']
                        }
                    ]
                },
                {
                    type: 'radiobutton',
                    title: 'results limit',
                    name: 'limit',
                    values: [
                        {
                            title: '1',
                            value: 1,
                            enabled: limit === 1
                        },
                        {
                            title: '5',
                            value: 5,
                            enabled: limit === 5 || !limit
                        },
                        {
                            title: '10',
                            value: 10,
                            enabled: limit === 10
                        },
                        {
                            title: '25',
                            value: 25,
                            enabled: limit === 25
                        },
                        {
                            title: '50',
                            value: 50,
                            enabled: limit === 50
                        }
                    ]
                },
                {
                    type: 'radiobutton',
                    title: 'ecmax',
                    name: 'ecmax',
                    values: [
                        {
                            title: '10 %',
                            value: 10,
                            enabled: ecmax === 10
                        },
                        {
                            title: '30 %',
                            value: 30,
                            enabled: ecmax === 30 || !ecmax
                        },
                        {
                            title: '50 %',
                            value: 50,
                            enabled: ecmax === 50
                        },
                        {
                            title: '75 %',
                            value: 75,
                            enabled: ecmax === 75
                        },
                        {
                            title: '100 %',
                            value: 100,
                            enabled: ecmax === 100
                        }
                    ]
                },
                {
                    type: 'radiobutton',
                    title: 'restrictExtent',
                    name: 'loc',
                    values: [
                        {
                            title: 'igo.geo.search.icherche.restrictExtent.map',
                            value: 'true',
                            enabled: false
                        },
                        {
                            title: 'igo.geo.search.icherche.restrictExtent.quebec',
                            value: 'false',
                            enabled: true
                        }
                    ]
                }
            ]
        };
    }
    /**
     * Search a location by name or keyword
     * @param term Location name or keyword
     * @returns Observable of <SearchResult<Feature>[]
     */
    search(term, options) {
        const params = this.computeRequestParams(term, options || {});
        if (!params.get('type').length) {
            return of([]);
        }
        this.options.params.page = params.get('page') || '1';
        return this.http.get(`${this.searchUrl}/geocode`, { params }).pipe(map((response) => this.extractResults(response, term)), catchError((err) => {
            err.error.toDisplay = true;
            err.error.title = this.languageService.translate.instant(this.getDefaultOptions().title);
            throw err;
        }));
    }
    getAllowedTypes() {
        return this.http
            .get(`${this.searchUrl}/types`)
            .subscribe((types) => {
            const typeSetting = this.settings.find((s) => s.name === 'type');
            typeSetting.values.forEach((v) => {
                const regex = new RegExp(`^${v.value}(\\.|$)`);
                const typesMatched = types.filter((value) => regex.test(value));
                v.available = typesMatched.length > 0;
                if (v.value === 'lieux') {
                    this.hashtagsLieuxToKeep = [
                        ...new Set(typesMatched
                            .map((t) => t.split('.'))
                            .reduce((a, b) => a.concat(b))
                            .filter((t) => t !== 'lieux'))
                    ];
                }
            });
            this.setParamFromSetting(typeSetting, false);
        });
    }
    computeRequestParams(term, options) {
        const queryParams = Object.assign({
            geometry: true,
            bbox: true,
            icon: true,
            type: 'adresses,codes-postaux,municipalites,mrc,regadmin,lieux,entreprises,bornes-sumi'
        }, this.params, this.computeOptionsParam(term, options || {}).params, {
            q: this.computeTerm(term),
            page: options.page
        });
        if (queryParams.loc === 'true') {
            const [xMin, yMin, xMax, yMax] = options.extent;
            queryParams.loc = `${xMin},${yMin};${xMax},${yMin};${xMax},${yMax};${xMin},${yMax};${xMin},${yMin}`;
        }
        else if (queryParams.loc === 'false') {
            delete queryParams.loc;
        }
        if (/#[A-Za-z]+/.test(queryParams.q)) {
            queryParams.type = 'lieux';
        }
        return new HttpParams({
            fromObject: ObjectUtils.removeUndefined(queryParams),
            encoder: new IgoHttpParameterCodec()
        });
    }
    extractResults(response, term) {
        return response.features.map((data) => {
            return this.formatter.formatResult(this.dataToResult(data, term, response));
        });
    }
    dataToResult(data, term, response) {
        const properties = this.computeProperties(data);
        const id = [this.getId(), properties.type, properties.code].join('.');
        const titleHtml = data.highlight.title || data.properties.nom;
        const subtitleHtml = data.highlight.title2
            ? ' <small> ' + data.highlight.title2 + '</small>'
            : '';
        const subtitleHtml2 = data.highlight.title3
            ? '<br><small> ' + data.highlight.title3 + '</small>'
            : '';
        return {
            source: this,
            data: {
                type: FEATURE,
                projection: 'EPSG:4326',
                geometry: data.geometry,
                extent: data.bbox,
                properties,
                meta: {
                    id,
                    title: data.properties.nom
                }
            },
            meta: {
                dataType: FEATURE,
                id,
                title: data.properties.nom,
                titleHtml: titleHtml + subtitleHtml + subtitleHtml2,
                icon: data.icon || 'map-marker',
                score: data.score || computeTermSimilarity(term.trim(), data.properties.nom),
                nextPage: response.features.length % +this.options.params.limit === 0 &&
                    +this.options.params.page < 10
            }
        };
    }
    computeProperties(data) {
        const properties = ObjectUtils.removeKeys(data.properties, IChercheSearchSource.propertiesBlacklist);
        if (!data.geometry) {
            return Object.assign({ type: data.index }, properties);
        }
        const googleLinksProperties = {
            GoogleMaps: ''
        };
        let googleMaps;
        if (data.geometry.type === 'Point') {
            googleMaps = GoogleLinks.getGoogleMapsCoordLink(data.geometry.coordinates[0], data.geometry.coordinates[1]);
        }
        else {
            const point = pointOnFeature(data.geometry);
            googleMaps = GoogleLinks.getGoogleMapsCoordLink(point.geometry.coordinates[0], point.geometry.coordinates[1]);
        }
        let googleMapsNom;
        if (data.index === 'routes') {
            googleMapsNom = GoogleLinks.getGoogleMapsNameLink(data.properties.nom + ', ' + data.properties.municipalite);
        }
        else if (data.index === 'municipalites') {
            googleMapsNom = GoogleLinks.getGoogleMapsNameLink(data.properties.nom + ', ' + 'ville');
        }
        else if (data.index === 'mrc') {
            googleMapsNom = GoogleLinks.getGoogleMapsNameLink('mrc+' + data.properties.nom);
        }
        else if (data.index === 'regadmin') {
            googleMapsNom = GoogleLinks.getGoogleMapsNameLink(data.properties.nom + ',+QC');
        }
        else {
            googleMapsNom = GoogleLinks.getGoogleMapsNameLink(data.properties.nom || data.highlight.title);
        }
        googleLinksProperties.GoogleMaps =
            '<a href=' +
                googleMaps +
                ' target="_blank">' +
                this.languageService.translate.instant('igo.geo.searchByCoord') +
                '</a> <br /> <a href=' +
                googleMapsNom +
                ' target="_blank">' +
                this.languageService.translate.instant('igo.geo.searchByName') +
                '</a>';
        if (data.geometry.type === 'Point') {
            googleLinksProperties.GoogleStreetView = GoogleLinks.getGoogleStreetViewLink(data.geometry.coordinates[0], data.geometry.coordinates[1]);
        }
        const routing = {
            Route: '<span class="routing"> <u>' +
                this.languageService.translate.instant('igo.geo.seeRouting') +
                '</u> </span>'
        };
        return Object.assign({ type: data.index }, properties, googleLinksProperties, routing);
    }
    /**
     * Remove hashtag from query
     * @param term Query with hashtag
     */
    computeTerm(term) {
        // Keep hashtags for "lieux"
        const hashtags = term.match(/(#[A-Za-z]+)/g) || [];
        let keep = false;
        keep = hashtags.some((hashtag) => {
            const hashtagKey = hashtag.substring(1);
            return this.hashtagsLieuxToKeep.some((h) => h
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '') ===
                hashtagKey
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, ''));
        });
        if (!keep) {
            term = term.replace(/(#[A-Za-z]+)/g, '');
        }
        return term.replace(/[^\wÀ-ÿ !\-\+\(\)\.\/½¼¾,'#]+/g, '');
    }
    /**
     * Add hashtag to param if valid
     * @param term Query with hashtag
     * @param options TextSearchOptions
     */
    computeOptionsParam(term, options) {
        const hashtags = super.getHashtagsValid(term, 'type');
        if (hashtags) {
            options.params = Object.assign(options.params || {}, {
                type: hashtags.join(',')
            });
        }
        return options;
    }
}
IChercheSearchSource.id = 'icherche';
IChercheSearchSource.type = FEATURE;
IChercheSearchSource.propertiesBlacklist = [];
IChercheSearchSource.ɵfac = function IChercheSearchSource_Factory(t) { return new (t || IChercheSearchSource)(i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i1.StorageService), i0.ɵɵinject('options'), i0.ɵɵinject(IChercheSearchResultFormatter), i0.ɵɵinject(i0.Injector)); };
IChercheSearchSource.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: IChercheSearchSource, factory: IChercheSearchSource.ɵfac });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], IChercheSearchSource.prototype, "search", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IChercheSearchSource, [{
        type: Injectable
    }], function () { return [{ type: i2.HttpClient }, { type: i1.LanguageService }, { type: i1.StorageService }, { type: undefined, decorators: [{
                type: Inject,
                args: ['options']
            }] }, { type: IChercheSearchResultFormatter, decorators: [{
                type: Inject,
                args: [IChercheSearchResultFormatter]
            }] }, { type: i0.Injector }]; }, { search: [] }); })();
/**
 * IChercheReverse search source
 */
export class IChercheReverseSearchSource extends SearchSource {
    constructor(http, languageService, storageService, options, injector) {
        super(options, storageService);
        this.http = http;
        this.languageService = languageService;
        this.title$ = new BehaviorSubject('');
        this.languageService.translate
            .get(this.options.title)
            .subscribe((title) => this.title$.next(title));
        const authService = injector.get(AuthService);
        if (this.settings.length) {
            if (!authService) {
                this.getAllowedTypes();
            }
            else {
                authService.authenticate$.subscribe(() => {
                    this.getAllowedTypes();
                });
            }
        }
    }
    get title() {
        return this.title$.getValue();
    }
    getId() {
        return IChercheReverseSearchSource.id;
    }
    getType() {
        return IChercheReverseSearchSource.type;
    }
    getDefaultOptions() {
        const types = this.options.params && this.options.params.type
            ? this.options.params.type.replace(/\s/g, '').toLowerCase().split(',')
            : ['adresses', 'municipalites', 'mrc', 'regadmin'];
        return {
            title: 'igo.geo.search.ichercheReverse.name',
            searchUrl: 'https://geoegl.msp.gouv.qc.ca/apis/terrapi',
            settings: [
                {
                    type: 'checkbox',
                    title: 'results type',
                    name: 'type',
                    values: [
                        {
                            title: 'igo.geo.search.icherche.type.address',
                            value: 'adresses',
                            enabled: types.indexOf('adresses') !== -1
                        },
                        {
                            title: 'igo.geo.search.icherche.type.road',
                            value: 'routes',
                            enabled: types.indexOf('routes') !== -1,
                            available: false
                        },
                        {
                            title: 'igo.geo.search.icherche.type.district',
                            value: 'arrondissements',
                            enabled: types.indexOf('arrondissements') !== -1
                        },
                        {
                            title: 'igo.geo.search.icherche.type.city',
                            value: 'municipalites',
                            enabled: types.indexOf('municipalites') !== -1
                        },
                        {
                            title: 'igo.geo.search.icherche.type.mrc',
                            value: 'mrc',
                            enabled: types.indexOf('mrc') !== -1
                        },
                        {
                            title: 'igo.geo.search.icherche.type.regadmin',
                            value: 'regadmin',
                            enabled: types.indexOf('regadmin') !== -1
                        }
                    ]
                },
                {
                    type: 'radiobutton',
                    title: 'radius',
                    name: 'bufferInput',
                    values: [
                        {
                            title: '100 m',
                            value: 100,
                            enabled: !this.options.distance || this.options.distance === 100
                        },
                        {
                            title: '500 m',
                            value: 500,
                            enabled: this.options.distance === 500
                        },
                        {
                            title: '1 km',
                            value: 1000,
                            enabled: this.options.distance === 1000
                        },
                        {
                            title: '2 km',
                            value: 2000,
                            enabled: this.options.distance === 2000
                        },
                        {
                            title: '5 km',
                            value: 5000,
                            enabled: this.options.distance === 5000
                        }
                    ]
                }
            ]
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
        if (!params.get('type').length) {
            return of([]);
        }
        return this.http.get(`${this.searchUrl}/locate`, { params }).pipe(map((response) => {
            return this.extractResults(response);
        }));
    }
    getAllowedTypes() {
        return this.http
            .get(`${this.searchUrl}/types`)
            .subscribe((types) => {
            const typeSetting = this.settings.find((s) => s.name === 'type');
            typeSetting.values.forEach((v) => {
                v.available = types.indexOf(v.value) > -1;
            });
            this.setParamFromSetting(typeSetting, false);
        });
    }
    computeRequestParams(lonLat, options) {
        if (options.distance || this.options.distance) {
            options.params = Object.assign(options.params || {}, {
                bufferInput: options.distance || this.options.distance
            });
        }
        return new HttpParams({
            fromObject: Object.assign({
                loc: lonLat.join(','),
                sort: 'distance',
                geometry: true,
                icon: true
            }, options.params || {}, this.params)
        });
    }
    extractResults(response) {
        return response.features.map((data) => {
            return this.dataToResult(data);
        });
    }
    getSubtitle(data) {
        if (!this.settings.length) {
            return '';
        }
        let subtitle = '';
        switch (data.properties.type) {
            case 'arrondissements':
                subtitle = data.properties.municipalite + ' (Arrondissement)';
                break;
            default:
                const typeSetting = this.settings.find((s) => s.name === 'type');
                const type = typeSetting.values.find((t) => t.value === data.properties.type);
                if (type) {
                    subtitle = this.languageService.translate.instant(type.title);
                }
        }
        return subtitle;
    }
    dataToResult(data) {
        const properties = this.computeProperties(data);
        const extent = this.computeExtent(data);
        const id = [this.getId(), properties.type, properties.code].join('.');
        const titleHtml = data.properties.nom;
        const subtitleHtml = ' <small> ' + this.getSubtitle(data) + '</small>';
        return {
            source: this,
            data: {
                type: FEATURE,
                projection: 'EPSG:4326',
                geometry: data.geometry,
                extent,
                properties,
                meta: {
                    id,
                    title: data.properties.nom
                }
            },
            meta: {
                dataType: FEATURE,
                id,
                title: data.properties.nom,
                titleHtml: titleHtml + subtitleHtml,
                icon: data.icon || 'map-marker',
                pointerSummaryTitle: this.getSubtitle(data) + ': ' + data.properties.nom
            }
        };
    }
    computeProperties(data) {
        const properties = ObjectUtils.removeKeys(data.properties, IChercheReverseSearchSource.propertiesBlacklist);
        const routing = {
            Route: '<span class="routing"> <u>' +
                this.languageService.translate.instant('igo.geo.seeRouting') +
                '</u> </span>'
        };
        return Object.assign(properties, routing);
    }
    computeExtent(data) {
        return data.bbox
            ? [data.bbox[0], data.bbox[2], data.bbox[1], data.bbox[3]]
            : undefined;
    }
}
IChercheReverseSearchSource.id = 'icherchereverse';
IChercheReverseSearchSource.type = FEATURE;
IChercheReverseSearchSource.propertiesBlacklist = [];
IChercheReverseSearchSource.ɵfac = function IChercheReverseSearchSource_Factory(t) { return new (t || IChercheReverseSearchSource)(i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i1.StorageService), i0.ɵɵinject('options'), i0.ɵɵinject(i0.Injector)); };
IChercheReverseSearchSource.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: IChercheReverseSearchSource, factory: IChercheReverseSearchSource.ɵfac });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], IChercheReverseSearchSource.prototype, "reverseSearch", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IChercheReverseSearchSource, [{
        type: Injectable
    }], function () { return [{ type: i2.HttpClient }, { type: i1.LanguageService }, { type: i1.StorageService }, { type: undefined, decorators: [{
                type: Inject,
                args: ['options']
            }] }, { type: i0.Injector }]; }, { reverseSearch: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNoZXJjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2hhcmVkL3NvdXJjZXMvaWNoZXJjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxVQUFVLEVBQXNCLE1BQU0sc0JBQXNCLENBQUM7QUFFbEYsT0FBTyxFQUFjLEVBQUUsRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxjQUFjLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLE9BQU8sRUFBVyxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUczRCxPQUFPLEVBQUUsWUFBWSxFQUE2QixNQUFNLFVBQVUsQ0FBQztBQVluRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBR3pDLE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUV4RCxZQUFZLENBQUMsTUFBNkI7UUFDeEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7MEdBTFUsNkJBQTZCO21GQUE3Qiw2QkFBNkIsV0FBN0IsNkJBQTZCO3VGQUE3Qiw2QkFBNkI7Y0FEekMsVUFBVTs7QUFTWCwy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dCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsIEh0dHBQYXJhbWV0ZXJDb2RlYyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmltcG9ydCBwb2ludE9uRmVhdHVyZSBmcm9tICdAdHVyZi9wb2ludC1vbi1mZWF0dXJlJztcblxuaW1wb3J0IHsgRkVBVFVSRSwgRmVhdHVyZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUnO1xuaW1wb3J0IHsgR29vZ2xlTGlua3MgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzL2dvb2dsZUxpbmtzJztcblxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vc2VhcmNoLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU2VhcmNoU291cmNlLCBUZXh0U2VhcmNoLCBSZXZlcnNlU2VhcmNoIH0gZnJvbSAnLi9zb3VyY2UnO1xuaW1wb3J0IHtcbiAgU2VhcmNoU291cmNlT3B0aW9ucyxcbiAgVGV4dFNlYXJjaE9wdGlvbnMsXG4gIFJldmVyc2VTZWFyY2hPcHRpb25zXG59IGZyb20gJy4vc291cmNlLmludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgSUNoZXJjaGVEYXRhLFxuICBJQ2hlcmNoZVJlc3BvbnNlLFxuICBJQ2hlcmNoZVJldmVyc2VEYXRhLFxuICBJQ2hlcmNoZVJldmVyc2VSZXNwb25zZVxufSBmcm9tICcuL2ljaGVyY2hlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgY29tcHV0ZVRlcm1TaW1pbGFyaXR5IH0gZnJvbSAnLi4vc2VhcmNoLnV0aWxzJztcbmltcG9ydCB7IENhY2hlYWJsZSB9IGZyb20gJ3RzLWNhY2hlYWJsZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJQ2hlcmNoZVNlYXJjaFJlc3VsdEZvcm1hdHRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UpIHt9XG5cbiAgZm9ybWF0UmVzdWx0KHJlc3VsdDogU2VhcmNoUmVzdWx0PEZlYXR1cmU+KTogU2VhcmNoUmVzdWx0PEZlYXR1cmU+IHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8vIEZpeCB0aGUgXCIrXCIgaXMgcmVwbGFjZWQgd2l0aCBzcGFjZSBcIiBcIiBpbiBhIHF1ZXJ5IHN0cmluZ1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEwNThcbmV4cG9ydCBjbGFzcyBJZ29IdHRwUGFyYW1ldGVyQ29kZWMgaW1wbGVtZW50cyBIdHRwUGFyYW1ldGVyQ29kZWMge1xuICBlbmNvZGVLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgfVxuXG4gIGVuY29kZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICB9XG5cbiAgZGVjb2RlS2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gIH1cblxuICBkZWNvZGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIElDaGVyY2hlIHNlYXJjaCBzb3VyY2VcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElDaGVyY2hlU2VhcmNoU291cmNlIGV4dGVuZHMgU2VhcmNoU291cmNlIGltcGxlbWVudHMgVGV4dFNlYXJjaCB7XG4gIHN0YXRpYyBpZCA9ICdpY2hlcmNoZSc7XG4gIHN0YXRpYyB0eXBlID0gRkVBVFVSRTtcbiAgc3RhdGljIHByb3BlcnRpZXNCbGFja2xpc3Q6IHN0cmluZ1tdID0gW107XG4gIHRpdGxlJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuXG4gIHByaXZhdGUgaGFzaHRhZ3NMaWV1eFRvS2VlcCA9IFtdO1xuXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlJC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ29wdGlvbnMnKSBvcHRpb25zOiBTZWFyY2hTb3VyY2VPcHRpb25zLFxuICAgIEBJbmplY3QoSUNoZXJjaGVTZWFyY2hSZXN1bHRGb3JtYXR0ZXIpXG4gICAgcHJpdmF0ZSBmb3JtYXR0ZXI6IElDaGVyY2hlU2VhcmNoUmVzdWx0Rm9ybWF0dGVyLFxuICAgIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihvcHRpb25zLCBzdG9yYWdlU2VydmljZSk7XG5cbiAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGVcbiAgICAgIC5nZXQodGhpcy5vcHRpb25zLnRpdGxlKVxuICAgICAgLnN1YnNjcmliZSgodGl0bGUpID0+IHRoaXMudGl0bGUkLm5leHQodGl0bGUpKTtcblxuICAgIGNvbnN0IGF1dGhTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0KEF1dGhTZXJ2aWNlKTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5sZW5ndGgpIHtcbiAgICAgIGlmICghYXV0aFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5nZXRBbGxvd2VkVHlwZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmdldEFsbG93ZWRUeXBlcygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBJQ2hlcmNoZVNlYXJjaFNvdXJjZS5pZDtcbiAgfVxuXG4gIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSUNoZXJjaGVTZWFyY2hTb3VyY2UudHlwZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXREZWZhdWx0T3B0aW9ucygpOiBTZWFyY2hTb3VyY2VPcHRpb25zIHtcbiAgICBjb25zdCBsaW1pdCA9XG4gICAgICB0aGlzLm9wdGlvbnMucGFyYW1zICYmIHRoaXMub3B0aW9ucy5wYXJhbXMubGltaXRcbiAgICAgICAgPyBOdW1iZXIodGhpcy5vcHRpb25zLnBhcmFtcy5saW1pdClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgZWNtYXggPVxuICAgICAgdGhpcy5vcHRpb25zLnBhcmFtcyAmJiB0aGlzLm9wdGlvbnMucGFyYW1zLmVjbWF4XG4gICAgICAgID8gTnVtYmVyKHRoaXMub3B0aW9ucy5wYXJhbXMuZWNtYXgpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgdHlwZXMgPSB0aGlzLm9wdGlvbnMucGFyYW1zPy50eXBlXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnBhcmFtcy50eXBlLnJlcGxhY2UoL1xccy9nLCAnJykudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpXG4gICAgICAgIDogW1xuICAgICAgICAgICAgJ2FkcmVzc2VzJyxcbiAgICAgICAgICAgICdjb2Rlcy1wb3N0YXV4JyxcbiAgICAgICAgICAgICdyb3V0ZXMnLFxuICAgICAgICAgICAgJ2ludGVyc2VjdGlvbnMnLFxuICAgICAgICAgICAgJ211bmljaXBhbGl0ZXMnLFxuICAgICAgICAgICAgJ21yYycsXG4gICAgICAgICAgICAncmVnYWRtaW4nLFxuICAgICAgICAgICAgJ2xpZXV4J1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS5uYW1lJyxcbiAgICAgIHNlYXJjaFVybDogJ2h0dHBzOi8vZ2VvZWdsLm1zcC5nb3V2LnFjLmNhL2FwaXMvaWNoZXJjaGUnLFxuICAgICAgc2V0dGluZ3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgdGl0bGU6ICdyZXN1bHRzIHR5cGUnLFxuICAgICAgICAgIG5hbWU6ICd0eXBlJyxcbiAgICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLmFkZHJlc3MnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2FkcmVzc2VzJyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZignYWRyZXNzZXMnKSAhPT0gLTEsXG4gICAgICAgICAgICAgIGhhc2h0YWdzOiBbJ2FkcmVzc2UnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLm9sZEFkZHJlc3MnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2FuY2llbm5lcy1hZHJlc3NlcycsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHR5cGVzLmluZGV4T2YoJ2FuY2llbm5lcy1hZHJlc3NlcycpICE9PSAtMSxcbiAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsnYW5jaWVubmVzLWFkcmVzc2VzJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnaWdvLmdlby5zZWFyY2guaWNoZXJjaGUudHlwZS5wb3N0YWxDb2RlJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdjb2Rlcy1wb3N0YXV4JyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZignY29kZXMtcG9zdGF1eCcpICE9PSAtMSxcbiAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsnY29kZS1wb3N0YWwnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLnJvYWQnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ3JvdXRlcycsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHR5cGVzLmluZGV4T2YoJ3JvdXRlcycpICE9PSAtMSxcbiAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsncm91dGUnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLmludGVyc2VjdGlvbicsXG4gICAgICAgICAgICAgIHZhbHVlOiAnaW50ZXJzZWN0aW9ucycsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHR5cGVzLmluZGV4T2YoJ2ludGVyc2VjdGlvbnMnKSAhPT0gLTEsXG4gICAgICAgICAgICAgIGhhc2h0YWdzOiBbJ2ludGVyc2VjdGlvbicsICcrJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnaWdvLmdlby5zZWFyY2guaWNoZXJjaGUudHlwZS5jaXR5JyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdtdW5pY2lwYWxpdGVzJyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZignbXVuaWNpcGFsaXRlcycpICE9PSAtMSxcbiAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsnbXVuaWNpcGFsaXTDqScsICdtdW4nXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLm9sZENpdHknLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2FuY2llbm5lcy1tdW5pY2lwYWxpdGVzJyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZignYW5jaWVubmVzLW11bmljaXBhbGl0ZXMnKSAhPT0gLTEsXG4gICAgICAgICAgICAgIGhhc2h0YWdzOiBbJ2FuY2llbm5lcy1tdW5pY2lwYWxpdGVzJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnaWdvLmdlby5zZWFyY2guaWNoZXJjaGUudHlwZS5tcmMnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ21yYycsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHR5cGVzLmluZGV4T2YoJ21yYycpICE9PSAtMSxcbiAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsnbXJjJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnaWdvLmdlby5zZWFyY2guaWNoZXJjaGUudHlwZS5yZWdhZG1pbicsXG4gICAgICAgICAgICAgIHZhbHVlOiAncmVnYWRtaW4nLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0eXBlcy5pbmRleE9mKCdyZWdhZG1pbicpICE9PSAtMSxcbiAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsncsOpZ2lvbi1hZG1pbmlzdHJhdGl2ZScsICdyZWdhZG1pbiddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLmljaGVyY2hlLnR5cGUuZW50cmVwcmlzZScsXG4gICAgICAgICAgICAgIHZhbHVlOiAnZW50cmVwcmlzZXMnLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0eXBlcy5pbmRleE9mKCdlbnRyZXByaXNlcycpICE9PSAtMSxcbiAgICAgICAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsnZW50cmVwcmlzZSddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLmljaGVyY2hlLnR5cGUucGxhY2UnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2xpZXV4JyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZignbGlldXgnKSAhPT0gLTEsXG4gICAgICAgICAgICAgIGhhc2h0YWdzOiBbJ2xpZXUnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLmV4aXQnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ3NvcnRpZXMtYXV0b3JvdXRlJyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZignc29ydGllcy1hdXRvcm91dGUnKSAhPT0gLTEsXG4gICAgICAgICAgICAgIGhhc2h0YWdzOiBbJ3NvcnRpZScsICdzb3J0aWVzJywgJ2V4aXQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLmttJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdib3JuZXMta20nLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0eXBlcy5pbmRleE9mKCdib3JuZXMta20nKSAhPT0gLTEsXG4gICAgICAgICAgICAgIGhhc2h0YWdzOiBbJ2Jvcm5lJywgJ2Jvcm5lcycsICdyZXDDqHJlJywgJ2ttJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnaWdvLmdlby5zZWFyY2guaWNoZXJjaGUudHlwZS5nY2MnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2Jvcm5lcy1nY2MnLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0eXBlcy5pbmRleE9mKCdib3JuZXMtZ2NjJykgIT09IC0xLFxuICAgICAgICAgICAgICBoYXNodGFnczogWydib3JuZScsICdib3JuZXMnLCAncmVww6hyZScsICdnY2MnLCAnY2NnJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnaWdvLmdlby5zZWFyY2guaWNoZXJjaGUudHlwZS5jbicsXG4gICAgICAgICAgICAgIHZhbHVlOiAnYm9ybmVzLWNuJyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZignYm9ybmVzLWNuJykgIT09IC0xLFxuICAgICAgICAgICAgICBoYXNodGFnczogWydib3JuZScsICdib3JuZXMnLCAnY24nXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLnN1bWknLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2Jvcm5lcy1zdW1pJyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZignYm9ybmVzLXN1bWknKSAhPT0gLTEsXG4gICAgICAgICAgICAgIGhhc2h0YWdzOiBbJ2Jvcm5lJywgJ2Jvcm5lcycsICdzdW1pJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnaWdvLmdlby5zZWFyY2guaWNoZXJjaGUudHlwZS5ocScsXG4gICAgICAgICAgICAgIHZhbHVlOiAnaHEnLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0eXBlcy5pbmRleE9mKCdocScpICE9PSAtMSxcbiAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsnaHEnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLmNhZGFzdHJlJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdjYWRhc3RyZScsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHR5cGVzLmluZGV4T2YoJ2NhZGFzdHJlJykgIT09IC0xLFxuICAgICAgICAgICAgICBoYXNodGFnczogWydjYWRhc3RyZSddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3JhZGlvYnV0dG9uJyxcbiAgICAgICAgICB0aXRsZTogJ3Jlc3VsdHMgbGltaXQnLFxuICAgICAgICAgIG5hbWU6ICdsaW1pdCcsXG4gICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnMScsXG4gICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICBlbmFibGVkOiBsaW1pdCA9PT0gMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICc1JyxcbiAgICAgICAgICAgICAgdmFsdWU6IDUsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IGxpbWl0ID09PSA1IHx8ICFsaW1pdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcxMCcsXG4gICAgICAgICAgICAgIHZhbHVlOiAxMCxcbiAgICAgICAgICAgICAgZW5hYmxlZDogbGltaXQgPT09IDEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzI1JyxcbiAgICAgICAgICAgICAgdmFsdWU6IDI1LFxuICAgICAgICAgICAgICBlbmFibGVkOiBsaW1pdCA9PT0gMjVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnNTAnLFxuICAgICAgICAgICAgICB2YWx1ZTogNTAsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IGxpbWl0ID09PSA1MFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdyYWRpb2J1dHRvbicsXG4gICAgICAgICAgdGl0bGU6ICdlY21heCcsXG4gICAgICAgICAgbmFtZTogJ2VjbWF4JyxcbiAgICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcxMCAlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgICBlbmFibGVkOiBlY21heCA9PT0gMTBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnMzAgJScsXG4gICAgICAgICAgICAgIHZhbHVlOiAzMCxcbiAgICAgICAgICAgICAgZW5hYmxlZDogZWNtYXggPT09IDMwIHx8ICFlY21heFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICc1MCAlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IDUwLFxuICAgICAgICAgICAgICBlbmFibGVkOiBlY21heCA9PT0gNTBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnNzUgJScsXG4gICAgICAgICAgICAgIHZhbHVlOiA3NSxcbiAgICAgICAgICAgICAgZW5hYmxlZDogZWNtYXggPT09IDc1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzEwMCAlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgICAgICAgICAgZW5hYmxlZDogZWNtYXggPT09IDEwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdyYWRpb2J1dHRvbicsXG4gICAgICAgICAgdGl0bGU6ICdyZXN0cmljdEV4dGVudCcsXG4gICAgICAgICAgbmFtZTogJ2xvYycsXG4gICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnaWdvLmdlby5zZWFyY2guaWNoZXJjaGUucmVzdHJpY3RFeHRlbnQubWFwJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICd0cnVlJyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnaWdvLmdlby5zZWFyY2guaWNoZXJjaGUucmVzdHJpY3RFeHRlbnQucXVlYmVjJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdmYWxzZScsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhIGxvY2F0aW9uIGJ5IG5hbWUgb3Iga2V5d29yZFxuICAgKiBAcGFyYW0gdGVybSBMb2NhdGlvbiBuYW1lIG9yIGtleXdvcmRcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSBvZiA8U2VhcmNoUmVzdWx0PEZlYXR1cmU+W11cbiAgICovXG4gIEBDYWNoZWFibGUoe1xuICAgIG1heENhY2hlQ291bnQ6IDIwXG4gIH0pXG4gIHNlYXJjaChcbiAgICB0ZXJtOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IFRleHRTZWFyY2hPcHRpb25zXG4gICk6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0PEZlYXR1cmU+W10+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmNvbXB1dGVSZXF1ZXN0UGFyYW1zKHRlcm0sIG9wdGlvbnMgfHwge30pO1xuICAgIGlmICghcGFyYW1zLmdldCgndHlwZScpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnBhcmFtcy5wYWdlID0gcGFyYW1zLmdldCgncGFnZScpIHx8ICcxJztcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuc2VhcmNoVXJsfS9nZW9jb2RlYCwgeyBwYXJhbXMgfSkucGlwZShcbiAgICAgIG1hcCgocmVzcG9uc2U6IElDaGVyY2hlUmVzcG9uc2UpID0+IHRoaXMuZXh0cmFjdFJlc3VsdHMocmVzcG9uc2UsIHRlcm0pKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBlcnIuZXJyb3IudG9EaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgZXJyLmVycm9yLnRpdGxlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgdGhpcy5nZXREZWZhdWx0T3B0aW9ucygpLnRpdGxlXG4gICAgICAgICk7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWxsb3dlZFR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoYCR7dGhpcy5zZWFyY2hVcmx9L3R5cGVzYClcbiAgICAgIC5zdWJzY3JpYmUoKHR5cGVzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlU2V0dGluZyA9IHRoaXMuc2V0dGluZ3MuZmluZCgocykgPT4gcy5uYW1lID09PSAndHlwZScpO1xuICAgICAgICB0eXBlU2V0dGluZy52YWx1ZXMuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7di52YWx1ZX0oXFxcXC58JClgKTtcbiAgICAgICAgICBjb25zdCB0eXBlc01hdGNoZWQgPSB0eXBlcy5maWx0ZXIoKHZhbHVlKSA9PiByZWdleC50ZXN0KHZhbHVlKSk7XG4gICAgICAgICAgdi5hdmFpbGFibGUgPSB0eXBlc01hdGNoZWQubGVuZ3RoID4gMDtcbiAgICAgICAgICBpZiAodi52YWx1ZSA9PT0gJ2xpZXV4Jykge1xuICAgICAgICAgICAgdGhpcy5oYXNodGFnc0xpZXV4VG9LZWVwID0gW1xuICAgICAgICAgICAgICAuLi4obmV3IFNldChcbiAgICAgICAgICAgICAgICB0eXBlc01hdGNoZWRcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHQpID0+IHQuc3BsaXQoJy4nKSlcbiAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigodCkgPT4gdCAhPT0gJ2xpZXV4JylcbiAgICAgICAgICAgICAgKSBhcyBhbnkpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1Gcm9tU2V0dGluZyh0eXBlU2V0dGluZywgZmFsc2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVSZXF1ZXN0UGFyYW1zKFxuICAgIHRlcm06IHN0cmluZyxcbiAgICBvcHRpb25zOiBUZXh0U2VhcmNoT3B0aW9uc1xuICApOiBIdHRwUGFyYW1zIHtcbiAgICBjb25zdCBxdWVyeVBhcmFtczogYW55ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgZ2VvbWV0cnk6IHRydWUsXG4gICAgICAgIGJib3g6IHRydWUsXG4gICAgICAgIGljb246IHRydWUsXG4gICAgICAgIHR5cGU6XG4gICAgICAgICAgJ2FkcmVzc2VzLGNvZGVzLXBvc3RhdXgsbXVuaWNpcGFsaXRlcyxtcmMscmVnYWRtaW4sbGlldXgsZW50cmVwcmlzZXMsYm9ybmVzLXN1bWknXG4gICAgICB9LFxuICAgICAgdGhpcy5wYXJhbXMsXG4gICAgICB0aGlzLmNvbXB1dGVPcHRpb25zUGFyYW0odGVybSwgb3B0aW9ucyB8fCB7fSkucGFyYW1zLFxuICAgICAge1xuICAgICAgICBxOiB0aGlzLmNvbXB1dGVUZXJtKHRlcm0pLFxuICAgICAgICBwYWdlOiBvcHRpb25zLnBhZ2VcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHF1ZXJ5UGFyYW1zLmxvYyA9PT0gJ3RydWUnKSB7XG4gICAgICBjb25zdCBbeE1pbiwgeU1pbiwgeE1heCwgeU1heF0gPSBvcHRpb25zLmV4dGVudDtcbiAgICAgIHF1ZXJ5UGFyYW1zLmxvYyA9IGAke3hNaW59LCR7eU1pbn07JHt4TWF4fSwke3lNaW59OyR7eE1heH0sJHt5TWF4fTske3hNaW59LCR7eU1heH07JHt4TWlufSwke3lNaW59YDtcbiAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1zLmxvYyA9PT0gJ2ZhbHNlJykge1xuICAgICAgZGVsZXRlIHF1ZXJ5UGFyYW1zLmxvYztcbiAgICB9XG5cbiAgICBpZiAoLyNbQS1aYS16XSsvLnRlc3QocXVlcnlQYXJhbXMucSkpIHtcbiAgICAgIHF1ZXJ5UGFyYW1zLnR5cGUgPSAnbGlldXgnO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tT2JqZWN0OiBPYmplY3RVdGlscy5yZW1vdmVVbmRlZmluZWQocXVlcnlQYXJhbXMpLFxuICAgICAgZW5jb2RlcjogbmV3IElnb0h0dHBQYXJhbWV0ZXJDb2RlYygpXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RSZXN1bHRzKHJlc3BvbnNlOiBJQ2hlcmNoZVJlc3BvbnNlLCB0ZXJtOiBzdHJpbmcpOiBTZWFyY2hSZXN1bHQ8RmVhdHVyZT5bXSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmZlYXR1cmVzLm1hcCgoZGF0YTogSUNoZXJjaGVEYXRhKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIuZm9ybWF0UmVzdWx0KHRoaXMuZGF0YVRvUmVzdWx0KGRhdGEsIHRlcm0sIHJlc3BvbnNlKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRhdGFUb1Jlc3VsdChcbiAgICBkYXRhOiBJQ2hlcmNoZURhdGEsXG4gICAgdGVybTogc3RyaW5nLFxuICAgIHJlc3BvbnNlPzogSUNoZXJjaGVSZXNwb25zZVxuICApOiBTZWFyY2hSZXN1bHQ8RmVhdHVyZT4ge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmNvbXB1dGVQcm9wZXJ0aWVzKGRhdGEpO1xuICAgIGNvbnN0IGlkID0gW3RoaXMuZ2V0SWQoKSwgcHJvcGVydGllcy50eXBlLCBwcm9wZXJ0aWVzLmNvZGVdLmpvaW4oJy4nKTtcblxuICAgIGNvbnN0IHRpdGxlSHRtbCA9IGRhdGEuaGlnaGxpZ2h0LnRpdGxlIHx8IGRhdGEucHJvcGVydGllcy5ub207XG4gICAgY29uc3Qgc3VidGl0bGVIdG1sID0gZGF0YS5oaWdobGlnaHQudGl0bGUyXG4gICAgICA/ICcgPHNtYWxsPiAnICsgZGF0YS5oaWdobGlnaHQudGl0bGUyICsgJzwvc21hbGw+J1xuICAgICAgOiAnJztcbiAgICBjb25zdCBzdWJ0aXRsZUh0bWwyID0gZGF0YS5oaWdobGlnaHQudGl0bGUzXG4gICAgICA/ICc8YnI+PHNtYWxsPiAnICsgZGF0YS5oaWdobGlnaHQudGl0bGUzICsgJzwvc21hbGw+J1xuICAgICAgOiAnJztcblxuICAgIHJldHVybiB7XG4gICAgICBzb3VyY2U6IHRoaXMsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IEZFQVRVUkUsXG4gICAgICAgIHByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICBnZW9tZXRyeTogZGF0YS5nZW9tZXRyeSxcbiAgICAgICAgZXh0ZW50OiBkYXRhLmJib3gsXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB0aXRsZTogZGF0YS5wcm9wZXJ0aWVzLm5vbVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0YToge1xuICAgICAgICBkYXRhVHlwZTogRkVBVFVSRSxcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlOiBkYXRhLnByb3BlcnRpZXMubm9tLFxuICAgICAgICB0aXRsZUh0bWw6IHRpdGxlSHRtbCArIHN1YnRpdGxlSHRtbCArIHN1YnRpdGxlSHRtbDIsXG4gICAgICAgIGljb246IGRhdGEuaWNvbiB8fCAnbWFwLW1hcmtlcicsXG4gICAgICAgIHNjb3JlOiBkYXRhLnNjb3JlIHx8IGNvbXB1dGVUZXJtU2ltaWxhcml0eSh0ZXJtLnRyaW0oKSwgZGF0YS5wcm9wZXJ0aWVzLm5vbSksXG4gICAgICAgIG5leHRQYWdlOlxuICAgICAgICAgIHJlc3BvbnNlLmZlYXR1cmVzLmxlbmd0aCAlICt0aGlzLm9wdGlvbnMucGFyYW1zLmxpbWl0ID09PSAwICYmXG4gICAgICAgICAgK3RoaXMub3B0aW9ucy5wYXJhbXMucGFnZSA8IDEwXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZVByb3BlcnRpZXMoZGF0YTogSUNoZXJjaGVEYXRhKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IE9iamVjdFV0aWxzLnJlbW92ZUtleXMoXG4gICAgICBkYXRhLnByb3BlcnRpZXMsXG4gICAgICBJQ2hlcmNoZVNlYXJjaFNvdXJjZS5wcm9wZXJ0aWVzQmxhY2tsaXN0XG4gICAgKTtcblxuICAgIGlmICghZGF0YS5nZW9tZXRyeSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyB0eXBlOiBkYXRhLmluZGV4IH0sIHByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGdvb2dsZUxpbmtzUHJvcGVydGllczoge1xuICAgICAgR29vZ2xlTWFwczogc3RyaW5nO1xuICAgICAgR29vZ2xlU3RyZWV0Vmlldz86IHN0cmluZztcbiAgICB9ID0ge1xuICAgICAgR29vZ2xlTWFwczogJydcbiAgICB9O1xuXG4gICAgbGV0IGdvb2dsZU1hcHM7XG4gICAgaWYgKGRhdGEuZ2VvbWV0cnkudHlwZSA9PT0gJ1BvaW50Jykge1xuICAgICAgZ29vZ2xlTWFwcyA9IEdvb2dsZUxpbmtzLmdldEdvb2dsZU1hcHNDb29yZExpbmsoXG4gICAgICAgIGRhdGEuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF0sXG4gICAgICAgIGRhdGEuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMV1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRPbkZlYXR1cmUoZGF0YS5nZW9tZXRyeSk7XG4gICAgICBnb29nbGVNYXBzID0gR29vZ2xlTGlua3MuZ2V0R29vZ2xlTWFwc0Nvb3JkTGluayhcbiAgICAgICAgcG9pbnQuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF0sXG4gICAgICAgIHBvaW50Lmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBnb29nbGVNYXBzTm9tO1xuICAgIGlmIChkYXRhLmluZGV4ID09PSAncm91dGVzJykge1xuICAgICAgZ29vZ2xlTWFwc05vbSA9IEdvb2dsZUxpbmtzLmdldEdvb2dsZU1hcHNOYW1lTGluayhcbiAgICAgICAgZGF0YS5wcm9wZXJ0aWVzLm5vbSArICcsICcgKyBkYXRhLnByb3BlcnRpZXMubXVuaWNpcGFsaXRlXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5pbmRleCA9PT0gJ211bmljaXBhbGl0ZXMnKSB7XG4gICAgICBnb29nbGVNYXBzTm9tID0gR29vZ2xlTGlua3MuZ2V0R29vZ2xlTWFwc05hbWVMaW5rKFxuICAgICAgICBkYXRhLnByb3BlcnRpZXMubm9tICsgJywgJyArICd2aWxsZSdcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChkYXRhLmluZGV4ID09PSAnbXJjJykge1xuICAgICAgZ29vZ2xlTWFwc05vbSA9IEdvb2dsZUxpbmtzLmdldEdvb2dsZU1hcHNOYW1lTGluayhcbiAgICAgICAgJ21yYysnICsgZGF0YS5wcm9wZXJ0aWVzLm5vbVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuaW5kZXggPT09ICdyZWdhZG1pbicpIHtcbiAgICAgIGdvb2dsZU1hcHNOb20gPSBHb29nbGVMaW5rcy5nZXRHb29nbGVNYXBzTmFtZUxpbmsoXG4gICAgICAgIGRhdGEucHJvcGVydGllcy5ub20gKyAnLCtRQydcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdvb2dsZU1hcHNOb20gPSBHb29nbGVMaW5rcy5nZXRHb29nbGVNYXBzTmFtZUxpbmsoXG4gICAgICAgIGRhdGEucHJvcGVydGllcy5ub20gfHwgZGF0YS5oaWdobGlnaHQudGl0bGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZ29vZ2xlTGlua3NQcm9wZXJ0aWVzLkdvb2dsZU1hcHMgPVxuICAgICAgJzxhIGhyZWY9JyArXG4gICAgICBnb29nbGVNYXBzICtcbiAgICAgICcgdGFyZ2V0PVwiX2JsYW5rXCI+JyArXG4gICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5zZWFyY2hCeUNvb3JkJykgK1xuICAgICAgJzwvYT4gPGJyIC8+IDxhIGhyZWY9JyArXG4gICAgICBnb29nbGVNYXBzTm9tICtcbiAgICAgICcgdGFyZ2V0PVwiX2JsYW5rXCI+JyArXG4gICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5zZWFyY2hCeU5hbWUnKSArXG4gICAgICAnPC9hPic7XG5cbiAgICBpZiAoZGF0YS5nZW9tZXRyeS50eXBlID09PSAnUG9pbnQnKSB7XG4gICAgICBnb29nbGVMaW5rc1Byb3BlcnRpZXMuR29vZ2xlU3RyZWV0VmlldyA9IEdvb2dsZUxpbmtzLmdldEdvb2dsZVN0cmVldFZpZXdMaW5rKFxuICAgICAgICBkYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdLFxuICAgICAgICBkYXRhLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRpbmc6IHtcbiAgICAgIFJvdXRlOiBzdHJpbmc7XG4gICAgfSA9IHtcbiAgICAgIFJvdXRlOlxuICAgICAgICAnPHNwYW4gY2xhc3M9XCJyb3V0aW5nXCI+IDx1PicgK1xuICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5zZWVSb3V0aW5nJykgK1xuICAgICAgICAnPC91PiA8L3NwYW4+J1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgdHlwZTogZGF0YS5pbmRleCB9LFxuICAgICAgcHJvcGVydGllcyxcbiAgICAgIGdvb2dsZUxpbmtzUHJvcGVydGllcyxcbiAgICAgIHJvdXRpbmdcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBoYXNodGFnIGZyb20gcXVlcnlcbiAgICogQHBhcmFtIHRlcm0gUXVlcnkgd2l0aCBoYXNodGFnXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVUZXJtKHRlcm06IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gS2VlcCBoYXNodGFncyBmb3IgXCJsaWV1eFwiXG4gICAgY29uc3QgaGFzaHRhZ3MgPSB0ZXJtLm1hdGNoKC8oI1tBLVphLXpdKykvZykgfHwgW107XG4gICAgbGV0IGtlZXAgPSBmYWxzZTtcbiAgICBrZWVwID0gaGFzaHRhZ3Muc29tZSgoaGFzaHRhZykgPT4ge1xuICAgICAgY29uc3QgaGFzaHRhZ0tleSA9IGhhc2h0YWcuc3Vic3RyaW5nKDEpO1xuICAgICAgcmV0dXJuIHRoaXMuaGFzaHRhZ3NMaWV1eFRvS2VlcC5zb21lKFxuICAgICAgICAoaCkgPT5cbiAgICAgICAgICBoXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJykgPT09XG4gICAgICAgICAgaGFzaHRhZ0tleVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgaWYgKCFrZWVwKSB7XG4gICAgICB0ZXJtID0gdGVybS5yZXBsYWNlKC8oI1tBLVphLXpdKykvZywgJycpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtLnJlcGxhY2UoL1teXFx3w4Atw78gIVxcLVxcK1xcKFxcKVxcLlxcL8K9wrzCviwnI10rL2csICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaGFzaHRhZyB0byBwYXJhbSBpZiB2YWxpZFxuICAgKiBAcGFyYW0gdGVybSBRdWVyeSB3aXRoIGhhc2h0YWdcbiAgICogQHBhcmFtIG9wdGlvbnMgVGV4dFNlYXJjaE9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgY29tcHV0ZU9wdGlvbnNQYXJhbShcbiAgICB0ZXJtOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVGV4dFNlYXJjaE9wdGlvbnNcbiAgKTogVGV4dFNlYXJjaE9wdGlvbnMge1xuICAgIGNvbnN0IGhhc2h0YWdzID0gc3VwZXIuZ2V0SGFzaHRhZ3NWYWxpZCh0ZXJtLCAndHlwZScpO1xuICAgIGlmIChoYXNodGFncykge1xuICAgICAgb3B0aW9ucy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMucGFyYW1zIHx8IHt9LCB7XG4gICAgICAgIHR5cGU6IGhhc2h0YWdzLmpvaW4oJywnKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cbn1cblxuLyoqXG4gKiBJQ2hlcmNoZVJldmVyc2Ugc2VhcmNoIHNvdXJjZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSUNoZXJjaGVSZXZlcnNlU2VhcmNoU291cmNlIGV4dGVuZHMgU2VhcmNoU291cmNlXG4gIGltcGxlbWVudHMgUmV2ZXJzZVNlYXJjaCB7XG4gIHN0YXRpYyBpZCA9ICdpY2hlcmNoZXJldmVyc2UnO1xuICBzdGF0aWMgdHlwZSA9IEZFQVRVUkU7XG4gIHN0YXRpYyBwcm9wZXJ0aWVzQmxhY2tsaXN0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIHRpdGxlJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlJC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ29wdGlvbnMnKSBvcHRpb25zOiBTZWFyY2hTb3VyY2VPcHRpb25zLFxuICAgIGluamVjdG9yOiBJbmplY3RvcixcbiAgKSB7XG4gICAgc3VwZXIob3B0aW9ucywgc3RvcmFnZVNlcnZpY2UpO1xuXG4gICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlXG4gICAgICAuZ2V0KHRoaXMub3B0aW9ucy50aXRsZSlcbiAgICAgIC5zdWJzY3JpYmUoKHRpdGxlKSA9PiB0aGlzLnRpdGxlJC5uZXh0KHRpdGxlKSk7XG5cbiAgICBjb25zdCBhdXRoU2VydmljZSA9IGluamVjdG9yLmdldChBdXRoU2VydmljZSk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubGVuZ3RoKSB7XG4gICAgICBpZiAoIWF1dGhTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZ2V0QWxsb3dlZFR5cGVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdXRoU2VydmljZS5hdXRoZW50aWNhdGUkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRBbGxvd2VkVHlwZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSUNoZXJjaGVSZXZlcnNlU2VhcmNoU291cmNlLmlkO1xuICB9XG5cbiAgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBJQ2hlcmNoZVJldmVyc2VTZWFyY2hTb3VyY2UudHlwZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXREZWZhdWx0T3B0aW9ucygpOiBTZWFyY2hTb3VyY2VPcHRpb25zIHtcbiAgICBjb25zdCB0eXBlcyA9XG4gICAgICB0aGlzLm9wdGlvbnMucGFyYW1zICYmIHRoaXMub3B0aW9ucy5wYXJhbXMudHlwZVxuICAgICAgICA/IHRoaXMub3B0aW9ucy5wYXJhbXMudHlwZS5yZXBsYWNlKC9cXHMvZywgJycpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKVxuICAgICAgICA6IFsnYWRyZXNzZXMnLCAnbXVuaWNpcGFsaXRlcycsICdtcmMnLCAncmVnYWRtaW4nXTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLmljaGVyY2hlUmV2ZXJzZS5uYW1lJyxcbiAgICAgIHNlYXJjaFVybDogJ2h0dHBzOi8vZ2VvZWdsLm1zcC5nb3V2LnFjLmNhL2FwaXMvdGVycmFwaScsXG4gICAgICBzZXR0aW5nczogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICB0aXRsZTogJ3Jlc3VsdHMgdHlwZScsXG4gICAgICAgICAgbmFtZTogJ3R5cGUnLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLmljaGVyY2hlLnR5cGUuYWRkcmVzcycsXG4gICAgICAgICAgICAgIHZhbHVlOiAnYWRyZXNzZXMnLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0eXBlcy5pbmRleE9mKCdhZHJlc3NlcycpICE9PSAtMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLnJvYWQnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ3JvdXRlcycsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHR5cGVzLmluZGV4T2YoJ3JvdXRlcycpICE9PSAtMSxcbiAgICAgICAgICAgICAgYXZhaWxhYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLmRpc3RyaWN0JyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdhcnJvbmRpc3NlbWVudHMnLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0eXBlcy5pbmRleE9mKCdhcnJvbmRpc3NlbWVudHMnKSAhPT0gLTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnaWdvLmdlby5zZWFyY2guaWNoZXJjaGUudHlwZS5jaXR5JyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdtdW5pY2lwYWxpdGVzJyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZignbXVuaWNpcGFsaXRlcycpICE9PSAtMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pY2hlcmNoZS50eXBlLm1yYycsXG4gICAgICAgICAgICAgIHZhbHVlOiAnbXJjJyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZignbXJjJykgIT09IC0xXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLmljaGVyY2hlLnR5cGUucmVnYWRtaW4nLFxuICAgICAgICAgICAgICB2YWx1ZTogJ3JlZ2FkbWluJyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHlwZXMuaW5kZXhPZigncmVnYWRtaW4nKSAhPT0gLTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAncmFkaW9idXR0b24nLFxuICAgICAgICAgIHRpdGxlOiAncmFkaXVzJyxcbiAgICAgICAgICBuYW1lOiAnYnVmZmVySW5wdXQnLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzEwMCBtJyxcbiAgICAgICAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgICAgICAgICAgZW5hYmxlZDogIXRoaXMub3B0aW9ucy5kaXN0YW5jZSB8fCB0aGlzLm9wdGlvbnMuZGlzdGFuY2UgPT09IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICc1MDAgbScsXG4gICAgICAgICAgICAgIHZhbHVlOiA1MDAsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMub3B0aW9ucy5kaXN0YW5jZSA9PT0gNTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzEga20nLFxuICAgICAgICAgICAgICB2YWx1ZTogMTAwMCxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdGhpcy5vcHRpb25zLmRpc3RhbmNlID09PSAxMDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzIga20nLFxuICAgICAgICAgICAgICB2YWx1ZTogMjAwMCxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdGhpcy5vcHRpb25zLmRpc3RhbmNlID09PSAyMDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzUga20nLFxuICAgICAgICAgICAgICB2YWx1ZTogNTAwMCxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdGhpcy5vcHRpb25zLmRpc3RhbmNlID09PSA1MDAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggYSBsb2NhdGlvbiBieSBjb29yZGluYXRlc1xuICAgKiBAcGFyYW0gbG9uTGF0IExvY2F0aW9uIGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSBkaXN0YW5jZSBTZWFyY2ggcmFpZHVzIGFyb3VuZCBsb25MYXRcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSBvZiA8U2VhcmNoUmVzdWx0PEZlYXR1cmU+W11cbiAgICovXG4gIEBDYWNoZWFibGUoe1xuICAgIG1heENhY2hlQ291bnQ6IDIwXG4gIH0pXG4gIHJldmVyc2VTZWFyY2goXG4gICAgbG9uTGF0OiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIG9wdGlvbnM/OiBSZXZlcnNlU2VhcmNoT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdDxGZWF0dXJlPltdPiB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb21wdXRlUmVxdWVzdFBhcmFtcyhsb25MYXQsIG9wdGlvbnMgfHwge30pO1xuICAgIGlmICghcGFyYW1zLmdldCgndHlwZScpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5zZWFyY2hVcmx9L2xvY2F0ZWAsIHsgcGFyYW1zIH0pLnBpcGUoXG4gICAgICBtYXAoKHJlc3BvbnNlOiBJQ2hlcmNoZVJldmVyc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRyYWN0UmVzdWx0cyhyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldEFsbG93ZWRUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMuc2VhcmNoVXJsfS90eXBlc2ApXG4gICAgICAuc3Vic2NyaWJlKCh0eXBlczogc3RyaW5nW10pID0+IHtcbiAgICAgICAgY29uc3QgdHlwZVNldHRpbmcgPSB0aGlzLnNldHRpbmdzLmZpbmQoKHMpID0+IHMubmFtZSA9PT0gJ3R5cGUnKTtcbiAgICAgICAgdHlwZVNldHRpbmcudmFsdWVzLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICB2LmF2YWlsYWJsZSA9IHR5cGVzLmluZGV4T2Yodi52YWx1ZSBhcyBzdHJpbmcpID4gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFBhcmFtRnJvbVNldHRpbmcodHlwZVNldHRpbmcsIGZhbHNlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlUmVxdWVzdFBhcmFtcyhcbiAgICBsb25MYXQ6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgb3B0aW9ucz86IFJldmVyc2VTZWFyY2hPcHRpb25zXG4gICk6IEh0dHBQYXJhbXMge1xuICAgIGlmIChvcHRpb25zLmRpc3RhbmNlIHx8IHRoaXMub3B0aW9ucy5kaXN0YW5jZSkge1xuICAgICAgb3B0aW9ucy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMucGFyYW1zIHx8IHt9LCB7XG4gICAgICAgIGJ1ZmZlcklucHV0OiBvcHRpb25zLmRpc3RhbmNlIHx8IHRoaXMub3B0aW9ucy5kaXN0YW5jZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21PYmplY3Q6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBsb2M6IGxvbkxhdC5qb2luKCcsJyksXG4gICAgICAgICAgc29ydDogJ2Rpc3RhbmNlJyxcbiAgICAgICAgICBnZW9tZXRyeTogdHJ1ZSxcbiAgICAgICAgICBpY29uOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMucGFyYW1zIHx8IHt9LFxuICAgICAgICB0aGlzLnBhcmFtc1xuICAgICAgKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0UmVzdWx0cyhcbiAgICByZXNwb25zZTogSUNoZXJjaGVSZXZlcnNlUmVzcG9uc2VcbiAgKTogU2VhcmNoUmVzdWx0PEZlYXR1cmU+W10ge1xuICAgIHJldHVybiByZXNwb25zZS5mZWF0dXJlcy5tYXAoKGRhdGE6IElDaGVyY2hlUmV2ZXJzZURhdGEpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFUb1Jlc3VsdChkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VidGl0bGUoZGF0YTogSUNoZXJjaGVSZXZlcnNlRGF0YSkge1xuICAgIGlmICghdGhpcy5zZXR0aW5ncy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IHN1YnRpdGxlID0gJyc7XG4gICAgc3dpdGNoIChkYXRhLnByb3BlcnRpZXMudHlwZSkge1xuICAgICAgY2FzZSAnYXJyb25kaXNzZW1lbnRzJzpcbiAgICAgICAgc3VidGl0bGUgPSBkYXRhLnByb3BlcnRpZXMubXVuaWNpcGFsaXRlICsgJyAoQXJyb25kaXNzZW1lbnQpJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCB0eXBlU2V0dGluZyA9IHRoaXMuc2V0dGluZ3MuZmluZCgocykgPT4gcy5uYW1lID09PSAndHlwZScpO1xuICAgICAgICBjb25zdCB0eXBlID0gdHlwZVNldHRpbmcudmFsdWVzLmZpbmQoXG4gICAgICAgICAgKHQpID0+IHQudmFsdWUgPT09IGRhdGEucHJvcGVydGllcy50eXBlXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgc3VidGl0bGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCh0eXBlLnRpdGxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VidGl0bGU7XG4gIH1cblxuICBwcml2YXRlIGRhdGFUb1Jlc3VsdChkYXRhOiBJQ2hlcmNoZVJldmVyc2VEYXRhKTogU2VhcmNoUmVzdWx0PEZlYXR1cmU+IHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5jb21wdXRlUHJvcGVydGllcyhkYXRhKTtcbiAgICBjb25zdCBleHRlbnQgPSB0aGlzLmNvbXB1dGVFeHRlbnQoZGF0YSk7XG4gICAgY29uc3QgaWQgPSBbdGhpcy5nZXRJZCgpLCBwcm9wZXJ0aWVzLnR5cGUsIHByb3BlcnRpZXMuY29kZV0uam9pbignLicpO1xuXG4gICAgY29uc3QgdGl0bGVIdG1sID0gZGF0YS5wcm9wZXJ0aWVzLm5vbTtcbiAgICBjb25zdCBzdWJ0aXRsZUh0bWwgPSAnIDxzbWFsbD4gJyArIHRoaXMuZ2V0U3VidGl0bGUoZGF0YSkgKyAnPC9zbWFsbD4nO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogRkVBVFVSRSxcbiAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgIGdlb21ldHJ5OiBkYXRhLmdlb21ldHJ5LFxuICAgICAgICBleHRlbnQsXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB0aXRsZTogZGF0YS5wcm9wZXJ0aWVzLm5vbVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0YToge1xuICAgICAgICBkYXRhVHlwZTogRkVBVFVSRSxcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlOiBkYXRhLnByb3BlcnRpZXMubm9tLFxuICAgICAgICB0aXRsZUh0bWw6IHRpdGxlSHRtbCArIHN1YnRpdGxlSHRtbCxcbiAgICAgICAgaWNvbjogZGF0YS5pY29uIHx8ICdtYXAtbWFya2VyJyxcbiAgICAgICAgcG9pbnRlclN1bW1hcnlUaXRsZTogdGhpcy5nZXRTdWJ0aXRsZShkYXRhKSsgJzogJyArIGRhdGEucHJvcGVydGllcy5ub21cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlUHJvcGVydGllcyhkYXRhOiBJQ2hlcmNoZVJldmVyc2VEYXRhKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IE9iamVjdFV0aWxzLnJlbW92ZUtleXMoXG4gICAgICBkYXRhLnByb3BlcnRpZXMsXG4gICAgICBJQ2hlcmNoZVJldmVyc2VTZWFyY2hTb3VyY2UucHJvcGVydGllc0JsYWNrbGlzdFxuICAgICk7XG5cbiAgICBjb25zdCByb3V0aW5nOiB7XG4gICAgICBSb3V0ZTogc3RyaW5nO1xuICAgIH0gPSB7XG4gICAgICBSb3V0ZTpcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwicm91dGluZ1wiPiA8dT4nICtcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uc2VlUm91dGluZycpICtcbiAgICAgICAgJzwvdT4gPC9zcGFuPidcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgcm91dGluZyk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVFeHRlbnQoXG4gICAgZGF0YTogSUNoZXJjaGVSZXZlcnNlRGF0YVxuICApOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGRhdGEuYmJveFxuICAgICAgPyBbZGF0YS5iYm94WzBdLCBkYXRhLmJib3hbMl0sIGRhdGEuYmJveFsxXSwgZGF0YS5iYm94WzNdXVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==