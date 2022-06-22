import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { getControlErrorMessage } from '../shared/form.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../form-field/form-field.component";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@ngx-translate/core";
function FormGroupComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "igo-form-field", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r2.getFieldNgClass(field_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r3);
} }
function FormGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, FormGroupComponent_div_0_div_1_Template, 2, 2, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.group.fields);
} }
function FormGroupComponent_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r1.getErrorMessage()));
} }
const _c0 = ["*"];
/**
 * A configurable form, optionnally bound to an entity
 * (for example in case of un update). Submitting that form
 * emits an event with the form data but no other operation is performed.
 */
export class FormGroupComponent {
    constructor() { }
    /**
     * Form group control
     */
    get formControl() { return this.group.control; }
    /**
     * Return the number of columns a field should occupy.
     * The maximum allowed is 2, even if the field config says more.
     * @param field Field
     * @returns Number of columns
     * @internal
     */
    getFieldColSpan(field) {
        let colSpan = 2;
        const options = field.options || {};
        if (options.cols && options.cols > 0) {
            colSpan = Math.min(options.cols, 2);
        }
        return colSpan;
    }
    /**
     * Return the number of columns a field should occupy.
     * The maximum allowed is 2, even if the field config says more.
     * @param field Field
     * @returns Number of columns
     * @internal
     */
    getFieldNgClass(field) {
        const colspan = this.getFieldColSpan(field);
        return { [`igo-form-field-colspan-${colspan}`]: true };
    }
    /**
     * Get error message
     */
    getErrorMessage() {
        const options = this.group.options || {};
        return getControlErrorMessage(this.formControl, options.errors || {});
    }
}
FormGroupComponent.ɵfac = function FormGroupComponent_Factory(t) { return new (t || FormGroupComponent)(); };
FormGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormGroupComponent, selectors: [["igo-form-group"]], inputs: { group: "group", errors: "errors" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [["class", "igo-form-group-fields", 4, "ngIf"], [1, "igo-form-group-extra-content"], [4, "ngIf"], [1, "igo-form-group-fields"], ["class", "igo-form-field-wrapper", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "igo-form-field-wrapper", 3, "ngClass"], [3, "field"]], template: function FormGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, FormGroupComponent_div_0_Template, 2, 1, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, FormGroupComponent_mat_error_3_Template, 3, 3, "mat-error", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.group && ctx.group.fields.length > 0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.formControl.errors);
    } }, directives: [i1.NgIf, i1.NgForOf, i1.NgClass, i2.FormFieldComponent, i3.MatError], pipes: [i4.TranslatePipe], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:block;overflow:auto;padding:10px 5px}.igo-form-field-wrapper[_ngcontent-%COMP%]{display:inline-block;padding:0 5px}.igo-form-field-colspan-2[_ngcontent-%COMP%]{width:100%}.igo-form-field-colspan-1[_ngcontent-%COMP%]{width:50%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormGroupComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form-group',
                templateUrl: './form-group.component.html',
                styleUrls: ['./form-group.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { group: [{
            type: Input
        }], errors: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7SUNKNUQsOEJBR3FDO0lBQ25DLG9DQUFpRDtJQUNuRCxpQkFBTTs7OztJQUZKLDBEQUFrQztJQUNsQixlQUFlO0lBQWYsZ0NBQWU7OztJQVBuQyw4QkFFZ0M7SUFDOUIseUVBS007SUFDUixpQkFBTTs7O0lBTGdCLGVBQWU7SUFBZiw2Q0FBZTs7O0lBV3JDLGlDQUFzQztJQUFBLFlBQWlDOztJQUFBLGlCQUFZOzs7SUFBN0MsZUFBaUM7SUFBakMsb0VBQWlDOzs7QURMdkU7Ozs7R0FJRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUFpQjdCLGdCQUFlLENBQUM7SUFMaEI7O09BRUc7SUFDSCxJQUFJLFdBQVcsS0FBZ0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFJM0Q7Ozs7OztPQU1HO0lBQ0gsZUFBZSxDQUFDLEtBQWdCO1FBQzlCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDcEMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxlQUFlLENBQUMsS0FBZ0I7UUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxPQUFPLEVBQUMsQ0FBQywwQkFBMEIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlO1FBQ2IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3pDLE9BQU8sc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O29GQXREVSxrQkFBa0I7cUVBQWxCLGtCQUFrQjs7UUNyQi9CLG1FQVNNO1FBRU4sOEJBQTBDO1FBQ3hDLGtCQUF5QjtRQUMzQixpQkFBTTtRQUVOLCtFQUFtRjs7UUFkaEYsK0RBQXNDO1FBYzdCLGVBQXdCO1FBQXhCLDZDQUF3Qjs7dUZETXZCLGtCQUFrQjtjQU45QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3NDQU1VLEtBQUs7a0JBQWIsS0FBSztZQUtHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBnZXRDb250cm9sRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vc2hhcmVkL2Zvcm0udXRpbHMnO1xuaW1wb3J0IHsgRm9ybUZpZWxkLCBGb3JtRmllbGRHcm91cCB9IGZyb20gJy4uL3NoYXJlZC9mb3JtLmludGVyZmFjZXMnO1xuXG4vKipcbiAqIEEgY29uZmlndXJhYmxlIGZvcm0sIG9wdGlvbm5hbGx5IGJvdW5kIHRvIGFuIGVudGl0eVxuICogKGZvciBleGFtcGxlIGluIGNhc2Ugb2YgdW4gdXBkYXRlKS4gU3VibWl0dGluZyB0aGF0IGZvcm1cbiAqIGVtaXRzIGFuIGV2ZW50IHdpdGggdGhlIGZvcm0gZGF0YSBidXQgbm8gb3RoZXIgb3BlcmF0aW9uIGlzIHBlcmZvcm1lZC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWZvcm0tZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0tZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogRm9ybSBmaWVsZCBncm91cFxuICAgKi9cbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1GaWVsZEdyb3VwO1xuXG4gIC8qKlxuICAgKiBGaWVsZCBwbGFjZWhvbGRlclxuICAgKi9cbiAgQElucHV0KCkgZXJyb3JzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcblxuICAvKipcbiAgICogRm9ybSBncm91cCBjb250cm9sXG4gICAqL1xuICBnZXQgZm9ybUNvbnRyb2woKTogRm9ybUdyb3VwIHsgcmV0dXJuIHRoaXMuZ3JvdXAuY29udHJvbDsgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBudW1iZXIgb2YgY29sdW1ucyBhIGZpZWxkIHNob3VsZCBvY2N1cHkuXG4gICAqIFRoZSBtYXhpbXVtIGFsbG93ZWQgaXMgMiwgZXZlbiBpZiB0aGUgZmllbGQgY29uZmlnIHNheXMgbW9yZS5cbiAgICogQHBhcmFtIGZpZWxkIEZpZWxkXG4gICAqIEByZXR1cm5zIE51bWJlciBvZiBjb2x1bW5zXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0RmllbGRDb2xTcGFuKGZpZWxkOiBGb3JtRmllbGQpOiBudW1iZXIge1xuICAgIGxldCBjb2xTcGFuID0gMjtcbiAgICBjb25zdCBvcHRpb25zID0gZmllbGQub3B0aW9ucyB8fCB7fTtcbiAgICBpZiAob3B0aW9ucy5jb2xzICYmIG9wdGlvbnMuY29scyA+IDApIHtcbiAgICAgIGNvbFNwYW4gPSBNYXRoLm1pbihvcHRpb25zLmNvbHMsIDIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xTcGFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYSBmaWVsZCBzaG91bGQgb2NjdXB5LlxuICAgKiBUaGUgbWF4aW11bSBhbGxvd2VkIGlzIDIsIGV2ZW4gaWYgdGhlIGZpZWxkIGNvbmZpZyBzYXlzIG1vcmUuXG4gICAqIEBwYXJhbSBmaWVsZCBGaWVsZFxuICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgY29sdW1uc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldEZpZWxkTmdDbGFzcyhmaWVsZDogRm9ybUZpZWxkKToge1trZXk6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICBjb25zdCBjb2xzcGFuID0gdGhpcy5nZXRGaWVsZENvbFNwYW4oZmllbGQpO1xuICAgIHJldHVybiB7W2BpZ28tZm9ybS1maWVsZC1jb2xzcGFuLSR7Y29sc3Bhbn1gXTogdHJ1ZX07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGdldEVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdyb3VwLm9wdGlvbnMgfHwge307XG4gICAgcmV0dXJuIGdldENvbnRyb2xFcnJvck1lc3NhZ2UodGhpcy5mb3JtQ29udHJvbCwgb3B0aW9ucy5lcnJvcnMgfHwge30pO1xuICB9XG5cbn1cbiIsIjxkaXZcbiAgKm5nSWY9XCJncm91cCAmJiBncm91cC5maWVsZHMubGVuZ3RoID4gMFwiXG4gIGNsYXNzPVwiaWdvLWZvcm0tZ3JvdXAtZmllbGRzXCI+XG4gIDxkaXZcbiAgICAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZ3JvdXAuZmllbGRzXCJcbiAgICBjbGFzcz1cImlnby1mb3JtLWZpZWxkLXdyYXBwZXJcIlxuICAgIFtuZ0NsYXNzXT1cImdldEZpZWxkTmdDbGFzcyhmaWVsZClcIj5cbiAgICA8aWdvLWZvcm0tZmllbGQgW2ZpZWxkXT1cImZpZWxkXCI+PC9pZ28tZm9ybS1maWVsZD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImlnby1mb3JtLWdyb3VwLWV4dHJhLWNvbnRlbnRcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5cbjxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtQ29udHJvbC5lcnJvcnNcIj57e2dldEVycm9yTWVzc2FnZSgpIHwgdHJhbnNsYXRlfX08L21hdC1lcnJvcj5cbiJdfQ==