import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { OnUpdateInputs, WidgetComponent } from '@igo2/common';
import { Layer } from '../../../layer/shared/layers/layer';
import { IgoMap } from '../../../map/shared/map';
import * as i0 from "@angular/core";
export declare class OgcFilterComponent implements OnUpdateInputs, WidgetComponent {
    private cdRef;
    layer: Layer;
    map: IgoMap;
    /**
     * Event emitted on complete
     */
    complete: EventEmitter<void>;
    /**
     * Event emitted on cancel
     */
    cancel: EventEmitter<void>;
    constructor(cdRef: ChangeDetectorRef);
    /**
     * Implemented as part of OnUpdateInputs
     */
    onUpdateInputs(): void;
    /**
     * On close, emit the cancel event
     */
    onClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OgcFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OgcFilterComponent, "igo-ogc-filter", never, { "layer": "layer"; "map": "map"; }, { "complete": "complete"; "cancel": "cancel"; }, never, never>;
}
