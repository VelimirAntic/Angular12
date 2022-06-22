import { HttpClient } from '@angular/common/http';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '@igo2/core';
import { TokenService } from './token.service';
import * as i0 from "@angular/core";
export declare class AuthInterceptor implements HttpInterceptor {
    private config;
    private tokenService;
    private http;
    private refreshInProgress;
    private get trustHosts();
    private get hostsWithCredentials();
    private get hostsWithAuthByKey();
    constructor(config: ConfigService, tokenService: TokenService, http: HttpClient);
    intercept(originalReq: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    interceptXhr(xhr: any, url: string): boolean;
    alterUrlWithKeyAuth(url: string): string;
    private handleHostsWithCredentials;
    private handleHostsAuthByKey;
    refreshToken(): import("rxjs").Subscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthInterceptor>;
}
