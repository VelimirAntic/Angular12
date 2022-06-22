import { IgoMap, LayerListControlsOptions } from '@igo2/geo';
import { MapState } from '../../map/map.state';
import { LayerListToolState } from '../../map/layer-list-tool.state';
import * as i0 from "@angular/core";
export declare class ContextShareToolComponent {
    private mapState;
    private layerListToolState;
    get map(): IgoMap;
    get layerListControls(): LayerListControlsOptions;
    constructor(mapState: MapState, layerListToolState: LayerListToolState);
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextShareToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextShareToolComponent, "igo-context-share-tool", never, {}, {}, never, never>;
}
