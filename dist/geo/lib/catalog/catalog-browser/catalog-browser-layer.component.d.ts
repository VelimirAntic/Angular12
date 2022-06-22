import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CatalogItemLayer } from '../shared';
import { BehaviorSubject } from 'rxjs';
import { LayerService } from '../../layer/shared/layer.service';
import { Layer } from '../../layer/shared/layers';
import * as i0 from "@angular/core";
/**
 * Catalog browser layer item
 */
export declare class CatalogBrowserLayerComponent implements OnInit, OnDestroy {
    private layerService;
    inRange$: BehaviorSubject<boolean>;
    isPreview$: BehaviorSubject<boolean>;
    private isPreview$$;
    private lastTimeoutRequest;
    layerLegendShown$: BehaviorSubject<boolean>;
    igoLayer$: BehaviorSubject<Layer>;
    private mouseInsideAdd;
    resolution: number;
    catalogAllowLegend: boolean;
    /**
     * Catalog layer
     */
    layer: CatalogItemLayer;
    /**
     * Whether the layer is already added to the map
     */
    added: boolean;
    /**
     * Event emitted when the add/remove button is clicked
     */
    addedChange: EventEmitter<{
        added: boolean;
        layer: CatalogItemLayer;
    }>;
    addedLayerIsPreview: EventEmitter<boolean>;
    /**
     * @internal
     */
    get title(): string;
    /**
     * @internal
     */
    get icon(): string;
    constructor(layerService: LayerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    computeTitleTooltip(): string;
    /**
     * On mouse event, mouseenter /mouseleave
     * @internal
     */
    onMouseEvent(event: any): void;
    askForLegend(event: any): void;
    /**
     * On toggle button click, emit the added change event
     * @internal
     */
    onToggleClick(event: any): void;
    /**
     * Emit added change event with added = true
     */
    private add;
    /**
     * Emit added change event with added = false
     */
    private remove;
    haveGroup(): boolean;
    isInResolutionsRange(): boolean;
    computeTooltip(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CatalogBrowserLayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CatalogBrowserLayerComponent, "igo-catalog-browser-layer", never, { "resolution": "resolution"; "catalogAllowLegend": "catalogAllowLegend"; "layer": "layer"; "added": "added"; }, { "addedChange": "addedChange"; "addedLayerIsPreview": "addedLayerIsPreview"; }, never, never>;
}
