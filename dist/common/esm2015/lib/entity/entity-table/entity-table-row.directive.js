import { Directive, Input, EventEmitter, Output, HostListener } from '@angular/core';
import scrollIntoView from 'scroll-into-view-if-needed';
import { EntityTableScrollBehavior } from '../shared/entity.enums';
import * as i0 from "@angular/core";
/**
 * Directive that handles an entity table row click and selection.
 */
export class EntityTableRowDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        /**
         * Whether a row supports selection
         */
        this.selection = false;
        /**
         * Whether clicking a row should select it (if selection is true)
         */
        this.selectOnClick = true;
        /**
         * Whether the selected row should be highlighted
         */
        this.highlightSelection = true;
        this._selected = false;
        /**
         * Scroll behavior on selection
         */
        this.scrollBehavior = EntityTableScrollBehavior.Auto;
        /**
         * Event emitted when a row is selected
         */
        this.select = new EventEmitter();
    }
    /**
     * Whether a row is selected
     */
    set selected(value) {
        if (this.selection === false) {
            return;
        }
        if (value === this._selected) {
            return;
        }
        this.toggleSelected(value);
        this.scroll();
    }
    get selected() {
        return this._selected;
    }
    /**
     * When a row is clicked, select it if it's supported
     * @ignore
     */
    onClick() {
        if (this.selection === false || this.selectOnClick === false) {
            return;
        }
        this.toggleSelected(true);
        this.select.emit(this);
    }
    /**
     * Select a row and add or remove the selected class from it
     * @param selected Whether the row should be selected
     */
    toggleSelected(selected) {
        this._selected = selected;
        if (selected === true) {
            this.addCls(EntityTableRowDirective.selectedCls);
            if (this.highlightSelection === true) {
                this.addCls(EntityTableRowDirective.highlightedCls);
            }
        }
        else {
            this.removeCls(EntityTableRowDirective.selectedCls);
            this.removeCls(EntityTableRowDirective.highlightedCls);
        }
    }
    /**
     * Scroll to the selected row
     */
    scroll() {
        if (this._selected === true) {
            scrollIntoView(this.el.nativeElement, {
                scrollMode: 'if-needed',
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            });
        }
    }
    /**
     * Add the selected CSS class
     */
    addCls(cls) {
        this.renderer.addClass(this.el.nativeElement, cls);
    }
    /**
     * Remove the selected CSS class
     */
    removeCls(cls) {
        this.renderer.removeClass(this.el.nativeElement, cls);
    }
}
/**
 * Class added to a selected row
 */
EntityTableRowDirective.selectedCls = 'igo-entity-table-row-selected';
/**
 * Class added to a highlighted row
 */
EntityTableRowDirective.highlightedCls = 'igo-entity-table-row-highlighted';
EntityTableRowDirective.ɵfac = function EntityTableRowDirective_Factory(t) { return new (t || EntityTableRowDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
EntityTableRowDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: EntityTableRowDirective, selectors: [["", "igoEntityTableRow", ""]], hostBindings: function EntityTableRowDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function EntityTableRowDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { selection: "selection", selectOnClick: "selectOnClick", highlightSelection: "highlightSelection", selected: "selected", scrollBehavior: "scrollBehavior" }, outputs: { select: "select" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntityTableRowDirective, [{
        type: Directive,
        args: [{
                selector: '[igoEntityTableRow]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { selection: [{
            type: Input
        }], selectOnClick: [{
            type: Input
        }], highlightSelection: [{
            type: Input
        }], selected: [{
            type: Input
        }], scrollBehavior: [{
            type: Input
        }], select: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXRhYmxlLXJvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9lbnRpdHkvZW50aXR5LXRhYmxlL2VudGl0eS10YWJsZS1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sY0FBYyxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUVuRTs7R0FFRztBQUlILE1BQU0sT0FBTyx1QkFBdUI7SUFvRWxDLFlBQW9CLFFBQW1CLEVBQVUsRUFBYztRQUEzQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQXhEL0Q7O1dBRUc7UUFDTSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTNCOztXQUVHO1FBQ00sa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFFdkM7O1dBRUc7UUFDTSx1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFnQnBDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFMUI7O1dBRUc7UUFFSCxtQkFBYyxHQUE4Qix5QkFBeUIsQ0FBQyxJQUFJLENBQUM7UUFFM0U7O1dBRUc7UUFDTyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7SUFnQkcsQ0FBQztJQXpDbkU7O09BRUc7SUFDSCxJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDekMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV6QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFjRDs7O09BR0c7SUFFSCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtZQUM1RCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFJRDs7O09BR0c7SUFDSyxjQUFjLENBQUMsUUFBaUI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU07UUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzNCLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtnQkFDcEMsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsS0FBSztnQkFDWixNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU0sQ0FBQyxHQUFXO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNLLFNBQVMsQ0FBQyxHQUFXO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O0FBL0dEOztHQUVHO0FBQ0ksbUNBQVcsR0FBRywrQkFBK0IsQ0FBQztBQUVyRDs7R0FFRztBQUNJLHNDQUFjLEdBQUcsa0NBQWtDLENBQUM7OEZBVmhELHVCQUF1QjswRUFBdkIsdUJBQXVCO29HQUF2QixhQUFTOzt1RkFBVCx1QkFBdUI7Y0FIbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7cUZBZ0JVLFNBQVM7a0JBQWpCLEtBQUs7WUFLRyxhQUFhO2tCQUFyQixLQUFLO1lBS0csa0JBQWtCO2tCQUExQixLQUFLO1lBTUYsUUFBUTtrQkFEWCxLQUFLO1lBaUJOLGNBQWM7a0JBRGIsS0FBSztZQU1JLE1BQU07a0JBQWYsTUFBTTtZQU9QLE9BQU87a0JBRE4sWUFBWTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgc2Nyb2xsSW50b1ZpZXcgZnJvbSAnc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQnO1xuXG5pbXBvcnQgeyBFbnRpdHlUYWJsZVNjcm9sbEJlaGF2aW9yIH0gZnJvbSAnLi4vc2hhcmVkL2VudGl0eS5lbnVtcyc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgaGFuZGxlcyBhbiBlbnRpdHkgdGFibGUgcm93IGNsaWNrIGFuZCBzZWxlY3Rpb24uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpZ29FbnRpdHlUYWJsZVJvd10nXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVRhYmxlUm93RGlyZWN0aXZlIHtcblxuICAvKipcbiAgICogQ2xhc3MgYWRkZWQgdG8gYSBzZWxlY3RlZCByb3dcbiAgICovXG4gIHN0YXRpYyBzZWxlY3RlZENscyA9ICdpZ28tZW50aXR5LXRhYmxlLXJvdy1zZWxlY3RlZCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGFkZGVkIHRvIGEgaGlnaGxpZ2h0ZWQgcm93XG4gICAqL1xuICBzdGF0aWMgaGlnaGxpZ2h0ZWRDbHMgPSAnaWdvLWVudGl0eS10YWJsZS1yb3ctaGlnaGxpZ2h0ZWQnO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGEgcm93IHN1cHBvcnRzIHNlbGVjdGlvblxuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0aW9uID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgY2xpY2tpbmcgYSByb3cgc2hvdWxkIHNlbGVjdCBpdCAoaWYgc2VsZWN0aW9uIGlzIHRydWUpXG4gICAqL1xuICBASW5wdXQoKSBzZWxlY3RPbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc2VsZWN0ZWQgcm93IHNob3VsZCBiZSBoaWdobGlnaHRlZFxuICAgKi9cbiAgQElucHV0KCkgaGlnaGxpZ2h0U2VsZWN0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciBhIHJvdyBpcyBzZWxlY3RlZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uID09PSBmYWxzZSkgeyByZXR1cm47IH1cbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3NlbGVjdGVkKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy50b2dnbGVTZWxlY3RlZCh2YWx1ZSk7XG4gICAgdGhpcy5zY3JvbGwoKTtcbiAgfVxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG4gIHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNjcm9sbCBiZWhhdmlvciBvbiBzZWxlY3Rpb25cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNjcm9sbEJlaGF2aW9yOiBFbnRpdHlUYWJsZVNjcm9sbEJlaGF2aW9yID0gRW50aXR5VGFibGVTY3JvbGxCZWhhdmlvci5BdXRvO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByb3cgaXMgc2VsZWN0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPEVudGl0eVRhYmxlUm93RGlyZWN0aXZlPigpO1xuXG4gIC8qKlxuICAgKiBXaGVuIGEgcm93IGlzIGNsaWNrZWQsIHNlbGVjdCBpdCBpZiBpdCdzIHN1cHBvcnRlZFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uID09PSBmYWxzZSB8fCB0aGlzLnNlbGVjdE9uQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGVTZWxlY3RlZCh0cnVlKTtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgYSByb3cgYW5kIGFkZCBvciByZW1vdmUgdGhlIHNlbGVjdGVkIGNsYXNzIGZyb20gaXRcbiAgICogQHBhcmFtIHNlbGVjdGVkIFdoZXRoZXIgdGhlIHJvdyBzaG91bGQgYmUgc2VsZWN0ZWRcbiAgICovXG4gIHByaXZhdGUgdG9nZ2xlU2VsZWN0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIGlmIChzZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRDbHMoRW50aXR5VGFibGVSb3dEaXJlY3RpdmUuc2VsZWN0ZWRDbHMpO1xuICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0U2VsZWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYWRkQ2xzKEVudGl0eVRhYmxlUm93RGlyZWN0aXZlLmhpZ2hsaWdodGVkQ2xzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVDbHMoRW50aXR5VGFibGVSb3dEaXJlY3RpdmUuc2VsZWN0ZWRDbHMpO1xuICAgICAgdGhpcy5yZW1vdmVDbHMoRW50aXR5VGFibGVSb3dEaXJlY3RpdmUuaGlnaGxpZ2h0ZWRDbHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gdGhlIHNlbGVjdGVkIHJvd1xuICAgKi9cbiAgcHJpdmF0ZSBzY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICBzY3JvbGxJbnRvVmlldyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgc2Nyb2xsTW9kZTogJ2lmLW5lZWRlZCcsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgYmxvY2s6ICdlbmQnLFxuICAgICAgICBpbmxpbmU6ICduZWFyZXN0J1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgc2VsZWN0ZWQgQ1NTIGNsYXNzXG4gICAqL1xuICBwcml2YXRlIGFkZENscyhjbHM6IHN0cmluZykge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc2VsZWN0ZWQgQ1NTIGNsYXNzXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZUNscyhjbHM6IHN0cmluZykge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICB9XG59XG4iXX0=