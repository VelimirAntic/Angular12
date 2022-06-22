import { Layer } from '../shared/layers/layer';
import { LegendMapViewOptions, OutputLayerLegend } from '../shared/layers/layer.interface';
/**
 * Get all the layers legend
 * @return Array of legend
 */
export declare function getLayersLegends(layers: Layer[], view?: LegendMapViewOptions): OutputLayerLegend[];
