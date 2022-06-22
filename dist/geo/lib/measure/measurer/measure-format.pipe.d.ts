import { PipeTransform } from '@angular/core';
import { MeasureAreaUnit, MeasureLengthUnit } from '../shared/measure.enum';
import * as i0 from "@angular/core";
/**
 * This pipe returns a measure converted from meters (or square meters)
 * to the specified unit. It also keeps a certain number of decimals.
 */
export declare class MeasureFormatPipe implements PipeTransform {
    /**
     * @ignore
     */
    transform(value: number, unit: MeasureAreaUnit | MeasureLengthUnit, unitAbbr?: boolean, decimal?: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<MeasureFormatPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MeasureFormatPipe, "measureFormat">;
}
