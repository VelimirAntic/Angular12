import { EventEmitter } from '@angular/core';
import { SearchResult } from '../shared/search.interfaces';
import { IgoMap } from '../../map';
import * as i0 from "@angular/core";
/**
 * Search results list item
 */
export declare class SearchResultsItemComponent {
    /**
     * Search result item
     */
    result: SearchResult;
    map: IgoMap;
    /**
     * Search result title
     * @internal
     */
    /**
     * to show hide results icons
     */
    showIcons: boolean;
    /**
     * Whether there should be a zoom button
     */
    withZoomButton: boolean;
    zoomEvent: EventEmitter<boolean>;
    private format;
    get title(): string;
    /**
     * Search result HTML title
     * @internal
     */
    get titleHtml(): string;
    /**
     * Search result tooltip
     * @internal
     */
    get tooltipHtml(): string;
    /**
     * Search result icon
     * @internal
     */
    get icon(): string;
    constructor();
    onZoomHandler(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchResultsItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchResultsItemComponent, "igo-search-results-item", never, { "result": "result"; "map": "map"; "showIcons": "showIcons"; "withZoomButton": "withZoomButton"; }, { "zoomEvent": "zoomEvent"; }, never, ["[igoSearchItemToolbar]"]>;
}
