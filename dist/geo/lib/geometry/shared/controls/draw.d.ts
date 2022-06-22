import OlMap from 'ol/Map';
import { StyleLike as OlStyleLike } from 'ol/style/Style';
import type { default as OlGeometryType } from 'ol/geom/GeometryType';
import OlVectorSource from 'ol/source/Vector';
import OlVectorLayer from 'ol/layer/Vector';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { Subject, BehaviorSubject } from 'rxjs';
export interface DrawControlOptions {
    geometryType: typeof OlGeometryType | string;
    drawingLayerSource?: OlVectorSource<OlGeometry>;
    drawingLayer?: OlVectorLayer<OlVectorSource<OlGeometry>>;
    drawingLayerStyle?: OlStyleLike;
    interactionStyle?: OlStyleLike;
    maxPoints?: number;
}
/**
 * Control to draw entities
 */
export declare class DrawControl {
    private options;
    /**
     * Draw start observable
     */
    start$: Subject<OlGeometry>;
    /**
     * Draw end observable
     */
    end$: Subject<OlGeometry>;
    /**
     * Draw changes observable (while drawing)
     */
    changes$: Subject<any>;
    /**
     * Draw modify observable (modify drawn features)
     */
    modify$: Subject<OlGeometry>;
    /**
     * Draw select observable (modify drawn features)
     */
    select$: Subject<any>;
    /**
     * Draw abort observable (abort drawn features)
     */
    abort$: Subject<any>;
    /**
     * Freehand mode observable (defaults to false)
     */
    freehand$: BehaviorSubject<boolean>;
    private keyDown$$;
    private olGeometryType;
    private olMap;
    private olDrawingLayer;
    private olDrawInteraction;
    private olSelectInteraction;
    private olModifyInteraction;
    private onDrawStartKey;
    private onDrawEndKey;
    private onDrawAbortKey;
    private onDrawKey;
    private mousePosition;
    /**
     * Wheter the control is active
     */
    get active(): boolean;
    /**
     * OL overlay source
     * @internal
     */
    get olDrawingLayerSource(): OlVectorSource<OlGeometry>;
    constructor(options: DrawControlOptions);
    /**
     * Add or remove this control to/from a map.
     * @param map OL Map
     */
    setOlMap(olMap: OlMap | undefined, activateModifyAndSelect?: boolean): void;
    /**
     * Return the drawing layer source
     */
    getSource(): OlVectorSource<OlGeometry>;
    /**
     * Set the current geometry type
     * @param geometryType the geometry type
     */
    setGeometryType(geometryType: typeof OlGeometryType): void;
    /**
     * Create a drawing source if none is defined in the options
     */
    private createOlInnerOverlayLayer;
    /**
     * Clear the drawing layer if it wasn't defined in the options
     */
    private removeOlInnerOverlayLayer;
    /**
     * Add the drawing layer if it wasn't defined in the options
     */
    private addOlInnerOverlayLayer;
    /**
     * Clear the drawing layer source if it wasn't defined in the options
     */
    private clearOlInnerOverlaySource;
    /**
     * Add interactions to the map an set up some listeners
     */
    addOlInteractions(activateModifyAndSelect?: boolean): void;
    /**
     * Remove interactions
     */
    private removeOlInteractions;
    /**
     * When drawing starts, clear the overlay and start watching for changes
     * @param event Draw start event
     */
    private onDrawStart;
    /**
     * When drawing ends, update the drawing (feature) geometry observable and add
     * @param event Draw event (drawend)
     */
    private onDrawEnd;
    /**
     * When a feature is selected, update the selected feature observable
     * @param event Modify event (modifyend)
     */
    private onSelect;
    /**
     * Subscribe to key downs used as drawing interaction shorcuts
     */
    private subscribeKeyDown;
    /**
     * Unsubscribe to key down
     */
    private unsubscribeKeyDown;
}
