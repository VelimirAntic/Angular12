import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { getEntityTitle } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/core";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/material/button";
import * as i7 from "@ngx-translate/core";
function CatalogLibaryItemComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 4);
    i0.ɵɵlistener("click", function CatalogLibaryItemComponent_mat_icon_3_Template_mat_icon_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.catalog.externalProvider.catalog"));
} }
function CatalogLibaryItemComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function CatalogLibaryItemComponent_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.removeCatalogFromLibrary($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.catalog.library.remove"));
} }
function CatalogLibaryItemComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵelement(1, "mat-icon", 8);
    i0.ɵɵelementEnd();
} }
/**
 * Catalog library item
 */
export class CatalogLibaryItemComponent {
    constructor() {
        this.catalogRemove = new EventEmitter();
    }
    /**
     * @internal
     */
    get title() { return getEntityTitle(this.catalog); }
    removeCatalogFromLibrary(event) {
        event.stopPropagation();
        this.catalogRemove.emit();
    }
}
CatalogLibaryItemComponent.ɵfac = function CatalogLibaryItemComponent_Factory(t) { return new (t || CatalogLibaryItemComponent)(); };
CatalogLibaryItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CatalogLibaryItemComponent, selectors: [["igo-catalog-library-item"]], inputs: { catalog: "catalog", map: "map" }, outputs: { catalogRemove: "catalogRemove" }, decls: 6, vars: 4, consts: [["mat-line", ""], ["class", "igo-external-provider", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", "svgIcon", "earth-arrow-right", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click", 4, "ngIf"], ["class", "igo-blank", "disabled", "true", "mat-icon-button", "", 4, "ngIf"], ["tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", "svgIcon", "earth-arrow-right", 1, "igo-external-provider", 3, "matTooltip", "click"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click"], ["svgIcon", "delete"], ["disabled", "true", "mat-icon-button", "", 1, "igo-blank"], ["svgIcon", "blank"]], template: function CatalogLibaryItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list-item");
        i0.ɵɵelementStart(1, "h4", 0);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CatalogLibaryItemComponent_mat_icon_3_Template, 2, 3, "mat-icon", 1);
        i0.ɵɵtemplate(4, CatalogLibaryItemComponent_button_4_Template, 3, 3, "button", 2);
        i0.ɵɵtemplate(5, CatalogLibaryItemComponent_button_5_Template, 2, 0, "button", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.catalog.externalProvider);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.catalog.removable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.catalog.removable);
    } }, directives: [i1.MatListItem, i2.MatLine, i3.NgIf, i4.MatIcon, i5.MatTooltip, i6.MatButton], pipes: [i7.TranslatePipe], styles: [".igo-blank[_ngcontent-%COMP%]{cursor:pointer}.igo-external-provider[_ngcontent-%COMP%]{cursor:help}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogLibaryItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-catalog-library-item',
                templateUrl: './catalog-library-item.component.html',
                styleUrls: ['./catalog-library-item.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { catalog: [{
            type: Input
        }], map: [{
            type: Input
        }], catalogRemove: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1saWJyYXJ5LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvY2F0YWxvZy9jYXRhbG9nLWxpYnJhcnkvY2F0YWxvZy1saWJyYXJ5LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvY2F0YWxvZy9jYXRhbG9nLWxpYnJhcnkvY2F0YWxvZy1saWJyYXJ5LWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7O0lDRTVDLG1DQVE4QjtJQUQ1QiwwSEFBUyx3QkFBd0IsSUFBQzs7SUFFcEMsaUJBQVc7O0lBSlQsNkZBQXFFOzs7O0lBTXZFLGlDQU8yQztJQUEzQywyTkFBMEM7O0lBQzFDLDhCQUFzQztJQUN4QyxpQkFBUzs7SUFKUCxtRkFBMkQ7OztJQU03RCxpQ0FJa0I7SUFDaEIsOEJBQXFDO0lBQ3ZDLGlCQUFTOztBRDFCVDs7R0FFRztBQU9ILE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFrQlksa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBVzlDO0lBVEM7O09BRUc7SUFDSCxJQUFJLEtBQUssS0FBYSxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVELHdCQUF3QixDQUFDLEtBQUs7UUFDNUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7b0dBdEJVLDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FDZnZDLHFDQUFlO1FBQ2IsNkJBQWE7UUFDWCxZQUNGO1FBQUEsaUJBQUs7UUFDTCxxRkFTVztRQUVYLGlGQVNPO1FBRVQsaUZBTVM7UUFDVCxpQkFBZ0I7O1FBL0JaLGVBQ0Y7UUFERSwwQ0FDRjtRQUdHLGVBQThCO1FBQTlCLG1EQUE4QjtRQVVoQyxlQUF1QjtRQUF2Qiw0Q0FBdUI7UUFZdkIsZUFBd0I7UUFBeEIsNkNBQXdCOzt1RkRiZCwwQkFBMEI7Y0FOdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2dCQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFNVSxPQUFPO2tCQUFmLEtBQUs7WUFLRyxHQUFHO2tCQUFYLEtBQUs7WUFFSSxhQUFhO2tCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGdldEVudGl0eVRpdGxlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcCc7XG5pbXBvcnQgeyBDYXRhbG9nIH0gZnJvbSAnLi4vc2hhcmVkL2NhdGFsb2cuYWJzdHJhY3QnO1xuXG4vKipcbiAqIENhdGFsb2cgbGlicmFyeSBpdGVtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1jYXRhbG9nLWxpYnJhcnktaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXRhbG9nLWxpYnJhcnktaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhdGFsb2ctbGlicmFyeS1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhdGFsb2dMaWJhcnlJdGVtQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogQ2F0YWxvZ1xuICAgKi9cbiAgQElucHV0KCkgY2F0YWxvZzogQ2F0YWxvZztcblxuICAvKipcbiAgICogTWFwIHRvIGFkZCB0aGUgY2F0YWxvZyBpdGVtcyB0b1xuICAgKi9cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgQE91dHB1dCgpIGNhdGFsb2dSZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7IHJldHVybiBnZXRFbnRpdHlUaXRsZSh0aGlzLmNhdGFsb2cpOyB9XG5cbiAgcmVtb3ZlQ2F0YWxvZ0Zyb21MaWJyYXJ5KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jYXRhbG9nUmVtb3ZlLmVtaXQoKTtcbiAgfVxufVxuIiwiPG1hdC1saXN0LWl0ZW0+XG4gIDxoNCBtYXQtbGluZT5cbiAgICB7e3RpdGxlfX1cbiAgPC9oND5cbiAgPG1hdC1pY29uXG4gICAgY2xhc3M9XCJpZ28tZXh0ZXJuYWwtcHJvdmlkZXJcIlxuICAgICpuZ0lmPVwiY2F0YWxvZy5leHRlcm5hbFByb3ZpZGVyXCJcbiAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmNhdGFsb2cuZXh0ZXJuYWxQcm92aWRlci5jYXRhbG9nJyB8IHRyYW5zbGF0ZVwiXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICBzdmdJY29uPVwiZWFydGgtYXJyb3ctcmlnaHRcIj5cbiAgPC9tYXQtaWNvbj5cblxuICA8YnV0dG9uXG4gICpuZ0lmPVwiY2F0YWxvZy5yZW1vdmFibGVcIlxuICBtYXQtaWNvbi1idXR0b25cbiAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmNhdGFsb2cubGlicmFyeS5yZW1vdmUnIHwgdHJhbnNsYXRlXCJcbiAgY29sb3I9XCJ3YXJuXCJcbiAgKGNsaWNrKT1cInJlbW92ZUNhdGFsb2dGcm9tTGlicmFyeSgkZXZlbnQpXCI+XG4gIDxtYXQtaWNvbiBzdmdJY29uPVwiZGVsZXRlXCI+PC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuXG48YnV0dG9uXG4gIGNsYXNzPVwiaWdvLWJsYW5rXCJcbiAgKm5nSWY9XCIhY2F0YWxvZy5yZW1vdmFibGVcIlxuICBkaXNhYmxlZD1cInRydWVcIlxuICBtYXQtaWNvbi1idXR0b24+XG4gIDxtYXQtaWNvbiBzdmdJY29uPVwiYmxhbmtcIj48L21hdC1pY29uPlxuPC9idXR0b24+XG48L21hdC1saXN0LWl0ZW0+XG4iXX0=