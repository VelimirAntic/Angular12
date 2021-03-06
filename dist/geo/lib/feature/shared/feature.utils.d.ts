import OlFeature from 'ol/Feature';
import OlRenderFeature from 'ol/render/Feature';
import OlLayer from 'ol/layer/Layer';
import OlSource from 'ol/source/Source';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { EntityKey } from '@igo2/common';
import { IgoMap } from '../../map';
import { VectorLayer } from '../../layer/shared/layers/vector-layer';
import { FeatureMotion } from './feature.enums';
import { Feature } from './feature.interfaces';
import { FeatureStore } from './store';
/**
 * Create an Openlayers feature object out of a feature definition.
 * The output object has a reference to the feature id.
 * @param feature Feature definition
 * @param projectionOut Feature object projection
 * @returns OpenLayers feature object
 */
export declare function featureToOl(feature: Feature, projectionOut: string, getId?: (Feature: any) => EntityKey): OlFeature<OlGeometry>;
export declare function renderFeatureFromOl(olRenderFeature: OlRenderFeature, projectionIn: string, olLayer?: OlLayer<OlSource>, projectionOut?: string): Feature;
/**
 * Create a feature object out of an OL feature
 * The output object has a reference to the feature id.
 * @param olFeature OL Feature
 * @param projectionIn OL feature projection
 * @param olLayer OL Layer
 * @param projectionOut Feature projection
 * @returns Feature
 */
export declare function featureFromOl(olFeature: OlFeature<OlGeometry>, projectionIn: string, olLayer?: OlLayer<OlSource>, projectionOut?: string): Feature;
/**
 * Compute an OL feature extent in it's map projection
 * @param map Map
 * @param olFeature OL feature
 * @returns Extent in the map projection
 */
export declare function computeOlFeatureExtent(map: IgoMap, olFeature: OlFeature<OlGeometry>): [number, number, number, number];
/**
 * Compute a multiple OL features extent in their map projection
 * @param map Map
 * @param olFeatures OL features
 * @returns Extent in the map projection
 */
export declare function computeOlFeaturesExtent(map: IgoMap, olFeatures: OlFeature<OlGeometry>[]): [number, number, number, number];
/**
 * Scale an extent.
 * @param extent Extent
 * @param Scaling factors for top, right, bottom and left directions, in that order
 * @returns Scaled extent
 */
export declare function scaleExtent(extent: [number, number, number, number], scale: [number, number, number, number]): [number, number, number, number];
/**
 * Return true if features are out of view.
 * If features are too close to the edge, they are considered out of view.
 * We define the edge as 5% of the extent size.
 * @param map Map
 * @param featuresExtent The features's extent
 * @returns Return true if features are out of view
 */
export declare function featuresAreOutOfView(map: IgoMap, featuresExtent: [number, number, number, number]): boolean;
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
export declare function featuresAreTooDeepInView(map: IgoMap, featuresExtent: [number, number, number, number], areaRatio?: number): boolean;
/**
 * Fit view to include the features extent.
 * By default, this method will let the features occupy about 50% of the viewport.
 * @param map Map
 * @param olFeatures OL features
 * @param motion To motion to the new map view
 * @param scale If this is defined, the original view will be scaled
 *  by that factor before any logic is applied.
 */
export declare function moveToOlFeatures(map: IgoMap, olFeatures: OlFeature<OlGeometry>[], motion?: FeatureMotion, scale?: [number, number, number, number], areaRatio?: number): void;
/**
 * Hide an OL feature
 * @param olFeature OL feature
 */
export declare function hideOlFeature(olFeature: OlFeature<OlGeometry>): void;
/**
 * Try to bind a layer to a store if none is bound already.
 * The layer will also be added to the store's map.
 * If no layer is given to that function, a basic one will be created.
 * @param store The store to bind the layer
 * @param layer An optional VectorLayer
 */
export declare function tryBindStoreLayer(store: FeatureStore, layer?: VectorLayer): void;
/**
 * Compute a diff between a source array of Ol features and a target array
 * @param source Source array of OL features
 * @param starget Target array of OL features
 * @returns Features to add and remove
 */
export declare function computeOlFeaturesDiff(source: OlFeature<OlGeometry>[], target: OlFeature<OlGeometry>[]): {
    add: OlFeature<OlGeometry>[];
    remove: OlFeature<OlGeometry>[];
};
