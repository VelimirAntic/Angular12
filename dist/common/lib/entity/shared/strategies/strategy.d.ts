import { BehaviorSubject } from 'rxjs';
import { EntityStoreStrategyOptions } from '../entity.interfaces';
import { EntityStore } from '../store';
/**
 * Entity store strategies. They can do pretty much anything during a store's
 * lifetime. For example, they may act as triggers when something happens.
 * Sharing a strategy is a good idea when multiple strategies would have
 * on cancelling effect on each other.
 *
 * At creation, strategy is inactive and needs to be manually activated.
 */
export declare class EntityStoreStrategy {
    protected options: EntityStoreStrategyOptions;
    /**
     * Feature store
     * @internal
     */
    protected stores: EntityStore[];
    /**
     * Whether this strategy is active
     * @internal
     */
    get active(): boolean;
    readonly active$: BehaviorSubject<boolean>;
    constructor(options?: EntityStoreStrategyOptions);
    /**
     * Activate the strategy. If it's already active, it'll be deactivated
     * and activated again.
     */
    activate(): void;
    /**
     * Activate the strategy. If it's already active, it'll be deactivated
     * and activated again.
     */
    deactivate(): void;
    /**
     * Bind this strategy to a store
     * @param store Feature store
     */
    bindStore(store: EntityStore): void;
    /**
     * Unbind this strategy from store
     * @param store Feature store
     */
    unbindStore(store: EntityStore): void;
    /**
     * Do the stataegy activation
     * @internal
     */
    protected doActivate(): void;
    /**
     * Do the strategy deactivation
     * @internal
     */
    protected doDeactivate(): void;
}
