import { IgoMap } from '../shared/map';
import * as i0 from "@angular/core";
export declare class ZoomButtonComponent {
    map: IgoMap;
    color: string;
    get zoom(): number;
    get minZoom(): number;
    get maxZoom(): number;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ZoomButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ZoomButtonComponent, "igo-zoom-button", never, { "map": "map"; "color": "color"; }, {}, never, never>;
}
