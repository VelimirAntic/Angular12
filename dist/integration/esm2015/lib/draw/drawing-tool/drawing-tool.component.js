import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "../draw.state";
import * as i2 from "../../map/map.state";
import * as i3 from "@igo2/geo";
/**
 * Tool to measure lengths and areas
 */
let DrawingToolComponent = class DrawingToolComponent {
    constructor(drawState, mapState) {
        this.drawState = drawState;
        this.mapState = mapState;
    }
    /**
     * Map to measure on
     * @internal
     */
    get store() { return this.drawState.store; }
    /**
     * Map to measure on
     * @internal
     */
    get map() { return this.mapState.map; }
};
DrawingToolComponent.ɵfac = function DrawingToolComponent_Factory(t) { return new (t || DrawingToolComponent)(i0.ɵɵdirectiveInject(i1.DrawState), i0.ɵɵdirectiveInject(i2.MapState)); };
DrawingToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawingToolComponent, selectors: [["igo-drawing-tool"]], decls: 1, vars: 2, consts: [[3, "store", "map"]], template: function DrawingToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-draw", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("store", ctx.store)("map", ctx.map);
    } }, directives: [i3.DrawComponent], encapsulation: 2, changeDetection: 0 });
DrawingToolComponent = __decorate([
    ToolComponent({
        name: 'draw',
        title: 'igo.integration.tools.draw',
        icon: 'draw'
    })
], DrawingToolComponent);
export { DrawingToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawingToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-drawing-tool',
                templateUrl: './drawing-tool.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DrawState }, { type: i2.MapState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2luZy10b29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvZHJhdy9kcmF3aW5nLXRvb2wvZHJhd2luZy10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvZHJhdy9kcmF3aW5nLXRvb2wvZHJhd2luZy10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUV6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQUs3Qzs7R0FFRztJQVdVLG9CQUFvQixTQUFwQixvQkFBb0I7SUFjakMsWUFDWSxTQUFvQixFQUNwQixRQUFrQjtRQURsQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQztJQWZKOzs7T0FHRztJQUNILElBQUksS0FBSyxLQUE0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVuRTs7O09BR0c7SUFDSCxJQUFJLEdBQUcsS0FBYSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQU85QyxDQUFBO3dGQW5CWSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQ3ZCakMsOEJBQWlEOztRQUF2QyxpQ0FBZSxnQkFBQTs7QUR1Qlosb0JBQW9CO0lBVmhDLGFBQWEsQ0FBQztRQUNYLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLDRCQUE0QjtRQUNuQyxJQUFJLEVBQUUsTUFBTTtLQUNmLENBQUM7R0FNVyxvQkFBb0IsQ0FtQmhDO1NBbkJZLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRvb2xDb21wb25lbnQgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgRmVhdHVyZVN0b3JlLCBGZWF0dXJlLCBJZ29NYXAgfSBmcm9tICdAaWdvMi9nZW8nO1xuaW1wb3J0IHsgTWFwU3RhdGUgfSBmcm9tICcuLi8uLi9tYXAvbWFwLnN0YXRlJztcbmltcG9ydCB7IERyYXdTdGF0ZSB9IGZyb20gJy4uL2RyYXcuc3RhdGUnO1xuXG4vKipcbiAqIFRvb2wgdG8gbWVhc3VyZSBsZW5ndGhzIGFuZCBhcmVhc1xuICovXG5AVG9vbENvbXBvbmVudCh7XG4gICAgbmFtZTogJ2RyYXcnLFxuICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLnRvb2xzLmRyYXcnLFxuICAgIGljb246ICdkcmF3J1xufSlcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWdvLWRyYXdpbmctdG9vbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RyYXdpbmctdG9vbC5jb21wb25lbnQuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRHJhd2luZ1Rvb2xDb21wb25lbnQge1xuXG4vKipcbiAqIE1hcCB0byBtZWFzdXJlIG9uXG4gKiBAaW50ZXJuYWxcbiAqL1xuZ2V0IHN0b3JlKCk6IEZlYXR1cmVTdG9yZTxGZWF0dXJlPiB7IHJldHVybiB0aGlzLmRyYXdTdGF0ZS5zdG9yZTsgfVxuXG4vKipcbiAqIE1hcCB0byBtZWFzdXJlIG9uXG4gKiBAaW50ZXJuYWxcbiAqL1xuZ2V0IG1hcCgpOiBJZ29NYXAgeyByZXR1cm4gdGhpcy5tYXBTdGF0ZS5tYXA7IH1cblxuY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkcmF3U3RhdGU6IERyYXdTdGF0ZSxcbiAgICBwcml2YXRlIG1hcFN0YXRlOiBNYXBTdGF0ZVxuKSB7fVxuXG59XG4iLCI8aWdvLWRyYXcgW3N0b3JlXT1cInN0b3JlXCIgW21hcF09XCJtYXBcIj48L2lnby1kcmF3PlxuIl19