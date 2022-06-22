import { FeatureStore, FeatureWithMeasure } from '@igo2/geo';
import { MapState } from '../map/map.state';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of the measure module
 */
export declare class MeasureState {
    private mapState;
    /**
     * Store that holds the measures
     */
    store: FeatureStore<FeatureWithMeasure>;
    constructor(mapState: MapState);
    static ɵfac: i0.ɵɵFactoryDeclaration<MeasureState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MeasureState>;
}
