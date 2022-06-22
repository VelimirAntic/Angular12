import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../../../feature';
import { SearchResult } from '../search.interfaces';
import { SearchSource, TextSearch } from './source';
import { SearchSourceOptions, TextSearchOptions } from './source.interfaces';
import { LanguageService, StorageService } from '@igo2/core';
import * as i0 from "@angular/core";
/**
 * Cadastre search source
 */
export declare class CadastreSearchSource extends SearchSource implements TextSearch {
    private http;
    private languageService;
    static id: string;
    static type: string;
    constructor(http: HttpClient, languageService: LanguageService, storageService: StorageService, options: SearchSourceOptions);
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
    private computeGeometry;
    static ɵfac: i0.ɵɵFactoryDeclaration<CadastreSearchSource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CadastreSearchSource>;
}
