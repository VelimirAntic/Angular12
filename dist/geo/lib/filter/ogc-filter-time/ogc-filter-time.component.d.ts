import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OgcFilterOperator } from '../../filter/shared/ogc-filter.enum';
import { OGCFilterTimeService } from '../shared/ogc-filter-time.service';
import { OgcFilterableDataSourceOptions, OgcFilterableDataSource } from '../shared/ogc-filter.interface';
import * as i0 from "@angular/core";
export declare class OgcFilterTimeComponent implements OnInit {
    ogcFilterTimeService: OGCFilterTimeService;
    datasource: OgcFilterableDataSource;
    currentFilter: any;
    changeProperty: EventEmitter<{
        value: string;
        pos: number;
        refreshFilter: boolean;
    }>;
    beginHours: number[];
    endHours: number[];
    beginMinutes: number[];
    endMinutes: number[];
    beginHourFormControl: FormControl;
    beginMinuteFormControl: FormControl;
    endHourFormControl: FormControl;
    endMinuteFormControl: FormControl;
    _beginValue: Date;
    _endValue: Date;
    readonly _defaultMin: string;
    readonly _defaultMax: string;
    readonly _defaultDisplayFormat: string;
    readonly _defaultSliderModeEnabled: boolean;
    ogcFilterOperator: typeof OgcFilterOperator;
    sliderMode: boolean;
    readonly defaultStepMillisecond = 60000;
    options: OgcFilterableDataSourceOptions;
    onlyYearBegin: number;
    onlyYearEnd: number;
    calendarTypeYear: boolean;
    resetIcon: string;
    filterStateDisable: boolean;
    endDatepickerTime: ElementRef;
    beginDatepickerTime: ElementRef;
    beginTime: HTMLInputElement;
    endTime: HTMLInputElement;
    get step(): string;
    get stepMilliseconds(): number;
    set beginValue(begin: Date);
    get beginValue(): Date;
    set endValue(end: Date);
    get endValue(): Date;
    get sliderInterval(): number;
    get maxDate(): string;
    get displayFormat(): string;
    constructor(ogcFilterTimeService: OGCFilterTimeService);
    ngOnInit(): void;
    parseFilter(filter: any): Date;
    changeTemporalProperty(value: any, position?: any, refreshFilter?: boolean): void;
    handleDate(value: any): Date;
    calendarType(): "year" | "date" | "datetime";
    isCalendarYearMode(): boolean;
    yearOnlyInputChange(changeEvent: any, datePicker?: any, property?: string): void;
    yearSelected(year: any, datePicker?: any, property?: string, refreshFilter?: boolean): void;
    monthSelected(month: any, datePicker?: any, property?: string, refreshFilter?: boolean): void;
    calendarView(): "year" | "month" | "multi-year" | "clock";
    dateFilter(type: string, date: string): boolean;
    getDateTime(date: any, pos: any): Date;
    handleMinuteIncrement(): number;
    handleHourIncrement(): number;
    fullBeginHoursArray(checkEndValue?: any): void;
    fullEndHoursArray(checkEndValue?: any): void;
    fullBeginMinutesArray(checkEndValue?: any): void;
    fullEndMinutesArray(checkEndValue?: any): void;
    updateHoursMinutesArray(): void;
    private updateValues;
    restrictedToStep(): boolean;
    handleMin(): any;
    handleMax(): any;
    changePropertyByPass(event: any): void;
    modeChange(event: any): void;
    setFilterStateDisable(): void;
    getDateFromStringWithoutTime(stringDate: string): Date;
    resetFilter(): void;
    toggleFilterState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OgcFilterTimeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OgcFilterTimeComponent, "igo-ogc-filter-time", never, { "datasource": "datasource"; "currentFilter": "currentFilter"; }, { "changeProperty": "changeProperty"; }, never, never>;
}
