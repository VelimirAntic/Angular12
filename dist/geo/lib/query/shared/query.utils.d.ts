import OlLayer from 'ol/layer/Layer';
import OlSource from 'ol/source/Source';
import { AnyLayer } from '../../layer/shared/layers/any-layer';
/**
 * Whether a layer is queryable
 * @param layer Layer
 * @returns True if the layer s squeryable
 */
export declare function layerIsQueryable(layer: AnyLayer): boolean;
/**
 * Whether an OL layer is queryable
 * @param layer Layer
 * @returns True if the ol layer is queryable
 */
export declare function olLayerIsQueryable(olLayer: OlLayer<OlSource>): boolean;
/**
 * Whether a layer's feature is queryable
 * @param layer Layer
 * @returns True if the layer's feature is queryable
 */
export declare function layerFeatureIsQueryable(layer: AnyLayer): boolean;
/**
 * Whether an OL Vector layer is queryable
 * @param layer Layer
 * @returns True if the ol vector layer is queryable
 */
export declare function olLayerFeatureIsQueryable(olLayer: OlLayer<OlSource>): boolean;
