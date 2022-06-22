import { LayerListControlsOptions, IgoMap, Layer } from '@igo2/geo';
import { MapState } from './../map.state';
import { ImportExportState } from '../../import-export/import-export.state';
import { ToolState } from '../../tool/tool.state';
import * as i0 from "@angular/core";
/**
 * Tool to browse a map's layers or to choose a different map
 */
export declare class MapToolComponent {
    private mapState;
    private toolState;
    private importExportState;
    toggleLegendOnVisibilityChange: boolean;
    expandLegendOfVisibleLayers: boolean;
    updateLegendOnResolutionChange: boolean;
    ogcButton: boolean;
    timeButton: boolean;
    layerListControls: LayerListControlsOptions;
    queryBadge: boolean;
    get map(): IgoMap;
    get excludeBaseLayers(): boolean;
    get layerFilterAndSortOptions(): any;
    constructor(mapState: MapState, toolState: ToolState, importExportState: ImportExportState);
    activateExport(layer: Layer): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapToolComponent, "igo-map-tool", never, { "toggleLegendOnVisibilityChange": "toggleLegendOnVisibilityChange"; "expandLegendOfVisibleLayers": "expandLegendOfVisibleLayers"; "updateLegendOnResolutionChange": "updateLegendOnResolutionChange"; "ogcButton": "ogcButton"; "timeButton": "timeButton"; "layerListControls": "layerListControls"; "queryBadge": "queryBadge"; }, {}, never, never>;
}
