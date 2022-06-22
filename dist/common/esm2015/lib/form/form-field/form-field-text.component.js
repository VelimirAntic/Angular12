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
function FormFieldTextComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 3);
    i0.ɵɵlistener("click", function FormFieldTextComponent_mat_icon_2_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onDisableSwitchClick(); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", i0.ɵɵpipeBind1(1, 1, ctx_r0.disabled$) === true ? "checkbox-blank-outline" : "checkbox-marked-outline");
} }
function FormFieldTextComponent_mat_error_3_Template(rf, ctx) { if (rf & 1) {
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
 * This component renders a text field
 */
let FormFieldTextComponent = class FormFieldTextComponent {
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
FormFieldTextComponent.ɵfac = function FormFieldTextComponent_Factory(t) { return new (t || FormFieldTextComponent)(); };
FormFieldTextComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldTextComponent, selectors: [["igo-form-field-text"]], inputs: { formControl: "formControl", placeholder: "placeholder", errors: "errors", disableSwitch: "disableSwitch" }, decls: 4, vars: 5, consts: [["matInput", "", 3, "required", "placeholder", "formControl"], ["class", "igo-form-disable-switch", "matPrefix", "", 3, "svgIcon", "click", 4, "ngIf"], [4, "ngIf"], ["matPrefix", "", 1, "igo-form-disable-switch", 3, "svgIcon", "click"]], template: function FormFieldTextComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelement(1, "input", 0);
        i0.ɵɵtemplate(2, FormFieldTextComponent_mat_icon_2_Template, 2, 3, "mat-icon", 1);
        i0.ɵɵtemplate(3, FormFieldTextComponent_mat_error_3_Template, 3, 3, "mat-error", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("required", ctx.required)("placeholder", ctx.placeholder)("formControl", ctx.formControl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.disableSwitch === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formControl.errors);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4.NgIf, i5.MatIcon, i1.MatPrefix, i1.MatError], pipes: [i4.AsyncPipe, i6.TranslatePipe], encapsulation: 2, changeDetection: 0 });
FormFieldTextComponent = __decorate([
    IgoFormFieldComponent('text')
], FormFieldTextComponent);
export { FormFieldTextComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldTextComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form-field-text',
                templateUrl: './form-field-text.component.html',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2Zvcm0vZm9ybS1maWVsZC9mb3JtLWZpZWxkLXRleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvZm9ybS9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGV4dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLEtBQUssRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdkIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7OztJQ1JyRSxtQ0FLWTtJQURWLDJNQUFnQzs7SUFFbEMsaUJBQVc7OztJQUhULGdJQUErRjs7O0lBSWpHLGlDQUFzQztJQUFBLFlBQWlDOztJQUFBLGlCQUFZOzs7SUFBN0MsZUFBaUM7SUFBakMsb0VBQWlDOztBREd6RTs7R0FFRztJQU9VLHNCQUFzQixTQUF0QixzQkFBc0I7O1FBRWpDLGNBQVMsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFpQmpFOztXQUVHO1FBQ00sa0JBQWEsR0FBWSxLQUFLLENBQUM7S0FrQ3pDO0lBaENDOztPQUVHO0lBQ0gsSUFBSSxRQUFRO1FBQ1YsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDYixPQUFPLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxjQUFjO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDdkMsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBRUYsQ0FBQTs0RkF4RFksc0JBQXNCO3lFQUF0QixzQkFBc0I7UUN6Qm5DLHNDQUFnQjtRQUNkLDJCQUk4QjtRQUM5QixpRkFNVztRQUNYLG1GQUFtRjtRQUNyRixpQkFBaUI7O1FBWGIsZUFBcUI7UUFBckIsdUNBQXFCLGdDQUFBLGdDQUFBO1FBSXBCLGVBQTRCO1FBQTVCLGlEQUE0QjtRQU1uQixlQUF3QjtRQUF4Qiw2Q0FBd0I7O0FEWXpCLHNCQUFzQjtJQU5sQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUM7R0FNakIsc0JBQXNCLENBd0RsQztTQXhEWSxzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Z0JBUVUsV0FBVztrQkFBbkIsS0FBSztZQUtHLFdBQVc7a0JBQW5CLEtBQUs7WUFLRyxNQUFNO2tCQUFkLEtBQUs7WUFLRyxhQUFhO2tCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBmb3JtQ29udHJvbElzUmVxdWlyZWQsXG4gIGdldENvbnRyb2xFcnJvck1lc3NhZ2Vcbn0gZnJvbSAnLi4vc2hhcmVkL2Zvcm0udXRpbHMnO1xuaW1wb3J0IHsgSWdvRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2Zvcm0tZmllbGQtY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCByZW5kZXJzIGEgdGV4dCBmaWVsZFxuICovXG5ASWdvRm9ybUZpZWxkQ29tcG9uZW50KCd0ZXh0JylcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1mb3JtLWZpZWxkLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1maWVsZC10ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGlzYWJsZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICAvKipcbiAgICogVGhlIGZpZWxkJ3MgZm9ybSBjb250cm9sXG4gICAqL1xuICBASW5wdXQoKSBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgLyoqXG4gICAqIEZpZWxkIHBsYWNlaG9sZGVyXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBGaWVsZCBwbGFjZWhvbGRlclxuICAgKi9cbiAgQElucHV0KCkgZXJyb3JzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcblxuICAvKipcbiAgICogV2hldGVyIGEgZGlzYWJsZSBzd2l0Y2ggc2hvdWxkIGJlIGF2YWlsYWJsZVxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZVN3aXRjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBmaWVsZCBpcyByZXF1aXJlZFxuICAgKi9cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmb3JtQ29udHJvbElzUmVxdWlyZWQodGhpcy5mb3JtQ29udHJvbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpc2FibGVkJC5uZXh0KHRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBnZXRFcnJvck1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0Q29udHJvbEVycm9yTWVzc2FnZSh0aGlzLmZvcm1Db250cm9sLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBvbkRpc2FibGVTd2l0Y2hDbGljaygpIHtcbiAgICB0aGlzLnRvZ2dsZURpc2FibGVkKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZURpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQkLnZhbHVlO1xuICAgIGlmIChkaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZWQkLm5leHQoZGlzYWJsZWQpO1xuICB9XG5cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0XG4gICAgbWF0SW5wdXRcbiAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCI+XG4gIDxtYXQtaWNvblxuICAgICpuZ0lmPVwiZGlzYWJsZVN3aXRjaCA9PT0gdHJ1ZVwiXG4gICAgY2xhc3M9XCJpZ28tZm9ybS1kaXNhYmxlLXN3aXRjaFwiXG4gICAgW3N2Z0ljb25dPVwiKGRpc2FibGVkJCB8IGFzeW5jKSA9PT0gdHJ1ZSA/ICdjaGVja2JveC1ibGFuay1vdXRsaW5lJyA6ICdjaGVja2JveC1tYXJrZWQtb3V0bGluZSdcIlxuICAgIChjbGljayk9XCJvbkRpc2FibGVTd2l0Y2hDbGljaygpXCJcbiAgICBtYXRQcmVmaXg+XG4gIDwvbWF0LWljb24+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtQ29udHJvbC5lcnJvcnNcIj57e2dldEVycm9yTWVzc2FnZSgpIHwgdHJhbnNsYXRlfX08L21hdC1lcnJvcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=