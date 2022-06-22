import { Directive, Self } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ogc-filterable-list.component";
import * as i2 from "../../map/shared/map.service";
export class OgcFilterableListBindingDirective {
    constructor(component, mapService) {
        this.mapService = mapService;
        this.component = component;
    }
    ngOnInit() {
        // Override input layers
        this.component.layers = [];
        this.layers$$ = this.mapService.getMap().layers$.subscribe(layers => {
            this.component.layers = layers.filter(layer => layer.showInLayerList);
        });
    }
    ngOnDestroy() {
        this.layers$$.unsubscribe();
    }
}
OgcFilterableListBindingDirective.ɵfac = function OgcFilterableListBindingDirective_Factory(t) { return new (t || OgcFilterableListBindingDirective)(i0.ɵɵdirectiveInject(i1.OgcFilterableListComponent, 2), i0.ɵɵdirectiveInject(i2.MapService)); };
OgcFilterableListBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: OgcFilterableListBindingDirective, selectors: [["", "igoOgcFilterableListBinding", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterableListBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoOgcFilterableListBinding]'
            }]
    }], function () { return [{ type: i1.OgcFilterableListComponent, decorators: [{
                type: Self
            }] }, { type: i2.MapService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlcmFibGUtbGlzdC1iaW5kaW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9vZ2MtZmlsdGVyYWJsZS1saXN0L29nYy1maWx0ZXJhYmxlLWxpc3QtYmluZGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7O0FBU25FLE1BQU0sT0FBTyxpQ0FBaUM7SUFJNUMsWUFDVSxTQUFxQyxFQUNyQyxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7O2tIQXRCVSxpQ0FBaUM7b0ZBQWpDLGlDQUFpQzt1RkFBakMsaUNBQWlDO2NBSDdDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2FBQzFDOztzQkFNSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBTZWxmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXAvc2hhcmVkL21hcC5zZXJ2aWNlJztcbmltcG9ydCB7IE9nY0ZpbHRlcmFibGVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9vZ2MtZmlsdGVyYWJsZS1saXN0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpZ29PZ2NGaWx0ZXJhYmxlTGlzdEJpbmRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBPZ2NGaWx0ZXJhYmxlTGlzdEJpbmRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29tcG9uZW50OiBPZ2NGaWx0ZXJhYmxlTGlzdENvbXBvbmVudDtcbiAgcHJpdmF0ZSBsYXllcnMkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgY29tcG9uZW50OiBPZ2NGaWx0ZXJhYmxlTGlzdENvbXBvbmVudCxcbiAgICBwcml2YXRlIG1hcFNlcnZpY2U6IE1hcFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBPdmVycmlkZSBpbnB1dCBsYXllcnNcbiAgICB0aGlzLmNvbXBvbmVudC5sYXllcnMgPSBbXTtcblxuICAgIHRoaXMubGF5ZXJzJCQgPSB0aGlzLm1hcFNlcnZpY2UuZ2V0TWFwKCkubGF5ZXJzJC5zdWJzY3JpYmUobGF5ZXJzID0+IHtcbiAgICAgIHRoaXMuY29tcG9uZW50LmxheWVycyA9IGxheWVycy5maWx0ZXIobGF5ZXIgPT4gbGF5ZXIuc2hvd0luTGF5ZXJMaXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubGF5ZXJzJCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19