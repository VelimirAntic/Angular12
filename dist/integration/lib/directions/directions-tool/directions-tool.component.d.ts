import { OnInit } from '@angular/core';
import { AuthService } from '@igo2/auth';
import { LanguageService, MessageService, StorageService } from '@igo2/core';
import { IgoMap, RoutesFeatureStore, StopsFeatureStore, StopsStore, StepFeatureStore } from '@igo2/geo';
import { Subject } from 'rxjs';
import { ContextState } from '../../context/context.state';
import { MapState } from '../../map/map.state';
import { DirectionState } from '../directions.state';
import * as i0 from "@angular/core";
export declare class DirectionsToolComponent implements OnInit {
    private directionState;
    private mapState;
    private languageService;
    private messageService;
    private storageService;
    contextState: ContextState;
    private authService;
    currentContextUri: string;
    /**
     * stops
     * @internal
     */
    get stopsStore(): StopsStore;
    get debounceTime(): number;
    /**
     * stops
     * @internal
     */
    get stopsFeatureStore(): StopsFeatureStore;
    /**
     * routes
     * @internal
     */
    get routesFeatureStore(): RoutesFeatureStore;
    /**
     * step store
     * @internal
     */
    get stepFeatureStore(): StepFeatureStore;
    /**
     * step store
     * @internal
     */
    get zoomToActiveRoute$(): Subject<void>;
    /**
     * Map to measure on
     * @internal
     */
    get map(): IgoMap;
    constructor(directionState: DirectionState, mapState: MapState, languageService: LanguageService, messageService: MessageService, storageService: StorageService, contextState: ContextState, authService: AuthService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DirectionsToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DirectionsToolComponent, "igo-directions-tool", never, {}, {}, never, never>;
}
