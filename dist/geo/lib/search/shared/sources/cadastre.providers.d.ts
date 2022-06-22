import { HttpClient } from '@angular/common/http';
import { ConfigService, LanguageService, StorageService } from '@igo2/core';
import { SearchSource } from './source';
import { CadastreSearchSource } from './cadastre';
/**
 * Cadastre search source factory
 * @ignore
 */
export declare function cadastreSearchSourceFactory(http: HttpClient, languageService: LanguageService, storageService: StorageService, config: ConfigService): CadastreSearchSource;
/**
 * Function that returns a provider for the Cadastre search source
 */
export declare function provideCadastreSearchSource(): {
    provide: typeof SearchSource;
    useFactory: typeof cadastreSearchSourceFactory;
    multi: boolean;
    deps: (typeof HttpClient | typeof ConfigService | typeof LanguageService | typeof StorageService)[];
};
