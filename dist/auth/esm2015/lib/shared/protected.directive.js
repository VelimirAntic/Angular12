import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
export class ProtectedDirective {
    constructor(authentication, el) {
        if (!authentication.isAuthenticated()) {
            el.nativeElement.parentNode.removeChild(el.nativeElement);
        }
    }
}
ProtectedDirective.ɵfac = function ProtectedDirective_Factory(t) { return new (t || ProtectedDirective)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ProtectedDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ProtectedDirective, selectors: [["", "igoProtected", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProtectedDirective, [{
        type: Directive,
        args: [{
                selector: '[igoProtected]'
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL2xpYi9zaGFyZWQvcHJvdGVjdGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7QUFNdEQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUFZLGNBQTJCLEVBQUUsRUFBYztRQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ3JDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOztvRkFMVSxrQkFBa0I7cUVBQWxCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBSDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lnb1Byb3RlY3RlZF0nXG59KVxuZXhwb3J0IGNsYXNzIFByb3RlY3RlZERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKGF1dGhlbnRpY2F0aW9uOiBBdXRoU2VydmljZSwgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoIWF1dGhlbnRpY2F0aW9uLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICBlbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=