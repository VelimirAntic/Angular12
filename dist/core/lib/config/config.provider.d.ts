import { InjectionToken } from '@angular/core';
import { ConfigService } from './config.service';
import { ConfigOptions } from './config.interface';
export declare let CONFIG_OPTIONS: InjectionToken<ConfigOptions>;
export declare function provideConfigOptions(options: ConfigOptions): {
    provide: InjectionToken<ConfigOptions>;
    useValue: ConfigOptions;
};
export declare function configFactory(configService: ConfigService, options: ConfigOptions): () => true | Promise<unknown>;
export declare function provideConfigLoader(): {
    provide: InjectionToken<readonly (() => void | Promise<unknown> | import("rxjs").Observable<unknown>)[]>;
    useFactory: typeof configFactory;
    multi: boolean;
    deps: (typeof ConfigService | InjectionToken<ConfigOptions>)[];
};
