import { FeatureStore, FeatureWithMeasure, IgoMap } from '@igo2/geo';
import { MapState } from '../../map/map.state';
import { MeasureState } from '../measure.state';
import * as i0 from "@angular/core";
/**
 * Tool to measure lengths and areas
 */
export declare class MeasurerToolComponent {
    private measureState;
    private mapState;
    /**
     * Map to measure on
     * @internal
     */
    get store(): FeatureStore<FeatureWithMeasure>;
    /**
     * Map to measure on
     * @internal
     */
    get map(): IgoMap;
    constructor(measureState: MeasureState, mapState: MapState);
    static ɵfac: i0.ɵɵFactoryDeclaration<MeasurerToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MeasurerToolComponent, "igo-measurer-tool", never, {}, {}, never, never>;
}
