import { AfterViewInit, OnDestroy } from '@angular/core';
import { MediaService } from '@igo2/core';
import { Layer } from '../../layer';
import { IgoMap } from '../shared';
import * as i0 from "@angular/core";
export declare class BaseLayersSwitcherComponent implements AfterViewInit, OnDestroy {
    private mediaService;
    map: IgoMap;
    useStaticIcon: boolean;
    _baseLayers: Layer[];
    expand: boolean;
    showButton: boolean;
    private layers$$;
    constructor(mediaService: MediaService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    collapseOrExpand(): void;
    get baseLayers(): Layer[];
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseLayersSwitcherComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseLayersSwitcherComponent, "igo-baselayers-switcher", never, { "map": "map"; "useStaticIcon": "useStaticIcon"; }, {}, never, never>;
}
