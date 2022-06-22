import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getEntityRevision } from '@igo2/common';
import { uuid } from '@igo2/utils';
import { FEATURE } from '../shared/feature.enums';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/common";
import * as i2 from "@angular/common";
const _c0 = ["igoForm"];
const _c1 = ["*", [["", "formButtons", ""]]];
const _c2 = ["*", "[formButtons]"];
/**
 * A configurable form, optionnally bound to a feature.
 * This component creates an entity form and, on submit,
 * returns a feature made out of the submitted data. It also
 * does things like managing the feature visibility while it's being updated
 * as well as disabling the selection of another feature.
 */
export class FeatureFormComponent {
    constructor() {
        this.feature$ = new BehaviorSubject(undefined);
        /**
         * Event emitted when the form is submitted
         */
        this.submitForm = new EventEmitter();
    }
    /**
     * Feature to update
     */
    set feature(value) { this.feature$.next(value); }
    get feature() { return this.feature$.value; }
    /**
     * Transform the form data to a feature and emit an event
     * @param event Form submit event
     * @internal
     */
    onSubmit(data) {
        const feature = this.formDataToFeature(data);
        this.submitForm.emit(feature);
    }
    getData() {
        return this.formDataToFeature(this.igoForm.getData());
    }
    /**
     * Transform the form data to a feature
     * @param data Form data
     * @returns A feature
     */
    formDataToFeature(data) {
        const properties = {};
        const meta = {};
        if (this.feature === undefined) {
            meta.id = uuid();
        }
        else {
            Object.assign(properties, this.feature.properties);
            Object.assign(meta, this.feature.meta, {
                revision: getEntityRevision(this.feature) + 1
            });
        }
        const propertyPrefix = 'properties.';
        Object.entries(data).forEach((entry) => {
            const [key, value] = entry;
            if (key.startsWith(propertyPrefix)) {
                const property = key.substr(propertyPrefix.length);
                properties[property] = value;
            }
        });
        let geometry = data.geometry;
        if (geometry === undefined && this.feature !== undefined) {
            geometry = this.feature.geometry;
        }
        return {
            meta: meta,
            type: FEATURE,
            geometry,
            projection: 'EPSG:4326',
            properties
        };
    }
}
FeatureFormComponent.ɵfac = function FeatureFormComponent_Factory(t) { return new (t || FeatureFormComponent)(); };
FeatureFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeatureFormComponent, selectors: [["igo-feature-form"]], viewQuery: function FeatureFormComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.igoForm = _t.first);
    } }, inputs: { form: "form", feature: "feature" }, outputs: { submitForm: "submitForm" }, ngContentSelectors: _c2, decls: 5, vars: 4, consts: [[3, "form", "formData", "submitForm"], ["igoForm", ""]], template: function FeatureFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "igo-form", 0, 1);
        i0.ɵɵlistener("submitForm", function FeatureFormComponent_Template_igo_form_submitForm_0_listener($event) { return ctx.onSubmit($event); });
        i0.ɵɵpipe(2, "async");
        i0.ɵɵprojection(3);
        i0.ɵɵprojection(4, 1, ["formButtons", ""]);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("form", ctx.form)("formData", i0.ɵɵpipeBind1(2, 2, ctx.feature$));
    } }, directives: [i1.FormComponent], pipes: [i2.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block}igo-form[_ngcontent-%COMP%]{height:100%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureFormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-feature-form',
                templateUrl: './feature-form.component.html',
                styleUrls: ['./feature-form.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { form: [{
            type: Input
        }], feature: [{
            type: Input
        }], submitForm: [{
            type: Output
        }], igoForm: [{
            type: ViewChild,
            args: ['igoForm', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZlYXR1cmUvZmVhdHVyZS1mb3JtL2ZlYXR1cmUtZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9mZWF0dXJlL2ZlYXR1cmUtZm9ybS9mZWF0dXJlLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFRLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0FBR2xEOzs7Ozs7R0FNRztBQU9ILE1BQU0sT0FBTyxvQkFBb0I7SUFzQi9CO1FBVFMsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU3RTs7V0FFRztRQUNPLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBSXBDLENBQUM7SUFmaEI7O09BRUc7SUFDSCxJQUNJLE9BQU8sQ0FBQyxLQUEwQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxJQUFJLE9BQU8sS0FBMEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFZbEU7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxJQUE0QjtRQUNuQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxpQkFBaUIsQ0FBQyxJQUE0QjtRQUNwRCxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDN0IsSUFBWSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztTQUMzQjthQUFNO1lBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDckMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQzlDLENBQUMsQ0FBQztTQUNKO1FBRUQsTUFBTSxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFO1lBQ3BELE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDbEMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDOUI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsSUFBSSxRQUFRLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3hELFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUNsQztRQUVELE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBbUI7WUFDekIsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRO1lBQ1IsVUFBVSxFQUFFLFdBQVc7WUFDdkIsVUFBVTtTQUNYLENBQUM7SUFDSixDQUFDOzt3RkE1RVUsb0JBQW9CO3VFQUFwQixvQkFBb0I7Ozs7Ozs7UUM5QmpDLHNDQUlrQztRQUFoQyxtSEFBYyxvQkFBZ0IsSUFBQzs7UUFFL0Isa0JBQXlCO1FBRXpCLDBDQUE0RDtRQUU5RCxpQkFBVzs7UUFSVCwrQkFBYSxnREFBQTs7dUZENEJGLG9CQUFvQjtjQU5oQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3NDQU1VLElBQUk7a0JBQVosS0FBSztZQU1GLE9BQU87a0JBRFYsS0FBSztZQVFJLFVBQVU7a0JBQW5CLE1BQU07WUFFaUMsT0FBTztrQkFBOUMsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGb3JtLCBnZXRFbnRpdHlSZXZpc2lvbiB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7IEZvcm1Db21wb25lbnQgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJ0BpZ28yL3V0aWxzJztcblxuaW1wb3J0IHsgRkVBVFVSRSB9IGZyb20gJy4uL3NoYXJlZC9mZWF0dXJlLmVudW1zJztcbmltcG9ydCB7IEZlYXR1cmUsIEZlYXR1cmVNZXRhIH0gZnJvbSAnLi4vc2hhcmVkL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogQSBjb25maWd1cmFibGUgZm9ybSwgb3B0aW9ubmFsbHkgYm91bmQgdG8gYSBmZWF0dXJlLlxuICogVGhpcyBjb21wb25lbnQgY3JlYXRlcyBhbiBlbnRpdHkgZm9ybSBhbmQsIG9uIHN1Ym1pdCxcbiAqIHJldHVybnMgYSBmZWF0dXJlIG1hZGUgb3V0IG9mIHRoZSBzdWJtaXR0ZWQgZGF0YS4gSXQgYWxzb1xuICogZG9lcyB0aGluZ3MgbGlrZSBtYW5hZ2luZyB0aGUgZmVhdHVyZSB2aXNpYmlsaXR5IHdoaWxlIGl0J3MgYmVpbmcgdXBkYXRlZFxuICogYXMgd2VsbCBhcyBkaXNhYmxpbmcgdGhlIHNlbGVjdGlvbiBvZiBhbm90aGVyIGZlYXR1cmUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1mZWF0dXJlLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVhdHVyZS1mb3JtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGb3JtQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogRm9ybVxuICAgKi9cbiAgQElucHV0KCkgZm9ybTogRm9ybTtcblxuICAvKipcbiAgICogRmVhdHVyZSB0byB1cGRhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBmZWF0dXJlKHZhbHVlOiBGZWF0dXJlIHwgdW5kZWZpbmVkKSB7IHRoaXMuZmVhdHVyZSQubmV4dCh2YWx1ZSk7IH1cbiAgZ2V0IGZlYXR1cmUoKTogRmVhdHVyZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLmZlYXR1cmUkLnZhbHVlOyB9XG4gIHJlYWRvbmx5IGZlYXR1cmUkOiBCZWhhdmlvclN1YmplY3Q8RmVhdHVyZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBzdWJtaXRGb3JtID0gbmV3IEV2ZW50RW1pdHRlcjxGZWF0dXJlPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2lnb0Zvcm0nLCB7IHN0YXRpYzogdHJ1ZSB9KSBpZ29Gb3JtOiBGb3JtQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBmb3JtIGRhdGEgdG8gYSBmZWF0dXJlIGFuZCBlbWl0IGFuIGV2ZW50XG4gICAqIEBwYXJhbSBldmVudCBGb3JtIHN1Ym1pdCBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uU3VibWl0KGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICBjb25zdCBmZWF0dXJlID0gdGhpcy5mb3JtRGF0YVRvRmVhdHVyZShkYXRhKTtcbiAgICB0aGlzLnN1Ym1pdEZvcm0uZW1pdChmZWF0dXJlKTtcbiAgfVxuXG4gIGdldERhdGEoKTogRmVhdHVyZSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybURhdGFUb0ZlYXR1cmUodGhpcy5pZ29Gb3JtLmdldERhdGEoKSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBmb3JtIGRhdGEgdG8gYSBmZWF0dXJlXG4gICAqIEBwYXJhbSBkYXRhIEZvcm0gZGF0YVxuICAgKiBAcmV0dXJucyBBIGZlYXR1cmVcbiAgICovXG4gIHByaXZhdGUgZm9ybURhdGFUb0ZlYXR1cmUoZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IEZlYXR1cmUge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcbiAgICBjb25zdCBtZXRhID0ge307XG4gICAgaWYgKHRoaXMuZmVhdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAobWV0YSBhcyBhbnkpLmlkID0gdXVpZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHRoaXMuZmVhdHVyZS5wcm9wZXJ0aWVzKTtcbiAgICAgIE9iamVjdC5hc3NpZ24obWV0YSwgdGhpcy5mZWF0dXJlLm1ldGEsIHtcbiAgICAgICAgcmV2aXNpb246IGdldEVudGl0eVJldmlzaW9uKHRoaXMuZmVhdHVyZSkgKyAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9wZXJ0eVByZWZpeCA9ICdwcm9wZXJ0aWVzLic7XG4gICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoZW50cnk6IFtzdHJpbmcsIGFueV0pID0+IHtcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHByb3BlcnR5UHJlZml4KSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGtleS5zdWJzdHIocHJvcGVydHlQcmVmaXgubGVuZ3RoKTtcbiAgICAgICAgcHJvcGVydGllc1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBnZW9tZXRyeSA9IGRhdGEuZ2VvbWV0cnk7XG4gICAgaWYgKGdlb21ldHJ5ID09PSB1bmRlZmluZWQgJiYgdGhpcy5mZWF0dXJlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGdlb21ldHJ5ID0gdGhpcy5mZWF0dXJlLmdlb21ldHJ5O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXRhOiBtZXRhIGFzIEZlYXR1cmVNZXRhLFxuICAgICAgdHlwZTogRkVBVFVSRSxcbiAgICAgIGdlb21ldHJ5LFxuICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICBwcm9wZXJ0aWVzXG4gICAgfTtcbiAgfVxufVxuIiwiXG48aWdvLWZvcm1cbiAgI2lnb0Zvcm1cbiAgW2Zvcm1dPVwiZm9ybVwiXG4gIFtmb3JtRGF0YV09XCJmZWF0dXJlJCB8IGFzeW5jXCJcbiAgKHN1Ym1pdEZvcm0pPVwib25TdWJtaXQoJGV2ZW50KVwiPlxuXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltmb3JtQnV0dG9uc11cIiBmb3JtQnV0dG9ucz48L25nLWNvbnRlbnQ+XG4gIFxuPC9pZ28tZm9ybT5cbiJdfQ==