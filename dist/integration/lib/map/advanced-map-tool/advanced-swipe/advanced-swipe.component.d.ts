import { OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContextService, DetailedContext } from '@igo2/context';
import { IgoMap, Layer, VectorLayer } from '@igo2/geo';
import { MapState } from '../../map.state';
import { ToolState } from '../../../tool/tool.state';
import * as i0 from "@angular/core";
export declare class AdvancedSwipeComponent implements OnInit, OnDestroy {
    mapState: MapState;
    private contextService;
    private formBuilder;
    private toolState;
    swipe: boolean;
    layerList: Layer[];
    userControlledLayerList: Layer[];
    form: FormGroup;
    layers: VectorLayer[];
    res: DetailedContext;
    listForSwipe: Layer[];
    /**
     * Get an active map state
     */
    get map(): IgoMap;
    constructor(mapState: MapState, contextService: ContextService, formBuilder: FormBuilder, toolState: ToolState);
    /**
     * Get the list of layers for swipe
     * @internal
     */
    ngOnInit(): void;
    /**
     * Desactivate the swipe
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * Build a form for choise of the layers
     */
    private buildForm;
    /**
     * Activate the swipe, send a list of layers for a swipe-tool
     */
    startSwipe(toggle: boolean): void;
    /**
     * Restart a swipe for a new layers-list
     */
    applyNewLayers(e: any): void;
    /**
     * Select all list of layers and restart a tool
     */
    selectAll(e: any): void;
    /**
     * Open search tool
     */
    searchEmit(): void;
    /**
     * Open catalog
     */
    catalogEmit(): void;
    /**
     * Open context manager
     */
    contextEmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdvancedSwipeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdvancedSwipeComponent, "igo-advanced-swipe", never, {}, {}, never, never>;
}
