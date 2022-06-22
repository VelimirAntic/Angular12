import { Feature } from '../../feature/shared/feature.interfaces';
import { SearchSource } from './sources/source';
import { SearchResult } from './search.interfaces';
/**
 * Function that checks whether a search source implements TextSearch
 * @param source Search source
 * @returns True if the search source implements TextSearch
 */
export declare function sourceCanSearch(source: SearchSource): boolean;
/**
 * Function that checks whether a search source implements ReverseSearch
 * @param source Search source
 * @returns True if the search source implements ReverseSearch
 */
export declare function sourceCanReverseSearch(source: SearchSource): boolean;
/**
 * Function that checks whether a search source implements ReverseSearch AND is shown in the pointer summary
 * @param source Search source
 * @returns True if the search source implements ReverseSearch AND is shown in the pointer summary
 */
export declare function sourceCanReverseSearchAsSummary(source: SearchSource): boolean;
/**
 * Return a search result out of an Feature. This is used to adapt
 * the IGO query module to the new Feature/SearchResult interfaces
 * @param feature feature
 * @param source Search source
 * @returns SearchResult
 */
export declare function featureToSearchResult(feature: Feature, source: SearchSource): SearchResult<Feature>;
export declare function findDiff(str1: string, str2: string): string;
/**
 * Return a score calculation based on "from" term with the "to" term,
 * where the perfect match is 100 and a total difference is 0 or under.
 * @param from string
 * @param to string
 * @param caseSensitive boolean
 * @returns number
 */
export declare function computeTermSimilarity(from: any, to: any, caseSensitive?: boolean): number;
