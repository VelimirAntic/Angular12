import { OnInit, OnDestroy } from '@angular/core';
import { IgoMap } from '../../map/shared/map';
import { MapBrowserComponent } from '../../map/map-browser/map-browser.component';
import { OverlayService } from '../shared/overlay.service';
import * as i0 from "@angular/core";
export declare class OverlayDirective implements OnInit, OnDestroy {
    private component;
    private overlayService;
    private features$$;
    private format;
    get map(): IgoMap;
    constructor(component: MapBrowserComponent, overlayService: OverlayService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private handleFeatures;
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlayDirective, [{ self: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<OverlayDirective, "[igoOverlay]", never, {}, {}, never>;
}
