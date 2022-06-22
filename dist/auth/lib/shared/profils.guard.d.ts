import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ConfigService } from '@igo2/core';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class ProfilsGuard implements CanActivate {
    private authService;
    private config;
    private router;
    constructor(authService: AuthService, config: ConfigService, router: Router);
    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfilsGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProfilsGuard>;
}
