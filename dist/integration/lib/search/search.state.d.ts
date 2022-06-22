import { EntityStore } from '@igo2/common';
import { ConfigService, StorageService } from '@igo2/core';
import { SearchResult, SearchSourceService, CommonVectorStyleOptions } from '@igo2/geo';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of the search module
 */
export declare class SearchState {
    private searchSourceService;
    private storageService;
    private configService;
    searchOverlayStyle: CommonVectorStyleOptions;
    searchOverlayStyleSelection: CommonVectorStyleOptions;
    searchOverlayStyleFocus: CommonVectorStyleOptions;
    focusedOrResolution$$: Subscription;
    selectedOrResolution$$: Subscription;
    readonly searchTermSplitter$: BehaviorSubject<string>;
    readonly searchTerm$: BehaviorSubject<string>;
    readonly searchType$: BehaviorSubject<string>;
    readonly searchDisabled$: BehaviorSubject<boolean>;
    readonly searchResultsGeometryEnabled$: BehaviorSubject<boolean>;
    readonly searchSettingsChange$: BehaviorSubject<boolean>;
    readonly selectedResult$: BehaviorSubject<SearchResult>;
    /**
     * Store that holds the search results
     */
    readonly store: EntityStore<SearchResult>;
    /**
     * Search types currently enabled in the search source service
     */
    get searchTypes(): string[];
    constructor(searchSourceService: SearchSourceService, storageService: StorageService, configService: ConfigService);
    private createCustomFilterTermStrategy;
    /**
     * Activate custom strategy
     *
     */
    activateCustomFilterTermStrategy(): void;
    /**
     * Deactivate custom strategy
     *
     */
    deactivateCustomFilterTermStrategy(): void;
    enableSearch(): void;
    disableSearch(): void;
    setSearchTerm(searchTerm: string): void;
    setSearchType(searchType: string): void;
    setSearchSettingsChange(): void;
    setSelectedResult(result: SearchResult): void;
    setSearchResultsGeometryStatus(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SearchState>;
}
