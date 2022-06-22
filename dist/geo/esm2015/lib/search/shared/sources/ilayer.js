import { __decorate } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ObjectUtils } from '@igo2/utils';
import { getResolutionFromScale } from '../../../map/shared/map.utils';
import { LAYER } from '../../../layer';
import { QueryFormat } from '../../../query';
import { SearchSource } from './source';
import { computeTermSimilarity } from '../search.utils';
import { Cacheable } from 'ts-cacheable';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/common/http";
export class ILayerSearchResultFormatter {
    constructor(languageService) {
        this.languageService = languageService;
    }
    formatResult(data) {
        const allowedKey = [
            'title',
            'abstract',
            'groupTitle',
            'metadataUrl',
            'downloadUrl',
            'urlInfo',
            'name'
        ];
        const property = Object.entries(data.properties)
            .filter(([key]) => allowedKey.indexOf(key) !== -1)
            .reduce((out, entries) => {
            const [key, value] = entries;
            let newKey;
            try {
                newKey = this.languageService.translate.instant('igo.geo.search.ilayer.properties.' + key);
            }
            catch (e) {
                newKey = key;
            }
            out[newKey] = value ? value : '';
            return out;
        }, {});
        const dataR = Object.assign({}, data);
        dataR.properties = property;
        return dataR;
    }
}
ILayerSearchResultFormatter.ɵfac = function ILayerSearchResultFormatter_Factory(t) { return new (t || ILayerSearchResultFormatter)(i0.ɵɵinject(i1.LanguageService)); };
ILayerSearchResultFormatter.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ILayerSearchResultFormatter, factory: ILayerSearchResultFormatter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ILayerSearchResultFormatter, [{
        type: Injectable
    }], function () { return [{ type: i1.LanguageService }]; }, null); })();
/**
 * ILayer search source
 */
export class ILayerSearchSource extends SearchSource {
    constructor(http, languageService, storageService, options, formatter) {
        super(options, storageService);
        this.http = http;
        this.languageService = languageService;
        this.formatter = formatter;
        this.title$ = new BehaviorSubject('');
        this.languageService.translate
            .get(this.options.title)
            .subscribe(title => this.title$.next(title));
    }
    get title() {
        return this.title$.getValue();
    }
    getId() {
        return ILayerSearchSource.id;
    }
    getType() {
        return ILayerSearchSource.type;
    }
    getDefaultOptions() {
        const limit = this.options.params && this.options.params.limit
            ? Number(this.options.params.limit)
            : undefined;
        const ecmax = this.options.params && this.options.params.ecmax
            ? Number(this.options.params.ecmax)
            : undefined;
        return {
            title: 'igo.geo.search.ilayer.name',
            searchUrl: 'https://geoegl.msp.gouv.qc.ca/apis/layers/search',
            settings: [
                {
                    type: 'checkbox',
                    title: 'results type',
                    name: 'type',
                    values: [
                        {
                            title: 'igo.geo.search.ilayer.type.layer',
                            value: 'layer',
                            enabled: true,
                            hashtags: ['layer', 'layers', 'couche', 'couches']
                        },
                        {
                            title: 'igo.geo.search.ilayer.type.groupLayer',
                            value: 'group',
                            enabled: false,
                            hashtags: ['gr-layer', 'gr-layers', 'gr-couche', 'gr-couches']
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
                            enabled: ecmax === 30
                        },
                        {
                            title: '50 %',
                            value: 50,
                            enabled: ecmax === 50 || !ecmax
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
                }
            ]
        };
    }
    /**
     * Search a layer by name or keyword
     * @param term Layer name or keyword
     * @returns Observable of <SearchResult<LayerOptions>[]
     */
    search(term, options) {
        const params = this.computeSearchRequestParams(term, options || {});
        if (!params.get('q') || !params.get('type')) {
            return of([]);
        }
        this.options.params.page = params.get('page') || '1';
        return this.http
            .get(this.searchUrl, { params })
            .pipe(map((response) => this.extractResults(response, term)));
    }
    computeSearchRequestParams(term, options) {
        return new HttpParams({
            fromObject: ObjectUtils.removeUndefined(Object.assign({
                q: this.computeTerm(term)
            }, this.params, this.computeOptionsParam(term, options || {}).params, {
                page: options.page
            }))
        });
    }
    /**
     * Remove hashtag from query
     * @param term Query with hashtag
     */
    computeTerm(term) {
        return term.replace(/(#[^\s]*)/g, '').replace(/[^\wÀ-ÿ !\-\(\),'#]+/g, '');
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
    extractResults(response, term) {
        return response.items.map((data) => this.dataToResult(data, term, response));
    }
    dataToResult(data, term, response) {
        const layerOptions = this.computeLayerOptions(data);
        const titleHtml = data.highlight.title || data.properties.title;
        const groupTitle = data.highlight.groupTitle || data.properties.groupTitle;
        const subtitleHtml = groupTitle
            ? ' <small style="color: #6f6969"> ' + groupTitle + '</small>'
            : '';
        return {
            source: this,
            meta: {
                dataType: LAYER,
                id: [this.getId(), data.properties.id].join('.'),
                title: data.properties.title,
                titleHtml: titleHtml + subtitleHtml,
                icon: data.properties.type === 'Layer' ? 'layers' : 'map',
                score: data.score || computeTermSimilarity(term.trim(), data.properties.name),
                nextPage: response.items.length % +this.options.params.limit === 0 &&
                    +this.options.params.page < 10
            },
            data: layerOptions
        };
    }
    computeLayerOptions(data) {
        const url = data.properties.url;
        const queryParams = this.extractQueryParamsFromSourceUrl(url);
        return ObjectUtils.removeUndefined({
            sourceOptions: {
                id: data.properties.id,
                type: data.properties.format,
                url,
                queryFormat: queryParams.queryFormat,
                queryHtmlTarget: queryParams.queryHtmlTarget,
                params: data.properties.format === 'wms' ? { LAYERS: data.properties.name } : undefined,
                layer: data.properties.format === 'wms' ? undefined : data.properties.name,
                optionsFromCapabilities: true,
                crossOrigin: 'anonymous'
            },
            title: data.properties.title,
            maxResolution: getResolutionFromScale(Number(data.properties.maxScaleDenom)),
            minResolution: getResolutionFromScale(Number(data.properties.minScaleDenom)),
            metadata: {
                url: data.properties.metadataUrl,
                extern: data.properties.metadataUrl ? true : undefined,
                abstract: data.properties.abstract || undefined
            },
            properties: this.formatter.formatResult(data).properties
        });
    }
    extractQueryParamsFromSourceUrl(url) {
        let queryFormat;
        let queryHtmlTarget;
        const formatOpt = this.options.queryFormat;
        if (formatOpt) {
            for (const key of Object.keys(formatOpt)) {
                const value = formatOpt[key];
                if (value === '*') {
                    queryFormat = QueryFormat[key.toUpperCase()];
                    break;
                }
                const urls = value.urls;
                if (Array.isArray(urls)) {
                    urls.forEach(urlOpt => {
                        if (url.indexOf(urlOpt) !== -1) {
                            queryFormat = QueryFormat[key.toUpperCase()];
                        }
                    });
                    break;
                }
            }
            if (queryFormat === QueryFormat.HTML ||
                queryFormat === QueryFormat.HTMLGML2) {
                queryHtmlTarget = 'iframe';
            }
        }
        return {
            queryFormat,
            queryHtmlTarget
        };
    }
}
ILayerSearchSource.id = 'ilayer';
ILayerSearchSource.type = LAYER;
ILayerSearchSource.ɵfac = function ILayerSearchSource_Factory(t) { return new (t || ILayerSearchSource)(i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i1.StorageService), i0.ɵɵinject('options'), i0.ɵɵinject(ILayerSearchResultFormatter)); };
ILayerSearchSource.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ILayerSearchSource, factory: ILayerSearchSource.ɵfac });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], ILayerSearchSource.prototype, "search", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ILayerSearchSource, [{
        type: Injectable
    }], function () { return [{ type: i2.HttpClient }, { type: i1.LanguageService }, { type: i1.StorageService }, { type: undefined, decorators: [{
                type: Inject,
                args: ['options']
            }] }, { type: ILayerSearchResultFormatter, decorators: [{
                type: Inject,
                args: [ILayerSearchResultFormatter]
            }] }]; }, { search: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvc2VhcmNoL3NoYXJlZC9zb3VyY2VzL2lsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTlELE9BQU8sRUFBYyxlQUFlLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQThCLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXpFLE9BQU8sRUFBRSxZQUFZLEVBQWMsTUFBTSxVQUFVLENBQUM7QUFTcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUd6QyxNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsWUFBWSxDQUFDLElBQWdCO1FBQzNCLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLE9BQU87WUFDUCxVQUFVO1lBQ1YsWUFBWTtZQUNaLGFBQWE7WUFDYixhQUFhO1lBQ2IsU0FBUztZQUNULE1BQU07U0FDUCxDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENB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QUFFLENBQUMsQ0FBQztvQkFDN0MsTUFBTTtpQkFDUDtnQkFFRCxNQUFNLElBQUksR0FBSyxLQUFvQyxDQUFDLElBQUksQ0FBQztnQkFDekQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNwQixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQzlCLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7eUJBQzlDO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILE1BQU07aUJBQ1A7YUFDRjtZQUVELElBQ0UsV0FBVyxLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNoQyxXQUFXLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFDcEM7Z0JBQ0EsZUFBZSxHQUFHLFFBQVEsQ0FBQzthQUM1QjtTQUNGO1FBRUQsT0FBTztZQUNMLFdBQVc7WUFDWCxlQUFlO1NBQ2hCLENBQUM7SUFDSixDQUFDOztBQXhUTSxxQkFBRSxHQUFHLFFBQVEsQ0FBQztBQUNkLHVCQUFJLEdBQUcsS0FBSyxDQUFDO29GQUZULGtCQUFrQiwyR0FjbkIsU0FBUyxlQUNULDJCQUEyQjt3RUFmMUIsa0JBQWtCLFdBQWxCLGtCQUFrQjtBQTZJN0I7SUFIQyxTQUFTLENBQUM7UUFDVCxhQUFhLEVBQUUsRUFBRTtLQUNsQixDQUFDO2dEQWdCRDt1RkE1SlUsa0JBQWtCO2NBRDlCLFVBQVU7O3NCQWVOLE1BQU07dUJBQUMsU0FBUzswQkFFRSwyQkFBMkI7c0JBRDdDLE1BQU07dUJBQUMsMkJBQTJCO3dCQThIckMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBPYmplY3RVdGlscyB9IGZyb20gJ0BpZ28yL3V0aWxzJztcblxuaW1wb3J0IHsgZ2V0UmVzb2x1dGlvbkZyb21TY2FsZSB9IGZyb20gJy4uLy4uLy4uL21hcC9zaGFyZWQvbWFwLnV0aWxzJztcbmltcG9ydCB7IExBWUVSIH0gZnJvbSAnLi4vLi4vLi4vbGF5ZXInO1xuaW1wb3J0IHsgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnMsIFF1ZXJ5Rm9ybWF0IH0gZnJvbSAnLi4vLi4vLi4vcXVlcnknO1xuaW1wb3J0IHsgUXVlcnlIdG1sVGFyZ2V0IH0gZnJvbSAnLi8uLi8uLi8uLi9xdWVyeS9zaGFyZWQvcXVlcnkuZW51bXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9zZWFyY2guaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTZWFyY2hTb3VyY2UsIFRleHRTZWFyY2ggfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQgeyBUZXh0U2VhcmNoT3B0aW9ucyB9IGZyb20gJy4vc291cmNlLmludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgSUxheWVyU2VhcmNoU291cmNlT3B0aW9ucyxcbiAgSUxheWVyRGF0YSxcbiAgSUxheWVySXRlbVJlc3BvbnNlLFxuICBJTGF5ZXJTZXJ2aWNlUmVzcG9uc2UsXG4gIElMYXllckRhdGFTb3VyY2Vcbn0gZnJvbSAnLi9pbGF5ZXIuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBjb21wdXRlVGVybVNpbWlsYXJpdHkgfSBmcm9tICcuLi9zZWFyY2gudXRpbHMnO1xuaW1wb3J0IHsgQ2FjaGVhYmxlIH0gZnJvbSAndHMtY2FjaGVhYmxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElMYXllclNlYXJjaFJlc3VsdEZvcm1hdHRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UpIHt9XG5cbiAgZm9ybWF0UmVzdWx0KGRhdGE6IElMYXllckRhdGEpOiBJTGF5ZXJEYXRhIHtcbiAgICBjb25zdCBhbGxvd2VkS2V5ID0gW1xuICAgICAgJ3RpdGxlJyxcbiAgICAgICdhYnN0cmFjdCcsXG4gICAgICAnZ3JvdXBUaXRsZScsXG4gICAgICAnbWV0YWRhdGFVcmwnLFxuICAgICAgJ2Rvd25sb2FkVXJsJyxcbiAgICAgICd1cmxJbmZvJyxcbiAgICAgICduYW1lJ1xuICAgIF07XG5cbiAgICBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdC5lbnRyaWVzKGRhdGEucHJvcGVydGllcylcbiAgICAgIC5maWx0ZXIoKFtrZXldKSA9PiBhbGxvd2VkS2V5LmluZGV4T2Yoa2V5KSAhPT0gLTEpXG4gICAgICAucmVkdWNlKChvdXQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGVudHJpZXM6IFtzdHJpbmcsIGFueV0pID0+IHtcbiAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cmllcztcbiAgICAgICAgbGV0IG5ld0tleTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXdLZXkgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICdpZ28uZ2VvLnNlYXJjaC5pbGF5ZXIucHJvcGVydGllcy4nICsga2V5XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG5ld0tleSA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICBvdXRbbmV3S2V5XSA9IHZhbHVlID8gdmFsdWUgOiAnJztcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgIH0sIHt9KTtcblxuICAgIGNvbnN0IGRhdGFSID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG4gICAgZGF0YVIucHJvcGVydGllcyA9IHByb3BlcnR5IGFzIElMYXllckRhdGFTb3VyY2U7XG5cbiAgICByZXR1cm4gZGF0YVI7XG4gIH1cbn1cblxuLyoqXG4gKiBJTGF5ZXIgc2VhcmNoIHNvdXJjZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSUxheWVyU2VhcmNoU291cmNlIGV4dGVuZHMgU2VhcmNoU291cmNlIGltcGxlbWVudHMgVGV4dFNlYXJjaCB7XG4gIHN0YXRpYyBpZCA9ICdpbGF5ZXInO1xuICBzdGF0aWMgdHlwZSA9IExBWUVSO1xuXG4gIHRpdGxlJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlJC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ29wdGlvbnMnKSBvcHRpb25zOiBJTGF5ZXJTZWFyY2hTb3VyY2VPcHRpb25zLFxuICAgIEBJbmplY3QoSUxheWVyU2VhcmNoUmVzdWx0Rm9ybWF0dGVyKVxuICAgIHByaXZhdGUgZm9ybWF0dGVyOiBJTGF5ZXJTZWFyY2hSZXN1bHRGb3JtYXR0ZXJcbiAgKSB7XG4gICAgc3VwZXIob3B0aW9ucywgc3RvcmFnZVNlcnZpY2UpO1xuICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZVxuICAgICAgLmdldCh0aGlzLm9wdGlvbnMudGl0bGUpXG4gICAgICAuc3Vic2NyaWJlKHRpdGxlID0+IHRoaXMudGl0bGUkLm5leHQodGl0bGUpKTtcbiAgfVxuXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIElMYXllclNlYXJjaFNvdXJjZS5pZDtcbiAgfVxuXG4gIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSUxheWVyU2VhcmNoU291cmNlLnR5cGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdE9wdGlvbnMoKTogSUxheWVyU2VhcmNoU291cmNlT3B0aW9ucyB7XG4gICAgY29uc3QgbGltaXQgPVxuICAgICAgdGhpcy5vcHRpb25zLnBhcmFtcyAmJiB0aGlzLm9wdGlvbnMucGFyYW1zLmxpbWl0XG4gICAgICAgID8gTnVtYmVyKHRoaXMub3B0aW9ucy5wYXJhbXMubGltaXQpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGVjbWF4ID1cbiAgICAgIHRoaXMub3B0aW9ucy5wYXJhbXMgJiYgdGhpcy5vcHRpb25zLnBhcmFtcy5lY21heFxuICAgICAgICA/IE51bWJlcih0aGlzLm9wdGlvbnMucGFyYW1zLmVjbWF4KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pbGF5ZXIubmFtZScsXG4gICAgICBzZWFyY2hVcmw6ICdodHRwczovL2dlb2VnbC5tc3AuZ291di5xYy5jYS9hcGlzL2xheWVycy9zZWFyY2gnLFxuICAgICAgc2V0dGluZ3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgdGl0bGU6ICdyZXN1bHRzIHR5cGUnLFxuICAgICAgICAgIG5hbWU6ICd0eXBlJyxcbiAgICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pbGF5ZXIudHlwZS5sYXllcicsXG4gICAgICAgICAgICAgIHZhbHVlOiAnbGF5ZXInLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICBoYXNodGFnczogWydsYXllcicsICdsYXllcnMnLCAnY291Y2hlJywgJ2NvdWNoZXMnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5pbGF5ZXIudHlwZS5ncm91cExheWVyJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdncm91cCcsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBoYXNodGFnczogWydnci1sYXllcicsICdnci1sYXllcnMnLCAnZ3ItY291Y2hlJywgJ2dyLWNvdWNoZXMnXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdyYWRpb2J1dHRvbicsXG4gICAgICAgICAgdGl0bGU6ICdyZXN1bHRzIGxpbWl0JyxcbiAgICAgICAgICBuYW1lOiAnbGltaXQnLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzEnLFxuICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgZW5hYmxlZDogbGltaXQgPT09IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnNScsXG4gICAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgICAgICBlbmFibGVkOiBsaW1pdCA9PT0gNSB8fCAhbGltaXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnMTAnLFxuICAgICAgICAgICAgICB2YWx1ZTogMTAsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IGxpbWl0ID09PSAxMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcyNScsXG4gICAgICAgICAgICAgIHZhbHVlOiAyNSxcbiAgICAgICAgICAgICAgZW5hYmxlZDogbGltaXQgPT09IDI1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzUwJyxcbiAgICAgICAgICAgICAgdmFsdWU6IDUwLFxuICAgICAgICAgICAgICBlbmFibGVkOiBsaW1pdCA9PT0gNTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAncmFkaW9idXR0b24nLFxuICAgICAgICAgIHRpdGxlOiAnZWNtYXgnLFxuICAgICAgICAgIG5hbWU6ICdlY21heCcsXG4gICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnMTAgJScsXG4gICAgICAgICAgICAgIHZhbHVlOiAxMCxcbiAgICAgICAgICAgICAgZW5hYmxlZDogZWNtYXggPT09IDEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzMwICUnLFxuICAgICAgICAgICAgICB2YWx1ZTogMzAsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IGVjbWF4ID09PSAzMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICc1MCAlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IDUwLFxuICAgICAgICAgICAgICBlbmFibGVkOiBlY21heCA9PT0gNTAgfHwgIWVjbWF4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzc1ICUnLFxuICAgICAgICAgICAgICB2YWx1ZTogNzUsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IGVjbWF4ID09PSA3NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcxMDAgJScsXG4gICAgICAgICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IGVjbWF4ID09PSAxMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhIGxheWVyIGJ5IG5hbWUgb3Iga2V5d29yZFxuICAgKiBAcGFyYW0gdGVybSBMYXllciBuYW1lIG9yIGtleXdvcmRcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSBvZiA8U2VhcmNoUmVzdWx0PExheWVyT3B0aW9ucz5bXVxuICAgKi9cblxuICBAQ2FjaGVhYmxlKHtcbiAgICBtYXhDYWNoZUNvdW50OiAyMFxuICB9KVxuICBzZWFyY2goXG4gICAgdGVybTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIG9wdGlvbnM/OiBUZXh0U2VhcmNoT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdDxJTGF5ZXJJdGVtUmVzcG9uc2U+W10+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmNvbXB1dGVTZWFyY2hSZXF1ZXN0UGFyYW1zKHRlcm0sIG9wdGlvbnMgfHwge30pO1xuICAgIGlmICghcGFyYW1zLmdldCgncScpIHx8ICFwYXJhbXMuZ2V0KCd0eXBlJykpIHtcbiAgICAgIHJldHVybiBvZihbXSk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5wYXJhbXMucGFnZSA9IHBhcmFtcy5nZXQoJ3BhZ2UnKSB8fCAnMSc7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuc2VhcmNoVXJsLCB7IHBhcmFtcyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IElMYXllclNlcnZpY2VSZXNwb25zZSkgPT4gdGhpcy5leHRyYWN0UmVzdWx0cyhyZXNwb25zZSwgdGVybSkpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlU2VhcmNoUmVxdWVzdFBhcmFtcyhcbiAgICB0ZXJtOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVGV4dFNlYXJjaE9wdGlvbnNcbiAgKTogSHR0cFBhcmFtcyB7XG4gICAgcmV0dXJuIG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21PYmplY3Q6IE9iamVjdFV0aWxzLnJlbW92ZVVuZGVmaW5lZChcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxOiB0aGlzLmNvbXB1dGVUZXJtKHRlcm0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLnBhcmFtcyxcbiAgICAgICAgICB0aGlzLmNvbXB1dGVPcHRpb25zUGFyYW0odGVybSwgb3B0aW9ucyB8fCB7fSkucGFyYW1zLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhZ2U6IG9wdGlvbnMucGFnZVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBoYXNodGFnIGZyb20gcXVlcnlcbiAgICogQHBhcmFtIHRlcm0gUXVlcnkgd2l0aCBoYXNodGFnXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVUZXJtKHRlcm06IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRlcm0ucmVwbGFjZSgvKCNbXlxcc10qKS9nLCAnJykucmVwbGFjZSgvW15cXHfDgC3DvyAhXFwtXFwoXFwpLCcjXSsvZywgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBoYXNodGFnIHRvIHBhcmFtIGlmIHZhbGlkXG4gICAqIEBwYXJhbSB0ZXJtIFF1ZXJ5IHdpdGggaGFzaHRhZ1xuICAgKiBAcGFyYW0gb3B0aW9ucyBUZXh0U2VhcmNoT3B0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBjb21wdXRlT3B0aW9uc1BhcmFtKFxuICAgIHRlcm06IHN0cmluZyxcbiAgICBvcHRpb25zOiBUZXh0U2VhcmNoT3B0aW9uc1xuICApOiBUZXh0U2VhcmNoT3B0aW9ucyB7XG4gICAgY29uc3QgaGFzaHRhZ3MgPSBzdXBlci5nZXRIYXNodGFnc1ZhbGlkKHRlcm0sICd0eXBlJyk7XG4gICAgaWYgKGhhc2h0YWdzKSB7XG4gICAgICBvcHRpb25zLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucy5wYXJhbXMgfHwge30sIHtcbiAgICAgICAgdHlwZTogaGFzaHRhZ3Muam9pbignLCcpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFJlc3VsdHMoXG4gICAgcmVzcG9uc2U6IElMYXllclNlcnZpY2VSZXNwb25zZSwgdGVybTogc3RyaW5nXG4gICk6IFNlYXJjaFJlc3VsdDxJTGF5ZXJJdGVtUmVzcG9uc2U+W10ge1xuICAgIHJldHVybiByZXNwb25zZS5pdGVtcy5tYXAoKGRhdGE6IElMYXllckRhdGEpID0+XG4gICAgdGhpcy5kYXRhVG9SZXN1bHQoZGF0YSwgdGVybSwgcmVzcG9uc2UpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGF0YVRvUmVzdWx0KFxuICAgIGRhdGE6IElMYXllckRhdGEsXG4gICAgdGVybTogc3RyaW5nLFxuICAgIHJlc3BvbnNlPzogSUxheWVyU2VydmljZVJlc3BvbnNlXG4gICk6IFNlYXJjaFJlc3VsdDxJTGF5ZXJJdGVtUmVzcG9uc2U+IHtcbiAgICBjb25zdCBsYXllck9wdGlvbnMgPSB0aGlzLmNvbXB1dGVMYXllck9wdGlvbnMoZGF0YSk7XG5cbiAgICBjb25zdCB0aXRsZUh0bWwgPSBkYXRhLmhpZ2hsaWdodC50aXRsZSB8fCBkYXRhLnByb3BlcnRpZXMudGl0bGU7XG4gICAgY29uc3QgZ3JvdXBUaXRsZSA9IGRhdGEuaGlnaGxpZ2h0Lmdyb3VwVGl0bGUgfHwgZGF0YS5wcm9wZXJ0aWVzLmdyb3VwVGl0bGU7XG4gICAgY29uc3Qgc3VidGl0bGVIdG1sID0gZ3JvdXBUaXRsZVxuICAgICAgPyAnIDxzbWFsbCBzdHlsZT1cImNvbG9yOiAjNmY2OTY5XCI+ICcgKyBncm91cFRpdGxlICsgJzwvc21hbGw+J1xuICAgICAgOiAnJztcblxuICAgIHJldHVybiB7XG4gICAgICBzb3VyY2U6IHRoaXMsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIGRhdGFUeXBlOiBMQVlFUixcbiAgICAgICAgaWQ6IFt0aGlzLmdldElkKCksIGRhdGEucHJvcGVydGllcy5pZF0uam9pbignLicpLFxuICAgICAgICB0aXRsZTogZGF0YS5wcm9wZXJ0aWVzLnRpdGxlLFxuICAgICAgICB0aXRsZUh0bWw6IHRpdGxlSHRtbCArIHN1YnRpdGxlSHRtbCxcbiAgICAgICAgaWNvbjogZGF0YS5wcm9wZXJ0aWVzLnR5cGUgPT09ICdMYXllcicgPyAnbGF5ZXJzJyA6ICdtYXAnLFxuICAgICAgICBzY29yZTogZGF0YS5zY29yZSB8fCBjb21wdXRlVGVybVNpbWlsYXJpdHkodGVybS50cmltKCksIGRhdGEucHJvcGVydGllcy5uYW1lKSxcbiAgICAgICAgbmV4dFBhZ2U6XG4gICAgICAgICAgcmVzcG9uc2UuaXRlbXMubGVuZ3RoICUgK3RoaXMub3B0aW9ucy5wYXJhbXMubGltaXQgPT09IDAgJiZcbiAgICAgICAgICArdGhpcy5vcHRpb25zLnBhcmFtcy5wYWdlIDwgMTBcbiAgICAgIH0sXG4gICAgICBkYXRhOiBsYXllck9wdGlvbnNcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlTGF5ZXJPcHRpb25zKGRhdGE6IElMYXllckRhdGEpOiBJTGF5ZXJJdGVtUmVzcG9uc2Uge1xuICAgIGNvbnN0IHVybCA9IGRhdGEucHJvcGVydGllcy51cmw7XG4gICAgY29uc3QgcXVlcnlQYXJhbXM6IFF1ZXJ5YWJsZURhdGFTb3VyY2VPcHRpb25zID0gdGhpcy5leHRyYWN0UXVlcnlQYXJhbXNGcm9tU291cmNlVXJsKFxuICAgICAgdXJsXG4gICAgKTtcbiAgICByZXR1cm4gT2JqZWN0VXRpbHMucmVtb3ZlVW5kZWZpbmVkKHtcbiAgICAgIHNvdXJjZU9wdGlvbnM6IHtcbiAgICAgICAgaWQ6IGRhdGEucHJvcGVydGllcy5pZCxcbiAgICAgICAgdHlwZTogZGF0YS5wcm9wZXJ0aWVzLmZvcm1hdCxcbiAgICAgICAgdXJsLFxuICAgICAgICBxdWVyeUZvcm1hdDogcXVlcnlQYXJhbXMucXVlcnlGb3JtYXQsXG4gICAgICAgIHF1ZXJ5SHRtbFRhcmdldDogcXVlcnlQYXJhbXMucXVlcnlIdG1sVGFyZ2V0LFxuICAgICAgICBwYXJhbXM6IGRhdGEucHJvcGVydGllcy5mb3JtYXQgPT09ICd3bXMnID8ge0xBWUVSUzogZGF0YS5wcm9wZXJ0aWVzLm5hbWV9IDogdW5kZWZpbmVkLFxuICAgICAgICBsYXllcjogZGF0YS5wcm9wZXJ0aWVzLmZvcm1hdCA9PT0gJ3dtcycgPyB1bmRlZmluZWQgOiBkYXRhLnByb3BlcnRpZXMubmFtZSxcbiAgICAgICAgb3B0aW9uc0Zyb21DYXBhYmlsaXRpZXM6IHRydWUsXG4gICAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJ1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiBkYXRhLnByb3BlcnRpZXMudGl0bGUsXG4gICAgICBtYXhSZXNvbHV0aW9uOiBnZXRSZXNvbHV0aW9uRnJvbVNjYWxlKFxuICAgICAgICBOdW1iZXIoZGF0YS5wcm9wZXJ0aWVzLm1heFNjYWxlRGVub20pXG4gICAgICApLFxuICAgICAgbWluUmVzb2x1dGlvbjogZ2V0UmVzb2x1dGlvbkZyb21TY2FsZShcbiAgICAgICAgTnVtYmVyKGRhdGEucHJvcGVydGllcy5taW5TY2FsZURlbm9tKVxuICAgICAgKSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHVybDogZGF0YS5wcm9wZXJ0aWVzLm1ldGFkYXRhVXJsLFxuICAgICAgICBleHRlcm46IGRhdGEucHJvcGVydGllcy5tZXRhZGF0YVVybCA/IHRydWUgOiB1bmRlZmluZWQsXG4gICAgICAgIGFic3RyYWN0OiBkYXRhLnByb3BlcnRpZXMuYWJzdHJhY3QgfHwgdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczogdGhpcy5mb3JtYXR0ZXIuZm9ybWF0UmVzdWx0KGRhdGEpLnByb3BlcnRpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFF1ZXJ5UGFyYW1zRnJvbVNvdXJjZVVybChcbiAgICB1cmw6IHN0cmluZ1xuICApOiB7IHF1ZXJ5Rm9ybWF0OiBRdWVyeUZvcm1hdDsgcXVlcnlIdG1sVGFyZ2V0OiBRdWVyeUh0bWxUYXJnZXQgfSB7XG4gICAgbGV0IHF1ZXJ5Rm9ybWF0O1xuICAgIGxldCBxdWVyeUh0bWxUYXJnZXQ7XG4gICAgY29uc3QgZm9ybWF0T3B0ID0gKHRoaXMub3B0aW9ucyBhcyBJTGF5ZXJTZWFyY2hTb3VyY2VPcHRpb25zKS5xdWVyeUZvcm1hdDtcbiAgICBpZiAoZm9ybWF0T3B0KSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhmb3JtYXRPcHQpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZm9ybWF0T3B0W2tleV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJyonKSB7XG4gICAgICAgICAgcXVlcnlGb3JtYXQgPSBRdWVyeUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmxzID0gKCh2YWx1ZSBhcyBhbnkpIGFzIHsgdXJsczogc3RyaW5nW10gfSkudXJscztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXJscykpIHtcbiAgICAgICAgICB1cmxzLmZvckVhY2godXJsT3B0ID0+IHtcbiAgICAgICAgICAgIGlmICh1cmwuaW5kZXhPZih1cmxPcHQpICE9PSAtMSkge1xuICAgICAgICAgICAgICBxdWVyeUZvcm1hdCA9IFF1ZXJ5Rm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHF1ZXJ5Rm9ybWF0ID09PSBRdWVyeUZvcm1hdC5IVE1MIHx8XG4gICAgICAgIHF1ZXJ5Rm9ybWF0ID09PSBRdWVyeUZvcm1hdC5IVE1MR01MMlxuICAgICAgKSB7XG4gICAgICAgIHF1ZXJ5SHRtbFRhcmdldCA9ICdpZnJhbWUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBxdWVyeUZvcm1hdCxcbiAgICAgIHF1ZXJ5SHRtbFRhcmdldFxuICAgIH07XG4gIH1cbn1cbiJdfQ==