import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/material/icon";
import * as i5 from "@ngx-translate/core";
function TrackFeatureButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function TrackFeatureButtonComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.toggleTrackFeature(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.geo.layer.trackFeature"))("color", ctx_r0.color);
} }
export class TrackFeatureButtonComponent {
    constructor() {
        this.trackFeature = false;
        this.color = 'primary';
    }
    get options() {
        if (!this.layer) {
            return;
        }
        return this.layer.options;
    }
    ngOnInit() {
        this.color = this.trackFeature ? 'primary' : 'basic';
    }
    toggleTrackFeature() {
        if (this.trackFeature) {
            this.layer.disableTrackFeature(this.layer.options.trackFeature);
            this.color = 'basic';
        }
        else {
            this.layer.enableTrackFeature(this.layer.options.trackFeature);
            this.color = 'primary';
        }
        this.trackFeature = !this.trackFeature;
    }
}
TrackFeatureButtonComponent.ɵfac = function TrackFeatureButtonComponent_Factory(t) { return new (t || TrackFeatureButtonComponent)(); };
TrackFeatureButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrackFeatureButtonComponent, selectors: [["igo-track-feature-button"]], inputs: { layer: "layer", trackFeature: "trackFeature" }, decls: 1, vars: 1, consts: [["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], ["svgIcon", "crosshairs-gps"]], template: function TrackFeatureButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TrackFeatureButtonComponent_button_0_Template, 3, 4, "button", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.options.trackFeature);
    } }, directives: [i1.NgIf, i2.MatButton, i3.MatTooltip, i4.MatIcon], pipes: [i5.TranslatePipe], styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackFeatureButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-track-feature-button',
                templateUrl: './track-feature-button.component.html',
                styleUrls: ['./track-feature-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { layer: [{
            type: Input
        }], trackFeature: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stZmVhdHVyZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvdHJhY2stZmVhdHVyZS1idXR0b24vdHJhY2stZmVhdHVyZS1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvdHJhY2stZmVhdHVyZS1idXR0b24vdHJhY2stZmVhdHVyZS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0FsRixpQ0FPaUM7SUFBL0IsME1BQThCOztJQUM5Qiw4QkFBOEM7SUFDaEQsaUJBQVM7OztJQUpQLCtFQUF1RCx1QkFBQTs7QURNekQsTUFBTSxPQUFPLDJCQUEyQjtJQWV0QztRQVhTLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBU3ZCLFVBQUssR0FBVyxTQUFTLENBQUM7SUFFbEIsQ0FBQztJQVRoQixJQUFJLE9BQU87UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDOztzR0E5QlUsMkJBQTJCOzhFQUEzQiwyQkFBMkI7UUNYeEMsa0ZBU1M7O1FBVEEsK0NBQTBCOzt1RkRXdEIsMkJBQTJCO2NBTnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztnQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7c0NBR1UsS0FBSztrQkFBYixLQUFLO1lBRUcsWUFBWTtrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmVjdG9yTGF5ZXIgfSBmcm9tICcuLi9zaGFyZWQvbGF5ZXJzJztcbmltcG9ydCB7IFZlY3RvckxheWVyT3B0aW9ucyB9IGZyb20gJy4uL3NoYXJlZC9sYXllcnMvdmVjdG9yLWxheWVyLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby10cmFjay1mZWF0dXJlLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmFjay1mZWF0dXJlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyYWNrLWZlYXR1cmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRyYWNrRmVhdHVyZUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbGF5ZXI6IFZlY3RvckxheWVyO1xuXG4gIEBJbnB1dCgpIHRyYWNrRmVhdHVyZSA9IGZhbHNlO1xuXG4gIGdldCBvcHRpb25zKCk6IFZlY3RvckxheWVyT3B0aW9ucyB7XG4gICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxheWVyLm9wdGlvbnM7XG4gIH1cblxuICBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICdwcmltYXJ5JztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMudHJhY2tGZWF0dXJlID8gJ3ByaW1hcnknIDogJ2Jhc2ljJztcbiAgfVxuXG4gIHRvZ2dsZVRyYWNrRmVhdHVyZSgpIHtcbiAgICBpZiAodGhpcy50cmFja0ZlYXR1cmUpIHtcbiAgICAgIHRoaXMubGF5ZXIuZGlzYWJsZVRyYWNrRmVhdHVyZSh0aGlzLmxheWVyLm9wdGlvbnMudHJhY2tGZWF0dXJlKTtcbiAgICAgIHRoaXMuY29sb3IgPSAnYmFzaWMnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxheWVyLmVuYWJsZVRyYWNrRmVhdHVyZSh0aGlzLmxheWVyLm9wdGlvbnMudHJhY2tGZWF0dXJlKTtcbiAgICAgIHRoaXMuY29sb3IgPSAncHJpbWFyeSc7XG4gICAgfVxuICAgIHRoaXMudHJhY2tGZWF0dXJlID0gIXRoaXMudHJhY2tGZWF0dXJlO1xuICB9XG59XG4iLCI8YnV0dG9uICpuZ0lmPVwib3B0aW9ucy50cmFja0ZlYXR1cmVcIlxuICBtYXQtaWNvbi1idXR0b25cbiAgY29sbGFwc2libGVCdXR0b25cbiAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmxheWVyLnRyYWNrRmVhdHVyZScgfCB0cmFuc2xhdGVcIlxuICBbY29sb3JdPVwiY29sb3JcIlxuICAoY2xpY2spPVwidG9nZ2xlVHJhY2tGZWF0dXJlKClcIj5cbiAgPG1hdC1pY29uIHN2Z0ljb249XCJjcm9zc2hhaXJzLWdwc1wiPjwvbWF0LWljb24+XG48L2J1dHRvbj5cbiJdfQ==