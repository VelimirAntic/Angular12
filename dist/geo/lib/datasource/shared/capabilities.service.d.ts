import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapService } from '../../map/shared/map.service';
import { WMTSDataSourceOptions, WMSDataSourceOptions, CartoDataSourceOptions, ArcGISRestDataSourceOptions, TileArcGISRestDataSourceOptions, ArcGISRestImageDataSourceOptions } from './datasources';
import { LegendOptions } from '../../layer/shared/layers/layer.interface';
import * as i0 from "@angular/core";
export declare enum TypeCapabilities {
    wms = "wms",
    wmts = "wmts",
    arcgisrest = "esriJSON",
    imagearcgisrest = "esriJSON",
    tilearcgisrest = "esriJSON"
}
export declare type TypeCapabilitiesStrings = keyof typeof TypeCapabilities;
export declare class CapabilitiesService {
    private http;
    private mapService;
    private parsers;
    constructor(http: HttpClient, mapService: MapService);
    getWMSOptions(baseOptions: WMSDataSourceOptions): Observable<WMSDataSourceOptions>;
    getWMTSOptions(baseOptions: WMTSDataSourceOptions): Observable<WMTSDataSourceOptions>;
    getCartoOptions(baseOptions: CartoDataSourceOptions): Observable<CartoDataSourceOptions>;
    getArcgisOptions(baseOptions: ArcGISRestDataSourceOptions): Observable<ArcGISRestDataSourceOptions>;
    getImageArcgisOptions(baseOptions: ArcGISRestImageDataSourceOptions | TileArcGISRestDataSourceOptions): Observable<ArcGISRestImageDataSourceOptions | TileArcGISRestDataSourceOptions>;
    getTileArcgisOptions(baseOptions: TileArcGISRestDataSourceOptions): Observable<ArcGISRestImageDataSourceOptions | TileArcGISRestDataSourceOptions>;
    getCapabilities(service: TypeCapabilitiesStrings, baseUrl: string, version?: string): Observable<any>;
    private parseWMSOptions;
    private parseWMTSOptions;
    private parseCartoOptions;
    private parseArcgisOptions;
    private parseTileOrImageArcgisOptions;
    private findDataSourceInCapabilities;
    getTimeFilter(layer: any): any;
    getStyle(Style: any): LegendOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<CapabilitiesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CapabilitiesService>;
}
