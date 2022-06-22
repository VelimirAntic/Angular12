import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EntityStoreWatcher } from '../shared/watcher';
import { getEntityTitle } from '../shared/entity.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/core";
function EntitySelectorComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r0.emptyValue);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.emptyText);
} }
function EntitySelectorComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r1.multiSelectValue);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, ctx_r1.multiText$));
} }
function EntitySelectorComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", record_r3.entity);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.titleAccessor(record_r3.entity), " ");
} }
export class EntitySelectorComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        /**
         * The selected entity
         * @internal
         */
        this.selected$ = new BehaviorSubject(undefined);
        /**
         * The current multi select option text
         * @internal
         */
        this.multiText$ = new BehaviorSubject(undefined);
        this.multiSelectValue = { id: 'IGO_MULTI_SELECT' };
        this.emptyValue = { id: 'IGO_EMPTY_SELECT' };
        /**
         * Title accessor
         */
        this.titleAccessor = getEntityTitle;
        /**
         * Text to display when nothing is selected
         */
        this.emptyText = undefined;
        /**
         * Wheter selecting many entities is allowed
         */
        this.multi = false;
        /**
         * Text to display for the select all option
         */
        this.multiAllText = 'All';
        /**
         * Text to display for the select none option
         */
        this.multiNoneText = 'None';
        /**
         * Wheter the selector is disabled or not
         */
        this.disabled = false;
        /**
         * Event emitted when the selection changes
         */
        this.selectedChange = new EventEmitter();
    }
    /**
     * Create a store watcher and subscribe to the selected entity
     * @internal
     */
    ngOnInit() {
        this.watcher = new EntityStoreWatcher(this.store, this.cdRef);
        this.selected$$ = this.store.stateView
            .manyBy$((record) => record.state.selected === true)
            .subscribe((records) => {
            const entities = records.map((record) => record.entity);
            this.onSelectFromStore(entities);
        });
    }
    /**
     * Unsubscribe to the selected entity and destroy the store watcher
     * @internal
     */
    ngOnDestroy() {
        this.watcher.destroy();
        this.selected$$.unsubscribe();
    }
    /**
     * On selection change, update the store's state and emit an event
     * @internal
     */
    onSelectionChange(event) {
        const values = event.value instanceof Array ? event.value : [event.value];
        const multiSelect = values.find((_value) => _value === this.multiSelectValue);
        let entities = values.filter((_value) => _value !== this.multiSelectValue);
        if (multiSelect !== undefined) {
            if (entities.length === this.store.count) {
                entities = [];
            }
            else if (entities.length < this.store.count) {
                entities = this.store.all();
            }
        }
        entities = entities.filter((entity) => entity !== this.emptyValue);
        if (entities.length === 0) {
            this.store.state.updateAll({ selected: false });
        }
        else {
            this.store.state.updateMany(entities, { selected: true }, true);
        }
        const value = this.multi ? entities : event.value;
        this.selectedChange.emit({ selected: true, value });
    }
    onSelectFromStore(entities) {
        if (this.multi === true) {
            this.selected$.next(entities);
        }
        else {
            const entity = entities.length > 0 ? entities[0] : undefined;
            this.selected$.next(entity);
        }
        this.updateMultiToggleWithEntities(entities);
    }
    updateMultiToggleWithEntities(entities) {
        if (entities.length === this.store.count && this.multiText$.value !== this.multiNoneText) {
            this.multiText$.next(this.multiNoneText);
        }
        else if (entities.length < this.store.count && this.multiText$.value !== this.multiAllText) {
            this.multiText$.next(this.multiAllText);
        }
    }
}
EntitySelectorComponent.ɵfac = function EntitySelectorComponent_Factory(t) { return new (t || EntitySelectorComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
EntitySelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntitySelectorComponent, selectors: [["igo-entity-selector"]], inputs: { store: "store", titleAccessor: "titleAccessor", emptyText: "emptyText", multi: "multi", multiAllText: "multiAllText", multiNoneText: "multiNoneText", placeholder: "placeholder", disabled: "disabled" }, outputs: { selectedChange: "selectedChange" }, decls: 7, vars: 11, consts: [[1, "igo-entity-selector"], [3, "disabled", "value", "multiple", "placeholder", "selectionChange"], [3, "value", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [3, "value"]], template: function EntitySelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-select", 1);
        i0.ɵɵlistener("selectionChange", function EntitySelectorComponent_Template_mat_select_selectionChange_1_listener($event) { return ctx.onSelectionChange($event); });
        i0.ɵɵpipe(2, "async");
        i0.ɵɵtemplate(3, EntitySelectorComponent_mat_option_3_Template, 2, 2, "mat-option", 2);
        i0.ɵɵtemplate(4, EntitySelectorComponent_mat_option_4_Template, 3, 4, "mat-option", 2);
        i0.ɵɵtemplate(5, EntitySelectorComponent_ng_template_5_Template, 2, 2, "ng-template", 3);
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.disabled)("value", i0.ɵɵpipeBind1(2, 7, ctx.selected$))("multiple", ctx.multi)("placeholder", ctx.placeholder);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.emptyText !== undefined && ctx.multi === false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.multi === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 9, ctx.store.stateView.all$()));
    } }, directives: [i1.MatFormField, i2.MatSelect, i3.NgIf, i3.NgForOf, i4.MatOption], pipes: [i3.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntitySelectorComponent, [{
        type: Component,
        args: [{
                selector: 'igo-entity-selector',
                templateUrl: './entity-selector.component.html',
                styleUrls: ['./entity-selector.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { store: [{
            type: Input
        }], titleAccessor: [{
            type: Input
        }], emptyText: [{
            type: Input
        }], multi: [{
            type: Input
        }], multiAllText: [{
            type: Input
        }], multiNoneText: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9lbnRpdHktc2VsZWN0b3IvZW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9lbnRpdHktc2VsZWN0b3IvZW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBSXhCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBSXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztJQ1RwRCxxQ0FBb0Y7SUFBQSxZQUFhO0lBQUEsaUJBQWE7OztJQUEvQyx5Q0FBb0I7SUFBQyxlQUFhO0lBQWIsc0NBQWE7OztJQUNqRyxxQ0FBOEQ7SUFBQSxZQUFzQjs7SUFBQSxpQkFBYTs7O0lBQTlELCtDQUEwQjtJQUFDLGVBQXNCO0lBQXRCLDZEQUFzQjs7O0lBRWxGLHFDQUFvQztJQUNsQyxZQUNGO0lBQUEsaUJBQWE7Ozs7SUFGRCx3Q0FBdUI7SUFDakMsZUFDRjtJQURFLHVFQUNGOztBRFlOLE1BQU0sT0FBTyx1QkFBdUI7SUE0RWxDLFlBQW9CLEtBQXdCO1FBQXhCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBMUU1Qzs7O1dBR0c7UUFDTSxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVMsU0FBUyxDQUFDLENBQUM7UUFFNUQ7OztXQUdHO1FBQ00sZUFBVSxHQUFHLElBQUksZUFB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Q0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7OEZBbkpVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDeEJwQyx5Q0FBNEM7UUFDMUMscUNBS2dEO1FBQTlDLGtJQUFtQiw2QkFBeUIsSUFBQzs7UUFDN0Msc0ZBQThHO1FBQzlHLHNGQUFpRztRQUNqRyx3RkFJYzs7UUFDaEIsaUJBQWE7UUFDZixpQkFBaUI7O1FBYmIsZUFBcUI7UUFBckIsdUNBQXFCLDhDQUFBLHVCQUFBLGdDQUFBO1FBS1IsZUFBZ0Q7UUFBaEQseUVBQWdEO1FBQ2hELGVBQW9CO1FBQXBCLHlDQUFvQjtRQUNILGVBQTBDO1FBQTFDLDBFQUEwQzs7dUZEZS9ELHVCQUF1QjtjQU5uQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO29FQWdDVSxLQUFLO2tCQUFiLEtBQUs7WUFLRyxhQUFhO2tCQUFyQixLQUFLO1lBS0csU0FBUztrQkFBakIsS0FBSztZQUtHLEtBQUs7a0JBQWIsS0FBSztZQUtHLFlBQVk7a0JBQXBCLEtBQUs7WUFLRyxhQUFhO2tCQUFyQixLQUFLO1lBS0csV0FBVztrQkFBbkIsS0FBSztZQUtHLFFBQVE7a0JBQWhCLEtBQUs7WUFLSSxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEVudGl0eVJlY29yZCB9IGZyb20gJy4uL3NoYXJlZC9lbnRpdHkuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBFbnRpdHlTdG9yZSB9IGZyb20gJy4uL3NoYXJlZC9zdG9yZSc7XG5pbXBvcnQgeyBFbnRpdHlTdG9yZVdhdGNoZXIgfSBmcm9tICcuLi9zaGFyZWQvd2F0Y2hlcic7XG5pbXBvcnQgeyBnZXRFbnRpdHlUaXRsZSB9IGZyb20gJy4uL3NoYXJlZC9lbnRpdHkudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tZW50aXR5LXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VudGl0eS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VudGl0eS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogVGhlIHNlbGVjdGVkIGVudGl0eVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHJlYWRvbmx5IHNlbGVjdGVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8b2JqZWN0Pih1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBtdWx0aSBzZWxlY3Qgb3B0aW9uIHRleHRcbiAgICogQGludGVybmFsXG4gICAqL1xuICByZWFkb25seSBtdWx0aVRleHQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KHVuZGVmaW5lZCk7XG5cbiAgcmVhZG9ubHkgbXVsdGlTZWxlY3RWYWx1ZSA9IHtpZDogJ0lHT19NVUxUSV9TRUxFQ1QnfTtcblxuICByZWFkb25seSBlbXB0eVZhbHVlID0ge2lkOiAnSUdPX0VNUFRZX1NFTEVDVCd9O1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIHNlbGVjdGVkIGVudGl0eVxuICAgKi9cbiAgcHJpdmF0ZSBzZWxlY3RlZCQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFN0b3JlIHdhdGNoZXJcbiAgICovXG4gIHByaXZhdGUgd2F0Y2hlcjogRW50aXR5U3RvcmVXYXRjaGVyPG9iamVjdD47XG5cbiAgLyoqXG4gICAqIEVudGl0eSBzdG9yZVxuICAgKi9cbiAgQElucHV0KCkgc3RvcmU6IEVudGl0eVN0b3JlPG9iamVjdD47XG5cbiAgLyoqXG4gICAqIFRpdGxlIGFjY2Vzc29yXG4gICAqL1xuICBASW5wdXQoKSB0aXRsZUFjY2Vzc29yOiAob2JqZWN0KSA9PiBzdHJpbmcgPSBnZXRFbnRpdHlUaXRsZTtcblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gbm90aGluZyBpcyBzZWxlY3RlZFxuICAgKi9cbiAgQElucHV0KCkgZW1wdHlUZXh0OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFdoZXRlciBzZWxlY3RpbmcgbWFueSBlbnRpdGllcyBpcyBhbGxvd2VkXG4gICAqL1xuICBASW5wdXQoKSBtdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXkgZm9yIHRoZSBzZWxlY3QgYWxsIG9wdGlvblxuICAgKi9cbiAgQElucHV0KCkgbXVsdGlBbGxUZXh0OiBzdHJpbmcgPSAnQWxsJztcblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IGZvciB0aGUgc2VsZWN0IG5vbmUgb3B0aW9uXG4gICAqL1xuICBASW5wdXQoKSBtdWx0aU5vbmVUZXh0OiBzdHJpbmcgPSAnTm9uZSc7XG5cbiAgLyoqXG4gICAqIEZpZWxkIHBsYWNlaG9sZGVyXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0ZXIgdGhlIHNlbGVjdG9yIGlzIGRpc2FibGVkIG9yIG5vdFxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzZWxlY3Rpb24gY2hhbmdlc1xuICAgKi9cbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgdmFsdWU6IG9iamVjdCB8IG9iamVjdFtdO1xuICB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSB3YXRjaGVyIGFuZCBzdWJzY3JpYmUgdG8gdGhlIHNlbGVjdGVkIGVudGl0eVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2F0Y2hlciA9IG5ldyBFbnRpdHlTdG9yZVdhdGNoZXIodGhpcy5zdG9yZSwgdGhpcy5jZFJlZik7XG5cbiAgICB0aGlzLnNlbGVjdGVkJCQgPSB0aGlzLnN0b3JlLnN0YXRlVmlld1xuICAgICAgLm1hbnlCeSQoKHJlY29yZDogRW50aXR5UmVjb3JkPG9iamVjdD4pID0+IHJlY29yZC5zdGF0ZS5zZWxlY3RlZCA9PT0gdHJ1ZSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlY29yZHM6IEVudGl0eVJlY29yZDxvYmplY3Q+W10pID0+IHtcbiAgICAgICAgY29uc3QgZW50aXRpZXMgPSByZWNvcmRzLm1hcCgocmVjb3JkOiBFbnRpdHlSZWNvcmQ8b2JqZWN0PikgPT4gcmVjb3JkLmVudGl0eSk7XG4gICAgICAgIHRoaXMub25TZWxlY3RGcm9tU3RvcmUoZW50aXRpZXMpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdG8gdGhlIHNlbGVjdGVkIGVudGl0eSBhbmQgZGVzdHJveSB0aGUgc3RvcmUgd2F0Y2hlclxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMud2F0Y2hlci5kZXN0cm95KCk7XG4gICAgdGhpcy5zZWxlY3RlZCQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogT24gc2VsZWN0aW9uIGNoYW5nZSwgdXBkYXRlIHRoZSBzdG9yZSdzIHN0YXRlIGFuZCBlbWl0IGFuIGV2ZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25TZWxlY3Rpb25DaGFuZ2UoZXZlbnQ6IHt2YWx1ZTogb2JqZWN0IHwgdW5kZWZpbmVkfSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IGV2ZW50LnZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyBldmVudC52YWx1ZSA6IFtldmVudC52YWx1ZV07XG5cbiAgICBjb25zdCBtdWx0aVNlbGVjdCA9IHZhbHVlcy5maW5kKChfdmFsdWU6IG9iamVjdCkgPT4gX3ZhbHVlID09PSB0aGlzLm11bHRpU2VsZWN0VmFsdWUpO1xuICAgIGxldCBlbnRpdGllcyA9IHZhbHVlcy5maWx0ZXIoKF92YWx1ZTogb2JqZWN0KSA9PiBfdmFsdWUgIT09IHRoaXMubXVsdGlTZWxlY3RWYWx1ZSk7XG4gICAgaWYgKG11bHRpU2VsZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbnRpdGllcy5sZW5ndGggPT09IHRoaXMuc3RvcmUuY291bnQpIHtcbiAgICAgICAgZW50aXRpZXMgPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXRpZXMubGVuZ3RoIDwgdGhpcy5zdG9yZS5jb3VudCkge1xuICAgICAgICBlbnRpdGllcyA9IHRoaXMuc3RvcmUuYWxsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZW50aXRpZXMgPSBlbnRpdGllcy5maWx0ZXIoKGVudGl0eTogb2JqZWN0KSA9PiBlbnRpdHkgIT09IHRoaXMuZW1wdHlWYWx1ZSk7XG4gICAgaWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdG9yZS5zdGF0ZS51cGRhdGVBbGwoe3NlbGVjdGVkOiBmYWxzZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnN0YXRlLnVwZGF0ZU1hbnkoZW50aXRpZXMsIHtzZWxlY3RlZDogdHJ1ZX0sIHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5tdWx0aSA/IGVudGl0aWVzIDogZXZlbnQudmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHtzZWxlY3RlZDogdHJ1ZSwgdmFsdWV9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25TZWxlY3RGcm9tU3RvcmUoZW50aXRpZXM6IG9iamVjdFtdKSB7XG4gICAgaWYgKHRoaXMubXVsdGkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQoZW50aXRpZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllcy5sZW5ndGggPiAwID8gZW50aXRpZXNbMF0gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KGVudGl0eSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVNdWx0aVRvZ2dsZVdpdGhFbnRpdGllcyhlbnRpdGllcyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU11bHRpVG9nZ2xlV2l0aEVudGl0aWVzKGVudGl0aWVzOiBvYmplY3RbXSkge1xuICAgIGlmIChlbnRpdGllcy5sZW5ndGggPT09IHRoaXMuc3RvcmUuY291bnQgJiYgdGhpcy5tdWx0aVRleHQkLnZhbHVlICE9PSB0aGlzLm11bHRpTm9uZVRleHQpIHtcbiAgICAgIHRoaXMubXVsdGlUZXh0JC5uZXh0KHRoaXMubXVsdGlOb25lVGV4dCk7XG4gICAgfSBlbHNlIGlmIChlbnRpdGllcy5sZW5ndGggPCB0aGlzLnN0b3JlLmNvdW50ICYmIHRoaXMubXVsdGlUZXh0JC52YWx1ZSAhPT0gdGhpcy5tdWx0aUFsbFRleHQpIHtcbiAgICAgIHRoaXMubXVsdGlUZXh0JC5uZXh0KHRoaXMubXVsdGlBbGxUZXh0KTtcbiAgICB9XG4gIH1cblxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiaWdvLWVudGl0eS1zZWxlY3RvclwiPlxuICA8bWF0LXNlbGVjdFxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW3ZhbHVlXT1cInNlbGVjdGVkJCB8IGFzeW5jXCJcbiAgICBbbXVsdGlwbGVdPVwibXVsdGlcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nSWY9XCJlbXB0eVRleHQgIT09IHVuZGVmaW5lZCAmJiBtdWx0aSA9PT0gZmFsc2VcIiBbdmFsdWVdPVwiZW1wdHlWYWx1ZVwiPnt7ZW1wdHlUZXh0fX08L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gKm5nSWY9XCJtdWx0aSA9PT0gdHJ1ZVwiIFt2YWx1ZV09XCJtdWx0aVNlbGVjdFZhbHVlXCI+e3ttdWx0aVRleHQkIHwgYXN5bmN9fTwvbWF0LW9wdGlvbj5cbiAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXJlY29yZCBbbmdGb3JPZl09XCJzdG9yZS5zdGF0ZVZpZXcuYWxsJCgpIHwgYXN5bmNcIj5cbiAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJyZWNvcmQuZW50aXR5XCI+XG4gICAgICAgIHt7dGl0bGVBY2Nlc3NvcihyZWNvcmQuZW50aXR5KX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==