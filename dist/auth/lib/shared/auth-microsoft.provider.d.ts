import { MsalService } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { ConfigService } from '@igo2/core';
import { MSPMsalGuardConfiguration } from './auth.interface';
import { MsalServiceb2c } from './auth-msalServiceb2c.service.';
export declare function MSALConfigFactory(config: ConfigService): PublicClientApplication;
export declare function MSALConfigFactoryb2c(config: ConfigService): PublicClientApplication;
export declare function MSALAngularConfigFactory(config: ConfigService): MSPMsalGuardConfiguration;
export declare function MSALAngularConfigFactoryb2c(config: ConfigService): MSPMsalGuardConfiguration;
export declare function provideAuthMicrosoft(type?: string): (typeof MsalServiceb2c | {
    provide: import("@angular/core").InjectionToken<string>;
    useFactory: typeof MSALConfigFactoryb2c;
    deps: (typeof ConfigService)[];
    multi?: undefined;
} | {
    provide: import("@angular/core").InjectionToken<string>;
    useFactory: typeof MSALAngularConfigFactoryb2c;
    deps: (typeof ConfigService)[];
    multi: boolean;
})[] | (typeof MsalService | {
    provide: import("@angular/core").InjectionToken<string>;
    useFactory: typeof MSALConfigFactory;
    deps: (typeof ConfigService)[];
    multi?: undefined;
} | {
    provide: import("@angular/core").InjectionToken<string>;
    useFactory: typeof MSALAngularConfigFactory;
    deps: (typeof ConfigService)[];
    multi: boolean;
})[];
