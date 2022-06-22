import { MapState } from '../../map/map.state';
import { IgoMap, Layer } from '@igo2/geo';
import * as i0 from "@angular/core";
export declare class ActiveTimeFilterToolComponent {
    mapState: MapState;
    get map(): IgoMap;
    get layer(): Layer;
    animate: string;
    constructor(mapState: MapState);
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveTimeFilterToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActiveTimeFilterToolComponent, "igo-active-time-filter-tool", never, {}, {}, never, never>;
}
