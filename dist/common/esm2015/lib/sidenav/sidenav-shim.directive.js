import { Directive, Self, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/**
 * <igoSidenavShim> directive.
 *
 * This directive prevents a material sidenav with mode="side"
 * from focusing an element after it's closed
 */
export class SidenavShimDirective {
    constructor(component, renderer) {
        this.renderer = renderer;
    }
    onOpen() {
        this.focusedElement = document.activeElement;
    }
    onCloseStart() {
        const focusedElement = document.activeElement;
        if (focusedElement !== this.focusedElement) {
            this.blurElement = this.focusedElement;
        }
        else {
            this.blurElement = undefined;
        }
    }
    onClose() {
        if (this.blurElement) {
            this.renderer.selectRootElement(this.blurElement).blur();
        }
        this.blurElement = undefined;
        this.focusedElement = undefined;
    }
}
SidenavShimDirective.ɵfac = function SidenavShimDirective_Factory(t) { return new (t || SidenavShimDirective)(i0.ɵɵdirectiveInject(i1.MatSidenav, 2), i0.ɵɵdirectiveInject(i0.Renderer2)); };
SidenavShimDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SidenavShimDirective, selectors: [["", "igoSidenavShim", ""]], hostBindings: function SidenavShimDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("open", function SidenavShimDirective_open_HostBindingHandler($event) { return ctx.onOpen($event); })("close-start", function SidenavShimDirective_close_start_HostBindingHandler($event) { return ctx.onCloseStart($event); })("close", function SidenavShimDirective_close_HostBindingHandler($event) { return ctx.onClose($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavShimDirective, [{
        type: Directive,
        args: [{
                selector: '[igoSidenavShim]'
            }]
    }], function () { return [{ type: i1.MatSidenav, decorators: [{
                type: Self
            }] }, { type: i0.Renderer2 }]; }, { onOpen: [{
            type: HostListener,
            args: ['open', ['$event']]
        }], onCloseStart: [{
            type: HostListener,
            args: ['close-start', ['$event']]
        }], onClose: [{
            type: HostListener,
            args: ['close', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1zaGltLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL3NpZGVuYXYvc2lkZW5hdi1zaGltLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQUd6RTs7Ozs7R0FLRztBQUlILE1BQU0sT0FBTyxvQkFBb0I7SUE2Qi9CLFlBQW9CLFNBQXFCLEVBQVUsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUFHLENBQUM7SUF4QjFFLE1BQU07UUFDSixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUE0QixDQUFDO0lBQzlELENBQUM7SUFHRCxZQUFZO1FBQ1YsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQTRCLENBQUM7UUFDN0QsSUFBSSxjQUFjLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUdELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUQ7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDOzt3RkEzQlUsb0JBQW9CO3VFQUFwQixvQkFBb0I7cUdBQXBCLGtCQUFjLGtHQUFkLHdCQUFvQixzRkFBcEIsbUJBQWU7O3VGQUFmLG9CQUFvQjtjQUhoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7c0JBOEJjLElBQUk7Z0RBeEJqQixNQUFNO2tCQURMLFlBQVk7bUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBTWhDLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFXdkMsT0FBTztrQkFETixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgU2VsZiwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuLyoqXG4gKiA8aWdvU2lkZW5hdlNoaW0+IGRpcmVjdGl2ZS5cbiAqXG4gKiBUaGlzIGRpcmVjdGl2ZSBwcmV2ZW50cyBhIG1hdGVyaWFsIHNpZGVuYXYgd2l0aCBtb2RlPVwic2lkZVwiXG4gKiBmcm9tIGZvY3VzaW5nIGFuIGVsZW1lbnQgYWZ0ZXIgaXQncyBjbG9zZWRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lnb1NpZGVuYXZTaGltXSdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdlNoaW1EaXJlY3RpdmUge1xuICBwcml2YXRlIGZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBibHVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgQEhvc3RMaXN0ZW5lcignb3BlbicsIFsnJGV2ZW50J10pXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLmZvY3VzZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Nsb3NlLXN0YXJ0JywgWyckZXZlbnQnXSlcbiAgb25DbG9zZVN0YXJ0KCkge1xuICAgIGNvbnN0IGZvY3VzZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoZm9jdXNlZEVsZW1lbnQgIT09IHRoaXMuZm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuYmx1ckVsZW1lbnQgPSB0aGlzLmZvY3VzZWRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsdXJFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Nsb3NlJywgWyckZXZlbnQnXSlcbiAgb25DbG9zZSgpIHtcbiAgICBpZiAodGhpcy5ibHVyRWxlbWVudCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZWxlY3RSb290RWxlbWVudCh0aGlzLmJsdXJFbGVtZW50KS5ibHVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ibHVyRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZvY3VzZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQFNlbGYoKSBjb21wb25lbnQ6IE1hdFNpZGVuYXYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cbn1cbiJdfQ==