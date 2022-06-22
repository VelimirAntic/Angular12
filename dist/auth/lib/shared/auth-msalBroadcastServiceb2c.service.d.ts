import { Observable } from 'rxjs';
import { EventMessage, IPublicClientApplication, InteractionStatus } from '@azure/msal-browser';
import { MsalServiceb2c } from './auth-msalServiceb2c.service.';
import * as i0 from "@angular/core";
export declare class MsalBroadcastServiceb2c {
    private msalInstance;
    private authService;
    private _msalSubject;
    msalSubject$: Observable<EventMessage>;
    private _inProgress;
    inProgress$: Observable<InteractionStatus>;
    constructor(msalInstance: IPublicClientApplication, authService: MsalServiceb2c);
    static ɵfac: i0.ɵɵFactoryDeclaration<MsalBroadcastServiceb2c, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MsalBroadcastServiceb2c>;
}
