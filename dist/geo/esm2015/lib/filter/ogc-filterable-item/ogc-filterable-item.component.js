import { Component, Input } from '@angular/core';
import { OgcFilterOperator } from '../../filter/shared/ogc-filter.enum';
import { OgcFilterWriter } from '../shared/ogc-filter';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../shared/ogc-filter.service";
function OgcFilterableItemComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 8);
    i0.ɵɵlistener("click", function OgcFilterableItemComponent_mat_icon_1_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.toggleFiltersCollapsed(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(6);
    i0.ɵɵproperty("target", _r4)("collapsed", ctx_r0.filtersCollapsed);
} }
const _c0 = function (a0) { return { "cursor": a0 }; };
function OgcFilterableItemComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h4", 9);
    i0.ɵɵlistener("click", function OgcFilterableItemComponent_h4_2_Template_h4_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.toggleLegendOnClick(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c0, ctx_r1.filtersCollapsed ? "default" : "pointer"))("matTooltip", ctx_r1.layer.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.layer.title);
} }
function OgcFilterableItemComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function OgcFilterableItemComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.addFilterToSequence(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r2.addFilterDisabled())("matTooltip", i0.ɵɵpipeBind1(1, 3, "igo.geo.filter.addFilter"))("color", ctx_r2.color);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function OgcFilterableItemComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function OgcFilterableItemComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.layer.visible = !ctx_r13.layer.visible; });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 13);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r3.layer.visible ? "primary" : "default")("matTooltip", ctx_r3.layer.visible ? i0.ɵɵpipeBind1(1, 4, "igo.geo.layer.hideLayer") : i0.ɵɵpipeBind1(2, 6, "igo.geo.layer.showLayer"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c1, i0.ɵɵpipeBind1(4, 8, ctx_r3.inResolutionRange$) === false))("svgIcon", ctx_r3.layer.visible ? "eye" : "eye-off");
} }
function OgcFilterableItemComponent_div_7_igo_layer_legend_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-layer-legend", 17);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("layer", ctx_r16.layer);
} }
function OgcFilterableItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14, 15);
    i0.ɵɵtemplate(2, OgcFilterableItemComponent_div_7_igo_layer_legend_2_Template, 1, 1, "igo-layer-legend", 16);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 1, ctx_r5.showLegend$));
} }
function OgcFilterableItemComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 18);
    i0.ɵɵelement(1, "mat-divider");
    i0.ɵɵelementStart(2, "mat-checkbox", 19);
    i0.ɵɵlistener("change", function OgcFilterableItemComponent_section_9_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.changeOgcFilterType($event); })("ngModelChange", function OgcFilterableItemComponent_section_9_Template_mat_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.datasource.options.ogcFilters.advancedOgcFilters = $event; });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r6.datasource.options.ogcFilters.advancedOgcFilters);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 2, "igo.geo.filter.advancedOgcFilters"), " ");
} }
export class OgcFilterableItemComponent {
    constructor(ogcFilterService) {
        this.ogcFilterService = ogcFilterService;
        this.color = 'primary';
        this.defaultLogicalParent = OgcFilterOperator.And;
        this.hasActiveSpatialFilter = false;
        this.filtersAreEditable = true;
        this.filtersCollapsed = true;
        this.hasSelector = false;
        this.showLegend$ = new BehaviorSubject(false);
        this.inResolutionRange$ = new BehaviorSubject(true);
        this.header = true;
        this.ogcFilterWriter = new OgcFilterWriter();
    }
    get refreshFunc() {
        return this.refreshFilters.bind(this);
    }
    get datasource() {
        return this.layer.dataSource;
    }
    ngOnInit() {
        const ogcFilters = this.datasource.options.ogcFilters;
        if ((ogcFilters.pushButtons && ogcFilters.pushButtons.bundles.length > 0) ||
            (ogcFilters.checkboxes && ogcFilters.checkboxes.bundles.length > 0) ||
            (ogcFilters.radioButtons && ogcFilters.radioButtons.bundles.length > 0) ||
            (ogcFilters.select && ogcFilters.select.bundles.length > 0)) {
            if (ogcFilters.advancedOgcFilters === undefined) {
                ogcFilters.advancedOgcFilters = false;
            }
            this.hasSelector = true;
        }
        switch (this.datasource.options.type) {
            case 'wms':
                this.ogcFilterService.setOgcWMSFiltersOptions(this.datasource);
                break;
            case 'wfs':
                this.ogcFilterService.setOgcWFSFiltersOptions(this.datasource);
                break;
            default:
                break;
        }
        if (ogcFilters) {
            if (ogcFilters.interfaceOgcFilters) {
                this.lastRunOgcFilter = JSON.parse(JSON.stringify(ogcFilters.interfaceOgcFilters));
                if (ogcFilters.interfaceOgcFilters.filter(f => f.wkt_geometry).length >= 1) {
                    this.hasActiveSpatialFilter = true;
                }
            }
            this.filtersAreEditable = ogcFilters.editable
                ? ogcFilters.editable
                : false;
        }
        const resolution$ = this.layer.map.viewController.resolution$;
        this.resolution$$ = resolution$.subscribe(() => {
            this.inResolutionRange$.next(this.layer.isInResolutionsRange);
        });
    }
    ngOnDestroy() {
        this.resolution$$.unsubscribe();
    }
    addFilterToSequence() {
        this.filtersCollapsed = false;
        const interfaceOgcFilters = this.datasource
            .options.ogcFilters.interfaceOgcFilters;
        const arr = interfaceOgcFilters || [];
        const lastLevel = arr.length === 0 ? 0 : arr[arr.length - 1].level;
        let firstFieldName = '';
        const includedFields = this.datasource.options.sourceFields.filter(f => !f.excludeFromOgcFilters);
        if (includedFields.length > 0) {
            firstFieldName =
                includedFields[0].name === undefined ? '' : includedFields[0].name;
        }
        let fieldNameGeometry;
        const datasourceOptions = this.datasource
            .options;
        if (datasourceOptions.fieldNameGeometry) {
            fieldNameGeometry = datasourceOptions.fieldNameGeometry;
        }
        else if (this.datasource.options.paramsWFS &&
            this.datasource.options.paramsWFS.fieldNameGeometry) {
            fieldNameGeometry = this.datasource.options.paramsWFS
                .fieldNameGeometry;
        }
        const allowedOperators = this.ogcFilterWriter.computeAllowedOperators(this.datasource.options.sourceFields, firstFieldName, this.datasource.options.ogcFilters.allowedOperatorsType);
        const firstOperatorName = Object.keys(allowedOperators)[0];
        arr.push(this.ogcFilterWriter.addInterfaceFilter({
            propertyName: firstFieldName,
            operator: firstOperatorName,
            active: true,
            igoSpatialSelector: 'fixedExtent',
            srsName: this.map.projection,
        }, fieldNameGeometry, lastLevel, this.defaultLogicalParent));
        this.datasource.options.ogcFilters.interfaceOgcFilters = arr;
    }
    refreshFilters(force) {
        if (force === true) {
            this.lastRunOgcFilter = undefined;
        }
        const ogcFilters = this.datasource.options.ogcFilters;
        const activeFilters = ogcFilters.interfaceOgcFilters ?
            ogcFilters.interfaceOgcFilters.filter(f => f.active === true) : [];
        if (activeFilters.length === 0) {
            ogcFilters.filters = undefined;
            ogcFilters.filtered = false;
        }
        if (activeFilters.length > 1) {
            activeFilters[0].parentLogical = activeFilters[1].parentLogical;
        }
        if (activeFilters.filter(af => ['Contains', 'Intersects', 'Within'].indexOf(af.operator) !== -1).length === 0) {
            this.hasActiveSpatialFilter = false;
        }
        else {
            this.hasActiveSpatialFilter = true;
        }
        if (!(JSON.stringify(this.lastRunOgcFilter) === JSON.stringify(activeFilters))) {
            if (this.layer.dataSource.options.type === 'wfs') {
                const ogcDataSource = this.layer.dataSource;
                const ogcLayer = ogcDataSource.options.ogcFilters;
                ogcLayer.filters = this.ogcFilterWriter.rebuiltIgoOgcFilterObjectFromSequence(activeFilters);
                this.layer.dataSource.ol.refresh();
            }
            else if (this.layer.dataSource.options.type === 'wms' &&
                ogcFilters.enabled) {
                let rebuildFilter = '';
                if (activeFilters.length >= 1) {
                    const ogcDataSource = this.layer.dataSource;
                    const ogcLayer = ogcDataSource.options.ogcFilters;
                    ogcLayer.filters = this.ogcFilterWriter.rebuiltIgoOgcFilterObjectFromSequence(activeFilters);
                    rebuildFilter = this.ogcFilterWriter.buildFilter(ogcLayer.filters, undefined, undefined, this.layer.dataSource.options.fieldNameGeometry, ogcDataSource.options);
                }
                this.ogcFilterService.filterByOgc(this.datasource, rebuildFilter);
                this.datasource.options.ogcFilters.filtered =
                    activeFilters.length === 0 ? false : true;
            }
            this.lastRunOgcFilter = JSON.parse(JSON.stringify(activeFilters));
        }
        else {
            // identical filter. Nothing triggered
        }
        this.layer.dataSource.setOgcFilters(ogcFilters, true);
    }
    setVisible() {
        this.layer.visible = true;
    }
    isAdvancedOgcFilters() {
        return this.datasource.options.ogcFilters.advancedOgcFilters;
    }
    addFilterDisabled() {
        return (!this.datasource.options.sourceFields ||
            this.datasource.options.sourceFields.length === 0);
    }
    changeOgcFiltersAdvancedOgcFilters(value) {
        this.datasource.options.ogcFilters.advancedOgcFilters = value;
    }
    changeOgcFilterType(isAdvancedOgcFilters) {
        this.changeOgcFiltersAdvancedOgcFilters(isAdvancedOgcFilters.checked);
        if (isAdvancedOgcFilters.checked) {
            this.refreshFilters(true);
        }
    }
    toggleLegend(collapsed) {
        this.layer.legendCollapsed = collapsed;
        this.showLegend$.next(!collapsed);
    }
    toggleLegendOnClick() {
        if (!this.filtersCollapsed) {
            this.toggleLegend(this.showLegend$.value);
        }
    }
    toggleFiltersCollapsed() {
        this.filtersCollapsed = !this.filtersCollapsed;
    }
}
OgcFilterableItemComponent.ɵfac = function OgcFilterableItemComponent_Factory(t) { return new (t || OgcFilterableItemComponent)(i0.ɵɵdirectiveInject(i1.OGCFilterService)); };
OgcFilterableItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OgcFilterableItemComponent, selectors: [["igo-ogc-filterable-item"]], inputs: { layer: "layer", map: "map", header: "header" }, decls: 10, vars: 9, consts: [["class", "igo-chevron", "mat-list-avatar", "", "igoCollapse", "", "svgIcon", "chevron-up", 3, "target", "collapsed", "click", 4, "ngIf"], ["matLine", "", "matTooltipShowDelay", "500", 3, "ngStyle", "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "disabled", "matTooltip", "color", "click", 4, "ngIf"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click", 4, "ngIf"], ["ogcFilters", ""], ["class", "igo-layer-legend-container", 4, "ngIf"], [3, "datasource", "map", "refreshFilters"], ["class", "mat-typography advancedOgcFilters", 4, "ngIf"], ["mat-list-avatar", "", "igoCollapse", "", "svgIcon", "chevron-up", 1, "igo-chevron", 3, "target", "collapsed", "click"], ["matLine", "", "matTooltipShowDelay", "500", 3, "ngStyle", "matTooltip", "click"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "disabled", "matTooltip", "color", "click"], ["svgIcon", "plus"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click"], [3, "ngClass", "svgIcon"], [1, "igo-layer-legend-container"], ["legend", ""], [3, "layer", 4, "ngIf"], [3, "layer"], [1, "mat-typography", "advancedOgcFilters"], ["labelPosition", "before", 3, "ngModel", "change", "ngModelChange"]], template: function OgcFilterableItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list-item");
        i0.ɵɵtemplate(1, OgcFilterableItemComponent_mat_icon_1_Template, 1, 2, "mat-icon", 0);
        i0.ɵɵtemplate(2, OgcFilterableItemComponent_h4_2_Template, 2, 5, "h4", 1);
        i0.ɵɵtemplate(3, OgcFilterableItemComponent_button_3_Template, 3, 5, "button", 2);
        i0.ɵɵtemplate(4, OgcFilterableItemComponent_button_4_Template, 5, 12, "button", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", null, 4);
        i0.ɵɵtemplate(7, OgcFilterableItemComponent_div_7_Template, 4, 3, "div", 5);
        i0.ɵɵelement(8, "igo-ogc-filterable-form", 6);
        i0.ɵɵtemplate(9, OgcFilterableItemComponent_section_9_Template, 5, 4, "section", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.header);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.header);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isAdvancedOgcFilters() && ctx.filtersAreEditable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.header);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.header);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("datasource", ctx.datasource)("map", ctx.map)("refreshFilters", ctx.refreshFunc);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasSelector && ctx.filtersAreEditable);
    } }, styles: ["[_nghost-%COMP%]{overflow:hidden}.advancedOgcFilters[_ngcontent-%COMP%]{text-align:center;width:100%;display:inline-block}.mat-list-item[_ngcontent-%COMP%]{height:auto}.igo-layer-legend-container[_ngcontent-%COMP%]{padding-left:1.125em;width:calc(100% - 18px)}mat-icon.disabled[_ngcontent-%COMP%]{color:#00000061}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterableItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-ogc-filterable-item',
                templateUrl: './ogc-filterable-item.component.html',
                styleUrls: ['./ogc-filterable-item.component.scss']
            }]
    }], function () { return [{ type: i1.OGCFilterService }]; }, { layer: [{
            type: Input
        }], map: [{
            type: Input
        }], header: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlcmFibGUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvb2djLWZpbHRlcmFibGUtaXRlbS9vZ2MtZmlsdGVyYWJsZS1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9vZ2MtZmlsdGVyYWJsZS1pdGVtL29nYy1maWx0ZXJhYmxlLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBS3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBU3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7Ozs7SUNibkQsbUNBT3VCO0lBRHJCLGlOQUFrQztJQUVwQyxpQkFBVzs7OztJQUpHLDRCQUFxQixzQ0FBQTs7Ozs7SUFLbkMsNkJBQWlMO0lBQTdLLG1NQUErQjtJQUE4SSxZQUFlO0lBQUEsaUJBQUs7OztJQUFsSixxR0FBZ0Usa0NBQUE7SUFBOEQsZUFBZTtJQUFmLHdDQUFlOzs7O0lBQzlMLGtDQUN3RztJQUFoQyw2TUFBK0I7O0lBQ3JHLCtCQUFvQztJQUN0QyxpQkFBUzs7O0lBSG9ELHFEQUFnQyxnRUFBQSx1QkFBQTs7Ozs7SUFJN0Ysa0NBUzJDO0lBQXpDLDhOQUF3Qzs7O0lBQ3hDLCtCQUdXOztJQUNiLGlCQUFTOzs7SUFaUCxvRUFBK0Msd0lBQUE7SUFTN0MsZUFBNEQ7SUFBNUQsZ0hBQTRELHFEQUFBOzs7SUFROUQsdUNBQ21COzs7SUFEMkIscUNBQWU7OztJQUQvRCxtQ0FBK0Q7SUFDN0QsNEdBQ21COztJQUNy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LGVBQXVDO1FBQXZDLGdFQUF1Qzs7dUZEbkJ0QywwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEO21FQWNVLEtBQUs7a0JBQWIsS0FBSztZQUVHLEdBQUc7a0JBQVgsS0FBSztZQUVHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9sYXllcic7XG5pbXBvcnQgeyBXTVNEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvd21zLWRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgV0ZTRGF0YVNvdXJjZU9wdGlvbnNQYXJhbXMgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy93ZnMtZGF0YXNvdXJjZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT2djRmlsdGVyT3BlcmF0b3IgfSBmcm9tICcuLi8uLi9maWx0ZXIvc2hhcmVkL29nYy1maWx0ZXIuZW51bSc7XG5cbmltcG9ydCB7XG4gIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlLFxuICBPZ2NGaWx0ZXJzT3B0aW9ucyxcbiAgT2djSW50ZXJmYWNlRmlsdGVyT3B0aW9uc1xufSBmcm9tICcuLi9zaGFyZWQvb2djLWZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT0dDRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9vZ2MtZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwJztcbmltcG9ydCB7IE9nY0ZpbHRlcldyaXRlciB9IGZyb20gJy4uL3NoYXJlZC9vZ2MtZmlsdGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1vZ2MtZmlsdGVyYWJsZS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29nYy1maWx0ZXJhYmxlLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vZ2MtZmlsdGVyYWJsZS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT2djRmlsdGVyYWJsZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBjb2xvciA9ICdwcmltYXJ5JztcbiAgcHJpdmF0ZSBsYXN0UnVuT2djRmlsdGVyO1xuICBwcml2YXRlIGRlZmF1bHRMb2dpY2FsUGFyZW50ID0gT2djRmlsdGVyT3BlcmF0b3IuQW5kO1xuICBwdWJsaWMgaGFzQWN0aXZlU3BhdGlhbEZpbHRlciA9IGZhbHNlO1xuICBwdWJsaWMgZmlsdGVyc0FyZUVkaXRhYmxlID0gdHJ1ZTtcbiAgcHVibGljIGZpbHRlcnNDb2xsYXBzZWQgPSB0cnVlO1xuICBwdWJsaWMgaGFzU2VsZWN0b3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd0xlZ2VuZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBpblJlc29sdXRpb25SYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XG4gIHByaXZhdGUgcmVzb2x1dGlvbiQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb2djRmlsdGVyV3JpdGVyO1xuXG4gIEBJbnB1dCgpIGxheWVyOiBMYXllcjtcblxuICBASW5wdXQoKSBtYXA6IElnb01hcDtcblxuICBASW5wdXQoKSBoZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGdldCByZWZyZXNoRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoRmlsdGVycy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGRhdGFzb3VyY2UoKTogT2djRmlsdGVyYWJsZURhdGFTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLmxheWVyLmRhdGFTb3VyY2UgYXMgT2djRmlsdGVyYWJsZURhdGFTb3VyY2U7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9nY0ZpbHRlclNlcnZpY2U6IE9HQ0ZpbHRlclNlcnZpY2UpIHtcbiAgICB0aGlzLm9nY0ZpbHRlcldyaXRlciA9IG5ldyBPZ2NGaWx0ZXJXcml0ZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG9nY0ZpbHRlcnMgPSB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzO1xuICAgIGlmIChcbiAgICAgIChvZ2NGaWx0ZXJzLnB1c2hCdXR0b25zICYmIG9nY0ZpbHRlcnMucHVzaEJ1dHRvbnMuYnVuZGxlcy5sZW5ndGggPiAwKSB8fFxuICAgICAgKG9nY0ZpbHRlcnMuY2hlY2tib3hlcyAmJiBvZ2NGaWx0ZXJzLmNoZWNrYm94ZXMuYnVuZGxlcy5sZW5ndGggPiAwKSB8fFxuICAgICAgKG9nY0ZpbHRlcnMucmFkaW9CdXR0b25zICYmIG9nY0ZpbHRlcnMucmFkaW9CdXR0b25zLmJ1bmRsZXMubGVuZ3RoID4gMCkgfHxcbiAgICAgIChvZ2NGaWx0ZXJzLnNlbGVjdCAmJiBvZ2NGaWx0ZXJzLnNlbGVjdC5idW5kbGVzLmxlbmd0aCA+IDApKSB7XG4gICAgICBpZiAob2djRmlsdGVycy5hZHZhbmNlZE9nY0ZpbHRlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvZ2NGaWx0ZXJzLmFkdmFuY2VkT2djRmlsdGVycyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5oYXNTZWxlY3RvciA9IHRydWU7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy50eXBlKSB7XG4gICAgICBjYXNlICd3bXMnOlxuICAgICAgICB0aGlzLm9nY0ZpbHRlclNlcnZpY2Uuc2V0T2djV01TRmlsdGVyc09wdGlvbnModGhpcy5kYXRhc291cmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3ZnMnOlxuICAgICAgICB0aGlzLm9nY0ZpbHRlclNlcnZpY2Uuc2V0T2djV0ZTRmlsdGVyc09wdGlvbnModGhpcy5kYXRhc291cmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAob2djRmlsdGVycykge1xuICAgICAgaWYgKG9nY0ZpbHRlcnMuaW50ZXJmYWNlT2djRmlsdGVycykge1xuICAgICAgICB0aGlzLmxhc3RSdW5PZ2NGaWx0ZXIgPSBKU09OLnBhcnNlKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG9nY0ZpbHRlcnMuaW50ZXJmYWNlT2djRmlsdGVycylcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG9nY0ZpbHRlcnMuaW50ZXJmYWNlT2djRmlsdGVycy5maWx0ZXIoZiA9PiBmLndrdF9nZW9tZXRyeSkubGVuZ3RoID49IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5oYXNBY3RpdmVTcGF0aWFsRmlsdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbHRlcnNBcmVFZGl0YWJsZSA9IG9nY0ZpbHRlcnMuZWRpdGFibGVcbiAgICAgICAgPyBvZ2NGaWx0ZXJzLmVkaXRhYmxlXG4gICAgICAgIDogZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzb2x1dGlvbiQgPSB0aGlzLmxheWVyLm1hcC52aWV3Q29udHJvbGxlci5yZXNvbHV0aW9uJDtcbiAgICB0aGlzLnJlc29sdXRpb24kJCA9IHJlc29sdXRpb24kLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmluUmVzb2x1dGlvblJhbmdlJC5uZXh0KHRoaXMubGF5ZXIuaXNJblJlc29sdXRpb25zUmFuZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZXNvbHV0aW9uJCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGFkZEZpbHRlclRvU2VxdWVuY2UoKSB7XG4gICAgdGhpcy5maWx0ZXJzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgY29uc3QgaW50ZXJmYWNlT2djRmlsdGVyczogT2djSW50ZXJmYWNlRmlsdGVyT3B0aW9uc1tdID0gdGhpcy5kYXRhc291cmNlXG4gICAgICAub3B0aW9ucy5vZ2NGaWx0ZXJzLmludGVyZmFjZU9nY0ZpbHRlcnM7XG4gICAgY29uc3QgYXJyID0gaW50ZXJmYWNlT2djRmlsdGVycyB8fCBbXTtcbiAgICBjb25zdCBsYXN0TGV2ZWwgPSBhcnIubGVuZ3RoID09PSAwID8gMCA6IGFyclthcnIubGVuZ3RoIC0gMV0ubGV2ZWw7XG4gICAgbGV0IGZpcnN0RmllbGROYW1lID0gJyc7XG4gICAgY29uc3QgaW5jbHVkZWRGaWVsZHMgPSB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5zb3VyY2VGaWVsZHMuZmlsdGVyKGYgPT4gIWYuZXhjbHVkZUZyb21PZ2NGaWx0ZXJzKTtcbiAgICBpZiAoaW5jbHVkZWRGaWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RGaWVsZE5hbWUgPVxuICAgICAgICBpbmNsdWRlZEZpZWxkc1swXS5uYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IGluY2x1ZGVkRmllbGRzWzBdLm5hbWU7XG4gICAgfVxuICAgIGxldCBmaWVsZE5hbWVHZW9tZXRyeTtcbiAgICBjb25zdCBkYXRhc291cmNlT3B0aW9ucyA9IHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm9wdGlvbnMgYXMgV0ZTRGF0YVNvdXJjZU9wdGlvbnNQYXJhbXM7XG4gICAgaWYgKGRhdGFzb3VyY2VPcHRpb25zLmZpZWxkTmFtZUdlb21ldHJ5KSB7XG4gICAgICBmaWVsZE5hbWVHZW9tZXRyeSA9IGRhdGFzb3VyY2VPcHRpb25zLmZpZWxkTmFtZUdlb21ldHJ5O1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAodGhpcy5kYXRhc291cmNlLm9wdGlvbnMgYXMgYW55KS5wYXJhbXNXRlMgJiZcbiAgICAgICh0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucyBhcyBhbnkpLnBhcmFtc1dGUy5maWVsZE5hbWVHZW9tZXRyeVxuICAgICkge1xuICAgICAgZmllbGROYW1lR2VvbWV0cnkgPSAodGhpcy5kYXRhc291cmNlLm9wdGlvbnMgYXMgYW55KS5wYXJhbXNXRlNcbiAgICAgICAgLmZpZWxkTmFtZUdlb21ldHJ5O1xuICAgIH1cbiAgICBjb25zdCBhbGxvd2VkT3BlcmF0b3JzID0gdGhpcy5vZ2NGaWx0ZXJXcml0ZXIuY29tcHV0ZUFsbG93ZWRPcGVyYXRvcnMoXG4gICAgICB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5zb3VyY2VGaWVsZHMsXG4gICAgICBmaXJzdEZpZWxkTmFtZSxcbiAgICAgIHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMuYWxsb3dlZE9wZXJhdG9yc1R5cGUpO1xuICAgIGNvbnN0IGZpcnN0T3BlcmF0b3JOYW1lID0gT2JqZWN0LmtleXMoYWxsb3dlZE9wZXJhdG9ycylbMF07XG5cbiAgICBhcnIucHVzaChcbiAgICAgIHRoaXMub2djRmlsdGVyV3JpdGVyLmFkZEludGVyZmFjZUZpbHRlcihcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnR5TmFtZTogZmlyc3RGaWVsZE5hbWUsXG4gICAgICAgICAgb3BlcmF0b3I6IGZpcnN0T3BlcmF0b3JOYW1lLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBpZ29TcGF0aWFsU2VsZWN0b3I6ICdmaXhlZEV4dGVudCcsXG4gICAgICAgICAgc3JzTmFtZTogdGhpcy5tYXAucHJvamVjdGlvbixcbiAgICAgICAgfSBhcyBPZ2NJbnRlcmZhY2VGaWx0ZXJPcHRpb25zLFxuICAgICAgICBmaWVsZE5hbWVHZW9tZXRyeSxcbiAgICAgICAgbGFzdExldmVsLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2dpY2FsUGFyZW50XG4gICAgICApXG4gICAgKTtcbiAgICB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLmludGVyZmFjZU9nY0ZpbHRlcnMgPSBhcnI7XG4gIH1cblxuICByZWZyZXNoRmlsdGVycyhmb3JjZT86IGJvb2xlYW4pIHtcbiAgICBpZiAoZm9yY2UgPT09IHRydWUpIHtcbiAgICAgIHRoaXMubGFzdFJ1bk9nY0ZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgb2djRmlsdGVyczogT2djRmlsdGVyc09wdGlvbnMgPSB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzO1xuICAgIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSBvZ2NGaWx0ZXJzLmludGVyZmFjZU9nY0ZpbHRlcnMgP1xuICAgICAgb2djRmlsdGVycy5pbnRlcmZhY2VPZ2NGaWx0ZXJzLmZpbHRlcihmID0+IGYuYWN0aXZlID09PSB0cnVlKSA6IFtdO1xuICAgIGlmIChhY3RpdmVGaWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgb2djRmlsdGVycy5maWx0ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgb2djRmlsdGVycy5maWx0ZXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlRmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICBhY3RpdmVGaWx0ZXJzWzBdLnBhcmVudExvZ2ljYWwgPSBhY3RpdmVGaWx0ZXJzWzFdLnBhcmVudExvZ2ljYWw7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGFjdGl2ZUZpbHRlcnMuZmlsdGVyKFxuICAgICAgICBhZiA9PiBbJ0NvbnRhaW5zJywgJ0ludGVyc2VjdHMnLCAnV2l0aGluJ10uaW5kZXhPZihhZi5vcGVyYXRvcikgIT09IC0xXG4gICAgICApLmxlbmd0aCA9PT0gMFxuICAgICkge1xuICAgICAgdGhpcy5oYXNBY3RpdmVTcGF0aWFsRmlsdGVyID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzQWN0aXZlU3BhdGlhbEZpbHRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgIShKU09OLnN0cmluZ2lmeSh0aGlzLmxhc3RSdW5PZ2NGaWx0ZXIpID09PSBKU09OLnN0cmluZ2lmeShhY3RpdmVGaWx0ZXJzKSlcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy50eXBlID09PSAnd2ZzJykge1xuICAgICAgICBjb25zdCBvZ2NEYXRhU291cmNlOiBhbnkgPSB0aGlzLmxheWVyLmRhdGFTb3VyY2U7XG4gICAgICAgIGNvbnN0IG9nY0xheWVyOiBPZ2NGaWx0ZXJzT3B0aW9ucyA9IG9nY0RhdGFTb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzO1xuICAgICAgICBvZ2NMYXllci5maWx0ZXJzID0gdGhpcy5vZ2NGaWx0ZXJXcml0ZXIucmVidWlsdElnb09nY0ZpbHRlck9iamVjdEZyb21TZXF1ZW5jZShcbiAgICAgICAgICBhY3RpdmVGaWx0ZXJzXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGF5ZXIuZGF0YVNvdXJjZS5vbC5yZWZyZXNoKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy50eXBlID09PSAnd21zJyAmJlxuICAgICAgICBvZ2NGaWx0ZXJzLmVuYWJsZWRcbiAgICAgICkge1xuICAgICAgICBsZXQgcmVidWlsZEZpbHRlciA9ICcnO1xuICAgICAgICBpZiAoYWN0aXZlRmlsdGVycy5sZW5ndGggPj0gMSkge1xuICAgICAgICAgIGNvbnN0IG9nY0RhdGFTb3VyY2U6IGFueSA9IHRoaXMubGF5ZXIuZGF0YVNvdXJjZTtcbiAgICAgICAgICBjb25zdCBvZ2NMYXllcjogT2djRmlsdGVyc09wdGlvbnMgPSBvZ2NEYXRhU291cmNlLm9wdGlvbnMub2djRmlsdGVycztcbiAgICAgICAgICBvZ2NMYXllci5maWx0ZXJzID0gdGhpcy5vZ2NGaWx0ZXJXcml0ZXIucmVidWlsdElnb09nY0ZpbHRlck9iamVjdEZyb21TZXF1ZW5jZShcbiAgICAgICAgICAgIGFjdGl2ZUZpbHRlcnNcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlYnVpbGRGaWx0ZXIgPSB0aGlzLm9nY0ZpbHRlcldyaXRlci5idWlsZEZpbHRlcihcbiAgICAgICAgICAgIG9nY0xheWVyLmZpbHRlcnMsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAodGhpcy5sYXllci5kYXRhU291cmNlLm9wdGlvbnMgYXMgYW55KS5maWVsZE5hbWVHZW9tZXRyeSxcbiAgICAgICAgICAgIG9nY0RhdGFTb3VyY2Uub3B0aW9uc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZ2NGaWx0ZXJTZXJ2aWNlLmZpbHRlckJ5T2djKFxuICAgICAgICAgIHRoaXMuZGF0YXNvdXJjZSBhcyBXTVNEYXRhU291cmNlLFxuICAgICAgICAgIHJlYnVpbGRGaWx0ZXJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5maWx0ZXJlZCA9XG4gICAgICAgICAgYWN0aXZlRmlsdGVycy5sZW5ndGggPT09IDAgPyBmYWxzZSA6IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGFzdFJ1bk9nY0ZpbHRlciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWN0aXZlRmlsdGVycykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZGVudGljYWwgZmlsdGVyLiBOb3RoaW5nIHRyaWdnZXJlZFxuICAgIH1cbiAgICAodGhpcy5sYXllci5kYXRhU291cmNlIGFzIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlKS5zZXRPZ2NGaWx0ZXJzKG9nY0ZpbHRlcnMsIHRydWUpO1xuICB9XG5cbiAgcHVibGljIHNldFZpc2libGUoKSB7XG4gICAgdGhpcy5sYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0FkdmFuY2VkT2djRmlsdGVycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5hZHZhbmNlZE9nY0ZpbHRlcnM7XG4gIH1cblxuICBwdWJsaWMgYWRkRmlsdGVyRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5zb3VyY2VGaWVsZHMgfHxcbiAgICAgIHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLnNvdXJjZUZpZWxkcy5sZW5ndGggPT09IDBcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VPZ2NGaWx0ZXJzQWR2YW5jZWRPZ2NGaWx0ZXJzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5hZHZhbmNlZE9nY0ZpbHRlcnMgPSB2YWx1ZTtcbiAgfVxuXG4gIGNoYW5nZU9nY0ZpbHRlclR5cGUoaXNBZHZhbmNlZE9nY0ZpbHRlcnMpIHtcbiAgICB0aGlzLmNoYW5nZU9nY0ZpbHRlcnNBZHZhbmNlZE9nY0ZpbHRlcnMoaXNBZHZhbmNlZE9nY0ZpbHRlcnMuY2hlY2tlZCk7XG4gICAgaWYgKGlzQWR2YW5jZWRPZ2NGaWx0ZXJzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMucmVmcmVzaEZpbHRlcnModHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVMZWdlbmQoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5sYXllci5sZWdlbmRDb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgdGhpcy5zaG93TGVnZW5kJC5uZXh0KCFjb2xsYXBzZWQpO1xuICB9XG5cbiAgdG9nZ2xlTGVnZW5kT25DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuZmlsdGVyc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy50b2dnbGVMZWdlbmQodGhpcy5zaG93TGVnZW5kJC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRmlsdGVyc0NvbGxhcHNlZCgpIHtcbiAgICB0aGlzLmZpbHRlcnNDb2xsYXBzZWQgPSAhdGhpcy5maWx0ZXJzQ29sbGFwc2VkO1xuICB9XG59XG4iLCI8bWF0LWxpc3QtaXRlbT5cblxuICA8bWF0LWljb25cbiAgICAqbmdJZj1cImhlYWRlclwiXG4gICAgY2xhc3M9XCJpZ28tY2hldnJvblwiXG4gICAgbWF0LWxpc3QtYXZhdGFyXG4gICAgaWdvQ29sbGFwc2UgW3RhcmdldF09XCJvZ2NGaWx0ZXJzXCJcbiAgICBbY29sbGFwc2VkXT1cImZpbHRlcnNDb2xsYXBzZWRcIlxuICAgIChjbGljayk9XCJ0b2dnbGVGaWx0ZXJzQ29sbGFwc2VkKClcIlxuICAgIHN2Z0ljb249XCJjaGV2cm9uLXVwXCI+XG4gIDwvbWF0LWljb24+XG4gIDxoNCAoY2xpY2spPVwidG9nZ2xlTGVnZW5kT25DbGljaygpXCIgKm5nSWY9XCJoZWFkZXJcIiBbbmdTdHlsZV09XCJ7J2N1cnNvcic6IGZpbHRlcnNDb2xsYXBzZWQgPyAnZGVmYXVsdCcgOiAncG9pbnRlcid9XCIgbWF0TGluZSBbbWF0VG9vbHRpcF09XCJsYXllci50aXRsZVwiIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIj57e2xheWVyLnRpdGxlfX08L2g0PlxuICAgIDxidXR0b24gKm5nSWY9XCJpc0FkdmFuY2VkT2djRmlsdGVycygpICYmIGZpbHRlcnNBcmVFZGl0YWJsZVwiIFtkaXNhYmxlZF09XCJhZGRGaWx0ZXJEaXNhYmxlZCgpXCIgbWF0LWljb24tYnV0dG9uIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uZmlsdGVyLmFkZEZpbHRlcicgfCB0cmFuc2xhdGVcIiBbY29sb3JdPVwiY29sb3JcIiAoY2xpY2spPVwiYWRkRmlsdGVyVG9TZXF1ZW5jZSgpXCI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cInBsdXNcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKm5nSWY9XCJoZWFkZXJcIlxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICBbY29sb3JdPVwibGF5ZXIudmlzaWJsZSA/ICdwcmltYXJ5JyA6ICdkZWZhdWx0J1wiXG4gICAgICBjb2xsYXBzaWJsZUJ1dHRvblxuICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgW21hdFRvb2x0aXBdPVwibGF5ZXIudmlzaWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICgnaWdvLmdlby5sYXllci5oaWRlTGF5ZXInIHwgdHJhbnNsYXRlKSA6XG4gICAgICAgICAgICAgICAgICAgICgnaWdvLmdlby5sYXllci5zaG93TGF5ZXInIHwgdHJhbnNsYXRlKVwiXG4gICAgICAoY2xpY2spPVwibGF5ZXIudmlzaWJsZSA9ICFsYXllci52aXNpYmxlXCI+XG4gICAgICA8bWF0LWljb25cbiAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiAoaW5SZXNvbHV0aW9uUmFuZ2UkIHwgYXN5bmMpPT09ZmFsc2V9XCJcbiAgICAgICAgW3N2Z0ljb25dPVwibGF5ZXIudmlzaWJsZSA/ICdleWUnIDogJ2V5ZS1vZmYnXCI+XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuPC9tYXQtbGlzdC1pdGVtPlxuXG48ZGl2ICNvZ2NGaWx0ZXJzPlxuICAgIDxkaXYgKm5nSWY9XCJoZWFkZXJcIiAjbGVnZW5kIGNsYXNzPVwiaWdvLWxheWVyLWxlZ2VuZC1jb250YWluZXJcIj5cbiAgICAgIDxpZ28tbGF5ZXItbGVnZW5kICpuZ0lmPVwic2hvd0xlZ2VuZCQgfCBhc3luY1wiIFtsYXllcl09XCJsYXllclwiPlxuICAgICAgPC9pZ28tbGF5ZXItbGVnZW5kPlxuICAgIDwvZGl2PlxuICA8aWdvLW9nYy1maWx0ZXJhYmxlLWZvcm0gW2RhdGFzb3VyY2VdPVwiZGF0YXNvdXJjZVwiIFttYXBdPVwibWFwXCIgW3JlZnJlc2hGaWx0ZXJzXT1cInJlZnJlc2hGdW5jXCI+XG4gIDwvaWdvLW9nYy1maWx0ZXJhYmxlLWZvcm0+XG5cbiAgPHNlY3Rpb24gKm5nSWY9XCJoYXNTZWxlY3RvciAmJiBmaWx0ZXJzQXJlRWRpdGFibGVcIiBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5IGFkdmFuY2VkT2djRmlsdGVyc1wiPlxuICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICAgIDxtYXQtY2hlY2tib3ggbGFiZWxQb3NpdGlvbj0nYmVmb3JlJyAoY2hhbmdlKT1cImNoYW5nZU9nY0ZpbHRlclR5cGUoJGV2ZW50KVwiXG4gICAgICBbKG5nTW9kZWwpXT1cImRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLmFkdmFuY2VkT2djRmlsdGVyc1wiPlxuICAgICAge3snaWdvLmdlby5maWx0ZXIuYWR2YW5jZWRPZ2NGaWx0ZXJzJyB8IHRyYW5zbGF0ZX19XG4gICAgPC9tYXQtY2hlY2tib3g+XG4gIDwvc2VjdGlvbj5cbjwvZGl2PiJdfQ==