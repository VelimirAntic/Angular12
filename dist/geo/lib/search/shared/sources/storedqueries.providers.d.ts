import { HttpClient } from '@angular/common/http';
import { ConfigService, LanguageService, StorageService } from '@igo2/core';
import { SearchSource } from './source';
import { StoredQueriesSearchSource, StoredQueriesReverseSearchSource } from './storedqueries';
/**
 * StoredQueries search source factory
 * @ignore
 */
export declare function storedqueriesSearchSourceFactory(http: HttpClient, languageService: LanguageService, storageService: StorageService, config: ConfigService): StoredQueriesSearchSource;
/**
 * Function that returns a provider for the StoredQueries search source
 */
export declare function provideStoredQueriesSearchSource(): {
    provide: typeof SearchSource;
    useFactory: typeof storedqueriesSearchSourceFactory;
    multi: boolean;
    deps: (typeof HttpClient | typeof ConfigService | typeof LanguageService | typeof StorageService)[];
};
/**
 * StoredQueriesReverse search source factory
 * @ignore
 */
export declare function storedqueriesReverseSearchSourceFactory(http: HttpClient, languageService: LanguageService, storageService: StorageService, config: ConfigService): StoredQueriesReverseSearchSource;
/**
 * Function that returns a provider for the StoredQueriesReverse search source
 */
export declare function provideStoredQueriesReverseSearchSource(): {
    provide: typeof SearchSource;
    useFactory: typeof storedqueriesReverseSearchSourceFactory;
    multi: boolean;
    deps: (typeof HttpClient | typeof ConfigService | typeof LanguageService | typeof StorageService)[];
};
