import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SpatialFilterType } from './../../shared/spatial-filter.enum';
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MeasureLengthUnit } from '../../../measure/shared';
import * as i0 from "@angular/core";
import * as i1 from "./../../shared/spatial-filter.service";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/autocomplete";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/select";
import * as i9 from "@angular/material/core";
import * as i10 from "@ngx-translate/core";
function SpatialFilterListComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entities_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", entities_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", entities_r4.properties.nom, " ");
} }
function SpatialFilterListComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const measureUnit_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", measureUnit_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.geo.measure." + measureUnit_r5), " ");
} }
export class SpatialFilterListComponent {
    constructor(spatialFilterService, messageService, languageService) {
        this.spatialFilterService = spatialFilterService;
        this.messageService = messageService;
        this.languageService = languageService;
        this.layers = [];
        this.measureUnit = MeasureLengthUnit.Meters;
        this.formControl = new FormControl();
        this.bufferFormControl = new FormControl();
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
    get queryType() {
        return this._queryType;
    }
    set queryType(queryType) {
        this.formControl.setValue('');
        this._queryType = queryType;
    }
    get zone() {
        return this._zone;
    }
    set zone(value) {
        this._zone = value;
        if (!value) {
            this.zoneWithBuffer = undefined;
            this.bufferFormControl.setValue(0);
        }
    }
    /**
     * Available measure units for the measure type given
     * @internal
     */
    get measureUnits() {
        return [MeasureLengthUnit.Meters, MeasureLengthUnit.Kilometers];
    }
    ngOnInit() {
        this.formValueChanges$$ = this.formControl.valueChanges.subscribe((value) => {
            if (value.length) {
                this.store.view.filter((feature) => {
                    const filterNormalized = value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    const featureNameNormalized = feature.properties.nom.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    return featureNameNormalized.includes(filterNormalized);
                });
            }
        });
        this.bufferValueChanges$$ = this.bufferFormControl.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged())
            .subscribe((value) => {
            if (this.measureUnit === MeasureLengthUnit.Meters && value > 0 && value <= 100000) {
                this.bufferChange.emit(value);
                this.spatialFilterService.loadBufferGeometry(this.selectedZone, SpatialFilterType.Predefined, value, this.queryType).subscribe((featureGeom) => {
                    this.zoneWithBuffer = featureGeom;
                    this.zoneWithBufferChange.emit(this.zoneWithBuffer);
                });
            }
            else if (this.measureUnit === MeasureLengthUnit.Kilometers && value > 0 && value <= 100) {
                this.bufferChange.emit(value);
                this.spatialFilterService.loadBufferGeometry(this.selectedZone, SpatialFilterType.Predefined, value * 1000, this.queryType).subscribe((featureGeom) => {
                    this.zoneWithBuffer = featureGeom;
                    this.zoneWithBufferChange.emit(this.zoneWithBuffer);
                });
            }
            else if (value === 0 && this.layers.length > 0) {
                this.bufferChange.emit(value);
                this.zoneWithBufferChange.emit(this.selectedZone);
            }
            else if (value < 0 ||
                (this.measureUnit === MeasureLengthUnit.Meters && value > 100000) ||
                (this.measureUnit === MeasureLengthUnit.Kilometers && value > 100)) {
                this.bufferFormControl.setValue(0);
                this.messageService.alert(this.languageService.translate.instant('igo.geo.spatialFilter.bufferAlert'), this.languageService.translate.instant('igo.geo.spatialFilter.warning'));
            }
        });
    }
    ngOnDestroy() {
        this.formValueChanges$$.unsubscribe();
    }
    displayFn(feature) {
        return feature ? feature.properties.nom : undefined;
    }
    onZoneChange(feature) {
        if (feature && this.queryType) {
            this.spatialFilterService.loadItemById(feature, this.queryType)
                .subscribe((featureGeom) => {
                this.selectedZone = featureGeom;
                this.zoneChange.emit(featureGeom);
            });
        }
    }
    /**
     * Set the measure unit
     * @internal
     */
    onMeasureUnitChange(unit) {
        if (unit === this.measureUnit) {
            return;
        }
        else {
            this.measureUnit = unit;
            this.measureUnitChange.emit(this.measureUnit);
            this.measureUnit === MeasureLengthUnit.Meters ?
                this.bufferFormControl.setValue(this.bufferFormControl.value * 1000) :
                this.bufferFormControl.setValue(this.bufferFormControl.value / 1000);
        }
    }
}
SpatialFilterListComponent.ɵfac = function SpatialFilterListComponent_Factory(t) { return new (t || SpatialFilterListComponent)(i0.ɵɵdirectiveInject(i1.SpatialFilterService), i0.ɵɵdirectiveInject(i2.MessageService), i0.ɵɵdirectiveInject(i2.LanguageService)); };
SpatialFilterListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SpatialFilterListComponent, selectors: [["igo-spatial-filter-list"]], inputs: { store: "store", queryType: "queryType", zone: "zone", layers: "layers" }, outputs: { zoneChange: "zoneChange", zoneWithBufferChange: "zoneWithBufferChange", bufferChange: "bufferChange", measureUnitChange: "measureUnitChange" }, decls: 18, vars: 17, consts: [[1, "form-list"], [1, "zone-list"], ["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete"], ["input", ""], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "buffer-div"], [1, "buffer-form"], [1, "buffer"], ["type", "number", "matInput", "", 3, "placeholder", "formControl", "value", "readonly"], [1, "unit-field"], [3, "value", "selectionChange"], [3, "value"]], template: function SpatialFilterListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelement(2, "input", 2, 3);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementStart(5, "mat-autocomplete", 4, 5);
        i0.ɵɵlistener("optionSelected", function SpatialFilterListComponent_Template_mat_autocomplete_optionSelected_5_listener($event) { return ctx.onZoneChange($event.option.value); });
        i0.ɵɵtemplate(7, SpatialFilterListComponent_mat_option_7_Template, 2, 2, "mat-option", 6);
        i0.ɵɵpipe(8, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "form");
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵelementStart(11, "form", 8);
        i0.ɵɵelementStart(12, "mat-form-field", 9);
        i0.ɵɵelement(13, "input", 10);
        i0.ɵɵpipe(14, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-form-field", 11);
        i0.ɵɵelementStart(16, "mat-select", 12);
        i0.ɵɵlistener("selectionChange", function SpatialFilterListComponent_Template_mat_select_selectionChange_16_listener($event) { return ctx.onMeasureUnitChange($event.value); });
        i0.ɵɵtemplate(17, SpatialFilterListComponent_mat_option_17_Template, 3, 4, "mat-option", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(6);
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(4, 11, "igo.geo.spatialFilter.listLabel"));
        i0.ɵɵproperty("formControl", ctx.formControl)("matAutocomplete", _r1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("displayWith", ctx.displayFn);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 13, ctx.store.view.all$()));
        i0.ɵɵadvance(6);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(14, 15, "igo.geo.spatialFilter.buffer"));
        i0.ɵɵproperty("formControl", ctx.bufferFormControl)("value", 0)("readonly", !ctx.zone);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.measureUnit);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.measureUnits);
    } }, directives: [i3.ɵNgNoValidate, i3.NgControlStatusGroup, i3.NgForm, i4.MatFormField, i5.MatInput, i3.DefaultValueAccessor, i6.MatAutocompleteTrigger, i3.NgControlStatus, i3.FormControlDirective, i6.MatAutocomplete, i7.NgForOf, i3.NumberValueAccessor, i8.MatSelect, i9.MatOption], pipes: [i10.TranslatePipe, i7.AsyncPipe], styles: [".buffer-div[_ngcontent-%COMP%]{display:flex;width:100%;margin-left:2px;padding:5px}.zone-list[_ngcontent-%COMP%]{padding:5px;width:95%;margin-left:2px}.buffer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:110%}.unit-field[_ngcontent-%COMP%]{width:110px;margin-left:30px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpatialFilterListComponent, [{
        type: Component,
        args: [{
                selector: 'igo-spatial-filter-list',
                templateUrl: './spatial-filter-list.component.html',
                styleUrls: ['./spatial-filter-list.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.SpatialFilterService }, { type: i2.MessageService }, { type: i2.LanguageService }]; }, { store: [{
            type: Input
        }], queryType: [{
            type: Input
        }], zone: [{
            type: Input
        }], layers: [{
            type: Input
        }], zoneChange: [{
            type: Output
        }], zoneWithBufferChange: [{
            type: Output
        }], bufferChange: [{
            type: Output
        }], measureUnitChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhdGlhbC1maWx0ZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvc3BhdGlhbC1maWx0ZXIvc3BhdGlhbC1maWx0ZXItbGlzdC9zcGF0aWFsLWZpbHRlci1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9zcGF0aWFsLWZpbHRlci9zcGF0aWFsLWZpbHRlci1saXN0L3NwYXRpYWwtZmlsdGVyLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BFLE9BQU8sRUFBMEIsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCx1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNWaEQsc0NBQXVGO0lBQ25GLFlBQ0o7SUFBQSxpQkFBYTs7O0lBRnVELG1DQUFrQjtJQUNsRixlQUNKO0lBREksMkRBQ0o7OztJQWlCSixzQ0FBMkU7SUFDdkUsWUFDSjs7SUFBQSxpQkFBYTs7O0lBRndDLHNDQUFxQjtJQUN0RSxlQUNKO0lBREksMEZBQ0o7O0FERFIsTUFBTSxPQUFPLDBCQUEwQjtJQTZEckMsWUFDVSxvQkFBMEMsRUFDMUMsY0FBOEIsRUFDOUIsZUFBZ0M7UUFGaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FB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aUM7UUFBakMsc0VBQWlDO1FBVXBDLGVBQTREO1FBQTVELCtGQUE0RDtRQUFDLG1EQUFpQyxZQUFBLHVCQUFBO1FBT2hJLGVBQXFCO1FBQXJCLHVDQUFxQjtRQUVlLGVBQWU7UUFBZiwwQ0FBZTs7dUZEQzlDLDBCQUEwQjtjQU50QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7Z0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2tJQUlLLEtBQUs7a0JBRFIsS0FBSztZQVVGLFNBQVM7a0JBRFosS0FBSztZQVdGLElBQUk7a0JBRFAsS0FBSztZQWFHLE1BQU07a0JBQWQsS0FBSztZQW1CSSxVQUFVO2tCQUFuQixNQUFNO1lBQ0csb0JBQW9CO2tCQUE3QixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLGlCQUFpQjtrQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFbnRpdHlTdG9yZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBTcGF0aWFsRmlsdGVyU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3NwYXRpYWwtZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3BhdGlhbEZpbHRlclF1ZXJ5VHlwZSwgU3BhdGlhbEZpbHRlclR5cGUgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9zcGF0aWFsLWZpbHRlci5lbnVtJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUnO1xuaW1wb3J0IHsgTWVhc3VyZUxlbmd0aFVuaXQgfSBmcm9tICcuLi8uLi8uLi9tZWFzdXJlL3NoYXJlZCc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UsIE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4uLy4uLy4uL2xheWVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXNwYXRpYWwtZmlsdGVyLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3BhdGlhbC1maWx0ZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NwYXRpYWwtZmlsdGVyLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3BhdGlhbEZpbHRlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KClcbiAgZ2V0IHN0b3JlKCk6IEVudGl0eVN0b3JlPEZlYXR1cmU+IHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmU7XG4gIH1cbiAgc2V0IHN0b3JlKHN0b3JlOiBFbnRpdHlTdG9yZTxGZWF0dXJlPikge1xuICAgIHRoaXMuX3N0b3JlID0gc3RvcmU7XG4gIH1cbiAgcHJpdmF0ZSBfc3RvcmU6IEVudGl0eVN0b3JlPEZlYXR1cmU+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBxdWVyeVR5cGUoKTogU3BhdGlhbEZpbHRlclF1ZXJ5VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5VHlwZTtcbiAgfVxuICBzZXQgcXVlcnlUeXBlKHF1ZXJ5VHlwZTogU3BhdGlhbEZpbHRlclF1ZXJ5VHlwZSkge1xuICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIHRoaXMuX3F1ZXJ5VHlwZSA9IHF1ZXJ5VHlwZTtcbiAgfVxuICBwcml2YXRlIF9xdWVyeVR5cGU6IFNwYXRpYWxGaWx0ZXJRdWVyeVR5cGU7XG5cbiAgQElucHV0KClcbiAgZ2V0IHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gIH1cbiAgc2V0IHpvbmUodmFsdWUpIHtcbiAgICB0aGlzLl96b25lID0gdmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy56b25lV2l0aEJ1ZmZlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuYnVmZmVyRm9ybUNvbnRyb2wuc2V0VmFsdWUoMCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3pvbmU7XG5cbiAgQElucHV0KCkgbGF5ZXJzOiBMYXllcltdID0gW107XG5cbiAgcHVibGljIHpvbmVXaXRoQnVmZmVyO1xuICBwdWJsaWMgc2VsZWN0ZWRab25lOiBhbnk7XG5cbiAgcHVibGljIG1lYXN1cmVVbml0OiBNZWFzdXJlTGVuZ3RoVW5pdCA9IE1lYXN1cmVMZW5ndGhVbml0Lk1ldGVycztcblxuICBwdWJsaWMgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBwdWJsaWMgYnVmZmVyRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICAvKipcbiAgICogQXZhaWxhYmxlIG1lYXN1cmUgdW5pdHMgZm9yIHRoZSBtZWFzdXJlIHR5cGUgZ2l2ZW5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgbWVhc3VyZVVuaXRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW01lYXN1cmVMZW5ndGhVbml0Lk1ldGVycywgTWVhc3VyZUxlbmd0aFVuaXQuS2lsb21ldGVyc107XG4gIH1cblxuICBAT3V0cHV0KCkgem9uZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RmVhdHVyZT4oKTtcbiAgQE91dHB1dCgpIHpvbmVXaXRoQnVmZmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGZWF0dXJlPigpO1xuICBAT3V0cHV0KCkgYnVmZmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBtZWFzdXJlVW5pdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWVhc3VyZUxlbmd0aFVuaXQ+KCk7XG5cbiAgZm9ybVZhbHVlQ2hhbmdlcyQkOiBTdWJzY3JpcHRpb247XG4gIGJ1ZmZlclZhbHVlQ2hhbmdlcyQkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzcGF0aWFsRmlsdGVyU2VydmljZTogU3BhdGlhbEZpbHRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm1WYWx1ZUNoYW5nZXMkJCA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zdG9yZS52aWV3LmZpbHRlcigoZmVhdHVyZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlck5vcm1hbGl6ZWQgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpO1xuICAgICAgICAgIGNvbnN0IGZlYXR1cmVOYW1lTm9ybWFsaXplZCA9IGZlYXR1cmUucHJvcGVydGllcy5ub20udG9Mb3dlckNhc2UoKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbiAgICAgICAgICByZXR1cm4gZmVhdHVyZU5hbWVOb3JtYWxpemVkLmluY2x1ZGVzKGZpbHRlck5vcm1hbGl6ZWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYnVmZmVyVmFsdWVDaGFuZ2VzJCQgPSB0aGlzLmJ1ZmZlckZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tZWFzdXJlVW5pdCA9PT0gTWVhc3VyZUxlbmd0aFVuaXQuTWV0ZXJzICYmIHZhbHVlID4gMCAmJiB2YWx1ZSA8PSAxMDAwMDApIHtcbiAgICAgICAgICB0aGlzLmJ1ZmZlckNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgICAgICB0aGlzLnNwYXRpYWxGaWx0ZXJTZXJ2aWNlLmxvYWRCdWZmZXJHZW9tZXRyeShcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRab25lLFxuICAgICAgICAgICAgU3BhdGlhbEZpbHRlclR5cGUuUHJlZGVmaW5lZCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgdGhpcy5xdWVyeVR5cGVcbiAgICAgICAgICApLnN1YnNjcmliZSgoZmVhdHVyZUdlb206IEZlYXR1cmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZVdpdGhCdWZmZXIgPSBmZWF0dXJlR2VvbTtcbiAgICAgICAgICAgIHRoaXMuem9uZVdpdGhCdWZmZXJDaGFuZ2UuZW1pdCh0aGlzLnpvbmVXaXRoQnVmZmVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1lYXN1cmVVbml0ID09PSBNZWFzdXJlTGVuZ3RoVW5pdC5LaWxvbWV0ZXJzICYmIHZhbHVlID4gMCAmJiB2YWx1ZSA8PSAxMDApIHtcbiAgICAgICAgICB0aGlzLmJ1ZmZlckNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgICAgICB0aGlzLnNwYXRpYWxGaWx0ZXJTZXJ2aWNlLmxvYWRCdWZmZXJHZW9tZXRyeShcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRab25lLFxuICAgICAgICAgICAgU3BhdGlhbEZpbHRlclR5cGUuUHJlZGVmaW5lZCxcbiAgICAgICAgICAgIHZhbHVlICogMTAwMCxcbiAgICAgICAgICAgIHRoaXMucXVlcnlUeXBlXG4gICAgICAgICAgKS5zdWJzY3JpYmUoKGZlYXR1cmVHZW9tOiBGZWF0dXJlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmVXaXRoQnVmZmVyID0gZmVhdHVyZUdlb207XG4gICAgICAgICAgICB0aGlzLnpvbmVXaXRoQnVmZmVyQ2hhbmdlLmVtaXQodGhpcy56b25lV2l0aEJ1ZmZlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IDAgJiYgdGhpcy5sYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuYnVmZmVyQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgICAgIHRoaXMuem9uZVdpdGhCdWZmZXJDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkWm9uZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICB2YWx1ZSA8IDAgfHxcbiAgICAgICAgICAgICh0aGlzLm1lYXN1cmVVbml0ID09PSBNZWFzdXJlTGVuZ3RoVW5pdC5NZXRlcnMgJiYgdmFsdWUgPiAxMDAwMDApIHx8XG4gICAgICAgICAgICAodGhpcy5tZWFzdXJlVW5pdCA9PT0gTWVhc3VyZUxlbmd0aFVuaXQuS2lsb21ldGVycyAmJiB2YWx1ZSA+IDEwMCkpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyRm9ybUNvbnRyb2wuc2V0VmFsdWUoMCk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFsZXJ0KHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuYnVmZmVyQWxlcnQnKSxcbiAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uc3BhdGlhbEZpbHRlci53YXJuaW5nJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvcm1WYWx1ZUNoYW5nZXMkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZGlzcGxheUZuKGZlYXR1cmU/OiBGZWF0dXJlKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gZmVhdHVyZSA/IGZlYXR1cmUucHJvcGVydGllcy5ub20gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBvblpvbmVDaGFuZ2UoZmVhdHVyZSkge1xuICAgIGlmIChmZWF0dXJlICYmIHRoaXMucXVlcnlUeXBlKSB7XG4gICAgICB0aGlzLnNwYXRpYWxGaWx0ZXJTZXJ2aWNlLmxvYWRJdGVtQnlJZChmZWF0dXJlLCB0aGlzLnF1ZXJ5VHlwZSlcbiAgICAgIC5zdWJzY3JpYmUoKGZlYXR1cmVHZW9tOiBGZWF0dXJlKSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRab25lID0gZmVhdHVyZUdlb207XG4gICAgICAgIHRoaXMuem9uZUNoYW5nZS5lbWl0KGZlYXR1cmVHZW9tKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1lYXN1cmUgdW5pdFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTWVhc3VyZVVuaXRDaGFuZ2UodW5pdDogTWVhc3VyZUxlbmd0aFVuaXQpIHtcbiAgICBpZiAodW5pdCA9PT0gdGhpcy5tZWFzdXJlVW5pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lYXN1cmVVbml0ID0gdW5pdDtcbiAgICAgIHRoaXMubWVhc3VyZVVuaXRDaGFuZ2UuZW1pdCh0aGlzLm1lYXN1cmVVbml0KTtcbiAgICAgIHRoaXMubWVhc3VyZVVuaXQgPT09IE1lYXN1cmVMZW5ndGhVbml0Lk1ldGVycyA/XG4gICAgICAgIHRoaXMuYnVmZmVyRm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5idWZmZXJGb3JtQ29udHJvbC52YWx1ZSAqIDEwMDApIDpcbiAgICAgICAgdGhpcy5idWZmZXJGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmJ1ZmZlckZvcm1Db250cm9sLnZhbHVlIC8gMTAwMCk7XG4gICAgfVxuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImZvcm0tbGlzdFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInpvbmUtbGlzdFwiPlxuICAgICAgICA8aW5wdXQgI2lucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eydpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIubGlzdExhYmVsJyB8wqB0cmFuc2xhdGV9fVwiIG1hdElucHV0XG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiPlxuICAgICAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiIChvcHRpb25TZWxlY3RlZCk9XCJvblpvbmVDaGFuZ2UoJGV2ZW50Lm9wdGlvbi52YWx1ZSlcIlxuICAgICAgICBbZGlzcGxheVdpdGhdPVwiZGlzcGxheUZuXCI+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZW50aXRpZXMgb2YgdGhpcy5zdG9yZS52aWV3LmFsbCQoKSB8IGFzeW5jXCIgW3ZhbHVlXT1cImVudGl0aWVzXCI+XG4gICAgICAgICAgICAgICAge3tlbnRpdGllcy5wcm9wZXJ0aWVzLm5vbX19XG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuPGZvcm0+XG5cbjxkaXYgY2xhc3M9XCJidWZmZXItZGl2XCI+XG4gICAgPGZvcm0gY2xhc3M9XCJidWZmZXItZm9ybVwiPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJidWZmZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ7eydpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuYnVmZmVyJyB8IHRyYW5zbGF0ZX19XCIgW2Zvcm1Db250cm9sXT1cImJ1ZmZlckZvcm1Db250cm9sXCJcbiAgICAgICAgICAgIFt2YWx1ZV09XCIwXCIgW3JlYWRvbmx5XT1cIiF6b25lXCI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9mb3JtPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwidW5pdC1maWVsZFwiPlxuICAgICAgICA8bWF0LXNlbGVjdFxuICAgICAgICBbdmFsdWVdPVwibWVhc3VyZVVuaXRcIlxuICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uTWVhc3VyZVVuaXRDaGFuZ2UoJGV2ZW50LnZhbHVlKVwiPlxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbWVhc3VyZVVuaXQgb2YgbWVhc3VyZVVuaXRzXCIgW3ZhbHVlXT1cIm1lYXN1cmVVbml0XCI+XG4gICAgICAgICAgICB7eygnaWdvLmdlby5tZWFzdXJlLicgKyBtZWFzdXJlVW5pdCkgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG4iXX0=