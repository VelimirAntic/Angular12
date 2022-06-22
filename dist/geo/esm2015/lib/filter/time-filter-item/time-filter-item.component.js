import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../shared/time-filter.service";
const _c0 = function (a0) { return { disabled: a0 }; };
function TimeFilterItemComponent_mat_list_item_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function TimeFilterItemComponent_mat_list_item_0_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.layer.visible = !ctx_r5.layer.visible; });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 11);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r4.layer.visible ? "primary" : "default")("matTooltip", ctx_r4.layer.visible ? i0.ɵɵpipeBind1(1, 4, "igo.geo.layer.hideLayer") : i0.ɵɵpipeBind1(2, 6, "igo.geo.layer.showLayer"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0, i0.ɵɵpipeBind1(4, 8, ctx_r4.inResolutionRange$) === false))("svgIcon", ctx_r4.layer.visible ? "eye" : "eye-off");
} }
const _c1 = function (a0) { return { "cursor": a0 }; };
function TimeFilterItemComponent_mat_list_item_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 7);
    i0.ɵɵlistener("click", function TimeFilterItemComponent_mat_list_item_0_Template_mat_icon_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.toggleFiltersCollapsed(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "h4", 8);
    i0.ɵɵlistener("click", function TimeFilterItemComponent_mat_list_item_0_Template_h4_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.toggleLegendOnClick(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, TimeFilterItemComponent_mat_list_item_0_button_4_Template, 5, 12, "button", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("target", _r1)("collapsed", ctx_r0.filtersCollapsed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c1, ctx_r0.filtersCollapsed ? "default" : "pointer"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.layer.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.header);
} }
function TimeFilterItemComponent_igo_layer_legend_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-layer-legend", 12);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("layer", ctx_r3.layer);
} }
export class TimeFilterItemComponent {
    constructor(timeFilterService) {
        this.timeFilterService = timeFilterService;
        this.color = 'primary';
        this.showLegend$ = new BehaviorSubject(false);
        this.inResolutionRange$ = new BehaviorSubject(true);
        this.filtersCollapsed = false;
        this.header = true;
    }
    get datasource() {
        return this.layer.dataSource;
    }
    ngOnInit() {
        const resolution$ = this.layer.map.viewController.resolution$;
        this.resolution$$ = resolution$.subscribe(() => {
            this.inResolutionRange$.next(this.layer.isInResolutionsRange);
        });
    }
    ngOnDestroy() {
        this.resolution$$.unsubscribe();
    }
    handleYearChange(year) {
        this.timeFilterService.filterByYear(this.datasource, year);
    }
    handleDateChange(date) {
        this.timeFilterService.filterByDate(this.datasource, date);
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
    setVisible() {
        this.layer.visible = true;
    }
    toggleFiltersCollapsed() {
        this.filtersCollapsed = !this.filtersCollapsed;
    }
}
TimeFilterItemComponent.ɵfac = function TimeFilterItemComponent_Factory(t) { return new (t || TimeFilterItemComponent)(i0.ɵɵdirectiveInject(i1.TimeFilterService)); };
TimeFilterItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimeFilterItemComponent, selectors: [["igo-time-filter-item"]], inputs: { header: "header", layer: "layer" }, decls: 8, vars: 7, consts: [[4, "ngIf"], [1, "igo-datasource-filters-container"], ["filters", ""], [1, "igo-layer-legend-container"], ["legend", ""], [3, "layer", 4, "ngIf"], [3, "layer", "options", "currentValue", "change", "yearChange"], ["mat-list-avatar", "", "igoCollapse", "", "svgIcon", "chevron-up", 1, "igo-chevron", 3, "target", "collapsed", "click"], ["matLine", "", 3, "ngStyle", "click"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click"], [3, "ngClass", "svgIcon"], [3, "layer"]], template: function TimeFilterItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TimeFilterItemComponent_mat_list_item_0_Template, 5, 7, "mat-list-item", 0);
        i0.ɵɵelementStart(1, "div", 1, 2);
        i0.ɵɵelementStart(3, "div", 3, 4);
        i0.ɵɵtemplate(5, TimeFilterItemComponent_igo_layer_legend_5_Template, 1, 1, "igo-layer-legend", 5);
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "igo-time-filter-form", 6);
        i0.ɵɵlistener("change", function TimeFilterItemComponent_Template_igo_time_filter_form_change_7_listener($event) { return ctx.handleDateChange($event); })("yearChange", function TimeFilterItemComponent_Template_igo_time_filter_form_yearChange_7_listener($event) { return ctx.handleYearChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.header);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(6, 5, ctx.showLegend$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("layer", ctx.layer)("options", ctx.datasource.options.timeFilter)("currentValue", ctx.datasource.options.params.TIME);
    } }, styles: ["[_nghost-%COMP%]{overflow:hidden}.igo-datasource-filters-container[_ngcontent-%COMP%]{text-align:center;width:100%;display:inline-block;padding-top:5px}.igo-layer-legend-container[_ngcontent-%COMP%]{padding-left:1.125em;width:calc(100% - 18px)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeFilterItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-time-filter-item',
                templateUrl: './time-filter-item.component.html',
                styleUrls: ['./time-filter-item.component.scss']
            }]
    }], function () { return [{ type: i1.TimeFilterService }]; }, { header: [{
            type: Input
        }], layer: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1maWx0ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvdGltZS1maWx0ZXItaXRlbS90aW1lLWZpbHRlci1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci90aW1lLWZpbHRlci1pdGVtL3RpbWUtZmlsdGVyLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBS3BFLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7SUNPbkQsa0NBUzJDO0lBQXpDLHdPQUF3Qzs7O0lBQ3hDLCtCQUdXOztJQUNiLGlCQUFTOzs7SUFaUCxvRUFBK0Msd0lBQUE7SUFTN0MsZUFBNEQ7SUFBNUQsZ0hBQTRELHFEQUFBOzs7OztJQXZCbEUscUNBQThCO0lBQzVCLG1DQU93QjtJQUR0QixtTkFBa0M7SUFFcEMsaUJBQVc7SUFDWCw2QkFBOEc7SUFBMUcsME1BQStCO0lBQTJFLFlBQWU7SUFBQSxpQkFBSztJQUVsSSwrRkFjUztJQUVYLGlCQUFnQjs7OztJQXZCWixlQUFrQjtJQUFsQiw0QkFBa0Isc0NBQUE7SUFLZ0IsZUFBZ0U7SUFBaEUscUdBQWdFO0lBQVUsZUFBZTtJQUFmLHdDQUFlO0lBRXBILGVBQVk7SUFBWixvQ0FBWTs7O0lBb0JuQix1Q0FDbUI7OztJQUQyQixvQ0FBZTs7QURwQmpFLE1BQU0sT0FBTyx1QkFBdUI7SUFlbEMsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFkakQsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUN6QixnQkFBVyxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRSx1QkFBa0IsR0FBNkIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHekUscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBRXpCLFdBQU0sR0FBWSxJQUFJLENBQUM7SUFPMkIsQ0FBQztJQUg1RCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBc0MsQ0FBQztJQUMzRCxDQUFDO0lBR0QsUUFBUTtRQUNOLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUM3QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBK0I7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUF5QjtRQUN4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLFlBQVksQ0FBQyxTQUFrQjtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVNLFVBQVU7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFzQjtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakQsQ0FBQzs7OEZBckRVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDWnBDLDRGQTRCZ0I7UUFFaEIsaUNBQXVEO1FBQ3JELGlDQUFnRDtRQUM5QyxrR0FDbUI7O1FBQ3JCLGlCQUFNO1FBQ04sK0NBSzBDO1FBRHhDLDBIQUFVLDRCQUF3QixJQUFDLHFIQUNyQiw0QkFBd0IsSUFESDtRQUVyQyxpQkFBdUI7UUFDekIsaUJBQU07O1FBMUNVLGlDQUFZO1FBZ0NMLGVBQXlCO1FBQXpCLDREQUF5QjtRQUk1QyxlQUFnQjtRQUFoQixpQ0FBZ0IsOENBQUEsb0RBQUE7O3VGRHhCUCx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEO29FQVNVLE1BQU07a0JBQWQsS0FBSztZQUVHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9sYXllcic7XG5pbXBvcnQgeyBUaW1lRmlsdGVyYWJsZURhdGFTb3VyY2UgfSBmcm9tICcuLi9zaGFyZWQvdGltZS1maWx0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRpbWVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3RpbWUtZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXRpbWUtZmlsdGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZS1maWx0ZXItaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWUtZmlsdGVyLWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lRmlsdGVySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGNvbG9yID0gJ3ByaW1hcnknO1xuICBzaG93TGVnZW5kJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGluUmVzb2x1dGlvblJhbmdlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcbiAgcHJpdmF0ZSByZXNvbHV0aW9uJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBmaWx0ZXJzQ29sbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgaGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSBsYXllcjogTGF5ZXI7XG5cbiAgZ2V0IGRhdGFzb3VyY2UoKTogVGltZUZpbHRlcmFibGVEYXRhU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5sYXllci5kYXRhU291cmNlIGFzIFRpbWVGaWx0ZXJhYmxlRGF0YVNvdXJjZTtcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWVGaWx0ZXJTZXJ2aWNlOiBUaW1lRmlsdGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCByZXNvbHV0aW9uJCA9IHRoaXMubGF5ZXIubWFwLnZpZXdDb250cm9sbGVyLnJlc29sdXRpb24kO1xuICAgIHRoaXMucmVzb2x1dGlvbiQkID0gcmVzb2x1dGlvbiQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaW5SZXNvbHV0aW9uUmFuZ2UkLm5leHQodGhpcy5sYXllci5pc0luUmVzb2x1dGlvbnNSYW5nZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc29sdXRpb24kJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlWWVhckNoYW5nZSh5ZWFyOiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKSB7XG4gICAgdGhpcy50aW1lRmlsdGVyU2VydmljZS5maWx0ZXJCeVllYXIodGhpcy5kYXRhc291cmNlLCB5ZWFyKTtcbiAgfVxuXG4gIGhhbmRsZURhdGVDaGFuZ2UoZGF0ZTogRGF0ZSB8IFtEYXRlLCBEYXRlXSkge1xuICAgIHRoaXMudGltZUZpbHRlclNlcnZpY2UuZmlsdGVyQnlEYXRlKHRoaXMuZGF0YXNvdXJjZSwgZGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUxlZ2VuZChjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmxheWVyLmxlZ2VuZENvbGxhcHNlZCA9IGNvbGxhcHNlZDtcbiAgICB0aGlzLnNob3dMZWdlbmQkLm5leHQoIWNvbGxhcHNlZCk7XG4gIH1cblxuICB0b2dnbGVMZWdlbmRPbkNsaWNrKCkge1xuICAgIGlmICghdGhpcy5maWx0ZXJzQ29sbGFwc2VkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUxlZ2VuZCh0aGlzLnNob3dMZWdlbmQkLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0VmlzaWJsZSgpIHtcbiAgICB0aGlzLmxheWVyLnZpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlRmlsdGVyc0NvbGxhcHNlZCgpIHtcbiAgICB0aGlzLmZpbHRlcnNDb2xsYXBzZWQgPSAhdGhpcy5maWx0ZXJzQ29sbGFwc2VkO1xuICB9XG59XG4iLCI8bWF0LWxpc3QtaXRlbSAqbmdJZj1cImhlYWRlclwiPlxuICA8bWF0LWljb25cbiAgICBjbGFzcz1cImlnby1jaGV2cm9uXCJcbiAgICBtYXQtbGlzdC1hdmF0YXJcbiAgICBpZ29Db2xsYXBzZVxuICAgIFt0YXJnZXRdPVwiZmlsdGVyc1wiXG4gICAgW2NvbGxhcHNlZF09XCJmaWx0ZXJzQ29sbGFwc2VkXCJcbiAgICAoY2xpY2spPVwidG9nZ2xlRmlsdGVyc0NvbGxhcHNlZCgpXCJcbiAgICBzdmdJY29uPVwiY2hldnJvbi11cFwiID5cbiAgPC9tYXQtaWNvbj5cbiAgPGg0IChjbGljayk9XCJ0b2dnbGVMZWdlbmRPbkNsaWNrKClcIiBbbmdTdHlsZV09XCJ7J2N1cnNvcic6IGZpbHRlcnNDb2xsYXBzZWQgPyAnZGVmYXVsdCcgOiAncG9pbnRlcid9XCIgIG1hdExpbmU+e3tsYXllci50aXRsZX19PC9oND5cbiAgXG4gIDxidXR0b24gKm5nSWY9XCJoZWFkZXJcIlxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIFtjb2xvcl09XCJsYXllci52aXNpYmxlID8gJ3ByaW1hcnknIDogJ2RlZmF1bHQnXCJcbiAgICBjb2xsYXBzaWJsZUJ1dHRvblxuICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgW21hdFRvb2x0aXBdPVwibGF5ZXIudmlzaWJsZSA/XG4gICAgICAgICAgICAgICAgICAoJ2lnby5nZW8ubGF5ZXIuaGlkZUxheWVyJyB8IHRyYW5zbGF0ZSkgOlxuICAgICAgICAgICAgICAgICAgKCdpZ28uZ2VvLmxheWVyLnNob3dMYXllcicgfCB0cmFuc2xhdGUpXCJcbiAgICAoY2xpY2spPVwibGF5ZXIudmlzaWJsZSA9ICFsYXllci52aXNpYmxlXCI+XG4gICAgPG1hdC1pY29uXG4gICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IChpblJlc29sdXRpb25SYW5nZSQgfCBhc3luYyk9PT1mYWxzZX1cIlxuICAgICAgW3N2Z0ljb25dPVwibGF5ZXIudmlzaWJsZSA/ICdleWUnIDogJ2V5ZS1vZmYnXCI+XG4gICAgPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG5cbjwvbWF0LWxpc3QtaXRlbT5cblxuPGRpdiAjZmlsdGVycyBjbGFzcz1cImlnby1kYXRhc291cmNlLWZpbHRlcnMtY29udGFpbmVyXCI+XG4gIDxkaXYgI2xlZ2VuZCBjbGFzcz1cImlnby1sYXllci1sZWdlbmQtY29udGFpbmVyXCI+XG4gICAgPGlnby1sYXllci1sZWdlbmQgKm5nSWY9XCJzaG93TGVnZW5kJCB8IGFzeW5jXCIgW2xheWVyXT1cImxheWVyXCI+XG4gICAgPC9pZ28tbGF5ZXItbGVnZW5kPlxuICA8L2Rpdj5cbiAgPGlnby10aW1lLWZpbHRlci1mb3JtXG4gICAgW2xheWVyXT0gXCJsYXllclwiXG4gICAgW29wdGlvbnNdPVwiZGF0YXNvdXJjZS5vcHRpb25zLnRpbWVGaWx0ZXJcIlxuICAgIFtjdXJyZW50VmFsdWVdPVwiZGF0YXNvdXJjZS5vcHRpb25zLnBhcmFtcy5USU1FXCJcbiAgICAoY2hhbmdlKT1cImhhbmRsZURhdGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgKHllYXJDaGFuZ2UpPVwiaGFuZGxlWWVhckNoYW5nZSgkZXZlbnQpXCI+XG4gIDwvaWdvLXRpbWUtZmlsdGVyLWZvcm0+XG48L2Rpdj5cbiJdfQ==