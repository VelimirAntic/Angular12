import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { getDefaultErrorMessages } from '../shared';
import * as i0 from "@angular/core";
import * as i1 from "../shared/form-field.service";
import * as i2 from "@angular/common";
import * as i3 from "../../dynamic-component/dynamic-outlet/dynamic-outlet.component";
function FormFieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "igo-dynamic-outlet", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("component", ctx_r0.getFieldComponent())("inputs", ctx_r0.getFieldInputs())("subscribers", ctx_r0.getFieldSubscribers());
} }
/**
 * This component renders the proper form input based on
 * the field configuration it receives.
 */
export class FormFieldComponent {
    constructor(formFieldService) {
        this.formFieldService = formFieldService;
        /**
         * Field inputs cache
         */
        this.fieldInputs = undefined;
        /**
         * Field subscribers cache
         */
        this.fieldSubscribers = undefined;
    }
    get fieldOptions() {
        return this.field.options || {};
    }
    getFieldComponent() {
        return this.formFieldService.getFieldByType(this.field.type || 'text');
    }
    getFieldInputs() {
        if (this.fieldInputs !== undefined) {
            return this.fieldInputs;
        }
        const errors = this.fieldOptions.errors || {};
        this.fieldInputs = Object.assign({
            placeholder: this.field.title,
            disableSwitch: this.fieldOptions.disableSwitch || false
        }, Object.assign({}, this.field.inputs || {}), {
            formControl: this.field.control,
            errors: Object.assign({}, getDefaultErrorMessages(), errors)
        });
        return this.fieldInputs;
    }
    getFieldSubscribers() {
        if (this.fieldSubscribers !== undefined) {
            return this.fieldSubscribers;
        }
        this.fieldSubscribers = Object.assign({}, this.field.subscribers || {});
        return this.fieldSubscribers;
    }
}
FormFieldComponent.ɵfac = function FormFieldComponent_Factory(t) { return new (t || FormFieldComponent)(i0.ɵɵdirectiveInject(i1.FormFieldService)); };
FormFieldComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldComponent, selectors: [["igo-form-field"]], inputs: { field: "field" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "component", "inputs", "subscribers"]], template: function FormFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormFieldComponent_ng_container_0_Template, 2, 3, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.field !== undefined);
    } }, directives: [i2.NgIf, i3.DynamicOutletComponent], styles: ["mat-form-field{width:100%}  .igo-form-disable-switch{margin-right:8px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form-field',
                templateUrl: './form-field.component.html',
                styleUrls: ['./form-field.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.FormFieldService }]; }, { field: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sV0FBVyxDQUFDOzs7Ozs7SUNOcEQsNkJBQTBDO0lBQ3hDLHdDQUlxQjtJQUN2QiwwQkFBZTs7O0lBSlgsZUFBaUM7SUFBakMsc0RBQWlDLG1DQUFBLDZDQUFBOztBRE1yQzs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sa0JBQWtCO0lBcUI3QixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWR0RDs7V0FFRztRQUNLLGdCQUFXLEdBQW9CLFNBQVMsQ0FBQztRQUVqRDs7V0FFRztRQUNLLHFCQUFnQixHQUF5RSxTQUFTLENBQUM7SUFNbEQsQ0FBQztJQUoxRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBSUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUM5QjtZQUNFLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDN0IsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxJQUFJLEtBQUs7U0FDeEQsRUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFDMUM7WUFDRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQy9CLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sQ0FBQztTQUM3RCxDQUNGLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDOUI7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEUsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7b0ZBdERVLGtCQUFrQjtxRUFBbEIsa0JBQWtCO1FDbEIvQixxRkFNZTs7UUFOQSw4Q0FBeUI7O3VGRGtCM0Isa0JBQWtCO2NBTjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7bUVBTVUsS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1GaWVsZCwgRm9ybUZpZWxkSW5wdXRzLCBGb3JtRmllbGRPcHRpb25zIH0gZnJvbSAnLi4vc2hhcmVkL2Zvcm0uaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBGb3JtRmllbGRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2Zvcm0tZmllbGQuc2VydmljZSc7XG5pbXBvcnQgeyBnZXREZWZhdWx0RXJyb3JNZXNzYWdlcyB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgcmVuZGVycyB0aGUgcHJvcGVyIGZvcm0gaW5wdXQgYmFzZWQgb25cbiAqIHRoZSBmaWVsZCBjb25maWd1cmF0aW9uIGl0IHJlY2VpdmVzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tZm9ybS1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS1maWVsZC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBGaWVsZCBjb25maWd1cmF0aW9uXG4gICAqL1xuICBASW5wdXQoKSBmaWVsZDogRm9ybUZpZWxkO1xuXG4gIC8qKlxuICAgKiBGaWVsZCBpbnB1dHMgY2FjaGVcbiAgICovXG4gIHByaXZhdGUgZmllbGRJbnB1dHM6IEZvcm1GaWVsZElucHV0cyA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogRmllbGQgc3Vic2NyaWJlcnMgY2FjaGVcbiAgICovXG4gIHByaXZhdGUgZmllbGRTdWJzY3JpYmVyczoge1trZXk6IHN0cmluZ106ICh7ZmllbGQ6IEZvcm1GaWVsZCwgY29udHJvbDogRm9ybUNvbnRyb2x9KSA9PiB2b2lkIH0gPSB1bmRlZmluZWQ7XG5cbiAgZ2V0IGZpZWxkT3B0aW9ucygpOiBGb3JtRmllbGRPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZC5vcHRpb25zIHx8IHt9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtRmllbGRTZXJ2aWNlOiBGb3JtRmllbGRTZXJ2aWNlKSB7fVxuXG4gIGdldEZpZWxkQ29tcG9uZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUZpZWxkU2VydmljZS5nZXRGaWVsZEJ5VHlwZSh0aGlzLmZpZWxkLnR5cGUgfHwgJ3RleHQnKTtcbiAgfVxuXG4gIGdldEZpZWxkSW5wdXRzKCk6IEZvcm1GaWVsZElucHV0cyB7XG4gICAgaWYgKHRoaXMuZmllbGRJbnB1dHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGRJbnB1dHM7XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5maWVsZE9wdGlvbnMuZXJyb3JzIHx8IHt9O1xuICAgIHRoaXMuZmllbGRJbnB1dHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5maWVsZC50aXRsZSxcbiAgICAgICAgZGlzYWJsZVN3aXRjaDogdGhpcy5maWVsZE9wdGlvbnMuZGlzYWJsZVN3aXRjaCB8fCBmYWxzZVxuICAgICAgfSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZmllbGQuaW5wdXRzIHx8IHt9KSxcbiAgICAgIHtcbiAgICAgICAgZm9ybUNvbnRyb2w6IHRoaXMuZmllbGQuY29udHJvbCxcbiAgICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBnZXREZWZhdWx0RXJyb3JNZXNzYWdlcygpLCBlcnJvcnMpXG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5maWVsZElucHV0cztcbiAgfVxuXG4gIGdldEZpZWxkU3Vic2NyaWJlcnMoKToge1trZXk6IHN0cmluZ106ICh7ZmllbGQ6IEZvcm1GaWVsZCwgY29udHJvbDogRm9ybUNvbnRyb2x9KSA9PiB2b2lkIH0ge1xuICAgIGlmICh0aGlzLmZpZWxkU3Vic2NyaWJlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGRTdWJzY3JpYmVycztcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkU3Vic2NyaWJlcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZpZWxkLnN1YnNjcmliZXJzIHx8IHt9KTtcbiAgICByZXR1cm4gdGhpcy5maWVsZFN1YnNjcmliZXJzO1xuICB9XG59XG4iLCJcblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkICE9PSB1bmRlZmluZWRcIj5cbiAgPGlnby1keW5hbWljLW91dGxldFxuICAgIFtjb21wb25lbnRdPVwiZ2V0RmllbGRDb21wb25lbnQoKVwiXG4gICAgW2lucHV0c109XCJnZXRGaWVsZElucHV0cygpXCJcbiAgICBbc3Vic2NyaWJlcnNdPVwiZ2V0RmllbGRTdWJzY3JpYmVycygpXCI+XG4gIDwvaWdvLWR5bmFtaWMtb3V0bGV0PlxuPC9uZy1jb250YWluZXI+XG4iXX0=