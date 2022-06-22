import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@ngx-translate/core";
function RotationButtonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementStart(3, "button", 2);
    i0.ɵɵlistener("click", function RotationButtonComponent_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.map.viewController.resetRotation(); });
    i0.ɵɵelement(4, "mat-icon", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r0.rotated ? i0.ɵɵpipeBind1(1, 4, "igo.geo.mapButtons.resetRotation") : i0.ɵɵpipeBind1(2, 6, "igo.geo.mapButtons.tipRotation"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("color", ctx_r0.color)("disabled", !ctx_r0.rotated);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r0.rotationStyle(ctx_r0.map.viewController.getRotation()));
} }
function RotationButtonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementStart(3, "button", 2);
    i0.ɵɵlistener("click", function RotationButtonComponent_div_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.map.viewController.resetRotation(); });
    i0.ɵɵelement(4, "mat-icon", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r1.rotated ? i0.ɵɵpipeBind1(1, 4, "igo.geo.mapButtons.resetRotation") : i0.ɵɵpipeBind1(2, 6, "igo.geo.mapButtons.tipRotation"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("color", ctx_r1.color)("disabled", !ctx_r1.rotated);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r1.rotationStyle(ctx_r1.map.viewController.getRotation()));
} }
export class RotationButtonComponent {
    constructor() { }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get showIfNoRotation() {
        return this._showIfNoRotation;
    }
    set showIfNoRotation(value) {
        this._showIfNoRotation = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get rotated() {
        return this.map.viewController.getRotation() !== 0;
    }
    rotationStyle(radians) {
        const rotation = 'rotate(' + radians + 'rad)';
        return {
            transform: rotation
        };
    }
}
RotationButtonComponent.ɵfac = function RotationButtonComponent_Factory(t) { return new (t || RotationButtonComponent)(); };
RotationButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RotationButtonComponent, selectors: [["igo-rotation-button"]], inputs: { map: "map", showIfNoRotation: "showIfNoRotation", color: "color" }, decls: 2, vars: 2, consts: [["class", "igo-rotation-button-container", "matTooltipPosition", "left", 3, "matTooltip", 4, "ngIf"], ["matTooltipPosition", "left", 1, "igo-rotation-button-container", 3, "matTooltip"], ["mat-icon-button", "", "matTooltipPosition", "left", 3, "color", "disabled", "click"], ["svgIcon", "navigation", 3, "ngStyle"]], template: function RotationButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RotationButtonComponent_div_0_Template, 5, 8, "div", 0);
        i0.ɵɵtemplate(1, RotationButtonComponent_div_1_Template, 5, 8, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.rotated && !ctx.showIfNoRotation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showIfNoRotation);
    } }, directives: [i1.NgIf, i2.MatTooltip, i3.MatButton, i4.MatIcon, i1.NgStyle], pipes: [i5.TranslatePipe], styles: [".igo-rotation-button-container[_ngcontent-%COMP%]{width:40px;background-color:#fff}.igo-rotation-button-container[_ngcontent-%COMP%]:hover{background-color:#efefef}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]     button .mat-button-ripple-round:disabled{display:none}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RotationButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-rotation-button',
                templateUrl: './rotation-button.component.html',
                styleUrls: ['./rotation-button.component.scss']
            }]
    }], function () { return []; }, { map: [{
            type: Input
        }], showIfNoRotation: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9yb3RhdGlvbi1idXR0b24vcm90YXRpb24tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9yb3RhdGlvbi1idXR0b24vcm90YXRpb24tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNBakQsOEJBRTRCOzs7SUFDMUIsaUNBQytDO0lBQTdDLG9LQUFTLHlDQUFrQyxJQUFDO0lBQzVDLDhCQUNXO0lBQ2IsaUJBQVM7SUFDWCxpQkFBTTs7O0lBUEosK0pBQXlIO0lBRXZFLGVBQWU7SUFBZixvQ0FBZSw2QkFBQTtJQUVyRCxlQUEyRDtJQUEzRCx1RkFBMkQ7Ozs7SUFLekUsOEJBRTRCOzs7SUFDMUIsaUNBQytDO0lBQTdDLG9LQUFTLHlDQUFrQyxJQUFDO0lBQzVDLDhCQUNXO0lBQ2IsaUJBQVM7SUFDWCxpQkFBTTs7O0lBUEosK0pBQXlIO0lBRXZFLGVBQWU7SUFBZixvQ0FBZSw2QkFBQTtJQUVyRCxlQUEyRDtJQUEzRCx1RkFBMkQ7O0FETnpFLE1BQU0sT0FBTyx1QkFBdUI7SUFnQ2xDLGdCQUFlLENBQUM7SUEvQmhCLElBQ0ksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBR0QsSUFDSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsS0FBYztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFHRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUdELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFJRCxhQUFhLENBQUMsT0FBTztRQUNuQixNQUFNLFFBQVEsR0FBRyxTQUFTLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM5QyxPQUFPO1lBQ0wsU0FBUyxFQUFFLFFBQVE7U0FDcEIsQ0FBQztJQUNKLENBQUM7OzhGQXZDVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ1RwQyx3RUFRTTtRQUVOLHdFQVFNOztRQWxCQSwyREFBa0M7UUFVbEMsZUFBc0I7UUFBdEIsMkNBQXNCOzt1RkREZix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEO3NDQUdLLEdBQUc7a0JBRE4sS0FBSztZQVVGLGdCQUFnQjtrQkFEbkIsS0FBSztZQVVGLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vc2hhcmVkL21hcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1yb3RhdGlvbi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcm90YXRpb24tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm90YXRpb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm90YXRpb25CdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuICBzZXQgbWFwKHZhbHVlOiBJZ29NYXApIHtcbiAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tYXA6IElnb01hcDtcblxuICBASW5wdXQoKVxuICBnZXQgc2hvd0lmTm9Sb3RhdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0lmTm9Sb3RhdGlvbjtcbiAgfVxuICBzZXQgc2hvd0lmTm9Sb3RhdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dJZk5vUm90YXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9zaG93SWZOb1JvdGF0aW9uOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcblxuICBnZXQgcm90YXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXAudmlld0NvbnRyb2xsZXIuZ2V0Um90YXRpb24oKSAhPT0gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICByb3RhdGlvblN0eWxlKHJhZGlhbnMpOiB7fSB7XG4gICAgY29uc3Qgcm90YXRpb24gPSAncm90YXRlKCcgKyByYWRpYW5zICsgJ3JhZCknO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0aW9uXG4gICAgfTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cInJvdGF0ZWQgJiYgIXNob3dJZk5vUm90YXRpb25cIiBjbGFzcz1cImlnby1yb3RhdGlvbi1idXR0b24tY29udGFpbmVyXCJcbiAgW21hdFRvb2x0aXBdPVwicm90YXRlZCA/ICgnaWdvLmdlby5tYXBCdXR0b25zLnJlc2V0Um90YXRpb24nIHwgdHJhbnNsYXRlKTogKCdpZ28uZ2VvLm1hcEJ1dHRvbnMudGlwUm90YXRpb24nIHwgdHJhbnNsYXRlKVwiXG4gIG1hdFRvb2x0aXBQb3NpdGlvbj1cImxlZnRcIj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VG9vbHRpcFBvc2l0aW9uPVwibGVmdFwiIFtjb2xvcl09XCJjb2xvclwiIFtkaXNhYmxlZF09XCIhcm90YXRlZFwiXG4gICAgKGNsaWNrKT1cIm1hcC52aWV3Q29udHJvbGxlci5yZXNldFJvdGF0aW9uKClcIj5cbiAgICA8bWF0LWljb24gW25nU3R5bGVdPVwicm90YXRpb25TdHlsZShtYXAudmlld0NvbnRyb2xsZXIuZ2V0Um90YXRpb24oKSlcIiBzdmdJY29uPVwibmF2aWdhdGlvblwiPlxuICAgIDwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJzaG93SWZOb1JvdGF0aW9uXCIgY2xhc3M9XCJpZ28tcm90YXRpb24tYnV0dG9uLWNvbnRhaW5lclwiXG4gIFttYXRUb29sdGlwXT1cInJvdGF0ZWQgPyAoJ2lnby5nZW8ubWFwQnV0dG9ucy5yZXNldFJvdGF0aW9uJyB8IHRyYW5zbGF0ZSk6ICgnaWdvLmdlby5tYXBCdXR0b25zLnRpcFJvdGF0aW9uJyB8IHRyYW5zbGF0ZSlcIlxuICBtYXRUb29sdGlwUG9zaXRpb249XCJsZWZ0XCI+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFRvb2x0aXBQb3NpdGlvbj1cImxlZnRcIiBbY29sb3JdPVwiY29sb3JcIiBbZGlzYWJsZWRdPVwiIXJvdGF0ZWRcIlxuICAgIChjbGljayk9XCJtYXAudmlld0NvbnRyb2xsZXIucmVzZXRSb3RhdGlvbigpXCI+XG4gICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cInJvdGF0aW9uU3R5bGUobWFwLnZpZXdDb250cm9sbGVyLmdldFJvdGF0aW9uKCkpXCIgc3ZnSWNvbj1cIm5hdmlnYXRpb25cIj5cbiAgICA8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvZGl2PiJdfQ==