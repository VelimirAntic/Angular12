import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OgcFilterOperator } from '../../filter/shared/ogc-filter.enum';
import * as moment_ from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "../shared/ogc-filter-time.service";
const _c0 = ["endDatepickerTime"];
const _c1 = ["beginDatepickerTime"];
const _c2 = ["beginTime"];
const _c3 = ["endTime"];
function OgcFilterTimeComponent_mat_slide_toggle_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-slide-toggle", 4);
    i0.ɵɵlistener("ngModelChange", function OgcFilterTimeComponent_mat_slide_toggle_1_Template_mat_slide_toggle_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.sliderMode = $event; })("change", function OgcFilterTimeComponent_mat_slide_toggle_1_Template_mat_slide_toggle_change_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.modeChange($event); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.sliderMode);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.filter.sliderModeTitle"), " ");
} }
function OgcFilterTimeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "igo-ogc-filter-time-slider", 6);
    i0.ɵɵlistener("changeProperty", function OgcFilterTimeComponent_div_2_Template_igo_ogc_filter_time_slider_changeProperty_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.changePropertyByPass($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("begin", ctx_r1.beginValue)("max", ctx_r1.restrictedToStep() ? ctx_r1.maxDate : ctx_r1.endValue)("currentFilter", ctx_r1.currentFilter)("datasource", ctx_r1.datasource);
} }
function OgcFilterTimeComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "mat-form-field", 10);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 11);
    i0.ɵɵlistener("change", function OgcFilterTimeComponent_div_3_div_1_Template_input_change_5_listener($event) { i0.ɵɵrestoreView(_r15); const _r10 = i0.ɵɵreference(8); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.yearOnlyInputChange($event, _r10, "begin"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "mat-datepicker-toggle", 12);
    i0.ɵɵelementStart(7, "mat-datepicker", 13, 14);
    i0.ɵɵlistener("yearSelected", function OgcFilterTimeComponent_div_3_div_1_Template_mat_datepicker_yearSelected_7_listener($event) { i0.ɵɵrestoreView(_r15); const _r10 = i0.ɵɵreference(8); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.yearSelected($event, _r10, "begin"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 15, 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-form-field", 10);
    i0.ɵɵelementStart(12, "mat-label");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 11);
    i0.ɵɵlistener("change", function OgcFilterTimeComponent_div_3_div_1_Template_input_change_15_listener($event) { i0.ɵɵrestoreView(_r15); const _r12 = i0.ɵɵreference(18); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.yearOnlyInputChange($event, _r12, "end"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "mat-datepicker-toggle", 12);
    i0.ɵɵelementStart(17, "mat-datepicker", 13, 17);
    i0.ɵɵlistener("yearSelected", function OgcFilterTimeComponent_div_3_div_1_Template_mat_datepicker_yearSelected_17_listener($event) { i0.ɵɵrestoreView(_r15); const _r12 = i0.ɵɵreference(18); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.yearSelected($event, _r12, "end"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 15, 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 19);
    i0.ɵɵlistener("click", function OgcFilterTimeComponent_div_3_div_1_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r15); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.resetFilter(); });
    i0.ɵɵpipe(22, "translate");
    i0.ɵɵelement(23, "mat-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-slide-toggle", 21);
    i0.ɵɵlistener("change", function OgcFilterTimeComponent_div_3_div_1_Template_mat_slide_toggle_change_24_listener() { i0.ɵɵrestoreView(_r15); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.toggleFilterState(); });
    i0.ɵɵpipe(25, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = i0.ɵɵreference(8);
    const _r12 = i0.ɵɵreference(18);
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 27, "igo.geo.timeFilter.startYear"));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("value", ctx_r8.onlyYearBegin);
    i0.ɵɵproperty("disabled", ctx_r8.filterStateDisable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r10)("disabled", ctx_r8.filterStateDisable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("startView", ctx_r8.calendarView())("startAt", ctx_r8.beginValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matDatepicker", _r10)("value", ctx_r8.beginValue ? ctx_r8.beginValue : ctx_r8.handleDate(ctx_r8.datasource.options.minDate))("min", ctx_r8.handleDate(ctx_r8.datasource.options.minDate))("max", ctx_r8.endValue && !ctx_r8.restrictedToStep() ? ctx_r8.endValue : ctx_r8.handleDate(ctx_r8.datasource.options.maxDate));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 29, "igo.geo.timeFilter.endYear"));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("value", ctx_r8.onlyYearEnd);
    i0.ɵɵproperty("disabled", ctx_r8.filterStateDisable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r12)("disabled", ctx_r8.filterStateDisable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("startView", ctx_r8.calendarView())("startAt", ctx_r8.endValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matDatepicker", _r12)("value", ctx_r8.endValue ? ctx_r8.endValue : ctx_r8.handleDate(ctx_r8.datasource.options.maxDate))("min", ctx_r8.beginValue ? ctx_r8.beginValue : ctx_r8.handleDate(ctx_r8.datasource.options.minDate))("max", ctx_r8.handleDate(ctx_r8.datasource.options.maxDate));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(22, 31, "igo.geo.filter.resetFilters"))("disabled", ctx_r8.filterStateDisable);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r8.resetIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(25, 33, "igo.geo.filter.toggleFilterState"))("checked", !ctx_r8.filterStateDisable);
} }
function OgcFilterTimeComponent_div_3_div_2_mat_form_field_11_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r27 = ctx.$implicit;
    i0.ɵɵproperty("value", hour_r27);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hour_r27);
} }
function OgcFilterTimeComponent_div_3_div_2_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 33);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 34);
    i0.ɵɵlistener("selectionChange", function OgcFilterTimeComponent_div_3_div_2_mat_form_field_11_Template_mat_select_selectionChange_4_listener() { i0.ɵɵrestoreView(_r29); i0.ɵɵnextContext(); const _r21 = i0.ɵɵreference(5); const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.changeTemporalProperty(_r21.value, 1); });
    i0.ɵɵtemplate(5, OgcFilterTimeComponent_div_3_div_2_mat_form_field_11_mat_option_5_Template, 2, 2, "mat-option", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "igo.geo.timeFilter.hour"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControl", ctx_r23.beginHourFormControl);
    i0.ɵɵattribute("disabled", !ctx_r23.currentFilter.active);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r23.beginHours);
} }
function OgcFilterTimeComponent_div_3_div_2_mat_form_field_12_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const minute_r31 = ctx.$implicit;
    i0.ɵɵproperty("value", minute_r31);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(minute_r31);
} }
function OgcFilterTimeComponent_div_3_div_2_mat_form_field_12_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 37);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 34);
    i0.ɵɵlistener("selectionChange", function OgcFilterTimeComponent_div_3_div_2_mat_form_field_12_Template_mat_select_selectionChange_4_listener() { i0.ɵɵrestoreView(_r33); i0.ɵɵnextContext(); const _r21 = i0.ɵɵreference(5); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.changeTemporalProperty(_r21.value, 1); });
    i0.ɵɵtemplate(5, OgcFilterTimeComponent_div_3_div_2_mat_form_field_12_mat_option_5_Template, 2, 2, "mat-option", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "igo.geo.timeFilter.minute"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControl", ctx_r24.beginMinuteFormControl);
    i0.ɵɵattribute("disabled", !ctx_r24.currentFilter.active);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r24.beginMinutes);
} }
function OgcFilterTimeComponent_div_3_div_2_div_13_mat_form_field_10_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r39 = ctx.$implicit;
    i0.ɵɵproperty("value", hour_r39);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hour_r39);
} }
function OgcFilterTimeComponent_div_3_div_2_div_13_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 33);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 34);
    i0.ɵɵlistener("selectionChange", function OgcFilterTimeComponent_div_3_div_2_div_13_mat_form_field_10_Template_mat_select_selectionChange_4_listener() { i0.ɵɵrestoreView(_r41); i0.ɵɵnextContext(); const _r34 = i0.ɵɵreference(4); const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.changeTemporalProperty(_r34.value, 2); });
    i0.ɵɵtemplate(5, OgcFilterTimeComponent_div_3_div_2_div_13_mat_form_field_10_mat_option_5_Template, 2, 2, "mat-option", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "igo.geo.timeFilter.hour"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControl", ctx_r36.endHourFormControl);
    i0.ɵɵattribute("disabled", !ctx_r36.currentFilter.active);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r36.endHours);
} }
function OgcFilterTimeComponent_div_3_div_2_div_13_mat_form_field_11_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const minute_r43 = ctx.$implicit;
    i0.ɵɵproperty("value", minute_r43);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(minute_r43);
} }
function OgcFilterTimeComponent_div_3_div_2_div_13_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 37);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 34);
    i0.ɵɵlistener("selectionChange", function OgcFilterTimeComponent_div_3_div_2_div_13_mat_form_field_11_Template_mat_select_selectionChange_4_listener() { i0.ɵɵrestoreView(_r45); i0.ɵɵnextContext(); const _r34 = i0.ɵɵreference(4); const ctx_r44 = i0.ɵɵnextContext(3); return ctx_r44.changeTemporalProperty(_r34.value, 2); });
    i0.ɵɵtemplate(5, OgcFilterTimeComponent_div_3_div_2_div_13_mat_form_field_11_mat_option_5_Template, 2, 2, "mat-option", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "igo.geo.timeFilter.minute"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControl", ctx_r37.endMinuteFormControl);
    i0.ɵɵattribute("disabled", !ctx_r37.currentFilter.active);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r37.endMinutes);
} }
function OgcFilterTimeComponent_div_3_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "mat-form-field", 24);
    i0.ɵɵelement(2, "mat-datepicker-toggle", 12);
    i0.ɵɵelementStart(3, "input", 25, 38);
    i0.ɵɵlistener("dateChange", function OgcFilterTimeComponent_div_3_div_2_div_13_Template_input_dateChange_3_listener() { i0.ɵɵrestoreView(_r47); const _r34 = i0.ɵɵreference(4); const ctx_r46 = i0.ɵɵnextContext(3); return ctx_r46.changeTemporalProperty(_r34.value, 2); });
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "span", 27);
    i0.ɵɵelementStart(7, "mat-datepicker", 28, 17);
    i0.ɵɵlistener("yearSelected", function OgcFilterTimeComponent_div_3_div_2_div_13_Template_mat_datepicker_yearSelected_7_listener($event) { i0.ɵɵrestoreView(_r47); const _r35 = i0.ɵɵreference(8); const ctx_r48 = i0.ɵɵnextContext(3); return ctx_r48.yearSelected($event, _r35, "end"); })("monthSelected", function OgcFilterTimeComponent_div_3_div_2_div_13_Template_mat_datepicker_monthSelected_7_listener($event) { i0.ɵɵrestoreView(_r47); const _r35 = i0.ɵɵreference(8); const ctx_r49 = i0.ɵɵnextContext(3); return ctx_r49.monthSelected($event, _r35, "end"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 29);
    i0.ɵɵtemplate(10, OgcFilterTimeComponent_div_3_div_2_div_13_mat_form_field_10_Template, 6, 6, "mat-form-field", 30);
    i0.ɵɵtemplate(11, OgcFilterTimeComponent_div_3_div_2_div_13_mat_form_field_11_Template, 6, 6, "mat-form-field", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r35 = i0.ɵɵreference(8);
    const ctx_r25 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", _r35)("disabled", ctx_r25.filterStateDisable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matDatepicker", _r35)("placeholder", i0.ɵɵpipeBind1(5, 14, "igo.geo.timeFilter.endDate"))("matDatepickerFilter", ctx_r25.dateFilter.bind(ctx_r25, "end"))("value", ctx_r25.endValue ? ctx_r25.endValue : ctx_r25.handleDate(ctx_r25.datasource.options.maxDate))("min", ctx_r25.beginValue ? ctx_r25.beginValue : ctx_r25.handleDate(ctx_r25.datasource.options.minDate))("max", ctx_r25.handleDate(ctx_r25.datasource.options.maxDate))("disabled", ctx_r25.filterStateDisable);
    i0.ɵɵattribute("disabled", !ctx_r25.currentFilter.active);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("startView", ctx_r25.calendarView())("startAt", ctx_r25.endValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r25.calendarType() === "datetime");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r25.calendarType() === "datetime");
} }
function OgcFilterTimeComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵelementStart(2, "mat-form-field", 24);
    i0.ɵɵelement(3, "mat-datepicker-toggle", 12);
    i0.ɵɵelementStart(4, "input", 25, 26);
    i0.ɵɵlistener("dateChange", function OgcFilterTimeComponent_div_3_div_2_Template_input_dateChange_4_listener() { i0.ɵɵrestoreView(_r51); const _r21 = i0.ɵɵreference(5); const ctx_r50 = i0.ɵɵnextContext(2); return ctx_r50.changeTemporalProperty(_r21.value, 1); });
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "span", 27);
    i0.ɵɵelementStart(8, "mat-datepicker", 28, 14);
    i0.ɵɵlistener("yearSelected", function OgcFilterTimeComponent_div_3_div_2_Template_mat_datepicker_yearSelected_8_listener($event) { i0.ɵɵrestoreView(_r51); const _r22 = i0.ɵɵreference(9); const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.yearSelected($event, _r22, "begin"); })("monthSelected", function OgcFilterTimeComponent_div_3_div_2_Template_mat_datepicker_monthSelected_8_listener($event) { i0.ɵɵrestoreView(_r51); const _r22 = i0.ɵɵreference(9); const ctx_r53 = i0.ɵɵnextContext(2); return ctx_r53.monthSelected($event, _r22, "begin"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 29);
    i0.ɵɵtemplate(11, OgcFilterTimeComponent_div_3_div_2_mat_form_field_11_Template, 6, 6, "mat-form-field", 30);
    i0.ɵɵtemplate(12, OgcFilterTimeComponent_div_3_div_2_mat_form_field_12_Template, 6, 6, "mat-form-field", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, OgcFilterTimeComponent_div_3_div_2_div_13_Template, 12, 16, "div", 32);
    i0.ɵɵelementStart(14, "button", 19);
    i0.ɵɵlistener("click", function OgcFilterTimeComponent_div_3_div_2_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r51); const ctx_r54 = i0.ɵɵnextContext(2); return ctx_r54.resetFilter(); });
    i0.ɵɵpipe(15, "translate");
    i0.ɵɵelement(16, "mat-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-slide-toggle", 21);
    i0.ɵɵlistener("change", function OgcFilterTimeComponent_div_3_div_2_Template_mat_slide_toggle_change_17_listener() { i0.ɵɵrestoreView(_r51); const ctx_r55 = i0.ɵɵnextContext(2); return ctx_r55.toggleFilterState(); });
    i0.ɵɵpipe(18, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r22 = i0.ɵɵreference(9);
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("for", _r22)("disabled", ctx_r9.filterStateDisable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matDatepicker", _r22)("placeholder", i0.ɵɵpipeBind1(6, 20, "igo.geo.timeFilter.startDate"))("matDatepickerFilter", ctx_r9.dateFilter.bind(ctx_r9, "begin"))("value", ctx_r9.beginValue ? ctx_r9.beginValue : ctx_r9.handleDate(ctx_r9.datasource.options.minDate))("min", ctx_r9.handleDate(ctx_r9.datasource.options.minDate))("max", ctx_r9.endValue && !ctx_r9.restrictedToStep() ? ctx_r9.endValue : ctx_r9.handleDate(ctx_r9.datasource.options.maxDate))("disabled", ctx_r9.filterStateDisable);
    i0.ɵɵattribute("disabled", !ctx_r9.currentFilter.active);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("startView", ctx_r9.calendarView())("startAt", ctx_r9.beginValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r9.calendarType() === "datetime");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.calendarType() === "datetime");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.restrictedToStep());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(15, 22, "igo.geo.filter.resetFilters"))("disabled", ctx_r9.filterStateDisable);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r9.resetIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(18, 24, "igo.geo.filter.toggleFilterState"))("checked", !ctx_r9.filterStateDisable);
} }
function OgcFilterTimeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, OgcFilterTimeComponent_div_3_div_1_Template, 26, 35, "div", 7);
    i0.ɵɵtemplate(2, OgcFilterTimeComponent_div_3_div_2_Template, 19, 26, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.calendarTypeYear);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.calendarType() !== "year");
} }
const moment = moment_;
export class OgcFilterTimeComponent {
    constructor(ogcFilterTimeService) {
        this.ogcFilterTimeService = ogcFilterTimeService;
        this.changeProperty = new EventEmitter();
        this.beginHourFormControl = new FormControl();
        this.beginMinuteFormControl = new FormControl();
        this.endHourFormControl = new FormControl();
        this.endMinuteFormControl = new FormControl();
        this._defaultMin = '1900-01-01';
        this._defaultMax = '2052-01-06';
        this._defaultDisplayFormat = 'DD/MM/YYYY HH:mm A';
        this._defaultSliderModeEnabled = true;
        this.ogcFilterOperator = OgcFilterOperator;
        this.sliderMode = false;
        this.defaultStepMillisecond = 60000;
        this.calendarTypeYear = false;
        this.resetIcon = 'replay';
    }
    get step() {
        return this.datasource.options.stepDate
            ? this.datasource.options.stepDate
            : this.currentFilter.step;
    }
    get stepMilliseconds() {
        const step = moment.duration(this.step).asMilliseconds();
        return step === 0 ? this.defaultStepMillisecond : step;
    }
    set beginValue(begin) {
        this._beginValue = begin;
    }
    get beginValue() {
        return this._beginValue;
    }
    set endValue(end) {
        this._endValue = end;
    }
    get endValue() {
        return this._endValue;
    }
    get sliderInterval() {
        return this.currentFilter.sliderInterval === undefined
            ? 2000
            : this.currentFilter.sliderInterval;
    }
    get maxDate() {
        return this.datasource.options.maxDate ? this.datasource.options.maxDate : this._defaultMax;
    }
    get displayFormat() {
        return this.currentFilter.displayFormat ? this.currentFilter.displayFormat : this._defaultDisplayFormat;
    }
    ngOnInit() {
        if (this.currentFilter.sliderOptions) {
            this.currentFilter.sliderOptions.enabled = this.currentFilter.sliderOptions.enabled !== undefined ?
                this.currentFilter.sliderOptions.enabled : this._defaultSliderModeEnabled;
        }
        this.beginValue = this.parseFilter(this.handleMin());
        this.endValue = this.parseFilter(this.handleMax());
        this.onlyYearBegin = this.beginValue.getUTCFullYear();
        this.onlyYearEnd = this.endValue.getUTCFullYear();
        this.calendarTypeYear = this.isCalendarYearMode();
        this.setFilterStateDisable();
        this.updateHoursMinutesArray();
        // update value for now value
        this.updateValues();
    }
    parseFilter(filter) {
        if (!filter) {
            return new Date();
        }
        else if (isNaN(new Date(filter).getTime())) {
            if (filter.search('now') >= 0) {
                const interval = filter.match(/years|months|weeks|days|hours|seconds/);
                if (filter.match(/\+/)) {
                    const intervalInt = parseInt(filter.substring(filter.search('+') + 1, interval.index), 10);
                    return moment().add(intervalInt, interval[0]).toDate();
                }
                if (filter.match(/\-/)) {
                    const intervalInt = parseInt(filter.substring(filter.search('-') + 1, interval.index), 10);
                    return moment().subtract(intervalInt, interval[0]).toDate();
                }
                return new Date();
            }
            if (filter.search('today') >= 0) {
                const _now = moment().endOf('day').toDate();
                const interval = filter.match(/years|months|weeks|days|hours|seconds/);
                if (filter.match(/\+/)) {
                    const intervalInt = parseInt(filter.substring(filter.search('+') + 1, interval.index), 10);
                    return moment(_now).add(intervalInt, interval[0]).toDate();
                }
                if (filter.match(/\-/)) {
                    const intervalInt = parseInt(filter.substring(filter.search('-') + 1, interval.index), 10);
                    return moment(_now).subtract(intervalInt, interval[0]).toDate();
                }
                return _now;
            }
            return new Date();
        }
        if (this.currentFilter.calendarModeYear) {
            const date = this.getDateFromStringWithoutTime(filter);
            return date;
        }
        else {
            return filter ? new Date(filter) : new Date();
        }
    }
    changeTemporalProperty(value, position, refreshFilter = true) {
        let valueTmp = this.getDateTime(value, position);
        if (this.isCalendarYearMode()) {
            let dateStringFromYearNotime;
            if (position === 1) {
                this.beginValue = value;
                this.onlyYearBegin = this.beginValue.getFullYear();
                dateStringFromYearNotime = `${this.onlyYearBegin}-01-01`;
            }
            else {
                this.endValue = value;
                this.onlyYearEnd = this.endValue.getFullYear();
                dateStringFromYearNotime = `${this.onlyYearEnd}-01-01`;
            }
            // call service with string date without time
            this.changeProperty.next({ value: dateStringFromYearNotime, pos: position, refreshFilter });
            return;
        }
        if (position === 2 && this.calendarType() === 'date' && !this.sliderMode) {
            /* Above month: see yearSelected or monthSelected */
            valueTmp = moment(valueTmp).endOf('day').toDate();
        }
        if (position === 1) {
            this.beginValue = valueTmp;
            if (this.restrictedToStep()) {
                this.changeTemporalProperty(this.ogcFilterTimeService.addStep(valueTmp, this.stepMilliseconds), 2, refreshFilter);
            }
        }
        else {
            this.endValue = valueTmp;
        }
        this.updateHoursMinutesArray();
        this.changeProperty.next({ value: valueTmp.toISOString(), pos: position, refreshFilter });
    }
    handleDate(value) {
        if (!value || value === '') {
            return undefined;
        }
        if (typeof (value) === 'string' && this.currentFilter.calendarModeYear) {
            return this.getDateFromStringWithoutTime(value);
        }
        return new Date(value);
    }
    calendarType() {
        if (this.currentFilter.calendarModeYear) {
            return 'year';
        }
        if (this.stepMilliseconds < 86400000) {
            return 'datetime';
        }
        return 'date';
    }
    isCalendarYearMode() {
        if (this.calendarType() === 'year') {
            return true;
        }
        else {
            return false;
        }
    }
    yearOnlyInputChange(changeEvent, datePicker, property) {
        const year = changeEvent.target.value;
        const date = this.getDateFromStringWithoutTime(year);
        this.yearSelected(date, datePicker, property);
    }
    yearSelected(year, datePicker, property, refreshFilter = true) {
        if (this.ogcFilterTimeService.stepIsYearDuration(this.step)) {
            if (datePicker) {
                datePicker.close();
            }
            if (property === 'end') {
                // change value 01 jan to 31 dec same year
                year = moment(year).endOf('year').toDate();
            }
            else if (property === 'begin' && this.restrictedToStep() && !this.calendarTypeYear) {
                this.yearSelected(year, undefined, 'end');
            }
            this.changeTemporalProperty(year, property === 'begin' ? 1 : 2, refreshFilter);
        }
    }
    monthSelected(month, datePicker, property, refreshFilter = true) {
        if (this.ogcFilterTimeService.stepIsMonthDuration(this.step)) {
            if (datePicker) {
                datePicker.close();
            }
            if (property === 'end') {
                month = moment(month).endOf('month').toDate();
            }
            else if (property === 'begin' && this.restrictedToStep()) {
                this.monthSelected(month, undefined, 'end');
            }
            this.changeTemporalProperty(month, property === 'begin' ? 1 : 2, refreshFilter);
        }
    }
    calendarView() {
        const test = this.stepMilliseconds;
        const diff = Math.abs(this.parseFilter(this.currentFilter.end).getTime() -
            this.parseFilter(this.currentFilter.begin).getTime());
        if (this.ogcFilterTimeService.stepIsYearDuration(this.step)) {
            return 'multi-year';
        }
        else if (this.ogcFilterTimeService.stepIsMonthDuration(this.step)) {
            return 'year';
        }
        else if (test < 86400000 && diff < 86400000) {
            return 'clock';
        }
        else {
            return 'month';
        }
    }
    dateFilter(type, date) {
        const dateValue = new Date(date);
        const diff = dateValue.getTime() - new Date(this.handleMin()).getTime();
        if (this.ogcFilterTimeService.stepIsYearDuration(this.step)) {
            const monthDiff = moment(dateValue).diff(moment(this.handleMin()), 'years', true);
            if (type === 'end') {
                const dateValuePlus1 = moment(dateValue).add(1, 'd');
                const monthDiffPlus1 = moment(dateValuePlus1).diff(moment(this.handleMin()), 'years', true);
                return (monthDiffPlus1 % moment.duration(this.step).asYears()) === 0;
            }
            else if (type === 'begin') {
                return (monthDiff % moment.duration(this.step).asYears()) === 0;
            }
        }
        else if (this.ogcFilterTimeService.stepIsMonthDuration(this.step)) {
            const monthDiff = moment(dateValue).diff(moment(this.handleMin()), 'months', true);
            if (type === 'end') {
                const dateValuePlus1 = moment(dateValue).add(1, 'd');
                const monthDiffPlus1 = moment(dateValuePlus1).diff(moment(this.handleMin()), 'months', true);
                return (monthDiffPlus1 % moment.duration(this.step).asMonths()) === 0;
            }
            else if (type === 'begin') {
                return (monthDiff % moment.duration(this.step).asMonths()) === 0;
            }
        }
        else if (this.ogcFilterTimeService.stepIsWeekDuration(this.step)) {
            const weekDiff = moment(dateValue).diff(moment(this.handleMin()), 'weeks', true);
            if (type === 'end') {
                const dateValuePlus1 = moment(dateValue).add(1, 'd');
                const weekDiffPlus1 = moment(dateValuePlus1).diff(moment(this.handleMin()), 'weeks', true);
                return (weekDiffPlus1 % moment.duration(this.step).asWeeks()) === 0;
            }
            else if (type === 'begin') {
                return (weekDiff % moment.duration(this.step).asWeeks()) === 0;
            }
        }
        else if (this.ogcFilterTimeService.stepIsDayDuration(this.step)) {
            const dayDiff = moment(dateValue).diff(moment(this.handleMin()), 'days', true);
            if (type === 'end') {
                const dateValuePlus1 = moment(dateValue).add(1, 'd');
                const dayDiffPlus1 = moment(dateValuePlus1).diff(moment(this.handleMin()), 'days', true);
                const _mod = (dayDiffPlus1 % moment.duration(this.step).asDays());
                return (_mod < 0.0000001 && _mod > -0.0000001) || _mod === 0; // 1 millisecond = 1.1574074074074076e-8
            }
            else if (type === 'begin') {
                const _mod = ((dayDiff % moment.duration(this.step).asDays()) + 1);
                return (_mod < 0.0000001 && _mod > -0.0000001 && _mod !== 0) || _mod === 1; // 1 millisecond = 1.1574074074074076e-8
            }
        }
        else if (this.ogcFilterTimeService.stepIsHourDuration(this.step)) {
            const hourDiff = moment(dateValue).diff(moment(this.handleMin()), 'hours', true);
            return (hourDiff % moment.duration(this.step).asHours()) === 0;
        }
        else if (this.ogcFilterTimeService.stepIsMinuteDuration(this.step)) {
            return true;
        }
        return diff % this.stepMilliseconds === 0;
    }
    getDateTime(date, pos) {
        const valuetmp = new Date(date);
        let valuetmp2;
        if (!this.sliderMode) {
            switch (pos) {
                case 1: {
                    if (this.currentFilter.calendarModeYear) {
                        valuetmp2 = valuetmp.setHours(0, 0);
                        break;
                    }
                    else {
                        valuetmp2 = valuetmp.setHours(this.beginHourFormControl.value, this.beginMinuteFormControl.value);
                        break;
                    }
                }
                case 2: {
                    if (this.currentFilter.calendarModeYear) {
                        valuetmp2 = valuetmp.setHours(0, 0);
                        break;
                    }
                    else {
                        valuetmp2 = valuetmp.setHours(this.endHourFormControl.value, this.endMinuteFormControl.value);
                        break;
                    }
                }
            }
        }
        return new Date(valuetmp2 ? valuetmp2 : valuetmp);
    }
    handleMinuteIncrement() {
        if (this.ogcFilterTimeService.stepIsMinuteDuration(this.step)) {
            if (this.stepMilliseconds < 3600000) {
                return this.stepMilliseconds / 1000 === 60 ? 1 : this.stepMilliseconds / 1000;
            }
            else {
                return (this.stepMilliseconds % 3600000) / 60;
            }
        }
        else if (this.ogcFilterTimeService.stepIsHourDuration(this.step)) {
            return 60;
        }
        return 1;
    }
    handleHourIncrement() {
        if (this.ogcFilterTimeService.stepIsHourDuration(this.step)) {
            return this.stepMilliseconds / 1000 / 60 / 60;
        }
        return 1;
    }
    fullBeginHoursArray(checkEndValue) {
        if (checkEndValue) {
            this.beginHours = Array.from({
                length: (this.endHourFormControl.value - 0) / this.handleHourIncrement() + 1
            }, (_, i) => 0 + i * this.handleHourIncrement());
        }
        else {
            this.beginHours = Array.from({ length: (23 - 0) / this.handleHourIncrement() + 1 }, (_, i) => 0 + i * this.handleHourIncrement());
        }
        this.beginHourFormControl.setValue(this.beginValue.getHours());
    }
    fullEndHoursArray(checkEndValue) {
        if (checkEndValue) {
            this.endHours = Array.from({
                length: (23 - this.beginHourFormControl.value) /
                    this.handleHourIncrement() +
                    1
            }, (_, i) => this.beginHourFormControl.value + i * this.handleHourIncrement());
        }
        else {
            this.endHours = Array.from({ length: (23 - 0) / this.handleHourIncrement() + 1 }, (_, i) => 0 + i * this.handleHourIncrement());
        }
        this.endHourFormControl.setValue(this.endValue.getHours());
    }
    fullBeginMinutesArray(checkEndValue) {
        if (checkEndValue) {
            this.beginMinutes = Array.from({
                length: (this.endMinuteFormControl.value - 0) /
                    this.handleMinuteIncrement() +
                    1
            }, (_, i) => 0 + i * this.handleMinuteIncrement());
        }
        else {
            this.beginMinutes = Array.from({ length: (59 - 0) / this.handleMinuteIncrement() + 1 }, (_, i) => 0 + i * this.handleMinuteIncrement());
        }
        this.beginMinuteFormControl.setValue(this.beginValue.getMinutes());
    }
    fullEndMinutesArray(checkEndValue) {
        if (checkEndValue) {
            this.endMinutes = Array.from({
                length: (59 - this.beginMinuteFormControl.value) /
                    this.handleMinuteIncrement() +
                    1
            }, (_, i) => this.beginMinuteFormControl.value + i * this.handleMinuteIncrement());
        }
        else {
            this.endMinutes = Array.from({ length: (59 - 0) / this.handleMinuteIncrement() + 1 }, (_, i) => 0 + i * this.handleMinuteIncrement());
        }
        this.endMinuteFormControl.setValue(this.endValue.getMinutes());
    }
    updateHoursMinutesArray() {
        const beginTmp = new Date(this.beginValue);
        const endTmp = new Date(this.endValue);
        if (beginTmp.setHours(0, 0) === endTmp.setHours(0, 0)) {
            this.fullBeginHoursArray(true);
            this.fullEndHoursArray(true);
            if (this.beginValue.getHours() === this.endValue.getHours()) {
                this.fullBeginMinutesArray(true);
                this.fullEndMinutesArray(true);
            }
        }
        else {
            this.fullBeginHoursArray();
            this.fullEndHoursArray();
            this.fullBeginMinutesArray();
            this.fullEndMinutesArray();
        }
    }
    updateValues() {
        this.changeTemporalProperty(this.beginValue, 1, false);
        this.changeTemporalProperty(this.endValue, 2, true);
    }
    restrictedToStep() {
        return this.currentFilter.restrictToStep
            ? this.currentFilter.restrictToStep : false;
    }
    handleMin() {
        return this.currentFilter.begin ? this.currentFilter.begin :
            (this.datasource.options.minDate ? this.datasource.options.minDate : this._defaultMin);
    }
    handleMax() {
        return this.currentFilter.end ? this.currentFilter.end :
            (this.datasource.options.maxDate ? this.datasource.options.maxDate : this._defaultMax);
    }
    changePropertyByPass(event) {
        this.changeProperty.next(event);
    }
    modeChange(event) {
        if (!event.checked) {
            this.updateValues();
        }
    }
    setFilterStateDisable() {
        if (this.currentFilter) {
            this.filterStateDisable = !this.currentFilter.active;
        }
        else {
            this.filterStateDisable = false;
        }
        if (this.calendarType() === 'datetime') {
            if (this.filterStateDisable === true) {
                this.beginHourFormControl.disable();
                this.beginMinuteFormControl.disable();
                this.endHourFormControl.disable();
                this.endMinuteFormControl.disable();
            }
            else {
                this.beginHourFormControl.enable();
                this.beginMinuteFormControl.enable();
                this.endHourFormControl.enable();
                this.endMinuteFormControl.enable();
            }
        }
    }
    getDateFromStringWithoutTime(stringDate) {
        // warning create date with no time make a date UTC with TZ and the date create maybe not the same year, month and day
        // exemple:
        // new Date('2022-01-01') -> Fri Dec 31 2021 19:00:00 GMT-0500 (heure normale de l’Est nord-américain)
        // to create same date as string, add time 00 in the creation
        // new Date('2022-01-01 00:00:00') -> Sat Jan 01 2022 00:00:00 GMT-0500 (heure normale de l’Est nord-américain)
        let year;
        let month = '01';
        let day = '01';
        if (stringDate.length === 10) {
            const dateItems = stringDate.split('-');
            if (dateItems.length !== 3) {
                throw new Error('Error in config date begin-end for ogcFilter: Date without time format need to be YYYY-MM-DD or YYYY');
            }
            else {
                year = dateItems[0];
                month = dateItems[1];
                day = dateItems[2];
            }
        }
        else if (stringDate.length === 4) {
            year = stringDate;
        }
        else {
            return new Date(stringDate);
        }
        return new Date(`${year}-${month}-${day} 00:00:00`);
    }
    resetFilter() {
        let filterOriginConfig = this.datasource.options.ogcFilters.filters;
        let minDefaultDate;
        let maxDefaultDate;
        let minDefaultISOString;
        let maxDefaultISOString;
        if (this.calendarTypeYear) {
            if (filterOriginConfig.end === 'today') {
                let todayDateStringNoTime = new Date().toLocaleDateString('en-CA'); // '2022-02-13'
                maxDefaultISOString = `${todayDateStringNoTime.substring(0, 4)}-01-01`;
            }
            else {
                maxDefaultISOString = `${filterOriginConfig.end.substring(0, 4)}-01-01`;
            }
            minDefaultISOString = `${filterOriginConfig.begin.substring(0, 4)}-01-01`;
            minDefaultDate = this.getDateFromStringWithoutTime(minDefaultISOString);
            maxDefaultDate = this.getDateFromStringWithoutTime(maxDefaultISOString);
        }
        else {
            minDefaultDate = this.parseFilter(filterOriginConfig.begin);
            maxDefaultDate = this.parseFilter(filterOriginConfig.end);
            minDefaultISOString = minDefaultDate.toISOString();
            maxDefaultISOString = maxDefaultDate.toISOString();
        }
        if ((this.currentFilter.begin !== minDefaultISOString) ||
            (this.currentFilter.end !== maxDefaultISOString)) {
            this.beginValue = minDefaultDate;
            this.endValue = maxDefaultDate;
            this.updateValues();
        }
    }
    toggleFilterState() {
        if (this.currentFilter.active === true) {
            this.currentFilter.active = false;
        }
        else {
            this.currentFilter.active = true;
        }
        this.setFilterStateDisable();
        this.updateValues();
    }
}
OgcFilterTimeComponent.ɵfac = function OgcFilterTimeComponent_Factory(t) { return new (t || OgcFilterTimeComponent)(i0.ɵɵdirectiveInject(i1.OGCFilterTimeService)); };
OgcFilterTimeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OgcFilterTimeComponent, selectors: [["igo-ogc-filter-time"]], viewQuery: function OgcFilterTimeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
        i0.ɵɵviewQuery(_c2, 5);
        i0.ɵɵviewQuery(_c3, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.endDatepickerTime = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.beginDatepickerTime = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.beginTime = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.endTime = _t.first);
    } }, inputs: { datasource: "datasource", currentFilter: "currentFilter" }, outputs: { changeProperty: "changeProperty" }, decls: 4, vars: 3, consts: [[1, "datetime-container"], [3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["class", "slider-container", 4, "ngIf"], [4, "ngIf"], [3, "ngModel", "ngModelChange", "change"], [1, "slider-container"], [3, "begin", "max", "currentFilter", "datasource", "changeProperty"], ["class", "year-input-container", 4, "ngIf"], ["class", "datetime-input-container", 4, "ngIf"], [1, "year-input-container"], [1, "year-input"], ["matInput", "", 1, "year-input-only-year", 3, "value", "disabled", "change"], ["matSuffix", "", 3, "for", "disabled"], ["panelClass", "datepicker-year", 3, "startView", "startAt", "yearSelected"], ["beginDatepicker", ""], ["matInput", "", "enabled", "false", "readonly", "true", 1, "year-input-hide", 3, "matDatepicker", "value", "min", "max"], ["beginYear", ""], ["endDatepicker", ""], ["endYear", ""], ["mat-icon-button", "", "color", "primary", 1, "reset-button", 3, "matTooltip", "disabled", "click"], [3, "svgIcon"], ["tooltip-position", "below", "matTooltipShowDelay", "500", 1, "toggle-filter-state", 3, "matTooltip", "checked", "change"], [1, "datetime-input-container"], [1, "datetime-input"], [1, "date-input"], ["matInput", "", 3, "matDatepicker", "placeholder", "matDatepickerFilter", "value", "min", "max", "disabled", "dateChange"], ["begin", ""], [1, "filler"], [3, "startView", "startAt", "yearSelected", "monthSelected"], [1, "time-input"], ["class", "hour-input", 4, "ngIf"], ["class", "minute-input", 4, "ngIf"], ["class", "datetime-input", 4, "ngIf"], [1, "hour-input"], [3, "formControl", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "minute-input"], ["end", ""]], template: function OgcFilterTimeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, OgcFilterTimeComponent_mat_slide_toggle_1_Template, 3, 4, "mat-slide-toggle", 1);
        i0.ɵɵtemplate(2, OgcFilterTimeComponent_div_2_Template, 2, 4, "div", 2);
        i0.ɵɵtemplate(3, OgcFilterTimeComponent_div_3_Template, 3, 2, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.currentFilter.sliderOptions == null ? null : ctx.currentFilter.sliderOptions.enabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.sliderMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.sliderMode);
    } }, styles: ["input{text-align:center!important;margin:auto 5px!important}.slider-container[_ngcontent-%COMP%]{text-align:center}.datetime-input[_ngcontent-%COMP%]{display:inline-block;width:117px;margin:10px 0 5px 10px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.datetime-input[_ngcontent-%COMP%]{width:36%;margin:0}}.date-input[_ngcontent-%COMP%]{width:100px;margin-right:25px}.time-input[_ngcontent-%COMP%]{margin-right:25px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.time-input[_ngcontent-%COMP%]{margin-right:5px}}.hour-input[_ngcontent-%COMP%], .minute-input[_ngcontent-%COMP%]{width:35px;margin-left:7px}.year-input[_ngcontent-%COMP%]{width:98px;margin:10px 18px 5px 12px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.year-input[_ngcontent-%COMP%]{width:33%;margin:0 0 0 10px}}.year-input-hide[_ngcontent-%COMP%]{width:120px;margin-right:25px;display:none}.year-input-only-year[_ngcontent-%COMP%]{width:120px;margin-right:25px}.reset-button[_ngcontent-%COMP%]{width:25px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.reset-button[_ngcontent-%COMP%]{padding-left:6px}}.toggle-filter-state[_ngcontent-%COMP%]{padding-left:15px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.toggle-filter-state[_ngcontent-%COMP%]{padding-left:7px}}  .datepicker-year   .mat-calendar-arrow{display:none}  .datepicker-year   .mat-calendar-period-button{pointer-events:none}  .datepicker-year   .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover{background-color:#0000001f;border-radius:999px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterTimeComponent, [{
        type: Component,
        args: [{
                selector: 'igo-ogc-filter-time',
                templateUrl: './ogc-filter-time.component.html',
                styleUrls: ['./ogc-filter-time.component.scss']
            }]
    }], function () { return [{ type: i1.OGCFilterTimeService }]; }, { datasource: [{
            type: Input
        }], currentFilter: [{
            type: Input
        }], changeProperty: [{
            type: Output
        }], endDatepickerTime: [{
            type: ViewChild,
            args: ['endDatepickerTime']
        }], beginDatepickerTime: [{
            type: ViewChild,
            args: ['beginDatepickerTime']
        }], beginTime: [{
            type: ViewChild,
            args: ['beginTime']
        }], endTime: [{
            type: ViewChild,
            args: ['endTime']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlci10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9vZ2MtZmlsdGVyLXRpbWUvb2djLWZpbHRlci10aW1lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9vZ2MtZmlsdGVyLXRpbWUvb2djLWZpbHRlci10aW1lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFFVCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQVF4RSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7O0lDakJoQywyQ0FHZ0M7SUFEOUIsOE9BQXdCLGtOQUFBO0lBRXhCLFlBQ0Y7O0lBQUEsaUJBQW1COzs7SUFIakIsMkNBQXdCO0lBRXhCLGVBQ0Y7SUFERSx1RkFDRjs7OztJQUVBLDhCQUFpRDtJQUMvQyxxREFNQztJQURDLHNQQUErQztJQUVqRCxpQkFBNkI7SUFFL0IsaUJBQU07OztJQVJGLGVBQW9CO0lBQXBCLHlDQUFvQixxRUFBQSx1Q0FBQSxpQ0FBQTs7OztJQVl0Qiw4QkFBMkQ7SUFHekQsMENBQW9DO0lBQ2xDLGlDQUFXO0lBQUEsWUFBNkM7O0lBQUEsaUJBQVk7SUFDcEUsaUNBTUc7SUFGRCw2UEFBd0QsT0FBTyxLQUFFO0lBSm5FLGlCQU1HO0lBQ0gsNENBQWlIO0lBRWpILDhDQU1HO0lBREQsMlFBQXNELE9BQU8sS0FBRTtJQUVqRSxpQkFBaUI7SUFFakIsZ0NBU0c7SUFDTCxpQkFBaUI7SUFF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QyxtQkFBbUI7WUFDSSxtQkFBbUI7a0JBQXBELFNBQVM7bUJBQUMscUJBQXFCO1lBQ1IsU0FBUztrQkFBaEMsU0FBUzttQkFBQyxXQUFXO1lBQ0EsT0FBTztrQkFBNUIsU0FBUzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJPcGVyYXRvciB9IGZyb20gJy4uLy4uL2ZpbHRlci9zaGFyZWQvb2djLWZpbHRlci5lbnVtJztcbmltcG9ydCB7IE9HQ0ZpbHRlclRpbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL29nYy1maWx0ZXItdGltZS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucyxcbiAgT2djRmlsdGVyYWJsZURhdGFTb3VyY2UsXG4gIE9nY0ZpbHRlckR1cmluZ09wdGlvbnNcbn0gZnJvbSAnLi4vc2hhcmVkL29nYy1maWx0ZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50XztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLW9nYy1maWx0ZXItdGltZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vZ2MtZmlsdGVyLXRpbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vZ2MtZmlsdGVyLXRpbWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPZ2NGaWx0ZXJUaW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YXNvdXJjZTogT2djRmlsdGVyYWJsZURhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIGN1cnJlbnRGaWx0ZXI6IGFueTtcbiAgQE91dHB1dCgpIGNoYW5nZVByb3BlcnR5OiBFdmVudEVtaXR0ZXI8e1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgcG9zOiBudW1iZXI7XG4gICAgcmVmcmVzaEZpbHRlcjogYm9vbGVhbjtcbiAgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBiZWdpbkhvdXJzOiBudW1iZXJbXTtcbiAgZW5kSG91cnM6IG51bWJlcltdO1xuICBiZWdpbk1pbnV0ZXM6IG51bWJlcltdO1xuICBlbmRNaW51dGVzOiBudW1iZXJbXTtcbiAgYmVnaW5Ib3VyRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgYmVnaW5NaW51dGVGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBlbmRIb3VyRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgZW5kTWludXRlRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgX2JlZ2luVmFsdWU6IERhdGU7XG4gIF9lbmRWYWx1ZTogRGF0ZTtcbiAgcmVhZG9ubHkgX2RlZmF1bHRNaW46IHN0cmluZyA9ICcxOTAwLTAxLTAxJztcbiAgcmVhZG9ubHkgX2RlZmF1bHRNYXg6IHN0cmluZyA9ICcyMDUyLTAxLTA2JztcbiAgcmVhZG9ubHkgX2RlZmF1bHREaXNwbGF5Rm9ybWF0OiBzdHJpbmcgPSAnREQvTU0vWVlZWSBISDptbSBBJztcbiAgcmVhZG9ubHkgX2RlZmF1bHRTbGlkZXJNb2RlRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gIG9nY0ZpbHRlck9wZXJhdG9yID0gT2djRmlsdGVyT3BlcmF0b3I7XG4gIHB1YmxpYyBzbGlkZXJNb2RlID0gZmFsc2U7XG5cbiAgcmVhZG9ubHkgZGVmYXVsdFN0ZXBNaWxsaXNlY29uZCA9IDYwMDAwO1xuICBwdWJsaWMgb3B0aW9uczogT2djRmlsdGVyYWJsZURhdGFTb3VyY2VPcHRpb25zO1xuXG4gIHB1YmxpYyBvbmx5WWVhckJlZ2luOiBudW1iZXI7XG4gIHB1YmxpYyBvbmx5WWVhckVuZDogbnVtYmVyO1xuICBwdWJsaWMgY2FsZW5kYXJUeXBlWWVhciA9IGZhbHNlO1xuICBwdWJsaWMgcmVzZXRJY29uID0gJ3JlcGxheSc7XG4gIHB1YmxpYyBmaWx0ZXJTdGF0ZURpc2FibGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnZW5kRGF0ZXBpY2tlclRpbWUnKSBlbmREYXRlcGlja2VyVGltZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYmVnaW5EYXRlcGlja2VyVGltZScpIGJlZ2luRGF0ZXBpY2tlclRpbWU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2JlZ2luVGltZScpIGJlZ2luVGltZTogSFRNTElucHV0RWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnZW5kVGltZScpIGVuZFRpbWU6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgZ2V0IHN0ZXAoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlLm9wdGlvbnMuc3RlcERhdGVcbiAgICAgID8gdGhpcy5kYXRhc291cmNlLm9wdGlvbnMuc3RlcERhdGVcbiAgICAgIDogdGhpcy5jdXJyZW50RmlsdGVyLnN0ZXA7XG4gIH1cblxuICBnZXQgc3RlcE1pbGxpc2Vjb25kcygpOiBudW1iZXIge1xuICAgIGNvbnN0IHN0ZXAgPSBtb21lbnQuZHVyYXRpb24odGhpcy5zdGVwKS5hc01pbGxpc2Vjb25kcygpO1xuICAgIHJldHVybiBzdGVwID09PSAwID8gdGhpcy5kZWZhdWx0U3RlcE1pbGxpc2Vjb25kIDogc3RlcDtcbiAgfVxuXG4gIHNldCBiZWdpblZhbHVlKGJlZ2luOiBEYXRlKSB7XG4gICAgdGhpcy5fYmVnaW5WYWx1ZSA9IGJlZ2luO1xuICB9XG5cbiAgZ2V0IGJlZ2luVmFsdWUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2JlZ2luVmFsdWU7XG4gIH1cblxuICBzZXQgZW5kVmFsdWUoZW5kOiBEYXRlKSB7XG4gICAgdGhpcy5fZW5kVmFsdWUgPSBlbmQ7XG4gIH1cblxuICBnZXQgZW5kVmFsdWUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZFZhbHVlO1xuICB9XG5cbiAgZ2V0IHNsaWRlckludGVydmFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEZpbHRlci5zbGlkZXJJbnRlcnZhbCA9PT0gdW5kZWZpbmVkXG4gICAgICA/IDIwMDBcbiAgICAgIDogdGhpcy5jdXJyZW50RmlsdGVyLnNsaWRlckludGVydmFsO1xuICB9XG5cbiAgZ2V0IG1heERhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlLm9wdGlvbnMubWF4RGF0ZSA/IHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm1heERhdGUgOiB0aGlzLl9kZWZhdWx0TWF4O1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlGb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RmlsdGVyLmRpc3BsYXlGb3JtYXQgPyB0aGlzLmN1cnJlbnRGaWx0ZXIuZGlzcGxheUZvcm1hdCA6IHRoaXMuX2RlZmF1bHREaXNwbGF5Rm9ybWF0O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9nY0ZpbHRlclRpbWVTZXJ2aWNlOiBPR0NGaWx0ZXJUaW1lU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpe1xuICAgIGlmICh0aGlzLmN1cnJlbnRGaWx0ZXIuc2xpZGVyT3B0aW9ucykge1xuICAgICAgdGhpcy5jdXJyZW50RmlsdGVyLnNsaWRlck9wdGlvbnMuZW5hYmxlZCA9IHRoaXMuY3VycmVudEZpbHRlci5zbGlkZXJPcHRpb25zLmVuYWJsZWQgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgIHRoaXMuY3VycmVudEZpbHRlci5zbGlkZXJPcHRpb25zLmVuYWJsZWQgOiB0aGlzLl9kZWZhdWx0U2xpZGVyTW9kZUVuYWJsZWQ7XG4gICAgfVxuICAgIHRoaXMuYmVnaW5WYWx1ZSA9IHRoaXMucGFyc2VGaWx0ZXIodGhpcy5oYW5kbGVNaW4oKSk7XG4gICAgdGhpcy5lbmRWYWx1ZSA9IHRoaXMucGFyc2VGaWx0ZXIodGhpcy5oYW5kbGVNYXgoKSk7XG5cbiAgICB0aGlzLm9ubHlZZWFyQmVnaW4gPSB0aGlzLmJlZ2luVmFsdWUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICB0aGlzLm9ubHlZZWFyRW5kID0gdGhpcy5lbmRWYWx1ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHRoaXMuY2FsZW5kYXJUeXBlWWVhciA9IHRoaXMuaXNDYWxlbmRhclllYXJNb2RlKCk7XG4gICAgdGhpcy5zZXRGaWx0ZXJTdGF0ZURpc2FibGUoKTtcbiAgICB0aGlzLnVwZGF0ZUhvdXJzTWludXRlc0FycmF5KCk7XG4gICAgLy8gdXBkYXRlIHZhbHVlIGZvciBub3cgdmFsdWVcbiAgICB0aGlzLnVwZGF0ZVZhbHVlcygpO1xuICB9XG5cbiAgcGFyc2VGaWx0ZXIoZmlsdGVyKTogRGF0ZSB7XG4gICAgaWYgKCFmaWx0ZXIpe1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XG4gICAgfSBlbHNlIGlmICggaXNOYU4oIG5ldyBEYXRlKGZpbHRlcikuZ2V0VGltZSgpICkgKcKge1xuICAgICAgaWYgKGZpbHRlci5zZWFyY2goJ25vdycpID49IDAgKcKge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IGZpbHRlci5tYXRjaCgveWVhcnN8bW9udGhzfHdlZWtzfGRheXN8aG91cnN8c2Vjb25kcy8pO1xuICAgICAgICBpZiAoZmlsdGVyLm1hdGNoKC9cXCsvKSkge1xuICAgICAgICAgIGNvbnN0IGludGVydmFsSW50ID0gcGFyc2VJbnQoXG4gICAgICAgICAgICBmaWx0ZXIuc3Vic3RyaW5nKGZpbHRlci5zZWFyY2goJysnKSArIDEsIGludGVydmFsLmluZGV4KSxcbiAgICAgICAgICAgIDEwXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gbW9tZW50KCkuYWRkKGludGVydmFsSW50LCBpbnRlcnZhbFswXSkudG9EYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlci5tYXRjaCgvXFwtLykpIHtcbiAgICAgICAgICBjb25zdCBpbnRlcnZhbEludCA9IHBhcnNlSW50KFxuICAgICAgICAgICAgZmlsdGVyLnN1YnN0cmluZyhmaWx0ZXIuc2VhcmNoKCctJykgKyAxLCBpbnRlcnZhbC5pbmRleCksXG4gICAgICAgICAgICAxMFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIG1vbWVudCgpLnN1YnRyYWN0KGludGVydmFsSW50LCBpbnRlcnZhbFswXSkudG9EYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLnNlYXJjaCgndG9kYXknKSA+PSAwKXtcbiAgICAgICAgY29uc3QgX25vdyA9IG1vbWVudCgpLmVuZE9mKCdkYXknKS50b0RhdGUoKTtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBmaWx0ZXIubWF0Y2goL3llYXJzfG1vbnRoc3x3ZWVrc3xkYXlzfGhvdXJzfHNlY29uZHMvKTtcbiAgICAgICAgaWYgKCBmaWx0ZXIubWF0Y2goL1xcKy8pICkge1xuICAgICAgICAgIGNvbnN0IGludGVydmFsSW50ID0gcGFyc2VJbnQoIGZpbHRlci5zdWJzdHJpbmcoZmlsdGVyLnNlYXJjaCgnKycpICsgMSwgaW50ZXJ2YWwuaW5kZXgpLCAxMCApO1xuICAgICAgICAgIHJldHVybiBtb21lbnQoX25vdykuYWRkKGludGVydmFsSW50LCBpbnRlcnZhbFswXSkudG9EYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBmaWx0ZXIubWF0Y2goL1xcLS8pICkge1xuICAgICAgICAgIGNvbnN0IGludGVydmFsSW50ID0gcGFyc2VJbnQoZmlsdGVyLnN1YnN0cmluZyhmaWx0ZXIuc2VhcmNoKCctJykgKyAxLCBpbnRlcnZhbC5pbmRleCksIDEwKTtcbiAgICAgICAgICByZXR1cm4gbW9tZW50KF9ub3cpLnN1YnRyYWN0KGludGVydmFsSW50LCBpbnRlcnZhbFswXSkudG9EYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9ub3c7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudEZpbHRlci5jYWxlbmRhck1vZGVZZWFyKSB7XG4gICAgICBjb25zdCBkYXRlID0gdGhpcy5nZXREYXRlRnJvbVN0cmluZ1dpdGhvdXRUaW1lKGZpbHRlcik7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbHRlciA/IG5ldyBEYXRlKGZpbHRlcikgOiBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVRlbXBvcmFsUHJvcGVydHkodmFsdWUsIHBvc2l0aW9uPywgcmVmcmVzaEZpbHRlciA9IHRydWUpIHtcbiAgICBsZXQgdmFsdWVUbXAgPSB0aGlzLmdldERhdGVUaW1lKHZhbHVlLCBwb3NpdGlvbik7XG4gICAgaWYgKHRoaXMuaXNDYWxlbmRhclllYXJNb2RlKCkpIHtcbiAgICAgIGxldCBkYXRlU3RyaW5nRnJvbVllYXJOb3RpbWU7XG4gICAgICBpZiAocG9zaXRpb24gPT09IDEpIHtcbiAgICAgICAgdGhpcy5iZWdpblZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25seVllYXJCZWdpbiA9IHRoaXMuYmVnaW5WYWx1ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBkYXRlU3RyaW5nRnJvbVllYXJOb3RpbWUgPSBgJHt0aGlzLm9ubHlZZWFyQmVnaW59LTAxLTAxYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW5kVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbmx5WWVhckVuZCA9IHRoaXMuZW5kVmFsdWUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZGF0ZVN0cmluZ0Zyb21ZZWFyTm90aW1lID0gYCR7dGhpcy5vbmx5WWVhckVuZH0tMDEtMDFgO1xuICAgICAgfVxuICAgICAgLy8gY2FsbCBzZXJ2aWNlIHdpdGggc3RyaW5nIGRhdGUgd2l0aG91dCB0aW1lXG4gICAgICB0aGlzLmNoYW5nZVByb3BlcnR5Lm5leHQoeyB2YWx1ZTogZGF0ZVN0cmluZ0Zyb21ZZWFyTm90aW1lLCBwb3M6IHBvc2l0aW9uLCByZWZyZXNoRmlsdGVyIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT09IDIgJiYgdGhpcy5jYWxlbmRhclR5cGUoKSA9PT0gJ2RhdGUnICYmICF0aGlzLnNsaWRlck1vZGUpIHtcbiAgICAgIC8qIEFib3ZlIG1vbnRoOiBzZWUgeWVhclNlbGVjdGVkIG9yIG1vbnRoU2VsZWN0ZWQgKi9cbiAgICAgIHZhbHVlVG1wID0gbW9tZW50KHZhbHVlVG1wKS5lbmRPZignZGF5JykudG9EYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSAxKSB7XG4gICAgICB0aGlzLmJlZ2luVmFsdWUgPSB2YWx1ZVRtcDtcbiAgICAgIGlmICh0aGlzLnJlc3RyaWN0ZWRUb1N0ZXAoKSkge1xuICAgICAgICB0aGlzLmNoYW5nZVRlbXBvcmFsUHJvcGVydHkodGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5hZGRTdGVwKHZhbHVlVG1wLCB0aGlzLnN0ZXBNaWxsaXNlY29uZHMpLCAyLCByZWZyZXNoRmlsdGVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRWYWx1ZSA9IHZhbHVlVG1wO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUhvdXJzTWludXRlc0FycmF5KCk7XG4gICAgdGhpcy5jaGFuZ2VQcm9wZXJ0eS5uZXh0KHsgdmFsdWU6IHZhbHVlVG1wLnRvSVNPU3RyaW5nKCksIHBvczogcG9zaXRpb24sIHJlZnJlc2hGaWx0ZXIgfSk7XG4gIH1cblxuICBoYW5kbGVEYXRlKHZhbHVlKTogRGF0ZSB7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YodmFsdWUpID09PSAnc3RyaW5nJyAmJiB0aGlzLmN1cnJlbnRGaWx0ZXIuY2FsZW5kYXJNb2RlWWVhcikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZUZyb21TdHJpbmdXaXRob3V0VGltZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cblxuICBjYWxlbmRhclR5cGUoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZpbHRlci5jYWxlbmRhck1vZGVZZWFyKSB7XG4gICAgICByZXR1cm4gJ3llYXInO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGVwTWlsbGlzZWNvbmRzIDwgODY0MDAwMDApIHtcbiAgICAgIHJldHVybiAnZGF0ZXRpbWUnO1xuICAgIH1cbiAgICByZXR1cm4gJ2RhdGUnO1xuICB9XG5cbiAgaXNDYWxlbmRhclllYXJNb2RlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyVHlwZSgpID09PSAneWVhcicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgeWVhck9ubHlJbnB1dENoYW5nZShjaGFuZ2VFdmVudCwgZGF0ZVBpY2tlcj86IGFueSwgcHJvcGVydHk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCB5ZWFyID0gY2hhbmdlRXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldERhdGVGcm9tU3RyaW5nV2l0aG91dFRpbWUoeWVhcik7XG4gICAgdGhpcy55ZWFyU2VsZWN0ZWQoZGF0ZSwgZGF0ZVBpY2tlciwgcHJvcGVydHkpO1xuICB9XG5cbiAgeWVhclNlbGVjdGVkKHllYXIsIGRhdGVQaWNrZXI/OiBhbnksIHByb3BlcnR5Pzogc3RyaW5nLCByZWZyZXNoRmlsdGVyID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXBJc1llYXJEdXJhdGlvbih0aGlzLnN0ZXApKSB7XG4gICAgICBpZiAoZGF0ZVBpY2tlcikge1xuICAgICAgICBkYXRlUGlja2VyLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcGVydHkgPT09ICdlbmQnKSB7XG4gICAgICAgIC8vIGNoYW5nZSB2YWx1ZSAwMSBqYW4gdG8gMzEgZGVjIHNhbWUgeWVhclxuICAgICAgICB5ZWFyID0gbW9tZW50KHllYXIpLmVuZE9mKCd5ZWFyJykudG9EYXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSAnYmVnaW4nICYmIHRoaXMucmVzdHJpY3RlZFRvU3RlcCgpICYmICF0aGlzLmNhbGVuZGFyVHlwZVllYXIpIHtcbiAgICAgICAgdGhpcy55ZWFyU2VsZWN0ZWQoeWVhciwgdW5kZWZpbmVkLCAnZW5kJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZVRlbXBvcmFsUHJvcGVydHkoeWVhciwgcHJvcGVydHkgPT09ICdiZWdpbicgPyAxIDogMiwgcmVmcmVzaEZpbHRlcik7XG4gICAgfVxuICB9XG5cbiAgbW9udGhTZWxlY3RlZChtb250aCwgZGF0ZVBpY2tlcj86IGFueSwgcHJvcGVydHk/OiBzdHJpbmcsIHJlZnJlc2hGaWx0ZXIgPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzTW9udGhEdXJhdGlvbih0aGlzLnN0ZXApKSB7XG4gICAgICBpZiAoZGF0ZVBpY2tlcikge1xuICAgICAgICBkYXRlUGlja2VyLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcGVydHkgPT09ICdlbmQnKSB7XG4gICAgICAgIG1vbnRoID0gbW9tZW50KG1vbnRoKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09ICdiZWdpbicgJiYgdGhpcy5yZXN0cmljdGVkVG9TdGVwKCkpIHtcbiAgICAgICAgdGhpcy5tb250aFNlbGVjdGVkKG1vbnRoLCB1bmRlZmluZWQsICdlbmQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlVGVtcG9yYWxQcm9wZXJ0eShtb250aCwgcHJvcGVydHkgPT09ICdiZWdpbicgPyAxIDogMiwgcmVmcmVzaEZpbHRlcik7XG4gICAgfVxuICB9XG5cbiAgY2FsZW5kYXJWaWV3KCkge1xuICAgIGNvbnN0IHRlc3QgPSB0aGlzLnN0ZXBNaWxsaXNlY29uZHM7XG4gICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKFxuICAgICAgdGhpcy5wYXJzZUZpbHRlcih0aGlzLmN1cnJlbnRGaWx0ZXIuZW5kKS5nZXRUaW1lKCkgLVxuICAgICAgICB0aGlzLnBhcnNlRmlsdGVyKHRoaXMuY3VycmVudEZpbHRlci5iZWdpbikuZ2V0VGltZSgpXG4gICAgKTtcbiAgICBpZiAodGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5zdGVwSXNZZWFyRHVyYXRpb24odGhpcy5zdGVwKSkge1xuICAgICAgcmV0dXJuICdtdWx0aS15ZWFyJztcbiAgICB9IGVsc2UgaWYgKHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzTW9udGhEdXJhdGlvbih0aGlzLnN0ZXApKSB7XG4gICAgICByZXR1cm4gJ3llYXInO1xuICAgIH0gZWxzZSBpZiAodGVzdCA8IDg2NDAwMDAwICYmIGRpZmYgPCA4NjQwMDAwMCkge1xuICAgICAgcmV0dXJuICdjbG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbW9udGgnO1xuICAgIH1cbiAgfVxuXG4gIGRhdGVGaWx0ZXIodHlwZTogc3RyaW5nLCBkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBkYXRlVmFsdWUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBjb25zdCBkaWZmID0gZGF0ZVZhbHVlLmdldFRpbWUoKSAtIG5ldyBEYXRlKHRoaXMuaGFuZGxlTWluKCkpLmdldFRpbWUoKTtcblxuICAgIGlmICh0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXBJc1llYXJEdXJhdGlvbih0aGlzLnN0ZXApKSB7XG4gICAgICBjb25zdCBtb250aERpZmYgPSBtb21lbnQoZGF0ZVZhbHVlKS5kaWZmKG1vbWVudCh0aGlzLmhhbmRsZU1pbigpKSwgJ3llYXJzJywgdHJ1ZSk7XG4gICAgICBpZiAoIHR5cGUgPT09ICdlbmQnICkge1xuICAgICAgICBjb25zdCBkYXRlVmFsdWVQbHVzMSA9IG1vbWVudChkYXRlVmFsdWUpLmFkZCgxLCAnZCcpO1xuICAgICAgICBjb25zdCBtb250aERpZmZQbHVzMSA9IG1vbWVudChkYXRlVmFsdWVQbHVzMSkuZGlmZihtb21lbnQodGhpcy5oYW5kbGVNaW4oKSksICd5ZWFycycsIHRydWUpO1xuICAgICAgICByZXR1cm4gKG1vbnRoRGlmZlBsdXMxICUgbW9tZW50LmR1cmF0aW9uKHRoaXMuc3RlcCkuYXNZZWFycygpKSA9PT0gMDtcbiAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdiZWdpbicgKSB7XG4gICAgICAgIHJldHVybiAobW9udGhEaWZmICUgbW9tZW50LmR1cmF0aW9uKHRoaXMuc3RlcCkuYXNZZWFycygpKSA9PT0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5zdGVwSXNNb250aER1cmF0aW9uKHRoaXMuc3RlcCkpIHtcbiAgICAgIGNvbnN0IG1vbnRoRGlmZiA9IG1vbWVudChkYXRlVmFsdWUpLmRpZmYobW9tZW50KHRoaXMuaGFuZGxlTWluKCkpLCAnbW9udGhzJywgdHJ1ZSk7XG4gICAgICBpZiAoIHR5cGUgPT09ICdlbmQnICkge1xuICAgICAgICBjb25zdCBkYXRlVmFsdWVQbHVzMSA9IG1vbWVudChkYXRlVmFsdWUpLmFkZCgxLCAnZCcpO1xuICAgICAgICBjb25zdCBtb250aERpZmZQbHVzMSA9IG1vbWVudChkYXRlVmFsdWVQbHVzMSkuZGlmZihtb21lbnQodGhpcy5oYW5kbGVNaW4oKSksICdtb250aHMnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIChtb250aERpZmZQbHVzMSAlIG1vbWVudC5kdXJhdGlvbih0aGlzLnN0ZXApLmFzTW9udGhzKCkpID09PSAwO1xuICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ2JlZ2luJyApIHtcbiAgICAgICAgcmV0dXJuIChtb250aERpZmYgJSBtb21lbnQuZHVyYXRpb24odGhpcy5zdGVwKS5hc01vbnRocygpKSA9PT0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzV2Vla0R1cmF0aW9uKHRoaXMuc3RlcCkpIHtcbiAgICAgIGNvbnN0IHdlZWtEaWZmID0gbW9tZW50KGRhdGVWYWx1ZSkuZGlmZihtb21lbnQodGhpcy5oYW5kbGVNaW4oKSksICd3ZWVrcycsIHRydWUpO1xuICAgICAgaWYgKCB0eXBlID09PSAnZW5kJyApIHtcbiAgICAgICAgY29uc3QgZGF0ZVZhbHVlUGx1czEgPSBtb21lbnQoZGF0ZVZhbHVlKS5hZGQoMSwgJ2QnKTtcbiAgICAgICAgY29uc3Qgd2Vla0RpZmZQbHVzMSA9IG1vbWVudChkYXRlVmFsdWVQbHVzMSkuZGlmZihtb21lbnQodGhpcy5oYW5kbGVNaW4oKSksICd3ZWVrcycsIHRydWUpO1xuICAgICAgICByZXR1cm4gKHdlZWtEaWZmUGx1czEgJSBtb21lbnQuZHVyYXRpb24odGhpcy5zdGVwKS5hc1dlZWtzKCkpID09PSAwO1xuICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ2JlZ2luJyApIHtcbiAgICAgICAgcmV0dXJuICh3ZWVrRGlmZiAlIG1vbWVudC5kdXJhdGlvbih0aGlzLnN0ZXApLmFzV2Vla3MoKSkgPT09IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXBJc0RheUR1cmF0aW9uKHRoaXMuc3RlcCkpIHtcbiAgICAgIGNvbnN0IGRheURpZmYgPSBtb21lbnQoZGF0ZVZhbHVlKS5kaWZmKG1vbWVudCh0aGlzLmhhbmRsZU1pbigpKSwgJ2RheXMnLCB0cnVlKTtcbiAgICAgIGlmICggdHlwZSA9PT0gJ2VuZCcgKSB7XG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZVBsdXMxID0gbW9tZW50KGRhdGVWYWx1ZSkuYWRkKDEsICdkJyk7XG4gICAgICAgIGNvbnN0IGRheURpZmZQbHVzMSA9IG1vbWVudChkYXRlVmFsdWVQbHVzMSkuZGlmZihtb21lbnQodGhpcy5oYW5kbGVNaW4oKSksICdkYXlzJywgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IF9tb2QgPSAoZGF5RGlmZlBsdXMxICUgbW9tZW50LmR1cmF0aW9uKHRoaXMuc3RlcCkuYXNEYXlzKCkpO1xuICAgICAgICByZXR1cm4gKF9tb2QgPCAwLjAwMDAwMDEgJiYgX21vZCA+IC0wLjAwMDAwMDEpIHx8IF9tb2QgPT09IDAgOyAvLyAxIG1pbGxpc2Vjb25kID0gMS4xNTc0MDc0MDc0MDc0MDc2ZS04XG4gICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnYmVnaW4nICkge1xuICAgICAgICBjb25zdCBfbW9kID0gKChkYXlEaWZmICUgbW9tZW50LmR1cmF0aW9uKHRoaXMuc3RlcCkuYXNEYXlzKCkpICsgMSk7XG4gICAgICAgIHJldHVybiAoX21vZCA8IDAuMDAwMDAwMSAmJiBfbW9kID4gLTAuMDAwMDAwMSAmJiBfbW9kICE9PSAwKSB8fCBfbW9kID09PSAxIDsgLy8gMSBtaWxsaXNlY29uZCA9IDEuMTU3NDA3NDA3NDA3NDA3NmUtOFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzSG91ckR1cmF0aW9uKHRoaXMuc3RlcCkgKSB7XG4gICAgICBjb25zdCBob3VyRGlmZiA9IG1vbWVudChkYXRlVmFsdWUpLmRpZmYobW9tZW50KHRoaXMuaGFuZGxlTWluKCkpLCAnaG91cnMnLCB0cnVlKTtcbiAgICAgIHJldHVybiAoaG91ckRpZmYgJSBtb21lbnQuZHVyYXRpb24odGhpcy5zdGVwKS5hc0hvdXJzKCkpID09PSAwO1xuXG4gICAgfSBlbHNlIGlmICggdGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5zdGVwSXNNaW51dGVEdXJhdGlvbih0aGlzLnN0ZXApICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZmYgJSB0aGlzLnN0ZXBNaWxsaXNlY29uZHMgPT09IDA7XG4gIH1cblxuICBnZXREYXRlVGltZShkYXRlLCBwb3MpIHtcbiAgICBjb25zdCB2YWx1ZXRtcCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGxldCB2YWx1ZXRtcDI7XG4gICAgaWYgKCF0aGlzLnNsaWRlck1vZGUpIHtcbiAgICAgIHN3aXRjaCAocG9zKSB7XG4gICAgICAgIGNhc2UgMToge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRGaWx0ZXIuY2FsZW5kYXJNb2RlWWVhcikge1xuICAgICAgICAgICAgdmFsdWV0bXAyID0gdmFsdWV0bXAuc2V0SG91cnMoMCwgMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWV0bXAyID0gdmFsdWV0bXAuc2V0SG91cnMoXG4gICAgICAgICAgICB0aGlzLmJlZ2luSG91ckZvcm1Db250cm9sLnZhbHVlLFxuICAgICAgICAgICAgdGhpcy5iZWdpbk1pbnV0ZUZvcm1Db250cm9sLnZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRGaWx0ZXIuY2FsZW5kYXJNb2RlWWVhcikge1xuICAgICAgICAgICAgdmFsdWV0bXAyID0gdmFsdWV0bXAuc2V0SG91cnMoMCwgMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWV0bXAyID0gdmFsdWV0bXAuc2V0SG91cnMoXG4gICAgICAgICAgICAgIHRoaXMuZW5kSG91ckZvcm1Db250cm9sLnZhbHVlLFxuICAgICAgICAgICAgICB0aGlzLmVuZE1pbnV0ZUZvcm1Db250cm9sLnZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZXRtcDIgPyB2YWx1ZXRtcDIgOiB2YWx1ZXRtcCk7XG4gIH1cblxuICBoYW5kbGVNaW51dGVJbmNyZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzTWludXRlRHVyYXRpb24odGhpcy5zdGVwKSkge1xuICAgICAgaWYgKHRoaXMuc3RlcE1pbGxpc2Vjb25kcyA8IDM2MDAwMDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RlcE1pbGxpc2Vjb25kcyAvIDEwMDAgPT09IDYwID8gMSA6IHRoaXMuc3RlcE1pbGxpc2Vjb25kcyAvIDEwMDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHRoaXMuc3RlcE1pbGxpc2Vjb25kcyAlIDM2MDAwMDApIC8gNjA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXBJc0hvdXJEdXJhdGlvbih0aGlzLnN0ZXApKSB7XG4gICAgICByZXR1cm4gNjA7XG4gICAgfVxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaGFuZGxlSG91ckluY3JlbWVudCgpIHtcbiAgICBpZiAodGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5zdGVwSXNIb3VyRHVyYXRpb24odGhpcy5zdGVwKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RlcE1pbGxpc2Vjb25kcyAvIDEwMDAgLyA2MCAvIDYwO1xuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGZ1bGxCZWdpbkhvdXJzQXJyYXkoY2hlY2tFbmRWYWx1ZT8pIHtcbiAgICBpZiAoY2hlY2tFbmRWYWx1ZSkge1xuICAgICAgdGhpcy5iZWdpbkhvdXJzID0gQXJyYXkuZnJvbShcbiAgICAgICAge1xuICAgICAgICAgIGxlbmd0aDpcbiAgICAgICAgICAgICh0aGlzLmVuZEhvdXJGb3JtQ29udHJvbC52YWx1ZSAtIDApIC8gdGhpcy5oYW5kbGVIb3VySW5jcmVtZW50KCkgKyAxXG4gICAgICAgIH0sXG4gICAgICAgIChfLCBpKSA9PiAwICsgaSAqIHRoaXMuaGFuZGxlSG91ckluY3JlbWVudCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJlZ2luSG91cnMgPSBBcnJheS5mcm9tKFxuICAgICAgICB7IGxlbmd0aDogKDIzIC0gMCkgLyB0aGlzLmhhbmRsZUhvdXJJbmNyZW1lbnQoKSArIDEgfSxcbiAgICAgICAgKF8sIGkpID0+IDAgKyBpICogdGhpcy5oYW5kbGVIb3VySW5jcmVtZW50KClcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuYmVnaW5Ib3VyRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5iZWdpblZhbHVlLmdldEhvdXJzKCkpO1xuICB9XG5cbiAgZnVsbEVuZEhvdXJzQXJyYXkoY2hlY2tFbmRWYWx1ZT8pIHtcbiAgICBpZiAoY2hlY2tFbmRWYWx1ZSkge1xuICAgICAgdGhpcy5lbmRIb3VycyA9IEFycmF5LmZyb20oXG4gICAgICAgIHtcbiAgICAgICAgICBsZW5ndGg6XG4gICAgICAgICAgICAoMjMgLSB0aGlzLmJlZ2luSG91ckZvcm1Db250cm9sLnZhbHVlKSAvXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlSG91ckluY3JlbWVudCgpICtcbiAgICAgICAgICAgIDFcbiAgICAgICAgfSxcbiAgICAgICAgKF8sIGkpID0+XG4gICAgICAgICAgdGhpcy5iZWdpbkhvdXJGb3JtQ29udHJvbC52YWx1ZSArIGkgKiB0aGlzLmhhbmRsZUhvdXJJbmNyZW1lbnQoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRIb3VycyA9IEFycmF5LmZyb20oXG4gICAgICAgIHsgbGVuZ3RoOiAoMjMgLSAwKSAvIHRoaXMuaGFuZGxlSG91ckluY3JlbWVudCgpICsgMSB9LFxuICAgICAgICAoXywgaSkgPT4gMCArIGkgKiB0aGlzLmhhbmRsZUhvdXJJbmNyZW1lbnQoKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5lbmRIb3VyRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5lbmRWYWx1ZS5nZXRIb3VycygpKTtcbiAgfVxuXG4gIGZ1bGxCZWdpbk1pbnV0ZXNBcnJheShjaGVja0VuZFZhbHVlPykge1xuICAgIGlmIChjaGVja0VuZFZhbHVlKSB7XG4gICAgICB0aGlzLmJlZ2luTWludXRlcyA9IEFycmF5LmZyb20oXG4gICAgICAgIHtcbiAgICAgICAgICBsZW5ndGg6XG4gICAgICAgICAgICAodGhpcy5lbmRNaW51dGVGb3JtQ29udHJvbC52YWx1ZSAtIDApIC9cbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNaW51dGVJbmNyZW1lbnQoKSArXG4gICAgICAgICAgICAxXG4gICAgICAgIH0sXG4gICAgICAgIChfLCBpKSA9PiAwICsgaSAqIHRoaXMuaGFuZGxlTWludXRlSW5jcmVtZW50KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmVnaW5NaW51dGVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgeyBsZW5ndGg6ICg1OSAtIDApIC8gdGhpcy5oYW5kbGVNaW51dGVJbmNyZW1lbnQoKSArIDEgfSxcbiAgICAgICAgKF8sIGkpID0+IDAgKyBpICogdGhpcy5oYW5kbGVNaW51dGVJbmNyZW1lbnQoKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5iZWdpbk1pbnV0ZUZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuYmVnaW5WYWx1ZS5nZXRNaW51dGVzKCkpO1xuICB9XG5cbiAgZnVsbEVuZE1pbnV0ZXNBcnJheShjaGVja0VuZFZhbHVlPykge1xuICAgIGlmIChjaGVja0VuZFZhbHVlKSB7XG4gICAgICB0aGlzLmVuZE1pbnV0ZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICB7XG4gICAgICAgICAgbGVuZ3RoOlxuICAgICAgICAgICAgKDU5IC0gdGhpcy5iZWdpbk1pbnV0ZUZvcm1Db250cm9sLnZhbHVlKSAvXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlTWludXRlSW5jcmVtZW50KCkgK1xuICAgICAgICAgICAgMVxuICAgICAgICB9LFxuICAgICAgICAoXywgaSkgPT5cbiAgICAgICAgICB0aGlzLmJlZ2luTWludXRlRm9ybUNvbnRyb2wudmFsdWUgKyBpICogdGhpcy5oYW5kbGVNaW51dGVJbmNyZW1lbnQoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRNaW51dGVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgeyBsZW5ndGg6ICg1OSAtIDApIC8gdGhpcy5oYW5kbGVNaW51dGVJbmNyZW1lbnQoKSArIDEgfSxcbiAgICAgICAgKF8sIGkpID0+IDAgKyBpICogdGhpcy5oYW5kbGVNaW51dGVJbmNyZW1lbnQoKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5lbmRNaW51dGVGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmVuZFZhbHVlLmdldE1pbnV0ZXMoKSk7XG4gIH1cblxuICB1cGRhdGVIb3Vyc01pbnV0ZXNBcnJheSgpIHtcbiAgICBjb25zdCBiZWdpblRtcCA9IG5ldyBEYXRlKHRoaXMuYmVnaW5WYWx1ZSk7XG4gICAgY29uc3QgZW5kVG1wID0gbmV3IERhdGUodGhpcy5lbmRWYWx1ZSk7XG4gICAgaWYgKGJlZ2luVG1wLnNldEhvdXJzKDAsIDApID09PSBlbmRUbXAuc2V0SG91cnMoMCwgMCkpIHtcbiAgICAgIHRoaXMuZnVsbEJlZ2luSG91cnNBcnJheSh0cnVlKTtcbiAgICAgIHRoaXMuZnVsbEVuZEhvdXJzQXJyYXkodHJ1ZSk7XG4gICAgICBpZiAodGhpcy5iZWdpblZhbHVlLmdldEhvdXJzKCkgPT09IHRoaXMuZW5kVmFsdWUuZ2V0SG91cnMoKSkge1xuICAgICAgICB0aGlzLmZ1bGxCZWdpbk1pbnV0ZXNBcnJheSh0cnVlKTtcbiAgICAgICAgdGhpcy5mdWxsRW5kTWludXRlc0FycmF5KHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZ1bGxCZWdpbkhvdXJzQXJyYXkoKTtcbiAgICAgIHRoaXMuZnVsbEVuZEhvdXJzQXJyYXkoKTtcbiAgICAgIHRoaXMuZnVsbEJlZ2luTWludXRlc0FycmF5KCk7XG4gICAgICB0aGlzLmZ1bGxFbmRNaW51dGVzQXJyYXkoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlcygpIHtcbiAgICB0aGlzLmNoYW5nZVRlbXBvcmFsUHJvcGVydHkodGhpcy5iZWdpblZhbHVlLCAxLCBmYWxzZSk7XG4gICAgdGhpcy5jaGFuZ2VUZW1wb3JhbFByb3BlcnR5KHRoaXMuZW5kVmFsdWUsIDIsIHRydWUpO1xuICB9XG5cbiAgcHVibGljIHJlc3RyaWN0ZWRUb1N0ZXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEZpbHRlci5yZXN0cmljdFRvU3RlcFxuICAgICAgPyB0aGlzLmN1cnJlbnRGaWx0ZXIucmVzdHJpY3RUb1N0ZXAgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVNaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEZpbHRlci5iZWdpbiA/IHRoaXMuY3VycmVudEZpbHRlci5iZWdpbiA6XG4gICAgICAgICAgICAgICh0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5taW5EYXRlID8gdGhpcy5kYXRhc291cmNlLm9wdGlvbnMubWluRGF0ZSA6IHRoaXMuX2RlZmF1bHRNaW4pO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZU1heCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RmlsdGVyLmVuZCA/IHRoaXMuY3VycmVudEZpbHRlci5lbmQgOlxuICAgICAgICAgICAgICAodGhpcy5kYXRhc291cmNlLm9wdGlvbnMubWF4RGF0ZSA/IHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm1heERhdGUgOiB0aGlzLl9kZWZhdWx0TWF4KTtcbiAgfVxuXG4gIGNoYW5nZVByb3BlcnR5QnlQYXNzKGV2ZW50KSB7XG4gICAgdGhpcy5jaGFuZ2VQcm9wZXJ0eS5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIG1vZGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RmlsdGVyU3RhdGVEaXNhYmxlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRGaWx0ZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyU3RhdGVEaXNhYmxlID0gIXRoaXMuY3VycmVudEZpbHRlci5hY3RpdmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyU3RhdGVEaXNhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmKHRoaXMuY2FsZW5kYXJUeXBlKCkgPT09ICdkYXRldGltZScpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlclN0YXRlRGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmJlZ2luSG91ckZvcm1Db250cm9sLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5iZWdpbk1pbnV0ZUZvcm1Db250cm9sLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5lbmRIb3VyRm9ybUNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLmVuZE1pbnV0ZUZvcm1Db250cm9sLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmVnaW5Ib3VyRm9ybUNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgIHRoaXMuYmVnaW5NaW51dGVGb3JtQ29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgdGhpcy5lbmRIb3VyRm9ybUNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgIHRoaXMuZW5kTWludXRlRm9ybUNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldERhdGVGcm9tU3RyaW5nV2l0aG91dFRpbWUoc3RyaW5nRGF0ZTogc3RyaW5nKTogRGF0ZSB7XG4gICAgLy8gd2FybmluZyBjcmVhdGUgZGF0ZSB3aXRoIG5vIHRpbWUgbWFrZSBhIGRhdGUgVVRDIHdpdGggVFogYW5kIHRoZSBkYXRlIGNyZWF0ZSBtYXliZSBub3QgdGhlIHNhbWUgeWVhciwgbW9udGggYW5kIGRheVxuICAgIC8vIGV4ZW1wbGU6XG4gICAgLy8gbmV3IERhdGUoJzIwMjItMDEtMDEnKSAtPiBGcmkgRGVjIDMxIDIwMjEgMTk6MDA6MDAgR01ULTA1MDAgKGhldXJlIG5vcm1hbGUgZGUgbOKAmUVzdCBub3JkLWFtw6lyaWNhaW4pXG4gICAgLy8gdG8gY3JlYXRlIHNhbWUgZGF0ZSBhcyBzdHJpbmcsIGFkZCB0aW1lIDAwIGluIHRoZSBjcmVhdGlvblxuICAgIC8vIG5ldyBEYXRlKCcyMDIyLTAxLTAxIDAwOjAwOjAwJykgLT4gU2F0IEphbiAwMSAyMDIyIDAwOjAwOjAwIEdNVC0wNTAwIChoZXVyZSBub3JtYWxlIGRlIGzigJlFc3Qgbm9yZC1hbcOpcmljYWluKVxuICAgIGxldCB5ZWFyO1xuICAgIGxldCBtb250aCA9ICcwMSc7XG4gICAgbGV0IGRheSA9ICcwMSc7XG4gICAgaWYgKHN0cmluZ0RhdGUubGVuZ3RoID09PSAxMCkge1xuICAgICAgIGNvbnN0IGRhdGVJdGVtcyA9IHN0cmluZ0RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgaWYgKGRhdGVJdGVtcy5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGluIGNvbmZpZyBkYXRlIGJlZ2luLWVuZCBmb3Igb2djRmlsdGVyOiBEYXRlIHdpdGhvdXQgdGltZSBmb3JtYXQgbmVlZCB0byBiZSBZWVlZLU1NLUREIG9yIFlZWVknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ZWFyID0gZGF0ZUl0ZW1zWzBdO1xuICAgICAgICAgIG1vbnRoID0gZGF0ZUl0ZW1zWzFdO1xuICAgICAgICAgIGRheSA9IGRhdGVJdGVtc1syXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RyaW5nRGF0ZS5sZW5ndGggPT09IDQpIHtcbiAgICAgIHllYXIgPSBzdHJpbmdEYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoc3RyaW5nRGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gMDA6MDA6MDBgKTtcbiAgfVxuXG4gIHJlc2V0RmlsdGVyKCkge1xuICAgIGxldCBmaWx0ZXJPcmlnaW5Db25maWcgPSB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLmZpbHRlcnMgYXMgT2djRmlsdGVyRHVyaW5nT3B0aW9ucztcblxuICAgIGxldCBtaW5EZWZhdWx0RGF0ZTtcbiAgICBsZXQgbWF4RGVmYXVsdERhdGU7XG4gICAgbGV0IG1pbkRlZmF1bHRJU09TdHJpbmc7XG4gICAgbGV0IG1heERlZmF1bHRJU09TdHJpbmc7XG5cbiAgICBpZiAodGhpcy5jYWxlbmRhclR5cGVZZWFyKSB7XG4gICAgICBpZiAoZmlsdGVyT3JpZ2luQ29uZmlnLmVuZCA9PT0gJ3RvZGF5Jykge1xuICAgICAgICBsZXQgdG9kYXlEYXRlU3RyaW5nTm9UaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUNBJyk7IC8vICcyMDIyLTAyLTEzJ1xuICAgICAgICBtYXhEZWZhdWx0SVNPU3RyaW5nID0gYCR7dG9kYXlEYXRlU3RyaW5nTm9UaW1lLnN1YnN0cmluZygwLDQpfS0wMS0wMWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXhEZWZhdWx0SVNPU3RyaW5nID0gYCR7ZmlsdGVyT3JpZ2luQ29uZmlnLmVuZC5zdWJzdHJpbmcoMCw0KX0tMDEtMDFgO1xuICAgICAgfVxuICAgICAgbWluRGVmYXVsdElTT1N0cmluZyA9IGAke2ZpbHRlck9yaWdpbkNvbmZpZy5iZWdpbi5zdWJzdHJpbmcoMCw0KX0tMDEtMDFgO1xuICAgICAgbWluRGVmYXVsdERhdGUgPSB0aGlzLmdldERhdGVGcm9tU3RyaW5nV2l0aG91dFRpbWUobWluRGVmYXVsdElTT1N0cmluZyk7XG4gICAgICBtYXhEZWZhdWx0RGF0ZSA9IHRoaXMuZ2V0RGF0ZUZyb21TdHJpbmdXaXRob3V0VGltZShtYXhEZWZhdWx0SVNPU3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWluRGVmYXVsdERhdGUgPSB0aGlzLnBhcnNlRmlsdGVyKGZpbHRlck9yaWdpbkNvbmZpZy5iZWdpbik7XG4gICAgICBtYXhEZWZhdWx0RGF0ZSA9IHRoaXMucGFyc2VGaWx0ZXIoZmlsdGVyT3JpZ2luQ29uZmlnLmVuZCk7XG4gICAgICBtaW5EZWZhdWx0SVNPU3RyaW5nID0gbWluRGVmYXVsdERhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgIG1heERlZmF1bHRJU09TdHJpbmcgPSBtYXhEZWZhdWx0RGF0ZS50b0lTT1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICgodGhpcy5jdXJyZW50RmlsdGVyLmJlZ2luICE9PSBtaW5EZWZhdWx0SVNPU3RyaW5nICkgfHxcbiAgICAodGhpcy5jdXJyZW50RmlsdGVyLmVuZCAhPT0gbWF4RGVmYXVsdElTT1N0cmluZykpIHtcbiAgICAgIHRoaXMuYmVnaW5WYWx1ZSA9IG1pbkRlZmF1bHREYXRlO1xuICAgICAgdGhpcy5lbmRWYWx1ZSA9IG1heERlZmF1bHREYXRlO1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVGaWx0ZXJTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50RmlsdGVyLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jdXJyZW50RmlsdGVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRGaWx0ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRGaWx0ZXJTdGF0ZURpc2FibGUoKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlcygpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZGF0ZXRpbWUtY29udGFpbmVyXCI+XG4gIDxtYXQtc2xpZGUtdG9nZ2xlIFxuICAgICpuZ0lmPVwidGhpcy5jdXJyZW50RmlsdGVyLnNsaWRlck9wdGlvbnM/LmVuYWJsZWRcIlxuICAgIFsobmdNb2RlbCldPVwic2xpZGVyTW9kZVwiXG4gICAgKGNoYW5nZSk9XCJtb2RlQ2hhbmdlKCRldmVudClcIj5cbiAgICB7eydpZ28uZ2VvLmZpbHRlci5zbGlkZXJNb2RlVGl0bGUnIHwgdHJhbnNsYXRlfX1cbiAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuXG4gIDxkaXYgY2xhc3M9XCJzbGlkZXItY29udGFpbmVyXCIgKm5nSWY9XCJzbGlkZXJNb2RlXCI+XG4gICAgPGlnby1vZ2MtZmlsdGVyLXRpbWUtc2xpZGVyXG4gICAgICBbYmVnaW5dPVwiYmVnaW5WYWx1ZVwiXG4gICAgICBbbWF4XT1cInRoaXMucmVzdHJpY3RlZFRvU3RlcCgpID8gdGhpcy5tYXhEYXRlIDogdGhpcy5lbmRWYWx1ZVwiXG4gICAgICBbY3VycmVudEZpbHRlcl09XCJjdXJyZW50RmlsdGVyXCIgXG4gICAgICBbZGF0YXNvdXJjZV09XCJkYXRhc291cmNlXCJcbiAgICAgIChjaGFuZ2VQcm9wZXJ0eSk9XCJjaGFuZ2VQcm9wZXJ0eUJ5UGFzcygkZXZlbnQpXCJcbiAgICA+XG4gICAgPC9pZ28tb2djLWZpbHRlci10aW1lLXNsaWRlcj5cbiAgICBcbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cIiFzbGlkZXJNb2RlXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwieWVhci1pbnB1dC1jb250YWluZXJcIiAqbmdJZj1cImNhbGVuZGFyVHlwZVllYXJcIj5cbiAgICAgIDwhLS0gdG8gZW11bGF0ZSBhIHllYXItcGlja2VyLCAyIGlucHV0OiBmaXJzdCBpbnB1dCB0byBzaG93IHVzZXIganVzdCB5ZWFyIGFuZCBzZWNvbmQgaW5wdXQgaGlkZW4gYW5kIGJpbmQgXG4gICAgICAgIHdpdGggdGhlIGRhdGVwaWNrZXIgIC0tPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkICBjbGFzcz1cInllYXItaW5wdXRcIj5cbiAgICAgICAgPG1hdC1sYWJlbD57eydpZ28uZ2VvLnRpbWVGaWx0ZXIuc3RhcnRZZWFyJ3wgdHJhbnNsYXRlfX08L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICBjbGFzcz1cInllYXItaW5wdXQtb25seS15ZWFyXCJcbiAgICAgICAgICB2YWx1ZT1cInt7b25seVllYXJCZWdpbn19XCJcbiAgICAgICAgICAoY2hhbmdlKT0gXCJ5ZWFyT25seUlucHV0Q2hhbmdlKCRldmVudCwgYmVnaW5EYXRlcGlja2VyLCAnYmVnaW4nKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT0gXCJmaWx0ZXJTdGF0ZURpc2FibGVcIlxuICAgICAgICAgID5cbiAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJiZWdpbkRhdGVwaWNrZXJcIiBbZGlzYWJsZWRdPVwiZmlsdGVyU3RhdGVEaXNhYmxlXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIFxuICAgICAgICA8bWF0LWRhdGVwaWNrZXJcbiAgICAgICAgICBwYW5lbENsYXNzPVwiZGF0ZXBpY2tlci15ZWFyXCJcbiAgICAgICAgICAjYmVnaW5EYXRlcGlja2VyXG4gICAgICAgICAgW3N0YXJ0Vmlld109XCJjYWxlbmRhclZpZXcoKVwiXG4gICAgICAgICAgW3N0YXJ0QXRdPVwiYmVnaW5WYWx1ZVwiXG4gICAgICAgICAgKHllYXJTZWxlY3RlZCk9XCJ5ZWFyU2VsZWN0ZWQoJGV2ZW50LCBiZWdpbkRhdGVwaWNrZXIsICdiZWdpbicpXCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvbWF0LWRhdGVwaWNrZXI+XG5cbiAgICAgICAgPGlucHV0ICNiZWdpblllYXJcbiAgICAgICAgICBjbGFzcz0gXCJ5ZWFyLWlucHV0LWhpZGVcIlxuICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgW21hdERhdGVwaWNrZXJdPVwiYmVnaW5EYXRlcGlja2VyXCJcbiAgICAgICAgICBlbmFibGVkPSBmYWxzZVxuICAgICAgICAgIHJlYWRvbmx5PSB0cnVlXG4gICAgICAgICAgW3ZhbHVlXT1cImJlZ2luVmFsdWU/YmVnaW5WYWx1ZTpoYW5kbGVEYXRlKGRhdGFzb3VyY2Uub3B0aW9ucy5taW5EYXRlKVwiXG4gICAgICAgICAgW21pbl09XCJoYW5kbGVEYXRlKGRhdGFzb3VyY2Uub3B0aW9ucy5taW5EYXRlKVwiXG4gICAgICAgICAgW21heF09XCIoZW5kVmFsdWUgJiYgKCFyZXN0cmljdGVkVG9TdGVwKCkpKT9lbmRWYWx1ZTpoYW5kbGVEYXRlKGRhdGFzb3VyY2Uub3B0aW9ucy5tYXhEYXRlKVwiXG4gICAgICAgICAgPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkICBjbGFzcz1cInllYXItaW5wdXRcIj5cbiAgICAgICAgPG1hdC1sYWJlbD57eydpZ28uZ2VvLnRpbWVGaWx0ZXIuZW5kWWVhcid8IHRyYW5zbGF0ZX19PC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgY2xhc3M9XCJ5ZWFyLWlucHV0LW9ubHkteWVhclwiXG4gICAgICAgICAgdmFsdWU9XCJ7e29ubHlZZWFyRW5kfX1cIlxuICAgICAgICAgIChjaGFuZ2UpPSBcInllYXJPbmx5SW5wdXRDaGFuZ2UoJGV2ZW50LCBlbmREYXRlcGlja2VyLCAnZW5kJylcIlxuICAgICAgICAgIFtkaXNhYmxlZF0gPSBcImZpbHRlclN0YXRlRGlzYWJsZVwiPlxuICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImVuZERhdGVwaWNrZXJcIiBbZGlzYWJsZWRdPVwiZmlsdGVyU3RhdGVEaXNhYmxlXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICAgIDxtYXQtZGF0ZXBpY2tlclxuICAgICAgICAgIHBhbmVsQ2xhc3M9XCJkYXRlcGlja2VyLXllYXJcIlxuICAgICAgICAgICNlbmREYXRlcGlja2VyXG4gICAgICAgICAgW3N0YXJ0Vmlld109XCJjYWxlbmRhclZpZXcoKVwiXG4gICAgICAgICAgW3N0YXJ0QXRdPVwiZW5kVmFsdWVcIlxuICAgICAgICAgICh5ZWFyU2VsZWN0ZWQpPVwieWVhclNlbGVjdGVkKCRldmVudCwgZW5kRGF0ZXBpY2tlciwgJ2VuZCcpXCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvbWF0LWRhdGVwaWNrZXI+XG5cbiAgICAgICAgPGlucHV0ICNlbmRZZWFyXG4gICAgICAgICAgY2xhc3M9IFwieWVhci1pbnB1dC1oaWRlXCJcbiAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgIFttYXREYXRlcGlja2VyXT1cImVuZERhdGVwaWNrZXJcIlxuICAgICAgICAgIGVuYWJsZWQ9IGZhbHNlXG4gICAgICAgICAgcmVhZG9ubHk9IHRydWVcbiAgICAgICAgICBbdmFsdWVdPVwiZW5kVmFsdWU/ZW5kVmFsdWU6aGFuZGxlRGF0ZShkYXRhc291cmNlLm9wdGlvbnMubWF4RGF0ZSlcIlxuICAgICAgICAgIFttaW5dPVwiYmVnaW5WYWx1ZT9iZWdpblZhbHVlOmhhbmRsZURhdGUoZGF0YXNvdXJjZS5vcHRpb25zLm1pbkRhdGUpXCJcbiAgICAgICAgICBbbWF4XT1cImhhbmRsZURhdGUoZGF0YXNvdXJjZS5vcHRpb25zLm1heERhdGUpXCJcbiAgICAgICAgICA+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlc2V0LWJ1dHRvblwiIFxuICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG4gICAgICAgIChjbGljayk9XCJyZXNldEZpbHRlcigpXCIgXG4gICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmZpbHRlci5yZXNldEZpbHRlcnMnIHwgdHJhbnNsYXRlXCIgXG4gICAgICAgIFtkaXNhYmxlZF09IFwiZmlsdGVyU3RhdGVEaXNhYmxlXCI+XG4gICAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwie3tyZXNldEljb259fVwiPjwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIFxuICAgICAgICBjbGFzcz0ndG9nZ2xlLWZpbHRlci1zdGF0ZScgXG4gICAgICAgIChjaGFuZ2UpPVwidG9nZ2xlRmlsdGVyU3RhdGUoKVwiIFxuICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5maWx0ZXIudG9nZ2xlRmlsdGVyU3RhdGUnIHwgdHJhbnNsYXRlXCIgXG4gICAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiIFxuICAgICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgW2NoZWNrZWRdPVwiIWZpbHRlclN0YXRlRGlzYWJsZVwiPlxuICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXRpbWUtaW5wdXQtY29udGFpbmVyXCIgKm5nSWY9XCJjYWxlbmRhclR5cGUoKSE9PSd5ZWFyJ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGV0aW1lLWlucHV0XCI+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImRhdGUtaW5wdXRcIj5cbiAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cImJlZ2luRGF0ZXBpY2tlclwiIFtkaXNhYmxlZF09IFwiZmlsdGVyU3RhdGVEaXNhYmxlXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICAgICAgPGlucHV0ICNiZWdpblxuICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgIFttYXREYXRlcGlja2VyXT1cImJlZ2luRGF0ZXBpY2tlclwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ2lnby5nZW8udGltZUZpbHRlci5zdGFydERhdGUnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cIiFjdXJyZW50RmlsdGVyLmFjdGl2ZVwiXG4gICAgICAgICAgICAoZGF0ZUNoYW5nZSk9XCJjaGFuZ2VUZW1wb3JhbFByb3BlcnR5KGJlZ2luLnZhbHVlLCAxKVwiXG4gICAgICAgICAgICBbbWF0RGF0ZXBpY2tlckZpbHRlcl09XCJkYXRlRmlsdGVyLmJpbmQodGhpcywgJ2JlZ2luJylcIlxuICAgICAgICAgICAgW3ZhbHVlXT1cImJlZ2luVmFsdWU/YmVnaW5WYWx1ZTpoYW5kbGVEYXRlKGRhdGFzb3VyY2Uub3B0aW9ucy5taW5EYXRlKVwiXG4gICAgICAgICAgICBbbWluXT1cImhhbmRsZURhdGUoZGF0YXNvdXJjZS5vcHRpb25zLm1pbkRhdGUpXCJcbiAgICAgICAgICAgIFttYXhdPVwiKGVuZFZhbHVlICYmICghcmVzdHJpY3RlZFRvU3RlcCgpKSk/ZW5kVmFsdWU6aGFuZGxlRGF0ZShkYXRhc291cmNlLm9wdGlvbnMubWF4RGF0ZSlcIiBcbiAgICAgICAgICAgIFtkaXNhYmxlZF09IFwiZmlsdGVyU3RhdGVEaXNhYmxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxsZXJcIj48L3NwYW4+XG4gICAgICAgICAgPG1hdC1kYXRlcGlja2VyXG4gICAgICAgICAgICAjYmVnaW5EYXRlcGlja2VyXG4gICAgICAgICAgICBbc3RhcnRWaWV3XT1cImNhbGVuZGFyVmlldygpXCJcbiAgICAgICAgICAgIFtzdGFydEF0XT1cImJlZ2luVmFsdWVcIlxuICAgICAgICAgICAgKHllYXJTZWxlY3RlZCk9XCJ5ZWFyU2VsZWN0ZWQoJGV2ZW50LCBiZWdpbkRhdGVwaWNrZXIsICdiZWdpbicpXCJcbiAgICAgICAgICAgIChtb250aFNlbGVjdGVkKT1cIm1vbnRoU2VsZWN0ZWQoJGV2ZW50LCBiZWdpbkRhdGVwaWNrZXIsICdiZWdpbicpXCI+XG4gICAgICAgICAgPC9tYXQtZGF0ZXBpY2tlcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1pbnB1dFwiPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImhvdXItaW5wdXRcIiAqbmdJZj1cImNhbGVuZGFyVHlwZSgpPT09J2RhdGV0aW1lJ1wiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD57eydpZ28uZ2VvLnRpbWVGaWx0ZXIuaG91cicgfCB0cmFuc2xhdGV9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImJlZ2luSG91ckZvcm1Db250cm9sXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiIWN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJjaGFuZ2VUZW1wb3JhbFByb3BlcnR5KGJlZ2luLnZhbHVlLCAxKVwiPlxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaG91ciBvZiBiZWdpbkhvdXJzXCIgW3ZhbHVlXT1cImhvdXJcIj57e2hvdXJ9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1pbnV0ZS1pbnB1dFwiICpuZ0lmPVwiY2FsZW5kYXJUeXBlKCk9PT0nZGF0ZXRpbWUnXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7J2lnby5nZW8udGltZUZpbHRlci5taW51dGUnIHwgdHJhbnNsYXRlfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtc2VsZWN0XG4gICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJiZWdpbk1pbnV0ZUZvcm1Db250cm9sXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiIWN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJjaGFuZ2VUZW1wb3JhbFByb3BlcnR5KGJlZ2luLnZhbHVlLCAxKVwiPlxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbWludXRlIG9mIGJlZ2luTWludXRlc1wiIFt2YWx1ZV09XCJtaW51dGVcIj57e21pbnV0ZX19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRldGltZS1pbnB1dFwiICpuZ0lmPVwiIXJlc3RyaWN0ZWRUb1N0ZXAoKVwiPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJkYXRlLWlucHV0XCI+XG4gICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJlbmREYXRlcGlja2VyXCIgW2Rpc2FibGVkXT0gXCJmaWx0ZXJTdGF0ZURpc2FibGVcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgICAgICAgIDxpbnB1dCAjZW5kXG4gICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgIFttYXREYXRlcGlja2VyXT1cImVuZERhdGVwaWNrZXJcIlxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ2lnby5nZW8udGltZUZpbHRlci5lbmREYXRlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cIiFjdXJyZW50RmlsdGVyLmFjdGl2ZVwiXG4gICAgICAgICAgICAgIChkYXRlQ2hhbmdlKT1cImNoYW5nZVRlbXBvcmFsUHJvcGVydHkoZW5kLnZhbHVlLCAyKVwiXG4gICAgICAgICAgICAgIFttYXREYXRlcGlja2VyRmlsdGVyXT1cImRhdGVGaWx0ZXIuYmluZCh0aGlzLCAnZW5kJylcIlxuICAgICAgICAgICAgICBbdmFsdWVdPVwiZW5kVmFsdWU/ZW5kVmFsdWU6aGFuZGxlRGF0ZShkYXRhc291cmNlLm9wdGlvbnMubWF4RGF0ZSlcIlxuICAgICAgICAgICAgICBbbWluXT1cImJlZ2luVmFsdWU/YmVnaW5WYWx1ZTpoYW5kbGVEYXRlKGRhdGFzb3VyY2Uub3B0aW9ucy5taW5EYXRlKVwiXG4gICAgICAgICAgICAgIFttYXhdPVwiaGFuZGxlRGF0ZShkYXRhc291cmNlLm9wdGlvbnMubWF4RGF0ZSlcIiBcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT0gXCJmaWx0ZXJTdGF0ZURpc2FibGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsbGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNlbmREYXRlcGlja2VyXG4gICAgICAgICAgICAgIFtzdGFydFZpZXddPVwiY2FsZW5kYXJWaWV3KClcIlxuICAgICAgICAgICAgICBbc3RhcnRBdF09XCJlbmRWYWx1ZVwiXG4gICAgICAgICAgICAgICh5ZWFyU2VsZWN0ZWQpPVwieWVhclNlbGVjdGVkKCRldmVudCwgZW5kRGF0ZXBpY2tlciwgJ2VuZCcpXCJcbiAgICAgICAgICAgICAgKG1vbnRoU2VsZWN0ZWQpPVwibW9udGhTZWxlY3RlZCgkZXZlbnQsIGVuZERhdGVwaWNrZXIsICdlbmQnKVwiPlxuICAgICAgICAgIDwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtaW5wdXRcIj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJob3VyLWlucHV0XCIgKm5nSWY9XCJjYWxlbmRhclR5cGUoKT09PSdkYXRldGltZSdcIiA+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7J2lnby5nZW8udGltZUZpbHRlci5ob3VyJyB8IHRyYW5zbGF0ZX19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LXNlbGVjdFxuICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZW5kSG91ckZvcm1Db250cm9sXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiIWN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJjaGFuZ2VUZW1wb3JhbFByb3BlcnR5KGVuZC52YWx1ZSwgMilcIj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGhvdXIgb2YgZW5kSG91cnNcIiBbdmFsdWVdPVwiaG91clwiPnt7aG91cn19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWludXRlLWlucHV0XCIgKm5nSWY9XCJjYWxlbmRhclR5cGUoKT09PSdkYXRldGltZSdcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+e3snaWdvLmdlby50aW1lRmlsdGVyLm1pbnV0ZScgfCB0cmFuc2xhdGV9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImVuZE1pbnV0ZUZvcm1Db250cm9sXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiIWN1cnJlbnRGaWx0ZXIuYWN0aXZlXCJcbiAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJjaGFuZ2VUZW1wb3JhbFByb3BlcnR5KGVuZC52YWx1ZSwgMilcIj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1pbnV0ZSBvZiBlbmRNaW51dGVzXCIgW3ZhbHVlXT1cIm1pbnV0ZVwiPnt7bWludXRlfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlc2V0LWJ1dHRvblwiIFxuICAgICAgICBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgKGNsaWNrKT1cInJlc2V0RmlsdGVyKClcIiBcbiAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uZmlsdGVyLnJlc2V0RmlsdGVycycgfCB0cmFuc2xhdGVcIiBcbiAgICAgICAgW2Rpc2FibGVkXT0gXCJmaWx0ZXJTdGF0ZURpc2FibGVcIj5cbiAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJ7e3Jlc2V0SWNvbn19XCI+PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPG1hdC1zbGlkZS10b2dnbGUgXG4gICAgICAgIGNsYXNzPVwidG9nZ2xlLWZpbHRlci1zdGF0ZVwiIFxuICAgICAgICAoY2hhbmdlKT1cInRvZ2dsZUZpbHRlclN0YXRlKClcIiBcbiAgICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCIgXG4gICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5maWx0ZXIudG9nZ2xlRmlsdGVyU3RhdGUnIHwgdHJhbnNsYXRlXCIgXG4gICAgICAgIFtjaGVja2VkXT0gXCIhZmlsdGVyU3RhdGVEaXNhYmxlXCI+XG4gICAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=