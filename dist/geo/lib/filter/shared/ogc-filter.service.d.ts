import { WMSDataSource } from '../../datasource/shared/datasources/wms-datasource';
import { OgcFilterableDataSource } from './ogc-filter.interface';
import * as i0 from "@angular/core";
export declare class OGCFilterService {
    constructor();
    filterByOgc(wmsDatasource: WMSDataSource, filterString: string): void;
    setOgcWFSFiltersOptions(wfsDatasource: OgcFilterableDataSource): void;
    setOgcWMSFiltersOptions(wmsDatasource: OgcFilterableDataSource): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OGCFilterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OGCFilterService>;
}
