import { Directive, Input, Output, EventEmitter, Self } from '@angular/core';
import { of, zip } from 'rxjs';
import { unByKey } from 'ol/Observable';
import OlRenderFeature from 'ol/render/Feature';
import { renderFeatureFromOl } from '../../feature/shared/feature.utils';
import { featureFromOl } from '../../feature/shared/feature.utils';
import { layerIsQueryable, olLayerFeatureIsQueryable } from './query.utils';
import { ctrlKeyDown } from '../../map/shared/map.utils';
import { OlDragSelectInteraction } from '../../feature/shared/strategies/selection';
import { VectorLayer } from '../../layer/shared/layers/vector-layer';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map-browser/map-browser.component";
import * as i2 from "./query.service";
/**
 * This directive makes a map queryable with a click of with a drag box.
 * By default, all layers are queryable but this can ben controlled at
 * the layer level.
 */
export class QueryDirective {
    constructor(component, queryService) {
        this.component = component;
        this.queryService = queryService;
        /**
         * Subscriptions to ongoing queries
         */
        this.queries$$ = [];
        /**
         * Whter to query features or not
         */
        this.queryFeatures = false;
        /**
         * Feature query hit tolerance
         */
        this.queryFeaturesHitTolerance = 0;
        /**
         * Whether all query should complete before emitting an event
         */
        this.waitForAllQueries = true;
        /**
         * Event emitted when a query (or all queries) complete
         */
        this.query = new EventEmitter();
    }
    /**
     * IGO map
     * @internal
     */
    get map() {
        return this.component.map;
    }
    /**
     * Start listening to click and drag box events
     * @internal
     */
    ngAfterViewInit() {
        this.listenToMapClick();
        this.addDragBoxInteraction();
    }
    /**
     * Stop listening to click and drag box events and cancel ongoind requests
     * @internal
     */
    ngOnDestroy() {
        this.cancelOngoingQueries();
        this.unlistenToMapClick();
        this.removeDragBoxInteraction();
    }
    /**
     * On map click, issue queries
     */
    listenToMapClick() {
        this.mapClickListener = this.map.ol.on('singleclick', (event) => this.onMapEvent(event));
    }
    /**
     * Stop listening for map clicks
     */
    unlistenToMapClick() {
        unByKey(this.mapClickListener);
        this.mapClickListener = undefined;
    }
    /**
     * Issue queries from a map event and emit events with the results
     * @param event OL map browser pointer event
     */
    onMapEvent(event) {
        this.cancelOngoingQueries();
        if (!this.queryService.queryEnabled) {
            return;
        }
        const queries$ = [];
        if (this.queryFeatures) {
            queries$.push(this.doQueryFeatures(event));
        }
        const resolution = this.map.ol.getView().getResolution();
        const queryLayers = this.map.layers.filter(layerIsQueryable);
        queries$.push(...this.queryService.query(queryLayers, {
            coordinates: event.coordinate,
            projection: this.map.projection,
            resolution
        }));
        if (queries$.length === 0) {
            return;
        }
        if (this.waitForAllQueries) {
            this.queries$$.push(zip(...queries$).subscribe((results) => {
                const features = [].concat(...results);
                this.query.emit({ features, event });
            }));
        }
        else {
            this.queries$$ = queries$.map((query$) => {
                return query$.subscribe((features) => {
                    this.query.emit({ features, event });
                });
            });
        }
    }
    /**
     * Query features already present on the map
     * @param event OL map browser pointer event
     */
    doQueryFeatures(event) {
        const clickedFeatures = [];
        if (event.type === 'singleclick') {
            this.map.ol.forEachFeatureAtPixel(event.pixel, (featureOL, layerOL) => {
                const layer = this.map.getLayerById(layerOL.values_._layer.id);
                if (layer.dataSource.options.queryFormatAsWms) {
                    return;
                }
                if (featureOL) {
                    if (featureOL.get('features')) {
                        for (const feature of featureOL.get('features')) {
                            const newFeature = featureFromOl(feature, this.map.projection);
                            newFeature.meta = {
                                title: feature.values_.nom,
                                id: layerOL.values_._layer.id + '.' + feature.id_,
                                icon: feature.values_._icon,
                                sourceTitle: layerOL.values_.title,
                                alias: this.queryService.getAllowedFieldsAndAlias(layer),
                                // title: this.queryService.getQueryTitle(newFeature, layer) || newFeature.meta.title
                            };
                            clickedFeatures.push(newFeature);
                        }
                    }
                    else if (featureOL instanceof OlRenderFeature) {
                        const newFeature = renderFeatureFromOl(featureOL, this.map.projection, layerOL);
                        newFeature.meta = {
                            id: layerOL.values_._layer.id + '.' + newFeature.meta.id,
                            sourceTitle: layerOL.values_.title,
                            alias: this.queryService.getAllowedFieldsAndAlias(layer),
                            title: this.queryService.getQueryTitle(newFeature, layer) || newFeature.meta.title
                        };
                        clickedFeatures.push(newFeature);
                    }
                    else {
                        const newFeature = featureFromOl(featureOL, this.map.projection, layerOL);
                        newFeature.meta = {
                            id: layerOL.values_._layer.id + '.' + newFeature.meta.id,
                            sourceTitle: layerOL.values_.title,
                            alias: this.queryService.getAllowedFieldsAndAlias(layer),
                            title: this.queryService.getQueryTitle(newFeature, layer) || newFeature.meta.title
                        };
                        clickedFeatures.push(newFeature);
                    }
                }
            }, {
                hitTolerance: this.queryFeaturesHitTolerance || 0,
                layerFilter: this.queryFeaturesCondition
                    ? this.queryFeaturesCondition
                    : olLayerFeatureIsQueryable
            });
        }
        else if (event.type === 'boxend') {
            const target = event.target;
            const dragExtent = target.getGeometry().getExtent();
            this.map.layers
                .filter(layerIsQueryable)
                .filter(layer => layer instanceof VectorLayer && layer.visible)
                .map(layer => {
                const featuresOL = layer.dataSource.ol;
                featuresOL.forEachFeatureIntersectingExtent(dragExtent, (olFeature) => {
                    const newFeature = featureFromOl(olFeature, this.map.projection, layer.ol);
                    newFeature.meta = {
                        id: layer.id + '.' + olFeature.getId(),
                        icon: olFeature.values_._icon,
                        sourceTitle: layer.title,
                        alias: this.queryService.getAllowedFieldsAndAlias(layer),
                        title: this.queryService.getQueryTitle(newFeature, layer) || newFeature.meta.title
                    };
                    clickedFeatures.push(newFeature);
                });
            });
        }
        return of(clickedFeatures);
    }
    /**
     * Cancel ongoing requests, if any
     */
    cancelOngoingQueries() {
        this.queries$$.forEach((sub) => sub.unsubscribe());
        this.queries$$ = [];
    }
    /**
     * Add a drag box interaction and, on drag box end, select features
     */
    addDragBoxInteraction() {
        let olDragSelectInteractionOnQuery;
        const olInteractions = this.map.ol.getInteractions().getArray();
        // There can only be one dragbox interaction, so find the current one, if any
        // Don't keep a reference to the current dragbox because we don't want
        // to remove it when this startegy is deactivated
        for (const olInteraction of olInteractions) {
            if (olInteraction instanceof OlDragSelectInteraction) {
                olDragSelectInteractionOnQuery = olInteraction;
                break;
            }
        }
        // If no drag box interaction is found, create a new one and add it to the map
        if (olDragSelectInteractionOnQuery === undefined) {
            olDragSelectInteractionOnQuery = new OlDragSelectInteraction({
                condition: ctrlKeyDown
            });
            this.map.ol.addInteraction(olDragSelectInteractionOnQuery);
            this.olDragSelectInteraction = olDragSelectInteractionOnQuery;
        }
        this.olDragSelectInteractionEndKey = olDragSelectInteractionOnQuery.on('boxend', (event) => this.onMapEvent(event));
    }
    /**
     * Remove drag box interaction
     */
    removeDragBoxInteraction() {
        if (this.olDragSelectInteractionEndKey !== undefined) {
            unByKey(this.olDragSelectInteractionEndKey);
        }
        if (this.olDragSelectInteraction !== undefined) {
            this.map.ol.removeInteraction(this.olDragSelectInteraction);
        }
        this.olDragSelectInteraction = undefined;
    }
}
QueryDirective.ɵfac = function QueryDirective_Factory(t) { return new (t || QueryDirective)(i0.ɵɵdirectiveInject(i1.MapBrowserComponent, 2), i0.ɵɵdirectiveInject(i2.QueryService)); };
QueryDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: QueryDirective, selectors: [["", "igoQuery", ""]], inputs: { queryFeatures: "queryFeatures", queryFeaturesHitTolerance: "queryFeaturesHitTolerance", queryFeaturesCondition: "queryFeaturesCondition", waitForAllQueries: "waitForAllQueries" }, outputs: { query: "query" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QueryDirective, [{
        type: Directive,
        args: [{
                selector: '[igoQuery]'
            }]
    }], function () { return [{ type: i1.MapBrowserComponent, decorators: [{
                type: Self
            }] }, { type: i2.QueryService }]; }, { queryFeatures: [{
            type: Input
        }], queryFeaturesHitTolerance: [{
            type: Input
        }], queryFeaturesCondition: [{
            type: Input
        }], waitForAllQueries: [{
            type: Input
        }], query: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvcXVlcnkvc2hhcmVkL3F1ZXJ5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLElBQUksRUFDTCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQTRCLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4QyxPQUFPLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQVloRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7QUFHckU7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyxjQUFjO0lBeUR6QixZQUNrQixTQUE4QixFQUN0QyxZQUEwQjtRQURsQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUN0QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQTFEcEM7O1dBRUc7UUFDSyxjQUFTLEdBQW1CLEVBQUUsQ0FBQztRQWlCdkM7O1dBRUc7UUFDTSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUV4Qzs7V0FFRztRQUNNLDhCQUF5QixHQUFXLENBQUMsQ0FBQztRQU8vQzs7V0FFRztRQUNN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dCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSwgb2YsIHppcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdW5CeUtleSB9IGZyb20gJ29sL09ic2VydmFibGUnO1xuXG5pbXBvcnQgT2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IE9sUmVuZGVyRmVhdHVyZSBmcm9tICdvbC9yZW5kZXIvRmVhdHVyZSc7XG5pbXBvcnQgT2xMYXllciBmcm9tICdvbC9sYXllci9MYXllcic7XG5pbXBvcnQgT2xTb3VyY2UgZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XG5pbXBvcnQgb2xWZWN0b3JTb3VyY2UgZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnknO1xuXG5pbXBvcnQgTWFwQnJvd3NlclBvaW50ZXJFdmVudCBmcm9tICdvbC9NYXBCcm93c2VyRXZlbnQnO1xuaW1wb3J0IHsgRXZlbnRzS2V5IH0gZnJvbSAnb2wvZXZlbnRzJztcblxuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwL3NoYXJlZC9tYXAnO1xuaW1wb3J0IHsgTWFwQnJvd3NlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hcC9tYXAtYnJvd3Nlci9tYXAtYnJvd3Nlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyByZW5kZXJGZWF0dXJlRnJvbU9sIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQvZmVhdHVyZS51dGlscyc7XG5pbXBvcnQgeyBmZWF0dXJlRnJvbU9sIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQvZmVhdHVyZS51dGlscyc7XG5pbXBvcnQgeyBRdWVyeVNlcnZpY2UgfSBmcm9tICcuL3F1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgbGF5ZXJJc1F1ZXJ5YWJsZSwgb2xMYXllckZlYXR1cmVJc1F1ZXJ5YWJsZSB9IGZyb20gJy4vcXVlcnkudXRpbHMnO1xuaW1wb3J0IHsgY3RybEtleURvd24gfSBmcm9tICcuLi8uLi9tYXAvc2hhcmVkL21hcC51dGlscyc7XG5pbXBvcnQgeyBPbERyYWdTZWxlY3RJbnRlcmFjdGlvbiB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL3N0cmF0ZWdpZXMvc2VsZWN0aW9uJztcbmltcG9ydCB7IFZlY3RvckxheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy92ZWN0b3ItbGF5ZXInO1xuaW1wb3J0IHsgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuL3F1ZXJ5LmludGVyZmFjZXMnO1xuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIG1ha2VzIGEgbWFwIHF1ZXJ5YWJsZSB3aXRoIGEgY2xpY2sgb2Ygd2l0aCBhIGRyYWcgYm94LlxuICogQnkgZGVmYXVsdCwgYWxsIGxheWVycyBhcmUgcXVlcnlhYmxlIGJ1dCB0aGlzIGNhbiBiZW4gY29udHJvbGxlZCBhdFxuICogdGhlIGxheWVyIGxldmVsLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaWdvUXVlcnldJ1xufSlcbmV4cG9ydCBjbGFzcyBRdWVyeURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb25zIHRvIG9uZ29pbmcgcXVlcmllc1xuICAgKi9cbiAgcHJpdmF0ZSBxdWVyaWVzJCQ6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyIHRvIHRoZSBtYXAgY2xpY2sgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgbWFwQ2xpY2tMaXN0ZW5lcjtcblxuICAvKipcbiAgICogT0wgZHJhZyBib3ggaW50ZXJhY3Rpb25cbiAgICovXG4gIHByaXZhdGUgb2xEcmFnU2VsZWN0SW50ZXJhY3Rpb246IE9sRHJhZ1NlbGVjdEludGVyYWN0aW9uO1xuXG4gIC8qKlxuICAgKiBPbCBkcmFnIGJveCBcImVuZFwiIGV2ZW50IGtleVxuICAgKi9cbiAgcHJpdmF0ZSBvbERyYWdTZWxlY3RJbnRlcmFjdGlvbkVuZEtleTogRXZlbnRzS2V5IHwgRXZlbnRzS2V5W107XG5cbiAgLyoqXG4gICAqIFdodGVyIHRvIHF1ZXJ5IGZlYXR1cmVzIG9yIG5vdFxuICAgKi9cbiAgQElucHV0KCkgcXVlcnlGZWF0dXJlczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBGZWF0dXJlIHF1ZXJ5IGhpdCB0b2xlcmFuY2VcbiAgICovXG4gIEBJbnB1dCgpIHF1ZXJ5RmVhdHVyZXNIaXRUb2xlcmFuY2U6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIEZlYXR1cmUgcXVlcnkgaGl0IHRvbGVyYW5jZVxuICAgKi9cbiAgQElucHV0KCkgcXVlcnlGZWF0dXJlc0NvbmRpdGlvbjogKG9sTGF5ZXI6IE9sTGF5ZXI8T2xTb3VyY2U+KSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGFsbCBxdWVyeSBzaG91bGQgY29tcGxldGUgYmVmb3JlIGVtaXR0aW5nIGFuIGV2ZW50XG4gICAqL1xuICBASW5wdXQoKSB3YWl0Rm9yQWxsUXVlcmllczogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHF1ZXJ5IChvciBhbGwgcXVlcmllcykgY29tcGxldGVcbiAgICovXG4gIEBPdXRwdXQoKSBxdWVyeSA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGZlYXR1cmVzOiBGZWF0dXJlW10gfCBGZWF0dXJlW11bXTtcbiAgICBldmVudDogTWFwQnJvd3NlclBvaW50ZXJFdmVudDxhbnk+O1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBJR08gbWFwXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IG1hcCgpOiBJZ29NYXAge1xuICAgIHJldHVybiAodGhpcy5jb21wb25lbnQubWFwIGFzIGFueSkgYXMgSWdvTWFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNlbGYoKSBwcml2YXRlIGNvbXBvbmVudDogTWFwQnJvd3NlckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHF1ZXJ5U2VydmljZTogUXVlcnlTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU3RhcnQgbGlzdGVuaW5nIHRvIGNsaWNrIGFuZCBkcmFnIGJveCBldmVudHNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5saXN0ZW5Ub01hcENsaWNrKCk7XG4gICAgdGhpcy5hZGREcmFnQm94SW50ZXJhY3Rpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGxpc3RlbmluZyB0byBjbGljayBhbmQgZHJhZyBib3ggZXZlbnRzIGFuZCBjYW5jZWwgb25nb2luZCByZXF1ZXN0c1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2FuY2VsT25nb2luZ1F1ZXJpZXMoKTtcbiAgICB0aGlzLnVubGlzdGVuVG9NYXBDbGljaygpO1xuICAgIHRoaXMucmVtb3ZlRHJhZ0JveEludGVyYWN0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogT24gbWFwIGNsaWNrLCBpc3N1ZSBxdWVyaWVzXG4gICAqL1xuICBwcml2YXRlIGxpc3RlblRvTWFwQ2xpY2soKSB7XG4gICAgdGhpcy5tYXBDbGlja0xpc3RlbmVyID0gdGhpcy5tYXAub2wub24oXG4gICAgICAnc2luZ2xlY2xpY2snLFxuICAgICAgKGV2ZW50OiBNYXBCcm93c2VyUG9pbnRlckV2ZW50PGFueT4pID0+IHRoaXMub25NYXBFdmVudChldmVudClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgbGlzdGVuaW5nIGZvciBtYXAgY2xpY2tzXG4gICAqL1xuICBwcml2YXRlIHVubGlzdGVuVG9NYXBDbGljaygpIHtcbiAgICB1bkJ5S2V5KHRoaXMubWFwQ2xpY2tMaXN0ZW5lcik7XG4gICAgdGhpcy5tYXBDbGlja0xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIElzc3VlIHF1ZXJpZXMgZnJvbSBhIG1hcCBldmVudCBhbmQgZW1pdCBldmVudHMgd2l0aCB0aGUgcmVzdWx0c1xuICAgKiBAcGFyYW0gZXZlbnQgT0wgbWFwIGJyb3dzZXIgcG9pbnRlciBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbk1hcEV2ZW50KGV2ZW50OiBNYXBCcm93c2VyUG9pbnRlckV2ZW50PGFueT4pIHtcbiAgICB0aGlzLmNhbmNlbE9uZ29pbmdRdWVyaWVzKCk7XG4gICAgaWYgKCF0aGlzLnF1ZXJ5U2VydmljZS5xdWVyeUVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyaWVzJCA9IFtdO1xuICAgIGlmICh0aGlzLnF1ZXJ5RmVhdHVyZXMpIHtcbiAgICAgIHF1ZXJpZXMkLnB1c2godGhpcy5kb1F1ZXJ5RmVhdHVyZXMoZXZlbnQpKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNvbHV0aW9uID0gdGhpcy5tYXAub2wuZ2V0VmlldygpLmdldFJlc29sdXRpb24oKTtcbiAgICBjb25zdCBxdWVyeUxheWVycyA9IHRoaXMubWFwLmxheWVycy5maWx0ZXIobGF5ZXJJc1F1ZXJ5YWJsZSk7XG4gICAgcXVlcmllcyQucHVzaChcbiAgICAgIC4uLnRoaXMucXVlcnlTZXJ2aWNlLnF1ZXJ5KHF1ZXJ5TGF5ZXJzLCB7XG4gICAgICAgIGNvb3JkaW5hdGVzOiBldmVudC5jb29yZGluYXRlIGFzIFtudW1iZXIsIG51bWJlcl0sXG4gICAgICAgIHByb2plY3Rpb246IHRoaXMubWFwLnByb2plY3Rpb24sXG4gICAgICAgIHJlc29sdXRpb25cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChxdWVyaWVzJC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy53YWl0Rm9yQWxsUXVlcmllcykge1xuICAgICAgdGhpcy5xdWVyaWVzJCQucHVzaChcbiAgICAgICAgemlwKC4uLnF1ZXJpZXMkKS5zdWJzY3JpYmUoKHJlc3VsdHM6IEZlYXR1cmVbXVtdKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmVhdHVyZXMgPSBbXS5jb25jYXQoLi4ucmVzdWx0cyk7XG4gICAgICAgICAgdGhpcy5xdWVyeS5lbWl0KHsgZmVhdHVyZXMsIGV2ZW50IH0pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5xdWVyaWVzJCQgPSBxdWVyaWVzJC5tYXAoKHF1ZXJ5JDogT2JzZXJ2YWJsZTxGZWF0dXJlW10+KSA9PiB7XG4gICAgICAgIHJldHVybiBxdWVyeSQuc3Vic2NyaWJlKChmZWF0dXJlczogRmVhdHVyZVtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5xdWVyeS5lbWl0KHsgZmVhdHVyZXMsIGV2ZW50IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBRdWVyeSBmZWF0dXJlcyBhbHJlYWR5IHByZXNlbnQgb24gdGhlIG1hcFxuICAgKiBAcGFyYW0gZXZlbnQgT0wgbWFwIGJyb3dzZXIgcG9pbnRlciBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBkb1F1ZXJ5RmVhdHVyZXMoXG4gICAgZXZlbnQ6IE1hcEJyb3dzZXJQb2ludGVyRXZlbnQ8YW55PlxuICApOiBPYnNlcnZhYmxlPEZlYXR1cmVbXT4ge1xuICAgIGNvbnN0IGNsaWNrZWRGZWF0dXJlcyA9IFtdO1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdzaW5nbGVjbGljaycpIHtcbiAgICAgIHRoaXMubWFwLm9sLmZvckVhY2hGZWF0dXJlQXRQaXhlbChcbiAgICAgICAgZXZlbnQucGl4ZWwsXG4gICAgICAgIChmZWF0dXJlT0w6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PiwgbGF5ZXJPTDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLm1hcC5nZXRMYXllckJ5SWQobGF5ZXJPTC52YWx1ZXNfLl9sYXllci5pZCk7XG4gICAgICAgICAgaWYgKChsYXllci5kYXRhU291cmNlLm9wdGlvbnMgYXMgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnMpLnF1ZXJ5Rm9ybWF0QXNXbXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZlYXR1cmVPTCkge1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVPTC5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBmZWF0dXJlIG9mIGZlYXR1cmVPTC5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGZWF0dXJlID0gZmVhdHVyZUZyb21PbChmZWF0dXJlLCB0aGlzLm1hcC5wcm9qZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBuZXdGZWF0dXJlLm1ldGEgPSB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogZmVhdHVyZS52YWx1ZXNfLm5vbSxcbiAgICAgICAgICAgICAgICAgIGlkOiBsYXllck9MLnZhbHVlc18uX2xheWVyLmlkICsgJy4nICsgZmVhdHVyZS5pZF8sXG4gICAgICAgICAgICAgICAgICBpY29uOiBmZWF0dXJlLnZhbHVlc18uX2ljb24sXG4gICAgICAgICAgICAgICAgICBzb3VyY2VUaXRsZTogbGF5ZXJPTC52YWx1ZXNfLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgYWxpYXM6IHRoaXMucXVlcnlTZXJ2aWNlLmdldEFsbG93ZWRGaWVsZHNBbmRBbGlhcyhsYXllciksXG4gICAgICAgICAgICAgICAgICAvLyB0aXRsZTogdGhpcy5xdWVyeVNlcnZpY2UuZ2V0UXVlcnlUaXRsZShuZXdGZWF0dXJlLCBsYXllcikgfHwgbmV3RmVhdHVyZS5tZXRhLnRpdGxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjbGlja2VkRmVhdHVyZXMucHVzaChuZXdGZWF0dXJlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlT0wgaW5zdGFuY2VvZiBPbFJlbmRlckZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3RmVhdHVyZSA9IHJlbmRlckZlYXR1cmVGcm9tT2woXG4gICAgICAgICAgICAgICAgZmVhdHVyZU9MLFxuICAgICAgICAgICAgICAgIHRoaXMubWFwLnByb2plY3Rpb24sXG4gICAgICAgICAgICAgICAgbGF5ZXJPTFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBuZXdGZWF0dXJlLm1ldGEgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGxheWVyT0wudmFsdWVzXy5fbGF5ZXIuaWQgKyAnLicgKyBuZXdGZWF0dXJlLm1ldGEuaWQsXG4gICAgICAgICAgICAgICAgc291cmNlVGl0bGU6IGxheWVyT0wudmFsdWVzXy50aXRsZSxcbiAgICAgICAgICAgICAgICBhbGlhczogdGhpcy5xdWVyeVNlcnZpY2UuZ2V0QWxsb3dlZEZpZWxkc0FuZEFsaWFzKGxheWVyKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5xdWVyeVNlcnZpY2UuZ2V0UXVlcnlUaXRsZShuZXdGZWF0dXJlLCBsYXllcikgfHwgbmV3RmVhdHVyZS5tZXRhLnRpdGxlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGNsaWNrZWRGZWF0dXJlcy5wdXNoKG5ld0ZlYXR1cmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3RmVhdHVyZSA9IGZlYXR1cmVGcm9tT2woXG4gICAgICAgICAgICAgICAgZmVhdHVyZU9MLFxuICAgICAgICAgICAgICAgIHRoaXMubWFwLnByb2plY3Rpb24sXG4gICAgICAgICAgICAgICAgbGF5ZXJPTFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBuZXdGZWF0dXJlLm1ldGEgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGxheWVyT0wudmFsdWVzXy5fbGF5ZXIuaWQgKyAnLicgKyBuZXdGZWF0dXJlLm1ldGEuaWQsXG4gICAgICAgICAgICAgICAgc291cmNlVGl0bGU6IGxheWVyT0wudmFsdWVzXy50aXRsZSxcbiAgICAgICAgICAgICAgICBhbGlhczogdGhpcy5xdWVyeVNlcnZpY2UuZ2V0QWxsb3dlZEZpZWxkc0FuZEFsaWFzKGxheWVyKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5xdWVyeVNlcnZpY2UuZ2V0UXVlcnlUaXRsZShuZXdGZWF0dXJlLCBsYXllcikgfHwgbmV3RmVhdHVyZS5tZXRhLnRpdGxlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGNsaWNrZWRGZWF0dXJlcy5wdXNoKG5ld0ZlYXR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhpdFRvbGVyYW5jZTogdGhpcy5xdWVyeUZlYXR1cmVzSGl0VG9sZXJhbmNlIHx8IDAsXG4gICAgICAgICAgbGF5ZXJGaWx0ZXI6IHRoaXMucXVlcnlGZWF0dXJlc0NvbmRpdGlvblxuICAgICAgICAgICAgPyB0aGlzLnF1ZXJ5RmVhdHVyZXNDb25kaXRpb25cbiAgICAgICAgICAgIDogb2xMYXllckZlYXR1cmVJc1F1ZXJ5YWJsZVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ2JveGVuZCcpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBhbnk7XG4gICAgICBjb25zdCBkcmFnRXh0ZW50ID0gdGFyZ2V0LmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCk7XG4gICAgICB0aGlzLm1hcC5sYXllcnNcbiAgICAgICAgLmZpbHRlcihsYXllcklzUXVlcnlhYmxlKVxuICAgICAgICAuZmlsdGVyKGxheWVyID0+IGxheWVyIGluc3RhbmNlb2YgVmVjdG9yTGF5ZXIgJiYgbGF5ZXIudmlzaWJsZSlcbiAgICAgICAgLm1hcChsYXllciA9PiB7XG4gICAgICAgICAgY29uc3QgZmVhdHVyZXNPTCA9IGxheWVyLmRhdGFTb3VyY2Uub2wgYXMgb2xWZWN0b3JTb3VyY2U8T2xHZW9tZXRyeT47XG4gICAgICAgICAgZmVhdHVyZXNPTC5mb3JFYWNoRmVhdHVyZUludGVyc2VjdGluZ0V4dGVudChkcmFnRXh0ZW50LCAob2xGZWF0dXJlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZlYXR1cmU6IEZlYXR1cmUgPSBmZWF0dXJlRnJvbU9sKG9sRmVhdHVyZSwgdGhpcy5tYXAucHJvamVjdGlvbiwgbGF5ZXIub2wpO1xuICAgICAgICAgICAgbmV3RmVhdHVyZS5tZXRhID0ge1xuICAgICAgICAgICAgICBpZDogbGF5ZXIuaWQgKyAnLicgKyBvbEZlYXR1cmUuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgaWNvbjogb2xGZWF0dXJlLnZhbHVlc18uX2ljb24sXG4gICAgICAgICAgICAgIHNvdXJjZVRpdGxlOiBsYXllci50aXRsZSxcbiAgICAgICAgICAgICAgYWxpYXM6IHRoaXMucXVlcnlTZXJ2aWNlLmdldEFsbG93ZWRGaWVsZHNBbmRBbGlhcyhsYXllciksXG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnF1ZXJ5U2VydmljZS5nZXRRdWVyeVRpdGxlKG5ld0ZlYXR1cmUsIGxheWVyKSB8fCBuZXdGZWF0dXJlLm1ldGEudGl0bGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjbGlja2VkRmVhdHVyZXMucHVzaChuZXdGZWF0dXJlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gb2YoY2xpY2tlZEZlYXR1cmVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgb25nb2luZyByZXF1ZXN0cywgaWYgYW55XG4gICAqL1xuICBwcml2YXRlIGNhbmNlbE9uZ29pbmdRdWVyaWVzKCkge1xuICAgIHRoaXMucXVlcmllcyQkLmZvckVhY2goKHN1YjogU3Vic2NyaXB0aW9uKSA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5xdWVyaWVzJCQgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBkcmFnIGJveCBpbnRlcmFjdGlvbiBhbmQsIG9uIGRyYWcgYm94IGVuZCwgc2VsZWN0IGZlYXR1cmVzXG4gICAqL1xuICBwcml2YXRlIGFkZERyYWdCb3hJbnRlcmFjdGlvbigpIHtcbiAgICBsZXQgb2xEcmFnU2VsZWN0SW50ZXJhY3Rpb25PblF1ZXJ5O1xuICAgIGNvbnN0IG9sSW50ZXJhY3Rpb25zID0gdGhpcy5tYXAub2wuZ2V0SW50ZXJhY3Rpb25zKCkuZ2V0QXJyYXkoKTtcblxuICAgIC8vIFRoZXJlIGNhbiBvbmx5IGJlIG9uZSBkcmFnYm94IGludGVyYWN0aW9uLCBzbyBmaW5kIHRoZSBjdXJyZW50IG9uZSwgaWYgYW55XG4gICAgLy8gRG9uJ3Qga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBkcmFnYm94IGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIHJlbW92ZSBpdCB3aGVuIHRoaXMgc3RhcnRlZ3kgaXMgZGVhY3RpdmF0ZWRcbiAgICBmb3IgKGNvbnN0IG9sSW50ZXJhY3Rpb24gb2Ygb2xJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGlmIChvbEludGVyYWN0aW9uIGluc3RhbmNlb2YgT2xEcmFnU2VsZWN0SW50ZXJhY3Rpb24pIHtcbiAgICAgICAgb2xEcmFnU2VsZWN0SW50ZXJhY3Rpb25PblF1ZXJ5ID0gb2xJbnRlcmFjdGlvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIG5vIGRyYWcgYm94IGludGVyYWN0aW9uIGlzIGZvdW5kLCBjcmVhdGUgYSBuZXcgb25lIGFuZCBhZGQgaXQgdG8gdGhlIG1hcFxuICAgIGlmIChvbERyYWdTZWxlY3RJbnRlcmFjdGlvbk9uUXVlcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2xEcmFnU2VsZWN0SW50ZXJhY3Rpb25PblF1ZXJ5ID0gbmV3IE9sRHJhZ1NlbGVjdEludGVyYWN0aW9uKHtcbiAgICAgICAgY29uZGl0aW9uOiBjdHJsS2V5RG93blxuICAgICAgfSk7XG4gICAgICB0aGlzLm1hcC5vbC5hZGRJbnRlcmFjdGlvbihvbERyYWdTZWxlY3RJbnRlcmFjdGlvbk9uUXVlcnkpO1xuICAgICAgdGhpcy5vbERyYWdTZWxlY3RJbnRlcmFjdGlvbiA9IG9sRHJhZ1NlbGVjdEludGVyYWN0aW9uT25RdWVyeTtcbiAgICB9XG5cbiAgICB0aGlzLm9sRHJhZ1NlbGVjdEludGVyYWN0aW9uRW5kS2V5ID0gb2xEcmFnU2VsZWN0SW50ZXJhY3Rpb25PblF1ZXJ5Lm9uKFxuICAgICAgJ2JveGVuZCcsXG4gICAgICAoZXZlbnQ6IE1hcEJyb3dzZXJQb2ludGVyRXZlbnQ8YW55PikgPT4gdGhpcy5vbk1hcEV2ZW50KGV2ZW50KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGRyYWcgYm94IGludGVyYWN0aW9uXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZURyYWdCb3hJbnRlcmFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5vbERyYWdTZWxlY3RJbnRlcmFjdGlvbkVuZEtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB1bkJ5S2V5KHRoaXMub2xEcmFnU2VsZWN0SW50ZXJhY3Rpb25FbmRLZXkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbERyYWdTZWxlY3RJbnRlcmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1hcC5vbC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLm9sRHJhZ1NlbGVjdEludGVyYWN0aW9uKTtcbiAgICB9XG4gICAgdGhpcy5vbERyYWdTZWxlY3RJbnRlcmFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19