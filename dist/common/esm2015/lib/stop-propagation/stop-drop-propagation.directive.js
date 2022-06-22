import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class StopDropPropagationDirective {
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
StopDropPropagationDirective.ɵfac = function StopDropPropagationDirective_Factory(t) { return new (t || StopDropPropagationDirective)(); };
StopDropPropagationDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StopDropPropagationDirective, selectors: [["", "igoStopDropPropagation", ""]], hostBindings: function StopDropPropagationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("drop", function StopDropPropagationDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StopDropPropagationDirective, [{
        type: Directive,
        args: [{
                selector: '[igoStopDropPropagation]'
            }]
    }], null, { onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC1kcm9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL3N0b3AtcHJvcGFnYXRpb24vc3RvcC1kcm9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLeEQsTUFBTSxPQUFPLDRCQUE0QjtJQUVoQyxNQUFNLENBQUMsS0FBVTtRQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7O3dHQUxVLDRCQUE0QjsrRUFBNUIsNEJBQTRCOzZHQUE1QixrQkFBYzs7dUZBQWQsNEJBQTRCO2NBSHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2FBQ3JDO2dCQUdRLE1BQU07a0JBRFosWUFBWTttQkFBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaWdvU3RvcERyb3BQcm9wYWdhdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFN0b3BEcm9wUHJvcGFnYXRpb25EaXJlY3RpdmUge1xuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJvcChldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19