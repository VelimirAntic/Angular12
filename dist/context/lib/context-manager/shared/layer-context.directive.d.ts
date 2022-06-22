import { OnInit, OnDestroy } from '@angular/core';
import { RouteService, ConfigService } from '@igo2/core';
import { MapBrowserComponent, LayerService, StyleListService, StyleService } from '@igo2/geo';
import type { IgoMap } from '@igo2/geo';
import { ContextService } from './context.service';
import * as i0 from "@angular/core";
export declare class LayerContextDirective implements OnInit, OnDestroy {
    private component;
    private contextService;
    private layerService;
    private configService;
    private styleListService;
    private styleService;
    private route;
    private context$$;
    private queryParams;
    private contextLayers;
    removeLayersOnContextChange: boolean;
    get map(): IgoMap;
    constructor(component: MapBrowserComponent, contextService: ContextService, layerService: LayerService, configService: ConfigService, styleListService: StyleListService, styleService: StyleService, route: RouteService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private handleContextChange;
    private computeLayerVisibilityFromUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerContextDirective, [null, null, null, null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LayerContextDirective, "[igoLayerContext]", never, { "removeLayersOnContextChange": "removeLayersOnContextChange"; }, {}, never>;
}
