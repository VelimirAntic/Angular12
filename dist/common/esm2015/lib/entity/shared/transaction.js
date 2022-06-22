import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { EntityStore } from './store';
import { EntityOperationType } from './entity.enums';
import { getEntityId } from './entity.utils';
/**
 * This class holds a reference to the insert, update and delete
 * operations performed on a store. This is useful to commit
 * these operations in a single pass or to cancel them.
 */
export class EntityTransaction {
    constructor(options = {}) {
        this.inCommitPhase$ = new BehaviorSubject(false);
        this.getKey = options.getKey ? options.getKey : getEntityId;
        this.operations = new EntityStore([], {
            getKey: (operation) => operation.key
        });
    }
    /**
     * Whether there are pending operations
     */
    get empty$() { return this.operations.empty$; }
    /**
     * Whether there are pending operations
     */
    get empty() { return this.empty$.value; }
    /**
     * Whether thise store is in commit phase
     */
    get inCommitPhase() { return this.inCommitPhase$.value; }
    destroy() {
        this.operations.destroy();
    }
    /**
     * Insert an entity into a store. If no store is specified, an insert
     * operation is still created but the transaction won't add the new
     * entity to the store.
     * @param current The entity to insert
     * @param store Optional: The store to insert the entity into
     * @param meta Optional: Any metadata on the operation
     */
    insert(current, store, meta) {
        const existingOperation = this.getOperationByEntity(current);
        if (existingOperation !== undefined) {
            this.removeOperation(existingOperation);
        }
        this.doInsert(current, store, meta);
    }
    /**
     * Update an entity in a store. If no store is specified, an update
     * operation is still created but the transaction won't update the
     * entity into the store.
     * @param previous The entity before update
     * @param current The entity after update
     * @param store Optional: The store to update the entity into
     * @param meta Optional: Any metadata on the operation
     */
    update(previous, current, store, meta) {
        const existingOperation = this.getOperationByEntity(current);
        if (existingOperation !== undefined) {
            this.removeOperation(existingOperation);
            if (existingOperation.type === EntityOperationType.Insert) {
                this.doInsert(current, store, meta);
                return;
            }
            else if (existingOperation.type === EntityOperationType.Update) {
                previous = existingOperation.previous;
            }
        }
        this.doUpdate(previous, current, store, meta);
    }
    /**
     * Delete an entity from a store. If no store is specified, a delete
     * operation is still created but the transaction won't remove the
     * entity from the store.
     * @param previous The entity before delete
     * @param store Optional: The store to delete the entity from
     * @param meta Optional: Any metadata on the operation
     */
    delete(previous, store, meta) {
        const existingOperation = this.getOperationByEntity(previous);
        if (existingOperation !== undefined) {
            this.removeOperation(existingOperation);
            if (existingOperation.type === EntityOperationType.Insert) {
                if (store !== undefined) {
                    store.delete(previous);
                }
                return;
            }
        }
        this.doDelete(previous, store, meta);
    }
    /**
     * Commit operations the transaction. This method doesn't do much
     * in itself. The handler it receives does the hard work and it's
     * implementation is left to the caller. This method simply wraps
     * the handler into an error catching mechanism to update
     * the transaction afterward. The caller needs to subscribe to this
     * method's output (observable) for the commit to be performed.
     * @param operations Operations to commit
     * @param handler Function that handles the commit operation
     * @returns The handler output (observable)
     */
    commit(operations, handler) {
        this.inCommitPhase$.next(true);
        return handler(this, operations)
            .pipe(catchError(() => of(new Error())), tap((result) => {
            if (result instanceof Error) {
                this.onCommitError(operations);
            }
            else {
                this.onCommitSuccess(operations);
            }
        }));
    }
    /**
     * Commit all the operations of the transaction.
     * @param handler Function that handles the commit operation
     * @returns The handler output (observable)
     */
    commitAll(handler) {
        const operations = this.getOperationsInCommit();
        return this.commit(operations, handler);
    }
    /**
     * Rollback this transaction
     */
    rollback() {
        this.rollbackOperations(this.operations.all());
    }
    /**
     * Rollback specific operations
     */
    rollbackOperations(operations) {
        this.checkInCommitPhase();
        const operationsFactory = () => new Map([
            [EntityOperationType.Delete, []],
            [EntityOperationType.Update, []],
            [EntityOperationType.Insert, []]
        ]);
        const storesOperations = new Map();
        // Group operations by store and by operation type.
        // Grouping operations allows us to revert them in bacth, thus, triggering
        // observables only one per operation type.
        for (const operation of operations) {
            const store = operation.store;
            if (operation.store === undefined) {
                continue;
            }
            let storeOperations = storesOperations.get(store);
            if (storeOperations === undefined) {
                storeOperations = operationsFactory();
                storesOperations.set(store, storeOperations);
            }
            storeOperations.get(operation.type).push(operation);
        }
        Array.from(storesOperations.keys()).forEach((store) => {
            const storeOperations = storesOperations.get(store);
            const deletes = storeOperations.get(EntityOperationType.Delete);
            store.insertMany(deletes.map((_delete) => _delete.previous));
            const updates = storeOperations.get(EntityOperationType.Update);
            store.updateMany(updates.map((_update) => _update.previous));
            const inserts = storeOperations.get(EntityOperationType.Insert);
            store.deleteMany(inserts.map((_insert) => _insert.current));
        });
        this.operations.deleteMany(operations);
        this.inCommitPhase$.next(false);
    }
    /**
     * Clear this transaction
     * @todo Raise event and synchronize stores?
     */
    clear() {
        this.operations.clear();
        this.inCommitPhase$.next(false);
    }
    /**
     * Get any existing operation on an entity
     * @param entity Entity
     * @returns Either an insert, update or delete operation
     */
    getOperationByEntity(entity) {
        return this.operations.get(this.getKey(entity));
    }
    /**
     * Merge another transaction in this one
     * @param transaction Another transaction
     */
    mergeTransaction(transaction) {
        this.checkInCommitPhase();
        const operations = transaction.operations.all();
        operations.forEach((operation) => {
            this.addOperation(operation);
        });
    }
    /**
     * Create an insert operation and add an entity to the store
     * @param current The entity to insert
     * @param store Optional: The store to insert the entity into
     * @param meta Optional: Any metadata on the operation
     */
    doInsert(current, store, meta) {
        this.addOperation({
            key: this.getKey(current),
            type: EntityOperationType.Insert,
            previous: undefined,
            current,
            store,
            meta
        });
        if (store !== undefined) {
            store.insert(current);
        }
    }
    /**
     * Create an update operation and update an entity into the store
     * @param previous The entity before update
     * @param current The entity after update
     * @param store Optional: The store to update the entity into
     * @param meta Optional: Any metadata on the operation
     */
    doUpdate(previous, current, store, meta) {
        this.addOperation({
            key: this.getKey(current),
            type: EntityOperationType.Update,
            previous,
            current,
            store,
            meta
        });
        if (store !== undefined) {
            store.update(current);
        }
    }
    /**
     * Create a delete operation and delete an entity from the store
     * @param previous The entity before delete
     * @param store Optional: The store to delete the entity from
     * @param meta Optional: Any metadata on the operation
     */
    doDelete(previous, store, meta) {
        this.addOperation({
            key: this.getKey(previous),
            type: EntityOperationType.Delete,
            previous,
            current: undefined,
            store,
            meta
        });
        if (store !== undefined) {
            store.delete(previous);
        }
    }
    /**
     * Remove committed operations from store
     * @param operations Commited operations
     * @todo Raise event and synchronize stores?
     */
    resolveOperations(operations) {
        this.operations.deleteMany(operations);
    }
    /**
     * On commit success, resolve commited operations and exit commit phase
     * @param operations Commited operations
     */
    onCommitSuccess(operations) {
        this.resolveOperations(operations);
        this.inCommitPhase$.next(false);
    }
    /**
     * On commit error, abort transaction
     * @param operations Commited operations
     */
    onCommitError(operations) {
        this.inCommitPhase$.next(false);
    }
    /**
     * Add an operation to the operations store
     * @param operation Operation to add
     */
    addOperation(operation) {
        this.checkInCommitPhase();
        this.operations.insert(operation);
        this.operations.state.update(operation, { added: true });
    }
    /**
     * Remove an operation from the operations store
     * @param operation Operation to remove
     */
    removeOperation(operation) {
        this.checkInCommitPhase();
        this.operations.delete(operation);
        this.operations.state.update(operation, { added: false });
    }
    /**
     * Get all the operations to commit
     * @returns Operations to commit
     */
    getOperationsInCommit() {
        return this.operations.stateView
            .manyBy((value) => {
            return value.state.added === true;
        })
            .map((value) => value.entity);
    }
    /**
     * Check if the transaction is in the commit phase and throw an error if it is
     */
    checkInCommitPhase() {
        if (this.inCommitPhase === true) {
            throw new Error('This transaction is in the commit phase. Cannot complete this operation.');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9lbnRpdHkvc2hhcmVkL3RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUXZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8saUJBQWlCO0lBNEI1QixZQUFZLFVBQW9DLEVBQUU7UUFGekMsbUJBQWMsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBd0MsRUFBRSxFQUFFO1lBQzNFLE1BQU0sRUFBRSxDQUFDLFNBQTBCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHO1NBQ3RELENBQUMsQ0FBQztJQUNMLENBQUM7SUFyQkQ7O09BRUc7SUFDSCxJQUFJLE1BQU0sS0FBK0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFekU7O09BRUc7SUFDSCxJQUFJLEtBQUssS0FBYyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FB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a0JBQWtCLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGVBQWUsQ0FBQyxTQUEwQjtRQUNoRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7T0FHRztJQUNLLHFCQUFxQjtRQUMzQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUzthQUM3QixNQUFNLENBQUMsQ0FBQyxLQUE2RCxFQUFFLEVBQUU7WUFDeEUsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7UUFDcEMsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLENBQUMsS0FBNkQsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRDs7T0FFRztJQUNLLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsMEVBQTBFLENBQUMsQ0FBQztTQUM3RjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBFbnRpdHlLZXksXG4gIEVudGl0eVRyYW5zYWN0aW9uT3B0aW9ucyxcbiAgRW50aXR5T3BlcmF0aW9uLFxuICBFbnRpdHlPcGVyYXRpb25TdGF0ZVxufSBmcm9tICcuL2VudGl0eS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IEVudGl0eVN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyBFbnRpdHlPcGVyYXRpb25UeXBlIH0gZnJvbSAnLi9lbnRpdHkuZW51bXMnO1xuaW1wb3J0IHsgZ2V0RW50aXR5SWQgfSBmcm9tICcuL2VudGl0eS51dGlscyc7XG5cbmV4cG9ydCB0eXBlIEVudGl0eVRyYW5zYWN0aW9uQ29tbWl0SGFuZGxlciA9IChcbiAgdHJhbnNhY3Rpb246IEVudGl0eVRyYW5zYWN0aW9uLFxuICBvcGVyYXRpb25zOiBFbnRpdHlPcGVyYXRpb25bXVxuKSA9PiBPYnNlcnZhYmxlPGFueT47XG5cbi8qKlxuICogVGhpcyBjbGFzcyBob2xkcyBhIHJlZmVyZW5jZSB0byB0aGUgaW5zZXJ0LCB1cGRhdGUgYW5kIGRlbGV0ZVxuICogb3BlcmF0aW9ucyBwZXJmb3JtZWQgb24gYSBzdG9yZS4gVGhpcyBpcyB1c2VmdWwgdG8gY29tbWl0XG4gKiB0aGVzZSBvcGVyYXRpb25zIGluIGEgc2luZ2xlIHBhc3Mgb3IgdG8gY2FuY2VsIHRoZW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRpdHlUcmFuc2FjdGlvbiB7XG5cbiAgLyoqXG4gICAqIFN0b3JlIGhvbGRpbmcgdGhlIG9wZXJhdGlvbnMgb24gYW5vdGhlciBzdG9yZVxuICAgKi9cbiAgcmVhZG9ubHkgb3BlcmF0aW9uczogRW50aXR5U3RvcmU8RW50aXR5T3BlcmF0aW9uLCBFbnRpdHlPcGVyYXRpb25TdGF0ZT47XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBnZXQgYW4gZW50aXR5J3MgaWRcbiAgICovXG4gIHJlYWRvbmx5IGdldEtleTogKEUpID0+IEVudGl0eUtleTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGVyZSBhcmUgcGVuZGluZyBvcGVyYXRpb25zXG4gICAqL1xuICBnZXQgZW1wdHkkKCk6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiB7IHJldHVybiB0aGlzLm9wZXJhdGlvbnMuZW1wdHkkOyB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgYXJlIHBlbmRpbmcgb3BlcmF0aW9uc1xuICAgKi9cbiAgZ2V0IGVtcHR5KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5lbXB0eSQudmFsdWU7IH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGlzZSBzdG9yZSBpcyBpbiBjb21taXQgcGhhc2VcbiAgICovXG4gIGdldCBpbkNvbW1pdFBoYXNlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pbkNvbW1pdFBoYXNlJC52YWx1ZTsgfVxuICByZWFkb25seSBpbkNvbW1pdFBoYXNlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogRW50aXR5VHJhbnNhY3Rpb25PcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmdldEtleSA9IG9wdGlvbnMuZ2V0S2V5ID8gb3B0aW9ucy5nZXRLZXkgOiBnZXRFbnRpdHlJZDtcbiAgICB0aGlzLm9wZXJhdGlvbnMgPSBuZXcgRW50aXR5U3RvcmU8RW50aXR5T3BlcmF0aW9uLCBFbnRpdHlPcGVyYXRpb25TdGF0ZT4oW10sIHtcbiAgICAgIGdldEtleTogKG9wZXJhdGlvbjogRW50aXR5T3BlcmF0aW9uKSA9PiBvcGVyYXRpb24ua2V5XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMub3BlcmF0aW9ucy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IGFuIGVudGl0eSBpbnRvIGEgc3RvcmUuIElmIG5vIHN0b3JlIGlzIHNwZWNpZmllZCwgYW4gaW5zZXJ0XG4gICAqIG9wZXJhdGlvbiBpcyBzdGlsbCBjcmVhdGVkIGJ1dCB0aGUgdHJhbnNhY3Rpb24gd29uJ3QgYWRkIHRoZSBuZXdcbiAgICogZW50aXR5IHRvIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGVudGl0eSB0byBpbnNlcnRcbiAgICogQHBhcmFtIHN0b3JlIE9wdGlvbmFsOiBUaGUgc3RvcmUgdG8gaW5zZXJ0IHRoZSBlbnRpdHkgaW50b1xuICAgKiBAcGFyYW0gbWV0YSBPcHRpb25hbDogQW55IG1ldGFkYXRhIG9uIHRoZSBvcGVyYXRpb25cbiAgICovXG4gIGluc2VydChjdXJyZW50OiBvYmplY3QsIHN0b3JlPzogRW50aXR5U3RvcmU8b2JqZWN0PiwgbWV0YT86IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XG4gICAgY29uc3QgZXhpc3RpbmdPcGVyYXRpb24gPSB0aGlzLmdldE9wZXJhdGlvbkJ5RW50aXR5KGN1cnJlbnQpO1xuICAgIGlmIChleGlzdGluZ09wZXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlbW92ZU9wZXJhdGlvbihleGlzdGluZ09wZXJhdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5kb0luc2VydChjdXJyZW50LCBzdG9yZSwgbWV0YSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFuIGVudGl0eSBpbiBhIHN0b3JlLiBJZiBubyBzdG9yZSBpcyBzcGVjaWZpZWQsIGFuIHVwZGF0ZVxuICAgKiBvcGVyYXRpb24gaXMgc3RpbGwgY3JlYXRlZCBidXQgdGhlIHRyYW5zYWN0aW9uIHdvbid0IHVwZGF0ZSB0aGVcbiAgICogZW50aXR5IGludG8gdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcHJldmlvdXMgVGhlIGVudGl0eSBiZWZvcmUgdXBkYXRlXG4gICAqIEBwYXJhbSBjdXJyZW50IFRoZSBlbnRpdHkgYWZ0ZXIgdXBkYXRlXG4gICAqIEBwYXJhbSBzdG9yZSBPcHRpb25hbDogVGhlIHN0b3JlIHRvIHVwZGF0ZSB0aGUgZW50aXR5IGludG9cbiAgICogQHBhcmFtIG1ldGEgT3B0aW9uYWw6IEFueSBtZXRhZGF0YSBvbiB0aGUgb3BlcmF0aW9uXG4gICAqL1xuICB1cGRhdGUocHJldmlvdXM6IG9iamVjdCwgY3VycmVudDogb2JqZWN0LCBzdG9yZT86IEVudGl0eVN0b3JlPG9iamVjdD4sIG1ldGE/OiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIGNvbnN0IGV4aXN0aW5nT3BlcmF0aW9uID0gdGhpcy5nZXRPcGVyYXRpb25CeUVudGl0eShjdXJyZW50KTtcbiAgICBpZiAoZXhpc3RpbmdPcGVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yZW1vdmVPcGVyYXRpb24oZXhpc3RpbmdPcGVyYXRpb24pO1xuICAgICAgaWYgKGV4aXN0aW5nT3BlcmF0aW9uLnR5cGUgPT09IEVudGl0eU9wZXJhdGlvblR5cGUuSW5zZXJ0KSB7XG4gICAgICAgIHRoaXMuZG9JbnNlcnQoY3VycmVudCwgc3RvcmUsIG1ldGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nT3BlcmF0aW9uLnR5cGUgPT09IEVudGl0eU9wZXJhdGlvblR5cGUuVXBkYXRlKSB7XG4gICAgICAgIHByZXZpb3VzID0gZXhpc3RpbmdPcGVyYXRpb24ucHJldmlvdXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kb1VwZGF0ZShwcmV2aW91cywgY3VycmVudCwgc3RvcmUsIG1ldGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbiBlbnRpdHkgZnJvbSBhIHN0b3JlLiBJZiBubyBzdG9yZSBpcyBzcGVjaWZpZWQsIGEgZGVsZXRlXG4gICAqIG9wZXJhdGlvbiBpcyBzdGlsbCBjcmVhdGVkIGJ1dCB0aGUgdHJhbnNhY3Rpb24gd29uJ3QgcmVtb3ZlIHRoZVxuICAgKiBlbnRpdHkgZnJvbSB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBwcmV2aW91cyBUaGUgZW50aXR5IGJlZm9yZSBkZWxldGVcbiAgICogQHBhcmFtIHN0b3JlIE9wdGlvbmFsOiBUaGUgc3RvcmUgdG8gZGVsZXRlIHRoZSBlbnRpdHkgZnJvbVxuICAgKiBAcGFyYW0gbWV0YSBPcHRpb25hbDogQW55IG1ldGFkYXRhIG9uIHRoZSBvcGVyYXRpb25cbiAgICovXG4gIGRlbGV0ZShwcmV2aW91czogb2JqZWN0LCBzdG9yZT86IEVudGl0eVN0b3JlPG9iamVjdD4sIG1ldGE/OiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIGNvbnN0IGV4aXN0aW5nT3BlcmF0aW9uID0gdGhpcy5nZXRPcGVyYXRpb25CeUVudGl0eShwcmV2aW91cyk7XG4gICAgaWYgKGV4aXN0aW5nT3BlcmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucmVtb3ZlT3BlcmF0aW9uKGV4aXN0aW5nT3BlcmF0aW9uKTtcbiAgICAgIGlmIChleGlzdGluZ09wZXJhdGlvbi50eXBlID09PSBFbnRpdHlPcGVyYXRpb25UeXBlLkluc2VydCkge1xuICAgICAgICBpZiAoc3RvcmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0b3JlLmRlbGV0ZShwcmV2aW91cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZG9EZWxldGUocHJldmlvdXMsIHN0b3JlLCBtZXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21taXQgb3BlcmF0aW9ucyB0aGUgdHJhbnNhY3Rpb24uIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZG8gbXVjaFxuICAgKiBpbiBpdHNlbGYuIFRoZSBoYW5kbGVyIGl0IHJlY2VpdmVzIGRvZXMgdGhlIGhhcmQgd29yayBhbmQgaXQnc1xuICAgKiBpbXBsZW1lbnRhdGlvbiBpcyBsZWZ0IHRvIHRoZSBjYWxsZXIuIFRoaXMgbWV0aG9kIHNpbXBseSB3cmFwc1xuICAgKiB0aGUgaGFuZGxlciBpbnRvIGFuIGVycm9yIGNhdGNoaW5nIG1lY2hhbmlzbSB0byB1cGRhdGVcbiAgICogdGhlIHRyYW5zYWN0aW9uIGFmdGVyd2FyZC4gVGhlIGNhbGxlciBuZWVkcyB0byBzdWJzY3JpYmUgdG8gdGhpc1xuICAgKiBtZXRob2QncyBvdXRwdXQgKG9ic2VydmFibGUpIGZvciB0aGUgY29tbWl0IHRvIGJlIHBlcmZvcm1lZC5cbiAgICogQHBhcmFtIG9wZXJhdGlvbnMgT3BlcmF0aW9ucyB0byBjb21taXRcbiAgICogQHBhcmFtIGhhbmRsZXIgRnVuY3Rpb24gdGhhdCBoYW5kbGVzIHRoZSBjb21taXQgb3BlcmF0aW9uXG4gICAqIEByZXR1cm5zIFRoZSBoYW5kbGVyIG91dHB1dCAob2JzZXJ2YWJsZSlcbiAgICovXG4gIGNvbW1pdChvcGVyYXRpb25zOiBFbnRpdHlPcGVyYXRpb25bXSwgaGFuZGxlcjogRW50aXR5VHJhbnNhY3Rpb25Db21taXRIYW5kbGVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmluQ29tbWl0UGhhc2UkLm5leHQodHJ1ZSk7XG5cbiAgICByZXR1cm4gaGFuZGxlcih0aGlzLCBvcGVyYXRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEVycm9yKCkpKSxcbiAgICAgICAgdGFwKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgdGhpcy5vbkNvbW1pdEVycm9yKG9wZXJhdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tbWl0U3VjY2VzcyhvcGVyYXRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbW1pdCBhbGwgdGhlIG9wZXJhdGlvbnMgb2YgdGhlIHRyYW5zYWN0aW9uLlxuICAgKiBAcGFyYW0gaGFuZGxlciBGdW5jdGlvbiB0aGF0IGhhbmRsZXMgdGhlIGNvbW1pdCBvcGVyYXRpb25cbiAgICogQHJldHVybnMgVGhlIGhhbmRsZXIgb3V0cHV0IChvYnNlcnZhYmxlKVxuICAgKi9cbiAgY29tbWl0QWxsKGhhbmRsZXI6IEVudGl0eVRyYW5zYWN0aW9uQ29tbWl0SGFuZGxlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgb3BlcmF0aW9ucyA9IHRoaXMuZ2V0T3BlcmF0aW9uc0luQ29tbWl0KCk7XG4gICAgcmV0dXJuIHRoaXMuY29tbWl0KG9wZXJhdGlvbnMsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvbGxiYWNrIHRoaXMgdHJhbnNhY3Rpb25cbiAgICovXG4gIHJvbGxiYWNrKCkge1xuICAgIHRoaXMucm9sbGJhY2tPcGVyYXRpb25zKHRoaXMub3BlcmF0aW9ucy5hbGwoKSk7XG4gIH1cblxuICAvKipcbiAgICogUm9sbGJhY2sgc3BlY2lmaWMgb3BlcmF0aW9uc1xuICAgKi9cbiAgcm9sbGJhY2tPcGVyYXRpb25zKG9wZXJhdGlvbnM6IEVudGl0eU9wZXJhdGlvbltdKSB7XG4gICAgdGhpcy5jaGVja0luQ29tbWl0UGhhc2UoKTtcblxuICAgIGNvbnN0IG9wZXJhdGlvbnNGYWN0b3J5ID0gKCkgPT4gbmV3IE1hcChbXG4gICAgICBbRW50aXR5T3BlcmF0aW9uVHlwZS5EZWxldGUsIFtdXSxcbiAgICAgIFtFbnRpdHlPcGVyYXRpb25UeXBlLlVwZGF0ZSwgW11dLFxuICAgICAgW0VudGl0eU9wZXJhdGlvblR5cGUuSW5zZXJ0LCBbXV1cbiAgICBdKTtcbiAgICBjb25zdCBzdG9yZXNPcGVyYXRpb25zID0gbmV3IE1hcCgpO1xuXG4gICAgLy8gR3JvdXAgb3BlcmF0aW9ucyBieSBzdG9yZSBhbmQgYnkgb3BlcmF0aW9uIHR5cGUuXG4gICAgLy8gR3JvdXBpbmcgb3BlcmF0aW9ucyBhbGxvd3MgdXMgdG8gcmV2ZXJ0IHRoZW0gaW4gYmFjdGgsIHRodXMsIHRyaWdnZXJpbmdcbiAgICAvLyBvYnNlcnZhYmxlcyBvbmx5IG9uZSBwZXIgb3BlcmF0aW9uIHR5cGUuXG4gICAgZm9yIChjb25zdCBvcGVyYXRpb24gb2Ygb3BlcmF0aW9ucykge1xuICAgICAgY29uc3Qgc3RvcmUgPSBvcGVyYXRpb24uc3RvcmU7XG4gICAgICBpZiAob3BlcmF0aW9uLnN0b3JlID09PSB1bmRlZmluZWQpIHsgY29udGludWU7IH1cblxuICAgICAgbGV0IHN0b3JlT3BlcmF0aW9ucyA9IHN0b3Jlc09wZXJhdGlvbnMuZ2V0KHN0b3JlKTtcbiAgICAgIGlmIChzdG9yZU9wZXJhdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdG9yZU9wZXJhdGlvbnMgPSBvcGVyYXRpb25zRmFjdG9yeSgpO1xuICAgICAgICBzdG9yZXNPcGVyYXRpb25zLnNldChzdG9yZSwgc3RvcmVPcGVyYXRpb25zKTtcbiAgICAgIH1cbiAgICAgIHN0b3JlT3BlcmF0aW9ucy5nZXQob3BlcmF0aW9uLnR5cGUpLnB1c2gob3BlcmF0aW9uKTtcbiAgICB9XG5cbiAgICBBcnJheS5mcm9tKHN0b3Jlc09wZXJhdGlvbnMua2V5cygpKS5mb3JFYWNoKChzdG9yZTogRW50aXR5U3RvcmU8b2JqZWN0PikgPT4ge1xuICAgICAgY29uc3Qgc3RvcmVPcGVyYXRpb25zID0gc3RvcmVzT3BlcmF0aW9ucy5nZXQoc3RvcmUpO1xuXG4gICAgICBjb25zdCBkZWxldGVzID0gc3RvcmVPcGVyYXRpb25zLmdldChFbnRpdHlPcGVyYXRpb25UeXBlLkRlbGV0ZSk7XG4gICAgICBzdG9yZS5pbnNlcnRNYW55KGRlbGV0ZXMubWFwKChfZGVsZXRlOiBFbnRpdHlPcGVyYXRpb24pID0+IF9kZWxldGUucHJldmlvdXMpKTtcblxuICAgICAgY29uc3QgdXBkYXRlcyA9IHN0b3JlT3BlcmF0aW9ucy5nZXQoRW50aXR5T3BlcmF0aW9uVHlwZS5VcGRhdGUpO1xuICAgICAgc3RvcmUudXBkYXRlTWFueSh1cGRhdGVzLm1hcCgoX3VwZGF0ZTogRW50aXR5T3BlcmF0aW9uKSA9PiBfdXBkYXRlLnByZXZpb3VzKSk7XG5cbiAgICAgIGNvbnN0IGluc2VydHMgPSBzdG9yZU9wZXJhdGlvbnMuZ2V0KEVudGl0eU9wZXJhdGlvblR5cGUuSW5zZXJ0KTtcbiAgICAgIHN0b3JlLmRlbGV0ZU1hbnkoaW5zZXJ0cy5tYXAoKF9pbnNlcnQ6IEVudGl0eU9wZXJhdGlvbikgPT4gX2luc2VydC5jdXJyZW50KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wZXJhdGlvbnMuZGVsZXRlTWFueShvcGVyYXRpb25zKTtcbiAgICB0aGlzLmluQ29tbWl0UGhhc2UkLm5leHQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoaXMgdHJhbnNhY3Rpb25cbiAgICogQHRvZG8gUmFpc2UgZXZlbnQgYW5kIHN5bmNocm9uaXplIHN0b3Jlcz9cbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMub3BlcmF0aW9ucy5jbGVhcigpO1xuICAgIHRoaXMuaW5Db21taXRQaGFzZSQubmV4dChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFueSBleGlzdGluZyBvcGVyYXRpb24gb24gYW4gZW50aXR5XG4gICAqIEBwYXJhbSBlbnRpdHkgRW50aXR5XG4gICAqIEByZXR1cm5zIEVpdGhlciBhbiBpbnNlcnQsIHVwZGF0ZSBvciBkZWxldGUgb3BlcmF0aW9uXG4gICAqL1xuICBnZXRPcGVyYXRpb25CeUVudGl0eShlbnRpdHk6IG9iamVjdCk6IEVudGl0eU9wZXJhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMub3BlcmF0aW9ucy5nZXQodGhpcy5nZXRLZXkoZW50aXR5KSk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgYW5vdGhlciB0cmFuc2FjdGlvbiBpbiB0aGlzIG9uZVxuICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gQW5vdGhlciB0cmFuc2FjdGlvblxuICAgKi9cbiAgbWVyZ2VUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogRW50aXR5VHJhbnNhY3Rpb24pIHtcbiAgICB0aGlzLmNoZWNrSW5Db21taXRQaGFzZSgpO1xuXG4gICAgY29uc3Qgb3BlcmF0aW9ucyA9IHRyYW5zYWN0aW9uLm9wZXJhdGlvbnMuYWxsKCk7XG4gICAgb3BlcmF0aW9ucy5mb3JFYWNoKChvcGVyYXRpb246IEVudGl0eU9wZXJhdGlvbikgPT4ge1xuICAgICAgdGhpcy5hZGRPcGVyYXRpb24ob3BlcmF0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW5zZXJ0IG9wZXJhdGlvbiBhbmQgYWRkIGFuIGVudGl0eSB0byB0aGUgc3RvcmVcbiAgICogQHBhcmFtIGN1cnJlbnQgVGhlIGVudGl0eSB0byBpbnNlcnRcbiAgICogQHBhcmFtIHN0b3JlIE9wdGlvbmFsOiBUaGUgc3RvcmUgdG8gaW5zZXJ0IHRoZSBlbnRpdHkgaW50b1xuICAgKiBAcGFyYW0gbWV0YSBPcHRpb25hbDogQW55IG1ldGFkYXRhIG9uIHRoZSBvcGVyYXRpb25cbiAgICovXG4gIHByaXZhdGUgZG9JbnNlcnQoY3VycmVudDogb2JqZWN0LCBzdG9yZT86IEVudGl0eVN0b3JlPG9iamVjdD4sIG1ldGE/OiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIHRoaXMuYWRkT3BlcmF0aW9uKHtcbiAgICAgIGtleTogdGhpcy5nZXRLZXkoY3VycmVudCksXG4gICAgICB0eXBlOiBFbnRpdHlPcGVyYXRpb25UeXBlLkluc2VydCxcbiAgICAgIHByZXZpb3VzOiB1bmRlZmluZWQsXG4gICAgICBjdXJyZW50LFxuICAgICAgc3RvcmUsXG4gICAgICBtZXRhXG4gICAgfSk7XG5cbiAgICBpZiAoc3RvcmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc3RvcmUuaW5zZXJ0KGN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gdXBkYXRlIG9wZXJhdGlvbiBhbmQgdXBkYXRlIGFuIGVudGl0eSBpbnRvIHRoZSBzdG9yZVxuICAgKiBAcGFyYW0gcHJldmlvdXMgVGhlIGVudGl0eSBiZWZvcmUgdXBkYXRlXG4gICAqIEBwYXJhbSBjdXJyZW50IFRoZSBlbnRpdHkgYWZ0ZXIgdXBkYXRlXG4gICAqIEBwYXJhbSBzdG9yZSBPcHRpb25hbDogVGhlIHN0b3JlIHRvIHVwZGF0ZSB0aGUgZW50aXR5IGludG9cbiAgICogQHBhcmFtIG1ldGEgT3B0aW9uYWw6IEFueSBtZXRhZGF0YSBvbiB0aGUgb3BlcmF0aW9uXG4gICAqL1xuICBwcml2YXRlIGRvVXBkYXRlKHByZXZpb3VzOiBvYmplY3QsIGN1cnJlbnQ6IG9iamVjdCwgc3RvcmU/OiBFbnRpdHlTdG9yZTxvYmplY3Q+LCBtZXRhPzoge1trZXk6IHN0cmluZ106IGFueX0pIHtcbiAgICB0aGlzLmFkZE9wZXJhdGlvbih7XG4gICAgICBrZXk6IHRoaXMuZ2V0S2V5KGN1cnJlbnQpLFxuICAgICAgdHlwZTogRW50aXR5T3BlcmF0aW9uVHlwZS5VcGRhdGUsXG4gICAgICBwcmV2aW91cyxcbiAgICAgIGN1cnJlbnQsXG4gICAgICBzdG9yZSxcbiAgICAgIG1ldGFcbiAgICB9KTtcblxuICAgIGlmIChzdG9yZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdG9yZS51cGRhdGUoY3VycmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGRlbGV0ZSBvcGVyYXRpb24gYW5kIGRlbGV0ZSBhbiBlbnRpdHkgZnJvbSB0aGUgc3RvcmVcbiAgICogQHBhcmFtIHByZXZpb3VzIFRoZSBlbnRpdHkgYmVmb3JlIGRlbGV0ZVxuICAgKiBAcGFyYW0gc3RvcmUgT3B0aW9uYWw6IFRoZSBzdG9yZSB0byBkZWxldGUgdGhlIGVudGl0eSBmcm9tXG4gICAqIEBwYXJhbSBtZXRhIE9wdGlvbmFsOiBBbnkgbWV0YWRhdGEgb24gdGhlIG9wZXJhdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBkb0RlbGV0ZShwcmV2aW91czogb2JqZWN0LCBzdG9yZT86IEVudGl0eVN0b3JlPG9iamVjdD4sIG1ldGE/OiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIHRoaXMuYWRkT3BlcmF0aW9uKHtcbiAgICAgIGtleTogdGhpcy5nZXRLZXkocHJldmlvdXMpLFxuICAgICAgdHlwZTogRW50aXR5T3BlcmF0aW9uVHlwZS5EZWxldGUsXG4gICAgICBwcmV2aW91cyxcbiAgICAgIGN1cnJlbnQ6IHVuZGVmaW5lZCxcbiAgICAgIHN0b3JlLFxuICAgICAgbWV0YVxuICAgIH0pO1xuXG4gICAgaWYgKHN0b3JlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0b3JlLmRlbGV0ZShwcmV2aW91cyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb21taXR0ZWQgb3BlcmF0aW9ucyBmcm9tIHN0b3JlXG4gICAqIEBwYXJhbSBvcGVyYXRpb25zIENvbW1pdGVkIG9wZXJhdGlvbnNcbiAgICogQHRvZG8gUmFpc2UgZXZlbnQgYW5kIHN5bmNocm9uaXplIHN0b3Jlcz9cbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZU9wZXJhdGlvbnMob3BlcmF0aW9uczogRW50aXR5T3BlcmF0aW9uW10pIHtcbiAgICB0aGlzLm9wZXJhdGlvbnMuZGVsZXRlTWFueShvcGVyYXRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21taXQgc3VjY2VzcywgcmVzb2x2ZSBjb21taXRlZCBvcGVyYXRpb25zIGFuZCBleGl0IGNvbW1pdCBwaGFzZVxuICAgKiBAcGFyYW0gb3BlcmF0aW9ucyBDb21taXRlZCBvcGVyYXRpb25zXG4gICAqL1xuICBwcml2YXRlIG9uQ29tbWl0U3VjY2VzcyhvcGVyYXRpb25zOiBFbnRpdHlPcGVyYXRpb25bXSkge1xuICAgIHRoaXMucmVzb2x2ZU9wZXJhdGlvbnMob3BlcmF0aW9ucyk7XG4gICAgdGhpcy5pbkNvbW1pdFBoYXNlJC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21taXQgZXJyb3IsIGFib3J0IHRyYW5zYWN0aW9uXG4gICAqIEBwYXJhbSBvcGVyYXRpb25zIENvbW1pdGVkIG9wZXJhdGlvbnNcbiAgICovXG4gIHByaXZhdGUgb25Db21taXRFcnJvcihvcGVyYXRpb25zOiBFbnRpdHlPcGVyYXRpb25bXSkge1xuICAgIHRoaXMuaW5Db21taXRQaGFzZSQubmV4dChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIG9wZXJhdGlvbiB0byB0aGUgb3BlcmF0aW9ucyBzdG9yZVxuICAgKiBAcGFyYW0gb3BlcmF0aW9uIE9wZXJhdGlvbiB0byBhZGRcbiAgICovXG4gIHByaXZhdGUgYWRkT3BlcmF0aW9uKG9wZXJhdGlvbjogRW50aXR5T3BlcmF0aW9uKSB7XG4gICAgdGhpcy5jaGVja0luQ29tbWl0UGhhc2UoKTtcblxuICAgIHRoaXMub3BlcmF0aW9ucy5pbnNlcnQob3BlcmF0aW9uKTtcbiAgICB0aGlzLm9wZXJhdGlvbnMuc3RhdGUudXBkYXRlKG9wZXJhdGlvbiwge2FkZGVkOiB0cnVlfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIG9wZXJhdGlvbiBmcm9tIHRoZSBvcGVyYXRpb25zIHN0b3JlXG4gICAqIEBwYXJhbSBvcGVyYXRpb24gT3BlcmF0aW9uIHRvIHJlbW92ZVxuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVPcGVyYXRpb24ob3BlcmF0aW9uOiBFbnRpdHlPcGVyYXRpb24pIHtcbiAgICB0aGlzLmNoZWNrSW5Db21taXRQaGFzZSgpO1xuXG4gICAgdGhpcy5vcGVyYXRpb25zLmRlbGV0ZShvcGVyYXRpb24pO1xuICAgIHRoaXMub3BlcmF0aW9ucy5zdGF0ZS51cGRhdGUob3BlcmF0aW9uLCB7YWRkZWQ6IGZhbHNlfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUgb3BlcmF0aW9ucyB0byBjb21taXRcbiAgICogQHJldHVybnMgT3BlcmF0aW9ucyB0byBjb21taXRcbiAgICovXG4gIHByaXZhdGUgZ2V0T3BlcmF0aW9uc0luQ29tbWl0KCk6IEVudGl0eU9wZXJhdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5vcGVyYXRpb25zLnN0YXRlVmlld1xuICAgICAgLm1hbnlCeSgodmFsdWU6IHtlbnRpdHk6IEVudGl0eU9wZXJhdGlvbiwgc3RhdGU6IEVudGl0eU9wZXJhdGlvblN0YXRlfSkgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUuc3RhdGUuYWRkZWQgPT09IHRydWU7XG4gICAgICB9KVxuICAgICAgLm1hcCgodmFsdWU6IHtlbnRpdHk6IEVudGl0eU9wZXJhdGlvbiwgc3RhdGU6IEVudGl0eU9wZXJhdGlvblN0YXRlfSkgPT4gdmFsdWUuZW50aXR5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdHJhbnNhY3Rpb24gaXMgaW4gdGhlIGNvbW1pdCBwaGFzZSBhbmQgdGhyb3cgYW4gZXJyb3IgaWYgaXQgaXNcbiAgICovXG4gIHByaXZhdGUgY2hlY2tJbkNvbW1pdFBoYXNlKCkge1xuICAgIGlmICh0aGlzLmluQ29tbWl0UGhhc2UgPT09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyB0cmFuc2FjdGlvbiBpcyBpbiB0aGUgY29tbWl0IHBoYXNlLiBDYW5ub3QgY29tcGxldGUgdGhpcyBvcGVyYXRpb24uJyk7XG4gICAgfVxuICB9XG59XG4iXX0=