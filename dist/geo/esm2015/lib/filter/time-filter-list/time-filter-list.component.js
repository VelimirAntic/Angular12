import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
function TimeFilterListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-time-filter-item", 2);
} if (rf & 2) {
    const layer_r1 = ctx.$implicit;
    i0.ɵɵproperty("header", true)("layer", layer_r1);
} }
export class TimeFilterListComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this._layers = [];
    }
    get layers() {
        return this._layers;
    }
    set layers(value) {
        this._layers = value;
        this.cdRef.detectChanges();
    }
}
TimeFilterListComponent.ɵfac = function TimeFilterListComponent_Factory(t) { return new (t || TimeFilterListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
TimeFilterListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimeFilterListComponent, selectors: [["igo-time-filter-list"]], inputs: { layers: "layers" }, decls: 3, vars: 6, consts: [[3, "navigation", "selection"], ["ngFor", "", 3, "ngForOf"], ["igoListItem", "", 3, "header", "layer"]], template: function TimeFilterListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-list", 0);
        i0.ɵɵtemplate(1, TimeFilterListComponent_ng_template_1_Template, 1, 2, "ng-template", 1);
        i0.ɵɵpipe(2, "filterableDataSource");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("navigation", false)("selection", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 3, ctx.layers, "time"));
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeFilterListComponent, [{
        type: Component,
        args: [{
                selector: 'igo-time-filter-list',
                templateUrl: './time-filter-list.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { layers: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1maWx0ZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvdGltZS1maWx0ZXItbGlzdC90aW1lLWZpbHRlci1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci90aW1lLWZpbHRlci1saXN0L3RpbWUtZmlsdGVyLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDOzs7SUNIbkIsMENBQXlGOzs7SUFBbkUsNkJBQWUsbUJBQUE7O0FEWXpDLE1BQU0sT0FBTyx1QkFBdUI7SUFXbEMsWUFBb0IsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFGcEMsWUFBTyxHQUFZLEVBQUUsQ0FBQztJQUVpQixDQUFDO0lBVmhELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7OzhGQVJVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDZHBDLG1DQUFtRDtRQUNqRCx3RkFFYzs7UUFDaEIsaUJBQVc7O1FBSkQsa0NBQW9CLG9CQUFBO1FBQ0MsZUFBaUQ7UUFBakQsa0VBQWlEOzt1RkRhbkUsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtvRUFHSyxNQUFNO2tCQURULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9sYXllcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby10aW1lLWZpbHRlci1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUtZmlsdGVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lRmlsdGVyTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGdldCBsYXllcnMoKTogTGF5ZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheWVycztcbiAgfVxuICBzZXQgbGF5ZXJzKHZhbHVlOiBMYXllcltdKSB7XG4gICAgdGhpcy5fbGF5ZXJzID0gdmFsdWU7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgcHJpdmF0ZSBfbGF5ZXJzOiBMYXllcltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG4iLCI8aWdvLWxpc3QgW25hdmlnYXRpb25dPVwiZmFsc2VcIiBbc2VsZWN0aW9uXT1cImZhbHNlXCI+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtbGF5ZXIgW25nRm9yT2ZdPVwibGF5ZXJzIHwgZmlsdGVyYWJsZURhdGFTb3VyY2U6ICd0aW1lJ1wiPlxuICAgIDxpZ28tdGltZS1maWx0ZXItaXRlbSBbaGVhZGVyXT1cInRydWVcIiBpZ29MaXN0SXRlbSBbbGF5ZXJdPVwibGF5ZXJcIj48L2lnby10aW1lLWZpbHRlci1pdGVtPlxuICA8L25nLXRlbXBsYXRlPlxuPC9pZ28tbGlzdD5cbiJdfQ==