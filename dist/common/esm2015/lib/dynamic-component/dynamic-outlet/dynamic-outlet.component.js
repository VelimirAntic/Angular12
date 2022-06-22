import { Input, ChangeDetectionStrategy, Component, ViewContainerRef, ViewChild } from '@angular/core';
import { ObjectUtils } from '@igo2/utils';
import { DynamicComponent } from '../shared/dynamic-component';
import * as i0 from "@angular/core";
import * as i1 from "../shared/dynamic-component.service";
const _c0 = ["target"];
function DynamicOutletComponent_ng_template_0_Template(rf, ctx) { }
export class DynamicOutletComponent {
    constructor(dynamicComponentService, cdRef) {
        this.dynamicComponentService = dynamicComponentService;
        this.cdRef = cdRef;
        /**
         * The dynamic component inputs
         */
        this.inputs = {};
        /**
         * The subscribers to the dynamic component outputs
         */
        this.subscribers = {};
    }
    /**
     * If the dynamic component changes, create it.
     * If the inputs or subscribers change, update the current component's
     * inputs or subscribers.
     * @internal
     */
    ngOnChanges(changes) {
        const component = changes.component;
        const inputs = changes.inputs;
        const subscribers = changes.subscribers;
        const eq = ObjectUtils.objectsAreEquivalent;
        if (!component || !component.currentValue) {
            return;
        }
        if (component.currentValue !== component.previousValue) {
            this.createComponent(component.currentValue);
        }
        else {
            const inputsAreEquivalents = inputs && eq(inputs.currentValue || {}, inputs.previousValue || {});
            const subscribersAreEquivalents = subscribers &&
                eq(subscribers.currentValue || {}, subscribers.previousValue || {});
            if (inputsAreEquivalents === false) {
                this.updateInputs();
            }
            if (subscribersAreEquivalents === false) {
                this.updateSubscribers();
            }
        }
        this.cdRef.detectChanges();
    }
    /**
     * Destroy the dynamic component and all it's subscribers
     * @internal
     */
    ngOnDestroy() {
        if (this.dynamicComponent) {
            this.dynamicComponent.destroy();
        }
    }
    /**
     * Create a  DynamicComponent out of the component class and render it.
     * @internal
     */
    createComponent(component) {
        if (this.dynamicComponent !== undefined) {
            this.dynamicComponent.destroy();
        }
        this.dynamicComponent =
            component instanceof DynamicComponent
                ? component
                : this.dynamicComponentService.create(component);
        this.renderComponent();
    }
    /**
     * Create and render the dynamic component. Set it's inputs and subscribers
     * @internal
     */
    renderComponent() {
        this.updateInputs();
        this.updateSubscribers();
        this.dynamicComponent.setTarget(this.target);
    }
    /**
     * Update the dynamic component inputs. This is an update so any
     * key not defined won't be overwritten.
     * @internal
     */
    updateInputs() {
        this.dynamicComponent.updateInputs(this.inputs);
    }
    /**
     * Update the dynamic component subscribers. This is an update so any
     * key not defined won't be overwritten.
     * @internal
     */
    updateSubscribers() {
        this.dynamicComponent.updateSubscribers(this.subscribers);
    }
}
DynamicOutletComponent.ɵfac = function DynamicOutletComponent_Factory(t) { return new (t || DynamicOutletComponent)(i0.ɵɵdirectiveInject(i1.DynamicComponentService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
DynamicOutletComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicOutletComponent, selectors: [["igo-dynamic-outlet"]], viewQuery: function DynamicOutletComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.target = _t.first);
    } }, inputs: { component: "component", inputs: "inputs", subscribers: "subscribers" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["target", ""]], template: function DynamicOutletComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DynamicOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicOutletComponent, [{
        type: Component,
        args: [{
                selector: 'igo-dynamic-outlet',
                templateUrl: 'dynamic-outlet.component.html',
                styleUrls: ['dynamic-outlet.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DynamicComponentService }, { type: i0.ChangeDetectorRef }]; }, { component: [{
            type: Input
        }], inputs: [{
            type: Input
        }], subscribers: [{
            type: Input
        }], target: [{
            type: ViewChild,
            args: ['target', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvZHluYW1pYy1jb21wb25lbnQvZHluYW1pYy1vdXRsZXQvZHluYW1pYy1vdXRsZXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvZHluYW1pYy1jb21wb25lbnQvZHluYW1pYy1vdXRsZXQvZHluYW1pYy1vdXRsZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUlULGdCQUFnQixFQUNoQixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFTL0QsTUFBTSxPQUFPLHNCQUFzQjtJQTRCakMsWUFDVSx1QkFBZ0QsRUFDaEQsS0FBd0I7UUFEeEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQXhCbEM7O1dBRUc7UUFDTSxXQUFNLEdBQTJCLEVBQUUsQ0FBQztRQUU3Qzs7V0FFRztRQUNNLGdCQUFXLEdBQTRDLEVBQUUsQ0FBQztJQWlCaEUsQ0FBQztJQUVKOzs7OztPQUtHO0lBQ0gsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDcEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM5QixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3hDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztRQUU1QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTtZQUN6QyxPQUFPO1NBQ1I7UUFFRCxJQUFJLFNBQVMsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUN0RCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0wsTUFBTSxvQkFBb0IsR0FDeEIsTUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0seUJBQXlCLEdBQzdCLFdBQVc7Z0JBQ1gsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFLFdBQVcsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUM7WUFFdEUsSUFBSSxvQkFBb0IsS0FBSyxLQUFLLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtZQUVELElBQUkseUJBQXlCLEtBQUssS0FBSyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSyxlQUFlLENBQUMsU0FBc0M7UUFDNUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxnQkFBZ0I7WUFDbkIsU0FBUyxZQUFZLGdCQUFnQjtnQkFDbkMsQ0FBQyxDQUFDLFNBQVM7Z0JBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLFlBQVk7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs0RkF4SFUsc0JBQXNCO3lFQUF0QixzQkFBc0I7K0JBeUJKLGdCQUFnQjs7Ozs7UUNoRC9DLHdIQUFtQzs7dUZEdUJ0QixzQkFBc0I7Y0FObEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDswR0FLVSxTQUFTO2tCQUFqQixLQUFLO1lBS0csTUFBTTtrQkFBZCxLQUFLO1lBS0csV0FBVztrQkFBbkIsS0FBSztZQVlFLE1BQU07a0JBRGIsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvZHluYW1pYy1jb21wb25lbnQnO1xuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZHluYW1pYy1jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1keW5hbWljLW91dGxldCcsXG4gIHRlbXBsYXRlVXJsOiAnZHluYW1pYy1vdXRsZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZHluYW1pYy1vdXRsZXQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY091dGxldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBkeW5hbWljIGNvbXBvbmVudCBiYXNlIGNsYXNzIG9yIHRoZSBkeW5hbWljIGNvbXBvbmVudCBpdHNlbGZcbiAgICovXG4gIEBJbnB1dCgpIGNvbXBvbmVudDogRHluYW1pY0NvbXBvbmVudDxhbnk+IHwgYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgZHluYW1pYyBjb21wb25lbnQgaW5wdXRzXG4gICAqL1xuICBASW5wdXQoKSBpbnB1dHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAvKipcbiAgICogVGhlIHN1YnNjcmliZXJzIHRvIHRoZSBkeW5hbWljIGNvbXBvbmVudCBvdXRwdXRzXG4gICAqL1xuICBASW5wdXQoKSBzdWJzY3JpYmVyczogeyBba2V5OiBzdHJpbmddOiAoZXZlbnQ6IGFueSkgPT4gdm9pZCB9ID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBkeW5hbWljIGNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBkeW5hbWljQ29tcG9uZW50OiBEeW5hbWljQ29tcG9uZW50PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSB2aWV3IGVsZW1lbnQgdG8gcmVuZGVyIHRoZSBjb21wb25lbnQgdG9cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQFZpZXdDaGlsZCgndGFyZ2V0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSB0YXJnZXQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkeW5hbWljQ29tcG9uZW50U2VydmljZTogRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgZHluYW1pYyBjb21wb25lbnQgY2hhbmdlcywgY3JlYXRlIGl0LlxuICAgKiBJZiB0aGUgaW5wdXRzIG9yIHN1YnNjcmliZXJzIGNoYW5nZSwgdXBkYXRlIHRoZSBjdXJyZW50IGNvbXBvbmVudCdzXG4gICAqIGlucHV0cyBvciBzdWJzY3JpYmVycy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gY2hhbmdlcy5jb21wb25lbnQ7XG4gICAgY29uc3QgaW5wdXRzID0gY2hhbmdlcy5pbnB1dHM7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBjaGFuZ2VzLnN1YnNjcmliZXJzO1xuICAgIGNvbnN0IGVxID0gT2JqZWN0VXRpbHMub2JqZWN0c0FyZUVxdWl2YWxlbnQ7XG5cbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb21wb25lbnQuY3VycmVudFZhbHVlICE9PSBjb21wb25lbnQucHJldmlvdXNWYWx1ZSkge1xuICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50LmN1cnJlbnRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlucHV0c0FyZUVxdWl2YWxlbnRzID1cbiAgICAgICAgaW5wdXRzICYmIGVxKGlucHV0cy5jdXJyZW50VmFsdWUgfHwge30sIGlucHV0cy5wcmV2aW91c1ZhbHVlIHx8IHt9KTtcbiAgICAgIGNvbnN0IHN1YnNjcmliZXJzQXJlRXF1aXZhbGVudHMgPVxuICAgICAgICBzdWJzY3JpYmVycyAmJlxuICAgICAgICBlcShzdWJzY3JpYmVycy5jdXJyZW50VmFsdWUgfHwge30sIHN1YnNjcmliZXJzLnByZXZpb3VzVmFsdWUgfHwge30pO1xuXG4gICAgICBpZiAoaW5wdXRzQXJlRXF1aXZhbGVudHMgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRzKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJzY3JpYmVyc0FyZUVxdWl2YWxlbnRzID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN1YnNjcmliZXJzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGR5bmFtaWMgY29tcG9uZW50IGFuZCBhbGwgaXQncyBzdWJzY3JpYmVyc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmR5bmFtaWNDb21wb25lbnQpIHtcbiAgICAgIHRoaXMuZHluYW1pY0NvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhICBEeW5hbWljQ29tcG9uZW50IG91dCBvZiB0aGUgY29tcG9uZW50IGNsYXNzIGFuZCByZW5kZXIgaXQuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50OiBEeW5hbWljQ29tcG9uZW50PGFueT4gfCBhbnkpIHtcbiAgICBpZiAodGhpcy5keW5hbWljQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZHluYW1pY0NvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuZHluYW1pY0NvbXBvbmVudCA9XG4gICAgICBjb21wb25lbnQgaW5zdGFuY2VvZiBEeW5hbWljQ29tcG9uZW50XG4gICAgICAgID8gY29tcG9uZW50XG4gICAgICAgIDogdGhpcy5keW5hbWljQ29tcG9uZW50U2VydmljZS5jcmVhdGUoY29tcG9uZW50KTtcbiAgICB0aGlzLnJlbmRlckNvbXBvbmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgcmVuZGVyIHRoZSBkeW5hbWljIGNvbXBvbmVudC4gU2V0IGl0J3MgaW5wdXRzIGFuZCBzdWJzY3JpYmVyc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgcmVuZGVyQ29tcG9uZW50KCkge1xuICAgIHRoaXMudXBkYXRlSW5wdXRzKCk7XG4gICAgdGhpcy51cGRhdGVTdWJzY3JpYmVycygpO1xuICAgIHRoaXMuZHluYW1pY0NvbXBvbmVudC5zZXRUYXJnZXQodGhpcy50YXJnZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZHluYW1pYyBjb21wb25lbnQgaW5wdXRzLiBUaGlzIGlzIGFuIHVwZGF0ZSBzbyBhbnlcbiAgICoga2V5IG5vdCBkZWZpbmVkIHdvbid0IGJlIG92ZXJ3cml0dGVuLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlSW5wdXRzKCkge1xuICAgIHRoaXMuZHluYW1pY0NvbXBvbmVudC51cGRhdGVJbnB1dHModGhpcy5pbnB1dHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZHluYW1pYyBjb21wb25lbnQgc3Vic2NyaWJlcnMuIFRoaXMgaXMgYW4gdXBkYXRlIHNvIGFueVxuICAgKiBrZXkgbm90IGRlZmluZWQgd29uJ3QgYmUgb3ZlcndyaXR0ZW4uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVTdWJzY3JpYmVycygpIHtcbiAgICB0aGlzLmR5bmFtaWNDb21wb25lbnQudXBkYXRlU3Vic2NyaWJlcnModGhpcy5zdWJzY3JpYmVycyk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjdGFyZ2V0PjwvbmctdGVtcGxhdGU+XG4iXX0=