import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
function OgcFilterableFormComponent_igo_ogc_filter_selection_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-ogc-filter-selection", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("refreshFilters", ctx_r0.refreshFunc)("datasource", ctx_r0.datasource)("map", ctx_r0.map)("currentFilter", ctx_r0.currentFilter);
} }
function OgcFilterableFormComponent_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-ogc-filter-form", 4);
} if (rf & 2) {
    const currentFilter_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("currentFilter", currentFilter_r3)("refreshFilters", ctx_r2.refreshFunc)("datasource", ctx_r2.datasource)("map", ctx_r2.map);
} }
function OgcFilterableFormComponent_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OgcFilterableFormComponent_1_ng_template_0_Template, 1, 4, "ng-template", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r1.datasource.options.ogcFilters.interfaceOgcFilters);
} }
export class OgcFilterableFormComponent {
    constructor() {
        this.color = 'primary';
    }
    get refreshFunc() {
        return this.refreshFilters;
    }
    get advancedOgcFilters() {
        if (this.datasource.options.ogcFilters) {
            return this.datasource.options.ogcFilters.advancedOgcFilters;
        }
        return;
    }
    get currentFilter() {
        return this.datasource.options.ogcFilters.interfaceOgcFilters ?
            this.datasource.options.ogcFilters.interfaceOgcFilters[0] : undefined;
    }
}
OgcFilterableFormComponent.ɵfac = function OgcFilterableFormComponent_Factory(t) { return new (t || OgcFilterableFormComponent)(); };
OgcFilterableFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OgcFilterableFormComponent, selectors: [["igo-ogc-filterable-form"]], inputs: { datasource: "datasource", map: "map", refreshFilters: "refreshFilters" }, decls: 2, vars: 2, consts: [["igoListItem", "", 3, "refreshFilters", "datasource", "map", "currentFilter", 4, "ngIf"], [4, "ngIf"], ["igoListItem", "", 3, "refreshFilters", "datasource", "map", "currentFilter"], ["ngFor", "", 3, "ngForOf"], [3, "currentFilter", "refreshFilters", "datasource", "map"]], template: function OgcFilterableFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, OgcFilterableFormComponent_igo_ogc_filter_selection_0_Template, 1, 4, "igo-ogc-filter-selection", 0);
        i0.ɵɵtemplate(1, OgcFilterableFormComponent_1_Template, 1, 1, undefined, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.advancedOgcFilters);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.advancedOgcFilters && ctx.datasource.options.ogcFilters.editable);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterableFormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-ogc-filterable-form',
                templateUrl: './ogc-filterable-form.component.html'
            }]
    }], function () { return []; }, { datasource: [{
            type: Input
        }], map: [{
            type: Input
        }], refreshFilters: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlcmFibGUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvb2djLWZpbHRlcmFibGUtZm9ybS9vZ2MtZmlsdGVyYWJsZS1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9vZ2MtZmlsdGVyYWJsZS1mb3JtL29nYy1maWx0ZXJhYmxlLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQ0FqRCw4Q0FPMkI7OztJQUp6QixtREFBOEIsaUNBQUEsbUJBQUEsdUNBQUE7OztJQVVoQyx5Q0FLc0I7Ozs7SUFKcEIsZ0RBQStCLHNDQUFBLGlDQUFBLG1CQUFBOzs7SUFMakMsNkZBVWM7OztJQVBkLGtGQUE2RDs7QURKN0QsTUFBTSxPQUFPLDBCQUEwQjtJQTBCckM7UUFGTyxVQUFLLEdBQUcsU0FBUyxDQUFDO0lBRVYsQ0FBQztJQWxCaEIsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztTQUM5RDtRQUNELE9BQU87SUFDVCxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDOztvR0F0QlUsMEJBQTBCOzZFQUExQiwwQkFBMEI7UUNSdkMscUhBTzJCO1FBRTNCLDJFQVVjOztRQWxCWCw4Q0FBeUI7UUFTM0IsZUFBa0U7UUFBbEUsMkZBQWtFOzt1RkRGdEQsMEJBQTBCO2NBSnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsc0NBQXNDO2FBQ3BEO3NDQUdVLFVBQVU7a0JBQWxCLEtBQUs7WUFFRyxHQUFHO2tCQUFYLEtBQUs7WUFFRyxjQUFjO2tCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2djRmlsdGVyYWJsZURhdGFTb3VyY2UgfSBmcm9tICcuLi9zaGFyZWQvb2djLWZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLW9nYy1maWx0ZXJhYmxlLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vb2djLWZpbHRlcmFibGUtZm9ybS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgT2djRmlsdGVyYWJsZUZvcm1Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGRhdGFzb3VyY2U6IE9nY0ZpbHRlcmFibGVEYXRhU291cmNlO1xuXG4gIEBJbnB1dCgpIG1hcDogSWdvTWFwO1xuXG4gIEBJbnB1dCgpIHJlZnJlc2hGaWx0ZXJzOiAoKSA9PiB2b2lkO1xuXG4gIGdldCByZWZyZXNoRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoRmlsdGVycztcbiAgfVxuXG4gIGdldCBhZHZhbmNlZE9nY0ZpbHRlcnMoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGF0YXNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLmFkdmFuY2VkT2djRmlsdGVycztcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRGaWx0ZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5pbnRlcmZhY2VPZ2NGaWx0ZXJzID9cbiAgICB0aGlzLmRhdGFzb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLmludGVyZmFjZU9nY0ZpbHRlcnNbMF0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgY29sb3IgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIiwiPGlnby1vZ2MtZmlsdGVyLXNlbGVjdGlvblxuICAqbmdJZj1cIiFhZHZhbmNlZE9nY0ZpbHRlcnNcIlxuICBpZ29MaXN0SXRlbVxuICBbcmVmcmVzaEZpbHRlcnNdPVwicmVmcmVzaEZ1bmNcIlxuICBbZGF0YXNvdXJjZV09XCJkYXRhc291cmNlXCJcbiAgW21hcF09XCJtYXBcIlxuICBbY3VycmVudEZpbHRlcl09XCJjdXJyZW50RmlsdGVyXCI+XG48L2lnby1vZ2MtZmlsdGVyLXNlbGVjdGlvbj5cblxuPG5nLXRlbXBsYXRlIFxuKm5nSWY9XCJhZHZhbmNlZE9nY0ZpbHRlcnMgJiYgZGF0YXNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMuZWRpdGFibGVcIlxubmdGb3IgbGV0LWN1cnJlbnRGaWx0ZXIgXG5bbmdGb3JPZl09XCJkYXRhc291cmNlLm9wdGlvbnMub2djRmlsdGVycy5pbnRlcmZhY2VPZ2NGaWx0ZXJzXCI+XG48aWdvLW9nYy1maWx0ZXItZm9ybVxuICBbY3VycmVudEZpbHRlcl09XCJjdXJyZW50RmlsdGVyXCJcbiAgW3JlZnJlc2hGaWx0ZXJzXT1cInJlZnJlc2hGdW5jXCJcbiAgW2RhdGFzb3VyY2VdPVwiZGF0YXNvdXJjZVwiXG4gIFttYXBdPVwibWFwXCI+XG48L2lnby1vZ2MtZmlsdGVyLWZvcm0+XG48L25nLXRlbXBsYXRlPiJdfQ==