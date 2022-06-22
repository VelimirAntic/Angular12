import { ChangeDetectorRef } from '@angular/core';
import { Layer } from '../../layer/shared/layers/layer';
import * as i0 from "@angular/core";
export declare class TimeFilterListComponent {
    private cdRef;
    get layers(): Layer[];
    set layers(value: Layer[]);
    private _layers;
    constructor(cdRef: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeFilterListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeFilterListComponent, "igo-time-filter-list", never, { "layers": "layers"; }, {}, never, never>;
}
