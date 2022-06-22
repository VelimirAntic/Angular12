import { AfterViewInit } from '@angular/core';
import { NetworkService, MessageService, LanguageService } from '@igo2/core';
import { IgoMap } from './map';
import { MapBrowserComponent } from '../map-browser/map-browser.component';
import * as i0 from "@angular/core";
export declare class MapOfflineDirective implements AfterViewInit {
    private networkService;
    private messageService;
    private languageService;
    private component;
    private offlineButtonStatus;
    private networkState;
    private offlineButtonState;
    get map(): IgoMap;
    private previousMessageId;
    constructor(component: MapBrowserComponent, networkService: NetworkService, messageService: MessageService, languageService: LanguageService);
    ngAfterViewInit(): void;
    private changeLayer;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapOfflineDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MapOfflineDirective, "[igoMapOffline]", never, {}, {}, never>;
}
