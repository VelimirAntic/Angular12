import * as Olstyle from 'ol/style';
import OlPoint from 'ol/geom/Point';
import OlCircle from 'ol/geom/Circle';
import OlOverlay from 'ol/Overlay';
import { updateOlGeometryMidpoints, updateOlGeometryCenter } from '../../measure/shared/measure.utils';
/**
 * Create a default style
 * @param fillColor the fill color
 * @param strokeColor the stroke color
 * @param strokeWidth the stroke width
 * @param label a label
 * @returns OL style
 */
export function createInteractionStyle(fillColor, strokeColor, strokeWidth, label) {
    return new Olstyle.Style({
        stroke: new Olstyle.Stroke({
            color: strokeColor ? strokeColor : 'rgba(143,7,7,1)',
            width: strokeWidth ? strokeWidth : 1
        }),
        fill: new Olstyle.Fill({
            color: fillColor ? fillColor : 'rgba(255,255,255,0.4)'
        }),
        image: new Olstyle.Circle({
            radius: 5,
            stroke: new Olstyle.Stroke({
                color: strokeColor ? strokeColor : 'rgba(143,7,7,1)',
                width: strokeWidth ? strokeWidth : 1
            }),
            fill: new Olstyle.Fill({
                color: fillColor ? fillColor : 'rgba(255,255,255,0.4)'
            })
        })
    });
}
/**
 * Add an OL overlay at each midpoint and return an array of those overlays
 * @param olGeometry OL Geometry
 * @returns OL overlays
 */
export function updateOlTooltipsDrawAtMidpoints(olGeometry) {
    let olMidpoints;
    if (olGeometry instanceof OlPoint) {
        const olMidpointPoint = new OlPoint(olGeometry.getFlatCoordinates());
        olMidpoints = new Array(1);
        olMidpoints[0] = olMidpointPoint;
        olGeometry.setProperties({ _midpoints: olMidpoints }, true);
    }
    else if (olGeometry instanceof OlCircle) {
        const olMidpointPoint = new OlPoint(olGeometry.getCenter());
        olMidpoints = new Array(1);
        olMidpoints[0] = olMidpointPoint;
        olGeometry.setProperties({ _midpoints: olMidpoints }, true);
    }
    else {
        olMidpoints = updateOlGeometryMidpoints(olGeometry);
    }
    const olTooltips = olMidpoints.map((olMidpoint) => {
        let olTooltip = olMidpoint.get('_tooltip');
        if (olTooltip === undefined) {
            olTooltip = createOlTooltipDrawAtPoint(olMidpoint);
        }
        else {
            olTooltip.setPosition(olMidpoint.getFlatCoordinates());
        }
        return olTooltip;
    });
    return olTooltips;
}
/**
 * Add an OL overlay at the center of a geometry and return that overlay
 * @param olGeometry OL Geometry
 * @returns OL overlay
 */
export function updateOlTooltipDrawAtCenter(olGeometry) {
    const olCenter = updateOlGeometryCenter(olGeometry);
    let olTooltip = olCenter.get('_tooltip');
    if (olTooltip === undefined) {
        olTooltip = createOlTooltipDrawAtPoint(olCenter);
    }
    else {
        olTooltip.setPosition(olCenter.getFlatCoordinates());
    }
    return olTooltip;
}
/**
 * Create an OL overlay at a point and bind the overlay to the point
 * @param olPoint OL Point
 * @returns OL overlay
 */
export function createOlTooltipDrawAtPoint(olPoint) {
    const olTooltip = new OlOverlay({
        element: document.createElement('div'),
        offset: [-30, -10],
        className: [
            'igo-map-tooltip',
            'igo-map-tooltip-draw'
        ].join(' '),
        stopEvent: false
    });
    olTooltip.setPosition(olPoint.getFlatCoordinates());
    olPoint.set('_tooltip', olTooltip);
    return olTooltip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2RyYXcvc2hhcmVkL2RyYXcudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBR3BDLE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN2QixNQUFNLG9DQUFvQyxDQUFDO0FBRzVDOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsU0FBa0IsRUFBRSxXQUFvQixFQUFFLFdBQW9CLEVBQUUsS0FBYztJQUNuSCxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN2QixNQUFNLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO1lBQ3BELEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQyxDQUFDO1FBQ0YsSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQztZQUNyQixLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtTQUN2RCxDQUFDO1FBQ0YsS0FBSyxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN4QixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxD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QUNYLFNBQVMsRUFBRSxLQUFLO0tBQ2pCLENBQUMsQ0FBQztJQUNILFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztJQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUVuQyxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgT2xzdHlsZSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgT2xQb2ludCBmcm9tICdvbC9nZW9tL1BvaW50JztcbmltcG9ydCBPbExpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9MaW5lU3RyaW5nJztcbmltcG9ydCBPbFBvbHlnb24gZnJvbSAnb2wvZ2VvbS9Qb2x5Z29uJztcbmltcG9ydCBPbENpcmNsZSBmcm9tICdvbC9nZW9tL0NpcmNsZSc7XG5pbXBvcnQgT2xPdmVybGF5IGZyb20gJ29sL092ZXJsYXknO1xuaW1wb3J0IHtcbiAgdXBkYXRlT2xHZW9tZXRyeU1pZHBvaW50cyxcbiAgdXBkYXRlT2xHZW9tZXRyeUNlbnRlclxufSBmcm9tICcuLi8uLi9tZWFzdXJlL3NoYXJlZC9tZWFzdXJlLnV0aWxzJztcblxuXG4vKipcbiAqIENyZWF0ZSBhIGRlZmF1bHQgc3R5bGVcbiAqIEBwYXJhbSBmaWxsQ29sb3IgdGhlIGZpbGwgY29sb3JcbiAqIEBwYXJhbSBzdHJva2VDb2xvciB0aGUgc3Ryb2tlIGNvbG9yXG4gKiBAcGFyYW0gc3Ryb2tlV2lkdGggdGhlIHN0cm9rZSB3aWR0aFxuICogQHBhcmFtIGxhYmVsIGEgbGFiZWxcbiAqIEByZXR1cm5zIE9MIHN0eWxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnRlcmFjdGlvblN0eWxlKGZpbGxDb2xvcj86IHN0cmluZywgc3Ryb2tlQ29sb3I/OiBzdHJpbmcsIHN0cm9rZVdpZHRoPzogbnVtYmVyLCBsYWJlbD86IHN0cmluZyk6IE9sc3R5bGUuU3R5bGUge1xuICByZXR1cm4gbmV3IE9sc3R5bGUuU3R5bGUoe1xuICAgIHN0cm9rZTogbmV3IE9sc3R5bGUuU3Ryb2tlKHtcbiAgICAgIGNvbG9yOiBzdHJva2VDb2xvciA/IHN0cm9rZUNvbG9yIDogJ3JnYmEoMTQzLDcsNywxKScsXG4gICAgICB3aWR0aDogc3Ryb2tlV2lkdGggPyBzdHJva2VXaWR0aCA6IDFcbiAgICB9KSxcbiAgICBmaWxsOiBuZXcgT2xzdHlsZS5GaWxsKHtcbiAgICAgIGNvbG9yOiBmaWxsQ29sb3IgPyBmaWxsQ29sb3IgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJ1xuICAgIH0pLFxuICAgIGltYWdlOiBuZXcgT2xzdHlsZS5DaXJjbGUoe1xuICAgICAgcmFkaXVzOiA1LFxuICAgICAgc3Ryb2tlOiBuZXcgT2xzdHlsZS5TdHJva2Uoe1xuICAgICAgICBjb2xvcjogc3Ryb2tlQ29sb3IgPyBzdHJva2VDb2xvciA6ICdyZ2JhKDE0Myw3LDcsMSknLFxuICAgICAgICB3aWR0aDogc3Ryb2tlV2lkdGggPyBzdHJva2VXaWR0aCA6IDFcbiAgICAgIH0pLFxuICAgICAgZmlsbDogbmV3IE9sc3R5bGUuRmlsbCh7XG4gICAgICAgIGNvbG9yOiBmaWxsQ29sb3IgPyBmaWxsQ29sb3IgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJ1xuICAgICAgfSlcbiAgICB9KVxuICB9KTtcbn1cblxuLyoqXG4gKiBBZGQgYW4gT0wgb3ZlcmxheSBhdCBlYWNoIG1pZHBvaW50IGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgdGhvc2Ugb3ZlcmxheXNcbiAqIEBwYXJhbSBvbEdlb21ldHJ5IE9MIEdlb21ldHJ5XG4gKiBAcmV0dXJucyBPTCBvdmVybGF5c1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT2xUb29sdGlwc0RyYXdBdE1pZHBvaW50cyhvbEdlb21ldHJ5OiBPbFBvaW50IHwgT2xMaW5lU3RyaW5nIHwgT2xQb2x5Z29uIHwgT2xDaXJjbGUpOiBPbE92ZXJsYXlbXSB7XG4gIGxldCBvbE1pZHBvaW50cztcbiAgaWYgKG9sR2VvbWV0cnkgaW5zdGFuY2VvZiBPbFBvaW50KSB7XG4gICAgY29uc3Qgb2xNaWRwb2ludFBvaW50ID0gbmV3IE9sUG9pbnQob2xHZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKSk7XG4gICAgb2xNaWRwb2ludHMgPSBuZXcgQXJyYXkoMSk7XG4gICAgb2xNaWRwb2ludHNbMF0gPSBvbE1pZHBvaW50UG9pbnQ7XG4gICAgb2xHZW9tZXRyeS5zZXRQcm9wZXJ0aWVzKHtfbWlkcG9pbnRzOiBvbE1pZHBvaW50c30sIHRydWUpO1xuICB9IGVsc2UgaWYgKG9sR2VvbWV0cnkgaW5zdGFuY2VvZiBPbENpcmNsZSkge1xuICAgIGNvbnN0IG9sTWlkcG9pbnRQb2ludCA9IG5ldyBPbFBvaW50KG9sR2VvbWV0cnkuZ2V0Q2VudGVyKCkpO1xuICAgIG9sTWlkcG9pbnRzID0gbmV3IEFycmF5KDEpO1xuICAgIG9sTWlkcG9pbnRzWzBdID0gb2xNaWRwb2ludFBvaW50O1xuICAgIG9sR2VvbWV0cnkuc2V0UHJvcGVydGllcyh7X21pZHBvaW50czogb2xNaWRwb2ludHN9LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBvbE1pZHBvaW50cyA9IHVwZGF0ZU9sR2VvbWV0cnlNaWRwb2ludHMob2xHZW9tZXRyeSk7XG4gIH1cbiAgY29uc3Qgb2xUb29sdGlwcyA9IG9sTWlkcG9pbnRzLm1hcCgob2xNaWRwb2ludDogT2xQb2ludCkgPT4ge1xuICAgIGxldCBvbFRvb2x0aXAgPSBvbE1pZHBvaW50LmdldCgnX3Rvb2x0aXAnKTtcbiAgICBpZiAob2xUb29sdGlwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9sVG9vbHRpcCA9IGNyZWF0ZU9sVG9vbHRpcERyYXdBdFBvaW50KG9sTWlkcG9pbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbFRvb2x0aXAuc2V0UG9zaXRpb24ob2xNaWRwb2ludC5nZXRGbGF0Q29vcmRpbmF0ZXMoKSk7XG4gICAgfVxuICAgIHJldHVybiBvbFRvb2x0aXA7XG4gIH0pO1xuICByZXR1cm4gb2xUb29sdGlwcztcbn1cblxuLyoqXG4gKiBBZGQgYW4gT0wgb3ZlcmxheSBhdCB0aGUgY2VudGVyIG9mIGEgZ2VvbWV0cnkgYW5kIHJldHVybiB0aGF0IG92ZXJsYXlcbiAqIEBwYXJhbSBvbEdlb21ldHJ5IE9MIEdlb21ldHJ5XG4gKiBAcmV0dXJucyBPTCBvdmVybGF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPbFRvb2x0aXBEcmF3QXRDZW50ZXIob2xHZW9tZXRyeTogT2xMaW5lU3RyaW5nIHwgT2xQb2x5Z29uKTogT2xPdmVybGF5IHtcbiAgY29uc3Qgb2xDZW50ZXIgPSB1cGRhdGVPbEdlb21ldHJ5Q2VudGVyKG9sR2VvbWV0cnkpO1xuICBsZXQgb2xUb29sdGlwID0gb2xDZW50ZXIuZ2V0KCdfdG9vbHRpcCcpO1xuICBpZiAob2xUb29sdGlwID09PSB1bmRlZmluZWQpIHtcbiAgICBvbFRvb2x0aXAgPSBjcmVhdGVPbFRvb2x0aXBEcmF3QXRQb2ludChvbENlbnRlcik7XG4gIH0gZWxzZSB7XG4gICAgb2xUb29sdGlwLnNldFBvc2l0aW9uKG9sQ2VudGVyLmdldEZsYXRDb29yZGluYXRlcygpKTtcbiAgfVxuICByZXR1cm4gb2xUb29sdGlwO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBPTCBvdmVybGF5IGF0IGEgcG9pbnQgYW5kIGJpbmQgdGhlIG92ZXJsYXkgdG8gdGhlIHBvaW50XG4gKiBAcGFyYW0gb2xQb2ludCBPTCBQb2ludFxuICogQHJldHVybnMgT0wgb3ZlcmxheVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2xUb29sdGlwRHJhd0F0UG9pbnQob2xQb2ludDogT2xQb2ludCk6IE9sT3ZlcmxheSB7XG4gIGNvbnN0IG9sVG9vbHRpcCA9IG5ldyBPbE92ZXJsYXkoe1xuICAgIGVsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIG9mZnNldDogWy0zMCwgLTEwXSxcbiAgICBjbGFzc05hbWU6IFtcbiAgICAgICdpZ28tbWFwLXRvb2x0aXAnLFxuICAgICAgJ2lnby1tYXAtdG9vbHRpcC1kcmF3J1xuICAgIF0uam9pbignICcpLFxuICAgIHN0b3BFdmVudDogZmFsc2VcbiAgfSk7XG4gIG9sVG9vbHRpcC5zZXRQb3NpdGlvbihvbFBvaW50LmdldEZsYXRDb29yZGluYXRlcygpKTtcbiAgb2xQb2ludC5zZXQoJ190b29sdGlwJywgb2xUb29sdGlwKTtcblxuICByZXR1cm4gb2xUb29sdGlwO1xufVxuIl19