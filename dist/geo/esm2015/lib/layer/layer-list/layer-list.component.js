import { Component, Input, ChangeDetectionStrategy, ContentChild, Output, EventEmitter } from '@angular/core';
import { LayerListControlsEnum, LayerListDisplacement } from './layer-list.enum';
import { LayerListSelectVisibleEnum } from './layer-list.enum';
import { BehaviorSubject, ReplaySubject, EMPTY, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LinkedProperties } from '../shared/layers/layer.interface';
import * as olextent from 'ol/extent';
import * as i0 from "@angular/core";
const _c0 = ["igoLayerItemToolbar"];
function LayerListComponent_igo_layer_list_tool_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-layer-list-tool", 6);
    i0.ɵɵlistener("appliedFilterAndSort", function LayerListComponent_igo_layer_list_tool_1_Template_igo_layer_list_tool_appliedFilterAndSort_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onAppliedFilterAndSortChange($event); })("selection", function LayerListComponent_igo_layer_list_tool_1_Template_igo_layer_list_tool_selection_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.toggleSelectionMode($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("layersAreAllVisible", ctx_r0.layersAreAllVisible)("term", ctx_r0.layerFilterAndSortOptions.keyword)("onlyVisible", ctx_r0.layerFilterAndSortOptions.onlyVisible)("sortAlpha", ctx_r0.layerFilterAndSortOptions.sortAlpha);
} }
function LayerListComponent_mat_list_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item", 7);
    i0.ɵɵelementStart(1, "mat-checkbox", 8);
    i0.ɵɵlistener("change", function LayerListComponent_mat_list_item_3_Template_mat_checkbox_change_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.selectAll(); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", !ctx_r1.selectAllCheck && ctx_r1.layersChecked.length > 0 ? "accent" : "primary")("checked", ctx_r1.selectAllCheck)("indeterminate", !ctx_r1.selectAllCheck && ctx_r1.layersChecked.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selectAllCheck ? i0.ɵɵpipeBind1(3, 4, "igo.geo.layer.deselectAll") : i0.ɵɵpipeBind1(4, 6, "igo.geo.layer.selectAll"), " ");
} }
function LayerListComponent_ng_template_7_igo_layer_item_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-layer-item", 10);
    i0.ɵɵlistener("action", function LayerListComponent_ng_template_7_igo_layer_item_0_Template_igo_layer_item_action_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.toggleLayerTool($event); })("checkbox", function LayerListComponent_ng_template_7_igo_layer_item_0_Template_igo_layer_item_checkbox_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.layersCheck($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("layer", layer_r11)("activeLayer", ctx_r13.activeLayer)("orderable", ctx_r13.orderable && !layer_r11.baseLayer)("lowerDisabled", ctx_r13.getLowerLayer().id === layer_r11.id)("raiseDisabled", ctx_r13.getUpperLayer().id === layer_r11.id)("queryBadge", ctx_r13.queryBadge)("expandLegendIfVisible", ctx_r13.expandLegendOfVisibleLayers)("updateLegendOnResolutionChange", ctx_r13.updateLegendOnResolutionChange)("toggleLegendOnVisibilityChange", ctx_r13.toggleLegendOnVisibilityChange)("selectionMode", ctx_r13.selection)("selectAll", ctx_r13.selectAllCheck)("layerCheck", layer_r11.options.check)("changeDetection", ctx_r13.layerItemChangeDetection$);
} }
function LayerListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, LayerListComponent_ng_template_7_igo_layer_item_0_Template, 1, 13, "igo-layer-item", 9);
} if (rf & 2) {
    const layer_r11 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !(ctx_r3.excludeBaseLayers && layer_r11.baseLayer));
} }
function LayerListComponent_igo_panel_9_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function LayerListComponent_igo_panel_9_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.removeLayers(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.layer.removeLayer"));
} }
function LayerListComponent_igo_panel_9_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function LayerListComponent_igo_panel_9_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.zoomLayerExtents(ctx_r23.activeLayer); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.layer.zoomLayer"));
} }
const _c1 = function (a0) { return { layer: a0 }; };
function LayerListComponent_igo_panel_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-panel", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵtemplate(2, LayerListComponent_igo_panel_9_button_2_Template, 3, 3, "button", 13);
    i0.ɵɵelementStart(3, "button", 14);
    i0.ɵɵlistener("click", function LayerListComponent_igo_panel_9_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.moveActiveLayer(ctx_r25.activeLayer, ctx_r25.layerListDisplacement.Lower); });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelement(6, "mat-icon", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 16);
    i0.ɵɵlistener("click", function LayerListComponent_igo_panel_9_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.moveActiveLayer(ctx_r27.activeLayer, ctx_r27.layerListDisplacement.Raise); });
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelement(10, "mat-icon", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 18);
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelement(13, "mat-icon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-menu", 20, 21);
    i0.ɵɵelementStart(16, "div", 22);
    i0.ɵɵelementStart(17, "mat-slider", 23);
    i0.ɵɵlistener("input", function LayerListComponent_igo_panel_9_Template_mat_slider_input_17_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.changeOpacity($event); })("click", function LayerListComponent_igo_panel_9_Template_mat_slider_click_17_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵpipe(18, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, LayerListComponent_igo_panel_9_button_19_Template, 3, 3, "button", 24);
    i0.ɵɵelementContainer(20, 25);
    i0.ɵɵprojection(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r19 = i0.ɵɵreference(15);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r4.activeLayer.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.isLayerRemovable(ctx_r4.activeLayer));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", ctx_r4.sortAlpha || ctx_r4.onlyVisible || ctx_r4.keyword ? i0.ɵɵpipeBind1(4, 20, "igo.geo.layer.filterLowerLayer") : i0.ɵɵpipeBind1(5, 22, "igo.geo.layer.lowerLayer"))("disabled", ctx_r4.lowerDisabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matBadge", ctx_r4.sortAlpha || ctx_r4.onlyVisible || ctx_r4.keyword ? "!" : "")("matBadgeHidden", ctx_r4.lowerDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", ctx_r4.sortAlpha || ctx_r4.onlyVisible || ctx_r4.keyword ? i0.ɵɵpipeBind1(8, 24, "igo.geo.layer.filterRaiseLayer") : i0.ɵɵpipeBind1(9, 26, "igo.geo.layer.raiseLayer"))("disabled", ctx_r4.raiseDisabled);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matBadge", ctx_r4.sortAlpha || ctx_r4.onlyVisible || ctx_r4.keyword ? "!" : "")("matBadgeHidden", ctx_r4.raiseDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r19)("matTooltip", i0.ɵɵpipeBind1(12, 28, "igo.geo.layer.opacity"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matBadge", ctx_r4.badgeOpacity);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("min", 0)("max", 100)("value", ctx_r4.opacity)("matTooltip", i0.ɵɵpipeBind1(18, 30, "igo.geo.layer.opacity"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.activeLayerIsValid(ctx_r4.activeLayer));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.templateLayerToolbar)("ngTemplateOutletContext", i0.ɵɵpureFunction1(32, _c1, ctx_r4.activeLayer));
} }
function LayerListComponent_igo_panel_10_mat_slider_25_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-slider", 38);
    i0.ɵɵlistener("ngModelChange", function LayerListComponent_igo_panel_10_mat_slider_25_Template_mat_slider_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.checkOpacity = $event; })("click", function LayerListComponent_igo_panel_10_mat_slider_25_Template_mat_slider_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("min", 0)("max", 100)("ngModel", ctx_r31.checkOpacity)("matTooltip", i0.ɵɵpipeBind1(1, 4, "igo.geo.layer.opacity"));
} }
function LayerListComponent_igo_panel_10_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function LayerListComponent_igo_panel_10_button_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.zoomLayersExtents(ctx_r36.layersChecked); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.layer.zoomLayers"));
} }
function LayerListComponent_igo_panel_10_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-panel", 11);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementStart(2, "div", 30);
    i0.ɵɵelementStart(3, "button", 31);
    i0.ɵɵlistener("click", function LayerListComponent_igo_panel_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.removeLayers(ctx_r38.layersChecked); });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelement(6, "mat-icon", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 33);
    i0.ɵɵlistener("click", function LayerListComponent_igo_panel_10_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r39); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.toggleVisibility(ctx_r40.layersChecked); });
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelement(10, "mat-icon", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 14);
    i0.ɵɵlistener("click", function LayerListComponent_igo_panel_10_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r39); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.lowerLayers(ctx_r41.layersChecked); });
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelement(14, "mat-icon", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 16);
    i0.ɵɵlistener("click", function LayerListComponent_igo_panel_10_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r39); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.raiseLayers(ctx_r42.layersChecked); });
    i0.ɵɵpipe(16, "translate");
    i0.ɵɵpipe(17, "translate");
    i0.ɵɵelement(18, "mat-icon", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 35);
    i0.ɵɵpipe(20, "translate");
    i0.ɵɵelement(21, "mat-icon", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "mat-menu", 20, 21);
    i0.ɵɵelementStart(24, "div", 22);
    i0.ɵɵtemplate(25, LayerListComponent_igo_panel_10_mat_slider_25_Template, 2, 6, "mat-slider", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, LayerListComponent_igo_panel_10_button_26_Template, 3, 3, "button", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r30 = i0.ɵɵreference(23);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 21, "igo.geo.layer.tools"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r5.layersChecked.length === 0)("matTooltip", ctx_r5.isAllLayersRemovable(ctx_r5.layersChecked) ? i0.ɵɵpipeBind1(4, 23, "igo.geo.layer.removeSelectedLayers") : i0.ɵɵpipeBind1(5, 25, "igo.geo.layer.removeSelectedLayersRestriction"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matBadge", "!")("matBadgeHidden", ctx_r5.isAllLayersRemovable(ctx_r5.layersChecked));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r5.layersChecked.length === 0)("matTooltip", ctx_r5.statusSelectedLayersCheck === "ALL_HIDDEN" ? i0.ɵɵpipeBind1(8, 27, "igo.geo.layer.showSelectedLayers") : i0.ɵɵpipeBind1(9, 29, "igo.geo.layer.hideSelectedLayers"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("svgIcon", ctx_r5.statusSelectedLayersCheck === "ALL_HIDDEN" ? "eye-off" : "eye");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", ctx_r5.sortAlpha || ctx_r5.onlyVisible || ctx_r5.keyword ? i0.ɵɵpipeBind1(12, 31, "igo.geo.layer.filterLowerLayer") : i0.ɵɵpipeBind1(13, 33, "igo.geo.layer.lowerLayer"))("disabled", ctx_r5.lowerDisabledSelection);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matBadge", ctx_r5.sortAlpha || ctx_r5.onlyVisible || ctx_r5.keyword ? "!" : "")("matBadgeHidden", ctx_r5.lowerDisabledSelection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", ctx_r5.sortAlpha || ctx_r5.onlyVisible || ctx_r5.keyword ? i0.ɵɵpipeBind1(16, 35, "igo.geo.layer.filterRaiseLayer") : i0.ɵɵpipeBind1(17, 37, "igo.geo.layer.raiseLayer"))("disabled", ctx_r5.raiseDisabledSelection);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matBadge", ctx_r5.sortAlpha || ctx_r5.onlyVisible || ctx_r5.keyword ? "!" : "")("matBadgeHidden", ctx_r5.raiseDisabledSelection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r5.layersChecked.length === 0)("matMenuTriggerFor", _r30)("matTooltip", i0.ɵɵpipeBind1(20, 39, "igo.geo.layer.opacity"));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r5.layersChecked.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.layersChecked.length !== 0 && ctx_r5.activeLayersAreValid(ctx_r5.layersChecked));
} }
const _c2 = [[["", "igoLayerItemToolbar", ""]]];
const _c3 = function (a0, a1, a2) { return { "igo-list-tools-multi": a0, "igo-list-tools-single": a1, "igo-list-no-tools": a2 }; };
const _c4 = ["[igoLayerItemToolbar]"];
// TODO: This class could use a clean up. Also, some methods could be moved ealsewhere
export class LayerListComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this.orderable = true;
        this.thresholdToFilterAndSort = 5;
        this.layers$ = new BehaviorSubject([]);
        this.change$ = new ReplaySubject(1);
        this.showToolbar$ = new BehaviorSubject(false);
        this.hideSelectedLayers = true;
        this.activeLayer$ = new BehaviorSubject(undefined);
        this.layersChecked = [];
        this.layerItemChangeDetection$ = new BehaviorSubject(undefined);
        this.layersAreAllVisible = true;
        this.ogcButton = true;
        this.timeButton = true;
        this.floatLabel = 'auto';
        this.layerFilterAndSortOptions = {};
        this.excludeBaseLayers = false;
        this.toggleLegendOnVisibilityChange = false;
        this.expandLegendOfVisibleLayers = false;
        this.updateLegendOnResolutionChange = false;
        this.queryBadge = false;
        this.appliedFilterAndSort = new EventEmitter();
        this._keyword = undefined;
        this._onlyVisible = false;
        this._sortedAlpha = false;
        this.toggleOpacity = false;
        this.selectAllCheck$ = new BehaviorSubject(undefined);
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    set layers(value) {
        this._layers = this.removeProblemLayerInList(value);
        this.next();
    }
    get layers() {
        return this._layers;
    }
    set activeLayer(value) {
        this._activeLayer = value;
        this.activeLayer$.next(value);
    }
    get activeLayer() {
        return this._activeLayer;
    }
    get keyword() {
        return this._keyword;
    }
    set keyword(value) {
        this._keyword = value;
        this.next();
    }
    get onlyVisible() {
        return this._onlyVisible;
    }
    set onlyVisible(value) {
        this._onlyVisible = value;
        this.next();
    }
    get sortAlpha() {
        return this._sortedAlpha;
    }
    set sortAlpha(value) {
        this._sortedAlpha = value;
        this.next();
    }
    get opacity() {
        return Math.round(this.activeLayer$.getValue().opacity * 100);
    }
    set opacity(opacity) {
        this.activeLayer$.getValue().opacity = opacity / 100;
    }
    get badgeOpacity() {
        if (this.opacity === 100) {
            return;
        }
        return this.opacity;
    }
    get raiseDisabled() {
        if (!this.orderable ||
            this.activeLayer.baseLayer ||
            this.getUpperLayer().id === this.activeLayer.id ||
            this.isUpperBaselayer(this.activeLayer)) {
            return true;
        }
        return false;
    }
    get lowerDisabled() {
        if (!this.orderable ||
            this.activeLayer.baseLayer ||
            this.getLowerLayer().id === this.activeLayer.id ||
            this.isLowerBaselayer(this.activeLayer)) {
            return true;
        }
        return false;
    }
    get raiseDisabledSelection() {
        if (this.layersChecked.length === 0 ||
            !this.orderable ||
            !this.raisableLayers(this.layersChecked) ||
            this.selectAllCheck === true) {
            return true;
        }
        return false;
    }
    get lowerDisabledSelection() {
        if (this.layersChecked.length === 0 ||
            !this.orderable ||
            !this.lowerableLayers(this.layersChecked) ||
            this.selectAllCheck === true) {
            return true;
        }
        return false;
    }
    get checkOpacity() {
        return this.layersCheckedOpacity() * 100;
    }
    set checkOpacity(opacity) {
        for (const layer of this.layersChecked) {
            layer.opacity = opacity / 100;
        }
    }
    get layerListDisplacement() {
        return LayerListDisplacement;
    }
    /**
     * Subscribe to the search term stream and trigger researches
     * @internal
     */
    ngOnInit() {
        this.change$$ = this.change$
            .pipe(debounce(() => {
            return this.layers.length === 0 ? EMPTY : timer(50);
        }))
            .subscribe(() => {
            this.showToolbar$.next(this.computeShowToolbar());
            this.layers$.next(this.computeLayers(this.layers.slice(0)));
            this.appliedFilterAndSort.emit({
                keyword: this.keyword,
                sortAlpha: this.sortAlpha,
                onlyVisible: this.onlyVisible
            });
        });
        this.selectAllCheck$$ = this.selectAllCheck$.subscribe((value) => {
            this.selectAllCheck = value;
        });
        this.layers$$ = this.layers$.subscribe(() => {
            if (this.layers) {
                let checks = 0;
                for (const layer of this.layers) {
                    layer.status$.subscribe(valStatus => {
                        if (valStatus === 0) {
                            this.map.removeLayer(layer);
                        }
                    });
                    if (layer.options.active) {
                        this.activeLayer = layer;
                        this.layerTool = true;
                    }
                    if (layer.options.check) {
                        checks += 1;
                    }
                }
                if (this.excludeBaseLayers) {
                    this.selectAllCheck =
                        checks ===
                            this.layers.filter((lay) => lay.baseLayer !== true && lay.showInLayerList).length
                            ? true
                            : false;
                }
                else {
                    this.selectAllCheck =
                        checks === this.layers.filter((lay) => lay.showInLayerList).length
                            ? true
                            : false;
                }
            }
        });
    }
    ngOnDestroy() {
        this.change$$.unsubscribe();
        this.selectAllCheck$$.unsubscribe();
        this.layers$$.unsubscribe();
    }
    activeLayerIsValid(layer) {
        let valid = false;
        const layerExtent = layer.options.extent;
        const maxLayerZoomExtent = this.map.viewController.maxLayerZoomExtent;
        if (layerExtent) {
            if (maxLayerZoomExtent) {
                valid = olextent.containsExtent(maxLayerZoomExtent, layerExtent);
            }
            else {
                valid = true;
            }
        }
        return valid;
    }
    activeLayersAreValid(layers) {
        let valid = false;
        const layersExtent = olextent.createEmpty();
        const maxLayerZoomExtent = this.map.viewController.maxLayerZoomExtent;
        for (const layer of layers) {
            const layerExtent = layer.options.extent;
            if (layerExtent && !layerExtent.includes(Infinity)) {
                olextent.extend(layersExtent, layerExtent);
            }
        }
        if (!olextent.isEmpty(layersExtent)) {
            if (maxLayerZoomExtent) {
                valid = (olextent.containsExtent(maxLayerZoomExtent, layersExtent));
            }
            else {
                valid = true;
            }
        }
        return valid;
    }
    zoomLayerExtents(layer) {
        this.map.viewController.zoomToExtent(layer.options.extent);
    }
    zoomLayersExtents(layers) {
        const layersExtent = olextent.createEmpty();
        for (const layer of layers) {
            const layerExtent = layer.options.extent;
            if (layerExtent) {
                olextent.extend(layersExtent, layerExtent);
            }
        }
        this.map.viewController.zoomToExtent(layersExtent);
    }
    changeOpacity(event) {
        this.opacity = event.value;
    }
    clearKeyword() {
        this.keyword = undefined;
    }
    getLowerLayer() {
        return this.layers
            .filter((l) => !l.baseLayer)
            .reduce((prev, current) => {
            return prev.zIndex < current.zIndex ? prev : current;
        }, { zIndex: undefined, id: undefined });
    }
    isLowerBaselayer(layer) {
        const index = this.layers.findIndex((lay) => layer.id === lay.id);
        if (this.layers &&
            this.layers[index + 1] &&
            this.layers[index + 1].baseLayer === true) {
            return true;
        }
        return false;
    }
    getUpperLayer() {
        return this.layers
            .filter((l) => !l.baseLayer)
            .reduce((prev, current) => {
            return prev.zIndex > current.zIndex ? prev : current;
        }, { zIndex: undefined, id: undefined });
    }
    isUpperBaselayer(layer) {
        const index = this.layers.findIndex((lay) => layer.id === lay.id);
        if (this.layers &&
            this.layers[index - 1] &&
            this.layers[index - 1].baseLayer === true) {
            return true;
        }
        return false;
    }
    moveActiveLayer(activeLayer, actiontype) {
        const layersToMove = [activeLayer];
        const sortedLayersToMove = [];
        this.getLinkedLayers(activeLayer, layersToMove);
        this.layers.map(layer => {
            if (layersToMove.indexOf(layer) !== -1) {
                sortedLayersToMove.push(layer);
            }
        });
        if (actiontype === LayerListDisplacement.Raise) {
            this.raiseLayers(sortedLayersToMove, false);
        }
        else if (actiontype === LayerListDisplacement.Lower) {
            this.lowerLayers(sortedLayersToMove, false);
        }
    }
    getLinkedLayers(activeLayer, layersList) {
        const linkedLayers = activeLayer.options.linkedLayers;
        if (!linkedLayers) {
            return;
        }
        const currentLinkedId = linkedLayers.linkId;
        const currentLinks = linkedLayers.links;
        const isParentLayer = currentLinks ? true : false;
        if (isParentLayer) {
            // search for child layers
            currentLinks.map(link => {
                if (!link.properties || link.properties.indexOf(LinkedProperties.ZINDEX) === -1) {
                    return;
                }
                link.linkedIds.map(linkedId => {
                    const childLayer = this.layers.find(layer => { var _a; return ((_a = layer.options.linkedLayers) === null || _a === void 0 ? void 0 : _a.linkId) === linkedId; });
                    if (childLayer) {
                        if (!layersList.includes(childLayer)) {
                            layersList.push(childLayer);
                        }
                    }
                });
            });
        }
        else {
            // search for parent layer
            this.layers.map(parentLayer => {
                var _a;
                if ((_a = parentLayer.options.linkedLayers) === null || _a === void 0 ? void 0 : _a.links) {
                    parentLayer.options.linkedLayers.links.map(l => {
                        var _a;
                        if (((_a = l.properties) === null || _a === void 0 ? void 0 : _a.indexOf(LinkedProperties.ZINDEX)) !== -1 &&
                            l.bidirectionnal !== false &&
                            l.linkedIds.indexOf(currentLinkedId) !== -1) {
                            layersList.push(parentLayer);
                            this.getLinkedLayers(parentLayer, layersList);
                        }
                    });
                }
            });
        }
    }
    /*
     * For selection mode disabled attribute
     */
    raisableLayers(layers) {
        let response = false;
        let base = 0;
        for (const layer of layers) {
            const mapIndex = this.layers.findIndex((lay) => layer.id === lay.id);
            const currentLayer = this.layers[mapIndex];
            if (currentLayer.baseLayer) {
                base += 1;
            }
            const previousLayer = this.layers[mapIndex - 1];
            if (previousLayer &&
                previousLayer.baseLayer !== true &&
                !layers.find((lay) => previousLayer.id === lay.id) &&
                currentLayer.baseLayer !== true) {
                response = true;
            }
        }
        if ((this.layersChecked.length === 1 && this.layersChecked[0].baseLayer) ||
            base === this.layersChecked.length) {
            response = false;
        }
        return response;
    }
    /*
     * When multiple layers is selected but some may be allow to move
     */
    raisableLayer(index) {
        if (index < 1) {
            return false;
        }
        if (this.layers[index - 1].options.check) {
            return this.raisableLayer(index - 1);
        }
        return true;
    }
    raiseLayers(layers, fromUi = true) {
        const layersToRaise = [];
        for (const layer of layers) {
            const index = this.layers.findIndex((lay) => lay.id === layer.id);
            if (this.raisableLayer(index)) {
                layersToRaise.push(layer);
            }
        }
        this.map.raiseLayers(layersToRaise);
        if (fromUi) {
            setTimeout(() => {
                const elements = this.computeElementRef();
                if (!this.isScrolledIntoView(elements[0], elements[1].offsetParent)) {
                    elements[0].scrollTop = elements[1].offsetParent.offsetTop;
                }
            }, 100);
        }
    }
    /*
     * For selection mode disabled attribute
     */
    lowerableLayers(layers) {
        let response = false;
        let base = 0;
        for (const layer of layers) {
            const mapIndex = this.layers.findIndex((lay) => layer.id === lay.id);
            const currentLayer = this.layers[mapIndex];
            if (currentLayer.baseLayer) {
                base += 1;
            }
            const nextLayer = this.layers[mapIndex + 1];
            if (nextLayer &&
                nextLayer.baseLayer !== true &&
                !layers.find((lay) => nextLayer.id === lay.id)) {
                response = true;
            }
        }
        if ((this.layersChecked.length === 1 && this.layersChecked[0].baseLayer) ||
            base === this.layersChecked.length) {
            response = false;
        }
        return response;
    }
    /*
     * When multiple layers is selected but some may be allow to move
     */
    lowerableLayer(index) {
        if (index >
            this.layers.filter((lay) => lay.baseLayer !== true).length - 2) {
            return false;
        }
        if (this.layers[index + 1].options.check) {
            return this.lowerableLayer(index + 1);
        }
        return true;
    }
    lowerLayers(layers, fromUi = true) {
        const layersToLower = [];
        for (const layer of layers) {
            const index = this.layers.findIndex((lay) => lay.id === layer.id);
            if (this.lowerableLayer(index)) {
                layersToLower.push(layer);
            }
        }
        this.map.lowerLayers(layersToLower);
        if (fromUi) {
            setTimeout(() => {
                const elements = this.computeElementRef('lower');
                if (!this.isScrolledIntoView(elements[0], elements[1].offsetParent)) {
                    elements[0].scrollTop =
                        elements[1].offsetParent.offsetTop +
                            elements[1].offsetParent.offsetHeight -
                            elements[0].clientHeight;
                }
            }, 100);
        }
    }
    next() {
        this.change$.next();
    }
    computeLayers(layers) {
        let layersOut = this.filterLayers(layers);
        if (this.sortAlpha) {
            layersOut = this.sortLayersByTitle(layersOut);
        }
        else {
            layersOut = this.sortLayersByZindex(layersOut);
        }
        return layersOut;
    }
    onKeywordChange(term) {
        this.keyword = term;
    }
    onAppliedFilterAndSortChange(appliedFilter) {
        this.keyword = appliedFilter.keyword;
        this.onlyVisible = appliedFilter.onlyVisible;
        this.sortAlpha = appliedFilter.sortAlpha;
    }
    filterLayers(layers) {
        if (this.layerFilterAndSortOptions.showToolbar === LayerListControlsEnum.never) {
            return layers;
        }
        if (!this.keyword && !this.onlyVisible) {
            return layers;
        }
        const keepLayerIds = layers.map((layer) => layer.id);
        layers.forEach((layer) => {
            const layerOptions = layer.options || {};
            const dataSourceOptions = layer.dataSource.options || {};
            const metadata = layerOptions.metadata || {};
            const keywords = metadata.keywordList || [];
            const layerKeywords = keywords.map((kw) => {
                return kw.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            });
            if (this.keyword && layer.title) {
                const localKeyword = this.keyword
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');
                const layerTitle = layer.title
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');
                const dataSourceType = dataSourceOptions.type || '';
                const keywordRegex = new RegExp(localKeyword, 'gi');
                const keywordInList = layerKeywords.find((kw) => keywordRegex.test(kw)) !==
                    undefined;
                if (!keywordRegex.test(layerTitle) &&
                    !(this.keyword.toLowerCase() === dataSourceType.toLowerCase()) &&
                    !keywordInList) {
                    const index = keepLayerIds.indexOf(layer.id);
                    if (index > -1) {
                        keepLayerIds.splice(index, 1);
                    }
                }
            }
            if (this.onlyVisible && layer.visible === false) {
                const index = keepLayerIds.indexOf(layer.id);
                if (index > -1) {
                    keepLayerIds.splice(index, 1);
                }
            }
        });
        return layers.filter((layer) => keepLayerIds.indexOf(layer.id) !== -1);
    }
    sortLayersByZindex(layers) {
        return layers.sort((layer1, layer2) => layer2.zIndex - layer1.zIndex);
    }
    sortLayersByTitle(layers) {
        return layers.sort((a, b) => {
            if (this.normalize(a.title) < this.normalize(b.title)) {
                return -1;
            }
            if (this.normalize(a.title) > this.normalize(b.title)) {
                return 1;
            }
            return 0;
        });
    }
    normalize(str) {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
    computeShowToolbar() {
        switch (this.layerFilterAndSortOptions.showToolbar) {
            case LayerListControlsEnum.always:
                return true;
            case LayerListControlsEnum.never:
                return false;
            default:
                if (this.layers.length >= this.thresholdToFilterAndSort ||
                    this.keyword ||
                    this.onlyVisible) {
                    return true;
                }
                return false;
        }
    }
    toggleLayerTool(layer) {
        this.toggleOpacity = false;
        if (this.layerTool && layer === this.activeLayer) {
            this.layerTool = false;
        }
        else {
            this.layerTool = true;
        }
        for (const lay of this.layers) {
            lay.options.active = false;
        }
        layer.options.active = true;
        this.activeLayer = layer;
    }
    removeLayers(layers) {
        if (layers && layers.length > 0) {
            this.layersChecked = [];
            for (const layer of layers) {
                if (layer.options.removable !== false) {
                    layer.map.removeLayer(layer);
                }
                else {
                    this.layersChecked.push(layer);
                }
            }
        }
        else if (!layers && this.activeLayer.options.removable !== false) {
            this.activeLayer.map.removeLayer(this.activeLayer);
            this.layerTool = false;
        }
    }
    toggleVisibility(layers) {
        if (layers && layers.length > 0) {
            for (const layer of layers) {
                layer.visible = this.hideSelectedLayers;
            }
        }
        this.layerItemChangeDetection$.next(true);
    }
    isLayerRemovable(layer) {
        return layer.options.removable !== false;
    }
    isAllLayersRemovable(layers) {
        return layers.every(l => this.isLayerRemovable(l));
    }
    get statusSelectedLayersCheck() {
        let statusSelectedLayers = LayerListSelectVisibleEnum.NULL;
        let findTrue = false;
        let findFalse = false;
        if (this.layersChecked.length === 0) {
            statusSelectedLayers = LayerListSelectVisibleEnum.NULL;
        }
        else {
            statusSelectedLayers = LayerListSelectVisibleEnum.MIXED;
            this.hideSelectedLayers = false;
            for (const layer2 of this.layersChecked) {
                if (layer2.visible === true) {
                    findTrue = true;
                }
                if (layer2.visible === false) {
                    findFalse = true;
                }
            }
            if (findTrue === true && findFalse === false) {
                statusSelectedLayers = LayerListSelectVisibleEnum.ALL_VISIBLE;
            }
            if (findTrue === false && findFalse === true) {
                statusSelectedLayers = LayerListSelectVisibleEnum.ALL_HIDDEN;
                this.hideSelectedLayers = true;
            }
        }
        return statusSelectedLayers;
    }
    layersCheck(event) {
        event.layer.options.check = event.check;
        if (event.check === true) {
            const eventMapIndex = this.layers.findIndex((layer) => event.layer.id === layer.id);
            for (const layer of this.layersChecked) {
                const mapIndex = this.layers.findIndex((lay) => layer.id === lay.id);
                if (eventMapIndex < mapIndex) {
                    this.layersChecked.splice(this.layersChecked.findIndex((lay) => layer.id === lay.id), 0, event.layer);
                    if (this.excludeBaseLayers) {
                        if (this.layersChecked.length ===
                            this.layers.filter((lay) => lay.baseLayer !== true && lay.showInLayerList).length) {
                            this.selectAllCheck = true;
                        }
                        else {
                            this.selectAllCheck = false;
                        }
                    }
                    else if (!this.excludeBaseLayers) {
                        if (this.layersChecked.length ===
                            this.layers.filter((lay) => lay.showInLayerList).length) {
                            this.selectAllCheck = true;
                        }
                        else {
                            this.selectAllCheck = false;
                        }
                    }
                    return;
                }
            }
            this.layersChecked.push(event.layer);
        }
        else {
            const index = this.layersChecked.findIndex((layer) => event.layer.id === layer.id);
            this.layersChecked.splice(index, 1);
        }
        if (this.excludeBaseLayers) {
            if (this.layersChecked.length ===
                this.layers.filter((lay) => lay.baseLayer !== true && lay.showInLayerList).length) {
                this.selectAllCheck = true;
            }
            else {
                this.selectAllCheck = false;
            }
        }
        else if (!this.excludeBaseLayers) {
            if (this.layersChecked.length ===
                this.layers.filter((lay) => lay.showInLayerList).length) {
                this.selectAllCheck = true;
            }
            else {
                this.selectAllCheck = false;
            }
        }
    }
    toggleSelectionMode(value) {
        this.selection = value;
        this.activeLayer = undefined;
        if (value === true) {
            this.layerTool = false;
            for (const layer of this.layers) {
                if (layer.options.check) {
                    this.layersChecked.push(layer);
                }
            }
        }
    }
    layersCheckedOpacity() {
        if (this.layersChecked.length > 1) {
            return 1;
        }
        else {
            const opacity = [];
            for (const layer of this.layersChecked) {
                opacity.push(layer.opacity);
            }
            return opacity;
        }
    }
    selectAll() {
        if (!this.selectAllCheck) {
            for (const layer of this.layers) {
                if (this.excludeBaseLayers &&
                    layer.baseLayer !== true &&
                    layer.showInLayerList) {
                    layer.options.check = true;
                    this.layersChecked.push(layer);
                }
                else if (!this.excludeBaseLayers && layer.showInLayerList) {
                    layer.options.check = true;
                    this.layersChecked.push(layer);
                }
            }
            this.selectAllCheck$.next(true);
        }
        else {
            for (const layer of this.layers) {
                layer.options.check = false;
            }
            this.layersChecked = [];
            this.selectAllCheck$.next(false);
        }
    }
    isScrolledIntoView(elemSource, elem) {
        const docViewTop = elemSource.scrollTop;
        const docViewBottom = docViewTop + elemSource.clientHeight;
        const elemTop = elem.offsetTop;
        const elemBottom = elemTop + elem.clientHeight;
        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
    computeElementRef(type) {
        const checkItems = this.elRef.nativeElement.getElementsByClassName('mat-checkbox-checked');
        const checkItem = type === 'lower'
            ? this.elRef.nativeElement.getElementsByClassName('mat-checkbox-checked')[checkItems.length - 1]
            : this.elRef.nativeElement.getElementsByClassName('mat-checkbox-checked')[0];
        const igoList = this.elRef.nativeElement.getElementsByTagName('igo-list')[0];
        return [igoList, checkItem];
    }
    removeProblemLayerInList(layersList) {
        for (const layer of layersList) {
            if (layer.olLoadingProblem === true) {
                this.map.removeLayer(layer);
            }
        }
        return layersList;
    }
}
LayerListComponent.ɵfac = function LayerListComponent_Factory(t) { return new (t || LayerListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
LayerListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerListComponent, selectors: [["igo-layer-list"]], contentQueries: function LayerListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateLayerToolbar = _t.first);
    } }, inputs: { layersAreAllVisible: "layersAreAllVisible", ogcButton: "ogcButton", timeButton: "timeButton", map: "map", layers: "layers", floatLabel: "floatLabel", layerFilterAndSortOptions: "layerFilterAndSortOptions", excludeBaseLayers: "excludeBaseLayers", toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendOfVisibleLayers: "expandLegendOfVisibleLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", queryBadge: "queryBadge" }, outputs: { appliedFilterAndSort: "appliedFilterAndSort" }, ngContentSelectors: _c4, decls: 11, vars: 16, consts: [["floatLabel", "auto", 3, "layersAreAllVisible", "term", "onlyVisible", "sortAlpha", "appliedFilterAndSort", "selection", 4, "ngIf"], ["class", "select-all", 4, "ngIf"], [3, "ngClass", "navigation", "selection"], ["igoList", ""], ["ngFor", "", 3, "ngForOf"], ["class", "igo-layer-actions-container", 3, "title", 4, "ngIf"], ["floatLabel", "auto", 3, "layersAreAllVisible", "term", "onlyVisible", "sortAlpha", "appliedFilterAndSort", "selection"], [1, "select-all"], [1, "select-all-checkbox", "mat-subheading-2", 3, "color", "checked", "indeterminate", "change"], ["igoListItem", "", 3, "layer", "activeLayer", "orderable", "lowerDisabled", "raiseDisabled", "queryBadge", "expandLegendIfVisible", "updateLegendOnResolutionChange", "toggleLegendOnVisibilityChange", "selectionMode", "selectAll", "layerCheck", "changeDetection", "action", "checkbox", 4, "ngIf"], ["igoListItem", "", 3, "layer", "activeLayer", "orderable", "lowerDisabled", "raiseDisabled", "queryBadge", "expandLegendIfVisible", "updateLegendOnResolutionChange", "toggleLegendOnVisibilityChange", "selectionMode", "selectAll", "layerCheck", "changeDetection", "action", "checkbox"], [1, "igo-layer-actions-container", 3, "title"], [1, "igo-layer-button-group"], ["class", "delete-button", "mat-icon-button", "", "color", "warn", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "down-button", 3, "matTooltip", "disabled", "click"], ["matBadgeColor", "warn", "matBadgeSize", "medium", "svgIcon", "arrow-down", 3, "matBadge", "matBadgeHidden"], ["color", "primary", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "up-button", 3, "matTooltip", "disabled", "click"], ["matBadgeColor", "warn", "matBadgeSize", "medium", "svgIcon", "arrow-up", 3, "matBadge", "matBadgeHidden"], ["color", "primary", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "opacity-button", 3, "matMenuTriggerFor", "matTooltip"], ["matBadgeColor", "primary", "matBadgeSize", "medium", "svgIcon", "opacity", 3, "matBadge"], [1, "mat-menu-opacity-slider"], ["opacityMenu", "matMenu"], ["id", "opacity-menu"], ["id", "opacity-slider", "color", "primary", "thumbLabel", "", "tickInterval", "5", "step", "5", "matTooltipShowDelay", "500", "tooltip-position", "below", 3, "min", "max", "value", "matTooltip", "input", "click"], ["class", "zoomLayer-button", "color", "primary", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["igoLayerItemToolbar", "", 3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-icon-button", "", "color", "warn", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "delete-button", 3, "matTooltip", "click"], ["svgIcon", "delete"], ["color", "primary", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "zoomLayer-button", 3, "matTooltip", "click"], ["matBadgeColor", "primary", "matBadgeSize", "medium", "svgIcon", "magnify-scan"], [1, "actions-buttons-multi"], ["mat-icon-button", "", "color", "warn", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "delete-button", 3, "disabled", "matTooltip", "click"], ["matBadgeColor", "warn", "matBadgeSize", "medium", "svgIcon", "delete", 3, "matBadge", "matBadgeHidden"], ["mat-icon-button", "", "color", "primary", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "eye-button", 3, "disabled", "matTooltip", "click"], [3, "svgIcon"], ["color", "primary", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "opacity-button", 3, "disabled", "matMenuTriggerFor", "matTooltip"], ["svgIcon", "opacity"], ["id", "opacity-slider", "color", "primary", "thumbLabel", "", "tickInterval", "5", "step", "5", "matTooltipShowDelay", "500", "tooltip-position", "below", 3, "min", "max", "ngModel", "matTooltip", "ngModelChange", "click", 4, "ngIf"], ["id", "opacity-slider", "color", "primary", "thumbLabel", "", "tickInterval", "5", "step", "5", "matTooltipShowDelay", "500", "tooltip-position", "below", 3, "min", "max", "ngModel", "matTooltip", "ngModelChange", "click"], ["svgIcon", "magnify-scan"]], template: function LayerListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵelementStart(0, "mat-list");
        i0.ɵɵtemplate(1, LayerListComponent_igo_layer_list_tool_1_Template, 1, 4, "igo-layer-list-tool", 0);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, LayerListComponent_mat_list_item_3_Template, 5, 8, "mat-list-item", 1);
        i0.ɵɵelement(4, "mat-divider");
        i0.ɵɵelementStart(5, "igo-list", 2, 3);
        i0.ɵɵtemplate(7, LayerListComponent_ng_template_7_Template, 1, 1, "ng-template", 4);
        i0.ɵɵpipe(8, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, LayerListComponent_igo_panel_9_Template, 22, 34, "igo-panel", 5);
        i0.ɵɵtemplate(10, LayerListComponent_igo_panel_10_Template, 27, 41, "igo-panel", 5);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 8, ctx.showToolbar$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.selection);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(12, _c3, ctx.selection, ctx.layerTool && !ctx.selection, !ctx.layerTool && !ctx.selection))("navigation", false)("selection", false);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 10, ctx.layers$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.selection && ctx.layerTool && ctx.activeLayer);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selection && ctx.layers.length > 0);
    } }, styles: ["[_nghost-%COMP%]   .igo-list-no-tools[_ngcontent-%COMP%]{height:calc(100% - 57px);padding-top:8px}[_nghost-%COMP%]   .igo-list-tools-single[_ngcontent-%COMP%]{height:calc(100% - 153px);padding-top:8px}[_nghost-%COMP%]   .igo-list-tools-multi[_ngcontent-%COMP%]{height:calc(100% - 191px);padding-top:8px}mat-form-field.inputFilter[_ngcontent-%COMP%]{width:calc(100% - 100px);max-width:200px}.igo-layer-actions-container[_ngcontent-%COMP%]{width:calc(100% - 5px);padding-left:4px}.igo-layer-actions-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{text-align:center}mat-list-item[_ngcontent-%COMP%]     .mat-list-item-content{margin-bottom:10px}mat-checkbox[_ngcontent-%COMP%]     .mat-checkbox-inner-container{margin-left:8px;margin-right:16px}#opacity-slider[_ngcontent-%COMP%]{float:left;min-width:unset;width:110px;left:10px;top:10px}.igo-layer-button-group[_ngcontent-%COMP%], .actions-buttons-multi[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row-reverse;overflow-x:auto;overflow-y:hidden}.igo-layer-button-group[_ngcontent-%COMP%]::-webkit-scrollbar, .actions-buttons-multi[_ngcontent-%COMP%]::-webkit-scrollbar{height:4px}.igo-layer-button-group[_ngcontent-%COMP%]::-webkit-scrollbar-track, .actions-buttons-multi[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}.igo-layer-button-group[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .actions-buttons-multi[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888}.igo-layer-button-group[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .actions-buttons-multi[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}.igo-layer-button-group[_ngcontent-%COMP%]{padding-top:5px}[_nghost-%COMP%]   igo-panel[_ngcontent-%COMP%]{height:unset}#opacity-menu[_ngcontent-%COMP%]{max-width:unset;width:132px;height:50px}#opacity-menu[_ngcontent-%COMP%]   .mat-menu-content[_ngcontent-%COMP%]:not(:empty){padding-top:20px}.select-all[_ngcontent-%COMP%]     .mat-list-item-content{margin:0}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerListComponent, [{
        type: Component,
        args: [{
                selector: 'igo-layer-list',
                templateUrl: './layer-list.component.html',
                styleUrls: ['./layer-list.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { templateLayerToolbar: [{
            type: ContentChild,
            args: ['igoLayerItemToolbar', /* TODO: add static flag */ {}]
        }], layersAreAllVisible: [{
            type: Input
        }], ogcButton: [{
            type: Input
        }], timeButton: [{
            type: Input
        }], map: [{
            type: Input
        }], layers: [{
            type: Input
        }], floatLabel: [{
            type: Input
        }], layerFilterAndSortOptions: [{
            type: Input
        }], excludeBaseLayers: [{
            type: Input
        }], toggleLegendOnVisibilityChange: [{
            type: Input
        }], expandLegendOfVisibleLayers: [{
            type: Input
        }], updateLegendOnResolutionChange: [{
            type: Input
        }], queryBadge: [{
            type: Input
        }], appliedFilterAndSort: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9sYXllci9sYXllci1saXN0L2xheWVyLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvbGF5ZXItbGlzdC9sYXllci1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixZQUFZLEVBR1osTUFBTSxFQUNOLFlBQVksRUFFYixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGFBQWEsRUFFYixLQUFLLEVBQ0wsS0FBSyxFQUNOLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBYyxNQUFNLGtDQUFrQyxDQUFDO0FBRWhGLE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDOzs7OztJQ2hDcEMsOENBTzRDO0lBRDFDLCtRQUE2RCxtT0FBQTtJQUUvRCxpQkFBc0I7OztJQU5wQixnRUFBMkMsa0RBQUEsNkRBQUEseURBQUE7Ozs7SUFTL0Msd0NBQW9EO0lBQ2xELHVDQUtnRTtJQUY5RCx3TUFBc0I7SUFFeUMsWUFDakU7OztJQUFBLGlCQUFlO0lBQ2pCLGlCQUFnQjs7O0lBTFosZUFBNEU7SUFBNUUsd0dBQTRFLGtDQUFBLDRFQUFBO0lBR2IsZUFDakU7SUFEaUUsNEpBQ2pFOzs7O0lBTUUsMENBZ0JtQztJQURqQyw4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LDZCQUE2QixDQUFDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs2REF3QkMsb0JBQW9CO2tCQURuQixZQUFZO21CQUFDLHFCQUFxQixFQUFFLDJCQUEyQixDQUFDLEVBQUU7WUFHMUQsbUJBQW1CO2tCQUEzQixLQUFLO1lBRUcsU0FBUztrQkFBakIsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFHRixHQUFHO2tCQUROLEtBQUs7WUFVRixNQUFNO2tCQURULEtBQUs7WUFtQkcsVUFBVTtrQkFBbEIsS0FBSztZQUVHLHlCQUF5QjtrQkFBakMsS0FBSztZQUVHLGlCQUFpQjtrQkFBekIsS0FBSztZQUVHLDhCQUE4QjtrQkFBdEMsS0FBSztZQUVHLDJCQUEyQjtrQkFBbkMsS0FBSztZQUVHLDhCQUE4QjtrQkFBdEMsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFFSSxvQkFBb0I7a0JBQTdCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29udGVudENoaWxkLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZsb2F0TGFiZWxUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBMYXllckxpc3RDb250cm9sc0VudW0sIExheWVyTGlzdERpc3BsYWNlbWVudCB9IGZyb20gJy4vbGF5ZXItbGlzdC5lbnVtJztcbmltcG9ydCB7IExheWVyTGlzdFNlbGVjdFZpc2libGVFbnVtIH0gZnJvbSAnLi9sYXllci1saXN0LmVudW0nO1xuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBSZXBsYXlTdWJqZWN0LFxuICBTdWJzY3JpcHRpb24sXG4gIEVNUFRZLFxuICB0aW1lclxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgTWV0YWRhdGFPcHRpb25zLFxuICBNZXRhZGF0YUxheWVyT3B0aW9uc1xufSBmcm9tICcuLi8uLi9tZXRhZGF0YS9zaGFyZWQvbWV0YWRhdGEuaW50ZXJmYWNlJztcbmltcG9ydCB7IExheWVyTGlzdENvbnRyb2xzT3B0aW9ucyB9IGZyb20gJy4uL2xheWVyLWxpc3QtdG9vbC9sYXllci1saXN0LXRvb2wuaW50ZXJmYWNlJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcC9zaGFyZWQvbWFwJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vc2hhcmVkL2xheWVycy9sYXllcic7XG5pbXBvcnQgeyBMaW5rZWRQcm9wZXJ0aWVzLCBMYXllcnNMaW5rIH0gZnJvbSAnLi4vc2hhcmVkL2xheWVycy9sYXllci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWF0U2xpZGVyQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCAqIGFzIG9sZXh0ZW50IGZyb20gJ29sL2V4dGVudCc7XG5cbi8vIFRPRE86IFRoaXMgY2xhc3MgY291bGQgdXNlIGEgY2xlYW4gdXAuIEFsc28sIHNvbWUgbWV0aG9kcyBjb3VsZCBiZSBtb3ZlZCBlYWxzZXdoZXJlXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tbGF5ZXItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXllci1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5ZXItbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMYXllckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG9yZGVyYWJsZSA9IHRydWU7XG4gIHRocmVzaG9sZFRvRmlsdGVyQW5kU29ydCA9IDU7XG5cbiAgbGF5ZXJzJDogQmVoYXZpb3JTdWJqZWN0PExheWVyW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cbiAgY2hhbmdlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PHZvaWQ+KDEpO1xuXG4gIHNob3dUb29sYmFyJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgcHVibGljIGxheWVyVG9vbDogYm9vbGVhbjtcblxuICBwdWJsaWMgaGlkZVNlbGVjdGVkTGF5ZXJzOiBib29sZWFuID0gdHJ1ZTtcbiAgYWN0aXZlTGF5ZXIkOiBCZWhhdmlvclN1YmplY3Q8TGF5ZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIGxheWVyc0NoZWNrZWQ6IExheWVyW10gPSBbXTtcbiAgcHVibGljIHNlbGVjdGlvbjogYm9vbGVhbjtcblxuICBwcml2YXRlIGNoYW5nZSQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgbGF5ZXJzJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIGxheWVySXRlbUNoYW5nZURldGVjdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgQENvbnRlbnRDaGlsZCgnaWdvTGF5ZXJJdGVtVG9vbGJhcicsIC8qIFRPRE86IGFkZCBzdGF0aWMgZmxhZyAqLyB7fSlcbiAgdGVtcGxhdGVMYXllclRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgbGF5ZXJzQXJlQWxsVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgb2djQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSB0aW1lQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuICBzZXQgbWFwKHZhbHVlOiBJZ29NYXApIHtcbiAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tYXA6IElnb01hcDtcblxuICBASW5wdXQoKVxuICBzZXQgbGF5ZXJzKHZhbHVlOiBMYXllcltdKSB7XG4gICAgdGhpcy5fbGF5ZXJzID0gdGhpcy5yZW1vdmVQcm9ibGVtTGF5ZXJJbkxpc3QodmFsdWUpO1xuICAgIHRoaXMubmV4dCgpO1xuICB9XG4gIGdldCBsYXllcnMoKTogTGF5ZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheWVycztcbiAgfVxuICBwcml2YXRlIF9sYXllcnM6IExheWVyW107XG5cbiAgc2V0IGFjdGl2ZUxheWVyKHZhbHVlOiBMYXllcikge1xuICAgIHRoaXMuX2FjdGl2ZUxheWVyID0gdmFsdWU7XG4gICAgdGhpcy5hY3RpdmVMYXllciQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IGFjdGl2ZUxheWVyKCk6IExheWVyIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlTGF5ZXI7XG4gIH1cbiAgcHJpdmF0ZSBfYWN0aXZlTGF5ZXI6IExheWVyO1xuXG4gIEBJbnB1dCgpIGZsb2F0TGFiZWw6IEZsb2F0TGFiZWxUeXBlID0gJ2F1dG8nO1xuXG4gIEBJbnB1dCgpIGxheWVyRmlsdGVyQW5kU29ydE9wdGlvbnM6IExheWVyTGlzdENvbnRyb2xzT3B0aW9ucyA9IHt9O1xuXG4gIEBJbnB1dCgpIGV4Y2x1ZGVCYXNlTGF5ZXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdG9nZ2xlTGVnZW5kT25WaXNpYmlsaXR5Q2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZXhwYW5kTGVnZW5kT2ZWaXNpYmxlTGF5ZXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdXBkYXRlTGVnZW5kT25SZXNvbHV0aW9uQ2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgcXVlcnlCYWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBhcHBsaWVkRmlsdGVyQW5kU29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8TGF5ZXJMaXN0Q29udHJvbHNPcHRpb25zPigpO1xuXG4gIGdldCBrZXl3b3JkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2tleXdvcmQ7XG4gIH1cbiAgc2V0IGtleXdvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleXdvcmQgPSB2YWx1ZTtcbiAgICB0aGlzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9rZXl3b3JkID0gdW5kZWZpbmVkO1xuXG4gIGdldCBvbmx5VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb25seVZpc2libGU7XG4gIH1cbiAgc2V0IG9ubHlWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb25seVZpc2libGUgPSB2YWx1ZTtcbiAgICB0aGlzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9vbmx5VmlzaWJsZSA9IGZhbHNlO1xuXG4gIGdldCBzb3J0QWxwaGEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRlZEFscGhhO1xuICB9XG4gIHNldCBzb3J0QWxwaGEodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zb3J0ZWRBbHBoYSA9IHZhbHVlO1xuICAgIHRoaXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3NvcnRlZEFscGhhID0gZmFsc2U7XG5cbiAgZ2V0IG9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5hY3RpdmVMYXllciQuZ2V0VmFsdWUoKS5vcGFjaXR5ICogMTAwKTtcbiAgfVxuICBzZXQgb3BhY2l0eShvcGFjaXR5OiBudW1iZXIpIHtcbiAgICB0aGlzLmFjdGl2ZUxheWVyJC5nZXRWYWx1ZSgpLm9wYWNpdHkgPSBvcGFjaXR5IC8gMTAwO1xuICB9XG5cbiAgZ2V0IGJhZGdlT3BhY2l0eSgpIHtcbiAgICBpZiAodGhpcy5vcGFjaXR5ID09PSAxMDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldCByYWlzZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgICF0aGlzLm9yZGVyYWJsZSB8fFxuICAgICAgdGhpcy5hY3RpdmVMYXllci5iYXNlTGF5ZXIgfHxcbiAgICAgIHRoaXMuZ2V0VXBwZXJMYXllcigpLmlkID09PSB0aGlzLmFjdGl2ZUxheWVyLmlkIHx8XG4gICAgICB0aGlzLmlzVXBwZXJCYXNlbGF5ZXIodGhpcy5hY3RpdmVMYXllcilcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgbG93ZXJEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5vcmRlcmFibGUgfHxcbiAgICAgIHRoaXMuYWN0aXZlTGF5ZXIuYmFzZUxheWVyIHx8XG4gICAgICB0aGlzLmdldExvd2VyTGF5ZXIoKS5pZCA9PT0gdGhpcy5hY3RpdmVMYXllci5pZCB8fFxuICAgICAgdGhpcy5pc0xvd2VyQmFzZWxheWVyKHRoaXMuYWN0aXZlTGF5ZXIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IHJhaXNlRGlzYWJsZWRTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5sYXllcnNDaGVja2VkLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgIXRoaXMub3JkZXJhYmxlIHx8XG4gICAgICAhdGhpcy5yYWlzYWJsZUxheWVycyh0aGlzLmxheWVyc0NoZWNrZWQpIHx8XG4gICAgICB0aGlzLnNlbGVjdEFsbENoZWNrID09PSB0cnVlXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGxvd2VyRGlzYWJsZWRTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5sYXllcnNDaGVja2VkLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgIXRoaXMub3JkZXJhYmxlIHx8XG4gICAgICAhdGhpcy5sb3dlcmFibGVMYXllcnModGhpcy5sYXllcnNDaGVja2VkKSB8fFxuICAgICAgdGhpcy5zZWxlY3RBbGxDaGVjayA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBjaGVja09wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzQ2hlY2tlZE9wYWNpdHkoKSAqIDEwMDtcbiAgfVxuICBzZXQgY2hlY2tPcGFjaXR5KG9wYWNpdHk6IG51bWJlcikge1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnNDaGVja2VkKSB7XG4gICAgICBsYXllci5vcGFjaXR5ID0gb3BhY2l0eSAvIDEwMDtcbiAgICB9XG4gIH1cblxuICBnZXQgbGF5ZXJMaXN0RGlzcGxhY2VtZW50KCk6IHR5cGVvZiBMYXllckxpc3REaXNwbGFjZW1lbnQge1xuICAgIHJldHVybiBMYXllckxpc3REaXNwbGFjZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlT3BhY2l0eSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBzZWxlY3RBbGxDaGVjazogYm9vbGVhbjtcbiAgcHVibGljIHNlbGVjdEFsbENoZWNrJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odW5kZWZpbmVkKTtcbiAgcHJpdmF0ZSBzZWxlY3RBbGxDaGVjayQkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgc2VhcmNoIHRlcm0gc3RyZWFtIGFuZCB0cmlnZ2VyIHJlc2VhcmNoZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZSQkID0gdGhpcy5jaGFuZ2UkXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxheWVycy5sZW5ndGggPT09IDAgPyBFTVBUWSA6IHRpbWVyKDUwKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dUb29sYmFyJC5uZXh0KHRoaXMuY29tcHV0ZVNob3dUb29sYmFyKCkpO1xuICAgICAgICB0aGlzLmxheWVycyQubmV4dCh0aGlzLmNvbXB1dGVMYXllcnModGhpcy5sYXllcnMuc2xpY2UoMCkpKTtcbiAgICAgICAgdGhpcy5hcHBsaWVkRmlsdGVyQW5kU29ydC5lbWl0KHtcbiAgICAgICAgICBrZXl3b3JkOiB0aGlzLmtleXdvcmQsXG4gICAgICAgICAgc29ydEFscGhhOiB0aGlzLnNvcnRBbHBoYSxcbiAgICAgICAgICBvbmx5VmlzaWJsZTogdGhpcy5vbmx5VmlzaWJsZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3RBbGxDaGVjayQkID0gdGhpcy5zZWxlY3RBbGxDaGVjayQuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RBbGxDaGVjayA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sYXllcnMkJCA9IHRoaXMubGF5ZXJzJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubGF5ZXJzKSB7XG4gICAgICAgIGxldCBjaGVja3MgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgbGF5ZXIuc3RhdHVzJC5zdWJzY3JpYmUodmFsU3RhdHVzID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxTdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIobGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChsYXllci5vcHRpb25zLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgdGhpcy5sYXllclRvb2wgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGF5ZXIub3B0aW9ucy5jaGVjaykge1xuICAgICAgICAgICAgY2hlY2tzICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV4Y2x1ZGVCYXNlTGF5ZXJzKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVjayA9XG4gICAgICAgICAgICBjaGVja3MgPT09XG4gICAgICAgICAgICAgIHRoaXMubGF5ZXJzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAobGF5KSA9PiBsYXkuYmFzZUxheWVyICE9PSB0cnVlICYmIGxheS5zaG93SW5MYXllckxpc3RcbiAgICAgICAgICAgICAgKS5sZW5ndGhcbiAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVjayA9XG4gICAgICAgICAgICBjaGVja3MgPT09IHRoaXMubGF5ZXJzLmZpbHRlcigobGF5KSA9PiBsYXkuc2hvd0luTGF5ZXJMaXN0KS5sZW5ndGhcbiAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hhbmdlJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNlbGVjdEFsbENoZWNrJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmxheWVycyQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBhY3RpdmVMYXllcklzVmFsaWQobGF5ZXI6IExheWVyKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgY29uc3QgbGF5ZXJFeHRlbnQgPSBsYXllci5vcHRpb25zLmV4dGVudDtcbiAgICBjb25zdCBtYXhMYXllclpvb21FeHRlbnQgPSB0aGlzLm1hcC52aWV3Q29udHJvbGxlci5tYXhMYXllclpvb21FeHRlbnQ7XG5cbiAgICBpZiAobGF5ZXJFeHRlbnQpIHtcbiAgICAgIGlmIChtYXhMYXllclpvb21FeHRlbnQpIHtcbiAgICAgICAgdmFsaWQgPSBvbGV4dGVudC5jb250YWluc0V4dGVudChtYXhMYXllclpvb21FeHRlbnQsIGxheWVyRXh0ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgYWN0aXZlTGF5ZXJzQXJlVmFsaWQobGF5ZXJzOiBMYXllcltdKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgY29uc3QgbGF5ZXJzRXh0ZW50ID0gb2xleHRlbnQuY3JlYXRlRW1wdHkoKTtcbiAgICBjb25zdCBtYXhMYXllclpvb21FeHRlbnQgPSB0aGlzLm1hcC52aWV3Q29udHJvbGxlci5tYXhMYXllclpvb21FeHRlbnQ7XG5cbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVycykge1xuICAgICAgY29uc3QgbGF5ZXJFeHRlbnQgPSBsYXllci5vcHRpb25zLmV4dGVudDtcblxuICAgICAgaWYgKGxheWVyRXh0ZW50ICYmICFsYXllckV4dGVudC5pbmNsdWRlcyhJbmZpbml0eSkpIHtcbiAgICAgICAgb2xleHRlbnQuZXh0ZW5kKGxheWVyc0V4dGVudCwgbGF5ZXJFeHRlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghb2xleHRlbnQuaXNFbXB0eShsYXllcnNFeHRlbnQpKSB7XG4gICAgICBpZiAobWF4TGF5ZXJab29tRXh0ZW50KSB7XG4gICAgICAgIHZhbGlkID0gKG9sZXh0ZW50LmNvbnRhaW5zRXh0ZW50KG1heExheWVyWm9vbUV4dGVudCwgbGF5ZXJzRXh0ZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIHpvb21MYXllckV4dGVudHMobGF5ZXI6IExheWVyKSB7XG4gICAgdGhpcy5tYXAudmlld0NvbnRyb2xsZXIuem9vbVRvRXh0ZW50KGxheWVyLm9wdGlvbnMuZXh0ZW50KTtcbiAgfVxuXG4gIHpvb21MYXllcnNFeHRlbnRzKGxheWVyczogTGF5ZXJbXSkge1xuICAgIGNvbnN0IGxheWVyc0V4dGVudCA9IG9sZXh0ZW50LmNyZWF0ZUVtcHR5KCkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVycykge1xuICAgICAgY29uc3QgbGF5ZXJFeHRlbnQgPSBsYXllci5vcHRpb25zLmV4dGVudDtcblxuICAgICAgaWYgKGxheWVyRXh0ZW50KSB7XG4gICAgICAgIG9sZXh0ZW50LmV4dGVuZChsYXllcnNFeHRlbnQsIGxheWVyRXh0ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXAudmlld0NvbnRyb2xsZXIuem9vbVRvRXh0ZW50KGxheWVyc0V4dGVudCk7XG4gIH1cblxuICBjaGFuZ2VPcGFjaXR5KGV2ZW50OiBNYXRTbGlkZXJDaGFuZ2XCoCl7XG4gICAgdGhpcy5vcGFjaXR5ID0gZXZlbnQudmFsdWU7XG4gIH1cblxuICBjbGVhcktleXdvcmQoKSB7XG4gICAgdGhpcy5rZXl3b3JkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0TG93ZXJMYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5sYXllcnNcbiAgICAgIC5maWx0ZXIoKGwpID0+ICFsLmJhc2VMYXllcilcbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuekluZGV4IDwgY3VycmVudC56SW5kZXggPyBwcmV2IDogY3VycmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgeyB6SW5kZXg6IHVuZGVmaW5lZCwgaWQ6IHVuZGVmaW5lZCB9XG4gICAgICApO1xuICB9XG5cbiAgaXNMb3dlckJhc2VsYXllcihsYXllcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sYXllcnMuZmluZEluZGV4KChsYXkpID0+IGxheWVyLmlkID09PSBsYXkuaWQpO1xuICAgIGlmIChcbiAgICAgIHRoaXMubGF5ZXJzICYmXG4gICAgICB0aGlzLmxheWVyc1tpbmRleCArIDFdICYmXG4gICAgICB0aGlzLmxheWVyc1tpbmRleCArIDFdLmJhc2VMYXllciA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFVwcGVyTGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzXG4gICAgICAuZmlsdGVyKChsKSA9PiAhbC5iYXNlTGF5ZXIpXG4gICAgICAucmVkdWNlKFxuICAgICAgICAocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmV2LnpJbmRleCA+IGN1cnJlbnQuekluZGV4ID8gcHJldiA6IGN1cnJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHsgekluZGV4OiB1bmRlZmluZWQsIGlkOiB1bmRlZmluZWQgfVxuICAgICAgKTtcbiAgfVxuXG4gIGlzVXBwZXJCYXNlbGF5ZXIobGF5ZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGF5ZXJzLmZpbmRJbmRleCgobGF5KSA9PiBsYXllci5pZCA9PT0gbGF5LmlkKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLmxheWVycyAmJlxuICAgICAgdGhpcy5sYXllcnNbaW5kZXggLSAxXSAmJlxuICAgICAgdGhpcy5sYXllcnNbaW5kZXggLSAxXS5iYXNlTGF5ZXIgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBtb3ZlQWN0aXZlTGF5ZXIoYWN0aXZlTGF5ZXI6IExheWVyLCBhY3Rpb250eXBlOiBMYXllckxpc3REaXNwbGFjZW1lbnQpIHtcbiAgICBjb25zdCBsYXllcnNUb01vdmUgPSBbYWN0aXZlTGF5ZXJdO1xuICAgIGNvbnN0IHNvcnRlZExheWVyc1RvTW92ZSA9IFtdO1xuICAgIHRoaXMuZ2V0TGlua2VkTGF5ZXJzKGFjdGl2ZUxheWVyLCBsYXllcnNUb01vdmUpO1xuICAgIHRoaXMubGF5ZXJzLm1hcChsYXllciA9PiB7XG4gICAgICBpZiAobGF5ZXJzVG9Nb3ZlLmluZGV4T2YobGF5ZXIpICE9PSAtMSkge1xuICAgICAgICBzb3J0ZWRMYXllcnNUb01vdmUucHVzaChsYXllcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aW9udHlwZSA9PT0gTGF5ZXJMaXN0RGlzcGxhY2VtZW50LlJhaXNlKSB7XG4gICAgICB0aGlzLnJhaXNlTGF5ZXJzKHNvcnRlZExheWVyc1RvTW92ZSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9udHlwZSA9PT0gTGF5ZXJMaXN0RGlzcGxhY2VtZW50Lkxvd2VyKSB7XG4gICAgICB0aGlzLmxvd2VyTGF5ZXJzKHNvcnRlZExheWVyc1RvTW92ZSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGlua2VkTGF5ZXJzKGFjdGl2ZUxheWVyOiBMYXllciwgbGF5ZXJzTGlzdDogTGF5ZXJbXSkge1xuICAgIGNvbnN0IGxpbmtlZExheWVycyA9IGFjdGl2ZUxheWVyLm9wdGlvbnMubGlua2VkTGF5ZXJzIGFzIExheWVyc0xpbms7XG4gICAgaWYgKCFsaW5rZWRMYXllcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudExpbmtlZElkID0gbGlua2VkTGF5ZXJzLmxpbmtJZDtcbiAgICBjb25zdCBjdXJyZW50TGlua3MgPSBsaW5rZWRMYXllcnMubGlua3M7XG4gICAgY29uc3QgaXNQYXJlbnRMYXllciA9IGN1cnJlbnRMaW5rcyA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChpc1BhcmVudExheWVyKSB7XG4gICAgICAvLyBzZWFyY2ggZm9yIGNoaWxkIGxheWVyc1xuICAgICAgY3VycmVudExpbmtzLm1hcChsaW5rID0+IHtcbiAgICAgICAgaWYgKCFsaW5rLnByb3BlcnRpZXMgfHwgbGluay5wcm9wZXJ0aWVzLmluZGV4T2YoTGlua2VkUHJvcGVydGllcy5aSU5ERVgpID09PSAtMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsaW5rLmxpbmtlZElkcy5tYXAobGlua2VkSWQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTGF5ZXIgPSB0aGlzLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLm9wdGlvbnMubGlua2VkTGF5ZXJzPy5saW5rSWQgPT09IGxpbmtlZElkKTtcbiAgICAgICAgICBpZiAoY2hpbGRMYXllcikge1xuICAgICAgICAgICAgaWYgKCFsYXllcnNMaXN0LmluY2x1ZGVzKGNoaWxkTGF5ZXIpKSB7XG4gICAgICAgICAgICAgIGxheWVyc0xpc3QucHVzaChjaGlsZExheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNlYXJjaCBmb3IgcGFyZW50IGxheWVyXG4gICAgICB0aGlzLmxheWVycy5tYXAocGFyZW50TGF5ZXIgPT4ge1xuICAgICAgICBpZiAocGFyZW50TGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnM/LmxpbmtzKSB7XG4gICAgICAgICAgcGFyZW50TGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua3MubWFwKGwgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBsLnByb3BlcnRpZXM/LmluZGV4T2YoTGlua2VkUHJvcGVydGllcy5aSU5ERVgpICE9PSAtMSAmJlxuICAgICAgICAgICAgICBsLmJpZGlyZWN0aW9ubmFsICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgICBsLmxpbmtlZElkcy5pbmRleE9mKGN1cnJlbnRMaW5rZWRJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGxheWVyc0xpc3QucHVzaChwYXJlbnRMYXllcik7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0TGlua2VkTGF5ZXJzKHBhcmVudExheWVyLCBsYXllcnNMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogRm9yIHNlbGVjdGlvbiBtb2RlIGRpc2FibGVkIGF0dHJpYnV0ZVxuICAgKi9cbiAgcmFpc2FibGVMYXllcnMobGF5ZXJzOiBMYXllcltdKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZmFsc2U7XG4gICAgbGV0IGJhc2UgPSAwO1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XG4gICAgICBjb25zdCBtYXBJbmRleCA9IHRoaXMubGF5ZXJzLmZpbmRJbmRleCgobGF5KSA9PiBsYXllci5pZCA9PT0gbGF5LmlkKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRMYXllciA9IHRoaXMubGF5ZXJzW21hcEluZGV4XTtcbiAgICAgIGlmIChjdXJyZW50TGF5ZXIuYmFzZUxheWVyKSB7XG4gICAgICAgIGJhc2UgKz0gMTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldmlvdXNMYXllciA9IHRoaXMubGF5ZXJzW21hcEluZGV4IC0gMV07XG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzTGF5ZXIgJiZcbiAgICAgICAgcHJldmlvdXNMYXllci5iYXNlTGF5ZXIgIT09IHRydWUgJiZcbiAgICAgICAgIWxheWVycy5maW5kKChsYXkpID0+IHByZXZpb3VzTGF5ZXIuaWQgPT09IGxheS5pZCkgJiZcbiAgICAgICAgY3VycmVudExheWVyLmJhc2VMYXllciAhPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAodGhpcy5sYXllcnNDaGVja2VkLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmxheWVyc0NoZWNrZWRbMF0uYmFzZUxheWVyKSB8fFxuICAgICAgYmFzZSA9PT0gdGhpcy5sYXllcnNDaGVja2VkLmxlbmd0aFxuICAgICkge1xuICAgICAgcmVzcG9uc2UgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLypcbiAgICogV2hlbiBtdWx0aXBsZSBsYXllcnMgaXMgc2VsZWN0ZWQgYnV0IHNvbWUgbWF5IGJlIGFsbG93IHRvIG1vdmVcbiAgICovXG4gIHJhaXNhYmxlTGF5ZXIoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA8IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXllcnNbaW5kZXggLSAxXS5vcHRpb25zLmNoZWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYWlzYWJsZUxheWVyKGluZGV4IC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmFpc2VMYXllcnMobGF5ZXJzOiBMYXllcltdLCBmcm9tVWk6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3QgbGF5ZXJzVG9SYWlzZSA9IFtdO1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubGF5ZXJzLmZpbmRJbmRleCgobGF5KSA9PiBsYXkuaWQgPT09IGxheWVyLmlkKTtcbiAgICAgIGlmICh0aGlzLnJhaXNhYmxlTGF5ZXIoaW5kZXgpKSB7XG4gICAgICAgIGxheWVyc1RvUmFpc2UucHVzaChsYXllcik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWFwLnJhaXNlTGF5ZXJzKGxheWVyc1RvUmFpc2UpO1xuICAgIGlmIChmcm9tVWkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuY29tcHV0ZUVsZW1lbnRSZWYoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2Nyb2xsZWRJbnRvVmlldyhlbGVtZW50c1swXSwgZWxlbWVudHNbMV0ub2Zmc2V0UGFyZW50KSkge1xuICAgICAgICAgIGVsZW1lbnRzWzBdLnNjcm9sbFRvcCA9IGVsZW1lbnRzWzFdLm9mZnNldFBhcmVudC5vZmZzZXRUb3A7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG4gIC8qXG4gICAqIEZvciBzZWxlY3Rpb24gbW9kZSBkaXNhYmxlZCBhdHRyaWJ1dGVcbiAgICovXG4gIGxvd2VyYWJsZUxheWVycyhsYXllcnM6IExheWVyW10pIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBmYWxzZTtcbiAgICBsZXQgYmFzZSA9IDA7XG4gICAgZm9yIChjb25zdCBsYXllciBvZiBsYXllcnMpIHtcbiAgICAgIGNvbnN0IG1hcEluZGV4ID0gdGhpcy5sYXllcnMuZmluZEluZGV4KChsYXkpID0+IGxheWVyLmlkID09PSBsYXkuaWQpO1xuICAgICAgY29uc3QgY3VycmVudExheWVyID0gdGhpcy5sYXllcnNbbWFwSW5kZXhdO1xuICAgICAgaWYgKGN1cnJlbnRMYXllci5iYXNlTGF5ZXIpIHtcbiAgICAgICAgYmFzZSArPSAxO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXh0TGF5ZXIgPSB0aGlzLmxheWVyc1ttYXBJbmRleCArIDFdO1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0TGF5ZXIgJiZcbiAgICAgICAgbmV4dExheWVyLmJhc2VMYXllciAhPT0gdHJ1ZSAmJlxuICAgICAgICAhbGF5ZXJzLmZpbmQoKGxheSkgPT4gbmV4dExheWVyLmlkID09PSBsYXkuaWQpXG4gICAgICApIHtcbiAgICAgICAgcmVzcG9uc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICh0aGlzLmxheWVyc0NoZWNrZWQubGVuZ3RoID09PSAxICYmIHRoaXMubGF5ZXJzQ2hlY2tlZFswXS5iYXNlTGF5ZXIpIHx8XG4gICAgICBiYXNlID09PSB0aGlzLmxheWVyc0NoZWNrZWQubGVuZ3RoXG4gICAgKSB7XG4gICAgICByZXNwb25zZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKlxuICAgKiBXaGVuIG11bHRpcGxlIGxheWVycyBpcyBzZWxlY3RlZCBidXQgc29tZSBtYXkgYmUgYWxsb3cgdG8gbW92ZVxuICAgKi9cbiAgbG93ZXJhYmxlTGF5ZXIoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChcbiAgICAgIGluZGV4ID5cbiAgICAgIHRoaXMubGF5ZXJzLmZpbHRlcigobGF5KSA9PiBsYXkuYmFzZUxheWVyICE9PSB0cnVlKS5sZW5ndGggLSAyXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGF5ZXJzW2luZGV4ICsgMV0ub3B0aW9ucy5jaGVjaykge1xuICAgICAgcmV0dXJuIHRoaXMubG93ZXJhYmxlTGF5ZXIoaW5kZXggKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBsb3dlckxheWVycyhsYXllcnM6IExheWVyW10sIGZyb21VaTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBjb25zdCBsYXllcnNUb0xvd2VyID0gW107XG4gICAgZm9yIChjb25zdCBsYXllciBvZiBsYXllcnMpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sYXllcnMuZmluZEluZGV4KChsYXkpID0+IGxheS5pZCA9PT0gbGF5ZXIuaWQpO1xuICAgICAgaWYgKHRoaXMubG93ZXJhYmxlTGF5ZXIoaW5kZXgpKSB7XG4gICAgICAgIGxheWVyc1RvTG93ZXIucHVzaChsYXllcik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWFwLmxvd2VyTGF5ZXJzKGxheWVyc1RvTG93ZXIpO1xuICAgIGlmIChmcm9tVWkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuY29tcHV0ZUVsZW1lbnRSZWYoJ2xvd2VyJyk7XG4gICAgICAgIGlmICghdGhpcy5pc1Njcm9sbGVkSW50b1ZpZXcoZWxlbWVudHNbMF0sIGVsZW1lbnRzWzFdLm9mZnNldFBhcmVudCkpIHtcbiAgICAgICAgICBlbGVtZW50c1swXS5zY3JvbGxUb3AgPVxuICAgICAgICAgICAgZWxlbWVudHNbMV0ub2Zmc2V0UGFyZW50Lm9mZnNldFRvcCArXG4gICAgICAgICAgICBlbGVtZW50c1sxXS5vZmZzZXRQYXJlbnQub2Zmc2V0SGVpZ2h0IC1cbiAgICAgICAgICAgIGVsZW1lbnRzWzBdLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBuZXh0KCkge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVMYXllcnMobGF5ZXJzOiBMYXllcltdKTogTGF5ZXJbXSB7XG4gICAgbGV0IGxheWVyc091dCA9IHRoaXMuZmlsdGVyTGF5ZXJzKGxheWVycyk7XG4gICAgaWYgKHRoaXMuc29ydEFscGhhKSB7XG4gICAgICBsYXllcnNPdXQgPSB0aGlzLnNvcnRMYXllcnNCeVRpdGxlKGxheWVyc091dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyc091dCA9IHRoaXMuc29ydExheWVyc0J5WmluZGV4KGxheWVyc091dCk7XG4gICAgfVxuICAgIHJldHVybiBsYXllcnNPdXQ7XG4gIH1cblxuICBvbktleXdvcmRDaGFuZ2UodGVybSkge1xuICAgIHRoaXMua2V5d29yZCA9IHRlcm07XG4gIH1cblxuICBvbkFwcGxpZWRGaWx0ZXJBbmRTb3J0Q2hhbmdlKGFwcGxpZWRGaWx0ZXI6IExheWVyTGlzdENvbnRyb2xzT3B0aW9ucykge1xuICAgIHRoaXMua2V5d29yZCA9IGFwcGxpZWRGaWx0ZXIua2V5d29yZDtcbiAgICB0aGlzLm9ubHlWaXNpYmxlID0gYXBwbGllZEZpbHRlci5vbmx5VmlzaWJsZTtcbiAgICB0aGlzLnNvcnRBbHBoYSA9IGFwcGxpZWRGaWx0ZXIuc29ydEFscGhhO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJMYXllcnMobGF5ZXJzOiBMYXllcltdKTogTGF5ZXJbXSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5sYXllckZpbHRlckFuZFNvcnRPcHRpb25zLnNob3dUb29sYmFyID09PSBMYXllckxpc3RDb250cm9sc0VudW0ubmV2ZXJcbiAgICApIHtcbiAgICAgIHJldHVybiBsYXllcnM7XG4gICAgfVxuICAgIGlmICghdGhpcy5rZXl3b3JkICYmICF0aGlzLm9ubHlWaXNpYmxlKSB7XG4gICAgICByZXR1cm4gbGF5ZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IGtlZXBMYXllcklkcyA9IGxheWVycy5tYXAoKGxheWVyOiBMYXllcikgPT4gbGF5ZXIuaWQpO1xuXG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyOiBMYXllcikgPT4ge1xuICAgICAgY29uc3QgbGF5ZXJPcHRpb25zID0gKGxheWVyLm9wdGlvbnMgYXMgTWV0YWRhdGFMYXllck9wdGlvbnMpIHx8IHt9O1xuICAgICAgY29uc3QgZGF0YVNvdXJjZU9wdGlvbnMgPSBsYXllci5kYXRhU291cmNlLm9wdGlvbnMgfHwge307XG4gICAgICBjb25zdCBtZXRhZGF0YSA9IGxheWVyT3B0aW9ucy5tZXRhZGF0YSB8fCAoe30gYXMgTWV0YWRhdGFPcHRpb25zKTtcbiAgICAgIGNvbnN0IGtleXdvcmRzID0gbWV0YWRhdGEua2V5d29yZExpc3QgfHwgW107XG4gICAgICBjb25zdCBsYXllcktleXdvcmRzID0ga2V5d29yZHMubWFwKChrdzogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBrdy5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5rZXl3b3JkICYmIGxheWVyLnRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsS2V5d29yZCA9IHRoaXMua2V5d29yZFxuICAgICAgICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbiAgICAgICAgY29uc3QgbGF5ZXJUaXRsZSA9IGxheWVyLnRpdGxlXG4gICAgICAgICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpO1xuICAgICAgICBjb25zdCBkYXRhU291cmNlVHlwZSA9IGRhdGFTb3VyY2VPcHRpb25zLnR5cGUgfHwgJyc7XG4gICAgICAgIGNvbnN0IGtleXdvcmRSZWdleCA9IG5ldyBSZWdFeHAobG9jYWxLZXl3b3JkLCAnZ2knKTtcbiAgICAgICAgY29uc3Qga2V5d29yZEluTGlzdCA9XG4gICAgICAgICAgbGF5ZXJLZXl3b3Jkcy5maW5kKChrdzogc3RyaW5nKSA9PiBrZXl3b3JkUmVnZXgudGVzdChrdykpICE9PVxuICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFrZXl3b3JkUmVnZXgudGVzdChsYXllclRpdGxlKSAmJlxuICAgICAgICAgICEodGhpcy5rZXl3b3JkLnRvTG93ZXJDYXNlKCkgPT09IGRhdGFTb3VyY2VUeXBlLnRvTG93ZXJDYXNlKCkpICYmXG4gICAgICAgICAgIWtleXdvcmRJbkxpc3RcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBrZWVwTGF5ZXJJZHMuaW5kZXhPZihsYXllci5pZCk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGtlZXBMYXllcklkcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vbmx5VmlzaWJsZSAmJiBsYXllci52aXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGtlZXBMYXllcklkcy5pbmRleE9mKGxheWVyLmlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBrZWVwTGF5ZXJJZHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxheWVycy5maWx0ZXIoXG4gICAgICAobGF5ZXI6IExheWVyKSA9PiBrZWVwTGF5ZXJJZHMuaW5kZXhPZihsYXllci5pZCkgIT09IC0xXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydExheWVyc0J5WmluZGV4KGxheWVyczogTGF5ZXJbXSkge1xuICAgIHJldHVybiBsYXllcnMuc29ydCgobGF5ZXIxLCBsYXllcjIpID0+IGxheWVyMi56SW5kZXggLSBsYXllcjEuekluZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydExheWVyc0J5VGl0bGUobGF5ZXJzOiBMYXllcltdKSB7XG4gICAgcmV0dXJuIGxheWVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAodGhpcy5ub3JtYWxpemUoYS50aXRsZSkgPCB0aGlzLm5vcm1hbGl6ZShiLnRpdGxlKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ub3JtYWxpemUoYS50aXRsZSkgPiB0aGlzLm5vcm1hbGl6ZShiLnRpdGxlKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAubm9ybWFsaXplKCdORkQnKVxuICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVTaG93VG9vbGJhcigpOiBib29sZWFuIHtcbiAgICBzd2l0Y2ggKHRoaXMubGF5ZXJGaWx0ZXJBbmRTb3J0T3B0aW9ucy5zaG93VG9vbGJhcikge1xuICAgICAgY2FzZSBMYXllckxpc3RDb250cm9sc0VudW0uYWx3YXlzOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgTGF5ZXJMaXN0Q29udHJvbHNFbnVtLm5ldmVyOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5sYXllcnMubGVuZ3RoID49IHRoaXMudGhyZXNob2xkVG9GaWx0ZXJBbmRTb3J0IHx8XG4gICAgICAgICAgdGhpcy5rZXl3b3JkIHx8XG4gICAgICAgICAgdGhpcy5vbmx5VmlzaWJsZVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTGF5ZXJUb29sKGxheWVyKSB7XG4gICAgdGhpcy50b2dnbGVPcGFjaXR5ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMubGF5ZXJUb29sICYmIGxheWVyID09PSB0aGlzLmFjdGl2ZUxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyVG9vbCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxheWVyVG9vbCA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBsYXkgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgIGxheS5vcHRpb25zLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBsYXllci5vcHRpb25zLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5hY3RpdmVMYXllciA9IGxheWVyO1xuICB9XG5cbiAgcmVtb3ZlTGF5ZXJzKGxheWVycz86IExheWVyW10pIHtcbiAgICBpZiAobGF5ZXJzICYmIGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxheWVyc0NoZWNrZWQgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XG4gICAgICAgIGlmIChsYXllci5vcHRpb25zLnJlbW92YWJsZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBsYXllci5tYXAucmVtb3ZlTGF5ZXIobGF5ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGF5ZXJzQ2hlY2tlZC5wdXNoKGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWxheWVycyAmJiB0aGlzLmFjdGl2ZUxheWVyLm9wdGlvbnMucmVtb3ZhYmxlICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5hY3RpdmVMYXllci5tYXAucmVtb3ZlTGF5ZXIodGhpcy5hY3RpdmVMYXllcik7XG4gICAgICB0aGlzLmxheWVyVG9vbCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVZpc2liaWxpdHkobGF5ZXJzPzogTGF5ZXJbXSkge1xuICAgIGlmIChsYXllcnMgJiYgbGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSB0aGlzLmhpZGVTZWxlY3RlZExheWVycztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYXllckl0ZW1DaGFuZ2VEZXRlY3Rpb24kLm5leHQodHJ1ZSk7XG4gIH1cblxuICBpc0xheWVyUmVtb3ZhYmxlKGxheWVyOiBMYXllcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBsYXllci5vcHRpb25zLnJlbW92YWJsZSAhPT0gZmFsc2U7XG4gIH1cblxuICBpc0FsbExheWVyc1JlbW92YWJsZShsYXllcnM6IExheWVyW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gbGF5ZXJzLmV2ZXJ5KGwgPT4gdGhpcy5pc0xheWVyUmVtb3ZhYmxlKGwpKTtcbiAgfVxuXG4gIGdldCBzdGF0dXNTZWxlY3RlZExheWVyc0NoZWNrKCk6IExheWVyTGlzdFNlbGVjdFZpc2libGVFbnVtIHtcbiAgICBsZXQgc3RhdHVzU2VsZWN0ZWRMYXllcnM6IExheWVyTGlzdFNlbGVjdFZpc2libGVFbnVtID1cbiAgICAgIExheWVyTGlzdFNlbGVjdFZpc2libGVFbnVtLk5VTEw7XG4gICAgbGV0IGZpbmRUcnVlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGZpbmRGYWxzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubGF5ZXJzQ2hlY2tlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHN0YXR1c1NlbGVjdGVkTGF5ZXJzID0gTGF5ZXJMaXN0U2VsZWN0VmlzaWJsZUVudW0uTlVMTDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzU2VsZWN0ZWRMYXllcnMgPSBMYXllckxpc3RTZWxlY3RWaXNpYmxlRW51bS5NSVhFRDtcbiAgICAgIHRoaXMuaGlkZVNlbGVjdGVkTGF5ZXJzID0gZmFsc2U7XG5cbiAgICAgIGZvciAoY29uc3QgbGF5ZXIyIG9mIHRoaXMubGF5ZXJzQ2hlY2tlZCkge1xuICAgICAgICBpZiAobGF5ZXIyLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICBmaW5kVHJ1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheWVyMi52aXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgIGZpbmRGYWxzZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmRUcnVlID09PSB0cnVlICYmIGZpbmRGYWxzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgc3RhdHVzU2VsZWN0ZWRMYXllcnMgPSBMYXllckxpc3RTZWxlY3RWaXNpYmxlRW51bS5BTExfVklTSUJMRTtcbiAgICAgIH1cbiAgICAgIGlmIChmaW5kVHJ1ZSA9PT0gZmFsc2UgJiYgZmluZEZhbHNlID09PSB0cnVlKSB7XG4gICAgICAgIHN0YXR1c1NlbGVjdGVkTGF5ZXJzID0gTGF5ZXJMaXN0U2VsZWN0VmlzaWJsZUVudW0uQUxMX0hJRERFTjtcbiAgICAgICAgdGhpcy5oaWRlU2VsZWN0ZWRMYXllcnMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0dXNTZWxlY3RlZExheWVycztcbiAgfVxuXG4gIGxheWVyc0NoZWNrKGV2ZW50OiB7IGxheWVyOiBMYXllcjsgY2hlY2s6IGJvb2xlYW4gfSkge1xuICAgIGV2ZW50LmxheWVyLm9wdGlvbnMuY2hlY2sgPSBldmVudC5jaGVjaztcbiAgICBpZiAoZXZlbnQuY2hlY2sgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGV2ZW50TWFwSW5kZXggPSB0aGlzLmxheWVycy5maW5kSW5kZXgoXG4gICAgICAgIChsYXllcikgPT4gZXZlbnQubGF5ZXIuaWQgPT09IGxheWVyLmlkXG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVyc0NoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgbWFwSW5kZXggPSB0aGlzLmxheWVycy5maW5kSW5kZXgoKGxheSkgPT4gbGF5ZXIuaWQgPT09IGxheS5pZCk7XG4gICAgICAgIGlmIChldmVudE1hcEluZGV4IDwgbWFwSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLmxheWVyc0NoZWNrZWQuc3BsaWNlKFxuICAgICAgICAgICAgdGhpcy5sYXllcnNDaGVja2VkLmZpbmRJbmRleCgobGF5KSA9PiBsYXllci5pZCA9PT0gbGF5LmlkKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBldmVudC5sYXllclxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAodGhpcy5leGNsdWRlQmFzZUxheWVycykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLmxheWVyc0NoZWNrZWQubGVuZ3RoID09PVxuICAgICAgICAgICAgICB0aGlzLmxheWVycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGxheSkgPT4gbGF5LmJhc2VMYXllciAhPT0gdHJ1ZSAmJiBsYXkuc2hvd0luTGF5ZXJMaXN0XG4gICAgICAgICAgICAgICkubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVjayA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5leGNsdWRlQmFzZUxheWVycykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLmxheWVyc0NoZWNrZWQubGVuZ3RoID09PVxuICAgICAgICAgICAgICB0aGlzLmxheWVycy5maWx0ZXIoKGxheSkgPT4gbGF5LnNob3dJbkxheWVyTGlzdCkubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVjayA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5sYXllcnNDaGVja2VkLnB1c2goZXZlbnQubGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMubGF5ZXJzQ2hlY2tlZC5maW5kSW5kZXgoXG4gICAgICAgIChsYXllcikgPT4gZXZlbnQubGF5ZXIuaWQgPT09IGxheWVyLmlkXG4gICAgICApO1xuICAgICAgdGhpcy5sYXllcnNDaGVja2VkLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXhjbHVkZUJhc2VMYXllcnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5sYXllcnNDaGVja2VkLmxlbmd0aCA9PT1cbiAgICAgICAgdGhpcy5sYXllcnMuZmlsdGVyKFxuICAgICAgICAgIChsYXkpID0+IGxheS5iYXNlTGF5ZXIgIT09IHRydWUgJiYgbGF5LnNob3dJbkxheWVyTGlzdFxuICAgICAgICApLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2sgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVjayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuZXhjbHVkZUJhc2VMYXllcnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5sYXllcnNDaGVja2VkLmxlbmd0aCA9PT1cbiAgICAgICAgdGhpcy5sYXllcnMuZmlsdGVyKChsYXkpID0+IGxheS5zaG93SW5MYXllckxpc3QpLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2sgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVjayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdGlvbk1vZGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbHVlO1xuICAgIHRoaXMuYWN0aXZlTGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmxheWVyVG9vbCA9IGZhbHNlO1xuICAgICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVycykge1xuICAgICAgICBpZiAobGF5ZXIub3B0aW9ucy5jaGVjaykge1xuICAgICAgICAgIHRoaXMubGF5ZXJzQ2hlY2tlZC5wdXNoKGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxheWVyc0NoZWNrZWRPcGFjaXR5KCk6IGFueSB7XG4gICAgaWYgKHRoaXMubGF5ZXJzQ2hlY2tlZC5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3BhY2l0eSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVyc0NoZWNrZWQpIHtcbiAgICAgICAgb3BhY2l0eS5wdXNoKGxheWVyLm9wYWNpdHkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWxsKCkge1xuICAgIGlmICghdGhpcy5zZWxlY3RBbGxDaGVjaykge1xuICAgICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVycykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5leGNsdWRlQmFzZUxheWVycyAmJlxuICAgICAgICAgIGxheWVyLmJhc2VMYXllciAhPT0gdHJ1ZSAmJlxuICAgICAgICAgIGxheWVyLnNob3dJbkxheWVyTGlzdFxuICAgICAgICApIHtcbiAgICAgICAgICBsYXllci5vcHRpb25zLmNoZWNrID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmxheWVyc0NoZWNrZWQucHVzaChsYXllcik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZXhjbHVkZUJhc2VMYXllcnMgJiYgbGF5ZXIuc2hvd0luTGF5ZXJMaXN0KSB7XG4gICAgICAgICAgbGF5ZXIub3B0aW9ucy5jaGVjayA9IHRydWU7XG4gICAgICAgICAgdGhpcy5sYXllcnNDaGVja2VkLnB1c2gobGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdEFsbENoZWNrJC5uZXh0KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgIGxheWVyLm9wdGlvbnMuY2hlY2sgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGF5ZXJzQ2hlY2tlZCA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3RBbGxDaGVjayQubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgaXNTY3JvbGxlZEludG9WaWV3KGVsZW1Tb3VyY2UsIGVsZW0pIHtcbiAgICBjb25zdCBkb2NWaWV3VG9wID0gZWxlbVNvdXJjZS5zY3JvbGxUb3A7XG4gICAgY29uc3QgZG9jVmlld0JvdHRvbSA9IGRvY1ZpZXdUb3AgKyBlbGVtU291cmNlLmNsaWVudEhlaWdodDtcblxuICAgIGNvbnN0IGVsZW1Ub3AgPSBlbGVtLm9mZnNldFRvcDtcbiAgICBjb25zdCBlbGVtQm90dG9tID0gZWxlbVRvcCArIGVsZW0uY2xpZW50SGVpZ2h0O1xuICAgIHJldHVybiBlbGVtQm90dG9tIDw9IGRvY1ZpZXdCb3R0b20gJiYgZWxlbVRvcCA+PSBkb2NWaWV3VG9wO1xuICB9XG5cbiAgY29tcHV0ZUVsZW1lbnRSZWYodHlwZT86IHN0cmluZykge1xuICAgIGNvbnN0IGNoZWNrSXRlbXMgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtYXQtY2hlY2tib3gtY2hlY2tlZCdcbiAgICApO1xuICAgIGNvbnN0IGNoZWNrSXRlbSA9XG4gICAgICB0eXBlID09PSAnbG93ZXInXG4gICAgICAgID8gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgJ21hdC1jaGVja2JveC1jaGVja2VkJ1xuICAgICAgICApW2NoZWNrSXRlbXMubGVuZ3RoIC0gMV1cbiAgICAgICAgOiB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAnbWF0LWNoZWNrYm94LWNoZWNrZWQnXG4gICAgICAgIClbMF07XG4gICAgY29uc3QgaWdvTGlzdCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcbiAgICAgICdpZ28tbGlzdCdcbiAgICApWzBdO1xuXG4gICAgcmV0dXJuIFtpZ29MaXN0LCBjaGVja0l0ZW1dO1xuICB9XG5cbiAgcmVtb3ZlUHJvYmxlbUxheWVySW5MaXN0KGxheWVyc0xpc3Q6IExheWVyW10pOiBMYXllcltdIHtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVyc0xpc3QpIHtcbiAgICAgIGlmIChsYXllci5vbExvYWRpbmdQcm9ibGVtID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKGxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxheWVyc0xpc3Q7XG4gIH1cbn1cbiIsIjxtYXQtbGlzdD5cbiAgPGlnby1sYXllci1saXN0LXRvb2wgKm5nSWY9XCJzaG93VG9vbGJhciQgfCBhc3luY1wiXG4gICAgZmxvYXRMYWJlbD1cImF1dG9cIlxuICAgIFtsYXllcnNBcmVBbGxWaXNpYmxlXT1cImxheWVyc0FyZUFsbFZpc2libGVcIlxuICAgIFt0ZXJtXT1cImxheWVyRmlsdGVyQW5kU29ydE9wdGlvbnMua2V5d29yZFwiXG4gICAgW29ubHlWaXNpYmxlXT1cImxheWVyRmlsdGVyQW5kU29ydE9wdGlvbnMub25seVZpc2libGVcIlxuICAgIFtzb3J0QWxwaGFdPVwibGF5ZXJGaWx0ZXJBbmRTb3J0T3B0aW9ucy5zb3J0QWxwaGFcIlxuICAgIChhcHBsaWVkRmlsdGVyQW5kU29ydCk9XCJvbkFwcGxpZWRGaWx0ZXJBbmRTb3J0Q2hhbmdlKCRldmVudClcIlxuICAgIChzZWxlY3Rpb24pPVwidG9nZ2xlU2VsZWN0aW9uTW9kZSgkZXZlbnQpXCI+XG4gIDwvaWdvLWxheWVyLWxpc3QtdG9vbD5cbjwvbWF0LWxpc3Q+XG5cbjxtYXQtbGlzdC1pdGVtICpuZ0lmPVwic2VsZWN0aW9uXCIgY2xhc3M9XCJzZWxlY3QtYWxsXCI+XG4gIDxtYXQtY2hlY2tib3hcbiAgICBjbGFzcz1cInNlbGVjdC1hbGwtY2hlY2tib3ggbWF0LXN1YmhlYWRpbmctMlwiXG4gICAgW2NvbG9yXT1cIiFzZWxlY3RBbGxDaGVjayAmJiBsYXllcnNDaGVja2VkLmxlbmd0aCA+IDAgPyAnYWNjZW50JyA6ICdwcmltYXJ5J1wiXG4gICAgKGNoYW5nZSk9XCJzZWxlY3RBbGwoKVwiXG4gICAgW2NoZWNrZWRdPVwic2VsZWN0QWxsQ2hlY2tcIlxuICAgIFtpbmRldGVybWluYXRlXT1cIiFzZWxlY3RBbGxDaGVjayAmJiBsYXllcnNDaGVja2VkLmxlbmd0aCA+IDBcIj4ge3tzZWxlY3RBbGxDaGVjayA/ICgnaWdvLmdlby5sYXllci5kZXNlbGVjdEFsbCcgfCB0cmFuc2xhdGUpIDogKCdpZ28uZ2VvLmxheWVyLnNlbGVjdEFsbCcgfCB0cmFuc2xhdGUpfX1cbiAgPC9tYXQtY2hlY2tib3g+XG48L21hdC1saXN0LWl0ZW0+XG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cblxuPGlnby1saXN0ICNpZ29MaXN0IFtuZ0NsYXNzXT1cInsnaWdvLWxpc3QtdG9vbHMtbXVsdGknOiBzZWxlY3Rpb24sICdpZ28tbGlzdC10b29scy1zaW5nbGUnOiAobGF5ZXJUb29sICYmICFzZWxlY3Rpb24pLCAnaWdvLWxpc3Qtbm8tdG9vbHMnOiAoIWxheWVyVG9vbCAmJiAhc2VsZWN0aW9uKX1cIiBbbmF2aWdhdGlvbl09XCJmYWxzZVwiIFtzZWxlY3Rpb25dPVwiZmFsc2VcIj5cbiAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1sYXllciBsZXQtaT1cImluZGV4XCIgW25nRm9yT2ZdPVwibGF5ZXJzJCB8IGFzeW5jXCI+XG4gICAgPGlnby1sYXllci1pdGVtICpuZ0lmPVwiIShleGNsdWRlQmFzZUxheWVycyAmJiBsYXllci5iYXNlTGF5ZXIpXCJcbiAgICAgIGlnb0xpc3RJdGVtXG4gICAgICBbbGF5ZXJdPVwibGF5ZXJcIlxuICAgICAgW2FjdGl2ZUxheWVyXT1cImFjdGl2ZUxheWVyXCJcbiAgICAgIFtvcmRlcmFibGVdPVwib3JkZXJhYmxlICYmICFsYXllci5iYXNlTGF5ZXJcIlxuICAgICAgW2xvd2VyRGlzYWJsZWRdPVwiZ2V0TG93ZXJMYXllcigpLmlkID09PSBsYXllci5pZFwiXG4gICAgICBbcmFpc2VEaXNhYmxlZF09XCJnZXRVcHBlckxheWVyKCkuaWQgPT09IGxheWVyLmlkXCJcbiAgICAgIFtxdWVyeUJhZGdlXT1cInF1ZXJ5QmFkZ2VcIlxuICAgICAgW2V4cGFuZExlZ2VuZElmVmlzaWJsZV09XCJleHBhbmRMZWdlbmRPZlZpc2libGVMYXllcnNcIlxuICAgICAgW3VwZGF0ZUxlZ2VuZE9uUmVzb2x1dGlvbkNoYW5nZV09XCJ1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2VcIlxuICAgICAgW3RvZ2dsZUxlZ2VuZE9uVmlzaWJpbGl0eUNoYW5nZV09XCJ0b2dnbGVMZWdlbmRPblZpc2liaWxpdHlDaGFuZ2VcIlxuICAgICAgW3NlbGVjdGlvbk1vZGVdPVwic2VsZWN0aW9uXCJcbiAgICAgIFtzZWxlY3RBbGxdPVwic2VsZWN0QWxsQ2hlY2tcIlxuICAgICAgW2xheWVyQ2hlY2tdPVwibGF5ZXIub3B0aW9ucy5jaGVja1wiXG4gICAgICBbY2hhbmdlRGV0ZWN0aW9uXT1cImxheWVySXRlbUNoYW5nZURldGVjdGlvbiRcIlxuICAgICAgKGFjdGlvbik9XCJ0b2dnbGVMYXllclRvb2woJGV2ZW50KVwiXG4gICAgICAoY2hlY2tib3gpPVwibGF5ZXJzQ2hlY2soJGV2ZW50KVwiPlxuICAgIDwvaWdvLWxheWVyLWl0ZW0+XG4gIDwvbmctdGVtcGxhdGU+XG48L2lnby1saXN0PlxuXG48aWdvLXBhbmVsICpuZ0lmPVwiIXNlbGVjdGlvbiAmJiBsYXllclRvb2wgJiYgYWN0aXZlTGF5ZXJcIiBjbGFzcz1cImlnby1sYXllci1hY3Rpb25zLWNvbnRhaW5lclwiIFt0aXRsZV09XCJhY3RpdmVMYXllci50aXRsZVwiPlxuICA8ZGl2IGNsYXNzPVwiaWdvLWxheWVyLWJ1dHRvbi1ncm91cFwiPlxuICAgIDxidXR0b25cbiAgICAgICpuZ0lmPVwiaXNMYXllclJlbW92YWJsZShhY3RpdmVMYXllcilcIlxuICAgICAgY2xhc3M9XCJkZWxldGUtYnV0dG9uXCJcbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmxheWVyLnJlbW92ZUxheWVyJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAoY2xpY2spPVwicmVtb3ZlTGF5ZXJzKClcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiZGVsZXRlXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiZG93bi1idXR0b25cIlxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgW21hdFRvb2x0aXBdPVwiKHNvcnRBbHBoYSB8fCBvbmx5VmlzaWJsZSB8fCBrZXl3b3JkKSA/ICgnaWdvLmdlby5sYXllci5maWx0ZXJMb3dlckxheWVyJyB8IHRyYW5zbGF0ZSkgOiAoJ2lnby5nZW8ubGF5ZXIubG93ZXJMYXllcicgfCB0cmFuc2xhdGUpXCJcbiAgICAgIFtkaXNhYmxlZF09XCJsb3dlckRpc2FibGVkXCJcbiAgICAgIChjbGljayk9XCJtb3ZlQWN0aXZlTGF5ZXIoYWN0aXZlTGF5ZXIsbGF5ZXJMaXN0RGlzcGxhY2VtZW50Lkxvd2VyKVwiPlxuICAgICAgPG1hdC1pY29uIFttYXRCYWRnZV09XCIoc29ydEFscGhhIHx8IG9ubHlWaXNpYmxlIHx8IGtleXdvcmQpID8gJyEnIDogJydcIiBtYXRCYWRnZUNvbG9yPVwid2FyblwiIG1hdEJhZGdlU2l6ZT1cIm1lZGl1bVwiIFttYXRCYWRnZUhpZGRlbl09XCJsb3dlckRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICBzdmdJY29uPVwiYXJyb3ctZG93blwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cInVwLWJ1dHRvblwiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICBbbWF0VG9vbHRpcF09XCIoc29ydEFscGhhIHx8IG9ubHlWaXNpYmxlIHx8IGtleXdvcmQpID8gKCdpZ28uZ2VvLmxheWVyLmZpbHRlclJhaXNlTGF5ZXInIHwgdHJhbnNsYXRlKSA6ICgnaWdvLmdlby5sYXllci5yYWlzZUxheWVyJyB8IHRyYW5zbGF0ZSlcIlxuICAgICAgW2Rpc2FibGVkXT1cInJhaXNlRGlzYWJsZWRcIlxuICAgICAgKGNsaWNrKT1cIm1vdmVBY3RpdmVMYXllcihhY3RpdmVMYXllcixsYXllckxpc3REaXNwbGFjZW1lbnQuUmFpc2UpXCI+XG4gICAgICA8bWF0LWljb24gW21hdEJhZGdlXT1cIihzb3J0QWxwaGEgfHwgb25seVZpc2libGUgfHwga2V5d29yZCkgPyAnIScgOiAnJ1wiIG1hdEJhZGdlQ29sb3I9XCJ3YXJuXCIgbWF0QmFkZ2VTaXplPVwibWVkaXVtXCIgW21hdEJhZGdlSGlkZGVuXT1cInJhaXNlRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIHN2Z0ljb249XCJhcnJvdy11cFwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8IS0tIDxsYWJlbD57eyAnaWdvLmdlby5sYXllci5vcGFjaXR5JyB8IHRyYW5zbGF0ZSB9fSA8L2xhYmVsPiAtLT5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cIm9wYWNpdHktYnV0dG9uXCJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgIFttYXRNZW51VHJpZ2dlckZvcl09XCJvcGFjaXR5TWVudVwiXG4gICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5sYXllci5vcGFjaXR5JyB8IHRyYW5zbGF0ZVwiPlxuICAgICAgPG1hdC1pY29uIFttYXRCYWRnZV09XCJiYWRnZU9wYWNpdHlcIiBtYXRCYWRnZUNvbG9yPVwicHJpbWFyeVwiIG1hdEJhZGdlU2l6ZT1cIm1lZGl1bVwiIHN2Z0ljb249XCJvcGFjaXR5XCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxtYXQtbWVudSAjb3BhY2l0eU1lbnU9XCJtYXRNZW51XCIgY2xhc3M9XCJtYXQtbWVudS1vcGFjaXR5LXNsaWRlclwiPlxuICAgICAgPGRpdiBpZD1cIm9wYWNpdHktbWVudVwiPlxuICAgICAgICA8bWF0LXNsaWRlclxuICAgICAgICAgIGlkPVwib3BhY2l0eS1zbGlkZXJcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgdGh1bWJMYWJlbFxuICAgICAgICAgIHRpY2tJbnRlcnZhbD1cIjVcIlxuICAgICAgICAgIHN0ZXA9XCI1XCJcbiAgICAgICAgICBbbWluXT1cIjBcIlxuICAgICAgICAgIFttYXhdPVwiMTAwXCJcbiAgICAgICAgICBbdmFsdWVdPVwib3BhY2l0eVwiXG4gICAgICAgICAgKGlucHV0KT1cImNoYW5nZU9wYWNpdHkoJGV2ZW50KVwiXG4gICAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8ubGF5ZXIub3BhY2l0eScgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgIChjbGljaykgPSBcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCI+XG4gICAgICAgIDwvbWF0LXNsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWF0LW1lbnU+XG5cbiAgICA8YnV0dG9uXG4gICAgICAqbmdJZj1cImFjdGl2ZUxheWVySXNWYWxpZChhY3RpdmVMYXllcilcIlxuICAgICAgY2xhc3M9XCJ6b29tTGF5ZXItYnV0dG9uXCJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmxheWVyLnpvb21MYXllcicgfCB0cmFuc2xhdGVcIlxuICAgICAgKGNsaWNrKT1cInpvb21MYXllckV4dGVudHMoYWN0aXZlTGF5ZXIpXCI+XG4gICAgICA8bWF0LWljb24gbWF0QmFkZ2VDb2xvcj1cInByaW1hcnlcIiBtYXRCYWRnZVNpemU9XCJtZWRpdW1cIiBzdmdJY29uPVwibWFnbmlmeS1zY2FuXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxuZy1jb250YWluZXIgaWdvTGF5ZXJJdGVtVG9vbGJhclxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVMYXllclRvb2xiYXJcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntsYXllcjogYWN0aXZlTGF5ZXJ9XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbaWdvTGF5ZXJJdGVtVG9vbGJhcl1cIj48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9pZ28tcGFuZWw+XG5cbjxpZ28tcGFuZWwgKm5nSWY9XCJzZWxlY3Rpb24gJiYgbGF5ZXJzLmxlbmd0aCA+IDBcIiBjbGFzcz1cImlnby1sYXllci1hY3Rpb25zLWNvbnRhaW5lclwiIFt0aXRsZV09XCInaWdvLmdlby5sYXllci50b29scycgfCB0cmFuc2xhdGVcIj5cbiAgPGRpdiBjbGFzcz1cImFjdGlvbnMtYnV0dG9ucy1tdWx0aVwiPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiZGVsZXRlLWJ1dHRvblwiXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgIGNvbG9yPVwid2FyblwiXG4gICAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICBbZGlzYWJsZWRdPVwibGF5ZXJzQ2hlY2tlZC5sZW5ndGggPT09IDBcIlxuICAgICAgW21hdFRvb2x0aXBdPVwiaXNBbGxMYXllcnNSZW1vdmFibGUobGF5ZXJzQ2hlY2tlZCkgPyAoJ2lnby5nZW8ubGF5ZXIucmVtb3ZlU2VsZWN0ZWRMYXllcnMnIHwgdHJhbnNsYXRlKSA6ICdpZ28uZ2VvLmxheWVyLnJlbW92ZVNlbGVjdGVkTGF5ZXJzUmVzdHJpY3Rpb24nIHwgdHJhbnNsYXRlXCJcbiAgICAgIChjbGljayk9XCJyZW1vdmVMYXllcnMobGF5ZXJzQ2hlY2tlZClcIj5cbiAgICAgIDxtYXQtaWNvbiBbbWF0QmFkZ2VdPVwiJyEnXCIgbWF0QmFkZ2VDb2xvcj1cIndhcm5cIiBtYXRCYWRnZVNpemU9XCJtZWRpdW1cIiBbbWF0QmFkZ2VIaWRkZW5dPVwiaXNBbGxMYXllcnNSZW1vdmFibGUobGF5ZXJzQ2hlY2tlZClcIlxuICAgICAgICAgICAgICAgIHN2Z0ljb249XCJkZWxldGVcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJleWUtYnV0dG9uXCJcbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgIFtkaXNhYmxlZF09XCJsYXllcnNDaGVja2VkLmxlbmd0aCA9PT0gMFwiXG4gICAgICBbbWF0VG9vbHRpcF09XCJzdGF0dXNTZWxlY3RlZExheWVyc0NoZWNrID09PSAnQUxMX0hJRERFTicgPyAoJ2lnby5nZW8ubGF5ZXIuc2hvd1NlbGVjdGVkTGF5ZXJzJyB8IHRyYW5zbGF0ZSkgOiAoJ2lnby5nZW8ubGF5ZXIuaGlkZVNlbGVjdGVkTGF5ZXJzJyB8IHRyYW5zbGF0ZSlcIlxuICAgICAgKGNsaWNrKT1cInRvZ2dsZVZpc2liaWxpdHkobGF5ZXJzQ2hlY2tlZClcIj5cbiAgICAgIDxtYXQtaWNvblx0W3N2Z0ljb25dPVwiKHN0YXR1c1NlbGVjdGVkTGF5ZXJzQ2hlY2sgPT09ICdBTExfSElEREVOJykgPyAnZXllLW9mZicgOiAnZXllJ1wiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImRvd24tYnV0dG9uXCJcbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgIFttYXRUb29sdGlwXT1cIihzb3J0QWxwaGEgfHwgb25seVZpc2libGUgfHwga2V5d29yZCkgPyAoJ2lnby5nZW8ubGF5ZXIuZmlsdGVyTG93ZXJMYXllcicgfCB0cmFuc2xhdGUpIDogKCdpZ28uZ2VvLmxheWVyLmxvd2VyTGF5ZXInIHwgdHJhbnNsYXRlKVwiXG4gICAgICBbZGlzYWJsZWRdPVwibG93ZXJEaXNhYmxlZFNlbGVjdGlvblwiXG4gICAgICAoY2xpY2spPVwibG93ZXJMYXllcnMobGF5ZXJzQ2hlY2tlZClcIj5cbiAgICAgIDxtYXQtaWNvbiBbbWF0QmFkZ2VdPVwiKHNvcnRBbHBoYSB8fCBvbmx5VmlzaWJsZSB8fCBrZXl3b3JkKSA/ICchJyA6ICcnXCIgbWF0QmFkZ2VDb2xvcj1cIndhcm5cIiBtYXRCYWRnZVNpemU9XCJtZWRpdW1cIiBbbWF0QmFkZ2VIaWRkZW5dPVwibG93ZXJEaXNhYmxlZFNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgc3ZnSWNvbj1cImFycm93LWRvd25cIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJ1cC1idXR0b25cIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgW21hdFRvb2x0aXBdPVwiKHNvcnRBbHBoYSB8fCBvbmx5VmlzaWJsZSB8fCBrZXl3b3JkKSA/ICgnaWdvLmdlby5sYXllci5maWx0ZXJSYWlzZUxheWVyJyB8IHRyYW5zbGF0ZSkgOiAoJ2lnby5nZW8ubGF5ZXIucmFpc2VMYXllcicgfCB0cmFuc2xhdGUpXCJcbiAgICAgIFtkaXNhYmxlZF09XCJyYWlzZURpc2FibGVkU2VsZWN0aW9uXCJcbiAgICAgIChjbGljayk9XCJyYWlzZUxheWVycyhsYXllcnNDaGVja2VkKVwiPlxuICAgICAgPG1hdC1pY29uIFttYXRCYWRnZV09XCIoc29ydEFscGhhIHx8IG9ubHlWaXNpYmxlIHx8IGtleXdvcmQpID8gJyEnIDogJydcIiBtYXRCYWRnZUNvbG9yPVwid2FyblwiIG1hdEJhZGdlU2l6ZT1cIm1lZGl1bVwiIFttYXRCYWRnZUhpZGRlbl09XCJyYWlzZURpc2FibGVkU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBzdmdJY29uPVwiYXJyb3ctdXBcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJvcGFjaXR5LWJ1dHRvblwiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICBbZGlzYWJsZWRdPVwibGF5ZXJzQ2hlY2tlZC5sZW5ndGggPT09IDBcIlxuICAgICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm9wYWNpdHlNZW51XCJcbiAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmxheWVyLm9wYWNpdHknIHwgdHJhbnNsYXRlXCI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cIm9wYWNpdHlcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPG1hdC1tZW51ICNvcGFjaXR5TWVudT1cIm1hdE1lbnVcIiAgY2xhc3M9XCJtYXQtbWVudS1vcGFjaXR5LXNsaWRlclwiPlxuICAgICAgPGRpdiBpZD1cIm9wYWNpdHktbWVudVwiPlxuICAgICAgICA8bWF0LXNsaWRlciAqbmdJZj1cImxheWVyc0NoZWNrZWQubGVuZ3RoXCJcbiAgICAgICAgICBpZD1cIm9wYWNpdHktc2xpZGVyXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHRodW1iTGFiZWxcbiAgICAgICAgICB0aWNrSW50ZXJ2YWw9XCI1XCJcbiAgICAgICAgICBzdGVwPVwiNVwiXG4gICAgICAgICAgW21pbl09XCIwXCJcbiAgICAgICAgICBbbWF4XT1cIjEwMFwiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJjaGVja09wYWNpdHlcIlxuICAgICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmxheWVyLm9wYWNpdHknIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgICAgICAgIChjbGljaykgPSBcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICA8L21hdC1zbGlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L21hdC1tZW51PlxuXG4gICAgPGJ1dHRvblxuICAgICAgKm5nSWY9XCJsYXllcnNDaGVja2VkLmxlbmd0aCAhPT0gMCAmJiBhY3RpdmVMYXllcnNBcmVWYWxpZChsYXllcnNDaGVja2VkKVwiXG4gICAgICBjbGFzcz1cInpvb21MYXllci1idXR0b25cIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8ubGF5ZXIuem9vbUxheWVycycgfCB0cmFuc2xhdGVcIlxuICAgICAgKGNsaWNrKT1cInpvb21MYXllcnNFeHRlbnRzKGxheWVyc0NoZWNrZWQpXCI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cIm1hZ25pZnktc2NhblwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9pZ28tcGFuZWw+XG4iXX0=