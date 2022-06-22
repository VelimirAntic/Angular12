import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/progress-spinner";
const _c0 = function (a1) { return { "igo-spinner-container": true, "igo-spinner-shown": a1 }; };
export class SpinnerComponent {
    constructor() {
        this.shown$ = new BehaviorSubject(false);
    }
    set shown(value) { this.shown$.next(value); }
    get shown() { return this.shown$.value; }
    show() {
        this.shown = true;
    }
    hide() {
        this.shown = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SpinnerComponent, selectors: [["igo-spinner"]], inputs: { shown: "shown" }, decls: 4, vars: 5, consts: [[3, "ngClass"], [1, "igo-spinner-background"], ["diameter", "40", "mode", "indeterminate"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵelement(2, "div", 1);
        i0.ɵɵelement(3, "mat-progress-spinner", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, i0.ɵɵpipeBind1(1, 1, ctx.shown$)));
    } }, directives: [i1.NgClass, i2.MatProgressSpinner], pipes: [i1.AsyncPipe], styles: [".igo-spinner-container[_ngcontent-%COMP%]{display:none;pointer-events:none}.igo-spinner-container.igo-spinner-shown[_ngcontent-%COMP%]{display:block}mat-progress-spinner[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:50%}.igo-spinner-background[_ngcontent-%COMP%]{height:36px;width:36px;border-radius:50%;border:4px solid #ffffff;position:absolute;top:2px;left:2px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'igo-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return []; }, { shown: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBT3ZDLE1BQU0sT0FBTyxnQkFBZ0I7SUFRM0I7UUFOTyxXQUFNLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBTXRELENBQUM7SUFKaEIsSUFDSSxLQUFLLENBQUMsS0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxJQUFJLEtBQUssS0FBYyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUlsRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOztnRkFoQlUsZ0JBQWdCO21FQUFoQixnQkFBZ0I7UUNUN0IsOEJBQ3FGOztRQUNuRix5QkFBMEM7UUFDMUMsMENBQWdGO1FBQ2xGLGlCQUFNOztRQUhKLHNGQUFrRjs7dUZEUXZFLGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDO3NDQU1LLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1zcGlubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zcGlubmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCB7XG5cbiAgcHVibGljIHNob3duJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgQElucHV0KClcbiAgc2V0IHNob3duKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuc2hvd24kLm5leHQodmFsdWUpOyB9XG4gIGdldCBzaG93bigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuc2hvd24kLnZhbHVlOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5zaG93biA9IHRydWU7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuc2hvd24gPSBmYWxzZTtcbiAgfVxufVxuIiwiPGRpdlxuICBbbmdDbGFzc109XCJ7J2lnby1zcGlubmVyLWNvbnRhaW5lcic6IHRydWUsICdpZ28tc3Bpbm5lci1zaG93bic6IChzaG93biQgfCBhc3luYyl9XCI+XG4gIDxkaXYgY2xhc3M9XCJpZ28tc3Bpbm5lci1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gIDxtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBkaWFtZXRlcj1cIjQwXCIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1wcm9ncmVzcy1zcGlubmVyPlxuPC9kaXY+XG4iXX0=