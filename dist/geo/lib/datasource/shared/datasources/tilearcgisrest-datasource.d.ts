import olSourceTileArcGISRest from 'ol/source/TileArcGISRest';
import { DataSource } from './datasource';
import { Legend } from './datasource.interface';
import { TileArcGISRestDataSourceOptions } from './tilearcgisrest-datasource.interface';
export declare class TileArcGISRestDataSource extends DataSource {
    ol: olSourceTileArcGISRest;
    options: TileArcGISRestDataSourceOptions;
    get params(): any;
    get queryTitle(): string;
    get mapLabel(): string;
    get queryHtmlTarget(): string;
    protected createOlSource(): olSourceTileArcGISRest;
    getLegend(): Legend[];
    onUnwatch(): void;
}
