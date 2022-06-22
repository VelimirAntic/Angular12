import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BehaviorSubject, EMPTY, timer } from 'rxjs';
import { debounce, distinctUntilChanged } from 'rxjs/operators';
import { SEARCH_TYPES } from '../shared/search.enums';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "../shared/search.service";
import * as i3 from "../shared/search-source.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
import * as i9 from "../search-selector/search-selector.component";
import * as i10 from "../search-settings/search-settings.component";
import * as i11 from "@ngx-translate/core";
const _c0 = ["input"];
function SearchBarComponent_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
function SearchBarComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵelement(1, "mat-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r2.color);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r2.searchIcon);
} }
function SearchBarComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function SearchBarComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onClearButtonClick(); });
    i0.ɵɵelement(1, "mat-icon", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r3.color);
} }
function SearchBarComponent_igo_search_selector_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-search-selector", 14);
    i0.ɵɵlistener("searchTypeChange", function SearchBarComponent_igo_search_selector_14_Template_igo_search_selector_searchTypeChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onSearchTypeChange($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("searchTypes", ctx_r4.searchTypes)("searchType", i0.ɵɵpipeBind1(1, 2, ctx_r4.searchType$));
} }
function SearchBarComponent_igo_search_settings_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-search-settings", 15);
    i0.ɵɵlistener("pointerSummaryStatus", function SearchBarComponent_igo_search_settings_15_Template_igo_search_settings_pointerSummaryStatus_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.pointerSummaryStatus.emit($event); })("searchResultsGeometryStatus", function SearchBarComponent_igo_search_settings_15_Template_igo_search_settings_searchResultsGeometryStatus_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.searchResultsGeometryStatus.emit($event); })("searchSourceChange", function SearchBarComponent_igo_search_settings_15_Template_igo_search_settings_searchSourceChange_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onSearchSettingsChange(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("pointerSummaryEnabled", ctx_r5.pointerSummaryEnabled)("searchResultsGeometryEnabled", ctx_r5.searchResultsGeometryEnabled);
} }
const _c1 = function (a0) { return { empty: a0 }; };
const _c2 = function (a0) { return { "hasSearchIcon": a0 }; };
/**
 * Searchbar that triggers a research in all search sources enabled.
 * If the store input is defined, the search results will be loaded
 * into that store. An event is always emitted when a research is completed.
 */
export class SearchBarComponent {
    constructor(languageService, searchService, searchSourceService) {
        this.languageService = languageService;
        this.searchService = searchService;
        this.searchSourceService = searchSourceService;
        this.placeholder$ = new BehaviorSubject('igo.geo.search.placeholder');
        this.empty$ = new BehaviorSubject(true);
        /**
         * Search term stream
         */
        this.stream$ = new BehaviorSubject('');
        /**
         * List of available search types
         */
        this.searchTypes = SEARCH_TYPES;
        this.searchType$ = new BehaviorSubject(undefined);
        /**
         * Event emitted when the pointer summary is activated by the searchbar setting
         */
        this.pointerSummaryStatus = new EventEmitter();
        /**
         * Event emitted when the show geometry setting is changed
         */
        this.searchResultsGeometryStatus = new EventEmitter();
        this.term$ = new BehaviorSubject('');
        this.disabled$ = new BehaviorSubject(false);
        this.pointerSummaryEnabled = false;
        this.searchResultsGeometryEnabled = false;
        /**
         * Whether a float label should be displayed
         */
        this.floatLabel = 'never';
        this.appearance = 'legacy';
        /**
         * Icons color (search and clear)
         */
        this.color = 'primary';
        this.termSplitter = '|';
        /**
         * Debounce time between each keystroke
         */
        this.debounce = 200;
        /**
         * Minimum term length required to trigger a research
         */
        this.minLength = 2;
        /**
         * Search Selector
         */
        this.searchSelector = false;
        /**
         * Search Settings
         */
        this.searchSettings = false;
        /**
         * Force coordinates in north america
         */
        this.forceNA = false;
        /**
         * Event emitted when the search term changes
         */
        this.searchTermChange = new EventEmitter();
        /**
         * Event emitted when a research is completed
         */
        this.search = new EventEmitter();
        /**
         * Event emitted when the search type changes
         */
        this.searchTypeChange = new EventEmitter();
        /**
         * Event emitted when the search type changes
         */
        this.clearFeature = new EventEmitter();
        /**
         * Event emitted when the search settings changes
         */
        this.searchSettingsChange = new EventEmitter();
    }
    /**
     * Search term
     */
    set searchType(value) {
        this.setSearchType(value);
    }
    get searchType() {
        return this.searchType$.value;
    }
    /**
     * Search term
     */
    set term(value) {
        this.setTerm(value);
    }
    get term() {
        return this.term$.value;
    }
    /**
     * Whether this component is disabled
     */
    set disabled(value) {
        this.disabled$.next(value);
    }
    get disabled() {
        return this.disabled$.value;
    }
    /**
     * Whether the search bar is empty
     * @internal
     */
    get empty() {
        return this.term.length === 0;
    }
    /**
     * Subscribe to the search term stream and trigger researches
     * @internal
     */
    ngOnInit() {
        this.term$$ = this.term$.subscribe((term) => {
            this.empty$.next(term === undefined || term.length === 0);
        });
        this.stream$$ = this.stream$
            .pipe(debounce((term) => (term === '' ? EMPTY : timer(this.debounce))))
            .subscribe((term) => this.onSetTerm(term));
        this.handlePlaceholder();
        this.searchType$$ = this.searchType$
            .pipe(distinctUntilChanged())
            .subscribe((searchType) => this.onSetSearchType(searchType));
    }
    /**
     * Unsubscribe to the search term stream
     * @internal
     */
    ngOnDestroy() {
        this.term$$.unsubscribe();
        this.stream$$.unsubscribe();
        this.searchType$$.unsubscribe();
    }
    /**
     * When a user types, validates the key and send it into the
     * stream if it's valid
     * @param event Keyboard event
     * @internal
     */
    onKeyup(event) {
        const key = event.key;
        if (!this.keyIsValid(key)) {
            return;
        }
        const term = event.target.value;
        this.setTerm(term);
    }
    /**
     * Clear the stream and the input
     * @internal
     */
    onClearButtonClick() {
        this.clear();
        this.clearFeature.emit();
    }
    /**
     * Update search type
     * @param searchType Enabled search type
     * @internal
     */
    onSearchTypeChange(searchType) {
        this.setSearchType(searchType);
    }
    /**
     * Update the placeholder with the enabled search type. The placeholder
     * for all availables search typers needs to be defined in the locale
     * files or an error will be thrown.
     * @param searchType Enabled search type
     * @internal
     */
    setSearchType(searchType) {
        this.searchType$.next(searchType);
    }
    onSearchSettingsChange() {
        this.doSearch(this.term);
        this.searchSettingsChange.emit();
        this.handlePlaceholder();
    }
    /**
     * Send the term into the stream only if this component is not disabled
     * @param term Search term
     */
    setTerm(term) {
        if (this.disabled) {
            return;
        }
        term = term || '';
        if (term !== this.term) {
            this.term$.next(term);
        }
        const slug = term.replace(/(#[^\s]*)/g, '').trim();
        if (slug.length >= this.minLength || slug.length === 0) {
            this.stream$.next(term);
        }
    }
    /**
     * Clear the stream and the input
     */
    clear() {
        this.term$.next('');
        this.stream$.next('');
        this.input.nativeElement.focus();
    }
    /**
     * Validate if a given key stroke is a valid input
     */
    keyIsValid(key) {
        return SearchBarComponent.invalidKeys.indexOf(key) === -1;
    }
    /**
     * When the search term changes, emit an event and trigger a
     * research in every enabled search sources.
     * @param term Search term
     */
    onSetTerm(term) {
        this.searchTermChange.emit(term);
        this.doSearch(term);
    }
    handlePlaceholder() {
        const searchTypes = [
            ...new Set(this.searchSourceService
                .getEnabledSources()
                .filter((ss) => !['map', 'coordinatesreverse'].includes(ss.getId()))
                .map((ss) => ss.getType()))
        ];
        let placeholder = `igo.geo.search.placeholder`;
        if (searchTypes.length === 1) {
            placeholder = `igo.geo.search.${searchTypes[0].toLowerCase()}.placeholder`;
        }
        else if (searchTypes.length === 0) {
            placeholder = `igo.geo.search.emptyType.placeholder`;
        }
        this.placeholder$.next(placeholder);
    }
    onSetSearchType(searchType) {
        if (searchType === undefined || searchType === null) {
            return;
        }
        this.searchTypeChange.emit(searchType);
        const placeholder = `igo.geo.search.${searchType.toLowerCase()}.placeholder`;
        this.placeholder$.next(placeholder);
        this.setTerm(this.term);
    }
    /**
     * Execute the search
     * @param term Search term
     */
    doSearch(rawTerm) {
        if (this.researches$$) {
            this.researches$$.map((research) => research.unsubscribe());
            this.researches$$ = undefined;
        }
        let terms;
        if (this.termSplitter && rawTerm.match(new RegExp(this.termSplitter, 'g'))) {
            terms = rawTerm.split(this.termSplitter).filter((t) => t.length >= this.minLength);
            if (this.store) {
                this.store.clear();
            }
        }
        else {
            terms = [rawTerm];
        }
        let researches = [];
        terms.map((term) => {
            const slug = term ? term.replace(/(#[^\s]*)/g, '').trim() : '';
            if (slug === '') {
                if (this.store !== undefined) {
                    this.store.clear();
                }
                return;
            }
            researches = researches.concat(this.searchService.search(term, {
                forceNA: this.forceNA
            }));
        });
        this.researches$$ = researches.map((research) => {
            return research.request.subscribe((results) => {
                this.onResearchCompleted(research, results);
            });
        });
    }
    /**
     * When a research  is completed, emit an event and update
     * the store's items.
     * @param research Research
     * @param results Research results
     */
    onResearchCompleted(research, results) {
        this.search.emit({ research, results });
        if (this.store !== undefined) {
            const newResults = this.store
                .all()
                .filter((result) => result.source !== research.source)
                .concat(results);
            this.store.updateMany(newResults);
        }
    }
}
/**
 * Invalid keys
 */
SearchBarComponent.invalidKeys = [
    'Control',
    'Shift',
    'Alt',
    'ArrowDown',
    'ArrowUp',
    'ArrowRight',
    'ArrowLeft'
];
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.SearchService), i0.ɵɵdirectiveInject(i3.SearchSourceService)); };
SearchBarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchBarComponent, selectors: [["igo-search-bar"]], viewQuery: function SearchBarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { searchTypes: "searchTypes", searchType: "searchType", term: "term", disabled: "disabled", pointerSummaryEnabled: "pointerSummaryEnabled", searchResultsGeometryEnabled: "searchResultsGeometryEnabled", floatLabel: "floatLabel", appearance: "appearance", placeholder: "placeholder", label: "label", color: "color", termSplitter: "termSplitter", debounce: "debounce", minLength: "minLength", searchIcon: "searchIcon", searchSelector: "searchSelector", searchSettings: "searchSettings", forceNA: "forceNA", store: "store" }, outputs: { pointerSummaryStatus: "pointerSummaryStatus", searchResultsGeometryStatus: "searchResultsGeometryStatus", searchTermChange: "searchTermChange", search: "search", searchTypeChange: "searchTypeChange", clearFeature: "clearFeature", searchSettingsChange: "searchSettingsChange" }, decls: 16, vars: 28, consts: [[1, "igo-search-bar-container", 3, "ngClass"], [3, "floatLabel", "appearance"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", 3, "ngClass", "disabled", "placeholder", "value", "keyup", "touchend"], ["input", ""], [1, "search-bar-buttons"], ["mat-icon-button", "", 3, "color", 4, "ngIf"], ["mat-icon-button", "", 3, "color", "click", 4, "ngIf"], [3, "searchTypes", "searchType", "searchTypeChange", 4, "ngIf"], [3, "pointerSummaryEnabled", "searchResultsGeometryEnabled", "pointerSummaryStatus", "searchResultsGeometryStatus", "searchSourceChange", 4, "ngIf"], ["mat-icon-button", "", 3, "color"], [3, "svgIcon"], ["mat-icon-button", "", 3, "color", "click"], ["svgIcon", "close"], [3, "searchTypes", "searchType", "searchTypeChange"], [3, "pointerSummaryEnabled", "searchResultsGeometryEnabled", "pointerSummaryStatus", "searchResultsGeometryStatus", "searchSourceChange"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵelementStart(2, "mat-form-field", 1);
        i0.ɵɵtemplate(3, SearchBarComponent_mat_label_3_Template, 2, 1, "mat-label", 2);
        i0.ɵɵelementStart(4, "input", 3, 4);
        i0.ɵɵlistener("keyup", function SearchBarComponent_Template_input_keyup_4_listener($event) { return ctx.onKeyup($event); })("touchend", function SearchBarComponent_Template_input_touchend_4_listener($event) { return ctx.onKeyup($event); });
        i0.ɵɵpipe(6, "async");
        i0.ɵɵpipe(7, "async");
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵpipe(9, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 5);
        i0.ɵɵtemplate(11, SearchBarComponent_button_11_Template, 2, 2, "button", 6);
        i0.ɵɵtemplate(12, SearchBarComponent_button_12_Template, 2, 1, "button", 7);
        i0.ɵɵpipe(13, "async");
        i0.ɵɵtemplate(14, SearchBarComponent_igo_search_selector_14_Template, 2, 4, "igo-search-selector", 8);
        i0.ɵɵtemplate(15, SearchBarComponent_igo_search_settings_15_Template, 1, 2, "igo-search-settings", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(24, _c1, i0.ɵɵpipeBind1(1, 12, ctx.empty$)));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("floatLabel", ctx.floatLabel)("appearance", ctx.appearance);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(26, _c2, ctx.searchIcon))("disabled", i0.ɵɵpipeBind1(6, 14, ctx.disabled$))("placeholder", ctx.placeholder ? ctx.placeholder : i0.ɵɵpipeBind1(7, 16, ctx.placeholder$) ? i0.ɵɵpipeBind1(8, 18, ctx.placeholder$.value) : undefined)("value", i0.ɵɵpipeBind1(9, 20, ctx.term$));
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.searchIcon !== undefined);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(13, 22, ctx.empty$) === false);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.searchSelector);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchSettings);
    } }, directives: [i4.NgClass, i5.MatFormField, i4.NgIf, i6.MatInput, i5.MatLabel, i7.MatButton, i8.MatIcon, i9.SearchSelectorComponent, i10.SearchSettingsComponent], pipes: [i4.AsyncPipe, i11.TranslatePipe], styles: ["[_nghost-%COMP%]     .mat-form-field{padding:0 5px}[_nghost-%COMP%]     .mat-form-field-wrapper{margin-bottom:-1.5em}[_nghost-%COMP%]     span.mat-form-field-label-wrapper{top:-20px}[_nghost-%COMP%]     div.mat-form-field-infix{left:5px;right:5px;padding:0 0 12px!important}[_nghost-%COMP%]     div.mat-form-field-underline{display:none}.igo-search-bar-container[_ngcontent-%COMP%]{position:relative;width:100%;display:inline-flex;overflow:hidden}.igo-search-bar-container[_ngcontent-%COMP%] > mat-form-field[_ngcontent-%COMP%]{width:calc(100% - (2 * 40px))}.igo-search-bar-container.empty[_ngcontent-%COMP%] > mat-form-field[_ngcontent-%COMP%]{width:calc(100% - 40px)}.search-bar-buttons[_ngcontent-%COMP%]{position:relative;right:0px;display:inline-flex;top:0}.search-bar-buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-child(2):before{content:\"\";left:0px;top:5px;border-right:1px solid #ddd;height:28px}igo-search-selector[_ngcontent-%COMP%]{background-color:#fff;top:0;border-radius:0}igo-search-settings[_ngcontent-%COMP%]{background-color:#fff;top:0;border-radius:0}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchBarComponent, [{
        type: Component,
        args: [{
                selector: 'igo-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.LanguageService }, { type: i2.SearchService }, { type: i3.SearchSourceService }]; }, { searchTypes: [{
            type: Input
        }], searchType: [{
            type: Input
        }], pointerSummaryStatus: [{
            type: Output
        }], searchResultsGeometryStatus: [{
            type: Output
        }], term: [{
            type: Input
        }], disabled: [{
            type: Input
        }], pointerSummaryEnabled: [{
            type: Input
        }], searchResultsGeometryEnabled: [{
            type: Input
        }], floatLabel: [{
            type: Input
        }], appearance: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], label: [{
            type: Input
        }], color: [{
            type: Input
        }], termSplitter: [{
            type: Input
        }], debounce: [{
            type: Input
        }], minLength: [{
            type: Input
        }], searchIcon: [{
            type: Input
        }], searchSelector: [{
            type: Input
        }], searchSettings: [{
            type: Input
        }], forceNA: [{
            type: Input
        }], store: [{
            type: Input
        }], searchTermChange: [{
            type: Output
        }], search: [{
            type: Output
        }], searchTypeChange: [{
            type: Output
        }], clearFeature: [{
            type: Output
        }], searchSettingsChange: [{
            type: Output
        }], input: [{
            type: ViewChild,
            args: ['input', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3NlYXJjaC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCx1QkFBdUIsRUFDdkIsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWdCLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDbkJsRCxpQ0FBeUI7SUFBQSxZQUFTO0lBQUEsaUJBQVk7OztJQUFyQixlQUFTO0lBQVQsa0NBQVM7OztJQWNsQyxrQ0FHbUM7SUFDakMsK0JBQThDO0lBQ2hELGlCQUFTOzs7SUFIUCxvQ0FBZTtJQUVMLGVBQXdCO0lBQXhCLHNEQUF3Qjs7OztJQUdwQyxrQ0FJaUM7SUFBL0Isa01BQThCO0lBQzlCLCtCQUFxQztJQUN2QyxpQkFBUzs7O0lBSFAsb0NBQWU7Ozs7SUFLakIsK0NBSWtEO0lBQWhELDhQQUErQzs7SUFDakQsaUJBQXNCOzs7SUFIcEIsZ0RBQTJCLHdEQUFBOzs7O0lBSzdCLCtDQU1rRDtJQUhoRCxtT0FBd0IseUNBQWlDLElBQUMsb09BRTNCLGdEQUF3QyxJQUZiLGdQQUFBO0lBSTVELGlCQUFzQjs7O0lBTHBCLG9FQUErQyxxRUFBQTs7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QUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGbG9hdExhYmVsVHlwZSxcbiAgTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBFTVBUWSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBFbnRpdHlTdG9yZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IFNFQVJDSF9UWVBFUyB9IGZyb20gJy4uL3NoYXJlZC9zZWFyY2guZW51bXMnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0LCBSZXNlYXJjaCB9IGZyb20gJy4uL3NoYXJlZC9zZWFyY2guaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaFNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VhcmNoLXNvdXJjZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBTZWFyY2hiYXIgdGhhdCB0cmlnZ2VycyBhIHJlc2VhcmNoIGluIGFsbCBzZWFyY2ggc291cmNlcyBlbmFibGVkLlxuICogSWYgdGhlIHN0b3JlIGlucHV0IGlzIGRlZmluZWQsIHRoZSBzZWFyY2ggcmVzdWx0cyB3aWxsIGJlIGxvYWRlZFxuICogaW50byB0aGF0IHN0b3JlLiBBbiBldmVudCBpcyBhbHdheXMgZW1pdHRlZCB3aGVuIGEgcmVzZWFyY2ggaXMgY29tcGxldGVkLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tc2VhcmNoLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBJbnZhbGlkIGtleXNcbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkS2V5cyA9IFtcbiAgICAnQ29udHJvbCcsXG4gICAgJ1NoaWZ0JyxcbiAgICAnQWx0JyxcbiAgICAnQXJyb3dEb3duJyxcbiAgICAnQXJyb3dVcCcsXG4gICAgJ0Fycm93UmlnaHQnLFxuICAgICdBcnJvd0xlZnQnXG4gIF07XG5cbiAgcmVhZG9ubHkgcGxhY2Vob2xkZXIkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoXG4gICAgJ2lnby5nZW8uc2VhcmNoLnBsYWNlaG9sZGVyJ1xuICApO1xuXG4gIHJlYWRvbmx5IGVtcHR5JDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzc2VhcmNoIGJhciB0ZXJtXG4gICAqL1xuICBwcml2YXRlIHRlcm0kJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggdGVybSBzdHJlYW1cbiAgICovXG4gIHByaXZhdGUgc3RyZWFtJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzZWFyY2ggdGVybSBzdHJlYW1cbiAgICovXG4gIHByaXZhdGUgc3RyZWFtJCQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzZWFyY2ggdHlwZVxuICAgKi9cbiAgcHJpdmF0ZSBzZWFyY2hUeXBlJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIHJlc2VhcmNoZXMkJDogU3Vic2NyaXB0aW9uW107XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYXZhaWxhYmxlIHNlYXJjaCB0eXBlc1xuICAgKi9cbiAgQElucHV0KCkgc2VhcmNoVHlwZXM6IHN0cmluZ1tdID0gU0VBUkNIX1RZUEVTO1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggdGVybVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2V0U2VhcmNoVHlwZSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHNlYXJjaFR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hUeXBlJC52YWx1ZTtcbiAgfVxuICByZWFkb25seSBzZWFyY2hUeXBlJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFxuICAgIHVuZGVmaW5lZFxuICApO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHBvaW50ZXIgc3VtbWFyeSBpcyBhY3RpdmF0ZWQgYnkgdGhlIHNlYXJjaGJhciBzZXR0aW5nXG4gICAqL1xuICBAT3V0cHV0KCkgcG9pbnRlclN1bW1hcnlTdGF0dXMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgc2hvdyBnZW9tZXRyeSBzZXR0aW5nIGlzIGNoYW5nZWRcbiAgICovXG4gICBAT3V0cHV0KCkgc2VhcmNoUmVzdWx0c0dlb21ldHJ5U3RhdHVzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggdGVybVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHRlcm0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2V0VGVybSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHRlcm0oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtJC52YWx1ZTtcbiAgfVxuICByZWFkb25seSB0ZXJtJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIGNvbXBvbmVudCBpcyBkaXNhYmxlZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkJC52YWx1ZTtcbiAgfVxuICByZWFkb25seSBkaXNhYmxlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIEBJbnB1dCgpIHBvaW50ZXJTdW1tYXJ5RW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWFyY2hSZXN1bHRzR2VvbWV0cnlFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBXaGV0aGVyIGEgZmxvYXQgbGFiZWwgc2hvdWxkIGJlIGRpc3BsYXllZFxuICAgKi9cbiAgQElucHV0KCkgZmxvYXRMYWJlbDogRmxvYXRMYWJlbFR5cGUgPSAnbmV2ZXInO1xuXG4gIEBJbnB1dCgpIGFwcGVhcmFuY2U6IE1hdEZvcm1GaWVsZEFwcGVhcmFuY2UgPSAnbGVnYWN5JztcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEljb25zIGNvbG9yIChzZWFyY2ggYW5kIGNsZWFyKVxuICAgKi9cbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XG5cbiAgQElucHV0KCkgdGVybVNwbGl0dGVyOiBzdHJpbmcgPSAnfCc7XG5cbiAgLyoqXG4gICAqIERlYm91bmNlIHRpbWUgYmV0d2VlbiBlYWNoIGtleXN0cm9rZVxuICAgKi9cbiAgQElucHV0KCkgZGVib3VuY2UgPSAyMDA7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gdGVybSBsZW5ndGggcmVxdWlyZWQgdG8gdHJpZ2dlciBhIHJlc2VhcmNoXG4gICAqL1xuICBASW5wdXQoKSBtaW5MZW5ndGggPSAyO1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggaWNvblxuICAgKi9cbiAgQElucHV0KCkgc2VhcmNoSWNvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggU2VsZWN0b3JcbiAgICovXG4gIEBJbnB1dCgpIHNlYXJjaFNlbGVjdG9yID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBTZXR0aW5nc1xuICAgKi9cbiAgQElucHV0KCkgc2VhcmNoU2V0dGluZ3MgPSBmYWxzZTtcblxuICAvKipcbiAgICogRm9yY2UgY29vcmRpbmF0ZXMgaW4gbm9ydGggYW1lcmljYVxuICAgKi9cbiAgQElucHV0KCkgZm9yY2VOQSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggcmVzdWx0cyBzdG9yZVxuICAgKi9cbiAgQElucHV0KCkgc3RvcmU6IEVudGl0eVN0b3JlPFNlYXJjaFJlc3VsdD47XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgc2VhcmNoIHRlcm0gY2hhbmdlc1xuICAgKi9cbiAgQE91dHB1dCgpIHNlYXJjaFRlcm1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgcmVzZWFyY2ggaXMgY29tcGxldGVkXG4gICAqL1xuICBAT3V0cHV0KCkgc2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgcmVzZWFyY2g6IFJlc2VhcmNoO1xuICAgIHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdO1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHNlYXJjaCB0eXBlIGNoYW5nZXNcbiAgICovXG4gIEBPdXRwdXQoKSBzZWFyY2hUeXBlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgc2VhcmNoIHR5cGUgY2hhbmdlc1xuICAgKi9cbiAgQE91dHB1dCgpIGNsZWFyRmVhdHVyZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzZWFyY2ggc2V0dGluZ3MgY2hhbmdlc1xuICAgKi9cbiAgQE91dHB1dCgpIHNlYXJjaFNldHRpbmdzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBJbnB1dCBlbGVtZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogRWxlbWVudFJlZjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc2VhcmNoIGJhciBpcyBlbXB0eVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCBlbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VhcmNoU291cmNlU2VydmljZTogU2VhcmNoU291cmNlU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgc2VhcmNoIHRlcm0gc3RyZWFtIGFuZCB0cmlnZ2VyIHJlc2VhcmNoZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm0kJCA9IHRoaXMudGVybSQuc3Vic2NyaWJlKCh0ZXJtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZW1wdHkkLm5leHQodGVybSA9PT0gdW5kZWZpbmVkIHx8IHRlcm0ubGVuZ3RoID09PSAwKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RyZWFtJCQgPSB0aGlzLnN0cmVhbSRcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZSgodGVybTogc3RyaW5nKSA9PiAodGVybSA9PT0gJycgPyBFTVBUWSA6IHRpbWVyKHRoaXMuZGVib3VuY2UpKSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHRlcm06IHN0cmluZykgPT4gdGhpcy5vblNldFRlcm0odGVybSkpO1xuXG4gICAgdGhpcy5oYW5kbGVQbGFjZWhvbGRlcigpO1xuXG4gICAgdGhpcy5zZWFyY2hUeXBlJCQgPSB0aGlzLnNlYXJjaFR5cGUkXG4gICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgLnN1YnNjcmliZSgoc2VhcmNoVHlwZTogc3RyaW5nKSA9PiB0aGlzLm9uU2V0U2VhcmNoVHlwZShzZWFyY2hUeXBlKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdG8gdGhlIHNlYXJjaCB0ZXJtIHN0cmVhbVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudGVybSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdHJlYW0kJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc2VhcmNoVHlwZSQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBhIHVzZXIgdHlwZXMsIHZhbGlkYXRlcyB0aGUga2V5IGFuZCBzZW5kIGl0IGludG8gdGhlXG4gICAqIHN0cmVhbSBpZiBpdCdzIHZhbGlkXG4gICAqIEBwYXJhbSBldmVudCBLZXlib2FyZCBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uS2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG4gICAgaWYgKCF0aGlzLmtleUlzVmFsaWQoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0ZXJtID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICB0aGlzLnNldFRlcm0odGVybSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHN0cmVhbSBhbmQgdGhlIGlucHV0XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25DbGVhckJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmNsZWFyRmVhdHVyZS5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNlYXJjaCB0eXBlXG4gICAqIEBwYXJhbSBzZWFyY2hUeXBlIEVuYWJsZWQgc2VhcmNoIHR5cGVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvblNlYXJjaFR5cGVDaGFuZ2Uoc2VhcmNoVHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRTZWFyY2hUeXBlKHNlYXJjaFR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgcGxhY2Vob2xkZXIgd2l0aCB0aGUgZW5hYmxlZCBzZWFyY2ggdHlwZS4gVGhlIHBsYWNlaG9sZGVyXG4gICAqIGZvciBhbGwgYXZhaWxhYmxlcyBzZWFyY2ggdHlwZXJzIG5lZWRzIHRvIGJlIGRlZmluZWQgaW4gdGhlIGxvY2FsZVxuICAgKiBmaWxlcyBvciBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICogQHBhcmFtIHNlYXJjaFR5cGUgRW5hYmxlZCBzZWFyY2ggdHlwZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHNldFNlYXJjaFR5cGUoc2VhcmNoVHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2hUeXBlJC5uZXh0KHNlYXJjaFR5cGUpO1xuICB9XG5cbiAgb25TZWFyY2hTZXR0aW5nc0NoYW5nZSgpIHtcbiAgICB0aGlzLmRvU2VhcmNoKHRoaXMudGVybSk7XG4gICAgdGhpcy5zZWFyY2hTZXR0aW5nc0NoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5oYW5kbGVQbGFjZWhvbGRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdGhlIHRlcm0gaW50byB0aGUgc3RyZWFtIG9ubHkgaWYgdGhpcyBjb21wb25lbnQgaXMgbm90IGRpc2FibGVkXG4gICAqIEBwYXJhbSB0ZXJtIFNlYXJjaCB0ZXJtXG4gICAqL1xuICBzZXRUZXJtKHRlcm06IHN0cmluZykge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGVybSA9IHRlcm0gfHwgJyc7XG5cbiAgICBpZiAodGVybSAhPT0gdGhpcy50ZXJtKSB7XG4gICAgICB0aGlzLnRlcm0kLm5leHQodGVybSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2x1ZyA9IHRlcm0ucmVwbGFjZSgvKCNbXlxcc10qKS9nLCAnJykudHJpbSgpO1xuICAgIGlmIChzbHVnLmxlbmd0aCA+PSB0aGlzLm1pbkxlbmd0aCB8fCBzbHVnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdHJlYW0kLm5leHQodGVybSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBzdHJlYW0gYW5kIHRoZSBpbnB1dFxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhcigpIHtcbiAgICB0aGlzLnRlcm0kLm5leHQoJycpO1xuICAgIHRoaXMuc3RyZWFtJC5uZXh0KCcnKTtcbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSBpZiBhIGdpdmVuIGtleSBzdHJva2UgaXMgYSB2YWxpZCBpbnB1dFxuICAgKi9cbiAgcHJpdmF0ZSBrZXlJc1ZhbGlkKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFNlYXJjaEJhckNvbXBvbmVudC5pbnZhbGlkS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHNlYXJjaCB0ZXJtIGNoYW5nZXMsIGVtaXQgYW4gZXZlbnQgYW5kIHRyaWdnZXIgYVxuICAgKiByZXNlYXJjaCBpbiBldmVyeSBlbmFibGVkIHNlYXJjaCBzb3VyY2VzLlxuICAgKiBAcGFyYW0gdGVybSBTZWFyY2ggdGVybVxuICAgKi9cbiAgcHJpdmF0ZSBvblNldFRlcm0odGVybTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZWFyY2hUZXJtQ2hhbmdlLmVtaXQodGVybSk7XG4gICAgdGhpcy5kb1NlYXJjaCh0ZXJtKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGxhY2Vob2xkZXIoKSB7XG4gICAgY29uc3Qgc2VhcmNoVHlwZXMgPSBbXG4gICAgICAuLi5uZXcgU2V0KFxuICAgICAgICB0aGlzLnNlYXJjaFNvdXJjZVNlcnZpY2VcbiAgICAgICAgICAuZ2V0RW5hYmxlZFNvdXJjZXMoKVxuICAgICAgICAgIC5maWx0ZXIoKHNzKSA9PiAhWydtYXAnLCAnY29vcmRpbmF0ZXNyZXZlcnNlJ10uaW5jbHVkZXMoc3MuZ2V0SWQoKSkpXG4gICAgICAgICAgLm1hcCgoc3MpID0+IHNzLmdldFR5cGUoKSlcbiAgICAgIClcbiAgICBdO1xuXG4gICAgbGV0IHBsYWNlaG9sZGVyID0gYGlnby5nZW8uc2VhcmNoLnBsYWNlaG9sZGVyYDtcbiAgICBpZiAoc2VhcmNoVHlwZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IGBpZ28uZ2VvLnNlYXJjaC4ke3NlYXJjaFR5cGVzWzBdLnRvTG93ZXJDYXNlKCl9LnBsYWNlaG9sZGVyYDtcbiAgICB9IGVsc2UgaWYgKHNlYXJjaFR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcGxhY2Vob2xkZXIgPSBgaWdvLmdlby5zZWFyY2guZW1wdHlUeXBlLnBsYWNlaG9sZGVyYDtcbiAgICB9XG4gICAgdGhpcy5wbGFjZWhvbGRlciQubmV4dChwbGFjZWhvbGRlcik7XG4gIH1cblxuICBwcml2YXRlIG9uU2V0U2VhcmNoVHlwZShzZWFyY2hUeXBlOiBzdHJpbmcpIHtcbiAgICBpZiAoc2VhcmNoVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHNlYXJjaFR5cGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaFR5cGVDaGFuZ2UuZW1pdChzZWFyY2hUeXBlKTtcblxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gYGlnby5nZW8uc2VhcmNoLiR7c2VhcmNoVHlwZS50b0xvd2VyQ2FzZSgpfS5wbGFjZWhvbGRlcmA7XG4gICAgdGhpcy5wbGFjZWhvbGRlciQubmV4dChwbGFjZWhvbGRlcik7XG5cbiAgICB0aGlzLnNldFRlcm0odGhpcy50ZXJtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHRlcm0gU2VhcmNoIHRlcm1cbiAgICovXG4gIHByaXZhdGUgZG9TZWFyY2gocmF3VGVybTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMucmVzZWFyY2hlcyQkKSB7XG4gICAgICB0aGlzLnJlc2VhcmNoZXMkJC5tYXAoKHJlc2VhcmNoKSA9PiByZXNlYXJjaC51bnN1YnNjcmliZSgpKTtcbiAgICAgIHRoaXMucmVzZWFyY2hlcyQkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGxldCB0ZXJtcztcbiAgICBpZiAodGhpcy50ZXJtU3BsaXR0ZXIgJiYgcmF3VGVybS5tYXRjaChuZXcgUmVnRXhwKHRoaXMudGVybVNwbGl0dGVyLCAnZycpKSkge1xuICAgICAgdGVybXMgPSByYXdUZXJtLnNwbGl0KHRoaXMudGVybVNwbGl0dGVyKS5maWx0ZXIoKHQpID0+IHQubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoKTtcbiAgICAgIGlmICh0aGlzLnN0b3JlKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGVybXMgPSBbcmF3VGVybV07XG4gICAgfVxuXG4gICAgbGV0IHJlc2VhcmNoZXM6IFJlc2VhcmNoW10gPSBbXTtcbiAgICB0ZXJtcy5tYXAoKHRlcm06IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgc2x1ZyA9IHRlcm0gPyB0ZXJtLnJlcGxhY2UoLygjW15cXHNdKikvZywgJycpLnRyaW0oKSA6ICcnO1xuICAgICAgaWYgKHNsdWcgPT09ICcnKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXNlYXJjaGVzID0gcmVzZWFyY2hlcy5jb25jYXQodGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaCh0ZXJtLCB7XG4gICAgICAgIGZvcmNlTkE6IHRoaXMuZm9yY2VOQVxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHRoaXMucmVzZWFyY2hlcyQkID0gcmVzZWFyY2hlcy5tYXAoKHJlc2VhcmNoKSA9PiB7XG4gICAgICByZXR1cm4gcmVzZWFyY2gucmVxdWVzdC5zdWJzY3JpYmUoKHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdKSA9PiB7XG4gICAgICAgIHRoaXMub25SZXNlYXJjaENvbXBsZXRlZChyZXNlYXJjaCwgcmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgcmVzZWFyY2ggIGlzIGNvbXBsZXRlZCwgZW1pdCBhbiBldmVudCBhbmQgdXBkYXRlXG4gICAqIHRoZSBzdG9yZSdzIGl0ZW1zLlxuICAgKiBAcGFyYW0gcmVzZWFyY2ggUmVzZWFyY2hcbiAgICogQHBhcmFtIHJlc3VsdHMgUmVzZWFyY2ggcmVzdWx0c1xuICAgKi9cbiAgcHJpdmF0ZSBvblJlc2VhcmNoQ29tcGxldGVkKHJlc2VhcmNoOiBSZXNlYXJjaCwgcmVzdWx0czogU2VhcmNoUmVzdWx0W10pIHtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHsgcmVzZWFyY2gsIHJlc3VsdHMgfSk7XG5cbiAgICBpZiAodGhpcy5zdG9yZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBuZXdSZXN1bHRzID0gdGhpcy5zdG9yZVxuICAgICAgICAuYWxsKClcbiAgICAgICAgLmZpbHRlcigocmVzdWx0KSA9PiByZXN1bHQuc291cmNlICE9PSByZXNlYXJjaC5zb3VyY2UpXG4gICAgICAgIC5jb25jYXQocmVzdWx0cyk7XG4gICAgICB0aGlzLnN0b3JlLnVwZGF0ZU1hbnkobmV3UmVzdWx0cyk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaWdvLXNlYXJjaC1iYXItY29udGFpbmVyXCIgW25nQ2xhc3NdPVwie2VtcHR5OiBlbXB0eSQgfCBhc3luY31cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIFtmbG9hdExhYmVsXT1cImZsb2F0TGFiZWxcIiBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCI+XG4gICAgPG1hdC1sYWJlbCAqbmdJZj1cImxhYmVsXCI+e3tsYWJlbH19PC9tYXQtbGFiZWw+XG4gICAgPGlucHV0XG4gICAgICAjaW5wdXRcbiAgICAgIG1hdElucHV0XG4gICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgW25nQ2xhc3NdPVwieydoYXNTZWFyY2hJY29uJzogc2VhcmNoSWNvbn1cIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkJCB8IGFzeW5jXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciA/IHBsYWNlaG9sZGVyIDogKHBsYWNlaG9sZGVyJCB8IGFzeW5jKSA/IChwbGFjZWhvbGRlciQudmFsdWUgfCB0cmFuc2xhdGUpIDogdW5kZWZpbmVkXCJcbiAgICAgIFt2YWx1ZV09XCJ0ZXJtJCB8IGFzeW5jXCJcbiAgICAgIChrZXl1cCk9XCJvbktleXVwKCRldmVudClcIlxuICAgICAgKHRvdWNoZW5kKT1cIm9uS2V5dXAoJGV2ZW50KVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxkaXYgY2xhc3M9XCJzZWFyY2gtYmFyLWJ1dHRvbnNcIj5cbiAgICA8YnV0dG9uXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAqbmdJZj1cInNlYXJjaEljb24gIT09IHVuZGVmaW5lZFwiPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJ7e3NlYXJjaEljb259fVwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uXG4gICAgICAqbmdJZj1cIihlbXB0eSQgfCBhc3luYyk9PT1mYWxzZVwiXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAoY2xpY2spPVwib25DbGVhckJ1dHRvbkNsaWNrKClcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiY2xvc2VcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGlnby1zZWFyY2gtc2VsZWN0b3JcbiAgICAgICpuZ0lmPVwic2VhcmNoU2VsZWN0b3JcIlxuICAgICAgW3NlYXJjaFR5cGVzXT1cInNlYXJjaFR5cGVzXCJcbiAgICAgIFtzZWFyY2hUeXBlXT1cInNlYXJjaFR5cGUkIHwgYXN5bmNcIlxuICAgICAgKHNlYXJjaFR5cGVDaGFuZ2UpPVwib25TZWFyY2hUeXBlQ2hhbmdlKCRldmVudClcIj5cbiAgICA8L2lnby1zZWFyY2gtc2VsZWN0b3I+XG5cbiAgICA8aWdvLXNlYXJjaC1zZXR0aW5nc1xuICAgICAgKm5nSWY9XCJzZWFyY2hTZXR0aW5nc1wiXG4gICAgICBbcG9pbnRlclN1bW1hcnlFbmFibGVkXT1cInBvaW50ZXJTdW1tYXJ5RW5hYmxlZFwiXG4gICAgICAocG9pbnRlclN1bW1hcnlTdGF0dXMpPVwicG9pbnRlclN1bW1hcnlTdGF0dXMuZW1pdCgkZXZlbnQpXCJcbiAgICAgIFtzZWFyY2hSZXN1bHRzR2VvbWV0cnlFbmFibGVkXT1cInNlYXJjaFJlc3VsdHNHZW9tZXRyeUVuYWJsZWRcIlxuICAgICAgKHNlYXJjaFJlc3VsdHNHZW9tZXRyeVN0YXR1cyk9XCJzZWFyY2hSZXN1bHRzR2VvbWV0cnlTdGF0dXMuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChzZWFyY2hTb3VyY2VDaGFuZ2UpPVwib25TZWFyY2hTZXR0aW5nc0NoYW5nZSgpXCI+XG4gICAgPC9pZ28tc2VhcmNoLXNldHRpbmdzPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19