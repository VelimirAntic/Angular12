import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../filter/ogc-filterable-item/ogc-filterable-item.component";
export class OgcFilterComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        /**
         * Event emitted on complete
         */
        this.complete = new EventEmitter();
        /**
         * Event emitted on cancel
         */
        this.cancel = new EventEmitter();
    }
    /**
     * Implemented as part of OnUpdateInputs
     */
    onUpdateInputs() {
        this.cdRef.detectChanges();
    }
    /**
     * On close, emit the cancel event
     */
    onClose() {
        this.cancel.emit();
    }
}
OgcFilterComponent.ɵfac = function OgcFilterComponent_Factory(t) { return new (t || OgcFilterComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
OgcFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OgcFilterComponent, selectors: [["igo-ogc-filter"]], inputs: { layer: "layer", map: "map" }, outputs: { complete: "complete", cancel: "cancel" }, decls: 1, vars: 3, consts: [["igoListItem", "", 3, "layer", "header", "map"]], template: function OgcFilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-ogc-filterable-item", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("layer", ctx.layer)("header", false)("map", ctx.map);
    } }, directives: [i1.OgcFilterableItemComponent], styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterComponent, [{
        type: Component,
        args: [{
                selector: 'igo-ogc-filter',
                templateUrl: './ogc-filter.component.html',
                styleUrls: ['./ogc-filter.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { layer: [{
            type: Input
        }], map: [{
            type: Input
        }], complete: [{
            type: Output
        }], cancel: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi93b3Jrc3BhY2Uvd2lkZ2V0cy9vZ2MtZmlsdGVyL29nYy1maWx0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvd29ya3NwYWNlL3dpZGdldHMvb2djLWZpbHRlci9vZ2MtZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDOzs7QUFhdkIsTUFBTSxPQUFPLGtCQUFrQjtJQWdCN0IsWUFBb0IsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFWNUM7O1dBRUc7UUFDTyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUU5Qzs7V0FFRztRQUNPLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBRUcsQ0FBQztJQUVoRDs7T0FFRztJQUNILGNBQWM7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7O29GQTlCVSxrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQ3BCL0IsNkNBSzBCOztRQUh4QixpQ0FBZSxpQkFBQSxnQkFBQTs7dUZEa0JKLGtCQUFrQjtjQU45QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO29FQUdVLEtBQUs7a0JBQWIsS0FBSztZQUVHLEdBQUc7a0JBQVgsS0FBSztZQUtJLFFBQVE7a0JBQWpCLE1BQU07WUFLRyxNQUFNO2tCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPblVwZGF0ZUlucHV0cywgV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9sYXllci9zaGFyZWQvbGF5ZXJzL2xheWVyJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uLy4uL21hcC9zaGFyZWQvbWFwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLW9nYy1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vb2djLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29nYy1maWx0ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgT2djRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25VcGRhdGVJbnB1dHMsIFdpZGdldENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbGF5ZXI6IExheWVyO1xuXG4gIEBJbnB1dCgpIG1hcDogSWdvTWFwO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIG9uIGNvbXBsZXRlXG4gICAqL1xuICBAT3V0cHV0KCkgY29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgb24gY2FuY2VsXG4gICAqL1xuICBAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE9uVXBkYXRlSW5wdXRzXG4gICAqL1xuICBvblVwZGF0ZUlucHV0cygpIHtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjbG9zZSwgZW1pdCB0aGUgY2FuY2VsIGV2ZW50XG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2FuY2VsLmVtaXQoKTtcbiAgfVxuXG59XG4iLCI8aWdvLW9nYy1maWx0ZXJhYmxlLWl0ZW1cbiAgaWdvTGlzdEl0ZW1cbiAgW2xheWVyXT1cImxheWVyXCJcbiAgW2hlYWRlcl09XCJmYWxzZVwiIFxuICBbbWFwXT1cIm1hcFwiID5cbjwvaWdvLW9nYy1maWx0ZXJhYmxlLWl0ZW0+Il19