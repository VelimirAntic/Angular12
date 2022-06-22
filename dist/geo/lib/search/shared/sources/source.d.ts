import { Observable } from 'rxjs';
import { StorageService } from '@igo2/core';
import { SearchResult } from '../search.interfaces';
import { SearchSourceOptions, TextSearchOptions, ReverseSearchOptions, SearchSourceSettings } from './source.interfaces';
/**
 * Base search source class
 */
export declare class SearchSource {
    private storageService?;
    /**
     * Search source ID
     * @internal
     */
    static id: string;
    /**
     * Search source type
     * @internal
     */
    static type: string;
    /**
     * Search source options
     * @internal
     */
    protected options: SearchSourceOptions;
    /**
     * Get search source's id
     * @returns Search source's id
     */
    getId(): string;
    /**
     * Get search source's type
     * @returns Search source's type
     */
    getType(): string;
    /**
     * Get search source's default options
     * @returns Search source default options
     */
    protected getDefaultOptions(): SearchSourceOptions;
    /**
     * Search source's title
     */
    get title(): string;
    /**
     * Whether the search source is available
     */
    get available(): boolean;
    /**
     * Whether the search source is enabled
     */
    set enabled(value: boolean);
    get enabled(): boolean;
    get showInPointerSummary(): boolean;
    get showInSettings(): boolean;
    /**
     * Search url
     */
    get searchUrl(): string;
    /**
     * Search query params
     */
    get params(): {
        [key: string]: string;
    };
    /**
     * Search settings
     */
    get settings(): SearchSourceSettings[];
    /**
     * Set params from selected settings
     */
    setParamFromSetting(setting: SearchSourceSettings, saveInStorage?: boolean): void;
    /**
     * Search results display order
     */
    get displayOrder(): number;
    constructor(options: SearchSourceOptions, storageService?: StorageService);
    /**
     * Get hashtags valid
     * @param hashtag hashtag from query
     */
    getHashtagsValid(term: string, settingsName: string): string[];
    getSettingsValues(search: string): SearchSourceSettings;
}
/**
 * Search sources that allow searching by text implement this class
 */
export interface TextSearch {
    /**
     * Search by text
     * @param term Text
     * @param options Optional: TextSearchOptions
     * @returns Observable or search results
     */
    search(term: string | undefined, options?: TextSearchOptions): Observable<SearchResult[]>;
}
/**
 * Search sources that allow searching by coordinates implement this class
 */
export interface ReverseSearch {
    /**
     * Search by text
     * @param lonLat Coordinates
     * @param options Optional: ReverseSearchOptions
     * @returns Observable or search results
     */
    reverseSearch(lonLat: [number, number], options?: ReverseSearchOptions): Observable<SearchResult[]>;
}
