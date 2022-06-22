import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import { LayerListControlsEnum, sourceCanSearch, VectorLayer } from '@igo2/geo';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { ImportExportMode } from '../../import-export/import-export.state';
import * as i0 from "@angular/core";
import * as i1 from "../layer-list-tool.state";
import * as i2 from "../../tool/tool.state";
import * as i3 from "../map.state";
import * as i4 from "@igo2/geo";
import * as i5 from "../../import-export/import-export.state";
import * as i6 from "@angular/material/tabs";
import * as i7 from "@angular/common";
import * as i8 from "../../workspace/workspace-button/workspace-button.component";
import * as i9 from "@angular/material/list";
import * as i10 from "@angular/material/icon";
import * as i11 from "@angular/material/core";
import * as i12 from "@ngx-translate/core";
const _c0 = ["tabGroup"];
function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_time_filter_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-time-filter-button", 14);
    i0.ɵɵlistener("click", function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_time_filter_button_2_Template_igo_time_filter_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.activateTimeFilter(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r9 = i0.ɵɵnextContext().layer;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("header", ctx_r10.timeButton)("layer", layer_r9);
} }
function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_ogc_filter_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-ogc-filter-button", 14);
    i0.ɵɵlistener("click", function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_ogc_filter_button_3_Template_igo_ogc_filter_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(3); return ctx_r16.activateOgcFilter(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r9 = i0.ɵɵnextContext().layer;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("header", ctx_r11.ogcButton)("layer", layer_r9);
} }
function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_export_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-export-button", 15);
    i0.ɵɵlistener("click", function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_export_button_4_Template_igo_export_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const layer_r9 = i0.ɵɵnextContext().layer; const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.activateExport(layer_r9); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r9 = i0.ɵɵnextContext().layer;
    i0.ɵɵproperty("layer", layer_r9);
} }
function MapToolsComponent_igo_layer_list_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-metadata-button", 10);
    i0.ɵɵelement(1, "igo-track-feature-button", 11);
    i0.ɵɵtemplate(2, MapToolsComponent_igo_layer_list_5_ng_template_1_igo_time_filter_button_2_Template, 1, 2, "igo-time-filter-button", 12);
    i0.ɵɵtemplate(3, MapToolsComponent_igo_layer_list_5_ng_template_1_igo_ogc_filter_button_3_Template, 1, 2, "igo-ogc-filter-button", 12);
    i0.ɵɵtemplate(4, MapToolsComponent_igo_layer_list_5_ng_template_1_igo_export_button_4_Template, 1, 1, "igo-export-button", 13);
    i0.ɵɵelement(5, "igo-workspace-button", 10);
} if (rf & 2) {
    const layer_r9 = ctx.layer;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("layer", layer_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("trackFeature", true)("layer", layer_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isTimeFilterButton(layer_r9));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isOGCFilterButton(layer_r9));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isExportButton(layer_r9));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", layer_r9);
} }
function MapToolsComponent_igo_layer_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-layer-list", 8);
    i0.ɵɵlistener("appliedFilterAndSort", function MapToolsComponent_igo_layer_list_5_Template_igo_layer_list_appliedFilterAndSort_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onLayerListChange($event); });
    i0.ɵɵtemplate(1, MapToolsComponent_igo_layer_list_5_ng_template_1_Template, 6, 7, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("excludeBaseLayers", ctx_r1.excludeBaseLayers)("layerFilterAndSortOptions", ctx_r1.layerFilterAndSortOptions)("expandLegendOfVisibleLayers", ctx_r1.expandLegendOfVisibleLayers)("toggleLegendOnVisibilityChange", ctx_r1.toggleLegendOnVisibilityChange)("updateLegendOnResolutionChange", ctx_r1.updateLegendOnResolutionChange)("floatLabel", false)("queryBadge", ctx_r1.queryBadge)("map", ctx_r1.map);
} }
function MapToolsComponent_igo_layer_legend_list_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-layer-legend-list", 16);
    i0.ɵɵlistener("allLegendsShown", function MapToolsComponent_igo_layer_legend_list_9_Template_igo_layer_legend_list_allLegendsShown_0_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onShowAllLegends($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("allowShowAllLegends", ctx_r2.allowShowAllLegends)("showAllLegendsValue", i0.ɵɵpipeBind1(1, 4, ctx_r2.showAllLegendsValue$))("excludeBaseLayers", ctx_r2.excludeBaseLayers)("updateLegendOnResolutionChange", ctx_r2.updateLegendOnResolutionChange);
} }
function MapToolsComponent_10_ng_template_0_Template(rf, ctx) { }
function MapToolsComponent_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MapToolsComponent_10_ng_template_0_Template, 0, 0, "ng-template");
} }
function MapToolsComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r4.visibleLayers$).length ? i0.ɵɵpipeBind1(3, 3, "igo.integration.mapTool.noLayersInRange") : i0.ɵɵpipeBind1(4, 5, "igo.integration.mapTool.noLayersVisible"), " ");
} }
function MapToolsComponent_ng_template_15_mat_list_0_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.integration.mapTool.customize"), "");
} }
function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 20);
    i0.ɵɵelement(3, "path", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 22);
    i0.ɵɵlistener("click", function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_5_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.searchEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.search-tool"), " ");
} }
function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 20);
    i0.ɵɵelement(3, "path", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 24);
    i0.ɵɵlistener("click", function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_6_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(3); return ctx_r35.catalogEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.catalog-tool"), " ");
} }
function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 20);
    i0.ɵɵelement(3, "path", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 26);
    i0.ɵɵlistener("click", function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_7_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.contextEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.context-tool"), " ");
} }
function MapToolsComponent_ng_template_15_mat_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵelementStart(1, "p", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MapToolsComponent_ng_template_15_mat_list_0_p_4_Template, 3, 3, "p", 6);
    i0.ɵɵtemplate(5, MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_5_Template, 7, 3, "mat-list-item", 18);
    i0.ɵɵtemplate(6, MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_6_Template, 7, 3, "mat-list-item", 18);
    i0.ɵɵtemplate(7, MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_7_Template, 7, 3, "mat-list-item", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "igo.integration.mapTool.empty"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && (ctx_r28.searchToolInToolbar || ctx_r28.catalogToolInToolbar || ctx_r28.contextToolInToolbar));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && ctx_r28.searchToolInToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && ctx_r28.catalogToolInToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && ctx_r28.contextToolInToolbar);
} }
function MapToolsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MapToolsComponent_ng_template_15_mat_list_0_Template, 8, 7, "mat-list", 18);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r6.delayedShowEmptyMapContent);
} }
/**
 * Tool to browse a map's layers or to choose a different map
 */
let MapToolsComponent = class MapToolsComponent {
    constructor(layerListToolState, toolState, mapState, searchSourceService, importExportState) {
        this.layerListToolState = layerListToolState;
        this.toolState = toolState;
        this.mapState = mapState;
        this.searchSourceService = searchSourceService;
        this.importExportState = importExportState;
        this.layers$ = new BehaviorSubject([]);
        this.showAllLegendsValue$ = new BehaviorSubject(false);
        this.delayedShowEmptyMapContent = false;
        this.allowShowAllLegends = false;
        this.showAllLegendsValue = false;
        this.toggleLegendOnVisibilityChange = false;
        this.expandLegendOfVisibleLayers = false;
        this.updateLegendOnResolutionChange = false;
        this.ogcButton = true;
        this.timeButton = true;
        this.layerAdditionAllowed = true;
        this._layerListControls = {};
        this.queryBadge = false;
    }
    get layerListControls() {
        return this._layerListControls;
    }
    set layerListControls(value) {
        const stateOptions = this.layerListToolState.getLayerListControls();
        const stateKeyword = stateOptions.keyword;
        const stateOnlyVisible = stateOptions.onlyVisible;
        const stateSortAlpha = stateOptions.sortAlpha;
        value.keyword = stateKeyword !== '' ? stateKeyword : value.keyword;
        value.onlyVisible =
            stateOnlyVisible !== undefined ? stateOnlyVisible : value.onlyVisible;
        value.sortAlpha =
            stateSortAlpha !== undefined ? stateSortAlpha : value.sortAlpha;
        value.onlyVisible =
            value.onlyVisible === undefined ? false : value.onlyVisible;
        value.sortAlpha = value.sortAlpha === undefined ? false : value.sortAlpha;
        this._layerListControls = value;
    }
    get map() {
        return this.mapState.map;
    }
    get visibleOrInRangeLayers$() {
        return this.layers$.pipe(map((layers) => layers.filter((layer) => layer.visible$.value && layer.isInResolutionsRange$.value)));
    }
    get visibleLayers$() {
        return this.layers$.pipe(map((layers) => layers.filter((layer) => layer.visible$.value)));
    }
    get excludeBaseLayers() {
        return this.layerListControls.excludeBaseLayers || false;
    }
    get layerFilterAndSortOptions() {
        const filterSortOptions = Object.assign({
            showToolbar: LayerListControlsEnum.default
        }, this.layerListControls);
        switch (this.layerListControls.showToolbar) {
            case LayerListControlsEnum.always:
                filterSortOptions.showToolbar = LayerListControlsEnum.always;
                break;
            case LayerListControlsEnum.never:
                filterSortOptions.showToolbar = LayerListControlsEnum.never;
                break;
            default:
                break;
        }
        return filterSortOptions;
    }
    get searchToolInToolbar() {
        return (this.toolState.toolbox.getToolbar().indexOf('searchResults') !== -1 &&
            this.searchSourceService
                .getSources()
                .filter(sourceCanSearch)
                .filter((s) => s.available && s.getType() === 'Layer').length > 0);
    }
    get catalogToolInToolbar() {
        return this.toolState.toolbox.getToolbar().indexOf('catalog') !== -1;
    }
    get contextToolInToolbar() {
        return this.toolState.toolbox.getToolbar().indexOf('contextManager') !== -1;
    }
    ngOnInit() {
        this.selectedTab();
        this.resolution$$ = combineLatest([
            this.map.layers$,
            this.map.viewController.resolution$
        ])
            .pipe(debounceTime(10))
            .subscribe((bunch) => {
            this.layers$.next(bunch[0].filter((layer) => layer.showInLayerList !== false &&
                (!this.excludeBaseLayers || !layer.baseLayer)));
        });
        if (this.allowShowAllLegends) {
            this.mapState.showAllLegendsValue =
                this.mapState.showAllLegendsValue !== undefined
                    ? this.mapState.showAllLegendsValue
                    : this.showAllLegendsValue || false;
            this.showAllLegendsValue$.next(this.mapState.showAllLegendsValue);
        }
        else {
            this.showAllLegendsValue$.next(false);
        }
        // prevent message to be shown too quickly. Waiting for layers
        setTimeout(() => (this.delayedShowEmptyMapContent = true), 250);
    }
    ngOnDestroy() {
        this.resolution$$.unsubscribe();
        if (this.visibleOrInRangeLayers$$) {
            this.visibleOrInRangeLayers$$.unsubscribe();
        }
    }
    onShowAllLegends(event) {
        this.mapState.showAllLegendsValue = event;
        this.showAllLegendsValue$.next(event);
    }
    selectedTab() {
        const userSelectedTab = this.layerListToolState.selectedTab$.value;
        if (userSelectedTab !== undefined) {
            this.layerListToolState.setSelectedTab(userSelectedTab);
        }
        else {
            if (this.selectedTabAtOpening === 'legend') {
                this.layerListToolState.setSelectedTab(1);
            }
            else {
                this.layerListToolState.setSelectedTab(0);
            }
        }
    }
    tabChanged(tab) {
        this.layerListToolState.setSelectedTab(tab.index);
        this.layers$.next(this.map.layers.filter((layer) => layer.showInLayerList !== false &&
            (!this.excludeBaseLayers || !layer.baseLayer)));
    }
    onLayerListChange(appliedFilters) {
        this.layerListToolState.setKeyword(appliedFilters.keyword);
        this.layerListToolState.setSortAlpha(appliedFilters.sortAlpha);
        this.layerListToolState.setOnlyVisible(appliedFilters.onlyVisible);
    }
    showAllLegend() {
        if (this.layers$.getValue().length === 0) {
            return false;
        }
        else if (this.layers$.getValue().length !== 0 &&
            this.allowShowAllLegends === false) {
            let visibleOrInRangeLayers;
            this.visibleOrInRangeLayers$$ = this.visibleOrInRangeLayers$.subscribe((value) => {
                value.length === 0
                    ? (visibleOrInRangeLayers = false)
                    : (visibleOrInRangeLayers = true);
            });
            if (visibleOrInRangeLayers === false) {
                return false;
            }
        }
        return true;
    }
    activateExport(layer) {
        var _a;
        let id = layer.id;
        if ((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.workspaceId) {
            id = layer.options.workspace.workspaceId !== layer.id ? layer.options.workspace.workspaceId : layer.id;
        }
        this.importExportState.setsExportOptions({ layers: [id] });
        this.importExportState.setMode(ImportExportMode.export);
        this.toolState.toolbox.activateTool('importExport');
    }
    activateTimeFilter() {
        this.toolState.toolbox.activateTool('activeTimeFilter');
    }
    activateOgcFilter() {
        this.toolState.toolbox.activateTool('activeOgcFilter');
    }
    searchEmit() {
        this.toolState.toolbox.activateTool('searchResults');
    }
    catalogEmit() {
        this.toolState.toolbox.activateTool('catalog');
    }
    contextEmit() {
        this.toolState.toolbox.activateTool('contextManager');
    }
    isTimeFilterButton(layer) {
        const options = layer.dataSource.options;
        return this.timeButton && options.timeFilterable && options.timeFilter;
    }
    isOGCFilterButton(layer) {
        const options = layer.dataSource.options;
        return this.ogcButton && options.ogcFilters && options.ogcFilters.enabled &&
            (options.ogcFilters.pushButtons || options.ogcFilters.checkboxes || options.ogcFilters.radioButtons
                || options.ogcFilters.select || options.ogcFilters.editable);
    }
    isExportButton(layer) {
        var _a, _b;
        if ((layer instanceof VectorLayer && layer.exportable === true) ||
            (layer.dataSource.options.download && layer.dataSource.options.download.url) ||
            (((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.enabled) && ((_b = layer.options.workspace) === null || _b === void 0 ? void 0 : _b.workspaceId) !== layer.id)) {
            return true;
        }
        return false;
    }
};
MapToolsComponent.ɵfac = function MapToolsComponent_Factory(t) { return new (t || MapToolsComponent)(i0.ɵɵdirectiveInject(i1.LayerListToolState), i0.ɵɵdirectiveInject(i2.ToolState), i0.ɵɵdirectiveInject(i3.MapState), i0.ɵɵdirectiveInject(i4.SearchSourceService), i0.ɵɵdirectiveInject(i5.ImportExportState)); };
MapToolsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapToolsComponent, selectors: [["igo-map-tools"]], viewQuery: function MapToolsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabGroup = _t.first);
    } }, inputs: { allowShowAllLegends: "allowShowAllLegends", showAllLegendsValue: "showAllLegendsValue", toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendOfVisibleLayers: "expandLegendOfVisibleLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", selectedTabAtOpening: "selectedTabAtOpening", ogcButton: "ogcButton", timeButton: "timeButton", layerAdditionAllowed: "layerAdditionAllowed", layerListControls: "layerListControls", queryBadge: "queryBadge" }, decls: 17, vars: 23, consts: [[3, "selectedIndex", "selectedTabChange"], ["tabGroup", ""], [3, "label"], ["igoLayerListBinding", "", 3, "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "floatLabel", "queryBadge", "map", "appliedFilterAndSort", 4, "ngIf", "ngIfElse"], ["igoLayerLegendListBinding", "", 3, "allowShowAllLegends", "showAllLegendsValue", "excludeBaseLayers", "updateLegendOnResolutionChange", "allLegendsShown", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "map-empty mat-typography", 4, "ngIf"], ["emptyLayers", ""], ["igoLayerListBinding", "", 3, "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "floatLabel", "queryBadge", "map", "appliedFilterAndSort"], ["igoLayerItemToolbar", ""], [3, "layer"], [3, "trackFeature", "layer"], [3, "header", "layer", "click", 4, "ngIf"], [3, "layer", "click", 4, "ngIf"], [3, "header", "layer", "click"], [3, "layer", "click"], ["igoLayerLegendListBinding", "", 3, "allowShowAllLegends", "showAllLegendsValue", "excludeBaseLayers", "updateLegendOnResolutionChange", "allLegendsShown"], [1, "map-empty", "mat-typography"], [4, "ngIf"], ["mat-list-icon", ""], ["viewBox", "0 0 24 24", "fit", "", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["d", "M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["d", "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function MapToolsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group", 0, 1);
        i0.ɵɵlistener("selectedTabChange", function MapToolsComponent_Template_mat_tab_group_selectedTabChange_0_listener($event) { return ctx.tabChanged($event); });
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementStart(3, "mat-tab", 2);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵtemplate(5, MapToolsComponent_igo_layer_list_5_Template, 3, 8, "igo-layer-list", 3);
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-tab", 2);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵtemplate(9, MapToolsComponent_igo_layer_legend_list_9_Template, 2, 6, "igo-layer-legend-list", 4);
        i0.ɵɵtemplate(10, MapToolsComponent_10_Template, 1, 0, undefined, 5);
        i0.ɵɵpipe(11, "async");
        i0.ɵɵtemplate(12, MapToolsComponent_p_12_Template, 5, 7, "p", 6);
        i0.ɵɵpipe(13, "async");
        i0.ɵɵpipe(14, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, MapToolsComponent_ng_template_15_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r5 = i0.ɵɵreference(16);
        i0.ɵɵproperty("selectedIndex", i0.ɵɵpipeBind1(2, 9, ctx.layerListToolState.selectedTab$));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(4, 11, "igo.integration.tools.layers"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(6, 13, ctx.layers$).length !== 0)("ngIfElse", _r5);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(8, 15, "igo.integration.tools.legend"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showAllLegend());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(11, 17, ctx.layers$).length !== 0)("ngIfElse", _r5);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.allowShowAllLegends && i0.ɵɵpipeBind1(13, 19, ctx.layers$).length !== 0 && i0.ɵɵpipeBind1(14, 21, ctx.visibleOrInRangeLayers$).length === 0);
    } }, directives: [i6.MatTabGroup, i6.MatTab, i7.NgIf, i4.LayerListComponent, i4.LayerListBindingDirective, i4.MetadataButtonComponent, i4.TrackFeatureButtonComponent, i8.WorkspaceButtonComponent, i4.TimeFilterButtonComponent, i4.OgcFilterButtonComponent, i4.ExportButtonComponent, i4.LayerLegendListComponent, i4.LayerLegendListBindingDirective, i9.MatList, i9.MatListItem, i10.MatIcon, i9.MatListIconCssMatStyler, i11.MatLine], pipes: [i7.AsyncPipe, i12.TranslatePipe], styles: [".map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:10px}.map-empty[_ngcontent-%COMP%]{text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:5px}mat-tab-group[_ngcontent-%COMP%], mat-tab-group[_ngcontent-%COMP%]     .mat-tab-body-wrapper{height:100%;overflow:hidden}[_nghost-%COMP%]     .mat-tab-body-content{overflow:hidden}"], changeDetection: 0 });
MapToolsComponent = __decorate([
    ToolComponent({
        name: 'mapTools',
        title: 'igo.integration.tools.map',
        icon: 'map'
    })
], MapToolsComponent);
export { MapToolsComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapToolsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-map-tools',
                templateUrl: './map-tools.component.html',
                styleUrls: ['./map-tools.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.LayerListToolState }, { type: i2.ToolState }, { type: i3.MapState }, { type: i4.SearchSourceService }, { type: i5.ImportExportState }]; }, { allowShowAllLegends: [{
            type: Input
        }], showAllLegendsValue: [{
            type: Input
        }], toggleLegendOnVisibilityChange: [{
            type: Input
        }], expandLegendOfVisibleLayers: [{
            type: Input
        }], updateLegendOnResolutionChange: [{
            type: Input
        }], selectedTabAtOpening: [{
            type: Input
        }], ogcButton: [{
            type: Input
        }], timeButton: [{
            type: Input
        }], layerAdditionAllowed: [{
            type: Input
        }], layerListControls: [{
            type: Input
        }], queryBadge: [{
            type: Input
        }], tabGroup: [{
            type: ViewChild,
            args: ['tabGroup', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXRvb2xzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvbWFwL21hcC10b29scy9tYXAtdG9vbHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvbWFwLXRvb2xzL21hcC10b29scy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsS0FBSyxFQUVMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFDTCxxQkFBcUIsRUFJckIsZUFBZSxFQUdmLFdBQVcsRUFDWixNQUFNLFdBQVcsQ0FBQztBQU1uQixPQUFPLEVBQUUsZUFBZSxFQUE0QixhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQXFCLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDTnRGLGtEQUN1RDtJQUEvQixtUUFBOEI7SUFBQyxpQkFBeUI7Ozs7SUFEdEIsMkNBQXFCLG1CQUFBOzs7O0lBRS9FLGlEQUNzRDtJQUE5QixnUUFBNkI7SUFBQyxpQkFBd0I7Ozs7SUFEdEIsMENBQW9CLG1CQUFBOzs7O0lBRTVFLDZDQUFpRztJQUFoQyx3U0FBK0I7SUFBQyxpQkFBb0I7OztJQUFwRSxnQ0FBZTs7O0lBTmhFLDBDQUEyRDtJQUMzRCwrQ0FBMkY7SUFDM0Ysd0lBQ2dGO0lBQ2hGLHNJQUM4RTtJQUM5RSw4SEFBcUg7SUFDckgsMkNBQTZEOzs7O0lBUHhDLGdDQUFlO0lBQ1YsZUFBcUI7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UUFBcEQsNkVBQW9EO1FBQ25DLGVBQXFCO1FBQXJCLDBDQUFxQjtRQVEvQixlQUFzQztRQUF0Qyx1RUFBc0MsaUJBQUE7UUFHakQsZUFBOEc7UUFBOUcsdUtBQThHOztBRER4RyxpQkFBaUI7SUFYN0IsYUFBYSxDQUFDO1FBQ2IsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLDJCQUEyQjtRQUNsQyxJQUFJLEVBQUUsS0FBSztLQUNaLENBQUM7R0FPVyxpQkFBaUIsQ0ErUTdCO1NBL1FZLGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBTjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3NMQVNVLG1CQUFtQjtrQkFBM0IsS0FBSztZQUVHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUVHLDhCQUE4QjtrQkFBdEMsS0FBSztZQUVHLDJCQUEyQjtrQkFBbkMsS0FBSztZQUVHLDhCQUE4QjtrQkFBdEMsS0FBSztZQUVHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUVHLFNBQVM7a0JBQWpCLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLO1lBRUcsb0JBQW9CO2tCQUE1QixLQUFLO1lBR0YsaUJBQWlCO2tCQURwQixLQUFLO1lBNEJHLFVBQVU7a0JBQWxCLEtBQUs7WUEyQ21DLFFBQVE7a0JBQWhELFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7XG4gIExheWVyTGlzdENvbnRyb2xzRW51bSxcbiAgTGF5ZXJMaXN0Q29udHJvbHNPcHRpb25zLFxuICBJZ29NYXAsXG4gIFNlYXJjaFNvdXJjZVNlcnZpY2UsXG4gIHNvdXJjZUNhblNlYXJjaCxcbiAgTGF5ZXIsXG4gIEV4cG9ydE9wdGlvbnMsXG4gIFZlY3RvckxheWVyXG59IGZyb20gJ0BpZ28yL2dlbyc7XG5cbmltcG9ydCB7IExheWVyTGlzdFRvb2xTdGF0ZSB9IGZyb20gJy4uL2xheWVyLWxpc3QtdG9vbC5zdGF0ZSc7XG5pbXBvcnQgeyBNYXRUYWJDaGFuZ2VFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHsgVG9vbFN0YXRlIH0gZnJvbSAnLi4vLi4vdG9vbC90b29sLnN0YXRlJztcbmltcG9ydCB7IE1hcFN0YXRlIH0gZnJvbSAnLi4vbWFwLnN0YXRlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEltcG9ydEV4cG9ydE1vZGUsIEltcG9ydEV4cG9ydFN0YXRlIH0gZnJvbSAnLi4vLi4vaW1wb3J0LWV4cG9ydC9pbXBvcnQtZXhwb3J0LnN0YXRlJztcbi8qKlxuICogVG9vbCB0byBicm93c2UgYSBtYXAncyBsYXllcnMgb3IgdG8gY2hvb3NlIGEgZGlmZmVyZW50IG1hcFxuICovXG5AVG9vbENvbXBvbmVudCh7XG4gIG5hbWU6ICdtYXBUb29scycsXG4gIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLnRvb2xzLm1hcCcsXG4gIGljb246ICdtYXAnXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLW1hcC10b29scycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAtdG9vbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXAtdG9vbHMuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWFwVG9vbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGxheWVycyQ6IEJlaGF2aW9yU3ViamVjdDxMYXllcltdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBzaG93QWxsTGVnZW5kc1ZhbHVlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgcHJpdmF0ZSByZXNvbHV0aW9uJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSB2aXNpYmxlT3JJblJhbmdlTGF5ZXJzJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIGRlbGF5ZWRTaG93RW1wdHlNYXBDb250ZW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgYWxsb3dTaG93QWxsTGVnZW5kczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNob3dBbGxMZWdlbmRzVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSB0b2dnbGVMZWdlbmRPblZpc2liaWxpdHlDaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBleHBhbmRMZWdlbmRPZlZpc2libGVMYXllcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSB1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZWxlY3RlZFRhYkF0T3BlbmluZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG9nY0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgdGltZUJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgbGF5ZXJBZGRpdGlvbkFsbG93ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsYXllckxpc3RDb250cm9scygpOiBMYXllckxpc3RDb250cm9sc09wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9sYXllckxpc3RDb250cm9scztcbiAgfVxuICBzZXQgbGF5ZXJMaXN0Q29udHJvbHModmFsdWU6IExheWVyTGlzdENvbnRyb2xzT3B0aW9ucykge1xuICAgIGNvbnN0IHN0YXRlT3B0aW9ucyA9IHRoaXMubGF5ZXJMaXN0VG9vbFN0YXRlLmdldExheWVyTGlzdENvbnRyb2xzKCk7XG4gICAgY29uc3Qgc3RhdGVLZXl3b3JkID0gc3RhdGVPcHRpb25zLmtleXdvcmQ7XG4gICAgY29uc3Qgc3RhdGVPbmx5VmlzaWJsZSA9IHN0YXRlT3B0aW9ucy5vbmx5VmlzaWJsZTtcbiAgICBjb25zdCBzdGF0ZVNvcnRBbHBoYSA9IHN0YXRlT3B0aW9ucy5zb3J0QWxwaGE7XG5cbiAgICB2YWx1ZS5rZXl3b3JkID0gc3RhdGVLZXl3b3JkICE9PSAnJyA/IHN0YXRlS2V5d29yZCA6IHZhbHVlLmtleXdvcmQ7XG4gICAgdmFsdWUub25seVZpc2libGUgPVxuICAgICAgc3RhdGVPbmx5VmlzaWJsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGVPbmx5VmlzaWJsZSA6IHZhbHVlLm9ubHlWaXNpYmxlO1xuICAgIHZhbHVlLnNvcnRBbHBoYSA9XG4gICAgICBzdGF0ZVNvcnRBbHBoYSAhPT0gdW5kZWZpbmVkID8gc3RhdGVTb3J0QWxwaGEgOiB2YWx1ZS5zb3J0QWxwaGE7XG5cbiAgICB2YWx1ZS5vbmx5VmlzaWJsZSA9XG4gICAgICB2YWx1ZS5vbmx5VmlzaWJsZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiB2YWx1ZS5vbmx5VmlzaWJsZTtcbiAgICB2YWx1ZS5zb3J0QWxwaGEgPSB2YWx1ZS5zb3J0QWxwaGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogdmFsdWUuc29ydEFscGhhO1xuXG4gICAgdGhpcy5fbGF5ZXJMaXN0Q29udHJvbHMgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9sYXllckxpc3RDb250cm9scyA9IHt9O1xuXG4gIGdldCBtYXAoKTogSWdvTWFwIHtcbiAgICByZXR1cm4gdGhpcy5tYXBTdGF0ZS5tYXA7XG4gIH1cblxuICBASW5wdXQoKSBxdWVyeUJhZGdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IHZpc2libGVPckluUmFuZ2VMYXllcnMkKCk6IE9ic2VydmFibGU8TGF5ZXJbXT4ge1xuICAgIHJldHVybiB0aGlzLmxheWVycyQucGlwZShcbiAgICAgIG1hcCgobGF5ZXJzKSA9PlxuICAgICAgICBsYXllcnMuZmlsdGVyKFxuICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIudmlzaWJsZSQudmFsdWUgJiYgbGF5ZXIuaXNJblJlc29sdXRpb25zUmFuZ2UkLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0IHZpc2libGVMYXllcnMkKCk6IE9ic2VydmFibGU8TGF5ZXJbXT4ge1xuICAgIHJldHVybiB0aGlzLmxheWVycyQucGlwZShcbiAgICAgIG1hcCgobGF5ZXJzKSA9PiBsYXllcnMuZmlsdGVyKChsYXllcikgPT4gbGF5ZXIudmlzaWJsZSQudmFsdWUpKVxuICAgICk7XG4gIH1cblxuICBnZXQgZXhjbHVkZUJhc2VMYXllcnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJMaXN0Q29udHJvbHMuZXhjbHVkZUJhc2VMYXllcnMgfHwgZmFsc2U7XG4gIH1cblxuICBnZXQgbGF5ZXJGaWx0ZXJBbmRTb3J0T3B0aW9ucygpOiBMYXllckxpc3RDb250cm9sc09wdGlvbnMge1xuICAgIGNvbnN0IGZpbHRlclNvcnRPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgc2hvd1Rvb2xiYXI6IExheWVyTGlzdENvbnRyb2xzRW51bS5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgdGhpcy5sYXllckxpc3RDb250cm9sc1xuICAgICk7XG5cbiAgICBzd2l0Y2ggKHRoaXMubGF5ZXJMaXN0Q29udHJvbHMuc2hvd1Rvb2xiYXIpIHtcbiAgICAgIGNhc2UgTGF5ZXJMaXN0Q29udHJvbHNFbnVtLmFsd2F5czpcbiAgICAgICAgZmlsdGVyU29ydE9wdGlvbnMuc2hvd1Rvb2xiYXIgPSBMYXllckxpc3RDb250cm9sc0VudW0uYWx3YXlzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGF5ZXJMaXN0Q29udHJvbHNFbnVtLm5ldmVyOlxuICAgICAgICBmaWx0ZXJTb3J0T3B0aW9ucy5zaG93VG9vbGJhciA9IExheWVyTGlzdENvbnRyb2xzRW51bS5uZXZlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlclNvcnRPcHRpb25zO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgndGFiR3JvdXAnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJHcm91cDtcblxuICBnZXQgc2VhcmNoVG9vbEluVG9vbGJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy50b29sU3RhdGUudG9vbGJveC5nZXRUb29sYmFyKCkuaW5kZXhPZignc2VhcmNoUmVzdWx0cycpICE9PSAtMSAmJlxuICAgICAgdGhpcy5zZWFyY2hTb3VyY2VTZXJ2aWNlXG4gICAgICAgIC5nZXRTb3VyY2VzKClcbiAgICAgICAgLmZpbHRlcihzb3VyY2VDYW5TZWFyY2gpXG4gICAgICAgIC5maWx0ZXIoKHMpID0+IHMuYXZhaWxhYmxlICYmIHMuZ2V0VHlwZSgpID09PSAnTGF5ZXInKS5sZW5ndGggPiAwXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjYXRhbG9nVG9vbEluVG9vbGJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b29sU3RhdGUudG9vbGJveC5nZXRUb29sYmFyKCkuaW5kZXhPZignY2F0YWxvZycpICE9PSAtMTtcbiAgfVxuXG4gIGdldCBjb250ZXh0VG9vbEluVG9vbGJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b29sU3RhdGUudG9vbGJveC5nZXRUb29sYmFyKCkuaW5kZXhPZignY29udGV4dE1hbmFnZXInKSAhPT0gLTE7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbGF5ZXJMaXN0VG9vbFN0YXRlOiBMYXllckxpc3RUb29sU3RhdGUsXG4gICAgcHJpdmF0ZSB0b29sU3RhdGU6IFRvb2xTdGF0ZSxcbiAgICBwdWJsaWMgbWFwU3RhdGU6IE1hcFN0YXRlLFxuICAgIHByaXZhdGUgc2VhcmNoU291cmNlU2VydmljZTogU2VhcmNoU291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIGltcG9ydEV4cG9ydFN0YXRlOiBJbXBvcnRFeHBvcnRTdGF0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZFRhYigpO1xuICAgIHRoaXMucmVzb2x1dGlvbiQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLm1hcC5sYXllcnMkLFxuICAgICAgdGhpcy5tYXAudmlld0NvbnRyb2xsZXIucmVzb2x1dGlvbiRcbiAgICBdKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwKSlcbiAgICAgIC5zdWJzY3JpYmUoKGJ1bmNoOiBbTGF5ZXJbXSwgbnVtYmVyXSkgPT4ge1xuICAgICAgICB0aGlzLmxheWVycyQubmV4dChcbiAgICAgICAgICBidW5jaFswXS5maWx0ZXIoXG4gICAgICAgICAgICAobGF5ZXIpID0+XG4gICAgICAgICAgICAgIGxheWVyLnNob3dJbkxheWVyTGlzdCAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgKCF0aGlzLmV4Y2x1ZGVCYXNlTGF5ZXJzIHx8ICFsYXllci5iYXNlTGF5ZXIpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5hbGxvd1Nob3dBbGxMZWdlbmRzKSB7XG4gICAgICB0aGlzLm1hcFN0YXRlLnNob3dBbGxMZWdlbmRzVmFsdWUgPVxuICAgICAgICB0aGlzLm1hcFN0YXRlLnNob3dBbGxMZWdlbmRzVmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gdGhpcy5tYXBTdGF0ZS5zaG93QWxsTGVnZW5kc1ZhbHVlXG4gICAgICAgICAgOiB0aGlzLnNob3dBbGxMZWdlbmRzVmFsdWUgfHwgZmFsc2U7XG4gICAgICB0aGlzLnNob3dBbGxMZWdlbmRzVmFsdWUkLm5leHQodGhpcy5tYXBTdGF0ZS5zaG93QWxsTGVnZW5kc1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93QWxsTGVnZW5kc1ZhbHVlJC5uZXh0KGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyBwcmV2ZW50IG1lc3NhZ2UgdG8gYmUgc2hvd24gdG9vIHF1aWNrbHkuIFdhaXRpbmcgZm9yIGxheWVyc1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuZGVsYXllZFNob3dFbXB0eU1hcENvbnRlbnQgPSB0cnVlKSwgMjUwKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVzb2x1dGlvbiQkLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMudmlzaWJsZU9ySW5SYW5nZUxheWVycyQkKSB7XG4gICAgICB0aGlzLnZpc2libGVPckluUmFuZ2VMYXllcnMkJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2hvd0FsbExlZ2VuZHMoZXZlbnQpIHtcbiAgICB0aGlzLm1hcFN0YXRlLnNob3dBbGxMZWdlbmRzVmFsdWUgPSBldmVudDtcbiAgICB0aGlzLnNob3dBbGxMZWdlbmRzVmFsdWUkLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RlZFRhYigpIHtcbiAgICBjb25zdCB1c2VyU2VsZWN0ZWRUYWIgPSB0aGlzLmxheWVyTGlzdFRvb2xTdGF0ZS5zZWxlY3RlZFRhYiQudmFsdWU7XG4gICAgaWYgKHVzZXJTZWxlY3RlZFRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxheWVyTGlzdFRvb2xTdGF0ZS5zZXRTZWxlY3RlZFRhYih1c2VyU2VsZWN0ZWRUYWIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFRhYkF0T3BlbmluZyA9PT0gJ2xlZ2VuZCcpIHtcbiAgICAgICAgdGhpcy5sYXllckxpc3RUb29sU3RhdGUuc2V0U2VsZWN0ZWRUYWIoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxheWVyTGlzdFRvb2xTdGF0ZS5zZXRTZWxlY3RlZFRhYigwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdGFiQ2hhbmdlZCh0YWI6IE1hdFRhYkNoYW5nZUV2ZW50KSB7XG4gICAgdGhpcy5sYXllckxpc3RUb29sU3RhdGUuc2V0U2VsZWN0ZWRUYWIodGFiLmluZGV4KTtcbiAgICB0aGlzLmxheWVycyQubmV4dChcbiAgICAgIHRoaXMubWFwLmxheWVycy5maWx0ZXIoXG4gICAgICAgIChsYXllcikgPT5cbiAgICAgICAgICBsYXllci5zaG93SW5MYXllckxpc3QgIT09IGZhbHNlICYmXG4gICAgICAgICAgKCF0aGlzLmV4Y2x1ZGVCYXNlTGF5ZXJzIHx8ICFsYXllci5iYXNlTGF5ZXIpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG9uTGF5ZXJMaXN0Q2hhbmdlKGFwcGxpZWRGaWx0ZXJzOiBMYXllckxpc3RDb250cm9sc09wdGlvbnMpIHtcbiAgICB0aGlzLmxheWVyTGlzdFRvb2xTdGF0ZS5zZXRLZXl3b3JkKGFwcGxpZWRGaWx0ZXJzLmtleXdvcmQpO1xuICAgIHRoaXMubGF5ZXJMaXN0VG9vbFN0YXRlLnNldFNvcnRBbHBoYShhcHBsaWVkRmlsdGVycy5zb3J0QWxwaGEpO1xuICAgIHRoaXMubGF5ZXJMaXN0VG9vbFN0YXRlLnNldE9ubHlWaXNpYmxlKGFwcGxpZWRGaWx0ZXJzLm9ubHlWaXNpYmxlKTtcbiAgfVxuXG4gIHNob3dBbGxMZWdlbmQoKSB7XG4gICAgaWYgKHRoaXMubGF5ZXJzJC5nZXRWYWx1ZSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLmxheWVycyQuZ2V0VmFsdWUoKS5sZW5ndGggIT09IDAgJiZcbiAgICAgIHRoaXMuYWxsb3dTaG93QWxsTGVnZW5kcyA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIGxldCB2aXNpYmxlT3JJblJhbmdlTGF5ZXJzO1xuICAgICAgdGhpcy52aXNpYmxlT3JJblJhbmdlTGF5ZXJzJCQgPSB0aGlzLnZpc2libGVPckluUmFuZ2VMYXllcnMkLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWUubGVuZ3RoID09PSAwXG4gICAgICAgICAgPyAodmlzaWJsZU9ySW5SYW5nZUxheWVycyA9IGZhbHNlKVxuICAgICAgICAgIDogKHZpc2libGVPckluUmFuZ2VMYXllcnMgPSB0cnVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodmlzaWJsZU9ySW5SYW5nZUxheWVycyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFjdGl2YXRlRXhwb3J0KGxheWVyOiBMYXllcikge1xuICAgIGxldCBpZCA9IGxheWVyLmlkO1xuICAgIGlmIChsYXllci5vcHRpb25zLndvcmtzcGFjZT8ud29ya3NwYWNlSWQpIHtcbiAgICAgIGlkID0gbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2Uud29ya3NwYWNlSWQgIT09IGxheWVyLmlkID8gbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2Uud29ya3NwYWNlSWQgOiBsYXllci5pZDtcbiAgICB9XG4gICAgdGhpcy5pbXBvcnRFeHBvcnRTdGF0ZS5zZXRzRXhwb3J0T3B0aW9ucyh7IGxheWVyczogW2lkXSB9IGFzIEV4cG9ydE9wdGlvbnMpO1xuICAgIHRoaXMuaW1wb3J0RXhwb3J0U3RhdGUuc2V0TW9kZShJbXBvcnRFeHBvcnRNb2RlLmV4cG9ydCk7XG4gICAgdGhpcy50b29sU3RhdGUudG9vbGJveC5hY3RpdmF0ZVRvb2woJ2ltcG9ydEV4cG9ydCcpO1xuICB9XG5cbiAgYWN0aXZhdGVUaW1lRmlsdGVyKCkge1xuICAgIHRoaXMudG9vbFN0YXRlLnRvb2xib3guYWN0aXZhdGVUb29sKCdhY3RpdmVUaW1lRmlsdGVyJyk7XG4gIH1cblxuICBhY3RpdmF0ZU9nY0ZpbHRlcigpIHtcbiAgICB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmFjdGl2YXRlVG9vbCgnYWN0aXZlT2djRmlsdGVyJyk7XG4gIH1cblxuICBzZWFyY2hFbWl0KCkge1xuICAgIHRoaXMudG9vbFN0YXRlLnRvb2xib3guYWN0aXZhdGVUb29sKCdzZWFyY2hSZXN1bHRzJyk7XG4gIH1cblxuICBjYXRhbG9nRW1pdCgpIHtcbiAgICB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmFjdGl2YXRlVG9vbCgnY2F0YWxvZycpO1xuICB9XG5cbiAgY29udGV4dEVtaXQoKSB7XG4gICAgdGhpcy50b29sU3RhdGUudG9vbGJveC5hY3RpdmF0ZVRvb2woJ2NvbnRleHRNYW5hZ2VyJyk7XG4gIH1cblxuICBpc1RpbWVGaWx0ZXJCdXR0b24obGF5ZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBvcHRpb25zID0gbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zO1xuICAgIHJldHVybiB0aGlzLnRpbWVCdXR0b24gJiYgb3B0aW9ucy50aW1lRmlsdGVyYWJsZSAmJiBvcHRpb25zLnRpbWVGaWx0ZXI7XG4gIH1cblxuICBpc09HQ0ZpbHRlckJ1dHRvbihsYXllcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBsYXllci5kYXRhU291cmNlLm9wdGlvbnM7XG4gICAgcmV0dXJuIHRoaXMub2djQnV0dG9uICYmIG9wdGlvbnMub2djRmlsdGVycyAmJiBvcHRpb25zLm9nY0ZpbHRlcnMuZW5hYmxlZCAmJlxuICAgIChvcHRpb25zLm9nY0ZpbHRlcnMucHVzaEJ1dHRvbnMgfHwgb3B0aW9ucy5vZ2NGaWx0ZXJzLmNoZWNrYm94ZXMgfHwgb3B0aW9ucy5vZ2NGaWx0ZXJzLnJhZGlvQnV0dG9uc1xuICAgICAgfHwgb3B0aW9ucy5vZ2NGaWx0ZXJzLnNlbGVjdCB8fCBvcHRpb25zLm9nY0ZpbHRlcnMuZWRpdGFibGUpO1xuICB9XG5cbiAgaXNFeHBvcnRCdXR0b24obGF5ZXI6IExheWVyKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgKGxheWVyIGluc3RhbmNlb2YgVmVjdG9yTGF5ZXIgJiYgbGF5ZXIuZXhwb3J0YWJsZSA9PT0gdHJ1ZSkgfHxcbiAgICAgIChsYXllci5kYXRhU291cmNlLm9wdGlvbnMuZG93bmxvYWQgJiYgbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmRvd25sb2FkLnVybCkgfHxcbiAgICAgIChsYXllci5vcHRpb25zLndvcmtzcGFjZT8uZW5hYmxlZCAmJiBsYXllci5vcHRpb25zLndvcmtzcGFjZT8ud29ya3NwYWNlSWQgIT09IGxheWVyLmlkKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIjxtYXQtdGFiLWdyb3VwXG4gICN0YWJHcm91cFxuICBbc2VsZWN0ZWRJbmRleF09XCJsYXllckxpc3RUb29sU3RhdGUuc2VsZWN0ZWRUYWIkIHwgYXN5bmNcIlxuICAoc2VsZWN0ZWRUYWJDaGFuZ2UpPVwidGFiQ2hhbmdlZCgkZXZlbnQpXCI+XG5cbiAgPG1hdC10YWIgW2xhYmVsXT1cIidpZ28uaW50ZWdyYXRpb24udG9vbHMubGF5ZXJzJyB8wqB0cmFuc2xhdGVcIj5cbiAgICA8aWdvLWxheWVyLWxpc3QgKm5nSWY9XCIobGF5ZXJzJCB8IGFzeW5jKS5sZW5ndGggIT09IDA7IGVsc2UgZW1wdHlMYXllcnNcIlxuICAgICAgaWdvTGF5ZXJMaXN0QmluZGluZ1xuICAgICAgW2V4Y2x1ZGVCYXNlTGF5ZXJzXT1cImV4Y2x1ZGVCYXNlTGF5ZXJzXCJcbiAgICAgIFtsYXllckZpbHRlckFuZFNvcnRPcHRpb25zXT1cImxheWVyRmlsdGVyQW5kU29ydE9wdGlvbnNcIlxuICAgICAgW2V4cGFuZExlZ2VuZE9mVmlzaWJsZUxheWVyc109XCJleHBhbmRMZWdlbmRPZlZpc2libGVMYXllcnNcIlxuICAgICAgW3RvZ2dsZUxlZ2VuZE9uVmlzaWJpbGl0eUNoYW5nZV09XCJ0b2dnbGVMZWdlbmRPblZpc2liaWxpdHlDaGFuZ2VcIlxuICAgICAgW3VwZGF0ZUxlZ2VuZE9uUmVzb2x1dGlvbkNoYW5nZV09XCJ1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2VcIlxuICAgICAgW2Zsb2F0TGFiZWxdPVwiZmFsc2VcIlxuICAgICAgW3F1ZXJ5QmFkZ2VdPVwicXVlcnlCYWRnZVwiXG4gICAgICBbbWFwXT1cIm1hcFwiXG4gICAgICAoYXBwbGllZEZpbHRlckFuZFNvcnQpPSBvbkxheWVyTGlzdENoYW5nZSgkZXZlbnQpPlxuXG4gICAgICA8bmctdGVtcGxhdGUgI2lnb0xheWVySXRlbVRvb2xiYXIgbGV0LWxheWVyPVwibGF5ZXJcIj5cbiAgICAgICAgPGlnby1tZXRhZGF0YS1idXR0b24gW2xheWVyXT1cImxheWVyXCI+PC9pZ28tbWV0YWRhdGEtYnV0dG9uPlxuICAgICAgICA8aWdvLXRyYWNrLWZlYXR1cmUtYnV0dG9uIFt0cmFja0ZlYXR1cmVdPVwidHJ1ZVwiIFtsYXllcl09XCJsYXllclwiPjwvaWdvLXRyYWNrLWZlYXR1cmUtYnV0dG9uPlxuICAgICAgICA8aWdvLXRpbWUtZmlsdGVyLWJ1dHRvbiAqbmdJZj1cImlzVGltZUZpbHRlckJ1dHRvbihsYXllcilcIiBbaGVhZGVyXT1cInRpbWVCdXR0b25cIiBbbGF5ZXJdPVwibGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWN0aXZhdGVUaW1lRmlsdGVyKClcIj48L2lnby10aW1lLWZpbHRlci1idXR0b24+XG4gICAgICAgIDxpZ28tb2djLWZpbHRlci1idXR0b24gKm5nSWY9XCJpc09HQ0ZpbHRlckJ1dHRvbihsYXllcilcIiBbaGVhZGVyXT1cIm9nY0J1dHRvblwiIFtsYXllcl09XCJsYXllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhY3RpdmF0ZU9nY0ZpbHRlcigpXCI+PC9pZ28tb2djLWZpbHRlci1idXR0b24+XG4gICAgICAgIDxpZ28tZXhwb3J0LWJ1dHRvbiAqbmdJZj1cImlzRXhwb3J0QnV0dG9uKGxheWVyKVwiIFtsYXllcl09XCJsYXllclwiIChjbGljayk9XCJhY3RpdmF0ZUV4cG9ydChsYXllcilcIj48L2lnby1leHBvcnQtYnV0dG9uPlxuICAgICAgICA8aWdvLXdvcmtzcGFjZS1idXR0b24gW2xheWVyXT1cImxheWVyXCI+PC9pZ28td29ya3NwYWNlLWJ1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9pZ28tbGF5ZXItbGlzdD5cbiAgPC9tYXQtdGFiPlxuXG4gIDxtYXQtdGFiIFtsYWJlbF09XCInaWdvLmludGVncmF0aW9uLnRvb2xzLmxlZ2VuZCcgfMKgdHJhbnNsYXRlXCI+XG4gICAgPGlnby1sYXllci1sZWdlbmQtbGlzdCAqbmdJZj1cInNob3dBbGxMZWdlbmQoKVwiXG4gICAgICBpZ29MYXllckxlZ2VuZExpc3RCaW5kaW5nXG4gICAgICBbYWxsb3dTaG93QWxsTGVnZW5kc109XCJhbGxvd1Nob3dBbGxMZWdlbmRzXCJcbiAgICAgIFtzaG93QWxsTGVnZW5kc1ZhbHVlXT1cIihzaG93QWxsTGVnZW5kc1ZhbHVlJCB8IGFzeW5jKVwiXG4gICAgICAoYWxsTGVnZW5kc1Nob3duKT1cIm9uU2hvd0FsbExlZ2VuZHMoJGV2ZW50KVwiXG4gICAgICBbZXhjbHVkZUJhc2VMYXllcnNdPVwiZXhjbHVkZUJhc2VMYXllcnNcIlxuICAgICAgW3VwZGF0ZUxlZ2VuZE9uUmVzb2x1dGlvbkNoYW5nZV09XCJ1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2VcIj5cbiAgICA8L2lnby1sYXllci1sZWdlbmQtbGlzdD5cbiAgICA8bmctdGVtcGxhdGUgKm5nSWY9XCIobGF5ZXJzJCB8IGFzeW5jKS5sZW5ndGggIT09IDA7IGVsc2UgZW1wdHlMYXllcnNcIj48L25nLXRlbXBsYXRlPlxuXG4gICAgPHAgY2xhc3M9XCJtYXAtZW1wdHkgbWF0LXR5cG9ncmFwaHlcIlxuICAgICAgKm5nSWY9XCIhYWxsb3dTaG93QWxsTGVnZW5kcyAmJiAobGF5ZXJzJCB8IGFzeW5jKS5sZW5ndGggIT09IDAgJiYgKHZpc2libGVPckluUmFuZ2VMYXllcnMkIHwgYXN5bmMpLmxlbmd0aCA9PT0gMFwiPlxuICAgICAge3sgKCh2aXNpYmxlTGF5ZXJzJCB8IGFzeW5jKS5sZW5ndGgpID8gKCdpZ28uaW50ZWdyYXRpb24ubWFwVG9vbC5ub0xheWVyc0luUmFuZ2UnIHwgdHJhbnNsYXRlKSA6ICAoJ2lnby5pbnRlZ3JhdGlvbi5tYXBUb29sLm5vTGF5ZXJzVmlzaWJsZScgfCB0cmFuc2xhdGUpIH19XG4gICAgPC9wPlxuICA8L21hdC10YWI+XG5cbiAgICA8bmctdGVtcGxhdGUgI2VtcHR5TGF5ZXJzPlxuICAgICAgPG1hdC1saXN0ICpuZ0lmPVwiZGVsYXllZFNob3dFbXB0eU1hcENvbnRlbnRcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJtYXAtZW1wdHkgbWF0LXR5cG9ncmFwaHlcIj5cbiAgICAgICAgICB7eydpZ28uaW50ZWdyYXRpb24ubWFwVG9vbC5lbXB0eScgfCB0cmFuc2xhdGV9fTwvcD5cbiAgICAgICAgPHAgKm5nSWY9XCJsYXllckFkZGl0aW9uQWxsb3dlZCAmJiAoc2VhcmNoVG9vbEluVG9vbGJhciB8fCBjYXRhbG9nVG9vbEluVG9vbGJhciB8fCBjb250ZXh0VG9vbEluVG9vbGJhcilcIlxuICAgICAgICAgIGNsYXNzPVwibWFwLWVtcHR5IG1hdC10eXBvZ3JhcGh5XCI+XG4gICAgICAgICAge3snaWdvLmludGVncmF0aW9uLm1hcFRvb2wuY3VzdG9taXplJyB8IHRyYW5zbGF0ZX19PC9wPlxuXG4gICAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0lmPVwibGF5ZXJBZGRpdGlvbkFsbG93ZWQgJiYgc2VhcmNoVG9vbEluVG9vbGJhclwiPlxuICAgICAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPiA8c3ZnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZml0PScnIGhlaWdodD0nMTAwJScgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaWRZTWlkIG1lZXQnIGZvY3VzYWJsZT0nZmFsc2UnPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J005LjUsM0E2LjUsNi41IDAgMCwxIDE2LDkuNUMxNiwxMS4xMSAxNS40MSwxMi41OSAxNC40NCwxMy43M0wxNC43MSwxNEgxNS41TDIwLjUsMTlMMTksMjAuNUwxNCwxNS41VjE0LjcxTDEzLjczLDE0LjQ0QzEyLjU5LDE1LjQxIDExLjExLDE2IDkuNSwxNkE2LjUsNi41IDAgMCwxIDMsOS41QTYuNSw2LjUgMCAwLDEgOS41LDNNOS41LDVDNyw1IDUsNyA1LDkuNUM1LDEyIDcsMTQgOS41LDE0QzEyLDE0IDE0LDEyIDE0LDkuNUMxNCw3IDEyLDUgOS41LDVaJz5cbiAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+PC9tYXQtaWNvbj5cbiAgICAgICAgICA8aDQgbWF0TGluZSBjbGFzcz1cInNlYXJjaC10b29sIG1hdC10eXBvZ3JhcGh5XCIgKGNsaWNrKT1cInNlYXJjaEVtaXQoKVwiPlxuICAgICAgICAgICAge3snaWdvLmludGVncmF0aW9uLm1hcFRvb2wuc2VhcmNoLXRvb2wnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0lmPVwibGF5ZXJBZGRpdGlvbkFsbG93ZWQgJiYgY2F0YWxvZ1Rvb2xJblRvb2xiYXJcIj5cbiAgICAgICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj4gPHN2ZyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJ1xuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyBmb2N1c2FibGU9J2ZhbHNlJz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPSdNMTcsMTRIMTlWMTdIMjJWMTlIMTlWMjJIMTdWMTlIMTRWMTdIMTdWMTRNMTEsMTZMMiw5TDExLDJMMjAsOUwxMSwxNk0xMSwxOC41NEwxMiwxNy43NVYxOEMxMiwxOC43MSAxMi4xMiwxOS4zOSAxMi4zNSwyMEwxMSwyMS4wN0wyLDE0LjA3TDMuNjIsMTIuODFMMTEsMTguNTRaJz5cbiAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+PC9tYXQtaWNvbj5cbiAgICAgICAgICA8aDQgbWF0TGluZSBjbGFzcz1cImNhdGFsb2ctdG9vbCBtYXQtdHlwb2dyYXBoeVwiIChjbGljayk9XCJjYXRhbG9nRW1pdCgpXCI+XG4gICAgICAgICAgICB7eydpZ28uaW50ZWdyYXRpb24ubWFwVG9vbC5jYXRhbG9nLXRvb2wnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0lmPVwibGF5ZXJBZGRpdGlvbkFsbG93ZWQgJiYgY29udGV4dFRvb2xJblRvb2xiYXJcIj5cbiAgICAgICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj4gPHN2ZyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJ1xuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyBmb2N1c2FibGU9J2ZhbHNlJz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPSdNMTIsMTcuMjdMMTguMTgsMjFMMTYuNTQsMTMuOTdMMjIsOS4yNEwxNC44MSw4LjYyTDEyLDJMOS4xOSw4LjYyTDIsOS4yNEw3LjQ1LDEzLjk3TDUuODIsMjFMMTIsMTcuMjdaJz5cbiAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+PC9tYXQtaWNvbj5cbiAgICAgICAgICA8aDQgbWF0TGluZSBjbGFzcz1cImNvbnRleHQtdG9vbCBtYXQtdHlwb2dyYXBoeVwiIChjbGljayk9XCJjb250ZXh0RW1pdCgpXCI+XG4gICAgICAgICAgICB7eydpZ28uaW50ZWdyYXRpb24ubWFwVG9vbC5jb250ZXh0LXRvb2wnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICA8L21hdC1saXN0PlxuICAgIDwvbmctdGVtcGxhdGU+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=