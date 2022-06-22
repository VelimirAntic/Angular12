import { Component, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { formatDistance, formatDuration, formatInstruction } from '../shared/directions.utils';
import olFeature from 'ol/Feature';
import OlGeoJSON from 'ol/format/GeoJSON';
import * as olGeom from 'ol/geom';
import { FEATURE } from '../../feature/shared/feature.enums';
import { DirectionType } from '../shared/directions.enum';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/list";
import * as i4 from "@angular/material/divider";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/forms";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/icon";
import * as i10 from "@ngx-translate/core";
function DirectionsResultsComponent_div_0_mat_form_field_1_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const direction_r5 = ctx.$implicit;
    const cnt_r6 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", direction_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate3(" Option ", cnt_r6 + 1, " : ", ctx_r4.formatDistance(direction_r5.distance), " (", ctx_r4.formatDuration(direction_r5.duration), ") ");
} }
function DirectionsResultsComponent_div_0_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-select", 7);
    i0.ɵɵlistener("selectionChange", function DirectionsResultsComponent_div_0_mat_form_field_1_Template_mat_select_selectionChange_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.changeRoute(); })("ngModelChange", function DirectionsResultsComponent_div_0_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.activeDirection = $event; });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵtemplate(3, DirectionsResultsComponent_div_0_mat_form_field_1_mat_option_3_Template, 2, 4, "mat-option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(2, 3, "igo.geo.directionsForm.drivingOptions"));
    i0.ɵɵproperty("ngModel", ctx_r1.activeDirection);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.directions);
} }
function DirectionsResultsComponent_div_0_mat_divider_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function DirectionsResultsComponent_div_0_mat_list_item_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item", 10);
    i0.ɵɵlistener("mouseenter", function DirectionsResultsComponent_div_0_mat_list_item_8_Template_mat_list_item_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const step_r10 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.showSegment(step_r10); })("click", function DirectionsResultsComponent_div_0_mat_list_item_8_Template_mat_list_item_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const step_r10 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.showSegment(step_r10, true); });
    i0.ɵɵelement(1, "mat-icon", 11);
    i0.ɵɵelementStart(2, "h4", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h4", 13);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r10 = ctx.$implicit;
    const cnt_r11 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r3.formatStep(step_r10, cnt_r11).image);
    i0.ɵɵproperty("ngClass", ctx_r3.formatStep(step_r10, cnt_r11).cssClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", cnt_r11 + 1, ". ", ctx_r3.formatStep(step_r10, cnt_r11).instruction, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatDistance(step_r10.distance));
} }
function DirectionsResultsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, DirectionsResultsComponent_div_0_mat_form_field_1_Template, 4, 5, "mat-form-field", 2);
    i0.ɵɵtemplate(2, DirectionsResultsComponent_div_0_mat_divider_2_Template, 1, 0, "mat-divider", 2);
    i0.ɵɵelementStart(3, "mat-list", 3);
    i0.ɵɵlistener("mouseleave", function DirectionsResultsComponent_div_0_Template_mat_list_mouseleave_3_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onStepsListBlur(); });
    i0.ɵɵelementStart(4, "h2", 4);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2", 5);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, DirectionsResultsComponent_div_0_mat_list_item_8_Template, 6, 5, "mat-list-item", 6);
    i0.ɵɵelement(9, "mat-divider");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.directions && ctx_r0.directions.length > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.directions && ctx_r0.directions.length === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.activeDirection.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.formatDistance(ctx_r0.activeDirection.distance), ", ", ctx_r0.formatDuration(ctx_r0.activeDirection.duration), "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.activeDirection.steps);
} }
export class DirectionsResultsComponent {
    constructor(languageService, cdRef) {
        this.languageService = languageService;
        this.cdRef = cdRef;
    }
    ngOnInit() {
        this.entities$$ = this.routesFeatureStore.entities$
            .pipe(debounceTime(200))
            .subscribe(entities => {
            const activeFeatureWithDirection = entities.find(entity => entity.properties.active);
            this.directions = entities.map(entity => entity.properties.direction);
            if (activeFeatureWithDirection) {
                this.activeDirection = activeFeatureWithDirection.properties.direction;
            }
            else {
                this.activeDirection = undefined;
            }
            this.cdRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.entities$$.unsubscribe();
    }
    changeRoute() {
        this.routesFeatureStore.entities$.value.map(entity => entity.properties.active = !entity.properties.active);
        this.routesFeatureStore.layer.ol.getSource().getFeatures().map(feature => feature.set('active', !feature.get('active')));
    }
    formatDistance(distance) {
        return formatDistance(distance);
    }
    formatDuration(duration) {
        return formatDuration(duration);
    }
    formatStep(step, cnt) {
        return formatInstruction(step.maneuver.type, step.maneuver.modifier, step.name, step.maneuver.bearing_after, cnt, step.maneuver.exit, this.languageService, cnt === this.activeDirection.steps.length - 1);
    }
    onStepsListBlur() {
        this.stepFeatureStore.clear();
    }
    showSegment(step, zoomToExtent = false) {
        this.showRouteSegmentGeometry(step, zoomToExtent);
    }
    showRouteSegmentGeometry(step, zoomToExtent = false) {
        const coordinates = step.geometry.coordinates;
        const vertexId = 'vertex';
        const geometry4326 = new olGeom.LineString(coordinates);
        const geometryMapProjection = geometry4326.transform('EPSG:4326', this.stepFeatureStore.layer.map.projection);
        const routeSegmentCoordinates = geometryMapProjection.getCoordinates();
        const lastPoint = routeSegmentCoordinates[0];
        const geometry = new olGeom.Point(lastPoint);
        const feature = new olFeature({ geometry });
        const geojsonGeom = new OlGeoJSON().writeGeometryObject(geometry, {
            featureProjection: this.stepFeatureStore.layer.map.projection,
            dataProjection: this.stepFeatureStore.layer.map.projection
        });
        const previousVertex = this.stepFeatureStore.get(vertexId);
        const previousVertexRevision = previousVertex
            ? previousVertex.meta.revision
            : 0;
        const stepFeature = {
            type: FEATURE,
            geometry: geojsonGeom,
            projection: this.stepFeatureStore.layer.map.projection,
            properties: {
                id: vertexId,
                step,
                type: DirectionType.Vertex
            },
            meta: {
                id: vertexId,
                revision: previousVertexRevision + 1
            },
            ol: feature
        };
        this.stepFeatureStore.update(stepFeature);
        if (zoomToExtent) {
            this.stepFeatureStore.layer.map.viewController.zoomToExtent(feature.getGeometry().getExtent());
        }
    }
}
DirectionsResultsComponent.ɵfac = function DirectionsResultsComponent_Factory(t) { return new (t || DirectionsResultsComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
DirectionsResultsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DirectionsResultsComponent, selectors: [["igo-directions-results"]], inputs: { routesFeatureStore: "routesFeatureStore", stepFeatureStore: "stepFeatureStore" }, decls: 1, vars: 1, consts: [["class", "igo-input-container", 4, "ngIf"], [1, "igo-input-container"], [4, "ngIf"], [3, "mouseleave"], ["mat-header", "", 1, "igo-route-title", "mat-typography"], ["mat-subheader", ""], ["class", "igo-steps", "igoListItem", "", 3, "mouseenter", "click", 4, "ngFor", "ngForOf"], [3, "placeholder", "ngModel", "selectionChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["igoListItem", "", 1, "igo-steps", 3, "mouseenter", "click"], ["mat-list-icon", "", 3, "ngClass", "svgIcon"], ["mat-line", ""], ["mat-line", "", 1, "right"]], template: function DirectionsResultsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DirectionsResultsComponent_div_0_Template, 10, 6, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.directions && ctx.activeDirection);
    } }, directives: [i2.NgIf, i3.MatList, i3.MatListSubheaderCssMatStyler, i2.NgForOf, i4.MatDivider, i5.MatFormField, i6.MatSelect, i7.NgControlStatus, i7.NgModel, i8.MatOption, i3.MatListItem, i9.MatIcon, i3.MatListIconCssMatStyler, i2.NgClass, i8.MatLine], pipes: [i10.TranslatePipe], styles: [".igo-input-container[_ngcontent-%COMP%]{width:100%;padding:20px 10px}.igo-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:70%}.igo-route-title[_ngcontent-%COMP%]{font-weight:bold}.igo-steps[_ngcontent-%COMP%]{cursor:pointer}.mat-line[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:pre-wrap!important}.mat-line.right[_ngcontent-%COMP%]{text-align:right}.rotate-90[_ngcontent-%COMP%]{transform:rotate(90deg)}.rotate-45[_ngcontent-%COMP%]{transform:rotate(45deg)}.rotate-270[_ngcontent-%COMP%]{transform:rotate(270deg)}.rotate-250[_ngcontent-%COMP%]{transform:rotate(250deg)}.rotate-290[_ngcontent-%COMP%]{transform:rotate(290deg)}.icon-flipped[_ngcontent-%COMP%]{transform:scaleY(-1)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectionsResultsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-directions-results',
                templateUrl: './directions-results.component.html',
                styleUrls: ['./directions-results.component.scss']
            }]
    }], function () { return [{ type: i1.LanguageService }, { type: i0.ChangeDetectorRef }]; }, { routesFeatureStore: [{
            type: Input
        }], stepFeatureStore: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9ucy1yZXN1bHRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2RpcmVjdGlvbnMvZGlyZWN0aW9ucy1yZXN1bHRzL2RpcmVjdGlvbnMtcmVzdWx0cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kaXJlY3Rpb25zL2RpcmVjdGlvbnMtcmVzdWx0cy9kaXJlY3Rpb25zLXJlc3VsdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUd2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUcvRixPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxTQUFTLE1BQU0sbUJBQW1CLENBQUM7QUFDMUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFHbEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ1g5QyxxQ0FBdUY7SUFDbkYsWUFFSjtJQUFBLGlCQUFhOzs7OztJQUhzRCxvQ0FBbUI7SUFDbEYsZUFFSjtJQUZJLDRKQUVKOzs7O0lBTlIsc0NBQTREO0lBQ3hELHFDQUNvRTtJQUFoRSx5T0FBaUMseU9BQUE7O0lBQ2pDLGdIQUdhO0lBQ2pCLGlCQUFhO0lBQ2pCLGlCQUFpQjs7O0lBUEQsZUFBcUU7SUFBckUsc0dBQXFFO0lBQzNDLGdEQUE2QjtJQUM3QixlQUFlO0lBQWYsMkNBQWU7OztJQU96RCw4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QUFDLFNBQVMsRUFBc0MsQ0FBQyxDQUFDO1NBQ3BJO0lBQ0gsQ0FBQzs7b0dBcEhVLDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FDdEJ2Qyw0RUErQk07O1FBL0I0Qiw0REFBbUM7O3VGRHNCeEQsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRDtrR0FRVSxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRmVhdHVyZVdpdGhTdGVwLCBJZ29TdGVwIH0gZnJvbSAnLi4vc2hhcmVkL2RpcmVjdGlvbnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlLCBmb3JtYXREdXJhdGlvbiwgZm9ybWF0SW5zdHJ1Y3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvZGlyZWN0aW9ucy51dGlscyc7XG5pbXBvcnQgeyBSb3V0ZXNGZWF0dXJlU3RvcmUsIFN0ZXBGZWF0dXJlU3RvcmUgfSBmcm9tICcuLi9zaGFyZWQvc3RvcmUnO1xuXG5pbXBvcnQgb2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IE9sR2VvSlNPTiBmcm9tICdvbC9mb3JtYXQvR2VvSlNPTic7XG5pbXBvcnQgKiBhcyBvbEdlb20gZnJvbSAnb2wvZ2VvbSc7XG5cbmltcG9ydCB7IEZlYXR1cmVHZW9tZXRyeSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBGRUFUVVJFIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQvZmVhdHVyZS5lbnVtcyc7XG5pbXBvcnQgeyBEaXJlY3Rpb25UeXBlIH0gZnJvbSAnLi4vc2hhcmVkL2RpcmVjdGlvbnMuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1kaXJlY3Rpb25zLXJlc3VsdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlyZWN0aW9ucy1yZXN1bHRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlyZWN0aW9ucy1yZXN1bHRzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0aW9uc1Jlc3VsdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGFjdGl2ZURpcmVjdGlvbjogRGlyZWN0aW9uO1xuICBwdWJsaWMgZGlyZWN0aW9uczogRGlyZWN0aW9uW107XG5cbiAgcHJpdmF0ZSBlbnRpdGllcyQkOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KCkgcm91dGVzRmVhdHVyZVN0b3JlOiBSb3V0ZXNGZWF0dXJlU3RvcmU7XG4gIEBJbnB1dCgpIHN0ZXBGZWF0dXJlU3RvcmU6IFN0ZXBGZWF0dXJlU3RvcmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZW50aXRpZXMkJCA9IHRoaXMucm91dGVzRmVhdHVyZVN0b3JlLmVudGl0aWVzJFxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXG4gICAgICAuc3Vic2NyaWJlKGVudGl0aWVzID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlRmVhdHVyZVdpdGhEaXJlY3Rpb24gPSBlbnRpdGllcy5maW5kKGVudGl0eSA9PiBlbnRpdHkucHJvcGVydGllcy5hY3RpdmUpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBlbnRpdGllcy5tYXAoZW50aXR5ID0+IGVudGl0eS5wcm9wZXJ0aWVzLmRpcmVjdGlvbik7XG4gICAgICAgIGlmIChhY3RpdmVGZWF0dXJlV2l0aERpcmVjdGlvbikge1xuICAgICAgICAgIHRoaXMuYWN0aXZlRGlyZWN0aW9uID0gYWN0aXZlRmVhdHVyZVdpdGhEaXJlY3Rpb24ucHJvcGVydGllcy5kaXJlY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZW50aXRpZXMkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY2hhbmdlUm91dGUoKSB7XG4gICAgdGhpcy5yb3V0ZXNGZWF0dXJlU3RvcmUuZW50aXRpZXMkLnZhbHVlLm1hcChlbnRpdHkgPT5cbiAgICAgIGVudGl0eS5wcm9wZXJ0aWVzLmFjdGl2ZSA9ICFlbnRpdHkucHJvcGVydGllcy5hY3RpdmVcbiAgICApO1xuICAgIHRoaXMucm91dGVzRmVhdHVyZVN0b3JlLmxheWVyLm9sLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCkubWFwKGZlYXR1cmUgPT5cbiAgICAgIGZlYXR1cmUuc2V0KCdhY3RpdmUnLCAhZmVhdHVyZS5nZXQoJ2FjdGl2ZScpKVxuICAgICk7XG4gIH1cblxuICBmb3JtYXREaXN0YW5jZShkaXN0YW5jZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0RGlzdGFuY2UoZGlzdGFuY2UpO1xuICB9XG5cbiAgZm9ybWF0RHVyYXRpb24oZHVyYXRpb246IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdER1cmF0aW9uKGR1cmF0aW9uKTtcbiAgfVxuXG4gIGZvcm1hdFN0ZXAoc3RlcCwgY250KSB7XG4gICAgcmV0dXJuIGZvcm1hdEluc3RydWN0aW9uKFxuICAgICAgc3RlcC5tYW5ldXZlci50eXBlLFxuICAgICAgc3RlcC5tYW5ldXZlci5tb2RpZmllcixcbiAgICAgIHN0ZXAubmFtZSxcbiAgICAgIHN0ZXAubWFuZXV2ZXIuYmVhcmluZ19hZnRlcixcbiAgICAgIGNudCxcbiAgICAgIHN0ZXAubWFuZXV2ZXIuZXhpdCxcbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgY250ID09PSB0aGlzLmFjdGl2ZURpcmVjdGlvbi5zdGVwcy5sZW5ndGggLSAxXG4gICAgKTtcbiAgfVxuXG4gIG9uU3RlcHNMaXN0Qmx1cigpIHtcbiAgICB0aGlzLnN0ZXBGZWF0dXJlU3RvcmUuY2xlYXIoKTtcbiAgfVxuXG4gIHNob3dTZWdtZW50KHN0ZXA6IElnb1N0ZXAsIHpvb21Ub0V4dGVudCA9IGZhbHNlKSB7XG4gICAgdGhpcy5zaG93Um91dGVTZWdtZW50R2VvbWV0cnkoc3RlcCwgem9vbVRvRXh0ZW50KTtcbiAgfVxuXG4gIHNob3dSb3V0ZVNlZ21lbnRHZW9tZXRyeShzdGVwOiBJZ29TdGVwLCB6b29tVG9FeHRlbnQgPSBmYWxzZSkge1xuXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBzdGVwLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IHZlcnRleElkID0gJ3ZlcnRleCc7XG4gICAgY29uc3QgZ2VvbWV0cnk0MzI2ID0gbmV3IG9sR2VvbS5MaW5lU3RyaW5nKGNvb3JkaW5hdGVzKTtcbiAgICBjb25zdCBnZW9tZXRyeU1hcFByb2plY3Rpb24gPSBnZW9tZXRyeTQzMjYudHJhbnNmb3JtKFxuICAgICAgJ0VQU0c6NDMyNicsXG4gICAgICB0aGlzLnN0ZXBGZWF0dXJlU3RvcmUubGF5ZXIubWFwLnByb2plY3Rpb25cbiAgICApO1xuICAgIGNvbnN0IHJvdXRlU2VnbWVudENvb3JkaW5hdGVzID0gKGdlb21ldHJ5TWFwUHJvamVjdGlvbiBhcyBhbnkpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgY29uc3QgbGFzdFBvaW50ID0gcm91dGVTZWdtZW50Q29vcmRpbmF0ZXNbMF07XG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBvbEdlb20uUG9pbnQobGFzdFBvaW50KTtcbiAgICBjb25zdCBmZWF0dXJlID0gbmV3IG9sRmVhdHVyZSh7IGdlb21ldHJ5IH0pO1xuXG4gICAgY29uc3QgZ2VvanNvbkdlb20gPSBuZXcgT2xHZW9KU09OKCkud3JpdGVHZW9tZXRyeU9iamVjdChnZW9tZXRyeSwge1xuICAgICAgZmVhdHVyZVByb2plY3Rpb246IHRoaXMuc3RlcEZlYXR1cmVTdG9yZS5sYXllci5tYXAucHJvamVjdGlvbixcbiAgICAgIGRhdGFQcm9qZWN0aW9uOiB0aGlzLnN0ZXBGZWF0dXJlU3RvcmUubGF5ZXIubWFwLnByb2plY3Rpb25cbiAgICB9KSBhcyBGZWF0dXJlR2VvbWV0cnk7XG5cbiAgICBjb25zdCBwcmV2aW91c1ZlcnRleCA9IHRoaXMuc3RlcEZlYXR1cmVTdG9yZS5nZXQodmVydGV4SWQpO1xuICAgIGNvbnN0IHByZXZpb3VzVmVydGV4UmV2aXNpb24gPSBwcmV2aW91c1ZlcnRleFxuICAgICAgPyBwcmV2aW91c1ZlcnRleC5tZXRhLnJldmlzaW9uXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCBzdGVwRmVhdHVyZTogRmVhdHVyZVdpdGhTdGVwID0ge1xuICAgICAgdHlwZTogRkVBVFVSRSxcbiAgICAgIGdlb21ldHJ5OiBnZW9qc29uR2VvbSxcbiAgICAgIHByb2plY3Rpb246IHRoaXMuc3RlcEZlYXR1cmVTdG9yZS5sYXllci5tYXAucHJvamVjdGlvbixcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWQ6IHZlcnRleElkLFxuICAgICAgICBzdGVwLFxuICAgICAgICB0eXBlOiBEaXJlY3Rpb25UeXBlLlZlcnRleFxuICAgICAgfSxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgaWQ6IHZlcnRleElkLFxuICAgICAgICByZXZpc2lvbjogcHJldmlvdXNWZXJ0ZXhSZXZpc2lvbiArIDFcbiAgICAgIH0sXG4gICAgICBvbDogZmVhdHVyZVxuICAgIH07XG4gICAgdGhpcy5zdGVwRmVhdHVyZVN0b3JlLnVwZGF0ZShzdGVwRmVhdHVyZSk7XG4gICAgaWYgKHpvb21Ub0V4dGVudCkge1xuICAgICAgdGhpcy5zdGVwRmVhdHVyZVN0b3JlLmxheWVyLm1hcC52aWV3Q29udHJvbGxlci56b29tVG9FeHRlbnQoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldEV4dGVudCgpIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKTtcbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIiAqbmdJZj1cImRpcmVjdGlvbnMgJiYgYWN0aXZlRGlyZWN0aW9uXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiZGlyZWN0aW9ucyAmJiBkaXJlY3Rpb25zLmxlbmd0aCA+IDFcIj5cbiAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJ7eydpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLmRyaXZpbmdPcHRpb25zJyB8IHRyYW5zbGF0ZX19XCJcbiAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwiY2hhbmdlUm91dGUoKVwiIFsobmdNb2RlbCldPVwiYWN0aXZlRGlyZWN0aW9uXCI+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZGlyZWN0aW9uIG9mIGRpcmVjdGlvbnM7IGxldCBjbnQgPSBpbmRleDtcIiBbdmFsdWVdPVwiZGlyZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgT3B0aW9uIHt7Y250ICsgMX19IDoge3tmb3JtYXREaXN0YW5jZShkaXJlY3Rpb24uZGlzdGFuY2UpfX1cbiAgICAgICAgICAgICAgICAoe3tmb3JtYXREdXJhdGlvbihkaXJlY3Rpb24uZHVyYXRpb24pfX0pXG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1kaXZpZGVyICpuZ0lmPVwiZGlyZWN0aW9ucyAmJiBkaXJlY3Rpb25zLmxlbmd0aCA9PT0gMFwiPjwvbWF0LWRpdmlkZXI+XG5cbiAgICA8bWF0LWxpc3QgKG1vdXNlbGVhdmUpPVwib25TdGVwc0xpc3RCbHVyKClcIj5cbiAgICAgICAgPGgyIG1hdC1oZWFkZXIgY2xhc3M9XCJpZ28tcm91dGUtdGl0bGUgbWF0LXR5cG9ncmFwaHlcIj57e2FjdGl2ZURpcmVjdGlvbi50aXRsZX19PC9oMj5cbiAgICAgICAgPGgyIG1hdC1zdWJoZWFkZXI+e3tmb3JtYXREaXN0YW5jZShhY3RpdmVEaXJlY3Rpb24uZGlzdGFuY2UpfX0sIHt7Zm9ybWF0RHVyYXRpb24oYWN0aXZlRGlyZWN0aW9uLmR1cmF0aW9uKX19PC9oMj5cbiAgICAgICAgPG1hdC1saXN0LWl0ZW0gY2xhc3M9XCJpZ28tc3RlcHNcIiBcbiAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNob3dTZWdtZW50KHN0ZXApXCIgXG4gICAgICAgICAgICAoY2xpY2spPVwic2hvd1NlZ21lbnQoc3RlcCx0cnVlKVwiIFxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IHN0ZXAgb2YgYWN0aXZlRGlyZWN0aW9uLnN0ZXBzOyBsZXQgY250ID0gaW5kZXg7XCIgaWdvTGlzdEl0ZW0+XG4gICAgICAgICAgICA8bWF0LWljb24gW25nQ2xhc3NdPVwiZm9ybWF0U3RlcChzdGVwLGNudCkuY3NzQ2xhc3NcIiBtYXQtbGlzdC1pY29uIHN2Z0ljb249XCJ7e2Zvcm1hdFN0ZXAoc3RlcCxjbnQpLmltYWdlfX1cIj5cbiAgICAgICAgICAgIDwvbWF0LWljb24+XG5cbiAgICAgICAgICAgIDxoNCBtYXQtbGluZT57e2NudCArMX19LiB7e2Zvcm1hdFN0ZXAoc3RlcCxjbnQpLmluc3RydWN0aW9ufX08L2g0PlxuICAgICAgICAgICAgPGg0IG1hdC1saW5lIGNsYXNzPVwicmlnaHRcIj57e2Zvcm1hdERpc3RhbmNlKHN0ZXAuZGlzdGFuY2UpfX08L2g0PlxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG5cbiAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG5cbiAgICA8L21hdC1saXN0PlxuXG48L2Rpdj4iXX0=