import { EntityStore } from '@igo2/common';
import { ConfigService } from '@igo2/core';
import { CommonVectorStyleOptions, SearchResult } from '@igo2/geo';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of the query module
 */
export declare class QueryState {
    private configService;
    /**
     * Store that holds the query results
     */
    store: EntityStore<SearchResult>;
    queryOverlayStyle: CommonVectorStyleOptions;
    queryOverlayStyleSelection: CommonVectorStyleOptions;
    queryOverlayStyleFocus: CommonVectorStyleOptions;
    constructor(configService: ConfigService);
    static ɵfac: i0.ɵɵFactoryDeclaration<QueryState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QueryState>;
}
