import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/button";
import * as i6 from "@ngx-translate/core";
export class PoiDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
PoiDialogComponent.ɵfac = function PoiDialogComponent_Factory(t) { return new (t || PoiDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
PoiDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoiDialogComponent, selectors: [["igo-poi-dialog"]], decls: 14, vars: 14, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", ""], ["matInput", "", "required", "", "autocomplete", "off", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-button", "", 3, "click"]], template: function PoiDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelementStart(5, "input", 2);
        i0.ɵɵlistener("ngModelChange", function PoiDialogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.title = $event; });
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵlistener("click", function PoiDialogComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(ctx.title); });
        i0.ɵɵtext(9);
        i0.ɵɵpipe(10, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 5);
        i0.ɵɵlistener("click", function PoiDialogComponent_Template_button_click_11_listener() { return ctx.dialogRef.close(false); });
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 6, "igo.context.poiButton.dialog.title"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(6, 8, "igo.context.poiButton.dialog.placeholder"))("ngModel", ctx.title);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 10, "igo.common.confirmDialog.confirmBtn"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 12, "igo.common.confirmDialog.cancelBtn"), " ");
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.RequiredValidator, i4.NgControlStatus, i4.NgModel, i1.MatDialogActions, i5.MatButton], pipes: [i6.TranslatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoiDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-poi-dialog',
                templateUrl: './poi-dialog.component.html'
            }]
    }], function () { return [{ type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYXAtYnV0dG9uL3BvaS1idXR0b24vcG9pLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYXAtYnV0dG9uL3BvaS1idXR0b24vcG9pLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQU8xQyxNQUFNLE9BQU8sa0JBQWtCO0lBRzdCLFlBQW1CLFNBQTJDO1FBQTNDLGNBQVMsR0FBVCxTQUFTLENBQWtDO0lBQUcsQ0FBQzs7b0ZBSHZELGtCQUFrQjtxRUFBbEIsa0JBQWtCO1FDUC9CLDZCQUE0QztRQUFBLFlBQXNEOztRQUFBLGlCQUFLO1FBQ3ZHLDhCQUF3QjtRQUN0QixzQ0FBZ0I7UUFDZCxnQ0FFc0I7UUFBcEIsMElBQW1COztRQUZyQixpQkFFc0I7UUFDeEIsaUJBQWlCO1FBQ25CLGlCQUFNO1FBQ04sOEJBQXdCO1FBQ3RCLGlDQUV3QztRQUFqQywrRkFBUyw4QkFBc0IsSUFBQztRQUNyQyxZQUNGOztRQUFBLGlCQUFTO1FBQ1Qsa0NBQ3lDO1FBQWpDLGdHQUFTLG9CQUFnQixLQUFLLENBQUMsSUFBQztRQUN0QyxhQUNGOztRQUFBLGlCQUFTO1FBQ1gsaUJBQU07O1FBbEJzQyxlQUFzRDtRQUF0RCxnRkFBc0Q7UUFJNUYsZUFBc0U7UUFBdEUsOEZBQXNFLHNCQUFBO1FBTW5FLGVBQW1CO1FBQW5CLHFDQUFtQjtRQUV4QixlQUNGO1FBREUsOEZBQ0Y7UUFHRSxlQUNGO1FBREUsNkZBQ0Y7O3VGRFZXLGtCQUFrQjtjQUo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXBvaS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9pLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUG9pRGlhbG9nQ29tcG9uZW50IHtcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFBvaURpYWxvZ0NvbXBvbmVudD4pIHt9XG59XG4iLCI8aDEgbWF0LWRpYWxvZy10aXRsZSBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+e3sgJ2lnby5jb250ZXh0LnBvaUJ1dHRvbi5kaWFsb2cudGl0bGUnIHwgdHJhbnNsYXRlIH19PC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IG1hdElucHV0IHJlcXVpcmVkIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiJ2lnby5jb250ZXh0LnBvaUJ1dHRvbi5kaWFsb2cucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgIFsobmdNb2RlbCldPVwidGl0bGVcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgW2Rpc2FibGVkXT1cIiF0aXRsZVwiXG4gICAgICAgICAoY2xpY2spPVwiZGlhbG9nUmVmLmNsb3NlKHRpdGxlKVwiPlxuICAgIHt7J2lnby5jb21tb24uY29uZmlybURpYWxvZy5jb25maXJtQnRuJyB8IHRyYW5zbGF0ZX19XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICAgICAoY2xpY2spPVwiZGlhbG9nUmVmLmNsb3NlKGZhbHNlKVwiPlxuICAgIHt7J2lnby5jb21tb24uY29uZmlybURpYWxvZy5jYW5jZWxCdG4nIHzCoHRyYW5zbGF0ZX19XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=