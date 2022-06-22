import { Component, Input } from '@angular/core';
import { SubjectStatus } from '@igo2/utils';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
const _c0 = ["*"];
export class MapBrowserComponent {
    constructor(activityService) {
        this.activityService = activityService;
        this.id = `igo-map-target-${new Date().getTime()}`;
    }
    get view() {
        return this._view;
    }
    set view(value) {
        this._view = value;
        if (this.map !== undefined) {
            this.map.updateView(value);
        }
    }
    get controls() {
        return this._controls;
    }
    set controls(value) {
        this._controls = value;
        if (this.map !== undefined) {
            this.map.updateControls(value);
        }
    }
    ngOnInit() {
        this.status$$ = this.map.status$.subscribe(status => this.handleStatusChange(status));
    }
    ngAfterViewInit() {
        this.map.setTarget(this.id);
    }
    ngOnDestroy() {
        this.map.setTarget(undefined);
        this.activityService.unregister(this.activityId);
        this.status$$.unsubscribe();
    }
    handleStatusChange(status) {
        if (status === SubjectStatus.Working && this.activityId === undefined) {
            this.activityId = this.activityService.register();
        }
        else if (status === SubjectStatus.Done && this.activityId !== undefined) {
            this.activityService.unregister(this.activityId);
            this.activityId = undefined;
        }
    }
}
MapBrowserComponent.ɵfac = function MapBrowserComponent_Factory(t) { return new (t || MapBrowserComponent)(i0.ɵɵdirectiveInject(i1.ActivityService)); };
MapBrowserComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapBrowserComponent, selectors: [["igo-map-browser"]], inputs: { map: "map", view: "view" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "igo-map-browser-target", 3, "id"]], template: function MapBrowserComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵprojection(1);
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.id);
    } }, styles: ["[_nghost-%COMP%]{position:relative;display:block}[_nghost-%COMP%], .igo-map-browser-target[_ngcontent-%COMP%]{width:100%;height:100%}[_nghost-%COMP%]     igo-zoom-button{position:absolute;bottom:calc(40px + 5px + 5px);right:5px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){[_nghost-%COMP%]     igo-zoom-button{display:none}}[_nghost-%COMP%]     igo-offline-button{position:absolute;bottom:15px;right:5px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){[_nghost-%COMP%]     igo-offline-button{bottom:5px}}[_nghost-%COMP%]     igo-geolocate-button{position:absolute;bottom:5px;right:5px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){[_nghost-%COMP%]     igo-geolocate-button{bottom:5px}}[_nghost-%COMP%]     igo-rotation-button{position:absolute;top:calc(40px + 5px + 5px);right:5px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){[_nghost-%COMP%]     igo-rotation-button{bottom:calc(40px + 5px + 5px)}}[_nghost-%COMP%]     igo-home-extent-button{position:absolute;bottom:calc((3 * 40px) + 5px + (2 * 5px));right:5px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){[_nghost-%COMP%]     igo-home-extent-button{bottom:5px;right:calc((2 * 40px) + (3 * 5px))}}[_nghost-%COMP%]     igo-user-button{position:absolute;bottom:5px;right:calc(5px + 50px)}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){[_nghost-%COMP%]     igo-user-button{right:calc((2 * 40px) + (2 * 5px))}}[_nghost-%COMP%]     igo-baselayers-switcher{position:absolute;bottom:5px;left:5px}[_nghost-%COMP%]     .ol-attribution{flex-flow:row;left:calc(40px + 5px + 5px);bottom:5px;text-align:left;padding:0;margin-right:90px;background-color:#fff0;width:calc(100% - 100px)}[_nghost-%COMP%]     .ol-attribution.ol-logo-only{height:inherit}[_nghost-%COMP%]     .ol-attribution.ol-collapsed{background:none}[_nghost-%COMP%]     .ol-attribution.ol-collapsed button{transform:none}[_nghost-%COMP%]     .ol-attribution button{transform:rotate(180deg);background-color:#fff;cursor:pointer;outline:none}[_nghost-%COMP%]     .ol-scale-line-inner{color:#000;border-color:#000;text-shadow:white -1px -1px 3px,white 1px -1px 3px,white -1px 1px 3px,white 1px 1px 4px;box-shadow:0 1px 0 1px #fff9}[_nghost-%COMP%]     .ol-scale-line{background-color:#fff0;bottom:4px;transform:translate(-50%);left:50%}[_nghost-%COMP%]     .ol-scale-bar{background-color:#fff0;bottom:4px;transform:translate(-50%);left:50%}[_nghost-%COMP%]     .ol-scale-text{text-shadow:white -1px -1px 3px,white 1px -1px 3px,white -1px 1px 3px,white 1px 1px 4px}[_nghost-%COMP%]     .ol-scale-step-text{text-shadow:white -1px -1px 3px,white 1px -1px 3px,white -1px 1px 3px,white 1px 1px 4px}[_nghost-%COMP%]     canvas{display:block}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapBrowserComponent, [{
        type: Component,
        args: [{
                selector: 'igo-map-browser',
                templateUrl: './map-browser.component.html',
                styleUrls: ['./map-browser.component.scss']
            }]
    }], function () { return [{ type: i1.ActivityService }]; }, { map: [{
            type: Input
        }], view: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWJyb3dzZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWFwL21hcC1icm93c2VyL21hcC1icm93c2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9tYXAtYnJvd3Nlci9tYXAtYnJvd3Nlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBVzVDLE1BQU0sT0FBTyxtQkFBbUI7SUFnQzlCLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUY3QyxPQUFFLEdBQUcsa0JBQWtCLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUVFLENBQUM7SUExQnhELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBcUI7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFHRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLEtBQXlCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLGtCQUFrQixDQUFDLE1BQXFCO1FBQzlDLElBQUksTUFBTSxLQUFLLGFBQWEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25EO2FBQU0sSUFBSSxNQUFNLEtBQUssYUFBYSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUN6RSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDN0I7SUFDSCxDQUFDOztzRkF6RFUsbUJBQW1CO3NFQUFuQixtQkFBbUI7O1FDcEJoQyx5QkFBb0Q7UUFDcEQsa0JBQXlCOztRQURwQiwyQkFBUzs7dUZEb0JELG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7a0VBS1UsR0FBRztrQkFBWCxLQUFLO1lBR0YsSUFBSTtrQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3ViamVjdFN0YXR1cyB9IGZyb20gJ0BpZ28yL3V0aWxzJztcbmltcG9ydCB7IEFjdGl2aXR5U2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi9zaGFyZWQvbWFwJztcbmltcG9ydCB7IE1hcENvbnRyb2xzT3B0aW9ucywgTWFwVmlld09wdGlvbnMgfSBmcm9tICcuLi9zaGFyZWQvbWFwLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1tYXAtYnJvd3NlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAtYnJvd3Nlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hcC1icm93c2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFwQnJvd3NlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBhY3Rpdml0eUlkOiBzdHJpbmc7XG4gIHByaXZhdGUgc3RhdHVzJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoKSBtYXA6IElnb01hcDtcblxuICBASW5wdXQoKVxuICBnZXQgdmlldygpOiBNYXBWaWV3T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXc7XG4gIH1cbiAgc2V0IHZpZXcodmFsdWU6IE1hcFZpZXdPcHRpb25zKSB7XG4gICAgdGhpcy5fdmlldyA9IHZhbHVlO1xuICAgIGlmICh0aGlzLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1hcC51cGRhdGVWaWV3KHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfdmlldzogTWFwVmlld09wdGlvbnM7XG5cbiAgZ2V0IGNvbnRyb2xzKCk6IE1hcENvbnRyb2xzT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xzO1xuICB9XG5cbiAgc2V0IGNvbnRyb2xzKHZhbHVlOiBNYXBDb250cm9sc09wdGlvbnMpIHtcbiAgICB0aGlzLl9jb250cm9scyA9IHZhbHVlO1xuICAgIGlmICh0aGlzLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1hcC51cGRhdGVDb250cm9scyh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2NvbnRyb2xzOiBNYXBDb250cm9sc09wdGlvbnM7XG5cbiAgcHVibGljIGlkID0gYGlnby1tYXAtdGFyZ2V0LSR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2aXR5U2VydmljZTogQWN0aXZpdHlTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RhdHVzJCQgPSB0aGlzLm1hcC5zdGF0dXMkLnN1YnNjcmliZShzdGF0dXMgPT5cbiAgICAgIHRoaXMuaGFuZGxlU3RhdHVzQ2hhbmdlKHN0YXR1cylcbiAgICApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMubWFwLnNldFRhcmdldCh0aGlzLmlkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLnNldFRhcmdldCh1bmRlZmluZWQpO1xuICAgIHRoaXMuYWN0aXZpdHlTZXJ2aWNlLnVucmVnaXN0ZXIodGhpcy5hY3Rpdml0eUlkKTtcbiAgICB0aGlzLnN0YXR1cyQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXR1c0NoYW5nZShzdGF0dXM6IFN1YmplY3RTdGF0dXMpIHtcbiAgICBpZiAoc3RhdHVzID09PSBTdWJqZWN0U3RhdHVzLldvcmtpbmcgJiYgdGhpcy5hY3Rpdml0eUlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZpdHlJZCA9IHRoaXMuYWN0aXZpdHlTZXJ2aWNlLnJlZ2lzdGVyKCk7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFN1YmplY3RTdGF0dXMuRG9uZSAmJiB0aGlzLmFjdGl2aXR5SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5hY3Rpdml0eVNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLmFjdGl2aXR5SWQpO1xuICAgICAgdGhpcy5hY3Rpdml0eUlkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBbaWRdPVwiaWRcIiBjbGFzcz1cImlnby1tYXAtYnJvd3Nlci10YXJnZXRcIj48L2Rpdj5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiJdfQ==