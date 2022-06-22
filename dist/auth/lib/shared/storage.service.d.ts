import { HttpClient } from '@angular/common/http';
import { StorageService, StorageScope, ConfigService } from '@igo2/core';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { AuthStorageOptions } from './storage.interface';
import * as i0 from "@angular/core";
export declare class AuthStorageService extends StorageService {
    private http;
    private authService;
    private tokenService;
    protected options: AuthStorageOptions;
    constructor(config: ConfigService, http: HttpClient, authService: AuthService, tokenService: TokenService);
    set(key: string, value: string | object | boolean | number, scope?: StorageScope): void;
    remove(key: string, scope?: StorageScope): void;
    clear(scope?: StorageScope): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthStorageService>;
}
