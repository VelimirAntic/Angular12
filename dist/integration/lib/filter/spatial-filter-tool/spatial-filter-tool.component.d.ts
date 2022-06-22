import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { IgoMap, DataSourceService, LayerService, Feature, SpatialFilterService, SpatialFilterType, SpatialFilterItemType, SpatialFilterQueryType, SpatialFilterThematic, Layer, MeasureLengthUnit } from '@igo2/geo';
import { EntityStore } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import { MapState } from '../../map/map.state';
import { ImportExportState } from './../../import-export/import-export.state';
import { MessageService, LanguageService } from '@igo2/core';
import { ToolState } from '../../tool/tool.state';
import { WorkspaceState } from '../../workspace/workspace.state';
import * as i0 from "@angular/core";
/**
 * Tool to apply spatial filter
 */
export declare class SpatialFilterToolComponent implements OnInit, OnDestroy {
    private matIconRegistry;
    private spatialFilterService;
    private dataSourceService;
    private layerService;
    private mapState;
    private messageService;
    private languageService;
    private importExportState;
    private toolState;
    private workspaceState;
    private cdRef;
    get map(): IgoMap;
    type: SpatialFilterType;
    itemType: SpatialFilterItemType;
    freehandDrawIsActive: boolean;
    layers: Layer[];
    activeLayers: Layer[];
    queryType: SpatialFilterQueryType;
    thematics: SpatialFilterThematic[];
    zone: Feature;
    zoneWithBuffer: Feature;
    buffer: number;
    iterator: number;
    selectedFeature$: BehaviorSubject<Feature>;
    private format;
    store: EntityStore<Feature>;
    spatialListStore: EntityStore<Feature>;
    loading: boolean;
    thematicLength: number;
    measureUnit: MeasureLengthUnit;
    private unsubscribe$;
    private moveendKey;
    constructor(matIconRegistry: MatIconRegistry, spatialFilterService: SpatialFilterService, dataSourceService: DataSourceService, layerService: LayerService, mapState: MapState, messageService: MessageService, languageService: LanguageService, importExportState: ImportExportState, toolState: ToolState, workspaceState: WorkspaceState, cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getOutputType(event: SpatialFilterType): void;
    getOutputQueryType(event: SpatialFilterQueryType): void;
    activateExportTool(): void;
    activateWorkspace(record?: any): void;
    private selectWorkspaceEntity;
    private loadFilterList;
    getOutputToggleSearch(): void;
    getOutputClearSearch(): void;
    clearMap(): void;
    private loadThematics;
    onZoneChange(feature: Feature, buffer?: boolean): void;
    /**
     * Try to add zone feature to the map overlay
     */
    tryAddFeaturesToMap(features: Feature[], buffer?: boolean): void;
    /**
     * Try to add point features to the map
     * Necessary to create clusters
     */
    private tryAddPointToMap;
    private createSvgIcon;
    /**
     * Try to add line or polygon features to the map
     */
    private tryAddLayerToMap;
    zoomToFeatureExtent(feature: any): void;
    pushLayer(layer: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpatialFilterToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpatialFilterToolComponent, "igo-spatial-filter-tool", never, { "type": "type"; "itemType": "itemType"; "freehandDrawIsActive": "freehandDrawIsActive"; }, {}, never, never>;
}
