import { WMSDataSource } from '../../datasource/shared/datasources/wms-datasource';
import { TileArcGISRestDataSource } from '../../datasource/shared/datasources/tilearcgisrest-datasource';
import * as i0 from "@angular/core";
export declare class TimeFilterService {
    constructor();
    filterByDate(datasource: WMSDataSource | TileArcGISRestDataSource, date: Date | [Date, Date]): void;
    filterByYear(datasource: WMSDataSource | TileArcGISRestDataSource, year: string | [string, string]): void;
    private reformatDateTime;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeFilterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TimeFilterService>;
}
