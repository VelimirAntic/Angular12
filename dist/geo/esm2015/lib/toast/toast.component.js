import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getEntityTitle } from '@igo2/common';
import olFormatGeoJSON from 'ol/format/GeoJSON';
import { FeatureMotion } from '../feature/shared/feature.enums';
import { moveToOlFeatures } from '../feature/shared/feature.utils';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/common";
import * as i5 from "../feature/feature-details/feature-details.component";
function ToastComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function ToastComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.zoomToFeatureExtent(); });
    i0.ɵɵelement(1, "mat-icon", 8);
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return ["collapsed", "initial"]; };
export class ToastComponent {
    constructor() {
        this.format = new olFormatGeoJSON();
        this.opened = new EventEmitter();
    }
    get expanded() {
        return this._expanded;
    }
    set expanded(value) {
        this.state = value ? 'expanded' : 'collapsed';
        this._expanded = value;
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get feature() {
        return this._feature;
    }
    set feature(value) {
        this._feature = value;
    }
    /**
     * @internal
     */
    get title() { return getEntityTitle(this.feature); }
    toggle() {
        this.expanded = !this.expanded;
        this.opened.emit(this.expanded);
    }
    zoomToFeatureExtent() {
        if (this.feature.geometry) {
            const olFeature = this.format.readFeature(this.feature, {
                dataProjection: this.feature.projection,
                featureProjection: this.map.projection
            });
            moveToOlFeatures(this.map, [olFeature], FeatureMotion.Zoom);
        }
    }
    swipe(action) {
        if (action === ToastComponent.SWIPE_ACTION.UP) {
            if (!this.expanded) {
                this.toggle();
            }
        }
        else if (action === ToastComponent.SWIPE_ACTION.DOWN) {
            if (this.expanded) {
                this.toggle();
            }
        }
    }
}
ToastComponent.SWIPE_ACTION = {
    UP: 'swipeup',
    DOWN: 'swipedown'
};
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(); };
ToastComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["igo-toast"]], inputs: { expanded: "expanded", map: "map", feature: "feature" }, outputs: { opened: "opened" }, decls: 7, vars: 6, consts: [["collapsedMobile", "51px", "expandedMobile", "300px", 3, "state", "swipeup", "swipedown"], ["flex", ""], [3, "title"], ["mat-icon-button", "", "panelLeftButton", "", 3, "click"], [3, "svgIcon"], ["mat-icon-button", "", "panelRightButton", "", "class", "igo-icon-button", 3, "click", 4, "ngIf"], [3, "feature"], ["mat-icon-button", "", "panelRightButton", "", 1, "igo-icon-button", 3, "click"], ["svgIcon", "zoom-in"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-flexible", 0, 1);
        i0.ɵɵlistener("swipeup", function ToastComponent_Template_igo_flexible_swipeup_0_listener($event) { return ctx.swipe($event.type); })("swipedown", function ToastComponent_Template_igo_flexible_swipedown_0_listener($event) { return ctx.swipe($event.type); });
        i0.ɵɵelementStart(2, "igo-panel", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵlistener("click", function ToastComponent_Template_button_click_3_listener() { return ctx.toggle(); });
        i0.ɵɵelement(4, "mat-icon", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, ToastComponent_button_5_Template, 2, 0, "button", 5);
        i0.ɵɵelement(6, "igo-feature-details", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵproperty("state", ctx.state);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("title", ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("svgIcon", i0.ɵɵpureFunction0(5, _c0).indexOf(_r0.state) >= 0 ? "arrow_upward" : "arrow_downward");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.feature.geometry);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("feature", ctx.feature);
    } }, directives: [i1.FlexibleComponent, i1.PanelComponent, i2.MatButton, i3.MatIcon, i4.NgIf, i5.FeatureDetailsComponent], styles: ["[_nghost-%COMP%]{position:absolute;bottom:0px;width:100%;max-height:calc(100% - 50px);background-color:#fff}igo-feature-details[_ngcontent-%COMP%]     table{width:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: 'igo-toast',
                templateUrl: './toast.component.html',
                styleUrls: ['./toast.component.scss']
            }]
    }], function () { return []; }, { expanded: [{
            type: Input
        }], map: [{
            type: Input
        }], feature: [{
            type: Input
        }], opened: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvdG9hc3QvdG9hc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RCxPQUFPLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7OztJQ1MvRCxpQ0FBMEg7SUFBekQsOExBQStCO0lBQzlGLDhCQUF1QztJQUN6QyxpQkFBUzs7O0FESGIsTUFBTSxPQUFPLGNBQWM7SUE0Q3pCO1FBdkNRLFdBQU0sR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBOEI3QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQVNoQyxDQUFDO0lBckNoQixJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFHRCxJQUNJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUdELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBT0Q7O09BRUc7SUFDSCxJQUFJLEtBQUssS0FBYSxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBSTVELE1BQU07UUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RELGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQ3ZDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVTthQUN2QyxDQUFDLENBQUM7WUFDSCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFjO1FBQ2xCLElBQUksTUFBTSxLQUFLLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtTQUNGO2FBQU0sSUFBSSxNQUFNLEtBQUssY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtTQUNGO0lBQ0gsQ0FBQzs7QUF0RU0sMkJBQVksR0FBRztJQUNwQixFQUFFLEVBQUUsU0FBUztJQUNiLElBQUksRUFBRSxXQUFXO0NBQ2xCLENBQUM7NEVBSlMsY0FBYztpRUFBZCxjQUFjO1FDZDNCLDBDQUttQztRQURqQywyR0FBVyxzQkFBa0IsSUFBQyxrR0FDakIsc0JBQWtCLElBREQ7UUFHOUIsb0NBQTJCO1FBQ3pCLGlDQUdxQjtRQUFuQiwyRkFBUyxZQUFRLElBQUM7UUFDbEIsOEJBQXVIO1FBQ3pILGlCQUFTO1FBRVQscUVBRVM7UUFFVCx5Q0FBK0Q7UUFDakUsaUJBQVk7UUFFZCxpQkFBZTs7O1FBbkJiLGlDQUFlO1FBSUosZUFBZTtRQUFmLGlDQUFlO1FBS1osZUFBaUc7UUFBakcsZ0hBQWlHO1FBR1gsZUFBc0I7UUFBdEIsMkNBQXNCO1FBSW5HLGVBQW1CO1FBQW5CLHFDQUFtQjs7dUZETC9CLGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QztzQ0FTSyxRQUFRO2tCQURYLEtBQUs7WUFXRixHQUFHO2tCQUROLEtBQUs7WUFVRixPQUFPO2tCQURWLEtBQUs7WUFTSSxNQUFNO2tCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGbGV4aWJsZVN0YXRlLCBnZXRFbnRpdHlUaXRsZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgb2xGb3JtYXRHZW9KU09OIGZyb20gJ29sL2Zvcm1hdC9HZW9KU09OJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9mZWF0dXJlL3NoYXJlZC9mZWF0dXJlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgRmVhdHVyZU1vdGlvbiB9IGZyb20gJy4uL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUuZW51bXMnO1xuaW1wb3J0IHsgbW92ZVRvT2xGZWF0dXJlcyB9IGZyb20gJy4uL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUudXRpbHMnO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vbWFwL3NoYXJlZC9tYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tdG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IHtcbiAgc3RhdGljIFNXSVBFX0FDVElPTiA9IHtcbiAgICBVUDogJ3N3aXBldXAnLFxuICAgIERPV046ICdzd2lwZWRvd24nXG4gIH07XG4gIHByaXZhdGUgZm9ybWF0ID0gbmV3IG9sRm9ybWF0R2VvSlNPTigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBleHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWQ7XG4gIH1cbiAgc2V0IGV4cGFuZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHZhbHVlID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnO1xuICAgIHRoaXMuX2V4cGFuZGVkID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgZ2V0IG1hcCgpOiBJZ29NYXAge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cbiAgc2V0IG1hcCh2YWx1ZTogSWdvTWFwKSB7XG4gICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfbWFwOiBJZ29NYXA7XG5cbiAgQElucHV0KClcbiAgZ2V0IGZlYXR1cmUoKTogRmVhdHVyZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZlYXR1cmU7XG4gIH1cbiAgc2V0IGZlYXR1cmUodmFsdWU6IEZlYXR1cmUpIHtcbiAgICB0aGlzLl9mZWF0dXJlID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfZmVhdHVyZTogRmVhdHVyZTtcblxuICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHB1YmxpYyBzdGF0ZTogRmxleGlibGVTdGF0ZTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgdGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuIGdldEVudGl0eVRpdGxlKHRoaXMuZmVhdHVyZSk7IH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICB0aGlzLm9wZW5lZC5lbWl0KHRoaXMuZXhwYW5kZWQpO1xuICB9XG5cbiAgem9vbVRvRmVhdHVyZUV4dGVudCgpIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlLmdlb21ldHJ5KSB7XG4gICAgICBjb25zdCBvbEZlYXR1cmUgPSB0aGlzLmZvcm1hdC5yZWFkRmVhdHVyZSh0aGlzLmZlYXR1cmUsIHtcbiAgICAgICAgZGF0YVByb2plY3Rpb246IHRoaXMuZmVhdHVyZS5wcm9qZWN0aW9uLFxuICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogdGhpcy5tYXAucHJvamVjdGlvblxuICAgICAgfSk7XG4gICAgICBtb3ZlVG9PbEZlYXR1cmVzKHRoaXMubWFwLCBbb2xGZWF0dXJlXSwgRmVhdHVyZU1vdGlvbi5ab29tKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZShhY3Rpb246IHN0cmluZykge1xuICAgIGlmIChhY3Rpb24gPT09IFRvYXN0Q29tcG9uZW50LlNXSVBFX0FDVElPTi5VUCkge1xuICAgICAgaWYgKCF0aGlzLmV4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFRvYXN0Q29tcG9uZW50LlNXSVBFX0FDVElPTi5ET1dOKSB7XG4gICAgICBpZiAodGhpcy5leHBhbmRlZCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiPGlnby1mbGV4aWJsZSAjZmxleFxuICBjb2xsYXBzZWRNb2JpbGU9XCI1MXB4XCJcbiAgZXhwYW5kZWRNb2JpbGU9XCIzMDBweFwiXG4gIFtzdGF0ZV09XCJzdGF0ZVwiXG4gIChzd2lwZXVwKT1cInN3aXBlKCRldmVudC50eXBlKVwiXG4gIChzd2lwZWRvd24pPVwic3dpcGUoJGV2ZW50LnR5cGUpXCI+XG5cbiAgPGlnby1wYW5lbCBbdGl0bGVdPVwidGl0bGVcIj5cbiAgICA8YnV0dG9uXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgIHBhbmVsTGVmdEJ1dHRvblxuICAgICAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XG4gICAgICA8bWF0LWljb24gW3N2Z0ljb25dPVwiWydjb2xsYXBzZWQnLCAnaW5pdGlhbCddLmluZGV4T2YoZmxleC5zdGF0ZSkgPj0gMCA/ICdhcnJvd191cHdhcmQnIDogJ2Fycm93X2Rvd253YXJkJ1wiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBwYW5lbFJpZ2h0QnV0dG9uIGNsYXNzPVwiaWdvLWljb24tYnV0dG9uXCIgKGNsaWNrKT1cInpvb21Ub0ZlYXR1cmVFeHRlbnQoKVwiICpuZ0lmPVwiZmVhdHVyZS5nZW9tZXRyeVwiPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJ6b29tLWluXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxpZ28tZmVhdHVyZS1kZXRhaWxzIFtmZWF0dXJlXT1cImZlYXR1cmVcIj48L2lnby1mZWF0dXJlLWRldGFpbHM+XG4gIDwvaWdvLXBhbmVsPlxuXG48L2lnby1mbGV4aWJsZT5cbiJdfQ==