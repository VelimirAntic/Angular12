import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
function TimeFilterButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 3, "igo.geo.filter.filterBy"))("color", ctx_r0.color);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matBadge", ctx_r0.badge);
} }
function TimeFilterButtonComponent_div_1_igo_time_filter_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-time-filter-item", 7);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("header", false)("layer", ctx_r3.layer);
} }
function TimeFilterButtonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4, 5);
    i0.ɵɵtemplate(2, TimeFilterButtonComponent_div_1_igo_time_filter_item_2_Template, 1, 2, "igo-time-filter-item", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.timeFilterCollapse && ctx_r1.options.timeFilter);
} }
export class TimeFilterButtonComponent {
    constructor() {
        this.color = 'primary';
        this.header = true;
        this.timeFilterCollapse = false;
    }
    get badge() {
        const filter = this.options.timeFilter;
        if (filter && filter.enabled) {
            return 1;
        }
        else {
            return;
        }
    }
    get layer() {
        return this._layer;
    }
    set layer(value) {
        this._layer = value;
        if (value) {
            this.options = this.layer.dataSource.options;
        }
    }
    ngOnInit() {
        this.options = this.layer.dataSource.options;
    }
}
TimeFilterButtonComponent.ɵfac = function TimeFilterButtonComponent_Factory(t) { return new (t || TimeFilterButtonComponent)(); };
TimeFilterButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimeFilterButtonComponent, selectors: [["igo-time-filter-button"]], inputs: { layer: "layer", map: "map", color: "color", header: "header" }, decls: 2, vars: 2, consts: [["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", 4, "ngIf"], ["class", "igo-layer-actions-container", 4, "ngIf"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color"], ["matBadgeColor", "warn", "matBadgeSize", "medium", "svgIcon", "history", 3, "matBadge"], [1, "igo-layer-actions-container"], ["ogcFilter", ""], ["igoListItem", "", 3, "header", "layer", 4, "ngIf"], ["igoListItem", "", 3, "header", "layer"]], template: function TimeFilterButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TimeFilterButtonComponent_button_0_Template, 3, 5, "button", 0);
        i0.ɵɵtemplate(1, TimeFilterButtonComponent_div_1_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.header && ctx.options.timeFilterable && ctx.options.timeFilter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.header && ctx.options.timeFilterable && ctx.options.timeFilter);
    } }, styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeFilterButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-time-filter-button',
                templateUrl: './time-filter-button.component.html',
                styleUrls: ['./time-filter-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { layer: [{
            type: Input
        }], map: [{
            type: Input
        }], color: [{
            type: Input
        }], header: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1maWx0ZXItYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci90aW1lLWZpbHRlci1idXR0b24vdGltZS1maWx0ZXItYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci90aW1lLWZpbHRlci1idXR0b24vdGltZS1maWx0ZXItYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFVLE1BQU0sZUFBZSxDQUFDOzs7SUNBbEYsaUNBTWtCOztJQUNoQiw4QkFBcUc7SUFDdkcsaUJBQVM7OztJQUhQLDRFQUFvRCx1QkFBQTtJQUUxQyxlQUFrQjtJQUFsQix1Q0FBa0I7OztJQUs1QiwwQ0FLdUI7OztJQUZyQiw4QkFBZ0IsdUJBQUE7OztJQUxwQixpQ0FDK0Q7SUFDN0Qsa0hBS3VCO0lBQ3pCLGlCQUFNOzs7SUFMRCxlQUE4QztJQUE5Qyw2RUFBOEM7O0FEQW5ELE1BQU0sT0FBTyx5QkFBeUI7SUFpQ3BDO1FBTlMsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUUxQixXQUFNLEdBQVksSUFBSSxDQUFDO1FBRXpCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztJQUVuQixDQUFDO0lBN0JoQixJQUFJLEtBQUs7UUFDUCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQWlCLENBQUM7UUFDOUMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1QixPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU07WUFDTCxPQUFPO1NBQ1I7SUFDSCxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUErQixDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQWFELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQStCLENBQUM7SUFDdkUsQ0FBQzs7a0dBckNVLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDYnRDLGdGQVFTO1FBRVQsMEVBUU07O1FBbEJHLHlGQUE0RDtRQVdwRSxlQUE0RDtRQUE1RCx5RkFBNEQ7O3VGREVoRCx5QkFBeUI7Y0FOckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtzQ0FlSyxLQUFLO2tCQURSLEtBQUs7WUFZRyxHQUFHO2tCQUFYLEtBQUs7WUFFRyxLQUFLO2tCQUFiLEtBQUs7WUFFRyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9sYXllcic7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi9tYXAnO1xuaW1wb3J0IHsgVGltZUZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4uL3NoYXJlZC90aW1lLWZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgV01TRGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy93bXMtZGF0YXNvdXJjZS5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tdGltZS1maWx0ZXItYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUtZmlsdGVyLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWUtZmlsdGVyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lRmlsdGVyQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgb3B0aW9uczogVGltZUZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucztcblxuICBnZXQgYmFkZ2UoKSB7XG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5vcHRpb25zLnRpbWVGaWx0ZXIgYXMgYW55O1xuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyLmVuYWJsZWQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGxheWVyKCk6IExheWVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5ZXI7XG4gIH1cbiAgc2V0IGxheWVyKHZhbHVlOiBMYXllcikge1xuICAgIHRoaXMuX2xheWVyID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucyBhcyBXTVNEYXRhU291cmNlT3B0aW9ucztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbGF5ZXI7XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdwcmltYXJ5JztcblxuICBASW5wdXQoKSBoZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHB1YmxpYyB0aW1lRmlsdGVyQ29sbGFwc2UgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5sYXllci5kYXRhU291cmNlLm9wdGlvbnMgYXMgV01TRGF0YVNvdXJjZU9wdGlvbnM7XG4gIH1cbn1cbiIsIjxidXR0b24gKm5nSWY9XCJoZWFkZXIgJiYgb3B0aW9ucy50aW1lRmlsdGVyYWJsZSAmJiBvcHRpb25zLnRpbWVGaWx0ZXJcIlxuICBtYXQtaWNvbi1idXR0b25cbiAgY29sbGFwc2libGVCdXR0b25cbiAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmZpbHRlci5maWx0ZXJCeScgfCB0cmFuc2xhdGVcIlxuICBbY29sb3JdPVwiY29sb3JcIj5cbiAgPG1hdC1pY29uIFttYXRCYWRnZV09XCJiYWRnZVwiIG1hdEJhZGdlQ29sb3I9XCJ3YXJuXCIgbWF0QmFkZ2VTaXplPVwibWVkaXVtXCIgc3ZnSWNvbj1cImhpc3RvcnlcIj48L21hdC1pY29uPlxuPC9idXR0b24+XG5cbjxkaXYgI29nY0ZpbHRlciBjbGFzcz1cImlnby1sYXllci1hY3Rpb25zLWNvbnRhaW5lclwiXG4qbmdJZj1cImhlYWRlciAmJiBvcHRpb25zLnRpbWVGaWx0ZXJhYmxlICYmIG9wdGlvbnMudGltZUZpbHRlclwiPlxuICA8aWdvLXRpbWUtZmlsdGVyLWl0ZW1cbiAgICAqbmdJZj1cInRpbWVGaWx0ZXJDb2xsYXBzZSAmJiBvcHRpb25zLnRpbWVGaWx0ZXJcIlxuICAgIGlnb0xpc3RJdGVtXG4gICAgW2hlYWRlcl09XCJmYWxzZVwiXG4gICAgW2xheWVyXT1cImxheWVyXCI+XG4gIDwvaWdvLXRpbWUtZmlsdGVyLWl0ZW0+XG48L2Rpdj5cbiJdfQ==