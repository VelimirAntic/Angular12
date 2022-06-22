import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../shared/auth.service";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/common";
import * as i8 from "@ngx-translate/core";
function AuthInternComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function AuthInternComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.loginAnonymous(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.auth.accessAnonymous"), " ");
} }
function AuthInternComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "font", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
export class AuthInternComponent {
    constructor(auth, languageService, fb) {
        this.auth = auth;
        this.languageService = languageService;
        this._allowAnonymous = true;
        this.error = '';
        this.loading = false;
        this.login = new EventEmitter();
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    get allowAnonymous() {
        return this._allowAnonymous;
    }
    set allowAnonymous(value) {
        this._allowAnonymous = value;
    }
    loginUser(values) {
        this.loading = true;
        this.auth.login(values.username, values.password).subscribe(() => {
            this.login.emit(true);
            this.loading = false;
        }, (error) => {
            try {
                this.languageService.translate
                    .get('igo.auth.error.' + error.error.message)
                    .subscribe(errorMsg => (this.error = errorMsg));
            }
            catch (e) {
                this.error = error.error.message;
            }
            this.loading = false;
        });
        return false;
    }
    loginAnonymous() {
        this.auth.loginAnonymous().subscribe(() => {
            this.login.emit(true);
        });
    }
}
AuthInternComponent.ɵfac = function AuthInternComponent_Factory(t) { return new (t || AuthInternComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i3.FormBuilder)); };
AuthInternComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthInternComponent, selectors: [["igo-auth-intern"]], inputs: { allowAnonymous: "allowAnonymous" }, outputs: { login: "login" }, decls: 14, vars: 12, consts: [["role", "form", 3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "required", "", "formControlName", "username", 3, "placeholder"], ["matInput", "", "required", "", "type", "password", "formControlName", "password", 3, "placeholder"], ["mat-raised-button", "", "type", "submit"], ["mat-raised-button", "", "class", "anonymous", "type", "button", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "type", "button", 1, "anonymous", 3, "disabled", "click"], ["size", "3", "color", "red"]], template: function AuthInternComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function AuthInternComponent_Template_form_ngSubmit_0_listener() { return ctx.loginUser(ctx.form.value); });
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "mat-form-field", 1);
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵelementStart(6, "mat-form-field", 1);
        i0.ɵɵelement(7, "input", 3);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 4);
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, AuthInternComponent_button_12_Template, 3, 4, "button", 5);
        i0.ɵɵtemplate(13, AuthInternComponent_div_13_Template, 4, 1, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(4, 6, "igo.auth.user"));
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(8, 8, "igo.auth.password"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 10, "igo.auth.login"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.allowAnonymous);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.error);
    } }, directives: [i3.ɵNgNoValidate, i3.NgControlStatusGroup, i3.FormGroupDirective, i4.MatFormField, i5.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlName, i6.MatButton, i7.NgIf], pipes: [i8.TranslatePipe], styles: [".full-width[_ngcontent-%COMP%]{width:100%}.anonymous[_ngcontent-%COMP%]{margin-left:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthInternComponent, [{
        type: Component,
        args: [{
                selector: 'igo-auth-intern',
                templateUrl: './auth-intern.component.html',
                styleUrls: ['./auth-intern.component.scss'],
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.LanguageService }, { type: i3.FormBuilder }]; }, { allowAnonymous: [{
            type: Input
        }], login: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcm4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL2F1dGgtZm9ybS9hdXRoLWludGVybi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9saWIvYXV0aC1mb3JtL2F1dGgtaW50ZXJuLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQTBCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7OztJQ09sRSxpQ0FBaUk7SUFBM0IsK0xBQTBCO0lBQzlILFlBQ0Y7O0lBQUEsaUJBQVM7OztJQUZ3RSx5Q0FBb0I7SUFDbkcsZUFDRjtJQURFLGlGQUNGOzs7SUFDQSwyQkFBbUI7SUFDakIscUJBQUs7SUFDTCwrQkFBMkI7SUFBQSxZQUFTO0lBQUEsaUJBQU87SUFDN0MsaUJBQU07OztJQUR1QixlQUFTO0lBQVQsa0NBQVM7O0FERHhDLE1BQU0sT0FBTyxtQkFBbUI7SUFnQjlCLFlBQ1MsSUFBaUIsRUFDaEIsZUFBZ0MsRUFDeEMsRUFBZTtRQUZSLFNBQUksR0FBSixJQUFJLENBQWE7UUFDaEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVmxDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRXhCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWIsVUFBSyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBT25FLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNuQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBeEJELElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQW9CRCxTQUFTLENBQUMsTUFBVztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ3pELEdBQUcsRUFBRTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ2IsSUFBSTtnQkFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVM7cUJBQzNCLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztxQkFDNUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUNGLENBQUM7UUFDRixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7c0ZBcERVLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FDbEJoQywrQkFBd0U7UUFBbkMsb0dBQVksNkJBQXFCLElBQUM7UUFDckUsMkJBQUs7UUFDSCx5Q0FBbUM7UUFDakMsMkJBQWtHOztRQUNwRyxpQkFBaUI7UUFDbkIsaUJBQU07UUFFTiwyQkFBSztRQUNILHlDQUFtQztRQUNqQywyQkFBc0g7O1FBQ3hILGlCQUFpQjtRQUNuQixpQkFBTTtRQUVOLGlDQUF3QztRQUFBLGFBQWdDOztRQUFBLGlCQUFTO1FBQ2pGLDRFQUVTO1FBQ1Qsc0VBR007UUFDUixpQkFBTzs7UUFyQkQsb0NBQWtCO1FBR08sZUFBNkM7UUFBN0MsOEVBQTZDO1FBTTdCLGVBQWlEO1FBQWpELGtGQUFpRDtRQUl0RCxlQUFnQztRQUFoQyw4REFBZ0M7UUFDL0QsZUFBb0I7UUFBcEIseUNBQW9CO1FBR3ZCLGVBQVc7UUFBWCxnQ0FBVzs7dUZEQ04sbUJBQW1CO2NBTi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87YUFDakQ7c0hBR0ssY0FBYztrQkFEakIsS0FBSztZQWFJLEtBQUs7a0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWF1dGgtaW50ZXJuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGgtaW50ZXJuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0aC1pbnRlcm4uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XG59KVxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcm5Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBnZXQgYWxsb3dBbm9ueW1vdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93QW5vbnltb3VzO1xuICB9XG4gIHNldCBhbGxvd0Fub255bW91cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FsbG93QW5vbnltb3VzID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfYWxsb3dBbm9ueW1vdXMgPSB0cnVlO1xuXG4gIHB1YmxpYyBlcnJvciA9ICcnO1xuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBsb2dpbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIGZiOiBGb3JtQnVpbGRlclxuICApIHtcbiAgICB0aGlzLmZvcm0gPSBmYi5ncm91cCh7XG4gICAgICB1c2VybmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBsb2dpblVzZXIodmFsdWVzOiBhbnkpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXV0aC5sb2dpbih2YWx1ZXMudXNlcm5hbWUsIHZhbHVlcy5wYXNzd29yZCkuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2luLmVtaXQodHJ1ZSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlXG4gICAgICAgICAgICAuZ2V0KCdpZ28uYXV0aC5lcnJvci4nICsgZXJyb3IuZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZXJyb3JNc2cgPT4gKHRoaXMuZXJyb3IgPSBlcnJvck1zZykpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsb2dpbkFub255bW91cygpIHtcbiAgICB0aGlzLmF1dGgubG9naW5Bbm9ueW1vdXMoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2dpbi5lbWl0KHRydWUpO1xuICAgIH0pO1xuICB9XG59XG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiByb2xlPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJsb2dpblVzZXIoZm9ybS52YWx1ZSlcIj5cbiAgPGRpdj5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJ7eydpZ28uYXV0aC51c2VyJyB8IHRyYW5zbGF0ZX19XCIgZm9ybUNvbnRyb2xOYW1lPVwidXNlcm5hbWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCByZXF1aXJlZCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInt7J2lnby5hdXRoLnBhc3N3b3JkJyB8IHRyYW5zbGF0ZX19XCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cblxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj57eydpZ28uYXV0aC5sb2dpbicgfCB0cmFuc2xhdGV9fTwvYnV0dG9uPlxuICA8YnV0dG9uICpuZ0lmPVwiYWxsb3dBbm9ueW1vdXNcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImFub255bW91c1wiIHR5cGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwibG9hZGluZ1wiIChjbGljayk9XCJsb2dpbkFub255bW91cygpXCI+XG4gICAge3snaWdvLmF1dGguYWNjZXNzQW5vbnltb3VzJyB8IHRyYW5zbGF0ZSB9fVxuICA8L2J1dHRvbj5cbiAgPGRpdiAqbmdJZj1cImVycm9yXCI+XG4gICAgPGJyLz5cbiAgICA8Zm9udCBzaXplPVwiM1wiIGNvbG9yPVwicmVkXCI+e3tlcnJvcn19PC9mb250PlxuICA8L2Rpdj5cbjwvZm9ybT5cblxuPCEtLVxuVGhpcyBwYXJ0IHdhcyByZW1vdmVkIGZyb20gdGhlIGJlbG93IGxpbmUgdG8gZml4IEFuZ3VsYXIgaXNzdWUgMzA2MTYgOiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWQgfHwgbG9hZGluZ1xuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWQgfHwgbG9hZGluZ1wiPnt7J2lnby5hdXRoLmxvZ2luJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+Ki9cbi0tPlxuIl19