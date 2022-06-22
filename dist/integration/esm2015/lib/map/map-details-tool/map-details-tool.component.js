import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { ToolComponent } from '@igo2/common';
import { LayerListControlsEnum, sourceCanSearch } from '@igo2/geo';
import { ImportExportMode } from '../../import-export/import-export.state';
import * as i0 from "@angular/core";
import * as i1 from "./../map.state";
import * as i2 from "./../../tool/tool.state";
import * as i3 from "@igo2/geo";
import * as i4 from "../../import-export/import-export.state";
import * as i5 from "@angular/common";
import * as i6 from "../../workspace/workspace-button/workspace-button.component";
import * as i7 from "@angular/material/list";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/core";
import * as i10 from "@ngx-translate/core";
function MapDetailsToolComponent_igo_layer_list_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "igo-workspace-button", 4);
    i0.ɵɵelementStart(1, "igo-export-button", 5);
    i0.ɵɵlistener("click", function MapDetailsToolComponent_igo_layer_list_0_ng_template_1_Template_igo_export_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const layer_r5 = restoredCtx.layer; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.activateExport(layer_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "igo-ogc-filter-button", 6);
    i0.ɵɵelement(3, "igo-time-filter-button", 6);
    i0.ɵɵelement(4, "igo-track-feature-button", 7);
    i0.ɵɵelement(5, "igo-metadata-button", 4);
} if (rf & 2) {
    const layer_r5 = ctx.layer;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("layer", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("header", ctx_r4.ogcButton)("layer", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("header", ctx_r4.timeButton)("layer", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("trackFeature", true)("layer", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", layer_r5);
} }
function MapDetailsToolComponent_igo_layer_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "igo-layer-list", 2);
    i0.ɵɵtemplate(1, MapDetailsToolComponent_igo_layer_list_0_ng_template_1_Template, 6, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("map", ctx_r0.map)("excludeBaseLayers", ctx_r0.excludeBaseLayers)("layerFilterAndSortOptions", ctx_r0.layerFilterAndSortOptions)("expandLegendOfVisibleLayers", ctx_r0.expandLegendOfVisibleLayers)("toggleLegendOnVisibilityChange", ctx_r0.toggleLegendOnVisibilityChange)("updateLegendOnResolutionChange", ctx_r0.updateLegendOnResolutionChange)("queryBadge", ctx_r0.queryBadge);
} }
function MapDetailsToolComponent_ng_template_2_mat_list_0_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.integration.mapTool.customize"), "");
} }
function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 12);
    i0.ɵɵelement(3, "path", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 14);
    i0.ɵɵlistener("click", function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_5_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.searchEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.search-tool"), " ");
} }
function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 12);
    i0.ɵɵelement(3, "path", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 16);
    i0.ɵɵlistener("click", function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_6_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.catalogEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.catalog-tool"), " ");
} }
function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 12);
    i0.ɵɵelement(3, "path", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 18);
    i0.ɵɵlistener("click", function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_7_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.contextEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.context-tool"), " ");
} }
function MapDetailsToolComponent_ng_template_2_mat_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵelementStart(1, "p", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MapDetailsToolComponent_ng_template_2_mat_list_0_p_4_Template, 3, 3, "p", 10);
    i0.ɵɵtemplate(5, MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_5_Template, 7, 3, "mat-list-item", 8);
    i0.ɵɵtemplate(6, MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_6_Template, 7, 3, "mat-list-item", 8);
    i0.ɵɵtemplate(7, MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_7_Template, 7, 3, "mat-list-item", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "igo.integration.mapTool.empty"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && (ctx_r8.searchToolInToolbar || ctx_r8.catalogToolInToolbar || ctx_r8.contextToolInToolbar));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.searchToolInToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.catalogToolInToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.contextToolInToolbar);
} }
function MapDetailsToolComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MapDetailsToolComponent_ng_template_2_mat_list_0_Template, 8, 7, "mat-list", 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2.delayedShowEmptyMapContent);
} }
let MapDetailsToolComponent = class MapDetailsToolComponent {
    constructor(mapState, toolState, searchSourceService, cdRef, importExportState) {
        this.mapState = mapState;
        this.toolState = toolState;
        this.searchSourceService = searchSourceService;
        this.cdRef = cdRef;
        this.importExportState = importExportState;
        this.delayedShowEmptyMapContent = false;
        this.toggleLegendOnVisibilityChange = false;
        this.expandLegendOfVisibleLayers = false;
        this.updateLegendOnResolutionChange = false;
        this.ogcButton = true;
        this.timeButton = true;
        this.layerListControls = {};
        this.queryBadge = false;
        this.layerAdditionAllowed = true;
    }
    get map() {
        return this.mapState.map;
    }
    get layers$() {
        return this.map.layers$.pipe(map((layers) => layers.filter((layer) => layer.showInLayerList !== false &&
            (!this.excludeBaseLayers || !layer.baseLayer))));
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
        // prevent message to be shown too quickly. Waiting for layers
        setTimeout(() => {
            this.delayedShowEmptyMapContent = true;
            this.cdRef.detectChanges();
        }, 250);
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
};
MapDetailsToolComponent.ɵfac = function MapDetailsToolComponent_Factory(t) { return new (t || MapDetailsToolComponent)(i0.ɵɵdirectiveInject(i1.MapState), i0.ɵɵdirectiveInject(i2.ToolState), i0.ɵɵdirectiveInject(i3.SearchSourceService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i4.ImportExportState)); };
MapDetailsToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapDetailsToolComponent, selectors: [["igo-map-details-tool"]], inputs: { toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendOfVisibleLayers: "expandLegendOfVisibleLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", ogcButton: "ogcButton", timeButton: "timeButton", layerListControls: "layerListControls", queryBadge: "queryBadge", layerAdditionAllowed: "layerAdditionAllowed" }, decls: 4, vars: 4, consts: [["class", "mapDetailsList", "igoLayerListBinding", "", "floatLabel", "never", 3, "map", "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "queryBadge", 4, "ngIf", "ngIfElse"], ["empty", ""], ["igoLayerListBinding", "", "floatLabel", "never", 1, "mapDetailsList", 3, "map", "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "queryBadge"], ["igoLayerItemToolbar", ""], [3, "layer"], [3, "layer", "click"], [3, "header", "layer"], [3, "trackFeature", "layer"], [4, "ngIf"], [1, "map-empty", "mat-typography"], ["class", "map-empty mat-typography", 4, "ngIf"], ["mat-list-icon", ""], ["viewBox", "0 0 24 24", "fit", "", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["d", "M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["d", "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function MapDetailsToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MapDetailsToolComponent_igo_layer_list_0_Template, 3, 7, "igo-layer-list", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, MapDetailsToolComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.layers$).length)("ngIfElse", _r1);
    } }, directives: [i5.NgIf, i3.LayerListComponent, i3.LayerListBindingDirective, i6.WorkspaceButtonComponent, i3.ExportButtonComponent, i3.OgcFilterButtonComponent, i3.TimeFilterButtonComponent, i3.TrackFeatureButtonComponent, i3.MetadataButtonComponent, i7.MatList, i7.MatListItem, i8.MatIcon, i7.MatListIconCssMatStyler, i9.MatLine], pipes: [i5.AsyncPipe, i10.TranslatePipe], styles: [".map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:10px}.map-empty[_ngcontent-%COMP%]{text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:5px}.mapDetailsList[_ngcontent-%COMP%]{overflow:hidden}"] });
MapDetailsToolComponent = __decorate([
    ToolComponent({
        name: 'mapDetails',
        title: 'igo.integration.tools.map',
        icon: 'map'
    })
], MapDetailsToolComponent);
export { MapDetailsToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapDetailsToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-map-details-tool',
                templateUrl: './map-details-tool.component.html',
                styleUrls: ['./map-details-tool.component.scss']
            }]
    }], function () { return [{ type: i1.MapState }, { type: i2.ToolState }, { type: i3.SearchSourceService }, { type: i0.ChangeDetectorRef }, { type: i4.ImportExportState }]; }, { toggleLegendOnVisibilityChange: [{
            type: Input
        }], expandLegendOfVisibleLayers: [{
            type: Input
        }], updateLegendOnResolutionChange: [{
            type: Input
        }], ogcButton: [{
            type: Input
        }], timeButton: [{
            type: Input
        }], layerListControls: [{
            type: Input
        }], queryBadge: [{
            type: Input
        }], layerAdditionAllowed: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWRldGFpbHMtdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL21hcC9tYXAtZGV0YWlscy10b29sL21hcC1kZXRhaWxzLXRvb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvbWFwLWRldGFpbHMtdG9vbC9tYXAtZGV0YWlscy10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNkIsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUNMLHFCQUFxQixFQUtyQixlQUFlLEVBRWhCLE1BQU0sV0FBVyxDQUFDO0FBSW5CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBcUIsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNKekYsMENBQTZEO0lBQzlELDRDQUFtRTtJQUFoQyxvU0FBK0I7SUFBQyxpQkFBb0I7SUFDdkYsMkNBQW9GO0lBQ3BGLDRDQUF1RjtJQUN2Riw4Q0FBMkY7SUFDM0YseUNBQTJEOzs7O0lBTHBDLGdDQUFlO0lBQ25CLGVBQWU7SUFBZixnQ0FBZTtJQUNYLGVBQW9CO0lBQXBCLHlDQUFvQixtQkFBQTtJQUNuQixlQUFxQjtJQUFyQiwwQ0FBcUIsbUJBQUE7SUFDbkIsZUFBcUI7SUFBckIsbUNBQXFCLG1CQUFBO0lBQzFCLGVBQWU7SUFBZixnQ0FBZTs7O0lBbEJ4Qyx5Q0FTNEI7SUFFMUIsMElBUWM7SUFFaEIsaUJBQWlCOzs7SUFwQmYsZ0NBQVcsK0NBQUEsK0RBQUEsbUVBQUEseUVBQUEseUVBQUEsaUNBQUE7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LENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRixDQUFBOzhGQW5IWSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQzdCcEMsOEZBcUJpQjs7UUFFakIseUhBeUJjOzs7UUFoRDBCLCtEQUFnQyxpQkFBQTs7QUQ2QjNELHVCQUF1QjtJQVZuQyxhQUFhLENBQUM7UUFDYixJQUFJLEVBQUUsWUFBWTtRQUNsQixLQUFLLEVBQUUsMkJBQTJCO1FBQ2xDLElBQUksRUFBRSxLQUFLO0tBQ1osQ0FBQztHQU1XLHVCQUF1QixDQW1IbkM7U0FuSFksdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEO3FMQUlVLDhCQUE4QjtrQkFBdEMsS0FBSztZQUVHLDJCQUEyQjtrQkFBbkMsS0FBSztZQUVHLDhCQUE4QjtrQkFBdEMsS0FBSztZQUVHLFNBQVM7a0JBQWpCLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLO1lBRUcsaUJBQWlCO2tCQUF6QixLQUFLO1lBRUcsVUFBVTtrQkFBbEIsS0FBSztZQUVHLG9CQUFvQjtrQkFBNUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQge1xuICBMYXllckxpc3RDb250cm9sc0VudW0sXG4gIExheWVyLFxuICBJZ29NYXAsXG4gIExheWVyTGlzdENvbnRyb2xzT3B0aW9ucyxcbiAgU2VhcmNoU291cmNlU2VydmljZSxcbiAgc291cmNlQ2FuU2VhcmNoLFxuICBFeHBvcnRPcHRpb25zXG59IGZyb20gJ0BpZ28yL2dlbyc7XG5cbmltcG9ydCB7IFRvb2xTdGF0ZSB9IGZyb20gJy4vLi4vLi4vdG9vbC90b29sLnN0YXRlJztcbmltcG9ydCB7IE1hcFN0YXRlIH0gZnJvbSAnLi8uLi9tYXAuc3RhdGUnO1xuaW1wb3J0IHsgSW1wb3J0RXhwb3J0TW9kZSwgSW1wb3J0RXhwb3J0U3RhdGUgfSBmcm9tICcuLi8uLi9pbXBvcnQtZXhwb3J0L2ltcG9ydC1leHBvcnQuc3RhdGUnO1xuXG5AVG9vbENvbXBvbmVudCh7XG4gIG5hbWU6ICdtYXBEZXRhaWxzJyxcbiAgdGl0bGU6ICdpZ28uaW50ZWdyYXRpb24udG9vbHMubWFwJyxcbiAgaWNvbjogJ21hcCdcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tbWFwLWRldGFpbHMtdG9vbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAtZGV0YWlscy10b29sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFwLWRldGFpbHMtdG9vbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hcERldGFpbHNUb29sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGRlbGF5ZWRTaG93RW1wdHlNYXBDb250ZW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdG9nZ2xlTGVnZW5kT25WaXNpYmlsaXR5Q2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZXhwYW5kTGVnZW5kT2ZWaXNpYmxlTGF5ZXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdXBkYXRlTGVnZW5kT25SZXNvbHV0aW9uQ2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgb2djQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSB0aW1lQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSBsYXllckxpc3RDb250cm9sczogTGF5ZXJMaXN0Q29udHJvbHNPcHRpb25zID0ge307XG5cbiAgQElucHV0KCkgcXVlcnlCYWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGxheWVyQWRkaXRpb25BbGxvd2VkOiBib29sZWFuID0gdHJ1ZTtcblxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMubWFwU3RhdGUubWFwO1xuICB9XG5cbiAgZ2V0IGxheWVycyQoKTogT2JzZXJ2YWJsZTxMYXllcltdPiB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmxheWVycyQucGlwZShcbiAgICAgIG1hcCgobGF5ZXJzKSA9PlxuICAgICAgICBsYXllcnMuZmlsdGVyKFxuICAgICAgICAgIChsYXllcikgPT5cbiAgICAgICAgICAgIGxheWVyLnNob3dJbkxheWVyTGlzdCAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgICghdGhpcy5leGNsdWRlQmFzZUxheWVycyB8fCAhbGF5ZXIuYmFzZUxheWVyKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldCBleGNsdWRlQmFzZUxheWVycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sYXllckxpc3RDb250cm9scy5leGNsdWRlQmFzZUxheWVycyB8fCBmYWxzZTtcbiAgfVxuXG4gIGdldCBsYXllckZpbHRlckFuZFNvcnRPcHRpb25zKCk6IGFueSB7XG4gICAgY29uc3QgZmlsdGVyU29ydE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBzaG93VG9vbGJhcjogTGF5ZXJMaXN0Q29udHJvbHNFbnVtLmRlZmF1bHRcbiAgICAgIH0sXG4gICAgICB0aGlzLmxheWVyTGlzdENvbnRyb2xzXG4gICAgKTtcblxuICAgIHN3aXRjaCAodGhpcy5sYXllckxpc3RDb250cm9scy5zaG93VG9vbGJhcikge1xuICAgICAgY2FzZSBMYXllckxpc3RDb250cm9sc0VudW0uYWx3YXlzOlxuICAgICAgICBmaWx0ZXJTb3J0T3B0aW9ucy5zaG93VG9vbGJhciA9IExheWVyTGlzdENvbnRyb2xzRW51bS5hbHdheXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMYXllckxpc3RDb250cm9sc0VudW0ubmV2ZXI6XG4gICAgICAgIGZpbHRlclNvcnRPcHRpb25zLnNob3dUb29sYmFyID0gTGF5ZXJMaXN0Q29udHJvbHNFbnVtLm5ldmVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyU29ydE9wdGlvbnM7XG4gIH1cblxuICBnZXQgc2VhcmNoVG9vbEluVG9vbGJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy50b29sU3RhdGUudG9vbGJveC5nZXRUb29sYmFyKCkuaW5kZXhPZignc2VhcmNoUmVzdWx0cycpICE9PSAtMSAmJlxuICAgICAgdGhpcy5zZWFyY2hTb3VyY2VTZXJ2aWNlXG4gICAgICAgIC5nZXRTb3VyY2VzKClcbiAgICAgICAgLmZpbHRlcihzb3VyY2VDYW5TZWFyY2gpXG4gICAgICAgIC5maWx0ZXIoKHMpID0+IHMuYXZhaWxhYmxlICYmIHMuZ2V0VHlwZSgpID09PSAnTGF5ZXInKS5sZW5ndGggPiAwXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjYXRhbG9nVG9vbEluVG9vbGJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b29sU3RhdGUudG9vbGJveC5nZXRUb29sYmFyKCkuaW5kZXhPZignY2F0YWxvZycpICE9PSAtMTtcbiAgfVxuXG4gIGdldCBjb250ZXh0VG9vbEluVG9vbGJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b29sU3RhdGUudG9vbGJveC5nZXRUb29sYmFyKCkuaW5kZXhPZignY29udGV4dE1hbmFnZXInKSAhPT0gLTE7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1hcFN0YXRlOiBNYXBTdGF0ZSxcbiAgICBwcml2YXRlIHRvb2xTdGF0ZTogVG9vbFN0YXRlLFxuICAgIHByaXZhdGUgc2VhcmNoU291cmNlU2VydmljZTogU2VhcmNoU291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGltcG9ydEV4cG9ydFN0YXRlOiBJbXBvcnRFeHBvcnRTdGF0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gcHJldmVudCBtZXNzYWdlIHRvIGJlIHNob3duIHRvbyBxdWlja2x5LiBXYWl0aW5nIGZvciBsYXllcnNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGVsYXllZFNob3dFbXB0eU1hcENvbnRlbnQgPSB0cnVlO1xuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSwgMjUwKTtcbiAgfVxuXG4gIHNlYXJjaEVtaXQoKSB7XG4gICAgdGhpcy50b29sU3RhdGUudG9vbGJveC5hY3RpdmF0ZVRvb2woJ3NlYXJjaFJlc3VsdHMnKTtcbiAgfVxuXG4gIGNhdGFsb2dFbWl0KCkge1xuICAgIHRoaXMudG9vbFN0YXRlLnRvb2xib3guYWN0aXZhdGVUb29sKCdjYXRhbG9nJyk7XG4gIH1cblxuICBjb250ZXh0RW1pdCgpIHtcbiAgICB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmFjdGl2YXRlVG9vbCgnY29udGV4dE1hbmFnZXInKTtcbiAgfVxuXG4gIGFjdGl2YXRlRXhwb3J0KGxheWVyOiBMYXllcikge1xuICAgIGxldCBpZCA9IGxheWVyLmlkO1xuICAgIGlmIChsYXllci5vcHRpb25zLndvcmtzcGFjZT8ud29ya3NwYWNlSWQpIHtcbiAgICAgIGlkID0gbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2Uud29ya3NwYWNlSWQgIT09IGxheWVyLmlkID8gbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2Uud29ya3NwYWNlSWQgOiBsYXllci5pZDtcbiAgICB9XG4gICAgdGhpcy5pbXBvcnRFeHBvcnRTdGF0ZS5zZXRzRXhwb3J0T3B0aW9ucyh7IGxheWVyczogW2lkXSB9IGFzIEV4cG9ydE9wdGlvbnMpO1xuICAgIHRoaXMuaW1wb3J0RXhwb3J0U3RhdGUuc2V0TW9kZShJbXBvcnRFeHBvcnRNb2RlLmV4cG9ydCk7XG4gICAgdGhpcy50b29sU3RhdGUudG9vbGJveC5hY3RpdmF0ZVRvb2woJ2ltcG9ydEV4cG9ydCcpO1xuICB9XG59XG4iLCI8aWdvLWxheWVyLWxpc3QgY2xhc3M9XCJtYXBEZXRhaWxzTGlzdFwiICpuZ0lmPVwiKGxheWVycyQgfCBhc3luYykubGVuZ3RoOyBlbHNlIGVtcHR5XCJcbiAgW21hcF09XCJtYXBcIlxuICBpZ29MYXllckxpc3RCaW5kaW5nXG4gIFtleGNsdWRlQmFzZUxheWVyc109XCJleGNsdWRlQmFzZUxheWVyc1wiXG4gIFtsYXllckZpbHRlckFuZFNvcnRPcHRpb25zXT1cImxheWVyRmlsdGVyQW5kU29ydE9wdGlvbnNcIlxuICBbZXhwYW5kTGVnZW5kT2ZWaXNpYmxlTGF5ZXJzXT1cImV4cGFuZExlZ2VuZE9mVmlzaWJsZUxheWVyc1wiXG4gIFt0b2dnbGVMZWdlbmRPblZpc2liaWxpdHlDaGFuZ2VdPVwidG9nZ2xlTGVnZW5kT25WaXNpYmlsaXR5Q2hhbmdlXCJcbiAgW3VwZGF0ZUxlZ2VuZE9uUmVzb2x1dGlvbkNoYW5nZV09XCJ1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2VcIlxuICBmbG9hdExhYmVsPVwibmV2ZXJcIlxuICBbcXVlcnlCYWRnZV09XCJxdWVyeUJhZGdlXCI+XG5cbiAgPG5nLXRlbXBsYXRlICNpZ29MYXllckl0ZW1Ub29sYmFyIGxldC1sYXllcj1cImxheWVyXCI+XG4gICAgPCEtLSA8aWdvLWRvd25sb2FkLWJ1dHRvbiBbbGF5ZXJdPVwibGF5ZXJcIj48L2lnby1kb3dubG9hZC1idXR0b24+IC0tPlxuICAgICA8aWdvLXdvcmtzcGFjZS1idXR0b24gW2xheWVyXT1cImxheWVyXCI+PC9pZ28td29ya3NwYWNlLWJ1dHRvbj5cbiAgICA8aWdvLWV4cG9ydC1idXR0b24gW2xheWVyXT1cImxheWVyXCIgKGNsaWNrKT1cImFjdGl2YXRlRXhwb3J0KGxheWVyKVwiPjwvaWdvLWV4cG9ydC1idXR0b24+XG4gICAgPGlnby1vZ2MtZmlsdGVyLWJ1dHRvbiBbaGVhZGVyXT1cIm9nY0J1dHRvblwiIFtsYXllcl09XCJsYXllclwiPjwvaWdvLW9nYy1maWx0ZXItYnV0dG9uPlxuICAgIDxpZ28tdGltZS1maWx0ZXItYnV0dG9uIFtoZWFkZXJdPVwidGltZUJ1dHRvblwiIFtsYXllcl09XCJsYXllclwiPjwvaWdvLXRpbWUtZmlsdGVyLWJ1dHRvbj5cbiAgICA8aWdvLXRyYWNrLWZlYXR1cmUtYnV0dG9uIFt0cmFja0ZlYXR1cmVdPVwidHJ1ZVwiIFtsYXllcl09XCJsYXllclwiPjwvaWdvLXRyYWNrLWZlYXR1cmUtYnV0dG9uPlxuICAgIDxpZ28tbWV0YWRhdGEtYnV0dG9uIFtsYXllcl09XCJsYXllclwiPjwvaWdvLW1ldGFkYXRhLWJ1dHRvbj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuPC9pZ28tbGF5ZXItbGlzdD5cblxuPG5nLXRlbXBsYXRlICNlbXB0eT5cbiAgPG1hdC1saXN0ICpuZ0lmPVwiZGVsYXllZFNob3dFbXB0eU1hcENvbnRlbnRcIj5cbiAgICA8cCBjbGFzcz1cIm1hcC1lbXB0eSBtYXQtdHlwb2dyYXBoeVwiPlxuICAgICAge3snaWdvLmludGVncmF0aW9uLm1hcFRvb2wuZW1wdHknIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgPHAgKm5nSWY9XCJsYXllckFkZGl0aW9uQWxsb3dlZCAmJiAoc2VhcmNoVG9vbEluVG9vbGJhciB8fCBjYXRhbG9nVG9vbEluVG9vbGJhciB8fCBjb250ZXh0VG9vbEluVG9vbGJhcilcIiBjbGFzcz1cIm1hcC1lbXB0eSBtYXQtdHlwb2dyYXBoeVwiPlxuICAgICAge3snaWdvLmludGVncmF0aW9uLm1hcFRvb2wuY3VzdG9taXplJyB8IHRyYW5zbGF0ZX19PC9wPlxuICAgIDxtYXQtbGlzdC1pdGVtICpuZ0lmPVwibGF5ZXJBZGRpdGlvbkFsbG93ZWQgJiYgc2VhcmNoVG9vbEluVG9vbGJhclwiPlxuICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+IDxzdmcgdmlld0JveD0nMCAwIDI0IDI0JyBmaXQ9JycgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pZFlNaWQgbWVldCcgZm9jdXNhYmxlPSdmYWxzZSc+IDxwYXRoIGQ9J005LjUsM0E2LjUsNi41IDAgMCwxIDE2LDkuNUMxNiwxMS4xMSAxNS40MSwxMi41OSAxNC40NCwxMy43M0wxNC43MSwxNEgxNS41TDIwLjUsMTlMMTksMjAuNUwxNCwxNS41VjE0LjcxTDEzLjczLDE0LjQ0QzEyLjU5LDE1LjQxIDExLjExLDE2IDkuNSwxNkE2LjUsNi41IDAgMCwxIDMsOS41QTYuNSw2LjUgMCAwLDEgOS41LDNNOS41LDVDNyw1IDUsNyA1LDkuNUM1LDEyIDcsMTQgOS41LDE0QzEyLDE0IDE0LDEyIDE0LDkuNUMxNCw3IDEyLDUgOS41LDVaJz4gPC9wYXRoPiA8L3N2Zz48L21hdC1pY29uPlxuICAgICAgPGg0IG1hdExpbmUgY2xhc3M9XCJzZWFyY2gtdG9vbCBtYXQtdHlwb2dyYXBoeVwiIChjbGljayk9XCJzZWFyY2hFbWl0KClcIj5cbiAgICAgICAge3snaWdvLmludGVncmF0aW9uLm1hcFRvb2wuc2VhcmNoLXRvb2wnIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvaDQ+XG4gICAgPC9tYXQtbGlzdC1pdGVtPlxuICAgIDxtYXQtbGlzdC1pdGVtICpuZ0lmPVwibGF5ZXJBZGRpdGlvbkFsbG93ZWQgJiYgY2F0YWxvZ1Rvb2xJblRvb2xiYXJcIj5cbiAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPiA8c3ZnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZml0PScnIGhlaWdodD0nMTAwJScgd2lkdGg9JzEwMCUnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaWRZTWlkIG1lZXQnIGZvY3VzYWJsZT0nZmFsc2UnPiA8cGF0aCBkPSdNMTcsMTRIMTlWMTdIMjJWMTlIMTlWMjJIMTdWMTlIMTRWMTdIMTdWMTRNMTEsMTZMMiw5TDExLDJMMjAsOUwxMSwxNk0xMSwxOC41NEwxMiwxNy43NVYxOEMxMiwxOC43MSAxMi4xMiwxOS4zOSAxMi4zNSwyMEwxMSwyMS4wN0wyLDE0LjA3TDMuNjIsMTIuODFMMTEsMTguNTRaJz48L3BhdGg+IDwvc3ZnPjwvbWF0LWljb24+XG4gICAgICA8aDQgbWF0TGluZSBjbGFzcz1cImNhdGFsb2ctdG9vbCBtYXQtdHlwb2dyYXBoeVwiIChjbGljayk9XCJjYXRhbG9nRW1pdCgpXCI+XG4gICAgICAgIHt7J2lnby5pbnRlZ3JhdGlvbi5tYXBUb29sLmNhdGFsb2ctdG9vbCcgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9oND5cbiAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgPG1hdC1saXN0LWl0ZW0gKm5nSWY9XCJsYXllckFkZGl0aW9uQWxsb3dlZCAmJiBjb250ZXh0VG9vbEluVG9vbGJhclwiPlxuICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+IDxzdmcgdmlld0JveD0nMCAwIDI0IDI0JyBmaXQ9JycgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pZFlNaWQgbWVldCcgZm9jdXNhYmxlPSdmYWxzZSc+IDxwYXRoIGQ9J00xMiwxNy4yN0wxOC4xOCwyMUwxNi41NCwxMy45N0wyMiw5LjI0TDE0LjgxLDguNjJMMTIsMkw5LjE5LDguNjJMMiw5LjI0TDcuNDUsMTMuOTdMNS44MiwyMUwxMiwxNy4yN1onPjwvcGF0aD4gPC9zdmc+PC9tYXQtaWNvbj5cbiAgICAgIDxoNCBtYXRMaW5lIGNsYXNzPVwiY29udGV4dC10b29sIG1hdC10eXBvZ3JhcGh5XCIgKGNsaWNrKT1cImNvbnRleHRFbWl0KClcIj5cbiAgICAgICAge3snaWdvLmludGVncmF0aW9uLm1hcFRvb2wuY29udGV4dC10b29sJyB8IHRyYW5zbGF0ZX19XG4gICAgICA8L2g0PlxuICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgPC9tYXQtbGlzdD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=