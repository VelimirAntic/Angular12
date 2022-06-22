import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map.state";
import * as i2 from "@igo2/geo";
let PrintToolComponent = class PrintToolComponent {
    constructor(mapState) {
        this.mapState = mapState;
    }
    get map() {
        return this.mapState.map;
    }
};
PrintToolComponent.ɵfac = function PrintToolComponent_Factory(t) { return new (t || PrintToolComponent)(i0.ɵɵdirectiveInject(i1.MapState)); };
PrintToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PrintToolComponent, selectors: [["igo-print-tool"]], decls: 1, vars: 1, consts: [[3, "map"]], template: function PrintToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-print", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("map", ctx.map);
    } }, directives: [i2.PrintComponent], encapsulation: 2 });
PrintToolComponent = __decorate([
    ToolComponent({
        name: 'print',
        title: 'igo.integration.tools.print',
        icon: 'printer'
    })
], PrintToolComponent);
export { PrintToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PrintToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-print-tool',
                templateUrl: './print-tool.component.html'
            }]
    }], function () { return [{ type: i1.MapState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQtdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL3ByaW50L3ByaW50LXRvb2wvcHJpbnQtdG9vbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL3ByaW50L3ByaW50LXRvb2wvcHJpbnQtdG9vbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0lBY2hDLGtCQUFrQixTQUFsQixrQkFBa0I7SUFLN0IsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFKMUMsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUMzQixDQUFDO0NBR0YsQ0FBQTtvRkFOWSxrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQ2hCL0IsK0JBQW1DOztRQUF4Qiw2QkFBVzs7QURnQlQsa0JBQWtCO0lBVDlCLGFBQWEsQ0FBQztRQUNiLElBQUksRUFBRSxPQUFPO1FBQ2IsS0FBSyxFQUFFLDZCQUE2QjtRQUNwQyxJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDO0dBS1csa0JBQWtCLENBTTlCO1NBTlksa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICdAaWdvMi9nZW8nO1xuXG5pbXBvcnQgeyBNYXBTdGF0ZSB9IGZyb20gJy4uLy4uL21hcC9tYXAuc3RhdGUnO1xuXG5AVG9vbENvbXBvbmVudCh7XG4gIG5hbWU6ICdwcmludCcsXG4gIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLnRvb2xzLnByaW50JyxcbiAgaWNvbjogJ3ByaW50ZXInXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXByaW50LXRvb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJpbnQtdG9vbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUHJpbnRUb29sQ29tcG9uZW50IHtcbiAgZ2V0IG1hcCgpOiBJZ29NYXAge1xuICAgIHJldHVybiB0aGlzLm1hcFN0YXRlLm1hcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwU3RhdGU6IE1hcFN0YXRlKSB7fVxufVxuIiwiPGlnby1wcmludCBbbWFwXT1cIm1hcFwiPjwvaWdvLXByaW50PlxuIl19