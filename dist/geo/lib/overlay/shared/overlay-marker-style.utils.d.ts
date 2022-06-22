import * as olstyle from 'ol/style';
/**
 * Create a marker style for points
 * @returns Style
 */
export declare function createOverlayMarkerStyle({ text, opacity, markerColor, markerOutlineColor }?: {
    text?: string;
    opacity?: number;
    markerColor?: string | number[];
    markerOutlineColor?: string | number[];
}): olstyle.Style;
