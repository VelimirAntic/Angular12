import { __decorate } from "tslib";
import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { formControlIsRequired, getControlErrorMessage } from '../shared/form.utils';
import { IgoFormFieldComponent } from '../shared/form-field-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/icon";
import * as i6 from "@ngx-translate/core";
function FormFieldTextareaComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 3);
    i0.ɵɵlistener("click", function FormFieldTextareaComponent_mat_icon_3_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onDisableSwitchClick(); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", i0.ɵɵpipeBind1(1, 1, ctx_r0.disabled$) === true ? "checkbox-blank-outline" : "checkbox-marked-outline");
} }
function FormFieldTextareaComponent_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r1.getErrorMessage()));
} }
/**
 * This component renders a textarea field
 */
let FormFieldTextareaComponent = class FormFieldTextareaComponent {
    constructor() {
        this.disabled$ = new BehaviorSubject(false);
        /**
         * Wheter a disable switch should be available
         */
        this.disableSwitch = false;
    }
    /**
     * Whether the field is required
     */
    get required() {
        return formControlIsRequired(this.formControl);
    }
    ngOnInit() {
        this.disabled$.next(this.formControl.disabled);
    }
    /**
     * Get error message
     */
    getErrorMessage() {
        return getControlErrorMessage(this.formControl, this.errors);
    }
    onDisableSwitchClick() {
        this.toggleDisabled();
    }
    toggleDisabled() {
        const disabled = !this.disabled$.value;
        if (disabled === true) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
        this.disabled$.next(disabled);
    }
};
FormFieldTextareaComponent.ɵfac = function FormFieldTextareaComponent_Factory(t) { return new (t || FormFieldTextareaComponent)(); };
FormFieldTextareaComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldTextareaComponent, selectors: [["igo-form-field-textarea"]], inputs: { formControl: "formControl", placeholder: "placeholder", errors: "errors", disableSwitch: "disableSwitch" }, decls: 5, vars: 5, consts: [["matInput", "", 3, "required", "placeholder", "formControl"], ["class", "igo-form-disable-switch", "matPrefix", "", 3, "svgIcon", "click", 4, "ngIf"], [4, "ngIf"], ["matPrefix", "", 1, "igo-form-disable-switch", 3, "svgIcon", "click"]], template: function FormFieldTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "textarea", 0);
        i0.ɵɵtext(2, "  ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, FormFieldTextareaComponent_mat_icon_3_Template, 2, 3, "mat-icon", 1);
        i0.ɵɵtemplate(4, FormFieldTextareaComponent_mat_error_4_Template, 3, 3, "mat-error", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("required", ctx.required)("placeholder", ctx.placeholder)("formControl", ctx.formControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.disableSwitch === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formControl.errors);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4.NgIf, i5.MatIcon, i1.MatPrefix, i1.MatError], pipes: [i4.AsyncPipe, i6.TranslatePipe], encapsulation: 2, changeDetection: 0 });
FormFieldTextareaComponent = __decorate([
    IgoFormFieldComponent('textarea')
], FormFieldTextareaComponent);
export { FormFieldTextareaComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form-field-textarea',
                templateUrl: './form-field-textarea.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { formControl: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], errors: [{
            type: Input
        }], disableSwitch: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10ZXh0YXJlYS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10ZXh0YXJlYS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLEtBQUssRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7SUNKckUsbUNBS1k7SUFEViwrTUFBZ0M7O0lBRWxDLGlCQUFXOzs7SUFIVCxnSUFBK0Y7OztJQUlqRyxpQ0FBc0M7SUFBQSxZQUFpQzs7SUFBQSxpQkFBWTs7O0lBQTdDLGVBQWlDO0lBQWpDLG9FQUFpQzs7QUREekU7O0dBRUc7SUFPVSwwQkFBMEIsU0FBMUIsMEJBQTBCOztRQUVyQyxjQUFTLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBaUJqRTs7V0FFRztRQUNNLGtCQUFhLEdBQVksS0FBSyxDQUFDO0tBa0N6QztJQWhDQzs7T0FFRztJQUNILElBQUksUUFBUTtRQUNWLE9BQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlO1FBQ2IsT0FBTyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sY0FBYztRQUNwQixNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUVGLENBQUE7b0dBeERZLDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FDdEJ2QyxzQ0FBZ0I7UUFDZCxtQ0FJOEI7UUFDOUIsa0JBQUE7UUFBQSxpQkFBVztRQUNYLHFGQU1XO1FBQ1gsdUZBQW1GO1FBQ3JGLGlCQUFpQjs7UUFaYixlQUFxQjtRQUFyQix1Q0FBcUIsZ0NBQUEsZ0NBQUE7UUFLcEIsZUFBNEI7UUFBNUIsaURBQTRCO1FBTW5CLGVBQXdCO1FBQXhCLDZDQUF3Qjs7QURRekIsMEJBQTBCO0lBTnRDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztHQU1yQiwwQkFBMEIsQ0F3RHRDO1NBeERZLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFRVSxXQUFXO2tCQUFuQixLQUFLO1lBS0csV0FBVztrQkFBbkIsS0FBSztZQUtHLE1BQU07a0JBQWQsS0FBSztZQUtHLGFBQWE7a0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGZvcm1Db250cm9sSXNSZXF1aXJlZCwgZ2V0Q29udHJvbEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL3NoYXJlZC9mb3JtLnV0aWxzJztcbmltcG9ydCB7IElnb0Zvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9mb3JtLWZpZWxkLWNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgcmVuZGVycyBhIHRleHRhcmVhIGZpZWxkXG4gKi9cbkBJZ29Gb3JtRmllbGRDb21wb25lbnQoJ3RleHRhcmVhJylcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1mb3JtLWZpZWxkLXRleHRhcmVhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tZmllbGQtdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRUZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGlzYWJsZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICAvKipcbiAgICogVGhlIGZpZWxkJ3MgZm9ybSBjb250cm9sXG4gICAqL1xuICBASW5wdXQoKSBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgLyoqXG4gICAqIEZpZWxkIHBsYWNlaG9sZGVyXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBGaWVsZCBwbGFjZWhvbGRlclxuICAgKi9cbiAgQElucHV0KCkgZXJyb3JzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcblxuICAvKipcbiAgICogV2hldGVyIGEgZGlzYWJsZSBzd2l0Y2ggc2hvdWxkIGJlIGF2YWlsYWJsZVxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZVN3aXRjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBmaWVsZCBpcyByZXF1aXJlZFxuICAgKi9cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmb3JtQ29udHJvbElzUmVxdWlyZWQodGhpcy5mb3JtQ29udHJvbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpc2FibGVkJC5uZXh0KHRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBnZXRFcnJvck1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0Q29udHJvbEVycm9yTWVzc2FnZSh0aGlzLmZvcm1Db250cm9sLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBvbkRpc2FibGVTd2l0Y2hDbGljaygpIHtcbiAgICB0aGlzLnRvZ2dsZURpc2FibGVkKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZURpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQkLnZhbHVlO1xuICAgIGlmIChkaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZWQkLm5leHQoZGlzYWJsZWQpO1xuICB9XG5cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPHRleHRhcmVhXG4gICAgbWF0SW5wdXRcbiAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCI+XG4gIDwvdGV4dGFyZWE+XG4gIDxtYXQtaWNvblxuICAgICpuZ0lmPVwiZGlzYWJsZVN3aXRjaCA9PT0gdHJ1ZVwiXG4gICAgY2xhc3M9XCJpZ28tZm9ybS1kaXNhYmxlLXN3aXRjaFwiXG4gICAgW3N2Z0ljb25dPVwiKGRpc2FibGVkJCB8IGFzeW5jKSA9PT0gdHJ1ZSA/ICdjaGVja2JveC1ibGFuay1vdXRsaW5lJyA6ICdjaGVja2JveC1tYXJrZWQtb3V0bGluZSdcIlxuICAgIChjbGljayk9XCJvbkRpc2FibGVTd2l0Y2hDbGljaygpXCJcbiAgICBtYXRQcmVmaXg+XG4gIDwvbWF0LWljb24+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtQ29udHJvbC5lcnJvcnNcIj57e2dldEVycm9yTWVzc2FnZSgpIHwgdHJhbnNsYXRlfX08L21hdC1lcnJvcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=