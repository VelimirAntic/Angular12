import { Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY, timer, BehaviorSubject } from 'rxjs';
import { debounce, map } from 'rxjs/operators';
import { EntityStoreFilterCustomFuncStrategy, EntityStoreWatcher } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "../shared/search.service";
import * as i2 from "@igo2/common";
import * as i3 from "@angular/common";
import * as i4 from "./search-results-item.component";
import * as i5 from "@ngx-translate/core";
const _c0 = ["igoSearchItemToolbar"];
function SearchResultsComponent_ng_template_1_igo_collapsible_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { results: a0 }; };
function SearchResultsComponent_ng_template_1_igo_collapsible_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-collapsible", 6);
    i0.ɵɵlistener("toggle", function SearchResultsComponent_ng_template_1_igo_collapsible_0_Template_igo_collapsible_toggle_0_listener($event) { i0.ɵɵrestoreView(_r10); const group_r2 = i0.ɵɵnextContext().$implicit; const ctx_r9 = i0.ɵɵnextContext(); return (ctx_r9.collapsed[group_r2.source.title] = $event); });
    i0.ɵɵtemplate(1, SearchResultsComponent_ng_template_1_igo_collapsible_0_ng_container_1_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r2 = i0.ɵɵnextContext().$implicit;
    const _r6 = i0.ɵɵreference(4);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(group_r2.source.getId());
    i0.ɵɵproperty("title", ctx_r3.computeGroupTitle(group_r2))("collapsed", ctx_r3.collapsed[group_r2.source.title]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c1, group_r2.results));
} }
function SearchResultsComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SearchResultsComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SearchResultsComponent_ng_template_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    const group_r2 = i0.ɵɵnextContext().$implicit;
    const _r6 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, group_r2.results));
} }
const _c2 = function (a0) { return { result: a0 }; };
function SearchResultsComponent_ng_template_1_ng_template_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-search-results-item", 9);
    i0.ɵɵlistener("focus", function SearchResultsComponent_ng_template_1_ng_template_3_ng_template_0_Template_igo_search_results_item_focus_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const result_r18 = restoredCtx.$implicit; const ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19.resultFocus.emit(result_r18); })("unfocus", function SearchResultsComponent_ng_template_1_ng_template_3_ng_template_0_Template_igo_search_results_item_unfocus_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const result_r18 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.resultUnfocus.emit(result_r18); })("select", function SearchResultsComponent_ng_template_1_ng_template_3_ng_template_0_Template_igo_search_results_item_select_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const result_r18 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(3); return ctx_r22.onResultSelect(result_r18); })("mouseenter", function SearchResultsComponent_ng_template_1_ng_template_3_ng_template_0_Template_igo_search_results_item_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const result_r18 = restoredCtx.$implicit; const ctx_r23 = i0.ɵɵnextContext(3); return ctx_r23.resultFocus.emit(result_r18); })("mouseleave", function SearchResultsComponent_ng_template_1_ng_template_3_ng_template_0_Template_igo_search_results_item_mouseleave_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const result_r18 = restoredCtx.$implicit; const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.resultUnfocus.emit(result_r18); });
    i0.ɵɵelementContainer(1, 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const result_r18 = ctx.$implicit;
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("map", ctx_r16.map)("result", result_r18)("showIcons", ctx_r16.showIcons)("withZoomButton", ctx_r16.withZoomButton)("focused", ctx_r16.store.state.get(result_r18).focused)("selected", ctx_r16.store.state.get(result_r18).selected);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r16.templateSearchToolbar)("ngTemplateOutletContext", i0.ɵɵpureFunction1(8, _c2, result_r18));
} }
function SearchResultsComponent_ng_template_1_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵlistener("click", function SearchResultsComponent_ng_template_1_ng_template_3_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r27); const group_r2 = i0.ɵɵnextContext(2).$implicit; const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.displayMoreResults(group_r2); });
    i0.ɵɵelementStart(1, "u");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, "igo.geo.search.displayMoreResults"));
} }
function SearchResultsComponent_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SearchResultsComponent_ng_template_1_ng_template_3_ng_template_0_Template, 2, 10, "ng-template", 1);
    i0.ɵɵtemplate(1, SearchResultsComponent_ng_template_1_ng_template_3_span_1_Template, 4, 3, "span", 8);
} if (rf & 2) {
    const results_r15 = ctx.results;
    const group_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", results_r15);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isMoreResults(group_r2));
} }
function SearchResultsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SearchResultsComponent_ng_template_1_igo_collapsible_0_Template, 2, 8, "igo-collapsible", 3);
    i0.ɵɵtemplate(1, SearchResultsComponent_ng_template_1_ng_template_1_Template, 1, 4, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, SearchResultsComponent_ng_template_1_ng_template_3_Template, 2, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.mode === ctx_r1.searchResultMode.Grouped)("ngIfElse", _r4);
} }
export var SearchResultMode;
(function (SearchResultMode) {
    SearchResultMode["Grouped"] = "grouped";
    SearchResultMode["Flat"] = "flat";
})(SearchResultMode || (SearchResultMode = {}));
/**
 * List of search results with focus and selection capabilities.
 * This component is dumb and only emits events.
 */
export class SearchResultsComponent {
    constructor(cdRef, searchService) {
        this.cdRef = cdRef;
        this.searchService = searchService;
        /**
         * Reference to the SearchResultMode enum
         * @internal
         */
        this.searchResultMode = SearchResultMode;
        this.pageIterator = [];
        this.collapsed = [];
        /**
         * Search results display mode
         */
        this.mode = SearchResultMode.Grouped;
        /**
         * Whether there should be a zoom button
         */
        this.withZoomButton = false;
        this.settingsChange$ = new BehaviorSubject(undefined);
        this.termSplitter = '|';
        /**
         * Event emitted when a result is focused
         */
        this.resultFocus = new EventEmitter();
        /**
         * Event emitted when a result is unfocused
         */
        this.resultUnfocus = new EventEmitter();
        /**
         * Event emitted when a result is selected
         */
        this.resultSelect = new EventEmitter();
        /**
         * Event emitted when a research is completed after displaying more results is clicked
         */
        this.moreResults = new EventEmitter();
        /**
         * Events emitted when a result is focus or unfocus by mouse event
         */
        this.resultMouseenter = new EventEmitter();
        this.resultMouseleave = new EventEmitter();
    }
    /**
     * Search term
     */
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value;
        this.pageIterator = [];
    }
    get results$() {
        if (this._results$ === undefined) {
            this._results$ = this.liftResults();
        }
        return this._results$;
    }
    /**
     * Bind the search results store to the watcher
     * @internal
     */
    ngOnInit() {
        this.watcher = new EntityStoreWatcher(this.store, this.cdRef);
        this.settingsChange$$ = this.settingsChange$.subscribe(() => {
            this.pageIterator = [];
        });
    }
    /**
     * Unbind the search results store from the watcher
     * @internal
     */
    ngOnDestroy() {
        this.watcher.destroy();
        this.settingsChange$$.unsubscribe();
    }
    /**
     * Compute a group title
     * @param group Search results group
     * @returns Group title
     * @internal
     */
    computeGroupTitle(group) {
        const parts = [group.source.title];
        const count = group.results.length;
        if (count > 1) {
            parts.push(`(${count})`);
        }
        return parts.join(' ');
    }
    /**
     * When a result is selected, update it's state in the store and emit
     * an event. A selected result is also considered focused
     * @param result Search result
     * @internal
     */
    onResultSelect(result) {
        if (this.store.state.get(result)) {
            if (this.store.state.get(result).selected === true) {
                return;
            }
        }
        this.store.state.update(result, { focused: true, selected: true }, true);
        this.resultSelect.emit(result);
    }
    /**
     * Return an observable of the search results, grouped by search source
     * @returns Observable of grouped search results
     * @internal
     */
    liftResults() {
        return this.store.stateView.all$().pipe(debounce((results) => {
            return results.length === 0 ? EMPTY : timer(200);
        }), map((results) => {
            return this.groupResults(results.map(r => r.entity).sort(this.sortByOrder));
        }));
    }
    /**
     * Sort the results by display order.
     * @param r1 First result
     * @param r2 Second result
     */
    sortByOrder(r1, r2) {
        return r1.source.displayOrder - r2.source.displayOrder;
    }
    /**
     * Group results by search source
     * @param results Search results from all sources
     * @returns Search results grouped by source
     */
    groupResults(results) {
        const grouped = new Map();
        results.forEach((result) => {
            const source = result.source;
            let sourceResults = grouped.get(source);
            if (sourceResults === undefined) {
                sourceResults = [];
                grouped.set(source, sourceResults);
            }
            sourceResults.push(result);
        });
        return Array.from(grouped.keys()).map((source) => {
            if (this.pageIterator[source.getId()] === undefined) {
                this.pageIterator[source.getId()] = 1;
            }
            return { source, results: grouped.get(source) };
        });
    }
    isMoreResults(group) {
        // getStrategyOfType is to avoid display more result based on a filtered state
        const stategy = this.store.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
        const active = (stategy === null || stategy === void 0 ? void 0 : stategy.active) || false;
        return !active && group.results &&
            group.results[group.results.length - 1].meta.nextPage === true;
    }
    displayMoreResults(group) {
        const options = {
            sourceId: group.source.getId(),
            page: ++this.pageIterator[group.source.getId()]
        };
        let terms;
        if (this.termSplitter && this.term.match(new RegExp(this.termSplitter, 'g'))) {
            terms = this.term.split(this.termSplitter);
        }
        else {
            terms = [this.term];
        }
        let researches = [];
        terms.map((term) => {
            researches = researches.concat(this.searchService.search(term, options));
        });
        researches.map(research => {
            research.request.subscribe((results) => {
                const newResults = group.results.concat(results);
                if (!results.length) {
                    newResults[newResults.length - 1].meta.nextPage = false;
                }
                this.moreResults.emit({ research, results: newResults });
            });
        });
        return;
    }
}
SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.SearchService)); };
SearchResultsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchResultsComponent, selectors: [["igo-search-results"]], contentQueries: function SearchResultsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateSearchToolbar = _t.first);
    } }, inputs: { map: "map", store: "store", showIcons: "showIcons", mode: "mode", withZoomButton: "withZoomButton", term: "term", settingsChange$: "settingsChange$", termSplitter: "termSplitter" }, outputs: { resultFocus: "resultFocus", resultUnfocus: "resultUnfocus", resultSelect: "resultSelect", moreResults: "moreResults", resultMouseenter: "resultMouseenter", resultMouseleave: "resultMouseleave" }, decls: 4, vars: 4, consts: [[3, "navigation"], ["ngFor", "", 3, "ngForOf"], ["groupTemplate", ""], [3, "class", "title", "collapsed", "toggle", 4, "ngIf", "ngIfElse"], ["flatTemplate", ""], ["storeItemTemplate", ""], [3, "title", "collapsed", "toggle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "moreResults mat-typography", 3, "click", 4, "ngIf"], ["igoListItem", "", "color", "accent", 3, "map", "result", "showIcons", "withZoomButton", "focused", "selected", "focus", "unfocus", "select", "mouseenter", "mouseleave"], ["igoSearchItemToolbar", "", 3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "moreResults", "mat-typography", 3, "click"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-list", 0);
        i0.ɵɵtemplate(1, SearchResultsComponent_ng_template_1_Template, 5, 2, "ng-template", 1, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("navigation", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx.results$));
    } }, directives: [i2.ListComponent, i3.NgForOf, i3.NgIf, i2.CollapsibleComponent, i3.NgTemplateOutlet, i4.SearchResultsItemComponent, i2.ListItemDirective], pipes: [i3.AsyncPipe, i5.TranslatePipe], styles: [".moreResults[_ngcontent-%COMP%]{cursor:pointer;color:#00f;float:right;margin-right:10px;margin-top:5px}igo-list[_ngcontent-%COMP%]     mat-list{height:100%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchResultsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-search-results',
                templateUrl: './search-results.component.html',
                styleUrls: ['./search-results.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.SearchService }]; }, { map: [{
            type: Input
        }], store: [{
            type: Input
        }], showIcons: [{
            type: Input
        }], mode: [{
            type: Input
        }], withZoomButton: [{
            type: Input
        }], term: [{
            type: Input
        }], settingsChange$: [{
            type: Input
        }], termSplitter: [{
            type: Input
        }], resultFocus: [{
            type: Output
        }], resultUnfocus: [{
            type: Output
        }], resultSelect: [{
            type: Output
        }], moreResults: [{
            type: Output
        }], resultMouseenter: [{
            type: Output
        }], resultMouseleave: [{
            type: Output
        }], templateSearchToolbar: [{
            type: ContentChild,
            args: ['igoSearchItemToolbar', /* TODO: add static flag */ {}]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvc2VhcmNoL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDWix1QkFBdUIsRUFJeEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFjLEtBQUssRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFBNEIsbUNBQW1DLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7OztJQ0wzRyx3QkFBc0c7Ozs7O0lBTHhHLDBDQUlvRDtJQUFsRCxvVEFBaUQ7SUFDakQseUhBQXNHO0lBQ3hHLGlCQUFrQjs7Ozs7SUFORCxzQ0FBOEI7SUFFN0MsMERBQWtDLHNEQUFBO0lBR25CLGVBQXFDO0lBQXJDLHNDQUFxQyx5RUFBQTs7O0lBSXBELHdCQUFzRzs7O0lBQXRHLHFIQUFzRzs7OztJQUF2RixzQ0FBcUMseUVBQUE7Ozs7O0lBS2xELGtEQWE0QztJQUoxQyx5UkFBUyxvQ0FBd0IsSUFBQyxnUkFDdkIsc0NBQTBCLElBREgsb1RBQUEsc1JBR3BCLG9DQUF3QixJQUhKLHNSQUlwQixzQ0FBMEIsSUFKTjtJQU1sQyw0QkFHZTtJQUVqQixpQkFBMEI7Ozs7SUFqQnhCLGlDQUFXLHNCQUFBLGdDQUFB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RUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dHQW1CVSxHQUFHO2tCQUFYLEtBQUs7WUFLRyxLQUFLO2tCQUFiLEtBQUs7WUFLRyxTQUFTO2tCQUFqQixLQUFLO1lBS0csSUFBSTtrQkFBWixLQUFLO1lBS0csY0FBYztrQkFBdEIsS0FBSztZQU1GLElBQUk7a0JBRFAsS0FBSztZQVVHLGVBQWU7a0JBQXZCLEtBQUs7WUFFRyxZQUFZO2tCQUFwQixLQUFLO1lBS0ksV0FBVztrQkFBcEIsTUFBTTtZQUtHLGFBQWE7a0JBQXRCLE1BQU07WUFLRyxZQUFZO2tCQUFyQixNQUFNO1lBS0csV0FBVztrQkFBcEIsTUFBTTtZQVFHLGdCQUFnQjtrQkFBekIsTUFBTTtZQUNHLGdCQUFnQjtrQkFBekIsTUFBTTtZQUUrRCxxQkFBcUI7a0JBQTFGLFlBQVk7bUJBQUMsc0JBQXNCLEVBQUUsMkJBQTJCLENBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDb250ZW50Q2hpbGQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIEVNUFRZLCB0aW1lciwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEVudGl0eVN0YXRlLCBFbnRpdHlTdG9yZSwgRW50aXR5U3RvcmVGaWx0ZXJDdXN0b21GdW5jU3RyYXRlZ3ksIEVudGl0eVN0b3JlV2F0Y2hlciB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcCc7XG5cbmltcG9ydCB7IFRleHRTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vc2hhcmVkL3NvdXJjZXMvc291cmNlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQsIFJlc2VhcmNoIH0gZnJvbSAnLi4vc2hhcmVkL3NlYXJjaC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNlYXJjaFNvdXJjZSB9IGZyb20gJy4uL3NoYXJlZC9zb3VyY2VzL3NvdXJjZSc7XG5cbmV4cG9ydCBlbnVtIFNlYXJjaFJlc3VsdE1vZGUge1xuICBHcm91cGVkID0gJ2dyb3VwZWQnLFxuICBGbGF0ID0gJ2ZsYXQnXG59XG5cbi8qKlxuICogTGlzdCBvZiBzZWFyY2ggcmVzdWx0cyB3aXRoIGZvY3VzIGFuZCBzZWxlY3Rpb24gY2FwYWJpbGl0aWVzLlxuICogVGhpcyBjb21wb25lbnQgaXMgZHVtYiBhbmQgb25seSBlbWl0cyBldmVudHMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1zZWFyY2gtcmVzdWx0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIFNlYXJjaFJlc3VsdE1vZGUgZW51bVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBzZWFyY2hSZXN1bHRNb2RlID0gU2VhcmNoUmVzdWx0TW9kZTtcblxuICAvKipcbiAgICogU2VhcmNoIHJlc3VsdHMgc3RvcmUgd2F0Y2hlclxuICAgKi9cbiAgcHJpdmF0ZSB3YXRjaGVyOiBFbnRpdHlTdG9yZVdhdGNoZXI8U2VhcmNoUmVzdWx0PjtcblxuICBwcml2YXRlIHNldHRpbmdzQ2hhbmdlJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBwdWJsaWMgcGFnZUl0ZXJhdG9yOiB7c291cmNlSWQ6IHN0cmluZ31bXSA9IFtdO1xuXG4gIHB1YmxpYyBjb2xsYXBzZWQ6IHtzb3VyY2VJZDogc3RyaW5nfVtdID0gW107XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgLyoqXG4gICAqIFNlYXJjaCByZXN1bHRzIHN0b3JlXG4gICAqL1xuICBASW5wdXQoKSBzdG9yZTogRW50aXR5U3RvcmU8U2VhcmNoUmVzdWx0PjtcblxuICAvKipcbiAgICogdG8gc2hvdyBoaWRlIHJlc3VsdHMgaWNvbnNcbiAgICovXG4gIEBJbnB1dCgpIHNob3dJY29uczogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2VhcmNoIHJlc3VsdHMgZGlzcGxheSBtb2RlXG4gICAqL1xuICBASW5wdXQoKSBtb2RlOiBTZWFyY2hSZXN1bHRNb2RlID0gU2VhcmNoUmVzdWx0TW9kZS5Hcm91cGVkO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIHNob3VsZCBiZSBhIHpvb20gYnV0dG9uXG4gICAqL1xuICBASW5wdXQoKSB3aXRoWm9vbUJ1dHRvbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggdGVybVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHRlcm0oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGVybTtcbiAgfVxuICBzZXQgdGVybSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGVybSA9IHZhbHVlO1xuICAgIHRoaXMucGFnZUl0ZXJhdG9yID0gW107XG4gIH1cbiAgcHVibGljIF90ZXJtOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2V0dGluZ3NDaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih1bmRlZmluZWQpO1xuXG4gIEBJbnB1dCgpIHRlcm1TcGxpdHRlcjogc3RyaW5nID0gJ3wnO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByZXN1bHQgaXMgZm9jdXNlZFxuICAgKi9cbiAgQE91dHB1dCgpIHJlc3VsdEZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxTZWFyY2hSZXN1bHQ+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHJlc3VsdCBpcyB1bmZvY3VzZWRcbiAgICovXG4gIEBPdXRwdXQoKSByZXN1bHRVbmZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxTZWFyY2hSZXN1bHQ+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHJlc3VsdCBpcyBzZWxlY3RlZFxuICAgKi9cbiAgQE91dHB1dCgpIHJlc3VsdFNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VhcmNoUmVzdWx0PigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSByZXNlYXJjaCBpcyBjb21wbGV0ZWQgYWZ0ZXIgZGlzcGxheWluZyBtb3JlIHJlc3VsdHMgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpIG1vcmVSZXN1bHRzID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgcmVzZWFyY2g6IFJlc2VhcmNoO1xuICAgIHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdO1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBFdmVudHMgZW1pdHRlZCB3aGVuIGEgcmVzdWx0IGlzIGZvY3VzIG9yIHVuZm9jdXMgYnkgbW91c2UgZXZlbnRcbiAgICovXG4gIEBPdXRwdXQoKSByZXN1bHRNb3VzZWVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxTZWFyY2hSZXN1bHQ+KCk7XG4gIEBPdXRwdXQoKSByZXN1bHRNb3VzZWxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWFyY2hSZXN1bHQ+KCk7XG5cbiAgQENvbnRlbnRDaGlsZCgnaWdvU2VhcmNoSXRlbVRvb2xiYXInLCAvKiBUT0RPOiBhZGQgc3RhdGljIGZsYWcgKi8ge30pIHRlbXBsYXRlU2VhcmNoVG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBnZXQgcmVzdWx0cyQoKTogT2JzZXJ2YWJsZTx7c291cmNlOiBTZWFyY2hTb3VyY2U7IHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdfVtdPiB7XG4gICAgaWYgKHRoaXMuX3Jlc3VsdHMkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3Jlc3VsdHMkID0gdGhpcy5saWZ0UmVzdWx0cygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0cyQ7XG4gIH1cbiAgcHJpdmF0ZSBfcmVzdWx0cyQ6IE9ic2VydmFibGU8XG4gICAge3NvdXJjZTogU2VhcmNoU291cmNlOyByZXN1bHRzOiBTZWFyY2hSZXN1bHRbXX1bXVxuICA+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIHNlYXJjaCByZXN1bHRzIHN0b3JlIHRvIHRoZSB3YXRjaGVyXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53YXRjaGVyID0gbmV3IEVudGl0eVN0b3JlV2F0Y2hlcih0aGlzLnN0b3JlLCB0aGlzLmNkUmVmKTtcblxuICAgIHRoaXMuc2V0dGluZ3NDaGFuZ2UkJCA9IHRoaXMuc2V0dGluZ3NDaGFuZ2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnBhZ2VJdGVyYXRvciA9IFtdO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgc2VhcmNoIHJlc3VsdHMgc3RvcmUgZnJvbSB0aGUgd2F0Y2hlclxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMud2F0Y2hlci5kZXN0cm95KCk7XG4gICAgdGhpcy5zZXR0aW5nc0NoYW5nZSQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZSBhIGdyb3VwIHRpdGxlXG4gICAqIEBwYXJhbSBncm91cCBTZWFyY2ggcmVzdWx0cyBncm91cFxuICAgKiBAcmV0dXJucyBHcm91cCB0aXRsZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNvbXB1dGVHcm91cFRpdGxlKGdyb3VwOiB7c291cmNlOiBTZWFyY2hTb3VyY2U7IHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdfSk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFydHMgPSBbZ3JvdXAuc291cmNlLnRpdGxlXTtcbiAgICBjb25zdCBjb3VudCA9IGdyb3VwLnJlc3VsdHMubGVuZ3RoO1xuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIHBhcnRzLnB1c2goYCgke2NvdW50fSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgcmVzdWx0IGlzIHNlbGVjdGVkLCB1cGRhdGUgaXQncyBzdGF0ZSBpbiB0aGUgc3RvcmUgYW5kIGVtaXRcbiAgICogYW4gZXZlbnQuIEEgc2VsZWN0ZWQgcmVzdWx0IGlzIGFsc28gY29uc2lkZXJlZCBmb2N1c2VkXG4gICAqIEBwYXJhbSByZXN1bHQgU2VhcmNoIHJlc3VsdFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uUmVzdWx0U2VsZWN0KHJlc3VsdDogU2VhcmNoUmVzdWx0KSB7XG4gICAgaWYgKHRoaXMuc3RvcmUuc3RhdGUuZ2V0KHJlc3VsdCkpIHtcbiAgICAgIGlmICh0aGlzLnN0b3JlLnN0YXRlLmdldChyZXN1bHQpLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdG9yZS5zdGF0ZS51cGRhdGUocmVzdWx0LCB7Zm9jdXNlZDogdHJ1ZSwgc2VsZWN0ZWQ6IHRydWV9LCB0cnVlKTtcbiAgICB0aGlzLnJlc3VsdFNlbGVjdC5lbWl0KHJlc3VsdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIG9ic2VydmFibGUgb2YgdGhlIHNlYXJjaCByZXN1bHRzLCBncm91cGVkIGJ5IHNlYXJjaCBzb3VyY2VcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSBvZiBncm91cGVkIHNlYXJjaCByZXN1bHRzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgIHByaXZhdGUgbGlmdFJlc3VsdHMoKTogT2JzZXJ2YWJsZTx7c291cmNlOiBTZWFyY2hTb3VyY2U7IHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdfVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc3RhdGVWaWV3LmFsbCQoKS5waXBlKFxuICAgICAgZGVib3VuY2UoKHJlc3VsdHM6IHtlbnRpdHk6IFNlYXJjaFJlc3VsdCwgc3RhdGU6IEVudGl0eVN0YXRlfVtdKSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmxlbmd0aCA9PT0gMCA/IEVNUFRZIDogdGltZXIoMjAwKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRzOiB7ZW50aXR5OiBTZWFyY2hSZXN1bHQsIHN0YXRlOiBFbnRpdHlTdGF0ZX1bXSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cFJlc3VsdHMocmVzdWx0cy5tYXAociA9PiByLmVudGl0eSkuc29ydCh0aGlzLnNvcnRCeU9yZGVyKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU29ydCB0aGUgcmVzdWx0cyBieSBkaXNwbGF5IG9yZGVyLlxuICAgKiBAcGFyYW0gcjEgRmlyc3QgcmVzdWx0XG4gICAqIEBwYXJhbSByMiBTZWNvbmQgcmVzdWx0XG4gICAqL1xuICBwcml2YXRlIHNvcnRCeU9yZGVyKHIxOiBTZWFyY2hSZXN1bHQsIHIyOiBTZWFyY2hSZXN1bHQpIHtcbiAgICByZXR1cm4gcjEuc291cmNlLmRpc3BsYXlPcmRlciAtIHIyLnNvdXJjZS5kaXNwbGF5T3JkZXI7XG4gIH1cblxuICAvKipcbiAgICogR3JvdXAgcmVzdWx0cyBieSBzZWFyY2ggc291cmNlXG4gICAqIEBwYXJhbSByZXN1bHRzIFNlYXJjaCByZXN1bHRzIGZyb20gYWxsIHNvdXJjZXNcbiAgICogQHJldHVybnMgU2VhcmNoIHJlc3VsdHMgZ3JvdXBlZCBieSBzb3VyY2VcbiAgICovXG4gIHByaXZhdGUgZ3JvdXBSZXN1bHRzKHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdKToge3NvdXJjZTogU2VhcmNoU291cmNlOyByZXN1bHRzOiBTZWFyY2hSZXN1bHRbXX1bXSB7XG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8U2VhcmNoU291cmNlLCBTZWFyY2hSZXN1bHRbXT4oKTtcbiAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdDogU2VhcmNoUmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2UgPSByZXN1bHQuc291cmNlO1xuICAgICAgbGV0IHNvdXJjZVJlc3VsdHMgPSBncm91cGVkLmdldChzb3VyY2UpO1xuICAgICAgaWYgKHNvdXJjZVJlc3VsdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzb3VyY2VSZXN1bHRzID0gW107XG4gICAgICAgIGdyb3VwZWQuc2V0KHNvdXJjZSwgc291cmNlUmVzdWx0cyk7XG4gICAgICB9XG4gICAgICBzb3VyY2VSZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBBcnJheS5mcm9tKGdyb3VwZWQua2V5cygpKS5tYXAoKHNvdXJjZTogU2VhcmNoU291cmNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYWdlSXRlcmF0b3Jbc291cmNlLmdldElkKCldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5wYWdlSXRlcmF0b3Jbc291cmNlLmdldElkKCldID0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7c291cmNlLCByZXN1bHRzOiBncm91cGVkLmdldChzb3VyY2UpfTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzTW9yZVJlc3VsdHMoZ3JvdXA6IHsgc291cmNlOiBTZWFyY2hTb3VyY2U7IHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdIH0pIHtcbiAgICAvLyBnZXRTdHJhdGVneU9mVHlwZSBpcyB0byBhdm9pZCBkaXNwbGF5IG1vcmUgcmVzdWx0IGJhc2VkIG9uIGEgZmlsdGVyZWQgc3RhdGVcbiAgICBjb25zdCBzdGF0ZWd5ID0gdGhpcy5zdG9yZS5nZXRTdHJhdGVneU9mVHlwZShFbnRpdHlTdG9yZUZpbHRlckN1c3RvbUZ1bmNTdHJhdGVneSk7XG4gICAgY29uc3QgYWN0aXZlID0gc3RhdGVneT8uYWN0aXZlIHx8IGZhbHNlO1xuICAgIHJldHVybiAhYWN0aXZlICYmIGdyb3VwLnJlc3VsdHMgJiZcbiAgICAgIGdyb3VwLnJlc3VsdHNbZ3JvdXAucmVzdWx0cy5sZW5ndGggLSAxXS5tZXRhLm5leHRQYWdlID09PSB0cnVlO1xuICB9XG5cbiAgZGlzcGxheU1vcmVSZXN1bHRzKGdyb3VwOiB7c291cmNlOiBTZWFyY2hTb3VyY2U7IHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdfSkge1xuICAgIGNvbnN0IG9wdGlvbnM6IFRleHRTZWFyY2hPcHRpb25zID0ge1xuICAgICAgc291cmNlSWQ6IGdyb3VwLnNvdXJjZS5nZXRJZCgpLFxuICAgICAgcGFnZTogKyt0aGlzLnBhZ2VJdGVyYXRvcltncm91cC5zb3VyY2UuZ2V0SWQoKV1cbiAgICB9O1xuXG4gICAgbGV0IHRlcm1zO1xuICAgIGlmICh0aGlzLnRlcm1TcGxpdHRlciAmJiB0aGlzLnRlcm0ubWF0Y2gobmV3IFJlZ0V4cCh0aGlzLnRlcm1TcGxpdHRlciwgJ2cnKSkpIHtcbiAgICAgIHRlcm1zID0gdGhpcy50ZXJtLnNwbGl0KHRoaXMudGVybVNwbGl0dGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVybXMgPSBbdGhpcy50ZXJtXTtcbiAgICB9XG5cbiAgICBsZXQgcmVzZWFyY2hlczogUmVzZWFyY2hbXSA9IFtdO1xuICAgIHRlcm1zLm1hcCgodGVybTogc3RyaW5nKSA9PiB7XG4gICAgICByZXNlYXJjaGVzID0gcmVzZWFyY2hlcy5jb25jYXQodGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaCh0ZXJtLCBvcHRpb25zKSk7XG4gICAgfSk7XG5cbiAgICByZXNlYXJjaGVzLm1hcChyZXNlYXJjaCA9PiB7XG4gICAgICByZXNlYXJjaC5yZXF1ZXN0LnN1YnNjcmliZSgocmVzdWx0czogU2VhcmNoUmVzdWx0W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3UmVzdWx0cyA9IGdyb3VwLnJlc3VsdHMuY29uY2F0KHJlc3VsdHMpO1xuICAgICAgICBpZiAoIXJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgbmV3UmVzdWx0c1tuZXdSZXN1bHRzLmxlbmd0aCAtIDFdLm1ldGEubmV4dFBhZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vcmVSZXN1bHRzLmVtaXQoe3Jlc2VhcmNoLCByZXN1bHRzOiBuZXdSZXN1bHRzfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiIsIjxpZ28tbGlzdCBbbmF2aWdhdGlvbl09XCJ0cnVlXCI+XG4gIDxuZy10ZW1wbGF0ZVxuICAgICNncm91cFRlbXBsYXRlXG4gICAgbmdGb3IgbGV0LWdyb3VwXG4gICAgW25nRm9yT2ZdPVwicmVzdWx0cyQgfCBhc3luY1wiPlxuXG4gICAgPGlnby1jb2xsYXBzaWJsZSBbY2xhc3NdPVwiZ3JvdXAuc291cmNlLmdldElkKClcIlxuICAgICAgKm5nSWY9XCJtb2RlID09PSBzZWFyY2hSZXN1bHRNb2RlLkdyb3VwZWQ7IGVsc2UgZmxhdFRlbXBsYXRlXCJcbiAgICAgIFt0aXRsZV09XCJjb21wdXRlR3JvdXBUaXRsZShncm91cClcIlxuICAgICAgW2NvbGxhcHNlZF09XCJjb2xsYXBzZWRbZ3JvdXAuc291cmNlLnRpdGxlXVwiXG4gICAgICAodG9nZ2xlKT1cImNvbGxhcHNlZFtncm91cC5zb3VyY2UudGl0bGVdID0gJGV2ZW50XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic3RvcmVJdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHtyZXN1bHRzOiBncm91cC5yZXN1bHRzfVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvaWdvLWNvbGxhcHNpYmxlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNmbGF0VGVtcGxhdGU+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic3RvcmVJdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHtyZXN1bHRzOiBncm91cC5yZXN1bHRzfVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI3N0b3JlSXRlbVRlbXBsYXRlIGxldC1yZXN1bHRzPVwicmVzdWx0c1wiPlxuICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1yZXN1bHQgW25nRm9yT2ZdPVwicmVzdWx0c1wiPlxuICAgICAgICA8aWdvLXNlYXJjaC1yZXN1bHRzLWl0ZW1cbiAgICAgICAgICBpZ29MaXN0SXRlbVxuICAgICAgICAgIGNvbG9yPVwiYWNjZW50XCJcbiAgICAgICAgICBbbWFwXT1cIm1hcFwiXG4gICAgICAgICAgW3Jlc3VsdF09XCJyZXN1bHRcIlxuICAgICAgICAgIFtzaG93SWNvbnNdPVwic2hvd0ljb25zXCJcbiAgICAgICAgICBbd2l0aFpvb21CdXR0b25dPVwid2l0aFpvb21CdXR0b25cIlxuICAgICAgICAgIFtmb2N1c2VkXT1cInN0b3JlLnN0YXRlLmdldChyZXN1bHQpLmZvY3VzZWRcIlxuICAgICAgICAgIFtzZWxlY3RlZF09XCJzdG9yZS5zdGF0ZS5nZXQocmVzdWx0KS5zZWxlY3RlZFwiXG4gICAgICAgICAgKGZvY3VzKT1cInJlc3VsdEZvY3VzLmVtaXQocmVzdWx0KVwiXG4gICAgICAgICAgKHVuZm9jdXMpPVwicmVzdWx0VW5mb2N1cy5lbWl0KHJlc3VsdClcIlxuICAgICAgICAgIChzZWxlY3QpPVwib25SZXN1bHRTZWxlY3QocmVzdWx0KVwiXG4gICAgICAgICAgKG1vdXNlZW50ZXIpPVwicmVzdWx0Rm9jdXMuZW1pdChyZXN1bHQpXCJcbiAgICAgICAgICAobW91c2VsZWF2ZSk9XCJyZXN1bHRVbmZvY3VzLmVtaXQocmVzdWx0KVwiPlxuXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBpZ29TZWFyY2hJdGVtVG9vbGJhclxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVTZWFyY2hUb29sYmFyXCJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7cmVzdWx0OiByZXN1bHR9XCI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPC9pZ28tc2VhcmNoLXJlc3VsdHMtaXRlbT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8c3BhbiBjbGFzcz1cIm1vcmVSZXN1bHRzIG1hdC10eXBvZ3JhcGh5XCIgKm5nSWY9XCJpc01vcmVSZXN1bHRzKGdyb3VwKVwiIChjbGljayk9XCJkaXNwbGF5TW9yZVJlc3VsdHMoZ3JvdXApXCI+XG4gICAgICAgIDx1Pnt7ICdpZ28uZ2VvLnNlYXJjaC5kaXNwbGF5TW9yZVJlc3VsdHMnIHwgdHJhbnNsYXRlIH19PC91PlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuPC9pZ28tbGlzdD5cbiJdfQ==