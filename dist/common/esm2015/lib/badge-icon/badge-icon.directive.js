import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
/**
 * This directive allow to add an icon inside a matBadge.
 * A value must be set into the matBadge directive ex: matBadge="icon".
 * The badge content will be overrided by this current directive.
 */
export class IgoBadgeIconDirective {
    constructor(el, matIconRegistry) {
        this.el = el;
        this.matIconRegistry = matIconRegistry;
        this.hidden = false;
        this.disabled = false;
        this.inverseColor = false;
        this.inheritColor = false;
    }
    set igoMatBadgeIcon(value) {
        this.matIconRegistry.getNamedSvgIcon(value).subscribe((svgObj) => {
            this.svg = svgObj;
            this.updateSvg();
        });
    }
    set matBadgeHidden(value) {
        this.hidden = value;
        this.updateHidden();
    }
    set matBadgeDisabled(value) {
        this.disabled = value;
        this.updateDisabled();
    }
    set igoMatBadgeInverseColor(value) {
        this.inverseColor = value;
        this.updateColor();
    }
    set igoMatBadgeInheritColor(value) {
        this.inheritColor = value;
        this.updateColor();
    }
    get badge() {
        return this.el.nativeElement.querySelector('.mat-badge-content');
    }
    ngOnInit() {
        this.badge.style.alignItems = 'center';
        this.badge.style.justifyContent = 'center';
        this.updateHidden();
        this.updateColor();
        this.updateSvg();
    }
    updateSvg() {
        if (!this.badge) {
            return;
        }
        this.badge.innerHTML = '';
        if (this.svg) {
            this.badge.appendChild(this.svg);
        }
    }
    updateColor() {
        if (!this.badge) {
            return;
        }
        if (this.inheritColor) {
            if (this.inverseColor) {
                this.badge.style.color = 'currentColor';
                this.badge.style.background = 'none';
            }
            else {
                this.badge.style.color = '';
                this.badge.style.background = 'currentColor';
            }
        }
        else {
            if (this.inverseColor) {
                this.badge.style.color = window
                    .getComputedStyle(this.badge, null)
                    .getPropertyValue('background-color');
                this.badge.style.background = 'none';
            }
            else {
                this.badge.style.color = '';
                this.badge.style.background = '';
            }
        }
        this.originalColor = this.badge.style.color;
        this.updateDisabled();
    }
    updateHidden() {
        if (!this.badge) {
            return;
        }
        this.badge.style.display = this.hidden ? 'none' : 'flex';
    }
    updateDisabled() {
        if (!this.badge || !this.inverseColor) {
            return;
        }
        if (this.disabled) {
            this.originalColor = this.badge.style.color;
            this.badge.style.color = '#b9b9b9';
        }
        else {
            this.badge.style.color = this.originalColor;
        }
    }
}
IgoBadgeIconDirective.ɵfac = function IgoBadgeIconDirective_Factory(t) { return new (t || IgoBadgeIconDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.MatIconRegistry)); };
IgoBadgeIconDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: IgoBadgeIconDirective, selectors: [["", "igoMatBadgeIcon", ""]], inputs: { igoMatBadgeIcon: "igoMatBadgeIcon", matBadgeHidden: "matBadgeHidden", matBadgeDisabled: "matBadgeDisabled", igoMatBadgeInverseColor: "igoMatBadgeInverseColor", igoMatBadgeInheritColor: "igoMatBadgeInheritColor" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoBadgeIconDirective, [{
        type: Directive,
        args: [{
                selector: '[igoMatBadgeIcon]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.MatIconRegistry }]; }, { igoMatBadgeIcon: [{
            type: Input
        }], matBadgeHidden: [{
            type: Input
        }], matBadgeDisabled: [{
            type: Input
        }], igoMatBadgeInverseColor: [{
            type: Input
        }], igoMatBadgeInheritColor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UtaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9iYWRnZS1pY29uL2JhZGdlLWljb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFzQixNQUFNLGVBQWUsQ0FBQzs7O0FBSXJFOzs7O0dBSUc7QUFJSCxNQUFNLE9BQU8scUJBQXFCO0lBNENoQyxZQUNVLEVBQWMsRUFDZCxlQUFnQztRQURoQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBL0JsQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBT2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQU9qQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQU9yQixpQkFBWSxHQUFHLEtBQUssQ0FBQztJQVcxQixDQUFDO0lBOUNKLElBQ0ksZUFBZSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDL0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELElBQ0ksY0FBYyxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFHRCxJQUNJLGdCQUFnQixDQUFDLEtBQWM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHRCxJQUNJLHVCQUF1QixDQUFDLEtBQWM7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHRCxJQUNJLHVCQUF1QixDQUFDLEtBQWM7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBRTNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUNPLFdBQVc7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7YUFDOUM7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTTtxQkFDNUIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7cUJBQ2xDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7YUFDdEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzthQUNsQztTQUNGO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzNELENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDN0M7SUFDSCxDQUFDOzswRkFoSFUscUJBQXFCO3dFQUFyQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQUhqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5QjsyRkFHSyxlQUFlO2tCQURsQixLQUFLO1lBVUYsY0FBYztrQkFEakIsS0FBSztZQVFGLGdCQUFnQjtrQkFEbkIsS0FBSztZQVFGLHVCQUF1QjtrQkFEMUIsS0FBSztZQVFGLHVCQUF1QjtrQkFEMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0SWNvblJlZ2lzdHJ5IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBhbGxvdyB0byBhZGQgYW4gaWNvbiBpbnNpZGUgYSBtYXRCYWRnZS5cbiAqIEEgdmFsdWUgbXVzdCBiZSBzZXQgaW50byB0aGUgbWF0QmFkZ2UgZGlyZWN0aXZlIGV4OiBtYXRCYWRnZT1cImljb25cIi5cbiAqIFRoZSBiYWRnZSBjb250ZW50IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5IHRoaXMgY3VycmVudCBkaXJlY3RpdmUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpZ29NYXRCYWRnZUljb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ29CYWRnZUljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBzZXQgaWdvTWF0QmFkZ2VJY29uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1hdEljb25SZWdpc3RyeS5nZXROYW1lZFN2Z0ljb24odmFsdWUpLnN1YnNjcmliZSgoc3ZnT2JqKSA9PiB7XG4gICAgICB0aGlzLnN2ZyA9IHN2Z09iajtcbiAgICAgIHRoaXMudXBkYXRlU3ZnKCk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBzdmc6IFNWR0VsZW1lbnQ7XG5cbiAgQElucHV0KClcbiAgc2V0IG1hdEJhZGdlSGlkZGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5oaWRkZW4gPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUhpZGRlbigpO1xuICB9XG4gIHByaXZhdGUgaGlkZGVuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG1hdEJhZGdlRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZCgpO1xuICB9XG4gIHByaXZhdGUgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgaWdvTWF0QmFkZ2VJbnZlcnNlQ29sb3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmludmVyc2VDb2xvciA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29sb3IoKTtcbiAgfVxuICBwcml2YXRlIGludmVyc2VDb2xvciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpZ29NYXRCYWRnZUluaGVyaXRDb2xvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaW5oZXJpdENvbG9yID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb2xvcigpO1xuICB9XG4gIHByaXZhdGUgaW5oZXJpdENvbG9yID0gZmFsc2U7XG5cbiAgZ2V0IGJhZGdlKCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hdC1iYWRnZS1jb250ZW50Jyk7XG4gIH1cblxuICBwcml2YXRlIG9yaWdpbmFsQ29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgbWF0SWNvblJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnlcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmFkZ2Uuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgIHRoaXMuYmFkZ2Uuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcblxuICAgIHRoaXMudXBkYXRlSGlkZGVuKCk7XG4gICAgdGhpcy51cGRhdGVDb2xvcigpO1xuICAgIHRoaXMudXBkYXRlU3ZnKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN2ZygpIHtcbiAgICBpZiAoIXRoaXMuYmFkZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5iYWRnZS5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAodGhpcy5zdmcpIHtcbiAgICAgIHRoaXMuYmFkZ2UuYXBwZW5kQ2hpbGQodGhpcy5zdmcpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHVwZGF0ZUNvbG9yKCkge1xuICAgIGlmICghdGhpcy5iYWRnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluaGVyaXRDb2xvcikge1xuICAgICAgaWYgKHRoaXMuaW52ZXJzZUNvbG9yKSB7XG4gICAgICAgIHRoaXMuYmFkZ2Uuc3R5bGUuY29sb3IgPSAnY3VycmVudENvbG9yJztcbiAgICAgICAgdGhpcy5iYWRnZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5iYWRnZS5zdHlsZS5jb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJhZGdlLnN0eWxlLmJhY2tncm91bmQgPSAnY3VycmVudENvbG9yJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaW52ZXJzZUNvbG9yKSB7XG4gICAgICAgIHRoaXMuYmFkZ2Uuc3R5bGUuY29sb3IgPSB3aW5kb3dcbiAgICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmJhZGdlLCBudWxsKVxuICAgICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgICAgIHRoaXMuYmFkZ2Uuc3R5bGUuYmFja2dyb3VuZCA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmFkZ2Uuc3R5bGUuY29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5iYWRnZS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub3JpZ2luYWxDb2xvciA9IHRoaXMuYmFkZ2Uuc3R5bGUuY29sb3I7XG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVIaWRkZW4oKSB7XG4gICAgaWYgKCF0aGlzLmJhZGdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmFkZ2Uuc3R5bGUuZGlzcGxheSA9IHRoaXMuaGlkZGVuID8gJ25vbmUnIDogJ2ZsZXgnO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEaXNhYmxlZCgpIHtcbiAgICBpZiAoIXRoaXMuYmFkZ2UgfHwgIXRoaXMuaW52ZXJzZUNvbG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm9yaWdpbmFsQ29sb3IgPSB0aGlzLmJhZGdlLnN0eWxlLmNvbG9yO1xuICAgICAgdGhpcy5iYWRnZS5zdHlsZS5jb2xvciA9ICcjYjliOWI5JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iYWRnZS5zdHlsZS5jb2xvciA9IHRoaXMub3JpZ2luYWxDb2xvcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==