import { SearchSource } from '../../search/shared/sources/source';
import { SearchSourceOptions } from '../../search/shared/sources/source.interfaces';
import * as i0 from "@angular/core";
/**
 * Map search source. For now it has no search capability. All it does
 * is act as a placeholder for the map query results' "search source".
 */
export declare class QuerySearchSource extends SearchSource {
    static id: string;
    static type: string;
    constructor(options: SearchSourceOptions);
    getId(): string;
    getType(): string;
    protected getDefaultOptions(): SearchSourceOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuerySearchSource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QuerySearchSource>;
}
