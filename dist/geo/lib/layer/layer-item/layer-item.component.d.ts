import { OnInit, OnDestroy, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Layer } from '../shared/layers';
import { NetworkService, ConnectionState } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class LayerItemComponent implements OnInit, OnDestroy {
    private networkService;
    private renderer;
    private elRef;
    private cdRef;
    focusedCls: string;
    get activeLayer(): any;
    set activeLayer(value: any);
    private _activeLayer;
    layerTool$: BehaviorSubject<boolean>;
    showLegend$: BehaviorSubject<boolean>;
    inResolutionRange$: BehaviorSubject<boolean>;
    queryBadgeHidden$: BehaviorSubject<boolean>;
    tooltipText: string;
    state: ConnectionState;
    get selectAll(): boolean;
    set selectAll(value: boolean);
    private _selectAll;
    layerCheck: any;
    private resolution$$;
    private network$$;
    private layers$$;
    layers$: BehaviorSubject<Layer>;
    get layer(): any;
    set layer(value: any);
    private _layer;
    toggleLegendOnVisibilityChange: boolean;
    expandLegendIfVisible: boolean;
    updateLegendOnResolutionChange: boolean;
    orderable: boolean;
    lowerDisabled: boolean;
    raiseDisabled: boolean;
    queryBadge: boolean;
    selectionMode: any;
    changeDetection: any;
    get opacity(): number;
    set opacity(opacity: number);
    action: EventEmitter<Layer>;
    checkbox: EventEmitter<{
        layer: Layer;
        check: boolean;
    }>;
    constructor(networkService: NetworkService, renderer: Renderer2, elRef: ElementRef, cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleLegend(collapsed: boolean): void;
    toggleLegendOnClick(): void;
    toggleVisibility(): void;
    computeTooltip(): string;
    private onResolutionChange;
    private updateQueryBadge;
    toggleLayerTool(): void;
    check(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayerItemComponent, "igo-layer-item", never, { "activeLayer": "activeLayer"; "selectAll": "selectAll"; "layerCheck": "layerCheck"; "layer": "layer"; "toggleLegendOnVisibilityChange": "toggleLegendOnVisibilityChange"; "expandLegendIfVisible": "expandLegendIfVisible"; "updateLegendOnResolutionChange": "updateLegendOnResolutionChange"; "orderable": "orderable"; "lowerDisabled": "lowerDisabled"; "raiseDisabled": "raiseDisabled"; "queryBadge": "queryBadge"; "selectionMode": "selectionMode"; "changeDetection": "changeDetection"; }, { "action": "action"; "checkbox": "checkbox"; }, never, never>;
}
