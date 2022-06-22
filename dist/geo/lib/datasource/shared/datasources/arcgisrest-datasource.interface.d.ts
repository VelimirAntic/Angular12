import { FeatureDataSourceOptions } from './feature-datasource.interface';
export interface ArcGISRestDataSourceOptions extends FeatureDataSourceOptions {
    layer: string;
    legendInfo?: any;
    params?: ArcGISRestDataSourceOptionsParams;
    idColumn?: string;
}
export interface ArcGISRestDataSourceOptionsParams {
    customParams?: string[];
    style?: any;
    timefilter?: any;
    timeExtent?: string;
    attributions?: string | string[];
}
