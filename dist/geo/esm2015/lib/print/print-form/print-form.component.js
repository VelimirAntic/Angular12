import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrintOutputFormat, PrintPaperFormat, PrintOrientation, PrintResolution, PrintSaveImageFormat, PrintLegendPosition } from '../shared/print.type';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/slide-toggle";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/core";
import * as i9 from "@ngx-translate/core";
import * as i10 from "@igo2/common";
function PrintFormComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const legendPosition_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", legendPosition_r6.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.printForm.legendPositions." + legendPosition_r6.value), " ");
} }
function PrintFormComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const outputFormat_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", outputFormat_r7.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", outputFormat_r7.value, " ");
} }
function PrintFormComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const paperFormat_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", paperFormat_r8.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.printForm.paperFormats." + paperFormat_r8.value), " ");
} }
function PrintFormComponent_mat_option_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageFormat_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", imageFormat_r9.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", imageFormat_r9.value, " ");
} }
function PrintFormComponent_mat_option_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const resolution_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", resolution_r10.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", resolution_r10.value + " PPI", " ");
} }
function PrintFormComponent_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const orientation_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", orientation_r11.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.printForm." + orientation_r11.value), " ");
} }
export class PrintFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.outputFormats = PrintOutputFormat;
        this.paperFormats = PrintPaperFormat;
        this.orientations = PrintOrientation;
        this.resolutions = PrintResolution;
        this.imageFormats = PrintSaveImageFormat;
        this.legendPositions = PrintLegendPosition;
        this.isPrintService = true;
        this.submit = new EventEmitter();
        this.form = this.formBuilder.group({
            title: ['', []],
            subtitle: ['', []],
            comment: ['', []],
            outputFormat: ['', [Validators.required]],
            paperFormat: ['', [Validators.required]],
            imageFormat: ['', [Validators.required]],
            resolution: ['', [Validators.required]],
            orientation: ['', [Validators.required]],
            legendPosition: ['', [Validators.required]],
            showProjection: false,
            showScale: false,
            showLegend: false,
            doZipFile: [{ hidden: this.isPrintService }]
        });
    }
    get imageFormat() {
        return this.imageFormatField.value;
    }
    set imageFormat(value) {
        this.imageFormatField.setValue(value || PrintSaveImageFormat.Jpeg, {
            onlySelf: true
        });
    }
    get outputFormat() {
        return this.outputFormatField.value;
    }
    set outputFormat(value) {
        this.outputFormatField.setValue(value || PrintOutputFormat.Pdf, {
            onlySelf: true
        });
    }
    get paperFormat() {
        return this.paperFormatField.value;
    }
    set paperFormat(value) {
        this.paperFormatField.setValue(value || PrintPaperFormat.Letter, {
            onlySelf: true
        });
    }
    get orientation() {
        return this.orientationField.value;
    }
    set orientation(value) {
        this.orientationField.setValue(value || PrintOrientation.landscape, {
            onlySelf: true
        });
    }
    get resolution() {
        return this.resolutionField.value;
    }
    set resolution(value) {
        this.resolutionField.setValue(value || PrintResolution['96'], {
            onlySelf: true
        });
    }
    get legendPosition() {
        return this.legendPositionField.value;
    }
    set legendPosition(value) {
        this.legendPositionField.setValue(value || PrintLegendPosition.none, {
            onlySelf: true
        });
    }
    get title() {
        return this.titleField.value;
    }
    set title(value) {
        this.titleField.setValue(value, { onlySelf: true });
    }
    get subtitle() {
        return this.subtitleField.value;
    }
    set subtitle(value) {
        this.subtitleField.setValue(value, { onlySelf: true });
    }
    get comment() {
        return this.commentField.value;
    }
    set comment(value) {
        this.commentField.setValue(value, { onlySelf: true });
    }
    get showProjection() {
        return this.showProjectionField.value;
    }
    set showProjection(value) {
        this.showProjectionField.setValue(value, { onlySelf: true });
    }
    get showScale() {
        return this.showScaleField.value;
    }
    set showScale(value) {
        this.showScaleField.setValue(value, { onlySelf: true });
    }
    get showLegend() {
        return this.showLegendField.value;
    }
    set showLegend(value) {
        this.showLegendField.setValue(value, { onlySelf: true });
    }
    get doZipFile() {
        return this.doZipFileField.value;
    }
    set doZipFile(value) {
        this.doZipFileField.setValue(value, { onlySelf: true });
    }
    get outputFormatField() {
        return this.form.controls.outputFormat;
    }
    get paperFormatField() {
        return this.form.controls.paperFormat;
    }
    get imageFormatField() {
        return this.form.controls.imageFormat;
    }
    get orientationField() {
        return this.form.controls.orientation;
    }
    get resolutionField() {
        return this.form.controls.resolution;
    }
    get commentField() {
        return this.form.controls.comment;
    }
    get showProjectionField() {
        return this.form.controls.showProjection;
    }
    get showScaleField() {
        return this.form.controls.showScale;
    }
    get showLegendField() {
        return this.form.controls.showLegend;
    }
    get doZipFileField() {
        return this.form.controls.doZipFile;
    }
    get titleField() {
        return this.form.controls.title;
    }
    get subtitleField() {
        return this.form.controls.subtitle;
    }
    get legendPositionField() {
        return this.form.controls.legendPosition;
    }
    ngOnInit() {
        this.doZipFileField.setValue(false);
    }
    handleFormSubmit(data, isValid) {
        data.isPrintService = this.isPrintService;
        if (isValid) {
            this.submit.emit(data);
        }
    }
    toggleImageSaveProp() {
        if (this.outputFormatField.value === 'Image') {
            this.isPrintService = false;
        }
        else {
            this.isPrintService = true;
        }
    }
}
PrintFormComponent.ɵfac = function PrintFormComponent_Factory(t) { return new (t || PrintFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
PrintFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PrintFormComponent, selectors: [["igo-print-form"]], inputs: { disabled$: "disabled$", imageFormat: "imageFormat", outputFormat: "outputFormat", paperFormat: "paperFormat", orientation: "orientation", resolution: "resolution", legendPosition: "legendPosition", title: "title", subtitle: "subtitle", comment: "comment", showProjection: "showProjection", showScale: "showScale", showLegend: "showLegend", doZipFile: "doZipFile" }, outputs: { submit: "submit" }, decls: 65, vars: 72, consts: [[1, "igo-form", 3, "formGroup"], [1, "igo-input-container"], ["matInput", "", "formControlName", "title", 3, "placeholder"], ["matInput", "", "formControlName", "subtitle", 3, "placeholder"], ["matInput", "", "formControlName", "comment", 3, "placeholder"], [1, "print-slide-toggle-container", "mat-typography"], ["formControlName", "showProjection", 1, "print-option", 3, "labelPosition"], ["formControlName", "showScale", 1, "print-option", 3, "labelPosition"], ["formControlName", "doZipFile", 1, "print-option", 3, "labelPosition"], ["formControlName", "legendPosition", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "outputFormat", 3, "placeholder", "selectionChange"], ["formControlName", "paperFormat", 3, "placeholder"], ["formControlName", "imageFormat", 3, "placeholder"], [1, "igo-input-container", 2, "display", "none"], ["formControlName", "resolution", 3, "placeholder"], ["formControlName", "orientation", 3, "placeholder"], [1, "igo-form-button-group", "print-button-top-padding"], ["mat-raised-button", "", "type", "button", 3, "disabled", "click"], [3, "value"]], template: function PrintFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 1);
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵelement(7, "input", 3);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 1);
        i0.ɵɵelementStart(10, "mat-form-field");
        i0.ɵɵelement(11, "input", 4);
        i0.ɵɵpipe(12, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 1);
        i0.ɵɵelementStart(14, "div", 5);
        i0.ɵɵelementStart(15, "mat-slide-toggle", 6);
        i0.ɵɵtext(16);
        i0.ɵɵpipe(17, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-slide-toggle", 7);
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "mat-slide-toggle", 8);
        i0.ɵɵtext(22);
        i0.ɵɵpipe(23, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 1);
        i0.ɵɵelementStart(25, "mat-form-field");
        i0.ɵɵelementStart(26, "mat-select", 9);
        i0.ɵɵpipe(27, "translate");
        i0.ɵɵtemplate(28, PrintFormComponent_mat_option_28_Template, 3, 4, "mat-option", 10);
        i0.ɵɵpipe(29, "keyvalue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 1);
        i0.ɵɵelementStart(31, "mat-form-field");
        i0.ɵɵelementStart(32, "mat-select", 11);
        i0.ɵɵlistener("selectionChange", function PrintFormComponent_Template_mat_select_selectionChange_32_listener() { return ctx.toggleImageSaveProp(); });
        i0.ɵɵpipe(33, "translate");
        i0.ɵɵtemplate(34, PrintFormComponent_mat_option_34_Template, 2, 2, "mat-option", 10);
        i0.ɵɵpipe(35, "keyvalue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "div", 1);
        i0.ɵɵelementStart(37, "mat-form-field");
        i0.ɵɵelementStart(38, "mat-select", 12);
        i0.ɵɵpipe(39, "translate");
        i0.ɵɵtemplate(40, PrintFormComponent_mat_option_40_Template, 3, 4, "mat-option", 10);
        i0.ɵɵpipe(41, "keyvalue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "div", 1);
        i0.ɵɵelementStart(43, "mat-form-field");
        i0.ɵɵelementStart(44, "mat-select", 13);
        i0.ɵɵpipe(45, "translate");
        i0.ɵɵtemplate(46, PrintFormComponent_mat_option_46_Template, 2, 2, "mat-option", 10);
        i0.ɵɵpipe(47, "keyvalue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "div", 14);
        i0.ɵɵelementStart(49, "mat-form-field");
        i0.ɵɵelementStart(50, "mat-select", 15);
        i0.ɵɵpipe(51, "translate");
        i0.ɵɵtemplate(52, PrintFormComponent_mat_option_52_Template, 2, 2, "mat-option", 10);
        i0.ɵɵpipe(53, "keyvalue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "div", 1);
        i0.ɵɵelementStart(55, "mat-form-field");
        i0.ɵɵelementStart(56, "mat-select", 16);
        i0.ɵɵpipe(57, "translate");
        i0.ɵɵtemplate(58, PrintFormComponent_mat_option_58_Template, 3, 4, "mat-option", 10);
        i0.ɵɵpipe(59, "keyvalue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "div", 17);
        i0.ɵɵelementStart(61, "button", 18);
        i0.ɵɵlistener("click", function PrintFormComponent_Template_button_click_61_listener() { return ctx.handleFormSubmit(ctx.form.value, ctx.form.valid); });
        i0.ɵɵpipe(62, "async");
        i0.ɵɵtext(63);
        i0.ɵɵpipe(64, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(4, 32, "igo.geo.printForm.title"));
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(8, 34, "igo.geo.printForm.subtitle"));
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(12, 36, "igo.geo.printForm.comment"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("labelPosition", "before");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(17, 38, "igo.geo.printForm.showProjection"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("labelPosition", "before");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 40, "igo.geo.printForm.showScale"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("display", ctx.isPrintService ? "none" : "");
        i0.ɵɵproperty("labelPosition", "before");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(23, 42, "igo.geo.printForm.doZipFile"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(27, 44, "igo.geo.printForm.legendPosition"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(29, 46, ctx.legendPositions));
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(33, 48, "igo.geo.printForm.outputFormat"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(35, 50, ctx.outputFormats));
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("display", ctx.isPrintService ? "block" : "none");
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(39, 52, "igo.geo.printForm.paperFormat"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(41, 54, ctx.paperFormats));
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("display", ctx.isPrintService ? "none" : "block");
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(45, 56, "igo.geo.printForm.imageFormat"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(47, 58, ctx.imageFormats));
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(51, 60, "igo.geo.printForm.resolution"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(53, 62, ctx.resolutions));
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("display", ctx.isPrintService ? "block" : "none");
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(57, 64, "igo.geo.printForm.orientation"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(59, 66, ctx.orientations));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !ctx.form.valid || i0.ɵɵpipeBind1(62, 68, ctx.disabled$));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(64, 70, "igo.geo.printForm.saveBtn"), " ");
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i4.MatSlideToggle, i5.MatSelect, i6.NgForOf, i7.MatButton, i8.MatOption], pipes: [i9.TranslatePipe, i10.KeyValuePipe, i6.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.print-slide-toggle-container[_ngcontent-%COMP%]{overflow-x:hidden}.print-slide-toggle-container[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{width:100%;margin:10px}.print-slide-toggle-container[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-content{width:calc(100% - 60px)}.print-option[_ngcontent-%COMP%]{display:block;margin-right:10px;margin-bottom:15px}.print-button-top-padding[_ngcontent-%COMP%]{padding-top:25px}.igo-form[_ngcontent-%COMP%]{padding:10px 5px 5px}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PrintFormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-print-form',
                templateUrl: './print-form.component.html',
                styleUrls: ['./print-form.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { disabled$: [{
            type: Input
        }], imageFormat: [{
            type: Input
        }], outputFormat: [{
            type: Input
        }], paperFormat: [{
            type: Input
        }], orientation: [{
            type: Input
        }], resolution: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], comment: [{
            type: Input
        }], showProjection: [{
            type: Input
        }], showScale: [{
            type: Input
        }], showLegend: [{
            type: Input
        }], doZipFile: [{
            type: Input
        }], submit: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9wcmludC9wcmludC1mb3JtL3ByaW50LWZvcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvcHJpbnQvcHJpbnQtZm9ybS9wcmludC1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUlMLFVBQVUsRUFDWCxNQUFNLGdCQUFnQixDQUFDO0FBS3hCLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7O0lDcUN0QixzQ0FBb0c7SUFDaEcsWUFDSjs7SUFBQSxpQkFBYTs7O0lBRjBELDZDQUE0QjtJQUMvRixlQUNKO0lBREkscUhBQ0o7OztJQVVBLHNDQUE4RjtJQUMxRixZQUNKO0lBQUEsaUJBQWE7OztJQUZzRCwyQ0FBMEI7SUFDekYsZUFDSjtJQURJLHNEQUNKOzs7SUFVQSxzQ0FBMkY7SUFDekYsWUFDRjs7SUFBQSxpQkFBYTs7O0lBRm9ELDBDQUF5QjtJQUN4RixlQUNGO0lBREUsK0dBQ0Y7OztJQVVBLHNDQUEyRjtJQUN6RixZQUNGO0lBQUEsaUJBQWE7OztJQUZvRCwwQ0FBeUI7SUFDeEYsZUFDRjtJQURFLHFEQUNGOzs7SUFVQSxzQ0FBd0Y7SUFDdEYsWUFDRjtJQUFBLGlCQUFhOzs7SUFGa0QsMENBQXdCO0lBQ3JGLGVBQ0Y7SUFERSw4REFDRjs7O0lBVUEsc0NBQTJGO0lBQ3pGLFlBQ0Y7O0lBQUEsaUJBQWE7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T3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUNvbnRyb2wsXG4gIFZhbGlkYXRvcnNcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFByaW50T3B0aW9ucyB9IGZyb20gJy4uL3NoYXJlZC9wcmludC5pbnRlcmZhY2UnO1xuXG5pbXBvcnQge1xuICBQcmludE91dHB1dEZvcm1hdCxcbiAgUHJpbnRQYXBlckZvcm1hdCxcbiAgUHJpbnRPcmllbnRhdGlvbixcbiAgUHJpbnRSZXNvbHV0aW9uLFxuICBQcmludFNhdmVJbWFnZUZvcm1hdCxcbiAgUHJpbnRMZWdlbmRQb3NpdGlvblxufSBmcm9tICcuLi9zaGFyZWQvcHJpbnQudHlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1wcmludC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ByaW50LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcmludC1mb3JtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJpbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIG91dHB1dEZvcm1hdHMgPSBQcmludE91dHB1dEZvcm1hdDtcbiAgcHVibGljIHBhcGVyRm9ybWF0cyA9IFByaW50UGFwZXJGb3JtYXQ7XG4gIHB1YmxpYyBvcmllbnRhdGlvbnMgPSBQcmludE9yaWVudGF0aW9uO1xuICBwdWJsaWMgcmVzb2x1dGlvbnMgPSBQcmludFJlc29sdXRpb247XG4gIHB1YmxpYyBpbWFnZUZvcm1hdHMgPSBQcmludFNhdmVJbWFnZUZvcm1hdDtcbiAgcHVibGljIGxlZ2VuZFBvc2l0aW9ucyA9IFByaW50TGVnZW5kUG9zaXRpb247XG4gIHB1YmxpYyBpc1ByaW50U2VydmljZSA9IHRydWU7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgQElucHV0KClcbiAgZ2V0IGltYWdlRm9ybWF0KCk6IFByaW50U2F2ZUltYWdlRm9ybWF0IHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZUZvcm1hdEZpZWxkLnZhbHVlO1xuICB9XG4gIHNldCBpbWFnZUZvcm1hdCh2YWx1ZTogUHJpbnRTYXZlSW1hZ2VGb3JtYXQpIHtcbiAgICB0aGlzLmltYWdlRm9ybWF0RmllbGQuc2V0VmFsdWUodmFsdWUgfHwgUHJpbnRTYXZlSW1hZ2VGb3JtYXQuSnBlZywge1xuICAgICAgb25seVNlbGY6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBvdXRwdXRGb3JtYXQoKTogUHJpbnRPdXRwdXRGb3JtYXQge1xuICAgIHJldHVybiB0aGlzLm91dHB1dEZvcm1hdEZpZWxkLnZhbHVlO1xuICB9XG4gIHNldCBvdXRwdXRGb3JtYXQodmFsdWU6IFByaW50T3V0cHV0Rm9ybWF0KSB7XG4gICAgdGhpcy5vdXRwdXRGb3JtYXRGaWVsZC5zZXRWYWx1ZSh2YWx1ZSB8fCBQcmludE91dHB1dEZvcm1hdC5QZGYsIHtcbiAgICAgIG9ubHlTZWxmOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcGFwZXJGb3JtYXQoKTogUHJpbnRQYXBlckZvcm1hdCB7XG4gICAgcmV0dXJuIHRoaXMucGFwZXJGb3JtYXRGaWVsZC52YWx1ZTtcbiAgfVxuICBzZXQgcGFwZXJGb3JtYXQodmFsdWU6IFByaW50UGFwZXJGb3JtYXQpIHtcbiAgICB0aGlzLnBhcGVyRm9ybWF0RmllbGQuc2V0VmFsdWUodmFsdWUgfHwgUHJpbnRQYXBlckZvcm1hdC5MZXR0ZXIsIHtcbiAgICAgIG9ubHlTZWxmOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgb3JpZW50YXRpb24oKTogUHJpbnRPcmllbnRhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb25GaWVsZC52YWx1ZTtcbiAgfVxuICBzZXQgb3JpZW50YXRpb24odmFsdWU6IFByaW50T3JpZW50YXRpb24pIHtcbiAgICB0aGlzLm9yaWVudGF0aW9uRmllbGQuc2V0VmFsdWUodmFsdWUgfHwgUHJpbnRPcmllbnRhdGlvbi5sYW5kc2NhcGUsIHtcbiAgICAgIG9ubHlTZWxmOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVzb2x1dGlvbigpOiBQcmludFJlc29sdXRpb24ge1xuICAgIHJldHVybiB0aGlzLnJlc29sdXRpb25GaWVsZC52YWx1ZTtcbiAgfVxuICBzZXQgcmVzb2x1dGlvbih2YWx1ZTogUHJpbnRSZXNvbHV0aW9uKSB7XG4gICAgdGhpcy5yZXNvbHV0aW9uRmllbGQuc2V0VmFsdWUodmFsdWUgfHwgUHJpbnRSZXNvbHV0aW9uWyc5NiddLCB7XG4gICAgICBvbmx5U2VsZjogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGxlZ2VuZFBvc2l0aW9uKCk6IFByaW50TGVnZW5kUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLmxlZ2VuZFBvc2l0aW9uRmllbGQudmFsdWU7XG4gIH1cbiAgc2V0IGxlZ2VuZFBvc2l0aW9uKHZhbHVlOiBQcmludExlZ2VuZFBvc2l0aW9uKSB7XG4gICAgdGhpcy5sZWdlbmRQb3NpdGlvbkZpZWxkLnNldFZhbHVlKHZhbHVlIHx8IFByaW50TGVnZW5kUG9zaXRpb24ubm9uZSwge1xuICAgICAgb25seVNlbGY6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlRmllbGQudmFsdWU7XG4gIH1cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRpdGxlRmllbGQuc2V0VmFsdWUodmFsdWUsIHsgb25seVNlbGY6IHRydWUgfSk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHN1YnRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3VidGl0bGVGaWVsZC52YWx1ZTtcbiAgfVxuICBzZXQgc3VidGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc3VidGl0bGVGaWVsZC5zZXRWYWx1ZSh2YWx1ZSwgeyBvbmx5U2VsZjogdHJ1ZSB9KTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgY29tbWVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbW1lbnRGaWVsZC52YWx1ZTtcbiAgfVxuICBzZXQgY29tbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb21tZW50RmllbGQuc2V0VmFsdWUodmFsdWUsIHsgb25seVNlbGY6IHRydWUgfSk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHNob3dQcm9qZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dQcm9qZWN0aW9uRmllbGQudmFsdWU7XG4gIH1cbiAgc2V0IHNob3dQcm9qZWN0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93UHJvamVjdGlvbkZpZWxkLnNldFZhbHVlKHZhbHVlLCB7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBzaG93U2NhbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1NjYWxlRmllbGQudmFsdWU7XG4gIH1cbiAgc2V0IHNob3dTY2FsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd1NjYWxlRmllbGQuc2V0VmFsdWUodmFsdWUsIHsgb25seVNlbGY6IHRydWUgfSk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHNob3dMZWdlbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd0xlZ2VuZEZpZWxkLnZhbHVlO1xuICB9XG4gIHNldCBzaG93TGVnZW5kKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93TGVnZW5kRmllbGQuc2V0VmFsdWUodmFsdWUsIHsgb25seVNlbGY6IHRydWUgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZG9aaXBGaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRvWmlwRmlsZUZpZWxkLnZhbHVlO1xuICB9XG4gIHNldCBkb1ppcEZpbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRvWmlwRmlsZUZpZWxkLnNldFZhbHVlKHZhbHVlLCB7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0IG91dHB1dEZvcm1hdEZpZWxkKCkge1xuICAgIHJldHVybiAodGhpcy5mb3JtLmNvbnRyb2xzIGFzIGFueSkub3V0cHV0Rm9ybWF0IGFzIEZvcm1Db250cm9sO1xuICB9XG5cbiAgZ2V0IHBhcGVyRm9ybWF0RmllbGQoKSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm0uY29udHJvbHMgYXMgYW55KS5wYXBlckZvcm1hdCBhcyBGb3JtQ29udHJvbDtcbiAgfVxuXG4gIGdldCBpbWFnZUZvcm1hdEZpZWxkKCkge1xuICAgIHJldHVybiAodGhpcy5mb3JtLmNvbnRyb2xzIGFzIGFueSkuaW1hZ2VGb3JtYXQgYXMgRm9ybUNvbnRyb2w7XG4gIH1cblxuICBnZXQgb3JpZW50YXRpb25GaWVsZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybS5jb250cm9scyBhcyBhbnkpLm9yaWVudGF0aW9uIGFzIEZvcm1Db250cm9sO1xuICB9XG5cbiAgZ2V0IHJlc29sdXRpb25GaWVsZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybS5jb250cm9scyBhcyBhbnkpLnJlc29sdXRpb24gYXMgRm9ybUNvbnRyb2w7XG4gIH1cblxuICBnZXQgY29tbWVudEZpZWxkKCkge1xuICAgIHJldHVybiAodGhpcy5mb3JtLmNvbnRyb2xzIGFzIGFueSkuY29tbWVudCBhcyBGb3JtQ29udHJvbDtcbiAgfVxuXG4gIGdldCBzaG93UHJvamVjdGlvbkZpZWxkKCkge1xuICAgIHJldHVybiAodGhpcy5mb3JtLmNvbnRyb2xzIGFzIGFueSkuc2hvd1Byb2plY3Rpb24gYXMgRm9ybUNvbnRyb2w7XG4gIH1cblxuICBnZXQgc2hvd1NjYWxlRmllbGQoKSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm0uY29udHJvbHMgYXMgYW55KS5zaG93U2NhbGUgYXMgRm9ybUNvbnRyb2w7XG4gIH1cblxuICBnZXQgc2hvd0xlZ2VuZEZpZWxkKCkge1xuICAgIHJldHVybiAodGhpcy5mb3JtLmNvbnRyb2xzIGFzIGFueSkuc2hvd0xlZ2VuZCBhcyBGb3JtQ29udHJvbDtcbiAgfVxuXG4gIGdldCBkb1ppcEZpbGVGaWVsZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybS5jb250cm9scyBhcyBhbnkpLmRvWmlwRmlsZSBhcyBGb3JtQ29udHJvbDtcbiAgfVxuXG4gIGdldCB0aXRsZUZpZWxkKCkge1xuICAgIHJldHVybiAodGhpcy5mb3JtLmNvbnRyb2xzIGFzIGFueSkudGl0bGUgYXMgRm9ybUNvbnRyb2w7XG4gIH1cblxuICBnZXQgc3VidGl0bGVGaWVsZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybS5jb250cm9scyBhcyBhbnkpLnN1YnRpdGxlIGFzIEZvcm1Db250cm9sO1xuICB9XG5cbiAgZ2V0IGxlZ2VuZFBvc2l0aW9uRmllbGQoKSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm0uY29udHJvbHMgYXMgYW55KS5sZWdlbmRQb3NpdGlvbiBhcyBGb3JtQ29udHJvbDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxQcmludE9wdGlvbnM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB0aXRsZTogWycnLCBbXV0sXG4gICAgICBzdWJ0aXRsZTogWycnLCBbXV0sXG4gICAgICBjb21tZW50OiBbJycsIFtdXSxcbiAgICAgIG91dHB1dEZvcm1hdDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcGFwZXJGb3JtYXQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGltYWdlRm9ybWF0OiBbICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcmVzb2x1dGlvbjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgb3JpZW50YXRpb246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGxlZ2VuZFBvc2l0aW9uOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzaG93UHJvamVjdGlvbjogZmFsc2UsXG4gICAgICBzaG93U2NhbGU6IGZhbHNlLFxuICAgICAgc2hvd0xlZ2VuZDogZmFsc2UsXG4gICAgICBkb1ppcEZpbGU6IFt7aGlkZGVuOiB0aGlzLmlzUHJpbnRTZXJ2aWNlIH1dXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRvWmlwRmlsZUZpZWxkLnNldFZhbHVlKGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZUZvcm1TdWJtaXQoZGF0YTogUHJpbnRPcHRpb25zLCBpc1ZhbGlkOiBib29sZWFuKSB7XG4gICAgZGF0YS5pc1ByaW50U2VydmljZSA9IHRoaXMuaXNQcmludFNlcnZpY2U7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIHRoaXMuc3VibWl0LmVtaXQoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlSW1hZ2VTYXZlUHJvcCgpIHtcbiAgICBpZiAodGhpcy5vdXRwdXRGb3JtYXRGaWVsZC52YWx1ZSA9PT0gJ0ltYWdlJykge1xuICAgICAgdGhpcy5pc1ByaW50U2VydmljZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUHJpbnRTZXJ2aWNlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiIsIjxmb3JtIGNsYXNzPVwiaWdvLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7J2lnby5nZW8ucHJpbnRGb3JtLnRpdGxlJyB8IHRyYW5zbGF0ZX19XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpZ28taW5wdXQtY29udGFpbmVyXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0XG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN1YnRpdGxlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eydpZ28uZ2VvLnByaW50Rm9ybS5zdWJ0aXRsZScgfCB0cmFuc2xhdGV9fVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaWdvLWlucHV0LWNvbnRhaW5lclwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBtYXRJbnB1dFxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjb21tZW50XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eydpZ28uZ2VvLnByaW50Rm9ybS5jb21tZW50JyB8IHRyYW5zbGF0ZX19XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJpbnQtc2xpZGUtdG9nZ2xlLWNvbnRhaW5lciBtYXQtdHlwb2dyYXBoeVwiPlxuICAgICAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICAgICAgY2xhc3M9XCJwcmludC1vcHRpb25cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzaG93UHJvamVjdGlvblwiXG4gICAgICAgIFtsYWJlbFBvc2l0aW9uXT1cIidiZWZvcmUnXCI+XG4gICAgICAgIHt7J2lnby5nZW8ucHJpbnRGb3JtLnNob3dQcm9qZWN0aW9uJyB8IHRyYW5zbGF0ZX19XG4gICAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZVxuICAgICAgICBjbGFzcz1cInByaW50LW9wdGlvblwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInNob3dTY2FsZVwiXG4gICAgICAgIFtsYWJlbFBvc2l0aW9uXT1cIidiZWZvcmUnXCI+XG4gICAgICAgIHt7J2lnby5nZW8ucHJpbnRGb3JtLnNob3dTY2FsZScgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICAgICAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICAgICAgY2xhc3M9XCJwcmludC1vcHRpb25cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkb1ppcEZpbGVcIlxuICAgICAgICBbbGFiZWxQb3NpdGlvbl09XCInYmVmb3JlJ1wiXG4gICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImlzUHJpbnRTZXJ2aWNlID8gJ25vbmUnIDogJydcIj5cbiAgICAgICAge3snaWdvLmdlby5wcmludEZvcm0uZG9aaXBGaWxlJyB8IHRyYW5zbGF0ZX19XG4gICAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJpZ28taW5wdXQtY29udGFpbmVyXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwibGVnZW5kUG9zaXRpb25cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7J2lnby5nZW8ucHJpbnRGb3JtLmxlZ2VuZFBvc2l0aW9uJyB8IHRyYW5zbGF0ZX19XCI+XG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBsZWdlbmRQb3NpdGlvbiBvZiBsZWdlbmRQb3NpdGlvbnMgfCBrZXl2YWx1ZSBcIiBbdmFsdWVdPVwibGVnZW5kUG9zaXRpb24ua2V5XCI+XG4gICAgICAgICAgICB7eydpZ28uZ2VvLnByaW50Rm9ybS5sZWdlbmRQb3NpdGlvbnMuJyArIGxlZ2VuZFBvc2l0aW9uLnZhbHVlIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJpZ28taW5wdXQtY29udGFpbmVyXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1zZWxlY3QgKHNlbGVjdGlvbkNoYW5nZSk9XCJ0b2dnbGVJbWFnZVNhdmVQcm9wKClcIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJvdXRwdXRGb3JtYXRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7J2lnby5nZW8ucHJpbnRGb3JtLm91dHB1dEZvcm1hdCcgfCB0cmFuc2xhdGV9fVwiPlxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3V0cHV0Rm9ybWF0IG9mIG91dHB1dEZvcm1hdHMgfCBrZXl2YWx1ZSBcIiBbdmFsdWVdPVwib3V0cHV0Rm9ybWF0LmtleVwiPlxuICAgICAgICAgICAge3tvdXRwdXRGb3JtYXQudmFsdWV9fVxuICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIiBbc3R5bGUuZGlzcGxheV09XCJpc1ByaW50U2VydmljZSA/ICdibG9jaycgOiAnbm9uZSdcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LXNlbGVjdFxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXBlckZvcm1hdFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3snaWdvLmdlby5wcmludEZvcm0ucGFwZXJGb3JtYXQnIHwgdHJhbnNsYXRlfX1cIj5cbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHBhcGVyRm9ybWF0IG9mIHBhcGVyRm9ybWF0cyB8IGtleXZhbHVlIFwiIFt2YWx1ZV09XCJwYXBlckZvcm1hdC5rZXlcIj5cbiAgICAgICAgICB7eygnaWdvLmdlby5wcmludEZvcm0ucGFwZXJGb3JtYXRzLicgKyBwYXBlckZvcm1hdC52YWx1ZSkgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIiBbc3R5bGUuZGlzcGxheV09XCJpc1ByaW50U2VydmljZSA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LXNlbGVjdFxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJpbWFnZUZvcm1hdFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3snaWdvLmdlby5wcmludEZvcm0uaW1hZ2VGb3JtYXQnIHwgdHJhbnNsYXRlfX1cIj5cbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGltYWdlRm9ybWF0IG9mIGltYWdlRm9ybWF0cyB8IGtleXZhbHVlIFwiIFt2YWx1ZV09XCJpbWFnZUZvcm1hdC5rZXlcIj5cbiAgICAgICAgICB7e2ltYWdlRm9ybWF0LnZhbHVlfX1cbiAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJpZ28taW5wdXQtY29udGFpbmVyXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtc2VsZWN0XG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInJlc29sdXRpb25cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7J2lnby5nZW8ucHJpbnRGb3JtLnJlc29sdXRpb24nIHwgdHJhbnNsYXRlfX1cIj5cbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHJlc29sdXRpb24gb2YgcmVzb2x1dGlvbnMgfCBrZXl2YWx1ZSBcIiBbdmFsdWVdPVwicmVzb2x1dGlvbi5rZXlcIj5cbiAgICAgICAgICB7e3Jlc29sdXRpb24udmFsdWUgKyAnIFBQSSd9fVxuICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIiBbc3R5bGUuZGlzcGxheV09XCJpc1ByaW50U2VydmljZSA/ICdibG9jaycgOiAnbm9uZSdcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LXNlbGVjdFxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJvcmllbnRhdGlvblwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3snaWdvLmdlby5wcmludEZvcm0ub3JpZW50YXRpb24nIHwgdHJhbnNsYXRlfX1cIj5cbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9yaWVudGF0aW9uIG9mIG9yaWVudGF0aW9ucyB8IGtleXZhbHVlIFwiIFt2YWx1ZV09XCJvcmllbnRhdGlvbi5rZXlcIj5cbiAgICAgICAgICB7eygnaWdvLmdlby5wcmludEZvcm0uJyArIG9yaWVudGF0aW9uLnZhbHVlKSB8IHRyYW5zbGF0ZX19XG4gICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiaWdvLWZvcm0tYnV0dG9uLWdyb3VwIHByaW50LWJ1dHRvbi10b3AtcGFkZGluZ1wiPlxuICAgIDxidXR0b25cbiAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZCB8fCAoZGlzYWJsZWQkIHwgYXN5bmMpXCJcbiAgICAgIChjbGljayk9XCJoYW5kbGVGb3JtU3VibWl0KGZvcm0udmFsdWUsIGZvcm0udmFsaWQpXCI+XG4gICAgICB7eydpZ28uZ2VvLnByaW50Rm9ybS5zYXZlQnRuJyB8IHRyYW5zbGF0ZX19XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuXG48L2Zvcm0+XG4iXX0=