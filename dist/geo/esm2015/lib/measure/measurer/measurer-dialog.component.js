import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MeasureAreaUnit, MeasureLengthUnit } from '../shared/measure.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
function MeasurerDialogComponent_table_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 2);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵelementStart(3, "th", 3);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "tbody");
    i0.ɵɵelementStart(7, "tr");
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "measureFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "tr");
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "measureFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "tr");
    i0.ɵɵelementStart(22, "td");
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "measureFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵtext(26);
    i0.ɵɵpipe(27, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "tr");
    i0.ɵɵelementStart(29, "td");
    i0.ɵɵtext(30);
    i0.ɵɵpipe(31, "measureFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "td");
    i0.ɵɵtext(33);
    i0.ɵɵpipe(34, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 9, "igo.geo.measure.dialog.length.title"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 11, ctx_r0.data.length, ctx_r0.measureLengthUnit.Meters));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 14, "igo.geo.measure.dialog.lengthInMeters"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(17, 16, ctx_r0.data.length, ctx_r0.measureLengthUnit.Kilometers));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 19, "igo.geo.measure.dialog.lengthInKilometers"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(24, 21, ctx_r0.data.length, ctx_r0.measureLengthUnit.Miles));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(27, 24, "igo.geo.measure.dialog.lengthInMiles"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(31, 26, ctx_r0.data.length, ctx_r0.measureLengthUnit.Feet));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(34, 29, "igo.geo.measure.dialog.lengthInFeet"));
} }
function MeasurerDialogComponent_table_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 2);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵelementStart(3, "th", 3);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "tbody");
    i0.ɵɵelementStart(7, "tr");
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "measureFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "tr");
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "measureFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "tr");
    i0.ɵɵelementStart(22, "td");
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "measureFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵtext(26);
    i0.ɵɵpipe(27, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "tr");
    i0.ɵɵelementStart(29, "td");
    i0.ɵɵtext(30);
    i0.ɵɵpipe(31, "measureFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "td");
    i0.ɵɵtext(33);
    i0.ɵɵpipe(34, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "tr");
    i0.ɵɵelementStart(36, "td");
    i0.ɵɵtext(37);
    i0.ɵɵpipe(38, "measureFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "td");
    i0.ɵɵtext(40);
    i0.ɵɵpipe(41, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "tr");
    i0.ɵɵelementStart(43, "td");
    i0.ɵɵtext(44);
    i0.ɵɵpipe(45, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "td");
    i0.ɵɵtext(47);
    i0.ɵɵpipe(48, "measureFormat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 13, "igo.geo.measure.dialog.area.title"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 15, ctx_r1.data.area, ctx_r1.measureAreaUnit.SquareMeters));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 18, "igo.geo.measure.dialog.areaInSquareMeters"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(17, 20, ctx_r1.data.area, ctx_r1.measureAreaUnit.SquareKilometers));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 23, "igo.geo.measure.dialog.areaInSquareKilometers"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(24, 25, ctx_r1.data.area, ctx_r1.measureAreaUnit.SquareMiles));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(27, 28, "igo.geo.measure.dialog.areaInSquareMiles"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(31, 30, ctx_r1.data.area, ctx_r1.measureAreaUnit.Acres));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(34, 33, "igo.geo.measure.dialog.areaInAcres"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(38, 35, ctx_r1.data.area, ctx_r1.measureAreaUnit.Hectares));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(41, 38, "igo.geo.measure.dialog.areaInHectares"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(45, 40, "igo.geo.measure.dialog.perimeterInMeters"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(48, 42, ctx_r1.data.perimeter, ctx_r1.measureLengthUnit.Meters));
} }
export class MeasurerDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.measureAreaUnit = MeasureAreaUnit;
        this.measureLengthUnit = MeasureLengthUnit;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
MeasurerDialogComponent.ɵfac = function MeasurerDialogComponent_Factory(t) { return new (t || MeasurerDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
MeasurerDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MeasurerDialogComponent, selectors: [["igo-measurer-dialog"]], decls: 5, vars: 5, consts: [["mat-dialog-title", ""], ["class", "mat-typography", 4, "ngIf"], [1, "mat-typography"], ["colspan", "2"]], template: function MeasurerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h3", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, MeasurerDialogComponent_table_3_Template, 35, 31, "table", 1);
        i0.ɵɵtemplate(4, MeasurerDialogComponent_table_4_Template, 49, 45, "table", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 3, "igo.geo.measure.dialog.title"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.data.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data.area > 0);
    } }, styles: ["[_nghost-%COMP%]{font-family:Roboto,\"Helvetica Neue\",sans-serif}h3[_ngcontent-%COMP%]{text-align:center;margin:0}table[_ngcontent-%COMP%]{width:100%;padding:10px}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeasurerDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-measurer-dialog',
                templateUrl: 'measurer-dialog.component.html',
                styleUrls: ['./measurer-dialog.component.scss']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZXItZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21lYXN1cmUvbWVhc3VyZXIvbWVhc3VyZXItZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21lYXN1cmUvbWVhc3VyZXIvbWVhc3VyZXItZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7O0lDSDNFLGdDQUN5QjtJQUN2Qiw2QkFBTztJQUNMLDBCQUFJO0lBQ0YsNkJBQWdCO0lBQUEsWUFBcUQ7O0lBQUEsaUJBQUs7SUFDNUUsaUJBQUs7SUFDUCxpQkFBUTtJQUNSLDZCQUFPO0lBQ0wsMEJBQUk7SUFDRiwwQkFBSTtJQUFBLFlBQXlEOztJQUFBLGlCQUFLO0lBQ2xFLDJCQUFJO0lBQUEsYUFBdUQ7O0lBQUEsaUJBQUs7SUFDbEUsaUJBQUs7SUFDTCwyQkFBSTtJQUNGLDJCQUFJO0lBQUEsYUFBNkQ7O0lBQUEsaUJBQUs7SUFDdEUsMkJBQUk7SUFBQSxhQUEyRDs7SUFBQSxpQkFBSztJQUN0RSxpQkFBSztJQUNMLDJCQUFJO0lBQ0YsMkJBQUk7SUFBQSxhQUF3RDs7SUFBQSxpQkFBSztJQUNqRSwyQkFBSTtJQUFBLGFBQXNEOztJQUFBLGlCQUFLO0lBQ2pFLGlCQUFLO0lBQ0wsMkJBQUk7SUFDRiwyQkFBSTtJQUFBLGFBQXVEOztJQUFBLGlCQUFLO0lBQ2hFLDJCQUFJO0lBQUEsYUFBcUQ7O0lBQUEsaUJBQUs7SUFDaEUsaUJBQUs7SUFDUCxpQkFBUTtJQUNWLGlCQUFROzs7SUFyQmMsZUFBcUQ7SUFBckQsaUZBQXFEO0lBS2pFLGVBQXlEO0lBQXpELGlHQUF5RDtJQUN6RCxlQUF1RDtJQUF2RCxxRkFBdUQ7SUFHdkQsZUFBNkQ7SUFBN0QscUdBQTZEO0lBQzdELGVBQTJEO0lBQTNELHlGQUEyRDtJQUczRCxlQUF3RDtJQUF4RCxnR0FBd0Q7SUFDeEQsZUFBc0Q7SUFBdEQsb0ZBQXNEO0lBR3RELGVBQXVEO0lBQXZELCtGQUF1RDtJQUN2RCxlQUFxRDtJQUFyRCxtRkFBcUQ7OztJQUsvRCxnQ0FDeUI7SUFDdkIsNkJBQU87SUFDTCwwQkFBSTtJQUNGLDZCQUFnQjtJQUFBLFlBQW1EOztJQUFBLGlCQUFLO0lBQzFFLGlCQUFLO0lBQ1AsaUJBQVE7SUFDUiw2QkFBTztJQUNMLDBCQUFJO0lBQ0YsMEJBQUk7SUFBQSxZQUEyRDs7SUFBQSxpQkFBSztJQUNwRSwyQkFBSTtJQUFBLGFBQTJEOztJQUFBLGlCQUFLO0lBQ3RFLGlCQUFLO0lBQ0wsMkJBQUk7SUFDRiwyQkFBSTtJQUFBLGFBQThEOztJQUFBLGlCQUFLO0lBQ3ZFLDJCQUFJO0lBQUEsYUFBK0Q7O0lBQUEsaUJBQUs7SUFDMUUsaUJBQUs7SUFDTCwyQkFBSTtJQUNGLDJCQUFJO0lBQUEsYUFBMEQ7O0lBQUEsaUJBQUs7SUFDbkUsMkJBQUk7SUFBQSxhQUEwRDs7SUFBQSxpQkFBSztJQUNyRSxpQkFBSztJQUNMLDJCQUFJO0lBQ0YsMkJBQUk7SUFBQSxhQUFvRDs7SUFBQSxpQkFBSztJQUM3RCwyQkFBSTtJQUFBLGFBQW9EOztJQUFBLGlCQUFLO0lBQy9ELGlCQUFLO0lBQ0wsMkJBQUk7SUFDRiwyQkFBSTtJQUFBLGFBQXVEOztJQUFBLGlCQUFLO0lBQ2hFLDJCQUFJO0lBQUEsYUFBdUQ7O0lBQUEsaUJBQUs7SUFDbEUsaUJBQUs7SUFDTCwyQkFBSTtJQUNGLDJCQUFJO0lBQUEsYUFBMEQ7O0lBQUEsaUJBQUs7SUFDbkUsMkJBQUk7SUFBQSxhQUE0RDs7SUFBQSxpQkFBSztJQUN2RSxpQkFBSztJQUNQLGlCQUFRO0lBQ1YsaUJBQVE7OztJQTdCYyxlQUFtRDtJQUFuRCxnRkFBbUQ7SUFLL0QsZUFBMkQ7SUFBM0QsbUdBQTJEO0lBQzNELGVBQTJEO0lBQTNELHlGQUEyRDtJQUczRCxlQUE4RDtJQUE5RCx1R0FBOEQ7SUFDOUQsZUFBK0Q7SUFBL0QsNkZBQStEO0lBRy9ELGVBQTBEO0lBQTFELGtHQUEwRDtJQUMxRCxlQUEwRDtJQUExRCx3RkFBMEQ7SUFHMUQsZUFBb0Q7SUFBcEQsNEZBQW9EO0lBQ3BELGVBQW9EO0lBQXBELGtGQUFvRDtJQUdwRCxlQUF1RDtJQUF2RCwrRkFBdUQ7SUFDdkQsZUFBdUQ7SUFBdkQscUZBQXVEO0lBR3ZELGVBQTBEO0lBQTFELHdGQUEwRDtJQUMxRCxlQUE0RDtJQUE1RCxvR0FBNEQ7O0FEL0N0RSxNQUFNLE9BQU8sdUJBQXVCO0lBTWxDLFlBQ1MsU0FBZ0QsRUFDdkIsSUFBd0I7UUFEakQsY0FBUyxHQUFULFNBQVMsQ0FBdUM7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFOMUQsb0JBQWUsR0FBRyxlQUFlLENBQUM7UUFFbEMsc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFLbkMsQ0FBQztJQUVKLFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OzhGQWJVLHVCQUF1Qiw4REFReEIsZUFBZTswRUFSZCx1QkFBdUI7UUNacEMsNkJBQXFCO1FBQUEsWUFBOEM7O1FBQUEsaUJBQUs7UUFFeEUsOEVBeUJRO1FBRVIsOEVBaUNROztRQTlEYSxlQUE4QztRQUE5QywwRUFBOEM7UUFFM0QsZUFBcUI7UUFBckIsMENBQXFCO1FBMkJyQixlQUFtQjtRQUFuQix3Q0FBbUI7O3VGRGpCZCx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEOztzQkFTSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBNZWFzdXJlckRpYWxvZ0RhdGEgfSBmcm9tICcuLi9zaGFyZWQvbWVhc3VyZS5pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgTWVhc3VyZUFyZWFVbml0LCBNZWFzdXJlTGVuZ3RoVW5pdH0gZnJvbSAnLi4vc2hhcmVkL21lYXN1cmUuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1tZWFzdXJlci1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ21lYXN1cmVyLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lYXN1cmVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lYXN1cmVyRGlhbG9nQ29tcG9uZW50IHtcblxuICBtZWFzdXJlQXJlYVVuaXQgPSBNZWFzdXJlQXJlYVVuaXQ7XG5cbiAgbWVhc3VyZUxlbmd0aFVuaXQgPSBNZWFzdXJlTGVuZ3RoVW5pdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TWVhc3VyZXJEaWFsb2dDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogTWVhc3VyZXJEaWFsb2dEYXRhXG4gICkge31cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4iLCI8aDMgbWF0LWRpYWxvZy10aXRsZT57eydpZ28uZ2VvLm1lYXN1cmUuZGlhbG9nLnRpdGxlJyB8IHRyYW5zbGF0ZX19PC9oMz5cblxuPHRhYmxlICpuZ0lmPVwiZGF0YS5sZW5ndGggPiAwXCJcbiAgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoIGNvbHNwYW49XCIyXCI+e3snaWdvLmdlby5tZWFzdXJlLmRpYWxvZy5sZW5ndGgudGl0bGUnIHwgdHJhbnNsYXRlfX08L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICA8dHI+XG4gICAgICA8dGQ+e3tkYXRhLmxlbmd0aCB8IG1lYXN1cmVGb3JtYXQ6IG1lYXN1cmVMZW5ndGhVbml0Lk1ldGVyc319PC90ZD5cbiAgICAgIDx0ZD57eydpZ28uZ2VvLm1lYXN1cmUuZGlhbG9nLmxlbmd0aEluTWV0ZXJzJyB8IHRyYW5zbGF0ZX19PC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD57e2RhdGEubGVuZ3RoIHwgbWVhc3VyZUZvcm1hdDogbWVhc3VyZUxlbmd0aFVuaXQuS2lsb21ldGVyc319PC90ZD5cbiAgICAgIDx0ZD57eydpZ28uZ2VvLm1lYXN1cmUuZGlhbG9nLmxlbmd0aEluS2lsb21ldGVycycgfCB0cmFuc2xhdGV9fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+e3tkYXRhLmxlbmd0aCB8IG1lYXN1cmVGb3JtYXQ6IG1lYXN1cmVMZW5ndGhVbml0Lk1pbGVzfX08L3RkPlxuICAgICAgPHRkPnt7J2lnby5nZW8ubWVhc3VyZS5kaWFsb2cubGVuZ3RoSW5NaWxlcycgfCB0cmFuc2xhdGV9fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+e3tkYXRhLmxlbmd0aCB8IG1lYXN1cmVGb3JtYXQ6IG1lYXN1cmVMZW5ndGhVbml0LkZlZXR9fTwvdGQ+XG4gICAgICA8dGQ+e3snaWdvLmdlby5tZWFzdXJlLmRpYWxvZy5sZW5ndGhJbkZlZXQnIHwgdHJhbnNsYXRlfX08L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuXG48dGFibGUgKm5nSWY9XCJkYXRhLmFyZWEgPiAwXCJcbiAgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoIGNvbHNwYW49XCIyXCI+e3snaWdvLmdlby5tZWFzdXJlLmRpYWxvZy5hcmVhLnRpdGxlJyB8IHRyYW5zbGF0ZX19PC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPHRyPlxuICAgICAgPHRkPnt7ZGF0YS5hcmVhIHwgbWVhc3VyZUZvcm1hdDogbWVhc3VyZUFyZWFVbml0LlNxdWFyZU1ldGVyc319PC90ZD5cbiAgICAgIDx0ZD57eydpZ28uZ2VvLm1lYXN1cmUuZGlhbG9nLmFyZWFJblNxdWFyZU1ldGVycycgfCB0cmFuc2xhdGV9fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+e3tkYXRhLmFyZWEgfCBtZWFzdXJlRm9ybWF0Om1lYXN1cmVBcmVhVW5pdC5TcXVhcmVLaWxvbWV0ZXJzfX08L3RkPlxuICAgICAgPHRkPnt7J2lnby5nZW8ubWVhc3VyZS5kaWFsb2cuYXJlYUluU3F1YXJlS2lsb21ldGVycycgfCB0cmFuc2xhdGV9fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+e3tkYXRhLmFyZWEgfCBtZWFzdXJlRm9ybWF0OiBtZWFzdXJlQXJlYVVuaXQuU3F1YXJlTWlsZXN9fTwvdGQ+XG4gICAgICA8dGQ+e3snaWdvLmdlby5tZWFzdXJlLmRpYWxvZy5hcmVhSW5TcXVhcmVNaWxlcycgfCB0cmFuc2xhdGV9fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+e3tkYXRhLmFyZWEgfCBtZWFzdXJlRm9ybWF0OiBtZWFzdXJlQXJlYVVuaXQuQWNyZXN9fTwvdGQ+XG4gICAgICA8dGQ+e3snaWdvLmdlby5tZWFzdXJlLmRpYWxvZy5hcmVhSW5BY3JlcycgfCB0cmFuc2xhdGV9fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+e3tkYXRhLmFyZWEgfCBtZWFzdXJlRm9ybWF0OiBtZWFzdXJlQXJlYVVuaXQuSGVjdGFyZXN9fTwvdGQ+XG4gICAgICA8dGQ+e3snaWdvLmdlby5tZWFzdXJlLmRpYWxvZy5hcmVhSW5IZWN0YXJlcycgfCB0cmFuc2xhdGV9fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+e3snaWdvLmdlby5tZWFzdXJlLmRpYWxvZy5wZXJpbWV0ZXJJbk1ldGVycycgfCB0cmFuc2xhdGV9fTwvdGQ+XG4gICAgICA8dGQ+e3tkYXRhLnBlcmltZXRlciB8IG1lYXN1cmVGb3JtYXQ6IG1lYXN1cmVMZW5ndGhVbml0Lk1ldGVyc319PC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbiJdfQ==