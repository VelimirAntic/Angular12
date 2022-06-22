import olFeature from 'ol/Feature';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { Feature } from '../feature/shared/feature.interfaces';
export interface FeatureCommonVectorStyleOptions extends CommonVectorStyleOptions {
    feature: Feature | olFeature<OlGeometry>;
}
export interface CommonVectorStyleOptions {
    markerColor?: string | number[];
    markerOpacity?: number;
    markerOutlineColor?: string | number[];
    fillColor?: string | number[];
    fillOpacity?: number;
    strokeColor?: string | number[];
    strokeOpacity?: number;
    strokeWidth?: number;
}
