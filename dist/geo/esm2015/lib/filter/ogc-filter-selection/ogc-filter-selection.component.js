import { Component, Input, ViewChild } from '@angular/core';
import { OgcFilterWriter } from '../../filter/shared/ogc-filter';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { OgcFilterOperator } from '../shared/ogc-filter.enum';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../shared/ogc-filter.service";
import * as i2 from "@angular/forms";
const _c0 = ["selection"];
function OgcFilterSelectionComponent_div_1_div_1_div_2_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selectorGroup_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", selectorGroup_r10);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", selectorGroup_r10.title, " ");
} }
function OgcFilterSelectionComponent_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-select", 10);
    i0.ɵɵlistener("valueChange", function OgcFilterSelectionComponent_div_1_div_1_div_2_Template_mat_select_valueChange_2_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11.currentPushButtonsGroup = $event; });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, OgcFilterSelectionComponent_div_1_div_1_div_2_mat_option_4_Template, 2, 2, "mat-option", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(3, 3, "igo.geo.layer.legend.selectStyle"))("value", ctx_r7.currentPushButtonsGroup);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r7.getPushButtonsGroups());
} }
function OgcFilterSelectionComponent_div_1_div_1_ng_container_3_mat_button_toggle_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-button-toggle", 15);
    i0.ɵɵlistener("change", function OgcFilterSelectionComponent_div_1_div_1_ng_container_3_mat_button_toggle_4_Template_mat_button_toggle_change_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const ogcPushButton_r15 = restoredCtx.$implicit; const selector_r2 = i0.ɵɵnextContext(3).$implicit; const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.onSelectionChange(ogcPushButton_r15, selector_r2.selectorType); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ogcPushButton_r15 = ctx.$implicit;
    const ctx_r14 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("matTooltip", ctx_r14.getToolTip(ogcPushButton_r15))("ngStyle", ctx_r14.getButtonColor(ogcPushButton_r15))("checked", ogcPushButton_r15.enabled)("value", ogcPushButton_r15);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ogcPushButton_r15.title, " ");
} }
function OgcFilterSelectionComponent_div_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-button-toggle-group", 13);
    i0.ɵɵtemplate(4, OgcFilterSelectionComponent_div_1_div_1_ng_container_3_mat_button_toggle_4_Template, 2, 5, "mat-button-toggle", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const bundle_r13 = ctx.$implicit;
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(bundle_r13.title);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("vertical", ctx_r8.bundleIsVertical(bundle_r13));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", bundle_r13.selectors);
} }
function OgcFilterSelectionComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "mat-divider");
    i0.ɵɵtemplate(2, OgcFilterSelectionComponent_div_1_div_1_div_2_Template, 5, 5, "div", 8);
    i0.ɵɵtemplate(3, OgcFilterSelectionComponent_div_1_div_1_ng_container_3_Template, 5, 3, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.getPushButtonsGroups().length > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.currentPushButtonsGroup.computedSelectors);
} }
function OgcFilterSelectionComponent_div_1_div_2_div_2_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selectorGroup_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", selectorGroup_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", selectorGroup_r22.title, " ");
} }
function OgcFilterSelectionComponent_div_1_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-select", 17);
    i0.ɵɵlistener("valueChange", function OgcFilterSelectionComponent_div_1_div_2_div_2_Template_mat_select_valueChange_2_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(3); return ctx_r23.currentCheckboxesGroup = $event; });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, OgcFilterSelectionComponent_div_1_div_2_div_2_mat_option_4_Template, 2, 2, "mat-option", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(3, 3, "igo.geo.layer.legend.selectStyle"))("value", ctx_r19.currentCheckboxesGroup);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r19.getCheckboxesGroups());
} }
function OgcFilterSelectionComponent_div_1_div_2_ng_container_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 20);
    i0.ɵɵlistener("change", function OgcFilterSelectionComponent_div_1_div_2_ng_container_3_mat_checkbox_4_Template_mat_checkbox_change_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r30); const ogcCheckbox_r28 = restoredCtx.$implicit; const selector_r2 = i0.ɵɵnextContext(3).$implicit; const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.onSelectionChange(ogcCheckbox_r28, selector_r2.selectorType); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ogcCheckbox_r28 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("matTooltip", ctx_r26.getToolTip(ogcCheckbox_r28))("checked", ogcCheckbox_r28.enabled)("value", ogcCheckbox_r28);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ogcCheckbox_r28.title, " ");
} }
function OgcFilterSelectionComponent_div_1_div_2_ng_container_3_p_5_u_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 23);
    i0.ɵɵlistener("click", function OgcFilterSelectionComponent_div_1_div_2_ng_container_3_p_5_u_1_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(5); return ctx_r34.displayLessResults("checkbox"); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.geo.filter.displayLessResults"), " ");
} }
function OgcFilterSelectionComponent_div_1_div_2_ng_container_3_p_5_u_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 24);
    i0.ɵɵlistener("click", function OgcFilterSelectionComponent_div_1_div_2_ng_container_3_p_5_u_2_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(5); return ctx_r36.displayMoreResults("checkbox"); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.geo.filter.displayMoreResults"), " ");
} }
function OgcFilterSelectionComponent_div_1_div_2_ng_container_3_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, OgcFilterSelectionComponent_div_1_div_2_ng_container_3_p_5_u_1_Template, 3, 3, "u", 21);
    i0.ɵɵtemplate(2, OgcFilterSelectionComponent_div_1_div_2_ng_container_3_p_5_u_2_Template, 3, 3, "u", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bundle_r25 = i0.ɵɵnextContext().$implicit;
    const ctx_r27 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.isLessResults(bundle_r25, "checkbox"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.isMoreResults(bundle_r25, "checkbox"));
} }
function OgcFilterSelectionComponent_div_1_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 18);
    i0.ɵɵtemplate(4, OgcFilterSelectionComponent_div_1_div_2_ng_container_3_mat_checkbox_4_Template, 2, 4, "mat-checkbox", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, OgcFilterSelectionComponent_div_1_div_2_ng_container_3_p_5_Template, 3, 2, "p", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const bundle_r25 = ctx.$implicit;
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(bundle_r25.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", bundle_r25.selectors);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.isLessResults(bundle_r25, "checkbox") || ctx_r20.isMoreResults(bundle_r25, "checkbox"));
} }
function OgcFilterSelectionComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "mat-divider");
    i0.ɵɵtemplate(2, OgcFilterSelectionComponent_div_1_div_2_div_2_Template, 5, 5, "div", 8);
    i0.ɵɵtemplate(3, OgcFilterSelectionComponent_div_1_div_2_ng_container_3_Template, 6, 3, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.getCheckboxesGroups().length > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.currentCheckboxesGroup.computedSelectors);
} }
function OgcFilterSelectionComponent_div_1_div_3_div_2_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selectorGroup_r42 = ctx.$implicit;
    i0.ɵɵproperty("value", selectorGroup_r42);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", selectorGroup_r42.title, " ");
} }
function OgcFilterSelectionComponent_div_1_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-select", 26);
    i0.ɵɵlistener("valueChange", function OgcFilterSelectionComponent_div_1_div_3_div_2_Template_mat_select_valueChange_2_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(3); return ctx_r43.currentRadioButtonsGroup = $event; });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, OgcFilterSelectionComponent_div_1_div_3_div_2_mat_option_4_Template, 2, 2, "mat-option", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(3, 3, "igo.geo.layer.legend.selectStyle"))("value", ctx_r39.currentRadioButtonsGroup);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r39.getRadioButtonsGroups());
} }
function OgcFilterSelectionComponent_div_1_div_3_ng_container_3_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-radio-button", 29);
    i0.ɵɵlistener("change", function OgcFilterSelectionComponent_div_1_div_3_ng_container_3_mat_radio_button_4_Template_mat_radio_button_change_0_listener() { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(4); return ctx_r49.emptyRadioButtons(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.geo.filter.resetFilters"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(3, 4, "igo.geo.filter.resetFilters"), " ");
} }
function OgcFilterSelectionComponent_div_1_div_3_ng_container_3_mat_radio_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-radio-button", 20);
    i0.ɵɵlistener("change", function OgcFilterSelectionComponent_div_1_div_3_ng_container_3_mat_radio_button_5_Template_mat_radio_button_change_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r53); const ogcRadioButton_r51 = restoredCtx.$implicit; const selector_r2 = i0.ɵɵnextContext(3).$implicit; const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.onSelectionChange(ogcRadioButton_r51, selector_r2.selectorType); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ogcRadioButton_r51 = ctx.$implicit;
    const ctx_r47 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("matTooltip", ctx_r47.getToolTip(ogcRadioButton_r51))("checked", ogcRadioButton_r51.enabled)("value", ogcRadioButton_r51);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ogcRadioButton_r51.title, " ");
} }
function OgcFilterSelectionComponent_div_1_div_3_ng_container_3_p_6_u_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 23);
    i0.ɵɵlistener("click", function OgcFilterSelectionComponent_div_1_div_3_ng_container_3_p_6_u_1_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(5); return ctx_r57.displayLessResults("radio"); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.geo.filter.displayLessResults"), " ");
} }
function OgcFilterSelectionComponent_div_1_div_3_ng_container_3_p_6_u_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "u", 24);
    i0.ɵɵlistener("click", function OgcFilterSelectionComponent_div_1_div_3_ng_container_3_p_6_u_2_Template_u_click_0_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(5); return ctx_r59.displayMoreResults("radio"); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.geo.filter.displayMoreResults"), " ");
} }
function OgcFilterSelectionComponent_div_1_div_3_ng_container_3_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, OgcFilterSelectionComponent_div_1_div_3_ng_container_3_p_6_u_1_Template, 3, 3, "u", 21);
    i0.ɵɵtemplate(2, OgcFilterSelectionComponent_div_1_div_3_ng_container_3_p_6_u_2_Template, 3, 3, "u", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bundle_r45 = i0.ɵɵnextContext().$implicit;
    const ctx_r48 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r48.isLessResults(bundle_r45, "radio"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r48.isMoreResults(bundle_r45, "radio"));
} }
function OgcFilterSelectionComponent_div_1_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 27);
    i0.ɵɵtemplate(4, OgcFilterSelectionComponent_div_1_div_3_ng_container_3_mat_radio_button_4_Template, 4, 6, "mat-radio-button", 28);
    i0.ɵɵtemplate(5, OgcFilterSelectionComponent_div_1_div_3_ng_container_3_mat_radio_button_5_Template, 2, 4, "mat-radio-button", 19);
    i0.ɵɵtemplate(6, OgcFilterSelectionComponent_div_1_div_3_ng_container_3_p_6_Template, 3, 2, "p", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const bundle_r45 = ctx.$implicit;
    const ctx_r40 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(bundle_r45.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", bundle_r45.unfiltered);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", bundle_r45.selectors);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r40.isLessResults(bundle_r45, "radio") || ctx_r40.isMoreResults(bundle_r45, "radio"));
} }
function OgcFilterSelectionComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelement(1, "mat-divider");
    i0.ɵɵtemplate(2, OgcFilterSelectionComponent_div_1_div_3_div_2_Template, 5, 5, "div", 8);
    i0.ɵɵtemplate(3, OgcFilterSelectionComponent_div_1_div_3_ng_container_3_Template, 7, 4, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.getRadioButtonsGroups().length > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.currentRadioButtonsGroup.computedSelectors);
} }
function OgcFilterSelectionComponent_div_1_div_4_div_2_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selectorGroup_r65 = ctx.$implicit;
    i0.ɵɵproperty("value", selectorGroup_r65);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", selectorGroup_r65.title, " ");
} }
function OgcFilterSelectionComponent_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-select", 31);
    i0.ɵɵlistener("valueChange", function OgcFilterSelectionComponent_div_1_div_4_div_2_Template_mat_select_valueChange_2_listener($event) { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(3); return ctx_r66.currentSelectGroup = $event; });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, OgcFilterSelectionComponent_div_1_div_4_div_2_mat_option_4_Template, 2, 2, "mat-option", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(3, 3, "igo.geo.layer.legend.selectStyle"))("value", ctx_r62.currentSelectGroup);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r62.getSelectGroups());
} }
function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_mat_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-button", 35);
    i0.ɵɵlistener("click", function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_mat_button_4_Template_mat_button_click_0_listener() { i0.ɵɵrestoreView(_r74); const ctx_r73 = i0.ɵɵnextContext(4); return ctx_r73.emptySelect(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.filter.resetFilters"));
} }
const _c1 = function () { return { standalone: true }; };
function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_div_6_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 41);
    i0.ɵɵlistener("ngModelChange", function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_div_6_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r79); const ctx_r78 = i0.ɵɵnextContext(5); return ctx_r78.allSelected = $event; })("change", function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_div_6_mat_checkbox_4_Template_mat_checkbox_change_0_listener() { i0.ɵɵrestoreView(_r79); const ctx_r80 = i0.ɵɵnextContext(5); return ctx_r80.toggleAllSelection(); });
    i0.ɵɵtext(1, "Tous ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r76 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngModel", ctx_r76.allSelected)("ngModelOptions", i0.ɵɵpureFunction0(2, _c1));
} }
function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_div_6_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-option", 42);
    i0.ɵɵlistener("onSelectionChange", function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_div_6_mat_option_5_Template_mat_option_onSelectionChange_0_listener() { i0.ɵɵrestoreView(_r83); const ctx_r82 = i0.ɵɵnextContext(5); return ctx_r82.optionClick(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ogcSelect_r81 = ctx.$implicit;
    const ctx_r77 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("matTooltip", ctx_r77.getToolTip(ogcSelect_r81))("value", ogcSelect_r81);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ogcSelect_r81.title, " ");
} }
function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-select", 37, 38);
    i0.ɵɵlistener("ngModelChange", function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_div_6_Template_mat_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r85); const ctx_r84 = i0.ɵɵnextContext(4); return ctx_r84.enableds = $event; });
    i0.ɵɵelementStart(3, "div", 18);
    i0.ɵɵtemplate(4, OgcFilterSelectionComponent_div_1_div_4_ng_container_3_div_6_mat_checkbox_4_Template, 2, 3, "mat-checkbox", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, OgcFilterSelectionComponent_div_1_div_4_ng_container_3_div_6_mat_option_5_Template, 2, 3, "mat-option", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bundle_r68 = i0.ɵɵnextContext().$implicit;
    const ctx_r70 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("multiple", bundle_r68.multiple)("placeholder", bundle_r68.title)("formControl", ctx_r70.select)("ngModel", ctx_r70.enableds);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", bundle_r68.multiple);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", bundle_r68.selectors);
} }
function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_ng_template_7_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ogcSelect_r88 = ctx.$implicit;
    const ctx_r87 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("matTooltip", ctx_r87.getToolTip(ogcSelect_r88))("value", ogcSelect_r88);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ogcSelect_r88.title, " ");
} }
function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 43);
    i0.ɵɵlistener("ngModelChange", function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_ng_template_7_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r90); const ctx_r89 = i0.ɵɵnextContext(4); return ctx_r89.enabled = $event; });
    i0.ɵɵtemplate(1, OgcFilterSelectionComponent_div_1_div_4_ng_container_3_ng_template_7_mat_option_1_Template, 2, 3, "mat-option", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bundle_r68 = i0.ɵɵnextContext().$implicit;
    const ctx_r72 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("placeholder", bundle_r68.title)("formControl", ctx_r72.select)("ngModel", ctx_r72.enabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", bundle_r68.selectors);
} }
function OgcFilterSelectionComponent_div_1_div_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 9);
    i0.ɵɵtemplate(4, OgcFilterSelectionComponent_div_1_div_4_ng_container_3_mat_button_4_Template, 3, 3, "mat-button", 32);
    i0.ɵɵelementStart(5, "mat-form-field");
    i0.ɵɵtemplate(6, OgcFilterSelectionComponent_div_1_div_4_ng_container_3_div_6_Template, 6, 6, "div", 33);
    i0.ɵɵtemplate(7, OgcFilterSelectionComponent_div_1_div_4_ng_container_3_ng_template_7_Template, 2, 4, "ng-template", null, 34, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const bundle_r68 = ctx.$implicit;
    const _r71 = i0.ɵɵreference(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(bundle_r68.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", bundle_r68.unfiltered && !bundle_r68.multiple);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", bundle_r68.multiple)("ngIfElse", _r71);
} }
function OgcFilterSelectionComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "mat-divider");
    i0.ɵɵtemplate(2, OgcFilterSelectionComponent_div_1_div_4_div_2_Template, 5, 5, "div", 8);
    i0.ɵɵtemplate(3, OgcFilterSelectionComponent_div_1_div_4_ng_container_3_Template, 9, 4, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r6.getSelectGroups().length > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.currentSelectGroup.computedSelectors);
} }
function OgcFilterSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, OgcFilterSelectionComponent_div_1_div_1_Template, 4, 2, "div", 3);
    i0.ɵɵtemplate(2, OgcFilterSelectionComponent_div_1_div_2_Template, 4, 2, "div", 4);
    i0.ɵɵtemplate(3, OgcFilterSelectionComponent_div_1_div_3_Template, 4, 2, "div", 5);
    i0.ɵɵtemplate(4, OgcFilterSelectionComponent_div_1_div_4_Template, 4, 2, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", selector_r2.selectorType === "pushButton");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", selector_r2.selectorType === "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", selector_r2.selectorType === "radioButton");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", selector_r2.selectorType === "select");
} }
function OgcFilterSelectionComponent_div_2_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.geo.filter.reportingDate"));
} }
function OgcFilterSelectionComponent_div_2_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r93 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r93.currentFilter.title);
} }
function OgcFilterSelectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r95 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "mat-divider");
    i0.ɵɵtemplate(2, OgcFilterSelectionComponent_div_2_h4_2_Template, 3, 3, "h4", 2);
    i0.ɵɵtemplate(3, OgcFilterSelectionComponent_div_2_h4_3_Template, 2, 1, "h4", 2);
    i0.ɵɵelementStart(4, "igo-ogc-filter-time", 46);
    i0.ɵɵlistener("datasourceChange", function OgcFilterSelectionComponent_div_2_Template_igo_ogc_filter_time_datasourceChange_4_listener($event) { i0.ɵɵrestoreView(_r95); const ctx_r94 = i0.ɵɵnextContext(); return ctx_r94.datasource = $event; })("currentFilterChange", function OgcFilterSelectionComponent_div_2_Template_igo_ogc_filter_time_currentFilterChange_4_listener($event) { i0.ɵɵrestoreView(_r95); const ctx_r96 = i0.ɵɵnextContext(); return ctx_r96.currentFilter = $event; })("changeProperty", function OgcFilterSelectionComponent_div_2_Template_igo_ogc_filter_time_changeProperty_4_listener($event) { i0.ɵɵrestoreView(_r95); const ctx_r97 = i0.ɵɵnextContext(); return ctx_r97.changeProperty($event.value, $event.pos); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.currentFilter.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.currentFilter.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("datasource", ctx_r1.datasource)("currentFilter", ctx_r1.currentFilter);
} }
export class OgcFilterSelectionComponent {
    constructor(ogcFilterService, formBuilder) {
        this.ogcFilterService = ogcFilterService;
        this.formBuilder = formBuilder;
        this.checkboxesIndex = 5;
        this.radioButtonsIndex = 5;
        this.baseIndex = 5;
        this.ogcFilterOperator = OgcFilterOperator;
        this.color = 'primary';
        this.allSelected = false;
        this.select = new FormControl();
        this.enabled$ = new BehaviorSubject(undefined);
        this.enableds$ = new BehaviorSubject([]);
        this.ogcFilterWriter = new OgcFilterWriter();
        this.buildForm();
    }
    get currentFilter() {
        return this._currentFilter;
    }
    set currentFilter(value) {
        var _a;
        this._currentFilter = value;
        if ((_a = this._currentFilter) === null || _a === void 0 ? void 0 : _a.sliderOptions) {
            this._currentFilter.sliderOptions.enabled = false; // remove slider toggle (animation temporelle)
        }
    }
    get ogcFiltersSelectors() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        const ogcSelector = [];
        if ((_c = (_b = (_a = this.datasource) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.ogcFilters) === null || _c === void 0 ? void 0 : _c.pushButtons) {
            ogcSelector.push((_f = (_e = (_d = this.datasource) === null || _d === void 0 ? void 0 : _d.options) === null || _e === void 0 ? void 0 : _e.ogcFilters) === null || _f === void 0 ? void 0 : _f.pushButtons);
        }
        if ((_j = (_h = (_g = this.datasource) === null || _g === void 0 ? void 0 : _g.options) === null || _h === void 0 ? void 0 : _h.ogcFilters) === null || _j === void 0 ? void 0 : _j.checkboxes) {
            ogcSelector.push((_m = (_l = (_k = this.datasource) === null || _k === void 0 ? void 0 : _k.options) === null || _l === void 0 ? void 0 : _l.ogcFilters) === null || _m === void 0 ? void 0 : _m.checkboxes);
        }
        if ((_q = (_p = (_o = this.datasource) === null || _o === void 0 ? void 0 : _o.options) === null || _p === void 0 ? void 0 : _p.ogcFilters) === null || _q === void 0 ? void 0 : _q.radioButtons) {
            ogcSelector.push((_t = (_s = (_r = this.datasource) === null || _r === void 0 ? void 0 : _r.options) === null || _s === void 0 ? void 0 : _s.ogcFilters) === null || _t === void 0 ? void 0 : _t.radioButtons);
        }
        if ((_w = (_v = (_u = this.datasource) === null || _u === void 0 ? void 0 : _u.options) === null || _v === void 0 ? void 0 : _v.ogcFilters) === null || _w === void 0 ? void 0 : _w.select) {
            ogcSelector.push((_z = (_y = (_x = this.datasource) === null || _x === void 0 ? void 0 : _x.options) === null || _y === void 0 ? void 0 : _y.ogcFilters) === null || _z === void 0 ? void 0 : _z.select);
        }
        ogcSelector.sort((a, b) => {
            if (a.order < b.order) {
                return -1;
            }
            if (a.order > b.order) {
                return 1;
            }
            return 0;
        });
        return ogcSelector;
    }
    get currentPushButtonsGroup() {
        return this.form.get('pushButtonsGroup').value;
    }
    set currentPushButtonsGroup(value) {
        this.form.patchValue({ pushButtonsGroup: value });
    }
    get currentCheckboxesGroup() {
        return this.form.get('checkboxesGroup').value;
    }
    set currentCheckboxesGroup(value) {
        this.form.patchValue({ checkboxesGroup: value });
    }
    get currentRadioButtonsGroup() {
        return this.form.get('radioButtonsGroup').value;
    }
    set currentRadioButtonsGroup(value) {
        this.form.patchValue({ radioButtonsGroup: value });
    }
    get currentSelectGroup() {
        return this.form.get('selectGroup').value;
    }
    set currentSelectGroup(value) {
        this.form.patchValue({ selectGroup: value });
    }
    get enabled() {
        return this.enabled$.value;
    }
    set enabled(value) {
        this.enabled$.next(value);
        clearTimeout(this.applyFiltersTimeout);
        this.currentSelectGroup.computedSelectors.forEach(compSelect => {
            compSelect.selectors.forEach(selector => {
                value === selector ? selector.enabled = true : selector.enabled = false;
            });
        });
        this.applyFiltersTimeout = setTimeout(() => {
            this.applyFilters();
        }, 750);
    }
    get enableds() {
        return this.enableds$.value;
    }
    set enableds(value) {
        this.enableds$.next(value);
        clearTimeout(this.applyFiltersTimeout);
        this.currentSelectGroup.computedSelectors.forEach(compSelect => {
            compSelect.selectors.forEach(selector => {
                value.includes(selector) ? selector.enabled = true : selector.enabled = false;
            });
        });
        this.applyFiltersTimeout = setTimeout(() => {
            this.applyFilters();
        }, 750);
    }
    buildForm() {
        this.form = this.formBuilder.group({
            pushButtons: ['', [Validators.required]],
            radioButtons: ['', [Validators.required]],
            pushButtonsGroup: ['', [Validators.required]],
            checkboxesGroup: ['', [Validators.required]],
            radioButtonsGroup: ['', [Validators.required]],
            selectGroup: ['', [Validators.required]],
        });
    }
    getPushButtonsGroups() {
        var _a, _b, _c;
        if ((_c = (_b = (_a = this.datasource) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.ogcFilters) === null || _c === void 0 ? void 0 : _c.pushButtons) {
            return this.datasource.options.ogcFilters.pushButtons.groups;
        }
    }
    getCheckboxesGroups() {
        var _a, _b, _c;
        if ((_c = (_b = (_a = this.datasource) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.ogcFilters) === null || _c === void 0 ? void 0 : _c.checkboxes) {
            return this.datasource.options.ogcFilters.checkboxes.groups;
        }
    }
    getRadioButtonsGroups() {
        var _a, _b, _c;
        if ((_c = (_b = (_a = this.datasource) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.ogcFilters) === null || _c === void 0 ? void 0 : _c.radioButtons) {
            return this.datasource.options.ogcFilters.radioButtons.groups;
        }
    }
    getSelectGroups() {
        var _a, _b, _c;
        if ((_c = (_b = (_a = this.datasource) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.ogcFilters) === null || _c === void 0 ? void 0 : _c.select) {
            return this.datasource.options.ogcFilters.select.groups;
        }
    }
    ngOnInit() {
        if (this.datasource.options.ogcFilters) {
            if (this.datasource.options.ogcFilters.pushButtons) {
                this.currentPushButtonsGroup =
                    this.datasource.options.ogcFilters.pushButtons.groups.find(group => group.enabled) ||
                        this.datasource.options.ogcFilters.pushButtons.groups[0];
            }
            if (this.datasource.options.ogcFilters.checkboxes) {
                this.currentCheckboxesGroup =
                    this.datasource.options.ogcFilters.checkboxes.groups.find(group => group.enabled) ||
                        this.datasource.options.ogcFilters.checkboxes.groups[0];
            }
            if (this.datasource.options.ogcFilters.radioButtons) {
                this.currentRadioButtonsGroup =
                    this.datasource.options.ogcFilters.radioButtons.groups.find(group => group.enabled) ||
                        this.datasource.options.ogcFilters.radioButtons.groups[0];
            }
            if (this.datasource.options.ogcFilters.select) {
                this.currentSelectGroup =
                    this.datasource.options.ogcFilters.select.groups.find(group => group.enabled) ||
                        this.datasource.options.ogcFilters.select.groups[0];
                this.getSelectEnabled();
            }
            this.applyFilters();
        }
        this.form
            .get('pushButtonsGroup')
            .valueChanges
            .pipe(debounceTime(750))
            .subscribe(() => {
            this.onPushButtonsChangeGroup();
            this.applyFilters();
        });
        this.form
            .get('checkboxesGroup')
            .valueChanges
            .pipe(debounceTime(750))
            .subscribe(() => {
            this.onCheckboxesChangeGroup();
            this.applyFilters();
        });
        this.form
            .get('radioButtonsGroup')
            .valueChanges
            .pipe(debounceTime(750))
            .subscribe(() => {
            this.onRadioButtonsChangeGroup();
            this.applyFilters();
        });
        this.form
            .get('selectGroup')
            .valueChanges
            .pipe(debounceTime(750))
            .subscribe(() => {
            this.onSelectChangeGroup();
            this.applyFilters();
        });
        this.form
            .get('pushButtons')
            .valueChanges
            .pipe(debounceTime(750))
            .subscribe(() => {
            this.applyFilters();
        });
        this.form
            .get('radioButtons')
            .valueChanges
            .pipe(debounceTime(750))
            .subscribe(() => {
            this.applyFilters();
        });
    }
    getSelectEnabled() {
        const enableds = [];
        let enabled;
        this.currentSelectGroup.computedSelectors.forEach(compSelect => {
            if (compSelect.multiple) {
                compSelect.selectors.forEach(selector => {
                    if (selector.enabled) {
                        enableds.push(selector);
                    }
                });
                this.enableds = enableds;
            }
            else {
                compSelect.selectors.forEach(selector => {
                    if (selector.enabled) {
                        enabled = selector;
                    }
                });
                this.enabled = enabled;
            }
        });
    }
    getToolTip(selector) {
        let toolTip;
        if (selector.tooltip) {
            if (Array.isArray(selector.tooltip)) {
                toolTip = selector.tooltip.join('\n');
            }
            else {
                toolTip = selector.tooltip;
            }
        }
        return toolTip || '';
    }
    // getButtonStyle(pb: OgcPushButton): {} {
    //   let styles;
    //   if (pb.color) {
    //     styles = {
    //       'background-color': pb.enabled ? `rgba(${pb.color})` : `rgba(255,255,255,0)`
    //     };
    //   } else {
    //     styles = {
    //       'background-color': pb.enabled ? 'accent': `rgba(255,255,255,0)`,
    //       'color': pb.enabled ? `rgba(0,0,0,0.9)` : `rgba(33,33,33,0.38)`
    //     }
    //   }
    //   return styles;
    // }
    getButtonColor(pushButton) {
        let styles;
        if (pushButton.color && pushButton.enabled) {
            styles = {
                'background-color': `rgba(${pushButton.color})`
            };
        }
        return styles;
    }
    bundleIsVertical(bundle) {
        return bundle.vertical ? bundle.vertical : false;
    }
    onPushButtonsChangeGroup() {
        this.getPushButtonsGroups().map(group => group.enabled = false);
        this.getPushButtonsGroups().find(group => group === this.currentPushButtonsGroup).enabled = true;
    }
    onCheckboxesChangeGroup() {
        this.getCheckboxesGroups().map(group => group.enabled = false);
        this.getCheckboxesGroups().find(group => group === this.currentCheckboxesGroup).enabled = true;
    }
    onRadioButtonsChangeGroup() {
        this.getRadioButtonsGroups().map(group => group.enabled = false);
        this.getRadioButtonsGroups().find(group => group === this.currentRadioButtonsGroup).enabled = true;
    }
    onSelectChangeGroup() {
        this.getSelectGroups().map(group => group.enabled = false);
        this.getSelectGroups().find(group => group === this.currentSelectGroup).enabled = true;
    }
    onSelectionChange(currentOgcSelection, selectorType) {
        clearTimeout(this.applyFiltersTimeout);
        if (selectorType === 'radioButton') {
            this.emptyRadioButtons();
        }
        if (currentOgcSelection) {
            currentOgcSelection.enabled = !currentOgcSelection.enabled;
        }
        this.applyFiltersTimeout = setTimeout(() => {
            this.applyFilters();
        }, 750);
    }
    emptyRadioButtons() {
        this.currentRadioButtonsGroup.computedSelectors.forEach(compSelect => {
            compSelect.selectors.map(selector => selector.enabled = false);
            this.applyFiltersTimeout = setTimeout(() => {
                this.applyFilters();
            }, 750);
        });
    }
    emptySelect() {
        this.enabled = [];
    }
    toggleAllSelection() {
        if (this.allSelected) {
            this.sel.options.forEach((item) => item.select());
        }
        else {
            this.sel.options.forEach((item) => item.deselect());
        }
    }
    optionClick() {
        let newStatus = true;
        this.sel.options.forEach((item) => {
            if (!item.selected) {
                newStatus = false;
            }
        });
        this.allSelected = newStatus;
    }
    applyFilters() {
        let filterQueryString = '';
        const conditions = [];
        const currentGroups = [this.currentPushButtonsGroup, this.currentCheckboxesGroup,
            this.currentRadioButtonsGroup, this.currentSelectGroup];
        for (const currentGroup of currentGroups) {
            if (currentGroup.computedSelectors) {
                currentGroup.computedSelectors.map(selectorBundle => {
                    const bundleCondition = [];
                    selectorBundle.selectors
                        .filter(ogcSelector => ogcSelector.enabled === true)
                        .forEach(enabledSelector => bundleCondition.push(enabledSelector.filters));
                    if (bundleCondition.length >= 1) {
                        if (bundleCondition.length === 1) {
                            conditions.push(bundleCondition[0]);
                        }
                        else {
                            conditions.push({ logical: selectorBundle.logical, filters: bundleCondition });
                        }
                    }
                });
            }
        }
        if (this.isTemporalOperator() && this._currentFilter.active) {
            conditions.push(this.datasource.options.ogcFilters.interfaceOgcFilters[0]);
        }
        if (conditions.length >= 1) {
            filterQueryString = this.ogcFilterWriter
                .buildFilter(conditions.length === 1 ?
                conditions[0] : { logical: 'And', filters: conditions });
        }
        if (this.datasource.options.type === 'wms') {
            this.ogcFilterService.filterByOgc(this.datasource, filterQueryString);
        }
        if (this.datasource.options.type === 'wfs') {
            // TODO: Check how to prevent wfs to refresh when filter icon is pushed...
            this.datasource.ol.refresh();
        }
        this.datasource.setOgcFilters(this.datasource.options.ogcFilters, true);
    }
    isMoreResults(bundle, type) {
        let selectorsLength = 0;
        for (const selectors of bundle.selectors) {
            selectorsLength++;
        }
        const index = type === 'radio' ? this.radioButtonsIndex : this.checkboxesIndex;
        return selectorsLength > index;
    }
    displayMoreResults(type) {
        type === 'radio' ? this.radioButtonsIndex += 5 : this.checkboxesIndex += 5;
        return;
    }
    isLessResults(bundle, type) {
        let selectorsLength = 0;
        for (const selectors of bundle.selectors) {
            selectorsLength++;
        }
        const index = type === 'radio' ? this.radioButtonsIndex : this.checkboxesIndex;
        return this.baseIndex !== index && selectorsLength > this.baseIndex;
    }
    displayLessResults(type) {
        type === 'radio' ? this.radioButtonsIndex = this.baseIndex : this.checkboxesIndex = this.baseIndex;
        return;
    }
    isTemporalOperator() {
        var _a, _b;
        return (((_b = (_a = this.currentFilter) === null || _a === void 0 ? void 0 : _a.operator) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ===
            this.ogcFilterOperator.During.toLowerCase());
    }
    changeProperty(value, pos, refreshFilter = true) {
        const detectedProperty = this.detectProperty(pos);
        if (detectedProperty) {
            this.datasource.options.ogcFilters.interfaceOgcFilters.find(filter => filter.filterid === this.currentFilter.filterid)[detectedProperty] = value;
            if (refreshFilter) {
                this.applyFilters();
            }
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
}
OgcFilterSelectionComponent.ɵfac = function OgcFilterSelectionComponent_Factory(t) { return new (t || OgcFilterSelectionComponent)(i0.ɵɵdirectiveInject(i1.OGCFilterService), i0.ɵɵdirectiveInject(i2.FormBuilder)); };
OgcFilterSelectionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OgcFilterSelectionComponent, selectors: [["igo-ogc-filter-selection"]], viewQuery: function OgcFilterSelectionComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sel = _t.first);
    } }, inputs: { refreshFilters: "refreshFilters", datasource: "datasource", map: "map", checkboxesIndex: "checkboxesIndex", radioButtonsIndex: "radioButtonsIndex", baseIndex: "baseIndex", currentFilter: "currentFilter" }, decls: 3, vars: 3, consts: [[3, "formGroup"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pushButtonGroups", 4, "ngIf"], ["class", "checkboxGroups", 4, "ngIf"], ["class", "radioButtonGroups", 4, "ngIf"], ["class", "selectGroups", 4, "ngIf"], [1, "pushButtonGroups"], ["class", "groupsSelector", 4, "ngIf"], [1, "groupsSelector"], ["formControlName", "pushButtonsGroup", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "pushButtons", "appearance", "legacy", "multiple", "true", 1, "mat-typography", 3, "vertical"], ["tooltip-position", "below", "matTooltipShowDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "ngStyle", "checked", "value", "change", 4, "ngFor", "ngForOf"], ["tooltip-position", "below", "matTooltipShowDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "ngStyle", "checked", "value", "change"], [1, "checkboxGroups"], ["formControlName", "checkboxesGroup", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "value", "valueChange"], [1, "checkboxes", "mat-typography"], ["tooltip-position", "below", "matTooltipShowDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "checked", "value", "change", 4, "ngFor", "ngForOf"], ["tooltip-position", "below", "matTooltipShowDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "checked", "value", "change"], ["class", "lessResults mat-typography", 3, "click", 4, "ngIf"], ["class", "moreResults mat-typography", 3, "click", 4, "ngIf"], [1, "lessResults", "mat-typography", 3, "click"], [1, "moreResults", "mat-typography", 3, "click"], [1, "radioButtonGroups"], ["formControlName", "radioButtonsGroup", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "value", "valueChange"], ["formControlName", "radioButtons", 1, "mat-typography"], ["tooltip-position", "below", "matTooltipShowDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "change", 4, "ngIf"], ["tooltip-position", "below", "matTooltipShowDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "change"], [1, "selectGroups"], ["formControlName", "selectGroup", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "value", "valueChange"], ["mat-icon-button", "", "color", "warn", "tooltip-position", "below", "matTooltipShowDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "click", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["notMulti", ""], ["mat-icon-button", "", "color", "warn", "tooltip-position", "below", "matTooltipShowDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "click"], ["svgIcon", "filter-remove"], [3, "multiple", "placeholder", "formControl", "ngModel", "ngModelChange"], ["selection", ""], [3, "ngModel", "ngModelOptions", "ngModelChange", "change", 4, "ngIf"], ["tooltip-position", "below", "matTooltipDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["tooltip-position", "below", "matTooltipDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "value", "onSelectionChange"], [3, "placeholder", "formControl", "ngModel", "ngModelChange"], ["tooltip-position", "below", "matTooltipDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "value", 4, "ngFor", "ngForOf"], ["tooltip-position", "below", "matTooltipDelay", "500", "matTooltipClass", "material-tooltip", 3, "matTooltip", "value"], [3, "datasource", "currentFilter", "datasourceChange", "currentFilterChange", "changeProperty"]], template: function OgcFilterSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵtemplate(1, OgcFilterSelectionComponent_div_1_Template, 5, 4, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, OgcFilterSelectionComponent_div_2_Template, 5, 4, "div", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.ogcFiltersSelectors);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isTemporalOperator());
    } }, styles: [".mat-button-toggle-group[_ngcontent-%COMP%]{margin:5px;flex-wrap:wrap;box-shadow:none}.checkboxes[_ngcontent-%COMP%]{flex-wrap:wrap;box-shadow:none}.groupsSelector[_ngcontent-%COMP%]{text-align:center}mat-button-toggle[_ngcontent-%COMP%]{display:inline-flex;border:1.5px solid black;border-radius:5px;margin:5px;white-space:normal;min-height:40px;height:auto;width:150px}mat-button-toggle[_ngcontent-%COMP%]     .mat-button-toggle-label-content{line-height:unset;font-size:small;display:block}  .material-tooltip{white-space:pre-wrap}mat-checkbox[_ngcontent-%COMP%], mat-radio-button[_ngcontent-%COMP%]{margin:7px;width:95%;display:inline-flex;font-size:larger}mat-checkbox[_ngcontent-%COMP%]     label, mat-radio-button[_ngcontent-%COMP%]     label{white-space:normal}mat-checkbox[_ngcontent-%COMP%]{vertical-align:middle}mat-button[_ngcontent-%COMP%]{padding-right:10px}h4[_ngcontent-%COMP%]{margin:7px;text-align:left}u[_ngcontent-%COMP%]{cursor:pointer;color:#00f;margin:5px}p[_ngcontent-%COMP%]{margin:unset}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterSelectionComponent, [{
        type: Component,
        args: [{
                selector: 'igo-ogc-filter-selection',
                templateUrl: './ogc-filter-selection.component.html',
                styleUrls: ['./ogc-filter-selection.component.scss']
            }]
    }], function () { return [{ type: i1.OGCFilterService }, { type: i2.FormBuilder }]; }, { sel: [{
            type: ViewChild,
            args: ['selection']
        }], refreshFilters: [{
            type: Input
        }], datasource: [{
            type: Input
        }], map: [{
            type: Input
        }], checkboxesIndex: [{
            type: Input
        }], radioButtonsIndex: [{
            type: Input
        }], baseIndex: [{
            type: Input
        }], currentFilter: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlci1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZmlsdGVyL29nYy1maWx0ZXItc2VsZWN0aW9uL29nYy1maWx0ZXItc2VsZWN0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9vZ2MtZmlsdGVyLXNlbGVjdGlvbi9vZ2MtZmlsdGVyLXNlbGVjdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFVdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSWpFLE9BQU8sRUFBZSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztJQ2QzQixzQ0FDMEI7SUFBQSxZQUMxQjtJQUFBLGlCQUFhOzs7SUFEWCx5Q0FBdUI7SUFBQyxlQUMxQjtJQUQwQix1REFDMUI7Ozs7SUFSTiw4QkFBc0U7SUFDcEUsc0NBQWdCO0lBQ2Qsc0NBR3NDO0lBQXBDLHlQQUFtQzs7SUFDbkMsNkdBRWE7SUFDZixpQkFBYTtJQUNmLGlCQUFpQjtJQUNuQixpQkFBTTs7O0lBUEEsZUFBNkQ7SUFBN0QscUZBQTZELHlDQUFBO0lBRXZCLGVBQXlCO0lBQXpCLHVEQUF5Qjs7OztJQVVqRSw2Q0FJMEI7SUFEVSxrYUFBa0U7SUFDNUUsWUFDMUI7SUFBQSxpQkFBb0I7Ozs7SUFKbEIsa0VBQXdDLHNEQUFBLHNDQUFBLDRCQUFBO0lBR2hCLGVBQzFCO0lBRDBCLHVEQUMxQjs7O0lBVEosNkJBQStFO0lBQzdFLDBCQUFJO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSztJQUN6QixtREFDaUk7SUFDL0gsb0lBS29CO0lBQ3RCLGlCQUEwQjtJQUM1QiwwQkFBZTs7OztJQVZULGVBQWdCO0lBQWhCLHNDQUFnQjtJQUV1RCxlQUFxQztJQUFyQyx5RUFBcUM7SUFDakUsZUFBbUI7SUFBbkIsOENBQW1COzs7SUFsQnRFLDhCQUE2RTtJQUMzRSw4QkFBMkI7SUFDM0Isd0ZBV007SUFDTiwwR0FXZTtJQUNqQixpQkFBTTs7O0lBeEJ5QixlQUF1QztJQUF2QywrREFBdUM7SUFZbkMsZUFBNEM7SUFBNUMsMEVBQTRDOzs7SUFzQnZFLHNDQUMwQjtJQUFBLFlBQzFCO0lBQUEsaUJBQWE7OztJQURYLHlDQUF1QjtJQUFDLGVBQzFCO0lBRDBCLHVEQUMxQjs7OztJQVJOLDhCQUFxRTtJQUNuRSxzQ0FBZ0I7SUFDZCxzQ0FHcUM7SUFBbkMsd1BBQWtDOztJQUNsQyw2R0FFYTtJQUNmLGlCQUFhO0lBQ2YsaUJBQWlCO0lBQ25CLGlCQUFNOzs7SUFQQSxlQUE2RDtJQUE3RCxxRkFBNkQseUNBQUE7SUFFdkIsZUFBd0I7SUFBeEIsdURBQXdCOzs7O0lBU2hFLHdDQUd3QjtJQURVLG9aQUFnRTtJQUMxRSxZQUN4QjtJQUFBLGlCQUFlOzs7O0lBSGIsZ0VBQXNDLG9DQUFBLDBCQUFBO0lBRWhCLGVBQ3hCO0lBRHdCLHFEQUN4Qjs7OztJQUdBLDZCQUUyQztJQUF6Qyw4TkFBNEIsVUFBVSxLQUFFO0lBQUMsWUFDM0M7O0lBQUEsaUJBQUk7O0lBRHVDLGVBQzNDO0lBRDJDLHlGQUMzQzs7OztJQUNBLDZCQUUyQztJQUF6Qyw4TkFBNEIsVUFBVSxLQUFFO0lBQUMsWUFDM0M7O0lBQUEsaUJBQUk7O0lBRHVDLGVBQzNDO0lBRDJDLHlGQUMzQzs7O0lBUkYseUJBQWtGO0lBQ2hGLHdHQUdJO0lBQ0osd0dBR0k7SUFDTixpQkFBSTs7OztJQVJFLGVBQXVDO0lBQXZDLG9FQUF1QztJQUl2QyxlQUF1QztJQUF2QyxvRUFBdUM7OztJQWQvQyw2QkFBOEU7SUFDNUUsMEJBQUk7SUFBQSxZQUFnQjtJQUFBLGlCQUFLO0lBQ3pCLCtCQUF1QztJQUNyQywwSEFJZTtJQUNqQixpQkFBTTtJQUNOLG1HQVNJO0lBQ04sMEJBQWU7Ozs7SUFsQlQsZUFBZ0I7SUFBaEIsc0NBQWdCO0lBRW9CLGVBQW1CO0lBQW5CLDhDQUFtQjtJQU12RCxlQUE0RTtJQUE1RSxxSEFBNEU7OztJQXZCcEYsK0JBQXlFO0lBQ3ZFLDhCQUEyQjtJQUMzQix3RkFXTTtJQUNOLDBHQW1CZTtJQUNqQixpQkFBTTs7O0lBaEN5QixlQUFzQztJQUF0Qyw4REFBc0M7SUFZbEMsZUFBMkM7SUFBM0MseUVBQTJDOzs7SUE4QnRFLHNDQUMwQjtJQUFBLFlBQzFCO0lBQUEsaUJBQWE7OztJQURYLHlDQUF1QjtJQUFDLGVBQzFCO0lBRDBCLHVEQUMxQjs7OztJQVJOLDhCQUF1RTtJQUNyRSxzQ0FBZ0I7SUFDZCxzQ0FHdUM7SUFBckMsMFBBQW9DOztJQUNwQyw2R0FFYTtJQUNmLGlCQUFhO0lBQ2YsaUJBQWlCO0lBQ25CLGlCQUFNOzs7SUFQQSxlQUE2RDtJQUE3RCxxRkFBNkQsMkNBQUE7SUFFdkIsZUFBMEI7SUFBMUIseURBQTBCOzs7O0lBVWxFLDRDQUVpQztJQUEvQiw4UEFBOEI7O0lBQUMsWUFDakM7O0lBQUEsaUJBQW1COztJQUZqQixnRkFBd0Q7SUFDekIsZUFDakM7SUFEaUMsbUZBQ2pDOzs7O0lBQ0EsNENBRzJCO0lBRFUsa2FBQW1FO0lBQzdFLFlBQzNCO0lBQUEsaUJBQW1COzs7O0lBSGpCLG1FQUF5Qyx1Q0FBQSw2QkFBQTtJQUVoQixlQUMzQjtJQUQyQix3REFDM0I7Ozs7SUFFRSw2QkFFd0M7SUFBdEMsOE5BQTRCLE9BQU8sS0FBRTtJQUFDLFlBQ3hDOztJQUFBLGlCQUFJOztJQURvQyxlQUN4QztJQUR3Qyx5RkFDeEM7Ozs7SUFDQSw2QkFFd0M7SUFBdEMsOE5BQTRCLE9BQU8sS0FBRTtJQUFDLFlBQ3hDOztJQUFBLGlCQUFJOztJQURvQyxlQUN4QztJQUR3Qyx5RkFDeEM7OztJQVJGLHlCQUE0RTtJQUMxRSx3R0FHSTtJQUNKLHdHQUdJO0lBQ04saUJBQUk7Ozs7SUFSRSxlQUFvQztJQUFwQyxpRUFBb0M7SUFJcEMsZUFBb0M7SUFBcEMsaUVBQW9DOzs7SUFsQjlDLDZCQUFnRjtJQUM5RSwwQkFBSTtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFDekIsMkNBQ3dEO0lBQ3RELGtJQUdtQjtJQUNuQixrSUFJbUI7SUFDbkIsbUdBU0k7SUFDTixpQkFBa0I7SUFDcEIsMEJBQWU7Ozs7SUF2QlQsZUFBZ0I7SUFBaEIsc0NBQWdCO0lBR0MsZUFBdUI7SUFBdkIsNENBQXVCO0lBSUcsZUFBbUI7SUFBbkIsOENBQW1CO0lBSzVELGVBQXNFO0lBQXRFLCtHQUFzRTs7O0lBM0JoRiwrQkFBK0U7SUFDN0UsOEJBQTJCO0lBQzNCLHdGQVdNO0lBQ04sMEdBd0JlO0lBQ2pCLGlCQUFNOzs7SUFyQ3lCLGVBQXdDO0lBQXhDLGdFQUF3QztJQVlwQyxlQUE2QztJQUE3QywyRUFBNkM7OztJQW1DeEUsc0NBQzBCO0lBQUEsWUFDMUI7SUFBQSxpQkFBYTs7O0lBRFgseUNBQXVCO0lBQUMsZUFDMUI7SUFEMEIsdURBQzFCOzs7O0lBUk4sOEJBQWlFO0lBQy9ELHNDQUFnQjtJQUNkLHNDQUdpQztJQUEvQixvUEFBOEI7O0lBQzlCLDZHQUVhO0lBQ2YsaUJBQWE7SUFDZixpQkFBaUI7SUFDbkIsaUJBQU07OztJQVBBLGVBQTZEO0lBQTdELHFGQUE2RCxxQ0FBQTtJQUV2QixlQUFvQjtJQUFwQixtREFBb0I7Ozs7SUFTNUQsc0NBSTBCO0lBQXhCLDBPQUF1Qjs7SUFDdkIsK0JBQTZDO0lBQy9DLGlCQUFhOztJQUhYLGdGQUF3RDs7Ozs7SUFVbEQsd0NBRWtDO0lBRGhDLGlSQUF5QixnUEFBQTtJQUNPLHFCQUNsQztJQUFBLGlCQUFlOzs7SUFGYiw2Q0FBeUIsOENBQUE7Ozs7SUFJN0Isc0NBR3NCO0lBRHBCLHdRQUFtQztJQUNmLFlBQ3RCO0lBQUEsaUJBQWE7Ozs7SUFIWCw4REFBb0Msd0JBQUE7SUFFaEIsZUFDdEI7SUFEc0IsbURBQ3RCOzs7O0lBZEosMkJBQTRDO0lBQzFDLDBDQUVnRDtJQUF2Qiw2UEFBc0I7SUFDN0MsK0JBQXVDO0lBQ3JDLGdJQUdlO0lBQ2pCLGlCQUFNO0lBQ04sNEhBSWE7SUFDZixpQkFBYTtJQUNmLGlCQUFNOzs7O0lBZFMsZUFBNEI7SUFBNUIsOENBQTRCLGlDQUFBLCtCQUFBLDZCQUFBO0lBR3RCLGVBQXFCO0lBQXJCLDBDQUFxQjtJQUtKLGVBQW1CO0lBQW5CLDhDQUFtQjs7O0lBV3JELHNDQUVzQjtJQUFBLFlBQ3RCO0lBQUEsaUJBQWE7Ozs7SUFGWCw4REFBb0Msd0JBQUE7SUFDaEIsZUFDdEI7SUFEc0IsbURBQ3RCOzs7O0lBTkYsc0NBRStDO0lBQXRCLG9RQUFxQjtJQUM1QyxvSUFHYTtJQUNmLGlCQUFhOzs7O0lBTlgsOENBQTRCLCtCQUFBLDRCQUFBO0lBRU0sZUFBbUI7SUFBbkIsOENBQW1COzs7SUFoQy9ELDZCQUEwRTtJQUN4RSwwQkFBSTtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFDekIsOEJBQTRCO0lBQzFCLHNIQU1hO0lBQ2Isc0NBQWdCO0lBQ2Qsd0dBZ0JNO0lBQ04seUpBU2M7SUFDaEIsaUJBQWlCO0lBQ25CLGlCQUFNO0lBQ1IsMEJBQWU7Ozs7SUF2Q1QsZUFBZ0I7SUFBaEIsc0NBQWdCO0lBRUwsZUFBMkM7SUFBM0Msb0VBQTJDO0lBUWhELGVBQXVCO0lBQXZCLDBDQUF1QixrQkFBQTs7O0lBekJyQywrQkFBcUU7SUFDbkUsOEJBQTJCO0lBQzNCLHdGQVdNO0lBQ04sMEdBd0NlO0lBQ2pCLGlCQUFNOzs7SUFyRHlCLGVBQWtDO0lBQWxDLDBEQUFrQztJQVk5QixlQUF1QztJQUF2QyxxRUFBdUM7OztJQXhINUUsMkJBQWtEO0lBQ2hELGtGQTBCTTtJQUVOLGtGQWtDTTtJQUVOLGtGQXVDTTtJQUVOLGtGQXVETTtJQUNSLGlCQUFNOzs7SUFqSzJCLGVBQTRDO0lBQTVDLGdFQUE0QztJQTRCOUMsZUFBMEM7SUFBMUMsOERBQTBDO0lBb0N2QyxlQUE2QztJQUE3QyxpRUFBNkM7SUF5Q2xELGVBQXdDO0lBQXhDLDREQUF3Qzs7O0lBNkRyRSwwQkFBaUM7SUFBQSxZQUFnRDs7SUFBQSxpQkFBSzs7SUFBckQsZUFBZ0Q7SUFBaEQsMEVBQWdEOzs7SUFDakYsMEJBQWdDO0lBQUEsWUFBeUI7SUFBQSxpQkFBSzs7O0lBQTlCLGVBQXlCO0lBQXpCLGlEQUF5Qjs7OztJQUgzRCwyQkFBa0M7SUFDaEMsOEJBQTJCO0lBQzNCLGdGQUFzRjtJQUN0RixnRkFBOEQ7SUFDOUQsK0NBRzhEO0lBRjVELGtQQUEyQiw4T0FBQSxzUEFBQTtJQUc3QixpQkFBc0I7SUFDeEIsaUJBQU07OztJQVBDLGVBQTBCO0lBQTFCLGtEQUEwQjtJQUMxQixlQUF5QjtJQUF6QixpREFBeUI7SUFFNUIsZUFBMkI7SUFBM0IsOENBQTJCLHVDQUFBOztBRDVJL0IsTUFBTSxPQUFPLDJCQUEyQjtJQWdJdEMsWUFDVSxnQkFBa0MsRUFDbEMsV0FBd0I7UUFEeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXhIekIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFjaEIsc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFJdEMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixXQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQixhQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBa0d6QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUF4SEQsSUFDSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFLOztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLE1BQUEsSUFBSSxDQUFDLGNBQWMsMENBQUUsYUFBYSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyw4Q0FBOEM7U0FDbEc7SUFDSCxDQUFDO0lBZUQsSUFBSSxtQkFBbUI7O1FBQ3JCLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLE1BQUEsTUFBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLE9BQU8sMENBQUUsVUFBVSwwQ0FBRSxXQUFXLEVBQUU7WUFDckQsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxPQUFPLDBDQUFFLFVBQVUsMENBQUUsV0FBVyxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLE1BQUEsTUFBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLE9BQU8sMENBQUUsVUFBVSwwQ0FBRSxVQUFVLEVBQUU7WUFDcEQsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxPQUFPLDBDQUFFLFVBQVUsMENBQUUsVUFBVSxDQUFDLENBQUM7U0FDcEU7UUFDRCxJQUFJLE1BQUEsTUFBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLE9BQU8sMENBQUUsVUFBVSwwQ0FBRSxZQUFZLEVBQUU7WUFDdEQsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxPQUFPLDBDQUFFLFVBQVUsMENBQUUsWUFBWSxDQUFDLENBQUM7U0FDdEU7UUFDRCxJQUFJLE1BQUEsTUFBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLE9BQU8sMENBQUUsVUFBVSwwQ0FBRSxNQUFNLEVBQUU7WUFDaEQsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxPQUFPLDBDQUFFLFVBQVUsMENBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEU7UUFDRCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNyQixPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ1g7WUFDRCxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDckIsT0FBTyxDQUFDLENBQUM7YUFDVjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSx1QkFBdUI7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFBSSx1QkFBdUIsQ0FBQyxLQUFLO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxzQkFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBSSxzQkFBc0IsQ0FBQyxLQUFLO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELElBQUksd0JBQXdCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQUksd0JBQXdCLENBQUMsS0FBSztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLEtBQUs7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzdELFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN0QyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDMUUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM3RCxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ2hGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQVVPLFNBQVM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2pDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0JBQW9COztRQUNsQixJQUFJLE1BQUEsTUFBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLE9BQU8sMENBQUUsVUFBVSwwQ0FBRSxXQUFXLEVBQUU7WUFDckQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRCxtQkFBbUI7O1FBQ2pCLElBQUksTUFBQSxNQUFBLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsT0FBTywwQ0FBRSxVQUFVLDBDQUFFLFVBQVUsRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUVELHFCQUFxQjs7UUFDbkIsSUFBSSxNQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxPQUFPLDBDQUFFLFVBQVUsMENBQUUsWUFBWSxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDL0Q7SUFDSCxDQUFDO0lBRUQsZUFBZTs7UUFDYixJQUFJLE1BQUEsTUFBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLE9BQU8sMENBQUUsVUFBVSwwQ0FBRSxNQUFNLEVBQUU7WUFDaEQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO2dCQUNsRCxJQUFJLENBQUMsdUJBQXVCO29CQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUNsRixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1RDtZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDakQsSUFBSSxDQUFDLHNCQUFzQjtvQkFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDakYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyx3QkFBd0I7b0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7d0JBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsa0JBQWtCO29CQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsSUFBSTthQUNSLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQzthQUN2QixZQUFZO2FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLElBQUk7YUFDUixHQUFHLENBQUMsaUJBQWlCLENBQUM7YUFDdEIsWUFBWTthQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkIsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxJQUFJO2FBQ04sR0FBRyxDQUFDLG1CQUFtQixDQUFDO2FBQ3hCLFlBQVk7YUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsSUFBSTthQUNOLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDbEIsWUFBWTthQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkIsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxJQUFJO2FBQ04sR0FBRyxDQUFDLGFBQWEsQ0FBQzthQUNsQixZQUFZO2FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLElBQUk7YUFDTixHQUFHLENBQUMsY0FBYyxDQUFDO2FBQ25CLFlBQVk7YUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDN0QsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO2dCQUN2QixVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDdEMsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO3dCQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUN6QjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDdEMsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO3dCQUNwQixPQUFPLEdBQUcsUUFBUSxDQUFDO3FCQUNwQjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFRO1FBQ2pCLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUM1QjtTQUNGO1FBQ0QsT0FBTyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwwQ0FBMEM7SUFFMUMsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIscUZBQXFGO0lBQ3JGLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsUUFBUTtJQUNSLE1BQU07SUFDTixtQkFBbUI7SUFDbkIsSUFBSTtJQUVKLGNBQWMsQ0FBQyxVQUF5QjtRQUN0QyxJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksVUFBVSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQzFDLE1BQU0sR0FBRztnQkFDUCxrQkFBa0IsRUFBRSxRQUFRLFVBQVUsQ0FBQyxLQUFLLEdBQUc7YUFDaEQsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQXlCO1FBQ3hDLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7SUFFTyx3QkFBd0I7UUFDOUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuRyxDQUFDO0lBRU8sdUJBQXVCO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDakcsQ0FBQztJQUVPLHlCQUF5QjtRQUMvQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JHLENBQUM7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3pGLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxtQkFBb0IsRUFBRSxZQUFhO1FBQ25ELFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2QyxJQUFJLFlBQVksS0FBSyxhQUFhLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7UUFFRCxJQUFJLG1CQUFtQixFQUFFO1lBQ3ZCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztTQUM1RDtRQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNuRSxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFFL0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQWUsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUMzQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtZQUM5RSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUQsS0FBSyxNQUFNLFlBQVksSUFBSSxhQUFhLEVBQUU7WUFDeEMsSUFBSSxZQUFZLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2xDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7b0JBQ2xELE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztvQkFDM0IsY0FBYyxDQUFDLFNBQVM7eUJBQ3ZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO3lCQUNuRCxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUMzRSxJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFHO3dCQUNoQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOzRCQUNoQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNyQzs2QkFBTTs0QkFDTCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBQyxDQUFDLENBQUM7eUJBQzlFO3FCQUNGO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDM0QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RTtRQUNELElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDMUIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWU7aUJBQ3JDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUF3QixDQUFDLENBQUM7U0FDbkY7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBMkIsRUFBRSxpQkFBaUIsQ0FBRSxDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQzFDLDBFQUEwRTtZQUMxRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJO1FBQ3hCLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN4QixLQUFLLE1BQU0sU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDeEMsZUFBZSxFQUFFLENBQUM7U0FDbkI7UUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDL0UsT0FBTyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxJQUFJO1FBQ3JCLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDO1FBQzNFLE9BQU87SUFDVCxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJO1FBQ3hCLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN4QixLQUFLLE1BQU0sU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDeEMsZUFBZSxFQUFFLENBQUM7U0FDbkI7UUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDL0UsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBSTtRQUNyQixJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25HLE9BQU87SUFDVCxDQUFDO0lBRUQsa0JBQWtCOztRQUNoQixPQUFPLENBQ0wsQ0FBQSxNQUFBLE1BQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsUUFBUSwwQ0FBRSxXQUFXLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBVSxFQUFFLEdBQVksRUFBRSxhQUFhLEdBQUcsSUFBSTtRQUMzRCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUN6RCxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQzFELENBQUMsZ0JBQWdCLENBQUMsR0FBRyxLQUFLLENBQUM7WUFFNUIsSUFBSyxhQUFhLEVBQUc7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtTQUNGO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUFZO1FBQ3pCLFFBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDbkMsS0FBSyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQztZQUM1QyxLQUFLLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO1lBQ3pDLEtBQUssaUJBQWlCLENBQUMscUJBQXFCLENBQUM7WUFDN0MsS0FBSyxpQkFBaUIsQ0FBQyw4QkFBOEIsQ0FBQztZQUN0RCxLQUFLLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDO1lBQzFDLEtBQUssaUJBQWlCLENBQUMsMkJBQTJCO2dCQUNoRCxPQUFPLFlBQVksQ0FBQztZQUN0QixLQUFLLGlCQUFpQixDQUFDLGNBQWM7Z0JBQ25DLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssaUJBQWlCLENBQUMsaUJBQWlCO2dCQUN0QyxPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDckIsQ0FBQyxDQUFDLGVBQWU7b0JBQ2pCLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7d0JBQ2xCLENBQUMsQ0FBQyxlQUFlO3dCQUNqQixDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ2hCLEtBQUssaUJBQWlCLENBQUMsTUFBTTtnQkFDM0IsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxPQUFPO29CQUNULENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7d0JBQ2xCLENBQUMsQ0FBQyxLQUFLO3dCQUNQLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDaEI7Z0JBQ0UsT0FBTztTQUNWO0lBQ0gsQ0FBQzs7c0dBemVVLDJCQUEyQjs4RUFBM0IsMkJBQTJCOzs7Ozs7UUMvQnhDLCtCQUF5QjtRQUN2Qiw0RUFrS007UUFDUixpQkFBTztRQUVQLDRFQVNNOztRQS9LQSxvQ0FBa0I7UUFDSSxlQUFzQjtRQUF0QixpREFBc0I7UUFxSzVDLGVBQTBCO1FBQTFCLCtDQUEwQjs7dUZEdkluQiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEOzZGQUd5QixHQUFHO2tCQUExQixTQUFTO21CQUFDLFdBQVc7WUFFYixjQUFjO2tCQUF0QixLQUFLO1lBRUcsVUFBVTtrQkFBbEIsS0FBSztZQUVHLEdBQUc7a0JBQVgsS0FBSztZQUVHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBR0YsYUFBYTtrQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZSxcbiAgSWdvT2djRmlsdGVyT2JqZWN0LFxuICBPZ2NQdXNoQnV0dG9uLFxuICBPZ2NTZWxlY3RvckJ1bmRsZSxcbiAgU2VsZWN0b3JHcm91cFxuXG59IGZyb20gJy4uLy4uL2ZpbHRlci9zaGFyZWQvb2djLWZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT2djRmlsdGVyV3JpdGVyIH0gZnJvbSAnLi4vLi4vZmlsdGVyL3NoYXJlZC9vZ2MtZmlsdGVyJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcCc7XG5pbXBvcnQgeyBPR0NGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL29nYy1maWx0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXTVNEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvd21zLWRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJPcGVyYXRvciB9IGZyb20gJy4uL3NoYXJlZC9vZ2MtZmlsdGVyLmVudW0nO1xuaW1wb3J0IHsgTWF0U2VsZWN0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdE9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1vZ2MtZmlsdGVyLXNlbGVjdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9vZ2MtZmlsdGVyLXNlbGVjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29nYy1maWx0ZXItc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT2djRmlsdGVyU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdzZWxlY3Rpb24nKSBzZWw6IE1hdFNlbGVjdDtcblxuICBASW5wdXQoKSByZWZyZXNoRmlsdGVyczogKCkgPT4gdm9pZDtcblxuICBASW5wdXQoKSBkYXRhc291cmNlOiBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZTtcblxuICBASW5wdXQoKSBtYXA6IElnb01hcDtcblxuICBASW5wdXQoKSBjaGVja2JveGVzSW5kZXggPSA1O1xuICBASW5wdXQoKSByYWRpb0J1dHRvbnNJbmRleCA9IDU7XG4gIEBJbnB1dCgpIGJhc2VJbmRleCA9IDU7XG5cbiAgQElucHV0KClcbiAgZ2V0IGN1cnJlbnRGaWx0ZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEZpbHRlcjtcbiAgfVxuICBzZXQgY3VycmVudEZpbHRlcih2YWx1ZSkge1xuICAgIHRoaXMuX2N1cnJlbnRGaWx0ZXIgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fY3VycmVudEZpbHRlcj8uc2xpZGVyT3B0aW9ucykge1xuICAgICAgdGhpcy5fY3VycmVudEZpbHRlci5zbGlkZXJPcHRpb25zLmVuYWJsZWQgPSBmYWxzZTsgLy8gcmVtb3ZlIHNsaWRlciB0b2dnbGUgKGFuaW1hdGlvbiB0ZW1wb3JlbGxlKVxuICAgIH1cbiAgfVxuICBwcml2YXRlIF9jdXJyZW50RmlsdGVyOiBhbnk7XG5cbiAgcHVibGljIG9nY0ZpbHRlck9wZXJhdG9yID0gT2djRmlsdGVyT3BlcmF0b3I7XG5cbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBvZ2NGaWx0ZXJXcml0ZXI6IE9nY0ZpbHRlcldyaXRlcjtcbiAgcHVibGljIGNvbG9yID0gJ3ByaW1hcnknO1xuICBwdWJsaWMgYWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBwdWJsaWMgZW5hYmxlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gIHB1YmxpYyBlbmFibGVkcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJzVGltZW91dDtcblxuICBnZXQgb2djRmlsdGVyc1NlbGVjdG9ycygpIHtcbiAgICBjb25zdCBvZ2NTZWxlY3RvciA9IFtdO1xuICAgIGlmICh0aGlzLmRhdGFzb3VyY2U/Lm9wdGlvbnM/Lm9nY0ZpbHRlcnM/LnB1c2hCdXR0b25zKSB7XG4gICAgICBvZ2NTZWxlY3Rvci5wdXNoKHRoaXMuZGF0YXNvdXJjZT8ub3B0aW9ucz8ub2djRmlsdGVycz8ucHVzaEJ1dHRvbnMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhc291cmNlPy5vcHRpb25zPy5vZ2NGaWx0ZXJzPy5jaGVja2JveGVzKSB7XG4gICAgICBvZ2NTZWxlY3Rvci5wdXNoKHRoaXMuZGF0YXNvdXJjZT8ub3B0aW9ucz8ub2djRmlsdGVycz8uY2hlY2tib3hlcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFzb3VyY2U/Lm9wdGlvbnM/Lm9nY0ZpbHRlcnM/LnJhZGlvQnV0dG9ucykge1xuICAgICAgb2djU2VsZWN0b3IucHVzaCh0aGlzLmRhdGFzb3VyY2U/Lm9wdGlvbnM/Lm9nY0ZpbHRlcnM/LnJhZGlvQnV0dG9ucyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFzb3VyY2U/Lm9wdGlvbnM/Lm9nY0ZpbHRlcnM/LnNlbGVjdCkge1xuICAgICAgb2djU2VsZWN0b3IucHVzaCh0aGlzLmRhdGFzb3VyY2U/Lm9wdGlvbnM/Lm9nY0ZpbHRlcnM/LnNlbGVjdCk7XG4gICAgfVxuICAgIG9nY1NlbGVjdG9yLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLm9yZGVyIDwgYi5vcmRlcikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoYS5vcmRlciA+IGIub3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICByZXR1cm4gb2djU2VsZWN0b3I7XG4gIH1cblxuICBnZXQgY3VycmVudFB1c2hCdXR0b25zR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ3B1c2hCdXR0b25zR3JvdXAnKS52YWx1ZTtcbiAgfVxuICBzZXQgY3VycmVudFB1c2hCdXR0b25zR3JvdXAodmFsdWUpIHtcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7IHB1c2hCdXR0b25zR3JvdXA6IHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRDaGVja2JveGVzR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ2NoZWNrYm94ZXNHcm91cCcpLnZhbHVlO1xuICB9XG4gIHNldCBjdXJyZW50Q2hlY2tib3hlc0dyb3VwKHZhbHVlKSB7XG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBjaGVja2JveGVzR3JvdXA6IHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRSYWRpb0J1dHRvbnNHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmdldCgncmFkaW9CdXR0b25zR3JvdXAnKS52YWx1ZTtcbiAgfVxuICBzZXQgY3VycmVudFJhZGlvQnV0dG9uc0dyb3VwKHZhbHVlKSB7XG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyByYWRpb0J1dHRvbnNHcm91cDogdmFsdWUgfSk7XG4gIH1cblxuICBnZXQgY3VycmVudFNlbGVjdEdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uZ2V0KCdzZWxlY3RHcm91cCcpLnZhbHVlO1xuICB9XG4gIHNldCBjdXJyZW50U2VsZWN0R3JvdXAodmFsdWUpIHtcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7IHNlbGVjdEdyb3VwOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZWQkLnZhbHVlO1xuICB9XG5cbiAgc2V0IGVuYWJsZWQodmFsdWUpIHtcbiAgICB0aGlzLmVuYWJsZWQkLm5leHQodmFsdWUpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmFwcGx5RmlsdGVyc1RpbWVvdXQpO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdEdyb3VwLmNvbXB1dGVkU2VsZWN0b3JzLmZvckVhY2goY29tcFNlbGVjdCA9PiB7XG4gICAgICBjb21wU2VsZWN0LnNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgdmFsdWUgPT09IHNlbGVjdG9yID8gc2VsZWN0b3IuZW5hYmxlZCA9IHRydWUgOiBzZWxlY3Rvci5lbmFibGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlGaWx0ZXJzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcHBseUZpbHRlcnMoKTtcbiAgICB9LCA3NTApO1xuICB9XG5cbiAgZ2V0IGVuYWJsZWRzKCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZWRzJC52YWx1ZTtcbiAgfVxuXG4gIHNldCBlbmFibGVkcyh2YWx1ZSkge1xuICAgIHRoaXMuZW5hYmxlZHMkLm5leHQodmFsdWUpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmFwcGx5RmlsdGVyc1RpbWVvdXQpO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdEdyb3VwLmNvbXB1dGVkU2VsZWN0b3JzLmZvckVhY2goY29tcFNlbGVjdCA9PiB7XG4gICAgICBjb21wU2VsZWN0LnNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgdmFsdWUuaW5jbHVkZXMoc2VsZWN0b3IpID8gc2VsZWN0b3IuZW5hYmxlZCA9IHRydWUgOiBzZWxlY3Rvci5lbmFibGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlGaWx0ZXJzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcHBseUZpbHRlcnMoKTtcbiAgICB9LCA3NTApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvZ2NGaWx0ZXJTZXJ2aWNlOiBPR0NGaWx0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICApIHtcbiAgICB0aGlzLm9nY0ZpbHRlcldyaXRlciA9IG5ldyBPZ2NGaWx0ZXJXcml0ZXIoKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZvcm0oKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBwdXNoQnV0dG9uczogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcmFkaW9CdXR0b25zOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBwdXNoQnV0dG9uc0dyb3VwOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBjaGVja2JveGVzR3JvdXA6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHJhZGlvQnV0dG9uc0dyb3VwOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzZWxlY3RHcm91cDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UHVzaEJ1dHRvbnNHcm91cHMoKTogU2VsZWN0b3JHcm91cFtdIHtcbiAgICBpZiAodGhpcy5kYXRhc291cmNlPy5vcHRpb25zPy5vZ2NGaWx0ZXJzPy5wdXNoQnV0dG9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMucHVzaEJ1dHRvbnMuZ3JvdXBzO1xuICAgIH1cbiAgfVxuXG4gIGdldENoZWNrYm94ZXNHcm91cHMoKTogU2VsZWN0b3JHcm91cFtdIHtcbiAgICBpZiAodGhpcy5kYXRhc291cmNlPy5vcHRpb25zPy5vZ2NGaWx0ZXJzPy5jaGVja2JveGVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5jaGVja2JveGVzLmdyb3VwcztcbiAgICB9XG4gIH1cblxuICBnZXRSYWRpb0J1dHRvbnNHcm91cHMoKTogU2VsZWN0b3JHcm91cFtdIHtcbiAgICBpZiAodGhpcy5kYXRhc291cmNlPy5vcHRpb25zPy5vZ2NGaWx0ZXJzPy5yYWRpb0J1dHRvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLnJhZGlvQnV0dG9ucy5ncm91cHM7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0R3JvdXBzKCk6IFNlbGVjdG9yR3JvdXBbXSB7XG4gICAgaWYgKHRoaXMuZGF0YXNvdXJjZT8ub3B0aW9ucz8ub2djRmlsdGVycz8uc2VsZWN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5zZWxlY3QuZ3JvdXBzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzKSB7XG4gICAgICBpZiAodGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5wdXNoQnV0dG9ucykge1xuICAgICAgICB0aGlzLmN1cnJlbnRQdXNoQnV0dG9uc0dyb3VwID1cbiAgICAgICAgICB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLnB1c2hCdXR0b25zLmdyb3Vwcy5maW5kKGdyb3VwID0+IGdyb3VwLmVuYWJsZWQpIHx8XG4gICAgICAgICAgdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5wdXNoQnV0dG9ucy5ncm91cHNbMF07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5jaGVja2JveGVzKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENoZWNrYm94ZXNHcm91cCA9XG4gICAgICAgICAgdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5jaGVja2JveGVzLmdyb3Vwcy5maW5kKGdyb3VwID0+IGdyb3VwLmVuYWJsZWQpIHx8XG4gICAgICAgICAgdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5jaGVja2JveGVzLmdyb3Vwc1swXTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLnJhZGlvQnV0dG9ucykge1xuICAgICAgICB0aGlzLmN1cnJlbnRSYWRpb0J1dHRvbnNHcm91cCA9XG4gICAgICAgICAgdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5yYWRpb0J1dHRvbnMuZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAuZW5hYmxlZCkgfHxcbiAgICAgICAgICB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLnJhZGlvQnV0dG9ucy5ncm91cHNbMF07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5zZWxlY3QpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0R3JvdXAgPVxuICAgICAgICAgIHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMuc2VsZWN0Lmdyb3Vwcy5maW5kKGdyb3VwID0+IGdyb3VwLmVuYWJsZWQpIHx8XG4gICAgICAgICAgdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5zZWxlY3QuZ3JvdXBzWzBdO1xuICAgICAgICB0aGlzLmdldFNlbGVjdEVuYWJsZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtXG4gICAgLmdldCgncHVzaEJ1dHRvbnNHcm91cCcpXG4gICAgLnZhbHVlQ2hhbmdlc1xuICAgIC5waXBlKGRlYm91bmNlVGltZSg3NTApKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5vblB1c2hCdXR0b25zQ2hhbmdlR3JvdXAoKTtcbiAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKCk7XG4gICAgICB9KTtcbiAgICB0aGlzLmZvcm1cbiAgICAuZ2V0KCdjaGVja2JveGVzR3JvdXAnKVxuICAgIC52YWx1ZUNoYW5nZXNcbiAgICAucGlwZShkZWJvdW5jZVRpbWUoNzUwKSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub25DaGVja2JveGVzQ2hhbmdlR3JvdXAoKTtcbiAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKCk7XG4gICAgICB9KTtcbiAgICB0aGlzLmZvcm1cbiAgICAgIC5nZXQoJ3JhZGlvQnV0dG9uc0dyb3VwJylcbiAgICAgIC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSg3NTApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMub25SYWRpb0J1dHRvbnNDaGFuZ2VHcm91cCgpO1xuICAgICAgICB0aGlzLmFwcGx5RmlsdGVycygpO1xuICAgICAgfSk7XG4gICAgdGhpcy5mb3JtXG4gICAgICAuZ2V0KCdzZWxlY3RHcm91cCcpXG4gICAgICAudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoNzUwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VsZWN0Q2hhbmdlR3JvdXAoKTtcbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcnMoKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuZm9ybVxuICAgICAgLmdldCgncHVzaEJ1dHRvbnMnKVxuICAgICAgLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDc1MCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcnMoKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuZm9ybVxuICAgICAgLmdldCgncmFkaW9CdXR0b25zJylcbiAgICAgIC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSg3NTApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0RW5hYmxlZCgpIHtcbiAgICBjb25zdCBlbmFibGVkcyA9IFtdO1xuICAgIGxldCBlbmFibGVkO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdEdyb3VwLmNvbXB1dGVkU2VsZWN0b3JzLmZvckVhY2goY29tcFNlbGVjdCA9PiB7XG4gICAgICBpZiAoY29tcFNlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgICBjb21wU2VsZWN0LnNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgICBpZiAoc2VsZWN0b3IuZW5hYmxlZCkge1xuICAgICAgICAgICAgZW5hYmxlZHMucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbmFibGVkcyA9IGVuYWJsZWRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcFNlbGVjdC5zZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGVuYWJsZWQgPSBzZWxlY3RvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VG9vbFRpcChzZWxlY3Rvcik6IHN0cmluZyB7XG4gICAgbGV0IHRvb2xUaXA7XG4gICAgaWYgKHNlbGVjdG9yLnRvb2x0aXApIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yLnRvb2x0aXApKSB7XG4gICAgICAgIHRvb2xUaXAgPSBzZWxlY3Rvci50b29sdGlwLmpvaW4oJ1xcbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9vbFRpcCA9IHNlbGVjdG9yLnRvb2x0aXA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b29sVGlwIHx8ICcnO1xuICB9XG5cbiAgLy8gZ2V0QnV0dG9uU3R5bGUocGI6IE9nY1B1c2hCdXR0b24pOiB7fSB7XG5cbiAgLy8gICBsZXQgc3R5bGVzO1xuICAvLyAgIGlmIChwYi5jb2xvcikge1xuICAvLyAgICAgc3R5bGVzID0ge1xuICAvLyAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHBiLmVuYWJsZWQgPyBgcmdiYSgke3BiLmNvbG9yfSlgIDogYHJnYmEoMjU1LDI1NSwyNTUsMClgXG4gIC8vICAgICB9O1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzdHlsZXMgPSB7XG4gIC8vICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogcGIuZW5hYmxlZCA/ICdhY2NlbnQnOiBgcmdiYSgyNTUsMjU1LDI1NSwwKWAsXG4gIC8vICAgICAgICdjb2xvcic6IHBiLmVuYWJsZWQgPyBgcmdiYSgwLDAsMCwwLjkpYCA6IGByZ2JhKDMzLDMzLDMzLDAuMzgpYFxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gc3R5bGVzO1xuICAvLyB9XG5cbiAgZ2V0QnV0dG9uQ29sb3IocHVzaEJ1dHRvbjogT2djUHVzaEJ1dHRvbik6IHt9IHtcbiAgICBsZXQgc3R5bGVzO1xuICAgIGlmIChwdXNoQnV0dG9uLmNvbG9yICYmIHB1c2hCdXR0b24uZW5hYmxlZCkge1xuICAgICAgc3R5bGVzID0ge1xuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGByZ2JhKCR7cHVzaEJ1dHRvbi5jb2xvcn0pYFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIGJ1bmRsZUlzVmVydGljYWwoYnVuZGxlOiBPZ2NTZWxlY3RvckJ1bmRsZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBidW5kbGUudmVydGljYWwgPyBidW5kbGUudmVydGljYWwgOiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgb25QdXNoQnV0dG9uc0NoYW5nZUdyb3VwKCkge1xuICAgIHRoaXMuZ2V0UHVzaEJ1dHRvbnNHcm91cHMoKS5tYXAoZ3JvdXAgPT4gZ3JvdXAuZW5hYmxlZCA9IGZhbHNlKTtcbiAgICB0aGlzLmdldFB1c2hCdXR0b25zR3JvdXBzKCkuZmluZChncm91cCA9PiBncm91cCA9PT0gdGhpcy5jdXJyZW50UHVzaEJ1dHRvbnNHcm91cCkuZW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIG9uQ2hlY2tib3hlc0NoYW5nZUdyb3VwKCkge1xuICAgIHRoaXMuZ2V0Q2hlY2tib3hlc0dyb3VwcygpLm1hcChncm91cCA9PiBncm91cC5lbmFibGVkID0gZmFsc2UpO1xuICAgIHRoaXMuZ2V0Q2hlY2tib3hlc0dyb3VwcygpLmZpbmQoZ3JvdXAgPT4gZ3JvdXAgPT09IHRoaXMuY3VycmVudENoZWNrYm94ZXNHcm91cCkuZW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIG9uUmFkaW9CdXR0b25zQ2hhbmdlR3JvdXAoKSB7XG4gICAgdGhpcy5nZXRSYWRpb0J1dHRvbnNHcm91cHMoKS5tYXAoZ3JvdXAgPT4gZ3JvdXAuZW5hYmxlZCA9IGZhbHNlKTtcbiAgICB0aGlzLmdldFJhZGlvQnV0dG9uc0dyb3VwcygpLmZpbmQoZ3JvdXAgPT4gZ3JvdXAgPT09IHRoaXMuY3VycmVudFJhZGlvQnV0dG9uc0dyb3VwKS5lbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgb25TZWxlY3RDaGFuZ2VHcm91cCgpIHtcbiAgICB0aGlzLmdldFNlbGVjdEdyb3VwcygpLm1hcChncm91cCA9PiBncm91cC5lbmFibGVkID0gZmFsc2UpO1xuICAgIHRoaXMuZ2V0U2VsZWN0R3JvdXBzKCkuZmluZChncm91cCA9PiBncm91cCA9PT0gdGhpcy5jdXJyZW50U2VsZWN0R3JvdXApLmVuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2UoY3VycmVudE9nY1NlbGVjdGlvbj8sIHNlbGVjdG9yVHlwZT8pIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hcHBseUZpbHRlcnNUaW1lb3V0KTtcbiAgICBpZiAoc2VsZWN0b3JUeXBlID09PSAncmFkaW9CdXR0b24nKSB7XG4gICAgICB0aGlzLmVtcHR5UmFkaW9CdXR0b25zKCk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRPZ2NTZWxlY3Rpb24pIHtcbiAgICAgIGN1cnJlbnRPZ2NTZWxlY3Rpb24uZW5hYmxlZCA9ICFjdXJyZW50T2djU2VsZWN0aW9uLmVuYWJsZWQ7XG4gICAgfVxuICAgIHRoaXMuYXBwbHlGaWx0ZXJzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcHBseUZpbHRlcnMoKTtcbiAgICB9LCA3NTApO1xuICB9XG5cbiAgZW1wdHlSYWRpb0J1dHRvbnMoKSB7XG4gICAgdGhpcy5jdXJyZW50UmFkaW9CdXR0b25zR3JvdXAuY29tcHV0ZWRTZWxlY3RvcnMuZm9yRWFjaChjb21wU2VsZWN0ID0+IHtcbiAgICAgIGNvbXBTZWxlY3Quc2VsZWN0b3JzLm1hcChzZWxlY3RvciA9PiBzZWxlY3Rvci5lbmFibGVkID0gZmFsc2UpO1xuXG4gICAgICB0aGlzLmFwcGx5RmlsdGVyc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcnMoKTtcbiAgICAgIH0sIDc1MCk7XG4gICB9KTtcbiAgfVxuXG4gIGVtcHR5U2VsZWN0KCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IFtdO1xuICB9XG5cbiAgdG9nZ2xlQWxsU2VsZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmFsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbC5vcHRpb25zLmZvckVhY2goKGl0ZW06IE1hdE9wdGlvbikgPT4gaXRlbS5zZWxlY3QoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsLm9wdGlvbnMuZm9yRWFjaCgoaXRlbTogTWF0T3B0aW9uKSA9PiBpdGVtLmRlc2VsZWN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIG9wdGlvbkNsaWNrKCkge1xuICAgIGxldCBuZXdTdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuc2VsLm9wdGlvbnMuZm9yRWFjaCgoaXRlbTogTWF0T3B0aW9uKSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgbmV3U3RhdHVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hbGxTZWxlY3RlZCA9IG5ld1N0YXR1cztcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlGaWx0ZXJzKCkge1xuICAgIGxldCBmaWx0ZXJRdWVyeVN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBbXTtcbiAgICBjb25zdCBjdXJyZW50R3JvdXBzID0gW3RoaXMuY3VycmVudFB1c2hCdXR0b25zR3JvdXAsIHRoaXMuY3VycmVudENoZWNrYm94ZXNHcm91cCxcbiAgICAgIHRoaXMuY3VycmVudFJhZGlvQnV0dG9uc0dyb3VwLCB0aGlzLmN1cnJlbnRTZWxlY3RHcm91cF07XG4gICAgZm9yIChjb25zdCBjdXJyZW50R3JvdXAgb2YgY3VycmVudEdyb3Vwcykge1xuICAgICAgaWYgKGN1cnJlbnRHcm91cC5jb21wdXRlZFNlbGVjdG9ycykge1xuICAgICAgICBjdXJyZW50R3JvdXAuY29tcHV0ZWRTZWxlY3RvcnMubWFwKHNlbGVjdG9yQnVuZGxlID0+IHtcbiAgICAgICAgICBjb25zdCBidW5kbGVDb25kaXRpb24gPSBbXTtcbiAgICAgICAgICBzZWxlY3RvckJ1bmRsZS5zZWxlY3RvcnNcbiAgICAgICAgICAuZmlsdGVyKG9nY1NlbGVjdG9yID0+IG9nY1NlbGVjdG9yLmVuYWJsZWQgPT09IHRydWUpXG4gICAgICAgICAgLmZvckVhY2goZW5hYmxlZFNlbGVjdG9yID0+IGJ1bmRsZUNvbmRpdGlvbi5wdXNoKGVuYWJsZWRTZWxlY3Rvci5maWx0ZXJzKSk7XG4gICAgICAgICAgaWYgKGJ1bmRsZUNvbmRpdGlvbi5sZW5ndGggPj0gMSApIHtcbiAgICAgICAgICAgIGlmIChidW5kbGVDb25kaXRpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaChidW5kbGVDb25kaXRpb25bMF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKHtsb2dpY2FsOiBzZWxlY3RvckJ1bmRsZS5sb2dpY2FsLCBmaWx0ZXJzOiBidW5kbGVDb25kaXRpb259KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5pc1RlbXBvcmFsT3BlcmF0b3IoKSAmJiB0aGlzLl9jdXJyZW50RmlsdGVyLmFjdGl2ZSkge1xuICAgICAgY29uZGl0aW9ucy5wdXNoKHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMuaW50ZXJmYWNlT2djRmlsdGVyc1swXSk7XG4gICAgfVxuICAgIGlmIChjb25kaXRpb25zLmxlbmd0aCA+PSAxKSB7XG4gICAgICBmaWx0ZXJRdWVyeVN0cmluZyA9IHRoaXMub2djRmlsdGVyV3JpdGVyXG4gICAgICAgIC5idWlsZEZpbHRlcihjb25kaXRpb25zLmxlbmd0aCA9PT0gMSA/XG4gICAgICAgICAgY29uZGl0aW9uc1swXSA6IHtsb2dpY2FsOiAnQW5kJywgZmlsdGVyczogY29uZGl0aW9ucyB9IGFzIElnb09nY0ZpbHRlck9iamVjdCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy50eXBlID09PSAnd21zJykge1xuICAgICAgdGhpcy5vZ2NGaWx0ZXJTZXJ2aWNlLmZpbHRlckJ5T2djKHRoaXMuZGF0YXNvdXJjZSBhcyBXTVNEYXRhU291cmNlLCBmaWx0ZXJRdWVyeVN0cmluZyApO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhc291cmNlLm9wdGlvbnMudHlwZSA9PT0gJ3dmcycpIHtcbiAgICAgIC8vIFRPRE86IENoZWNrIGhvdyB0byBwcmV2ZW50IHdmcyB0byByZWZyZXNoIHdoZW4gZmlsdGVyIGljb24gaXMgcHVzaGVkLi4uXG4gICAgICB0aGlzLmRhdGFzb3VyY2Uub2wucmVmcmVzaCgpO1xuICAgIH1cbiAgICB0aGlzLmRhdGFzb3VyY2Uuc2V0T2djRmlsdGVycyh0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLCB0cnVlKTtcbiAgfVxuXG4gIGlzTW9yZVJlc3VsdHMoYnVuZGxlLCB0eXBlKSB7XG4gICAgbGV0IHNlbGVjdG9yc0xlbmd0aCA9IDA7XG4gICAgZm9yIChjb25zdCBzZWxlY3RvcnMgb2YgYnVuZGxlLnNlbGVjdG9ycykge1xuICAgICAgc2VsZWN0b3JzTGVuZ3RoKys7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdHlwZSA9PT0gJ3JhZGlvJyA/IHRoaXMucmFkaW9CdXR0b25zSW5kZXggOiB0aGlzLmNoZWNrYm94ZXNJbmRleDtcbiAgICByZXR1cm4gc2VsZWN0b3JzTGVuZ3RoID4gaW5kZXg7XG4gIH1cblxuICBkaXNwbGF5TW9yZVJlc3VsdHModHlwZSkge1xuICAgIHR5cGUgPT09ICdyYWRpbycgPyB0aGlzLnJhZGlvQnV0dG9uc0luZGV4ICs9IDUgOiB0aGlzLmNoZWNrYm94ZXNJbmRleCArPSA1O1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlzTGVzc1Jlc3VsdHMoYnVuZGxlLCB0eXBlKSB7XG4gICAgbGV0IHNlbGVjdG9yc0xlbmd0aCA9IDA7XG4gICAgZm9yIChjb25zdCBzZWxlY3RvcnMgb2YgYnVuZGxlLnNlbGVjdG9ycykge1xuICAgICAgc2VsZWN0b3JzTGVuZ3RoKys7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdHlwZSA9PT0gJ3JhZGlvJyA/IHRoaXMucmFkaW9CdXR0b25zSW5kZXggOiB0aGlzLmNoZWNrYm94ZXNJbmRleDtcbiAgICByZXR1cm4gdGhpcy5iYXNlSW5kZXggIT09IGluZGV4ICYmIHNlbGVjdG9yc0xlbmd0aCA+IHRoaXMuYmFzZUluZGV4O1xuICB9XG5cbiAgZGlzcGxheUxlc3NSZXN1bHRzKHR5cGUpIHtcbiAgICB0eXBlID09PSAncmFkaW8nID8gdGhpcy5yYWRpb0J1dHRvbnNJbmRleCA9IHRoaXMuYmFzZUluZGV4IDogdGhpcy5jaGVja2JveGVzSW5kZXggPSB0aGlzLmJhc2VJbmRleDtcbiAgICByZXR1cm47XG4gIH1cblxuICBpc1RlbXBvcmFsT3BlcmF0b3IoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY3VycmVudEZpbHRlcj8ub3BlcmF0b3I/LnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICB0aGlzLm9nY0ZpbHRlck9wZXJhdG9yLkR1cmluZy50b0xvd2VyQ2FzZSgpXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZVByb3BlcnR5KHZhbHVlOiBhbnksIHBvcz86IG51bWJlciwgcmVmcmVzaEZpbHRlciA9IHRydWUpIHtcbiAgICBjb25zdCBkZXRlY3RlZFByb3BlcnR5ID0gdGhpcy5kZXRlY3RQcm9wZXJ0eShwb3MpO1xuICAgIGlmIChkZXRlY3RlZFByb3BlcnR5KSB7XG4gICAgICB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLmludGVyZmFjZU9nY0ZpbHRlcnMuZmluZChcbiAgICAgICAgZmlsdGVyID0+IGZpbHRlci5maWx0ZXJpZCA9PT0gdGhpcy5jdXJyZW50RmlsdGVyLmZpbHRlcmlkXG4gICAgICApW2RldGVjdGVkUHJvcGVydHldID0gdmFsdWU7XG5cbiAgICAgIGlmICggcmVmcmVzaEZpbHRlciApIHtcbiAgICAgICAgdGhpcy5hcHBseUZpbHRlcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXRlY3RQcm9wZXJ0eShwb3M/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50RmlsdGVyLm9wZXJhdG9yKSB7XG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yLlByb3BlcnR5SXNOb3RFcXVhbFRvOlxuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzRXF1YWxUbzpcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0dyZWF0ZXJUaGFuOlxuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzR3JlYXRlclRoYW5PckVxdWFsVG86XG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yLlByb3BlcnR5SXNMZXNzVGhhbjpcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0xlc3NUaGFuT3JFcXVhbFRvOlxuICAgICAgICByZXR1cm4gJ2V4cHJlc3Npb24nO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzTGlrZTpcbiAgICAgICAgcmV0dXJuICdwYXR0ZXJuJztcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0JldHdlZW46XG4gICAgICAgIHJldHVybiBwb3MgJiYgcG9zID09PSAxXG4gICAgICAgICAgPyAnbG93ZXJCb3VuZGFyeSdcbiAgICAgICAgICA6IHBvcyAmJiBwb3MgPT09IDJcbiAgICAgICAgICA/ICd1cHBlckJvdW5kYXJ5J1xuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5EdXJpbmc6XG4gICAgICAgIHJldHVybiBwb3MgJiYgcG9zID09PSAxXG4gICAgICAgICAgPyAnYmVnaW4nXG4gICAgICAgICAgOiBwb3MgJiYgcG9zID09PSAyXG4gICAgICAgICAgPyAnZW5kJ1xuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gIDxkaXYgKm5nRm9yPVwibGV0IHNlbGVjdG9yIG9mIG9nY0ZpbHRlcnNTZWxlY3RvcnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHVzaEJ1dHRvbkdyb3Vwc1wiICpuZ0lmPVwic2VsZWN0b3Iuc2VsZWN0b3JUeXBlID09PSAncHVzaEJ1dHRvbidcIj5cbiAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICAgICAgPGRpdiBjbGFzcz1cImdyb3Vwc1NlbGVjdG9yXCIgKm5nSWY9XCJnZXRQdXNoQnV0dG9uc0dyb3VwcygpLmxlbmd0aCA+IDFcIj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxtYXQtc2VsZWN0XG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwdXNoQnV0dG9uc0dyb3VwXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmxheWVyLmxlZ2VuZC5zZWxlY3RTdHlsZScgfCB0cmFuc2xhdGVcIiB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgICAgIFsodmFsdWUpXT1cImN1cnJlbnRQdXNoQnV0dG9uc0dyb3VwXCI+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0b3JHcm91cCBvZiBnZXRQdXNoQnV0dG9uc0dyb3VwcygpXCJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cInNlbGVjdG9yR3JvdXBcIj57e3NlbGVjdG9yR3JvdXAudGl0bGV9fVxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnVuZGxlIG9mIGN1cnJlbnRQdXNoQnV0dG9uc0dyb3VwLmNvbXB1dGVkU2VsZWN0b3JzXCI+XG4gICAgICAgIDxoND57e2J1bmRsZS50aXRsZX19PC9oND5cbiAgICAgICAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicHVzaEJ1dHRvbnNcIiBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCIgYXBwZWFyYW5jZT1cImxlZ2FjeVwiIHZlcnRpY2FsPXt7YnVuZGxlSXNWZXJ0aWNhbChidW5kbGUpfX0gbXVsdGlwbGU9XCJ0cnVlXCI+XG4gICAgICAgICAgPG1hdC1idXR0b24tdG9nZ2xlICpuZ0Zvcj1cImxldCBvZ2NQdXNoQnV0dG9uIG9mIGJ1bmRsZS5zZWxlY3RvcnNcIlxuICAgICAgICAgICAgW21hdFRvb2x0aXBdPVwiZ2V0VG9vbFRpcChvZ2NQdXNoQnV0dG9uKVwiIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIiBtYXRUb29sdGlwQ2xhc3M9XCJtYXRlcmlhbC10b29sdGlwXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cImdldEJ1dHRvbkNvbG9yKG9nY1B1c2hCdXR0b24pXCJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cIm9nY1B1c2hCdXR0b24uZW5hYmxlZFwiIChjaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2Uob2djUHVzaEJ1dHRvbiwgc2VsZWN0b3Iuc2VsZWN0b3JUeXBlKVwiXG4gICAgICAgICAgICBbdmFsdWVdPVwib2djUHVzaEJ1dHRvblwiPnt7b2djUHVzaEJ1dHRvbi50aXRsZX19XG4gICAgICAgICAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICAgICAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNoZWNrYm94R3JvdXBzXCIgKm5nSWY9XCJzZWxlY3Rvci5zZWxlY3RvclR5cGUgPT09ICdjaGVja2JveCdcIj5cbiAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICAgICAgPGRpdiBjbGFzcz1cImdyb3Vwc1NlbGVjdG9yXCIgKm5nSWY9XCJnZXRDaGVja2JveGVzR3JvdXBzKCkubGVuZ3RoID4gMVwiPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNoZWNrYm94ZXNHcm91cFwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5sYXllci5sZWdlbmQuc2VsZWN0U3R5bGUnIHwgdHJhbnNsYXRlXCIgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCIgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgICAgICBbKHZhbHVlKV09XCJjdXJyZW50Q2hlY2tib3hlc0dyb3VwXCI+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0b3JHcm91cCBvZiBnZXRDaGVja2JveGVzR3JvdXBzKClcIlxuICAgICAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0b3JHcm91cFwiPnt7c2VsZWN0b3JHcm91cC50aXRsZX19XG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidW5kbGUgb2YgY3VycmVudENoZWNrYm94ZXNHcm91cC5jb21wdXRlZFNlbGVjdG9yc1wiPlxuICAgICAgICA8aDQ+e3tidW5kbGUudGl0bGV9fTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveGVzIG1hdC10eXBvZ3JhcGh5XCI+XG4gICAgICAgICAgPG1hdC1jaGVja2JveCAqbmdGb3I9XCJsZXQgb2djQ2hlY2tib3ggb2YgYnVuZGxlLnNlbGVjdG9yc1wiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJnZXRUb29sVGlwKG9nY0NoZWNrYm94KVwiIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIiAgbWF0VG9vbHRpcENsYXNzPVwibWF0ZXJpYWwtdG9vbHRpcFwiXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJvZ2NDaGVja2JveC5lbmFibGVkXCIgKGNoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZShvZ2NDaGVja2JveCwgc2VsZWN0b3Iuc2VsZWN0b3JUeXBlKVwiXG4gICAgICAgICAgICBbdmFsdWVdPVwib2djQ2hlY2tib3hcIj57e29nY0NoZWNrYm94LnRpdGxlfX1cbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwICpuZ0lmPVwiaXNMZXNzUmVzdWx0cyhidW5kbGUsICdjaGVja2JveCcpIHx8IGlzTW9yZVJlc3VsdHMoYnVuZGxlLCAnY2hlY2tib3gnKVwiPlxuICAgICAgICAgIDx1ICpuZ0lmPVwiaXNMZXNzUmVzdWx0cyhidW5kbGUsICdjaGVja2JveCcpXCJcbiAgICAgICAgICAgIGNsYXNzPVwibGVzc1Jlc3VsdHMgbWF0LXR5cG9ncmFwaHlcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImRpc3BsYXlMZXNzUmVzdWx0cygnY2hlY2tib3gnKVwiPnt7ICdpZ28uZ2VvLmZpbHRlci5kaXNwbGF5TGVzc1Jlc3VsdHMnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC91PlxuICAgICAgICAgIDx1ICpuZ0lmPVwiaXNNb3JlUmVzdWx0cyhidW5kbGUsICdjaGVja2JveCcpXCJcbiAgICAgICAgICAgIGNsYXNzPVwibW9yZVJlc3VsdHMgbWF0LXR5cG9ncmFwaHlcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImRpc3BsYXlNb3JlUmVzdWx0cygnY2hlY2tib3gnKVwiPnt7ICdpZ28uZ2VvLmZpbHRlci5kaXNwbGF5TW9yZVJlc3VsdHMnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC91PlxuICAgICAgICA8L3A+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyYWRpb0J1dHRvbkdyb3Vwc1wiICpuZ0lmPVwic2VsZWN0b3Iuc2VsZWN0b3JUeXBlID09PSAncmFkaW9CdXR0b24nXCI+XG4gICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncm91cHNTZWxlY3RvclwiICpuZ0lmPVwiZ2V0UmFkaW9CdXR0b25zR3JvdXBzKCkubGVuZ3RoID4gMVwiPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInJhZGlvQnV0dG9uc0dyb3VwXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmxheWVyLmxlZ2VuZC5zZWxlY3RTdHlsZScgfCB0cmFuc2xhdGVcIiB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgICAgIFsodmFsdWUpXT1cImN1cnJlbnRSYWRpb0J1dHRvbnNHcm91cFwiPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlbGVjdG9yR3JvdXAgb2YgZ2V0UmFkaW9CdXR0b25zR3JvdXBzKClcIlxuICAgICAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0b3JHcm91cFwiPnt7c2VsZWN0b3JHcm91cC50aXRsZX19XG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidW5kbGUgb2YgY3VycmVudFJhZGlvQnV0dG9uc0dyb3VwLmNvbXB1dGVkU2VsZWN0b3JzXCI+XG4gICAgICAgIDxoND57e2J1bmRsZS50aXRsZX19PC9oND5cbiAgICAgICAgPG1hdC1yYWRpby1ncm91cFxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInJhZGlvQnV0dG9uc1wiIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5cbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdJZj1cImJ1bmRsZS51bmZpbHRlcmVkXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmZpbHRlci5yZXNldEZpbHRlcnMnIHwgdHJhbnNsYXRlXCIgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCIgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiICBtYXRUb29sdGlwQ2xhc3M9XCJtYXRlcmlhbC10b29sdGlwXCJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwiZW1wdHlSYWRpb0J1dHRvbnMoKVwiPnt7ICdpZ28uZ2VvLmZpbHRlci5yZXNldEZpbHRlcnMnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvZ2NSYWRpb0J1dHRvbiBvZiBidW5kbGUuc2VsZWN0b3JzXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwXT1cImdldFRvb2xUaXAob2djUmFkaW9CdXR0b24pXCIgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCIgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiICBtYXRUb29sdGlwQ2xhc3M9XCJtYXRlcmlhbC10b29sdGlwXCJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cIm9nY1JhZGlvQnV0dG9uLmVuYWJsZWRcIiAoY2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKG9nY1JhZGlvQnV0dG9uLCBzZWxlY3Rvci5zZWxlY3RvclR5cGUpXCJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJvZ2NSYWRpb0J1dHRvblwiPnt7b2djUmFkaW9CdXR0b24udGl0bGV9fVxuICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8cCAqbmdJZj1cImlzTGVzc1Jlc3VsdHMoYnVuZGxlLCAncmFkaW8nKSB8fCBpc01vcmVSZXN1bHRzKGJ1bmRsZSwgJ3JhZGlvJylcIj5cbiAgICAgICAgICAgIDx1ICpuZ0lmPVwiaXNMZXNzUmVzdWx0cyhidW5kbGUsICdyYWRpbycpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJsZXNzUmVzdWx0cyBtYXQtdHlwb2dyYXBoeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJkaXNwbGF5TGVzc1Jlc3VsdHMoJ3JhZGlvJylcIj57eyAnaWdvLmdlby5maWx0ZXIuZGlzcGxheUxlc3NSZXN1bHRzJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC91PlxuICAgICAgICAgICAgPHUgKm5nSWY9XCJpc01vcmVSZXN1bHRzKGJ1bmRsZSwgJ3JhZGlvJylcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1vcmVSZXN1bHRzIG1hdC10eXBvZ3JhcGh5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImRpc3BsYXlNb3JlUmVzdWx0cygncmFkaW8nKVwiPnt7ICdpZ28uZ2VvLmZpbHRlci5kaXNwbGF5TW9yZVJlc3VsdHMnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICA8L3U+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdEdyb3Vwc1wiICpuZ0lmPVwic2VsZWN0b3Iuc2VsZWN0b3JUeXBlID09PSAnc2VsZWN0J1wiPlxuICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBzU2VsZWN0b3JcIiAqbmdJZj1cImdldFNlbGVjdEdyb3VwcygpLmxlbmd0aCA+IDFcIj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxtYXQtc2VsZWN0XG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzZWxlY3RHcm91cFwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5sYXllci5sZWdlbmQuc2VsZWN0U3R5bGUnIHwgdHJhbnNsYXRlXCIgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCIgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgICAgICBbKHZhbHVlKV09XCJjdXJyZW50U2VsZWN0R3JvdXBcIj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzZWxlY3Rvckdyb3VwIG9mIGdldFNlbGVjdEdyb3VwcygpXCJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cInNlbGVjdG9yR3JvdXBcIj57e3NlbGVjdG9yR3JvdXAudGl0bGV9fVxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnVuZGxlIG9mIGN1cnJlbnRTZWxlY3RHcm91cC5jb21wdXRlZFNlbGVjdG9yc1wiPlxuICAgICAgICA8aDQ+e3tidW5kbGUudGl0bGV9fTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncm91cHNTZWxlY3RvclwiPlxuICAgICAgICAgIDxtYXQtYnV0dG9uICpuZ0lmPVwiYnVuZGxlLnVuZmlsdGVyZWQgJiYgIWJ1bmRsZS5tdWx0aXBsZVwiXG4gICAgICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIGNvbG9yPVwid2FyblwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5maWx0ZXIucmVzZXRGaWx0ZXJzJyB8IHRyYW5zbGF0ZVwiIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIiAgbWF0VG9vbHRpcENsYXNzPVwibWF0ZXJpYWwtdG9vbHRpcFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZW1wdHlTZWxlY3QoKVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJmaWx0ZXItcmVtb3ZlXCI+PC9tYXQtaWNvbj5cbiAgICAgICAgICA8L21hdC1idXR0b24+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImJ1bmRsZS5tdWx0aXBsZTsgZWxzZSBub3RNdWx0aVwiPlxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdFxuICAgICAgICAgICAgICAgICNzZWxlY3Rpb24gW211bHRpcGxlXT1cImJ1bmRsZS5tdWx0aXBsZVwiIFtwbGFjZWhvbGRlcl09XCJidW5kbGUudGl0bGVcIlxuICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzZWxlY3RcIiBbKG5nTW9kZWwpXT1cImVuYWJsZWRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94ZXMgbWF0LXR5cG9ncmFwaHlcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKm5nSWY9XCJidW5kbGUubXVsdGlwbGVcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImFsbFNlbGVjdGVkXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwidG9nZ2xlQWxsU2VsZWN0aW9uKClcIj5Ub3VzXG4gICAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb2djU2VsZWN0IG9mIGJ1bmRsZS5zZWxlY3RvcnNcIlxuICAgICAgICAgICAgICAgICAgW21hdFRvb2x0aXBdPVwiZ2V0VG9vbFRpcChvZ2NTZWxlY3QpXCIgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCIgbWF0VG9vbHRpcERlbGF5PVwiNTAwXCIgbWF0VG9vbHRpcENsYXNzPVwibWF0ZXJpYWwtdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAob25TZWxlY3Rpb25DaGFuZ2UpPVwib3B0aW9uQ2xpY2soKVwiXG4gICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib2djU2VsZWN0XCI+e3tvZ2NTZWxlY3QudGl0bGV9fVxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vdE11bHRpPlxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdFxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJidW5kbGUudGl0bGVcIlxuICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzZWxlY3RcIiBbKG5nTW9kZWwpXT1cImVuYWJsZWRcIj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb2djU2VsZWN0IG9mIGJ1bmRsZS5zZWxlY3RvcnNcIlxuICAgICAgICAgICAgICAgICAgW21hdFRvb2x0aXBdPVwiZ2V0VG9vbFRpcChvZ2NTZWxlY3QpXCIgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCIgbWF0VG9vbHRpcERlbGF5PVwiNTAwXCIgbWF0VG9vbHRpcENsYXNzPVwibWF0ZXJpYWwtdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib2djU2VsZWN0XCI+e3tvZ2NTZWxlY3QudGl0bGV9fVxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZm9ybT5cblxuPGRpdiAqbmdJZj1cImlzVGVtcG9yYWxPcGVyYXRvcigpXCI+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICA8aDQgKm5nSWY9XCIhY3VycmVudEZpbHRlci50aXRsZVwiPnt7ICdpZ28uZ2VvLmZpbHRlci5yZXBvcnRpbmdEYXRlJyB8IHRyYW5zbGF0ZSB9fTwvaDQ+XG4gIDxoNCAqbmdJZj1cImN1cnJlbnRGaWx0ZXIudGl0bGVcIj57eyBjdXJyZW50RmlsdGVyLnRpdGxlIH19PC9oND5cbiAgPGlnby1vZ2MtZmlsdGVyLXRpbWVcbiAgICBbKGRhdGFzb3VyY2UpXT1cImRhdGFzb3VyY2VcIlxuICAgIFsoY3VycmVudEZpbHRlcildPVwiY3VycmVudEZpbHRlclwiXG4gICAgKGNoYW5nZVByb3BlcnR5KT1cImNoYW5nZVByb3BlcnR5KCRldmVudC52YWx1ZSwgJGV2ZW50LnBvcylcIj5cbiAgPC9pZ28tb2djLWZpbHRlci10aW1lPlxuPC9kaXY+Il19