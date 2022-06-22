import { OnInit, OnDestroy } from '@angular/core';
import { MapService } from '../../map/shared/map.service';
import { OgcFilterableListComponent } from './ogc-filterable-list.component';
import * as i0 from "@angular/core";
export declare class OgcFilterableListBindingDirective implements OnInit, OnDestroy {
    private mapService;
    private component;
    private layers$$;
    constructor(component: OgcFilterableListComponent, mapService: MapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OgcFilterableListBindingDirective, [{ self: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<OgcFilterableListBindingDirective, "[igoOgcFilterableListBinding]", never, {}, {}, never>;
}
