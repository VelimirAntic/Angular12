import { EventEmitter } from '@angular/core';
import { IgoMap } from '../../map';
import { Catalog } from '../shared/catalog.abstract';
import * as i0 from "@angular/core";
/**
 * Catalog library item
 */
export declare class CatalogLibaryItemComponent {
    /**
     * Catalog
     */
    catalog: Catalog;
    /**
     * Map to add the catalog items to
     */
    map: IgoMap;
    catalogRemove: EventEmitter<any>;
    /**
     * @internal
     */
    get title(): string;
    removeCatalogFromLibrary(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CatalogLibaryItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CatalogLibaryItemComponent, "igo-catalog-library-item", never, { "catalog": "catalog"; "map": "map"; }, { "catalogRemove": "catalogRemove"; }, never, never>;
}
