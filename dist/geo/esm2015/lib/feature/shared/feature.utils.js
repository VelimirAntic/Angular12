import * as olextent from 'ol/extent';
import * as olproj from 'ol/proj';
import * as olstyle from 'ol/style';
import OlGeometryLayout from 'ol/geom/GeometryLayout';
import OlPolygon from 'ol/geom/Polygon';
import OlPoint from 'ol/geom/Point';
import OlLineString from 'ol/geom/LineString';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import { uuid } from '@igo2/utils';
import { getEntityId, getEntityTitle, getEntityRevision, getEntityIcon, getEntityProperty } from '@igo2/common';
import { VectorLayer } from '../../layer/shared/layers/vector-layer';
import { FeatureDataSource } from '../../datasource';
import { FEATURE, FeatureMotion } from './feature.enums';
/**
 * Create an Openlayers feature object out of a feature definition.
 * The output object has a reference to the feature id.
 * @param feature Feature definition
 * @param projectionOut Feature object projection
 * @returns OpenLayers feature object
 */
export function featureToOl(feature, projectionOut, getId) {
    getId = getId ? getId : getEntityId;
    const olFormat = new OlFormatGeoJSON();
    const olFeature = olFormat.readFeature(feature, {
        dataProjection: feature.projection,
        featureProjection: projectionOut
    });
    olFeature.setId(getId(feature));
    const title = getEntityTitle(feature);
    if (title !== undefined) {
        olFeature.set('_title', title, true);
    }
    if (feature.extent !== undefined) {
        olFeature.set('_extent', feature.extent, true);
    }
    if (feature.projection !== undefined) {
        olFeature.set('_projection', feature.projection, true);
    }
    const mapTitle = getEntityProperty(feature, 'meta.mapTitle');
    if (mapTitle !== undefined) {
        olFeature.set('_mapTitle', mapTitle, true);
    }
    olFeature.set('_entityRevision', getEntityRevision(feature), true);
    const icon = getEntityIcon(feature);
    if (icon !== undefined) {
        olFeature.set('_icon', icon, true);
    }
    if (feature.meta && feature.meta.style) {
        olFeature.set('_style', feature.meta.style, true);
    }
    if (feature.sourceId) {
        olFeature.set('_sourceId', feature.sourceId, true);
    }
    return olFeature;
}
export function renderFeatureFromOl(olRenderFeature, projectionIn, olLayer, projectionOut = 'EPSG:4326') {
    let geom;
    let title;
    let exclude;
    let excludeOffline;
    if (olLayer) {
        title = olLayer.get('title');
        if (olLayer.get('sourceOptions')) {
            exclude = olLayer.get('sourceOptions').excludeAttribute;
            excludeOffline = olLayer.get('sourceOptions').excludeAttributeOffline;
        }
    }
    else {
        title = olRenderFeature.get('_title');
    }
    const olFormat = new OlFormatGeoJSON();
    const properties = olRenderFeature.getProperties();
    const geometryType = olRenderFeature.getType();
    if (geometryType === 'Polygon') {
        const ends = olRenderFeature.getEnds();
        geom = new OlPolygon(olRenderFeature.getFlatCoordinates(), OlGeometryLayout.XY, ends);
    }
    else if (geometryType === 'Point') {
        geom = new OlPoint(olRenderFeature.getFlatCoordinates(), OlGeometryLayout.XY);
    }
    else if (geometryType === 'LineString') {
        geom = new OlLineString(olRenderFeature.getFlatCoordinates(), OlGeometryLayout.XY);
    }
    const geometry = olFormat.writeGeometryObject(geom, {
        dataProjection: projectionOut,
        featureProjection: projectionIn
    });
    const id = olRenderFeature.getId() ? olRenderFeature.getId() : uuid();
    const mapTitle = olRenderFeature.get('_mapTitle');
    const extent = olproj.transformExtent(olRenderFeature.getExtent(), projectionIn, projectionOut);
    return {
        type: FEATURE,
        projection: projectionOut,
        extent,
        meta: {
            id,
            title: title ? title : mapTitle ? mapTitle : id,
            mapTitle,
            excludeAttribute: exclude,
            excludeAttributeOffline: excludeOffline
        },
        properties,
        geometry,
        ol: olRenderFeature
    };
}
/**
 * Create a feature object out of an OL feature
 * The output object has a reference to the feature id.
 * @param olFeature OL Feature
 * @param projectionIn OL feature projection
 * @param olLayer OL Layer
 * @param projectionOut Feature projection
 * @returns Feature
 */
export function featureFromOl(olFeature, projectionIn, olLayer, projectionOut = 'EPSG:4326') {
    let title;
    let exclude;
    let excludeOffline;
    let idColumn; // for arcgisrest and tilearcgisrest source
    const olFormat = new OlFormatGeoJSON();
    const keys = olFeature.getKeys().filter((key) => {
        return !key.startsWith('_') && key !== 'geometry';
    });
    const properties = keys.reduce((acc, key) => {
        acc[key] = olFeature.get(key);
        return acc;
    }, {});
    const geometry = olFormat.writeGeometryObject(olFeature.getGeometry(), {
        dataProjection: projectionOut,
        featureProjection: projectionIn
    });
    if (olLayer) {
        title = olLayer.get('title');
        const sourceOptions = olLayer.get('sourceOptions');
        if (sourceOptions) {
            exclude = sourceOptions.excludeAttribute;
            excludeOffline = sourceOptions.excludeAttributeOffline;
            idColumn =
                sourceOptions.idColumn ||
                    ((sourceOptions.type === 'arcgisrest' || sourceOptions.type === 'tilearcgisrest') ? 'OBJECTID' : undefined);
        }
    }
    else {
        title = olFeature.get('_title');
    }
    const mapTitle = olFeature.get('_mapTitle');
    const id = olFeature.getId() ? olFeature.getId() : olFeature.get(idColumn) ? olFeature.get(idColumn) : uuid();
    const newFeature = olFeature.get('_newFeature');
    return {
        type: FEATURE,
        projection: projectionOut,
        extent: olFeature.get('_extent'),
        meta: {
            id,
            title: title ? title : mapTitle ? mapTitle : id,
            mapTitle,
            revision: olFeature.getRevision(),
            style: olFeature.get('_style'),
            excludeAttribute: exclude,
            excludeAttributeOffline: excludeOffline
        },
        properties,
        geometry,
        ol: olFeature
    };
}
/**
 * Compute an OL feature extent in it's map projection
 * @param map Map
 * @param olFeature OL feature
 * @returns Extent in the map projection
 */
export function computeOlFeatureExtent(map, olFeature) {
    let olExtent = olextent.createEmpty();
    const olFeatureExtent = olFeature.get('_extent');
    const olFeatureProjection = olFeature.get('_projection');
    if (olFeatureExtent !== undefined && olFeatureProjection !== undefined) {
        olExtent = olproj.transformExtent(olFeatureExtent, olFeatureProjection, map.projection);
    }
    else {
        const olGeometry = olFeature.getGeometry();
        if (olGeometry !== null) {
            olExtent = olGeometry.getExtent();
        }
    }
    return olExtent;
}
/**
 * Compute a multiple OL features extent in their map projection
 * @param map Map
 * @param olFeatures OL features
 * @returns Extent in the map projection
 */
export function computeOlFeaturesExtent(map, olFeatures) {
    const extent = olextent.createEmpty();
    olFeatures.forEach((olFeature) => {
        const featureExtent = computeOlFeatureExtent(map, olFeature);
        olextent.extend(extent, featureExtent);
    });
    return extent;
}
/**
 * Scale an extent.
 * @param extent Extent
 * @param Scaling factors for top, right, bottom and left directions, in that order
 * @returns Scaled extent
 */
export function scaleExtent(extent, scale) {
    const [width, height] = olextent.getSize(extent);
    return [
        scale[3] ? extent[0] - width * scale[3] : extent[0],
        scale[2] ? extent[1] - height * scale[2] : extent[1],
        scale[1] ? extent[2] + width * scale[1] : extent[2],
        scale[0] ? extent[3] + height * scale[0] : extent[3]
    ];
}
/**
 * Return true if features are out of view.
 * If features are too close to the edge, they are considered out of view.
 * We define the edge as 5% of the extent size.
 * @param map Map
 * @param featuresExtent The features's extent
 * @returns Return true if features are out of view
 */
export function featuresAreOutOfView(map, featuresExtent) {
    const mapExtent = map.viewController.getExtent();
    const edgeRatio = 0.05;
    const scale = [-1, -1, -1, -1].map(x => x * edgeRatio);
    const viewExtent = scaleExtent(mapExtent, scale);
    return !olextent.containsExtent(viewExtent, featuresExtent);
}
/**
 * Return true if features are too deep into the view. This results
 * in features being too small.
 * Features are considered too small if their extent occupies less than
 * 1% of the map extent.
 * @param map Map
 * @param featuresExtent The features's extent
 * @param areaRatio The features extent to view extent acceptable ratio
 * @returns Return true if features are too deep in the view
 */
export function featuresAreTooDeepInView(map, featuresExtent, areaRatio) {
    // An area ratio of 0.004 means that the feature extent's width and height
    // should be about 1/16 of the map extent's width and height
    areaRatio = areaRatio ? areaRatio : 0.004;
    const mapExtent = map.viewController.getExtent();
    const mapExtentArea = olextent.getArea(mapExtent);
    const featuresExtentArea = olextent.getArea(featuresExtent);
    if (featuresExtentArea === 0 && map.viewController.getZoom() > 13) {
        // In case it's a point
        return false;
    }
    return featuresExtentArea / mapExtentArea < areaRatio;
}
/**
 * Fit view to include the features extent.
 * By default, this method will let the features occupy about 50% of the viewport.
 * @param map Map
 * @param olFeatures OL features
 * @param motion To motion to the new map view
 * @param scale If this is defined, the original view will be scaled
 *  by that factor before any logic is applied.
 */
export function moveToOlFeatures(map, olFeatures, motion = FeatureMotion.Default, scale, areaRatio) {
    const featuresExtent = computeOlFeaturesExtent(map, olFeatures);
    let viewExtent = featuresExtent;
    if (scale !== undefined) {
        viewExtent = scaleExtent(viewExtent, scale);
    }
    if (motion === FeatureMotion.Zoom) {
        map.viewController.zoomToExtent(viewExtent);
    }
    else if (motion === FeatureMotion.Move) {
        map.viewController.moveToExtent(viewExtent);
    }
    else if (motion === FeatureMotion.Default) {
        if (featuresAreOutOfView(map, featuresExtent) ||
            featuresAreTooDeepInView(map, featuresExtent, areaRatio)) {
            map.viewController.zoomToExtent(viewExtent);
        }
    }
}
/**
 * Hide an OL feature
 * @param olFeature OL feature
 */
export function hideOlFeature(olFeature) {
    olFeature.setStyle(new olstyle.Style({}));
}
/**
 * Try to bind a layer to a store if none is bound already.
 * The layer will also be added to the store's map.
 * If no layer is given to that function, a basic one will be created.
 * @param store The store to bind the layer
 * @param layer An optional VectorLayer
 */
export function tryBindStoreLayer(store, layer) {
    if (store.layer !== undefined) {
        if (store.layer.map === undefined) {
            store.map.addLayer(store.layer);
        }
        return;
    }
    layer = layer
        ? layer
        : new VectorLayer({
            source: new FeatureDataSource()
        });
    store.bindLayer(layer);
    if (store.layer.map === undefined) {
        store.map.addLayer(store.layer);
    }
}
/**
 * Compute a diff between a source array of Ol features and a target array
 * @param source Source array of OL features
 * @param starget Target array of OL features
 * @returns Features to add and remove
 */
export function computeOlFeaturesDiff(source, target) {
    const olFeaturesMap = new Map();
    target.forEach((olFeature) => {
        olFeaturesMap.set(olFeature.getId(), olFeature);
    });
    const olFeaturesToRemove = [];
    source.forEach((olFeature) => {
        const newOlFeature = olFeaturesMap.get(olFeature.getId());
        if (newOlFeature === undefined) {
            olFeaturesToRemove.push(olFeature);
        }
        else if (newOlFeature.get('_entityRevision') !== olFeature.get('_entityRevision')) {
            olFeaturesToRemove.push(olFeature);
        }
        else {
            olFeaturesMap.delete(newOlFeature.getId());
        }
    });
    const olFeaturesToAddIds = Array.from(olFeaturesMap.keys());
    const olFeaturesToAdd = target.filter((olFeature) => {
        return olFeaturesToAddIds.indexOf(olFeature.getId()) >= 0;
    });
    return {
        add: olFeaturesToAdd,
        remove: olFeaturesToRemove
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxnQkFBZ0IsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLE9BQU8sTUFBTSxlQUFlLENBQUM7QUFDcEMsT0FBTyxZQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxlQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFJaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVuQyxPQUFPLEVBRUwsV0FBVyxFQUNYLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGlCQUFpQixFQUNsQixNQUFNLGNBQWMsQ0FBQztBQUd0QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUl6RDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUN6QixPQUFnQixFQUNoQixhQUFxQixFQUNyQixLQUE4QjtJQUU5QixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUVwQyxNQUFNLFFBQVEsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO0lBQ3ZDLE1BQU0sU0FBUyxH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WSxLQUFLLFNBQVMsRUFBRTtZQUM5QixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEM7YUFBTSxJQUNMLFlBQVksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQ3hFO1lBQ0Esa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQWdDLEVBQUUsRUFBRTtRQUN6RSxPQUFPLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPO1FBQ0wsR0FBRyxFQUFFLGVBQWU7UUFDcEIsTUFBTSxFQUFFLGtCQUFrQjtLQUMzQixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG9sZXh0ZW50IGZyb20gJ29sL2V4dGVudCc7XG5pbXBvcnQgKiBhcyBvbHByb2ogZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgKiBhcyBvbHN0eWxlIGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCBPbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQgT2xHZW9tZXRyeUxheW91dCBmcm9tICdvbC9nZW9tL0dlb21ldHJ5TGF5b3V0JztcbmltcG9ydCBPbFBvbHlnb24gZnJvbSAnb2wvZ2VvbS9Qb2x5Z29uJztcbmltcG9ydCBPbFBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQnO1xuaW1wb3J0IE9sTGluZVN0cmluZyBmcm9tICdvbC9nZW9tL0xpbmVTdHJpbmcnO1xuaW1wb3J0IE9sUmVuZGVyRmVhdHVyZSBmcm9tICdvbC9yZW5kZXIvRmVhdHVyZSc7XG5pbXBvcnQgT2xGb3JtYXRHZW9KU09OIGZyb20gJ29sL2Zvcm1hdC9HZW9KU09OJztcbmltcG9ydCBPbExheWVyIGZyb20gJ29sL2xheWVyL0xheWVyJztcbmltcG9ydCBPbFNvdXJjZSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuXG5pbXBvcnQge1xuICBFbnRpdHlLZXksXG4gIGdldEVudGl0eUlkLFxuICBnZXRFbnRpdHlUaXRsZSxcbiAgZ2V0RW50aXR5UmV2aXNpb24sXG4gIGdldEVudGl0eUljb24sXG4gIGdldEVudGl0eVByb3BlcnR5XG59IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcCc7XG5pbXBvcnQgeyBWZWN0b3JMYXllciB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9sYXllcnMvdmVjdG9yLWxheWVyJztcbmltcG9ydCB7IEZlYXR1cmVEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBGRUFUVVJFLCBGZWF0dXJlTW90aW9uIH0gZnJvbSAnLi9mZWF0dXJlLmVudW1zJztcbmltcG9ydCB7IEZlYXR1cmUsIEZlYXR1cmVHZW9tZXRyeSB9IGZyb20gJy4vZmVhdHVyZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IEZlYXR1cmVTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBPcGVubGF5ZXJzIGZlYXR1cmUgb2JqZWN0IG91dCBvZiBhIGZlYXR1cmUgZGVmaW5pdGlvbi5cbiAqIFRoZSBvdXRwdXQgb2JqZWN0IGhhcyBhIHJlZmVyZW5jZSB0byB0aGUgZmVhdHVyZSBpZC5cbiAqIEBwYXJhbSBmZWF0dXJlIEZlYXR1cmUgZGVmaW5pdGlvblxuICogQHBhcmFtIHByb2plY3Rpb25PdXQgRmVhdHVyZSBvYmplY3QgcHJvamVjdGlvblxuICogQHJldHVybnMgT3BlbkxheWVycyBmZWF0dXJlIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmVhdHVyZVRvT2woXG4gIGZlYXR1cmU6IEZlYXR1cmUsXG4gIHByb2plY3Rpb25PdXQ6IHN0cmluZyxcbiAgZ2V0SWQ/OiAoRmVhdHVyZSkgPT4gRW50aXR5S2V5XG4pOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4ge1xuICBnZXRJZCA9IGdldElkID8gZ2V0SWQgOiBnZXRFbnRpdHlJZDtcblxuICBjb25zdCBvbEZvcm1hdCA9IG5ldyBPbEZvcm1hdEdlb0pTT04oKTtcbiAgY29uc3Qgb2xGZWF0dXJlID0gb2xGb3JtYXQucmVhZEZlYXR1cmUoZmVhdHVyZSwge1xuICAgIGRhdGFQcm9qZWN0aW9uOiBmZWF0dXJlLnByb2plY3Rpb24sXG4gICAgZmVhdHVyZVByb2plY3Rpb246IHByb2plY3Rpb25PdXRcbiAgfSk7XG5cbiAgb2xGZWF0dXJlLnNldElkKGdldElkKGZlYXR1cmUpKTtcblxuICBjb25zdCB0aXRsZSA9IGdldEVudGl0eVRpdGxlKGZlYXR1cmUpO1xuICBpZiAodGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIG9sRmVhdHVyZS5zZXQoJ190aXRsZScsIHRpdGxlLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlLmV4dGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgb2xGZWF0dXJlLnNldCgnX2V4dGVudCcsIGZlYXR1cmUuZXh0ZW50LCB0cnVlKTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlLnByb2plY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIG9sRmVhdHVyZS5zZXQoJ19wcm9qZWN0aW9uJywgZmVhdHVyZS5wcm9qZWN0aW9uLCB0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IG1hcFRpdGxlID0gZ2V0RW50aXR5UHJvcGVydHkoZmVhdHVyZSwgJ21ldGEubWFwVGl0bGUnKTtcbiAgaWYgKG1hcFRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBvbEZlYXR1cmUuc2V0KCdfbWFwVGl0bGUnLCBtYXBUaXRsZSwgdHJ1ZSk7XG4gIH1cblxuICBvbEZlYXR1cmUuc2V0KCdfZW50aXR5UmV2aXNpb24nLCBnZXRFbnRpdHlSZXZpc2lvbihmZWF0dXJlKSwgdHJ1ZSk7XG5cbiAgY29uc3QgaWNvbiA9IGdldEVudGl0eUljb24oZmVhdHVyZSk7XG4gIGlmIChpY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICBvbEZlYXR1cmUuc2V0KCdfaWNvbicsIGljb24sIHRydWUpO1xuICB9XG5cbiAgaWYgKGZlYXR1cmUubWV0YSAmJiBmZWF0dXJlLm1ldGEuc3R5bGUpIHtcbiAgICBvbEZlYXR1cmUuc2V0KCdfc3R5bGUnLCBmZWF0dXJlLm1ldGEuc3R5bGUsIHRydWUpO1xuICB9XG5cbiAgaWYgKGZlYXR1cmUuc291cmNlSWQpIHtcbiAgICBvbEZlYXR1cmUuc2V0KCdfc291cmNlSWQnLCBmZWF0dXJlLnNvdXJjZUlkLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBvbEZlYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGZWF0dXJlRnJvbU9sKFxuICBvbFJlbmRlckZlYXR1cmU6IE9sUmVuZGVyRmVhdHVyZSxcbiAgcHJvamVjdGlvbkluOiBzdHJpbmcsXG4gIG9sTGF5ZXI/OiBPbExheWVyPE9sU291cmNlPixcbiAgcHJvamVjdGlvbk91dCA9ICdFUFNHOjQzMjYnXG4pOiBGZWF0dXJlIHtcbiAgbGV0IGdlb207XG4gIGxldCB0aXRsZTtcbiAgbGV0IGV4Y2x1ZGU7XG4gIGxldCBleGNsdWRlT2ZmbGluZTtcblxuICBpZiAob2xMYXllcikge1xuICAgIHRpdGxlID0gb2xMYXllci5nZXQoJ3RpdGxlJyk7XG4gICAgaWYgKG9sTGF5ZXIuZ2V0KCdzb3VyY2VPcHRpb25zJykpIHtcbiAgICAgIGV4Y2x1ZGUgPSBvbExheWVyLmdldCgnc291cmNlT3B0aW9ucycpLmV4Y2x1ZGVBdHRyaWJ1dGU7XG4gICAgICBleGNsdWRlT2ZmbGluZSA9IG9sTGF5ZXIuZ2V0KCdzb3VyY2VPcHRpb25zJykuZXhjbHVkZUF0dHJpYnV0ZU9mZmxpbmU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRpdGxlID0gb2xSZW5kZXJGZWF0dXJlLmdldCgnX3RpdGxlJyk7XG4gIH1cblxuICBjb25zdCBvbEZvcm1hdCA9IG5ldyBPbEZvcm1hdEdlb0pTT04oKTtcbiAgY29uc3QgcHJvcGVydGllcyA9IG9sUmVuZGVyRmVhdHVyZS5nZXRQcm9wZXJ0aWVzKCk7XG4gIGNvbnN0IGdlb21ldHJ5VHlwZSA9IG9sUmVuZGVyRmVhdHVyZS5nZXRUeXBlKCk7XG5cbiAgaWYgKGdlb21ldHJ5VHlwZSA9PT0gJ1BvbHlnb24nKSB7XG4gICAgY29uc3QgZW5kcyA9IG9sUmVuZGVyRmVhdHVyZS5nZXRFbmRzKCkgYXMgbnVtYmVyW107XG4gICAgZ2VvbSA9IG5ldyBPbFBvbHlnb24oXG4gICAgICBvbFJlbmRlckZlYXR1cmUuZ2V0RmxhdENvb3JkaW5hdGVzKCksXG4gICAgICBPbEdlb21ldHJ5TGF5b3V0LlhZLFxuICAgICAgZW5kc1xuICAgICk7XG4gIH0gZWxzZSBpZiAoZ2VvbWV0cnlUeXBlID09PSAnUG9pbnQnKSB7XG4gICAgZ2VvbSA9IG5ldyBPbFBvaW50KG9sUmVuZGVyRmVhdHVyZS5nZXRGbGF0Q29vcmRpbmF0ZXMoKSwgT2xHZW9tZXRyeUxheW91dC5YWSk7XG4gIH0gZWxzZSBpZiAoZ2VvbWV0cnlUeXBlID09PSAnTGluZVN0cmluZycpIHtcbiAgICBnZW9tID0gbmV3IE9sTGluZVN0cmluZyhcbiAgICAgIG9sUmVuZGVyRmVhdHVyZS5nZXRGbGF0Q29vcmRpbmF0ZXMoKSxcbiAgICAgIE9sR2VvbWV0cnlMYXlvdXQuWFlcbiAgICApO1xuICB9XG5cbiAgY29uc3QgZ2VvbWV0cnkgPSBvbEZvcm1hdC53cml0ZUdlb21ldHJ5T2JqZWN0KGdlb20sIHtcbiAgICBkYXRhUHJvamVjdGlvbjogcHJvamVjdGlvbk91dCxcbiAgICBmZWF0dXJlUHJvamVjdGlvbjogcHJvamVjdGlvbkluXG4gIH0pIGFzIEZlYXR1cmVHZW9tZXRyeTtcblxuICBjb25zdCBpZCA9IG9sUmVuZGVyRmVhdHVyZS5nZXRJZCgpID8gb2xSZW5kZXJGZWF0dXJlLmdldElkKCkgOiB1dWlkKCk7XG4gIGNvbnN0IG1hcFRpdGxlID0gb2xSZW5kZXJGZWF0dXJlLmdldCgnX21hcFRpdGxlJyk7XG4gIGNvbnN0IGV4dGVudCA9IG9scHJvai50cmFuc2Zvcm1FeHRlbnQob2xSZW5kZXJGZWF0dXJlLmdldEV4dGVudCgpLCBwcm9qZWN0aW9uSW4sIHByb2plY3Rpb25PdXQpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFQVRVUkUsXG4gICAgcHJvamVjdGlvbjogcHJvamVjdGlvbk91dCxcbiAgICBleHRlbnQsXG4gICAgbWV0YToge1xuICAgICAgaWQsXG4gICAgICB0aXRsZTogdGl0bGUgPyB0aXRsZSA6IG1hcFRpdGxlID8gbWFwVGl0bGUgOiBpZCxcbiAgICAgIG1hcFRpdGxlLFxuICAgICAgZXhjbHVkZUF0dHJpYnV0ZTogZXhjbHVkZSxcbiAgICAgIGV4Y2x1ZGVBdHRyaWJ1dGVPZmZsaW5lOiBleGNsdWRlT2ZmbGluZVxuICAgIH0sXG4gICAgcHJvcGVydGllcyxcbiAgICBnZW9tZXRyeSxcbiAgICBvbDogb2xSZW5kZXJGZWF0dXJlXG4gIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGZlYXR1cmUgb2JqZWN0IG91dCBvZiBhbiBPTCBmZWF0dXJlXG4gKiBUaGUgb3V0cHV0IG9iamVjdCBoYXMgYSByZWZlcmVuY2UgdG8gdGhlIGZlYXR1cmUgaWQuXG4gKiBAcGFyYW0gb2xGZWF0dXJlIE9MIEZlYXR1cmVcbiAqIEBwYXJhbSBwcm9qZWN0aW9uSW4gT0wgZmVhdHVyZSBwcm9qZWN0aW9uXG4gKiBAcGFyYW0gb2xMYXllciBPTCBMYXllclxuICogQHBhcmFtIHByb2plY3Rpb25PdXQgRmVhdHVyZSBwcm9qZWN0aW9uXG4gKiBAcmV0dXJucyBGZWF0dXJlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZWF0dXJlRnJvbU9sKFxuICBvbEZlYXR1cmU6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PixcbiAgcHJvamVjdGlvbkluOiBzdHJpbmcsXG4gIG9sTGF5ZXI/OiBPbExheWVyPE9sU291cmNlPixcbiAgcHJvamVjdGlvbk91dCA9ICdFUFNHOjQzMjYnXG4pOiBGZWF0dXJlIHtcbiAgbGV0IHRpdGxlO1xuICBsZXQgZXhjbHVkZTtcbiAgbGV0IGV4Y2x1ZGVPZmZsaW5lO1xuICBsZXQgaWRDb2x1bW47IC8vIGZvciBhcmNnaXNyZXN0IGFuZCB0aWxlYXJjZ2lzcmVzdCBzb3VyY2VcbiAgY29uc3Qgb2xGb3JtYXQgPSBuZXcgT2xGb3JtYXRHZW9KU09OKCk7XG5cbiAgY29uc3Qga2V5cyA9IG9sRmVhdHVyZS5nZXRLZXlzKCkuZmlsdGVyKChrZXk6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAha2V5LnN0YXJ0c1dpdGgoJ18nKSAmJiBrZXkgIT09ICdnZW9tZXRyeSc7XG4gIH0pO1xuICBjb25zdCBwcm9wZXJ0aWVzID0ga2V5cy5yZWR1Y2UoKGFjYzogb2JqZWN0LCBrZXk6IHN0cmluZykgPT4ge1xuICAgIGFjY1trZXldID0gb2xGZWF0dXJlLmdldChrZXkpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICBjb25zdCBnZW9tZXRyeSA9IG9sRm9ybWF0LndyaXRlR2VvbWV0cnlPYmplY3Qob2xGZWF0dXJlLmdldEdlb21ldHJ5KCksIHtcbiAgICBkYXRhUHJvamVjdGlvbjogcHJvamVjdGlvbk91dCxcbiAgICBmZWF0dXJlUHJvamVjdGlvbjogcHJvamVjdGlvbkluXG4gIH0pIGFzIEZlYXR1cmVHZW9tZXRyeTtcblxuICBpZiAob2xMYXllcikge1xuICAgIHRpdGxlID0gb2xMYXllci5nZXQoJ3RpdGxlJyk7XG4gICAgY29uc3Qgc291cmNlT3B0aW9ucyA9IG9sTGF5ZXIuZ2V0KCdzb3VyY2VPcHRpb25zJyk7XG4gICAgaWYgKHNvdXJjZU9wdGlvbnMpIHtcbiAgICAgIGV4Y2x1ZGUgPSBzb3VyY2VPcHRpb25zLmV4Y2x1ZGVBdHRyaWJ1dGU7XG4gICAgICBleGNsdWRlT2ZmbGluZSA9IHNvdXJjZU9wdGlvbnMuZXhjbHVkZUF0dHJpYnV0ZU9mZmxpbmU7XG4gICAgICBpZENvbHVtbiA9XG4gICAgICAgIHNvdXJjZU9wdGlvbnMuaWRDb2x1bW4gfHxcbiAgICAgICAgKChzb3VyY2VPcHRpb25zLnR5cGUgPT09ICdhcmNnaXNyZXN0JyB8fCBzb3VyY2VPcHRpb25zLnR5cGUgPT09ICd0aWxlYXJjZ2lzcmVzdCcpID8gJ09CSkVDVElEJyA6IHVuZGVmaW5lZCApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aXRsZSA9IG9sRmVhdHVyZS5nZXQoJ190aXRsZScpO1xuICB9XG4gIGNvbnN0IG1hcFRpdGxlID0gb2xGZWF0dXJlLmdldCgnX21hcFRpdGxlJyk7XG4gIGNvbnN0IGlkID0gb2xGZWF0dXJlLmdldElkKCkgPyBvbEZlYXR1cmUuZ2V0SWQoKSA6IG9sRmVhdHVyZS5nZXQoaWRDb2x1bW4pID8gb2xGZWF0dXJlLmdldChpZENvbHVtbikgOiB1dWlkKCk7XG4gIGNvbnN0IG5ld0ZlYXR1cmUgPSBvbEZlYXR1cmUuZ2V0KCdfbmV3RmVhdHVyZScpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVBVFVSRSxcbiAgICBwcm9qZWN0aW9uOiBwcm9qZWN0aW9uT3V0LFxuICAgIGV4dGVudDogb2xGZWF0dXJlLmdldCgnX2V4dGVudCcpLFxuICAgIG1ldGE6IHtcbiAgICAgIGlkLFxuICAgICAgdGl0bGU6IHRpdGxlID8gdGl0bGUgOiBtYXBUaXRsZSA/IG1hcFRpdGxlIDogaWQsXG4gICAgICBtYXBUaXRsZSxcbiAgICAgIHJldmlzaW9uOiBvbEZlYXR1cmUuZ2V0UmV2aXNpb24oKSxcbiAgICAgIHN0eWxlOiBvbEZlYXR1cmUuZ2V0KCdfc3R5bGUnKSxcbiAgICAgIGV4Y2x1ZGVBdHRyaWJ1dGU6IGV4Y2x1ZGUsXG4gICAgICBleGNsdWRlQXR0cmlidXRlT2ZmbGluZTogZXhjbHVkZU9mZmxpbmVcbiAgICB9LFxuICAgIHByb3BlcnRpZXMsXG4gICAgZ2VvbWV0cnksXG4gICAgb2w6IG9sRmVhdHVyZVxuICB9O1xufVxuXG4vKipcbiAqIENvbXB1dGUgYW4gT0wgZmVhdHVyZSBleHRlbnQgaW4gaXQncyBtYXAgcHJvamVjdGlvblxuICogQHBhcmFtIG1hcCBNYXBcbiAqIEBwYXJhbSBvbEZlYXR1cmUgT0wgZmVhdHVyZVxuICogQHJldHVybnMgRXh0ZW50IGluIHRoZSBtYXAgcHJvamVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZU9sRmVhdHVyZUV4dGVudChcbiAgbWFwOiBJZ29NYXAsXG4gIG9sRmVhdHVyZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+XG4pOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGxldCBvbEV4dGVudCA9IG9sZXh0ZW50LmNyZWF0ZUVtcHR5KCk7XG5cbiAgY29uc3Qgb2xGZWF0dXJlRXh0ZW50ID0gb2xGZWF0dXJlLmdldCgnX2V4dGVudCcpO1xuICBjb25zdCBvbEZlYXR1cmVQcm9qZWN0aW9uID0gb2xGZWF0dXJlLmdldCgnX3Byb2plY3Rpb24nKTtcbiAgaWYgKG9sRmVhdHVyZUV4dGVudCAhPT0gdW5kZWZpbmVkICYmIG9sRmVhdHVyZVByb2plY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIG9sRXh0ZW50ID0gb2xwcm9qLnRyYW5zZm9ybUV4dGVudChcbiAgICAgIG9sRmVhdHVyZUV4dGVudCxcbiAgICAgIG9sRmVhdHVyZVByb2plY3Rpb24sXG4gICAgICBtYXAucHJvamVjdGlvblxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb2xHZW9tZXRyeSA9IG9sRmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgIGlmIChvbEdlb21ldHJ5ICE9PSBudWxsKSB7XG4gICAgICBvbEV4dGVudCA9IG9sR2VvbWV0cnkuZ2V0RXh0ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9sRXh0ZW50IGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufVxuXG4vKipcbiAqIENvbXB1dGUgYSBtdWx0aXBsZSBPTCBmZWF0dXJlcyBleHRlbnQgaW4gdGhlaXIgbWFwIHByb2plY3Rpb25cbiAqIEBwYXJhbSBtYXAgTWFwXG4gKiBAcGFyYW0gb2xGZWF0dXJlcyBPTCBmZWF0dXJlc1xuICogQHJldHVybnMgRXh0ZW50IGluIHRoZSBtYXAgcHJvamVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZU9sRmVhdHVyZXNFeHRlbnQoXG4gIG1hcDogSWdvTWFwLFxuICBvbEZlYXR1cmVzOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT5bXVxuKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBleHRlbnQgPSBvbGV4dGVudC5jcmVhdGVFbXB0eSgpO1xuXG4gIG9sRmVhdHVyZXMuZm9yRWFjaCgob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pID0+IHtcbiAgICBjb25zdCBmZWF0dXJlRXh0ZW50ID0gY29tcHV0ZU9sRmVhdHVyZUV4dGVudChtYXAsIG9sRmVhdHVyZSk7XG4gICAgb2xleHRlbnQuZXh0ZW5kKGV4dGVudCwgZmVhdHVyZUV4dGVudCk7XG4gIH0pO1xuXG4gIHJldHVybiBleHRlbnQgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59XG5cbi8qKlxuICogU2NhbGUgYW4gZXh0ZW50LlxuICogQHBhcmFtIGV4dGVudCBFeHRlbnRcbiAqIEBwYXJhbSBTY2FsaW5nIGZhY3RvcnMgZm9yIHRvcCwgcmlnaHQsIGJvdHRvbSBhbmQgbGVmdCBkaXJlY3Rpb25zLCBpbiB0aGF0IG9yZGVyXG4gKiBAcmV0dXJucyBTY2FsZWQgZXh0ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUV4dGVudChcbiAgZXh0ZW50OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcbiAgc2NhbGU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdXG4pOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG9sZXh0ZW50LmdldFNpemUoZXh0ZW50KTtcbiAgcmV0dXJuIFtcbiAgICBzY2FsZVszXSA/IGV4dGVudFswXSAtIHdpZHRoICogc2NhbGVbM10gOiBleHRlbnRbMF0sXG4gICAgc2NhbGVbMl0gPyBleHRlbnRbMV0gLSBoZWlnaHQgKiBzY2FsZVsyXSA6IGV4dGVudFsxXSxcbiAgICBzY2FsZVsxXSA/IGV4dGVudFsyXSArIHdpZHRoICogc2NhbGVbMV0gOiBleHRlbnRbMl0sXG4gICAgc2NhbGVbMF0gPyBleHRlbnRbM10gKyBoZWlnaHQgKiBzY2FsZVswXSA6IGV4dGVudFszXVxuICBdO1xufVxuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIGZlYXR1cmVzIGFyZSBvdXQgb2Ygdmlldy5cbiAqIElmIGZlYXR1cmVzIGFyZSB0b28gY2xvc2UgdG8gdGhlIGVkZ2UsIHRoZXkgYXJlIGNvbnNpZGVyZWQgb3V0IG9mIHZpZXcuXG4gKiBXZSBkZWZpbmUgdGhlIGVkZ2UgYXMgNSUgb2YgdGhlIGV4dGVudCBzaXplLlxuICogQHBhcmFtIG1hcCBNYXBcbiAqIEBwYXJhbSBmZWF0dXJlc0V4dGVudCBUaGUgZmVhdHVyZXMncyBleHRlbnRcbiAqIEByZXR1cm5zIFJldHVybiB0cnVlIGlmIGZlYXR1cmVzIGFyZSBvdXQgb2Ygdmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmVhdHVyZXNBcmVPdXRPZlZpZXcoXG4gIG1hcDogSWdvTWFwLFxuICBmZWF0dXJlc0V4dGVudDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl1cbikge1xuICBjb25zdCBtYXBFeHRlbnQgPSBtYXAudmlld0NvbnRyb2xsZXIuZ2V0RXh0ZW50KCk7XG4gIGNvbnN0IGVkZ2VSYXRpbyA9IDAuMDU7XG4gIGNvbnN0IHNjYWxlID0gWy0xLCAtMSwgLTEsIC0xXS5tYXAoeCA9PiB4ICogZWRnZVJhdGlvKTtcbiAgY29uc3Qgdmlld0V4dGVudCA9IHNjYWxlRXh0ZW50KG1hcEV4dGVudCwgc2NhbGUgYXMgW1xuICAgIG51bWJlcixcbiAgICBudW1iZXIsXG4gICAgbnVtYmVyLFxuICAgIG51bWJlclxuICBdKTtcblxuICByZXR1cm4gIW9sZXh0ZW50LmNvbnRhaW5zRXh0ZW50KHZpZXdFeHRlbnQsIGZlYXR1cmVzRXh0ZW50KTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiBmZWF0dXJlcyBhcmUgdG9vIGRlZXAgaW50byB0aGUgdmlldy4gVGhpcyByZXN1bHRzXG4gKiBpbiBmZWF0dXJlcyBiZWluZyB0b28gc21hbGwuXG4gKiBGZWF0dXJlcyBhcmUgY29uc2lkZXJlZCB0b28gc21hbGwgaWYgdGhlaXIgZXh0ZW50IG9jY3VwaWVzIGxlc3MgdGhhblxuICogMSUgb2YgdGhlIG1hcCBleHRlbnQuXG4gKiBAcGFyYW0gbWFwIE1hcFxuICogQHBhcmFtIGZlYXR1cmVzRXh0ZW50IFRoZSBmZWF0dXJlcydzIGV4dGVudFxuICogQHBhcmFtIGFyZWFSYXRpbyBUaGUgZmVhdHVyZXMgZXh0ZW50IHRvIHZpZXcgZXh0ZW50IGFjY2VwdGFibGUgcmF0aW9cbiAqIEByZXR1cm5zIFJldHVybiB0cnVlIGlmIGZlYXR1cmVzIGFyZSB0b28gZGVlcCBpbiB0aGUgdmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmVhdHVyZXNBcmVUb29EZWVwSW5WaWV3KFxuICBtYXA6IElnb01hcCxcbiAgZmVhdHVyZXNFeHRlbnQ6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICBhcmVhUmF0aW8/OiBudW1iZXJcbikge1xuICAvLyBBbiBhcmVhIHJhdGlvIG9mIDAuMDA0IG1lYW5zIHRoYXQgdGhlIGZlYXR1cmUgZXh0ZW50J3Mgd2lkdGggYW5kIGhlaWdodFxuICAvLyBzaG91bGQgYmUgYWJvdXQgMS8xNiBvZiB0aGUgbWFwIGV4dGVudCdzIHdpZHRoIGFuZCBoZWlnaHRcbiAgYXJlYVJhdGlvID0gYXJlYVJhdGlvID8gYXJlYVJhdGlvIDogMC4wMDQ7XG4gIGNvbnN0IG1hcEV4dGVudCA9IG1hcC52aWV3Q29udHJvbGxlci5nZXRFeHRlbnQoKTtcbiAgY29uc3QgbWFwRXh0ZW50QXJlYSA9IG9sZXh0ZW50LmdldEFyZWEobWFwRXh0ZW50KTtcbiAgY29uc3QgZmVhdHVyZXNFeHRlbnRBcmVhID0gb2xleHRlbnQuZ2V0QXJlYShmZWF0dXJlc0V4dGVudCk7XG5cbiAgaWYgKGZlYXR1cmVzRXh0ZW50QXJlYSA9PT0gMCAmJiBtYXAudmlld0NvbnRyb2xsZXIuZ2V0Wm9vbSgpID4gMTMpIHtcbiAgICAvLyBJbiBjYXNlIGl0J3MgYSBwb2ludFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmZWF0dXJlc0V4dGVudEFyZWEgLyBtYXBFeHRlbnRBcmVhIDwgYXJlYVJhdGlvO1xufVxuXG4vKipcbiAqIEZpdCB2aWV3IHRvIGluY2x1ZGUgdGhlIGZlYXR1cmVzIGV4dGVudC5cbiAqIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIHdpbGwgbGV0IHRoZSBmZWF0dXJlcyBvY2N1cHkgYWJvdXQgNTAlIG9mIHRoZSB2aWV3cG9ydC5cbiAqIEBwYXJhbSBtYXAgTWFwXG4gKiBAcGFyYW0gb2xGZWF0dXJlcyBPTCBmZWF0dXJlc1xuICogQHBhcmFtIG1vdGlvbiBUbyBtb3Rpb24gdG8gdGhlIG5ldyBtYXAgdmlld1xuICogQHBhcmFtIHNjYWxlIElmIHRoaXMgaXMgZGVmaW5lZCwgdGhlIG9yaWdpbmFsIHZpZXcgd2lsbCBiZSBzY2FsZWRcbiAqICBieSB0aGF0IGZhY3RvciBiZWZvcmUgYW55IGxvZ2ljIGlzIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVG9PbEZlYXR1cmVzKFxuICBtYXA6IElnb01hcCxcbiAgb2xGZWF0dXJlczogT2xGZWF0dXJlPE9sR2VvbWV0cnk+W10sXG4gIG1vdGlvbjogRmVhdHVyZU1vdGlvbiA9IEZlYXR1cmVNb3Rpb24uRGVmYXVsdCxcbiAgc2NhbGU/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcbiAgYXJlYVJhdGlvPzogbnVtYmVyXG4pIHtcbiAgY29uc3QgZmVhdHVyZXNFeHRlbnQgPSBjb21wdXRlT2xGZWF0dXJlc0V4dGVudChtYXAsIG9sRmVhdHVyZXMpO1xuICBsZXQgdmlld0V4dGVudCA9IGZlYXR1cmVzRXh0ZW50O1xuICBpZiAoc2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHZpZXdFeHRlbnQgPSBzY2FsZUV4dGVudCh2aWV3RXh0ZW50LCBzY2FsZSk7XG4gIH1cblxuICBpZiAobW90aW9uID09PSBGZWF0dXJlTW90aW9uLlpvb20pIHtcbiAgICBtYXAudmlld0NvbnRyb2xsZXIuem9vbVRvRXh0ZW50KHZpZXdFeHRlbnQpO1xuICB9IGVsc2UgaWYgKG1vdGlvbiA9PT0gRmVhdHVyZU1vdGlvbi5Nb3ZlKSB7XG4gICAgbWFwLnZpZXdDb250cm9sbGVyLm1vdmVUb0V4dGVudCh2aWV3RXh0ZW50KTtcbiAgfSBlbHNlIGlmIChtb3Rpb24gPT09IEZlYXR1cmVNb3Rpb24uRGVmYXVsdCkge1xuICAgIGlmIChcbiAgICAgIGZlYXR1cmVzQXJlT3V0T2ZWaWV3KG1hcCwgZmVhdHVyZXNFeHRlbnQpIHx8XG4gICAgICBmZWF0dXJlc0FyZVRvb0RlZXBJblZpZXcobWFwLCBmZWF0dXJlc0V4dGVudCwgYXJlYVJhdGlvKVxuICAgICkge1xuICAgICAgbWFwLnZpZXdDb250cm9sbGVyLnpvb21Ub0V4dGVudCh2aWV3RXh0ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBIaWRlIGFuIE9MIGZlYXR1cmVcbiAqIEBwYXJhbSBvbEZlYXR1cmUgT0wgZmVhdHVyZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGlkZU9sRmVhdHVyZShvbEZlYXR1cmU6IE9sRmVhdHVyZTxPbEdlb21ldHJ5Pikge1xuICBvbEZlYXR1cmUuc2V0U3R5bGUobmV3IG9sc3R5bGUuU3R5bGUoe30pKTtcbn1cblxuLyoqXG4gKiBUcnkgdG8gYmluZCBhIGxheWVyIHRvIGEgc3RvcmUgaWYgbm9uZSBpcyBib3VuZCBhbHJlYWR5LlxuICogVGhlIGxheWVyIHdpbGwgYWxzbyBiZSBhZGRlZCB0byB0aGUgc3RvcmUncyBtYXAuXG4gKiBJZiBubyBsYXllciBpcyBnaXZlbiB0byB0aGF0IGZ1bmN0aW9uLCBhIGJhc2ljIG9uZSB3aWxsIGJlIGNyZWF0ZWQuXG4gKiBAcGFyYW0gc3RvcmUgVGhlIHN0b3JlIHRvIGJpbmQgdGhlIGxheWVyXG4gKiBAcGFyYW0gbGF5ZXIgQW4gb3B0aW9uYWwgVmVjdG9yTGF5ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyeUJpbmRTdG9yZUxheWVyKHN0b3JlOiBGZWF0dXJlU3RvcmUsIGxheWVyPzogVmVjdG9yTGF5ZXIpIHtcbiAgaWYgKHN0b3JlLmxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoc3RvcmUubGF5ZXIubWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0b3JlLm1hcC5hZGRMYXllcihzdG9yZS5sYXllcik7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxheWVyID0gbGF5ZXJcbiAgICA/IGxheWVyXG4gICAgOiBuZXcgVmVjdG9yTGF5ZXIoe1xuICAgICAgICBzb3VyY2U6IG5ldyBGZWF0dXJlRGF0YVNvdXJjZSgpXG4gICAgICB9KTtcbiAgc3RvcmUuYmluZExheWVyKGxheWVyKTtcbiAgaWYgKHN0b3JlLmxheWVyLm1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RvcmUubWFwLmFkZExheWVyKHN0b3JlLmxheWVyKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXB1dGUgYSBkaWZmIGJldHdlZW4gYSBzb3VyY2UgYXJyYXkgb2YgT2wgZmVhdHVyZXMgYW5kIGEgdGFyZ2V0IGFycmF5XG4gKiBAcGFyYW0gc291cmNlIFNvdXJjZSBhcnJheSBvZiBPTCBmZWF0dXJlc1xuICogQHBhcmFtIHN0YXJnZXQgVGFyZ2V0IGFycmF5IG9mIE9MIGZlYXR1cmVzXG4gKiBAcmV0dXJucyBGZWF0dXJlcyB0byBhZGQgYW5kIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZU9sRmVhdHVyZXNEaWZmKFxuICBzb3VyY2U6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdLFxuICB0YXJnZXQ6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdXG4pOiB7XG4gIGFkZDogT2xGZWF0dXJlPE9sR2VvbWV0cnk+W107XG4gIHJlbW92ZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+W107XG59IHtcbiAgY29uc3Qgb2xGZWF0dXJlc01hcCA9IG5ldyBNYXAoKTtcbiAgdGFyZ2V0LmZvckVhY2goKG9sRmVhdHVyZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+KSA9PiB7XG4gICAgb2xGZWF0dXJlc01hcC5zZXQob2xGZWF0dXJlLmdldElkKCksIG9sRmVhdHVyZSk7XG4gIH0pO1xuXG4gIGNvbnN0IG9sRmVhdHVyZXNUb1JlbW92ZSA9IFtdO1xuICBzb3VyY2UuZm9yRWFjaCgob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pID0+IHtcbiAgICBjb25zdCBuZXdPbEZlYXR1cmUgPSBvbEZlYXR1cmVzTWFwLmdldChvbEZlYXR1cmUuZ2V0SWQoKSk7XG4gICAgaWYgKG5ld09sRmVhdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvbEZlYXR1cmVzVG9SZW1vdmUucHVzaChvbEZlYXR1cmUpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBuZXdPbEZlYXR1cmUuZ2V0KCdfZW50aXR5UmV2aXNpb24nKSAhPT0gb2xGZWF0dXJlLmdldCgnX2VudGl0eVJldmlzaW9uJylcbiAgICApIHtcbiAgICAgIG9sRmVhdHVyZXNUb1JlbW92ZS5wdXNoKG9sRmVhdHVyZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sRmVhdHVyZXNNYXAuZGVsZXRlKG5ld09sRmVhdHVyZS5nZXRJZCgpKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG9sRmVhdHVyZXNUb0FkZElkcyA9IEFycmF5LmZyb20ob2xGZWF0dXJlc01hcC5rZXlzKCkpO1xuICBjb25zdCBvbEZlYXR1cmVzVG9BZGQgPSB0YXJnZXQuZmlsdGVyKChvbEZlYXR1cmU6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PikgPT4ge1xuICAgIHJldHVybiBvbEZlYXR1cmVzVG9BZGRJZHMuaW5kZXhPZihvbEZlYXR1cmUuZ2V0SWQoKSkgPj0gMDtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGQ6IG9sRmVhdHVyZXNUb0FkZCxcbiAgICByZW1vdmU6IG9sRmVhdHVyZXNUb1JlbW92ZVxuICB9O1xufVxuIl19