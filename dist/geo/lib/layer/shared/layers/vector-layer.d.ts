import olLayerVector from 'ol/layer/Vector';
import olSourceVector from 'ol/source/Vector';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { FeatureDataSource } from '../../../datasource/shared/datasources/feature-datasource';
import { WFSDataSource } from '../../../datasource/shared/datasources/wfs-datasource';
import { ArcGISRestDataSource } from '../../../datasource/shared/datasources/arcgisrest-datasource';
import { WebSocketDataSource } from '../../../datasource/shared/datasources/websocket-datasource';
import { ClusterDataSource } from '../../../datasource/shared/datasources/cluster-datasource';
import { IgoMap } from '../../../map';
import { Layer } from './layer';
import { VectorLayerOptions } from './vector-layer.interface';
import { AuthInterceptor } from '@igo2/auth';
import { MessageService } from '@igo2/core';
export declare class VectorLayer extends Layer {
    messageService?: MessageService;
    authInterceptor?: AuthInterceptor;
    dataSource: FeatureDataSource | WFSDataSource | ArcGISRestDataSource | WebSocketDataSource | ClusterDataSource;
    options: VectorLayerOptions;
    ol: olLayerVector<olSourceVector<OlGeometry>>;
    private watcher;
    private trackFeatureListenerId;
    get browsable(): boolean;
    get exportable(): boolean;
    constructor(options: VectorLayerOptions, messageService?: MessageService, authInterceptor?: AuthInterceptor);
    protected createOlLayer(): olLayerVector<olSourceVector<OlGeometry>>;
    protected flash(feature: any): void;
    setMap(map: IgoMap | undefined): void;
    onUnwatch(): void;
    stopAnimation(): void;
    enableTrackFeature(id: string | number): void;
    centerMapOnFeature(id: string | number): void;
    trackFeature(id: any, feat: any): void;
    disableTrackFeature(id?: string | number): void;
    /**
     * Custom loader for a WFS datasource
     * @internal
     * @param vectorSource the vector source to be created
     * @param options olOptions from source
     * @param interceptor the interceptor of the data
     * @param extent the extent of the requested data
     * @param resolution the current resolution
     * @param proj the projection to retrieve the data
     * @param success success callback
     * @param failure failure callback
     * @param randomParam random parameter to ensure cache is not causing problems in retrieving new data
     */
    customWFSLoader(vectorSource: any, options: any, interceptor: any, extent: any, resolution: any, proj: any, success: any, failure: any, randomParam?: boolean): void;
    /**
     * Custom loader to get feature from a WFS datasource
     * @internal
     * @param vectorSource the vector source to be created
     * @param interceptor the interceptor of the data
     * @param extent the extent of the requested data
     * @param dataProjection the projection of the retrieved data
     * @param featureProjection the projection of the created features
     * @param url the url string to retrieve the data
     * @param threshold the threshold to manage "more features" (TODO)
     * @param success success callback
     * @param failure failure callback
     */
    private getFeatures;
    /**
     * Custom loader for vector layer.
     * @internal
     * @param vectorSource the vector source to be created
     * @param url the url string or function to retrieve the data
     * @param interceptor the interceptor of the data
     * @param extent the extent of the requested data
     * @param resolution the current resolution
     * @param projection the projection to retrieve the data
     */
    private customLoader;
}
