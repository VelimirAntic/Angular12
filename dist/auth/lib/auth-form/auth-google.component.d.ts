import { ApplicationRef, EventEmitter } from '@angular/core';
import { ConfigService, LanguageService } from '@igo2/core';
import { AuthService } from '../shared/auth.service';
import * as i0 from "@angular/core";
export declare class AuthGoogleComponent {
    private authService;
    private config;
    private languageService;
    private appRef;
    private options;
    login: EventEmitter<boolean>;
    constructor(authService: AuthService, config: ConfigService, languageService: LanguageService, appRef: ApplicationRef);
    handleSignInClick(): void;
    handleSignOutClick(): void;
    private handleClientLoad;
    private initClient;
    private updateSigninStatus;
    private updateTextButton;
    private loginGoogle;
    private loadSDKGoogle;
    private loadPlatform;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGoogleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuthGoogleComponent, "igo-auth-google", never, {}, { "login": "login"; }, never, never>;
}
