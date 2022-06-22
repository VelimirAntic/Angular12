import { OnChanges, EventEmitter, OnDestroy } from '@angular/core';
import { EntityStore } from '../shared';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { LanguageService, MediaService } from '@igo2/core';
import { EntityTablePaginatorOptions } from './entity-table-paginator.interface';
import * as i0 from "@angular/core";
export declare class EntityTablePaginatorComponent implements OnChanges, OnDestroy {
    private languageService;
    private mediaService;
    disabled: boolean;
    hidePageSize: boolean;
    pageIndex: number;
    pageSize: number;
    pageSizeOptions: number[];
    showFirstLastButtons: boolean;
    private count$$;
    private entitySortChange$$;
    private paginationLabelTranslation$$;
    entitySortChange$: BehaviorSubject<boolean>;
    /**
     * Entity store
     */
    store: EntityStore<object>;
    /**
     * Paginator options
     */
    paginatorOptions: EntityTablePaginatorOptions;
    /**
     * Event emitted when the paginator changes the page size or page index.
     */
    page: EventEmitter<PageEvent>;
    length: number;
    /**
     * Paginator emitted.
     */
    paginatorChange: EventEmitter<MatPaginator>;
    constructor(languageService: LanguageService, mediaService: MediaService);
    paginator: MatPaginator;
    ngOnChanges(): void;
    initPaginatorOptions(): void;
    translateLabels(): void;
    rangeLabel: (page: number, pageSize: number, length: number) => string;
    private unsubscribeAll;
    ngOnDestroy(): void;
    emitPaginator(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTablePaginatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTablePaginatorComponent, "igo-entity-table-paginator", never, { "entitySortChange$": "entitySortChange$"; "store": "store"; "paginatorOptions": "paginatorOptions"; }, { "page": "page"; "paginatorChange": "paginatorChange"; }, never, never>;
}
