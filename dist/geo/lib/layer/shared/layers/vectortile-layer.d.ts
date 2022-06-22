import olLayerVectorTile from 'ol/layer/VectorTile';
import { MVTDataSource } from '../../../datasource/shared/datasources/mvt-datasource';
import { Layer } from './layer';
import { VectorTileLayerOptions } from './vectortile-layer.interface';
import { AuthInterceptor } from '@igo2/auth';
import { IgoMap } from '../../../map';
import { MessageService } from '@igo2/core';
export declare class VectorTileLayer extends Layer {
    messageService?: MessageService;
    authInterceptor?: AuthInterceptor;
    dataSource: MVTDataSource;
    options: VectorTileLayerOptions;
    ol: olLayerVectorTile;
    private watcher;
    constructor(options: VectorTileLayerOptions, messageService?: MessageService, authInterceptor?: AuthInterceptor);
    protected createOlLayer(): olLayerVectorTile;
    /**
     * Custom loader for vector tile layer. Modified from the loadFeaturesXhr function in ol\featureloader.js
     * @internal
     * @param url the url string or function to retrieve the data
     * @param format the format of the tile
     * @param interceptor the interceptor of the data
     * @param success On success event action to trigger
     * @param failure On failure event action to trigger TODO
     */
    customLoader(url: any, format: any, interceptor: any, success: any, failure?: any): (extent: any, resolution: any, projection: any) => void;
    setMap(map: IgoMap | undefined): void;
}
