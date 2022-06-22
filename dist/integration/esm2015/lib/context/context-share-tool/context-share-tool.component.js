import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map.state";
import * as i2 from "../../map/layer-list-tool.state";
import * as i3 from "@igo2/context";
let ContextShareToolComponent = class ContextShareToolComponent {
    constructor(mapState, layerListToolState) {
        this.mapState = mapState;
        this.layerListToolState = layerListToolState;
    }
    get map() { return this.mapState.map; }
    get layerListControls() { return this.layerListToolState.getLayerListControls(); }
};
ContextShareToolComponent.ɵfac = function ContextShareToolComponent_Factory(t) { return new (t || ContextShareToolComponent)(i0.ɵɵdirectiveInject(i1.MapState), i0.ɵɵdirectiveInject(i2.LayerListToolState)); };
ContextShareToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextShareToolComponent, selectors: [["igo-context-share-tool"]], decls: 1, vars: 1, consts: [[3, "map"]], template: function ContextShareToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-share-map", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("map", ctx.map);
    } }, directives: [i3.ShareMapComponent], encapsulation: 2 });
ContextShareToolComponent = __decorate([
    ToolComponent({
        name: 'shareMap',
        title: 'igo.integration.tools.shareMap',
        icon: 'share-variant'
    })
], ContextShareToolComponent);
export { ContextShareToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextShareToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-share-tool',
                templateUrl: './context-share-tool.component.html'
            }]
    }], function () { return [{ type: i1.MapState }, { type: i2.LayerListToolState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zaGFyZS10b29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvY29udGV4dC9jb250ZXh0LXNoYXJlLXRvb2wvY29udGV4dC1zaGFyZS10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvY29udGV4dC9jb250ZXh0LXNoYXJlLXRvb2wvY29udGV4dC1zaGFyZS10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0lBZWhDLHlCQUF5QixTQUF6Qix5QkFBeUI7SUFNcEMsWUFDVSxRQUFrQixFQUNsQixrQkFBc0M7UUFEdEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzdDLENBQUM7SUFQSixJQUFJLEdBQUcsS0FBYSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUvQyxJQUFJLGlCQUFpQixLQUErQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQztDQU03RyxDQUFBO2tHQVZZLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDakJ0QyxtQ0FDOEI7O1FBQTVCLDZCQUFXOztBRGdCQSx5QkFBeUI7SUFUckMsYUFBYSxDQUFDO1FBQ2IsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLGdDQUFnQztRQUN2QyxJQUFJLEVBQUUsZUFBZTtLQUN0QixDQUFDO0dBS1cseUJBQXlCLENBVXJDO1NBVlkseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FKckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBJZ29NYXAsIExheWVyTGlzdENvbnRyb2xzT3B0aW9ucyB9IGZyb20gJ0BpZ28yL2dlbyc7XG5cbmltcG9ydCB7IE1hcFN0YXRlIH0gZnJvbSAnLi4vLi4vbWFwL21hcC5zdGF0ZSc7XG5pbXBvcnQgeyBMYXllckxpc3RUb29sU3RhdGUgfSBmcm9tICcuLi8uLi9tYXAvbGF5ZXItbGlzdC10b29sLnN0YXRlJztcblxuQFRvb2xDb21wb25lbnQoe1xuICBuYW1lOiAnc2hhcmVNYXAnLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5zaGFyZU1hcCcsXG4gIGljb246ICdzaGFyZS12YXJpYW50J1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1jb250ZXh0LXNoYXJlLXRvb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGV4dC1zaGFyZS10b29sLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0U2hhcmVUb29sQ29tcG9uZW50IHtcblxuICBnZXQgbWFwKCk6IElnb01hcCB7IHJldHVybiB0aGlzLm1hcFN0YXRlLm1hcDsgfVxuXG4gIGdldCBsYXllckxpc3RDb250cm9scygpOiBMYXllckxpc3RDb250cm9sc09wdGlvbnMgeyByZXR1cm4gdGhpcy5sYXllckxpc3RUb29sU3RhdGUuZ2V0TGF5ZXJMaXN0Q29udHJvbHMoKTsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFwU3RhdGU6IE1hcFN0YXRlLFxuICAgIHByaXZhdGUgbGF5ZXJMaXN0VG9vbFN0YXRlOiBMYXllckxpc3RUb29sU3RhdGVcbiAgKSB7fVxufVxuIiwiPGlnby1zaGFyZS1tYXBcbiAgW21hcF09XCJtYXBcIj48L2lnby1zaGFyZS1tYXA+XG4iXX0=