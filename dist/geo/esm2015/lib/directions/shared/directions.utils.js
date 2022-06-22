import olFeature from 'ol/Feature';
import * as olStyle from 'ol/style';
import * as olGeom from 'ol/geom';
import OlGeoJSON from 'ol/format/GeoJSON';
import * as olProj from 'ol/proj';
import { uuid, NumberUtils } from '@igo2/utils';
import { createOverlayMarkerStyle } from '../../overlay/shared/overlay-marker-style.utils';
import { VectorLayer } from '../../layer/shared/layers/vector-layer';
import { FeatureDataSource } from '../../datasource/shared/datasources/feature-datasource';
import { tryBindStoreLayer } from '../../feature/shared/feature.utils';
import { tryAddLoadingStrategy } from '../../feature/shared/strategies.utils';
import { FeatureStoreLoadingStrategy } from '../../feature/shared/strategies/loading';
import { FEATURE, FeatureMotion } from '../../feature/shared/feature.enums';
import { DirectionRelativePositionType, DirectionType } from './directions.enum';
/**
 * Function that updat the sort of the list base on the provided field.
 * @param source stop store
 * @param direction asc / desc sort order
 * @param field the field to use to sort the view
 */
export function updateStoreSorting(stopsStore, direction = 'asc', field = 'position') {
    stopsStore.view.sort({
        direction,
        valueAccessor: (entity) => entity[field]
    });
}
export function computeRelativePosition(index, totalLength) {
    let relativePosition = DirectionRelativePositionType.Intermediate;
    if (index === 0) {
        relativePosition = DirectionRelativePositionType.Start;
    }
    else if (index === totalLength - 1) {
        relativePosition = DirectionRelativePositionType.End;
    }
    return relativePosition;
}
export function computeStopsPosition(stopsStore) {
    const stopsToComputePosition = [...stopsStore.all()];
    stopsToComputePosition.sort((a, b) => a.position - b.position);
    stopsToComputePosition.map((stop, i) => {
        stop.position = i;
        stop.relativePosition = computeRelativePosition(stop.position, stopsToComputePosition.length);
    });
    if (stopsToComputePosition) {
        stopsStore.updateMany(stopsToComputePosition);
    }
}
/**
 * Function that add a stop to the stop store. Stop are always added before the last stop.
 * @param stopsStore stop store as an EntityStore
 */
export function addStopToStore(stopsStore) {
    const id = uuid();
    const stops = stopsStore.all();
    let positions;
    if (stopsStore.count === 0) {
        positions = [0];
    }
    else {
        positions = stops.map(stop => stop.position);
    }
    const maxPosition = Math.max(...positions);
    const insertPosition = maxPosition;
    const lastPosition = maxPosition + 1;
    const stopToUpdate = stopsStore.all().find(stop => stop.position === maxPosition);
    if (stopToUpdate) {
        stopToUpdate.position = lastPosition;
        stopToUpdate.relativePosition = computeRelativePosition(lastPosition, stopsStore.count + 1);
    }
    stopsStore.insert({ id, position: insertPosition, relativePosition: computeRelativePosition(insertPosition, stopsStore.count + 1) });
    updateStoreSorting(stopsStore);
    return stopsStore.get(id);
}
export function removeStopFromStore(stopsStore, stop) {
    stopsStore.delete(stop);
    computeStopsPosition(stopsStore);
}
/**
 * Create a style for the directions stops and routes
 * @param feature OlFeature
 * @returns OL style function
 */
export function directionsStyle(feature, resolution) {
    const vertexStyle = [
        new olStyle.Style({
            geometry: feature.getGeometry(),
            image: new olStyle.Circle({
                radius: 7,
                stroke: new olStyle.Stroke({ color: '#FF0000', width: 3 })
            })
        })
    ];
    const stopStyle = createOverlayMarkerStyle({
        text: feature.get('stopText'),
        opacity: feature.get('stopOpacity'),
        markerColor: feature.get('stopColor'),
        markerOutlineColor: [255, 255, 255]
    });
    const routeStyle = [
        new olStyle.Style({
            stroke: new olStyle.Stroke({ color: `rgba(106, 121, 130, ${feature.get('active') ? 0.75 : 0})`, width: 10 })
        }),
        new olStyle.Style({
            stroke: new olStyle.Stroke({ color: `rgba(79, 169, 221, ${feature.get('active') ? 0.75 : 0})`, width: 6 })
        })
    ];
    if (feature.get('type') === DirectionType.Stop) {
        return stopStyle;
    }
    if (feature.get('type') === 'vertex') {
        return vertexStyle;
    }
    if (feature.get('type') === DirectionType.Route) {
        return routeStyle;
    }
}
export function initStopsFeatureStore(stopsFeatureStore, languageService) {
    const loadingStrategy = new FeatureStoreLoadingStrategy({
        motion: FeatureMotion.None
    });
    const stopsLayer = new VectorLayer({
        isIgoInternalLayer: true,
        id: 'igo-direction-stops-layer',
        title: languageService.translate.instant('igo.geo.directionsForm.stopLayer'),
        zIndex: 911,
        source: new FeatureDataSource(),
        showInLayerList: true,
        workspace: {
            enabled: false,
        },
        linkedLayers: {
            linkId: 'igo-direction-stops-layer',
            links: [
                {
                    bidirectionnal: false,
                    syncedDelete: true,
                    linkedIds: ['igo-direction-route-layer'],
                    properties: []
                }
            ]
        },
        exportable: true,
        browsable: false,
        style: directionsStyle
    });
    tryBindStoreLayer(stopsFeatureStore, stopsLayer);
    stopsFeatureStore.layer.visible = true;
    tryAddLoadingStrategy(stopsFeatureStore, loadingStrategy);
}
export function initRoutesFeatureStore(routesFeatureStore, languageService) {
    const loadingStrategy = new FeatureStoreLoadingStrategy({
        motion: FeatureMotion.None
    });
    const routeLayer = new VectorLayer({
        isIgoInternalLayer: true,
        id: 'igo-direction-route-layer',
        title: languageService.translate.instant('igo.geo.directionsForm.routeLayer'),
        zIndex: 910,
        source: new FeatureDataSource(),
        showInLayerList: true,
        workspace: {
            enabled: false,
        },
        linkedLayers: {
            linkId: 'igo-direction-route-layer'
        },
        exportable: true,
        browsable: false,
        style: directionsStyle
    });
    tryBindStoreLayer(routesFeatureStore, routeLayer);
    routesFeatureStore.layer.visible = true;
    tryAddLoadingStrategy(routesFeatureStore, loadingStrategy);
}
export function initStepFeatureStore(stepFeatureStore) {
    const loadingStrategy = new FeatureStoreLoadingStrategy({
        motion: FeatureMotion.None
    });
    const stepLayer = new VectorLayer({
        isIgoInternalLayer: true,
        id: 'igo-direction-step-layer',
        title: '',
        zIndex: 910,
        source: new FeatureDataSource(),
        showInLayerList: false,
        workspace: {
            enabled: false,
        },
        linkedLayers: {
            linkId: 'igo-direction-route-layer'
        },
        exportable: false,
        browsable: false,
        style: directionsStyle
    });
    tryBindStoreLayer(stepFeatureStore, stepLayer);
    stepFeatureStore.layer.visible = true;
    tryAddLoadingStrategy(stepFeatureStore, loadingStrategy);
}
export function addStopToStopsFeatureStore(stop, stopsStore, stopsFeatureStore, projection, languageService) {
    let stopColor;
    let stopText;
    switch (stop.relativePosition) {
        case DirectionRelativePositionType.Start:
            stopColor = '#008000';
            stopText = languageService.translate.instant('igo.geo.directionsForm.start');
            break;
        case DirectionRelativePositionType.End:
            stopColor = '#f64139';
            stopText = languageService.translate.instant('igo.geo.directionsForm.end');
            break;
        default:
            stopColor = '#ffd700';
            stopText = languageService.translate.instant('igo.geo.directionsForm.intermediate') + ' #' + stop.position;
            break;
    }
    const geometry = new olGeom.Point(olProj.transform(stop.coordinates, projection, stopsFeatureStore.map.projection));
    const geojsonGeom = new OlGeoJSON().writeGeometryObject(geometry, {
        featureProjection: stopsFeatureStore.map.projection,
        dataProjection: stopsFeatureStore.map.projection
    });
    const previousStop = stopsFeatureStore.get(stop.id);
    const previousStopRevision = previousStop ? previousStop.meta.revision : 0;
    const stopFeatureStore = {
        type: FEATURE,
        geometry: geojsonGeom,
        projection: stopsFeatureStore.map.projection,
        properties: {
            id: stop.id,
            type: DirectionType.Stop,
            stopText,
            stopColor,
            stopOpacity: 1,
            stop
        },
        meta: {
            id: stop.id,
            revision: previousStopRevision + 1
        },
        ol: new olFeature({ geometry })
    };
    stopsFeatureStore.update(stopFeatureStore);
}
export function addDirectionToRoutesFeatureStore(routesFeatureStore, direction, projection, active = false, moveToExtent = false) {
    const geom = direction.geometry.coordinates;
    const geometry4326 = new olGeom.LineString(geom);
    const geometry = geometry4326.transform(projection, routesFeatureStore.map.projection);
    const geojsonGeom = new OlGeoJSON().writeGeometryObject(geometry, {
        featureProjection: routesFeatureStore.map.projection,
        dataProjection: routesFeatureStore.map.projection
    });
    const previousRoute = routesFeatureStore.get(direction.id);
    const previousRouteRevision = previousRoute
        ? previousRoute.meta.revision
        : 0;
    const routeFeatureStore = {
        type: FEATURE,
        geometry: geojsonGeom,
        projection: routesFeatureStore.map.projection,
        properties: {
            id: direction.id,
            type: DirectionType.Route,
            active,
            direction
        },
        meta: {
            id: direction.id,
            revision: previousRouteRevision + 1
        },
        ol: new olFeature({ geometry })
    };
    routesFeatureStore.update(routeFeatureStore);
}
export function formatDistance(distance) {
    if (distance === 0) {
        return;
    }
    if (distance >= 100000) {
        return NumberUtils.roundToNDecimal(Math.round(distance) / 1000, 1) + ' km';
    }
    if (distance >= 10000) {
        return NumberUtils.roundToNDecimal(Math.round(distance) / 100 / 10, 1) + ' km';
    }
    if (distance >= 1000) {
        return NumberUtils.roundToNDecimal(Math.round(distance) / 100 / 10, 1) + ' km';
    }
    return NumberUtils.roundToNDecimal(distance, 0) + ' m';
}
export function formatDuration(duration) {
    if (duration >= 3600) {
        const hour = Math.floor(duration / 3600);
        const minute = Math.round((duration / 3600 - hour) * 60);
        if (minute === 60) {
            return hour + 1 + ' h';
        }
        return hour + ' h ' + minute + ' min';
    }
    if (duration >= 60) {
        return Math.round(duration / 60) + ' min';
    }
    return duration + ' s';
}
export function formatInstruction(type, modifier, route, direction, stepPosition, exit, languageService, lastStep = false) {
    const translate = languageService.translate;
    let directive;
    let image = 'forward';
    let cssClass = 'rotate-270';
    const translatedDirection = translateBearing(direction, languageService);
    const translatedModifier = translateModifier(modifier, languageService);
    const prefix = modifier === 'straight' ? '' : translate.instant('igo.geo.directions.modifier.prefix');
    let aggregatedDirection = prefix + translatedModifier;
    if ((modifier === null || modifier === void 0 ? void 0 : modifier.search('slight')) >= 0) {
        aggregatedDirection = translatedModifier;
    }
    if (modifier === 'uturn') {
        image = 'forward';
        cssClass = 'rotate-90';
    }
    else if (modifier === 'sharp right') {
        image = 'subdirectory-arrow-right';
        cssClass = 'icon-flipped';
    }
    else if (modifier === 'right') {
        image = 'subdirectory-arrow-right';
        cssClass = 'icon-flipped';
    }
    else if (modifier === 'slight right') {
        image = 'forward';
        cssClass = 'rotate-290';
    }
    else if (modifier === 'straight') {
        image = 'forward';
    }
    else if (modifier === 'slight left') {
        image = 'forward';
        cssClass = 'rotate-250';
    }
    else if (modifier === 'left') {
        image = 'subdirectory-arrow-left';
        cssClass = 'icon-flipped';
    }
    else if (modifier === 'sharp left') {
        image = 'subdirectory-arrow-left';
        cssClass = 'icon-flipped';
    }
    if (type === 'turn') {
        if (modifier === 'straight') {
            directive = translate.instant('igo.geo.directions.turn.straight', { route });
        }
        else if (modifier === 'uturn') {
            directive = translate.instant('igo.geo.directions.turn.uturn', { route });
        }
        else {
            directive = translate.instant('igo.geo.directions.turn.else', { route, aggregatedDirection, translatedModifier });
        }
    }
    else if (type === 'new name') {
        directive = translate.instant('igo.geo.directions.new name', { route, translatedDirection });
        image = 'compass';
        cssClass = '';
    }
    else if (type === 'depart') {
        directive = translate.instant('igo.geo.directions.depart', { route, translatedDirection });
        image = 'compass';
        cssClass = '';
    }
    else if (type === 'arrive') {
        if (lastStep) {
            const coma = !translatedModifier ? '' : ', ';
            aggregatedDirection = !translatedModifier ? '' : aggregatedDirection;
            directive = translate.instant('igo.geo.directions.arrive.lastStep', { coma, aggregatedDirection });
        }
        else {
            directive = translate.instant('igo.geo.directions.arrive.intermediate', { route });
            image = 'map-marker';
            cssClass = '';
        }
    }
    else if (type === 'merge') {
        directive = translate.instant('igo.geo.directions.merge', { route });
        image = 'forward';
        cssClass = 'rotate-270';
    }
    else if (type === 'on ramp') {
        directive = translate.instant('igo.geo.directions.on ramp', { aggregatedDirection });
    }
    else if (type === 'off ramp') {
        directive = translate.instant('igo.geo.directions.off ramp', { aggregatedDirection });
    }
    else if (type === 'fork') {
        if (modifier.search('left') >= 0) {
            directive = translate.instant('igo.geo.directions.fork.left', { route });
        }
        else if (modifier.search('right') >= 0) {
            directive = translate.instant('igo.geo.directions.fork.right', { route });
        }
        else {
            directive = translate.instant('igo.geo.directions.fork.else', { route });
        }
    }
    else if (type === 'end of road') {
        directive = translate.instant('igo.geo.directions.end of road', { translatedModifier, route });
    }
    else if (type === 'use lane') {
        directive = translate.instant('igo.geo.directions.use lane');
    }
    else if (type === 'continue' && modifier !== 'uturn') {
        directive = translate.instant('igo.geo.directions.continue.notUturn', { route });
        image = 'forward';
        cssClass = 'rotate-270';
    }
    else if (type === 'roundabout') {
        const cntSuffix = exit === 1 ?
            translate.instant('igo.geo.directions.cntSuffix.first') :
            translate.instant('igo.geo.directions.cntSuffix.secondAndMore');
        directive = translate.instant('igo.geo.directions.roundabout', { exit, cntSuffix, route });
        image = 'chart-donut';
        cssClass = '';
    }
    else if (type === 'rotary') {
        directive = translate.instant('igo.geo.directions.rotary');
        image = 'chart-donut';
        cssClass = '';
    }
    else if (type === 'roundabout turn') {
        directive = translate.instant('igo.geo.directions.roundabout turn');
        image = 'chart-donut';
        cssClass = '';
    }
    else if (type === 'exit roundabout') {
        directive = translate.instant('igo.geo.directions.exit roundabout', { route });
        image = 'forward';
        cssClass = 'rotate-270';
    }
    else if (type === 'notification') {
        directive = translate.instant('igo.geo.directions.notification');
    }
    else if (modifier === 'uturn') {
        directive = translate.instant('igo.geo.directions.uturnText', { translatedDirection, route });
    }
    else {
        directive = translate.instant('igo.geo.directions.unknown');
    }
    image = lastStep ? 'flag-variant' : image;
    cssClass = lastStep ? '' : cssClass;
    image = stepPosition === 0 ? 'compass' : image;
    cssClass = stepPosition === 0 ? '' : cssClass;
    return { instruction: directive, image, cssClass };
}
export function translateModifier(modifier, languageService) {
    const translate = languageService.translate;
    if (modifier === 'uturn') {
        return translate.instant('igo.geo.directions.uturn');
    }
    else if (modifier === 'sharp right') {
        return translate.instant('igo.geo.directions.sharp right');
    }
    else if (modifier === 'right') {
        return translate.instant('igo.geo.directions.right');
    }
    else if (modifier === 'slight right') {
        return translate.instant('igo.geo.directions.slight right');
    }
    else if (modifier === 'sharp left') {
        return languageService.translate.instant('igo.geo.directions.sharp left');
    }
    else if (modifier === 'left') {
        return languageService.translate.instant('igo.geo.directions.left');
    }
    else if (modifier === 'slight left') {
        return languageService.translate.instant('igo.geo.directions.slight left');
    }
    else if (modifier === 'straight') {
        return languageService.translate.instant('igo.geo.directions.straight');
    }
    else {
        return modifier;
    }
}
export function translateBearing(bearing, languageService) {
    const translate = languageService.translate;
    if (bearing >= 337 || bearing < 23) {
        return translate.instant('igo.geo.cardinalPoints.n');
    }
    else if (bearing < 67) {
        return translate.instant('igo.geo.cardinalPoints.ne');
    }
    else if (bearing < 113) {
        return translate.instant('igo.geo.cardinalPoints.e');
    }
    else if (bearing < 157) {
        return translate.instant('igo.geo.cardinalPoints.se');
    }
    else if (bearing < 203) {
        return translate.instant('igo.geo.cardinalPoints.s');
    }
    else if (bearing < 247) {
        return translate.instant('igo.geo.cardinalPoints.sw');
    }
    else if (bearing < 293) {
        return translate.instant('igo.geo.cardinalPoints.w');
    }
    else if (bearing < 337) {
        return translate.instant('igo.geo.cardinalPoints.nw');
    }
    else {
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9ucy51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2RpcmVjdGlvbnMvc2hhcmVkL2RpcmVjdGlvbnMudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBQ2xDLE9BQU8sU0FBUyxNQUFNLG1CQUFtQixDQUFDO0FBQzFDLE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBRWxDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR2hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzVFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRjs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxVQUFzQixFQUFFLFlBQTRCLEtBQUssRUFBRSxLQUFLLEdBQUcsVUFBVTtJQUM5RyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixTQUFT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SSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0tBQ3REO1NBQU0sSUFBSSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0tBQ3ZEO1NBQU07UUFDTCxPQUFPO0tBQ1I7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCAqIGFzIG9sU3R5bGUgZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHR5cGUgeyBkZWZhdWx0IGFzIE9sR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcbmltcG9ydCAqIGFzIG9sR2VvbSBmcm9tICdvbC9nZW9tJztcbmltcG9ydCBPbEdlb0pTT04gZnJvbSAnb2wvZm9ybWF0L0dlb0pTT04nO1xuaW1wb3J0ICogYXMgb2xQcm9qIGZyb20gJ29sL3Byb2onO1xuXG5pbXBvcnQgeyB1dWlkLCBOdW1iZXJVdGlscyB9IGZyb20gJ0BpZ28yL3V0aWxzJztcblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBGZWF0dXJlV2l0aERpcmVjdGlvbiwgRmVhdHVyZVdpdGhTdG9wLCBTdG9wIH0gZnJvbSAnLi9kaXJlY3Rpb25zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBjcmVhdGVPdmVybGF5TWFya2VyU3R5bGUgfSBmcm9tICcuLi8uLi9vdmVybGF5L3NoYXJlZC9vdmVybGF5LW1hcmtlci1zdHlsZS51dGlscyc7XG5pbXBvcnQgeyBWZWN0b3JMYXllciB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9sYXllcnMvdmVjdG9yLWxheWVyJztcbmltcG9ydCB7IEZlYXR1cmVEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvZmVhdHVyZS1kYXRhc291cmNlJztcbmltcG9ydCB7IHRyeUJpbmRTdG9yZUxheWVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQvZmVhdHVyZS51dGlscyc7XG5pbXBvcnQgeyB0cnlBZGRMb2FkaW5nU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NoYXJlZC9zdHJhdGVnaWVzLnV0aWxzJztcbmltcG9ydCB7IEZlYXR1cmVTdG9yZUxvYWRpbmdTdHJhdGVneSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL3N0cmF0ZWdpZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBGRUFUVVJFLCBGZWF0dXJlTW90aW9uIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQvZmVhdHVyZS5lbnVtcyc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVHZW9tZXRyeSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBEaXJlY3Rpb25SZWxhdGl2ZVBvc2l0aW9uVHlwZSwgRGlyZWN0aW9uVHlwZSB9IGZyb20gJy4vZGlyZWN0aW9ucy5lbnVtJztcbmltcG9ydCB7IFJvdXRlc0ZlYXR1cmVTdG9yZSwgU3RlcEZlYXR1cmVTdG9yZSwgU3RvcHNGZWF0dXJlU3RvcmUsIFN0b3BzU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHVwZGF0IHRoZSBzb3J0IG9mIHRoZSBsaXN0IGJhc2Ugb24gdGhlIHByb3ZpZGVkIGZpZWxkLlxuICogQHBhcmFtIHNvdXJjZSBzdG9wIHN0b3JlXG4gKiBAcGFyYW0gZGlyZWN0aW9uIGFzYyAvIGRlc2Mgc29ydCBvcmRlclxuICogQHBhcmFtIGZpZWxkIHRoZSBmaWVsZCB0byB1c2UgdG8gc29ydCB0aGUgdmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmVTb3J0aW5nKHN0b3BzU3RvcmU6IFN0b3BzU3RvcmUsIGRpcmVjdGlvbjogJ2FzYycgfCAnZGVzYycgPSAnYXNjJywgZmllbGQgPSAncG9zaXRpb24nKSB7XG4gIHN0b3BzU3RvcmUudmlldy5zb3J0KHtcbiAgICBkaXJlY3Rpb24sXG4gICAgdmFsdWVBY2Nlc3NvcjogKGVudGl0eTogU3RvcCkgPT4gZW50aXR5W2ZpZWxkXVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVSZWxhdGl2ZVBvc2l0aW9uKGluZGV4OiBudW1iZXIsIHRvdGFsTGVuZ3RoKTogRGlyZWN0aW9uUmVsYXRpdmVQb3NpdGlvblR5cGUge1xuICBsZXQgcmVsYXRpdmVQb3NpdGlvbiA9IERpcmVjdGlvblJlbGF0aXZlUG9zaXRpb25UeXBlLkludGVybWVkaWF0ZTtcbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgcmVsYXRpdmVQb3NpdGlvbiA9IERpcmVjdGlvblJlbGF0aXZlUG9zaXRpb25UeXBlLlN0YXJ0O1xuICB9IGVsc2UgaWYgKGluZGV4ID09PSB0b3RhbExlbmd0aCAtIDEpIHtcbiAgICByZWxhdGl2ZVBvc2l0aW9uID0gRGlyZWN0aW9uUmVsYXRpdmVQb3NpdGlvblR5cGUuRW5kO1xuICB9XG4gIHJldHVybiByZWxhdGl2ZVBvc2l0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVN0b3BzUG9zaXRpb24oc3RvcHNTdG9yZTogU3RvcHNTdG9yZSkge1xuXG4gIGNvbnN0IHN0b3BzVG9Db21wdXRlUG9zaXRpb24gPSBbLi4uc3RvcHNTdG9yZS5hbGwoKV07XG4gIHN0b3BzVG9Db21wdXRlUG9zaXRpb24uc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pO1xuICBzdG9wc1RvQ29tcHV0ZVBvc2l0aW9uLm1hcCgoc3RvcCwgaSkgPT4ge1xuICAgIHN0b3AucG9zaXRpb24gPSBpO1xuICAgIHN0b3AucmVsYXRpdmVQb3NpdGlvbiA9IGNvbXB1dGVSZWxhdGl2ZVBvc2l0aW9uKHN0b3AucG9zaXRpb24sIHN0b3BzVG9Db21wdXRlUG9zaXRpb24ubGVuZ3RoKTtcbiAgfSk7XG4gIGlmIChzdG9wc1RvQ29tcHV0ZVBvc2l0aW9uKSB7XG4gICAgc3RvcHNTdG9yZS51cGRhdGVNYW55KHN0b3BzVG9Db21wdXRlUG9zaXRpb24pO1xuICB9XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCBhZGQgYSBzdG9wIHRvIHRoZSBzdG9wIHN0b3JlLiBTdG9wIGFyZSBhbHdheXMgYWRkZWQgYmVmb3JlIHRoZSBsYXN0IHN0b3AuXG4gKiBAcGFyYW0gc3RvcHNTdG9yZSBzdG9wIHN0b3JlIGFzIGFuIEVudGl0eVN0b3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRTdG9wVG9TdG9yZShzdG9wc1N0b3JlOiBTdG9wc1N0b3JlKTogU3RvcCB7XG5cbiAgY29uc3QgaWQgPSB1dWlkKCk7XG4gIGNvbnN0IHN0b3BzID0gc3RvcHNTdG9yZS5hbGwoKTtcbiAgbGV0IHBvc2l0aW9uczogbnVtYmVyW107XG4gIGlmIChzdG9wc1N0b3JlLmNvdW50ID09PSAwKSB7XG4gICAgcG9zaXRpb25zID0gWzBdO1xuICB9IGVsc2Uge1xuICAgIHBvc2l0aW9ucyA9IHN0b3BzLm1hcChzdG9wID0+IHN0b3AucG9zaXRpb24pO1xuICB9XG4gIGNvbnN0IG1heFBvc2l0aW9uOiBudW1iZXIgPSBNYXRoLm1heCguLi5wb3NpdGlvbnMpO1xuICBjb25zdCBpbnNlcnRQb3NpdGlvbjogbnVtYmVyID0gbWF4UG9zaXRpb247XG4gIGNvbnN0IGxhc3RQb3NpdGlvbjogbnVtYmVyID0gbWF4UG9zaXRpb24gKyAxO1xuXG4gIGNvbnN0IHN0b3BUb1VwZGF0ZSA9IHN0b3BzU3RvcmUuYWxsKCkuZmluZChzdG9wID0+IHN0b3AucG9zaXRpb24gPT09IG1heFBvc2l0aW9uKTtcbiAgaWYgKHN0b3BUb1VwZGF0ZSkge1xuICAgIHN0b3BUb1VwZGF0ZS5wb3NpdGlvbiA9IGxhc3RQb3NpdGlvbjtcbiAgICBzdG9wVG9VcGRhdGUucmVsYXRpdmVQb3NpdGlvbiA9IGNvbXB1dGVSZWxhdGl2ZVBvc2l0aW9uKGxhc3RQb3NpdGlvbiwgc3RvcHNTdG9yZS5jb3VudCArIDEpO1xuICB9XG5cbiAgc3RvcHNTdG9yZS5pbnNlcnQoeyBpZCwgcG9zaXRpb246IGluc2VydFBvc2l0aW9uLCByZWxhdGl2ZVBvc2l0aW9uOiBjb21wdXRlUmVsYXRpdmVQb3NpdGlvbihpbnNlcnRQb3NpdGlvbiwgc3RvcHNTdG9yZS5jb3VudCArIDEpIH0pO1xuXG4gIHVwZGF0ZVN0b3JlU29ydGluZyhzdG9wc1N0b3JlKTtcbiAgcmV0dXJuIHN0b3BzU3RvcmUuZ2V0KGlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVN0b3BGcm9tU3RvcmUoc3RvcHNTdG9yZTogU3RvcHNTdG9yZSwgc3RvcDogU3RvcCkge1xuICBzdG9wc1N0b3JlLmRlbGV0ZShzdG9wKTtcbiAgY29tcHV0ZVN0b3BzUG9zaXRpb24oc3RvcHNTdG9yZSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgc3R5bGUgZm9yIHRoZSBkaXJlY3Rpb25zIHN0b3BzIGFuZCByb3V0ZXNcbiAqIEBwYXJhbSBmZWF0dXJlIE9sRmVhdHVyZVxuICogQHJldHVybnMgT0wgc3R5bGUgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGlvbnNTdHlsZShcbiAgZmVhdHVyZTogb2xGZWF0dXJlPE9sR2VvbWV0cnk+LFxuICByZXNvbHV0aW9uOiBudW1iZXJcbik6IG9sU3R5bGUuU3R5bGUgfCBvbFN0eWxlLlN0eWxlW10ge1xuICBjb25zdCB2ZXJ0ZXhTdHlsZSA9IFtcbiAgICBuZXcgb2xTdHlsZS5TdHlsZSh7XG4gICAgICBnZW9tZXRyeTogZmVhdHVyZS5nZXRHZW9tZXRyeSgpLFxuICAgICAgaW1hZ2U6IG5ldyBvbFN0eWxlLkNpcmNsZSh7XG4gICAgICAgIHJhZGl1czogNyxcbiAgICAgICAgc3Ryb2tlOiBuZXcgb2xTdHlsZS5TdHJva2UoeyBjb2xvcjogJyNGRjAwMDAnLCB3aWR0aDogMyB9KVxuICAgICAgfSlcbiAgICB9KVxuICBdO1xuXG4gIGNvbnN0IHN0b3BTdHlsZSA9IGNyZWF0ZU92ZXJsYXlNYXJrZXJTdHlsZSh7XG4gICAgdGV4dDogZmVhdHVyZS5nZXQoJ3N0b3BUZXh0JyksXG4gICAgb3BhY2l0eTogZmVhdHVyZS5nZXQoJ3N0b3BPcGFjaXR5JyksXG4gICAgbWFya2VyQ29sb3I6IGZlYXR1cmUuZ2V0KCdzdG9wQ29sb3InKSxcbiAgICBtYXJrZXJPdXRsaW5lQ29sb3I6IFsyNTUsIDI1NSwgMjU1XVxuICB9KTtcblxuICBjb25zdCByb3V0ZVN0eWxlID0gW1xuICAgIG5ldyBvbFN0eWxlLlN0eWxlKHtcbiAgICAgIHN0cm9rZTogbmV3IG9sU3R5bGUuU3Ryb2tlKHsgY29sb3I6IGByZ2JhKDEwNiwgMTIxLCAxMzAsICR7ZmVhdHVyZS5nZXQoJ2FjdGl2ZScpID8gMC43NSA6IDB9KWAsIHdpZHRoOiAxMCB9KVxuICAgIH0pLFxuICAgIG5ldyBvbFN0eWxlLlN0eWxlKHtcbiAgICAgIHN0cm9rZTogbmV3IG9sU3R5bGUuU3Ryb2tlKHsgY29sb3I6IGByZ2JhKDc5LCAxNjksIDIyMSwgJHtmZWF0dXJlLmdldCgnYWN0aXZlJykgPyAwLjc1IDogMH0pYCwgd2lkdGg6IDYgfSlcbiAgICB9KVxuICBdO1xuXG4gIGlmIChmZWF0dXJlLmdldCgndHlwZScpID09PSBEaXJlY3Rpb25UeXBlLlN0b3ApIHtcbiAgICByZXR1cm4gc3RvcFN0eWxlO1xuICB9XG4gIGlmIChmZWF0dXJlLmdldCgndHlwZScpID09PSAndmVydGV4Jykge1xuICAgIHJldHVybiB2ZXJ0ZXhTdHlsZTtcbiAgfVxuICBpZiAoZmVhdHVyZS5nZXQoJ3R5cGUnKSA9PT0gRGlyZWN0aW9uVHlwZS5Sb3V0ZSkge1xuICAgIHJldHVybiByb3V0ZVN0eWxlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcHNGZWF0dXJlU3RvcmUoc3RvcHNGZWF0dXJlU3RvcmU6IFN0b3BzRmVhdHVyZVN0b3JlLCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSkge1xuICBjb25zdCBsb2FkaW5nU3RyYXRlZ3kgPSBuZXcgRmVhdHVyZVN0b3JlTG9hZGluZ1N0cmF0ZWd5KHtcbiAgICBtb3Rpb246IEZlYXR1cmVNb3Rpb24uTm9uZVxuICB9KTtcblxuICBjb25zdCBzdG9wc0xheWVyID0gbmV3IFZlY3RvckxheWVyKHtcbiAgICBpc0lnb0ludGVybmFsTGF5ZXI6IHRydWUsXG4gICAgaWQ6ICdpZ28tZGlyZWN0aW9uLXN0b3BzLWxheWVyJyxcbiAgICB0aXRsZTogbGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLnN0b3BMYXllcicpLFxuICAgIHpJbmRleDogOTExLFxuICAgIHNvdXJjZTogbmV3IEZlYXR1cmVEYXRhU291cmNlKCksXG4gICAgc2hvd0luTGF5ZXJMaXN0OiB0cnVlLFxuICAgIHdvcmtzcGFjZToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBsaW5rZWRMYXllcnM6IHtcbiAgICAgIGxpbmtJZDogJ2lnby1kaXJlY3Rpb24tc3RvcHMtbGF5ZXInLFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJpZGlyZWN0aW9ubmFsOiBmYWxzZSxcbiAgICAgICAgICBzeW5jZWREZWxldGU6IHRydWUsXG4gICAgICAgICAgbGlua2VkSWRzOiBbJ2lnby1kaXJlY3Rpb24tcm91dGUtbGF5ZXInXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiBbXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBleHBvcnRhYmxlOiB0cnVlLFxuICAgIGJyb3dzYWJsZTogZmFsc2UsXG4gICAgc3R5bGU6IGRpcmVjdGlvbnNTdHlsZVxuICB9KTtcbiAgdHJ5QmluZFN0b3JlTGF5ZXIoc3RvcHNGZWF0dXJlU3RvcmUsIHN0b3BzTGF5ZXIpO1xuICBzdG9wc0ZlYXR1cmVTdG9yZS5sYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgdHJ5QWRkTG9hZGluZ1N0cmF0ZWd5KHN0b3BzRmVhdHVyZVN0b3JlLCBsb2FkaW5nU3RyYXRlZ3kpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFJvdXRlc0ZlYXR1cmVTdG9yZShyb3V0ZXNGZWF0dXJlU3RvcmU6IFJvdXRlc0ZlYXR1cmVTdG9yZSwgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UpIHtcbiAgY29uc3QgbG9hZGluZ1N0cmF0ZWd5ID0gbmV3IEZlYXR1cmVTdG9yZUxvYWRpbmdTdHJhdGVneSh7XG4gICAgbW90aW9uOiBGZWF0dXJlTW90aW9uLk5vbmVcbiAgfSk7XG5cbiAgY29uc3Qgcm91dGVMYXllciA9IG5ldyBWZWN0b3JMYXllcih7XG4gICAgaXNJZ29JbnRlcm5hbExheWVyOiB0cnVlLFxuICAgIGlkOiAnaWdvLWRpcmVjdGlvbi1yb3V0ZS1sYXllcicsXG4gICAgdGl0bGU6IGxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zRm9ybS5yb3V0ZUxheWVyJyksXG4gICAgekluZGV4OiA5MTAsXG4gICAgc291cmNlOiBuZXcgRmVhdHVyZURhdGFTb3VyY2UoKSxcbiAgICBzaG93SW5MYXllckxpc3Q6IHRydWUsXG4gICAgd29ya3NwYWNlOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIGxpbmtlZExheWVyczoge1xuICAgICAgbGlua0lkOiAnaWdvLWRpcmVjdGlvbi1yb3V0ZS1sYXllcidcbiAgICB9LFxuICAgIGV4cG9ydGFibGU6IHRydWUsXG4gICAgYnJvd3NhYmxlOiBmYWxzZSxcbiAgICBzdHlsZTogZGlyZWN0aW9uc1N0eWxlXG4gIH0pO1xuICB0cnlCaW5kU3RvcmVMYXllcihyb3V0ZXNGZWF0dXJlU3RvcmUsIHJvdXRlTGF5ZXIpO1xuICByb3V0ZXNGZWF0dXJlU3RvcmUubGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gIHRyeUFkZExvYWRpbmdTdHJhdGVneShyb3V0ZXNGZWF0dXJlU3RvcmUsIGxvYWRpbmdTdHJhdGVneSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RlcEZlYXR1cmVTdG9yZShzdGVwRmVhdHVyZVN0b3JlOiBTdGVwRmVhdHVyZVN0b3JlKSB7XG4gIGNvbnN0IGxvYWRpbmdTdHJhdGVneSA9IG5ldyBGZWF0dXJlU3RvcmVMb2FkaW5nU3RyYXRlZ3koe1xuICAgIG1vdGlvbjogRmVhdHVyZU1vdGlvbi5Ob25lXG4gIH0pO1xuXG4gIGNvbnN0IHN0ZXBMYXllciA9IG5ldyBWZWN0b3JMYXllcih7XG4gICAgaXNJZ29JbnRlcm5hbExheWVyOiB0cnVlLFxuICAgIGlkOiAnaWdvLWRpcmVjdGlvbi1zdGVwLWxheWVyJyxcbiAgICB0aXRsZTogJycsXG4gICAgekluZGV4OiA5MTAsXG4gICAgc291cmNlOiBuZXcgRmVhdHVyZURhdGFTb3VyY2UoKSxcbiAgICBzaG93SW5MYXllckxpc3Q6IGZhbHNlLFxuICAgIHdvcmtzcGFjZToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBsaW5rZWRMYXllcnM6IHtcbiAgICAgIGxpbmtJZDogJ2lnby1kaXJlY3Rpb24tcm91dGUtbGF5ZXInXG4gICAgfSxcbiAgICBleHBvcnRhYmxlOiBmYWxzZSxcbiAgICBicm93c2FibGU6IGZhbHNlLFxuICAgIHN0eWxlOiBkaXJlY3Rpb25zU3R5bGVcbiAgfSk7XG4gIHRyeUJpbmRTdG9yZUxheWVyKHN0ZXBGZWF0dXJlU3RvcmUsIHN0ZXBMYXllcik7XG4gIHN0ZXBGZWF0dXJlU3RvcmUubGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gIHRyeUFkZExvYWRpbmdTdHJhdGVneShzdGVwRmVhdHVyZVN0b3JlLCBsb2FkaW5nU3RyYXRlZ3kpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTdG9wVG9TdG9wc0ZlYXR1cmVTdG9yZShcbiAgc3RvcDogU3RvcCxcbiAgc3RvcHNTdG9yZTogU3RvcHNTdG9yZSxcbiAgc3RvcHNGZWF0dXJlU3RvcmU6IFN0b3BzRmVhdHVyZVN0b3JlLFxuICBwcm9qZWN0aW9uOiBzdHJpbmcsXG4gIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7XG4gIGxldCBzdG9wQ29sb3I7XG4gIGxldCBzdG9wVGV4dDtcblxuXG4gIHN3aXRjaCAoc3RvcC5yZWxhdGl2ZVBvc2l0aW9uKSB7XG4gICAgY2FzZSBEaXJlY3Rpb25SZWxhdGl2ZVBvc2l0aW9uVHlwZS5TdGFydDpcbiAgICAgIHN0b3BDb2xvciA9ICcjMDA4MDAwJztcbiAgICAgIHN0b3BUZXh0ID0gbGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLnN0YXJ0Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIERpcmVjdGlvblJlbGF0aXZlUG9zaXRpb25UeXBlLkVuZDpcbiAgICAgIHN0b3BDb2xvciA9ICcjZjY0MTM5JztcbiAgICAgIHN0b3BUZXh0ID0gbGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLmVuZCcpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0b3BDb2xvciA9ICcjZmZkNzAwJztcbiAgICAgIHN0b3BUZXh0ID0gbGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLmludGVybWVkaWF0ZScpICsgJyAjJyArIHN0b3AucG9zaXRpb247XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IG9sR2VvbS5Qb2ludChcbiAgICBvbFByb2oudHJhbnNmb3JtKHN0b3AuY29vcmRpbmF0ZXMsIHByb2plY3Rpb24sIHN0b3BzRmVhdHVyZVN0b3JlLm1hcC5wcm9qZWN0aW9uKVxuICApO1xuXG4gIGNvbnN0IGdlb2pzb25HZW9tID0gbmV3IE9sR2VvSlNPTigpLndyaXRlR2VvbWV0cnlPYmplY3QoZ2VvbWV0cnksIHtcbiAgICBmZWF0dXJlUHJvamVjdGlvbjogc3RvcHNGZWF0dXJlU3RvcmUubWFwLnByb2plY3Rpb24sXG4gICAgZGF0YVByb2plY3Rpb246IHN0b3BzRmVhdHVyZVN0b3JlLm1hcC5wcm9qZWN0aW9uXG4gIH0pIGFzIEZlYXR1cmVHZW9tZXRyeTtcblxuICBjb25zdCBwcmV2aW91c1N0b3AgPSBzdG9wc0ZlYXR1cmVTdG9yZS5nZXQoc3RvcC5pZCk7XG4gIGNvbnN0IHByZXZpb3VzU3RvcFJldmlzaW9uID0gcHJldmlvdXNTdG9wID8gcHJldmlvdXNTdG9wLm1ldGEucmV2aXNpb24gOiAwO1xuXG4gIGNvbnN0IHN0b3BGZWF0dXJlU3RvcmU6IEZlYXR1cmVXaXRoU3RvcCA9IHtcbiAgICB0eXBlOiBGRUFUVVJFLFxuICAgIGdlb21ldHJ5OiBnZW9qc29uR2VvbSxcbiAgICBwcm9qZWN0aW9uOiBzdG9wc0ZlYXR1cmVTdG9yZS5tYXAucHJvamVjdGlvbixcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBpZDogc3RvcC5pZCxcbiAgICAgIHR5cGU6IERpcmVjdGlvblR5cGUuU3RvcCxcbiAgICAgIHN0b3BUZXh0LFxuICAgICAgc3RvcENvbG9yLFxuICAgICAgc3RvcE9wYWNpdHk6IDEsXG4gICAgICBzdG9wXG4gICAgfSxcbiAgICBtZXRhOiB7XG4gICAgICBpZDogc3RvcC5pZCxcbiAgICAgIHJldmlzaW9uOiBwcmV2aW91c1N0b3BSZXZpc2lvbiArIDFcbiAgICB9LFxuICAgIG9sOiBuZXcgb2xGZWF0dXJlKHsgZ2VvbWV0cnkgfSlcbiAgfTtcbiAgc3RvcHNGZWF0dXJlU3RvcmUudXBkYXRlKHN0b3BGZWF0dXJlU3RvcmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGlyZWN0aW9uVG9Sb3V0ZXNGZWF0dXJlU3RvcmUoXG4gIHJvdXRlc0ZlYXR1cmVTdG9yZTogUm91dGVzRmVhdHVyZVN0b3JlLFxuICBkaXJlY3Rpb246IERpcmVjdGlvbixcbiAgcHJvamVjdGlvbjogc3RyaW5nLFxuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgbW92ZVRvRXh0ZW50ID0gZmFsc2UpIHtcbiAgY29uc3QgZ2VvbSA9IGRpcmVjdGlvbi5nZW9tZXRyeS5jb29yZGluYXRlcztcbiAgY29uc3QgZ2VvbWV0cnk0MzI2ID0gbmV3IG9sR2VvbS5MaW5lU3RyaW5nKGdlb20pO1xuICBjb25zdCBnZW9tZXRyeSA9IGdlb21ldHJ5NDMyNi50cmFuc2Zvcm0oXG4gICAgcHJvamVjdGlvbixcbiAgICByb3V0ZXNGZWF0dXJlU3RvcmUubWFwLnByb2plY3Rpb25cbiAgKTtcblxuICBjb25zdCBnZW9qc29uR2VvbSA9IG5ldyBPbEdlb0pTT04oKS53cml0ZUdlb21ldHJ5T2JqZWN0KGdlb21ldHJ5LCB7XG4gICAgZmVhdHVyZVByb2plY3Rpb246IHJvdXRlc0ZlYXR1cmVTdG9yZS5tYXAucHJvamVjdGlvbixcbiAgICBkYXRhUHJvamVjdGlvbjogcm91dGVzRmVhdHVyZVN0b3JlLm1hcC5wcm9qZWN0aW9uXG4gIH0pIGFzIEZlYXR1cmVHZW9tZXRyeTtcblxuXG4gIGNvbnN0IHByZXZpb3VzUm91dGUgPSByb3V0ZXNGZWF0dXJlU3RvcmUuZ2V0KGRpcmVjdGlvbi5pZCk7XG4gIGNvbnN0IHByZXZpb3VzUm91dGVSZXZpc2lvbiA9IHByZXZpb3VzUm91dGVcbiAgICA/IHByZXZpb3VzUm91dGUubWV0YS5yZXZpc2lvblxuICAgIDogMDtcblxuICBjb25zdCByb3V0ZUZlYXR1cmVTdG9yZTogRmVhdHVyZVdpdGhEaXJlY3Rpb24gPSB7XG4gICAgdHlwZTogRkVBVFVSRSxcbiAgICBnZW9tZXRyeTogZ2VvanNvbkdlb20sXG4gICAgcHJvamVjdGlvbjogcm91dGVzRmVhdHVyZVN0b3JlLm1hcC5wcm9qZWN0aW9uLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGlkOiBkaXJlY3Rpb24uaWQsXG4gICAgICB0eXBlOiBEaXJlY3Rpb25UeXBlLlJvdXRlLFxuICAgICAgYWN0aXZlLFxuICAgICAgZGlyZWN0aW9uXG4gICAgfSxcbiAgICBtZXRhOiB7XG4gICAgICBpZDogZGlyZWN0aW9uLmlkLFxuICAgICAgcmV2aXNpb246IHByZXZpb3VzUm91dGVSZXZpc2lvbiArIDFcbiAgICB9LFxuICAgIG9sOiBuZXcgb2xGZWF0dXJlKHsgZ2VvbWV0cnkgfSlcbiAgfTtcbiAgcm91dGVzRmVhdHVyZVN0b3JlLnVwZGF0ZShyb3V0ZUZlYXR1cmVTdG9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkaXN0YW5jZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKGRpc3RhbmNlID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChkaXN0YW5jZSA+PSAxMDAwMDApIHtcbiAgICByZXR1cm4gTnVtYmVyVXRpbHMucm91bmRUb05EZWNpbWFsKE1hdGgucm91bmQoZGlzdGFuY2UpIC8gMTAwMCwgMSkgKyAnIGttJztcbiAgfVxuICBpZiAoZGlzdGFuY2UgPj0gMTAwMDApIHtcbiAgICByZXR1cm4gTnVtYmVyVXRpbHMucm91bmRUb05EZWNpbWFsKE1hdGgucm91bmQoZGlzdGFuY2UpIC8gMTAwIC8gMTAsIDEpICsgJyBrbSc7XG4gIH1cbiAgaWYgKGRpc3RhbmNlID49IDEwMDApIHtcbiAgICByZXR1cm4gTnVtYmVyVXRpbHMucm91bmRUb05EZWNpbWFsKE1hdGgucm91bmQoZGlzdGFuY2UpIC8gMTAwIC8gMTAsIDEpICsgJyBrbSc7XG4gIH1cbiAgcmV0dXJuIE51bWJlclV0aWxzLnJvdW5kVG9ORGVjaW1hbChkaXN0YW5jZSwgMCkgKyAnIG0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RHVyYXRpb24oZHVyYXRpb246IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChkdXJhdGlvbiA+PSAzNjAwKSB7XG4gICAgY29uc3QgaG91ciA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyAzNjAwKTtcbiAgICBjb25zdCBtaW51dGUgPSBNYXRoLnJvdW5kKChkdXJhdGlvbiAvIDM2MDAgLSBob3VyKSAqIDYwKTtcbiAgICBpZiAobWludXRlID09PSA2MCkge1xuICAgICAgcmV0dXJuIGhvdXIgKyAxICsgJyBoJztcbiAgICB9XG4gICAgcmV0dXJuIGhvdXIgKyAnIGggJyArIG1pbnV0ZSArICcgbWluJztcbiAgfVxuXG4gIGlmIChkdXJhdGlvbiA+PSA2MCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGR1cmF0aW9uIC8gNjApICsgJyBtaW4nO1xuICB9XG4gIHJldHVybiBkdXJhdGlvbiArICcgcyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRJbnN0cnVjdGlvbihcbiAgdHlwZSxcbiAgbW9kaWZpZXIsXG4gIHJvdXRlLFxuICBkaXJlY3Rpb24sXG4gIHN0ZXBQb3NpdGlvbixcbiAgZXhpdCxcbiAgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gIGxhc3RTdGVwID0gZmFsc2Vcbikge1xuICBjb25zdCB0cmFuc2xhdGUgPSBsYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlO1xuICBsZXQgZGlyZWN0aXZlO1xuICBsZXQgaW1hZ2UgPSAnZm9yd2FyZCc7XG4gIGxldCBjc3NDbGFzcyA9ICdyb3RhdGUtMjcwJztcbiAgY29uc3QgdHJhbnNsYXRlZERpcmVjdGlvbiA9IHRyYW5zbGF0ZUJlYXJpbmcoZGlyZWN0aW9uLCBsYW5ndWFnZVNlcnZpY2UpO1xuICBjb25zdCB0cmFuc2xhdGVkTW9kaWZpZXIgPSB0cmFuc2xhdGVNb2RpZmllcihtb2RpZmllciwgbGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgY29uc3QgcHJlZml4ID0gbW9kaWZpZXIgPT09ICdzdHJhaWdodCcgPyAnJyA6IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnMubW9kaWZpZXIucHJlZml4Jyk7XG5cbiAgbGV0IGFnZ3JlZ2F0ZWREaXJlY3Rpb24gPSBwcmVmaXggKyB0cmFuc2xhdGVkTW9kaWZpZXI7XG5cblxuICBpZiAobW9kaWZpZXI/LnNlYXJjaCgnc2xpZ2h0JykgPj0gMCkge1xuICAgIGFnZ3JlZ2F0ZWREaXJlY3Rpb24gPSB0cmFuc2xhdGVkTW9kaWZpZXI7XG4gIH1cblxuICBpZiAobW9kaWZpZXIgPT09ICd1dHVybicpIHtcbiAgICBpbWFnZSA9ICdmb3J3YXJkJztcbiAgICBjc3NDbGFzcyA9ICdyb3RhdGUtOTAnO1xuICB9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnc2hhcnAgcmlnaHQnKSB7XG4gICAgaW1hZ2UgPSAnc3ViZGlyZWN0b3J5LWFycm93LXJpZ2h0JztcbiAgICBjc3NDbGFzcyA9ICdpY29uLWZsaXBwZWQnO1xuICB9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAncmlnaHQnKSB7XG4gICAgaW1hZ2UgPSAnc3ViZGlyZWN0b3J5LWFycm93LXJpZ2h0JztcbiAgICBjc3NDbGFzcyA9ICdpY29uLWZsaXBwZWQnO1xuICB9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnc2xpZ2h0IHJpZ2h0Jykge1xuICAgIGltYWdlID0gJ2ZvcndhcmQnO1xuICAgIGNzc0NsYXNzID0gJ3JvdGF0ZS0yOTAnO1xuICB9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnc3RyYWlnaHQnKSB7XG4gICAgaW1hZ2UgPSAnZm9yd2FyZCc7XG4gIH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICdzbGlnaHQgbGVmdCcpIHtcbiAgICBpbWFnZSA9ICdmb3J3YXJkJztcbiAgICBjc3NDbGFzcyA9ICdyb3RhdGUtMjUwJztcbiAgfSBlbHNlIGlmIChtb2RpZmllciA9PT0gJ2xlZnQnKSB7XG4gICAgaW1hZ2UgPSAnc3ViZGlyZWN0b3J5LWFycm93LWxlZnQnO1xuICAgIGNzc0NsYXNzID0gJ2ljb24tZmxpcHBlZCc7XG4gIH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICdzaGFycCBsZWZ0Jykge1xuICAgIGltYWdlID0gJ3N1YmRpcmVjdG9yeS1hcnJvdy1sZWZ0JztcbiAgICBjc3NDbGFzcyA9ICdpY29uLWZsaXBwZWQnO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICd0dXJuJykge1xuICAgIGlmIChtb2RpZmllciA9PT0gJ3N0cmFpZ2h0Jykge1xuICAgICAgZGlyZWN0aXZlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy50dXJuLnN0cmFpZ2h0JywgeyByb3V0ZSB9KTtcbiAgICB9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAndXR1cm4nKSB7XG4gICAgICBkaXJlY3RpdmUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLnR1cm4udXR1cm4nLCB7IHJvdXRlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3RpdmUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLnR1cm4uZWxzZScsIHsgcm91dGUsIGFnZ3JlZ2F0ZWREaXJlY3Rpb24sIHRyYW5zbGF0ZWRNb2RpZmllciB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25ldyBuYW1lJykge1xuICAgIGRpcmVjdGl2ZSA9IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnMubmV3IG5hbWUnLCB7IHJvdXRlLCB0cmFuc2xhdGVkRGlyZWN0aW9uIH0pO1xuICAgIGltYWdlID0gJ2NvbXBhc3MnO1xuICAgIGNzc0NsYXNzID0gJyc7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RlcGFydCcpIHtcbiAgICBkaXJlY3RpdmUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLmRlcGFydCcsIHsgcm91dGUsIHRyYW5zbGF0ZWREaXJlY3Rpb24gfSk7XG4gICAgaW1hZ2UgPSAnY29tcGFzcyc7XG4gICAgY3NzQ2xhc3MgPSAnJztcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnYXJyaXZlJykge1xuICAgIGlmIChsYXN0U3RlcCkge1xuICAgICAgY29uc3QgY29tYSA9ICF0cmFuc2xhdGVkTW9kaWZpZXIgPyAnJyA6ICcsICc7XG4gICAgICBhZ2dyZWdhdGVkRGlyZWN0aW9uID0gIXRyYW5zbGF0ZWRNb2RpZmllciA/ICcnIDogYWdncmVnYXRlZERpcmVjdGlvbjtcbiAgICAgIGRpcmVjdGl2ZSA9IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnMuYXJyaXZlLmxhc3RTdGVwJywgeyBjb21hLCBhZ2dyZWdhdGVkRGlyZWN0aW9uIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3RpdmUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLmFycml2ZS5pbnRlcm1lZGlhdGUnLCB7IHJvdXRlIH0pO1xuICAgICAgaW1hZ2UgPSAnbWFwLW1hcmtlcic7XG4gICAgICBjc3NDbGFzcyA9ICcnO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbWVyZ2UnKSB7XG4gICAgZGlyZWN0aXZlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5tZXJnZScsIHsgcm91dGUgfSk7XG4gICAgaW1hZ2UgPSAnZm9yd2FyZCc7XG4gICAgY3NzQ2xhc3MgPSAncm90YXRlLTI3MCc7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29uIHJhbXAnKSB7XG4gICAgZGlyZWN0aXZlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5vbiByYW1wJywgeyBhZ2dyZWdhdGVkRGlyZWN0aW9uIH0pO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvZmYgcmFtcCcpIHtcbiAgICBkaXJlY3RpdmUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLm9mZiByYW1wJywgeyBhZ2dyZWdhdGVkRGlyZWN0aW9uIH0pO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmb3JrJykge1xuICAgIGlmIChtb2RpZmllci5zZWFyY2goJ2xlZnQnKSA+PSAwKSB7XG4gICAgICBkaXJlY3RpdmUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLmZvcmsubGVmdCcsIHsgcm91dGUgfSk7XG4gICAgfSBlbHNlIGlmIChtb2RpZmllci5zZWFyY2goJ3JpZ2h0JykgPj0gMCkge1xuICAgICAgZGlyZWN0aXZlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5mb3JrLnJpZ2h0JywgeyByb3V0ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aXZlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5mb3JrLmVsc2UnLCB7IHJvdXRlIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnZW5kIG9mIHJvYWQnKSB7XG4gICAgZGlyZWN0aXZlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5lbmQgb2Ygcm9hZCcsIHsgdHJhbnNsYXRlZE1vZGlmaWVyLCByb3V0ZSB9KTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAndXNlIGxhbmUnKSB7XG4gICAgZGlyZWN0aXZlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy51c2UgbGFuZScpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjb250aW51ZScgJiYgbW9kaWZpZXIgIT09ICd1dHVybicpIHtcbiAgICBkaXJlY3RpdmUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLmNvbnRpbnVlLm5vdFV0dXJuJywgeyByb3V0ZSB9KTtcbiAgICBpbWFnZSA9ICdmb3J3YXJkJztcbiAgICBjc3NDbGFzcyA9ICdyb3RhdGUtMjcwJztcbiAgfSBlbHNlIGlmICh0eXBlID09PSAncm91bmRhYm91dCcpIHtcbiAgICBjb25zdCBjbnRTdWZmaXggPSBleGl0ID09PSAxID9cbiAgICAgIHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnMuY250U3VmZml4LmZpcnN0JykgOlxuICAgICAgdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5jbnRTdWZmaXguc2Vjb25kQW5kTW9yZScpO1xuICAgIGRpcmVjdGl2ZSA9IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnMucm91bmRhYm91dCcsIHsgZXhpdCwgY250U3VmZml4LCByb3V0ZSB9KTtcbiAgICBpbWFnZSA9ICdjaGFydC1kb251dCc7XG4gICAgY3NzQ2xhc3MgPSAnJztcbiAgfSBlbHNlIGlmICh0eXBlID09PSAncm90YXJ5Jykge1xuICAgIGRpcmVjdGl2ZSA9IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnMucm90YXJ5Jyk7XG4gICAgaW1hZ2UgPSAnY2hhcnQtZG9udXQnO1xuICAgIGNzc0NsYXNzID0gJyc7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JvdW5kYWJvdXQgdHVybicpIHtcbiAgICBkaXJlY3RpdmUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLnJvdW5kYWJvdXQgdHVybicpO1xuICAgIGltYWdlID0gJ2NoYXJ0LWRvbnV0JztcbiAgICBjc3NDbGFzcyA9ICcnO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdleGl0IHJvdW5kYWJvdXQnKSB7XG4gICAgZGlyZWN0aXZlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5leGl0IHJvdW5kYWJvdXQnLCB7IHJvdXRlIH0pO1xuICAgIGltYWdlID0gJ2ZvcndhcmQnO1xuICAgIGNzc0NsYXNzID0gJ3JvdGF0ZS0yNzAnO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdub3RpZmljYXRpb24nKSB7XG4gICAgZGlyZWN0aXZlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5ub3RpZmljYXRpb24nKTtcbiAgfSBlbHNlIGlmIChtb2RpZmllciA9PT0gJ3V0dXJuJykge1xuICAgIGRpcmVjdGl2ZSA9IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnMudXR1cm5UZXh0JywgeyB0cmFuc2xhdGVkRGlyZWN0aW9uLCByb3V0ZSB9KTtcbiAgfSBlbHNlIHtcbiAgICBkaXJlY3RpdmUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLnVua25vd24nKTtcbiAgfVxuXG4gIGltYWdlID0gbGFzdFN0ZXAgPyAnZmxhZy12YXJpYW50JyA6IGltYWdlO1xuICBjc3NDbGFzcyA9IGxhc3RTdGVwID8gJycgOiBjc3NDbGFzcztcbiAgaW1hZ2UgPSBzdGVwUG9zaXRpb24gPT09IDAgPyAnY29tcGFzcycgOiBpbWFnZTtcbiAgY3NzQ2xhc3MgPSBzdGVwUG9zaXRpb24gPT09IDAgPyAnJyA6IGNzc0NsYXNzO1xuXG4gIHJldHVybiB7IGluc3RydWN0aW9uOiBkaXJlY3RpdmUsIGltYWdlLCBjc3NDbGFzcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlTW9kaWZpZXIobW9kaWZpZXIsIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gIGlmIChtb2RpZmllciA9PT0gJ3V0dXJuJykge1xuICAgIHJldHVybiB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLnV0dXJuJyk7XG4gIH0gZWxzZSBpZiAobW9kaWZpZXIgPT09ICdzaGFycCByaWdodCcpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5zaGFycCByaWdodCcpO1xuICB9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAncmlnaHQnKSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnMucmlnaHQnKTtcbiAgfSBlbHNlIGlmIChtb2RpZmllciA9PT0gJ3NsaWdodCByaWdodCcpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5zbGlnaHQgcmlnaHQnKTtcbiAgfSBlbHNlIGlmIChtb2RpZmllciA9PT0gJ3NoYXJwIGxlZnQnKSB7XG4gICAgcmV0dXJuIGxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLnNoYXJwIGxlZnQnKTtcbiAgfSBlbHNlIGlmIChtb2RpZmllciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuIGxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLmxlZnQnKTtcbiAgfSBlbHNlIGlmIChtb2RpZmllciA9PT0gJ3NsaWdodCBsZWZ0Jykge1xuICAgIHJldHVybiBsYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9ucy5zbGlnaHQgbGVmdCcpO1xuICB9IGVsc2UgaWYgKG1vZGlmaWVyID09PSAnc3RyYWlnaHQnKSB7XG4gICAgcmV0dXJuIGxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kaXJlY3Rpb25zLnN0cmFpZ2h0Jyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVCZWFyaW5nKGJlYXJpbmc6IG51bWJlciwgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UpIHtcbiAgY29uc3QgdHJhbnNsYXRlID0gbGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgaWYgKGJlYXJpbmcgPj0gMzM3IHx8IGJlYXJpbmcgPCAyMykge1xuICAgIHJldHVybiB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5jYXJkaW5hbFBvaW50cy5uJyk7XG4gIH0gZWxzZSBpZiAoYmVhcmluZyA8IDY3KSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmNhcmRpbmFsUG9pbnRzLm5lJyk7XG4gIH0gZWxzZSBpZiAoYmVhcmluZyA8IDExMykge1xuICAgIHJldHVybiB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5jYXJkaW5hbFBvaW50cy5lJyk7XG4gIH0gZWxzZSBpZiAoYmVhcmluZyA8IDE1Nykge1xuICAgIHJldHVybiB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5jYXJkaW5hbFBvaW50cy5zZScpO1xuICB9IGVsc2UgaWYgKGJlYXJpbmcgPCAyMDMpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uY2FyZGluYWxQb2ludHMucycpO1xuICB9IGVsc2UgaWYgKGJlYXJpbmcgPCAyNDcpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uY2FyZGluYWxQb2ludHMuc3cnKTtcbiAgfSBlbHNlIGlmIChiZWFyaW5nIDwgMjkzKSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmNhcmRpbmFsUG9pbnRzLncnKTtcbiAgfSBlbHNlIGlmIChiZWFyaW5nIDwgMzM3KSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmNhcmRpbmFsUG9pbnRzLm53Jyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cblxuIl19