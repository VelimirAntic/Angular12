import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../dynamic-component/dynamic-outlet/dynamic-outlet.component";
function WidgetOutletComponent_igo_dynamic_outlet_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-dynamic-outlet", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("component", ctx_r0.widget)("inputs", ctx_r0.inputs)("subscribers", ctx_r0.getEffectiveSubscribers());
} }
/**
 * This component dynamically renders a widget. It also subscribes
 * to the widget's 'cancel' and 'complete' events and destroys it
 * when any of those event is emitted.
 */
export class WidgetOutletComponent {
    constructor() {
        /**
         * Widget subscribers to 'cancel' and 'complete'
         * @internal
         */
        this.baseSubscribers = {
            cancel: (event) => this.onCancel(event),
            complete: (event) => this.onComplete(event)
        };
        /**
         * Widget subscribers
         */
        this.subscribers = {};
        /**
         * Event emitted when the widget emits 'complete'
         */
        this.complete = new EventEmitter();
        /**
         * Event emitted when the widget emits 'cancel'
         */
        this.cancel = new EventEmitter();
    }
    /**
     * Destroy the current widget and all it's inner subscriptions
     * @internal
     */
    ngOnDestroy() {
        this.destroyWidget();
    }
    /**
     * Get the effective subscribers. That means a combination of the base
     * subscribers and any subscriber given as input.
     * @returns Combined subscribers
     * @internal
     */
    getEffectiveSubscribers() {
        const subscribers = Object.assign({}, this.subscribers);
        // Base subscribers
        Object.keys(this.baseSubscribers).forEach((key) => {
            const subscriber = subscribers[key];
            const baseSubscriber = this.baseSubscribers[key];
            if (subscriber !== undefined) {
                subscribers[key] = (event) => {
                    subscriber(event);
                    baseSubscriber(event);
                };
            }
            else {
                subscribers[key] = baseSubscriber;
            }
        });
        return subscribers;
    }
    /**
     * When the widget emits 'cancel', propagate that event and destroy
     * the widget
     */
    onCancel(event) {
        this.cancel.emit(event);
        this.destroyWidget();
    }
    /**
     * When the widget emits 'complete', propagate that event and destroy
     * the widget
     */
    onComplete(event) {
        this.complete.emit(event);
        this.destroyWidget();
    }
    /**
     * Destroy the current widget
     */
    destroyWidget() {
        if (this.widget !== undefined) {
            this.widget.destroy();
        }
        this.widget = undefined;
    }
}
WidgetOutletComponent.ɵfac = function WidgetOutletComponent_Factory(t) { return new (t || WidgetOutletComponent)(); };
WidgetOutletComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WidgetOutletComponent, selectors: [["igo-widget-outlet"]], inputs: { widget: "widget", inputs: "inputs", subscribers: "subscribers" }, outputs: { complete: "complete", cancel: "cancel" }, decls: 1, vars: 1, consts: [[3, "component", "inputs", "subscribers", 4, "ngIf"], [3, "component", "inputs", "subscribers"]], template: function WidgetOutletComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, WidgetOutletComponent_igo_dynamic_outlet_0_Template, 1, 3, "igo-dynamic-outlet", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.widget);
    } }, directives: [i1.NgIf, i2.DynamicOutletComponent], styles: ["igo-dynamic-outlet[_ngcontent-%COMP%]{height:100%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetOutletComponent, [{
        type: Component,
        args: [{
                selector: 'igo-widget-outlet',
                templateUrl: './widget-outlet.component.html',
                styleUrls: ['./widget-outlet.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { widget: [{
            type: Input
        }], inputs: [{
            type: Input
        }], subscribers: [{
            type: Input
        }], complete: [{
            type: Output
        }], cancel: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LW91dGxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi93aWRnZXQvd2lkZ2V0LW91dGxldC93aWRnZXQtb3V0bGV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL3dpZGdldC93aWRnZXQtb3V0bGV0L3dpZGdldC1vdXRsZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFFeEIsTUFBTSxlQUFlLENBQUM7Ozs7O0lDUHZCLHdDQUtxQjs7O0lBSG5CLHlDQUFvQix5QkFBQSxpREFBQTs7QURXdEI7Ozs7R0FJRztBQU9ILE1BQU0sT0FBTyxxQkFBcUI7SUFvQ2hDO1FBbENBOzs7V0FHRztRQUNLLG9CQUFlLEdBQUc7WUFDeEIsTUFBTSxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM1QyxRQUFRLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ2pELENBQUM7UUFZRjs7V0FFRztRQUNNLGdCQUFXLEdBQTBDLEVBQUUsQ0FBQztRQUVqRTs7V0FFRztRQUNPLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdDOztXQUVHO1FBQ08sV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFNUIsQ0FBQztJQUVoQjs7O09BR0c7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHVCQUF1QjtRQUNyQixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEQsbUJBQW1CO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFFO1lBQ3hELE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pELElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtnQkFDNUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7b0JBQ2hDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbEIsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssUUFBUSxDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7O09BR0c7SUFDSyxVQUFVLENBQUMsS0FBVTtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssYUFBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUMxQixDQUFDOzswRkFsR1UscUJBQXFCO3dFQUFyQixxQkFBcUI7UUN4QmxDLG9HQUtxQjs7UUFKbEIsaUNBQVk7O3VGRHVCRixxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtzQ0FlVSxNQUFNO2tCQUFkLEtBQUs7WUFLRyxNQUFNO2tCQUFkLEtBQUs7WUFLRyxXQUFXO2tCQUFuQixLQUFLO1lBS0ksUUFBUTtrQkFBakIsTUFBTTtZQUtHLE1BQU07a0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZHluYW1pYy1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvd2lkZ2V0LmludGVyZmFjZXMnO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGR5bmFtaWNhbGx5IHJlbmRlcnMgYSB3aWRnZXQuIEl0IGFsc28gc3Vic2NyaWJlc1xuICogdG8gdGhlIHdpZGdldCdzICdjYW5jZWwnIGFuZCAnY29tcGxldGUnIGV2ZW50cyBhbmQgZGVzdHJveXMgaXRcbiAqIHdoZW4gYW55IG9mIHRob3NlIGV2ZW50IGlzIGVtaXR0ZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby13aWRnZXQtb3V0bGV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpZGdldC1vdXRsZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93aWRnZXQtb3V0bGV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFdpZGdldE91dGxldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFdpZGdldCBzdWJzY3JpYmVycyB0byAnY2FuY2VsJyBhbmQgJ2NvbXBsZXRlJ1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgYmFzZVN1YnNjcmliZXJzID0ge1xuICAgIGNhbmNlbDogKGV2ZW50OiBhbnkpID0+IHRoaXMub25DYW5jZWwoZXZlbnQpLFxuICAgIGNvbXBsZXRlOiAoZXZlbnQ6IGFueSkgPT4gdGhpcy5vbkNvbXBsZXRlKGV2ZW50KVxuICB9O1xuXG4gIC8qKlxuICAgKiBXaWRnZXRcbiAgICovXG4gIEBJbnB1dCgpIHdpZGdldDogRHluYW1pY0NvbXBvbmVudDxXaWRnZXRDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBXaWRnZXQgaW5wdXRzXG4gICAqL1xuICBASW5wdXQoKSBpbnB1dHM6IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuXG4gIC8qKlxuICAgKiBXaWRnZXQgc3Vic2NyaWJlcnNcbiAgICovXG4gIEBJbnB1dCgpIHN1YnNjcmliZXJzOiB7W2tleTogc3RyaW5nXTogKGV2ZW50OiBhbnkpID0+IHZvaWR9ID0ge307XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgd2lkZ2V0IGVtaXRzICdjb21wbGV0ZSdcbiAgICovXG4gIEBPdXRwdXQoKSBjb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHdpZGdldCBlbWl0cyAnY2FuY2VsJ1xuICAgKi9cbiAgQE91dHB1dCgpIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgY3VycmVudCB3aWRnZXQgYW5kIGFsbCBpdCdzIGlubmVyIHN1YnNjcmlwdGlvbnNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lXaWRnZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGVmZmVjdGl2ZSBzdWJzY3JpYmVycy4gVGhhdCBtZWFucyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBiYXNlXG4gICAqIHN1YnNjcmliZXJzIGFuZCBhbnkgc3Vic2NyaWJlciBnaXZlbiBhcyBpbnB1dC5cbiAgICogQHJldHVybnMgQ29tYmluZWQgc3Vic2NyaWJlcnNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRFZmZlY3RpdmVTdWJzY3JpYmVycygpOiB7W2tleTogc3RyaW5nXTogKGV2ZW50OiBhbnkpID0+IHZvaWR9IHtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3Vic2NyaWJlcnMpO1xuXG4gICAgLy8gQmFzZSBzdWJzY3JpYmVyc1xuICAgIE9iamVjdC5rZXlzKHRoaXMuYmFzZVN1YnNjcmliZXJzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IHN1YnNjcmliZXJzW2tleV07XG4gICAgICBjb25zdCBiYXNlU3Vic2NyaWJlciA9IHRoaXMuYmFzZVN1YnNjcmliZXJzW2tleV07XG4gICAgICBpZiAoc3Vic2NyaWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2tleV0gPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIHN1YnNjcmliZXIoZXZlbnQpO1xuICAgICAgICAgIGJhc2VTdWJzY3JpYmVyKGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2tleV0gPSBiYXNlU3Vic2NyaWJlcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJzY3JpYmVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSB3aWRnZXQgZW1pdHMgJ2NhbmNlbCcsIHByb3BhZ2F0ZSB0aGF0IGV2ZW50IGFuZCBkZXN0cm95XG4gICAqIHRoZSB3aWRnZXRcbiAgICovXG4gIHByaXZhdGUgb25DYW5jZWwoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuY2FuY2VsLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMuZGVzdHJveVdpZGdldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHdpZGdldCBlbWl0cyAnY29tcGxldGUnLCBwcm9wYWdhdGUgdGhhdCBldmVudCBhbmQgZGVzdHJveVxuICAgKiB0aGUgd2lkZ2V0XG4gICAqL1xuICBwcml2YXRlIG9uQ29tcGxldGUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuY29tcGxldGUuZW1pdChldmVudCk7XG4gICAgdGhpcy5kZXN0cm95V2lkZ2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgY3VycmVudCB3aWRnZXRcbiAgICovXG4gIHByaXZhdGUgZGVzdHJveVdpZGdldCgpIHtcbiAgICBpZiAodGhpcy53aWRnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53aWRnZXQuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLndpZGdldCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiPGlnby1keW5hbWljLW91dGxldFxuICAqbmdJZj1cIndpZGdldFwiXG4gIFtjb21wb25lbnRdPVwid2lkZ2V0XCJcbiAgW2lucHV0c109XCJpbnB1dHNcIlxuICBbc3Vic2NyaWJlcnNdPVwiZ2V0RWZmZWN0aXZlU3Vic2NyaWJlcnMoKVwiPlxuPC9pZ28tZHluYW1pYy1vdXRsZXQ+XG4iXX0=