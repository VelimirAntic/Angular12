import olSourceVector from 'ol/source/Vector';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { DataSource } from './datasource';
import { FeatureDataSourceOptions } from './feature-datasource.interface';
export declare class FeatureDataSource extends DataSource {
    options: FeatureDataSourceOptions;
    ol: olSourceVector<OlGeometry>;
    protected createOlSource(): olSourceVector<OlGeometry>;
    protected getSourceFormatFromOptions(options: FeatureDataSourceOptions): any;
    onUnwatch(): void;
    get queryTitle(): string;
}
