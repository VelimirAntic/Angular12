import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { strEnum } from '@igo2/utils';
import { ClusterDataSource } from '../../datasource/shared/datasources/cluster-datasource';
import { VectorLayer } from '../../layer/shared/layers/vector-layer';
import olPoint from 'ol/geom/Point';
import { circular } from 'ol/geom/Polygon';
import { handleFileExportError, handleFileExportSuccess } from '../shared/export.utils';
import { ExportFormat, EncodingFormat } from '../shared/export.type';
import { ExportService } from '../shared/export.service';
import { handleFileImportSuccess, handleFileImportError } from '../shared/import.utils';
import { skipWhile } from 'rxjs/operators';
import { computeProjectionsConstraints } from '../../map';
import * as i0 from "@angular/core";
import * as i1 from "../shared/import.service";
import * as i2 from "../shared/export.service";
import * as i3 from "@igo2/core";
import * as i4 from "../style-list/style-list.service";
import * as i5 from "../../layer/shared/style.service";
import * as i6 from "@angular/forms";
import * as i7 from "../../download/shared/download.service";
import * as i8 from "@angular/material/button-toggle";
import * as i9 from "@angular/common";
import * as i10 from "@angular/material/form-field";
import * as i11 from "@angular/material/select";
import * as i12 from "@angular/material/tooltip";
import * as i13 from "@angular/material/button";
import * as i14 from "@igo2/common";
import * as i15 from "@angular/material/core";
import * as i16 from "@angular/material/slide-toggle";
import * as i17 from "@angular/material/input";
import * as i18 from "@ngx-translate/core";
function ImportExportComponent_form_8_mat_option_7_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, "igo.geo.importExportForm.projections." + projection_r6.translateKey, projection_r6));
} }
function ImportExportComponent_form_8_mat_option_7_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(projection_r6.alias);
} }
function ImportExportComponent_form_8_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 14);
    i0.ɵɵlistener("click", function ImportExportComponent_form_8_mat_option_7_Template_mat_option_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵtemplate(1, ImportExportComponent_form_8_mat_option_7_p_1_Template, 3, 4, "p", 15);
    i0.ɵɵtemplate(2, ImportExportComponent_form_8_mat_option_7_p_2_Template, 2, 1, "p", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", projection_r6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", projection_r6.translateKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !projection_r6.translateKey);
} }
function ImportExportComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-select", 7);
    i0.ɵɵlistener("valueChange", function ImportExportComponent_form_8_Template_mat_select_valueChange_6_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.inputProj = $event; });
    i0.ɵɵtemplate(7, ImportExportComponent_form_8_mat_option_7_Template, 3, 3, "mat-option", 8);
    i0.ɵɵpipe(8, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵelementStart(12, "button", 10);
    i0.ɵɵlistener("click", function ImportExportComponent_form_8_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r13); const _r5 = i0.ɵɵreference(19); return _r5.click(); });
    i0.ɵɵpipe(13, "async");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "igo-spinner", 11);
    i0.ɵɵpipe(17, "async");
    i0.ɵɵelementStart(18, "input", 12, 13);
    i0.ɵɵlistener("click", function ImportExportComponent_form_8_Template_input_click_18_listener() { i0.ɵɵrestoreView(_r13); const _r5 = i0.ɵɵreference(19); return _r5.value = null; })("change", function ImportExportComponent_form_8_Template_input_change_18_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.importFiles($event.target.files); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.importForm);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 10, "igo.geo.importExportForm.importProjPlaceholder"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.inputProj);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 12, ctx_r0.projections$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTooltip", ctx_r0.importForm.invalid ? i0.ɵɵpipeBind1(10, 14, "igo.geo.importExportForm.projections.choose") : i0.ɵɵpipeBind1(11, 16, "igo.geo.importExportForm.importButton"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.importForm.invalid || i0.ɵɵpipeBind1(13, 18, ctx_r0.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 20, "igo.geo.importExportForm.importButton"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("shown", i0.ɵɵpipeBind1(17, 22, ctx_r0.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", "none");
} }
const _c0 = function (a0) { return { size: a0 }; };
function ImportExportComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 17);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul");
    i0.ɵɵelementStart(5, "li");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "li");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "li");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "igo.geo.importExportForm.importClarifications"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 6, "igo.geo.importExportForm.importSizeMax", i0.ɵɵpureFunction1(13, _c0, ctx_r1.fileSizeMb)));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 9, "igo.geo.importExportForm.importFormatAuthorized"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 11, "igo.geo.importExportForm.importShpZip"));
} }
function ImportExportComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 17);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, "igo.geo.importExportForm.exportNoLayersExportable"));
} }
function ImportExportComponent_form_12_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" (+", ctx_r17.layers.length - 1, " ", i0.ɵɵpipeBind1(2, 2, (ctx_r17.layers == null ? null : ctx_r17.layers.length) === 2 ? "igo.geo.importExportForm.other" : "igo.geo.importExportForm.others"), ") ");
} }
function ImportExportComponent_form_12_mat_option_10_mat_slide_toggle_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-slide-toggle", 32);
    i0.ɵɵlistener("click", function ImportExportComponent_form_12_mat_option_10_mat_slide_toggle_4_Template_mat_slide_toggle_click_0_listener($event) { i0.ɵɵrestoreView(_r30); const layer_r26 = i0.ɵɵnextContext().$implicit; const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.onlySelectedClick($event, layer_r26.id); })("checked", function ImportExportComponent_form_12_mat_option_10_mat_slide_toggle_4_Template_mat_slide_toggle_checked_0_listener() { i0.ɵɵrestoreView(_r30); const layer_r26 = i0.ɵɵnextContext().$implicit; const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.inLayersIdToExportSelectionOnly(layer_r26); })("change", function ImportExportComponent_form_12_mat_option_10_mat_slide_toggle_4_Template_mat_slide_toggle_change_0_listener($event) { i0.ɵɵrestoreView(_r30); const layer_r26 = i0.ɵɵnextContext().$implicit; const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onlySelected($event, layer_r26.id); });
    i0.ɵɵelementStart(1, "small");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("labelPosition", "after");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "igo.geo.importExportForm.exportSelectedFeature"));
} }
const _c1 = function (a0) { return { "igo-export-layer-mat-option": a0 }; };
function ImportExportComponent_form_12_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 30);
    i0.ɵɵlistener("click", function ImportExportComponent_form_12_mat_option_10_Template_mat_option_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(1, "p", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 16);
    i0.ɵɵtemplate(4, ImportExportComponent_form_12_mat_option_10_mat_slide_toggle_4_Template, 4, 4, "mat-slide-toggle", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r26 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx_r18.layerHasSelectedFeatures(layer_r26)))("value", layer_r26.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(layer_r26.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r18.layerHasSelectedFeatures(layer_r26));
} }
function ImportExportComponent_form_12_ng_container_18_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 2);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const format_r37 = ctx.$implicit;
    i0.ɵɵproperty("value", format_r37.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.export.format." + format_r37.value), " ");
} }
function ImportExportComponent_form_12_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ImportExportComponent_form_12_ng_container_18_mat_option_1_Template, 3, 4, "mat-option", 33);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, i0.ɵɵpipeBind1(3, 3, ctx_r19.formats$)));
} }
function ImportExportComponent_form_12_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 34);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.geo.export.noFormat.title"), " ");
} }
function ImportExportComponent_form_12_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelement(2, "input", 35);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(3, 1, "igo.geo.importExportForm.exportFileNamePlaceholder"));
} }
function ImportExportComponent_form_12_div_23_ng_container_6_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 2);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const encoding_r40 = ctx.$implicit;
    i0.ɵɵproperty("value", encoding_r40.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.export.encoding." + encoding_r40.value), " ");
} }
function ImportExportComponent_form_12_div_23_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ImportExportComponent_form_12_div_23_ng_container_6_mat_option_1_Template, 3, 4, "mat-option", 33);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, i0.ɵɵpipeBind1(3, 3, ctx_r38.encodings$)));
} }
function ImportExportComponent_form_12_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-select", 36);
    i0.ɵɵtemplate(6, ImportExportComponent_form_12_div_23_ng_container_6_Template, 4, 5, "ng-container", 22);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, "igo.geo.importExportForm.encodingPlaceholder"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(7, 4, ctx_r22.encodings$).length !== 0);
} }
function ImportExportComponent_form_12_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelementStart(1, "mat-slide-toggle", 38);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelPosition", "before");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "igo.geo.importExportForm.exportCombineResults"), " ");
} }
function ImportExportComponent_form_12_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵelementStart(1, "mat-slide-toggle", 40);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelPosition", "before");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "igo.geo.importExportForm.exportSeparator"), " ");
} }
function ImportExportComponent_form_12_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelementStart(1, "mat-slide-toggle", 42);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelPosition", "before");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "igo.geo.importExportForm.exportFeatureInExtent"), " ");
} }
function ImportExportComponent_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-select", 18);
    i0.ɵɵlistener("valueChange", function ImportExportComponent_form_12_Template_mat_select_valueChange_6_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.layers = $event; });
    i0.ɵɵelementStart(7, "mat-select-trigger");
    i0.ɵɵtext(8);
    i0.ɵɵtemplate(9, ImportExportComponent_form_12_span_9_Template, 3, 4, "span", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ImportExportComponent_form_12_mat_option_10_Template, 5, 6, "mat-option", 20);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 6);
    i0.ɵɵelementStart(13, "mat-form-field");
    i0.ɵɵelementStart(14, "mat-label");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-select", 21);
    i0.ɵɵtemplate(18, ImportExportComponent_form_12_ng_container_18_Template, 4, 5, "ng-container", 22);
    i0.ɵɵpipe(19, "async");
    i0.ɵɵtemplate(20, ImportExportComponent_form_12_mat_option_20_Template, 3, 3, "mat-option", 23);
    i0.ɵɵpipe(21, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, ImportExportComponent_form_12_div_22_Template, 4, 3, "div", 24);
    i0.ɵɵtemplate(23, ImportExportComponent_form_12_div_23_Template, 8, 6, "div", 24);
    i0.ɵɵtemplate(24, ImportExportComponent_form_12_div_24_Template, 4, 4, "div", 25);
    i0.ɵɵtemplate(25, ImportExportComponent_form_12_div_25_Template, 4, 4, "div", 26);
    i0.ɵɵtemplate(26, ImportExportComponent_form_12_div_26_Template, 4, 4, "div", 27);
    i0.ɵɵelementStart(27, "div", 28);
    i0.ɵɵelementStart(28, "button", 10);
    i0.ɵɵlistener("click", function ImportExportComponent_form_12_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r42); const ctx_r43 = i0.ɵɵnextContext(); return ctx_r43.handleExportFormSubmit(ctx_r43.form.value); });
    i0.ɵɵpipe(29, "async");
    i0.ɵɵtext(30);
    i0.ɵɵpipe(31, "translate");
    i0.ɵɵpipe(32, "translate");
    i0.ɵɵpipe(33, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(34, "igo-spinner", 11);
    i0.ɵɵpipe(35, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r3.form);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 17, "igo.geo.importExportForm.exportLayerPlaceholder"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r3.layers);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.layers.length ? ctx_r3.getLayerTitleById(ctx_r3.layers[0]) : "", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.layers.length > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 19, ctx_r3.exportableLayers$));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 21, "igo.geo.importExportForm.exportFormatPlaceholder"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(19, 23, ctx_r3.formats$).length !== 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(21, 25, ctx_r3.formats$).length === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.forceNaming && ctx_r3.form.value.format !== "URL");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.form.value.format === "CSVcomma" || ctx_r3.form.value.format === "CSVsemicolon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.layers.length > 1 && (ctx_r3.form.value.format === "CSVcomma" || ctx_r3.form.value.format === "CSVsemicolon"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.layers.length > 1 && (ctx_r3.form.value.format === "CSVcomma" || ctx_r3.form.value.format === "CSVsemicolon") && ctx_r3.form.value.combineLayers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.form.value.format !== "URL");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r3.form.valid || i0.ɵɵpipeBind1(29, 27, ctx_r3.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.form.value.format !== "URL" ? i0.ɵɵpipeBind1(31, 29, "igo.geo.importExportForm.exportButton") : ctx_r3.form.value.layers.length > 1 ? i0.ɵɵpipeBind1(32, 31, "igo.geo.importExportForm.exportButtonLinks") : i0.ɵɵpipeBind1(33, 33, "igo.geo.importExportForm.exportButtonLink"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("shown", i0.ɵɵpipeBind1(35, 35, ctx_r3.loading$));
} }
export class ImportExportComponent {
    constructor(importService, exportService, languageService, messageService, styleListService, styleService, formBuilder, config, cdRef, storageService, downloadService) {
        this.importService = importService;
        this.exportService = exportService;
        this.languageService = languageService;
        this.messageService = messageService;
        this.styleListService = styleListService;
        this.styleService = styleService;
        this.formBuilder = formBuilder;
        this.config = config;
        this.cdRef = cdRef;
        this.storageService = storageService;
        this.downloadService = downloadService;
        this.formats$ = new BehaviorSubject(undefined);
        this.encodings$ = new BehaviorSubject(undefined);
        this.exportableLayers$ = new BehaviorSubject([]);
        this.loading$ = new BehaviorSubject(false);
        this.forceNaming = false;
        this.controlFormat = 'format';
        this.espgCodeRegex = new RegExp('^\\d{4,6}');
        this.projections$ = new BehaviorSubject([]);
        this.popupChecked = false;
        this.previousLayerSpecs$ = new BehaviorSubject(undefined);
        this.selectFirstProj = false;
        this._projectionsLimitations = {};
        this.selectedMode = 'import';
        this.selectMode = new EventEmitter();
        this.exportOptions$ = new BehaviorSubject(undefined);
        this.exportOptionsChange = new EventEmitter();
        this.loadConfig();
        this.buildForm();
        this.computeProjections();
    }
    set projectionsLimitations(value) {
        this._projectionsLimitations = value;
        this.computeProjections();
    }
    get projectionsLimitations() {
        return this._projectionsLimitations || {};
    }
    get layers() {
        return this.form.get('layers').value;
    }
    set layers(value) {
        this.form.patchValue({ layers: value });
    }
    get inputProj() {
        return this.importForm.get('inputProj').value;
    }
    set inputProj(value) {
        this.importForm.patchValue({ inputProj: value });
    }
    get popupAllowed() {
        return this.storageService.get('importExportPopupAllowed') || false;
    }
    set popupAllowed(value) {
        this.storageService.set('importExportPopupAllowed', value);
    }
    ngOnInit() {
        this.layers$$ = this.map.layers$.subscribe((layers) => {
            this.exportableLayers$.next(layers.filter((layer) => {
                return ((layer instanceof VectorLayer && layer.exportable === true) ||
                    (layer.dataSource.options.download &&
                        layer.dataSource.options.download.url));
            }));
        });
        const configFileSizeMb = this.config.getConfig('importExport.clientSideFileSizeMaxMb');
        this.clientSideFileSizeMax =
            (configFileSizeMb ? configFileSizeMb : 30) * Math.pow(1024, 2);
        this.fileSizeMb = this.clientSideFileSizeMax / Math.pow(1024, 2);
        this.exportOptions$$ = this.exportOptions$
            .pipe(skipWhile((exportOptions) => !exportOptions))
            .subscribe((exportOptions) => {
            this.form.patchValue(exportOptions, { emitEvent: true });
            if (exportOptions.layers) {
                this.computeFormats(exportOptions.layers.map((l) => this.map.getLayerById(l)));
            }
        });
        this.formLayer$$ = this.form
            .get('format')
            .valueChanges
            .subscribe((format) => {
            var _a;
            const ogreFormats = Object.keys(ExportService.ogreFormats);
            if (!this.popupChecked &&
                ((_a = this.form.get('layers').value) === null || _a === void 0 ? void 0 : _a.length) > 1 &&
                (ogreFormats.indexOf(format) >= 0 || format === ExportFormat.URL)) {
                if (!this.handlePopup(true)) {
                    this.form.patchValue({ format: undefined }, { emitEvent: false });
                }
            }
        });
        this.formLayer$$ = this.form
            .get('layers')
            .valueChanges.subscribe((layersId) => {
            this.handlePreviousLayerSpecs();
            const selectedLayers = layersId instanceof Array ? layersId : [layersId];
            this.form.patchValue({ layers: selectedLayers }, { emitEvent: false });
            const layers = selectedLayers.map((l) => this.map.getLayerById(l));
            this.computeFormats(layers);
            if (Object.keys(this.formats$.value).indexOf(this.form.value.format) ===
                -1) {
                this.form.patchValue({ format: undefined });
            }
            this.loading$.next(true);
            const previousSpecs = [];
            layers.forEach((layer) => {
                if (layer instanceof VectorLayer &&
                    layer.dataSource.ol.getFeatures().length === 0) {
                    previousSpecs.push({
                        id: layer.id,
                        visible: layer.visible,
                        opacity: layer.opacity,
                        queryable: layer.queryable
                    });
                    layer.opacity = 0;
                    layer.visible = true;
                }
            });
            this.previousLayerSpecs$.next(previousSpecs);
            setTimeout(() => {
                this.loading$.next(false);
            }, 500);
        });
        this.formats$$ = this.formats$
            .pipe(skipWhile((formats) => !formats))
            .subscribe((formats) => {
            if (Object.keys(formats).length === 1) {
                this.form.patchValue({ format: formats[Object.keys(formats)[0]] });
            }
        });
        this.encodings$$ = this.encodings$
            .pipe(skipWhile((encodings) => !encodings))
            .subscribe((encodings) => {
            if (Object.keys(encodings).length === 1) {
                this.form.patchValue({ encoding: encodings[Object.keys(encodings)[0]] });
            }
        });
        this.exportableLayers$$ = this.exportableLayers$
            .pipe(skipWhile((layers) => !layers))
            .subscribe((layers) => {
            if (layers.length === 1) {
                this.form.patchValue({ layers: layers[0].id });
            }
        });
        this.form.controls[this.controlFormat].valueChanges.subscribe((format) => {
            if (format === ExportFormat.CSVcomma || format === ExportFormat.CSVsemicolon) {
                this.form.patchValue({ encoding: EncodingFormat.LATIN1 });
            }
            else {
                this.form.patchValue({ encoding: EncodingFormat.UTF8 });
            }
            this.cdRef.detectChanges();
        });
        if (this.selectFirstProj) {
            if (this.projections$.value.length === 0) {
                this.importForm.patchValue({ inputProj: { translateKey: 'nad83', alias: 'NAD83', code: 'EPSG:4326', zone: '' } });
            }
            else {
                this.importForm.patchValue({ inputProj: this.projections$.value[0] });
            }
        }
        else {
            this.importForm.patchValue({ inputProj: undefined });
        }
    }
    computeProjections() {
        this.projectionsConstraints = computeProjectionsConstraints(this.projectionsLimitations);
        const projections = [];
        if (this.projectionsConstraints.nad83) {
            projections.push({ translateKey: 'nad83', alias: 'NAD83', code: 'EPSG:4269', zone: '' });
        }
        if (this.projectionsConstraints.wgs84) {
            projections.push({ translateKey: 'wgs84', alias: 'WGS84', code: 'EPSG:4326', zone: '' });
        }
        if (this.projectionsConstraints.webMercator) {
            projections.push({ translateKey: 'webMercator', alias: 'Web Mercator', code: 'EPSG:3857', zone: '' });
        }
        if (this.projectionsConstraints.mtm) {
            // all mtm zones
            const minZone = this.projectionsConstraints.mtmZone.minZone;
            const maxZone = this.projectionsConstraints.mtmZone.maxZone;
            for (let mtmZone = minZone; mtmZone <= maxZone; mtmZone++) {
                const code = mtmZone < 10 ? `EPSG:3218${mtmZone}` : `EPSG:321${80 + mtmZone}`;
                projections.push({ translateKey: 'mtm', alias: `MTM ${mtmZone}`, code, zone: `${mtmZone}` });
            }
        }
        if (this.projectionsConstraints.utm) {
            // all utm zones
            const minZone = this.projectionsConstraints.utmZone.minZone;
            const maxZone = this.projectionsConstraints.utmZone.maxZone;
            for (let utmZone = minZone; utmZone <= maxZone; utmZone++) {
                const code = utmZone < 10 ? `EPSG:3260${utmZone}` : `EPSG:326${utmZone}`;
                projections.push({ translateKey: 'utm', alias: `UTM ${utmZone}`, code, zone: `${utmZone}` });
            }
        }
        let configProjection = [];
        if (this.projectionsConstraints.projFromConfig) {
            configProjection = this.config.getConfig('projections') || [];
        }
        this.projections$.next(configProjection.concat(projections));
    }
    getWorkspaceByLayerId(id) {
        const wksFromLayerId = this.store
            .all()
            .find(workspace => workspace.layer.id === id);
        if (wksFromLayerId) {
            return wksFromLayerId;
        }
        return;
    }
    getLayerTitleById(id) {
        var _a;
        return (_a = this.map.getLayerById(id)) === null || _a === void 0 ? void 0 : _a.title;
    }
    layerHasSelectedFeatures(layer) {
        const wksFromLayer = this.getWorkspaceByLayerId(layer.id);
        if (wksFromLayer) {
            const recs = wksFromLayer.entityStore.stateView
                .firstBy((record) => {
                return record.state.selected === true;
            });
            return recs ? true : false;
        }
    }
    onlySelected(event, id) {
        let layersWithSelection = this.form.value.layersWithSelection;
        if (event.checked) {
            layersWithSelection.push(id);
        }
        else {
            layersWithSelection = layersWithSelection.filter(layerId => layerId !== id);
        }
        this.form.patchValue({ layersWithSelection });
    }
    onlySelectedClick(event, id) {
        if (this.form.value.layers.find(layerId => layerId === id)) {
            event.stopPropagation();
        }
    }
    inLayersIdToExportSelectionOnly(layer) {
        return this.form.value.layersWithSelection.find(layerId => layerId === layer.id) ? true : false;
    }
    ngOnDestroy() {
        this.layers$$.unsubscribe();
        this.exportableLayers$$.unsubscribe();
        this.formats$$.unsubscribe();
        this.encodings$$.unsubscribe();
        this.formLayer$$.unsubscribe();
        if (this.exportOptions$$) {
            this.exportOptions$$.unsubscribe();
        }
        this.exportOptionsChange.emit(this.form.value);
        this.handlePreviousLayerSpecs();
    }
    handlePreviousLayerSpecs() {
        const previousSpecs = this.previousLayerSpecs$.value;
        if (previousSpecs && previousSpecs.length) {
            previousSpecs.forEach((specs) => {
                const previousLayer = this.map.getLayerById(specs.id);
                previousLayer.visible = specs.visible;
                previousLayer.opacity = specs.opacity;
                previousLayer.queryable = specs.queryable;
            });
        }
        this.previousLayerSpecs$.next(undefined);
    }
    importFiles(files) {
        let inputProj = this.inputProj.code;
        if (this.espgCodeRegex.test(inputProj)) {
            inputProj = `EPSG:${inputProj}`;
        }
        this.loading$.next(true);
        for (const file of files) {
            this.importService.import(file, inputProj).subscribe((features) => this.onFileImportSuccess(file, features), (error) => this.onFileImportError(file, error), () => {
                this.loading$.next(false);
            });
        }
    }
    handlePopup(preCheck = true) {
        const p1 = window.open('', 'popup', 'width=1, height=1');
        p1.close();
        const p2 = window.open('', 'popup', 'width=1, height=1');
        if (!p2 || p2.closed || typeof p2.closed === 'undefined' || p2 === null) {
            this.onPopupBlockedError(preCheck);
            this.popupAllowed = false;
        }
        else {
            p2.close();
            this.popupAllowed = true;
            this.popupChecked = true;
        }
        return this.popupAllowed;
    }
    handleExportFormSubmit(data) {
        this.loading$.next(true);
        const ogreFormats = Object.keys(ExportService.ogreFormats);
        if (!this.popupChecked && data.layers.length > 1 &&
            (ogreFormats.indexOf(data.format) >= 0 || data.format === ExportFormat.URL) && !this.popupAllowed) {
            this.handlePopup();
        }
        let geomTypesCSV = [];
        let featuresCSV = [];
        let filename = "";
        for (const [layerIndex, layer] of data.layers.entries()) {
            const lay = this.map.getLayerById(layer);
            if (!(data.format === ExportFormat.CSVsemicolon || data.format === ExportFormat.CSVcomma)
                || !data.combineLayers || data.layers.length === 1) {
                filename = lay.title;
                if (data.name) {
                    filename = data.name;
                }
            }
            else {
                filename = this.languageService.translate.instant('igo.geo.export.combinedLayers');
            }
            const dSOptions = lay.dataSource.options;
            if (data.format === ExportFormat.URL && dSOptions.download && (dSOptions.download.url || dSOptions.download.dynamicUrl)) {
                setTimeout(() => {
                    // better look an feel
                    const url = dSOptions.download.url || dSOptions.download.dynamicUrl;
                    url.match(/service=wfs/gi) ? this.downloadService.open(lay) : window.open(url, '_blank');
                    this.loading$.next(false);
                }, 500);
                return;
            }
            const wks = this.getWorkspaceByLayerId(layer);
            let olFeatures;
            if (wks && wks.entityStore && wks.entityStore.stateView.all().length) {
                if (data.layersWithSelection.indexOf(layer) !== -1 && data.featureInMapExtent) {
                    // Only export selected feature && into map extent
                    olFeatures = wks.entityStore.stateView.all()
                        .filter((e) => e.state.inMapExtent && e.state.selected).map(e => e.entity.ol);
                }
                else if (data.layersWithSelection.indexOf(layer) !== -1 && !data.featureInMapExtent) {
                    // Only export selected feature &&  (into map extent OR not)
                    olFeatures = wks.entityStore.stateView.all()
                        .filter((e) => e.state.selected).map(e => e.entity.ol);
                }
                else if (data.featureInMapExtent) {
                    // Only into map extent
                    olFeatures = wks.entityStore.stateView.all()
                        .filter((e) => e.state.inMapExtent).map(e => e.entity.ol);
                }
                else {
                    // All features
                    olFeatures = wks.entityStore.stateView.all().map(e => e.entity.ol);
                }
            }
            else {
                const ol = lay.dataSource.ol;
                if (data.featureInMapExtent) {
                    olFeatures = ol.getFeaturesInExtent(lay.map.viewController.getExtent());
                }
                else {
                    olFeatures = ol.getFeatures();
                }
                if (lay.dataSource instanceof ClusterDataSource) {
                    olFeatures = olFeatures.flatMap((cluster) => cluster.get('features'));
                }
            }
            const translate = this.languageService.translate;
            let geomTypes = [];
            if (data.format === ExportFormat.Shapefile || data.format === ExportFormat.GPX) {
                olFeatures.forEach((olFeature) => {
                    const featureGeomType = olFeature.getGeometry().getType();
                    const currentGeomType = geomTypes.find(geomType => geomType.geometryType === featureGeomType);
                    if (currentGeomType) {
                        currentGeomType.features.push(olFeature);
                    }
                    else {
                        geomTypes.push({ geometryType: featureGeomType, features: [olFeature] });
                    }
                });
            }
            else {
                geomTypes = [{ geometryType: '', features: olFeatures }];
            }
            geomTypes.forEach(geomType => {
                geomType.features.forEach(feature => {
                    const radius = feature.get('rad');
                    if (radius) {
                        const center4326 = [feature.get('longitude'), feature.get('latitude')];
                        const circle = circular(center4326, radius, 500);
                        circle.transform('EPSG:4326', feature.get('_projection'));
                        feature.setGeometry(circle);
                    }
                });
            });
            if (data.format === ExportFormat.GPX) {
                const gpxFeatureCnt = geomTypes.length;
                geomTypes = geomTypes.filter(geomType => ['LineString', 'Point'].includes(geomType.geometryType));
                const gpxFeatureCntPointOrPoly = geomTypes.length;
                if (gpxFeatureCnt > gpxFeatureCntPointOrPoly) {
                    const title = translate.instant('igo.geo.export.gpx.error.poly.title');
                    const message = translate.instant('igo.geo.export.gpx.error.poly.text');
                    this.messageService.error(message, title, { timeOut: 20000 });
                }
            }
            else if ((data.format === ExportFormat.CSVsemicolon || data.format === ExportFormat.CSVcomma) && data.combineLayers) {
                geomTypes.forEach(geomType => geomTypesCSV.push(geomType));
                if (layerIndex !== data.layers.length - 1) {
                    continue;
                }
                else {
                    let previousFeature = undefined;
                    geomTypesCSV.forEach(geomType => {
                        geomType.features.forEach(currentFeature => {
                            if (data.separator) {
                                if (previousFeature) {
                                    if (currentFeature.get('_featureStore').layer.options.title !==
                                        previousFeature.get('_featureStore').layer.options.title) {
                                        const titleEmptyRows = this.createTitleEmptyRows(previousFeature, currentFeature);
                                        featuresCSV.push(titleEmptyRows[2]);
                                        featuresCSV.push(titleEmptyRows[0]);
                                        featuresCSV.push(titleEmptyRows[1]);
                                    }
                                }
                                else {
                                    const titleEmptyRows = this.createTitleEmptyRows(currentFeature, currentFeature);
                                    featuresCSV.push(titleEmptyRows[0]);
                                }
                            }
                            featuresCSV.push(currentFeature);
                            previousFeature = currentFeature;
                        });
                    });
                }
            }
            if (geomTypes.length === 0) {
                this.loading$.next(false);
                const title = translate.instant('igo.geo.export.nothing.title');
                const message = translate.instant('igo.geo.export.nothing.text');
                this.messageService.error(message, title, { timeOut: 20000 });
            }
            else {
                if (!(data.format === ExportFormat.CSVsemicolon || data.format === ExportFormat.CSVcomma) || !data.combineLayers) {
                    geomTypes.map(geomType => this.exportService.export(geomType.features, data.format, filename + geomType.geometryType, data.encoding, this.map.projection)
                        .subscribe(() => { }, (error) => this.onFileExportError(error), () => {
                        this.onFileExportSuccess();
                        geomType.features.forEach(feature => {
                            this.circleToPoint(feature);
                        });
                        this.loading$.next(false);
                    }));
                }
            }
        }
        ;
        if ((data.format === ExportFormat.CSVsemicolon || data.format === ExportFormat.CSVcomma) && data.combineLayers) {
            this.exportService.export(featuresCSV, data.format, filename, data.encoding, this.map.projection)
                .subscribe(() => { }, (error) => this.onFileExportError(error), () => {
                this.onFileExportSuccess();
                featuresCSV.forEach(feature => {
                    this.circleToPoint(feature);
                });
                this.loading$.next(false);
            });
        }
    }
    createTitleEmptyRows(previousFeature, currentFeature) {
        const titleRow = currentFeature.clone();
        const headerRow = currentFeature.clone();
        const emptyRow = currentFeature.clone();
        const previousFeatureKeys = previousFeature.getKeys();
        let firstKeyPrevious = '';
        for (const key in previousFeatureKeys) {
            if (previousFeatureKeys[key] !== 'geometry') {
                firstKeyPrevious = previousFeatureKeys[key];
                break;
            }
        }
        const currentFeatureKeys = currentFeature.getKeys();
        let firstKeyCurrent = '';
        for (const key in currentFeatureKeys) {
            if (currentFeatureKeys[key] !== 'geometry') {
                firstKeyCurrent = currentFeatureKeys[key];
                break;
            }
        }
        const allKeys = currentFeature.getKeys();
        previousFeatureKeys.forEach(previousKey => {
            if (allKeys.includes(previousKey) && previousKey !== firstKeyPrevious) {
                allKeys.push(previousKey);
            }
        });
        allKeys.unshift(firstKeyPrevious);
        let firstKeyAll = '';
        for (const key in allKeys) {
            if (allKeys[key] !== 'geometry') {
                firstKeyAll = allKeys[key];
                break;
            }
        }
        allKeys.forEach(key => {
            const sameKeys = previousFeatureKeys.length === currentFeatureKeys.length &&
                previousFeatureKeys.every((value, index) => value === currentFeatureKeys[index]);
            if (key === firstKeyAll && !sameKeys) {
                titleRow.set(key, currentFeature.get('_featureStore').layer.options.title + " ===============>", true);
                headerRow.set(key, key, true);
                emptyRow.unset(key, true);
            }
            else if (key === firstKeyAll && sameKeys) {
                titleRow.set(key, currentFeature.get('_featureStore').layer.options.title, true);
                headerRow.set(key, key, true);
                emptyRow.unset(key, true);
            }
            else if (key === firstKeyCurrent) {
                titleRow.set(key, currentFeature.get('_featureStore').layer.options.title, true);
                headerRow.set(key, key, true);
                emptyRow.unset(key, true);
            }
            else if (key !== 'geometry') {
                titleRow.unset(key, true);
                headerRow.set(key, key, true);
                emptyRow.unset(key, true);
            }
            else {
                titleRow.unset(key, true);
                emptyRow.unset(key, true);
            }
            if (!(currentFeatureKeys.includes(key))) {
                headerRow.unset(key, true);
            }
        });
        const titleEmptyRows = [titleRow, headerRow, emptyRow];
        return titleEmptyRows;
    }
    circleToPoint(feature) {
        const radius = feature.get('rad');
        if (radius) {
            const point = new olPoint([feature.get('longitude'), feature.get('latitude')]);
            point.transform('EPSG:4326', feature.get('_projection'));
            feature.setGeometry(point);
        }
    }
    buildForm() {
        this.importForm = this.formBuilder.group({
            inputProj: ['', [Validators.required]]
        });
        if (this.forceNaming) {
            this.form = this.formBuilder.group({
                format: ['', [Validators.required]],
                layers: [[], [Validators.required]],
                layersWithSelection: [[]],
                encoding: [EncodingFormat.UTF8, [Validators.required]],
                combineLayers: [true, [Validators.required]],
                separator: [false, [Validators.required]],
                featureInMapExtent: [false, [Validators.required]],
                name: ['', [Validators.required]]
            });
        }
        else {
            this.form = this.formBuilder.group({
                format: ['', [Validators.required]],
                layers: [[], [Validators.required]],
                layersWithSelection: [[]],
                encoding: [EncodingFormat.UTF8, [Validators.required]],
                combineLayers: [true, [Validators.required]],
                separator: [false, [Validators.required]],
                featureInMapExtent: [false, [Validators.required]],
            });
        }
    }
    onFileImportSuccess(file, features) {
        if (!this.config.getConfig('importWithStyle')) {
            handleFileImportSuccess(file, features, this.map, this.messageService, this.languageService);
        }
        else {
            handleFileImportSuccess(file, features, this.map, this.messageService, this.languageService, this.styleListService, this.styleService);
        }
    }
    onFileImportError(file, error) {
        this.loading$.next(false);
        handleFileImportError(file, error, this.messageService, this.languageService, this.fileSizeMb);
    }
    onPopupBlockedError(preCheck = true) {
        this.loading$.next(false);
        const translate = this.languageService.translate;
        const title = translate.instant('igo.geo.export.popupBlocked.title');
        const extraMessage = preCheck ?
            translate.instant('igo.geo.export.popupBlocked.selectAgain') :
            translate.instant('igo.geo.export.popupBlocked.retry');
        const message = translate.instant('igo.geo.export.popupBlocked.text', { extraMessage });
        this.messageService.error(message, title, { timeOut: 20000 });
    }
    onFileExportError(error) {
        this.loading$.next(false);
        handleFileExportError(error, this.messageService, this.languageService);
    }
    loadConfig() {
        if (this.config.getConfig('importExport.forceNaming') !== undefined) {
            this.forceNaming = this.config.getConfig('importExport.forceNaming');
        }
        this.computeFormats();
        this.loadEncodings();
    }
    encodingDefaultValue(format) {
        if (format === ExportFormat.CSVcomma || format === ExportFormat.CSVsemicolon) {
            this.form.patchValue({ encoding: EncodingFormat.LATIN1 });
            return EncodingFormat.LATIN1;
        }
        else {
            this.form.patchValue({ encoding: EncodingFormat.UTF8 });
            return EncodingFormat.UTF8;
        }
    }
    loadEncodings() {
        this.encodings$.next(EncodingFormat);
    }
    computeFormats(layers) {
        let appliedformats = Object.keys(ExportFormat);
        const formatsType = {
            onlyUrl: false,
            onlyVector: false,
            vectorAndUrl: false,
            customList: false
        };
        const customList = [];
        if (layers && layers.length) {
            layers.forEach((layer) => {
                var _a;
                if (!layer) {
                    return;
                }
                if ((_a = layer.dataSource.options.download) === null || _a === void 0 ? void 0 : _a.allowedFormats) {
                    formatsType.customList = true;
                    customList.push({ layer: layer.title, formats: this.validateListFormat(layer.dataSource.options.download.allowedFormats) });
                }
                else if (!(layer instanceof VectorLayer) &&
                    layer.dataSource.options.download &&
                    layer.dataSource.options.download.url) {
                    formatsType.onlyUrl = true;
                }
                else if (layer.dataSource.options.download &&
                    (layer.dataSource.options.download.url || layer.dataSource.options.download.dynamicUrl)) {
                    formatsType.vectorAndUrl = true;
                }
                else if (layer instanceof VectorLayer) {
                    formatsType.onlyVector = true;
                }
            });
            if (formatsType.onlyUrl === true && formatsType.onlyVector === false) {
                appliedformats = ['URL'];
            }
            else if (formatsType.onlyVector === true &&
                formatsType.onlyUrl === false) {
                this.computeFormats(); // reset
                if (ExportFormat.URL in this.formats$.value) {
                    const keys = Object.keys(this.formats$.value).filter((key) => key !== 'URL');
                    appliedformats = keys;
                }
            }
            else if (formatsType.vectorAndUrl === true &&
                formatsType.onlyUrl === false &&
                formatsType.onlyVector === false) {
                this.computeFormats(); // reset
                if (!(ExportFormat.URL in this.formats$.value)) {
                    const keys = Object.keys(this.formats$.value);
                    keys.push('URL');
                    appliedformats = keys;
                }
            }
        }
        if (this.config.getConfig('importExport.formats') !== undefined) {
            const validatedListFormat = this.validateListFormat(this.config.getConfig('importExport.formats'));
            appliedformats = validatedListFormat;
        }
        if (formatsType.customList) {
            let commonFormats;
            const layersWithCustomFormats = [];
            let previousCustomListFormats = customList[0].formats;
            customList.map(list => {
                layersWithCustomFormats.push(list.layer);
                commonFormats = list.formats.filter(value => previousCustomListFormats.includes(value));
                previousCustomListFormats = list.formats;
            });
            const finalFormats = commonFormats.filter(value => appliedformats.includes(value));
            if (finalFormats.length > 0) {
                this.formats$.next(strEnum(finalFormats));
                if (layers && layers.length) {
                    if (layers.length > 1) {
                        this.messageService.alert(this.languageService.translate.instant('igo.geo.export.customList.text', { value: layersWithCustomFormats.join() }), this.languageService.translate.instant('igo.geo.export.customList.title'));
                    }
                }
            }
            else {
                this.formats$.next([]);
                this.messageService.alert(this.languageService.translate.instant('igo.geo.export.noFormat.text'), this.languageService.translate.instant('igo.geo.export.noFormat.title'));
            }
            return;
        }
        else {
            this.formats$.next(strEnum(appliedformats));
        }
    }
    validateListFormat(formats) {
        return formats
            .filter((format) => {
            if (format.toUpperCase() === ExportFormat.CSVcomma.toUpperCase() ||
                format.toUpperCase() === ExportFormat.CSVsemicolon.toUpperCase() ||
                format.toUpperCase() === ExportFormat.GML.toUpperCase() ||
                format.toUpperCase() === ExportFormat.GPX.toUpperCase() ||
                format.toUpperCase() === ExportFormat.GeoJSON.toUpperCase() ||
                format.toUpperCase() === ExportFormat.KML.toUpperCase() ||
                format.toUpperCase() === ExportFormat.Shapefile.toUpperCase() ||
                format.toUpperCase() === ExportFormat.URL.toUpperCase()) {
                return format;
            }
        })
            .map((format) => {
            if (format.toUpperCase() === ExportFormat.CSVcomma.toUpperCase()) {
                format = ExportFormat.CSVcomma;
                return format;
            }
            if (format.toUpperCase() === ExportFormat.CSVsemicolon.toUpperCase()) {
                format = ExportFormat.CSVsemicolon;
                return format;
            }
            if (format.toUpperCase() === ExportFormat.GML.toUpperCase()) {
                format = ExportFormat.GML;
                return format;
            }
            if (format.toUpperCase() === ExportFormat.GPX.toUpperCase()) {
                format = ExportFormat.GPX;
                return format;
            }
            if (format.toUpperCase() === ExportFormat.GeoJSON.toUpperCase()) {
                format = ExportFormat.GeoJSON;
                return format;
            }
            if (format.toUpperCase() === ExportFormat.KML.toUpperCase()) {
                format = ExportFormat.KML;
                return format;
            }
            if (format.toUpperCase() === ExportFormat.Shapefile.toUpperCase()) {
                format = ExportFormat.Shapefile;
                return format;
            }
            if (format.toUpperCase() === ExportFormat.URL.toUpperCase()) {
                format = ExportFormat.URL;
                return format;
            }
        });
    }
    modeChanged(mode) {
        this.selectMode.emit(mode);
    }
    onFileExportSuccess() {
        handleFileExportSuccess(this.messageService, this.languageService);
    }
    onImportExportChange(event) {
        this.selectedMode = event.value;
    }
}
ImportExportComponent.ɵfac = function ImportExportComponent_Factory(t) { return new (t || ImportExportComponent)(i0.ɵɵdirectiveInject(i1.ImportService), i0.ɵɵdirectiveInject(i2.ExportService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i4.StyleListService), i0.ɵɵdirectiveInject(i5.StyleService), i0.ɵɵdirectiveInject(i6.FormBuilder), i0.ɵɵdirectiveInject(i3.ConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.StorageService), i0.ɵɵdirectiveInject(i7.DownloadService)); };
ImportExportComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImportExportComponent, selectors: [["igo-import-export"]], inputs: { selectFirstProj: "selectFirstProj", map: "map", projectionsLimitations: "projectionsLimitations", store: "store", selectedMode: "selectedMode", exportOptions$: "exportOptions$" }, outputs: { selectMode: "selectMode", exportOptionsChange: "exportOptionsChange" }, decls: 14, vars: 17, consts: [[1, "import-export-toggle", "mat-typography"], [3, "value", "change"], [3, "value"], ["class", "igo-form", 3, "formGroup", 4, "ngIf"], ["class", "mat-typography", 4, "ngIf"], [1, "igo-form", 3, "formGroup"], [1, "igo-input-container"], [3, "value", "valueChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["tooltip-position", "below", "matTooltipShowDelay", "500", 1, "igo-form-button-group", 3, "matTooltip"], ["mat-raised-button", "", "type", "button", 3, "disabled", "click"], [3, "shown"], ["hidden", "", "type", "file", 3, "click", "change"], ["fileInput", ""], [3, "value", "click"], ["mat-line", "", 4, "ngIf"], ["mat-line", ""], [1, "mat-typography"], ["multiple", "", 3, "value", "valueChange"], ["class", "export-select-trigger", 4, "ngIf"], [3, "ngClass", "value", "click", 4, "ngFor", "ngForOf"], ["formControlName", "format"], [4, "ngIf"], ["disabled", "true", 4, "ngIf"], ["class", "igo-input-container", 4, "ngIf"], ["class", "export-combine-layers mat-typography", 4, "ngIf"], ["class", "export-separator mat-typography", 4, "ngIf"], ["class", "export-options mat-typography", 4, "ngIf"], [1, "igo-form-button-group"], [1, "export-select-trigger"], [3, "ngClass", "value", "click"], [3, "labelPosition", "click", "checked", "change", 4, "ngIf"], [3, "labelPosition", "click", "checked", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["disabled", "true"], ["matInput", "", "formControlName", "name", 3, "placeholder"], ["formControlName", "encoding"], [1, "export-combine-layers", "mat-typography"], ["formControlName", "combineLayers", 3, "labelPosition"], [1, "export-separator", "mat-typography"], ["formControlName", "separator", 3, "labelPosition"], [1, "export-options", "mat-typography"], ["formControlName", "featureInMapExtent", 3, "labelPosition"]], template: function ImportExportComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-button-toggle-group", 1);
        i0.ɵɵlistener("change", function ImportExportComponent_Template_mat_button_toggle_group_change_1_listener($event) { return ctx.onImportExportChange($event); });
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
        i0.ɵɵtemplate(8, ImportExportComponent_form_8_Template, 20, 24, "form", 3);
        i0.ɵɵtemplate(9, ImportExportComponent_section_9_Template, 14, 15, "section", 4);
        i0.ɵɵtemplate(10, ImportExportComponent_section_10_Template, 4, 3, "section", 4);
        i0.ɵɵpipe(11, "async");
        i0.ɵɵtemplate(12, ImportExportComponent_form_12_Template, 36, 37, "form", 3);
        i0.ɵɵpipe(13, "async");
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.selectedMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", "import");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 9, "igo.geo.importExportForm.importTabTitle"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", "export");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 11, "igo.geo.importExportForm.exportTabTitle"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.selectedMode === "import");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectedMode === "import");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(11, 13, ctx.exportableLayers$).length === 0 && ctx.selectedMode === "export");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(13, 15, ctx.exportableLayers$).length > 0 && ctx.selectedMode === "export");
    } }, directives: [i8.MatButtonToggleGroup, i8.MatButtonToggle, i9.NgIf, i6.ɵNgNoValidate, i6.NgControlStatusGroup, i6.FormGroupDirective, i10.MatFormField, i10.MatLabel, i11.MatSelect, i9.NgForOf, i12.MatTooltip, i13.MatButton, i14.SpinnerComponent, i15.MatOption, i11.MatSelectTrigger, i6.NgControlStatus, i6.FormControlName, i9.NgClass, i16.MatSlideToggle, i17.MatInput, i6.DefaultValueAccessor], pipes: [i18.TranslatePipe, i9.AsyncPipe, i14.KeyValuePipe], styles: ["mat-option.igo-export-layer-mat-option[_ngcontent-%COMP%]{height:5em;line-height:1em}.import-export-toggle[_ngcontent-%COMP%]{padding:10px;text-align:center}.import-export-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{width:100%}.import-export-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:50%}h4[_ngcontent-%COMP%]{padding:0 5px}.igo-form[_ngcontent-%COMP%]{padding:15px 5px}.igo-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center;padding-top:10px}igo-spinner[_ngcontent-%COMP%]{position:absolute;padding-left:10px}.export-options[_ngcontent-%COMP%], .export-combine-layers[_ngcontent-%COMP%], .export-separator[_ngcontent-%COMP%]{overflow-x:hidden}.export-options[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%], .export-combine-layers[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%], .export-separator[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{width:100%;margin:10px}.export-options[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-content, .export-combine-layers[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-content, .export-separator[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-content{width:calc(100% - 60px)}.export-select-trigger[_ngcontent-%COMP%]{opacity:.75;font-size:.75em}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportExportComponent, [{
        type: Component,
        args: [{
                selector: 'igo-import-export',
                templateUrl: './import-export.component.html',
                styleUrls: ['./import-export.component.scss']
            }]
    }], function () { return [{ type: i1.ImportService }, { type: i2.ExportService }, { type: i3.LanguageService }, { type: i3.MessageService }, { type: i4.StyleListService }, { type: i5.StyleService }, { type: i6.FormBuilder }, { type: i3.ConfigService }, { type: i0.ChangeDetectorRef }, { type: i3.StorageService }, { type: i7.DownloadService }]; }, { selectFirstProj: [{
            type: Input
        }], map: [{
            type: Input
        }], projectionsLimitations: [{
            type: Input
        }], store: [{
            type: Input
        }], selectedMode: [{
            type: Input
        }], selectMode: [{
            type: Output
        }], exportOptions$: [{
            type: Input
        }], exportOptionsChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9pbXBvcnQtZXhwb3J0L2ltcG9ydC1leHBvcnQvaW1wb3J0LWV4cG9ydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9pbXBvcnQtZXhwb3J0L2ltcG9ydC1leHBvcnQvaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFRckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUl0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUUzRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHckUsT0FBTyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN4QixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3RCLE1BQU0sd0JBQXdCLENBQUM7QUFHaEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdC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QUVVOztRQUVWLDRFQXdHTzs7O1FBdktDLGVBQXNCO1FBQXRCLHdDQUFzQjtRQUVILGVBQWtCO1FBQWxCLGdDQUFrQjtRQUNuQyxlQUNGO1FBREUsZ0dBQ0Y7UUFDbUIsZUFBa0I7UUFBbEIsZ0NBQWtCO1FBQ25DLGVBQ0Y7UUFERSxpR0FDRjtRQUl5QyxlQUErQjtRQUEvQixvREFBK0I7UUF1Qy9DLGVBQStCO1FBQS9CLG9EQUErQjtRQVMvQixlQUEyRTtRQUEzRSxrSEFBMkU7UUFJakUsZUFBeUU7UUFBekUsZ0hBQXlFOzt1RkREdkcscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QztrV0F1Q1UsZUFBZTtrQkFBdkIsS0FBSztZQUVHLEdBQUc7a0JBQVgsS0FBSztZQUlGLHNCQUFzQjtrQkFEekIsS0FBSztZQVlHLEtBQUs7a0JBQWIsS0FBSztZQUVHLFlBQVk7a0JBQXBCLEtBQUs7WUFFSSxVQUFVO2tCQUFuQixNQUFNO1lBRUUsY0FBYztrQkFBdEIsS0FBSztZQUlJLG1CQUFtQjtrQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgTWVzc2FnZVNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgQ29uZmlnU2VydmljZSxcbiAgU3RvcmFnZVNlcnZpY2Vcbn0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBzdHJFbnVtIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQvZmVhdHVyZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcC9zaGFyZWQvbWFwJztcbmltcG9ydCB7IENsdXN0ZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvY2x1c3Rlci1kYXRhc291cmNlJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9sYXllcic7XG5pbXBvcnQgeyBWZWN0b3JMYXllciB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9sYXllcnMvdmVjdG9yLWxheWVyJztcbmltcG9ydCB7IEFueUxheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9hbnktbGF5ZXInO1xuaW1wb3J0IHsgRGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy9kYXRhc291cmNlLmludGVyZmFjZSc7XG5pbXBvcnQgb2xQb2ludCBmcm9tICdvbC9nZW9tL1BvaW50JztcbmltcG9ydCB7IGNpcmN1bGFyIH0gZnJvbSAnb2wvZ2VvbS9Qb2x5Z29uJztcblxuaW1wb3J0IHtcbiAgaGFuZGxlRmlsZUV4cG9ydEVycm9yLFxuICBoYW5kbGVGaWxlRXhwb3J0U3VjY2Vzc1xufSBmcm9tICcuLi9zaGFyZWQvZXhwb3J0LnV0aWxzJztcbmltcG9ydCB7IEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuLi9zaGFyZWQvZXhwb3J0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBFeHBvcnRGb3JtYXQsIEVuY29kaW5nRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL2V4cG9ydC50eXBlJztcbmltcG9ydCB7IEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1wb3J0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9pbXBvcnQuc2VydmljZSc7XG5pbXBvcnQge1xuICBoYW5kbGVGaWxlSW1wb3J0U3VjY2VzcyxcbiAgaGFuZGxlRmlsZUltcG9ydEVycm9yXG59IGZyb20gJy4uL3NoYXJlZC9pbXBvcnQudXRpbHMnO1xuaW1wb3J0IHsgU3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL3N0eWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R5bGVMaXN0U2VydmljZSB9IGZyb20gJy4uL3N0eWxlLWxpc3Qvc3R5bGUtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IHNraXBXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVudGl0eVJlY29yZCwgV29ya3NwYWNlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB0eXBlIHsgV29ya3NwYWNlU3RvcmUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgV2ZzV29ya3NwYWNlIH0gZnJvbSAnLi4vLi4vd29ya3NwYWNlL3NoYXJlZC93ZnMtd29ya3NwYWNlJztcbmltcG9ydCB7IEVkaXRpb25Xb3Jrc3BhY2UgfSBmcm9tICcuLi8uLi93b3Jrc3BhY2Uvc2hhcmVkL2VkaXRpb24td29ya3NwYWNlJztcbmltcG9ydCB7IEZlYXR1cmVXb3Jrc3BhY2UgfSBmcm9tICcuLi8uLi93b3Jrc3BhY2Uvc2hhcmVkL2ZlYXR1cmUtd29ya3NwYWNlJztcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7IElucHV0UHJvamVjdGlvbnMsIFByb2plY3Rpb25zTGltaXRhdGlvbnNPcHRpb25zIH0gZnJvbSAnLi4vLi4vbWFwLyc7XG5pbXBvcnQgeyBEb3dubG9hZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9kb3dubG9hZC9zaGFyZWQvZG93bmxvYWQuc2VydmljZSc7XG5pbXBvcnQgeyBjb21wdXRlUHJvamVjdGlvbnNDb25zdHJhaW50cyB9IGZyb20gJy4uLy4uL21hcCc7XG5cbmltcG9ydCBvbFZlY3RvclNvdXJjZSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcbmltcG9ydCBvbENsdXN0ZXJTb3VyY2UgZnJvbSAnb2wvc291cmNlL0NsdXN0ZXInO1xuaW1wb3J0IHR5cGUgeyBkZWZhdWx0IGFzIE9sR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWltcG9ydC1leHBvcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltcG9ydC1leHBvcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbXBvcnRFeHBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBpbXBvcnRGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBmb3JtYXRzJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcbiAgcHVibGljIGVuY29kaW5ncyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gIHB1YmxpYyBleHBvcnRhYmxlTGF5ZXJzJDogQmVoYXZpb3JTdWJqZWN0PEFueUxheWVyW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChcbiAgICBbXVxuICApO1xuICBwdWJsaWMgbG9hZGluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcHVibGljIGZvcmNlTmFtaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBjb250cm9sRm9ybWF0ID0gJ2Zvcm1hdCc7XG5cbiAgcHJpdmF0ZSBsYXllcnMkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGV4cG9ydGFibGVMYXllcnMkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGZvcm1hdHMkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGVuY29kaW5ncyQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZm9ybUxheWVyJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBleHBvcnRPcHRpb25zJCQ6IFN1YnNjcmlwdGlvbjtcblxuXG4gIHByaXZhdGUgZXNwZ0NvZGVSZWdleCA9IG5ldyBSZWdFeHAoJ15cXFxcZHs0LDZ9Jyk7XG4gIHByaXZhdGUgY2xpZW50U2lkZUZpbGVTaXplTWF4OiBudW1iZXI7XG4gIHB1YmxpYyBmaWxlU2l6ZU1iOiBudW1iZXI7XG5cbiAgcHVibGljIHByb2plY3Rpb25zJDogQmVoYXZpb3JTdWJqZWN0PElucHV0UHJvamVjdGlvbnNbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgcHJpdmF0ZSBwcm9qZWN0aW9uc0NvbnN0cmFpbnRzOiBQcm9qZWN0aW9uc0xpbWl0YXRpb25zT3B0aW9ucztcblxuICBwdWJsaWMgcG9wdXBDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBwcmV2aW91c0xheWVyU3BlY3MkOiBCZWhhdmlvclN1YmplY3Q8XG4gICAge1xuICAgICAgaWQ6IHN0cmluZztcbiAgICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgICBvcGFjaXR5OiBudW1iZXI7XG4gICAgICBxdWVyeWFibGU6IGJvb2xlYW47XG4gICAgfVtdXG4gID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgQElucHV0KCkgc2VsZWN0Rmlyc3RQcm9qOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgcHJpdmF0ZSBfcHJvamVjdGlvbnNMaW1pdGF0aW9uczogUHJvamVjdGlvbnNMaW1pdGF0aW9uc09wdGlvbnMgPSB7fTtcbiAgQElucHV0KClcbiAgc2V0IHByb2plY3Rpb25zTGltaXRhdGlvbnModmFsdWU6IFByb2plY3Rpb25zTGltaXRhdGlvbnNPcHRpb25zKSB7XG4gICAgdGhpcy5fcHJvamVjdGlvbnNMaW1pdGF0aW9ucyA9IHZhbHVlO1xuICAgIHRoaXMuY29tcHV0ZVByb2plY3Rpb25zKCk7XG4gIH1cbiAgZ2V0IHByb2plY3Rpb25zTGltaXRhdGlvbnMoKTogUHJvamVjdGlvbnNMaW1pdGF0aW9uc09wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0aW9uc0xpbWl0YXRpb25zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIHRoYXQgaG9sZHMgdGhlIGF2YWlsYWJsZSB3b3Jrc3BhY2VzLlxuICAgKi9cbiAgQElucHV0KCkgc3RvcmU6IFdvcmtzcGFjZVN0b3JlO1xuXG4gIEBJbnB1dCgpIHNlbGVjdGVkTW9kZSA9ICdpbXBvcnQnO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQElucHV0KCkgZXhwb3J0T3B0aW9ucyQ6IEJlaGF2aW9yU3ViamVjdDxFeHBvcnRPcHRpb25zPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoXG4gICAgdW5kZWZpbmVkXG4gICk7XG5cbiAgQE91dHB1dCgpIGV4cG9ydE9wdGlvbnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEV4cG9ydE9wdGlvbnM+KCk7XG5cbiAgZ2V0IGxheWVycygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmdldCgnbGF5ZXJzJykudmFsdWU7XG4gIH1cbiAgc2V0IGxheWVycyh2YWx1ZSkge1xuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHsgbGF5ZXJzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIGdldCBpbnB1dFByb2ooKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wb3J0Rm9ybS5nZXQoJ2lucHV0UHJvaicpLnZhbHVlO1xuICB9XG4gIHNldCBpbnB1dFByb2oodmFsdWUpIHtcbiAgICB0aGlzLmltcG9ydEZvcm0ucGF0Y2hWYWx1ZSh7IGlucHV0UHJvajogdmFsdWUgfSk7XG4gIH1cblxuICBnZXQgcG9wdXBBbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnaW1wb3J0RXhwb3J0UG9wdXBBbGxvd2VkJykgYXMgYm9vbGVhbiB8fCBmYWxzZTtcbiAgfVxuXG4gIHNldCBwb3B1cEFsbG93ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgnaW1wb3J0RXhwb3J0UG9wdXBBbGxvd2VkJywgdmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbXBvcnRTZXJ2aWNlOiBJbXBvcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXhwb3J0U2VydmljZTogRXhwb3J0U2VydmljZSxcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3R5bGVMaXN0U2VydmljZTogU3R5bGVMaXN0U2VydmljZSxcbiAgICBwcml2YXRlIHN0eWxlU2VydmljZTogU3R5bGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZG93bmxvYWRTZXJ2aWNlOiBEb3dubG9hZFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5sb2FkQ29uZmlnKCk7XG4gICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgICB0aGlzLmNvbXB1dGVQcm9qZWN0aW9ucygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXllcnMkJCA9IHRoaXMubWFwLmxheWVycyQuc3Vic2NyaWJlKChsYXllcnMpID0+IHtcbiAgICAgIHRoaXMuZXhwb3J0YWJsZUxheWVycyQubmV4dChcbiAgICAgICAgbGF5ZXJzLmZpbHRlcigobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChsYXllciBpbnN0YW5jZW9mIFZlY3RvckxheWVyICYmIGxheWVyLmV4cG9ydGFibGUgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAobGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmRvd25sb2FkICYmXG4gICAgICAgICAgICAgIGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5kb3dubG9hZC51cmwpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSkgYXMgQW55TGF5ZXJbXVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBjb25maWdGaWxlU2l6ZU1iID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKFxuICAgICAgJ2ltcG9ydEV4cG9ydC5jbGllbnRTaWRlRmlsZVNpemVNYXhNYidcbiAgICApO1xuICAgIHRoaXMuY2xpZW50U2lkZUZpbGVTaXplTWF4ID1cbiAgICAgIChjb25maWdGaWxlU2l6ZU1iID8gY29uZmlnRmlsZVNpemVNYiA6IDMwKSAqIE1hdGgucG93KDEwMjQsIDIpO1xuICAgIHRoaXMuZmlsZVNpemVNYiA9IHRoaXMuY2xpZW50U2lkZUZpbGVTaXplTWF4IC8gTWF0aC5wb3coMTAyNCwgMik7XG5cbiAgICB0aGlzLmV4cG9ydE9wdGlvbnMkJCA9IHRoaXMuZXhwb3J0T3B0aW9ucyRcbiAgICAgIC5waXBlKHNraXBXaGlsZSgoZXhwb3J0T3B0aW9ucykgPT4gIWV4cG9ydE9wdGlvbnMpKVxuICAgICAgLnN1YnNjcmliZSgoZXhwb3J0T3B0aW9ucykgPT4ge1xuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZShleHBvcnRPcHRpb25zLCB7IGVtaXRFdmVudDogdHJ1ZSB9KTtcbiAgICAgICAgaWYgKGV4cG9ydE9wdGlvbnMubGF5ZXJzKSB7XG4gICAgICAgICAgdGhpcy5jb21wdXRlRm9ybWF0cyhcbiAgICAgICAgICAgIGV4cG9ydE9wdGlvbnMubGF5ZXJzLm1hcCgobCkgPT4gdGhpcy5tYXAuZ2V0TGF5ZXJCeUlkKGwpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHRoaXMuZm9ybUxheWVyJCQgPSB0aGlzLmZvcm1cbiAgICAgIC5nZXQoJ2Zvcm1hdCcpXG4gICAgICAudmFsdWVDaGFuZ2VzXG4gICAgICAuc3Vic2NyaWJlKChmb3JtYXQpID0+IHtcbiAgICAgICAgY29uc3Qgb2dyZUZvcm1hdHMgPSBPYmplY3Qua2V5cyhFeHBvcnRTZXJ2aWNlLm9ncmVGb3JtYXRzKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLnBvcHVwQ2hlY2tlZCAmJlxuICAgICAgICAgIHRoaXMuZm9ybS5nZXQoJ2xheWVycycpLnZhbHVlPy5sZW5ndGggPiAxICYmXG4gICAgICAgICAgKG9ncmVGb3JtYXRzLmluZGV4T2YoZm9ybWF0KSA+PSAwIHx8IGZvcm1hdCA9PT0gRXhwb3J0Rm9ybWF0LlVSTCkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlUG9wdXAodHJ1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHsgZm9ybWF0OiB1bmRlZmluZWQgfSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmZvcm1MYXllciQkID0gdGhpcy5mb3JtXG4gICAgICAuZ2V0KCdsYXllcnMnKVxuICAgICAgLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGxheWVyc0lkKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUHJldmlvdXNMYXllclNwZWNzKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTGF5ZXJzID0gbGF5ZXJzSWQgaW5zdGFuY2VvZiBBcnJheSA/IGxheWVyc0lkIDogW2xheWVyc0lkXTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBsYXllcnM6IHNlbGVjdGVkTGF5ZXJzIH0sIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgY29uc3QgbGF5ZXJzID0gc2VsZWN0ZWRMYXllcnMubWFwKChsKSA9PiB0aGlzLm1hcC5nZXRMYXllckJ5SWQobCkpO1xuICAgICAgICB0aGlzLmNvbXB1dGVGb3JtYXRzKGxheWVycyk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZm9ybWF0cyQudmFsdWUpLmluZGV4T2YodGhpcy5mb3JtLnZhbHVlLmZvcm1hdCkgPT09XG4gICAgICAgICAgLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBmb3JtYXQ6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGluZyQubmV4dCh0cnVlKTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNTcGVjczoge1xuICAgICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICAgICAgICBvcGFjaXR5OiBudW1iZXI7XG4gICAgICAgICAgcXVlcnlhYmxlOiBib29sZWFuO1xuICAgICAgICB9W10gPSBbXTtcbiAgICAgICAgbGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbGF5ZXIgaW5zdGFuY2VvZiBWZWN0b3JMYXllciAmJlxuICAgICAgICAgICAgbGF5ZXIuZGF0YVNvdXJjZS5vbC5nZXRGZWF0dXJlcygpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJldmlvdXNTcGVjcy5wdXNoKHtcbiAgICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgICB2aXNpYmxlOiBsYXllci52aXNpYmxlLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBsYXllci5vcGFjaXR5LFxuICAgICAgICAgICAgICBxdWVyeWFibGU6IChsYXllciBhcyBhbnkpLnF1ZXJ5YWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsYXllci5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0xheWVyU3BlY3MkLm5leHQocHJldmlvdXNTcGVjcyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyQubmV4dChmYWxzZSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZm9ybWF0cyQkID0gdGhpcy5mb3JtYXRzJFxuICAgICAgLnBpcGUoc2tpcFdoaWxlKChmb3JtYXRzKSA9PiAhZm9ybWF0cykpXG4gICAgICAuc3Vic2NyaWJlKChmb3JtYXRzKSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhmb3JtYXRzKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7IGZvcm1hdDogZm9ybWF0c1tPYmplY3Qua2V5cyhmb3JtYXRzKVswXV0gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5lbmNvZGluZ3MkJCA9IHRoaXMuZW5jb2RpbmdzJFxuICAgICAgLnBpcGUoc2tpcFdoaWxlKChlbmNvZGluZ3MpID0+ICFlbmNvZGluZ3MpKVxuICAgICAgLnN1YnNjcmliZSgoZW5jb2RpbmdzKSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhlbmNvZGluZ3MpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHsgZW5jb2Rpbmc6IGVuY29kaW5nc1tPYmplY3Qua2V5cyhlbmNvZGluZ3MpWzBdXSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmV4cG9ydGFibGVMYXllcnMkJCA9IHRoaXMuZXhwb3J0YWJsZUxheWVycyRcbiAgICAgIC5waXBlKHNraXBXaGlsZSgobGF5ZXJzKSA9PiAhbGF5ZXJzKSlcbiAgICAgIC5zdWJzY3JpYmUoKGxheWVycykgPT4ge1xuICAgICAgICBpZiAobGF5ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHsgbGF5ZXJzOiBsYXllcnNbMF0uaWQgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbEZvcm1hdF0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZm9ybWF0KSA9PiB7XG4gICAgICBpZiAoZm9ybWF0ID09PSBFeHBvcnRGb3JtYXQuQ1NWY29tbWEgfHwgZm9ybWF0ID09PSBFeHBvcnRGb3JtYXQuQ1NWc2VtaWNvbG9uKSB7XG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHsgZW5jb2Rpbmc6IEVuY29kaW5nRm9ybWF0LkxBVElOMSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHsgZW5jb2Rpbmc6IEVuY29kaW5nRm9ybWF0LlVURjggfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnNlbGVjdEZpcnN0UHJvaikge1xuICAgICAgaWYgKHRoaXMucHJvamVjdGlvbnMkLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmltcG9ydEZvcm0ucGF0Y2hWYWx1ZSh7IGlucHV0UHJvajogeyB0cmFuc2xhdGVLZXk6ICduYWQ4MycsIGFsaWFzOiAnTkFEODMnLCBjb2RlOiAnRVBTRzo0MzI2Jywgem9uZTogJycgfSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW1wb3J0Rm9ybS5wYXRjaFZhbHVlKHsgaW5wdXRQcm9qOiB0aGlzLnByb2plY3Rpb25zJC52YWx1ZVswXSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbXBvcnRGb3JtLnBhdGNoVmFsdWUoeyBpbnB1dFByb2o6IHVuZGVmaW5lZCB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVQcm9qZWN0aW9ucygpIHtcbiAgICB0aGlzLnByb2plY3Rpb25zQ29uc3RyYWludHMgPSBjb21wdXRlUHJvamVjdGlvbnNDb25zdHJhaW50cyh0aGlzLnByb2plY3Rpb25zTGltaXRhdGlvbnMpO1xuICAgIGNvbnN0IHByb2plY3Rpb25zOiBJbnB1dFByb2plY3Rpb25zW10gPSBbXTtcblxuICAgIGlmICh0aGlzLnByb2plY3Rpb25zQ29uc3RyYWludHMubmFkODMpIHtcbiAgICAgIHByb2plY3Rpb25zLnB1c2goeyB0cmFuc2xhdGVLZXk6ICduYWQ4MycsIGFsaWFzOiAnTkFEODMnLCBjb2RlOiAnRVBTRzo0MjY5Jywgem9uZTogJycgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb2plY3Rpb25zQ29uc3RyYWludHMud2dzODQpIHtcbiAgICAgIHByb2plY3Rpb25zLnB1c2goeyB0cmFuc2xhdGVLZXk6ICd3Z3M4NCcsIGFsaWFzOiAnV0dTODQnLCBjb2RlOiAnRVBTRzo0MzI2Jywgem9uZTogJycgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb2plY3Rpb25zQ29uc3RyYWludHMud2ViTWVyY2F0b3IpIHtcbiAgICAgIHByb2plY3Rpb25zLnB1c2goeyB0cmFuc2xhdGVLZXk6ICd3ZWJNZXJjYXRvcicsIGFsaWFzOiAnV2ViIE1lcmNhdG9yJywgY29kZTogJ0VQU0c6Mzg1NycsIHpvbmU6ICcnIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2plY3Rpb25zQ29uc3RyYWludHMubXRtKSB7XG4gICAgICAvLyBhbGwgbXRtIHpvbmVzXG4gICAgICBjb25zdCBtaW5ab25lID0gdGhpcy5wcm9qZWN0aW9uc0NvbnN0cmFpbnRzLm10bVpvbmUubWluWm9uZTtcbiAgICAgIGNvbnN0IG1heFpvbmUgPSB0aGlzLnByb2plY3Rpb25zQ29uc3RyYWludHMubXRtWm9uZS5tYXhab25lO1xuXG4gICAgICBmb3IgKGxldCBtdG1ab25lID0gbWluWm9uZTsgbXRtWm9uZSA8PSBtYXhab25lOyBtdG1ab25lKyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IG10bVpvbmUgPCAxMCA/IGBFUFNHOjMyMTgke210bVpvbmV9YCA6IGBFUFNHOjMyMSR7ODAgKyBtdG1ab25lfWA7XG4gICAgICAgIHByb2plY3Rpb25zLnB1c2goeyB0cmFuc2xhdGVLZXk6ICdtdG0nLCBhbGlhczogYE1UTSAke210bVpvbmV9YCwgY29kZSwgem9uZTogYCR7bXRtWm9uZX1gIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2plY3Rpb25zQ29uc3RyYWludHMudXRtKSB7XG4gICAgICAvLyBhbGwgdXRtIHpvbmVzXG4gICAgICBjb25zdCBtaW5ab25lID0gdGhpcy5wcm9qZWN0aW9uc0NvbnN0cmFpbnRzLnV0bVpvbmUubWluWm9uZTtcbiAgICAgIGNvbnN0IG1heFpvbmUgPSB0aGlzLnByb2plY3Rpb25zQ29uc3RyYWludHMudXRtWm9uZS5tYXhab25lO1xuXG4gICAgICBmb3IgKGxldCB1dG1ab25lID0gbWluWm9uZTsgdXRtWm9uZSA8PSBtYXhab25lOyB1dG1ab25lKyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IHV0bVpvbmUgPCAxMCA/IGBFUFNHOjMyNjAke3V0bVpvbmV9YCA6IGBFUFNHOjMyNiR7dXRtWm9uZX1gO1xuICAgICAgICBwcm9qZWN0aW9ucy5wdXNoKHsgdHJhbnNsYXRlS2V5OiAndXRtJywgYWxpYXM6IGBVVE0gJHt1dG1ab25lfWAsIGNvZGUsIHpvbmU6IGAke3V0bVpvbmV9YCB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29uZmlnUHJvamVjdGlvbiA9IFtdO1xuICAgIGlmICh0aGlzLnByb2plY3Rpb25zQ29uc3RyYWludHMucHJvakZyb21Db25maWcpIHtcbiAgICAgIGNvbmZpZ1Byb2plY3Rpb24gPSB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ3Byb2plY3Rpb25zJykgfHwgW107XG4gICAgfVxuXG4gICAgdGhpcy5wcm9qZWN0aW9ucyQubmV4dChjb25maWdQcm9qZWN0aW9uLmNvbmNhdChwcm9qZWN0aW9ucykpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXb3Jrc3BhY2VCeUxheWVySWQoaWQ6IHN0cmluZyk6IFdvcmtzcGFjZSB7XG4gICAgY29uc3Qgd2tzRnJvbUxheWVySWQgPSB0aGlzLnN0b3JlXG4gICAgICAuYWxsKClcbiAgICAgIC5maW5kKHdvcmtzcGFjZSA9PiAod29ya3NwYWNlIGFzIFdmc1dvcmtzcGFjZSB8IEZlYXR1cmVXb3Jrc3BhY2UgfCBFZGl0aW9uV29ya3NwYWNlKS5sYXllci5pZCA9PT0gaWQpO1xuICAgIGlmICh3a3NGcm9tTGF5ZXJJZCkge1xuICAgICAgcmV0dXJuIHdrc0Zyb21MYXllcklkO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwdWJsaWMgZ2V0TGF5ZXJUaXRsZUJ5SWQoaWQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1hcC5nZXRMYXllckJ5SWQoaWQpPy50aXRsZTtcbiAgfVxuXG5cbiAgbGF5ZXJIYXNTZWxlY3RlZEZlYXR1cmVzKGxheWVyOiBMYXllcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHdrc0Zyb21MYXllciA9IHRoaXMuZ2V0V29ya3NwYWNlQnlMYXllcklkKGxheWVyLmlkKTtcbiAgICBpZiAod2tzRnJvbUxheWVyKSB7XG4gICAgICBjb25zdCByZWNzID0gd2tzRnJvbUxheWVyLmVudGl0eVN0b3JlLnN0YXRlVmlld1xuICAgICAgICAuZmlyc3RCeSgocmVjb3JkOiBFbnRpdHlSZWNvcmQ8RmVhdHVyZT4pID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkLnN0YXRlLnNlbGVjdGVkID09PSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIHJldHVybiByZWNzID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbmx5U2VsZWN0ZWQoZXZlbnQ6IE1hdFNsaWRlVG9nZ2xlQ2hhbmdlLCBpZDogc3RyaW5nKSB7XG4gICAgbGV0IGxheWVyc1dpdGhTZWxlY3Rpb24gPSB0aGlzLmZvcm0udmFsdWUubGF5ZXJzV2l0aFNlbGVjdGlvbjtcbiAgICBpZiAoZXZlbnQuY2hlY2tlZCkge1xuICAgICAgbGF5ZXJzV2l0aFNlbGVjdGlvbi5wdXNoKGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5ZXJzV2l0aFNlbGVjdGlvbiA9IGxheWVyc1dpdGhTZWxlY3Rpb24uZmlsdGVyKGxheWVySWQgPT4gbGF5ZXJJZCAhPT0gaWQpO1xuICAgIH1cbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7IGxheWVyc1dpdGhTZWxlY3Rpb24gfSk7XG4gIH1cblxuICBwdWJsaWMgb25seVNlbGVjdGVkQ2xpY2soZXZlbnQsIGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mb3JtLnZhbHVlLmxheWVycy5maW5kKGxheWVySWQgPT4gbGF5ZXJJZCA9PT0gaWQpKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5MYXllcnNJZFRvRXhwb3J0U2VsZWN0aW9uT25seShsYXllcjogTGF5ZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbHVlLmxheWVyc1dpdGhTZWxlY3Rpb24uZmluZChsYXllcklkID0+IGxheWVySWQgPT09IGxheWVyLmlkKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubGF5ZXJzJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmV4cG9ydGFibGVMYXllcnMkJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZm9ybWF0cyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5lbmNvZGluZ3MkJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZm9ybUxheWVyJCQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5leHBvcnRPcHRpb25zJCQpIHtcbiAgICAgIHRoaXMuZXhwb3J0T3B0aW9ucyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuZXhwb3J0T3B0aW9uc0NoYW5nZS5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgdGhpcy5oYW5kbGVQcmV2aW91c0xheWVyU3BlY3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUHJldmlvdXNMYXllclNwZWNzKCkge1xuICAgIGNvbnN0IHByZXZpb3VzU3BlY3MgPSB0aGlzLnByZXZpb3VzTGF5ZXJTcGVjcyQudmFsdWU7XG4gICAgaWYgKHByZXZpb3VzU3BlY3MgJiYgcHJldmlvdXNTcGVjcy5sZW5ndGgpIHtcbiAgICAgIHByZXZpb3VzU3BlY3MuZm9yRWFjaCgoc3BlY3MpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNMYXllciA9IHRoaXMubWFwLmdldExheWVyQnlJZChzcGVjcy5pZCk7XG4gICAgICAgIHByZXZpb3VzTGF5ZXIudmlzaWJsZSA9IHNwZWNzLnZpc2libGU7XG4gICAgICAgIHByZXZpb3VzTGF5ZXIub3BhY2l0eSA9IHNwZWNzLm9wYWNpdHk7XG4gICAgICAgIChwcmV2aW91c0xheWVyIGFzIGFueSkucXVlcnlhYmxlID0gc3BlY3MucXVlcnlhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNMYXllclNwZWNzJC5uZXh0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBpbXBvcnRGaWxlcyhmaWxlczogRmlsZVtdKSB7XG4gICAgbGV0IGlucHV0UHJvaiA9IHRoaXMuaW5wdXRQcm9qLmNvZGU7XG4gICAgaWYgKHRoaXMuZXNwZ0NvZGVSZWdleC50ZXN0KGlucHV0UHJvaikpIHtcbiAgICAgIGlucHV0UHJvaiA9IGBFUFNHOiR7aW5wdXRQcm9qfWA7XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkaW5nJC5uZXh0KHRydWUpO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgdGhpcy5pbXBvcnRTZXJ2aWNlLmltcG9ydChmaWxlLCBpbnB1dFByb2opLnN1YnNjcmliZShcbiAgICAgICAgKGZlYXR1cmVzOiBGZWF0dXJlW10pID0+IHRoaXMub25GaWxlSW1wb3J0U3VjY2VzcyhmaWxlLCBmZWF0dXJlcyksXG4gICAgICAgIChlcnJvcjogRXJyb3IpID0+IHRoaXMub25GaWxlSW1wb3J0RXJyb3IoZmlsZSwgZXJyb3IpLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nJC5uZXh0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQb3B1cChwcmVDaGVjazogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHtcbiAgICBjb25zdCBwMSA9IHdpbmRvdy5vcGVuKCcnLCAncG9wdXAnLCAnd2lkdGg9MSwgaGVpZ2h0PTEnKTtcbiAgICBwMS5jbG9zZSgpO1xuICAgIGNvbnN0IHAyID0gd2luZG93Lm9wZW4oJycsICdwb3B1cCcsICd3aWR0aD0xLCBoZWlnaHQ9MScpO1xuICAgIGlmICghcDIgfHwgcDIuY2xvc2VkIHx8IHR5cGVvZiBwMi5jbG9zZWQgPT09ICd1bmRlZmluZWQnIHx8IHAyID09PSBudWxsKSB7XG4gICAgICB0aGlzLm9uUG9wdXBCbG9ja2VkRXJyb3IocHJlQ2hlY2spO1xuICAgICAgdGhpcy5wb3B1cEFsbG93ZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDIuY2xvc2UoKTtcbiAgICAgIHRoaXMucG9wdXBBbGxvd2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9wdXBDaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG9wdXBBbGxvd2VkO1xuICB9XG5cbiAgaGFuZGxlRXhwb3J0Rm9ybVN1Ym1pdChkYXRhOiBFeHBvcnRPcHRpb25zKSB7XG4gICAgdGhpcy5sb2FkaW5nJC5uZXh0KHRydWUpO1xuXG4gICAgY29uc3Qgb2dyZUZvcm1hdHMgPSBPYmplY3Qua2V5cyhFeHBvcnRTZXJ2aWNlLm9ncmVGb3JtYXRzKTtcbiAgICBpZiAoIXRoaXMucG9wdXBDaGVja2VkICYmIGRhdGEubGF5ZXJzLmxlbmd0aCA+IDEgJiZcbiAgICAgIChvZ3JlRm9ybWF0cy5pbmRleE9mKGRhdGEuZm9ybWF0KSA+PSAwIHx8IGRhdGEuZm9ybWF0ID09PSBFeHBvcnRGb3JtYXQuVVJMKSAmJiAhdGhpcy5wb3B1cEFsbG93ZWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlUG9wdXAoKTtcbiAgICB9XG5cbiAgICBsZXQgZ2VvbVR5cGVzQ1NWOiB7IGdlb21ldHJ5VHlwZTogc3RyaW5nLCBmZWF0dXJlczogYW55W10gfVtdID0gW107XG4gICAgbGV0IGZlYXR1cmVzQ1NWOiBhbnlbXSA9IFtdO1xuICAgIGxldCBmaWxlbmFtZTogc3RyaW5nID0gXCJcIjtcblxuICAgIGZvciAoY29uc3QgW2xheWVySW5kZXgsIGxheWVyXSBvZiBkYXRhLmxheWVycy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGxheSA9IHRoaXMubWFwLmdldExheWVyQnlJZChsYXllcik7XG4gICAgICBpZiAoIShkYXRhLmZvcm1hdCA9PT0gRXhwb3J0Rm9ybWF0LkNTVnNlbWljb2xvbiB8fCBkYXRhLmZvcm1hdCA9PT0gRXhwb3J0Rm9ybWF0LkNTVmNvbW1hKVxuICAgICAgfHwgIWRhdGEuY29tYmluZUxheWVycyB8fCBkYXRhLmxheWVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZmlsZW5hbWUgPSBsYXkudGl0bGU7XG4gICAgICAgIGlmIChkYXRhLm5hbWUpIHtcbiAgICAgICAgICBmaWxlbmFtZSA9IGRhdGEubmFtZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsZW5hbWUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5leHBvcnQuY29tYmluZWRMYXllcnMnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRTT3B0aW9uczogRGF0YVNvdXJjZU9wdGlvbnMgPSBsYXkuZGF0YVNvdXJjZS5vcHRpb25zO1xuICAgICAgaWYgKGRhdGEuZm9ybWF0ID09PSBFeHBvcnRGb3JtYXQuVVJMICYmIGRTT3B0aW9ucy5kb3dubG9hZCAmJiAoZFNPcHRpb25zLmRvd25sb2FkLnVybCB8fCBkU09wdGlvbnMuZG93bmxvYWQuZHluYW1pY1VybCkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gYmV0dGVyIGxvb2sgYW4gZmVlbFxuICAgICAgICAgIGNvbnN0IHVybCA9IGRTT3B0aW9ucy5kb3dubG9hZC51cmwgfHwgZFNPcHRpb25zLmRvd25sb2FkLmR5bmFtaWNVcmw7XG4gICAgICAgICAgdXJsLm1hdGNoKC9zZXJ2aWNlPXdmcy9naSkgPyB0aGlzLmRvd25sb2FkU2VydmljZS5vcGVuKGxheSkgOiB3aW5kb3cub3Blbih1cmwgLCAnX2JsYW5rJyk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nJC5uZXh0KGZhbHNlKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgd2tzID0gdGhpcy5nZXRXb3Jrc3BhY2VCeUxheWVySWQobGF5ZXIpO1xuICAgICAgbGV0IG9sRmVhdHVyZXM7XG4gICAgICBpZiAod2tzICYmIHdrcy5lbnRpdHlTdG9yZSAmJiB3a3MuZW50aXR5U3RvcmUuc3RhdGVWaWV3LmFsbCgpLmxlbmd0aCkge1xuXG4gICAgICAgIGlmIChkYXRhLmxheWVyc1dpdGhTZWxlY3Rpb24uaW5kZXhPZihsYXllcikgIT09IC0xICYmIGRhdGEuZmVhdHVyZUluTWFwRXh0ZW50KSB7XG4gICAgICAgICAgLy8gT25seSBleHBvcnQgc2VsZWN0ZWQgZmVhdHVyZSAmJiBpbnRvIG1hcCBleHRlbnRcbiAgICAgICAgICBvbEZlYXR1cmVzID0gd2tzLmVudGl0eVN0b3JlLnN0YXRlVmlldy5hbGwoKVxuICAgICAgICAgICAgLmZpbHRlcigoZTogRW50aXR5UmVjb3JkPG9iamVjdD4pID0+IGUuc3RhdGUuaW5NYXBFeHRlbnQgJiYgZS5zdGF0ZS5zZWxlY3RlZCkubWFwKGUgPT4gKGUuZW50aXR5IGFzIEZlYXR1cmUpLm9sKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmxheWVyc1dpdGhTZWxlY3Rpb24uaW5kZXhPZihsYXllcikgIT09IC0xICYmICFkYXRhLmZlYXR1cmVJbk1hcEV4dGVudCkge1xuICAgICAgICAgIC8vIE9ubHkgZXhwb3J0IHNlbGVjdGVkIGZlYXR1cmUgJiYgIChpbnRvIG1hcCBleHRlbnQgT1Igbm90KVxuICAgICAgICAgIG9sRmVhdHVyZXMgPSB3a3MuZW50aXR5U3RvcmUuc3RhdGVWaWV3LmFsbCgpXG4gICAgICAgICAgICAuZmlsdGVyKChlOiBFbnRpdHlSZWNvcmQ8b2JqZWN0PikgPT4gZS5zdGF0ZS5zZWxlY3RlZCkubWFwKGUgPT4gKGUuZW50aXR5IGFzIEZlYXR1cmUpLm9sKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmZlYXR1cmVJbk1hcEV4dGVudCkge1xuICAgICAgICAgIC8vIE9ubHkgaW50byBtYXAgZXh0ZW50XG4gICAgICAgICAgb2xGZWF0dXJlcyA9IHdrcy5lbnRpdHlTdG9yZS5zdGF0ZVZpZXcuYWxsKClcbiAgICAgICAgICAgIC5maWx0ZXIoKGU6IEVudGl0eVJlY29yZDxvYmplY3Q+KSA9PiBlLnN0YXRlLmluTWFwRXh0ZW50KS5tYXAoZSA9PiAoZS5lbnRpdHkgYXMgRmVhdHVyZSkub2wpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFsbCBmZWF0dXJlc1xuICAgICAgICAgIG9sRmVhdHVyZXMgPSB3a3MuZW50aXR5U3RvcmUuc3RhdGVWaWV3LmFsbCgpLm1hcChlID0+IChlLmVudGl0eSBhcyBGZWF0dXJlKS5vbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBvbCA9IGxheS5kYXRhU291cmNlLm9sIGFzIG9sVmVjdG9yU291cmNlPE9sR2VvbWV0cnk+IHwgb2xDbHVzdGVyU291cmNlIDtcbiAgICAgICAgaWYgKGRhdGEuZmVhdHVyZUluTWFwRXh0ZW50KSB7XG4gICAgICAgICAgb2xGZWF0dXJlcyA9IG9sLmdldEZlYXR1cmVzSW5FeHRlbnQoXG4gICAgICAgICAgICBsYXkubWFwLnZpZXdDb250cm9sbGVyLmdldEV4dGVudCgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbEZlYXR1cmVzID0gb2wuZ2V0RmVhdHVyZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5LmRhdGFTb3VyY2UgaW5zdGFuY2VvZiBDbHVzdGVyRGF0YVNvdXJjZSkge1xuICAgICAgICAgIG9sRmVhdHVyZXMgPSBvbEZlYXR1cmVzLmZsYXRNYXAoKGNsdXN0ZXI6IGFueSkgPT5cbiAgICAgICAgICAgIGNsdXN0ZXIuZ2V0KCdmZWF0dXJlcycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgICBsZXQgZ2VvbVR5cGVzOiB7IGdlb21ldHJ5VHlwZTogc3RyaW5nLCBmZWF0dXJlczogYW55W10gfVtdID0gW107XG4gICAgICBpZiAoZGF0YS5mb3JtYXQgPT09IEV4cG9ydEZvcm1hdC5TaGFwZWZpbGUgfHwgZGF0YS5mb3JtYXQgPT09IEV4cG9ydEZvcm1hdC5HUFgpIHtcbiAgICAgICAgb2xGZWF0dXJlcy5mb3JFYWNoKChvbEZlYXR1cmUpID0+IHtcbiAgICAgICAgICBjb25zdCBmZWF0dXJlR2VvbVR5cGUgPSBvbEZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCk7XG4gICAgICAgICAgY29uc3QgY3VycmVudEdlb21UeXBlID0gZ2VvbVR5cGVzLmZpbmQoZ2VvbVR5cGUgPT4gZ2VvbVR5cGUuZ2VvbWV0cnlUeXBlID09PSBmZWF0dXJlR2VvbVR5cGUpO1xuICAgICAgICAgIGlmIChjdXJyZW50R2VvbVR5cGUpIHtcbiAgICAgICAgICAgIGN1cnJlbnRHZW9tVHlwZS5mZWF0dXJlcy5wdXNoKG9sRmVhdHVyZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdlb21UeXBlcy5wdXNoKHsgZ2VvbWV0cnlUeXBlOiBmZWF0dXJlR2VvbVR5cGUsIGZlYXR1cmVzOiBbb2xGZWF0dXJlXSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VvbVR5cGVzID0gW3sgZ2VvbWV0cnlUeXBlOiAnJywgZmVhdHVyZXM6IG9sRmVhdHVyZXMgfV07XG4gICAgICB9XG5cbiAgICAgIGdlb21UeXBlcy5mb3JFYWNoKGdlb21UeXBlID0+IHtcbiAgICAgICAgZ2VvbVR5cGUuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgICBjb25zdCByYWRpdXM6IG51bWJlciA9IGZlYXR1cmUuZ2V0KCdyYWQnKTtcbiAgICAgICAgICBpZiAocmFkaXVzKSB7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXI0MzI2OiBBcnJheTxudW1iZXI+ID0gW2ZlYXR1cmUuZ2V0KCdsb25naXR1ZGUnKSwgZmVhdHVyZS5nZXQoJ2xhdGl0dWRlJyldO1xuICAgICAgICAgICAgY29uc3QgY2lyY2xlID0gY2lyY3VsYXIoY2VudGVyNDMyNiwgcmFkaXVzLCA1MDApO1xuICAgICAgICAgICAgY2lyY2xlLnRyYW5zZm9ybSgnRVBTRzo0MzI2JywgZmVhdHVyZS5nZXQoJ19wcm9qZWN0aW9uJykpO1xuICAgICAgICAgICAgZmVhdHVyZS5zZXRHZW9tZXRyeShjaXJjbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEuZm9ybWF0ID09PSBFeHBvcnRGb3JtYXQuR1BYKSB7XG4gICAgICAgIGNvbnN0IGdweEZlYXR1cmVDbnQgPSBnZW9tVHlwZXMubGVuZ3RoO1xuICAgICAgICBnZW9tVHlwZXMgPSBnZW9tVHlwZXMuZmlsdGVyKGdlb21UeXBlID0+IFsnTGluZVN0cmluZycsICdQb2ludCddLmluY2x1ZGVzKGdlb21UeXBlLmdlb21ldHJ5VHlwZSkpO1xuICAgICAgICBjb25zdCBncHhGZWF0dXJlQ250UG9pbnRPclBvbHkgPSBnZW9tVHlwZXMubGVuZ3RoO1xuICAgICAgICBpZiAoZ3B4RmVhdHVyZUNudCA+IGdweEZlYXR1cmVDbnRQb2ludE9yUG9seSkge1xuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZXhwb3J0LmdweC5lcnJvci5wb2x5LnRpdGxlJyk7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmV4cG9ydC5ncHguZXJyb3IucG9seS50ZXh0Jyk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5lcnJvcihtZXNzYWdlLCB0aXRsZSwgeyB0aW1lT3V0OiAyMDAwMCB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgoZGF0YS5mb3JtYXQgPT09IEV4cG9ydEZvcm1hdC5DU1ZzZW1pY29sb24gfHwgZGF0YS5mb3JtYXQgPT09IEV4cG9ydEZvcm1hdC5DU1Zjb21tYSkgJiYgZGF0YS5jb21iaW5lTGF5ZXJzKSB7XG4gICAgICAgIGdlb21UeXBlcy5mb3JFYWNoKGdlb21UeXBlID0+IGdlb21UeXBlc0NTVi5wdXNoKGdlb21UeXBlKSk7XG5cbiAgICAgICAgaWYgKGxheWVySW5kZXggIT09IGRhdGEubGF5ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgcHJldmlvdXNGZWF0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGdlb21UeXBlc0NTVi5mb3JFYWNoKGdlb21UeXBlID0+IHtcbiAgICAgICAgICAgIGdlb21UeXBlLmZlYXR1cmVzLmZvckVhY2goY3VycmVudEZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICBpZiAoZGF0YS5zZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNGZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZlYXR1cmUuZ2V0KCdfZmVhdHVyZVN0b3JlJykubGF5ZXIub3B0aW9ucy50aXRsZSAhPT1cbiAgICAgICAgICAgICAgICAgIHByZXZpb3VzRmVhdHVyZS5nZXQoJ19mZWF0dXJlU3RvcmUnKS5sYXllci5vcHRpb25zLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW1wdHlSb3dzID0gdGhpcy5jcmVhdGVUaXRsZUVtcHR5Um93cyhwcmV2aW91c0ZlYXR1cmUsIGN1cnJlbnRGZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXNDU1YucHVzaCh0aXRsZUVtcHR5Um93c1syXSk7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzQ1NWLnB1c2godGl0bGVFbXB0eVJvd3NbMF0pO1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlc0NTVi5wdXNoKHRpdGxlRW1wdHlSb3dzWzFdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbXB0eVJvd3MgPSB0aGlzLmNyZWF0ZVRpdGxlRW1wdHlSb3dzKGN1cnJlbnRGZWF0dXJlLCBjdXJyZW50RmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlc0NTVi5wdXNoKHRpdGxlRW1wdHlSb3dzWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmVhdHVyZXNDU1YucHVzaChjdXJyZW50RmVhdHVyZSk7XG4gICAgICAgICAgICAgIHByZXZpb3VzRmVhdHVyZSA9IGN1cnJlbnRGZWF0dXJlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGdlb21UeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nJC5uZXh0KGZhbHNlKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5leHBvcnQubm90aGluZy50aXRsZScpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZXhwb3J0Lm5vdGhpbmcudGV4dCcpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKG1lc3NhZ2UsIHRpdGxlLCB7IHRpbWVPdXQ6IDIwMDAwIH0pO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIShkYXRhLmZvcm1hdCA9PT0gRXhwb3J0Rm9ybWF0LkNTVnNlbWljb2xvbiB8fCBkYXRhLmZvcm1hdCA9PT0gRXhwb3J0Rm9ybWF0LkNTVmNvbW1hKSB8fCAhZGF0YS5jb21iaW5lTGF5ZXJzKSB7XG4gICAgICAgICAgZ2VvbVR5cGVzLm1hcChnZW9tVHlwZSA9PlxuICAgICAgICAgICAgdGhpcy5leHBvcnRTZXJ2aWNlLmV4cG9ydChnZW9tVHlwZS5mZWF0dXJlcywgZGF0YS5mb3JtYXQsIGZpbGVuYW1lICsgZ2VvbVR5cGUuZ2VvbWV0cnlUeXBlLCBkYXRhLmVuY29kaW5nLCB0aGlzLm1hcC5wcm9qZWN0aW9uKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKCkgPT4ge30sXG4gICAgICAgICAgICAgIChlcnJvcjogRXJyb3IpID0+IHRoaXMub25GaWxlRXhwb3J0RXJyb3IoZXJyb3IpLFxuICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkZpbGVFeHBvcnRTdWNjZXNzKCk7XG5cbiAgICAgICAgICAgICAgICBnZW9tVHlwZS5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jaXJjbGVUb1BvaW50KGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nJC5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKChkYXRhLmZvcm1hdCA9PT0gRXhwb3J0Rm9ybWF0LkNTVnNlbWljb2xvbiB8fCBkYXRhLmZvcm1hdCA9PT0gRXhwb3J0Rm9ybWF0LkNTVmNvbW1hKSAmJiBkYXRhLmNvbWJpbmVMYXllcnMpIHtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnQoZmVhdHVyZXNDU1YsIGRhdGEuZm9ybWF0LCBmaWxlbmFtZSwgZGF0YS5lbmNvZGluZywgdGhpcy5tYXAucHJvamVjdGlvbilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHt9LFxuICAgICAgICAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLm9uRmlsZUV4cG9ydEVycm9yKGVycm9yKSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25GaWxlRXhwb3J0U3VjY2VzcygpO1xuXG4gICAgICAgICAgZmVhdHVyZXNDU1YuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlVG9Qb2ludChmZWF0dXJlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMubG9hZGluZyQubmV4dChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUaXRsZUVtcHR5Um93cyhwcmV2aW91c0ZlYXR1cmUsIGN1cnJlbnRGZWF0dXJlKSB7XG4gICAgY29uc3QgdGl0bGVSb3cgPSBjdXJyZW50RmVhdHVyZS5jbG9uZSgpO1xuICAgIGNvbnN0IGhlYWRlclJvdyA9IGN1cnJlbnRGZWF0dXJlLmNsb25lKCk7XG4gICAgY29uc3QgZW1wdHlSb3cgPSBjdXJyZW50RmVhdHVyZS5jbG9uZSgpO1xuICAgIGNvbnN0IHByZXZpb3VzRmVhdHVyZUtleXM6IEFycmF5PHN0cmluZz4gPSBwcmV2aW91c0ZlYXR1cmUuZ2V0S2V5cygpO1xuICAgIGxldCBmaXJzdEtleVByZXZpb3VzOiBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwcmV2aW91c0ZlYXR1cmVLZXlzKSB7XG4gICAgICBpZiAocHJldmlvdXNGZWF0dXJlS2V5c1trZXldICE9PSAnZ2VvbWV0cnknKSB7XG4gICAgICAgIGZpcnN0S2V5UHJldmlvdXMgPSBwcmV2aW91c0ZlYXR1cmVLZXlzW2tleV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRGZWF0dXJlS2V5czogQXJyYXk8c3RyaW5nPiA9IGN1cnJlbnRGZWF0dXJlLmdldEtleXMoKTtcbiAgICBsZXQgZmlyc3RLZXlDdXJyZW50OiBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjdXJyZW50RmVhdHVyZUtleXMpIHtcbiAgICAgIGlmIChjdXJyZW50RmVhdHVyZUtleXNba2V5XSAhPT0gJ2dlb21ldHJ5Jykge1xuICAgICAgICBmaXJzdEtleUN1cnJlbnQgPSBjdXJyZW50RmVhdHVyZUtleXNba2V5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGFsbEtleXM6IEFycmF5PHN0cmluZz4gPSBjdXJyZW50RmVhdHVyZS5nZXRLZXlzKCk7XG4gICAgcHJldmlvdXNGZWF0dXJlS2V5cy5mb3JFYWNoKHByZXZpb3VzS2V5ID0+IHtcbiAgICAgIGlmIChhbGxLZXlzLmluY2x1ZGVzKHByZXZpb3VzS2V5KSAmJiBwcmV2aW91c0tleSAhPT0gZmlyc3RLZXlQcmV2aW91cykge1xuICAgICAgICBhbGxLZXlzLnB1c2gocHJldmlvdXNLZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFsbEtleXMudW5zaGlmdChmaXJzdEtleVByZXZpb3VzKTtcblxuICAgIGxldCBmaXJzdEtleUFsbDogc3RyaW5nID0gJyc7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgaWYgKGFsbEtleXNba2V5XSAhPT0gJ2dlb21ldHJ5Jykge1xuICAgICAgICBmaXJzdEtleUFsbCA9IGFsbEtleXNba2V5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGFsbEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgc2FtZUtleXM6IGJvb2xlYW4gPSBwcmV2aW91c0ZlYXR1cmVLZXlzLmxlbmd0aCA9PT0gY3VycmVudEZlYXR1cmVLZXlzLmxlbmd0aCAmJlxuICAgICAgcHJldmlvdXNGZWF0dXJlS2V5cy5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gY3VycmVudEZlYXR1cmVLZXlzW2luZGV4XSk7XG4gICAgICBpZiAoa2V5ID09PSBmaXJzdEtleUFsbCAmJiAhc2FtZUtleXMpIHtcbiAgICAgICAgdGl0bGVSb3cuc2V0KGtleSwgY3VycmVudEZlYXR1cmUuZ2V0KCdfZmVhdHVyZVN0b3JlJykubGF5ZXIub3B0aW9ucy50aXRsZSArIFwiID09PT09PT09PT09PT09PT5cIiwgdHJ1ZSk7XG4gICAgICAgIGhlYWRlclJvdy5zZXQoa2V5LCBrZXksIHRydWUpO1xuICAgICAgICBlbXB0eVJvdy51bnNldChrZXksIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IGZpcnN0S2V5QWxsICYmIHNhbWVLZXlzKSB7XG4gICAgICAgIHRpdGxlUm93LnNldChrZXksIGN1cnJlbnRGZWF0dXJlLmdldCgnX2ZlYXR1cmVTdG9yZScpLmxheWVyLm9wdGlvbnMudGl0bGUsIHRydWUpO1xuICAgICAgICBoZWFkZXJSb3cuc2V0KGtleSwga2V5LCB0cnVlKTtcbiAgICAgICAgZW1wdHlSb3cudW5zZXQoa2V5LCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBmaXJzdEtleUN1cnJlbnQpIHtcbiAgICAgICAgdGl0bGVSb3cuc2V0KGtleSwgY3VycmVudEZlYXR1cmUuZ2V0KCdfZmVhdHVyZVN0b3JlJykubGF5ZXIub3B0aW9ucy50aXRsZSwgdHJ1ZSk7XG4gICAgICAgIGhlYWRlclJvdy5zZXQoa2V5LCBrZXksIHRydWUpO1xuICAgICAgICBlbXB0eVJvdy51bnNldChrZXksIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgIT09ICdnZW9tZXRyeScpIHtcbiAgICAgICAgdGl0bGVSb3cudW5zZXQoa2V5LCB0cnVlKTtcbiAgICAgICAgaGVhZGVyUm93LnNldChrZXksIGtleSwgdHJ1ZSk7XG4gICAgICAgIGVtcHR5Um93LnVuc2V0KGtleSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZVJvdy51bnNldChrZXksIHRydWUpO1xuICAgICAgICBlbXB0eVJvdy51bnNldChrZXksIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShjdXJyZW50RmVhdHVyZUtleXMuaW5jbHVkZXMoa2V5KSkpIHtcbiAgICAgICAgaGVhZGVyUm93LnVuc2V0KGtleSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgdGl0bGVFbXB0eVJvd3MgPSBbdGl0bGVSb3csIGhlYWRlclJvdywgZW1wdHlSb3ddO1xuICAgIHJldHVybiB0aXRsZUVtcHR5Um93cztcbiAgfVxuXG4gIHByaXZhdGUgY2lyY2xlVG9Qb2ludChmZWF0dXJlKSB7XG4gICAgY29uc3QgcmFkaXVzOiBudW1iZXIgPSBmZWF0dXJlLmdldCgncmFkJyk7XG5cbiAgICBpZiAocmFkaXVzKSB7XG4gICAgICBjb25zdCBwb2ludCA9IG5ldyBvbFBvaW50KFtmZWF0dXJlLmdldCgnbG9uZ2l0dWRlJyksIGZlYXR1cmUuZ2V0KCdsYXRpdHVkZScpXSk7XG4gICAgICBwb2ludC50cmFuc2Zvcm0oJ0VQU0c6NDMyNicsIGZlYXR1cmUuZ2V0KCdfcHJvamVjdGlvbicpKTtcbiAgICAgIGZlYXR1cmUuc2V0R2VvbWV0cnkocG9pbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGb3JtKCkge1xuICAgIHRoaXMuaW1wb3J0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgaW5wdXRQcm9qOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmZvcmNlTmFtaW5nKSB7XG4gICAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgZm9ybWF0OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIGxheWVyczogW1tdLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICBsYXllcnNXaXRoU2VsZWN0aW9uOiBbW11dLFxuICAgICAgICBlbmNvZGluZzogW0VuY29kaW5nRm9ybWF0LlVURjgsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIGNvbWJpbmVMYXllcnM6IFt0cnVlLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICBzZXBhcmF0b3I6IFtmYWxzZSwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgZmVhdHVyZUluTWFwRXh0ZW50OiBbZmFsc2UsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIG5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBmb3JtYXQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgbGF5ZXJzOiBbW10sIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIGxheWVyc1dpdGhTZWxlY3Rpb246IFtbXV0sXG4gICAgICAgIGVuY29kaW5nOiBbRW5jb2RpbmdGb3JtYXQuVVRGOCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgY29tYmluZUxheWVyczogW3RydWUsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIHNlcGFyYXRvcjogW2ZhbHNlLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICBmZWF0dXJlSW5NYXBFeHRlbnQ6IFtmYWxzZSwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25GaWxlSW1wb3J0U3VjY2VzcyhmaWxlOiBGaWxlLCBmZWF0dXJlczogRmVhdHVyZVtdKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2ltcG9ydFdpdGhTdHlsZScpKSB7XG4gICAgICBoYW5kbGVGaWxlSW1wb3J0U3VjY2VzcyhcbiAgICAgICAgZmlsZSxcbiAgICAgICAgZmVhdHVyZXMsXG4gICAgICAgIHRoaXMubWFwLFxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlRmlsZUltcG9ydFN1Y2Nlc3MoXG4gICAgICAgIGZpbGUsXG4gICAgICAgIGZlYXR1cmVzLFxuICAgICAgICB0aGlzLm1hcCxcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZSxcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHRoaXMuc3R5bGVMaXN0U2VydmljZSxcbiAgICAgICAgdGhpcy5zdHlsZVNlcnZpY2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkZpbGVJbXBvcnRFcnJvcihmaWxlOiBGaWxlLCBlcnJvcjogRXJyb3IpIHtcbiAgICB0aGlzLmxvYWRpbmckLm5leHQoZmFsc2UpO1xuICAgIGhhbmRsZUZpbGVJbXBvcnRFcnJvcihcbiAgICAgIGZpbGUsXG4gICAgICBlcnJvcixcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UsXG4gICAgICB0aGlzLmxhbmd1YWdlU2VydmljZSxcbiAgICAgIHRoaXMuZmlsZVNpemVNYlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uUG9wdXBCbG9ja2VkRXJyb3IocHJlQ2hlY2s6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgdGhpcy5sb2FkaW5nJC5uZXh0KGZhbHNlKTtcbiAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5leHBvcnQucG9wdXBCbG9ja2VkLnRpdGxlJyk7XG4gICAgY29uc3QgZXh0cmFNZXNzYWdlID0gcHJlQ2hlY2sgP1xuICAgICAgdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZXhwb3J0LnBvcHVwQmxvY2tlZC5zZWxlY3RBZ2FpbicpIDpcbiAgICAgIHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmV4cG9ydC5wb3B1cEJsb2NrZWQucmV0cnknKTtcbiAgICBjb25zdCBtZXNzYWdlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZXhwb3J0LnBvcHVwQmxvY2tlZC50ZXh0JywgeyBleHRyYU1lc3NhZ2UgfSk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5lcnJvcihtZXNzYWdlLCB0aXRsZSwgeyB0aW1lT3V0OiAyMDAwMCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25GaWxlRXhwb3J0RXJyb3IoZXJyb3I6IEVycm9yKSB7XG4gICAgdGhpcy5sb2FkaW5nJC5uZXh0KGZhbHNlKTtcbiAgICBoYW5kbGVGaWxlRXhwb3J0RXJyb3IoZXJyb3IsIHRoaXMubWVzc2FnZVNlcnZpY2UsIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZENvbmZpZygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuZ2V0Q29uZmlnKCdpbXBvcnRFeHBvcnQuZm9yY2VOYW1pbmcnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZvcmNlTmFtaW5nID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdpbXBvcnRFeHBvcnQuZm9yY2VOYW1pbmcnKTtcbiAgICB9XG4gICAgdGhpcy5jb21wdXRlRm9ybWF0cygpO1xuICAgIHRoaXMubG9hZEVuY29kaW5ncygpO1xuICB9XG5cbiAgcHVibGljIGVuY29kaW5nRGVmYXVsdFZhbHVlKGZvcm1hdDogRXhwb3J0Rm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gRXhwb3J0Rm9ybWF0LkNTVmNvbW1hIHx8IGZvcm1hdCA9PT0gRXhwb3J0Rm9ybWF0LkNTVnNlbWljb2xvbikge1xuICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBlbmNvZGluZzogRW5jb2RpbmdGb3JtYXQuTEFUSU4xIH0pO1xuICAgICAgcmV0dXJuIEVuY29kaW5nRm9ybWF0LkxBVElOMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBlbmNvZGluZzogRW5jb2RpbmdGb3JtYXQuVVRGOCB9KTtcbiAgICAgIHJldHVybiBFbmNvZGluZ0Zvcm1hdC5VVEY4O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEVuY29kaW5ncygpIHtcbiAgICB0aGlzLmVuY29kaW5ncyQubmV4dChFbmNvZGluZ0Zvcm1hdCk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVGb3JtYXRzKGxheWVycz86IEFueUxheWVyW10pIHtcbiAgICBsZXQgYXBwbGllZGZvcm1hdHM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoRXhwb3J0Rm9ybWF0KTtcbiAgICBjb25zdCBmb3JtYXRzVHlwZSA9IHtcbiAgICAgIG9ubHlVcmw6IGZhbHNlLFxuICAgICAgb25seVZlY3RvcjogZmFsc2UsXG4gICAgICB2ZWN0b3JBbmRVcmw6IGZhbHNlLFxuICAgICAgY3VzdG9tTGlzdDogZmFsc2VcbiAgICB9O1xuICAgIGNvbnN0IGN1c3RvbUxpc3QgPSBbXTtcbiAgICBpZiAobGF5ZXJzICYmIGxheWVycy5sZW5ndGgpIHtcbiAgICAgIGxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgICBpZiAoIWxheWVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXllci5kYXRhU291cmNlLm9wdGlvbnMuZG93bmxvYWQ/LmFsbG93ZWRGb3JtYXRzKSB7XG4gICAgICAgICAgZm9ybWF0c1R5cGUuY3VzdG9tTGlzdCA9IHRydWU7XG4gICAgICAgICAgY3VzdG9tTGlzdC5wdXNoKHtsYXllcjogbGF5ZXIudGl0bGUsIGZvcm1hdHM6IHRoaXMudmFsaWRhdGVMaXN0Rm9ybWF0KGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5kb3dubG9hZC5hbGxvd2VkRm9ybWF0cyl9KTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAhKGxheWVyIGluc3RhbmNlb2YgVmVjdG9yTGF5ZXIpICYmXG4gICAgICAgICAgbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmRvd25sb2FkICYmXG4gICAgICAgICAgbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmRvd25sb2FkLnVybFxuICAgICAgICApIHtcbiAgICAgICAgICBmb3JtYXRzVHlwZS5vbmx5VXJsID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBsYXllci5kYXRhU291cmNlLm9wdGlvbnMuZG93bmxvYWQgJiZcbiAgICAgICAgICAobGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmRvd25sb2FkLnVybCB8fCBsYXllci5kYXRhU291cmNlLm9wdGlvbnMuZG93bmxvYWQuZHluYW1pY1VybClcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9ybWF0c1R5cGUudmVjdG9yQW5kVXJsID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXllciBpbnN0YW5jZW9mIFZlY3RvckxheWVyKSB7XG4gICAgICAgICAgZm9ybWF0c1R5cGUub25seVZlY3RvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZm9ybWF0c1R5cGUub25seVVybCA9PT0gdHJ1ZSAmJiBmb3JtYXRzVHlwZS5vbmx5VmVjdG9yID09PSBmYWxzZSkge1xuICAgICAgICBhcHBsaWVkZm9ybWF0cyA9IFsnVVJMJ107XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBmb3JtYXRzVHlwZS5vbmx5VmVjdG9yID09PSB0cnVlICYmXG4gICAgICAgIGZvcm1hdHNUeXBlLm9ubHlVcmwgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jb21wdXRlRm9ybWF0cygpOyAvLyByZXNldFxuICAgICAgICBpZiAoRXhwb3J0Rm9ybWF0LlVSTCBpbiB0aGlzLmZvcm1hdHMkLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybWF0cyQudmFsdWUpLmZpbHRlcihcbiAgICAgICAgICAgIChrZXkpID0+IGtleSAhPT0gJ1VSTCdcbiAgICAgICAgICApO1xuICAgICAgICAgIGFwcGxpZWRmb3JtYXRzID0ga2V5cztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZm9ybWF0c1R5cGUudmVjdG9yQW5kVXJsID09PSB0cnVlICYmXG4gICAgICAgIGZvcm1hdHNUeXBlLm9ubHlVcmwgPT09IGZhbHNlICYmXG4gICAgICAgIGZvcm1hdHNUeXBlLm9ubHlWZWN0b3IgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jb21wdXRlRm9ybWF0cygpOyAvLyByZXNldFxuICAgICAgICBpZiAoIShFeHBvcnRGb3JtYXQuVVJMIGluIHRoaXMuZm9ybWF0cyQudmFsdWUpKSB7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybWF0cyQudmFsdWUpO1xuICAgICAgICAgIGtleXMucHVzaCgnVVJMJyk7XG4gICAgICAgICAgYXBwbGllZGZvcm1hdHMgPSBrZXlzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2ltcG9ydEV4cG9ydC5mb3JtYXRzJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVkTGlzdEZvcm1hdCA9IHRoaXMudmFsaWRhdGVMaXN0Rm9ybWF0KFxuICAgICAgICB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2ltcG9ydEV4cG9ydC5mb3JtYXRzJylcbiAgICAgICk7XG4gICAgICBhcHBsaWVkZm9ybWF0cyA9IHZhbGlkYXRlZExpc3RGb3JtYXQ7XG4gICAgfVxuICAgIGlmIChmb3JtYXRzVHlwZS5jdXN0b21MaXN0KSB7XG4gICAgICBsZXQgY29tbW9uRm9ybWF0cztcbiAgICAgIGNvbnN0IGxheWVyc1dpdGhDdXN0b21Gb3JtYXRzID0gW107XG4gICAgICBsZXQgcHJldmlvdXNDdXN0b21MaXN0Rm9ybWF0cyA9IGN1c3RvbUxpc3RbMF0uZm9ybWF0cztcbiAgICAgIGN1c3RvbUxpc3QubWFwKGxpc3QgPT4ge1xuICAgICAgICBsYXllcnNXaXRoQ3VzdG9tRm9ybWF0cy5wdXNoKGxpc3QubGF5ZXIpO1xuICAgICAgICBjb21tb25Gb3JtYXRzID0gbGlzdC5mb3JtYXRzLmZpbHRlcih2YWx1ZSA9PiBwcmV2aW91c0N1c3RvbUxpc3RGb3JtYXRzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgIHByZXZpb3VzQ3VzdG9tTGlzdEZvcm1hdHMgPSBsaXN0LmZvcm1hdHM7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGZpbmFsRm9ybWF0cyA9IGNvbW1vbkZvcm1hdHMuZmlsdGVyKHZhbHVlID0+IGFwcGxpZWRmb3JtYXRzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICBpZiAoZmluYWxGb3JtYXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5mb3JtYXRzJC5uZXh0KHN0ckVudW0oZmluYWxGb3JtYXRzKSk7XG5cbiAgICAgICAgaWYgKGxheWVycyAmJiBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGxheWVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFsZXJ0KFxuICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5leHBvcnQuY3VzdG9tTGlzdC50ZXh0JywgeyB2YWx1ZTogbGF5ZXJzV2l0aEN1c3RvbUZvcm1hdHMuam9pbigpIH0pLFxuICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5leHBvcnQuY3VzdG9tTGlzdC50aXRsZScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtYXRzJC5uZXh0KFtdKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hbGVydChcbiAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5leHBvcnQubm9Gb3JtYXQudGV4dCcpLFxuICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmV4cG9ydC5ub0Zvcm1hdC50aXRsZScpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybWF0cyQubmV4dChzdHJFbnVtKGFwcGxpZWRmb3JtYXRzKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUxpc3RGb3JtYXQoZm9ybWF0czogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGZvcm1hdHNcbiAgICAgIC5maWx0ZXIoKGZvcm1hdCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZm9ybWF0LnRvVXBwZXJDYXNlKCkgPT09IEV4cG9ydEZvcm1hdC5DU1Zjb21tYS50b1VwcGVyQ2FzZSgpIHx8XG4gICAgICAgICAgZm9ybWF0LnRvVXBwZXJDYXNlKCkgPT09IEV4cG9ydEZvcm1hdC5DU1ZzZW1pY29sb24udG9VcHBlckNhc2UoKSB8fFxuICAgICAgICAgIGZvcm1hdC50b1VwcGVyQ2FzZSgpID09PSBFeHBvcnRGb3JtYXQuR01MLnRvVXBwZXJDYXNlKCkgfHxcbiAgICAgICAgICBmb3JtYXQudG9VcHBlckNhc2UoKSA9PT0gRXhwb3J0Rm9ybWF0LkdQWC50b1VwcGVyQ2FzZSgpIHx8XG4gICAgICAgICAgZm9ybWF0LnRvVXBwZXJDYXNlKCkgPT09IEV4cG9ydEZvcm1hdC5HZW9KU09OLnRvVXBwZXJDYXNlKCkgfHxcbiAgICAgICAgICBmb3JtYXQudG9VcHBlckNhc2UoKSA9PT0gRXhwb3J0Rm9ybWF0LktNTC50b1VwcGVyQ2FzZSgpIHx8XG4gICAgICAgICAgZm9ybWF0LnRvVXBwZXJDYXNlKCkgPT09IEV4cG9ydEZvcm1hdC5TaGFwZWZpbGUudG9VcHBlckNhc2UoKSB8fFxuICAgICAgICAgIGZvcm1hdC50b1VwcGVyQ2FzZSgpID09PSBFeHBvcnRGb3JtYXQuVVJMLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5tYXAoKGZvcm1hdCkgPT4ge1xuICAgICAgICBpZiAoZm9ybWF0LnRvVXBwZXJDYXNlKCkgPT09IEV4cG9ydEZvcm1hdC5DU1Zjb21tYS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgZm9ybWF0ID0gRXhwb3J0Rm9ybWF0LkNTVmNvbW1hO1xuICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdC50b1VwcGVyQ2FzZSgpID09PSBFeHBvcnRGb3JtYXQuQ1NWc2VtaWNvbG9uLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICBmb3JtYXQgPSBFeHBvcnRGb3JtYXQuQ1NWc2VtaWNvbG9uO1xuICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdC50b1VwcGVyQ2FzZSgpID09PSBFeHBvcnRGb3JtYXQuR01MLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICBmb3JtYXQgPSBFeHBvcnRGb3JtYXQuR01MO1xuICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdC50b1VwcGVyQ2FzZSgpID09PSBFeHBvcnRGb3JtYXQuR1BYLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICBmb3JtYXQgPSBFeHBvcnRGb3JtYXQuR1BYO1xuICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdC50b1VwcGVyQ2FzZSgpID09PSBFeHBvcnRGb3JtYXQuR2VvSlNPTi50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgZm9ybWF0ID0gRXhwb3J0Rm9ybWF0Lkdlb0pTT047XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0LnRvVXBwZXJDYXNlKCkgPT09IEV4cG9ydEZvcm1hdC5LTUwudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgIGZvcm1hdCA9IEV4cG9ydEZvcm1hdC5LTUw7XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0LnRvVXBwZXJDYXNlKCkgPT09IEV4cG9ydEZvcm1hdC5TaGFwZWZpbGUudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgIGZvcm1hdCA9IEV4cG9ydEZvcm1hdC5TaGFwZWZpbGU7XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtYXQudG9VcHBlckNhc2UoKSA9PT0gRXhwb3J0Rm9ybWF0LlVSTC50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgZm9ybWF0ID0gRXhwb3J0Rm9ybWF0LlVSTDtcbiAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtb2RlQ2hhbmdlZChtb2RlKSB7XG4gICAgdGhpcy5zZWxlY3RNb2RlLmVtaXQobW9kZSk7XG4gIH1cblxuICBwcml2YXRlIG9uRmlsZUV4cG9ydFN1Y2Nlc3MoKSB7XG4gICAgaGFuZGxlRmlsZUV4cG9ydFN1Y2Nlc3ModGhpcy5tZXNzYWdlU2VydmljZSwgdGhpcy5sYW5ndWFnZVNlcnZpY2UpO1xuICB9XG5cbiAgb25JbXBvcnRFeHBvcnRDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkTW9kZSA9IGV2ZW50LnZhbHVlO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaW1wb3J0LWV4cG9ydC10b2dnbGUgbWF0LXR5cG9ncmFwaHlcIj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwXG4gICAgICAgIFt2YWx1ZV09XCJzZWxlY3RlZE1vZGVcIlxuICAgICAgICAoY2hhbmdlKT1cIm9uSW1wb3J0RXhwb3J0Q2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgPG1hdC1idXR0b24tdG9nZ2xlIFt2YWx1ZV09XCInaW1wb3J0J1wiPlxuICAgICAgICAgIHt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5pbXBvcnRUYWJUaXRsZScgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgICAgICA8bWF0LWJ1dHRvbi10b2dnbGUgW3ZhbHVlXT1cIidleHBvcnQnXCI+XG4gICAgICAgICAge3snaWdvLmdlby5pbXBvcnRFeHBvcnRGb3JtLmV4cG9ydFRhYlRpdGxlJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG48L2Rpdj5cblxuPGZvcm0gY2xhc3M9XCJpZ28tZm9ybVwiIFtmb3JtR3JvdXBdPVwiaW1wb3J0Rm9ybVwiICpuZ0lmPVwic2VsZWN0ZWRNb2RlID09PSAnaW1wb3J0J1wiPlxuICA8ZGl2IGNsYXNzPVwiaWdvLWlucHV0LWNvbnRhaW5lclwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+e3snaWdvLmdlby5pbXBvcnRFeHBvcnRGb3JtLmltcG9ydFByb2pQbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fTwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgWyh2YWx1ZSldPVwiaW5wdXRQcm9qXCI+XG4gICAgICAgIDxtYXQtb3B0aW9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHByb2plY3Rpb24gb2YgKHByb2plY3Rpb25zJCB8IGFzeW5jKVwiXG4gICAgICAgICAgW3ZhbHVlXT1cInByb2plY3Rpb25cIlxuICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICAgICAgICA8cCBtYXQtbGluZSAqbmdJZj1cInByb2plY3Rpb24udHJhbnNsYXRlS2V5XCI+e3soJ2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5wcm9qZWN0aW9ucy4nICsgcHJvamVjdGlvbi50cmFuc2xhdGVLZXkpIHwgdHJhbnNsYXRlOiBwcm9qZWN0aW9ufX08L3A+XG4gICAgICAgICAgPHAgbWF0LWxpbmUgKm5nSWY9XCIhcHJvamVjdGlvbi50cmFuc2xhdGVLZXlcIj57e3Byb2plY3Rpb24uYWxpYXN9fTwvcD5cbiAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuXG4gIDxkaXZcbiAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgIFttYXRUb29sdGlwXT1cImltcG9ydEZvcm0uaW52YWxpZCA/ICgnaWdvLmdlby5pbXBvcnRFeHBvcnRGb3JtLnByb2plY3Rpb25zLmNob29zZScgfCB0cmFuc2xhdGUpIDogKCdpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0uaW1wb3J0QnV0dG9uJyB8IHRyYW5zbGF0ZSlcIlxuICAgIGNsYXNzPVwiaWdvLWZvcm0tYnV0dG9uLWdyb3VwXCI+XG4gICAgPGJ1dHRvblxuICAgICAgW2Rpc2FibGVkXT1cImltcG9ydEZvcm0uaW52YWxpZCB8fCAobG9hZGluZyQgfCBhc3luYylcIlxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgKGNsaWNrKT1cImZpbGVJbnB1dC5jbGljaygpXCI+XG4gICAgICAgIHt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5pbXBvcnRCdXR0b24nIHwgdHJhbnNsYXRlfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8aWdvLXNwaW5uZXIgW3Nob3duXT1cImxvYWRpbmckIHwgYXN5bmNcIj48L2lnby1zcGlubmVyPlxuICAgIDxpbnB1dFxuICAgICAgaGlkZGVuXG4gICAgICAjZmlsZUlucHV0XG4gICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICBbc3R5bGUuZGlzcGxheV09XCInbm9uZSdcIlxuICAgICAgKGNsaWNrKT1cImZpbGVJbnB1dC52YWx1ZSA9IG51bGxcIlxuICAgICAgKGNoYW5nZSk9XCJpbXBvcnRGaWxlcygkZXZlbnQudGFyZ2V0LmZpbGVzKVwiPlxuICA8L2Rpdj5cbjwvZm9ybT5cbjxzZWN0aW9uIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIiAqbmdJZj1cInNlbGVjdGVkTW9kZSA9PT0gJ2ltcG9ydCdcIj5cbiAgPGg0Pnt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5pbXBvcnRDbGFyaWZpY2F0aW9ucycgfCB0cmFuc2xhdGV9fTwvaDQ+XG4gIDx1bD5cbiAgICA8bGk+e3snaWdvLmdlby5pbXBvcnRFeHBvcnRGb3JtLmltcG9ydFNpemVNYXgnIHwgdHJhbnNsYXRlOiB7c2l6ZTogZmlsZVNpemVNYn0gfX08L2xpPlxuICAgIDxsaT57eydpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0uaW1wb3J0Rm9ybWF0QXV0aG9yaXplZCcgfCB0cmFuc2xhdGV9fTwvbGk+XG4gICAgPGxpPnt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5pbXBvcnRTaHBaaXAnIHwgdHJhbnNsYXRlfX08L2xpPlxuICA8L3VsPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCIgKm5nSWY9XCIoZXhwb3J0YWJsZUxheWVycyQgfCBhc3luYykubGVuZ3RoID09PSAwICYmIHNlbGVjdGVkTW9kZSA9PT0gJ2V4cG9ydCdcIj5cbiAgPGg0Pnt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5leHBvcnROb0xheWVyc0V4cG9ydGFibGUnIHwgdHJhbnNsYXRlfX08L2g0PlxuPC9zZWN0aW9uPlxuXG48Zm9ybSBjbGFzcz1cImlnby1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgKm5nSWY9XCIoZXhwb3J0YWJsZUxheWVycyQgfCBhc3luYykubGVuZ3RoID4gMCAmJiBzZWxlY3RlZE1vZGUgPT09ICdleHBvcnQnXCI+XG4gIDxkaXYgY2xhc3M9XCJpZ28taW5wdXQtY29udGFpbmVyXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD57eydpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0uZXhwb3J0TGF5ZXJQbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fTwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgWyh2YWx1ZSldPVwibGF5ZXJzXCIgbXVsdGlwbGU+XG4gICAgICAgIDxtYXQtc2VsZWN0LXRyaWdnZXI+XG4gICAgICAgICAge3tsYXllcnMubGVuZ3RoID8gZ2V0TGF5ZXJUaXRsZUJ5SWQobGF5ZXJzWzBdKSA6ICcnfX1cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImxheWVycy5sZW5ndGggPiAxXCIgY2xhc3M9XCJleHBvcnQtc2VsZWN0LXRyaWdnZXJcIj5cbiAgICAgICAgICAgICgre3tsYXllcnMubGVuZ3RoIC0gMX19IHt7KGxheWVycz8ubGVuZ3RoID09PSAyID8gJ2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5vdGhlcicgOiAnaWdvLmdlby5pbXBvcnRFeHBvcnRGb3JtLm90aGVycycpIHwgdHJhbnNsYXRlIH19KVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0LXRyaWdnZXI+XG4gICAgICAgIDxtYXQtb3B0aW9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGxheWVyIG9mIChleHBvcnRhYmxlTGF5ZXJzJCB8IGFzeW5jKVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwieydpZ28tZXhwb3J0LWxheWVyLW1hdC1vcHRpb24nOiBsYXllckhhc1NlbGVjdGVkRmVhdHVyZXMobGF5ZXIpfVwiXG4gICAgICAgICAgW3ZhbHVlXT1cImxheWVyLmlkXCJcbiAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgICAgPHAgbWF0LWxpbmU+e3tsYXllci50aXRsZX19PC9wPlxuICAgICAgICAgIDxwIG1hdC1saW5lPlxuICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKm5nSWY9XCJsYXllckhhc1NlbGVjdGVkRmVhdHVyZXMobGF5ZXIpXCJcbiAgICAgICAgICAgICAgW2xhYmVsUG9zaXRpb25dPVwiJ2FmdGVyJ1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJvbmx5U2VsZWN0ZWRDbGljaygkZXZlbnQsbGF5ZXIuaWQpXCJcbiAgICAgICAgICAgICAgKGNoZWNrZWQpPVwiaW5MYXllcnNJZFRvRXhwb3J0U2VsZWN0aW9uT25seShsYXllcilcIlxuICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9ubHlTZWxlY3RlZCgkZXZlbnQsbGF5ZXIuaWQpXCI+XG4gICAgICAgICAgICAgIDxzbWFsbD57eydpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0uZXhwb3J0U2VsZWN0ZWRGZWF0dXJlJyB8IHRyYW5zbGF0ZX19PC9zbWFsbD5cbiAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiaWdvLWlucHV0LWNvbnRhaW5lclwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+e3snaWdvLmdlby5pbXBvcnRFeHBvcnRGb3JtLmV4cG9ydEZvcm1hdFBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19PC9tYXQtbGFiZWw+XG4gICAgICA8bWF0LXNlbGVjdFxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJmb3JtYXRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihmb3JtYXRzJCB8IGFzeW5jKS5sZW5ndGggIT09IDBcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZm9ybWF0IG9mIChmb3JtYXRzJCB8IGFzeW5jKSB8IGtleXZhbHVlXCIgW3ZhbHVlXT1cImZvcm1hdC5rZXlcIj5cbiAgICAgICAgICAgIHt7J2lnby5nZW8uZXhwb3J0LmZvcm1hdC4nICsgZm9ybWF0LnZhbHVlIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdJZj1cIihmb3JtYXRzJCB8IGFzeW5jKS5sZW5ndGggPT09IDBcIiBkaXNhYmxlZD1cInRydWVcIj5cbiAgICAgICAgICB7eydpZ28uZ2VvLmV4cG9ydC5ub0Zvcm1hdC50aXRsZScgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIiAqbmdJZj1cImZvcmNlTmFtaW5nICYmIGZvcm0udmFsdWUuZm9ybWF0ICE9PSAnVVJMJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cInt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5leHBvcnRGaWxlTmFtZVBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIiAqbmdJZj1cImZvcm0udmFsdWUuZm9ybWF0ID09PSAnQ1NWY29tbWEnIHx8IGZvcm0udmFsdWUuZm9ybWF0ID09PSAnQ1NWc2VtaWNvbG9uJ1wiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+e3snaWdvLmdlby5pbXBvcnRFeHBvcnRGb3JtLmVuY29kaW5nUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX08L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0XG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImVuY29kaW5nXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIoZW5jb2RpbmdzJCB8IGFzeW5jKS5sZW5ndGggIT09IDBcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZW5jb2Rpbmcgb2YgKGVuY29kaW5ncyQgfCBhc3luYykgfCBrZXl2YWx1ZVwiIFt2YWx1ZV09XCJlbmNvZGluZy5rZXlcIj5cbiAgICAgICAgICAgIHt7J2lnby5nZW8uZXhwb3J0LmVuY29kaW5nLicgKyBlbmNvZGluZy52YWx1ZSB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZXhwb3J0LWNvbWJpbmUtbGF5ZXJzIG1hdC10eXBvZ3JhcGh5XCIgKm5nSWY9XCJsYXllcnMubGVuZ3RoID4gMSAmJiAoZm9ybS52YWx1ZS5mb3JtYXQgPT09ICdDU1Zjb21tYScgfHwgZm9ybS52YWx1ZS5mb3JtYXQgPT09ICdDU1ZzZW1pY29sb24nKVwiPlxuICAgIDxtYXQtc2xpZGUtdG9nZ2xlXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNvbWJpbmVMYXllcnNcIlxuICAgICAgICBbbGFiZWxQb3NpdGlvbl09XCInYmVmb3JlJ1wiPlxuICAgICAgICAgIHt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5leHBvcnRDb21iaW5lUmVzdWx0cycgfCB0cmFuc2xhdGV9fVxuICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImV4cG9ydC1zZXBhcmF0b3IgbWF0LXR5cG9ncmFwaHlcIiAqbmdJZj1cImxheWVycy5sZW5ndGggPiAxICYmIChmb3JtLnZhbHVlLmZvcm1hdCA9PT0gJ0NTVmNvbW1hJyB8fCBmb3JtLnZhbHVlLmZvcm1hdCA9PT0gJ0NTVnNlbWljb2xvbicpICYmIGZvcm0udmFsdWUuY29tYmluZUxheWVyc1wiPlxuICAgIDxtYXQtc2xpZGUtdG9nZ2xlXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInNlcGFyYXRvclwiXG4gICAgICAgIFtsYWJlbFBvc2l0aW9uXT1cIidiZWZvcmUnXCI+XG4gICAgICAgICAge3snaWdvLmdlby5pbXBvcnRFeHBvcnRGb3JtLmV4cG9ydFNlcGFyYXRvcicgfCB0cmFuc2xhdGV9fVxuICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImV4cG9ydC1vcHRpb25zIG1hdC10eXBvZ3JhcGh5XCIgKm5nSWY9XCJmb3JtLnZhbHVlLmZvcm1hdCAhPT0gJ1VSTCdcIj5cbiAgICA8bWF0LXNsaWRlLXRvZ2dsZVxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJmZWF0dXJlSW5NYXBFeHRlbnRcIlxuICAgICAgICBbbGFiZWxQb3NpdGlvbl09XCInYmVmb3JlJ1wiPlxuICAgICAgICAgIHt7J2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5leHBvcnRGZWF0dXJlSW5FeHRlbnQnIHwgdHJhbnNsYXRlfX1cbiAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJpZ28tZm9ybS1idXR0b24tZ3JvdXBcIj5cbiAgICA8YnV0dG9uXG4gICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWQgfHwgKGxvYWRpbmckIHwgYXN5bmMpXCJcbiAgICAgIChjbGljayk9XCJoYW5kbGVFeHBvcnRGb3JtU3VibWl0KGZvcm0udmFsdWUpXCI+XG4gICAgICB7e2Zvcm0udmFsdWUuZm9ybWF0ICE9PSAnVVJMJyAgPyAoJ2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5leHBvcnRCdXR0b24nIHwgdHJhbnNsYXRlKTogKGZvcm0udmFsdWUubGF5ZXJzLmxlbmd0aCA+IDEgID8gKCdpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0uZXhwb3J0QnV0dG9uTGlua3MnIHwgdHJhbnNsYXRlKTogKCdpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0uZXhwb3J0QnV0dG9uTGluaycgfCB0cmFuc2xhdGUpKX19XG4gICAgPC9idXR0b24+XG4gICAgPGlnby1zcGlubmVyIFtzaG93bl09XCJsb2FkaW5nJCB8IGFzeW5jXCI+PC9pZ28tc3Bpbm5lcj5cbiAgPC9kaXY+XG5cbjwvZm9ybT5cbiJdfQ==