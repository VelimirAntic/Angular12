import { skip } from 'rxjs/operators';
import { ObjectUtils } from '@igo2/utils';
/**
 * This class is used to synchronize a component's changes
 * detection with an EntityStore changes. For example, it is frequent
 * to have a component subscribe to a store's selected entity and, at the same time,
 * this component provides a way to select an entity with, let's say, a click.
 *
 * This class automatically handles those case and triggers the compoent's
 * change detection when needed.
 *
 * Note: If the component observes the store's stateView, a workspace is
 * probably not required because the stateView catches any changes to the
 * entities and their state.
 */
export class EntityStoreWatcher {
    constructor(store, cdRef) {
        /**
         * Component inner state
         */
        this.innerStateIndex = new Map();
        this.setChangeDetector(cdRef);
        this.setStore(store);
    }
    destroy() {
        this.setChangeDetector(undefined);
        this.setStore(undefined);
    }
    /**
     * Bind this workspace to a store and start watching for changes
     * @param store Entity store
     */
    setStore(store) {
        if (store === undefined) {
            this.teardownObservers();
            this.innerStateIndex.clear();
            this.store = undefined;
            return;
        }
        this.setStore(undefined);
        this.store = store;
        this.setupObservers();
        this.detectChanges();
    }
    /**
     * Bind this workspace to a component's change detector
     * @param cdRef Change detector
     */
    setChangeDetector(cdRef) {
        this.cdRef = cdRef;
    }
    /**
     * Set up observers on a store's entities and their state
     * @param store Entity store
     */
    setupObservers() {
        this.teardownObservers();
        this.entities$$ = this.store.entities$
            .subscribe((entities) => this.onEntitiesChange(entities));
        this.state$$ = this.store.state.change$
            .pipe(skip(1))
            .subscribe(() => this.onStateChange());
    }
    /**
     * Teardown store observers
     */
    teardownObservers() {
        if (this.entities$$ !== undefined) {
            this.entities$$.unsubscribe();
        }
        if (this.state$$ !== undefined) {
            this.state$$.unsubscribe();
        }
        this.entities$$ = undefined;
        this.state$$ = undefined;
    }
    /**
     * When the entities change, always trigger the changes detection
     */
    onEntitiesChange(entities) {
        this.detectChanges();
    }
    /**
     * When the entities state change, trigger the change detection
     * only if the component has not handled these changes yet. For example,
     * the component might have initiated thoses changes itself.
     */
    onStateChange() {
        let changesDetected = false;
        const storeIndex = this.store.state.index;
        const innerIndex = this.innerStateIndex;
        if (storeIndex.size !== innerIndex.size) {
            changesDetected = this.detectChanges();
        }
        const storeKeys = Array.from(storeIndex.keys());
        for (const key of storeKeys) {
            const storeValue = storeIndex.get(key);
            const innerValue = innerIndex.get(key);
            if (changesDetected === false) {
                if (innerValue === undefined) {
                    changesDetected = this.detectChanges();
                }
                else if (!ObjectUtils.objectsAreEquivalent(storeValue, innerValue)) {
                    changesDetected = this.detectChanges();
                }
            }
            this.innerStateIndex.set(key, Object.assign({}, storeValue));
        }
    }
    /**
     * Trigger the change detection of the workspace is bound to a change detector
     */
    detectChanges() {
        if (this.cdRef !== undefined) {
            this.cdRef.detectChanges();
        }
        return true;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9zaGFyZWQvd2F0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUsxQzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLE9BQU8sa0JBQWtCO0lBMkI3QixZQUFZLEtBQXNCLEVBQUUsS0FBeUI7UUFmN0Q7O1dBRUc7UUFDSyxvQkFBZSxHQUFHLElBQUksR0FBRyxFQUFtQyxDQUFDO1FBYW5FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILFFBQVEsQ0FBQyxLQUFzQjtRQUM3QixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVE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ZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5pbXBvcnQgeyBFbnRpdHlLZXkgfSBmcm9tICcuL2VudGl0eS5pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgRW50aXR5U3RvcmUgfSBmcm9tICcuL3N0b3JlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gc3luY2hyb25pemUgYSBjb21wb25lbnQncyBjaGFuZ2VzXG4gKiBkZXRlY3Rpb24gd2l0aCBhbiBFbnRpdHlTdG9yZSBjaGFuZ2VzLiBGb3IgZXhhbXBsZSwgaXQgaXMgZnJlcXVlbnRcbiAqIHRvIGhhdmUgYSBjb21wb25lbnQgc3Vic2NyaWJlIHRvIGEgc3RvcmUncyBzZWxlY3RlZCBlbnRpdHkgYW5kLCBhdCB0aGUgc2FtZSB0aW1lLFxuICogdGhpcyBjb21wb25lbnQgcHJvdmlkZXMgYSB3YXkgdG8gc2VsZWN0IGFuIGVudGl0eSB3aXRoLCBsZXQncyBzYXksIGEgY2xpY2suXG4gKlxuICogVGhpcyBjbGFzcyBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgdGhvc2UgY2FzZSBhbmQgdHJpZ2dlcnMgdGhlIGNvbXBvZW50J3NcbiAqIGNoYW5nZSBkZXRlY3Rpb24gd2hlbiBuZWVkZWQuXG4gKlxuICogTm90ZTogSWYgdGhlIGNvbXBvbmVudCBvYnNlcnZlcyB0aGUgc3RvcmUncyBzdGF0ZVZpZXcsIGEgd29ya3NwYWNlIGlzXG4gKiBwcm9iYWJseSBub3QgcmVxdWlyZWQgYmVjYXVzZSB0aGUgc3RhdGVWaWV3IGNhdGNoZXMgYW55IGNoYW5nZXMgdG8gdGhlXG4gKiBlbnRpdGllcyBhbmQgdGhlaXIgc3RhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRpdHlTdG9yZVdhdGNoZXI8RSBleHRlbmRzIG9iamVjdD4ge1xuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgY2hhbmdlIGRldGVjdG9yXG4gICAqL1xuICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcblxuICAvKipcbiAgICogRW50aXR5IHN0b3JlXG4gICAqL1xuICBwcml2YXRlIHN0b3JlOiBFbnRpdHlTdG9yZTxFPjtcblxuICAvKipcbiAgICogQ29tcG9uZW50IGlubmVyIHN0YXRlXG4gICAqL1xuICBwcml2YXRlIGlubmVyU3RhdGVJbmRleCA9IG5ldyBNYXA8RW50aXR5S2V5LCB7W2tleTogc3RyaW5nXTogYW55fT4oKTtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzdG9yZSdzIGVudGl0aWVzXG4gICAqL1xuICBwcml2YXRlIGVudGl0aWVzJCQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzdG9yZSdzIHN0YXRlXG4gICAqL1xuICBwcml2YXRlIHN0YXRlJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihzdG9yZT86IEVudGl0eVN0b3JlPEU+LCBjZFJlZj86IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5zZXRDaGFuZ2VEZXRlY3RvcihjZFJlZik7XG4gICAgdGhpcy5zZXRTdG9yZShzdG9yZSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2V0Q2hhbmdlRGV0ZWN0b3IodW5kZWZpbmVkKTtcbiAgICB0aGlzLnNldFN0b3JlKHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGlzIHdvcmtzcGFjZSB0byBhIHN0b3JlIGFuZCBzdGFydCB3YXRjaGluZyBmb3IgY2hhbmdlc1xuICAgKiBAcGFyYW0gc3RvcmUgRW50aXR5IHN0b3JlXG4gICAqL1xuICBzZXRTdG9yZShzdG9yZT86IEVudGl0eVN0b3JlPEU+KSB7XG4gICAgaWYgKHN0b3JlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudGVhcmRvd25PYnNlcnZlcnMoKTtcbiAgICAgIHRoaXMuaW5uZXJTdGF0ZUluZGV4LmNsZWFyKCk7XG4gICAgICB0aGlzLnN0b3JlID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RvcmUodW5kZWZpbmVkKTtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5zZXR1cE9ic2VydmVycygpO1xuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhpcyB3b3Jrc3BhY2UgdG8gYSBjb21wb25lbnQncyBjaGFuZ2UgZGV0ZWN0b3JcbiAgICogQHBhcmFtIGNkUmVmIENoYW5nZSBkZXRlY3RvclxuICAgKi9cbiAgc2V0Q2hhbmdlRGV0ZWN0b3IoY2RSZWY/OiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuY2RSZWYgPSBjZFJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgb2JzZXJ2ZXJzIG9uIGEgc3RvcmUncyBlbnRpdGllcyBhbmQgdGhlaXIgc3RhdGVcbiAgICogQHBhcmFtIHN0b3JlIEVudGl0eSBzdG9yZVxuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cE9ic2VydmVycygpIHtcbiAgICB0aGlzLnRlYXJkb3duT2JzZXJ2ZXJzKCk7XG5cbiAgICB0aGlzLmVudGl0aWVzJCQgPSB0aGlzLnN0b3JlLmVudGl0aWVzJFxuICAgICAgLnN1YnNjcmliZSgoZW50aXRpZXM6IEVbXSkgPT4gdGhpcy5vbkVudGl0aWVzQ2hhbmdlKGVudGl0aWVzKSk7XG5cbiAgICB0aGlzLnN0YXRlJCQgPSB0aGlzLnN0b3JlLnN0YXRlLmNoYW5nZSRcbiAgICAgIC5waXBlKHNraXAoMSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub25TdGF0ZUNoYW5nZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWFyZG93biBzdG9yZSBvYnNlcnZlcnNcbiAgICovXG4gIHByaXZhdGUgdGVhcmRvd25PYnNlcnZlcnMoKSB7XG4gICAgaWYgKHRoaXMuZW50aXRpZXMkJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmVudGl0aWVzJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUkJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0YXRlJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5lbnRpdGllcyQkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdGUkJCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBlbnRpdGllcyBjaGFuZ2UsIGFsd2F5cyB0cmlnZ2VyIHRoZSBjaGFuZ2VzIGRldGVjdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBvbkVudGl0aWVzQ2hhbmdlKGVudGl0aWVzOiBFW10pIHtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBlbnRpdGllcyBzdGF0ZSBjaGFuZ2UsIHRyaWdnZXIgdGhlIGNoYW5nZSBkZXRlY3Rpb25cbiAgICogb25seSBpZiB0aGUgY29tcG9uZW50IGhhcyBub3QgaGFuZGxlZCB0aGVzZSBjaGFuZ2VzIHlldC4gRm9yIGV4YW1wbGUsXG4gICAqIHRoZSBjb21wb25lbnQgbWlnaHQgaGF2ZSBpbml0aWF0ZWQgdGhvc2VzIGNoYW5nZXMgaXRzZWxmLlxuICAgKi9cbiAgcHJpdmF0ZSBvblN0YXRlQ2hhbmdlKCkge1xuICAgIGxldCBjaGFuZ2VzRGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBzdG9yZUluZGV4ID0gdGhpcy5zdG9yZS5zdGF0ZS5pbmRleDtcbiAgICBjb25zdCBpbm5lckluZGV4ID0gdGhpcy5pbm5lclN0YXRlSW5kZXg7XG5cbiAgICBpZiAoc3RvcmVJbmRleC5zaXplICE9PSBpbm5lckluZGV4LnNpemUpIHtcbiAgICAgIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlS2V5cyA9IEFycmF5LmZyb20oc3RvcmVJbmRleC5rZXlzKCkpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHN0b3JlS2V5cykge1xuICAgICAgY29uc3Qgc3RvcmVWYWx1ZSA9IHN0b3JlSW5kZXguZ2V0KGtleSk7XG4gICAgICBjb25zdCBpbm5lclZhbHVlID0gaW5uZXJJbmRleC5nZXQoa2V5KTtcbiAgICAgIGlmIChjaGFuZ2VzRGV0ZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChpbm5lclZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjaGFuZ2VzRGV0ZWN0ZWQgPSB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSBlbHNlIGlmICghT2JqZWN0VXRpbHMub2JqZWN0c0FyZUVxdWl2YWxlbnQoc3RvcmVWYWx1ZSwgaW5uZXJWYWx1ZSkpIHtcbiAgICAgICAgICBjaGFuZ2VzRGV0ZWN0ZWQgPSB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmlubmVyU3RhdGVJbmRleC5zZXQoa2V5LCBPYmplY3QuYXNzaWduKHt9LCBzdG9yZVZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGNoYW5nZSBkZXRlY3Rpb24gb2YgdGhlIHdvcmtzcGFjZSBpcyBib3VuZCB0byBhIGNoYW5nZSBkZXRlY3RvclxuICAgKi9cbiAgcHJpdmF0ZSBkZXRlY3RDaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmNkUmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59XG4iXX0=