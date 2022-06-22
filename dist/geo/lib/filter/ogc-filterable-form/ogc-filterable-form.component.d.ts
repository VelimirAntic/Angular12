import { OgcFilterableDataSource } from '../shared/ogc-filter.interface';
import { IgoMap } from '../../map';
import * as i0 from "@angular/core";
export declare class OgcFilterableFormComponent {
    datasource: OgcFilterableDataSource;
    map: IgoMap;
    refreshFilters: () => void;
    get refreshFunc(): () => void;
    get advancedOgcFilters(): boolean;
    get currentFilter(): any;
    color: string;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<OgcFilterableFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OgcFilterableFormComponent, "igo-ogc-filterable-form", never, { "datasource": "datasource"; "map": "map"; "refreshFilters": "refreshFilters"; }, {}, never, never>;
}
