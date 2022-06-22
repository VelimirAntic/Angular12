import { ApplicationRef, EventEmitter } from '@angular/core';
import { ConfigService } from '@igo2/core';
import { MSPMsalGuardConfiguration } from '../shared/auth.interface';
import { AuthService } from '../shared/auth.service';
import { MsalServiceb2c } from '../shared/auth-msalServiceb2c.service.';
import * as i0 from "@angular/core";
export declare class AuthMicrosoftb2cComponent {
    private authService;
    private config;
    private appRef;
    private msalService;
    private msalGuardConfig;
    private options;
    private readonly _destroying$;
    login: EventEmitter<boolean>;
    private broadcastService;
    constructor(authService: AuthService, config: ConfigService, appRef: ApplicationRef, msalService: MsalServiceb2c, msalGuardConfig: MSPMsalGuardConfiguration[]);
    loginMicrosoftb2c(): void;
    private checkAccount;
    private getConf;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthMicrosoftb2cComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuthMicrosoftb2cComponent, "igo-auth-microsoftb2c", never, {}, { "login": "login"; }, never, never>;
}
