import { ChangeDetectorRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NetworkService } from '@igo2/core';
import type { Toolbox } from '@igo2/common';
import { Feature } from '../shared';
import { SearchSource } from '../../search/shared/sources/source';
import { IgoMap } from '../../map/shared/map';
import * as i0 from "@angular/core";
export declare class FeatureDetailsComponent implements OnInit, OnDestroy {
    private cdRef;
    private sanitizer;
    private networkService;
    private state;
    private unsubscribe$;
    ready: boolean;
    get source(): SearchSource;
    set source(value: SearchSource);
    map: IgoMap;
    toolbox: Toolbox;
    get feature(): Feature;
    set feature(value: Feature);
    private _feature;
    private _source;
    routeEvent: EventEmitter<boolean>;
    selectFeature: EventEmitter<boolean>;
    htmlDisplayEvent: EventEmitter<boolean>;
    /**
     * @internal
     */
    get title(): string;
    /**
     * @internal
     */
    get icon(): string;
    constructor(cdRef: ChangeDetectorRef, sanitizer: DomSanitizer, networkService: NetworkService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    urlSanitizer(value: any): SafeResourceUrl;
    isHtmlDisplay(): boolean;
    htmlSanitizer(value: any): SafeResourceUrl;
    isObject(value: any): boolean;
    isUrl(value: any): boolean;
    isImg(value: any): boolean;
    filterFeatureProperties(feature: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeatureDetailsComponent, "igo-feature-details", never, { "source": "source"; "map": "map"; "toolbox": "toolbox"; "feature": "feature"; }, { "routeEvent": "routeEvent"; "selectFeature": "selectFeature"; "htmlDisplayEvent": "htmlDisplayEvent"; }, never, never>;
}
