import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { SpatialFilterQueryType, SpatialFilterType } from '../../shared/spatial-filter.enum';
import { SelectionModel } from '@angular/cdk/collections';
import { IgoMap } from '../../../map';
import { SpatialFilterItemType } from './../../shared/spatial-filter.enum';
import { Feature } from './../../../feature/shared/feature.interfaces';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import type { default as OlGeometryType } from 'ol/geom/GeometryType';
import { GeoJSONGeometry } from '../../../geometry/shared/geometry.interfaces';
import * as olStyle from 'ol/style';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SpatialFilterService } from '../../shared/spatial-filter.service';
import { MeasureLengthUnit } from '../../../measure';
import { EntityStore, EntityTableTemplate } from '@igo2/common';
import { Layer } from '../../../layer/shared';
import { NestedTreeControl } from '@angular/cdk/tree';
import { SpatialFilterThematic } from './../../shared/spatial-filter.interface';
import { MessageService, LanguageService } from '@igo2/core';
import * as i0 from "@angular/core";
/**
 * Spatial-Filter-Item (search parameters)
 */
export declare class SpatialFilterItemComponent implements OnDestroy, OnInit {
    private cdRef;
    private spatialFilterService;
    private messageService;
    private languageService;
    map: IgoMap;
    get type(): SpatialFilterType;
    set type(type: SpatialFilterType);
    private _type;
    queryType: SpatialFilterQueryType;
    zone: Feature;
    loading: any;
    get store(): EntityStore<Feature>;
    set store(store: EntityStore<Feature>);
    private _store;
    /**
     * Available measure units for the measure type given
     * @internal
     */
    get measureUnits(): string[];
    layers: Layer[];
    allLayers: Layer[];
    get thematicLength(): number;
    set thematicLength(value: number);
    private _thematicLength;
    toggleSearch: EventEmitter<any>;
    itemTypeChange: EventEmitter<SpatialFilterItemType>;
    thematicChange: EventEmitter<SpatialFilterThematic[]>;
    drawZoneEvent: EventEmitter<Feature<{
        [key: string]: any;
    }>>;
    bufferEvent: EventEmitter<number>;
    zoneWithBufferChange: EventEmitter<Feature<{
        [key: string]: any;
    }>>;
    measureUnitChange: EventEmitter<MeasureLengthUnit>;
    radiusEvent: EventEmitter<number>;
    freehandControl: EventEmitter<boolean>;
    clearButtonEvent: EventEmitter<any>;
    clearSearchEvent: EventEmitter<any>;
    export: EventEmitter<any>;
    openWorkspace: EventEmitter<any>;
    entityChange: EventEmitter<any>;
    itemType: SpatialFilterItemType[];
    selectedItemType: SpatialFilterItemType;
    selectedSourceAddress: any;
    treeControl: NestedTreeControl<SpatialFilterThematic>;
    displayedColumns: string[];
    childrens: SpatialFilterThematic[];
    groups: string[];
    thematics: SpatialFilterThematic[];
    dataSource: MatTreeNestedDataSource<SpatialFilterThematic>;
    selectedThematics: SelectionModel<SpatialFilterThematic>;
    value$: BehaviorSubject<GeoJSONGeometry>;
    drawGuide$: BehaviorSubject<number>;
    overlayStyle$: BehaviorSubject<olStyle.Style | ((feature: any, resolution: any) => olStyle.Style)>;
    drawStyle$: BehaviorSubject<olStyle.Style | ((feature: any, resolution: any) => olStyle.Style)>;
    private value$$;
    private radiusChanges$$;
    private bufferChanges$$;
    formControl: FormControl;
    geometryType: typeof OlGeometryType | string;
    geometryTypeField: boolean;
    geometryTypes: string[];
    drawGuideField: boolean;
    drawGuide: number;
    drawGuidePlaceholder: string;
    measure: boolean;
    drawControlIsActive: boolean;
    freehandDrawIsActive: boolean;
    drawStyle: olStyle.Style | ((feature: any, resolution: any) => olStyle.Style);
    drawZone: any;
    overlayStyle: olStyle.Style | ((feature: any, resolution: any) => olStyle.Style);
    PointStyle: olStyle.Style | ((feature: any, resolution: any) => olStyle.Style);
    PolyStyle: olStyle.Style | ((feature: any, resolution: any) => olStyle.Style);
    radius: number;
    buffer: number;
    radiusFormControl: FormControl;
    bufferFormControl: FormControl;
    measureUnit: MeasureLengthUnit;
    zoneWithBuffer: any;
    listIsVisible: boolean;
    tableTemplate: EntityTableTemplate;
    constructor(cdRef: ChangeDetectorRef, spatialFilterService: SpatialFilterService, messageService: MessageService, languageService: LanguageService);
    ngOnInit(): void;
    /**
     * Unsubscribe to the value stream
     * @internal
     */
    ngOnDestroy(): void;
    onItemTypeChange(event: any): void;
    /**
     * Set the measure unit
     * @internal
     */
    onMeasureUnitChange(unit: MeasureLengthUnit): void;
    isPredefined(): boolean;
    isPolygon(): boolean;
    isPoint(): boolean;
    hasChild(_: number, node: SpatialFilterThematic): number | false;
    onToggleClick(node: SpatialFilterThematic): void;
    isAllSelected(node?: SpatialFilterThematic): boolean;
    hasChildrenSelected(node: SpatialFilterThematic): boolean;
    /**
     * Apply header checkbox
     */
    masterToggle(): void;
    selectAll(node?: SpatialFilterThematic): void;
    childrensToggle(node: SpatialFilterThematic): void;
    /**
     * Apply changes to the thematics selected tree and emit event
     */
    onToggleChange(nodeSelected: SpatialFilterThematic): void;
    onDrawControlChange(): void;
    onfreehandControlChange(): void;
    /**
     * Launch search button
     */
    toggleSearchButton(): void;
    /**
     * Launch clear button (clear store and map layers)
     */
    clearButton(): void;
    clearDrawZone(): void;
    /**
     * Launch clear search (clear field if type is predefined)
     */
    clearSearch(): void;
    /**
     * Verify conditions of incomplete fields or busy service
     */
    disableSearchButton(): boolean;
    disabledClearSearch(): boolean;
    /**
     * Manage radius value at user change
     */
    getRadius(): void;
    toggleVisibleList(): void;
    private createTableTemplate;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpatialFilterItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpatialFilterItemComponent, "igo-spatial-filter-item", never, { "map": "map"; "type": "type"; "queryType": "queryType"; "zone": "zone"; "loading": "loading"; "store": "store"; "layers": "layers"; "allLayers": "allLayers"; "thematicLength": "thematicLength"; }, { "toggleSearch": "toggleSearch"; "itemTypeChange": "itemTypeChange"; "thematicChange": "thematicChange"; "drawZoneEvent": "drawZoneEvent"; "bufferEvent": "bufferEvent"; "zoneWithBufferChange": "zoneWithBufferChange"; "measureUnitChange": "measureUnitChange"; "radiusEvent": "radiusEvent"; "freehandControl": "freehandControl"; "clearButtonEvent": "clearButtonEvent"; "clearSearchEvent": "clearSearchEvent"; "export": "export"; "openWorkspace": "openWorkspace"; "entityChange": "entityChange"; }, never, never>;
}
