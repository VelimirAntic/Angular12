import { __decorate } from "tslib";
import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { formControlIsRequired, getControlErrorMessage } from '../shared/form.utils';
import { IgoFormFieldComponent } from '../shared/form-field-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/material/icon";
import * as i7 from "@ngx-translate/core";
function FormFieldSelectComponent_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const choice_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", choice_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", choice_r3.title, " ");
} }
function FormFieldSelectComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵlistener("click", function FormFieldSelectComponent_mat_icon_4_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onDisableSwitchClick(); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", i0.ɵɵpipeBind1(1, 1, ctx_r1.disabled$) === true ? "checkbox-blank-outline" : "checkbox-marked-outline");
} }
function FormFieldSelectComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r2.getErrorMessage()));
} }
/**
 * This component renders a select field
 */
let FormFieldSelectComponent = class FormFieldSelectComponent {
    constructor() {
        this.disabled$ = new BehaviorSubject(false);
        this.choices$ = new BehaviorSubject([]);
        /**
         * Wheter a disable switch should be available
         */
        this.disableSwitch = false;
    }
    /**
     * Select input choices
     */
    set choices(value) { this.choices$.next(value); }
    get choices() { return this.choices$.value; }
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
FormFieldSelectComponent.ɵfac = function FormFieldSelectComponent_Factory(t) { return new (t || FormFieldSelectComponent)(); };
FormFieldSelectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldSelectComponent, selectors: [["igo-form-field-select"]], inputs: { choices: "choices", formControl: "formControl", placeholder: "placeholder", errors: "errors", disableSwitch: "disableSwitch" }, decls: 6, vars: 8, consts: [[3, "required", "placeholder", "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "igo-form-disable-switch", "matPrefix", "", 3, "svgIcon", "click", 4, "ngIf"], [4, "ngIf"], [3, "value"], ["matPrefix", "", 1, "igo-form-disable-switch", 3, "svgIcon", "click"]], template: function FormFieldSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-select", 0);
        i0.ɵɵtemplate(2, FormFieldSelectComponent_mat_option_2_Template, 2, 2, "mat-option", 1);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, FormFieldSelectComponent_mat_icon_4_Template, 2, 3, "mat-icon", 2);
        i0.ɵɵtemplate(5, FormFieldSelectComponent_mat_error_5_Template, 3, 3, "mat-error", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("required", ctx.required)("placeholder", ctx.placeholder)("formControl", ctx.formControl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 6, ctx.choices$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.disableSwitch === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formControl.errors);
    } }, directives: [i1.MatFormField, i2.MatSelect, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i4.NgIf, i5.MatOption, i6.MatIcon, i1.MatPrefix, i1.MatError], pipes: [i4.AsyncPipe, i7.TranslatePipe], encapsulation: 2, changeDetection: 0 });
FormFieldSelectComponent = __decorate([
    IgoFormFieldComponent('select')
], FormFieldSelectComponent);
export { FormFieldSelectComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldSelectComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form-field-select',
                templateUrl: './form-field-select.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { choices: [{
            type: Input
        }], formControl: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], errors: [{
            type: Input
        }], disableSwitch: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvZm9ybS9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2Zvcm0vZm9ybS1maWVsZC9mb3JtLWZpZWxkLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLEtBQUssRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEdBQUcsTUFBTSxNQUFNLENBQUM7QUFFeEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7SUNQbkUscUNBQTJFO0lBQ3pFLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRnVDLHVDQUFzQjtJQUN4RSxlQUNGO0lBREUsZ0RBQ0Y7Ozs7SUFFRixtQ0FLWTtJQURWLDZNQUFnQzs7SUFFbEMsaUJBQVc7OztJQUhULGdJQUErRjs7O0lBSWpHLGlDQUFzQztJQUFBLFlBQWlDOztJQUFBLGlCQUFZOzs7SUFBN0MsZUFBaUM7SUFBakMsb0VBQWlDOztBREZ6RTs7R0FFRztJQU9VLHdCQUF3QixTQUF4Qix3QkFBd0I7O1FBRTFCLGNBQVMsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFRakUsYUFBUSxHQUE2QyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQWlCdEY7O1dBRUc7UUFDTSxrQkFBYSxHQUFZLEtBQUssQ0FBQztLQWtDekM7SUE1REM7O09BRUc7SUFDSCxJQUNJLE9BQU8sQ0FBQyxLQUE4QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxJQUFJLE9BQU8sS0FBOEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUF1QnRFOztPQUVHO0lBQ0gsSUFBSSxRQUFRO1FBQ1YsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDYixPQUFPLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxjQUFjO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDdkMsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBRUYsQ0FBQTtnR0FoRVksd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUN2QnJDLHNDQUFnQjtRQUNkLHFDQUc4QjtRQUM1Qix1RkFFYTs7UUFDZixpQkFBYTtRQUNiLG1GQU1XO1FBQ1gscUZBQW1GO1FBQ3JGLGlCQUFpQjs7UUFmYixlQUFxQjtRQUFyQix1Q0FBcUIsZ0NBQUEsZ0NBQUE7UUFHVSxlQUFtQjtRQUFuQiw0REFBbUI7UUFLakQsZUFBNEI7UUFBNUIsaURBQTRCO1FBTW5CLGVBQXdCO1FBQXhCLDZDQUF3Qjs7QURPekIsd0JBQXdCO0lBTnBDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztHQU1uQix3QkFBd0IsQ0FnRXBDO1NBaEVZLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFTSyxPQUFPO2tCQURWLEtBQUs7WUFRRyxXQUFXO2tCQUFuQixLQUFLO1lBS0csV0FBVztrQkFBbkIsS0FBSztZQUtHLE1BQU07a0JBQWQsS0FBSztZQUtHLGFBQWE7a0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBmb3JtQ29udHJvbElzUmVxdWlyZWQsIGdldENvbnRyb2xFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9zaGFyZWQvZm9ybS51dGlscyc7XG5pbXBvcnQgeyBGb3JtRmllbGRTZWxlY3RDaG9pY2UgfSBmcm9tICcuLi9zaGFyZWQvZm9ybS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IElnb0Zvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9mb3JtLWZpZWxkLWNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgcmVuZGVycyBhIHNlbGVjdCBmaWVsZFxuICovXG5ASWdvRm9ybUZpZWxkQ29tcG9uZW50KCdzZWxlY3QnKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWZvcm0tZmllbGQtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tZmllbGQtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICByZWFkb25seSBkaXNhYmxlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgaW5wdXQgY2hvaWNlc1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGNob2ljZXModmFsdWU6IEZvcm1GaWVsZFNlbGVjdENob2ljZVtdKSB7IHRoaXMuY2hvaWNlcyQubmV4dCh2YWx1ZSk7IH1cbiAgZ2V0IGNob2ljZXMoKTogRm9ybUZpZWxkU2VsZWN0Q2hvaWNlW10geyByZXR1cm4gdGhpcy5jaG9pY2VzJC52YWx1ZTsgfVxuICByZWFkb25seSBjaG9pY2VzJDogQmVoYXZpb3JTdWJqZWN0PEZvcm1GaWVsZFNlbGVjdENob2ljZVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIC8qKlxuICAgKiBUaGUgZmllbGQncyBmb3JtIGNvbnRyb2xcbiAgICovXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcblxuICAvKipcbiAgICogRmllbGQgcGxhY2Vob2xkZXJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZpZWxkIHBsYWNlaG9sZGVyXG4gICAqL1xuICBASW5wdXQoKSBlcnJvcnM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIC8qKlxuICAgKiBXaGV0ZXIgYSBkaXNhYmxlIHN3aXRjaCBzaG91bGQgYmUgYXZhaWxhYmxlXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlU3dpdGNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGZpZWxkIGlzIHJlcXVpcmVkXG4gICAqL1xuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZvcm1Db250cm9sSXNSZXF1aXJlZCh0aGlzLmZvcm1Db250cm9sKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlzYWJsZWQkLm5leHQodGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGdldEVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRDb250cm9sRXJyb3JNZXNzYWdlKHRoaXMuZm9ybUNvbnRyb2wsIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIG9uRGlzYWJsZVN3aXRjaENsaWNrKCkge1xuICAgIHRoaXMudG9nZ2xlRGlzYWJsZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZCQudmFsdWU7XG4gICAgaWYgKGRpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbC5lbmFibGUoKTtcbiAgICB9XG4gICAgdGhpcy5kaXNhYmxlZCQubmV4dChkaXNhYmxlZCk7XG4gIH1cblxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LXNlbGVjdFxuICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY2hvaWNlIG9mIGNob2ljZXMkIHwgYXN5bmNcIiBbdmFsdWVdPVwiY2hvaWNlLnZhbHVlXCI+XG4gICAgICB7e2Nob2ljZS50aXRsZX19XG4gICAgPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG4gIDxtYXQtaWNvblxuICAgICpuZ0lmPVwiZGlzYWJsZVN3aXRjaCA9PT0gdHJ1ZVwiXG4gICAgY2xhc3M9XCJpZ28tZm9ybS1kaXNhYmxlLXN3aXRjaFwiXG4gICAgW3N2Z0ljb25dPVwiKGRpc2FibGVkJCB8IGFzeW5jKSA9PT0gdHJ1ZSA/ICdjaGVja2JveC1ibGFuay1vdXRsaW5lJyA6ICdjaGVja2JveC1tYXJrZWQtb3V0bGluZSdcIlxuICAgIChjbGljayk9XCJvbkRpc2FibGVTd2l0Y2hDbGljaygpXCJcbiAgICBtYXRQcmVmaXg+XG4gIDwvbWF0LWljb24+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtQ29udHJvbC5lcnJvcnNcIj57e2dldEVycm9yTWVzc2FnZSgpIHwgdHJhbnNsYXRlfX08L21hdC1lcnJvcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=