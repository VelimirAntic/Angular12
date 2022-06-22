import olSourceVector from 'ol/source/Vector';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { DataSource } from './datasource';
import { Legend } from './datasource.interface';
import { ArcGISRestDataSourceOptions } from './arcgisrest-datasource.interface';
export declare class ArcGISRestDataSource extends DataSource {
    ol: olSourceVector<OlGeometry>;
    options: ArcGISRestDataSourceOptions;
    protected createOlSource(): olSourceVector<OlGeometry>;
    getLegend(): Legend[];
    htmlImgSrc(contentType: string, imageData: string): string;
    createSVG(symbol: any): string;
    onUnwatch(): void;
}
