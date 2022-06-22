import { EventEmitter } from '@angular/core';
import { FlexibleState } from '@igo2/common';
import { Feature } from '../feature/shared/feature.interfaces';
import { IgoMap } from '../map/shared/map';
import * as i0 from "@angular/core";
export declare class ToastComponent {
    static SWIPE_ACTION: {
        UP: string;
        DOWN: string;
    };
    private format;
    get expanded(): boolean;
    set expanded(value: boolean);
    private _expanded;
    get map(): IgoMap;
    set map(value: IgoMap);
    private _map;
    get feature(): Feature;
    set feature(value: Feature);
    private _feature;
    opened: EventEmitter<boolean>;
    state: FlexibleState;
    /**
     * @internal
     */
    get title(): string;
    constructor();
    toggle(): void;
    zoomToFeatureExtent(): void;
    swipe(action: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "igo-toast", never, { "expanded": "expanded"; "map": "map"; "feature": "feature"; }, { "opened": "opened"; }, never, never>;
}
