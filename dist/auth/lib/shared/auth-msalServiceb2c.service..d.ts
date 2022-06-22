import { Location } from '@angular/common';
import { IPublicClientApplication, EndSessionRequest, EndSessionPopupRequest, AuthenticationResult, RedirectRequest, SilentRequest, PopupRequest, SsoSilentRequest, Logger } from '@azure/msal-browser';
import { Observable } from 'rxjs';
import { IMsalService } from '@azure/msal-angular';
import * as i0 from "@angular/core";
export declare class MsalServiceb2c implements IMsalService {
    instance: IPublicClientApplication;
    private location;
    private redirectHash;
    private logger;
    private name;
    private version;
    constructor(instance: IPublicClientApplication, location: Location);
    acquireTokenPopup(request: PopupRequest): Observable<AuthenticationResult>;
    acquireTokenRedirect(request: RedirectRequest): Observable<void>;
    acquireTokenSilent(silentRequest: SilentRequest): Observable<AuthenticationResult>;
    handleRedirectObservable(hash?: string): Observable<AuthenticationResult>;
    loginPopup(request?: PopupRequest): Observable<AuthenticationResult>;
    loginRedirect(request?: RedirectRequest): Observable<void>;
    logout(logoutRequest?: EndSessionRequest): Observable<void>;
    logoutRedirect(logoutRequest?: EndSessionRequest): Observable<void>;
    logoutPopup(logoutRequest?: EndSessionPopupRequest): Observable<void>;
    ssoSilent(request: SsoSilentRequest): Observable<AuthenticationResult>;
    /**
     * Gets logger for msal-angular.
     * If no logger set, returns logger instance created with same options as msal-browser
     */
    getLogger(): Logger;
    setLogger(logger: Logger): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MsalServiceb2c, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MsalServiceb2c>;
}
