import { ConfigService } from '@igo2/core';
import { IgoMap } from '../shared/map';
import { MapExtent } from '../shared/map.interface';
import * as i0 from "@angular/core";
export declare class HomeExtentButtonComponent {
    configService: ConfigService;
    map: IgoMap;
    color: string;
    extentOverride?: MapExtent;
    centerOverride?: [number, number];
    zoomOverride?: number;
    private homeExtentButtonExtent;
    private homeExtentButtonCenter;
    private homeExtentButtonZoom;
    constructor(configService: ConfigService);
    computeHomeExtent(): void;
    onToggleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeExtentButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HomeExtentButtonComponent, "igo-home-extent-button", never, { "map": "map"; "color": "color"; "extentOverride": "extentOverride"; "centerOverride": "centerOverride"; "zoomOverride": "zoomOverride"; }, {}, never, never>;
}
