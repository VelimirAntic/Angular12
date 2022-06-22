import { OnInit } from '@angular/core';
import { VectorLayer } from '../shared/layers';
import { VectorLayerOptions } from '../shared/layers/vector-layer.interface';
import * as i0 from "@angular/core";
export declare class TrackFeatureButtonComponent implements OnInit {
    layer: VectorLayer;
    trackFeature: boolean;
    get options(): VectorLayerOptions;
    color: string;
    constructor();
    ngOnInit(): void;
    toggleTrackFeature(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrackFeatureButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrackFeatureButtonComponent, "igo-track-feature-button", never, { "layer": "layer"; "trackFeature": "trackFeature"; }, {}, never, never>;
}
