import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/material/icon";
import * as i4 from "@ngx-translate/core";
export class GeolocateButtonComponent {
    constructor() { }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
}
GeolocateButtonComponent.ɵfac = function GeolocateButtonComponent_Factory(t) { return new (t || GeolocateButtonComponent)(); };
GeolocateButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeolocateButtonComponent, selectors: [["igo-geolocate-button"]], inputs: { map: "map", color: "color" }, decls: 4, vars: 4, consts: [[1, "igo-geolocate-button-container"], ["mat-icon-button", "", "matTooltipPosition", "left", 3, "matTooltip", "color", "click"], ["svgIcon", "crosshairs-gps"]], template: function GeolocateButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function GeolocateButtonComponent_Template_button_click_1_listener() { return ctx.map.geolocate(); });
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelement(3, "mat-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 2, "igo.geo.mapButtons.geolocate"))("color", ctx.color);
    } }, directives: [i1.MatButton, i2.MatTooltip, i3.MatIcon], pipes: [i4.TranslatePipe], styles: [".igo-geolocate-button-container[_ngcontent-%COMP%]{width:40px;background-color:#fff}.igo-geolocate-button-container[_ngcontent-%COMP%]:hover{background-color:#efefef}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeolocateButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-geolocate-button',
                templateUrl: './geolocate-button.component.html',
                styleUrls: ['./geolocate-button.component.scss']
            }]
    }], function () { return []; }, { map: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbG9jYXRlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9tYXAvZ2VvbG9jYXRlLWJ1dHRvbi9nZW9sb2NhdGUtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9nZW9sb2NhdGUtYnV0dG9uL2dlb2xvY2F0ZS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVNqRCxNQUFNLE9BQU8sd0JBQXdCO0lBbUJuQyxnQkFBZSxDQUFDO0lBbEJoQixJQUNJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUdELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOztnR0FoQlUsd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUNUckMsOEJBQTRDO1FBQzFDLGlDQUs0QjtRQUExQixxR0FBUyxtQkFBZSxJQUFDOztRQUN6Qiw4QkFBOEM7UUFDaEQsaUJBQVM7UUFDWCxpQkFBTTs7UUFORixlQUF5RDtRQUF6RCxpRkFBeUQsb0JBQUE7O3VGRE1oRCx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEO3NDQUdLLEdBQUc7a0JBRE4sS0FBSztZQVVGLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vc2hhcmVkL21hcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1nZW9sb2NhdGUtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dlb2xvY2F0ZS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nZW9sb2NhdGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRlQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZ2V0IG1hcCgpOiBJZ29NYXAge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cbiAgc2V0IG1hcCh2YWx1ZTogSWdvTWFwKSB7XG4gICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfbWFwOiBJZ29NYXA7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJpZ28tZ2VvbG9jYXRlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgPGJ1dHRvblxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLm1hcEJ1dHRvbnMuZ2VvbG9jYXRlJyB8IHRyYW5zbGF0ZVwiXG4gICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwibGVmdFwiXG4gICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAoY2xpY2spPVwibWFwLmdlb2xvY2F0ZSgpXCI+XG4gICAgPG1hdC1pY29uIHN2Z0ljb249XCJjcm9zc2hhaXJzLWdwc1wiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=