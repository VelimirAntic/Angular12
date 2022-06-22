import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "igo-backdrop-shown": a0 }; };
export class BackdropComponent {
    constructor() { }
    get shown() {
        return this._shown;
    }
    set shown(value) {
        this._shown = value;
    }
}
BackdropComponent.ɵfac = function BackdropComponent_Factory(t) { return new (t || BackdropComponent)(); };
BackdropComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BackdropComponent, selectors: [["igo-backdrop"]], inputs: { shown: "shown" }, decls: 1, vars: 3, consts: [[3, "ngClass"]], template: function BackdropComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c0, ctx.shown));
    } }, directives: [i1.NgClass], styles: ["[_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#64646480;z-index:2;display:none}[_nghost-%COMP%] > div.igo-backdrop-shown[_ngcontent-%COMP%]{display:block}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BackdropComponent, [{
        type: Component,
        args: [{
                selector: 'igo-backdrop',
                templateUrl: './backdrop.component.html',
                styleUrls: ['./backdrop.component.scss']
            }]
    }], function () { return []; }, { shown: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2Ryb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvYmFja2Ryb3AvYmFja2Ryb3AuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvYmFja2Ryb3AvYmFja2Ryb3AuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPakQsTUFBTSxPQUFPLGlCQUFpQjtJQVU1QixnQkFBZSxDQUFDO0lBVGhCLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOztrRkFQVSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtRQ1A5Qix5QkFBcUQ7O1FBQWhELCtEQUF5Qzs7dUZET2pDLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDO3NDQUdLLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWJhY2tkcm9wJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhY2tkcm9wLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFja2Ryb3AuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCYWNrZHJvcENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGdldCBzaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd247XG4gIH1cbiAgc2V0IHNob3duKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd24gPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9zaG93bjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCI8ZGl2IFtuZ0NsYXNzXT1cInsnaWdvLWJhY2tkcm9wLXNob3duJzogc2hvd259XCI+PC9kaXY+XG4iXX0=