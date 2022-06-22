import { Component, Input } from '@angular/core';
import { UserDialogComponent } from './user-dialog.component';
import { userButtonSlideInOut } from './user-button.animation';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@igo2/core";
import * as i3 from "@igo2/auth";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@angular/material/icon";
import * as i8 from "../poi-button/poi-button.component";
import * as i9 from "@ngx-translate/core";
function UserButtonComponent_div_0_igo_poi_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-poi-button", 9);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r1.color)("map", ctx_r1.map);
} }
function UserButtonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, UserButtonComponent_div_0_igo_poi_button_2_Template, 1, 2, "igo-poi-button", 3);
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function UserButtonComponent_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.infoUser(); });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelement(5, "mat-icon", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 4);
    i0.ɵɵlistener("click", function UserButtonComponent_div_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.logout(); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelement(8, "mat-icon", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 7);
    i0.ɵɵlistener("click", function UserButtonComponent_div_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.accountClick(); });
    i0.ɵɵelement(10, "mat-icon", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@userButtonState", ctx_r0.expand ? "expand" : "collapse");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasApi);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(4, 7, "igo.context.userButton.infoTitle"))("color", ctx_r0.color);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(7, 9, "igo.context.userButton.logout"))("color", ctx_r0.color);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("color", ctx_r0.auth.authenticated ? ctx_r0.color : "warn");
} }
export class UserButtonComponent {
    constructor(dialog, config, auth) {
        this.dialog = dialog;
        this.config = config;
        this.auth = auth;
        this.expand = false;
        this.visible = false;
        this.hasApi = false;
        this.visible = this.config.getConfig('auth') ? true : false;
        this.hasApi = this.config.getConfig('context.url') !== undefined;
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    accountClick() {
        if (this.auth.authenticated) {
            this.expand = !this.expand;
        }
        else {
            this.auth.logout();
        }
    }
    logout() {
        this.expand = false;
        this.auth.logout();
    }
    infoUser() {
        this.dialog.open(UserDialogComponent, { disableClose: false });
    }
}
UserButtonComponent.ɵfac = function UserButtonComponent_Factory(t) { return new (t || UserButtonComponent)(i0.ɵɵdirectiveInject(i1.MatDialog), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i3.AuthService)); };
UserButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserButtonComponent, selectors: [["igo-user-button"]], inputs: { map: "map", color: "color" }, decls: 1, vars: 1, consts: [["class", "igo-user-button-container", 4, "ngIf"], [1, "igo-user-button-container"], [1, "igo-user-button-more-container"], [3, "color", "map", 4, "ngIf"], ["mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "color", "click"], ["svgIcon", "information-outline"], ["svgIcon", "power"], ["mat-icon-button", "", 3, "color", "click"], ["svgIcon", "account-box"], [3, "color", "map"]], template: function UserButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, UserButtonComponent_div_0_Template, 11, 11, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [i4.NgIf, i5.MatButton, i6.MatTooltip, i7.MatIcon, i8.PoiButtonComponent], pipes: [i9.TranslatePipe], styles: [".igo-user-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff}.igo-user-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#efefef}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.igo-user-button-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{position:absolute;bottom:0}}.igo-user-button-more-container[_ngcontent-%COMP%]{float:left;height:40px}.igo-user-button-more-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:2px;float:left}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.igo-user-button-more-container[_ngcontent-%COMP%]{height:80px;width:150px;position:relative;left:24px}}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"], data: { animation: [userButtonSlideInOut()] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-user-button',
                templateUrl: './user-button.component.html',
                styleUrls: ['./user-button.component.scss'],
                animations: [userButtonSlideInOut()]
            }]
    }], function () { return [{ type: i1.MatDialog }, { type: i2.ConfigService }, { type: i3.AuthService }]; }, { map: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29udGV4dC9zcmMvbGliL2NvbnRleHQtbWFwLWJ1dHRvbi91c2VyLWJ1dHRvbi91c2VyLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYXAtYnV0dG9uL3VzZXItYnV0dG9uL3VzZXItYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7SUNMM0Qsb0NBQTRFOzs7SUFBN0Msb0NBQWUsbUJBQUE7Ozs7SUFIbEQsOEJBQXVEO0lBQ3JELDhCQUFnRztJQUU5RixnR0FBNEU7SUFFNUUsaUNBS3VCO0lBQXJCLHFMQUFvQjs7SUFDcEIsOEJBQW1EO0lBQ3JELGlCQUFTO0lBRVQsaUNBS3FCO0lBQW5CLG1MQUFrQjs7SUFDbEIsOEJBQXFDO0lBQ3ZDLGlCQUFTO0lBRVgsaUJBQU07SUFFTixpQ0FHMkI7SUFBekIseUxBQXdCO0lBQ3hCLCtCQUEyQztJQUM3QyxpQkFBUztJQUNYLGlCQUFNOzs7SUE5QndDLGVBQW1EO0lBQW5ELHdFQUFtRDtJQUU1RSxlQUFZO0lBQVosb0NBQVk7SUFJM0IsZUFBNkQ7SUFBN0QscUZBQTZELHVCQUFBO0lBUzdELGVBQTBEO0lBQTFELGtGQUEwRCx1QkFBQTtJQVc1RCxlQUE2QztJQUE3Qyx5RUFBNkM7O0FEWGpELE1BQU0sT0FBTyxtQkFBbUI7SUF1QjlCLFlBQ1UsTUFBaUIsRUFDakIsTUFBcUIsRUFDdEIsSUFBaUI7UUFGaEIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQWE7UUFQbkIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQU9wQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBN0JELElBQ0ksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBR0QsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFnQkQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O3NGQS9DVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ2hCaEMsc0VBK0JNOztRQS9CQSxrQ0FBYTsya0NEY0wsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO3VGQUV6QixtQkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxVQUFVLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQ3JDO2tIQUdLLEdBQUc7a0JBRE4sS0FBSztZQVVGLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvYXV0aCc7XG5pbXBvcnQgdHlwZSB7IElnb01hcCB9IGZyb20gJ0BpZ28yL2dlbyc7XG5cbmltcG9ydCB7IFVzZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3VzZXItZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VyQnV0dG9uU2xpZGVJbk91dCB9IGZyb20gJy4vdXNlci1idXR0b24uYW5pbWF0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXVzZXItYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXNlci1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3VzZXJCdXR0b25TbGlkZUluT3V0KCldXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuICBzZXQgbWFwKHZhbHVlOiBJZ29NYXApIHtcbiAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tYXA6IElnb01hcDtcblxuICBASW5wdXQoKVxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG5cbiAgcHVibGljIGV4cGFuZCA9IGZhbHNlO1xuICBwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xuICBwdWJsaWMgaGFzQXBpID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgICBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdhdXRoJykgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5oYXNBcGkgPSB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2NvbnRleHQudXJsJykgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFjY291bnRDbGljaygpIHtcbiAgICBpZiAodGhpcy5hdXRoLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gIXRoaXMuZXhwYW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGgubG9nb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuZXhwYW5kID0gZmFsc2U7XG4gICAgdGhpcy5hdXRoLmxvZ291dCgpO1xuICB9XG5cbiAgaW5mb1VzZXIoKSB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihVc2VyRGlhbG9nQ29tcG9uZW50LCB7IGRpc2FibGVDbG9zZTogZmFsc2UgfSk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJ2aXNpYmxlXCIgY2xhc3M9XCJpZ28tdXNlci1idXR0b24tY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpZ28tdXNlci1idXR0b24tbW9yZS1jb250YWluZXJcIiBbQHVzZXJCdXR0b25TdGF0ZV09XCJleHBhbmQgPyAnZXhwYW5kJyA6ICdjb2xsYXBzZSdcIj5cblxuICAgIDxpZ28tcG9pLWJ1dHRvbiAqbmdJZj1cImhhc0FwaVwiIFtjb2xvcl09XCJjb2xvclwiIFttYXBdPVwibWFwXCI+PC9pZ28tcG9pLWJ1dHRvbj5cblxuICAgIDxidXR0b25cbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5jb250ZXh0LnVzZXJCdXR0b24uaW5mb1RpdGxlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJhYm92ZVwiXG4gICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgKGNsaWNrKT1cImluZm9Vc2VyKClcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiaW5mb3JtYXRpb24tb3V0bGluZVwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uY29udGV4dC51c2VyQnV0dG9uLmxvZ291dCcgfMKgdHJhbnNsYXRlXCJcbiAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cImFib3ZlXCJcbiAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAoY2xpY2spPVwibG9nb3V0KClcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwicG93ZXJcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gIDwvZGl2PlxuXG4gIDxidXR0b25cbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICBbY29sb3JdPVwiYXV0aC5hdXRoZW50aWNhdGVkID8gY29sb3IgOiAnd2FybidcIlxuICAgIChjbGljayk9XCJhY2NvdW50Q2xpY2soKVwiPlxuICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiYWNjb3VudC1ib3hcIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19