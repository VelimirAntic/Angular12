import { ArcGISRestDataSourceOptions } from './../datasource/shared/datasources/arcgisrest-datasource.interface';
import { AnyDataSourceOptions } from '../datasource/shared/datasources/any-datasource.interface';
import { DataSourceOptions } from '../datasource/shared/datasources/datasource.interface';
import { WMSDataSourceOptions } from '../datasource/shared/datasources/wms-datasource.interface';
import { WMTSDataSourceOptions } from '../datasource/shared/datasources/wmts-datasource.interface';
import { WFSDataSourceOptions } from '../datasource';
/**
 * Generate a id from it's datasource options.
 * @param options Data source options
 * @returns A id
 */
export declare function generateIdFromSourceOptions(options: DataSourceOptions): string;
/**
 * Generate a id from WMS data source options
 * @param options WMS data source options
 * @returns A md5 hash of the the url and layers
 */
export declare function generateWMSIdFromSourceOptions(options: WMSDataSourceOptions): string;
/**
 * Generate a id from WMTS data source options
 * @param options WMTS data source options
 * @returns A md5 hash of the the url and layer
 */
export declare function generateWMTSIdFromSourceOptions(options: WMTSDataSourceOptions): string;
/**
 * Generate a id from XYZ data source options
 * @param options XYZ data source options
 * @returns A md5 hash of the the url and layer
 */
export declare function generateXYZIdFromSourceOptions(options: WMTSDataSourceOptions): string;
/**
 * Generate a id from feature data source options
 * @param options XYZ data source options
 * @returns A md5 hash of the the url and layer
 */
export declare function generateFeatureIdFromSourceOptions(options: WMTSDataSourceOptions): string;
/**
 * Generate a id from feature data source options
 * @param options XYZ data source options
 * @returns A md5 hash of the the url and layer
 */
export declare function generateWfsIdFromSourceOptions(options: WFSDataSourceOptions): string;
/**
 * Generate a id from ArcGIS Rest data source options
 * @param options ArcGIS Rest data source options
 * @returns A md5 hash of the url and layers
 */
export declare function generateArcgisRestIdFromSourceOptions(options: ArcGISRestDataSourceOptions): string;
/**
 * Generate a unique id
 * @returns A uuid
 */
export declare function generateId(_options: AnyDataSourceOptions): string;
export declare function standardizeUrl(url: string): string;
