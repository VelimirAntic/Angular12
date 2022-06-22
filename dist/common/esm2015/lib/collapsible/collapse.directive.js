import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class CollapseDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._collapsed = false;
        this.toggle = new EventEmitter();
    }
    get target() {
        return this._target;
    }
    set target(value) {
        this._target = value;
    }
    get collapsed() {
        return this._collapsed;
    }
    set collapsed(collapsed) {
        collapsed ? this.collapseTarget() : this.expandTarget();
        this._collapsed = collapsed;
        this.toggle.emit(collapsed);
    }
    click() {
        this.collapsed = !this.collapsed;
    }
    collapseTarget() {
        this.renderer.addClass(this.target, 'igo-collapsed');
        this.renderer.addClass(this.el.nativeElement, 'collapsed');
    }
    expandTarget() {
        this.renderer.removeClass(this.target, 'igo-collapsed');
        this.renderer.removeClass(this.el.nativeElement, 'collapsed');
    }
}
CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
CollapseDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CollapseDirective, selectors: [["", "igoCollapse", ""]], hostBindings: function CollapseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CollapseDirective_click_HostBindingHandler() { return ctx.click(); });
    } }, inputs: { target: "target", collapsed: "collapsed" }, outputs: { toggle: "toggle" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseDirective, [{
        type: Directive,
        args: [{
                selector: '[igoCollapse]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { target: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], toggle: [{
            type: Output
        }], click: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY29sbGFwc2libGUvY29sbGFwc2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDOztBQUt2QixNQUFNLE9BQU8saUJBQWlCO0lBNEI1QixZQUFvQixRQUFtQixFQUFVLEVBQWM7UUFBM0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFUdkQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVqQixXQUFNLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFPSyxDQUFDO0lBM0JuRSxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUdELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsU0FBa0I7UUFDOUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBTUQsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFJTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRSxDQUFDOztrRkF0Q1UsaUJBQWlCO29FQUFqQixpQkFBaUI7OEZBQWpCLFdBQU87O3VGQUFQLGlCQUFpQjtjQUg3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7cUZBR0ssTUFBTTtrQkFEVCxLQUFLO1lBVUYsU0FBUztrQkFEWixLQUFLO1lBV0ksTUFBTTtrQkFBZixNQUFNO1lBR1AsS0FBSztrQkFESixZQUFZO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpZ29Db2xsYXBzZV0nXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIHtcbiAgQElucHV0KClcbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQodmFsdWU6IEVsZW1lbnQpIHtcbiAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF90YXJnZXQ6IEVsZW1lbnQ7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY29sbGFwc2VkO1xuICB9XG4gIHNldCBjb2xsYXBzZWQoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgY29sbGFwc2VkID8gdGhpcy5jb2xsYXBzZVRhcmdldCgpIDogdGhpcy5leHBhbmRUYXJnZXQoKTtcbiAgICB0aGlzLl9jb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgdGhpcy50b2dnbGUuZW1pdChjb2xsYXBzZWQpO1xuICB9XG4gIHByaXZhdGUgX2NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIHByaXZhdGUgY29sbGFwc2VUYXJnZXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhcmdldCwgJ2lnby1jb2xsYXBzZWQnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2NvbGxhcHNlZCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHBhbmRUYXJnZXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnRhcmdldCwgJ2lnby1jb2xsYXBzZWQnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2NvbGxhcHNlZCcpO1xuICB9XG59XG4iXX0=