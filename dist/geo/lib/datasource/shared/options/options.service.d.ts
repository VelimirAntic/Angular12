import { Observable } from 'rxjs';
import { ArcGISRestDataSourceOptions, ArcGISRestImageDataSourceOptions, TileArcGISRestDataSourceOptions, WMSDataSourceOptions } from '../datasources';
export declare abstract class OptionsService {
    abstract getWMSOptions(_baseOptions: WMSDataSourceOptions, detailedContextUri?: string): Observable<WMSDataSourceOptions>;
    abstract getArcgisRestOptions(_baseOptions: ArcGISRestDataSourceOptions | ArcGISRestImageDataSourceOptions | TileArcGISRestDataSourceOptions, detailedContextUri?: string): Observable<ArcGISRestDataSourceOptions | ArcGISRestImageDataSourceOptions | TileArcGISRestDataSourceOptions>;
}
