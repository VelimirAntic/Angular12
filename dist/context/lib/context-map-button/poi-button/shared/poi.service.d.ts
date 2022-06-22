import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '@igo2/core';
import { Poi } from './poi.interface';
import * as i0 from "@angular/core";
export declare class PoiService {
    private http;
    private config;
    private baseUrl;
    constructor(http: HttpClient, config: ConfigService);
    get(): Observable<Poi[]>;
    delete(id: string): Observable<void>;
    create(context: Poi): Observable<Poi>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoiService>;
}
