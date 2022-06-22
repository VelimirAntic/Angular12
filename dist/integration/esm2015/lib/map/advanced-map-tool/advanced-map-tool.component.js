import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "./advanced-swipe/advanced-swipe.component";
import * as i2 from "@angular/material/divider";
import * as i3 from "./advanced-coordinates/advanced-coordinates.component";
import * as i4 from "@ngx-translate/core";
let AdvancedMapToolComponent = class AdvancedMapToolComponent {
};
AdvancedMapToolComponent.ɵfac = function AdvancedMapToolComponent_Factory(t) { return new (t || AdvancedMapToolComponent)(); };
AdvancedMapToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdvancedMapToolComponent, selectors: [["igo-advanced-map-tool"]], decls: 10, vars: 6, consts: [[1, "nameOfTool"], [1, "advanced-tool-line"]], template: function AdvancedMapToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "igo-advanced-swipe");
        i0.ɵɵelement(4, "mat-divider", 1);
        i0.ɵɵelementStart(5, "h4", 0);
        i0.ɵɵtext(6);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "igo-advanced-coordinates");
        i0.ɵɵelement(9, "mat-divider", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, "igo.integration.advanced-map-tool.advanced-swipe.swipe-tool"));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 4, "igo.integration.advanced-map-tool.advanced-coordinates.coordinates"));
    } }, directives: [i1.AdvancedSwipeComponent, i2.MatDivider, i3.AdvancedCoordinatesComponent], pipes: [i4.TranslatePipe], styles: [".nameOfTool[_ngcontent-%COMP%]{text-align:center;font-weight:bold;font-size:small;margin:15px 10px 0}.advanced-tool-line[_ngcontent-%COMP%]{height:2px;background-color:gray}"] });
AdvancedMapToolComponent = __decorate([
    ToolComponent({
        name: 'advancedMap',
        title: 'igo.integration.tools.advancedMap',
        icon: 'toolbox'
    })
    /**
     * Tool to handle the advanced map tools
     */
], AdvancedMapToolComponent);
export { AdvancedMapToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdvancedMapToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-advanced-map-tool',
                templateUrl: './advanced-map-tool.component.html',
                styleUrls: ['./advanced-map-tool.component.scss']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtbWFwLXRvb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvYWR2YW5jZWQtbWFwLXRvb2wvYWR2YW5jZWQtbWFwLXRvb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvYWR2YW5jZWQtbWFwLXRvb2wvYWR2YW5jZWQtbWFwLXRvb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0lBaUJoQyx3QkFBd0IsU0FBeEIsd0JBQXdCO0NBRXBDLENBQUE7Z0dBRlksd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUNsQnJDLDZCQUF1QjtRQUFBLFlBQTZFOztRQUFBLGlCQUFLO1FBQ3pHLHFDQUF5QztRQUN6QyxpQ0FBc0Q7UUFFdEQsNkJBQXVCO1FBQUEsWUFBb0Y7O1FBQUEsaUJBQUs7UUFDaEgsMkNBQXFEO1FBQ3JELGlDQUFzRDs7UUFOL0IsZUFBNkU7UUFBN0UseUdBQTZFO1FBSTdFLGVBQW9GO1FBQXBGLGdIQUFvRjs7QURjOUYsd0JBQXdCO0lBZnBDLGFBQWEsQ0FBQztRQUNiLElBQUksRUFBRSxhQUFhO1FBQ25CLEtBQUssRUFBRSxtQ0FBbUM7UUFDMUMsSUFBSSxFQUFFLFNBQVM7S0FDaEIsQ0FBQztJQUVGOztPQUVHO0dBT1Usd0JBQXdCLENBRXBDO1NBRlksd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FOcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuQFRvb2xDb21wb25lbnQoe1xuICBuYW1lOiAnYWR2YW5jZWRNYXAnLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5hZHZhbmNlZE1hcCcsXG4gIGljb246ICd0b29sYm94J1xufSlcblxuLyoqXG4gKiBUb29sIHRvIGhhbmRsZSB0aGUgYWR2YW5jZWQgbWFwIHRvb2xzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1hZHZhbmNlZC1tYXAtdG9vbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1tYXAtdG9vbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkdmFuY2VkLW1hcC10b29sLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBZHZhbmNlZE1hcFRvb2xDb21wb25lbnQge1xuXG59XG4iLCI8aDQgY2xhc3M9XCJuYW1lT2ZUb29sXCI+e3snaWdvLmludGVncmF0aW9uLmFkdmFuY2VkLW1hcC10b29sLmFkdmFuY2VkLXN3aXBlLnN3aXBlLXRvb2wnIHwgdHJhbnNsYXRlfX08L2g0PlxuPGlnby1hZHZhbmNlZC1zd2lwZT48L2lnby1hZHZhbmNlZC1zd2lwZT5cbjxtYXQtZGl2aWRlciBjbGFzcz1cImFkdmFuY2VkLXRvb2wtbGluZVwiPjwvbWF0LWRpdmlkZXI+XG5cbjxoNCBjbGFzcz1cIm5hbWVPZlRvb2xcIj57eydpZ28uaW50ZWdyYXRpb24uYWR2YW5jZWQtbWFwLXRvb2wuYWR2YW5jZWQtY29vcmRpbmF0ZXMuY29vcmRpbmF0ZXMnIHwgdHJhbnNsYXRlfX08L2g0PlxuPGlnby1hZHZhbmNlZC1jb29yZGluYXRlcz48L2lnby1hZHZhbmNlZC1jb29yZGluYXRlcz5cbjxtYXQtZGl2aWRlciBjbGFzcz1cImFkdmFuY2VkLXRvb2wtbGluZVwiPjwvbWF0LWRpdmlkZXI+XG4iXX0=