import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function InfoSectionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "pre");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.infoContent);
} }
export class InfoSectionComponent {
    constructor() {
        this.infoContent = '';
    }
}
InfoSectionComponent.ɵfac = function InfoSectionComponent_Factory(t) { return new (t || InfoSectionComponent)(); };
InfoSectionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfoSectionComponent, selectors: [["igo-info-section"]], inputs: { infoContent: "infoContent" }, decls: 1, vars: 1, consts: [["class", "infoSection", 4, "ngIf"], [1, "infoSection"]], template: function InfoSectionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, InfoSectionComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.infoContent && ctx.infoContent.length);
    } }, directives: [i1.NgIf], styles: [".infoSection[_ngcontent-%COMP%]{border-radius:10px;background-color:#6e6e6e66;padding:calc(5px / 2);position:absolute;text-align:center;top:5px;left:50%;text-shadow:0 0 5px white,0 0 10px white,0 0 15px white}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.infoSection[_ngcontent-%COMP%]{top:calc(40px + 5px + 5px);left:10%}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfoSectionComponent, [{
        type: Component,
        args: [{
                selector: 'igo-info-section',
                templateUrl: './info-section.component.html',
                styleUrls: ['./info-section.component.scss']
            }]
    }], function () { return []; }, { infoContent: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9pbmZvLXNlY3Rpb24vaW5mby1zZWN0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9pbmZvLXNlY3Rpb24vaW5mby1zZWN0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDQWpELDhCQUFtRTtJQUMvRCwyQkFBSztJQUFBLFlBQWU7SUFBQSxpQkFBTTtJQUM5QixpQkFBTTs7O0lBREcsZUFBZTtJQUFmLHdDQUFlOztBRE14QixNQUFNLE9BQU8sb0JBQW9CO0lBSS9CO1FBRlMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFFbkIsQ0FBQzs7d0ZBSkwsb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNQakMscUVBRU07O1FBRkEsZ0VBQXVDOzt1RkRPaEMsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QztzQ0FHVSxXQUFXO2tCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28taW5mby1zZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2luZm8tc2VjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2luZm8tc2VjdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEluZm9TZWN0aW9uQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBpbmZvQ29udGVudDogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG59XG4iLCI8ZGl2ICpuZ0lmPVwiaW5mb0NvbnRlbnQgJiYgaW5mb0NvbnRlbnQubGVuZ3RoXCIgY2xhc3M9XCJpbmZvU2VjdGlvblwiPlxuICAgIDxwcmU+e3tpbmZvQ29udGVudH19PC9wcmU+XG48L2Rpdj4iXX0=