import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MeasureType, MeasureAreaUnit, MeasureLengthUnit } from '../shared/measure.enum';
import { computeBestAreaUnit, computeBestLengthUnit } from '../shared/measure.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/core";
import * as i6 from "./measure-format.pipe";
import * as i7 from "@ngx-translate/core";
function MeasurerItemComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const measureUnit_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", measureUnit_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.measure." + measureUnit_r1), " ");
} }
/**
 * Measurer item
 */
export class MeasurerItemComponent {
    constructor() {
        /**
         * Measure observable
         * @internal
         */
        this.measure$ = new BehaviorSubject(undefined);
        this._auto = false;
        /**
         * Event emitted when the measure unit changes
         */
        this.measureUnitChange = new EventEmitter();
    }
    /**
     * Measure
     */
    set measure(value) {
        this.measure$.next(value);
    }
    get measure() { return this.measure$.value; }
    /**
     * Whther measure units should be automatically determined
     */
    set auto(value) { this.toggleAutoUnit(value); }
    get auto() { return this._auto; }
    /**
     * Available measure units for the measure type given
     * @internal
     */
    get measureUnits() {
        if (this.measureType === MeasureType.Area) {
            return Object.values(MeasureAreaUnit);
        }
        return Object.values(MeasureLengthUnit);
    }
    /**
     * Toggle the auto unit off
     * @internal
     */
    ngOnDestroy() {
        this.toggleAutoUnit(false);
    }
    /**
     * Set the measure unit
     * @internal
     */
    onMeasureUnitChange(unit) {
        this.measureUnit = unit;
        this.measureUnitChange.emit(unit);
    }
    toggleAutoUnit(toggle) {
        if (this.measure$$ !== undefined) {
            this.measure$$.unsubscribe();
        }
        if (toggle === true) {
            this.measure$$ = this.measure$.subscribe((measure) => {
                this.computeBestMeasureUnit(measure);
            });
        }
        this._auto = toggle;
    }
    computeBestMeasureUnit(measure) {
        let measureUnit = this.measureUnit;
        if (this.measureType === MeasureType.Area) {
            measureUnit = computeBestAreaUnit(measure);
        }
        else if (this.measureType === MeasureType.Length) {
            measureUnit = computeBestLengthUnit(measure);
        }
        if (measureUnit !== this.measureUnit) {
            this.onMeasureUnitChange(measureUnit);
        }
    }
}
MeasurerItemComponent.ɵfac = function MeasurerItemComponent_Factory(t) { return new (t || MeasurerItemComponent)(); };
MeasurerItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MeasurerItemComponent, selectors: [["igo-measurer-item"]], inputs: { measureType: "measureType", measureUnit: "measureUnit", measure: "measure", auto: "auto", placeholder: "placeholder" }, outputs: { measureUnitChange: "measureUnitChange" }, decls: 9, vars: 11, consts: [["appearance", "outline", "floatLabel", "always", 1, "measure-field"], ["matInput", "", 3, "readonly", "value"], [1, "unit-field"], [3, "value", "disabled", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function MeasurerItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵpipe(4, "measureFormat");
        i0.ɵɵpipe(5, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field", 2);
        i0.ɵɵelementStart(7, "mat-select", 3);
        i0.ɵɵlistener("selectionChange", function MeasurerItemComponent_Template_mat_select_selectionChange_7_listener($event) { return ctx.onMeasureUnitChange($event.value); });
        i0.ɵɵtemplate(8, MeasurerItemComponent_mat_option_8_Template, 3, 4, "mat-option", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.placeholder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("readonly", true)("value", i0.ɵɵpipeBind2(4, 6, i0.ɵɵpipeBind1(5, 9, ctx.measure$) || 0, ctx.measureUnit));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("value", ctx.measureUnit)("disabled", ctx.auto);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.measureUnits);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatSelect, i4.NgForOf, i5.MatOption], pipes: [i6.MeasureFormatPipe, i4.AsyncPipe, i7.TranslatePipe], styles: ["[_nghost-%COMP%]{display:flex;width:100%;padding:5px 10px}.measure-field[_ngcontent-%COMP%]{pointer-events:none;display:flex;flex-flow:column nowrap;width:100%}.unit-field[_ngcontent-%COMP%]{width:50px;margin-left:10px;margin-top:10px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeasurerItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-measurer-item',
                templateUrl: './measurer-item.component.html',
                styleUrls: ['./measurer-item.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { measureType: [{
            type: Input
        }], measureUnit: [{
            type: Input
        }], measure: [{
            type: Input
        }], auto: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], measureUnitChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9tZWFzdXJlL21lYXN1cmVyL21lYXN1cmVyLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWVhc3VyZS9tZWFzdXJlci9tZWFzdXJlci1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRXJELE9BQU8sRUFDTCxXQUFXLEVBQ1gsZUFBZSxFQUNmLGlCQUFpQixFQUNsQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7O0lDRGpGLHFDQUEyRTtJQUN6RSxZQUNGOztJQUFBLGlCQUFhOzs7SUFGd0Msc0NBQXFCO0lBQ3hFLGVBQ0Y7SUFERSwwRkFDRjs7QURDSjs7R0FFRztBQU9ILE1BQU0sT0FBTyxxQkFBcUI7SUE4RGhDO1FBNURBOzs7V0FHRztRQUNJLGFBQVEsR0FBNEIsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFpQ2xFLFVBQUssR0FBWSxLQUFLLENBQUM7UUFPL0I7O1dBRUc7UUFDTyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztJQWF2RSxDQUFDO0lBdENoQjs7T0FFRztJQUNILElBQ0ksT0FBTyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUks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QVVGLElBQUk7a0JBRFAsS0FBSztZQVFHLFdBQVc7a0JBQW5CLEtBQUs7WUFLSSxpQkFBaUI7a0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgTWVhc3VyZVR5cGUsXG4gIE1lYXN1cmVBcmVhVW5pdCxcbiAgTWVhc3VyZUxlbmd0aFVuaXRcbn0gZnJvbSAnLi4vc2hhcmVkL21lYXN1cmUuZW51bSc7XG5pbXBvcnQgeyBjb21wdXRlQmVzdEFyZWFVbml0LCBjb21wdXRlQmVzdExlbmd0aFVuaXQgfSBmcm9tICcuLi9zaGFyZWQvbWVhc3VyZS51dGlscyc7XG5cbi8qKlxuICogTWVhc3VyZXIgaXRlbVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tbWVhc3VyZXItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZWFzdXJlci1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVhc3VyZXItaXRlbS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNZWFzdXJlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBNZWFzdXJlIG9ic2VydmFibGVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgbWVhc3VyZSQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIG1lYXN1cmUgb2JzZXJ2YWJsZSB3aGVuIHRoZSBhdXRvIG1vZGUgaXMgb25cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgbWVhc3VyZSQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIE1lYXN1cmUgdHlwZVxuICAgKi9cbiAgQElucHV0KCkgbWVhc3VyZVR5cGU6IE1lYXN1cmVUeXBlO1xuXG4gIC8qKlxuICAgKiBNZWFzdXJlIHVuaXRcbiAgICovXG4gIEBJbnB1dCgpIG1lYXN1cmVVbml0OiBNZWFzdXJlQXJlYVVuaXQgfCBNZWFzdXJlTGVuZ3RoVW5pdDtcblxuICAvKipcbiAgICogTWVhc3VyZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG1lYXN1cmUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMubWVhc3VyZSQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IG1lYXN1cmUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWVhc3VyZSQudmFsdWU7IH1cblxuICAvKipcbiAgICogV2h0aGVyIG1lYXN1cmUgdW5pdHMgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgZGV0ZXJtaW5lZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGF1dG8odmFsdWU6IGJvb2xlYW4pIHsgdGhpcy50b2dnbGVBdXRvVW5pdCh2YWx1ZSk7IH1cbiAgZ2V0IGF1dG8oKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9hdXRvOyB9XG4gIHByaXZhdGUgX2F1dG86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgbWVhc3VyZSB1bml0IGNoYW5nZXNcbiAgICovXG4gIEBPdXRwdXQoKSBtZWFzdXJlVW5pdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWVhc3VyZUFyZWFVbml0IHwgTWVhc3VyZUxlbmd0aFVuaXQ+KCk7XG5cbiAgLyoqXG4gICAqIEF2YWlsYWJsZSBtZWFzdXJlIHVuaXRzIGZvciB0aGUgbWVhc3VyZSB0eXBlIGdpdmVuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IG1lYXN1cmVVbml0cygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMubWVhc3VyZVR5cGUgPT09IE1lYXN1cmVUeXBlLkFyZWEpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKE1lYXN1cmVBcmVhVW5pdCk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKE1lYXN1cmVMZW5ndGhVbml0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBhdXRvIHVuaXQgb2ZmXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy50b2dnbGVBdXRvVW5pdChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtZWFzdXJlIHVuaXRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbk1lYXN1cmVVbml0Q2hhbmdlKHVuaXQ6IE1lYXN1cmVBcmVhVW5pdCB8IE1lYXN1cmVMZW5ndGhVbml0KSB7XG4gICAgdGhpcy5tZWFzdXJlVW5pdCA9IHVuaXQ7XG4gICAgdGhpcy5tZWFzdXJlVW5pdENoYW5nZS5lbWl0KHVuaXQpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVBdXRvVW5pdCh0b2dnbGU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5tZWFzdXJlJCQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tZWFzdXJlJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRvZ2dsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5tZWFzdXJlJCQgPSB0aGlzLm1lYXN1cmUkLnN1YnNjcmliZSgobWVhc3VyZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJlc3RNZWFzdXJlVW5pdChtZWFzdXJlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9hdXRvID0gdG9nZ2xlO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlQmVzdE1lYXN1cmVVbml0KG1lYXN1cmU6IG51bWJlcikge1xuICAgIGxldCBtZWFzdXJlVW5pdCA9IHRoaXMubWVhc3VyZVVuaXQ7XG4gICAgaWYgKHRoaXMubWVhc3VyZVR5cGUgPT09IE1lYXN1cmVUeXBlLkFyZWEpIHtcbiAgICAgIG1lYXN1cmVVbml0ID0gY29tcHV0ZUJlc3RBcmVhVW5pdChtZWFzdXJlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubWVhc3VyZVR5cGUgPT09IE1lYXN1cmVUeXBlLkxlbmd0aCkge1xuICAgICAgbWVhc3VyZVVuaXQgPSBjb21wdXRlQmVzdExlbmd0aFVuaXQobWVhc3VyZSk7XG4gICAgfVxuICAgIGlmIChtZWFzdXJlVW5pdCAhPT0gdGhpcy5tZWFzdXJlVW5pdCkge1xuICAgICAgdGhpcy5vbk1lYXN1cmVVbml0Q2hhbmdlKG1lYXN1cmVVbml0KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZFxuICBjbGFzcz1cIm1lYXN1cmUtZmllbGRcIlxuICBhcHBlYXJhbmNlPVwib3V0bGluZVwiXG4gIGZsb2F0TGFiZWw9XCJhbHdheXNcIj5cbiAgPG1hdC1sYWJlbD57e3BsYWNlaG9sZGVyfX08L21hdC1sYWJlbD5cbiAgPGlucHV0XG4gICAgbWF0SW5wdXRcbiAgICBbcmVhZG9ubHldPVwidHJ1ZVwiXG4gICAgW3ZhbHVlXT1cIigobWVhc3VyZSQgfCBhc3luYykgfHwgMCkgfCBtZWFzdXJlRm9ybWF0OiBtZWFzdXJlVW5pdFwiPlxuPC9tYXQtZm9ybS1maWVsZD5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInVuaXQtZmllbGRcIj5cbiAgPG1hdC1zZWxlY3RcbiAgICBbdmFsdWVdPVwibWVhc3VyZVVuaXRcIlxuICAgIFtkaXNhYmxlZF09XCJhdXRvXCJcbiAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uTWVhc3VyZVVuaXRDaGFuZ2UoJGV2ZW50LnZhbHVlKVwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtZWFzdXJlVW5pdCBvZiBtZWFzdXJlVW5pdHNcIiBbdmFsdWVdPVwibWVhc3VyZVVuaXRcIj5cbiAgICAgIHt7KCdpZ28uZ2VvLm1lYXN1cmUuJyArIG1lYXN1cmVVbml0KSB8IHRyYW5zbGF0ZX19XG4gICAgPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19