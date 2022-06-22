import { EntityStoreStrategy } from '@igo2/common';
import { FeatureStore } from '../store';
import { FeatureStoreInMapExtentStrategyOptions } from '../feature.interfaces';
/**
 * This strategy maintain the store features updated while the map is moved.
 * The features's state inside the map are tagged inMapExtent = true;
 */
export declare class FeatureStoreInMapExtentStrategy extends EntityStoreStrategy {
    protected options: FeatureStoreInMapExtentStrategyOptions;
    /**
     * Subscription to the store's OL source changes
     */
    private stores$$;
    private states$$;
    private empty$$;
    constructor(options: FeatureStoreInMapExtentStrategyOptions);
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
    private updateEntitiesInExtent;
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
