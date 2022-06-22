import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/material/icon";
import * as i4 from "@ngx-translate/core";
export class HomeButtonComponent {
    constructor() {
        this.unselectButton = new EventEmitter();
    }
    onUnselectButtonClick() {
        this.unselectButton.emit();
    }
}
HomeButtonComponent.ɵfac = function HomeButtonComponent_Factory(t) { return new (t || HomeButtonComponent)(); };
HomeButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeButtonComponent, selectors: [["igo-home-button"]], outputs: { unselectButton: "unselectButton" }, decls: 3, vars: 3, consts: [["id", "homeButton", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "click"], ["svgIcon", "home"]], template: function HomeButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function HomeButtonComponent_Template_button_click_0_listener() { return ctx.onUnselectButtonClick(); });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵelement(2, "mat-icon", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.sidenav.mainMenu"));
    } }, directives: [i1.MatButton, i2.MatTooltip, i3.MatIcon], pipes: [i4.TranslatePipe], styles: ["#homeButton[_ngcontent-%COMP%]{position:absolute;top:50px;left:0px;border-radius:0;height:46px;width:48px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-home-button',
                templateUrl: './home-button.component.html',
                styleUrls: ['./home-button.component.scss']
            }]
    }], function () { return []; }, { unselectButton: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvaG9tZS1idXR0b24vaG9tZS1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvaG9tZS1idXR0b24vaG9tZS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFPaEUsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QjtRQUZVLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVwQyxDQUFDO0lBRWhCLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7O3NGQVJVLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FDUGhDLGlDQU1zQztRQUFsQyxnR0FBUywyQkFBdUIsSUFBQzs7UUFDakMsOEJBQW9DO1FBQ3hDLGlCQUFTOztRQUhMLGlGQUF5RDs7dUZERWhELG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7c0NBR1csY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWhvbWUtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS1idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQnV0dG9uQ29tcG9uZW50IHtcblxuICBAT3V0cHV0KCkgdW5zZWxlY3RCdXR0b24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25VbnNlbGVjdEJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMudW5zZWxlY3RCdXR0b24uZW1pdCgpO1xuICB9XG59XG4iLCI8YnV0dG9uXG4gICAgaWQ9XCJob21lQnV0dG9uXCJcbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgIFttYXRUb29sdGlwXT1cIidpZ28uY29udGV4dC5zaWRlbmF2Lm1haW5NZW51JyB8IHRyYW5zbGF0ZVwiXG4gICAgKGNsaWNrKT1cIm9uVW5zZWxlY3RCdXR0b25DbGljaygpXCI+XG4gICAgPG1hdC1pY29uIHN2Z0ljb249XCJob21lXCI+PC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuIl19