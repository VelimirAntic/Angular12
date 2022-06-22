import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '@igo2/core';
import { Direction, DirectionOptions } from '../shared/directions.interface';
import { DirectionsSource } from './directions-source';
import * as i0 from "@angular/core";
export declare class OsrmDirectionsSource extends DirectionsSource {
    private http;
    private config;
    get enabled(): boolean;
    set enabled(value: boolean);
    static _name: string;
    private directionsUrl;
    private options;
    constructor(http: HttpClient, config: ConfigService);
    getName(): string;
    route(coordinates: [number, number][], directionsOptions?: DirectionOptions): Observable<Direction[]>;
    private extractRoutesData;
    private getRouteParams;
    private formatRoute;
    static ɵfac: i0.ɵɵFactoryDeclaration<OsrmDirectionsSource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OsrmDirectionsSource>;
}
