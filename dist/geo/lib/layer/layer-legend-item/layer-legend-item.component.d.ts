import { OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Layer } from '../shared/layers';
import { NetworkService, ConnectionState } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class LayerLegendItemComponent implements OnInit, OnDestroy {
    private networkService;
    inResolutionRange$: BehaviorSubject<boolean>;
    tooltipText: string;
    state: ConnectionState;
    private resolution$$;
    private network$$;
    layer: Layer;
    updateLegendOnResolutionChange: boolean;
    constructor(networkService: NetworkService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    computeTooltip(): string;
    private onResolutionChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerLegendItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayerLegendItemComponent, "igo-layer-legend-item", never, { "layer": "layer"; "updateLegendOnResolutionChange": "updateLegendOnResolutionChange"; }, {}, never, never>;
}
