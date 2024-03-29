import { OnInit, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';
import { BehaviorSubject } from 'rxjs';
import { LanguageService } from '@igo2/core';
import { EntityStore } from '@igo2/common';
import { SearchResult, Research } from '../shared/search.interfaces';
import { SearchService } from '../shared/search.service';
import { SearchSourceService } from '../shared/search-source.service';
import * as i0 from "@angular/core";
/**
 * Searchbar that triggers a research in all search sources enabled.
 * If the store input is defined, the search results will be loaded
 * into that store. An event is always emitted when a research is completed.
 */
export declare class SearchBarComponent implements OnInit, OnDestroy {
    private languageService;
    private searchService;
    private searchSourceService;
    /**
     * Invalid keys
     */
    static invalidKeys: string[];
    readonly placeholder$: BehaviorSubject<string>;
    readonly empty$: BehaviorSubject<boolean>;
    /**
     * Subscription to the ssearch bar term
     */
    private term$$;
    /**
     * Search term stream
     */
    private stream$;
    /**
     * Subscription to the search term stream
     */
    private stream$$;
    /**
     * Subscription to the search type
     */
    private searchType$$;
    private researches$$;
    /**
     * List of available search types
     */
    searchTypes: string[];
    /**
     * Search term
     */
    set searchType(value: string);
    get searchType(): string;
    readonly searchType$: BehaviorSubject<string>;
    /**
     * Event emitted when the pointer summary is activated by the searchbar setting
     */
    pointerSummaryStatus: EventEmitter<boolean>;
    /**
     * Event emitted when the show geometry setting is changed
     */
    searchResultsGeometryStatus: EventEmitter<boolean>;
    /**
     * Search term
     */
    set term(value: string);
    get term(): string;
    readonly term$: BehaviorSubject<string>;
    /**
     * Whether this component is disabled
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    readonly disabled$: BehaviorSubject<boolean>;
    pointerSummaryEnabled: boolean;
    searchResultsGeometryEnabled: boolean;
    /**
     * Whether a float label should be displayed
     */
    floatLabel: FloatLabelType;
    appearance: MatFormFieldAppearance;
    placeholder: string;
    label: string;
    /**
     * Icons color (search and clear)
     */
    color: string;
    termSplitter: string;
    /**
     * Debounce time between each keystroke
     */
    debounce: number;
    /**
     * Minimum term length required to trigger a research
     */
    minLength: number;
    /**
     * Search icon
     */
    searchIcon: string;
    /**
     * Search Selector
     */
    searchSelector: boolean;
    /**
     * Search Settings
     */
    searchSettings: boolean;
    /**
     * Force coordinates in north america
     */
    forceNA: boolean;
    /**
     * Search results store
     */
    store: EntityStore<SearchResult>;
    /**
     * Event emitted when the search term changes
     */
    searchTermChange: EventEmitter<string>;
    /**
     * Event emitted when a research is completed
     */
    search: EventEmitter<{
        research: Research;
        results: SearchResult[];
    }>;
    /**
     * Event emitted when the search type changes
     */
    searchTypeChange: EventEmitter<string>;
    /**
     * Event emitted when the search type changes
     */
    clearFeature: EventEmitter<any>;
    /**
     * Event emitted when the search settings changes
     */
    searchSettingsChange: EventEmitter<any>;
    /**
     * Input element
     * @internal
     */
    input: ElementRef;
    /**
     * Whether the search bar is empty
     * @internal
     */
    get empty(): boolean;
    constructor(languageService: LanguageService, searchService: SearchService, searchSourceService: SearchSourceService);
    /**
     * Subscribe to the search term stream and trigger researches
     * @internal
     */
    ngOnInit(): void;
    /**
     * Unsubscribe to the search term stream
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * When a user types, validates the key and send it into the
     * stream if it's valid
     * @param event Keyboard event
     * @internal
     */
    onKeyup(event: KeyboardEvent): void;
    /**
     * Clear the stream and the input
     * @internal
     */
    onClearButtonClick(): void;
    /**
     * Update search type
     * @param searchType Enabled search type
     * @internal
     */
    onSearchTypeChange(searchType: string): void;
    /**
     * Update the placeholder with the enabled search type. The placeholder
     * for all availables search typers needs to be defined in the locale
     * files or an error will be thrown.
     * @param searchType Enabled search type
     * @internal
     */
    setSearchType(searchType: string): void;
    onSearchSettingsChange(): void;
    /**
     * Send the term into the stream only if this component is not disabled
     * @param term Search term
     */
    setTerm(term: string): void;
    /**
     * Clear the stream and the input
     */
    private clear;
    /**
     * Validate if a given key stroke is a valid input
     */
    private keyIsValid;
    /**
     * When the search term changes, emit an event and trigger a
     * research in every enabled search sources.
     * @param term Search term
     */
    private onSetTerm;
    private handlePlaceholder;
    private onSetSearchType;
    /**
     * Execute the search
     * @param term Search term
     */
    private doSearch;
    /**
     * When a research  is completed, emit an event and update
     * the store's items.
     * @param research Research
     * @param results Research results
     */
    private onResearchCompleted;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchBarComponent, "igo-search-bar", never, { "searchTypes": "searchTypes"; "searchType": "searchType"; "term": "term"; "disabled": "disabled"; "pointerSummaryEnabled": "pointerSummaryEnabled"; "searchResultsGeometryEnabled": "searchResultsGeometryEnabled"; "floatLabel": "floatLabel"; "appearance": "appearance"; "placeholder": "placeholder"; "label": "label"; "color": "color"; "termSplitter": "termSplitter"; "debounce": "debounce"; "minLength": "minLength"; "searchIcon": "searchIcon"; "searchSelector": "searchSelector"; "searchSettings": "searchSettings"; "forceNA": "forceNA"; "store": "store"; }, { "pointerSummaryStatus": "pointerSummaryStatus"; "searchResultsGeometryStatus": "searchResultsGeometryStatus"; "searchTermChange": "searchTermChange"; "search": "search"; "searchTypeChange": "searchTypeChange"; "clearFeature": "clearFeature"; "searchSettingsChange": "searchSettingsChange"; }, never, never>;
}
