import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import { toolSlideInOut } from './active-time-filter-tool.animation';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map.state";
import * as i2 from "@igo2/geo";
let ActiveTimeFilterToolComponent = class ActiveTimeFilterToolComponent {
    constructor(mapState) {
        this.mapState = mapState;
        this.animate = 'enter';
    }
    get map() {
        return this.mapState.map;
    }
    get layer() {
        for (const lay of this.map.layers) {
            if (lay.options.active === true) {
                return lay;
            }
        }
        return;
    }
};
ActiveTimeFilterToolComponent.ɵfac = function ActiveTimeFilterToolComponent_Factory(t) { return new (t || ActiveTimeFilterToolComponent)(i0.ɵɵdirectiveInject(i1.MapState)); };
ActiveTimeFilterToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActiveTimeFilterToolComponent, selectors: [["igo-active-time-filter-tool"]], decls: 1, vars: 4, consts: [[3, "map", "layer", "header"]], template: function ActiveTimeFilterToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-time-filter-item", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("map", ctx.map)("layer", ctx.layer)("header", false)("@toolSlideInOut", ctx.animate);
    } }, directives: [i2.TimeFilterItemComponent], encapsulation: 2, data: { animation: [toolSlideInOut()] } });
ActiveTimeFilterToolComponent = __decorate([
    ToolComponent({
        name: 'activeTimeFilter',
        title: 'igo.integration.tools.timeFilter',
        icon: 'history',
        parent: 'mapTools'
    })
], ActiveTimeFilterToolComponent);
export { ActiveTimeFilterToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveTimeFilterToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-active-time-filter-tool',
                templateUrl: './active-time-filter-tool.component.html',
                animations: [toolSlideInOut()]
            }]
    }], function () { return [{ type: i1.MapState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLXRpbWUtZmlsdGVyLXRvb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9maWx0ZXIvYWN0aXZlLXRpbWUtZmlsdGVyLXRvb2wvYWN0aXZlLXRpbWUtZmlsdGVyLXRvb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9maWx0ZXIvYWN0aXZlLXRpbWUtZmlsdGVyLXRvb2wvYWN0aXZlLXRpbWUtZmlsdGVyLXRvb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUc3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7SUFheEQsNkJBQTZCLFNBQTdCLDZCQUE2QjtJQWlCeEMsWUFBbUIsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUY5QixZQUFPLEdBQUcsT0FBTyxDQUFDO0lBRWUsQ0FBQztJQWZ6QyxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2pDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUMvQixPQUFPLEdBQUcsQ0FBQzthQUNaO1NBQ0Y7UUFDRCxPQUFPO0lBQ1QsQ0FBQztDQUtGLENBQUE7MEdBbEJZLDZCQUE2QjtnRkFBN0IsNkJBQTZCO1FDbEIxQywwQ0FLdUI7O1FBSm5CLDZCQUFXLG9CQUFBLGlCQUFBLGdDQUFBO3dGRGVELENBQUMsY0FBYyxFQUFFLENBQUM7QUFFbkIsNkJBQTZCO0lBWHpDLGFBQWEsQ0FBQztRQUNiLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsS0FBSyxFQUFFLGtDQUFrQztRQUN6QyxJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxVQUFVO0tBQ25CLENBQUM7R0FNVyw2QkFBNkIsQ0FrQnpDO1NBbEJZLDZCQUE2Qjt1RkFBN0IsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsMENBQTBDO2dCQUN2RCxVQUFVLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IE1hcFN0YXRlIH0gZnJvbSAnLi4vLi4vbWFwL21hcC5zdGF0ZSc7XG5pbXBvcnQgeyBJZ29NYXAsIExheWVyIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB7IHRvb2xTbGlkZUluT3V0IH0gZnJvbSAnLi9hY3RpdmUtdGltZS1maWx0ZXItdG9vbC5hbmltYXRpb24nO1xuXG5AVG9vbENvbXBvbmVudCh7XG4gIG5hbWU6ICdhY3RpdmVUaW1lRmlsdGVyJyxcbiAgdGl0bGU6ICdpZ28uaW50ZWdyYXRpb24udG9vbHMudGltZUZpbHRlcicsXG4gIGljb246ICdoaXN0b3J5JyxcbiAgcGFyZW50OiAnbWFwVG9vbHMnXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWFjdGl2ZS10aW1lLWZpbHRlci10b29sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGl2ZS10aW1lLWZpbHRlci10b29sLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW3Rvb2xTbGlkZUluT3V0KCldXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZVRpbWVGaWx0ZXJUb29sQ29tcG9uZW50IHtcblxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMubWFwU3RhdGUubWFwO1xuICB9XG5cbiAgZ2V0IGxheWVyKCk6IExheWVyIHtcbiAgICBmb3IgKGNvbnN0IGxheSBvZiB0aGlzLm1hcC5sYXllcnMpIHtcbiAgICAgIGlmIChsYXkub3B0aW9ucy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGxheTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHVibGljIGFuaW1hdGUgPSAnZW50ZXInO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtYXBTdGF0ZTogTWFwU3RhdGUpIHt9XG59XG4iLCI8aWdvLXRpbWUtZmlsdGVyLWl0ZW1cbiAgICBbbWFwXT1cIm1hcFwiXG4gICAgW2xheWVyXT1cImxheWVyXCJcbiAgICBbaGVhZGVyXT1cImZhbHNlXCJcbiAgICBbQHRvb2xTbGlkZUluT3V0XT1cImFuaW1hdGVcIj5cbjwvaWdvLXRpbWUtZmlsdGVyLWl0ZW0+XG4iXX0=