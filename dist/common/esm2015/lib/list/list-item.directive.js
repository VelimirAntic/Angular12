import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class ListItemDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._color = 'primary';
        this._focused = false;
        this._selected = false;
        this._disabled = false;
        this.beforeSelect = new EventEmitter();
        this.beforeFocus = new EventEmitter();
        this.beforeUnselect = new EventEmitter();
        this.beforeUnfocus = new EventEmitter();
        this.beforeDisable = new EventEmitter();
        this.beforeEnable = new EventEmitter();
        this.focus = new EventEmitter();
        this.unfocus = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.disable = new EventEmitter();
        this.enable = new EventEmitter();
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get focused() {
        return this._focused;
    }
    set focused(value) {
        if (value === this._focused) {
            return;
        }
        if (this.disabled) {
            return;
        }
        value ? this.beforeFocus.emit(this) : this.beforeUnfocus.emit(this);
        this._focused = value;
        if (this.selected !== true) {
            this.toggleFocusedClass();
        }
        value ? this.focus.emit(this) : this.unfocus.emit(this);
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        if (value === this._selected) {
            return;
        }
        if (this.disabled) {
            return;
        }
        value ? this.beforeSelect.emit(this) : this.beforeUnselect.emit(this);
        this._selected = value;
        this._focused = value;
        this.toggleSelectedClass();
        value ? this.select.emit(this) : this.unselect.emit(this);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (value === this._disabled) {
            return;
        }
        if (value === true) {
            this.selected = false;
        }
        value ? this.beforeDisable.emit(this) : this.beforeEnable.emit(this);
        this._disabled = value;
        this.toggleDisabledClass();
        value ? this.disable.emit(this) : this.enable.emit(this);
    }
    onClick() {
        this.selected = true;
    }
    getOffsetTop() {
        const padding = 5;
        return this.el.nativeElement.offsetTop - padding;
    }
    toggleFocusedClass() {
        if (this.focused) {
            this.addCls(ListItemDirective.focusedCls);
        }
        else {
            this.removeCls(ListItemDirective.focusedCls);
        }
    }
    toggleSelectedClass() {
        if (this.selected) {
            this.addCls(ListItemDirective.selectedCls);
            this.removeCls(ListItemDirective.focusedCls);
        }
        else {
            this.removeCls(ListItemDirective.selectedCls);
        }
    }
    toggleDisabledClass() {
        if (this.disabled) {
            this.addCls(ListItemDirective.disabledCls);
        }
        else {
            this.removeCls(ListItemDirective.disabledCls);
        }
    }
    addCls(cls) {
        this.renderer.addClass(this.el.nativeElement, cls);
    }
    removeCls(cls) {
        this.renderer.removeClass(this.el.nativeElement, cls);
    }
}
ListItemDirective.focusedCls = 'igo-list-item-focused';
ListItemDirective.selectedCls = 'igo-list-item-selected';
ListItemDirective.disabledCls = 'igo-list-item-disabled';
ListItemDirective.ɵfac = function ListItemDirective_Factory(t) { return new (t || ListItemDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ListItemDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ListItemDirective, selectors: [["", "igoListItem", ""]], hostBindings: function ListItemDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ListItemDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { color: "color", focused: "focused", selected: "selected", disabled: "disabled" }, outputs: { beforeSelect: "beforeSelect", beforeFocus: "beforeFocus", beforeUnselect: "beforeUnselect", beforeUnfocus: "beforeUnfocus", beforeDisable: "beforeDisable", beforeEnable: "beforeEnable", focus: "focus", unfocus: "unfocus", select: "select", unselect: "unselect", disable: "disable", enable: "enable" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListItemDirective, [{
        type: Directive,
        args: [{
                selector: '[igoListItem]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { color: [{
            type: Input
        }], focused: [{
            type: Input
        }], selected: [{
            type: Input
        }], disabled: [{
            type: Input
        }], beforeSelect: [{
            type: Output
        }], beforeFocus: [{
            type: Output
        }], beforeUnselect: [{
            type: Output
        }], beforeUnfocus: [{
            type: Output
        }], beforeDisable: [{
            type: Output
        }], beforeEnable: [{
            type: Output
        }], focus: [{
            type: Output
        }], unfocus: [{
            type: Output
        }], select: [{
            type: Output
        }], unselect: [{
            type: Output
        }], disable: [{
            type: Output
        }], enable: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2xpc3QvbGlzdC1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBR04sWUFBWSxFQUNaLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQzs7QUFLdkIsTUFBTSxPQUFPLGlCQUFpQjtJQW9HNUIsWUFBbUIsUUFBbUIsRUFBUyxFQUFjO1FBQTFDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBdkZyRCxXQUFNLEdBQUcsU0FBUyxDQUFDO1FBdUJuQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBc0JqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBc0JsQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDckQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNwRCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ3ZELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDdEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUN0RCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ3JELFVBQUssR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUM5QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDaEQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQy9DLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNqRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDaEQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO0lBT08sQ0FBQztJQTlGakUsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFHRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMzQixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtRQUVELEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFHRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFM0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUdELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTNCLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFpQkQsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFJRCxZQUFZO1FBQ1YsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUNuRCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFTyxNQUFNLENBQUMsR0FBVztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sU0FBUyxDQUFDLEdBQVc7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7QUF6SU0sNEJBQVUsR0FBRyx1QkFBdUIsQ0FBQztBQUNyQyw2QkFBVyxHQUFHLHdCQUF3QixDQUFDO0FBQ3ZDLDZCQUFXLEdBQUcsd0JBQXdCLENBQUM7a0ZBSm5DLGlCQUFpQjtvRUFBakIsaUJBQWlCOzhGQUFqQixhQUFTOzt1RkFBVCxpQkFBaUI7Y0FIN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCO3FGQVFLLEtBQUs7a0JBRFIsS0FBSztZQVVGLE9BQU87a0JBRFYsS0FBSztZQXdCRixRQUFRO2tCQURYLEtBQUs7WUF1QkYsUUFBUTtrQkFEWCxLQUFLO1lBc0JJLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLEtBQUs7a0JBQWQsTUFBTTtZQUNHLE9BQU87a0JBQWhCLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUdQLE9BQU87a0JBRE4sWUFBWTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaWdvTGlzdEl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0SXRlbURpcmVjdGl2ZSB7XG5cbiAgc3RhdGljIGZvY3VzZWRDbHMgPSAnaWdvLWxpc3QtaXRlbS1mb2N1c2VkJztcbiAgc3RhdGljIHNlbGVjdGVkQ2xzID0gJ2lnby1saXN0LWl0ZW0tc2VsZWN0ZWQnO1xuICBzdGF0aWMgZGlzYWJsZWRDbHMgPSAnaWdvLWxpc3QtaXRlbS1kaXNhYmxlZCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sb3IgPSAncHJpbWFyeSc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cbiAgc2V0IGZvY3VzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX2ZvY3VzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZSA/IHRoaXMuYmVmb3JlRm9jdXMuZW1pdCh0aGlzKSA6IHRoaXMuYmVmb3JlVW5mb2N1cy5lbWl0KHRoaXMpO1xuXG4gICAgdGhpcy5fZm9jdXNlZCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkICE9PSB0cnVlKSB7XG4gICAgICB0aGlzLnRvZ2dsZUZvY3VzZWRDbGFzcygpO1xuICAgIH1cblxuICAgIHZhbHVlID8gdGhpcy5mb2N1cy5lbWl0KHRoaXMpIDogdGhpcy51bmZvY3VzLmVtaXQodGhpcyk7XG4gIH1cbiAgcHJpdmF0ZSBfZm9jdXNlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbHVlID8gdGhpcy5iZWZvcmVTZWxlY3QuZW1pdCh0aGlzKSA6IHRoaXMuYmVmb3JlVW5zZWxlY3QuZW1pdCh0aGlzKTtcblxuICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5fZm9jdXNlZCA9IHZhbHVlO1xuICAgIHRoaXMudG9nZ2xlU2VsZWN0ZWRDbGFzcygpO1xuXG4gICAgdmFsdWUgPyB0aGlzLnNlbGVjdC5lbWl0KHRoaXMpIDogdGhpcy51bnNlbGVjdC5lbWl0KHRoaXMpO1xuICB9XG4gIHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFsdWUgPyB0aGlzLmJlZm9yZURpc2FibGUuZW1pdCh0aGlzKSA6IHRoaXMuYmVmb3JlRW5hYmxlLmVtaXQodGhpcyk7XG5cbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMudG9nZ2xlRGlzYWJsZWRDbGFzcygpO1xuXG4gICAgdmFsdWUgPyB0aGlzLmRpc2FibGUuZW1pdCh0aGlzKSA6IHRoaXMuZW5hYmxlLmVtaXQodGhpcyk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgYmVmb3JlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbURpcmVjdGl2ZT4oKTtcbiAgQE91dHB1dCgpIGJlZm9yZUZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbURpcmVjdGl2ZT4oKTtcbiAgQE91dHB1dCgpIGJlZm9yZVVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbURpcmVjdGl2ZT4oKTtcbiAgQE91dHB1dCgpIGJlZm9yZVVuZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtRGlyZWN0aXZlPigpO1xuICBAT3V0cHV0KCkgYmVmb3JlRGlzYWJsZSA9IG5ldyBFdmVudEVtaXR0ZXI8TGlzdEl0ZW1EaXJlY3RpdmU+KCk7XG4gIEBPdXRwdXQoKSBiZWZvcmVFbmFibGUgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtRGlyZWN0aXZlPigpO1xuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtRGlyZWN0aXZlPigpO1xuICBAT3V0cHV0KCkgdW5mb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8TGlzdEl0ZW1EaXJlY3RpdmU+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtRGlyZWN0aXZlPigpO1xuICBAT3V0cHV0KCkgdW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtRGlyZWN0aXZlPigpO1xuICBAT3V0cHV0KCkgZGlzYWJsZSA9IG5ldyBFdmVudEVtaXR0ZXI8TGlzdEl0ZW1EaXJlY3RpdmU+KCk7XG4gIEBPdXRwdXQoKSBlbmFibGUgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtRGlyZWN0aXZlPigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgZ2V0T2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgY29uc3QgcGFkZGluZyA9IDU7XG5cbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIHBhZGRpbmc7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUZvY3VzZWRDbGFzcygpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkKSB7XG4gICAgICB0aGlzLmFkZENscyhMaXN0SXRlbURpcmVjdGl2ZS5mb2N1c2VkQ2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVDbHMoTGlzdEl0ZW1EaXJlY3RpdmUuZm9jdXNlZENscyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVTZWxlY3RlZENsYXNzKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmFkZENscyhMaXN0SXRlbURpcmVjdGl2ZS5zZWxlY3RlZENscyk7XG4gICAgICB0aGlzLnJlbW92ZUNscyhMaXN0SXRlbURpcmVjdGl2ZS5mb2N1c2VkQ2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVDbHMoTGlzdEl0ZW1EaXJlY3RpdmUuc2VsZWN0ZWRDbHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlRGlzYWJsZWRDbGFzcygpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRDbHMoTGlzdEl0ZW1EaXJlY3RpdmUuZGlzYWJsZWRDbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUNscyhMaXN0SXRlbURpcmVjdGl2ZS5kaXNhYmxlZENscyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbHMoY2xzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xzKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQ2xzKGNsczogc3RyaW5nKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNscyk7XG4gIH1cbn1cbiJdfQ==