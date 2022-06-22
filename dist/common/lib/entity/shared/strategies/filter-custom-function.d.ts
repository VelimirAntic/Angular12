import { EntityStoreStrategyFuncOptions } from '../entity.interfaces';
import { EntityStore } from '../store';
import { EntityStoreStrategy } from './strategy';
/**
 * When active, this strategy filters a store's stateView to return
 * selected entities only.
 */
export declare class EntityStoreFilterCustomFuncStrategy extends EntityStoreStrategy {
    protected options: EntityStoreStrategyFuncOptions;
    constructor(options: EntityStoreStrategyFuncOptions);
    /**
     * Store / filter ids map
     */
    private filters;
    /**
     * Bind this strategy to a store and start filtering it
     * @param store Entity store
     */
    bindStore(store: EntityStore): void;
    /**
     * Unbind this strategy from a store and stop filtering it
     * @param store Entity store
     */
    unbindStore(store: EntityStore): void;
    /**
     * Start filtering all stores
     * @internal
     */
    protected doActivate(): void;
    /**
     * Stop filtering all stores
     * @internal
     */
    protected doDeactivate(): void;
    /**
     * Filter all stores
     */
    private filterAll;
    /**
     * Unfilter all stores
     */
    private unfilterAll;
    /**
     * Filter a store and add it to the filters map
     */
    private filterStore;
    /**
     * Unfilter a store and delete it from the filters map
     */
    private unfilterStore;
}
