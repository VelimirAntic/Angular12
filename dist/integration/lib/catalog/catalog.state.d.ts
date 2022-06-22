import { AuthService } from '@igo2/auth';
import { EntityStore } from '@igo2/common';
import { Catalog, CatalogItem } from '@igo2/geo';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of the catalog module
 */
export declare class CatalogState {
    /**
     * Store that contains all the catalogs
     */
    get catalogStore(): EntityStore<Catalog>;
    private _catalogStore;
    /**
     * Catalog -> Catalog items store mapping
     */
    private catalogItemsStores;
    constructor(authService: AuthService);
    /**
     * Get a catalog's items store
     * @param catalog Catalog
     * @returns Store that contains the catalog items
     */
    getCatalogItemsStore(catalog: Catalog): EntityStore<CatalogItem>;
    /**
     * Bind a catalog items store to a catalog
     * @param catalog Catalog
     * @param store Catalog items store
     */
    setCatalogItemsStore(catalog: Catalog, store: EntityStore<CatalogItem>): void;
    /**
     * Clear all catalog items stores
     */
    clearCatalogItemsStores(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CatalogState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CatalogState>;
}
