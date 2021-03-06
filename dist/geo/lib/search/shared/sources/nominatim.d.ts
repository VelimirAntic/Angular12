import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../../../feature';
import { StorageService } from '@igo2/core';
import { SearchResult } from '../search.interfaces';
import { SearchSource, TextSearch } from './source';
import { SearchSourceOptions, TextSearchOptions } from './source.interfaces';
import * as i0 from "@angular/core";
/**
 * Nominatim search source
 */
export declare class NominatimSearchSource extends SearchSource implements TextSearch {
    private http;
    static id: string;
    static type: string;
    constructor(http: HttpClient, options: SearchSourceOptions, storageService: StorageService);
    getId(): string;
    getType(): string;
    protected getDefaultOptions(): SearchSourceOptions;
    /**
     * Search a place by name
     * @param term Place name
     * @returns Observable of <SearchResult<Feature>[]
     */
    search(term: string | undefined, options?: TextSearchOptions): Observable<SearchResult<Feature>[]>;
    private computeSearchRequestParams;
    private extractResults;
    private dataToResult;
    private computeProperties;
    private computeGeometry;
    private computeExtent;
    private computeTerm;
    /**
     * Add hashtag from query in Nominatim's format (+[])
     * @param term Query with hashtag
     */
    private computeTermTags;
    /**
     * Add hashtag from settings in Nominatim's format (+[])
     * @param term Query
     */
    private computeTermSettings;
    static ɵfac: i0.ɵɵFactoryDeclaration<NominatimSearchSource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NominatimSearchSource>;
}
