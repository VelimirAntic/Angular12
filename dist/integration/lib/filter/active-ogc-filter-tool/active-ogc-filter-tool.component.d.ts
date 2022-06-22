import { MapState } from '../../map/map.state';
import { Layer, IgoMap } from '@igo2/geo';
import * as i0 from "@angular/core";
export declare class ActiveOgcFilterToolComponent {
    mapState: MapState;
    get map(): IgoMap;
    get layer(): Layer;
    animate: string;
    constructor(mapState: MapState);
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveOgcFilterToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActiveOgcFilterToolComponent, "igo-active-ogc-filter-tool", never, {}, {}, never, never>;
}
