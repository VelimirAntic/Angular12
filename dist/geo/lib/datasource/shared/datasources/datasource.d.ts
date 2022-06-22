import olSource from 'ol/source/Source';
import olVectorSource from 'ol/source/Vector';
import olClusterSource from 'ol/source/Cluster';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { DataSourceOptions, Legend } from './datasource.interface';
import { DataService } from './data.service';
import { LegendMapViewOptions, LegendOptions } from '../../../layer/shared/layers/layer.interface';
export declare abstract class DataSource {
    options: DataSourceOptions;
    protected dataService?: DataService;
    id: string;
    ol: olSource | olVectorSource<OlGeometry> | olClusterSource;
    private legend;
    constructor(options?: DataSourceOptions, dataService?: DataService);
    protected abstract createOlSource(): olSource;
    protected generateId(): string;
    getLegend(style?: string, view?: LegendMapViewOptions): Legend[];
    setLegend(options: LegendOptions): Legend[];
    protected abstract onUnwatch(): any;
}
