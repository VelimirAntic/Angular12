import { IgoMap } from '../shared/map';
import * as i0 from "@angular/core";
export declare class RotationButtonComponent {
    get map(): IgoMap;
    set map(value: IgoMap);
    private _map;
    get showIfNoRotation(): boolean;
    set showIfNoRotation(value: boolean);
    private _showIfNoRotation;
    get color(): string;
    set color(value: string);
    private _color;
    get rotated(): boolean;
    constructor();
    rotationStyle(radians: any): {};
    static ɵfac: i0.ɵɵFactoryDeclaration<RotationButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RotationButtonComponent, "igo-rotation-button", never, { "map": "map"; "showIfNoRotation": "showIfNoRotation"; "color": "color"; }, {}, never, never>;
}
