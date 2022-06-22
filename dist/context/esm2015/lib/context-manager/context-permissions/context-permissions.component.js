import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TypePermission } from '../shared/context.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common/http";
import * as i3 from "@igo2/auth";
import * as i4 from "@igo2/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/radio";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/input";
import * as i9 from "@angular/material/autocomplete";
import * as i10 from "@angular/material/button";
import * as i11 from "@angular/material/core";
import * as i12 from "@igo2/common";
import * as i13 from "@angular/material/list";
import * as i14 from "@angular/material/icon";
import * as i15 from "@angular/material/tooltip";
import * as i16 from "@ngx-translate/core";
function ContextPermissionsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "igo.context.permission.readOnlyTitle"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 4, "igo.context.permission.readOnlyMsg"));
} }
function ContextPermissionsComponent_div_0_div_2_mat_radio_button_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 8);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.context.permission.scope.public"), " ");
} }
function ContextPermissionsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "mat-radio-group", 4);
    i0.ɵɵlistener("ngModelChange", function ContextPermissionsComponent_div_0_div_2_Template_mat_radio_group_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.context.scope = $event; })("change", function ContextPermissionsComponent_div_0_div_2_Template_mat_radio_group_change_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.scopeChanged.emit(ctx_r8.context); });
    i0.ɵɵelementStart(2, "mat-radio-button", 5);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-radio-button", 6);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ContextPermissionsComponent_div_0_div_2_mat_radio_button_8_Template, 3, 3, "mat-radio-button", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.context.scope);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 4, "igo.context.permission.scope.private"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 6, "igo.context.permission.scope.shared"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.authService.isAdmin);
} }
function ContextPermissionsComponent_div_0_form_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "br");
    i0.ɵɵelementStart(3, "small", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const profil_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", profil_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", profil_r11.title, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(profil_r11.name);
} }
function ContextPermissionsComponent_div_0_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 9);
    i0.ɵɵlistener("ngSubmit", function ContextPermissionsComponent_div_0_form_3_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.handleFormSubmit(ctx_r12.form.value); });
    i0.ɵɵelementStart(1, "mat-form-field", 10);
    i0.ɵɵelement(2, "input", 11);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementStart(4, "mat-autocomplete", 12, 13);
    i0.ɵɵlistener("optionSelected", function ContextPermissionsComponent_div_0_form_3_Template_mat_autocomplete_optionSelected_4_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.onProfilSelected($event.option.value); });
    i0.ɵɵtemplate(6, ContextPermissionsComponent_div_0_form_3_mat_option_6_Template, 5, 3, "mat-option", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-error");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-radio-group", 15);
    i0.ɵɵelementStart(11, "mat-radio-button", 16);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-radio-button", 17);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 18);
    i0.ɵɵelementStart(18, "button", 19);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = i0.ɵɵreference(5);
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r3.form);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 11, "igo.context.permission.user"))("formControl", ctx_r3.formControl)("matAutocomplete", _r9);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("displayWith", ctx_r3.displayFn);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.profils);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 13, "igo.context.permission.profilRequired"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 15, "igo.context.permission.read"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 17, "igo.context.permission.write"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r3.form.valid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 19, "igo.context.permission.addBtn"), " ");
} }
function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const permission_r19 = i0.ɵɵnextContext().$implicit; const ctx_r21 = i0.ɵɵnextContext(5); return ctx_r21.removePermission.emit(permission_r19); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.permission.delete"));
} }
function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelement(1, "mat-icon", 25);
    i0.ɵɵelementStart(2, "h4", 26);
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "small", 21);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 27);
    i0.ɵɵtemplate(7, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_button_7_Template, 3, 3, "button", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const permission_r19 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", permission_r19.profilTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(permission_r19.profil);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r18.canWrite || permission_r19.profil === ctx_r18.authService.decodeToken().user.sourceId);
} }
function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "igo-collapsible", 24);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtemplate(2, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_Template, 8, 3, "ng-template", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupPermissions_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 2, "igo.context.permission." + groupPermissions_r16.key));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", groupPermissions_r16.value);
} }
function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_Template, 3, 4, "igo-collapsible", 23);
} if (rf & 2) {
    const groupPermissions_r16 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", groupPermissions_r16.value.length);
} }
function ContextPermissionsComponent_div_0_igo_list_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "igo-list");
    i0.ɵɵtemplate(1, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_Template, 1, 1, "ng-template", 22);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r4.permissions));
} }
function ContextPermissionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ContextPermissionsComponent_div_0_div_1_Template, 7, 6, "div", 1);
    i0.ɵɵtemplate(2, ContextPermissionsComponent_div_0_div_2_Template, 9, 8, "div", 1);
    i0.ɵɵtemplate(3, ContextPermissionsComponent_div_0_form_3_Template, 21, 21, "form", 2);
    i0.ɵɵtemplate(4, ContextPermissionsComponent_div_0_igo_list_4_Template, 3, 3, "igo-list", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.canWrite);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.canWrite);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.context.scope !== "private" && ctx_r0.canWrite);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.permissions && ctx_r0.context.scope !== "private");
} }
export class ContextPermissionsComponent {
    constructor(formBuilder, cd, http, authService, config) {
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.http = http;
        this.authService = authService;
        this.config = config;
        this._profils = [];
        this.formControl = new FormControl();
        this.addPermission = new EventEmitter();
        this.removePermission = new EventEmitter();
        this.scopeChanged = new EventEmitter();
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
        this.cd.detectChanges();
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
        this.cd.detectChanges();
    }
    get profils() {
        return this._profils;
    }
    set profils(value) {
        this._profils = value;
        this.cd.detectChanges();
    }
    get canWrite() {
        return this.context.permission === TypePermission[TypePermission.write];
    }
    ngOnInit() {
        this.buildForm();
        this.baseUrlProfils = this.config.getConfig('context.url') + '/profils-users?';
        this.formValueChanges$$ = this.formControl.valueChanges.subscribe((value) => {
            if (value.length) {
                this.http.get(this.baseUrlProfils + 'q=' + value).subscribe(profils => {
                    this.profils = profils;
                });
                this.profils.filter((profil) => {
                    const filterNormalized = value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    const profilTitleNormalized = profil.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    const profilNameNormalized = profil.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    const profilNormalized = profilNameNormalized + profilTitleNormalized;
                    return profilNormalized.includes(filterNormalized);
                });
            }
            else {
                this.profils = [];
            }
        });
    }
    displayFn(profil) {
        return profil ? profil.title : undefined;
    }
    handleFormSubmit(value) {
        this.addPermission.emit(value);
    }
    buildForm() {
        this.form = this.formBuilder.group({
            profil: [],
            typePermission: ['read']
        });
    }
    onProfilSelected(value) {
        this.form.setValue({
            profil: value.name,
            typePermission: this.form.value.typePermission
        });
    }
}
ContextPermissionsComponent.ɵfac = function ContextPermissionsComponent_Factory(t) { return new (t || ContextPermissionsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.HttpClient), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.ConfigService)); };
ContextPermissionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextPermissionsComponent, selectors: [["igo-context-permissions"]], inputs: { context: "context", permissions: "permissions" }, outputs: { addPermission: "addPermission", removePermission: "removePermission", scopeChanged: "scopeChanged" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "scopeForm", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "scopeForm"], [3, "ngModel", "ngModelChange", "change"], ["value", "private"], ["value", "protected"], ["value", "public", 4, "ngIf"], ["value", "public"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "required", "", 3, "placeholder", "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "typePermission"], ["value", "read"], ["value", "write"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], [3, "value"], [1, "mat-typography"], ["ngFor", "", 3, "ngForOf"], [3, "title", 4, "ngIf"], [3, "title"], ["mat-list-avatar", "", "svgIcon", "account-outline"], ["mat-line", ""], ["igoStopPropagation", "", 1, "igo-actions-container"], ["mat-icon-button", "", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click"], ["svgIcon", "delete"]], template: function ContextPermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ContextPermissionsComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.context);
    } }, directives: [i5.NgIf, i6.MatRadioGroup, i1.NgControlStatus, i1.NgModel, i6.MatRadioButton, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i7.MatFormField, i8.MatInput, i1.DefaultValueAccessor, i9.MatAutocompleteTrigger, i1.RequiredValidator, i1.FormControlDirective, i9.MatAutocomplete, i5.NgForOf, i7.MatError, i1.FormControlName, i10.MatButton, i11.MatOption, i12.ListComponent, i12.CollapsibleComponent, i13.MatListItem, i14.MatIcon, i13.MatListAvatarCssMatStyler, i11.MatLine, i12.StopPropagationDirective, i15.MatTooltip], pipes: [i16.TranslatePipe, i12.KeyValuePipe], styles: ["[_nghost-%COMP%]{margin:10px}.full-width[_ngcontent-%COMP%]{width:100%}mat-radio-button[_ngcontent-%COMP%]{padding:14px 14px 14px 0}.scopeForm[_ngcontent-%COMP%], form[_ngcontent-%COMP%]{padding:5px}mat-option[_ngcontent-%COMP%]     .mat-option-text{line-height:normal;line-height:initial}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextPermissionsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-permissions',
                templateUrl: './context-permissions.component.html',
                styleUrls: ['./context-permissions.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i2.HttpClient }, { type: i3.AuthService }, { type: i4.ConfigService }]; }, { context: [{
            type: Input
        }], permissions: [{
            type: Input
        }], addPermission: [{
            type: Output
        }], removePermission: [{
            type: Output
        }], scopeChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1wZXJtaXNzaW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYW5hZ2VyL2NvbnRleHQtcGVybWlzc2lvbnMvY29udGV4dC1wZXJtaXNzaW9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYW5hZ2VyL2NvbnRleHQtcGVybWlzc2lvbnMvY29udGV4dC1wZXJtaXNzaW9ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE2QixNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQTBCLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXJFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1B0RCw4QkFBeUM7SUFDdkMsMEJBQUk7SUFBQSxZQUF3RDs7SUFBQSxpQkFBSztJQUNqRSx5QkFBRztJQUFBLFlBQXNEOztJQUFBLGlCQUFJO0lBQy9ELGlCQUFNOztJQUZBLGVBQXdEO0lBQXhELGtGQUF3RDtJQUN6RCxlQUFzRDtJQUF0RCxnRkFBc0Q7OztJQVl2RCwyQ0FBNkQ7SUFDM0QsWUFDRjs7SUFBQSxpQkFBbUI7O0lBRGpCLGVBQ0Y7SUFERSw0RkFDRjs7OztJQVhKLDhCQUF3QztJQUN0QywwQ0FDc0Q7SUFEckMsK09BQTJCLDZLQUNsQix3Q0FBMEIsSUFEUjtJQUUxQywyQ0FBa0M7SUFDaEMsWUFDRjs7SUFBQSxpQkFBbUI7SUFDbkIsMkNBQW9DO0lBQ2xDLFlBQ0Y7O0lBQUEsaUJBQW1CO0lBQ25CLGtIQUVtQjtJQUNyQixpQkFBa0I7SUFDcEIsaUJBQU07OztJQVphLGVB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LENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDakMsTUFBTSxFQUFFLEVBQUU7WUFDVixjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDakIsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2xCLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjO1NBQy9DLENBQUMsQ0FBQztJQUNMLENBQUM7O3NHQTlGVSwyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQ3RCeEMsNEVBOEZNOztRQTlGQSxrQ0FBYTs7dUZEc0JOLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQ7NktBS0ssT0FBTztrQkFEVixLQUFLO1lBV0YsV0FBVztrQkFEZCxLQUFLO1lBNEJJLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxnQkFBZ0I7a0JBQXpCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuICBDb250ZXh0LFxuICBDb250ZXh0UGVybWlzc2lvbixcbiAgQ29udGV4dFBlcm1pc3Npb25zTGlzdCxcbiAgQ29udGV4dFByb2ZpbHNcbn0gZnJvbSAnLi4vc2hhcmVkL2NvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFR5cGVQZXJtaXNzaW9uIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnRleHQuZW51bSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAaWdvMi9hdXRoJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWNvbnRleHQtcGVybWlzc2lvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGV4dC1wZXJtaXNzaW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRleHQtcGVybWlzc2lvbnMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0UGVybWlzc2lvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb250ZXh0KCk6IENvbnRleHQge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICB9XG4gIHNldCBjb250ZXh0KHZhbHVlOiBDb250ZXh0KSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHZhbHVlO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHByaXZhdGUgX2NvbnRleHQ6IENvbnRleHQ7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBlcm1pc3Npb25zKCk6IENvbnRleHRQZXJtaXNzaW9uc0xpc3Qge1xuICAgIHJldHVybiB0aGlzLl9wZXJtaXNzaW9ucztcbiAgfVxuICBzZXQgcGVybWlzc2lvbnModmFsdWU6IENvbnRleHRQZXJtaXNzaW9uc0xpc3QpIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHZhbHVlO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHByaXZhdGUgX3Blcm1pc3Npb25zOiBDb250ZXh0UGVybWlzc2lvbnNMaXN0O1xuXG4gIGdldCBwcm9maWxzKCk6IENvbnRleHRQcm9maWxzW10ge1xuICAgIHJldHVybiB0aGlzLl9wcm9maWxzO1xuICB9XG4gIHNldCBwcm9maWxzKHZhbHVlOiBDb250ZXh0UHJvZmlsc1tdKSB7XG4gICAgdGhpcy5fcHJvZmlscyA9IHZhbHVlO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHByaXZhdGUgX3Byb2ZpbHM6IENvbnRleHRQcm9maWxzW10gPSBbXTtcblxuICBnZXQgY2FuV3JpdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5wZXJtaXNzaW9uID09PSBUeXBlUGVybWlzc2lvbltUeXBlUGVybWlzc2lvbi53cml0ZV07XG4gIH1cblxuICBwcml2YXRlIGJhc2VVcmxQcm9maWxzO1xuXG4gIHB1YmxpYyBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBmb3JtVmFsdWVDaGFuZ2VzJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBAT3V0cHV0KCkgYWRkUGVybWlzc2lvbjogRXZlbnRFbWl0dGVyPENvbnRleHRQZXJtaXNzaW9uPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlbW92ZVBlcm1pc3Npb246IEV2ZW50RW1pdHRlcjxDb250ZXh0UGVybWlzc2lvbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzY29wZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDb250ZXh0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5idWlsZEZvcm0oKTtcblxuICAgIHRoaXMuYmFzZVVybFByb2ZpbHMgPSB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2NvbnRleHQudXJsJykgKyAnL3Byb2ZpbHMtdXNlcnM/JztcblxuICAgIHRoaXMuZm9ybVZhbHVlQ2hhbmdlcyQkID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybFByb2ZpbHMgKyAncT0nICsgdmFsdWUpLnN1YnNjcmliZShwcm9maWxzID0+IHtcbiAgICAgICAgICB0aGlzLnByb2ZpbHMgPSBwcm9maWxzIGFzIENvbnRleHRQcm9maWxzW107XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb2ZpbHMuZmlsdGVyKChwcm9maWwpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJOb3JtYWxpemVkID0gdmFsdWUudG9Mb3dlckNhc2UoKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbiAgICAgICAgICBjb25zdCBwcm9maWxUaXRsZU5vcm1hbGl6ZWQgPSBwcm9maWwudGl0bGUudG9Mb3dlckNhc2UoKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbiAgICAgICAgICBjb25zdCBwcm9maWxOYW1lTm9ybWFsaXplZCA9IHByb2ZpbC5uYW1lLnRvTG93ZXJDYXNlKCkubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJyk7XG4gICAgICAgICAgY29uc3QgcHJvZmlsTm9ybWFsaXplZCA9IHByb2ZpbE5hbWVOb3JtYWxpemVkICsgcHJvZmlsVGl0bGVOb3JtYWxpemVkO1xuICAgICAgICAgIHJldHVybiBwcm9maWxOb3JtYWxpemVkLmluY2x1ZGVzKGZpbHRlck5vcm1hbGl6ZWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvZmlscyA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGlzcGxheUZuKHByb2ZpbD86IENvbnRleHRQcm9maWxzKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gcHJvZmlsID8gcHJvZmlsLnRpdGxlIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUZvcm1TdWJtaXQodmFsdWUpIHtcbiAgICB0aGlzLmFkZFBlcm1pc3Npb24uZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHByb2ZpbDogW10sXG4gICAgICB0eXBlUGVybWlzc2lvbjogWydyZWFkJ11cbiAgICB9KTtcbiAgfVxuXG4gIG9uUHJvZmlsU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmZvcm0uc2V0VmFsdWUoe1xuICAgICAgcHJvZmlsOiB2YWx1ZS5uYW1lLFxuICAgICAgdHlwZVBlcm1pc3Npb246IHRoaXMuZm9ybS52YWx1ZS50eXBlUGVybWlzc2lvblxuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiY29udGV4dFwiPlxuXG4gIDxkaXYgKm5nSWY9XCIhY2FuV3JpdGVcIiBjbGFzcz1cInNjb3BlRm9ybVwiPlxuICAgIDxoND57eyAnaWdvLmNvbnRleHQucGVybWlzc2lvbi5yZWFkT25seVRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDQ+XG4gICAgPHA+e3sgJ2lnby5jb250ZXh0LnBlcm1pc3Npb24ucmVhZE9ubHlNc2cnIHwgdHJhbnNsYXRlIH19PC9wPlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiY2FuV3JpdGVcIiBjbGFzcz1cInNjb3BlRm9ybVwiPlxuICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJjb250ZXh0LnNjb3BlXCJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzY29wZUNoYW5nZWQuZW1pdChjb250ZXh0KVwiPlxuICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJwcml2YXRlXCI+XG4gICAgICAgIHt7ICdpZ28uY29udGV4dC5wZXJtaXNzaW9uLnNjb3BlLnByaXZhdGUnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInByb3RlY3RlZFwiPlxuICAgICAgICB7eyAnaWdvLmNvbnRleHQucGVybWlzc2lvbi5zY29wZS5zaGFyZWQnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdJZj1cImF1dGhTZXJ2aWNlLmlzQWRtaW5cIiB2YWx1ZT1cInB1YmxpY1wiPlxuICAgICAgICB7eyAnaWdvLmNvbnRleHQucGVybWlzc2lvbi5zY29wZS5wdWJsaWMnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gIDwvZGl2PlxuXG4gIDxmb3JtICpuZ0lmPVwiY29udGV4dC5zY29wZSAhPT0gJ3ByaXZhdGUnICYmIGNhbldyaXRlXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCJcbiAgICAobmdTdWJtaXQpPVwiaGFuZGxlRm9ybVN1Ym1pdChmb3JtLnZhbHVlKVwiPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgPGlucHV0IG1hdElucHV0IHJlcXVpcmVkXG4gICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidpZ28uY29udGV4dC5wZXJtaXNzaW9uLnVzZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgICAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiPlxuICAgICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIiAob3B0aW9uU2VsZWN0ZWQpPVwib25Qcm9maWxTZWxlY3RlZCgkZXZlbnQub3B0aW9uLnZhbHVlKVwiXG4gICAgICAgIFtkaXNwbGF5V2l0aF09XCJkaXNwbGF5Rm5cIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcHJvZmlsIG9mIHRoaXMucHJvZmlsc1wiIFt2YWx1ZV09XCJwcm9maWxcIj5cbiAgICAgICAgICAgICAge3twcm9maWwudGl0bGV9fTxicj5cbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj57e3Byb2ZpbC5uYW1lfX08L3NtYWxsPlxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgICAgPG1hdC1lcnJvcj5cbiAgICAgICB7eyAnaWdvLmNvbnRleHQucGVybWlzc2lvbi5wcm9maWxSZXF1aXJlZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgPC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuXG4gICAgPG1hdC1yYWRpby1ncm91cCBmb3JtQ29udHJvbE5hbWU9XCJ0eXBlUGVybWlzc2lvblwiPlxuICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJyZWFkXCI+XG4gICAgICAgIHt7ICdpZ28uY29udGV4dC5wZXJtaXNzaW9uLnJlYWQnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIndyaXRlXCI+XG4gICAgICAgIHt7ICdpZ28uY29udGV4dC5wZXJtaXNzaW9uLndyaXRlJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiaWdvLWZvcm0tYnV0dG9uLWdyb3VwXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIj5cbiAgICAgICAge3sgJ2lnby5jb250ZXh0LnBlcm1pc3Npb24uYWRkQnRuJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgPC9mb3JtPlxuXG4gIDxpZ28tbGlzdCAqbmdJZj1cInBlcm1pc3Npb25zICYmIGNvbnRleHQuc2NvcGUgIT09ICdwcml2YXRlJ1wiPlxuICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtZ3JvdXBQZXJtaXNzaW9ucyBbbmdGb3JPZl09XCJwZXJtaXNzaW9ucyB8IGtleXZhbHVlXCI+XG4gICAgICA8aWdvLWNvbGxhcHNpYmxlXG4gICAgICAgICpuZ0lmPVwiZ3JvdXBQZXJtaXNzaW9ucy52YWx1ZS5sZW5ndGhcIlxuICAgICAgICBbdGl0bGVdPVwiJ2lnby5jb250ZXh0LnBlcm1pc3Npb24uJyArIGdyb3VwUGVybWlzc2lvbnMua2V5IHwgdHJhbnNsYXRlXCI+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1wZXJtaXNzaW9uIFtuZ0Zvck9mXT1cImdyb3VwUGVybWlzc2lvbnMudmFsdWVcIj5cbiAgICAgICAgICA8bWF0LWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1hdmF0YXIgc3ZnSWNvbj1cImFjY291bnQtb3V0bGluZVwiPjwvbWF0LWljb24+XG4gICAgICAgICAgICA8aDQgbWF0LWxpbmU+e3twZXJtaXNzaW9uLnByb2ZpbFRpdGxlfX0gPHNtYWxsIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj57e3Blcm1pc3Npb24ucHJvZmlsfX08L3NtYWxsPjwvaDQ+XG5cbiAgICAgICAgICAgIDxkaXYgaWdvU3RvcFByb3BhZ2F0aW9uXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiaWdvLWFjdGlvbnMtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjYW5Xcml0ZSB8fCBwZXJtaXNzaW9uLnByb2ZpbCA9PT0gYXV0aFNlcnZpY2UuZGVjb2RlVG9rZW4oKS51c2VyLnNvdXJjZUlkXCJcbiAgICAgICAgICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uY29udGV4dC5wZXJtaXNzaW9uLmRlbGV0ZScgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZVBlcm1pc3Npb24uZW1pdChwZXJtaXNzaW9uKVwiPlxuICAgICAgICAgICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImRlbGV0ZVwiPjwvbWF0LWljb24+XG4gICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9pZ28tY29sbGFwc2libGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9pZ28tbGlzdD5cblxuPC9kaXY+XG4iXX0=