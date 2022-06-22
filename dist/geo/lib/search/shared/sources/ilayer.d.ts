import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { LanguageService, StorageService } from '@igo2/core';
import { SearchResult } from '../search.interfaces';
import { SearchSource, TextSearch } from './source';
import { TextSearchOptions } from './source.interfaces';
import { ILayerSearchSourceOptions, ILayerData, ILayerItemResponse } from './ilayer.interfaces';
import * as i0 from "@angular/core";
export declare class ILayerSearchResultFormatter {
    private languageService;
    constructor(languageService: LanguageService);
    formatResult(data: ILayerData): ILayerData;
    static ɵfac: i0.ɵɵFactoryDeclaration<ILayerSearchResultFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ILayerSearchResultFormatter>;
}
/**
 * ILayer search source
 */
export declare class ILayerSearchSource extends SearchSource implements TextSearch {
    private http;
    private languageService;
    private formatter;
    static id: string;
    static type: string;
    title$: BehaviorSubject<string>;
    get title(): string;
    constructor(http: HttpClient, languageService: LanguageService, storageService: StorageService, options: ILayerSearchSourceOptions, formatter: ILayerSearchResultFormatter);
    getId(): string;
    getType(): string;
    protected getDefaultOptions(): ILayerSearchSourceOptions;
    /**
     * Search a layer by name or keyword
     * @param term Layer name or keyword
     * @returns Observable of <SearchResult<LayerOptions>[]
     */
    search(term: string | undefined, options?: TextSearchOptions): Observable<SearchResult<ILayerItemResponse>[]>;
    private computeSearchRequestParams;
    /**
     * Remove hashtag from query
     * @param term Query with hashtag
     */
    private computeTerm;
    /**
     * Add hashtag to param if valid
     * @param term Query with hashtag
     * @param options TextSearchOptions
     */
    private computeOptionsParam;
    private extractResults;
    private dataToResult;
    private computeLayerOptions;
    private extractQueryParamsFromSourceUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<ILayerSearchSource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ILayerSearchSource>;
}
