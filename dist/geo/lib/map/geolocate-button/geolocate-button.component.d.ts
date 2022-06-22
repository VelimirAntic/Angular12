import { IgoMap } from '../shared/map';
import * as i0 from "@angular/core";
export declare class GeolocateButtonComponent {
    get map(): IgoMap;
    set map(value: IgoMap);
    private _map;
    get color(): string;
    set color(value: string);
    private _color;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<GeolocateButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeolocateButtonComponent, "igo-geolocate-button", never, { "map": "map"; "color": "color"; }, {}, never, never>;
}
