import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import { LayerListControlsEnum } from '@igo2/geo';
import { ImportExportMode } from '../../import-export/import-export.state';
import * as i0 from "@angular/core";
import * as i1 from "./../map.state";
import * as i2 from "../../tool/tool.state";
import * as i3 from "../../import-export/import-export.state";
import * as i4 from "@angular/material/tabs";
import * as i5 from "@igo2/geo";
import * as i6 from "@igo2/context";
import * as i7 from "../../workspace/workspace-button/workspace-button.component";
import * as i8 from "@ngx-translate/core";
function MapToolComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "igo-workspace-button", 4);
    i0.ɵɵelementStart(1, "igo-export-button", 5);
    i0.ɵɵlistener("click", function MapToolComponent_ng_template_4_Template_igo_export_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const layer_r2 = restoredCtx.layer; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.activateExport(layer_r2); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "igo-ogc-filter-button", 6);
    i0.ɵɵelement(3, "igo-time-filter-button", 6);
    i0.ɵɵelement(4, "igo-track-feature-button", 7);
    i0.ɵɵelement(5, "igo-metadata-button", 4);
} if (rf & 2) {
    const layer_r2 = ctx.layer;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("layer", layer_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", layer_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("header", ctx_r1.ogcButton)("layer", layer_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("header", ctx_r1.timeButton)("layer", layer_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("trackFeature", true)("layer", layer_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", layer_r2);
} }
/**
 * Tool to browse a map's layers or to choose a different map
 */
let MapToolComponent = class MapToolComponent {
    constructor(mapState, toolState, importExportState) {
        this.mapState = mapState;
        this.toolState = toolState;
        this.importExportState = importExportState;
        this.toggleLegendOnVisibilityChange = false;
        this.expandLegendOfVisibleLayers = false;
        this.updateLegendOnResolutionChange = false;
        this.ogcButton = true;
        this.timeButton = true;
        this.layerListControls = {};
        this.queryBadge = false;
    }
    get map() {
        return this.mapState.map;
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
MapToolComponent.ɵfac = function MapToolComponent_Factory(t) { return new (t || MapToolComponent)(i0.ɵɵdirectiveInject(i1.MapState), i0.ɵɵdirectiveInject(i2.ToolState), i0.ɵɵdirectiveInject(i3.ImportExportState)); };
MapToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapToolComponent, selectors: [["igo-map-tool"]], inputs: { toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendOfVisibleLayers: "expandLegendOfVisibleLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", ogcButton: "ogcButton", timeButton: "timeButton", layerListControls: "layerListControls", queryBadge: "queryBadge" }, decls: 9, vars: 14, consts: [[3, "label"], ["igoLayerListBinding", "", 3, "map", "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "floatLabel", "queryBadge"], ["igoLayerItemToolbar", ""], ["igoContextListBinding", ""], [3, "layer"], [3, "layer", "click"], [3, "header", "layer"], [3, "trackFeature", "layer"]], template: function MapToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group");
        i0.ɵɵelementStart(1, "mat-tab", 0);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementStart(3, "igo-layer-list", 1);
        i0.ɵɵtemplate(4, MapToolComponent_ng_template_4_Template, 6, 9, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-tab", 0);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵelement(8, "igo-context-list", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(2, 10, "igo.integration.tools.map"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("map", ctx.map)("excludeBaseLayers", ctx.excludeBaseLayers)("layerFilterAndSortOptions", ctx.layerFilterAndSortOptions)("expandLegendOfVisibleLayers", ctx.expandLegendOfVisibleLayers)("toggleLegendOnVisibilityChange", ctx.toggleLegendOnVisibilityChange)("updateLegendOnResolutionChange", ctx.updateLegendOnResolutionChange)("floatLabel", false)("queryBadge", ctx.queryBadge);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(7, 12, "igo.integration.tools.contexts"));
    } }, directives: [i4.MatTabGroup, i4.MatTab, i5.LayerListComponent, i5.LayerListBindingDirective, i6.ContextListComponent, i6.ContextListBindingDirective, i7.WorkspaceButtonComponent, i5.ExportButtonComponent, i5.OgcFilterButtonComponent, i5.TimeFilterButtonComponent, i5.TrackFeatureButtonComponent, i5.MetadataButtonComponent], pipes: [i8.TranslatePipe], styles: ["mat-tab-group[_ngcontent-%COMP%], mat-tab-group[_ngcontent-%COMP%]     .mat-tab-body-wrapper{height:100%;overflow:hidden}[_nghost-%COMP%]     .mat-tab-body-content{overflow:hidden}"], changeDetection: 0 });
MapToolComponent = __decorate([
    ToolComponent({
        name: 'map',
        title: 'igo.integration.tools.map',
        icon: 'map'
    })
], MapToolComponent);
export { MapToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-map-tool',
                templateUrl: './map-tool.component.html',
                styleUrls: ['./map-tool.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.MapState }, { type: i2.ToolState }, { type: i3.ImportExportState }]; }, { toggleLegendOnVisibilityChange: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXRvb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvbWFwLXRvb2wvbWFwLXRvb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvbWFwLXRvb2wvbWFwLXRvb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUNMLHFCQUFxQixFQUt0QixNQUFNLFdBQVcsQ0FBQztBQUVuQixPQUFPLEVBQUUsZ0JBQWdCLEVBQXFCLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7OztJQ0t0RiwwQ0FBNkQ7SUFDN0QsNENBQW1FO0lBQWhDLDJRQUErQjtJQUFDLGlCQUFvQjtJQUN2RiwyQ0FBb0Y7SUFDcEYsNENBQXVGO0lBQ3ZGLDhDQUEyRjtJQUMzRix5Q0FBMkQ7Ozs7SUFMckMsZ0NBQWU7SUFDbEIsZUFBZTtJQUFmLGdDQUFlO0lBQ1gsZUFBb0I7SUFBcEIseUNBQW9CLG1CQUFBO0lBQ25CLGVBQXFCO0lBQXJCLDBDQUFxQixtQkFBQTtJQUNuQixlQUFxQjtJQUFyQixtQ0FBcUIsbUJBQUE7SUFDMUIsZUFBZTtJQUFmLGdDQUFlOztBRFA1Qzs7R0FFRztJQVlVLGdCQUFnQixTQUFoQixnQkFBZ0I7SUE0QzNCLFlBQ1UsUUFBa0IsRUFDbEIsU0FBb0IsRUFDcEIsaUJBQW9DO1FBRnBDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBOUNyQyxtQ0FB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QixDQUFDLE1BQU07YUFDaEQ7bUhBRVUsOEJBQThCO2tCQUF0QyxLQUFLO1lBRUcsMkJBQTJCO2tCQUFuQyxLQUFLO1lBRUcsOEJBQThCO2tCQUF0QyxLQUFLO1lBRUcsU0FBUztrQkFBakIsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFFRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQge1xuICBMYXllckxpc3RDb250cm9sc0VudW0sXG4gIExheWVyTGlzdENvbnRyb2xzT3B0aW9ucyxcbiAgSWdvTWFwLFxuICBFeHBvcnRPcHRpb25zLFxuICBMYXllclxufSBmcm9tICdAaWdvMi9nZW8nO1xuaW1wb3J0IHsgTWFwU3RhdGUgfSBmcm9tICcuLy4uL21hcC5zdGF0ZSc7XG5pbXBvcnQgeyBJbXBvcnRFeHBvcnRNb2RlLCBJbXBvcnRFeHBvcnRTdGF0ZSB9IGZyb20gJy4uLy4uL2ltcG9ydC1leHBvcnQvaW1wb3J0LWV4cG9ydC5zdGF0ZSc7XG5pbXBvcnQgeyBUb29sU3RhdGUgfSBmcm9tICcuLi8uLi90b29sL3Rvb2wuc3RhdGUnO1xuXG4vKipcbiAqIFRvb2wgdG8gYnJvd3NlIGEgbWFwJ3MgbGF5ZXJzIG9yIHRvIGNob29zZSBhIGRpZmZlcmVudCBtYXBcbiAqL1xuQFRvb2xDb21wb25lbnQoe1xuICBuYW1lOiAnbWFwJyxcbiAgdGl0bGU6ICdpZ28uaW50ZWdyYXRpb24udG9vbHMubWFwJyxcbiAgaWNvbjogJ21hcCdcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tbWFwLXRvb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLXRvb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXAtdG9vbC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNYXBUb29sQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdG9nZ2xlTGVnZW5kT25WaXNpYmlsaXR5Q2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZXhwYW5kTGVnZW5kT2ZWaXNpYmxlTGF5ZXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdXBkYXRlTGVnZW5kT25SZXNvbHV0aW9uQ2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgb2djQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSB0aW1lQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSBsYXllckxpc3RDb250cm9sczogTGF5ZXJMaXN0Q29udHJvbHNPcHRpb25zID0ge307XG5cbiAgQElucHV0KCkgcXVlcnlCYWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdldCBtYXAoKTogSWdvTWFwIHtcbiAgICByZXR1cm4gdGhpcy5tYXBTdGF0ZS5tYXA7XG4gIH1cblxuICBnZXQgZXhjbHVkZUJhc2VMYXllcnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJMaXN0Q29udHJvbHMuZXhjbHVkZUJhc2VMYXllcnMgfHwgZmFsc2U7XG4gIH1cblxuICBnZXQgbGF5ZXJGaWx0ZXJBbmRTb3J0T3B0aW9ucygpOiBhbnkge1xuICAgIGNvbnN0IGZpbHRlclNvcnRPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgc2hvd1Rvb2xiYXI6IExheWVyTGlzdENvbnRyb2xzRW51bS5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgdGhpcy5sYXllckxpc3RDb250cm9sc1xuICAgICk7XG5cbiAgICBzd2l0Y2ggKHRoaXMubGF5ZXJMaXN0Q29udHJvbHMuc2hvd1Rvb2xiYXIpIHtcbiAgICAgIGNhc2UgTGF5ZXJMaXN0Q29udHJvbHNFbnVtLmFsd2F5czpcbiAgICAgICAgZmlsdGVyU29ydE9wdGlvbnMuc2hvd1Rvb2xiYXIgPSBMYXllckxpc3RDb250cm9sc0VudW0uYWx3YXlzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGF5ZXJMaXN0Q29udHJvbHNFbnVtLm5ldmVyOlxuICAgICAgICBmaWx0ZXJTb3J0T3B0aW9ucy5zaG93VG9vbGJhciA9IExheWVyTGlzdENvbnRyb2xzRW51bS5uZXZlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlclNvcnRPcHRpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtYXBTdGF0ZTogTWFwU3RhdGUsXG4gICAgcHJpdmF0ZSB0b29sU3RhdGU6IFRvb2xTdGF0ZSxcbiAgICBwcml2YXRlIGltcG9ydEV4cG9ydFN0YXRlOiBJbXBvcnRFeHBvcnRTdGF0ZVxuICApIHt9XG5cbiAgYWN0aXZhdGVFeHBvcnQobGF5ZXI6IExheWVyKSB7XG4gICAgbGV0IGlkID0gbGF5ZXIuaWQ7XG4gICAgaWYgKGxheWVyLm9wdGlvbnMud29ya3NwYWNlPy53b3Jrc3BhY2VJZCkge1xuICAgICAgaWQgPSBsYXllci5vcHRpb25zLndvcmtzcGFjZS53b3Jrc3BhY2VJZCAhPT0gbGF5ZXIuaWQgPyBsYXllci5vcHRpb25zLndvcmtzcGFjZS53b3Jrc3BhY2VJZCA6IGxheWVyLmlkO1xuICAgIH1cbiAgICB0aGlzLmltcG9ydEV4cG9ydFN0YXRlLnNldHNFeHBvcnRPcHRpb25zKHsgbGF5ZXJzOiBbaWRdIH0gYXMgRXhwb3J0T3B0aW9ucyk7XG4gICAgdGhpcy5pbXBvcnRFeHBvcnRTdGF0ZS5zZXRNb2RlKEltcG9ydEV4cG9ydE1vZGUuZXhwb3J0KTtcbiAgICB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmFjdGl2YXRlVG9vbCgnaW1wb3J0RXhwb3J0Jyk7XG4gIH1cbn1cbiIsIjxtYXQtdGFiLWdyb3VwPlxuXG4gIDxtYXQtdGFiIFtsYWJlbF09XCInaWdvLmludGVncmF0aW9uLnRvb2xzLm1hcCcgfMKgdHJhbnNsYXRlXCI+XG4gICAgPGlnby1sYXllci1saXN0XG4gICAgICBbbWFwXT1cIm1hcFwiXG4gICAgICBpZ29MYXllckxpc3RCaW5kaW5nXG4gICAgICBbZXhjbHVkZUJhc2VMYXllcnNdPVwiZXhjbHVkZUJhc2VMYXllcnNcIlxuICAgICAgW2xheWVyRmlsdGVyQW5kU29ydE9wdGlvbnNdPVwibGF5ZXJGaWx0ZXJBbmRTb3J0T3B0aW9uc1wiXG4gICAgICBbZXhwYW5kTGVnZW5kT2ZWaXNpYmxlTGF5ZXJzXT1cImV4cGFuZExlZ2VuZE9mVmlzaWJsZUxheWVyc1wiXG4gICAgICBbdG9nZ2xlTGVnZW5kT25WaXNpYmlsaXR5Q2hhbmdlXT1cInRvZ2dsZUxlZ2VuZE9uVmlzaWJpbGl0eUNoYW5nZVwiXG4gICAgICBbdXBkYXRlTGVnZW5kT25SZXNvbHV0aW9uQ2hhbmdlXT1cInVwZGF0ZUxlZ2VuZE9uUmVzb2x1dGlvbkNoYW5nZVwiXG4gICAgICBbZmxvYXRMYWJlbF09XCJmYWxzZVwiXG4gICAgICBbcXVlcnlCYWRnZV09XCJxdWVyeUJhZGdlXCI+XG5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjaWdvTGF5ZXJJdGVtVG9vbGJhciBsZXQtbGF5ZXI9XCJsYXllclwiPlxuICAgICAgICA8IS0tIDxpZ28tZG93bmxvYWQtYnV0dG9uIFtsYXllcl09XCJsYXllclwiPjwvaWdvLWRvd25sb2FkLWJ1dHRvbj4gLS0+XG4gICAgICAgIDxpZ28td29ya3NwYWNlLWJ1dHRvbiBbbGF5ZXJdPVwibGF5ZXJcIj48L2lnby13b3Jrc3BhY2UtYnV0dG9uPlxuICAgICAgICA8aWdvLWV4cG9ydC1idXR0b24gW2xheWVyXT1cImxheWVyXCIgKGNsaWNrKT1cImFjdGl2YXRlRXhwb3J0KGxheWVyKVwiPjwvaWdvLWV4cG9ydC1idXR0b24+XG4gICAgICAgIDxpZ28tb2djLWZpbHRlci1idXR0b24gW2hlYWRlcl09XCJvZ2NCdXR0b25cIiBbbGF5ZXJdPVwibGF5ZXJcIj48L2lnby1vZ2MtZmlsdGVyLWJ1dHRvbj5cbiAgICAgICAgPGlnby10aW1lLWZpbHRlci1idXR0b24gW2hlYWRlcl09XCJ0aW1lQnV0dG9uXCIgW2xheWVyXT1cImxheWVyXCI+PC9pZ28tdGltZS1maWx0ZXItYnV0dG9uPlxuICAgICAgICA8aWdvLXRyYWNrLWZlYXR1cmUtYnV0dG9uIFt0cmFja0ZlYXR1cmVdPVwidHJ1ZVwiIFtsYXllcl09XCJsYXllclwiPjwvaWdvLXRyYWNrLWZlYXR1cmUtYnV0dG9uPlxuICAgICAgICA8aWdvLW1ldGFkYXRhLWJ1dHRvbiBbbGF5ZXJdPVwibGF5ZXJcIj48L2lnby1tZXRhZGF0YS1idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPC9pZ28tbGF5ZXItbGlzdD5cbiAgPC9tYXQtdGFiPlxuXG4gIDxtYXQtdGFiIFtsYWJlbF09XCInaWdvLmludGVncmF0aW9uLnRvb2xzLmNvbnRleHRzJyB8wqB0cmFuc2xhdGVcIj5cbiAgICA8aWdvLWNvbnRleHQtbGlzdCBpZ29Db250ZXh0TGlzdEJpbmRpbmc+PC9pZ28tY29udGV4dC1saXN0PlxuICA8L21hdC10YWI+XG5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==