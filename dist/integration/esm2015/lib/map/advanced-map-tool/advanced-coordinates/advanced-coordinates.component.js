import { Component, Input } from '@angular/core';
import { formatScale } from '@igo2/geo';
import { Clipboard } from '@igo2/utils';
import { StorageScope } from '@igo2/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { zoneMtm, zoneUtm, computeProjectionsConstraints } from '@igo2/geo';
import * as olproj from 'ol/proj';
import * as i0 from "@angular/core";
import * as i1 from "../../map.state";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/select";
import * as i9 from "@angular/material/slide-toggle";
import * as i10 from "@angular/material/input";
import * as i11 from "@angular/material/core";
import * as i12 from "@ngx-translate/core";
function AdvancedCoordinatesComponent_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 12);
    i0.ɵɵelement(1, "textarea", 13, 14);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.lon"))("value", ctx_r0.coordinates[0]);
} }
function AdvancedCoordinatesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 12);
    i0.ɵɵelement(1, "textarea", 13, 14);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.est"))("value", ctx_r2.coordinates[0]);
} }
function AdvancedCoordinatesComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 15);
    i0.ɵɵelement(1, "textarea", 13, 14);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.lat"))("value", ctx_r3.coordinates[1]);
} }
function AdvancedCoordinatesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 15);
    i0.ɵɵelement(1, "textarea", 13, 14);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.nord"))("value", ctx_r5.coordinates[1]);
} }
function AdvancedCoordinatesComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 16);
    i0.ɵɵlistener("click", function AdvancedCoordinatesComponent_mat_option_16_Template_mat_option_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", projection_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", projection_r11.translatedValue || projection_r11.alias, " ");
} }
/**
 * Tool to display the coordinates and a cursor of the center of the map
 */
export class AdvancedCoordinatesComponent {
    constructor(mapState, languageService, messageService, cdRef, storageService, config, formBuilder) {
        this.mapState = mapState;
        this.languageService = languageService;
        this.messageService = messageService;
        this.cdRef = cdRef;
        this.storageService = storageService;
        this.config = config;
        this.formBuilder = formBuilder;
        this.formattedScale$ = new BehaviorSubject('');
        this.projections$ = new BehaviorSubject([]);
        this.center = this.storageService.get('centerToggle');
        this.inMtmZone = true;
        this.inLambert2 = { 32198: true, 3798: true };
        this._projectionsLimitations = {};
        this.defaultProj = {
            translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.wgs84', { code: 'EPSG:4326' }),
            translateKey: 'wgs84', alias: 'WGS84', code: 'EPSG:4326', zone: ''
        };
        this.currentZones = { utm: undefined, mtm: undefined };
        this.units = true;
        this.computeProjections();
        this.buildForm();
    }
    get map() {
        return this.mapState.map;
    }
    get inputProj() {
        return this.form.get('inputProj').value;
    }
    set inputProj(value) {
        this.form.patchValue({ inputProj: value });
    }
    get projectionsLimitations() {
        return this._projectionsLimitations || {};
    }
    set projectionsLimitations(value) {
        this._projectionsLimitations = value;
    }
    /**
     * Listen a state of the map, a state of a form, update the coordinates
     */
    ngOnInit() {
        this.mapState$$ = combineLatest([this.map.viewController.state$.pipe(debounceTime(50)), this.form.valueChanges])
            .subscribe(() => {
            this.setScaleValue(this.map);
            this.currentCenterDefaultProj = this.map.viewController.getCenter(this.defaultProj.code);
            const currentMtmZone = zoneMtm(this.currentCenterDefaultProj[0]);
            const currentUtmZone = zoneUtm(this.currentCenterDefaultProj[0]);
            if (!this.inMtmZone && currentMtmZone !== this.currentZones.mtm) {
                this.back2quebec();
            }
            let zoneChange = false;
            if (currentMtmZone !== this.currentZones.mtm) {
                this.currentZones.mtm = currentMtmZone;
                zoneChange = true;
            }
            if (currentUtmZone !== this.currentZones.utm) {
                this.currentZones.utm = currentUtmZone;
                zoneChange = true;
            }
            if (zoneChange) {
                this.updateProjectionsZoneChange();
            }
            this.checkLambert(this.currentCenterDefaultProj);
            this.coordinates = this.getCoordinates();
            this.cdRef.detectChanges();
            this.storageService.set('currentProjection', this.inputProj, StorageScope.SESSION);
        });
        const tempInputProj = this.storageService.get('currentProjection');
        this.inputProj = this.projections$.value[0];
        if (tempInputProj !== null) {
            const pos = this.positionInList(tempInputProj);
            this.inputProj = this.projections$.value[pos];
            this.updateZoneMtmUtm();
        }
        this.map.mapCenter$.next(this.center);
        this.coordinates = this.getCoordinates();
        this.currentCenterDefaultProj = this.map.viewController.getCenter(this.defaultProj.code);
    }
    ngOnDestroy() {
        this.map.mapCenter$.next(false);
        this.mapState$$.unsubscribe();
    }
    setScaleValue(map) {
        this.formattedScale$.next(': ~ 1 / ' + formatScale(map.viewController.getScale()));
    }
    /**
     * Coordinates of the center of the map on the appropriate systeme of coordinates
     * @returns Array of two numbers
     */
    getCoordinates() {
        this.currentZones.mtm = zoneMtm(this.currentCenterDefaultProj[0]);
        this.currentZones.utm = zoneUtm(this.currentCenterDefaultProj[0]);
        let coord;
        const code = this.inputProj.code;
        let decimal = 2;
        if (code.includes('EPSG:4326') || code.includes('EPSG:4269')) {
            decimal = 5;
        }
        this.units = (code === 'EPSG:4326' || code === 'EPSG:4269');
        coord = this.map.viewController.getCenter(code).map(c => c.toFixed(decimal));
        return coord;
    }
    /**
     * Copy the coordinates to a clipboard
     */
    copyTextToClipboard() {
        const successful = Clipboard.copy(this.coordinates.toString());
        if (successful) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.integration.advanced-map-tool.advanced-coordinates.copyTitle');
            const msg = translate.instant('igo.integration.advanced-map-tool.advanced-coordinates.copyMsg');
            this.messageService.success(msg, title);
        }
    }
    /**
     * Display a cursor on the center of the map
     */
    displayCenter(toggle) {
        this.center = toggle;
        this.map.mapCenter$.next(toggle);
        this.storageService.set('centerToggle', toggle, StorageScope.SESSION);
    }
    /**
     * Builder of the form
     */
    buildForm() {
        this.form = this.formBuilder.group({
            inputProj: ['', [Validators.required]]
        });
    }
    /**
     * Update list of projections after changing of the state of the map
     */
    updateProjectionsZoneChange() {
        let modifiedProj = this.projections$.value;
        const translate = this.languageService.translate;
        modifiedProj.map(p => {
            if (p.translateKey === 'mtm') {
                const zone = zoneMtm(this.currentCenterDefaultProj[0]);
                if (zone) {
                    const code = zone < 10 ? `EPSG:3218${zone}` : `EPSG:321${80 + zone}`;
                    p.alias = `MTM ${zone}`;
                    p.code = code;
                    p.zone = `${zone}`;
                    p.translatedValue = translate.instant('igo.geo.importExportForm.projections.mtm', p);
                }
                else {
                    p.alias = '';
                    this.inMtmZone = false;
                    if (this.inputProj.translateKey === 'mtm') {
                        this.inputProj = this.projections$.value[0];
                    }
                }
            }
            if (p.translateKey === 'utm') {
                const zone = zoneUtm(this.currentCenterDefaultProj[0]);
                const code = `EPSG:326${zone}`;
                p.alias = `UTM ${zone}`;
                p.code = code;
                p.zone = `${zone}`;
                p.translatedValue = translate.instant('igo.geo.importExportForm.projections.utm', p);
            }
        });
        modifiedProj = modifiedProj.filter(p => p.alias !== '');
        this.projections$.next(modifiedProj);
    }
    /**
     * Create a list of currents projections
     */
    computeProjections() {
        this.projectionsConstraints = computeProjectionsConstraints(this.projectionsLimitations);
        const projections = [];
        if (!this.currentCenterDefaultProj) {
            this.currentCenterDefaultProj = this.map.viewController.getCenter(this.defaultProj.code);
        }
        const translate = this.languageService.translate;
        if (this.projectionsConstraints.wgs84) {
            projections.push({
                translatedValue: translate.instant('igo.geo.importExportForm.projections.wgs84', { code: 'EPSG:4326' }),
                translateKey: 'wgs84', alias: 'WGS84', code: 'EPSG:4326', zone: ''
            });
        }
        if (this.projectionsConstraints.nad83) {
            projections.push({
                translatedValue: translate.instant('igo.geo.importExportForm.projections.nad83', { code: 'EPSG:4269' }),
                translateKey: 'nad83', alias: 'NAD83', code: 'EPSG:4269', zone: ''
            });
        }
        if (this.projectionsConstraints.webMercator) {
            projections.push({
                translatedValue: translate.instant('igo.geo.importExportForm.projections.webMercator', { code: 'EPSG:3857' }),
                translateKey: 'webMercator', alias: 'Web Mercator', code: 'EPSG:3857', zone: ''
            });
        }
        if (this.projectionsConstraints.mtm) {
            // Quebec
            const zone = zoneMtm(this.currentCenterDefaultProj[0]);
            if (zone) {
                this.inMtmZone = true;
                const code = zone < 10 ? `EPSG:3218${zone}` : `EPSG:321${80 + zone}`;
                projections.splice(3, 0, {
                    translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.mtm', { code, zone }),
                    translateKey: 'mtm', alias: `MTM ${zone}`, code, zone: `${zone}`
                });
            }
            else {
                this.inMtmZone = false;
            }
        }
        if (this.projectionsConstraints.utm) {
            const order = this.inMtmZone ? 4 : 3;
            const zone = zoneUtm(this.currentCenterDefaultProj[0]);
            const code = zone < 10 ? `EPSG:3260${zone}` : `EPSG:326${zone}`;
            projections.splice(order, 0, {
                translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.utm', { code, zone }),
                translateKey: 'utm', alias: `UTM ${zone}`, code, zone: `${zone}`
            });
        }
        let configProjection = [];
        if (this.projectionsConstraints.projFromConfig) {
            configProjection = this.config.getConfig('projections') || [];
        }
        this.projections$.next(projections.concat(configProjection));
    }
    /**
     * Push the MTM in the array of systeme of coordinates
     * @param projections Array of the InputProjections
     */
    pushMtm(projections) {
        if (this.projectionsConstraints.mtm) {
            const zone = zoneMtm(this.currentCenterDefaultProj[0]);
            const code = zone < 10 ? `EPSG:3218${zone}` : `EPSG:321${80 + zone}`;
            projections.splice(3, 0, {
                translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.mtm', { code, zone }),
                translateKey: 'mtm', alias: `MTM ${zone}`, code, zone: `${zone}`
            });
        }
    }
    /**
     * Updates the list of systems of coordinates for territory of Quebec
     * push MTM and UTM in the Array
     */
    back2quebec() {
        const projections = this.projections$.value;
        this.pushMtm(projections);
        this.inMtmZone = true;
    }
    /**
     * Update the numbers of the zones when application is restarted
     */
    updateZoneMtmUtm() {
        if (this.inputProj.translateKey === 'mtm') {
            const zone = zoneMtm(this.currentCenterDefaultProj[0]);
            this.inputProj.alias = `MTM ${zone}`;
            const code = zone < 10 ? `EPSG:3218${zone}` : `EPSG:321${80 + zone}`;
            this.inputProj.code = code;
            this.inputProj.zone = `${zone}`;
            this.inputProj.translatedValue = this.languageService.translate.instant('igo.geo.importExportForm.projections.mtm', { code, zone });
        }
        if (this.inputProj.translateKey === 'utm') {
            const zone = zoneUtm(this.currentCenterDefaultProj[0]);
            this.inputProj.alias = `UTM ${zone}`;
            const code = zone < 10 ? `EPSG:3260${zone}` : `EPSG:326${zone}`;
            this.inputProj.code = code;
            this.inputProj.zone = `${zone}`;
            this.inputProj.translatedValue = this.languageService.translate.instant('igo.geo.importExportForm.projections.utm', { code, zone });
        }
    }
    /**
     * Compute the position of a current projection in a list. 0 if the projection is not in the list
     * @param translateKey string, translate key of a projection
     * @returns numeric, position of an element in the array
     */
    positionInList(tempInputProj) {
        const tk = tempInputProj.translateKey;
        const alias = tempInputProj.alias;
        let position; // = undefined;
        let iter = 0;
        this.projections$.value.map((projection) => {
            if (tk) {
                if (tk === projection.translateKey) {
                    position = iter;
                }
            }
            else if (alias === projection.alias) {
                position = iter;
            }
            iter++;
        });
        position = position ? position : 0;
        return position;
    }
    /**
     * Change the list of projections depending on the projections of Lambert
     * @param coordinates An array of numbers, longitude and latitude
     */
    checkLambert(coordinates) {
        const lambertProjections = this.config.getConfig('projections');
        lambertProjections.forEach(projection => {
            let modifiedProj = this.projections$.value;
            const extent = projection.extent;
            const code = projection.code.match(/\d+/);
            const currentExtentWGS = olproj.transformExtent(extent, projection.code, this.defaultProj.code);
            if (coordinates[0] < currentExtentWGS[0] || coordinates[0] > currentExtentWGS[2] ||
                coordinates[1] < currentExtentWGS[1] || coordinates[1] > currentExtentWGS[3]) {
                this.inLambert2[code] = false;
                if (this.inputProj.alias === projection.alias) {
                    this.inputProj = this.projections$.value[0];
                }
                modifiedProj = modifiedProj.filter(p => p.alias !== projection.alias);
                this.projections$.next(modifiedProj);
            }
            else {
                if (!this.inLambert2[code]) {
                    this.projections$.next(modifiedProj.concat(projection));
                    this.inLambert2[code] = true;
                }
            }
        });
    }
}
AdvancedCoordinatesComponent.ɵfac = function AdvancedCoordinatesComponent_Factory(t) { return new (t || AdvancedCoordinatesComponent)(i0.ɵɵdirectiveInject(i1.MapState), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i2.MessageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.StorageService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i3.FormBuilder)); };
AdvancedCoordinatesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdvancedCoordinatesComponent, selectors: [["igo-advanced-coordinates"]], inputs: { projectionsLimitations: "projectionsLimitations" }, decls: 32, vars: 37, consts: [["class", "coordinates", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["class", "coordinates2", 4, "ngIf", "ngIfElse"], ["elseBlock2", ""], ["mat-raised-button", "", 1, "igo-form-button-group", 3, "click"], ["svgIcon", "content-copy"], [1, "igo-form", 3, "formGroup"], [1, "igo-input-container"], [3, "value", "valueChange"], ["matTooltipShowDelay", "500", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "center-toggle", "mat-typography", 3, "checked", "labelPosition", "change"], [1, "igo-zoom", "mat-typography"], [1, "coordinates"], ["matInput", "", "readonly", "", "rows", "1", 3, "placeholder", "value"], ["textArea", ""], [1, "coordinates2"], ["matTooltipShowDelay", "500", 3, "value", "click"]], template: function AdvancedCoordinatesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AdvancedCoordinatesComponent_mat_form_field_0_Template, 4, 4, "mat-form-field", 0);
        i0.ɵɵtemplate(1, AdvancedCoordinatesComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, AdvancedCoordinatesComponent_mat_form_field_3_Template, 4, 4, "mat-form-field", 2);
        i0.ɵɵtemplate(4, AdvancedCoordinatesComponent_ng_template_4_Template, 4, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function AdvancedCoordinatesComponent_Template_button_click_6_listener() { return ctx.copyTextToClipboard(); });
        i0.ɵɵelement(7, "mat-icon", 5);
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "form", 6);
        i0.ɵɵelementStart(11, "mat-form-field", 7);
        i0.ɵɵelementStart(12, "mat-label");
        i0.ɵɵtext(13);
        i0.ɵɵpipe(14, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-select", 8);
        i0.ɵɵlistener("valueChange", function AdvancedCoordinatesComponent_Template_mat_select_valueChange_15_listener($event) { return ctx.inputProj = $event; });
        i0.ɵɵtemplate(16, AdvancedCoordinatesComponent_mat_option_16_Template, 2, 2, "mat-option", 9);
        i0.ɵɵpipe(17, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-slide-toggle", 10);
        i0.ɵɵlistener("change", function AdvancedCoordinatesComponent_Template_mat_slide_toggle_change_18_listener($event) { return ctx.displayCenter($event.checked); });
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "p", 11);
        i0.ɵɵtext(22);
        i0.ɵɵpipe(23, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "p", 11);
        i0.ɵɵtext(25);
        i0.ɵɵpipe(26, "translate");
        i0.ɵɵpipe(27, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "p", 11);
        i0.ɵɵtext(29);
        i0.ɵɵpipe(30, "translate");
        i0.ɵɵpipe(31, "number");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r4 = i0.ɵɵreference(5);
        i0.ɵɵproperty("ngIf", ctx.units)("ngIfElse", _r1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.units)("ngIfElse", _r4);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 18, "igo.integration.advanced-map-tool.advanced-coordinates.copy"), "\n");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 20, "igo.integration.advanced-map-tool.advanced-coordinates.coordSystem"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.inputProj);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(17, 22, ctx.projections$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx.center)("labelPosition", "before");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 24, "igo.integration.advanced-map-tool.advanced-coordinates.center"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(23, 26, "igo.integration.advanced-map-tool.advanced-coordinates.zoom"), " ", ctx.map.viewController.getZoom(), "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(26, 28, "igo.integration.advanced-map-tool.advanced-coordinates.scale"), " ", i0.ɵɵpipeBind1(27, 30, ctx.formattedScale$), "");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(30, 32, "igo.integration.advanced-map-tool.advanced-coordinates.resolution"), " ", i0.ɵɵpipeBind2(31, 34, ctx.map.viewController.getResolution(), "1.0-0"), "");
    } }, directives: [i4.NgIf, i5.MatButton, i6.MatIcon, i3.ɵNgNoValidate, i3.NgControlStatusGroup, i3.FormGroupDirective, i7.MatFormField, i7.MatLabel, i8.MatSelect, i4.NgForOf, i9.MatSlideToggle, i10.MatInput, i11.MatOption], pipes: [i12.TranslatePipe, i4.AsyncPipe, i4.DecimalPipe], styles: ["textarea[_ngcontent-%COMP%]{resize:none}mat-form-field[_ngcontent-%COMP%]{padding:10px 15px}mat-form-field.coordinates[_ngcontent-%COMP%]{width:120px}mat-form-field.coordinates2[_ngcontent-%COMP%]{width:120px;padding:0 10px 0 3px}mat-form-field.igo-input-container[_ngcontent-%COMP%]{width:60%;padding:0 15px}.igo-form-button-group[_ngcontent-%COMP%]{padding:0 10px;margin:0 10px}.center-toggle[_ngcontent-%COMP%]{padding:10px 15px 35px}mat-slide-toggle[_ngcontent-%COMP%]{font-size:small}.igo-zoom[_ngcontent-%COMP%]{padding:0 15px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdvancedCoordinatesComponent, [{
        type: Component,
        args: [{
                selector: 'igo-advanced-coordinates',
                templateUrl: './advanced-coordinates.component.html',
                styleUrls: ['./advanced-coordinates.component.scss']
            }]
    }], function () { return [{ type: i1.MapState }, { type: i2.LanguageService }, { type: i2.MessageService }, { type: i0.ChangeDetectorRef }, { type: i2.StorageService }, { type: i2.ConfigService }, { type: i3.FormBuilder }]; }, { projectionsLimitations: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtY29vcmRpbmF0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvYWR2YW5jZWQtbWFwLXRvb2wvYWR2YW5jZWQtY29vcmRpbmF0ZXMvYWR2YW5jZWQtY29vcmRpbmF0ZXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvYWR2YW5jZWQtbWFwLXRvb2wvYWR2YW5jZWQtY29vcmRpbmF0ZXMvYWR2YW5jZWQtY29vcmRpbmF0ZXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsV0FBVyxFQUEyRCxNQUFNLFdBQVcsQ0FBQztBQUVqRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBbUQsWUFBWSxFQUFpQixNQUFNLFlBQVksQ0FBQztBQUMxRyxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEUsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUUsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ1RsQywwQ0FBa0U7SUFDOUQsbUNBRXNDOztJQUMxQyxpQkFBaUI7OztJQUZYLGVBQXdGO0lBQXhGLGdIQUF3RixnQ0FBQTs7O0lBSTVGLDBDQUFvQztJQUNsQyxtQ0FFa0M7O0lB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LHlHQUFTLHlCQUFxQixJQUFDO1FBQy9CLDhCQUE0QztRQUM1QyxZQUNKOztRQUFBLGlCQUFTO1FBRVQsZ0NBQTBDO1FBQ3hDLDBDQUE0QztRQUMxQyxrQ0FBVztRQUFBLGFBQW9GOztRQUFBLGlCQUFZO1FBQzNHLHNDQUFrQztRQUF0QiwwSkFBcUI7UUFDL0IsNkZBS2E7O1FBQ2YsaUJBQWE7UUFDZixpQkFBaUI7UUFDakIsNkNBRzJDO1FBQXpDLDRIQUFVLGlDQUE2QixJQUFDO1FBQ3hDLGFBQ0Y7O1FBQUEsaUJBQW1CO1FBQ3JCLGlCQUFPO1FBRVAsOEJBQW1DO1FBQUEsYUFBK0c7O1FBQUEsaUJBQUk7UUFDdEosOEJBQW1DO1FBQUEsYUFBNEc7OztRQUFBLGlCQUFJO1FBQ25KLDhCQUFtQztRQUFBLGFBQTZJOzs7UUFBQSxpQkFBSTs7OztRQXBEbkssZ0NBQWEsaUJBQUE7UUFZYixlQUFhO1FBQWIsZ0NBQWEsaUJBQUE7UUFlMUIsZUFDSjtRQURJLHNIQUNKO1FBRXVCLGVBQWtCO1FBQWxCLG9DQUFrQjtRQUUxQixlQUFvRjtRQUFwRixrSEFBb0Y7UUFDbkYsZUFBcUI7UUFBckIscUNBQXFCO1FBRU4sZUFBeUI7UUFBekIsa0VBQXlCO1FBUXBELGVBQWtCO1FBQWxCLG9DQUFrQiwyQkFBQTtRQUdsQixlQUNGO1FBREUsd0hBQ0Y7UUFHaUMsZUFBK0c7UUFBL0csMkpBQStHO1FBQy9HLGVBQTRHO1FBQTVHLHVLQUE0RztRQUM1RyxlQUE2STtRQUE3SSx3TUFBNkk7O3VGRGxDbkssNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNyRDt5T0FrQ0ssc0JBQXNCO2tCQUR6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmb3JtYXRTY2FsZSwgSWdvTWFwLCBJbnB1dFByb2plY3Rpb25zLCBQcm9qZWN0aW9uc0xpbWl0YXRpb25zT3B0aW9ucyB9IGZyb20gJ0BpZ28yL2dlbyc7XG5pbXBvcnQgeyBNYXBTdGF0ZSB9IGZyb20gJy4uLy4uL21hcC5zdGF0ZSc7XG5pbXBvcnQgeyBDbGlwYm9hcmQgfSBmcm9tICdAaWdvMi91dGlscyc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSwgU3RvcmFnZVNjb3BlLCBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHpvbmVNdG0sIHpvbmVVdG0sIGNvbXB1dGVQcm9qZWN0aW9uc0NvbnN0cmFpbnRzIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCAqIGFzIG9scHJvaiBmcm9tICdvbC9wcm9qJztcbi8qKlxuICogVG9vbCB0byBkaXNwbGF5IHRoZSBjb29yZGluYXRlcyBhbmQgYSBjdXJzb3Igb2YgdGhlIGNlbnRlciBvZiB0aGUgbWFwXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1hZHZhbmNlZC1jb29yZGluYXRlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1jb29yZGluYXRlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkdmFuY2VkLWNvb3JkaW5hdGVzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRDb29yZGluYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGZvcm1hdHRlZFNjYWxlJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgcHVibGljIHByb2plY3Rpb25zJDogQmVoYXZpb3JTdWJqZWN0PElucHV0UHJvamVjdGlvbnNbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGNvb3JkaW5hdGVzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBjdXJyZW50Q2VudGVyRGVmYXVsdFByb2o6IFtudW1iZXIsIG51bWJlcl07XG4gIHB1YmxpYyBjZW50ZXI6IGJvb2xlYW4gPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnY2VudGVyVG9nZ2xlJykgYXMgYm9vbGVhbjtcbiAgcHJpdmF0ZSBpbk10bVpvbmU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIGluTGFtYmVydDIgPSB7MzIxOTg6IHRydWUsIDM3OTg6IHRydWV9O1xuICBwcml2YXRlIG1hcFN0YXRlJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcHJvamVjdGlvbnNMaW1pdGF0aW9uczogUHJvamVjdGlvbnNMaW1pdGF0aW9uc09wdGlvbnMgPSB7fTtcbiAgcHJpdmF0ZSBwcm9qZWN0aW9uc0NvbnN0cmFpbnRzOiBQcm9qZWN0aW9uc0xpbWl0YXRpb25zT3B0aW9ucztcbiAgcHJpdmF0ZSBkZWZhdWx0UHJvajogSW5wdXRQcm9qZWN0aW9ucyA9IHtcbiAgICB0cmFuc2xhdGVkVmFsdWU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0ucHJvamVjdGlvbnMud2dzODQnLCB7IGNvZGU6ICdFUFNHOjQzMjYnIH0pLFxuICAgIHRyYW5zbGF0ZUtleTogJ3dnczg0JywgYWxpYXM6ICdXR1M4NCcsIGNvZGU6ICdFUFNHOjQzMjYnLCB6b25lOiAnJ1xuICB9O1xuICBwcml2YXRlIGN1cnJlbnRab25lcyA9IHsgdXRtOiB1bmRlZmluZWQsIG10bTogdW5kZWZpbmVkIH07XG4gIHB1YmxpYyB1bml0czogYm9vbGVhbiA9IHRydWU7XG4gIGdldCBtYXAoKTogSWdvTWFwIHtcbiAgICByZXR1cm4gdGhpcy5tYXBTdGF0ZS5tYXA7XG4gIH1cblxuICBnZXQgaW5wdXRQcm9qKCk6IElucHV0UHJvamVjdGlvbnMge1xuICAgIHJldHVybiB0aGlzLmZvcm0uZ2V0KCdpbnB1dFByb2onKS52YWx1ZTtcbiAgfVxuICBzZXQgaW5wdXRQcm9qKHZhbHVlOiBJbnB1dFByb2plY3Rpb25zKSB7XG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBpbnB1dFByb2o6IHZhbHVlIH0pO1xuICB9XG4gIGdldCBwcm9qZWN0aW9uc0xpbWl0YXRpb25zKCk6IFByb2plY3Rpb25zTGltaXRhdGlvbnNPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdGlvbnNMaW1pdGF0aW9ucyB8fCB7fTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwcm9qZWN0aW9uc0xpbWl0YXRpb25zKHZhbHVlOiBQcm9qZWN0aW9uc0xpbWl0YXRpb25zT3B0aW9ucykge1xuICAgIHRoaXMuX3Byb2plY3Rpb25zTGltaXRhdGlvbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtYXBTdGF0ZTogTWFwU3RhdGUsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgdGhpcy5jb21wdXRlUHJvamVjdGlvbnMoKTtcbiAgICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gYSBzdGF0ZSBvZiB0aGUgbWFwLCBhIHN0YXRlIG9mIGEgZm9ybSwgdXBkYXRlIHRoZSBjb29yZGluYXRlc1xuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXBTdGF0ZSQkID0gY29tYmluZUxhdGVzdChbdGhpcy5tYXAudmlld0NvbnRyb2xsZXIuc3RhdGUkLnBpcGUoZGVib3VuY2VUaW1lKDUwKSksIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXNdKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U2NhbGVWYWx1ZSh0aGlzLm1hcCk7XG4gICAgICB0aGlzLmN1cnJlbnRDZW50ZXJEZWZhdWx0UHJvaiA9IHRoaXMubWFwLnZpZXdDb250cm9sbGVyLmdldENlbnRlcih0aGlzLmRlZmF1bHRQcm9qLmNvZGUpO1xuICAgICAgY29uc3QgY3VycmVudE10bVpvbmUgPSB6b25lTXRtKHRoaXMuY3VycmVudENlbnRlckRlZmF1bHRQcm9qWzBdKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRVdG1ab25lID0gem9uZVV0bSh0aGlzLmN1cnJlbnRDZW50ZXJEZWZhdWx0UHJvalswXSk7XG4gICAgICBpZiAoIXRoaXMuaW5NdG1ab25lICYmIGN1cnJlbnRNdG1ab25lICE9PSB0aGlzLmN1cnJlbnRab25lcy5tdG0pIHtcbiAgICAgICAgdGhpcy5iYWNrMnF1ZWJlYygpO1xuICAgICAgfVxuICAgICAgbGV0IHpvbmVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgIGlmIChjdXJyZW50TXRtWm9uZSAhPT0gdGhpcy5jdXJyZW50Wm9uZXMubXRtKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFpvbmVzLm10bSA9IGN1cnJlbnRNdG1ab25lO1xuICAgICAgICB6b25lQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50VXRtWm9uZSAhPT0gdGhpcy5jdXJyZW50Wm9uZXMudXRtKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFpvbmVzLnV0bSA9IGN1cnJlbnRVdG1ab25lO1xuICAgICAgICB6b25lQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh6b25lQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbnNab25lQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrTGFtYmVydCh0aGlzLmN1cnJlbnRDZW50ZXJEZWZhdWx0UHJvaik7XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzID0gdGhpcy5nZXRDb29yZGluYXRlcygpO1xuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgnY3VycmVudFByb2plY3Rpb24nLCB0aGlzLmlucHV0UHJvaiwgU3RvcmFnZVNjb3BlLlNFU1NJT04pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGVtcElucHV0UHJvaiA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCdjdXJyZW50UHJvamVjdGlvbicpIGFzIElucHV0UHJvamVjdGlvbnM7XG4gICAgdGhpcy5pbnB1dFByb2ogPSB0aGlzLnByb2plY3Rpb25zJC52YWx1ZVswXTtcbiAgICBpZiAodGVtcElucHV0UHJvaiAhPT0gbnVsbClcbiAgICB7XG4gICAgICBjb25zdCBwb3MgPSB0aGlzLnBvc2l0aW9uSW5MaXN0KHRlbXBJbnB1dFByb2opO1xuICAgICAgdGhpcy5pbnB1dFByb2ogPSB0aGlzLnByb2plY3Rpb25zJC52YWx1ZVtwb3NdO1xuICAgICAgdGhpcy51cGRhdGVab25lTXRtVXRtKCk7XG4gICAgfVxuICAgIHRoaXMubWFwLm1hcENlbnRlciQubmV4dCh0aGlzLmNlbnRlcik7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICB0aGlzLmN1cnJlbnRDZW50ZXJEZWZhdWx0UHJvaiA9IHRoaXMubWFwLnZpZXdDb250cm9sbGVyLmdldENlbnRlcih0aGlzLmRlZmF1bHRQcm9qLmNvZGUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwQ2VudGVyJC5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLm1hcFN0YXRlJCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHNldFNjYWxlVmFsdWUobWFwOiBJZ29NYXApIHtcbiAgICB0aGlzLmZvcm1hdHRlZFNjYWxlJC5uZXh0KCc6IH4gMSAvICcgKyBmb3JtYXRTY2FsZShtYXAudmlld0NvbnRyb2xsZXIuZ2V0U2NhbGUoKSkpO1xuICB9XG4gIC8qKlxuICAgKiBDb29yZGluYXRlcyBvZiB0aGUgY2VudGVyIG9mIHRoZSBtYXAgb24gdGhlIGFwcHJvcHJpYXRlIHN5c3RlbWUgb2YgY29vcmRpbmF0ZXNcbiAgICogQHJldHVybnMgQXJyYXkgb2YgdHdvIG51bWJlcnNcbiAgICovXG4gIGdldENvb3JkaW5hdGVzKCk6IHN0cmluZ1tdIHtcbiAgICB0aGlzLmN1cnJlbnRab25lcy5tdG0gPSB6b25lTXRtKHRoaXMuY3VycmVudENlbnRlckRlZmF1bHRQcm9qWzBdKTtcbiAgICB0aGlzLmN1cnJlbnRab25lcy51dG0gPSB6b25lVXRtKHRoaXMuY3VycmVudENlbnRlckRlZmF1bHRQcm9qWzBdKTtcbiAgICBsZXQgY29vcmQ7XG4gICAgY29uc3QgY29kZSA9IHRoaXMuaW5wdXRQcm9qLmNvZGU7XG4gICAgbGV0IGRlY2ltYWwgPSAyO1xuICAgIGlmIChjb2RlLmluY2x1ZGVzKCdFUFNHOjQzMjYnKSB8fCBjb2RlLmluY2x1ZGVzKCdFUFNHOjQyNjknKSkge1xuICAgICAgZGVjaW1hbCA9IDU7XG4gICAgfVxuICAgIHRoaXMudW5pdHMgPSAoY29kZSA9PT0gJ0VQU0c6NDMyNicgfHwgY29kZSA9PT0gJ0VQU0c6NDI2OScpO1xuICAgIGNvb3JkID0gdGhpcy5tYXAudmlld0NvbnRyb2xsZXIuZ2V0Q2VudGVyKGNvZGUpLm1hcChjID0+IGMudG9GaXhlZChkZWNpbWFsKSk7XG4gICAgcmV0dXJuIGNvb3JkO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgdGhlIGNvb3JkaW5hdGVzIHRvIGEgY2xpcGJvYXJkXG4gICAqL1xuICBjb3B5VGV4dFRvQ2xpcGJvYXJkKCk6IHZvaWQge1xuICAgIGNvbnN0IHN1Y2Nlc3NmdWwgPSBDbGlwYm9hcmQuY29weSh0aGlzLmNvb3JkaW5hdGVzLnRvU3RyaW5nKCkpO1xuICAgIGlmIChzdWNjZXNzZnVsKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgICBjb25zdCB0aXRsZSA9IHRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnaWdvLmludGVncmF0aW9uLmFkdmFuY2VkLW1hcC10b29sLmFkdmFuY2VkLWNvb3JkaW5hdGVzLmNvcHlUaXRsZSdcbiAgICAgICk7XG4gICAgICBjb25zdCBtc2cgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmludGVncmF0aW9uLmFkdmFuY2VkLW1hcC10b29sLmFkdmFuY2VkLWNvb3JkaW5hdGVzLmNvcHlNc2cnKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2Vzcyhtc2csIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheSBhIGN1cnNvciBvbiB0aGUgY2VudGVyIG9mIHRoZSBtYXBcbiAgICovXG4gIGRpc3BsYXlDZW50ZXIodG9nZ2xlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jZW50ZXIgPSB0b2dnbGU7XG4gICAgdGhpcy5tYXAubWFwQ2VudGVyJC5uZXh0KHRvZ2dsZSk7XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ2NlbnRlclRvZ2dsZScsIHRvZ2dsZSwgU3RvcmFnZVNjb3BlLlNFU1NJT04pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkZXIgb2YgdGhlIGZvcm1cbiAgICovXG4gIHByaXZhdGUgYnVpbGRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgaW5wdXRQcm9qOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgbGlzdCBvZiBwcm9qZWN0aW9ucyBhZnRlciBjaGFuZ2luZyBvZiB0aGUgc3RhdGUgb2YgdGhlIG1hcFxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVQcm9qZWN0aW9uc1pvbmVDaGFuZ2UoKTogdm9pZCB7XG4gICAgbGV0IG1vZGlmaWVkUHJvaiA9IHRoaXMucHJvamVjdGlvbnMkLnZhbHVlO1xuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgICBtb2RpZmllZFByb2oubWFwKHAgPT4ge1xuICAgICAgaWYgKHAudHJhbnNsYXRlS2V5ID09PSAnbXRtJykge1xuICAgICAgICBjb25zdCB6b25lID0gem9uZU10bSh0aGlzLmN1cnJlbnRDZW50ZXJEZWZhdWx0UHJvalswXSk7XG4gICAgICAgIGlmICh6b25lKSB7XG4gICAgICAgICAgY29uc3QgY29kZSA9IHpvbmUgPCAxMCA/IGBFUFNHOjMyMTgke3pvbmV9YCA6IGBFUFNHOjMyMSR7ODAgKyB6b25lfWA7XG4gICAgICAgICAgcC5hbGlhcyA9IGBNVE0gJHt6b25lfWA7XG4gICAgICAgICAgcC5jb2RlID0gY29kZTtcbiAgICAgICAgICBwLnpvbmUgPSBgJHt6b25lfWA7XG4gICAgICAgICAgcC50cmFuc2xhdGVkVmFsdWUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5pbXBvcnRFeHBvcnRGb3JtLnByb2plY3Rpb25zLm10bScsIHApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHAuYWxpYXMgPSAnJztcbiAgICAgICAgICB0aGlzLmluTXRtWm9uZSA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLmlucHV0UHJvai50cmFuc2xhdGVLZXkgPT09ICdtdG0nKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0UHJvaiA9IHRoaXMucHJvamVjdGlvbnMkLnZhbHVlWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHAudHJhbnNsYXRlS2V5ID09PSAndXRtJykge1xuICAgICAgICBjb25zdCB6b25lID0gem9uZVV0bSh0aGlzLmN1cnJlbnRDZW50ZXJEZWZhdWx0UHJvalswXSk7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBgRVBTRzozMjYke3pvbmV9YDtcbiAgICAgICAgcC5hbGlhcyA9IGBVVE0gJHt6b25lfWA7XG4gICAgICAgIHAuY29kZSA9IGNvZGU7XG4gICAgICAgIHAuem9uZSA9IGAke3pvbmV9YDtcbiAgICAgICAgcC50cmFuc2xhdGVkVmFsdWUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5pbXBvcnRFeHBvcnRGb3JtLnByb2plY3Rpb25zLnV0bScsIHApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGlmaWVkUHJvaiA9IG1vZGlmaWVkUHJvai5maWx0ZXIocCA9PiBwLmFsaWFzICE9PSAnJyk7XG4gICAgdGhpcy5wcm9qZWN0aW9ucyQubmV4dChtb2RpZmllZFByb2opO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpc3Qgb2YgY3VycmVudHMgcHJvamVjdGlvbnNcbiAgICovXG4gIHByaXZhdGUgY29tcHV0ZVByb2plY3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdGlvbnNDb25zdHJhaW50cyA9IGNvbXB1dGVQcm9qZWN0aW9uc0NvbnN0cmFpbnRzKHRoaXMucHJvamVjdGlvbnNMaW1pdGF0aW9ucyk7XG4gICAgY29uc3QgcHJvamVjdGlvbnM6IElucHV0UHJvamVjdGlvbnNbXSA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRDZW50ZXJEZWZhdWx0UHJvaikge1xuICAgICAgdGhpcy5jdXJyZW50Q2VudGVyRGVmYXVsdFByb2ogPSB0aGlzLm1hcC52aWV3Q29udHJvbGxlci5nZXRDZW50ZXIodGhpcy5kZWZhdWx0UHJvai5jb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgaWYgKHRoaXMucHJvamVjdGlvbnNDb25zdHJhaW50cy53Z3M4NCkge1xuICAgICAgcHJvamVjdGlvbnMucHVzaCh7XG4gICAgICAgIHRyYW5zbGF0ZWRWYWx1ZTogdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5wcm9qZWN0aW9ucy53Z3M4NCcsIHsgY29kZTogJ0VQU0c6NDMyNicgfSksXG4gICAgICAgIHRyYW5zbGF0ZUtleTogJ3dnczg0JywgYWxpYXM6ICdXR1M4NCcsIGNvZGU6ICdFUFNHOjQzMjYnLCB6b25lOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvamVjdGlvbnNDb25zdHJhaW50cy5uYWQ4Mykge1xuICAgICAgcHJvamVjdGlvbnMucHVzaCh7XG4gICAgICAgIHRyYW5zbGF0ZWRWYWx1ZTogdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5wcm9qZWN0aW9ucy5uYWQ4MycsIHsgY29kZTogJ0VQU0c6NDI2OScgfSksXG4gICAgICAgIHRyYW5zbGF0ZUtleTogJ25hZDgzJywgYWxpYXM6ICdOQUQ4MycsIGNvZGU6ICdFUFNHOjQyNjknLCB6b25lOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvamVjdGlvbnNDb25zdHJhaW50cy53ZWJNZXJjYXRvcikge1xuICAgICAgcHJvamVjdGlvbnMucHVzaCh7XG4gICAgICAgIHRyYW5zbGF0ZWRWYWx1ZTogdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5wcm9qZWN0aW9ucy53ZWJNZXJjYXRvcicsIHsgY29kZTogJ0VQU0c6Mzg1NycgfSksXG4gICAgICAgIHRyYW5zbGF0ZUtleTogJ3dlYk1lcmNhdG9yJywgYWxpYXM6ICdXZWIgTWVyY2F0b3InLCBjb2RlOiAnRVBTRzozODU3Jywgem9uZTogJydcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9qZWN0aW9uc0NvbnN0cmFpbnRzLm10bSkge1xuICAgICAgLy8gUXVlYmVjXG4gICAgICBjb25zdCB6b25lID0gem9uZU10bSh0aGlzLmN1cnJlbnRDZW50ZXJEZWZhdWx0UHJvalswXSk7XG4gICAgICBpZiAoem9uZSkge1xuICAgICAgICB0aGlzLmluTXRtWm9uZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGNvZGUgPSB6b25lIDwgMTAgPyBgRVBTRzozMjE4JHt6b25lfWAgOiBgRVBTRzozMjEkezgwICsgem9uZX1gO1xuICAgICAgICBwcm9qZWN0aW9ucy5zcGxpY2UoMywgMCwge1xuICAgICAgICAgIHRyYW5zbGF0ZWRWYWx1ZTogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5wcm9qZWN0aW9ucy5tdG0nLCB7IGNvZGUsIHpvbmUgfSksXG4gICAgICAgICAgdHJhbnNsYXRlS2V5OiAnbXRtJywgYWxpYXM6IGBNVE0gJHt6b25lfWAsIGNvZGUsIHpvbmU6IGAke3pvbmV9YFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmluTXRtWm9uZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9qZWN0aW9uc0NvbnN0cmFpbnRzLnV0bSkge1xuICAgICAgY29uc3Qgb3JkZXIgPSB0aGlzLmluTXRtWm9uZSA/IDQgOiAzO1xuICAgICAgY29uc3Qgem9uZSA9IHpvbmVVdG0odGhpcy5jdXJyZW50Q2VudGVyRGVmYXVsdFByb2pbMF0pO1xuICAgICAgY29uc3QgY29kZSA9IHpvbmUgPCAxMCA/IGBFUFNHOjMyNjAke3pvbmV9YCA6IGBFUFNHOjMyNiR7em9uZX1gO1xuICAgICAgcHJvamVjdGlvbnMuc3BsaWNlKG9yZGVyLCAwLCB7XG4gICAgICAgIHRyYW5zbGF0ZWRWYWx1ZTogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5wcm9qZWN0aW9ucy51dG0nLCB7IGNvZGUsIHpvbmUgfSksXG4gICAgICAgIHRyYW5zbGF0ZUtleTogJ3V0bScsIGFsaWFzOiBgVVRNICR7em9uZX1gLCBjb2RlLCB6b25lOiBgJHt6b25lfWBcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgY29uZmlnUHJvamVjdGlvbiA9IFtdO1xuICAgIGlmICh0aGlzLnByb2plY3Rpb25zQ29uc3RyYWludHMucHJvakZyb21Db25maWcpIHtcbiAgICAgIGNvbmZpZ1Byb2plY3Rpb24gPSB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ3Byb2plY3Rpb25zJykgfHwgW107XG4gICAgfVxuICAgIHRoaXMucHJvamVjdGlvbnMkLm5leHQocHJvamVjdGlvbnMuY29uY2F0KGNvbmZpZ1Byb2plY3Rpb24pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIHRoZSBNVE0gaW4gdGhlIGFycmF5IG9mIHN5c3RlbWUgb2YgY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtIHByb2plY3Rpb25zIEFycmF5IG9mIHRoZSBJbnB1dFByb2plY3Rpb25zXG4gICAqL1xuICBwcml2YXRlIHB1c2hNdG0ocHJvamVjdGlvbnM6IEFycmF5PElucHV0UHJvamVjdGlvbnM+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvamVjdGlvbnNDb25zdHJhaW50cy5tdG0pIHtcbiAgICAgIGNvbnN0IHpvbmUgPSB6b25lTXRtKHRoaXMuY3VycmVudENlbnRlckRlZmF1bHRQcm9qWzBdKTtcbiAgICAgIGNvbnN0IGNvZGUgPSB6b25lIDwgMTAgPyBgRVBTRzozMjE4JHt6b25lfWAgOiBgRVBTRzozMjEkezgwICsgem9uZX1gO1xuICAgICAgcHJvamVjdGlvbnMuc3BsaWNlKDMsIDAsIHtcbiAgICAgICAgICB0cmFuc2xhdGVkVmFsdWU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0ucHJvamVjdGlvbnMubXRtJywgeyBjb2RlLCB6b25lIH0pLFxuICAgICAgICAgIHRyYW5zbGF0ZUtleTogJ210bScsIGFsaWFzOiBgTVRNICR7em9uZX1gLCBjb2RlLCB6b25lOiBgJHt6b25lfWB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbGlzdCBvZiBzeXN0ZW1zIG9mIGNvb3JkaW5hdGVzIGZvciB0ZXJyaXRvcnkgb2YgUXVlYmVjXG4gICAqIHB1c2ggTVRNIGFuZCBVVE0gaW4gdGhlIEFycmF5XG4gICAqL1xuICBwcml2YXRlIGJhY2sycXVlYmVjKCk6IHZvaWQge1xuICAgIGNvbnN0IHByb2plY3Rpb25zID0gdGhpcy5wcm9qZWN0aW9ucyQudmFsdWU7XG4gICAgdGhpcy5wdXNoTXRtKHByb2plY3Rpb25zKTtcbiAgICB0aGlzLmluTXRtWm9uZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBudW1iZXJzIG9mIHRoZSB6b25lcyB3aGVuIGFwcGxpY2F0aW9uIGlzIHJlc3RhcnRlZFxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVab25lTXRtVXRtKCkge1xuICAgIGlmICh0aGlzLmlucHV0UHJvai50cmFuc2xhdGVLZXkgPT09ICdtdG0nKSB7XG4gICAgICBjb25zdCB6b25lID0gem9uZU10bSh0aGlzLmN1cnJlbnRDZW50ZXJEZWZhdWx0UHJvalswXSk7XG4gICAgICB0aGlzLmlucHV0UHJvai5hbGlhcyA9IGBNVE0gJHt6b25lfWA7XG4gICAgICBjb25zdCBjb2RlID0gem9uZSA8IDEwID8gYEVQU0c6MzIxOCR7em9uZX1gIDogYEVQU0c6MzIxJHs4MCArIHpvbmV9YDtcbiAgICAgIHRoaXMuaW5wdXRQcm9qLmNvZGUgPSBjb2RlO1xuICAgICAgdGhpcy5pbnB1dFByb2ouem9uZSA9IGAke3pvbmV9YDtcbiAgICAgIHRoaXMuaW5wdXRQcm9qLnRyYW5zbGF0ZWRWYWx1ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmltcG9ydEV4cG9ydEZvcm0ucHJvamVjdGlvbnMubXRtJywgeyBjb2RlLCB6b25lIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dFByb2oudHJhbnNsYXRlS2V5ID09PSAndXRtJykge1xuICAgICAgY29uc3Qgem9uZSA9IHpvbmVVdG0odGhpcy5jdXJyZW50Q2VudGVyRGVmYXVsdFByb2pbMF0pO1xuICAgICAgdGhpcy5pbnB1dFByb2ouYWxpYXMgPSBgVVRNICR7em9uZX1gO1xuICAgICAgY29uc3QgY29kZSA9IHpvbmUgPCAxMCA/IGBFUFNHOjMyNjAke3pvbmV9YCA6IGBFUFNHOjMyNiR7em9uZX1gO1xuICAgICAgdGhpcy5pbnB1dFByb2ouY29kZSA9IGNvZGU7XG4gICAgICB0aGlzLmlucHV0UHJvai56b25lID0gYCR7em9uZX1gO1xuICAgICAgdGhpcy5pbnB1dFByb2oudHJhbnNsYXRlZFZhbHVlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uaW1wb3J0RXhwb3J0Rm9ybS5wcm9qZWN0aW9ucy51dG0nLCB7IGNvZGUsIHpvbmUgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGUgdGhlIHBvc2l0aW9uIG9mIGEgY3VycmVudCBwcm9qZWN0aW9uIGluIGEgbGlzdC4gMCBpZiB0aGUgcHJvamVjdGlvbiBpcyBub3QgaW4gdGhlIGxpc3RcbiAgICogQHBhcmFtIHRyYW5zbGF0ZUtleSBzdHJpbmcsIHRyYW5zbGF0ZSBrZXkgb2YgYSBwcm9qZWN0aW9uXG4gICAqIEByZXR1cm5zIG51bWVyaWMsIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgaW4gdGhlIGFycmF5XG4gICAqL1xuICBwb3NpdGlvbkluTGlzdCh0ZW1wSW5wdXRQcm9qOiBJbnB1dFByb2plY3Rpb25zKTogbnVtYmVyIHtcbiAgICBjb25zdCB0ayA9IHRlbXBJbnB1dFByb2oudHJhbnNsYXRlS2V5O1xuICAgIGNvbnN0IGFsaWFzID0gdGVtcElucHV0UHJvai5hbGlhcztcbiAgICBsZXQgcG9zaXRpb247IC8vID0gdW5kZWZpbmVkO1xuICAgIGxldCBpdGVyID0gMDtcbiAgICB0aGlzLnByb2plY3Rpb25zJC52YWx1ZS5tYXAoKHByb2plY3Rpb24pID0+IHtcbiAgICAgIGlmICh0aykge1xuICAgICAgICBpZiAodGsgPT09IHByb2plY3Rpb24udHJhbnNsYXRlS2V5KSB7XG4gICAgICAgICAgcG9zaXRpb24gPSBpdGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhbGlhcyA9PT0gcHJvamVjdGlvbi5hbGlhcykge1xuICAgICAgICBwb3NpdGlvbiA9IGl0ZXI7XG4gICAgICB9XG4gICAgICBpdGVyKys7XG4gICAgfSk7XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbiA/IHBvc2l0aW9uIDogMDtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBsaXN0IG9mIHByb2plY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgcHJvamVjdGlvbnMgb2YgTGFtYmVydFxuICAgKiBAcGFyYW0gY29vcmRpbmF0ZXMgQW4gYXJyYXkgb2YgbnVtYmVycywgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZVxuICAgKi9cbiAgY2hlY2tMYW1iZXJ0KGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdKSB7XG4gICAgY29uc3QgbGFtYmVydFByb2plY3Rpb25zID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdwcm9qZWN0aW9ucycpO1xuICAgIGxhbWJlcnRQcm9qZWN0aW9ucy5mb3JFYWNoKHByb2plY3Rpb24gPT4ge1xuICAgICAgICBsZXQgbW9kaWZpZWRQcm9qID0gdGhpcy5wcm9qZWN0aW9ucyQudmFsdWU7XG4gICAgICAgIGNvbnN0IGV4dGVudCA9IHByb2plY3Rpb24uZXh0ZW50O1xuICAgICAgICBjb25zdCBjb2RlID0gcHJvamVjdGlvbi5jb2RlLm1hdGNoKC9cXGQrLyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRFeHRlbnRXR1MgPSBvbHByb2oudHJhbnNmb3JtRXh0ZW50KGV4dGVudCwgcHJvamVjdGlvbi5jb2RlLCB0aGlzLmRlZmF1bHRQcm9qLmNvZGUpO1xuICAgICAgICBpZiAoY29vcmRpbmF0ZXNbMF0gPCBjdXJyZW50RXh0ZW50V0dTWzBdIHx8IGNvb3JkaW5hdGVzWzBdID4gY3VycmVudEV4dGVudFdHU1syXSB8fFxuICAgICAgICAgICAgY29vcmRpbmF0ZXNbMV0gPCBjdXJyZW50RXh0ZW50V0dTWzFdIHx8IGNvb3JkaW5hdGVzWzFdID4gY3VycmVudEV4dGVudFdHU1szXSkge1xuICAgICAgICAgICAgdGhpcy5pbkxhbWJlcnQyW2NvZGVdID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dFByb2ouYWxpYXMgPT09IHByb2plY3Rpb24uYWxpYXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dFByb2ogPSB0aGlzLnByb2plY3Rpb25zJC52YWx1ZVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGlmaWVkUHJvaiA9IG1vZGlmaWVkUHJvai5maWx0ZXIocCA9PiBwLmFsaWFzICE9PSBwcm9qZWN0aW9uLmFsaWFzKTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdGlvbnMkLm5leHQobW9kaWZpZWRQcm9qKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbkxhbWJlcnQyW2NvZGVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9ucyQubmV4dChtb2RpZmllZFByb2ouY29uY2F0KHByb2plY3Rpb24pKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluTGFtYmVydDJbY29kZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCAqbmdJZj1cInVuaXRzOyBlbHNlIGVsc2VCbG9ja1wiIGNsYXNzPVwiY29vcmRpbmF0ZXNcIj5cbiAgICA8dGV4dGFyZWEgICN0ZXh0QXJlYSBtYXRJbnB1dCByZWFkb25seSByb3dzPVwiMVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiJ2lnby5pbnRlZ3JhdGlvbi5hZHZhbmNlZC1tYXAtdG9vbC5hZHZhbmNlZC1jb29yZGluYXRlcy5sb24nIHwgdHJhbnNsYXRlXCJcbiAgICAgIFt2YWx1ZV09XCJjb29yZGluYXRlc1swXVwiPjwvdGV4dGFyZWE+XG48L21hdC1mb3JtLWZpZWxkPlxuPG5nLXRlbXBsYXRlICNlbHNlQmxvY2sgPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJjb29yZGluYXRlc1wiPlxuICAgIDx0ZXh0YXJlYSAjdGV4dEFyZWEgbWF0SW5wdXQgcmVhZG9ubHkgcm93cz1cIjFcIlxuICBbcGxhY2Vob2xkZXJdPVwiJ2lnby5pbnRlZ3JhdGlvbi5hZHZhbmNlZC1tYXAtdG9vbC5hZHZhbmNlZC1jb29yZGluYXRlcy5lc3QnIHwgdHJhbnNsYXRlXCJcbiAgW3ZhbHVlXT1cImNvb3JkaW5hdGVzWzBdXCI+PC90ZXh0YXJlYT48L21hdC1mb3JtLWZpZWxkPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwidW5pdHM7IGVsc2UgZWxzZUJsb2NrMlwiIGNsYXNzPVwiY29vcmRpbmF0ZXMyXCI+XG4gICAgPHRleHRhcmVhICN0ZXh0QXJlYSBtYXRJbnB1dCByZWFkb25seSByb3dzPVwiMVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiJ2lnby5pbnRlZ3JhdGlvbi5hZHZhbmNlZC1tYXAtdG9vbC5hZHZhbmNlZC1jb29yZGluYXRlcy5sYXQnIHwgdHJhbnNsYXRlXCJcbiAgICAgIFt2YWx1ZV09XCJjb29yZGluYXRlc1sxXVwiPjwvdGV4dGFyZWE+XG48L21hdC1mb3JtLWZpZWxkPlxuPG5nLXRlbXBsYXRlICNlbHNlQmxvY2syID5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiY29vcmRpbmF0ZXMyXCI+ICA8dGV4dGFyZWEgI3RleHRBcmVhIG1hdElucHV0IHJlYWRvbmx5IHJvd3M9XCIxXCJcbiAgW3BsYWNlaG9sZGVyXT1cIidpZ28uaW50ZWdyYXRpb24uYWR2YW5jZWQtbWFwLXRvb2wuYWR2YW5jZWQtY29vcmRpbmF0ZXMubm9yZCcgfCB0cmFuc2xhdGVcIlxuICBbdmFsdWVdPVwiY29vcmRpbmF0ZXNbMV1cIj48L3RleHRhcmVhPjwvbWF0LWZvcm0tZmllbGQ+XG48L25nLXRlbXBsYXRlPlxuXG48YnV0dG9uIGNsYXNzPVwiaWdvLWZvcm0tYnV0dG9uLWdyb3VwXCJcbiAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgIChjbGljayk9XCJjb3B5VGV4dFRvQ2xpcGJvYXJkKClcIj5cbiAgICA8bWF0LWljb24gc3ZnSWNvbj1cImNvbnRlbnQtY29weVwiPjwvbWF0LWljb24+XG4gICAge3sgJ2lnby5pbnRlZ3JhdGlvbi5hZHZhbmNlZC1tYXAtdG9vbC5hZHZhbmNlZC1jb29yZGluYXRlcy5jb3B5JyB8IHRyYW5zbGF0ZSB9fVxuPC9idXR0b24+XG5cbjxmb3JtIGNsYXNzPVwiaWdvLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiaWdvLWlucHV0LWNvbnRhaW5lclwiPlxuICAgIDxtYXQtbGFiZWw+e3snaWdvLmludGVncmF0aW9uLmFkdmFuY2VkLW1hcC10b29sLmFkdmFuY2VkLWNvb3JkaW5hdGVzLmNvb3JkU3lzdGVtJyB8IHRyYW5zbGF0ZX19PC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3QgWyh2YWx1ZSldPVwiaW5wdXRQcm9qXCI+XG4gICAgICA8bWF0LW9wdGlvbiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IHByb2plY3Rpb24gb2YgKHByb2plY3Rpb25zJCB8IGFzeW5jKVwiXG4gICAgICAgIFt2YWx1ZV09XCJwcm9qZWN0aW9uXCJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICB7e3Byb2plY3Rpb24udHJhbnNsYXRlZFZhbHVlIHx8IHByb2plY3Rpb24uYWxpYXMgfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtc2xpZGUtdG9nZ2xlIGNsYXNzPVwiY2VudGVyLXRvZ2dsZSBtYXQtdHlwb2dyYXBoeVwiXG4gICAgW2NoZWNrZWRdPVwiY2VudGVyXCJcbiAgICBbbGFiZWxQb3NpdGlvbl09XCInYmVmb3JlJ1wiXG4gICAgKGNoYW5nZSk9XCJkaXNwbGF5Q2VudGVyKCRldmVudC5jaGVja2VkKVwiPlxuICAgIHt7J2lnby5pbnRlZ3JhdGlvbi5hZHZhbmNlZC1tYXAtdG9vbC5hZHZhbmNlZC1jb29yZGluYXRlcy5jZW50ZXInIHwgdHJhbnNsYXRlfX1cbiAgPC9tYXQtc2xpZGUtdG9nZ2xlPiBcbjwvZm9ybT5cblxuPHAgY2xhc3M9XCJpZ28tem9vbSBtYXQtdHlwb2dyYXBoeVwiPnt7J2lnby5pbnRlZ3JhdGlvbi5hZHZhbmNlZC1tYXAtdG9vbC5hZHZhbmNlZC1jb29yZGluYXRlcy56b29tJyB8IHRyYW5zbGF0ZX19IHt7bWFwLnZpZXdDb250cm9sbGVyLmdldFpvb20oKSB9fTwvcD5cbjxwIGNsYXNzPVwiaWdvLXpvb20gbWF0LXR5cG9ncmFwaHlcIj57eydpZ28uaW50ZWdyYXRpb24uYWR2YW5jZWQtbWFwLXRvb2wuYWR2YW5jZWQtY29vcmRpbmF0ZXMuc2NhbGUnIHwgdHJhbnNsYXRlfX0ge3sgZm9ybWF0dGVkU2NhbGUkIHwgYXN5bmMgfX08L3A+XG48cCBjbGFzcz1cImlnby16b29tIG1hdC10eXBvZ3JhcGh5XCI+e3snaWdvLmludGVncmF0aW9uLmFkdmFuY2VkLW1hcC10b29sLmFkdmFuY2VkLWNvb3JkaW5hdGVzLnJlc29sdXRpb24nIHwgdHJhbnNsYXRlfX0ge3ttYXAudmlld0NvbnRyb2xsZXIuZ2V0UmVzb2x1dGlvbigpIHwgbnVtYmVyOiAnMS4wLTAnIH19PC9wPiJdfQ==