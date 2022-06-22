import { __decorate } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import olWKT from 'ol/format/WKT';
import { FEATURE } from '../../../feature';
import { SearchSource } from './source';
import { computeTermSimilarity } from '../search.utils';
import { Cacheable } from 'ts-cacheable';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/core";
/**
 * Cadastre search source
 */
export class CadastreSearchSource extends SearchSource {
    constructor(http, languageService, storageService, options) {
        super(options, storageService);
        this.http = http;
        this.languageService = languageService;
    }
    getId() {
        return CadastreSearchSource.id;
    }
    getType() {
        return CadastreSearchSource.type;
    }
    /*
     * Source : https://wiki.openstreetmap.org/wiki/Key:amenity
     */
    getDefaultOptions() {
        return {
            title: 'Cadastre (Québec)',
            searchUrl: 'https://carto.cptaq.gouv.qc.ca/php/find_lot_v1.php?'
        };
    }
    /**
     * Search a place by name
     * @param term Place name
     * @returns Observable of <SearchResult<Feature>[]
     */
    search(term, options) {
        term = term.endsWith(',') ? term.slice(0, -1) : term;
        term = term.startsWith(',') ? term.substr(1) : term;
        term = term.replace(/ /g, '');
        const params = this.computeSearchRequestParams(term, options || {});
        if (!params.get('numero') || !params.get('numero').match(/^[0-9,]+$/g)) {
            return of([]);
        }
        return this.http
            .get(this.searchUrl, { params, responseType: 'text' })
            .pipe(map((response) => this.extractResults(response, term)));
    }
    computeSearchRequestParams(term, options) {
        return new HttpParams({
            fromObject: Object.assign({
                numero: term,
                epsg: '4326'
            }, this.params, options.params || {})
        });
    }
    extractResults(response, term) {
        return response
            .split('<br />')
            .filter((lot) => lot.length > 0)
            .map((lot) => this.dataToResult(lot, term));
    }
    dataToResult(data, term) {
        const lot = data.split(';');
        const numero = lot[0];
        const wkt = lot[7];
        const geometry = this.computeGeometry(wkt);
        const properties = {
            NoLot: numero,
            Route: '<span class="routing"> <u>' + this.languageService.translate.instant('igo.geo.seeRouting') + '</u> </span>'
        };
        const id = [this.getId(), 'cadastre', numero].join('.');
        return {
            source: this,
            meta: {
                dataType: FEATURE,
                id,
                title: numero,
                score: computeTermSimilarity(term.trim(), numero),
                icon: 'map-marker'
            },
            data: {
                type: FEATURE,
                projection: 'EPSG:4326',
                geometry,
                properties,
                meta: {
                    id,
                    title: numero
                }
            }
        };
    }
    computeGeometry(wkt) {
        const feature = new olWKT().readFeature(wkt, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:4326'
        });
        return {
            type: feature.getGeometry().getType(),
            coordinates: feature.getGeometry().getCoordinates()
        };
    }
}
CadastreSearchSource.id = 'cadastre';
CadastreSearchSource.type = FEATURE;
CadastreSearchSource.ɵfac = function CadastreSearchSource_Factory(t) { return new (t || CadastreSearchSource)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LanguageService), i0.ɵɵinject(i2.StorageService), i0.ɵɵinject('options')); };
CadastreSearchSource.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CadastreSearchSource, factory: CadastreSearchSource.ɵfac });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], CadastreSearchSource.prototype, "search", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CadastreSearchSource, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LanguageService }, { type: i2.StorageService }, { type: undefined, decorators: [{
                type: Inject,
                args: ['options']
            }] }]; }, { search: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkYXN0cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2hhcmVkL3NvdXJjZXMvY2FkYXN0cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU5RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEtBQUssTUFBTSxlQUFlLENBQUM7QUFFbEMsT0FBTyxFQUFFLE9BQU8sRUFBNEIsTUFBTSxrQkFBa0IsQ0FBQztBQUdyRSxPQUFPLEVBQUUsWUFBWSxFQUFjLE1BQU0sVUFBVSxDQUFDO0FBSXBELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFDekM7O0dBRUc7QUFFSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsWUFBWTtJQUlwRCxZQUNVLElBQWdCLEVBQ2hCLGVBQWdDLEVBQ3hDLGNBQThCLEVBQ1gsT0FBNEI7UUFFL0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUx2QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUsxQyxDQUFDO0lBRUQsS0FBSztRQUNILE9BQU8sb0JBQW9CLENBQUMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ08saUJBQWlCO1FBQ3pCLE9BQU87WUFDTCxLQUFLLEVB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ZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgb2xXS1QgZnJvbSAnb2wvZm9ybWF0L1dLVCc7XG5cbmltcG9ydCB7IEZFQVRVUkUsIEZlYXR1cmUsIEZlYXR1cmVHZW9tZXRyeSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9zZWFyY2guaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTZWFyY2hTb3VyY2UsIFRleHRTZWFyY2ggfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQgeyBTZWFyY2hTb3VyY2VPcHRpb25zLCBUZXh0U2VhcmNoT3B0aW9ucyB9IGZyb20gJy4vc291cmNlLmludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBjb21wdXRlVGVybVNpbWlsYXJpdHkgfSBmcm9tICcuLi9zZWFyY2gudXRpbHMnO1xuaW1wb3J0IHsgQ2FjaGVhYmxlIH0gZnJvbSAndHMtY2FjaGVhYmxlJztcbi8qKlxuICogQ2FkYXN0cmUgc2VhcmNoIHNvdXJjZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FkYXN0cmVTZWFyY2hTb3VyY2UgZXh0ZW5kcyBTZWFyY2hTb3VyY2UgaW1wbGVtZW50cyBUZXh0U2VhcmNoIHtcbiAgc3RhdGljIGlkID0gJ2NhZGFzdHJlJztcbiAgc3RhdGljIHR5cGUgPSBGRUFUVVJFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBASW5qZWN0KCdvcHRpb25zJykgb3B0aW9uczogU2VhcmNoU291cmNlT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihvcHRpb25zLCBzdG9yYWdlU2VydmljZSk7XG4gIH1cblxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBDYWRhc3RyZVNlYXJjaFNvdXJjZS5pZDtcbiAgfVxuXG4gIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQ2FkYXN0cmVTZWFyY2hTb3VyY2UudHlwZTtcbiAgfVxuXG4gIC8qXG4gICAqIFNvdXJjZSA6IGh0dHBzOi8vd2lraS5vcGVuc3RyZWV0bWFwLm9yZy93aWtpL0tleTphbWVuaXR5XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdE9wdGlvbnMoKTogU2VhcmNoU291cmNlT3B0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnQ2FkYXN0cmUgKFF1w6liZWMpJyxcbiAgICAgIHNlYXJjaFVybDogJ2h0dHBzOi8vY2FydG8uY3B0YXEuZ291di5xYy5jYS9waHAvZmluZF9sb3RfdjEucGhwPydcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhIHBsYWNlIGJ5IG5hbWVcbiAgICogQHBhcmFtIHRlcm0gUGxhY2UgbmFtZVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlIG9mIDxTZWFyY2hSZXN1bHQ8RmVhdHVyZT5bXVxuICAgKi9cbiAgQENhY2hlYWJsZSh7XG4gICAgbWF4Q2FjaGVDb3VudDogMjBcbiAgfSlcbiAgc2VhcmNoKFxuICAgIHRlcm06IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBvcHRpb25zPzogVGV4dFNlYXJjaE9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHQ8RmVhdHVyZT5bXT4ge1xuICAgIHRlcm0gPSB0ZXJtLmVuZHNXaXRoKCcsJykgPyB0ZXJtLnNsaWNlKDAsIC0xKSA6IHRlcm07XG4gICAgdGVybSA9IHRlcm0uc3RhcnRzV2l0aCgnLCcpID8gdGVybS5zdWJzdHIoMSkgOiB0ZXJtO1xuICAgIHRlcm0gPSB0ZXJtLnJlcGxhY2UoLyAvZywgJycpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb21wdXRlU2VhcmNoUmVxdWVzdFBhcmFtcyh0ZXJtLCBvcHRpb25zIHx8IHt9KTtcbiAgICBpZiAoIXBhcmFtcy5nZXQoJ251bWVybycpIHx8ICFwYXJhbXMuZ2V0KCdudW1lcm8nKS5tYXRjaCgvXlswLTksXSskL2cpKSB7XG4gICAgICByZXR1cm4gb2YoW10pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuc2VhcmNoVXJsLCB7IHBhcmFtcywgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgIC5waXBlKG1hcCgocmVzcG9uc2U6IHN0cmluZykgPT4gdGhpcy5leHRyYWN0UmVzdWx0cyhyZXNwb25zZSwgdGVybSkpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZVNlYXJjaFJlcXVlc3RQYXJhbXMoXG4gICAgdGVybTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRleHRTZWFyY2hPcHRpb25zXG4gICk6IEh0dHBQYXJhbXMge1xuICAgIHJldHVybiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tT2JqZWN0OiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgbnVtZXJvOiB0ZXJtLFxuICAgICAgICAgIGVwc2c6ICc0MzI2J1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLnBhcmFtcyxcbiAgICAgICAgb3B0aW9ucy5wYXJhbXMgfHwge31cbiAgICAgIClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFJlc3VsdHMocmVzcG9uc2U6IHN0cmluZywgdGVybTogc3RyaW5nKTogU2VhcmNoUmVzdWx0PEZlYXR1cmU+W10ge1xuICAgIHJldHVybiByZXNwb25zZVxuICAgICAgLnNwbGl0KCc8YnIgLz4nKVxuICAgICAgLmZpbHRlcigobG90OiBzdHJpbmcpID0+IGxvdC5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgobG90OiBzdHJpbmcpID0+IHRoaXMuZGF0YVRvUmVzdWx0KGxvdCwgdGVybSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkYXRhVG9SZXN1bHQoZGF0YTogc3RyaW5nLCB0ZXJtOiBzdHJpbmcpOiBTZWFyY2hSZXN1bHQ8RmVhdHVyZT4ge1xuICAgIGNvbnN0IGxvdCA9IGRhdGEuc3BsaXQoJzsnKTtcbiAgICBjb25zdCBudW1lcm8gPSBsb3RbMF07XG4gICAgY29uc3Qgd2t0ID0gbG90WzddO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5jb21wdXRlR2VvbWV0cnkod2t0KTtcblxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7XG4gICAgICBOb0xvdDogbnVtZXJvLFxuICAgICAgUm91dGU6ICc8c3BhbiBjbGFzcz1cInJvdXRpbmdcIj4gPHU+JyArIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnNlZVJvdXRpbmcnKSArICc8L3U+IDwvc3Bhbj4nXG4gICAgfTtcbiAgICBjb25zdCBpZCA9IFt0aGlzLmdldElkKCksICdjYWRhc3RyZScsIG51bWVyb10uam9pbignLicpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgZGF0YVR5cGU6IEZFQVRVUkUsXG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZTogbnVtZXJvLFxuICAgICAgICBzY29yZTogY29tcHV0ZVRlcm1TaW1pbGFyaXR5KHRlcm0udHJpbSgpLCBudW1lcm8pLFxuICAgICAgICBpY29uOiAnbWFwLW1hcmtlcidcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IEZFQVRVUkUsXG4gICAgICAgIHByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICBnZW9tZXRyeSxcbiAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRpdGxlOiBudW1lcm9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVHZW9tZXRyeSh3a3Q6IHN0cmluZyk6IEZlYXR1cmVHZW9tZXRyeSB7XG4gICAgY29uc3QgZmVhdHVyZSA9IG5ldyBvbFdLVCgpLnJlYWRGZWF0dXJlKHdrdCwge1xuICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgZmVhdHVyZVByb2plY3Rpb246ICdFUFNHOjQzMjYnXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCksXG4gICAgICBjb29yZGluYXRlczogZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKClcbiAgICB9O1xuICB9XG59XG4iXX0=