import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/button";
import * as i6 from "@ngx-translate/core";
export class BookmarkDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
BookmarkDialogComponent.ɵfac = function BookmarkDialogComponent_Factory(t) { return new (t || BookmarkDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
BookmarkDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BookmarkDialogComponent, selectors: [["igo-bookmark-dialog"]], decls: 14, vars: 14, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], ["matInput", "", "required", "", "autocomplete", "off", "maxlength", "128", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-button", "", 3, "click"]], template: function BookmarkDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelementStart(5, "input", 2);
        i0.ɵɵlistener("ngModelChange", function BookmarkDialogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.title = $event; });
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵlistener("click", function BookmarkDialogComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(ctx.title); });
        i0.ɵɵtext(9);
        i0.ɵɵpipe(10, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 5);
        i0.ɵɵlistener("click", function BookmarkDialogComponent_Template_button_click_11_listener() { return ctx.dialogRef.close(false); });
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 6, "igo.context.bookmarkButton.dialog.title"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(6, 8, "igo.context.bookmarkButton.dialog.placeholder"))("ngModel", ctx.title);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 10, "igo.common.confirmDialog.confirmBtn"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 12, "igo.common.confirmDialog.cancelBtn"), " ");
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.RequiredValidator, i4.MaxLengthValidator, i4.NgControlStatus, i4.NgModel, i1.MatDialogActions, i5.MatButton], pipes: [i6.TranslatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BookmarkDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-bookmark-dialog',
                templateUrl: './bookmark-dialog.component.html'
            }]
    }], function () { return [{ type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va21hcmstZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LW1hcC1idXR0b24vYm9va21hcmstYnV0dG9uL2Jvb2ttYXJrLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYXAtYnV0dG9uL2Jvb2ttYXJrLWJ1dHRvbi9ib29rbWFyay1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFPMUMsTUFBTSxPQUFPLHVCQUF1QjtJQUdsQyxZQUFtQixTQUFnRDtRQUFoRCxjQUFTLEdBQVQsU0FBUyxDQUF1QztJQUFHLENBQUM7OzhGQUg1RCx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ1BwQyw2QkFBNEM7UUFBQSxZQUEyRDs7UUFBQSxpQkFBSztRQUM1Ryw4QkFBK0M7UUFDN0Msc0NBQWdCO1FBQ2QsZ0NBR3NCO1FBQXBCLCtJQUFtQjs7UUFIckIsaUJBR3NCO1FBQ3hCLGlCQUFpQjtRQUNuQixpQkFBTTtRQUNOLDhCQUF3QjtRQUN0QixpQ0FFd0M7UUFBakMsb0dBQVMsOEJBQXNCLElBQUM7UUFDckMsWUFDRjs7UUFBQSxpQkFBUztRQUNULGtDQUN5QztRQUFqQyxxR0FBUyxvQkFBZ0IsS0FBSyxDQUFDLElBQUM7UUFDdEMsYUFDRjs7UUFBQSxpQkFBUztRQUNYLGlCQUFNOztRQW5Cc0MsZUFBMkQ7UUFBM0QscUZBQTJEO1FBS2pHLGVBQTJFO1FBQTNFLG1HQUEyRSxzQkFBQTtRQU14RSxlQUFtQjtRQUFuQixxQ0FBbUI7UUFFeEIsZUFDRjtRQURFLDhGQUNGO1FBR0UsZUFDRjtRQURFLDZGQUNGOzt1RkRYVyx1QkFBdUI7Y0FKbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1ib29rbWFyay1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYm9va21hcmstZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCb29rbWFya0RpYWxvZ0NvbXBvbmVudCB7XG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxCb29rbWFya0RpYWxvZ0NvbXBvbmVudD4pIHt9XG59XG4iLCI8aDEgbWF0LWRpYWxvZy10aXRsZSBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+e3sgJ2lnby5jb250ZXh0LmJvb2ttYXJrQnV0dG9uLmRpYWxvZy50aXRsZScgfMKgdHJhbnNsYXRlIH19PC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCBtYXRJbnB1dCByZXF1aXJlZCBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgbWF4bGVuZ3RoPVwiMTI4XCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCInaWdvLmNvbnRleHQuYm9va21hcmtCdXR0b24uZGlhbG9nLnBsYWNlaG9sZGVyJyB8wqB0cmFuc2xhdGVcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ0aXRsZVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICBbZGlzYWJsZWRdPVwiIXRpdGxlXCJcbiAgICAgICAgIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UodGl0bGUpXCI+XG4gICAge3snaWdvLmNvbW1vbi5jb25maXJtRGlhbG9nLmNvbmZpcm1CdG4nIHwgdHJhbnNsYXRlfX1cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvblxuICAgICAgICAgIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UoZmFsc2UpXCI+XG4gICAge3snaWdvLmNvbW1vbi5jb25maXJtRGlhbG9nLmNhbmNlbEJ0bicgfMKgdHJhbnNsYXRlfX1cbiAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==