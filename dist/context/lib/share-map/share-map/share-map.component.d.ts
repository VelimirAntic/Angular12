import { ConfigService } from '@igo2/core';
import type { IgoMap } from '@igo2/geo';
import * as i0 from "@angular/core";
export declare class ShareMapComponent {
    private config;
    map: IgoMap;
    hasApi: boolean;
    constructor(config: ConfigService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ShareMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShareMapComponent, "igo-share-map", never, { "map": "map"; }, {}, never, never>;
}
