import { ConfigService, LanguageService, StorageService } from '@igo2/core';
import { SearchSource } from './source';
import { CoordinatesReverseSearchSource, CoordinatesSearchResultFormatter } from './coordinates';
import { ProjectionService } from '../../../map/shared/projection.service';
/**
 * ICherche search result formatter factory
 * @ignore
 */
export declare function defaultCoordinatesSearchResultFormatterFactory(languageService: LanguageService): CoordinatesSearchResultFormatter;
/**
 * Function that returns a provider for the ICherche search result formatter
 */
export declare function provideDefaultCoordinatesSearchResultFormatter(): {
    provide: typeof CoordinatesSearchResultFormatter;
    useFactory: typeof defaultCoordinatesSearchResultFormatterFactory;
    deps: (typeof LanguageService)[];
};
/**
 * CoordinatesReverse search source factory
 * @ignore
 */
export declare function CoordinatesReverseSearchSourceFactory(config: ConfigService, languageService: LanguageService, storageService: StorageService, _projectionService: ProjectionService): CoordinatesReverseSearchSource;
/**
 * Function that returns a provider for the IChercheReverse search source
 */
export declare function provideCoordinatesReverseSearchSource(): {
    provide: typeof SearchSource;
    useFactory: typeof CoordinatesReverseSearchSourceFactory;
    multi: boolean;
    deps: (typeof ProjectionService | typeof ConfigService | typeof LanguageService | typeof StorageService)[];
};
