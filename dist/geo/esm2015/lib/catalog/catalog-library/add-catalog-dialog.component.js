import { Component, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { TypeCapabilities } from '../../datasource';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/autocomplete";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/select";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/core";
import * as i11 from "@angular/material/tooltip";
import * as i12 from "@ngx-translate/core";
function AddCatalogDialogComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const predefinedCatalog_r7 = ctx.$implicit;
    i0.ɵɵproperty("matTooltip", predefinedCatalog_r7.title)("value", predefinedCatalog_r7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", predefinedCatalog_r7.title, " ");
} }
function AddCatalogDialogComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const predefinedCatalog_r8 = ctx.$implicit;
    i0.ɵɵproperty("matTooltip", predefinedCatalog_r8.url)("value", predefinedCatalog_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", predefinedCatalog_r8.url, " ");
} }
function AddCatalogDialogComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 18);
    i0.ɵɵlistener("click", function AddCatalogDialogComponent_mat_option_23_Template_mat_option_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(1, "p", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(type_r9);
} }
const _c0 = function (a0, a1) { return { value: a0, email: a1 }; };
function AddCatalogDialogComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "p", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.languageService.translate.instant("igo.geo.catalog.externalProvider.unavailableWithEmail", i0.ɵɵpureFunction2(1, _c0, ctx_r5.addedCatalog.url, ctx_r5.emailAddress)));
} }
const _c1 = function (a0) { return { value: a0 }; };
function AddCatalogDialogComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "p", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.languageService.translate.instant("igo.geo.catalog.unavailable", i0.ɵɵpureFunction1(1, _c1, ctx_r6.addedCatalog.url)));
} }
export class AddCatalogDialogComponent {
    constructor(formBuilder, languageService, configService, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.languageService = languageService;
        this.configService = configService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.defaultAddedCatalogType = 'wms';
        this.predefinedCatalogsList$ = new BehaviorSubject([]);
        this.predefinedCatalogs = [];
        this.error = false;
        this.store = data.store;
        this.predefinedCatalogs = data.predefinedCatalogs;
        this.error = data.error;
        this.addedCatalog = data.addedCatalog;
        this.form = this.formBuilder.group({
            id: ['', []],
            title: ['', []],
            url: ['', [Validators.required]],
            type: [this.defaultAddedCatalogType, [Validators.required]]
        });
    }
    ngOnInit() {
        this.store.state.clear();
        this.typeCapabilities = Object.keys(TypeCapabilities);
        this.addedCatalogType$$ = this.form
            .get('type')
            .valueChanges.subscribe((value) => {
            if (value === 'wmts') {
                this.form.get('title').setValidators(Validators.required);
            }
            else {
                this.form.get('title').setValidators([]);
            }
            this.form.get('title').updateValueAndValidity();
        });
        this.computePredefinedCatalogList();
        this.storeViewAll$$ = this.store.view
            .all$()
            .subscribe(() => this.computePredefinedCatalogList());
        this.emailAddress = this.configService.getConfig('emailAddress');
    }
    ngOnDestroy() {
        this.addedCatalogType$$.unsubscribe();
        this.storeViewAll$$.unsubscribe();
    }
    changeUrlOrTitle(catalog) {
        this.form.patchValue(catalog);
        this.error = false;
        this.computePredefinedCatalogList();
    }
    computePredefinedCatalogList() {
        this.predefinedCatalogsList$.next(this.predefinedCatalogs.filter((c) => !this.store.get(c.id)));
    }
    addCatalog(addedCatalog) {
        this.error = false;
        this.dialogRef.close(addedCatalog);
    }
    cancel() {
        this.error = false;
        this.dialogRef.close();
    }
}
AddCatalogDialogComponent.ɵfac = function AddCatalogDialogComponent_Factory(t) { return new (t || AddCatalogDialogComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i3.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA, 8)); };
AddCatalogDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddCatalogDialogComponent, selectors: [["igo-add-catalog-dialog"]], decls: 34, vars: 25, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], [1, "igo-form", 3, "formGroup"], [1, "igo-input-container"], ["type", "text", "formControlName", "title", "matInput", "", 3, "placeholder", "matAutocomplete"], [3, "optionSelected"], ["auto2", "matAutocomplete"], ["matTooltipShowDelay", "500", 3, "matTooltip", "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "url", "placeholder", "URL", "matInput", "", 3, "matAutocomplete"], ["auto", "matAutocomplete"], ["formControlName", "type", "placeholder", "Type"], [3, "value", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-dialog-actions", "", 2, "justify-content", "center"], [1, "igo-form-button-group", "add-catalog-button-top-padding"], ["mat-raised-button", "", "type", "button", 3, "click"], ["id", "addCatalogBtnDialog", "mat-raised-button", "", "type", "button", "color", "primary", 3, "disabled", "click"], ["matTooltipShowDelay", "500", 3, "matTooltip", "value"], [3, "value", "click"], ["mat-line", ""], [1, "error"]], template: function AddCatalogDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "form", 2);
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵelement(7, "input", 4);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵelementStart(9, "mat-autocomplete", 5, 6);
        i0.ɵɵlistener("optionSelected", function AddCatalogDialogComponent_Template_mat_autocomplete_optionSelected_9_listener($event) { return ctx.changeUrlOrTitle($event.option.value); });
        i0.ɵɵtemplate(11, AddCatalogDialogComponent_mat_option_11_Template, 2, 3, "mat-option", 7);
        i0.ɵɵpipe(12, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 3);
        i0.ɵɵelementStart(14, "mat-form-field");
        i0.ɵɵelement(15, "input", 8);
        i0.ɵɵelementStart(16, "mat-autocomplete", 5, 9);
        i0.ɵɵlistener("optionSelected", function AddCatalogDialogComponent_Template_mat_autocomplete_optionSelected_16_listener($event) { return ctx.changeUrlOrTitle($event.option.value); });
        i0.ɵɵtemplate(18, AddCatalogDialogComponent_mat_option_18_Template, 2, 3, "mat-option", 7);
        i0.ɵɵpipe(19, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 3);
        i0.ɵɵelementStart(21, "mat-form-field");
        i0.ɵɵelementStart(22, "mat-select", 10);
        i0.ɵɵtemplate(23, AddCatalogDialogComponent_mat_option_23_Template, 3, 2, "mat-option", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(24, AddCatalogDialogComponent_span_24_Template, 3, 4, "span", 12);
        i0.ɵɵtemplate(25, AddCatalogDialogComponent_span_25_Template, 3, 3, "span", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 13);
        i0.ɵɵelementStart(27, "div", 14);
        i0.ɵɵelementStart(28, "button", 15);
        i0.ɵɵlistener("click", function AddCatalogDialogComponent_Template_button_click_28_listener() { return ctx.cancel(); });
        i0.ɵɵtext(29);
        i0.ɵɵpipe(30, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "button", 16);
        i0.ɵɵlistener("click", function AddCatalogDialogComponent_Template_button_click_31_listener() { return ctx.addCatalog(ctx.form.value); });
        i0.ɵɵtext(32);
        i0.ɵɵpipe(33, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(10);
        const _r2 = i0.ɵɵreference(17);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 13, "igo.geo.catalog.library.addTitle"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(8, 15, "igo.geo.printForm.title"));
        i0.ɵɵproperty("matAutocomplete", _r0);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(12, 17, ctx.predefinedCatalogsList$));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matAutocomplete", _r2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(19, 19, ctx.predefinedCatalogsList$));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.typeCapabilities);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.error && ctx.addedCatalog && ctx.emailAddress);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.error && ctx.addedCatalog && !ctx.emailAddress);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(30, 21, "igo.geo.catalog.library.cancel"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx.form.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(33, 23, "igo.geo.catalog.library.add"), " ");
    } }, directives: [i3.MatDialogTitle, i3.MatDialogContent, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i4.MatFormField, i1.DefaultValueAccessor, i5.MatInput, i6.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlName, i6.MatAutocomplete, i7.NgForOf, i8.MatSelect, i7.NgIf, i3.MatDialogActions, i9.MatButton, i10.MatOption, i11.MatTooltip, i10.MatLine], pipes: [i12.TranslatePipe, i7.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.add-catalog-button-top-padding[_ngcontent-%COMP%]{padding-top:25px}.igo-form[_ngcontent-%COMP%]{padding:10px 5px 5px}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center}button[_ngcontent-%COMP%]{cursor:pointer}button#addCatalogBtnDialog[disabled=true][_ngcontent-%COMP%]{cursor:default;background-color:#0000001f;color:#00000042}.error[_ngcontent-%COMP%]{color:red}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddCatalogDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-add-catalog-dialog',
                templateUrl: './add-catalog-dialog.component.html',
                styleUrls: ['./add-catalog-dialog.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.LanguageService }, { type: i2.ConfigService }, { type: i3.MatDialogRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNhdGFsb2ctZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2NhdGFsb2cvY2F0YWxvZy1saWJyYXJ5L2FkZC1jYXRhbG9nLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9jYXRhbG9nL2NhdGFsb2ctbGlicmFyeS9hZGQtY2F0YWxvZy1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pFLE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ0ExQyxzQ0FDcUU7SUFDbkUsWUFDRjtJQUFBLGlCQUFhOzs7SUFGWCx1REFBc0MsK0JBQUE7SUFDdEMsZUFDRjtJQURFLDJEQUNGOzs7SUFRQSxzQ0FDbUU7SUFDakUsWUFDRjtJQUFBLGlCQUFhOzs7SUFGWCxxREFBb0MsK0JBQUE7SUFDcEMsZUFDRjtJQURFLHlEQUNGOzs7SUFTQSxzQ0FHcUM7SUFBbkMsOEhBQVMsd0JBQXdCLElBQUM7SUFDaEMsNkJBQVk7SUFBQSxZQUFRO0lBQUEsaUJBQUk7SUFDNUIsaUJBQWE7OztJQUhYLCtCQUFjO0lBRUEsZUFBUTtJQUFSLDZCQUFROzs7O0lBTWhDLDRCQUFvRDtJQUNsRCw2QkFBaUI7SUFBQSxZQUFnSjtJQUFBLGlCQUFJO0lBQ3ZLLGlCQUFPOzs7SUFEWSxlQUFnSjtJ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QUdhOztRQUNmLGlCQUFtQjtRQUNyQixpQkFBaUI7UUFDbkIsaUJBQU07UUFDTiwrQkFBaUM7UUFDL0IsdUNBQWdCO1FBQ2QsdUNBRXFCO1FBQ25CLDJGQUthO1FBQ2YsaUJBQWE7UUFDZixpQkFBaUI7UUFDbkIsaUJBQU07UUFDUixpQkFBTztRQUNQLCtFQUVPO1FBQ1AsK0VBRU87UUFDVCxpQkFBTTtRQUNOLGdDQUF3RDtRQUN0RCxnQ0FBa0U7UUFDaEUsbUNBR3FCO1FBQW5CLHVHQUFTLFlBQVEsSUFBQztRQUNsQixhQUNGOztRQUFBLGlCQUFTO1FBQ1QsbUNBTW1DO1FBQWpDLHVHQUFTLDhCQUFzQixJQUFDO1FBQ2hDLGFBQ0Y7O1FBQUEsaUJBQVM7UUFDWCxpQkFBTTtRQUNSLGlCQUFNOzs7O1FBakVzQyxlQUFrRDtRQUFsRCwrRUFBa0Q7UUFFckUsZUFBa0I7UUFBbEIsb0NBQWtCO1FBR1EsZUFBdUQ7UUFBdkQseUZBQXVEO1FBQVUscUNBQXlCO1FBRXpGLGVBQW9DO1FBQXBDLDZFQUFvQztRQVNaLGVBQXdCO1FBQXhCLHFDQUF3QjtRQUVoRCxlQUFvQztRQUFwQyw2RUFBb0M7UUFhM0QsZUFBbUI7UUFBbkIsOENBQW1CO1FBU3ZDLGVBQTJDO1FBQTNDLHdFQUEyQztRQUczQyxlQUE0QztRQUE1Qyx5RUFBNEM7UUFVL0MsZUFDRjtRQURFLHlGQUNGO1FBTUUsZUFBd0I7UUFBeEIsMENBQXdCO1FBRXhCLGVBQ0Y7UUFERSxzRkFDRjs7dUZEaERTLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQ7O3NCQW1CSSxRQUFROztzQkFDUixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UsIENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFbnRpdHlTdG9yZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBUeXBlQ2FwYWJpbGl0aWVzIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDYXRhbG9nIH0gZnJvbSAnLi4vc2hhcmVkL2NhdGFsb2cuYWJzdHJhY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tYWRkLWNhdGFsb2ctZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1jYXRhbG9nLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1jYXRhbG9nLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZENhdGFsb2dEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG4gIHByaXZhdGUgZGVmYXVsdEFkZGVkQ2F0YWxvZ1R5cGUgPSAnd21zJztcbiAgcHJpdmF0ZSBhZGRlZENhdGFsb2dUeXBlJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIHByZWRlZmluZWRDYXRhbG9nc0xpc3QkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDYXRhbG9nW10+KFtdKTtcbiAgdHlwZUNhcGFiaWxpdGllczogc3RyaW5nW107XG4gIHByZWRlZmluZWRDYXRhbG9nczogQ2F0YWxvZ1tdID0gW107XG4gIHN0b3JlOiBFbnRpdHlTdG9yZTxDYXRhbG9nPjtcbiAgZXJyb3IgPSBmYWxzZTtcbiAgYWRkZWRDYXRhbG9nOiBDYXRhbG9nO1xuICBlbWFpbEFkZHJlc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBzdG9yZVZpZXdBbGwkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFkZENhdGFsb2dEaWFsb2dDb21wb25lbnQ+LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpXG4gICAgcHVibGljIGRhdGE6IHsgcHJlZGVmaW5lZENhdGFsb2dzOiBDYXRhbG9nW107IHN0b3JlOiBFbnRpdHlTdG9yZTxDYXRhbG9nPjsgZXJyb3I6IGJvb2xlYW47IGFkZGVkQ2F0YWxvZzogQ2F0YWxvZyB9XG4gICkge1xuICAgIHRoaXMuc3RvcmUgPSBkYXRhLnN0b3JlO1xuICAgIHRoaXMucHJlZGVmaW5lZENhdGFsb2dzID0gZGF0YS5wcmVkZWZpbmVkQ2F0YWxvZ3M7XG4gICAgdGhpcy5lcnJvciA9IGRhdGEuZXJyb3I7XG4gICAgdGhpcy5hZGRlZENhdGFsb2cgPSBkYXRhLmFkZGVkQ2F0YWxvZztcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGlkOiBbJycsIFtdXSxcbiAgICAgIHRpdGxlOiBbJycsIFtdXSxcbiAgICAgIHVybDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgdHlwZTogW3RoaXMuZGVmYXVsdEFkZGVkQ2F0YWxvZ1R5cGUsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RvcmUuc3RhdGUuY2xlYXIoKTtcbiAgICB0aGlzLnR5cGVDYXBhYmlsaXRpZXMgPSBPYmplY3Qua2V5cyhUeXBlQ2FwYWJpbGl0aWVzKTtcblxuICAgIHRoaXMuYWRkZWRDYXRhbG9nVHlwZSQkID0gdGhpcy5mb3JtXG4gICAgICAuZ2V0KCd0eXBlJylcbiAgICAgIC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09ICd3bXRzJykge1xuICAgICAgICAgIHRoaXMuZm9ybS5nZXQoJ3RpdGxlJykuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZvcm0uZ2V0KCd0aXRsZScpLnNldFZhbGlkYXRvcnMoW10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9ybS5nZXQoJ3RpdGxlJykudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmNvbXB1dGVQcmVkZWZpbmVkQ2F0YWxvZ0xpc3QoKTtcbiAgICB0aGlzLnN0b3JlVmlld0FsbCQkID0gdGhpcy5zdG9yZS52aWV3XG4gICAgICAuYWxsJCgpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY29tcHV0ZVByZWRlZmluZWRDYXRhbG9nTGlzdCgpKTtcblxuICAgIHRoaXMuZW1haWxBZGRyZXNzID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygnZW1haWxBZGRyZXNzJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmFkZGVkQ2F0YWxvZ1R5cGUkJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3RvcmVWaWV3QWxsJCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGNoYW5nZVVybE9yVGl0bGUoY2F0YWxvZzogQ2F0YWxvZykge1xuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKGNhdGFsb2cpO1xuICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmNvbXB1dGVQcmVkZWZpbmVkQ2F0YWxvZ0xpc3QoKTtcbiAgfVxuXG4gIGNvbXB1dGVQcmVkZWZpbmVkQ2F0YWxvZ0xpc3QoKSB7XG4gICAgdGhpcy5wcmVkZWZpbmVkQ2F0YWxvZ3NMaXN0JC5uZXh0KFxuICAgICAgdGhpcy5wcmVkZWZpbmVkQ2F0YWxvZ3MuZmlsdGVyKChjKSA9PiAhdGhpcy5zdG9yZS5nZXQoYy5pZCkpXG4gICAgKTtcbiAgfVxuXG4gIGFkZENhdGFsb2coYWRkZWRDYXRhbG9nOiBDYXRhbG9nKSB7XG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGFkZGVkQ2F0YWxvZyk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj57eydpZ28uZ2VvLmNhdGFsb2cubGlicmFyeS5hZGRUaXRsZScgfCB0cmFuc2xhdGV9fTwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+XG4gIDxmb3JtIGNsYXNzPVwiaWdvLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaWdvLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwie3snaWdvLmdlby5wcmludEZvcm0udGl0bGUnIHwgdHJhbnNsYXRlfX1cIiBtYXRJbnB1dCBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG8yXCI+XG4gICAgICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvMj1cIm1hdEF1dG9jb21wbGV0ZVwiIChvcHRpb25TZWxlY3RlZCk9J2NoYW5nZVVybE9yVGl0bGUoJGV2ZW50Lm9wdGlvbi52YWx1ZSknPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBwcmVkZWZpbmVkQ2F0YWxvZyBvZiAocHJlZGVmaW5lZENhdGFsb2dzTGlzdCQgfCBhc3luYylcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwXT1cInByZWRlZmluZWRDYXRhbG9nLnRpdGxlXCIgW3ZhbHVlXT1cInByZWRlZmluZWRDYXRhbG9nXCI+XG4gICAgICAgICAgICB7e3ByZWRlZmluZWRDYXRhbG9nLnRpdGxlfX1cbiAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZm9ybUNvbnRyb2xOYW1lPVwidXJsXCIgcGxhY2Vob2xkZXI9XCJVUkxcIiBtYXRJbnB1dCBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIj5cbiAgICAgICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIiAob3B0aW9uU2VsZWN0ZWQpPSdjaGFuZ2VVcmxPclRpdGxlKCRldmVudC5vcHRpb24udmFsdWUpJz5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcHJlZGVmaW5lZENhdGFsb2cgb2YgKHByZWRlZmluZWRDYXRhbG9nc0xpc3QkIHwgYXN5bmMpXCIgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJwcmVkZWZpbmVkQ2F0YWxvZy51cmxcIiBbdmFsdWVdPVwicHJlZGVmaW5lZENhdGFsb2dcIj5cbiAgICAgICAgICAgIHt7cHJlZGVmaW5lZENhdGFsb2cudXJsfX1cbiAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGVcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvblxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IHR5cGUgb2YgdHlwZUNhcGFiaWxpdGllc1wiXG4gICAgICAgICAgICBbdmFsdWVdPVwidHlwZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgICAgICAgIDxwIG1hdC1saW5lPnt7dHlwZX19PC9wPlxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuICA8c3BhbiAqbmdJZj1cImVycm9yICYmIGFkZGVkQ2F0YWxvZyAmJiBlbWFpbEFkZHJlc3NcIj5cbiAgICA8cCBjbGFzcz1cImVycm9yXCI+e3tsYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uY2F0YWxvZy5leHRlcm5hbFByb3ZpZGVyLnVuYXZhaWxhYmxlV2l0aEVtYWlsJywgeyB2YWx1ZTogYWRkZWRDYXRhbG9nLnVybCwgZW1haWw6IGVtYWlsQWRkcmVzcyB9KX19PC9wPlxuICA8L3NwYW4+XG4gIDxzcGFuICpuZ0lmPVwiZXJyb3IgJiYgYWRkZWRDYXRhbG9nICYmICFlbWFpbEFkZHJlc3NcIj5cbiAgICA8cCBjbGFzcz1cImVycm9yXCI+e3tsYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uY2F0YWxvZy51bmF2YWlsYWJsZScsIHsgdmFsdWU6IGFkZGVkQ2F0YWxvZy51cmwgfSl9fTwvcD5cbiAgPC9zcGFuPlxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpZ28tZm9ybS1idXR0b24tZ3JvdXAgYWRkLWNhdGFsb2ctYnV0dG9uLXRvcC1wYWRkaW5nXCI+XG4gICAgPGJ1dHRvblxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgKGNsaWNrKT1cImNhbmNlbCgpXCI+XG4gICAgICB7eydpZ28uZ2VvLmNhdGFsb2cubGlicmFyeS5jYW5jZWwnIHwgdHJhbnNsYXRlfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBpZD1cImFkZENhdGFsb2dCdG5EaWFsb2dcIlxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiXG4gICAgICAoY2xpY2spPVwiYWRkQ2F0YWxvZyhmb3JtLnZhbHVlKVwiPlxuICAgICAge3snaWdvLmdlby5jYXRhbG9nLmxpYnJhcnkuYWRkJyB8IHRyYW5zbGF0ZX19XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+Il19