import { LanguageService, ConfigService } from '@igo2/core';
import { OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { EntityStore } from '@igo2/common';
import { Catalog } from '../shared/catalog.abstract';
import * as i0 from "@angular/core";
export declare class AddCatalogDialogComponent implements OnInit, OnDestroy {
    private formBuilder;
    languageService: LanguageService;
    private configService;
    dialogRef: MatDialogRef<AddCatalogDialogComponent>;
    data: {
        predefinedCatalogs: Catalog[];
        store: EntityStore<Catalog>;
        error: boolean;
        addedCatalog: Catalog;
    };
    form: FormGroup;
    private defaultAddedCatalogType;
    private addedCatalogType$$;
    predefinedCatalogsList$: BehaviorSubject<Catalog[]>;
    typeCapabilities: string[];
    predefinedCatalogs: Catalog[];
    store: EntityStore<Catalog>;
    error: boolean;
    addedCatalog: Catalog;
    emailAddress: string;
    private storeViewAll$$;
    constructor(formBuilder: FormBuilder, languageService: LanguageService, configService: ConfigService, dialogRef: MatDialogRef<AddCatalogDialogComponent>, data: {
        predefinedCatalogs: Catalog[];
        store: EntityStore<Catalog>;
        error: boolean;
        addedCatalog: Catalog;
    });
    ngOnInit(): void;
    ngOnDestroy(): void;
    changeUrlOrTitle(catalog: Catalog): void;
    computePredefinedCatalogList(): void;
    addCatalog(addedCatalog: Catalog): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddCatalogDialogComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddCatalogDialogComponent, "igo-add-catalog-dialog", never, {}, {}, never, never>;
}
