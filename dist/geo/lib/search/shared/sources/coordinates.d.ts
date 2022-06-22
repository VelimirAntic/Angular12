import { Observable, BehaviorSubject } from 'rxjs';
import { Feature } from '../../../feature';
import { SearchResult } from '../search.interfaces';
import { SearchSource, ReverseSearch } from './source';
import { SearchSourceOptions, ReverseSearchOptions } from './source.interfaces';
import { LanguageService, StorageService } from '@igo2/core';
import { Projection } from '../../../map/shared/projection.interfaces';
import * as i0 from "@angular/core";
export declare class CoordinatesSearchResultFormatter {
    private languageService;
    constructor(languageService: LanguageService);
    formatResult(result: SearchResult<Feature>): SearchResult<Feature>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoordinatesSearchResultFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CoordinatesSearchResultFormatter>;
}
/**
 * CoordinatesReverse search source
 */
export declare class CoordinatesReverseSearchSource extends SearchSource implements ReverseSearch {
    private languageService;
    static id: string;
    static type: string;
    private projections;
    title$: BehaviorSubject<string>;
    get title(): string;
    constructor(options: SearchSourceOptions, languageService: LanguageService, storageService: StorageService, projections: Projection[]);
    getId(): string;
    getType(): string;
    protected getDefaultOptions(): SearchSourceOptions;
    /**
     * Search a location by coordinates
     * @param lonLat Location coordinates
     * @param options options of ReverseSearchOptions (distance, conf, zoom, params)
     * @returns Observable of <SearchResult<Feature>[]
     */
    reverseSearch(lonLat: [number, number], options?: ReverseSearchOptions): Observable<SearchResult<Feature>[]>;
    private dataToResult;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoordinatesReverseSearchSource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CoordinatesReverseSearchSource>;
}
