import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ConfigService } from '@igo2/core';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class LoggedGuard implements CanActivate {
    private authService;
    private config;
    private router;
    constructor(authService: AuthService, config: ConfigService, router: Router);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoggedGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoggedGuard>;
}
