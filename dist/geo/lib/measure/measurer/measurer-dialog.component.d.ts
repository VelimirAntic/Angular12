import { MatDialogRef } from '@angular/material/dialog';
import { MeasurerDialogData } from '../shared/measure.interfaces';
import { MeasureAreaUnit, MeasureLengthUnit } from '../shared/measure.enum';
import * as i0 from "@angular/core";
export declare class MeasurerDialogComponent {
    dialogRef: MatDialogRef<MeasurerDialogComponent>;
    data: MeasurerDialogData;
    measureAreaUnit: typeof MeasureAreaUnit;
    measureLengthUnit: typeof MeasureLengthUnit;
    constructor(dialogRef: MatDialogRef<MeasurerDialogComponent>, data: MeasurerDialogData);
    onNoClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MeasurerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MeasurerDialogComponent, "igo-measurer-dialog", never, {}, {}, never, never>;
}
