import olSourceVector from 'ol/source/Vector';
import olSource from 'ol/source/Source';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { FeatureDataSourceOptions } from './feature-datasource.interface';
export interface WFSDataSourceOptions extends FeatureDataSourceOptions {
    params: WFSDataSourceOptionsParams;
    paramsWFS?: WFSDataSourceOptionsParams;
    urlWfs?: string;
    ol?: olSourceVector<OlGeometry> | olSource;
}
export interface WFSDataSourceOptionsParams {
    version?: string;
    featureTypes: string;
    fieldNameGeometry: string;
    maxFeatures?: number;
    outputFormat: string;
    outputFormatDownload?: string;
    srsName?: string;
    xmlFilter?: string;
}
