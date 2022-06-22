import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthInterceptor } from '@igo2/auth';
import { DataSourceService } from '../../datasource/shared/datasource.service';
import { Layer, AnyLayerOptions } from './layers';
import { StyleService } from './style.service';
import { LanguageService, MessageService } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class LayerService {
    private http;
    private styleService;
    private dataSourceService;
    private messageService;
    private languageService;
    private authInterceptor;
    constructor(http: HttpClient, styleService: StyleService, dataSourceService: DataSourceService, messageService: MessageService, languageService: LanguageService, authInterceptor: AuthInterceptor);
    createLayer(layerOptions: AnyLayerOptions): Layer;
    createAsyncLayer(_layerOptions: AnyLayerOptions, detailedContextUri?: string): Observable<Layer>;
    private createImageLayer;
    private createTileLayer;
    private createVectorLayer;
    private createVectorTileLayer;
    private applyMapboxStyle;
    getMapboxGlStyle(url: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerService, [null, null, null, null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayerService>;
}
