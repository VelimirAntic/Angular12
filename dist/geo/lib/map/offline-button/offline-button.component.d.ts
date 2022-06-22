import { EventEmitter } from '@angular/core';
import { IgoMap } from '../shared/map';
import { ConfigService } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class OfflineButtonComponent {
    private config;
    btnStyle: string;
    colorOff: string;
    change: EventEmitter<boolean>;
    get map(): IgoMap;
    set map(value: IgoMap);
    private _map;
    get color(): string;
    set color(value: string);
    private _color;
    check: boolean;
    get checked(): boolean;
    visible: boolean;
    constructor(config: ConfigService);
    onToggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OfflineButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OfflineButtonComponent, "igo-offline-button", never, { "map": "map"; "color": "color"; "check": "check"; }, { "change": "change"; }, never, never>;
}
