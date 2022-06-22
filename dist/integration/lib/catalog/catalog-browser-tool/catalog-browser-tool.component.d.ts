import { OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EntityStore } from '@igo2/common';
import { AuthService } from '@igo2/auth';
import { IgoMap, Catalog, CatalogItem, CatalogItemState, CatalogService } from '@igo2/geo';
import { MapState } from '../../map/map.state';
import { CatalogState } from '../catalog.state';
import * as i0 from "@angular/core";
/**
 * Tool to browse a catalog's groups and layers and display them to a map.
 */
export declare class CatalogBrowserToolComponent implements OnInit, OnDestroy {
    private catalogService;
    private catalogState;
    private mapState;
    private authService;
    catalog: Catalog;
    /**
     * Store that contains the catalog items
     * @internal
     */
    store$: BehaviorSubject<EntityStore<CatalogItem, CatalogItemState>>;
    /**
     * Subscription to the selected catalog
     */
    private catalog$$;
    /**
     * Subscription for authentication
     */
    private authenticate$$;
    /**
     * Whether a group can be toggled when it's collapsed
     */
    toggleCollapsedGroup: boolean;
    /**
     * Map to add layers to
     * @internal
     */
    get map(): IgoMap;
    constructor(catalogService: CatalogService, catalogState: CatalogState, mapState: MapState, authService: AuthService);
    /**
     * @internal
     */
    ngOnInit(): void;
    /**
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * Get the selected catalog's items from the CatalogService and
     * load them into the store.
     * @param catalog Selected catalog
     */
    private loadCatalogItems;
    static ɵfac: i0.ɵɵFactoryDeclaration<CatalogBrowserToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CatalogBrowserToolComponent, "igo-catalog-browser-tool", never, { "toggleCollapsedGroup": "toggleCollapsedGroup"; }, {}, never, never>;
}
