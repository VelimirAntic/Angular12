import { Injector } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TokenService {
    private injector;
    private options;
    constructor(injector: Injector);
    set(token: string): void;
    remove(): void;
    get(): string;
    decode(): any;
    isExpired(): boolean;
    private get tokenKey();
    static ɵfac: i0.ɵɵFactoryDeclaration<TokenService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TokenService>;
}
