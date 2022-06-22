import { __decorate } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import * as olproj from 'ol/proj';
import { fromCircle } from 'ol/geom/Polygon';
import OlCircle from 'ol/geom/Circle';
import * as olformat from 'ol/format';
import { FEATURE } from '../../../feature';
import { SearchSource } from './source';
import { GoogleLinks } from '../../../utils/googleLinks';
import { lonLatConversion, roundCoordTo, convertDDToDMS } from '../../../map/shared/map.utils';
import { OsmLinks } from '../../../utils';
import { Cacheable } from 'ts-cacheable';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
export class CoordinatesSearchResultFormatter {
    constructor(languageService) {
        this.languageService = languageService;
    }
    formatResult(result) {
        return result;
    }
}
CoordinatesSearchResultFormatter.ɵfac = function CoordinatesSearchResultFormatter_Factory(t) { return new (t || CoordinatesSearchResultFormatter)(i0.ɵɵinject(i1.LanguageService)); };
CoordinatesSearchResultFormatter.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CoordinatesSearchResultFormatter, factory: CoordinatesSearchResultFormatter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoordinatesSearchResultFormatter, [{
        type: Injectable
    }], function () { return [{ type: i1.LanguageService }]; }, null); })();
/**
 * CoordinatesReverse search source
 */
export class CoordinatesReverseSearchSource extends SearchSource {
    constructor(options, languageService, storageService, projections) {
        super(options, storageService);
        this.languageService = languageService;
        this.title$ = new BehaviorSubject('');
        this.projections = projections;
        this.languageService.translate
            .get(this.options.title)
            .subscribe(title => this.title$.next(title));
    }
    get title() {
        return this.title$.getValue();
    }
    getId() {
        return CoordinatesReverseSearchSource.id;
    }
    getType() {
        return CoordinatesReverseSearchSource.type;
    }
    getDefaultOptions() {
        return {
            title: 'igo.geo.search.coordinates.name',
            order: 1,
            showInSettings: false
        };
    }
    /**
     * Search a location by coordinates
     * @param lonLat Location coordinates
     * @param options options of ReverseSearchOptions (distance, conf, zoom, params)
     * @returns Observable of <SearchResult<Feature>[]
     */
    reverseSearch(lonLat, options) {
        return of([this.dataToResult(lonLat, options)]);
    }
    dataToResult(data, options) {
        const dataDMS = convertDDToDMS(data);
        const convertedCoord = lonLatConversion(data, this.projections);
        const coords = convertedCoord.reduce((obj, item) => (obj[item.alias] = item.igo2CoordFormat, obj), {});
        const roundedCoordString = roundCoordTo(data, 6).join(', ');
        const roundedCoordStringDMS = dataDMS.join(', ');
        let geometry = {
            type: 'Point',
            coordinates: [data[0], data[1]]
        };
        const properties = {};
        let subtitleHtml = '';
        if (options.distance) {
            const radiusKey = this.languageService.translate.instant('igo.geo.search.coordinates.radius');
            properties[radiusKey] = options.distance;
            subtitleHtml = '<br><small>Rayon: ' + options.distance + ' m</small>';
            // Create polygon
            const center = olproj.transform([data[0], data[1]], 'EPSG:4326', 'EPSG:3857');
            const circleGeometry = new OlCircle(center, options.distance);
            const polygonGeometry = fromCircle(circleGeometry);
            const writer = new olformat.GeoJSON();
            geometry = JSON.parse(writer.writeGeometry(polygonGeometry.transform('EPSG:3857', 'EPSG:4326')));
        }
        if (options.conf) {
            const confKey = this.languageService.translate.instant('igo.geo.search.coordinates.conf');
            properties[confKey] = options.conf;
            subtitleHtml += subtitleHtml === '' ? '<br>' : '<small> - </small>';
            subtitleHtml += '<small>Confiance: ' + options.conf + '%</small>';
        }
        const coordKey = this.languageService.translate.instant('igo.geo.search.coordinates.coord');
        properties[coordKey] = roundedCoordString;
        const coordKeyDMS = this.languageService.translate.instant('igo.geo.search.coordinates.coordDMS');
        properties[coordKeyDMS] = roundedCoordStringDMS;
        return {
            source: this,
            data: {
                type: FEATURE,
                projection: 'EPSG:4326',
                geometry,
                extent: undefined,
                properties: Object.assign(properties, coords, {
                    GoogleMaps: GoogleLinks.getGoogleMapsCoordLink(data[0], data[1]),
                    GoogleStreetView: GoogleLinks.getGoogleStreetViewLink(data[0], data[1]),
                    OpenStreetMap: OsmLinks.getOpenStreetMapLink(data[0], data[1], 14),
                    Route: '<span class="routing"> <u>' + this.languageService.translate.instant('igo.geo.seeRouting') + '</u> </span>'
                }),
                meta: {
                    id: data[0].toString() + ',' + data[1].toString(),
                    title: roundedCoordString
                }
            },
            meta: {
                dataType: FEATURE,
                id: data[0].toString() + ',' + data[1].toString(),
                title: roundedCoordString,
                titleHtml: roundedCoordString + subtitleHtml,
                icon: 'map-marker',
                score: 100, // every coord exists
            }
        };
    }
}
CoordinatesReverseSearchSource.id = 'coordinatesreverse';
CoordinatesReverseSearchSource.type = FEATURE;
CoordinatesReverseSearchSource.ɵfac = function CoordinatesReverseSearchSource_Factory(t) { return new (t || CoordinatesReverseSearchSource)(i0.ɵɵinject('options'), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i1.StorageService), i0.ɵɵinject('projections')); };
CoordinatesReverseSearchSource.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CoordinatesReverseSearchSource, factory: CoordinatesReverseSearchSource.ɵfac });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], CoordinatesReverseSearchSource.prototype, "reverseSearch", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoordinatesReverseSearchSource, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['options']
            }] }, { type: i1.LanguageService }, { type: i1.StorageService }, { type: undefined, decorators: [{
                type: Inject,
                args: ['projections']
            }] }]; }, { reverseSearch: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2hhcmVkL3NvdXJjZXMvY29vcmRpbmF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxlQUFlLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLFFBQVEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUV0QyxPQUFPLEVBQUUsT0FBTyxFQUE0QixNQUFNLGtCQUFrQixDQUFDO0FBR3JFLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sVUFBVSxDQUFDO0FBSXZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9GLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHekMsTUFBTSxPQUFPLGdDQUFnQztJQUMzQyxZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRXhELFlBQVksQ0FBQyxNQUE2QjtRQUN4QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnSEFMVSxnQ0FBZ0M7c0ZBQWhDLGdDQUFnQyxXQUFoQyxnQ0FBZ0M7dUZBQWhDLGdDQUFnQztjQUQ1QyxVQUFVOztB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QUNsQixLQUFLLEVBQUUsR0FBRyxFQUFFLHFCQUFxQjthQUNsQztTQUNGLENBQUM7SUFDSixDQUFDOztBQXBJTSxpQ0FBRSxHQUFHLG9CQUFvQixDQUFDO0FBQzFCLG1DQUFJLEdBQUcsT0FBTyxDQUFDOzRHQUhYLDhCQUE4QixjQWMvQixTQUFTLGdGQUdULGFBQWE7b0ZBakJaLDhCQUE4QixXQUE5Qiw4QkFBOEI7QUFtRHpDO0lBSEMsU0FBUyxDQUFDO1FBQ1QsYUFBYSxFQUFFLEVBQUU7S0FDbEIsQ0FBQzttRUFNRDt1RkF4RFUsOEJBQThCO2NBRDFDLFVBQVU7O3NCQWVOLE1BQU07dUJBQUMsU0FBUzs7c0JBR2hCLE1BQU07dUJBQUMsYUFBYTt3QkFrQ3ZCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIG9scHJvaiBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IGZyb21DaXJjbGUgfSBmcm9tICdvbC9nZW9tL1BvbHlnb24nO1xuaW1wb3J0IE9sQ2lyY2xlIGZyb20gJ29sL2dlb20vQ2lyY2xlJztcbmltcG9ydCAqIGFzIG9sZm9ybWF0IGZyb20gJ29sL2Zvcm1hdCc7XG5cbmltcG9ydCB7IEZFQVRVUkUsIEZlYXR1cmUsIEZlYXR1cmVHZW9tZXRyeSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9zZWFyY2guaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTZWFyY2hTb3VyY2UsIFJldmVyc2VTZWFyY2ggfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQgeyBTZWFyY2hTb3VyY2VPcHRpb25zLCBSZXZlcnNlU2VhcmNoT3B0aW9ucyB9IGZyb20gJy4vc291cmNlLmludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVMaW5rcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2dvb2dsZUxpbmtzJztcbmltcG9ydCB7IFByb2plY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9tYXAvc2hhcmVkL3Byb2plY3Rpb24uaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBsb25MYXRDb252ZXJzaW9uLCByb3VuZENvb3JkVG8sIGNvbnZlcnRERFRvRE1TIH0gZnJvbSAnLi4vLi4vLi4vbWFwL3NoYXJlZC9tYXAudXRpbHMnO1xuaW1wb3J0IHsgT3NtTGlua3MgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDYWNoZWFibGUgfSBmcm9tICd0cy1jYWNoZWFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXNTZWFyY2hSZXN1bHRGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7fVxuXG4gIGZvcm1hdFJlc3VsdChyZXN1bHQ6IFNlYXJjaFJlc3VsdDxGZWF0dXJlPik6IFNlYXJjaFJlc3VsdDxGZWF0dXJlPiB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuLyoqXG4gKiBDb29yZGluYXRlc1JldmVyc2Ugc2VhcmNoIHNvdXJjZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXNSZXZlcnNlU2VhcmNoU291cmNlIGV4dGVuZHMgU2VhcmNoU291cmNlXG4gIGltcGxlbWVudHMgUmV2ZXJzZVNlYXJjaCB7XG4gIHN0YXRpYyBpZCA9ICdjb29yZGluYXRlc3JldmVyc2UnO1xuICBzdGF0aWMgdHlwZSA9IEZFQVRVUkU7XG5cbiAgcHJpdmF0ZSBwcm9qZWN0aW9ucztcblxuICB0aXRsZSQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZSQuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ29wdGlvbnMnKSBvcHRpb25zOiBTZWFyY2hTb3VyY2VPcHRpb25zLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ3Byb2plY3Rpb25zJykgcHJvamVjdGlvbnM6IFByb2plY3Rpb25bXSxcbiAgKSB7XG4gICAgc3VwZXIob3B0aW9ucywgc3RvcmFnZVNlcnZpY2UpO1xuICAgIHRoaXMucHJvamVjdGlvbnMgPSBwcm9qZWN0aW9ucztcbiAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGVcbiAgICAgIC5nZXQodGhpcy5vcHRpb25zLnRpdGxlKVxuICAgICAgLnN1YnNjcmliZSh0aXRsZSA9PiB0aGlzLnRpdGxlJC5uZXh0KHRpdGxlKSk7XG4gIH1cblxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBDb29yZGluYXRlc1JldmVyc2VTZWFyY2hTb3VyY2UuaWQ7XG4gIH1cblxuICBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIENvb3JkaW5hdGVzUmV2ZXJzZVNlYXJjaFNvdXJjZS50eXBlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldERlZmF1bHRPcHRpb25zKCk6IFNlYXJjaFNvdXJjZU9wdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ2lnby5nZW8uc2VhcmNoLmNvb3JkaW5hdGVzLm5hbWUnLFxuICAgICAgb3JkZXI6IDEsXG4gICAgICBzaG93SW5TZXR0aW5nczogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhIGxvY2F0aW9uIGJ5IGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSBsb25MYXQgTG9jYXRpb24gY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyBvZiBSZXZlcnNlU2VhcmNoT3B0aW9ucyAoZGlzdGFuY2UsIGNvbmYsIHpvb20sIHBhcmFtcylcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSBvZiA8U2VhcmNoUmVzdWx0PEZlYXR1cmU+W11cbiAgICovXG4gIEBDYWNoZWFibGUoe1xuICAgIG1heENhY2hlQ291bnQ6IDIwXG4gIH0pXG4gIHJldmVyc2VTZWFyY2goXG4gICAgbG9uTGF0OiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIG9wdGlvbnM/OiBSZXZlcnNlU2VhcmNoT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdDxGZWF0dXJlPltdPiB7XG4gICAgcmV0dXJuIG9mKFt0aGlzLmRhdGFUb1Jlc3VsdChsb25MYXQsIG9wdGlvbnMpXSk7XG4gIH1cblxuICBwcml2YXRlIGRhdGFUb1Jlc3VsdChkYXRhOiBbbnVtYmVyLCBudW1iZXJdLCBvcHRpb25zOiBSZXZlcnNlU2VhcmNoT3B0aW9ucyk6IFNlYXJjaFJlc3VsdDxGZWF0dXJlPiB7XG4gICAgY29uc3QgZGF0YURNUyA9IGNvbnZlcnRERFRvRE1TKGRhdGEpO1xuICAgIGNvbnN0IGNvbnZlcnRlZENvb3JkID0gbG9uTGF0Q29udmVyc2lvbihkYXRhLCB0aGlzLnByb2plY3Rpb25zKTtcbiAgICBjb25zdCBjb29yZHMgPSBjb252ZXJ0ZWRDb29yZC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4gKFxuICAgICAgb2JqW2l0ZW0uYWxpYXNdID0gaXRlbS5pZ28yQ29vcmRGb3JtYXQsIG9iaiksIHt9KTtcblxuICAgIGNvbnN0IHJvdW5kZWRDb29yZFN0cmluZyA9IHJvdW5kQ29vcmRUbyhkYXRhLCA2KS5qb2luKCcsICcpO1xuICAgIGNvbnN0IHJvdW5kZWRDb29yZFN0cmluZ0RNUyA9IGRhdGFETVMuam9pbignLCAnKTtcblxuICAgIGxldCBnZW9tZXRyeTogRmVhdHVyZUdlb21ldHJ5ID0ge1xuICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgIGNvb3JkaW5hdGVzOiBbZGF0YVswXSwgZGF0YVsxXV1cbiAgICB9O1xuXG4gICAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xuICAgIGxldCBzdWJ0aXRsZUh0bWwgPSAnJztcbiAgICBpZiAob3B0aW9ucy5kaXN0YW5jZSkge1xuICAgICAgY29uc3QgcmFkaXVzS2V5ID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uc2VhcmNoLmNvb3JkaW5hdGVzLnJhZGl1cycpO1xuICAgICAgcHJvcGVydGllc1tyYWRpdXNLZXldID0gb3B0aW9ucy5kaXN0YW5jZTtcbiAgICAgIHN1YnRpdGxlSHRtbCA9ICc8YnI+PHNtYWxsPlJheW9uOiAnICsgb3B0aW9ucy5kaXN0YW5jZSArICcgbTwvc21hbGw+JztcblxuICAgICAgLy8gQ3JlYXRlIHBvbHlnb25cbiAgICAgIGNvbnN0IGNlbnRlciA9IG9scHJvai50cmFuc2Zvcm0oW2RhdGFbMF0sIGRhdGFbMV1dLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuICAgICAgY29uc3QgY2lyY2xlR2VvbWV0cnkgPSBuZXcgT2xDaXJjbGUoY2VudGVyLCBvcHRpb25zLmRpc3RhbmNlKTtcbiAgICAgIGNvbnN0IHBvbHlnb25HZW9tZXRyeSA9IGZyb21DaXJjbGUoY2lyY2xlR2VvbWV0cnkpO1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IG9sZm9ybWF0Lkdlb0pTT04oKTtcbiAgICAgIGdlb21ldHJ5ID0gSlNPTi5wYXJzZSh3cml0ZXIud3JpdGVHZW9tZXRyeShwb2x5Z29uR2VvbWV0cnkudHJhbnNmb3JtKCdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JykpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jb25mKSB7XG4gICAgICBjb25zdCBjb25mS2V5ID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uc2VhcmNoLmNvb3JkaW5hdGVzLmNvbmYnKTtcbiAgICAgIHByb3BlcnRpZXNbY29uZktleV0gPSBvcHRpb25zLmNvbmY7XG4gICAgICBzdWJ0aXRsZUh0bWwgKz0gc3VidGl0bGVIdG1sID09PSAnJyA/ICc8YnI+JyA6ICc8c21hbGw+IC0gPC9zbWFsbD4nO1xuICAgICAgc3VidGl0bGVIdG1sICs9ICc8c21hbGw+Q29uZmlhbmNlOiAnICsgb3B0aW9ucy5jb25mICsgJyU8L3NtYWxsPic7XG4gICAgfVxuXG4gICAgY29uc3QgY29vcmRLZXkgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5zZWFyY2guY29vcmRpbmF0ZXMuY29vcmQnKTtcbiAgICBwcm9wZXJ0aWVzW2Nvb3JkS2V5XSA9IHJvdW5kZWRDb29yZFN0cmluZztcblxuICAgIGNvbnN0IGNvb3JkS2V5RE1TID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uc2VhcmNoLmNvb3JkaW5hdGVzLmNvb3JkRE1TJyk7XG4gICAgcHJvcGVydGllc1tjb29yZEtleURNU10gPSByb3VuZGVkQ29vcmRTdHJpbmdETVM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBGRUFUVVJFLFxuICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgIGV4dGVudDogdW5kZWZpbmVkLFxuICAgICAgICBwcm9wZXJ0aWVzOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgICAgY29vcmRzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEdvb2dsZU1hcHM6IEdvb2dsZUxpbmtzLmdldEdvb2dsZU1hcHNDb29yZExpbmsoZGF0YVswXSwgZGF0YVsxXSksXG4gICAgICAgICAgICBHb29nbGVTdHJlZXRWaWV3OiBHb29nbGVMaW5rcy5nZXRHb29nbGVTdHJlZXRWaWV3TGluayhcbiAgICAgICAgICAgICAgZGF0YVswXSxcbiAgICAgICAgICAgICAgZGF0YVsxXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIE9wZW5TdHJlZXRNYXA6IE9zbUxpbmtzLmdldE9wZW5TdHJlZXRNYXBMaW5rKGRhdGFbMF0sIGRhdGFbMV0sIDE0KSxcbiAgICAgICAgICAgIFJvdXRlOiAnPHNwYW4gY2xhc3M9XCJyb3V0aW5nXCI+IDx1PicgKyB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5zZWVSb3V0aW5nJykgKyAnPC91PiA8L3NwYW4+J1xuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIGlkOiBkYXRhWzBdLnRvU3RyaW5nKCkgKyAnLCcgKyBkYXRhWzFdLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGl0bGU6IHJvdW5kZWRDb29yZFN0cmluZ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0YToge1xuICAgICAgICBkYXRhVHlwZTogRkVBVFVSRSxcbiAgICAgICAgaWQ6IGRhdGFbMF0udG9TdHJpbmcoKSArICcsJyArIGRhdGFbMV0udG9TdHJpbmcoKSxcbiAgICAgICAgdGl0bGU6IHJvdW5kZWRDb29yZFN0cmluZyxcbiAgICAgICAgdGl0bGVIdG1sOiByb3VuZGVkQ29vcmRTdHJpbmcgKyBzdWJ0aXRsZUh0bWwsXG4gICAgICAgIGljb246ICdtYXAtbWFya2VyJyxcbiAgICAgICAgc2NvcmU6IDEwMCwgLy8gZXZlcnkgY29vcmQgZXhpc3RzXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19