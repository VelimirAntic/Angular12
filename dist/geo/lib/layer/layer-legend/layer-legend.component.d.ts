import { HttpClient } from '@angular/common/http';
import { OnInit, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';
import type { QueryList } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Legend } from '../../datasource/shared/datasources/datasource.interface';
import { Layer } from '../shared/layers';
import { CapabilitiesService } from '../../datasource/shared/capabilities.service';
import { LanguageService } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class LayerLegendComponent implements OnInit, OnDestroy {
    private capabilitiesService;
    private languageService;
    private http;
    private cdRef;
    updateLegendOnResolutionChange: boolean;
    /**
     * Observable of the legend items
     */
    legendItems$: BehaviorSubject<Legend[]>;
    /**
     * Subscription to the map's resolution
     */
    private state$$;
    /**
     * The available styles
     */
    styles: any;
    /**
     * The style used to make the legend
     */
    currentStyle: any;
    /**
     * The scale used to make the legend
     */
    private scale;
    /**
     * The extent used to make the legend
     */
    private view;
    /**
     * Get list of images display
     */
    renderedLegends: QueryList<ElementRef>;
    /**
     * List of size of images displayed
     */
    imagesHeight: {
        [srcKey: string]: number;
    };
    /**
     * Layer
     */
    layer: Layer;
    /**
     * if getLegendGraphic is authorized
     */
    getLegend: boolean;
    /**
     * activeLegend
     */
    constructor(capabilitiesService: CapabilitiesService, languageService: LanguageService, http: HttpClient, cdRef: ChangeDetectorRef);
    /**
     * On init, subscribe to the map's resolution and update the legend accordingly
     */
    ngOnInit(): void;
    /**
     * On destroy, unsubscribe to the map's view state
     */
    ngOnDestroy(): void;
    getLegendGraphic(item: Legend): void;
    toggleLegendItem(collapsed: boolean, item: Legend): void;
    private transfertToggleLegendItem;
    computeItemTitle(layerLegend: any): Observable<string>;
    /**
     * On resolution change, compute the effective scale level and update the
     * legend accordingly.
     * @param resolution Map resolution
     */
    private onViewControllerStateChange;
    /**
     * Update the legend with scale level and style define
     */
    private updateLegend;
    private listStyles;
    onChangeStyle(): void;
    onLoadImage(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerLegendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayerLegendComponent, "igo-layer-legend", never, { "updateLegendOnResolutionChange": "updateLegendOnResolutionChange"; "layer": "layer"; }, {}, never, never>;
}
