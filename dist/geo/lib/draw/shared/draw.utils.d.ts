import * as Olstyle from 'ol/style';
import OlPoint from 'ol/geom/Point';
import OlLineString from 'ol/geom/LineString';
import OlPolygon from 'ol/geom/Polygon';
import OlCircle from 'ol/geom/Circle';
import OlOverlay from 'ol/Overlay';
/**
 * Create a default style
 * @param fillColor the fill color
 * @param strokeColor the stroke color
 * @param strokeWidth the stroke width
 * @param label a label
 * @returns OL style
 */
export declare function createInteractionStyle(fillColor?: string, strokeColor?: string, strokeWidth?: number, label?: string): Olstyle.Style;
/**
 * Add an OL overlay at each midpoint and return an array of those overlays
 * @param olGeometry OL Geometry
 * @returns OL overlays
 */
export declare function updateOlTooltipsDrawAtMidpoints(olGeometry: OlPoint | OlLineString | OlPolygon | OlCircle): OlOverlay[];
/**
 * Add an OL overlay at the center of a geometry and return that overlay
 * @param olGeometry OL Geometry
 * @returns OL overlay
 */
export declare function updateOlTooltipDrawAtCenter(olGeometry: OlLineString | OlPolygon): OlOverlay;
/**
 * Create an OL overlay at a point and bind the overlay to the point
 * @param olPoint OL Point
 * @returns OL overlay
 */
export declare function createOlTooltipDrawAtPoint(olPoint: OlPoint): OlOverlay;
