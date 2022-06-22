import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/material/icon";
import * as i6 from "@ngx-translate/core";
const _c0 = function (a0) { return [a0]; };
function OfflineButtonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "button", 2);
    i0.ɵɵlistener("click", function OfflineButtonComponent_div_0_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onToggle(); })("click", function OfflineButtonComponent_div_0_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.map.onOfflineToggle(ctx_r3.check); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelement(5, "mat-icon", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTooltip", ctx_r0.checked ? i0.ɵɵpipeBind1(3, 3, "igo.geo.mapButtons.online") : i0.ɵɵpipeBind1(4, 5, "igo.geo.mapButtons.offline"))("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx_r0.btnStyle))("color", ctx_r0.checked ? ctx_r0.color : i0.ɵɵpureFunction1(9, _c0, ctx_r0.colorOff));
} }
export class OfflineButtonComponent {
    constructor(config) {
        this.config = config;
        this.btnStyle = 'baseStyle';
        this.colorOff = 'rgb(255,255,255)';
        this.change = new EventEmitter();
        this.check = false;
        this.visible = false;
        this.visible = this.config.getConfig('offlineButton') ? true : false;
    }
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
    get checked() {
        return this.check;
    }
    onToggle() {
        this.check = !this.check;
        if (this.check) {
            this.btnStyle = 'toggleStyle';
        }
        else {
            this.btnStyle = 'baseStyle';
        }
    }
}
OfflineButtonComponent.ɵfac = function OfflineButtonComponent_Factory(t) { return new (t || OfflineButtonComponent)(i0.ɵɵdirectiveInject(i1.ConfigService)); };
OfflineButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OfflineButtonComponent, selectors: [["igo-offline-button"]], inputs: { map: "map", color: "color", check: "check" }, outputs: { change: "change" }, decls: 1, vars: 1, consts: [["class", "igo-user-button-container", 4, "ngIf"], [1, "igo-user-button-container"], ["mat-icon-button", "", "matTooltipPosition", "left", 3, "matTooltip", "ngClass", "color", "click"], ["svgIcon", "wifi-strength-off"]], template: function OfflineButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, OfflineButtonComponent_div_0_Template, 6, 11, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [i2.NgIf, i3.MatButton, i4.MatTooltip, i2.NgClass, i5.MatIcon], pipes: [i6.TranslatePipe], styles: [".baseStyle[_ngcontent-%COMP%]{width:40px;background-color:#fff}.baseStyle[_ngcontent-%COMP%]:hover{background-color:#efefef}.toggleStyle[_ngcontent-%COMP%]{width:40px;background-color:#b9b9b9}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OfflineButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-offline-button',
                templateUrl: './offline-button.component.html',
                styleUrls: ['./offline-button.component.scss']
            }]
    }], function () { return [{ type: i1.ConfigService }]; }, { change: [{
            type: Output
        }], map: [{
            type: Input
        }], color: [{
            type: Input
        }], check: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWFwL29mZmxpbmUtYnV0dG9uL29mZmxpbmUtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9vZmZsaW5lLWJ1dHRvbi9vZmZsaW5lLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ0F2RSw4QkFBdUQ7SUFDckQsMkJBQUs7SUFDSCxpQ0FPdUM7SUFEckMsd0xBQW9CLHNKQUNYLHdDQUEwQixJQURmOzs7SUFFcEIsOEJBQWlEO0lBQ25ELGlCQUFTO0lBQ1gsaUJBQU07SUFDUixpQkFBTTs7O0lBVEEsZUFBOEc7SUFBOUcsb0pBQThHLHdEQUFBLHNGQUFBOztBRE1wSCxNQUFNLE9BQU8sc0JBQXNCO0lBaUNqQyxZQUNVLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFoQy9CLGFBQVEsR0FBVyxXQUFXLENBQUM7UUFDL0IsYUFBUSxHQUFXLGtCQUFrQixDQUFDO1FBRTVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBb0IvQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBTWhDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFLckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDdkUsQ0FBQztJQTlCRCxJQUNJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUdELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBS0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFVRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7NEZBOUNVLHNCQUFzQjt5RUFBdEIsc0JBQXNCO1FDVm5DLHdFQWFNOztRQWJBLGtDQUFhOzt1RkRVTixzQkFBc0I7Y0FObEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DO2dFQU9XLE1BQU07a0JBQWYsTUFBTTtZQUdILEdBQUc7a0JBRE4sS0FBSztZQVVGLEtBQUs7a0JBRFIsS0FBSztZQVNVLEtBQUs7a0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vc2hhcmVkL21hcCc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1vZmZsaW5lLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9vZmZsaW5lLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29mZmxpbmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBPZmZsaW5lQnV0dG9uQ29tcG9uZW50IHtcblxuICBidG5TdHlsZTogc3RyaW5nID0gJ2Jhc2VTdHlsZSc7XG4gIGNvbG9yT2ZmOiBzdHJpbmcgPSAncmdiKDI1NSwyNTUsMjU1KSc7XG5cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuICBzZXQgbWFwKHZhbHVlOiBJZ29NYXApIHtcbiAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tYXA6IElnb01hcDtcblxuICBASW5wdXQoKVxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgcHVibGljIGNoZWNrOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2s7XG4gIH1cblxuICBwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlXG4gICAgKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdvZmZsaW5lQnV0dG9uJykgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBvblRvZ2dsZSgpIHtcbiAgICB0aGlzLmNoZWNrID0gIXRoaXMuY2hlY2s7XG4gICAgaWYgKHRoaXMuY2hlY2spIHtcbiAgICAgIHRoaXMuYnRuU3R5bGUgPSAndG9nZ2xlU3R5bGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ0blN0eWxlID0gJ2Jhc2VTdHlsZSc7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwidmlzaWJsZVwiIGNsYXNzPVwiaWdvLXVzZXItYnV0dG9uLWNvbnRhaW5lclwiPlxuICA8ZGl2PlxuICAgIDxidXR0b25cbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgW21hdFRvb2x0aXBdPVwiY2hlY2tlZCA/ICgnaWdvLmdlby5tYXBCdXR0b25zLm9ubGluZScgfCB0cmFuc2xhdGUpOiAoJ2lnby5nZW8ubWFwQnV0dG9ucy5vZmZsaW5lJyB8IHRyYW5zbGF0ZSlcIlxuICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwibGVmdFwiXG4gICAgICBbbmdDbGFzc109XCJbYnRuU3R5bGVdXCJcbiAgICAgIFtjb2xvcl09XCJjaGVja2VkID8gY29sb3IgOiBbY29sb3JPZmZdXCJcbiAgICAgIChjbGljayk9XCJvblRvZ2dsZSgpXCJcbiAgICAgIChjbGljayk9XCJtYXAub25PZmZsaW5lVG9nZ2xlKGNoZWNrKVwiPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJ3aWZpLXN0cmVuZ3RoLW9mZlwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+Il19