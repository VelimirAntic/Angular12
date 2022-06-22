import { Directive, Self } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./spinner.component";
import * as i2 from "@igo2/core";
/**
 * A directive to bind a SpinnerComponent to the activity service.
 * The activity service tracks any HTTP request and this directive
 * will display the spinner it's attached to when the activity counter
 * is greater than 0.
 */
export class SpinnerActivityDirective {
    constructor(spinner, activityService) {
        this.spinner = spinner;
        this.activityService = activityService;
    }
    /**
     * Subscribe to the activity service counter and display the spinner
     * when it's is greater than 0.
     * @internal
     */
    ngOnInit() {
        this.counter$$ = this.activityService.counter$
            .pipe(debounceTime(50))
            .subscribe((count) => {
            count > 0 ? this.spinner.show() : this.spinner.hide();
        });
    }
    /**
     * Unsubcribe to the activity service counter.
     * @internal
     */
    ngOnDestroy() {
        this.counter$$.unsubscribe();
    }
}
SpinnerActivityDirective.ɵfac = function SpinnerActivityDirective_Factory(t) { return new (t || SpinnerActivityDirective)(i0.ɵɵdirectiveInject(i1.SpinnerComponent, 2), i0.ɵɵdirectiveInject(i2.ActivityService)); };
SpinnerActivityDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SpinnerActivityDirective, selectors: [["", "igoSpinnerActivity", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpinnerActivityDirective, [{
        type: Directive,
        args: [{
                selector: '[igoSpinnerActivity]'
            }]
    }], function () { return [{ type: i1.SpinnerComponent, decorators: [{
                type: Self
            }] }, { type: i2.ActivityService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1hY3Rpdml0eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9zcGlubmVyL3NwaW5uZXItYWN0aXZpdHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLOUM7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sd0JBQXdCO0lBTW5DLFlBQ2tCLE9BQXlCLEVBQ2pDLGVBQWdDO1FBRHhCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ2pDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN2QyxDQUFDO0lBRUo7Ozs7T0FJRztJQUNILFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUTthQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzNCLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Z0dBOUJVLHdCQUF3QjsyRUFBeEIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7O3NCQVFJLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFNlbGYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWN0aXZpdHlTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gYmluZCBhIFNwaW5uZXJDb21wb25lbnQgdG8gdGhlIGFjdGl2aXR5IHNlcnZpY2UuXG4gKiBUaGUgYWN0aXZpdHkgc2VydmljZSB0cmFja3MgYW55IEhUVFAgcmVxdWVzdCBhbmQgdGhpcyBkaXJlY3RpdmVcbiAqIHdpbGwgZGlzcGxheSB0aGUgc3Bpbm5lciBpdCdzIGF0dGFjaGVkIHRvIHdoZW4gdGhlIGFjdGl2aXR5IGNvdW50ZXJcbiAqIGlzIGdyZWF0ZXIgdGhhbiAwLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaWdvU3Bpbm5lckFjdGl2aXR5XSdcbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lckFjdGl2aXR5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBhY3Rpdml0eSBzZXJ2aWNlIGNvdW50ZXJcbiAgICovXG4gIHByaXZhdGUgY291bnRlciQkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNlbGYoKSBwcml2YXRlIHNwaW5uZXI6IFNwaW5uZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSBhY3Rpdml0eVNlcnZpY2U6IEFjdGl2aXR5U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgYWN0aXZpdHkgc2VydmljZSBjb3VudGVyIGFuZCBkaXNwbGF5IHRoZSBzcGlubmVyXG4gICAqIHdoZW4gaXQncyBpcyBncmVhdGVyIHRoYW4gMC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvdW50ZXIkJCA9IHRoaXMuYWN0aXZpdHlTZXJ2aWNlLmNvdW50ZXIkXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoNTApKVxuICAgICAgLnN1YnNjcmliZSgoY291bnQ6IG51bWJlcikgPT4ge1xuICAgICAgICBjb3VudCA+IDAgPyB0aGlzLnNwaW5uZXIuc2hvdygpIDogdGhpcy5zcGlubmVyLmhpZGUoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3ViY3JpYmUgdG8gdGhlIGFjdGl2aXR5IHNlcnZpY2UgY291bnRlci5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvdW50ZXIkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=