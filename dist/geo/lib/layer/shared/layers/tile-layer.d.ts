import olLayerTile from 'ol/layer/Tile';
import olSourceTile from 'ol/source/Tile';
import { IgoMap } from '../../../map';
import { OSMDataSource } from '../../../datasource/shared/datasources/osm-datasource';
import { WMTSDataSource } from '../../../datasource/shared/datasources/wmts-datasource';
import { XYZDataSource } from '../../../datasource/shared/datasources/xyz-datasource';
import { CartoDataSource } from '../../../datasource/shared/datasources/carto-datasource';
import { TileArcGISRestDataSource } from '../../../datasource/shared/datasources/tilearcgisrest-datasource';
import { TileDebugDataSource } from '../../../datasource/shared/datasources/tiledebug-datasource';
import { Layer } from './layer';
import { TileLayerOptions } from './tile-layer.interface';
import { MessageService } from '@igo2/core';
import { AuthInterceptor } from '@igo2/auth';
export declare class TileLayer extends Layer {
    messageService?: MessageService;
    authInterceptor?: AuthInterceptor;
    dataSource: OSMDataSource | WMTSDataSource | XYZDataSource | TileDebugDataSource | CartoDataSource | TileArcGISRestDataSource;
    options: TileLayerOptions;
    ol: olLayerTile<olSourceTile>;
    private watcher;
    constructor(options: TileLayerOptions, messageService?: MessageService, authInterceptor?: AuthInterceptor);
    protected createOlLayer(): olLayerTile<olSourceTile>;
    /**
     * Custom loader for tile layer.
     * @internal
     * @param tile the current tile
     * @param url the url string or function to retrieve the data
     */
    customLoader(tile: any, url: string, interceptor: AuthInterceptor): void;
    setMap(map: IgoMap | undefined): void;
}
