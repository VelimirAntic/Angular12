import * as olstyle from 'ol/style';
import OlPoint from 'ol/geom/Point';
import OlLineString from 'ol/geom/LineString';
import OlPolygon from 'ol/geom/Polygon';
import OlCircle from 'ol/geom/Circle';
import OlOverlay from 'ol/Overlay';
import { getCenter as olGetCenter } from 'ol/extent';
import { getLength as olGetLength, getArea as olGetArea } from 'ol/sphere';
import { MeasureAreaUnit, MeasureAreaUnitAbbreviation, MeasureLengthUnit, MeasureLengthUnitAbbreviation } from './measure.enum';
/**
 * Convert value from meters to kilometers
 * @param value Value in meters
 * @returns Value in kilometers
 */
export function metersToKilometers(value) {
    return value * 0.001;
}
/**
 * Convert value from meters to feet
 * @param value Value in meters
 * @returns Value in feet
 */
export function metersToFeet(value) {
    return value * 3.2808;
}
/**
 * Convert value from meters to miles
 * @param value Value in meters
 * @returns Value in miles
 */
export function metersToMiles(value) {
    return value * 0.000621;
}
/**
 * Convert value from square meters to square kilometers
 * @param value Value in square meters
 * @returns Value in square kilometers
 */
export function squareMetersToSquareKilometers(value) {
    return value * 0.000001;
}
/**
 * Convert value from square meters to square miles
 * @param value Value in square meters
 * @returns Value in square miles
 */
export function squareMetersToSquareMiles(value) {
    return value * 0.0000003861;
}
/**
 * Convert value from square meters to square feet
 * @param value Value in square meters
 * @returns Value in square feet
 */
export function squareMetersToSquareFeet(value) {
    return value * 10.764;
}
/**
 * Convert value from square meters to hectares
 * @param value Value in square meters
 * @returns Value in hectares
 */
export function squareMetersToHectares(value) {
    return value * 0.0001;
}
/**
 * Convert value from square meters to acres
 * @param value Value in square meters
 * @returns Value in acres
 */
export function squareMetersToAcres(value) {
    return value * 0.00024711;
}
/**
 * Convert value from meters to the specified length unit
 * @param value Value in meters
 * @param unit Length unit
 * @returns Value in unit
 */
export function metersToUnit(value, unit) {
    const conversionMapper = new Map([
        [MeasureLengthUnit.Meters, (val) => val],
        [MeasureLengthUnit.Kilometers, metersToKilometers],
        [MeasureLengthUnit.Miles, metersToMiles],
        [MeasureLengthUnit.Feet, metersToFeet],
    ]);
    const conversion = conversionMapper.get(unit);
    return conversion ? conversion(value) : undefined;
}
/**
 * Convert value from square meters to the specified area unit
 * @param value Value in meters
 * @param unit Area unit
 * @returns Value in unit
 */
export function squareMetersToUnit(value, unit) {
    const conversionMapper = new Map([
        [MeasureAreaUnit.SquareMeters, (val) => val],
        [MeasureAreaUnit.SquareKilometers, squareMetersToSquareKilometers],
        [MeasureAreaUnit.SquareMiles, squareMetersToSquareMiles],
        [MeasureAreaUnit.SquareFeet, squareMetersToSquareFeet],
        [MeasureAreaUnit.Hectares, squareMetersToHectares],
        [MeasureAreaUnit.Acres, squareMetersToAcres],
    ]);
    const conversion = conversionMapper.get(unit);
    return conversion ? conversion(value) : undefined;
}
/**
 * This method format a measure to a readable format
 * @param measure Measure
 * @param options Formatting options
 * @returns Formatted measure
 */
export function formatMeasure(measure, options, languageService) {
    let decimal = options.decimal;
    if (decimal === undefined || decimal < 0) {
        decimal = 1;
    }
    const parts = [];
    if (options.locale !== undefined) {
        parts.push(measure.toLocaleString(options.locale, {
            minimumFractionDigits: decimal,
            maximumFractionDigits: decimal
        }));
    }
    else {
        parts.push(measure.toFixed(decimal).toString());
    }
    if (options.unit !== undefined && options.unitAbbr === true) {
        if (languageService) {
            parts.push(MeasureLengthUnitAbbreviation[options.unit] ?
                languageService.translate.instant('igo.geo.measure.' + MeasureLengthUnitAbbreviation[options.unit]) :
                languageService.translate.instant('igo.geo.measure.' + MeasureAreaUnitAbbreviation[options.unit]));
        }
        else {
            parts.push(MeasureLengthUnitAbbreviation[options.unit] || MeasureAreaUnitAbbreviation[options.unit]);
        }
    }
    return parts.filter(p => p !== undefined).join(' ');
}
/**
 * Compute best length measure unit for a given measure in meters
 * @param value Value in meters
 * @returns Measure unit
 */
export function computeBestLengthUnit(value) {
    let unit = MeasureLengthUnit.Meters;
    let converted = value;
    const possibleUnits = [MeasureLengthUnit.Kilometers];
    while (converted > 1000 && possibleUnits.length > 0) {
        unit = possibleUnits.pop();
        converted = metersToUnit(value, unit);
    }
    return unit;
}
/**
 * Compute best length measure unit for a given measure in square meters
 * @param value Value in meters
 * @returns Measure unit
 */
export function computeBestAreaUnit(value) {
    let unit = MeasureAreaUnit.SquareMeters;
    let converted = value;
    const possibleUnits = [MeasureAreaUnit.SquareKilometers];
    while (converted > 1000000 && possibleUnits.length > 0) {
        unit = possibleUnits.pop();
        converted = squareMetersToUnit(value, unit);
    }
    return unit;
}
/**
 * Create a default style for a measure interaction
 * @returns OL style
 */
export function createMeasureInteractionStyle() {
    return new olstyle.Style({
        stroke: new olstyle.Stroke({
            color: '#ffcc33',
            lineDash: [10, 10],
            width: 2
        }),
        fill: new olstyle.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        image: new olstyle.Circle({
            radius: 5,
            stroke: new olstyle.Stroke({
                color: '#ffcc33',
            }),
            fill: new olstyle.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            })
        })
    });
}
/**
 * Create a default style for a measure layer
 * @returns OL style
 */
export function createMeasureLayerStyle() {
    return new olstyle.Style({
        stroke: new olstyle.Stroke({
            color: '#ffcc33',
            width: 2
        }),
        fill: new olstyle.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        })
    });
}
/**
 * Compute the length in meters of an OL geometry with a given projection
 * @param olGeometry Ol geometry
 * @param projection olGeometry's projection
 * @returns Length in meters
 */
export function measureOlGeometryLength(olGeometry, projection) {
    if (olGeometry instanceof OlPoint) {
        return undefined;
    }
    if (olGeometry.getFlatCoordinates().length === 0) {
        return undefined;
    }
    return olGetLength(olGeometry, { projection });
}
/**
 * Compute the area in square meters of an OL geometry with a given projection
 * @param olGeometry Ol geometry
 * @param projection olGeometry's projection
 * @returns Area in square meters
 */
export function measureOlGeometryArea(olGeometry, projection) {
    if (olGeometry instanceof OlPoint || olGeometry instanceof OlLineString) {
        return undefined;
    }
    if (olGeometry.getFlatCoordinates().length === 0) {
        return undefined;
    }
    return olGetArea(olGeometry, { projection });
}
/**
 * Compute the area (square meters), length (meters) and last length (meters)
 * of an OL geometry with a given projection.
 * @param olGeometry Ol geometry
 * @param projection olGeometry's projection
 * @returns Computed measure
 */
export function measureOlGeometry(olGeometry, projection) {
    const length = measureOlGeometryLength(olGeometry, projection);
    const area = measureOlGeometryArea(olGeometry, projection);
    const lengths = [];
    const coordinates = olGeometry.getFlatCoordinates();
    const coordinatesLength = coordinates.length;
    for (let i = 0; i <= coordinatesLength - 4; i += 2) {
        const olSegment = new OlLineString([
            [coordinates[i], coordinates[i + 1]],
            [coordinates[i + 2], coordinates[i + 3]]
        ]);
        lengths.push(measureOlGeometryLength(olSegment, projection));
    }
    return {
        area,
        length,
        lengths
    };
}
/**
 * Update an OL geometry midpoints and return an array of those points
 * @param olGeometry OL Geometry
 * @returns OL points
 */
export function updateOlGeometryMidpoints(olGeometry) {
    let olMidpoints;
    if (olGeometry instanceof OlPoint) {
        const olMidpointPoint = new OlPoint(olGeometry.getFlatCoordinates());
        olMidpoints = new Array(1);
        olMidpoints[0] = olMidpointPoint;
    }
    else {
        olMidpoints = getOlGeometryMidpoints(olGeometry);
        // TODO: handle multi geometries
        const coordinates = olGeometry.getFlatCoordinates();
        const midpointsLength = olMidpoints.length;
        for (let i = 0; i < midpointsLength; i++) {
            const j = i * 2;
            const olSegment = new OlLineString([
                [coordinates[j], coordinates[j + 1]],
                [coordinates[j + 2], coordinates[j + 3]]
            ]);
            const midpointCoordinate = olSegment.getCoordinateAt(0.5);
            const olMidpoint = olMidpoints[i];
            if (olMidpoint !== undefined) {
                olMidpoint.setCoordinates(midpointCoordinate);
            }
            else {
                olMidpoints[i] = new OlPoint(midpointCoordinate);
            }
        }
    }
    return olMidpoints;
}
/**
 * Clear an OL geometry midpoints and return an array of those points
 * @param olGeometry OL Geometry
 */
export function clearOlGeometryMidpoints(olGeometry) {
    const olMidpoints = olGeometry.get('_midpoints') || [];
    const midpointsLength = olMidpoints.length;
    for (let i = 0; i < midpointsLength; i++) {
        const olMidpoint = olMidpoints[i];
        if (olMidpoint !== undefined) {
            if (olMidpoint !== undefined) {
                clearOlMidpointTooltip(olMidpoint);
            }
        }
    }
    olGeometry.set('_midpoints', undefined, true);
    return olMidpoints;
}
/**
 * Return an array of  OL geometry midpoints, if any
 * @param olGeometry OL Geometry
 * @returns OL points
 */
function getOlGeometryMidpoints(olGeometry) {
    let expectedNumber;
    if (olGeometry instanceof OlCircle) {
        expectedNumber = 0;
    }
    else {
        expectedNumber = Math.max((olGeometry.getFlatCoordinates().length / 2) - 1, 0);
    }
    // TODO: This works but it's quite messy. If time permits,
    // clean this. Maybe a Tooltip class could handle that
    let olMidpoints = olGeometry.get('_midpoints');
    if (olMidpoints === undefined) {
        if (olGeometry instanceof OlPoint) {
            olMidpoints = new Array(1);
        }
        else {
            olMidpoints = new Array(expectedNumber);
        }
        olGeometry.set('_midpoints', olMidpoints, true);
        return olMidpoints;
    }
    if (expectedNumber === 0) {
        return olMidpoints;
    }
    if (expectedNumber === olMidpoints.length) {
        return olMidpoints;
    }
    if (expectedNumber > olMidpoints.length) {
        olMidpoints.push(...new Array(expectedNumber - olMidpoints.length));
        return olMidpoints;
    }
    for (let i = expectedNumber; i < olMidpoints.length; i++) {
        const olMidpoint = olMidpoints[expectedNumber];
        if (olMidpoint !== undefined) {
            clearOlMidpointTooltip(olMidpoint);
        }
    }
    olMidpoints.splice(expectedNumber);
    return olMidpoints;
}
/**
 * Remove an OL midpoint's tooltip from the map
 * @param olMidpoint OL Point
 */
function clearOlMidpointTooltip(olMidpoint) {
    const olTooltip = olMidpoint.get('_tooltip');
    if (olTooltip !== undefined) {
        const olMap = olTooltip.getMap();
        if (olMap !== undefined) {
            olMap.removeOverlay(olTooltip);
        }
    }
}
/**
 * Add an OL overlay at each midpoint and return an array of those overlays
 * @param olGeometry OL Geometry
 * @returns OL overlays
 */
export function updateOlTooltipsAtMidpoints(olGeometry) {
    const olMidpoints = updateOlGeometryMidpoints(olGeometry);
    let typeGeom = '';
    if (olGeometry instanceof OlLineString) {
        typeGeom = 'line-';
    }
    else if (olGeometry instanceof OlPolygon) {
        typeGeom = 'polygone-';
    }
    const olTooltips = olMidpoints.map((olMidpoint) => {
        let olTooltip = olMidpoint.get('_tooltip');
        if (olTooltip === undefined) {
            olTooltip = createOlTooltipAtPoint(olMidpoint, false, typeGeom);
        }
        else {
            olTooltip.setPosition(olMidpoint.getFlatCoordinates());
        }
        return olTooltip;
    });
    return olTooltips;
}
/**
 * Return an array of OL overlay at midspoints, if any
 * @param olGeometry OL Geometry
 * @returns OL overlays
 */
export function getOlTooltipsAtMidpoints(olGeometry) {
    const olMidpoints = getOlGeometryMidpoints(olGeometry);
    return olMidpoints.map((olMidpoint) => {
        return olMidpoint ? olMidpoint.get('_tooltip') : undefined;
    });
}
/**
 * Update an OL geometry center and return it
 * @param olGeometry OL Geometry
 * @returns OL point
 */
export function updateOlGeometryCenter(olGeometry) {
    let olCenter = olGeometry.get('_center');
    const centerCoordinate = olGetCenter(olGeometry.getExtent());
    if (olCenter !== undefined) {
        olCenter.setCoordinates(centerCoordinate);
    }
    else {
        olCenter = new OlPoint(centerCoordinate);
        olGeometry.set('_center', olCenter);
    }
    return olCenter;
}
/**
 * Add an OL overlay at the center of a geometry and return that overlay
 * @param olGeometry OL Geometry
 * @returns OL overlay
 */
export function updateOlTooltipAtCenter(olGeometry) {
    const olCenter = updateOlGeometryCenter(olGeometry);
    let olTooltip = olCenter.get('_tooltip');
    if (olTooltip === undefined) {
        olTooltip = createOlTooltipAtPoint(olCenter, true);
    }
    else {
        olTooltip.setPosition(olCenter.getFlatCoordinates());
    }
    return olTooltip;
}
/**
 * Return an array of OL overlay at midspoints, if any
 * @param olGeometry OL Geometry
 * @returns OL overlays
 */
export function getOlTooltipAtCenter(olGeometry) {
    const olCenter = olGeometry.get('_center');
    return olCenter ? olCenter.get('_tooltip') : undefined;
}
/**
 * Get all the tooltips of an OL geometry
 * @param olGeometry OL Geometry
 * @returns OL overlays
 */
export function getTooltipsOfOlGeometry(olGeometry) {
    const olTooltips = [].concat(getOlTooltipsAtMidpoints(olGeometry) || []);
    const olCenterTooltip = getOlTooltipAtCenter(olGeometry);
    if (olCenterTooltip !== undefined) {
        olTooltips.push(olCenterTooltip);
    }
    return olTooltips;
}
/**
 * Create an OL overlay at a point and bind the overlay to the point
 * @param olPoint OL Point
 * @returns OL overlay
 */
export function createOlTooltipAtPoint(olPoint, center = false, srcGeomType = '') {
    const olTooltip = new OlOverlay({
        element: document.createElement('div'),
        offset: [-30, -10],
        className: (center ?
            ['igo-map-tooltip',
                'igo-map-tooltip-measure', 'igo-map-tooltip-measure-area'] : ['igo-map-tooltip', 'igo-map-tooltip-measure',
            `igo-map-tooltip-measure-${srcGeomType}segments`]).join(' '),
        stopEvent: false
    });
    olTooltip.setPosition(olPoint.getFlatCoordinates());
    olPoint.set('_tooltip', olTooltip);
    return olTooltip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21lYXN1cmUvc2hhcmVkL21lYXN1cmUudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBQ3BDLE9BQU8sWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsU0FBUyxJQUFJLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsU0FBUyxJQUFJLFdBQVcsRUFDeEIsT0FBTyxJQUFJLFNBQVMsRUFDckIsTUFBTSxXQUFXLENBQUM7QUFHbkIsT0FBTyxFQUNMLGVBQWUsRUFDZiwyQkFBMkIsRUFDM0IsaUJBQWlCLEVBQ2pCLDZCQUE2QixFQUM5QixNQUFNLGdCQUFnQixDQUFDO0FBRXhCOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsS0FBYTtJQUM5QyxPQUFPLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDdkIsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQWE7SUFDeEMsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFhO0lBQ3pDLE9BQU8sS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUMxQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxLQUFhO0lBQzFELE9BQU8sS0FBSyxHQUFHLFFBQVEsQ0FBQztB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dmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0ICogYXMgb2xzdHlsZSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgT2xQb2ludCBmcm9tICdvbC9nZW9tL1BvaW50JztcbmltcG9ydCBPbExpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9MaW5lU3RyaW5nJztcbmltcG9ydCBPbFBvbHlnb24gZnJvbSAnb2wvZ2VvbS9Qb2x5Z29uJztcbmltcG9ydCBPbENpcmNsZSBmcm9tICdvbC9nZW9tL0NpcmNsZSc7XG5pbXBvcnQgT2xPdmVybGF5IGZyb20gJ29sL092ZXJsYXknO1xuaW1wb3J0IHsgZ2V0Q2VudGVyIGFzIG9sR2V0Q2VudGVyIH0gZnJvbSAnb2wvZXh0ZW50JztcbmltcG9ydCB7XG4gIGdldExlbmd0aCBhcyBvbEdldExlbmd0aCxcbiAgZ2V0QXJlYSBhcyBvbEdldEFyZWFcbn0gZnJvbSAnb2wvc3BoZXJlJztcblxuaW1wb3J0IHsgTWVhc3VyZSB9IGZyb20gJy4vbWVhc3VyZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7XG4gIE1lYXN1cmVBcmVhVW5pdCxcbiAgTWVhc3VyZUFyZWFVbml0QWJicmV2aWF0aW9uLFxuICBNZWFzdXJlTGVuZ3RoVW5pdCxcbiAgTWVhc3VyZUxlbmd0aFVuaXRBYmJyZXZpYXRpb25cbn0gZnJvbSAnLi9tZWFzdXJlLmVudW0nO1xuXG4vKipcbiAqIENvbnZlcnQgdmFsdWUgZnJvbSBtZXRlcnMgdG8ga2lsb21ldGVyc1xuICogQHBhcmFtIHZhbHVlIFZhbHVlIGluIG1ldGVyc1xuICogQHJldHVybnMgVmFsdWUgaW4ga2lsb21ldGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWV0ZXJzVG9LaWxvbWV0ZXJzKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdmFsdWUgKiAwLjAwMTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHZhbHVlIGZyb20gbWV0ZXJzIHRvIGZlZXRcbiAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSBpbiBtZXRlcnNcbiAqIEByZXR1cm5zIFZhbHVlIGluIGZlZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ldGVyc1RvRmVldCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHZhbHVlICogMy4yODA4O1xufVxuXG4vKipcbiAqIENvbnZlcnQgdmFsdWUgZnJvbSBtZXRlcnMgdG8gbWlsZXNcbiAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSBpbiBtZXRlcnNcbiAqIEByZXR1cm5zIFZhbHVlIGluIG1pbGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXRlcnNUb01pbGVzKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdmFsdWUgKiAwLjAwMDYyMTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHZhbHVlIGZyb20gc3F1YXJlIG1ldGVycyB0byBzcXVhcmUga2lsb21ldGVyc1xuICogQHBhcmFtIHZhbHVlIFZhbHVlIGluIHNxdWFyZSBtZXRlcnNcbiAqIEByZXR1cm5zIFZhbHVlIGluIHNxdWFyZSBraWxvbWV0ZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVNZXRlcnNUb1NxdWFyZUtpbG9tZXRlcnModmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiB2YWx1ZSAqIDAuMDAwMDAxO1xufVxuXG4vKipcbiAqIENvbnZlcnQgdmFsdWUgZnJvbSBzcXVhcmUgbWV0ZXJzIHRvIHNxdWFyZSBtaWxlc1xuICogQHBhcmFtIHZhbHVlIFZhbHVlIGluIHNxdWFyZSBtZXRlcnNcbiAqIEByZXR1cm5zIFZhbHVlIGluIHNxdWFyZSBtaWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlTWV0ZXJzVG9TcXVhcmVNaWxlcyh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHZhbHVlICogMC4wMDAwMDAzODYxO1xufVxuXG4vKipcbiAqIENvbnZlcnQgdmFsdWUgZnJvbSBzcXVhcmUgbWV0ZXJzIHRvIHNxdWFyZSBmZWV0XG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgaW4gc3F1YXJlIG1ldGVyc1xuICogQHJldHVybnMgVmFsdWUgaW4gc3F1YXJlIGZlZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZU1ldGVyc1RvU3F1YXJlRmVldCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHZhbHVlICogMTAuNzY0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgdmFsdWUgZnJvbSBzcXVhcmUgbWV0ZXJzIHRvIGhlY3RhcmVzXG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgaW4gc3F1YXJlIG1ldGVyc1xuICogQHJldHVybnMgVmFsdWUgaW4gaGVjdGFyZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZU1ldGVyc1RvSGVjdGFyZXModmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiB2YWx1ZSAqIDAuMDAwMTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHZhbHVlIGZyb20gc3F1YXJlIG1ldGVycyB0byBhY3Jlc1xuICogQHBhcmFtIHZhbHVlIFZhbHVlIGluIHNxdWFyZSBtZXRlcnNcbiAqIEByZXR1cm5zIFZhbHVlIGluIGFjcmVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVNZXRlcnNUb0FjcmVzKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdmFsdWUgKiAwLjAwMDI0NzExO1xufVxuXG4vKipcbiAqIENvbnZlcnQgdmFsdWUgZnJvbSBtZXRlcnMgdG8gdGhlIHNwZWNpZmllZCBsZW5ndGggdW5pdFxuICogQHBhcmFtIHZhbHVlIFZhbHVlIGluIG1ldGVyc1xuICogQHBhcmFtIHVuaXQgTGVuZ3RoIHVuaXRcbiAqIEByZXR1cm5zIFZhbHVlIGluIHVuaXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ldGVyc1RvVW5pdCh2YWx1ZTogbnVtYmVyLCB1bml0OiBNZWFzdXJlTGVuZ3RoVW5pdCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IGNvbnZlcnNpb25NYXBwZXIgPSBuZXcgTWFwKFtcbiAgICBbTWVhc3VyZUxlbmd0aFVuaXQuTWV0ZXJzLCAodmFsOiBudW1iZXIpID0+IHZhbF0sXG4gICAgW01lYXN1cmVMZW5ndGhVbml0LktpbG9tZXRlcnMsIG1ldGVyc1RvS2lsb21ldGVyc10sXG4gICAgW01lYXN1cmVMZW5ndGhVbml0Lk1pbGVzLCBtZXRlcnNUb01pbGVzXSxcbiAgICBbTWVhc3VyZUxlbmd0aFVuaXQuRmVldCwgbWV0ZXJzVG9GZWV0XSxcbiAgXSk7XG4gIGNvbnN0IGNvbnZlcnNpb24gPSBjb252ZXJzaW9uTWFwcGVyLmdldCh1bml0KTtcblxuICByZXR1cm4gY29udmVyc2lvbiA/IGNvbnZlcnNpb24odmFsdWUpIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENvbnZlcnQgdmFsdWUgZnJvbSBzcXVhcmUgbWV0ZXJzIHRvIHRoZSBzcGVjaWZpZWQgYXJlYSB1bml0XG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgaW4gbWV0ZXJzXG4gKiBAcGFyYW0gdW5pdCBBcmVhIHVuaXRcbiAqIEByZXR1cm5zIFZhbHVlIGluIHVuaXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZU1ldGVyc1RvVW5pdCh2YWx1ZTogbnVtYmVyLCB1bml0OiBNZWFzdXJlQXJlYVVuaXQpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBjb25zdCBjb252ZXJzaW9uTWFwcGVyID0gbmV3IE1hcChbXG4gICAgW01lYXN1cmVBcmVhVW5pdC5TcXVhcmVNZXRlcnMsICh2YWw6IG51bWJlcikgPT4gdmFsXSxcbiAgICBbTWVhc3VyZUFyZWFVbml0LlNxdWFyZUtpbG9tZXRlcnMsIHNxdWFyZU1ldGVyc1RvU3F1YXJlS2lsb21ldGVyc10sXG4gICAgW01lYXN1cmVBcmVhVW5pdC5TcXVhcmVNaWxlcywgc3F1YXJlTWV0ZXJzVG9TcXVhcmVNaWxlc10sXG4gICAgW01lYXN1cmVBcmVhVW5pdC5TcXVhcmVGZWV0LCBzcXVhcmVNZXRlcnNUb1NxdWFyZUZlZXRdLFxuICAgIFtNZWFzdXJlQXJlYVVuaXQuSGVjdGFyZXMsIHNxdWFyZU1ldGVyc1RvSGVjdGFyZXNdLFxuICAgIFtNZWFzdXJlQXJlYVVuaXQuQWNyZXMsIHNxdWFyZU1ldGVyc1RvQWNyZXNdLFxuICBdKTtcbiAgY29uc3QgY29udmVyc2lvbiA9IGNvbnZlcnNpb25NYXBwZXIuZ2V0KHVuaXQpO1xuXG4gIHJldHVybiBjb252ZXJzaW9uID8gY29udmVyc2lvbih2YWx1ZSkgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgZm9ybWF0IGEgbWVhc3VyZSB0byBhIHJlYWRhYmxlIGZvcm1hdFxuICogQHBhcmFtIG1lYXN1cmUgTWVhc3VyZVxuICogQHBhcmFtIG9wdGlvbnMgRm9ybWF0dGluZyBvcHRpb25zXG4gKiBAcmV0dXJucyBGb3JtYXR0ZWQgbWVhc3VyZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TWVhc3VyZShcbiAgbWVhc3VyZTogbnVtYmVyLFxuICBvcHRpb25zPzoge1xuICAgIGRlY2ltYWw/OiBudW1iZXI7XG4gICAgdW5pdD86IE1lYXN1cmVBcmVhVW5pdCB8IE1lYXN1cmVMZW5ndGhVbml0O1xuICAgIHVuaXRBYmJyPzogYm9vbGVhbjtcbiAgICBsb2NhbGU/OiBzdHJpbmc7XG4gIH0sXG4gIGxhbmd1YWdlU2VydmljZT86IExhbmd1YWdlU2VydmljZSkge1xuICBsZXQgZGVjaW1hbCA9IG9wdGlvbnMuZGVjaW1hbDtcbiAgaWYgKGRlY2ltYWwgPT09IHVuZGVmaW5lZCB8fCBkZWNpbWFsIDwgMCkge1xuICAgIGRlY2ltYWwgPSAxO1xuICB9XG5cbiAgY29uc3QgcGFydHMgPSBbXTtcbiAgaWYgKG9wdGlvbnMubG9jYWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJ0cy5wdXNoKG1lYXN1cmUudG9Mb2NhbGVTdHJpbmcob3B0aW9ucy5sb2NhbGUsIHtcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbCxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbFxuICAgIH0pKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJ0cy5wdXNoKG1lYXN1cmUudG9GaXhlZChkZWNpbWFsKS50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnVuaXQgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnVuaXRBYmJyID09PSB0cnVlKSB7XG4gICAgaWYgKGxhbmd1YWdlU2VydmljZSkge1xuICAgICAgcGFydHMucHVzaChcbiAgICAgICAgTWVhc3VyZUxlbmd0aFVuaXRBYmJyZXZpYXRpb25bb3B0aW9ucy51bml0XSA/XG4gICAgICAgICAgbGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLm1lYXN1cmUuJyArIE1lYXN1cmVMZW5ndGhVbml0QWJicmV2aWF0aW9uW29wdGlvbnMudW5pdF0pIDpcbiAgICAgICAgICBsYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8ubWVhc3VyZS4nICsgTWVhc3VyZUFyZWFVbml0QWJicmV2aWF0aW9uW29wdGlvbnMudW5pdF0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0cy5wdXNoKFxuICAgICAgICBNZWFzdXJlTGVuZ3RoVW5pdEFiYnJldmlhdGlvbltvcHRpb25zLnVuaXRdIHx8IE1lYXN1cmVBcmVhVW5pdEFiYnJldmlhdGlvbltvcHRpb25zLnVuaXRdXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5maWx0ZXIocCA9PiBwICE9PSB1bmRlZmluZWQpLmpvaW4oJyAnKTtcbn1cblxuLyoqXG4gKiBDb21wdXRlIGJlc3QgbGVuZ3RoIG1lYXN1cmUgdW5pdCBmb3IgYSBnaXZlbiBtZWFzdXJlIGluIG1ldGVyc1xuICogQHBhcmFtIHZhbHVlIFZhbHVlIGluIG1ldGVyc1xuICogQHJldHVybnMgTWVhc3VyZSB1bml0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlQmVzdExlbmd0aFVuaXQodmFsdWU6IG51bWJlcik6IE1lYXN1cmVMZW5ndGhVbml0IHtcbiAgbGV0IHVuaXQgPSBNZWFzdXJlTGVuZ3RoVW5pdC5NZXRlcnM7XG4gIGxldCBjb252ZXJ0ZWQgPSB2YWx1ZTtcbiAgY29uc3QgcG9zc2libGVVbml0cyA9IFtNZWFzdXJlTGVuZ3RoVW5pdC5LaWxvbWV0ZXJzXTtcbiAgd2hpbGUgKGNvbnZlcnRlZCA+IDEwMDAgJiYgcG9zc2libGVVbml0cy5sZW5ndGggPiAwKSB7XG4gICAgdW5pdCA9IHBvc3NpYmxlVW5pdHMucG9wKCk7XG4gICAgY29udmVydGVkID0gbWV0ZXJzVG9Vbml0KHZhbHVlLCB1bml0KTtcbiAgfVxuICByZXR1cm4gdW5pdDtcbn1cblxuLyoqXG4gKiBDb21wdXRlIGJlc3QgbGVuZ3RoIG1lYXN1cmUgdW5pdCBmb3IgYSBnaXZlbiBtZWFzdXJlIGluIHNxdWFyZSBtZXRlcnNcbiAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSBpbiBtZXRlcnNcbiAqIEByZXR1cm5zIE1lYXN1cmUgdW5pdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUJlc3RBcmVhVW5pdCh2YWx1ZTogbnVtYmVyKTogTWVhc3VyZUFyZWFVbml0IHtcbiAgbGV0IHVuaXQgPSBNZWFzdXJlQXJlYVVuaXQuU3F1YXJlTWV0ZXJzO1xuICBsZXQgY29udmVydGVkID0gdmFsdWU7XG4gIGNvbnN0IHBvc3NpYmxlVW5pdHMgPSBbTWVhc3VyZUFyZWFVbml0LlNxdWFyZUtpbG9tZXRlcnNdO1xuICB3aGlsZSAoY29udmVydGVkID4gMTAwMDAwMCAmJiBwb3NzaWJsZVVuaXRzLmxlbmd0aCA+IDApIHtcbiAgICB1bml0ID0gcG9zc2libGVVbml0cy5wb3AoKTtcbiAgICBjb252ZXJ0ZWQgPSBzcXVhcmVNZXRlcnNUb1VuaXQodmFsdWUsIHVuaXQpO1xuICB9XG4gIHJldHVybiB1bml0O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlZmF1bHQgc3R5bGUgZm9yIGEgbWVhc3VyZSBpbnRlcmFjdGlvblxuICogQHJldHVybnMgT0wgc3R5bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lYXN1cmVJbnRlcmFjdGlvblN0eWxlKCk6IG9sc3R5bGUuU3R5bGUge1xuICByZXR1cm4gbmV3IG9sc3R5bGUuU3R5bGUoe1xuICAgIHN0cm9rZTogbmV3IG9sc3R5bGUuU3Ryb2tlKHtcbiAgICAgIGNvbG9yOiAnI2ZmY2MzMycsXG4gICAgICBsaW5lRGFzaDogWzEwLCAxMF0sXG4gICAgICB3aWR0aDogMlxuICAgIH0pLFxuICAgIGZpbGw6ICBuZXcgb2xzdHlsZS5GaWxsKHtcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJ1xuICAgIH0pLFxuICAgIGltYWdlOiBuZXcgb2xzdHlsZS5DaXJjbGUoe1xuICAgICAgcmFkaXVzOiA1LFxuICAgICAgc3Ryb2tlOiBuZXcgb2xzdHlsZS5TdHJva2Uoe1xuICAgICAgICBjb2xvcjogJyNmZmNjMzMnLFxuICAgICAgfSksXG4gICAgICBmaWxsOiBuZXcgb2xzdHlsZS5GaWxsKHtcbiAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknXG4gICAgICB9KVxuICAgIH0pXG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlZmF1bHQgc3R5bGUgZm9yIGEgbWVhc3VyZSBsYXllclxuICogQHJldHVybnMgT0wgc3R5bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lYXN1cmVMYXllclN0eWxlKCk6IG9sc3R5bGUuU3R5bGUge1xuICByZXR1cm4gbmV3IG9sc3R5bGUuU3R5bGUoe1xuICAgIHN0cm9rZTogbmV3IG9sc3R5bGUuU3Ryb2tlKHtcbiAgICAgIGNvbG9yOiAnI2ZmY2MzMycsXG4gICAgICB3aWR0aDogMlxuICAgIH0pLFxuICAgIGZpbGw6ICBuZXcgb2xzdHlsZS5GaWxsKHtcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJ1xuICAgIH0pXG4gIH0pO1xufVxuXG4vKipcbiAqIENvbXB1dGUgdGhlIGxlbmd0aCBpbiBtZXRlcnMgb2YgYW4gT0wgZ2VvbWV0cnkgd2l0aCBhIGdpdmVuIHByb2plY3Rpb25cbiAqIEBwYXJhbSBvbEdlb21ldHJ5IE9sIGdlb21ldHJ5XG4gKiBAcGFyYW0gcHJvamVjdGlvbiBvbEdlb21ldHJ5J3MgcHJvamVjdGlvblxuICogQHJldHVybnMgTGVuZ3RoIGluIG1ldGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZU9sR2VvbWV0cnlMZW5ndGgob2xHZW9tZXRyeTogT2xQb2ludCB8IE9sTGluZVN0cmluZyB8IE9sUG9seWdvbiB8IE9sQ2lyY2xlLCBwcm9qZWN0aW9uOiBzdHJpbmcpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAob2xHZW9tZXRyeSBpbnN0YW5jZW9mIE9sUG9pbnQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChvbEdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIG9sR2V0TGVuZ3RoKG9sR2VvbWV0cnksIHtwcm9qZWN0aW9ufSk7XG59XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgYXJlYSBpbiBzcXVhcmUgbWV0ZXJzIG9mIGFuIE9MIGdlb21ldHJ5IHdpdGggYSBnaXZlbiBwcm9qZWN0aW9uXG4gKiBAcGFyYW0gb2xHZW9tZXRyeSBPbCBnZW9tZXRyeVxuICogQHBhcmFtIHByb2plY3Rpb24gb2xHZW9tZXRyeSdzIHByb2plY3Rpb25cbiAqIEByZXR1cm5zIEFyZWEgaW4gc3F1YXJlIG1ldGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZU9sR2VvbWV0cnlBcmVhKG9sR2VvbWV0cnk6IE9sUG9pbnQgfCBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24gfCBPbENpcmNsZSwgcHJvamVjdGlvbjogc3RyaW5nKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKG9sR2VvbWV0cnkgaW5zdGFuY2VvZiBPbFBvaW50IHx8IG9sR2VvbWV0cnkgaW5zdGFuY2VvZiBPbExpbmVTdHJpbmcpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChvbEdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIG9sR2V0QXJlYShvbEdlb21ldHJ5LCB7cHJvamVjdGlvbn0pO1xufVxuXG4vKipcbiAqIENvbXB1dGUgdGhlIGFyZWEgKHNxdWFyZSBtZXRlcnMpLCBsZW5ndGggKG1ldGVycykgYW5kIGxhc3QgbGVuZ3RoIChtZXRlcnMpXG4gKiBvZiBhbiBPTCBnZW9tZXRyeSB3aXRoIGEgZ2l2ZW4gcHJvamVjdGlvbi5cbiAqIEBwYXJhbSBvbEdlb21ldHJ5IE9sIGdlb21ldHJ5XG4gKiBAcGFyYW0gcHJvamVjdGlvbiBvbEdlb21ldHJ5J3MgcHJvamVjdGlvblxuICogQHJldHVybnMgQ29tcHV0ZWQgbWVhc3VyZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZU9sR2VvbWV0cnkob2xHZW9tZXRyeTogT2xQb2ludCB8IE9sTGluZVN0cmluZyB8IE9sUG9seWdvbiB8IE9sQ2lyY2xlLCBwcm9qZWN0aW9uOiBzdHJpbmcpOiBNZWFzdXJlIHtcbiAgY29uc3QgbGVuZ3RoID0gbWVhc3VyZU9sR2VvbWV0cnlMZW5ndGgob2xHZW9tZXRyeSwgcHJvamVjdGlvbik7XG4gIGNvbnN0IGFyZWEgPSBtZWFzdXJlT2xHZW9tZXRyeUFyZWEob2xHZW9tZXRyeSwgcHJvamVjdGlvbik7XG5cbiAgY29uc3QgbGVuZ3RocyA9IFtdO1xuICBjb25zdCBjb29yZGluYXRlcyA9IG9sR2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzTGVuZ3RoID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBjb29yZGluYXRlc0xlbmd0aCAtIDQ7IGkgKz0gMikge1xuICAgIGNvbnN0IG9sU2VnbWVudCA9IG5ldyBPbExpbmVTdHJpbmcoW1xuICAgICAgW2Nvb3JkaW5hdGVzW2ldLCBjb29yZGluYXRlc1tpICsgMV1dLFxuICAgICAgW2Nvb3JkaW5hdGVzW2kgKyAyXSwgY29vcmRpbmF0ZXNbaSArIDNdXVxuICAgIF0pO1xuXG4gICAgbGVuZ3Rocy5wdXNoKG1lYXN1cmVPbEdlb21ldHJ5TGVuZ3RoKG9sU2VnbWVudCwgcHJvamVjdGlvbikpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhcmVhLFxuICAgIGxlbmd0aCxcbiAgICBsZW5ndGhzXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGFuIE9MIGdlb21ldHJ5IG1pZHBvaW50cyBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHRob3NlIHBvaW50c1xuICogQHBhcmFtIG9sR2VvbWV0cnkgT0wgR2VvbWV0cnlcbiAqIEByZXR1cm5zIE9MIHBvaW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT2xHZW9tZXRyeU1pZHBvaW50cyhvbEdlb21ldHJ5OiBPbFBvaW50IHwgT2xMaW5lU3RyaW5nIHwgT2xQb2x5Z29uIHwgT2xDaXJjbGUpOiBPbFBvaW50W10ge1xuICBsZXQgb2xNaWRwb2ludHM7XG4gIGlmIChvbEdlb21ldHJ5IGluc3RhbmNlb2YgT2xQb2ludCkge1xuICAgIGNvbnN0IG9sTWlkcG9pbnRQb2ludCA9IG5ldyBPbFBvaW50KG9sR2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCkpO1xuICAgIG9sTWlkcG9pbnRzID0gbmV3IEFycmF5KDEpO1xuICAgIG9sTWlkcG9pbnRzWzBdID0gb2xNaWRwb2ludFBvaW50O1xuICB9IGVsc2Uge1xuICAgIG9sTWlkcG9pbnRzID0gZ2V0T2xHZW9tZXRyeU1pZHBvaW50cyhvbEdlb21ldHJ5KTtcbiAgICAvLyBUT0RPOiBoYW5kbGUgbXVsdGkgZ2VvbWV0cmllc1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gb2xHZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICBjb25zdCBtaWRwb2ludHNMZW5ndGggPSBvbE1pZHBvaW50cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaWRwb2ludHNMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaiA9IGkgKiAyO1xuICAgICAgY29uc3Qgb2xTZWdtZW50ID0gbmV3IE9sTGluZVN0cmluZyhbXG4gICAgICAgIFtjb29yZGluYXRlc1tqXSwgY29vcmRpbmF0ZXNbaiArIDFdXSxcbiAgICAgICAgW2Nvb3JkaW5hdGVzW2ogKyAyXSwgY29vcmRpbmF0ZXNbaiArIDNdXVxuICAgICAgXSk7XG5cbiAgICAgIGNvbnN0IG1pZHBvaW50Q29vcmRpbmF0ZSA9IG9sU2VnbWVudC5nZXRDb29yZGluYXRlQXQoMC41KTtcbiAgICAgIGNvbnN0IG9sTWlkcG9pbnQgPSBvbE1pZHBvaW50c1tpXTtcbiAgICAgIGlmIChvbE1pZHBvaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb2xNaWRwb2ludC5zZXRDb29yZGluYXRlcyhtaWRwb2ludENvb3JkaW5hdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2xNaWRwb2ludHNbaV0gPSBuZXcgT2xQb2ludChtaWRwb2ludENvb3JkaW5hdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2xNaWRwb2ludHM7XG59XG5cbi8qKlxuICogQ2xlYXIgYW4gT0wgZ2VvbWV0cnkgbWlkcG9pbnRzIGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgdGhvc2UgcG9pbnRzXG4gKiBAcGFyYW0gb2xHZW9tZXRyeSBPTCBHZW9tZXRyeVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJPbEdlb21ldHJ5TWlkcG9pbnRzKG9sR2VvbWV0cnk6IE9sUG9pbnQgfCBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24gfCBPbENpcmNsZSkge1xuICBjb25zdCBvbE1pZHBvaW50cyA9IG9sR2VvbWV0cnkuZ2V0KCdfbWlkcG9pbnRzJykgfHwgW107XG4gIGNvbnN0IG1pZHBvaW50c0xlbmd0aCA9IG9sTWlkcG9pbnRzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaWRwb2ludHNMZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG9sTWlkcG9pbnQgPSBvbE1pZHBvaW50c1tpXTtcbiAgICBpZiAob2xNaWRwb2ludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAob2xNaWRwb2ludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsZWFyT2xNaWRwb2ludFRvb2x0aXAob2xNaWRwb2ludCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb2xHZW9tZXRyeS5zZXQoJ19taWRwb2ludHMnLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gIHJldHVybiBvbE1pZHBvaW50cztcbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgIE9MIGdlb21ldHJ5IG1pZHBvaW50cywgaWYgYW55XG4gKiBAcGFyYW0gb2xHZW9tZXRyeSBPTCBHZW9tZXRyeVxuICogQHJldHVybnMgT0wgcG9pbnRzXG4gKi9cbmZ1bmN0aW9uIGdldE9sR2VvbWV0cnlNaWRwb2ludHMob2xHZW9tZXRyeTogT2xQb2ludCB8IE9sTGluZVN0cmluZyB8IE9sUG9seWdvbiB8IE9sQ2lyY2xlKTogT2xQb2ludFtdIHtcbiAgbGV0IGV4cGVjdGVkTnVtYmVyO1xuICBpZiAob2xHZW9tZXRyeSBpbnN0YW5jZW9mIE9sQ2lyY2xlKSB7XG4gICAgZXhwZWN0ZWROdW1iZXIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGV4cGVjdGVkTnVtYmVyID0gTWF0aC5tYXgoKG9sR2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCkubGVuZ3RoIC8gMikgLSAxLCAwKTtcbiAgfVxuICAvLyBUT0RPOiBUaGlzIHdvcmtzIGJ1dCBpdCdzIHF1aXRlIG1lc3N5LiBJZiB0aW1lIHBlcm1pdHMsXG4gIC8vIGNsZWFuIHRoaXMuIE1heWJlIGEgVG9vbHRpcCBjbGFzcyBjb3VsZCBoYW5kbGUgdGhhdFxuICBsZXQgb2xNaWRwb2ludHMgPSBvbEdlb21ldHJ5LmdldCgnX21pZHBvaW50cycpO1xuXG4gIGlmIChvbE1pZHBvaW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKG9sR2VvbWV0cnkgaW5zdGFuY2VvZiBPbFBvaW50KSB7XG4gICAgICBvbE1pZHBvaW50cyA9IG5ldyBBcnJheSgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xNaWRwb2ludHMgPSBuZXcgQXJyYXkoZXhwZWN0ZWROdW1iZXIpO1xuICAgIH1cbiAgICBvbEdlb21ldHJ5LnNldCgnX21pZHBvaW50cycsIG9sTWlkcG9pbnRzLCB0cnVlKTtcbiAgICByZXR1cm4gb2xNaWRwb2ludHM7XG4gIH1cblxuICBpZiAoZXhwZWN0ZWROdW1iZXIgPT09IDApIHtcbiAgICByZXR1cm4gb2xNaWRwb2ludHM7XG4gIH1cblxuICBpZiAoZXhwZWN0ZWROdW1iZXIgPT09IG9sTWlkcG9pbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBvbE1pZHBvaW50cztcbiAgfVxuXG4gIGlmIChleHBlY3RlZE51bWJlciA+IG9sTWlkcG9pbnRzLmxlbmd0aCkge1xuICAgIG9sTWlkcG9pbnRzLnB1c2goLi4ubmV3IEFycmF5KGV4cGVjdGVkTnVtYmVyIC0gb2xNaWRwb2ludHMubGVuZ3RoKSk7XG4gICAgcmV0dXJuIG9sTWlkcG9pbnRzO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IGV4cGVjdGVkTnVtYmVyOyBpIDwgb2xNaWRwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvbE1pZHBvaW50ID0gb2xNaWRwb2ludHNbZXhwZWN0ZWROdW1iZXJdO1xuICAgIGlmIChvbE1pZHBvaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyT2xNaWRwb2ludFRvb2x0aXAob2xNaWRwb2ludCk7XG4gICAgfVxuICB9XG4gIG9sTWlkcG9pbnRzLnNwbGljZShleHBlY3RlZE51bWJlcik7XG5cbiAgcmV0dXJuIG9sTWlkcG9pbnRzO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBPTCBtaWRwb2ludCdzIHRvb2x0aXAgZnJvbSB0aGUgbWFwXG4gKiBAcGFyYW0gb2xNaWRwb2ludCBPTCBQb2ludFxuICovXG5mdW5jdGlvbiBjbGVhck9sTWlkcG9pbnRUb29sdGlwKG9sTWlkcG9pbnQ6IE9sUG9pbnQpIHtcbiAgY29uc3Qgb2xUb29sdGlwID0gb2xNaWRwb2ludC5nZXQoJ190b29sdGlwJyk7XG4gIGlmIChvbFRvb2x0aXAgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IG9sTWFwID0gb2xUb29sdGlwLmdldE1hcCgpO1xuICAgIGlmIChvbE1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvbE1hcC5yZW1vdmVPdmVybGF5KG9sVG9vbHRpcCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIGFuIE9MIG92ZXJsYXkgYXQgZWFjaCBtaWRwb2ludCBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHRob3NlIG92ZXJsYXlzXG4gKiBAcGFyYW0gb2xHZW9tZXRyeSBPTCBHZW9tZXRyeVxuICogQHJldHVybnMgT0wgb3ZlcmxheXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU9sVG9vbHRpcHNBdE1pZHBvaW50cyhvbEdlb21ldHJ5OiBPbFBvaW50IHwgT2xMaW5lU3RyaW5nIHwgT2xQb2x5Z29uIHwgT2xDaXJjbGUpOiBPbE92ZXJsYXlbXSB7XG4gIGNvbnN0IG9sTWlkcG9pbnRzID0gdXBkYXRlT2xHZW9tZXRyeU1pZHBvaW50cyhvbEdlb21ldHJ5KTtcbiAgbGV0IHR5cGVHZW9tID0gJyc7XG4gIGlmIChvbEdlb21ldHJ5IGluc3RhbmNlb2YgT2xMaW5lU3RyaW5nKSB7XG4gIHR5cGVHZW9tID0gJ2xpbmUtJztcbiAgfSBlbHNlIGlmIChvbEdlb21ldHJ5IGluc3RhbmNlb2YgT2xQb2x5Z29uKSB7XG4gICAgdHlwZUdlb20gPSAncG9seWdvbmUtJztcbiAgICB9XG4gIGNvbnN0IG9sVG9vbHRpcHMgPSBvbE1pZHBvaW50cy5tYXAoKG9sTWlkcG9pbnQ6IE9sUG9pbnQpID0+IHtcbiAgICBsZXQgb2xUb29sdGlwID0gb2xNaWRwb2ludC5nZXQoJ190b29sdGlwJyk7XG4gICAgaWYgKG9sVG9vbHRpcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvbFRvb2x0aXAgPSBjcmVhdGVPbFRvb2x0aXBBdFBvaW50KG9sTWlkcG9pbnQsIGZhbHNlLCB0eXBlR2VvbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sVG9vbHRpcC5zZXRQb3NpdGlvbihvbE1pZHBvaW50LmdldEZsYXRDb29yZGluYXRlcygpKTtcbiAgICB9XG4gICAgcmV0dXJuIG9sVG9vbHRpcDtcbiAgfSk7XG4gIHJldHVybiBvbFRvb2x0aXBzO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBPTCBvdmVybGF5IGF0IG1pZHNwb2ludHMsIGlmIGFueVxuICogQHBhcmFtIG9sR2VvbWV0cnkgT0wgR2VvbWV0cnlcbiAqIEByZXR1cm5zIE9MIG92ZXJsYXlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPbFRvb2x0aXBzQXRNaWRwb2ludHMob2xHZW9tZXRyeTogT2xQb2ludCB8IE9sTGluZVN0cmluZyB8IE9sUG9seWdvbiB8IE9sQ2lyY2xlKTogT2xPdmVybGF5W10ge1xuICBjb25zdCBvbE1pZHBvaW50cyA9IGdldE9sR2VvbWV0cnlNaWRwb2ludHMob2xHZW9tZXRyeSk7XG4gIHJldHVybiBvbE1pZHBvaW50cy5tYXAoKG9sTWlkcG9pbnQ6IE9sUG9pbnQpID0+IHtcbiAgICByZXR1cm4gb2xNaWRwb2ludCA/IG9sTWlkcG9pbnQuZ2V0KCdfdG9vbHRpcCcpIDogdW5kZWZpbmVkO1xuICB9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYW4gT0wgZ2VvbWV0cnkgY2VudGVyIGFuZCByZXR1cm4gaXRcbiAqIEBwYXJhbSBvbEdlb21ldHJ5IE9MIEdlb21ldHJ5XG4gKiBAcmV0dXJucyBPTCBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT2xHZW9tZXRyeUNlbnRlcihvbEdlb21ldHJ5OiBPbFBvaW50IHwgT2xMaW5lU3RyaW5nIHwgT2xQb2x5Z29uIHwgT2xDaXJjbGUpOiBPbFBvaW50IHtcbiAgbGV0IG9sQ2VudGVyID0gb2xHZW9tZXRyeS5nZXQoJ19jZW50ZXInKTtcbiAgY29uc3QgY2VudGVyQ29vcmRpbmF0ZSA9IG9sR2V0Q2VudGVyKG9sR2VvbWV0cnkuZ2V0RXh0ZW50KCkpO1xuICBpZiAob2xDZW50ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIG9sQ2VudGVyLnNldENvb3JkaW5hdGVzKGNlbnRlckNvb3JkaW5hdGUpO1xuICB9IGVsc2Uge1xuICAgIG9sQ2VudGVyID0gbmV3IE9sUG9pbnQoY2VudGVyQ29vcmRpbmF0ZSk7XG4gICAgb2xHZW9tZXRyeS5zZXQoJ19jZW50ZXInLCBvbENlbnRlcik7XG4gIH1cblxuICByZXR1cm4gb2xDZW50ZXI7XG59XG5cbi8qKlxuICogQWRkIGFuIE9MIG92ZXJsYXkgYXQgdGhlIGNlbnRlciBvZiBhIGdlb21ldHJ5IGFuZCByZXR1cm4gdGhhdCBvdmVybGF5XG4gKiBAcGFyYW0gb2xHZW9tZXRyeSBPTCBHZW9tZXRyeVxuICogQHJldHVybnMgT0wgb3ZlcmxheVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT2xUb29sdGlwQXRDZW50ZXIob2xHZW9tZXRyeTogT2xQb2ludCB8IE9sTGluZVN0cmluZyB8IE9sUG9seWdvbiB8IE9sQ2lyY2xlKTogT2xPdmVybGF5IHtcbiAgY29uc3Qgb2xDZW50ZXIgPSB1cGRhdGVPbEdlb21ldHJ5Q2VudGVyKG9sR2VvbWV0cnkpO1xuICBsZXQgb2xUb29sdGlwID0gb2xDZW50ZXIuZ2V0KCdfdG9vbHRpcCcpO1xuICBpZiAob2xUb29sdGlwID09PSB1bmRlZmluZWQpIHtcbiAgICBvbFRvb2x0aXAgPSBjcmVhdGVPbFRvb2x0aXBBdFBvaW50KG9sQ2VudGVyLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBvbFRvb2x0aXAuc2V0UG9zaXRpb24ob2xDZW50ZXIuZ2V0RmxhdENvb3JkaW5hdGVzKCkpO1xuICB9XG4gIHJldHVybiBvbFRvb2x0aXA7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIE9MIG92ZXJsYXkgYXQgbWlkc3BvaW50cywgaWYgYW55XG4gKiBAcGFyYW0gb2xHZW9tZXRyeSBPTCBHZW9tZXRyeVxuICogQHJldHVybnMgT0wgb3ZlcmxheXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9sVG9vbHRpcEF0Q2VudGVyKG9sR2VvbWV0cnk6IE9sUG9pbnQgfCBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24gfCBPbENpcmNsZSk6IE9sT3ZlcmxheSB7XG4gIGNvbnN0IG9sQ2VudGVyID0gb2xHZW9tZXRyeS5nZXQoJ19jZW50ZXInKTtcbiAgcmV0dXJuIG9sQ2VudGVyID8gb2xDZW50ZXIuZ2V0KCdfdG9vbHRpcCcpIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEdldCBhbGwgdGhlIHRvb2x0aXBzIG9mIGFuIE9MIGdlb21ldHJ5XG4gKiBAcGFyYW0gb2xHZW9tZXRyeSBPTCBHZW9tZXRyeVxuICogQHJldHVybnMgT0wgb3ZlcmxheXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRvb2x0aXBzT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnk6IE9sUG9pbnQgfCBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24gfCBPbENpcmNsZSk6IE9sT3ZlcmxheVtdIHtcbiAgY29uc3Qgb2xUb29sdGlwcyA9IFtdLmNvbmNhdChnZXRPbFRvb2x0aXBzQXRNaWRwb2ludHMob2xHZW9tZXRyeSkgfHwgW10pO1xuICBjb25zdCBvbENlbnRlclRvb2x0aXAgPSBnZXRPbFRvb2x0aXBBdENlbnRlcihvbEdlb21ldHJ5KTtcbiAgaWYgKG9sQ2VudGVyVG9vbHRpcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgb2xUb29sdGlwcy5wdXNoKG9sQ2VudGVyVG9vbHRpcCk7XG4gIH1cbiAgcmV0dXJuIG9sVG9vbHRpcHM7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIE9MIG92ZXJsYXkgYXQgYSBwb2ludCBhbmQgYmluZCB0aGUgb3ZlcmxheSB0byB0aGUgcG9pbnRcbiAqIEBwYXJhbSBvbFBvaW50IE9MIFBvaW50XG4gKiBAcmV0dXJucyBPTCBvdmVybGF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPbFRvb2x0aXBBdFBvaW50KG9sUG9pbnQ6IE9sUG9pbnQsIGNlbnRlcjogYm9vbGVhbiA9IGZhbHNlLCBzcmNHZW9tVHlwZTogc3RyaW5nPSAnJyk6IE9sT3ZlcmxheSB7XG4gIGNvbnN0IG9sVG9vbHRpcCA9IG5ldyBPbE92ZXJsYXkoe1xuICAgIGVsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIG9mZnNldDogWy0zMCwgLTEwXSxcbiAgICBjbGFzc05hbWU6IChjZW50ZXIgP1xuICAgIFsgJ2lnby1tYXAtdG9vbHRpcCcsXG4gICAgICAnaWdvLW1hcC10b29sdGlwLW1lYXN1cmUnLCAnaWdvLW1hcC10b29sdGlwLW1lYXN1cmUtYXJlYSddIDogWydpZ28tbWFwLXRvb2x0aXAnLCAnaWdvLW1hcC10b29sdGlwLW1lYXN1cmUnLFxuICAgICAgYGlnby1tYXAtdG9vbHRpcC1tZWFzdXJlLSR7c3JjR2VvbVR5cGV9c2VnbWVudHNgXSkuam9pbignICcpLFxuICAgIHN0b3BFdmVudDogZmFsc2VcbiAgfSk7XG4gIG9sVG9vbHRpcC5zZXRQb3NpdGlvbihvbFBvaW50LmdldEZsYXRDb29yZGluYXRlcygpKTtcbiAgb2xQb2ludC5zZXQoJ190b29sdGlwJywgb2xUb29sdGlwKTtcblxuICByZXR1cm4gb2xUb29sdGlwO1xufVxuIl19