import { OnInit } from '@angular/core';
import { EntityStore } from '@igo2/common';
import { Catalog, CatalogService } from '@igo2/geo';
import { StorageService } from '@igo2/core';
import { ToolState } from '../../tool/tool.state';
import { CatalogState } from '../catalog.state';
import * as i0 from "@angular/core";
/**
 * Tool to browse the list of available catalogs.
 */
export declare class CatalogLibraryToolComponent implements OnInit {
    private catalogService;
    private catalogState;
    private toolState;
    private storageService;
    /**
     * Store that contains the catalogs
     * @internal
     */
    get store(): EntityStore<Catalog>;
    /**
     * Determine if the form to add a catalog is allowed
     */
    addCatalogAllowed: boolean;
    /**
     * List of predefined catalogs
     */
    predefinedCatalogs: Catalog[];
    constructor(catalogService: CatalogService, catalogState: CatalogState, toolState: ToolState, storageService: StorageService);
    /**
     * @internal
     */
    ngOnInit(): void;
    /**
     * When the selected catalog changes, toggle the the CatalogBrowser tool.
     * @internal
     * @param event Select event
     */
    onCatalogSelectChange(event: {
        selected: boolean;
        catalog: Catalog;
    }): void;
    /**
     * Get all the available catalogs from the CatalogService and
     * load them into the store.
     */
    private loadCatalogs;
    static ɵfac: i0.ɵɵFactoryDeclaration<CatalogLibraryToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CatalogLibraryToolComponent, "igo-catalog-library-tool", never, { "addCatalogAllowed": "addCatalogAllowed"; "predefinedCatalogs": "predefinedCatalogs"; }, {}, never, never>;
}
