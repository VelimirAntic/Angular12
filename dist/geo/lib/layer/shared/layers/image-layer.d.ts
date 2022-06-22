import olLayerImage from 'ol/layer/Image';
import olSourceImage from 'ol/source/Image';
import { AuthInterceptor } from '@igo2/auth';
import { IgoMap } from '../../../map';
import { WMSDataSource } from '../../../datasource/shared/datasources/wms-datasource';
import { Layer } from './layer';
import { ImageLayerOptions } from './image-layer.interface';
import { ImageArcGISRestDataSource } from '../../../datasource/shared/datasources/imagearcgisrest-datasource';
import { LanguageService, MessageService } from '@igo2/core';
export declare class ImageLayer extends Layer {
    messageService: MessageService;
    private languageService;
    authInterceptor?: AuthInterceptor;
    dataSource: WMSDataSource | ImageArcGISRestDataSource;
    options: ImageLayerOptions;
    ol: olLayerImage<olSourceImage>;
    private watcher;
    constructor(options: ImageLayerOptions, messageService: MessageService, languageService: LanguageService, authInterceptor?: AuthInterceptor);
    protected createOlLayer(): olLayerImage<olSourceImage>;
    setMap(map: IgoMap | undefined): void;
    private customLoader;
}
