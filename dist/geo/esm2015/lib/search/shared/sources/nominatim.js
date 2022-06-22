import { __decorate } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FEATURE } from '../../../feature';
import { SearchSource } from './source';
import { computeTermSimilarity } from '../search.utils';
import { Cacheable } from 'ts-cacheable';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/core";
/**
 * Nominatim search source
 */
export class NominatimSearchSource extends SearchSource {
    constructor(http, options, storageService) {
        super(options, storageService);
        this.http = http;
    }
    getId() {
        return NominatimSearchSource.id;
    }
    getType() {
        return NominatimSearchSource.type;
    }
    /*
     * Source : https://wiki.openstreetmap.org/wiki/Key:amenity
     */
    getDefaultOptions() {
        return {
            title: 'Nominatim (OSM)',
            searchUrl: 'https://nominatim.openstreetmap.org/search',
            settings: [
                {
                    type: 'checkbox',
                    title: 'results type',
                    name: 'amenity',
                    values: [
                        {
                            title: 'igo.geo.search.nominatim.type.food',
                            value: 'bar,bbq,biergaten,cafe,drinking_water,fast_food,food_court,ice_cream,pub,restaurant',
                            enabled: false
                        },
                        {
                            title: 'igo.geo.search.nominatim.type.health',
                            value: 'baby_hatch,clinic,dentist,doctors,hospital,nursing_home,pharmacy,social_facility,veterinary',
                            enabled: false
                        },
                        {
                            title: 'igo.geo.search.nominatim.type.entertainment',
                            value: 'arts_centre,brothel,casino,cinema,community_center_fountain,gambling,nightclub,planetarium \
                          ,public_bookcase,social_centre,stripclub,studio,swingerclub,theatre,internet_cafe',
                            enabled: false
                        },
                        {
                            title: 'igo.geo.search.nominatim.type.finance',
                            value: 'atm,bank,bureau_de_change',
                            enabled: false
                        }
                    ]
                },
                {
                    type: 'radiobutton',
                    title: 'results limit',
                    name: 'limit',
                    values: [
                        {
                            title: '10',
                            value: 10,
                            enabled: true
                        },
                        {
                            title: '20',
                            value: 20,
                            enabled: false
                        },
                        {
                            title: '50',
                            value: 50,
                            enabled: false
                        }
                    ]
                },
                {
                    type: 'radiobutton',
                    title: 'restrictExtent',
                    name: 'countrycodes',
                    values: [
                        {
                            title: 'igo.geo.search.nominatim.country.canada',
                            value: 'CA',
                            enabled: true
                        },
                        {
                            title: 'igo.geo.search.nominatim.country.all',
                            value: null,
                            enabled: false
                        }
                    ]
                },
                {
                    type: 'radiobutton',
                    title: 'multiple object',
                    name: 'dedupe',
                    values: [
                        {
                            title: 'igo.geo.search.searchSources.settings.true',
                            value: 0,
                            enabled: false
                        },
                        {
                            title: 'igo.geo.search.searchSources.settings.false',
                            value: 1,
                            enabled: true
                        }
                    ]
                }
            ]
        };
    }
    /**
     * Search a place by name
     * @param term Place name
     * @returns Observable of <SearchResult<Feature>[]
     */
    search(term, options) {
        const params = this.computeSearchRequestParams(term, options || {});
        if (!params.get('q')) {
            return of([]);
        }
        return this.http
            .get(this.searchUrl, { params })
            .pipe(map((response) => this.extractResults(response, term)));
    }
    computeSearchRequestParams(term, options) {
        return new HttpParams({
            fromObject: Object.assign({
                q: this.computeTerm(term),
                format: 'json'
            }, this.params, options.params || {})
        });
    }
    extractResults(response, term) {
        return response.map((data) => this.dataToResult(data, term));
    }
    dataToResult(data, term) {
        const properties = this.computeProperties(data);
        const geometry = this.computeGeometry(data);
        const extent = this.computeExtent(data);
        const id = [this.getId(), 'place', data.place_id].join('.');
        return {
            source: this,
            meta: {
                dataType: FEATURE,
                id,
                title: data.display_name,
                icon: 'map-marker',
                score: computeTermSimilarity(term.trim(), data.display_name)
            },
            data: {
                type: FEATURE,
                projection: 'EPSG:4326',
                geometry,
                extent,
                properties,
                meta: {
                    id,
                    title: data.display_name
                }
            }
        };
    }
    computeProperties(data) {
        return {
            display_name: data.display_name,
            place_id: data.place_id,
            osm_type: data.osm_type,
            class: data.class,
            type: data.type
        };
    }
    computeGeometry(data) {
        return {
            type: 'Point',
            coordinates: [parseFloat(data.lon), parseFloat(data.lat)]
        };
    }
    computeExtent(data) {
        return [
            parseFloat(data.boundingbox[2]),
            parseFloat(data.boundingbox[0]),
            parseFloat(data.boundingbox[3]),
            parseFloat(data.boundingbox[1])
        ];
    }
    computeTerm(term) {
        return this.computeTermTags(term);
    }
    /**
     * Add hashtag from query in Nominatim's format (+[])
     * @param term Query with hashtag
     */
    computeTermTags(term) {
        const hashtags = super.getHashtagsValid(term, 'amenity');
        if (!hashtags) {
            return this.computeTermSettings(term);
        }
        if (!hashtags.length) {
            return null;
        }
        term = term.replace(/(#[^\s]*)/g, '');
        hashtags.forEach(tag => {
            term += '+[' + tag + ']';
        });
        return term;
    }
    /**
     * Add hashtag from settings in Nominatim's format (+[])
     * @param term Query
     */
    computeTermSettings(term) {
        this.options.settings.forEach(settings => {
            if (settings.name === 'amenity') {
                settings.values.forEach(conf => {
                    if (conf.enabled && typeof conf.value === 'string') {
                        const splitted = conf.value.split(',');
                        splitted.forEach(value => {
                            term += '+[' + value + ']';
                        });
                    }
                });
            }
        });
        return term;
    }
}
NominatimSearchSource.id = 'nominatim';
NominatimSearchSource.type = FEATURE;
NominatimSearchSource.ɵfac = function NominatimSearchSource_Factory(t) { return new (t || NominatimSearchSource)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('options'), i0.ɵɵinject(i2.StorageService)); };
NominatimSearchSource.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NominatimSearchSource, factory: NominatimSearchSource.ɵfac });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], NominatimSearchSource.prototype, "search", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NominatimSearchSource, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['options']
            }] }, { type: i2.StorageService }]; }, { search: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9taW5hdGltLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvc2VhcmNoL3NoYXJlZC9zb3VyY2VzL25vbWluYXRpbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTlELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxPQUFPLEVBQTRCLE1BQU0sa0JBQWtCLENBQUM7QUFJckUsT0FBTyxFQUFFLFlBQVksRUFBYyxNQUFNLFVBQVUsQ0FBQztBQUdwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBRXpDOztHQUVHO0FBRUgsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFlBQVk7SUFJckQsWUFDVSxJQUFnQixFQUNMLE9BQTRCLEVBQy9DLGNBQThCO1FBRTlCLEtBQUssQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFKdkIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUsxQixDQUFDO0lBRUQsS0FBSztRQUNILE9BQU8scUJBQXFCLENBQUMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVEOztPQUVHO0lBQ08saUJBQWlCO1FBQ3pCLE9BQU87WUFDTCxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFNBQVMsRUFBRSw0Q0FBNEM7WUFDdkQsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFB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RkFGWCxxQkFBcUIsMENBTXRCLFNBQVM7MkVBTlIscUJBQXFCLFdBQXJCLHFCQUFxQjtBQStIaEM7SUFIQyxTQUFTLENBQUM7UUFDVCxhQUFhLEVBQUUsRUFBRTtLQUNsQixDQUFDO21EQVlEO3VGQTFJVSxxQkFBcUI7Y0FEakMsVUFBVTs7c0JBT04sTUFBTTt1QkFBQyxTQUFTO3FEQXlIbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRkVBVFVSRSwgRmVhdHVyZSwgRmVhdHVyZUdlb21ldHJ5IH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZSc7XG5cbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9zZWFyY2guaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTZWFyY2hTb3VyY2UsIFRleHRTZWFyY2ggfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQgeyBTZWFyY2hTb3VyY2VPcHRpb25zLCBUZXh0U2VhcmNoT3B0aW9ucyB9IGZyb20gJy4vc291cmNlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm9taW5hdGltRGF0YSB9IGZyb20gJy4vbm9taW5hdGltLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgY29tcHV0ZVRlcm1TaW1pbGFyaXR5IH0gZnJvbSAnLi4vc2VhcmNoLnV0aWxzJztcbmltcG9ydCB7IENhY2hlYWJsZSB9IGZyb20gJ3RzLWNhY2hlYWJsZSc7XG5cbi8qKlxuICogTm9taW5hdGltIHNlYXJjaCBzb3VyY2VcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vbWluYXRpbVNlYXJjaFNvdXJjZSBleHRlbmRzIFNlYXJjaFNvdXJjZSBpbXBsZW1lbnRzIFRleHRTZWFyY2gge1xuICBzdGF0aWMgaWQgPSAnbm9taW5hdGltJztcbiAgc3RhdGljIHR5cGUgPSBGRUFUVVJFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KCdvcHRpb25zJykgb3B0aW9uczogU2VhcmNoU291cmNlT3B0aW9ucyxcbiAgICBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIob3B0aW9ucywgc3RvcmFnZVNlcnZpY2UpO1xuICB9XG5cbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTm9taW5hdGltU2VhcmNoU291cmNlLmlkO1xuICB9XG5cbiAgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBOb21pbmF0aW1TZWFyY2hTb3VyY2UudHlwZTtcbiAgfVxuXG4gIC8qXG4gICAqIFNvdXJjZSA6IGh0dHBzOi8vd2lraS5vcGVuc3RyZWV0bWFwLm9yZy93aWtpL0tleTphbWVuaXR5XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdE9wdGlvbnMoKTogU2VhcmNoU291cmNlT3B0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnTm9taW5hdGltIChPU00pJyxcbiAgICAgIHNlYXJjaFVybDogJ2h0dHBzOi8vbm9taW5hdGltLm9wZW5zdHJlZXRtYXAub3JnL3NlYXJjaCcsXG4gICAgICBzZXR0aW5nczogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICB0aXRsZTogJ3Jlc3VsdHMgdHlwZScsXG4gICAgICAgICAgbmFtZTogJ2FtZW5pdHknLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLm5vbWluYXRpbS50eXBlLmZvb2QnLFxuICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAnYmFyLGJicSxiaWVyZ2F0ZW4sY2FmZSxkcmlua2luZ193YXRlcixmYXN0X2Zvb2QsZm9vZF9jb3VydCxpY2VfY3JlYW0scHViLHJlc3RhdXJhbnQnLFxuICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5ub21pbmF0aW0udHlwZS5oZWFsdGgnLFxuICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAnYmFieV9oYXRjaCxjbGluaWMsZGVudGlzdCxkb2N0b3JzLGhvc3BpdGFsLG51cnNpbmdfaG9tZSxwaGFybWFjeSxzb2NpYWxfZmFjaWxpdHksdmV0ZXJpbmFyeScsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLm5vbWluYXRpbS50eXBlLmVudGVydGFpbm1lbnQnLFxuICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAnYXJ0c19jZW50cmUsYnJvdGhlbCxjYXNpbm8sY2luZW1hLGNvbW11bml0eV9jZW50ZXJfZm91bnRhaW4sZ2FtYmxpbmcsbmlnaHRjbHViLHBsYW5ldGFyaXVtIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICxwdWJsaWNfYm9va2Nhc2Usc29jaWFsX2NlbnRyZSxzdHJpcGNsdWIsc3R1ZGlvLHN3aW5nZXJjbHViLHRoZWF0cmUsaW50ZXJuZXRfY2FmZScsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLm5vbWluYXRpbS50eXBlLmZpbmFuY2UnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2F0bSxiYW5rLGJ1cmVhdV9kZV9jaGFuZ2UnLFxuICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdyYWRpb2J1dHRvbicsXG4gICAgICAgICAgdGl0bGU6ICdyZXN1bHRzIGxpbWl0JyxcbiAgICAgICAgICBuYW1lOiAnbGltaXQnLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzEwJyxcbiAgICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJzIwJyxcbiAgICAgICAgICAgICAgdmFsdWU6IDIwLFxuICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICc1MCcsXG4gICAgICAgICAgICAgIHZhbHVlOiA1MCxcbiAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAncmFkaW9idXR0b24nLFxuICAgICAgICAgIHRpdGxlOiAncmVzdHJpY3RFeHRlbnQnLFxuICAgICAgICAgIG5hbWU6ICdjb3VudHJ5Y29kZXMnLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLm5vbWluYXRpbS5jb3VudHJ5LmNhbmFkYScsXG4gICAgICAgICAgICAgIHZhbHVlOiAnQ0EnLFxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLm5vbWluYXRpbS5jb3VudHJ5LmFsbCcsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdyYWRpb2J1dHRvbicsXG4gICAgICAgICAgdGl0bGU6ICdtdWx0aXBsZSBvYmplY3QnLFxuICAgICAgICAgIG5hbWU6ICdkZWR1cGUnLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLnNlYXJjaFNvdXJjZXMuc2V0dGluZ3MudHJ1ZScsXG4gICAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdpZ28uZ2VvLnNlYXJjaC5zZWFyY2hTb3VyY2VzLnNldHRpbmdzLmZhbHNlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhIHBsYWNlIGJ5IG5hbWVcbiAgICogQHBhcmFtIHRlcm0gUGxhY2UgbmFtZVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlIG9mIDxTZWFyY2hSZXN1bHQ8RmVhdHVyZT5bXVxuICAgKi9cbiAgQENhY2hlYWJsZSh7XG4gICAgbWF4Q2FjaGVDb3VudDogMjBcbiAgfSlcbiAgc2VhcmNoKFxuICAgIHRlcm06IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBvcHRpb25zPzogVGV4dFNlYXJjaE9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHQ8RmVhdHVyZT5bXT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuY29tcHV0ZVNlYXJjaFJlcXVlc3RQYXJhbXModGVybSwgb3B0aW9ucyB8fCB7fSk7XG4gICAgaWYgKCFwYXJhbXMuZ2V0KCdxJykpIHtcbiAgICAgIHJldHVybiBvZihbXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5zZWFyY2hVcmwsIHsgcGFyYW1zIH0pXG4gICAgICAucGlwZShtYXAoKHJlc3BvbnNlOiBOb21pbmF0aW1EYXRhW10pID0+IHRoaXMuZXh0cmFjdFJlc3VsdHMocmVzcG9uc2UsIHRlcm0pKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVTZWFyY2hSZXF1ZXN0UGFyYW1zKFxuICAgIHRlcm06IHN0cmluZyxcbiAgICBvcHRpb25zOiBUZXh0U2VhcmNoT3B0aW9uc1xuICApOiBIdHRwUGFyYW1zIHtcbiAgICByZXR1cm4gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbU9iamVjdDogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHE6IHRoaXMuY29tcHV0ZVRlcm0odGVybSksXG4gICAgICAgICAgZm9ybWF0OiAnanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5wYXJhbXMsXG4gICAgICAgIG9wdGlvbnMucGFyYW1zIHx8IHt9XG4gICAgICApXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RSZXN1bHRzKHJlc3BvbnNlOiBOb21pbmF0aW1EYXRhW10sIHRlcm06IHN0cmluZyk6IFNlYXJjaFJlc3VsdDxGZWF0dXJlPltdIHtcbiAgICByZXR1cm4gcmVzcG9uc2UubWFwKChkYXRhOiBOb21pbmF0aW1EYXRhKSA9PiB0aGlzLmRhdGFUb1Jlc3VsdChkYXRhLCB0ZXJtKSk7XG4gIH1cblxuICBwcml2YXRlIGRhdGFUb1Jlc3VsdChkYXRhOiBOb21pbmF0aW1EYXRhLCB0ZXJtOiBzdHJpbmcpOiBTZWFyY2hSZXN1bHQ8RmVhdHVyZT4ge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmNvbXB1dGVQcm9wZXJ0aWVzKGRhdGEpO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5jb21wdXRlR2VvbWV0cnkoZGF0YSk7XG4gICAgY29uc3QgZXh0ZW50ID0gdGhpcy5jb21wdXRlRXh0ZW50KGRhdGEpO1xuICAgIGNvbnN0IGlkID0gW3RoaXMuZ2V0SWQoKSwgJ3BsYWNlJywgZGF0YS5wbGFjZV9pZF0uam9pbignLicpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgZGF0YVR5cGU6IEZFQVRVUkUsXG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZTogZGF0YS5kaXNwbGF5X25hbWUsXG4gICAgICAgIGljb246ICdtYXAtbWFya2VyJyxcbiAgICAgICAgc2NvcmU6IGNvbXB1dGVUZXJtU2ltaWxhcml0eSh0ZXJtLnRyaW0oKSwgZGF0YS5kaXNwbGF5X25hbWUpXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBGRUFUVVJFLFxuICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgIGV4dGVudCxcbiAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRpdGxlOiBkYXRhLmRpc3BsYXlfbmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZVByb3BlcnRpZXMoZGF0YTogTm9taW5hdGltRGF0YSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5X25hbWU6IGRhdGEuZGlzcGxheV9uYW1lLFxuICAgICAgcGxhY2VfaWQ6IGRhdGEucGxhY2VfaWQsXG4gICAgICBvc21fdHlwZTogZGF0YS5vc21fdHlwZSxcbiAgICAgIGNsYXNzOiBkYXRhLmNsYXNzLFxuICAgICAgdHlwZTogZGF0YS50eXBlXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZUdlb21ldHJ5KGRhdGE6IE5vbWluYXRpbURhdGEpOiBGZWF0dXJlR2VvbWV0cnkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgY29vcmRpbmF0ZXM6IFtwYXJzZUZsb2F0KGRhdGEubG9uKSwgcGFyc2VGbG9hdChkYXRhLmxhdCldXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZUV4dGVudChkYXRhOiBOb21pbmF0aW1EYXRhKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICAgIHJldHVybiBbXG4gICAgICBwYXJzZUZsb2F0KGRhdGEuYm91bmRpbmdib3hbMl0pLFxuICAgICAgcGFyc2VGbG9hdChkYXRhLmJvdW5kaW5nYm94WzBdKSxcbiAgICAgIHBhcnNlRmxvYXQoZGF0YS5ib3VuZGluZ2JveFszXSksXG4gICAgICBwYXJzZUZsb2F0KGRhdGEuYm91bmRpbmdib3hbMV0pXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZVRlcm0odGVybTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlVGVybVRhZ3ModGVybSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGhhc2h0YWcgZnJvbSBxdWVyeSBpbiBOb21pbmF0aW0ncyBmb3JtYXQgKCtbXSlcbiAgICogQHBhcmFtIHRlcm0gUXVlcnkgd2l0aCBoYXNodGFnXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVUZXJtVGFncyh0ZXJtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhhc2h0YWdzID0gc3VwZXIuZ2V0SGFzaHRhZ3NWYWxpZCh0ZXJtLCAnYW1lbml0eScpO1xuICAgIGlmICghaGFzaHRhZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVUZXJtU2V0dGluZ3ModGVybSk7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNodGFncy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRlcm0gPSB0ZXJtLnJlcGxhY2UoLygjW15cXHNdKikvZywgJycpO1xuICAgIGhhc2h0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgIHRlcm0gKz0gJytbJyArIHRhZyArICddJztcbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBoYXNodGFnIGZyb20gc2V0dGluZ3MgaW4gTm9taW5hdGltJ3MgZm9ybWF0ICgrW10pXG4gICAqIEBwYXJhbSB0ZXJtIFF1ZXJ5XG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVUZXJtU2V0dGluZ3ModGVybTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB0aGlzLm9wdGlvbnMuc2V0dGluZ3MuZm9yRWFjaChzZXR0aW5ncyA9PiB7XG4gICAgICBpZiAoc2V0dGluZ3MubmFtZSA9PT0gJ2FtZW5pdHknKSB7XG4gICAgICAgIHNldHRpbmdzLnZhbHVlcy5mb3JFYWNoKGNvbmYgPT4ge1xuICAgICAgICAgIGlmIChjb25mLmVuYWJsZWQgJiYgdHlwZW9mIGNvbmYudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdHRlZCA9IGNvbmYudmFsdWUuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIHNwbGl0dGVkLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICB0ZXJtICs9ICcrWycgKyB2YWx1ZSArICddJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn1cbiJdfQ==