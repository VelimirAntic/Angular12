import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArcGISRestDataSourceOptions, ArcGISRestImageDataSourceOptions, TileArcGISRestDataSourceOptions, WMSDataSourceOptions } from '../datasources';
import { OptionsService } from './options.service';
import { OptionsApiOptions } from './options-api.interface';
import * as i0 from "@angular/core";
export declare class OptionsApiService extends OptionsService {
    private http;
    private urlApi;
    private provideContextUri;
    constructor(http: HttpClient, options?: OptionsApiOptions);
    getWMSOptions(baseOptions: WMSDataSourceOptions, detailedContextUri?: string): Observable<WMSDataSourceOptions>;
    getArcgisRestOptions(baseOptions: ArcGISRestDataSourceOptions | ArcGISRestImageDataSourceOptions | TileArcGISRestDataSourceOptions, detailedContextUri?: string): Observable<ArcGISRestDataSourceOptions | ArcGISRestImageDataSourceOptions | TileArcGISRestDataSourceOptions>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OptionsApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OptionsApiService>;
}
