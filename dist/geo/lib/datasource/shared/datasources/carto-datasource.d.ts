import olSourceCarto from 'ol/source/CartoDB';
import { DataSource } from './datasource';
import { Legend } from './datasource.interface';
import { CartoDataSourceOptions } from './carto-datasource.interface';
export declare class CartoDataSource extends DataSource {
    ol: olSourceCarto;
    options: CartoDataSourceOptions;
    get params(): any;
    get queryTitle(): string;
    get mapLabel(): string;
    get queryHtmlTarget(): string;
    protected createOlSource(): olSourceCarto;
    getLegend(): Legend[];
    onUnwatch(): void;
}
