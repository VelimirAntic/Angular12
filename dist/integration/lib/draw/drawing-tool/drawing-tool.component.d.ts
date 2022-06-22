import { FeatureStore, Feature, IgoMap } from '@igo2/geo';
import { MapState } from '../../map/map.state';
import { DrawState } from '../draw.state';
import * as i0 from "@angular/core";
/**
 * Tool to measure lengths and areas
 */
export declare class DrawingToolComponent {
    private drawState;
    private mapState;
    /**
     * Map to measure on
     * @internal
     */
    get store(): FeatureStore<Feature>;
    /**
     * Map to measure on
     * @internal
     */
    get map(): IgoMap;
    constructor(drawState: DrawState, mapState: MapState);
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawingToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrawingToolComponent, "igo-drawing-tool", never, {}, {}, never, never>;
}
