import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { handleFileExportError } from '../shared/context-export.utils';
import { handleFileImportSuccess, handleFileImportError } from '../shared/context-import.utils';
import { handleFileExportSuccess } from '../shared/context-export.utils';
import * as i0 from "@angular/core";
import * as i1 from "../shared/context-import.service";
import * as i2 from "../shared/context-export.service";
import * as i3 from "@igo2/core";
import * as i4 from "@angular/forms";
import * as i5 from "../../context-manager/shared/context.service";
import * as i6 from "@angular/material/button-toggle";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/button";
import * as i9 from "@igo2/common";
import * as i10 from "@angular/material/form-field";
import * as i11 from "@angular/material/input";
import * as i12 from "@angular/material/select";
import * as i13 from "@angular/material/core";
import * as i14 from "@angular/material/divider";
import * as i15 from "@ngx-translate/core";
const _c0 = function (a0) { return { size: a0 }; };
function ContextImportExportComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵelementStart(3, "button", 7);
    i0.ɵɵlistener("click", function ContextImportExportComponent_div_8_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r4); const _r2 = i0.ɵɵreference(10); return _r2.click(); });
    i0.ɵɵpipe(4, "async");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "igo-spinner", 8);
    i0.ɵɵpipe(8, "async");
    i0.ɵɵelementStart(9, "input", 9, 10);
    i0.ɵɵlistener("click", function ContextImportExportComponent_div_8_Template_input_click_9_listener() { i0.ɵɵrestoreView(_r4); const _r2 = i0.ɵɵreference(10); return _r2.value = null; })("change", function ContextImportExportComponent_div_8_Template_input_change_9_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.importFiles($event.target.files); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "section", 11);
    i0.ɵɵelementStart(12, "h4");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "ul");
    i0.ɵɵelementStart(16, "li");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(4, 7, ctx_r0.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 9, "igo.geo.importExportForm.importButton"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("shown", i0.ɵɵpipeBind1(8, 11, ctx_r0.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", "none");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 13, "igo.geo.importExportForm.importClarifications"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 15, "igo.geo.importExportForm.importSizeMax", i0.ɵɵpureFunction1(18, _c0, ctx_r0.fileSizeMb)));
} }
function ContextImportExportComponent_form_9_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", layer_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(layer_r9.title);
} }
function ContextImportExportComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 12);
    i0.ɵɵelementStart(1, "div", 13);
    i0.ɵɵelementStart(2, "mat-form-field", 14);
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "input", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 13);
    i0.ɵɵelementStart(8, "mat-form-field");
    i0.ɵɵelementStart(9, "mat-label");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-select", 16);
    i0.ɵɵelementStart(13, "mat-option", 17, 18);
    i0.ɵɵlistener("click", function ContextImportExportComponent_form_9_Template_mat_option_click_13_listener() { i0.ɵɵrestoreView(_r11); const _r7 = i0.ɵɵreference(14); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.selectAll(_r7); });
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "mat-divider");
    i0.ɵɵtemplate(18, ContextImportExportComponent_form_9_mat_option_18_Template, 2, 2, "mat-option", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 6);
    i0.ɵɵelementStart(20, "button", 7);
    i0.ɵɵlistener("click", function ContextImportExportComponent_form_9_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.handleExportFormSubmit(ctx_r12.form.value); });
    i0.ɵɵpipe(21, "async");
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "igo-spinner", 8);
    i0.ɵɵpipe(25, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 9, "igo.context.contextImportExport.export.exportContextName"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 11, "igo.context.contextImportExport.export.exportPlaceHolder"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 13, "igo.context.contextImportExport.export.exportSelectAll"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.userControlledLayerList);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.form.valid || i0.ɵɵpipeBind1(21, 15, ctx_r1.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(23, 17, "igo.geo.importExportForm.exportButton"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("shown", i0.ɵɵpipeBind1(25, 19, ctx_r1.loading$));
} }
export class ContextImportExportComponent {
    constructor(contextImportService, contextExportService, languageService, messageService, formBuilder, config, contextService) {
        this.contextImportService = contextImportService;
        this.contextExportService = contextExportService;
        this.languageService = languageService;
        this.messageService = messageService;
        this.formBuilder = formBuilder;
        this.config = config;
        this.contextService = contextService;
        this.inputProj = 'EPSG:4326';
        this.loading$ = new BehaviorSubject(false);
        this.forceNaming = false;
        this.activeImportExport = 'import';
        this.buildForm();
    }
    ngOnInit() {
        const configFileSizeMb = this.config.getConfig('importExport.clientSideFileSizeMaxMb');
        this.clientSideFileSizeMax =
            (configFileSizeMb ? configFileSizeMb : 30) * Math.pow(1024, 2);
        this.fileSizeMb = this.clientSideFileSizeMax / Math.pow(1024, 2);
        this.layerList = this.contextService.getContextLayers(this.map);
        this.userControlledLayerList = this.layerList.filter(layer => layer.showInLayerList);
    }
    importFiles(files) {
        this.loading$.next(true);
        for (const file of files) {
            this.contextImportService.import(file).pipe(take(1)).subscribe((context) => this.onFileImportSuccess(file, context), (error) => this.onFileImportError(file, error), () => {
                this.loading$.next(false);
            });
        }
    }
    handleExportFormSubmit(contextOptions) {
        this.loading$.next(true);
        this.res = this.contextService.getContextFromLayers(this.map, contextOptions.layers, contextOptions.name);
        this.res.imported = true;
        this.contextExportService.export(this.res).pipe(take(1)).subscribe(() => { }, (error) => this.onFileExportError(error), () => {
            this.onFileExportSuccess();
            this.loading$.next(false);
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            layers: ['', [Validators.required]],
            name: ['', [Validators.required]]
        });
    }
    onFileImportSuccess(file, context) {
        handleFileImportSuccess(file, context, this.messageService, this.languageService, this.contextService);
    }
    onFileImportError(file, error) {
        this.loading$.next(false);
        handleFileImportError(file, error, this.messageService, this.languageService, this.fileSizeMb);
    }
    onFileExportError(error) {
        this.loading$.next(false);
        handleFileExportError(error, this.messageService, this.languageService);
    }
    onFileExportSuccess() {
        handleFileExportSuccess(this.messageService, this.languageService);
    }
    selectAll(e) {
        if (e._selected) {
            this.form.controls.layers.setValue(this.userControlledLayerList);
            e._selected = true;
        }
        if (e._selected === false) {
            this.form.controls.layers.setValue([]);
        }
    }
    onImportExportChange(event) {
        this.activeImportExport = event.value;
    }
}
ContextImportExportComponent.ɵfac = function ContextImportExportComponent_Factory(t) { return new (t || ContextImportExportComponent)(i0.ɵɵdirectiveInject(i1.ContextImportService), i0.ɵɵdirectiveInject(i2.ContextExportService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i3.ConfigService), i0.ɵɵdirectiveInject(i5.ContextService)); };
ContextImportExportComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextImportExportComponent, selectors: [["igo-context-import-export"]], inputs: { map: "map" }, decls: 10, vars: 11, consts: [[1, "import-export-toggle", "mat-typography"], [3, "value", "change"], [3, "value"], [4, "ngIf"], ["class", "igo-form", 3, "formGroup", 4, "ngIf"], [1, "igo-form"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "button", 3, "disabled", "click"], [3, "shown"], ["type", "file", 3, "click", "change"], ["fileInput", ""], [1, "mat-typography"], [1, "igo-form", 3, "formGroup"], [1, "igo-input-container"], [1, "example-full-width"], ["formControlName", "name", "matInput", "", 3, "value"], ["formControlName", "layers", "multiple", ""], [3, "value", "click"], ["e", ""], [3, "value", 4, "ngFor", "ngForOf"]], template: function ContextImportExportComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-button-toggle-group", 1);
        i0.ɵɵlistener("change", function ContextImportExportComponent_Template_mat_button_toggle_group_change_1_listener($event) { return ctx.onImportExportChange($event); });
        i0.ɵɵelementStart(2, "mat-button-toggle", 2);
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 2);
        i0.ɵɵtext(6);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, ContextImportExportComponent_div_8_Template, 19, 20, "div", 3);
        i0.ɵɵtemplate(9, ContextImportExportComponent_form_9_Template, 26, 21, "form", 4);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.activeImportExport);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", "import");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 7, "igo.geo.importExportForm.importTabTitle"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", "export");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 9, "igo.geo.importExportForm.exportTabTitle"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.activeImportExport === "import");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.activeImportExport === "export");
    } }, directives: [i6.MatButtonToggleGroup, i6.MatButtonToggle, i7.NgIf, i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.NgForm, i8.MatButton, i9.SpinnerComponent, i4.FormGroupDirective, i10.MatFormField, i10.MatLabel, i4.DefaultValueAccessor, i11.MatInput, i4.NgControlStatus, i4.FormControlName, i12.MatSelect, i13.MatOption, i14.MatDivider, i7.NgForOf], pipes: [i15.TranslatePipe, i7.AsyncPipe], styles: [".import-export-toggle[_ngcontent-%COMP%]{padding:10px;text-align:center}.import-export-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{width:100%}.import-export-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:50%}.igo-input-container[_ngcontent-%COMP%]{padding:10px}.igo-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}h4[_ngcontent-%COMP%]{padding:0 5px}.igo-form[_ngcontent-%COMP%]{padding:15px 5px}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center;padding-top:10px}igo-spinner[_ngcontent-%COMP%]{position:absolute;padding-left:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextImportExportComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-import-export',
                templateUrl: './context-import-export.component.html',
                styleUrls: ['./context-import-export.component.scss']
            }]
    }], function () { return [{ type: i1.ContextImportService }, { type: i2.ContextExportService }, { type: i3.LanguageService }, { type: i3.MessageService }, { type: i4.FormBuilder }, { type: i3.ConfigService }, { type: i5.ContextService }]; }, { map: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1pbXBvcnQtZXhwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LWltcG9ydC1leHBvcnQvY29udGV4dC1pbXBvcnQtZXhwb3J0L2NvbnRleHQtaW1wb3J0LWV4cG9ydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1pbXBvcnQtZXhwb3J0L2NvbnRleHQtaW1wb3J0LWV4cG9ydC9jb250ZXh0LWltcG9ydC1leHBvcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU10QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUN0QixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0R6RSwyQkFBNkM7SUFDekMsK0JBQXVCO0lBQ25CLDhCQUFtQztJQUMvQixpQ0FBa0c7SUFBMUQsc0tBQVMsV0FBaUIsSUFBQzs7SUFDL0QsWUFDSjs7SUFBQSxpQkFBUztJQUNULGlDQUFzRDs7SUFDdEQsb0NBS2dEO0lBRDVDLGlMQUEyQixJQUFJLElBQUMsOE1BQUE7SUFKcEMsaUJBS2dEO0lBQ3BELGlCQUFNO0lBQ1YsaUJBQU87SUFDUCxv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d0JuQixlQUFxQztRQUFyQywwREFBcUM7O3VGRFpoRCw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REO3dQQWNVLEdBQUc7a0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UsIExhbmd1YWdlU2VydmljZSwgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXIsIFZlY3RvckxheWVyIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB0eXBlIHsgSWdvTWFwIH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuaW1wb3J0IHsgaGFuZGxlRmlsZUV4cG9ydEVycm9yIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnRleHQtZXhwb3J0LnV0aWxzJztcbmltcG9ydCB7XG4gIGhhbmRsZUZpbGVJbXBvcnRTdWNjZXNzLFxuICBoYW5kbGVGaWxlSW1wb3J0RXJyb3Jcbn0gZnJvbSAnLi4vc2hhcmVkL2NvbnRleHQtaW1wb3J0LnV0aWxzJztcbmltcG9ydCB7IGhhbmRsZUZpbGVFeHBvcnRTdWNjZXNzIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnRleHQtZXhwb3J0LnV0aWxzJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29udGV4dC1tYW5hZ2VyL3NoYXJlZC9jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGV4dEltcG9ydFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29udGV4dC1pbXBvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZXh0RXhwb3J0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jb250ZXh0LWV4cG9ydC5zZXJ2aWNlJztcbmltcG9ydCB7IERldGFpbGVkQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQtbWFuYWdlci9zaGFyZWQvY29udGV4dC5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tY29udGV4dC1pbXBvcnQtZXhwb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRleHQtaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRJbXBvcnRFeHBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgbGF5ZXJzOiBWZWN0b3JMYXllcltdO1xuICBwdWJsaWMgaW5wdXRQcm9qOiBzdHJpbmcgPSAnRVBTRzo0MzI2JztcbiAgcHVibGljIGxvYWRpbmckID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHB1YmxpYyBmb3JjZU5hbWluZyA9IGZhbHNlO1xuICBwdWJsaWMgbGF5ZXJMaXN0OiBMYXllcltdO1xuICBwdWJsaWMgdXNlckNvbnRyb2xsZWRMYXllckxpc3Q6IExheWVyW107XG4gIHB1YmxpYyByZXM6IERldGFpbGVkQ29udGV4dDtcbiAgcHJpdmF0ZSBjbGllbnRTaWRlRmlsZVNpemVNYXg6IG51bWJlcjtcbiAgcHVibGljIGZpbGVTaXplTWI6IG51bWJlcjtcbiAgcHVibGljIGFjdGl2ZUltcG9ydEV4cG9ydDogc3RyaW5nID0gJ2ltcG9ydCc7XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb250ZXh0SW1wb3J0U2VydmljZTogQ29udGV4dEltcG9ydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb250ZXh0RXhwb3J0U2VydmljZTogQ29udGV4dEV4cG9ydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNvbnRleHRTZXJ2aWNlOiBDb250ZXh0U2VydmljZVxuICApIHtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgY29uZmlnRmlsZVNpemVNYiA9IHRoaXMuY29uZmlnLmdldENvbmZpZyhcbiAgICAgICdpbXBvcnRFeHBvcnQuY2xpZW50U2lkZUZpbGVTaXplTWF4TWInXG4gICAgKTtcbiAgICB0aGlzLmNsaWVudFNpZGVGaWxlU2l6ZU1heCA9XG4gICAgICAoY29uZmlnRmlsZVNpemVNYiA/IGNvbmZpZ0ZpbGVTaXplTWIgOiAzMCkgKiBNYXRoLnBvdygxMDI0LCAyKTtcbiAgICB0aGlzLmZpbGVTaXplTWIgPSB0aGlzLmNsaWVudFNpZGVGaWxlU2l6ZU1heCAvIE1hdGgucG93KDEwMjQsIDIpO1xuICAgIHRoaXMubGF5ZXJMaXN0ID0gdGhpcy5jb250ZXh0U2VydmljZS5nZXRDb250ZXh0TGF5ZXJzKHRoaXMubWFwKTtcbiAgICB0aGlzLnVzZXJDb250cm9sbGVkTGF5ZXJMaXN0ID0gdGhpcy5sYXllckxpc3QuZmlsdGVyKGxheWVyID0+IGxheWVyLnNob3dJbkxheWVyTGlzdCk7XG4gIH1cblxuICBpbXBvcnRGaWxlcyhmaWxlczogRmlsZVtdKSB7XG4gICAgdGhpcy5sb2FkaW5nJC5uZXh0KHRydWUpO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgdGhpcy5jb250ZXh0SW1wb3J0U2VydmljZS5pbXBvcnQoZmlsZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoXG4gICAgICAgIChjb250ZXh0OiBEZXRhaWxlZENvbnRleHQpID0+IHRoaXMub25GaWxlSW1wb3J0U3VjY2VzcyhmaWxlLCBjb250ZXh0KSxcbiAgICAgICAgKGVycm9yOiBFcnJvcikgPT4gdGhpcy5vbkZpbGVJbXBvcnRFcnJvcihmaWxlLCBlcnJvciksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmckLm5leHQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUV4cG9ydEZvcm1TdWJtaXQoY29udGV4dE9wdGlvbnMpIHtcbiAgICB0aGlzLmxvYWRpbmckLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5yZXMgPSB0aGlzLmNvbnRleHRTZXJ2aWNlLmdldENvbnRleHRGcm9tTGF5ZXJzKFxuICAgICAgdGhpcy5tYXAsXG4gICAgICBjb250ZXh0T3B0aW9ucy5sYXllcnMsXG4gICAgICBjb250ZXh0T3B0aW9ucy5uYW1lXG4gICAgKTtcbiAgICB0aGlzLnJlcy5pbXBvcnRlZCA9IHRydWU7XG4gICAgdGhpcy5jb250ZXh0RXhwb3J0U2VydmljZS5leHBvcnQodGhpcy5yZXMpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4ge30sXG4gICAgICAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLm9uRmlsZUV4cG9ydEVycm9yKGVycm9yKSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkZpbGVFeHBvcnRTdWNjZXNzKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyQubmV4dChmYWxzZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbGF5ZXJzOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25GaWxlSW1wb3J0U3VjY2VzcyhmaWxlOiBGaWxlLCBjb250ZXh0OiBEZXRhaWxlZENvbnRleHQpIHtcbiAgICBoYW5kbGVGaWxlSW1wb3J0U3VjY2VzcyhcbiAgICAgIGZpbGUsXG4gICAgICBjb250ZXh0LFxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZSxcbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgdGhpcy5jb250ZXh0U2VydmljZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uRmlsZUltcG9ydEVycm9yKGZpbGU6IEZpbGUsIGVycm9yOiBFcnJvcikge1xuICAgIHRoaXMubG9hZGluZyQubmV4dChmYWxzZSk7XG4gICAgaGFuZGxlRmlsZUltcG9ydEVycm9yKFxuICAgICAgZmlsZSxcbiAgICAgIGVycm9yLFxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZSxcbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgdGhpcy5maWxlU2l6ZU1iXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgb25GaWxlRXhwb3J0RXJyb3IoZXJyb3I6IEVycm9yKSB7XG4gICAgdGhpcy5sb2FkaW5nJC5uZXh0KGZhbHNlKTtcbiAgICBoYW5kbGVGaWxlRXhwb3J0RXJyb3IoZXJyb3IsIHRoaXMubWVzc2FnZVNlcnZpY2UsIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25GaWxlRXhwb3J0U3VjY2VzcygpIHtcbiAgICBoYW5kbGVGaWxlRXhwb3J0U3VjY2Vzcyh0aGlzLm1lc3NhZ2VTZXJ2aWNlLCB0aGlzLmxhbmd1YWdlU2VydmljZSk7XG4gIH1cblxuICBzZWxlY3RBbGwoZSkge1xuICAgIGlmIChlLl9zZWxlY3RlZCkge1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzLmxheWVycy5zZXRWYWx1ZSh0aGlzLnVzZXJDb250cm9sbGVkTGF5ZXJMaXN0KTtcbiAgICAgIGUuX3NlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGUuX3NlbGVjdGVkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzLmxheWVycy5zZXRWYWx1ZShbXSk7XG4gICAgfVxuICB9XG5cbiAgb25JbXBvcnRFeHBvcnRDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2ZUltcG9ydEV4cG9ydCA9IGV2ZW50LnZhbHVlO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaW1wb3J0LWV4cG9ydC10b2dnbGUgbWF0LXR5cG9ncmFwaHlcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXBcbiAgICAgICAgICBbdmFsdWVdPVwiYWN0aXZlSW1wb3J0RXhwb3J0XCJcbiAgICAgICAgICAoY2hhbmdlKT1cIm9uSW1wb3J0RXhwb3J0Q2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICA8bWF0LWJ1dHRvbi10b2dnbGUgW3ZhbHVlXT1cIidpbXBvcnQnXCI+XG4gICAgICAgICAgICB7eydpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0uaW1wb3J0VGFiVGl0bGUnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgICAgICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSBbdmFsdWVdPVwiJ2V4cG9ydCdcIj5cbiAgICAgICAgICAgIHt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5leHBvcnRUYWJUaXRsZScgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwiYWN0aXZlSW1wb3J0RXhwb3J0ID09PSAnaW1wb3J0J1wiPlxuICAgIDxmb3JtIGNsYXNzPVwiaWdvLWZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlnby1mb3JtLWJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImZpbGVJbnB1dC5jbGljaygpXCIgW2Rpc2FibGVkXT1cImxvYWRpbmckIHwgYXN5bmNcIj5cbiAgICAgICAgICAgICAgICB7eydpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0uaW1wb3J0QnV0dG9uJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxpZ28tc3Bpbm5lciBbc2hvd25dPVwibG9hZGluZyQgfCBhc3luY1wiPjwvaWdvLXNwaW5uZXI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAjZmlsZUlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIidub25lJ1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImZpbGVJbnB1dC52YWx1ZSA9IG51bGxcIlxuICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiaW1wb3J0RmlsZXMoJGV2ZW50LnRhcmdldC5maWxlcylcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5cbiAgICAgICAgPGg0Pnt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5pbXBvcnRDbGFyaWZpY2F0aW9ucycgfCB0cmFuc2xhdGV9fTwvaDQ+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPnt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5pbXBvcnRTaXplTWF4JyB8IHRyYW5zbGF0ZToge3NpemU6IGZpbGVTaXplTWJ9IH19PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuPC9kaXY+XG5cblxuPGZvcm0gY2xhc3M9XCJpZ28tZm9ybVwiICpuZ0lmPVwiYWN0aXZlSW1wb3J0RXhwb3J0ID09PSAnZXhwb3J0J1wiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpZ28taW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD57eydpZ28uY29udGV4dC5jb250ZXh0SW1wb3J0RXhwb3J0LmV4cG9ydC5leHBvcnRDb250ZXh0TmFtZScgfCB0cmFuc2xhdGV9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIiBtYXRJbnB1dCBbdmFsdWVdPVwiXCI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD57eydpZ28uY29udGV4dC5jb250ZXh0SW1wb3J0RXhwb3J0LmV4cG9ydC5leHBvcnRQbGFjZUhvbGRlcicgfCB0cmFuc2xhdGV9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwibGF5ZXJzXCIgbXVsdGlwbGU+XG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIjFcIiAoY2xpY2spPVwic2VsZWN0QWxsKGUpXCIgI2U+XG4gICAgICAgICAgICAgICAgICAgIHt7J2lnby5jb250ZXh0LmNvbnRleHRJbXBvcnRFeHBvcnQuZXhwb3J0LmV4cG9ydFNlbGVjdEFsbCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbGF5ZXIgb2YgdXNlckNvbnRyb2xsZWRMYXllckxpc3RcIiBbdmFsdWVdPVwibGF5ZXJcIj57e2xheWVyLnRpdGxlfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImlnby1mb3JtLWJ1dHRvbi1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWQgfHwgKGxvYWRpbmckIHwgYXN5bmMpXCJcbiAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVFeHBvcnRGb3JtU3VibWl0KGZvcm0udmFsdWUpXCI+XG4gICAgICAgICAgICB7eydpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0uZXhwb3J0QnV0dG9uJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aWdvLXNwaW5uZXIgW3Nob3duXT1cImxvYWRpbmckIHwgYXN5bmNcIj48L2lnby1zcGlubmVyPlxuICAgIDwvZGl2PlxuPC9mb3JtPlxuIl19