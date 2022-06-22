import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IgoFormFieldComponent } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./geometry-form-field-input.component";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button-toggle";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/icon";
import * as i8 from "@ngx-translate/core";
function GeometryFormFieldComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "mat-button-toggle-group", 4);
    i0.ɵɵlistener("ngModelChange", function GeometryFormFieldComponent_div_3_Template_mat_button_toggle_group_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.geometryType = $event; });
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementStart(3, "mat-button-toggle", 5);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-button-toggle", 6);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-button-toggle", 7);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(2, 8, ctx_r0.value$) !== undefined)("ngModel", ctx_r0.geometryType);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.geometryTypes.indexOf("Point") < 0);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 10, "igo.geo.geometry.point"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.geometryTypes.indexOf("LineString") < 0);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 12, "igo.geo.geometry.line"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.geometryTypes.indexOf("Polygon") < 0);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 14, "igo.geo.geometry.polygon"), " ");
} }
function GeometryFormFieldComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 8);
    i0.ɵɵelementStart(1, "input", 9);
    i0.ɵɵlistener("ngModelChange", function GeometryFormFieldComponent_mat_form_field_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.drawGuide = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "mat-icon", 10);
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", ctx_r1.drawGuidePlaceholder)("ngModel", ctx_r1.drawGuide);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", "primary");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 4, "igo.geo.measure.meters"));
} }
/**
 * This input allows a user to draw a new geometry or to edit
 * an existing one on a map.
 */
let GeometryFormFieldComponent = class GeometryFormFieldComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.value$ = new BehaviorSubject(undefined);
        this._drawControlIsActive = true;
        this._freehandDrawIsActive = false;
        this.geometryType$ = new BehaviorSubject(undefined);
        /**
         * Whether a geometry type toggle should be displayed
         */
        this.geometryTypeField = false;
        /**
         * Available geometry types
         */
        this.geometryTypes = ['Point', 'LineString', 'Polygon'];
        /**
         * Whether a draw guide field should be displayed
         */
        this.drawGuideField = false;
        this.drawGuide$ = new BehaviorSubject(0);
        /**
         * Draw guide placeholder
         */
        this.drawGuidePlaceholder = '';
        /**
         * Whether a measure tooltip should be displayed
         */
        this.measure = false;
        /**
         * Control options
         */
        this.controlOptions = {};
    }
    set drawControlIsActive(value) {
        this._drawControlIsActive = value;
        this.cdRef.detectChanges();
    }
    get drawControlIsActive() {
        return this._drawControlIsActive;
    }
    set freehandDrawIsActive(value) {
        this._freehandDrawIsActive = value;
        this.cdRef.detectChanges();
    }
    get freehandDrawIsActive() {
        return this._freehandDrawIsActive;
    }
    set geometryType(value) { this.geometryType$.next(value); }
    get geometryType() { return this.geometryType$.value; }
    /**
     * The drawGuide around the mouse pointer to help drawing
     */
    set drawGuide(value) { this.drawGuide$.next(value); }
    get drawGuide() { return this.drawGuide$.value; }
    /**
     * Set up a value stream
     * @internal
     */
    ngOnInit() {
        this.value$.next(this.formControl.value ? this.formControl.value : undefined);
        this.value$$ = this.formControl.valueChanges.subscribe((value) => {
            this.value$.next(value ? value : undefined);
        });
    }
    /**
     * Unsubscribe to the value stream
     * @internal
     */
    ngOnDestroy() {
        this.value$$.unsubscribe();
    }
};
GeometryFormFieldComponent.ɵfac = function GeometryFormFieldComponent_Factory(t) { return new (t || GeometryFormFieldComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
GeometryFormFieldComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryFormFieldComponent, selectors: [["igo-geometry-form-field"]], inputs: { formControl: "formControl", map: "map", geometryType: "geometryType", geometryTypeField: "geometryTypeField", geometryTypes: "geometryTypes", drawGuideField: "drawGuideField", drawGuide: "drawGuide", drawGuidePlaceholder: "drawGuidePlaceholder", measure: "measure", controlOptions: "controlOptions", drawStyle: "drawStyle", overlayStyle: "overlayStyle" }, decls: 5, vars: 16, consts: [[3, "formControl", "map", "geometryType", "drawGuide", "measure", "drawControlIsActive", "freehandDrawIsActive", "controlOptions", "drawStyle", "overlayStyle"], ["class", "geometry-type-toggle", 4, "ngIf"], ["class", "draw-guide-field", 4, "ngIf"], [1, "geometry-type-toggle"], [3, "disabled", "ngModel", "ngModelChange"], ["value", "Point", 3, "disabled"], ["value", "LineString", 3, "disabled"], ["value", "Polygon", 3, "disabled"], [1, "draw-guide-field"], ["matInput", "", "type", "number", 3, "placeholder", "ngModel", "ngModelChange"], ["matPrefix", "", "svgIcon", "adjust", 3, "color"], ["matSuffix", "", 1, "draw-guide-units"]], template: function GeometryFormFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-geometry-form-field-input", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵpipe(2, "async");
        i0.ɵɵtemplate(3, GeometryFormFieldComponent_div_3_Template, 12, 16, "div", 1);
        i0.ɵɵtemplate(4, GeometryFormFieldComponent_mat_form_field_4_Template, 6, 6, "mat-form-field", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("formControl", ctx.formControl)("map", ctx.map)("geometryType", i0.ɵɵpipeBind1(1, 12, ctx.geometryType$))("drawGuide", i0.ɵɵpipeBind1(2, 14, ctx.drawGuide$))("measure", ctx.measure)("drawControlIsActive", ctx.drawControlIsActive)("freehandDrawIsActive", ctx.freehandDrawIsActive)("controlOptions", ctx.controlOptions)("drawStyle", ctx.drawStyle)("overlayStyle", ctx.overlayStyle);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.geometryTypeField);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.drawGuideField);
    } }, directives: [i1.GeometryFormFieldInputComponent, i2.NgControlStatus, i2.FormControlDirective, i3.NgIf, i4.MatButtonToggleGroup, i2.NgModel, i4.MatButtonToggle, i5.MatFormField, i6.MatInput, i2.NumberValueAccessor, i2.DefaultValueAccessor, i7.MatIcon, i5.MatPrefix, i5.MatSuffix], pipes: [i3.AsyncPipe, i8.TranslatePipe], styles: ["[_nghost-%COMP%]{display:block;width:100%}.geometry-type-toggle[_ngcontent-%COMP%], .draw-guide-field[_ngcontent-%COMP%]{width:100%}.geometry-type-toggle[_ngcontent-%COMP%]{padding:10px;text-align:center}.draw-guide-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0 10px}.draw-guide-units[_ngcontent-%COMP%]{padding:10px}"], changeDetection: 0 });
GeometryFormFieldComponent = __decorate([
    IgoFormFieldComponent('geometry')
], GeometryFormFieldComponent);
export { GeometryFormFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeometryFormFieldComponent, [{
        type: Component,
        args: [{
                selector: 'igo-geometry-form-field',
                templateUrl: './geometry-form-field.component.html',
                styleUrls: ['./geometry-form-field.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { formControl: [{
            type: Input
        }], map: [{
            type: Input
        }], geometryType: [{
            type: Input
        }], geometryTypeField: [{
            type: Input
        }], geometryTypes: [{
            type: Input
        }], drawGuideField: [{
            type: Input
        }], drawGuide: [{
            type: Input
        }], drawGuidePlaceholder: [{
            type: Input
        }], measure: [{
            type: Input
        }], controlOptions: [{
            type: Input
        }], drawStyle: [{
            type: Input
        }], overlayStyle: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnktZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9nZW9tZXRyeS9nZW9tZXRyeS1mb3JtLWZpZWxkL2dlb21ldHJ5LWZvcm0tZmllbGQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZ2VvbWV0cnkvZ2VvbWV0cnktZm9ybS1maWVsZC9nZW9tZXRyeS1mb3JtLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ0osU0FBUyxFQUM1QixLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3JELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7SUNJckQsOEJBQTREO0lBQzFELGtEQUU2QjtJQUEzQiw4T0FBMEI7O0lBQzFCLDRDQUVrRDtJQUNoRCxZQUNGOztJQUFBLGlCQUFvQjtJQUNwQiw0Q0FFdUQ7SUFDckQsWUFDRjs7SUFBQSxpQkFBb0I7SUFDcEIsNENBRW9EO0lBQ2xELGFBQ0Y7O0lBQUEsaUJBQW9CO0lBQ3RCLGlCQUEwQjtJQUM1QixpQkFBTTs7O0lBbEJGLGVBQTJDO0lBQTNDLDRFQUEyQyxnQ0FBQTtJQUl6QyxlQUErQztJQUEvQyxvRUFBK0M7SUFDL0MsZUFDRjtJQURFLGdGQUNGO0lBR0UsZUFBb0Q7SUFBcEQseUVBQW9EO0lBQ3BELGVBQ0Y7SUFERSwrRUFDRjtJQUdFLGVBQWlEO0lBQWpELHNFQUFpRDtJQUNqRCxlQUNGO0lBREUsbUZBQ0Y7Ozs7SUFJSix5Q0FBZ0U7SUFDOUQsZ0NBSTBCO0lBQXhCLG9PQUF1QjtJQUp6QixpQkFJMEI7SUFDMUIsK0JBSVc7SUFDWCxnQ0FBeUM7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LDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FDeEJ2QyxtREFXZ0M7OztRQUVoQyw2RUFvQk07UUFFTixpR0FZaUI7O1FBOUNmLDZDQUEyQixnQkFBQSwwREFBQSxvREFBQSx3QkFBQSxnREFBQSxrREFBQSxzQ0FBQSw0QkFBQSxrQ0FBQTtRQVl2QixlQUF1QjtRQUF2Qiw0Q0FBdUI7UUFzQlosZUFBb0I7UUFBcEIseUNBQW9COztBRFh4QiwwQkFBMEI7SUFQdEMscUJBQXFCLENBQUMsVUFBVSxDQUFDO0dBT3JCLDBCQUEwQixDQThHdEM7U0E5R1ksMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FOdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtvRUE4QlUsV0FBVztrQkFBbkIsS0FBSztZQUtHLEdBQUc7a0JBQVgsS0FBSztZQUdGLFlBQVk7a0JBRGYsS0FBSztZQVFHLGlCQUFpQjtrQkFBekIsS0FBSztZQUtHLGFBQWE7a0JBQXJCLEtBQUs7WUFLRyxjQUFjO2tCQUF0QixLQUFLO1lBTUYsU0FBUztrQkFEWixLQUFLO1lBUUcsb0JBQW9CO2tCQUE1QixLQUFLO1lBS0csT0FBTztrQkFBZixLQUFLO1lBS0csY0FBYztrQkFBdEIsS0FBSztZQUtHLFNBQVM7a0JBQWpCLEtBQUs7WUFNRyxZQUFZO2tCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsXG4gIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSWdvRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5VHlwZSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnlUeXBlJztcbmltcG9ydCAqIGFzIE9sU3R5bGUgZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcCc7XG5pbXBvcnQgeyBHZW9KU09OR2VvbWV0cnkgfSBmcm9tICcuLi9zaGFyZWQvZ2VvbWV0cnkuaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogVGhpcyBpbnB1dCBhbGxvd3MgYSB1c2VyIHRvIGRyYXcgYSBuZXcgZ2VvbWV0cnkgb3IgdG8gZWRpdFxuICogYW4gZXhpc3Rpbmcgb25lIG9uIGEgbWFwLlxuICovXG5ASWdvRm9ybUZpZWxkQ29tcG9uZW50KCdnZW9tZXRyeScpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tZ2VvbWV0cnktZm9ybS1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nZW9tZXRyeS1mb3JtLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2VvbWV0cnktZm9ybS1maWVsZC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeUZvcm1GaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICByZWFkb25seSB2YWx1ZSQ6IEJlaGF2aW9yU3ViamVjdDxHZW9KU09OR2VvbWV0cnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIHByaXZhdGUgdmFsdWUkJDogU3Vic2NyaXB0aW9uO1xuXG4gIHNldCBkcmF3Q29udHJvbElzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZHJhd0NvbnRyb2xJc0FjdGl2ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgZ2V0IGRyYXdDb250cm9sSXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RyYXdDb250cm9sSXNBY3RpdmU7XG4gIH1cbiAgcHJpdmF0ZSBfZHJhd0NvbnRyb2xJc0FjdGl2ZSA9IHRydWU7XG5cbiAgc2V0IGZyZWVoYW5kRHJhd0lzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZnJlZWhhbmREcmF3SXNBY3RpdmUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGdldCBmcmVlaGFuZERyYXdJc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZnJlZWhhbmREcmF3SXNBY3RpdmU7XG4gIH1cbiAgcHJpdmF0ZSBfZnJlZWhhbmREcmF3SXNBY3RpdmUgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGZpZWxkJ3MgZm9ybSBjb250cm9sXG4gICAqL1xuICBASW5wdXQoKSBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXAgdG8gZHJhdyB0aGUgZ2VvbWV0cnkgb25cbiAgICovXG4gIEBJbnB1dCgpIG1hcDogSWdvTWFwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBnZW9tZXRyeVR5cGUodmFsdWU6IHR5cGVvZiBPbEdlb21ldHJ5VHlwZSkgeyB0aGlzLmdlb21ldHJ5VHlwZSQubmV4dCh2YWx1ZSk7IH1cbiAgZ2V0IGdlb21ldHJ5VHlwZSgpOiB0eXBlb2YgT2xHZW9tZXRyeVR5cGUgeyByZXR1cm4gdGhpcy5nZW9tZXRyeVR5cGUkLnZhbHVlOyB9XG4gIHJlYWRvbmx5IGdlb21ldHJ5VHlwZSQ6IEJlaGF2aW9yU3ViamVjdDx0eXBlb2YgT2xHZW9tZXRyeVR5cGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGEgZ2VvbWV0cnkgdHlwZSB0b2dnbGUgc2hvdWxkIGJlIGRpc3BsYXllZFxuICAgKi9cbiAgQElucHV0KCkgZ2VvbWV0cnlUeXBlRmllbGQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQXZhaWxhYmxlIGdlb21ldHJ5IHR5cGVzXG4gICAqL1xuICBASW5wdXQoKSBnZW9tZXRyeVR5cGVzOiBzdHJpbmdbXSA9IFsnUG9pbnQnLCAnTGluZVN0cmluZycsICdQb2x5Z29uJ107XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYSBkcmF3IGd1aWRlIGZpZWxkIHNob3VsZCBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIEBJbnB1dCgpIGRyYXdHdWlkZUZpZWxkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBkcmF3R3VpZGUgYXJvdW5kIHRoZSBtb3VzZSBwb2ludGVyIHRvIGhlbHAgZHJhd2luZ1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGRyYXdHdWlkZSh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuZHJhd0d1aWRlJC5uZXh0KHZhbHVlKTsgfVxuICBnZXQgZHJhd0d1aWRlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLmRyYXdHdWlkZSQudmFsdWU7IH1cbiAgcmVhZG9ubHkgZHJhd0d1aWRlJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuXG4gIC8qKlxuICAgKiBEcmF3IGd1aWRlIHBsYWNlaG9sZGVyXG4gICAqL1xuICBASW5wdXQoKSBkcmF3R3VpZGVQbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYSBtZWFzdXJlIHRvb2x0aXAgc2hvdWxkIGJlIGRpc3BsYXllZFxuICAgKi9cbiAgQElucHV0KCkgbWVhc3VyZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb250cm9sIG9wdGlvbnNcbiAgICovXG4gIEBJbnB1dCgpIGNvbnRyb2xPcHRpb25zOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuXG4gIC8qKlxuICAgKiBTdHlsZSBmb3IgdGhlIGRyYXcgY29udHJvbCAoYXBwbGllcyB3aGlsZSB0aGUgZ2VvbWV0cnkgaXMgYmVpbmcgZHJhd24pXG4gICAqL1xuICBASW5wdXQoKSBkcmF3U3R5bGU6IE9sU3R5bGUuU3R5bGU7XG5cbiAgLyoqXG4gICAqIFN0eWxlIGZvciB0aGUgb3ZlcmxheSBsYXllciAoYXBwbGllcyBvbmNlIHRoZSBnZW9tZXRyeSBpcyBhZGRlZCB0byB0aGUgbWFwKVxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCBkcmF3U3R5bGUgYXBwbGllc1xuICAgKi9cbiAgQElucHV0KCkgb3ZlcmxheVN0eWxlOiBPbFN0eWxlLlN0eWxlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgYSB2YWx1ZSBzdHJlYW1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbHVlJC5uZXh0KHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgPyB0aGlzLmZvcm1Db250cm9sLnZhbHVlIDogdW5kZWZpbmVkKTtcbiAgICB0aGlzLnZhbHVlJCQgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBHZW9KU09OR2VvbWV0cnkpID0+IHtcbiAgICAgIHRoaXMudmFsdWUkLm5leHQodmFsdWUgPyB2YWx1ZSA6IHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdG8gdGhlIHZhbHVlIHN0cmVhbVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudmFsdWUkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCI8aWdvLWdlb21ldHJ5LWZvcm0tZmllbGQtaW5wdXRcbiAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgW21hcF09XCJtYXBcIlxuICBbZ2VvbWV0cnlUeXBlXT1cImdlb21ldHJ5VHlwZSQgfCBhc3luY1wiXG4gIFtkcmF3R3VpZGVdPVwiZHJhd0d1aWRlJCB8IGFzeW5jXCJcbiAgW21lYXN1cmVdPVwibWVhc3VyZVwiXG4gIFtkcmF3Q29udHJvbElzQWN0aXZlXT1cImRyYXdDb250cm9sSXNBY3RpdmVcIlxuICBbZnJlZWhhbmREcmF3SXNBY3RpdmVdPVwiZnJlZWhhbmREcmF3SXNBY3RpdmVcIlxuICBbY29udHJvbE9wdGlvbnNdPVwiY29udHJvbE9wdGlvbnNcIlxuICBbZHJhd1N0eWxlXT1cImRyYXdTdHlsZVwiXG4gIFtvdmVybGF5U3R5bGVdPVwib3ZlcmxheVN0eWxlXCI+XG48L2lnby1nZW9tZXRyeS1mb3JtLWZpZWxkLWlucHV0PlxuXG48ZGl2ICpuZ0lmPVwiZ2VvbWV0cnlUeXBlRmllbGRcIiBjbGFzcz1cImdlb21ldHJ5LXR5cGUtdG9nZ2xlXCI+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cFxuICAgIFtkaXNhYmxlZF09XCIodmFsdWUkIHwgYXN5bmMpICE9PSB1bmRlZmluZWRcIlxuICAgIFsobmdNb2RlbCldPVwiZ2VvbWV0cnlUeXBlXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlXG4gICAgICB2YWx1ZT1cIlBvaW50XCJcbiAgICAgIFtkaXNhYmxlZF09XCJnZW9tZXRyeVR5cGVzLmluZGV4T2YoJ1BvaW50JykgPCAwXCI+XG4gICAgICB7eydpZ28uZ2VvLmdlb21ldHJ5LnBvaW50JyB8IHRyYW5zbGF0ZX19XG4gICAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGVcbiAgICAgIHZhbHVlPVwiTGluZVN0cmluZ1wiXG4gICAgICBbZGlzYWJsZWRdPVwiZ2VvbWV0cnlUeXBlcy5pbmRleE9mKCdMaW5lU3RyaW5nJykgPCAwXCI+XG4gICAgICB7eydpZ28uZ2VvLmdlb21ldHJ5LmxpbmUnIHwgdHJhbnNsYXRlfX1cbiAgICA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZVxuICAgICAgdmFsdWU9XCJQb2x5Z29uXCJcbiAgICAgIFtkaXNhYmxlZF09XCJnZW9tZXRyeVR5cGVzLmluZGV4T2YoJ1BvbHlnb24nKSA8IDBcIj5cbiAgICAgIHt7J2lnby5nZW8uZ2VvbWV0cnkucG9seWdvbicgfCB0cmFuc2xhdGV9fVxuICAgIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG48L2Rpdj5cblxuPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiZHJhd0d1aWRlRmllbGRcIiBjbGFzcz1cImRyYXctZ3VpZGUtZmllbGRcIj5cbiAgPGlucHV0XG4gICAgbWF0SW5wdXRcbiAgICB0eXBlPVwibnVtYmVyXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwiZHJhd0d1aWRlUGxhY2Vob2xkZXJcIlxuICAgIFsobmdNb2RlbCldPVwiZHJhd0d1aWRlXCI+XG4gIDxtYXQtaWNvblxuICAgIG1hdFByZWZpeFxuICAgIFtjb2xvcl09XCIncHJpbWFyeSdcIlxuICAgIHN2Z0ljb249XCJhZGp1c3RcIj4gICAgXG4gIDwvbWF0LWljb24+XG4gIDxzcGFuIG1hdFN1ZmZpeCBjbGFzcz1cImRyYXctZ3VpZGUtdW5pdHNcIj57eydpZ28uZ2VvLm1lYXN1cmUubWV0ZXJzJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuPC9tYXQtZm9ybS1maWVsZD4iXX0=