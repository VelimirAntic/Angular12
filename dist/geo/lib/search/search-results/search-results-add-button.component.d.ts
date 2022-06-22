import { OnInit, OnDestroy } from '@angular/core';
import { SearchResult } from '../shared/search.interfaces';
import { IgoMap } from '../../map/shared/map';
import { LayerService } from '../../layer/shared/layer.service';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SearchResultAddButtonComponent implements OnInit, OnDestroy {
    private layerService;
    tooltip$: BehaviorSubject<string>;
    private resolution$$;
    inRange$: BehaviorSubject<boolean>;
    isPreview$: BehaviorSubject<boolean>;
    private layersSubcriptions;
    private lastTimeoutRequest;
    private mouseInsideAdd;
    layer: SearchResult;
    /**
     * Whether the layer is already added to the map
     */
    added: boolean;
    /**
     * The map to add the search result layer to
     */
    map: IgoMap;
    get color(): string;
    set color(value: string);
    private _color;
    constructor(layerService: LayerService);
    /**
     * @internal
     */
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * On mouse event, mouseenter /mouseleave
     * @internal
     */
    onMouseEvent(event: any): void;
    /**
     * On toggle button click, emit the added change event
     * @internal
     */
    onToggleClick(event: any): void;
    private add;
    private remove;
    /**
     * Emit added change event with added = true
     */
    private addLayerToMap;
    /**
     * Emit added change event with added = false
     */
    private removeLayerFromMap;
    isInResolutionsRange(resolution: number): void;
    computeTooltip(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchResultAddButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchResultAddButtonComponent, "igo-search-add-button", never, { "layer": "layer"; "added": "added"; "map": "map"; "color": "color"; }, {}, never, never>;
}
