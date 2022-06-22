import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/material/icon";
import * as i6 from "@ngx-translate/core";
export class MenuButtonComponent {
    constructor(configService) {
        this.configService = configService;
        this.openSidenav = new EventEmitter();
        this.menuButtonReverseColor = false;
        if (typeof this.configService.getConfig('menuButtonReverseColor') !==
            'undefined') {
            this.menuButtonReverseColor = this.configService.getConfig('menuButtonReverseColor');
        }
    }
    get sidenavOpened() {
        return this._sidenavOpenend;
    }
    set sidenavOpened(value) {
        this._sidenavOpenend = value;
        this.getClassMenuButton();
    }
    getClassMenuButton() {
        if (this.sidenavOpened) {
            this.menuButtonClass = {
                'menu-button': this.menuButtonReverseColor === false,
                'menu-button-reverse-color': this.menuButtonReverseColor === true
            };
        }
        else {
            this.menuButtonClass = {
                'menu-button': this.menuButtonReverseColor === false,
                'menu-button-reverse-color-close': this.menuButtonReverseColor === true
            };
        }
    }
    onToggleSidenavClick() {
        this.openSidenav.emit();
    }
}
MenuButtonComponent.ɵfac = function MenuButtonComponent_Factory(t) { return new (t || MenuButtonComponent)(i0.ɵɵdirectiveInject(i1.ConfigService)); };
MenuButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuButtonComponent, selectors: [["igo-menu-button"]], inputs: { sidenavOpened: "sidenavOpened" }, outputs: { openSidenav: "openSidenav" }, decls: 3, vars: 4, consts: [["mat-icon-button", "", "id", "menu-button", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "ngClass", "matTooltip", "click"], ["svgIcon", "menu"]], template: function MenuButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function MenuButtonComponent_Template_button_click_0_listener() { return ctx.onToggleSidenavClick(); });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵelement(2, "mat-icon", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.menuButtonClass)("matTooltip", i0.ɵɵpipeBind1(1, 2, ctx.sidenavOpened ? "menu.close" : "menu.open"));
    } }, directives: [i2.MatButton, i3.NgClass, i4.MatTooltip, i5.MatIcon], pipes: [i6.TranslatePipe], styles: ["#menu-button[_ngcontent-%COMP%]{background-color:#fff;border-radius:0;left:5px;top:5px}#menu-button.menu-button-reverse-color[_ngcontent-%COMP%]{height:40px;border-radius:0;height:45px;width:48px;left:0px;top:3px}#menu-button.menu-button-reverse-color-close[_ngcontent-%COMP%]{border-radius:0;left:5px;top:5px}mat-icon.disabled[_ngcontent-%COMP%]{color:#00000061}#menu-button[_ngcontent-%COMP%]     div.mat-button-ripple-round{border-radius:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-menu-button',
                templateUrl: './menu-button.component.html',
                styleUrls: ['./menu-button.component.scss']
            }]
    }], function () { return [{ type: i1.ConfigService }]; }, { sidenavOpened: [{
            type: Input
        }], openSidenav: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWFwL21lbnUtYnV0dG9uL21lbnUtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9tZW51LWJ1dHRvbi9tZW51LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVN2RSxNQUFNLE9BQU8sbUJBQW1CO0lBa0I5QixZQUFtQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5yQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFekMsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBS3BDLElBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztZQUM3RCxXQUFXLEVBQ1g7WUFDQSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQ3hELHdCQUF3QixDQUN6QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBekJELElBQ0ksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBb0JELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRztnQkFDckIsYUFBYSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxLQUFLO2dCQUNwRCwyQkFBMkIsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEtBQUssSUFBSTthQUNsRSxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUc7Z0JBQ3JCLGFBQWEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEtBQUssS0FBSztnQkFDcEQsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixLQUFLLElBQUk7YUFDeEUsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7O3NGQTdDVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1RoQyxpQ0FPcUM7UUFBakMsZ0dBQVMsMEJBQXNCLElBQUM7O1FBQ2hDLDhCQUFvQztRQUN4QyxpQkFBUzs7UUFOTCw2Q0FBMkIsb0ZBQUE7O3VGRE1sQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDO2dFQUlLLGFBQWE7a0JBRGhCLEtBQUs7WUFVSSxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tbWVudS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b25Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzaWRlbmF2T3BlbmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaWRlbmF2T3BlbmVuZDtcbiAgfVxuICBzZXQgc2lkZW5hdk9wZW5lZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NpZGVuYXZPcGVuZW5kID0gdmFsdWU7XG4gICAgdGhpcy5nZXRDbGFzc01lbnVCdXR0b24oKTtcbiAgfVxuICBwcml2YXRlIF9zaWRlbmF2T3BlbmVuZDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgb3BlblNpZGVuYXYgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgbWVudUJ1dHRvblJldmVyc2VDb2xvciA9IGZhbHNlO1xuXG4gIHB1YmxpYyBtZW51QnV0dG9uQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygnbWVudUJ1dHRvblJldmVyc2VDb2xvcicpICE9PVxuICAgICAgJ3VuZGVmaW5lZCdcbiAgICApIHtcbiAgICAgIHRoaXMubWVudUJ1dHRvblJldmVyc2VDb2xvciA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoXG4gICAgICAgICdtZW51QnV0dG9uUmV2ZXJzZUNvbG9yJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXRDbGFzc01lbnVCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMuc2lkZW5hdk9wZW5lZCkge1xuICAgICAgdGhpcy5tZW51QnV0dG9uQ2xhc3MgPSB7XG4gICAgICAgICdtZW51LWJ1dHRvbic6IHRoaXMubWVudUJ1dHRvblJldmVyc2VDb2xvciA9PT0gZmFsc2UsXG4gICAgICAgICdtZW51LWJ1dHRvbi1yZXZlcnNlLWNvbG9yJzogdGhpcy5tZW51QnV0dG9uUmV2ZXJzZUNvbG9yID09PSB0cnVlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lbnVCdXR0b25DbGFzcyA9IHtcbiAgICAgICAgJ21lbnUtYnV0dG9uJzogdGhpcy5tZW51QnV0dG9uUmV2ZXJzZUNvbG9yID09PSBmYWxzZSxcbiAgICAgICAgJ21lbnUtYnV0dG9uLXJldmVyc2UtY29sb3ItY2xvc2UnOiB0aGlzLm1lbnVCdXR0b25SZXZlcnNlQ29sb3IgPT09IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgb25Ub2dnbGVTaWRlbmF2Q2xpY2soKSB7XG4gICAgdGhpcy5vcGVuU2lkZW5hdi5lbWl0KCk7XG4gIH1cbn1cbiIsIjxidXR0b25cbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICBpZD0gXCJtZW51LWJ1dHRvblwiXG4gICAgW25nQ2xhc3NdPVwibWVudUJ1dHRvbkNsYXNzXCJcbiAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgIFttYXRUb29sdGlwXT1cIihzaWRlbmF2T3BlbmVkID8gJ21lbnUuY2xvc2UnIDogJ21lbnUub3BlbicpIHwgdHJhbnNsYXRlXCJcbiAgICAoY2xpY2spPVwib25Ub2dnbGVTaWRlbmF2Q2xpY2soKVwiPlxuICAgIDxtYXQtaWNvbiBzdmdJY29uPVwibWVudVwiPjwvbWF0LWljb24+XG48L2J1dHRvbj5cbiJdfQ==