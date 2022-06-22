import { ApplicationRef, EventEmitter } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { ConfigService } from '@igo2/core';
import { MSPMsalGuardConfiguration } from '../shared/auth.interface';
import { AuthService } from '../shared/auth.service';
import * as i0 from "@angular/core";
export declare class AuthMicrosoftComponent {
    private authService;
    private config;
    private appRef;
    private msalService;
    private msalGuardConfig;
    private options;
    private readonly _destroying$;
    login: EventEmitter<boolean>;
    private broadcastService;
    constructor(authService: AuthService, config: ConfigService, appRef: ApplicationRef, msalService: MsalService, msalGuardConfig: MSPMsalGuardConfiguration[]);
    loginMicrosoft(): void;
    private checkAccount;
    private getConf;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthMicrosoftComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuthMicrosoftComponent, "igo-auth-microsoft", never, {}, { "login": "login"; }, never, never>;
}
