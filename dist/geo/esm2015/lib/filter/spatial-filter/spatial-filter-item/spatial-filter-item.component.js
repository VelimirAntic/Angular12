import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SpatialFilterType } from '../../shared/spatial-filter.enum';
import { SelectionModel } from '@angular/cdk/collections';
import { SpatialFilterItemType } from './../../shared/spatial-filter.enum';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import * as olStyle from 'ol/style';
import * as olproj from 'ol/proj';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MeasureLengthUnit } from '../../../measure';
import { EntityStoreFilterSelectionStrategy, EntityTableColumnRenderer } from '@igo2/common';
import { VectorLayer } from '../../../layer/shared';
import { NestedTreeControl } from '@angular/cdk/tree';
import { debounceTime } from 'rxjs/operators';
import { FeatureMotion, FeatureStoreSelectionStrategy } from '../../../feature';
import { FeatureDataSource } from '../../../datasource/shared';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/spatial-filter.service";
import * as i2 from "@igo2/core";
function SpatialFilterItemComponent_mat_slide_toggle_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-slide-toggle", 17);
    i0.ɵɵlistener("change", function SpatialFilterItemComponent_mat_slide_toggle_5_Template_mat_slide_toggle_change_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onDrawControlChange(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r0.drawControlIsActive)("labelPosition", "before");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "igo.geo.spatialFilter.drawControl"), " ");
} }
function SpatialFilterItemComponent_mat_slide_toggle_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-slide-toggle", 17);
    i0.ɵɵlistener("change", function SpatialFilterItemComponent_mat_slide_toggle_6_Template_mat_slide_toggle_change_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onfreehandControlChange(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r1.freehandDrawIsActive)("labelPosition", "before");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "igo.geo.spatialFilter.freehandControl"), " ");
} }
function SpatialFilterItemComponent_div_7_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const measureUnit_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", measureUnit_r15);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.measure." + measureUnit_r15), " ");
} }
function SpatialFilterItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "form", 19);
    i0.ɵɵelementStart(2, "mat-form-field", 20);
    i0.ɵɵelement(3, "input", 21);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-form-field", 22);
    i0.ɵɵelementStart(6, "mat-select", 23);
    i0.ɵɵlistener("selectionChange", function SpatialFilterItemComponent_div_7_Template_mat_select_selectionChange_6_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.onMeasureUnitChange($event.value); });
    i0.ɵɵtemplate(7, SpatialFilterItemComponent_div_7_mat_option_7_Template, 3, 4, "mat-option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(4, 6, "igo.geo.spatialFilter.buffer"));
    i0.ɵɵproperty("formControl", ctx_r2.bufferFormControl)("value", 0)("readonly", ctx_r2.formControl.value === null);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r2.measureUnit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.measureUnits);
} }
function SpatialFilterItemComponent_div_8_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const measureUnit_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", measureUnit_r19);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.measure." + measureUnit_r19), " ");
} }
function SpatialFilterItemComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "form", 26);
    i0.ɵɵelementStart(2, "mat-form-field", 27);
    i0.ɵɵelementStart(3, "input", 28);
    i0.ɵɵlistener("input", function SpatialFilterItemComponent_div_8_Template_input_input_3_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.getRadius(); });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-form-field", 22);
    i0.ɵɵelementStart(6, "mat-select", 23);
    i0.ɵɵlistener("selectionChange", function SpatialFilterItemComponent_div_8_Template_mat_select_selectionChange_6_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onMeasureUnitChange($event.value); });
    i0.ɵɵtemplate(7, SpatialFilterItemComponent_div_8_mat_option_7_Template, 3, 4, "mat-option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(4, 6, "igo.geo.spatialFilter.radius"));
    i0.ɵɵproperty("formControl", ctx_r3.radiusFormControl)("value", 1000)("readonly", ctx_r3.freehandDrawIsActive && ctx_r3.formControl.value === null);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r3.measureUnit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.measureUnits);
} }
function SpatialFilterItemComponent_mat_radio_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-radio-button", 29);
    i0.ɵɵlistener("change", function SpatialFilterItemComponent_mat_radio_button_13_Template_mat_radio_button_change_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.onItemTypeChange($event); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.spatialFilter." + item_r23), " ");
} }
function SpatialFilterItemComponent_div_14_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell", 40);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.geo.spatialFilter.Thematics"));
} }
function SpatialFilterItemComponent_div_14_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-header-cell", 41);
    i0.ɵɵelementStart(1, "mat-checkbox", 42);
    i0.ɵɵlistener("change", function SpatialFilterItemComponent_div_14_mat_header_cell_5_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return $event ? ctx_r32.masterToggle() : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r27.isAllSelected())("indeterminate", ctx_r27.selectedThematics.hasValue() && !ctx_r27.isAllSelected());
} }
function SpatialFilterItemComponent_div_14_mat_header_row_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-header-row");
} }
function SpatialFilterItemComponent_div_14_mat_row_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-row");
} }
function SpatialFilterItemComponent_div_14_mat_tree_node_9_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 43);
    i0.ɵɵelementStart(1, "li", 44);
    i0.ɵɵelement(2, "button", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "mat-checkbox", 46);
    i0.ɵɵlistener("click", function SpatialFilterItemComponent_div_14_mat_tree_node_9_Template_mat_checkbox_click_4_listener($event) { return $event.stopPropagation(); })("change", function SpatialFilterItemComponent_div_14_mat_tree_node_9_Template_mat_checkbox_change_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r38); const node_r35 = restoredCtx.$implicit; const ctx_r37 = i0.ɵɵnextContext(2); return $event ? ctx_r37.onToggleChange(node_r35) : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r35 = ctx.$implicit;
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", node_r35.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r30.selectedThematics.isSelected(node_r35));
} }
function SpatialFilterItemComponent_div_14_mat_nested_tree_node_10_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-nested-tree-node");
    i0.ɵɵelementStart(1, "div", 44);
    i0.ɵɵelementStart(2, "button", 47);
    i0.ɵɵlistener("click", function SpatialFilterItemComponent_div_14_mat_nested_tree_node_10_Template_button_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r41); const node_r39 = restoredCtx.$implicit; const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.onToggleClick(node_r39); });
    i0.ɵɵelement(3, "mat-icon", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "mat-checkbox", 49);
    i0.ɵɵlistener("change", function SpatialFilterItemComponent_div_14_mat_nested_tree_node_10_Template_mat_checkbox_change_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r41); const node_r39 = restoredCtx.$implicit; const ctx_r42 = i0.ɵɵnextContext(2); return $event ? ctx_r42.childrensToggle(node_r39) : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ul", 50);
    i0.ɵɵelementContainer(7, 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r39 = ctx.$implicit;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("svgIcon", ctx_r31.treeControl.isExpanded(node_r39) ? "chevron-down" : "chevron-right");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r39.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r31.isAllSelected(node_r39))("indeterminate", ctx_r31.hasChildrenSelected(node_r39) && !ctx_r31.isAllSelected(node_r39));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("example-tree-invisible", !ctx_r31.treeControl.isExpanded(node_r39));
} }
function SpatialFilterItemComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelementStart(1, "mat-table");
    i0.ɵɵelementContainerStart(2, 31);
    i0.ɵɵtemplate(3, SpatialFilterItemComponent_div_14_mat_header_cell_3_Template, 3, 3, "mat-header-cell", 32);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(4, 33);
    i0.ɵɵtemplate(5, SpatialFilterItemComponent_div_14_mat_header_cell_5_Template, 2, 2, "mat-header-cell", 34);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(6, SpatialFilterItemComponent_div_14_mat_header_row_6_Template, 1, 0, "mat-header-row", 35);
    i0.ɵɵtemplate(7, SpatialFilterItemComponent_div_14_mat_row_7_Template, 1, 0, "mat-row", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-tree", 37);
    i0.ɵɵtemplate(9, SpatialFilterItemComponent_div_14_mat_tree_node_9_Template, 5, 2, "mat-tree-node", 38);
    i0.ɵɵtemplate(10, SpatialFilterItemComponent_div_14_mat_nested_tree_node_10_Template, 8, 6, "mat-nested-tree-node", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r5.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r5.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r5.dataSource)("treeControl", ctx_r5.treeControl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTreeNodeDefWhen", ctx_r5.hasChild);
} }
function SpatialFilterItemComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 52);
    i0.ɵɵlistener("click", function SpatialFilterItemComponent_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(); return ctx_r43.clearSearch(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r6.disabledClearSearch());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.spatialFilter.clearSearch"), " ");
} }
function SpatialFilterItemComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 53);
    i0.ɵɵlistener("click", function SpatialFilterItemComponent_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.clearDrawZone(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r7.formControl.value === null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.spatialFilter.clearForm"), " ");
} }
function SpatialFilterItemComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 54);
    i0.ɵɵlistener("click", function SpatialFilterItemComponent_button_27_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.toggleVisibleList(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.spatialFilter.showSearchResults"));
} }
function SpatialFilterItemComponent_div_28_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 59);
    i0.ɵɵlistener("click", function SpatialFilterItemComponent_div_28_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(2); return ctx_r50.toggleVisibleList(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.spatialFilter.hideSearchResults"));
} }
function SpatialFilterItemComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵtemplate(1, SpatialFilterItemComponent_div_28_button_1_Template, 3, 3, "button", 57);
    i0.ɵɵelementStart(2, "igo-entity-table", 58);
    i0.ɵɵlistener("entitySelectChange", function SpatialFilterItemComponent_div_28_Template_igo_entity_table_entitySelectChange_2_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.entityChange.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.listIsVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r9.tableTemplate)("store", ctx_r9.store);
} }
/**
 * Spatial-Filter-Item (search parameters)
 */
export class SpatialFilterItemComponent {
    constructor(cdRef, spatialFilterService, messageService, languageService) {
        this.cdRef = cdRef;
        this.spatialFilterService = spatialFilterService;
        this.messageService = messageService;
        this.languageService = languageService;
        this.layers = [];
        this.allLayers = [];
        this.toggleSearch = new EventEmitter();
        this.itemTypeChange = new EventEmitter();
        this.thematicChange = new EventEmitter();
        this.drawZoneEvent = new EventEmitter();
        this.bufferEvent = new EventEmitter();
        this.zoneWithBufferChange = new EventEmitter();
        this.measureUnitChange = new EventEmitter();
        this.radiusEvent = new EventEmitter();
        this.freehandControl = new EventEmitter();
        this.clearButtonEvent = new EventEmitter();
        this.clearSearchEvent = new EventEmitter();
        this.export = new EventEmitter();
        this.openWorkspace = new EventEmitter();
        this.entityChange = new EventEmitter();
        this.itemType = [SpatialFilterItemType.Address, SpatialFilterItemType.Thematics];
        this.selectedItemType = SpatialFilterItemType.Address;
        this.treeControl = new NestedTreeControl(node => node.children);
        // For thematics and results tables
        this.displayedColumns = ['name', 'select'];
        this.childrens = [];
        this.groups = [];
        this.thematics = [];
        this.dataSource = new MatTreeNestedDataSource();
        this.selectedThematics = new SelectionModel(true, []);
        // For geometry form field input
        this.value$ = new BehaviorSubject(undefined);
        this.drawGuide$ = new BehaviorSubject(null);
        this.overlayStyle$ = new BehaviorSubject(undefined);
        this.drawStyle$ = new BehaviorSubject(undefined);
        this.formControl = new FormControl();
        this.geometryTypeField = false;
        this.geometryTypes = ['Point', 'Polygon'];
        this.drawGuideField = false;
        this.drawGuide = null;
        this.drawGuidePlaceholder = '';
        this.measure = false;
        this.drawControlIsActive = true;
        this.freehandDrawIsActive = false;
        this.buffer = 0;
        this.radiusFormControl = new FormControl();
        this.bufferFormControl = new FormControl();
        this.measureUnit = MeasureLengthUnit.Meters;
        this.listIsVisible = true;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
        const index = this.geometryTypes.findIndex(geom => geom === this.type);
        this.geometryType = this.geometryTypes[index];
        this.formControl.reset();
        this.radius = undefined;
        this.drawGuide$.next(null);
        this.drawStyle$.next(undefined);
        // Necessary to keep reference to the geometry form field input
        if (this.type === SpatialFilterType.Predefined) {
            const geojson = {
                type: 'Point',
                coordinates: ''
            };
            this.formControl.setValue(geojson);
        }
        // Necessary to apply the right style when geometry type is Point
        if (this.type === SpatialFilterType.Point) {
            this.radius = 1000; // Base radius
            this.radiusFormControl.setValue(this.radius);
            this.PointStyle = (feature, resolution) => {
                const geom = feature.getGeometry();
                const coordinates = olproj.transform(geom.getCoordinates(), this.map.projection, 'EPSG:4326');
                return new olStyle.Style({
                    image: new olStyle.Circle({
                        radius: this.radius / (Math.cos((Math.PI / 180) * coordinates[1])) / resolution,
                        stroke: new olStyle.Stroke({
                            width: 2,
                            color: 'rgba(0, 153, 255)'
                        }),
                        fill: new olStyle.Fill({
                            color: 'rgba(0, 153, 255, 0.2)'
                        })
                    })
                });
            };
            this.overlayStyle = this.PointStyle;
            this.drawStyle$.next(this.overlayStyle);
        }
        else {
            // If geometry types is Polygon
            this.radius = undefined;
            this.PolyStyle = () => {
                return new olStyle.Style({
                    stroke: new olStyle.Stroke({
                        width: 2,
                        color: 'rgba(0, 153, 255)'
                    }),
                    fill: new olStyle.Fill({
                        color: 'rgba(0, 153, 255, 0.2)'
                    })
                });
            };
            const color = [0, 153, 255];
            const drawStyle = () => {
                return new olStyle.Style({
                    image: new olStyle.Circle({
                        radius: 8,
                        stroke: new olStyle.Stroke({
                            width: 2,
                            color: 'rgba(0, 153, 255)'
                        }),
                        fill: new olStyle.Fill({
                            color: 'rgba(0, 153, 255, 0.2)'
                        })
                    }),
                    stroke: new olStyle.Stroke({
                        color: color.concat([1]),
                        width: 2
                    }),
                    fill: new olStyle.Fill({
                        color: color.concat([0.2])
                    })
                });
            };
            this.overlayStyle = this.PolyStyle;
            this.drawStyle$.next(drawStyle);
        }
        this.overlayStyle$.next(this.overlayStyle);
    }
    get store() {
        return this._store;
    }
    set store(store) {
        this._store = store;
        this._store.entities$.subscribe(() => { this.cdRef.detectChanges(); });
    }
    /**
     * Available measure units for the measure type given
     * @internal
     */
    get measureUnits() {
        return [MeasureLengthUnit.Meters, MeasureLengthUnit.Kilometers];
    }
    get thematicLength() {
        return this._thematicLength;
    }
    set thematicLength(value) {
        this._thematicLength = value;
    }
    ngOnInit() {
        this.spatialFilterService.loadThematicsList()
            .subscribe((items) => {
            for (const item of items) {
                this.childrens.push(item);
                this.childrens.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
            }
            this.groups.push(this.languageService.translate.instant('igo.geo.terrapi.limites'));
            const limits = {
                name: this.groups[0],
                children: []
            };
            this.thematics.push(limits);
            this.childrens.forEach(child => {
                if (child.group && (this.groups.indexOf(child.group) === -1)) {
                    this.groups.push(child.group);
                    const thematic = {
                        name: child.group,
                        children: []
                    };
                    this.thematics.push(thematic);
                }
                if (!child.group) {
                    if (child.name === this.languageService.translate.instant('igo.geo.terrapi.AdmRegion') ||
                        child.name === this.languageService.translate.instant('igo.geo.terrapi.Mun') ||
                        child.name === this.languageService.translate.instant('igo.geo.terrapi.Arrond') ||
                        child.name === this.languageService.translate.instant('igo.geo.terrapi.CircFed') ||
                        child.name === this.languageService.translate.instant('igo.geo.terrapi.CircProv') ||
                        child.name === this.languageService.translate.instant('igo.geo.terrapi.DirReg') ||
                        child.name === this.languageService.translate.instant('igo.geo.terrapi.MRC') ||
                        child.name === this.languageService.translate.instant('igo.geo.terrapi.RegTour')) {
                        child.group = limits.name;
                    }
                    else if (child.name === this.languageService.translate.instant('igo.geo.terrapi.routes')) {
                        child.group = this.languageService.translate.instant('igo.geo.spatialFilter.group.transport');
                    }
                    else {
                        const thematic = {
                            name: child.name,
                            children: [],
                            source: child.source
                        };
                        this.thematics.push(thematic);
                    }
                }
                this.thematics.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
            });
            this.thematics.forEach(thematic => {
                for (const child of this.childrens) {
                    if (child.group === thematic.name) {
                        thematic.children.push(child);
                    }
                }
            });
        });
        this.dataSource.data = this.thematics;
        this.drawGuide$.next(null);
        this.value$.next(this.formControl.value ? this.formControl.value : undefined);
        this.value$$ = this.formControl.valueChanges.subscribe((value) => {
            if (value) {
                this.value$.next(value);
                this.drawZone = this.formControl.value;
                if (this.buffer !== 0) {
                    this.drawZoneEvent.emit(this.drawZone);
                    this.bufferFormControl.setValue(this.buffer);
                }
            }
            else {
                this.value$.next(undefined);
                this.drawZone = undefined;
            }
        });
        this.value$.subscribe(() => {
            this.getRadius();
            this.cdRef.detectChanges();
        });
        this.radiusChanges$$ = this.radiusFormControl.valueChanges.subscribe(() => {
            this.getRadius();
            this.cdRef.detectChanges();
        });
        this.bufferChanges$$ = this.bufferFormControl.valueChanges
            .pipe(debounceTime(500))
            .subscribe((value) => {
            if (this.measureUnit === MeasureLengthUnit.Meters && value > 0 && value <= 100000) {
                this.buffer = value;
                this.bufferEvent.emit(value);
                this.spatialFilterService.loadBufferGeometry(this.drawZone, SpatialFilterType.Polygon, value).subscribe((featureGeom) => {
                    this.zoneWithBuffer = featureGeom;
                    this.zoneWithBufferChange.emit(this.zoneWithBuffer);
                });
            }
            else if (this.measureUnit === MeasureLengthUnit.Kilometers && value > 0 && value <= 100) {
                this.buffer = value;
                this.bufferEvent.emit(value);
                this.spatialFilterService.loadBufferGeometry(this.drawZone, SpatialFilterType.Polygon, value * 1000).subscribe((featureGeom) => {
                    this.zoneWithBuffer = featureGeom;
                    this.zoneWithBufferChange.emit(this.zoneWithBuffer);
                });
            }
            else if (value === 0) {
                this.buffer = value;
                this.bufferEvent.emit(value);
                this.drawZoneEvent.emit(this.drawZone);
            }
            else if (value < 0 ||
                (this.measureUnit === MeasureLengthUnit.Meters && value > 100000) ||
                (this.measureUnit === MeasureLengthUnit.Kilometers && value > 100)) {
                this.bufferFormControl.setValue(0);
                this.buffer = 0;
                this.messageService.alert(this.languageService.translate.instant('igo.geo.spatialFilter.bufferAlert'), this.languageService.translate.instant('igo.geo.spatialFilter.warning'));
            }
        });
        const selectedRecordStrategy = new EntityStoreFilterSelectionStrategy({});
        const selectionStrategy = new FeatureStoreSelectionStrategy({
            layer: new VectorLayer({
                zIndex: 300,
                source: new FeatureDataSource(),
                style: undefined,
                showInLayerList: false,
                exportable: false,
                browsable: false
            }),
            map: this.map,
            hitTolerance: 15,
            motion: FeatureMotion.Default,
            many: true,
            dragBox: true
        });
        this.store.addStrategy(selectionStrategy, true);
        this.store.addStrategy(selectedRecordStrategy, false);
    }
    /**
     * Unsubscribe to the value stream
     * @internal
     */
    ngOnDestroy() {
        this.value$$.unsubscribe();
        this.radiusChanges$$.unsubscribe();
        this.bufferChanges$$.unsubscribe();
        this.cdRef.detach();
        if (this.radiusChanges$$) {
            this.radiusChanges$$.unsubscribe();
        }
        if (this.value$$) {
            this.value$$.unsubscribe();
        }
    }
    onItemTypeChange(event) {
        this.selectedItemType = event.value;
        this.itemTypeChange.emit(this.selectedItemType);
    }
    /**
     * Set the measure unit
     * @internal
     */
    onMeasureUnitChange(unit) {
        if (unit === this.measureUnit) {
            return;
        }
        else {
            this.measureUnit = unit;
            this.measureUnitChange.emit(this.measureUnit);
            if (this.isPolygon()) {
                this.measureUnit === MeasureLengthUnit.Meters ?
                    this.bufferFormControl.setValue(this.bufferFormControl.value * 1000) :
                    this.bufferFormControl.setValue(this.bufferFormControl.value / 1000);
            }
            else if (this.isPoint()) {
                this.measureUnit === MeasureLengthUnit.Meters ?
                    this.radiusFormControl.setValue(this.radiusFormControl.value * 1000) :
                    this.radiusFormControl.setValue(this.radiusFormControl.value / 1000);
            }
        }
    }
    isPredefined() {
        return this.type === SpatialFilterType.Predefined;
    }
    isPolygon() {
        return this.type === SpatialFilterType.Polygon;
    }
    isPoint() {
        return this.type === SpatialFilterType.Point;
    }
    hasChild(_, node) {
        if (node.children) {
            return node.children.length;
        }
        return false;
    }
    onToggleClick(node) {
        this.treeControl.isExpanded(node) ? this.treeControl.collapse(node) : this.treeControl.expand(node);
    }
    isAllSelected(node) {
        let numSelected;
        let numNodes = 0;
        if (!node) {
            numSelected = this.selectedThematics.selected.length;
            this.thematics.forEach(thematic => {
                if (this.groups.indexOf(thematic.name) === -1) {
                    numNodes++;
                }
            });
            this.childrens.forEach(children => {
                if (!this.thematics.find(thematic => thematic.source === children.source)) {
                    numNodes++;
                }
            });
        }
        else {
            numSelected = node.children.length;
            node.children.forEach(children => {
                if (this.selectedThematics.selected.find(thematic => thematic === children)) {
                    numNodes++;
                }
            });
        }
        if (numNodes >= 1) {
            return numSelected === numNodes;
        }
        else {
            return false;
        }
    }
    hasChildrenSelected(node) {
        let bool = false;
        node.children.forEach(child => {
            if (this.selectedThematics.selected.find(thematic => thematic.source === child.source)) {
                bool = true;
            }
        });
        return bool;
    }
    /**
     * Apply header checkbox
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selectedThematics.clear() :
            this.selectAll();
        const selectedThematicsName = [];
        for (const thematic of this.selectedThematics.selected) {
            selectedThematicsName.push(thematic);
        }
        if (this.isAllSelected()) {
            this.thematics.forEach(thematic => {
                if (this.hasChild(0, thematic)) {
                    this.treeControl.expand(thematic);
                }
            });
        }
        else {
            this.thematics.forEach(thematic => {
                if (this.hasChild(0, thematic)) {
                    this.treeControl.collapse(thematic);
                }
            });
        }
        this.thematicChange.emit(selectedThematicsName);
    }
    selectAll(node) {
        if (!node) {
            this.thematics.forEach(thematic => {
                if (this.groups.indexOf(thematic.name) === -1) {
                    this.selectedThematics.select(thematic);
                }
            });
            this.childrens.forEach(children => {
                if (!this.selectedThematics.selected.find(thematic => thematic.source === children.source)) {
                    this.selectedThematics.select(children);
                }
            });
        }
        else {
            if (this.hasChild(0, node)) {
                node.children.forEach(children => this.selectedThematics.select(children));
            }
        }
    }
    childrensToggle(node) {
        this.isAllSelected(node) ?
            node.children.forEach(child => this.selectedThematics.deselect(child)) :
            this.selectAll(node);
        const selectedThematicsName = [];
        for (const thematic of this.selectedThematics.selected) {
            selectedThematicsName.push(thematic);
        }
        this.treeControl.expand(node);
        this.thematicChange.emit(selectedThematicsName);
    }
    /**
     * Apply changes to the thematics selected tree and emit event
     */
    onToggleChange(nodeSelected) {
        let selected = false;
        if (this.selectedThematics.selected.find(thematic => thematic.source === nodeSelected.source) !== undefined) {
            selected = true;
        }
        this.childrens.forEach(children => {
            if (children === nodeSelected && selected === false) {
                this.selectedThematics.select(children);
            }
            if (children === nodeSelected && selected === true) {
                this.selectedThematics.deselect(children);
            }
        });
        this.thematics.forEach(thematic => {
            if (thematic === nodeSelected && selected === false) {
                this.selectedThematics.select(thematic);
            }
            if (thematic === nodeSelected && selected === true) {
                this.selectedThematics.deselect(thematic);
            }
        });
        const selectedThematicsName = [];
        for (const thematic of this.selectedThematics.selected) {
            selectedThematicsName.push(thematic);
        }
        this.thematicChange.emit(selectedThematicsName);
    }
    onDrawControlChange() {
        this.drawControlIsActive = !this.drawControlIsActive;
    }
    onfreehandControlChange() {
        this.freehandDrawIsActive = !this.freehandDrawIsActive;
        this.freehandControl.emit(this.freehandDrawIsActive);
    }
    /**
     * Launch search button
     */
    toggleSearchButton() {
        if (!this.isPredefined()) {
            if (this.buffer > 0) {
                this.zoneWithBuffer.meta = {
                    id: undefined,
                    title: 'Zone'
                };
                this.zoneWithBuffer.properties = {
                    nom: 'Zone',
                    type: this.type
                };
                this.drawZoneEvent.emit(this.zoneWithBuffer);
            }
            else {
                this.drawZone.meta = {
                    id: undefined,
                    title: 'Zone'
                };
                this.drawZone.properties = {
                    nom: 'Zone',
                    type: this.type
                };
                this.drawZoneEvent.emit(this.drawZone);
            }
        }
        if (this.isPoint()) {
            this.radiusEvent.emit(this.radius);
        }
        else if (this.isPolygon()) {
            this.bufferEvent.emit(this.buffer);
        }
        this.toggleSearch.emit();
        this.store.entities$.pipe(debounceTime(500)).subscribe((value) => {
            if (value.length && this.layers.length === this.thematicLength + 1) {
                this.openWorkspace.emit();
                this.createTableTemplate();
            }
        });
    }
    /**
     * Launch clear button (clear store and map layers)
     */
    clearButton() {
        this.loading = true;
        if (this.store) {
            this.store.clear();
        }
        if (this.isPoint() || this.isPolygon()) {
            this.drawZone = undefined;
            this.formControl.reset();
        }
        this.bufferFormControl.setValue(0);
        this.buffer = 0;
        this.bufferEvent.emit(0);
        this.clearButtonEvent.emit();
        this.loading = false;
        this.tableTemplate = undefined;
    }
    clearDrawZone() {
        this.formControl.reset();
        this.bufferFormControl.setValue(0);
        this.buffer = 0;
    }
    /**
     * Launch clear search (clear field if type is predefined)
     */
    clearSearch() {
        this.selectedThematics.clear();
        this.bufferFormControl.setValue(0);
        this.buffer = 0;
        this.bufferEvent.emit(0);
        this.thematicChange.emit([]);
        this.clearSearchEvent.emit();
    }
    /**
     * Verify conditions of incomplete fields or busy service
     */
    disableSearchButton() {
        if (this.type === SpatialFilterType.Predefined) {
            if (this.selectedItemType === SpatialFilterItemType.Address) {
                if (this.queryType !== undefined && this.zone !== undefined) {
                    return this.loading;
                }
            }
            if (this.selectedItemType === SpatialFilterItemType.Thematics) {
                if (this.queryType !== undefined && this.zone !== undefined && this.selectedThematics.selected.length > 0) {
                    return this.loading;
                }
            }
        }
        if (this.type === SpatialFilterType.Polygon || this.type === SpatialFilterType.Point) {
            if (this.selectedItemType === SpatialFilterItemType.Address && this.formControl.value !== null) {
                return this.loading;
            }
            if (this.selectedItemType === SpatialFilterItemType.Thematics) {
                if (this.selectedThematics.selected.length > 0 && this.formControl.value !== null) {
                    return this.loading;
                }
            }
        }
        return true;
    }
    disabledClearSearch() {
        let disable = true;
        this.selectedItemType === SpatialFilterItemType.Address ?
            disable = this.queryType === undefined :
            disable = this.queryType === undefined && this.selectedThematics.selected.length === 0;
        return disable;
    }
    /**
     * Manage radius value at user change
     */
    getRadius() {
        let formValue;
        if (this.formControl.value !== null) {
            this.measureUnit === MeasureLengthUnit.Meters ?
                formValue = this.formControl.value.radius :
                formValue = this.formControl.value.radius / 1000;
        }
        else {
            formValue = undefined;
        }
        if (this.type === SpatialFilterType.Point) {
            if (!this.freehandDrawIsActive) {
                if (this.radiusFormControl.value < 0 ||
                    (this.measureUnit === MeasureLengthUnit.Meters && this.radiusFormControl.value >= 100000) ||
                    (this.measureUnit === MeasureLengthUnit.Kilometers && this.radiusFormControl.value >= 100)) {
                    this.messageService.alert(this.languageService.translate.instant('igo.geo.spatialFilter.radiusAlert'), this.languageService.translate.instant('igo.geo.spatialFilter.warning'));
                    this.radius = 1000;
                    this.measureUnit === MeasureLengthUnit.Meters ?
                        this.radiusFormControl.setValue(this.radius) :
                        this.radiusFormControl.setValue(this.radius / 1000);
                    this.drawGuide$.next(this.radius);
                    return;
                }
            }
            else {
                if (formValue) {
                    if (formValue >= 100000) {
                        this.messageService.alert(this.languageService.translate.instant('igo.geo.spatialFilter.radiusAlert'), this.languageService.translate.instant('igo.geo.spatialFilter.warning'));
                        this.formControl.reset();
                        return;
                    }
                    if (formValue !== this.radiusFormControl.value) {
                        this.radiusFormControl.setValue(formValue);
                        return;
                    }
                }
            }
            if (this.measureUnit === MeasureLengthUnit.Meters) {
                this.radius = this.radiusFormControl.value;
                this.drawGuide$.next(this.radius);
            }
            else {
                this.radius = this.radiusFormControl.value * 1000;
                this.drawGuide$.next(this.radius * 1000);
            }
            this.overlayStyle$.next(this.PointStyle);
            this.drawStyle$.next(this.PointStyle);
        }
    }
    toggleVisibleList() {
        this.listIsVisible = !this.listIsVisible;
    }
    createTableTemplate() {
        const typeColumn = {
            name: 'meta.title',
            title: this.languageService.translate.instant('igo.geo.spatialFilter.type'),
            renderer: EntityTableColumnRenderer.UnsanitizedHTML
        };
        const nameColumn = {
            name: 'properties.nom',
            title: this.languageService.translate.instant('igo.geo.spatialFilter.searchResults'),
            renderer: EntityTableColumnRenderer.UnsanitizedHTML
        };
        const columns = [typeColumn, nameColumn];
        this.tableTemplate = {
            selection: true,
            sort: true,
            columns
        };
    }
}
SpatialFilterItemComponent.ɵfac = function SpatialFilterItemComponent_Factory(t) { return new (t || SpatialFilterItemComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.SpatialFilterService), i0.ɵɵdirectiveInject(i2.MessageService), i0.ɵɵdirectiveInject(i2.LanguageService)); };
SpatialFilterItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SpatialFilterItemComponent, selectors: [["igo-spatial-filter-item"]], inputs: { map: "map", type: "type", queryType: "queryType", zone: "zone", loading: "loading", store: "store", layers: "layers", allLayers: "allLayers", thematicLength: "thematicLength" }, outputs: { toggleSearch: "toggleSearch", itemTypeChange: "itemTypeChange", thematicChange: "thematicChange", drawZoneEvent: "drawZoneEvent", bufferEvent: "bufferEvent", zoneWithBufferChange: "zoneWithBufferChange", measureUnitChange: "measureUnitChange", radiusEvent: "radiusEvent", freehandControl: "freehandControl", clearButtonEvent: "clearButtonEvent", clearSearchEvent: "clearSearchEvent", export: "export", openWorkspace: "openWorkspace", entityChange: "entityChange" }, decls: 29, vars: 42, consts: [[3, "formControl", "map", "geometryType", "drawGuide", "measure", "drawControlIsActive", "freehandDrawIsActive", "drawStyle", "overlayStyle", "radius"], [1, "header"], [3, "checked", "labelPosition", "change", 4, "ngIf"], ["class", "buffer-unit", 4, "ngIf"], ["class", "radius-unit", 4, "ngIf"], [1, "title", "mat-typography"], [3, "value"], [3, "value", "change", 4, "ngFor", "ngForOf"], ["class", "thematics", 4, "ngIf"], [1, "buttons"], ["mat-raised-button", "", "class", "clear-search-button", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "clear-form-button", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "search-button", 3, "disabled", "click"], ["mat-raised-button", "", 1, "remove-button", 3, "disabled", "click"], ["mat-raised-button", "", 1, "export-button", 3, "disabled", "click"], ["class", "chevron-down", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["class", "results", 4, "ngIf"], [3, "checked", "labelPosition", "change"], [1, "buffer-unit"], [1, "buffer-form"], [1, "buffer"], ["type", "number", "matInput", "", 3, "placeholder", "formControl", "value", "readonly"], [1, "unit-field"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "radius-unit"], [1, "radius-form"], [1, "radius"], ["type", "number", "matInput", "", 3, "placeholder", "formControl", "value", "readonly", "input"], [3, "value", "change"], [1, "thematics"], ["matColumnDef", "name"], ["class", "thematics-header", 4, "matHeaderCellDef"], ["matColumnDef", "select"], ["class", "checks-header", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], [1, "thematics-header"], [1, "checks-header"], [3, "checked", "indeterminate", "change"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "disabled", ""], [1, "tree-check", 3, "checked", "click", "change"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "tree-check-2", 3, "checked", "indeterminate", "change"], [1, "tree-ul"], ["matTreeNodeOutlet", ""], ["mat-raised-button", "", 1, "clear-search-button", 3, "disabled", "click"], ["mat-raised-button", "", 1, "clear-form-button", 3, "disabled", "click"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "chevron-down", 3, "matTooltip", "click"], ["svgIcon", "chevron-down"], [1, "results"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], [1, "results-list", 3, "template", "store", "entitySelectChange"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "click"], ["svgIcon", "chevron-up"]], template: function SpatialFilterItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-geometry-form-field-input", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵpipe(2, "async");
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵtemplate(5, SpatialFilterItemComponent_mat_slide_toggle_5_Template, 3, 5, "mat-slide-toggle", 2);
        i0.ɵɵtemplate(6, SpatialFilterItemComponent_mat_slide_toggle_6_Template, 3, 5, "mat-slide-toggle", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, SpatialFilterItemComponent_div_7_Template, 8, 8, "div", 3);
        i0.ɵɵtemplate(8, SpatialFilterItemComponent_div_8_Template, 8, 8, "div", 4);
        i0.ɵɵelementStart(9, "mat-label", 5);
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-radio-group", 6);
        i0.ɵɵtemplate(13, SpatialFilterItemComponent_mat_radio_button_13_Template, 3, 4, "mat-radio-button", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, SpatialFilterItemComponent_div_14_Template, 11, 5, "div", 8);
        i0.ɵɵelementStart(15, "div", 9);
        i0.ɵɵtemplate(16, SpatialFilterItemComponent_button_16_Template, 3, 4, "button", 10);
        i0.ɵɵtemplate(17, SpatialFilterItemComponent_button_17_Template, 3, 4, "button", 11);
        i0.ɵɵelementStart(18, "button", 12);
        i0.ɵɵlistener("click", function SpatialFilterItemComponent_Template_button_click_18_listener() { return ctx.toggleSearchButton(); });
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "button", 13);
        i0.ɵɵlistener("click", function SpatialFilterItemComponent_Template_button_click_21_listener() { return ctx.clearButton(); });
        i0.ɵɵtext(22);
        i0.ɵɵpipe(23, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 14);
        i0.ɵɵlistener("click", function SpatialFilterItemComponent_Template_button_click_24_listener() { return ctx.export.emit(); });
        i0.ɵɵtext(25);
        i0.ɵɵpipe(26, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(27, SpatialFilterItemComponent_button_27_Template, 3, 3, "button", 15);
        i0.ɵɵtemplate(28, SpatialFilterItemComponent_div_28_Template, 3, 3, "div", 16);
    } if (rf & 2) {
        i0.ɵɵproperty("formControl", ctx.formControl)("map", ctx.map)("geometryType", ctx.geometryType)("drawGuide", i0.ɵɵpipeBind1(1, 28, ctx.drawGuide$))("measure", ctx.measure)("drawControlIsActive", ctx.drawControlIsActive)("freehandDrawIsActive", ctx.freehandDrawIsActive)("drawStyle", i0.ɵɵpipeBind1(2, 30, ctx.drawStyle$))("overlayStyle", i0.ɵɵpipeBind1(3, 32, ctx.overlayStyle$))("radius", ctx.radius);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", !ctx.isPredefined());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isPredefined());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPolygon());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPoint());
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(11, 34, "igo.geo.spatialFilter.search"), " : ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.selectedItemType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.itemType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectedItemType === "Thematics" && !ctx.tableTemplate || ctx.selectedItemType === "Thematics" && ctx.tableTemplate && !ctx.listIsVisible);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isPredefined());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPolygon() || ctx.isPoint());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.disableSearchButton());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 36, "igo.geo.spatialFilter.goSearch"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.allLayers.length === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(23, 38, "igo.geo.spatialFilter.removeLayer"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx.store.entities$.getValue().length);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(26, 40, "igo.geo.spatialFilter.exportLayer"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.store.all().length && ctx.tableTemplate && !ctx.listIsVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.store.all().length && ctx.tableTemplate && ctx.listIsVisible);
    } }, styles: [".header[_ngcontent-%COMP%]{margin-top:5px;width:100%}.mat-slide-toggle[_ngcontent-%COMP%]{padding:5px;margin-bottom:15px;width:98%}.mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-content{width:calc(100% - 20px)}.title[_ngcontent-%COMP%]{margin-left:5px;font-size:medium;font-size:initial}.mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:10px}.mat-radio-button[_ngcontent-%COMP%]{display:inline-flex;position:relative;margin-left:16px;margin-top:10px}.mat-form-field[_ngcontent-%COMP%]{margin-top:5px}.mat-column-select[_ngcontent-%COMP%]{overflow:auto}.buttons[_ngcontent-%COMP%]{margin-top:15px}.search-button[_ngcontent-%COMP%]{left:15px;width:46%}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.search-button[_ngcontent-%COMP%]{left:10px;width:45%;min-height:35px;white-space:normal;line-height:normal}}.export-button[_ngcontent-%COMP%]{left:15px;width:46%;margin-bottom:5px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.export-button[_ngcontent-%COMP%]{left:10px;margin-top:10px;width:45%;min-height:35px;white-space:normal;line-height:normal}}.remove-button[_ngcontent-%COMP%]{margin-top:12px;left:5px;width:46%}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.remove-button[_ngcontent-%COMP%]{margin:0;width:45%;min-height:35px;white-space:normal;line-height:normal}}.clear-form-button[_ngcontent-%COMP%]{left:5px;width:46%}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.clear-form-button[_ngcontent-%COMP%]{width:45%;min-height:35px;white-space:normal;line-height:normal}}.clear-search-button[_ngcontent-%COMP%]{left:5px;width:46%}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.clear-search-button[_ngcontent-%COMP%]{width:45%;min-height:35px;white-space:normal;line-height:normal}}.thematics[_ngcontent-%COMP%]{max-height:35%;overflow:auto;margin-top:5px;width:98%}.results[_ngcontent-%COMP%]{overflow:auto;max-height:250px;width:98%}.mat-column-typeResults[_ngcontent-%COMP%]{max-width:100px;margin-right:5px}.buffer-unit[_ngcontent-%COMP%], .radius-unit[_ngcontent-%COMP%]{display:flex;width:100%;margin-left:2px;padding:5px}.radius[_ngcontent-%COMP%], .buffer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:110%}.unit-field[_ngcontent-%COMP%]{width:110px;margin-left:30px}.example-tree-invisible[_ngcontent-%COMP%]{display:none}.tree-ul[_ngcontent-%COMP%]{margin:0;padding:0 0 0 20px;list-style-type:none}.tree-check[_ngcontent-%COMP%], .tree-check-2[_ngcontent-%COMP%]{position:relative;margin-left:auto;margin-right:5px}.thematics-header[_ngcontent-%COMP%]{max-width:250px}.checks-header[_ngcontent-%COMP%]{padding:none;max-width:calc(100% - 316px);overflow:hidden}.mat-checkbox[_ngcontent-%COMP%]{padding:5px}.mat-tree-node[_ngcontent-%COMP%]{position:relative;min-height:42px;width:280px}.mat-header-cell[_ngcontent-%COMP%]{height:56px}.results[_ngcontent-%COMP%]{max-height:45%;width:98%}.results[_ngcontent-%COMP%]   igo-entity-table[_ngcontent-%COMP%]     div.table-container{overflow:unset}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpatialFilterItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-spatial-filter-item',
                templateUrl: './spatial-filter-item.component.html',
                styleUrls: ['./spatial-filter-item.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.SpatialFilterService }, { type: i2.MessageService }, { type: i2.LanguageService }]; }, { map: [{
            type: Input
        }], type: [{
            type: Input
        }], queryType: [{
            type: Input
        }], zone: [{
            type: Input
        }], loading: [{
            type: Input
        }], store: [{
            type: Input
        }], layers: [{
            type: Input
        }], allLayers: [{
            type: Input
        }], thematicLength: [{
            type: Input
        }], toggleSearch: [{
            type: Output
        }], itemTypeChange: [{
            type: Output
        }], thematicChange: [{
            type: Output
        }], drawZoneEvent: [{
            type: Output
        }], bufferEvent: [{
            type: Output
        }], zoneWithBufferChange: [{
            type: Output
        }], measureUnitChange: [{
            type: Output
        }], radiusEvent: [{
            type: Output
        }], freehandControl: [{
            type: Output
        }], clearButtonEvent: [{
            type: Output
        }], clearSearchEvent: [{
            type: Output
        }], export: [{
            type: Output
        }], openWorkspace: [{
            type: Output
        }], entityChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhdGlhbC1maWx0ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvc3BhdGlhbC1maWx0ZXIvc3BhdGlhbC1maWx0ZXItaXRlbS9zcGF0aWFsLWZpbHRlci1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9zcGF0aWFsLWZpbHRlci9zcGF0aWFsLWZpbHRlci1pdGVtL3NwYXRpYWwtZmlsdGVyLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBRXZCLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUEwQixpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFJckQsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFFbEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUFlLGtDQUFrQyxFQUFFLHlCQUF5QixFQUF1QixNQUFNLGNBQWMsQ0FBQztBQUMvSCxPQUFPLEVBQVMsV0FBVyxFQUFFLE1BQU0sdUJB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Y0FBYztrQkFBdkIsTUFBTTtZQUVHLGFBQWE7a0JBQXRCLE1BQU07WUFFRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csb0JBQW9CO2tCQUE3QixNQUFNO1lBQ0csaUJBQWlCO2tCQUExQixNQUFNO1lBRUcsV0FBVztrQkFBcEIsTUFBTTtZQUNHLGVBQWU7a0JBQXhCLE1BQU07WUFFRyxnQkFBZ0I7a0JBQXpCLE1BQU07WUFFRyxnQkFBZ0I7a0JBQXpCLE1BQU07WUFFRyxNQUFNO2tCQUFmLE1BQU07WUFFRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNwYXRpYWxGaWx0ZXJRdWVyeVR5cGUsIFNwYXRpYWxGaWx0ZXJUeXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NwYXRpYWwtZmlsdGVyLmVudW0nO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vLi4vbWFwJztcbmltcG9ydCB7IFNwYXRpYWxGaWx0ZXJJdGVtVHlwZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3NwYXRpYWwtZmlsdGVyLmVudW0nO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJy4vLi4vLi4vLi4vZmVhdHVyZS9zaGFyZWQvZmVhdHVyZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5VHlwZSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnlUeXBlJztcbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5pbXBvcnQgeyBHZW9KU09OR2VvbWV0cnkgfSBmcm9tICcuLi8uLi8uLi9nZW9tZXRyeS9zaGFyZWQvZ2VvbWV0cnkuaW50ZXJmYWNlcyc7XG5pbXBvcnQgKiBhcyBvbFN0eWxlIGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCAqIGFzIG9scHJvaiBmcm9tICdvbC9wcm9qJztcbmltcG9ydCBPbFBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQnO1xuaW1wb3J0IHsgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7IFNwYXRpYWxGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NwYXRpYWwtZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVhc3VyZUxlbmd0aFVuaXQgfSBmcm9tICcuLi8uLi8uLi9tZWFzdXJlJztcbmltcG9ydCB7IEVudGl0eVN0b3JlLCBFbnRpdHlTdG9yZUZpbHRlclNlbGVjdGlvblN0cmF0ZWd5LCBFbnRpdHlUYWJsZUNvbHVtblJlbmRlcmVyLCBFbnRpdHlUYWJsZVRlbXBsYXRlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IExheWVyLCBWZWN0b3JMYXllciB9IGZyb20gJy4uLy4uLy4uL2xheWVyL3NoYXJlZCc7XG5pbXBvcnQgeyBOZXN0ZWRUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7IFNwYXRpYWxGaWx0ZXJUaGVtYXRpYyB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3NwYXRpYWwtZmlsdGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZlYXR1cmVNb3Rpb24sIEZlYXR1cmVTdG9yZVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZSc7XG5pbXBvcnQgeyBGZWF0dXJlRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkJztcblxuLyoqXG4gKiBTcGF0aWFsLUZpbHRlci1JdGVtIChzZWFyY2ggcGFyYW1ldGVycylcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXNwYXRpYWwtZmlsdGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3BhdGlhbC1maWx0ZXItaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NwYXRpYWwtZmlsdGVyLWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3BhdGlhbEZpbHRlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHR5cGUoKTogU3BhdGlhbEZpbHRlclR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHR5cGU6IFNwYXRpYWxGaWx0ZXJUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdlb21ldHJ5VHlwZXMuZmluZEluZGV4KGdlb20gPT4gZ2VvbSA9PT0gdGhpcy50eXBlKTtcbiAgICB0aGlzLmdlb21ldHJ5VHlwZSA9IHRoaXMuZ2VvbWV0cnlUeXBlc1tpbmRleF07XG4gICAgdGhpcy5mb3JtQ29udHJvbC5yZXNldCgpO1xuICAgIHRoaXMucmFkaXVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZHJhd0d1aWRlJC5uZXh0KG51bGwpO1xuICAgIHRoaXMuZHJhd1N0eWxlJC5uZXh0KHVuZGVmaW5lZCk7XG5cbiAgICAvLyBOZWNlc3NhcnkgdG8ga2VlcCByZWZlcmVuY2UgdG8gdGhlIGdlb21ldHJ5IGZvcm0gZmllbGQgaW5wdXRcbiAgICBpZiAodGhpcy50eXBlID09PSBTcGF0aWFsRmlsdGVyVHlwZS5QcmVkZWZpbmVkKSB7XG4gICAgICBjb25zdCBnZW9qc29uOiBHZW9KU09OR2VvbWV0cnkgPSB7XG4gICAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICAgIGNvb3JkaW5hdGVzOiAnJ1xuICAgICAgfTtcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZ2VvanNvbik7XG4gICAgfVxuXG4gICAgLy8gTmVjZXNzYXJ5IHRvIGFwcGx5IHRoZSByaWdodCBzdHlsZSB3aGVuIGdlb21ldHJ5IHR5cGUgaXMgUG9pbnRcbiAgICBpZiAodGhpcy50eXBlID09PSBTcGF0aWFsRmlsdGVyVHlwZS5Qb2ludCkge1xuICAgICAgdGhpcy5yYWRpdXMgPSAxMDAwOyAvLyBCYXNlIHJhZGl1c1xuICAgICAgdGhpcy5yYWRpdXNGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnJhZGl1cyk7XG4gICAgICB0aGlzLlBvaW50U3R5bGUgPSAoZmVhdHVyZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+LCByZXNvbHV0aW9uOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgZ2VvbSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSBhcyBPbFBvaW50O1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IG9scHJvai50cmFuc2Zvcm0oZ2VvbS5nZXRDb29yZGluYXRlcygpLCB0aGlzLm1hcC5wcm9qZWN0aW9uLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgIHJldHVybiBuZXcgb2xTdHlsZS5TdHlsZSAoe1xuICAgICAgICAgIGltYWdlOiBuZXcgb2xTdHlsZS5DaXJjbGUgKHtcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMgLyAoTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogY29vcmRpbmF0ZXNbMV0pKSAvIHJlc29sdXRpb24sIC8vIExhdGl0dWRlIGNvcnJlY3Rpb25cbiAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sU3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAxNTMsIDI1NSknXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZpbGw6IG5ldyBvbFN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMTUzLCAyNTUsIDAuMiknXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHRoaXMub3ZlcmxheVN0eWxlID0gdGhpcy5Qb2ludFN0eWxlO1xuICAgICAgdGhpcy5kcmF3U3R5bGUkLm5leHQodGhpcy5vdmVybGF5U3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBnZW9tZXRyeSB0eXBlcyBpcyBQb2x5Z29uXG4gICAgICB0aGlzLnJhZGl1cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuUG9seVN0eWxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IG9sU3R5bGUuU3R5bGUgKHtcbiAgICAgICAgICBzdHJva2U6IG5ldyBvbFN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAxNTMsIDI1NSknXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsbDogbmV3IG9sU3R5bGUuRmlsbCh7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMTUzLCAyNTUsIDAuMiknXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgY29sb3IgPSBbMCwgMTUzLCAyNTVdO1xuICAgICAgY29uc3QgZHJhd1N0eWxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IG9sU3R5bGUuU3R5bGUoe1xuICAgICAgICAgIGltYWdlOiBuZXcgb2xTdHlsZS5DaXJjbGUgKHtcbiAgICAgICAgICAgIHJhZGl1czogOCxcbiAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sU3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAxNTMsIDI1NSknXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZpbGw6IG5ldyBvbFN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMTUzLCAyNTUsIDAuMiknXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0cm9rZTogbmV3IG9sU3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvci5jb25jYXQoWzFdKSxcbiAgICAgICAgICAgIHdpZHRoOiAyXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsbDogIG5ldyBvbFN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgY29sb3I6IGNvbG9yLmNvbmNhdChbMC4yXSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLm92ZXJsYXlTdHlsZSA9IHRoaXMuUG9seVN0eWxlO1xuICAgICAgdGhpcy5kcmF3U3R5bGUkLm5leHQoZHJhd1N0eWxlKTtcbiAgICB9XG4gICAgdGhpcy5vdmVybGF5U3R5bGUkLm5leHQodGhpcy5vdmVybGF5U3R5bGUpO1xuICB9XG4gIHByaXZhdGUgX3R5cGU6IFNwYXRpYWxGaWx0ZXJUeXBlO1xuXG4gIEBJbnB1dCgpIHF1ZXJ5VHlwZTogU3BhdGlhbEZpbHRlclF1ZXJ5VHlwZTtcblxuICBASW5wdXQoKSB6b25lOiBGZWF0dXJlO1xuXG4gIEBJbnB1dCgpIGxvYWRpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHN0b3JlKCk6IEVudGl0eVN0b3JlPEZlYXR1cmU+IHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmU7XG4gIH1cbiAgc2V0IHN0b3JlKHN0b3JlOiBFbnRpdHlTdG9yZTxGZWF0dXJlPikge1xuICAgIHRoaXMuX3N0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5fc3RvcmUuZW50aXRpZXMkLnN1YnNjcmliZSgoKSA9PiB7IHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpOyB9KTtcbiAgfVxuICBwcml2YXRlIF9zdG9yZTogRW50aXR5U3RvcmU8RmVhdHVyZT47XG5cbiAgLyoqXG4gICAqIEF2YWlsYWJsZSBtZWFzdXJlIHVuaXRzIGZvciB0aGUgbWVhc3VyZSB0eXBlIGdpdmVuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IG1lYXN1cmVVbml0cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtNZWFzdXJlTGVuZ3RoVW5pdC5NZXRlcnMsIE1lYXN1cmVMZW5ndGhVbml0LktpbG9tZXRlcnNdO1xuICB9XG5cbiAgQElucHV0KCkgbGF5ZXJzOiBMYXllcltdID0gW107XG5cbiAgQElucHV0KCkgYWxsTGF5ZXJzOiBMYXllcltdID0gW107XG5cbiAgQElucHV0KClcbiAgZ2V0IHRoZW1hdGljTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1hdGljTGVuZ3RoO1xuICB9XG4gIHNldCB0aGVtYXRpY0xlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGhlbWF0aWNMZW5ndGggPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF90aGVtYXRpY0xlbmd0aDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSB0b2dnbGVTZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIGl0ZW1UeXBlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTcGF0aWFsRmlsdGVySXRlbVR5cGU+KCk7XG5cbiAgQE91dHB1dCgpIHRoZW1hdGljQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTcGF0aWFsRmlsdGVyVGhlbWF0aWNbXT4oKTtcblxuICBAT3V0cHV0KCkgZHJhd1pvbmVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8RmVhdHVyZT4oKTtcblxuICBAT3V0cHV0KCkgYnVmZmVyRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHpvbmVXaXRoQnVmZmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGZWF0dXJlPigpO1xuICBAT3V0cHV0KCkgbWVhc3VyZVVuaXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1lYXN1cmVMZW5ndGhVbml0PigpO1xuXG4gIEBPdXRwdXQoKSByYWRpdXNFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgZnJlZWhhbmRDb250cm9sID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBPdXRwdXQoKSBjbGVhckJ1dHRvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBjbGVhclNlYXJjaEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBleHBvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIG9wZW5Xb3Jrc3BhY2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlbnRpdHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgaXRlbVR5cGU6IFNwYXRpYWxGaWx0ZXJJdGVtVHlwZVtdID0gW1NwYXRpYWxGaWx0ZXJJdGVtVHlwZS5BZGRyZXNzLCBTcGF0aWFsRmlsdGVySXRlbVR5cGUuVGhlbWF0aWNzXTtcbiAgcHVibGljIHNlbGVjdGVkSXRlbVR5cGU6IFNwYXRpYWxGaWx0ZXJJdGVtVHlwZSA9IFNwYXRpYWxGaWx0ZXJJdGVtVHlwZS5BZGRyZXNzO1xuICBwdWJsaWMgc2VsZWN0ZWRTb3VyY2VBZGRyZXNzO1xuXG4gIHRyZWVDb250cm9sOiBOZXN0ZWRUcmVlQ29udHJvbDxTcGF0aWFsRmlsdGVyVGhlbWF0aWM+ID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPFNwYXRpYWxGaWx0ZXJUaGVtYXRpYz4obm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcblxuICAvLyBGb3IgdGhlbWF0aWNzIGFuZCByZXN1bHRzIHRhYmxlc1xuICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ25hbWUnLCAnc2VsZWN0J107XG4gIHB1YmxpYyBjaGlsZHJlbnM6IFNwYXRpYWxGaWx0ZXJUaGVtYXRpY1tdID0gW107XG4gIHB1YmxpYyBncm91cHM6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyB0aGVtYXRpY3M6IFNwYXRpYWxGaWx0ZXJUaGVtYXRpY1tdID0gW107XG4gIHB1YmxpYyBkYXRhU291cmNlID0gbmV3IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlPFNwYXRpYWxGaWx0ZXJUaGVtYXRpYz4oKTtcbiAgcHVibGljIHNlbGVjdGVkVGhlbWF0aWNzID0gbmV3IFNlbGVjdGlvbk1vZGVsPFNwYXRpYWxGaWx0ZXJUaGVtYXRpYz4odHJ1ZSwgW10pO1xuXG4gIC8vIEZvciBnZW9tZXRyeSBmb3JtIGZpZWxkIGlucHV0XG4gIHZhbHVlJDogQmVoYXZpb3JTdWJqZWN0PEdlb0pTT05HZW9tZXRyeT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gIGRyYXdHdWlkZSQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgb3ZlcmxheVN0eWxlJDogQmVoYXZpb3JTdWJqZWN0PG9sU3R5bGUuU3R5bGUgfCAoKGZlYXR1cmUsIHJlc29sdXRpb24pID0+IG9sU3R5bGUuU3R5bGUpPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcbiAgZHJhd1N0eWxlJDogQmVoYXZpb3JTdWJqZWN0PG9sU3R5bGUuU3R5bGUgfCAoKGZlYXR1cmUsIHJlc29sdXRpb24pID0+IG9sU3R5bGUuU3R5bGUpPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICBwcml2YXRlIHZhbHVlJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByYWRpdXNDaGFuZ2VzJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBidWZmZXJDaGFuZ2VzJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBwdWJsaWMgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIGdlb21ldHJ5VHlwZTogdHlwZW9mIE9sR2VvbWV0cnlUeXBlIHwgc3RyaW5nO1xuICBwdWJsaWMgZ2VvbWV0cnlUeXBlRmllbGQgPSBmYWxzZTtcbiAgcHVibGljIGdlb21ldHJ5VHlwZXM6IHN0cmluZ1tdID0gWydQb2ludCcsICdQb2x5Z29uJ107XG4gIHB1YmxpYyBkcmF3R3VpZGVGaWVsZCA9IGZhbHNlO1xuICBwdWJsaWMgZHJhd0d1aWRlOiBudW1iZXIgPSBudWxsO1xuICBwdWJsaWMgZHJhd0d1aWRlUGxhY2Vob2xkZXIgPSAnJztcbiAgcHVibGljIG1lYXN1cmUgPSBmYWxzZTtcbiAgcHVibGljIGRyYXdDb250cm9sSXNBY3RpdmUgPSB0cnVlO1xuICBwdWJsaWMgZnJlZWhhbmREcmF3SXNBY3RpdmUgPSBmYWxzZTtcbiAgcHVibGljIGRyYXdTdHlsZTogb2xTdHlsZS5TdHlsZSB8ICgoZmVhdHVyZSwgcmVzb2x1dGlvbikgPT4gb2xTdHlsZS5TdHlsZSk7XG4gIHB1YmxpYyBkcmF3Wm9uZTtcbiAgcHVibGljIG92ZXJsYXlTdHlsZTogb2xTdHlsZS5TdHlsZSB8ICgoZmVhdHVyZSwgcmVzb2x1dGlvbikgPT4gb2xTdHlsZS5TdHlsZSk7XG4gIHB1YmxpYyBQb2ludFN0eWxlOiBvbFN0eWxlLlN0eWxlIHwgKChmZWF0dXJlLCByZXNvbHV0aW9uKSA9PiBvbFN0eWxlLlN0eWxlKTtcbiAgcHVibGljIFBvbHlTdHlsZTogb2xTdHlsZS5TdHlsZSB8ICgoZmVhdHVyZSwgcmVzb2x1dGlvbikgPT4gb2xTdHlsZS5TdHlsZSk7XG5cbiAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuICBwdWJsaWMgYnVmZmVyOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgcmFkaXVzRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIGJ1ZmZlckZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgcHVibGljIG1lYXN1cmVVbml0OiBNZWFzdXJlTGVuZ3RoVW5pdCA9IE1lYXN1cmVMZW5ndGhVbml0Lk1ldGVycztcbiAgcHVibGljIHpvbmVXaXRoQnVmZmVyO1xuXG4gIHB1YmxpYyBsaXN0SXNWaXNpYmxlID0gdHJ1ZTtcbiAgcHVibGljIHRhYmxlVGVtcGxhdGU6IEVudGl0eVRhYmxlVGVtcGxhdGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBzcGF0aWFsRmlsdGVyU2VydmljZTogU3BhdGlhbEZpbHRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNwYXRpYWxGaWx0ZXJTZXJ2aWNlLmxvYWRUaGVtYXRpY3NMaXN0KClcbiAgICAuc3Vic2NyaWJlKChpdGVtczogU3BhdGlhbEZpbHRlclRoZW1hdGljW10pID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICB0aGlzLmNoaWxkcmVucy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLmNoaWxkcmVucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5ncm91cHMucHVzaCh0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby50ZXJyYXBpLmxpbWl0ZXMnKSk7XG4gICAgICBjb25zdCBsaW1pdHM6IFNwYXRpYWxGaWx0ZXJUaGVtYXRpYyA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5ncm91cHNbMF0sXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfTtcbiAgICAgIHRoaXMudGhlbWF0aWNzLnB1c2gobGltaXRzKTtcbiAgICAgIHRoaXMuY2hpbGRyZW5zLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAoY2hpbGQuZ3JvdXAgJiYgKHRoaXMuZ3JvdXBzLmluZGV4T2YoY2hpbGQuZ3JvdXApID09PSAtMSkpIHtcbiAgICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKGNoaWxkLmdyb3VwKTtcbiAgICAgICAgICBjb25zdCB0aGVtYXRpYzogU3BhdGlhbEZpbHRlclRoZW1hdGljID0ge1xuICAgICAgICAgICAgbmFtZTogY2hpbGQuZ3JvdXAsXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMudGhlbWF0aWNzLnB1c2godGhlbWF0aWMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjaGlsZC5ncm91cCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNoaWxkLm5hbWUgPT09IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnRlcnJhcGkuQWRtUmVnaW9uJykgfHxcbiAgICAgICAgICAgIGNoaWxkLm5hbWUgPT09IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnRlcnJhcGkuTXVuJykgfHxcbiAgICAgICAgICAgIGNoaWxkLm5hbWUgPT09IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnRlcnJhcGkuQXJyb25kJykgfHxcbiAgICAgICAgICAgIGNoaWxkLm5hbWUgPT09IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnRlcnJhcGkuQ2lyY0ZlZCcpIHx8XG4gICAgICAgICAgICBjaGlsZC5uYW1lID09PSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby50ZXJyYXBpLkNpcmNQcm92JykgfHxcbiAgICAgICAgICAgIGNoaWxkLm5hbWUgPT09IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnRlcnJhcGkuRGlyUmVnJykgfHxcbiAgICAgICAgICAgIGNoaWxkLm5hbWUgPT09IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnRlcnJhcGkuTVJDJykgfHxcbiAgICAgICAgICAgIGNoaWxkLm5hbWUgPT09IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnRlcnJhcGkuUmVnVG91cicpKSB7XG4gICAgICAgICAgICAgIGNoaWxkLmdyb3VwID0gbGltaXRzLm5hbWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby50ZXJyYXBpLnJvdXRlcycpKSB7XG4gICAgICAgICAgICBjaGlsZC5ncm91cCA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuZ3JvdXAudHJhbnNwb3J0Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW1hdGljOiBTcGF0aWFsRmlsdGVyVGhlbWF0aWMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGNoaWxkLm5hbWUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgICAgc291cmNlOiBjaGlsZC5zb3VyY2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnRoZW1hdGljcy5wdXNoKHRoZW1hdGljKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aGVtYXRpY3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50aGVtYXRpY3MuZm9yRWFjaCh0aGVtYXRpYyA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbnMpIHtcbiAgICAgICAgICBpZiAoY2hpbGQuZ3JvdXAgPT09IHRoZW1hdGljLm5hbWUpIHtcbiAgICAgICAgICAgIHRoZW1hdGljLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMudGhlbWF0aWNzO1xuXG4gICAgdGhpcy5kcmF3R3VpZGUkLm5leHQobnVsbCk7XG4gICAgdGhpcy52YWx1ZSQubmV4dCh0aGlzLmZvcm1Db250cm9sLnZhbHVlID8gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSA6IHVuZGVmaW5lZCk7XG4gICAgdGhpcy52YWx1ZSQkID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZTogR2VvSlNPTkdlb21ldHJ5KSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSQubmV4dCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZHJhd1pvbmUgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlIGFzIEZlYXR1cmU7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlciAhPT0gMCkge1xuICAgICAgICAgIHRoaXMuZHJhd1pvbmVFdmVudC5lbWl0KHRoaXMuZHJhd1pvbmUpO1xuICAgICAgICAgIHRoaXMuYnVmZmVyRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5idWZmZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlJC5uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuZHJhd1pvbmUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRSYWRpdXMoKTtcbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yYWRpdXNDaGFuZ2VzJCQgPSB0aGlzLnJhZGl1c0Zvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRSYWRpdXMoKTtcbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5idWZmZXJDaGFuZ2VzJCQgPSB0aGlzLmJ1ZmZlckZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tZWFzdXJlVW5pdCA9PT0gTWVhc3VyZUxlbmd0aFVuaXQuTWV0ZXJzICYmIHZhbHVlID4gMCAmJiB2YWx1ZSA8PSAxMDAwMDApIHtcbiAgICAgICAgICB0aGlzLmJ1ZmZlciA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMuYnVmZmVyRXZlbnQuZW1pdCh2YWx1ZSk7XG4gICAgICAgICAgdGhpcy5zcGF0aWFsRmlsdGVyU2VydmljZS5sb2FkQnVmZmVyR2VvbWV0cnkoXG4gICAgICAgICAgICB0aGlzLmRyYXdab25lLFxuICAgICAgICAgICAgU3BhdGlhbEZpbHRlclR5cGUuUG9seWdvbixcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKS5zdWJzY3JpYmUoKGZlYXR1cmVHZW9tOiBGZWF0dXJlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmVXaXRoQnVmZmVyID0gZmVhdHVyZUdlb207XG4gICAgICAgICAgICB0aGlzLnpvbmVXaXRoQnVmZmVyQ2hhbmdlLmVtaXQodGhpcy56b25lV2l0aEJ1ZmZlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tZWFzdXJlVW5pdCA9PT0gTWVhc3VyZUxlbmd0aFVuaXQuS2lsb21ldGVycyAmJiB2YWx1ZSA+IDAgJiYgdmFsdWUgPD0gMTAwKSB7XG4gICAgICAgICAgdGhpcy5idWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgICB0aGlzLmJ1ZmZlckV2ZW50LmVtaXQodmFsdWUpO1xuICAgICAgICAgIHRoaXMuc3BhdGlhbEZpbHRlclNlcnZpY2UubG9hZEJ1ZmZlckdlb21ldHJ5KFxuICAgICAgICAgICAgdGhpcy5kcmF3Wm9uZSxcbiAgICAgICAgICAgIFNwYXRpYWxGaWx0ZXJUeXBlLlBvbHlnb24sXG4gICAgICAgICAgICB2YWx1ZSAqIDEwMDBcbiAgICAgICAgICApLnN1YnNjcmliZSgoZmVhdHVyZUdlb206IEZlYXR1cmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZVdpdGhCdWZmZXIgPSBmZWF0dXJlR2VvbTtcbiAgICAgICAgICAgIHRoaXMuem9uZVdpdGhCdWZmZXJDaGFuZ2UuZW1pdCh0aGlzLnpvbmVXaXRoQnVmZmVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuYnVmZmVyID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5idWZmZXJFdmVudC5lbWl0KHZhbHVlKTtcbiAgICAgICAgICB0aGlzLmRyYXdab25lRXZlbnQuZW1pdCh0aGlzLmRyYXdab25lKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB2YWx1ZSA8IDAgfHxcbiAgICAgICAgICAodGhpcy5tZWFzdXJlVW5pdCA9PT0gTWVhc3VyZUxlbmd0aFVuaXQuTWV0ZXJzICYmIHZhbHVlID4gMTAwMDAwKSB8fFxuICAgICAgICAgICh0aGlzLm1lYXN1cmVVbml0ID09PSBNZWFzdXJlTGVuZ3RoVW5pdC5LaWxvbWV0ZXJzICYmIHZhbHVlID4gMTAwKSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJGb3JtQ29udHJvbC5zZXRWYWx1ZSgwKTtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWxlcnQodGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uc3BhdGlhbEZpbHRlci5idWZmZXJBbGVydCcpLFxuICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5zcGF0aWFsRmlsdGVyLndhcm5pbmcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbGVjdGVkUmVjb3JkU3RyYXRlZ3kgPSBuZXcgRW50aXR5U3RvcmVGaWx0ZXJTZWxlY3Rpb25TdHJhdGVneSh7fSk7XG4gICAgY29uc3Qgc2VsZWN0aW9uU3RyYXRlZ3kgPSBuZXcgRmVhdHVyZVN0b3JlU2VsZWN0aW9uU3RyYXRlZ3koe1xuICAgICAgbGF5ZXI6IG5ldyBWZWN0b3JMYXllcih7XG4gICAgICAgIHpJbmRleDogMzAwLFxuICAgICAgICBzb3VyY2U6IG5ldyBGZWF0dXJlRGF0YVNvdXJjZSgpLFxuICAgICAgICBzdHlsZTogdW5kZWZpbmVkLFxuICAgICAgICBzaG93SW5MYXllckxpc3Q6IGZhbHNlLFxuICAgICAgICBleHBvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgYnJvd3NhYmxlOiBmYWxzZVxuICAgICAgfSksXG4gICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgaGl0VG9sZXJhbmNlOiAxNSxcbiAgICAgIG1vdGlvbjogRmVhdHVyZU1vdGlvbi5EZWZhdWx0LFxuICAgICAgbWFueTogdHJ1ZSxcbiAgICAgIGRyYWdCb3g6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuc3RvcmUuYWRkU3RyYXRlZ3koc2VsZWN0aW9uU3RyYXRlZ3ksIHRydWUpO1xuICAgIHRoaXMuc3RvcmUuYWRkU3RyYXRlZ3koc2VsZWN0ZWRSZWNvcmRTdHJhdGVneSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIHRvIHRoZSB2YWx1ZSBzdHJlYW1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnZhbHVlJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJhZGl1c0NoYW5nZXMkJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuYnVmZmVyQ2hhbmdlcyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5jZFJlZi5kZXRhY2goKTtcbiAgICBpZiAodGhpcy5yYWRpdXNDaGFuZ2VzJCQpIHtcbiAgICAgIHRoaXMucmFkaXVzQ2hhbmdlcyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnZhbHVlJCQpIHtcbiAgICAgIHRoaXMudmFsdWUkJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uSXRlbVR5cGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbVR5cGUgPSBldmVudC52YWx1ZTtcbiAgICB0aGlzLml0ZW1UeXBlQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1UeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1lYXN1cmUgdW5pdFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTWVhc3VyZVVuaXRDaGFuZ2UodW5pdDogTWVhc3VyZUxlbmd0aFVuaXQpIHtcbiAgICBpZiAodW5pdCA9PT0gdGhpcy5tZWFzdXJlVW5pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lYXN1cmVVbml0ID0gdW5pdDtcbiAgICAgIHRoaXMubWVhc3VyZVVuaXRDaGFuZ2UuZW1pdCh0aGlzLm1lYXN1cmVVbml0KTtcbiAgICAgIGlmICh0aGlzLmlzUG9seWdvbigpKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZVVuaXQgPT09IE1lYXN1cmVMZW5ndGhVbml0Lk1ldGVycyA/XG4gICAgICAgICAgdGhpcy5idWZmZXJGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmJ1ZmZlckZvcm1Db250cm9sLnZhbHVlICogMTAwMCkgOlxuICAgICAgICAgIHRoaXMuYnVmZmVyRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5idWZmZXJGb3JtQ29udHJvbC52YWx1ZSAvIDEwMDApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUG9pbnQoKSkge1xuICAgICAgICB0aGlzLm1lYXN1cmVVbml0ID09PSBNZWFzdXJlTGVuZ3RoVW5pdC5NZXRlcnMgP1xuICAgICAgICAgIHRoaXMucmFkaXVzRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5yYWRpdXNGb3JtQ29udHJvbC52YWx1ZSAqIDEwMDApIDpcbiAgICAgICAgICB0aGlzLnJhZGl1c0Zvcm1Db250cm9sLnNldFZhbHVlKHRoaXMucmFkaXVzRm9ybUNvbnRyb2wudmFsdWUgLyAxMDAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1ByZWRlZmluZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gU3BhdGlhbEZpbHRlclR5cGUuUHJlZGVmaW5lZDtcbiAgfVxuXG4gIGlzUG9seWdvbigpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBTcGF0aWFsRmlsdGVyVHlwZS5Qb2x5Z29uO1xuICB9XG5cbiAgaXNQb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBTcGF0aWFsRmlsdGVyVHlwZS5Qb2ludDtcbiAgfVxuXG4gIGhhc0NoaWxkKF86IG51bWJlciwgbm9kZTogU3BhdGlhbEZpbHRlclRoZW1hdGljKSB7XG4gICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBub2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25Ub2dnbGVDbGljayhub2RlOiBTcGF0aWFsRmlsdGVyVGhlbWF0aWMpIHtcbiAgICB0aGlzLnRyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKG5vZGUpIDogdGhpcy50cmVlQ29udHJvbC5leHBhbmQobm9kZSk7XG4gIH1cblxuICBpc0FsbFNlbGVjdGVkKG5vZGU/OiBTcGF0aWFsRmlsdGVyVGhlbWF0aWMpIHtcbiAgICBsZXQgbnVtU2VsZWN0ZWQ7XG4gICAgbGV0IG51bU5vZGVzID0gMDtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFRoZW1hdGljcy5zZWxlY3RlZC5sZW5ndGg7XG4gICAgICB0aGlzLnRoZW1hdGljcy5mb3JFYWNoKHRoZW1hdGljID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXBzLmluZGV4T2YodGhlbWF0aWMubmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgbnVtTm9kZXMrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNoaWxkcmVucy5mb3JFYWNoKGNoaWxkcmVuID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnRoZW1hdGljcy5maW5kKHRoZW1hdGljID0+IHRoZW1hdGljLnNvdXJjZSA9PT0gY2hpbGRyZW4uc291cmNlKSkge1xuICAgICAgICAgIG51bU5vZGVzKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBudW1TZWxlY3RlZCA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUaGVtYXRpY3Muc2VsZWN0ZWQuZmluZCh0aGVtYXRpYyA9PiB0aGVtYXRpYyA9PT0gY2hpbGRyZW4pKSB7XG4gICAgICAgICAgbnVtTm9kZXMrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG51bU5vZGVzID49IDEpIHtcbiAgICAgIHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtTm9kZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYXNDaGlsZHJlblNlbGVjdGVkKG5vZGU6IFNwYXRpYWxGaWx0ZXJUaGVtYXRpYykge1xuICAgIGxldCBib29sID0gZmFsc2U7XG4gICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGhlbWF0aWNzLnNlbGVjdGVkLmZpbmQodGhlbWF0aWMgPT4gdGhlbWF0aWMuc291cmNlID09PSBjaGlsZC5zb3VyY2UpKSB7XG4gICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBib29sO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGhlYWRlciBjaGVja2JveFxuICAgKi9cbiAgbWFzdGVyVG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCgpID9cbiAgICAgIHRoaXMuc2VsZWN0ZWRUaGVtYXRpY3MuY2xlYXIoKSA6XG4gICAgICB0aGlzLnNlbGVjdEFsbCgpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRUaGVtYXRpY3NOYW1lOiBTcGF0aWFsRmlsdGVyVGhlbWF0aWNbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgdGhlbWF0aWMgb2YgdGhpcy5zZWxlY3RlZFRoZW1hdGljcy5zZWxlY3RlZCkge1xuICAgICAgc2VsZWN0ZWRUaGVtYXRpY3NOYW1lLnB1c2godGhlbWF0aWMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWxsU2VsZWN0ZWQoKSkge1xuICAgICAgdGhpcy50aGVtYXRpY3MuZm9yRWFjaCh0aGVtYXRpYyA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NoaWxkKDAsIHRoZW1hdGljKSkge1xuICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKHRoZW1hdGljKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGhlbWF0aWNzLmZvckVhY2godGhlbWF0aWMgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYXNDaGlsZCgwLCB0aGVtYXRpYykpIHtcbiAgICAgICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKHRoZW1hdGljKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudGhlbWF0aWNDaGFuZ2UuZW1pdChzZWxlY3RlZFRoZW1hdGljc05hbWUpO1xuICB9XG5cbiAgc2VsZWN0QWxsKG5vZGU/OiBTcGF0aWFsRmlsdGVyVGhlbWF0aWMpIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRoaXMudGhlbWF0aWNzLmZvckVhY2godGhlbWF0aWMgPT4ge1xuICAgICAgICBpZiAodGhpcy5ncm91cHMuaW5kZXhPZih0aGVtYXRpYy5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkVGhlbWF0aWNzLnNlbGVjdCh0aGVtYXRpYyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5jaGlsZHJlbnMuZm9yRWFjaChjaGlsZHJlbiA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZFRoZW1hdGljcy5zZWxlY3RlZC5maW5kKHRoZW1hdGljID0+IHRoZW1hdGljLnNvdXJjZSA9PT0gY2hpbGRyZW4uc291cmNlKSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUaGVtYXRpY3Muc2VsZWN0KGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmhhc0NoaWxkKDAsIG5vZGUpKSB7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiA9PiB0aGlzLnNlbGVjdGVkVGhlbWF0aWNzLnNlbGVjdChjaGlsZHJlbikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoaWxkcmVuc1RvZ2dsZShub2RlOiBTcGF0aWFsRmlsdGVyVGhlbWF0aWMpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQobm9kZSkgP1xuICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB0aGlzLnNlbGVjdGVkVGhlbWF0aWNzLmRlc2VsZWN0KGNoaWxkKSkgOlxuICAgIHRoaXMuc2VsZWN0QWxsKG5vZGUpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRUaGVtYXRpY3NOYW1lOiBTcGF0aWFsRmlsdGVyVGhlbWF0aWNbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgdGhlbWF0aWMgb2YgdGhpcy5zZWxlY3RlZFRoZW1hdGljcy5zZWxlY3RlZCkge1xuICAgICAgc2VsZWN0ZWRUaGVtYXRpY3NOYW1lLnB1c2godGhlbWF0aWMpO1xuICAgIH1cbiAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChub2RlKTtcbiAgICB0aGlzLnRoZW1hdGljQ2hhbmdlLmVtaXQoc2VsZWN0ZWRUaGVtYXRpY3NOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBjaGFuZ2VzIHRvIHRoZSB0aGVtYXRpY3Mgc2VsZWN0ZWQgdHJlZSBhbmQgZW1pdCBldmVudFxuICAgKi9cbiAgb25Ub2dnbGVDaGFuZ2Uobm9kZVNlbGVjdGVkOiBTcGF0aWFsRmlsdGVyVGhlbWF0aWMpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRoZW1hdGljcy5zZWxlY3RlZC5maW5kKHRoZW1hdGljID0+IHRoZW1hdGljLnNvdXJjZSA9PT0gbm9kZVNlbGVjdGVkLnNvdXJjZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuY2hpbGRyZW5zLmZvckVhY2goY2hpbGRyZW4gPT4ge1xuICAgICAgaWYgKGNoaWxkcmVuID09PSBub2RlU2VsZWN0ZWQgJiYgc2VsZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUaGVtYXRpY3Muc2VsZWN0KGNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZHJlbiA9PT0gbm9kZVNlbGVjdGVkICYmIHNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUaGVtYXRpY3MuZGVzZWxlY3QoY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudGhlbWF0aWNzLmZvckVhY2godGhlbWF0aWMgPT4ge1xuICAgICAgaWYgKHRoZW1hdGljID09PSBub2RlU2VsZWN0ZWQgJiYgc2VsZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUaGVtYXRpY3Muc2VsZWN0KHRoZW1hdGljKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGVtYXRpYyA9PT0gbm9kZVNlbGVjdGVkICYmIHNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUaGVtYXRpY3MuZGVzZWxlY3QodGhlbWF0aWMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRUaGVtYXRpY3NOYW1lOiBTcGF0aWFsRmlsdGVyVGhlbWF0aWNbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgdGhlbWF0aWMgb2YgdGhpcy5zZWxlY3RlZFRoZW1hdGljcy5zZWxlY3RlZCkge1xuICAgICAgc2VsZWN0ZWRUaGVtYXRpY3NOYW1lLnB1c2godGhlbWF0aWMpO1xuICAgIH1cbiAgICB0aGlzLnRoZW1hdGljQ2hhbmdlLmVtaXQoc2VsZWN0ZWRUaGVtYXRpY3NOYW1lKTtcbiAgfVxuXG4gIG9uRHJhd0NvbnRyb2xDaGFuZ2UoKSB7XG4gICAgdGhpcy5kcmF3Q29udHJvbElzQWN0aXZlID0gIXRoaXMuZHJhd0NvbnRyb2xJc0FjdGl2ZTtcbiAgfVxuXG4gIG9uZnJlZWhhbmRDb250cm9sQ2hhbmdlKCkge1xuICAgIHRoaXMuZnJlZWhhbmREcmF3SXNBY3RpdmUgPSAhdGhpcy5mcmVlaGFuZERyYXdJc0FjdGl2ZTtcbiAgICB0aGlzLmZyZWVoYW5kQ29udHJvbC5lbWl0KHRoaXMuZnJlZWhhbmREcmF3SXNBY3RpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIExhdW5jaCBzZWFyY2ggYnV0dG9uXG4gICAqL1xuICB0b2dnbGVTZWFyY2hCdXR0b24oKSB7XG4gICAgaWYgKCF0aGlzLmlzUHJlZGVmaW5lZCgpKSB7XG4gICAgICBpZiAodGhpcy5idWZmZXIgPiAwKSB7XG4gICAgICAgIHRoaXMuem9uZVdpdGhCdWZmZXIubWV0YSA9IHtcbiAgICAgICAgICBpZDogdW5kZWZpbmVkLFxuICAgICAgICAgIHRpdGxlOiAnWm9uZSdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy56b25lV2l0aEJ1ZmZlci5wcm9wZXJ0aWVzID0ge1xuICAgICAgICAgIG5vbTogJ1pvbmUnLFxuICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSBhcyBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kcmF3Wm9uZUV2ZW50LmVtaXQodGhpcy56b25lV2l0aEJ1ZmZlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYXdab25lLm1ldGEgPSB7XG4gICAgICAgICAgaWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICB0aXRsZTogJ1pvbmUnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZHJhd1pvbmUucHJvcGVydGllcyA9IHtcbiAgICAgICAgICBub206ICdab25lJyxcbiAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUgYXMgc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZHJhd1pvbmVFdmVudC5lbWl0KHRoaXMuZHJhd1pvbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5pc1BvaW50KCkpIHtcbiAgICAgIHRoaXMucmFkaXVzRXZlbnQuZW1pdCh0aGlzLnJhZGl1cyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUG9seWdvbigpKSB7XG4gICAgICB0aGlzLmJ1ZmZlckV2ZW50LmVtaXQodGhpcy5idWZmZXIpO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVNlYXJjaC5lbWl0KCk7XG4gICAgdGhpcy5zdG9yZS5lbnRpdGllcyQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoICYmIHRoaXMubGF5ZXJzLmxlbmd0aCA9PT0gdGhpcy50aGVtYXRpY0xlbmd0aCArIDEpIHtcbiAgICAgICAgdGhpcy5vcGVuV29ya3NwYWNlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUYWJsZVRlbXBsYXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGF1bmNoIGNsZWFyIGJ1dHRvbiAoY2xlYXIgc3RvcmUgYW5kIG1hcCBsYXllcnMpXG4gICAqL1xuICBjbGVhckJ1dHRvbigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLnN0b3JlKSB7XG4gICAgICB0aGlzLnN0b3JlLmNsZWFyKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzUG9pbnQoKSB8fCB0aGlzLmlzUG9seWdvbigpKSB7XG4gICAgICB0aGlzLmRyYXdab25lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5mb3JtQ29udHJvbC5yZXNldCgpO1xuICAgIH1cbiAgICB0aGlzLmJ1ZmZlckZvcm1Db250cm9sLnNldFZhbHVlKDApO1xuICAgIHRoaXMuYnVmZmVyID0gMDtcbiAgICB0aGlzLmJ1ZmZlckV2ZW50LmVtaXQoMCk7XG4gICAgdGhpcy5jbGVhckJ1dHRvbkV2ZW50LmVtaXQoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRhYmxlVGVtcGxhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBjbGVhckRyYXdab25lKCkge1xuICAgIHRoaXMuZm9ybUNvbnRyb2wucmVzZXQoKTtcbiAgICB0aGlzLmJ1ZmZlckZvcm1Db250cm9sLnNldFZhbHVlKDApO1xuICAgIHRoaXMuYnVmZmVyID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBMYXVuY2ggY2xlYXIgc2VhcmNoIChjbGVhciBmaWVsZCBpZiB0eXBlIGlzIHByZWRlZmluZWQpXG4gICAqL1xuICBjbGVhclNlYXJjaCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkVGhlbWF0aWNzLmNsZWFyKCk7XG4gICAgdGhpcy5idWZmZXJGb3JtQ29udHJvbC5zZXRWYWx1ZSgwKTtcbiAgICB0aGlzLmJ1ZmZlciA9IDA7XG4gICAgdGhpcy5idWZmZXJFdmVudC5lbWl0KDApO1xuICAgIHRoaXMudGhlbWF0aWNDaGFuZ2UuZW1pdChbXSk7XG4gICAgdGhpcy5jbGVhclNlYXJjaEV2ZW50LmVtaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgY29uZGl0aW9ucyBvZiBpbmNvbXBsZXRlIGZpZWxkcyBvciBidXN5IHNlcnZpY2VcbiAgICovXG4gIGRpc2FibGVTZWFyY2hCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU3BhdGlhbEZpbHRlclR5cGUuUHJlZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtVHlwZSA9PT0gU3BhdGlhbEZpbHRlckl0ZW1UeXBlLkFkZHJlc3MpIHtcbiAgICAgICAgaWYgKHRoaXMucXVlcnlUeXBlICE9PSB1bmRlZmluZWQgJiYgdGhpcy56b25lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1UeXBlID09PSBTcGF0aWFsRmlsdGVySXRlbVR5cGUuVGhlbWF0aWNzKSB7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5VHlwZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuem9uZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2VsZWN0ZWRUaGVtYXRpY3Muc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU3BhdGlhbEZpbHRlclR5cGUuUG9seWdvbiB8fCB0aGlzLnR5cGUgPT09IFNwYXRpYWxGaWx0ZXJUeXBlLlBvaW50KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1UeXBlID09PSBTcGF0aWFsRmlsdGVySXRlbVR5cGUuQWRkcmVzcyAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1UeXBlID09PSBTcGF0aWFsRmlsdGVySXRlbVR5cGUuVGhlbWF0aWNzKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGhlbWF0aWNzLnNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBkaXNhYmxlZENsZWFyU2VhcmNoKCkge1xuICAgIGxldCBkaXNhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbVR5cGUgPT09IFNwYXRpYWxGaWx0ZXJJdGVtVHlwZS5BZGRyZXNzID9cbiAgICAgIGRpc2FibGUgPSB0aGlzLnF1ZXJ5VHlwZSA9PT0gdW5kZWZpbmVkIDpcbiAgICAgIGRpc2FibGUgPSB0aGlzLnF1ZXJ5VHlwZSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuc2VsZWN0ZWRUaGVtYXRpY3Muc2VsZWN0ZWQubGVuZ3RoID09PSAwO1xuXG4gICAgcmV0dXJuIGRpc2FibGU7XG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlIHJhZGl1cyB2YWx1ZSBhdCB1c2VyIGNoYW5nZVxuICAgKi9cbiAgZ2V0UmFkaXVzKCkge1xuICAgIGxldCBmb3JtVmFsdWU7XG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubWVhc3VyZVVuaXQgPT09IE1lYXN1cmVMZW5ndGhVbml0Lk1ldGVycyA/XG4gICAgICAgIGZvcm1WYWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUucmFkaXVzIDpcbiAgICAgICAgZm9ybVZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZS5yYWRpdXMgLyAxMDAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU3BhdGlhbEZpbHRlclR5cGUuUG9pbnQpIHtcbiAgICAgIGlmICghdGhpcy5mcmVlaGFuZERyYXdJc0FjdGl2ZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5yYWRpdXNGb3JtQ29udHJvbC52YWx1ZSA8IDAgfHxcbiAgICAgICAgICAodGhpcy5tZWFzdXJlVW5pdCA9PT0gTWVhc3VyZUxlbmd0aFVuaXQuTWV0ZXJzICYmIHRoaXMucmFkaXVzRm9ybUNvbnRyb2wudmFsdWUgPj0gMTAwMDAwKSB8fFxuICAgICAgICAgICh0aGlzLm1lYXN1cmVVbml0ID09PSBNZWFzdXJlTGVuZ3RoVW5pdC5LaWxvbWV0ZXJzICYmIHRoaXMucmFkaXVzRm9ybUNvbnRyb2wudmFsdWUgPj0gMTAwKSkge1xuICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWxlcnQodGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uc3BhdGlhbEZpbHRlci5yYWRpdXNBbGVydCcpLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uc3BhdGlhbEZpbHRlci53YXJuaW5nJykpO1xuICAgICAgICAgIHRoaXMucmFkaXVzID0gMTAwMDtcbiAgICAgICAgICB0aGlzLm1lYXN1cmVVbml0ID09PSBNZWFzdXJlTGVuZ3RoVW5pdC5NZXRlcnMgP1xuICAgICAgICAgICAgdGhpcy5yYWRpdXNGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnJhZGl1cykgOlxuICAgICAgICAgICAgdGhpcy5yYWRpdXNGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnJhZGl1cyAvIDEwMDApO1xuICAgICAgICAgIHRoaXMuZHJhd0d1aWRlJC5uZXh0KHRoaXMucmFkaXVzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JtVmFsdWUpIHtcbiAgICAgICAgICBpZiAoZm9ybVZhbHVlID49IDEwMDAwMCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hbGVydCh0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5zcGF0aWFsRmlsdGVyLnJhZGl1c0FsZXJ0JyksXG4gICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIud2FybmluZycpKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wucmVzZXQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZvcm1WYWx1ZSAhPT0gdGhpcy5yYWRpdXNGb3JtQ29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXNGb3JtQ29udHJvbC5zZXRWYWx1ZShmb3JtVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWVhc3VyZVVuaXQgPT09IE1lYXN1cmVMZW5ndGhVbml0Lk1ldGVycykge1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMucmFkaXVzRm9ybUNvbnRyb2wudmFsdWU7XG4gICAgICAgIHRoaXMuZHJhd0d1aWRlJC5uZXh0KHRoaXMucmFkaXVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5yYWRpdXNGb3JtQ29udHJvbC52YWx1ZSAqIDEwMDA7XG4gICAgICAgIHRoaXMuZHJhd0d1aWRlJC5uZXh0KHRoaXMucmFkaXVzICogMTAwMCk7XG4gICAgICB9XG4gICAgICB0aGlzLm92ZXJsYXlTdHlsZSQubmV4dCh0aGlzLlBvaW50U3R5bGUpO1xuICAgICAgdGhpcy5kcmF3U3R5bGUkLm5leHQodGhpcy5Qb2ludFN0eWxlKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVWaXNpYmxlTGlzdCgpIHtcbiAgICB0aGlzLmxpc3RJc1Zpc2libGUgPSAhdGhpcy5saXN0SXNWaXNpYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUYWJsZVRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHR5cGVDb2x1bW4gPSB7XG4gICAgICBuYW1lOiAnbWV0YS50aXRsZScsXG4gICAgICB0aXRsZTogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uc3BhdGlhbEZpbHRlci50eXBlJyksXG4gICAgICByZW5kZXJlcjogRW50aXR5VGFibGVDb2x1bW5SZW5kZXJlci5VbnNhbml0aXplZEhUTUxcbiAgICB9O1xuICAgIGNvbnN0IG5hbWVDb2x1bW4gPSB7XG4gICAgICBuYW1lOiAncHJvcGVydGllcy5ub20nLFxuICAgICAgdGl0bGU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuc2VhcmNoUmVzdWx0cycpLFxuICAgICAgcmVuZGVyZXI6IEVudGl0eVRhYmxlQ29sdW1uUmVuZGVyZXIuVW5zYW5pdGl6ZWRIVE1MXG4gICAgfTtcbiAgICBjb25zdCBjb2x1bW5zID0gW3R5cGVDb2x1bW4sIG5hbWVDb2x1bW5dO1xuXG4gICAgdGhpcy50YWJsZVRlbXBsYXRlID0ge1xuICAgICAgc2VsZWN0aW9uOiB0cnVlLFxuICAgICAgc29ydDogdHJ1ZSxcbiAgICAgIGNvbHVtbnNcbiAgICB9O1xuICB9XG59XG4iLCI8aWdvLWdlb21ldHJ5LWZvcm0tZmllbGQtaW5wdXRcbiAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgW21hcF09XCJtYXBcIlxuICBbZ2VvbWV0cnlUeXBlXT1cImdlb21ldHJ5VHlwZVwiXG4gIFtkcmF3R3VpZGVdPVwiZHJhd0d1aWRlJCB8IGFzeW5jXCJcbiAgW21lYXN1cmVdPVwibWVhc3VyZVwiXG4gIFtkcmF3Q29udHJvbElzQWN0aXZlXT1cImRyYXdDb250cm9sSXNBY3RpdmVcIlxuICBbZnJlZWhhbmREcmF3SXNBY3RpdmVdPVwiZnJlZWhhbmREcmF3SXNBY3RpdmVcIlxuICBbZHJhd1N0eWxlXT1cImRyYXdTdHlsZSQgfCBhc3luY1wiXG4gIFtvdmVybGF5U3R5bGVdPVwib3ZlcmxheVN0eWxlJCB8IGFzeW5jXCJcbiAgW3JhZGl1c109XCJyYWRpdXNcIj5cbjwvaWdvLWdlb21ldHJ5LWZvcm0tZmllbGQtaW5wdXQ+XG5cbjxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICA8bWF0LXNsaWRlLXRvZ2dsZSAqbmdJZj1cIiFpc1ByZWRlZmluZWQoKVwiXG4gICAgICBbY2hlY2tlZF09XCJkcmF3Q29udHJvbElzQWN0aXZlXCJcbiAgICAgIFtsYWJlbFBvc2l0aW9uXT1cIidiZWZvcmUnXCJcbiAgICAgIChjaGFuZ2UpPVwib25EcmF3Q29udHJvbENoYW5nZSgpXCI+XG4gICAgICB7eydpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuZHJhd0NvbnRyb2wnIHwgdHJhbnNsYXRlfX1cbiAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgPG1hdC1zbGlkZS10b2dnbGUgKm5nSWY9XCIhaXNQcmVkZWZpbmVkKClcIlxuICAgICAgW2NoZWNrZWRdPVwiZnJlZWhhbmREcmF3SXNBY3RpdmVcIlxuICAgICAgW2xhYmVsUG9zaXRpb25dPVwiJ2JlZm9yZSdcIlxuICAgICAgKGNoYW5nZSk9XCJvbmZyZWVoYW5kQ29udHJvbENoYW5nZSgpXCI+XG4gICAgICB7eydpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuZnJlZWhhbmRDb250cm9sJyB8IHRyYW5zbGF0ZX19XG4gICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJidWZmZXItdW5pdFwiICpuZ0lmPVwiaXNQb2x5Z29uKClcIj5cbiAgPGZvcm0gY2xhc3M9XCJidWZmZXItZm9ybVwiPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImJ1ZmZlclwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7J2lnby5nZW8uc3BhdGlhbEZpbHRlci5idWZmZXInIHwgdHJhbnNsYXRlfX1cIiBbZm9ybUNvbnRyb2xdPVwiYnVmZmVyRm9ybUNvbnRyb2xcIlxuICAgICAgW3ZhbHVlXT1cIjBcIiBbcmVhZG9ubHldPVwidGhpcy5mb3JtQ29udHJvbC52YWx1ZSA9PT0gbnVsbFwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZm9ybT5cblxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJ1bml0LWZpZWxkXCI+XG4gICAgPG1hdC1zZWxlY3RcbiAgICBbdmFsdWVdPVwibWVhc3VyZVVuaXRcIlxuICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25NZWFzdXJlVW5pdENoYW5nZSgkZXZlbnQudmFsdWUpXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1lYXN1cmVVbml0IG9mIG1lYXN1cmVVbml0c1wiIFt2YWx1ZV09XCJtZWFzdXJlVW5pdFwiPlxuICAgICAgICB7eygnaWdvLmdlby5tZWFzdXJlLicgKyBtZWFzdXJlVW5pdCkgfCB0cmFuc2xhdGV9fVxuICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInJhZGl1cy11bml0XCIgKm5nSWY9XCJpc1BvaW50KClcIj5cbiAgPGZvcm0gY2xhc3M9XCJyYWRpdXMtZm9ybVwiPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInJhZGl1c1wiPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7J2lnby5nZW8uc3BhdGlhbEZpbHRlci5yYWRpdXMnIHwgdHJhbnNsYXRlfX1cIiBbZm9ybUNvbnRyb2xdPVwicmFkaXVzRm9ybUNvbnRyb2xcIlxuICAgICAgW3ZhbHVlXT1cIjEwMDBcIiAoaW5wdXQpPVwiZ2V0UmFkaXVzKClcIiBbcmVhZG9ubHldPVwidGhpcy5mcmVlaGFuZERyYXdJc0FjdGl2ZSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlID09PSBudWxsXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9mb3JtPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInVuaXQtZmllbGRcIj5cbiAgICA8bWF0LXNlbGVjdFxuICAgIFt2YWx1ZV09XCJtZWFzdXJlVW5pdFwiXG4gICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvbk1lYXN1cmVVbml0Q2hhbmdlKCRldmVudC52YWx1ZSlcIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbWVhc3VyZVVuaXQgb2YgbWVhc3VyZVVuaXRzXCIgW3ZhbHVlXT1cIm1lYXN1cmVVbml0XCI+XG4gICAgICAgIHt7KCdpZ28uZ2VvLm1lYXN1cmUuJyArIG1lYXN1cmVVbml0KSB8IHRyYW5zbGF0ZX19XG4gICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuXG48bWF0LWxhYmVsIGNsYXNzPVwidGl0bGUgbWF0LXR5cG9ncmFwaHlcIj57eydpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuc2VhcmNoJyB8IHRyYW5zbGF0ZX19IDogPC9tYXQtbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwIFt2YWx1ZV09XCJzZWxlY3RlZEl0ZW1UeXBlXCI+XG4gICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbVR5cGVcIlxuICAgICAgW3ZhbHVlXT1cIml0ZW1cIlxuICAgICAgKGNoYW5nZSk9XCJvbkl0ZW1UeXBlQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIHt7J2lnby5nZW8uc3BhdGlhbEZpbHRlci4nICsgaXRlbSB8IHRyYW5zbGF0ZX19XG4gICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG5cbjxkaXYgY2xhc3M9XCJ0aGVtYXRpY3NcIiAqbmdJZj1cIihzZWxlY3RlZEl0ZW1UeXBlPT09J1RoZW1hdGljcycgJiYgIXRhYmxlVGVtcGxhdGUpIHx8IChzZWxlY3RlZEl0ZW1UeXBlPT09J1RoZW1hdGljcycgJiYgdGFibGVUZW1wbGF0ZSAmJiAhbGlzdElzVmlzaWJsZSlcIj5cbiAgPG1hdC10YWJsZT5cbiAgICAgIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBjbGFzcz1cInRoZW1hdGljcy1oZWFkZXJcIj57eydpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuVGhlbWF0aWNzJyB8IHRyYW5zbGF0ZX19PC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPCEtLSBTZWxlY3QgQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzZWxlY3RcIj5cbiAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBjbGFzcz1cImNoZWNrcy1oZWFkZXJcIj5cbiAgICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiJGV2ZW50ID8gbWFzdGVyVG9nZ2xlKCkgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImlzQWxsU2VsZWN0ZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3RlZFRoZW1hdGljcy5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIj5cbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L21hdC1oZWFkZXItcm93PlxuICAgIDxtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvbWF0LXJvdz5cblxuICA8L21hdC10YWJsZT5cblxuICA8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICAgIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBsZWFmIG5vZGVzIC0tPlxuICAgIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVUb2dnbGU+XG4gICAgICA8bGkgY2xhc3M9XCJtYXQtdHJlZS1ub2RlXCI+XG4gICAgICAgIDwhLS0gdXNlIGEgZGlzYWJsZWQgYnV0dG9uIHRvIHByb3ZpZGUgcGFkZGluZyBmb3IgdHJlZSBsZWFmIC0tPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICAgICAge3tub2RlLm5hbWV9fVxuICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwidHJlZS1jaGVja1wiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiJGV2ZW50ID8gb25Ub2dnbGVDaGFuZ2Uobm9kZSkgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3RlZFRoZW1hdGljcy5pc1NlbGVjdGVkKG5vZGUpXCI+XG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgPC9saT5cbiAgICA8L21hdC10cmVlLW5vZGU+XG5cbiAgICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cbiAgICA8bWF0LW5lc3RlZC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXQtdHJlZS1ub2RlXCI+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIChjbGljayk9XCJvblRvZ2dsZUNsaWNrKG5vZGUpXCI+XG4gICAgICAgICAgICA8bWF0LWljb24gW3N2Z0ljb25dPVwidHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdjaGV2cm9uLWRvd24nIDogJ2NoZXZyb24tcmlnaHQnXCI+PC9tYXQtaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7e25vZGUubmFtZX19XG4gICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cInRyZWUtY2hlY2stMlwiIChjaGFuZ2UpPVwiJGV2ZW50ID8gY2hpbGRyZW5zVG9nZ2xlKG5vZGUpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJpc0FsbFNlbGVjdGVkKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImhhc0NoaWxkcmVuU2VsZWN0ZWQobm9kZSkgJiYgIWlzQWxsU2VsZWN0ZWQobm9kZSlcIj5cbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzcz1cInRyZWUtdWxcIiBbY2xhc3MuZXhhbXBsZS10cmVlLWludmlzaWJsZV09XCIhdHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0VHJlZU5vZGVPdXRsZXQ+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvdWw+XG4gICAgPC9tYXQtbmVzdGVkLXRyZWUtbm9kZT5cblxuICA8L21hdC10cmVlPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG5cbiAgPGJ1dHRvbiAqbmdJZj1cImlzUHJlZGVmaW5lZCgpXCIgbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJjbGVhci1zZWFyY2gtYnV0dG9uXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkQ2xlYXJTZWFyY2goKVwiXG4gICAgKGNsaWNrKT1cImNsZWFyU2VhcmNoKClcIj5cbiAgICAgIHt7J2lnby5nZW8uc3BhdGlhbEZpbHRlci5jbGVhclNlYXJjaCcgfCB0cmFuc2xhdGV9fVxuICA8L2J1dHRvbj5cblxuICA8YnV0dG9uICpuZ0lmPVwiaXNQb2x5Z29uKCkgfHwgaXNQb2ludCgpXCIgbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJjbGVhci1mb3JtLWJ1dHRvblwiIFtkaXNhYmxlZF09XCJ0aGlzLmZvcm1Db250cm9sLnZhbHVlID09PSBudWxsXCJcbiAgICAoY2xpY2spPVwiY2xlYXJEcmF3Wm9uZSgpXCI+XG4gICAge3snaWdvLmdlby5zcGF0aWFsRmlsdGVyLmNsZWFyRm9ybScgfCB0cmFuc2xhdGV9fVxuICA8L2J1dHRvbj5cblxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwic2VhcmNoLWJ1dHRvblwiIFtkaXNhYmxlZF09XCJkaXNhYmxlU2VhcmNoQnV0dG9uKClcIiBjb2xvcj1cInByaW1hcnlcIlxuICAgIChjbGljayk9XCJ0b2dnbGVTZWFyY2hCdXR0b24oKVwiPlxuICAgIHt7J2lnby5nZW8uc3BhdGlhbEZpbHRlci5nb1NlYXJjaCcgfCB0cmFuc2xhdGV9fVxuICA8L2J1dHRvbj5cblxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwicmVtb3ZlLWJ1dHRvblwiIFtkaXNhYmxlZF09XCJhbGxMYXllcnMubGVuZ3RoID09PSAwXCIgKGNsaWNrKT1cImNsZWFyQnV0dG9uKClcIj5cbiAgICB7eydpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIucmVtb3ZlTGF5ZXInIHwgdHJhbnNsYXRlfX1cbiAgPC9idXR0b24+XG5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImV4cG9ydC1idXR0b25cIiBbZGlzYWJsZWRdPVwiIXN0b3JlLmVudGl0aWVzJC5nZXRWYWx1ZSgpLmxlbmd0aFwiIChjbGljayk9XCJleHBvcnQuZW1pdCgpXCI+XG4gICAge3snaWdvLmdlby5zcGF0aWFsRmlsdGVyLmV4cG9ydExheWVyJyB8IHRyYW5zbGF0ZX19XG4gIDwvYnV0dG9uPlxuXG48L2Rpdj5cblxuPGJ1dHRvblxuICBjbGFzcz1cImNoZXZyb24tZG93blwiXG4gICpuZ0lmPVwic3RvcmUuYWxsKCkubGVuZ3RoICYmIHRhYmxlVGVtcGxhdGUgJiYgIWxpc3RJc1Zpc2libGVcIlxuICBtYXQtaWNvbi1idXR0b25cbiAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuc2hvd1NlYXJjaFJlc3VsdHMnIHwgdHJhbnNsYXRlXCJcbiAgKGNsaWNrKT1cInRvZ2dsZVZpc2libGVMaXN0KClcIj5cbiAgPG1hdC1pY29uIHN2Z0ljb249XCJjaGV2cm9uLWRvd25cIj48L21hdC1pY29uPlxuPC9idXR0b24+XG5cbjxkaXYgY2xhc3M9XCJyZXN1bHRzXCIgKm5nSWY9XCJzdG9yZS5hbGwoKS5sZW5ndGggJiYgdGFibGVUZW1wbGF0ZSAmJiBsaXN0SXNWaXNpYmxlXCI+XG4gIDxidXR0b25cbiAgICAqbmdJZj1cImxpc3RJc1Zpc2libGVcIlxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuaGlkZVNlYXJjaFJlc3VsdHMnIHwgdHJhbnNsYXRlXCJcbiAgICAoY2xpY2spPVwidG9nZ2xlVmlzaWJsZUxpc3QoKVwiPlxuICA8bWF0LWljb24gc3ZnSWNvbj1cImNoZXZyb24tdXBcIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGlnby1lbnRpdHktdGFibGVcbiAgICBjbGFzcz1cInJlc3VsdHMtbGlzdFwiXG4gICAgW3RlbXBsYXRlXT1cInRhYmxlVGVtcGxhdGVcIlxuICAgIFtzdG9yZV09XCJzdG9yZVwiXG4gICAgKGVudGl0eVNlbGVjdENoYW5nZSk9XCJlbnRpdHlDaGFuZ2UuZW1pdCgkZXZlbnQpXCI+XG4gIDwvaWdvLWVudGl0eS10YWJsZT5cbjwvZGl2PlxuIl19