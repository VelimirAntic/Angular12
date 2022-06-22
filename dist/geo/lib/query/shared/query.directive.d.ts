import { EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import OlLayer from 'ol/layer/Layer';
import OlSource from 'ol/source/Source';
import MapBrowserPointerEvent from 'ol/MapBrowserEvent';
import { IgoMap } from '../../map/shared/map';
import { MapBrowserComponent } from '../../map/map-browser/map-browser.component';
import { Feature } from '../../feature/shared/feature.interfaces';
import { QueryService } from './query.service';
import * as i0 from "@angular/core";
/**
 * This directive makes a map queryable with a click of with a drag box.
 * By default, all layers are queryable but this can ben controlled at
 * the layer level.
 */
export declare class QueryDirective implements AfterViewInit, OnDestroy {
    private component;
    private queryService;
    /**
     * Subscriptions to ongoing queries
     */
    private queries$$;
    /**
     * Listener to the map click event
     */
    private mapClickListener;
    /**
     * OL drag box interaction
     */
    private olDragSelectInteraction;
    /**
     * Ol drag box "end" event key
     */
    private olDragSelectInteractionEndKey;
    /**
     * Whter to query features or not
     */
    queryFeatures: boolean;
    /**
     * Feature query hit tolerance
     */
    queryFeaturesHitTolerance: number;
    /**
     * Feature query hit tolerance
     */
    queryFeaturesCondition: (olLayer: OlLayer<OlSource>) => boolean;
    /**
     * Whether all query should complete before emitting an event
     */
    waitForAllQueries: boolean;
    /**
     * Event emitted when a query (or all queries) complete
     */
    query: EventEmitter<{
        features: Feature[] | Feature[][];
        event: MapBrowserPointerEvent<any>;
    }>;
    /**
     * IGO map
     * @internal
     */
    get map(): IgoMap;
    constructor(component: MapBrowserComponent, queryService: QueryService);
    /**
     * Start listening to click and drag box events
     * @internal
     */
    ngAfterViewInit(): void;
    /**
     * Stop listening to click and drag box events and cancel ongoind requests
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * On map click, issue queries
     */
    private listenToMapClick;
    /**
     * Stop listening for map clicks
     */
    private unlistenToMapClick;
    /**
     * Issue queries from a map event and emit events with the results
     * @param event OL map browser pointer event
     */
    private onMapEvent;
    /**
     * Query features already present on the map
     * @param event OL map browser pointer event
     */
    private doQueryFeatures;
    /**
     * Cancel ongoing requests, if any
     */
    private cancelOngoingQueries;
    /**
     * Add a drag box interaction and, on drag box end, select features
     */
    private addDragBoxInteraction;
    /**
     * Remove drag box interaction
     */
    private removeDragBoxInteraction;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueryDirective, [{ self: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<QueryDirective, "[igoQuery]", never, { "queryFeatures": "queryFeatures"; "queryFeaturesHitTolerance": "queryFeaturesHitTolerance"; "queryFeaturesCondition": "queryFeaturesCondition"; "waitForAllQueries": "waitForAllQueries"; }, { "query": "query"; }, never>;
}
