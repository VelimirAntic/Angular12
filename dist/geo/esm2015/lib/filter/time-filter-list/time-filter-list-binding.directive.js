import { Directive, Self } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./time-filter-list.component";
import * as i2 from "../../map/shared/map.service";
export class TimeFilterListBindingDirective {
    constructor(component, mapService) {
        this.mapService = mapService;
        this.component = component;
    }
    ngOnInit() {
        // Override input layers
        this.component.layers = [];
        this.layers$$ = this.mapService.getMap().layers$.subscribe(layers => {
            this.component.layers = layers;
        });
    }
    ngOnDestroy() {
        this.layers$$.unsubscribe();
    }
}
TimeFilterListBindingDirective.ɵfac = function TimeFilterListBindingDirective_Factory(t) { return new (t || TimeFilterListBindingDirective)(i0.ɵɵdirectiveInject(i1.TimeFilterListComponent, 2), i0.ɵɵdirectiveInject(i2.MapService)); };
TimeFilterListBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TimeFilterListBindingDirective, selectors: [["", "igoTimeFilterListBinding", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeFilterListBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoTimeFilterListBinding]'
            }]
    }], function () { return [{ type: i1.TimeFilterListComponent, decorators: [{
                type: Self
            }] }, { type: i2.MapService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1maWx0ZXItbGlzdC1iaW5kaW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci90aW1lLWZpbHRlci1saXN0L3RpbWUtZmlsdGVyLWxpc3QtYmluZGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7O0FBU25FLE1BQU0sT0FBTyw4QkFBOEI7SUFJekMsWUFDVSxTQUFrQyxFQUNsQyxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7NEdBdEJVLDhCQUE4QjtpRkFBOUIsOEJBQThCO3VGQUE5Qiw4QkFBOEI7Y0FIMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7YUFDdkM7O3NCQU1JLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFNlbGYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uLy4uL21hcC9zaGFyZWQvbWFwLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGltZUZpbHRlckxpc3RDb21wb25lbnQgfSBmcm9tICcuL3RpbWUtZmlsdGVyLWxpc3QuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lnb1RpbWVGaWx0ZXJMaXN0QmluZGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVGaWx0ZXJMaXN0QmluZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb21wb25lbnQ6IFRpbWVGaWx0ZXJMaXN0Q29tcG9uZW50O1xuICBwcml2YXRlIGxheWVycyQkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNlbGYoKSBjb21wb25lbnQ6IFRpbWVGaWx0ZXJMaXN0Q29tcG9uZW50LFxuICAgIHByaXZhdGUgbWFwU2VydmljZTogTWFwU2VydmljZVxuICApIHtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIE92ZXJyaWRlIGlucHV0IGxheWVyc1xuICAgIHRoaXMuY29tcG9uZW50LmxheWVycyA9IFtdO1xuXG4gICAgdGhpcy5sYXllcnMkJCA9IHRoaXMubWFwU2VydmljZS5nZXRNYXAoKS5sYXllcnMkLnN1YnNjcmliZShsYXllcnMgPT4ge1xuICAgICAgdGhpcy5jb21wb25lbnQubGF5ZXJzID0gbGF5ZXJzO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5sYXllcnMkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=