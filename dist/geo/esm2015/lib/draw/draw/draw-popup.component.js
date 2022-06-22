import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/button";
import * as i5 from "@ngx-translate/core";
export class DrawPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    noLabel() {
        this.dialogRef.close();
    }
}
DrawPopupComponent.ɵfac = function DrawPopupComponent_Factory(t) { return new (t || DrawPopupComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
DrawPopupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawPopupComponent, selectors: [["igo-draw-popup-component"]], decls: 14, vars: 11, consts: [["mat-dialog-content", ""], [1, "mat-typography"], [1, "example-full-width"], ["matInput", "", 3, "placeholder", "value"], ["input", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function DrawPopupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "p", 1);
        i0.ɵɵtext(2);
        i0.ɵɵpipe(3, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-form-field", 2);
        i0.ɵɵelement(5, "input", 3, 4);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵelementStart(9, "button", 6);
        i0.ɵɵlistener("click", function DrawPopupComponent_Template_button_click_9_listener() { return ctx.noLabel(); });
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 7);
        i0.ɵɵtext(13, "OK ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, "igo.geo.draw.dialogInstruction"));
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(7, 7, "igo.geo.draw.dialogTitle"));
        i0.ɵɵpropertyInterpolate("value", ctx.data.currentLabel);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(11, 9, "igo.geo.draw.noLabel"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("mat-dialog-close", _r0.value);
    } }, directives: [i1.MatDialogContent, i2.MatFormField, i3.MatInput, i1.MatDialogActions, i4.MatButton, i1.MatDialogClose], pipes: [i5.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawPopupComponent, [{
        type: Component,
        args: [{
                selector: 'igo-draw-popup-component',
                templateUrl: './draw-popup.component.html',
                styleUrls: ['./draw-popup.component.scss'],
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kcmF3L2RyYXcvZHJhdy1wb3B1cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kcmF3L2RyYXcvZHJhdy1wb3B1cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBV3ZFLE1BQU0sT0FBTyxrQkFBa0I7SUFFN0IsWUFDUyxTQUEyQyxFQUNsQixJQUE0QjtRQURyRCxjQUFTLEdBQVQsU0FBUyxDQUFrQztRQUNsQixTQUFJLEdBQUosSUFBSSxDQUF3QjtJQUFHLENBQUM7SUFFbEUsT0FBTztRQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7b0ZBUlUsa0JBQWtCLDhEQUluQixlQUFlO3FFQUpkLGtCQUFrQjtRQ1pqQyw4QkFBd0I7UUFDdEIsNEJBQTBCO1FBQUEsWUFBZ0Q7O1FBQUEsaUJBQUk7UUFDOUUseUNBQTJDO1FBQ3pDLDhCQUlnQzs7UUFDbEMsaUJBQWlCO1FBQ25CLGlCQUFNO1FBQ04sOEJBQXdCO1FBQ3RCLGlDQUVzQjtRQUFwQiwrRkFBUyxhQUFTLElBQUM7UUFBQyxhQUN0Qjs7UUFBQSxpQkFBUztRQUNULGtDQUdtQztRQUFBLG9CQUNuQztRQUFBLGlCQUFTO1FBQ1gsaUJBQU07OztRQW5Cc0IsZUFBZ0Q7UUFBaEQsNEVBQWdEO1FBS3RFLGVBQXdEO1FBQXhELHlGQUF3RDtRQUN4RCx3REFBNkI7UUFNWCxlQUN0QjtRQURzQiw2RUFDdEI7UUFJRSxlQUFnQztRQUFoQyw0Q0FBZ0M7O3VGRE5yQixrQkFBa0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOztzQkFLSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lnby1kcmF3LXBvcHVwLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RyYXctcG9wdXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RyYXctcG9wdXAuY29tcG9uZW50LnNjc3MnXSxcbiAgfSlcbiAgZXhwb3J0IGNsYXNzIERyYXdQb3B1cENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEcmF3UG9wdXBDb21wb25lbnQ+LFxuICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiB7Y3VycmVudExhYmVsOiBzdHJpbmd9KSB7fVxuXG4gICAgbm9MYWJlbCgpIHtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuICB9XG4iLCI8ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbiAgPHAgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPnt7J2lnby5nZW8uZHJhdy5kaWFsb2dJbnN0cnVjdGlvbicgfCB0cmFuc2xhdGV9fTwvcD5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPGlucHV0XG4gICAgICAjaW5wdXRcbiAgICAgIG1hdElucHV0XG4gICAgICBwbGFjZWhvbGRlcj1cInt7J2lnby5nZW8uZHJhdy5kaWFsb2dUaXRsZScgfCB0cmFuc2xhdGV9fVwiXG4gICAgICB2YWx1ZT1cInt7ZGF0YS5jdXJyZW50TGFiZWx9fVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvblxuICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgKGNsaWNrKT1cIm5vTGFiZWwoKVwiPnt7J2lnby5nZW8uZHJhdy5ub0xhYmVsJyB8IHRyYW5zbGF0ZX19XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uXG4gICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgIFttYXQtZGlhbG9nLWNsb3NlXT1cImlucHV0LnZhbHVlXCI+T0tcbiAgPC9idXR0b24+XG48L2Rpdj4iXX0=