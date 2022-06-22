import { EventEmitter, OnInit } from '@angular/core';
import { OGCFilterTimeService } from '../shared/ogc-filter-time.service';
import { MatSlider } from '@angular/material/slider';
import * as i0 from "@angular/core";
export declare class OgcFilterTimeSliderComponent implements OnInit {
    ogcFilterTimeService: OGCFilterTimeService;
    currentFilter: any;
    begin: any;
    max: any;
    datasource: any;
    changeProperty: EventEmitter<{
        value: any;
        pos: number;
        refreshFilter: boolean;
    }>;
    slider: MatSlider;
    interval: any;
    sliderValue: number;
    calculatedStep: number;
    readonly _defaultDisplayFormat: string;
    readonly _defaultSliderInterval: number;
    playIcon: string;
    resetIcon: string;
    get sliderInterval(): number;
    get displayFormat(): string;
    get beginMillisecond(): number;
    get maxMillisecond(): number;
    get stepMillisecond(): number;
    constructor(ogcFilterTimeService: OGCFilterTimeService);
    ngOnInit(): void;
    sliderDisplayWith(value: any): string;
    playFilter(event: any): void;
    stopFilter(): void;
    resetFilter(event: any): void;
    handleSliderInput(matSliderChange: any): void;
    calculateStep(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OgcFilterTimeSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OgcFilterTimeSliderComponent, "igo-ogc-filter-time-slider", never, { "currentFilter": "currentFilter"; "begin": "begin"; "max": "max"; "datasource": "datasource"; }, { "changeProperty": "changeProperty"; }, never, never>;
}
