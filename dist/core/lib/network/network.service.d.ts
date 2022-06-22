import { OnDestroy, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../message/shared/message.service';
import { ConnectionState } from './network.interfaces';
import * as i0 from "@angular/core";
export declare class NetworkService implements OnDestroy {
    private messageService;
    private injector;
    private stateChangeEventEmitter;
    private onlineSubscription;
    private offlineSubscription;
    private previousMessageId;
    private state;
    constructor(messageService: MessageService, injector: Injector);
    private checkNetworkState;
    private emitEvent;
    ngOnDestroy(): void;
    currentState(reportState?: boolean): Observable<ConnectionState>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NetworkService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NetworkService>;
}
