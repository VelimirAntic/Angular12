import { LanguageService, MessageService, RouteService } from '@igo2/core';
import { Subject } from 'rxjs';
import { FeatureWithDirection } from '../shared/directions.interface';
import { RoutesFeatureStore, StopsStore } from '../shared/store';
import * as i0 from "@angular/core";
export declare class DirectionsButtonsComponent {
    private languageService;
    private messageService;
    private route;
    get activeRoute(): FeatureWithDirection;
    contextUri: string;
    zoomToActiveRoute$: Subject<void>;
    stopsStore: StopsStore;
    routesFeatureStore: RoutesFeatureStore;
    constructor(languageService: LanguageService, messageService: MessageService, route: RouteService);
    resetStops(): void;
    addStop(): void;
    copyLinkToClipboard(): void;
    zoomRoute(): void;
    copyDirectionsToClipboard(): void;
    private directionsToText;
    formatStep(step: any, cnt: any): {
        instruction: any;
        image: string;
        cssClass: string;
    };
    private getUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<DirectionsButtonsComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DirectionsButtonsComponent, "igo-directions-buttons", never, { "contextUri": "contextUri"; "zoomToActiveRoute$": "zoomToActiveRoute$"; "stopsStore": "stopsStore"; "routesFeatureStore": "routesFeatureStore"; }, {}, never, never>;
}
