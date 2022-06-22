import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SpatialFilterType } from '../../shared/spatial-filter.enum';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
function SpatialFilterTypeComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const queryType_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", queryType_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.terrapi." + queryType_r1), " ");
} }
/**
 * Spatial Filter Type
 */
export class SpatialFilterTypeComponent {
    constructor() {
        this.queryType = ['Arrond', 'CircFed', 'CircProv', 'DirReg', 'Mun', 'MRC', 'AdmRegion', 'RegTour'];
        this.selectedTypeIndex = new FormControl(0);
        /**
         * Reference to the SpatialFIlterType enum
         * @internal
         */
        this.spatialType = SpatialFilterType;
        this.activeDrawType = this.spatialType.Polygon;
        this.layers = [];
        this.eventType = new EventEmitter();
        this.eventQueryType = new EventEmitter();
        this.zoneChange = new EventEmitter();
        this.zoneWithBufferChange = new EventEmitter();
        this.bufferChange = new EventEmitter();
        this.measureUnitChange = new EventEmitter();
    }
    get store() {
        return this._store;
    }
    set store(store) {
        this._store = store;
    }
    ngOnInit() {
        if (this.selectedTypeIndex.value === 0) {
            this.type = this.spatialType.Predefined;
        }
        if (this.selectedTypeIndex.value === 1) {
            this.type = this.activeDrawType;
        }
        this.eventType.emit(this.type);
    }
    onTypeChange(event) {
        if (this.selectedTypeIndex.value === 0) {
            this.type = SpatialFilterType.Predefined;
        }
        if (this.selectedTypeIndex.value === 1) {
            this.type = this.activeDrawType;
        }
        this.eventType.emit(this.type);
    }
    onDrawTypeChange(spatialType) {
        this.activeDrawType = spatialType;
        this.eventType.emit(this.activeDrawType);
    }
    onSelectionChange() {
        this.eventQueryType.emit(this.selectedQueryType);
        this.zoneChange.emit(undefined);
    }
}
SpatialFilterTypeComponent.ɵfac = function SpatialFilterTypeComponent_Factory(t) { return new (t || SpatialFilterTypeComponent)(); };
SpatialFilterTypeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SpatialFilterTypeComponent, selectors: [["igo-spatial-filter-type"]], inputs: { store: "store", selectedQueryType: "selectedQueryType", zone: "zone", layers: "layers" }, outputs: { eventType: "eventType", eventQueryType: "eventQueryType", zoneChange: "zoneChange", zoneWithBufferChange: "zoneWithBufferChange", bufferChange: "bufferChange", measureUnitChange: "measureUnitChange" }, decls: 20, vars: 25, consts: [[3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], [3, "label"], [3, "value", "selectionChange", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "store", "queryType", "zone", "layers", "zoneChange", "zoneWithBufferChange", "bufferChange", "measureUnitChange"], [1, "spatial-type-toggle"], [3, "value", "change"], [3, "value", "matTooltip"], ["svgIcon", "pentagon-outline"], ["svgIcon", "record-circle-outline"], [3, "value"]], template: function SpatialFilterTypeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group", 0);
        i0.ɵɵlistener("selectedIndexChange", function SpatialFilterTypeComponent_Template_mat_tab_group_selectedIndexChange_0_listener($event) { return ctx.selectedTypeIndex.setValue($event); })("selectedTabChange", function SpatialFilterTypeComponent_Template_mat_tab_group_selectedTabChange_0_listener($event) { return ctx.onTypeChange($event); });
        i0.ɵɵelementStart(1, "mat-tab", 1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementStart(3, "mat-form-field");
        i0.ɵɵelementStart(4, "mat-label");
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-select", 2);
        i0.ɵɵlistener("selectionChange", function SpatialFilterTypeComponent_Template_mat_select_selectionChange_7_listener() { return ctx.onSelectionChange(); })("valueChange", function SpatialFilterTypeComponent_Template_mat_select_valueChange_7_listener($event) { return ctx.selectedQueryType = $event; });
        i0.ɵɵtemplate(8, SpatialFilterTypeComponent_mat_option_8_Template, 3, 4, "mat-option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "igo-spatial-filter-list", 4);
        i0.ɵɵlistener("zoneChange", function SpatialFilterTypeComponent_Template_igo_spatial_filter_list_zoneChange_9_listener($event) { return ctx.zoneChange.emit($event); })("zoneWithBufferChange", function SpatialFilterTypeComponent_Template_igo_spatial_filter_list_zoneWithBufferChange_9_listener($event) { return ctx.zoneWithBufferChange.emit($event); })("bufferChange", function SpatialFilterTypeComponent_Template_igo_spatial_filter_list_bufferChange_9_listener($event) { return ctx.bufferChange.emit($event); })("measureUnitChange", function SpatialFilterTypeComponent_Template_igo_spatial_filter_list_measureUnitChange_9_listener($event) { return ctx.measureUnitChange.emit($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-tab", 1);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementStart(12, "div", 5);
        i0.ɵɵelementStart(13, "mat-button-toggle-group", 6);
        i0.ɵɵlistener("change", function SpatialFilterTypeComponent_Template_mat_button_toggle_group_change_13_listener($event) { return ctx.onDrawTypeChange($event.value); });
        i0.ɵɵelementStart(14, "mat-button-toggle", 7);
        i0.ɵɵpipe(15, "translate");
        i0.ɵɵelement(16, "mat-icon", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-button-toggle", 7);
        i0.ɵɵpipe(18, "translate");
        i0.ɵɵelement(19, "mat-icon", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("selectedIndex", ctx.selectedTypeIndex.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(2, 15, "igo.geo.spatialFilter.predefined"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 17, "igo.geo.spatialFilter.searchLabel"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.selectedQueryType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.queryType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("store", ctx.store)("queryType", ctx.selectedQueryType)("zone", ctx.zone)("layers", ctx.layers);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(11, 19, "igo.geo.spatialFilter.draw"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.activeDrawType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.spatialType.Polygon)("matTooltip", i0.ɵɵpipeBind1(15, 21, "igo.geo.spatialFilter.drawPolygon"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.spatialType.Point)("matTooltip", i0.ɵɵpipeBind1(18, 23, "igo.geo.spatialFilter.drawCircle"));
    } }, styles: [".mat-form-field[_ngcontent-%COMP%]{padding:5px;width:95%;margin-left:2px}.mat-tab-group[_ngcontent-%COMP%]     .mat-tab-body-content{overflow:hidden}.mat-tab-group[_ngcontent-%COMP%]     .mat-tab-label{padding:10px}.mat-tab-group[_ngcontent-%COMP%]     .mat-tab-body-wrapper{margin-top:5px}.spatial-type-toggle[_ngcontent-%COMP%]{padding:10px;text-align:center}.spatial-type-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{width:50%}.spatial-type-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:50%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpatialFilterTypeComponent, [{
        type: Component,
        args: [{
                selector: 'igo-spatial-filter-type',
                templateUrl: './spatial-filter-type.component.html',
                styleUrls: ['./spatial-filter-type.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { store: [{
            type: Input
        }], selectedQueryType: [{
            type: Input
        }], zone: [{
            type: Input
        }], layers: [{
            type: Input
        }], eventType: [{
            type: Output
        }], eventQueryType: [{
            type: Output
        }], zoneChange: [{
            type: Output
        }], zoneWithBufferChange: [{
            type: Output
        }], bufferChange: [{
            type: Output
        }], measureUnitChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhdGlhbC1maWx0ZXItdHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvc3BhdGlhbC1maWx0ZXIvc3BhdGlhbC1maWx0ZXItdHlwZS9zcGF0aWFsLWZpbHRlci10eXBlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9zcGF0aWFsLWZpbHRlci9zcGF0aWFsLWZpbHRlci10eXBlL3NwYXRpYWwtZmlsdGVyLXR5cGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsdUJBQXVCLEVBQ3ZCLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUEwQixpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lDQXJDLHNDQUFvRTtJQUNsRSxZQUNGOztJQUFBLGlCQUFhOzs7SUFGbUMsb0NBQW1CO0lBQ2pFLGVBQ0Y7SUFERSx3RkFDRjs7QURJUjs7R0FFRztBQU9ILE1BQU0sT0FBTywwQkFBMEI7SUF3Q3JDO1FBN0JPLGNBQVMsR0FBYSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4RyxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5Qzs7O1dBR0c7UUFDSSxnQkFBVyxHQUFHLGlCQUFpQixDQUFDO1FBRWhDLG1CQUFjLEdBQXNCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBTTNELFdBQU0sR0FBWSxFQUFFLENB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d0Q7UUFBeEQsaUZBQXdEO1FBRWxELGVBQW1EO1FBQW5ELGdGQUFtRDtRQUNWLGVBQTZCO1FBQTdCLDZDQUE2QjtRQUM3QyxlQUFZO1FBQVosdUNBQVk7UUFNaEQsZUFBZTtRQUFmLGlDQUFlLG9DQUFBLGtCQUFBLHNCQUFBO1FBV1YsZUFBa0Q7UUFBbEQsNEVBQWtEO1FBR3JELGVBQXdCO1FBQXhCLDBDQUF3QjtRQUVMLGVBQTZCO1FBQTdCLCtDQUE2QiwyRUFBQTtRQUc3QixlQUEyQjtRQUEzQiw2Q0FBMkIsMEVBQUE7O3VGRFZ6QywwQkFBMEI7Y0FOdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtzQ0FJSyxLQUFLO2tCQURSLEtBQUs7WUFvQkcsaUJBQWlCO2tCQUF6QixLQUFLO1lBRUcsSUFBSTtrQkFBWixLQUFLO1lBRUcsTUFBTTtrQkFBZCxLQUFLO1lBSUksU0FBUztrQkFBbEIsTUFBTTtZQUVHLGNBQWM7a0JBQXZCLE1BQU07WUFFRyxVQUFVO2tCQUFuQixNQUFNO1lBQ0csb0JBQW9CO2tCQUE3QixNQUFNO1lBRUcsWUFBWTtrQkFBckIsTUFBTTtZQUNHLGlCQUFpQjtrQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3BhdGlhbEZpbHRlclF1ZXJ5VHlwZSwgU3BhdGlhbEZpbHRlclR5cGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc3BhdGlhbC1maWx0ZXIuZW51bSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVudGl0eVN0b3JlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlJztcbmltcG9ydCB7IE1lYXN1cmVMZW5ndGhVbml0IH0gZnJvbSAnLi4vLi4vLi4vbWVhc3VyZSc7XG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4uLy4uLy4uL2xheWVyJztcblxuLyoqXG4gKiBTcGF0aWFsIEZpbHRlciBUeXBlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1zcGF0aWFsLWZpbHRlci10eXBlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwYXRpYWwtZmlsdGVyLXR5cGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zcGF0aWFsLWZpbHRlci10eXBlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNwYXRpYWxGaWx0ZXJUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBnZXQgc3RvcmUoKTogRW50aXR5U3RvcmU8RmVhdHVyZT4ge1xuICAgIHJldHVybiB0aGlzLl9zdG9yZTtcbiAgfVxuICBzZXQgc3RvcmUoc3RvcmU6IEVudGl0eVN0b3JlPEZlYXR1cmU+KSB7XG4gICAgdGhpcy5fc3RvcmUgPSBzdG9yZTtcbiAgfVxuICBwcml2YXRlIF9zdG9yZTogRW50aXR5U3RvcmU8RmVhdHVyZT47XG5cbiAgcHVibGljIHF1ZXJ5VHlwZTogc3RyaW5nW10gPSBbJ0Fycm9uZCcsICdDaXJjRmVkJywgJ0NpcmNQcm92JywgJ0RpclJlZycsICdNdW4nLCAnTVJDJywgJ0FkbVJlZ2lvbicsICdSZWdUb3VyJ107XG4gIHB1YmxpYyBzZWxlY3RlZFR5cGVJbmRleCA9IG5ldyBGb3JtQ29udHJvbCgwKTtcblxuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIHRoZSBTcGF0aWFsRklsdGVyVHlwZSBlbnVtXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIHNwYXRpYWxUeXBlID0gU3BhdGlhbEZpbHRlclR5cGU7XG5cbiAgcHVibGljIGFjdGl2ZURyYXdUeXBlOiBTcGF0aWFsRmlsdGVyVHlwZSA9IHRoaXMuc3BhdGlhbFR5cGUuUG9seWdvbjtcblxuICBASW5wdXQoKSBzZWxlY3RlZFF1ZXJ5VHlwZTogU3BhdGlhbEZpbHRlclF1ZXJ5VHlwZTtcblxuICBASW5wdXQoKSB6b25lOiBGZWF0dXJlO1xuXG4gIEBJbnB1dCgpIGxheWVyczogTGF5ZXJbXSA9IFtdO1xuXG4gIHB1YmxpYyB0eXBlOiBTcGF0aWFsRmlsdGVyVHlwZTtcblxuICBAT3V0cHV0KCkgZXZlbnRUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxTcGF0aWFsRmlsdGVyVHlwZT4oKTtcblxuICBAT3V0cHV0KCkgZXZlbnRRdWVyeVR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyPFNwYXRpYWxGaWx0ZXJRdWVyeVR5cGU+KCk7XG5cbiAgQE91dHB1dCgpIHpvbmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZlYXR1cmU+KCk7XG4gIEBPdXRwdXQoKSB6b25lV2l0aEJ1ZmZlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RmVhdHVyZT4oKTtcblxuICBAT3V0cHV0KCkgYnVmZmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBtZWFzdXJlVW5pdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWVhc3VyZUxlbmd0aFVuaXQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVHlwZUluZGV4LnZhbHVlID09PSAwKSB7XG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLnNwYXRpYWxUeXBlLlByZWRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkVHlwZUluZGV4LnZhbHVlID09PSAxKSB7XG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLmFjdGl2ZURyYXdUeXBlO1xuICAgIH1cbiAgICB0aGlzLmV2ZW50VHlwZS5lbWl0KHRoaXMudHlwZSk7XG4gIH1cblxuICBvblR5cGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFR5cGVJbmRleC52YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy50eXBlID0gU3BhdGlhbEZpbHRlclR5cGUuUHJlZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUeXBlSW5kZXgudmFsdWUgPT09IDEpIHtcbiAgICAgIHRoaXMudHlwZSA9IHRoaXMuYWN0aXZlRHJhd1R5cGU7XG4gICAgfVxuICAgIHRoaXMuZXZlbnRUeXBlLmVtaXQodGhpcy50eXBlKTtcbiAgfVxuXG4gIG9uRHJhd1R5cGVDaGFuZ2Uoc3BhdGlhbFR5cGU6IFNwYXRpYWxGaWx0ZXJUeXBlKSB7XG4gICAgdGhpcy5hY3RpdmVEcmF3VHlwZSA9IHNwYXRpYWxUeXBlO1xuICAgIHRoaXMuZXZlbnRUeXBlLmVtaXQodGhpcy5hY3RpdmVEcmF3VHlwZSk7XG4gIH1cblxuICBvblNlbGVjdGlvbkNoYW5nZSgpIHtcbiAgICB0aGlzLmV2ZW50UXVlcnlUeXBlLmVtaXQodGhpcy5zZWxlY3RlZFF1ZXJ5VHlwZSk7XG4gICAgdGhpcy56b25lQ2hhbmdlLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxufVxuIiwiPG1hdC10YWItZ3JvdXBcbiAgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWRUeXBlSW5kZXgudmFsdWVcIlxuICAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XCJzZWxlY3RlZFR5cGVJbmRleC5zZXRWYWx1ZSgkZXZlbnQpXCJcbiAgKHNlbGVjdGVkVGFiQ2hhbmdlKT1cIm9uVHlwZUNoYW5nZSgkZXZlbnQpXCI+XG5cbiAgPG1hdC10YWIgW2xhYmVsXT1cIidpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIucHJlZGVmaW5lZCcgfMKgdHJhbnNsYXRlXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD57eydpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuc2VhcmNoTGFiZWwnIHwgdHJhbnNsYXRlfX08L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0IChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoKVwiIFsodmFsdWUpXT1cInNlbGVjdGVkUXVlcnlUeXBlXCI+XG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBxdWVyeVR5cGUgb2YgcXVlcnlUeXBlXCIgW3ZhbHVlXT1cInF1ZXJ5VHlwZVwiPlxuICAgICAgICAgIHt7KCdpZ28uZ2VvLnRlcnJhcGkuJyArIHF1ZXJ5VHlwZSkgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8aWdvLXNwYXRpYWwtZmlsdGVyLWxpc3RcbiAgICAgIFtzdG9yZV09XCJzdG9yZVwiXG4gICAgICBbcXVlcnlUeXBlXT1cInNlbGVjdGVkUXVlcnlUeXBlXCJcbiAgICAgIFt6b25lXT1cInpvbmVcIlxuICAgICAgW2xheWVyc109XCJsYXllcnNcIlxuICAgICAgKHpvbmVDaGFuZ2UpPVwiem9uZUNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgICAgKHpvbmVXaXRoQnVmZmVyQ2hhbmdlKT1cInpvbmVXaXRoQnVmZmVyQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAoYnVmZmVyQ2hhbmdlKT1cImJ1ZmZlckNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgICAgKG1lYXN1cmVVbml0Q2hhbmdlKT1cIm1lYXN1cmVVbml0Q2hhbmdlLmVtaXQoJGV2ZW50KVwiPlxuICAgIDwvaWdvLXNwYXRpYWwtZmlsdGVyLWxpc3Q+XG4gIDwvbWF0LXRhYj5cblxuICA8bWF0LXRhYiBbbGFiZWxdPVwiJ2lnby5nZW8uc3BhdGlhbEZpbHRlci5kcmF3JyB8wqB0cmFuc2xhdGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3BhdGlhbC10eXBlLXRvZ2dsZVwiPlxuICAgICAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwXG4gICAgICAgIFt2YWx1ZV09XCJhY3RpdmVEcmF3VHlwZVwiXG4gICAgICAgIChjaGFuZ2UpPVwib25EcmF3VHlwZUNoYW5nZSgkZXZlbnQudmFsdWUpXCI+XG4gICAgICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSBbdmFsdWVdPVwic3BhdGlhbFR5cGUuUG9seWdvblwiIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuZHJhd1BvbHlnb24nIHzCoHRyYW5zbGF0ZVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJwZW50YWdvbi1vdXRsaW5lXCI+PC9tYXQtaWNvbj5cbiAgICAgICAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICAgICAgPG1hdC1idXR0b24tdG9nZ2xlIFt2YWx1ZV09XCJzcGF0aWFsVHlwZS5Qb2ludFwiIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuZHJhd0NpcmNsZScgfMKgdHJhbnNsYXRlXCI+XG4gICAgICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cInJlY29yZC1jaXJjbGUtb3V0bGluZVwiPjwvbWF0LWljb24+XG4gICAgICAgIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuICAgIDwvZGl2PlxuICA8L21hdC10YWI+XG5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==