import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "../measure.state";
import * as i2 from "../../map/map.state";
import * as i3 from "@igo2/geo";
/**
 * Tool to measure lengths and areas
 */
let MeasurerToolComponent = class MeasurerToolComponent {
    constructor(measureState, mapState) {
        this.measureState = measureState;
        this.mapState = mapState;
    }
    /**
     * Map to measure on
     * @internal
     */
    get store() { return this.measureState.store; }
    /**
     * Map to measure on
     * @internal
     */
    get map() { return this.mapState.map; }
};
MeasurerToolComponent.ɵfac = function MeasurerToolComponent_Factory(t) { return new (t || MeasurerToolComponent)(i0.ɵɵdirectiveInject(i1.MeasureState), i0.ɵɵdirectiveInject(i2.MapState)); };
MeasurerToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MeasurerToolComponent, selectors: [["igo-measurer-tool"]], decls: 1, vars: 2, consts: [[3, "store", "map"]], template: function MeasurerToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-measurer", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("store", ctx.store)("map", ctx.map);
    } }, directives: [i3.MeasurerComponent], encapsulation: 2, changeDetection: 0 });
MeasurerToolComponent = __decorate([
    ToolComponent({
        name: 'measurer',
        title: 'igo.integration.tools.measurer',
        icon: 'ruler'
    })
], MeasurerToolComponent);
export { MeasurerToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeasurerToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-measurer-tool',
                templateUrl: './measurer-tool.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.MeasureState }, { type: i2.MapState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZXItdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL21lYXN1cmUvbWVhc3VyZXItdG9vbC9tZWFzdXJlci10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvbWVhc3VyZS9tZWFzdXJlci10b29sL21lYXN1cmVyLXRvb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBSzdDOztHQUVHO0lBV1UscUJBQXFCLFNBQXJCLHFCQUFxQjtJQWNoQyxZQUNVLFlBQTBCLEVBQzFCLFFBQWtCO1FBRGxCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDekIsQ0FBQztJQWZKOzs7T0FHRztJQUNILElBQUksS0FBSyxLQUF1QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVqRjs7O09BR0c7SUFDSCxJQUFJLEdBQUcsS0FBYSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQU9oRCxDQUFBOzBGQW5CWSxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ3ZCbEMsa0NBQXlEOztRQUEzQyxpQ0FBZSxnQkFBQTs7QUR1QmhCLHFCQUFxQjtJQVZqQyxhQUFhLENBQUM7UUFDYixJQUFJLEVBQUUsVUFBVTtRQUNoQixLQUFLLEVBQUUsZ0NBQWdDO1FBQ3ZDLElBQUksRUFBRSxPQUFPO0tBQ2QsQ0FBQztHQU1XLHFCQUFxQixDQW1CakM7U0FuQlkscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBGZWF0dXJlU3RvcmUsIEZlYXR1cmVXaXRoTWVhc3VyZSwgSWdvTWFwIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB7IE1hcFN0YXRlIH0gZnJvbSAnLi4vLi4vbWFwL21hcC5zdGF0ZSc7XG5pbXBvcnQgeyBNZWFzdXJlU3RhdGUgfSBmcm9tICcuLi9tZWFzdXJlLnN0YXRlJztcblxuLyoqXG4gKiBUb29sIHRvIG1lYXN1cmUgbGVuZ3RocyBhbmQgYXJlYXNcbiAqL1xuQFRvb2xDb21wb25lbnQoe1xuICBuYW1lOiAnbWVhc3VyZXInLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5tZWFzdXJlcicsXG4gIGljb246ICdydWxlcidcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tbWVhc3VyZXItdG9vbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZWFzdXJlci10b29sLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWVhc3VyZXJUb29sQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogTWFwIHRvIG1lYXN1cmUgb25cbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgc3RvcmUoKTogRmVhdHVyZVN0b3JlPEZlYXR1cmVXaXRoTWVhc3VyZT4geyByZXR1cm4gdGhpcy5tZWFzdXJlU3RhdGUuc3RvcmU7IH1cblxuICAvKipcbiAgICogTWFwIHRvIG1lYXN1cmUgb25cbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgbWFwKCk6IElnb01hcCB7IHJldHVybiB0aGlzLm1hcFN0YXRlLm1hcDsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWVhc3VyZVN0YXRlOiBNZWFzdXJlU3RhdGUsXG4gICAgcHJpdmF0ZSBtYXBTdGF0ZTogTWFwU3RhdGVcbiAgKSB7fVxuXG59XG4iLCI8aWdvLW1lYXN1cmVyIFtzdG9yZV09XCJzdG9yZVwiIFttYXBdPVwibWFwXCI+PC9pZ28tbWVhc3VyZXI+XG4iXX0=