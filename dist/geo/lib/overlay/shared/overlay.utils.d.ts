import * as olstyle from 'ol/style';
import { VectorLayer } from '../../layer/shared/layers/vector-layer';
/**
 * Create an overlay layer and it's source
 * @returns Overlay layer
 */
export declare function createOverlayLayer(): VectorLayer;
/**
 * Create a basic style for lines and polygons
 * @returns Style
 */
export declare function createOverlayDefaultStyle({ text, strokeWidth, fillColor, strokeColor, }?: {
    text?: string;
    strokeWidth?: number;
    fillColor?: string | number[];
    strokeColor?: string | number[];
}): olstyle.Style;
