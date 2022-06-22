import { Component, Input } from '@angular/core';
import * as olproj from 'ol/proj';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/material/icon";
import * as i5 from "@ngx-translate/core";
/*
Button to center the map to the home extent
*/
export class HomeExtentButtonComponent {
    constructor(configService) {
        this.configService = configService;
        this.computeHomeExtent();
    }
    computeHomeExtent() {
        this.homeExtentButtonExtent = this.extentOverride || this.configService.getConfig('homeExtentButton.homeExtButtonExtent');
        this.homeExtentButtonCenter = this.centerOverride || this.configService.getConfig('homeExtentButton.homeExtButtonCenter');
        this.homeExtentButtonZoom = this.zoomOverride || this.configService.getConfig('homeExtentButton.homeExtButtonZoom');
        // priority over extent if these 2 properties are defined;
        if (this.centerOverride && this.zoomOverride) {
            this.homeExtentButtonExtent = undefined;
        }
    }
    onToggleClick() {
        this.computeHomeExtent();
        if (this.homeExtentButtonExtent) {
            this.map.viewController.zoomToExtent(this.homeExtentButtonExtent);
        }
        else if (this.homeExtentButtonCenter && this.homeExtentButtonZoom) {
            const center = olproj.fromLonLat(this.homeExtentButtonCenter, this.map.viewController.olView.getProjection().getCode());
            this.map.viewController.olView.setCenter(center);
            this.map.viewController.zoomTo(this.homeExtentButtonZoom);
        }
    }
}
HomeExtentButtonComponent.ɵfac = function HomeExtentButtonComponent_Factory(t) { return new (t || HomeExtentButtonComponent)(i0.ɵɵdirectiveInject(i1.ConfigService)); };
HomeExtentButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeExtentButtonComponent, selectors: [["igo-home-extent-button"]], inputs: { map: "map", color: "color", extentOverride: "extentOverride", centerOverride: "centerOverride", zoomOverride: "zoomOverride" }, decls: 4, vars: 4, consts: [[1, "igo-home-extent-button-container"], ["mat-icon-button", "", "matTooltipPosition", "left", 3, "matTooltip", "color", "click"], ["svgIcon", "home-map-marker"]], template: function HomeExtentButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function HomeExtentButtonComponent_Template_button_click_1_listener() { return ctx.onToggleClick(); });
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelement(3, "mat-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 2, "igo.geo.mapButtons.home-extent"))("color", ctx.color);
    } }, directives: [i2.MatButton, i3.MatTooltip, i4.MatIcon], pipes: [i5.TranslatePipe], styles: ["@charset \"UTF-8\";.igo-home-extent-button-container[_ngcontent-%COMP%]{width:40px;background-color:#fff}\\a0[_ngcontent-%COMP%]   .igo-home-extent-button-container[_ngcontent-%COMP%]:hover{background-color:#efefef}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeExtentButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-home-extent-button',
                templateUrl: './home-extent-button.component.html',
                styleUrls: ['./home-extent-button.component.scss'],
            }]
    }], function () { return [{ type: i1.ConfigService }]; }, { map: [{
            type: Input
        }], color: [{
            type: Input
        }], extentOverride: [{
            type: Input
        }], centerOverride: [{
            type: Input
        }], zoomOverride: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1leHRlbnQtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9ob21lLWV4dGVudC1idXR0b24vaG9tZS1leHRlbnQtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9ob21lLWV4dGVudC1idXR0b24vaG9tZS1leHRlbnQtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pELE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxDQUFDOzs7Ozs7O0FBQ2xDOztFQUVFO0FBTUYsTUFBTSxPQUFPLHlCQUF5QjtJQVdyQyxZQUFtQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMxQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUMxSCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQzFILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFFcEgsMERBQTBEO1FBQzFELElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNuRTthQUFNLElBQUksSUFBSSxDQUFDLHNCQUFzQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUNuRSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN4SCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7O2tHQW5DVSx5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ2J0Qyw4QkFBOEM7UUFBQSxpQ0FLZDtRQUExQixzR0FBUyxtQkFBZSxJQUFDOztRQUFDLDhCQUFpRDtRQUFBLGlCQUFTO1FBQUEsaUJBQU07O1FBSDFGLGVBQTJEO1FBQTNELG1GQUEyRCxvQkFBQTs7dUZEV3BELHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFDLHFDQUFxQztnQkFDakQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQ7Z0VBRVUsR0FBRztrQkFBWCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uL3NoYXJlZC9tYXAnO1xyXG5pbXBvcnQgeyBNYXBFeHRlbnQgfSBmcm9tICcuLi9zaGFyZWQvbWFwLmludGVyZmFjZSc7XHJcbmltcG9ydCAqIGFzIG9scHJvaiBmcm9tICdvbC9wcm9qJztcclxuLypcclxuQnV0dG9uIHRvIGNlbnRlciB0aGUgbWFwIHRvIHRoZSBob21lIGV4dGVudFxyXG4qL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lnby1ob21lLWV4dGVudC1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOicuL2hvbWUtZXh0ZW50LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS1leHRlbnQtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lRXh0ZW50QnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBtYXA6IElnb01hcDtcclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGV4dGVudE92ZXJyaWRlPzogTWFwRXh0ZW50XHJcbiAgQElucHV0KCkgY2VudGVyT3ZlcnJpZGU/OiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIEBJbnB1dCgpIHpvb21PdmVycmlkZT86IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBob21lRXh0ZW50QnV0dG9uRXh0ZW50O1xyXG4gIHByaXZhdGUgaG9tZUV4dGVudEJ1dHRvbkNlbnRlcjtcclxuICBwcml2YXRlIGhvbWVFeHRlbnRCdXR0b25ab29tO1xyXG5cclxuIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuY29tcHV0ZUhvbWVFeHRlbnQoKTtcclxuICB9XHJcblxyXG4gIGNvbXB1dGVIb21lRXh0ZW50KCkge1xyXG4gICAgdGhpcy5ob21lRXh0ZW50QnV0dG9uRXh0ZW50ID0gdGhpcy5leHRlbnRPdmVycmlkZSB8fCB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCdob21lRXh0ZW50QnV0dG9uLmhvbWVFeHRCdXR0b25FeHRlbnQnKTtcclxuICAgIHRoaXMuaG9tZUV4dGVudEJ1dHRvbkNlbnRlciA9IHRoaXMuY2VudGVyT3ZlcnJpZGUgfHwgdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygnaG9tZUV4dGVudEJ1dHRvbi5ob21lRXh0QnV0dG9uQ2VudGVyJyk7XHJcbiAgICB0aGlzLmhvbWVFeHRlbnRCdXR0b25ab29tID0gdGhpcy56b29tT3ZlcnJpZGUgfHwgdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygnaG9tZUV4dGVudEJ1dHRvbi5ob21lRXh0QnV0dG9uWm9vbScpO1xyXG5cclxuICAgIC8vIHByaW9yaXR5IG92ZXIgZXh0ZW50IGlmIHRoZXNlIDIgcHJvcGVydGllcyBhcmUgZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLmNlbnRlck92ZXJyaWRlICYmIHRoaXMuem9vbU92ZXJyaWRlKSB7XHJcbiAgICAgIHRoaXMuaG9tZUV4dGVudEJ1dHRvbkV4dGVudCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlQ2xpY2soKSB7XHJcbiAgICB0aGlzLmNvbXB1dGVIb21lRXh0ZW50KCk7XHJcbiAgICBpZiAodGhpcy5ob21lRXh0ZW50QnV0dG9uRXh0ZW50KSB7XHJcbiAgICAgIHRoaXMubWFwLnZpZXdDb250cm9sbGVyLnpvb21Ub0V4dGVudCh0aGlzLmhvbWVFeHRlbnRCdXR0b25FeHRlbnQpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmhvbWVFeHRlbnRCdXR0b25DZW50ZXIgJiYgdGhpcy5ob21lRXh0ZW50QnV0dG9uWm9vbSkge1xyXG4gICAgICBjb25zdCBjZW50ZXIgPSBvbHByb2ouZnJvbUxvbkxhdCh0aGlzLmhvbWVFeHRlbnRCdXR0b25DZW50ZXIsIHRoaXMubWFwLnZpZXdDb250cm9sbGVyLm9sVmlldy5nZXRQcm9qZWN0aW9uKCkuZ2V0Q29kZSgpKTtcclxuICAgICAgdGhpcy5tYXAudmlld0NvbnRyb2xsZXIub2xWaWV3LnNldENlbnRlcihjZW50ZXIpO1xyXG4gICAgICB0aGlzLm1hcC52aWV3Q29udHJvbGxlci56b29tVG8odGhpcy5ob21lRXh0ZW50QnV0dG9uWm9vbSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJpZ28taG9tZS1leHRlbnQtYnV0dG9uLWNvbnRhaW5lclwiPjxidXR0b25cclxuICDCoCDCoCBtYXQtaWNvbi1idXR0b25cclxuICDCoCDCoCBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5tYXBCdXR0b25zLmhvbWUtZXh0ZW50JyB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cImxlZnRcIlxyXG4gIMKgIMKgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgwqAgwqAgKGNsaWNrKT1cIm9uVG9nZ2xlQ2xpY2soKVwiPjxtYXQtaWNvbiBzdmdJY29uID0gXCJob21lLW1hcC1tYXJrZXJcIj48L21hdC1pY29uPjwvYnV0dG9uPjwvZGl2PlxyXG4iXX0=