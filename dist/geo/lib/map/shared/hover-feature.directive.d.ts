import { OnDestroy, OnInit } from '@angular/core';
import { IgoMap } from '../../map/shared/map';
import { MapBrowserComponent } from '../../map/map-browser/map-browser.component';
import { Feature } from '../../feature/shared/feature.interfaces';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import OlFeature from 'ol/Feature';
import * as OlStyle from 'ol/style';
import * as OlGeom from 'ol/geom';
import { VectorLayer, VectorTileLayer } from '../../layer/shared/layers';
import { FeatureStore } from '../../feature/shared/store';
import { MediaService } from '@igo2/core';
import { StyleService } from '../../layer/shared/style.service';
import RenderFeature from 'ol/render/Feature';
import { StyleByAttribute } from '../../layer/shared/vector-style.interface';
import * as i0 from "@angular/core";
/**
 * This directive makes the mouse coordinate trigger a reverse search on available search sources.
 * The search results are placed into a label, on a cross icon, representing the mouse coordinate.
 * By default, no search sources. Config in config file must be defined.
 * the layer level.
 */
export declare class HoverFeatureDirective implements OnInit, OnDestroy {
    private component;
    private mediaService;
    private styleService;
    store: FeatureStore<Feature>;
    private pointerHoverFeatureStore;
    private lastTimeoutRequest;
    private store$$;
    private layers$$;
    private selectionLayer;
    private selectionMVT;
    private mvtStyleOptions;
    /**
     * Listener to the pointer move event
     */
    private pointerMoveListener;
    private singleClickMapListener;
    private hoverFeatureId;
    /**
     * The delay where the mouse must be motionless before trigger the reverse search
     */
    igoHoverFeatureDelay: number;
    /**
     * If the user has enabled or not the directive
     */
    igoHoverFeatureEnabled: boolean;
    mouseout(): void;
    /**
     * IGO map
     * @internal
     */
    get map(): IgoMap;
    get mapProjection(): string;
    constructor(component: MapBrowserComponent, mediaService: MediaService, styleService: StyleService);
    /**
     * Start listening to pointermove and reverse search results.
     * @internal
     */
    ngOnInit(): void;
    /**
     * Initialize the pointer position store
     * @internal
     */
    private initStore;
    createHoverStyle(feature: RenderFeature | OlFeature<OlGeometry>, hoverStyle: StyleByAttribute): any;
    /**
     * Stop listening to pointermove and reverse search results.
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * Subscribe to pointermove result store
     * @internal
     */
    subscribeToPointerStore(): void;
    /**
     * convert store entities to a pointer position overlay with label summary on.
     * @param event OL map browser pointer event
     */
    private entitiesToPointerOverlay;
    /**
     * On map pointermove
     */
    private listenToMapPointerMove;
    /**
     * On map singleclick
     */
    private listenToMapClick;
    /**
     * Unsubscribe to pointer store.
     * @internal
     */
    unsubscribeToPointerStore(): void;
    /**
     * Stop listening for map pointermove
     * @internal
     */
    private unlistenToMapPointerMove;
    /**
     * Stop listening for map singleclick
     * @internal
     */
    private unlistenToMapSingleClick;
    /**
     * Trigger clear layer on singleclick.
     * @param event OL map browser singleclick event
     */
    private onMapSingleClickEvent;
    /**
     * Trigger hover when the mouse is motionless during the defined delay (pointerMoveDelay).
     * @param event OL map browser pointer event
     */
    private onMapEvent;
    canProcessHover(igoLayer: VectorLayer | VectorTileLayer): boolean;
    handleRenderFeature(feature: RenderFeature | OlFeature<OlGeometry>): OlFeature<OlGeometry>;
    /**
     * Add a feature to the pointer store
     * @param text string
     */
    private addFeatureOverlay;
    private setLayerStyleFromOptions;
    private getHoverSummary;
    private getGeometry;
    /**
     * Clear the pointer store features
     */
    private clearLayer;
    static ɵfac: i0.ɵɵFactoryDeclaration<HoverFeatureDirective, [{ self: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HoverFeatureDirective, "[igoHoverFeature]", never, { "igoHoverFeatureDelay": "igoHoverFeatureDelay"; "igoHoverFeatureEnabled": "igoHoverFeatureEnabled"; }, {}, never>;
}
/**
 * Create a default style for the pointer position and it's label summary.
 * @param feature OlFeature
 * @returns OL style function
 */
export declare function hoverFeatureMarker(feature: OlFeature<OlGeom.Geometry>, resolution: number): OlStyle.Style[];
