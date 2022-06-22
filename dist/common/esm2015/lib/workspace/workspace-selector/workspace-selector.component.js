import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { getEntityTitle } from '../../entity';
import * as i0 from "@angular/core";
import * as i1 from "../../entity/entity-selector/entity-selector.component";
/**
 * Drop list that activates the selected workspace emit an event.
 */
export class WorkspaceSelectorComponent {
    constructor() {
        /**
         * Event emitted when an workspace is selected or unselected
         */
        this.selectedChange = new EventEmitter();
    }
    /**
     * @internal
     */
    getWorkspaceTitle(workspace) {
        return getEntityTitle(workspace);
    }
    /**
     * When an workspace is manually selected, select it into the
     * store and emit an event.
     * @internal
     * @param event The selection change event
     */
    onSelectedChange(event) {
        const workspace = event.value;
        this.store.activateWorkspace(workspace);
        this.selectedChange.emit({ selected: true, value: workspace });
    }
}
WorkspaceSelectorComponent.ɵfac = function WorkspaceSelectorComponent_Factory(t) { return new (t || WorkspaceSelectorComponent)(); };
WorkspaceSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WorkspaceSelectorComponent, selectors: [["igo-workspace-selector"]], inputs: { store: "store", disabled: "disabled" }, outputs: { selectedChange: "selectedChange" }, decls: 1, vars: 4, consts: [[3, "store", "multi", "titleAccessor", "disabled", "selectedChange"]], template: function WorkspaceSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-entity-selector", 0);
        i0.ɵɵlistener("selectedChange", function WorkspaceSelectorComponent_Template_igo_entity_selector_selectedChange_0_listener($event) { return ctx.onSelectedChange($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("store", ctx.store)("multi", false)("titleAccessor", ctx.getWorkspaceTitle)("disabled", ctx.disabled);
    } }, directives: [i1.EntitySelectorComponent], styles: ["igo-entity-selector[_ngcontent-%COMP%]     mat-form-field .mat-form-field-infix{padding:0}igo-entity-selector[_ngcontent-%COMP%]     mat-form-field .mat-form-field-wrapper{padding-bottom:1.75em}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkspaceSelectorComponent, [{
        type: Component,
        args: [{
                selector: 'igo-workspace-selector',
                templateUrl: './workspace-selector.component.html',
                styleUrls: ['./workspace-selector.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { store: [{
            type: Input
        }], disabled: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL3dvcmtzcGFjZS93b3Jrc3BhY2Utc2VsZWN0b3Ivd29ya3NwYWNlLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL3dvcmtzcGFjZS93b3Jrc3BhY2Utc2VsZWN0b3Ivd29ya3NwYWNlLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUk5Qzs7R0FFRztBQU9ILE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFrQkU7O1dBRUc7UUFDTyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUd2QyxDQUFDO0tBcUJOO0lBbkJDOztPQUVHO0lBQ0gsaUJBQWlCLENBQUMsU0FBb0I7UUFDcEMsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0JBQWdCLENBQUMsS0FBeUI7UUFDeEMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOztvR0FyQ1UsMEJBQTBCOzZFQUExQiwwQkFBMEI7UUNyQnZDLDhDQUs4QztRQUE1Qyw0SUFBa0IsNEJBQXdCLElBQUM7UUFDN0MsaUJBQXNCOztRQUxwQixpQ0FBZSxnQkFBQSx3Q0FBQSwwQkFBQTs7dUZEb0JKLDBCQUEwQjtjQU50QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQU1VLEtBQUs7a0JBQWIsS0FBSztZQUtHLFFBQVE7a0JBQWhCLEtBQUs7WUFLSSxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBnZXRFbnRpdHlUaXRsZSB9IGZyb20gJy4uLy4uL2VudGl0eSc7XG5pbXBvcnQgeyBXb3Jrc3BhY2UgfSBmcm9tICcuLi9zaGFyZWQvd29ya3NwYWNlJztcbmltcG9ydCB7IFdvcmtzcGFjZVN0b3JlIH0gZnJvbSAnLi4vc2hhcmVkL3N0b3JlJztcblxuLyoqXG4gKiBEcm9wIGxpc3QgdGhhdCBhY3RpdmF0ZXMgdGhlIHNlbGVjdGVkIHdvcmtzcGFjZSBlbWl0IGFuIGV2ZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28td29ya3NwYWNlLXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dvcmtzcGFjZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dvcmtzcGFjZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBXb3Jrc3BhY2VTZWxlY3RvckNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFN0b3JlIHRoYXQgaG9sZHMgdGhlIGF2YWlsYWJsZSB3b3Jrc3BhY2VzLlxuICAgKi9cbiAgQElucHV0KCkgc3RvcmU6IFdvcmtzcGFjZVN0b3JlO1xuXG4gIC8qKlxuICAgKiBXaGVpdGhlciB0aGUgc2VsZWN0b3IgbXVzdCBiZSBkaXNhYmxlZCBvciBub3QuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGFuIHdvcmtzcGFjZSBpcyBzZWxlY3RlZCBvciB1bnNlbGVjdGVkXG4gICAqL1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgICB2YWx1ZTogV29ya3NwYWNlO1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldFdvcmtzcGFjZVRpdGxlKHdvcmtzcGFjZTogV29ya3NwYWNlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0RW50aXR5VGl0bGUod29ya3NwYWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGFuIHdvcmtzcGFjZSBpcyBtYW51YWxseSBzZWxlY3RlZCwgc2VsZWN0IGl0IGludG8gdGhlXG4gICAqIHN0b3JlIGFuZCBlbWl0IGFuIGV2ZW50LlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIGV2ZW50IFRoZSBzZWxlY3Rpb24gY2hhbmdlIGV2ZW50XG4gICAqL1xuICBvblNlbGVjdGVkQ2hhbmdlKGV2ZW50OiB7dmFsdWU6IFdvcmtzcGFjZX0pIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSBldmVudC52YWx1ZTtcbiAgICB0aGlzLnN0b3JlLmFjdGl2YXRlV29ya3NwYWNlKHdvcmtzcGFjZSk7XG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHtzZWxlY3RlZDogdHJ1ZSwgdmFsdWU6IHdvcmtzcGFjZX0pO1xuICB9XG5cbn1cbiIsIjxpZ28tZW50aXR5LXNlbGVjdG9yXG4gIFtzdG9yZV09XCJzdG9yZVwiXG4gIFttdWx0aV09XCJmYWxzZVwiXG4gIFt0aXRsZUFjY2Vzc29yXT1cImdldFdvcmtzcGFjZVRpdGxlXCJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uU2VsZWN0ZWRDaGFuZ2UoJGV2ZW50KVwiPlxuPC9pZ28tZW50aXR5LXNlbGVjdG9yPlxuIl19