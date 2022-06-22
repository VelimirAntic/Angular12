import { Directive, Self } from '@angular/core';
import olFormatGeoJSON from 'ol/format/GeoJSON';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map-browser/map-browser.component";
import * as i2 from "../shared/overlay.service";
export class OverlayDirective {
    constructor(component, overlayService) {
        this.component = component;
        this.overlayService = overlayService;
        this.format = new olFormatGeoJSON();
    }
    get map() {
        return this.component.map;
    }
    ngOnInit() {
        this.features$$ = this.overlayService.features$.subscribe(res => this.handleFeatures(res[0], res[1]));
    }
    ngOnDestroy() {
        this.features$$.unsubscribe();
    }
    handleFeatures(features, action) { }
}
OverlayDirective.ɵfac = function OverlayDirective_Factory(t) { return new (t || OverlayDirective)(i0.ɵɵdirectiveInject(i1.MapBrowserComponent, 2), i0.ɵɵdirectiveInject(i2.OverlayService)); };
OverlayDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: OverlayDirective, selectors: [["", "igoOverlay", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayDirective, [{
        type: Directive,
        args: [{
                selector: '[igoOverlay]'
            }]
    }], function () { return [{ type: i1.MapBrowserComponent, decorators: [{
                type: Self
            }] }, { type: i2.OverlayService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9vdmVybGF5L3NoYXJlZC9vdmVybGF5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxlQUFlLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFZaEQsTUFBTSxPQUFPLGdCQUFnQjtJQVEzQixZQUNrQixTQUE4QixFQUN0QyxjQUE4QjtRQUR0QixjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSaEMsV0FBTSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7SUFTcEMsQ0FBQztJQVBKLElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQU9ELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUM5RCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDcEMsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU8sY0FBYyxDQUFDLFFBQW1CLEVBQUUsTUFBcUIsSUFBRyxDQUFDOztnRkF2QjFELGdCQUFnQjttRUFBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FINUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOztzQkFVSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBTZWxmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCBvbEZvcm1hdEdlb0pTT04gZnJvbSAnb2wvZm9ybWF0L0dlb0pTT04nO1xuXG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi9tYXAvc2hhcmVkL21hcCc7XG5pbXBvcnQgeyBNYXBCcm93c2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbWFwL21hcC1icm93c2VyL21hcC1icm93c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQvZmVhdHVyZS5pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgT3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvb3ZlcmxheS5zZXJ2aWNlJztcbmltcG9ydCB7IE92ZXJsYXlBY3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvb3ZlcmxheS5lbnVtJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lnb092ZXJsYXldJ1xufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGZlYXR1cmVzJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBmb3JtYXQgPSBuZXcgb2xGb3JtYXRHZW9KU09OKCk7XG5cbiAgZ2V0IG1hcCgpOiBJZ29NYXAge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5tYXA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2VsZigpIHByaXZhdGUgY29tcG9uZW50OiBNYXBCcm93c2VyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgb3ZlcmxheVNlcnZpY2U6IE92ZXJsYXlTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZlYXR1cmVzJCQgPSB0aGlzLm92ZXJsYXlTZXJ2aWNlLmZlYXR1cmVzJC5zdWJzY3JpYmUocmVzID0+XG4gICAgICB0aGlzLmhhbmRsZUZlYXR1cmVzKHJlc1swXSwgcmVzWzFdKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZlYXR1cmVzJCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRmVhdHVyZXMoZmVhdHVyZXM6IEZlYXR1cmVbXSwgYWN0aW9uOiBPdmVybGF5QWN0aW9uKSB7fVxufVxuIl19