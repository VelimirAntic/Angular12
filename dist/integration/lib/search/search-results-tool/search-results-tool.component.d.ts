import { OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfigService } from '@igo2/core';
import { EntityStore, FlexibleState } from '@igo2/common';
import { Feature, SearchResult, IgoMap, Research } from '@igo2/geo';
import { MapState } from '../../map/map.state';
import { SearchState } from '../search.state';
import { ToolState } from '../../tool/tool.state';
import { DirectionState } from '../../directions/directions.state';
import * as i0 from "@angular/core";
/**
 * Tool to browse the search results
 */
export declare class SearchResultsToolComponent implements OnInit, OnDestroy {
    private mapState;
    private searchState;
    private elRef;
    toolState: ToolState;
    private directionState;
    /**
     * to show hide results icons
     */
    showIcons: boolean;
    private hasFeatureEmphasisOnSelection;
    private showResultsGeometries$$;
    private getRoute$$;
    private shownResultsGeometries;
    private shownResultsEmphasisGeometries;
    private focusedResult$;
    isSelectedResultOutOfView$: BehaviorSubject<boolean>;
    private isSelectedResultOutOfView$$;
    private abstractFocusedResult;
    private abstractSelectedResult;
    /**
     * Store holding the search results
     * @internal
     */
    get store(): EntityStore<SearchResult>;
    /**
     * Map to display the results on
     * @internal
     */
    get map(): IgoMap;
    get featureTitle(): string;
    get feature$(): Observable<Feature>;
    feature: Feature;
    term: string;
    private searchTerm$$;
    settingsChange$: BehaviorSubject<boolean>;
    topPanelState$: BehaviorSubject<FlexibleState>;
    private topPanelState$$;
    set topPanelState(value: FlexibleState);
    get topPanelState(): FlexibleState;
    get termSplitter(): string;
    private format;
    constructor(mapState: MapState, searchState: SearchState, elRef: ElementRef, toolState: ToolState, directionState: DirectionState, configService: ConfigService);
    ngOnInit(): void;
    private monitorResultOutOfView;
    private buildResultEmphasis;
    private clearFeatureEmphasis;
    ngOnDestroy(): void;
    /**
     * Try to add a feature to the map when it's being focused
     * @internal
     * @param result A search result that could be a feature
     */
    onResultFocus(result: SearchResult): void;
    onResultUnfocus(result: SearchResult): void;
    /**
     * Try to add a feature to the map when it's being selected
     * @internal
     * @param result A search result that could be a feature or some layer options
     */
    onResultSelect(result: SearchResult): void;
    onSearch(event: {
        research: Research;
        results: SearchResult[];
    }): void;
    computeElementRef(): any[];
    adjustTopPanel(elemSource: any, elem: any): void;
    toggleTopPanel(): void;
    zoomToFeatureExtent(): void;
    /**
     * Try to add a feature to the map overlay
     * @param result A search result that could be a feature
     */
    private tryAddFeatureToMap;
    isScrolledIntoView(elemSource: any, elem: any): boolean;
    getRoute(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchResultsToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchResultsToolComponent, "igo-search-results-tool", never, { "showIcons": "showIcons"; "topPanelState": "topPanelState"; }, {}, never, never>;
}
