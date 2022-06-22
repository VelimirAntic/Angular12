import { Component, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { skip } from 'rxjs/operators';
import OlStyle from 'ol/style/Style';
import OlGeoJSON from 'ol/format/GeoJSON';
import OlVectorSource from 'ol/source/Vector';
import { unByKey } from 'ol/Observable';
import { StorageScope } from '@igo2/core';
import { uuid } from '@igo2/utils';
import { FeatureDataSource } from '../../datasource';
import { FEATURE, FeatureStoreLoadingStrategy, FeatureStoreSelectionStrategy, tryBindStoreLayer, tryAddLoadingStrategy, tryAddSelectionStrategy } from '../../feature';
import { DrawControl, ModifyControl } from '../../geometry/shared';
import { VectorLayer } from '../../layer';
import { MeasureType, MeasureAreaUnit, MeasureLengthUnit, } from '../shared/measure.enum';
import { measureOlGeometry, createMeasureInteractionStyle, createMeasureLayerStyle, updateOlTooltipsAtMidpoints, updateOlTooltipAtCenter, getTooltipsOfOlGeometry, squareMetersToUnit, metersToUnit, formatMeasure } from '../shared/measure.utils';
import { MeasurerDialogComponent } from './measurer-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/material/dialog";
const _c0 = ["table"];
function MeasurerComponent_mat_divider_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function MeasurerComponent_mat_slide_toggle_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-slide-toggle", 7);
    i0.ɵɵlistener("change", function MeasurerComponent_mat_slide_toggle_15_Template_mat_slide_toggle_change_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onToggleDisplayLines($event.checked); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r1.displayLines)("labelPosition", "before");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "igo.geo.measure.toggleDisplayLines"), " ");
} }
function MeasurerComponent_mat_divider_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function MeasurerComponent_mat_slide_toggle_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-slide-toggle", 7);
    i0.ɵɵlistener("change", function MeasurerComponent_mat_slide_toggle_20_Template_mat_slide_toggle_change_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onToggleDisplayDistance($event.checked); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r3.displayDistance)("labelPosition", "before");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "igo.geo.measure.toggleDisplayDistance"), " ");
} }
function MeasurerComponent_mat_slide_toggle_22_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-slide-toggle", 7);
    i0.ɵɵlistener("change", function MeasurerComponent_mat_slide_toggle_22_Template_mat_slide_toggle_change_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onToggleDisplayAreas($event.checked); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r4.displayAreas)("labelPosition", "before");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "igo.geo.measure.toggleDisplayAreas"), " ");
} }
function MeasurerComponent_mat_divider_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function MeasurerComponent_ng_container_29_igo_measurer_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-measurer-item", 14);
    i0.ɵɵlistener("measureUnitChange", function MeasurerComponent_ng_container_29_igo_measurer_item_1_Template_igo_measurer_item_measureUnitChange_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onLengthUnitChange($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const measure_r17 = i0.ɵɵnextContext().ngIf;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵproperty("measureType", ctx_r18.measureType.Length)("measureUnit", ctx_r18.measureLengthUnit.Meters)("measure", measure_r17.length)("auto", ctx_r18.measureUnitsAuto)("placeholder", i0.ɵɵpipeBind1(1, 5, ctx_r18.activeMeasureType === ctx_r18.measureType.Area ? "igo.geo.measure.perimeter" : "igo.geo.measure.length"));
} }
function MeasurerComponent_ng_container_29_igo_measurer_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-measurer-item", 14);
    i0.ɵɵlistener("measureUnitChange", function MeasurerComponent_ng_container_29_igo_measurer_item_2_Template_igo_measurer_item_measureUnitChange_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onAreaUnitChange($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const measure_r17 = i0.ɵɵnextContext().ngIf;
    const ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵproperty("measureType", ctx_r19.measureType.Area)("measureUnit", ctx_r19.measureAreaUnit.SquareMeters)("measure", measure_r17.area)("auto", ctx_r19.measureUnitsAuto)("placeholder", i0.ɵɵpipeBind1(1, 5, "igo.geo.measure.area"));
} }
function MeasurerComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MeasurerComponent_ng_container_29_igo_measurer_item_1_Template, 2, 7, "igo-measurer-item", 13);
    i0.ɵɵtemplate(2, MeasurerComponent_ng_container_29_igo_measurer_item_2_Template, 2, 7, "igo-measurer-item", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.activeMeasureType === ctx_r6.measureType.Length || ctx_r6.activeMeasureType === ctx_r6.measureType.Area);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.activeMeasureType === ctx_r6.measureType.Area);
} }
function MeasurerComponent_mat_divider_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function MeasurerComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function MeasurerComponent_button_35_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onCalculateClick(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelement(3, "mat-icon", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.geo.measure.actionbar.calculate.tooltip"))("disabled", i0.ɵɵpipeBind1(2, 4, ctx_r8.selectedFeatures$).length === 0);
} }
function MeasurerComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function MeasurerComponent_button_38_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onDeleteClick(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelement(3, "mat-icon", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.geo.measure.actionbar.delete.tooltip"))("disabled", i0.ɵɵpipeBind1(2, 4, ctx_r9.selectedFeatures$).length === 0);
} }
/**
 * Tool to measure lengths and areas
 */
export class MeasurerComponent {
    constructor(languageService, dialog, storageService) {
        this.languageService = languageService;
        this.dialog = dialog;
        this.storageService = storageService;
        /**
         * Table template
         * @internal
         */
        this.tableTemplate = {
            selection: true,
            selectMany: true,
            selectionCheckbox: true,
            sort: true,
            columns: [
                {
                    name: 'length',
                    title: this.languageService.translate.instant('igo.geo.measure.lengthHeader'),
                    valueAccessor: (localFeature) => {
                        const unit = this.activeLengthUnit;
                        const measure = metersToUnit(localFeature.properties.measure.length, unit);
                        return formatMeasure(measure, {
                            decimal: 1,
                            unit,
                            unitAbbr: false,
                            locale: 'fr'
                        });
                    }
                },
                {
                    name: 'area',
                    title: this.languageService.translate.instant('igo.geo.measure.areaHeader'),
                    valueAccessor: (localFeature) => {
                        const unit = this.activeAreaUnit;
                        const measure = squareMetersToUnit(localFeature.properties.measure.area, unit);
                        return measure ? formatMeasure(measure, {
                            decimal: 1,
                            unit,
                            unitAbbr: false,
                            locale: 'fr'
                        }) : '';
                    }
                }
            ]
        };
        this.subscriptions$$ = [];
        /**
         * Reference to the MeasureType enum
         * @internal
         */
        this.measureType = MeasureType;
        /**
         * Reference to the AreaMeasureUnit enum
         * @internal
         */
        this.measureAreaUnit = MeasureAreaUnit;
        /**
         * Reference to the LengthMeasureUnit enum
         * @internal
         */
        this.measureLengthUnit = MeasureLengthUnit;
        /**
         * Whether measure units should be automatically determined
         * @internal
         */
        this.measureUnitsAuto = false;
        /**
         * Whether display of distances of areas
         * @internal
         */
        this.displayDistance = true;
        /**
         * Whether display of distances of lines
         * @internal
         */
        this.displayLines = true;
        /**
         * Whether display of areas
         * @internal
         */
        this.displayAreas = true;
        /**
         * Observable of line boolean
         * @internal
         */
        this.hasLine$ = new BehaviorSubject(false);
        /**
         * Observable of area boolean
         * @internal
         */
        this.hasArea$ = new BehaviorSubject(false);
        /**
         * Observable of area
         * @internal
         */
        this.measure$ = new BehaviorSubject({});
        /**
         * Observable of selected features
         * @internal
         */
        this.selectedFeatures$ = new BehaviorSubject([]);
        /**
         * OL draw source
         * @internal
         */
        this.showTooltips = true;
        /**
         * Whether draw control toggle is disabled or not
         * @internal
         */
        this.drawControlIsDisabled = true;
        /**
         * Active mlength unit
         */
        this.activeLengthUnit = MeasureLengthUnit.Meters;
        /**
         * Active area unit
         */
        this.activeAreaUnit = MeasureAreaUnit.SquareMeters;
        /**
         * OL draw source
         */
        this.olDrawSource = new OlVectorSource();
        /**
         * The minimum length a segment must have to display a tooltip.
         * It also applies to area tooltips.
         */
        this.minSegmentLength = 10;
    }
    /**
     * Measure type
     * @internal
     */
    set activeMeasureType(value) { this.setActiveMeasureType(value); }
    get activeMeasureType() { return this._activeMeasureType; }
    /**
     * Wheter one of the draw control is active
     * @internal
     */
    get drawControlIsActive() {
        return this.activeDrawControl !== undefined;
    }
    get projection() {
        return this.map.ol.getView().getProjection().getCode();
    }
    /**
     * Add draw controls and activate one
     * @internal
     */
    ngOnInit() {
        this.initStore();
        this.createDrawLineControl();
        this.createDrawPolygonControl();
        this.createModifyControl();
        this.toggleDrawControl();
        this.updateTooltipsOfOlSource(this.store.source.ol);
        this.checkDistanceAreaToggle();
        this.setActiveMeasureType(MeasureType.Length);
    }
    /**
     * Clear the overlay layer and any interaction added by this component.
     * @internal
     */
    ngOnDestroy() {
        this.setActiveMeasureType(undefined);
        this.deactivateModifyControl();
        this.freezeStore();
        this.subscriptions$$.map(s => s.unsubscribe());
    }
    /**
     * Set the measure type
     * @internal
     */
    onMeasureTypeChange(measureType) {
        this.activeMeasureType = measureType;
    }
    /**
     * Activate or deactivate the current draw control
     * @internal
     */
    onToggleDrawControl(toggle) {
        if (toggle === true) {
            this.toggleDrawControl();
        }
        else {
            this.deactivateDrawControl();
        }
    }
    /**
     * Activate or deactivate the current draw control
     * @internal
     */
    onToggleMeasureUnitsAuto(toggle) {
        this.measureUnitsAuto = toggle;
    }
    /**
     * Activate or deactivate the current display of distances of the areas
     * @internal
     */
    onToggleDisplayDistance(toggle) {
        this.displayDistance = toggle;
        this.onDisplayDistance();
        toggle ? (this.storageService.set('distanceToggle', true, StorageScope.SESSION)) :
            (this.storageService.set('distanceToggle', false, StorageScope.SESSION));
    }
    /**
     * Activate or deactivate the current display of distances of the lines
     * @internal
     */
    onToggleDisplayLines(toggle) {
        this.displayLines = toggle;
        this.onDisplayLines();
        toggle ? (this.storageService.set('linesToggle', true, StorageScope.SESSION)) :
            (this.storageService.set('linesToggle', false, StorageScope.SESSION));
    }
    /**
     * Activate or deactivate the current display of areas
     * @internal
     */
    onToggleDisplayAreas(toggle) {
        this.displayAreas = toggle;
        this.onDisplayAreas();
        toggle ? (this.storageService.set('areasToggle', true, StorageScope.SESSION)) :
            (this.storageService.set('areasToggle', false, StorageScope.SESSION));
    }
    /**
     * Set display parametres in current values
     * @internal
     */
    checkDistanceAreaToggle() {
        if (this.storageService.get('distanceToggle') === false) {
            this.displayDistance = false;
        }
        if (this.storageService.get('linesToggle') === false) {
            this.displayLines = false;
        }
        if (this.storageService.get('areasToggle') === false) {
            this.displayAreas = false;
        }
    }
    /**
     * Activate or deactivate the current display of distances of areas
     * @internal
     */
    onDisplayDistance() {
        if (this.displayDistance) {
            Array.from(document.getElementsByClassName('igo-map-tooltip-measure-polygone-segments')).map((value) => value.classList.remove('igo-map-tooltip-hidden'));
        }
        else {
            Array.from(document.getElementsByClassName('igo-map-tooltip-measure-polygone-segments')).map((value) => value.classList.add('igo-map-tooltip-hidden'));
        }
    }
    /**
     * Activate or deactivate the current display of distances of lines
     * @internal
     */
    onDisplayLines() {
        if (this.displayLines) {
            Array.from(document.getElementsByClassName('igo-map-tooltip-measure-line-segments')).map((value) => value.classList.remove('igo-map-tooltip-hidden'));
        }
        else {
            Array.from(document.getElementsByClassName('igo-map-tooltip-measure-line-segments')).map((value) => value.classList.add('igo-map-tooltip-hidden'));
        }
    }
    /**
     * Activate or deactivate the current display of areas
     * @internal
     */
    onDisplayAreas() {
        if (this.displayAreas) {
            Array.from(document.getElementsByClassName('igo-map-tooltip-measure-area')).map((value) => value.classList.remove('igo-map-tooltip-hidden'));
        }
        else {
            Array.from(document.getElementsByClassName('igo-map-tooltip-measure-area')).map((value) => value.classList.add('igo-map-tooltip-hidden'));
        }
    }
    /**
     * Set the measure type
     * @internal
     */
    onLengthUnitChange(unit) {
        this.activeLengthUnit = unit;
        this.table.refresh();
        this.updateTooltipsOfOlSource(this.store.source.ol);
        if (this.activeOlGeometry !== undefined) {
            this.updateTooltipsOfOlGeometry(this.activeOlGeometry);
        }
    }
    /**
     * Set the measure type
     * @internal
     */
    onAreaUnitChange(unit) {
        this.activeAreaUnit = unit;
        this.table.refresh();
        this.updateTooltipsOfOlSource(this.store.source.ol);
        if (this.activeOlGeometry !== undefined) {
            this.updateTooltipsOfOlGeometry(this.activeOlGeometry);
        }
    }
    onCalculateClick() {
        const features = this.selectedFeatures$.value;
        const area = features.reduce((sum, localFeature) => {
            return sum + localFeature.properties.measure.area || 0;
        }, 0);
        const length = features.reduce((sum, localFeature) => {
            if (localFeature.geometry.type === 'Polygon') {
                return sum;
            }
            return sum + localFeature.properties.measure.length || 0;
        }, 0);
        const perimeter = features.reduce((sum, localFeature) => {
            if (localFeature.geometry.type === 'LineString') {
                return sum;
            }
            return sum + localFeature.properties.measure.length || 0;
        }, 0);
        this.openDialog({
            area,
            length,
            perimeter
        });
    }
    onDeleteClick() {
        this.store.deleteMany(this.selectedFeatures$.value);
        this.selectedFeatures$.value.forEach(selectedFeature => {
            this.olDrawSource.getFeatures().forEach(drawingLayerFeature => {
                const geometry = drawingLayerFeature.getGeometry();
                if (selectedFeature.properties.id === geometry.ol_uid) {
                    this.olDrawSource.removeFeature(drawingLayerFeature);
                }
            });
        });
    }
    onModifyClick() {
        if (this.selectedFeatures$.value.length !== 1) {
            return;
        }
        if (this.modifyControl.active === true) {
            this.deactivateModifyControl();
            this.toggleDrawControl();
        }
        else {
            const localFeature = this.selectedFeatures$.value[0];
            const olFeatures = this.store.layer.ol.getSource().getFeatures();
            const olFeature = olFeatures.find((_olFeature) => {
                return _olFeature.get('id') === localFeature.properties.id;
            });
            if (olFeature !== undefined) {
                this.deactivateDrawControl();
                this.activateModifyControl();
                const olGeometry = olFeature.getGeometry();
                this.clearTooltipsOfOlGeometry(olGeometry);
                this.modifyControl.setOlGeometry(olGeometry);
            }
        }
    }
    openDialog(data) {
        this.dialog.open(MeasurerDialogComponent, { data });
    }
    /**
     * Initialize the measure store and set up some listeners
     * @internal
     */
    initStore() {
        const store = this.store;
        const layer = new VectorLayer({
            title: this.languageService.translate.instant('igo.geo.measure.layerTitle'),
            isIgoInternalLayer: true,
            id: `igo-measures-${uuid()}`,
            zIndex: 200,
            source: new FeatureDataSource(),
            style: createMeasureLayerStyle(),
            showInLayerList: true,
            exportable: true,
            browsable: false,
            workspace: { enabled: false }
        });
        tryBindStoreLayer(store, layer);
        store.layer.visible = true;
        layer.visible$.subscribe(visible => {
            if (visible) {
                Array.from(document.getElementsByClassName('igo-map-tooltip-measure')).map((value) => value.classList.remove('igo-map-tooltip-measure-by-display'));
            }
            else {
                Array.from(document.getElementsByClassName('igo-map-tooltip-measure')).map((value) => value.classList.add('igo-map-tooltip-measure-by-display'));
            }
        });
        tryAddLoadingStrategy(store);
        tryAddSelectionStrategy(store, new FeatureStoreSelectionStrategy({
            map: this.map,
            many: true
        }));
        this.onFeatureAddedKey = store.source.ol.on('addfeature', (event) => {
            const localFeature = event.feature;
            const olGeometry = localFeature.getGeometry();
            this.updateMeasureOfOlGeometry(olGeometry, localFeature.get('measure'));
            this.onDisplayDistance();
        });
        this.onFeatureRemovedKey = store.source.ol.on('removefeature', (event) => {
            const olGeometry = event.feature.getGeometry();
            this.clearTooltipsOfOlGeometry(olGeometry);
        });
        this.selectedFeatures$$ = store.stateView.manyBy$((record) => {
            return record.state.selected === true;
        }).pipe(skip(1) // Skip initial emission
        )
            .subscribe((records) => {
            if (this.modifyControl.active === true) {
                this.deactivateModifyControl();
            }
            this.selectedFeatures$.next(records.map(record => record.entity));
        });
        this.subscriptions$$.push(this.store.entities$.subscribe(objectsExists => {
            if (objectsExists.find(objectExist => objectExist.geometry.type === 'Polygon')) {
                this.hasArea$.next(true);
            }
            else {
                this.hasArea$.next(false);
            }
            if (objectsExists.find(objectExist => objectExist.geometry.type === 'LineString')) {
                this.hasLine$.next(true);
            }
            else {
                this.hasLine$.next(false);
            }
        }));
        this.subscriptions$$.push(this.store.count$.subscribe(cnt => {
            cnt >= 1 ?
                this.store.layer.options.showInLayerList = true :
                this.store.layer.options.showInLayerList = false;
        }));
    }
    /**
     * Freeze any store, meaning the layer is removed, strategies are deactivated
     * and some listener removed
     * @internal
     */
    freezeStore() {
        const store = this.store;
        this.selectedFeatures$$.unsubscribe();
        unByKey(this.onFeatureAddedKey);
        unByKey(this.onFeatureRemovedKey);
        store.deactivateStrategyOfType(FeatureStoreLoadingStrategy);
        store.deactivateStrategyOfType(FeatureStoreSelectionStrategy);
    }
    /**
     * Create a draw line control
     */
    createDrawLineControl() {
        this.drawLineControl = new DrawControl({
            geometryType: 'LineString',
            drawingLayerSource: this.olDrawSource,
            interactionStyle: createMeasureInteractionStyle(),
            drawingLayerStyle: new OlStyle({})
        });
    }
    /**
     * Create a draw polygon control
     */
    createDrawPolygonControl() {
        this.drawPolygonControl = new DrawControl({
            geometryType: 'Polygon',
            drawingLayerSource: this.olDrawSource,
            interactionStyle: createMeasureInteractionStyle(),
            drawingLayerStyle: new OlStyle({})
        });
    }
    /**
     * Create a draw polygon control
     */
    createModifyControl() {
        this.modifyControl = new ModifyControl({
            source: this.olDrawSource,
            drawStyle: createMeasureInteractionStyle(),
            layerStyle: new OlStyle({})
        });
    }
    /**
     * Activate the right control
     */
    toggleDrawControl() {
        this.deactivateDrawControl();
        // this.deactivateModifyControl();
        if (this.activeMeasureType === MeasureType.Length) {
            this.activateDrawControl(this.drawLineControl);
        }
        else if (this.activeMeasureType === MeasureType.Area) {
            this.activateDrawControl(this.drawPolygonControl);
        }
    }
    /**
     * Activate a given control
     * @param drawControl Draw control
     */
    activateDrawControl(drawControl) {
        this.drawControlIsDisabled = false;
        this.activeDrawControl = drawControl;
        this.drawStart$$ = drawControl.start$
            .subscribe((olGeometry) => this.onDrawStart(olGeometry));
        this.drawEnd$$ = drawControl.end$
            .subscribe((olGeometry) => this.onDrawEnd(olGeometry));
        this.drawChanges$$ = drawControl.changes$
            .subscribe((olGeometry) => this.onDrawChanges(olGeometry));
        this.drawChanges$$ = drawControl.abort$
            .subscribe((olGeometry) => {
            this.clearTooltipsOfOlGeometry(olGeometry);
            this.clearMeasures();
        });
        drawControl.setOlMap(this.map.ol, false);
    }
    /**
     * Deactivate the active draw control
     */
    deactivateDrawControl() {
        if (this.activeDrawControl === undefined) {
            return;
        }
        this.olDrawSource.clear();
        if (this.drawStart$$ !== undefined) {
            this.drawStart$$.unsubscribe();
        }
        if (this.drawEnd$$ !== undefined) {
            this.drawEnd$$.unsubscribe();
        }
        if (this.drawChanges$$ !== undefined) {
            this.drawChanges$$.unsubscribe();
        }
        this.clearTooltipsOfOlSource(this.olDrawSource);
        if (this.activeOlGeometry !== undefined) {
            this.clearTooltipsOfOlGeometry(this.activeOlGeometry);
        }
        this.activeDrawControl.setOlMap(undefined);
        this.activeDrawControl = undefined;
        this.activeOlGeometry = undefined;
    }
    setActiveMeasureType(measureType) {
        this._activeMeasureType = measureType;
        this.clearMeasures();
        this.toggleDrawControl();
    }
    /**
     * Clear the draw source and track the geometry being drawn
     * @param olGeometry Ol linestring or polygon
     */
    onDrawStart(olGeometry) {
        this.activeOlGeometry = olGeometry;
    }
    /**
     * Clear the draw source and track the geometry being draw
     * @param olGeometry Ol linestring or polygon
     */
    onDrawEnd(olGeometry) {
        this.activeOlGeometry = undefined;
        this.finalizeMeasureOfOlGeometry(olGeometry);
        this.addFeatureToStore(olGeometry);
        this.clearTooltipsOfOlGeometry(olGeometry);
        this.olDrawSource.clear(true);
    }
    /**
     * Update measures observables and map tooltips
     * @param olGeometry Ol linestring or polygon
     */
    onDrawChanges(olGeometry) {
        const measure = measureOlGeometry(olGeometry, this.projection);
        this.updateMeasureOfOlGeometry(olGeometry, Object.assign({}, measure, {
            area: undefined // We don't want to display an area tooltip while drawing.
        }));
        this.measure$.next(measure);
    }
    /**
     * Activate a given control
     * @param modifyControl Modify control
     */
    activateModifyControl() {
        const selection = this.store.getStrategyOfType(FeatureStoreSelectionStrategy);
        selection.deactivate();
        selection.clear();
        this.modifyStart$$ = this.modifyControl.start$
            .subscribe((olGeometry) => this.onModifyStart(olGeometry));
        this.modifyEnd$$ = this.modifyControl.end$
            .subscribe((olGeometry) => this.onModifyEnd(olGeometry));
        this.modifyChanges$$ = this.modifyControl.changes$
            .subscribe((olGeometry) => this.onModifyChanges(olGeometry));
        this.modifyControl.setOlMap(this.map.ol);
    }
    /**
     * Deactivate the active modify control
     */
    deactivateModifyControl() {
        if (this.modifyStart$$ !== undefined) {
            this.modifyStart$$.unsubscribe();
        }
        if (this.modifyEnd$$ !== undefined) {
            this.modifyEnd$$.unsubscribe();
        }
        if (this.modifyChanges$$ !== undefined) {
            this.modifyChanges$$.unsubscribe();
        }
        if (this.activeOlGeometry !== undefined) {
            if (this.selectedFeatures$.value.length === 1) {
                const localFeature = this.selectedFeatures$.value[0];
                this.addFeatureToStore(this.activeOlGeometry, localFeature);
            }
            this.finalizeMeasureOfOlGeometry(this.activeOlGeometry);
        }
        this.olDrawSource.clear();
        this.store.activateStrategyOfType(FeatureStoreSelectionStrategy);
        this.activeOlGeometry = undefined;
        this.modifyControl.setOlMap(undefined);
    }
    /**
     * Clear the draw source and track the geometry being drawn
     * @param olGeometry Ol linestring or polygon
     */
    onModifyStart(olGeometry) {
        this.onDrawStart(olGeometry);
    }
    /**
     * Update measures observables and map tooltips
     * @param olGeometry Ol linestring or polygon
     */
    onModifyChanges(olGeometry) {
        this.onDrawChanges(olGeometry);
    }
    /**
     * Clear the draw source and track the geometry being draw
     * @param olGeometry Ol linestring or polygon
     */
    onModifyEnd(olGeometry) {
        this.finalizeMeasureOfOlGeometry(olGeometry);
    }
    finalizeMeasureOfOlGeometry(olGeometry) {
        const measure = measureOlGeometry(olGeometry, this.projection);
        this.updateMeasureOfOlGeometry(olGeometry, measure);
    }
    /**
     * Update measures observables
     * @param olGeometry Ol linestring or polygon
     * @param measure Measure
     */
    updateMeasureOfOlGeometry(olGeometry, measure) {
        olGeometry.setProperties({ _measure: measure }, true);
        this.updateTooltipsOfOlGeometry(olGeometry);
    }
    /**
     * Clear the measures observables
     */
    clearMeasures() {
        this.measure$.next({});
    }
    /**
     * Add a feature with measures to the store. The loading stragegy of the store
     * will trigger and add the feature to the map.
     * @internal
     */
    addFeatureToStore(olGeometry, localFeature) {
        const featureId = localFeature ? localFeature.properties.id : olGeometry.ol_uid;
        const projection = this.map.ol.getView().getProjection();
        const geometry = new OlGeoJSON().writeGeometryObject(olGeometry, {
            featureProjection: projection,
            dataProjection: projection
        });
        this.store.update({
            type: FEATURE,
            geometry,
            projection: projection.getCode(),
            properties: {
                id: featureId,
                measure: olGeometry.get('_measure')
            },
            meta: {
                id: featureId
            }
        });
    }
    /**
     * Update all the tooltips of an OL geometry
     * @param olGeometry OL Geometry
     * @param lengths Lengths of the OL geometry's segments
     * @param measureUnit Display tooltip measure in those units
     */
    updateTooltipsOfOlGeometry(olGeometry) {
        const measure = olGeometry.get('_measure');
        const lengths = measure.lengths;
        const area = measure.area;
        const olMidpointsTooltips = updateOlTooltipsAtMidpoints(olGeometry);
        if (lengths.length === olMidpointsTooltips.length) {
            for (let i = 0; i < olMidpointsTooltips.length; i++) {
                const length = lengths[i];
                if (length !== undefined) {
                    this.updateOlTooltip(olMidpointsTooltips[i], metersToUnit(length, this.activeLengthUnit), this.activeLengthUnit, MeasureType.Length);
                }
            }
        }
        if (area !== undefined) {
            this.updateOlTooltip(updateOlTooltipAtCenter(olGeometry), squareMetersToUnit(area, this.activeAreaUnit), this.activeAreaUnit, MeasureType.Area);
        }
    }
    /**
     * Show the map tooltips of a geoemtry
     */
    showTooltipsOfOlGeometry(olGeometry) {
        getTooltipsOfOlGeometry(olGeometry).forEach((olTooltip) => {
            if (this.shouldShowTooltip(olTooltip)) {
                this.map.ol.addOverlay(olTooltip);
            }
        });
    }
    /**
     * Clear the tooltips of an OL geometrys
     * @param olGeometry OL geometry with tooltips
     */
    clearTooltipsOfOlGeometry(olGeometry) {
        getTooltipsOfOlGeometry(olGeometry).forEach((olTooltip) => {
            if (olTooltip !== undefined && olTooltip.getMap() !== undefined) {
                this.map.ol.removeOverlay(olTooltip);
            }
        });
    }
    /**
     * Show the map tooltips of all the geometries of a source
     */
    updateTooltipsOfOlSource(olSource) {
        olSource.forEachFeature((olFeature) => {
            this.updateTooltipsOfOlGeometry(olFeature.getGeometry());
        });
    }
    /**
     * Show the map tooltips of all the geometries of a source
     */
    showTooltipsOfOlSource(olSource) {
        olSource.forEachFeature((olFeature) => {
            this.showTooltipsOfOlGeometry(olFeature.getGeometry());
        });
    }
    /**
     * Clear the map tooltips
     * @param olDrawSource OL vector source
     */
    clearTooltipsOfOlSource(olSource) {
        olSource.forEachFeature((olFeature) => {
            const olGeometry = olFeature.getGeometry();
            if (olGeometry !== undefined) {
                this.clearTooltipsOfOlGeometry(olFeature.getGeometry());
            }
        });
    }
    /**
     * Update an OL tooltip properties and inner HTML and add it to the map if possible
     * @param olTooltip OL tooltip
     * @param measure The measure valeu ti display
     * @param measureUnit Display tooltip measure in those units
     */
    updateOlTooltip(olTooltip, measure, unit, type) {
        olTooltip.setProperties({ _measure: measure, _unit: unit, _type: type }, true);
        olTooltip.getElement().innerHTML = this.computeTooltipInnerHTML(olTooltip);
        if (this.shouldShowTooltip(olTooltip)) {
            this.map.ol.addOverlay(olTooltip);
        }
    }
    /**
     * Compute a tooltip's content
     * @param olTooltip OL overlay
     * @returns Inner HTML
     */
    computeTooltipInnerHTML(olTooltip) {
        const properties = olTooltip.getProperties();
        return formatMeasure(properties._measure, {
            decimal: 1,
            unit: properties._unit,
            unitAbbr: true,
            locale: 'fr'
        }, this.languageService);
    }
    /**
     * Whether a tooltip should be showned based on the length
     * of the segment it is bound to.
     * @param olTooltip OL overlay
     * @returns True if the tooltip should be shown
     */
    shouldShowTooltip(olTooltip) {
        if (this.showTooltips === false) {
            return false;
        }
        const properties = olTooltip.getProperties();
        const measure = properties._measure;
        if (measure === undefined) {
            return false;
        }
        if (properties._unit === MeasureType.Length) {
            const minSegmentLength = metersToUnit(this.minSegmentLength, properties._unit) || 0;
            return measure > Math.max(minSegmentLength, 0);
        }
        return true;
    }
}
MeasurerComponent.ɵfac = function MeasurerComponent_Factory(t) { return new (t || MeasurerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.MatDialog), i0.ɵɵdirectiveInject(i1.StorageService)); };
MeasurerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MeasurerComponent, selectors: [["igo-measurer"]], viewQuery: function MeasurerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
    } }, inputs: { map: "map", store: "store", activeMeasureType: "activeMeasureType", minSegmentLength: "minSegmentLength" }, decls: 43, vars: 60, consts: [[1, "measure-type-toggle", "mat-typography"], [3, "value", "change"], [3, "value"], [1, "measure-options", "mat-typography"], [3, "disabled", "checked", "labelPosition", "change"], [4, "ngIf"], [3, "checked", "labelPosition", "change", 4, "ngIf"], [3, "checked", "labelPosition", "change"], [1, "measure-store-buttons"], ["mat-icon-button", "", "color", "accent", 3, "matTooltip", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", 3, "matTooltip", "disabled", "click", 4, "ngIf"], [1, "table-compact", 3, "store", "template"], ["table", ""], [3, "measureType", "measureUnit", "measure", "auto", "placeholder", "measureUnitChange", 4, "ngIf"], [3, "measureType", "measureUnit", "measure", "auto", "placeholder", "measureUnitChange"], ["mat-icon-button", "", "color", "accent", 3, "matTooltip", "disabled", "click"], ["svgIcon", "calculator"], ["mat-icon-button", "", "color", "warn", 3, "matTooltip", "disabled", "click"], ["svgIcon", "delete"]], template: function MeasurerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "mat-button-toggle-group", 1);
        i0.ɵɵlistener("change", function MeasurerComponent_Template_mat_button_toggle_group_change_2_listener($event) { return ctx.onMeasureTypeChange($event.value); });
        i0.ɵɵelementStart(3, "mat-button-toggle", 2);
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-button-toggle", 2);
        i0.ɵɵtext(7);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "mat-slide-toggle", 4);
        i0.ɵɵlistener("change", function MeasurerComponent_Template_mat_slide_toggle_change_10_listener($event) { return ctx.onToggleDrawControl($event.checked); });
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, MeasurerComponent_mat_divider_13_Template, 1, 0, "mat-divider", 5);
        i0.ɵɵpipe(14, "async");
        i0.ɵɵtemplate(15, MeasurerComponent_mat_slide_toggle_15_Template, 3, 5, "mat-slide-toggle", 6);
        i0.ɵɵpipe(16, "async");
        i0.ɵɵtemplate(17, MeasurerComponent_mat_divider_17_Template, 1, 0, "mat-divider", 5);
        i0.ɵɵpipe(18, "async");
        i0.ɵɵpipe(19, "async");
        i0.ɵɵtemplate(20, MeasurerComponent_mat_slide_toggle_20_Template, 3, 5, "mat-slide-toggle", 6);
        i0.ɵɵpipe(21, "async");
        i0.ɵɵtemplate(22, MeasurerComponent_mat_slide_toggle_22_Template, 3, 5, "mat-slide-toggle", 6);
        i0.ɵɵpipe(23, "async");
        i0.ɵɵtemplate(24, MeasurerComponent_mat_divider_24_Template, 1, 0, "mat-divider", 5);
        i0.ɵɵpipe(25, "async");
        i0.ɵɵelementStart(26, "mat-slide-toggle", 7);
        i0.ɵɵlistener("change", function MeasurerComponent_Template_mat_slide_toggle_change_26_listener($event) { return ctx.onToggleMeasureUnitsAuto($event.checked); });
        i0.ɵɵtext(27);
        i0.ɵɵpipe(28, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(29, MeasurerComponent_ng_container_29_Template, 3, 2, "ng-container", 5);
        i0.ɵɵpipe(30, "async");
        i0.ɵɵtemplate(31, MeasurerComponent_mat_divider_31_Template, 1, 0, "mat-divider", 5);
        i0.ɵɵpipe(32, "async");
        i0.ɵɵpipe(33, "async");
        i0.ɵɵelementStart(34, "div", 8);
        i0.ɵɵtemplate(35, MeasurerComponent_button_35_Template, 4, 6, "button", 9);
        i0.ɵɵpipe(36, "async");
        i0.ɵɵpipe(37, "async");
        i0.ɵɵtemplate(38, MeasurerComponent_button_38_Template, 4, 6, "button", 10);
        i0.ɵɵpipe(39, "async");
        i0.ɵɵpipe(40, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(41, "igo-entity-table", 11, 12);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.activeMeasureType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.measureType.Length);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 24, "igo.geo.measure." + ctx.measureType.Length), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.measureType.Area);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 26, "igo.geo.measure." + ctx.measureType.Area), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.drawControlIsDisabled)("checked", ctx.drawControlIsActive)("labelPosition", "before");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 28, "igo.geo.measure.toggleActive"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(14, 30, ctx.hasLine$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(16, 32, ctx.hasLine$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(18, 34, ctx.hasLine$) || i0.ɵɵpipeBind1(19, 36, ctx.hasArea$));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(21, 38, ctx.hasArea$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(23, 40, ctx.hasArea$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(25, 42, ctx.hasArea$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx.measureUnitsAuto)("labelPosition", "before");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(28, 44, "igo.geo.measure.toggleAutoUnits"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(30, 46, ctx.measure$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(32, 48, ctx.hasLine$) || i0.ɵɵpipeBind1(33, 50, ctx.hasArea$));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(36, 52, ctx.hasLine$) || i0.ɵɵpipeBind1(37, 54, ctx.hasArea$));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(39, 56, ctx.hasLine$) || i0.ɵɵpipeBind1(40, 58, ctx.hasArea$));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("store", ctx.store)("template", ctx.tableTemplate);
    } }, styles: [".measure-type-toggle[_ngcontent-%COMP%]{padding:10px;text-align:center}.measure-type-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{width:100%}.measure-type-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:50%}.measure-options[_ngcontent-%COMP%]{overflow-x:hidden}.measure-options[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{width:100%;margin:10px}.measure-options[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-content{width:calc(100% - 60px)}.measure-store-buttons[_ngcontent-%COMP%]{margin-left:-2px}.measure-store-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{margin-left:14px}.table-compact[_ngcontent-%COMP%]     .mat-header-cell.mat-column-selectionCheckbox{width:52px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeasurerComponent, [{
        type: Component,
        args: [{
                selector: 'igo-measurer',
                templateUrl: './measurer.component.html',
                styleUrls: ['./measurer.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.LanguageService }, { type: i2.MatDialog }, { type: i1.StorageService }]; }, { map: [{
            type: Input
        }], store: [{
            type: Input
        }], activeMeasureType: [{
            type: Input
        }], minSegmentLength: [{
            type: Input
        }], table: [{
            type: ViewChild,
            args: ['table', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWVhc3VyZS9tZWFzdXJlci9tZWFzdXJlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9tZWFzdXJlL21lYXN1cmVyL21lYXN1cmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sT0FBTyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sU0FBUyxNQUFNLG1CQUFtQixDQUFDO0FBQzFDLE9BQU8sY0FBYyxNQUFNLGtCQUFrQixDQUFDO0FBTzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEMsT0FBTyxFQUFtQixZQUFZLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBRzNFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUNMLE9BQU8sRUFFUCwyQkFBMkIsRUFDM0IsNkJBQTZCLEVBQzdCLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUkxQyxPQUFPLEVBQ0ws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b0J4QixlQUE4QztRQUE5QyxtR0FBOEM7UUFHakQsZUFBOEM7UUFBOUMsbUdBQThDO1FBUzlDLGVBQThDO1FBQTlDLG1HQUE4QztRQXFCdkQsZUFBZTtRQUFmLGlDQUFlLCtCQUFBOzt1RkR4Q04saUJBQWlCO2NBTjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3VIQXFOVSxHQUFHO2tCQUFYLEtBQUs7WUFLRyxLQUFLO2tCQUFiLEtBQUs7WUFPRixpQkFBaUI7a0JBRHBCLEtBQUs7WUFTRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFFZ0MsS0FBSztrQkFBMUMsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IE9sU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IE9sR2VvSlNPTiBmcm9tICdvbC9mb3JtYXQvR2VvSlNPTic7XG5pbXBvcnQgT2xWZWN0b3JTb3VyY2UgZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5pbXBvcnQgeyBWZWN0b3JTb3VyY2VFdmVudCBhcyBPbFZlY3RvclNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5pbXBvcnQgT2xMaW5lU3RyaW5nIGZyb20gJ29sL2dlb20vTGluZVN0cmluZyc7XG5pbXBvcnQgT2xQb2x5Z29uIGZyb20gJ29sL2dlb20vUG9seWdvbic7XG5pbXBvcnQgT2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHR5cGUgeyBkZWZhdWx0IGFzIE9sR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcbmltcG9ydCBPbE92ZXJsYXkgZnJvbSAnb2wvT3ZlcmxheSc7XG5pbXBvcnQgeyB1bkJ5S2V5IH0gZnJvbSAnb2wvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSwgU3RvcmFnZVNjb3BlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgRW50aXR5UmVjb3JkLCBFbnRpdHlUYWJsZVRlbXBsYXRlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB0eXBlIHsgRW50aXR5VGFibGVDb21wb25lbnQgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJ0BpZ28yL3V0aWxzJztcblxuaW1wb3J0IHsgRmVhdHVyZURhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcbmltcG9ydCB7XG4gIEZFQVRVUkUsXG4gIEZlYXR1cmVTdG9yZSxcbiAgRmVhdHVyZVN0b3JlTG9hZGluZ1N0cmF0ZWd5LFxuICBGZWF0dXJlU3RvcmVTZWxlY3Rpb25TdHJhdGVneSxcbiAgdHJ5QmluZFN0b3JlTGF5ZXIsXG4gIHRyeUFkZExvYWRpbmdTdHJhdGVneSxcbiAgdHJ5QWRkU2VsZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnLi4vLi4vZmVhdHVyZSc7XG5pbXBvcnQgeyBEcmF3Q29udHJvbCwgTW9kaWZ5Q29udHJvbCB9IGZyb20gJy4uLy4uL2dlb21ldHJ5L3NoYXJlZCc7XG5pbXBvcnQgeyBWZWN0b3JMYXllciB9IGZyb20gJy4uLy4uL2xheWVyJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcCc7XG5cbmltcG9ydCB7IE1lYXN1cmUsIE1lYXN1cmVyRGlhbG9nRGF0YSwgRmVhdHVyZVdpdGhNZWFzdXJlIH0gZnJvbSAnLi4vc2hhcmVkL21lYXN1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICBNZWFzdXJlVHlwZSxcbiAgTWVhc3VyZUFyZWFVbml0LFxuICBNZWFzdXJlTGVuZ3RoVW5pdCxcbn0gZnJvbSAnLi4vc2hhcmVkL21lYXN1cmUuZW51bSc7XG5pbXBvcnQge1xuICBtZWFzdXJlT2xHZW9tZXRyeSxcbiAgY3JlYXRlTWVhc3VyZUludGVyYWN0aW9uU3R5bGUsXG4gIGNyZWF0ZU1lYXN1cmVMYXllclN0eWxlLFxuICB1cGRhdGVPbFRvb2x0aXBzQXRNaWRwb2ludHMsXG4gIHVwZGF0ZU9sVG9vbHRpcEF0Q2VudGVyLFxuICBnZXRUb29sdGlwc09mT2xHZW9tZXRyeSxcbiAgc3F1YXJlTWV0ZXJzVG9Vbml0LFxuICBtZXRlcnNUb1VuaXQsXG4gIGZvcm1hdE1lYXN1cmVcbn0gZnJvbSAnLi4vc2hhcmVkL21lYXN1cmUudXRpbHMnO1xuaW1wb3J0IHsgTWVhc3VyZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL21lYXN1cmVyLWRpYWxvZy5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRvb2wgdG8gbWVhc3VyZSBsZW5ndGhzIGFuZCBhcmVhc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tbWVhc3VyZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVhc3VyZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZWFzdXJlci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNZWFzdXJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogVGFibGUgdGVtcGxhdGVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgdGFibGVUZW1wbGF0ZTogRW50aXR5VGFibGVUZW1wbGF0ZSA9IHtcbiAgICBzZWxlY3Rpb246IHRydWUsXG4gICAgc2VsZWN0TWFueTogdHJ1ZSxcbiAgICBzZWxlY3Rpb25DaGVja2JveDogdHJ1ZSxcbiAgICBzb3J0OiB0cnVlLFxuICAgIGNvbHVtbnM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2xlbmd0aCcsXG4gICAgICAgIHRpdGxlOiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5tZWFzdXJlLmxlbmd0aEhlYWRlcicpLFxuICAgICAgICB2YWx1ZUFjY2Vzc29yOiAobG9jYWxGZWF0dXJlOiBGZWF0dXJlV2l0aE1lYXN1cmUpID0+IHtcbiAgICAgICAgICBjb25zdCB1bml0ID0gdGhpcy5hY3RpdmVMZW5ndGhVbml0O1xuICAgICAgICAgIGNvbnN0IG1lYXN1cmUgPSBtZXRlcnNUb1VuaXQobG9jYWxGZWF0dXJlLnByb3BlcnRpZXMubWVhc3VyZS5sZW5ndGgsIHVuaXQpO1xuICAgICAgICAgIHJldHVybiBmb3JtYXRNZWFzdXJlKG1lYXN1cmUsIHtcbiAgICAgICAgICAgIGRlY2ltYWw6IDEsXG4gICAgICAgICAgICB1bml0LFxuICAgICAgICAgICAgdW5pdEFiYnI6IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWxlOiAnZnInXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhcmVhJyxcbiAgICAgICAgdGl0bGU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLm1lYXN1cmUuYXJlYUhlYWRlcicpLFxuICAgICAgICB2YWx1ZUFjY2Vzc29yOiAobG9jYWxGZWF0dXJlOiBGZWF0dXJlV2l0aE1lYXN1cmUpID0+IHtcbiAgICAgICAgICBjb25zdCB1bml0ID0gdGhpcy5hY3RpdmVBcmVhVW5pdDtcbiAgICAgICAgICBjb25zdCBtZWFzdXJlID0gc3F1YXJlTWV0ZXJzVG9Vbml0KGxvY2FsRmVhdHVyZS5wcm9wZXJ0aWVzLm1lYXN1cmUuYXJlYSwgdW5pdCk7XG4gICAgICAgICAgcmV0dXJuIG1lYXN1cmUgPyBmb3JtYXRNZWFzdXJlKG1lYXN1cmUsIHtcbiAgICAgICAgICAgIGRlY2ltYWw6IDEsXG4gICAgICAgICAgICB1bml0LFxuICAgICAgICAgICAgdW5pdEFiYnI6IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWxlOiAnZnInXG4gICAgICAgICAgfSkgOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMkJDogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIHRoZSBNZWFzdXJlVHlwZSBlbnVtXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIG1lYXN1cmVUeXBlID0gTWVhc3VyZVR5cGU7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgQXJlYU1lYXN1cmVVbml0IGVudW1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgbWVhc3VyZUFyZWFVbml0ID0gTWVhc3VyZUFyZWFVbml0O1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIExlbmd0aE1lYXN1cmVVbml0IGVudW1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgbWVhc3VyZUxlbmd0aFVuaXQgPSBNZWFzdXJlTGVuZ3RoVW5pdDtcblxuICAvKipcbiAgICogV2hldGhlciBtZWFzdXJlIHVuaXRzIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGRldGVybWluZWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgbWVhc3VyZVVuaXRzQXV0bzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGRpc3BsYXkgb2YgZGlzdGFuY2VzIG9mIGFyZWFzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIGRpc3BsYXlEaXN0YW5jZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZGlzcGxheSBvZiBkaXN0YW5jZXMgb2YgbGluZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgZGlzcGxheUxpbmVzOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciBkaXNwbGF5IG9mIGFyZWFzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIGRpc3BsYXlBcmVhczogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgbGluZSBib29sZWFuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgIHB1YmxpYyBoYXNMaW5lJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgYXJlYSBib29sZWFuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIGhhc0FyZWEkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiBhcmVhXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIG1lYXN1cmUkOiBCZWhhdmlvclN1YmplY3Q8TWVhc3VyZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiBzZWxlY3RlZCBmZWF0dXJlc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RlZEZlYXR1cmVzJDogQmVoYXZpb3JTdWJqZWN0PEZlYXR1cmVXaXRoTWVhc3VyZVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIC8qKlxuICAgKiBPTCBkcmF3IHNvdXJjZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBzaG93VG9vbHRpcHM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGRyYXcgY29udHJvbCB0b2dnbGUgaXMgZGlzYWJsZWQgb3Igbm90XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIGRyYXdDb250cm9sSXNEaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIERyYXcgbGluZSBjb250cm9sXG4gICAqL1xuICBwcml2YXRlIGRyYXdMaW5lQ29udHJvbDogRHJhd0NvbnRyb2w7XG5cbiAgLyoqXG4gICAqIERyYXcgcG9seWdvbiBjb250cm9sXG4gICAqL1xuICBwcml2YXRlIGRyYXdQb2x5Z29uQ29udHJvbDogRHJhd0NvbnRyb2w7XG5cbiAgLyoqXG4gICAqIE1vZGlmeSBjb250cm9sXG4gICAqL1xuICBwcml2YXRlIG1vZGlmeUNvbnRyb2w6IE1vZGlmeUNvbnRyb2w7XG5cbiAgLyoqXG4gICAqIEFjdGl2ZSBPTCBnZW9tZXRyeVxuICAgKi9cbiAgcHJpdmF0ZSBhY3RpdmVPbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb247XG5cbiAgLyoqXG4gICAqIEFjdGl2ZSBtbGVuZ3RoIHVuaXRcbiAgICovXG4gIHByaXZhdGUgYWN0aXZlTGVuZ3RoVW5pdDogTWVhc3VyZUxlbmd0aFVuaXQgPSBNZWFzdXJlTGVuZ3RoVW5pdC5NZXRlcnM7XG5cbiAgLyoqXG4gICAqIEFjdGl2ZSBhcmVhIHVuaXRcbiAgICovXG4gIHByaXZhdGUgYWN0aXZlQXJlYVVuaXQ6IE1lYXN1cmVBcmVhVW5pdCA9IE1lYXN1cmVBcmVhVW5pdC5TcXVhcmVNZXRlcnM7XG5cbiAgLyoqXG4gICAqIEZlYXR1cmUgYWRkZWQgbGlzdGVuZXIga2V5XG4gICAqL1xuICBwcml2YXRlIG9uRmVhdHVyZUFkZGVkS2V5O1xuXG4gIC8qKlxuICAgKiBGZWF0dXJlIHJlbW92ZWQgbGlzdGVuZXIga2V5XG4gICAqL1xuICBwcml2YXRlIG9uRmVhdHVyZVJlbW92ZWRLZXk7XG5cbiAgLyoqXG4gICAqIEFjdGl2ZSBkcmF3IGNvbnRyb2xcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIGFjdGl2ZURyYXdDb250cm9sOiBEcmF3Q29udHJvbDtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIGRyYXcgc3RhcnRcbiAgICovXG4gIHByaXZhdGUgZHJhd1N0YXJ0JCQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIGRyYXcgZW5kXG4gICAqL1xuICBwcml2YXRlIGRyYXdFbmQkJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gY29udHJvbHMgY2hhbmdlc1xuICAgKi9cbiAgcHJpdmF0ZSBkcmF3Q2hhbmdlcyQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byBtb2RpZnkgc3RhcnRcbiAgICovXG4gIHByaXZhdGUgbW9kaWZ5U3RhcnQkJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gbW9kaWZ5IGVuZFxuICAgKi9cbiAgcHJpdmF0ZSBtb2RpZnlFbmQkJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gY29udHJvbHMgY2hhbmdlc1xuICAgKi9cbiAgcHJpdmF0ZSBtb2RpZnlDaGFuZ2VzJCQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIG1lYXN1cmVzIHNlbGVjdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBzZWxlY3RlZEZlYXR1cmVzJCQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogT0wgZHJhdyBzb3VyY2VcbiAgICovXG4gIHByaXZhdGUgb2xEcmF3U291cmNlID0gbmV3IE9sVmVjdG9yU291cmNlKCk7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXAgdG8gbWVhc3VyZSBvblxuICAgKi9cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgLyoqXG4gICAqIFRoZSBtZWFzdXJlcyBzdG9yZVxuICAgKi9cbiAgQElucHV0KCkgc3RvcmU6IEZlYXR1cmVTdG9yZTxGZWF0dXJlV2l0aE1lYXN1cmU+O1xuXG4gIC8qKlxuICAgKiBNZWFzdXJlIHR5cGVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYWN0aXZlTWVhc3VyZVR5cGUodmFsdWU6IE1lYXN1cmVUeXBlKSB7IHRoaXMuc2V0QWN0aXZlTWVhc3VyZVR5cGUodmFsdWUpOyB9XG4gIGdldCBhY3RpdmVNZWFzdXJlVHlwZSgpOiBNZWFzdXJlVHlwZSB7IHJldHVybiB0aGlzLl9hY3RpdmVNZWFzdXJlVHlwZTsgfVxuICBwcml2YXRlIF9hY3RpdmVNZWFzdXJlVHlwZTogTWVhc3VyZVR5cGU7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGxlbmd0aCBhIHNlZ21lbnQgbXVzdCBoYXZlIHRvIGRpc3BsYXkgYSB0b29sdGlwLlxuICAgKiBJdCBhbHNvIGFwcGxpZXMgdG8gYXJlYSB0b29sdGlwcy5cbiAgICovXG4gIEBJbnB1dCgpIG1pblNlZ21lbnRMZW5ndGg6IG51bWJlciA9IDEwO1xuXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJywgeyBzdGF0aWM6IHRydWUgfSkgdGFibGU6IEVudGl0eVRhYmxlQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBXaGV0ZXIgb25lIG9mIHRoZSBkcmF3IGNvbnRyb2wgaXMgYWN0aXZlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IGRyYXdDb250cm9sSXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRHJhd0NvbnRyb2wgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBwcm9qZWN0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWFwLm9sLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkuZ2V0Q29kZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQWRkIGRyYXcgY29udHJvbHMgYW5kIGFjdGl2YXRlIG9uZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdFN0b3JlKCk7XG4gICAgdGhpcy5jcmVhdGVEcmF3TGluZUNvbnRyb2woKTtcbiAgICB0aGlzLmNyZWF0ZURyYXdQb2x5Z29uQ29udHJvbCgpO1xuICAgIHRoaXMuY3JlYXRlTW9kaWZ5Q29udHJvbCgpO1xuICAgIHRoaXMudG9nZ2xlRHJhd0NvbnRyb2woKTtcbiAgICB0aGlzLnVwZGF0ZVRvb2x0aXBzT2ZPbFNvdXJjZSh0aGlzLnN0b3JlLnNvdXJjZS5vbCk7XG4gICAgdGhpcy5jaGVja0Rpc3RhbmNlQXJlYVRvZ2dsZSgpO1xuICAgIHRoaXMuc2V0QWN0aXZlTWVhc3VyZVR5cGUoTWVhc3VyZVR5cGUuTGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgb3ZlcmxheSBsYXllciBhbmQgYW55IGludGVyYWN0aW9uIGFkZGVkIGJ5IHRoaXMgY29tcG9uZW50LlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc2V0QWN0aXZlTWVhc3VyZVR5cGUodW5kZWZpbmVkKTtcbiAgICB0aGlzLmRlYWN0aXZhdGVNb2RpZnlDb250cm9sKCk7XG4gICAgdGhpcy5mcmVlemVTdG9yZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQkLm1hcChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtZWFzdXJlIHR5cGVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbk1lYXN1cmVUeXBlQ2hhbmdlKG1lYXN1cmVUeXBlOiBNZWFzdXJlVHlwZSkge1xuICAgIHRoaXMuYWN0aXZlTWVhc3VyZVR5cGUgPSBtZWFzdXJlVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSBvciBkZWFjdGl2YXRlIHRoZSBjdXJyZW50IGRyYXcgY29udHJvbFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uVG9nZ2xlRHJhd0NvbnRyb2wodG9nZ2xlOiBib29sZWFuKSB7XG4gICAgaWYgKHRvZ2dsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy50b2dnbGVEcmF3Q29udHJvbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYWN0aXZhdGVEcmF3Q29udHJvbCgpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIG9yIGRlYWN0aXZhdGUgdGhlIGN1cnJlbnQgZHJhdyBjb250cm9sXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgIG9uVG9nZ2xlTWVhc3VyZVVuaXRzQXV0byh0b2dnbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm1lYXN1cmVVbml0c0F1dG8gPSB0b2dnbGU7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgY3VycmVudCBkaXNwbGF5IG9mIGRpc3RhbmNlcyBvZiB0aGUgYXJlYXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvblRvZ2dsZURpc3BsYXlEaXN0YW5jZSh0b2dnbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc3BsYXlEaXN0YW5jZSA9IHRvZ2dsZTtcbiAgICB0aGlzLm9uRGlzcGxheURpc3RhbmNlKCk7XG4gICAgdG9nZ2xlID8gKHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCdkaXN0YW5jZVRvZ2dsZScsIHRydWUsIFN0b3JhZ2VTY29wZS5TRVNTSU9OKSkgOlxuICAgICAodGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ2Rpc3RhbmNlVG9nZ2xlJywgZmFsc2UsIFN0b3JhZ2VTY29wZS5TRVNTSU9OKSk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgY3VycmVudCBkaXNwbGF5IG9mIGRpc3RhbmNlcyBvZiB0aGUgbGluZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvblRvZ2dsZURpc3BsYXlMaW5lcyh0b2dnbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc3BsYXlMaW5lcyA9IHRvZ2dsZTtcbiAgICB0aGlzLm9uRGlzcGxheUxpbmVzKCk7XG4gICAgdG9nZ2xlID8gKHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCdsaW5lc1RvZ2dsZScsIHRydWUsIFN0b3JhZ2VTY29wZS5TRVNTSU9OKSkgOlxuICAgICAodGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ2xpbmVzVG9nZ2xlJywgZmFsc2UsIFN0b3JhZ2VTY29wZS5TRVNTSU9OKSk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgY3VycmVudCBkaXNwbGF5IG9mIGFyZWFzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25Ub2dnbGVEaXNwbGF5QXJlYXModG9nZ2xlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNwbGF5QXJlYXMgPSB0b2dnbGU7XG4gICAgdGhpcy5vbkRpc3BsYXlBcmVhcygpO1xuICAgIHRvZ2dsZSA/ICh0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgnYXJlYXNUb2dnbGUnLCB0cnVlLCBTdG9yYWdlU2NvcGUuU0VTU0lPTikpIDpcbiAgICAgKHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCdhcmVhc1RvZ2dsZScsIGZhbHNlLCBTdG9yYWdlU2NvcGUuU0VTU0lPTikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkaXNwbGF5IHBhcmFtZXRyZXMgaW4gY3VycmVudCB2YWx1ZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjaGVja0Rpc3RhbmNlQXJlYVRvZ2dsZSgpe1xuICAgIGlmICh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnZGlzdGFuY2VUb2dnbGUnKSA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5kaXNwbGF5RGlzdGFuY2UgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCdsaW5lc1RvZ2dsZScpID09PSBmYWxzZSl7XG4gICAgICB0aGlzLmRpc3BsYXlMaW5lcyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ2FyZWFzVG9nZ2xlJykgPT09IGZhbHNlKXtcbiAgICAgIHRoaXMuZGlzcGxheUFyZWFzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIG9yIGRlYWN0aXZhdGUgdGhlIGN1cnJlbnQgZGlzcGxheSBvZiBkaXN0YW5jZXMgb2YgYXJlYXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbkRpc3BsYXlEaXN0YW5jZSgpIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5RGlzdGFuY2UpIHtcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaWdvLW1hcC10b29sdGlwLW1lYXN1cmUtcG9seWdvbmUtc2VnbWVudHMnKSkubWFwKCh2YWx1ZTogRWxlbWVudCkgPT5cbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnaWdvLW1hcC10b29sdGlwLWhpZGRlbicpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpZ28tbWFwLXRvb2x0aXAtbWVhc3VyZS1wb2x5Z29uZS1zZWdtZW50cycpKS5tYXAoKHZhbHVlOiBFbGVtZW50KSA9PlxuICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCdpZ28tbWFwLXRvb2x0aXAtaGlkZGVuJykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSBvciBkZWFjdGl2YXRlIHRoZSBjdXJyZW50IGRpc3BsYXkgb2YgZGlzdGFuY2VzIG9mIGxpbmVzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25EaXNwbGF5TGluZXMoKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheUxpbmVzKSB7XG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lnby1tYXAtdG9vbHRpcC1tZWFzdXJlLWxpbmUtc2VnbWVudHMnKSkubWFwKCh2YWx1ZTogRWxlbWVudCkgPT5cbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnaWdvLW1hcC10b29sdGlwLWhpZGRlbicpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpZ28tbWFwLXRvb2x0aXAtbWVhc3VyZS1saW5lLXNlZ21lbnRzJykpLm1hcCgodmFsdWU6IEVsZW1lbnQpID0+XG4gICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoJ2lnby1tYXAtdG9vbHRpcC1oaWRkZW4nKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIG9yIGRlYWN0aXZhdGUgdGhlIGN1cnJlbnQgZGlzcGxheSBvZiBhcmVhc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uRGlzcGxheUFyZWFzKCkge1xuICAgIGlmICh0aGlzLmRpc3BsYXlBcmVhcykge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpZ28tbWFwLXRvb2x0aXAtbWVhc3VyZS1hcmVhJykpLm1hcCgodmFsdWU6IEVsZW1lbnQpID0+XG4gICAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ2lnby1tYXAtdG9vbHRpcC1oaWRkZW4nKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaWdvLW1hcC10b29sdGlwLW1lYXN1cmUtYXJlYScpKS5tYXAoKHZhbHVlOiBFbGVtZW50KSA9PlxuICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCdpZ28tbWFwLXRvb2x0aXAtaGlkZGVuJykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1lYXN1cmUgdHlwZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTGVuZ3RoVW5pdENoYW5nZSh1bml0OiBNZWFzdXJlTGVuZ3RoVW5pdCkge1xuICAgIHRoaXMuYWN0aXZlTGVuZ3RoVW5pdCA9IHVuaXQ7XG4gICAgdGhpcy50YWJsZS5yZWZyZXNoKCk7XG4gICAgdGhpcy51cGRhdGVUb29sdGlwc09mT2xTb3VyY2UodGhpcy5zdG9yZS5zb3VyY2Uub2wpO1xuICAgIGlmICh0aGlzLmFjdGl2ZU9sR2VvbWV0cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cGRhdGVUb29sdGlwc09mT2xHZW9tZXRyeSh0aGlzLmFjdGl2ZU9sR2VvbWV0cnkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1lYXN1cmUgdHlwZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uQXJlYVVuaXRDaGFuZ2UodW5pdDogTWVhc3VyZUFyZWFVbml0KSB7XG4gICAgdGhpcy5hY3RpdmVBcmVhVW5pdCA9IHVuaXQ7XG4gICAgdGhpcy50YWJsZS5yZWZyZXNoKCk7XG4gICAgdGhpcy51cGRhdGVUb29sdGlwc09mT2xTb3VyY2UodGhpcy5zdG9yZS5zb3VyY2Uub2wpO1xuICAgIGlmICh0aGlzLmFjdGl2ZU9sR2VvbWV0cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cGRhdGVUb29sdGlwc09mT2xHZW9tZXRyeSh0aGlzLmFjdGl2ZU9sR2VvbWV0cnkpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FsY3VsYXRlQ2xpY2soKSB7XG4gICAgY29uc3QgZmVhdHVyZXMgPSB0aGlzLnNlbGVjdGVkRmVhdHVyZXMkLnZhbHVlO1xuICAgIGNvbnN0IGFyZWEgPSBmZWF0dXJlcy5yZWR1Y2UoKHN1bTogbnVtYmVyLCBsb2NhbEZlYXR1cmU6IEZlYXR1cmVXaXRoTWVhc3VyZSkgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArIGxvY2FsRmVhdHVyZS5wcm9wZXJ0aWVzLm1lYXN1cmUuYXJlYSB8fCAwO1xuICAgIH0sIDApO1xuICAgIGNvbnN0IGxlbmd0aCA9IGZlYXR1cmVzLnJlZHVjZSgoc3VtOiBudW1iZXIsIGxvY2FsRmVhdHVyZTogRmVhdHVyZVdpdGhNZWFzdXJlKSA9PiB7XG4gICAgICBpZiAobG9jYWxGZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09ICdQb2x5Z29uJykge1xuICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1bSArIGxvY2FsRmVhdHVyZS5wcm9wZXJ0aWVzLm1lYXN1cmUubGVuZ3RoIHx8IDA7XG4gICAgfSwgMCk7XG4gICAgY29uc3QgcGVyaW1ldGVyID0gZmVhdHVyZXMucmVkdWNlKChzdW06IG51bWJlciwgbG9jYWxGZWF0dXJlOiBGZWF0dXJlV2l0aE1lYXN1cmUpID0+IHtcbiAgICAgIGlmIChsb2NhbEZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmVTdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBzdW07XG4gICAgICB9XG4gICAgICByZXR1cm4gc3VtICsgbG9jYWxGZWF0dXJlLnByb3BlcnRpZXMubWVhc3VyZS5sZW5ndGggfHwgMDtcbiAgICB9LCAwKTtcblxuICAgIHRoaXMub3BlbkRpYWxvZyh7XG4gICAgICBhcmVhLFxuICAgICAgbGVuZ3RoLFxuICAgICAgcGVyaW1ldGVyXG4gICAgfSk7XG4gIH1cblxuICBvbkRlbGV0ZUNsaWNrKCkge1xuICAgIHRoaXMuc3RvcmUuZGVsZXRlTWFueSh0aGlzLnNlbGVjdGVkRmVhdHVyZXMkLnZhbHVlKTtcbiAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZXMkLnZhbHVlLmZvckVhY2goc2VsZWN0ZWRGZWF0dXJlID0+IHtcbiAgICAgIHRoaXMub2xEcmF3U291cmNlLmdldEZlYXR1cmVzKCkuZm9yRWFjaChkcmF3aW5nTGF5ZXJGZWF0dXJlID0+IHtcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBkcmF3aW5nTGF5ZXJGZWF0dXJlLmdldEdlb21ldHJ5KCkgYXMgYW55O1xuICAgICAgICBpZiAoc2VsZWN0ZWRGZWF0dXJlLnByb3BlcnRpZXMuaWQgPT09IGdlb21ldHJ5Lm9sX3VpZCkge1xuICAgICAgICAgIHRoaXMub2xEcmF3U291cmNlLnJlbW92ZUZlYXR1cmUoZHJhd2luZ0xheWVyRmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb2RpZnlDbGljaygpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEZlYXR1cmVzJC52YWx1ZS5sZW5ndGggIT09IDEpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAodGhpcy5tb2RpZnlDb250cm9sLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlTW9kaWZ5Q29udHJvbCgpO1xuICAgICAgdGhpcy50b2dnbGVEcmF3Q29udHJvbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb2NhbEZlYXR1cmUgPSB0aGlzLnNlbGVjdGVkRmVhdHVyZXMkLnZhbHVlWzBdO1xuICAgICAgY29uc3Qgb2xGZWF0dXJlcyA9IHRoaXMuc3RvcmUubGF5ZXIub2wuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgIGNvbnN0IG9sRmVhdHVyZSA9IG9sRmVhdHVyZXMuZmluZCgoX29sRmVhdHVyZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+KSA9PiB7XG4gICAgICAgIHJldHVybiBfb2xGZWF0dXJlLmdldCgnaWQnKSA9PT0gbG9jYWxGZWF0dXJlLnByb3BlcnRpZXMuaWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG9sRmVhdHVyZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZURyYXdDb250cm9sKCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVNb2RpZnlDb250cm9sKCk7XG5cbiAgICAgICAgY29uc3Qgb2xHZW9tZXRyeSA9IG9sRmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgICAgICB0aGlzLmNsZWFyVG9vbHRpcHNPZk9sR2VvbWV0cnkob2xHZW9tZXRyeSBhcyAoT2xMaW5lU3RyaW5nIHwgT2xQb2x5Z29uKSk7XG4gICAgICAgIHRoaXMubW9kaWZ5Q29udHJvbC5zZXRPbEdlb21ldHJ5KG9sR2VvbWV0cnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3BlbkRpYWxvZyhkYXRhOiBNZWFzdXJlckRpYWxvZ0RhdGEpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZy5vcGVuKE1lYXN1cmVyRGlhbG9nQ29tcG9uZW50LCB7ZGF0YX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG1lYXN1cmUgc3RvcmUgYW5kIHNldCB1cCBzb21lIGxpc3RlbmVyc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgaW5pdFN0b3JlKCkge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdG9yZTtcblxuICAgIGNvbnN0IGxheWVyID0gbmV3IFZlY3RvckxheWVyKHtcbiAgICAgIHRpdGxlOiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5tZWFzdXJlLmxheWVyVGl0bGUnKSxcbiAgICAgIGlzSWdvSW50ZXJuYWxMYXllcjogdHJ1ZSxcbiAgICAgIGlkOiBgaWdvLW1lYXN1cmVzLSR7dXVpZCgpfWAsXG4gICAgICB6SW5kZXg6IDIwMCxcbiAgICAgIHNvdXJjZTogbmV3IEZlYXR1cmVEYXRhU291cmNlKCksXG4gICAgICBzdHlsZTogY3JlYXRlTWVhc3VyZUxheWVyU3R5bGUoKSxcbiAgICAgIHNob3dJbkxheWVyTGlzdDogdHJ1ZSxcbiAgICAgIGV4cG9ydGFibGU6IHRydWUsXG4gICAgICBicm93c2FibGU6IGZhbHNlLFxuICAgICAgd29ya3NwYWNlOiB7IGVuYWJsZWQ6IGZhbHNlIH1cbiAgICB9KTtcbiAgICB0cnlCaW5kU3RvcmVMYXllcihzdG9yZSwgbGF5ZXIpO1xuICAgIHN0b3JlLmxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgIGxheWVyLnZpc2libGUkLnN1YnNjcmliZSh2aXNpYmxlID0+IHtcbiAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaWdvLW1hcC10b29sdGlwLW1lYXN1cmUnKSkubWFwKCh2YWx1ZTogRWxlbWVudCkgPT5cbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnaWdvLW1hcC10b29sdGlwLW1lYXN1cmUtYnktZGlzcGxheScpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lnby1tYXAtdG9vbHRpcC1tZWFzdXJlJykpLm1hcCgodmFsdWU6IEVsZW1lbnQpID0+XG4gICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoJ2lnby1tYXAtdG9vbHRpcC1tZWFzdXJlLWJ5LWRpc3BsYXknKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnlBZGRMb2FkaW5nU3RyYXRlZ3koc3RvcmUpO1xuXG4gICAgdHJ5QWRkU2VsZWN0aW9uU3RyYXRlZ3koc3RvcmUsIG5ldyBGZWF0dXJlU3RvcmVTZWxlY3Rpb25TdHJhdGVneSh7XG4gICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgbWFueTogdHJ1ZVxuICAgIH0pKTtcblxuICAgIHRoaXMub25GZWF0dXJlQWRkZWRLZXkgPSBzdG9yZS5zb3VyY2Uub2wub24oJ2FkZGZlYXR1cmUnLCAoZXZlbnQ6IE9sVmVjdG9yU291cmNlRXZlbnQ8T2xHZW9tZXRyeT4pID0+IHtcbiAgICAgIGNvbnN0IGxvY2FsRmVhdHVyZSA9IGV2ZW50LmZlYXR1cmU7XG4gICAgICBjb25zdCBvbEdlb21ldHJ5ID0gbG9jYWxGZWF0dXJlLmdldEdlb21ldHJ5KCkgYXMgYW55O1xuICAgICAgdGhpcy51cGRhdGVNZWFzdXJlT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnksIGxvY2FsRmVhdHVyZS5nZXQoJ21lYXN1cmUnKSk7XG4gICAgICB0aGlzLm9uRGlzcGxheURpc3RhbmNlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uRmVhdHVyZVJlbW92ZWRLZXkgPSBzdG9yZS5zb3VyY2Uub2wub24oJ3JlbW92ZWZlYXR1cmUnLCAoZXZlbnQ6IE9sVmVjdG9yU291cmNlRXZlbnQ8T2xHZW9tZXRyeT4pID0+IHtcbiAgICAgIGNvbnN0IG9sR2VvbWV0cnkgPSBldmVudC5mZWF0dXJlLmdldEdlb21ldHJ5KCkgYXMgYW55O1xuICAgICAgdGhpcy5jbGVhclRvb2x0aXBzT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVzJCQgPSBzdG9yZS5zdGF0ZVZpZXcubWFueUJ5JCgocmVjb3JkOiBFbnRpdHlSZWNvcmQ8RmVhdHVyZVdpdGhNZWFzdXJlPikgPT4ge1xuICAgICAgcmV0dXJuIHJlY29yZC5zdGF0ZS5zZWxlY3RlZCA9PT0gdHJ1ZTtcbiAgICB9KS5waXBlKFxuICAgICAgc2tpcCgxKSAvLyBTa2lwIGluaXRpYWwgZW1pc3Npb25cbiAgICApXG4gICAgLnN1YnNjcmliZSgocmVjb3JkczogRW50aXR5UmVjb3JkPEZlYXR1cmVXaXRoTWVhc3VyZT5bXSkgPT4ge1xuICAgICAgaWYgKHRoaXMubW9kaWZ5Q29udHJvbC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlTW9kaWZ5Q29udHJvbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVzJC5uZXh0KHJlY29yZHMubWFwKHJlY29yZCA9PiByZWNvcmQuZW50aXR5KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMkJC5wdXNoKHRoaXMuc3RvcmUuZW50aXRpZXMkLnN1YnNjcmliZShvYmplY3RzRXhpc3RzID0+IHtcbiAgICAgIGlmIChvYmplY3RzRXhpc3RzLmZpbmQob2JqZWN0RXhpc3QgPT4gb2JqZWN0RXhpc3QuZ2VvbWV0cnkudHlwZSA9PT0gJ1BvbHlnb24nKSl7XG4gICAgICAgIHRoaXMuaGFzQXJlYSQubmV4dCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFzQXJlYSQubmV4dChmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvYmplY3RzRXhpc3RzLmZpbmQob2JqZWN0RXhpc3QgPT4gb2JqZWN0RXhpc3QuZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmVTdHJpbmcnKSl7XG4gICAgICAgIHRoaXMuaGFzTGluZSQubmV4dCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFzTGluZSQubmV4dChmYWxzZSk7XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zJCQucHVzaCh0aGlzLnN0b3JlLmNvdW50JC5zdWJzY3JpYmUoY250ID0+IHtcbiAgICAgIGNudCA+PSAxID9cbiAgICAgICAgdGhpcy5zdG9yZS5sYXllci5vcHRpb25zLnNob3dJbkxheWVyTGlzdCA9IHRydWUgOlxuICAgICAgICB0aGlzLnN0b3JlLmxheWVyLm9wdGlvbnMuc2hvd0luTGF5ZXJMaXN0ID0gZmFsc2U7XG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZyZWV6ZSBhbnkgc3RvcmUsIG1lYW5pbmcgdGhlIGxheWVyIGlzIHJlbW92ZWQsIHN0cmF0ZWdpZXMgYXJlIGRlYWN0aXZhdGVkXG4gICAqIGFuZCBzb21lIGxpc3RlbmVyIHJlbW92ZWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIGZyZWV6ZVN0b3JlKCkge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdG9yZTtcbiAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZXMkJC51bnN1YnNjcmliZSgpO1xuICAgIHVuQnlLZXkodGhpcy5vbkZlYXR1cmVBZGRlZEtleSk7XG4gICAgdW5CeUtleSh0aGlzLm9uRmVhdHVyZVJlbW92ZWRLZXkpO1xuICAgIHN0b3JlLmRlYWN0aXZhdGVTdHJhdGVneU9mVHlwZShGZWF0dXJlU3RvcmVMb2FkaW5nU3RyYXRlZ3kpO1xuICAgIHN0b3JlLmRlYWN0aXZhdGVTdHJhdGVneU9mVHlwZShGZWF0dXJlU3RvcmVTZWxlY3Rpb25TdHJhdGVneSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZHJhdyBsaW5lIGNvbnRyb2xcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlRHJhd0xpbmVDb250cm9sKCkge1xuICAgIHRoaXMuZHJhd0xpbmVDb250cm9sID0gbmV3IERyYXdDb250cm9sKHtcbiAgICAgIGdlb21ldHJ5VHlwZTogJ0xpbmVTdHJpbmcnLFxuICAgICAgZHJhd2luZ0xheWVyU291cmNlOiB0aGlzLm9sRHJhd1NvdXJjZSxcbiAgICAgIGludGVyYWN0aW9uU3R5bGU6IGNyZWF0ZU1lYXN1cmVJbnRlcmFjdGlvblN0eWxlKCksXG4gICAgICBkcmF3aW5nTGF5ZXJTdHlsZTogbmV3IE9sU3R5bGUoe30pXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZHJhdyBwb2x5Z29uIGNvbnRyb2xcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlRHJhd1BvbHlnb25Db250cm9sKCkge1xuICAgIHRoaXMuZHJhd1BvbHlnb25Db250cm9sID0gbmV3IERyYXdDb250cm9sKHtcbiAgICAgIGdlb21ldHJ5VHlwZTogJ1BvbHlnb24nLFxuICAgICAgZHJhd2luZ0xheWVyU291cmNlOiB0aGlzLm9sRHJhd1NvdXJjZSxcbiAgICAgIGludGVyYWN0aW9uU3R5bGU6IGNyZWF0ZU1lYXN1cmVJbnRlcmFjdGlvblN0eWxlKCksXG4gICAgICBkcmF3aW5nTGF5ZXJTdHlsZTogbmV3IE9sU3R5bGUoe30pXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZHJhdyBwb2x5Z29uIGNvbnRyb2xcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlTW9kaWZ5Q29udHJvbCgpIHtcbiAgICB0aGlzLm1vZGlmeUNvbnRyb2wgPSBuZXcgTW9kaWZ5Q29udHJvbCh7XG4gICAgICBzb3VyY2U6IHRoaXMub2xEcmF3U291cmNlLFxuICAgICAgZHJhd1N0eWxlOiBjcmVhdGVNZWFzdXJlSW50ZXJhY3Rpb25TdHlsZSgpLFxuICAgICAgbGF5ZXJTdHlsZTogbmV3IE9sU3R5bGUoe30pXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGUgdGhlIHJpZ2h0IGNvbnRyb2xcbiAgICovXG4gIHByaXZhdGUgdG9nZ2xlRHJhd0NvbnRyb2woKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlRHJhd0NvbnRyb2woKTtcbiAgICAvLyB0aGlzLmRlYWN0aXZhdGVNb2RpZnlDb250cm9sKCk7XG4gICAgaWYgKHRoaXMuYWN0aXZlTWVhc3VyZVR5cGUgPT09IE1lYXN1cmVUeXBlLkxlbmd0aCkge1xuICAgICAgdGhpcy5hY3RpdmF0ZURyYXdDb250cm9sKHRoaXMuZHJhd0xpbmVDb250cm9sKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlTWVhc3VyZVR5cGUgPT09IE1lYXN1cmVUeXBlLkFyZWEpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVEcmF3Q29udHJvbCh0aGlzLmRyYXdQb2x5Z29uQ29udHJvbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIGEgZ2l2ZW4gY29udHJvbFxuICAgKiBAcGFyYW0gZHJhd0NvbnRyb2wgRHJhdyBjb250cm9sXG4gICAqL1xuICBwcml2YXRlIGFjdGl2YXRlRHJhd0NvbnRyb2woZHJhd0NvbnRyb2w6IERyYXdDb250cm9sKSB7XG4gICAgdGhpcy5kcmF3Q29udHJvbElzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZURyYXdDb250cm9sID0gZHJhd0NvbnRyb2w7XG4gICAgdGhpcy5kcmF3U3RhcnQkJCA9IGRyYXdDb250cm9sLnN0YXJ0JFxuICAgICAgLnN1YnNjcmliZSgob2xHZW9tZXRyeTogT2xMaW5lU3RyaW5nIHwgT2xQb2x5Z29uKSA9PiB0aGlzLm9uRHJhd1N0YXJ0KG9sR2VvbWV0cnkpKTtcbiAgICB0aGlzLmRyYXdFbmQkJCA9IGRyYXdDb250cm9sLmVuZCRcbiAgICAgIC5zdWJzY3JpYmUoKG9sR2VvbWV0cnk6IE9sTGluZVN0cmluZyB8IE9sUG9seWdvbikgPT4gdGhpcy5vbkRyYXdFbmQob2xHZW9tZXRyeSkpO1xuICAgIHRoaXMuZHJhd0NoYW5nZXMkJCA9IGRyYXdDb250cm9sLmNoYW5nZXMkXG4gICAgICAuc3Vic2NyaWJlKChvbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24pID0+IHRoaXMub25EcmF3Q2hhbmdlcyhvbEdlb21ldHJ5KSk7XG4gICAgdGhpcy5kcmF3Q2hhbmdlcyQkID0gZHJhd0NvbnRyb2wuYWJvcnQkXG4gICAgICAuc3Vic2NyaWJlKChvbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24pID0+IHtcbiAgICAgICAgdGhpcy5jbGVhclRvb2x0aXBzT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnkpO1xuICAgICAgICB0aGlzLmNsZWFyTWVhc3VyZXMoKTtcbiAgICAgIH0pO1xuICAgIGRyYXdDb250cm9sLnNldE9sTWFwKHRoaXMubWFwLm9sLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZSB0aGUgYWN0aXZlIGRyYXcgY29udHJvbFxuICAgKi9cbiAgcHJpdmF0ZSBkZWFjdGl2YXRlRHJhd0NvbnRyb2woKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlRHJhd0NvbnRyb2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2xEcmF3U291cmNlLmNsZWFyKCk7XG4gICAgaWYgKHRoaXMuZHJhd1N0YXJ0JCQgIT09IHVuZGVmaW5lZCApIHsgdGhpcy5kcmF3U3RhcnQkJC51bnN1YnNjcmliZSgpOyB9XG4gICAgaWYgKHRoaXMuZHJhd0VuZCQkICE9PSB1bmRlZmluZWQgKSB7IHRoaXMuZHJhd0VuZCQkLnVuc3Vic2NyaWJlKCk7IH1cbiAgICBpZiAodGhpcy5kcmF3Q2hhbmdlcyQkICE9PSB1bmRlZmluZWQgKSB7IHRoaXMuZHJhd0NoYW5nZXMkJC51bnN1YnNjcmliZSgpOyB9XG5cbiAgICB0aGlzLmNsZWFyVG9vbHRpcHNPZk9sU291cmNlKHRoaXMub2xEcmF3U291cmNlKTtcbiAgICBpZiAodGhpcy5hY3RpdmVPbEdlb21ldHJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2xlYXJUb29sdGlwc09mT2xHZW9tZXRyeSh0aGlzLmFjdGl2ZU9sR2VvbWV0cnkpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZURyYXdDb250cm9sLnNldE9sTWFwKHVuZGVmaW5lZCk7XG4gICAgdGhpcy5hY3RpdmVEcmF3Q29udHJvbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZU9sR2VvbWV0cnkgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGl2ZU1lYXN1cmVUeXBlKG1lYXN1cmVUeXBlOiBNZWFzdXJlVHlwZSkge1xuICAgIHRoaXMuX2FjdGl2ZU1lYXN1cmVUeXBlID0gbWVhc3VyZVR5cGU7XG4gICAgdGhpcy5jbGVhck1lYXN1cmVzKCk7XG4gICAgdGhpcy50b2dnbGVEcmF3Q29udHJvbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBkcmF3IHNvdXJjZSBhbmQgdHJhY2sgdGhlIGdlb21ldHJ5IGJlaW5nIGRyYXduXG4gICAqIEBwYXJhbSBvbEdlb21ldHJ5IE9sIGxpbmVzdHJpbmcgb3IgcG9seWdvblxuICAgKi9cbiAgcHJpdmF0ZSBvbkRyYXdTdGFydChvbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24pIHtcbiAgICB0aGlzLmFjdGl2ZU9sR2VvbWV0cnkgPSBvbEdlb21ldHJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBkcmF3IHNvdXJjZSBhbmQgdHJhY2sgdGhlIGdlb21ldHJ5IGJlaW5nIGRyYXdcbiAgICogQHBhcmFtIG9sR2VvbWV0cnkgT2wgbGluZXN0cmluZyBvciBwb2x5Z29uXG4gICAqL1xuICBwcml2YXRlIG9uRHJhd0VuZChvbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24pIHtcbiAgICB0aGlzLmFjdGl2ZU9sR2VvbWV0cnkgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maW5hbGl6ZU1lYXN1cmVPZk9sR2VvbWV0cnkob2xHZW9tZXRyeSk7XG4gICAgdGhpcy5hZGRGZWF0dXJlVG9TdG9yZShvbEdlb21ldHJ5KTtcbiAgICB0aGlzLmNsZWFyVG9vbHRpcHNPZk9sR2VvbWV0cnkob2xHZW9tZXRyeSk7XG4gICAgdGhpcy5vbERyYXdTb3VyY2UuY2xlYXIodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIG1lYXN1cmVzIG9ic2VydmFibGVzIGFuZCBtYXAgdG9vbHRpcHNcbiAgICogQHBhcmFtIG9sR2VvbWV0cnkgT2wgbGluZXN0cmluZyBvciBwb2x5Z29uXG4gICAqL1xuICBwcml2YXRlIG9uRHJhd0NoYW5nZXMob2xHZW9tZXRyeTogT2xMaW5lU3RyaW5nIHwgT2xQb2x5Z29uKSB7XG4gICAgY29uc3QgbWVhc3VyZSA9IG1lYXN1cmVPbEdlb21ldHJ5KG9sR2VvbWV0cnksIHRoaXMucHJvamVjdGlvbik7XG4gICAgdGhpcy51cGRhdGVNZWFzdXJlT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnksIE9iamVjdC5hc3NpZ24oe30sIG1lYXN1cmUsIHtcbiAgICAgIGFyZWE6IHVuZGVmaW5lZCAvLyBXZSBkb24ndCB3YW50IHRvIGRpc3BsYXkgYW4gYXJlYSB0b29sdGlwIHdoaWxlIGRyYXdpbmcuXG4gICAgfSkpO1xuICAgIHRoaXMubWVhc3VyZSQubmV4dChtZWFzdXJlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSBhIGdpdmVuIGNvbnRyb2xcbiAgICogQHBhcmFtIG1vZGlmeUNvbnRyb2wgTW9kaWZ5IGNvbnRyb2xcbiAgICovXG4gIHByaXZhdGUgYWN0aXZhdGVNb2RpZnlDb250cm9sKCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc3RvcmUuZ2V0U3RyYXRlZ3lPZlR5cGUoRmVhdHVyZVN0b3JlU2VsZWN0aW9uU3RyYXRlZ3kpIGFzIEZlYXR1cmVTdG9yZVNlbGVjdGlvblN0cmF0ZWd5O1xuICAgIHNlbGVjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgc2VsZWN0aW9uLmNsZWFyKCk7XG5cbiAgICB0aGlzLm1vZGlmeVN0YXJ0JCQgPSB0aGlzLm1vZGlmeUNvbnRyb2wuc3RhcnQkXG4gICAgICAuc3Vic2NyaWJlKChvbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24pID0+IHRoaXMub25Nb2RpZnlTdGFydChvbEdlb21ldHJ5KSk7XG4gICAgdGhpcy5tb2RpZnlFbmQkJCA9IHRoaXMubW9kaWZ5Q29udHJvbC5lbmQkXG4gICAgICAuc3Vic2NyaWJlKChvbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24pID0+IHRoaXMub25Nb2RpZnlFbmQob2xHZW9tZXRyeSkpO1xuICAgIHRoaXMubW9kaWZ5Q2hhbmdlcyQkID0gdGhpcy5tb2RpZnlDb250cm9sLmNoYW5nZXMkXG4gICAgICAuc3Vic2NyaWJlKChvbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24pID0+IHRoaXMub25Nb2RpZnlDaGFuZ2VzKG9sR2VvbWV0cnkpKTtcbiAgICB0aGlzLm1vZGlmeUNvbnRyb2wuc2V0T2xNYXAodGhpcy5tYXAub2wpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGUgdGhlIGFjdGl2ZSBtb2RpZnkgY29udHJvbFxuICAgKi9cbiAgcHJpdmF0ZSBkZWFjdGl2YXRlTW9kaWZ5Q29udHJvbCgpIHtcbiAgICBpZiAodGhpcy5tb2RpZnlTdGFydCQkICE9PSB1bmRlZmluZWQgKSB7IHRoaXMubW9kaWZ5U3RhcnQkJC51bnN1YnNjcmliZSgpOyB9XG4gICAgaWYgKHRoaXMubW9kaWZ5RW5kJCQgIT09IHVuZGVmaW5lZCApIHsgdGhpcy5tb2RpZnlFbmQkJC51bnN1YnNjcmliZSgpOyB9XG4gICAgaWYgKHRoaXMubW9kaWZ5Q2hhbmdlcyQkICE9PSB1bmRlZmluZWQgKSB7IHRoaXMubW9kaWZ5Q2hhbmdlcyQkLnVuc3Vic2NyaWJlKCk7IH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZU9sR2VvbWV0cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGZWF0dXJlcyQudmFsdWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsRmVhdHVyZSA9IHRoaXMuc2VsZWN0ZWRGZWF0dXJlcyQudmFsdWVbMF07XG4gICAgICAgIHRoaXMuYWRkRmVhdHVyZVRvU3RvcmUodGhpcy5hY3RpdmVPbEdlb21ldHJ5LCBsb2NhbEZlYXR1cmUpO1xuICAgICAgfVxuICAgICAgdGhpcy5maW5hbGl6ZU1lYXN1cmVPZk9sR2VvbWV0cnkodGhpcy5hY3RpdmVPbEdlb21ldHJ5KTtcbiAgICB9XG5cbiAgICB0aGlzLm9sRHJhd1NvdXJjZS5jbGVhcigpO1xuXG4gICAgdGhpcy5zdG9yZS5hY3RpdmF0ZVN0cmF0ZWd5T2ZUeXBlKEZlYXR1cmVTdG9yZVNlbGVjdGlvblN0cmF0ZWd5KTtcblxuICAgIHRoaXMuYWN0aXZlT2xHZW9tZXRyeSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1vZGlmeUNvbnRyb2wuc2V0T2xNYXAodW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgZHJhdyBzb3VyY2UgYW5kIHRyYWNrIHRoZSBnZW9tZXRyeSBiZWluZyBkcmF3blxuICAgKiBAcGFyYW0gb2xHZW9tZXRyeSBPbCBsaW5lc3RyaW5nIG9yIHBvbHlnb25cbiAgICovXG4gIHByaXZhdGUgb25Nb2RpZnlTdGFydChvbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24pIHtcbiAgICB0aGlzLm9uRHJhd1N0YXJ0KG9sR2VvbWV0cnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBtZWFzdXJlcyBvYnNlcnZhYmxlcyBhbmQgbWFwIHRvb2x0aXBzXG4gICAqIEBwYXJhbSBvbEdlb21ldHJ5IE9sIGxpbmVzdHJpbmcgb3IgcG9seWdvblxuICAgKi9cbiAgcHJpdmF0ZSBvbk1vZGlmeUNoYW5nZXMob2xHZW9tZXRyeTogT2xMaW5lU3RyaW5nIHwgT2xQb2x5Z29uKSB7XG4gICAgdGhpcy5vbkRyYXdDaGFuZ2VzKG9sR2VvbWV0cnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBkcmF3IHNvdXJjZSBhbmQgdHJhY2sgdGhlIGdlb21ldHJ5IGJlaW5nIGRyYXdcbiAgICogQHBhcmFtIG9sR2VvbWV0cnkgT2wgbGluZXN0cmluZyBvciBwb2x5Z29uXG4gICAqL1xuICBwcml2YXRlIG9uTW9kaWZ5RW5kKG9sR2VvbWV0cnk6IE9sTGluZVN0cmluZyB8IE9sUG9seWdvbikge1xuICAgIHRoaXMuZmluYWxpemVNZWFzdXJlT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5hbGl6ZU1lYXN1cmVPZk9sR2VvbWV0cnkob2xHZW9tZXRyeTogT2xMaW5lU3RyaW5nIHwgT2xQb2x5Z29uKSB7XG4gICAgY29uc3QgbWVhc3VyZSA9IG1lYXN1cmVPbEdlb21ldHJ5KG9sR2VvbWV0cnksIHRoaXMucHJvamVjdGlvbik7XG4gICAgdGhpcy51cGRhdGVNZWFzdXJlT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnksIG1lYXN1cmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBtZWFzdXJlcyBvYnNlcnZhYmxlc1xuICAgKiBAcGFyYW0gb2xHZW9tZXRyeSBPbCBsaW5lc3RyaW5nIG9yIHBvbHlnb25cbiAgICogQHBhcmFtIG1lYXN1cmUgTWVhc3VyZVxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVNZWFzdXJlT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnk6IE9sTGluZVN0cmluZyB8IE9sUG9seWdvbiwgbWVhc3VyZTogTWVhc3VyZSkge1xuICAgIG9sR2VvbWV0cnkuc2V0UHJvcGVydGllcyh7X21lYXN1cmU6IG1lYXN1cmV9LCB0cnVlKTtcbiAgICB0aGlzLnVwZGF0ZVRvb2x0aXBzT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBtZWFzdXJlcyBvYnNlcnZhYmxlc1xuICAgKi9cbiAgcHJpdmF0ZSBjbGVhck1lYXN1cmVzKCkge1xuICAgIHRoaXMubWVhc3VyZSQubmV4dCh7fSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgZmVhdHVyZSB3aXRoIG1lYXN1cmVzIHRvIHRoZSBzdG9yZS4gVGhlIGxvYWRpbmcgc3RyYWdlZ3kgb2YgdGhlIHN0b3JlXG4gICAqIHdpbGwgdHJpZ2dlciBhbmQgYWRkIHRoZSBmZWF0dXJlIHRvIHRoZSBtYXAuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJpdmF0ZSBhZGRGZWF0dXJlVG9TdG9yZShvbEdlb21ldHJ5LCBsb2NhbEZlYXR1cmU/OiBGZWF0dXJlV2l0aE1lYXN1cmUpIHtcbiAgICBjb25zdCBmZWF0dXJlSWQgPSBsb2NhbEZlYXR1cmUgPyBsb2NhbEZlYXR1cmUucHJvcGVydGllcy5pZCA6IG9sR2VvbWV0cnkub2xfdWlkO1xuICAgIGNvbnN0IHByb2plY3Rpb24gPSB0aGlzLm1hcC5vbC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IE9sR2VvSlNPTigpLndyaXRlR2VvbWV0cnlPYmplY3Qob2xHZW9tZXRyeSwge1xuICAgICAgZmVhdHVyZVByb2plY3Rpb246IHByb2plY3Rpb24sXG4gICAgICBkYXRhUHJvamVjdGlvbjogcHJvamVjdGlvblxuICAgIH0pIGFzIGFueTtcbiAgICB0aGlzLnN0b3JlLnVwZGF0ZSh7XG4gICAgICB0eXBlOiBGRUFUVVJFLFxuICAgICAgZ2VvbWV0cnksXG4gICAgICBwcm9qZWN0aW9uOiBwcm9qZWN0aW9uLmdldENvZGUoKSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWQ6IGZlYXR1cmVJZCxcbiAgICAgICAgbWVhc3VyZTogb2xHZW9tZXRyeS5nZXQoJ19tZWFzdXJlJylcbiAgICAgIH0sXG4gICAgICBtZXRhOiB7XG4gICAgICAgIGlkOiBmZWF0dXJlSWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWxsIHRoZSB0b29sdGlwcyBvZiBhbiBPTCBnZW9tZXRyeVxuICAgKiBAcGFyYW0gb2xHZW9tZXRyeSBPTCBHZW9tZXRyeVxuICAgKiBAcGFyYW0gbGVuZ3RocyBMZW5ndGhzIG9mIHRoZSBPTCBnZW9tZXRyeSdzIHNlZ21lbnRzXG4gICAqIEBwYXJhbSBtZWFzdXJlVW5pdCBEaXNwbGF5IHRvb2x0aXAgbWVhc3VyZSBpbiB0aG9zZSB1bml0c1xuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwc09mT2xHZW9tZXRyeShvbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24pIHtcbiAgICBjb25zdCBtZWFzdXJlID0gb2xHZW9tZXRyeS5nZXQoJ19tZWFzdXJlJyk7XG4gICAgY29uc3QgbGVuZ3RocyA9IG1lYXN1cmUubGVuZ3RocztcbiAgICBjb25zdCBhcmVhID0gbWVhc3VyZS5hcmVhO1xuXG4gICAgY29uc3Qgb2xNaWRwb2ludHNUb29sdGlwcyA9IHVwZGF0ZU9sVG9vbHRpcHNBdE1pZHBvaW50cyhvbEdlb21ldHJ5KTtcbiAgICBpZiAobGVuZ3Rocy5sZW5ndGggPT09IG9sTWlkcG9pbnRzVG9vbHRpcHMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sTWlkcG9pbnRzVG9vbHRpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbGVuZ3Roc1tpXTtcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVPbFRvb2x0aXAoXG4gICAgICAgICAgICBvbE1pZHBvaW50c1Rvb2x0aXBzW2ldLFxuICAgICAgICAgICAgbWV0ZXJzVG9Vbml0KGxlbmd0aCwgdGhpcy5hY3RpdmVMZW5ndGhVbml0KSxcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTGVuZ3RoVW5pdCxcbiAgICAgICAgICAgIE1lYXN1cmVUeXBlLkxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJlYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9sVG9vbHRpcChcbiAgICAgICAgdXBkYXRlT2xUb29sdGlwQXRDZW50ZXIob2xHZW9tZXRyeSksXG4gICAgICAgIHNxdWFyZU1ldGVyc1RvVW5pdChhcmVhLCB0aGlzLmFjdGl2ZUFyZWFVbml0KSxcbiAgICAgICAgdGhpcy5hY3RpdmVBcmVhVW5pdCxcbiAgICAgICAgTWVhc3VyZVR5cGUuQXJlYVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgbWFwIHRvb2x0aXBzIG9mIGEgZ2VvZW10cnlcbiAgICovXG4gIHByaXZhdGUgc2hvd1Rvb2x0aXBzT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnk6IE9sTGluZVN0cmluZyB8IE9sUG9seWdvbikge1xuICAgIGdldFRvb2x0aXBzT2ZPbEdlb21ldHJ5KG9sR2VvbWV0cnkpLmZvckVhY2goKG9sVG9vbHRpcDogT2xPdmVybGF5IHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICBpZiAodGhpcy5zaG91bGRTaG93VG9vbHRpcChvbFRvb2x0aXApKSB7XG4gICAgICAgIHRoaXMubWFwLm9sLmFkZE92ZXJsYXkob2xUb29sdGlwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgdG9vbHRpcHMgb2YgYW4gT0wgZ2VvbWV0cnlzXG4gICAqIEBwYXJhbSBvbEdlb21ldHJ5IE9MIGdlb21ldHJ5IHdpdGggdG9vbHRpcHNcbiAgICovXG4gIHByaXZhdGUgY2xlYXJUb29sdGlwc09mT2xHZW9tZXRyeShvbEdlb21ldHJ5OiBPbExpbmVTdHJpbmcgfCBPbFBvbHlnb24pIHtcbiAgICBnZXRUb29sdGlwc09mT2xHZW9tZXRyeShvbEdlb21ldHJ5KS5mb3JFYWNoKChvbFRvb2x0aXA6IE9sT3ZlcmxheSB8IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgaWYgKG9sVG9vbHRpcCAhPT0gdW5kZWZpbmVkICYmIG9sVG9vbHRpcC5nZXRNYXAoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWFwLm9sLnJlbW92ZU92ZXJsYXkob2xUb29sdGlwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBtYXAgdG9vbHRpcHMgb2YgYWxsIHRoZSBnZW9tZXRyaWVzIG9mIGEgc291cmNlXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBzT2ZPbFNvdXJjZShvbFNvdXJjZTogT2xWZWN0b3JTb3VyY2U8T2xHZW9tZXRyeT4pIHtcbiAgICBvbFNvdXJjZS5mb3JFYWNoRmVhdHVyZSgob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pID0+IHtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcHNPZk9sR2VvbWV0cnkob2xGZWF0dXJlLmdldEdlb21ldHJ5KCkgYXMgYW55KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBtYXAgdG9vbHRpcHMgb2YgYWxsIHRoZSBnZW9tZXRyaWVzIG9mIGEgc291cmNlXG4gICAqL1xuICBwcml2YXRlIHNob3dUb29sdGlwc09mT2xTb3VyY2Uob2xTb3VyY2U6IE9sVmVjdG9yU291cmNlPE9sR2VvbWV0cnk+KSB7XG4gICAgb2xTb3VyY2UuZm9yRWFjaEZlYXR1cmUoKG9sRmVhdHVyZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+KSA9PiB7XG4gICAgICB0aGlzLnNob3dUb29sdGlwc09mT2xHZW9tZXRyeShvbEZlYXR1cmUuZ2V0R2VvbWV0cnkoKSBhcyBhbnkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBtYXAgdG9vbHRpcHNcbiAgICogQHBhcmFtIG9sRHJhd1NvdXJjZSBPTCB2ZWN0b3Igc291cmNlXG4gICAqL1xuICBwcml2YXRlIGNsZWFyVG9vbHRpcHNPZk9sU291cmNlKG9sU291cmNlOiBPbFZlY3RvclNvdXJjZTxPbEdlb21ldHJ5Pikge1xuICAgIG9sU291cmNlLmZvckVhY2hGZWF0dXJlKChvbEZlYXR1cmU6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PikgPT4ge1xuICAgICAgY29uc3Qgb2xHZW9tZXRyeSA9IG9sRmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgICAgaWYgKG9sR2VvbWV0cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNsZWFyVG9vbHRpcHNPZk9sR2VvbWV0cnkob2xGZWF0dXJlLmdldEdlb21ldHJ5KCkgYXMgYW55KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYW4gT0wgdG9vbHRpcCBwcm9wZXJ0aWVzIGFuZCBpbm5lciBIVE1MIGFuZCBhZGQgaXQgdG8gdGhlIG1hcCBpZiBwb3NzaWJsZVxuICAgKiBAcGFyYW0gb2xUb29sdGlwIE9MIHRvb2x0aXBcbiAgICogQHBhcmFtIG1lYXN1cmUgVGhlIG1lYXN1cmUgdmFsZXUgdGkgZGlzcGxheVxuICAgKiBAcGFyYW0gbWVhc3VyZVVuaXQgRGlzcGxheSB0b29sdGlwIG1lYXN1cmUgaW4gdGhvc2UgdW5pdHNcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlT2xUb29sdGlwKFxuICAgIG9sVG9vbHRpcDogT2xPdmVybGF5LFxuICAgIG1lYXN1cmU6IG51bWJlcixcbiAgICB1bml0OiBNZWFzdXJlQXJlYVVuaXQgfCBNZWFzdXJlTGVuZ3RoVW5pdCxcbiAgICB0eXBlOiBNZWFzdXJlVHlwZVxuICApIHtcbiAgICBvbFRvb2x0aXAuc2V0UHJvcGVydGllcyh7X21lYXN1cmU6IG1lYXN1cmUsIF91bml0OiB1bml0LCBfdHlwZTogdHlwZX0sIHRydWUpO1xuICAgIG9sVG9vbHRpcC5nZXRFbGVtZW50KCkuaW5uZXJIVE1MID0gdGhpcy5jb21wdXRlVG9vbHRpcElubmVySFRNTChvbFRvb2x0aXApO1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dUb29sdGlwKG9sVG9vbHRpcCkpIHtcbiAgICAgIHRoaXMubWFwLm9sLmFkZE92ZXJsYXkob2xUb29sdGlwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZSBhIHRvb2x0aXAncyBjb250ZW50XG4gICAqIEBwYXJhbSBvbFRvb2x0aXAgT0wgb3ZlcmxheVxuICAgKiBAcmV0dXJucyBJbm5lciBIVE1MXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVUb29sdGlwSW5uZXJIVE1MKG9sVG9vbHRpcDogT2xPdmVybGF5KTogc3RyaW5nIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gb2xUb29sdGlwLmdldFByb3BlcnRpZXMoKSBhcyBhbnk7XG4gICAgcmV0dXJuIGZvcm1hdE1lYXN1cmUocHJvcGVydGllcy5fbWVhc3VyZSwge1xuICAgICAgZGVjaW1hbDogMSxcbiAgICAgIHVuaXQ6IHByb3BlcnRpZXMuX3VuaXQsXG4gICAgICB1bml0QWJicjogdHJ1ZSxcbiAgICAgIGxvY2FsZTogJ2ZyJ1xuICAgIH0sIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGEgdG9vbHRpcCBzaG91bGQgYmUgc2hvd25lZCBiYXNlZCBvbiB0aGUgbGVuZ3RoXG4gICAqIG9mIHRoZSBzZWdtZW50IGl0IGlzIGJvdW5kIHRvLlxuICAgKiBAcGFyYW0gb2xUb29sdGlwIE9MIG92ZXJsYXlcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdG9vbHRpcCBzaG91bGQgYmUgc2hvd25cbiAgICovXG4gIHByaXZhdGUgc2hvdWxkU2hvd1Rvb2x0aXAob2xUb29sdGlwOiBPbE92ZXJsYXkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zaG93VG9vbHRpcHMgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcGVydGllcyA9IG9sVG9vbHRpcC5nZXRQcm9wZXJ0aWVzKCkgYXMgYW55O1xuICAgIGNvbnN0IG1lYXN1cmUgPSBwcm9wZXJ0aWVzLl9tZWFzdXJlO1xuICAgIGlmIChtZWFzdXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydGllcy5fdW5pdCA9PT0gTWVhc3VyZVR5cGUuTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtaW5TZWdtZW50TGVuZ3RoID0gbWV0ZXJzVG9Vbml0KHRoaXMubWluU2VnbWVudExlbmd0aCwgcHJvcGVydGllcy5fdW5pdCkgfHwgMDtcbiAgICAgIHJldHVybiBtZWFzdXJlID4gTWF0aC5tYXgobWluU2VnbWVudExlbmd0aCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDxkaXYgY2xhc3M9XCJtZWFzdXJlLXR5cGUtdG9nZ2xlIG1hdC10eXBvZ3JhcGh5XCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwXG4gICAgICBbdmFsdWVdPVwiYWN0aXZlTWVhc3VyZVR5cGVcIlxuICAgICAgKGNoYW5nZSk9XCJvbk1lYXN1cmVUeXBlQ2hhbmdlKCRldmVudC52YWx1ZSlcIj5cbiAgICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSBbdmFsdWVdPVwibWVhc3VyZVR5cGUuTGVuZ3RoXCI+XG4gICAgICAgIHt7KCdpZ28uZ2VvLm1lYXN1cmUuJyArIG1lYXN1cmVUeXBlLkxlbmd0aCkgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSBbdmFsdWVdPVwibWVhc3VyZVR5cGUuQXJlYVwiPlxuICAgICAgICB7eygnaWdvLmdlby5tZWFzdXJlLicgKyBtZWFzdXJlVHlwZS5BcmVhKSB8IHRyYW5zbGF0ZX19XG4gICAgICA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJtZWFzdXJlLW9wdGlvbnMgbWF0LXR5cG9ncmFwaHlcIj5cbiAgICA8bWF0LXNsaWRlLXRvZ2dsZVxuICAgICAgW2Rpc2FibGVkXT1cImRyYXdDb250cm9sSXNEaXNhYmxlZFwiXG4gICAgICBbY2hlY2tlZF09XCJkcmF3Q29udHJvbElzQWN0aXZlXCJcbiAgICAgIFtsYWJlbFBvc2l0aW9uXT1cIidiZWZvcmUnXCJcbiAgICAgIChjaGFuZ2UpPVwib25Ub2dnbGVEcmF3Q29udHJvbCgkZXZlbnQuY2hlY2tlZClcIj5cbiAgICAgIHt7J2lnby5nZW8ubWVhc3VyZS50b2dnbGVBY3RpdmUnIHwgdHJhbnNsYXRlfX1cbiAgICA8L21hdC1zbGlkZS10b2dnbGU+XG5cbiAgICA8bWF0LWRpdmlkZXIgKm5nSWY9XCIoaGFzTGluZSQgfCBhc3luYylcIj48L21hdC1kaXZpZGVyPlxuXG4gICAgPG1hdC1zbGlkZS10b2dnbGUgKm5nSWY9XCIoaGFzTGluZSQgfCBhc3luYylcIlxuICAgICAgW2NoZWNrZWRdPVwiZGlzcGxheUxpbmVzXCJcbiAgICAgIFtsYWJlbFBvc2l0aW9uXT1cIidiZWZvcmUnXCJcbiAgICAgIChjaGFuZ2UpPVwib25Ub2dnbGVEaXNwbGF5TGluZXMoJGV2ZW50LmNoZWNrZWQpXCI+XG4gICAgICB7eydpZ28uZ2VvLm1lYXN1cmUudG9nZ2xlRGlzcGxheUxpbmVzJyB8IHRyYW5zbGF0ZX19XG4gICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuXG4gICAgPG1hdC1kaXZpZGVyICpuZ0lmPVwiKGhhc0xpbmUkIHwgYXN5bmMpIHx8IChoYXNBcmVhJCB8IGFzeW5jKVwiPjwvbWF0LWRpdmlkZXI+XG5cbiAgICA8bWF0LXNsaWRlLXRvZ2dsZSAqbmdJZj1cIihoYXNBcmVhJCB8IGFzeW5jKVwiXG4gICAgICBbY2hlY2tlZF09XCJkaXNwbGF5RGlzdGFuY2VcIlxuICAgICAgW2xhYmVsUG9zaXRpb25dPVwiJ2JlZm9yZSdcIlxuICAgICAgKGNoYW5nZSk9XCJvblRvZ2dsZURpc3BsYXlEaXN0YW5jZSgkZXZlbnQuY2hlY2tlZClcIj5cbiAgICAgIHt7J2lnby5nZW8ubWVhc3VyZS50b2dnbGVEaXNwbGF5RGlzdGFuY2UnIHwgdHJhbnNsYXRlfX1cbiAgICA8L21hdC1zbGlkZS10b2dnbGU+XG5cbiAgICA8bWF0LXNsaWRlLXRvZ2dsZSAqbmdJZj1cIihoYXNBcmVhJCB8IGFzeW5jKVwiXG4gICAgICBbY2hlY2tlZF09XCJkaXNwbGF5QXJlYXNcIlxuICAgICAgW2xhYmVsUG9zaXRpb25dPVwiJ2JlZm9yZSdcIlxuICAgICAgKGNoYW5nZSk9XCJvblRvZ2dsZURpc3BsYXlBcmVhcygkZXZlbnQuY2hlY2tlZClcIj5cbiAgICAgIHt7J2lnby5nZW8ubWVhc3VyZS50b2dnbGVEaXNwbGF5QXJlYXMnIHwgdHJhbnNsYXRlfX1cbiAgICA8L21hdC1zbGlkZS10b2dnbGU+XG5cbiAgICA8bWF0LWRpdmlkZXIgKm5nSWY9XCIoaGFzQXJlYSQgfCBhc3luYylcIj48L21hdC1kaXZpZGVyPlxuXG4gICAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICAgIFtjaGVja2VkXT1cIm1lYXN1cmVVbml0c0F1dG9cIlxuICAgICAgW2xhYmVsUG9zaXRpb25dPVwiJ2JlZm9yZSdcIlxuICAgICAgKGNoYW5nZSk9XCJvblRvZ2dsZU1lYXN1cmVVbml0c0F1dG8oJGV2ZW50LmNoZWNrZWQpXCI+XG4gICAgICB7eydpZ28uZ2VvLm1lYXN1cmUudG9nZ2xlQXV0b1VuaXRzJyB8IHRyYW5zbGF0ZX19XG4gICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICA8L2Rpdj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibWVhc3VyZSQgfCBhc3luYyBhcyBtZWFzdXJlXCI+XG4gICAgPGlnby1tZWFzdXJlci1pdGVtICpuZ0lmPVwiYWN0aXZlTWVhc3VyZVR5cGUgPT09IG1lYXN1cmVUeXBlLkxlbmd0aCB8fCBhY3RpdmVNZWFzdXJlVHlwZSA9PT0gbWVhc3VyZVR5cGUuQXJlYVwiXG4gICAgICBbbWVhc3VyZVR5cGVdPVwibWVhc3VyZVR5cGUuTGVuZ3RoXCJcbiAgICAgIFttZWFzdXJlVW5pdF09XCJtZWFzdXJlTGVuZ3RoVW5pdC5NZXRlcnNcIlxuICAgICAgW21lYXN1cmVdPVwibWVhc3VyZS5sZW5ndGhcIlxuICAgICAgW2F1dG9dPVwibWVhc3VyZVVuaXRzQXV0b1wiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiKGFjdGl2ZU1lYXN1cmVUeXBlID09PSBtZWFzdXJlVHlwZS5BcmVhID8gJ2lnby5nZW8ubWVhc3VyZS5wZXJpbWV0ZXInIDogJ2lnby5nZW8ubWVhc3VyZS5sZW5ndGgnKSB8IHRyYW5zbGF0ZVwiXG4gICAgICAobWVhc3VyZVVuaXRDaGFuZ2UpPVwib25MZW5ndGhVbml0Q2hhbmdlKCRldmVudClcIj5cbiAgICA8L2lnby1tZWFzdXJlci1pdGVtPlxuXG4gICAgPGlnby1tZWFzdXJlci1pdGVtICpuZ0lmPVwiYWN0aXZlTWVhc3VyZVR5cGUgPT09IG1lYXN1cmVUeXBlLkFyZWFcIlxuICAgICAgW21lYXN1cmVUeXBlXT1cIm1lYXN1cmVUeXBlLkFyZWFcIlxuICAgICAgW21lYXN1cmVVbml0XT1cIm1lYXN1cmVBcmVhVW5pdC5TcXVhcmVNZXRlcnNcIlxuICAgICAgW21lYXN1cmVdPVwibWVhc3VyZS5hcmVhXCJcbiAgICAgIFthdXRvXT1cIm1lYXN1cmVVbml0c0F1dG9cIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cIidpZ28uZ2VvLm1lYXN1cmUuYXJlYScgfCB0cmFuc2xhdGVcIlxuICAgICAgKG1lYXN1cmVVbml0Q2hhbmdlKT1cIm9uQXJlYVVuaXRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvaWdvLW1lYXN1cmVyLWl0ZW0+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxtYXQtZGl2aWRlciAqbmdJZj1cIihoYXNMaW5lJCB8IGFzeW5jKSB8fCAoaGFzQXJlYSQgfCBhc3luYylcIj48L21hdC1kaXZpZGVyPlxuXG4gIDxkaXYgY2xhc3M9XCJtZWFzdXJlLXN0b3JlLWJ1dHRvbnNcIj5cbiAgICA8YnV0dG9uICpuZ0lmPVwiKGhhc0xpbmUkIHwgYXN5bmMpIHx8IChoYXNBcmVhJCB8IGFzeW5jKVwiXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLm1lYXN1cmUuYWN0aW9uYmFyLmNhbGN1bGF0ZS50b29sdGlwJyB8IHRyYW5zbGF0ZVwiXG4gICAgICBbZGlzYWJsZWRdPVwiKHNlbGVjdGVkRmVhdHVyZXMkIHwgYXN5bmMpLmxlbmd0aCA9PT0gMFwiXG4gICAgICBjb2xvcj1cImFjY2VudFwiXG4gICAgICAoY2xpY2spPVwib25DYWxjdWxhdGVDbGljaygpXCI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImNhbGN1bGF0b3JcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiAqbmdJZj1cIihoYXNMaW5lJCB8IGFzeW5jKSB8fCAoaGFzQXJlYSQgfCBhc3luYylcIlxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5tZWFzdXJlLmFjdGlvbmJhci5kZWxldGUudG9vbHRpcCcgfCB0cmFuc2xhdGVcIlxuICAgICAgW2Rpc2FibGVkXT1cIihzZWxlY3RlZEZlYXR1cmVzJCB8IGFzeW5jKS5sZW5ndGggPT09IDBcIlxuICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgIChjbGljayk9XCJvbkRlbGV0ZUNsaWNrKClcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiZGVsZXRlXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDwhLS1idXR0b25cbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8ubWVhc3VyZS5hY3Rpb25iYXIubW9kaWZ5LnRvb2x0aXAnIHwgdHJhbnNsYXRlXCJcbiAgICAgIFtkaXNhYmxlZF09XCIoc2VsZWN0ZWRGZWF0dXJlcyQgfCBhc3luYykubGVuZ3RoICE9PSAxXCJcbiAgICAgIChjbGljayk9XCJvbk1vZGlmeUNsaWNrKClcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiZWRpdFwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24tLT5cbiAgPC9kaXY+XG5cbiAgPGlnby1lbnRpdHktdGFibGVcbiAgICAjdGFibGVcbiAgICBjbGFzcz1cInRhYmxlLWNvbXBhY3RcIlxuICAgIFtzdG9yZV09XCJzdG9yZVwiXG4gICAgW3RlbXBsYXRlXT1cInRhYmxlVGVtcGxhdGVcIj5cbiAgPC9pZ28tZW50aXR5LXRhYmxlPlxuPC9kaXY+XG4iXX0=