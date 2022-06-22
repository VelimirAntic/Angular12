import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import * as moment_ from 'moment';
import { MatSlider } from '@angular/material/slider';
import * as i0 from "@angular/core";
import * as i1 from "../shared/ogc-filter-time.service";
import * as i2 from "@angular/material/slider";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
const moment = moment_;
export class OgcFilterTimeSliderComponent {
    constructor(ogcFilterTimeService) {
        this.ogcFilterTimeService = ogcFilterTimeService;
        this.changeProperty = new EventEmitter();
        this.sliderValue = 1;
        this.calculatedStep = 0;
        this._defaultDisplayFormat = 'DD/MM/YYYY HH:mm A';
        this._defaultSliderInterval = 2000;
        this.playIcon = 'play-circle';
        this.resetIcon = 'replay';
        this.sliderDisplayWith = this.sliderDisplayWith.bind(this);
    }
    get sliderInterval() {
        return this.currentFilter.sliderInterval === undefined
            ? this._defaultSliderInterval
            : this.currentFilter.sliderInterval;
    }
    get displayFormat() {
        var _a;
        if ((_a = this.currentFilter.sliderOptions) === null || _a === void 0 ? void 0 : _a.displayFormat) {
            return this.currentFilter.sliderOptions.displayFormat;
        }
        if (this.currentFilter.displayFormat) {
            return this.currentFilter.displayFormat;
        }
        return this._defaultDisplayFormat;
    }
    get beginMillisecond() {
        return this.ogcFilterTimeService.dateToNumber(this.begin);
    }
    get maxMillisecond() {
        return this.ogcFilterTimeService.dateToNumber(this.max);
    }
    get stepMillisecond() {
        return this.ogcFilterTimeService.stepMillisecond(this.datasource, this.currentFilter);
    }
    ngOnInit() {
        this.calculateStep();
        this.handleSliderInput({ value: 1 });
    }
    sliderDisplayWith(value) {
        let dateTmp = new Date(this.beginMillisecond + ((value - 1) * this.stepMillisecond));
        if (this.ogcFilterTimeService.stepIsYearDuration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter))) {
            const toAdd = moment.duration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter)).years();
            dateTmp = moment(this.beginMillisecond).add((value - 1) * toAdd, 'year').toDate();
        }
        else if (this.ogcFilterTimeService.stepIsMonthDuration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter))) {
            const toAdd = moment.duration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter)).months();
            dateTmp = moment(this.beginMillisecond).add((value - 1) * toAdd, 'month').toDate();
        }
        return moment(dateTmp).format(this.displayFormat);
    }
    playFilter(event) {
        if (this.interval) {
            this.stopFilter();
        }
        else {
            this.playIcon = 'pause-circle';
            this.interval = setInterval(that => {
                if (this.slider.value < this.calculatedStep) {
                    const _increment = '_increment';
                    const _emitInputEvent = '_emitInputEvent';
                    this.slider[_increment](1);
                    this.slider[_emitInputEvent]();
                }
                else {
                    this.stopFilter();
                }
            }, this.sliderInterval, this);
        }
    }
    stopFilter() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = undefined;
        this.playIcon = 'play-circle';
    }
    resetFilter(event) {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = undefined;
        this.playIcon = 'play-circle';
        this.slider.value = 1;
        const _increment = '_increment';
        const _emitInputEvent = '_emitInputEvent';
        this.slider[_emitInputEvent]();
    }
    handleSliderInput(matSliderChange) {
        if (matSliderChange) {
            if (this.ogcFilterTimeService.stepIsYearDuration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter))) {
                const toAdd = moment.duration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter)).years();
                const dateBeginTmp = moment(this.beginMillisecond).add((matSliderChange.value - 1) * toAdd, 'year').toDate();
                const dateEndTmp = moment(dateBeginTmp).add(toAdd, 'year').toDate();
                this.changeProperty.next({ value: moment(dateBeginTmp).toDate().toISOString(),
                    pos: 1, refreshFilter: false });
                this.changeProperty.next({ value: moment(dateEndTmp).toDate().toISOString(),
                    pos: 2, refreshFilter: true });
            }
            else if (this.ogcFilterTimeService.stepIsMonthDuration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter))) {
                const toAdd = moment.duration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter)).months();
                const dateBeginTmp = moment(this.beginMillisecond).add((matSliderChange.value - 1) * toAdd, 'month').toDate();
                const dateEndTmp = moment(dateBeginTmp).add(toAdd, 'month').toDate();
                this.changeProperty.next({ value: moment(dateBeginTmp).startOf('month').toDate().toISOString(),
                    pos: 1, refreshFilter: false });
                this.changeProperty.next({ value: moment(dateEndTmp).toDate().toISOString(),
                    pos: 2, refreshFilter: true });
            }
            else if (this.ogcFilterTimeService.stepIsDayDuration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter)) ||
                this.ogcFilterTimeService.stepIsHourDuration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter)) ||
                this.ogcFilterTimeService.stepIsMinuteDuration(this.ogcFilterTimeService.step(this.datasource, this.currentFilter))) {
                const dateTmp = new Date(this.beginMillisecond + (this.stepMillisecond * (matSliderChange.value - 1)));
                this.changeProperty.next({ value: dateTmp.toISOString(), pos: 1, refreshFilter: false });
                this.changeProperty.next({ value: new Date(this.ogcFilterTimeService.addStep(dateTmp.toISOString(), this.stepMillisecond)).toISOString(),
                    pos: 2, refreshFilter: true });
            }
        }
    }
    calculateStep() {
        for (let i = 1; (this.maxMillisecond - (this.beginMillisecond + (i * this.stepMillisecond))) >= -1; i++) {
            this.calculatedStep = i;
        }
    }
}
OgcFilterTimeSliderComponent.ɵfac = function OgcFilterTimeSliderComponent_Factory(t) { return new (t || OgcFilterTimeSliderComponent)(i0.ɵɵdirectiveInject(i1.OGCFilterTimeService)); };
OgcFilterTimeSliderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OgcFilterTimeSliderComponent, selectors: [["igo-ogc-filter-time-slider"]], viewQuery: function OgcFilterTimeSliderComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatSlider, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slider = _t.first);
    } }, inputs: { currentFilter: "currentFilter", begin: "begin", max: "max", datasource: "datasource" }, outputs: { changeProperty: "changeProperty" }, decls: 6, vars: 7, consts: [[1, "slider-container"], ["id", "time-slider", "thumbLabel", "", 3, "step", "min", "max", "ngModel", "displayWith", "ngModelChange", "input"], ["mat-icon-button", "", "color", "primary", 3, "click"], [3, "svgIcon"]], template: function OgcFilterTimeSliderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-slider", 1);
        i0.ɵɵlistener("ngModelChange", function OgcFilterTimeSliderComponent_Template_mat_slider_ngModelChange_1_listener($event) { return ctx.sliderValue = $event; })("input", function OgcFilterTimeSliderComponent_Template_mat_slider_input_1_listener($event) { return ctx.handleSliderInput($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵlistener("click", function OgcFilterTimeSliderComponent_Template_button_click_2_listener($event) { return ctx.playFilter($event); });
        i0.ɵɵelement(3, "mat-icon", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵlistener("click", function OgcFilterTimeSliderComponent_Template_button_click_4_listener($event) { return ctx.resetFilter($event); });
        i0.ɵɵelement(5, "mat-icon", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("step", 1)("min", 1)("max", ctx.calculatedStep)("ngModel", ctx.sliderValue)("displayWith", ctx.sliderDisplayWith);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("svgIcon", ctx.playIcon);
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("svgIcon", ctx.resetIcon);
    } }, directives: [i2.MatSlider, i3.NgControlStatus, i3.NgModel, i4.MatButton, i5.MatIcon], styles: ["input{text-align:center!important;margin:auto 5px!important}  .mat-slider-thumb{transform:scale(0)!important}  .mat-slider-thumb-label{transform:rotate(45deg)!important;border-radius:50% 50% 0!important;background-color:#ffd740!important}  .mat-slider-thumb-label-text{opacity:1!important;transform:rotate(135deg)!important}  .mat-slider-horizontal .mat-slider-thumb-label{top:10px!important;transform:rotate(225deg)!important}  .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(225deg)!important}.datetime-container[_ngcontent-%COMP%]{text-align:center}.slider-container[_ngcontent-%COMP%]{text-align:center}.datetime-input[_ngcontent-%COMP%]{display:inline-block;margin:5px 25px}.date-input[_ngcontent-%COMP%]{width:120px;margin-right:25px}.time-input[_ngcontent-%COMP%]{display:inherit;margin-right:25px}.hour-input[_ngcontent-%COMP%], .minute-input[_ngcontent-%COMP%]{width:40px}.minute-input[_ngcontent-%COMP%]{margin-left:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterTimeSliderComponent, [{
        type: Component,
        args: [{
                selector: 'igo-ogc-filter-time-slider',
                templateUrl: './ogc-filter-time-slider.component.html',
                styleUrls: ['./ogc-filter-time-slider.component.scss']
            }]
    }], function () { return [{ type: i1.OGCFilterTimeService }]; }, { currentFilter: [{
            type: Input
        }], begin: [{
            type: Input
        }], max: [{
            type: Input
        }], datasource: [{
            type: Input
        }], changeProperty: [{
            type: Output
        }], slider: [{
            type: ViewChild,
            args: [MatSlider]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlci10aW1lLXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvb2djLWZpbHRlci10aW1lL29nYy1maWx0ZXItdGltZS1zbGlkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZmlsdGVyL29nYy1maWx0ZXItdGltZS9vZ2MtZmlsdGVyLXRpbWUtc2xpZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQUNyRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFPdkIsTUFBTSxPQUFPLDRCQUE0QjtJQWdEdkMsWUFBbUIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUEzQ25ELG1CQUFjLEdBSW5CLElBQUksWUFBWSxFQUFPLENBQUM7UUFJN0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDbEIsMEJBQXFCLEdBQVcsb0JBQW9CLENBQUM7UUFDckQsMkJBQXNCLEdBQVcsSUFBSSxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsY0FBUyxHQUFHLFFBQVEsQ0FBQztRQStCMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQTlCRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJ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U0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9HQ0ZpbHRlclRpbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL29nYy1maWx0ZXItdGltZS5zZXJ2aWNlJztcblxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgTWF0U2xpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1vZ2MtZmlsdGVyLXRpbWUtc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29nYy1maWx0ZXItdGltZS1zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vZ2MtZmlsdGVyLXRpbWUtc2xpZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT2djRmlsdGVyVGltZVNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGN1cnJlbnRGaWx0ZXI6IGFueTtcbiAgQElucHV0KCkgYmVnaW46IGFueTtcbiAgQElucHV0KCkgbWF4OiBhbnk7XG4gIEBJbnB1dCgpIGRhdGFzb3VyY2U6IGFueTtcbiAgQE91dHB1dCgpIGNoYW5nZVByb3BlcnR5OiBFdmVudEVtaXR0ZXI8e1xuICAgIHZhbHVlOiBhbnk7XG4gICAgcG9zOiBudW1iZXI7XG4gICAgcmVmcmVzaEZpbHRlcjogYm9vbGVhbjtcbiAgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZChNYXRTbGlkZXIpIHNsaWRlcjogTWF0U2xpZGVyO1xuXG4gIGludGVydmFsO1xuICBzbGlkZXJWYWx1ZTogbnVtYmVyID0gMTtcbiAgY2FsY3VsYXRlZFN0ZXA6IG51bWJlciA9IDA7XG4gIHJlYWRvbmx5IF9kZWZhdWx0RGlzcGxheUZvcm1hdDogc3RyaW5nID0gJ0REL01NL1lZWVkgSEg6bW0gQSc7XG4gIHJlYWRvbmx5IF9kZWZhdWx0U2xpZGVySW50ZXJ2YWw6IG51bWJlciA9IDIwMDA7XG4gIHB1YmxpYyBwbGF5SWNvbiA9ICdwbGF5LWNpcmNsZSc7XG4gIHB1YmxpYyByZXNldEljb24gPSAncmVwbGF5JztcblxuICBnZXQgc2xpZGVySW50ZXJ2YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RmlsdGVyLnNsaWRlckludGVydmFsID09PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fZGVmYXVsdFNsaWRlckludGVydmFsXG4gICAgICA6IHRoaXMuY3VycmVudEZpbHRlci5zbGlkZXJJbnRlcnZhbDtcbiAgfVxuXG4gIGdldCBkaXNwbGF5Rm9ybWF0KCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZpbHRlci5zbGlkZXJPcHRpb25zPy5kaXNwbGF5Rm9ybWF0KXtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRGaWx0ZXIuc2xpZGVyT3B0aW9ucy5kaXNwbGF5Rm9ybWF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50RmlsdGVyLmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRGaWx0ZXIuZGlzcGxheUZvcm1hdDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHREaXNwbGF5Rm9ybWF0O1xuICB9XG5cbiAgZ2V0IGJlZ2luTWlsbGlzZWNvbmQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5kYXRlVG9OdW1iZXIodGhpcy5iZWdpbik7XG4gIH1cblxuICBnZXQgbWF4TWlsbGlzZWNvbmQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5kYXRlVG9OdW1iZXIodGhpcy5tYXgpO1xuICB9XG5cbiAgZ2V0IHN0ZXBNaWxsaXNlY29uZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXBNaWxsaXNlY29uZCh0aGlzLmRhdGFzb3VyY2UsIHRoaXMuY3VycmVudEZpbHRlcik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb2djRmlsdGVyVGltZVNlcnZpY2U6IE9HQ0ZpbHRlclRpbWVTZXJ2aWNlKSB7XG4gICAgdGhpcy5zbGlkZXJEaXNwbGF5V2l0aCA9IHRoaXMuc2xpZGVyRGlzcGxheVdpdGguYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5jYWxjdWxhdGVTdGVwKCk7XG4gICAgdGhpcy5oYW5kbGVTbGlkZXJJbnB1dCh7dmFsdWU6IDF9KTtcbiAgfVxuXG4gIHNsaWRlckRpc3BsYXlXaXRoKHZhbHVlKSB7XG4gICAgbGV0IGRhdGVUbXAgPSBuZXcgRGF0ZSh0aGlzLmJlZ2luTWlsbGlzZWNvbmQgKyAoKHZhbHVlIC0gMSkgKiB0aGlzLnN0ZXBNaWxsaXNlY29uZCkpO1xuXG4gICAgaWYgKHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzWWVhckR1cmF0aW9uKHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcCh0aGlzLmRhdGFzb3VyY2UsIHRoaXMuY3VycmVudEZpbHRlcikpKSB7XG4gICAgICBjb25zdCB0b0FkZCA9IG1vbWVudC5kdXJhdGlvbih0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXAodGhpcy5kYXRhc291cmNlLCB0aGlzLmN1cnJlbnRGaWx0ZXIpKS55ZWFycygpO1xuICAgICAgZGF0ZVRtcCA9IG1vbWVudCh0aGlzLmJlZ2luTWlsbGlzZWNvbmQpLmFkZCgodmFsdWUgLSAxKSAqIHRvQWRkLCAneWVhcicpLnRvRGF0ZSgpO1xuICAgIH0gZWxzZSBpZiAoIHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzTW9udGhEdXJhdGlvbih0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXAodGhpcy5kYXRhc291cmNlLCB0aGlzLmN1cnJlbnRGaWx0ZXIpKSkge1xuICAgICAgY29uc3QgdG9BZGQgPSBtb21lbnQuZHVyYXRpb24odGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5zdGVwKHRoaXMuZGF0YXNvdXJjZSwgdGhpcy5jdXJyZW50RmlsdGVyKSkubW9udGhzKCk7XG4gICAgICBkYXRlVG1wID0gbW9tZW50KHRoaXMuYmVnaW5NaWxsaXNlY29uZCkuYWRkKCh2YWx1ZSAtIDEpICogdG9BZGQsICdtb250aCcpLnRvRGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtb21lbnQoZGF0ZVRtcCkuZm9ybWF0KHRoaXMuZGlzcGxheUZvcm1hdCk7XG4gIH1cblxuICBwbGF5RmlsdGVyKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xuICAgICAgdGhpcy5zdG9wRmlsdGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheUljb24gPSAncGF1c2UtY2lyY2xlJztcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgdGhhdCA9PiB7XG5cbiAgICAgICAgICBpZiAodGhpcy5zbGlkZXIudmFsdWUgPCB0aGlzLmNhbGN1bGF0ZWRTdGVwKSB7XG4gICAgICAgICAgICBjb25zdCBfaW5jcmVtZW50ID0gJ19pbmNyZW1lbnQnO1xuICAgICAgICAgICAgY29uc3QgX2VtaXRJbnB1dEV2ZW50ID0gJ19lbWl0SW5wdXRFdmVudCc7XG4gICAgICAgICAgICB0aGlzLnNsaWRlcltfaW5jcmVtZW50XSgxKTtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyW19lbWl0SW5wdXRFdmVudF0oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wRmlsdGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0aGlzLnNsaWRlckludGVydmFsLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN0b3BGaWx0ZXIoKSB7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuICAgIHRoaXMuaW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wbGF5SWNvbiA9ICdwbGF5LWNpcmNsZSc7XG4gIH1cblxuICByZXNldEZpbHRlcihldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuICAgIHRoaXMuaW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wbGF5SWNvbiA9ICdwbGF5LWNpcmNsZSc7XG4gICAgdGhpcy5zbGlkZXIudmFsdWUgPSAxO1xuICAgIGNvbnN0IF9pbmNyZW1lbnQgPSAnX2luY3JlbWVudCc7XG4gICAgY29uc3QgX2VtaXRJbnB1dEV2ZW50ID0gJ19lbWl0SW5wdXRFdmVudCc7XG4gICAgdGhpcy5zbGlkZXJbX2VtaXRJbnB1dEV2ZW50XSgpO1xuICB9XG5cbiAgaGFuZGxlU2xpZGVySW5wdXQobWF0U2xpZGVyQ2hhbmdlKSB7XG4gICAgaWYgKG1hdFNsaWRlckNoYW5nZSkge1xuXG4gICAgICBpZiAoIHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzWWVhckR1cmF0aW9uKHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcCh0aGlzLmRhdGFzb3VyY2UsIHRoaXMuY3VycmVudEZpbHRlcikpICkge1xuICAgICAgICBjb25zdCB0b0FkZCA9IG1vbWVudC5kdXJhdGlvbih0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXAodGhpcy5kYXRhc291cmNlLCB0aGlzLmN1cnJlbnRGaWx0ZXIpKS55ZWFycygpO1xuICAgICAgICBjb25zdCBkYXRlQmVnaW5UbXAgPSBtb21lbnQodGhpcy5iZWdpbk1pbGxpc2Vjb25kKS5hZGQoKG1hdFNsaWRlckNoYW5nZS52YWx1ZSAtIDEpICogdG9BZGQsICd5ZWFyJykudG9EYXRlKCk7XG4gICAgICAgIGNvbnN0IGRhdGVFbmRUbXAgPSBtb21lbnQoZGF0ZUJlZ2luVG1wKS5hZGQodG9BZGQsICd5ZWFyJykudG9EYXRlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlUHJvcGVydHkubmV4dCh7dmFsdWU6IG1vbWVudChkYXRlQmVnaW5UbXApLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IDEsIHJlZnJlc2hGaWx0ZXI6IGZhbHNlfSk7XG4gICAgICAgIHRoaXMuY2hhbmdlUHJvcGVydHkubmV4dCh7dmFsdWU6IG1vbWVudChkYXRlRW5kVG1wKS50b0RhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiAyLCByZWZyZXNoRmlsdGVyOiB0cnVlfSk7XG5cbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzTW9udGhEdXJhdGlvbih0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXAodGhpcy5kYXRhc291cmNlLCB0aGlzLmN1cnJlbnRGaWx0ZXIpKSApIHtcbiAgICAgICAgY29uc3QgdG9BZGQgPSBtb21lbnQuZHVyYXRpb24odGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5zdGVwKHRoaXMuZGF0YXNvdXJjZSwgdGhpcy5jdXJyZW50RmlsdGVyKSkubW9udGhzKCk7XG4gICAgICAgIGNvbnN0IGRhdGVCZWdpblRtcCA9IG1vbWVudCh0aGlzLmJlZ2luTWlsbGlzZWNvbmQpLmFkZCgobWF0U2xpZGVyQ2hhbmdlLnZhbHVlIC0gMSkgKiB0b0FkZCwgJ21vbnRoJykudG9EYXRlKCk7XG4gICAgICAgIGNvbnN0IGRhdGVFbmRUbXAgPSBtb21lbnQoZGF0ZUJlZ2luVG1wKS5hZGQodG9BZGQsICdtb250aCcpLnRvRGF0ZSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVByb3BlcnR5Lm5leHQoe3ZhbHVlOiBtb21lbnQoZGF0ZUJlZ2luVG1wKS5zdGFydE9mKCdtb250aCcpLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IDEsIHJlZnJlc2hGaWx0ZXI6IGZhbHNlfSk7XG4gICAgICAgIHRoaXMuY2hhbmdlUHJvcGVydHkubmV4dCh7dmFsdWU6IG1vbWVudChkYXRlRW5kVG1wKS50b0RhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiAyLCByZWZyZXNoRmlsdGVyOiB0cnVlfSk7XG5cbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzRGF5RHVyYXRpb24odGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5zdGVwKHRoaXMuZGF0YXNvdXJjZSwgdGhpcy5jdXJyZW50RmlsdGVyKSkgfHxcbiAgICAgICAgICB0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXBJc0hvdXJEdXJhdGlvbih0aGlzLm9nY0ZpbHRlclRpbWVTZXJ2aWNlLnN0ZXAodGhpcy5kYXRhc291cmNlLCB0aGlzLmN1cnJlbnRGaWx0ZXIpKSB8fFxuICAgICAgICAgIHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2Uuc3RlcElzTWludXRlRHVyYXRpb24odGhpcy5vZ2NGaWx0ZXJUaW1lU2VydmljZS5zdGVwKHRoaXMuZGF0YXNvdXJjZSwgdGhpcy5jdXJyZW50RmlsdGVyKSkgKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlVG1wID0gbmV3IERhdGUodGhpcy5iZWdpbk1pbGxpc2Vjb25kICsgKHRoaXMuc3RlcE1pbGxpc2Vjb25kICogKG1hdFNsaWRlckNoYW5nZS52YWx1ZSAtIDEpKSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVByb3BlcnR5Lm5leHQoe3ZhbHVlOiBkYXRlVG1wLnRvSVNPU3RyaW5nKCksIHBvczogMSwgcmVmcmVzaEZpbHRlcjogZmFsc2V9KTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvcGVydHkubmV4dCh7dmFsdWU6IG5ldyBEYXRlKHRoaXMub2djRmlsdGVyVGltZVNlcnZpY2UuYWRkU3RlcChkYXRlVG1wLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwTWlsbGlzZWNvbmQpKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogMiwgcmVmcmVzaEZpbHRlcjogdHJ1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZVN0ZXAoKXtcbiAgICBmb3IgKGxldCBpID0gMTsgKHRoaXMubWF4TWlsbGlzZWNvbmQgLSAodGhpcy5iZWdpbk1pbGxpc2Vjb25kICsgKGkgKiB0aGlzLnN0ZXBNaWxsaXNlY29uZCkpKSA+PSAtMTsgaSsrKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZWRTdGVwID0gaTtcbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInNsaWRlci1jb250YWluZXJcIj5cbiAgPG1hdC1zbGlkZXJcbiAgICBpZD1cInRpbWUtc2xpZGVyXCJcbiAgICBbc3RlcF09XCIxXCJcbiAgICBbbWluXT1cIjFcIlxuICAgIFttYXhdPVwiY2FsY3VsYXRlZFN0ZXBcIlxuICAgIFsobmdNb2RlbCldPVwic2xpZGVyVmFsdWVcIlxuICAgIFtkaXNwbGF5V2l0aF09XCJzbGlkZXJEaXNwbGF5V2l0aFwiXG4gICAgKGlucHV0KT1cImhhbmRsZVNsaWRlcklucHV0KCRldmVudClcIlxuICAgIHRodW1iTGFiZWxcbiAgICA+XG4gIDwvbWF0LXNsaWRlcj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInBsYXlGaWx0ZXIoJGV2ZW50KVwiPlxuICAgIDxtYXQtaWNvbiBbc3ZnSWNvbl09XCJwbGF5SWNvblwiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwicmVzZXRGaWx0ZXIoJGV2ZW50KVwiPlxuICAgIDxtYXQtaWNvbiBzdmdJY29uPVwie3tyZXNldEljb259fVwiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICBcbjwvZGl2PiJdfQ==