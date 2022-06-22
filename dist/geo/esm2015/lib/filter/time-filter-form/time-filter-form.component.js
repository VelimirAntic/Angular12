import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import * as moment from 'moment';
import { TimeFilterType, TimeFilterStyle } from '../shared/time-filter.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@mat-datetimepicker/core";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/slider";
import * as i9 from "@angular/material/slide-toggle";
import * as i10 from "@angular/material/tooltip";
import * as i11 from "@angular/material/button";
import * as i12 from "@angular/material/icon";
import * as i13 from "@ngx-translate/core";
function TimeFilterFormComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelement(2, "mat-datetimepicker-toggle", 4);
    i0.ɵɵelement(3, "mat-datetimepicker", 5, 6);
    i0.ɵɵelementStart(5, "input", 7);
    i0.ɵɵlistener("ngModelChange", function TimeFilterFormComponent_div_0_div_1_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.date = $event; })("dateChange", function TimeFilterFormComponent_div_0_div_1_Template_input_dateChange_5_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.handleDateChange($event); });
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = i0.ɵɵreference(4);
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", _r6);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("type", ctx_r4.type);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(6, 7, "igo.geo.timeFilter.date"));
    i0.ɵɵproperty("matDatetimepicker", _r6)("ngModel", ctx_r4.date)("min", ctx_r4.min)("max", ctx_r4.max);
} }
function TimeFilterFormComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelement(3, "mat-datetimepicker-toggle", 4);
    i0.ɵɵelement(4, "mat-datetimepicker", 5, 9);
    i0.ɵɵelementStart(6, "input", 10);
    i0.ɵɵlistener("ngModelChange", function TimeFilterFormComponent_div_0_div_2_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.startDate = $event; })("input", function TimeFilterFormComponent_div_0_div_2_Template_input_input_6_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.startDate; })("dateChange", function TimeFilterFormComponent_div_0_div_2_Template_input_dateChange_6_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.handleDateChange($event); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵelementStart(9, "mat-form-field");
    i0.ɵɵelement(10, "mat-datetimepicker-toggle", 4);
    i0.ɵɵelement(11, "mat-datetimepicker", 5, 11);
    i0.ɵɵelementStart(13, "input", 7);
    i0.ɵɵlistener("ngModelChange", function TimeFilterFormComponent_div_0_div_2_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.endDate = $event; })("dateChange", function TimeFilterFormComponent_div_0_div_2_Template_input_dateChange_13_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.handleDateChange($event); });
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = i0.ɵɵreference(5);
    const _r11 = i0.ɵɵreference(12);
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("for", _r10);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("type", ctx_r5.type);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(7, 14, "igo.geo.timeFilter.startDate"));
    i0.ɵɵproperty("matDatetimepicker", _r10)("ngModel", ctx_r5.startDate)("min", ctx_r5.min)("max", ctx_r5.getRangeMaxDate());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("for", _r11);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("type", ctx_r5.type);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(14, 16, "igo.geo.timeFilter.endDate"));
    i0.ɵɵproperty("matDatetimepicker", _r11)("ngModel", ctx_r5.endDate)("min", ctx_r5.getRangeMinDate())("max", ctx_r5.max);
} }
function TimeFilterFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TimeFilterFormComponent_div_0_div_1_Template, 7, 9, "div", 2);
    i0.ɵɵtemplate(2, TimeFilterFormComponent_div_0_div_2_Template, 15, 18, "div", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isRange);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isRange);
} }
function TimeFilterFormComponent_div_1_div_1_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r21 = ctx.$implicit;
    i0.ɵɵproperty("value", year_r21);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(year_r21);
} }
function TimeFilterFormComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-select", 12);
    i0.ɵɵlistener("ngModelChange", function TimeFilterFormComponent_div_1_div_1_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.year = $event; })("selectionChange", function TimeFilterFormComponent_div_1_div_1_Template_mat_select_selectionChange_2_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.handleYearChange($event); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, TimeFilterFormComponent_div_1_div_1_mat_option_4_Template, 2, 2, "mat-option", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(3, 3, "igo.geo.timeFilter.date"));
    i0.ɵɵproperty("ngModel", ctx_r18.year);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r18.listYears);
} }
function TimeFilterFormComponent_div_1_div_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const startYear_r27 = ctx.$implicit;
    i0.ɵɵproperty("value", startYear_r27);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(startYear_r27);
} }
function TimeFilterFormComponent_div_1_div_2_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const endYear_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", endYear_r28);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(endYear_r28);
} }
function TimeFilterFormComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-select", 12);
    i0.ɵɵlistener("ngModelChange", function TimeFilterFormComponent_div_1_div_2_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.startYear = $event; })("selectionChange", function TimeFilterFormComponent_div_1_div_2_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.handleYearChange($event); });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵtemplate(5, TimeFilterFormComponent_div_1_div_2_mat_option_5_Template, 2, 2, "mat-option", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 8);
    i0.ɵɵelementStart(7, "mat-form-field");
    i0.ɵɵelementStart(8, "mat-select", 12);
    i0.ɵɵlistener("ngModelChange", function TimeFilterFormComponent_div_1_div_2_Template_mat_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.endYear = $event; })("selectionChange", function TimeFilterFormComponent_div_1_div_2_Template_mat_select_selectionChange_8_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.handleYearChange($event); });
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵtemplate(10, TimeFilterFormComponent_div_1_div_2_mat_option_10_Template, 2, 2, "mat-option", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(4, 6, "igo.geo.timeFilter.startDate"));
    i0.ɵɵproperty("ngModel", ctx_r19.startYear);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r19.startListYears);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(9, 8, "igo.geo.timeFilter.endDate"));
    i0.ɵɵproperty("ngModel", ctx_r19.endYear);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r19.endListYears);
} }
function TimeFilterFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TimeFilterFormComponent_div_1_div_1_Template, 5, 5, "div", 2);
    i0.ɵɵtemplate(2, TimeFilterFormComponent_div_1_div_2_Template, 11, 10, "div", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.isRange);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isRange);
} }
function TimeFilterFormComponent_div_3_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r34.year);
} }
function TimeFilterFormComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 16);
    i0.ɵɵlistener("input", function TimeFilterFormComponent_div_3_Template_mat_slider_input_3_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.handleSliderYearChange($event); })("change", function TimeFilterFormComponent_div_3_Template_mat_slider_change_3_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.handleSliderYearChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, TimeFilterFormComponent_div_3_p_6_Template, 2, 1, "p", 17);
    i0.ɵɵelementStart(7, "div", 18, 19);
    i0.ɵɵelementStart(9, "mat-slide-toggle", 20);
    i0.ɵɵlistener("change", function TimeFilterFormComponent_div_3_Template_mat_slide_toggle_change_9_listener() { i0.ɵɵrestoreView(_r37); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.toggleFilterState(); });
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 21);
    i0.ɵɵlistener("click", function TimeFilterFormComponent_div_3_Template_button_click_11_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.playYear($event); });
    i0.ɵɵelement(12, "mat-icon", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 21);
    i0.ɵɵlistener("click", function TimeFilterFormComponent_div_3_Template_button_click_13_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.resetFilter($event); });
    i0.ɵɵelement(14, "mat-icon", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.startYear);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("step", ctx_r2.step);
    i0.ɵɵproperty("min", ctx_r2.startYear)("max", ctx_r2.endYear)("value", ctx_r2.handleSliderValue())("color", ctx_r2.color)("disabled", !ctx_r2.options.enabled || !ctx_r2.layer.visible);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.endYear);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.options.enabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(10, 17, "igo.geo.filter.toggleFilterState"))("color", ctx_r2.color)("checked", ctx_r2.options.enabled)("disabled", !ctx_r2.layer.visible);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r2.options.enabled || !ctx_r2.layer.visible);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r2.playIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r2.options.enabled || !ctx_r2.layer.visible);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r2.resetIcon);
} }
function TimeFilterFormComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "mat-slider", 24);
    i0.ɵɵlistener("input", function TimeFilterFormComponent_div_4_Template_mat_slider_input_1_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.handleSliderDateChange($event); })("selectionChange", function TimeFilterFormComponent_div_4_Template_mat_slider_selectionChange_1_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.handleSliderDateChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 23);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 25);
    i0.ɵɵlistener("click", function TimeFilterFormComponent_div_4_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.playFilter($event); });
    i0.ɵɵelement(5, "mat-icon", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("step", ctx_r3.step);
    i0.ɵɵproperty("min", ctx_r3.dateToNumber(ctx_r3.min))("max", ctx_r3.dateToNumber(ctx_r3.max))("value", ctx_r3.handleSliderValue());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.handleSliderTooltip());
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r3.playIcon);
} }
export class TimeFilterFormComponent {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.color = 'primary';
        this.listYears = [];
        this.startListYears = [];
        this.endListYears = [];
        this.playIcon = 'play-circle';
        this.resetIcon = 'replay';
        this.change = new EventEmitter();
        this.yearChange = new EventEmitter();
        this.dateAdapter.setLocale('fr');
    }
    set currentValue(value) {
        if (value) {
            if (this.type !== TimeFilterType.YEAR) {
                const valueArray = value.split('/');
                if (valueArray.length > 0) {
                    const startDate = new Date(valueArray[0]);
                    const endDate = new Date(valueArray[1]);
                    if (!isNaN(startDate.valueOf())) {
                        this.startDate = startDate;
                    }
                    if (!isNaN(endDate.valueOf())) {
                        this.endDate = endDate;
                    }
                }
            }
        }
    }
    get type() {
        return this.options.type === undefined
            ? TimeFilterType.DATE
            : this.options.type;
    }
    get isRange() {
        return this.options.range === undefined ||
            this.options.style === TimeFilterStyle.SLIDER
            ? false
            : this.options.range;
    }
    get style() {
        return this.options.style === undefined
            ? TimeFilterStyle.SLIDER
            : this.options.style;
    }
    get step() {
        let step = 10800000;
        if (this.options.step === undefined) {
            switch (this.type) {
                case TimeFilterType.DATE:
                case TimeFilterType.DATETIME:
                    step = 10800000;
                    break;
                case TimeFilterType.TIME:
                    step = 3600000;
                    break;
                case TimeFilterType.YEAR:
                    step = 31536000000;
                    break;
                default:
                    step = 10800000;
            }
        }
        else {
            step = this.getStepDefinition(this.options.step);
        }
        return step;
    }
    get timeInterval() {
        return this.options.timeInterval === undefined
            ? 2000
            : this.options.timeInterval;
    }
    get min() {
        if (this.options.min) {
            const min = new Date(this.options.min);
            return new Date(min.getTime() + min.getTimezoneOffset() * 60000);
        }
        else {
            return undefined;
        }
    }
    get max() {
        if (this.options.max) {
            const max = new Date(this.options.max);
            return new Date(max.getTime() + max.getTimezoneOffset() * 60000);
        }
        else {
            return undefined;
        }
    }
    get is() {
        return this.options.range === undefined ? false : this.options.range;
    }
    ngOnInit() {
        if (this.startDate === undefined) {
            this.startDate = new Date(this.min);
        }
        if (this.endDate === undefined) {
            this.endDate = new Date(this.max);
        }
        if (this.startYear === undefined) {
            this.startYear = new Date(this.startDate).getFullYear();
            this.initStartYear = this.startYear;
        }
        if (this.endYear === undefined) {
            this.endYear = new Date(this.endDate).getFullYear();
            this.initEndYear = this.endYear;
        }
        if (!this.isRange) {
            for (let i = this.startYear; i <= this.endYear + 1; i++) {
                this.listYears.push(i);
            }
        }
        else {
            for (let i = this.startYear; i < this.endYear; i++) {
                this.startListYears.push(i);
            }
            for (let i = this.startYear + 1; i <= this.endYear; i++) {
                this.endListYears.push(i);
            }
        }
        this.options.enabled =
            this.options.enabled === undefined ? true : this.options.enabled;
        this.checkFilterValue();
        if (this.options.enabled) {
            if (!this.isRange && this.style === 'slider' && this.type === 'year') {
                this.yearChange.emit(this.year);
            }
        }
        else {
            this.storeCurrentFilterValue();
            this.yearChange.emit(undefined); // TODO: FIX THIS for ALL OTHER TYPES STYLES OR RANGE.
        }
    }
    storeCurrentFilterValue() {
        // TODO: FIX THIS for ALL OTHER TYPES STYLES OR RANGE.
        if (!this.isRange &&
            this.style === TimeFilterStyle.SLIDER &&
            this.type === TimeFilterType.YEAR) {
            this.options.value = this.year.toString();
        }
    }
    checkFilterValue() {
        const olSource = this.layer.dataSource.ol;
        const timeFromWms = olSource.getParams().TIME;
        if (!this.isRange &&
            this.style === TimeFilterStyle.SLIDER &&
            this.type === TimeFilterType.YEAR) {
            if (timeFromWms) {
                this.year = new Date(timeFromWms.toString()).getFullYear() + 1;
            }
            else if (this.options.value) {
                this.year = new Date(this.options.value.toString()).getFullYear() + 1;
            }
            else {
                this.year = new Date(this.min).getFullYear() + 1;
            }
        }
        else if (this.isRange &&
            this.style === TimeFilterStyle.CALENDAR &&
            this.type === TimeFilterType.YEAR) {
            if (timeFromWms) {
                this.startYear = parseInt(timeFromWms.substr(0, 4), 10);
                this.endYear = parseInt(timeFromWms.substr(5, 4), 10);
                const newStartListYears = [];
                const newEndListYears = [];
                for (let i = this.initStartYear; i < this.endYear; i++) {
                    newStartListYears.push(i);
                }
                for (let i = this.startYear + 1; i <= this.initEndYear; i++) {
                    newEndListYears.push(i);
                }
                this.startListYears = newStartListYears;
                this.endListYears = newEndListYears;
            }
        }
        // TODO: FIX THIS for ALL OTHER TYPES STYLES OR RANGE.
    }
    handleDateChange(event) {
        this.setupDateOutput();
        this.applyTypeChange();
        // Only if is range, use 2 dates to make the range
        if (this.isRange) {
            this.change.emit([this.startDate, this.endDate]);
        }
        else {
            this.change.emit(this.startDate);
        }
    }
    handleYearChange(event) {
        if (this.isRange) {
            this.endListYears = [];
            for (let i = this.startYear + 1; i <= this.initEndYear; i++) {
                this.endListYears.push(i);
            }
            this.startListYears = [];
            for (let i = this.initStartYear + 1; i < this.endYear; i++) {
                this.startListYears.push(i);
            }
            this.yearChange.emit([this.startYear, this.endYear]);
        }
        else {
            this.yearChange.emit(this.year);
        }
    }
    handleListYearChange(event) {
        this.handleYearChange([this.startYear, this.endYear]);
    }
    handleListYearStartChange(event) {
        this.change.emit([this.startDate, this.endDate]);
    }
    dateToNumber(date) {
        let newDate;
        if (date) {
            newDate = new Date(date);
        }
        else {
            newDate = new Date(this.min);
        }
        return newDate.getTime();
    }
    setSliderThumbLabel(label) {
        const thumbLabel = this.findThumbLabel(this.mySlider._elementRef.nativeElement.childNodes);
        if (thumbLabel) {
            thumbLabel.textContent = label;
        }
    }
    findThumbLabel(test) {
        let thumbLabel;
        test.forEach(value => {
            if (value.className === 'mat-slider-thumb-label-text') {
                thumbLabel = value;
            }
            if (value.children.length > 0 && !thumbLabel) {
                thumbLabel = this.findThumbLabel(value.childNodes);
            }
        }, this);
        return thumbLabel;
    }
    toggleFilterState() {
        this.options.enabled = !this.options.enabled;
        if (this.options.enabled) {
            if (!this.isRange &&
                TimeFilterStyle.SLIDER &&
                this.type === TimeFilterType.YEAR) {
                this.yearChange.emit(this.year);
            }
        }
        else {
            this.stopFilter();
            this.storeCurrentFilterValue();
            this.change.emit(undefined); // TODO: FIX THIS for ALL OTHER TYPES STYLES OR RANGE.
        }
    }
    resetFilter(event) {
        this.date = new Date(this.min);
        this.year = this.date.getFullYear();
        if (!this.isRange &&
            TimeFilterStyle.SLIDER &&
            this.type === TimeFilterType.YEAR) {
            this.yearChange.emit(this.year);
        }
        else {
            this.setupDateOutput();
            this.change.emit(undefined); // TODO: FIX THIS for ALL OTHER TYPES STYLES OR RANGE.
        }
    }
    playFilter(event) {
        if (this.interval) {
            this.stopFilter();
        }
        else {
            this.playIcon = 'pause-circle';
            this.interval = setInterval(that => {
                let newMinDateNumber;
                const maxDateNumber = new Date(that.max);
                newMinDateNumber =
                    that.date === undefined ? that.min.getTime() : that.date.getTime();
                newMinDateNumber += that.mySlider.step;
                that.date = new Date(newMinDateNumber);
                if (newMinDateNumber > maxDateNumber.getTime()) {
                    that.stopFilter();
                }
                that.handleDateChange({ value: that.date, date: that.date });
            }, this.timeInterval, this);
        }
    }
    playYear(event) {
        if (this.year + this.mySlider.step >
            this.max.getFullYear() + this.mySlider.step) {
            this.stopFilter();
            this.resetFilter(event);
        }
        if (this.interval) {
            this.stopFilter();
        }
        else {
            this.playIcon = 'pause-circle';
            this.interval = setInterval(() => {
                if ((this.year + this.mySlider.step) > this.max.getFullYear()) {
                    this.stopFilter();
                }
                else {
                    this.year = this.year + this.mySlider.step;
                }
                this.yearChange.emit(this.year);
            }, this.timeInterval, this);
        }
    }
    stopFilter() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = undefined;
        this.playIcon = 'play-circle';
    }
    handleSliderDateChange(event) {
        this.date = new Date(event.value);
        this.setSliderThumbLabel(this.handleSliderTooltip());
        this.handleDateChange(event);
    }
    handleSliderYearChange(event) {
        this.year = event.value;
        this.yearChange.emit(this.year);
    }
    handleSliderValue() {
        if (this.options.current === true || !this.min) {
            const currentDate = new Date();
            this.date = this.getRoundedDate(currentDate);
        }
        if (this.type === TimeFilterType.YEAR) {
            return this.year;
        }
        else {
            return this.date === undefined ? this.min.getTime() : this.date.getTime();
        }
    }
    handleSliderTooltip() {
        let label;
        switch (this.type) {
            case TimeFilterType.DATE:
                label =
                    this.date === undefined
                        ? this.min.toDateString()
                        : this.date.toDateString();
                break;
            case TimeFilterType.TIME:
                label =
                    this.date === undefined
                        ? this.min.toTimeString()
                        : this.date.toTimeString();
                break;
            // datetime
            default:
                label =
                    this.date === undefined
                        ? this.min.toUTCString()
                        : this.date.toUTCString();
                break;
        }
        return label;
    }
    setupDateOutput() {
        if (this.style === TimeFilterStyle.SLIDER) {
            this.startDate = new Date(this.date);
            this.startDate.setSeconds(-(this.step / 1000));
            this.endDate = new Date(this.startDate);
            this.endDate.setSeconds(this.step / 1000);
        }
        else if (!this.isRange && !!this.date) {
            this.endDate = new Date(this.date);
            this.startDate = new Date(this.date);
        }
        else if (this.isRange && (!!this.date || !this.date)) {
            this.startDate =
                this.startDate === undefined ? new Date(this.min) : this.startDate;
            this.endDate =
                this.endDate === undefined ? new Date(this.max) : this.endDate;
        }
        else if (!this.date) {
            this.startDate =
                this.startDate === undefined ? new Date(this.min) : this.startDate;
            this.endDate =
                this.endDate === undefined ? new Date(this.max) : this.endDate;
        }
    }
    applyTypeChange() {
        switch (this.type) {
            case TimeFilterType.DATE:
                if (this.startDate !== undefined || this.endDate !== undefined) {
                    this.startDate.setHours(0);
                    this.startDate.setMinutes(0);
                    this.startDate.setSeconds(0);
                    this.endDate.setHours(23);
                    this.endDate.setMinutes(59);
                    this.endDate.setSeconds(59);
                }
                break;
            case TimeFilterType.TIME:
                if (this.style === TimeFilterStyle.CALENDAR) {
                    if (this.startDate.getDay() !== this.min.getDay()) {
                        const selectedHour = this.startDate.getHours();
                        const selectedMinute = this.startDate.getMinutes();
                        this.startDate = this.min;
                        this.startDate.setHours(selectedHour);
                        this.startDate.setMinutes(selectedMinute);
                    }
                    if (this.endDate.getDay() !== this.min.getDay()) {
                        const selectedHour = this.endDate.getHours();
                        const selectedMinute = this.endDate.getMinutes();
                        this.endDate = this.min;
                        this.endDate.setHours(selectedHour);
                        this.endDate.setMinutes(selectedMinute);
                    }
                }
                if (!this.isRange && this.step > 60 * 60 * 1000) {
                    this.startDate.setMinutes(0);
                    this.startDate.setSeconds(0);
                    this.endDate.setMinutes(59);
                    this.endDate.setSeconds(59);
                }
                break;
            // datetime
            default:
            // do nothing
        }
    }
    getRangeMinDate() {
        return this.startDate === undefined ? this.min : this.startDate;
    }
    getRangeMaxDate() {
        return this.endDate === undefined ? this.max : this.endDate;
    }
    /**
     * Round date at a certain time, 10 minutes by Default
     * @param date - Date to Round
     * @param atMinute - round to closest 'atMinute' minute, rounded 10 by default
     * @return the rounded date
     */
    getRoundedDate(date, atMinute = 10) {
        const coeff = 1000 * 60 * atMinute;
        return new Date(Math.round(date.getTime() / coeff) * coeff);
    }
    /**
     * Get the step (period) definition from the layer dimension tag
     * @param step The step as ISO 8601 example: PT10M for 10 Minutes
     * @return the duration in milliseconds
     */
    getStepDefinition(step) {
        return moment.duration(step).asMilliseconds();
    }
}
TimeFilterFormComponent.ɵfac = function TimeFilterFormComponent_Factory(t) { return new (t || TimeFilterFormComponent)(i0.ɵɵdirectiveInject(i1.DateAdapter)); };
TimeFilterFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimeFilterFormComponent, selectors: [["igo-time-filter-form"]], viewQuery: function TimeFilterFormComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatSlider, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mySlider = _t.first);
    } }, inputs: { layer: "layer", options: "options", currentValue: "currentValue" }, outputs: { change: "change", yearChange: "yearChange" }, decls: 5, vars: 4, consts: [[4, "ngIf"], ["class", "igo-col igo-col-100 igo-col-100-m mat-typography", 4, "ngIf"], ["class", "igo-col igo-col-100 igo-col-100-m", 4, "ngIf"], [1, "igo-col", "igo-col-100", "igo-col-100-m"], ["matSuffix", "", 3, "for"], ["openOnFocus", "true", "timeInterval", "5", 3, "type"], ["datetimePicker", ""], ["matInput", "", "autocomplete", "false", "readonly", "readonly", 3, "placeholder", "matDatetimepicker", "ngModel", "min", "max", "ngModelChange", "dateChange"], [1, "igo-col", "igo-col-100"], ["minDatetimePicker", ""], ["matInput", "", "autocomplete", "false", "readonly", "readonly", 3, "placeholder", "matDatetimepicker", "ngModel", "min", "max", "ngModelChange", "input", "dateChange"], ["maxDatetimePicker", ""], [3, "placeholder", "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "igo-col", "igo-col-100", "igo-col-100-m", "mat-typography"], ["id", "time-slider", "tickInterval", "auto", "thumbLabel", "", 3, "step", "min", "max", "value", "color", "disabled", "input", "change"], ["class", "date-below", 4, "ngIf"], [1, "igo-layer-actions-container"], ["actions", ""], ["tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "checked", "disabled", "change"], ["mat-icon-button", "", "color", "primary", 3, "disabled", "click"], [3, "svgIcon"], [1, "date-below"], ["id", "time-slider", "tickInterval", "auto", "thumbLabel", "", 3, "step", "min", "max", "value", "input", "selectionChange"], ["mat-icon-button", "", "color", "primary", 3, "click"]], template: function TimeFilterFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TimeFilterFormComponent_div_0_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(1, TimeFilterFormComponent_div_1_Template, 3, 2, "div", 0);
        i0.ɵɵelement(2, "br");
        i0.ɵɵtemplate(3, TimeFilterFormComponent_div_3_Template, 15, 19, "div", 1);
        i0.ɵɵtemplate(4, TimeFilterFormComponent_div_4_Template, 6, 6, "div", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.style === "calendar" && ctx.type !== "year");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.style === "calendar" && ctx.type === "year");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isRange && ctx.style === "slider" && ctx.type === "year");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.style === "slider" && ctx.type !== "year");
    } }, directives: [i2.NgIf, i3.MatFormField, i4.MatDatetimepickerToggle, i3.MatSuffix, i4.MatDatetimepicker, i5.MatInput, i4.MatDatetimepickerInput, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.MatSelect, i2.NgForOf, i1.MatOption, i8.MatSlider, i9.MatSlideToggle, i10.MatTooltip, i11.MatButton, i12.MatIcon], pipes: [i13.TranslatePipe], styles: [".igo-layer-filters-container[_ngcontent-%COMP%]{padding-left:5px}mat-slider[_ngcontent-%COMP%]     div.mat-slider-thumb-label{width:32px;height:32px;margin:0 auto}mat-slider[_ngcontent-%COMP%]     span.mat-slider-thumb-label-text{font-size:10px}#time-slider[_ngcontent-%COMP%]{width:70%;margin:0 auto}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){#time-slider[_ngcontent-%COMP%]{width:60%;margin:0 auto}}.date-below[_ngcontent-%COMP%]{margin:0}mat-form-field[_ngcontent-%COMP%]{text-align:center}mat-datetimepicker-toggle[_ngcontent-%COMP%]     .mat-icon{padding-bottom:30px}.igo-layer-actions-container[_ngcontent-%COMP%] > .mat-slide-toggle[_ngcontent-%COMP%]{vertical-align:middle}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeFilterFormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-time-filter-form',
                templateUrl: './time-filter-form.component.html',
                styleUrls: ['./time-filter-form.component.scss']
            }]
    }], function () { return [{ type: i1.DateAdapter }]; }, { layer: [{
            type: Input
        }], options: [{
            type: Input
        }], currentValue: [{
            type: Input
        }], change: [{
            type: Output
        }], yearChange: [{
            type: Output
        }], mySlider: [{
            type: ViewChild,
            args: [MatSlider]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1maWx0ZXItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvdGltZS1maWx0ZXItZm9ybS90aW1lLWZpbHRlci1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci90aW1lLWZpbHRlci1mb3JtL3RpbWUtZmlsdGVyLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBS2pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDZDNFLDhCQUFnRTtJQUM5RCxzQ0FBZ0I7SUFDZCwrQ0FBd0Y7SUFDeEYsMkNBQTZHO0lBQzdHLGdDQU8wQztJQUp4Qyx3TkFBa0IsZ05BQUE7O0lBSHBCLGlCQU8wQztJQUM1QyxpQkFBaUI7SUFFbkIsaUJBQU07Ozs7SUFaeUIsZUFBc0I7SUFBdEIseUJBQXNCO0lBQ2IsZUFBZTtJQUFmLDZDQUFlO0lBRWpELGVBQXVEO0lBQXZELHdGQUF1RDtJQUN2RCx1Q0FBb0Msd0JBQUEsbUJBQUEsbUJBQUE7Ozs7SUFVMUMsMkJBQXFCO0lBQ25CLDhCQUFpQztJQUMvQixzQ0FBZ0I7SUFDZCwrQ0FBMkY7SUFDM0YsMkNBQWdIO0lBQ2hILGlDQVEwQztJQUx4QyxnT0FBdUIsb0xBQUEsbU5BQUE7O0lBSHpCLGlCQVEwQztJQUM1QyxpQkFBaUI7SUFDbkIsaUJBQU07SUFFTiw4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SSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsU0FBUztnQkFDWixJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDbEU7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUztnQkFDWixJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxPQUFPO2dCQUNWLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO29CQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QjtnQkFDRCxNQUFNO1lBQ1IsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FBQyxRQUFRLEVBQUU7b0JBQzNDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO3dCQUNqRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUMvQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDM0M7b0JBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7d0JBQy9DLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQzdDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3FCQUN6QztpQkFDRjtnQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFO29CQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDN0I7Z0JBQ0QsTUFBTTtZQUNSLFdBQVc7WUFDWCxRQUFRO1lBQ1IsYUFBYTtTQUNkO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRyxFQUFFO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs4RkF0Z0JVLHVCQUF1QjswRUFBdkIsdUJBQXVCO3VCQTRDdkIsU0FBUzs7Ozs7UUNsRXRCLHdFQWlETTtRQUVOLHdFQTRCTTtRQUdKLHFCQUFJO1FBQ0osMEVBNkJNO1FBRVIsd0VBZ0JNOztRQWxJQSxzRUFBNEM7UUFtRDVDLGVBQTRDO1FBQTVDLHNFQUE0QztRQWdDMUMsZUFBdUQ7UUFBdkQsb0ZBQXVEO1FBK0J6RCxlQUEyQztRQUEzQyxvRUFBMkM7O3VGRDVGcEMsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDs4REFFVSxLQUFLO2tCQUFiLEtBQUs7WUFFRyxPQUFPO2tCQUFmLEtBQUs7WUFnQkYsWUFBWTtrQkFEZixLQUFLO1lBdUJJLE1BQU07a0JBQWYsTUFBTTtZQUVQLFVBQVU7a0JBRFQsTUFBTTtZQUVlLFFBQVE7a0JBQTdCLFNBQVM7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRTbGlkZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgb2xTb3VyY2VJbWFnZVdNUyBmcm9tICdvbC9zb3VyY2UvSW1hZ2VXTVMnO1xuXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9sYXllcnMvbGF5ZXInO1xuaW1wb3J0IHsgVGltZUZpbHRlck9wdGlvbnMgfSBmcm9tICcuLi9zaGFyZWQvdGltZS1maWx0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRpbWVGaWx0ZXJUeXBlLCBUaW1lRmlsdGVyU3R5bGUgfSBmcm9tICcuLi9zaGFyZWQvdGltZS1maWx0ZXIuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby10aW1lLWZpbHRlci1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUtZmlsdGVyLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aW1lLWZpbHRlci1mb3JtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGltZUZpbHRlckZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYXllcjogTGF5ZXI7XG5cbiAgQElucHV0KCkgb3B0aW9uczogVGltZUZpbHRlck9wdGlvbnM7XG5cbiAgcHVibGljIGNvbG9yID0gJ3ByaW1hcnknO1xuICBwdWJsaWMgZGF0ZTogRGF0ZTtcbiAgcHVibGljIHN0YXJ0RGF0ZTogRGF0ZTtcbiAgcHVibGljIGVuZERhdGU6IERhdGU7XG4gIHB1YmxpYyB5ZWFyOiBhbnk7XG4gIHB1YmxpYyBzdGFydFllYXI6IGFueTtcbiAgcHVibGljIGVuZFllYXI6IGFueTtcbiAgcHVibGljIGluaXRTdGFydFllYXI6IGFueTtcbiAgcHVibGljIGluaXRFbmRZZWFyOiBhbnk7XG4gIHB1YmxpYyBsaXN0WWVhcnM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgcHVibGljIHN0YXJ0TGlzdFllYXJzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHB1YmxpYyBlbmRMaXN0WWVhcnM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICBASW5wdXQoKVxuICBzZXQgY3VycmVudFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IFRpbWVGaWx0ZXJUeXBlLllFQVIpIHtcbiAgICAgICAgY29uc3QgdmFsdWVBcnJheSA9IHZhbHVlLnNwbGl0KCcvJyk7XG4gICAgICAgIGlmICh2YWx1ZUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZSh2YWx1ZUFycmF5WzBdKTtcbiAgICAgICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUodmFsdWVBcnJheVsxXSk7XG4gICAgICAgICAgaWYgKCFpc05hTihzdGFydERhdGUudmFsdWVPZigpKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4oZW5kRGF0ZS52YWx1ZU9mKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmVuZERhdGUgPSBlbmREYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpbnRlcnZhbDogYW55O1xuICBwdWJsaWMgcGxheUljb24gPSAncGxheS1jaXJjbGUnO1xuICBwdWJsaWMgcmVzZXRJY29uID0gJ3JlcGxheSc7XG5cbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGUgfCBbRGF0ZSwgRGF0ZV0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgeWVhckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKE1hdFNsaWRlcikgbXlTbGlkZXI7XG5cbiAgZ2V0IHR5cGUoKTogVGltZUZpbHRlclR5cGUge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgICA/IFRpbWVGaWx0ZXJUeXBlLkRBVEVcbiAgICAgIDogdGhpcy5vcHRpb25zLnR5cGU7XG4gIH1cblxuICBnZXQgaXNSYW5nZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJhbmdlID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9PT0gVGltZUZpbHRlclN0eWxlLlNMSURFUlxuICAgICAgPyBmYWxzZVxuICAgICAgOiB0aGlzLm9wdGlvbnMucmFuZ2U7XG4gIH1cblxuICBnZXQgc3R5bGUoKTogVGltZUZpbHRlclN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0eWxlID09PSB1bmRlZmluZWRcbiAgICAgID8gVGltZUZpbHRlclN0eWxlLlNMSURFUlxuICAgICAgOiB0aGlzLm9wdGlvbnMuc3R5bGU7XG4gIH1cblxuICBnZXQgc3RlcCgpOiBudW1iZXIge1xuICAgIGxldCBzdGVwID0gMTA4MDAwMDA7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgIGNhc2UgVGltZUZpbHRlclR5cGUuREFURTpcbiAgICAgICAgY2FzZSBUaW1lRmlsdGVyVHlwZS5EQVRFVElNRTpcbiAgICAgICAgICBzdGVwID0gMTA4MDAwMDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVGltZUZpbHRlclR5cGUuVElNRTpcbiAgICAgICAgICBzdGVwID0gMzYwMDAwMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUaW1lRmlsdGVyVHlwZS5ZRUFSOlxuICAgICAgICAgIHN0ZXAgPSAzMTUzNjAwMDAwMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdGVwID0gMTA4MDAwMDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ZXAgPSB0aGlzLmdldFN0ZXBEZWZpbml0aW9uKHRoaXMub3B0aW9ucy5zdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxuXG4gIGdldCB0aW1lSW50ZXJ2YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRpbWVJbnRlcnZhbCA9PT0gdW5kZWZpbmVkXG4gICAgICA/IDIwMDBcbiAgICAgIDogdGhpcy5vcHRpb25zLnRpbWVJbnRlcnZhbDtcbiAgfVxuXG4gIGdldCBtaW4oKTogRGF0ZSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5taW4pIHtcbiAgICAgIGNvbnN0IG1pbiA9IG5ldyBEYXRlKHRoaXMub3B0aW9ucy5taW4pO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG1pbi5nZXRUaW1lKCkgKyBtaW4uZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4KCk6IERhdGUge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubWF4KSB7XG4gICAgICBjb25zdCBtYXggPSBuZXcgRGF0ZSh0aGlzLm9wdGlvbnMubWF4KTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShtYXguZ2V0VGltZSgpICsgbWF4LmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmFuZ2UgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogdGhpcy5vcHRpb25zLnJhbmdlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RGF0ZT4pIHtcbiAgICB0aGlzLmRhdGVBZGFwdGVyLnNldExvY2FsZSgnZnInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnN0YXJ0RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRoaXMubWluKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmVuZERhdGUgPSBuZXcgRGF0ZSh0aGlzLm1heCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXJ0WWVhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0YXJ0WWVhciA9IG5ldyBEYXRlKHRoaXMuc3RhcnREYXRlKS5nZXRGdWxsWWVhcigpO1xuICAgICAgdGhpcy5pbml0U3RhcnRZZWFyID0gdGhpcy5zdGFydFllYXI7XG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFllYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5lbmRZZWFyID0gbmV3IERhdGUodGhpcy5lbmREYXRlKS5nZXRGdWxsWWVhcigpO1xuICAgICAgdGhpcy5pbml0RW5kWWVhciA9IHRoaXMuZW5kWWVhcjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc3RhcnRZZWFyOyBpIDw9IHRoaXMuZW5kWWVhciArIDE7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RZZWFycy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFydFllYXI7IGkgPCB0aGlzLmVuZFllYXI7IGkrKykge1xuICAgICAgICB0aGlzLnN0YXJ0TGlzdFllYXJzLnB1c2goaSk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFydFllYXIgKyAxOyBpIDw9IHRoaXMuZW5kWWVhcjsgaSsrKSB7XG4gICAgICAgIHRoaXMuZW5kTGlzdFllYXJzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID1cbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID09PSB1bmRlZmluZWQgPyB0cnVlIDogdGhpcy5vcHRpb25zLmVuYWJsZWQ7XG4gICAgdGhpcy5jaGVja0ZpbHRlclZhbHVlKCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICBpZiAoIXRoaXMuaXNSYW5nZSAmJiB0aGlzLnN0eWxlID09PSAnc2xpZGVyJyAmJiB0aGlzLnR5cGUgPT09ICd5ZWFyJykge1xuICAgICAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh0aGlzLnllYXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlQ3VycmVudEZpbHRlclZhbHVlKCk7XG4gICAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh1bmRlZmluZWQpOyAvLyBUT0RPOiBGSVggVEhJUyBmb3IgQUxMIE9USEVSIFRZUEVTIFNUWUxFUyBPUiBSQU5HRS5cbiAgICB9XG4gIH1cblxuICBzdG9yZUN1cnJlbnRGaWx0ZXJWYWx1ZSgpIHtcbiAgICAvLyBUT0RPOiBGSVggVEhJUyBmb3IgQUxMIE9USEVSIFRZUEVTIFNUWUxFUyBPUiBSQU5HRS5cbiAgICBpZiAoXG4gICAgICAhdGhpcy5pc1JhbmdlICYmXG4gICAgICB0aGlzLnN0eWxlID09PSBUaW1lRmlsdGVyU3R5bGUuU0xJREVSICYmXG4gICAgICB0aGlzLnR5cGUgPT09IFRpbWVGaWx0ZXJUeXBlLllFQVJcbiAgICApIHtcbiAgICAgIHRoaXMub3B0aW9ucy52YWx1ZSA9IHRoaXMueWVhci50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRmlsdGVyVmFsdWUoKSB7XG4gICAgY29uc3Qgb2xTb3VyY2UgPSB0aGlzLmxheWVyLmRhdGFTb3VyY2Uub2wgYXMgb2xTb3VyY2VJbWFnZVdNUztcbiAgICBjb25zdCB0aW1lRnJvbVdtcyA9IG9sU291cmNlLmdldFBhcmFtcygpLlRJTUU7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuaXNSYW5nZSAmJlxuICAgICAgdGhpcy5zdHlsZSA9PT0gVGltZUZpbHRlclN0eWxlLlNMSURFUiAmJlxuICAgICAgdGhpcy50eXBlID09PSBUaW1lRmlsdGVyVHlwZS5ZRUFSXG4gICAgKSB7XG4gICAgICBpZiAodGltZUZyb21XbXMpIHtcbiAgICAgICAgdGhpcy55ZWFyID0gbmV3IERhdGUodGltZUZyb21XbXMudG9TdHJpbmcoKSkuZ2V0RnVsbFllYXIoKSArIDE7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy52YWx1ZSkge1xuICAgICAgICB0aGlzLnllYXIgPSBuZXcgRGF0ZSh0aGlzLm9wdGlvbnMudmFsdWUudG9TdHJpbmcoKSkuZ2V0RnVsbFllYXIoKSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnllYXIgPSBuZXcgRGF0ZSh0aGlzLm1pbikuZ2V0RnVsbFllYXIoKSArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuaXNSYW5nZSAmJlxuICAgICAgdGhpcy5zdHlsZSA9PT0gVGltZUZpbHRlclN0eWxlLkNBTEVOREFSICYmXG4gICAgICB0aGlzLnR5cGUgPT09IFRpbWVGaWx0ZXJUeXBlLllFQVJcbiAgICApIHtcbiAgICAgIGlmICh0aW1lRnJvbVdtcykge1xuICAgICAgICB0aGlzLnN0YXJ0WWVhciA9IHBhcnNlSW50KHRpbWVGcm9tV21zLnN1YnN0cigwLCA0KSwgMTApO1xuICAgICAgICB0aGlzLmVuZFllYXIgPSBwYXJzZUludCh0aW1lRnJvbVdtcy5zdWJzdHIoNSwgNCksIDEwKTtcbiAgICAgICAgY29uc3QgbmV3U3RhcnRMaXN0WWVhcnM6IGFueVtdID0gW107XG4gICAgICAgIGNvbnN0IG5ld0VuZExpc3RZZWFyczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5pdFN0YXJ0WWVhcjsgaSA8IHRoaXMuZW5kWWVhcjsgaSsrKSB7XG4gICAgICAgICAgbmV3U3RhcnRMaXN0WWVhcnMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFydFllYXIgKyAxOyBpIDw9IHRoaXMuaW5pdEVuZFllYXI7IGkrKykge1xuICAgICAgICAgIG5ld0VuZExpc3RZZWFycy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhcnRMaXN0WWVhcnMgPSBuZXdTdGFydExpc3RZZWFycztcbiAgICAgICAgdGhpcy5lbmRMaXN0WWVhcnMgPSBuZXdFbmRMaXN0WWVhcnM7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFRPRE86IEZJWCBUSElTIGZvciBBTEwgT1RIRVIgVFlQRVMgU1RZTEVTIE9SIFJBTkdFLlxuICB9XG5cbiAgaGFuZGxlRGF0ZUNoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5zZXR1cERhdGVPdXRwdXQoKTtcbiAgICB0aGlzLmFwcGx5VHlwZUNoYW5nZSgpO1xuXG4gICAgLy8gT25seSBpZiBpcyByYW5nZSwgdXNlIDIgZGF0ZXMgdG8gbWFrZSB0aGUgcmFuZ2VcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KFt0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5lbmREYXRlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5zdGFydERhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVllYXJDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHRoaXMuZW5kTGlzdFllYXJzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFydFllYXIgKyAxOyBpIDw9IHRoaXMuaW5pdEVuZFllYXI7IGkrKykge1xuICAgICAgICB0aGlzLmVuZExpc3RZZWFycy5wdXNoKGkpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGFydExpc3RZZWFycyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5pdFN0YXJ0WWVhciArIDE7IGkgPCB0aGlzLmVuZFllYXI7IGkrKykge1xuICAgICAgICB0aGlzLnN0YXJ0TGlzdFllYXJzLnB1c2goaSk7XG4gICAgICB9XG4gICAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdChbdGhpcy5zdGFydFllYXIsIHRoaXMuZW5kWWVhcl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh0aGlzLnllYXIpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUxpc3RZZWFyQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZVllYXJDaGFuZ2UoW3RoaXMuc3RhcnRZZWFyLCB0aGlzLmVuZFllYXJdKTtcbiAgfVxuXG4gIGhhbmRsZUxpc3RZZWFyU3RhcnRDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoW3RoaXMuc3RhcnREYXRlLCB0aGlzLmVuZERhdGVdKTtcbiAgfVxuXG4gIGRhdGVUb051bWJlcihkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICBsZXQgbmV3RGF0ZTtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdEYXRlID0gbmV3IERhdGUodGhpcy5taW4pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdEYXRlLmdldFRpbWUoKTtcbiAgfVxuXG4gIHNldFNsaWRlclRodW1iTGFiZWwobGFiZWw6IHN0cmluZykge1xuICAgIGNvbnN0IHRodW1iTGFiZWwgPSB0aGlzLmZpbmRUaHVtYkxhYmVsKFxuICAgICAgdGhpcy5teVNsaWRlci5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICApO1xuICAgIGlmICh0aHVtYkxhYmVsKSB7XG4gICAgICB0aHVtYkxhYmVsLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgfVxuICB9XG5cbiAgZmluZFRodW1iTGFiZWwodGVzdDogYW55W10pOiBhbnkge1xuICAgIGxldCB0aHVtYkxhYmVsO1xuXG4gICAgdGVzdC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZS5jbGFzc05hbWUgPT09ICdtYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQnKSB7XG4gICAgICAgIHRodW1iTGFiZWwgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgIXRodW1iTGFiZWwpIHtcbiAgICAgICAgdGh1bWJMYWJlbCA9IHRoaXMuZmluZFRodW1iTGFiZWwodmFsdWUuY2hpbGROb2Rlcyk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgcmV0dXJuIHRodW1iTGFiZWw7XG4gIH1cblxuICB0b2dnbGVGaWx0ZXJTdGF0ZSgpIHtcbiAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9ICF0aGlzLm9wdGlvbnMuZW5hYmxlZDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5pc1JhbmdlICYmXG4gICAgICAgIFRpbWVGaWx0ZXJTdHlsZS5TTElERVIgJiZcbiAgICAgICAgdGhpcy50eXBlID09PSBUaW1lRmlsdGVyVHlwZS5ZRUFSXG4gICAgICApIHtcbiAgICAgICAgdGhpcy55ZWFyQ2hhbmdlLmVtaXQodGhpcy55ZWFyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wRmlsdGVyKCk7XG4gICAgICB0aGlzLnN0b3JlQ3VycmVudEZpbHRlclZhbHVlKCk7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHVuZGVmaW5lZCk7IC8vIFRPRE86IEZJWCBUSElTIGZvciBBTEwgT1RIRVIgVFlQRVMgU1RZTEVTIE9SIFJBTkdFLlxuICAgIH1cbiAgfVxuXG4gIHJlc2V0RmlsdGVyKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSh0aGlzLm1pbik7XG4gICAgdGhpcy55ZWFyID0gdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuaXNSYW5nZSAmJlxuICAgICAgVGltZUZpbHRlclN0eWxlLlNMSURFUiAmJlxuICAgICAgdGhpcy50eXBlID09PSBUaW1lRmlsdGVyVHlwZS5ZRUFSXG4gICAgKSB7XG4gICAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh0aGlzLnllYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldHVwRGF0ZU91dHB1dCgpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh1bmRlZmluZWQpOyAvLyBUT0RPOiBGSVggVEhJUyBmb3IgQUxMIE9USEVSIFRZUEVTIFNUWUxFUyBPUiBSQU5HRS5cbiAgICB9XG4gIH1cblxuICBwbGF5RmlsdGVyKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xuICAgICAgdGhpcy5zdG9wRmlsdGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheUljb24gPSAncGF1c2UtY2lyY2xlJztcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgdGhhdCA9PiB7XG4gICAgICAgICAgbGV0IG5ld01pbkRhdGVOdW1iZXI7XG4gICAgICAgICAgY29uc3QgbWF4RGF0ZU51bWJlciA9IG5ldyBEYXRlKHRoYXQubWF4KTtcblxuICAgICAgICAgIG5ld01pbkRhdGVOdW1iZXIgPVxuICAgICAgICAgICAgdGhhdC5kYXRlID09PSB1bmRlZmluZWQgPyB0aGF0Lm1pbi5nZXRUaW1lKCkgOiB0aGF0LmRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgIG5ld01pbkRhdGVOdW1iZXIgKz0gdGhhdC5teVNsaWRlci5zdGVwO1xuICAgICAgICAgIHRoYXQuZGF0ZSA9IG5ldyBEYXRlKG5ld01pbkRhdGVOdW1iZXIpO1xuXG4gICAgICAgICAgaWYgKG5ld01pbkRhdGVOdW1iZXIgPiBtYXhEYXRlTnVtYmVyLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgdGhhdC5zdG9wRmlsdGVyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhhdC5oYW5kbGVEYXRlQ2hhbmdlKHsgdmFsdWU6IHRoYXQuZGF0ZSwgZGF0ZTogdGhhdC5kYXRlIH0pO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLnRpbWVJbnRlcnZhbCxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwbGF5WWVhcihldmVudDogYW55KSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy55ZWFyICsgdGhpcy5teVNsaWRlci5zdGVwID5cbiAgICAgIHRoaXMubWF4LmdldEZ1bGxZZWFyKCkgKyB0aGlzLm15U2xpZGVyLnN0ZXBcbiAgICApIHtcbiAgICAgIHRoaXMuc3RvcEZpbHRlcigpO1xuICAgICAgdGhpcy5yZXNldEZpbHRlcihldmVudCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gICAgICB0aGlzLnN0b3BGaWx0ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5SWNvbiA9ICdwYXVzZS1jaXJjbGUnO1xuICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICh0aGlzLnllYXIgKyB0aGlzLm15U2xpZGVyLnN0ZXApID4gdGhpcy5tYXguZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgIHRoaXMuc3RvcEZpbHRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMueWVhciA9IHRoaXMueWVhciArIHRoaXMubXlTbGlkZXIuc3RlcDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh0aGlzLnllYXIpO1xuXG4gICAgICB9LCB0aGlzLnRpbWVJbnRlcnZhbCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc3RvcEZpbHRlcigpIHtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG4gICAgdGhpcy5pbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBsYXlJY29uID0gJ3BsYXktY2lyY2xlJztcbiAgfVxuXG4gIGhhbmRsZVNsaWRlckRhdGVDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LnZhbHVlKTtcbiAgICB0aGlzLnNldFNsaWRlclRodW1iTGFiZWwodGhpcy5oYW5kbGVTbGlkZXJUb29sdGlwKCkpO1xuICAgIHRoaXMuaGFuZGxlRGF0ZUNoYW5nZShldmVudCk7XG4gIH1cblxuICBoYW5kbGVTbGlkZXJZZWFyQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnllYXIgPSBldmVudC52YWx1ZTtcbiAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh0aGlzLnllYXIpO1xuICB9XG5cbiAgaGFuZGxlU2xpZGVyVmFsdWUoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmN1cnJlbnQgPT09IHRydWUgfHwgIXRoaXMubWluKSB7XG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICB0aGlzLmRhdGUgPSB0aGlzLmdldFJvdW5kZWREYXRlKGN1cnJlbnREYXRlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gVGltZUZpbHRlclR5cGUuWUVBUikge1xuICAgICAgcmV0dXJuIHRoaXMueWVhcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5taW4uZ2V0VGltZSgpIDogdGhpcy5kYXRlLmdldFRpbWUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTbGlkZXJUb29sdGlwKCkge1xuICAgIGxldCBsYWJlbDogc3RyaW5nO1xuXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgVGltZUZpbHRlclR5cGUuREFURTpcbiAgICAgICAgbGFiZWwgPVxuICAgICAgICAgIHRoaXMuZGF0ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHRoaXMubWluLnRvRGF0ZVN0cmluZygpXG4gICAgICAgICAgICA6IHRoaXMuZGF0ZS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRpbWVGaWx0ZXJUeXBlLlRJTUU6XG4gICAgICAgIGxhYmVsID1cbiAgICAgICAgICB0aGlzLmRhdGUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB0aGlzLm1pbi50b1RpbWVTdHJpbmcoKVxuICAgICAgICAgICAgOiB0aGlzLmRhdGUudG9UaW1lU3RyaW5nKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gZGF0ZXRpbWVcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxhYmVsID1cbiAgICAgICAgICB0aGlzLmRhdGUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB0aGlzLm1pbi50b1VUQ1N0cmluZygpXG4gICAgICAgICAgICA6IHRoaXMuZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBzZXR1cERhdGVPdXRwdXQoKSB7XG4gICAgaWYgKHRoaXMuc3R5bGUgPT09IFRpbWVGaWx0ZXJTdHlsZS5TTElERVIpIHtcbiAgICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUodGhpcy5kYXRlKTtcbiAgICAgIHRoaXMuc3RhcnREYXRlLnNldFNlY29uZHMoLSh0aGlzLnN0ZXAgLyAxMDAwKSk7XG4gICAgICB0aGlzLmVuZERhdGUgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgICB0aGlzLmVuZERhdGUuc2V0U2Vjb25kcyh0aGlzLnN0ZXAgLyAxMDAwKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzUmFuZ2UgJiYgISF0aGlzLmRhdGUpIHtcbiAgICAgIHRoaXMuZW5kRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZSk7XG4gICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmFuZ2UgJiYgKCEhdGhpcy5kYXRlIHx8ICF0aGlzLmRhdGUpKSB7XG4gICAgICB0aGlzLnN0YXJ0RGF0ZSA9XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID09PSB1bmRlZmluZWQgPyBuZXcgRGF0ZSh0aGlzLm1pbikgOiB0aGlzLnN0YXJ0RGF0ZTtcbiAgICAgIHRoaXMuZW5kRGF0ZSA9XG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9PT0gdW5kZWZpbmVkID8gbmV3IERhdGUodGhpcy5tYXgpIDogdGhpcy5lbmREYXRlO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGF0ZSkge1xuICAgICAgdGhpcy5zdGFydERhdGUgPVxuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9PT0gdW5kZWZpbmVkID8gbmV3IERhdGUodGhpcy5taW4pIDogdGhpcy5zdGFydERhdGU7XG4gICAgICB0aGlzLmVuZERhdGUgPVxuICAgICAgICB0aGlzLmVuZERhdGUgPT09IHVuZGVmaW5lZCA/IG5ldyBEYXRlKHRoaXMubWF4KSA6IHRoaXMuZW5kRGF0ZTtcbiAgICB9XG4gIH1cblxuICBhcHBseVR5cGVDaGFuZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgVGltZUZpbHRlclR5cGUuREFURTpcbiAgICAgICAgaWYgKHRoaXMuc3RhcnREYXRlICE9PSB1bmRlZmluZWQgfHwgdGhpcy5lbmREYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZS5zZXRIb3VycygwKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZS5zZXRNaW51dGVzKDApO1xuICAgICAgICAgIHRoaXMuc3RhcnREYXRlLnNldFNlY29uZHMoMCk7XG4gICAgICAgICAgdGhpcy5lbmREYXRlLnNldEhvdXJzKDIzKTtcbiAgICAgICAgICB0aGlzLmVuZERhdGUuc2V0TWludXRlcyg1OSk7XG4gICAgICAgICAgdGhpcy5lbmREYXRlLnNldFNlY29uZHMoNTkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUaW1lRmlsdGVyVHlwZS5USU1FOlxuICAgICAgICBpZiAodGhpcy5zdHlsZSA9PT0gVGltZUZpbHRlclN0eWxlLkNBTEVOREFSKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhcnREYXRlLmdldERheSgpICE9PSB0aGlzLm1pbi5nZXREYXkoKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRIb3VyID0gdGhpcy5zdGFydERhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWludXRlID0gdGhpcy5zdGFydERhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSB0aGlzLm1pbjtcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlLnNldEhvdXJzKHNlbGVjdGVkSG91cik7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZS5zZXRNaW51dGVzKHNlbGVjdGVkTWludXRlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5lbmREYXRlLmdldERheSgpICE9PSB0aGlzLm1pbi5nZXREYXkoKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRIb3VyID0gdGhpcy5lbmREYXRlLmdldEhvdXJzKCk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1pbnV0ZSA9IHRoaXMuZW5kRGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICB0aGlzLmVuZERhdGUgPSB0aGlzLm1pbjtcbiAgICAgICAgICAgIHRoaXMuZW5kRGF0ZS5zZXRIb3VycyhzZWxlY3RlZEhvdXIpO1xuICAgICAgICAgICAgdGhpcy5lbmREYXRlLnNldE1pbnV0ZXMoc2VsZWN0ZWRNaW51dGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc1JhbmdlICYmIHRoaXMuc3RlcCA+IDYwICogNjAgKiAxMDAwKSB7XG4gICAgICAgICAgdGhpcy5zdGFydERhdGUuc2V0TWludXRlcygwKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZS5zZXRTZWNvbmRzKDApO1xuICAgICAgICAgIHRoaXMuZW5kRGF0ZS5zZXRNaW51dGVzKDU5KTtcbiAgICAgICAgICB0aGlzLmVuZERhdGUuc2V0U2Vjb25kcyg1OSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBkYXRldGltZVxuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gIH1cblxuICBnZXRSYW5nZU1pbkRhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnREYXRlID09PSB1bmRlZmluZWQgPyB0aGlzLm1pbiA6IHRoaXMuc3RhcnREYXRlO1xuICB9XG5cbiAgZ2V0UmFuZ2VNYXhEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLmVuZERhdGUgPT09IHVuZGVmaW5lZCA/IHRoaXMubWF4IDogdGhpcy5lbmREYXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvdW5kIGRhdGUgYXQgYSBjZXJ0YWluIHRpbWUsIDEwIG1pbnV0ZXMgYnkgRGVmYXVsdFxuICAgKiBAcGFyYW0gZGF0ZSAtIERhdGUgdG8gUm91bmRcbiAgICogQHBhcmFtIGF0TWludXRlIC0gcm91bmQgdG8gY2xvc2VzdCAnYXRNaW51dGUnIG1pbnV0ZSwgcm91bmRlZCAxMCBieSBkZWZhdWx0XG4gICAqIEByZXR1cm4gdGhlIHJvdW5kZWQgZGF0ZVxuICAgKi9cbiAgZ2V0Um91bmRlZERhdGUoZGF0ZSwgYXRNaW51dGUgPSAxMCkge1xuICAgIGNvbnN0IGNvZWZmID0gMTAwMCAqIDYwICogYXRNaW51dGU7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE1hdGgucm91bmQoZGF0ZS5nZXRUaW1lKCkgLyBjb2VmZikgKiBjb2VmZik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdGVwIChwZXJpb2QpIGRlZmluaXRpb24gZnJvbSB0aGUgbGF5ZXIgZGltZW5zaW9uIHRhZ1xuICAgKiBAcGFyYW0gc3RlcCBUaGUgc3RlcCBhcyBJU08gODYwMSBleGFtcGxlOiBQVDEwTSBmb3IgMTAgTWludXRlc1xuICAgKiBAcmV0dXJuIHRoZSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICovXG4gIGdldFN0ZXBEZWZpbml0aW9uKHN0ZXApIHtcbiAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKHN0ZXApLmFzTWlsbGlzZWNvbmRzKCk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJzdHlsZSA9PT0gJ2NhbGVuZGFyJyAmJiB0eXBlICE9PSd5ZWFyJ1wiPlxuICA8ZGl2ICpuZ0lmPVwiIWlzUmFuZ2VcIiBjbGFzcz1cImlnby1jb2wgaWdvLWNvbC0xMDAgaWdvLWNvbC0xMDAtbVwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZGF0ZXRpbWVwaWNrZXItdG9nZ2xlIFtmb3JdPVwiZGF0ZXRpbWVQaWNrZXJcIiBtYXRTdWZmaXg+PC9tYXQtZGF0ZXRpbWVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRldGltZXBpY2tlciAjZGF0ZXRpbWVQaWNrZXIgdHlwZT1cInt7dHlwZX19XCIgb3Blbk9uRm9jdXM9XCJ0cnVlXCIgdGltZUludGVydmFsPVwiNVwiPjwvbWF0LWRhdGV0aW1lcGlja2VyPlxuICAgICAgPGlucHV0IG1hdElucHV0IGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eydpZ28uZ2VvLnRpbWVGaWx0ZXIuZGF0ZScgfCB0cmFuc2xhdGV9fVwiXG4gICAgICAgIFttYXREYXRldGltZXBpY2tlcl09XCJkYXRldGltZVBpY2tlclwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGF0ZVwiXG4gICAgICAgIFttaW5dPVwibWluXCJcbiAgICAgICAgW21heF09XCJtYXhcIlxuICAgICAgICByZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgKGRhdGVDaGFuZ2UpPVwiaGFuZGxlRGF0ZUNoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiaXNSYW5nZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpZ28tY29sIGlnby1jb2wtMTAwXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtZGF0ZXRpbWVwaWNrZXItdG9nZ2xlIFtmb3JdPVwibWluRGF0ZXRpbWVQaWNrZXJcIiBtYXRTdWZmaXg+PC9tYXQtZGF0ZXRpbWVwaWNrZXItdG9nZ2xlPlxuICAgICAgICA8bWF0LWRhdGV0aW1lcGlja2VyICNtaW5EYXRldGltZVBpY2tlciB0eXBlPVwie3t0eXBlfX1cIiBvcGVuT25Gb2N1cz1cInRydWVcIiB0aW1lSW50ZXJ2YWw9XCI1XCI+PC9tYXQtZGF0ZXRpbWVwaWNrZXI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBhdXRvY29tcGxldGU9XCJmYWxzZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eydpZ28uZ2VvLnRpbWVGaWx0ZXIuc3RhcnREYXRlJyB8IHRyYW5zbGF0ZX19XCJcbiAgICAgICAgICBbbWF0RGF0ZXRpbWVwaWNrZXJdPVwibWluRGF0ZXRpbWVQaWNrZXJcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwic3RhcnREYXRlXCJcbiAgICAgICAgICBbbWluXT1cIm1pblwiXG4gICAgICAgICAgW21heF09XCJnZXRSYW5nZU1heERhdGUoKVwiXG4gICAgICAgICAgcmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgKGlucHV0KT1cInN0YXJ0RGF0ZVwiXG4gICAgICAgICAgKGRhdGVDaGFuZ2UpPVwiaGFuZGxlRGF0ZUNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImlnby1jb2wgaWdvLWNvbC0xMDBcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1kYXRldGltZXBpY2tlci10b2dnbGUgW2Zvcl09XCJtYXhEYXRldGltZVBpY2tlclwiIG1hdFN1ZmZpeD48L21hdC1kYXRldGltZXBpY2tlci10b2dnbGU+XG4gICAgICAgIDxtYXQtZGF0ZXRpbWVwaWNrZXIgI21heERhdGV0aW1lUGlja2VyIHR5cGU9XCJ7e3R5cGV9fVwiIG9wZW5PbkZvY3VzPVwidHJ1ZVwiIHRpbWVJbnRlcnZhbD1cIjVcIj48L21hdC1kYXRldGltZXBpY2tlcj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7J2lnby5nZW8udGltZUZpbHRlci5lbmREYXRlJyB8IHRyYW5zbGF0ZX19XCJcbiAgICAgICAgICBbbWF0RGF0ZXRpbWVwaWNrZXJdPVwibWF4RGF0ZXRpbWVQaWNrZXJcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiZW5kRGF0ZVwiXG4gICAgICAgICAgW21pbl09XCJnZXRSYW5nZU1pbkRhdGUoKVwiXG4gICAgICAgICAgW21heF09XCJtYXhcIlxuICAgICAgICAgIHJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgIChkYXRlQ2hhbmdlKT1cImhhbmRsZURhdGVDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInN0eWxlID09PSAnY2FsZW5kYXInICYmIHR5cGUgPT09J3llYXInXCI+XG5cbiAgPGRpdiAqbmdJZj1cIiFpc1JhbmdlXCIgY2xhc3M9XCJpZ28tY29sIGlnby1jb2wtMTAwIGlnby1jb2wtMTAwLW1cIj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJ7eydpZ28uZ2VvLnRpbWVGaWx0ZXIuZGF0ZScgfCB0cmFuc2xhdGV9fVwiIFsobmdNb2RlbCldPVwieWVhclwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiaGFuZGxlWWVhckNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwieWVhclwiICpuZ0Zvcj1cImxldCB5ZWFyIG9mIGxpc3RZZWFyc1wiPnt7eWVhcn19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiaXNSYW5nZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpZ28tY29sIGlnby1jb2wtMTAwXCI+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwie3snaWdvLmdlby50aW1lRmlsdGVyLnN0YXJ0RGF0ZScgfCB0cmFuc2xhdGV9fVwiIFsobmdNb2RlbCldPVwic3RhcnRZZWFyXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJoYW5kbGVZZWFyQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cInN0YXJ0WWVhclwiICpuZ0Zvcj1cImxldCBzdGFydFllYXIgb2Ygc3RhcnRMaXN0WWVhcnNcIj57e3N0YXJ0WWVhcn19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJpZ28tY29sIGlnby1jb2wtMTAwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cInt7J2lnby5nZW8udGltZUZpbHRlci5lbmREYXRlJyB8IHRyYW5zbGF0ZX19XCIgWyhuZ01vZGVsKV09XCJlbmRZZWFyXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJoYW5kbGVZZWFyQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cImVuZFllYXJcIiAqbmdGb3I9XCJsZXQgZW5kWWVhciBvZiBlbmRMaXN0WWVhcnNcIj57e2VuZFllYXJ9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjwvZGl2PlxuXG5cbiAgPGJyPlxuICA8ZGl2ICpuZ0lmPVwiIWlzUmFuZ2UgJiYgc3R5bGUgPT09ICdzbGlkZXInICYmIHR5cGUgPT09ICd5ZWFyJ1wiIGNsYXNzPVwiaWdvLWNvbCBpZ28tY29sLTEwMCBpZ28tY29sLTEwMC1tIG1hdC10eXBvZ3JhcGh5XCI+XG4gICAgPHNwYW4+e3tzdGFydFllYXJ9fTwvc3Bhbj5cbiAgICA8bWF0LXNsaWRlclxuICAgICAgICBpZD1cInRpbWUtc2xpZGVyXCJcbiAgICAgICAgdGlja0ludGVydmFsPVwiYXV0b1wiXG4gICAgICAgIHN0ZXA9XCJ7e3N0ZXB9fVwiXG4gICAgICAgIFttaW5dPVwic3RhcnRZZWFyXCJcbiAgICAgICAgW21heF09XCJlbmRZZWFyXCJcbiAgICAgICAgW3ZhbHVlXT1cImhhbmRsZVNsaWRlclZhbHVlKClcIlxuICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICB0aHVtYkxhYmVsXG4gICAgICAgIChpbnB1dCk9XCJoYW5kbGVTbGlkZXJZZWFyQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAoY2hhbmdlKT1cImhhbmRsZVNsaWRlclllYXJDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtkaXNhYmxlZF09IFwiIW9wdGlvbnMuZW5hYmxlZCB8fCAhbGF5ZXIudmlzaWJsZVwiPlxuICAgIDwvbWF0LXNsaWRlcj5cbiAgICA8c3Bhbj57e2VuZFllYXJ9fTwvc3Bhbj5cbiAgICA8cCAqbmdJZj0gXCJvcHRpb25zLmVuYWJsZWRcIiBjbGFzcz1cImRhdGUtYmVsb3dcIj57e3llYXJ9fTwvcD5cbiAgICA8ZGl2ICNhY3Rpb25zIGNsYXNzPVwiaWdvLWxheWVyLWFjdGlvbnMtY29udGFpbmVyXCI+XG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cInRvZ2dsZUZpbHRlclN0YXRlKClcIiB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uZmlsdGVyLnRvZ2dsZUZpbHRlclN0YXRlJyB8IHRyYW5zbGF0ZVwiIFtjb2xvcl09XCJjb2xvclwiIFtjaGVja2VkXT1cIm9wdGlvbnMuZW5hYmxlZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCIhbGF5ZXIudmlzaWJsZVwiPlxuICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPSBcIiFvcHRpb25zLmVuYWJsZWQgIHx8ICFsYXllci52aXNpYmxlXCIgbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJwbGF5WWVhcigkZXZlbnQpXCI+XG4gICAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwie3twbGF5SWNvbn19XCI+PC9tYXQtaWNvbj5cbiAgICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFvcHRpb25zLmVuYWJsZWQgIHx8ICFsYXllci52aXNpYmxlXCIgbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJyZXNldEZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwie3tyZXNldEljb259fVwiPjwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJzdHlsZSA9PT0gJ3NsaWRlcicgJiYgdHlwZSAhPT0gJ3llYXInXCIgY2xhc3M9XCJpZ28tY29sIGlnby1jb2wtMTAwIGlnby1jb2wtMTAwLW1cIj5cbiAgPG1hdC1zbGlkZXJcbiAgICAgIGlkPVwidGltZS1zbGlkZXJcIlxuICAgICAgdGlja0ludGVydmFsPVwiYXV0b1wiXG4gICAgICBzdGVwPVwie3tzdGVwfX1cIlxuICAgICAgW21pbl09XCJkYXRlVG9OdW1iZXIobWluKVwiXG4gICAgICBbbWF4XT1cImRhdGVUb051bWJlcihtYXgpXCJcbiAgICAgIFt2YWx1ZV09XCJoYW5kbGVTbGlkZXJWYWx1ZSgpXCJcbiAgICAgIHRodW1iTGFiZWxcbiAgICAgIChpbnB1dCk9XCJoYW5kbGVTbGlkZXJEYXRlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJoYW5kbGVTbGlkZXJEYXRlQ2hhbmdlKCRldmVudClcIj5cbiAgPC9tYXQtc2xpZGVyPlxuICA8cCBjbGFzcz1cImRhdGUtYmVsb3dcIj57e2hhbmRsZVNsaWRlclRvb2x0aXAoKX19PC9wPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwicGxheUZpbHRlcigkZXZlbnQpXCI+XG4gICA8bWF0LWljb24gc3ZnSWNvbj1cInt7cGxheUljb259fVwiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=