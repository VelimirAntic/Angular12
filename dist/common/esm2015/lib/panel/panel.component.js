import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵprojection(2, 1);
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵtext(4);
    i0.ɵɵprojection(5, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(6, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title, " ");
} }
const _c0 = ["*", [["", "panelLeftButton", ""]], [["", "panelHeader", ""]], [["", "panelRightButton", ""]]];
const _c1 = ["*", "[panelLeftButton]", "[panelHeader]", "[panelRightButton]"];
export class PanelComponent {
    constructor() {
        this._withHeader = true;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get withHeader() {
        return this._withHeader;
    }
    set withHeader(value) {
        this._withHeader = value;
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["igo-panel"]], hostVars: 2, hostBindings: function PanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("igo-panel-with-header", ctx.withHeader);
    } }, inputs: { title: "title", withHeader: "withHeader" }, ngContentSelectors: _c1, decls: 3, vars: 1, consts: [["class", "igo-panel-header mat-typography", "title", "", 4, "ngIf"], ["title", "", 1, "igo-panel-content"], ["title", "", 1, "igo-panel-header", "mat-typography"], [1, "igo-panel-title"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵtemplate(0, PanelComponent_div_0_Template, 7, 1, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.withHeader);
    } }, directives: [i1.NgIf], styles: ["[_nghost-%COMP%]{display:block}.igo-panel-header[_ngcontent-%COMP%]{height:46px;padding:3px;text-align:center}.igo-panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;height:40px}.igo-panel-header[_ngcontent-%COMP%]     [panelleftbutton]{float:left;margin-right:-40px}.igo-panel-header[_ngcontent-%COMP%]     [panelrightbutton]{float:right}.igo-panel-content[_ngcontent-%COMP%]{overflow:auto}.igo-panel-with-header[_nghost-%COMP%]   .igo-panel-content[_ngcontent-%COMP%]{height:calc(100% - 46px)}[_nghost-%COMP%]:not(.igo-panel-with-header)   .igo-panel-content[_ngcontent-%COMP%]{height:100%}.igo-panel-title[_ngcontent-%COMP%]{display:block;width:calc(100% - 80px);margin-left:40px;height:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;line-height:40px;float:left;font-weight:bold;font-size:1.17em}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{
                selector: 'igo-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { title: [{
            type: Input
        }], withHeader: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.igo-panel-with-header']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvcGFuZWwvcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvcGFuZWwvcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQzs7OztJQ0x2Qiw4QkFBeUU7SUFDdkUsMEJBQUk7SUFDRixxQkFBb0Q7SUFDcEQsOEJBQTZCO0lBQzNCLFlBQ0E7SUFBQSxxQkFBZ0Q7SUFDbEQsaUJBQU07SUFDTixxQkFBcUQ7SUFDdkQsaUJBQUs7SUFDUCxpQkFBTTs7O0lBTEEsZUFDQTtJQURBLDZDQUNBOzs7O0FEUU4sTUFBTSxPQUFPLGNBQWM7SUFOM0I7UUF3QlUsZ0JBQVcsR0FBRyxJQUFJLENBQUM7S0FDNUI7SUFsQkMsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFHRCxJQUVJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7NEVBakJVLGNBQWM7aUVBQWQsY0FBYzs7OztRQ2IzQiwrREFTTTtRQUNOLDhCQUF3QztRQUN0QyxrQkFBeUI7UUFDM0IsaUJBQU07O1FBWkEscUNBQWdCOzt1RkRhVCxjQUFjO2NBTjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQUdLLEtBQUs7a0JBRFIsS0FBSztZQVdGLFVBQVU7a0JBRmIsS0FBSzs7a0JBQ0wsV0FBVzttQkFBQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhbmVsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlnby1wYW5lbC13aXRoLWhlYWRlcicpXG4gIGdldCB3aXRoSGVhZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl93aXRoSGVhZGVyO1xuICB9XG4gIHNldCB3aXRoSGVhZGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fd2l0aEhlYWRlciA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX3dpdGhIZWFkZXIgPSB0cnVlO1xufVxuIiwiPGRpdiAqbmdJZj1cIndpdGhIZWFkZXJcIiBjbGFzcz1cImlnby1wYW5lbC1oZWFkZXIgbWF0LXR5cG9ncmFwaHlcIiB0aXRsZT1cIlwiPlxuICA8aDM+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BhbmVsTGVmdEJ1dHRvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImlnby1wYW5lbC10aXRsZVwiPlxuICAgICAge3sgdGl0bGUgfX1cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltwYW5lbEhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BhbmVsUmlnaHRCdXR0b25dXCI+PC9uZy1jb250ZW50PlxuICA8L2gzPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiaWdvLXBhbmVsLWNvbnRlbnRcIiB0aXRsZT1cIlwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==