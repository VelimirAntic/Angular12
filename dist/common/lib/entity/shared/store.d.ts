import { BehaviorSubject } from 'rxjs';
import { EntityStateManager } from './state';
import { EntityView } from './view';
import { EntityKey, EntityState, EntityRecord, EntityStoreOptions } from './entity.interfaces';
import { EntityStoreStrategy } from './strategies/strategy';
/**
 * An entity store class holds any number of entities
 * as well as their state. It can be observed, filtered and sorted and
 * provides methods to insert, update or delete entities.
 */
export declare class EntityStore<E extends object = object, S extends EntityState = EntityState> {
    /**
     * Observable of the raw entities
     */
    readonly entities$: BehaviorSubject<E[]>;
    /**
     * Number of entities
     */
    readonly count$: BehaviorSubject<number>;
    get count(): number;
    /**
     * Whether the store is empty
     */
    readonly empty$: BehaviorSubject<boolean>;
    get empty(): boolean;
    /**
     * Entity store state
     */
    readonly state: EntityStateManager<E, S>;
    /**
     * View of all the entities
     */
    readonly view: EntityView<E>;
    /**
     * View of all the entities and their state
     */
    readonly stateView: EntityView<E, EntityRecord<E, S>>;
    /**
     * Method to get an entity's id
     */
    readonly getKey: (E: any) => EntityKey;
    /**
     * Method to get an entity's named property
     */
    readonly getProperty: (E: any, prop: string) => any;
    /**
     * Store index
     */
    get index(): Map<EntityKey, E>;
    private _index;
    /**
     * Store index
     */
    get pristine(): boolean;
    private _pristine;
    /**
     * Strategies
     */
    private strategies;
    constructor(entities: E[], options?: EntityStoreOptions);
    /**
     * Get an entity from the store by key
     * @param key Key
     * @returns Entity
     */
    get(key: EntityKey): E;
    /**
     * Get all entities in the store
     * @returns Array of entities
     */
    all(): E[];
    /**
     * Set this store's entities
     * @param entities Entities
     */
    load(entities: E[], pristine?: boolean): void;
    /**
     * Clear the store's entities but keep the state and views intact.
     * Views won't return any data but future data will be subject to the
     * current views filter and sort
     */
    softClear(): void;
    /**
     * Clear the store's entities, state and views
     */
    clear(): void;
    destroy(): void;
    /**
     * Insert an entity into the store
     * @param entity Entity
     */
    insert(entity: E): void;
    /**
     * Insert many entities into the store
     * @param entities Entities
     */
    insertMany(entities: E[]): void;
    /**
     * Update or insert an entity into the store
     * @param entity Entity
     */
    update(entity: E): void;
    /**
     * Update or insert many entities into the store
     * @param entities Entities
     */
    updateMany(entities: E[]): void;
    /**
     * Delete an entity from the store
     * @param entity Entity
     */
    delete(entity: E): void;
    /**
     * Delete many entities from the store
     * @param entities Entities
     */
    deleteMany(entities: E[]): void;
    /**
     * Add a strategy to this store
     * @param strategy Entity store strategy
     * @returns Entity store
     */
    addStrategy(strategy: EntityStoreStrategy, activate?: boolean): EntityStore;
    /**
     * Remove a strategy from this store
     * @param strategy Entity store strategy
     * @returns Entity store
     */
    removeStrategy(strategy: EntityStoreStrategy): EntityStore;
    /**
     * Return strategies of a given type
     * @param type Entity store strategy class
     * @returns Strategies
     */
    getStrategyOfType(type: typeof EntityStoreStrategy): EntityStoreStrategy;
    /**
     * Activate strategies of a given type
     * @param type Entity store strategy class
     */
    activateStrategyOfType(type: typeof EntityStoreStrategy): void;
    /**
     * Deactivate strategies of a given type
     * @param type Entity store strategy class
     */
    deactivateStrategyOfType(type: typeof EntityStoreStrategy): void;
    /**
     * Generate a complete index of all the entities
     * @param entities Entities
     * @returns Index
     */
    private generateIndex;
    /**
     * Push the index's entities into the entities$ observable
     */
    private next;
    /**
     * Update the store's count and empty
     */
    private updateCount;
    /**
     * Create the entity state manager
     * @returns EntityStateManager
     */
    private createStateManager;
    /**
     * Create the data view
     * @returns EntityView<E>
     */
    private createDataView;
    /**
     * Create the state view
     * @returns EntityView<EntityRecord<E>>
     */
    private createStateView;
    private statesAreTheSame;
}
