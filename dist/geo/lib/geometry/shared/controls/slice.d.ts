import OlMap from 'ol/Map';
import { StyleLike as OlStyleLike } from 'ol/style/Style';
import OlVectorSource from 'ol/source/Vector';
import OlVectorLayer from 'ol/layer/Vector';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { Subject } from 'rxjs';
import { GeometrySliceError } from '../geometry.errors';
export interface SliceControlOptions {
    source?: OlVectorSource<OlGeometry>;
    layer?: OlVectorLayer<OlVectorSource<OlGeometry>>;
    layerStyle?: OlStyleLike;
    drawStyle?: OlStyleLike;
}
/**
 * Control to modify geometries
 */
export declare class SliceControl {
    private options;
    /**
     * Slice end observable
     */
    end$: Subject<OlGeometry[]>;
    /**
     * Slice error, if any
     */
    error$: Subject<GeometrySliceError>;
    private olMap;
    private olOverlayLayer;
    /**
     * Draw line control
     */
    private drawLineControl;
    /**
     * Subscription to draw start
     */
    private drawLineStart$$;
    /**
     * Subscription to draw end
     */
    private drawLineEnd$$;
    /**
     * Wheter the control is active
     */
    get active(): boolean;
    /**
     * OL overlay source
     * @internal
     */
    get olOverlaySource(): OlVectorSource<OlGeometry>;
    constructor(options: SliceControlOptions);
    /**
     * Add or remove this control to/from a map.
     * @param map OL Map
     */
    setOlMap(olMap: OlMap | undefined): void;
    /**
     * Return the overlay source
     */
    getSource(): OlVectorSource<OlGeometry>;
    /**
     * Add an OL geometry to the overlay for slicing
     * @param olGeometry Ol Geometry
     */
    setOlGeometry(olGeometry: OlGeometry): void;
    /**
     * Create an overlay source if none is defined in the options
     */
    private createOlInnerOverlayLayer;
    /**
     * Clear the overlay layer if it wasn't defined in the options
     */
    private removeOlInnerOverlayLayer;
    /**
     * Add the overlay layer if it wasn't defined in the options
     */
    private addOlInnerOverlayLayer;
    /**
     * Clear the overlay source if it wasn't defined in the options
     */
    private clearOlInnerOverlaySource;
    /**
     * Create a draw line control and add it to the map
     */
    private addDrawLineControl;
    /**
     * Remove draw line control
     */
    private removeDrawLineControl;
    /**
     * Clear the draw source and track the geometry being draw
     * @param olLine Ol linestring or polygon
     */
    private onDrawLineStart;
    /**
     * Slice the first geometry encountered with the drawn line
     * @param olLine Ol linestring
     */
    private onDrawLineEnd;
}
