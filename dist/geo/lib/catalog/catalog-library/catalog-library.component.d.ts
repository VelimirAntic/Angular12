import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EntityStore } from '@igo2/common';
import { LanguageService, MessageService, StorageService } from '@igo2/core';
import { Observable } from 'rxjs';
import { CapabilitiesService } from '../../datasource';
import { IgoMap } from '../../map';
import { Catalog } from '../shared/catalog.abstract';
import * as i0 from "@angular/core";
/**
 * Component to browse a list of available catalogs
 */
export declare class CatalogLibaryComponent implements OnInit, OnDestroy {
    private capabilitiesService;
    private messageService;
    private languageService;
    private storageService;
    private dialog;
    /**
     * Store holding the catalogs
     */
    store: EntityStore<Catalog>;
    /**
     * Map to add the catalog items to
     */
    map: IgoMap;
    /**
     * Determine if the form to add a catalog is allowed
     */
    addCatalogAllowed: boolean;
    /**
     * Determine if the form to add a catalog is allowed
     */
    predefinedCatalogs: Catalog[];
    /**
     * Event emitted a catalog is selected or unselected
     */
    catalogSelectChange: EventEmitter<{
        selected: boolean;
        catalog: Catalog;
    }>;
    submitDisabled: boolean;
    private addingCatalog$$;
    get addedCatalogs(): Catalog[];
    set addedCatalogs(catalogs: Catalog[]);
    constructor(capabilitiesService: CapabilitiesService, messageService: MessageService, languageService: LanguageService, storageService: StorageService, dialog: MatDialog);
    /**
     * @internal
     */
    ngOnInit(): void;
    getCatalogs(): Observable<Catalog[]>;
    /**
     * When a catalog is selected, update it's state in the store
     * and emit the catalog select change event
     * @internal
     */
    onCatalogSelect(catalog: Catalog): void;
    private unsubscribeAddingCatalog;
    addCatalog(addedCatalog: Catalog): void;
    ngOnDestroy(): void;
    onCatalogRemove(catalog: any): void;
    addCatalogDialog(error?: any, addedCatalog?: Catalog): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CatalogLibaryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CatalogLibaryComponent, "igo-catalog-library", never, { "store": "store"; "map": "map"; "addCatalogAllowed": "addCatalogAllowed"; "predefinedCatalogs": "predefinedCatalogs"; }, { "catalogSelectChange": "catalogSelectChange"; }, never, never>;
}
