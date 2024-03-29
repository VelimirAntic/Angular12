import { EventEmitter, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import type { TemplateRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { EntityStore } from '@igo2/common';
import { IgoMap } from '../../map';
import { SearchService } from '../shared/search.service';
import { SearchResult, Research } from '../shared/search.interfaces';
import { SearchSource } from '../shared/sources/source';
import * as i0 from "@angular/core";
export declare enum SearchResultMode {
    Grouped = "grouped",
    Flat = "flat"
}
/**
 * List of search results with focus and selection capabilities.
 * This component is dumb and only emits events.
 */
export declare class SearchResultsComponent implements OnInit, OnDestroy {
    private cdRef;
    private searchService;
    /**
     * Reference to the SearchResultMode enum
     * @internal
     */
    searchResultMode: typeof SearchResultMode;
    /**
     * Search results store watcher
     */
    private watcher;
    private settingsChange$$;
    pageIterator: {
        sourceId: string;
    }[];
    collapsed: {
        sourceId: string;
    }[];
    map: IgoMap;
    /**
     * Search results store
     */
    store: EntityStore<SearchResult>;
    /**
     * to show hide results icons
     */
    showIcons: boolean;
    /**
     * Search results display mode
     */
    mode: SearchResultMode;
    /**
     * Whether there should be a zoom button
     */
    withZoomButton: boolean;
    /**
     * Search term
     */
    get term(): string;
    set term(value: string);
    _term: string;
    settingsChange$: BehaviorSubject<boolean>;
    termSplitter: string;
    /**
     * Event emitted when a result is focused
     */
    resultFocus: EventEmitter<SearchResult<{
        [key: string]: any;
    }>>;
    /**
     * Event emitted when a result is unfocused
     */
    resultUnfocus: EventEmitter<SearchResult<{
        [key: string]: any;
    }>>;
    /**
     * Event emitted when a result is selected
     */
    resultSelect: EventEmitter<SearchResult<{
        [key: string]: any;
    }>>;
    /**
     * Event emitted when a research is completed after displaying more results is clicked
     */
    moreResults: EventEmitter<{
        research: Research;
        results: SearchResult[];
    }>;
    /**
     * Events emitted when a result is focus or unfocus by mouse event
     */
    resultMouseenter: EventEmitter<SearchResult<{
        [key: string]: any;
    }>>;
    resultMouseleave: EventEmitter<SearchResult<{
        [key: string]: any;
    }>>;
    templateSearchToolbar: TemplateRef<any>;
    get results$(): Observable<{
        source: SearchSource;
        results: SearchResult[];
    }[]>;
    private _results$;
    constructor(cdRef: ChangeDetectorRef, searchService: SearchService);
    /**
     * Bind the search results store to the watcher
     * @internal
     */
    ngOnInit(): void;
    /**
     * Unbind the search results store from the watcher
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * Compute a group title
     * @param group Search results group
     * @returns Group title
     * @internal
     */
    computeGroupTitle(group: {
        source: SearchSource;
        results: SearchResult[];
    }): string;
    /**
     * When a result is selected, update it's state in the store and emit
     * an event. A selected result is also considered focused
     * @param result Search result
     * @internal
     */
    onResultSelect(result: SearchResult): void;
    /**
     * Return an observable of the search results, grouped by search source
     * @returns Observable of grouped search results
     * @internal
     */
    private liftResults;
    /**
     * Sort the results by display order.
     * @param r1 First result
     * @param r2 Second result
     */
    private sortByOrder;
    /**
     * Group results by search source
     * @param results Search results from all sources
     * @returns Search results grouped by source
     */
    private groupResults;
    isMoreResults(group: {
        source: SearchSource;
        results: SearchResult[];
    }): boolean;
    displayMoreResults(group: {
        source: SearchSource;
        results: SearchResult[];
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchResultsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchResultsComponent, "igo-search-results", never, { "map": "map"; "store": "store"; "showIcons": "showIcons"; "mode": "mode"; "withZoomButton": "withZoomButton"; "term": "term"; "settingsChange$": "settingsChange$"; "termSplitter": "termSplitter"; }, { "resultFocus": "resultFocus"; "resultUnfocus": "resultUnfocus"; "resultSelect": "resultSelect"; "moreResults": "moreResults"; "resultMouseenter": "resultMouseenter"; "resultMouseleave": "resultMouseleave"; }, ["templateSearchToolbar"], never>;
}
