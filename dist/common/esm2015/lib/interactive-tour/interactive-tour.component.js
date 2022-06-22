import { Component, ViewEncapsulation, Input } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./interactive-tour.service";
import * as i2 from "../tool/shared/tool.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@ngx-translate/core";
function InteractiveTourComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function InteractiveTourComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.startInteractiveTour(); });
    i0.ɵɵelementStart(1, "span", 2);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "mat-icon", 3);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.getClass())("disabled", ctx_r0.disabledTourButton);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(3, 5, "igo.common.interactiveTour.buttonTitle"), " ", i0.ɵɵpipeBind1(4, 7, i0.ɵɵpipeBind1(5, 9, ctx_r0.discoverTitleInLocale$)), "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("matTooltip", ctx_r0.disabledTourButton ? i0.ɵɵpipeBind1(7, 11, "igo.common.interactiveTour.disaledTooltipTourToolButton") : i0.ɵɵpipeBind1(8, 13, "igo.common.interactiveTour.tooltipTourToolButton"));
} }
export class InteractiveTourComponent {
    constructor(interactiveTourService, toolService) {
        this.interactiveTourService = interactiveTourService;
        this.toolService = toolService;
        /**
         * Toolbox that holds main tools
         */
        this.tourToStart = '';
        this.discoverTitleInLocale$ = of('IGO');
    }
    getClass() {
        return {
            'tour-button-tool-icon': this.styleButton === 'icon',
            'tour-button-tool': this.styleButton === 'raised'
        };
    }
    get toolbox() {
        return this.toolService.toolbox;
    }
    getTourToStart() {
        if (this.tourToStart) {
            return this.tourToStart;
        }
        else {
            return this.activeToolName;
        }
    }
    get activeToolName() {
        if (this.toolbox) {
            if (this.isActiveTool) {
                return this.toolbox.activeTool$.getValue().name;
            }
            else {
                return 'global';
            }
        }
        else {
            return undefined;
        }
    }
    get isActiveTool() {
        if (this.toolbox) {
            return this.toolbox.activeTool$.getValue() !== undefined;
        }
        else {
            return undefined;
        }
    }
    get isToolHaveTour() {
        if (this.activeToolName === 'about' && !this.tourToStart) {
            return false;
        }
        return this.interactiveTourService.isToolHaveTourConfig(this.getTourToStart());
    }
    get showTourButton() {
        // 2 conditions to show: have Tour on tool in Config file and if we are in mobile displayInMobile= true
        let haveTour;
        haveTour = this.isToolHaveTour;
        if (haveTour === false) {
            return false;
        }
        let inMobileAndShow;
        if (this.interactiveTourService.isMobile()) {
            inMobileAndShow = this.isTourDisplayInMobile;
            if (inMobileAndShow === false) {
                return false;
            }
        }
        return true;
    }
    get isTourDisplayInMobile() {
        return this.interactiveTourService.isTourDisplayInMobile();
    }
    get disabledTourButton() {
        return this.interactiveTourService.disabledTourButton(this.activeToolName);
    }
    startInteractiveTour() {
        const tour = this.getTourToStart();
        if (tour) {
            this.interactiveTourService.startTour(tour);
        }
        else {
            return;
        }
    }
}
InteractiveTourComponent.ɵfac = function InteractiveTourComponent_Factory(t) { return new (t || InteractiveTourComponent)(i0.ɵɵdirectiveInject(i1.InteractiveTourService), i0.ɵɵdirectiveInject(i2.ToolService)); };
InteractiveTourComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InteractiveTourComponent, selectors: [["igo-interactive-tour"]], inputs: { tourToStart: "tourToStart", styleButton: "styleButton", discoverTitleInLocale$: "discoverTitleInLocale$" }, decls: 1, vars: 1, consts: [["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "ngClass", "disabled", "click"], [1, "interactive-tour-button-title"], ["svgIcon", "presentation-play", 3, "matTooltip"]], template: function InteractiveTourComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, InteractiveTourComponent_button_0_Template, 9, 15, "button", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showTourButton);
    } }, directives: [i3.NgIf, i4.MatButton, i3.NgClass, i5.MatIcon, i6.MatTooltip], pipes: [i7.TranslatePipe, i3.AsyncPipe], styles: [".shepherd-has-title .shepherd-content .shepherd-header{padding:.5em .75em}.shepherd-title{margin:0!important;font-weight:revert!important}.shepherd-progress{margin-right:15px;color:#737373}.shepherd-text{font-size:14px!important}.shepherd-element{border:1px solid;border-color:#474747;box-shadow:4px 5px #65656599}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractiveTourComponent, [{
        type: Component,
        args: [{
                selector: 'igo-interactive-tour',
                templateUrl: './interactive-tour.component.html',
                styleUrls: ['./interactive-tour.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.InteractiveTourService }, { type: i2.ToolService }]; }, { tourToStart: [{
            type: Input
        }], styleButton: [{
            type: Input
        }], discoverTitleInLocale$: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3RpdmUtdG91ci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9pbnRlcmFjdGl2ZS10b3VyL2ludGVyYWN0aXZlLXRvdXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvaW50ZXJhY3RpdmUtdG91ci9pbnRlcmFjdGl2ZS10b3VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0lDSHRDLGlDQU1nQztJQUw5Qix5TUFBa0M7SUFNbEMsK0JBQTRDO0lBQUEsWUFBeUc7Ozs7SUFBQSxpQkFBTztJQUM1Siw4QkFLVzs7O0lBQ2IsaUJBQVM7OztJQVpQLDJDQUFzQix1Q0FBQTtJQUtzQixlQUF5RztJQUF6Ryw2S0FBeUc7SUFHbkosZUFFaUU7SUFGakUscU5BRWlFOztBRERyRSxNQUFNLE9BQU8sd0JBQXdCO0lBa0ZuQyxZQUNVLHNCQUE4QyxFQUM5QyxXQUF3QjtRQUR4QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBbkZsQzs7V0FFRztRQUNNLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLDJCQUFzQixHQUF1QixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUErRTdELENBQUM7SUE3RUosUUFBUTtRQUNOLE9BQU87WUFDTCx1QkFBdUIsRUFBRSxJQUFJLENBQUMsV0FBVyxLQUFLLE1BQU07WUFDcEQsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRO1NBQ2xELENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7YUFDakQ7aUJBQU07Z0JBQ0wsT0FBTyxRQUFRLENBQUM7YUFDakI7U0FDRjthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssU0FBUyxDQUFDO1NBQzFEO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUNyRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQ3RCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLHVHQUF1RztRQUN2RyxJQUFJLFFBQWlCLENBQUM7UUFDdEIsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ3RCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLGVBQXdCLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDMUMsZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUM3QyxJQUFJLGVBQWUsS0FBSyxLQUFLLEVBQUU7Z0JBQzdCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUkscUJBQXFCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBT0Qsb0JBQW9CO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLE9BQU87U0FDUjtJQUNILENBQUM7O2dHQTlGVSx3QkFBd0I7MkVBQXhCLHdCQUF3QjtRQ1hyQyxnRkFjUzs7UUFkQSx5Q0FBb0I7O3VGRFdoQix3QkFBd0I7Y0FOcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QzttR0FLVSxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnRlcmFjdGl2ZVRvdXJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS10b3VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9vbFNlcnZpY2UgfSBmcm9tICcuLi90b29sL3NoYXJlZC90b29sLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWludGVyYWN0aXZlLXRvdXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaW50ZXJhY3RpdmUtdG91ci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ludGVyYWN0aXZlLXRvdXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGl2ZVRvdXJDb21wb25lbnQge1xuICAvKipcbiAgICogVG9vbGJveCB0aGF0IGhvbGRzIG1haW4gdG9vbHNcbiAgICovXG4gIEBJbnB1dCgpIHRvdXJUb1N0YXJ0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc3R5bGVCdXR0b246IHN0cmluZztcbiAgQElucHV0KCkgZGlzY292ZXJUaXRsZUluTG9jYWxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gb2YoJ0lHTycpO1xuXG4gIGdldENsYXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAndG91ci1idXR0b24tdG9vbC1pY29uJzogdGhpcy5zdHlsZUJ1dHRvbiA9PT0gJ2ljb24nLFxuICAgICAgJ3RvdXItYnV0dG9uLXRvb2wnOiB0aGlzLnN0eWxlQnV0dG9uID09PSAncmFpc2VkJ1xuICAgIH07XG4gIH1cblxuICBnZXQgdG9vbGJveCgpIHtcbiAgICByZXR1cm4gdGhpcy50b29sU2VydmljZS50b29sYm94O1xuICB9XG5cbiAgZ2V0VG91clRvU3RhcnQoKSB7XG4gICAgaWYgKHRoaXMudG91clRvU3RhcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvdXJUb1N0YXJ0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVUb29sTmFtZTtcbiAgICB9XG4gIH1cblxuICBnZXQgYWN0aXZlVG9vbE5hbWUoKSB7XG4gICAgaWYgKHRoaXMudG9vbGJveCkge1xuICAgICAgaWYgKHRoaXMuaXNBY3RpdmVUb29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guYWN0aXZlVG9vbCQuZ2V0VmFsdWUoKS5uYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdnbG9iYWwnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0FjdGl2ZVRvb2woKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMudG9vbGJveCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9vbGJveC5hY3RpdmVUb29sJC5nZXRWYWx1ZSgpICE9PSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzVG9vbEhhdmVUb3VyKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmFjdGl2ZVRvb2xOYW1lID09PSAnYWJvdXQnICYmICF0aGlzLnRvdXJUb1N0YXJ0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmludGVyYWN0aXZlVG91clNlcnZpY2UuaXNUb29sSGF2ZVRvdXJDb25maWcoXG4gICAgICB0aGlzLmdldFRvdXJUb1N0YXJ0KClcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dUb3VyQnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIC8vIDIgY29uZGl0aW9ucyB0byBzaG93OiBoYXZlIFRvdXIgb24gdG9vbCBpbiBDb25maWcgZmlsZSBhbmQgaWYgd2UgYXJlIGluIG1vYmlsZSBkaXNwbGF5SW5Nb2JpbGU9IHRydWVcbiAgICBsZXQgaGF2ZVRvdXI6IGJvb2xlYW47XG4gICAgaGF2ZVRvdXIgPSB0aGlzLmlzVG9vbEhhdmVUb3VyO1xuICAgIGlmIChoYXZlVG91ciA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgaW5Nb2JpbGVBbmRTaG93OiBib29sZWFuO1xuICAgIGlmICh0aGlzLmludGVyYWN0aXZlVG91clNlcnZpY2UuaXNNb2JpbGUoKSkge1xuICAgICAgaW5Nb2JpbGVBbmRTaG93ID0gdGhpcy5pc1RvdXJEaXNwbGF5SW5Nb2JpbGU7XG4gICAgICBpZiAoaW5Nb2JpbGVBbmRTaG93ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0IGlzVG91ckRpc3BsYXlJbk1vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmFjdGl2ZVRvdXJTZXJ2aWNlLmlzVG91ckRpc3BsYXlJbk1vYmlsZSgpO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkVG91ckJ1dHRvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmFjdGl2ZVRvdXJTZXJ2aWNlLmRpc2FibGVkVG91ckJ1dHRvbih0aGlzLmFjdGl2ZVRvb2xOYW1lKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW50ZXJhY3RpdmVUb3VyU2VydmljZTogSW50ZXJhY3RpdmVUb3VyU2VydmljZSxcbiAgICBwcml2YXRlIHRvb2xTZXJ2aWNlOiBUb29sU2VydmljZVxuICApIHt9XG5cbiAgc3RhcnRJbnRlcmFjdGl2ZVRvdXIoKSB7XG4gICAgY29uc3QgdG91ciA9IHRoaXMuZ2V0VG91clRvU3RhcnQoKTtcbiAgICBpZiAodG91cikge1xuICAgICAgdGhpcy5pbnRlcmFjdGl2ZVRvdXJTZXJ2aWNlLnN0YXJ0VG91cih0b3VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuIiwiPGJ1dHRvbiAqbmdJZj1cInNob3dUb3VyQnV0dG9uXCJcbiAgKGNsaWNrKSA9IFwic3RhcnRJbnRlcmFjdGl2ZVRvdXIoKVwiXG4gIFtuZ0NsYXNzXT1cImdldENsYXNzKClcIlxuICBtYXQtcmFpc2VkLWJ1dHRvblxuICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgW2Rpc2FibGVkXT1kaXNhYmxlZFRvdXJCdXR0b24+XG4gIDxzcGFuIGNsYXNzPVwiaW50ZXJhY3RpdmUtdG91ci1idXR0b24tdGl0bGVcIj57eydpZ28uY29tbW9uLmludGVyYWN0aXZlVG91ci5idXR0b25UaXRsZScgfCB0cmFuc2xhdGV9fSB7eyhkaXNjb3ZlclRpdGxlSW5Mb2NhbGUkIHwgYXN5bmMpIHwgdHJhbnNsYXRlfX08L3NwYW4+XG4gIDxtYXQtaWNvblxuICAgIHN2Z0ljb249XCJwcmVzZW50YXRpb24tcGxheVwiXG4gICAgW21hdFRvb2x0aXBdPVwiZGlzYWJsZWRUb3VyQnV0dG9uID9cbiAgICAoJ2lnby5jb21tb24uaW50ZXJhY3RpdmVUb3VyLmRpc2FsZWRUb29sdGlwVG91clRvb2xCdXR0b24nIHwgdHJhbnNsYXRlKSA6XG4gICAgKCdpZ28uY29tbW9uLmludGVyYWN0aXZlVG91ci50b29sdGlwVG91clRvb2xCdXR0b24nIHwgdHJhbnNsYXRlKVwiPlxuICA8L21hdC1pY29uPlxuPC9idXR0b24+XG4iXX0=