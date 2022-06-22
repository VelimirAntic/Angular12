import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/material/icon";
import * as i4 from "@ngx-translate/core";
const _c0 = function (a0) { return { zoom: a0 }; };
export class ZoomButtonComponent {
    constructor() { }
    get zoom() { return this.map.viewController.getZoom(); }
    get minZoom() { return this.map.viewController.olView.getMinZoom() || 1; }
    get maxZoom() { return this.map.viewController.olView.getMaxZoom(); }
}
ZoomButtonComponent.ɵfac = function ZoomButtonComponent_Factory(t) { return new (t || ZoomButtonComponent)(); };
ZoomButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ZoomButtonComponent, selectors: [["igo-zoom-button"]], inputs: { map: "map", color: "color" }, decls: 7, vars: 16, consts: [[1, "igo-zoom-button-container"], ["mat-icon-button", "", "matTooltipPosition", "left", 3, "matTooltip", "color", "disabled", "click"], ["svgIcon", "plus"], ["svgIcon", "minus"]], template: function ZoomButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function ZoomButtonComponent_Template_button_click_1_listener() { return ctx.map.viewController.zoomIn(); });
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelement(3, "mat-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 1);
        i0.ɵɵlistener("click", function ZoomButtonComponent_Template_button_click_4_listener() { return ctx.map.viewController.zoomOut(); });
        i0.ɵɵpipe(5, "translate");
        i0.ɵɵelement(6, "mat-icon", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind2(2, 6, "igo.geo.mapButtons.zoomIn", i0.ɵɵpureFunction1(12, _c0, ctx.zoom + 1)))("color", ctx.color)("disabled", ctx.zoom >= ctx.maxZoom);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind2(5, 9, "igo.geo.mapButtons.zoomOut", i0.ɵɵpureFunction1(14, _c0, ctx.zoom - 1)))("color", ctx.color)("disabled", ctx.zoom <= ctx.minZoom);
    } }, directives: [i1.MatButton, i2.MatTooltip, i3.MatIcon], pipes: [i4.TranslatePipe], styles: [".igo-zoom-button-container[_ngcontent-%COMP%]{width:40px}.igo-zoom-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff}.igo-zoom-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#efefef}.igo-zoom-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-bottom:2px}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZoomButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-zoom-button',
                templateUrl: './zoom-button.component.html',
                styleUrls: ['./zoom-button.component.scss']
            }]
    }], function () { return []; }, { map: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWFwL3pvb20tYnV0dG9uL3pvb20tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC96b29tLWJ1dHRvbi96b29tLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVNqRCxNQUFNLE9BQU8sbUJBQW1CO0lBWTlCLGdCQUFlLENBQUM7SUFOaEIsSUFBSSxJQUFJLEtBQWEsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFaEUsSUFBSSxPQUFPLEtBQWEsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRixJQUFJLE9BQU8sS0FBYSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7O3NGQVZsRSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1RoQyw4QkFBdUM7UUFDckMsaUNBTXdDO1FBQXRDLGdHQUFTLCtCQUEyQixJQUFDOztRQUNyQyw4QkFBb0M7UUFDdEMsaUJBQVM7UUFFVCxpQ0FNeUM7UUFBdkMsZ0dBQVMsZ0NBQTRCLElBQUM7O1FBQ3RDLDhCQUFxQztRQUN2QyxpQkFBUztRQUNYLGlCQUFNOztRQWpCRixlQUF3RTtRQUF4RSx5SEFBd0Usb0JBQUEscUNBQUE7UUFVeEUsZUFBeUU7UUFBekUsMEhBQXlFLG9CQUFBLHFDQUFBOzt1RkRKaEUsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QztzQ0FHVSxHQUFHO2tCQUFYLEtBQUs7WUFFRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uL3NoYXJlZC9tYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tem9vbS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vem9vbS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi96b29tLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFpvb21CdXR0b25Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG1hcDogSWdvTWFwO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgZ2V0IHpvb20oKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWFwLnZpZXdDb250cm9sbGVyLmdldFpvb20oKTsgfVxuXG4gIGdldCBtaW5ab29tKCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1hcC52aWV3Q29udHJvbGxlci5vbFZpZXcuZ2V0TWluWm9vbSgpIHx8IDE7IH1cblxuICBnZXQgbWF4Wm9vbSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tYXAudmlld0NvbnRyb2xsZXIub2xWaWV3LmdldE1heFpvb20oKTsgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJpZ28tem9vbS1idXR0b24tY29udGFpbmVyXCI+XG4gIDxidXR0b25cbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5tYXBCdXR0b25zLnpvb21JbicgfCB0cmFuc2xhdGU6IHt6b29tOiB6b29tICsgMX1cIlxuICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cImxlZnRcIlxuICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgW2Rpc2FibGVkXT1cInpvb20gPj0gbWF4Wm9vbVwiXG4gICAgKGNsaWNrKT1cIm1hcC52aWV3Q29udHJvbGxlci56b29tSW4oKVwiPlxuICAgIDxtYXQtaWNvbiBzdmdJY29uPVwicGx1c1wiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuXG4gIDxidXR0b25cbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5tYXBCdXR0b25zLnpvb21PdXQnIHwgdHJhbnNsYXRlOiB7em9vbTogem9vbSAtIDF9XCJcbiAgICBtYXRUb29sdGlwUG9zaXRpb249XCJsZWZ0XCJcbiAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgIFtkaXNhYmxlZF09XCJ6b29tIDw9IG1pblpvb21cIlxuICAgIChjbGljayk9XCJtYXAudmlld0NvbnRyb2xsZXIuem9vbU91dCgpXCI+XG4gICAgPG1hdC1pY29uIHN2Z0ljb249XCJtaW51c1wiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=