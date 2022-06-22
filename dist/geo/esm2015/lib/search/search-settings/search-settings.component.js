import { Component, Output, EventEmitter, ChangeDetectionStrategy, HostListener, Input } from '@angular/core';
import { sourceCanReverseSearchAsSummary, sourceCanSearch, sourceCanReverseSearch } from '../shared/search.utils';
import * as i0 from "@angular/core";
import * as i1 from "../shared/search-source.service";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/material/menu";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/checkbox";
import * as i9 from "@angular/material/radio";
import * as i10 from "@angular/material/divider";
import * as i11 from "@angular/material/slide-toggle";
import * as i12 from "@ngx-translate/core";
function SearchSettingsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵlistener("click", function SearchSettingsComponent_div_6_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.checkUncheckAllSources($event); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(!ctx_r1.searchSourcesAllEnabled ? i0.ɵɵpipeBind1(3, 1, "igo.geo.search.searchSources.unselectAll") : i0.ɵɵpipeBind1(4, 3, "igo.geo.search.searchSources.selectAll"));
} }
function SearchSettingsComponent_ng_container_7_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const source_r6 = i0.ɵɵnextContext().$implicit;
    const _r9 = i0.ɵɵreference(6);
    i0.ɵɵproperty("matMenuTriggerFor", _r9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", source_r6.title, " ");
} }
function SearchSettingsComponent_ng_container_7_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const source_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", source_r6.title, " ");
} }
function SearchSettingsComponent_ng_container_7_ng_container_7_span_6_mat_radio_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-radio-button", 22);
    i0.ɵɵlistener("click", function SearchSettingsComponent_ng_container_7_ng_container_7_span_6_mat_radio_button_2_Template_mat_radio_button_click_0_listener($event) { return $event.stopPropagation(); })("change", function SearchSettingsComponent_ng_container_7_ng_container_7_span_6_mat_radio_button_2_Template_mat_radio_button_change_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r22); const settingValue_r18 = restoredCtx.$implicit; const setting_r13 = i0.ɵɵnextContext(2).$implicit; const source_r6 = i0.ɵɵnextContext().$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.settingsValueCheckedRadioButton($event, source_r6, setting_r13, settingValue_r18); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const settingValue_r18 = ctx.$implicit;
    const ctx_r17 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("value", settingValue_r18)("matTooltip", ctx_r17.getAvailableHashtagsValues(settingValue_r18))("checked", settingValue_r18.enabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 4, settingValue_r18.title), " ");
} }
function SearchSettingsComponent_ng_container_7_ng_container_7_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "mat-radio-group", 20);
    i0.ɵɵtemplate(2, SearchSettingsComponent_ng_container_7_ng_container_7_span_6_mat_radio_button_2_Template, 3, 6, "mat-radio-button", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const setting_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", setting_r13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", setting_r13.values);
} }
function SearchSettingsComponent_ng_container_7_ng_container_7_span_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵlistener("click", function SearchSettingsComponent_ng_container_7_ng_container_7_span_7_div_1_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r29); const setting_r13 = i0.ɵɵnextContext(2).$implicit; const source_r6 = i0.ɵɵnextContext().$implicit; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.checkUncheckAll($event, source_r6, setting_r13); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const setting_r13 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(setting_r13.allEnabled || setting_r13.allEnabled === undefined ? i0.ɵɵpipeBind1(3, 1, "igo.geo.search.searchSources.settings.unselectAll") : i0.ɵɵpipeBind1(4, 3, "igo.geo.search.searchSources.settings.selectAll"));
} }
function SearchSettingsComponent_ng_container_7_ng_container_7_span_7_mat_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 24);
    i0.ɵɵlistener("click", function SearchSettingsComponent_ng_container_7_ng_container_7_span_7_mat_checkbox_2_Template_mat_checkbox_click_0_listener($event) { return $event.stopPropagation(); })("change", function SearchSettingsComponent_ng_container_7_ng_container_7_span_7_mat_checkbox_2_Template_mat_checkbox_change_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r36); const settingValue_r32 = restoredCtx.$implicit; const setting_r13 = i0.ɵɵnextContext(2).$implicit; const source_r6 = i0.ɵɵnextContext().$implicit; const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.settingsValueCheckedCheckbox($event, source_r6, setting_r13, settingValue_r32); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const settingValue_r32 = ctx.$implicit;
    const setting_r13 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("display", ctx_r26.displayBlock);
    i0.ɵɵproperty("checked", settingValue_r32.enabled)("value", setting_r13)("matTooltip", ctx_r26.getAvailableHashtagsValues(settingValue_r32));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 6, settingValue_r32.title), " ");
} }
function SearchSettingsComponent_ng_container_7_ng_container_7_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, SearchSettingsComponent_ng_container_7_ng_container_7_span_7_div_1_Template, 5, 5, "div", 5);
    i0.ɵɵtemplate(2, SearchSettingsComponent_ng_container_7_ng_container_7_span_7_mat_checkbox_2_Template, 3, 8, "mat-checkbox", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const setting_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", setting_r13.values.length > 3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r16.getAvailableValues(setting_r13));
} }
function SearchSettingsComponent_ng_container_7_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 15);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", 17, 18);
    i0.ɵɵtemplate(6, SearchSettingsComponent_ng_container_7_ng_container_7_span_6_Template, 3, 2, "span", 19);
    i0.ɵɵtemplate(7, SearchSettingsComponent_ng_container_7_ng_container_7_span_7_Template, 3, 2, "span", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const setting_r13 = ctx.$implicit;
    const _r14 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r14);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "igo.geo.search.searchSources.settings." + setting_r13.title), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", setting_r13.type);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitchCase", "radiobutton");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
} }
function SearchSettingsComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵelementStart(2, "mat-checkbox", 11);
    i0.ɵɵlistener("click", function SearchSettingsComponent_ng_container_7_Template_mat_checkbox_click_2_listener($event) { return $event.stopPropagation(); })("change", function SearchSettingsComponent_ng_container_7_Template_mat_checkbox_change_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r42); const source_r6 = restoredCtx.$implicit; const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.onCheckSearchSource($event, source_r6); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SearchSettingsComponent_ng_container_7_button_3_Template, 2, 2, "button", 12);
    i0.ɵɵtemplate(4, SearchSettingsComponent_ng_container_7_button_4_Template, 2, 1, "button", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-menu", null, 14);
    i0.ɵɵtemplate(7, SearchSettingsComponent_ng_container_7_ng_container_7_Template, 8, 7, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const source_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", source_r6.enabled)("value", source_r6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", source_r6.settings.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", source_r6.settings.length === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", source_r6.settings);
} }
function SearchSettingsComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "mat-divider");
    i0.ɵɵelementStart(2, "span", 25);
    i0.ɵɵelementStart(3, "mat-slide-toggle", 26);
    i0.ɵɵlistener("change", function SearchSettingsComponent_span_8_Template_mat_slide_toggle_change_3_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(); return ctx_r43.changePointerReverseSearch($event); })("click", function SearchSettingsComponent_span_8_Template_mat_slide_toggle_click_3_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-slide-toggle", 26);
    i0.ɵɵlistener("change", function SearchSettingsComponent_span_8_Template_mat_slide_toggle_change_7_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r46 = i0.ɵɵnextContext(); return ctx_r46.changeSearchResultsGeometry($event); })("click", function SearchSettingsComponent_span_8_Template_mat_slide_toggle_click_7_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(4, 8, "igo.geo.search.pointerSearchSummary.tooltip"))("checked", ctx_r3.pointerSummaryEnabled)("labelPosition", "after");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 10, "igo.geo.search.pointerSearchSummary.title"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(8, 12, "igo.geo.search.searchResultsGeometry.tooltip"))("checked", ctx_r3.searchResultsGeometryEnabled)("labelPosition", "after");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 14, "igo.geo.search.searchResultsGeometry.title"), " ");
} }
/**
 * This component allows a user to select a search type yo enable. In it's
 * current version, only one search type can be selected at once (radio). If
 * this component were to support more than one search source enabled (checkbox),
 * the searchbar component would require a small change to it's
 * placeholder getter. The search source service already supports having
 * more than one search source enabled.
 */
export class SearchSettingsComponent {
    constructor(searchSourceService, mediaService, storageService) {
        this.searchSourceService = searchSourceService;
        this.mediaService = mediaService;
        this.storageService = storageService;
        this.hasPointerReverseSearchSource = false;
        this.searchSourcesAllEnabled = false;
        this.buffer = [];
        this.lastKeyTime = Date.now();
        this.displayBlock = 'block';
        this.pointerSummaryEnabled = false;
        this.searchResultsGeometryEnabled = false;
        /**
         * Event emitted when the enabled search source changes
         */
        this.searchSourceChange = new EventEmitter();
        /**
         * Event emitted when the pointer summary is activated
         */
        this.pointerSummaryStatus = new EventEmitter();
        /**
         * Event emitted when the show geometry summary is changed
         */
        this.searchResultsGeometryStatus = new EventEmitter();
    }
    get isTouchScreen() {
        return this.mediaService.isTouchScreen();
    }
    handleKeyboardEvent(event) {
        if (event.key === 'F2') {
            this.pointerSummaryEnabled = !this.pointerSummaryEnabled;
            this.pointerSummaryStatus.emit(this.pointerSummaryEnabled);
        }
    }
    ngOnInit() {
        this.hasPointerReverseSearchSource = this.hasReverseSearchSourcesForPointerSummary();
    }
    /**
     * Get all search sources
     * @internal
     */
    getSearchSources() {
        const textSearchSources = this.searchSourceService
            .getSources()
            .filter(sourceCanSearch)
            .filter((s) => s.available && s.getId() !== 'map' && s.showInSettings);
        const reverseSearchSources = this.searchSourceService
            .getSources()
            .filter(sourceCanReverseSearch)
            .filter((s) => s.available && s.getId() !== 'map' && s.showInSettings);
        const sources = textSearchSources.concat(reverseSearchSources);
        this.computeSourcesCheckAllBehavior(sources);
        return sources;
    }
    /**
     * Get all search sources usable for pointer summary
     * @internal
     */
    hasReverseSearchSourcesForPointerSummary() {
        if (this.searchSourceService
            .getEnabledSources()
            .filter(sourceCanReverseSearchAsSummary).length) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Triggered when a setting is checked (checkbox style)
     * @internal
     */
    settingsValueCheckedCheckbox(event, source, setting, settingValue) {
        settingValue.enabled = event.checked;
        source.setParamFromSetting(setting);
        this.searchSourceChange.emit(source);
    }
    /**
     * Defining the action to do for check/uncheck checkboxes (settings)
     * return true if all checkbox must be checked
     * return false if all checkbox must be unchecked
     * @internal
     */
    computeSettingCheckAllBehavior(setting) {
        if (setting.allEnabled === undefined) {
            if (setting.values.find((settingValue) => settingValue.enabled)) {
                setting.allEnabled = false;
            }
            else {
                setting.allEnabled = true;
            }
        }
        else {
            setting.allEnabled = !setting.allEnabled;
        }
    }
    /**
     * Defining the action to do for check/uncheck checkboxes (sources)
     * return true if all checkbox must be checked
     * return false if all checkbox must be unchecked
     * @internal
     */
    computeSourcesCheckAllBehavior(sources) {
        const enabledSourcesCnt = sources.filter((source) => source.enabled).length;
        const disabledSourcesCnt = sources.filter((source) => !source.enabled)
            .length;
        this.searchSourcesAllEnabled =
            enabledSourcesCnt >= disabledSourcesCnt ? false : true;
    }
    /**
     * Triggered when the check all / uncheck all type is clicked,
     * @internal
     */
    checkUncheckAll(event, source, setting) {
        event.stopPropagation();
        this.computeSettingCheckAllBehavior(setting);
        setting.values.forEach((settingValue) => {
            settingValue.enabled = setting.allEnabled;
        });
        source.setParamFromSetting(setting);
        this.searchSourceChange.emit(source);
    }
    /**
     * Triggered when the check all / uncheck all type is clicked,
     * @internal
     */
    checkUncheckAllSources(event) {
        event.stopPropagation();
        this.getSearchSources().map((source) => {
            source.enabled = this.searchSourcesAllEnabled;
            this.searchSourceChange.emit(source);
        });
    }
    /**
     * Triggered when a setting is checked (radiobutton style)
     * @internal
     */
    settingsValueCheckedRadioButton(event, source, setting, settingValue) {
        setting.values.forEach((conf) => {
            if (conf.value !== settingValue.value) {
                conf.enabled = !event.source.checked;
            }
            else {
                conf.enabled = event.source.checked;
            }
        });
        source.setParamFromSetting(setting);
        this.searchSourceChange.emit(source);
    }
    onCheckSearchSource(event, source) {
        source.enabled = event.checked;
        const storage = (this.storageService.get(source.getId() + '.options') || {});
        storage.enabled = source.enabled;
        this.storageService.set(source.getId() + '.options', storage);
        this.searchSourceChange.emit(source);
    }
    getAvailableValues(setting) {
        return setting.values.filter((s) => s.available !== false);
    }
    getAvailableHashtagsValues(setting) {
        if (setting.hashtags) {
            return setting.hashtags.map((h) => '#' + h).join(', ');
        }
        return;
    }
    stopPropagation(event) {
        event.stopPropagation();
    }
    changePointerReverseSearch(event) {
        this.pointerSummaryEnabled = event.checked;
        this.pointerSummaryStatus.emit(this.pointerSummaryEnabled);
    }
    changeSearchResultsGeometry(event) {
        this.searchResultsGeometryEnabled = event.checked;
        this.searchResultsGeometryStatus.emit(this.searchResultsGeometryEnabled);
    }
}
SearchSettingsComponent.ɵfac = function SearchSettingsComponent_Factory(t) { return new (t || SearchSettingsComponent)(i0.ɵɵdirectiveInject(i1.SearchSourceService), i0.ɵɵdirectiveInject(i2.MediaService), i0.ɵɵdirectiveInject(i2.StorageService)); };
SearchSettingsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchSettingsComponent, selectors: [["igo-search-settings"]], hostBindings: function SearchSettingsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function SearchSettingsComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { pointerSummaryEnabled: "pointerSummaryEnabled", searchResultsGeometryEnabled: "searchResultsGeometryEnabled" }, outputs: { searchSourceChange: "searchSourceChange", pointerSummaryStatus: "pointerSummaryStatus", searchResultsGeometryStatus: "searchResultsGeometryStatus" }, decls: 9, vars: 7, consts: [[1, "igo-search-settings"], ["mat-icon-button", "", "color", "primary", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "igo-search-settings-button", 3, "matTooltip", "matMenuTriggerFor"], ["svgIcon", "chevron-down"], [1, "no-border-radius"], ["searchSettingsMenu", "matMenu"], ["class", "checkAllButton", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "checkAllButton"], ["mat-raised-button", "", 3, "click"], [1, "igo-search-settings-search-source"], [1, "igo-search-settings-checkbox", 3, "checked", "value", "click", "change"], ["mat-menu-item", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", 4, "ngIf"], ["sub_menu", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["yPosition", "above", 3, "ngSwitch"], ["test_sub_menu", "matMenu"], [4, "ngSwitchCase"], [1, "igo-search-settings-radio-group", 3, "value"], ["class", "mat-typography", 3, "value", "matTooltip", "checked", "click", "change", 4, "ngFor", "ngForOf"], [1, "mat-typography", 3, "value", "matTooltip", "checked", "click", "change"], ["class", "mat-menu-item", 3, "display", "checked", "value", "matTooltip", "click", "change", 4, "ngFor", "ngForOf"], [1, "mat-menu-item", 3, "checked", "value", "matTooltip", "click", "change"], [1, "pointer-summary-slide-toggle-container", "mat-typography"], ["tooltip-position", "below", "matTooltipShowDelay", "500", 1, "pointer-summary-option", 3, "matTooltip", "checked", "labelPosition", "change", "click"]], template: function SearchSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelement(3, "mat-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-menu", 3, 4);
        i0.ɵɵtemplate(6, SearchSettingsComponent_div_6_Template, 5, 5, "div", 5);
        i0.ɵɵtemplate(7, SearchSettingsComponent_ng_container_7_Template, 8, 5, "ng-container", 6);
        i0.ɵɵtemplate(8, SearchSettingsComponent_span_8_Template, 11, 16, "span", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 5, "igo.geo.search.menu.tooltip"))("matMenuTriggerFor", _r0);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.getSearchSources().length > 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.getSearchSources());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasPointerReverseSearchSource && !ctx.isTouchScreen);
    } }, directives: [i3.MatButton, i4.MatTooltip, i5.MatMenuTrigger, i6.MatIcon, i5.MatMenu, i7.NgIf, i7.NgForOf, i8.MatCheckbox, i5.MatMenuItem, i7.NgSwitch, i7.NgSwitchCase, i9.MatRadioGroup, i9.MatRadioButton, i10.MatDivider, i11.MatSlideToggle], pipes: [i12.TranslatePipe], styles: [".checkAllButton[_ngcontent-%COMP%]{text-align:center;padding:0 5px}.igo-search-settings-button[_ngcontent-%COMP%]     div.mat-button-ripple-round{border-radius:0}.igo-search-settings-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.igo-search-settings-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{margin:5px}.igo-search-settings-checkbox[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{display:flex}.igo-search-settings-search-source[_ngcontent-%COMP%]{display:flex;width:100%}.igo-search-settings-search-source[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{display:flex;margin-left:5px;margin-right:5px}.pointer-summary-option[_ngcontent-%COMP%]{display:block;margin-right:10px;margin-bottom:15px}.pointer-summary-slide-toggle-container[_ngcontent-%COMP%]{overflow-x:hidden}.pointer-summary-slide-toggle-container[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{margin:10px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchSettingsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-search-settings',
                templateUrl: './search-settings.component.html',
                styleUrls: ['./search-settings.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.SearchSourceService }, { type: i2.MediaService }, { type: i2.StorageService }]; }, { pointerSummaryEnabled: [{
            type: Input
        }], searchResultsGeometryEnabled: [{
            type: Input
        }], searchSourceChange: [{
            type: Output
        }], pointerSummaryStatus: [{
            type: Output
        }], searchResultsGeometryStatus: [{
            type: Output
        }], handleKeyboardEvent: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXNldHRpbmdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3NlYXJjaC9zZWFyY2gtc2V0dGluZ3Mvc2VhcmNoLXNldHRpbmdzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3NlYXJjaC9zZWFyY2gtc2V0dGluZ3Mvc2VhcmNoLXNldHRpbmdzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFFdkIsWUFBWSxFQUNaLEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQVF2QixPQUFPLEVBQ0wsK0JBQStCLEVBQy9CLGVBQWUsRUFDZixzQkFBc0IsRUFDdkIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ1I1Qiw4QkFBZ0U7SUFDOUQsaUNBQzJDO0lBQXpDLG1OQUF3QztJQUFDLFlBQWdKOzs7SUFBQSxpQkFBUztJQUN0TSxpQkFBTTs7O0lBRHVDLGVBQWdKO0lBQWhKLHlMQUFnSjs7O0lBV3ZMLGtDQUVnQjtJQUFBLFlBQ2hCO0lBQUEsaUJBQVM7Ozs7SUFGUCx1Q0FBOEI7SUFDaEIsZUFDaEI7SUFEZ0IsK0NBQ2hCOzs7SUFDQSxrQ0FFdUM7SUFDckMsWUFDRjtJQUFBLGlCQUFTOzs7SUFEUCxlQUNGO0lBREUsZ0RBQ0Y7Ozs7SUFnQlUsNENBTW9GO0lBRGxGLDRLQUFTLHdCQUF3QixJQUFDLGllQUFBO0lBRWxDLFlBQ0Y7O0lBQUEsaUJBQW1COzs7O0lBTmpCLHdDQUFzQixvRUFBQSxxQ0FBQTtJQUt0QixlQUNGO0lBREUsNkVBQ0Y7OztJQVpKLDRCQUFvQztJQUNsQywyQ0FFb0I7SUFDbEIsd0lBUW1CO0lBQ3JCLGlCQUFrQjtJQUNwQixpQkFBTzs7O0lBWEgsZUFB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QUMsTUFBTTthQUNoRDs4SEFjVSxxQkFBcUI7a0JBQTdCLEtBQUs7WUFDRyw0QkFBNEI7a0JBQXBDLEtBQUs7WUFLSSxrQkFBa0I7a0JBQTNCLE1BQU07WUFLRyxvQkFBb0I7a0JBQTdCLE1BQU07WUFLRywyQkFBMkI7a0JBQXBDLE1BQU07WUFHUCxtQkFBbUI7a0JBRGxCLFlBQVk7bUJBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IE1hdFJhZGlvQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlYXJjaC1zb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hTb3VyY2UgfSBmcm9tICcuLi9zaGFyZWQvc291cmNlcy9zb3VyY2UnO1xuaW1wb3J0IHtcbiAgU2VhcmNoU291cmNlU2V0dGluZ3MsXG4gIFNldHRpbmdPcHRpb25zXG59IGZyb20gJy4uL3NoYXJlZC9zb3VyY2VzL3NvdXJjZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7XG4gIHNvdXJjZUNhblJldmVyc2VTZWFyY2hBc1N1bW1hcnksXG4gIHNvdXJjZUNhblNlYXJjaCxcbiAgc291cmNlQ2FuUmV2ZXJzZVNlYXJjaFxufSBmcm9tICcuLi9zaGFyZWQvc2VhcmNoLnV0aWxzJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBhbGxvd3MgYSB1c2VyIHRvIHNlbGVjdCBhIHNlYXJjaCB0eXBlIHlvIGVuYWJsZS4gSW4gaXQnc1xuICogY3VycmVudCB2ZXJzaW9uLCBvbmx5IG9uZSBzZWFyY2ggdHlwZSBjYW4gYmUgc2VsZWN0ZWQgYXQgb25jZSAocmFkaW8pLiBJZlxuICogdGhpcyBjb21wb25lbnQgd2VyZSB0byBzdXBwb3J0IG1vcmUgdGhhbiBvbmUgc2VhcmNoIHNvdXJjZSBlbmFibGVkIChjaGVja2JveCksXG4gKiB0aGUgc2VhcmNoYmFyIGNvbXBvbmVudCB3b3VsZCByZXF1aXJlIGEgc21hbGwgY2hhbmdlIHRvIGl0J3NcbiAqIHBsYWNlaG9sZGVyIGdldHRlci4gVGhlIHNlYXJjaCBzb3VyY2Ugc2VydmljZSBhbHJlYWR5IHN1cHBvcnRzIGhhdmluZ1xuICogbW9yZSB0aGFuIG9uZSBzZWFyY2ggc291cmNlIGVuYWJsZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1zZWFyY2gtc2V0dGluZ3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXNldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGhhc1BvaW50ZXJSZXZlcnNlU2VhcmNoU291cmNlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzZWFyY2hTb3VyY2VzQWxsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBidWZmZXIgPSBbXTtcbiAgcHVibGljIGxhc3RLZXlUaW1lID0gRGF0ZS5ub3coKTtcblxuICBwdWJsaWMgZGlzcGxheUJsb2NrID0gJ2Jsb2NrJztcblxuICBnZXQgaXNUb3VjaFNjcmVlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYVNlcnZpY2UuaXNUb3VjaFNjcmVlbigpO1xuICB9XG5cbiAgQElucHV0KCkgcG9pbnRlclN1bW1hcnlFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlYXJjaFJlc3VsdHNHZW9tZXRyeUVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBlbmFibGVkIHNlYXJjaCBzb3VyY2UgY2hhbmdlc1xuICAgKi9cbiAgQE91dHB1dCgpIHNlYXJjaFNvdXJjZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2VhcmNoU291cmNlPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHBvaW50ZXIgc3VtbWFyeSBpcyBhY3RpdmF0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBwb2ludGVyU3VtbWFyeVN0YXR1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzaG93IGdlb21ldHJ5IHN1bW1hcnkgaXMgY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpIHNlYXJjaFJlc3VsdHNHZW9tZXRyeVN0YXR1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlS2V5Ym9hcmRFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdGMicpIHtcbiAgICAgIHRoaXMucG9pbnRlclN1bW1hcnlFbmFibGVkID0gIXRoaXMucG9pbnRlclN1bW1hcnlFbmFibGVkO1xuICAgICAgdGhpcy5wb2ludGVyU3VtbWFyeVN0YXR1cy5lbWl0KHRoaXMucG9pbnRlclN1bW1hcnlFbmFibGVkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlYXJjaFNvdXJjZVNlcnZpY2U6IFNlYXJjaFNvdXJjZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZWRpYVNlcnZpY2U6IE1lZGlhU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNQb2ludGVyUmV2ZXJzZVNlYXJjaFNvdXJjZSA9IHRoaXMuaGFzUmV2ZXJzZVNlYXJjaFNvdXJjZXNGb3JQb2ludGVyU3VtbWFyeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgc2VhcmNoIHNvdXJjZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRTZWFyY2hTb3VyY2VzKCk6IFNlYXJjaFNvdXJjZVtdIHtcbiAgICBjb25zdCB0ZXh0U2VhcmNoU291cmNlcyA9IHRoaXMuc2VhcmNoU291cmNlU2VydmljZVxuICAgICAgLmdldFNvdXJjZXMoKVxuICAgICAgLmZpbHRlcihzb3VyY2VDYW5TZWFyY2gpXG4gICAgICAuZmlsdGVyKChzKSA9PiBzLmF2YWlsYWJsZSAmJiBzLmdldElkKCkgIT09ICdtYXAnICYmIHMuc2hvd0luU2V0dGluZ3MpO1xuXG4gICAgY29uc3QgcmV2ZXJzZVNlYXJjaFNvdXJjZXMgPSB0aGlzLnNlYXJjaFNvdXJjZVNlcnZpY2VcbiAgICAgIC5nZXRTb3VyY2VzKClcbiAgICAgIC5maWx0ZXIoc291cmNlQ2FuUmV2ZXJzZVNlYXJjaClcbiAgICAgIC5maWx0ZXIoKHMpID0+IHMuYXZhaWxhYmxlICYmIHMuZ2V0SWQoKSAhPT0gJ21hcCcgJiYgcy5zaG93SW5TZXR0aW5ncyk7XG4gICAgY29uc3Qgc291cmNlcyA9IHRleHRTZWFyY2hTb3VyY2VzLmNvbmNhdChyZXZlcnNlU2VhcmNoU291cmNlcyk7XG4gICAgdGhpcy5jb21wdXRlU291cmNlc0NoZWNrQWxsQmVoYXZpb3Ioc291cmNlcyk7XG4gICAgcmV0dXJuIHNvdXJjZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBzZWFyY2ggc291cmNlcyB1c2FibGUgZm9yIHBvaW50ZXIgc3VtbWFyeVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGhhc1JldmVyc2VTZWFyY2hTb3VyY2VzRm9yUG9pbnRlclN1bW1hcnkoKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5zZWFyY2hTb3VyY2VTZXJ2aWNlXG4gICAgICAgIC5nZXRFbmFibGVkU291cmNlcygpXG4gICAgICAgIC5maWx0ZXIoc291cmNlQ2FuUmV2ZXJzZVNlYXJjaEFzU3VtbWFyeSkubGVuZ3RoXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBhIHNldHRpbmcgaXMgY2hlY2tlZCAoY2hlY2tib3ggc3R5bGUpXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgc2V0dGluZ3NWYWx1ZUNoZWNrZWRDaGVja2JveChcbiAgICBldmVudDogTWF0Q2hlY2tib3hDaGFuZ2UsXG4gICAgc291cmNlOiBTZWFyY2hTb3VyY2UsXG4gICAgc2V0dGluZzogU2VhcmNoU291cmNlU2V0dGluZ3MsXG4gICAgc2V0dGluZ1ZhbHVlOiBTZXR0aW5nT3B0aW9uc1xuICApIHtcbiAgICBzZXR0aW5nVmFsdWUuZW5hYmxlZCA9IGV2ZW50LmNoZWNrZWQ7XG4gICAgc291cmNlLnNldFBhcmFtRnJvbVNldHRpbmcoc2V0dGluZyk7XG4gICAgdGhpcy5zZWFyY2hTb3VyY2VDaGFuZ2UuZW1pdChzb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluaW5nIHRoZSBhY3Rpb24gdG8gZG8gZm9yIGNoZWNrL3VuY2hlY2sgY2hlY2tib3hlcyAoc2V0dGluZ3MpXG4gICAqIHJldHVybiB0cnVlIGlmIGFsbCBjaGVja2JveCBtdXN0IGJlIGNoZWNrZWRcbiAgICogcmV0dXJuIGZhbHNlIGlmIGFsbCBjaGVja2JveCBtdXN0IGJlIHVuY2hlY2tlZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNvbXB1dGVTZXR0aW5nQ2hlY2tBbGxCZWhhdmlvcihzZXR0aW5nOiBTZWFyY2hTb3VyY2VTZXR0aW5ncykge1xuICAgIGlmIChzZXR0aW5nLmFsbEVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHNldHRpbmcudmFsdWVzLmZpbmQoKHNldHRpbmdWYWx1ZSkgPT4gc2V0dGluZ1ZhbHVlLmVuYWJsZWQpKSB7XG4gICAgICAgIHNldHRpbmcuYWxsRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dGluZy5hbGxFbmFibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0dGluZy5hbGxFbmFibGVkID0gIXNldHRpbmcuYWxsRW5hYmxlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5pbmcgdGhlIGFjdGlvbiB0byBkbyBmb3IgY2hlY2svdW5jaGVjayBjaGVja2JveGVzIChzb3VyY2VzKVxuICAgKiByZXR1cm4gdHJ1ZSBpZiBhbGwgY2hlY2tib3ggbXVzdCBiZSBjaGVja2VkXG4gICAqIHJldHVybiBmYWxzZSBpZiBhbGwgY2hlY2tib3ggbXVzdCBiZSB1bmNoZWNrZWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjb21wdXRlU291cmNlc0NoZWNrQWxsQmVoYXZpb3Ioc291cmNlczogU2VhcmNoU291cmNlW10pIHtcbiAgICBjb25zdCBlbmFibGVkU291cmNlc0NudCA9IHNvdXJjZXMuZmlsdGVyKChzb3VyY2UpID0+IHNvdXJjZS5lbmFibGVkKS5sZW5ndGg7XG4gICAgY29uc3QgZGlzYWJsZWRTb3VyY2VzQ250ID0gc291cmNlcy5maWx0ZXIoKHNvdXJjZSkgPT4gIXNvdXJjZS5lbmFibGVkKVxuICAgICAgLmxlbmd0aDtcbiAgICB0aGlzLnNlYXJjaFNvdXJjZXNBbGxFbmFibGVkID1cbiAgICAgIGVuYWJsZWRTb3VyY2VzQ250ID49IGRpc2FibGVkU291cmNlc0NudCA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgY2hlY2sgYWxsIC8gdW5jaGVjayBhbGwgdHlwZSBpcyBjbGlja2VkLFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNoZWNrVW5jaGVja0FsbChldmVudCwgc291cmNlOiBTZWFyY2hTb3VyY2UsIHNldHRpbmc6IFNlYXJjaFNvdXJjZVNldHRpbmdzKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jb21wdXRlU2V0dGluZ0NoZWNrQWxsQmVoYXZpb3Ioc2V0dGluZyk7XG4gICAgc2V0dGluZy52YWx1ZXMuZm9yRWFjaCgoc2V0dGluZ1ZhbHVlKSA9PiB7XG4gICAgICBzZXR0aW5nVmFsdWUuZW5hYmxlZCA9IHNldHRpbmcuYWxsRW5hYmxlZDtcbiAgICB9KTtcbiAgICBzb3VyY2Uuc2V0UGFyYW1Gcm9tU2V0dGluZyhzZXR0aW5nKTtcbiAgICB0aGlzLnNlYXJjaFNvdXJjZUNoYW5nZS5lbWl0KHNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIGNoZWNrIGFsbCAvIHVuY2hlY2sgYWxsIHR5cGUgaXMgY2xpY2tlZCxcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjaGVja1VuY2hlY2tBbGxTb3VyY2VzKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5nZXRTZWFyY2hTb3VyY2VzKCkubWFwKChzb3VyY2UpID0+IHtcbiAgICAgIHNvdXJjZS5lbmFibGVkID0gdGhpcy5zZWFyY2hTb3VyY2VzQWxsRW5hYmxlZDtcbiAgICAgIHRoaXMuc2VhcmNoU291cmNlQ2hhbmdlLmVtaXQoc291cmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBhIHNldHRpbmcgaXMgY2hlY2tlZCAocmFkaW9idXR0b24gc3R5bGUpXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgc2V0dGluZ3NWYWx1ZUNoZWNrZWRSYWRpb0J1dHRvbihcbiAgICBldmVudDogTWF0UmFkaW9DaGFuZ2UsXG4gICAgc291cmNlOiBTZWFyY2hTb3VyY2UsXG4gICAgc2V0dGluZzogU2VhcmNoU291cmNlU2V0dGluZ3MsXG4gICAgc2V0dGluZ1ZhbHVlOiBTZXR0aW5nT3B0aW9uc1xuICApIHtcbiAgICBzZXR0aW5nLnZhbHVlcy5mb3JFYWNoKChjb25mKSA9PiB7XG4gICAgICBpZiAoY29uZi52YWx1ZSAhPT0gc2V0dGluZ1ZhbHVlLnZhbHVlKSB7XG4gICAgICAgIGNvbmYuZW5hYmxlZCA9ICFldmVudC5zb3VyY2UuY2hlY2tlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmYuZW5hYmxlZCA9IGV2ZW50LnNvdXJjZS5jaGVja2VkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNvdXJjZS5zZXRQYXJhbUZyb21TZXR0aW5nKHNldHRpbmcpO1xuICAgIHRoaXMuc2VhcmNoU291cmNlQ2hhbmdlLmVtaXQoc291cmNlKTtcbiAgfVxuXG4gIG9uQ2hlY2tTZWFyY2hTb3VyY2UoZXZlbnQ6IE1hdENoZWNrYm94Q2hhbmdlLCBzb3VyY2U6IFNlYXJjaFNvdXJjZSkge1xuICAgIHNvdXJjZS5lbmFibGVkID0gZXZlbnQuY2hlY2tlZDtcbiAgICBjb25zdCBzdG9yYWdlID0gKHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KHNvdXJjZS5nZXRJZCgpICsgJy5vcHRpb25zJykgfHwge30pIGFzIFNldHRpbmdPcHRpb25zO1xuICAgIHN0b3JhZ2UuZW5hYmxlZCA9IHNvdXJjZS5lbmFibGVkO1xuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KFxuICAgICAgc291cmNlLmdldElkKCkgKyAnLm9wdGlvbnMnLFxuICAgICAgc3RvcmFnZVxuICAgICk7XG4gICAgdGhpcy5zZWFyY2hTb3VyY2VDaGFuZ2UuZW1pdChzb3VyY2UpO1xuICB9XG5cbiAgZ2V0QXZhaWxhYmxlVmFsdWVzKHNldHRpbmc6IFNlYXJjaFNvdXJjZVNldHRpbmdzKSB7XG4gICAgcmV0dXJuIHNldHRpbmcudmFsdWVzLmZpbHRlcigocykgPT4gcy5hdmFpbGFibGUgIT09IGZhbHNlKTtcbiAgfVxuXG4gIGdldEF2YWlsYWJsZUhhc2h0YWdzVmFsdWVzKHNldHRpbmc6IFNldHRpbmdPcHRpb25zKSB7XG4gICAgaWYgKHNldHRpbmcuaGFzaHRhZ3MpIHtcbiAgICAgIHJldHVybiBzZXR0aW5nLmhhc2h0YWdzLm1hcCgoaCkgPT4gJyMnICsgaCkuam9pbignLCAnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjaGFuZ2VQb2ludGVyUmV2ZXJzZVNlYXJjaChldmVudCkge1xuICAgIHRoaXMucG9pbnRlclN1bW1hcnlFbmFibGVkID0gZXZlbnQuY2hlY2tlZDtcbiAgICB0aGlzLnBvaW50ZXJTdW1tYXJ5U3RhdHVzLmVtaXQodGhpcy5wb2ludGVyU3VtbWFyeUVuYWJsZWQpO1xuICB9XG5cbiAgY2hhbmdlU2VhcmNoUmVzdWx0c0dlb21ldHJ5KGV2ZW50KSB7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzR2VvbWV0cnlFbmFibGVkID0gZXZlbnQuY2hlY2tlZDtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHNHZW9tZXRyeVN0YXR1cy5lbWl0KHRoaXMuc2VhcmNoUmVzdWx0c0dlb21ldHJ5RW5hYmxlZCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpZ28tc2VhcmNoLXNldHRpbmdzXCI+XG5cbiAgPGJ1dHRvblxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIGNsYXNzPVwiaWdvLXNlYXJjaC1zZXR0aW5ncy1idXR0b25cIlxuICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5zZWFyY2gubWVudS50b29sdGlwJyB8IHRyYW5zbGF0ZVwiXG4gICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cInNlYXJjaFNldHRpbmdzTWVudVwiPlxuICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiY2hldnJvbi1kb3duXCI+PC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxtYXQtbWVudVxuICAgICNzZWFyY2hTZXR0aW5nc01lbnU9XCJtYXRNZW51XCJcbiAgICBjbGFzcz1cIm5vLWJvcmRlci1yYWRpdXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hlY2tBbGxCdXR0b25cIiAqbmdJZj1cImdldFNlYXJjaFNvdXJjZXMoKS5sZW5ndGg+NFwiPlxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAoY2xpY2spPVwiY2hlY2tVbmNoZWNrQWxsU291cmNlcygkZXZlbnQpXCI+e3shc2VhcmNoU291cmNlc0FsbEVuYWJsZWQgID8gKCdpZ28uZ2VvLnNlYXJjaC5zZWFyY2hTb3VyY2VzLnVuc2VsZWN0QWxsJyB8IHRyYW5zbGF0ZSk6ICgnaWdvLmdlby5zZWFyY2guc2VhcmNoU291cmNlcy5zZWxlY3RBbGwnIHwgdHJhbnNsYXRlKX19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzb3VyY2Ugb2YgZ2V0U2VhcmNoU291cmNlcygpXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWdvLXNlYXJjaC1zZXR0aW5ncy1zZWFyY2gtc291cmNlXCI+XG4gICAgICAgICAgPG1hdC1jaGVja2JveFxuICAgICAgICAgICAgY2xhc3M9XCJpZ28tc2VhcmNoLXNldHRpbmdzLWNoZWNrYm94XCJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNvdXJjZS5lbmFibGVkXCJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hlY2tTZWFyY2hTb3VyY2UoJGV2ZW50LCBzb3VyY2UpXCI+XG4gICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNvdXJjZS5zZXR0aW5ncy5sZW5ndGjCoD7CoDBcIlxuICAgICAgICAgICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cInN1Yl9tZW51XCJcbiAgICAgICAgICAgIG1hdC1tZW51LWl0ZW0+e3tzb3VyY2UudGl0bGV9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG1hdC1tZW51LWl0ZW1cbiAgICAgICAgICAgICpuZ0lmPVwic291cmNlLnNldHRpbmdzLmxlbmd0aMKgPT09wqAwXCI+XG4gICAgICAgICAgICB7e3NvdXJjZS50aXRsZX19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8bWF0LW1lbnUgI3N1Yl9tZW51PVwibWF0TWVudVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2V0dGluZyBvZiBzb3VyY2Uuc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgbWF0LW1lbnUtaXRlbVxuICAgICAgICAgICAgICAgICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cInRlc3Rfc3ViX21lbnVcIj5cbiAgICAgICAgICAgICAgICB7eydpZ28uZ2VvLnNlYXJjaC5zZWFyY2hTb3VyY2VzLnNldHRpbmdzLicrIHNldHRpbmcudGl0bGUgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPG1hdC1tZW51ICN0ZXN0X3N1Yl9tZW51PVwibWF0TWVudVwiXG4gICAgICAgICAgICAgICAgW25nU3dpdGNoXT1cInNldHRpbmcudHlwZVwiXG4gICAgICAgICAgICAgICAgeVBvc2l0aW9uPVwiYWJvdmVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvYnV0dG9uJ1wiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlnby1zZWFyY2gtc2V0dGluZ3MtcmFkaW8tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2V0dGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgc2V0dGluZ1ZhbHVlIG9mIHNldHRpbmcudmFsdWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCJcbiAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2V0dGluZ1ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJnZXRBdmFpbGFibGVIYXNodGFnc1ZhbHVlcyhzZXR0aW5nVmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZXR0aW5nVmFsdWUuZW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZXR0aW5nc1ZhbHVlQ2hlY2tlZFJhZGlvQnV0dG9uKCRldmVudCwgc291cmNlLCBzZXR0aW5nLCBzZXR0aW5nVmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3tzZXR0aW5nVmFsdWUudGl0bGUgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja0FsbEJ1dHRvblwiICpuZ0lmPVwic2V0dGluZy52YWx1ZXMubGVuZ3RowqA+wqAzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2hlY2tVbmNoZWNrQWxsKCRldmVudCwgc291cmNlLCBzZXR0aW5nKVwiPnt7c2V0dGluZy5hbGxFbmFibGVkIHx8IHNldHRpbmcuYWxsRW5hYmxlZCA9PT0gdW5kZWZpbmVkICA/ICgnaWdvLmdlby5zZWFyY2guc2VhcmNoU291cmNlcy5zZXR0aW5ncy51bnNlbGVjdEFsbCcgfCB0cmFuc2xhdGUpOiAoJ2lnby5nZW8uc2VhcmNoLnNlYXJjaFNvdXJjZXMuc2V0dGluZ3Muc2VsZWN0QWxsJyB8IHRyYW5zbGF0ZSl9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94ICpuZ0Zvcj1cImxldCBzZXR0aW5nVmFsdWUgb2YgZ2V0QXZhaWxhYmxlVmFsdWVzKHNldHRpbmcpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXQtbWVudS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwiZGlzcGxheUJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2V0dGluZ1ZhbHVlLmVuYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2V0dGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIFttYXRUb29sdGlwXT1cImdldEF2YWlsYWJsZUhhc2h0YWdzVmFsdWVzKHNldHRpbmdWYWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZXR0aW5nc1ZhbHVlQ2hlY2tlZENoZWNrYm94KCRldmVudCwgc291cmNlLCBzZXR0aW5nLCBzZXR0aW5nVmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7c2V0dGluZ1ZhbHVlLnRpdGxlIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9tYXQtbWVudT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbWF0LW1lbnU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiaGFzUG9pbnRlclJldmVyc2VTZWFyY2hTb3VyY2UgJiYgIWlzVG91Y2hTY3JlZW5cIj5cbiAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicG9pbnRlci1zdW1tYXJ5LXNsaWRlLXRvZ2dsZS1jb250YWluZXIgbWF0LXR5cG9ncmFwaHlcIj5cbiAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjbGFzcz1cInBvaW50ZXItc3VtbWFyeS1vcHRpb25cIiAoY2hhbmdlKT1cImNoYW5nZVBvaW50ZXJSZXZlcnNlU2VhcmNoKCRldmVudClcIiB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgICAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLnNlYXJjaC5wb2ludGVyU2VhcmNoU3VtbWFyeS50b29sdGlwJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgW2NoZWNrZWRdPVwicG9pbnRlclN1bW1hcnlFbmFibGVkXCIgW2xhYmVsUG9zaXRpb25dPVwiJ2FmdGVyJ1wiPlxuICAgICAgICAgICAge3snaWdvLmdlby5zZWFyY2gucG9pbnRlclNlYXJjaFN1bW1hcnkudGl0bGUnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJwb2ludGVyLXN1bW1hcnktb3B0aW9uXCIgKGNoYW5nZSk9XCJjaGFuZ2VTZWFyY2hSZXN1bHRzR2VvbWV0cnkoJGV2ZW50KVwiIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICAgICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCIgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uc2VhcmNoLnNlYXJjaFJlc3VsdHNHZW9tZXRyeS50b29sdGlwJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgW2NoZWNrZWRdPVwic2VhcmNoUmVzdWx0c0dlb21ldHJ5RW5hYmxlZFwiIFtsYWJlbFBvc2l0aW9uXT1cIidhZnRlcidcIj5cbiAgICAgICAgICAgIHt7J2lnby5nZW8uc2VhcmNoLnNlYXJjaFJlc3VsdHNHZW9tZXRyeS50aXRsZScgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICA8L21hdC1tZW51PlxuPC9kaXY+XG4iXX0=