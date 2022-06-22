import olSourceVector from 'ol/source/Vector';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { DataSource } from './datasource';
import { WFSDataSourceOptions } from './wfs-datasource.interface';
import { WFSService } from './wfs.service';
import { OgcFiltersOptions } from '../../../filter/shared/ogc-filter.interface';
import { BehaviorSubject } from 'rxjs';
import { AuthInterceptor } from '@igo2/auth';
export declare class WFSDataSource extends DataSource {
    options: WFSDataSourceOptions;
    protected wfsService: WFSService;
    private authInterceptor?;
    ol: olSourceVector<OlGeometry>;
    mostRecentIdCallOGCFilter: number;
    set ogcFilters(value: OgcFiltersOptions);
    get ogcFilters(): OgcFiltersOptions;
    readonly ogcFilters$: BehaviorSubject<OgcFiltersOptions>;
    constructor(options: WFSDataSourceOptions, wfsService: WFSService, authInterceptor?: AuthInterceptor);
    protected createOlSource(): olSourceVector<OlGeometry>;
    setOgcFilters(ogcFilters: OgcFiltersOptions, triggerEvent?: boolean): void;
    onUnwatch(): void;
}
