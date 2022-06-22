import { OnInit, EventEmitter } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Layer } from '../../layer/shared/layers/layer';
import { TimeFilterOptions } from '../shared/time-filter.interface';
import { TimeFilterType, TimeFilterStyle } from '../shared/time-filter.enum';
import * as i0 from "@angular/core";
export declare class TimeFilterFormComponent implements OnInit {
    private dateAdapter;
    layer: Layer;
    options: TimeFilterOptions;
    color: string;
    date: Date;
    startDate: Date;
    endDate: Date;
    year: any;
    startYear: any;
    endYear: any;
    initStartYear: any;
    initEndYear: any;
    listYears: Array<string>;
    startListYears: Array<string>;
    endListYears: Array<string>;
    set currentValue(value: string);
    interval: any;
    playIcon: string;
    resetIcon: string;
    change: EventEmitter<Date | [Date, Date]>;
    yearChange: EventEmitter<string | [string, string]>;
    mySlider: any;
    get type(): TimeFilterType;
    get isRange(): boolean;
    get style(): TimeFilterStyle;
    get step(): number;
    get timeInterval(): number;
    get min(): Date;
    get max(): Date;
    get is(): boolean;
    constructor(dateAdapter: DateAdapter<Date>);
    ngOnInit(): void;
    storeCurrentFilterValue(): void;
    checkFilterValue(): void;
    handleDateChange(event: any): void;
    handleYearChange(event: any): void;
    handleListYearChange(event: any): void;
    handleListYearStartChange(event: any): void;
    dateToNumber(date: Date): number;
    setSliderThumbLabel(label: string): void;
    findThumbLabel(test: any[]): any;
    toggleFilterState(): void;
    resetFilter(event: any): void;
    playFilter(event: any): void;
    playYear(event: any): void;
    stopFilter(): void;
    handleSliderDateChange(event: any): void;
    handleSliderYearChange(event: any): void;
    handleSliderValue(): number;
    handleSliderTooltip(): string;
    setupDateOutput(): void;
    applyTypeChange(): void;
    getRangeMinDate(): Date;
    getRangeMaxDate(): Date;
    /**
     * Round date at a certain time, 10 minutes by Default
     * @param date - Date to Round
     * @param atMinute - round to closest 'atMinute' minute, rounded 10 by default
     * @return the rounded date
     */
    getRoundedDate(date: any, atMinute?: number): Date;
    /**
     * Get the step (period) definition from the layer dimension tag
     * @param step The step as ISO 8601 example: PT10M for 10 Minutes
     * @return the duration in milliseconds
     */
    getStepDefinition(step: any): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeFilterFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeFilterFormComponent, "igo-time-filter-form", never, { "layer": "layer"; "options": "options"; "currentValue": "currentValue"; }, { "change": "change"; "yearChange": "yearChange"; }, never, never>;
}
