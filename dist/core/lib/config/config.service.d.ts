import { Injector } from '@angular/core';
import { ConfigOptions } from './config.interface';
import * as i0 from "@angular/core";
export declare class ConfigService {
    private injector;
    private config;
    constructor(injector: Injector);
    /**
     * Use to get the data found in config file
     */
    getConfig(key: string): any;
    /**
     * This method loads "[path]" to get all config's variables
     */
    load(options: ConfigOptions): true | Promise<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfigService>;
}
