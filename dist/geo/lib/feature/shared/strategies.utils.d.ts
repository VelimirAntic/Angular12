import { FeatureStore } from './store';
import { FeatureStoreSelectionStrategy } from './strategies/selection';
import { FeatureStoreLoadingStrategy } from './strategies/loading';
/**
 * Try to add a loading strategy to a store and activate it.
 * If no strategy is given to that function, a basic one will be created.
 * @param store The store to bind the loading strategy
 * @param strategy An optional loading strategy
 */
export declare function tryAddLoadingStrategy(store: FeatureStore, strategy?: FeatureStoreLoadingStrategy): void;
/**
 * Try to add a selection strategy to a store and activate it.
 * If no strategy is given to that function, a basic one will be created.
 * @param store The store to bind the selection strategy
 * @param [strategy] An optional selection strategy
 */
export declare function tryAddSelectionStrategy(store: FeatureStore, strategy?: FeatureStoreSelectionStrategy): void;
