import olProjection from 'ol/proj/Projection';
import { IgoOgcFilterObject, OgcInterfaceFilterOptions, OgcFilterableDataSourceOptions, OgcFiltersOptions } from './ogc-filter.interface';
import { OgcFilterOperatorType } from './ogc-filter.enum';
import { SourceFieldsOptionsParams } from '../../datasource/shared/datasources/datasource.interface';
export declare class OgcFilterWriter {
    private filterSequence;
    operators: {
        [x: string]: {
            spatial: boolean;
            fieldRestrict: string[];
        };
    };
    defineOgcFiltersDefaultOptions(ogcFiltersOptions: OgcFiltersOptions, fieldNameGeometry: string, srcType?: string): OgcFiltersOptions;
    buildFilter(filters?: IgoOgcFilterObject, extent?: [number, number, number, number], proj?: olProjection, fieldNameGeometry?: string, options?: OgcFilterableDataSourceOptions): string;
    private bundleFilter;
    private createFilter;
    defineInterfaceFilterSequence(filterObject: any, geometryName: any, logical?: string, level?: number): OgcInterfaceFilterOptions[];
    computeAllowedOperators(fields?: SourceFieldsOptionsParams[], propertyName?: string, defaultOperatorsType?: OgcFilterOperatorType): {};
    addInterfaceFilter(igoOgcFilterObject?: any, geometryName?: any, level?: number, parentLogical?: string): OgcInterfaceFilterOptions;
    checkIgoFiltersProperties(filterObject: any, fieldNameGeometry: any, proj: olProjection, active?: boolean): any;
    private addFilterProperties;
    rebuiltIgoOgcFilterObjectFromSequence(sequence: OgcInterfaceFilterOptions[]): IgoOgcFilterObject;
    private computeIgoSelector;
    handleOgcFiltersAppliedValue(options: OgcFilterableDataSourceOptions, fieldNameGeometry: string, extent?: [number, number, number, number], proj?: olProjection): string;
    verifyMultipleEnableds(selectors: any): any;
    formatGroupAndFilter(ogcFilters: OgcFiltersOptions, selectors: any): any[];
    formatProcessedOgcFilter(processedFilter: string, layersOrTypenames: string): string;
    parseFilterOptionDate(value: string, defaultValue?: string): string;
}
