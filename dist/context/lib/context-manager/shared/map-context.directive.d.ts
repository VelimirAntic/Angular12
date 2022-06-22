import { OnInit, OnDestroy } from '@angular/core';
import { MapBrowserComponent } from '@igo2/geo';
import type { IgoMap } from '@igo2/geo';
import { ContextService } from './context.service';
import { MediaService } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class MapContextDirective implements OnInit, OnDestroy {
    private contextService;
    private mediaService;
    private component;
    private context$$;
    get map(): IgoMap;
    constructor(component: MapBrowserComponent, contextService: ContextService, mediaService: MediaService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private handleContextChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapContextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MapContextDirective, "[igoMapContext]", never, {}, {}, never>;
}
