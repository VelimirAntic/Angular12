import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import { toolSlideInOut } from './active-ogc-filter-tool.animation';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map.state";
import * as i2 from "@igo2/geo";
let ActiveOgcFilterToolComponent = class ActiveOgcFilterToolComponent {
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
ActiveOgcFilterToolComponent.ɵfac = function ActiveOgcFilterToolComponent_Factory(t) { return new (t || ActiveOgcFilterToolComponent)(i0.ɵɵdirectiveInject(i1.MapState)); };
ActiveOgcFilterToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActiveOgcFilterToolComponent, selectors: [["igo-active-ogc-filter-tool"]], decls: 1, vars: 4, consts: [[3, "map", "layer", "header"]], template: function ActiveOgcFilterToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-ogc-filterable-item", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("map", ctx.map)("layer", ctx.layer)("header", false)("@toolSlideInOut", ctx.animate);
    } }, directives: [i2.OgcFilterableItemComponent], encapsulation: 2, data: { animation: [toolSlideInOut()] } });
ActiveOgcFilterToolComponent = __decorate([
    ToolComponent({
        name: 'activeOgcFilter',
        title: 'igo.integration.tools.ogcFilter',
        icon: 'filter',
        parent: 'mapTools'
    })
], ActiveOgcFilterToolComponent);
export { ActiveOgcFilterToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveOgcFilterToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-active-ogc-filter-tool',
                templateUrl: './active-ogc-filter-tool.component.html',
                animations: [toolSlideInOut()]
            }]
    }], function () { return [{ type: i1.MapState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLW9nYy1maWx0ZXItdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2ZpbHRlci9hY3RpdmUtb2djLWZpbHRlci10b29sL2FjdGl2ZS1vZ2MtZmlsdGVyLXRvb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9maWx0ZXIvYWN0aXZlLW9nYy1maWx0ZXItdG9vbC9hY3RpdmUtb2djLWZpbHRlci10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFJN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O0lBYXZELDRCQUE0QixTQUE1Qiw0QkFBNEI7SUFpQnZDLFlBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGOUIsWUFBTyxHQUFHLE9BQU8sQ0FBQztJQUVlLENBQUM7SUFmekMsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNqQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDL0IsT0FBTyxHQUFHLENBQUM7YUFDWjtTQUNGO1FBQ0QsT0FBTztJQUNULENBQUM7Q0FLRixDQUFBO3dHQWxCWSw0QkFBNEI7K0VBQTVCLDRCQUE0QjtRQ25CekMsNkNBSzBCOztRQUp0Qiw2QkFBVyxvQkFBQSxpQkFBQSxnQ0FBQTsyRkRnQkQsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUVuQiw0QkFBNEI7SUFYeEMsYUFBYSxDQUFDO1FBQ2IsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixLQUFLLEVBQUUsaUNBQWlDO1FBQ3hDLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLFVBQVU7S0FDbkIsQ0FBQztHQU1XLDRCQUE0QixDQWtCeEM7U0FsQlksNEJBQTRCO3VGQUE1Qiw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFVBQVUsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRvb2xDb21wb25lbnQgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgTWFwU3RhdGUgfSBmcm9tICcuLi8uLi9tYXAvbWFwLnN0YXRlJztcbmltcG9ydCB7IExheWVyLCBJZ29NYXAgfSBmcm9tICdAaWdvMi9nZW8nO1xuXG5pbXBvcnQgeyB0b29sU2xpZGVJbk91dCB9IGZyb20gJy4vYWN0aXZlLW9nYy1maWx0ZXItdG9vbC5hbmltYXRpb24nO1xuXG5AVG9vbENvbXBvbmVudCh7XG4gIG5hbWU6ICdhY3RpdmVPZ2NGaWx0ZXInLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5vZ2NGaWx0ZXInLFxuICBpY29uOiAnZmlsdGVyJyxcbiAgcGFyZW50OiAnbWFwVG9vbHMnXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWFjdGl2ZS1vZ2MtZmlsdGVyLXRvb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aXZlLW9nYy1maWx0ZXItdG9vbC5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFt0b29sU2xpZGVJbk91dCgpXVxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVPZ2NGaWx0ZXJUb29sQ29tcG9uZW50IHtcblxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMubWFwU3RhdGUubWFwO1xuICB9XG5cbiAgZ2V0IGxheWVyKCk6IExheWVyIHtcbiAgICBmb3IgKGNvbnN0IGxheSBvZiB0aGlzLm1hcC5sYXllcnMpIHtcbiAgICAgIGlmIChsYXkub3B0aW9ucy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGxheTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHVibGljIGFuaW1hdGUgPSAnZW50ZXInO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtYXBTdGF0ZTogTWFwU3RhdGUpIHt9XG59XG4iLCI8aWdvLW9nYy1maWx0ZXJhYmxlLWl0ZW1cbiAgICBbbWFwXT1cIm1hcFwiXG4gICAgW2xheWVyXT1cImxheWVyXCJcbiAgICBbaGVhZGVyXT1cImZhbHNlXCJcbiAgICBbQHRvb2xTbGlkZUluT3V0XT1cImFuaW1hdGVcIj5cbjwvaWdvLW9nYy1maWx0ZXJhYmxlLWl0ZW0+XG5cblxuIl19