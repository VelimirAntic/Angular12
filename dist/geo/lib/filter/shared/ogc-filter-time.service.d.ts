import { OgcFilterableDataSource } from './ogc-filter.interface';
import * as i0 from "@angular/core";
export declare class OGCFilterTimeService {
    readonly defaultStepMillisecond = 60000;
    constructor();
    step(datasource: OgcFilterableDataSource, currentFilter: any): string;
    stepMillisecond(dataSource: OgcFilterableDataSource, currentFilter: any): number;
    stepIsYearDuration(step: string): boolean;
    stepIsMonthDuration(step: string): boolean;
    stepIsWeekDuration(step: string): boolean;
    stepIsDayDuration(step: string): boolean;
    stepIsHourDuration(step: string): boolean;
    stepIsMinuteDuration(step: string): boolean;
    dateToNumber(date: Date): number;
    addStep(value: any, stepMillisecond: any): Date;
    subtractStep(value: any, stepMillisecond: any): Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<OGCFilterTimeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OGCFilterTimeService>;
}
