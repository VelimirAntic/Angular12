import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
function OgcFilterableListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-ogc-filterable-item", 2);
} if (rf & 2) {
    const layer_r1 = ctx.$implicit;
    i0.ɵɵproperty("header", true)("layer", layer_r1)("map", layer_r1.map);
} }
export class OgcFilterableListComponent {
    constructor() { }
}
OgcFilterableListComponent.ɵfac = function OgcFilterableListComponent_Factory(t) { return new (t || OgcFilterableListComponent)(); };
OgcFilterableListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OgcFilterableListComponent, selectors: [["igo-ogc-filterable-list"]], inputs: { layers: "layers", map: "map" }, decls: 3, vars: 6, consts: [[3, "navigation", "selection"], ["ngFor", "", 3, "ngForOf"], ["igoListItem", "", 3, "header", "layer", "map"]], template: function OgcFilterableListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-list", 0);
        i0.ɵɵtemplate(1, OgcFilterableListComponent_ng_template_1_Template, 1, 3, "ng-template", 1);
        i0.ɵɵpipe(2, "filterableDataSource");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("navigation", false)("selection", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 3, ctx.layers, "ogc"));
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterableListComponent, [{
        type: Component,
        args: [{
                selector: 'igo-ogc-filterable-list',
                templateUrl: './ogc-filterable-list.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { layers: [{
            type: Input
        }], map: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlcmFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvb2djLWZpbHRlcmFibGUtbGlzdC9vZ2MtZmlsdGVyYWJsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9vZ2MtZmlsdGVyYWJsZS1saXN0L29nYy1maWx0ZXJhYmxlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDOzs7SUNGbkIsNkNBQzZDOzs7SUFEUiw2QkFBZSxtQkFBQSxxQkFBQTs7QURZeEQsTUFBTSxPQUFPLDBCQUEwQjtJQU1yQyxnQkFBZSxDQUFDOztvR0FOTCwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ2R2QyxtQ0FBbUQ7UUFDakQsMkZBR2M7O1FBQ2hCLGlCQUFXOztRQUxELGtDQUFvQixvQkFBQTtRQUNDLGVBQWdEO1FBQWhELGlFQUFnRDs7dUZEYWxFLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7c0NBR1UsTUFBTTtrQkFBZCxLQUFLO1lBRUcsR0FBRztrQkFBWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9sYXllcic7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi9tYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tb2djLWZpbHRlcmFibGUtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vZ2MtZmlsdGVyYWJsZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgT2djRmlsdGVyYWJsZUxpc3RDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGxheWVyczogTGF5ZXJbXTtcblxuICBASW5wdXQoKSBtYXA6IElnb01hcDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCI8aWdvLWxpc3QgW25hdmlnYXRpb25dPVwiZmFsc2VcIiBbc2VsZWN0aW9uXT1cImZhbHNlXCI+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtbGF5ZXIgW25nRm9yT2ZdPVwibGF5ZXJzIHwgZmlsdGVyYWJsZURhdGFTb3VyY2U6ICdvZ2MnXCI+XG4gICAgPGlnby1vZ2MtZmlsdGVyYWJsZS1pdGVtIGlnb0xpc3RJdGVtIFtoZWFkZXJdPVwidHJ1ZVwiIFtsYXllcl09XCJsYXllclwiIFxuICAgIFttYXBdPVwibGF5ZXIubWFwXCIgPjwvaWdvLW9nYy1maWx0ZXJhYmxlLWl0ZW0+XG4gIDwvbmctdGVtcGxhdGU+XG48L2lnby1saXN0PlxuIl19