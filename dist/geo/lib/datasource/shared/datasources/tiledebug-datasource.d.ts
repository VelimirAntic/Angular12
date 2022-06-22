import TileDebug from 'ol/source/TileDebug';
import { DataSource } from './datasource';
import { TileDebugDataSourceOptions } from './tiledebug-datasource.interface';
export declare class TileDebugDataSource extends DataSource {
    options: TileDebugDataSourceOptions;
    ol: TileDebug;
    protected createOlSource(): TileDebug;
    onUnwatch(): void;
}
