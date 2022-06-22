import { EntityStore } from '@igo2/common';
import { SpatialFilterService } from './../../shared/spatial-filter.service';
import { SpatialFilterQueryType } from './../../shared/spatial-filter.enum';
import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Feature } from '../../../feature';
import { MeasureLengthUnit } from '../../../measure/shared';
import { LanguageService, MessageService } from '@igo2/core';
import { Layer } from '../../../layer';
import * as i0 from "@angular/core";
export declare class SpatialFilterListComponent implements OnInit, OnDestroy {
    private spatialFilterService;
    private messageService;
    private languageService;
    get store(): EntityStore<Feature>;
    set store(store: EntityStore<Feature>);
    private _store;
    get queryType(): SpatialFilterQueryType;
    set queryType(queryType: SpatialFilterQueryType);
    private _queryType;
    get zone(): any;
    set zone(value: any);
    private _zone;
    layers: Layer[];
    zoneWithBuffer: any;
    selectedZone: any;
    measureUnit: MeasureLengthUnit;
    formControl: FormControl;
    bufferFormControl: FormControl;
    /**
     * Available measure units for the measure type given
     * @internal
     */
    get measureUnits(): string[];
    zoneChange: EventEmitter<Feature<{
        [key: string]: any;
    }>>;
    zoneWithBufferChange: EventEmitter<Feature<{
        [key: string]: any;
    }>>;
    bufferChange: EventEmitter<number>;
    measureUnitChange: EventEmitter<MeasureLengthUnit>;
    formValueChanges$$: Subscription;
    bufferValueChanges$$: Subscription;
    constructor(spatialFilterService: SpatialFilterService, messageService: MessageService, languageService: LanguageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    displayFn(feature?: Feature): string | undefined;
    onZoneChange(feature: any): void;
    /**
     * Set the measure unit
     * @internal
     */
    onMeasureUnitChange(unit: MeasureLengthUnit): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpatialFilterListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpatialFilterListComponent, "igo-spatial-filter-list", never, { "store": "store"; "queryType": "queryType"; "zone": "zone"; "layers": "layers"; }, { "zoneChange": "zoneChange"; "zoneWithBufferChange": "zoneWithBufferChange"; "bufferChange": "bufferChange"; "measureUnitChange": "measureUnitChange"; }, never, never>;
}
