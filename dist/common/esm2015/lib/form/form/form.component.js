import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import t from 'typy';
import { getAllFormFields } from '../shared/form.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = ["buttons"];
const _c1 = ["*", [["", "formButtons", ""]]];
const _c2 = function (a0) { return { "igo-form-body-with-buttons": a0 }; };
const _c3 = ["*", "[formButtons]"];
/**
 * A configurable form
 */
export class FormComponent {
    constructor() {
        /**
         * Form autocomplete
         */
        this.autocomplete = 'off';
        /**
         * Event emitted when the form is submitted
         */
        this.submitForm = new EventEmitter();
    }
    get hasButtons() {
        return this.buttons.nativeElement.children.length !== 0;
    }
    /**
     * Is the entity or the template change, recreate the form or repopulate it.
     * @internal
     */
    ngOnChanges(changes) {
        const formData = changes.formData;
        if (formData && formData.currentValue !== formData.previousValue) {
            if (formData.currentValue === undefined) {
                this.clear();
            }
            else {
                this.setData(formData.currentValue);
            }
        }
    }
    /**
     * Transform the form data to a feature and emit an event
     * @param event Form submit event
     * @internal
     */
    onSubmit() {
        this.submitForm.emit(this.getData());
    }
    getData() {
        const data = {};
        getAllFormFields(this.form).forEach((field) => {
            this.updateDataWithFormField(data, field);
        });
        return data;
    }
    setData(data) {
        this.form.fields.forEach((field) => {
            field.control.setValue(t(data, field.name).safeObject);
        });
        this.form.groups.forEach((group) => {
            group.fields.forEach((field) => {
                field.control.setValue(t(data, field.name).safeObject);
            });
        });
    }
    updateDataWithFormField(data, field) {
        const control = field.control;
        if (!control.disabled) {
            data[field.name] = control.value;
        }
    }
    /**
     * Clear form
     */
    clear() {
        this.form.control.reset();
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormComponent, selectors: [["igo-form"]], viewQuery: function FormComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t.first);
    } }, inputs: { form: "form", formData: "formData", autocomplete: "autocomplete" }, outputs: { submitForm: "submitForm" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 7, vars: 5, consts: [[3, "autocomplete", "formGroup", "ngSubmit"], [1, "igo-form-body", 3, "ngClass"], [1, "igo-form-content"], [1, "igo-form-buttons"], ["buttons", ""]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3, 4);
        i0.ɵɵprojection(6, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("autocomplete", ctx.autocomplete)("formGroup", ctx.form.control);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c2, ctx.hasButtons));
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgClass], styles: ["[_nghost-%COMP%]{display:block}form[_ngcontent-%COMP%]{width:100%;height:100%}.igo-form-body[_ngcontent-%COMP%], .igo-form-content[_ngcontent-%COMP%]{height:100%}.igo-form-body-with-buttons[_ngcontent-%COMP%]   .igo-form-content[_ngcontent-%COMP%]{height:calc(100% - 56px)}.igo-form-content[_ngcontent-%COMP%]{display:flex}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { form: [{
            type: Input
        }], formData: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], submitForm: [{
            type: Output
        }], buttons: [{
            type: ViewChild,
            args: ['buttons', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0vZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9mb3JtL2Zvcm0vZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLHVCQUF1QixFQUN2QixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxDQUFDLE1BQU0sTUFBTSxDQUFDO0FBR3JCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7OztBQUV4RDs7R0FFRztBQU9ILE1BQU0sT0FBTyxhQUFhO0lBNEJ4QjtRQWhCQTs7V0FFRztRQUNNLGlCQUFZLEdBQVcsS0FBSyxDQUFDO1FBRXRDOztXQUVHO1FBQ08sZUFBVSxHQUFHLElBQUksWUFBWSxFQUF3QixDQUFDO0lBUWpELENBQUM7SUFKaEIsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBSUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbEMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQ2hFLElBQUksUUFBUSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxPQUFPLENBQUMsSUFBMEI7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1lBQzVDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQ2pELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO2dCQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHVCQUF1QixDQUFDLElBQTJCLEVBQUUsS0FBZ0I7UUFDM0UsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxLQUFLO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7MEVBdEZVLGFBQWE7Z0VBQWIsYUFBYTs7Ozs7OztRQ3pCMUIsK0JBRzBCO1FBQXhCLDhGQUFZLGNBQVUsSUFBQztRQUN2Qiw4QkFBa0Y7UUFDaEYsOEJBQThCO1FBQzVCLGtCQUF5QjtRQUMzQixpQkFBTTtRQUNOLGlDQUF1QztRQUNyQyxxQkFBZ0Q7UUFDbEQsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFPOztRQVhMLCtDQUE2QiwrQkFBQTtRQUdGLGVBQXNEO1FBQXRELG9FQUFzRDs7dUZEcUJ0RSxhQUFhO2NBTnpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3NDQU1VLElBQUk7a0JBQVosS0FBSztZQUtHLFFBQVE7a0JBQWhCLEtBQUs7WUFLRyxZQUFZO2tCQUFwQixLQUFLO1lBS0ksVUFBVTtrQkFBbkIsTUFBTTtZQUVpQyxPQUFPO2tCQUE5QyxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdCBmcm9tICd0eXB5JztcblxuaW1wb3J0IHsgRm9ybSwgRm9ybUZpZWxkLCBGb3JtRmllbGRHcm91cCB9IGZyb20gJy4uL3NoYXJlZC9mb3JtLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgZ2V0QWxsRm9ybUZpZWxkcyB9IGZyb20gJy4uL3NoYXJlZC9mb3JtLnV0aWxzJztcblxuLyoqXG4gKiBBIGNvbmZpZ3VyYWJsZSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIC8qKlxuICAgKiBGb3JtXG4gICAqL1xuICBASW5wdXQoKSBmb3JtOiBGb3JtO1xuXG4gIC8qKlxuICAgKiBJbnB1dCBkYXRhXG4gICAqL1xuICBASW5wdXQoKSBmb3JtRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnl9O1xuXG4gIC8qKlxuICAgKiBGb3JtIGF1dG9jb21wbGV0ZVxuICAgKi9cbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmcgPSAnb2ZmJztcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZFxuICAgKi9cbiAgQE91dHB1dCgpIHN1Ym1pdEZvcm0gPSBuZXcgRXZlbnRFbWl0dGVyPHtba2V5OiBzdHJpbmddOiBhbnl9PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSBidXR0b25zOiBFbGVtZW50UmVmO1xuXG4gIGdldCBoYXNCdXR0b25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbnMubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggIT09IDA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAqIElzIHRoZSBlbnRpdHkgb3IgdGhlIHRlbXBsYXRlIGNoYW5nZSwgcmVjcmVhdGUgdGhlIGZvcm0gb3IgcmVwb3B1bGF0ZSBpdC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBjaGFuZ2VzLmZvcm1EYXRhO1xuICAgIGlmIChmb3JtRGF0YSAmJiBmb3JtRGF0YS5jdXJyZW50VmFsdWUgIT09IGZvcm1EYXRhLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIGlmIChmb3JtRGF0YS5jdXJyZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldERhdGEoZm9ybURhdGEuY3VycmVudFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBmb3JtIGRhdGEgdG8gYSBmZWF0dXJlIGFuZCBlbWl0IGFuIGV2ZW50XG4gICAqIEBwYXJhbSBldmVudCBGb3JtIHN1Ym1pdCBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuc3VibWl0Rm9ybS5lbWl0KHRoaXMuZ2V0RGF0YSgpKTtcbiAgfVxuXG4gIGdldERhdGEoKTogeyBba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgZ2V0QWxsRm9ybUZpZWxkcyh0aGlzLmZvcm0pLmZvckVhY2goKGZpZWxkOiBGb3JtRmllbGQpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlRGF0YVdpdGhGb3JtRmllbGQoZGF0YSwgZmllbGQpO1xuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREYXRhKGRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XG4gICAgdGhpcy5mb3JtLmZpZWxkcy5mb3JFYWNoKChmaWVsZDogRm9ybUZpZWxkKSA9PiB7XG4gICAgICBmaWVsZC5jb250cm9sLnNldFZhbHVlKHQoZGF0YSwgZmllbGQubmFtZSkuc2FmZU9iamVjdCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ3JvdXBzLmZvckVhY2goKGdyb3VwOiBGb3JtRmllbGRHcm91cCkgPT4ge1xuICAgICAgZ3JvdXAuZmllbGRzLmZvckVhY2goKGZpZWxkOiBGb3JtRmllbGQpID0+IHtcbiAgICAgICAgZmllbGQuY29udHJvbC5zZXRWYWx1ZSh0KGRhdGEsIGZpZWxkLm5hbWUpLnNhZmVPYmplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURhdGFXaXRoRm9ybUZpZWxkKGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55fSwgZmllbGQ6IEZvcm1GaWVsZCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBmaWVsZC5jb250cm9sO1xuICAgIGlmICghY29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgZGF0YVtmaWVsZC5uYW1lXSA9IGNvbnRyb2wudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGZvcm1cbiAgICovXG4gIHByaXZhdGUgY2xlYXIoKSB7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2wucmVzZXQoKTtcbiAgfVxuXG59XG4iLCJcbjxmb3JtXG4gIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcbiAgW2Zvcm1Hcm91cF09XCJmb3JtLmNvbnRyb2xcIlxuICAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICA8ZGl2IGNsYXNzPVwiaWdvLWZvcm0tYm9keVwiIFtuZ0NsYXNzXT1cInsnaWdvLWZvcm0tYm9keS13aXRoLWJ1dHRvbnMnOiBoYXNCdXR0b25zfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpZ28tZm9ybS1jb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAjYnV0dG9ucyBjbGFzcz1cImlnby1mb3JtLWJ1dHRvbnNcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltmb3JtQnV0dG9uc11cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPlxuIl19