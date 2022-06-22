import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Optional, Self } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EntityTableColumnRenderer, EntityTableSelectionState, EntityTableScrollBehavior } from '../shared';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import * as moment_ from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/table";
import * as i5 from "@angular/material/sort";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/checkbox";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/material/autocomplete";
import * as i10 from "@angular/material/datepicker";
import * as i11 from "@angular/material/form-field";
import * as i12 from "@angular/material/input";
import * as i13 from "@angular/material/select";
import * as i14 from "@angular/material/icon";
import * as i15 from "@angular/material/button";
import * as i16 from "../../stop-propagation/stop-propagation.directive";
import * as i17 from "./entity-table-row.directive";
import * as i18 from "../entity-table-paginator/entity-table-paginator.component";
import * as i19 from "../../image/secure-image.pipe";
import * as i20 from "@ngx-translate/core";
import * as i21 from "../../custom-html/custom-html.pipe";
function EntityTableComponent_th_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 11);
    i0.ɵɵlistener("change", function EntityTableComponent_th_3_ng_container_1_ng_container_1_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.onToggleRows($event.checked); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selectionState_r8 = ctx.ngIf;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", selectionState_r8 === ctx_r7.entityTableSelectionState.All)("indeterminate", selectionState_r8 === ctx_r7.entityTableSelectionState.Some);
} }
function EntityTableComponent_th_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_th_3_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 10);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r6.selectionState$));
} }
function EntityTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtemplate(1, EntityTableComponent_th_3_ng_container_1_Template, 3, 3, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.selectMany);
} }
function EntityTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelementStart(1, "mat-checkbox", 13);
    i0.ɵɵlistener("mousedown", function EntityTableComponent_td_4_Template_mat_checkbox_mousedown_1_listener($event) { return $event.shiftKey ? $event.preventDefault() : null; })("click", function EntityTableComponent_td_4_Template_mat_checkbox_click_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r14); const record_r11 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return $event.shiftKey ? ctx_r13.onShiftToggleRow(!ctx_r13.rowIsSelected(record_r11), record_r11, $event) : $event.stopPropagation(); })("change", function EntityTableComponent_td_4_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r14); const record_r11 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onToggleRow($event.checked, record_r11); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r1.rowIsSelected(record_r11));
} }
function EntityTableComponent_ng_container_5_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r16 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("matTooltip", column_r16.tooltip ? column_r16.tooltip : undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r16.title, " ");
} }
function EntityTableComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_1_th_1_Template, 2, 2, "th", 15);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r16 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("matTooltip", column_r16.tooltip ? column_r16.tooltip : undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r16.title, " ");
} }
function EntityTableComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_2_th_1_Template, 2, 2, "th", 17);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r31 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r32 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r32.getCellClass(record_r31, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r32.getValue(record_r31, column_r16), " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "secureImage");
} if (rf & 2) {
    const record_r31 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r37 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(1, 1, i0.ɵɵpipeBind1(2, 3, ctx_r37.getValue(record_r31, column_r16))), i0.ɵɵsanitizeUrl);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.common.entity-table.targetHtmlUrl"), " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵelementStart(1, "a", 23);
    i0.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_Template_a_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_img_2_Template, 3, 5, "img", 24);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_ng_template_3_Template, 3, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r38 = i0.ɵɵreference(4);
    const record_r31 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r34 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r34.getCellClass(record_r31, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", ctx_r34.getValue(record_r31, column_r16), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.isImg(ctx_r34.getValue(record_r31, column_r16)))("ngIfElse", _r38);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_td_1_Template, 2, 2, "td", 20);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_Template, 5, 4, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const record_r31 = ctx.$implicit;
    const _r33 = i0.ɵɵreference(3);
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r30 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r30.isUrl(ctx_r30.getValue(record_r31, column_r16)))("ngIfElse", _r33);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 29);
} if (rf & 2) {
    const record_r47 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r48 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r48.getCellClass(record_r47, column_r16))("innerHTML", ctx_r48.getValue(record_r47, column_r16), i0.ɵɵsanitizeHtml);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "secureImage");
} if (rf & 2) {
    const record_r47 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r53 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(1, 1, i0.ɵɵpipeBind1(2, 3, ctx_r53.getValue(record_r47, column_r16))), i0.ɵɵsanitizeUrl);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.geo.targetHtmlUrl"), " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵelementStart(1, "a", 23);
    i0.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_Template_a_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_img_2_Template, 3, 5, "img", 24);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_ng_template_3_Template, 3, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r54 = i0.ɵɵreference(4);
    const record_r47 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r50 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r50.getCellClass(record_r47, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", ctx_r50.getValue(record_r47, column_r16), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r50.isImg(ctx_r50.getValue(record_r47, column_r16)))("ngIfElse", _r54);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_td_1_Template, 1, 2, "td", 27);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_Template, 5, 4, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const record_r47 = ctx.$implicit;
    const _r49 = i0.ɵɵreference(3);
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r46 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r46.isUrl(ctx_r46.getValue(record_r47, column_r16)))("ngIfElse", _r49);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_Template, 4, 2, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelement(1, "mat-datepicker-toggle", 44);
    i0.ɵɵelementStart(2, "input", 45);
    i0.ɵɵlistener("dateChange", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_div_1_Template_input_dateChange_2_listener($event) { i0.ɵɵrestoreView(_r79); const record_r63 = i0.ɵɵnextContext(2).$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r77 = i0.ɵɵnextContext(); return ctx_r77.onDateChange(column_r16.name, record_r63, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-datepicker", null, 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r76 = i0.ɵɵreference(4);
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r67 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r76);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("value", ctx_r67.getValue(record_r63, column_r16));
    i0.ɵɵproperty("matDatepicker", _r76)("formControlName", column_r16.name);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 47);
    i0.ɵɵlistener("focus", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r85); const column_r16 = i0.ɵɵnextContext(5).$implicit; return column_r16.onFocus($event); })("keypress", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template_input_keypress_0_listener($event) { i0.ɵɵrestoreView(_r85); const column_r16 = i0.ɵɵnextContext(5).$implicit; return column_r16.onChange($event); })("blur", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r85); const column_r16 = i0.ɵɵnextContext(5).$implicit; return column_r16.onBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r16 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵproperty("formControlName", column_r16.name);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 48);
    i0.ɵɵlistener("input", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_3_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r93); const record_r63 = i0.ɵɵnextContext(2).$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r91 = i0.ɵɵnextContext(); return ctx_r91.onValueChange(column_r16.name, record_r63, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r69 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("step", column_r16.step);
    i0.ɵɵpropertyInterpolate("value", ctx_r69.getValue(record_r63, column_r16));
    i0.ɵɵpropertyInterpolate("readonly", ctx_r69.getValidationAttributeValue(column_r16, "readonly"));
    i0.ɵɵpropertyInterpolate("required", ctx_r69.getValidationAttributeValue(column_r16, "mandatory"));
    i0.ɵɵpropertyInterpolate("min", ctx_r69.getValidationAttributeValue(column_r16, "minValue"));
    i0.ɵɵpropertyInterpolate("max", ctx_r69.getValidationAttributeValue(column_r16, "maxValue"));
    i0.ɵɵproperty("formControlName", column_r16.name);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 49);
    i0.ɵɵlistener("input", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_4_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r99); const record_r63 = i0.ɵɵnextContext(2).$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r97 = i0.ɵɵnextContext(); return ctx_r97.onValueChange(column_r16.name, record_r63, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r70 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("value", ctx_r70.getValue(record_r63, column_r16));
    i0.ɵɵpropertyInterpolate("readonly", ctx_r70.getValidationAttributeValue(column_r16, "readonly"));
    i0.ɵɵpropertyInterpolate("required", ctx_r70.getValidationAttributeValue(column_r16, "mandatory"));
    i0.ɵɵproperty("formControlName", column_r16.name);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 50);
    i0.ɵɵlistener("change", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_checkbox_5_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r105); const record_r63 = i0.ɵɵnextContext(2).$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r103 = i0.ɵɵnextContext(); return ctx_r103.onBooleanValueChange(column_r16.name, record_r63, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r71 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formControlName", column_r16.name)("checked", ctx_r71.getValue(record_r63, column_r16));
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 53);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r110 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r110.id)("disabled", option_r110.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r110.value, " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r113 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 51);
    i0.ɵɵlistener("selectionChange", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_Template_mat_select_selectionChange_0_listener($event) { i0.ɵɵrestoreView(_r113); const record_r63 = i0.ɵɵnextContext(2).$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r111 = i0.ɵɵnextContext(); return ctx_r111.onSelectValueChange(column_r16.name, record_r63, $event); });
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_mat_option_1_Template, 2, 3, "mat-option", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r72 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("required", ctx_r72.getValidationAttributeValue(column_r16, "mandatory"));
    i0.ɵɵproperty("formControlName", column_r16.name)("multiple", column_r16.multiple)("value", ctx_r72.getValue(record_r63, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", column_r16.domainValues);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 54);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r74 = i0.ɵɵreference(9);
    const record_r63 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r73 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("required", ctx_r73.getValidationAttributeValue(column_r16, "mandatory"));
    i0.ɵɵpropertyInterpolate("value", ctx_r73.getValue(record_r63, column_r16));
    i0.ɵɵproperty("formControlName", column_r16.name)("matAutocomplete", _r74);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 55);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r119 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r119.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r119.value, " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r122 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 32);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_div_1_Template, 5, 4, "div", 33);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template, 1, 1, "input", 34);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_3_Template, 1, 7, "input", 35);
    i0.ɵɵtemplate(4, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_4_Template, 1, 4, "input", 36);
    i0.ɵɵtemplate(5, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_checkbox_5_Template, 1, 2, "mat-checkbox", 37);
    i0.ɵɵtemplate(6, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_Template, 2, 5, "mat-select", 38);
    i0.ɵɵtemplate(7, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_7_Template, 1, 4, "input", 39);
    i0.ɵɵelementStart(8, "mat-autocomplete", 40, 41);
    i0.ɵɵlistener("optionSelected", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_Template_mat_autocomplete_optionSelected_8_listener($event) { i0.ɵɵrestoreView(_r122); const record_r63 = i0.ɵɵnextContext().$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r120 = i0.ɵɵnextContext(); return ctx_r120.onAutocompleteValueChange(column_r16.name, record_r63, $event); });
    i0.ɵɵtemplate(10, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_option_10_Template, 2, 2, "mat-option", 42);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r64 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r64.formGroup)("ngClass", ctx_r64.getCellClass(record_r63, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "time");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r16.type || column_r16.type === "string");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "boolean");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "list");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "autocomplete");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 10, ctx_r64.filteredOptions));
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_td_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 29);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r126 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r126.getCellClass(record_r63, column_r16))("innerHTML", i0.ɵɵpipeBind1(1, 2, ctx_r126.getValue(record_r63, column_r16)), i0.ɵɵsanitizeHtml);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "secureImage");
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(3).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r131 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(1, 1, i0.ɵɵpipeBind1(2, 3, ctx_r131.getValue(record_r63, column_r16))), i0.ɵɵsanitizeUrl);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.geo.targetHtmlUrl"), " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵelementStart(1, "a", 23);
    i0.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_Template_a_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_img_2_Template, 3, 5, "img", 24);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_ng_template_3_Template, 3, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r132 = i0.ɵɵreference(4);
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r128 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r128.getCellClass(record_r63, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", ctx_r128.getValue(record_r63, column_r16), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r128.isImg(ctx_r128.getValue(record_r63, column_r16)))("ngIfElse", _r132);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_td_0_Template, 2, 4, "td", 27);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_Template, 5, 4, "ng-template", null, 56, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r127 = i0.ɵɵreference(2);
    const record_r63 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r66 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r66.isUrl(ctx_r66.getValue(record_r63, column_r16)))("ngIfElse", _r127);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_Template, 12, 12, "td", 30);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_Template, 3, 2, "ng-template", null, 31, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const record_r63 = ctx.$implicit;
    const _r65 = i0.ɵɵreference(3);
    const ctx_r62 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r62.isEdition(record_r63))("ngIfElse", _r65);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_Template, 4, 2, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵelementStart(1, "mat-icon", 58);
    i0.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_td_1_Template_mat_icon_click_1_listener($event) { i0.ɵɵrestoreView(_r145); const column_r16 = i0.ɵɵnextContext(3).$implicit; return column_r16.onClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r142 = ctx.$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r141 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r141.getCellClass(record_r142, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r141.getValue(record_r142, column_r16) || column_r16.icon);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_td_1_Template, 2, 2, "td", 57);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r156 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 62);
    i0.ɵɵlistener("mousedown", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_1_Template_button_mousedown_0_listener() { i0.ɵɵrestoreView(_r156); const button_r150 = i0.ɵɵnextContext(2).$implicit; const record_r148 = i0.ɵɵnextContext().$implicit; const ctx_r154 = i0.ɵɵnextContext(4); return ctx_r154.onButtonClick(button_r150.click, record_r148); });
    i0.ɵɵelement(1, "mat-icon", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r150 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("color", button_r150.color)("disabled", button_r150.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", button_r150.icon);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r161 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 64);
    i0.ɵɵlistener("mousedown", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_2_Template_button_mousedown_0_listener() { i0.ɵɵrestoreView(_r161); const button_r150 = i0.ɵɵnextContext(2).$implicit; const record_r148 = i0.ɵɵnextContext().$implicit; const ctx_r159 = i0.ɵɵnextContext(4); return ctx_r159.onButtonClick(button_r150.click, record_r148); });
    i0.ɵɵelement(1, "mat-icon", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r150 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("color", button_r150.color)("disabled", button_r150.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", button_r150.icon);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_1_Template, 2, 3, "button", 60);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_2_Template, 2, 3, "button", 61);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const button_r150 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r150.style === "mat-icon-button");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r150.style !== "mat-icon-button");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_Template, 3, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r150 = ctx.$implicit;
    const record_r148 = i0.ɵɵnextContext().$implicit;
    const ctx_r149 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r149.isEdition(record_r148) === button_r150.editMode);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 22);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_Template, 2, 1, "span", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const record_r148 = ctx.$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r147 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r147.getCellClass(record_r148, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r147.getValue(record_r148, column_r16));
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(4, EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(5, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_Template, 2, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const columnRenderer_r24 = ctx.ngIf;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.Default);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.HTML);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.UnsanitizedHTML);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.Icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.ButtonGroup);
} }
function EntityTableComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 14);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_1_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_2_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_Template, 6, 5, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r16 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matColumnDef", column_r16.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.columnIsSortable(column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.columnIsSortable(column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.getColumnRenderer(column_r16));
} }
function EntityTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 65);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r3.getHeaderClass());
} }
function EntityTableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r169 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 66);
    i0.ɵɵlistener("select", function EntityTableComponent_tr_7_Template_tr_select_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r169); const record_r167 = restoredCtx.$implicit; const ctx_r168 = i0.ɵɵnextContext(); return ctx_r168.onRowSelect(record_r167); })("click", function EntityTableComponent_tr_7_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r169); const record_r167 = restoredCtx.$implicit; const ctx_r170 = i0.ɵɵnextContext(); return ctx_r170.onRowClick(record_r167); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r167 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("scrollBehavior", ctx_r4.scrollBehavior)("ngClass", ctx_r4.getRowClass(record_r167))("selection", ctx_r4.selection)("selected", ctx_r4.rowIsSelected(record_r167));
} }
function EntityTableComponent_igo_entity_table_paginator_8_Template(rf, ctx) { if (rf & 1) {
    const _r172 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-entity-table-paginator", 67);
    i0.ɵɵlistener("paginatorChange", function EntityTableComponent_igo_entity_table_paginator_8_Template_igo_entity_table_paginator_paginatorChange_0_listener($event) { i0.ɵɵrestoreView(_r172); const ctx_r171 = i0.ɵɵnextContext(); return ctx_r171.paginatorChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("store", ctx_r5.store)("paginatorOptions", ctx_r5.paginatorOptions)("entitySortChange$", ctx_r5.entitySortChange$);
} }
const moment = moment_;
export class EntityTableComponent {
    constructor(cdRef, formBuilder, _focusMonitor, _elementRef, ngControl, _parentForm, _controlName, _defaultErrorStateMatcher, dateAdapter) {
        this.cdRef = cdRef;
        this.formBuilder = formBuilder;
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this.ngControl = ngControl;
        this._parentForm = _parentForm;
        this._controlName = _controlName;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this.dateAdapter = dateAdapter;
        this.entitySortChange$ = new BehaviorSubject(false);
        this.formGroup = new FormGroup({});
        /**
         * Reference to the column renderer types
         * @internal
         */
        this.entityTableColumnRenderer = EntityTableColumnRenderer;
        /**
         * Reference to the selection's state
         * @internal
         */
        this.entityTableSelectionState = EntityTableSelectionState;
        /**
         * Observable of the selection,s state
         * @internal
         */
        this.selectionState$ = new BehaviorSubject(undefined);
        /**
         * Scroll behavior on selection
         */
        this.scrollBehavior = EntityTableScrollBehavior.Auto;
        /**
         * Whether nulls should be first when sorting
         */
        this.sortNullsFirst = false;
        /**
         * Show the table paginator or not. False by default.
         */
        this.withPaginator = false;
        /**
         * Event emitted when an entity (row) is clicked
         */
        this.entityClick = new EventEmitter();
        /**
         * Event emitted when an entity (row) is selected
         */
        this.entitySelectChange = new EventEmitter();
        /**
         * Event emitted when the table sort is changed.
         */
        this.entitySortChange = new EventEmitter(undefined);
        /**
         * Data source consumable by the underlying material table
         * @internal
         */
        this.dataSource = new MatTableDataSource();
        this.dateAdapter.setLocale('fr-CA');
    }
    /**
     * Table paginator
     */
    set paginator(value) {
        this._paginator = value;
        this.dataSource.paginator = value;
    }
    get paginator() {
        return this._paginator;
    }
    /**
     * Table headers
     * @internal
     */
    get headers() {
        let columns = this.template.columns
            .filter((column) => column.visible !== false)
            .map((column) => column.name);
        if (this.selectionCheckbox === true) {
            columns = ['selectionCheckbox'].concat(columns);
        }
        return columns;
    }
    /**
     * Whether selection is supported
     * @internal
     */
    get selection() { return this.template.selection || false; }
    /**
     * Whether a selection checkbox should be displayed
     * @internal
     */
    get selectionCheckbox() { return this.template.selectionCheckbox || false; }
    /**
     * Whether selection many entities should eb supported
     * @internal
     */
    get selectMany() { return this.template.selectMany || false; }
    /**
     * Whether selection many entities should eb supported
     * @internal
     */
    get fixedHeader() { return this.template.fixedHeader === undefined ? true : this.template.fixedHeader; }
    /**
     * Track the selection state to properly display the selection checkboxes
     * @internal
     */
    ngOnInit() {
        this.handleDatasource();
        this.dataSource.paginator = this.paginator;
    }
    /**
     * @internal
     */
    ngOnChanges(changes) {
        const store = changes.store;
        if (store && store.currentValue !== store.previousValue) {
            this.handleDatasource();
        }
    }
    /**
     * Process text or number value change (edition)
     */
    onValueChange(column, record, event) {
        const key = this.getColumnKeyWithoutPropertiesTag(column);
        record.entity.properties[key] = event.target.value;
    }
    /**
     * Process boolean value change (edition)
     */
    onBooleanValueChange(column, record, event) {
        const key = this.getColumnKeyWithoutPropertiesTag(column);
        record.entity.properties[key] = event.checked;
    }
    /**
     * Process select value change (edition)
     */
    onSelectValueChange(column, record, event) {
        const key = this.getColumnKeyWithoutPropertiesTag(column);
        record.entity.properties[key] = event.value;
    }
    /**
     * Process autocomplete value change (edition)
     */
    onAutocompleteValueChange(column, record, event) {
        this.formGroup.controls[column].setValue(event.option.viewValue);
        const key = this.getColumnKeyWithoutPropertiesTag(column);
        record.entity.properties[key] = event.option.value;
    }
    /**
     * Process date value change (edition)
     */
    onDateChange(column, record, event) {
        const format = "YYYY-MM-DD";
        const value = moment(event.value).format(format);
        const key = this.getColumnKeyWithoutPropertiesTag(column);
        record.entity.properties[key] = value;
    }
    /**
     * Enable edition mode for one row
     * More than one row can be edited at the same time
     */
    enableEdit(record) {
        const item = record.entity.properties || record.entity;
        this.template.columns.forEach(column => {
            var _a;
            column.title = ((_a = column.validation) === null || _a === void 0 ? void 0 : _a.mandatory) && !column.title.includes('*') ? column.title + ' *' : column.title;
            const key = this.getColumnKeyWithoutPropertiesTag(column.name);
            if (column.type === 'boolean') {
                if (!item[key] || item[key] === null) {
                    item[key] = false;
                }
                else if (typeof item[key] === 'string') {
                    item[key] = JSON.parse(item[key].toLowerCase());
                }
                this.formGroup.setControl(column.name, this.formBuilder.control(item[key]));
            }
            else if (column.type === 'list') {
                if (column.multiple) {
                    this.formGroup.setControl(column.name, this.formBuilder.control([item[key]]));
                }
                else {
                    this.formGroup.setControl(column.name, this.formBuilder.control(item[key]));
                    typeof item[key] === 'string' ?
                        this.formGroup.controls[column.name].setValue(parseInt(item[key])) :
                        this.formGroup.controls[column.name].setValue(item[key]);
                }
            }
            else if (column.type === 'autocomplete') {
                this.formGroup.setControl(column.name, this.formBuilder.control(item[key]));
                this.filteredOptions = this.formGroup.controls[column.name].valueChanges.pipe(map(value => {
                    if (value.length) {
                        return column.domainValues.filter((option) => {
                            const filterNormalized = value ? value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
                            const featureNameNormalized = option.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                            return featureNameNormalized.includes(filterNormalized);
                        });
                    }
                }));
                let formControlValue = item[key];
                column.domainValues.forEach(option => {
                    if (typeof formControlValue === 'string' && /^\d+$/.test(formControlValue)) {
                        formControlValue = parseInt(formControlValue);
                    }
                    if (option.value === formControlValue || option.id === formControlValue) {
                        formControlValue = option.value;
                    }
                });
                this.formGroup.controls[column.name].setValue(formControlValue);
            }
            else if (column.type === 'date') {
                if (column.visible) {
                    if (item[key]) {
                        let date = moment(item[key]);
                        item[key] = date.utc().format('YYYY-MM-DD');
                        this.formGroup.setControl(column.name, this.formBuilder.control(item[key]));
                    }
                    else {
                        const newKey = this.getColumnKeyWithoutPropertiesTag(column.name);
                        record.entity.properties[newKey] = null;
                        this.formGroup.setControl(column.name, this.formBuilder.control(null));
                    }
                }
            }
            else {
                this.formGroup.setControl(column.name, this.formBuilder.control(item[key]));
            }
            if (this.formGroup.controls[column.name] && this.getValidationAttributeValue(column, 'readonly')) {
                this.formGroup.controls[column.name].disable();
            }
        });
    }
    handleDatasource() {
        this.unsubscribeStore();
        this.selection$$ = this.store.stateView
            .manyBy$((record) => record.state.selected === true)
            .subscribe((records) => {
            const firstSelected = records[0];
            const firstSelectedStateviewPosition = this.store.stateView.all().indexOf(firstSelected);
            const pageMax = this.paginator ? this.paginator.pageSize * (this.paginator.pageIndex + 1) : 0;
            const pageMin = this.paginator ? pageMax - this.paginator.pageSize : 0;
            if (this.paginator &&
                (firstSelectedStateviewPosition < pageMin ||
                    firstSelectedStateviewPosition >= pageMax)) {
                const pageToReach = Math.floor(firstSelectedStateviewPosition / this.paginator.pageSize);
                this.dataSource.paginator.pageIndex = pageToReach;
            }
            this.selectionState$.next(this.computeSelectionState(records));
        });
        this.dataSource$$ = this.store.stateView.all$().subscribe((all) => {
            if (all[0]) {
                this.enableEdit(all[0]);
            }
            this.dataSource.data = all;
        });
    }
    /**
     * Unbind the store watcher
     * @internal
     */
    ngOnDestroy() {
        this.unsubscribeStore();
    }
    unsubscribeStore() {
        if (this.selection$$) {
            this.selection$$.unsubscribe();
        }
        if (this.dataSource$$) {
            this.dataSource$$.unsubscribe();
        }
    }
    /**
     * Trackby function
     * @param record Record
     * @param index Record index
     * @internal
     */
    getTrackByFunction() {
        return (index, record) => {
            return record.ref;
        };
    }
    /**
     * Trigger a refresh of thre table. This can be useful when
     * the data source doesn't emit a new value but for some reason
     * the records need an update.
     * @internal
     */
    refresh() {
        this.cdRef.detectChanges();
    }
    paginatorChange(event) {
        this.paginator = event;
    }
    /**
     * On sort, sort the store
     * @param event Sort event
     * @internal
     */
    onSort(event) {
        const direction = event.direction;
        const column = this.template.columns
            .find((c) => c.name === event.active);
        if (direction === 'asc' || direction === 'desc') {
            this.store.stateView.sort({
                valueAccessor: (record) => this.getValue(record, column),
                direction,
                nullsFirst: this.sortNullsFirst
            });
            this.entitySortChange.emit({ column, direction });
            this.entitySortChange$.next(true);
        }
        else {
            this.store.stateView.sort(undefined);
        }
    }
    /**
     * When an entity is clicked, emit an event
     * @param record Record
     * @internal
     */
    onRowClick(record) {
        this.lastRecordCheckedKey = this.store.stateView.getKey(record);
        this.entityClick.emit(record.entity);
    }
    /**
     * When an entity is selected, select it in the store and emit an event. Even if
     * "many" is set to true, this method always select a single, exclusive row. Selecting
     * multiple rows should be achieved by using the checkboxes.
     * @param record Record
     * @internal
     */
    onRowSelect(record) {
        if (this.selection === false) {
            return;
        }
        const entity = record.entity;
        this.store.state.update(entity, { selected: true }, true);
        this.entitySelectChange.emit({ added: [entity] });
    }
    /**
     * Select or unselect all rows at once. On select, emit an event.
     * @param toggle Select or unselect
     * @internal
     */
    onToggleRows(toggle) {
        if (this.selection === false) {
            return;
        }
        this.store.state.updateAll({ selected: toggle });
        if (toggle === true) {
            const entities = this.store.stateView
                .all()
                .map((record) => record.entity);
            this.entitySelectChange.emit({ added: [entities] });
        }
    }
    /**
     * When an entity is toggled, select or unselect it in the store. On select,
     * emit an event.
     * @param toggle Select or unselect
     * @param record Record
     * @internal
     */
    onToggleRow(toggle, record) {
        if (this.selection === false) {
            return;
        }
        const entity = record.entity;
        const exclusive = toggle === true && !this.selectMany;
        this.store.state.update(entity, { selected: toggle }, exclusive);
        if (toggle === true) {
            this.entitySelectChange.emit({ added: [entity] });
        }
        this.lastRecordCheckedKey = this.store.stateView.getKey(record);
    }
    /**
     * When an entity is toggled, select or unselect it in the store. On select,
     * emit an event.
     * @param toggle Select or unselect
     * @param record Record
     * @internal
     */
    onShiftToggleRow(toggle, record, event) {
        if (this.selection === false) {
            return;
        }
        if (this.selectMany === false || this.lastRecordCheckedKey === undefined) {
            this.onToggleRow(toggle, record);
            return;
        }
        // This is a workaround mat checkbox wrong behavior
        // when the shift key is held.
        // See https://github.com/angular/components/issues/6232
        const range = window.document.createRange();
        range.selectNode(event.target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        event.stopImmediatePropagation();
        const records = this.store.stateView.all();
        const recordIndex = records.indexOf(record);
        const lastRecordChecked = this.store.stateView.get(this.lastRecordCheckedKey);
        const lastRecordIndex = records.indexOf(lastRecordChecked);
        const indexes = [recordIndex, lastRecordIndex];
        const selectRecords = records.slice(Math.min(...indexes), Math.max(...indexes) + 1);
        const entities = selectRecords.map((_record) => _record.entity);
        this.store.state.updateMany(entities, { selected: toggle });
        if (toggle === true) {
            this.entitySelectChange.emit({ added: entities });
        }
        this.lastRecordCheckedKey = this.store.stateView.getKey(record);
    }
    /**
     * Compute the selection state
     * @returns Whether all, some or no rows are selected
     * @internal
     */
    computeSelectionState(selectedRecords) {
        const states = EntityTableSelectionState;
        const selectionCount = selectedRecords.length;
        return selectionCount === 0 ?
            states.None :
            (selectionCount === this.store.stateView.count ? states.All : states.Some);
    }
    /**
     * Whether a column is sortable
     * @param column Column
     * @returns True if a column is sortable
     * @internal
     */
    columnIsSortable(column) {
        let sortable = column.sort;
        if (sortable === undefined) {
            sortable = this.template.sort === undefined ? false : this.template.sort;
        }
        return sortable;
    }
    /**
     * Whether a row is should be selected based on the underlying entity state
     * @param record Record
     * @returns True if a row should be selected
     * @internal
     */
    rowIsSelected(record) {
        const state = record.state;
        return state.selected ? state.selected : false;
    }
    isImg(value) {
        if (this.isUrl(value)) {
            return (['jpg', 'png', 'gif'].indexOf(value.split('.').pop().toLowerCase()) !== -1);
        }
        else {
            return false;
        }
    }
    isUrl(value) {
        if (typeof value === 'string') {
            return (value.slice(0, 8) === 'https://' || value.slice(0, 7) === 'http://');
        }
        else {
            return false;
        }
    }
    /**
     * Method to access an entity's values
     * @param record Record
     * @param column Column
     * @returns Any value
     * @internal
     */
    getValue(record, column) {
        const entity = record.entity;
        let value;
        if (column.valueAccessor !== undefined) {
            return column.valueAccessor(entity, record);
        }
        if (this.template.valueAccessor !== undefined) {
            return this.template.valueAccessor(entity, column.name, record);
        }
        value = this.store.getProperty(entity, column.name);
        if (column.type === 'boolean') {
            if (value === undefined || value === null || value === '') {
                value = false;
            }
            else if (typeof value !== 'boolean' && value !== undefined) {
                if (typeof value === 'number') {
                    value = Boolean(value);
                }
                else {
                    value = JSON.parse(value.toLowerCase());
                }
            }
            if (!this.isEdition(record)) {
                value = value ? '&#10003;' : ''; // check mark
            }
        }
        else if (column.type === 'list' && value && column.domainValues) {
            if (column.multiple) {
                let list_id;
                typeof value === 'string' ? list_id = value.match(/[\w.-]+/g).map(Number) : list_id = value;
                let list_option = [];
                column.domainValues.forEach(option => {
                    if (list_id.includes(option.id)) {
                        if (record.edition) {
                            list_option.push(option.id);
                        }
                        else {
                            list_option.push(option.value);
                        }
                    }
                });
                this.isEdition(record) ? value = list_id : value = list_option;
            }
            else {
                column.domainValues.forEach(option => {
                    if (typeof value === 'string' && /^\d+$/.test(value)) {
                        value = parseInt(value);
                    }
                    if (option.value === value || option.id === value) {
                        this.isEdition(record) ? value = option.id : value = option.value;
                    }
                });
            }
        }
        else if (column.type === 'autocomplete' && value && column.domainValues) {
            column.domainValues.forEach(option => {
                if (typeof value === 'string' && /^\d+$/.test(value)) {
                    value = parseInt(value);
                }
                if (option.value === value || option.id === value) {
                    value = option.value;
                }
            });
        }
        else if (column.type === 'date') {
            if (this.isEdition(record)) {
                if (value) {
                    let date = moment(value);
                    value = date.format();
                    this.formGroup.controls[column.name].setValue(value);
                }
            }
            else if (!this.isEdition(record) && value === null) {
                value = "";
            }
        }
        if (value === undefined) {
            value = '';
        }
        return value;
    }
    /**
     * Method to access an entity's validation values
     * @param column Column
     * @param validationType string
     * @returns Any value (false if no validation or not the one concerned)
     * @internal
     */
    getValidationAttributeValue(column, validationType) {
        if (column.validation !== undefined && column.validation[validationType] !== undefined) {
            return column.validation[validationType];
        }
        else {
            return false;
        }
    }
    isEdition(record) {
        return record.entity.edition ? true : false;
    }
    /**
     * Return the type of renderer of a column
     * @param column Column
     * @returns Renderer type
     * @internal
     */
    getColumnRenderer(column) {
        if (column.renderer !== undefined) {
            return column.renderer;
        }
        return EntityTableColumnRenderer.Default;
    }
    /**
     * Return the table ngClass
     * @returns ngClass
     * @internal
     */
    getTableClass() {
        return {
            'igo-entity-table-with-selection': this.selection
        };
    }
    /**
     * Return a header ngClass
     * @returns ngClass
     * @internal
     */
    getHeaderClass() {
        const func = this.template.headerClassFunc;
        if (func instanceof Function) {
            return func();
        }
        return {};
    }
    /**
     * Return a row ngClass
     * @param record Record
     * @returns ngClass
     * @internal
     */
    getRowClass(record) {
        const entity = record.entity;
        const func = this.template.rowClassFunc;
        if (func instanceof Function) {
            return func(entity, record);
        }
        return {};
    }
    /**
     * Return a row ngClass
     * @param record Record
     * @param column Column
     * @returns ngClass
     * @internal
     */
    getCellClass(record, column) {
        const entity = record.entity;
        const cls = {};
        const tableFunc = this.template.cellClassFunc;
        if (tableFunc instanceof Function) {
            Object.assign(cls, tableFunc(entity, column, record));
        }
        const columnFunc = column.cellClassFunc;
        if (columnFunc instanceof Function) {
            Object.assign(cls, columnFunc(entity, record));
        }
        return cls;
    }
    /**
     * When a button is clicked
     * @param func Function
     * @param record Record
     * @internal
     */
    onButtonClick(clickFunc, record) {
        this.enableEdit(record);
        if (typeof clickFunc === 'function') {
            clickFunc(record.entity, record);
        }
    }
    /**
     * Retrieve column name without his "properties" tag (useful for edition workspace properties)
     */
    getColumnKeyWithoutPropertiesTag(column) {
        if (column.includes('properties.')) {
            return column.split('.')[1];
        }
        return column;
    }
}
EntityTableComponent.ɵfac = function EntityTableComponent_Factory(t) { return new (t || EntityTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NgControl, 10), i0.ɵɵdirectiveInject(i1.NgForm, 8), i0.ɵɵdirectiveInject(i1.FormControlName, 8), i0.ɵɵdirectiveInject(i3.ErrorStateMatcher), i0.ɵɵdirectiveInject(i3.DateAdapter)); };
EntityTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntityTableComponent, selectors: [["igo-entity-table"]], inputs: { store: "store", paginator: "paginator", template: "template", scrollBehavior: "scrollBehavior", sortNullsFirst: "sortNullsFirst", withPaginator: "withPaginator", paginatorOptions: "paginatorOptions" }, outputs: { entityClick: "entityClick", entitySelectChange: "entitySelectChange", entitySortChange: "entitySortChange" }, features: [i0.ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: EntityTableComponent }]), i0.ɵɵNgOnChangesFeature], decls: 9, vars: 8, consts: [[1, "table-container"], ["mat-table", "", "matSort", "", 3, "ngClass", "dataSource", "trackBy", "matSortChange"], ["matColumnDef", "selectionCheckbox", 1, "mat-cell-checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "igoEntityTableRow", "", 3, "scrollBehavior", "ngClass", "selection", "selected", "select", "click", 4, "matRowDef", "matRowDefColumns"], [3, "store", "paginatorOptions", "entitySortChange$", "paginatorChange", 4, "ngIf"], ["mat-header-cell", ""], [4, "ngIf"], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "mousedown", "click", "change"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "matTooltip", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "matTooltip"], ["mat-header-cell", "", 3, "matTooltip", 4, "matHeaderCellDef"], ["mat-header-cell", "", 3, "matTooltip"], [4, "matCellDef"], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["isAnUrlDefault", ""], ["mat-cell", "", 1, "mat-cell-text", 3, "ngClass"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "click"], ["width", "50", "heigth", "auto", 3, "src", 4, "ngIf", "ngIfElse"], ["notImg", ""], ["width", "50", "heigth", "auto", 3, "src"], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", "innerHTML", 4, "ngIf", "ngIfElse"], ["isAnUrlHTML", ""], ["mat-cell", "", 1, "mat-cell-text", 3, "ngClass", "innerHTML"], ["mat-cell", "", "class", "mat-cell-text edition", 3, "formGroup", "ngClass", 4, "ngIf", "ngIfElse"], ["isUnsanitizedHTML", ""], ["mat-cell", "", 1, "mat-cell-text", "edition", 3, "formGroup", "ngClass"], ["class", "date-picker", 4, "ngIf"], ["matInput", "", "type", "time", "step", "900", 3, "formControlName", "focus", "keypress", "blur", 4, "ngIf"], ["matInput", "", "type", "number", "class", "class_number_edition", 3, "formControlName", "step", "value", "readonly", "required", "min", "max", "input", 4, "ngIf"], ["matInput", "", "type", "text", 3, "formControlName", "value", "readonly", "required", "input", 4, "ngIf"], [3, "formControlName", "checked", "change", 4, "ngIf"], [3, "required", "formControlName", "multiple", "value", "selectionChange", 4, "ngIf"], ["matInput", "", "type", "text", 3, "formControlName", "matAutocomplete", "required", "value", 4, "ngIf"], ["panelWidth", "430px", 3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "date-picker"], ["matSuffix", "", 3, "for"], ["matInput", "", 3, "matDatepicker", "formControlName", "value", "dateChange"], ["picker", ""], ["matInput", "", "type", "time", "step", "900", 3, "formControlName", "focus", "keypress", "blur"], ["matInput", "", "type", "number", 1, "class_number_edition", 3, "formControlName", "step", "value", "readonly", "required", "min", "max", "input"], ["matInput", "", "type", "text", 3, "formControlName", "value", "readonly", "required", "input"], [3, "formControlName", "checked", "change"], [3, "required", "formControlName", "multiple", "value", "selectionChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], ["matInput", "", "type", "text", 3, "formControlName", "matAutocomplete", "required", "value"], [3, "value"], ["isAnUrlUnsanitizedHTML", ""], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", 4, "matCellDef"], [3, "svgIcon", "click"], [4, "ngFor", "ngForOf"], ["igoStopPropagation", "", "mat-icon-button", "", 3, "color", "disabled", "mousedown", 4, "ngIf"], ["igoStopPropagation", "", "mat-mini-fab", "", 3, "color", "disabled", "mousedown", 4, "ngIf"], ["igoStopPropagation", "", "mat-icon-button", "", 3, "color", "disabled", "mousedown"], [3, "svgIcon"], ["igoStopPropagation", "", "mat-mini-fab", "", 3, "color", "disabled", "mousedown"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", "", "igoEntityTableRow", "", 3, "scrollBehavior", "ngClass", "selection", "selected", "select", "click"], [3, "store", "paginatorOptions", "entitySortChange$", "paginatorChange"]], template: function EntityTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵlistener("matSortChange", function EntityTableComponent_Template_table_matSortChange_1_listener($event) { return ctx.onSort($event); });
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, EntityTableComponent_th_3_Template, 2, 1, "th", 3);
        i0.ɵɵtemplate(4, EntityTableComponent_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(5, EntityTableComponent_ng_container_5_Template, 4, 4, "ng-container", 5);
        i0.ɵɵtemplate(6, EntityTableComponent_tr_6_Template, 1, 1, "tr", 6);
        i0.ɵɵtemplate(7, EntityTableComponent_tr_7_Template, 1, 4, "tr", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, EntityTableComponent_igo_entity_table_paginator_8_Template, 1, 3, "igo-entity-table-paginator", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.getTableClass())("dataSource", ctx.dataSource)("trackBy", ctx.getTrackByFunction());
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.template.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", ctx.headers)("matHeaderRowDefSticky", ctx.fixedHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.headers);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.withPaginator);
    } }, directives: [i4.MatTable, i5.MatSort, i6.NgClass, i4.MatColumnDef, i4.MatHeaderCellDef, i4.MatCellDef, i6.NgForOf, i4.MatHeaderRowDef, i4.MatRowDef, i6.NgIf, i4.MatHeaderCell, i7.MatCheckbox, i4.MatCell, i5.MatSortHeader, i8.MatTooltip, i1.NgControlStatusGroup, i1.FormGroupDirective, i9.MatAutocomplete, i10.MatDatepickerToggle, i11.MatSuffix, i12.MatInput, i10.MatDatepickerInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i10.MatDatepicker, i1.NumberValueAccessor, i1.MinValidator, i1.MaxValidator, i1.RequiredValidator, i13.MatSelect, i3.MatOption, i9.MatAutocompleteTrigger, i14.MatIcon, i15.MatButton, i16.StopPropagationDirective, i4.MatHeaderRow, i4.MatRow, i17.EntityTableRowDirective, i18.EntityTablePaginatorComponent], pipes: [i6.AsyncPipe, i19.SecureImagePipe, i20.TranslatePipe, i21.SanitizeHtmlPipe], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:block}.table-compact[_nghost-%COMP%]   tr.mat-header-row[_ngcontent-%COMP%], .table-compact[_nghost-%COMP%]     .mat-checkbox .mat-checkbox-ripple{height:36px}.table-compact[_nghost-%COMP%]   tr.mat-row[_ngcontent-%COMP%], .table-compact[_nghost-%COMP%]     .mat-checkbox .mat-checkbox-ripple{height:28px}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:auto;flex:1 1 auto}.mat-cell-text[_ngcontent-%COMP%]{overflow:hidden;word-wrap:break-word}th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{padding:0 3px}entity-table[_ngcontent-%COMP%]   table.igo-entity-table-with-selection[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{-o-box-shadow:2px 0px 2px 0px #dddddd;box-shadow:2px 0 2px #ddd;cursor:pointer}table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:7px}.class_boolean[_ngcontent-%COMP%], .class_icon[_ngcontent-%COMP%], .class_number[_ngcontent-%COMP%]{text-align:center;padding-right:35px!important}.class_sting[_ngcontent-%COMP%], .class_text[_ngcontent-%COMP%], .class_number_edition[_ngcontent-%COMP%]{text-align:left}td.edition[_ngcontent-%COMP%]{background:rgba(166,166,166,.2)}input[_ngcontent-%COMP%]{border-bottom:1px solid darkgrey}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntityTableComponent, [{
        type: Component,
        args: [{
                selector: 'igo-entity-table',
                templateUrl: './entity-table.component.html',
                styleUrls: ['./entity-table.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: MatFormFieldControl, useExisting: EntityTableComponent }]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.FormBuilder }, { type: i2.FocusMonitor }, { type: i0.ElementRef }, { type: i1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: i1.NgForm, decorators: [{
                type: Optional
            }] }, { type: i1.FormControlName, decorators: [{
                type: Optional
            }] }, { type: i3.ErrorStateMatcher }, { type: i3.DateAdapter }]; }, { store: [{
            type: Input
        }], paginator: [{
            type: Input
        }], template: [{
            type: Input
        }], scrollBehavior: [{
            type: Input
        }], sortNullsFirst: [{
            type: Input
        }], withPaginator: [{
            type: Input
        }], paginatorOptions: [{
            type: Input
        }], entityClick: [{
            type: Output
        }], entitySelectChange: [{
            type: Output
        }], entitySortChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9lbnRpdHktdGFibGUvZW50aXR5LXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9lbnRpdHktdGFibGUvZW50aXR5LXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBT3ZCLFFBQVEsRUFDUixJQUFJLEVBQ0wsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFFakUsT0FBTyxFQU9MLHlCQUF5QixFQUN6Qix5QkFBeUIsRUFDekIseUJBQXlCLEVBQzFCLE1BQU0sV0FBVyxDQUFDO0FBRW5CLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBbUQsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaENkLDZCQUFnRTtJQUM1RCx3Q0FDb0U7SUFEdEQscVBBQXVDO0lBRXJELGlCQUFlO0lBQ25CLDBCQUFlOzs7O0lBSDJDLGVBQTREO0lBQTVELG9GQUE0RCw4RUFBQTs7O0lBRjFILDZCQUFpQztJQUM3Qiw0R0FJZTs7SUFDbkIsMEJBQWU7OztJQUxJLGVBQThCO0lBQTlCLG1FQUE4Qjs7O0lBRnJELDZCQUFzQztJQUNsQyw2RkFNZTtJQUNuQixpQkFBSzs7O0lBUGMsZUFBZ0I7SUFBaEIsd0NBQWdCOzs7O0lBUW5DLDhCQUFzQztJQUNsQyx3Q0FFa0M7SUFGcEIsNElBQStCLHVCQUF1QixHQUFHLElBQUksSUFBQyxvVUFDakIsd0JBQXdCLElBRFAsb1JBQUE7SUFHNUUsaUJBQWU7SUFDbkIsaUJBQUs7Ozs7SUFGRCxlQUFpQztJQUFqQywwREFBaUM7OztJQU9qQyw4QkFBaUg7SUFDN0csWUFDSjtJQUFBLGlCQUFLOzs7SUFGaUQsZ0ZBQTBEO0lBQzVHLGVBQ0o7SUFESSxpREFDSjs7O0lBSEosNkJBQStDO0lBQzNDLGtHQUVLO0lBQ1QsMEJBQWU7OztJQUdYLDhCQUFpRztJQUM3RixZQUNKO0lBQUEsaUJBQUs7OztJQUZpQyxnRkFBMEQ7SUFDNUYsZUFDSjtJQURJLGlEQUNKOzs7SUFISiw2QkFBZ0Q7SUFDNUMsa0dBRUs7SUFDVCwwQkFBZTs7O0lBS0gsOEJBQXlJO0lBQ3JJLFlBQ0o7SUFBQSxpQkFBSzs7Ozs7SUFGMkYsc0VBQXdDO0lBQ3BJLGVBQ0o7SUFESSx5RUFDSjs7O0lBSVksMEJBQTZJOzs7Ozs7O0lBQXBGLHVJQUEwRDs7O0lBQzlGLDRCQUFNO0lBQUEsWUFFM0M7O0lBQUEsaUJBQU87O0lBRm9DLGVBRTNDO0lBRjJDLDZGQUUzQzs7O0lBTFEsOEJBQTRFO0lBQ3hFLDZCQUFvSDtJQUFuQyw0S0FBUyx3QkFBd0IsSUFBQztJQUMvRyxnSkFBNkk7SUFDN0ksaU1BRUs7SUFDVCxpQkFBSTtJQUNSLGlCQUFLOzs7Ozs7SUFQOEIsc0VBQXdDO0lBQ3BFLGVBQW1DO0lBQW5DLDRGQUFtQztJQUM1QixlQUFzQztJQUF0Qyw4RUFBc0Msa0JBQUE7OztJQVA1RCw2QkFBdUM7SUFDbkMsZ0lBRUs7SUFDTCxtTEFTYztJQUNsQiwwQkFBZTs7Ozs7O0lBYnlCLGVBQXVDO0lBQXZDLCtFQUF1QyxrQkFBQTs7O0lBRm5GLDZCQUEyRTtJQUN2RSxxSUFjZTtJQUNuQiwwQkFBZTs7O0lBR1AseUJBRUs7Ozs7O0lBRndGLHNFQUF3QywwRUFBQTs7O0lBTXpILDBCQUE2STs7Ozs7OztJQUFwRix1SUFBMEQ7OztJQUM5Riw0QkFBTTtJQUFBLFlBQzVCOztJQUFBLGlCQUFPOztJQURxQixlQUM1QjtJQUQ0Qiw2RUFDNUI7OztJQUpQLDhCQUE0RTtJQUN4RSw2QkFBb0g7SUFBbkMsNEtBQVMsd0JBQXdCLElBQUM7SUFDL0csZ0pBQTZJO0lBQzdJLGlNQUNvQjtJQUN4QixpQkFBSTtJQUNSLGlCQUFLOzs7Ozs7SUFOOEIsc0VBQXdDO0lBQ3BFLGVBQW1DO0lBQW5DLDRGQUFtQztJQUM1QixlQUFzQztJQUF0Qyw4RUFBc0Msa0JBQUE7OztJQVA1RCw2QkFBdUM7SUFDbkMsZ0lBRUs7SUFDTCxtTEFRYztJQUNsQiwwQkFBZTs7Ozs7O0lBWnlCLGVBQXVDO0lBQXZDLCtFQUF1QyxrQkFBQTs7O0lBRm5GLDZCQUF3RTtJQUNwRSxxSUFhZTtJQUNuQiwwQkFBZTs7OztJQUtILCtCQUF3RDtJQUNwRCw0Q0FBd0U7SUFDeEUsaUNBQ3lEO0lBQXpELG9aQUF3RDtJQUR4RCxpQkFDeUQ7SUFDekQsMkNBQXlDO0lBQzdDLGlCQUFNOzs7Ozs7SUFKK0IsZUFBYztJQUFkLDBCQUFjO0lBQzBCLGVBQW9DO0lBQXBDLDJFQUFvQztJQUE3RixvQ0FBd0Isb0NBQUE7Ozs7SUFJNUMsaUNBQ29FO0lBRGtDLHlQQUFTLDBCQUFzQixJQUFDLGtQQUMxSCwyQkFBdUIsSUFEbUcsME9BQ3pGLHlCQUFxQixJQURvRTtJQUF0SSxpQkFDb0U7OztJQURULGlEQUErQjs7OztJQUUxRixpQ0FHb0g7SUFGaEYsNllBQW9EO0lBRHhGLGlCQUdvSDs7Ozs7SUFIUSxpREFBc0I7SUFDbEosMkVBQW1DO0lBQ25DLGlHQUE4RDtJQUFDLGtHQUErRDtJQUM5SCw0RkFBeUQ7SUFBQyw0RkFBeUQ7SUFIdkIsaURBQStCOzs7O0lBSTNILGlDQUUrSDtJQUQxRiw2WUFBb0Q7SUFEekYsaUJBRStIOzs7OztJQUQvSCwyRUFBb0M7SUFDcEMsaUdBQThEO0lBQUMsa0dBQStEO0lBRmxELGlEQUErQjs7OztJQUczRyx3Q0FDNEQ7SUFBNUQsdWFBQTJEO0lBQUMsaUJBQWU7Ozs7O0lBRDNCLGlEQUErQixxREFBQTs7O0lBSzNFLHNDQUF3RztJQUNwRyxZQUNKO0lBQUEsaUJBQWE7OztJQUYwQyxzQ0FBbUIsa0NBQUE7SUFDdEUsZUFDSjtJQURJLGtEQUNKOzs7O0lBTEosc0NBRW1DO0lBRDBCLG9iQUFvRTtJQUU3SCxrS0FFYTtJQUNqQixpQkFBYTs7Ozs7SUFOOEIsa0dBQStEO0lBQzFHLGlEQUErQixpQ0FBQSxtREFBQTtJQUVJLGVBQXNCO0lBQXRCLGlEQUFzQjs7O0lBSXpELDRCQUM4SDs7Ozs7OztJQUFyRyxrR0FBK0Q7SUFBQywyRUFBb0M7SUFEakcsaURBQStCLHlCQUFBOzs7SUFJbkQsc0NBQStFO0lBQzNFLFlBQ0o7SUFBQSxpQkFBYTs7O0lBRjhDLHNDQUFtQjtJQUMxRSxlQUNKO0lBREksa0RBQ0o7Ozs7SUFoQ1osOEJBQ3lDO0lBQ3JDLHVJQUtNO0lBQ04sMklBQ29FO0lBQ3BFLDJJQUdvSDtJQUNwSCwySUFFK0g7SUFDL0gseUpBQzJFO0lBQzNFLHFKQU1hO0lBQ2IsMklBQzhIO0lBQzFILGdEQUNtQjtJQUR1QixnYkFBeUU7SUFFL0csdUpBRWE7O0lBQ2pCLGlCQUFtQjtJQUMzQixpQkFBSzs7Ozs7SUFsQ3NDLDZDQUF1Qix5REFBQTtJQUVwQyxlQUE0QjtJQUE1QixpREFBNEI7SUFNekIsZUFBNEI7SUFBNUIsaURBQTRCO0lBRUcsZUFBOEI7SUFBOUIsbURBQThCO0lBSTdELGVBQTZDO0lBQTdDLHVFQUE2QztJQUczRCxlQUErQjtJQUEvQixvREFBK0I7SUFFakMsZUFBNEI7SUFBNUIsaURBQTRCO0lBT29CLGVBQW9DO0lBQXBDLHlEQUFvQztJQUkxRCxlQUEwQjtJQUExQix5RUFBMEI7OztJQU1qRSx5QkFFSzs7Ozs7O0lBRm1HLHVFQUF3QyxpR0FBQTs7O0lBTXBJLDBCQUE2STs7Ozs7OztJQUFwRix3SUFBMEQ7OztJQUM5Riw0QkFBTTtJQUFBLFlBQTBDOztJQUFBLGlCQUFPOztJQUFqRCxlQUEwQztJQUExQyw2RUFBMEM7OztJQUg3RSw4QkFBNEU7SUFDeEUsNkJBQW9IO0lBQW5DLDBMQUFTLHdCQUF3QixJQUFDO0lBQy9HLDhKQUE2STtJQUM3SSwrTUFBMEY7SUFDOUYsaUJBQUk7SUFDUixpQkFBSzs7Ozs7O0lBTDhCLHVFQUF3QztJQUNwRSxlQUFtQztJQUFuQyw2RkFBbUM7SUFDNUIsZUFBc0M7SUFBdEMsZ0ZBQXNDLG1CQUFBOzs7SUFOeEQsOElBRUs7SUFDTCxpTUFPYzs7Ozs7O0lBVnNCLCtFQUF1QyxtQkFBQTs7O0lBckNuRiw2QkFBdUM7SUFDbkMsa0lBa0NLO0lBQ0wsbUxBWWM7SUFDbEIsMEJBQWU7Ozs7O0lBaER5RCxlQUF3QjtJQUF4QixvREFBd0Isa0JBQUE7OztJQUZwRyw2QkFBbUY7SUFDL0UscUlBaURlO0lBQ25CLDBCQUFlOzs7O0lBRVgsOEJBQXFHO0lBQ2pHLG9DQUFnRztJQUFqQyxzT0FBUywwQkFBc0IsSUFBQztJQUFDLGlCQUFXO0lBQy9HLGlCQUFLOzs7OztJQUZ1RCx3RUFBd0M7SUFDdEYsZUFBb0Q7SUFBcEQsa0dBQW9EOzs7SUFGdEUsNkJBQXdFO0lBQ3BFLGlIQUVLO0lBQ1QsMEJBQWU7Ozs7SUFNSyxrQ0FDMEc7SUFBL0Usa2FBQWlEO0lBQ3hFLCtCQUErQztJQUNuRCxpQkFBUzs7O0lBRkwseUNBQXNCLGtDQUFBO0lBQ1osZUFBeUI7SUFBekIscURBQXlCOzs7O0lBRXZDLGtDQUMwRztJQUEvRSxrYUFBaUQ7SUFDeEUsK0JBQStDO0lBQ25ELGlCQUFTOzs7SUFGTCx5Q0FBc0Isa0NBQUE7SUFDWixlQUF5QjtJQUF6QixxREFBeUI7OztJQVAzQyw2QkFBNEQ7SUFDeEQsOEpBR1M7SUFDVCw4SkFHUztJQUNiLDBCQUFlOzs7SUFSRixlQUF3QztJQUF4Qyw4REFBd0M7SUFJeEMsZUFBd0M7SUFBeEMsOERBQXdDOzs7SUFOekQsNEJBQXNEO0lBQ2xELDJKQVNlO0lBQ25CLGlCQUFPOzs7OztJQVZZLGVBQTJDO0lBQTNDLCtFQUEyQzs7O0lBSHRFLDZCQUF1QztJQUNuQyw4QkFBNEU7SUFDeEUsb0lBV087SUFDWCxpQkFBSztJQUNULDBCQUFlOzs7OztJQWR3QixlQUF3QztJQUF4Qyx3RUFBd0M7SUFDOUMsZUFBMkI7SUFBM0Isb0VBQTJCOzs7SUFIaEUsNkJBQStFO0lBQzNFLHFJQWVlO0lBQ25CLDBCQUFlOzs7SUE1R25CLDZCQUFrRTtJQUM5RCxzSEFnQmU7SUFDZixzSEFlZTtJQUNmLHNIQW1EZTtJQUNmLHNIQUllO0lBQ2Ysc0hBaUJlO0lBQ25CLDBCQUFlOzs7O0lBNUdJLGVBQTBEO0lBQTFELHVGQUEwRDtJQWlCMUQsZUFBdUQ7SUFBdkQsb0ZBQXVEO0lBZ0J2RCxlQUFrRTtJQUFsRSwrRkFBa0U7SUFvRGxFLGVBQXVEO0lBQXZELG9GQUF1RDtJQUt2RCxlQUE4RDtJQUE5RCwyRkFBOEQ7OztJQXhHckYsaUNBQW1GO0lBQy9FLHVHQUllO0lBRWYsdUdBSWU7SUFFZix1R0E2R2U7SUFDbkIsMEJBQWU7Ozs7SUEzSEQsOENBQTRCO0lBQ3ZCLGVBQThCO0lBQTlCLDBEQUE4QjtJQU05QixlQUErQjtJQUEvQiwyREFBK0I7SUFNL0IsZUFBZ0M7SUFBaEMsMkRBQWdDOzs7SUFnSG5ELHlCQUNLOzs7SUFEK0QsaURBQTRCOzs7O0lBRWhHLDhCQUFrUTtJQUE1RCxzUUFBOEIsc1BBQUE7SUFDcE8saUJBQUs7Ozs7SUFEb0Usc0RBQWlDLDRDQUFBLCtCQUFBLCtDQUFBOzs7O0lBRzlHLHNEQUE0TDtJQUE1Qyw4UUFBMkM7SUFDM0wsaUJBQTZCOzs7SUFEcUIsb0NBQWUsNkNBQUEsK0NBQUE7O0FEaEhyRSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFTdkIsTUFBTSxPQUFPLG9CQUFvQjtJQXlKL0IsWUFBb0IsS0FBd0IsRUFDbEMsV0FBd0IsRUFDdEIsYUFBMkIsRUFDM0IsV0FBb0MsRUFDbkIsU0FBb0IsRUFDekIsV0FBbUIsRUFDbkIsWUFBNkIsRUFDekMseUJBQTRDLEVBQzlDLFdBQThCO1FBUnBCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUN6Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQW1CO1FBQzlDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQS9KeEMsc0JBQWlCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxFLGNBQVMsR0FBYyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUloRDs7O1dBR0c7UUFDSCw4QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztRQUV0RDs7O1dBR0c7UUFDSCw4QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztRQUV0RDs7O1dBR0c7UUFDTSxvQkFBZSxHQUErQyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQTBDdEc7O1dBRUc7UUFFSCxtQkFBYyxHQUE4Qix5QkFBeUIsQ0FBQyxJQUFJLENBQUM7UUFFM0U7O1dBRUc7UUFFSCxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQzs7V0FFRztRQUVILGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBUS9COztXQUVHO1FBQ08sZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRW5EOztXQUVHO1FBQ08sdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBRTNDLENBQUM7UUFFTDs7V0FFRztRQUNPLHFCQUFnQixHQUFpRSxJQUFJLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQWtCdkg7OztXQUdHO1FBQ0gsZUFBVSxHQUFHLElBQUksa0JBQWtCLEVBQVUsQ0FBQztRQW9DNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXBIRDs7T0FFRztJQUNILElBQWEsU0FBUyxDQUFDLEtBQW1CO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFpREQ7OztPQUdHO0lBQ0gsSUFBSSxPQUFPO1FBQ1QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO2FBQ2hDLE1BQU0sQ0FBQyxDQUFDLE1BQXlCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDO2FBQy9ELEdBQUcsQ0FBQyxDQUFDLE1BQXlCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7WUFDbkMsT0FBTyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakQ7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBUUQ7OztPQUdHO0lBQ0gsSUFBSSxTQUFTLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXJFOzs7T0FHRztJQUNILElBQUksaUJBQWlCLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFckY7OztPQUdHO0lBQ0gsSUFBSSxVQUFVLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXZFOzs7T0FHRztJQUNILElBQUksV0FBVyxLQUFjLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQWVqSDs7O09BR0c7SUFDSCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQUMsTUFBYyxFQUFFLE1BQXlCLEVBQUUsS0FBSztRQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0JBQW9CLENBQUMsTUFBYyxFQUFFLE1BQXlCLEVBQUUsS0FBSztRQUNuRSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsTUFBeUIsRUFBRSxLQUFLO1FBQ2xFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7T0FFRztJQUNILHlCQUF5QixDQUFDLE1BQWMsRUFBRSxNQUF5QixFQUFFLEtBQUs7UUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FBQyxNQUFjLEVBQUUsTUFBeUIsRUFBRSxLQUFLO1FBQzNELE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQztRQUM1QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSyxVQUFVLENBQUMsTUFBeUI7UUFDMUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7O1lBQ3JDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQSxNQUFBLE1BQU0sQ0FBQyxVQUFVLDBDQUFFLFNBQVMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUVoSCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9ELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDbkI7cUJBQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2lCQUNqRDtnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQ1YsQ0FBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDakMsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUM3RCxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNaLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQ1YsQ0FBQyxDQUFDO29CQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzVEO2FBQ0Y7aUJBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNWLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUMzRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ1YsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNoQixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7NEJBQzNDLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOzRCQUMzRyxNQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDMUcsT0FBTyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDMUQsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7Z0JBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztnQkFFRixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ25DLElBQUksT0FBTyxnQkFBZ0IsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO3dCQUMxRSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDL0M7b0JBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLGdCQUFnQixJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssZ0JBQWdCLEVBQUU7d0JBQ3ZFLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQ2pDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUNqRTtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUNqQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNiLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDVixDQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUM3RCxJQUFJLENBQ0wsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNWLENBQUMsQ0FBQzthQUNKO1lBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRTtnQkFDaEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO2FBQ3BDLE9BQU8sQ0FBQyxDQUFDLE1BQTRCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQzthQUN6RSxTQUFTLENBQUMsQ0FBQyxPQUErQixFQUFFLEVBQUU7WUFDN0MsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sOEJBQThCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RSxJQUNFLElBQUksQ0FBQyxTQUFTO2dCQUNkLENBQUMsOEJBQThCLEdBQUcsT0FBTztvQkFDekMsOEJBQThCLElBQUksT0FBTyxDQUFDLEVBQUU7Z0JBQzVDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQzthQUNuRDtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNoRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxrQkFBa0I7UUFDaEIsT0FBTyxDQUFDLEtBQWEsRUFBRSxNQUF5QyxFQUFFLEVBQUU7WUFDbEUsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBbUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsS0FBMEM7UUFDL0MsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87YUFDakMsSUFBSSxDQUFDLENBQUMsQ0FBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0QsSUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUN4QixhQUFhLEVBQUUsQ0FBQyxNQUE0QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7Z0JBQzlFLFNBQVM7Z0JBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjO2FBQ2hDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVUsQ0FBQyxNQUE0QjtRQUNyQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsV0FBVyxDQUFDLE1BQTRCO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFekMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxZQUFZLENBQUMsTUFBZTtRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXpDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNuQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7aUJBQ2xDLEdBQUcsRUFBRTtpQkFDTCxHQUFHLENBQUMsQ0FBQyxNQUE0QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxXQUFXLENBQUMsTUFBZSxFQUFFLE1BQTRCO1FBQ3ZELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFekMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLFNBQVMsR0FBRyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsZ0JBQWdCLENBQUMsTUFBZSxFQUFFLE1BQTRCLEVBQUUsS0FBaUI7UUFDL0UsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV6QyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxTQUFTLEVBQUU7WUFDeEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakMsT0FBTztTQUNSO1FBRUQsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5Qix3REFBd0Q7UUFDeEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFxQixDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0MsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5RSxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDL0MsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBGLE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUE2QixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0sscUJBQXFCLENBQUMsZUFBdUM7UUFDbkUsTUFBTSxNQUFNLEdBQUcseUJBQXlCLENBQUM7UUFDekMsTUFBTSxjQUFjLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxPQUFPLGNBQWMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDYixDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxnQkFBZ0IsQ0FBQyxNQUF5QjtRQUN4QyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMxQixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsYUFBYSxDQUFDLE1BQTRCO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0IsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakQsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FDTCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDM0UsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxDQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFVBQVUsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQ3BFLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxRQUFRLENBQUMsTUFBNEIsRUFBRSxNQUF5QjtRQUM5RCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUN0QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqRTtRQUNELEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtnQkFDekQsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNmO2lCQUFNLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQzVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFDO29CQUM1QixLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztpQkFDekM7YUFDRjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFDO2dCQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWE7YUFDL0M7U0FDRjthQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDakUsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUNuQixJQUFJLE9BQU8sQ0FBQztnQkFDWixPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDNUYsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUVyQixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDbkMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDL0IsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFOzRCQUNsQixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDN0I7NkJBQU07NEJBQ0wsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2hDO3FCQUNGO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7YUFDaEU7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ25DLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3BELEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3pCO29CQUNELElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7d0JBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDbkU7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGNBQWMsSUFBSSxLQUFLLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN6RSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDcEQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekI7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRTtvQkFDakQsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUNJLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQixJQUFJLEtBQUssRUFBRTtvQkFDVCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3REO2FBQ0Y7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDcEQsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNaO1NBQ0Y7UUFFRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNaO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsMkJBQTJCLENBQUMsTUFBeUIsRUFBRSxjQUFzQjtRQUMzRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ3RGLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFTSxTQUFTLENBQUMsTUFBTTtRQUNyQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxpQkFBaUIsQ0FBQyxNQUF5QjtRQUN6QyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUN4QjtRQUNELE9BQU8seUJBQXlCLENBQUMsT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsYUFBYTtRQUNYLE9BQU87WUFDTCxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUNsRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO1FBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDM0MsSUFBSSxJQUFJLFlBQVksUUFBUSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsV0FBVyxDQUFDLE1BQTRCO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxJQUFJLFlBQVksUUFBUSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFlBQVksQ0FBQyxNQUE0QixFQUFFLE1BQXlCO1FBQ2xFLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBRWYsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDOUMsSUFBSSxTQUFTLFlBQVksUUFBUSxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdkQ7UUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksVUFBVSxZQUFZLFFBQVEsRUFBRTtZQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGFBQWEsQ0FDWCxTQUFrRSxFQUNsRSxNQUE0QjtRQUU1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLElBQUksT0FBTyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQ25DLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0NBQWdDLENBQUMsTUFBYztRQUNwRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7d0ZBdndCVSxvQkFBb0I7dUVBQXBCLG9CQUFvQixtWkFGcEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztRQzdDbEYsOEJBQTZCO1FBQ3pCLGdDQUFpSjtRQUFqQyxzSEFBaUIsa0JBQWMsSUFBQztRQUM1SSxnQ0FBeUU7UUFDckUsbUVBUUs7UUFDTCxtRUFLSztRQUNULDBCQUFlO1FBRWYsdUZBMkhlO1FBRWYsbUVBQ0s7UUFDTCxtRUFDSztRQUNULGlCQUFRO1FBQ1IsbUhBQzZCO1FBQ2pDLGlCQUFNOztRQXZKdUIsZUFBMkI7UUFBM0IsNkNBQTJCLDhCQUFBLHFDQUFBO1FBbUJjLGVBQW1CO1FBQW5CLDhDQUFtQjtRQTZIN0QsZUFBMEI7UUFBMUIsNkNBQTBCLDBDQUFBO1FBRVEsZUFBaUI7UUFBakIsOENBQWlCO1FBRzlDLGVBQW1CO1FBQW5CLHdDQUFtQjs7dUZEdkd2QyxvQkFBb0I7Y0FQaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxzQkFBc0IsRUFBRSxDQUFDO2FBQ2pGOztzQkE4SkksUUFBUTs7c0JBQUksSUFBSTs7c0JBQ2hCLFFBQVE7O3NCQUNSLFFBQVE7a0ZBakhGLEtBQUs7a0JBQWIsS0FBSztZQUtPLFNBQVM7a0JBQXJCLEtBQUs7WUFhRyxRQUFRO2tCQUFoQixLQUFLO1lBTU4sY0FBYztrQkFEYixLQUFLO1lBT04sY0FBYztrQkFEYixLQUFLO1lBT04sYUFBYTtrQkFEWixLQUFLO1lBT04sZ0JBQWdCO2tCQURmLEtBQUs7WUFNSSxXQUFXO2tCQUFwQixNQUFNO1lBS0csa0JBQWtCO2tCQUEzQixNQUFNO1lBT0csZ0JBQWdCO2tCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgT3B0aW9uYWwsXG4gIFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIEVudGl0eUtleSxcbiAgRW50aXR5UmVjb3JkLFxuICBFbnRpdHlTdGF0ZSxcbiAgRW50aXR5U3RvcmUsXG4gIEVudGl0eVRhYmxlVGVtcGxhdGUsXG4gIEVudGl0eVRhYmxlQ29sdW1uLFxuICBFbnRpdHlUYWJsZUNvbHVtblJlbmRlcmVyLFxuICBFbnRpdHlUYWJsZVNlbGVjdGlvblN0YXRlLFxuICBFbnRpdHlUYWJsZVNjcm9sbEJlaGF2aW9yXG59IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgRW50aXR5VGFibGVQYWdpbmF0b3JPcHRpb25zIH0gZnJvbSAnLi4vZW50aXR5LXRhYmxlLXBhZ2luYXRvci9lbnRpdHktdGFibGUtcGFnaW5hdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgTmdDb250cm9sLCBOZ0Zvcm0sIEZvcm1Db250cm9sTmFtZSwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tZW50aXR5LXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VudGl0eS10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VudGl0eS10YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogRW50aXR5VGFibGVDb21wb25lbnQgfV1cbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBlbnRpdHlTb3J0Q2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgcHVibGljIGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG5cbiAgcHVibGljIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgY29sdW1uIHJlbmRlcmVyIHR5cGVzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW50aXR5VGFibGVDb2x1bW5SZW5kZXJlciA9IEVudGl0eVRhYmxlQ29sdW1uUmVuZGVyZXI7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgc2VsZWN0aW9uJ3Mgc3RhdGVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnRpdHlUYWJsZVNlbGVjdGlvblN0YXRlID0gRW50aXR5VGFibGVTZWxlY3Rpb25TdGF0ZTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiB0aGUgc2VsZWN0aW9uLHMgc3RhdGVcbiAgICogQGludGVybmFsXG4gICAqL1xuICByZWFkb25seSBzZWxlY3Rpb25TdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxFbnRpdHlUYWJsZVNlbGVjdGlvblN0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzdG9yZSdzIHNlbGVjdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBzZWxlY3Rpb24kJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIGRhdGFTb3VyY2VcbiAgICovXG4gIHByaXZhdGUgZGF0YVNvdXJjZSQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFRoZSBsYXN0IHJlY29yZCBjaGVja2VkLiBVc2VmdWwgZm9yIHNlbGVjdGluZ1xuICAgKiBtdWx0aXBsZSByZWNvcmRzIGJ5IGhvbGRpbmcgdGhlIHNoaWZ0IGtleSBhbmQgY2hlY2tpbmdcbiAgICogY2hlY2tib3hlcy5cbiAgICovXG4gIHByaXZhdGUgbGFzdFJlY29yZENoZWNrZWRLZXk6IEVudGl0eUtleTtcblxuICAvKipcbiAgICogRW50aXR5IHN0b3JlXG4gICAqL1xuICBASW5wdXQoKSBzdG9yZTogRW50aXR5U3RvcmU8b2JqZWN0PjtcblxuICAvKipcbiAgICogVGFibGUgcGFnaW5hdG9yXG4gICAqL1xuICBASW5wdXQoKSBzZXQgcGFnaW5hdG9yKHZhbHVlOiBNYXRQYWdpbmF0b3IpIHtcbiAgICB0aGlzLl9wYWdpbmF0b3IgPSB2YWx1ZTtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcGFnaW5hdG9yKCk6IE1hdFBhZ2luYXRvciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2luYXRvcjtcbiAgfVxuICBwcml2YXRlIF9wYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcblxuICAvKipcbiAgICogVGFibGUgdGVtcGxhdGVcbiAgICovXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBFbnRpdHlUYWJsZVRlbXBsYXRlO1xuXG4gIC8qKlxuICAgKiBTY3JvbGwgYmVoYXZpb3Igb24gc2VsZWN0aW9uXG4gICAqL1xuICBASW5wdXQoKVxuICBzY3JvbGxCZWhhdmlvcjogRW50aXR5VGFibGVTY3JvbGxCZWhhdmlvciA9IEVudGl0eVRhYmxlU2Nyb2xsQmVoYXZpb3IuQXV0bztcblxuICAvKipcbiAgICogV2hldGhlciBudWxscyBzaG91bGQgYmUgZmlyc3Qgd2hlbiBzb3J0aW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBzb3J0TnVsbHNGaXJzdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTaG93IHRoZSB0YWJsZSBwYWdpbmF0b3Igb3Igbm90LiBGYWxzZSBieSBkZWZhdWx0LlxuICAgKi9cbiAgQElucHV0KClcbiAgd2l0aFBhZ2luYXRvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBQYWdpbmF0b3Igb3B0aW9uc1xuICAgKi9cbiAgQElucHV0KClcbiAgcGFnaW5hdG9yT3B0aW9uczogRW50aXR5VGFibGVQYWdpbmF0b3JPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYW4gZW50aXR5IChyb3cpIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKSBlbnRpdHlDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYW4gZW50aXR5IChyb3cpIGlzIHNlbGVjdGVkXG4gICAqL1xuICBAT3V0cHV0KCkgZW50aXR5U2VsZWN0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgYWRkZWQ6IG9iamVjdFtdO1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHRhYmxlIHNvcnQgaXMgY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBlbnRpdHlTb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8e2NvbHVtbjogRW50aXR5VGFibGVDb2x1bW4sIGRpcmVjdGlvbjogc3RyaW5nfT4gPSBuZXcgRXZlbnRFbWl0dGVyKHVuZGVmaW5lZCk7XG5cbiAgLyoqXG4gICAqIFRhYmxlIGhlYWRlcnNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgaGVhZGVycygpOiBzdHJpbmdbXSB7XG4gICAgbGV0IGNvbHVtbnMgPSB0aGlzLnRlbXBsYXRlLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoKGNvbHVtbjogRW50aXR5VGFibGVDb2x1bW4pID0+IGNvbHVtbi52aXNpYmxlICE9PSBmYWxzZSlcbiAgICAgIC5tYXAoKGNvbHVtbjogRW50aXR5VGFibGVDb2x1bW4pID0+IGNvbHVtbi5uYW1lKTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGlvbkNoZWNrYm94ID09PSB0cnVlKSB7XG4gICAgICBjb2x1bW5zID0gWydzZWxlY3Rpb25DaGVja2JveCddLmNvbmNhdChjb2x1bW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIHNvdXJjZSBjb25zdW1hYmxlIGJ5IHRoZSB1bmRlcmx5aW5nIG1hdGVyaWFsIHRhYmxlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8b2JqZWN0PigpO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHNlbGVjdGlvbiBpcyBzdXBwb3J0ZWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgc2VsZWN0aW9uKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy50ZW1wbGF0ZS5zZWxlY3Rpb24gfHwgZmFsc2U7IH1cblxuICAvKipcbiAgICogV2hldGhlciBhIHNlbGVjdGlvbiBjaGVja2JveCBzaG91bGQgYmUgZGlzcGxheWVkXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IHNlbGVjdGlvbkNoZWNrYm94KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy50ZW1wbGF0ZS5zZWxlY3Rpb25DaGVja2JveCB8fCBmYWxzZTsgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHNlbGVjdGlvbiBtYW55IGVudGl0aWVzIHNob3VsZCBlYiBzdXBwb3J0ZWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgc2VsZWN0TWFueSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMudGVtcGxhdGUuc2VsZWN0TWFueSB8fCBmYWxzZTsgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHNlbGVjdGlvbiBtYW55IGVudGl0aWVzIHNob3VsZCBlYiBzdXBwb3J0ZWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgZml4ZWRIZWFkZXIoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnRlbXBsYXRlLmZpeGVkSGVhZGVyID09PSB1bmRlZmluZWQgPyB0cnVlIDogdGhpcy50ZW1wbGF0ZS5maXhlZEhlYWRlcjsgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgX2NvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWUsXG4gICAgcHJvdGVjdGVkIF9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyLFxuICAgIHByaXZhdGUgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPERhdGU+XG4gICkge1xuICAgIHRoaXMuZGF0ZUFkYXB0ZXIuc2V0TG9jYWxlKCdmci1DQScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIHRoZSBzZWxlY3Rpb24gc3RhdGUgdG8gcHJvcGVybHkgZGlzcGxheSB0aGUgc2VsZWN0aW9uIGNoZWNrYm94ZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmhhbmRsZURhdGFzb3VyY2UoKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3Qgc3RvcmUgPSBjaGFuZ2VzLnN0b3JlO1xuICAgIGlmIChzdG9yZSAmJiBzdG9yZS5jdXJyZW50VmFsdWUgIT09IHN0b3JlLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHRoaXMuaGFuZGxlRGF0YXNvdXJjZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHRleHQgb3IgbnVtYmVyIHZhbHVlIGNoYW5nZSAoZWRpdGlvbilcbiAgICovXG4gIG9uVmFsdWVDaGFuZ2UoY29sdW1uOiBzdHJpbmcsIHJlY29yZDogRW50aXR5UmVjb3JkPGFueT4sIGV2ZW50KSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXRDb2x1bW5LZXlXaXRob3V0UHJvcGVydGllc1RhZyhjb2x1bW4pO1xuICAgIHJlY29yZC5lbnRpdHkucHJvcGVydGllc1trZXldID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgYm9vbGVhbiB2YWx1ZSBjaGFuZ2UgKGVkaXRpb24pXG4gICAqL1xuICBvbkJvb2xlYW5WYWx1ZUNoYW5nZShjb2x1bW46IHN0cmluZywgcmVjb3JkOiBFbnRpdHlSZWNvcmQ8YW55PiwgZXZlbnQpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldENvbHVtbktleVdpdGhvdXRQcm9wZXJ0aWVzVGFnKGNvbHVtbik7XG4gICAgcmVjb3JkLmVudGl0eS5wcm9wZXJ0aWVzW2tleV0gPSBldmVudC5jaGVja2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3Mgc2VsZWN0IHZhbHVlIGNoYW5nZSAoZWRpdGlvbilcbiAgICovXG4gIG9uU2VsZWN0VmFsdWVDaGFuZ2UoY29sdW1uOiBzdHJpbmcsIHJlY29yZDogRW50aXR5UmVjb3JkPGFueT4sIGV2ZW50KSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXRDb2x1bW5LZXlXaXRob3V0UHJvcGVydGllc1RhZyhjb2x1bW4pO1xuICAgIHJlY29yZC5lbnRpdHkucHJvcGVydGllc1trZXldID0gZXZlbnQudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyBhdXRvY29tcGxldGUgdmFsdWUgY2hhbmdlIChlZGl0aW9uKVxuICAgKi9cbiAgb25BdXRvY29tcGxldGVWYWx1ZUNoYW5nZShjb2x1bW46IHN0cmluZywgcmVjb3JkOiBFbnRpdHlSZWNvcmQ8YW55PiwgZXZlbnQpIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tjb2x1bW5dLnNldFZhbHVlKGV2ZW50Lm9wdGlvbi52aWV3VmFsdWUpO1xuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0Q29sdW1uS2V5V2l0aG91dFByb3BlcnRpZXNUYWcoY29sdW1uKTtcbiAgICByZWNvcmQuZW50aXR5LnByb3BlcnRpZXNba2V5XSA9IGV2ZW50Lm9wdGlvbi52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIGRhdGUgdmFsdWUgY2hhbmdlIChlZGl0aW9uKVxuICAgKi9cbiAgb25EYXRlQ2hhbmdlKGNvbHVtbjogc3RyaW5nLCByZWNvcmQ6IEVudGl0eVJlY29yZDxhbnk+LCBldmVudCkge1xuICAgIGNvbnN0IGZvcm1hdCA9IFwiWVlZWS1NTS1ERFwiO1xuICAgIGNvbnN0IHZhbHVlID0gbW9tZW50KGV2ZW50LnZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldENvbHVtbktleVdpdGhvdXRQcm9wZXJ0aWVzVGFnKGNvbHVtbik7XG4gICAgcmVjb3JkLmVudGl0eS5wcm9wZXJ0aWVzW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgZWRpdGlvbiBtb2RlIGZvciBvbmUgcm93XG4gICAqIE1vcmUgdGhhbiBvbmUgcm93IGNhbiBiZSBlZGl0ZWQgYXQgdGhlIHNhbWUgdGltZVxuICAgKi9cbiAgcHJpdmF0ZSBlbmFibGVFZGl0KHJlY29yZDogRW50aXR5UmVjb3JkPGFueT4pIHtcbiAgICBjb25zdCBpdGVtID0gcmVjb3JkLmVudGl0eS5wcm9wZXJ0aWVzIHx8IHJlY29yZC5lbnRpdHk7XG4gICAgdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIGNvbHVtbi50aXRsZSA9IGNvbHVtbi52YWxpZGF0aW9uPy5tYW5kYXRvcnkgJiYgIWNvbHVtbi50aXRsZS5pbmNsdWRlcygnKicpID8gY29sdW1uLnRpdGxlICsgJyAqJyA6IGNvbHVtbi50aXRsZTtcblxuICAgICAgY29uc3Qga2V5ID0gdGhpcy5nZXRDb2x1bW5LZXlXaXRob3V0UHJvcGVydGllc1RhZyhjb2x1bW4ubmFtZSk7XG4gICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWl0ZW1ba2V5XSB8fCBpdGVtW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICBpdGVtW2tleV0gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGl0ZW1ba2V5XSA9IEpTT04ucGFyc2UoaXRlbVtrZXldLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldENvbnRyb2woY29sdW1uLm5hbWUsIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChcbiAgICAgICAgICBpdGVtW2tleV1cbiAgICAgICAgKSk7XG4gICAgICB9IGVsc2UgaWYgKGNvbHVtbi50eXBlID09PSAnbGlzdCcpIHtcbiAgICAgICAgaWYgKGNvbHVtbi5tdWx0aXBsZSkge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldENvbnRyb2woY29sdW1uLm5hbWUsIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChcbiAgICAgICAgICAgIFtpdGVtW2tleV1dXG4gICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuc2V0Q29udHJvbChjb2x1bW4ubmFtZSwgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKFxuICAgICAgICAgICAgaXRlbVtrZXldXG4gICAgICAgICAgKSk7XG5cbiAgICAgICAgICB0eXBlb2YgaXRlbVtrZXldID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tjb2x1bW4ubmFtZV0uc2V0VmFsdWUocGFyc2VJbnQoaXRlbVtrZXldKSkgOlxuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbY29sdW1uLm5hbWVdLnNldFZhbHVlKGl0ZW1ba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY29sdW1uLnR5cGUgPT09ICdhdXRvY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldENvbnRyb2woY29sdW1uLm5hbWUsIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChcbiAgICAgICAgICBpdGVtW2tleV1cbiAgICAgICAgKSk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tjb2x1bW4ubmFtZV0udmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgICAgbWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5kb21haW5WYWx1ZXMuZmlsdGVyKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJOb3JtYWxpemVkID0gdmFsdWUgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpIDogJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZU5hbWVOb3JtYWxpemVkID0gb3B0aW9uLnZhbHVlLnRvTG93ZXJDYXNlKCkubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmVOYW1lTm9ybWFsaXplZC5pbmNsdWRlcyhmaWx0ZXJOb3JtYWxpemVkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgZm9ybUNvbnRyb2xWYWx1ZSA9IGl0ZW1ba2V5XTtcbiAgICAgICAgY29sdW1uLmRvbWFpblZhbHVlcy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmb3JtQ29udHJvbFZhbHVlID09PSAnc3RyaW5nJyAmJiAvXlxcZCskLy50ZXN0KGZvcm1Db250cm9sVmFsdWUpKSB7XG4gICAgICAgICAgICBmb3JtQ29udHJvbFZhbHVlID0gcGFyc2VJbnQoZm9ybUNvbnRyb2xWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IGZvcm1Db250cm9sVmFsdWUgfHwgb3B0aW9uLmlkID09PSBmb3JtQ29udHJvbFZhbHVlKSB7XG4gICAgICAgICAgICBmb3JtQ29udHJvbFZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbY29sdW1uLm5hbWVdLnNldFZhbHVlKGZvcm1Db250cm9sVmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChjb2x1bW4udHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgIGlmIChjb2x1bW4udmlzaWJsZSkge1xuICAgICAgICAgIGlmIChpdGVtW2tleV0pIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbW9tZW50KGl0ZW1ba2V5XSk7XG4gICAgICAgICAgICBpdGVtW2tleV0gPSBkYXRlLnV0YygpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuc2V0Q29udHJvbChjb2x1bW4ubmFtZSwgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKFxuICAgICAgICAgICAgICBpdGVtW2tleV1cbiAgICAgICAgICAgICkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdLZXkgPSB0aGlzLmdldENvbHVtbktleVdpdGhvdXRQcm9wZXJ0aWVzVGFnKGNvbHVtbi5uYW1lKTtcbiAgICAgICAgICAgIHJlY29yZC5lbnRpdHkucHJvcGVydGllc1tuZXdLZXldID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldENvbnRyb2woY29sdW1uLm5hbWUsIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChcbiAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRDb250cm9sKGNvbHVtbi5uYW1lLCB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2woXG4gICAgICAgICAgaXRlbVtrZXldXG4gICAgICAgICkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbY29sdW1uLm5hbWVdICYmIHRoaXMuZ2V0VmFsaWRhdGlvbkF0dHJpYnV0ZVZhbHVlKGNvbHVtbiwgJ3JlYWRvbmx5JykpIHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbY29sdW1uLm5hbWVdLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRGF0YXNvdXJjZSgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlU3RvcmUoKTtcbiAgICB0aGlzLnNlbGVjdGlvbiQkID0gdGhpcy5zdG9yZS5zdGF0ZVZpZXdcbiAgICAgIC5tYW55QnkkKChyZWNvcmQ6IEVudGl0eVJlY29yZDxvYmplY3Q+KSA9PiByZWNvcmQuc3RhdGUuc2VsZWN0ZWQgPT09IHRydWUpXG4gICAgICAuc3Vic2NyaWJlKChyZWNvcmRzOiBFbnRpdHlSZWNvcmQ8b2JqZWN0PltdKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0U2VsZWN0ZWQgPSByZWNvcmRzWzBdO1xuICAgICAgICBjb25zdCBmaXJzdFNlbGVjdGVkU3RhdGV2aWV3UG9zaXRpb24gPSB0aGlzLnN0b3JlLnN0YXRlVmlldy5hbGwoKS5pbmRleE9mKGZpcnN0U2VsZWN0ZWQpO1xuICAgICAgICBjb25zdCBwYWdlTWF4ID0gdGhpcy5wYWdpbmF0b3IgPyB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZSAqICh0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXggKyAxKSA6IDA7XG4gICAgICAgIGNvbnN0IHBhZ2VNaW4gPSB0aGlzLnBhZ2luYXRvciA/IHBhZ2VNYXggLSB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZSA6IDA7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMucGFnaW5hdG9yICYmXG4gICAgICAgICAgKGZpcnN0U2VsZWN0ZWRTdGF0ZXZpZXdQb3NpdGlvbiA8IHBhZ2VNaW4gfHxcbiAgICAgICAgICBmaXJzdFNlbGVjdGVkU3RhdGV2aWV3UG9zaXRpb24gPj0gcGFnZU1heCkpIHtcbiAgICAgICAgICBjb25zdCBwYWdlVG9SZWFjaCA9IE1hdGguZmxvb3IoZmlyc3RTZWxlY3RlZFN0YXRldmlld1Bvc2l0aW9uIC8gdGhpcy5wYWdpbmF0b3IucGFnZVNpemUpO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IucGFnZUluZGV4ID0gcGFnZVRvUmVhY2g7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGF0ZSQubmV4dCh0aGlzLmNvbXB1dGVTZWxlY3Rpb25TdGF0ZShyZWNvcmRzKSk7XG4gICAgICB9KTtcbiAgICB0aGlzLmRhdGFTb3VyY2UkJCA9IHRoaXMuc3RvcmUuc3RhdGVWaWV3LmFsbCQoKS5zdWJzY3JpYmUoKGFsbCkgPT4ge1xuICAgICAgaWYgKGFsbFswXSkge1xuICAgICAgICB0aGlzLmVuYWJsZUVkaXQoYWxsWzBdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gYWxsO1xuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBzdG9yZSB3YXRjaGVyXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZVN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlU3RvcmUoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uJCQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZSQkKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UkJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFja2J5IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSByZWNvcmQgUmVjb3JkXG4gICAqIEBwYXJhbSBpbmRleCBSZWNvcmQgaW5kZXhcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRUcmFja0J5RnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChpbmRleDogbnVtYmVyLCByZWNvcmQ6IEVudGl0eVJlY29yZDxvYmplY3QsIEVudGl0eVN0YXRlPikgPT4ge1xuICAgICAgcmV0dXJuIHJlY29yZC5yZWY7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgcmVmcmVzaCBvZiB0aHJlIHRhYmxlLiBUaGlzIGNhbiBiZSB1c2VmdWwgd2hlblxuICAgKiB0aGUgZGF0YSBzb3VyY2UgZG9lc24ndCBlbWl0IGEgbmV3IHZhbHVlIGJ1dCBmb3Igc29tZSByZWFzb25cbiAgICogdGhlIHJlY29yZHMgbmVlZCBhbiB1cGRhdGUuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHBhZ2luYXRvckNoYW5nZShldmVudDogTWF0UGFnaW5hdG9yKSB7XG4gICAgdGhpcy5wYWdpbmF0b3IgPSBldmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBzb3J0LCBzb3J0IHRoZSBzdG9yZVxuICAgKiBAcGFyYW0gZXZlbnQgU29ydCBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uU29ydChldmVudDoge2FjdGl2ZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZ30pIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBldmVudC5kaXJlY3Rpb247XG4gICAgY29uc3QgY29sdW1uID0gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zXG4gICAgICAuZmluZCgoYzogRW50aXR5VGFibGVDb2x1bW4pID0+IGMubmFtZSA9PT0gZXZlbnQuYWN0aXZlKTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdhc2MnIHx8IGRpcmVjdGlvbiA9PT0gJ2Rlc2MnKSB7XG4gICAgICB0aGlzLnN0b3JlLnN0YXRlVmlldy5zb3J0KHtcbiAgICAgICAgdmFsdWVBY2Nlc3NvcjogKHJlY29yZDogRW50aXR5UmVjb3JkPG9iamVjdD4pID0+IHRoaXMuZ2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIG51bGxzRmlyc3Q6IHRoaXMuc29ydE51bGxzRmlyc3RcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbnRpdHlTb3J0Q2hhbmdlLmVtaXQoe2NvbHVtbiwgZGlyZWN0aW9ufSk7XG4gICAgICB0aGlzLmVudGl0eVNvcnRDaGFuZ2UkLm5leHQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuc3RhdGVWaWV3LnNvcnQodW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBhbiBlbnRpdHkgaXMgY2xpY2tlZCwgZW1pdCBhbiBldmVudFxuICAgKiBAcGFyYW0gcmVjb3JkIFJlY29yZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uUm93Q2xpY2socmVjb3JkOiBFbnRpdHlSZWNvcmQ8b2JqZWN0Pikge1xuICAgIHRoaXMubGFzdFJlY29yZENoZWNrZWRLZXkgPSB0aGlzLnN0b3JlLnN0YXRlVmlldy5nZXRLZXkocmVjb3JkKTtcbiAgICB0aGlzLmVudGl0eUNsaWNrLmVtaXQocmVjb3JkLmVudGl0eSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBhbiBlbnRpdHkgaXMgc2VsZWN0ZWQsIHNlbGVjdCBpdCBpbiB0aGUgc3RvcmUgYW5kIGVtaXQgYW4gZXZlbnQuIEV2ZW4gaWZcbiAgICogXCJtYW55XCIgaXMgc2V0IHRvIHRydWUsIHRoaXMgbWV0aG9kIGFsd2F5cyBzZWxlY3QgYSBzaW5nbGUsIGV4Y2x1c2l2ZSByb3cuIFNlbGVjdGluZ1xuICAgKiBtdWx0aXBsZSByb3dzIHNob3VsZCBiZSBhY2hpZXZlZCBieSB1c2luZyB0aGUgY2hlY2tib3hlcy5cbiAgICogQHBhcmFtIHJlY29yZCBSZWNvcmRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvblJvd1NlbGVjdChyZWNvcmQ6IEVudGl0eVJlY29yZDxvYmplY3Q+KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uID09PSBmYWxzZSkgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IGVudGl0eSA9IHJlY29yZC5lbnRpdHk7XG4gICAgdGhpcy5zdG9yZS5zdGF0ZS51cGRhdGUoZW50aXR5LCB7c2VsZWN0ZWQ6IHRydWV9LCB0cnVlKTtcbiAgICB0aGlzLmVudGl0eVNlbGVjdENoYW5nZS5lbWl0KHthZGRlZDogW2VudGl0eV19KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3Qgb3IgdW5zZWxlY3QgYWxsIHJvd3MgYXQgb25jZS4gT24gc2VsZWN0LCBlbWl0IGFuIGV2ZW50LlxuICAgKiBAcGFyYW0gdG9nZ2xlIFNlbGVjdCBvciB1bnNlbGVjdFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uVG9nZ2xlUm93cyh0b2dnbGU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IGZhbHNlKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5zdG9yZS5zdGF0ZS51cGRhdGVBbGwoe3NlbGVjdGVkOiB0b2dnbGV9KTtcbiAgICBpZiAodG9nZ2xlID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IHRoaXMuc3RvcmUuc3RhdGVWaWV3XG4gICAgICAgIC5hbGwoKVxuICAgICAgICAubWFwKChyZWNvcmQ6IEVudGl0eVJlY29yZDxvYmplY3Q+KSA9PiByZWNvcmQuZW50aXR5KTtcbiAgICAgIHRoaXMuZW50aXR5U2VsZWN0Q2hhbmdlLmVtaXQoe2FkZGVkOiBbZW50aXRpZXNdfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYW4gZW50aXR5IGlzIHRvZ2dsZWQsIHNlbGVjdCBvciB1bnNlbGVjdCBpdCBpbiB0aGUgc3RvcmUuIE9uIHNlbGVjdCxcbiAgICogZW1pdCBhbiBldmVudC5cbiAgICogQHBhcmFtIHRvZ2dsZSBTZWxlY3Qgb3IgdW5zZWxlY3RcbiAgICogQHBhcmFtIHJlY29yZCBSZWNvcmRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvblRvZ2dsZVJvdyh0b2dnbGU6IGJvb2xlYW4sIHJlY29yZDogRW50aXR5UmVjb3JkPG9iamVjdD4pIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IGZhbHNlKSB7IHJldHVybjsgfVxuXG4gICAgY29uc3QgZW50aXR5ID0gcmVjb3JkLmVudGl0eTtcbiAgICBjb25zdCBleGNsdXNpdmUgPSB0b2dnbGUgPT09IHRydWUgJiYgIXRoaXMuc2VsZWN0TWFueTtcbiAgICB0aGlzLnN0b3JlLnN0YXRlLnVwZGF0ZShlbnRpdHksIHtzZWxlY3RlZDogdG9nZ2xlfSwgZXhjbHVzaXZlKTtcbiAgICBpZiAodG9nZ2xlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmVudGl0eVNlbGVjdENoYW5nZS5lbWl0KHthZGRlZDogW2VudGl0eV19KTtcbiAgICB9XG4gICAgdGhpcy5sYXN0UmVjb3JkQ2hlY2tlZEtleSA9IHRoaXMuc3RvcmUuc3RhdGVWaWV3LmdldEtleShyZWNvcmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYW4gZW50aXR5IGlzIHRvZ2dsZWQsIHNlbGVjdCBvciB1bnNlbGVjdCBpdCBpbiB0aGUgc3RvcmUuIE9uIHNlbGVjdCxcbiAgICogZW1pdCBhbiBldmVudC5cbiAgICogQHBhcmFtIHRvZ2dsZSBTZWxlY3Qgb3IgdW5zZWxlY3RcbiAgICogQHBhcmFtIHJlY29yZCBSZWNvcmRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvblNoaWZ0VG9nZ2xlUm93KHRvZ2dsZTogYm9vbGVhbiwgcmVjb3JkOiBFbnRpdHlSZWNvcmQ8b2JqZWN0PiwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IGZhbHNlKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0TWFueSA9PT0gZmFsc2UgfHwgdGhpcy5sYXN0UmVjb3JkQ2hlY2tlZEtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uVG9nZ2xlUm93KHRvZ2dsZSwgcmVjb3JkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCBtYXQgY2hlY2tib3ggd3JvbmcgYmVoYXZpb3JcbiAgICAvLyB3aGVuIHRoZSBzaGlmdCBrZXkgaXMgaGVsZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9pc3N1ZXMvNjIzMlxuICAgIGNvbnN0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZShldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2UocmFuZ2UpO1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuc3RvcmUuc3RhdGVWaWV3LmFsbCgpO1xuICAgIGNvbnN0IHJlY29yZEluZGV4ID0gcmVjb3Jkcy5pbmRleE9mKHJlY29yZCk7XG4gICAgY29uc3QgbGFzdFJlY29yZENoZWNrZWQgPSB0aGlzLnN0b3JlLnN0YXRlVmlldy5nZXQodGhpcy5sYXN0UmVjb3JkQ2hlY2tlZEtleSk7XG4gICAgY29uc3QgbGFzdFJlY29yZEluZGV4ID0gcmVjb3Jkcy5pbmRleE9mKGxhc3RSZWNvcmRDaGVja2VkKTtcbiAgICBjb25zdCBpbmRleGVzID0gW3JlY29yZEluZGV4LCBsYXN0UmVjb3JkSW5kZXhdO1xuICAgIGNvbnN0IHNlbGVjdFJlY29yZHMgPSByZWNvcmRzLnNsaWNlKE1hdGgubWluKC4uLmluZGV4ZXMpLCBNYXRoLm1heCguLi5pbmRleGVzKSArIDEpO1xuXG4gICAgY29uc3QgZW50aXRpZXMgPSBzZWxlY3RSZWNvcmRzLm1hcCgoX3JlY29yZDogRW50aXR5UmVjb3JkPG9iamVjdD4pID0+IF9yZWNvcmQuZW50aXR5KTtcbiAgICB0aGlzLnN0b3JlLnN0YXRlLnVwZGF0ZU1hbnkoZW50aXRpZXMsIHtzZWxlY3RlZDogdG9nZ2xlfSk7XG4gICAgaWYgKHRvZ2dsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5lbnRpdHlTZWxlY3RDaGFuZ2UuZW1pdCh7YWRkZWQ6IGVudGl0aWVzfSk7XG4gICAgfVxuICAgIHRoaXMubGFzdFJlY29yZENoZWNrZWRLZXkgPSB0aGlzLnN0b3JlLnN0YXRlVmlldy5nZXRLZXkocmVjb3JkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBzZWxlY3Rpb24gc3RhdGVcbiAgICogQHJldHVybnMgV2hldGhlciBhbGwsIHNvbWUgb3Igbm8gcm93cyBhcmUgc2VsZWN0ZWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVTZWxlY3Rpb25TdGF0ZShzZWxlY3RlZFJlY29yZHM6IEVudGl0eVJlY29yZDxvYmplY3Q+W10pOiBFbnRpdHlUYWJsZVNlbGVjdGlvblN0YXRlIHtcbiAgICBjb25zdCBzdGF0ZXMgPSBFbnRpdHlUYWJsZVNlbGVjdGlvblN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGlvbkNvdW50ID0gc2VsZWN0ZWRSZWNvcmRzLmxlbmd0aDtcbiAgICByZXR1cm4gc2VsZWN0aW9uQ291bnQgPT09IDAgP1xuICAgICAgc3RhdGVzLk5vbmUgOlxuICAgICAgKHNlbGVjdGlvbkNvdW50ID09PSB0aGlzLnN0b3JlLnN0YXRlVmlldy5jb3VudCA/IHN0YXRlcy5BbGwgOiBzdGF0ZXMuU29tZSk7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBhIGNvbHVtbiBpcyBzb3J0YWJsZVxuICAgKiBAcGFyYW0gY29sdW1uIENvbHVtblxuICAgKiBAcmV0dXJucyBUcnVlIGlmIGEgY29sdW1uIGlzIHNvcnRhYmxlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY29sdW1uSXNTb3J0YWJsZShjb2x1bW46IEVudGl0eVRhYmxlQ29sdW1uKTogYm9vbGVhbiB7XG4gICAgbGV0IHNvcnRhYmxlID0gY29sdW1uLnNvcnQ7XG4gICAgaWYgKHNvcnRhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNvcnRhYmxlID0gdGhpcy50ZW1wbGF0ZS5zb3J0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IHRoaXMudGVtcGxhdGUuc29ydDtcbiAgICB9XG4gICAgcmV0dXJuIHNvcnRhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYSByb3cgaXMgc2hvdWxkIGJlIHNlbGVjdGVkIGJhc2VkIG9uIHRoZSB1bmRlcmx5aW5nIGVudGl0eSBzdGF0ZVxuICAgKiBAcGFyYW0gcmVjb3JkIFJlY29yZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIGEgcm93IHNob3VsZCBiZSBzZWxlY3RlZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHJvd0lzU2VsZWN0ZWQocmVjb3JkOiBFbnRpdHlSZWNvcmQ8b2JqZWN0Pik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHN0YXRlID0gcmVjb3JkLnN0YXRlO1xuICAgIHJldHVybiBzdGF0ZS5zZWxlY3RlZCA/IHN0YXRlLnNlbGVjdGVkIDogZmFsc2U7XG4gIH1cblxuICBpc0ltZyh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzVXJsKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgWydqcGcnLCAncG5nJywgJ2dpZiddLmluZGV4T2YodmFsdWUuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpc1VybCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB2YWx1ZS5zbGljZSgwLCA4KSA9PT0gJ2h0dHBzOi8vJyB8fCB2YWx1ZS5zbGljZSgwLCA3KSA9PT0gJ2h0dHA6Ly8nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBhY2Nlc3MgYW4gZW50aXR5J3MgdmFsdWVzXG4gICAqIEBwYXJhbSByZWNvcmQgUmVjb3JkXG4gICAqIEBwYXJhbSBjb2x1bW4gQ29sdW1uXG4gICAqIEByZXR1cm5zIEFueSB2YWx1ZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldFZhbHVlKHJlY29yZDogRW50aXR5UmVjb3JkPG9iamVjdD4sIGNvbHVtbjogRW50aXR5VGFibGVDb2x1bW4pOiBhbnkge1xuICAgIGNvbnN0IGVudGl0eSA9IHJlY29yZC5lbnRpdHk7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChjb2x1bW4udmFsdWVBY2Nlc3NvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY29sdW1uLnZhbHVlQWNjZXNzb3IoZW50aXR5LCByZWNvcmQpO1xuICAgIH1cbiAgICBpZiAodGhpcy50ZW1wbGF0ZS52YWx1ZUFjY2Vzc29yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlLnZhbHVlQWNjZXNzb3IoZW50aXR5LCBjb2x1bW4ubmFtZSwgcmVjb3JkKTtcbiAgICB9XG4gICAgdmFsdWUgPSB0aGlzLnN0b3JlLmdldFByb3BlcnR5KGVudGl0eSwgY29sdW1uLm5hbWUpO1xuXG4gICAgaWYgKGNvbHVtbi50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKXtcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmlzRWRpdGlvbihyZWNvcmQpKXtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA/ICcmIzEwMDAzOycgOiAnJzsgLy8gY2hlY2sgbWFya1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29sdW1uLnR5cGUgPT09ICdsaXN0JyAmJiB2YWx1ZSAmJiBjb2x1bW4uZG9tYWluVmFsdWVzKSB7XG4gICAgICBpZiAoY29sdW1uLm11bHRpcGxlKSB7XG4gICAgICAgIGxldCBsaXN0X2lkO1xuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gbGlzdF9pZCA9IHZhbHVlLm1hdGNoKC9bXFx3Li1dKy9nKS5tYXAoTnVtYmVyKSA6IGxpc3RfaWQgPSB2YWx1ZTtcbiAgICAgICAgbGV0IGxpc3Rfb3B0aW9uID0gW107XG5cbiAgICAgICAgY29sdW1uLmRvbWFpblZhbHVlcy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKGxpc3RfaWQuaW5jbHVkZXMob3B0aW9uLmlkKSkge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5lZGl0aW9uKSB7XG4gICAgICAgICAgICAgIGxpc3Rfb3B0aW9uLnB1c2gob3B0aW9uLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxpc3Rfb3B0aW9uLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXNFZGl0aW9uKHJlY29yZCkgPyB2YWx1ZSA9IGxpc3RfaWQgOiB2YWx1ZSA9IGxpc3Rfb3B0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1uLmRvbWFpblZhbHVlcy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSB2YWx1ZSB8fCBvcHRpb24uaWQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmlzRWRpdGlvbihyZWNvcmQpID8gdmFsdWUgPSBvcHRpb24uaWQgOiB2YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29sdW1uLnR5cGUgPT09ICdhdXRvY29tcGxldGUnICYmIHZhbHVlICYmIGNvbHVtbi5kb21haW5WYWx1ZXMpIHtcbiAgICAgIGNvbHVtbi5kb21haW5WYWx1ZXMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAvXlxcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHZhbHVlIHx8IG9wdGlvbi5pZCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbHVtbi50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgIGlmICh0aGlzLmlzRWRpdGlvbihyZWNvcmQpKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIGxldCBkYXRlID0gbW9tZW50KHZhbHVlKTtcbiAgICAgICAgICB2YWx1ZSA9IGRhdGUuZm9ybWF0KCk7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbY29sdW1uLm5hbWVdLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0VkaXRpb24ocmVjb3JkKSAmJiB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBhY2Nlc3MgYW4gZW50aXR5J3MgdmFsaWRhdGlvbiB2YWx1ZXNcbiAgICogQHBhcmFtIGNvbHVtbiBDb2x1bW5cbiAgICogQHBhcmFtIHZhbGlkYXRpb25UeXBlIHN0cmluZ1xuICAgKiBAcmV0dXJucyBBbnkgdmFsdWUgKGZhbHNlIGlmIG5vIHZhbGlkYXRpb24gb3Igbm90IHRoZSBvbmUgY29uY2VybmVkKVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldFZhbGlkYXRpb25BdHRyaWJ1dGVWYWx1ZShjb2x1bW46IEVudGl0eVRhYmxlQ29sdW1uLCB2YWxpZGF0aW9uVHlwZTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoY29sdW1uLnZhbGlkYXRpb24gIT09IHVuZGVmaW5lZCAmJiBjb2x1bW4udmFsaWRhdGlvblt2YWxpZGF0aW9uVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGNvbHVtbi52YWxpZGF0aW9uW3ZhbGlkYXRpb25UeXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0VkaXRpb24ocmVjb3JkKSB7XG4gICAgcmV0dXJuIHJlY29yZC5lbnRpdHkuZWRpdGlvbiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHR5cGUgb2YgcmVuZGVyZXIgb2YgYSBjb2x1bW5cbiAgICogQHBhcmFtIGNvbHVtbiBDb2x1bW5cbiAgICogQHJldHVybnMgUmVuZGVyZXIgdHlwZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldENvbHVtblJlbmRlcmVyKGNvbHVtbjogRW50aXR5VGFibGVDb2x1bW4pOiBFbnRpdHlUYWJsZUNvbHVtblJlbmRlcmVyIHtcbiAgICBpZiAoY29sdW1uLnJlbmRlcmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBjb2x1bW4ucmVuZGVyZXI7XG4gICAgfVxuICAgIHJldHVybiBFbnRpdHlUYWJsZUNvbHVtblJlbmRlcmVyLkRlZmF1bHQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB0YWJsZSBuZ0NsYXNzXG4gICAqIEByZXR1cm5zIG5nQ2xhc3NcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRUYWJsZUNsYXNzKCk6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdpZ28tZW50aXR5LXRhYmxlLXdpdGgtc2VsZWN0aW9uJzogdGhpcy5zZWxlY3Rpb25cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGhlYWRlciBuZ0NsYXNzXG4gICAqIEByZXR1cm5zIG5nQ2xhc3NcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRIZWFkZXJDbGFzcygpOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIGNvbnN0IGZ1bmMgPSB0aGlzLnRlbXBsYXRlLmhlYWRlckNsYXNzRnVuYztcbiAgICBpZiAoZnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYygpO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgcm93IG5nQ2xhc3NcbiAgICogQHBhcmFtIHJlY29yZCBSZWNvcmRcbiAgICogQHJldHVybnMgbmdDbGFzc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldFJvd0NsYXNzKHJlY29yZDogRW50aXR5UmVjb3JkPG9iamVjdD4pOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIGNvbnN0IGVudGl0eSA9IHJlY29yZC5lbnRpdHk7XG4gICAgY29uc3QgZnVuYyA9IHRoaXMudGVtcGxhdGUucm93Q2xhc3NGdW5jO1xuICAgIGlmIChmdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiBmdW5jKGVudGl0eSwgcmVjb3JkKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJvdyBuZ0NsYXNzXG4gICAqIEBwYXJhbSByZWNvcmQgUmVjb3JkXG4gICAqIEBwYXJhbSBjb2x1bW4gQ29sdW1uXG4gICAqIEByZXR1cm5zIG5nQ2xhc3NcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRDZWxsQ2xhc3MocmVjb3JkOiBFbnRpdHlSZWNvcmQ8b2JqZWN0PiwgY29sdW1uOiBFbnRpdHlUYWJsZUNvbHVtbik6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgY29uc3QgZW50aXR5ID0gcmVjb3JkLmVudGl0eTtcbiAgICBjb25zdCBjbHMgPSB7fTtcblxuICAgIGNvbnN0IHRhYmxlRnVuYyA9IHRoaXMudGVtcGxhdGUuY2VsbENsYXNzRnVuYztcbiAgICBpZiAodGFibGVGdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oY2xzLCB0YWJsZUZ1bmMoZW50aXR5LCBjb2x1bW4sIHJlY29yZCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbHVtbkZ1bmMgPSBjb2x1bW4uY2VsbENsYXNzRnVuYztcbiAgICBpZiAoY29sdW1uRnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNscywgY29sdW1uRnVuYyhlbnRpdHksIHJlY29yZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjbHM7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uXG4gICAqIEBwYXJhbSByZWNvcmQgUmVjb3JkXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25CdXR0b25DbGljayhcbiAgICBjbGlja0Z1bmM6IChlbnRpdHk6IG9iamVjdCwgcmVjb3JkPzogRW50aXR5UmVjb3JkPG9iamVjdD4pID0+IHZvaWQsXG4gICAgcmVjb3JkOiBFbnRpdHlSZWNvcmQ8b2JqZWN0PlxuICApIHtcbiAgICB0aGlzLmVuYWJsZUVkaXQocmVjb3JkKTtcbiAgICBpZiAodHlwZW9mIGNsaWNrRnVuYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2xpY2tGdW5jKHJlY29yZC5lbnRpdHksIHJlY29yZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGNvbHVtbiBuYW1lIHdpdGhvdXQgaGlzIFwicHJvcGVydGllc1wiIHRhZyAodXNlZnVsIGZvciBlZGl0aW9uIHdvcmtzcGFjZSBwcm9wZXJ0aWVzKVxuICAgKi9cbiAgcHVibGljIGdldENvbHVtbktleVdpdGhvdXRQcm9wZXJ0aWVzVGFnKGNvbHVtbjogc3RyaW5nKSB7XG4gICAgaWYgKGNvbHVtbi5pbmNsdWRlcygncHJvcGVydGllcy4nKSkge1xuICAgICAgcmV0dXJuIGNvbHVtbi5zcGxpdCgnLicpWzFdO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1uO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidGFibGUtY29udGFpbmVyXCI+XG4gICAgPHRhYmxlIG1hdC10YWJsZSBtYXRTb3J0IFtuZ0NsYXNzXT1cImdldFRhYmxlQ2xhc3MoKVwiIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJhY2tCeV09XCJnZXRUcmFja0J5RnVuY3Rpb24oKVwiIChtYXRTb3J0Q2hhbmdlKT1cIm9uU29ydCgkZXZlbnQpXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic2VsZWN0aW9uQ2hlY2tib3hcIiBjbGFzcz1cIm1hdC1jZWxsLWNoZWNrYm94XCI+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RNYW55XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3Rpb25TdGF0ZSQgfCBhc3luYyBhcyBzZWxlY3Rpb25TdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cIm9uVG9nZ2xlUm93cygkZXZlbnQuY2hlY2tlZClcIiBbY2hlY2tlZF09XCJzZWxlY3Rpb25TdGF0ZSA9PT0gZW50aXR5VGFibGVTZWxlY3Rpb25TdGF0ZS5BbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0aW9uU3RhdGUgPT09IGVudGl0eVRhYmxlU2VsZWN0aW9uU3RhdGUuU29tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByZWNvcmRcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IChtb3VzZWRvd24pPVwiJGV2ZW50LnNoaWZ0S2V5ID8gJGV2ZW50LnByZXZlbnREZWZhdWx0KCkgOiBudWxsXCIgKGNsaWNrKT1cIiRldmVudC5zaGlmdEtleSA/XG4gICAgICAgICAgICAgICAgb25TaGlmdFRvZ2dsZVJvdyghcm93SXNTZWxlY3RlZChyZWNvcmQpLCByZWNvcmQsICRldmVudCkgOiAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiAoY2hhbmdlKT1cIm9uVG9nZ2xlUm93KCRldmVudC5jaGVja2VkLHJlY29yZClcIlxuICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInJvd0lzU2VsZWN0ZWQocmVjb3JkKVwiPlxuICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cImNvbHVtbi5uYW1lXCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiB0ZW1wbGF0ZS5jb2x1bW5zXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uSXNTb3J0YWJsZShjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXIgW21hdFRvb2x0aXBdPVwiY29sdW1uLnRvb2x0aXAgPyBjb2x1bW4udG9vbHRpcCA6IHVuZGVmaW5lZFwiPlxuICAgICAgICAgICAgICAgICAgICB7e2NvbHVtbi50aXRsZX19XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbklzU29ydGFibGUoY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgW21hdFRvb2x0aXBdPVwiY29sdW1uLnRvb2x0aXAgPyBjb2x1bW4udG9vbHRpcCA6IHVuZGVmaW5lZFwiPlxuICAgICAgICAgICAgICAgICAgICB7e2NvbHVtbi50aXRsZX19XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0Q29sdW1uUmVuZGVyZXIoY29sdW1uKSBhcyBjb2x1bW5SZW5kZXJlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW5SZW5kZXJlciA9PT0gZW50aXR5VGFibGVDb2x1bW5SZW5kZXJlci5EZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm1hdENlbGxEZWY9XCJsZXQgcmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgY2xhc3M9XCJtYXQtY2VsbC10ZXh0XCIgKm5nSWY9XCIhaXNVcmwoZ2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pKTtlbHNlIGlzQW5VcmxEZWZhdWx0XCIgW25nQ2xhc3NdPVwiZ2V0Q2VsbENsYXNzKHJlY29yZCwgY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Z2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2lzQW5VcmxEZWZhdWx0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCBjbGFzcz1cIm1hdC1jZWxsLXRleHRcIiBbbmdDbGFzc109XCJnZXRDZWxsQ2xhc3MocmVjb3JkLCBjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7e2dldFZhbHVlKHJlY29yZCwgY29sdW1uKX19XCIgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiaXNJbWcoZ2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pKTtlbHNlIG5vdEltZ1wiIHNyYz1cInt7KGdldFZhbHVlKHJlY29yZCwgY29sdW1uKSB8IHNlY3VyZUltYWdlKSB8IGFzeW5jfX1cIiB3aWR0aD1cIjUwXCIgaGVpZ3RoPVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub3RJbWc+PHNwYW4+e3tcbiAgICAgICAgICAgICAgICAgICAgICAnaWdvLmNvbW1vbi5lbnRpdHktdGFibGUudGFyZ2V0SHRtbFVybCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtblJlbmRlcmVyID09PSBlbnRpdHlUYWJsZUNvbHVtblJlbmRlcmVyLkhUTUxcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbWF0Q2VsbERlZj1cImxldCByZWNvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCBjbGFzcz1cIm1hdC1jZWxsLXRleHRcIiAqbmdJZj1cIiFpc1VybChnZXRWYWx1ZShyZWNvcmQsIGNvbHVtbikpO2Vsc2UgaXNBblVybEhUTUxcIiBbbmdDbGFzc109XCJnZXRDZWxsQ2xhc3MocmVjb3JkLCBjb2x1bW4pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiZ2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNpc0FuVXJsSFRNTD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgY2xhc3M9XCJtYXQtY2VsbC10ZXh0XCIgW25nQ2xhc3NdPVwiZ2V0Q2VsbENsYXNzKHJlY29yZCwgY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwie3tnZXRWYWx1ZShyZWNvcmQsIGNvbHVtbil9fVwiIHRhcmdldD0nX2JsYW5rJyByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImlzSW1nKGdldFZhbHVlKHJlY29yZCwgY29sdW1uKSk7ZWxzZSBub3RJbWdcIiBzcmM9XCJ7eyhnZXRWYWx1ZShyZWNvcmQsIGNvbHVtbikgfCBzZWN1cmVJbWFnZSkgfCBhc3luY319XCIgd2lkdGg9XCI1MFwiIGhlaWd0aD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90SW1nPjxzcGFuPnt7ICdpZ28uZ2VvLnRhcmdldEh0bWxVcmwnIHxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUgfX0gPC9zcGFuPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtblJlbmRlcmVyID09PSBlbnRpdHlUYWJsZUNvbHVtblJlbmRlcmVyLlVuc2FuaXRpemVkSFRNTFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICptYXRDZWxsRGVmPVwibGV0IHJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsIGNsYXNzPVwibWF0LWNlbGwtdGV4dCBlZGl0aW9uXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAqbmdJZj1cImlzRWRpdGlvbihyZWNvcmQpO2Vsc2UgaXNVbnNhbml0aXplZEhUTUxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiZ2V0Q2VsbENsYXNzKHJlY29yZCwgY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXBpY2tlclwiICpuZ0lmPVwiY29sdW1uLnR5cGUgPT09ICdkYXRlJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb2x1bW4ubmFtZVwiIHZhbHVlPVwie3tnZXRWYWx1ZShyZWNvcmQsIGNvbHVtbil9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRlQ2hhbmdlKT1cIm9uRGF0ZUNoYW5nZShjb2x1bW4ubmFtZSwgcmVjb3JkLCAkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0aW1lXCIgKm5nSWY9XCJjb2x1bW4udHlwZSA9PT0gJ3RpbWUnXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb2x1bW4ubmFtZVwiIHN0ZXA9XCI5MDBcIiAoZm9jdXMpPVwiY29sdW1uLm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXByZXNzKT1cImNvbHVtbi5vbkNoYW5nZSgkZXZlbnQpXCIgKGJsdXIpPVwiY29sdW1uLm9uQmx1cigkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImNsYXNzX251bWJlcl9lZGl0aW9uXCIgKm5nSWY9XCJjb2x1bW4udHlwZSA9PT0gJ251bWJlcidcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbHVtbi5uYW1lXCIgc3RlcD1cInt7Y29sdW1uLnN0ZXB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2dldFZhbHVlKHJlY29yZCxjb2x1bW4pfX1cIiAoaW5wdXQpPVwib25WYWx1ZUNoYW5nZShjb2x1bW4ubmFtZSwgcmVjb3JkLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seT1cInt7Z2V0VmFsaWRhdGlvbkF0dHJpYnV0ZVZhbHVlKGNvbHVtbiwgJ3JlYWRvbmx5Jyl9fVwiIHJlcXVpcmVkPVwie3tnZXRWYWxpZGF0aW9uQXR0cmlidXRlVmFsdWUoY29sdW1uLCAnbWFuZGF0b3J5Jyl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwie3tnZXRWYWxpZGF0aW9uQXR0cmlidXRlVmFsdWUoY29sdW1uLCAnbWluVmFsdWUnKX19XCIgbWF4PVwie3tnZXRWYWxpZGF0aW9uQXR0cmlidXRlVmFsdWUoY29sdW1uLCAnbWF4VmFsdWUnKX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgKm5nSWY9XCIhY29sdW1uLnR5cGUgfHwgY29sdW1uLnR5cGUgPT09J3N0cmluZydcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbHVtbi5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7Z2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pfX1cIiAoaW5wdXQpPVwib25WYWx1ZUNoYW5nZShjb2x1bW4ubmFtZSwgcmVjb3JkLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seT1cInt7Z2V0VmFsaWRhdGlvbkF0dHJpYnV0ZVZhbHVlKGNvbHVtbiwgJ3JlYWRvbmx5Jyl9fVwiIHJlcXVpcmVkPVwie3tnZXRWYWxpZGF0aW9uQXR0cmlidXRlVmFsdWUoY29sdW1uLCAnbWFuZGF0b3J5Jyl9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKm5nSWY9XCJjb2x1bW4udHlwZSA9PT0gJ2Jvb2xlYW4nXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb2x1bW4ubmFtZVwiIFtjaGVja2VkXT1cImdldFZhbHVlKHJlY29yZCxjb2x1bW4pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uQm9vbGVhblZhbHVlQ2hhbmdlKGNvbHVtbi5uYW1lLCByZWNvcmQsJGV2ZW50KVwiPjwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0ICpuZ0lmPVwiY29sdW1uLnR5cGUgPT09ICdsaXN0J1wiIHJlcXVpcmVkPVwie3tnZXRWYWxpZGF0aW9uQXR0cmlidXRlVmFsdWUoY29sdW1uLCAnbWFuZGF0b3J5Jyl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb2x1bW4ubmFtZVwiIFttdWx0aXBsZV09XCJjb2x1bW4ubXVsdGlwbGVcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0VmFsdWVDaGFuZ2UoY29sdW1uLm5hbWUsIHJlY29yZCwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImdldFZhbHVlKHJlY29yZCwgY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbHVtbi5kb21haW5WYWx1ZXNcIiBbdmFsdWVdPVwib3B0aW9uLmlkXCIgW2Rpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLnZhbHVlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb2x1bW4ubmFtZVwiICpuZ0lmPVwiY29sdW1uLnR5cGUgPT09ICdhdXRvY29tcGxldGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIiByZXF1aXJlZD1cInt7Z2V0VmFsaWRhdGlvbkF0dHJpYnV0ZVZhbHVlKGNvbHVtbiwgJ21hbmRhdG9yeScpfX1cIiB2YWx1ZT1cInt7Z2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIiAob3B0aW9uU2VsZWN0ZWQpPVwib25BdXRvY29tcGxldGVWYWx1ZUNoYW5nZShjb2x1bW4ubmFtZSwgcmVjb3JkLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWxXaWR0aD1cIjQzMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlcmVkT3B0aW9ucyB8IGFzeW5jXCIgW3ZhbHVlXT1cIm9wdGlvbi5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9wdGlvbi52YWx1ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNpc1Vuc2FuaXRpemVkSFRNTD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgY2xhc3M9XCJtYXQtY2VsbC10ZXh0XCIgKm5nSWY9XCIhaXNVcmwoZ2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pKTtlbHNlIGlzQW5VcmxVbnNhbml0aXplZEhUTUxcIiBbbmdDbGFzc109XCJnZXRDZWxsQ2xhc3MocmVjb3JkLCBjb2x1bW4pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImdldFZhbHVlKHJlY29yZCwgY29sdW1uKSB8IHNhbml0aXplSHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNpc0FuVXJsVW5zYW5pdGl6ZWRIVE1MPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgY2xhc3M9XCJtYXQtY2VsbC10ZXh0XCIgW25nQ2xhc3NdPVwiZ2V0Q2VsbENsYXNzKHJlY29yZCwgY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInt7Z2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pfX1cIiB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiaXNJbWcoZ2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pKTtlbHNlIG5vdEltZ1wiIHNyYz1cInt7KGdldFZhbHVlKHJlY29yZCwgY29sdW1uKSB8IHNlY3VyZUltYWdlKSB8IGFzeW5jfX1cIiB3aWR0aD1cIjUwXCIgaGVpZ3RoPVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90SW1nPjxzcGFuPnt7ICdpZ28uZ2VvLnRhcmdldEh0bWxVcmwnIHwgdHJhbnNsYXRlIH19IDwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uUmVuZGVyZXIgPT09IGVudGl0eVRhYmxlQ29sdW1uUmVuZGVyZXIuSWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcmVjb3JkXCIgY2xhc3M9XCJtYXQtY2VsbC10ZXh0XCIgW25nQ2xhc3NdPVwiZ2V0Q2VsbENsYXNzKHJlY29yZCwgY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJ7e2dldFZhbHVlKHJlY29yZCwgY29sdW1uKXx8IGNvbHVtbi5pY29ufX1cIiAoY2xpY2spPVwiY29sdW1uLm9uQ2xpY2soJGV2ZW50KVwiPjwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtblJlbmRlcmVyID09PSBlbnRpdHlUYWJsZUNvbHVtblJlbmRlcmVyLkJ1dHRvbkdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm1hdENlbGxEZWY9XCJsZXQgcmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgY2xhc3M9XCJtYXQtY2VsbC10ZXh0XCIgW25nQ2xhc3NdPVwiZ2V0Q2VsbENsYXNzKHJlY29yZCwgY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBidXR0b24gb2YgZ2V0VmFsdWUocmVjb3JkLCBjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0VkaXRpb24ocmVjb3JkKSA9PT0gYnV0dG9uLmVkaXRNb2RlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiYnV0dG9uLnN0eWxlID09PSAnbWF0LWljb24tYnV0dG9uJ1wiIGlnb1N0b3BQcm9wYWdhdGlvbiBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiYnV0dG9uLmNvbG9yXCIgKG1vdXNlZG93bik9XCJvbkJ1dHRvbkNsaWNrKGJ1dHRvbi5jbGljaywgcmVjb3JkKVwiIFtkaXNhYmxlZF09XCJidXR0b24uZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cInt7YnV0dG9uLmljb259fVwiPjwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJidXR0b24uc3R5bGUgIT09ICdtYXQtaWNvbi1idXR0b24nXCIgaWdvU3RvcFByb3BhZ2F0aW9uIG1hdC1taW5pLWZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJidXR0b24uY29sb3JcIiAobW91c2Vkb3duKT1cIm9uQnV0dG9uQ2xpY2soYnV0dG9uLmNsaWNrLCByZWNvcmQpXCIgW2Rpc2FibGVkXT1cImJ1dHRvbi5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwie3tidXR0b24uaWNvbn19XCI+PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImhlYWRlcnM7IHN0aWNreTogZml4ZWRIZWFkZXI7XCIgW25nQ2xhc3NdPVwiZ2V0SGVhZGVyQ2xhc3MoKVwiPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgbWF0LXJvdyBpZ29FbnRpdHlUYWJsZVJvdyAqbWF0Um93RGVmPVwibGV0IHJlY29yZDsgY29sdW1uczogaGVhZGVycztcIiBbc2Nyb2xsQmVoYXZpb3JdPVwic2Nyb2xsQmVoYXZpb3JcIiBbbmdDbGFzc109XCJnZXRSb3dDbGFzcyhyZWNvcmQpXCIgW3NlbGVjdGlvbl09XCJzZWxlY3Rpb25cIiBbc2VsZWN0ZWRdPVwicm93SXNTZWxlY3RlZChyZWNvcmQpXCIgKHNlbGVjdCk9XCJvblJvd1NlbGVjdChyZWNvcmQpXCIgKGNsaWNrKT1cIm9uUm93Q2xpY2socmVjb3JkKVwiPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG4gICAgPGlnby1lbnRpdHktdGFibGUtcGFnaW5hdG9yICpuZ0lmPVwid2l0aFBhZ2luYXRvclwiIFtzdG9yZV09XCJzdG9yZVwiIFtwYWdpbmF0b3JPcHRpb25zXT1cInBhZ2luYXRvck9wdGlvbnNcIiBbZW50aXR5U29ydENoYW5nZSRdPVwiZW50aXR5U29ydENoYW5nZSRcIiAocGFnaW5hdG9yQ2hhbmdlKT1cInBhZ2luYXRvckNoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9pZ28tZW50aXR5LXRhYmxlLXBhZ2luYXRvcj5cbjwvZGl2PiJdfQ==