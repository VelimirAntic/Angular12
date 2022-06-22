import { Component, Input } from '@angular/core';
import { getEntityTitle } from '@igo2/common';
import { FeatureMotion, moveToOlFeatures } from '@igo2/geo';
import olFormatGeoJSON from 'ol/format/GeoJSON';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/material/sidenav";
import * as i3 from "@igo2/common";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@angular/material/icon";
import * as i8 from "@igo2/geo";
import * as i9 from "@ngx-translate/core";
function SidenavComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.sidenav.goBack"));
} }
function SidenavComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.sidenav.mainMenu"));
} }
function SidenavComponent_igo_panel_11_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function SidenavComponent_igo_panel_11_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.zoomToFeatureExtent(); });
    i0.ɵɵelement(1, "mat-icon", 20);
    i0.ɵɵelementEnd();
} }
function SidenavComponent_igo_panel_11_igo_feature_details_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-feature-details", 21);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("feature", ctx_r6.feature);
} }
const _c0 = function () { return ["collapsed", "initial"]; };
function SidenavComponent_igo_panel_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-panel", 6);
    i0.ɵɵelementStart(1, "button", 15);
    i0.ɵɵlistener("click", function SidenavComponent_igo_panel_11_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.toggleTopPanel(); });
    i0.ɵɵelement(2, "mat-icon", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SidenavComponent_igo_panel_11_button_3_Template, 2, 0, "button", 17);
    i0.ɵɵtemplate(4, SidenavComponent_igo_panel_11_igo_feature_details_4_Template, 1, 1, "igo-feature-details", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(4);
    i0.ɵɵproperty("title", ctx_r4.featureTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("svgIcon", i0.ɵɵpureFunction0(4, _c0).indexOf(_r1.state) >= 0 ? "arrow_downward" : "arrow_upward");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.feature.geometry);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(5, _c0).indexOf(_r1.state) >= 0);
} }
export class SidenavComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.format = new olFormatGeoJSON();
        this._title = this.titleService.getTitle();
        this.topPanelState = 'initial';
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get opened() {
        return this._opened;
    }
    set opened(value) {
        this._opened = value;
    }
    get feature() {
        return this._feature;
    }
    set feature(value) {
        this._feature = value;
    }
    get tool() {
        return this._tool;
    }
    set tool(value) {
        this._tool = value;
    }
    get media() {
        return this._media;
    }
    set media(value) {
        this._media = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        if (value) {
            this._title = value;
        }
    }
    get featureTitle() {
        return this.feature ? getEntityTitle(this.feature) : undefined;
    }
    zoomToFeatureExtent() {
        if (this.feature.geometry) {
            const olFeature = this.format.readFeature(this.feature, {
                dataProjection: this.feature.projection,
                featureProjection: this.map.projection
            });
            moveToOlFeatures(this.map, [olFeature], FeatureMotion.Zoom);
        }
    }
    toggleTopPanel() {
        if (this.topPanelState === 'initial') {
            this.topPanelState = 'expanded';
        }
        else {
            this.topPanelState = 'initial';
        }
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(i0.ɵɵdirectiveInject(i1.Title)); };
SidenavComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidenavComponent, selectors: [["igo-sidenav"]], inputs: { map: "map", opened: "opened", feature: "feature", tool: "tool", media: "media", title: "title" }, decls: 12, vars: 8, consts: [["igoSidenavShim", "", "mode", "side", 3, "opened"], ["sidenav", ""], [1, "igo-sidenav-content"], ["initial", "50%", "initialMobile", "100%", "expanded", "calc(100% - 58px)", 3, "state"], ["topPanel", ""], [1, "igo-content"], [3, "title"], ["mat-icon-button", "", "panelLeftButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", 4, "ngIf"], ["mat-icon-button", "", "panelRightButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", 4, "ngIf"], ["igoFlexibleFill", "", 1, "igo-content"], [3, "title", 4, "ngIf"], ["mat-icon-button", "", "panelLeftButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip"], ["svgIcon", "arrow-back"], ["mat-icon-button", "", "panelRightButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip"], ["svgIcon", "menu"], ["mat-icon-button", "", "panelLeftButton", "", 1, "igo-icon-button", 3, "click"], [3, "svgIcon"], ["mat-icon-button", "", "panelRightButton", "", "class", "igo-icon-button", 3, "click", 4, "ngIf"], [3, "feature", 4, "ngIf"], ["mat-icon-button", "", "panelRightButton", "", 1, "igo-icon-button", 3, "click"], ["svgIcon", "zoom-in"], [3, "feature"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-sidenav", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "igo-flexible", 3, 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "igo-panel", 6);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵtemplate(8, SidenavComponent_button_8_Template, 3, 3, "button", 7);
        i0.ɵɵtemplate(9, SidenavComponent_button_9_Template, 3, 3, "button", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 9);
        i0.ɵɵtemplate(11, SidenavComponent_igo_panel_11_Template, 5, 6, "igo-panel", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("opened", ctx.opened);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("state", ctx.topPanelState);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("title", ctx.tool ? i0.ɵɵpipeBind1(7, 6, ctx.tool.title) : ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.tool);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.tool);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.feature && ctx.media !== "mobile");
    } }, directives: [i2.MatSidenav, i3.FlexibleComponent, i3.PanelComponent, i4.NgIf, i5.MatButton, i6.MatTooltip, i7.MatIcon, i8.FeatureDetailsComponent], pipes: [i9.TranslatePipe], styles: ["[_nghost-%COMP%]     .igo-flexible-fill .igo-container, .igo-sidenav-content[_ngcontent-%COMP%]   .igo-flexible-fill[_ngcontent-%COMP%]   .igo-container[_ngcontent-%COMP%]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}[_nghost-%COMP%]     .igo-flexible-fill .igo-container, .igo-sidenav-content[_ngcontent-%COMP%]   .igo-flexible-fill[_ngcontent-%COMP%]   .igo-container[_ngcontent-%COMP%]{border-top-width:1px;border-top-style:solid;border-top-color:#0003}mat-sidenav[_ngcontent-%COMP%]{-o-box-shadow:2px 0px 2px 0px #dddddd;box-shadow:2px 0 2px #ddd}[_nghost-%COMP%]{background-color:#fff}[_nghost-%COMP%]     mat-sidenav{z-index:3!important}mat-sidenav[_ngcontent-%COMP%]{width:400px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){mat-sidenav[_ngcontent-%COMP%]{width:calc(100% - 40px - 5px)}}.igo-sidenav-content[_ngcontent-%COMP%]{margin-top:50px;height:calc(100% - 50px)}igo-feature-details[_ngcontent-%COMP%]     table{width:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavComponent, [{
        type: Component,
        args: [{
                selector: 'igo-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: i1.Title }]; }, { map: [{
            type: Input
        }], opened: [{
            type: Input
        }], feature: [{
            type: Input
        }], tool: [{
            type: Input
        }], media: [{
            type: Input
        }], title: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUF1QixjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkUsT0FBTyxFQUFXLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUdyRSxPQUFPLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7O0lDUXRDLGtDQU1lOztJQUNiLCtCQUEwQztJQUM1QyxpQkFBUzs7SUFIUCwrRUFBdUQ7OztJQUt6RCxrQ0FNZTs7SUFDYiwrQkFBb0M7SUFDdEMsaUJBQVM7O0lBSFAsaUZBQXlEOzs7O0lBcUIzRCxrQ0FLMkI7SUFEekIsOE1BQStCO0lBRS9CLCtCQUF1QztJQUN6QyxpQkFBUzs7O0lBRVQsMENBR3NCOzs7SUFGcEIsd0NBQW1COzs7OztJQXRCdkIsb0NBRXdDO0lBRXRDLGtDQUk2QjtJQUEzQixnTUFBMEI7SUFDMUIsK0JBQTJIO0lBQzdILGlCQUFTO0lBRVQscUZBT1M7SUFFVCwrR0FHc0I7SUFDeEIsaUJBQVk7Ozs7SUF4QlYsMkNBQXNCO0lBUVYsZUFBcUc7SUFBckcsZ0hBQXFHO0lBUTlHLGVBQXNCO0lBQXRCLDhDQUFzQjtJQU10QixlQUEyRDtJQUEzRCx5RUFBMkQ7O0FEaER4RSxNQUFNLE9BQU8sZ0JBQWdCO0lBK0QzQixZQUFtQixZQUFtQjtRQUFuQixpQkFBWSxHQUFaLFlBQVksQ0FBTztRQTlEOUIsV0FBTSxHQUFHLElBQUks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ViwrQkFBVTtRQVVaLGVBQW1DO1FBQW5DLDREQUFtQzs7dUZEM0JqQyxnQkFBZ0I7Y0FMNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN4Qzt3REFJSyxHQUFHO2tCQUROLEtBQUs7WUFTRixNQUFNO2tCQURULEtBQUs7WUFVRixPQUFPO2tCQURWLEtBQUs7WUFVRixJQUFJO2tCQURQLEtBQUs7WUFVRixLQUFLO2tCQURSLEtBQUs7WUFVRixLQUFLO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgdHlwZSB7IE1lZGlhIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBGbGV4aWJsZVN0YXRlLCBUb29sLCBnZXRFbnRpdHlUaXRsZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBGZWF0dXJlLCBGZWF0dXJlTW90aW9uLCBtb3ZlVG9PbEZlYXR1cmVzIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB0eXBlIHsgSWdvTWFwIH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuaW1wb3J0IG9sRm9ybWF0R2VvSlNPTiBmcm9tICdvbC9mb3JtYXQvR2VvSlNPTic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1zaWRlbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGVuYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkNvbXBvbmVudCB7XG4gIHByaXZhdGUgZm9ybWF0ID0gbmV3IG9sRm9ybWF0R2VvSlNPTigpO1xuICBASW5wdXQoKVxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuICBzZXQgbWFwKHZhbHVlOiBJZ29NYXApIHtcbiAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tYXA6IElnb01hcDtcbiAgQElucHV0KClcbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG4gIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vcGVuZWQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgZ2V0IGZlYXR1cmUoKTogRmVhdHVyZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZlYXR1cmU7XG4gIH1cbiAgc2V0IGZlYXR1cmUodmFsdWU6IEZlYXR1cmUpIHtcbiAgICB0aGlzLl9mZWF0dXJlID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfZmVhdHVyZTogRmVhdHVyZTtcblxuICBASW5wdXQoKVxuICBnZXQgdG9vbCgpOiBUb29sIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbDtcbiAgfVxuICBzZXQgdG9vbCh2YWx1ZTogVG9vbCkge1xuICAgIHRoaXMuX3Rvb2wgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF90b29sOiBUb29sO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBtZWRpYSgpOiBNZWRpYSB7XG4gICAgcmV0dXJuIHRoaXMuX21lZGlhO1xuICB9XG4gIHNldCBtZWRpYSh2YWx1ZTogTWVkaWEpIHtcbiAgICB0aGlzLl9tZWRpYSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX21lZGlhOiBNZWRpYTtcblxuICBASW5wdXQoKVxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmcgPSB0aGlzLnRpdGxlU2VydmljZS5nZXRUaXRsZSgpO1xuXG4gIHB1YmxpYyB0b3BQYW5lbFN0YXRlOiBGbGV4aWJsZVN0YXRlID0gJ2luaXRpYWwnO1xuXG4gIGdldCBmZWF0dXJlVGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mZWF0dXJlID8gZ2V0RW50aXR5VGl0bGUodGhpcy5mZWF0dXJlKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZVNlcnZpY2U6IFRpdGxlKSB7fVxuXG4gIHpvb21Ub0ZlYXR1cmVFeHRlbnQoKSB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZS5nZW9tZXRyeSkge1xuICAgICAgY29uc3Qgb2xGZWF0dXJlID0gdGhpcy5mb3JtYXQucmVhZEZlYXR1cmUodGhpcy5mZWF0dXJlLCB7XG4gICAgICAgIGRhdGFQcm9qZWN0aW9uOiB0aGlzLmZlYXR1cmUucHJvamVjdGlvbixcbiAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IHRoaXMubWFwLnByb2plY3Rpb25cbiAgICAgIH0pO1xuICAgICAgbW92ZVRvT2xGZWF0dXJlcyh0aGlzLm1hcCwgW29sRmVhdHVyZV0sIEZlYXR1cmVNb3Rpb24uWm9vbSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlVG9wUGFuZWwoKSB7XG4gICAgaWYgKHRoaXMudG9wUGFuZWxTdGF0ZSA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICB0aGlzLnRvcFBhbmVsU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvcFBhbmVsU3RhdGUgPSAnaW5pdGlhbCc7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxtYXQtc2lkZW5hdlxuICAjc2lkZW5hdlxuICBpZ29TaWRlbmF2U2hpbVxuICBtb2RlPVwic2lkZVwiXG4gIFtvcGVuZWRdPVwib3BlbmVkXCI+XG5cbiAgPGRpdiBjbGFzcz1cImlnby1zaWRlbmF2LWNvbnRlbnRcIj5cblxuICAgIDxpZ28tZmxleGlibGVcbiAgICAgICN0b3BQYW5lbFxuICAgICAgaW5pdGlhbD1cIjUwJVwiIGluaXRpYWxNb2JpbGU9XCIxMDAlXCJcbiAgICAgIGV4cGFuZGVkPVwiY2FsYygxMDAlIC0gNThweClcIlxuICAgICAgW3N0YXRlXT1cInRvcFBhbmVsU3RhdGVcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImlnby1jb250ZW50XCI+XG4gICAgICAgIDxpZ28tcGFuZWwgW3RpdGxlXT1cInRvb2wgPyAodG9vbC50aXRsZSB8IHRyYW5zbGF0ZSkgOiB0aXRsZVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgcGFuZWxMZWZ0QnV0dG9uXG4gICAgICAgICAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgICAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmNvbnRleHQuc2lkZW5hdi5nb0JhY2snIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICpuZ0lmPVwidG9vbFwiPlxuICAgICAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJhcnJvdy1iYWNrXCI+PC9tYXQtaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgcGFuZWxSaWdodEJ1dHRvblxuICAgICAgICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICAgICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5jb250ZXh0LnNpZGVuYXYubWFpbk1lbnUnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICpuZ0lmPVwidG9vbFwiPlxuICAgICAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJtZW51XCI+PC9tYXQtaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8L2lnby1wYW5lbD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGlnb0ZsZXhpYmxlRmlsbCBjbGFzcz1cImlnby1jb250ZW50XCI+XG4gICAgICAgIDxpZ28tcGFuZWxcbiAgICAgICAgICBbdGl0bGVdPVwiZmVhdHVyZVRpdGxlXCJcbiAgICAgICAgICAqbmdJZj1cImZlYXR1cmUgJiYgbWVkaWEgIT09ICdtb2JpbGUnXCI+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIHBhbmVsTGVmdEJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJpZ28taWNvbi1idXR0b25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVRvcFBhbmVsKClcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBbc3ZnSWNvbl09XCJbJ2NvbGxhcHNlZCcsICdpbml0aWFsJ10uaW5kZXhPZih0b3BQYW5lbC5zdGF0ZSkgPj0gMCA/ICdhcnJvd19kb3dud2FyZCcgOiAnYXJyb3dfdXB3YXJkJ1wiPjwvbWF0LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIHBhbmVsUmlnaHRCdXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiaWdvLWljb24tYnV0dG9uXCJcbiAgICAgICAgICAgIChjbGljayk9XCJ6b29tVG9GZWF0dXJlRXh0ZW50KClcIlxuICAgICAgICAgICAgKm5nSWY9XCJmZWF0dXJlLmdlb21ldHJ5XCI+XG4gICAgICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cInpvb20taW5cIj48L21hdC1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGlnby1mZWF0dXJlLWRldGFpbHNcbiAgICAgICAgICAgIFtmZWF0dXJlXT1cImZlYXR1cmVcIlxuICAgICAgICAgICAgKm5nSWY9XCJbJ2NvbGxhcHNlZCcsICdpbml0aWFsJ10uaW5kZXhPZih0b3BQYW5lbC5zdGF0ZSkgPj0gMFwiPlxuICAgICAgICAgIDwvaWdvLWZlYXR1cmUtZGV0YWlscz5cbiAgICAgICAgPC9pZ28tcGFuZWw+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvaWdvLWZsZXhpYmxlPlxuXG4gIDwvZGl2PlxuPC9tYXQtc2lkZW5hdj5cbiJdfQ==