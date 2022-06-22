import ImageArcGISRest from 'ol/source/ImageArcGISRest';
import { DataSource } from './datasource';
import { Legend } from './datasource.interface';
import { ArcGISRestImageDataSourceOptions } from './imagearcgisrest-datasource.interface';
export declare class ImageArcGISRestDataSource extends DataSource {
    ol: ImageArcGISRest;
    options: ArcGISRestImageDataSourceOptions;
    get params(): any;
    get queryTitle(): string;
    get mapLabel(): string;
    get queryHtmlTarget(): string;
    protected createOlSource(): ImageArcGISRest;
    getLegend(): Legend[];
    onUnwatch(): void;
}
