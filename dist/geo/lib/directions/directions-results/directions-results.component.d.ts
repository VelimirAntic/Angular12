import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '@igo2/core';
import { Direction, IgoStep } from '../shared/directions.interface';
import { RoutesFeatureStore, StepFeatureStore } from '../shared/store';
import * as i0 from "@angular/core";
export declare class DirectionsResultsComponent implements OnInit, OnDestroy {
    private languageService;
    private cdRef;
    activeDirection: Direction;
    directions: Direction[];
    private entities$$;
    routesFeatureStore: RoutesFeatureStore;
    stepFeatureStore: StepFeatureStore;
    constructor(languageService: LanguageService, cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    changeRoute(): void;
    formatDistance(distance: number): string;
    formatDuration(duration: number): string;
    formatStep(step: any, cnt: any): {
        instruction: any;
        image: string;
        cssClass: string;
    };
    onStepsListBlur(): void;
    showSegment(step: IgoStep, zoomToExtent?: boolean): void;
    showRouteSegmentGeometry(step: IgoStep, zoomToExtent?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DirectionsResultsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DirectionsResultsComponent, "igo-directions-results", never, { "routesFeatureStore": "routesFeatureStore"; "stepFeatureStore": "stepFeatureStore"; }, {}, never, never>;
}
