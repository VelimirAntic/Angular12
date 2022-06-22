import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../../../feature';
import { SearchResult } from '../search.interfaces';
import { SearchSource, TextSearch, ReverseSearch } from './source';
import { SearchSourceOptions, TextSearchOptions, ReverseSearchOptions } from './source.interfaces';
import { StoredQueriesSearchSourceOptions, StoredQueriesReverseSearchSourceOptions } from './storedqueries.interfaces';
import { LanguageService, StorageService } from '@igo2/core';
import * as i0 from "@angular/core";
/**
 * StoredQueries search source
 */
export declare class StoredQueriesSearchSource extends SearchSource implements TextSearch {
    private http;
    private languageService;
    static id: string;
    static type: string;
    static propertiesBlacklist: string[];
    resultTitle: 'title';
    storedQueriesOptions: StoredQueriesSearchSourceOptions;
    multipleFieldsQuery: boolean;
    constructor(http: HttpClient, languageService: LanguageService, storageService: StorageService, options: SearchSourceOptions);
    getId(): string;
    getType(): string;
    protected getDefaultOptions(): SearchSourceOptions;
    /**
     * Search a location by name or keyword
     * @param term Location name or keyword
     * @returns Observable of <SearchResult<Feature>[]
     */
    search(term: string, options?: TextSearchOptions): Observable<SearchResult<Feature>[]>;
    private getFormatFromOptions;
    private extractWFSData;
    private termSplitter;
    private computeRequestParams;
    private extractResults;
    private dataToResult;
    private computeProperties;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoredQueriesSearchSource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoredQueriesSearchSource>;
}
/**
 * StoredQueriesReverse search source
 */
export declare class StoredQueriesReverseSearchSource extends SearchSource implements ReverseSearch {
    private http;
    private languageService;
    static id: string;
    static type: string;
    static propertiesBlacklist: string[];
    resultTitle: 'title';
    storedQueriesOptions: StoredQueriesReverseSearchSourceOptions;
    multipleFieldsQuery: boolean;
    constructor(http: HttpClient, languageService: LanguageService, storageService: StorageService, options: SearchSourceOptions);
    getId(): string;
    getType(): string;
    protected getDefaultOptions(): SearchSourceOptions;
    /**
     * Search a location by coordinates
     * @param lonLat Location coordinates
     * @param distance Search raidus around lonLat
     * @returns Observable of <SearchResult<Feature>[]
     */
    reverseSearch(lonLat: [number, number], options?: ReverseSearchOptions): Observable<SearchResult<Feature>[]>;
    private getFormatFromOptions;
    private extractWFSData;
    private computeRequestParams;
    private extractResults;
    private dataToResult;
    private computeProperties;
    static ɵfac: i0.ɵɵFactoryDeclaration<StoredQueriesReverseSearchSource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StoredQueriesReverseSearchSource>;
}
