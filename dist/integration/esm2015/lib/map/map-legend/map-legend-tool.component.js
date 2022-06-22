import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { BehaviorSubject, ReplaySubject, combineLatest } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { ToolComponent } from '@igo2/common';
import { sourceCanSearch } from '@igo2/geo';
import * as i0 from "@angular/core";
import * as i1 from "./../map.state";
import * as i2 from "./../../tool/tool.state";
import * as i3 from "@igo2/geo";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/list";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/core";
import * as i8 from "@ngx-translate/core";
function MapLegendToolComponent_igo_layer_legend_list_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-layer-legend-list", 4);
    i0.ɵɵlistener("allLegendsShown", function MapLegendToolComponent_igo_layer_legend_list_0_Template_igo_layer_legend_list_allLegendsShown_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onShowAllLegends($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("excludeBaseLayers", ctx_r0.excludeBaseLayers)("allowShowAllLegends", ctx_r0.allowShowAllLegends)("updateLegendOnResolutionChange", ctx_r0.updateLegendOnResolutionChange)("showAllLegendsValue", i0.ɵɵpipeBind1(1, 4, ctx_r0.showAllLegendsValue$));
} }
function MapLegendToolComponent_1_ng_template_0_Template(rf, ctx) { }
function MapLegendToolComponent_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MapLegendToolComponent_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function MapLegendToolComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.visibleLayers$).length ? i0.ɵɵpipeBind1(3, 3, "igo.integration.mapTool.noLayersInRange") : i0.ɵɵpipeBind1(4, 5, "igo.integration.mapTool.noLayersVisible"), "\n");
} }
function MapLegendToolComponent_ng_template_6_mat_list_0_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.integration.mapTool.customize"), "");
} }
function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 8);
    i0.ɵɵelement(3, "path", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 10);
    i0.ɵɵlistener("click", function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_5_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.searchEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.search-tool"), " ");
} }
function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 8);
    i0.ɵɵelement(3, "path", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 12);
    i0.ɵɵlistener("click", function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_6_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.catalogEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.catalog-tool"), " ");
} }
function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 8);
    i0.ɵɵelement(3, "path", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 14);
    i0.ɵɵlistener("click", function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_7_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.contextEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.context-tool"), " ");
} }
function MapLegendToolComponent_ng_template_6_mat_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵelementStart(1, "p", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MapLegendToolComponent_ng_template_6_mat_list_0_p_4_Template, 3, 3, "p", 2);
    i0.ɵɵtemplate(5, MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_5_Template, 7, 3, "mat-list-item", 6);
    i0.ɵɵtemplate(6, MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_6_Template, 7, 3, "mat-list-item", 6);
    i0.ɵɵtemplate(7, MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_7_Template, 7, 3, "mat-list-item", 6);
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
function MapLegendToolComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MapLegendToolComponent_ng_template_6_mat_list_0_Template, 8, 7, "mat-list", 6);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r4.delayedShowEmptyMapContent);
} }
let MapLegendToolComponent = class MapLegendToolComponent {
    constructor(mapState, toolState, searchSourceService, cdRef) {
        this.mapState = mapState;
        this.toolState = toolState;
        this.searchSourceService = searchSourceService;
        this.cdRef = cdRef;
        this.delayedShowEmptyMapContent = false;
        this.layers$ = new BehaviorSubject([]);
        this.showAllLegendsValue$ = new BehaviorSubject(false);
        this.change$ = new ReplaySubject(1);
        this.updateLegendOnResolutionChange = false;
        this.layerAdditionAllowed = true;
        this.allowShowAllLegends = false;
        this.showAllLegendsValue = false;
        this.layerListControls = {};
    }
    get map() {
        return this.mapState.map;
    }
    get visibleOrInRangeLayers$() {
        return this.layers$.pipe(map(layers => layers.filter(layer => layer.visible$.value && layer.isInResolutionsRange$.value)));
    }
    get visibleLayers$() {
        return this.layers$.pipe(map(layers => layers.filter(layer => layer.visible$.value)));
    }
    get excludeBaseLayers() {
        return this.layerListControls.excludeBaseLayers || false;
    }
    get searchToolInToolbar() {
        return (this.toolState.toolbox.getToolbar().indexOf('searchResults') !== -1 &&
            this.searchSourceService
                .getSources()
                .filter(sourceCanSearch)
                .filter(s => s.available && s.getType() === 'Layer').length > 0);
    }
    get catalogToolInToolbar() {
        return this.toolState.toolbox.getToolbar().indexOf('catalog') !== -1;
    }
    get contextToolInToolbar() {
        return this.toolState.toolbox.getToolbar().indexOf('contextManager') !== -1;
    }
    ngOnInit() {
        this.resolution$$ = combineLatest([
            this.map.layers$,
            this.map.viewController.resolution$
        ])
            .pipe(debounceTime(10))
            .subscribe((bunch) => {
            this.layers$.next(bunch[0].filter(layer => layer.showInLayerList !== false &&
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
        setTimeout(() => {
            this.delayedShowEmptyMapContent = true;
            this.cdRef.detectChanges();
        }, 250);
    }
    onShowAllLegends(event) {
        this.mapState.showAllLegendsValue = event;
        this.showAllLegendsValue$.next(event);
    }
    showAllLegend() {
        if (this.layers$.getValue().length === 0) {
            return false;
        }
        else if (this.layers$.getValue().length !== 0 &&
            this.allowShowAllLegends === false) {
            let visibleOrInRangeLayers;
            this.visibleOrInRangeLayers$$ = this.visibleOrInRangeLayers$.subscribe(value => {
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
    ngOnDestroy() {
        this.resolution$$.unsubscribe();
        if (this.visibleOrInRangeLayers$$) {
            this.visibleOrInRangeLayers$$.unsubscribe();
        }
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
};
MapLegendToolComponent.ɵfac = function MapLegendToolComponent_Factory(t) { return new (t || MapLegendToolComponent)(i0.ɵɵdirectiveInject(i1.MapState), i0.ɵɵdirectiveInject(i2.ToolState), i0.ɵɵdirectiveInject(i3.SearchSourceService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MapLegendToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapLegendToolComponent, selectors: [["igo-map-legend-tool"]], inputs: { updateLegendOnResolutionChange: "updateLegendOnResolutionChange", layerAdditionAllowed: "layerAdditionAllowed", allowShowAllLegends: "allowShowAllLegends", showAllLegendsValue: "showAllLegendsValue", layerListControls: "layerListControls" }, decls: 8, vars: 10, consts: [["igoLayerLegendListBinding", "", 3, "excludeBaseLayers", "allowShowAllLegends", "updateLegendOnResolutionChange", "showAllLegendsValue", "allLegendsShown", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "map-empty mat-typography", 4, "ngIf"], ["emptyLayers", ""], ["igoLayerLegendListBinding", "", 3, "excludeBaseLayers", "allowShowAllLegends", "updateLegendOnResolutionChange", "showAllLegendsValue", "allLegendsShown"], [1, "map-empty", "mat-typography"], [4, "ngIf"], ["mat-list-icon", ""], ["viewBox", "0 0 24 24", "fit", "", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["d", "M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["d", "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function MapLegendToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MapLegendToolComponent_igo_layer_legend_list_0_Template, 2, 6, "igo-layer-legend-list", 0);
        i0.ɵɵtemplate(1, MapLegendToolComponent_1_Template, 1, 0, undefined, 1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵtemplate(3, MapLegendToolComponent_p_3_Template, 5, 7, "p", 2);
        i0.ɵɵpipe(4, "async");
        i0.ɵɵpipe(5, "async");
        i0.ɵɵtemplate(6, MapLegendToolComponent_ng_template_6_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(7);
        i0.ɵɵproperty("ngIf", ctx.showAllLegend());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 4, ctx.layers$).length !== 0)("ngIfElse", _r3);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.allowShowAllLegends && i0.ɵɵpipeBind1(4, 6, ctx.layers$).length !== 0 && i0.ɵɵpipeBind1(5, 8, ctx.visibleOrInRangeLayers$).length === 0);
    } }, directives: [i4.NgIf, i3.LayerLegendListComponent, i3.LayerLegendListBindingDirective, i5.MatList, i5.MatListItem, i6.MatIcon, i5.MatListIconCssMatStyler, i7.MatLine], pipes: [i4.AsyncPipe, i8.TranslatePipe], styles: [".map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:10px}.map-empty[_ngcontent-%COMP%]{text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:5px}"] });
MapLegendToolComponent = __decorate([
    ToolComponent({
        name: 'mapLegend',
        title: 'igo.integration.tools.legend',
        icon: 'format-list-bulleted-type'
    })
], MapLegendToolComponent);
export { MapLegendToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapLegendToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-map-legend-tool',
                templateUrl: './map-legend-tool.component.html',
                styleUrls: ['./map-legend-tool.component.scss']
            }]
    }], function () { return [{ type: i1.MapState }, { type: i2.ToolState }, { type: i3.SearchSourceService }, { type: i0.ChangeDetectorRef }]; }, { updateLegendOnResolutionChange: [{
            type: Input
        }], layerAdditionAllowed: [{
            type: Input
        }], allowShowAllLegends: [{
            type: Input
        }], showAllLegendsValue: [{
            type: Input
        }], layerListControls: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxlZ2VuZC10b29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvbWFwL21hcC1sZWdlbmQvbWFwLWxlZ2VuZC10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvbWFwL21hcC1sZWdlbmQvbWFwLWxlZ2VuZC10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQTRCLGVBQWUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBS0wsZUFBZSxFQUNoQixNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7O0lDakJuQixnREFNK0M7SUFBN0MsaVFBQTRDOztJQUM5QyxpQkFBd0I7OztJQUx0Qiw0REFBdUMsbURBQUEseUVBQUEsMEVBQUE7Ozs7SUFNekMsc0ZBQW9GOzs7SUFFcEYsNEJBQ21IO0lBQ2pILFlBQ0Y7Ozs7SUFBQSxpQkFBSTs7O0lBREYsZUFDRjtJQURFLHdOQUNGOzs7SUFPSSw0QkFBMEk7SUFDeEksWUFBbUQ7O0lBQUEsaUJBQUk7O0lBQXZELGVBQW1EO0lBQW5ELHlGQUFtRDs7OztJQUVyRCxxQ0FBbUU7SUFDakUsbUNBQXdCO0lBQUMsbUJBQWlIO0lBQWpILDhCQUFpSDtJQUFDLDBCQUFvUjtJQUFDLGlCQUFNO0lBQUEsaUJBQVc7SUFDamIsb0JBQXNFO0lBQXRFLDhCQUFzRTtJQUF2Qiw2TkFBc0I7SUFDbkUs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LElBQUksRUFBRSxXQUFXO1FBQ2pCLEtBQUssRUFBRSw4QkFBOEI7UUFDckMsSUFBSSxFQUFFLDJCQUEyQjtLQUNsQyxDQUFDO0dBTVcsc0JBQXNCLENBaUpsQztTQWpKWSxzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7cUpBV1UsOEJBQThCO2tCQUF0QyxLQUFLO1lBRUcsb0JBQW9CO2tCQUE1QixLQUFLO1lBRUcsbUJBQW1CO2tCQUEzQixLQUFLO1lBRUcsbUJBQW1CO2tCQUEzQixLQUFLO1lBRUcsaUJBQWlCO2tCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBCZWhhdmlvclN1YmplY3QsIFJlcGxheVN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7XG4gIExheWVyLFxuICBJZ29NYXAsXG4gIExheWVyTGlzdENvbnRyb2xzT3B0aW9ucyxcbiAgU2VhcmNoU291cmNlU2VydmljZSxcbiAgc291cmNlQ2FuU2VhcmNoXG59IGZyb20gJ0BpZ28yL2dlbyc7XG5cbmltcG9ydCB7IFRvb2xTdGF0ZSB9IGZyb20gJy4vLi4vLi4vdG9vbC90b29sLnN0YXRlJztcbmltcG9ydCB7IE1hcFN0YXRlIH0gZnJvbSAnLi8uLi9tYXAuc3RhdGUnO1xuXG5AVG9vbENvbXBvbmVudCh7XG4gIG5hbWU6ICdtYXBMZWdlbmQnLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5sZWdlbmQnLFxuICBpY29uOiAnZm9ybWF0LWxpc3QtYnVsbGV0ZWQtdHlwZSdcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tbWFwLWxlZ2VuZC10b29sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC1sZWdlbmQtdG9vbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hcC1sZWdlbmQtdG9vbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hcExlZ2VuZFRvb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBkZWxheWVkU2hvd0VtcHR5TWFwQ29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGxheWVycyQ6IEJlaGF2aW9yU3ViamVjdDxMYXllcltdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBzaG93QWxsTGVnZW5kc1ZhbHVlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGNoYW5nZSQgPSBuZXcgUmVwbGF5U3ViamVjdDx2b2lkPigxKTtcblxuICBwcml2YXRlIHJlc29sdXRpb24kJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHZpc2libGVPckluUmFuZ2VMYXllcnMkJDogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgpIHVwZGF0ZUxlZ2VuZE9uUmVzb2x1dGlvbkNoYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGxheWVyQWRkaXRpb25BbGxvd2VkOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSBhbGxvd1Nob3dBbGxMZWdlbmRzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2hvd0FsbExlZ2VuZHNWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGxheWVyTGlzdENvbnRyb2xzOiBMYXllckxpc3RDb250cm9sc09wdGlvbnMgPSB7fTtcblxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMubWFwU3RhdGUubWFwO1xuICB9XG5cbiAgZ2V0IHZpc2libGVPckluUmFuZ2VMYXllcnMkKCk6IE9ic2VydmFibGU8TGF5ZXJbXT4ge1xuICAgIHJldHVybiB0aGlzLmxheWVycyQucGlwZShcbiAgICAgIG1hcChsYXllcnMgPT5cbiAgICAgICAgbGF5ZXJzLmZpbHRlcihcbiAgICAgICAgICBsYXllciA9PiBsYXllci52aXNpYmxlJC52YWx1ZSAmJiBsYXllci5pc0luUmVzb2x1dGlvbnNSYW5nZSQudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXQgdmlzaWJsZUxheWVycyQoKTogT2JzZXJ2YWJsZTxMYXllcltdPiB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzJC5waXBlKFxuICAgICAgbWFwKGxheWVycyA9PiBsYXllcnMuZmlsdGVyKGxheWVyID0+IGxheWVyLnZpc2libGUkLnZhbHVlKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGV4Y2x1ZGVCYXNlTGF5ZXJzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxheWVyTGlzdENvbnRyb2xzLmV4Y2x1ZGVCYXNlTGF5ZXJzIHx8IGZhbHNlO1xuICB9XG5cbiAgZ2V0IHNlYXJjaFRvb2xJblRvb2xiYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMudG9vbFN0YXRlLnRvb2xib3guZ2V0VG9vbGJhcigpLmluZGV4T2YoJ3NlYXJjaFJlc3VsdHMnKSAhPT0gLTEgJiZcbiAgICAgIHRoaXMuc2VhcmNoU291cmNlU2VydmljZVxuICAgICAgICAuZ2V0U291cmNlcygpXG4gICAgICAgIC5maWx0ZXIoc291cmNlQ2FuU2VhcmNoKVxuICAgICAgICAuZmlsdGVyKHMgPT4gcy5hdmFpbGFibGUgJiYgcy5nZXRUeXBlKCkgPT09ICdMYXllcicpLmxlbmd0aCA+IDBcbiAgICApO1xuICB9XG5cbiAgZ2V0IGNhdGFsb2dUb29sSW5Ub29sYmFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmdldFRvb2xiYXIoKS5pbmRleE9mKCdjYXRhbG9nJykgIT09IC0xO1xuICB9XG5cbiAgZ2V0IGNvbnRleHRUb29sSW5Ub29sYmFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmdldFRvb2xiYXIoKS5pbmRleE9mKCdjb250ZXh0TWFuYWdlcicpICE9PSAtMTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1hcFN0YXRlOiBNYXBTdGF0ZSxcbiAgICBwcml2YXRlIHRvb2xTdGF0ZTogVG9vbFN0YXRlLFxuICAgIHByaXZhdGUgc2VhcmNoU291cmNlU2VydmljZTogU2VhcmNoU291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNvbHV0aW9uJCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMubWFwLmxheWVycyQsXG4gICAgICB0aGlzLm1hcC52aWV3Q29udHJvbGxlci5yZXNvbHV0aW9uJFxuICAgIF0pXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTApKVxuICAgICAgLnN1YnNjcmliZSgoYnVuY2g6IFtMYXllcltdLCBudW1iZXJdKSA9PiB7XG4gICAgICAgIHRoaXMubGF5ZXJzJC5uZXh0KFxuICAgICAgICAgIGJ1bmNoWzBdLmZpbHRlcihcbiAgICAgICAgICAgIGxheWVyID0+XG4gICAgICAgICAgICAgIGxheWVyLnNob3dJbkxheWVyTGlzdCAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgKCF0aGlzLmV4Y2x1ZGVCYXNlTGF5ZXJzIHx8ICFsYXllci5iYXNlTGF5ZXIpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5hbGxvd1Nob3dBbGxMZWdlbmRzKSB7XG4gICAgICB0aGlzLm1hcFN0YXRlLnNob3dBbGxMZWdlbmRzVmFsdWUgPVxuICAgICAgICB0aGlzLm1hcFN0YXRlLnNob3dBbGxMZWdlbmRzVmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gdGhpcy5tYXBTdGF0ZS5zaG93QWxsTGVnZW5kc1ZhbHVlXG4gICAgICAgICAgOiB0aGlzLnNob3dBbGxMZWdlbmRzVmFsdWUgfHwgZmFsc2U7XG4gICAgICB0aGlzLnNob3dBbGxMZWdlbmRzVmFsdWUkLm5leHQodGhpcy5tYXBTdGF0ZS5zaG93QWxsTGVnZW5kc1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93QWxsTGVnZW5kc1ZhbHVlJC5uZXh0KGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyBwcmV2ZW50IG1lc3NhZ2UgdG8gYmUgc2hvd24gdG9vIHF1aWNrbHkuIFdhaXRpbmcgZm9yIGxheWVyc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kZWxheWVkU2hvd0VtcHR5TWFwQ29udGVudCA9IHRydWU7XG4gICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9LCAyNTApO1xuICB9XG5cbiAgb25TaG93QWxsTGVnZW5kcyhldmVudCkge1xuICAgIHRoaXMubWFwU3RhdGUuc2hvd0FsbExlZ2VuZHNWYWx1ZSA9IGV2ZW50O1xuICAgIHRoaXMuc2hvd0FsbExlZ2VuZHNWYWx1ZSQubmV4dChldmVudCk7XG4gIH1cblxuICBzaG93QWxsTGVnZW5kKCkge1xuICAgIGlmICh0aGlzLmxheWVycyQuZ2V0VmFsdWUoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5sYXllcnMkLmdldFZhbHVlKCkubGVuZ3RoICE9PSAwICYmXG4gICAgICB0aGlzLmFsbG93U2hvd0FsbExlZ2VuZHMgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBsZXQgdmlzaWJsZU9ySW5SYW5nZUxheWVycztcbiAgICAgIHRoaXMudmlzaWJsZU9ySW5SYW5nZUxheWVycyQkID0gdGhpcy52aXNpYmxlT3JJblJhbmdlTGF5ZXJzJC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICB2YWx1ZS5sZW5ndGggPT09IDBcbiAgICAgICAgICA/ICh2aXNpYmxlT3JJblJhbmdlTGF5ZXJzID0gZmFsc2UpXG4gICAgICAgICAgOiAodmlzaWJsZU9ySW5SYW5nZUxheWVycyA9IHRydWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh2aXNpYmxlT3JJblJhbmdlTGF5ZXJzID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZXNvbHV0aW9uJCQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy52aXNpYmxlT3JJblJhbmdlTGF5ZXJzJCQpIHtcbiAgICAgIHRoaXMudmlzaWJsZU9ySW5SYW5nZUxheWVycyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoRW1pdCgpIHtcbiAgICB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmFjdGl2YXRlVG9vbCgnc2VhcmNoUmVzdWx0cycpO1xuICB9XG5cbiAgY2F0YWxvZ0VtaXQoKSB7XG4gICAgdGhpcy50b29sU3RhdGUudG9vbGJveC5hY3RpdmF0ZVRvb2woJ2NhdGFsb2cnKTtcbiAgfVxuXG4gIGNvbnRleHRFbWl0KCkge1xuICAgIHRoaXMudG9vbFN0YXRlLnRvb2xib3guYWN0aXZhdGVUb29sKCdjb250ZXh0TWFuYWdlcicpO1xuICB9XG59XG4iLCI8aWdvLWxheWVyLWxlZ2VuZC1saXN0ICpuZ0lmPVwic2hvd0FsbExlZ2VuZCgpXCJcbiAgaWdvTGF5ZXJMZWdlbmRMaXN0QmluZGluZ1xuICBbZXhjbHVkZUJhc2VMYXllcnNdPVwiZXhjbHVkZUJhc2VMYXllcnNcIlxuICBbYWxsb3dTaG93QWxsTGVnZW5kc109XCJhbGxvd1Nob3dBbGxMZWdlbmRzXCJcbiAgW3VwZGF0ZUxlZ2VuZE9uUmVzb2x1dGlvbkNoYW5nZV09XCJ1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2VcIlxuICBbc2hvd0FsbExlZ2VuZHNWYWx1ZV09XCIoc2hvd0FsbExlZ2VuZHNWYWx1ZSQgfCBhc3luYylcIlxuICAoYWxsTGVnZW5kc1Nob3duKT1cIm9uU2hvd0FsbExlZ2VuZHMoJGV2ZW50KVwiPlxuPC9pZ28tbGF5ZXItbGVnZW5kLWxpc3Q+XG48bmctdGVtcGxhdGUgKm5nSWY9XCIobGF5ZXJzJCB8IGFzeW5jKS5sZW5ndGggIT09IDA7IGVsc2UgZW1wdHlMYXllcnNcIj48L25nLXRlbXBsYXRlPlxuXG48cCBjbGFzcz1cIm1hcC1lbXB0eSBtYXQtdHlwb2dyYXBoeVwiXG4gICpuZ0lmPVwiIWFsbG93U2hvd0FsbExlZ2VuZHMgJiYgKGxheWVycyQgfCBhc3luYykubGVuZ3RoICE9PSAwICYmICh2aXNpYmxlT3JJblJhbmdlTGF5ZXJzJCB8IGFzeW5jKS5sZW5ndGggPT09IDBcIj5cbiAge3sgKCh2aXNpYmxlTGF5ZXJzJCB8IGFzeW5jKS5sZW5ndGgpID8gKCdpZ28uaW50ZWdyYXRpb24ubWFwVG9vbC5ub0xheWVyc0luUmFuZ2UnIHwgdHJhbnNsYXRlKSA6ICAoJ2lnby5pbnRlZ3JhdGlvbi5tYXBUb29sLm5vTGF5ZXJzVmlzaWJsZScgfCB0cmFuc2xhdGUpIH19XG48L3A+XG5cblxuPG5nLXRlbXBsYXRlICNlbXB0eUxheWVycz5cbiAgPG1hdC1saXN0ICpuZ0lmPVwiZGVsYXllZFNob3dFbXB0eU1hcENvbnRlbnRcIj5cbiAgICA8cCBjbGFzcz1cIm1hcC1lbXB0eSBtYXQtdHlwb2dyYXBoeVwiPlxuICAgICAge3snaWdvLmludGVncmF0aW9uLm1hcFRvb2wuZW1wdHknIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgPHAgKm5nSWY9XCJsYXllckFkZGl0aW9uQWxsb3dlZCAmJiAoc2VhcmNoVG9vbEluVG9vbGJhciB8fCBjYXRhbG9nVG9vbEluVG9vbGJhciB8fCBjb250ZXh0VG9vbEluVG9vbGJhcilcIiBjbGFzcz1cIm1hcC1lbXB0eSBtYXQtdHlwb2dyYXBoeVwiPlxuICAgICAge3snaWdvLmludGVncmF0aW9uLm1hcFRvb2wuY3VzdG9taXplJyB8IHRyYW5zbGF0ZX19PC9wPlxuXG4gICAgPG1hdC1saXN0LWl0ZW0gKm5nSWY9XCJsYXllckFkZGl0aW9uQWxsb3dlZCAmJiBzZWFyY2hUb29sSW5Ub29sYmFyXCI+XG4gICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj4gPHN2ZyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyBmb2N1c2FibGU9J2ZhbHNlJz4gPHBhdGggZD0nTTkuNSwzQTYuNSw2LjUgMCAwLDEgMTYsOS41QzE2LDExLjExIDE1LjQxLDEyLjU5IDE0LjQ0LDEzLjczTDE0LjcxLDE0SDE1LjVMMjAuNSwxOUwxOSwyMC41TDE0LDE1LjVWMTQuNzFMMTMuNzMsMTQuNDRDMTIuNTksMTUuNDEgMTEuMTEsMTYgOS41LDE2QTYuNSw2LjUgMCAwLDEgMyw5LjVBNi41LDYuNSAwIDAsMSA5LjUsM005LjUsNUM3LDUgNSw3IDUsOS41QzUsMTIgNywxNCA5LjUsMTRDMTIsMTQgMTQsMTIgMTQsOS41QzE0LDcgMTIsNSA5LjUsNVonPiA8L3BhdGg+IDwvc3ZnPjwvbWF0LWljb24+XG4gICAgICA8aDQgbWF0TGluZSBjbGFzcz1cInNlYXJjaC10b29sIG1hdC10eXBvZ3JhcGh5XCIgKGNsaWNrKT1cInNlYXJjaEVtaXQoKVwiPlxuICAgICAgICB7eydpZ28uaW50ZWdyYXRpb24ubWFwVG9vbC5zZWFyY2gtdG9vbCcgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9oND5cbiAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgPG1hdC1saXN0LWl0ZW0gKm5nSWY9XCJsYXllckFkZGl0aW9uQWxsb3dlZCAmJiBjYXRhbG9nVG9vbEluVG9vbGJhclwiPlxuICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+IDxzdmcgdmlld0JveD0nMCAwIDI0IDI0JyBmaXQ9JycgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pZFlNaWQgbWVldCcgZm9jdXNhYmxlPSdmYWxzZSc+IDxwYXRoIGQ9J00xNywxNEgxOVYxN0gyMlYxOUgxOVYyMkgxN1YxOUgxNFYxN0gxN1YxNE0xMSwxNkwyLDlMMTEsMkwyMCw5TDExLDE2TTExLDE4LjU0TDEyLDE3Ljc1VjE4QzEyLDE4LjcxIDEyLjEyLDE5LjM5IDEyLjM1LDIwTDExLDIxLjA3TDIsMTQuMDdMMy42MiwxMi44MUwxMSwxOC41NFonPjwvcGF0aD4gPC9zdmc+PC9tYXQtaWNvbj5cbiAgICAgIDxoNCBtYXRMaW5lIGNsYXNzPVwiY2F0YWxvZy10b29sIG1hdC10eXBvZ3JhcGh5XCIgKGNsaWNrKT1cImNhdGFsb2dFbWl0KClcIj5cbiAgICAgICAge3snaWdvLmludGVncmF0aW9uLm1hcFRvb2wuY2F0YWxvZy10b29sJyB8IHRyYW5zbGF0ZX19XG4gICAgICA8L2g0PlxuICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgICA8bWF0LWxpc3QtaXRlbSAqbmdJZj1cImxheWVyQWRkaXRpb25BbGxvd2VkICYmIGNvbnRleHRUb29sSW5Ub29sYmFyXCI+XG4gICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj4gPHN2ZyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyBmb2N1c2FibGU9J2ZhbHNlJz4gPHBhdGggZD0nTTEyLDE3LjI3TDE4LjE4LDIxTDE2LjU0LDEzLjk3TDIyLDkuMjRMMTQuODEsOC42MkwxMiwyTDkuMTksOC42MkwyLDkuMjRMNy40NSwxMy45N0w1LjgyLDIxTDEyLDE3LjI3Wic+PC9wYXRoPiA8L3N2Zz48L21hdC1pY29uPlxuICAgICAgPGg0IG1hdExpbmUgY2xhc3M9XCJjb250ZXh0LXRvb2wgbWF0LXR5cG9ncmFwaHlcIiAoY2xpY2spPVwiY29udGV4dEVtaXQoKVwiPlxuICAgICAgICB7eydpZ28uaW50ZWdyYXRpb24ubWFwVG9vbC5jb250ZXh0LXRvb2wnIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvaDQ+XG4gICAgPC9tYXQtbGlzdC1pdGVtPlxuICA8L21hdC1saXN0PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==