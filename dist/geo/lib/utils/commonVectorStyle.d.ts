import * as olstyle from 'ol/style';
import { FeatureCommonVectorStyleOptions } from './commonVectorStyle.interface';
/**
 * Generate a style for selected features
 * @param feature The feature to generate the style
 * @returns A olStyle
 */
export declare function getCommonVectorSelectedStyle({ feature, markerColor, markerOpacity, markerOutlineColor, fillColor, fillOpacity, strokeColor, strokeOpacity, strokeWidth }: FeatureCommonVectorStyleOptions): olstyle.Style;
/**
 * Generate a basic style for features
 * @param feature The feature to generate the style
 * @returns A olStyle
 */
export declare function getCommonVectorStyle({ feature, markerColor, markerOpacity, markerOutlineColor, fillColor, fillOpacity, strokeColor, strokeOpacity, strokeWidth }: FeatureCommonVectorStyleOptions): olstyle.Style;
