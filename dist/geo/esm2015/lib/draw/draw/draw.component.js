import { Component, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import { FEATURE, FeatureStoreSelectionStrategy, tryBindStoreLayer, tryAddLoadingStrategy, tryAddSelectionStrategy, FeatureMotion, FeatureStoreLoadingStrategy } from '../../feature';
import { GeometryType } from '../shared/draw.enum';
import { BehaviorSubject } from 'rxjs';
import { VectorLayer } from '../../layer/shared/layers/vector-layer';
import { FeatureDataSource } from '../../datasource/shared/datasources/feature-datasource';
import { DrawControl } from '../../geometry/shared/controls/draw';
import * as OlStyle from 'ol/style';
import OlVectorSource from 'ol/source/Vector';
import OlCircle from 'ol/geom/Circle';
import OlPoint from 'ol/geom/Point';
import OlGeoJSON from 'ol/format/GeoJSON';
import { getDistance } from 'ol/sphere';
import { skip } from 'rxjs/operators';
import { DrawPopupComponent } from './draw-popup.component';
import { DrawShorcutsComponent } from './draw-shorcuts.component';
import { getTooltipsOfOlGeometry } from '../../measure/shared/measure.utils';
import { createInteractionStyle } from '../shared/draw.utils';
import { transform } from 'ol/proj';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/forms";
import * as i3 from "../shared/draw-style.service";
import * as i4 from "@angular/material/dialog";
import * as i5 from "../shared/draw-icon.service";
import * as i6 from "@angular/material/button-toggle";
import * as i7 from "@angular/material/slide-toggle";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/form-field";
import * as i10 from "@angular/material/tooltip";
import * as i11 from "@angular/material/input";
import * as i12 from "ngx-color-picker";
import * as i13 from "@angular/common";
import * as i14 from "@angular/material/divider";
import * as i15 from "@igo2/common";
import * as i16 from "@angular/material/button";
import * as i17 from "@angular/material/select";
import * as i18 from "@angular/material/core";
import * as i19 from "@ngx-translate/core";
function DrawComponent_mat_form_field_46_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelement(1, "img", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("src", ctx_r3.icon, i0.ɵɵsanitizeUrl);
} }
function DrawComponent_mat_form_field_46_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵlistener("click", function DrawComponent_mat_form_field_46_mat_option_10_Template_mat_option_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const icon_html_r5 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.onIconChange(icon_html_r5); });
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵelement(2, "img", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const icon_html_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", icon_html_r5);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("src", icon_html_r5, i0.ɵɵsanitizeUrl);
} }
function DrawComponent_mat_form_field_46_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select");
    i0.ɵɵelementStart(5, "mat-select-trigger");
    i0.ɵɵtemplate(6, DrawComponent_mat_form_field_46_div_6_Template, 2, 1, "div", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-option", 22);
    i0.ɵɵlistener("click", function DrawComponent_mat_form_field_46_Template_mat_option_click_7_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onIconChange(); });
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, DrawComponent_mat_form_field_46_mat_option_10_Template, 3, 2, "mat-option", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "igo.geo.draw.icon"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 6, "igo.geo.draw.noIcon"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.icons);
} }
function DrawComponent_button_49_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function DrawComponent_button_49_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.deleteDrawings(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelement(3, "mat-icon", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.geo.draw.delete"))("disabled", i0.ɵɵpipeBind1(2, 4, ctx_r1.selectedFeatures$).length === 0);
} }
export class DrawComponent {
    constructor(languageService, formBuilder, drawStyleService, dialog, drawIconService) {
        this.languageService = languageService;
        this.formBuilder = formBuilder;
        this.drawStyleService = drawStyleService;
        this.dialog = dialog;
        this.drawIconService = drawIconService;
        /**
         * Table template
         * @internal
         */
        this.tableTemplate = {
            selection: true,
            selectMany: true,
            selectionCheckbox: true,
            sort: true,
            columns: [{
                    name: 'Drawing',
                    title: this.languageService.translate.instant('igo.geo.draw.labels'),
                    valueAccessor: (feature) => {
                        return feature.properties.draw;
                    }
                }]
        };
        this.geometryType = GeometryType; // Reference to the GeometryType enum
        this.draw$ = new BehaviorSubject({}); // Observable of draw
        this.olDrawingLayerSource = new OlVectorSource();
        this.selectedFeatures$ = new BehaviorSubject([]);
        this.drawControlIsDisabled = true;
        this.drawControlIsActive = false;
        this.subscriptions$$ = [];
        this.position = 'bottom';
        this.buildForm();
        this.fillColor = this.drawStyleService.getFillColor();
        this.strokeColor = this.drawStyleService.getStrokeColor();
        this.strokeWidth = this.drawStyleService.getStrokeWidth();
        this.labelsAreShown = this.drawStyleService.getLabelsAreShown();
        this.icons = this.drawIconService.getIcons();
        this.icon = this.drawStyleService.getIcon();
    }
    // Initialize the store that will contain the entities and create the Draw control
    ngOnInit() {
        this.initStore();
        this.drawControl = this.createDrawControl(this.fillColor, this.strokeColor, this.strokeWidth);
        this.drawControl.setGeometryType(this.geometryType.Point);
        this.toggleDrawControl();
    }
    /**
     * Remove the drawing layer and the interactions
     * @internal
     */
    ngOnDestroy() {
        this.drawControl.setOlMap(undefined);
        this.subscriptions$$.map(s => s.unsubscribe());
    }
    /**
     * Create a Draw Control
     * @param fillColor the fill color
     * @param strokeColor the stroke color
     * @param strokeWidth the stroke width
     * @returns a Draw Control
     */
    createDrawControl(fillColor, strokeColor, strokeWidth) {
        const drawControl = new DrawControl({
            geometryType: undefined,
            drawingLayerSource: this.olDrawingLayerSource,
            drawingLayerStyle: new OlStyle.Style({}),
            interactionStyle: createInteractionStyle(fillColor, strokeColor, strokeWidth),
        });
        return drawControl;
    }
    /**
     * Called when the user selects a new geometry type
     * @param geometryType the geometry type selected by the user
     */
    onGeometryTypeChange(geometryType) {
        this.drawControl.setGeometryType(geometryType);
        this.toggleDrawControl();
    }
    /**
     * Store initialization, including drawing layer creation
     */
    initStore() {
        this.map.removeLayer(this.olDrawingLayer);
        this.olDrawingLayer = new VectorLayer({
            isIgoInternalLayer: true,
            id: 'igo-draw-layer',
            title: this.languageService.translate.instant('igo.geo.draw.drawing'),
            zIndex: 200,
            source: new FeatureDataSource(),
            style: (feature, resolution) => {
                return this.drawStyleService.createDrawingLayerStyle(feature, resolution, this.labelsAreShown, this.icon);
            },
            showInLayerList: true,
            exportable: true,
            browsable: false,
            workspace: {
                enabled: false
            },
        });
        tryBindStoreLayer(this.store, this.olDrawingLayer);
        tryAddLoadingStrategy(this.store, new FeatureStoreLoadingStrategy({
            motion: FeatureMotion.None
        }));
        tryAddSelectionStrategy(this.store, new FeatureStoreSelectionStrategy({
            map: this.map,
            motion: FeatureMotion.None,
            many: true
        }));
        this.store.layer.visible = true;
        this.store.source.ol.on('removefeature', (event) => {
            const olGeometry = event.feature.getGeometry();
            this.clearLabelsOfOlGeometry(olGeometry);
        });
        this.subscriptions$$.push(this.store.stateView.manyBy$((record) => {
            return record.state.selected === true;
        }).pipe(skip(1) // Skip initial emission
        ).subscribe((records) => {
            this.selectedFeatures$.next(records.map(record => record.entity));
        }));
        this.subscriptions$$.push(this.store.count$.subscribe(cnt => {
            cnt >= 1 ? this.store.layer.options.showInLayerList = true : this.store.layer.options.showInLayerList = false;
        }));
    }
    /**
     * Called when the user changes the color in a color picker
     * @param labelsAreShown wheter the labels are shown or not
     * @param isAnIcon wheter the feature is an icon or not
     */
    onColorChange(labelsAreShown, isAnIcon) {
        this.fillForm = this.fillColor;
        this.strokeForm = this.strokeColor;
        this.drawStyleService.setFillColor(this.fillColor);
        this.drawStyleService.setStrokeColor(this.strokeColor);
        if (isAnIcon) {
            this.store.layer.ol.setStyle((feature, resolution) => {
                return this.drawStyleService.createDrawingLayerStyle(feature, resolution, labelsAreShown, this.icon);
            });
            this.icon = undefined;
        }
        else {
            this.store.layer.ol.setStyle((feature, resolution) => {
                return this.drawStyleService.createDrawingLayerStyle(feature, resolution, labelsAreShown);
            });
        }
        this.createDrawControl();
    }
    /**
     * Called when the user toggles the Draw control is toggled
     * @internal
     */
    onToggleDrawControl(toggleIsChecked) {
        toggleIsChecked ? this.toggleDrawControl() : this.deactivateDrawControl();
    }
    /**
     * Activate the correct control
     */
    toggleDrawControl() {
        this.deactivateDrawControl();
        this.activateDrawControl();
    }
    /**
     * Open a dialog box to enter label and do something
     * @param olGeometry geometry at draw end or selected geometry
     * @param drawEnd event fired at drawEnd?
     */
    openDialog(olGeometryFeature, isDrawEnd) {
        setTimeout(() => {
            // open the dialog box used to enter label
            const dialogRef = this.dialog.open(DrawPopupComponent, {
                disableClose: false,
                data: { currentLabel: olGeometryFeature.get('draw') }
            });
            // when dialog box is closed, get label and set it to geometry
            dialogRef.afterClosed().subscribe((label) => {
                this.updateLabelOfOlGeometry(olGeometryFeature, label);
                // if event was fired at draw end
                if (isDrawEnd) {
                    this.onDrawEnd(olGeometryFeature);
                    // if event was fired at select
                }
                else {
                    this.onSelectDraw(olGeometryFeature, label);
                }
            });
        }, 250);
    }
    /**
     * Activate a given control
     */
    activateDrawControl() {
        this.drawControlIsDisabled = false;
        this.drawControlIsActive = true;
        this.drawEnd$$ = this.drawControl.end$.subscribe((olGeometry) => {
            this.openDialog(olGeometry, true);
        });
        this.drawControl.modify$.subscribe((olGeometry) => {
            this.onModifyDraw(olGeometry);
        });
        if (!this.drawSelect$$) {
            this.drawSelect$$ = this.drawControl.select$.subscribe((olFeature) => {
                this.openDialog(olFeature, false);
            });
        }
        this.drawControl.setOlMap(this.map.ol, true);
    }
    /**
     * Deactivate the active draw control
     */
    deactivateDrawControl() {
        if (!this.drawControl) {
            return;
        }
        if (this.drawEnd$$) {
            this.drawEnd$$.unsubscribe();
        }
        this.drawControl.setOlMap(undefined);
        this.drawControlIsActive = false;
    }
    /**
     * Clear the draw source and track the geometry being draw
     * @param olGeometry Ol linestring or polygon
     */
    onDrawEnd(olGeometry, radius) {
        this.addFeatureToStore(olGeometry, radius);
        this.clearLabelsOfOlGeometry(olGeometry);
        this.store.layer.ol.getSource().refresh();
    }
    onModifyDraw(olGeometry) {
        const entities = this.store.all();
        entities.forEach(entity => {
            const entityId = entity.properties.id;
            const olGeometryId = olGeometry.ol_uid;
            if (entityId === olGeometryId) {
                this.updateLabelOfOlGeometry(olGeometry, entity.properties.draw);
                this.replaceFeatureInStore(entity, olGeometry);
            }
        });
    }
    onSelectDraw(olFeature, label) {
        const entities = this.store.all();
        const olGeometry = olFeature.getGeometry();
        olGeometry.ol_uid = olFeature.get('id');
        const olGeometryCoordinates = JSON.stringify(olGeometry.getCoordinates()[0]);
        entities.forEach(entity => {
            const entityCoordinates = JSON.stringify(entity.geometry.coordinates[0]);
            if (olGeometryCoordinates === entityCoordinates) {
                const rad = entity.properties.rad ? entity.properties.rad : undefined;
                this.updateLabelOfOlGeometry(olGeometry, label);
                this.replaceFeatureInStore(entity, olGeometry, rad);
            }
        });
    }
    /**
     * Add a feature with draw label to the store. The loading stragegy of the store
     * will trigger and add the feature to the map.
     * @internal
     */
    addFeatureToStore(olGeometry, radius, feature) {
        let rad;
        let center4326;
        let point4326;
        let lon4326;
        let lat4326;
        const featureId = feature ? feature.properties.id : olGeometry.ol_uid;
        const projection = this.map.ol.getView().getProjection();
        const geometry = new OlGeoJSON().writeGeometryObject(olGeometry, {
            featureProjection: projection,
            dataProjection: projection
        });
        if (olGeometry instanceof OlCircle || radius) {
            if (radius) {
                rad = radius;
            }
            else {
                geometry.type = 'Point';
                geometry.coordinates = olGeometry.getCenter();
                const extent4326 = transform([olGeometry.getFlatCoordinates()[2], olGeometry.getFlatCoordinates()[3]], projection, 'EPSG:4326');
                center4326 = transform([olGeometry.getFlatCoordinates()[0], olGeometry.getFlatCoordinates()[1]], projection, 'EPSG:4326');
                lon4326 = center4326[0];
                lat4326 = center4326[1];
                rad = getDistance(center4326, extent4326);
            }
        }
        if (olGeometry instanceof OlPoint) {
            point4326 = transform(olGeometry.getFlatCoordinates(), projection, 'EPSG:4326');
            lon4326 = point4326[0];
            lat4326 = point4326[1];
        }
        this.store.update({
            type: FEATURE,
            geometry,
            projection: projection.getCode(),
            properties: {
                id: featureId,
                draw: olGeometry.get('_label'),
                longitude: lon4326 ? lon4326 : null,
                latitude: lat4326 ? lat4326 : null,
                rad: rad ? rad : null
            },
            meta: {
                id: featureId
            }
        });
    }
    /**
     * Replace the feature in the store
     * @param entity the entity to replace
     * @param olGeometry the new geometry to insert in the store
     */
    replaceFeatureInStore(entity, olGeometry, radius) {
        this.store.delete(entity);
        this.onDrawEnd(olGeometry, radius);
    }
    buildForm() {
        this.form = this.formBuilder.group({
            fill: [''],
            stroke: ['']
        });
    }
    deleteDrawings() {
        this.store.deleteMany(this.selectedFeatures$.value);
        this.selectedFeatures$.value.forEach(selectedFeature => {
            this.olDrawingLayerSource.getFeatures().forEach(drawingLayerFeature => {
                const geometry = drawingLayerFeature.getGeometry();
                if (selectedFeature.properties.id === geometry.ol_uid) {
                    this.olDrawingLayerSource.removeFeature(drawingLayerFeature);
                }
            });
        });
    }
    /**
     * Clear the tooltips of an OL geometry
     * @param olGeometry OL geometry with tooltips
     */
    clearLabelsOfOlGeometry(olGeometry) {
        getTooltipsOfOlGeometry(olGeometry).forEach((olTooltip) => {
            if (olTooltip && olTooltip.getMap()) {
                this.map.ol.removeOverlay(olTooltip);
            }
        });
    }
    /**
     * Called when the user toggles the labels toggle
     */
    onToggleLabels() {
        this.drawStyleService.toggleLabelsAreShown();
        this.labelsAreShown = !this.labelsAreShown;
        this.icon ? this.onColorChange(this.labelsAreShown, true) : this.onColorChange(this.labelsAreShown, false);
    }
    /**
     * Update the label of a geometry when a label is entered in a dialog box
     * @param olGeometry the geometry
     * @param label the label
     */
    updateLabelOfOlGeometry(olGeometry, label) {
        olGeometry.setProperties({
            _label: label
        }, true);
    }
    onIconChange(event) {
        this.icon = event;
        this.drawStyleService.setIcon(this.icon);
        this.store.layer.ol.setStyle((feature, resolution) => {
            return this.drawStyleService.createDrawingLayerStyle(feature, resolution, true, this.icon);
        });
    }
    openShorcutsDialog() {
        this.dialog.open(DrawShorcutsComponent);
    }
}
DrawComponent.ɵfac = function DrawComponent_Factory(t) { return new (t || DrawComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.DrawStyleService), i0.ɵɵdirectiveInject(i4.MatDialog), i0.ɵɵdirectiveInject(i5.DrawIconService)); };
DrawComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawComponent, selectors: [["igo-draw"]], inputs: { map: "map", store: "store" }, outputs: { fillColor: "fillColor", strokeColor: "strokeColor", strokeWidth: "strokeWidth" }, decls: 55, vars: 78, consts: [[1, "geometry-type-toggle", "mat-typography"], [3, "value", "change"], [3, "value"], [1, "draw-options", "mat-typography"], [3, "disabled", "checked", "labelPosition", "change"], [3, "checked", "labelPosition", "change"], [1, "igo-form", 3, "formGroup"], [1, "fill-color-picker", "mat-typography"], ["svgIcon", "square", 1, "stroke-palette-icon"], ["appearance", "outline", "floatLabel", "always", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "fill-field", 3, "matTooltip"], ["formControlName", "fill", "matInput", "", "type", "text", 3, "colorPicker", "readonly", "cpWidth", "cpOutputFormat", "cpPosition", "cpPositionOffset", "cpCancelButton", "cpCancelButtonText", "cpOKButton", "colorPickerChange"], [1, "stroke-color-picker", "mat-typography"], ["svgIcon", "square-outline", 1, "stroke-palette-icon"], ["appearance", "outline", "floatLabel", "always", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "stroke-field", 3, "matTooltip"], ["formControlName", "stroke", "matInput", "", "type", "text", 3, "colorPicker", "readonly", "cpWidth", "cpPosition", "cpPositionOffset", "cpOutputFormat", "cpCancelButton", "cpCancelButtonText", "cpOKButton", "colorPickerChange"], [4, "ngIf"], ["class", "deleteBtn", "mat-icon-button", "", "color", "warn", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "disabled", "click", 4, "ngIf"], [1, "table-compact", 3, "store", "template"], ["table", ""], ["mat-icon-button", "", "color", "accent", "disableRipple", "true", 3, "click"], ["svgIcon", "keyboard-outline", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "shortcuts-icon", 3, "matTooltip"], ["class", "box", 4, "ngIf"], ["value", "", 3, "click"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "box"], [3, "src"], [3, "value", "click"], ["mat-icon-button", "", "color", "warn", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "deleteBtn", 3, "matTooltip", "disabled", "click"], ["svgIcon", "delete"]], template: function DrawComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "mat-button-toggle-group", 1);
        i0.ɵɵlistener("change", function DrawComponent_Template_mat_button_toggle_group_change_2_listener($event) { return ctx.onGeometryTypeChange($event.value); });
        i0.ɵɵelementStart(3, "mat-button-toggle", 2);
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-button-toggle", 2);
        i0.ɵɵtext(7);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-button-toggle", 2);
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-button-toggle", 2);
        i0.ɵɵtext(13);
        i0.ɵɵpipe(14, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 3);
        i0.ɵɵelementStart(16, "mat-slide-toggle", 4);
        i0.ɵɵlistener("change", function DrawComponent_Template_mat_slide_toggle_change_16_listener($event) { return ctx.onToggleDrawControl($event.checked); });
        i0.ɵɵtext(17);
        i0.ɵɵpipe(18, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-slide-toggle", 5);
        i0.ɵɵlistener("change", function DrawComponent_Template_mat_slide_toggle_change_19_listener() { return ctx.onToggleLabels(); });
        i0.ɵɵtext(20);
        i0.ɵɵpipe(21, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "form", 6);
        i0.ɵɵelementStart(23, "div", 7);
        i0.ɵɵelementStart(24, "span");
        i0.ɵɵelement(25, "mat-icon", 8);
        i0.ɵɵtext(26);
        i0.ɵɵpipe(27, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "mat-form-field", 9);
        i0.ɵɵpipe(29, "translate");
        i0.ɵɵelementStart(30, "mat-label");
        i0.ɵɵtext(31);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "input", 10);
        i0.ɵɵlistener("colorPickerChange", function DrawComponent_Template_input_colorPickerChange_32_listener($event) { return ctx.fillColor = $event; })("colorPickerChange", function DrawComponent_Template_input_colorPickerChange_32_listener() { return ctx.onColorChange(ctx.labelsAreShown, false); });
        i0.ɵɵpipe(33, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "div", 11);
        i0.ɵɵelementStart(35, "span");
        i0.ɵɵelement(36, "mat-icon", 12);
        i0.ɵɵtext(37);
        i0.ɵɵpipe(38, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "mat-form-field", 13);
        i0.ɵɵpipe(40, "translate");
        i0.ɵɵelementStart(41, "mat-label");
        i0.ɵɵtext(42);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "input", 14);
        i0.ɵɵlistener("colorPickerChange", function DrawComponent_Template_input_colorPickerChange_43_listener($event) { return ctx.strokeColor = $event; })("colorPickerChange", function DrawComponent_Template_input_colorPickerChange_43_listener() { return ctx.onColorChange(ctx.labelsAreShown, false); });
        i0.ɵɵpipe(44, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "div");
        i0.ɵɵtemplate(46, DrawComponent_mat_form_field_46_Template, 11, 8, "mat-form-field", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(47, "mat-divider");
        i0.ɵɵelementStart(48, "div");
        i0.ɵɵtemplate(49, DrawComponent_button_49_Template, 4, 6, "button", 16);
        i0.ɵɵelement(50, "igo-entity-table", 17, 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "button", 19);
        i0.ɵɵlistener("click", function DrawComponent_Template_button_click_52_listener() { return ctx.openShorcutsDialog(); });
        i0.ɵɵelement(53, "mat-icon", 20);
        i0.ɵɵpipe(54, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.geometryType.Point);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.geometryType.Point);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 52, "igo.geo.draw." + ctx.geometryType.Point), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.geometryType.LineString);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 54, "igo.geo.draw." + ctx.geometryType.LineString), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.geometryType.Polygon);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 56, "igo.geo.draw." + ctx.geometryType.Polygon), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.geometryType.Circle);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 58, "igo.geo.draw." + ctx.geometryType.Circle), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.drawControlIsDisabled)("checked", ctx.drawControlIsActive)("labelPosition", "before");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(18, 60, "igo.geo.spatialFilter.drawControl"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx.labelsAreShown)("labelPosition", "before");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(21, 62, "igo.geo.draw.toggleMapTooltips"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(27, 64, "igo.geo.draw.fill"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(29, 66, "igo.geo.draw.colorPicker"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.fillColor);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("background", ctx.fillColor);
        i0.ɵɵproperty("colorPicker", ctx.fillColor)("readonly", true)("colorPicker", ctx.fillColor)("cpWidth", "200px")("cpOutputFormat", "rgba")("cpPosition", "bottom")("cpPositionOffset", "-75%")("cpCancelButton", true)("cpCancelButtonText", i0.ɵɵpipeBind1(33, 68, "igo.geo.draw.cancelColorPicker"))("cpOKButton", true);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(38, 70, "igo.geo.draw.stroke"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(40, 72, "igo.geo.draw.colorPicker"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.strokeColor);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("background", ctx.strokeColor);
        i0.ɵɵproperty("colorPicker", ctx.strokeColor)("readonly", true)("colorPicker", ctx.strokeColor)("cpWidth", "200px")("cpPosition", "bottom")("cpPositionOffset", "-75%")("cpOutputFormat", "rgba")("cpCancelButton", true)("cpCancelButtonText", i0.ɵɵpipeBind1(44, 74, "igo.geo.draw.cancelColorPicker"))("cpOKButton", true);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.icons.length >= 1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.store.count$.getValue() > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("store", ctx.store)("template", ctx.tableTemplate);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(54, 76, "igo.geo.draw.shortcuts"));
    } }, directives: [i6.MatButtonToggleGroup, i6.MatButtonToggle, i7.MatSlideToggle, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.FormGroupDirective, i8.MatIcon, i9.MatFormField, i10.MatTooltip, i9.MatLabel, i2.DefaultValueAccessor, i11.MatInput, i2.NgControlStatus, i2.FormControlName, i12.ColorPickerDirective, i13.NgIf, i14.MatDivider, i15.EntityTableComponent, i16.MatButton, i17.MatSelect, i17.MatSelectTrigger, i18.MatOption, i13.NgForOf], pipes: [i19.TranslatePipe, i13.AsyncPipe], styles: [".geometry-type-toggle[_ngcontent-%COMP%]{padding:10px;text-align:center}.geometry-type-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{width:100%}.geometry-type-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:25%}.draw-options[_ngcontent-%COMP%]{overflow-x:hidden}.draw-options[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{width:100%;margin:10px}.draw-options[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-content{width:calc(100% - 60px)}.igo-form[_ngcontent-%COMP%]{padding:10px}.fill-field[_ngcontent-%COMP%], .stroke-field[_ngcontent-%COMP%]{width:130px}.fill-color-picker[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:relative;top:7px}.fill-color-picker[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{left:8px}.stroke-color-picker[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:relative;top:7px}.stroke-color-picker[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{left:35px}.box[_ngcontent-%COMP%]{width:25px;height:25px}img[_ngcontent-%COMP%]{width:100%;height:100%}.deleteBtn[_ngcontent-%COMP%]{margin-left:12px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawComponent, [{
        type: Component,
        args: [{
                selector: 'igo-draw',
                templateUrl: './draw.component.html',
                styleUrls: ['./draw.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.LanguageService }, { type: i2.FormBuilder }, { type: i3.DrawStyleService }, { type: i4.MatDialog }, { type: i5.DrawIconService }]; }, { fillColor: [{
            type: Output
        }], strokeColor: [{
            type: Output
        }], strokeWidth: [{
            type: Output
        }], map: [{
            type: Input
        }], store: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kcmF3L2RyYXcvZHJhdy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kcmF3L2RyYXcvZHJhdy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCx1QkFBdUIsRUFDdkIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDSCxPQUFPLEVBRVAsNkJBQTZCLEVBQzdCLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIsdUJBQXVCLEVBQ3ZCLGFBQWEsRUFDYiwyQkFBMkIsRUFDNUIsTUFBTSxlQUFlLENBQUM7QUFJekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBSXJELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHbEUsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxjQUFjLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBRXBDLE9BQU8sU0FBUyxNQUFNLG1CQUFtQixDQUFDO0FBSTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFeEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFB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QUEwQjtRQUExQiw0Q0FBMEIsMkJBQUE7UUFHMUIsZUFDRjtRQURFLHlGQUNGO1FBR3FCLGVBQWtCO1FBQWxCLG9DQUFrQjtRQUluQyxlQUNGO1FBREUsNEVBQ0Y7UUFRRSxlQUFxRDtRQUFyRCwrRUFBcUQ7UUFDMUMsZUFBYTtRQUFiLG1DQUFhO1FBT3RCLGVBQThCO1FBQTlCLDJDQUE4QjtRQUQ5QiwyQ0FBMkIsa0JBQUEsOEJBQUEsb0JBQUEsMEJBQUEsd0JBQUEsNEJBQUEsd0JBQUEsZ0ZBQUEsb0JBQUE7UUFrQjdCLGVBQ0Y7UUFERSw4RUFDRjtRQVFFLGVBQXFEO1FBQXJELCtFQUFxRDtRQUMxQyxlQUFlO1FBQWYscUNBQWU7UUFPeEIsZUFBZ0M7UUFBaEMsNkNBQWdDO1FBRGhDLDZDQUE2QixrQkFBQSxnQ0FBQSxvQkFBQSx3QkFBQSw0QkFBQSwwQkFBQSx3QkFBQSxnRkFBQSxvQkFBQTtRQWdCaEIsZUFBdUI7UUFBdkIsNENBQXVCO1FBeUJqQyxlQUFpQztRQUFqQyxzREFBaUM7UUFleEMsZUFBZTtRQUFmLGlDQUFlLCtCQUFBO1FBZWYsZUFBbUQ7UUFBbkQsNkVBQW1EOzt1RkR6RzVDLGFBQWE7Y0FQekIsU0FBUztlQUFFO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7aUxBdUJXLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUVFLEdBQUc7a0JBQVgsS0FBSztZQUVHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIEZFQVRVUkUsXG4gICAgRmVhdHVyZVN0b3JlLFxuICAgIEZlYXR1cmVTdG9yZVNlbGVjdGlvblN0cmF0ZWd5LFxuICAgIHRyeUJpbmRTdG9yZUxheWVyLFxuICAgIHRyeUFkZExvYWRpbmdTdHJhdGVneSxcbiAgICB0cnlBZGRTZWxlY3Rpb25TdHJhdGVneSxcbiAgICBGZWF0dXJlTW90aW9uLFxuICAgIEZlYXR1cmVTdG9yZUxvYWRpbmdTdHJhdGVneVxuICB9IGZyb20gJy4uLy4uL2ZlYXR1cmUnO1xuXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBHZW9tZXRyeVR5cGUgfSBmcm9tICcuLi9zaGFyZWQvZHJhdy5lbnVtJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcC9zaGFyZWQvbWFwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEcmF3LCBGZWF0dXJlV2l0aERyYXcgfSBmcm9tICcuLi9zaGFyZWQvZHJhdy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZlY3RvclNvdXJjZUV2ZW50IGFzIE9sVmVjdG9yU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcbmltcG9ydCB7IFZlY3RvckxheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy92ZWN0b3ItbGF5ZXInO1xuaW1wb3J0IHsgRmVhdHVyZURhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy9mZWF0dXJlLWRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgRHJhd0NvbnRyb2wgfSBmcm9tICcuLi8uLi9nZW9tZXRyeS9zaGFyZWQvY29udHJvbHMvZHJhdyc7XG5pbXBvcnQgeyBFbnRpdHlSZWNvcmQsIEVudGl0eVRhYmxlVGVtcGxhdGUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgKiBhcyBPbFN0eWxlIGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCBPbFZlY3RvclNvdXJjZSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcbmltcG9ydCBPbENpcmNsZSBmcm9tICdvbC9nZW9tL0NpcmNsZSc7XG5pbXBvcnQgT2xQb2ludCBmcm9tICdvbC9nZW9tL1BvaW50JztcbmltcG9ydCBPbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQgT2xHZW9KU09OIGZyb20gJ29sL2Zvcm1hdC9HZW9KU09OJztcbmltcG9ydCBPbE92ZXJsYXkgZnJvbSAnb2wvT3ZlcmxheSc7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeVR5cGUgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5VHlwZSc7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnknO1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICdvbC9zcGhlcmUnO1xuaW1wb3J0IHsgRHJhd1N0eWxlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3LXN0eWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERyYXdQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vZHJhdy1wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhd1Nob3JjdXRzQ29tcG9uZW50IH0gZnJvbSAnLi9kcmF3LXNob3JjdXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBnZXRUb29sdGlwc09mT2xHZW9tZXRyeSB9IGZyb20gJy4uLy4uL21lYXN1cmUvc2hhcmVkL21lYXN1cmUudXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlSW50ZXJhY3Rpb25TdHlsZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3LnV0aWxzJztcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgRHJhd0ljb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2RyYXctaWNvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICBzZWxlY3RvcjogJ2lnby1kcmF3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcmF3LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgRHJhd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRhYmxlIHRlbXBsYXRlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIHRhYmxlVGVtcGxhdGU6IEVudGl0eVRhYmxlVGVtcGxhdGUgPSB7XG4gICAgc2VsZWN0aW9uOiB0cnVlLFxuICAgIHNlbGVjdE1hbnk6IHRydWUsXG4gICAgc2VsZWN0aW9uQ2hlY2tib3g6IHRydWUsXG4gICAgc29ydDogdHJ1ZSxcbiAgICBjb2x1bW5zOiBbe1xuICAgICAgbmFtZTogJ0RyYXdpbmcnLFxuICAgICAgdGl0bGU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRyYXcubGFiZWxzJyksXG4gICAgICB2YWx1ZUFjY2Vzc29yOiAoZmVhdHVyZTogRmVhdHVyZVdpdGhEcmF3KSA9PiB7XG4gICAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuZHJhdztcbiAgICAgIH1cbiAgICB9XVxuICB9O1xuXG4gIHB1YmxpYyBnZW9tZXRyeVR5cGUgPSBHZW9tZXRyeVR5cGU7IC8vIFJlZmVyZW5jZSB0byB0aGUgR2VvbWV0cnlUeXBlIGVudW1cblxuICBAT3V0cHV0KCkgZmlsbENvbG9yOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzdHJva2VDb2xvcjogc3RyaW5nO1xuICBAT3V0cHV0KCkgc3Ryb2tlV2lkdGg6IG51bWJlcjtcblxuICBASW5wdXQoKSBtYXA6IElnb01hcDsgLy8gTWFwIHRvIGRyYXcgb25cblxuICBASW5wdXQoKSBzdG9yZTogRmVhdHVyZVN0b3JlPEZlYXR1cmVXaXRoRHJhdz47IC8vIERyYXdpbmcgc3RvcmVcblxuICBwdWJsaWMgZHJhdyQ6IEJlaGF2aW9yU3ViamVjdDxEcmF3PiA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pOyAvLyBPYnNlcnZhYmxlIG9mIGRyYXdcblxuICBwcml2YXRlIG9sRHJhd2luZ0xheWVyU291cmNlID0gbmV3IE9sVmVjdG9yU291cmNlKCk7XG4gIHByaXZhdGUgZHJhd0NvbnRyb2w6IERyYXdDb250cm9sO1xuICBwcml2YXRlIGRyYXdFbmQkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRyYXdTZWxlY3QkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG9sRHJhd2luZ0xheWVyOiBWZWN0b3JMYXllcjtcbiAgcHVibGljIHNlbGVjdGVkRmVhdHVyZXMkOiBCZWhhdmlvclN1YmplY3Q8RmVhdHVyZVdpdGhEcmF3W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHB1YmxpYyBmaWxsRm9ybTogc3RyaW5nO1xuICBwdWJsaWMgc3Ryb2tlRm9ybTogc3RyaW5nO1xuICBwdWJsaWMgZHJhd0NvbnRyb2xJc0Rpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGRyYXdDb250cm9sSXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGxhYmVsc0FyZVNob3duOiBib29sZWFuO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMkJDogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwdWJsaWMgcG9zaXRpb246IHN0cmluZyA9ICdib3R0b20nO1xuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgaWNvbnM6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyBpY29uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGRyYXdTdHlsZVNlcnZpY2U6IERyYXdTdHlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIGRyYXdJY29uU2VydmljZTogRHJhd0ljb25TZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gICAgdGhpcy5maWxsQ29sb3IgPSB0aGlzLmRyYXdTdHlsZVNlcnZpY2UuZ2V0RmlsbENvbG9yKCk7XG4gICAgdGhpcy5zdHJva2VDb2xvciA9IHRoaXMuZHJhd1N0eWxlU2VydmljZS5nZXRTdHJva2VDb2xvcigpO1xuICAgIHRoaXMuc3Ryb2tlV2lkdGggPSB0aGlzLmRyYXdTdHlsZVNlcnZpY2UuZ2V0U3Ryb2tlV2lkdGgoKTtcbiAgICB0aGlzLmxhYmVsc0FyZVNob3duID0gdGhpcy5kcmF3U3R5bGVTZXJ2aWNlLmdldExhYmVsc0FyZVNob3duKCk7XG4gICAgdGhpcy5pY29ucyA9IHRoaXMuZHJhd0ljb25TZXJ2aWNlLmdldEljb25zKCk7XG4gICAgdGhpcy5pY29uID0gdGhpcy5kcmF3U3R5bGVTZXJ2aWNlLmdldEljb24oKTtcbiAgfVxuXG4gIC8vIEluaXRpYWxpemUgdGhlIHN0b3JlIHRoYXQgd2lsbCBjb250YWluIHRoZSBlbnRpdGllcyBhbmQgY3JlYXRlIHRoZSBEcmF3IGNvbnRyb2xcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0U3RvcmUoKTtcbiAgICB0aGlzLmRyYXdDb250cm9sID0gdGhpcy5jcmVhdGVEcmF3Q29udHJvbCh0aGlzLmZpbGxDb2xvciwgdGhpcy5zdHJva2VDb2xvciwgdGhpcy5zdHJva2VXaWR0aCk7XG4gICAgdGhpcy5kcmF3Q29udHJvbC5zZXRHZW9tZXRyeVR5cGUodGhpcy5nZW9tZXRyeVR5cGUuUG9pbnQgYXMgYW55KTtcbiAgICB0aGlzLnRvZ2dsZURyYXdDb250cm9sKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBkcmF3aW5nIGxheWVyIGFuZCB0aGUgaW50ZXJhY3Rpb25zXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmF3Q29udHJvbC5zZXRPbE1hcCh1bmRlZmluZWQpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQkLm1hcChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHJhdyBDb250cm9sXG4gICAqIEBwYXJhbSBmaWxsQ29sb3IgdGhlIGZpbGwgY29sb3JcbiAgICogQHBhcmFtIHN0cm9rZUNvbG9yIHRoZSBzdHJva2UgY29sb3JcbiAgICogQHBhcmFtIHN0cm9rZVdpZHRoIHRoZSBzdHJva2Ugd2lkdGhcbiAgICogQHJldHVybnMgYSBEcmF3IENvbnRyb2xcbiAgICovXG4gIGNyZWF0ZURyYXdDb250cm9sKGZpbGxDb2xvcj86IHN0cmluZywgc3Ryb2tlQ29sb3I/OiBzdHJpbmcsIHN0cm9rZVdpZHRoPzogbnVtYmVyKSB7XG4gICAgY29uc3QgZHJhd0NvbnRyb2wgPSBuZXcgRHJhd0NvbnRyb2woe1xuICAgICAgZ2VvbWV0cnlUeXBlOiB1bmRlZmluZWQsXG4gICAgICBkcmF3aW5nTGF5ZXJTb3VyY2U6IHRoaXMub2xEcmF3aW5nTGF5ZXJTb3VyY2UsXG4gICAgICBkcmF3aW5nTGF5ZXJTdHlsZTogbmV3IE9sU3R5bGUuU3R5bGUoe30pLFxuICAgICAgaW50ZXJhY3Rpb25TdHlsZTogY3JlYXRlSW50ZXJhY3Rpb25TdHlsZShmaWxsQ29sb3IsIHN0cm9rZUNvbG9yLCBzdHJva2VXaWR0aCksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZHJhd0NvbnRyb2w7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIG5ldyBnZW9tZXRyeSB0eXBlXG4gICAqIEBwYXJhbSBnZW9tZXRyeVR5cGUgdGhlIGdlb21ldHJ5IHR5cGUgc2VsZWN0ZWQgYnkgdGhlIHVzZXJcbiAgICovXG4gIG9uR2VvbWV0cnlUeXBlQ2hhbmdlKGdlb21ldHJ5VHlwZTogdHlwZW9mIE9sR2VvbWV0cnlUeXBlKSB7XG4gICAgdGhpcy5kcmF3Q29udHJvbC5zZXRHZW9tZXRyeVR5cGUoZ2VvbWV0cnlUeXBlKTtcbiAgICB0aGlzLnRvZ2dsZURyYXdDb250cm9sKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmUgaW5pdGlhbGl6YXRpb24sIGluY2x1ZGluZyBkcmF3aW5nIGxheWVyIGNyZWF0aW9uXG4gICAqL1xuICBwcml2YXRlIGluaXRTdG9yZSgpIHtcbiAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm9sRHJhd2luZ0xheWVyKTtcblxuICAgIHRoaXMub2xEcmF3aW5nTGF5ZXIgPSBuZXcgVmVjdG9yTGF5ZXIoe1xuICAgICAgaXNJZ29JbnRlcm5hbExheWVyOiB0cnVlLFxuICAgICAgaWQ6ICdpZ28tZHJhdy1sYXllcicsXG4gICAgICB0aXRsZTogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZHJhdy5kcmF3aW5nJyksXG4gICAgICB6SW5kZXg6IDIwMCxcbiAgICAgIHNvdXJjZTogbmV3IEZlYXR1cmVEYXRhU291cmNlKCksXG4gICAgICBzdHlsZTogKGZlYXR1cmUsIHJlc29sdXRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhd1N0eWxlU2VydmljZS5jcmVhdGVEcmF3aW5nTGF5ZXJTdHlsZShmZWF0dXJlLCByZXNvbHV0aW9uLCB0aGlzLmxhYmVsc0FyZVNob3duLCB0aGlzLmljb24pO1xuICAgICAgfSxcbiAgICAgIHNob3dJbkxheWVyTGlzdDogdHJ1ZSxcbiAgICAgIGV4cG9ydGFibGU6IHRydWUsXG4gICAgICBicm93c2FibGU6IGZhbHNlLFxuICAgICAgd29ya3NwYWNlOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRyeUJpbmRTdG9yZUxheWVyKHRoaXMuc3RvcmUsIHRoaXMub2xEcmF3aW5nTGF5ZXIpO1xuXG4gICAgdHJ5QWRkTG9hZGluZ1N0cmF0ZWd5KHRoaXMuc3RvcmUsIG5ldyBGZWF0dXJlU3RvcmVMb2FkaW5nU3RyYXRlZ3koe1xuICAgICAgbW90aW9uOiBGZWF0dXJlTW90aW9uLk5vbmVcbiAgICB9KSk7XG5cbiAgICB0cnlBZGRTZWxlY3Rpb25TdHJhdGVneSh0aGlzLnN0b3JlLCBuZXcgRmVhdHVyZVN0b3JlU2VsZWN0aW9uU3RyYXRlZ3koe1xuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIG1vdGlvbjogRmVhdHVyZU1vdGlvbi5Ob25lLFxuICAgICAgbWFueTogdHJ1ZVxuICAgIH0pKTtcbiAgICB0aGlzLnN0b3JlLmxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMuc3RvcmUuc291cmNlLm9sLm9uKCdyZW1vdmVmZWF0dXJlJywgKGV2ZW50OiBPbFZlY3RvclNvdXJjZUV2ZW50PE9sR2VvbWV0cnk+KSA9PiB7XG4gICAgICBjb25zdCBvbEdlb21ldHJ5ID0gZXZlbnQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgICAgdGhpcy5jbGVhckxhYmVsc09mT2xHZW9tZXRyeShvbEdlb21ldHJ5KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQkLnB1c2godGhpcy5zdG9yZS5zdGF0ZVZpZXcubWFueUJ5JCgocmVjb3JkOiBFbnRpdHlSZWNvcmQ8RmVhdHVyZVdpdGhEcmF3PikgPT4ge1xuICAgICAgcmV0dXJuIHJlY29yZC5zdGF0ZS5zZWxlY3RlZCA9PT0gdHJ1ZTtcbiAgICB9KS5waXBlKFxuICAgICAgc2tpcCgxKSAvLyBTa2lwIGluaXRpYWwgZW1pc3Npb25cbiAgICApLnN1YnNjcmliZSgocmVjb3JkczogRW50aXR5UmVjb3JkPEZlYXR1cmVXaXRoRHJhdz5bXSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVzJC5uZXh0KHJlY29yZHMubWFwKHJlY29yZCA9PiByZWNvcmQuZW50aXR5KSk7XG4gICAgfSkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zJCQucHVzaCh0aGlzLnN0b3JlLmNvdW50JC5zdWJzY3JpYmUoY250ID0+IHtcbiAgICAgIGNudCA+PSAxID8gdGhpcy5zdG9yZS5sYXllci5vcHRpb25zLnNob3dJbkxheWVyTGlzdCA9IHRydWUgOiB0aGlzLnN0b3JlLmxheWVyLm9wdGlvbnMuc2hvd0luTGF5ZXJMaXN0ID0gZmFsc2U7XG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNoYW5nZXMgdGhlIGNvbG9yIGluIGEgY29sb3IgcGlja2VyXG4gICAqIEBwYXJhbSBsYWJlbHNBcmVTaG93biB3aGV0ZXIgdGhlIGxhYmVscyBhcmUgc2hvd24gb3Igbm90XG4gICAqIEBwYXJhbSBpc0FuSWNvbiB3aGV0ZXIgdGhlIGZlYXR1cmUgaXMgYW4gaWNvbiBvciBub3RcbiAgICovXG4gIG9uQ29sb3JDaGFuZ2UobGFiZWxzQXJlU2hvd246IGJvb2xlYW4sIGlzQW5JY29uOiBib29sZWFuKSB7XG4gICAgdGhpcy5maWxsRm9ybSA9IHRoaXMuZmlsbENvbG9yO1xuICAgIHRoaXMuc3Ryb2tlRm9ybSA9IHRoaXMuc3Ryb2tlQ29sb3I7XG4gICAgdGhpcy5kcmF3U3R5bGVTZXJ2aWNlLnNldEZpbGxDb2xvcih0aGlzLmZpbGxDb2xvcik7XG4gICAgdGhpcy5kcmF3U3R5bGVTZXJ2aWNlLnNldFN0cm9rZUNvbG9yKHRoaXMuc3Ryb2tlQ29sb3IpO1xuXG4gICAgaWYgKGlzQW5JY29uKSB7XG4gICAgICB0aGlzLnN0b3JlLmxheWVyLm9sLnNldFN0eWxlKChmZWF0dXJlLCByZXNvbHV0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXdTdHlsZVNlcnZpY2UuY3JlYXRlRHJhd2luZ0xheWVyU3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbiwgbGFiZWxzQXJlU2hvd24sIHRoaXMuaWNvbik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLmxheWVyLm9sLnNldFN0eWxlKChmZWF0dXJlLCByZXNvbHV0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXdTdHlsZVNlcnZpY2UuY3JlYXRlRHJhd2luZ0xheWVyU3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbiwgbGFiZWxzQXJlU2hvd24pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlRHJhd0NvbnRyb2woKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciB0b2dnbGVzIHRoZSBEcmF3IGNvbnRyb2wgaXMgdG9nZ2xlZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uVG9nZ2xlRHJhd0NvbnRyb2wodG9nZ2xlSXNDaGVja2VkOiBib29sZWFuKSB7XG4gICAgdG9nZ2xlSXNDaGVja2VkID8gdGhpcy50b2dnbGVEcmF3Q29udHJvbCgpIDogdGhpcy5kZWFjdGl2YXRlRHJhd0NvbnRyb2woKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSB0aGUgY29ycmVjdCBjb250cm9sXG4gICAqL1xuICBwcml2YXRlIHRvZ2dsZURyYXdDb250cm9sKCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZURyYXdDb250cm9sKCk7XG4gICAgdGhpcy5hY3RpdmF0ZURyYXdDb250cm9sKCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBhIGRpYWxvZyBib3ggdG8gZW50ZXIgbGFiZWwgYW5kIGRvIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gb2xHZW9tZXRyeSBnZW9tZXRyeSBhdCBkcmF3IGVuZCBvciBzZWxlY3RlZCBnZW9tZXRyeVxuICAgKiBAcGFyYW0gZHJhd0VuZCBldmVudCBmaXJlZCBhdCBkcmF3RW5kP1xuICAgKi9cbiAgcHJpdmF0ZSBvcGVuRGlhbG9nKG9sR2VvbWV0cnlGZWF0dXJlLCBpc0RyYXdFbmQ6IGJvb2xlYW4pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIG9wZW4gdGhlIGRpYWxvZyBib3ggdXNlZCB0byBlbnRlciBsYWJlbFxuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEcmF3UG9wdXBDb21wb25lbnQsIHtcbiAgICAgICAgZGlzYWJsZUNsb3NlOiBmYWxzZSxcbiAgICAgICAgZGF0YToge2N1cnJlbnRMYWJlbDogb2xHZW9tZXRyeUZlYXR1cmUuZ2V0KCdkcmF3Jyl9XG4gICAgICB9KTtcblxuICAgICAgLy8gd2hlbiBkaWFsb2cgYm94IGlzIGNsb3NlZCwgZ2V0IGxhYmVsIGFuZCBzZXQgaXQgdG8gZ2VvbWV0cnlcbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgobGFiZWw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnlGZWF0dXJlLCBsYWJlbCk7XG5cbiAgICAgICAgLy8gaWYgZXZlbnQgd2FzIGZpcmVkIGF0IGRyYXcgZW5kXG4gICAgICAgIGlmIChpc0RyYXdFbmQpIHtcbiAgICAgICAgICB0aGlzLm9uRHJhd0VuZChvbEdlb21ldHJ5RmVhdHVyZSk7XG5cbiAgICAgICAgLy8gaWYgZXZlbnQgd2FzIGZpcmVkIGF0IHNlbGVjdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25TZWxlY3REcmF3KG9sR2VvbWV0cnlGZWF0dXJlLCBsYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDI1MCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGUgYSBnaXZlbiBjb250cm9sXG4gICAqL1xuICBwcml2YXRlIGFjdGl2YXRlRHJhd0NvbnRyb2woKSB7XG4gICAgdGhpcy5kcmF3Q29udHJvbElzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYXdDb250cm9sSXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZHJhd0VuZCQkID0gdGhpcy5kcmF3Q29udHJvbC5lbmQkLnN1YnNjcmliZSgob2xHZW9tZXRyeTogT2xHZW9tZXRyeSkgPT4ge1xuICAgICAgdGhpcy5vcGVuRGlhbG9nKG9sR2VvbWV0cnksIHRydWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kcmF3Q29udHJvbC5tb2RpZnkkLnN1YnNjcmliZSgob2xHZW9tZXRyeTogT2xHZW9tZXRyeSkgPT4ge1xuICAgICAgdGhpcy5vbk1vZGlmeURyYXcob2xHZW9tZXRyeSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuZHJhd1NlbGVjdCQkKSB7XG4gICAgICB0aGlzLmRyYXdTZWxlY3QkJCA9IHRoaXMuZHJhd0NvbnRyb2wuc2VsZWN0JC5zdWJzY3JpYmUoKG9sRmVhdHVyZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+KSA9PiB7XG4gICAgICAgIHRoaXMub3BlbkRpYWxvZyhvbEZlYXR1cmUsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0NvbnRyb2wuc2V0T2xNYXAodGhpcy5tYXAub2wsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGUgdGhlIGFjdGl2ZSBkcmF3IGNvbnRyb2xcbiAgICovXG4gIHByaXZhdGUgZGVhY3RpdmF0ZURyYXdDb250cm9sKCkge1xuICAgIGlmICghdGhpcy5kcmF3Q29udHJvbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYXdFbmQkJCkge1xuICAgICAgdGhpcy5kcmF3RW5kJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdDb250cm9sLnNldE9sTWFwKHVuZGVmaW5lZCk7XG4gICAgdGhpcy5kcmF3Q29udHJvbElzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGRyYXcgc291cmNlIGFuZCB0cmFjayB0aGUgZ2VvbWV0cnkgYmVpbmcgZHJhd1xuICAgKiBAcGFyYW0gb2xHZW9tZXRyeSBPbCBsaW5lc3RyaW5nIG9yIHBvbHlnb25cbiAgICovXG4gIHByaXZhdGUgb25EcmF3RW5kKG9sR2VvbWV0cnk6IE9sR2VvbWV0cnksIHJhZGl1cz86IG51bWJlcikge1xuICAgIHRoaXMuYWRkRmVhdHVyZVRvU3RvcmUob2xHZW9tZXRyeSwgcmFkaXVzKTtcbiAgICB0aGlzLmNsZWFyTGFiZWxzT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnkpO1xuICAgIHRoaXMuc3RvcmUubGF5ZXIub2wuZ2V0U291cmNlKCkucmVmcmVzaCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vZGlmeURyYXcob2xHZW9tZXRyeSkge1xuICAgIGNvbnN0IGVudGl0aWVzID0gdGhpcy5zdG9yZS5hbGwoKTtcblxuICAgIGVudGl0aWVzLmZvckVhY2goZW50aXR5ID0+IHtcbiAgICAgIGNvbnN0IGVudGl0eUlkID0gZW50aXR5LnByb3BlcnRpZXMuaWQ7XG5cbiAgICAgIGNvbnN0IG9sR2VvbWV0cnlJZCA9IG9sR2VvbWV0cnkub2xfdWlkO1xuXG4gICAgICBpZiAoZW50aXR5SWQgPT09IG9sR2VvbWV0cnlJZCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnksIGVudGl0eS5wcm9wZXJ0aWVzLmRyYXcpO1xuICAgICAgICB0aGlzLnJlcGxhY2VGZWF0dXJlSW5TdG9yZShlbnRpdHksIG9sR2VvbWV0cnkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblNlbGVjdERyYXcob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4sIGxhYmVsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbnRpdGllcyA9IHRoaXMuc3RvcmUuYWxsKCk7XG5cbiAgICBjb25zdCBvbEdlb21ldHJ5ID0gb2xGZWF0dXJlLmdldEdlb21ldHJ5KCkgYXMgYW55O1xuICAgIG9sR2VvbWV0cnkub2xfdWlkID0gb2xGZWF0dXJlLmdldCgnaWQnKTtcblxuICAgIGNvbnN0IG9sR2VvbWV0cnlDb29yZGluYXRlcyA9IEpTT04uc3RyaW5naWZ5KG9sR2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKVswXSk7XG5cbiAgICBlbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XG4gICAgICBjb25zdCBlbnRpdHlDb29yZGluYXRlcyA9IEpTT04uc3RyaW5naWZ5KGVudGl0eS5nZW9tZXRyeS5jb29yZGluYXRlc1swXSk7XG5cbiAgICAgIGlmIChvbEdlb21ldHJ5Q29vcmRpbmF0ZXMgPT09IGVudGl0eUNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IHJhZDogbnVtYmVyID0gZW50aXR5LnByb3BlcnRpZXMucmFkID8gZW50aXR5LnByb3BlcnRpZXMucmFkIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWxPZk9sR2VvbWV0cnkob2xHZW9tZXRyeSwgbGFiZWwpO1xuICAgICAgICB0aGlzLnJlcGxhY2VGZWF0dXJlSW5TdG9yZShlbnRpdHksIG9sR2VvbWV0cnksIHJhZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgZmVhdHVyZSB3aXRoIGRyYXcgbGFiZWwgdG8gdGhlIHN0b3JlLiBUaGUgbG9hZGluZyBzdHJhZ2VneSBvZiB0aGUgc3RvcmVcbiAgICogd2lsbCB0cmlnZ2VyIGFuZCBhZGQgdGhlIGZlYXR1cmUgdG8gdGhlIG1hcC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIGFkZEZlYXR1cmVUb1N0b3JlKG9sR2VvbWV0cnksIHJhZGl1cz86IG51bWJlciwgZmVhdHVyZT86IEZlYXR1cmVXaXRoRHJhdykge1xuICAgIGxldCByYWQ6IG51bWJlcjtcbiAgICBsZXQgY2VudGVyNDMyNjogQXJyYXk8bnVtYmVyPjtcbiAgICBsZXQgcG9pbnQ0MzI2OiBBcnJheTxudW1iZXI+O1xuICAgIGxldCBsb240MzI2OiBudW1iZXI7XG4gICAgbGV0IGxhdDQzMjY6IG51bWJlcjtcbiAgICBjb25zdCBmZWF0dXJlSWQgPSBmZWF0dXJlID8gZmVhdHVyZS5wcm9wZXJ0aWVzLmlkIDogb2xHZW9tZXRyeS5vbF91aWQ7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IHRoaXMubWFwLm9sLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBPbEdlb0pTT04oKS53cml0ZUdlb21ldHJ5T2JqZWN0KG9sR2VvbWV0cnksIHtcbiAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBwcm9qZWN0aW9uLFxuICAgICAgZGF0YVByb2plY3Rpb246IHByb2plY3Rpb25cbiAgICB9KSBhcyBhbnk7XG5cbiAgICBpZiAob2xHZW9tZXRyeSBpbnN0YW5jZW9mIE9sQ2lyY2xlIHx8IHJhZGl1cykge1xuICAgICAgaWYgKHJhZGl1cykge1xuICAgICAgICByYWQgPSByYWRpdXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZW9tZXRyeS50eXBlID0gJ1BvaW50JztcbiAgICAgICAgZ2VvbWV0cnkuY29vcmRpbmF0ZXMgPSBvbEdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICBjb25zdCBleHRlbnQ0MzI2ID0gdHJhbnNmb3JtKFtvbEdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpWzJdLCBvbEdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpWzNdXSwgcHJvamVjdGlvbiwgJ0VQU0c6NDMyNicpO1xuICAgICAgICBjZW50ZXI0MzI2ID0gdHJhbnNmb3JtKFtvbEdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpWzBdLCBvbEdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpWzFdXSwgcHJvamVjdGlvbiwgJ0VQU0c6NDMyNicpO1xuICAgICAgICBsb240MzI2ID0gY2VudGVyNDMyNlswXTtcbiAgICAgICAgbGF0NDMyNiA9IGNlbnRlcjQzMjZbMV07XG4gICAgICAgIHJhZCA9IGdldERpc3RhbmNlKGNlbnRlcjQzMjYsIGV4dGVudDQzMjYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvbEdlb21ldHJ5IGluc3RhbmNlb2YgT2xQb2ludCkge1xuICAgICAgcG9pbnQ0MzI2ID0gdHJhbnNmb3JtKG9sR2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCksIHByb2plY3Rpb24sICdFUFNHOjQzMjYnKTtcbiAgICAgIGxvbjQzMjYgPSBwb2ludDQzMjZbMF07XG4gICAgICBsYXQ0MzI2ID0gcG9pbnQ0MzI2WzFdO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmUudXBkYXRlKHtcbiAgICAgIHR5cGU6IEZFQVRVUkUsXG4gICAgICBnZW9tZXRyeSxcbiAgICAgIHByb2plY3Rpb246IHByb2plY3Rpb24uZ2V0Q29kZSgpLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogZmVhdHVyZUlkLFxuICAgICAgICBkcmF3OiBvbEdlb21ldHJ5LmdldCgnX2xhYmVsJyksXG4gICAgICAgIGxvbmdpdHVkZTogbG9uNDMyNiA/IGxvbjQzMjYgOiBudWxsLFxuICAgICAgICBsYXRpdHVkZTogbGF0NDMyNiA/IGxhdDQzMjYgOiBudWxsLFxuICAgICAgICByYWQ6IHJhZCA/IHJhZCA6IG51bGxcbiAgICAgIH0sXG4gICAgICBtZXRhOiB7XG4gICAgICAgaWQ6IGZlYXR1cmVJZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGZlYXR1cmUgaW4gdGhlIHN0b3JlXG4gICAqIEBwYXJhbSBlbnRpdHkgdGhlIGVudGl0eSB0byByZXBsYWNlXG4gICAqIEBwYXJhbSBvbEdlb21ldHJ5IHRoZSBuZXcgZ2VvbWV0cnkgdG8gaW5zZXJ0IGluIHRoZSBzdG9yZVxuICAgKi9cbiAgcHJpdmF0ZSByZXBsYWNlRmVhdHVyZUluU3RvcmUoZW50aXR5LCBvbEdlb21ldHJ5OiBPbEdlb21ldHJ5LCByYWRpdXM/OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0b3JlLmRlbGV0ZShlbnRpdHkpO1xuICAgIHRoaXMub25EcmF3RW5kKG9sR2VvbWV0cnksIHJhZGl1cyk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybSgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZpbGw6IFsnJ10sXG4gICAgICBzdHJva2U6IFsnJ11cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZURyYXdpbmdzKCkge1xuICAgIHRoaXMuc3RvcmUuZGVsZXRlTWFueSh0aGlzLnNlbGVjdGVkRmVhdHVyZXMkLnZhbHVlKTtcbiAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZXMkLnZhbHVlLmZvckVhY2goc2VsZWN0ZWRGZWF0dXJlID0+IHtcbiAgICAgIHRoaXMub2xEcmF3aW5nTGF5ZXJTb3VyY2UuZ2V0RmVhdHVyZXMoKS5mb3JFYWNoKGRyYXdpbmdMYXllckZlYXR1cmUgPT4ge1xuICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGRyYXdpbmdMYXllckZlYXR1cmUuZ2V0R2VvbWV0cnkoKSBhcyBhbnk7XG4gICAgICAgIGlmIChzZWxlY3RlZEZlYXR1cmUucHJvcGVydGllcy5pZCA9PT0gZ2VvbWV0cnkub2xfdWlkKSB7XG4gICAgICAgICAgdGhpcy5vbERyYXdpbmdMYXllclNvdXJjZS5yZW1vdmVGZWF0dXJlKGRyYXdpbmdMYXllckZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgdG9vbHRpcHMgb2YgYW4gT0wgZ2VvbWV0cnlcbiAgICogQHBhcmFtIG9sR2VvbWV0cnkgT0wgZ2VvbWV0cnkgd2l0aCB0b29sdGlwc1xuICAgKi9cbiAgcHJpdmF0ZSBjbGVhckxhYmVsc09mT2xHZW9tZXRyeShvbEdlb21ldHJ5KSB7XG4gICAgZ2V0VG9vbHRpcHNPZk9sR2VvbWV0cnkob2xHZW9tZXRyeSkuZm9yRWFjaCgob2xUb29sdGlwOiBPbE92ZXJsYXkgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgIGlmIChvbFRvb2x0aXAgJiYgb2xUb29sdGlwLmdldE1hcCgpKSB7XG4gICAgICAgIHRoaXMubWFwLm9sLnJlbW92ZU92ZXJsYXkob2xUb29sdGlwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciB0b2dnbGVzIHRoZSBsYWJlbHMgdG9nZ2xlXG4gICAqL1xuICBvblRvZ2dsZUxhYmVscygpIHtcbiAgICB0aGlzLmRyYXdTdHlsZVNlcnZpY2UudG9nZ2xlTGFiZWxzQXJlU2hvd24oKTtcbiAgICB0aGlzLmxhYmVsc0FyZVNob3duID0gIXRoaXMubGFiZWxzQXJlU2hvd247XG4gICAgdGhpcy5pY29uID8gdGhpcy5vbkNvbG9yQ2hhbmdlKHRoaXMubGFiZWxzQXJlU2hvd24sIHRydWUpIDogdGhpcy5vbkNvbG9yQ2hhbmdlKHRoaXMubGFiZWxzQXJlU2hvd24sIGZhbHNlKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgbGFiZWwgb2YgYSBnZW9tZXRyeSB3aGVuIGEgbGFiZWwgaXMgZW50ZXJlZCBpbiBhIGRpYWxvZyBib3hcbiAgICogQHBhcmFtIG9sR2VvbWV0cnkgdGhlIGdlb21ldHJ5XG4gICAqIEBwYXJhbSBsYWJlbCB0aGUgbGFiZWxcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlTGFiZWxPZk9sR2VvbWV0cnkob2xHZW9tZXRyeTogT2xHZW9tZXRyeSwgbGFiZWw6IHN0cmluZykge1xuICAgIG9sR2VvbWV0cnkuc2V0UHJvcGVydGllcyh7XG4gICAgICBfbGFiZWw6IGxhYmVsXG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICBvbkljb25DaGFuZ2UoZXZlbnQ/KSB7XG4gICAgdGhpcy5pY29uID0gZXZlbnQ7XG4gICAgdGhpcy5kcmF3U3R5bGVTZXJ2aWNlLnNldEljb24odGhpcy5pY29uKTtcbiAgICB0aGlzLnN0b3JlLmxheWVyLm9sLnNldFN0eWxlKChmZWF0dXJlLCByZXNvbHV0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kcmF3U3R5bGVTZXJ2aWNlLmNyZWF0ZURyYXdpbmdMYXllclN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24sIHRydWUsIHRoaXMuaWNvbik7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuU2hvcmN1dHNEaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihEcmF3U2hvcmN1dHNDb21wb25lbnQpO1xuICB9XG59XG4iLCI8ZGl2PlxuICA8ZGl2IGNsYXNzPVwiZ2VvbWV0cnktdHlwZS10b2dnbGUgbWF0LXR5cG9ncmFwaHlcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXBcbiAgICAgIChjaGFuZ2UpPVwib25HZW9tZXRyeVR5cGVDaGFuZ2UoJGV2ZW50LnZhbHVlKVwiIFt2YWx1ZV09XCJnZW9tZXRyeVR5cGUuUG9pbnRcIj5cbiAgICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSBbdmFsdWVdPVwiZ2VvbWV0cnlUeXBlLlBvaW50XCI+XG4gICAgICAgIHt7KCdpZ28uZ2VvLmRyYXcuJyArIGdlb21ldHJ5VHlwZS5Qb2ludCkgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cblxuICAgICAgPG1hdC1idXR0b24tdG9nZ2xlIFt2YWx1ZV09XCJnZW9tZXRyeVR5cGUuTGluZVN0cmluZ1wiPlxuICAgICAgICB7eygnaWdvLmdlby5kcmF3LicgKyBnZW9tZXRyeVR5cGUuTGluZVN0cmluZykgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cblxuICAgICAgPG1hdC1idXR0b24tdG9nZ2xlIFt2YWx1ZV09XCJnZW9tZXRyeVR5cGUuUG9seWdvblwiPlxuICAgICAgICB7eygnaWdvLmdlby5kcmF3LicgKyBnZW9tZXRyeVR5cGUuUG9seWdvbikgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cblxuICAgICAgPG1hdC1idXR0b24tdG9nZ2xlIFt2YWx1ZV09XCJnZW9tZXRyeVR5cGUuQ2lyY2xlXCI+XG4gICAgICAgIHt7KCdpZ28uZ2VvLmRyYXcuJyArIGdlb21ldHJ5VHlwZS5DaXJjbGUpIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImRyYXctb3B0aW9ucyBtYXQtdHlwb2dyYXBoeVwiPlxuICAgIDxtYXQtc2xpZGUtdG9nZ2xlXG4gICAgICBbZGlzYWJsZWRdPVwiZHJhd0NvbnRyb2xJc0Rpc2FibGVkXCJcbiAgICAgIFtjaGVja2VkXT1cImRyYXdDb250cm9sSXNBY3RpdmVcIlxuICAgICAgW2xhYmVsUG9zaXRpb25dPVwiJ2JlZm9yZSdcIlxuICAgICAgKGNoYW5nZSk9XCJvblRvZ2dsZURyYXdDb250cm9sKCRldmVudC5jaGVja2VkKVwiPlxuICAgICAge3snaWdvLmdlby5zcGF0aWFsRmlsdGVyLmRyYXdDb250cm9sJyB8IHRyYW5zbGF0ZX19XG4gICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuXG4gICAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICAgIFtjaGVja2VkXT1cImxhYmVsc0FyZVNob3duXCJcbiAgICAgIFtsYWJlbFBvc2l0aW9uXT1cIidiZWZvcmUnXCJcbiAgICAgIChjaGFuZ2UpPVwib25Ub2dnbGVMYWJlbHMoKVwiPlxuICAgICAge3snaWdvLmdlby5kcmF3LnRvZ2dsZU1hcFRvb2x0aXBzJyB8IHRyYW5zbGF0ZX19XG4gICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICA8L2Rpdj5cblxuICA8Zm9ybSBjbGFzcz1cImlnby1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgPlxuICAgIDxkaXYgY2xhc3M9XCJmaWxsLWNvbG9yLXBpY2tlciBtYXQtdHlwb2dyYXBoeVwiPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInN0cm9rZS1wYWxldHRlLWljb25cIiBzdmdJY29uPVwic3F1YXJlXCI+PC9tYXQtaWNvbj5cbiAgICAgICAge3snaWdvLmdlby5kcmF3LmZpbGwnIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvc3Bhbj5cblxuICAgICAgPG1hdC1mb3JtLWZpZWxkXG4gICAgICAgIGNsYXNzPVwiZmlsbC1maWVsZFwiXG4gICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCJcbiAgICAgICAgZmxvYXRMYWJlbD1cImFsd2F5c1wiXG4gICAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5kcmF3LmNvbG9yUGlja2VyJyB8IHRyYW5zbGF0ZVwiPlxuICAgICAgICA8bWF0LWxhYmVsPnt7ZmlsbENvbG9yfX08L21hdC1sYWJlbD5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJmaWxsXCJcbiAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBbKGNvbG9yUGlja2VyKV09XCJmaWxsQ29sb3JcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImZpbGxDb2xvclwiXG4gICAgICAgICAgW3JlYWRvbmx5XT1cInRydWVcIlxuICAgICAgICAgIFtjb2xvclBpY2tlcl09XCJmaWxsQ29sb3JcIlxuICAgICAgICAgIFtjcFdpZHRoXT1cIignMjAwcHgnKVwiXG4gICAgICAgICAgW2NwT3V0cHV0Rm9ybWF0XT1cIidyZ2JhJ1wiXG4gICAgICAgICAgW2NwUG9zaXRpb25dPVwiJ2JvdHRvbSdcIlxuICAgICAgICAgIFtjcFBvc2l0aW9uT2Zmc2V0XT1cIictNzUlJ1wiXG4gICAgICAgICAgW2NwQ2FuY2VsQnV0dG9uXT1cInRydWVcIlxuICAgICAgICAgIFtjcENhbmNlbEJ1dHRvblRleHRdPVwiJ2lnby5nZW8uZHJhdy5jYW5jZWxDb2xvclBpY2tlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgIFtjcE9LQnV0dG9uXT1cInRydWVcIlxuICAgICAgICAgIChjb2xvclBpY2tlckNoYW5nZSk9XCJvbkNvbG9yQ2hhbmdlKGxhYmVsc0FyZVNob3duLCBmYWxzZSlcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Ryb2tlLWNvbG9yLXBpY2tlciBtYXQtdHlwb2dyYXBoeVwiPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInN0cm9rZS1wYWxldHRlLWljb25cIiBzdmdJY29uPVwic3F1YXJlLW91dGxpbmVcIj48L21hdC1pY29uPlxuICAgICAgICB7eydpZ28uZ2VvLmRyYXcuc3Ryb2tlJyB8IHRyYW5zbGF0ZX19XG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZFxuICAgICAgICBjbGFzcz1cInN0cm9rZS1maWVsZFwiXG4gICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCJcbiAgICAgICAgZmxvYXRMYWJlbD1cImFsd2F5c1wiXG4gICAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5kcmF3LmNvbG9yUGlja2VyJyB8IHRyYW5zbGF0ZVwiPlxuICAgICAgICA8bWF0LWxhYmVsPnt7c3Ryb2tlQ29sb3J9fTwvbWF0LWxhYmVsPlxuXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0cm9rZVwiXG4gICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgWyhjb2xvclBpY2tlcildPVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInN0cm9rZUNvbG9yXCJcbiAgICAgICAgICBbcmVhZG9ubHldPVwidHJ1ZVwiXG4gICAgICAgICAgW2NvbG9yUGlja2VyXT1cInN0cm9rZUNvbG9yXCJcbiAgICAgICAgICBbY3BXaWR0aF09XCIoJzIwMHB4JylcIlxuICAgICAgICAgIFtjcFBvc2l0aW9uXT1cIidib3R0b20nXCJcbiAgICAgICAgICBbY3BQb3NpdGlvbk9mZnNldF09XCInLTc1JSdcIlxuICAgICAgICAgIFtjcE91dHB1dEZvcm1hdF09XCIncmdiYSdcIlxuICAgICAgICAgIFtjcENhbmNlbEJ1dHRvbl09XCJ0cnVlXCJcbiAgICAgICAgICBbY3BDYW5jZWxCdXR0b25UZXh0XT1cIidpZ28uZ2VvLmRyYXcuY2FuY2VsQ29sb3JQaWNrZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICBbY3BPS0J1dHRvbl09XCJ0cnVlXCJcbiAgICAgICAgICAoY29sb3JQaWNrZXJDaGFuZ2UpPVwib25Db2xvckNoYW5nZShsYWJlbHNBcmVTaG93biwgZmFsc2UpXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cImljb25zLmxlbmd0aCA+PSAxXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+e3snaWdvLmdlby5kcmF3Lmljb24nIHwgdHJhbnNsYXRlfX08L21hdC1sYWJlbD5cbiAgICAgICAgPG1hdC1zZWxlY3Q+XG4gICAgICAgICAgPG1hdC1zZWxlY3QtdHJpZ2dlcj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3tpY29ufX0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21hdC1zZWxlY3QtdHJpZ2dlcj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIlwiIChjbGljayk9XCJvbkljb25DaGFuZ2UoKVwiPnt7J2lnby5nZW8uZHJhdy5ub0ljb24nIHwgdHJhbnNsYXRlfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgPG1hdC1vcHRpb25cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpY29uX2h0bWwgb2YgaWNvbnNcIlxuICAgICAgICAgICAgW3ZhbHVlXT1cImljb25faHRtbFwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25JY29uQ2hhbmdlKGljb25faHRtbClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3tpY29uX2h0bWx9fT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuXG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuXG4gIDxkaXY+XG4gICAgPGJ1dHRvbiAqbmdJZj1cInN0b3JlLmNvdW50JC5nZXRWYWx1ZSgpID4gMFwiXG4gICAgICBjbGFzcz1cImRlbGV0ZUJ0blwiXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgIGNvbG9yPVwid2FyblwiXG4gICAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5kcmF3LmRlbGV0ZScgfCB0cmFuc2xhdGVcIlxuICAgICAgW2Rpc2FibGVkXT1cIihzZWxlY3RlZEZlYXR1cmVzJCB8IGFzeW5jKS5sZW5ndGggPT09IDBcIlxuICAgICAgKGNsaWNrKT1cImRlbGV0ZURyYXdpbmdzKClcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiZGVsZXRlXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxpZ28tZW50aXR5LXRhYmxlXG4gICAgICAjdGFibGVcbiAgICAgIGNsYXNzPVwidGFibGUtY29tcGFjdFwiXG4gICAgICBbc3RvcmVdPVwic3RvcmVcIlxuICAgICAgW3RlbXBsYXRlXT1cInRhYmxlVGVtcGxhdGVcIj5cbiAgICA8L2lnby1lbnRpdHktdGFibGU+XG4gIDwvZGl2PlxuXG4gIDxidXR0b25cbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICBjb2xvcj1cImFjY2VudFwiXG4gICAgZGlzYWJsZVJpcHBsZT1cInRydWVcIlxuICAgIChjbGljayk9XCJvcGVuU2hvcmN1dHNEaWFsb2coKVwiPlxuICAgIDxtYXQtaWNvblxuICAgICAgY2xhc3M9XCJzaG9ydGN1dHMtaWNvblwiXG4gICAgICBzdmdJY29uPVwia2V5Ym9hcmQtb3V0bGluZVwiXG4gICAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5kcmF3LnNob3J0Y3V0cycgfCB0cmFuc2xhdGVcIj5cbiAgICA8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19