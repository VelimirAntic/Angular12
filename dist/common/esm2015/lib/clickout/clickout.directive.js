import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class ClickoutDirective {
    constructor(el) {
        this.el = el;
        this.clickout = new EventEmitter();
    }
    handleMouseClick(event, target) {
        if (!target) {
            return;
        }
        if (!this.el.nativeElement.contains(target)) {
            this.clickout.emit(event);
        }
    }
}
ClickoutDirective.ɵfac = function ClickoutDirective_Factory(t) { return new (t || ClickoutDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ClickoutDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickoutDirective, selectors: [["", "igoClickout", ""]], hostBindings: function ClickoutDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ClickoutDirective_click_HostBindingHandler($event) { return ctx.handleMouseClick($event, $event.target); }, false, i0.ɵɵresolveDocument);
    } }, outputs: { clickout: "clickout" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickoutDirective, [{
        type: Directive,
        args: [{
                selector: '[igoClickout]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { clickout: [{
            type: Output
        }], handleMouseClick: [{
            type: HostListener,
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tvdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY2xpY2tvdXQvY2xpY2tvdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7O0FBS3ZCLE1BQU0sT0FBTyxpQkFBaUI7SUFjNUIsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFieEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFhZixDQUFDO0lBVnRDLGdCQUFnQixDQUFDLEtBQWlCLEVBQUUsTUFBbUI7UUFDckQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOztrRkFaVSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtvR0FBakIsMkNBQ0s7O3VGQURMLGlCQUFpQjtjQUg3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7NkRBRVcsUUFBUTtrQkFBakIsTUFBTTtZQUdQLGdCQUFnQjtrQkFEZixZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lnb0NsaWNrb3V0XSdcbn0pXG5leHBvcnQgY2xhc3MgQ2xpY2tvdXREaXJlY3RpdmUge1xuICBAT3V0cHV0KCkgY2xpY2tvdXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCcsICckZXZlbnQudGFyZ2V0J10pXG4gIGhhbmRsZU1vdXNlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIHRhcmdldDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2xpY2tvdXQuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cbn1cbiJdfQ==