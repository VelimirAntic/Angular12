import { EntityStoreStrategy } from '@igo2/common';
import { FeatureStore } from '../store';
import { FeatureStoreInMapResolutionStrategyOptions } from '../feature.interfaces';
/**
 * This strategy maintain the store features updated while the map is scrolled.
 * The features's state inside the map's resolution are tagged inMapResolution = true;
 */
export declare class FeatureStoreInMapResolutionStrategy extends EntityStoreStrategy {
    protected options: FeatureStoreInMapResolutionStrategyOptions;
    /**
     * Subscription to the store's OL source changes
     */
    private stores$$;
    private resolution$$;
    private empty$$;
    constructor(options: FeatureStoreInMapResolutionStrategyOptions);
    /**
     * Bind this strategy to a store and start watching for Ol source changes
     * @param store Feature store
     */
    bindStore(store: FeatureStore): void;
    /**
     * Unbind this strategy from a store and stop watching for Ol source changes
     * @param store Feature store
     */
    unbindStore(store: FeatureStore): void;
    /**
     * Start watching all stores already bound to that strategy at once.
     * @internal
     */
    protected doActivate(): void;
    /**
     * Stop watching all stores bound to that strategy
     * @internal
     */
    protected doDeactivate(): void;
    /**
     * Watch for a store's  OL source changes
     * @param store Feature store
     */
    private watchStore;
    private updateEntitiesInResolution;
    /**
     * Stop watching for a store's OL source changes
     * @param store Feature store
     */
    private unwatchStore;
    /**
     * Stop watching for OL source changes in all stores.
     */
    private unwatchAll;
}
