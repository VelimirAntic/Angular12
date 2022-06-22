import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouteService } from '@igo2/core';
import { MapService } from '../../map/shared/map.service';
import { LayerListComponent } from './layer-list.component';
import * as i0 from "@angular/core";
export declare class LayerListBindingDirective implements OnInit, OnDestroy {
    private mapService;
    private route;
    private component;
    private layersOrResolutionChange$$;
    layersVisibility$$: Subscription;
    constructor(component: LayerListComponent, mapService: MapService, route: RouteService);
    ngOnInit(): void;
    private setLayersVisibilityStatus;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerListBindingDirective, [{ self: true; }, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LayerListBindingDirective, "[igoLayerListBinding]", never, {}, {}, never>;
}
