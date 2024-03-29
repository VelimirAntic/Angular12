import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { EventEmitter, OnInit } from '@angular/core';
import { SearchSourceService } from '../shared/search-source.service';
import { SearchSource } from '../shared/sources/source';
import { SearchSourceSettings, SettingOptions } from '../shared/sources/source.interfaces';
import { MediaService, StorageService } from '@igo2/core';
import * as i0 from "@angular/core";
/**
 * This component allows a user to select a search type yo enable. In it's
 * current version, only one search type can be selected at once (radio). If
 * this component were to support more than one search source enabled (checkbox),
 * the searchbar component would require a small change to it's
 * placeholder getter. The search source service already supports having
 * more than one search source enabled.
 */
export declare class SearchSettingsComponent implements OnInit {
    private searchSourceService;
    private mediaService;
    private storageService;
    hasPointerReverseSearchSource: boolean;
    searchSourcesAllEnabled: boolean;
    buffer: any[];
    lastKeyTime: number;
    displayBlock: string;
    get isTouchScreen(): boolean;
    pointerSummaryEnabled: boolean;
    searchResultsGeometryEnabled: boolean;
    /**
     * Event emitted when the enabled search source changes
     */
    searchSourceChange: EventEmitter<SearchSource>;
    /**
     * Event emitted when the pointer summary is activated
     */
    pointerSummaryStatus: EventEmitter<boolean>;
    /**
     * Event emitted when the show geometry summary is changed
     */
    searchResultsGeometryStatus: EventEmitter<boolean>;
    handleKeyboardEvent(event: KeyboardEvent): void;
    constructor(searchSourceService: SearchSourceService, mediaService: MediaService, storageService: StorageService);
    ngOnInit(): void;
    /**
     * Get all search sources
     * @internal
     */
    getSearchSources(): SearchSource[];
    /**
     * Get all search sources usable for pointer summary
     * @internal
     */
    hasReverseSearchSourcesForPointerSummary(): boolean;
    /**
     * Triggered when a setting is checked (checkbox style)
     * @internal
     */
    settingsValueCheckedCheckbox(event: MatCheckboxChange, source: SearchSource, setting: SearchSourceSettings, settingValue: SettingOptions): void;
    /**
     * Defining the action to do for check/uncheck checkboxes (settings)
     * return true if all checkbox must be checked
     * return false if all checkbox must be unchecked
     * @internal
     */
    computeSettingCheckAllBehavior(setting: SearchSourceSettings): void;
    /**
     * Defining the action to do for check/uncheck checkboxes (sources)
     * return true if all checkbox must be checked
     * return false if all checkbox must be unchecked
     * @internal
     */
    computeSourcesCheckAllBehavior(sources: SearchSource[]): void;
    /**
     * Triggered when the check all / uncheck all type is clicked,
     * @internal
     */
    checkUncheckAll(event: any, source: SearchSource, setting: SearchSourceSettings): void;
    /**
     * Triggered when the check all / uncheck all type is clicked,
     * @internal
     */
    checkUncheckAllSources(event: any): void;
    /**
     * Triggered when a setting is checked (radiobutton style)
     * @internal
     */
    settingsValueCheckedRadioButton(event: MatRadioChange, source: SearchSource, setting: SearchSourceSettings, settingValue: SettingOptions): void;
    onCheckSearchSource(event: MatCheckboxChange, source: SearchSource): void;
    getAvailableValues(setting: SearchSourceSettings): SettingOptions[];
    getAvailableHashtagsValues(setting: SettingOptions): string;
    stopPropagation(event: any): void;
    changePointerReverseSearch(event: any): void;
    changeSearchResultsGeometry(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchSettingsComponent, "igo-search-settings", never, { "pointerSummaryEnabled": "pointerSummaryEnabled"; "searchResultsGeometryEnabled": "searchResultsGeometryEnabled"; }, { "searchSourceChange": "searchSourceChange"; "pointerSummaryStatus": "pointerSummaryStatus"; "searchResultsGeometryStatus": "searchResultsGeometryStatus"; }, never, never>;
}
