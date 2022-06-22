import { OnInit, OnDestroy } from '@angular/core';
import { MapService } from '../../map/shared/map.service';
import { TimeFilterListComponent } from './time-filter-list.component';
import * as i0 from "@angular/core";
export declare class TimeFilterListBindingDirective implements OnInit, OnDestroy {
    private mapService;
    private component;
    private layers$$;
    constructor(component: TimeFilterListComponent, mapService: MapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeFilterListBindingDirective, [{ self: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TimeFilterListBindingDirective, "[igoTimeFilterListBinding]", never, {}, {}, never>;
}
