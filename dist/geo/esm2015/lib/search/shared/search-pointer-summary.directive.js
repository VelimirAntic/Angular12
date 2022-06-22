import { Directive, Input, Self } from '@angular/core';
import olFeature from 'ol/Feature';
import { transform } from 'ol/proj';
import * as olstyle from 'ol/style';
import * as olgeom from 'ol/geom';
import OlGeoJSON from 'ol/format/GeoJSON';
import { EntityStore } from '@igo2/common';
import { FeatureDataSource } from '../../datasource/shared/datasources/feature-datasource';
import { VectorLayer } from '../../layer/shared/layers/vector-layer';
import { take } from 'rxjs/operators';
import { tryBindStoreLayer } from '../../feature/shared/feature.utils';
import { FeatureStore } from '../../feature/shared/store';
import { FeatureMotion, FEATURE } from '../../feature/shared/feature.enums';
import { sourceCanReverseSearchAsSummary } from './search.utils';
import { unByKey } from 'ol/Observable';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map-browser/map-browser.component";
import * as i2 from "./search.service";
import * as i3 from "./search-source.service";
import * as i4 from "@igo2/core";
/**
 * This directive makes the mouse coordinate trigger a reverse search on available search sources.
 * The search results are placed into a label, on a cross icon, representing the mouse coordinate.
 * By default, no search sources. Config in config file must be defined.
 * the layer level.
 */
export class SearchPointerSummaryDirective {
    constructor(component, searchService, searchSourceService, mediaService) {
        this.component = component;
        this.searchService = searchService;
        this.searchSourceService = searchSourceService;
        this.mediaService = mediaService;
        this.pointerSearchStore = new EntityStore([]);
        this.reverseSearch$$ = [];
        this.hasPointerReverseSearchSource = false;
        this.searchPointerSummaryFeatureId = 'searchPointerSummaryFeatureId';
        /**
         * The delay where the mouse must be motionless before trigger the reverse search
         */
        this.igoSearchPointerSummaryDelay = 1000;
        /**
         * If the user has enabled or not the directive
         */
        this.igoSearchPointerSummaryEnabled = false;
    }
    /**
     * IGO map
     * @internal
     */
    get map() {
        return this.component.map;
    }
    get mapProjection() {
        return this.component.map.projection;
    }
    /**
     * Start listening to pointermove and reverse search results.
     * @internal
     */
    ngOnInit() {
        this.listenToMapPointerMove();
        this.subscribeToPointerStore();
        this.map.status$.pipe(take(1)).subscribe(() => {
            this.store = new FeatureStore([], { map: this.map });
            this.initStore();
        });
        // To handle context change without using the contextService.
        this.layers$$ = this.map.layers$.subscribe((layers) => {
            if (this.store && !layers.find(l => l.id === 'searchPointerSummaryId')) {
                this.initStore();
            }
        });
    }
    /**
     * Initialize the pointer position store
     * @internal
     */
    initStore() {
        const store = this.store;
        const layer = new VectorLayer({
            isIgoInternalLayer: true,
            id: 'searchPointerSummaryId',
            title: 'searchPointerSummary',
            zIndex: 900,
            source: new FeatureDataSource(),
            showInLayerList: false,
            exportable: false,
            browsable: false,
            style: pointerPositionSummaryMarker
        });
        tryBindStoreLayer(store, layer);
    }
    ngAfterContentChecked() {
        if (!this.searchSourceService.getEnabledSources().filter(sourceCanReverseSearchAsSummary).length) {
            this.hasPointerReverseSearchSource = false;
        }
        else {
            this.hasPointerReverseSearchSource = true;
        }
    }
    /**
     * Stop listening to pointermove and reverse search results.
     * @internal
     */
    ngOnDestroy() {
        this.unlistenToMapPointerMove();
        this.unsubscribeToPointerStore();
        this.unsubscribeReverseSearch();
        this.layers$$.unsubscribe();
    }
    /**
     * Subscribe to pointermove result store
     * @internal
     */
    subscribeToPointerStore() {
        this.store$$ = this.pointerSearchStore.entities$.subscribe(resultsUnderPointerPosition => {
            this.entitiesToPointerOverlay(resultsUnderPointerPosition);
        });
    }
    /**
     * Build an object based on the closest feature by type (base on type and distance properties )
     * @param results SearchResult[]
     * @returns OL style function
     */
    computeSummaryClosestFeature(results) {
        const closestResultByType = {};
        results.map(result => {
            if (result.data.properties.type && result.data.properties.distance >= 0) {
                if (closestResultByType.hasOwnProperty(result.data.properties.type)) {
                    const prevDistance = closestResultByType[result.data.properties.type].distance;
                    if (result.data.properties.distance < prevDistance) {
                        const title = result.meta.pointerSummaryTitle || result.meta.title;
                        closestResultByType[result.data.properties.type] = { distance: result.data.properties.distance, title };
                    }
                }
                else {
                    const title = result.meta.pointerSummaryTitle || result.meta.title;
                    closestResultByType[result.data.properties.type] = { distance: result.data.properties.distance, title };
                }
            }
        });
        return closestResultByType;
    }
    /**
     * convert store entities to a pointer position overlay with label summary on.
     * @param event OL map browser pointer event
     */
    entitiesToPointerOverlay(resultsUnderPointerPosition) {
        const closestResultByType = this.computeSummaryClosestFeature(resultsUnderPointerPosition);
        const summarizedClosestType = Object.keys(closestResultByType);
        const processedSummarizedClosestType = [];
        const summary = [];
        resultsUnderPointerPosition.map(result => {
            const typeIndex = summarizedClosestType.indexOf(result.data.properties.type);
            if (typeIndex !== -1) {
                summary.push(closestResultByType[result.data.properties.type].title);
                summarizedClosestType.splice(typeIndex, 1);
                processedSummarizedClosestType.push(result.data.properties.type);
            }
            else {
                if (processedSummarizedClosestType.indexOf(result.data.properties.type) === -1) {
                    summary.push(result.meta.pointerSummaryTitle || result.meta.title);
                }
            }
        });
        if (summary.length) {
            this.addPointerOverlay(summary.join('\n'));
        }
    }
    /**
     * On map pointermove
     */
    listenToMapPointerMove() {
        this.pointerMoveListener = this.map.ol.on('pointermove', (event) => this.onMapEvent(event));
    }
    /**
     * Unsubscribe to pointer store.
     * @internal
     */
    unsubscribeToPointerStore() {
        this.store$$.unsubscribe();
    }
    /**
     * Unsubscribe to reverse seatch store.
     * @internal
     */
    unsubscribeReverseSearch() {
        this.reverseSearch$$.map(s => s.unsubscribe());
        this.reverseSearch$$ = [];
    }
    /**
     * Stop listening for map pointermove
     * @internal
     */
    unlistenToMapPointerMove() {
        unByKey(this.pointerMoveListener);
        this.pointerMoveListener = undefined;
    }
    /**
     * Trigger reverse search when the mouse is motionless during the defined delay (pointerMoveDelay).
     * @param event OL map browser pointer event
     */
    onMapEvent(event) {
        if (event.dragging || !this.igoSearchPointerSummaryEnabled ||
            !this.hasPointerReverseSearchSource || this.mediaService.isTouchScreen()) {
            this.clearLayer();
            return;
        }
        if (typeof this.lastTimeoutRequest !== 'undefined') { // cancel timeout when the mouse moves
            clearTimeout(this.lastTimeoutRequest);
            this.clearLayer();
            this.unsubscribeReverseSearch();
        }
        this.lonLat = transform(event.coordinate, this.mapProjection, 'EPSG:4326');
        this.lastTimeoutRequest = setTimeout(() => {
            this.onSearchCoordinate();
        }, this.igoSearchPointerSummaryDelay);
    }
    /**
   * Sort the results by display order.
   * @param r1 First result
   * @param r2 Second result
   */
    sortByOrder(r1, r2) {
        return r1.source.displayOrder - r2.source.displayOrder;
    }
    onSearchCoordinate() {
        this.pointerSearchStore.clear();
        const results = this.searchService.reverseSearch(this.lonLat, { params: { geometry: 'false', icon: 'false' } }, true);
        for (const i in results) {
            if (results.length > 0) {
                this.reverseSearch$$.push(results[i].request.subscribe((_results) => {
                    this.onSearch({ research: results[i], results: _results });
                }));
            }
        }
    }
    onSearch(event) {
        const results = event.results;
        const newResults = this.pointerSearchStore.all()
            .filter((result) => result.source !== event.research.source)
            .concat(results);
        this.pointerSearchStore.load(newResults.sort(this.sortByOrder));
    }
    /**
     * Add a feature to the pointer store
     * @param text string
     */
    addPointerOverlay(text) {
        this.clearLayer();
        const geometry = new olgeom.Point(transform(this.lonLat, 'EPSG:4326', this.mapProjection));
        const feature = new olFeature({ geometry });
        const geojsonGeom = new OlGeoJSON().writeGeometryObject(geometry, {
            featureProjection: this.mapProjection,
            dataProjection: this.mapProjection
        });
        const f = {
            type: FEATURE,
            geometry: geojsonGeom,
            projection: this.mapProjection,
            properties: {
                id: this.searchPointerSummaryFeatureId,
                pointerSummary: text
            },
            meta: {
                id: this.searchPointerSummaryFeatureId
            },
            ol: feature
        };
        this.store.setLayerFeatures([f], FeatureMotion.None);
    }
    /**
     * Clear the pointer store features
     */
    clearLayer() {
        if (this.store) {
            this.store.clearLayer();
        }
    }
}
SearchPointerSummaryDirective.ɵfac = function SearchPointerSummaryDirective_Factory(t) { return new (t || SearchPointerSummaryDirective)(i0.ɵɵdirectiveInject(i1.MapBrowserComponent, 2), i0.ɵɵdirectiveInject(i2.SearchService), i0.ɵɵdirectiveInject(i3.SearchSourceService), i0.ɵɵdirectiveInject(i4.MediaService)); };
SearchPointerSummaryDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SearchPointerSummaryDirective, selectors: [["", "igoSearchPointerSummary", ""]], inputs: { igoSearchPointerSummaryDelay: "igoSearchPointerSummaryDelay", igoSearchPointerSummaryEnabled: "igoSearchPointerSummaryEnabled" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchPointerSummaryDirective, [{
        type: Directive,
        args: [{
                selector: '[igoSearchPointerSummary]'
            }]
    }], function () { return [{ type: i1.MapBrowserComponent, decorators: [{
                type: Self
            }] }, { type: i2.SearchService }, { type: i3.SearchSourceService }, { type: i4.MediaService }]; }, { igoSearchPointerSummaryDelay: [{
            type: Input
        }], igoSearchPointerSummaryEnabled: [{
            type: Input
        }] }); })();
/**
 * Create a default style for the pointer position and it's label summary.
 * @param feature OlFeature
 * @returns OL style function
 */
export function pointerPositionSummaryMarker(feature, resolution) {
    return new olstyle.Style({
        image: new olstyle.Icon({
            src: './assets/igo2/geo/icons/cross_black_18px.svg',
            imgSize: [18, 18], // for ie
        }),
        text: new olstyle.Text({
            text: feature.get('pointerSummary'),
            textAlign: 'left',
            textBaseline: 'bottom',
            font: '12px Calibri,sans-serif',
            fill: new olstyle.Fill({ color: '#000' }),
            backgroundFill: new olstyle.Fill({ color: 'rgba(255, 255, 255, 0.5)' }),
            backgroundStroke: new olstyle.Stroke({ color: 'rgba(200, 200, 200, 0.75)', width: 2 }),
            stroke: new olstyle.Stroke({ color: '#fff', width: 3 }),
            overflow: true,
            offsetX: 10,
            offsetY: -10,
            padding: [2.5, 2.5, 2.5, 2.5]
        })
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBvaW50ZXItc3VtbWFyeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2hhcmVkL3NlYXJjaC1wb2ludGVyLXN1bW1hcnkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLElBQUksRUFHTCxNQUFNLGVBQWUsQ0FBQztBQVd2QixPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEtBQUssTUFBTSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLFNBQVMsTUFBTSxtQkFBbUIsQ0FBQztBQUkxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFNUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRXhDOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLDZCQUE2QjtJQXVDeEMsWUFDa0IsU0FBOEIsRUFD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QyxLQUFLLENBQUM7UUFDdkIsS0FBSyxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQztZQUN0QixHQUFHLEVBQUUsOENBQThDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTO1NBQzdCLENBQUM7UUFFRixJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3JCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1lBQ25DLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFlBQVksRUFBRSxRQUFRO1lBQ3RCLElBQUksRUFBRSx5QkFBeUI7WUFDL0IsSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztZQUN6QyxjQUFjLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLDBCQUEwQixFQUFFLENBQUM7WUFDdkUsZ0JBQWdCLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUN0RixNQUFNLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDdkQsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDOUIsQ0FBQztLQUNILENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGZWF0dXJlR2VvbWV0cnkgfSBmcm9tICcuLy4uLy4uL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFNlbGYsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCBNYXBCcm93c2VyUG9pbnRlckV2ZW50IGZyb20gJ29sL01hcEJyb3dzZXJFdmVudCc7XG5cbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcC9zaGFyZWQvbWFwJztcbmltcG9ydCB7IE1hcEJyb3dzZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tYXAvbWFwLWJyb3dzZXIvbWFwLWJyb3dzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NoYXJlZC9mZWF0dXJlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gJy4vc2VhcmNoLnNlcnZpY2UnO1xuXG5pbXBvcnQgb2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgKiBhcyBvbHN0eWxlIGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCAqIGFzIG9sZ2VvbSBmcm9tICdvbC9nZW9tJztcbmltcG9ydCBPbEdlb0pTT04gZnJvbSAnb2wvZm9ybWF0L0dlb0pTT04nO1xuaW1wb3J0IHR5cGUgeyBkZWZhdWx0IGFzIE9sR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcblxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0LCBSZXNlYXJjaCB9IGZyb20gJy4vc2VhcmNoLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgRW50aXR5U3RvcmUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgRmVhdHVyZURhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy9mZWF0dXJlLWRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgVmVjdG9yTGF5ZXIgfSBmcm9tICcuLi8uLi9sYXllci9zaGFyZWQvbGF5ZXJzL3ZlY3Rvci1sYXllcic7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgdHJ5QmluZFN0b3JlTGF5ZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NoYXJlZC9mZWF0dXJlLnV0aWxzJztcbmltcG9ydCB7IEZlYXR1cmVTdG9yZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL3N0b3JlJztcbmltcG9ydCB7IEZlYXR1cmVNb3Rpb24sIEZFQVRVUkUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NoYXJlZC9mZWF0dXJlLmVudW1zJztcbmltcG9ydCB7IFNlYXJjaFNvdXJjZVNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1zb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBzb3VyY2VDYW5SZXZlcnNlU2VhcmNoQXNTdW1tYXJ5IH0gZnJvbSAnLi9zZWFyY2gudXRpbHMnO1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyB1bkJ5S2V5IH0gZnJvbSAnb2wvT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgbWFrZXMgdGhlIG1vdXNlIGNvb3JkaW5hdGUgdHJpZ2dlciBhIHJldmVyc2Ugc2VhcmNoIG9uIGF2YWlsYWJsZSBzZWFyY2ggc291cmNlcy5cbiAqIFRoZSBzZWFyY2ggcmVzdWx0cyBhcmUgcGxhY2VkIGludG8gYSBsYWJlbCwgb24gYSBjcm9zcyBpY29uLCByZXByZXNlbnRpbmcgdGhlIG1vdXNlIGNvb3JkaW5hdGUuXG4gKiBCeSBkZWZhdWx0LCBubyBzZWFyY2ggc291cmNlcy4gQ29uZmlnIGluIGNvbmZpZyBmaWxlIG11c3QgYmUgZGVmaW5lZC5cbiAqIHRoZSBsYXllciBsZXZlbC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lnb1NlYXJjaFBvaW50ZXJTdW1tYXJ5XSdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUG9pbnRlclN1bW1hcnlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cbiAgcHVibGljIHN0b3JlOiBGZWF0dXJlU3RvcmU8RmVhdHVyZT47XG4gIHByaXZhdGUgbG9uTGF0OiBbbnVtYmVyLCBudW1iZXJdO1xuICBwcml2YXRlIHBvaW50ZXJTZWFyY2hTdG9yZTogRW50aXR5U3RvcmU8U2VhcmNoUmVzdWx0PiA9IG5ldyBFbnRpdHlTdG9yZTxTZWFyY2hSZXN1bHQ+KFtdKTtcbiAgcHJpdmF0ZSBsYXN0VGltZW91dFJlcXVlc3Q7XG4gIHByaXZhdGUgc3RvcmUkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGxheWVycyQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcmV2ZXJzZVNlYXJjaCQkOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIGhhc1BvaW50ZXJSZXZlcnNlU2VhcmNoU291cmNlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyIHRvIHRoZSBwb2ludGVyIG1vdmUgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgcG9pbnRlck1vdmVMaXN0ZW5lcjtcblxuICBwcml2YXRlIHNlYXJjaFBvaW50ZXJTdW1tYXJ5RmVhdHVyZUlkOiBzdHJpbmcgPSAnc2VhcmNoUG9pbnRlclN1bW1hcnlGZWF0dXJlSWQnO1xuICAvKipcbiAgICogVGhlIGRlbGF5IHdoZXJlIHRoZSBtb3VzZSBtdXN0IGJlIG1vdGlvbmxlc3MgYmVmb3JlIHRyaWdnZXIgdGhlIHJldmVyc2Ugc2VhcmNoXG4gICAqL1xuICBASW5wdXQoKSBpZ29TZWFyY2hQb2ludGVyU3VtbWFyeURlbGF5OiBudW1iZXIgPSAxMDAwO1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgdXNlciBoYXMgZW5hYmxlZCBvciBub3QgdGhlIGRpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgaWdvU2VhcmNoUG9pbnRlclN1bW1hcnlFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElHTyBtYXBcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50Lm1hcDtcbiAgfVxuXG4gIGdldCBtYXBQcm9qZWN0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmNvbXBvbmVudC5tYXAgYXMgSWdvTWFwKS5wcm9qZWN0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNlbGYoKSBwcml2YXRlIGNvbXBvbmVudDogTWFwQnJvd3NlckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZWFyY2hTb3VyY2VTZXJ2aWNlOiBTZWFyY2hTb3VyY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2VcbiAgKSB7IH1cblxuICAvKipcbiAgICogU3RhcnQgbGlzdGVuaW5nIHRvIHBvaW50ZXJtb3ZlIGFuZCByZXZlcnNlIHNlYXJjaCByZXN1bHRzLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlzdGVuVG9NYXBQb2ludGVyTW92ZSgpO1xuICAgIHRoaXMuc3Vic2NyaWJlVG9Qb2ludGVyU3RvcmUoKTtcblxuICAgIHRoaXMubWFwLnN0YXR1cyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZSA9IG5ldyBGZWF0dXJlU3RvcmU8RmVhdHVyZT4oW10sIHttYXA6IHRoaXMubWFwfSk7XG4gICAgICB0aGlzLmluaXRTdG9yZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gVG8gaGFuZGxlIGNvbnRleHQgY2hhbmdlIHdpdGhvdXQgdXNpbmcgdGhlIGNvbnRleHRTZXJ2aWNlLlxuICAgIHRoaXMubGF5ZXJzJCQgPSB0aGlzLm1hcC5sYXllcnMkLnN1YnNjcmliZSgobGF5ZXJzKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdG9yZSAmJiAhbGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSAnc2VhcmNoUG9pbnRlclN1bW1hcnlJZCcpKSB7XG4gICAgICAgIHRoaXMuaW5pdFN0b3JlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBwb2ludGVyIHBvc2l0aW9uIHN0b3JlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJpdmF0ZSBpbml0U3RvcmUoKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzLnN0b3JlO1xuXG4gICAgY29uc3QgbGF5ZXIgPSBuZXcgVmVjdG9yTGF5ZXIoe1xuICAgICAgaXNJZ29JbnRlcm5hbExheWVyOiB0cnVlLFxuICAgICAgaWQgOiAnc2VhcmNoUG9pbnRlclN1bW1hcnlJZCcsXG4gICAgICB0aXRsZTogJ3NlYXJjaFBvaW50ZXJTdW1tYXJ5JyxcbiAgICAgIHpJbmRleDogOTAwLFxuICAgICAgc291cmNlOiBuZXcgRmVhdHVyZURhdGFTb3VyY2UoKSxcbiAgICAgIHNob3dJbkxheWVyTGlzdDogZmFsc2UsXG4gICAgICBleHBvcnRhYmxlOiBmYWxzZSxcbiAgICAgIGJyb3dzYWJsZTogZmFsc2UsXG4gICAgICBzdHlsZTogcG9pbnRlclBvc2l0aW9uU3VtbWFyeU1hcmtlclxuICAgIH0pO1xuICAgIHRyeUJpbmRTdG9yZUxheWVyKHN0b3JlLCBsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMuc2VhcmNoU291cmNlU2VydmljZS5nZXRFbmFibGVkU291cmNlcygpLmZpbHRlcihzb3VyY2VDYW5SZXZlcnNlU2VhcmNoQXNTdW1tYXJ5KS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5oYXNQb2ludGVyUmV2ZXJzZVNlYXJjaFNvdXJjZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYXNQb2ludGVyUmV2ZXJzZVNlYXJjaFNvdXJjZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGxpc3RlbmluZyB0byBwb2ludGVybW92ZSBhbmQgcmV2ZXJzZSBzZWFyY2ggcmVzdWx0cy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVubGlzdGVuVG9NYXBQb2ludGVyTW92ZSgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVUb1BvaW50ZXJTdG9yZSgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVSZXZlcnNlU2VhcmNoKCk7XG4gICAgdGhpcy5sYXllcnMkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBwb2ludGVybW92ZSByZXN1bHQgc3RvcmVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBzdWJzY3JpYmVUb1BvaW50ZXJTdG9yZSgpIHtcbiAgICB0aGlzLnN0b3JlJCQgPSB0aGlzLnBvaW50ZXJTZWFyY2hTdG9yZS5lbnRpdGllcyQuc3Vic2NyaWJlKHJlc3VsdHNVbmRlclBvaW50ZXJQb3NpdGlvbiA9PiB7XG4gICAgICB0aGlzLmVudGl0aWVzVG9Qb2ludGVyT3ZlcmxheShyZXN1bHRzVW5kZXJQb2ludGVyUG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGFuIG9iamVjdCBiYXNlZCBvbiB0aGUgY2xvc2VzdCBmZWF0dXJlIGJ5IHR5cGUgKGJhc2Ugb24gdHlwZSBhbmQgZGlzdGFuY2UgcHJvcGVydGllcyApXG4gICAqIEBwYXJhbSByZXN1bHRzIFNlYXJjaFJlc3VsdFtdXG4gICAqIEByZXR1cm5zIE9MIHN0eWxlIGZ1bmN0aW9uXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVTdW1tYXJ5Q2xvc2VzdEZlYXR1cmUocmVzdWx0czogU2VhcmNoUmVzdWx0W10pOiB7fSB7XG4gICAgY29uc3QgY2xvc2VzdFJlc3VsdEJ5VHlwZSA9IHt9O1xuXG4gICAgcmVzdWx0cy5tYXAocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQuZGF0YS5wcm9wZXJ0aWVzLnR5cGUgJiYgcmVzdWx0LmRhdGEucHJvcGVydGllcy5kaXN0YW5jZSA+PSAwKSB7XG4gICAgICAgIGlmIChjbG9zZXN0UmVzdWx0QnlUeXBlLmhhc093blByb3BlcnR5KHJlc3VsdC5kYXRhLnByb3BlcnRpZXMudHlwZSkpIHtcbiAgICAgICAgICBjb25zdCBwcmV2RGlzdGFuY2UgPSBjbG9zZXN0UmVzdWx0QnlUeXBlW3Jlc3VsdC5kYXRhLnByb3BlcnRpZXMudHlwZV0uZGlzdGFuY2U7XG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnByb3BlcnRpZXMuZGlzdGFuY2UgPCBwcmV2RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gcmVzdWx0Lm1ldGEucG9pbnRlclN1bW1hcnlUaXRsZSB8fCByZXN1bHQubWV0YS50aXRsZTtcbiAgICAgICAgICAgIGNsb3Nlc3RSZXN1bHRCeVR5cGVbcmVzdWx0LmRhdGEucHJvcGVydGllcy50eXBlXSA9IHsgZGlzdGFuY2U6IHJlc3VsdC5kYXRhLnByb3BlcnRpZXMuZGlzdGFuY2UsIHRpdGxlIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRpdGxlID0gcmVzdWx0Lm1ldGEucG9pbnRlclN1bW1hcnlUaXRsZSB8fCByZXN1bHQubWV0YS50aXRsZTtcbiAgICAgICAgICBjbG9zZXN0UmVzdWx0QnlUeXBlW3Jlc3VsdC5kYXRhLnByb3BlcnRpZXMudHlwZV0gPSB7IGRpc3RhbmNlOiByZXN1bHQuZGF0YS5wcm9wZXJ0aWVzLmRpc3RhbmNlLCB0aXRsZSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xvc2VzdFJlc3VsdEJ5VHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb252ZXJ0IHN0b3JlIGVudGl0aWVzIHRvIGEgcG9pbnRlciBwb3NpdGlvbiBvdmVybGF5IHdpdGggbGFiZWwgc3VtbWFyeSBvbi5cbiAgICogQHBhcmFtIGV2ZW50IE9MIG1hcCBicm93c2VyIHBvaW50ZXIgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgZW50aXRpZXNUb1BvaW50ZXJPdmVybGF5KHJlc3VsdHNVbmRlclBvaW50ZXJQb3NpdGlvbjogU2VhcmNoUmVzdWx0W10pIHtcbiAgICBjb25zdCBjbG9zZXN0UmVzdWx0QnlUeXBlID0gdGhpcy5jb21wdXRlU3VtbWFyeUNsb3Nlc3RGZWF0dXJlKHJlc3VsdHNVbmRlclBvaW50ZXJQb3NpdGlvbik7XG4gICAgY29uc3Qgc3VtbWFyaXplZENsb3Nlc3RUeXBlID0gT2JqZWN0LmtleXMoY2xvc2VzdFJlc3VsdEJ5VHlwZSk7XG4gICAgY29uc3QgcHJvY2Vzc2VkU3VtbWFyaXplZENsb3Nlc3RUeXBlID0gW107XG4gICAgY29uc3Qgc3VtbWFyeSA9IFtdO1xuICAgIHJlc3VsdHNVbmRlclBvaW50ZXJQb3NpdGlvbi5tYXAocmVzdWx0ID0+IHtcbiAgICAgIGNvbnN0IHR5cGVJbmRleCA9IHN1bW1hcml6ZWRDbG9zZXN0VHlwZS5pbmRleE9mKHJlc3VsdC5kYXRhLnByb3BlcnRpZXMudHlwZSk7XG4gICAgICBpZiAodHlwZUluZGV4ICE9PSAtMSkge1xuICAgICAgICBzdW1tYXJ5LnB1c2goY2xvc2VzdFJlc3VsdEJ5VHlwZVtyZXN1bHQuZGF0YS5wcm9wZXJ0aWVzLnR5cGVdLnRpdGxlKTtcbiAgICAgICAgc3VtbWFyaXplZENsb3Nlc3RUeXBlLnNwbGljZSh0eXBlSW5kZXgsIDEpO1xuICAgICAgICBwcm9jZXNzZWRTdW1tYXJpemVkQ2xvc2VzdFR5cGUucHVzaChyZXN1bHQuZGF0YS5wcm9wZXJ0aWVzLnR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3NlZFN1bW1hcml6ZWRDbG9zZXN0VHlwZS5pbmRleE9mKHJlc3VsdC5kYXRhLnByb3BlcnRpZXMudHlwZSkgPT09IC0xKSB7XG4gICAgICAgICAgc3VtbWFyeS5wdXNoKHJlc3VsdC5tZXRhLnBvaW50ZXJTdW1tYXJ5VGl0bGUgfHwgcmVzdWx0Lm1ldGEudGl0bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHN1bW1hcnkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmFkZFBvaW50ZXJPdmVybGF5KHN1bW1hcnkuam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBtYXAgcG9pbnRlcm1vdmVcbiAgICovXG4gIHByaXZhdGUgbGlzdGVuVG9NYXBQb2ludGVyTW92ZSgpIHtcbiAgICB0aGlzLnBvaW50ZXJNb3ZlTGlzdGVuZXIgPSB0aGlzLm1hcC5vbC5vbihcbiAgICAgICdwb2ludGVybW92ZScsXG4gICAgICAoZXZlbnQ6IE1hcEJyb3dzZXJQb2ludGVyRXZlbnQ8YW55PikgPT4gdGhpcy5vbk1hcEV2ZW50KGV2ZW50KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdG8gcG9pbnRlciBzdG9yZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICB1bnN1YnNjcmliZVRvUG9pbnRlclN0b3JlKCkge1xuICAgIHRoaXMuc3RvcmUkJC51bnN1YnNjcmliZSgpO1xuICB9XG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSB0byByZXZlcnNlIHNlYXRjaCBzdG9yZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICB1bnN1YnNjcmliZVJldmVyc2VTZWFyY2goKSB7XG4gICAgdGhpcy5yZXZlcnNlU2VhcmNoJCQubWFwKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB0aGlzLnJldmVyc2VTZWFyY2gkJCA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgbGlzdGVuaW5nIGZvciBtYXAgcG9pbnRlcm1vdmVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIHVubGlzdGVuVG9NYXBQb2ludGVyTW92ZSgpIHtcbiAgICB1bkJ5S2V5KHRoaXMucG9pbnRlck1vdmVMaXN0ZW5lcik7XG4gICAgdGhpcy5wb2ludGVyTW92ZUxpc3RlbmVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgcmV2ZXJzZSBzZWFyY2ggd2hlbiB0aGUgbW91c2UgaXMgbW90aW9ubGVzcyBkdXJpbmcgdGhlIGRlZmluZWQgZGVsYXkgKHBvaW50ZXJNb3ZlRGVsYXkpLlxuICAgKiBAcGFyYW0gZXZlbnQgT0wgbWFwIGJyb3dzZXIgcG9pbnRlciBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbk1hcEV2ZW50KGV2ZW50OiBNYXBCcm93c2VyUG9pbnRlckV2ZW50PGFueT4pIHtcbiAgICBpZiAoXG4gICAgICBldmVudC5kcmFnZ2luZyB8fCAhdGhpcy5pZ29TZWFyY2hQb2ludGVyU3VtbWFyeUVuYWJsZWQgfHxcbiAgICAgICF0aGlzLmhhc1BvaW50ZXJSZXZlcnNlU2VhcmNoU291cmNlIHx8IHRoaXMubWVkaWFTZXJ2aWNlLmlzVG91Y2hTY3JlZW4oKSkge1xuICAgICAgdGhpcy5jbGVhckxheWVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5sYXN0VGltZW91dFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7IC8vIGNhbmNlbCB0aW1lb3V0IHdoZW4gdGhlIG1vdXNlIG1vdmVzXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5sYXN0VGltZW91dFJlcXVlc3QpO1xuICAgICAgdGhpcy5jbGVhckxheWVyKCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlUmV2ZXJzZVNlYXJjaCgpO1xuICAgIH1cblxuICAgIHRoaXMubG9uTGF0ID0gdHJhbnNmb3JtKGV2ZW50LmNvb3JkaW5hdGUsIHRoaXMubWFwUHJvamVjdGlvbiwgJ0VQU0c6NDMyNicpIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgICB0aGlzLmxhc3RUaW1lb3V0UmVxdWVzdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vblNlYXJjaENvb3JkaW5hdGUoKTtcbiAgICB9LCB0aGlzLmlnb1NlYXJjaFBvaW50ZXJTdW1tYXJ5RGVsYXkpO1xuICB9XG5cbiAgICAvKipcbiAgICogU29ydCB0aGUgcmVzdWx0cyBieSBkaXNwbGF5IG9yZGVyLlxuICAgKiBAcGFyYW0gcjEgRmlyc3QgcmVzdWx0XG4gICAqIEBwYXJhbSByMiBTZWNvbmQgcmVzdWx0XG4gICAqL1xuICAgICBwcml2YXRlIHNvcnRCeU9yZGVyKHIxOiBTZWFyY2hSZXN1bHQsIHIyOiBTZWFyY2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiByMS5zb3VyY2UuZGlzcGxheU9yZGVyIC0gcjIuc291cmNlLmRpc3BsYXlPcmRlcjtcbiAgICB9XG5cbiAgcHJpdmF0ZSBvblNlYXJjaENvb3JkaW5hdGUoKSB7XG4gICAgdGhpcy5wb2ludGVyU2VhcmNoU3RvcmUuY2xlYXIoKTtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5zZWFyY2hTZXJ2aWNlLnJldmVyc2VTZWFyY2godGhpcy5sb25MYXQsIHsgcGFyYW1zOiB7IGdlb21ldHJ5OiAnZmFsc2UnLCBpY29uOiAnZmFsc2UnIH0gfSwgdHJ1ZSk7XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gcmVzdWx0cykge1xuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnJldmVyc2VTZWFyY2gkJC5wdXNoKFxuICAgICAgICAgIHJlc3VsdHNbaV0ucmVxdWVzdC5zdWJzY3JpYmUoKF9yZXN1bHRzOiBTZWFyY2hSZXN1bHQ8RmVhdHVyZT5bXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblNlYXJjaCh7IHJlc2VhcmNoOiByZXN1bHRzW2ldLCByZXN1bHRzOiBfcmVzdWx0cyB9KTtcbiAgICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblNlYXJjaChldmVudDogeyByZXNlYXJjaDogUmVzZWFyY2g7IHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdIH0pIHtcbiAgICBjb25zdCByZXN1bHRzID0gZXZlbnQucmVzdWx0cztcbiAgICBjb25zdCBuZXdSZXN1bHRzID0gdGhpcy5wb2ludGVyU2VhcmNoU3RvcmUuYWxsKClcbiAgICAgIC5maWx0ZXIoKHJlc3VsdDogU2VhcmNoUmVzdWx0KSA9PiByZXN1bHQuc291cmNlICE9PSBldmVudC5yZXNlYXJjaC5zb3VyY2UpXG4gICAgICAuY29uY2F0KHJlc3VsdHMpO1xuICAgIHRoaXMucG9pbnRlclNlYXJjaFN0b3JlLmxvYWQobmV3UmVzdWx0cy5zb3J0KHRoaXMuc29ydEJ5T3JkZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBmZWF0dXJlIHRvIHRoZSBwb2ludGVyIHN0b3JlXG4gICAqIEBwYXJhbSB0ZXh0IHN0cmluZ1xuICAgKi9cbiAgcHJpdmF0ZSBhZGRQb2ludGVyT3ZlcmxheSh0ZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsZWFyTGF5ZXIoKTtcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IG9sZ2VvbS5Qb2ludChcbiAgICAgIHRyYW5zZm9ybSh0aGlzLmxvbkxhdCwgJ0VQU0c6NDMyNicsIHRoaXMubWFwUHJvamVjdGlvbilcbiAgICApO1xuICAgIGNvbnN0IGZlYXR1cmUgPSBuZXcgb2xGZWF0dXJlKHsgZ2VvbWV0cnkgfSk7XG4gICAgY29uc3QgZ2VvanNvbkdlb20gPSBuZXcgT2xHZW9KU09OKCkud3JpdGVHZW9tZXRyeU9iamVjdChnZW9tZXRyeSwge1xuICAgICAgZmVhdHVyZVByb2plY3Rpb246IHRoaXMubWFwUHJvamVjdGlvbixcbiAgICAgIGRhdGFQcm9qZWN0aW9uOiB0aGlzLm1hcFByb2plY3Rpb25cbiAgICB9KSBhcyBGZWF0dXJlR2VvbWV0cnk7XG5cbiAgICBjb25zdCBmOiBGZWF0dXJlID0ge1xuICAgICAgdHlwZTogRkVBVFVSRSxcbiAgICAgIGdlb21ldHJ5OiBnZW9qc29uR2VvbSxcbiAgICAgIHByb2plY3Rpb246IHRoaXMubWFwUHJvamVjdGlvbixcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWQ6IHRoaXMuc2VhcmNoUG9pbnRlclN1bW1hcnlGZWF0dXJlSWQsXG4gICAgICAgIHBvaW50ZXJTdW1tYXJ5OiB0ZXh0XG4gICAgICB9LFxuICAgICAgbWV0YToge1xuICAgICAgICBpZDogdGhpcy5zZWFyY2hQb2ludGVyU3VtbWFyeUZlYXR1cmVJZFxuICAgICAgfSxcbiAgICAgIG9sOiBmZWF0dXJlXG4gICAgfTtcbiAgICB0aGlzLnN0b3JlLnNldExheWVyRmVhdHVyZXMoW2ZdLCBGZWF0dXJlTW90aW9uLk5vbmUpO1xuICB9XG5cbi8qKlxuICogQ2xlYXIgdGhlIHBvaW50ZXIgc3RvcmUgZmVhdHVyZXNcbiAqL1xucHJpdmF0ZSBjbGVhckxheWVyKCkge1xuICBpZiAodGhpcy5zdG9yZSkge1xuICAgIHRoaXMuc3RvcmUuY2xlYXJMYXllcigpO1xuICB9XG59XG5cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWZhdWx0IHN0eWxlIGZvciB0aGUgcG9pbnRlciBwb3NpdGlvbiBhbmQgaXQncyBsYWJlbCBzdW1tYXJ5LlxuICogQHBhcmFtIGZlYXR1cmUgT2xGZWF0dXJlXG4gKiBAcmV0dXJucyBPTCBzdHlsZSBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRlclBvc2l0aW9uU3VtbWFyeU1hcmtlcihmZWF0dXJlOiBvbEZlYXR1cmU8T2xHZW9tZXRyeT4sIHJlc29sdXRpb246IG51bWJlcik6IG9sc3R5bGUuU3R5bGUge1xuICByZXR1cm4gbmV3IG9sc3R5bGUuU3R5bGUoe1xuICAgIGltYWdlOiBuZXcgb2xzdHlsZS5JY29uKHtcbiAgICAgIHNyYzogJy4vYXNzZXRzL2lnbzIvZ2VvL2ljb25zL2Nyb3NzX2JsYWNrXzE4cHguc3ZnJyxcbiAgICAgIGltZ1NpemU6IFsxOCwgMThdLCAvLyBmb3IgaWVcbiAgICB9KSxcblxuICAgIHRleHQ6IG5ldyBvbHN0eWxlLlRleHQoe1xuICAgICAgdGV4dDogZmVhdHVyZS5nZXQoJ3BvaW50ZXJTdW1tYXJ5JyksXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIHRleHRCYXNlbGluZTogJ2JvdHRvbScsXG4gICAgICBmb250OiAnMTJweCBDYWxpYnJpLHNhbnMtc2VyaWYnLFxuICAgICAgZmlsbDogbmV3IG9sc3R5bGUuRmlsbCh7IGNvbG9yOiAnIzAwMCcgfSksXG4gICAgICBiYWNrZ3JvdW5kRmlsbDogbmV3IG9sc3R5bGUuRmlsbCh7IGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyB9KSxcbiAgICAgIGJhY2tncm91bmRTdHJva2U6IG5ldyBvbHN0eWxlLlN0cm9rZSh7IGNvbG9yOiAncmdiYSgyMDAsIDIwMCwgMjAwLCAwLjc1KScsIHdpZHRoOiAyIH0pLFxuICAgICAgc3Ryb2tlOiBuZXcgb2xzdHlsZS5TdHJva2UoeyBjb2xvcjogJyNmZmYnLCB3aWR0aDogMyB9KSxcbiAgICAgIG92ZXJmbG93OiB0cnVlLFxuICAgICAgb2Zmc2V0WDogMTAsXG4gICAgICBvZmZzZXRZOiAtMTAsXG4gICAgICBwYWRkaW5nOiBbMi41LCAyLjUsIDIuNSwgMi41XVxuICAgIH0pXG4gIH0pO1xufVxuIl19