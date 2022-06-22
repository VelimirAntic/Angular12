import { InjectionToken } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteServiceOptions } from './route.interface';
import * as i0 from "@angular/core";
export declare let ROUTE_SERVICE_OPTIONS: InjectionToken<RouteServiceOptions>;
export declare function provideRouteServiceOptions(options: RouteServiceOptions): {
    provide: InjectionToken<RouteServiceOptions>;
    useValue: RouteServiceOptions;
};
export declare class RouteService {
    private router;
    route: ActivatedRoute;
    options: RouteServiceOptions;
    constructor(router: Router, route: ActivatedRoute, options: RouteServiceOptions);
    get queryParams(): Observable<Params>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RouteService, [null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RouteService>;
}
