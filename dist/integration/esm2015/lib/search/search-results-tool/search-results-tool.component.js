import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import olFormatGeoJSON from 'ol/format/GeoJSON';
import olFeature from 'ol/Feature';
import olPoint from 'ol/geom/Point';
import pointOnFeature from '@turf/point-on-feature';
import { ToolComponent, getEntityTitle, FlexibleComponent } from '@igo2/common';
import { FEATURE, FeatureMotion, moveToOlFeatures, featuresAreTooDeepInView, featureToOl, featureFromOl, getCommonVectorStyle, getCommonVectorSelectedStyle, computeOlFeaturesExtent, featuresAreOutOfView } from '@igo2/geo';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map.state";
import * as i2 from "../search.state";
import * as i3 from "../../tool/tool.state";
import * as i4 from "../../directions/directions.state";
import * as i5 from "@igo2/core";
import * as i6 from "@angular/common";
import * as i7 from "@igo2/common";
import * as i8 from "@igo2/geo";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/icon";
import * as i11 from "@angular/material/tooltip";
import * as i12 from "@angular/material/badge";
import * as i13 from "@ngx-translate/core";
function SearchResultsToolComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "section", 3);
    i0.ɵɵelementStart(2, "h4");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "div", 4);
    i0.ɵɵpipe(11, "sanitizeHtml");
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 3, "igo.integration.searchResultsTool.noResults"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 5, "igo.integration.searchResultsTool.doSearch"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(11, 7, i0.ɵɵpipeBind1(12, 9, "igo.integration.searchResultsTool.examples")), i0.ɵɵsanitizeHtml);
} }
function SearchResultsToolComponent_igo_flexible_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-search-add-button", 12);
} if (rf & 2) {
    const result_r6 = ctx.result;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("map", ctx_r4.map)("layer", result_r6);
} }
function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(3); return ctx_r8.zoomToFeatureExtent(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelement(3, "mat-icon", 19);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 3, i0.ɵɵpipeBind1(2, 5, ctx_r7.isSelectedResultOutOfView$) ? "igo.integration.searchResultsTool.zoomOnFeatureTooltipOutOfView" : "igo.integration.searchResultsTool.zoomOnFeatureTooltip"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matBadge", i0.ɵɵpipeBind1(4, 7, ctx_r7.isSelectedResultOutOfView$) ? "!" : "")("matBadgeHidden", i0.ɵɵpipeBind1(5, 9, ctx_r7.isSelectedResultOutOfView$) === false);
} }
function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-panel", 13);
    i0.ɵɵelementStart(1, "button", 14);
    i0.ɵɵlistener("click", function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.toggleTopPanel(); });
    i0.ɵɵelement(2, "mat-icon", 15);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SearchResultsToolComponent_igo_flexible_1_igo_panel_8_button_4_Template, 6, 11, "button", 16);
    i0.ɵɵelementStart(5, "igo-feature-details", 17);
    i0.ɵɵlistener("routingEvent", function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template_igo_feature_details_routingEvent_5_listener() { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.getRoute(); });
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r5.featureTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("svgIcon", i0.ɵɵpipeBind1(3, 6, ctx_r5.topPanelState$) === "collapsed" ? "arrow-up" : "arrow-down");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.feature.geometry);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("feature", i0.ɵɵpipeBind1(6, 8, ctx_r5.feature$))("map", ctx_r5.map)("toolbox", ctx_r5.toolState.toolbox);
} }
function SearchResultsToolComponent_igo_flexible_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-flexible", 5, 6);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵelementStart(4, "igo-search-results", 8);
    i0.ɵɵlistener("resultFocus", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultFocus_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onResultFocus($event); })("resultSelect", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultSelect_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onResultSelect($event); })("resultUnfocus", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultUnfocus_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.onResultUnfocus($event); })("resultMouseenter", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultMouseenter_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.onResultFocus($event); })("resultMouseleave", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultMouseleave_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onResultUnfocus($event); })("moreResults", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_moreResults_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onSearch($event); });
    i0.ɵɵtemplate(5, SearchResultsToolComponent_igo_flexible_1_ng_template_5_Template, 1, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 10);
    i0.ɵɵtemplate(8, SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template, 7, 10, "igo-panel", 11);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("state", i0.ɵɵpipeBind1(2, 7, ctx_r1.feature$) ? ctx_r1.topPanelState : "initial");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("store", ctx_r1.store)("showIcons", ctx_r1.showIcons)("term", ctx_r1.term)("termSplitter", ctx_r1.termSplitter)("settingsChange$", ctx_r1.settingsChange$);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(9, 9, ctx_r1.feature$));
} }
/**
 * Tool to browse the search results
 */
let SearchResultsToolComponent = class SearchResultsToolComponent {
    constructor(mapState, searchState, elRef, toolState, directionState, configService) {
        this.mapState = mapState;
        this.searchState = searchState;
        this.elRef = elRef;
        this.toolState = toolState;
        this.directionState = directionState;
        /**
         * to show hide results icons
         */
        this.showIcons = true;
        this.hasFeatureEmphasisOnSelection = false;
        this.shownResultsGeometries = [];
        this.shownResultsEmphasisGeometries = [];
        this.focusedResult$ = new BehaviorSubject(undefined);
        this.isSelectedResultOutOfView$ = new BehaviorSubject(false);
        this.term = '';
        this.settingsChange$ = new BehaviorSubject(undefined);
        this.topPanelState$ = new BehaviorSubject('initial');
        this.format = new olFormatGeoJSON();
        this.hasFeatureEmphasisOnSelection = configService.getConfig('hasFeatureEmphasisOnSelection');
    }
    /**
     * Store holding the search results
     * @internal
     */
    get store() {
        return this.searchState.store;
    }
    /**
     * Map to display the results on
     * @internal
     */
    get map() {
        return this.mapState.map;
    }
    get featureTitle() {
        return this.feature ? getEntityTitle(this.feature) : undefined;
    }
    get feature$() {
        return this.store.stateView
            .firstBy$((e) => e.state.focused)
            .pipe(map((element) => (this.feature = element
            ? element.entity.data
            : undefined)));
    }
    set topPanelState(value) {
        this.topPanelState$.next(value);
    }
    get topPanelState() {
        return this.topPanelState$.value;
    }
    get termSplitter() {
        return this.searchState.searchTermSplitter$.value;
    }
    ngOnInit() {
        this.searchTerm$$ = this.searchState.searchTerm$.subscribe((searchTerm) => {
            if (searchTerm !== undefined && searchTerm !== null) {
                this.term = searchTerm;
            }
        });
        for (const res of this.store.stateView.all$().value) {
            if (this.store.state.get(res.entity).selected === true) {
                this.topPanelState = 'expanded';
            }
        }
        this.searchState.searchSettingsChange$.subscribe(() => {
            this.settingsChange$.next(true);
        });
        this.topPanelState$$ = this.topPanelState$.subscribe(() => {
            const igoList = this.computeElementRef()[0];
            const selected = this.computeElementRef()[1];
            if (selected) {
                setTimeout(() => {
                    // To be sure the flexible component has been displayed yet
                    if (!this.isScrolledIntoView(igoList, selected)) {
                        this.adjustTopPanel(igoList, selected);
                    }
                }, FlexibleComponent.transitionTime + 50);
            }
        });
        if (this.hasFeatureEmphasisOnSelection) {
            if (!this.searchState.focusedOrResolution$$) {
                this.searchState.focusedOrResolution$$ = combineLatest([
                    this.focusedResult$,
                    this.map.viewController.resolution$
                ]).subscribe((bunch) => this.buildResultEmphasis(bunch[0], 'focused'));
            }
            if (!this.searchState.selectedOrResolution$$) {
                this.searchState.selectedOrResolution$$ = combineLatest([
                    this.searchState.selectedResult$,
                    this.map.viewController.resolution$
                ]).subscribe((bunch) => this.buildResultEmphasis(bunch[0], 'selected'));
            }
        }
        this.monitorResultOutOfView();
        this.showResultsGeometries$$ = combineLatest([
            this.searchState.searchResultsGeometryEnabled$,
            this.store.stateView.all$(),
            this.focusedResult$,
            this.searchState.selectedResult$,
            this.searchState.searchTerm$,
            this.map.viewController.resolution$
        ]).subscribe((bunch) => {
            const searchResultsGeometryEnabled = bunch[0];
            const searchResults = bunch[1];
            if (this.hasFeatureEmphasisOnSelection) {
                this.clearFeatureEmphasis('shown');
            }
            this.shownResultsGeometries.map(result => this.map.queryResultsOverlay.removeFeature(result));
            const featureToHandleGeom = searchResults
                .filter(result => result.entity.meta.dataType === FEATURE &&
                result.entity.data.geometry &&
                !result.state.selected &&
                !result.state.focused);
            featureToHandleGeom.map(result => {
                var _a;
                if (searchResultsGeometryEnabled) {
                    result.entity.data.meta.style =
                        getCommonVectorStyle(Object.assign({}, { feature: result.entity.data }, this.searchState.searchOverlayStyle, ((_a = result.entity.style) === null || _a === void 0 ? void 0 : _a.base) ? result.entity.style.base : {}));
                    this.shownResultsGeometries.push(result.entity.data);
                    this.map.queryResultsOverlay.addFeature(result.entity.data, FeatureMotion.None);
                    if (this.hasFeatureEmphasisOnSelection) {
                        this.buildResultEmphasis(result.entity, 'shown');
                    }
                }
            });
        });
    }
    monitorResultOutOfView() {
        this.isSelectedResultOutOfView$$ = combineLatest([
            this.map.viewController.state$,
            this.searchState.selectedResult$
        ])
            .pipe(debounceTime(100))
            .subscribe((bunch) => {
            const selectedResult = bunch[1];
            if (!selectedResult) {
                this.isSelectedResultOutOfView$.next(false);
                return;
            }
            if (selectedResult.data.geometry) {
                const selectedOlFeature = featureToOl(selectedResult.data, this.map.projection);
                const selectedOlFeatureExtent = computeOlFeaturesExtent(this.map, [
                    selectedOlFeature
                ]);
                this.isSelectedResultOutOfView$.next(featuresAreOutOfView(this.map, selectedOlFeatureExtent));
            }
        });
    }
    buildResultEmphasis(result, trigger) {
        var _a, _b, _c;
        if (trigger !== 'shown') {
            this.clearFeatureEmphasis(trigger);
        }
        if (!result || !result.data.geometry) {
            return;
        }
        const myOlFeature = featureToOl(result.data, this.map.projection);
        const olGeometry = myOlFeature.getGeometry();
        if (featuresAreTooDeepInView(this.map, olGeometry.getExtent(), 0.0025)) {
            const extent = olGeometry.getExtent();
            const x = extent[0] + (extent[2] - extent[0]) / 2;
            const y = extent[1] + (extent[3] - extent[1]) / 2;
            const feature1 = new olFeature({
                name: `${trigger}AbstractResult'`,
                geometry: new olPoint([x, y])
            });
            const abstractResult = featureFromOl(feature1, this.map.projection);
            let computedStyle;
            let zIndexOffset = 0;
            switch (trigger) {
                case 'focused':
                    computedStyle = getCommonVectorSelectedStyle(Object.assign({}, { feature: abstractResult }, this.searchState.searchOverlayStyleFocus, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.focus) ? result.style.focus : {}));
                    zIndexOffset = 2;
                    break;
                case 'shown':
                    computedStyle = getCommonVectorStyle(Object.assign({}, { feature: abstractResult }, this.searchState.searchOverlayStyle, ((_b = result.style) === null || _b === void 0 ? void 0 : _b.base) ? result.style.base : {}));
                    break;
                case 'selected':
                    computedStyle = getCommonVectorSelectedStyle(Object.assign({}, { feature: abstractResult }, this.searchState.searchOverlayStyleSelection, ((_c = result.style) === null || _c === void 0 ? void 0 : _c.selection) ? result.style.selection : {}));
                    zIndexOffset = 1;
                    break;
            }
            abstractResult.meta.style = computedStyle;
            abstractResult.meta.style.setZIndex(2000 + zIndexOffset);
            this.map.searchResultsOverlay.addFeature(abstractResult, FeatureMotion.None);
            if (trigger === 'focused') {
                this.abstractFocusedResult = abstractResult;
            }
            if (trigger === 'selected') {
                this.abstractSelectedResult = abstractResult;
            }
            if (trigger === 'shown') {
                this.shownResultsEmphasisGeometries.push(abstractResult);
            }
        }
        else {
            this.clearFeatureEmphasis(trigger);
        }
    }
    clearFeatureEmphasis(trigger) {
        if (trigger === 'focused' && this.abstractFocusedResult) {
            this.map.searchResultsOverlay.removeFeature(this.abstractFocusedResult);
            this.abstractFocusedResult = undefined;
        }
        if (trigger === 'selected' && this.abstractSelectedResult) {
            this.map.searchResultsOverlay.removeFeature(this.abstractSelectedResult);
            this.abstractSelectedResult = undefined;
        }
        if (trigger === 'shown') {
            this.shownResultsEmphasisGeometries.map(shownResult => this.map.searchResultsOverlay.removeFeature(shownResult));
            this.shownResultsEmphasisGeometries = [];
        }
    }
    ngOnDestroy() {
        this.topPanelState$$.unsubscribe();
        this.searchTerm$$.unsubscribe();
        if (this.isSelectedResultOutOfView$$) {
            this.isSelectedResultOutOfView$$.unsubscribe();
        }
        if (this.showResultsGeometries$$) {
            this.showResultsGeometries$$.unsubscribe();
        }
        if (this.getRoute$$) {
            this.getRoute$$.unsubscribe();
        }
    }
    /**
     * Try to add a feature to the map when it's being focused
     * @internal
     * @param result A search result that could be a feature
     */
    onResultFocus(result) {
        var _a;
        this.focusedResult$.next(result);
        if (result.meta.dataType === FEATURE && result.data.geometry) {
            result.data.meta.style = getCommonVectorSelectedStyle(Object.assign({}, { feature: result.data }, this.searchState.searchOverlayStyleFocus, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.focus) ? result.style.focus : {}));
            const feature = this.map.searchResultsOverlay.dataSource.ol.getFeatureById(result.meta.id);
            if (feature) {
                feature.setStyle(result.data.meta.style);
                return;
            }
            this.map.searchResultsOverlay.addFeature(result.data, FeatureMotion.None);
        }
    }
    onResultUnfocus(result) {
        var _a;
        this.focusedResult$.next(undefined);
        if (result.meta.dataType !== FEATURE) {
            return;
        }
        if (this.store.state.get(result).selected === true) {
            const feature = this.map.searchResultsOverlay.dataSource.ol.getFeatureById(result.meta.id);
            if (feature) {
                const style = getCommonVectorSelectedStyle(Object.assign({}, { feature: result.data }, this.searchState.searchOverlayStyleFocus, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.focus) ? result.style.focus : {}));
                feature.setStyle(style);
            }
            return;
        }
        this.map.searchResultsOverlay.removeFeature(result.data);
    }
    /**
     * Try to add a feature to the map when it's being selected
     * @internal
     * @param result A search result that could be a feature or some layer options
     */
    onResultSelect(result) {
        this.map.searchResultsOverlay.dataSource.ol.clear();
        this.tryAddFeatureToMap(result);
        this.searchState.setSelectedResult(result);
        if (this.topPanelState === 'expanded') {
            const igoList = this.computeElementRef()[0];
            const selected = this.computeElementRef()[1];
            setTimeout(() => {
                // To be sure the flexible component has been displayed yet
                if (!this.isScrolledIntoView(igoList, selected)) {
                    this.adjustTopPanel(igoList, selected);
                }
            }, FlexibleComponent.transitionTime + 50);
        }
        if (this.topPanelState === 'initial') {
            this.topPanelState = 'expanded';
        }
    }
    onSearch(event) {
        const results = event.results;
        const newResults = this.store.entities$.value
            .filter((result) => result.source !== event.research.source)
            .concat(results);
        this.store.load(newResults);
        for (const res of this.store.all()) {
            if (this.store.state.get(res).focused === true &&
                this.store.state.get(res).selected !== true) {
                this.store.state.update(res, { focused: false }, true);
            }
        }
        setTimeout(() => {
            const igoList = this.elRef.nativeElement.querySelector('igo-list');
            let moreResults;
            event.research.request.subscribe((source) => {
                if (!source[0] || !source[0].source) {
                    moreResults = null;
                }
                else if (source[0].source.getId() === 'icherche') {
                    moreResults = igoList.querySelector('.icherche .moreResults');
                }
                else if (source[0].source.getId() === 'ilayer') {
                    moreResults = igoList.querySelector('.ilayer .moreResults');
                }
                else if (source[0].source.getId() === 'nominatim') {
                    moreResults = igoList.querySelector('.nominatim .moreResults');
                }
                else {
                    moreResults = igoList.querySelector('.' + source[0].source.getId() + ' .moreResults');
                }
                if (moreResults !== null &&
                    !this.isScrolledIntoView(igoList, moreResults)) {
                    igoList.scrollTop =
                        moreResults.offsetTop +
                            moreResults.offsetHeight -
                            igoList.clientHeight;
                }
            });
        }, 250);
    }
    computeElementRef() {
        const items = document.getElementsByTagName('igo-search-results-item');
        const igoList = this.elRef.nativeElement.getElementsByTagName('igo-list')[0];
        let selectedItem;
        // eslint-disable-next-line
        for (let i = 0; i < items.length; i++) {
            if (items[i].className.includes('igo-list-item-selected')) {
                selectedItem = items[i];
            }
        }
        return [igoList, selectedItem];
    }
    adjustTopPanel(elemSource, elem) {
        if (!this.isScrolledIntoView(elemSource, elem)) {
            elemSource.scrollTop =
                elem.offsetTop +
                    elem.children[0].offsetHeight -
                    elemSource.clientHeight;
        }
    }
    toggleTopPanel() {
        if (this.topPanelState === 'expanded') {
            this.topPanelState = 'collapsed';
        }
        else {
            this.topPanelState = 'expanded';
        }
    }
    zoomToFeatureExtent() {
        if (this.feature.geometry) {
            const localOlFeature = this.format.readFeature(this.feature, {
                dataProjection: this.feature.projection,
                featureProjection: this.map.projection
            });
            moveToOlFeatures(this.map, [localOlFeature], FeatureMotion.Zoom);
        }
    }
    /**
     * Try to add a feature to the map overlay
     * @param result A search result that could be a feature
     */
    tryAddFeatureToMap(result) {
        var _a;
        if (result.meta.dataType !== FEATURE) {
            return undefined;
        }
        const feature = result.data;
        // Somethimes features have no geometry. It happens with some GetFeatureInfo
        if (!feature.geometry) {
            return;
        }
        feature.meta.style = getCommonVectorSelectedStyle(Object.assign({}, { feature }, this.searchState.searchOverlayStyleSelection, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.selection) ? result.style.selection : {}));
        this.map.searchResultsOverlay.addFeature(feature);
    }
    isScrolledIntoView(elemSource, elem) {
        const padding = 6;
        const docViewTop = elemSource.scrollTop;
        const docViewBottom = docViewTop + elemSource.clientHeight;
        const elemTop = elem.offsetTop;
        const elemBottom = elemTop + elem.clientHeight + padding;
        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
    getRoute() {
        this.toolState.toolbox.activateTool('directions');
        this.directionState.stopsStore.clearStops();
        setTimeout(() => {
            let routingCoordLoaded = false;
            if (this.getRoute$$) {
                this.getRoute$$.unsubscribe();
            }
            this.getRoute$$ = this.directionState.stopsStore.storeInitialized$.subscribe((init) => {
                if (this.directionState.stopsStore.storeInitialized$.value && !routingCoordLoaded) {
                    routingCoordLoaded = true;
                    const stop = this.directionState.stopsStore.all().find((e) => e.position === 1);
                    let coord;
                    if (this.feature.geometry) {
                        if (this.feature.geometry.type === 'Point') {
                            coord = [this.feature.geometry.coordinates[0], this.feature.geometry.coordinates[1]];
                        }
                        else {
                            const point = pointOnFeature(this.feature.geometry);
                            coord = [point.geometry.coordinates[0], point.geometry.coordinates[1]];
                        }
                    }
                    stop.text = this.featureTitle;
                    stop.coordinates = coord;
                    this.directionState.stopsStore.update(stop);
                }
            });
        }, 250);
    }
};
SearchResultsToolComponent.ɵfac = function SearchResultsToolComponent_Factory(t) { return new (t || SearchResultsToolComponent)(i0.ɵɵdirectiveInject(i1.MapState), i0.ɵɵdirectiveInject(i2.SearchState), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.ToolState), i0.ɵɵdirectiveInject(i4.DirectionState), i0.ɵɵdirectiveInject(i5.ConfigService)); };
SearchResultsToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchResultsToolComponent, selectors: [["igo-search-results-tool"]], inputs: { showIcons: "showIcons", topPanelState: "topPanelState" }, decls: 3, vars: 4, consts: [["style", "margin: 10px;", 4, "ngIf"], ["initial", "100%", "initialMobile", "100%", "collapsed", "calc(100% - 58px)", "collapsedMobile", "calc(100% - 58px)", "expanded", "60%", "expandedMobile", "60%", 3, "state", 4, "ngIf"], [2, "margin", "10px"], [1, "mat-typography"], [3, "innerHTML"], ["initial", "100%", "initialMobile", "100%", "collapsed", "calc(100% - 58px)", "collapsedMobile", "calc(100% - 58px)", "expanded", "60%", "expandedMobile", "60%", 3, "state"], ["topPanel", ""], [1, "igo-content"], ["placeholder", "false", 3, "store", "showIcons", "term", "termSplitter", "settingsChange$", "resultFocus", "resultSelect", "resultUnfocus", "resultMouseenter", "resultMouseleave", "moreResults"], ["igoSearchItemToolbar", ""], ["igoFlexibleFill", "", 1, "igo-content"], [3, "title", 4, "ngIf"], [3, "map", "layer"], [3, "title"], ["mat-icon-button", "", "panelLeftButton", "", 1, "igo-icon-button", 3, "click"], [3, "svgIcon"], ["mat-icon-button", "", "panelRightButton", "", "class", "igo-icon-button", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["igoFeatureDetailsDirective", "", 3, "feature", "map", "toolbox", "routingEvent"], ["mat-icon-button", "", "panelRightButton", "", "matTooltipShowDelay", "500", 1, "igo-icon-button", 3, "matTooltip", "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "svgIcon", "magnify-plus-outline", 3, "matBadge", "matBadgeHidden"]], template: function SearchResultsToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SearchResultsToolComponent_div_0_Template, 13, 11, "div", 0);
        i0.ɵɵtemplate(1, SearchResultsToolComponent_igo_flexible_1_Template, 10, 11, "igo-flexible", 1);
        i0.ɵɵpipe(2, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.store || ctx.store.stateView.empty);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.store && i0.ɵɵpipeBind1(2, 2, ctx.store.stateView.empty$) === false);
    } }, directives: [i6.NgIf, i7.FlexibleComponent, i8.SearchResultsComponent, i8.SearchResultAddButtonComponent, i7.PanelComponent, i9.MatButton, i10.MatIcon, i8.FeatureDetailsComponent, i8.FeatureDetailsDirective, i11.MatTooltip, i12.MatBadge], pipes: [i6.AsyncPipe, i13.TranslatePipe, i7.SanitizeHtmlPipe], encapsulation: 2, changeDetection: 0 });
SearchResultsToolComponent = __decorate([
    ToolComponent({
        name: 'searchResults',
        title: 'igo.integration.tools.searchResults',
        icon: 'magnify'
    })
], SearchResultsToolComponent);
export { SearchResultsToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchResultsToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-search-results-tool',
                templateUrl: './search-results-tool.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.MapState }, { type: i2.SearchState }, { type: i0.ElementRef }, { type: i3.ToolState }, { type: i4.DirectionState }, { type: i5.ConfigService }]; }, { showIcons: [{
            type: Input
        }], topPanelState: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMtdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy10b29sL3NlYXJjaC1yZXN1bHRzLXRvb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9zZWFyY2gvc2VhcmNoLXJlc3VsdHMtdG9vbC9zZWFyY2gtcmVzdWx0cy10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFjLGVBQWUsRUFBZ0IsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxlQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sT0FBTyxNQUFNLGVBQWUsQ0FBQztBQUdwQyxPQUFPLGNBQWMsTUFBTSx3QkFBd0IsQ0FBQztBQUlwRCxPQUFPLEVBRUwsYUFBYSxFQUViLGNBQWMsRUFDZCxpQkFBaUIsRUFFbEIsTUFBTSxjQUFjLENBQUM7QUFFdEIsT0FBTyxFQUNMLE9BQU8sRUFFUCxhQUFhLEVBR2IsZ0JBQWdCLEVBRWhCLHdCQUF3QixFQUN4QixXQUFXLEVBQ1gsYUFBYSxFQUNiLG9CQUFvQixFQUNwQiw0QkFBNEIsRUFDNUIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNyQixNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQzNDbkIsOEJBQW1FO0lBQ2pFLGtDQUFnQztJQUM5QiwwQkFBSTtJQUFBLDhCQUFRO0lBQUEsWUFBK0Q7O0lBQUEsaUJBQVM7SUFBQSxpQkFBSztJQUN6Rix5QkFBRztJQUFBLDhCQUFRO0lBQUEsWUFBOEQ7O0lBQUEsaUJBQVM7SUFBQSxpQkFBSTtJQUN0RiwwQkFBaUc7OztJQUNyRyxpQkFBVTtJQUNWLGlCQUFNOztJQUpVLGVBQStEO0lBQS9ELHlGQUErRDtJQUNoRSxlQUE4RDtJQUE5RCx3RkFBOEQ7SUFDcEUsZUFBcUY7SUFBckYseUlBQXFGOzs7SUE4QnRGLDRDQUd3Qjs7OztJQUZ0QixnQ0FBVyxvQkFBQTs7OztJQWtCZixrQ0FPa0M7SUFBaEMsc09BQStCOzs7SUFDL0IsK0JBSzBDOzs7SUFDNUMsaUJBQVM7OztJQVRQLHlPQUFnTTtJQUloTSxlQUE0RDtJQUE1RCw2RkFBNEQscUZBQUE7Ozs7SUFuQmhFLHFDQUEyRDtJQUV6RCxrQ0FJNkI7SUFBM0IsMk5BQTBCO0lBQzFCLCtCQUFzRzs7SUFDeEcsaUJBQVM7SUFFVCw4R0FjUztJQUVULCtDQUs4QjtJQUE1QixnUEFBMkI7O0lBQzdCLGlCQUFzQjtJQUN4QixpQkFBWTs7O0lBakNELDJDQUFzQjtJQU9uQixlQUFnRjtJQUFoRixpSEFBZ0Y7SUFJekYsZUFBc0I7SUFBdEIsOENBQXNCO0lBaUJ2QixlQUE0QjtJQUE1QiwrREFBNEIsbUJBQUEscUNBQUE7Ozs7SUEvRHBDLDBDQVMyRDs7SUFFekQsOEJBQXlCO0lBQ3ZCLDZDQVltQztJQUxqQyxpUEFBcUMsdU9BQUEsME9BQUEsOE9BQUEsZ1BBQUEsK05BQUE7SUFNckMsMklBS2M7SUFDaEIsaUJBQXFCO0lBQ3ZCLGlCQUFNO0lBRU4sK0JBQXlDO0lBQ3ZDLHdHQWlDWTs7SUFDZCxpQkFBTTtJQUVSLGlCQUFlOzs7SUE5RGIsZ0dBQXdEO0lBSXBELGVBQWU7SUFBZixvQ0FBZSwrQkFBQSxxQkFBQSxxQ0FBQSwyQ0FBQTtJQXNCa0IsZUFBc0I7SUFBdEIsNERBQXNCOztBRFE3RDs7R0FFRztJQVdVLDBCQUEwQixTQUExQiwwQkFBMEI7SUE2RXJDLFlBQ1UsUUFBa0IsRUFDbEIsV0FBd0IsRUFDeEIsS0FBaUIsRUFDbEIsU0FBb0IsRUFDbkIsY0FBOEIsRUFDdEMsYUFBNEI7UUFMcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBakZ4Qzs7V0FFRztRQUNNLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFFM0Isa0NBQTZCLEdBQVksS0FBSyxDQUFDO1FBSS9DLDJCQUFzQixHQUFjLEVBQUUsQ0FBQztRQUN2QyxtQ0FBOEIsR0FBYyxFQUFFLENBQUM7UUFDL0MsbUJBQWMsR0FBa0MsSUFBSSxlQUFlLENBQ3pFLFNBQVMsQ0FDVixDQUFDO1FBQ0ssK0JBQTBCLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUF3Q3hELFNBQUksR0FBRyxFQUFFLENBQUM7UUFHVixvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFVLFNBQVMsQ0FBQyxDQUFDO1FBRTFELG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQWdCLFNBQVMsQ0FBQyxDQUFDO1FBZTlELFdBQU0sR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBVXJDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUMxRCwrQkFBK0IsQ0FDaEMsQ0FBQztJQUNKLENBQUM7SUFwRUQ7OztPQUdHO0lBQ0gsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDakUsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO2FBQ3hCLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDaEMsSUFBSSxDQUNILEdBQUcsQ0FDRCxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ1osQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87WUFDckIsQ0FBQyxDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBZ0I7WUFDbEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUNmLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFZRCxJQUNJLGFBQWEsQ0FBQyxLQUFvQjtRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztJQUNwRCxDQUFDO0lBaUJELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDeEQsQ0FBQyxVQUFrQixFQUFFLEVBQUU7WUFDckIsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUNGLENBQUM7UUFFRixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRTtZQUNuRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7YUFDakM7U0FDRjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksUUFBUSxFQUFFO2dCQUNaLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsMkRBQTJEO29CQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTt3QkFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ3hDO2dCQUNILENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDM0M7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFO2dCQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixHQUFHLGFBQWEsQ0FBQztvQkFDckQsSUFBSSxDQUFDLGNBQWM7b0JBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVc7aUJBQ3BDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFzQyxFQUFFLEVBQUUsQ0FDdEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FDOUMsQ0FBQzthQUNIO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEdBQUcsYUFBYSxDQUFDO29CQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWU7b0JBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVc7aUJBQ3BDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFzQyxFQUFFLEVBQUUsQ0FDdEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FDL0MsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsYUFBYSxDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCO1lBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsY0FBYztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWU7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVc7U0FDcEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQTRHLEVBQUUsRUFBRTtZQUU1SCxNQUFNLDRCQUE0QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0IsSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQztZQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlGLE1BQU0sbUJBQW1CLEdBQUcsYUFBYTtpQkFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU87Z0JBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQzNCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUN0QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFM0IsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztnQkFDL0IsSUFBSSw0QkFBNEIsRUFBRTtvQkFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7d0JBQzNCLG9CQUFvQixDQUNsQixNQUFNLENBQUMsTUFBTSxDQUNYLEVBQUUsRUFDRixFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQXVDLEVBQUUsRUFDbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFDbkMsQ0FBQSxNQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSywwQ0FBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUMxRCxDQUFDLENBQUM7b0JBQ1AsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWUsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWUsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNGLElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFO3dCQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE1BQStCLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQzNFO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsSUFBSSxDQUFDLDJCQUEyQixHQUFHLGFBQWEsQ0FBQztZQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZTtTQUNqQyxDQUFDO2FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QixTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNuQixNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUEwQixDQUFDO1lBQ3pELElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ25CLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLE9BQU87YUFDUjtZQUNELElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hDLE1BQU0saUJBQWlCLEdBQUcsV0FBVyxDQUNuQyxjQUFjLENBQUMsSUFBSSxFQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FDcEIsQ0FBQztnQkFDRixNQUFNLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ2hFLGlCQUFpQjtpQkFDbEIsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQ2xDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsdUJBQXVCLENBQUMsQ0FDeEQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sbUJBQW1CLENBQ3pCLE1BQTZCLEVBQzdCLE9BQXFEOztRQUVyRCxJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BDLE9BQU87U0FDUjtRQUNELE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEUsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdDLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFzQyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzFHLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN0QyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxTQUFTLENBQUM7Z0JBQzdCLElBQUksRUFBRSxHQUFHLE9BQU8saUJBQWlCO2dCQUNqQyxRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDOUIsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxjQUFjLEdBQUcsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXBFLElBQUksYUFBYSxDQUFDO1lBQ2xCLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztZQUVyQixRQUFRLE9BQU8sRUFBRTtnQkFDZixLQUFLLFNBQVM7b0JBQ1osYUFBYSxHQUFHLDRCQUE0QixDQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDZCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsRUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsRUFDeEMsQ0FBQSxNQUFBLE1BQU0sQ0FBQyxLQUFLLDBDQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3BELFlBQVksR0FBRyxDQUFDLENBQUM7b0JBQ2pCLE1BQU07Z0JBQ1IsS0FBSyxPQUFPO29CQUNWLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDbkQsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLEVBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQ25DLENBQUEsTUFBQSxNQUFNLENBQUMsS0FBSywwQ0FBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxNQUFNO2dCQUNSLEtBQUssVUFBVTtvQkFDYixhQUFhLEdBQUcsNEJBQTRCLENBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNkLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxFQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUM1QyxDQUFBLE1BQUEsTUFBTSxDQUFDLEtBQUssMENBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUQsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFDakIsTUFBTTthQUNUO1lBQ0QsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1lBQzFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RSxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxjQUFjLENBQUM7YUFDN0M7WUFDRCxJQUFJLE9BQU8sS0FBSyxVQUFVLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxjQUFjLENBQUM7YUFDOUM7WUFDRCxJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDMUQ7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVPLG9CQUFvQixDQUFDLE9BQXlDO1FBQ3BFLElBQUksT0FBTyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztTQUN4QztRQUNELElBQUksT0FBTyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztTQUN6QztRQUNELElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsOEJBQThCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqSCxJQUFJLENBQUMsOEJBQThCLEdBQUcsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDcEMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGFBQWEsQ0FBQyxNQUFvQjs7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUE0QixDQUNuRCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDZCxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBdUMsRUFBRSxFQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUN4QyxDQUFBLE1BQUEsTUFBTSxDQUFDLEtBQUssMENBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVwRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0YsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQWUsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEY7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQW9COztRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUNwQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ2xELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzRixJQUFJLE9BQU8sRUFBRTtnQkFDWCxNQUFNLEtBQUssR0FBRyw0QkFBNEIsQ0FDeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ2QsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQXVDLEVBQUUsRUFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsRUFDeEMsQ0FBQSxNQUFBLE1BQU0sQ0FBQyxLQUFLLDBDQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7WUFDRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBZSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjLENBQUMsTUFBb0I7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNDLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7WUFDckMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCwyREFBMkQ7Z0JBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO29CQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDeEM7WUFDSCxDQUFDLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsS0FBc0Q7UUFDN0QsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM5QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLO2FBQzFDLE1BQU0sQ0FBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNsQyxJQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSTtnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQzNDO2dCQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDeEQ7U0FDRjtRQUVELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkUsSUFBSSxXQUFXLENBQUM7WUFDaEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUNuQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjtxQkFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssVUFBVSxFQUFFO29CQUNsRCxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2lCQUMvRDtxQkFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssUUFBUSxFQUFFO29CQUNoRCxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2lCQUM3RDtxQkFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssV0FBVyxFQUFFO29CQUNuRCxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2lCQUNoRTtxQkFBTTtvQkFDTCxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxlQUFlLENBQUMsQ0FBQztpQkFDdkY7Z0JBRUQsSUFDRSxXQUFXLEtBQUssSUFBSTtvQkFDcEIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUM5QztvQkFDQSxPQUFPLENBQUMsU0FBUzt3QkFDZixXQUFXLENBQUMsU0FBUzs0QkFDckIsV0FBVyxDQUFDLFlBQVk7NEJBQ3hCLE9BQU8sQ0FBQyxZQUFZLENBQUM7aUJBQ3hCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQzNELFVBQVUsQ0FDWCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxZQUFZLENBQUM7UUFDakIsMkJBQTJCO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRTtnQkFDekQsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsY0FBYyxDQUFDLFVBQVUsRUFBRSxJQUFJO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQzlDLFVBQVUsQ0FBQyxTQUFTO2dCQUNsQixJQUFJLENBQUMsU0FBUztvQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7b0JBQzdCLFVBQVUsQ0FBQyxZQUFZLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7WUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzNELGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQ3ZDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVTthQUN2QyxDQUFDLENBQUM7WUFDSCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGtCQUFrQixDQUFDLE1BQW9COztRQUM3QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUNwQyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE1BQU0sT0FBTyxHQUFJLE1BQWdDLENBQUMsSUFBSSxDQUFDO1FBRXZELDRFQUE0RTtRQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBNEIsQ0FDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ2QsRUFBRSxPQUFPLEVBQUUsRUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUM1QyxDQUFBLE1BQUEsTUFBTSxDQUFDLEtBQUssMENBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsVUFBVSxFQUFFLElBQUk7UUFDakMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDeEMsTUFBTSxhQUFhLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFFM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQixNQUFNLFVBQVUsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDekQsT0FBTyxVQUFVLElBQUksYUFBYSxJQUFJLE9BQU8sSUFBSSxVQUFVLENBQUM7SUFDOUQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQUU7WUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFhLEVBQUUsRUFBRTtnQkFDN0YsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDakYsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO29CQUMxQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2hGLElBQUksS0FBSyxDQUFDO29CQUNWLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7d0JBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTs0QkFDMUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN0Rjs2QkFBTTs0QkFDTCxNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDcEQsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDeEU7cUJBQ0Y7b0JBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztDQUNGLENBQUE7b0dBOWdCWSwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ2hFdkMsNkVBTU07UUFFTiwrRkF1RWU7OztRQS9FVCw4REFBcUM7UUFTeEMsZUFBdUQ7UUFBdkQsOEZBQXVEOztBRHVEN0MsMEJBQTBCO0lBVnRDLGFBQWEsQ0FBQztRQUNiLElBQUksRUFBRSxlQUFlO1FBQ3JCLEtBQUssRUFBRSxxQ0FBcUM7UUFDNUMsSUFBSSxFQUFFLFNBQVM7S0FDaEIsQ0FBQztHQU1XLDBCQUEwQixDQThnQnRDO1NBOWdCWSwwQkFBMEI7dUZBQTFCLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7K0xBS1UsU0FBUztrQkFBakIsS0FBSztZQTRERixhQUFhO2tCQURoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IG9sRm9ybWF0R2VvSlNPTiBmcm9tICdvbC9mb3JtYXQvR2VvSlNPTic7XG5pbXBvcnQgb2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IG9sUG9pbnQgZnJvbSAnb2wvZ2VvbS9Qb2ludCc7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnknO1xuXG5pbXBvcnQgcG9pbnRPbkZlYXR1cmUgZnJvbSAnQHR1cmYvcG9pbnQtb24tZmVhdHVyZSc7XG5cbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuaW1wb3J0IHtcbiAgRW50aXR5U3RvcmUsXG4gIFRvb2xDb21wb25lbnQsXG4gIEZsZXhpYmxlU3RhdGUsXG4gIGdldEVudGl0eVRpdGxlLFxuICBGbGV4aWJsZUNvbXBvbmVudCxcbiAgRW50aXR5U3RhdGVcbn0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgRkVBVFVSRSxcbiAgRmVhdHVyZSxcbiAgRmVhdHVyZU1vdGlvbixcbiAgU2VhcmNoUmVzdWx0LFxuICBJZ29NYXAsXG4gIG1vdmVUb09sRmVhdHVyZXMsXG4gIFJlc2VhcmNoLFxuICBmZWF0dXJlc0FyZVRvb0RlZXBJblZpZXcsXG4gIGZlYXR1cmVUb09sLFxuICBmZWF0dXJlRnJvbU9sLFxuICBnZXRDb21tb25WZWN0b3JTdHlsZSxcbiAgZ2V0Q29tbW9uVmVjdG9yU2VsZWN0ZWRTdHlsZSxcbiAgY29tcHV0ZU9sRmVhdHVyZXNFeHRlbnQsXG4gIGZlYXR1cmVzQXJlT3V0T2ZWaWV3XG59IGZyb20gJ0BpZ28yL2dlbyc7XG5cbmltcG9ydCB7IE1hcFN0YXRlIH0gZnJvbSAnLi4vLi4vbWFwL21hcC5zdGF0ZSc7XG5cbmltcG9ydCB7IFNlYXJjaFN0YXRlIH0gZnJvbSAnLi4vc2VhcmNoLnN0YXRlJztcbmltcG9ydCB7IFRvb2xTdGF0ZSB9IGZyb20gJy4uLy4uL3Rvb2wvdG9vbC5zdGF0ZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb25TdGF0ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGlvbnMvZGlyZWN0aW9ucy5zdGF0ZSc7XG5cbi8qKlxuICogVG9vbCB0byBicm93c2UgdGhlIHNlYXJjaCByZXN1bHRzXG4gKi9cbkBUb29sQ29tcG9uZW50KHtcbiAgbmFtZTogJ3NlYXJjaFJlc3VsdHMnLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5zZWFyY2hSZXN1bHRzJyxcbiAgaWNvbjogJ21hZ25pZnknXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXNlYXJjaC1yZXN1bHRzLXRvb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXJlc3VsdHMtdG9vbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdHNUb29sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogdG8gc2hvdyBoaWRlIHJlc3VsdHMgaWNvbnNcbiAgICovXG4gIEBJbnB1dCgpIHNob3dJY29uczogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBoYXNGZWF0dXJlRW1waGFzaXNPblNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc2hvd1Jlc3VsdHNHZW9tZXRyaWVzJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBnZXRSb3V0ZSQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc2hvd25SZXN1bHRzR2VvbWV0cmllczogRmVhdHVyZVtdID0gW107XG4gIHByaXZhdGUgc2hvd25SZXN1bHRzRW1waGFzaXNHZW9tZXRyaWVzOiBGZWF0dXJlW10gPSBbXTtcbiAgcHJpdmF0ZSBmb2N1c2VkUmVzdWx0JDogQmVoYXZpb3JTdWJqZWN0PFNlYXJjaFJlc3VsdD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFxuICAgIHVuZGVmaW5lZFxuICApO1xuICBwdWJsaWMgaXNTZWxlY3RlZFJlc3VsdE91dE9mVmlldyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcHJpdmF0ZSBpc1NlbGVjdGVkUmVzdWx0T3V0T2ZWaWV3JCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBhYnN0cmFjdEZvY3VzZWRSZXN1bHQ6IEZlYXR1cmU7XG4gIHByaXZhdGUgYWJzdHJhY3RTZWxlY3RlZFJlc3VsdDogRmVhdHVyZTtcblxuICAvKipcbiAgICogU3RvcmUgaG9sZGluZyB0aGUgc2VhcmNoIHJlc3VsdHNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgc3RvcmUoKTogRW50aXR5U3RvcmU8U2VhcmNoUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoU3RhdGUuc3RvcmU7XG4gIH1cblxuICAvKipcbiAgICogTWFwIHRvIGRpc3BsYXkgdGhlIHJlc3VsdHMgb25cbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMubWFwU3RhdGUubWFwO1xuICB9XG5cbiAgZ2V0IGZlYXR1cmVUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZlYXR1cmUgPyBnZXRFbnRpdHlUaXRsZSh0aGlzLmZlYXR1cmUpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGZlYXR1cmUkKCk6IE9ic2VydmFibGU8RmVhdHVyZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnN0YXRlVmlld1xuICAgICAgLmZpcnN0QnkkKChlKSA9PiBlLnN0YXRlLmZvY3VzZWQpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIChlbGVtZW50KSA9PlxuICAgICAgICAgICh0aGlzLmZlYXR1cmUgPSBlbGVtZW50XG4gICAgICAgICAgICA/IChlbGVtZW50LmVudGl0eS5kYXRhIGFzIEZlYXR1cmUpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBmZWF0dXJlOiBGZWF0dXJlO1xuXG4gIHB1YmxpYyB0ZXJtID0gJyc7XG4gIHByaXZhdGUgc2VhcmNoVGVybSQkOiBTdWJzY3JpcHRpb247XG5cbiAgcHVibGljIHNldHRpbmdzQ2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odW5kZWZpbmVkKTtcblxuICBwdWJsaWMgdG9wUGFuZWxTdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZsZXhpYmxlU3RhdGU+KCdpbml0aWFsJyk7XG4gIHByaXZhdGUgdG9wUGFuZWxTdGF0ZSQkOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KClcbiAgc2V0IHRvcFBhbmVsU3RhdGUodmFsdWU6IEZsZXhpYmxlU3RhdGUpIHtcbiAgICB0aGlzLnRvcFBhbmVsU3RhdGUkLm5leHQodmFsdWUpO1xuICB9XG4gIGdldCB0b3BQYW5lbFN0YXRlKCk6IEZsZXhpYmxlU3RhdGUge1xuICAgIHJldHVybiB0aGlzLnRvcFBhbmVsU3RhdGUkLnZhbHVlO1xuICB9XG5cbiAgZ2V0IHRlcm1TcGxpdHRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaFN0YXRlLnNlYXJjaFRlcm1TcGxpdHRlciQudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdCA9IG5ldyBvbEZvcm1hdEdlb0pTT04oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1hcFN0YXRlOiBNYXBTdGF0ZSxcbiAgICBwcml2YXRlIHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZSxcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyB0b29sU3RhdGU6IFRvb2xTdGF0ZSxcbiAgICBwcml2YXRlIGRpcmVjdGlvblN0YXRlOiBEaXJlY3Rpb25TdGF0ZSxcbiAgICBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaGFzRmVhdHVyZUVtcGhhc2lzT25TZWxlY3Rpb24gPSBjb25maWdTZXJ2aWNlLmdldENvbmZpZyhcbiAgICAgICdoYXNGZWF0dXJlRW1waGFzaXNPblNlbGVjdGlvbidcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWFyY2hUZXJtJCQgPSB0aGlzLnNlYXJjaFN0YXRlLnNlYXJjaFRlcm0kLnN1YnNjcmliZShcbiAgICAgIChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHNlYXJjaFRlcm0gIT09IHVuZGVmaW5lZCAmJiBzZWFyY2hUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50ZXJtID0gc2VhcmNoVGVybTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IHJlcyBvZiB0aGlzLnN0b3JlLnN0YXRlVmlldy5hbGwkKCkudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmdldChyZXMuZW50aXR5KS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnRvcFBhbmVsU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoU3RhdGUuc2VhcmNoU2V0dGluZ3NDaGFuZ2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldHRpbmdzQ2hhbmdlJC5uZXh0KHRydWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50b3BQYW5lbFN0YXRlJCQgPSB0aGlzLnRvcFBhbmVsU3RhdGUkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBpZ29MaXN0ID0gdGhpcy5jb21wdXRlRWxlbWVudFJlZigpWzBdO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmNvbXB1dGVFbGVtZW50UmVmKClbMV07XG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gVG8gYmUgc3VyZSB0aGUgZmxleGlibGUgY29tcG9uZW50IGhhcyBiZWVuIGRpc3BsYXllZCB5ZXRcbiAgICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxlZEludG9WaWV3KGlnb0xpc3QsIHNlbGVjdGVkKSkge1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RUb3BQYW5lbChpZ29MaXN0LCBzZWxlY3RlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBGbGV4aWJsZUNvbXBvbmVudC50cmFuc2l0aW9uVGltZSArIDUwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmhhc0ZlYXR1cmVFbXBoYXNpc09uU2VsZWN0aW9uKSB7XG4gICAgICBpZiAoIXRoaXMuc2VhcmNoU3RhdGUuZm9jdXNlZE9yUmVzb2x1dGlvbiQkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU3RhdGUuZm9jdXNlZE9yUmVzb2x1dGlvbiQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgdGhpcy5mb2N1c2VkUmVzdWx0JCxcbiAgICAgICAgICB0aGlzLm1hcC52aWV3Q29udHJvbGxlci5yZXNvbHV0aW9uJFxuICAgICAgICBdKS5zdWJzY3JpYmUoKGJ1bmNoOiBbU2VhcmNoUmVzdWx0PEZlYXR1cmU+LCBudW1iZXJdKSA9PlxuICAgICAgICAgIHRoaXMuYnVpbGRSZXN1bHRFbXBoYXNpcyhidW5jaFswXSwgJ2ZvY3VzZWQnKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuc2VhcmNoU3RhdGUuc2VsZWN0ZWRPclJlc29sdXRpb24kJCkge1xuICAgICAgICB0aGlzLnNlYXJjaFN0YXRlLnNlbGVjdGVkT3JSZXNvbHV0aW9uJCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICB0aGlzLnNlYXJjaFN0YXRlLnNlbGVjdGVkUmVzdWx0JCxcbiAgICAgICAgICB0aGlzLm1hcC52aWV3Q29udHJvbGxlci5yZXNvbHV0aW9uJFxuICAgICAgICBdKS5zdWJzY3JpYmUoKGJ1bmNoOiBbU2VhcmNoUmVzdWx0PEZlYXR1cmU+LCBudW1iZXJdKSA9PlxuICAgICAgICAgIHRoaXMuYnVpbGRSZXN1bHRFbXBoYXNpcyhidW5jaFswXSwgJ3NlbGVjdGVkJylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tb25pdG9yUmVzdWx0T3V0T2ZWaWV3KCk7XG5cbiAgICB0aGlzLnNob3dSZXN1bHRzR2VvbWV0cmllcyQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnNlYXJjaFN0YXRlLnNlYXJjaFJlc3VsdHNHZW9tZXRyeUVuYWJsZWQkLFxuICAgICAgdGhpcy5zdG9yZS5zdGF0ZVZpZXcuYWxsJCgpLFxuICAgICAgdGhpcy5mb2N1c2VkUmVzdWx0JCxcbiAgICAgIHRoaXMuc2VhcmNoU3RhdGUuc2VsZWN0ZWRSZXN1bHQkLFxuICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5zZWFyY2hUZXJtJCxcbiAgICAgIHRoaXMubWFwLnZpZXdDb250cm9sbGVyLnJlc29sdXRpb24kXG4gICAgXSkuc3Vic2NyaWJlKChidW5jaDogW2Jvb2xlYW4sIHsgZW50aXR5OiBTZWFyY2hSZXN1bHQsIHN0YXRlOiBFbnRpdHlTdGF0ZSB9W10sIFNlYXJjaFJlc3VsdCwgU2VhcmNoUmVzdWx0LCBzdHJpbmcsIG51bWJlcl0pID0+IHtcblxuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0c0dlb21ldHJ5RW5hYmxlZCA9IGJ1bmNoWzBdO1xuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGJ1bmNoWzFdO1xuXG4gICAgICBpZiAodGhpcy5oYXNGZWF0dXJlRW1waGFzaXNPblNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLmNsZWFyRmVhdHVyZUVtcGhhc2lzKCdzaG93bicpO1xuICAgICAgfVxuICAgICAgdGhpcy5zaG93blJlc3VsdHNHZW9tZXRyaWVzLm1hcChyZXN1bHQgPT4gdGhpcy5tYXAucXVlcnlSZXN1bHRzT3ZlcmxheS5yZW1vdmVGZWF0dXJlKHJlc3VsdCkpO1xuICAgICAgY29uc3QgZmVhdHVyZVRvSGFuZGxlR2VvbSA9IHNlYXJjaFJlc3VsdHNcbiAgICAgICAgLmZpbHRlcihyZXN1bHQgPT5cbiAgICAgICAgICByZXN1bHQuZW50aXR5Lm1ldGEuZGF0YVR5cGUgPT09IEZFQVRVUkUgJiZcbiAgICAgICAgICByZXN1bHQuZW50aXR5LmRhdGEuZ2VvbWV0cnkgJiZcbiAgICAgICAgICAhcmVzdWx0LnN0YXRlLnNlbGVjdGVkICYmXG4gICAgICAgICAgIXJlc3VsdC5zdGF0ZS5mb2N1c2VkKTtcblxuICAgICAgZmVhdHVyZVRvSGFuZGxlR2VvbS5tYXAocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHNHZW9tZXRyeUVuYWJsZWQpIHtcbiAgICAgICAgICByZXN1bHQuZW50aXR5LmRhdGEubWV0YS5zdHlsZSA9XG4gICAgICAgICAgICBnZXRDb21tb25WZWN0b3JTdHlsZShcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICB7IGZlYXR1cmU6IHJlc3VsdC5lbnRpdHkuZGF0YSBhcyBGZWF0dXJlIHwgb2xGZWF0dXJlPE9sR2VvbWV0cnk+IH0sXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5zZWFyY2hPdmVybGF5U3R5bGUsXG4gICAgICAgICAgICAgICAgcmVzdWx0LmVudGl0eS5zdHlsZT8uYmFzZSA/IHJlc3VsdC5lbnRpdHkuc3R5bGUuYmFzZSA6IHt9XG4gICAgICAgICAgICAgICkpO1xuICAgICAgICAgIHRoaXMuc2hvd25SZXN1bHRzR2VvbWV0cmllcy5wdXNoKHJlc3VsdC5lbnRpdHkuZGF0YSBhcyBGZWF0dXJlKTtcbiAgICAgICAgICB0aGlzLm1hcC5xdWVyeVJlc3VsdHNPdmVybGF5LmFkZEZlYXR1cmUocmVzdWx0LmVudGl0eS5kYXRhIGFzIEZlYXR1cmUsIEZlYXR1cmVNb3Rpb24uTm9uZSk7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRmVhdHVyZUVtcGhhc2lzT25TZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRSZXN1bHRFbXBoYXNpcyhyZXN1bHQuZW50aXR5IGFzIFNlYXJjaFJlc3VsdDxGZWF0dXJlPiwgJ3Nob3duJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbW9uaXRvclJlc3VsdE91dE9mVmlldygpIHtcbiAgICB0aGlzLmlzU2VsZWN0ZWRSZXN1bHRPdXRPZlZpZXckJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5tYXAudmlld0NvbnRyb2xsZXIuc3RhdGUkLFxuICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5zZWxlY3RlZFJlc3VsdCRcbiAgICBdKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpXG4gICAgICAuc3Vic2NyaWJlKChidW5jaCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFJlc3VsdCA9IGJ1bmNoWzFdIGFzIFNlYXJjaFJlc3VsdDxGZWF0dXJlPjtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZFJlc3VsdE91dE9mVmlldyQubmV4dChmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3RlZFJlc3VsdC5kYXRhLmdlb21ldHJ5KSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPbEZlYXR1cmUgPSBmZWF0dXJlVG9PbChcbiAgICAgICAgICAgIHNlbGVjdGVkUmVzdWx0LmRhdGEsXG4gICAgICAgICAgICB0aGlzLm1hcC5wcm9qZWN0aW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9sRmVhdHVyZUV4dGVudCA9IGNvbXB1dGVPbEZlYXR1cmVzRXh0ZW50KHRoaXMubWFwLCBbXG4gICAgICAgICAgICBzZWxlY3RlZE9sRmVhdHVyZVxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZFJlc3VsdE91dE9mVmlldyQubmV4dChcbiAgICAgICAgICAgIGZlYXR1cmVzQXJlT3V0T2ZWaWV3KHRoaXMubWFwLCBzZWxlY3RlZE9sRmVhdHVyZUV4dGVudClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSZXN1bHRFbXBoYXNpcyhcbiAgICByZXN1bHQ6IFNlYXJjaFJlc3VsdDxGZWF0dXJlPixcbiAgICB0cmlnZ2VyOiAnc2VsZWN0ZWQnIHwgJ2ZvY3VzZWQnIHwgJ3Nob3duJyB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBpZiAodHJpZ2dlciAhPT0gJ3Nob3duJykge1xuICAgICAgdGhpcy5jbGVhckZlYXR1cmVFbXBoYXNpcyh0cmlnZ2VyKTtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5kYXRhLmdlb21ldHJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG15T2xGZWF0dXJlID0gZmVhdHVyZVRvT2wocmVzdWx0LmRhdGEsIHRoaXMubWFwLnByb2plY3Rpb24pO1xuICAgIGNvbnN0IG9sR2VvbWV0cnkgPSBteU9sRmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgIGlmIChmZWF0dXJlc0FyZVRvb0RlZXBJblZpZXcodGhpcy5tYXAsIG9sR2VvbWV0cnkuZ2V0RXh0ZW50KCkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sIDAuMDAyNSkpIHtcbiAgICAgIGNvbnN0IGV4dGVudCA9IG9sR2VvbWV0cnkuZ2V0RXh0ZW50KCk7XG4gICAgICBjb25zdCB4ID0gZXh0ZW50WzBdICsgKGV4dGVudFsyXSAtIGV4dGVudFswXSkgLyAyO1xuICAgICAgY29uc3QgeSA9IGV4dGVudFsxXSArIChleHRlbnRbM10gLSBleHRlbnRbMV0pIC8gMjtcbiAgICAgIGNvbnN0IGZlYXR1cmUxID0gbmV3IG9sRmVhdHVyZSh7XG4gICAgICAgIG5hbWU6IGAke3RyaWdnZXJ9QWJzdHJhY3RSZXN1bHQnYCxcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBvbFBvaW50KFt4LCB5XSlcbiAgICAgIH0pO1xuICAgICAgY29uc3QgYWJzdHJhY3RSZXN1bHQgPSBmZWF0dXJlRnJvbU9sKGZlYXR1cmUxLCB0aGlzLm1hcC5wcm9qZWN0aW9uKTtcblxuICAgICAgbGV0IGNvbXB1dGVkU3R5bGU7XG4gICAgICBsZXQgekluZGV4T2Zmc2V0ID0gMDtcblxuICAgICAgc3dpdGNoICh0cmlnZ2VyKSB7XG4gICAgICAgIGNhc2UgJ2ZvY3VzZWQnOlxuICAgICAgICAgIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21tb25WZWN0b3JTZWxlY3RlZFN0eWxlKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgICAgICAgeyBmZWF0dXJlOiBhYnN0cmFjdFJlc3VsdCB9LFxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXRlLnNlYXJjaE92ZXJsYXlTdHlsZUZvY3VzLFxuICAgICAgICAgICAgICByZXN1bHQuc3R5bGU/LmZvY3VzID8gcmVzdWx0LnN0eWxlLmZvY3VzIDoge30pKTtcbiAgICAgICAgICB6SW5kZXhPZmZzZXQgPSAyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzaG93bic6XG4gICAgICAgICAgY29tcHV0ZWRTdHlsZSA9IGdldENvbW1vblZlY3RvclN0eWxlKE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgICAgICB7IGZlYXR1cmU6IGFic3RyYWN0UmVzdWx0IH0sXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXRlLnNlYXJjaE92ZXJsYXlTdHlsZSxcbiAgICAgICAgICAgIHJlc3VsdC5zdHlsZT8uYmFzZSA/IHJlc3VsdC5zdHlsZS5iYXNlIDoge30pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICAgIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21tb25WZWN0b3JTZWxlY3RlZFN0eWxlKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgICAgICAgeyBmZWF0dXJlOiBhYnN0cmFjdFJlc3VsdCB9LFxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXRlLnNlYXJjaE92ZXJsYXlTdHlsZVNlbGVjdGlvbixcbiAgICAgICAgICAgICAgcmVzdWx0LnN0eWxlPy5zZWxlY3Rpb24gPyByZXN1bHQuc3R5bGUuc2VsZWN0aW9uIDoge30pKTtcbiAgICAgICAgICB6SW5kZXhPZmZzZXQgPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYWJzdHJhY3RSZXN1bHQubWV0YS5zdHlsZSA9IGNvbXB1dGVkU3R5bGU7XG4gICAgICBhYnN0cmFjdFJlc3VsdC5tZXRhLnN0eWxlLnNldFpJbmRleCgyMDAwICsgekluZGV4T2Zmc2V0KTtcbiAgICAgIHRoaXMubWFwLnNlYXJjaFJlc3VsdHNPdmVybGF5LmFkZEZlYXR1cmUoYWJzdHJhY3RSZXN1bHQsIEZlYXR1cmVNb3Rpb24uTm9uZSk7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2ZvY3VzZWQnKSB7XG4gICAgICAgIHRoaXMuYWJzdHJhY3RGb2N1c2VkUmVzdWx0ID0gYWJzdHJhY3RSZXN1bHQ7XG4gICAgICB9XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ3NlbGVjdGVkJykge1xuICAgICAgICB0aGlzLmFic3RyYWN0U2VsZWN0ZWRSZXN1bHQgPSBhYnN0cmFjdFJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmICh0cmlnZ2VyID09PSAnc2hvd24nKSB7XG4gICAgICAgIHRoaXMuc2hvd25SZXN1bHRzRW1waGFzaXNHZW9tZXRyaWVzLnB1c2goYWJzdHJhY3RSZXN1bHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyRmVhdHVyZUVtcGhhc2lzKHRyaWdnZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJGZWF0dXJlRW1waGFzaXModHJpZ2dlcjogJ3NlbGVjdGVkJyB8ICdmb2N1c2VkJyB8ICdzaG93bicpIHtcbiAgICBpZiAodHJpZ2dlciA9PT0gJ2ZvY3VzZWQnICYmIHRoaXMuYWJzdHJhY3RGb2N1c2VkUmVzdWx0KSB7XG4gICAgICB0aGlzLm1hcC5zZWFyY2hSZXN1bHRzT3ZlcmxheS5yZW1vdmVGZWF0dXJlKHRoaXMuYWJzdHJhY3RGb2N1c2VkUmVzdWx0KTtcbiAgICAgIHRoaXMuYWJzdHJhY3RGb2N1c2VkUmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHJpZ2dlciA9PT0gJ3NlbGVjdGVkJyAmJiB0aGlzLmFic3RyYWN0U2VsZWN0ZWRSZXN1bHQpIHtcbiAgICAgIHRoaXMubWFwLnNlYXJjaFJlc3VsdHNPdmVybGF5LnJlbW92ZUZlYXR1cmUodGhpcy5hYnN0cmFjdFNlbGVjdGVkUmVzdWx0KTtcbiAgICAgIHRoaXMuYWJzdHJhY3RTZWxlY3RlZFJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRyaWdnZXIgPT09ICdzaG93bicpIHtcbiAgICAgIHRoaXMuc2hvd25SZXN1bHRzRW1waGFzaXNHZW9tZXRyaWVzLm1hcChzaG93blJlc3VsdCA9PiB0aGlzLm1hcC5zZWFyY2hSZXN1bHRzT3ZlcmxheS5yZW1vdmVGZWF0dXJlKHNob3duUmVzdWx0KSk7XG4gICAgICB0aGlzLnNob3duUmVzdWx0c0VtcGhhc2lzR2VvbWV0cmllcyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudG9wUGFuZWxTdGF0ZSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zZWFyY2hUZXJtJCQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkUmVzdWx0T3V0T2ZWaWV3JCQpIHtcbiAgICAgIHRoaXMuaXNTZWxlY3RlZFJlc3VsdE91dE9mVmlldyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dSZXN1bHRzR2VvbWV0cmllcyQkKSB7XG4gICAgICB0aGlzLnNob3dSZXN1bHRzR2VvbWV0cmllcyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldFJvdXRlJCQpIHtcbiAgICAgIHRoaXMuZ2V0Um91dGUkJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gYWRkIGEgZmVhdHVyZSB0byB0aGUgbWFwIHdoZW4gaXQncyBiZWluZyBmb2N1c2VkXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAcGFyYW0gcmVzdWx0IEEgc2VhcmNoIHJlc3VsdCB0aGF0IGNvdWxkIGJlIGEgZmVhdHVyZVxuICAgKi9cbiAgb25SZXN1bHRGb2N1cyhyZXN1bHQ6IFNlYXJjaFJlc3VsdCkge1xuICAgIHRoaXMuZm9jdXNlZFJlc3VsdCQubmV4dChyZXN1bHQpO1xuICAgIGlmIChyZXN1bHQubWV0YS5kYXRhVHlwZSA9PT0gRkVBVFVSRSAmJiByZXN1bHQuZGF0YS5nZW9tZXRyeSkge1xuICAgICAgcmVzdWx0LmRhdGEubWV0YS5zdHlsZSA9IGdldENvbW1vblZlY3RvclNlbGVjdGVkU3R5bGUoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgICAgeyBmZWF0dXJlOiByZXN1bHQuZGF0YSBhcyBGZWF0dXJlIHwgb2xGZWF0dXJlPE9sR2VvbWV0cnk+IH0sXG4gICAgICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5zZWFyY2hPdmVybGF5U3R5bGVGb2N1cyxcbiAgICAgICAgICByZXN1bHQuc3R5bGU/LmZvY3VzID8gcmVzdWx0LnN0eWxlLmZvY3VzIDoge30pKTtcblxuICAgICAgY29uc3QgZmVhdHVyZSA9IHRoaXMubWFwLnNlYXJjaFJlc3VsdHNPdmVybGF5LmRhdGFTb3VyY2Uub2wuZ2V0RmVhdHVyZUJ5SWQocmVzdWx0Lm1ldGEuaWQpO1xuICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgZmVhdHVyZS5zZXRTdHlsZShyZXN1bHQuZGF0YS5tZXRhLnN0eWxlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5tYXAuc2VhcmNoUmVzdWx0c092ZXJsYXkuYWRkRmVhdHVyZShyZXN1bHQuZGF0YSBhcyBGZWF0dXJlLCBGZWF0dXJlTW90aW9uLk5vbmUpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzdWx0VW5mb2N1cyhyZXN1bHQ6IFNlYXJjaFJlc3VsdCkge1xuICAgIHRoaXMuZm9jdXNlZFJlc3VsdCQubmV4dCh1bmRlZmluZWQpO1xuICAgIGlmIChyZXN1bHQubWV0YS5kYXRhVHlwZSAhPT0gRkVBVFVSRSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmdldChyZXN1bHQpLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBmZWF0dXJlID0gdGhpcy5tYXAuc2VhcmNoUmVzdWx0c092ZXJsYXkuZGF0YVNvdXJjZS5vbC5nZXRGZWF0dXJlQnlJZChyZXN1bHQubWV0YS5pZCk7XG4gICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbW1vblZlY3RvclNlbGVjdGVkU3R5bGUoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgICAgIHsgZmVhdHVyZTogcmVzdWx0LmRhdGEgYXMgRmVhdHVyZSB8IG9sRmVhdHVyZTxPbEdlb21ldHJ5PiB9LFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5zZWFyY2hPdmVybGF5U3R5bGVGb2N1cyxcbiAgICAgICAgICAgIHJlc3VsdC5zdHlsZT8uZm9jdXMgPyByZXN1bHQuc3R5bGUuZm9jdXMgOiB7fSkpO1xuICAgICAgICBmZWF0dXJlLnNldFN0eWxlKHN0eWxlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5tYXAuc2VhcmNoUmVzdWx0c092ZXJsYXkucmVtb3ZlRmVhdHVyZShyZXN1bHQuZGF0YSBhcyBGZWF0dXJlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gYWRkIGEgZmVhdHVyZSB0byB0aGUgbWFwIHdoZW4gaXQncyBiZWluZyBzZWxlY3RlZFxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIHJlc3VsdCBBIHNlYXJjaCByZXN1bHQgdGhhdCBjb3VsZCBiZSBhIGZlYXR1cmUgb3Igc29tZSBsYXllciBvcHRpb25zXG4gICAqL1xuICBvblJlc3VsdFNlbGVjdChyZXN1bHQ6IFNlYXJjaFJlc3VsdCkge1xuICAgIHRoaXMubWFwLnNlYXJjaFJlc3VsdHNPdmVybGF5LmRhdGFTb3VyY2Uub2wuY2xlYXIoKTtcbiAgICB0aGlzLnRyeUFkZEZlYXR1cmVUb01hcChyZXN1bHQpO1xuICAgIHRoaXMuc2VhcmNoU3RhdGUuc2V0U2VsZWN0ZWRSZXN1bHQocmVzdWx0KTtcblxuICAgIGlmICh0aGlzLnRvcFBhbmVsU3RhdGUgPT09ICdleHBhbmRlZCcpIHtcbiAgICAgIGNvbnN0IGlnb0xpc3QgPSB0aGlzLmNvbXB1dGVFbGVtZW50UmVmKClbMF07XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuY29tcHV0ZUVsZW1lbnRSZWYoKVsxXTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBUbyBiZSBzdXJlIHRoZSBmbGV4aWJsZSBjb21wb25lbnQgaGFzIGJlZW4gZGlzcGxheWVkIHlldFxuICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxlZEludG9WaWV3KGlnb0xpc3QsIHNlbGVjdGVkKSkge1xuICAgICAgICAgIHRoaXMuYWRqdXN0VG9wUGFuZWwoaWdvTGlzdCwgc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICB9LCBGbGV4aWJsZUNvbXBvbmVudC50cmFuc2l0aW9uVGltZSArIDUwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b3BQYW5lbFN0YXRlID09PSAnaW5pdGlhbCcpIHtcbiAgICAgIHRoaXMudG9wUGFuZWxTdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2goZXZlbnQ6IHsgcmVzZWFyY2g6IFJlc2VhcmNoOyByZXN1bHRzOiBTZWFyY2hSZXN1bHRbXSB9KSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IGV2ZW50LnJlc3VsdHM7XG4gICAgY29uc3QgbmV3UmVzdWx0cyA9IHRoaXMuc3RvcmUuZW50aXRpZXMkLnZhbHVlXG4gICAgICAuZmlsdGVyKChyZXN1bHQ6IFNlYXJjaFJlc3VsdCkgPT4gcmVzdWx0LnNvdXJjZSAhPT0gZXZlbnQucmVzZWFyY2guc291cmNlKVxuICAgICAgLmNvbmNhdChyZXN1bHRzKTtcblxuICAgIHRoaXMuc3RvcmUubG9hZChuZXdSZXN1bHRzKTtcblxuICAgIGZvciAoY29uc3QgcmVzIG9mIHRoaXMuc3RvcmUuYWxsKCkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zdG9yZS5zdGF0ZS5nZXQocmVzKS5mb2N1c2VkID09PSB0cnVlICYmXG4gICAgICAgIHRoaXMuc3RvcmUuc3RhdGUuZ2V0KHJlcykuc2VsZWN0ZWQgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICB0aGlzLnN0b3JlLnN0YXRlLnVwZGF0ZShyZXMsIHsgZm9jdXNlZDogZmFsc2UgfSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBpZ29MaXN0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lnby1saXN0Jyk7XG4gICAgICBsZXQgbW9yZVJlc3VsdHM7XG4gICAgICBldmVudC5yZXNlYXJjaC5yZXF1ZXN0LnN1YnNjcmliZSgoc291cmNlKSA9PiB7XG4gICAgICAgIGlmICghc291cmNlWzBdIHx8ICFzb3VyY2VbMF0uc291cmNlKSB7XG4gICAgICAgICAgbW9yZVJlc3VsdHMgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZVswXS5zb3VyY2UuZ2V0SWQoKSA9PT0gJ2ljaGVyY2hlJykge1xuICAgICAgICAgIG1vcmVSZXN1bHRzID0gaWdvTGlzdC5xdWVyeVNlbGVjdG9yKCcuaWNoZXJjaGUgLm1vcmVSZXN1bHRzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlWzBdLnNvdXJjZS5nZXRJZCgpID09PSAnaWxheWVyJykge1xuICAgICAgICAgIG1vcmVSZXN1bHRzID0gaWdvTGlzdC5xdWVyeVNlbGVjdG9yKCcuaWxheWVyIC5tb3JlUmVzdWx0cycpO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZVswXS5zb3VyY2UuZ2V0SWQoKSA9PT0gJ25vbWluYXRpbScpIHtcbiAgICAgICAgICBtb3JlUmVzdWx0cyA9IGlnb0xpc3QucXVlcnlTZWxlY3RvcignLm5vbWluYXRpbSAubW9yZVJlc3VsdHMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3JlUmVzdWx0cyA9IGlnb0xpc3QucXVlcnlTZWxlY3RvcignLicgKyBzb3VyY2VbMF0uc291cmNlLmdldElkKCkgKyAnIC5tb3JlUmVzdWx0cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vcmVSZXN1bHRzICE9PSBudWxsICYmXG4gICAgICAgICAgIXRoaXMuaXNTY3JvbGxlZEludG9WaWV3KGlnb0xpc3QsIG1vcmVSZXN1bHRzKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZ29MaXN0LnNjcm9sbFRvcCA9XG4gICAgICAgICAgICBtb3JlUmVzdWx0cy5vZmZzZXRUb3AgK1xuICAgICAgICAgICAgbW9yZVJlc3VsdHMub2Zmc2V0SGVpZ2h0IC1cbiAgICAgICAgICAgIGlnb0xpc3QuY2xpZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAyNTApO1xuICB9XG5cbiAgY29tcHV0ZUVsZW1lbnRSZWYoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWdvLXNlYXJjaC1yZXN1bHRzLWl0ZW0nKTtcbiAgICBjb25zdCBpZ29MaXN0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFxuICAgICAgJ2lnby1saXN0J1xuICAgIClbMF07XG4gICAgbGV0IHNlbGVjdGVkSXRlbTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaXRlbXNbaV0uY2xhc3NOYW1lLmluY2x1ZGVzKCdpZ28tbGlzdC1pdGVtLXNlbGVjdGVkJykpIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gaXRlbXNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbaWdvTGlzdCwgc2VsZWN0ZWRJdGVtXTtcbiAgfVxuXG4gIGFkanVzdFRvcFBhbmVsKGVsZW1Tb3VyY2UsIGVsZW0pIHtcbiAgICBpZiAoIXRoaXMuaXNTY3JvbGxlZEludG9WaWV3KGVsZW1Tb3VyY2UsIGVsZW0pKSB7XG4gICAgICBlbGVtU291cmNlLnNjcm9sbFRvcCA9XG4gICAgICAgIGVsZW0ub2Zmc2V0VG9wICtcbiAgICAgICAgZWxlbS5jaGlsZHJlblswXS5vZmZzZXRIZWlnaHQgLVxuICAgICAgICBlbGVtU291cmNlLmNsaWVudEhlaWdodDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVUb3BQYW5lbCgpIHtcbiAgICBpZiAodGhpcy50b3BQYW5lbFN0YXRlID09PSAnZXhwYW5kZWQnKSB7XG4gICAgICB0aGlzLnRvcFBhbmVsU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3BQYW5lbFN0YXRlID0gJ2V4cGFuZGVkJztcbiAgICB9XG4gIH1cblxuICB6b29tVG9GZWF0dXJlRXh0ZW50KCkge1xuICAgIGlmICh0aGlzLmZlYXR1cmUuZ2VvbWV0cnkpIHtcbiAgICAgIGNvbnN0IGxvY2FsT2xGZWF0dXJlID0gdGhpcy5mb3JtYXQucmVhZEZlYXR1cmUodGhpcy5mZWF0dXJlLCB7XG4gICAgICAgIGRhdGFQcm9qZWN0aW9uOiB0aGlzLmZlYXR1cmUucHJvamVjdGlvbixcbiAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IHRoaXMubWFwLnByb2plY3Rpb25cbiAgICAgIH0pO1xuICAgICAgbW92ZVRvT2xGZWF0dXJlcyh0aGlzLm1hcCwgW2xvY2FsT2xGZWF0dXJlXSwgRmVhdHVyZU1vdGlvbi5ab29tKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIGFkZCBhIGZlYXR1cmUgdG8gdGhlIG1hcCBvdmVybGF5XG4gICAqIEBwYXJhbSByZXN1bHQgQSBzZWFyY2ggcmVzdWx0IHRoYXQgY291bGQgYmUgYSBmZWF0dXJlXG4gICAqL1xuICBwcml2YXRlIHRyeUFkZEZlYXR1cmVUb01hcChyZXN1bHQ6IFNlYXJjaFJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQubWV0YS5kYXRhVHlwZSAhPT0gRkVBVFVSRSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgZmVhdHVyZSA9IChyZXN1bHQgYXMgU2VhcmNoUmVzdWx0PEZlYXR1cmU+KS5kYXRhO1xuXG4gICAgLy8gU29tZXRoaW1lcyBmZWF0dXJlcyBoYXZlIG5vIGdlb21ldHJ5LiBJdCBoYXBwZW5zIHdpdGggc29tZSBHZXRGZWF0dXJlSW5mb1xuICAgIGlmICghZmVhdHVyZS5nZW9tZXRyeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZlYXR1cmUubWV0YS5zdHlsZSA9IGdldENvbW1vblZlY3RvclNlbGVjdGVkU3R5bGUoXG4gICAgICBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICB7IGZlYXR1cmUgfSxcbiAgICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5zZWFyY2hPdmVybGF5U3R5bGVTZWxlY3Rpb24sXG4gICAgICAgIHJlc3VsdC5zdHlsZT8uc2VsZWN0aW9uID8gcmVzdWx0LnN0eWxlLnNlbGVjdGlvbiA6IHt9KSk7XG5cbiAgICB0aGlzLm1hcC5zZWFyY2hSZXN1bHRzT3ZlcmxheS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICB9XG5cbiAgaXNTY3JvbGxlZEludG9WaWV3KGVsZW1Tb3VyY2UsIGVsZW0pIHtcbiAgICBjb25zdCBwYWRkaW5nID0gNjtcbiAgICBjb25zdCBkb2NWaWV3VG9wID0gZWxlbVNvdXJjZS5zY3JvbGxUb3A7XG4gICAgY29uc3QgZG9jVmlld0JvdHRvbSA9IGRvY1ZpZXdUb3AgKyBlbGVtU291cmNlLmNsaWVudEhlaWdodDtcblxuICAgIGNvbnN0IGVsZW1Ub3AgPSBlbGVtLm9mZnNldFRvcDtcbiAgICBjb25zdCBlbGVtQm90dG9tID0gZWxlbVRvcCArIGVsZW0uY2xpZW50SGVpZ2h0ICsgcGFkZGluZztcbiAgICByZXR1cm4gZWxlbUJvdHRvbSA8PSBkb2NWaWV3Qm90dG9tICYmIGVsZW1Ub3AgPj0gZG9jVmlld1RvcDtcbiAgfVxuXG4gIGdldFJvdXRlKCkge1xuICAgIHRoaXMudG9vbFN0YXRlLnRvb2xib3guYWN0aXZhdGVUb29sKCdkaXJlY3Rpb25zJyk7XG4gICAgdGhpcy5kaXJlY3Rpb25TdGF0ZS5zdG9wc1N0b3JlLmNsZWFyU3RvcHMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCByb3V0aW5nQ29vcmRMb2FkZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLmdldFJvdXRlJCQpIHsgdGhpcy5nZXRSb3V0ZSQkLnVuc3Vic2NyaWJlKCk7IH1cbiAgICAgIHRoaXMuZ2V0Um91dGUkJCA9IHRoaXMuZGlyZWN0aW9uU3RhdGUuc3RvcHNTdG9yZS5zdG9yZUluaXRpYWxpemVkJC5zdWJzY3JpYmUoKGluaXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uU3RhdGUuc3RvcHNTdG9yZS5zdG9yZUluaXRpYWxpemVkJC52YWx1ZSAmJiAhcm91dGluZ0Nvb3JkTG9hZGVkKSB7XG4gICAgICAgICAgcm91dGluZ0Nvb3JkTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBzdG9wID0gdGhpcy5kaXJlY3Rpb25TdGF0ZS5zdG9wc1N0b3JlLmFsbCgpLmZpbmQoKGUpID0+IGUucG9zaXRpb24gPT09IDEpO1xuICAgICAgICAgIGxldCBjb29yZDtcbiAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlLmdlb21ldHJ5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpIHtcbiAgICAgICAgICAgICAgY29vcmQgPSBbdGhpcy5mZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdLCB0aGlzLmZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMV1dO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBwb2ludE9uRmVhdHVyZSh0aGlzLmZlYXR1cmUuZ2VvbWV0cnkpO1xuICAgICAgICAgICAgICBjb29yZCA9IFtwb2ludC5nZW9tZXRyeS5jb29yZGluYXRlc1swXSwgcG9pbnQuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdG9wLnRleHQgPSB0aGlzLmZlYXR1cmVUaXRsZTtcbiAgICAgICAgICBzdG9wLmNvb3JkaW5hdGVzID0gY29vcmQ7XG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb25TdGF0ZS5zdG9wc1N0b3JlLnVwZGF0ZShzdG9wKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMjUwKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cIiFzdG9yZSB8fCBzdG9yZS5zdGF0ZVZpZXcuZW1wdHlcIiBzdHlsZT1cIm1hcmdpbjogMTBweDtcIj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPlxuICAgIDxoND48c3Ryb25nPnt7ICdpZ28uaW50ZWdyYXRpb24uc2VhcmNoUmVzdWx0c1Rvb2wubm9SZXN1bHRzJyB8IHRyYW5zbGF0ZSB9fTwvc3Ryb25nPjwvaDQ+XG4gICAgPHA+PHN0cm9uZz57eyAnaWdvLmludGVncmF0aW9uLnNlYXJjaFJlc3VsdHNUb29sLmRvU2VhcmNoJyB8IHRyYW5zbGF0ZSB9fTwvc3Ryb25nPjwvcD5cbiAgICA8ZGl2IFtpbm5lckhUTUxdPVwiJ2lnby5pbnRlZ3JhdGlvbi5zZWFyY2hSZXN1bHRzVG9vbC5leGFtcGxlcycgfCB0cmFuc2xhdGUgfCBzYW5pdGl6ZUh0bWxcIj48L2Rpdj5cbjwvc2VjdGlvbj5cbjwvZGl2PlxuXG48aWdvLWZsZXhpYmxlXG4gICpuZ0lmPVwic3RvcmUgJiYgKHN0b3JlLnN0YXRlVmlldy5lbXB0eSQgfCBhc3luYyk9PT1mYWxzZVwiXG4gICN0b3BQYW5lbFxuICBpbml0aWFsPVwiMTAwJVwiXG4gIGluaXRpYWxNb2JpbGU9XCIxMDAlXCJcbiAgY29sbGFwc2VkPVwiY2FsYygxMDAlIC0gNThweClcIlxuICBjb2xsYXBzZWRNb2JpbGU9XCJjYWxjKDEwMCUgLSA1OHB4KVwiXG4gIGV4cGFuZGVkPVwiNjAlXCJcbiAgZXhwYW5kZWRNb2JpbGU9XCI2MCVcIlxuICBbc3RhdGVdPVwiKGZlYXR1cmUkIHzCoGFzeW5jKSA/IHRvcFBhbmVsU3RhdGUgOiAnaW5pdGlhbCdcIj5cblxuICA8ZGl2IGNsYXNzPVwiaWdvLWNvbnRlbnRcIj5cbiAgICA8aWdvLXNlYXJjaC1yZXN1bHRzXG4gICAgICBbc3RvcmVdPVwic3RvcmVcIlxuICAgICAgW3Nob3dJY29uc109XCJzaG93SWNvbnNcIlxuICAgICAgW3Rlcm1dPVwidGVybVwiXG4gICAgICBbdGVybVNwbGl0dGVyXT1cInRlcm1TcGxpdHRlclwiXG4gICAgICBbc2V0dGluZ3NDaGFuZ2UkXT1cInNldHRpbmdzQ2hhbmdlJFwiXG4gICAgICBwbGFjZWhvbGRlcj1cImZhbHNlXCJcbiAgICAgIChyZXN1bHRGb2N1cyk9XCJvblJlc3VsdEZvY3VzKCRldmVudClcIlxuICAgICAgKHJlc3VsdFNlbGVjdCk9XCJvblJlc3VsdFNlbGVjdCgkZXZlbnQpXCJcbiAgICAgIChyZXN1bHRVbmZvY3VzKT1cIm9uUmVzdWx0VW5mb2N1cygkZXZlbnQpXCJcbiAgICAgIChyZXN1bHRNb3VzZWVudGVyKT1cIm9uUmVzdWx0Rm9jdXMoJGV2ZW50KVwiXG4gICAgICAocmVzdWx0TW91c2VsZWF2ZSk9XCJvblJlc3VsdFVuZm9jdXMoJGV2ZW50KVwiXG4gICAgICAobW9yZVJlc3VsdHMpPVwib25TZWFyY2goJGV2ZW50KVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICNpZ29TZWFyY2hJdGVtVG9vbGJhciBsZXQtcmVzdWx0PVwicmVzdWx0XCI+XG4gICAgICAgIDxpZ28tc2VhcmNoLWFkZC1idXR0b25cbiAgICAgICAgICBbbWFwXT1cIm1hcFwiXG4gICAgICAgICAgW2xheWVyXT1cInJlc3VsdFwiPlxuICAgICAgICA8L2lnby1zZWFyY2gtYWRkLWJ1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9pZ28tc2VhcmNoLXJlc3VsdHM+XG4gIDwvZGl2PlxuXG4gIDxkaXYgaWdvRmxleGlibGVGaWxsIGNsYXNzPVwiaWdvLWNvbnRlbnRcIj5cbiAgICA8aWdvLXBhbmVsIFt0aXRsZV09XCJmZWF0dXJlVGl0bGVcIiAqbmdJZj1cImZlYXR1cmUkIHzCoGFzeW5jXCI+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgIHBhbmVsTGVmdEJ1dHRvblxuICAgICAgICBjbGFzcz1cImlnby1pY29uLWJ1dHRvblwiXG4gICAgICAgIChjbGljayk9XCJ0b2dnbGVUb3BQYW5lbCgpXCI+XG4gICAgICAgIDxtYXQtaWNvbiBbc3ZnSWNvbl09XCIodG9wUGFuZWxTdGF0ZSQgfCBhc3luYykgPT09ICdjb2xsYXBzZWQnID8gJ2Fycm93LXVwJyA6ICdhcnJvdy1kb3duJ1wiPjwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICAqbmdJZj1cImZlYXR1cmUuZ2VvbWV0cnlcIlxuICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgcGFuZWxSaWdodEJ1dHRvblxuICAgICAgICBjbGFzcz1cImlnby1pY29uLWJ1dHRvblwiXG4gICAgICAgIFttYXRUb29sdGlwXT1cIigoaXNTZWxlY3RlZFJlc3VsdE91dE9mVmlldyQgfCBhc3luYykgPyAnaWdvLmludGVncmF0aW9uLnNlYXJjaFJlc3VsdHNUb29sLnpvb21PbkZlYXR1cmVUb29sdGlwT3V0T2ZWaWV3JyA6ICdpZ28uaW50ZWdyYXRpb24uc2VhcmNoUmVzdWx0c1Rvb2wuem9vbU9uRmVhdHVyZVRvb2x0aXAnKSB8IHRyYW5zbGF0ZVwiXG4gICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICAoY2xpY2spPVwiem9vbVRvRmVhdHVyZUV4dGVudCgpXCI+XG4gICAgICAgIDxtYXQtaWNvblxuICAgICAgICBbbWF0QmFkZ2VdPVwiKGlzU2VsZWN0ZWRSZXN1bHRPdXRPZlZpZXckIHwgYXN5bmMpID8gJyEnIDogJydcIlxuICAgICAgICBtYXRCYWRnZUNvbG9yPVwiYWNjZW50XCJcbiAgICAgICAgbWF0QmFkZ2VTaXplPVwic21hbGxcIlxuICAgICAgICBbbWF0QmFkZ2VIaWRkZW5dPVwiKGlzU2VsZWN0ZWRSZXN1bHRPdXRPZlZpZXckIHwgYXN5bmMpPT09ZmFsc2VcIiAgICAgXG4gICAgICAgIHN2Z0ljb249XCJtYWduaWZ5LXBsdXMtb3V0bGluZVwiPjwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGlnby1mZWF0dXJlLWRldGFpbHNcbiAgICAgICAgaWdvRmVhdHVyZURldGFpbHNEaXJlY3RpdmVcbiAgICAgICAgW2ZlYXR1cmVdPVwiZmVhdHVyZSQgfCBhc3luY1wiXG4gICAgICAgIFttYXBdPVwibWFwXCJcbiAgICAgICAgW3Rvb2xib3hdPVwidG9vbFN0YXRlLnRvb2xib3hcIlxuICAgICAgICAocm91dGluZ0V2ZW50KT1cImdldFJvdXRlKClcIj5cbiAgICAgIDwvaWdvLWZlYXR1cmUtZGV0YWlscz5cbiAgICA8L2lnby1wYW5lbD5cbiAgPC9kaXY+XG5cbjwvaWdvLWZsZXhpYmxlPlxuIl19