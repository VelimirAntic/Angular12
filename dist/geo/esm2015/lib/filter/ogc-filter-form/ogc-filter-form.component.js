import { Component, Input } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { OgcFilterWriter } from '../../filter/shared/ogc-filter';
import { OgcFilterOperator } from '../../filter/shared/ogc-filter.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../wkt/shared/wkt.service";
function OgcFilterFormComponent_mat_form_field_13_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    i0.ɵɵproperty("value", field_r12.alias)("id", field_r12.name)("matTooltip", field_r12.alias);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r12.alias, " ");
} }
function OgcFilterFormComponent_mat_form_field_13_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function OgcFilterFormComponent_mat_form_field_13_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.clearSelectedField(); });
    i0.ɵɵelement(1, "mat-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r11.currentFilter.active);
} }
function OgcFilterFormComponent_mat_form_field_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 17);
    i0.ɵɵlistener("mouseenter", function OgcFilterFormComponent_mat_form_field_13_Template_mat_form_field_mouseenter_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.inputClearable = "selectField"; })("mouseleave", function OgcFilterFormComponent_mat_form_field_13_Template_mat_form_field_mouseleave_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.inputClearable = undefined; });
    i0.ɵɵelementStart(1, "input", 18);
    i0.ɵɵlistener("input", function OgcFilterFormComponent_mat_form_field_13_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.updateFieldsList($event.target.value); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵpipe(4, "async");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵpipe(6, "async");
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-autocomplete", 19, 20);
    i0.ɵɵlistener("optionSelected", function OgcFilterFormComponent_mat_form_field_13_Template_mat_autocomplete_optionSelected_8_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.changeField($event.option.id); });
    i0.ɵɵtemplate(10, OgcFilterFormComponent_mat_form_field_13_mat_option_10_Template, 2, 4, "mat-option", 21);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, OgcFilterFormComponent_mat_form_field_13_button_12_Template, 2, 1, "button", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = i0.ɵɵreference(9);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("floatLabel", ctx_r0.floatLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 8, "igo.geo.sourceFields.selectField"))("disabled", !ctx_r0.currentFilter.active)("matAutocomplete", _r9)("value", i0.ɵɵpipeBind1(3, 10, ctx_r0.selectedField$) ? i0.ɵɵpipeBind1(4, 12, ctx_r0.selectedField$).alias : "")("matTooltip", i0.ɵɵpipeBind1(5, 14, ctx_r0.selectedField$) ? i0.ɵɵpipeBind1(6, 16, ctx_r0.selectedField$).alias : i0.ɵɵpipeBind1(7, 18, "igo.geo.sourceFields.selectField"));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 20, ctx_r0.filteredFields$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.currentFilter.propertyName && ctx_r0.inputClearable === "selectField" && ctx_r0.currentFilter.active);
} }
function OgcFilterFormComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 3);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const operator_r20 = ctx.$implicit;
    i0.ɵɵproperty("value", operator_r20.key)("matTooltip", i0.ɵɵpipeBind1(1, 3, "igo.geo.operators.tooltip." + operator_r20.key));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "igo.geo.operators." + operator_r20.key), " ");
} }
function OgcFilterFormComponent_mat_form_field_27_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const igoSpatialSelector_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", igoSpatialSelector_r22.type);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.spatialSelector." + igoSpatialSelector_r22.type), " ");
} }
function OgcFilterFormComponent_mat_form_field_27_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 26);
    i0.ɵɵelementStart(1, "mat-select", 27);
    i0.ɵɵlistener("selectionChange", function OgcFilterFormComponent_mat_form_field_27_Template_mat_select_selectionChange_1_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.changeSpatialSelector($event.value); });
    i0.ɵɵtemplate(2, OgcFilterFormComponent_mat_form_field_27_mat_option_2_Template, 3, 4, "mat-option", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r2.currentFilter.active)("value", ctx_r2.currentFilter.igoSpatialSelector);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.igoSpatialSelectors);
} }
function OgcFilterFormComponent_mat_form_field_29_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", value_r28)("matTooltip", value_r28);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r28, " ");
} }
function OgcFilterFormComponent_mat_form_field_29_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function OgcFilterFormComponent_mat_form_field_29_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.clearProperty(); });
    i0.ɵɵelement(1, "mat-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r27.currentFilter.active);
} }
function OgcFilterFormComponent_mat_form_field_29_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 30);
    i0.ɵɵlistener("mouseenter", function OgcFilterFormComponent_mat_form_field_29_Template_mat_form_field_mouseenter_0_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.inputClearable = "selectProperty"; })("mouseleave", function OgcFilterFormComponent_mat_form_field_29_Template_mat_form_field_mouseleave_0_listener() { i0.ɵɵrestoreView(_r32); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.inputClearable = undefined; });
    i0.ɵɵelementStart(1, "input", 18);
    i0.ɵɵlistener("input", function OgcFilterFormComponent_mat_form_field_29_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.updateValuesList($event.target.value); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-autocomplete", 19, 31);
    i0.ɵɵlistener("optionSelected", function OgcFilterFormComponent_mat_form_field_29_Template_mat_autocomplete_optionSelected_3_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.changeProperty($event.option.value); });
    i0.ɵɵtemplate(5, OgcFilterFormComponent_mat_form_field_29_mat_option_5_Template, 2, 3, "mat-option", 32);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OgcFilterFormComponent_mat_form_field_29_button_7_Template, 2, 1, "button", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r25 = i0.ɵɵreference(4);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("floatLabel", ctx_r3.floatLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 8, "igo.geo.filter.placeholder"))("disabled", !ctx_r3.currentFilter.active)("matAutocomplete", _r25)("value", ctx_r3.detectProperty() === "expression" ? ctx_r3.currentFilter.expression : ctx_r3.currentFilter.pattern)("matTooltip", ctx_r3.detectProperty() === "expression" ? ctx_r3.currentFilter.expression || "" : ctx_r3.currentFilter.pattern || "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 10, ctx_r3.filteredValues$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.isClearable() && ctx_r3.inputClearable === "selectProperty" && ctx_r3.currentFilter.active);
} }
function OgcFilterFormComponent_mat_form_field_34_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function OgcFilterFormComponent_mat_form_field_34_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.currentFilter.igoSNRC = ""; });
    i0.ɵɵelement(1, "mat-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r36.currentFilter.active && ctx_r36.inputClearable === "selectSNRC" && ctx_r36.currentFilter.active);
} }
function OgcFilterFormComponent_mat_form_field_34_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 34);
    i0.ɵɵlistener("mouseenter", function OgcFilterFormComponent_mat_form_field_34_Template_mat_form_field_mouseenter_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.inputClearable = "selectSNRC"; })("mouseleave", function OgcFilterFormComponent_mat_form_field_34_Template_mat_form_field_mouseleave_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.inputClearable = undefined; });
    i0.ɵɵelementStart(1, "input", 35);
    i0.ɵɵlistener("input", function OgcFilterFormComponent_mat_form_field_34_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.changeSNRC($event.target.value); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OgcFilterFormComponent_mat_form_field_34_button_3_Template, 2, 1, "button", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("floatLabel", ctx_r4.floatLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 5, "igo.geo.filter.placeholderSnrc"))("value", ctx_r4.currentFilter.igoSNRC)("matTooltip", ctx_r4.currentFilter.igoSNRC ? ctx_r4.currentFilter.igoSNRC : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.currentFilter.igoSNRC);
} }
function OgcFilterFormComponent_ng_container_36_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function OgcFilterFormComponent_ng_container_36_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return ctx_r44.changeMapExtentGeometry(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r43 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r43.currentFilter.active)("disabled", !ctx_r43.currentFilter.active)("matTooltip", i0.ɵɵpipeBind1(1, 3, "igo.geo.spatialSelector.btnSetExtent"));
} }
function OgcFilterFormComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OgcFilterFormComponent_ng_container_36_button_1_Template, 3, 5, "button", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.currentFilter.igoSpatialSelector === "fixedExtent");
} }
function OgcFilterFormComponent_mat_form_field_39_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r49 = ctx.$implicit;
    i0.ɵɵproperty("value", value_r49)("matTooltip", value_r49);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r49, " ");
} }
function OgcFilterFormComponent_mat_form_field_39_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function OgcFilterFormComponent_mat_form_field_39_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(2); return ctx_r50.clearProperty(1); });
    i0.ɵɵelement(1, "mat-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r48.currentFilter.active);
} }
function OgcFilterFormComponent_mat_form_field_39_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 39);
    i0.ɵɵlistener("mouseenter", function OgcFilterFormComponent_mat_form_field_39_Template_mat_form_field_mouseenter_0_listener() { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.inputClearable = "selectProperty1"; })("mouseleave", function OgcFilterFormComponent_mat_form_field_39_Template_mat_form_field_mouseleave_0_listener() { i0.ɵɵrestoreView(_r53); const ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.inputClearable = undefined; });
    i0.ɵɵelementStart(1, "input", 40);
    i0.ɵɵlistener("input", function OgcFilterFormComponent_mat_form_field_39_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r55 = i0.ɵɵnextContext(); return ctx_r55.updateValuesList($event.target.value, 1); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-autocomplete", 19, 41);
    i0.ɵɵlistener("optionSelected", function OgcFilterFormComponent_mat_form_field_39_Template_mat_autocomplete_optionSelected_3_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r56 = i0.ɵɵnextContext(); return ctx_r56.changeNumericProperty($event.option.value, 1); });
    i0.ɵɵtemplate(5, OgcFilterFormComponent_mat_form_field_39_mat_option_5_Template, 2, 3, "mat-option", 32);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OgcFilterFormComponent_mat_form_field_39_button_7_Template, 2, 1, "button", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r46 = i0.ɵɵreference(4);
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("floatLabel", ctx_r6.floatLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 7, "igo.geo.filter.placeholder"))("disabled", !ctx_r6.currentFilter.active)("matAutocomplete", _r46)("value", ctx_r6.detectProperty(1) === "lowerBoundary" ? ctx_r6.currentFilter.lowerBoundary : ctx_r6.currentFilter.begin);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 9, ctx_r6.filteredValues$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r6.isClearable(1) && ctx_r6.inputClearable === "selectProperty1" && ctx_r6.currentFilter.active);
} }
function OgcFilterFormComponent_mat_form_field_40_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r60 = ctx.$implicit;
    i0.ɵɵproperty("value", value_r60)("matTooltip", value_r60);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r60, " ");
} }
function OgcFilterFormComponent_mat_form_field_40_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function OgcFilterFormComponent_mat_form_field_40_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r62); const ctx_r61 = i0.ɵɵnextContext(2); return ctx_r61.clearProperty(2); });
    i0.ɵɵelement(1, "mat-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r59.currentFilter.active);
} }
function OgcFilterFormComponent_mat_form_field_40_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 39);
    i0.ɵɵlistener("mouseenter", function OgcFilterFormComponent_mat_form_field_40_Template_mat_form_field_mouseenter_0_listener() { i0.ɵɵrestoreView(_r64); const ctx_r63 = i0.ɵɵnextContext(); return ctx_r63.inputClearable = "selectProperty2"; })("mouseleave", function OgcFilterFormComponent_mat_form_field_40_Template_mat_form_field_mouseleave_0_listener() { i0.ɵɵrestoreView(_r64); const ctx_r65 = i0.ɵɵnextContext(); return ctx_r65.inputClearable = undefined; });
    i0.ɵɵelementStart(1, "input", 40);
    i0.ɵɵlistener("input", function OgcFilterFormComponent_mat_form_field_40_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r66 = i0.ɵɵnextContext(); return ctx_r66.updateValuesList($event.target.value, 2); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-autocomplete", 19, 42);
    i0.ɵɵlistener("optionSelected", function OgcFilterFormComponent_mat_form_field_40_Template_mat_autocomplete_optionSelected_3_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r67 = i0.ɵɵnextContext(); return ctx_r67.changeNumericProperty($event.option.value, 2); });
    i0.ɵɵtemplate(5, OgcFilterFormComponent_mat_form_field_40_mat_option_5_Template, 2, 3, "mat-option", 32);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OgcFilterFormComponent_mat_form_field_40_button_7_Template, 2, 1, "button", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r57 = i0.ɵɵreference(4);
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("floatLabel", ctx_r7.floatLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 7, "igo.geo.filter.placeholder"))("disabled", !ctx_r7.currentFilter.active)("matAutocomplete", _r57)("value", ctx_r7.detectProperty(2) === "upperBoundary" ? ctx_r7.currentFilter.upperBoundary : ctx_r7.currentFilter.end);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 9, ctx_r7.filteredValues$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.isClearable(2) && ctx_r7.inputClearable === "selectProperty2" && ctx_r7.currentFilter.active);
} }
function OgcFilterFormComponent_igo_ogc_filter_time_41_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-ogc-filter-time", 43);
    i0.ɵɵlistener("datasourceChange", function OgcFilterFormComponent_igo_ogc_filter_time_41_Template_igo_ogc_filter_time_datasourceChange_0_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r68 = i0.ɵɵnextContext(); return ctx_r68.datasource = $event; })("currentFilterChange", function OgcFilterFormComponent_igo_ogc_filter_time_41_Template_igo_ogc_filter_time_currentFilterChange_0_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r70 = i0.ɵɵnextContext(); return ctx_r70.currentFilter = $event; })("changeProperty", function OgcFilterFormComponent_igo_ogc_filter_time_41_Template_igo_ogc_filter_time_changeProperty_0_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r71 = i0.ɵɵnextContext(); return ctx_r71.changeProperty($event.value, $event.pos); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("datasource", ctx_r8.datasource)("currentFilter", ctx_r8.currentFilter);
} }
const _c0 = function (a0, a1) { return { "logical": a0, "logicalHidden": a1 }; };
const _c1 = function (a0, a1) { return { "operator": a0, "dualInput": a1 }; };
const _c2 = function () { return ["expression", "pattern"]; };
const _c3 = function () { return ["lowerBoundary", "begin"]; };
const _c4 = function () { return ["upperBoundary", "end"]; };
export class OgcFilterFormComponent {
    constructor(wktService) {
        this.wktService = wktService;
        this.ogcFilterOperator = OgcFilterOperator;
        this.ogcFilterOperators$ = new BehaviorSubject(undefined);
        this.value = '';
        this.selectedField$ = new BehaviorSubject(undefined);
        this.fields$ = new BehaviorSubject([]);
        this.color = 'primary';
        this.currentFilterIsSpatial$ = new BehaviorSubject(false);
        this.defaultStepMillisecond = 6000;
        this._snrc = '';
        this.floatLabel = 'never';
        // TODO: Filter permitted operator based on wfscapabilities
        // Need to work on regex on XML capabilities because
        // comaparison operator's name varies between WFS servers...
        // Ex: IsNull vs PropertyIsNull vs IsNil ...
        this.allOgcFilterOperators = new OgcFilterWriter().operators;
        this.ogcFilterOperators$.next(this.allOgcFilterOperators);
        this.igoSpatialSelectors = [
            {
                type: 'fixedExtent'
            },
            {
                type: 'snrc'
            }
        ];
        // TODO: selectFeature & drawFeature
    }
    set snrc(value) {
        const checkSNRC50k = /^\d{2}[a-l][0,1][0-9]$/gi;
        const checkSNRC250k = /^\d{2}[a-p]$/gi;
        const checkSNRC1m = /^\d{2}$/gi;
        if (checkSNRC1m.test(value) ||
            checkSNRC250k.test(value) ||
            checkSNRC50k.test(value)) {
            this._snrc = value;
            this.currentFilter.igoSNRC = value;
        }
    }
    get snrc() {
        return this._snrc;
    }
    get activeFilters() {
        return this.datasource.options.ogcFilters.interfaceOgcFilters.filter((f) => f.active === true);
    }
    get allowedOperators() {
        return new OgcFilterWriter().computeAllowedOperators(this.fields$.value, this.currentFilter.propertyName, this.datasource.options.ogcFilters.allowedOperatorsType);
    }
    ngOnInit() {
        if (this.datasource.options.sourceFields) {
            const sFields = this.datasource.options.sourceFields.filter((sf) => sf.excludeFromOgcFilters === undefined || !sf.excludeFromOgcFilters);
            sFields.map((sfs) => {
                if (sfs.values) {
                    sfs.values.sort();
                }
            });
            this.fields$.next(sFields);
        }
        this.updateFieldsList();
        this.selectedField$.next(this.fields$.value.find((f) => f.name === this.currentFilter.propertyName));
        this.updateValuesList();
        this.selectedField$.subscribe((f) => {
            this.ogcFilterOperators$.next(this.allowedOperators);
            if (Object.keys(this.allowedOperators).indexOf(this.currentFilter.operator) === -1) {
                this.currentFilter.operator = Object.keys(this.allowedOperators)[0];
                this.currentFilter.operator = Object.keys(this.allowedOperators)[0];
            }
            this.updateValuesList();
        });
        this.currentFilterIsSpatial();
    }
    updateFieldsList(value) {
        this.filteredFields$ =
            value && value.length > 0 ? of(this._filterFields(value)) : this.fields$;
        if (this.fields$.value.find((f) => f.name === value)) {
            this.changeField(value);
        }
    }
    updateValuesList(value, pos) {
        this.filteredValues$ =
            value && value.length > 0
                ? of(this._filterValues(value))
                : this.selectedField$.value
                    ? of(this.selectedField$.value.values)
                    : of([]);
        if (value && value.length >= 1) {
            this.changeProperty(value, pos);
        }
    }
    _filterFields(value) {
        const keywordRegex = new RegExp(value.normalize('NFD').replace(/[\u0300-\u036f]/g, ''), 'gi');
        return this.fields$.value.filter((val) => keywordRegex.test(val.alias.normalize('NFD').replace(/[\u0300-\u036f]/g, '')));
    }
    _filterValues(value) {
        const keywordRegex = new RegExp(value
            .toString()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''), 'gi');
        return this.selectedField$.value.values.filter((val) => val && keywordRegex.test(val
            .toString()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')));
    }
    clearSelectedField() {
        this.currentFilter.propertyName = '';
        this.selectedField$.next(undefined);
        this.clearProperty();
    }
    isClearable(pos) {
        const detectedProperty = this.detectProperty(pos);
        if (detectedProperty) {
            return this.currentFilter[detectedProperty];
        }
    }
    clearProperty(pos) {
        // this.autoCompleteInputValues.closePanel();
        const detectedProperty = this.detectProperty(pos);
        if (detectedProperty) {
            return (this.currentFilter[detectedProperty] = '');
        }
    }
    toggleFilterState(event) {
        this.datasource.options.ogcFilters.interfaceOgcFilters.find((f) => f.filterid === this.currentFilter.filterid).active = event.checked;
        this.refreshFilters();
    }
    deleteFilter() {
        const ogcFilters = this.datasource.options.ogcFilters;
        ogcFilters.interfaceOgcFilters = ogcFilters.interfaceOgcFilters.filter((f) => f.filterid !== this.currentFilter.filterid);
        this.refreshFilters();
    }
    changeLogical(logical) {
        this.currentFilter.parentLogical = logical;
        this.refreshFilters();
    }
    changeOperator(operator) {
        this.currentFilter.operator = operator;
        this.currentFilterIsSpatial();
        if (this.currentFilterIsSpatial$.value &&
            this.currentFilter.wkt_geometry.length === 0) {
            this.changeSpatialSelector(this.currentFilter.igoSpatialSelector);
        }
        else {
            this.refreshFilters();
        }
    }
    changeField(field) {
        this.currentFilter.propertyName = field;
        this.selectedField$.next(this.fields$.value.find((f) => f.name === this.currentFilter.propertyName));
        this.refreshFilters();
    }
    // Issue with mapserver 7.2 and Postgis layers. Fixed in 7.4
    // Due to this issue, the checkbox is hide.
    changeCaseSensitive(matchCase) {
        this.currentFilter.matchCase = matchCase.checked;
        this.refreshFilters();
    }
    changeProperty(value, pos, refreshFilter = true) {
        const detectedProperty = this.detectProperty(pos);
        if (detectedProperty) {
            this.datasource.options.ogcFilters.interfaceOgcFilters.find((f) => f.filterid === this.currentFilter.filterid)[detectedProperty] = value;
            if (refreshFilter) {
                this.refreshFilters();
            }
        }
    }
    changeNumericProperty(value, pos) {
        this.changeProperty(parseFloat(value), pos);
    }
    changeSpatialSelector(value) {
        this.currentFilter.igoSpatialSelector = value;
        if (value === 'fixedExtent') {
            this.changeMapExtentGeometry(false);
        }
        this.currentFilterIsSpatial();
        this.refreshFilters();
    }
    changeSNRC(value) {
        this.snrc = value;
        this.changeSNRCGeometry();
    }
    changeSNRCGeometry() {
        const interfaceOgcFilter = this.datasource.options.ogcFilters.interfaceOgcFilters.find((f) => f.filterid === this.currentFilter.filterid);
        if (!interfaceOgcFilter) {
            return;
        }
        if (this.snrc && this.currentFilter.igoSpatialSelector === 'snrc') {
            this.currentFilter.wkt_geometry = this.wktService.snrcToWkt(this.snrc, this.map.projection).wktPoly;
        }
        this.refreshFilters();
    }
    changeMapExtentGeometry(refresh = true) {
        const interfaceOgcFilter = this.datasource.options.ogcFilters.interfaceOgcFilters.find((f) => f.filterid === this.currentFilter.filterid);
        if (!interfaceOgcFilter) {
            return;
        }
        if (this.currentFilter.igoSpatialSelector === 'fixedExtent') {
            this.currentFilter.wkt_geometry = this.wktService.extentToWkt(this.map.projection, this.map.viewController.getExtent(), this.map.projection).wktPoly;
        }
        if (refresh) {
            this.refreshFilters();
        }
    }
    detectProperty(pos) {
        switch (this.currentFilter.operator) {
            case OgcFilterOperator.PropertyIsNotEqualTo:
            case OgcFilterOperator.PropertyIsEqualTo:
            case OgcFilterOperator.PropertyIsGreaterThan:
            case OgcFilterOperator.PropertyIsGreaterThanOrEqualTo:
            case OgcFilterOperator.PropertyIsLessThan:
            case OgcFilterOperator.PropertyIsLessThanOrEqualTo:
                return 'expression';
            case OgcFilterOperator.PropertyIsLike:
                return 'pattern';
            case OgcFilterOperator.PropertyIsBetween:
                return pos && pos === 1
                    ? 'lowerBoundary'
                    : pos && pos === 2
                        ? 'upperBoundary'
                        : undefined;
            case OgcFilterOperator.During:
                return pos && pos === 1
                    ? 'begin'
                    : pos && pos === 2
                        ? 'end'
                        : undefined;
            default:
                return;
        }
    }
    currentFilterIsSpatial() {
        let isSpatial = false;
        if (this.currentFilter) {
            isSpatial =
                [
                    OgcFilterOperator.Contains,
                    OgcFilterOperator.Intersects,
                    OgcFilterOperator.Within
                ].indexOf(this.currentFilter.operator) !== -1;
        }
        this.currentFilterIsSpatial$.next(isSpatial);
    }
    isTemporalOperator() {
        return (this.currentFilter.operator.toLowerCase() ===
            this.ogcFilterOperator.During.toLowerCase());
    }
}
OgcFilterFormComponent.ɵfac = function OgcFilterFormComponent_Factory(t) { return new (t || OgcFilterFormComponent)(i0.ɵɵdirectiveInject(i1.WktService)); };
OgcFilterFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OgcFilterFormComponent, selectors: [["igo-ogc-filter-form"]], inputs: { refreshFilters: "refreshFilters", datasource: "datasource", map: "map", currentFilter: "currentFilter", floatLabel: "floatLabel" }, decls: 42, vars: 76, consts: [["tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "checked", "click", "change"], [3, "ngClass"], ["tooltip-position", "above", "matTooltipShowDelay", "500", 3, "disabled", "value", "matTooltip", "selectionChange"], ["tooltip-position", "above", "matTooltipShowDelay", "500", 3, "value", "matTooltip"], ["class", "field", 3, "floatLabel", "mouseenter", "mouseleave", 4, "ngIf"], [3, "ngClass", "floatLabel"], ["tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "disabled", "value", "selectionChange"], ["tooltip-position", "above", "matTooltipShowDelay", "500", 3, "value", "matTooltip", 4, "ngFor", "ngForOf"], ["class", "spatialSelector", 4, "ngIf"], ["class", "singleInput", 3, "floatLabel", "mouseenter", "mouseleave", 4, "ngIf"], [1, "igo-layer-button-group"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click"], ["svgIcon", "delete"], ["class", "snrc", 3, "floatLabel", "mouseenter", "mouseleave", 4, "ngIf"], [4, "ngIf"], ["class", "dualInput", 3, "floatLabel", "mouseenter", "mouseleave", 4, "ngIf"], [3, "datasource", "currentFilter", "datasourceChange", "currentFilterChange", "changeProperty", 4, "ngIf"], [1, "field", 3, "floatLabel", "mouseenter", "mouseleave"], ["matInput", "", "tooltip-position", "above", "matTooltipShowDelay", "500", 3, "placeholder", "disabled", "matAutocomplete", "value", "matTooltip", "input"], [3, "optionSelected"], ["autoCompleteField", "matAutocomplete"], ["matTooltipShowDelay", "500", 3, "value", "id", "matTooltip", 4, "ngFor", "ngForOf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "disabled", "click", 4, "ngIf"], ["matTooltipShowDelay", "500", 3, "value", "id", "matTooltip"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "disabled", "click"], ["svgIcon", "close"], [1, "spatialSelector"], [3, "disabled", "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "singleInput", 3, "floatLabel", "mouseenter", "mouseleave"], ["autoCompleteValues", "matAutocomplete"], ["matTooltipShowDelay", "500", 3, "value", "matTooltip", 4, "ngFor", "ngForOf"], ["matTooltipShowDelay", "500", 3, "value", "matTooltip"], [1, "snrc", 3, "floatLabel", "mouseenter", "mouseleave"], ["matInput", "", "tooltip-position", "above", "matTooltipShowDelay", "500", 3, "placeholder", "value", "matTooltip", "input"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "disabled", "matTooltip", "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "disabled", "matTooltip", "click"], ["svgIcon", "arrow-expand-all"], [1, "dualInput", 3, "floatLabel", "mouseenter", "mouseleave"], ["matInput", "", "type", "number", 3, "placeholder", "disabled", "matAutocomplete", "value", "input"], ["autoDualValueOperator1", "matAutocomplete"], ["autoDualValueOperator2", "matAutocomplete"], [3, "datasource", "currentFilter", "datasourceChange", "currentFilterChange", "changeProperty"]], template: function OgcFilterFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-checkbox", 0);
        i0.ɵɵlistener("click", function OgcFilterFormComponent_Template_mat_checkbox_click_0_listener($event) { return $event.stopPropagation(); })("change", function OgcFilterFormComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.toggleFilterState($event); });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 1);
        i0.ɵɵelementStart(3, "mat-select", 2);
        i0.ɵɵlistener("selectionChange", function OgcFilterFormComponent_Template_mat_select_selectionChange_3_listener($event) { return ctx.changeLogical($event.value); });
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementStart(5, "mat-option", 3);
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵtext(7);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-option", 3);
        i0.ɵɵpipe(10, "translate");
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, OgcFilterFormComponent_mat_form_field_13_Template, 13, 22, "mat-form-field", 4);
        i0.ɵɵpipe(14, "async");
        i0.ɵɵpipe(15, "async");
        i0.ɵɵpipe(16, "async");
        i0.ɵɵpipe(17, "async");
        i0.ɵɵelementStart(18, "mat-form-field", 5);
        i0.ɵɵpipe(19, "async");
        i0.ɵɵpipe(20, "async");
        i0.ɵɵelementStart(21, "mat-select", 6);
        i0.ɵɵlistener("selectionChange", function OgcFilterFormComponent_Template_mat_select_selectionChange_21_listener($event) { return ctx.changeOperator($event.value); });
        i0.ɵɵpipe(22, "translate");
        i0.ɵɵpipe(23, "translate");
        i0.ɵɵtemplate(24, OgcFilterFormComponent_mat_option_24_Template, 4, 7, "mat-option", 7);
        i0.ɵɵpipe(25, "keyvalue");
        i0.ɵɵpipe(26, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(27, OgcFilterFormComponent_mat_form_field_27_Template, 3, 3, "mat-form-field", 8);
        i0.ɵɵpipe(28, "async");
        i0.ɵɵtemplate(29, OgcFilterFormComponent_mat_form_field_29_Template, 8, 12, "mat-form-field", 9);
        i0.ɵɵelementStart(30, "div", 10);
        i0.ɵɵelementStart(31, "button", 11);
        i0.ɵɵlistener("click", function OgcFilterFormComponent_Template_button_click_31_listener() { return ctx.deleteFilter(); });
        i0.ɵɵpipe(32, "translate");
        i0.ɵɵelement(33, "mat-icon", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(34, OgcFilterFormComponent_mat_form_field_34_Template, 4, 7, "mat-form-field", 13);
        i0.ɵɵpipe(35, "async");
        i0.ɵɵtemplate(36, OgcFilterFormComponent_ng_container_36_Template, 2, 1, "ng-container", 14);
        i0.ɵɵpipe(37, "async");
        i0.ɵɵelement(38, "br");
        i0.ɵɵtemplate(39, OgcFilterFormComponent_mat_form_field_39_Template, 8, 11, "mat-form-field", 15);
        i0.ɵɵtemplate(40, OgcFilterFormComponent_mat_form_field_40_Template, 8, 11, "mat-form-field", 15);
        i0.ɵɵtemplate(41, OgcFilterFormComponent_igo_ogc_filter_time_41_Template, 1, 2, "igo-ogc-filter-time", 16);
    } if (rf & 2) {
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 27, "igo.geo.filter.toggleFilterState"))("checked", ctx.currentFilter.active);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(67, _c0, ctx.activeFilters.indexOf(ctx.currentFilter) !== 0 && ctx.currentFilter.active === true, ctx.activeFilters.indexOf(ctx.currentFilter) === 0 || ctx.currentFilter.active !== true));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !ctx.currentFilter.active)("value", ctx.currentFilter.parentLogical)("matTooltip", ctx.currentFilter.parentLogical ? i0.ɵɵpipeBind1(4, 29, "igo.geo.operators.tooltip." + ctx.currentFilter.parentLogical) : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.ogcFilterOperator.And)("matTooltip", i0.ɵɵpipeBind1(6, 31, "igo.geo.operators.tooltip.And"));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 33, "igo.geo.operators.And"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.ogcFilterOperator.Or)("matTooltip", i0.ɵɵpipeBind1(10, 35, "igo.geo.operators.tooltip.Or"));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 37, "igo.geo.operators.Or"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(14, 39, ctx.currentFilterIsSpatial$) === false && i0.ɵɵpipeBind1(15, 41, ctx.fields$) && i0.ɵɵpipeBind1(16, 43, ctx.fields$).length > 0 && i0.ɵɵpipeBind1(17, 45, ctx.fields$)[0].name !== "");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(70, _c1, i0.ɵɵpipeBind1(19, 47, ctx.currentFilterIsSpatial$) === false, i0.ɵɵpipeBind1(20, 49, ctx.currentFilterIsSpatial$)))("floatLabel", ctx.floatLabel);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matTooltip", ctx.currentFilter.operator ? i0.ɵɵpipeBind1(22, 51, "igo.geo.operators.tooltip." + ctx.currentFilter.operator) : i0.ɵɵpipeBind1(23, 53, "igo.geo.filter.selectOperator"))("disabled", !ctx.currentFilter.active)("value", ctx.currentFilter.operator);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(25, 55, i0.ɵɵpipeBind1(26, 57, ctx.ogcFilterOperators$)));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(28, 59, ctx.currentFilterIsSpatial$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(73, _c2).indexOf(ctx.detectProperty()) !== -1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(32, 61, "igo.geo.filter.removeFilter"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(35, 63, ctx.currentFilterIsSpatial$) && ctx.currentFilter.igoSpatialSelector === "snrc");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(37, 65, ctx.currentFilterIsSpatial$) && ctx.currentFilter.igoSpatialSelector === "fixedExtent");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.isTemporalOperator() && i0.ɵɵpureFunction0(74, _c3).indexOf(ctx.detectProperty(1)) !== -1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isTemporalOperator() && i0.ɵɵpureFunction0(75, _c4).indexOf(ctx.detectProperty(2)) !== -1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isTemporalOperator());
    } }, styles: ["[_nghost-%COMP%]{width:100%;padding:5px 10px}  .mat-form-field .mat-icon svg{width:1em;height:1em;color:#d3d3d3}.mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-select-arrow[_ngcontent-%COMP%]{visibility:hidden}.mat-slide-toggle[_ngcontent-%COMP%]{margin-top:10px}.logical[_ngcontent-%COMP%]{flex-flow:column nowrap;width:10%;max-width:45px;margin-left:5px}.logicalHidden[_ngcontent-%COMP%]{flex-flow:column nowrap;width:10%;visibility:hidden;max-width:45px;margin-left:5px}  .logical .mat-select-arrow{visibility:hidden}  .logicalHidden .mat-select-arrow{visibility:hidden}.field[_ngcontent-%COMP%]{width:20%;margin-left:5px}  .field .mat-select-arrow{visibility:hidden}.operator[_ngcontent-%COMP%]{width:12%;margin-left:10px;text-align:center}  .operator .mat-select-arrow{visibility:hidden}.spatialSelector[_ngcontent-%COMP%]{width:15%;margin-left:5px}  .spatialSelector .mat-select-arrow{visibility:hidden}.singleInput[_ngcontent-%COMP%]{width:30%;margin-left:5px}.snrc[_ngcontent-%COMP%]{width:20%;margin-left:5px}  .singleInput .mat-select-arrow{visibility:hidden}.dualInput[_ngcontent-%COMP%]{width:20%;margin-left:5px}  .dualInput .mat-select-arrow{visibility:hidden}.igo-layer-button-group[_ngcontent-%COMP%]{display:flex;float:right;padding-top:5px}.container[_ngcontent-%COMP%]{display:flex}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterFormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-ogc-filter-form',
                templateUrl: './ogc-filter-form.component.html',
                styleUrls: ['./ogc-filter-form.component.scss']
            }]
    }], function () { return [{ type: i1.WktService }]; }, { refreshFilters: [{
            type: Input
        }], datasource: [{
            type: Input
        }], map: [{
            type: Input
        }], currentFilter: [{
            type: Input
        }], floatLabel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlci1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9vZ2MtZmlsdGVyLWZvcm0vb2djLWZpbHRlci1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9vZ2MtZmlsdGVyLWZvcm0vb2djLWZpbHRlci1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTXZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUlqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7OztJQ3lDcEUsc0NBSzZCO0lBQzNCLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBSlgsdUNBQXFCLHNCQUFBLCtCQUFBO0lBR3JCLGVBQ0Y7SUFERSxnREFDRjs7OztJQUVGLGtDQU1pQztJQUEvQiw0TkFBOEI7SUFDMUIsK0JBQXFDO0lBQzNDLGlCQUFTOzs7SUFIUCx3REFBa0M7Ozs7SUFoQ3RDLDBDQUs0QjtJQUYxQiw0TkFBK0IsYUFBYSxJQUFDLCtNQUNkLFNBQVMsSUFESztJQUc3QyxpQ0FTZ0Q7SUFBaEQsdU9BQStDOzs7Ozs7O0lBVC9DLGlCQVNnRDtJQUNoRCxnREFDaUQ7SUFBakQsNFBBQWdEO0lBQzlDLDBHQU9hOztJQUNmLGlCQUFtQjtJQUNuQixrR0FRUztJQUNYLGlCQUFpQjs7OztJQS9CZiw4Q0FBeUI7SUFHekIsZUFBOEQ7SUFBOUQsc0ZBQThELDBDQUFBLHdCQUFBLGlIQUFBLDZLQUFBO0lBV3hDLGVBQTBCO0lBQTFCLHdFQUEwQjtJ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aUdBaUNpQjtRQUVqQixpR0FpQ2lCO1FBRWpCLDBHQUlzQjs7UUFuUnBCLHNGQUE2RCxxQ0FBQTtRQU83RCxlQUE4TDtRQUE5TCx1T0FBOEw7UUFFNUwsZUFBa0M7UUFBbEMsb0RBQWtDLDBDQUFBLDRJQUFBO1FBTzlCLGVBQTZCO1FBQTdCLGlEQUE2QixzRUFBQTtRQUkzQixlQUNKO1FBREksK0VBQ0o7UUFFRSxlQUE0QjtRQUE1QixnREFBNEIsc0VBQUE7UUFJMUIsZUFDSjtRQURJLCtFQUNKO1FBTUgsZUFBc0k7UUFBdEksbU9BQXNJO1FBc0N2SSxlQUFvSDtRQUFwSCx5S0FBb0gsOEJBQUE7UUFLbEgsZUFBNEo7UUFBNUoscU1BQTRKLHVDQUFBLHFDQUFBO1FBS25JLGVBQTJDO1FBQTNDLGlHQUEyQztRQVl2RSxlQUFxQztRQUFyQywwRUFBcUM7UUFlckMsZUFBK0Q7UUFBL0QsdUZBQStEO1FBeUM1RCxlQUF3RDtRQUF4RCxrRkFBd0Q7UUFTM0QsZUFBc0Y7UUFBdEYsNkhBQXNGO1FBd0J0RSxlQUE2RjtRQUE3RixvSUFBNkY7UUFvQjdHLGVBQTBGO1FBQTFGLHFIQUEwRjtRQW1DeEYsZUFBd0Y7UUFBeEYscUhBQXdGO1FBaUNyRSxlQUEwQjtRQUExQiwrQ0FBMEI7O3VGRC9QbkMsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDs2REFzQlUsY0FBYztrQkFBdEIsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFFRyxHQUFHO2tCQUFYLEtBQUs7WUFFRyxhQUFhO2tCQUFyQixLQUFLO1lBc0JHLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZsb2F0TGFiZWxUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlLFxuICBPZ2NGaWx0ZXJzT3B0aW9uc1xufSBmcm9tICcuLi8uLi9maWx0ZXIvc2hhcmVkL29nYy1maWx0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IE9nY0ZpbHRlcldyaXRlciB9IGZyb20gJy4uLy4uL2ZpbHRlci9zaGFyZWQvb2djLWZpbHRlcic7XG5pbXBvcnQgeyBXa3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vd2t0L3NoYXJlZC93a3Quc2VydmljZSc7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi9tYXAnO1xuaW1wb3J0IHsgU291cmNlRmllbGRzT3B0aW9uc1BhcmFtcyB9IGZyb20gJy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL2RhdGFzb3VyY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IE9nY0ZpbHRlck9wZXJhdG9yIH0gZnJvbSAnLi4vLi4vZmlsdGVyL3NoYXJlZC9vZ2MtZmlsdGVyLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tb2djLWZpbHRlci1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29nYy1maWx0ZXItZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29nYy1maWx0ZXItZm9ybS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9nY0ZpbHRlckZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBvZ2NGaWx0ZXJPcGVyYXRvciA9IE9nY0ZpbHRlck9wZXJhdG9yO1xuICBmaWx0ZXJlZFZhbHVlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBmaWx0ZXJlZEZpZWxkcyQ6IE9ic2VydmFibGU8U291cmNlRmllbGRzT3B0aW9uc1BhcmFtc1tdPjtcbiAgcHVibGljIGFsbE9nY0ZpbHRlck9wZXJhdG9ycztcbiAgcHVibGljIG9nY0ZpbHRlck9wZXJhdG9ycyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0+KFxuICAgIHVuZGVmaW5lZFxuICApO1xuICBwdWJsaWMgaWdvU3BhdGlhbFNlbGVjdG9ycztcbiAgcHVibGljIHZhbHVlID0gJyc7XG4gIHB1YmxpYyBpbnB1dE9wZXJhdG9yO1xuICBwdWJsaWMgc2VsZWN0ZWRGaWVsZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNvdXJjZUZpZWxkc09wdGlvbnNQYXJhbXM+KFxuICAgIHVuZGVmaW5lZFxuICApO1xuICBwdWJsaWMgZmllbGRzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U291cmNlRmllbGRzT3B0aW9uc1BhcmFtc1tdPihbXSk7XG4gIHB1YmxpYyBjb2xvciA9ICdwcmltYXJ5JztcbiAgcHVibGljIGRpc2FibGVkO1xuICBwdWJsaWMgY3VycmVudEZpbHRlcklzU3BhdGlhbCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHVibGljIGRlZmF1bHRTdGVwTWlsbGlzZWNvbmQgPSA2MDAwO1xuICBwdWJsaWMgaW5wdXRDbGVhcmFibGU6IHN0cmluZztcblxuICBASW5wdXQoKSByZWZyZXNoRmlsdGVyczogKCkgPT4gdm9pZDtcblxuICBASW5wdXQoKSBkYXRhc291cmNlOiBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZTtcblxuICBASW5wdXQoKSBtYXA6IElnb01hcDtcblxuICBASW5wdXQoKSBjdXJyZW50RmlsdGVyOiBhbnk7XG5cbiAgc2V0IHNucmModmFsdWU6IGFueSkge1xuICAgIGNvbnN0IGNoZWNrU05SQzUwayA9IC9eXFxkezJ9W2EtbF1bMCwxXVswLTldJC9naTtcbiAgICBjb25zdCBjaGVja1NOUkMyNTBrID0gL15cXGR7Mn1bYS1wXSQvZ2k7XG4gICAgY29uc3QgY2hlY2tTTlJDMW0gPSAvXlxcZHsyfSQvZ2k7XG4gICAgaWYgKFxuICAgICAgY2hlY2tTTlJDMW0udGVzdCh2YWx1ZSkgfHxcbiAgICAgIGNoZWNrU05SQzI1MGsudGVzdCh2YWx1ZSkgfHxcbiAgICAgIGNoZWNrU05SQzUway50ZXN0KHZhbHVlKVxuICAgICkge1xuICAgICAgdGhpcy5fc25yYyA9IHZhbHVlO1xuICAgICAgdGhpcy5jdXJyZW50RmlsdGVyLmlnb1NOUkMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgc25yYygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9zbnJjO1xuICB9XG5cbiAgcHJpdmF0ZSBfc25yYyA9ICcnO1xuXG4gIEBJbnB1dCgpIGZsb2F0TGFiZWw6IEZsb2F0TGFiZWxUeXBlID0gJ25ldmVyJztcblxuICBnZXQgYWN0aXZlRmlsdGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5pbnRlcmZhY2VPZ2NGaWx0ZXJzLmZpbHRlcihcbiAgICAgIChmKSA9PiBmLmFjdGl2ZSA9PT0gdHJ1ZVxuICAgICk7XG4gIH1cblxuICBnZXQgYWxsb3dlZE9wZXJhdG9ycygpIHtcbiAgICByZXR1cm4gbmV3IE9nY0ZpbHRlcldyaXRlcigpLmNvbXB1dGVBbGxvd2VkT3BlcmF0b3JzKFxuICAgICAgdGhpcy5maWVsZHMkLnZhbHVlLFxuICAgICAgdGhpcy5jdXJyZW50RmlsdGVyLnByb3BlcnR5TmFtZSxcbiAgICAgIHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMuYWxsb3dlZE9wZXJhdG9yc1R5cGVcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3a3RTZXJ2aWNlOiBXa3RTZXJ2aWNlKSB7XG4gICAgLy8gVE9ETzogRmlsdGVyIHBlcm1pdHRlZCBvcGVyYXRvciBiYXNlZCBvbiB3ZnNjYXBhYmlsaXRpZXNcbiAgICAvLyBOZWVkIHRvIHdvcmsgb24gcmVnZXggb24gWE1MIGNhcGFiaWxpdGllcyBiZWNhdXNlXG4gICAgLy8gY29tYXBhcmlzb24gb3BlcmF0b3IncyBuYW1lIHZhcmllcyBiZXR3ZWVuIFdGUyBzZXJ2ZXJzLi4uXG4gICAgLy8gRXg6IElzTnVsbCB2cyBQcm9wZXJ0eUlzTnVsbCB2cyBJc05pbCAuLi5cbiAgICB0aGlzLmFsbE9nY0ZpbHRlck9wZXJhdG9ycyA9IG5ldyBPZ2NGaWx0ZXJXcml0ZXIoKS5vcGVyYXRvcnM7XG4gICAgdGhpcy5vZ2NGaWx0ZXJPcGVyYXRvcnMkLm5leHQodGhpcy5hbGxPZ2NGaWx0ZXJPcGVyYXRvcnMpO1xuICAgIHRoaXMuaWdvU3BhdGlhbFNlbGVjdG9ycyA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2ZpeGVkRXh0ZW50J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3NucmMnXG4gICAgICB9XG4gICAgXTtcbiAgICAvLyBUT0RPOiBzZWxlY3RGZWF0dXJlICYgZHJhd0ZlYXR1cmVcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKCB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5zb3VyY2VGaWVsZHMpIHtcbiAgICAgIGNvbnN0IHNGaWVsZHMgPSB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5zb3VyY2VGaWVsZHMuZmlsdGVyKFxuICAgICAgICAoc2YpID0+XG4gICAgICAgICAgc2YuZXhjbHVkZUZyb21PZ2NGaWx0ZXJzID09PSB1bmRlZmluZWQgfHwgIXNmLmV4Y2x1ZGVGcm9tT2djRmlsdGVyc1xuICAgICAgKTtcbiAgICAgIHNGaWVsZHMubWFwKChzZnMpID0+IHtcbiAgICAgICAgaWYgKHNmcy52YWx1ZXMpIHtcbiAgICAgICAgICBzZnMudmFsdWVzLnNvcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmZpZWxkcyQubmV4dChzRmllbGRzKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUZpZWxkc0xpc3QoKTtcbiAgICB0aGlzLnNlbGVjdGVkRmllbGQkLm5leHQoXG4gICAgICB0aGlzLmZpZWxkcyQudmFsdWUuZmluZCgoZikgPT4gZi5uYW1lID09PSB0aGlzLmN1cnJlbnRGaWx0ZXIucHJvcGVydHlOYW1lKVxuICAgICk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZXNMaXN0KCk7XG4gICAgdGhpcy5zZWxlY3RlZEZpZWxkJC5zdWJzY3JpYmUoKGYpID0+IHtcbiAgICAgIHRoaXMub2djRmlsdGVyT3BlcmF0b3JzJC5uZXh0KHRoaXMuYWxsb3dlZE9wZXJhdG9ycyk7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuYWxsb3dlZE9wZXJhdG9ycykuaW5kZXhPZihcbiAgICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXIub3BlcmF0b3JcbiAgICAgICAgKSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXIub3BlcmF0b3IgPSBPYmplY3Qua2V5cyh0aGlzLmFsbG93ZWRPcGVyYXRvcnMpWzBdO1xuICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXIub3BlcmF0b3IgPSBPYmplY3Qua2V5cyh0aGlzLmFsbG93ZWRPcGVyYXRvcnMpWzBdO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVWYWx1ZXNMaXN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5jdXJyZW50RmlsdGVySXNTcGF0aWFsKCk7XG4gIH1cblxuICB1cGRhdGVGaWVsZHNMaXN0KHZhbHVlPzogc3RyaW5nKSB7XG4gICAgdGhpcy5maWx0ZXJlZEZpZWxkcyQgPVxuICAgICAgdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMCA/IG9mKHRoaXMuX2ZpbHRlckZpZWxkcyh2YWx1ZSkpIDogdGhpcy5maWVsZHMkO1xuICAgIGlmICh0aGlzLmZpZWxkcyQudmFsdWUuZmluZCgoZikgPT4gZi5uYW1lID09PSB2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY2hhbmdlRmllbGQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbHVlc0xpc3QodmFsdWU/OiBzdHJpbmcsIHBvcz86IG51bWJlcikge1xuICAgIHRoaXMuZmlsdGVyZWRWYWx1ZXMkID1cbiAgICAgIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICAgPyBvZih0aGlzLl9maWx0ZXJWYWx1ZXModmFsdWUpKVxuICAgICAgICA6IHRoaXMuc2VsZWN0ZWRGaWVsZCQudmFsdWVcbiAgICAgICAgPyBvZih0aGlzLnNlbGVjdGVkRmllbGQkLnZhbHVlLnZhbHVlcylcbiAgICAgICAgOiBvZihbXSk7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+PSAxKSB7XG4gICAgICB0aGlzLmNoYW5nZVByb3BlcnR5KHZhbHVlLCBwb3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckZpZWxkcyh2YWx1ZTogc3RyaW5nKTogU291cmNlRmllbGRzT3B0aW9uc1BhcmFtc1tdIHtcbiAgICBjb25zdCBrZXl3b3JkUmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgdmFsdWUubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJyksXG4gICAgICAnZ2knXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMkLnZhbHVlLmZpbHRlcigodmFsKSA9PlxuICAgICAga2V5d29yZFJlZ2V4LnRlc3QoXG4gICAgICAgIHZhbC5hbGlhcy5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJWYWx1ZXModmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBrZXl3b3JkUmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgdmFsdWVcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKSxcbiAgICAgICdnaSdcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRmllbGQkLnZhbHVlLnZhbHVlcy5maWx0ZXIoKHZhbCkgPT5cbiAgICAgIHZhbCAmJiBrZXl3b3JkUmVnZXgudGVzdChcbiAgICAgICAgdmFsXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAubm9ybWFsaXplKCdORkQnKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJylcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgY2xlYXJTZWxlY3RlZEZpZWxkKCkge1xuICAgIHRoaXMuY3VycmVudEZpbHRlci5wcm9wZXJ0eU5hbWUgPSAnJztcbiAgICB0aGlzLnNlbGVjdGVkRmllbGQkLm5leHQodW5kZWZpbmVkKTtcbiAgICB0aGlzLmNsZWFyUHJvcGVydHkoKTtcbiAgfVxuXG4gIGlzQ2xlYXJhYmxlKHBvcz86IG51bWJlcikge1xuICAgIGNvbnN0IGRldGVjdGVkUHJvcGVydHkgPSB0aGlzLmRldGVjdFByb3BlcnR5KHBvcyk7XG4gICAgaWYgKGRldGVjdGVkUHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRGaWx0ZXJbZGV0ZWN0ZWRQcm9wZXJ0eV07XG4gICAgfVxuICB9XG4gIGNsZWFyUHJvcGVydHkocG9zPzogbnVtYmVyKSB7XG4gICAgLy8gdGhpcy5hdXRvQ29tcGxldGVJbnB1dFZhbHVlcy5jbG9zZVBhbmVsKCk7XG4gICAgY29uc3QgZGV0ZWN0ZWRQcm9wZXJ0eSA9IHRoaXMuZGV0ZWN0UHJvcGVydHkocG9zKTtcbiAgICBpZiAoZGV0ZWN0ZWRQcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRGaWx0ZXJbZGV0ZWN0ZWRQcm9wZXJ0eV0gPSAnJyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRmlsdGVyU3RhdGUoZXZlbnQpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLmludGVyZmFjZU9nY0ZpbHRlcnMuZmluZChcbiAgICAgIChmKSA9PiBmLmZpbHRlcmlkID09PSB0aGlzLmN1cnJlbnRGaWx0ZXIuZmlsdGVyaWRcbiAgICApLmFjdGl2ZSA9IGV2ZW50LmNoZWNrZWQ7XG4gICAgdGhpcy5yZWZyZXNoRmlsdGVycygpO1xuICB9XG5cbiAgZGVsZXRlRmlsdGVyKCkge1xuICAgIGNvbnN0IG9nY0ZpbHRlcnM6IE9nY0ZpbHRlcnNPcHRpb25zID0gdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycztcbiAgICBvZ2NGaWx0ZXJzLmludGVyZmFjZU9nY0ZpbHRlcnMgPSBvZ2NGaWx0ZXJzLmludGVyZmFjZU9nY0ZpbHRlcnMuZmlsdGVyKFxuICAgICAgKGYpID0+IGYuZmlsdGVyaWQgIT09IHRoaXMuY3VycmVudEZpbHRlci5maWx0ZXJpZFxuICAgICk7XG4gICAgdGhpcy5yZWZyZXNoRmlsdGVycygpO1xuICB9XG5cbiAgY2hhbmdlTG9naWNhbChsb2dpY2FsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXIucGFyZW50TG9naWNhbCA9IGxvZ2ljYWw7XG4gICAgdGhpcy5yZWZyZXNoRmlsdGVycygpO1xuICB9XG5cbiAgY2hhbmdlT3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZykge1xuICAgIHRoaXMuY3VycmVudEZpbHRlci5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIHRoaXMuY3VycmVudEZpbHRlcklzU3BhdGlhbCgpO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5jdXJyZW50RmlsdGVySXNTcGF0aWFsJC52YWx1ZSAmJlxuICAgICAgdGhpcy5jdXJyZW50RmlsdGVyLndrdF9nZW9tZXRyeS5sZW5ndGggPT09IDBcbiAgICApIHtcbiAgICAgIHRoaXMuY2hhbmdlU3BhdGlhbFNlbGVjdG9yKHRoaXMuY3VycmVudEZpbHRlci5pZ29TcGF0aWFsU2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZnJlc2hGaWx0ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlRmllbGQoZmllbGQ6IHN0cmluZykge1xuICAgIHRoaXMuY3VycmVudEZpbHRlci5wcm9wZXJ0eU5hbWUgPSBmaWVsZDtcbiAgICB0aGlzLnNlbGVjdGVkRmllbGQkLm5leHQoXG4gICAgICB0aGlzLmZpZWxkcyQudmFsdWUuZmluZCgoZikgPT4gZi5uYW1lID09PSB0aGlzLmN1cnJlbnRGaWx0ZXIucHJvcGVydHlOYW1lKVxuICAgICk7XG4gICAgdGhpcy5yZWZyZXNoRmlsdGVycygpO1xuICB9XG5cbiAgLy8gSXNzdWUgd2l0aCBtYXBzZXJ2ZXIgNy4yIGFuZCBQb3N0Z2lzIGxheWVycy4gRml4ZWQgaW4gNy40XG4gIC8vIER1ZSB0byB0aGlzIGlzc3VlLCB0aGUgY2hlY2tib3ggaXMgaGlkZS5cbiAgY2hhbmdlQ2FzZVNlbnNpdGl2ZShtYXRjaENhc2UpIHtcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXIubWF0Y2hDYXNlID0gbWF0Y2hDYXNlLmNoZWNrZWQ7XG4gICAgdGhpcy5yZWZyZXNoRmlsdGVycygpO1xuICB9XG5cbiAgY2hhbmdlUHJvcGVydHkodmFsdWU6IGFueSwgcG9zPzogbnVtYmVyLCByZWZyZXNoRmlsdGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRldGVjdGVkUHJvcGVydHkgPSB0aGlzLmRldGVjdFByb3BlcnR5KHBvcyk7XG4gICAgaWYgKGRldGVjdGVkUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMuaW50ZXJmYWNlT2djRmlsdGVycy5maW5kKFxuICAgICAgICAoZikgPT4gZi5maWx0ZXJpZCA9PT0gdGhpcy5jdXJyZW50RmlsdGVyLmZpbHRlcmlkXG4gICAgICApW2RldGVjdGVkUHJvcGVydHldID0gdmFsdWU7XG5cbiAgICAgIGlmICggcmVmcmVzaEZpbHRlciApIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoRmlsdGVycygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU51bWVyaWNQcm9wZXJ0eSh2YWx1ZSwgcG9zOiBudW1iZXIpIHtcbiAgICB0aGlzLmNoYW5nZVByb3BlcnR5KHBhcnNlRmxvYXQodmFsdWUpLCBwb3MpO1xuICB9XG5cbiAgY2hhbmdlU3BhdGlhbFNlbGVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXIuaWdvU3BhdGlhbFNlbGVjdG9yID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUgPT09ICdmaXhlZEV4dGVudCcpIHtcbiAgICAgIHRoaXMuY2hhbmdlTWFwRXh0ZW50R2VvbWV0cnkoZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXJJc1NwYXRpYWwoKTtcbiAgICB0aGlzLnJlZnJlc2hGaWx0ZXJzKCk7XG4gIH1cblxuICBjaGFuZ2VTTlJDKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnNucmMgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVNOUkNHZW9tZXRyeSgpO1xuICB9XG5cbiAgY2hhbmdlU05SQ0dlb21ldHJ5KCkge1xuICAgIGNvbnN0IGludGVyZmFjZU9nY0ZpbHRlciA9IHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMuaW50ZXJmYWNlT2djRmlsdGVycy5maW5kKFxuICAgICAgKGYpID0+IGYuZmlsdGVyaWQgPT09IHRoaXMuY3VycmVudEZpbHRlci5maWx0ZXJpZFxuICAgICk7XG4gICAgaWYgKCFpbnRlcmZhY2VPZ2NGaWx0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zbnJjICYmIHRoaXMuY3VycmVudEZpbHRlci5pZ29TcGF0aWFsU2VsZWN0b3IgPT09ICdzbnJjJykge1xuICAgICAgdGhpcy5jdXJyZW50RmlsdGVyLndrdF9nZW9tZXRyeSA9IHRoaXMud2t0U2VydmljZS5zbnJjVG9Xa3QoXG4gICAgICAgIHRoaXMuc25yYyxcbiAgICAgICAgdGhpcy5tYXAucHJvamVjdGlvblxuICAgICAgKS53a3RQb2x5O1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hGaWx0ZXJzKCk7XG4gIH1cblxuICBjaGFuZ2VNYXBFeHRlbnRHZW9tZXRyeShyZWZyZXNoOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnN0IGludGVyZmFjZU9nY0ZpbHRlciA9IHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMuaW50ZXJmYWNlT2djRmlsdGVycy5maW5kKFxuICAgICAgKGYpID0+IGYuZmlsdGVyaWQgPT09IHRoaXMuY3VycmVudEZpbHRlci5maWx0ZXJpZFxuICAgICk7XG4gICAgaWYgKCFpbnRlcmZhY2VPZ2NGaWx0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jdXJyZW50RmlsdGVyLmlnb1NwYXRpYWxTZWxlY3RvciA9PT0gJ2ZpeGVkRXh0ZW50Jykge1xuICAgICAgdGhpcy5jdXJyZW50RmlsdGVyLndrdF9nZW9tZXRyeSA9IHRoaXMud2t0U2VydmljZS5leHRlbnRUb1drdChcbiAgICAgICAgdGhpcy5tYXAucHJvamVjdGlvbixcbiAgICAgICAgdGhpcy5tYXAudmlld0NvbnRyb2xsZXIuZ2V0RXh0ZW50KCksXG4gICAgICAgIHRoaXMubWFwLnByb2plY3Rpb25cbiAgICAgICkud2t0UG9seTtcbiAgICB9XG4gICAgaWYgKHJlZnJlc2gpIHtcbiAgICAgIHRoaXMucmVmcmVzaEZpbHRlcnMoKTtcbiAgICB9XG4gIH1cblxuICBkZXRlY3RQcm9wZXJ0eShwb3M/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50RmlsdGVyLm9wZXJhdG9yKSB7XG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yLlByb3BlcnR5SXNOb3RFcXVhbFRvOlxuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzRXF1YWxUbzpcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0dyZWF0ZXJUaGFuOlxuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzR3JlYXRlclRoYW5PckVxdWFsVG86XG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yLlByb3BlcnR5SXNMZXNzVGhhbjpcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0xlc3NUaGFuT3JFcXVhbFRvOlxuICAgICAgICByZXR1cm4gJ2V4cHJlc3Npb24nO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzTGlrZTpcbiAgICAgICAgcmV0dXJuICdwYXR0ZXJuJztcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0JldHdlZW46XG4gICAgICAgIHJldHVybiBwb3MgJiYgcG9zID09PSAxXG4gICAgICAgICAgPyAnbG93ZXJCb3VuZGFyeSdcbiAgICAgICAgICA6IHBvcyAmJiBwb3MgPT09IDJcbiAgICAgICAgICA/ICd1cHBlckJvdW5kYXJ5J1xuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5EdXJpbmc6XG4gICAgICAgIHJldHVybiBwb3MgJiYgcG9zID09PSAxXG4gICAgICAgICAgPyAnYmVnaW4nXG4gICAgICAgICAgOiBwb3MgJiYgcG9zID09PSAyXG4gICAgICAgICAgPyAnZW5kJ1xuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3VycmVudEZpbHRlcklzU3BhdGlhbCgpIHtcbiAgICBsZXQgaXNTcGF0aWFsID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuY3VycmVudEZpbHRlcikge1xuICAgICAgaXNTcGF0aWFsID1cbiAgICAgICAgW1xuICAgICAgICAgIE9nY0ZpbHRlck9wZXJhdG9yLkNvbnRhaW5zLFxuICAgICAgICAgIE9nY0ZpbHRlck9wZXJhdG9yLkludGVyc2VjdHMsXG4gICAgICAgICAgT2djRmlsdGVyT3BlcmF0b3IuV2l0aGluXG4gICAgICAgIF0uaW5kZXhPZih0aGlzLmN1cnJlbnRGaWx0ZXIub3BlcmF0b3IpICE9PSAtMTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50RmlsdGVySXNTcGF0aWFsJC5uZXh0KGlzU3BhdGlhbCk7XG4gIH1cblxuICBpc1RlbXBvcmFsT3BlcmF0b3IoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY3VycmVudEZpbHRlci5vcGVyYXRvci50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgdGhpcy5vZ2NGaWx0ZXJPcGVyYXRvci5EdXJpbmcudG9Mb3dlckNhc2UoKVxuICAgICk7XG4gIH1cbn1cbiIsIjxtYXQtY2hlY2tib3hcbiAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmZpbHRlci50b2dnbGVGaWx0ZXJTdGF0ZScgfCB0cmFuc2xhdGVcIlxuICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgKGNoYW5nZSk9XCJ0b2dnbGVGaWx0ZXJTdGF0ZSgkZXZlbnQpXCJcbiAgW2NoZWNrZWRdPVwiY3VycmVudEZpbHRlci5hY3RpdmVcIj5cbjwvbWF0LWNoZWNrYm94PlxuXG48bWF0LWZvcm0tZmllbGRcbiAgW25nQ2xhc3NdPVwieydsb2dpY2FsJzogYWN0aXZlRmlsdGVycy5pbmRleE9mKGN1cnJlbnRGaWx0ZXIpICE9PSAwICYmIGN1cnJlbnRGaWx0ZXIuYWN0aXZlPT09dHJ1ZSwgJ2xvZ2ljYWxIaWRkZW4nOiBhY3RpdmVGaWx0ZXJzLmluZGV4T2YoY3VycmVudEZpbHRlcikgPT09IDAgfHwgY3VycmVudEZpbHRlci5hY3RpdmUhPT10cnVlfVwiPlxuICA8bWF0LXNlbGVjdFxuICAgIFtkaXNhYmxlZF09XCIhY3VycmVudEZpbHRlci5hY3RpdmVcIlxuICAgIFt2YWx1ZV09XCJjdXJyZW50RmlsdGVyLnBhcmVudExvZ2ljYWxcIlxuICAgIHRvb2x0aXAtcG9zaXRpb249XCJhYm92ZVwiXG4gICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgW21hdFRvb2x0aXBdPVwiY3VycmVudEZpbHRlci5wYXJlbnRMb2dpY2FsID8gKCgnaWdvLmdlby5vcGVyYXRvcnMudG9vbHRpcC4nKyBjdXJyZW50RmlsdGVyLnBhcmVudExvZ2ljYWwpIHwgdHJhbnNsYXRlKSA6ICcnXCJcbiAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cImNoYW5nZUxvZ2ljYWwoJGV2ZW50LnZhbHVlKVwiPlxuICAgICAgPG1hdC1vcHRpb25cbiAgICAgICAgW3ZhbHVlXT1vZ2NGaWx0ZXJPcGVyYXRvci5BbmRcbiAgICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImFib3ZlXCJcbiAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLm9wZXJhdG9ycy50b29sdGlwLkFuZCcgfCB0cmFuc2xhdGVcIj5cbiAgICAgICAgICB7eydpZ28uZ2VvLm9wZXJhdG9ycy5BbmQnIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uXG4gICAgICAgIFt2YWx1ZV09b2djRmlsdGVyT3BlcmF0b3IuT3JcbiAgICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImFib3ZlXCJcbiAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLm9wZXJhdG9ycy50b29sdGlwLk9yJyB8IHRyYW5zbGF0ZVwiPlxuICAgICAgICAgIHt7J2lnby5nZW8ub3BlcmF0b3JzLk9yJyB8IHRyYW5zbGF0ZX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZFxuICBjbGFzcz1cImZpZWxkXCJcbiAgKm5nSWY9XCIoY3VycmVudEZpbHRlcklzU3BhdGlhbCQgfCBhc3luYyk9PT1mYWxzZSAmJiAoZmllbGRzJCB8IGFzeW5jKSAmJiAoZmllbGRzJHwgYXN5bmMpLmxlbmd0aCA+IDAgJiYgKGZpZWxkcyR8IGFzeW5jKVswXS5uYW1lICE9PSAnJ1wiXG4gIChtb3VzZWVudGVyKT1cImlucHV0Q2xlYXJhYmxlID0gJ3NlbGVjdEZpZWxkJ1wiXG4gIChtb3VzZWxlYXZlKT1cImlucHV0Q2xlYXJhYmxlID0gdW5kZWZpbmVkXCJcbiAgW2Zsb2F0TGFiZWxdPVwiZmxvYXRMYWJlbFwiPlxuICA8aW5wdXRcbiAgbWF0SW5wdXRcbiAgW3BsYWNlaG9sZGVyXT1cIidpZ28uZ2VvLnNvdXJjZUZpZWxkcy5zZWxlY3RGaWVsZCcgfCB0cmFuc2xhdGVcIlxuICBbZGlzYWJsZWRdPVwiIWN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvQ29tcGxldGVGaWVsZFwiXG4gIFt2YWx1ZV09XCIoc2VsZWN0ZWRGaWVsZCQgfCBhc3luYykgPyAoc2VsZWN0ZWRGaWVsZCQgfCBhc3luYykuYWxpYXMgOiAnJ1wiXG4gIHRvb2x0aXAtcG9zaXRpb249XCJhYm92ZVwiXG4gIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICBbbWF0VG9vbHRpcF09XCIoc2VsZWN0ZWRGaWVsZCQgfCBhc3luYykgPyAoc2VsZWN0ZWRGaWVsZCQgfCBhc3luYykuYWxpYXMgOiAoJ2lnby5nZW8uc291cmNlRmllbGRzLnNlbGVjdEZpZWxkJyB8IHRyYW5zbGF0ZSlcIlxuICAoaW5wdXQpPVwidXBkYXRlRmllbGRzTGlzdCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxuICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0b0NvbXBsZXRlRmllbGQ9XCJtYXRBdXRvY29tcGxldGVcIlxuICAob3B0aW9uU2VsZWN0ZWQpPSdjaGFuZ2VGaWVsZCgkZXZlbnQub3B0aW9uLmlkKSc+XG4gICAgPG1hdC1vcHRpb25cbiAgICAgICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWx0ZXJlZEZpZWxkcyQgfCBhc3luY1wiXG4gICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgIFt2YWx1ZV09XCJmaWVsZC5hbGlhc1wiXG4gICAgICBbaWRdPVwiZmllbGQubmFtZVwiXG4gICAgICBbbWF0VG9vbHRpcF09XCJmaWVsZC5hbGlhc1wiPlxuICAgICAge3tmaWVsZC5hbGlhc319XG4gICAgPC9tYXQtb3B0aW9uPlxuICA8L21hdC1hdXRvY29tcGxldGU+XG4gIDxidXR0b24gbWF0LWJ1dHRvblxuICAgICpuZ0lmPVwiY3VycmVudEZpbHRlci5wcm9wZXJ0eU5hbWUgJiYgaW5wdXRDbGVhcmFibGUgPT09ICdzZWxlY3RGaWVsZCcgJiYgY3VycmVudEZpbHRlci5hY3RpdmVcIlxuICAgIG1hdFN1ZmZpeFxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIGFyaWEtbGFiZWw9XCJDbGVhclwiXG4gICAgW2Rpc2FibGVkXT1cIiFjdXJyZW50RmlsdGVyLmFjdGl2ZVwiXG4gICAgKGNsaWNrKT1cImNsZWFyU2VsZWN0ZWRGaWVsZCgpXCI+XG4gICAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiY2xvc2VcIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cblxuPG1hdC1mb3JtLWZpZWxkXG4gIFtuZ0NsYXNzXT1cInsnb3BlcmF0b3InOiAoY3VycmVudEZpbHRlcklzU3BhdGlhbCQgfCBhc3luYyk9PT1mYWxzZSAsICdkdWFsSW5wdXQnOiAoY3VycmVudEZpbHRlcklzU3BhdGlhbCQgfCBhc3luYyl9XCJcbiAgW2Zsb2F0TGFiZWxdPVwiZmxvYXRMYWJlbFwiPlxuICA8bWF0LXNlbGVjdFxuICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgW21hdFRvb2x0aXBdPVwiY3VycmVudEZpbHRlci5vcGVyYXRvciA/ICgoJ2lnby5nZW8ub3BlcmF0b3JzLnRvb2x0aXAuJysgY3VycmVudEZpbHRlci5vcGVyYXRvcikgfCB0cmFuc2xhdGUpIDogKCdpZ28uZ2VvLmZpbHRlci5zZWxlY3RPcGVyYXRvcicgfCB0cmFuc2xhdGUpXCJcbiAgICBbZGlzYWJsZWRdPVwiIWN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgICBbdmFsdWVdPVwiY3VycmVudEZpbHRlci5vcGVyYXRvclwiXG4gICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJjaGFuZ2VPcGVyYXRvcigkZXZlbnQudmFsdWUpXCI+XG4gICAgICA8bWF0LW9wdGlvblxuICAgICAgICAqbmdGb3I9XCJsZXQgb3BlcmF0b3Igb2YgKG9nY0ZpbHRlck9wZXJhdG9ycyQgfCBhc3luYykgfCBrZXl2YWx1ZVwiXG4gICAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJhYm92ZVwiXG4gICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICBbdmFsdWVdPVwib3BlcmF0b3Iua2V5XCJcbiAgICAgICAgW21hdFRvb2x0aXBdPVwiKCdpZ28uZ2VvLm9wZXJhdG9ycy50b29sdGlwLicrIG9wZXJhdG9yLmtleSkgfCB0cmFuc2xhdGVcIj5cbiAgICAgICAgICB7eygnaWdvLmdlby5vcGVyYXRvcnMuJysgb3BlcmF0b3Iua2V5KSB8IHRyYW5zbGF0ZX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZFxuY2xhc3M9XCJzcGF0aWFsU2VsZWN0b3JcIlxuKm5nSWY9XCJjdXJyZW50RmlsdGVySXNTcGF0aWFsJCB8IGFzeW5jXCI+XG4gIDxtYXQtc2VsZWN0XG4gICAgW2Rpc2FibGVkXT1cIiFjdXJyZW50RmlsdGVyLmFjdGl2ZVwiXG4gICAgW3ZhbHVlXT1cImN1cnJlbnRGaWx0ZXIuaWdvU3BhdGlhbFNlbGVjdG9yXCJcbiAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cImNoYW5nZVNwYXRpYWxTZWxlY3RvcigkZXZlbnQudmFsdWUpXCI+XG4gICAgICA8bWF0LW9wdGlvblxuICAgICAgICAqbmdGb3I9XCJsZXQgaWdvU3BhdGlhbFNlbGVjdG9yIG9mIGlnb1NwYXRpYWxTZWxlY3RvcnNcIlxuICAgICAgICBbdmFsdWVdPVwiaWdvU3BhdGlhbFNlbGVjdG9yLnR5cGVcIj5cbiAgICAgICAgICB7eygnaWdvLmdlby5zcGF0aWFsU2VsZWN0b3IuJysgaWdvU3BhdGlhbFNlbGVjdG9yLnR5cGUpIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkXG5jbGFzcz1cInNpbmdsZUlucHV0XCJcbipuZ0lmPVwiWydleHByZXNzaW9uJywncGF0dGVybiddLmluZGV4T2YoZGV0ZWN0UHJvcGVydHkoKSkgIT09IC0xXCJcbihtb3VzZWVudGVyKT1cImlucHV0Q2xlYXJhYmxlID0gJ3NlbGVjdFByb3BlcnR5J1wiXG4obW91c2VsZWF2ZSk9XCJpbnB1dENsZWFyYWJsZSA9IHVuZGVmaW5lZFwiXG5bZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsXCI+XG4gIDxpbnB1dFxuICAgIG1hdElucHV0XG4gICAgW3BsYWNlaG9sZGVyXT1cIidpZ28uZ2VvLmZpbHRlci5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxuICAgIFtkaXNhYmxlZF09XCIhY3VycmVudEZpbHRlci5hY3RpdmVcIlxuICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b0NvbXBsZXRlVmFsdWVzXCJcbiAgICBbdmFsdWVdPVwiZGV0ZWN0UHJvcGVydHkoKSA9PT0gJ2V4cHJlc3Npb24nID8gY3VycmVudEZpbHRlci5leHByZXNzaW9uIDogY3VycmVudEZpbHRlci5wYXR0ZXJuXCJcbiAgICB0b29sdGlwLXBvc2l0aW9uPVwiYWJvdmVcIlxuICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgIFttYXRUb29sdGlwXT1cImRldGVjdFByb3BlcnR5KCkgPT09ICdleHByZXNzaW9uJyA/IGN1cnJlbnRGaWx0ZXIuZXhwcmVzc2lvbiB8fCAnJyA6IGN1cnJlbnRGaWx0ZXIucGF0dGVybiB8fCAnJ1wiXG4gICAgKGlucHV0KT1cInVwZGF0ZVZhbHVlc0xpc3QoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cbiAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG9Db21wbGV0ZVZhbHVlcz1cIm1hdEF1dG9jb21wbGV0ZVwiXG4gICAgKG9wdGlvblNlbGVjdGVkKT1cImNoYW5nZVByb3BlcnR5KCRldmVudC5vcHRpb24udmFsdWUpXCI+XG4gICAgPG1hdC1vcHRpb25cbiAgICAgICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiBmaWx0ZXJlZFZhbHVlcyQgfCBhc3luY1wiXG4gICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICBbbWF0VG9vbHRpcF09XCJ2YWx1ZVwiPlxuICAgICAge3t2YWx1ZX19XG4gICAgPC9tYXQtb3B0aW9uPlxuICA8L21hdC1hdXRvY29tcGxldGU+XG4gIDxidXR0b24gbWF0LWJ1dHRvblxuICAgICpuZ0lmPVwiaXNDbGVhcmFibGUoKSAmJiBpbnB1dENsZWFyYWJsZSA9PT0gJ3NlbGVjdFByb3BlcnR5JyAmJiBjdXJyZW50RmlsdGVyLmFjdGl2ZVwiXG4gICAgbWF0U3VmZml4XG4gICAgbWF0LWljb24tYnV0dG9uXG4gICAgYXJpYS1sYWJlbD1cIkNsZWFyXCJcbiAgICBbZGlzYWJsZWRdPVwiIWN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgICAoY2xpY2spPVwiY2xlYXJQcm9wZXJ0eSgpXCI+XG4gICAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiY2xvc2VcIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxkaXYgY2xhc3M9XCJpZ28tbGF5ZXItYnV0dG9uLWdyb3VwXCI+XG4gIDxidXR0b25cbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICBjb2xsYXBzaWJsZUJ1dHRvblxuICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uZmlsdGVyLnJlbW92ZUZpbHRlcicgfCB0cmFuc2xhdGVcIlxuICAgIGNvbG9yPVwid2FyblwiXG4gICAgKGNsaWNrKT1cImRlbGV0ZUZpbHRlcigpXCI+XG4gICAgPG1hdC1pY29uIHN2Z0ljb249XCJkZWxldGVcIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48bWF0LWZvcm0tZmllbGRcbmNsYXNzPVwic25yY1wiXG4qbmdJZj1cIihjdXJyZW50RmlsdGVySXNTcGF0aWFsJCB8IGFzeW5jKSAmJiBjdXJyZW50RmlsdGVyLmlnb1NwYXRpYWxTZWxlY3RvciA9PT0gJ3NucmMnXCJcbihtb3VzZWVudGVyKT1cImlucHV0Q2xlYXJhYmxlID0gJ3NlbGVjdFNOUkMnXCJcbihtb3VzZWxlYXZlKT1cImlucHV0Q2xlYXJhYmxlID0gdW5kZWZpbmVkXCJcbltmbG9hdExhYmVsXT1cImZsb2F0TGFiZWxcIj5cbiAgPGlucHV0XG4gICAgbWF0SW5wdXRcbiAgICBbcGxhY2Vob2xkZXJdPVwiJ2lnby5nZW8uZmlsdGVyLnBsYWNlaG9sZGVyU25yYycgfCB0cmFuc2xhdGVcIlxuICAgIFt2YWx1ZV09XCJjdXJyZW50RmlsdGVyLmlnb1NOUkNcIlxuICAgIHRvb2x0aXAtcG9zaXRpb249XCJhYm92ZVwiXG4gICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgW21hdFRvb2x0aXBdPVwiY3VycmVudEZpbHRlci5pZ29TTlJDID8gY3VycmVudEZpbHRlci5pZ29TTlJDIDogJydcIlxuICAgIChpbnB1dCk9XCJjaGFuZ2VTTlJDKCRldmVudC50YXJnZXQudmFsdWUpXCI+XG4gIDxidXR0b25cbiAgICBtYXQtYnV0dG9uXG4gICAgKm5nSWY9XCJjdXJyZW50RmlsdGVyLmlnb1NOUkNcIlxuICAgIG1hdFN1ZmZpeFxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIGFyaWEtbGFiZWw9XCJDbGVhclwiXG4gICAgW2Rpc2FibGVkXT1cIiFjdXJyZW50RmlsdGVyLmFjdGl2ZSAmJiBpbnB1dENsZWFyYWJsZSA9PT0gJ3NlbGVjdFNOUkMnICYmIGN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgICAoY2xpY2spPVwiY3VycmVudEZpbHRlci5pZ29TTlJDPScnXCI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImNsb3NlXCI+PC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihjdXJyZW50RmlsdGVySXNTcGF0aWFsJCB8IGFzeW5jKSAmJiBjdXJyZW50RmlsdGVyLmlnb1NwYXRpYWxTZWxlY3RvciA9PT0gJ2ZpeGVkRXh0ZW50J1wiPlxuICAgIDxidXR0b25cbiAgICBtYXQtYnV0dG9uXG4gICAgW2Rpc2FibGVkXT1cIiFjdXJyZW50RmlsdGVyLmFjdGl2ZVwiXG4gICAgKm5nSWY9XCJjdXJyZW50RmlsdGVyLmlnb1NwYXRpYWxTZWxlY3RvciA9PT0gJ2ZpeGVkRXh0ZW50J1wiXG4gICAgbWF0U3VmZml4XG4gICAgbWF0LWljb24tYnV0dG9uXG4gICAgW2Rpc2FibGVkXT1cIiFjdXJyZW50RmlsdGVyLmFjdGl2ZVwiXG4gICAgKGNsaWNrKT1cImNoYW5nZU1hcEV4dGVudEdlb21ldHJ5KClcIlxuICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uc3BhdGlhbFNlbGVjdG9yLmJ0blNldEV4dGVudCcgfCB0cmFuc2xhdGVcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiYXJyb3ctZXhwYW5kLWFsbFwiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG5cbjxici8+XG5cbjxtYXQtZm9ybS1maWVsZFxuY2xhc3M9XCJkdWFsSW5wdXRcIlxuKm5nSWY9XCIhaXNUZW1wb3JhbE9wZXJhdG9yKCkgJiYgWydsb3dlckJvdW5kYXJ5JywnYmVnaW4nXS5pbmRleE9mKGRldGVjdFByb3BlcnR5KDEpKSAhPT0gLTFcIlxuKG1vdXNlZW50ZXIpPVwiaW5wdXRDbGVhcmFibGUgPSAnc2VsZWN0UHJvcGVydHkxJ1wiXG4obW91c2VsZWF2ZSk9XCJpbnB1dENsZWFyYWJsZSA9IHVuZGVmaW5lZFwiXG5bZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsXCI+XG4gICAgPGlucHV0XG4gICAgICBtYXRJbnB1dFxuICAgICAgW3BsYWNlaG9sZGVyXT1cIidpZ28uZ2VvLmZpbHRlci5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgW2Rpc2FibGVkXT1cIiFjdXJyZW50RmlsdGVyLmFjdGl2ZVwiXG4gICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9EdWFsVmFsdWVPcGVyYXRvcjFcIlxuICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICBbdmFsdWVdPVwiZGV0ZWN0UHJvcGVydHkoMSkgPT09ICdsb3dlckJvdW5kYXJ5JyA/IGN1cnJlbnRGaWx0ZXIubG93ZXJCb3VuZGFyeSA6IGN1cnJlbnRGaWx0ZXIuYmVnaW5cIlxuICAgICAgKGlucHV0KT1cInVwZGF0ZVZhbHVlc0xpc3QoJGV2ZW50LnRhcmdldC52YWx1ZSwxKVwiPlxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvRHVhbFZhbHVlT3BlcmF0b3IxPVwibWF0QXV0b2NvbXBsZXRlXCJcbiAgICAgIChvcHRpb25TZWxlY3RlZCk9XCJjaGFuZ2VOdW1lcmljUHJvcGVydHkoJGV2ZW50Lm9wdGlvbi52YWx1ZSwxKVwiPlxuICAgICAgPG1hdC1vcHRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IHZhbHVlIG9mIGZpbHRlcmVkVmFsdWVzJCB8IGFzeW5jXCJcbiAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgIFttYXRUb29sdGlwXT1cInZhbHVlXCI+XG4gICAgICAgIHt7dmFsdWV9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICpuZ0lmPVwiaXNDbGVhcmFibGUoMSkgJiYgaW5wdXRDbGVhcmFibGUgPT09ICdzZWxlY3RQcm9wZXJ0eTEnICYmIGN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgICAgIG1hdFN1ZmZpeFxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICBhcmlhLWxhYmVsPVwiQ2xlYXJcIlxuICAgIFtkaXNhYmxlZF09XCIhY3VycmVudEZpbHRlci5hY3RpdmVcIlxuICAgICAgKGNsaWNrKT1cImNsZWFyUHJvcGVydHkoMSlcIj5cbiAgICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImNsb3NlXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZFxuICBjbGFzcz1cImR1YWxJbnB1dFwiXG4gICpuZ0lmPVwiIWlzVGVtcG9yYWxPcGVyYXRvcigpICYmIFsndXBwZXJCb3VuZGFyeScsJ2VuZCddLmluZGV4T2YoZGV0ZWN0UHJvcGVydHkoMikpICE9PSAtMVwiXG4gIChtb3VzZWVudGVyKT1cImlucHV0Q2xlYXJhYmxlID0gJ3NlbGVjdFByb3BlcnR5MidcIlxuICAobW91c2VsZWF2ZSk9XCJpbnB1dENsZWFyYWJsZSA9IHVuZGVmaW5lZFwiXG4gIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWxcIj5cbiAgICA8aW5wdXRcbiAgICAgIG1hdElucHV0XG4gICAgICBbcGxhY2Vob2xkZXJdPVwiJ2lnby5nZW8uZmlsdGVyLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiXG4gICAgICBbZGlzYWJsZWRdPVwiIWN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b0R1YWxWYWx1ZU9wZXJhdG9yMlwiXG4gICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgIFt2YWx1ZV09XCJkZXRlY3RQcm9wZXJ0eSgyKSA9PT0gJ3VwcGVyQm91bmRhcnknID8gY3VycmVudEZpbHRlci51cHBlckJvdW5kYXJ5IDogY3VycmVudEZpbHRlci5lbmRcIlxuICAgICAgKGlucHV0KT1cInVwZGF0ZVZhbHVlc0xpc3QoJGV2ZW50LnRhcmdldC52YWx1ZSwyKVwiPlxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvRHVhbFZhbHVlT3BlcmF0b3IyPVwibWF0QXV0b2NvbXBsZXRlXCJcbiAgICAgIChvcHRpb25TZWxlY3RlZCk9XCJjaGFuZ2VOdW1lcmljUHJvcGVydHkoJGV2ZW50Lm9wdGlvbi52YWx1ZSwyKVwiPlxuICAgICAgPG1hdC1vcHRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IHZhbHVlIG9mIGZpbHRlcmVkVmFsdWVzJCB8IGFzeW5jXCJcbiAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgIFttYXRUb29sdGlwXT1cInZhbHVlXCI+XG4gICAgICAgIHt7dmFsdWV9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICpuZ0lmPVwiaXNDbGVhcmFibGUoMikgJiYgaW5wdXRDbGVhcmFibGUgPT09ICdzZWxlY3RQcm9wZXJ0eTInICYmIGN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgICAgIG1hdFN1ZmZpeFxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICBhcmlhLWxhYmVsPVwiQ2xlYXJcIlxuICAgICAgW2Rpc2FibGVkXT1cIiFjdXJyZW50RmlsdGVyLmFjdGl2ZVwiXG4gICAgICAoY2xpY2spPVwiY2xlYXJQcm9wZXJ0eSgyKVwiPlxuICAgICAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiY2xvc2VcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGlnby1vZ2MtZmlsdGVyLXRpbWUgKm5nSWY9XCJpc1RlbXBvcmFsT3BlcmF0b3IoKVwiXG4gIFsoZGF0YXNvdXJjZSldPVwiZGF0YXNvdXJjZVwiXG4gIFsoY3VycmVudEZpbHRlcildPVwiY3VycmVudEZpbHRlclwiXG4gIChjaGFuZ2VQcm9wZXJ0eSk9XCJjaGFuZ2VQcm9wZXJ0eSgkZXZlbnQudmFsdWUsICRldmVudC5wb3MpXCI+XG48L2lnby1vZ2MtZmlsdGVyLXRpbWU+XG5cbjwhLS1cblRPRE8gQydFU1QgUEVSVElORU5UIGplIGNyb2lzXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmaWVsZFwiICpuZ0lmPVwiIShjdXJyZW50RmlsdGVySXNTcGF0aWFsJCB8IGFzeW5jKSAmJiAoZmllbGRzJHwgYXN5bmMpICYmIChmaWVsZHMkfCBhc3luYykubGVuZ3RoID09PSAxICYmICAoZmllbGRzJHwgYXN5bmMpWzBdLm5hbWUgPT09ICcnXCI+XG48aW5wdXQgW2Rpc2FibGVkXT1cIiFjdXJyZW50RmlsdGVyLmFjdGl2ZVwiIG1hdElucHV0ICNmaWVsZFBlclVzZXIgKGtleXVwKT1cImNoYW5nZVByb3BlcnR5KGN1cnJlbnRGaWx0ZXIsJ3Byb3BlcnR5TmFtZScsZmllbGRQZXJVc2VyLnZhbHVlKVwiXG4gIChibHVyKT1cImNoYW5nZVByb3BlcnR5KGN1cnJlbnRGaWx0ZXIsJ3Byb3BlcnR5TmFtZScsZmllbGRQZXJVc2VyLnZhbHVlKVwiIFsobmdNb2RlbCldPVwiY3VycmVudEZpbHRlci5wcm9wZXJ0eU5hbWVcIj5cbjxidXR0b24gbWF0LWJ1dHRvbiAqbmdJZj1cImN1cnJlbnRGaWx0ZXIucHJvcGVydHlOYW1lXCIgbWF0U3VmZml4IG1hdC1pY29uLWJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xlYXJcIiAoY2xpY2spPVwiY3VycmVudEZpbHRlci5wcm9wZXJ0eU5hbWU9JydcIj5cbiAgPG1hdC1pY29uIHN2Z0ljb249XCJjbG9zZVwiPjwvbWF0LWljb24+XG48L2J1dHRvbj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cblxuXG48bWF0LWNoZWNrYm94IGxhYmVsUG9zaXRpb249J2JlZm9yZScgKGNoYW5nZSk9XCJjaGFuZ2VDYXNlU2Vuc2l0aXZlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRGaWx0ZXIubWF0Y2hDYXNlXCI+XG4gIHt7KCdpZ28uZ2VvLm9wZXJhdG9ycy5jYXNlU2Vuc2l0aXZlJykgfCB0cmFuc2xhdGV9fVxuPC9tYXQtY2hlY2tib3g+XG5cbjwvbWF0LWxpc3QtaXRlbT4gLS0+XG4iXX0=