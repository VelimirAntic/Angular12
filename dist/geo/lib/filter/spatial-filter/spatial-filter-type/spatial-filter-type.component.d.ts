import { OnInit, EventEmitter } from '@angular/core';
import { SpatialFilterQueryType, SpatialFilterType } from '../../shared/spatial-filter.enum';
import { FormControl } from '@angular/forms';
import { EntityStore } from '@igo2/common';
import { Feature } from '../../../feature';
import { MeasureLengthUnit } from '../../../measure';
import { Layer } from '../../../layer';
import * as i0 from "@angular/core";
/**
 * Spatial Filter Type
 */
export declare class SpatialFilterTypeComponent implements OnInit {
    get store(): EntityStore<Feature>;
    set store(store: EntityStore<Feature>);
    private _store;
    queryType: string[];
    selectedTypeIndex: FormControl;
    /**
     * Reference to the SpatialFIlterType enum
     * @internal
     */
    spatialType: typeof SpatialFilterType;
    activeDrawType: SpatialFilterType;
    selectedQueryType: SpatialFilterQueryType;
    zone: Feature;
    layers: Layer[];
    type: SpatialFilterType;
    eventType: EventEmitter<SpatialFilterType>;
    eventQueryType: EventEmitter<SpatialFilterQueryType>;
    zoneChange: EventEmitter<Feature<{
        [key: string]: any;
    }>>;
    zoneWithBufferChange: EventEmitter<Feature<{
        [key: string]: any;
    }>>;
    bufferChange: EventEmitter<number>;
    measureUnitChange: EventEmitter<MeasureLengthUnit>;
    constructor();
    ngOnInit(): void;
    onTypeChange(event: any): void;
    onDrawTypeChange(spatialType: SpatialFilterType): void;
    onSelectionChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpatialFilterTypeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpatialFilterTypeComponent, "igo-spatial-filter-type", never, { "store": "store"; "selectedQueryType": "selectedQueryType"; "zone": "zone"; "layers": "layers"; }, { "eventType": "eventType"; "eventQueryType": "eventQueryType"; "zoneChange": "zoneChange"; "zoneWithBufferChange": "zoneWithBufferChange"; "bufferChange": "bufferChange"; "measureUnitChange": "measureUnitChange"; }, never, never>;
}
