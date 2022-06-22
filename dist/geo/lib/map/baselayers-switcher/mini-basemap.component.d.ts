import { AfterViewInit, OnDestroy, ApplicationRef } from '@angular/core';
import { Layer } from '../../layer/shared';
import { LayerService } from '../../layer/shared/layer.service';
import { IgoMap } from '../shared';
import * as i0 from "@angular/core";
export declare class MiniBaseMapComponent implements AfterViewInit, OnDestroy {
    private layerService;
    private appRef;
    map: IgoMap;
    disabled: boolean;
    display: boolean;
    title: string;
    get baseLayer(): Layer;
    set baseLayer(value: Layer);
    private _baseLayer;
    basemap: IgoMap;
    constructor(layerService: LayerService, appRef: ApplicationRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    changeBaseLayer(baseLayer: Layer): void;
    private handleMainMapViewChange;
    private handleBaseLayerChanged;
    private handleLinkedBaseLayer;
    static ɵfac: i0.ɵɵFactoryDeclaration<MiniBaseMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MiniBaseMapComponent, "igo-mini-basemap", never, { "map": "map"; "disabled": "disabled"; "display": "display"; "title": "title"; "baseLayer": "baseLayer"; }, {}, never, never>;
}
