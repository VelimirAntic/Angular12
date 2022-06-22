import { Watcher } from '@igo2/utils';
import { Layer } from '../shared/layers/layer';
import { IgoMap } from '../../map/shared/map';
export declare class LayerSyncWatcher extends Watcher {
    private ogcFilters$$;
    private timeFilter$$;
    private ol;
    private layer;
    private dataSource;
    private map;
    private ogcFilterWriter;
    constructor(layer: Layer, map: IgoMap);
    protected watch(): void;
    protected unwatch(): void;
    private syncChildLayers;
    private transferCommonProperties;
    private transferOgcFiltersProperties;
    private transferTimeFilterProperties;
}
