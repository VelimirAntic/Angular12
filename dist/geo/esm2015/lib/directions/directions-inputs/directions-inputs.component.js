import { Component, EventEmitter, Input, Output } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as olProj from 'ol/proj';
import * as olObservable from 'ol/Observable';
import pointOnFeature from '@turf/point-on-feature';
import { computeRelativePosition, removeStopFromStore, updateStoreSorting } from '../shared/directions.utils';
import { roundCoordTo } from '../../map/shared/map.utils';
import { DirectionRelativePositionType } from '../shared/directions.enum';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/material/autocomplete";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/icon";
import * as i11 from "@angular/material/core";
import * as i12 from "@ngx-translate/core";
function DirectionsInputsComponent_div_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function DirectionsInputsComponent_div_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const stop_r1 = i0.ɵɵnextContext().$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.clearStop(stop_r1); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.directionsForm.clearStop"));
} }
function DirectionsInputsComponent_div_1_mat_optgroup_7_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const result_r12 = ctx.$implicit;
    i0.ɵɵproperty("value", result_r12)("matTooltip", result_r12.meta ? result_r12.meta.title : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", result_r12.meta ? result_r12.meta.title : "", " ");
} }
function DirectionsInputsComponent_div_1_mat_optgroup_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 12);
    i0.ɵɵtemplate(1, DirectionsInputsComponent_div_1_mat_optgroup_7_mat_option_1_Template, 2, 3, "mat-option", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const source_r10 = ctx.$implicit;
    i0.ɵɵproperty("label", source_r10.source.title)("disabled", source_r10.source.enabled === false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", source_r10.results);
} }
function DirectionsInputsComponent_div_1_div_8_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function DirectionsInputsComponent_div_1_div_8_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const stop_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.removeStop(stop_r1); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.directionsForm.removeStop"));
} }
function DirectionsInputsComponent_div_1_div_8_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.directionsForm.removeStop"));
} }
function DirectionsInputsComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "button", 16);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DirectionsInputsComponent_div_1_div_8_button_4_Template, 3, 3, "button", 18);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵtemplate(6, DirectionsInputsComponent_div_1_div_8_button_6_Template, 3, 3, "button", 19);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 3, "igo.geo.directionsForm.moveStop"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(5, 5, ctx_r6.stopsStore.count$) > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(7, 7, ctx_r6.stopsStore.count$) <= 2);
} }
function DirectionsInputsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("touchenter", function DirectionsInputsComponent_div_1_Template_div_touchenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const stop_r1 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onStopEnter(stop_r1); })("touchleave", function DirectionsInputsComponent_div_1_Template_div_touchleave_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onStopLeave(); })("mouseover", function DirectionsInputsComponent_div_1_Template_div_mouseover_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const stop_r1 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.onStopEnter(stop_r1); })("mouseleave", function DirectionsInputsComponent_div_1_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onStopLeave(); })("cdkDragStarted", function DirectionsInputsComponent_div_1_Template_div_cdkDragStarted_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.stopIsDragged = true; })("cdkDragEnded", function DirectionsInputsComponent_div_1_Template_div_cdkDragEnded_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.stopIsDragged = false; });
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "input", 4);
    i0.ɵɵlistener("focus", function DirectionsInputsComponent_div_1_Template_input_focus_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const stop_r1 = restoredCtx.$implicit; const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onInputFocus(stop_r1); })("ngModelChange", function DirectionsInputsComponent_div_1_Template_input_ngModelChange_3_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const stop_r1 = restoredCtx.$implicit; return stop_r1.text = $event; })("keyup", function DirectionsInputsComponent_div_1_Template_input_keyup_3_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const stop_r1 = restoredCtx.$implicit; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.setStopText($event, stop_r1); })("keydown.enter", function DirectionsInputsComponent_div_1_Template_input_keydown_enter_3_listener($event) { return $event.preventDefault(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DirectionsInputsComponent_div_1_button_4_Template, 3, 3, "button", 5);
    i0.ɵɵelementStart(5, "mat-autocomplete", 6, 7);
    i0.ɵɵlistener("optionSelected", function DirectionsInputsComponent_div_1_Template_mat_autocomplete_optionSelected_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const stop_r1 = restoredCtx.$implicit; const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.chooseProposal($event, stop_r1); });
    i0.ɵɵtemplate(7, DirectionsInputsComponent_div_1_mat_optgroup_7_Template, 2, 3, "mat-optgroup", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, DirectionsInputsComponent_div_1_div_8_Template, 8, 9, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const stop_r1 = ctx.$implicit;
    const _r4 = i0.ɵɵreference(6);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r0.getNgClass(stop_r1));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("id", stop_r1.id);
    i0.ɵɵproperty("placeholder", ctx_r0.getPlaceholder(stop_r1))("matTooltip", stop_r1.text)("ngModel", stop_r1.text)("matAutocomplete", _r4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (stop_r1.text || stop_r1.coordinates) && ctx_r0.stopWithHover && stop_r1.id === ctx_r0.stopWithHover.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("displayWith", ctx_r0.getOptionText);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", stop_r1.searchProposals);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.stopIsDragged && ctx_r0.stopWithHover && stop_r1.id === ctx_r0.stopWithHover.id);
} }
export class DirectionsInputsComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this.invalidKeys = ['Control', 'Shift', 'Alt'];
        this.onMapClickEventKeys = [];
        this.stopIsDragged = false;
        this.coordRoundedDecimals = 6;
        this.debounce = 200;
        this.length = 2;
        this.stopInputHasFocus = new EventEmitter(false);
    }
    ngOnDestroy() {
        this.unlistenMapSingleClick();
    }
    onStopEnter(stop) {
        this.stopWithHover = stop;
    }
    onStopLeave() {
        this.stopWithHover = undefined;
    }
    getOptionText(option) {
        if (option instanceof Object) {
            return (option === null || option === void 0 ? void 0 : option.meta) ? option.meta.title : '';
        }
        return option;
    }
    chooseProposal(event, stop) {
        const result = event.option.value;
        if (result) {
            let geomCoord;
            const geom = result.geometry;
            if (geom.type === 'Point') {
                geomCoord = geom.coordinates;
            }
            else {
                const point = pointOnFeature(result.geometry);
                geomCoord = [
                    point.geometry.coordinates[0],
                    point.geometry.coordinates[1]
                ];
            }
            if (geomCoord) {
                stop.coordinates = geomCoord;
                stop.text = result.meta.title;
                this.stopsStore.update(stop);
            }
        }
    }
    setStopText(event, stop) {
        this.unlistenMapSingleClick();
        const term = event.target.value;
        if (term.length === 0) {
            this.clearStop(stop);
        }
        else if (this.validateTerm(term)) {
            stop.text = term;
            this.stopsStore.update(stop);
        }
    }
    validateTerm(term) {
        if (this.keyIsValid(term) &&
            (term.length >= this.length || term.length === 0)) {
            return true;
        }
        return false;
    }
    keyIsValid(key) {
        return this.invalidKeys.find(value => value === key) === undefined;
    }
    getNgClass(stop) {
        if (!this.stopWithHover) {
            return 'igo-input-container';
        }
        else if (stop.id === this.stopWithHover.id) {
            return 'igo-input-container reduce';
        }
        else {
            return 'igo-input-container';
        }
    }
    getPlaceholder(stop) {
        let extra = '';
        if (stop.relativePosition) {
            if (stop.relativePosition === DirectionRelativePositionType.Intermediate) {
                extra = ' #' + stop.position;
            }
            return this.languageService.translate.instant('igo.geo.directionsForm.' + stop.relativePosition) + extra;
        }
        else {
            return '';
        }
    }
    removeStop(stop) {
        removeStopFromStore(this.stopsStore, stop);
    }
    clearStop(stop) {
        this.stopsStore.update({ id: stop.id, relativePosition: stop.relativePosition, position: stop.position });
    }
    drop(event) {
        this.moveStops(event.previousIndex, event.currentIndex);
    }
    moveStops(fromIndex, toIndex) {
        if (fromIndex !== toIndex) {
            const stops = [...this.stopsStore.view.all()];
            moveItemInArray(stops, fromIndex, toIndex);
            stops.map((stop, i) => {
                stop.relativePosition = computeRelativePosition(i, stops.length);
                stop.position = i;
            });
            this.stopsStore.updateMany(stops);
            updateStoreSorting(this.stopsStore);
        }
    }
    onInputFocus(stop) {
        var _a;
        if (!stop.text || ((_a = stop.text) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            this.unlistenMapSingleClick();
            this.stopInputHasFocus.emit(true);
            this.listenMapSingleClick(stop);
        }
    }
    listenMapSingleClick(stop) {
        const key = this.stopsFeatureStore.layer.map.ol.once('singleclick', event => {
            const clickCoordinates = olProj.transform(event.coordinate, this.stopsFeatureStore.layer.map.projection, this.projection);
            const roundedCoord = roundCoordTo(clickCoordinates, this.coordRoundedDecimals);
            stop.text = roundedCoord.join(',');
            stop.coordinates = roundedCoord;
            this.stopsStore.update(stop);
            setTimeout(() => {
                this.stopInputHasFocus.emit(false);
            }, 500);
        });
        this.onMapClickEventKeys.push(key);
    }
    unlistenMapSingleClick() {
        this.onMapClickEventKeys.map(key => {
            olObservable.unByKey(key);
        });
        this.onMapClickEventKeys = [];
    }
}
DirectionsInputsComponent.ɵfac = function DirectionsInputsComponent_Factory(t) { return new (t || DirectionsInputsComponent)(i0.ɵɵdirectiveInject(i1.LanguageService)); };
DirectionsInputsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DirectionsInputsComponent, selectors: [["igo-directions-inputs"]], inputs: { stopsStore: "stopsStore", stopsFeatureStore: "stopsFeatureStore", projection: "projection", coordRoundedDecimals: "coordRoundedDecimals", debounce: "debounce", length: "length" }, outputs: { stopInputHasFocus: "stopInputHasFocus" }, decls: 3, vars: 3, consts: [["cdkDropList", "", 1, "stops-list", 3, "cdkDropListDropped"], ["touchleave", "", "cdkDragLockAxis", "y", "class", "stop-box mat-typography", "cdkDrag", "", 3, "touchenter", "touchleave", "mouseover", "mouseleave", "cdkDragStarted", "cdkDragEnded", 4, "ngFor", "ngForOf"], ["touchleave", "", "cdkDragLockAxis", "y", "cdkDrag", "", 1, "stop-box", "mat-typography", 3, "touchenter", "touchleave", "mouseover", "mouseleave", "cdkDragStarted", "cdkDragEnded"], [3, "ngClass"], ["type", "text", "matTooltipShowDelay", "500", "aria-label", "Number", "matInput", "", 3, "id", "placeholder", "matTooltip", "ngModel", "matAutocomplete", "focus", "ngModelChange", "keyup", "keydown.enter"], ["mat-button", "", "matTooltipShowDelay", "500", "matSuffix", "", "mat-icon-button", "", "color", "warn", "aria-label", "Clear", 3, "matTooltip", "click", 4, "ngIf"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "label", "disabled", 4, "ngFor", "ngForOf"], ["class", "igo-form-button-group", 4, "ngIf"], ["mat-button", "", "matTooltipShowDelay", "500", "matSuffix", "", "mat-icon-button", "", "color", "warn", "aria-label", "Clear", 3, "matTooltip", "click"], ["svgIcon", "close"], [3, "label", "disabled"], ["matTooltipShowDelay", "500", 3, "value", "matTooltip", 4, "ngFor", "ngForOf"], ["matTooltipShowDelay", "500", 3, "value", "matTooltip"], [1, "igo-form-button-group"], ["cdkDragHandle", "", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", 1, "swipe-vertical", 3, "matTooltip"], ["svgIcon", "gesture-swipe-vertical"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click", 4, "ngIf"], ["disabled", "true", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click"], ["svgIcon", "delete"], ["disabled", "true", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip"], ["svgIcon", "blank"]], template: function DirectionsInputsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("cdkDropListDropped", function DirectionsInputsComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(1, DirectionsInputsComponent_div_1_Template, 9, 10, "div", 1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx.stopsStore.view.all$()));
    } }, directives: [i2.CdkDropList, i3.NgForOf, i2.CdkDrag, i3.NgClass, i4.MatFormField, i5.MatInput, i6.DefaultValueAccessor, i7.MatAutocompleteTrigger, i8.MatTooltip, i6.NgControlStatus, i6.NgModel, i3.NgIf, i7.MatAutocomplete, i9.MatButton, i4.MatSuffix, i10.MatIcon, i11.MatOptgroup, i11.MatOption, i2.CdkDragHandle], pipes: [i3.AsyncPipe, i12.TranslatePipe], styles: [".igo-input-container[_ngcontent-%COMP%]{width:100%}.igo-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.igo-input-container.reduce[_ngcontent-%COMP%]{width:70%}.igo-input-container.reduce[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.stops-list[_ngcontent-%COMP%]{max-width:100%;min-height:60px;display:block;background:white;border-radius:4px;overflow:hidden;padding:20px 10px}.swipe-vertical[_ngcontent-%COMP%]{cursor:move}.stop-box[_ngcontent-%COMP%]{height:60px;padding:20px 10px;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:white}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.stops-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .stop-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectionsInputsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-directions-inputs',
                templateUrl: './directions-inputs.component.html',
                styleUrls: ['./directions-inputs.component.scss']
            }]
    }], function () { return [{ type: i1.LanguageService }]; }, { stopsStore: [{
            type: Input
        }], stopsFeatureStore: [{
            type: Input
        }], projection: [{
            type: Input
        }], coordRoundedDecimals: [{
            type: Input
        }], debounce: [{
            type: Input
        }], length: [{
            type: Input
        }], stopInputHasFocus: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9ucy1pbnB1dHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZGlyZWN0aW9ucy9kaXJlY3Rpb25zLWlucHV0cy9kaXJlY3Rpb25zLWlucHV0cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kaXJlY3Rpb25zL2RpcmVjdGlvbnMtaW5wdXRzL2RpcmVjdGlvbnMtaW5wdXRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBQ2xDLE9BQU8sS0FBSyxZQUFZLE1BQU0sZUFBZSxDQUFDO0FBSzlDLE9BQU8sY0FBYyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSTlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ01sRSxrQ0FLd0Y7SUFBMUIsMFBBQXlCOztJQUNuRiwrQkFBcUM7SUFDekMsaUJBQVM7O0lBSEwscUZBQTZEOzs7SUFPL0Qsc0NBQzhFO0lBQzVFLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBSHFDLGtDQUFnQiw0REFBQTtJQUVoRSxlQUNGO0lBREUsNkVBQ0Y7OztJQUpBLHdDQUFxSTtJQUNySSw4R0FHYTtJQUNiLGlCQUFlOzs7SUFMMkMsK0NBQTZCLGlEQUFB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QU07O1FBckRpRSxlQUFtQztRQUFuQywwRUFBbUM7O3VGRGU3Rix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEO2tFQU9VLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLO1lBRUcsUUFBUTtrQkFBaEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUVJLGlCQUFpQjtrQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuaW1wb3J0ICogYXMgb2xQcm9qIGZyb20gJ29sL3Byb2onO1xuaW1wb3J0ICogYXMgb2xPYnNlcnZhYmxlIGZyb20gJ29sL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBTdG9wIH0gZnJvbSAnLi4vc2hhcmVkL2RpcmVjdGlvbnMuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgcG9pbnRPbkZlYXR1cmUgZnJvbSAnQHR1cmYvcG9pbnQtb24tZmVhdHVyZSc7XG5pbXBvcnQgeyBjb21wdXRlUmVsYXRpdmVQb3NpdGlvbiwgcmVtb3ZlU3RvcEZyb21TdG9yZSwgdXBkYXRlU3RvcmVTb3J0aW5nIH0gZnJvbSAnLi4vc2hhcmVkL2RpcmVjdGlvbnMudXRpbHMnO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IE1hdE9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgU3RvcHNGZWF0dXJlU3RvcmUsIFN0b3BzU3RvcmUgfSBmcm9tICcuLi9zaGFyZWQvc3RvcmUnO1xuaW1wb3J0IHsgcm91bmRDb29yZFRvIH0gZnJvbSAnLi4vLi4vbWFwL3NoYXJlZC9tYXAudXRpbHMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb25SZWxhdGl2ZVBvc2l0aW9uVHlwZSB9IGZyb20gJy4uL3NoYXJlZC9kaXJlY3Rpb25zLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tZGlyZWN0aW9ucy1pbnB1dHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlyZWN0aW9ucy1pbnB1dHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaXJlY3Rpb25zLWlucHV0cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpcmVjdGlvbnNJbnB1dHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgaW52YWxpZEtleXMgPSBbJ0NvbnRyb2wnLCAnU2hpZnQnLCAnQWx0J107XG4gIHByaXZhdGUgb25NYXBDbGlja0V2ZW50S2V5cyA9IFtdO1xuICBwdWJsaWMgc3RvcFdpdGhIb3ZlcjogU3RvcDtcbiAgcHVibGljIHN0b3BJc0RyYWdnZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc3RvcHNTdG9yZTogU3RvcHNTdG9yZTtcbiAgQElucHV0KCkgc3RvcHNGZWF0dXJlU3RvcmU6IFN0b3BzRmVhdHVyZVN0b3JlO1xuICBASW5wdXQoKSBwcm9qZWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvb3JkUm91bmRlZERlY2ltYWxzOiBudW1iZXIgPSA2O1xuXG4gIEBJbnB1dCgpIGRlYm91bmNlOiBudW1iZXIgPSAyMDA7XG4gIEBJbnB1dCgpIGxlbmd0aDogbnVtYmVyID0gMjtcblxuICBAT3V0cHV0KCkgc3RvcElucHV0SGFzRm9jdXM6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7IH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVubGlzdGVuTWFwU2luZ2xlQ2xpY2soKTtcbiAgfVxuICBvblN0b3BFbnRlcihzdG9wOiBTdG9wKSB7XG4gICAgdGhpcy5zdG9wV2l0aEhvdmVyID0gc3RvcDtcbiAgfVxuICBvblN0b3BMZWF2ZSgpIHtcbiAgICB0aGlzLnN0b3BXaXRoSG92ZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRPcHRpb25UZXh0KG9wdGlvbikge1xuICAgIGlmIChvcHRpb24gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIHJldHVybiBvcHRpb24/Lm1ldGEgPyBvcHRpb24ubWV0YS50aXRsZSA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG5cbiAgY2hvb3NlUHJvcG9zYWwoZXZlbnQ6IHsgc291cmNlOiBNYXRBdXRvY29tcGxldGUsIG9wdGlvbjogTWF0T3B0aW9uIH0sIHN0b3A6IFN0b3ApIHtcbiAgICBjb25zdCByZXN1bHQ6IEZlYXR1cmUgPSBldmVudC5vcHRpb24udmFsdWU7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgbGV0IGdlb21Db29yZDtcbiAgICAgIGNvbnN0IGdlb20gPSByZXN1bHQuZ2VvbWV0cnk7XG4gICAgICBpZiAoZ2VvbS50eXBlID09PSAnUG9pbnQnKSB7XG4gICAgICAgIGdlb21Db29yZCA9IGdlb20uY29vcmRpbmF0ZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwb2ludCA9IHBvaW50T25GZWF0dXJlKHJlc3VsdC5nZW9tZXRyeSk7XG4gICAgICAgIGdlb21Db29yZCA9IFtcbiAgICAgICAgICBwb2ludC5nZW9tZXRyeS5jb29yZGluYXRlc1swXSxcbiAgICAgICAgICBwb2ludC5nZW9tZXRyeS5jb29yZGluYXRlc1sxXVxuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgaWYgKGdlb21Db29yZCkge1xuICAgICAgICBzdG9wLmNvb3JkaW5hdGVzID0gZ2VvbUNvb3JkO1xuICAgICAgICBzdG9wLnRleHQgPSByZXN1bHQubWV0YS50aXRsZTtcbiAgICAgICAgdGhpcy5zdG9wc1N0b3JlLnVwZGF0ZShzdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRTdG9wVGV4dChldmVudDogS2V5Ym9hcmRFdmVudCwgc3RvcDogU3RvcCkge1xuICAgIHRoaXMudW5saXN0ZW5NYXBTaW5nbGVDbGljaygpO1xuICAgIGNvbnN0IHRlcm0gPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGlmICh0ZXJtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jbGVhclN0b3Aoc3RvcCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbGlkYXRlVGVybSh0ZXJtKSkge1xuICAgICAgc3RvcC50ZXh0ID0gdGVybTtcbiAgICAgIHRoaXMuc3RvcHNTdG9yZS51cGRhdGUoc3RvcCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVUZXJtKHRlcm06IHN0cmluZykge1xuICAgIGlmIChcbiAgICAgIHRoaXMua2V5SXNWYWxpZCh0ZXJtKSAmJlxuICAgICAgKHRlcm0ubGVuZ3RoID49IHRoaXMubGVuZ3RoIHx8IHRlcm0ubGVuZ3RoID09PSAwKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUga2V5SXNWYWxpZChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmludmFsaWRLZXlzLmZpbmQodmFsdWUgPT4gdmFsdWUgPT09IGtleSkgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldE5nQ2xhc3Moc3RvcDogU3RvcCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLnN0b3BXaXRoSG92ZXIpIHtcbiAgICAgIHJldHVybiAnaWdvLWlucHV0LWNvbnRhaW5lcic7XG4gICAgfSBlbHNlIGlmIChzdG9wLmlkID09PSB0aGlzLnN0b3BXaXRoSG92ZXIuaWQpIHtcbiAgICAgIHJldHVybiAnaWdvLWlucHV0LWNvbnRhaW5lciByZWR1Y2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2lnby1pbnB1dC1jb250YWluZXInO1xuICAgIH1cbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyKHN0b3A6IFN0b3ApOiBzdHJpbmcge1xuICAgIGxldCBleHRyYSA9ICcnO1xuICAgIGlmIChzdG9wLnJlbGF0aXZlUG9zaXRpb24pIHtcbiAgICAgIGlmIChzdG9wLnJlbGF0aXZlUG9zaXRpb24gPT09IERpcmVjdGlvblJlbGF0aXZlUG9zaXRpb25UeXBlLkludGVybWVkaWF0ZSkge1xuICAgICAgICBleHRyYSA9ICcgIycgKyBzdG9wLnBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLicgKyBzdG9wLnJlbGF0aXZlUG9zaXRpb24pICsgZXh0cmE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICByZW1vdmVTdG9wKHN0b3A6IFN0b3ApIHtcbiAgICByZW1vdmVTdG9wRnJvbVN0b3JlKHRoaXMuc3RvcHNTdG9yZSwgc3RvcCk7XG4gIH1cblxuICBjbGVhclN0b3Aoc3RvcDogU3RvcCkge1xuICAgIHRoaXMuc3RvcHNTdG9yZS51cGRhdGUoeyBpZDogc3RvcC5pZCwgcmVsYXRpdmVQb3NpdGlvbjogc3RvcC5yZWxhdGl2ZVBvc2l0aW9uLCBwb3NpdGlvbjogc3RvcC5wb3NpdGlvbiB9KTtcbiAgfVxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIHRoaXMubW92ZVN0b3BzKGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVTdG9wcyhmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBpZiAoZnJvbUluZGV4ICE9PSB0b0luZGV4KSB7XG4gICAgICBjb25zdCBzdG9wcyA9IFsuLi50aGlzLnN0b3BzU3RvcmUudmlldy5hbGwoKV07XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoc3RvcHMsIGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICBzdG9wcy5tYXAoKHN0b3AsIGkpID0+IHtcbiAgICAgICAgc3RvcC5yZWxhdGl2ZVBvc2l0aW9uID0gY29tcHV0ZVJlbGF0aXZlUG9zaXRpb24oaSwgc3RvcHMubGVuZ3RoKTtcbiAgICAgICAgc3RvcC5wb3NpdGlvbiA9IGk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3RvcHNTdG9yZS51cGRhdGVNYW55KHN0b3BzKTtcbiAgICAgIHVwZGF0ZVN0b3JlU29ydGluZyh0aGlzLnN0b3BzU3RvcmUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRGb2N1cyhzdG9wOiBTdG9wKSB7XG4gICAgaWYgKCFzdG9wLnRleHQgfHwgc3RvcC50ZXh0Py5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudW5saXN0ZW5NYXBTaW5nbGVDbGljaygpO1xuICAgICAgdGhpcy5zdG9wSW5wdXRIYXNGb2N1cy5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5saXN0ZW5NYXBTaW5nbGVDbGljayhzdG9wKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxpc3Rlbk1hcFNpbmdsZUNsaWNrKHN0b3A6IFN0b3ApIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLmxheWVyLm1hcC5vbC5vbmNlKCdzaW5nbGVjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrQ29vcmRpbmF0ZXMgPSBvbFByb2oudHJhbnNmb3JtKFxuICAgICAgICBldmVudC5jb29yZGluYXRlLFxuICAgICAgICB0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLmxheWVyLm1hcC5wcm9qZWN0aW9uLFxuICAgICAgICB0aGlzLnByb2plY3Rpb25cbiAgICAgICk7XG4gICAgICBjb25zdCByb3VuZGVkQ29vcmQgPSByb3VuZENvb3JkVG8oY2xpY2tDb29yZGluYXRlcyBhcyBbbnVtYmVyLCBudW1iZXJdLCB0aGlzLmNvb3JkUm91bmRlZERlY2ltYWxzKTtcbiAgICAgIHN0b3AudGV4dCA9IHJvdW5kZWRDb29yZC5qb2luKCcsJyk7XG4gICAgICBzdG9wLmNvb3JkaW5hdGVzID0gcm91bmRlZENvb3JkO1xuICAgICAgdGhpcy5zdG9wc1N0b3JlLnVwZGF0ZShzdG9wKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0b3BJbnB1dEhhc0ZvY3VzLmVtaXQoZmFsc2UpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uTWFwQ2xpY2tFdmVudEtleXMucHVzaChrZXkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1bmxpc3Rlbk1hcFNpbmdsZUNsaWNrKCkge1xuICAgIHRoaXMub25NYXBDbGlja0V2ZW50S2V5cy5tYXAoa2V5ID0+IHtcbiAgICAgIG9sT2JzZXJ2YWJsZS51bkJ5S2V5KGtleSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbk1hcENsaWNrRXZlbnRLZXlzID0gW107XG4gIH1cbn1cbiIsIjxkaXYgY2RrRHJvcExpc3QgY2xhc3M9XCJzdG9wcy1saXN0XCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgPGRpdiB0b3VjaGxlYXZlICBcbiAgKHRvdWNoZW50ZXIpPVwib25TdG9wRW50ZXIoc3RvcClcIlxuICAodG91Y2hsZWF2ZSk9XCJvblN0b3BMZWF2ZSgpXCJcbiAgKG1vdXNlb3Zlcik9XCJvblN0b3BFbnRlcihzdG9wKVwiXG4gIChtb3VzZWxlYXZlKT1cIm9uU3RvcExlYXZlKClcIlxuICAoY2RrRHJhZ1N0YXJ0ZWQpPVwic3RvcElzRHJhZ2dlZD10cnVlXCJcbiAgKGNka0RyYWdFbmRlZCk9XCJzdG9wSXNEcmFnZ2VkPWZhbHNlXCJcbiAgY2RrRHJhZ0xvY2tBeGlzPVwieVwiIGNsYXNzPVwic3RvcC1ib3ggbWF0LXR5cG9ncmFwaHlcIiAqbmdGb3I9XCJsZXQgc3RvcCBvZiBzdG9wc1N0b3JlLnZpZXcuYWxsJCgpIHwgYXN5bmM7IGxldCBpID0gaW5kZXg7XCIgY2RrRHJhZz5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cImdldE5nQ2xhc3Moc3RvcClcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IGlkPVwie3tzdG9wLmlkfX1cIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0UGxhY2Vob2xkZXIoc3RvcClcIlxuICAgICAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJzdG9wLnRleHRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk51bWJlclwiXG4gICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cyhzdG9wKVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cInN0b3AudGV4dFwiXG4gICAgICAgICAgICAoa2V5dXApPVwic2V0U3RvcFRleHQoJGV2ZW50LHN0b3ApXCJcbiAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcbiAgICAgICAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiPlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgbWF0LWJ1dHRvbiBcbiAgICAgICAgICAgICpuZ0lmPVwiKHN0b3AudGV4dCB8fCBzdG9wLmNvb3JkaW5hdGVzKSAmJiBzdG9wV2l0aEhvdmVyICYmIHN0b3AuaWQ9PT1zdG9wV2l0aEhvdmVyLmlkXCJcbiAgICAgICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uZGlyZWN0aW9uc0Zvcm0uY2xlYXJTdG9wJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICBtYXRTdWZmaXggbWF0LWljb24tYnV0dG9uIGNvbG9yPVwid2FyblwiIGFyaWEtbGFiZWw9XCJDbGVhclwiIChjbGljayk9XCJjbGVhclN0b3Aoc3RvcClcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiY2xvc2VcIj48L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIFxuICAgICAgICA8bWF0LWF1dG9jb21wbGV0ZSBbZGlzcGxheVdpdGhdPVwiZ2V0T3B0aW9uVGV4dFwiICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCIgKG9wdGlvblNlbGVjdGVkKT1cImNob29zZVByb3Bvc2FsKCRldmVudCxzdG9wKVwiPlxuICAgICAgICAgIDxtYXQtb3B0Z3JvdXAgKm5nRm9yPVwibGV0IHNvdXJjZSBvZiBzdG9wLnNlYXJjaFByb3Bvc2Fsc1wiIFtsYWJlbF09XCJzb3VyY2Uuc291cmNlLnRpdGxlXCIgW2Rpc2FibGVkXT1cInNvdXJjZS5zb3VyY2UuZW5hYmxlZCA9PT0gZmFsc2VcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcmVzdWx0IG9mIHNvdXJjZS5yZXN1bHRzXCIgW3ZhbHVlXT1cInJlc3VsdFwiIFxuICAgICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIiBbbWF0VG9vbHRpcF09XCJyZXN1bHQubWV0YSA/IHJlc3VsdC5tZXRhLnRpdGxlIDogJydcIj5cbiAgICAgICAgICAgIHt7IHJlc3VsdC5tZXRhID8gcmVzdWx0Lm1ldGEudGl0bGUgOiAnJyB9fVxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICA8L21hdC1vcHRncm91cD5cbiAgICAgICAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cblxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJpZ28tZm9ybS1idXR0b24tZ3JvdXBcIiAqbmdJZj1cIiFzdG9wSXNEcmFnZ2VkICYmIHN0b3BXaXRoSG92ZXIgJiYgc3RvcC5pZCA9PT0gc3RvcFdpdGhIb3Zlci5pZFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInN3aXBlLXZlcnRpY2FsXCIgY2RrRHJhZ0hhbmRsZSBtYXQtaWNvbi1idXR0b24gdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCIgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLm1vdmVTdG9wJyB8IHRyYW5zbGF0ZVwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImdlc3R1cmUtc3dpcGUtdmVydGljYWxcIj48L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gKm5nSWY9XCIoc3RvcHNTdG9yZS5jb3VudCQgfCBhc3luYyk+IDJcIiBtYXQtaWNvbi1idXR0b24gdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCIgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLnJlbW92ZVN0b3AnIHwgdHJhbnNsYXRlXCIgY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cInJlbW92ZVN0b3Aoc3RvcClcIj5cbiAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJkZWxldGVcIj48L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwiKHN0b3BzU3RvcmUuY291bnQkIHwgYXN5bmMpPD0gMlwiIGRpc2FibGVkPVwidHJ1ZVwiIG1hdC1pY29uLWJ1dHRvbiB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCIgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uZGlyZWN0aW9uc0Zvcm0ucmVtb3ZlU3RvcCcgfCB0cmFuc2xhdGVcIiBjb2xvcj1cIndhcm5cIj5cbiAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJibGFua1wiPjwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=