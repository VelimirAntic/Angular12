import { Observable } from 'rxjs';
import { Direction, DirectionOptions } from '../shared/directions.interface';
import { DirectionsSource } from '../directions-sources/directions-source';
import { DirectionsSourceService } from './directions-source.service';
import * as i0 from "@angular/core";
export declare class DirectionsService {
    private directionsSourceService;
    constructor(directionsSourceService: DirectionsSourceService);
    route(coordinates: [number, number][], directionsOptions?: DirectionOptions): Observable<Direction[]>[];
    routeSource(source: DirectionsSource, coordinates: [number, number][], directionsOptions?: DirectionOptions): Observable<Direction[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DirectionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DirectionsService>;
}
