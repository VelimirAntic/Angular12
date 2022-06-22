import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, Directive, HostListener, ViewChild, Pipe, Optional, Self, HostBinding, NgModule, Injectable, ViewContainerRef, ViewEncapsulation, ContentChildren } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i10$1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i7 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i5$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1$6 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i9$1 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i6 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i1$2 from '@igo2/core';
import { Media, IgoLanguageModule } from '@igo2/core';
import t from 'typy';
import { ReplaySubject, BehaviorSubject, combineLatest, of, Observable, isObservable, fromEvent, merge, Subject } from 'rxjs';
import { map, skip, debounceTime, catchError, tap, switchMap, filter, take, distinctUntilChanged } from 'rxjs/operators';
import { uuid, ObjectUtils } from '@igo2/utils';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import * as i2 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i3 from '@angular/material/core';
import * as i4 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i1$5 from '@angular/forms';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import * as moment_ from 'moment';
import * as i2$2 from '@angular/cdk/a11y';
import * as i5 from '@angular/material/sort';
import { MatSortModule, MatSort } from '@angular/material/sort';
import * as i9 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i10 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i2$3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import scrollIntoView from 'scroll-into-view-if-needed';
import * as i2$1 from '@angular/material/paginator';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { __decorate } from 'tslib';
import * as i1$3 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Cacheable } from 'ts-cacheable';
import * as i6$1 from '@ngx-translate/core';
import * as i1$4 from '@angular/platform-browser';
import * as i1$7 from '@angular/cdk/overlay';
import { MatBadgeModule } from '@angular/material/badge';
import * as i1$8 from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i3$1 from 'angular-shepherd';
import * as i1$9 from '@angular/material/sidenav';
import * as i2$4 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataSource, CdkTableModule } from '@angular/cdk/table';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';

var EntityOperationType;
(function (EntityOperationType) {
    EntityOperationType["Insert"] = "Insert";
    EntityOperationType["Update"] = "Update";
    EntityOperationType["Delete"] = "Delete";
})(EntityOperationType || (EntityOperationType = {}));
var EntityTableColumnRenderer;
(function (EntityTableColumnRenderer) {
    EntityTableColumnRenderer["Default"] = "Default";
    EntityTableColumnRenderer["HTML"] = "HTML";
    EntityTableColumnRenderer["UnsanitizedHTML"] = "UnsanitizedHTML";
    EntityTableColumnRenderer["Editable"] = "Editable";
    EntityTableColumnRenderer["Icon"] = "Icon";
    EntityTableColumnRenderer["ButtonGroup"] = "ButtonGroup";
})(EntityTableColumnRenderer || (EntityTableColumnRenderer = {}));
var EntityTableScrollBehavior;
(function (EntityTableScrollBehavior) {
    EntityTableScrollBehavior["Auto"] = "auto";
    EntityTableScrollBehavior["Instant"] = "instant";
    EntityTableScrollBehavior["Smooth"] = "smooth";
})(EntityTableScrollBehavior || (EntityTableScrollBehavior = {}));
var EntityTableSelectionState;
(function (EntityTableSelectionState) {
    EntityTableSelectionState["None"] = "None";
    EntityTableSelectionState["All"] = "All";
    EntityTableSelectionState["Some"] = "Some";
})(EntityTableSelectionState || (EntityTableSelectionState = {}));

/**
 * Get an entity's named property. Nested properties are supported
 * with the dotted notation. (i.e 'author.name')
 *
 * Note: this method is a 'best attempt' at getting an entity's property.
 * It fits the most common cases but you might need to explicitely define
 * a property getter when using an EntityStore, for example.
 * @param entity Entity
 * @param property Property name
 * @returns Property value
 */
function getEntityProperty(entity, property) {
    return t(entity, property).safeObject;
}
/**
 * Get an entity's id. An entity's id can be one of:
 * 'entity.meta.id', 'entity.meta.idProperty' or 'entity.id'.
 *
 * Note: See the note in the 'getEntityProperty' documentation.
 * @param entity Entity
 * @returns Entity id
 */
function getEntityId(entity) {
    const meta = entity.meta || {};
    return meta.id ? meta.id : getEntityProperty(entity, meta.idProperty || 'id');
}
/**
 * Get an entity's title. An entity's title can be one of:
 * 'entity.meta.title', 'entity.meta.titleProperty' or 'entity.title'.
 * @param entity Entity
 * @returns Entity title
 */
function getEntityTitle(entity) {
    const meta = entity.meta || {};
    return meta.title ? meta.title : getEntityProperty(entity, meta.titleProperty || 'title');
}
/**
 * Get an entity's HTML title. An entity's HTML title can be one of:
 * 'entity.meta.titleHtml', 'entity.meta.titleHtmlProperty' or 'entity.titleHtml'.
 * @param entity Entity
 * @returns Entity HTML title
 */
function getEntityTitleHtml(entity) {
    const meta = entity.meta || {};
    return meta.titleHtml ? meta.titleHtml : getEntityProperty(entity, meta.titleHtmlProperty || 'titleHtml');
}
/**
 * Get an entity's icon. An entity's icon can be one of:
 * 'entity.meta.icon', 'entity.meta.iconProperty' or 'entity.icon'.
 * @param entity Entity
 * @returns Entity icon
 */
function getEntityIcon(entity) {
    const meta = entity.meta || {};
    return meta.icon ? meta.icon : getEntityProperty(entity, meta.iconProperty || 'icon');
}
/**
 * Get an entity's revision.
 * @param entity Entity
 * @returns Entity revision
 */
function getEntityRevision(entity) {
    const meta = entity.meta || {};
    return meta.revision || 0;
}

/**
 * This class is used to track a store's entities state
 */
class EntityStateManager {
    constructor(options = {}) {
        /**
         * State index
         */
        this.index = new Map();
        /**
         * Change emitter
         */
        this.change$ = new ReplaySubject(1);
        this.store = options.store ? options.store : undefined;
        this.getKey = options.getKey
            ? options.getKey
            : (this.store ? this.store.getKey : getEntityId);
        this.next();
    }
    /**
     * Clear state
     */
    clear() {
        if (this.index.size > 0) {
            this.index.clear();
            this.next();
        }
    }
    /**
     * Get an entity's state
     * @param entity Entity
     * @returns State
     */
    get(entity) {
        return (this.index.get(this.getKey(entity)) || {});
    }
    /**
     * Set an entity's state
     * @param entity Entity
     * @param state State
     */
    set(entity, state) {
        this.setMany([entity], state);
    }
    /**
     * Set many entitie's state
     * @param entitie Entities
     * @param state State
     */
    setMany(entities, state) {
        entities.forEach((entity) => {
            this.index.set(this.getKey(entity), Object.assign({}, state));
        });
        this.next();
    }
    /**
     * Set state of all entities that already have a state. This is not
     * the same as setting the state of all the store's entities.
     * @param state State
     */
    setAll(state) {
        Array.from(this.index.keys()).forEach((key) => {
            this.index.set(key, Object.assign({}, state));
        });
        this.next();
    }
    /**
     * Update an entity's state
     * @param entity Entity
     * @param changes State changes
     */
    update(entity, changes, exclusive = false) {
        this.updateMany([entity], changes, exclusive);
    }
    /**
     * Update many entitie's state
     * @param entitie Entities
     * @param changes State changes
     */
    updateMany(entities, changes, exclusive = false) {
        if (exclusive === true) {
            return this.updateManyExclusive(entities, changes);
        }
        entities.forEach((entity) => {
            const state = Object.assign({}, this.get(entity), changes);
            this.index.set(this.getKey(entity), state);
        });
        this.next();
    }
    /**
     * Reversee an entity's state
     * @param entity Entity
     * @param keys State keys to reverse
     */
    reverse(entity, keys) {
        this.reverseMany([entity], keys);
    }
    /**
     * Reverse many entitie's state
     * @param entitie Entities
     * @param keys State keys to reverse
     */
    reverseMany(entities, keys) {
        entities.forEach((entity) => {
            const currentState = this.get(entity);
            const changes = keys.reduce((acc, key) => {
                acc[key] = currentState[key] || false;
                return acc;
            }, {});
            const reversedChanges = this.reverseChanges(changes);
            const state = Object.assign({}, currentState, reversedChanges);
            this.index.set(this.getKey(entity), state);
        });
        this.next();
    }
    /**
     * Update state of all entities that already have a state. This is not
     * the same as updating the state of all the store's entities.
     * @param changes State
     */
    updateAll(changes) {
        const allKeys = this.getAllKeys();
        Array.from(allKeys).forEach((key) => {
            const state = Object.assign({}, this.index.get(key), changes);
            this.index.set(key, state);
        });
        this.next();
    }
    /**
     * When some state changes are flagged as 'exclusive', reverse
     * the state of all other entities. Changes are reversable when
     * they are boolean.
     * @param entitie Entities
     * @param changes State changes
     */
    updateManyExclusive(entities, changes) {
        const reverseChanges = this.reverseChanges(changes);
        const keys = entities.map((entity) => this.getKey(entity));
        const allKeys = new Set(keys.concat(Array.from(this.getAllKeys())));
        allKeys.forEach((key) => {
            const state = this.index.get(key) || {};
            if (keys.indexOf(key) >= 0) {
                this.index.set(key, Object.assign({}, state, changes));
            }
            else {
                // Update only if the reverse changes would modify
                // a key already present in the current state
                const shouldUpdate = Object.keys(reverseChanges).some((changeKey) => {
                    return state[changeKey] !== undefined &&
                        state[changeKey] !== reverseChanges[changeKey];
                });
                if (shouldUpdate === true) {
                    this.index.set(key, Object.assign({}, state, reverseChanges));
                }
            }
        });
        this.next();
    }
    /**
     * Compute a 'reversed' version of some state changes.
     * Changes are reversable when they are boolean.
     * @param changes State changes
     * @returns Reversed state changes
     */
    reverseChanges(changes) {
        return Object.entries(changes).reduce((reverseChanges, bunch) => {
            const [changeKey, value] = bunch;
            if (typeof value === typeof true) {
                reverseChanges[changeKey] = !value;
            }
            return reverseChanges;
        }, {});
    }
    /**
     * Return all the keys in that state and in the store it's bound to, if any.
     * @returns Set of keys
     */
    getAllKeys() {
        const storeKeys = this.store ? Array.from(this.store.index.keys()) : [];
        return new Set(Array.from(this.index.keys()).concat(storeKeys));
    }
    /**
     * Emit 'change' event
     */
    next() {
        this.change$.next();
    }
}

/**
 * An entity view streams entities from an observable source. These entities
 * can be filtered or sorted without affecting the source. A view can also
 * combine data from multiple sources, joined together.
 */
class EntityView {
    constructor(source$) {
        this.source$ = source$;
        /**
         * Observable stream of values
         */
        this.values$ = new BehaviorSubject([]);
        /**
         * Whether this view has been lifted
         */
        this.lifted = false;
        /**
         * Join clauses
         */
        this.joins = [];
        /**
         * Observable of a filter clause
         */
        this.filter$ = new BehaviorSubject(undefined);
        /**
         * Observable of filter clauses
         */
        this.filters$ = new BehaviorSubject([]);
        /**
         * Filters index
         */
        this.filterIndex = new Map();
        /**
         * Observable of a sort clause
         */
        this.sort$ = new BehaviorSubject(undefined);
        this.getKey$ = new BehaviorSubject(undefined);
        /**
         * Number of entities
         */
        this.count$ = new BehaviorSubject(0);
        /**
         * Whether the store is empty
         */
        this.empty$ = new BehaviorSubject(true);
    }
    /**
     * Method for indexing
     */
    get getKey() { return this.getKey$.value; }
    get count() { return this.count$.value; }
    get empty() { return this.empty$.value; }
    /**
     * Store index
     */
    get index() { return this._index; }
    /**
     * Get a value from the view by key
     * @param key Key
     * @returns Value
     */
    get(key) {
        if (this._index === undefined) {
            throw new Error('This view has no index, therefore, this method is unavailable.');
        }
        return this.index.get(key);
    }
    /**
     * Get all the values
     * @returns Array of values
     */
    all() {
        return this.values$.value;
    }
    /**
     * Observe all the values
     * @returns Observable of values
     */
    all$() {
        return this.values$;
    }
    /**
     * Get the first value that respects a criteria
     * @returns A value
     */
    firstBy(clause) {
        return this.values$.value.find(clause);
    }
    /**
     * Observe the first value that respects a criteria
     * @returns Observable of a value
     */
    firstBy$(clause) {
        return this.values$.pipe(map((values) => values.find(clause)));
    }
    /**
     * Get all the values that respect a criteria
     * @returns Array of values
     */
    manyBy(clause) {
        return this.values$.value.filter(clause);
    }
    /**
     * Observe all the values that respect a criteria
     * @returns Observable of values
     */
    manyBy$(clause) {
        return this.values$.pipe(map((values) => values.filter(clause)));
    }
    /**
     * Clear the filter and sort and unsubscribe from the source
     */
    clear() {
        this.filter(undefined);
        this.sort(undefined);
    }
    destroy() {
        if (this.values$$ !== undefined) {
            this.values$$.unsubscribe();
        }
        this.clear();
    }
    /**
     * Create an index
     * @param getKey Method to get a value's id
     * @returns The view
     */
    createIndex(getKey) {
        this._index = new Map();
        this.getKey$.next(getKey);
        return this;
    }
    /**
     * Join another source to the stream (chainable)
     * @param clause Join clause
     * @returns The view
     */
    join(clause) {
        if (this.lifted === true) {
            throw new Error('This view has already been lifted, therefore, no join is allowed.');
        }
        this.joins.push(clause);
        return this;
    }
    /**
     * Filter values (chainable)
     * @param clause Filter clause
     * @returns The view
     */
    filter(clause) {
        this.filter$.next(clause);
        return this;
    }
    /**
     * @param clause Filter clause
     * @returns The filter id
     */
    addFilter(clause) {
        const id = uuid();
        this.filterIndex.set(id, clause);
        this.filters$.next(Array.from(this.filterIndex.values()));
        return id;
    }
    /**
     * Remove a filter by id
     * @param clause Filter clause
     */
    removeFilter(id) {
        this.filterIndex.delete(id);
        this.filters$.next(Array.from(this.filterIndex.values()));
    }
    /**
     * Sort values (chainable)
     * @param clauseSort clause
     * @returns The view
     */
    sort(clause) {
        this.sort$.next(clause);
        return this;
    }
    /**
     * Create the final observable
     * @returns Observable
     */
    lift() {
        this.lifted = true;
        const source$ = this.joins.length > 0 ? this.liftJoinedSource() : this.liftSource();
        const observables$ = [
            source$,
            this.filters$,
            this.filter$,
            this.sort$,
            this.getKey$
        ];
        this.values$$ = combineLatest(observables$)
            .pipe(skip(1), debounceTime(5))
            .subscribe((bunch) => {
            const [_values, filters, filter, sort, getKey] = bunch;
            const values = this.processValues(_values, filters, filter, sort);
            const generateIndex = getKey !== undefined;
            this.setValues(values, generateIndex);
        });
    }
    /**
     * Create the source observable when no joins are defined
     * @returns Observable
     */
    liftSource() {
        return this.source$;
    }
    /**
     * Create the source observable when joins are defined
     * @returns Observable
     */
    liftJoinedSource() {
        const sources$ = [this.source$, combineLatest(this.joins.map((join) => join.source))];
        return combineLatest(sources$)
            .pipe(map((bunch) => {
            const [entities, joinData] = bunch;
            return entities.reduce((values, entity) => {
                const value = this.computeJoinedValue(entity, joinData);
                if (value !== undefined) {
                    values.push(value);
                }
                return values;
            }, []);
        }));
    }
    /**
     * Apply joins to a source's entity and return the final value
     * @returns Final value
     */
    computeJoinedValue(entity, joinData) {
        let value = entity;
        let joinIndex = 0;
        while (value !== undefined && joinIndex < this.joins.length) {
            value = this.joins[joinIndex].reduce(value, joinData[joinIndex]);
            joinIndex += 1;
        }
        return value;
    }
    /**
     * Filter and sort values before streaming them
     * @param values Values
     * @param filters Filter clauses
     * @param filter Filter clause
     * @param sort Sort clause
     * @returns Filtered and sorted values
     */
    processValues(values, filters, filter, sort) {
        values = values.slice(0);
        values = this.filterValues(values, filters.concat([filter]));
        values = this.sortValues(values, sort);
        return values;
    }
    /**
     * Filter values
     * @param values Values
     * @param filters Filter clauses
     * @returns Filtered values
     */
    filterValues(values, clauses) {
        if (clauses.length === 0) {
            return values;
        }
        return values
            .filter((value) => {
            return clauses
                .filter((clause) => clause !== undefined)
                .every((clause) => clause(value));
        });
    }
    /**
     * Sort values
     * @param values Values
     * @param sort Sort clause
     * @returns Sorted values
     */
    sortValues(values, clause) {
        if (clause === undefined) {
            return values;
        }
        return values.sort((v1, v2) => {
            return ObjectUtils.naturalCompare(clause.valueAccessor(v1), clause.valueAccessor(v2), clause.direction, clause.nullsFirst);
        });
    }
    /**
     * Set value and optionally generate an index
     * @param values Values
     * @param generateIndex boolean
     */
    setValues(values, generateIndex) {
        if (generateIndex === true) {
            this._index = this.generateIndex(values);
        }
        this.values$.next(values);
        const count = values.length;
        const empty = count === 0;
        this.count$.next(count);
        this.empty$.next(empty);
    }
    /**
     * Generate a complete index of all the values
     * @param entities Entities
     * @returns Index
     */
    generateIndex(values) {
        const entries = values.map((value) => [this.getKey(value), value]);
        return new Map(entries);
    }
}

/**
 * An entity store class holds any number of entities
 * as well as their state. It can be observed, filtered and sorted and
 * provides methods to insert, update or delete entities.
 */
class EntityStore {
    constructor(entities, options = {}) {
        /**
         * Observable of the raw entities
         */
        this.entities$ = new BehaviorSubject([]);
        /**
         * Number of entities
         */
        this.count$ = new BehaviorSubject(0);
        /**
         * Whether the store is empty
         */
        this.empty$ = new BehaviorSubject(true);
        this._pristine = true;
        /**
         * Strategies
         */
        this.strategies = [];
        this.getKey = options.getKey ? options.getKey : getEntityId;
        this.getProperty = options.getProperty ? options.getProperty : getEntityProperty;
        this.state = this.createStateManager();
        this.view = this.createDataView();
        this.stateView = this.createStateView();
        this.view.lift();
        this.stateView.lift();
        if (entities.length > 0) {
            this.load(entities);
        }
        else {
            this._index = this.generateIndex(entities);
        }
    }
    get count() { return this.count$.value; }
    get empty() { return this.empty$.value; }
    /**
     * Store index
     */
    get index() { return this._index; }
    /**
     * Store index
     */
    get pristine() { return this._pristine; }
    /**
     * Get an entity from the store by key
     * @param key Key
     * @returns Entity
     */
    get(key) {
        return this.index.get(key);
    }
    /**
     * Get all entities in the store
     * @returns Array of entities
     */
    all() {
        return this.entities$.value;
    }
    /**
     * Set this store's entities
     * @param entities Entities
     */
    load(entities, pristine = true) {
        this._index = this.generateIndex(entities);
        this._pristine = pristine;
        this.next();
    }
    /**
     * Clear the store's entities but keep the state and views intact.
     * Views won't return any data but future data will be subject to the
     * current views filter and sort
     */
    softClear() {
        if (this.index && this.index.size > 0) {
            this.index.clear();
            this._pristine = true;
            this.next();
        }
        else if (this.index) {
            this.updateCount();
        }
    }
    /**
     * Clear the store's entities, state and views
     */
    clear() {
        this.stateView.clear();
        this.view.clear();
        this.state.clear();
        this.softClear();
    }
    destroy() {
        this.stateView.destroy();
        this.view.destroy();
        this.clear();
    }
    /**
     * Insert an entity into the store
     * @param entity Entity
     */
    insert(entity) {
        this.insertMany([entity]);
    }
    /**
     * Insert many entities into the store
     * @param entities Entities
     */
    insertMany(entities) {
        entities.forEach((entity) => this.index.set(this.getKey(entity), entity));
        this._pristine = false;
        this.next();
    }
    /**
     * Update or insert an entity into the store
     * @param entity Entity
     */
    update(entity) {
        this.updateMany([entity]);
    }
    /**
     * Update or insert many entities into the store
     * @param entities Entities
     */
    updateMany(entities) {
        entities.forEach((entity) => this.index.set(this.getKey(entity), entity));
        this._pristine = false;
        this.next();
    }
    /**
     * Delete an entity from the store
     * @param entity Entity
     */
    delete(entity) {
        this.deleteMany([entity]);
    }
    /**
     * Delete many entities from the store
     * @param entities Entities
     */
    deleteMany(entities) {
        entities.forEach((entity) => this.index.delete(this.getKey(entity)));
        this._pristine = false;
        this.next();
    }
    /**
     * Add a strategy to this store
     * @param strategy Entity store strategy
     * @returns Entity store
     */
    addStrategy(strategy, activate = false) {
        const existingStrategy = this.strategies.find((_strategy) => {
            return strategy.constructor === _strategy.constructor;
        });
        if (existingStrategy !== undefined) {
            throw new Error('A strategy of this type already exists on that EntityStore.');
        }
        this.strategies.push(strategy);
        strategy.bindStore(this);
        if (activate === true) {
            strategy.activate();
        }
        return this;
    }
    /**
     * Remove a strategy from this store
     * @param strategy Entity store strategy
     * @returns Entity store
     */
    removeStrategy(strategy) {
        const index = this.strategies.indexOf(strategy);
        if (index >= 0) {
            this.strategies.splice(index, 1);
            strategy.unbindStore(this);
        }
        return this;
    }
    /**
     * Return strategies of a given type
     * @param type Entity store strategy class
     * @returns Strategies
     */
    getStrategyOfType(type) {
        return this.strategies.find((strategy) => {
            return strategy instanceof type;
        });
    }
    /**
     * Activate strategies of a given type
     * @param type Entity store strategy class
     */
    activateStrategyOfType(type) {
        const strategy = this.getStrategyOfType(type);
        if (strategy !== undefined) {
            strategy.activate();
        }
    }
    /**
     * Deactivate strategies of a given type
     * @param type Entity store strategy class
     */
    deactivateStrategyOfType(type) {
        const strategy = this.getStrategyOfType(type);
        if (strategy !== undefined) {
            strategy.deactivate();
        }
    }
    /**
     * Generate a complete index of all the entities
     * @param entities Entities
     * @returns Index
     */
    generateIndex(entities) {
        const entries = entities.map((entity) => [this.getKey(entity), entity]);
        return new Map(entries);
    }
    /**
     * Push the index's entities into the entities$ observable
     */
    next() {
        this.entities$.next(Array.from(this.index.values()));
        this.updateCount();
    }
    /**
     * Update the store's count and empty
     */
    updateCount() {
        const count = this.index.size;
        const empty = count === 0;
        this.count$.next(count);
        this.empty$.next(empty);
    }
    /**
     * Create the entity state manager
     * @returns EntityStateManager
     */
    createStateManager() {
        return new EntityStateManager({ store: this });
    }
    /**
     * Create the data view
     * @returns EntityView<E>
     */
    createDataView() {
        return new EntityView(this.entities$);
    }
    /**
     * Create the state view
     * @returns EntityView<EntityRecord<E>>
     */
    createStateView() {
        return new EntityView(this.view.all$())
            .join({
            source: this.state.change$,
            reduce: (entity) => {
                const key = this.getKey(entity);
                const state = this.state.get(entity);
                const currentRecord = this.stateView.get(key);
                if (currentRecord !== undefined &&
                    currentRecord.entity === entity &&
                    this.statesAreTheSame(currentRecord.state, state)) {
                    return currentRecord;
                }
                const revision = currentRecord ? currentRecord.revision + 1 : 1;
                const ref = `${key}-${revision}`;
                return { entity, state, revision, ref };
            }
        })
            .createIndex((record) => this.getKey(record.entity));
    }
    statesAreTheSame(currentState, newState) {
        if (currentState === newState) {
            return true;
        }
        const currentStateIsEmpty = Object.keys(currentState).length === 0;
        const newStateIsEmpty = Object.keys(newState).length === 0;
        return currentStateIsEmpty && newStateIsEmpty;
    }
}

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
class EntityStoreWatcher {
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

/**
 * This class holds a reference to the insert, update and delete
 * operations performed on a store. This is useful to commit
 * these operations in a single pass or to cancel them.
 */
class EntityTransaction {
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

/**
 * Entity store strategies. They can do pretty much anything during a store's
 * lifetime. For example, they may act as triggers when something happens.
 * Sharing a strategy is a good idea when multiple strategies would have
 * on cancelling effect on each other.
 *
 * At creation, strategy is inactive and needs to be manually activated.
 */
class EntityStoreStrategy {
    constructor(options = {}) {
        this.options = options;
        /**
         * Feature store
         * @internal
         */
        this.stores = [];
        this.active$ = new BehaviorSubject(false);
        this.options = options;
    }
    /**
     * Whether this strategy is active
     * @internal
     */
    get active() { return this.active$.value; }
    /**
     * Activate the strategy. If it's already active, it'll be deactivated
     * and activated again.
     */
    activate() {
        if (this.active === true) {
            this.doDeactivate();
        }
        this.active$.next(true);
        this.doActivate();
    }
    /**
     * Activate the strategy. If it's already active, it'll be deactivated
     * and activated again.
     */
    deactivate() {
        this.active$.next(false);
        this.doDeactivate();
    }
    /**
     * Bind this strategy to a store
     * @param store Feature store
     */
    bindStore(store) {
        if (this.stores.indexOf(store) < 0) {
            this.stores.push(store);
        }
    }
    /**
     * Unbind this strategy from store
     * @param store Feature store
     */
    unbindStore(store) {
        const index = this.stores.indexOf(store);
        if (index >= 0) {
            this.stores.splice(index, 1);
        }
    }
    /**
     * Do the stataegy activation
     * @internal
     */
    doActivate() { }
    /**
     * Do the strategy deactivation
     * @internal
     */
    doDeactivate() { }
}

/**
 * When active, this strategy filters a store's stateView to return
 * selected entities only.
 */
class EntityStoreFilterCustomFuncStrategy extends EntityStoreStrategy {
    constructor(options) {
        super(options);
        this.options = options;
        /**
         * Store / filter ids map
         */
        this.filters = new Map();
    }
    /**
     * Bind this strategy to a store and start filtering it
     * @param store Entity store
     */
    bindStore(store) {
        super.bindStore(store);
        if (this.active === true) {
            this.filterStore(store);
        }
    }
    /**
     * Unbind this strategy from a store and stop filtering it
     * @param store Entity store
     */
    unbindStore(store) {
        super.unbindStore(store);
        if (this.active === true) {
            this.unfilterStore(store);
        }
    }
    /**
     * Start filtering all stores
     * @internal
     */
    doActivate() {
        this.filterAll();
    }
    /**
     * Stop filtering all stores
     * @internal
     */
    doDeactivate() {
        this.unfilterAll();
    }
    /**
     * Filter all stores
     */
    filterAll() {
        this.stores.forEach((store) => this.filterStore(store));
    }
    /**
     * Unfilter all stores
     */
    unfilterAll() {
        this.stores.forEach((store) => this.unfilterStore(store));
    }
    /**
     * Filter a store and add it to the filters map
     */
    filterStore(store) {
        this.filters.set(store, store.stateView.addFilter(this.options.filterClauseFunc));
    }
    /**
     * Unfilter a store and delete it from the filters map
     */
    unfilterStore(store) {
        const filterId = this.filters.get(store);
        if (filterId === undefined) {
            return;
        }
        store.stateView.removeFilter(filterId);
        this.filters.delete(store);
    }
}

/**
 * When active, this strategy filters a store's stateView to return
 * selected entities only.
 */
class EntityStoreFilterSelectionStrategy extends EntityStoreStrategy {
    constructor() {
        super(...arguments);
        /**
         * Store / filter ids map
         */
        this.filters = new Map();
    }
    /**
     * Bind this strategy to a store and start filtering it
     * @param store Entity store
     */
    bindStore(store) {
        super.bindStore(store);
        if (this.active === true) {
            this.filterStore(store);
        }
    }
    /**
     * Unbind this strategy from a store and stop filtering it
     * @param store Entity store
     */
    unbindStore(store) {
        super.unbindStore(store);
        if (this.active === true) {
            this.unfilterStore(store);
        }
    }
    /**
     * Start filtering all stores
     * @internal
     */
    doActivate() {
        this.filterAll();
    }
    /**
     * Stop filtering all stores
     * @internal
     */
    doDeactivate() {
        this.unfilterAll();
    }
    /**
     * Filter all stores
     */
    filterAll() {
        this.stores.forEach((store) => this.filterStore(store));
    }
    /**
     * Unfilter all stores
     */
    unfilterAll() {
        this.stores.forEach((store) => this.unfilterStore(store));
    }
    /**
     * Filter a store and add it to the filters map
     */
    filterStore(store) {
        if (this.filters.has(store)) {
            return;
        }
        const filter = (record) => {
            return record.state.selected === true;
        };
        this.filters.set(store, store.stateView.addFilter(filter));
    }
    /**
     * Unfilter a store and delete it from the filters map
     */
    unfilterStore(store) {
        const filterId = this.filters.get(store);
        if (filterId === undefined) {
            return;
        }
        store.stateView.removeFilter(filterId);
        this.filters.delete(store);
    }
}

function EntitySelectorComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r0.emptyValue);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.emptyText);
} }
function EntitySelectorComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r1.multiSelectValue);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, ctx_r1.multiText$));
} }
function EntitySelectorComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", record_r3.entity);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.titleAccessor(record_r3.entity), " ");
} }
class EntitySelectorComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        /**
         * The selected entity
         * @internal
         */
        this.selected$ = new BehaviorSubject(undefined);
        /**
         * The current multi select option text
         * @internal
         */
        this.multiText$ = new BehaviorSubject(undefined);
        this.multiSelectValue = { id: 'IGO_MULTI_SELECT' };
        this.emptyValue = { id: 'IGO_EMPTY_SELECT' };
        /**
         * Title accessor
         */
        this.titleAccessor = getEntityTitle;
        /**
         * Text to display when nothing is selected
         */
        this.emptyText = undefined;
        /**
         * Wheter selecting many entities is allowed
         */
        this.multi = false;
        /**
         * Text to display for the select all option
         */
        this.multiAllText = 'All';
        /**
         * Text to display for the select none option
         */
        this.multiNoneText = 'None';
        /**
         * Wheter the selector is disabled or not
         */
        this.disabled = false;
        /**
         * Event emitted when the selection changes
         */
        this.selectedChange = new EventEmitter();
    }
    /**
     * Create a store watcher and subscribe to the selected entity
     * @internal
     */
    ngOnInit() {
        this.watcher = new EntityStoreWatcher(this.store, this.cdRef);
        this.selected$$ = this.store.stateView
            .manyBy$((record) => record.state.selected === true)
            .subscribe((records) => {
            const entities = records.map((record) => record.entity);
            this.onSelectFromStore(entities);
        });
    }
    /**
     * Unsubscribe to the selected entity and destroy the store watcher
     * @internal
     */
    ngOnDestroy() {
        this.watcher.destroy();
        this.selected$$.unsubscribe();
    }
    /**
     * On selection change, update the store's state and emit an event
     * @internal
     */
    onSelectionChange(event) {
        const values = event.value instanceof Array ? event.value : [event.value];
        const multiSelect = values.find((_value) => _value === this.multiSelectValue);
        let entities = values.filter((_value) => _value !== this.multiSelectValue);
        if (multiSelect !== undefined) {
            if (entities.length === this.store.count) {
                entities = [];
            }
            else if (entities.length < this.store.count) {
                entities = this.store.all();
            }
        }
        entities = entities.filter((entity) => entity !== this.emptyValue);
        if (entities.length === 0) {
            this.store.state.updateAll({ selected: false });
        }
        else {
            this.store.state.updateMany(entities, { selected: true }, true);
        }
        const value = this.multi ? entities : event.value;
        this.selectedChange.emit({ selected: true, value });
    }
    onSelectFromStore(entities) {
        if (this.multi === true) {
            this.selected$.next(entities);
        }
        else {
            const entity = entities.length > 0 ? entities[0] : undefined;
            this.selected$.next(entity);
        }
        this.updateMultiToggleWithEntities(entities);
    }
    updateMultiToggleWithEntities(entities) {
        if (entities.length === this.store.count && this.multiText$.value !== this.multiNoneText) {
            this.multiText$.next(this.multiNoneText);
        }
        else if (entities.length < this.store.count && this.multiText$.value !== this.multiAllText) {
            this.multiText$.next(this.multiAllText);
        }
    }
}
EntitySelectorComponent.ɵfac = function EntitySelectorComponent_Factory(t) { return new (t || EntitySelectorComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
EntitySelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntitySelectorComponent, selectors: [["igo-entity-selector"]], inputs: { store: "store", titleAccessor: "titleAccessor", emptyText: "emptyText", multi: "multi", multiAllText: "multiAllText", multiNoneText: "multiNoneText", placeholder: "placeholder", disabled: "disabled" }, outputs: { selectedChange: "selectedChange" }, decls: 7, vars: 11, consts: [[1, "igo-entity-selector"], [3, "disabled", "value", "multiple", "placeholder", "selectionChange"], [3, "value", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [3, "value"]], template: function EntitySelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-select", 1);
        i0.ɵɵlistener("selectionChange", function EntitySelectorComponent_Template_mat_select_selectionChange_1_listener($event) { return ctx.onSelectionChange($event); });
        i0.ɵɵpipe(2, "async");
        i0.ɵɵtemplate(3, EntitySelectorComponent_mat_option_3_Template, 2, 2, "mat-option", 2);
        i0.ɵɵtemplate(4, EntitySelectorComponent_mat_option_4_Template, 3, 4, "mat-option", 2);
        i0.ɵɵtemplate(5, EntitySelectorComponent_ng_template_5_Template, 2, 2, "ng-template", 3);
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.disabled)("value", i0.ɵɵpipeBind1(2, 7, ctx.selected$))("multiple", ctx.multi)("placeholder", ctx.placeholder);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.emptyText !== undefined && ctx.multi === false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.multi === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 9, ctx.store.stateView.all$()));
    } }, directives: [i1.MatFormField, i2.MatSelect, i1$1.NgIf, i1$1.NgForOf, i3.MatOption], pipes: [i1$1.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntitySelectorComponent, [{
        type: Component,
        args: [{
                selector: 'igo-entity-selector',
                templateUrl: './entity-selector.component.html',
                styleUrls: ['./entity-selector.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { store: [{
            type: Input
        }], titleAccessor: [{
            type: Input
        }], emptyText: [{
            type: Input
        }], multi: [{
            type: Input
        }], multiAllText: [{
            type: Input
        }], multiNoneText: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }] }); })();

class StopPropagationDirective {
    onClick(event) {
        event.stopPropagation();
    }
}
StopPropagationDirective.ɵfac = function StopPropagationDirective_Factory(t) { return new (t || StopPropagationDirective)(); };
StopPropagationDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StopPropagationDirective, selectors: [["", "igoStopPropagation", ""]], hostBindings: function StopPropagationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function StopPropagationDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StopPropagationDirective, [{
        type: Directive,
        args: [{
                selector: '[igoStopPropagation]'
            }]
    }], null, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

/**
 * Directive that handles an entity table row click and selection.
 */
class EntityTableRowDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        /**
         * Whether a row supports selection
         */
        this.selection = false;
        /**
         * Whether clicking a row should select it (if selection is true)
         */
        this.selectOnClick = true;
        /**
         * Whether the selected row should be highlighted
         */
        this.highlightSelection = true;
        this._selected = false;
        /**
         * Scroll behavior on selection
         */
        this.scrollBehavior = EntityTableScrollBehavior.Auto;
        /**
         * Event emitted when a row is selected
         */
        this.select = new EventEmitter();
    }
    /**
     * Whether a row is selected
     */
    set selected(value) {
        if (this.selection === false) {
            return;
        }
        if (value === this._selected) {
            return;
        }
        this.toggleSelected(value);
        this.scroll();
    }
    get selected() {
        return this._selected;
    }
    /**
     * When a row is clicked, select it if it's supported
     * @ignore
     */
    onClick() {
        if (this.selection === false || this.selectOnClick === false) {
            return;
        }
        this.toggleSelected(true);
        this.select.emit(this);
    }
    /**
     * Select a row and add or remove the selected class from it
     * @param selected Whether the row should be selected
     */
    toggleSelected(selected) {
        this._selected = selected;
        if (selected === true) {
            this.addCls(EntityTableRowDirective.selectedCls);
            if (this.highlightSelection === true) {
                this.addCls(EntityTableRowDirective.highlightedCls);
            }
        }
        else {
            this.removeCls(EntityTableRowDirective.selectedCls);
            this.removeCls(EntityTableRowDirective.highlightedCls);
        }
    }
    /**
     * Scroll to the selected row
     */
    scroll() {
        if (this._selected === true) {
            scrollIntoView(this.el.nativeElement, {
                scrollMode: 'if-needed',
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            });
        }
    }
    /**
     * Add the selected CSS class
     */
    addCls(cls) {
        this.renderer.addClass(this.el.nativeElement, cls);
    }
    /**
     * Remove the selected CSS class
     */
    removeCls(cls) {
        this.renderer.removeClass(this.el.nativeElement, cls);
    }
}
/**
 * Class added to a selected row
 */
EntityTableRowDirective.selectedCls = 'igo-entity-table-row-selected';
/**
 * Class added to a highlighted row
 */
EntityTableRowDirective.highlightedCls = 'igo-entity-table-row-highlighted';
EntityTableRowDirective.ɵfac = function EntityTableRowDirective_Factory(t) { return new (t || EntityTableRowDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
EntityTableRowDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: EntityTableRowDirective, selectors: [["", "igoEntityTableRow", ""]], hostBindings: function EntityTableRowDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function EntityTableRowDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { selection: "selection", selectOnClick: "selectOnClick", highlightSelection: "highlightSelection", selected: "selected", scrollBehavior: "scrollBehavior" }, outputs: { select: "select" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntityTableRowDirective, [{
        type: Directive,
        args: [{
                selector: '[igoEntityTableRow]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { selection: [{
            type: Input
        }], selectOnClick: [{
            type: Input
        }], highlightSelection: [{
            type: Input
        }], selected: [{
            type: Input
        }], scrollBehavior: [{
            type: Input
        }], select: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();

class EntityTablePaginatorComponent {
    constructor(languageService, mediaService) {
        this.languageService = languageService;
        this.mediaService = mediaService;
        this.disabled = false;
        this.hidePageSize = false;
        this.pageIndex = 0;
        this.pageSize = 50;
        this.pageSizeOptions = [5, 10, 20, 50, 100, 200];
        this.showFirstLastButtons = true;
        this.paginationLabelTranslation$$ = [];
        this.entitySortChange$ = new BehaviorSubject(false);
        this.length = 0;
        /**
         * Paginator emitted.
         */
        this.paginatorChange = new EventEmitter();
        this.rangeLabel = (page, pageSize, length) => {
            const of = new BehaviorSubject('');
            this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.of').subscribe((label) => {
                of.next(label);
            }));
            if (length === 0 || pageSize === 0) {
                return `0 ${of.value} ${length}`;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return `${startIndex + 1} - ${endIndex} ${of.value} ${length}`;
        };
    }
    ngOnChanges() {
        this.unsubscribeAll();
        this.count$$ = this.store.stateView.count$.subscribe((count) => {
            this.length = count;
            this.emitPaginator();
        });
        this.entitySortChange$$ = this.entitySortChange$.subscribe(() => {
            if (this.paginator) {
                this.paginator.firstPage();
            }
        });
        this.initPaginatorOptions();
        this.translateLabels();
    }
    initPaginatorOptions() {
        var _a, _b, _c, _d, _e, _f;
        this.disabled = ((_a = this.paginatorOptions) === null || _a === void 0 ? void 0 : _a.disabled) || this.disabled;
        this.pageIndex = ((_b = this.paginatorOptions) === null || _b === void 0 ? void 0 : _b.pageIndex) || this.pageIndex;
        this.pageSize = ((_c = this.paginatorOptions) === null || _c === void 0 ? void 0 : _c.pageSize) || this.pageSize;
        this.pageSizeOptions = ((_d = this.paginatorOptions) === null || _d === void 0 ? void 0 : _d.pageSizeOptions) || this.pageSizeOptions;
        if (this.mediaService.isMobile()) {
            this.showFirstLastButtons = false;
            this.hidePageSize = true;
        }
        else {
            this.showFirstLastButtons = ((_e = this.paginatorOptions) === null || _e === void 0 ? void 0 : _e.showFirstLastButtons) || this.showFirstLastButtons;
            this.hidePageSize = ((_f = this.paginatorOptions) === null || _f === void 0 ? void 0 : _f.hidePageSize) || this.hidePageSize;
        }
    }
    translateLabels() {
        this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.firstPageLabel').subscribe((label) => {
            this.paginator._intl.firstPageLabel = label;
        }));
        this.paginator._intl.getRangeLabel = this.rangeLabel;
        this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.itemsPerPageLabel').subscribe((label) => {
            this.paginator._intl.itemsPerPageLabel = label;
        }));
        this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.lastPageLabel').subscribe((label) => {
            this.paginator._intl.lastPageLabel = label;
        }));
        this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.nextPageLabel').subscribe((label) => {
            this.paginator._intl.nextPageLabel = label;
        }));
        this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.previousPageLabel').subscribe((label) => {
            this.paginator._intl.previousPageLabel = label;
        }));
    }
    unsubscribeAll() {
        this.paginationLabelTranslation$$.map(sub => sub.unsubscribe());
        if (this.count$$) {
            this.count$$.unsubscribe();
        }
        if (this.entitySortChange$$) {
            this.entitySortChange$$.unsubscribe();
        }
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    emitPaginator() {
        this.paginatorChange.emit(this.paginator);
    }
}
EntityTablePaginatorComponent.ɵfac = function EntityTablePaginatorComponent_Factory(t) { return new (t || EntityTablePaginatorComponent)(i0.ɵɵdirectiveInject(i1$2.LanguageService), i0.ɵɵdirectiveInject(i1$2.MediaService)); };
EntityTablePaginatorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntityTablePaginatorComponent, selectors: [["igo-entity-table-paginator"]], viewQuery: function EntityTablePaginatorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
    } }, inputs: { entitySortChange$: "entitySortChange$", store: "store", paginatorOptions: "paginatorOptions" }, outputs: { page: "page", paginatorChange: "paginatorChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 7, consts: [[3, "disabled", "hidePageSize", "length", "pageIndex", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"]], template: function EntityTablePaginatorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-paginator", 0);
        i0.ɵɵlistener("page", function EntityTablePaginatorComponent_Template_mat_paginator_page_0_listener() { return ctx.emitPaginator(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disabled)("hidePageSize", ctx.hidePageSize)("length", ctx.length)("pageIndex", ctx.pageIndex)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions)("showFirstLastButtons", ctx.showFirstLastButtons);
    } }, directives: [i2$1.MatPaginator], styles: ["[_nghost-%COMP%]{margin-top:-10px;padding-right:15px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){[_nghost-%COMP%]{margin-top:0;padding-right:5px}}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntityTablePaginatorComponent, [{
        type: Component,
        args: [{
                selector: 'igo-entity-table-paginator',
                templateUrl: './entity-table-paginator.component.html',
                styleUrls: ['./entity-table-paginator.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1$2.LanguageService }, { type: i1$2.MediaService }]; }, { entitySortChange$: [{
            type: Input
        }], store: [{
            type: Input
        }], paginatorOptions: [{
            type: Input
        }], page: [{
            type: Output
        }], paginatorChange: [{
            type: Output
        }], paginator: [{
            type: ViewChild,
            args: [MatPaginator, { static: true }]
        }] }); })();

class SecureImagePipe {
    constructor(http) {
        this.http = http;
    }
    transform(url) {
        const headers = new HttpHeaders({
            'Content-Type': 'text/plain',
            activityInterceptor: 'false'
        });
        return this.http
            .get(url, {
            headers,
            responseType: 'blob'
        })
            .pipe(switchMap((blob) => {
            return new Observable((observer) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    observer.next(reader.result);
                    observer.complete();
                };
            });
        }));
    }
}
SecureImagePipe.ɵfac = function SecureImagePipe_Factory(t) { return new (t || SecureImagePipe)(i0.ɵɵdirectiveInject(i1$3.HttpClient, 16)); };
SecureImagePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "secureImage", type: SecureImagePipe, pure: true });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], SecureImagePipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SecureImagePipe, [{
        type: Pipe,
        args: [{
                name: 'secureImage'
            }]
    }], function () { return [{ type: i1$3.HttpClient }]; }, { transform: [] }); })();

class SanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    }
}
SanitizeHtmlPipe.ɵfac = function SanitizeHtmlPipe_Factory(t) { return new (t || SanitizeHtmlPipe)(i0.ɵɵdirectiveInject(i1$4.DomSanitizer, 16)); };
SanitizeHtmlPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "sanitizeHtml", type: SanitizeHtmlPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SanitizeHtmlPipe, [{
        type: Pipe,
        args: [{ name: 'sanitizeHtml' }]
    }], function () { return [{ type: i1$4.DomSanitizer }]; }, null); })();

function EntityTableComponent_th_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 11);
    i0.ɵɵlistener("change", function EntityTableComponent_th_3_ng_container_1_ng_container_1_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.onToggleRows($event.checked); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selectionState_r8 = ctx.ngIf;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", selectionState_r8 === ctx_r7.entityTableSelectionState.All)("indeterminate", selectionState_r8 === ctx_r7.entityTableSelectionState.Some);
} }
function EntityTableComponent_th_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_th_3_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 10);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r6.selectionState$));
} }
function EntityTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtemplate(1, EntityTableComponent_th_3_ng_container_1_Template, 3, 3, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.selectMany);
} }
function EntityTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelementStart(1, "mat-checkbox", 13);
    i0.ɵɵlistener("mousedown", function EntityTableComponent_td_4_Template_mat_checkbox_mousedown_1_listener($event) { return $event.shiftKey ? $event.preventDefault() : null; })("click", function EntityTableComponent_td_4_Template_mat_checkbox_click_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r14); const record_r11 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return $event.shiftKey ? ctx_r13.onShiftToggleRow(!ctx_r13.rowIsSelected(record_r11), record_r11, $event) : $event.stopPropagation(); })("change", function EntityTableComponent_td_4_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r14); const record_r11 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onToggleRow($event.checked, record_r11); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r1.rowIsSelected(record_r11));
} }
function EntityTableComponent_ng_container_5_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r16 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("matTooltip", column_r16.tooltip ? column_r16.tooltip : undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r16.title, " ");
} }
function EntityTableComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_1_th_1_Template, 2, 2, "th", 15);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r16 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("matTooltip", column_r16.tooltip ? column_r16.tooltip : undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r16.title, " ");
} }
function EntityTableComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_2_th_1_Template, 2, 2, "th", 17);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r31 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r32 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r32.getCellClass(record_r31, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r32.getValue(record_r31, column_r16), " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "secureImage");
} if (rf & 2) {
    const record_r31 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r37 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(1, 1, i0.ɵɵpipeBind1(2, 3, ctx_r37.getValue(record_r31, column_r16))), i0.ɵɵsanitizeUrl);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.common.entity-table.targetHtmlUrl"), " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵelementStart(1, "a", 23);
    i0.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_Template_a_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_img_2_Template, 3, 5, "img", 24);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_ng_template_3_Template, 3, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r38 = i0.ɵɵreference(4);
    const record_r31 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r34 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r34.getCellClass(record_r31, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", ctx_r34.getValue(record_r31, column_r16), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.isImg(ctx_r34.getValue(record_r31, column_r16)))("ngIfElse", _r38);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_td_1_Template, 2, 2, "td", 20);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_Template, 5, 4, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const record_r31 = ctx.$implicit;
    const _r33 = i0.ɵɵreference(3);
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r30 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r30.isUrl(ctx_r30.getValue(record_r31, column_r16)))("ngIfElse", _r33);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 29);
} if (rf & 2) {
    const record_r47 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r48 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r48.getCellClass(record_r47, column_r16))("innerHTML", ctx_r48.getValue(record_r47, column_r16), i0.ɵɵsanitizeHtml);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "secureImage");
} if (rf & 2) {
    const record_r47 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r53 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(1, 1, i0.ɵɵpipeBind1(2, 3, ctx_r53.getValue(record_r47, column_r16))), i0.ɵɵsanitizeUrl);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.geo.targetHtmlUrl"), " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵelementStart(1, "a", 23);
    i0.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_Template_a_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_img_2_Template, 3, 5, "img", 24);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_ng_template_3_Template, 3, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r54 = i0.ɵɵreference(4);
    const record_r47 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r50 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r50.getCellClass(record_r47, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", ctx_r50.getValue(record_r47, column_r16), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r50.isImg(ctx_r50.getValue(record_r47, column_r16)))("ngIfElse", _r54);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_td_1_Template, 1, 2, "td", 27);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_Template, 5, 4, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const record_r47 = ctx.$implicit;
    const _r49 = i0.ɵɵreference(3);
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r46 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r46.isUrl(ctx_r46.getValue(record_r47, column_r16)))("ngIfElse", _r49);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_Template, 4, 2, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelement(1, "mat-datepicker-toggle", 44);
    i0.ɵɵelementStart(2, "input", 45);
    i0.ɵɵlistener("dateChange", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_div_1_Template_input_dateChange_2_listener($event) { i0.ɵɵrestoreView(_r79); const record_r63 = i0.ɵɵnextContext(2).$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r77 = i0.ɵɵnextContext(); return ctx_r77.onDateChange(column_r16.name, record_r63, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-datepicker", null, 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r76 = i0.ɵɵreference(4);
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r67 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r76);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("value", ctx_r67.getValue(record_r63, column_r16));
    i0.ɵɵproperty("matDatepicker", _r76)("formControlName", column_r16.name);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 47);
    i0.ɵɵlistener("focus", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r85); const column_r16 = i0.ɵɵnextContext(5).$implicit; return column_r16.onFocus($event); })("keypress", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template_input_keypress_0_listener($event) { i0.ɵɵrestoreView(_r85); const column_r16 = i0.ɵɵnextContext(5).$implicit; return column_r16.onChange($event); })("blur", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r85); const column_r16 = i0.ɵɵnextContext(5).$implicit; return column_r16.onBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r16 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵproperty("formControlName", column_r16.name);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 48);
    i0.ɵɵlistener("input", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_3_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r93); const record_r63 = i0.ɵɵnextContext(2).$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r91 = i0.ɵɵnextContext(); return ctx_r91.onValueChange(column_r16.name, record_r63, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r69 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("step", column_r16.step);
    i0.ɵɵpropertyInterpolate("value", ctx_r69.getValue(record_r63, column_r16));
    i0.ɵɵpropertyInterpolate("readonly", ctx_r69.getValidationAttributeValue(column_r16, "readonly"));
    i0.ɵɵpropertyInterpolate("required", ctx_r69.getValidationAttributeValue(column_r16, "mandatory"));
    i0.ɵɵpropertyInterpolate("min", ctx_r69.getValidationAttributeValue(column_r16, "minValue"));
    i0.ɵɵpropertyInterpolate("max", ctx_r69.getValidationAttributeValue(column_r16, "maxValue"));
    i0.ɵɵproperty("formControlName", column_r16.name);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 49);
    i0.ɵɵlistener("input", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_4_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r99); const record_r63 = i0.ɵɵnextContext(2).$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r97 = i0.ɵɵnextContext(); return ctx_r97.onValueChange(column_r16.name, record_r63, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r70 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("value", ctx_r70.getValue(record_r63, column_r16));
    i0.ɵɵpropertyInterpolate("readonly", ctx_r70.getValidationAttributeValue(column_r16, "readonly"));
    i0.ɵɵpropertyInterpolate("required", ctx_r70.getValidationAttributeValue(column_r16, "mandatory"));
    i0.ɵɵproperty("formControlName", column_r16.name);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 50);
    i0.ɵɵlistener("change", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_checkbox_5_Template_mat_checkbox_change_0_listener($event) { i0.ɵɵrestoreView(_r105); const record_r63 = i0.ɵɵnextContext(2).$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r103 = i0.ɵɵnextContext(); return ctx_r103.onBooleanValueChange(column_r16.name, record_r63, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r71 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formControlName", column_r16.name)("checked", ctx_r71.getValue(record_r63, column_r16));
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 53);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r110 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r110.id)("disabled", option_r110.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r110.value, " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r113 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 51);
    i0.ɵɵlistener("selectionChange", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_Template_mat_select_selectionChange_0_listener($event) { i0.ɵɵrestoreView(_r113); const record_r63 = i0.ɵɵnextContext(2).$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r111 = i0.ɵɵnextContext(); return ctx_r111.onSelectValueChange(column_r16.name, record_r63, $event); });
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_mat_option_1_Template, 2, 3, "mat-option", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r72 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("required", ctx_r72.getValidationAttributeValue(column_r16, "mandatory"));
    i0.ɵɵproperty("formControlName", column_r16.name)("multiple", column_r16.multiple)("value", ctx_r72.getValue(record_r63, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", column_r16.domainValues);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 54);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r74 = i0.ɵɵreference(9);
    const record_r63 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r73 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("required", ctx_r73.getValidationAttributeValue(column_r16, "mandatory"));
    i0.ɵɵpropertyInterpolate("value", ctx_r73.getValue(record_r63, column_r16));
    i0.ɵɵproperty("formControlName", column_r16.name)("matAutocomplete", _r74);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 55);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r119 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r119.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r119.value, " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r122 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 32);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_div_1_Template, 5, 4, "div", 33);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template, 1, 1, "input", 34);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_3_Template, 1, 7, "input", 35);
    i0.ɵɵtemplate(4, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_4_Template, 1, 4, "input", 36);
    i0.ɵɵtemplate(5, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_checkbox_5_Template, 1, 2, "mat-checkbox", 37);
    i0.ɵɵtemplate(6, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_Template, 2, 5, "mat-select", 38);
    i0.ɵɵtemplate(7, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_7_Template, 1, 4, "input", 39);
    i0.ɵɵelementStart(8, "mat-autocomplete", 40, 41);
    i0.ɵɵlistener("optionSelected", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_Template_mat_autocomplete_optionSelected_8_listener($event) { i0.ɵɵrestoreView(_r122); const record_r63 = i0.ɵɵnextContext().$implicit; const column_r16 = i0.ɵɵnextContext(3).$implicit; const ctx_r120 = i0.ɵɵnextContext(); return ctx_r120.onAutocompleteValueChange(column_r16.name, record_r63, $event); });
    i0.ɵɵtemplate(10, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_option_10_Template, 2, 2, "mat-option", 42);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r64 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r64.formGroup)("ngClass", ctx_r64.getCellClass(record_r63, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "time");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r16.type || column_r16.type === "string");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "boolean");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "list");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.type === "autocomplete");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 10, ctx_r64.filteredOptions));
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_td_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 29);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r126 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r126.getCellClass(record_r63, column_r16))("innerHTML", i0.ɵɵpipeBind1(1, 2, ctx_r126.getValue(record_r63, column_r16)), i0.ɵɵsanitizeHtml);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "secureImage");
} if (rf & 2) {
    const record_r63 = i0.ɵɵnextContext(3).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r131 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(1, 1, i0.ɵɵpipeBind1(2, 3, ctx_r131.getValue(record_r63, column_r16))), i0.ɵɵsanitizeUrl);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.geo.targetHtmlUrl"), " ");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵelementStart(1, "a", 23);
    i0.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_Template_a_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_img_2_Template, 3, 5, "img", 24);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_ng_template_3_Template, 3, 3, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r132 = i0.ɵɵreference(4);
    const record_r63 = i0.ɵɵnextContext(2).$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r128 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r128.getCellClass(record_r63, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", ctx_r128.getValue(record_r63, column_r16), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r128.isImg(ctx_r128.getValue(record_r63, column_r16)))("ngIfElse", _r132);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_td_0_Template, 2, 4, "td", 27);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_Template, 5, 4, "ng-template", null, 56, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r127 = i0.ɵɵreference(2);
    const record_r63 = i0.ɵɵnextContext().$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r66 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r66.isUrl(ctx_r66.getValue(record_r63, column_r16)))("ngIfElse", _r127);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_Template, 12, 12, "td", 30);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_Template, 3, 2, "ng-template", null, 31, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const record_r63 = ctx.$implicit;
    const _r65 = i0.ɵɵreference(3);
    const ctx_r62 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r62.isEdition(record_r63))("ngIfElse", _r65);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_Template, 4, 2, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵelementStart(1, "mat-icon", 58);
    i0.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_td_1_Template_mat_icon_click_1_listener($event) { i0.ɵɵrestoreView(_r145); const column_r16 = i0.ɵɵnextContext(3).$implicit; return column_r16.onClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r142 = ctx.$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r141 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r141.getCellClass(record_r142, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r141.getValue(record_r142, column_r16) || column_r16.icon);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_td_1_Template, 2, 2, "td", 57);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r156 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 62);
    i0.ɵɵlistener("mousedown", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_1_Template_button_mousedown_0_listener() { i0.ɵɵrestoreView(_r156); const button_r150 = i0.ɵɵnextContext(2).$implicit; const record_r148 = i0.ɵɵnextContext().$implicit; const ctx_r154 = i0.ɵɵnextContext(4); return ctx_r154.onButtonClick(button_r150.click, record_r148); });
    i0.ɵɵelement(1, "mat-icon", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r150 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("color", button_r150.color)("disabled", button_r150.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", button_r150.icon);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r161 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 64);
    i0.ɵɵlistener("mousedown", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_2_Template_button_mousedown_0_listener() { i0.ɵɵrestoreView(_r161); const button_r150 = i0.ɵɵnextContext(2).$implicit; const record_r148 = i0.ɵɵnextContext().$implicit; const ctx_r159 = i0.ɵɵnextContext(4); return ctx_r159.onButtonClick(button_r150.click, record_r148); });
    i0.ɵɵelement(1, "mat-icon", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r150 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("color", button_r150.color)("disabled", button_r150.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", button_r150.icon);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_1_Template, 2, 3, "button", 60);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_2_Template, 2, 3, "button", 61);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const button_r150 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r150.style === "mat-icon-button");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r150.style !== "mat-icon-button");
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_Template, 3, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r150 = ctx.$implicit;
    const record_r148 = i0.ɵɵnextContext().$implicit;
    const ctx_r149 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r149.isEdition(record_r148) === button_r150.editMode);
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 22);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_Template, 2, 1, "span", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const record_r148 = ctx.$implicit;
    const column_r16 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r147 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r147.getCellClass(record_r148, column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r147.getValue(record_r148, column_r16));
} }
function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} }
function EntityTableComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(4, EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(5, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_Template, 2, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const columnRenderer_r24 = ctx.ngIf;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.Default);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.HTML);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.UnsanitizedHTML);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.Icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.ButtonGroup);
} }
function EntityTableComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 14);
    i0.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_1_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_2_Template, 2, 0, "ng-container", 10);
    i0.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_Template, 6, 5, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r16 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matColumnDef", column_r16.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.columnIsSortable(column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.columnIsSortable(column_r16));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.getColumnRenderer(column_r16));
} }
function EntityTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 65);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r3.getHeaderClass());
} }
function EntityTableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r169 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 66);
    i0.ɵɵlistener("select", function EntityTableComponent_tr_7_Template_tr_select_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r169); const record_r167 = restoredCtx.$implicit; const ctx_r168 = i0.ɵɵnextContext(); return ctx_r168.onRowSelect(record_r167); })("click", function EntityTableComponent_tr_7_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r169); const record_r167 = restoredCtx.$implicit; const ctx_r170 = i0.ɵɵnextContext(); return ctx_r170.onRowClick(record_r167); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r167 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("scrollBehavior", ctx_r4.scrollBehavior)("ngClass", ctx_r4.getRowClass(record_r167))("selection", ctx_r4.selection)("selected", ctx_r4.rowIsSelected(record_r167));
} }
function EntityTableComponent_igo_entity_table_paginator_8_Template(rf, ctx) { if (rf & 1) {
    const _r172 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-entity-table-paginator", 67);
    i0.ɵɵlistener("paginatorChange", function EntityTableComponent_igo_entity_table_paginator_8_Template_igo_entity_table_paginator_paginatorChange_0_listener($event) { i0.ɵɵrestoreView(_r172); const ctx_r171 = i0.ɵɵnextContext(); return ctx_r171.paginatorChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("store", ctx_r5.store)("paginatorOptions", ctx_r5.paginatorOptions)("entitySortChange$", ctx_r5.entitySortChange$);
} }
const moment = moment_;
class EntityTableComponent {
    constructor(cdRef, formBuilder, _focusMonitor, _elementRef, ngControl, _parentForm, _controlName, _defaultErrorStateMatcher, dateAdapter) {
        this.cdRef = cdRef;
        this.formBuilder = formBuilder;
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this.ngControl = ngControl;
        this._parentForm = _parentForm;
        this._controlName = _controlName;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this.dateAdapter = dateAdapter;
        this.entitySortChange$ = new BehaviorSubject(false);
        this.formGroup = new FormGroup({});
        /**
         * Reference to the column renderer types
         * @internal
         */
        this.entityTableColumnRenderer = EntityTableColumnRenderer;
        /**
         * Reference to the selection's state
         * @internal
         */
        this.entityTableSelectionState = EntityTableSelectionState;
        /**
         * Observable of the selection,s state
         * @internal
         */
        this.selectionState$ = new BehaviorSubject(undefined);
        /**
         * Scroll behavior on selection
         */
        this.scrollBehavior = EntityTableScrollBehavior.Auto;
        /**
         * Whether nulls should be first when sorting
         */
        this.sortNullsFirst = false;
        /**
         * Show the table paginator or not. False by default.
         */
        this.withPaginator = false;
        /**
         * Event emitted when an entity (row) is clicked
         */
        this.entityClick = new EventEmitter();
        /**
         * Event emitted when an entity (row) is selected
         */
        this.entitySelectChange = new EventEmitter();
        /**
         * Event emitted when the table sort is changed.
         */
        this.entitySortChange = new EventEmitter(undefined);
        /**
         * Data source consumable by the underlying material table
         * @internal
         */
        this.dataSource = new MatTableDataSource();
        this.dateAdapter.setLocale('fr-CA');
    }
    /**
     * Table paginator
     */
    set paginator(value) {
        this._paginator = value;
        this.dataSource.paginator = value;
    }
    get paginator() {
        return this._paginator;
    }
    /**
     * Table headers
     * @internal
     */
    get headers() {
        let columns = this.template.columns
            .filter((column) => column.visible !== false)
            .map((column) => column.name);
        if (this.selectionCheckbox === true) {
            columns = ['selectionCheckbox'].concat(columns);
        }
        return columns;
    }
    /**
     * Whether selection is supported
     * @internal
     */
    get selection() { return this.template.selection || false; }
    /**
     * Whether a selection checkbox should be displayed
     * @internal
     */
    get selectionCheckbox() { return this.template.selectionCheckbox || false; }
    /**
     * Whether selection many entities should eb supported
     * @internal
     */
    get selectMany() { return this.template.selectMany || false; }
    /**
     * Whether selection many entities should eb supported
     * @internal
     */
    get fixedHeader() { return this.template.fixedHeader === undefined ? true : this.template.fixedHeader; }
    /**
     * Track the selection state to properly display the selection checkboxes
     * @internal
     */
    ngOnInit() {
        this.handleDatasource();
        this.dataSource.paginator = this.paginator;
    }
    /**
     * @internal
     */
    ngOnChanges(changes) {
        const store = changes.store;
        if (store && store.currentValue !== store.previousValue) {
            this.handleDatasource();
        }
    }
    /**
     * Process text or number value change (edition)
     */
    onValueChange(column, record, event) {
        const key = this.getColumnKeyWithoutPropertiesTag(column);
        record.entity.properties[key] = event.target.value;
    }
    /**
     * Process boolean value change (edition)
     */
    onBooleanValueChange(column, record, event) {
        const key = this.getColumnKeyWithoutPropertiesTag(column);
        record.entity.properties[key] = event.checked;
    }
    /**
     * Process select value change (edition)
     */
    onSelectValueChange(column, record, event) {
        const key = this.getColumnKeyWithoutPropertiesTag(column);
        record.entity.properties[key] = event.value;
    }
    /**
     * Process autocomplete value change (edition)
     */
    onAutocompleteValueChange(column, record, event) {
        this.formGroup.controls[column].setValue(event.option.viewValue);
        const key = this.getColumnKeyWithoutPropertiesTag(column);
        record.entity.properties[key] = event.option.value;
    }
    /**
     * Process date value change (edition)
     */
    onDateChange(column, record, event) {
        const format = "YYYY-MM-DD";
        const value = moment(event.value).format(format);
        const key = this.getColumnKeyWithoutPropertiesTag(column);
        record.entity.properties[key] = value;
    }
    /**
     * Enable edition mode for one row
     * More than one row can be edited at the same time
     */
    enableEdit(record) {
        const item = record.entity.properties || record.entity;
        this.template.columns.forEach(column => {
            var _a;
            column.title = ((_a = column.validation) === null || _a === void 0 ? void 0 : _a.mandatory) && !column.title.includes('*') ? column.title + ' *' : column.title;
            const key = this.getColumnKeyWithoutPropertiesTag(column.name);
            if (column.type === 'boolean') {
                if (!item[key] || item[key] === null) {
                    item[key] = false;
                }
                else if (typeof item[key] === 'string') {
                    item[key] = JSON.parse(item[key].toLowerCase());
                }
                this.formGroup.setControl(column.name, this.formBuilder.control(item[key]));
            }
            else if (column.type === 'list') {
                if (column.multiple) {
                    this.formGroup.setControl(column.name, this.formBuilder.control([item[key]]));
                }
                else {
                    this.formGroup.setControl(column.name, this.formBuilder.control(item[key]));
                    typeof item[key] === 'string' ?
                        this.formGroup.controls[column.name].setValue(parseInt(item[key])) :
                        this.formGroup.controls[column.name].setValue(item[key]);
                }
            }
            else if (column.type === 'autocomplete') {
                this.formGroup.setControl(column.name, this.formBuilder.control(item[key]));
                this.filteredOptions = this.formGroup.controls[column.name].valueChanges.pipe(map(value => {
                    if (value.length) {
                        return column.domainValues.filter((option) => {
                            const filterNormalized = value ? value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
                            const featureNameNormalized = option.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                            return featureNameNormalized.includes(filterNormalized);
                        });
                    }
                }));
                let formControlValue = item[key];
                column.domainValues.forEach(option => {
                    if (typeof formControlValue === 'string' && /^\d+$/.test(formControlValue)) {
                        formControlValue = parseInt(formControlValue);
                    }
                    if (option.value === formControlValue || option.id === formControlValue) {
                        formControlValue = option.value;
                    }
                });
                this.formGroup.controls[column.name].setValue(formControlValue);
            }
            else if (column.type === 'date') {
                if (column.visible) {
                    if (item[key]) {
                        let date = moment(item[key]);
                        item[key] = date.utc().format('YYYY-MM-DD');
                        this.formGroup.setControl(column.name, this.formBuilder.control(item[key]));
                    }
                    else {
                        const newKey = this.getColumnKeyWithoutPropertiesTag(column.name);
                        record.entity.properties[newKey] = null;
                        this.formGroup.setControl(column.name, this.formBuilder.control(null));
                    }
                }
            }
            else {
                this.formGroup.setControl(column.name, this.formBuilder.control(item[key]));
            }
            if (this.formGroup.controls[column.name] && this.getValidationAttributeValue(column, 'readonly')) {
                this.formGroup.controls[column.name].disable();
            }
        });
    }
    handleDatasource() {
        this.unsubscribeStore();
        this.selection$$ = this.store.stateView
            .manyBy$((record) => record.state.selected === true)
            .subscribe((records) => {
            const firstSelected = records[0];
            const firstSelectedStateviewPosition = this.store.stateView.all().indexOf(firstSelected);
            const pageMax = this.paginator ? this.paginator.pageSize * (this.paginator.pageIndex + 1) : 0;
            const pageMin = this.paginator ? pageMax - this.paginator.pageSize : 0;
            if (this.paginator &&
                (firstSelectedStateviewPosition < pageMin ||
                    firstSelectedStateviewPosition >= pageMax)) {
                const pageToReach = Math.floor(firstSelectedStateviewPosition / this.paginator.pageSize);
                this.dataSource.paginator.pageIndex = pageToReach;
            }
            this.selectionState$.next(this.computeSelectionState(records));
        });
        this.dataSource$$ = this.store.stateView.all$().subscribe((all) => {
            if (all[0]) {
                this.enableEdit(all[0]);
            }
            this.dataSource.data = all;
        });
    }
    /**
     * Unbind the store watcher
     * @internal
     */
    ngOnDestroy() {
        this.unsubscribeStore();
    }
    unsubscribeStore() {
        if (this.selection$$) {
            this.selection$$.unsubscribe();
        }
        if (this.dataSource$$) {
            this.dataSource$$.unsubscribe();
        }
    }
    /**
     * Trackby function
     * @param record Record
     * @param index Record index
     * @internal
     */
    getTrackByFunction() {
        return (index, record) => {
            return record.ref;
        };
    }
    /**
     * Trigger a refresh of thre table. This can be useful when
     * the data source doesn't emit a new value but for some reason
     * the records need an update.
     * @internal
     */
    refresh() {
        this.cdRef.detectChanges();
    }
    paginatorChange(event) {
        this.paginator = event;
    }
    /**
     * On sort, sort the store
     * @param event Sort event
     * @internal
     */
    onSort(event) {
        const direction = event.direction;
        const column = this.template.columns
            .find((c) => c.name === event.active);
        if (direction === 'asc' || direction === 'desc') {
            this.store.stateView.sort({
                valueAccessor: (record) => this.getValue(record, column),
                direction,
                nullsFirst: this.sortNullsFirst
            });
            this.entitySortChange.emit({ column, direction });
            this.entitySortChange$.next(true);
        }
        else {
            this.store.stateView.sort(undefined);
        }
    }
    /**
     * When an entity is clicked, emit an event
     * @param record Record
     * @internal
     */
    onRowClick(record) {
        this.lastRecordCheckedKey = this.store.stateView.getKey(record);
        this.entityClick.emit(record.entity);
    }
    /**
     * When an entity is selected, select it in the store and emit an event. Even if
     * "many" is set to true, this method always select a single, exclusive row. Selecting
     * multiple rows should be achieved by using the checkboxes.
     * @param record Record
     * @internal
     */
    onRowSelect(record) {
        if (this.selection === false) {
            return;
        }
        const entity = record.entity;
        this.store.state.update(entity, { selected: true }, true);
        this.entitySelectChange.emit({ added: [entity] });
    }
    /**
     * Select or unselect all rows at once. On select, emit an event.
     * @param toggle Select or unselect
     * @internal
     */
    onToggleRows(toggle) {
        if (this.selection === false) {
            return;
        }
        this.store.state.updateAll({ selected: toggle });
        if (toggle === true) {
            const entities = this.store.stateView
                .all()
                .map((record) => record.entity);
            this.entitySelectChange.emit({ added: [entities] });
        }
    }
    /**
     * When an entity is toggled, select or unselect it in the store. On select,
     * emit an event.
     * @param toggle Select or unselect
     * @param record Record
     * @internal
     */
    onToggleRow(toggle, record) {
        if (this.selection === false) {
            return;
        }
        const entity = record.entity;
        const exclusive = toggle === true && !this.selectMany;
        this.store.state.update(entity, { selected: toggle }, exclusive);
        if (toggle === true) {
            this.entitySelectChange.emit({ added: [entity] });
        }
        this.lastRecordCheckedKey = this.store.stateView.getKey(record);
    }
    /**
     * When an entity is toggled, select or unselect it in the store. On select,
     * emit an event.
     * @param toggle Select or unselect
     * @param record Record
     * @internal
     */
    onShiftToggleRow(toggle, record, event) {
        if (this.selection === false) {
            return;
        }
        if (this.selectMany === false || this.lastRecordCheckedKey === undefined) {
            this.onToggleRow(toggle, record);
            return;
        }
        // This is a workaround mat checkbox wrong behavior
        // when the shift key is held.
        // See https://github.com/angular/components/issues/6232
        const range = window.document.createRange();
        range.selectNode(event.target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        event.stopImmediatePropagation();
        const records = this.store.stateView.all();
        const recordIndex = records.indexOf(record);
        const lastRecordChecked = this.store.stateView.get(this.lastRecordCheckedKey);
        const lastRecordIndex = records.indexOf(lastRecordChecked);
        const indexes = [recordIndex, lastRecordIndex];
        const selectRecords = records.slice(Math.min(...indexes), Math.max(...indexes) + 1);
        const entities = selectRecords.map((_record) => _record.entity);
        this.store.state.updateMany(entities, { selected: toggle });
        if (toggle === true) {
            this.entitySelectChange.emit({ added: entities });
        }
        this.lastRecordCheckedKey = this.store.stateView.getKey(record);
    }
    /**
     * Compute the selection state
     * @returns Whether all, some or no rows are selected
     * @internal
     */
    computeSelectionState(selectedRecords) {
        const states = EntityTableSelectionState;
        const selectionCount = selectedRecords.length;
        return selectionCount === 0 ?
            states.None :
            (selectionCount === this.store.stateView.count ? states.All : states.Some);
    }
    /**
     * Whether a column is sortable
     * @param column Column
     * @returns True if a column is sortable
     * @internal
     */
    columnIsSortable(column) {
        let sortable = column.sort;
        if (sortable === undefined) {
            sortable = this.template.sort === undefined ? false : this.template.sort;
        }
        return sortable;
    }
    /**
     * Whether a row is should be selected based on the underlying entity state
     * @param record Record
     * @returns True if a row should be selected
     * @internal
     */
    rowIsSelected(record) {
        const state = record.state;
        return state.selected ? state.selected : false;
    }
    isImg(value) {
        if (this.isUrl(value)) {
            return (['jpg', 'png', 'gif'].indexOf(value.split('.').pop().toLowerCase()) !== -1);
        }
        else {
            return false;
        }
    }
    isUrl(value) {
        if (typeof value === 'string') {
            return (value.slice(0, 8) === 'https://' || value.slice(0, 7) === 'http://');
        }
        else {
            return false;
        }
    }
    /**
     * Method to access an entity's values
     * @param record Record
     * @param column Column
     * @returns Any value
     * @internal
     */
    getValue(record, column) {
        const entity = record.entity;
        let value;
        if (column.valueAccessor !== undefined) {
            return column.valueAccessor(entity, record);
        }
        if (this.template.valueAccessor !== undefined) {
            return this.template.valueAccessor(entity, column.name, record);
        }
        value = this.store.getProperty(entity, column.name);
        if (column.type === 'boolean') {
            if (value === undefined || value === null || value === '') {
                value = false;
            }
            else if (typeof value !== 'boolean' && value !== undefined) {
                if (typeof value === 'number') {
                    value = Boolean(value);
                }
                else {
                    value = JSON.parse(value.toLowerCase());
                }
            }
            if (!this.isEdition(record)) {
                value = value ? '&#10003;' : ''; // check mark
            }
        }
        else if (column.type === 'list' && value && column.domainValues) {
            if (column.multiple) {
                let list_id;
                typeof value === 'string' ? list_id = value.match(/[\w.-]+/g).map(Number) : list_id = value;
                let list_option = [];
                column.domainValues.forEach(option => {
                    if (list_id.includes(option.id)) {
                        if (record.edition) {
                            list_option.push(option.id);
                        }
                        else {
                            list_option.push(option.value);
                        }
                    }
                });
                this.isEdition(record) ? value = list_id : value = list_option;
            }
            else {
                column.domainValues.forEach(option => {
                    if (typeof value === 'string' && /^\d+$/.test(value)) {
                        value = parseInt(value);
                    }
                    if (option.value === value || option.id === value) {
                        this.isEdition(record) ? value = option.id : value = option.value;
                    }
                });
            }
        }
        else if (column.type === 'autocomplete' && value && column.domainValues) {
            column.domainValues.forEach(option => {
                if (typeof value === 'string' && /^\d+$/.test(value)) {
                    value = parseInt(value);
                }
                if (option.value === value || option.id === value) {
                    value = option.value;
                }
            });
        }
        else if (column.type === 'date') {
            if (this.isEdition(record)) {
                if (value) {
                    let date = moment(value);
                    value = date.format();
                    this.formGroup.controls[column.name].setValue(value);
                }
            }
            else if (!this.isEdition(record) && value === null) {
                value = "";
            }
        }
        if (value === undefined) {
            value = '';
        }
        return value;
    }
    /**
     * Method to access an entity's validation values
     * @param column Column
     * @param validationType string
     * @returns Any value (false if no validation or not the one concerned)
     * @internal
     */
    getValidationAttributeValue(column, validationType) {
        if (column.validation !== undefined && column.validation[validationType] !== undefined) {
            return column.validation[validationType];
        }
        else {
            return false;
        }
    }
    isEdition(record) {
        return record.entity.edition ? true : false;
    }
    /**
     * Return the type of renderer of a column
     * @param column Column
     * @returns Renderer type
     * @internal
     */
    getColumnRenderer(column) {
        if (column.renderer !== undefined) {
            return column.renderer;
        }
        return EntityTableColumnRenderer.Default;
    }
    /**
     * Return the table ngClass
     * @returns ngClass
     * @internal
     */
    getTableClass() {
        return {
            'igo-entity-table-with-selection': this.selection
        };
    }
    /**
     * Return a header ngClass
     * @returns ngClass
     * @internal
     */
    getHeaderClass() {
        const func = this.template.headerClassFunc;
        if (func instanceof Function) {
            return func();
        }
        return {};
    }
    /**
     * Return a row ngClass
     * @param record Record
     * @returns ngClass
     * @internal
     */
    getRowClass(record) {
        const entity = record.entity;
        const func = this.template.rowClassFunc;
        if (func instanceof Function) {
            return func(entity, record);
        }
        return {};
    }
    /**
     * Return a row ngClass
     * @param record Record
     * @param column Column
     * @returns ngClass
     * @internal
     */
    getCellClass(record, column) {
        const entity = record.entity;
        const cls = {};
        const tableFunc = this.template.cellClassFunc;
        if (tableFunc instanceof Function) {
            Object.assign(cls, tableFunc(entity, column, record));
        }
        const columnFunc = column.cellClassFunc;
        if (columnFunc instanceof Function) {
            Object.assign(cls, columnFunc(entity, record));
        }
        return cls;
    }
    /**
     * When a button is clicked
     * @param func Function
     * @param record Record
     * @internal
     */
    onButtonClick(clickFunc, record) {
        this.enableEdit(record);
        if (typeof clickFunc === 'function') {
            clickFunc(record.entity, record);
        }
    }
    /**
     * Retrieve column name without his "properties" tag (useful for edition workspace properties)
     */
    getColumnKeyWithoutPropertiesTag(column) {
        if (column.includes('properties.')) {
            return column.split('.')[1];
        }
        return column;
    }
}
EntityTableComponent.ɵfac = function EntityTableComponent_Factory(t) { return new (t || EntityTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1$5.FormBuilder), i0.ɵɵdirectiveInject(i2$2.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1$5.NgControl, 10), i0.ɵɵdirectiveInject(i1$5.NgForm, 8), i0.ɵɵdirectiveInject(i1$5.FormControlName, 8), i0.ɵɵdirectiveInject(i3.ErrorStateMatcher), i0.ɵɵdirectiveInject(i3.DateAdapter)); };
EntityTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntityTableComponent, selectors: [["igo-entity-table"]], inputs: { store: "store", paginator: "paginator", template: "template", scrollBehavior: "scrollBehavior", sortNullsFirst: "sortNullsFirst", withPaginator: "withPaginator", paginatorOptions: "paginatorOptions" }, outputs: { entityClick: "entityClick", entitySelectChange: "entitySelectChange", entitySortChange: "entitySortChange" }, features: [i0.ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: EntityTableComponent }]), i0.ɵɵNgOnChangesFeature], decls: 9, vars: 8, consts: [[1, "table-container"], ["mat-table", "", "matSort", "", 3, "ngClass", "dataSource", "trackBy", "matSortChange"], ["matColumnDef", "selectionCheckbox", 1, "mat-cell-checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "igoEntityTableRow", "", 3, "scrollBehavior", "ngClass", "selection", "selected", "select", "click", 4, "matRowDef", "matRowDefColumns"], [3, "store", "paginatorOptions", "entitySortChange$", "paginatorChange", 4, "ngIf"], ["mat-header-cell", ""], [4, "ngIf"], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "mousedown", "click", "change"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "matTooltip", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "matTooltip"], ["mat-header-cell", "", 3, "matTooltip", 4, "matHeaderCellDef"], ["mat-header-cell", "", 3, "matTooltip"], [4, "matCellDef"], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["isAnUrlDefault", ""], ["mat-cell", "", 1, "mat-cell-text", 3, "ngClass"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "click"], ["width", "50", "heigth", "auto", 3, "src", 4, "ngIf", "ngIfElse"], ["notImg", ""], ["width", "50", "heigth", "auto", 3, "src"], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", "innerHTML", 4, "ngIf", "ngIfElse"], ["isAnUrlHTML", ""], ["mat-cell", "", 1, "mat-cell-text", 3, "ngClass", "innerHTML"], ["mat-cell", "", "class", "mat-cell-text edition", 3, "formGroup", "ngClass", 4, "ngIf", "ngIfElse"], ["isUnsanitizedHTML", ""], ["mat-cell", "", 1, "mat-cell-text", "edition", 3, "formGroup", "ngClass"], ["class", "date-picker", 4, "ngIf"], ["matInput", "", "type", "time", "step", "900", 3, "formControlName", "focus", "keypress", "blur", 4, "ngIf"], ["matInput", "", "type", "number", "class", "class_number_edition", 3, "formControlName", "step", "value", "readonly", "required", "min", "max", "input", 4, "ngIf"], ["matInput", "", "type", "text", 3, "formControlName", "value", "readonly", "required", "input", 4, "ngIf"], [3, "formControlName", "checked", "change", 4, "ngIf"], [3, "required", "formControlName", "multiple", "value", "selectionChange", 4, "ngIf"], ["matInput", "", "type", "text", 3, "formControlName", "matAutocomplete", "required", "value", 4, "ngIf"], ["panelWidth", "430px", 3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "date-picker"], ["matSuffix", "", 3, "for"], ["matInput", "", 3, "matDatepicker", "formControlName", "value", "dateChange"], ["picker", ""], ["matInput", "", "type", "time", "step", "900", 3, "formControlName", "focus", "keypress", "blur"], ["matInput", "", "type", "number", 1, "class_number_edition", 3, "formControlName", "step", "value", "readonly", "required", "min", "max", "input"], ["matInput", "", "type", "text", 3, "formControlName", "value", "readonly", "required", "input"], [3, "formControlName", "checked", "change"], [3, "required", "formControlName", "multiple", "value", "selectionChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], ["matInput", "", "type", "text", 3, "formControlName", "matAutocomplete", "required", "value"], [3, "value"], ["isAnUrlUnsanitizedHTML", ""], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", 4, "matCellDef"], [3, "svgIcon", "click"], [4, "ngFor", "ngForOf"], ["igoStopPropagation", "", "mat-icon-button", "", 3, "color", "disabled", "mousedown", 4, "ngIf"], ["igoStopPropagation", "", "mat-mini-fab", "", 3, "color", "disabled", "mousedown", 4, "ngIf"], ["igoStopPropagation", "", "mat-icon-button", "", 3, "color", "disabled", "mousedown"], [3, "svgIcon"], ["igoStopPropagation", "", "mat-mini-fab", "", 3, "color", "disabled", "mousedown"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", "", "igoEntityTableRow", "", 3, "scrollBehavior", "ngClass", "selection", "selected", "select", "click"], [3, "store", "paginatorOptions", "entitySortChange$", "paginatorChange"]], template: function EntityTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵlistener("matSortChange", function EntityTableComponent_Template_table_matSortChange_1_listener($event) { return ctx.onSort($event); });
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, EntityTableComponent_th_3_Template, 2, 1, "th", 3);
        i0.ɵɵtemplate(4, EntityTableComponent_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(5, EntityTableComponent_ng_container_5_Template, 4, 4, "ng-container", 5);
        i0.ɵɵtemplate(6, EntityTableComponent_tr_6_Template, 1, 1, "tr", 6);
        i0.ɵɵtemplate(7, EntityTableComponent_tr_7_Template, 1, 4, "tr", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, EntityTableComponent_igo_entity_table_paginator_8_Template, 1, 3, "igo-entity-table-paginator", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.getTableClass())("dataSource", ctx.dataSource)("trackBy", ctx.getTrackByFunction());
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.template.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", ctx.headers)("matHeaderRowDefSticky", ctx.fixedHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.headers);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.withPaginator);
    } }, directives: [i4.MatTable, i5.MatSort, i1$1.NgClass, i4.MatColumnDef, i4.MatHeaderCellDef, i4.MatCellDef, i1$1.NgForOf, i4.MatHeaderRowDef, i4.MatRowDef, i1$1.NgIf, i4.MatHeaderCell, i7.MatCheckbox, i4.MatCell, i5.MatSortHeader, i6.MatTooltip, i1$5.NgControlStatusGroup, i1$5.FormGroupDirective, i9.MatAutocomplete, i10.MatDatepickerToggle, i1.MatSuffix, i2$3.MatInput, i10.MatDatepickerInput, i1$5.DefaultValueAccessor, i1$5.NgControlStatus, i1$5.FormControlName, i10.MatDatepicker, i1$5.NumberValueAccessor, i1$5.MinValidator, i1$5.MaxValidator, i1$5.RequiredValidator, i2.MatSelect, i3.MatOption, i9.MatAutocompleteTrigger, i5$1.MatIcon, i4$1.MatButton, StopPropagationDirective, i4.MatHeaderRow, i4.MatRow, EntityTableRowDirective, EntityTablePaginatorComponent], pipes: [i1$1.AsyncPipe, SecureImagePipe, i6$1.TranslatePipe, SanitizeHtmlPipe], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:block}.table-compact[_nghost-%COMP%]   tr.mat-header-row[_ngcontent-%COMP%], .table-compact[_nghost-%COMP%]     .mat-checkbox .mat-checkbox-ripple{height:36px}.table-compact[_nghost-%COMP%]   tr.mat-row[_ngcontent-%COMP%], .table-compact[_nghost-%COMP%]     .mat-checkbox .mat-checkbox-ripple{height:28px}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:auto;flex:1 1 auto}.mat-cell-text[_ngcontent-%COMP%]{overflow:hidden;word-wrap:break-word}th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{padding:0 3px}entity-table[_ngcontent-%COMP%]   table.igo-entity-table-with-selection[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{-o-box-shadow:2px 0px 2px 0px #dddddd;box-shadow:2px 0 2px #ddd;cursor:pointer}table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:7px}.class_boolean[_ngcontent-%COMP%], .class_icon[_ngcontent-%COMP%], .class_number[_ngcontent-%COMP%]{text-align:center;padding-right:35px!important}.class_sting[_ngcontent-%COMP%], .class_text[_ngcontent-%COMP%], .class_number_edition[_ngcontent-%COMP%]{text-align:left}td.edition[_ngcontent-%COMP%]{background:rgba(166,166,166,.2)}input[_ngcontent-%COMP%]{border-bottom:1px solid darkgrey}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntityTableComponent, [{
        type: Component,
        args: [{
                selector: 'igo-entity-table',
                templateUrl: './entity-table.component.html',
                styleUrls: ['./entity-table.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: MatFormFieldControl, useExisting: EntityTableComponent }]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1$5.FormBuilder }, { type: i2$2.FocusMonitor }, { type: i0.ElementRef }, { type: i1$5.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: i1$5.NgForm, decorators: [{
                type: Optional
            }] }, { type: i1$5.FormControlName, decorators: [{
                type: Optional
            }] }, { type: i3.ErrorStateMatcher }, { type: i3.DateAdapter }]; }, { store: [{
            type: Input
        }], paginator: [{
            type: Input
        }], template: [{
            type: Input
        }], scrollBehavior: [{
            type: Input
        }], sortNullsFirst: [{
            type: Input
        }], withPaginator: [{
            type: Input
        }], paginatorOptions: [{
            type: Input
        }], entityClick: [{
            type: Output
        }], entitySelectChange: [{
            type: Output
        }], entitySortChange: [{
            type: Output
        }] }); })();

var ActionbarMode;
(function (ActionbarMode) {
    ActionbarMode["Dock"] = "dock";
    ActionbarMode["Overlay"] = "overlay";
    ActionbarMode["Context"] = "context";
})(ActionbarMode || (ActionbarMode = {}));

function ActionbarItemComponent_mat_list_item_0_button_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-icon", 7);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("svgIcon", i0.ɵɵpipeBind1(1, 1, ctx_r4.icon$));
} }
function ActionbarItemComponent_mat_list_item_0_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtemplate(2, ActionbarItemComponent_mat_list_item_0_button_4_mat_icon_2_Template, 2, 3, "mat-icon", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r2.color)("disabled", i0.ɵɵpipeBind1(1, 3, ctx_r2.disabled$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.withIcon);
} }
function ActionbarItemComponent_mat_list_item_0_h4_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 8);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r3.title));
} }
function ActionbarItemComponent_mat_list_item_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item", 2);
    i0.ɵɵlistener("click", function ActionbarItemComponent_mat_list_item_0_Template_mat_list_item_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onClick(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtemplate(4, ActionbarItemComponent_mat_list_item_0_button_4_Template, 3, 5, "button", 3);
    i0.ɵɵtemplate(5, ActionbarItemComponent_mat_list_item_0_h4_5_Template, 3, 3, "h4", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r0.withTooltip ? i0.ɵɵpipeBind1(1, 4, i0.ɵɵpipeBind1(2, 6, ctx_r0.tooltip$) || ctx_r0.title) : "")("ngClass", i0.ɵɵpipeBind1(3, 8, ctx_r0.ngClass$));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.withIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.withTitle);
} }
function ActionbarItemComponent_mat_list_item_1_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 11);
    i0.ɵɵlistener("change", function ActionbarItemComponent_mat_list_item_1_mat_checkbox_4_Template_mat_checkbox_change_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.action.handler(); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", i0.ɵɵpipeBind1(1, 2, ctx_r7.checkCondition$));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, ctx_r7.title), " ");
} }
function ActionbarItemComponent_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-item", 9);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtemplate(4, ActionbarItemComponent_mat_list_item_1_mat_checkbox_4_Template, 4, 6, "mat-checkbox", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r1.withTooltip ? i0.ɵɵpipeBind1(1, 3, i0.ɵɵpipeBind1(2, 5, ctx_r1.tooltip$) || ctx_r1.title) : "")("ngClass", i0.ɵɵpipeBind1(3, 7, ctx_r1.ngClass$));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.withTitle);
} }
/**
 * An action button
 */
class ActionbarItemComponent {
    constructor() {
        this.disabled$ = new BehaviorSubject(false);
        this.checkCondition$ = new BehaviorSubject(undefined);
        this.icon$ = new BehaviorSubject(undefined);
        this.tooltip$ = new BehaviorSubject(undefined);
        this.noDisplay$ = new BehaviorSubject(false);
        this.ngClass$ = new BehaviorSubject({});
        /**
         * Color
         */
        this.color = 'default';
        /**
         * Whether the action title is displayed
         */
        this.withTitle = true;
        /**
         * Whether the action icon is displayed
         */
        this.withIcon = true;
        /**
         * Whether a tooltip should be shown
         */
        this.withTooltip = true;
        /**
         * Event emitted when the action button is clicked
         */
        this.trigger = new EventEmitter();
    }
    /**
     * Whether the action is disabled
     */
    set disabled(value) { this.disabled$.next(value); }
    get disabled() { return this.disabled$.value; }
    /**
     * Whether the action is display or not
     */
    set noDisplay(value) { this.noDisplay$.next(value); }
    get noDisplay() { return this.noDisplay$.value; }
    /**
     * @internal
     */
    get title() { return this.action.title; }
    ngOnInit() {
        const args = this.action.args || [];
        if (this.action.ngClass !== undefined) {
            this.ngClass$$ = this.action.ngClass(...args)
                .subscribe((ngClass) => this.updateNgClass(ngClass));
        }
        if (isObservable(this.action.icon)) {
            this.icon$$ = this.action.icon
                .subscribe((icon) => this.updateIcon(icon));
        }
        else {
            this.updateIcon(this.action.icon);
        }
        if (isObservable(this.action.checkCondition)) {
            this.checkCondition$$ = this.action.checkCondition
                .subscribe((checkCondition) => this.updateCheckCondition(checkCondition));
        }
        else {
            this.updateCheckCondition(this.action.checkCondition);
        }
        if (isObservable(this.action.tooltip)) {
            this.tooltip$$ = this.action.tooltip
                .subscribe((tooltip) => this.updateTooltip(tooltip));
        }
        else {
            this.updateTooltip(this.action.tooltip);
        }
        if (this.action.availability !== undefined) {
            this.availability$$ = this.action.availability(...args)
                .subscribe((available) => this.disabled = !available);
        }
        this.disabled$$ = this.disabled$
            .subscribe((disabled) => this.updateNgClass({ 'igo-actionbar-item-disabled': disabled }));
        if (this.action.display !== undefined) {
            this.display$$ = this.action.display(...args)
                .subscribe((display) => this.noDisplay = !display);
        }
        this.noDisplay$$ = this.noDisplay$
            .subscribe((noDisplay) => this.updateNgClass({ 'igo-actionbar-item-no-display': noDisplay }));
    }
    ngOnDestroy() {
        if (this.ngClass$$ !== undefined) {
            this.ngClass$$.unsubscribe();
            this.ngClass$$ = undefined;
        }
        if (this.availability$$ !== undefined) {
            this.availability$$.unsubscribe();
            this.availability$$ = undefined;
        }
        if (this.display$$ !== undefined) {
            this.display$$.unsubscribe();
            this.display$$ = undefined;
        }
        if (this.checkCondition$$ !== undefined) {
            this.checkCondition$$.unsubscribe();
            this.checkCondition$$ = undefined;
        }
        if (this.icon$$ !== undefined) {
            this.icon$$.unsubscribe();
            this.icon$$ = undefined;
        }
        if (this.tooltip$$ !== undefined) {
            this.tooltip$$.unsubscribe();
            this.tooltip$$ = undefined;
        }
        this.disabled$$.unsubscribe();
        this.noDisplay$$.unsubscribe();
    }
    /**
     * When the action button is clicked, emit the 'trigger' event but don't
     * invoke the action handler. This is handled by the parent component.
     * @internal
     */
    onClick() {
        if (this.disabled === true) {
            return;
        }
        this.trigger.emit(this.action);
    }
    updateNgClass(ngClass) {
        this.ngClass$.next(Object.assign({}, this.ngClass$.value, ngClass));
    }
    updateTooltip(tooltip) {
        this.tooltip$.next(tooltip);
    }
    updateCheckCondition(checkCondition) {
        this.checkCondition$.next(checkCondition);
    }
    updateIcon(icon) {
        this.icon$.next(icon);
    }
}
ActionbarItemComponent.ɵfac = function ActionbarItemComponent_Factory(t) { return new (t || ActionbarItemComponent)(); };
ActionbarItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionbarItemComponent, selectors: [["igo-actionbar-item"]], inputs: { action: "action", color: "color", withTitle: "withTitle", withIcon: "withIcon", withTooltip: "withTooltip", disabled: "disabled", noDisplay: "noDisplay" }, outputs: { trigger: "trigger" }, decls: 2, vars: 2, consts: [["matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 3, "matTooltip", "ngClass", "click", 4, "ngIf"], ["class", "item-checkbox", "matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 3, "matTooltip", "ngClass", 4, "ngIf"], ["matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 3, "matTooltip", "ngClass", "click"], ["mat-list-avatar", "", "mat-icon-button", "", 3, "color", "disabled", 4, "ngIf"], ["matLine", "", 4, "ngIf"], ["mat-list-avatar", "", "mat-icon-button", "", 3, "color", "disabled"], [3, "svgIcon", 4, "ngIf"], [3, "svgIcon"], ["matLine", ""], ["matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 1, "item-checkbox", 3, "matTooltip", "ngClass"], [3, "checked", "change", 4, "ngIf"], [3, "checked", "change"]], template: function ActionbarItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ActionbarItemComponent_mat_list_item_0_Template, 6, 10, "mat-list-item", 0);
        i0.ɵɵtemplate(1, ActionbarItemComponent_mat_list_item_1_Template, 5, 9, "mat-list-item", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.action.checkbox);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.action.checkbox);
    } }, directives: [i1$1.NgIf, i1$6.MatListItem, i6.MatTooltip, i1$1.NgClass, i4$1.MatButton, i1$6.MatListAvatarCssMatStyler, i5$1.MatIcon, i3.MatLine, i7.MatCheckbox], pipes: [i6$1.TranslatePipe, i1$1.AsyncPipe], styles: ["mat-list-item.igo-actionbar-item-disabled[_ngcontent-%COMP%]{color:#00000042;cursor:default!important}mat-list-item.igo-actionbar-item-no-display[_ngcontent-%COMP%]{display:none}mat-checkbox[_ngcontent-%COMP%]{padding:12px}.item-checkbox[_ngcontent-%COMP%]{height:56px}.item-checkbox[_ngcontent-%COMP%]     .mat-checkbox-label{margin-left:20px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionbarItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-actionbar-item',
                templateUrl: './actionbar-item.component.html',
                styleUrls: ['./actionbar-item.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { action: [{
            type: Input
        }], color: [{
            type: Input
        }], withTitle: [{
            type: Input
        }], withIcon: [{
            type: Input
        }], withTooltip: [{
            type: Input
        }], disabled: [{
            type: Input
        }], noDisplay: [{
            type: Input
        }], trigger: [{
            type: Output
        }] }); })();

function ActionbarComponent_mat_list_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function ActionbarComponent_mat_list_0_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.scrollUp(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 1, "igo.common.actionbar.scrollUp"));
} }
function ActionbarComponent_mat_list_0_igo_actionbar_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-actionbar-item", 8);
    i0.ɵɵlistener("trigger", function ActionbarComponent_mat_list_0_igo_actionbar_item_2_Template_igo_actionbar_item_trigger_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.onTriggerAction(ctx_r9.toggleCollapseAction); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("withTitle", false)("withIcon", true)("color", ctx_r4.color)("disabled", ctx_r4.store.view.empty)("action", ctx_r4.toggleCollapseAction);
} }
function ActionbarComponent_mat_list_0_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-actionbar-item", 11);
    i0.ɵɵlistener("trigger", function ActionbarComponent_mat_list_0_3_ng_template_0_Template_igo_actionbar_item_trigger_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const action_r13 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onTriggerAction(action_r13); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r13 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("withTitle", ctx_r12.withTitle)("withIcon", ctx_r12.withIcon)("withTooltip", ctx_r12.withTooltip)("color", ctx_r12.color)("disabled", ctx_r12.store.state.get(action_r13).disabled)("action", action_r13);
} }
function ActionbarComponent_mat_list_0_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ActionbarComponent_mat_list_0_3_ng_template_0_Template, 1, 6, "ng-template", 9, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵpipe(2, "async");
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r5.store.view.all$()));
} }
function ActionbarComponent_mat_list_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function ActionbarComponent_mat_list_0_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.scrollDown(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 1, "igo.common.actionbar.scrollDown"));
} }
function ActionbarComponent_mat_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵtemplate(1, ActionbarComponent_mat_list_0_div_1_Template, 4, 3, "div", 2);
    i0.ɵɵtemplate(2, ActionbarComponent_mat_list_0_igo_actionbar_item_2_Template, 1, 5, "igo-actionbar-item", 3);
    i0.ɵɵtemplate(3, ActionbarComponent_mat_list_0_3_Template, 3, 3, undefined, 0);
    i0.ɵɵtemplate(4, ActionbarComponent_mat_list_0_div_4_Template, 4, 3, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.heightCondition && ctx_r0.positionConditionTop && ctx_r0.isDesktop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.withToggleButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.collapsed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.heightCondition && ctx_r0.positionConditionLow && ctx_r0.isDesktop);
} }
function ActionbarComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-actionbar-item", 18);
    i0.ɵɵlistener("trigger", function ActionbarComponent_div_1_ng_template_7_Template_igo_actionbar_item_trigger_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r22); const action_r20 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onTriggerAction(action_r20); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("withTitle", ctx_r19.withTitle)("withIcon", ctx_r19.withIcon)("color", ctx_r19.color)("action", action_r20);
} }
function ActionbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "button", 14);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", 16, 17);
    i0.ɵɵelementStart(6, "mat-list");
    i0.ɵɵtemplate(7, ActionbarComponent_div_1_ng_template_7_Template, 1, 4, "ng-template", 9);
    i0.ɵɵpipe(8, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r18 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 10, "igo.common.actionbar.icon"))("matMenuTriggerFor", _r18)("disabled", ctx_r1.store.view.empty)("color", ctx_r1.iconColor);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("svgIcon", ctx_r1.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r1.overlayClass);
    i0.ɵɵproperty("xPosition", ctx_r1.xPosition)("yPosition", ctx_r1.yPosition);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 12, ctx_r1.store.view.all$()));
} }
function ActionbarComponent_mat_card_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-actionbar-item", 18);
    i0.ɵɵlistener("trigger", function ActionbarComponent_mat_card_2_ng_template_2_Template_igo_actionbar_item_trigger_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r26); const action_r24 = restoredCtx.$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.onTriggerAction(action_r24); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(1, "br");
} if (rf & 2) {
    const action_r24 = ctx.$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("withTitle", ctx_r23.withTitle)("withIcon", ctx_r23.withIcon)("color", ctx_r23.color)("action", action_r24);
} }
function ActionbarComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card", 19);
    i0.ɵɵelementStart(1, "mat-list");
    i0.ɵɵtemplate(2, ActionbarComponent_mat_card_2_ng_template_2_Template, 2, 4, "ng-template", 9);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 1, ctx_r2.store.view.all$()));
} }
/**
 * A list of action buttons.
 * This component can be displayed in one of two way: 'dock' or 'overlay'
 */
class ActionbarComponent {
    constructor(overlay, elRef, cdRef, mediaService) {
        this.overlay = overlay;
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.mediaService = mediaService;
        /**
         * Reference to the ActionbarMode enum for use in the template
         * @internal
         */
        this.actionbarMode = ActionbarMode;
        /**
         * Whether the actionbar is collapsed (Dock mode)
         * @internal
         */
        this.collapsed = false;
        /**
         * Toggle collapse action (Dock)
         * @internal
         */
        this.toggleCollapseAction = {
            id: 'actionbar_toggle',
            icon: 'dots-vertical',
            handler: () => {
                this.collapsed = !this.collapsed;
            }
        };
        /**
         * Height Condition for scroll button
         */
        this.heightCondition$ = new BehaviorSubject(false);
        /**
         * Position Condition for top scroll button
         */
        this.positionConditionTop$ = new BehaviorSubject(true);
        /**
         * Position Condition for low scroll button
         */
        this.positionConditionLow$ = new BehaviorSubject(true);
        /**
         * Actionbar mode
         */
        this.mode = ActionbarMode.Dock;
        /**
         * Whether a toggle button should be displayed (Dock mode)
         */
        this.withToggleButton = false;
        /**
         * Whether a the actionbar should display buttons horizontally
         */
        this.horizontal = false;
        /**
         * Color
         */
        this.color = 'default';
        /**
         * Color of the button if action mode === overlay
         */
        this.iconColor = 'default';
        /**
         * Whether action titles are displayed
         */
        this.withTitle = true;
        /**
         * Whether action tooltips are displayed
         */
        this.withTooltip = true;
        /**
         * Whether action titles are displayed (condition for scroll button)
         */
        this.scrollActive = true;
        /**
         * Whether action icons are displayed
         */
        this.withIcon = true;
        /**
         * Which icon want to be shown
         */
        this.icon = 'dots-horizontal';
        /**
         * Overlay X position
         */
        this.xPosition = 'before';
        /**
         * Overlay Y position
         */
        this.yPosition = 'above';
        this._overlayClass = '';
    }
    /**
     * Class to add to the actionbar overlay
     */
    set overlayClass(value) {
        this._overlayClass = value;
    }
    get overlayClass() {
        return [this._overlayClass, 'igo-actionbar-overlay'].join(' ');
    }
    /**
     * @ignore
     */
    get withTitleClass() {
        return this.withTitle;
    }
    /**
     * @ignore
     */
    get withIconClass() {
        return this.withIcon;
    }
    /**
     * @ignore
     */
    get horizontalClass() {
        return this.horizontal;
    }
    get heightCondition() {
        const el = this.elRef.nativeElement;
        if (this.scrollActive === false) {
            if (el.clientHeight < el.scrollHeight) {
                return true;
            }
        }
        return false;
    }
    get positionConditionTop() {
        if (this.elRef.nativeElement.scrollTop === 0) {
            return false;
        }
        return true;
    }
    get positionConditionLow() {
        const el = this.elRef.nativeElement;
        if (el.scrollTop >= (el.scrollHeight - el.clientHeight)) {
            return false;
        }
        return true;
    }
    get isDesktop() {
        return this.mediaService.getMedia() === Media.Desktop;
    }
    /**
     * @internal
     */
    ngOnChanges(changes) {
        const store = changes.store;
        if (store && store.currentValue !== store.previousValue) {
            if (this.watcher !== undefined) {
                this.watcher.destroy();
            }
            this.watcher = new EntityStoreWatcher(this.store, this.cdRef);
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this.watcher.destroy();
    }
    /**
     * Invoke the action handler
     * @internal
     */
    onTriggerAction(action) {
        const args = action.args || [];
        action.handler(...args);
    }
    scrollDown() {
        this.elRef.nativeElement.scrollBy(0, 52);
    }
    scrollUp() {
        this.elRef.nativeElement.scrollBy(0, -52);
    }
}
ActionbarComponent.ɵfac = function ActionbarComponent_Factory(t) { return new (t || ActionbarComponent)(i0.ɵɵdirectiveInject(i1$7.Overlay), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1$2.MediaService)); };
ActionbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionbarComponent, selectors: [["igo-actionbar"]], hostVars: 6, hostBindings: function ActionbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("with-title", ctx.withTitleClass)("with-icon", ctx.withIconClass)("horizontal", ctx.horizontalClass);
    } }, inputs: { store: "store", mode: "mode", withToggleButton: "withToggleButton", horizontal: "horizontal", color: "color", iconColor: "iconColor", withTitle: "withTitle", withTooltip: "withTooltip", scrollActive: "scrollActive", withIcon: "withIcon", icon: "icon", xPosition: "xPosition", yPosition: "yPosition", overlayClass: "overlayClass" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "context-menu-card mat-elevation-z4", 4, "ngIf"], ["id", "topChevron", 4, "ngIf"], ["color", "accent", 3, "withTitle", "withIcon", "color", "disabled", "action", "trigger", 4, "ngIf"], ["id", "lowChevron", 4, "ngIf"], ["id", "topChevron"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "click"], ["svgIcon", "chevron-up"], ["color", "accent", 3, "withTitle", "withIcon", "color", "disabled", "action", "trigger"], ["ngFor", "", 3, "ngForOf"], ["buttonContent", ""], ["color", "accent", 3, "withTitle", "withIcon", "withTooltip", "color", "disabled", "action", "trigger"], ["id", "lowChevron"], ["svgIcon", "chevron-down"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "buttonOverlay", 3, "matTooltip", "matMenuTriggerFor", "disabled", "color"], [3, "svgIcon"], ["overlapTrigger", "true", 1, "igo-compact-menu", "igo-no-min-width-menu", 3, "xPosition", "yPosition"], ["actionbarMenu", "matMenu"], ["color", "accent", 3, "withTitle", "withIcon", "color", "action", "trigger"], [1, "context-menu-card", "mat-elevation-z4"]], template: function ActionbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ActionbarComponent_mat_list_0_Template, 5, 4, "mat-list", 0);
        i0.ɵɵtemplate(1, ActionbarComponent_div_1_Template, 9, 14, "div", 0);
        i0.ɵɵtemplate(2, ActionbarComponent_mat_card_2_Template, 4, 3, "mat-card", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.mode === ctx.actionbarMode.Dock);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mode === ctx.actionbarMode.Overlay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mode === ctx.actionbarMode.Context);
    } }, directives: [i1$1.NgIf, i1$6.MatList, i4$1.MatButton, i6.MatTooltip, i5$1.MatIcon, ActionbarItemComponent, i1$1.NgForOf, i9$1.MatMenuTrigger, i9$1.MatMenu, i10$1.MatCard], pipes: [i6$1.TranslatePipe, i1$1.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:auto;position:relative}button[_ngcontent-%COMP%]{margin:4px}.buttonOverlay[_ngcontent-%COMP%]{margin:0}mat-list[_ngcontent-%COMP%]{padding-top:0}.horizontal[_nghost-%COMP%]{max-width:100%;overflow:unset}.horizontal[_nghost-%COMP%]   mat-list[_ngcontent-%COMP%]{width:auto;white-space:nowrap}.horizontal[_nghost-%COMP%]   igo-actionbar-item[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]     .mat-list .mat-list-item .mat-list-text>*{white-space:normal;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;max-height:36px;line-height:18px;-webkit-box-orient:vertical;-webkit-line-clamp:2}[_nghost-%COMP%]     .mat-list-base .mat-list-item.mat-list-item-with-avatar{height:46px}[_nghost-%COMP%]     .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content{display:-webkit-flex;height:46px;padding:3px}[_nghost-%COMP%]     .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content>mat-icon{padding:8px}igo-actionbar-item[_ngcontent-%COMP%]     mat-list-item [mat-list-avatar]{height:auto;width:40px}igo-actionbar-item[_ngcontent-%COMP%]     mat-list-item:hover{cursor:pointer}.context-menu-card[_ngcontent-%COMP%]{padding:8px 3px;margin:10px}#topChevron[_ngcontent-%COMP%]{position:sticky;top:0;background-color:#fff;z-index:3}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){#topChevron[_ngcontent-%COMP%]{position:fixed;top:unset}}@supports (-ms-accelerator: true){#topChevron[_ngcontent-%COMP%]{position:fixed;top:unset}}#lowChevron[_ngcontent-%COMP%]{position:fixed;position:sticky;bottom:0;background-color:#fff;z-index:3}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionbarComponent, [{
        type: Component,
        args: [{
                selector: 'igo-actionbar',
                templateUrl: './actionbar.component.html',
                styleUrls: ['./actionbar.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1$7.Overlay }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1$2.MediaService }]; }, { store: [{
            type: Input
        }], mode: [{
            type: Input
        }], withToggleButton: [{
            type: Input
        }], horizontal: [{
            type: Input
        }], color: [{
            type: Input
        }], iconColor: [{
            type: Input
        }], withTitle: [{
            type: Input
        }], withTooltip: [{
            type: Input
        }], scrollActive: [{
            type: Input
        }], withIcon: [{
            type: Input
        }], icon: [{
            type: Input
        }], xPosition: [{
            type: Input
        }], yPosition: [{
            type: Input
        }], overlayClass: [{
            type: Input
        }], withTitleClass: [{
            type: HostBinding,
            args: ['class.with-title']
        }], withIconClass: [{
            type: HostBinding,
            args: ['class.with-icon']
        }], horizontalClass: [{
            type: HostBinding,
            args: ['class.horizontal']
        }] }); })();

/**
 * @ignore
 */
class IgoActionbarModule {
}
IgoActionbarModule.ɵfac = function IgoActionbarModule_Factory(t) { return new (t || IgoActionbarModule)(); };
IgoActionbarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoActionbarModule });
IgoActionbarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoLanguageModule,
            MatButtonModule,
            MatIconModule,
            MatTooltipModule,
            MatMenuModule,
            MatListModule,
            MatCardModule,
            MatCheckboxModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoActionbarModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoLanguageModule,
                    MatButtonModule,
                    MatIconModule,
                    MatTooltipModule,
                    MatMenuModule,
                    MatListModule,
                    MatCardModule,
                    MatCheckboxModule
                ],
                exports: [ActionbarComponent],
                declarations: [ActionbarComponent, ActionbarItemComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoActionbarModule, { declarations: [ActionbarComponent, ActionbarItemComponent], imports: [CommonModule,
        IgoLanguageModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatCheckboxModule], exports: [ActionbarComponent] }); })();

class IgoActionModule {
}
IgoActionModule.ɵfac = function IgoActionModule_Factory(t) { return new (t || IgoActionModule)(); };
IgoActionModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoActionModule });
IgoActionModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            CommonModule,
            IgoActionbarModule
        ], IgoActionbarModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoActionModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoActionbarModule
                ],
                exports: [
                    IgoActionbarModule
                ],
                declarations: [],
                providers: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoActionModule, { imports: [CommonModule,
        IgoActionbarModule], exports: [IgoActionbarModule] }); })();

const _c0$b = function (a0) { return { "igo-backdrop-shown": a0 }; };
class BackdropComponent {
    constructor() { }
    get shown() {
        return this._shown;
    }
    set shown(value) {
        this._shown = value;
    }
}
BackdropComponent.ɵfac = function BackdropComponent_Factory(t) { return new (t || BackdropComponent)(); };
BackdropComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BackdropComponent, selectors: [["igo-backdrop"]], inputs: { shown: "shown" }, decls: 1, vars: 3, consts: [[3, "ngClass"]], template: function BackdropComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c0$b, ctx.shown));
    } }, directives: [i1$1.NgClass], styles: ["[_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#64646480;z-index:2;display:none}[_nghost-%COMP%] > div.igo-backdrop-shown[_ngcontent-%COMP%]{display:block}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BackdropComponent, [{
        type: Component,
        args: [{
                selector: 'igo-backdrop',
                templateUrl: './backdrop.component.html',
                styleUrls: ['./backdrop.component.scss']
            }]
    }], function () { return []; }, { shown: [{
            type: Input
        }] }); })();

class IgoBackdropModule {
    static forRoot() {
        return {
            ngModule: IgoBackdropModule,
            providers: []
        };
    }
}
IgoBackdropModule.ɵfac = function IgoBackdropModule_Factory(t) { return new (t || IgoBackdropModule)(); };
IgoBackdropModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoBackdropModule });
IgoBackdropModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoBackdropModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [BackdropComponent],
                exports: [BackdropComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoBackdropModule, { declarations: [BackdropComponent], imports: [CommonModule], exports: [BackdropComponent] }); })();

/**
 * This directive allow to add an icon inside a matBadge.
 * A value must be set into the matBadge directive ex: matBadge="icon".
 * The badge content will be overrided by this current directive.
 */
class IgoBadgeIconDirective {
    constructor(el, matIconRegistry) {
        this.el = el;
        this.matIconRegistry = matIconRegistry;
        this.hidden = false;
        this.disabled = false;
        this.inverseColor = false;
        this.inheritColor = false;
    }
    set igoMatBadgeIcon(value) {
        this.matIconRegistry.getNamedSvgIcon(value).subscribe((svgObj) => {
            this.svg = svgObj;
            this.updateSvg();
        });
    }
    set matBadgeHidden(value) {
        this.hidden = value;
        this.updateHidden();
    }
    set matBadgeDisabled(value) {
        this.disabled = value;
        this.updateDisabled();
    }
    set igoMatBadgeInverseColor(value) {
        this.inverseColor = value;
        this.updateColor();
    }
    set igoMatBadgeInheritColor(value) {
        this.inheritColor = value;
        this.updateColor();
    }
    get badge() {
        return this.el.nativeElement.querySelector('.mat-badge-content');
    }
    ngOnInit() {
        this.badge.style.alignItems = 'center';
        this.badge.style.justifyContent = 'center';
        this.updateHidden();
        this.updateColor();
        this.updateSvg();
    }
    updateSvg() {
        if (!this.badge) {
            return;
        }
        this.badge.innerHTML = '';
        if (this.svg) {
            this.badge.appendChild(this.svg);
        }
    }
    updateColor() {
        if (!this.badge) {
            return;
        }
        if (this.inheritColor) {
            if (this.inverseColor) {
                this.badge.style.color = 'currentColor';
                this.badge.style.background = 'none';
            }
            else {
                this.badge.style.color = '';
                this.badge.style.background = 'currentColor';
            }
        }
        else {
            if (this.inverseColor) {
                this.badge.style.color = window
                    .getComputedStyle(this.badge, null)
                    .getPropertyValue('background-color');
                this.badge.style.background = 'none';
            }
            else {
                this.badge.style.color = '';
                this.badge.style.background = '';
            }
        }
        this.originalColor = this.badge.style.color;
        this.updateDisabled();
    }
    updateHidden() {
        if (!this.badge) {
            return;
        }
        this.badge.style.display = this.hidden ? 'none' : 'flex';
    }
    updateDisabled() {
        if (!this.badge || !this.inverseColor) {
            return;
        }
        if (this.disabled) {
            this.originalColor = this.badge.style.color;
            this.badge.style.color = '#b9b9b9';
        }
        else {
            this.badge.style.color = this.originalColor;
        }
    }
}
IgoBadgeIconDirective.ɵfac = function IgoBadgeIconDirective_Factory(t) { return new (t || IgoBadgeIconDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i5$1.MatIconRegistry)); };
IgoBadgeIconDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: IgoBadgeIconDirective, selectors: [["", "igoMatBadgeIcon", ""]], inputs: { igoMatBadgeIcon: "igoMatBadgeIcon", matBadgeHidden: "matBadgeHidden", matBadgeDisabled: "matBadgeDisabled", igoMatBadgeInverseColor: "igoMatBadgeInverseColor", igoMatBadgeInheritColor: "igoMatBadgeInheritColor" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoBadgeIconDirective, [{
        type: Directive,
        args: [{
                selector: '[igoMatBadgeIcon]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i5$1.MatIconRegistry }]; }, { igoMatBadgeIcon: [{
            type: Input
        }], matBadgeHidden: [{
            type: Input
        }], matBadgeDisabled: [{
            type: Input
        }], igoMatBadgeInverseColor: [{
            type: Input
        }], igoMatBadgeInheritColor: [{
            type: Input
        }] }); })();

class IgoMatBadgeIconModule {
    static forRoot() {
        return {
            ngModule: IgoMatBadgeIconModule,
            providers: []
        };
    }
}
IgoMatBadgeIconModule.ɵfac = function IgoMatBadgeIconModule_Factory(t) { return new (t || IgoMatBadgeIconModule)(); };
IgoMatBadgeIconModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoMatBadgeIconModule });
IgoMatBadgeIconModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[MatBadgeModule, MatIconModule], MatBadgeModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoMatBadgeIconModule, [{
        type: NgModule,
        args: [{
                imports: [MatBadgeModule, MatIconModule],
                declarations: [IgoBadgeIconDirective],
                exports: [MatBadgeModule, IgoBadgeIconDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoMatBadgeIconModule, { declarations: [IgoBadgeIconDirective], imports: [MatBadgeModule, MatIconModule], exports: [MatBadgeModule, IgoBadgeIconDirective] }); })();

class ClickoutDirective {
    constructor(el) {
        this.el = el;
        this.clickout = new EventEmitter();
    }
    handleMouseClick(event, target) {
        if (!target) {
            return;
        }
        if (!this.el.nativeElement.contains(target)) {
            this.clickout.emit(event);
        }
    }
}
ClickoutDirective.ɵfac = function ClickoutDirective_Factory(t) { return new (t || ClickoutDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ClickoutDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickoutDirective, selectors: [["", "igoClickout", ""]], hostBindings: function ClickoutDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ClickoutDirective_click_HostBindingHandler($event) { return ctx.handleMouseClick($event, $event.target); }, false, i0.ɵɵresolveDocument);
    } }, outputs: { clickout: "clickout" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickoutDirective, [{
        type: Directive,
        args: [{
                selector: '[igoClickout]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { clickout: [{
            type: Output
        }], handleMouseClick: [{
            type: HostListener,
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();

class IgoClickoutModule {
    static forRoot() {
        return {
            ngModule: IgoClickoutModule,
            providers: []
        };
    }
}
IgoClickoutModule.ɵfac = function IgoClickoutModule_Factory(t) { return new (t || IgoClickoutModule)(); };
IgoClickoutModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoClickoutModule });
IgoClickoutModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoClickoutModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [ClickoutDirective],
                exports: [ClickoutDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoClickoutModule, { declarations: [ClickoutDirective], exports: [ClickoutDirective] }); })();

class ClonePipe {
    transform(value, args) {
        if (value === undefined) {
            return value;
        }
        if (value instanceof Array) {
            return value.map(obj => Object.assign(Object.create(obj), obj));
        }
        else {
            return Object.assign(Object.create(value), value);
        }
    }
}
ClonePipe.ɵfac = function ClonePipe_Factory(t) { return new (t || ClonePipe)(); };
ClonePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "clone", type: ClonePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClonePipe, [{
        type: Pipe,
        args: [{
                name: 'clone'
            }]
    }], null, null); })();

class IgoCloneModule {
    static forRoot() {
        return {
            ngModule: IgoCloneModule,
            providers: []
        };
    }
}
IgoCloneModule.ɵfac = function IgoCloneModule_Factory(t) { return new (t || IgoCloneModule)(); };
IgoCloneModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoCloneModule });
IgoCloneModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoCloneModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [ClonePipe],
                exports: [ClonePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoCloneModule, { declarations: [ClonePipe], exports: [ClonePipe] }); })();

class CollapseDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._collapsed = false;
        this.toggle = new EventEmitter();
    }
    get target() {
        return this._target;
    }
    set target(value) {
        this._target = value;
    }
    get collapsed() {
        return this._collapsed;
    }
    set collapsed(collapsed) {
        collapsed ? this.collapseTarget() : this.expandTarget();
        this._collapsed = collapsed;
        this.toggle.emit(collapsed);
    }
    click() {
        this.collapsed = !this.collapsed;
    }
    collapseTarget() {
        this.renderer.addClass(this.target, 'igo-collapsed');
        this.renderer.addClass(this.el.nativeElement, 'collapsed');
    }
    expandTarget() {
        this.renderer.removeClass(this.target, 'igo-collapsed');
        this.renderer.removeClass(this.el.nativeElement, 'collapsed');
    }
}
CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
CollapseDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CollapseDirective, selectors: [["", "igoCollapse", ""]], hostBindings: function CollapseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CollapseDirective_click_HostBindingHandler() { return ctx.click(); });
    } }, inputs: { target: "target", collapsed: "collapsed" }, outputs: { toggle: "toggle" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseDirective, [{
        type: Directive,
        args: [{
                selector: '[igoCollapse]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { target: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], toggle: [{
            type: Output
        }], click: [{
            type: HostListener,
            args: ['click']
        }] }); })();

const _c0$a = ["*"];
class CollapsibleComponent {
    constructor() {
        this._title = '';
        this._collapsed = false;
        this.toggle = new EventEmitter();
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get collapsed() {
        return this._collapsed;
    }
    set collapsed(value) {
        this._collapsed = value;
        this.toggle.emit(value);
    }
}
CollapsibleComponent.ɵfac = function CollapsibleComponent_Factory(t) { return new (t || CollapsibleComponent)(); };
CollapsibleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollapsibleComponent, selectors: [["igo-collapsible"]], inputs: { title: "title", collapsed: "collapsed" }, outputs: { toggle: "toggle" }, ngContentSelectors: _c0$a, decls: 7, vars: 3, consts: [["svgIcon", "chevron-up", "mat-list-avatar", "", "igoCollapse", "", 1, "igo-chevron", 3, "target", "collapsed", "toggle"], ["matLine", ""], ["content", ""]], template: function CollapsibleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "mat-list-item");
        i0.ɵɵelementStart(1, "mat-icon", 0);
        i0.ɵɵlistener("toggle", function CollapsibleComponent_Template_mat_icon_toggle_1_listener($event) { return ctx.collapsed = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "h4", 1);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", null, 2);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("target", _r0)("collapsed", ctx.collapsed);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
    } }, directives: [i1$6.MatListItem, i5$1.MatIcon, i1$6.MatListAvatarCssMatStyler, CollapseDirective, i3.MatLine], styles: ["[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-avatar{height:auto;width:auto;padding:0}mat-list-item[_ngcontent-%COMP%]{overflow:hidden}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapsibleComponent, [{
        type: Component,
        args: [{
                selector: 'igo-collapsible',
                templateUrl: './collapsible.component.html',
                styleUrls: ['./collapsible.component.scss']
            }]
    }], null, { title: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], toggle: [{
            type: Output
        }] }); })();

class IgoCollapsibleModule {
    static forRoot() {
        return {
            ngModule: IgoCollapsibleModule,
            providers: []
        };
    }
}
IgoCollapsibleModule.ɵfac = function IgoCollapsibleModule_Factory(t) { return new (t || IgoCollapsibleModule)(); };
IgoCollapsibleModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoCollapsibleModule });
IgoCollapsibleModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[MatIconModule, MatListModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoCollapsibleModule, [{
        type: NgModule,
        args: [{
                imports: [MatIconModule, MatListModule],
                declarations: [CollapsibleComponent, CollapseDirective],
                exports: [CollapsibleComponent, CollapseDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoCollapsibleModule, { declarations: [CollapsibleComponent, CollapseDirective], imports: [MatIconModule, MatListModule], exports: [CollapsibleComponent, CollapseDirective] }); })();

class ConfirmDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(i0.ɵɵdirectiveInject(i1$8.MatDialogRef)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmDialogComponent, selectors: [["igo-confirm-dialog"]], decls: 12, vars: 10, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 2);
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.dialogRef.close(true); });
        i0.ɵɵtext(7);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 4);
        i0.ɵɵlistener("click", function ConfirmDialogComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(false); });
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 4, "igo.common.confirmDialog.title"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.confirmMessage);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 6, "igo.common.confirmDialog.confirmBtn"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 8, "igo.common.confirmDialog.cancelBtn"));
    } }, directives: [i1$8.MatDialogTitle, i1$8.MatDialogContent, i1$8.MatDialogActions, i4$1.MatButton], pipes: [i6$1.TranslatePipe], styles: ["h2[_ngcontent-%COMP%]{margin:5px 0 10px}div[mat-dialog-content][_ngcontent-%COMP%]{max-width:200px}div[mat-dialog-actions][_ngcontent-%COMP%]{margin:10px 0 0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-confirm-dialog',
                templateUrl: './confirm-dialog.component.html',
                styleUrls: ['./confirm-dialog.component.scss']
            }]
    }], function () { return [{ type: i1$8.MatDialogRef }]; }, null); })();

class ConfirmDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(message) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            disableClose: false
        });
        dialogRef.componentInstance.confirmMessage = message;
        return dialogRef.afterClosed();
    }
}
ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(i0.ɵɵinject(i1$8.MatDialog)); };
ConfirmDialogService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfirmDialogService, factory: ConfirmDialogService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmDialogService, [{
        type: Injectable
    }], function () { return [{ type: i1$8.MatDialog }]; }, null); })();

class IgoConfirmDialogModule {
    static forRoot() {
        return {
            ngModule: IgoConfirmDialogModule,
            providers: []
        };
    }
}
IgoConfirmDialogModule.ɵfac = function IgoConfirmDialogModule_Factory(t) { return new (t || IgoConfirmDialogModule)(); };
IgoConfirmDialogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoConfirmDialogModule });
IgoConfirmDialogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [ConfirmDialogService], imports: [[MatButtonModule, MatDialogModule, IgoLanguageModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoConfirmDialogModule, [{
        type: NgModule,
        args: [{
                imports: [MatButtonModule, MatDialogModule, IgoLanguageModule],
                declarations: [ConfirmDialogComponent],
                exports: [ConfirmDialogComponent],
                providers: [ConfirmDialogService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoConfirmDialogModule, { declarations: [ConfirmDialogComponent], imports: [MatButtonModule, MatDialogModule, IgoLanguageModule], exports: [ConfirmDialogComponent] }); })();

class ContextMenuDirective {
    constructor(overlay, viewContainerRef, elementRef) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
        this.menuPosition = new EventEmitter();
    }
    onContextMenu(e) {
        const { x, y } = e;
        this.close();
        e.preventDefault();
        this.menuPosition.emit({ x, y });
        this.overlayRef = null;
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo({ x, y })
            .withPositions([
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            }
        ]);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
        this.overlayRef.attach(new TemplatePortal(this.menuContext, this.viewContainerRef, {
            $implicit: undefined
        }));
        this.sub = fromEvent(document, 'click')
            .pipe(filter(event => {
            const clickTarget = event.target;
            this.close();
            return (!!this.overlayRef &&
                !this.overlayRef.overlayElement.contains(clickTarget));
        }), take(1))
            .subscribe(() => this.close());
        this.sub = fromEvent(document, 'contextmenu')
            .pipe(filter(event => {
            const clickTarget = event.target;
            if (clickTarget &&
                !this.elementRef.nativeElement.contains(clickTarget) &&
                !this.overlayRef.overlayElement.contains(clickTarget)) {
                return true;
            }
            else {
                event.preventDefault();
            }
        }), take(1))
            .subscribe(() => this.close());
    }
    close() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
ContextMenuDirective.ɵfac = function ContextMenuDirective_Factory(t) { return new (t || ContextMenuDirective)(i0.ɵɵdirectiveInject(i1$7.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ContextMenuDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContextMenuDirective, selectors: [["", "igoContextMenu", ""]], hostBindings: function ContextMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("contextmenu", function ContextMenuDirective_contextmenu_HostBindingHandler($event) { return ctx.onContextMenu($event); });
    } }, inputs: { menuContext: ["igoContextMenu", "menuContext"] }, outputs: { menuPosition: "menuPosition" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[igoContextMenu]'
            }]
    }], function () { return [{ type: i1$7.Overlay }, { type: i0.ViewContainerRef }, { type: i0.ElementRef }]; }, { menuContext: [{
            type: Input,
            args: ['igoContextMenu']
        }], menuPosition: [{
            type: Output
        }], onContextMenu: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }] }); })();

class IgoContextMenuModule {
    static forRoot() {
        return {
            ngModule: IgoContextMenuModule,
            providers: []
        };
    }
}
IgoContextMenuModule.ɵfac = function IgoContextMenuModule_Factory(t) { return new (t || IgoContextMenuModule)(); };
IgoContextMenuModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoContextMenuModule });
IgoContextMenuModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoContextMenuModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [ContextMenuDirective],
                exports: [ContextMenuDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoContextMenuModule, { declarations: [ContextMenuDirective], exports: [ContextMenuDirective] }); })();

class CustomHtmlComponent {
    constructor() {
        this._html = '';
    }
    get html() {
        return this._html;
    }
    set html(value) {
        this._html = value;
    }
}
CustomHtmlComponent.ɵfac = function CustomHtmlComponent_Factory(t) { return new (t || CustomHtmlComponent)(); };
CustomHtmlComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomHtmlComponent, selectors: [["igo-custom-html"]], inputs: { html: "html" }, decls: 2, vars: 3, consts: [[1, "custom-html", 3, "innerHTML"]], template: function CustomHtmlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵpipe(1, "sanitizeHtml");
    } if (rf & 2) {
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx.html), i0.ɵɵsanitizeHtml);
    } }, pipes: [SanitizeHtmlPipe], styles: [".custom-html[_ngcontent-%COMP%]{padding:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomHtmlComponent, [{
        type: Component,
        args: [{
                selector: 'igo-custom-html',
                templateUrl: './custom-html.component.html',
                styleUrls: ['./custom-html.component.scss']
            }]
    }], function () { return []; }, { html: [{
            type: Input
        }] }); })();

class IgoCustomHtmlModule {
    static forRoot() {
        return {
            ngModule: IgoCustomHtmlModule
        };
    }
}
IgoCustomHtmlModule.ɵfac = function IgoCustomHtmlModule_Factory(t) { return new (t || IgoCustomHtmlModule)(); };
IgoCustomHtmlModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoCustomHtmlModule });
IgoCustomHtmlModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatTooltipModule,
            MatInputModule,
            MatButtonModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoCustomHtmlModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatTooltipModule,
                    MatInputModule,
                    MatButtonModule,
                    IgoLanguageModule
                ],
                exports: [SanitizeHtmlPipe, CustomHtmlComponent],
                declarations: [SanitizeHtmlPipe, CustomHtmlComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoCustomHtmlModule, { declarations: [SanitizeHtmlPipe, CustomHtmlComponent], imports: [CommonModule,
        MatIconModule,
        MatTooltipModule,
        MatInputModule,
        MatButtonModule,
        IgoLanguageModule], exports: [SanitizeHtmlPipe, CustomHtmlComponent] }); })();

class DragAndDropDirective {
    constructor() {
        this.allowedExtensions = [];
        this.filesDropped = new EventEmitter();
        this.filesInvalid = new EventEmitter();
        this.background = 'inherit';
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#999';
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = 'inherit';
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.alreadyFired) {
            return;
        }
        evt.alreadyFired = true;
        this.background = 'inherit';
        const filesObj = this.validExtensions(evt);
        if (filesObj.valid.length) {
            this.filesDropped.emit(filesObj.valid);
        }
        if (filesObj.invalid.length) {
            this.filesInvalid.emit(filesObj.invalid);
        }
    }
    validExtensions(evt) {
        const files = evt.dataTransfer.files;
        const filesObj = {
            valid: [],
            invalid: []
        };
        if (files.length > 0) {
            for (const file of files) {
                const ext = file.name.split('.')[file.name.split('.').length - 1];
                if (this.allowedExtensions.length === 0 ||
                    (this.allowedExtensions.lastIndexOf(ext) !== -1 &&
                        file.size !== 0)) {
                    filesObj.valid.push(file);
                }
                else {
                    filesObj.invalid.push(file);
                }
            }
        }
        return filesObj;
    }
}
DragAndDropDirective.ɵfac = function DragAndDropDirective_Factory(t) { return new (t || DragAndDropDirective)(); };
DragAndDropDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DragAndDropDirective, selectors: [["", "igoDragAndDrop", ""]], hostVars: 2, hostBindings: function DragAndDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("dragover", function DragAndDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragAndDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragAndDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("background", ctx.background);
    } }, inputs: { allowedExtensions: "allowedExtensions" }, outputs: { filesDropped: "filesDropped", filesInvalid: "filesInvalid" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragAndDropDirective, [{
        type: Directive,
        args: [{
                selector: '[igoDragAndDrop]'
            }]
    }], null, { allowedExtensions: [{
            type: Input
        }], filesDropped: [{
            type: Output
        }], filesInvalid: [{
            type: Output
        }], background: [{
            type: HostBinding,
            args: ['style.background']
        }], onDragOver: [{
            type: HostListener,
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: HostListener,
            args: ['dragleave', ['$event']]
        }], onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }] }); })();

class IgoDrapDropModule {
    static forRoot() {
        return {
            ngModule: IgoDrapDropModule,
            providers: []
        };
    }
}
IgoDrapDropModule.ɵfac = function IgoDrapDropModule_Factory(t) { return new (t || IgoDrapDropModule)(); };
IgoDrapDropModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoDrapDropModule });
IgoDrapDropModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoDrapDropModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [DragAndDropDirective],
                exports: [DragAndDropDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoDrapDropModule, { declarations: [DragAndDropDirective], exports: [DragAndDropDirective] }); })();

/**
 * This class is used in the DynamicComponentOutlet component. It holds
 * a reference to a component factory and can render that component
 * in a target element on demand. It's also possible to set inputs
 * and to subscribe to outputs.
 */
class DynamicComponent {
    constructor(componentFactory) {
        this.componentFactory = componentFactory;
        /**
         * Subscriptions to the component's outputs. Those need
         * to be unsubscribed when the component is destroyed.
         */
        this.subscriptions = [];
        /**
         * Component inputs
         */
        this.inputs = {};
        /**
         * Subscriptions to the component's async inputs
         */
        this.inputs$$ = {};
        /**
         * Subscribers to the component's outputs
         */
        this.subscribers = {};
    }
    /**
     * Render the component to a target element.
     * Set it's inputs and subscribe to it's outputs.
     * @param target Target element
     */
    setTarget(target) {
        this.target = target;
        this.componentRef = target.createComponent(this.componentFactory);
        this.updateInputs(this.inputs);
        this.updateSubscribers(this.subscribers);
    }
    /**
     * Destroy this component. That means, removing from it's target
     * element and unsubscribing to it's outputs.
     */
    destroy() {
        if (this.target !== undefined) {
            this.target.clear();
        }
        if (this.componentRef !== undefined) {
            this.componentRef.destroy();
            this.componentRef = undefined;
        }
        this.unobserveAllInputs();
        this.unsubscribeAll();
    }
    /**
     * Update the component inputs. This is an update so any
     * key not defined won't be overwritten.
     */
    updateInputs(inputs) {
        this.inputs = inputs;
        if (this.componentRef === undefined) {
            return;
        }
        const instance = this.componentRef.instance;
        const allowedInputs = this.componentFactory.inputs;
        allowedInputs.forEach((value) => {
            const key = value.propName;
            this.unobserveInput(key);
            const inputValue = inputs[key];
            if (inputs.hasOwnProperty(key)) {
                if (inputValue instanceof Observable) {
                    this.observeInput(key, inputValue);
                }
                else {
                    this.setInputValue(instance, key, inputValue);
                }
            }
        });
        if (typeof instance.onUpdateInputs === 'function') {
            instance.onUpdateInputs();
        }
    }
    /**
     * Set an instance's input value
     * @param instance Component instance
     * @param key Input key
     * @param value Input value
     */
    setInputValue(instance, key, value) {
        const currentValue = instance[key];
        if (value === currentValue) {
            return;
        }
        const prototype = Object.getPrototypeOf(instance);
        const descriptor = Object.getOwnPropertyDescriptor(prototype, key);
        if (descriptor !== undefined && descriptor.set !== undefined) {
            descriptor.set.call(instance, value);
        }
        else {
            instance[key] = value;
        }
    }
    /**
     * Update the component subscribers. This is an update so any
     * key not defined won't be overwritten.
     */
    updateSubscribers(subscribers) {
        this.subscribers = subscribers;
        if (this.componentRef === undefined) {
            return;
        }
        const instance = this.componentRef.instance;
        const allowedSubscribers = this.componentFactory.outputs;
        allowedSubscribers.forEach((value) => {
            const key = value.propName;
            if (subscribers.hasOwnProperty(key)) {
                const emitter = instance[key];
                const subscriber = subscribers[key];
                if (Array.isArray(subscriber)) {
                    subscriber.forEach((_subscriber) => {
                        this.subscriptions.push(emitter.subscribe(_subscriber));
                    });
                }
                else {
                    this.subscriptions.push(emitter.subscribe(subscriber));
                }
            }
        });
    }
    /**
     * Subscribe to an observable input and update the component's input value
     * accordingly
     * @param key Input key
     * @param observable Observable
     */
    observeInput(key, observable) {
        this.inputs$$[key] = observable.subscribe((value) => {
            const instance = this.componentRef.instance;
            this.setInputValue(instance, key, value);
            if (typeof instance.onUpdateInputs === 'function') {
                instance.onUpdateInputs();
            }
        });
    }
    /**
     * Unsubscribe to an observable input
     * @param key Input key
     */
    unobserveInput(key) {
        if (this.inputs$$[key] !== undefined) {
            this.inputs$$[key].unsubscribe();
            this.inputs$$[key] = undefined;
        }
    }
    /**
     * Unsubscribe to all outputs.
     */
    unobserveAllInputs() {
        Object.values(this.inputs$$).forEach((s) => {
            if (s !== undefined) {
                s.unsubscribe();
            }
        });
        this.inputs$$ = {};
    }
    /**
     * Unsubscribe to all outputs.
     */
    unsubscribeAll() {
        this.subscriptions.forEach((s) => s.unsubscribe());
        this.subscriptions = [];
    }
}

/**
 * Service to creates DynamicComponent instances from base component classes
 */
class DynamicComponentService {
    constructor(resolver) {
        this.resolver = resolver;
    }
    /**
     * Creates a DynamicComponent instance from a base component class
     * @param componentCls The component class
     * @returns DynamicComponent instance
     */
    create(componentCls) {
        const factory = this.resolver.resolveComponentFactory(componentCls);
        return new DynamicComponent(factory);
    }
}
DynamicComponentService.ɵfac = function DynamicComponentService_Factory(t) { return new (t || DynamicComponentService)(i0.ɵɵinject(i0.ComponentFactoryResolver)); };
DynamicComponentService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DynamicComponentService, factory: DynamicComponentService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicComponentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, null); })();

const _c0$9 = ["target"];
function DynamicOutletComponent_ng_template_0_Template(rf, ctx) { }
class DynamicOutletComponent {
    constructor(dynamicComponentService, cdRef) {
        this.dynamicComponentService = dynamicComponentService;
        this.cdRef = cdRef;
        /**
         * The dynamic component inputs
         */
        this.inputs = {};
        /**
         * The subscribers to the dynamic component outputs
         */
        this.subscribers = {};
    }
    /**
     * If the dynamic component changes, create it.
     * If the inputs or subscribers change, update the current component's
     * inputs or subscribers.
     * @internal
     */
    ngOnChanges(changes) {
        const component = changes.component;
        const inputs = changes.inputs;
        const subscribers = changes.subscribers;
        const eq = ObjectUtils.objectsAreEquivalent;
        if (!component || !component.currentValue) {
            return;
        }
        if (component.currentValue !== component.previousValue) {
            this.createComponent(component.currentValue);
        }
        else {
            const inputsAreEquivalents = inputs && eq(inputs.currentValue || {}, inputs.previousValue || {});
            const subscribersAreEquivalents = subscribers &&
                eq(subscribers.currentValue || {}, subscribers.previousValue || {});
            if (inputsAreEquivalents === false) {
                this.updateInputs();
            }
            if (subscribersAreEquivalents === false) {
                this.updateSubscribers();
            }
        }
        this.cdRef.detectChanges();
    }
    /**
     * Destroy the dynamic component and all it's subscribers
     * @internal
     */
    ngOnDestroy() {
        if (this.dynamicComponent) {
            this.dynamicComponent.destroy();
        }
    }
    /**
     * Create a  DynamicComponent out of the component class and render it.
     * @internal
     */
    createComponent(component) {
        if (this.dynamicComponent !== undefined) {
            this.dynamicComponent.destroy();
        }
        this.dynamicComponent =
            component instanceof DynamicComponent
                ? component
                : this.dynamicComponentService.create(component);
        this.renderComponent();
    }
    /**
     * Create and render the dynamic component. Set it's inputs and subscribers
     * @internal
     */
    renderComponent() {
        this.updateInputs();
        this.updateSubscribers();
        this.dynamicComponent.setTarget(this.target);
    }
    /**
     * Update the dynamic component inputs. This is an update so any
     * key not defined won't be overwritten.
     * @internal
     */
    updateInputs() {
        this.dynamicComponent.updateInputs(this.inputs);
    }
    /**
     * Update the dynamic component subscribers. This is an update so any
     * key not defined won't be overwritten.
     * @internal
     */
    updateSubscribers() {
        this.dynamicComponent.updateSubscribers(this.subscribers);
    }
}
DynamicOutletComponent.ɵfac = function DynamicOutletComponent_Factory(t) { return new (t || DynamicOutletComponent)(i0.ɵɵdirectiveInject(DynamicComponentService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
DynamicOutletComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicOutletComponent, selectors: [["igo-dynamic-outlet"]], viewQuery: function DynamicOutletComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$9, 7, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.target = _t.first);
    } }, inputs: { component: "component", inputs: "inputs", subscribers: "subscribers" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["target", ""]], template: function DynamicOutletComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DynamicOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicOutletComponent, [{
        type: Component,
        args: [{
                selector: 'igo-dynamic-outlet',
                templateUrl: 'dynamic-outlet.component.html',
                styleUrls: ['dynamic-outlet.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DynamicComponentService }, { type: i0.ChangeDetectorRef }]; }, { component: [{
            type: Input
        }], inputs: [{
            type: Input
        }], subscribers: [{
            type: Input
        }], target: [{
            type: ViewChild,
            args: ['target', { read: ViewContainerRef, static: true }]
        }] }); })();

/**
 * @ignore
 */
class IgoDynamicOutletModule {
}
IgoDynamicOutletModule.ɵfac = function IgoDynamicOutletModule_Factory(t) { return new (t || IgoDynamicOutletModule)(); };
IgoDynamicOutletModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoDynamicOutletModule });
IgoDynamicOutletModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoDynamicOutletModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    DynamicOutletComponent
                ],
                declarations: [
                    DynamicOutletComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoDynamicOutletModule, { declarations: [DynamicOutletComponent], imports: [CommonModule], exports: [DynamicOutletComponent] }); })();

class IgoDynamicComponentModule {
}
IgoDynamicComponentModule.ɵfac = function IgoDynamicComponentModule_Factory(t) { return new (t || IgoDynamicComponentModule)(); };
IgoDynamicComponentModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoDynamicComponentModule });
IgoDynamicComponentModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        DynamicComponentService
    ], imports: [[
            CommonModule,
            IgoDynamicOutletModule
        ], IgoDynamicOutletModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoDynamicComponentModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoDynamicOutletModule
                ],
                exports: [
                    IgoDynamicOutletModule
                ],
                providers: [
                    DynamicComponentService
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoDynamicComponentModule, { imports: [CommonModule,
        IgoDynamicOutletModule], exports: [IgoDynamicOutletModule] }); })();

const _c0$8 = ["flexibleMain"];
const _c1$5 = ["*", [["", "igoFlexibleFill", ""]]];
const _c2$1 = ["*", "[igoFlexibleFill]"];
class FlexibleComponent {
    constructor(el, mediaService) {
        this.el = el;
        this.mediaService = mediaService;
        this._initial = '0';
        this._collapsed = '0';
        this._expanded = '100%';
        this._initialMobile = this.expanded;
        this._collapsedMobile = this.collapsed;
        this._expandedMobile = this.expanded;
        this._direction = 'column';
        this._state = 'initial';
    }
    get initial() {
        return this._initial;
    }
    set initial(value) {
        this._initial = value;
    }
    get collapsed() {
        return this._collapsed;
    }
    set collapsed(value) {
        this._collapsed = value;
    }
    get expanded() {
        return this._expanded;
    }
    set expanded(value) {
        this._expanded = value;
    }
    get initialMobile() {
        return this._initialMobile;
    }
    set initialMobile(value) {
        this._initialMobile = value;
    }
    get collapsedMobile() {
        return this._collapsedMobile;
    }
    set collapsedMobile(value) {
        this._collapsedMobile = value;
    }
    get expandedMobile() {
        return this._expandedMobile;
    }
    set expandedMobile(value) {
        this._expandedMobile = value;
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        const sizes = {
            initial: this.initial,
            collapsed: this.collapsed,
            expanded: this.expanded
        };
        if (this.mediaService.isMobile()) {
            Object.assign(sizes, {
                initial: this.initialMobile,
                collapsed: this.collapsedMobile,
                expanded: this.expandedMobile
            });
        }
        const size = sizes[value];
        if (size !== undefined) {
            this.setSize(size);
            setTimeout(() => {
                this._state = value;
            }, FlexibleComponent.transitionTime);
        }
    }
    ngOnInit() {
        this.el.nativeElement.className += this.direction;
        // Since this component supports different sizes
        // on mobile, force a redraw when the media changes
        this.mediaService$$ = this.mediaService.media$.subscribe((media) => (this.state = this.state));
    }
    ngOnDestroy() {
        if (this.mediaService$$) {
            this.mediaService$$.unsubscribe();
        }
    }
    setSize(size) {
        this._state = 'transition';
        if (this.direction === 'column') {
            this.main.nativeElement.style.height = size;
        }
        else if (this.direction === 'row') {
            this.main.nativeElement.style.width = size;
        }
    }
}
FlexibleComponent.transitionTime = 250;
FlexibleComponent.ɵfac = function FlexibleComponent_Factory(t) { return new (t || FlexibleComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1$2.MediaService)); };
FlexibleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FlexibleComponent, selectors: [["igo-flexible"]], viewQuery: function FlexibleComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$8, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.main = _t.first);
    } }, inputs: { initial: "initial", collapsed: "collapsed", expanded: "expanded", initialMobile: "initialMobile", collapsedMobile: "collapsedMobile", expandedMobile: "expandedMobile", direction: "direction", state: "state" }, ngContentSelectors: _c2$1, decls: 8, vars: 4, consts: [["flexibleMain", ""], [1, "igo-container"], [1, "igo-flexible-fill"]], template: function FlexibleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1$5);
        i0.ɵɵelementStart(0, "div", null, 0);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵelementStart(6, "div", 1);
        i0.ɵɵprojection(7, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("igo-flexible-main ", ctx.state, " ", ctx.direction, "");
    } }, styles: ["[_nghost-%COMP%]{display:flex;height:100%;width:100%}.column[_nghost-%COMP%]{flex-direction:column}.row[_nghost-%COMP%]{flex-direction:row}.igo-flexible-main[_ngcontent-%COMP%]{flex:0 0 auto;overflow:hidden}.igo-flexible-main.column[_ngcontent-%COMP%]{transition:height .25s ease-in}.igo-flexible-main.row[_ngcontent-%COMP%]{transition:width .25s ease-in}.igo-flexible-fill[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}.igo-container[_ngcontent-%COMP%]{width:calc(100% - 2 * 5px);height:100%;padding:5px 0;margin:0 5px;overflow:hidden;position:relative}  .igo-flexible-fill{flex:1 1 auto;overflow:hidden;position:relative}  .igo-content{height:100%;width:100%;overflow:auto}  igo-panel{height:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlexibleComponent, [{
        type: Component,
        args: [{
                selector: 'igo-flexible',
                templateUrl: './flexible.component.html',
                styleUrls: ['./flexible.component.scss']
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1$2.MediaService }]; }, { main: [{
            type: ViewChild,
            args: ['flexibleMain', { static: true }]
        }], initial: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], expanded: [{
            type: Input
        }], initialMobile: [{
            type: Input
        }], collapsedMobile: [{
            type: Input
        }], expandedMobile: [{
            type: Input
        }], direction: [{
            type: Input
        }], state: [{
            type: Input
        }] }); })();

class IgoFlexibleModule {
    static forRoot() {
        return {
            ngModule: IgoFlexibleModule,
            providers: []
        };
    }
}
IgoFlexibleModule.ɵfac = function IgoFlexibleModule_Factory(t) { return new (t || IgoFlexibleModule)(); };
IgoFlexibleModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFlexibleModule });
IgoFlexibleModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFlexibleModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [FlexibleComponent],
                exports: [FlexibleComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFlexibleModule, { declarations: [FlexibleComponent], exports: [FlexibleComponent] }); })();

function formControlIsRequired(control) {
    if (control.validator) {
        const validator = control.validator({});
        if (validator && validator.required) {
            return true;
        }
    }
    if (control.controls) {
        const requiredControl = Object.keys(control.controls).find((key) => {
            return formControlIsRequired(control.controls[key]);
        });
        return requiredControl !== undefined;
    }
    return false;
}
function getDefaultErrorMessages() {
    return {
        required: 'igo.common.form.errors.required'
    };
}
function getControlErrorMessage(control, messages) {
    const errors = control.errors || {};
    const errorKeys = Object.keys(errors);
    const errorMessages = errorKeys
        .map((key) => messages[key])
        .filter((message) => message !== undefined);
    return errorMessages.length > 0 ? errorMessages[0] : '';
}
function getAllFormFields(form) {
    return form.groups.reduce((acc, group) => {
        return acc.concat(group.fields);
    }, [].concat(form.fields));
}
function getFormFieldByName(form, name) {
    const fields = getAllFormFields(form);
    return fields.find((field) => {
        return field.name === name;
    });
}

const _c0$7 = ["buttons"];
const _c1$4 = ["*", [["", "formButtons", ""]]];
const _c2 = function (a0) { return { "igo-form-body-with-buttons": a0 }; };
const _c3 = ["*", "[formButtons]"];
/**
 * A configurable form
 */
class FormComponent {
    constructor() {
        /**
         * Form autocomplete
         */
        this.autocomplete = 'off';
        /**
         * Event emitted when the form is submitted
         */
        this.submitForm = new EventEmitter();
    }
    get hasButtons() {
        return this.buttons.nativeElement.children.length !== 0;
    }
    /**
     * Is the entity or the template change, recreate the form or repopulate it.
     * @internal
     */
    ngOnChanges(changes) {
        const formData = changes.formData;
        if (formData && formData.currentValue !== formData.previousValue) {
            if (formData.currentValue === undefined) {
                this.clear();
            }
            else {
                this.setData(formData.currentValue);
            }
        }
    }
    /**
     * Transform the form data to a feature and emit an event
     * @param event Form submit event
     * @internal
     */
    onSubmit() {
        this.submitForm.emit(this.getData());
    }
    getData() {
        const data = {};
        getAllFormFields(this.form).forEach((field) => {
            this.updateDataWithFormField(data, field);
        });
        return data;
    }
    setData(data) {
        this.form.fields.forEach((field) => {
            field.control.setValue(t(data, field.name).safeObject);
        });
        this.form.groups.forEach((group) => {
            group.fields.forEach((field) => {
                field.control.setValue(t(data, field.name).safeObject);
            });
        });
    }
    updateDataWithFormField(data, field) {
        const control = field.control;
        if (!control.disabled) {
            data[field.name] = control.value;
        }
    }
    /**
     * Clear form
     */
    clear() {
        this.form.control.reset();
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormComponent, selectors: [["igo-form"]], viewQuery: function FormComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$7, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t.first);
    } }, inputs: { form: "form", formData: "formData", autocomplete: "autocomplete" }, outputs: { submitForm: "submitForm" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 7, vars: 5, consts: [[3, "autocomplete", "formGroup", "ngSubmit"], [1, "igo-form-body", 3, "ngClass"], [1, "igo-form-content"], [1, "igo-form-buttons"], ["buttons", ""]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1$4);
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3, 4);
        i0.ɵɵprojection(6, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("autocomplete", ctx.autocomplete)("formGroup", ctx.form.control);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c2, ctx.hasButtons));
    } }, directives: [i1$5.ɵNgNoValidate, i1$5.NgControlStatusGroup, i1$5.FormGroupDirective, i1$1.NgClass], styles: ["[_nghost-%COMP%]{display:block}form[_ngcontent-%COMP%]{width:100%;height:100%}.igo-form-body[_ngcontent-%COMP%], .igo-form-content[_ngcontent-%COMP%]{height:100%}.igo-form-body-with-buttons[_ngcontent-%COMP%]   .igo-form-content[_ngcontent-%COMP%]{height:calc(100% - 56px)}.igo-form-content[_ngcontent-%COMP%]{display:flex}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { form: [{
            type: Input
        }], formData: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], submitForm: [{
            type: Output
        }], buttons: [{
            type: ViewChild,
            args: ['buttons', { static: true }]
        }] }); })();

/**
 * @ignore
 */
class IgoFormFormModule {
}
IgoFormFormModule.ɵfac = function IgoFormFormModule_Factory(t) { return new (t || IgoFormFormModule)(); };
IgoFormFormModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFormFormModule });
IgoFormFormModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ], FormsModule,
        ReactiveFormsModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFormFormModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                exports: [
                    FormComponent,
                    FormsModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    FormComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFormFormModule, { declarations: [FormComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule], exports: [FormComponent,
        FormsModule,
        ReactiveFormsModule] }); })();

class FormService {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    form(fields, groups) {
        const control = this.formBuilder.group({});
        fields.forEach((field) => {
            control.addControl(field.name, field.control);
        });
        groups.forEach((group) => {
            control.addControl(group.name, group.control);
        });
        return { fields, groups, control };
    }
    group(config, fields) {
        const options = config.options || {};
        const control = this.formBuilder.group({});
        fields.forEach((field) => {
            control.addControl(field.name, field.control);
        });
        if (options.validator) {
            const validators = this.getValidators(options.validator); // convert string to actual validator
            control.setValidators(validators);
        }
        return Object.assign({}, config, { fields, control });
    }
    field(config) {
        const options = config.options || {};
        const state = {
            value: '',
            disabled: options.disabled
        };
        const control = this.formBuilder.control(state);
        if (options.validator) {
            const validators = this.getValidators(options.validator); // convert string to actual validator
            control.setValidators(validators);
        }
        return Object.assign({ type: 'text' }, config, { control });
    }
    extendFieldConfig(config, partial) {
        const options = Object.assign({}, config.options || {}, partial.options || {});
        const inputs = Object.assign({}, config.inputs || {}, partial.inputs || {});
        const subscribers = Object.assign({}, config.subscribers || {}, partial.subscribers || {});
        return Object.assign({}, config, { options, inputs, subscribers });
    }
    getValidators(validatorOption) {
        if (Array.isArray(validatorOption)) {
            return validatorOption.map((validatorStr) => {
                return this.getValidator(validatorStr);
            });
        }
        return this.getValidator(validatorOption);
    }
    getValidator(validatorStr) {
        if (typeof validatorStr !== 'string') {
            return validatorStr;
        }
        // regex pattern to extract arguments from string for e.g applying on "minLength(8)" would extract 8
        const re = /^([a-zA-Z]{3,15})\((.{0,20})\)$/;
        const match = validatorStr.match(re);
        if (!match) {
            return Validators[validatorStr];
        }
        const name = match[1];
        const args = match[2];
        return Validators[name](args);
    }
}
FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(i0.ɵɵinject(i1$5.FormBuilder)); };
FormService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1$5.FormBuilder }]; }, null); })();

/**
 * Service where all available form fields are registered.
 */
class FormFieldService {
    constructor() { }
    static register(type, component) {
        FormFieldService.fields[type] = component;
    }
    /**
     * Return field component by type
     * @param type Field type
     * @returns Field component
     */
    getFieldByType(type) {
        return FormFieldService.fields[type];
    }
}
FormFieldService.fields = {};
FormFieldService.ɵfac = function FormFieldService_Factory(t) { return new (t || FormFieldService)(); };
FormFieldService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormFieldService, factory: FormFieldService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

function IgoFormFieldComponent(type) {
    return (compType) => {
        FormFieldService.register(type, compType);
    };
}

function FormFieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "igo-dynamic-outlet", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("component", ctx_r0.getFieldComponent())("inputs", ctx_r0.getFieldInputs())("subscribers", ctx_r0.getFieldSubscribers());
} }
/**
 * This component renders the proper form input based on
 * the field configuration it receives.
 */
class FormFieldComponent {
    constructor(formFieldService) {
        this.formFieldService = formFieldService;
        /**
         * Field inputs cache
         */
        this.fieldInputs = undefined;
        /**
         * Field subscribers cache
         */
        this.fieldSubscribers = undefined;
    }
    get fieldOptions() {
        return this.field.options || {};
    }
    getFieldComponent() {
        return this.formFieldService.getFieldByType(this.field.type || 'text');
    }
    getFieldInputs() {
        if (this.fieldInputs !== undefined) {
            return this.fieldInputs;
        }
        const errors = this.fieldOptions.errors || {};
        this.fieldInputs = Object.assign({
            placeholder: this.field.title,
            disableSwitch: this.fieldOptions.disableSwitch || false
        }, Object.assign({}, this.field.inputs || {}), {
            formControl: this.field.control,
            errors: Object.assign({}, getDefaultErrorMessages(), errors)
        });
        return this.fieldInputs;
    }
    getFieldSubscribers() {
        if (this.fieldSubscribers !== undefined) {
            return this.fieldSubscribers;
        }
        this.fieldSubscribers = Object.assign({}, this.field.subscribers || {});
        return this.fieldSubscribers;
    }
}
FormFieldComponent.ɵfac = function FormFieldComponent_Factory(t) { return new (t || FormFieldComponent)(i0.ɵɵdirectiveInject(FormFieldService)); };
FormFieldComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldComponent, selectors: [["igo-form-field"]], inputs: { field: "field" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "component", "inputs", "subscribers"]], template: function FormFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FormFieldComponent_ng_container_0_Template, 2, 3, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.field !== undefined);
    } }, directives: [i1$1.NgIf, DynamicOutletComponent], styles: ["mat-form-field{width:100%}  .igo-form-disable-switch{margin-right:8px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form-field',
                templateUrl: './form-field.component.html',
                styleUrls: ['./form-field.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: FormFieldService }]; }, { field: [{
            type: Input
        }] }); })();

function FormFieldSelectComponent_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const choice_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", choice_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", choice_r3.title, " ");
} }
function FormFieldSelectComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵlistener("click", function FormFieldSelectComponent_mat_icon_4_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onDisableSwitchClick(); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", i0.ɵɵpipeBind1(1, 1, ctx_r1.disabled$) === true ? "checkbox-blank-outline" : "checkbox-marked-outline");
} }
function FormFieldSelectComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r2.getErrorMessage()));
} }
/**
 * This component renders a select field
 */
let FormFieldSelectComponent = class FormFieldSelectComponent {
    constructor() {
        this.disabled$ = new BehaviorSubject(false);
        this.choices$ = new BehaviorSubject([]);
        /**
         * Wheter a disable switch should be available
         */
        this.disableSwitch = false;
    }
    /**
     * Select input choices
     */
    set choices(value) { this.choices$.next(value); }
    get choices() { return this.choices$.value; }
    /**
     * Whether the field is required
     */
    get required() {
        return formControlIsRequired(this.formControl);
    }
    ngOnInit() {
        this.disabled$.next(this.formControl.disabled);
    }
    /**
     * Get error message
     */
    getErrorMessage() {
        return getControlErrorMessage(this.formControl, this.errors);
    }
    onDisableSwitchClick() {
        this.toggleDisabled();
    }
    toggleDisabled() {
        const disabled = !this.disabled$.value;
        if (disabled === true) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
        this.disabled$.next(disabled);
    }
};
FormFieldSelectComponent.ɵfac = function FormFieldSelectComponent_Factory(t) { return new (t || FormFieldSelectComponent)(); };
FormFieldSelectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldSelectComponent, selectors: [["igo-form-field-select"]], inputs: { choices: "choices", formControl: "formControl", placeholder: "placeholder", errors: "errors", disableSwitch: "disableSwitch" }, decls: 6, vars: 8, consts: [[3, "required", "placeholder", "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "igo-form-disable-switch", "matPrefix", "", 3, "svgIcon", "click", 4, "ngIf"], [4, "ngIf"], [3, "value"], ["matPrefix", "", 1, "igo-form-disable-switch", 3, "svgIcon", "click"]], template: function FormFieldSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-select", 0);
        i0.ɵɵtemplate(2, FormFieldSelectComponent_mat_option_2_Template, 2, 2, "mat-option", 1);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, FormFieldSelectComponent_mat_icon_4_Template, 2, 3, "mat-icon", 2);
        i0.ɵɵtemplate(5, FormFieldSelectComponent_mat_error_5_Template, 3, 3, "mat-error", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("required", ctx.required)("placeholder", ctx.placeholder)("formControl", ctx.formControl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 6, ctx.choices$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.disableSwitch === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formControl.errors);
    } }, directives: [i1.MatFormField, i2.MatSelect, i1$5.RequiredValidator, i1$5.NgControlStatus, i1$5.FormControlDirective, i1$1.NgForOf, i1$1.NgIf, i3.MatOption, i5$1.MatIcon, i1.MatPrefix, i1.MatError], pipes: [i1$1.AsyncPipe, i6$1.TranslatePipe], encapsulation: 2, changeDetection: 0 });
FormFieldSelectComponent = __decorate([
    IgoFormFieldComponent('select')
], FormFieldSelectComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldSelectComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form-field-select',
                templateUrl: './form-field-select.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { choices: [{
            type: Input
        }], formControl: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], errors: [{
            type: Input
        }], disableSwitch: [{
            type: Input
        }] }); })();

function FormFieldTextComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 3);
    i0.ɵɵlistener("click", function FormFieldTextComponent_mat_icon_2_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onDisableSwitchClick(); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", i0.ɵɵpipeBind1(1, 1, ctx_r0.disabled$) === true ? "checkbox-blank-outline" : "checkbox-marked-outline");
} }
function FormFieldTextComponent_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r1.getErrorMessage()));
} }
/**
 * This component renders a text field
 */
let FormFieldTextComponent = class FormFieldTextComponent {
    constructor() {
        this.disabled$ = new BehaviorSubject(false);
        /**
         * Wheter a disable switch should be available
         */
        this.disableSwitch = false;
    }
    /**
     * Whether the field is required
     */
    get required() {
        return formControlIsRequired(this.formControl);
    }
    ngOnInit() {
        this.disabled$.next(this.formControl.disabled);
    }
    /**
     * Get error message
     */
    getErrorMessage() {
        return getControlErrorMessage(this.formControl, this.errors);
    }
    onDisableSwitchClick() {
        this.toggleDisabled();
    }
    toggleDisabled() {
        const disabled = !this.disabled$.value;
        if (disabled === true) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
        this.disabled$.next(disabled);
    }
};
FormFieldTextComponent.ɵfac = function FormFieldTextComponent_Factory(t) { return new (t || FormFieldTextComponent)(); };
FormFieldTextComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldTextComponent, selectors: [["igo-form-field-text"]], inputs: { formControl: "formControl", placeholder: "placeholder", errors: "errors", disableSwitch: "disableSwitch" }, decls: 4, vars: 5, consts: [["matInput", "", 3, "required", "placeholder", "formControl"], ["class", "igo-form-disable-switch", "matPrefix", "", 3, "svgIcon", "click", 4, "ngIf"], [4, "ngIf"], ["matPrefix", "", 1, "igo-form-disable-switch", 3, "svgIcon", "click"]], template: function FormFieldTextComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelement(1, "input", 0);
        i0.ɵɵtemplate(2, FormFieldTextComponent_mat_icon_2_Template, 2, 3, "mat-icon", 1);
        i0.ɵɵtemplate(3, FormFieldTextComponent_mat_error_3_Template, 3, 3, "mat-error", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("required", ctx.required)("placeholder", ctx.placeholder)("formControl", ctx.formControl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.disableSwitch === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formControl.errors);
    } }, directives: [i1.MatFormField, i2$3.MatInput, i1$5.DefaultValueAccessor, i1$5.RequiredValidator, i1$5.NgControlStatus, i1$5.FormControlDirective, i1$1.NgIf, i5$1.MatIcon, i1.MatPrefix, i1.MatError], pipes: [i1$1.AsyncPipe, i6$1.TranslatePipe], encapsulation: 2, changeDetection: 0 });
FormFieldTextComponent = __decorate([
    IgoFormFieldComponent('text')
], FormFieldTextComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldTextComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form-field-text',
                templateUrl: './form-field-text.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { formControl: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], errors: [{
            type: Input
        }], disableSwitch: [{
            type: Input
        }] }); })();

function FormFieldTextareaComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 3);
    i0.ɵɵlistener("click", function FormFieldTextareaComponent_mat_icon_3_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onDisableSwitchClick(); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", i0.ɵɵpipeBind1(1, 1, ctx_r0.disabled$) === true ? "checkbox-blank-outline" : "checkbox-marked-outline");
} }
function FormFieldTextareaComponent_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r1.getErrorMessage()));
} }
/**
 * This component renders a textarea field
 */
let FormFieldTextareaComponent = class FormFieldTextareaComponent {
    constructor() {
        this.disabled$ = new BehaviorSubject(false);
        /**
         * Wheter a disable switch should be available
         */
        this.disableSwitch = false;
    }
    /**
     * Whether the field is required
     */
    get required() {
        return formControlIsRequired(this.formControl);
    }
    ngOnInit() {
        this.disabled$.next(this.formControl.disabled);
    }
    /**
     * Get error message
     */
    getErrorMessage() {
        return getControlErrorMessage(this.formControl, this.errors);
    }
    onDisableSwitchClick() {
        this.toggleDisabled();
    }
    toggleDisabled() {
        const disabled = !this.disabled$.value;
        if (disabled === true) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
        this.disabled$.next(disabled);
    }
};
FormFieldTextareaComponent.ɵfac = function FormFieldTextareaComponent_Factory(t) { return new (t || FormFieldTextareaComponent)(); };
FormFieldTextareaComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldTextareaComponent, selectors: [["igo-form-field-textarea"]], inputs: { formControl: "formControl", placeholder: "placeholder", errors: "errors", disableSwitch: "disableSwitch" }, decls: 5, vars: 5, consts: [["matInput", "", 3, "required", "placeholder", "formControl"], ["class", "igo-form-disable-switch", "matPrefix", "", 3, "svgIcon", "click", 4, "ngIf"], [4, "ngIf"], ["matPrefix", "", 1, "igo-form-disable-switch", 3, "svgIcon", "click"]], template: function FormFieldTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "textarea", 0);
        i0.ɵɵtext(2, "  ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, FormFieldTextareaComponent_mat_icon_3_Template, 2, 3, "mat-icon", 1);
        i0.ɵɵtemplate(4, FormFieldTextareaComponent_mat_error_4_Template, 3, 3, "mat-error", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("required", ctx.required)("placeholder", ctx.placeholder)("formControl", ctx.formControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.disableSwitch === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formControl.errors);
    } }, directives: [i1.MatFormField, i2$3.MatInput, i1$5.DefaultValueAccessor, i1$5.RequiredValidator, i1$5.NgControlStatus, i1$5.FormControlDirective, i1$1.NgIf, i5$1.MatIcon, i1.MatPrefix, i1.MatError], pipes: [i1$1.AsyncPipe, i6$1.TranslatePipe], encapsulation: 2, changeDetection: 0 });
FormFieldTextareaComponent = __decorate([
    IgoFormFieldComponent('textarea')
], FormFieldTextareaComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form-field-textarea',
                templateUrl: './form-field-textarea.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { formControl: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], errors: [{
            type: Input
        }], disableSwitch: [{
            type: Input
        }] }); })();

/**
 * @ignore
 */
class IgoFormFieldModule {
}
IgoFormFieldModule.ɵfac = function IgoFormFieldModule_Factory(t) { return new (t || IgoFormFieldModule)(); };
IgoFormFieldModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFormFieldModule });
IgoFormFieldModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            IgoLanguageModule,
            IgoDynamicOutletModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFormFieldModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatIconModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    IgoLanguageModule,
                    IgoDynamicOutletModule
                ],
                exports: [
                    FormFieldComponent,
                    FormFieldSelectComponent,
                    FormFieldTextComponent,
                    FormFieldTextareaComponent
                ],
                declarations: [
                    FormFieldComponent,
                    FormFieldSelectComponent,
                    FormFieldTextComponent,
                    FormFieldTextareaComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFormFieldModule, { declarations: [FormFieldComponent,
        FormFieldSelectComponent,
        FormFieldTextComponent,
        FormFieldTextareaComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        IgoLanguageModule,
        IgoDynamicOutletModule], exports: [FormFieldComponent,
        FormFieldSelectComponent,
        FormFieldTextComponent,
        FormFieldTextareaComponent] }); })();

function FormGroupComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "igo-form-field", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r2.getFieldNgClass(field_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r3);
} }
function FormGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, FormGroupComponent_div_0_div_1_Template, 2, 2, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.group.fields);
} }
function FormGroupComponent_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r1.getErrorMessage()));
} }
const _c0$6 = ["*"];
/**
 * A configurable form, optionnally bound to an entity
 * (for example in case of un update). Submitting that form
 * emits an event with the form data but no other operation is performed.
 */
class FormGroupComponent {
    constructor() { }
    /**
     * Form group control
     */
    get formControl() { return this.group.control; }
    /**
     * Return the number of columns a field should occupy.
     * The maximum allowed is 2, even if the field config says more.
     * @param field Field
     * @returns Number of columns
     * @internal
     */
    getFieldColSpan(field) {
        let colSpan = 2;
        const options = field.options || {};
        if (options.cols && options.cols > 0) {
            colSpan = Math.min(options.cols, 2);
        }
        return colSpan;
    }
    /**
     * Return the number of columns a field should occupy.
     * The maximum allowed is 2, even if the field config says more.
     * @param field Field
     * @returns Number of columns
     * @internal
     */
    getFieldNgClass(field) {
        const colspan = this.getFieldColSpan(field);
        return { [`igo-form-field-colspan-${colspan}`]: true };
    }
    /**
     * Get error message
     */
    getErrorMessage() {
        const options = this.group.options || {};
        return getControlErrorMessage(this.formControl, options.errors || {});
    }
}
FormGroupComponent.ɵfac = function FormGroupComponent_Factory(t) { return new (t || FormGroupComponent)(); };
FormGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormGroupComponent, selectors: [["igo-form-group"]], inputs: { group: "group", errors: "errors" }, ngContentSelectors: _c0$6, decls: 4, vars: 2, consts: [["class", "igo-form-group-fields", 4, "ngIf"], [1, "igo-form-group-extra-content"], [4, "ngIf"], [1, "igo-form-group-fields"], ["class", "igo-form-field-wrapper", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "igo-form-field-wrapper", 3, "ngClass"], [3, "field"]], template: function FormGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, FormGroupComponent_div_0_Template, 2, 1, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, FormGroupComponent_mat_error_3_Template, 3, 3, "mat-error", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.group && ctx.group.fields.length > 0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.formControl.errors);
    } }, directives: [i1$1.NgIf, i1$1.NgForOf, i1$1.NgClass, FormFieldComponent, i1.MatError], pipes: [i6$1.TranslatePipe], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:block;overflow:auto;padding:10px 5px}.igo-form-field-wrapper[_ngcontent-%COMP%]{display:inline-block;padding:0 5px}.igo-form-field-colspan-2[_ngcontent-%COMP%]{width:100%}.igo-form-field-colspan-1[_ngcontent-%COMP%]{width:50%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormGroupComponent, [{
        type: Component,
        args: [{
                selector: 'igo-form-group',
                templateUrl: './form-group.component.html',
                styleUrls: ['./form-group.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { group: [{
            type: Input
        }], errors: [{
            type: Input
        }] }); })();

/**
 * @ignore
 */
class IgoFormGroupModule {
}
IgoFormGroupModule.ɵfac = function IgoFormGroupModule_Factory(t) { return new (t || IgoFormGroupModule)(); };
IgoFormGroupModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFormGroupModule });
IgoFormGroupModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatFormFieldModule,
            IgoLanguageModule,
            IgoFormFieldModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFormGroupModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatFormFieldModule,
                    IgoLanguageModule,
                    IgoFormFieldModule
                ],
                exports: [
                    FormGroupComponent
                ],
                declarations: [
                    FormGroupComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFormGroupModule, { declarations: [FormGroupComponent], imports: [CommonModule,
        MatFormFieldModule,
        IgoLanguageModule,
        IgoFormFieldModule], exports: [FormGroupComponent] }); })();

/**
 * @ignore
 */
class IgoFormModule {
}
IgoFormModule.ɵfac = function IgoFormModule_Factory(t) { return new (t || IgoFormModule)(); };
IgoFormModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFormModule });
IgoFormModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FormService,
        FormFieldService
    ], imports: [[
            CommonModule,
            IgoFormGroupModule,
            IgoFormFieldModule
        ], IgoFormFormModule,
        IgoFormGroupModule,
        IgoFormFieldModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFormModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoFormGroupModule,
                    IgoFormFieldModule
                ],
                exports: [
                    IgoFormFormModule,
                    IgoFormGroupModule,
                    IgoFormFieldModule
                ],
                declarations: [],
                providers: [
                    FormService,
                    FormFieldService
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFormModule, { imports: [CommonModule,
        IgoFormGroupModule,
        IgoFormFieldModule], exports: [IgoFormFormModule,
        IgoFormGroupModule,
        IgoFormFieldModule] }); })();

class HomeButtonComponent {
    constructor() {
        this.unselectButton = new EventEmitter();
    }
    onUnselectButtonClick() {
        this.unselectButton.emit();
    }
}
HomeButtonComponent.ɵfac = function HomeButtonComponent_Factory(t) { return new (t || HomeButtonComponent)(); };
HomeButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeButtonComponent, selectors: [["igo-home-button"]], outputs: { unselectButton: "unselectButton" }, decls: 3, vars: 3, consts: [["id", "homeButton", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "click"], ["svgIcon", "home"]], template: function HomeButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function HomeButtonComponent_Template_button_click_0_listener() { return ctx.onUnselectButtonClick(); });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵelement(2, "mat-icon", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.sidenav.mainMenu"));
    } }, directives: [i4$1.MatButton, i6.MatTooltip, i5$1.MatIcon], pipes: [i6$1.TranslatePipe], styles: ["#homeButton[_ngcontent-%COMP%]{position:absolute;top:50px;left:0px;border-radius:0;height:46px;width:48px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-home-button',
                templateUrl: './home-button.component.html',
                styleUrls: ['./home-button.component.scss']
            }]
    }], function () { return []; }, { unselectButton: [{
            type: Output
        }] }); })();

/**
 * @ignore
 */
class IgoHomeButtonModule {
}
IgoHomeButtonModule.ɵfac = function IgoHomeButtonModule_Factory(t) { return new (t || IgoHomeButtonModule)(); };
IgoHomeButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoHomeButtonModule });
IgoHomeButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoHomeButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTooltipModule,
                    IgoLanguageModule
                ],
                exports: [HomeButtonComponent],
                declarations: [HomeButtonComponent],
                providers: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoHomeButtonModule, { declarations: [HomeButtonComponent], imports: [CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        IgoLanguageModule], exports: [HomeButtonComponent] }); })();

/**
 * @ignore
 */
class IgoEntitySelectorModule {
}
IgoEntitySelectorModule.ɵfac = function IgoEntitySelectorModule_Factory(t) { return new (t || IgoEntitySelectorModule)(); };
IgoEntitySelectorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoEntitySelectorModule });
IgoEntitySelectorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            MatSelectModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoEntitySelectorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatSelectModule
                ],
                exports: [EntitySelectorComponent],
                declarations: [EntitySelectorComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoEntitySelectorModule, { declarations: [EntitySelectorComponent], imports: [CommonModule,
        FormsModule,
        MatSelectModule], exports: [EntitySelectorComponent] }); })();

class StopDropPropagationDirective {
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
StopDropPropagationDirective.ɵfac = function StopDropPropagationDirective_Factory(t) { return new (t || StopDropPropagationDirective)(); };
StopDropPropagationDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StopDropPropagationDirective, selectors: [["", "igoStopDropPropagation", ""]], hostBindings: function StopDropPropagationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("drop", function StopDropPropagationDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StopDropPropagationDirective, [{
        type: Directive,
        args: [{
                selector: '[igoStopDropPropagation]'
            }]
    }], null, { onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }] }); })();

class IgoStopPropagationModule {
    static forRoot() {
        return {
            ngModule: IgoStopPropagationModule,
            providers: []
        };
    }
}
IgoStopPropagationModule.ɵfac = function IgoStopPropagationModule_Factory(t) { return new (t || IgoStopPropagationModule)(); };
IgoStopPropagationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoStopPropagationModule });
IgoStopPropagationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoStopPropagationModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [StopDropPropagationDirective, StopPropagationDirective],
                exports: [StopDropPropagationDirective, StopPropagationDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoStopPropagationModule, { declarations: [StopDropPropagationDirective, StopPropagationDirective], exports: [StopDropPropagationDirective, StopPropagationDirective] }); })();

/**
 * @ignore
 */
class IgoEntityTablePaginatorModule {
}
IgoEntityTablePaginatorModule.ɵfac = function IgoEntityTablePaginatorModule_Factory(t) { return new (t || IgoEntityTablePaginatorModule)(); };
IgoEntityTablePaginatorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoEntityTablePaginatorModule });
IgoEntityTablePaginatorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatPaginatorModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoEntityTablePaginatorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatPaginatorModule,
                ],
                exports: [
                    EntityTablePaginatorComponent
                ],
                declarations: [
                    EntityTablePaginatorComponent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoEntityTablePaginatorModule, { declarations: [EntityTablePaginatorComponent], imports: [MatPaginatorModule], exports: [EntityTablePaginatorComponent] }); })();

class IgoImageModule {
    static forRoot() {
        return {
            ngModule: IgoImageModule,
            providers: []
        };
    }
}
IgoImageModule.ɵfac = function IgoImageModule_Factory(t) { return new (t || IgoImageModule)(); };
IgoImageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoImageModule });
IgoImageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoImageModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [SecureImagePipe],
                exports: [SecureImagePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoImageModule, { declarations: [SecureImagePipe], exports: [SecureImagePipe] }); })();

/**
 * @ignore
 */
class IgoEntityTableModule {
}
IgoEntityTableModule.ɵfac = function IgoEntityTableModule_Factory(t) { return new (t || IgoEntityTableModule)(); };
IgoEntityTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoEntityTableModule });
IgoEntityTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatTableModule,
            MatAutocompleteModule,
            MatSortModule,
            MatIconModule,
            MatButtonModule,
            MatCheckboxModule,
            MatPaginatorModule,
            MatSelectModule,
            IgoStopPropagationModule,
            IgoCustomHtmlModule,
            IgoEntityTablePaginatorModule,
            IgoImageModule,
            IgoLanguageModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatDatepickerModule,
            MatTooltipModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoEntityTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatTableModule,
                    MatAutocompleteModule,
                    MatSortModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatPaginatorModule,
                    MatSelectModule,
                    IgoStopPropagationModule,
                    IgoCustomHtmlModule,
                    IgoEntityTablePaginatorModule,
                    IgoImageModule,
                    IgoLanguageModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatInputModule,
                    MatDatepickerModule,
                    MatTooltipModule
                ],
                exports: [
                    EntityTableComponent
                ],
                declarations: [
                    EntityTableComponent,
                    EntityTableRowDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoEntityTableModule, { declarations: [EntityTableComponent,
        EntityTableRowDirective], imports: [CommonModule,
        MatTableModule,
        MatAutocompleteModule,
        MatSortModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatSelectModule,
        IgoStopPropagationModule,
        IgoCustomHtmlModule,
        IgoEntityTablePaginatorModule,
        IgoImageModule,
        IgoLanguageModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatTooltipModule], exports: [EntityTableComponent] }); })();

class IgoEntityModule {
}
IgoEntityModule.ɵfac = function IgoEntityModule_Factory(t) { return new (t || IgoEntityModule)(); };
IgoEntityModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoEntityModule });
IgoEntityModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ], IgoEntitySelectorModule,
        IgoEntityTableModule,
        IgoEntityTablePaginatorModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoEntityModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    IgoEntitySelectorModule,
                    IgoEntityTableModule,
                    IgoEntityTablePaginatorModule
                ],
                declarations: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoEntityModule, { imports: [CommonModule], exports: [IgoEntitySelectorModule,
        IgoEntityTableModule,
        IgoEntityTablePaginatorModule] }); })();

class InteractiveTourLoader {
    constructor(http, configService) {
        this.http = http;
        this.configService = configService;
        this.jsonURL = this.getPathToConfigFile();
    }
    loadConfigTour() {
        this.getJSON()
            .subscribe((data) => {
            this.allToursOptions = data;
        }, (err) => {
            throw new Error(`Problem with Interactive tour configuration file: interactiveTour.json not find. Check if the file and is path is set correctly.`);
        });
    }
    getPathToConfigFile() {
        return (this.configService.getConfig('interactiveTour.pathToConfigFile') ||
            './config/interactiveTour.json');
    }
    getJSON() {
        return this.http.get(this.jsonURL).pipe(catchError((e) => {
            e.error.caught = true;
            throw e;
        }));
    }
    getTourOptionData(toolName) {
        if (this.allToursOptions === undefined) {
            return undefined;
        }
        let nameInConfigFile = toolName;
        nameInConfigFile = nameInConfigFile.replace(/\s/g, '');
        return this.allToursOptions[nameInConfigFile];
    }
}
InteractiveTourLoader.ɵfac = function InteractiveTourLoader_Factory(t) { return new (t || InteractiveTourLoader)(i0.ɵɵinject(i1$3.HttpClient), i0.ɵɵinject(i1$2.ConfigService)); };
InteractiveTourLoader.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InteractiveTourLoader, factory: InteractiveTourLoader.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractiveTourLoader, [{
        type: Injectable
    }], function () { return [{ type: i1$3.HttpClient }, { type: i1$2.ConfigService }]; }, null); })();

class InteractiveTourService {
    constructor(configService, mediaService, languageService, interactiveTourLoader, shepherdService) {
        this.configService = configService;
        this.mediaService = mediaService;
        this.languageService = languageService;
        this.interactiveTourLoader = interactiveTourLoader;
        this.shepherdService = shepherdService;
        this.nextIndex = 1;
        if (this.isAppHaveTour()) {
            this.interactiveTourLoader.loadConfigTour();
        }
    }
    isAppHaveTour() {
        const haveTour = this.configService.getConfig('interactiveTour.activateInteractiveTour');
        if (haveTour === undefined) {
            return true;
        }
        else {
            return haveTour;
        }
    }
    isToolHaveTourConfig(toolName) {
        const checkTourActiveOptions = this.interactiveTourLoader.getTourOptionData(toolName);
        if (checkTourActiveOptions === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    disabledTourButton(toolName) {
        const stepConfig = this.interactiveTourLoader.getTourOptionData(toolName);
        if (stepConfig === null || stepConfig === void 0 ? void 0 : stepConfig.conditions) {
            for (const condition of stepConfig === null || stepConfig === void 0 ? void 0 : stepConfig.conditions) {
                if (document.querySelector(condition) === null) {
                    return true;
                }
            }
        }
        return false;
    }
    isMobile() {
        return this.mediaService.isMobile();
    }
    isTourDisplayInMobile() {
        const showInMobile = this.configService.getConfig('interactiveTour.tourInMobile');
        if (showInMobile === undefined) {
            return true;
        }
        return this.configService.getConfig('interactiveTour.tourInMobile');
    }
    getButtons(buttonKind) {
        if (buttonKind === 'noBackButton') {
            return [
                {
                    classes: 'shepherd-button-primary',
                    text: this.languageService.translate.instant('igo.common.interactiveTour.nextButton'),
                    type: 'next'
                }
            ];
        }
        if (buttonKind === 'first') {
            return [
                {
                    classes: 'shepherd-button-secondary',
                    text: this.languageService.translate.instant('igo.common.interactiveTour.exitButton'),
                    type: 'cancel'
                },
                {
                    classes: 'shepherd-button-primary',
                    text: this.languageService.translate.instant('igo.common.interactiveTour.nextButton'),
                    type: 'next'
                }
            ];
        }
        if (buttonKind === 'last') {
            return [
                {
                    classes: 'shepherd-button-secondary',
                    text: this.languageService.translate.instant('igo.common.interactiveTour.backButton'),
                    type: 'back'
                },
                {
                    classes: 'shepherd-button-primary',
                    text: this.languageService.translate.instant('igo.common.interactiveTour.exitButton'),
                    type: 'cancel'
                }
            ];
        }
        return [
            {
                classes: 'shepherd-button-secondary',
                text: this.languageService.translate.instant('igo.common.interactiveTour.backButton'),
                type: 'back'
            },
            {
                classes: 'shepherd-button-primary',
                text: this.languageService.translate.instant('igo.common.interactiveTour.nextButton'),
                type: 'next'
            }
        ];
    }
    getAction(actionName) {
        const action = {
            click: 'click'
        };
        return action[actionName.toLowerCase()];
    }
    addProgress() {
        const self = this;
        let nbTry = 0;
        const maxTry = 21;
        const checkExist = setInterval(() => {
            if (self.getCurrentStep()) {
                if (self.getCurrentStep().options.attachTo.element && !document.querySelector(self.getCurrentStep().options.attachTo.element)) {
                    self.cancel();
                    clearInterval(checkExist);
                    return;
                }
                else {
                    const currentStepElement = self.getCurrentStep().getElement();
                    if (currentStepElement) {
                        const shepherdList = currentStepElement.querySelectorAll('.shepherd-content, .shepherd-text');
                        shepherdList.forEach(element => {
                            element.classList.add('mat-typography');
                        });
                    }
                    const header = currentStepElement
                        ? currentStepElement.querySelector('.shepherd-header')
                        : undefined;
                    nbTry++;
                    if (header || nbTry > maxTry) {
                        clearInterval(checkExist);
                    }
                    if (header) {
                        const stepsArray = self.steps;
                        const progress = document.createElement('span');
                        progress.className = 'shepherd-progress';
                        progress.innerText = `${stepsArray.indexOf(self.getCurrentStep()) + 1}/${stepsArray.length}`;
                        header.insertBefore(progress, currentStepElement.querySelector('.shepherd-cancel-icon'));
                    }
                }
            }
        }, 100);
    }
    checkNext(index, tour, service) {
        if (tour.getCurrentStep()) {
            if (tour.getCurrentStep().options.attachTo.element && document.querySelector(tour.getCurrentStep().options.attachTo.element)) {
                tour.complete();
                return;
            }
            if (index.index === tour.steps.length - 1) {
                tour.complete();
                return;
            }
            tour.steps.splice(index.index, 1);
            const nextStep = tour.steps[index.index];
            if (nextStep.options.attachTo.element && !document.querySelector(nextStep.options.attachTo.element)) {
                service.checkNext(index, tour, service);
            }
            else {
                tour._setupModal();
                tour.show(nextStep.id);
            }
        }
    }
    executeAction(step, actionConfig) {
        if (!actionConfig) {
            return;
        }
        if (actionConfig.condition &&
            ((actionConfig.condition.charAt(0) === '!' &&
                document.querySelector(actionConfig.condition.slice(1))) ||
                (actionConfig.condition.charAt(0) !== '!' &&
                    !document.querySelector(actionConfig.condition)))) {
            return;
        }
        const element = document.querySelector(actionConfig.element || step.element);
        const action = this.getAction(actionConfig.action);
        if (element && action) {
            element[action]();
        }
    }
    executeActionPromise(step, actionConfig) {
        return new Promise((resolve) => {
            this.executeAction(step, actionConfig);
            if (!actionConfig || !actionConfig.waitFor) {
                resolve();
                return;
            }
            let nbTry = 0;
            const maxTry = actionConfig.maxWait ? actionConfig.maxWait / 100 : 20;
            const checkExist = setInterval(() => {
                nbTry++;
                if (nbTry > maxTry || document.querySelector(actionConfig.waitFor)) {
                    clearInterval(checkExist);
                    resolve();
                }
            }, 100);
        });
    }
    getShepherdSteps(stepConfig) {
        const shepherdSteps = [];
        let i = 0;
        for (const step of stepConfig.steps) {
            shepherdSteps.push({
                attachTo: {
                    element: step.element,
                    on: step.position || stepConfig.position
                },
                popperOptions: {
                    modifiers: [{ name: 'offset', options: { offset: [0, 15] } }]
                },
                beforeShowPromise: () => {
                    return Promise.all([
                        this.executeActionPromise(this.previousStep, this.previousStep ? this.previousStep.beforeChange : undefined),
                        this.executeActionPromise(step, step.beforeShow)
                    ]);
                },
                buttons: this.getButtons(i === 0
                    ? 'first'
                    : i + 1 === stepConfig.steps.length
                        ? 'last'
                        : stepConfig.steps[i].noBackButton
                            ? 'noBackButton'
                            : undefined),
                classes: step.class,
                highlightClass: step.highlightClass,
                scrollTo: step.scrollToElement || stepConfig.scrollToElement || true,
                canClickTarget: step.disableInteraction
                    ? !step.disableInteraction
                    : undefined,
                title: this.languageService.translate.instant(step.title || stepConfig.title),
                text: [this.languageService.translate.instant(step.text)],
                when: {
                    show: () => {
                        this.executeAction(step, step.onShow);
                    },
                    hide: () => {
                        this.previousStep = step;
                        this.executeAction(step, step.onHide);
                    }
                }
            });
            i++;
        }
        return shepherdSteps;
    }
    startTour(toolName) {
        const stepConfig = this.interactiveTourLoader.getTourOptionData(toolName);
        this.shepherdService.defaultStepOptions = {
            classes: stepConfig.class,
            highlightClass: stepConfig.highlightClass,
            canClickTarget: stepConfig.disableInteraction
                ? !stepConfig.disableInteraction
                : true,
            cancelIcon: {
                enabled: true
            }
        };
        const shepherdSteps = this.getShepherdSteps(stepConfig);
        this.shepherdService.modal = true;
        this.shepherdService.confirmCancel = false;
        this.shepherdService.addSteps(shepherdSteps);
        this.shepherdService.tourObject.on('show', this.addProgress);
        this.shepherdService.tourObject.on('cancel', (index) => {
            this.checkNext(index, this.shepherdService.tourObject, this);
        });
        this.shepherdService.start();
    }
}
InteractiveTourService.ɵfac = function InteractiveTourService_Factory(t) { return new (t || InteractiveTourService)(i0.ɵɵinject(i1$2.ConfigService), i0.ɵɵinject(i1$2.MediaService), i0.ɵɵinject(i1$2.LanguageService), i0.ɵɵinject(InteractiveTourLoader), i0.ɵɵinject(i3$1.ShepherdService)); };
InteractiveTourService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InteractiveTourService, factory: InteractiveTourService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractiveTourService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1$2.ConfigService }, { type: i1$2.MediaService }, { type: i1$2.LanguageService }, { type: InteractiveTourLoader }, { type: i3$1.ShepherdService }]; }, null); })();

/**
 * Service where all available tools and their component are registered.
 */
class Toolbox {
    constructor(options = {}) {
        this.options = options;
        /**
         * Observable of the active tool
         */
        this.activeTool$ = new BehaviorSubject(undefined);
        /**
         * Ordered list of tool names to display in a toolbar
         */
        this.toolbar$ = new BehaviorSubject([]);
        /**
         * Active tool history. Useful for activating the previous tool.
         */
        this.activeToolHistory = [];
        /**
         * Tool store
         */
        this.store = new EntityStore([], {
            getKey: (tool) => tool.name
        });
        this.setToolbar(options.toolbar);
        this.initStore();
    }
    get tools$() {
        return this.store.entities$;
    }
    /**
     * Destroy the toolbox
     */
    destroy() {
        this.activeTool$$.unsubscribe();
        this.store.destroy();
    }
    /**
     * Return a tool
     * @param name Tool name
     * @returns tool Tool
     */
    getTool(name) {
        return this.store.get(name);
    }
    /**
     * Return all tools
     * @returns Array of tools
     */
    getTools() {
        return this.store.all();
    }
    /**
     * Set tool configurations
     * @param tools Tools
     */
    setTools(tools) {
        this.store.load(tools);
    }
    /**
     * Get toolbar
     * @returns Toolbar value
     */
    getToolbar() {
        return this.toolbar$.getValue();
    }
    /**
     * Set toolbar
     * @param toolbar A list of tool names
     */
    setToolbar(toolbar) {
        this.toolbar$.next(toolbar || []);
    }
    /**
     * Activate a tool (and deactivate other tools)
     * @param name Tool name
     * @param options Tool options
     */
    activateTool(name, options = {}) {
        const tool = this.getTool(name);
        if (tool === undefined) {
            return;
        }
        this.store.state.update(tool, { active: true, options }, true);
    }
    /**
     * Activate the previous tool, if any
     */
    activatePreviousTool() {
        if (this.activeToolHistory.length <= 1) {
            this.deactivateTool();
            return;
        }
        const [previous, current] = this.activeToolHistory.splice(-2, 2);
        this.activateTool(previous);
    }
    /**
     * Activate the tool below, if any
     */
    /* activateBelowTool() {
      const arrayTools = this.getToolbar();
      const index = arrayTools.findIndex(t => t === this.activeTool$.getValue().name);
      if (arrayTools[index + 1] !== undefined) {
        this.deactivateTool();
        const below = arrayTools[index + 1];
        this.activateTool(below);
      } else {
        this.deactivateTool();
        const below = arrayTools[0];
        this.activateTool(below);
      }
    } */
    /**
     * Activate the tool above, if any
     */
    /* activateAboveTool() {
      const arrayTools = this.getToolbar();
      const index = arrayTools.findIndex(t => t === this.activeTool$.getValue().name);
      if (arrayTools[index - 1] !== undefined) {
        this.deactivateTool();
        const above = arrayTools[index - 1];
        this.activateTool(above);
      } else {
        this.deactivateTool();
        const above = arrayTools[arrayTools.length - 1];
        this.activateTool(above);
      }
    } */
    /**
     * Deactivate the active tool
     */
    deactivateTool() {
        this.clearActiveToolHistory();
        this.store.state.updateAll({ active: false });
    }
    /**
     * Initialize the tool store and start observing the active tool
     */
    initStore() {
        this.store = new EntityStore([], {
            getKey: (entity) => entity.name
        });
        this.activeTool$$ = this.store.stateView
            .firstBy$((record) => record.state.active === true)
            .subscribe((record) => {
            if (record === undefined) {
                this.setActiveTool(undefined);
                return;
            }
            const tool = record.entity;
            const options = Object.assign({}, tool.options || {}, record.state.options || {});
            this.setActiveTool(Object.assign({}, tool, { options }));
        });
    }
    /**
     * Set the active tool and update the tool history
     * @param tool Tool
     */
    setActiveTool(tool) {
        this.activeTool$.next(tool);
        if (tool === undefined) {
            this.clearActiveToolHistory();
        }
        else {
            this.activeToolHistory = this.activeToolHistory
                .filter((name) => name !== tool.name)
                .concat([tool.name]);
        }
    }
    /**
     * Clear the tool history
     */
    clearActiveToolHistory() {
        this.activeToolHistory = [];
    }
}

/**
 * Service where runtime tool configurations are registered
 */
class ToolService {
    constructor() {
        /**
         * Toolbox that holds main tools
         */
        this.toolbox = new Toolbox();
        this.toolbox.setTools(this.getTools());
    }
    static register(tool) {
        ToolService.tools[tool.name] = tool;
    }
    /**
     * Return a tool
     * @param name Tool name
     * @returns tool Tool
     */
    getTool(name) {
        return ToolService.tools[name];
    }
    /**
     * Return all tools
     * @returns tTols
     */
    getTools() {
        return Object.values(ToolService.tools);
    }
}
ToolService.tools = {};
ToolService.ɵfac = function ToolService_Factory(t) { return new (t || ToolService)(); };
ToolService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ToolService, factory: ToolService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

function InteractiveTourComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function InteractiveTourComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.startInteractiveTour(); });
    i0.ɵɵelementStart(1, "span", 2);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "mat-icon", 3);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.getClass())("disabled", ctx_r0.disabledTourButton);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(3, 5, "igo.common.interactiveTour.buttonTitle"), " ", i0.ɵɵpipeBind1(4, 7, i0.ɵɵpipeBind1(5, 9, ctx_r0.discoverTitleInLocale$)), "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("matTooltip", ctx_r0.disabledTourButton ? i0.ɵɵpipeBind1(7, 11, "igo.common.interactiveTour.disaledTooltipTourToolButton") : i0.ɵɵpipeBind1(8, 13, "igo.common.interactiveTour.tooltipTourToolButton"));
} }
class InteractiveTourComponent {
    constructor(interactiveTourService, toolService) {
        this.interactiveTourService = interactiveTourService;
        this.toolService = toolService;
        /**
         * Toolbox that holds main tools
         */
        this.tourToStart = '';
        this.discoverTitleInLocale$ = of('IGO');
    }
    getClass() {
        return {
            'tour-button-tool-icon': this.styleButton === 'icon',
            'tour-button-tool': this.styleButton === 'raised'
        };
    }
    get toolbox() {
        return this.toolService.toolbox;
    }
    getTourToStart() {
        if (this.tourToStart) {
            return this.tourToStart;
        }
        else {
            return this.activeToolName;
        }
    }
    get activeToolName() {
        if (this.toolbox) {
            if (this.isActiveTool) {
                return this.toolbox.activeTool$.getValue().name;
            }
            else {
                return 'global';
            }
        }
        else {
            return undefined;
        }
    }
    get isActiveTool() {
        if (this.toolbox) {
            return this.toolbox.activeTool$.getValue() !== undefined;
        }
        else {
            return undefined;
        }
    }
    get isToolHaveTour() {
        if (this.activeToolName === 'about' && !this.tourToStart) {
            return false;
        }
        return this.interactiveTourService.isToolHaveTourConfig(this.getTourToStart());
    }
    get showTourButton() {
        // 2 conditions to show: have Tour on tool in Config file and if we are in mobile displayInMobile= true
        let haveTour;
        haveTour = this.isToolHaveTour;
        if (haveTour === false) {
            return false;
        }
        let inMobileAndShow;
        if (this.interactiveTourService.isMobile()) {
            inMobileAndShow = this.isTourDisplayInMobile;
            if (inMobileAndShow === false) {
                return false;
            }
        }
        return true;
    }
    get isTourDisplayInMobile() {
        return this.interactiveTourService.isTourDisplayInMobile();
    }
    get disabledTourButton() {
        return this.interactiveTourService.disabledTourButton(this.activeToolName);
    }
    startInteractiveTour() {
        const tour = this.getTourToStart();
        if (tour) {
            this.interactiveTourService.startTour(tour);
        }
        else {
            return;
        }
    }
}
InteractiveTourComponent.ɵfac = function InteractiveTourComponent_Factory(t) { return new (t || InteractiveTourComponent)(i0.ɵɵdirectiveInject(InteractiveTourService), i0.ɵɵdirectiveInject(ToolService)); };
InteractiveTourComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InteractiveTourComponent, selectors: [["igo-interactive-tour"]], inputs: { tourToStart: "tourToStart", styleButton: "styleButton", discoverTitleInLocale$: "discoverTitleInLocale$" }, decls: 1, vars: 1, consts: [["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "ngClass", "disabled", "click"], [1, "interactive-tour-button-title"], ["svgIcon", "presentation-play", 3, "matTooltip"]], template: function InteractiveTourComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, InteractiveTourComponent_button_0_Template, 9, 15, "button", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showTourButton);
    } }, directives: [i1$1.NgIf, i4$1.MatButton, i1$1.NgClass, i5$1.MatIcon, i6.MatTooltip], pipes: [i6$1.TranslatePipe, i1$1.AsyncPipe], styles: [".shepherd-has-title .shepherd-content .shepherd-header{padding:.5em .75em}.shepherd-title{margin:0!important;font-weight:revert!important}.shepherd-progress{margin-right:15px;color:#737373}.shepherd-text{font-size:14px!important}.shepherd-element{border:1px solid;border-color:#474747;box-shadow:4px 5px #65656599}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractiveTourComponent, [{
        type: Component,
        args: [{
                selector: 'igo-interactive-tour',
                templateUrl: './interactive-tour.component.html',
                styleUrls: ['./interactive-tour.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: InteractiveTourService }, { type: ToolService }]; }, { tourToStart: [{
            type: Input
        }], styleButton: [{
            type: Input
        }], discoverTitleInLocale$: [{
            type: Input
        }] }); })();

class IgoInteractiveTourModule {
}
IgoInteractiveTourModule.ɵfac = function IgoInteractiveTourModule_Factory(t) { return new (t || IgoInteractiveTourModule)(); };
IgoInteractiveTourModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoInteractiveTourModule });
IgoInteractiveTourModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [InteractiveTourService, InteractiveTourLoader], imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoInteractiveTourModule, [{
        type: NgModule,
        args: [{
                declarations: [InteractiveTourComponent],
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTooltipModule,
                    IgoLanguageModule
                ],
                providers: [InteractiveTourService, InteractiveTourLoader],
                exports: [InteractiveTourComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoInteractiveTourModule, { declarations: [InteractiveTourComponent], imports: [CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        IgoLanguageModule], exports: [InteractiveTourComponent] }); })();

class KeyValuePipe {
    transform(value, args) {
        const keyValues = [];
        Object.getOwnPropertyNames(value).forEach((key) => keyValues.push({ key, value: value[key] }));
        return keyValues;
    }
}
KeyValuePipe.ɵfac = function KeyValuePipe_Factory(t) { return new (t || KeyValuePipe)(); };
KeyValuePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "keyvalue", type: KeyValuePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KeyValuePipe, [{
        type: Pipe,
        args: [{
                name: 'keyvalue'
            }]
    }], null, null); })();

class IgoKeyValueModule {
    static forRoot() {
        return {
            ngModule: IgoKeyValueModule,
            providers: []
        };
    }
}
IgoKeyValueModule.ɵfac = function IgoKeyValueModule_Factory(t) { return new (t || IgoKeyValueModule)(); };
IgoKeyValueModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoKeyValueModule });
IgoKeyValueModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoKeyValueModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [KeyValuePipe],
                exports: [KeyValuePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoKeyValueModule, { declarations: [KeyValuePipe], exports: [KeyValuePipe] }); })();

function JsonDialogComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0$5 = function (a0, a1) { return { obj: a0, baseKey: a1 }; };
function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const property_r6 = i0.ɵɵnextContext(2).$implicit;
    const baseKey_r4 = i0.ɵɵnextContext().baseKey;
    const ctx_r8 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0$5, property_r6.value, ctx_r8.getKey(baseKey_r4, property_r6.key)));
} }
function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " : ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "span", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const property_r6 = i0.ɵɵnextContext(2).$implicit;
    const baseKey_r4 = i0.ɵɵnextContext().baseKey;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r10.getKey(baseKey_r4, property_r6.key));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", property_r6.value, i0.ɵɵsanitizeHtml);
} }
function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_Template, 2, 5, "ng-container", 8);
    i0.ɵɵtemplate(2, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_template_2_Template, 6, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r9 = i0.ɵɵreference(3);
    const property_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isObject(property_r6.value))("ngIfElse", _r9);
} }
function JsonDialogComponent_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const property_r6 = ctx.$implicit;
    const baseKey_r4 = i0.ɵɵnextContext().baseKey;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.ignoreKeys.indexOf(ctx_r5.getKey(baseKey_r4, property_r6.key)) === -1);
} }
function JsonDialogComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, JsonDialogComponent_ng_template_4_ng_container_0_Template, 2, 1, "ng-container", 6);
    i0.ɵɵpipe(1, "keyvalue");
} if (rf & 2) {
    const obj_r3 = ctx.obj;
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(1, 1, obj_r3));
} }
const _c1$3 = function (a0) { return { obj: a0 }; };
class JsonDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    isObject(val) {
        return typeof val === 'object' && !Array.isArray(val);
    }
    getKey(baseKey, key) {
        return (baseKey ? baseKey + '.' : '') + key;
    }
}
JsonDialogComponent.ɵfac = function JsonDialogComponent_Factory(t) { return new (t || JsonDialogComponent)(i0.ɵɵdirectiveInject(i1$8.MatDialogRef)); };
JsonDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: JsonDialogComponent, selectors: [["igo-json-dialog"]], decls: 9, vars: 5, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["loopObject", ""], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["notObject", ""], [1, "propertyValue", 3, "innerHtml"]], template: function JsonDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtemplate(3, JsonDialogComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        i0.ɵɵtemplate(4, JsonDialogComponent_ng_template_4_Template, 2, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelementStart(7, "button", 5);
        i0.ɵɵlistener("click", function JsonDialogComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(false); });
        i0.ɵɵtext(8, " OK ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c1$3, ctx.data));
    } }, directives: [i1$8.MatDialogTitle, i1$8.MatDialogContent, i1$1.NgTemplateOutlet, i1$8.MatDialogActions, i4$1.MatButton, i1$1.NgForOf, i1$1.NgIf], pipes: [KeyValuePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-json-dialog',
                templateUrl: './json-dialog.component.html'
            }]
    }], function () { return [{ type: i1$8.MatDialogRef }]; }, null); })();

class JsonDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(title, data, ignoreKeys) {
        const dialogRef = this.dialog.open(JsonDialogComponent, {
            disableClose: false
        });
        dialogRef.componentInstance.data = data;
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.ignoreKeys = ignoreKeys;
        return dialogRef.afterClosed();
    }
}
JsonDialogService.ɵfac = function JsonDialogService_Factory(t) { return new (t || JsonDialogService)(i0.ɵɵinject(i1$8.MatDialog)); };
JsonDialogService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JsonDialogService, factory: JsonDialogService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonDialogService, [{
        type: Injectable
    }], function () { return [{ type: i1$8.MatDialog }]; }, null); })();

class IgoJsonDialogModule {
    static forRoot() {
        return {
            ngModule: IgoJsonDialogModule
        };
    }
}
IgoJsonDialogModule.ɵfac = function IgoJsonDialogModule_Factory(t) { return new (t || IgoJsonDialogModule)(); };
IgoJsonDialogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoJsonDialogModule });
IgoJsonDialogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [JsonDialogService], imports: [[CommonModule, MatButtonModule, MatDialogModule, IgoKeyValueModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoJsonDialogModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatButtonModule, MatDialogModule, IgoKeyValueModule],
                exports: [JsonDialogComponent],
                declarations: [JsonDialogComponent],
                providers: [JsonDialogService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoJsonDialogModule, { declarations: [JsonDialogComponent], imports: [CommonModule, MatButtonModule, MatDialogModule, IgoKeyValueModule], exports: [JsonDialogComponent] }); })();

class ListItemDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._color = 'primary';
        this._focused = false;
        this._selected = false;
        this._disabled = false;
        this.beforeSelect = new EventEmitter();
        this.beforeFocus = new EventEmitter();
        this.beforeUnselect = new EventEmitter();
        this.beforeUnfocus = new EventEmitter();
        this.beforeDisable = new EventEmitter();
        this.beforeEnable = new EventEmitter();
        this.focus = new EventEmitter();
        this.unfocus = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.disable = new EventEmitter();
        this.enable = new EventEmitter();
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get focused() {
        return this._focused;
    }
    set focused(value) {
        if (value === this._focused) {
            return;
        }
        if (this.disabled) {
            return;
        }
        value ? this.beforeFocus.emit(this) : this.beforeUnfocus.emit(this);
        this._focused = value;
        if (this.selected !== true) {
            this.toggleFocusedClass();
        }
        value ? this.focus.emit(this) : this.unfocus.emit(this);
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        if (value === this._selected) {
            return;
        }
        if (this.disabled) {
            return;
        }
        value ? this.beforeSelect.emit(this) : this.beforeUnselect.emit(this);
        this._selected = value;
        this._focused = value;
        this.toggleSelectedClass();
        value ? this.select.emit(this) : this.unselect.emit(this);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (value === this._disabled) {
            return;
        }
        if (value === true) {
            this.selected = false;
        }
        value ? this.beforeDisable.emit(this) : this.beforeEnable.emit(this);
        this._disabled = value;
        this.toggleDisabledClass();
        value ? this.disable.emit(this) : this.enable.emit(this);
    }
    onClick() {
        this.selected = true;
    }
    getOffsetTop() {
        const padding = 5;
        return this.el.nativeElement.offsetTop - padding;
    }
    toggleFocusedClass() {
        if (this.focused) {
            this.addCls(ListItemDirective.focusedCls);
        }
        else {
            this.removeCls(ListItemDirective.focusedCls);
        }
    }
    toggleSelectedClass() {
        if (this.selected) {
            this.addCls(ListItemDirective.selectedCls);
            this.removeCls(ListItemDirective.focusedCls);
        }
        else {
            this.removeCls(ListItemDirective.selectedCls);
        }
    }
    toggleDisabledClass() {
        if (this.disabled) {
            this.addCls(ListItemDirective.disabledCls);
        }
        else {
            this.removeCls(ListItemDirective.disabledCls);
        }
    }
    addCls(cls) {
        this.renderer.addClass(this.el.nativeElement, cls);
    }
    removeCls(cls) {
        this.renderer.removeClass(this.el.nativeElement, cls);
    }
}
ListItemDirective.focusedCls = 'igo-list-item-focused';
ListItemDirective.selectedCls = 'igo-list-item-selected';
ListItemDirective.disabledCls = 'igo-list-item-disabled';
ListItemDirective.ɵfac = function ListItemDirective_Factory(t) { return new (t || ListItemDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ListItemDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ListItemDirective, selectors: [["", "igoListItem", ""]], hostBindings: function ListItemDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ListItemDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { color: "color", focused: "focused", selected: "selected", disabled: "disabled" }, outputs: { beforeSelect: "beforeSelect", beforeFocus: "beforeFocus", beforeUnselect: "beforeUnselect", beforeUnfocus: "beforeUnfocus", beforeDisable: "beforeDisable", beforeEnable: "beforeEnable", focus: "focus", unfocus: "unfocus", select: "select", unselect: "unselect", disable: "disable", enable: "enable" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListItemDirective, [{
        type: Directive,
        args: [{
                selector: '[igoListItem]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { color: [{
            type: Input
        }], focused: [{
            type: Input
        }], selected: [{
            type: Input
        }], disabled: [{
            type: Input
        }], beforeSelect: [{
            type: Output
        }], beforeFocus: [{
            type: Output
        }], beforeUnselect: [{
            type: Output
        }], beforeUnfocus: [{
            type: Output
        }], beforeDisable: [{
            type: Output
        }], beforeEnable: [{
            type: Output
        }], focus: [{
            type: Output
        }], unfocus: [{
            type: Output
        }], select: [{
            type: Output
        }], unselect: [{
            type: Output
        }], disable: [{
            type: Output
        }], enable: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();

const _c0$4 = function (a0) { return { "selectable": a0 }; };
const _c1$2 = ["*"];
class ListComponent {
    constructor(el) {
        this.el = el;
        this._navigation = true;
        this._selection = true;
        this.subscriptions = [];
    }
    get navigation() {
        return this._navigation;
    }
    set navigation(value) {
        this._navigation = value;
    }
    get selection() {
        return this._selection;
    }
    set selection(value) {
        this._selection = value;
    }
    get selectedItem() {
        return this._selectedItem;
    }
    set selectedItem(value) {
        this.focusedItem = value;
        this._selectedItem = value;
    }
    get focusedItem() {
        return this._focusedItem;
    }
    set focusedItem(value) {
        this._focusedItem = value;
    }
    handleKeyboardEvent(event) {
        // It would be nice to be able to unsubscribe to the event
        // completely but until ES7 this won't be possible because
        // document events are not observables
        if (this.navigationEnabled) {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                event.preventDefault();
                this.navigate(event.key);
            }
            else if (event.key === 'Enter') {
                this.select(this.focusedItem);
            }
        }
    }
    ngOnInit() {
        this.enableNavigation();
    }
    ngAfterViewInit() {
        if (this.listItems.length) {
            this.init();
        }
        this.listItems$$ = this.listItems.changes.subscribe((items) => this.init());
    }
    ngOnDestroy() {
        this.listItems$$.unsubscribe();
    }
    focus(item) {
        if (!this.selection) {
            return;
        }
        this.unfocus();
        // We need to make this check because dynamic
        // lists such as in the search results list may fail
        if (item !== undefined) {
            item.focused = true;
        }
    }
    unfocus() {
        if (this.focusedItem !== undefined) {
            this.focusedItem.focused = false;
        }
        this.focusedItem = undefined;
    }
    focusNext() {
        const items = this.listItems.toArray();
        let item;
        const igoList = this.el.nativeElement;
        let disabled = true;
        let index = this.getFocusedIndex();
        if (index === undefined) {
            index = -1;
        }
        while (disabled && index < items.length - 1) {
            index += 1;
            item = items[index];
            disabled = item.disabled;
        }
        if (item !== undefined) {
            this.focus(item);
        }
        if (!items[index + 1]) {
            igoList.scrollTop = igoList.scrollHeight - igoList.clientHeight;
            return;
        }
        if (item !== undefined && !this.isScrolledIntoView(item.el.nativeElement)) {
            igoList.scrollTop =
                item.el.nativeElement.offsetTop +
                    item.el.nativeElement.children[0].offsetHeight -
                    igoList.clientHeight;
        }
    }
    focusPrevious() {
        const items = this.listItems.toArray();
        let item;
        const igoList = this.el.nativeElement;
        let disabled = true;
        let index = this.getFocusedIndex();
        while (disabled && index > 0) {
            index -= 1;
            item = items[index];
            disabled = item.disabled;
        }
        if (item !== undefined) {
            this.focus(item);
        }
        if (!items[index - 1]) {
            igoList.scrollTop = 0;
            return;
        }
        if (item !== undefined && !this.isScrolledIntoView(item.el.nativeElement)) {
            const padding = 3;
            igoList.scrollTop = item.el.nativeElement.offsetTop - padding;
        }
    }
    select(item) {
        if (!this.selection) {
            return;
        }
        this.unselect();
        if (item !== undefined) {
            item.selected = true;
        }
    }
    unselect() {
        this.unfocus();
        if (this.selectedItem !== undefined) {
            this.selectedItem.selected = false;
        }
        this.selectedItem = undefined;
    }
    enableNavigation() {
        if (this.navigation) {
            this.navigationEnabled = true;
        }
    }
    disableNavigation() {
        this.navigationEnabled = false;
    }
    scrollToItem(item) {
        this.el.nativeElement.scrollTop = item.getOffsetTop();
    }
    isScrolledIntoView(elem) {
        const docViewTop = this.el.nativeElement.scrollTop + this.el.nativeElement.offsetTop;
        const docViewBottom = docViewTop + this.el.nativeElement.clientHeight;
        const elemTop = elem.offsetTop;
        const elemBottom = elemTop + elem.children[0].offsetHeight;
        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
    init() {
        this.subscribe();
        this.selectedItem = this.findSelectedItem();
        this.focusedItem = this.findFocusedItem();
        this.enableNavigation();
    }
    subscribe() {
        this.unsubscribe();
        this.listItems.toArray().forEach(item => {
            this.subscriptions.push(item.beforeSelect.subscribe((item2) => this.handleItemBeforeSelect(item2)));
            this.subscriptions.push(item.select.subscribe((item2) => this.handleItemSelect(item2)));
            this.subscriptions.push(item.beforeFocus.subscribe((item2) => this.handleItemBeforeFocus(item2)));
            this.subscriptions.push(item.focus.subscribe((item2) => this.handleItemFocus(item2)));
        }, this);
    }
    unsubscribe() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
        this.subscriptions = [];
    }
    handleItemBeforeFocus(item) {
        if (item !== this.focusedItem) {
            this.unfocus();
        }
    }
    handleItemFocus(item) {
        this.focusedItem = item;
    }
    handleItemBeforeSelect(item) {
        if (item !== this.focusedItem) {
            this.unselect();
        }
    }
    handleItemSelect(item) {
        this.selectedItem = item;
    }
    findSelectedItem() {
        return this.listItems.toArray().find(item => item.selected);
    }
    findFocusedItem() {
        return this.listItems.toArray().find(item => item.focused);
    }
    getFocusedIndex() {
        return this.listItems
            .toArray()
            .findIndex(item => item === this.focusedItem);
    }
    navigate(key) {
        switch (key) {
            case 'ArrowUp':
                this.focusPrevious();
                break;
            case 'ArrowDown':
                this.focusNext();
                break;
            default:
                break;
        }
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["igo-list"]], contentQueries: function ListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, ListItemDirective, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listItems = _t);
    } }, hostBindings: function ListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function ListComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, i0.ɵɵresolveDocument)("enter", function ListComponent_enter_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { navigation: "navigation", selection: "selection" }, ngContentSelectors: _c1$2, decls: 2, vars: 3, consts: [["igoClickout", "", 3, "ngClass", "clickout", "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "mat-list", 0);
        i0.ɵɵlistener("clickout", function ListComponent_Template_mat_list_clickout_0_listener() { return ctx.disableNavigation(); })("click", function ListComponent_Template_mat_list_click_0_listener() { return ctx.enableNavigation(); });
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c0$4, ctx.selection));
    } }, directives: [i1$6.MatList, ClickoutDirective, i1$1.NgClass], styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:auto;position:relative}mat-list[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]{position:static}[_nghost-%COMP%]     .mat-list .mat-list-item .mat-list-text>*{white-space:normal;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;max-height:36px;line-height:18px;-webkit-box-orient:vertical;-webkit-line-clamp:2}[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-item-avatar .mat-list-item-content{display:-webkit-flex;height:46px;padding:3px}[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-item-avatar{height:46px}[_nghost-%COMP%]     .mat-list   igo-collapsible>.mat-list-item>.mat-list-item-content>.mat-list-text>.mat-line{font-weight:bold;opacity:.9}[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-item-avatar .mat-list-item-content>mat-icon{padding:8px}[_nghost-%COMP%]     [igolistitem] mat-list-item [mat-list-avatar]{height:auto;width:40px}[_nghost-%COMP%]   mat-list.selectable[_ngcontent-%COMP%]     [igolistitem]:not(.igo-list-item-disabled) mat-list-item:hover{cursor:pointer}[_nghost-%COMP%]     [igolistitem]:focus{outline:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'igo-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { navigation: [{
            type: Input
        }], selection: [{
            type: Input
        }], listItems: [{
            type: ContentChildren,
            args: [ListItemDirective, { descendants: true }]
        }], handleKeyboardEvent: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }, {
            type: HostListener,
            args: ['document:enter', ['$event']]
        }] }); })();

class IgoListModule {
    static forRoot() {
        return {
            ngModule: IgoListModule,
            providers: []
        };
    }
}
IgoListModule.ɵfac = function IgoListModule_Factory(t) { return new (t || IgoListModule)(); };
IgoListModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoListModule });
IgoListModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule, MatListModule, IgoClickoutModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatIconModule, MatListModule, IgoClickoutModule],
                declarations: [ListItemDirective, ListComponent],
                exports: [ListItemDirective, ListComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoListModule, { declarations: [ListItemDirective, ListComponent], imports: [CommonModule, MatIconModule, MatListModule, IgoClickoutModule], exports: [ListItemDirective, ListComponent] }); })();

function PanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵprojection(2, 1);
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵtext(4);
    i0.ɵɵprojection(5, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(6, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.title, " ");
} }
const _c0$3 = ["*", [["", "panelLeftButton", ""]], [["", "panelHeader", ""]], [["", "panelRightButton", ""]]];
const _c1$1 = ["*", "[panelLeftButton]", "[panelHeader]", "[panelRightButton]"];
class PanelComponent {
    constructor() {
        this._withHeader = true;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get withHeader() {
        return this._withHeader;
    }
    set withHeader(value) {
        this._withHeader = value;
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["igo-panel"]], hostVars: 2, hostBindings: function PanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("igo-panel-with-header", ctx.withHeader);
    } }, inputs: { title: "title", withHeader: "withHeader" }, ngContentSelectors: _c1$1, decls: 3, vars: 1, consts: [["class", "igo-panel-header mat-typography", "title", "", 4, "ngIf"], ["title", "", 1, "igo-panel-content"], ["title", "", 1, "igo-panel-header", "mat-typography"], [1, "igo-panel-title"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0$3);
        i0.ɵɵtemplate(0, PanelComponent_div_0_Template, 7, 1, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.withHeader);
    } }, directives: [i1$1.NgIf], styles: ["[_nghost-%COMP%]{display:block}.igo-panel-header[_ngcontent-%COMP%]{height:46px;padding:3px;text-align:center}.igo-panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;height:40px}.igo-panel-header[_ngcontent-%COMP%]     [panelleftbutton]{float:left;margin-right:-40px}.igo-panel-header[_ngcontent-%COMP%]     [panelrightbutton]{float:right}.igo-panel-content[_ngcontent-%COMP%]{overflow:auto}.igo-panel-with-header[_nghost-%COMP%]   .igo-panel-content[_ngcontent-%COMP%]{height:calc(100% - 46px)}[_nghost-%COMP%]:not(.igo-panel-with-header)   .igo-panel-content[_ngcontent-%COMP%]{height:100%}.igo-panel-title[_ngcontent-%COMP%]{display:block;width:calc(100% - 80px);margin-left:40px;height:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;line-height:40px;float:left;font-weight:bold;font-size:1.17em}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{
                selector: 'igo-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { title: [{
            type: Input
        }], withHeader: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.igo-panel-with-header']
        }] }); })();

class IgoPanelModule {
}
IgoPanelModule.ɵfac = function IgoPanelModule_Factory(t) { return new (t || IgoPanelModule)(); };
IgoPanelModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoPanelModule });
IgoPanelModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoPanelModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [PanelComponent],
                declarations: [PanelComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoPanelModule, { declarations: [PanelComponent], imports: [CommonModule], exports: [PanelComponent] }); })();

/**
 * <igoSidenavShim> directive.
 *
 * This directive prevents a material sidenav with mode="side"
 * from focusing an element after it's closed
 */
class SidenavShimDirective {
    constructor(component, renderer) {
        this.renderer = renderer;
    }
    onOpen() {
        this.focusedElement = document.activeElement;
    }
    onCloseStart() {
        const focusedElement = document.activeElement;
        if (focusedElement !== this.focusedElement) {
            this.blurElement = this.focusedElement;
        }
        else {
            this.blurElement = undefined;
        }
    }
    onClose() {
        if (this.blurElement) {
            this.renderer.selectRootElement(this.blurElement).blur();
        }
        this.blurElement = undefined;
        this.focusedElement = undefined;
    }
}
SidenavShimDirective.ɵfac = function SidenavShimDirective_Factory(t) { return new (t || SidenavShimDirective)(i0.ɵɵdirectiveInject(i1$9.MatSidenav, 2), i0.ɵɵdirectiveInject(i0.Renderer2)); };
SidenavShimDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SidenavShimDirective, selectors: [["", "igoSidenavShim", ""]], hostBindings: function SidenavShimDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("open", function SidenavShimDirective_open_HostBindingHandler($event) { return ctx.onOpen($event); })("close-start", function SidenavShimDirective_close_start_HostBindingHandler($event) { return ctx.onCloseStart($event); })("close", function SidenavShimDirective_close_HostBindingHandler($event) { return ctx.onClose($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavShimDirective, [{
        type: Directive,
        args: [{
                selector: '[igoSidenavShim]'
            }]
    }], function () { return [{ type: i1$9.MatSidenav, decorators: [{
                type: Self
            }] }, { type: i0.Renderer2 }]; }, { onOpen: [{
            type: HostListener,
            args: ['open', ['$event']]
        }], onCloseStart: [{
            type: HostListener,
            args: ['close-start', ['$event']]
        }], onClose: [{
            type: HostListener,
            args: ['close', ['$event']]
        }] }); })();

class IgoSidenavModule {
    static forRoot() {
        return {
            ngModule: IgoSidenavModule,
            providers: []
        };
    }
}
IgoSidenavModule.ɵfac = function IgoSidenavModule_Factory(t) { return new (t || IgoSidenavModule)(); };
IgoSidenavModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoSidenavModule });
IgoSidenavModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoSidenavModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [SidenavShimDirective],
                exports: [SidenavShimDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoSidenavModule, { declarations: [SidenavShimDirective], exports: [SidenavShimDirective] }); })();

const _c0$2 = function (a1) { return { "igo-spinner-container": true, "igo-spinner-shown": a1 }; };
class SpinnerComponent {
    constructor() {
        this.shown$ = new BehaviorSubject(false);
    }
    set shown(value) { this.shown$.next(value); }
    get shown() { return this.shown$.value; }
    show() {
        this.shown = true;
    }
    hide() {
        this.shown = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SpinnerComponent, selectors: [["igo-spinner"]], inputs: { shown: "shown" }, decls: 4, vars: 5, consts: [[3, "ngClass"], [1, "igo-spinner-background"], ["diameter", "40", "mode", "indeterminate"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵelement(2, "div", 1);
        i0.ɵɵelement(3, "mat-progress-spinner", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0$2, i0.ɵɵpipeBind1(1, 1, ctx.shown$)));
    } }, directives: [i1$1.NgClass, i2$4.MatProgressSpinner], pipes: [i1$1.AsyncPipe], styles: [".igo-spinner-container[_ngcontent-%COMP%]{display:none;pointer-events:none}.igo-spinner-container.igo-spinner-shown[_ngcontent-%COMP%]{display:block}mat-progress-spinner[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:50%}.igo-spinner-background[_ngcontent-%COMP%]{height:36px;width:36px;border-radius:50%;border:4px solid #ffffff;position:absolute;top:2px;left:2px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'igo-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return []; }, { shown: [{
            type: Input
        }] }); })();

/**
 * A directive to bind a SpinnerComponent to the activity service.
 * The activity service tracks any HTTP request and this directive
 * will display the spinner it's attached to when the activity counter
 * is greater than 0.
 */
class SpinnerActivityDirective {
    constructor(spinner, activityService) {
        this.spinner = spinner;
        this.activityService = activityService;
    }
    /**
     * Subscribe to the activity service counter and display the spinner
     * when it's is greater than 0.
     * @internal
     */
    ngOnInit() {
        this.counter$$ = this.activityService.counter$
            .pipe(debounceTime(50))
            .subscribe((count) => {
            count > 0 ? this.spinner.show() : this.spinner.hide();
        });
    }
    /**
     * Unsubcribe to the activity service counter.
     * @internal
     */
    ngOnDestroy() {
        this.counter$$.unsubscribe();
    }
}
SpinnerActivityDirective.ɵfac = function SpinnerActivityDirective_Factory(t) { return new (t || SpinnerActivityDirective)(i0.ɵɵdirectiveInject(SpinnerComponent, 2), i0.ɵɵdirectiveInject(i1$2.ActivityService)); };
SpinnerActivityDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SpinnerActivityDirective, selectors: [["", "igoSpinnerActivity", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpinnerActivityDirective, [{
        type: Directive,
        args: [{
                selector: '[igoSpinnerActivity]'
            }]
    }], function () { return [{ type: SpinnerComponent, decorators: [{
                type: Self
            }] }, { type: i1$2.ActivityService }]; }, null); })();

class IgoSpinnerModule {
}
IgoSpinnerModule.ɵfac = function IgoSpinnerModule_Factory(t) { return new (t || IgoSpinnerModule)(); };
IgoSpinnerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoSpinnerModule });
IgoSpinnerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatProgressSpinnerModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoSpinnerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatProgressSpinnerModule],
                declarations: [SpinnerActivityDirective, SpinnerComponent],
                exports: [SpinnerActivityDirective, SpinnerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoSpinnerModule, { declarations: [SpinnerActivityDirective, SpinnerComponent], imports: [CommonModule, MatProgressSpinnerModule], exports: [SpinnerActivityDirective, SpinnerComponent] }); })();

class TableDataSource extends DataSource {
    constructor(_database, _model, _sort) {
        super();
        this._database = _database;
        this._model = _model;
        this._sort = _sort;
        this._filterChange = new BehaviorSubject('');
    }
    get filter() {
        return this._filterChange.value;
    }
    set filter(filter) {
        this._filterChange.next(filter);
    }
    // Connect function called by the table to retrieve one stream containing
    // the data to render.
    connect() {
        if (!this._database) {
            return merge([]);
        }
        const displayDataChanges = [
            this._database.dataChange,
            this._filterChange,
            this._sort.sortChange
        ];
        return merge(...displayDataChanges).pipe(map(() => {
            return this.getFilteredData(this._database.data);
        }), map(data => {
            return this.getSortedData(data);
        }));
    }
    disconnect() { }
    getFilteredData(data) {
        if (!this.filter) {
            return data;
        }
        return data.slice().filter((item) => {
            const searchStr = this._model.columns
                .filter(c => c.filterable)
                .map(c => ObjectUtils.resolve(item, c.name))
                .join(' ')
                .toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });
    }
    getSortedData(data) {
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const propertyA = ObjectUtils.resolve(a, this._sort.active);
            const propertyB = ObjectUtils.resolve(b, this._sort.active);
            return ObjectUtils.naturalCompare(propertyB, propertyA, this._sort.direction);
        });
    }
}

var TableActionColor;
(function (TableActionColor) {
    TableActionColor[TableActionColor["primary"] = 0] = "primary";
    TableActionColor[TableActionColor["accent"] = 1] = "accent";
    TableActionColor[TableActionColor["warn"] = 2] = "warn";
})(TableActionColor || (TableActionColor = {}));

const _c0$1 = ["filter"];
function TableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "mat-form-field", 13);
    i0.ɵɵelement(2, "input", 14, 15);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(4, 1, "igo.common.table.filter"));
} }
function TableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵelementStart(1, "mat-checkbox", 17);
    i0.ɵɵlistener("change", function TableComponent_th_6_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return $event ? ctx_r10.masterToggle() : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
} }
function TableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵelementStart(1, "mat-checkbox", 19);
    i0.ɵɵlistener("click", function TableComponent_td_7_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function TableComponent_td_7_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r15); const row_r12 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(); return $event ? ctx_r14.selection.toggle(row_r12) : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r3.selection.isSelected(row_r12));
} }
function TableComponent_ng_container_8_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r16 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r16.title, " ");
} }
function TableComponent_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_8_ng_container_1_th_1_Template, 2, 1, "th", 24);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_ng_container_8_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r16 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r16.title, " ");
} }
function TableComponent_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_8_ng_container_2_th_1_Template, 2, 1, "th", 6);
    i0.ɵɵelementContainerEnd();
} }
const _c1 = function () { return {}; };
function TableComponent_ng_container_8_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    const column_r16 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r26 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r26.model.cellClassFunc ? ctx_r26.model.cellClassFunc(row_r27, column_r16) : i0.ɵɵpureFunction0(2, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26.getValue(row_r27, column_r16.name), " ");
} }
function TableComponent_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_8_ng_container_3_td_1_Template, 2, 3, "td", 26);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_ng_container_8_ng_template_4_td_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 29);
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    const column_r16 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r29 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r29.model.cellClassFunc ? ctx_r29.model.cellClassFunc(row_r30, column_r16) : i0.ɵɵpureFunction0(2, _c1))("innerHTML", ctx_r29.getValue(row_r30, column_r16.name), i0.ɵɵsanitizeHtml);
} }
function TableComponent_ng_container_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TableComponent_ng_container_8_ng_template_4_td_0_Template, 1, 3, "td", 28);
} }
function TableComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 20);
    i0.ɵɵtemplate(1, TableComponent_ng_container_8_ng_container_1_Template, 2, 0, "ng-container", 21);
    i0.ɵɵtemplate(2, TableComponent_ng_container_8_ng_container_2_Template, 2, 0, "ng-container", 21);
    i0.ɵɵtemplate(3, TableComponent_ng_container_8_ng_container_3_Template, 2, 0, "ng-container", 22);
    i0.ɵɵtemplate(4, TableComponent_ng_container_8_ng_template_4_Template, 1, 0, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r16 = ctx.$implicit;
    const _r20 = i0.ɵɵreference(5);
    i0.ɵɵproperty("matColumnDef", column_r16.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r16.sortable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r16.sortable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r16.html)("ngIfElse", _r20);
} }
function TableComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 16);
} }
function TableComponent_td_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function TableComponent_td_11_button_1_Template_button_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r36); const action_r34 = restoredCtx.$implicit; const row_r32 = i0.ɵɵnextContext().$implicit; const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.handleClickAction($event, action_r34, row_r32); });
    i0.ɵɵelement(1, "mat-icon", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r34 = ctx.$implicit;
    const ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r33.getActionColor(action_r34.color));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", action_r34.icon);
} }
function TableComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtemplate(1, TableComponent_td_11_button_1_Template, 2, 2, "button", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.model.actions);
} }
function TableComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 33);
} }
function TableComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 34);
    i0.ɵɵlistener("click", function TableComponent_tr_13_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r40); const row_r38 = restoredCtx.$implicit; const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.selection.toggle(row_r38); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r8.model.rowClassFunc ? ctx_r8.model.rowClassFunc(row_r38) : i0.ɵɵpureFunction0(1, _c1));
} }
class TableComponent {
    constructor() {
        this._hasFIlterInput = true;
        this.selection = new SelectionModel(true, []);
        this.select = new EventEmitter();
    }
    get database() {
        return this._database;
    }
    set database(value) {
        this._database = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get hasFilterInput() {
        return this._hasFIlterInput;
    }
    set hasFilterInput(value) {
        this._hasFIlterInput = value;
    }
    ngOnInit() {
        this.dataSource = new TableDataSource(this.database, this.model, this.sort);
        if (this.model) {
            this.displayedColumns = this.model.columns
                .filter(c => c.displayed !== false)
                .map(c => c.name);
            if (this.model.selectionCheckbox) {
                this.displayedColumns.unshift('selectionCheckbox');
            }
            if (this.model.actions && this.model.actions.length) {
                this.displayedColumns.push('action');
            }
        }
        this.selection.changed.subscribe(e => this.select.emit(e));
    }
    ngAfterViewInit() {
        if (this.filter) {
            fromEvent(this.filter.nativeElement, 'keyup')
                .pipe(debounceTime(150), distinctUntilChanged())
                .subscribe(() => {
                if (!this.dataSource) {
                    return;
                }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
        }
    }
    ngOnChanges(change) {
        if (change.database) {
            this.dataSource = new TableDataSource(this.database, this.model, this.sort);
            this.selection.clear();
        }
    }
    getActionColor(colorId) {
        return TableActionColor[colorId];
    }
    getValue(row, key) {
        return ObjectUtils.resolve(row, key);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.database.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.database.data.forEach(row => this.selection.select(row));
    }
    handleClickAction(event, action, row) {
        event.stopPropagation();
        action.click(row);
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["igo-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 5);
        i0.ɵɵviewQuery(MatSort, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.filter = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, inputs: { database: "database", model: "model", hasFilterInput: "hasFilterInput" }, outputs: { select: "select" }, features: [i0.ɵɵNgOnChangesFeature], decls: 14, vars: 5, consts: [[1, "table-box"], ["class", "table-header", 4, "ngIf"], [1, "table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "selectionCheckbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], [1, "table-header"], ["floatPlaceholder", "never"], ["matInput", "", 3, "placeholder"], ["filter", ""], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], [3, "matColumnDef"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["cellHTML", ""], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", 4, "matCellDef"], ["mat-cell", "", 1, "mat-cell-text", 3, "ngClass"], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", "innerHTML", 4, "matCellDef"], ["mat-cell", "", 1, "mat-cell-text", 3, "ngClass", "innerHTML"], ["mat-mini-fab", "", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", 3, "color", "click"], [3, "svgIcon"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TableComponent_div_1_Template, 5, 3, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "table", 3, 4);
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableComponent_th_6_Template, 2, 2, "th", 6);
        i0.ɵɵtemplate(7, TableComponent_td_7_Template, 2, 1, "td", 7);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(8, TableComponent_ng_container_8_Template, 6, 5, "ng-container", 8);
        i0.ɵɵelementContainerStart(9, 9);
        i0.ɵɵtemplate(10, TableComponent_th_10_Template, 1, 0, "th", 6);
        i0.ɵɵtemplate(11, TableComponent_td_11_Template, 2, 1, "td", 7);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(12, TableComponent_tr_12_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(13, TableComponent_tr_13_Template, 1, 2, "tr", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasFilterInput);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.model.columns);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1$1.NgIf, i4.MatTable, i5.MatSort, i4.MatColumnDef, i4.MatHeaderCellDef, i4.MatCellDef, i1$1.NgForOf, i4.MatHeaderRowDef, i4.MatRowDef, i1.MatFormField, i2$3.MatInput, i4.MatHeaderCell, i7.MatCheckbox, i4.MatCell, i5.MatSortHeader, i1$1.NgClass, i4$1.MatButton, i5$1.MatIcon, i4.MatHeaderRow, i4.MatRow], pipes: [i6$1.TranslatePipe], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:block}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:auto;flex:1 1 auto}.table-box[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.table-header[_ngcontent-%COMP%]{min-height:64px;max-width:500px;display:flex;flex:0 1 auto;align-items:baseline;padding:8px 24px 0;font-size:20px;justify-content:space-between}tr[mat-header-row][_ngcontent-%COMP%], tr[mat-row][_ngcontent-%COMP%]{height:60px}.mat-cell-text[_ngcontent-%COMP%]{overflow:hidden;word-wrap:break-word}td[mat-cell][_ngcontent-%COMP%]{padding-right:15px}th.mat-header-cell[_ngcontent-%COMP%]{padding-right:5px}button[_ngcontent-%COMP%]{margin-right:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{
                selector: 'igo-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss']
            }]
    }], null, { database: [{
            type: Input
        }], model: [{
            type: Input
        }], hasFilterInput: [{
            type: Input
        }], select: [{
            type: Output
        }], filter: [{
            type: ViewChild,
            args: ['filter']
        }], sort: [{
            type: ViewChild,
            args: [MatSort, { static: true }]
        }] }); })();

class IgoTableModule {
    static forRoot() {
        return {
            ngModule: IgoTableModule,
            providers: []
        };
    }
}
IgoTableModule.ɵfac = function IgoTableModule_Factory(t) { return new (t || IgoTableModule)(); };
IgoTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoTableModule });
IgoTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            CdkTableModule,
            MatIconModule,
            MatButtonModule,
            MatTableModule,
            MatFormFieldModule,
            MatInputModule,
            MatSortModule,
            MatCheckboxModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    CdkTableModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTableModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSortModule,
                    MatCheckboxModule,
                    IgoLanguageModule
                ],
                declarations: [TableComponent],
                exports: [TableComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoTableModule, { declarations: [TableComponent], imports: [CommonModule,
        FormsModule,
        CdkTableModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatCheckboxModule,
        IgoLanguageModule], exports: [TableComponent] }); })();

/**
 * The class is a specialized version of an EntityStore that stores
 * actions.
 */
class ActionStore extends EntityStore {
}

var ToolboxColor;
(function (ToolboxColor) {
    ToolboxColor["White"] = "white";
    ToolboxColor["Grey"] = "grey";
    ToolboxColor["Primary"] = "primary";
})(ToolboxColor || (ToolboxColor = {}));

function toolSlideInOut(speed = '300ms', type = 'ease-in-out') {
    return trigger('toolSlideInOut', [
        state('enter', style({
            transform: 'translate3d(0, 0, 0)'
        })),
        transition('void => enter', animate(speed + ' ' + type))
    ]);
}

function ToolboxComponent_igo_actionbar_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-actionbar", 2);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("store", ctx_r0.actionStore)("withIcon", true)("withTitle", i0.ɵɵpipeBind1(1, 6, ctx_r0.toolbarWithTitle$))("withTooltip", i0.ɵɵpipeBind1(2, 8, ctx_r0.toolbarWithTitle$) === false)("scrollActive", i0.ɵɵpipeBind1(3, 10, ctx_r0.toolbarWithTitle$))("horizontal", false);
} }
const _c0 = function (a0, a1) { return { "igo-tool-container-with-toolbar": a0, "igo-tool-container-with-animation": a1 }; };
function ToolboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵlistener("@toolSlideInOut.start", function ToolboxComponent_div_2_Template_div_animation_toolSlideInOut_start_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onAnimationStart(); })("@toolSlideInOut.done", function ToolboxComponent_div_2_Template_div_animation_toolSlideInOut_done_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onAnimationComplete(); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelement(2, "igo-dynamic-outlet", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tool_r2 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c0, !ctx_r1.actionStore.empty, ctx_r1.animate))("@toolSlideInOut", i0.ɵɵpipeBind1(1, 4, ctx_r1.animation$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("component", tool_r2.component)("inputs", ctx_r1.getToolInputs(tool_r2));
} }
class ToolboxComponent {
    constructor() {
        /**
         * Observable of the active tool
         */
        this.activeTool$ = new BehaviorSubject(undefined);
        /**
         * Store of actions that toggle tools
         */
        this.actionStore = new ActionStore([]);
        /**
         * Observable of he anmation state
         */
        this.animation$ = new BehaviorSubject('none');
        /**
         * Observable of the toolbar
         */
        this.toolbar$ = new BehaviorSubject([]);
        /**
         * Whether the Toolbar should display actions' titles
         */
        this.toolbarWithTitle$ = this.activeTool$.pipe(map((tool) => tool === undefined));
        /**
         * Observable of the ongoing animation. This is useful when
         * multiple animations are triggered at once i.e. when the user clicks
         * too fast on different actions
         */
        this.animating$ = new BehaviorSubject(false);
        /**
         * Whether the toolbox should animate the first tool entering
         */
        this.animate = false;
        /**
         * Color of Toolbox
         */
        this.color = ToolboxColor.White;
    }
    /**
     * @ignore
     */
    get classColorGrey() {
        return this.color === ToolboxColor.Grey;
    }
    /**
     * @ignore
     */
    get classColorPrimary() {
        return this.color === ToolboxColor.Primary;
    }
    /**
     * Initialize the toolbar and subscribe to the active tool
     * @internal
     */
    ngOnInit() {
        this.toolbar$$ = this.toolbox.toolbar$.subscribe((toolbar) => this.onToolbarChange(toolbar));
        this.activeTool$$ = this.toolbox.activeTool$.subscribe((tool) => this.onActiveToolChange(tool));
    }
    /**
     * Unsubscribe to the active tool and destroy the action store
     * @internal
     */
    ngOnDestroy() {
        this.toolbar$$.unsubscribe();
        this.activeTool$$.unsubscribe();
        this.actionStore.destroy();
    }
    /**
     * Track the starting animation
     * @internal
     */
    onAnimationStart() {
        this.animating$.next(true);
    }
    /**
     * Untrack the completed animation
     * @internal
     */
    onAnimationComplete() {
        this.animating$.next(false);
    }
    /**
     * Return a tool's inputs
     * @param tool Tool
     * @returns Tool inputs
     * @internal
     */
    getToolInputs(tool) {
        return tool.options || {};
    }
    /**
     * Initialize an action store
     * @param toolbar Toolbar
     */
    onToolbarChange(toolbar) {
        this.setToolbar(toolbar);
    }
    /**
     * Activate a tool and trigger an animation or not
     * @param tool Tool to activate
     */
    onActiveToolChange(tool) {
        if (!this.animate) {
            this.setActiveTool(tool);
            return;
        }
        this.onAnimate(() => this.setActiveTool(tool));
    }
    /**
     * Set the active tool
     * @param tool Tool to activate
     */
    setActiveTool(tool) {
        if (tool === undefined) {
            this.actionStore.state.updateAll({ active: false });
        }
        else {
            const action = this.actionStore.get(tool.name);
            if (action !== undefined) {
                this.actionStore.state.update(action, { active: true }, true);
            }
        }
        this.activeTool$.next(tool);
        if (this.animate) {
            this.animation$.next('enter');
        }
    }
    /**
     * Initialize the toolbar
     */
    setToolbar(toolbar) {
        const actions = toolbar.reduce((acc, toolName) => {
            const tool = this.toolbox.getTool(toolName);
            if (tool === undefined) {
                return acc;
            }
            acc.push({
                id: tool.name,
                title: tool.title,
                icon: tool.icon,
                // iconImage: tool.iconImage,
                tooltip: tool.tooltip,
                args: [tool, this.toolbox],
                handler: (_tool, _toolbox) => {
                    _toolbox.activateTool(_tool.name);
                },
                ngClass: (_tool, _toolbox) => {
                    return this.toolbox.activeTool$.pipe(map((activeTool) => {
                        let toolActivated = false;
                        if (activeTool !== undefined && _tool.name === activeTool.name) {
                            toolActivated = true;
                        }
                        let childrenToolActivated = false;
                        if (activeTool !== undefined &&
                            _tool.name === activeTool.parent) {
                            childrenToolActivated = true;
                        }
                        return {
                            'tool-activated': toolActivated,
                            'children-tool-activated': childrenToolActivated
                        };
                    }));
                }
            });
            return acc;
        }, []);
        this.actionStore.load(actions);
        this.toolbar$.next(toolbar);
    }
    /**
     * Observe the ongoing animation and ignore any incoming animation
     * while one is still ongoing.
     * @param callback Callback to execute when the animation completes
     */
    onAnimate(callback) {
        this.unAnimate();
        this.animating$$ = this.animating$.subscribe((animation) => {
            if (!animation) {
                callback.call(this);
                this.unAnimate();
            }
        });
    }
    /**
     * Stop observing an animation when it's complete
     */
    unAnimate() {
        if (this.animating$$) {
            this.animating$$.unsubscribe();
        }
    }
}
ToolboxComponent.ɵfac = function ToolboxComponent_Factory(t) { return new (t || ToolboxComponent)(); };
ToolboxComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolboxComponent, selectors: [["igo-toolbox"]], hostVars: 4, hostBindings: function ToolboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("color-grey", ctx.classColorGrey)("color-primary", ctx.classColorPrimary);
    } }, inputs: { toolbox: "toolbox", animate: "animate", color: "color" }, decls: 4, vars: 6, consts: [[3, "store", "withIcon", "withTitle", "withTooltip", "scrollActive", "horizontal", 4, "ngIf"], ["class", "igo-tool-container", 3, "ngClass", 4, "ngIf"], [3, "store", "withIcon", "withTitle", "withTooltip", "scrollActive", "horizontal"], [1, "igo-tool-container", 3, "ngClass"], [3, "component", "inputs"]], template: function ToolboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ToolboxComponent_igo_actionbar_0_Template, 4, 12, "igo-actionbar", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, ToolboxComponent_div_2_Template, 3, 9, "div", 1);
        i0.ɵɵpipe(3, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.toolbar$).length > 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 4, ctx.activeTool$));
    } }, directives: [i1$1.NgIf, ActionbarComponent, i1$1.NgClass, DynamicOutletComponent], pipes: [i1$1.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;position:relative;overflow:hidden;width:100%;height:100%}.igo-tool-container[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}.igo-tool-container-with-animation[_ngcontent-%COMP%]{transform:translate(100%)}.igo-tool-container-with-toolbar[_ngcontent-%COMP%]{left:50px}igo-actionbar[_ngcontent-%COMP%]{height:100%}igo-actionbar.with-title[_ngcontent-%COMP%]{width:100%;overflow:auto}igo-actionbar[_ngcontent-%COMP%]:not(.with-title){width:48px;overflow:hidden;-o-box-shadow:2px 0px 2px 0px #dddddd;box-shadow:2px 0 2px #ddd}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){igo-actionbar[_ngcontent-%COMP%]:not(.with-title){overflow:auto}}igo-dynamic-outlet[_ngcontent-%COMP%]{overflow:auto}"], data: { animation: [toolSlideInOut()] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolboxComponent, [{
        type: Component,
        args: [{
                selector: 'igo-toolbox',
                templateUrl: 'toolbox.component.html',
                styleUrls: ['toolbox.component.scss'],
                animations: [toolSlideInOut()],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { toolbox: [{
            type: Input
        }], animate: [{
            type: Input
        }], color: [{
            type: Input
        }], classColorGrey: [{
            type: HostBinding,
            args: ['class.color-grey']
        }], classColorPrimary: [{
            type: HostBinding,
            args: ['class.color-primary']
        }] }); })();

/**
 * @ignore
 */
class IgoToolboxModule {
}
IgoToolboxModule.ɵfac = function IgoToolboxModule_Factory(t) { return new (t || IgoToolboxModule)(); };
IgoToolboxModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoToolboxModule });
IgoToolboxModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoActionModule,
            IgoDynamicComponentModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoToolboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoActionModule,
                    IgoDynamicComponentModule
                ],
                exports: [
                    ToolboxComponent
                ],
                declarations: [
                    ToolboxComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoToolboxModule, { declarations: [ToolboxComponent], imports: [CommonModule,
        IgoActionModule,
        IgoDynamicComponentModule], exports: [ToolboxComponent] }); })();

class IgoToolModule {
    static forRoot() {
        return {
            ngModule: IgoToolModule,
            providers: [
                ToolService
            ]
        };
    }
}
IgoToolModule.ɵfac = function IgoToolModule_Factory(t) { return new (t || IgoToolModule)(); };
IgoToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoToolModule });
IgoToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ], IgoToolboxModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoToolModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    IgoToolboxModule
                ],
                declarations: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoToolModule, { imports: [CommonModule], exports: [IgoToolboxModule] }); })();

function WidgetOutletComponent_igo_dynamic_outlet_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-dynamic-outlet", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("component", ctx_r0.widget)("inputs", ctx_r0.inputs)("subscribers", ctx_r0.getEffectiveSubscribers());
} }
/**
 * This component dynamically renders a widget. It also subscribes
 * to the widget's 'cancel' and 'complete' events and destroys it
 * when any of those event is emitted.
 */
class WidgetOutletComponent {
    constructor() {
        /**
         * Widget subscribers to 'cancel' and 'complete'
         * @internal
         */
        this.baseSubscribers = {
            cancel: (event) => this.onCancel(event),
            complete: (event) => this.onComplete(event)
        };
        /**
         * Widget subscribers
         */
        this.subscribers = {};
        /**
         * Event emitted when the widget emits 'complete'
         */
        this.complete = new EventEmitter();
        /**
         * Event emitted when the widget emits 'cancel'
         */
        this.cancel = new EventEmitter();
    }
    /**
     * Destroy the current widget and all it's inner subscriptions
     * @internal
     */
    ngOnDestroy() {
        this.destroyWidget();
    }
    /**
     * Get the effective subscribers. That means a combination of the base
     * subscribers and any subscriber given as input.
     * @returns Combined subscribers
     * @internal
     */
    getEffectiveSubscribers() {
        const subscribers = Object.assign({}, this.subscribers);
        // Base subscribers
        Object.keys(this.baseSubscribers).forEach((key) => {
            const subscriber = subscribers[key];
            const baseSubscriber = this.baseSubscribers[key];
            if (subscriber !== undefined) {
                subscribers[key] = (event) => {
                    subscriber(event);
                    baseSubscriber(event);
                };
            }
            else {
                subscribers[key] = baseSubscriber;
            }
        });
        return subscribers;
    }
    /**
     * When the widget emits 'cancel', propagate that event and destroy
     * the widget
     */
    onCancel(event) {
        this.cancel.emit(event);
        this.destroyWidget();
    }
    /**
     * When the widget emits 'complete', propagate that event and destroy
     * the widget
     */
    onComplete(event) {
        this.complete.emit(event);
        this.destroyWidget();
    }
    /**
     * Destroy the current widget
     */
    destroyWidget() {
        if (this.widget !== undefined) {
            this.widget.destroy();
        }
        this.widget = undefined;
    }
}
WidgetOutletComponent.ɵfac = function WidgetOutletComponent_Factory(t) { return new (t || WidgetOutletComponent)(); };
WidgetOutletComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WidgetOutletComponent, selectors: [["igo-widget-outlet"]], inputs: { widget: "widget", inputs: "inputs", subscribers: "subscribers" }, outputs: { complete: "complete", cancel: "cancel" }, decls: 1, vars: 1, consts: [[3, "component", "inputs", "subscribers", 4, "ngIf"], [3, "component", "inputs", "subscribers"]], template: function WidgetOutletComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, WidgetOutletComponent_igo_dynamic_outlet_0_Template, 1, 3, "igo-dynamic-outlet", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.widget);
    } }, directives: [i1$1.NgIf, DynamicOutletComponent], styles: ["igo-dynamic-outlet[_ngcontent-%COMP%]{height:100%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetOutletComponent, [{
        type: Component,
        args: [{
                selector: 'igo-widget-outlet',
                templateUrl: './widget-outlet.component.html',
                styleUrls: ['./widget-outlet.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { widget: [{
            type: Input
        }], inputs: [{
            type: Input
        }], subscribers: [{
            type: Input
        }], complete: [{
            type: Output
        }], cancel: [{
            type: Output
        }] }); })();

/**
 * @ignore
 */
class IgoWidgetOutletModule {
}
IgoWidgetOutletModule.ɵfac = function IgoWidgetOutletModule_Factory(t) { return new (t || IgoWidgetOutletModule)(); };
IgoWidgetOutletModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoWidgetOutletModule });
IgoWidgetOutletModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoDynamicComponentModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoWidgetOutletModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoDynamicComponentModule
                ],
                exports: [
                    WidgetOutletComponent
                ],
                declarations: [
                    WidgetOutletComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoWidgetOutletModule, { declarations: [WidgetOutletComponent], imports: [CommonModule,
        IgoDynamicComponentModule], exports: [WidgetOutletComponent] }); })();

class WidgetService {
    constructor(dynamicComponentService) {
        this.dynamicComponentService = dynamicComponentService;
    }
    create(widgetCls) {
        return this.dynamicComponentService.create(widgetCls);
    }
}
WidgetService.ɵfac = function WidgetService_Factory(t) { return new (t || WidgetService)(i0.ɵɵinject(DynamicComponentService)); };
WidgetService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WidgetService, factory: WidgetService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: DynamicComponentService }]; }, null); })();

class IgoWidgetModule {
}
IgoWidgetModule.ɵfac = function IgoWidgetModule_Factory(t) { return new (t || IgoWidgetModule)(); };
IgoWidgetModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoWidgetModule });
IgoWidgetModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        WidgetService
    ], imports: [[
            CommonModule,
            IgoWidgetOutletModule
        ], IgoWidgetOutletModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoWidgetModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoWidgetOutletModule
                ],
                exports: [
                    IgoWidgetOutletModule
                ],
                declarations: [],
                providers: [
                    WidgetService
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoWidgetModule, { imports: [CommonModule,
        IgoWidgetOutletModule], exports: [IgoWidgetOutletModule] }); })();

/**
 * Drop list that activates the selected workspace emit an event.
 */
class WorkspaceSelectorComponent {
    constructor() {
        /**
         * Event emitted when an workspace is selected or unselected
         */
        this.selectedChange = new EventEmitter();
    }
    /**
     * @internal
     */
    getWorkspaceTitle(workspace) {
        return getEntityTitle(workspace);
    }
    /**
     * When an workspace is manually selected, select it into the
     * store and emit an event.
     * @internal
     * @param event The selection change event
     */
    onSelectedChange(event) {
        const workspace = event.value;
        this.store.activateWorkspace(workspace);
        this.selectedChange.emit({ selected: true, value: workspace });
    }
}
WorkspaceSelectorComponent.ɵfac = function WorkspaceSelectorComponent_Factory(t) { return new (t || WorkspaceSelectorComponent)(); };
WorkspaceSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WorkspaceSelectorComponent, selectors: [["igo-workspace-selector"]], inputs: { store: "store", disabled: "disabled" }, outputs: { selectedChange: "selectedChange" }, decls: 1, vars: 4, consts: [[3, "store", "multi", "titleAccessor", "disabled", "selectedChange"]], template: function WorkspaceSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-entity-selector", 0);
        i0.ɵɵlistener("selectedChange", function WorkspaceSelectorComponent_Template_igo_entity_selector_selectedChange_0_listener($event) { return ctx.onSelectedChange($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("store", ctx.store)("multi", false)("titleAccessor", ctx.getWorkspaceTitle)("disabled", ctx.disabled);
    } }, directives: [EntitySelectorComponent], styles: ["igo-entity-selector[_ngcontent-%COMP%]     mat-form-field .mat-form-field-infix{padding:0}igo-entity-selector[_ngcontent-%COMP%]     mat-form-field .mat-form-field-wrapper{padding-bottom:1.75em}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkspaceSelectorComponent, [{
        type: Component,
        args: [{
                selector: 'igo-workspace-selector',
                templateUrl: './workspace-selector.component.html',
                styleUrls: ['./workspace-selector.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { store: [{
            type: Input
        }], disabled: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }] }); })();

/**
 * @ignore
 */
class IgoWorkspaceSelectorModule {
}
IgoWorkspaceSelectorModule.ɵfac = function IgoWorkspaceSelectorModule_Factory(t) { return new (t || IgoWorkspaceSelectorModule)(); };
IgoWorkspaceSelectorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoWorkspaceSelectorModule });
IgoWorkspaceSelectorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoEntitySelectorModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoWorkspaceSelectorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoEntitySelectorModule
                ],
                exports: [
                    WorkspaceSelectorComponent
                ],
                declarations: [
                    WorkspaceSelectorComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoWorkspaceSelectorModule, { declarations: [WorkspaceSelectorComponent], imports: [CommonModule,
        IgoEntitySelectorModule], exports: [WorkspaceSelectorComponent] }); })();

function WorkspaceWidgetOutletComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "igo-widget-outlet", 1);
    i0.ɵɵlistener("cancel", function WorkspaceWidgetOutletComponent_ng_container_0_Template_igo_widget_outlet_cancel_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const widget_r1 = restoredCtx.ngIf; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onWidgetCancel(widget_r1); })("complete", function WorkspaceWidgetOutletComponent_ng_container_0_Template_igo_widget_outlet_complete_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const widget_r1 = restoredCtx.ngIf; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onWidgetComplete(widget_r1); });
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const widget_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("widget", widget_r1)("inputs", i0.ɵɵpipeBind1(2, 3, ctx_r0.widgetInputs$))("subscribers", i0.ɵɵpipeBind1(3, 5, ctx_r0.widgetSubscribers$));
} }
/**
 * This component dynamically render an Workspace's active widget.
 * It also deactivate that widget whenever the widget's component
 * emit the 'cancel' or 'complete' event.
 */
class WorkspaceWidgetOutletComponent {
    constructor() {
        /**
         * Event emitted when a widget is deactivate which happens
         * when the widget's component emits the 'cancel' or 'complete' event.
         */
        this.deactivateWidget = new EventEmitter();
    }
    /**
     * Observable of the workspace's active widget
     * @internal
     */
    get widget$() { return this.workspace.widget$; }
    /**
     * Observable of the workspace's widget inputs
     * @internal
     */
    get widgetInputs$() {
        return this.workspace.widgetInputs$;
    }
    /**
     * Observable of the workspace's widget inputs
     * @internal
     */
    get widgetSubscribers$() {
        return this.workspace.widgetSubscribers$;
    }
    /**
     * When a widget's component emit the 'cancel' event,
     * deactivate that widget and emit the 'deactivateWidget' event.
     * @param widget Widget
     * @internal
     */
    onWidgetCancel(widget) {
        this.workspace.deactivateWidget();
        this.deactivateWidget.emit(widget);
    }
    /**
     * When a widget's component emit the 'cancel' event,
     * deactivate that widget and emit the 'deactivateWidget' event.
     * @param widget Widget
     * @internal
     */
    onWidgetComplete(widget) {
        this.workspace.deactivateWidget();
        this.deactivateWidget.emit(widget);
    }
}
WorkspaceWidgetOutletComponent.ɵfac = function WorkspaceWidgetOutletComponent_Factory(t) { return new (t || WorkspaceWidgetOutletComponent)(); };
WorkspaceWidgetOutletComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WorkspaceWidgetOutletComponent, selectors: [["igo-workspace-widget-outlet"]], inputs: { workspace: "workspace" }, outputs: { deactivateWidget: "deactivateWidget" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "widget", "inputs", "subscribers", "cancel", "complete"]], template: function WorkspaceWidgetOutletComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, WorkspaceWidgetOutletComponent_ng_container_0_Template, 4, 7, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.widget$));
    } }, directives: [i1$1.NgIf, WidgetOutletComponent], pipes: [i1$1.AsyncPipe], styles: ["igo-widget-outlet[_ngcontent-%COMP%]{height:100%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkspaceWidgetOutletComponent, [{
        type: Component,
        args: [{
                selector: 'igo-workspace-widget-outlet',
                templateUrl: './workspace-widget-outlet.component.html',
                styleUrls: ['./workspace-widget-outlet.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { workspace: [{
            type: Input
        }], deactivateWidget: [{
            type: Output
        }] }); })();

/**
 * @ignore
 */
class IgoWorkspaceWidgetOutletModule {
}
IgoWorkspaceWidgetOutletModule.ɵfac = function IgoWorkspaceWidgetOutletModule_Factory(t) { return new (t || IgoWorkspaceWidgetOutletModule)(); };
IgoWorkspaceWidgetOutletModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoWorkspaceWidgetOutletModule });
IgoWorkspaceWidgetOutletModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoWidgetOutletModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoWorkspaceWidgetOutletModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoWidgetOutletModule
                ],
                exports: [
                    WorkspaceWidgetOutletComponent
                ],
                declarations: [
                    WorkspaceWidgetOutletComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoWorkspaceWidgetOutletModule, { declarations: [WorkspaceWidgetOutletComponent], imports: [CommonModule,
        IgoWidgetOutletModule], exports: [WorkspaceWidgetOutletComponent] }); })();

class IgoWorkspaceModule {
}
IgoWorkspaceModule.ɵfac = function IgoWorkspaceModule_Factory(t) { return new (t || IgoWorkspaceModule)(); };
IgoWorkspaceModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoWorkspaceModule });
IgoWorkspaceModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ], IgoWorkspaceSelectorModule,
        IgoWorkspaceWidgetOutletModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoWorkspaceModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    IgoWorkspaceSelectorModule,
                    IgoWorkspaceWidgetOutletModule
                ],
                declarations: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoWorkspaceModule, { imports: [CommonModule], exports: [IgoWorkspaceSelectorModule,
        IgoWorkspaceWidgetOutletModule] }); })();

class TableDatabase {
    constructor(data) {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new BehaviorSubject([]);
        if (data) {
            this.dataChange.next(data);
        }
    }
    get data() {
        return this.dataChange.value;
    }
    set(data) {
        this.dataChange.next(data);
    }
    add(item) {
        const copiedData = this.data.slice();
        copiedData.push(item);
        this.set(copiedData);
    }
    remove(item) {
        const copiedData = this.data.slice();
        const index = copiedData.indexOf(item);
        copiedData.splice(index, 1);
        this.set(copiedData);
    }
}

function ToolComponent(tool) {
    return (compType) => {
        ToolService.register(Object.assign({}, tool, {
            component: compType
        }));
    };
}

class Widget extends DynamicComponent {
}

/**
 * The class is a specialized version of an EntityStore that stores
 * workspaces.
 */
class WorkspaceStore extends EntityStore {
    constructor() {
        super(...arguments);
        this.activeWorkspace$ = new BehaviorSubject(undefined);
    }
    /**
     * Activate the an workspace workspace and deactivate the one currently active
     * @param workspace Workspace
     */
    activateWorkspace(workspace) {
        const active = this.activeWorkspace$.value;
        if (active !== undefined) {
            active.deactivate();
        }
        this.deactivateWorkspace();
        if (workspace !== undefined) {
            this.state.update(workspace, { active: true, selected: true }, true);
            this.activeWorkspace$.next(workspace);
            workspace.activate();
        }
    }
    /**
     * Deactivate the current workspace
     * @param workspace Workspace
     */
    deactivateWorkspace() {
        const active = this.activeWorkspace$.value;
        if (active !== undefined) {
            active.deactivate();
            this.activeWorkspace$.next(undefined);
        }
    }
}

/**
 * This class is responsible of managing the relations between
 * entities and the actions that consume them. It also defines an
 * entity table template that may be used by an entity table component.
 */
class Workspace {
    constructor(options) {
        this.options = options;
        /**
         * Observable of the selected widget
         */
        this.widget$ = new BehaviorSubject(undefined);
        /**
         * Observable of the selected widget's inputs
         */
        this.widgetInputs$ = new BehaviorSubject({});
        /**
         * Observable of the selected widget's subscribers
         */
        this.widgetSubscribers$ = new BehaviorSubject({});
        /**
         * State change that trigger an update of the actions availability
         */
        this.change = new Subject();
        this.active$ = new BehaviorSubject(false);
    }
    /**
     * Workspace id
     */
    get id() { return this.options.id; }
    /**
     * Workspace title
     */
    get title() { return this.options.title; }
    /**
     * Workspace title
     */
    get meta() { return this.options.meta || {}; }
    /**
     * Entities store
     */
    get entityStore() { return this.options.entityStore; }
    /**
     * Actions store (some actions activate a widget)
     */
    get actionStore() { return this.options.actionStore; }
    /**
     * Selected widget
     */
    get widget() { return this.widget$.value; }
    /**
     * Whether a widget is selected
     */
    get hasWidget() { return this.widget !== undefined; }
    /**
     * Whether this strategy is active
     * @internal
     */
    get active() { return this.active$.value; }
    /**
     * Activate the workspace. By doing that, the workspace will observe
     * the selected entity (from the store) and update the actions availability.
     * For example, some actions require an entity to be selected.
     */
    activate() {
        if (this.active === true) {
            this.deactivate();
        }
        this.active$.next(true);
        if (this.entityStore !== undefined) {
            this.entities$$ = this.entityStore.stateView.all$()
                .subscribe(() => this.onStateChange());
        }
        this.change.next();
    }
    /**
     * Deactivate the workspace. Unsubcribe to the selected entity.
     */
    deactivate() {
        this.active$.next(false);
        this.deactivateWidget();
        if (this.entities$$ !== undefined) {
            this.entities$$.unsubscribe();
        }
        if (this.change$ !== undefined) {
            this.change$.unsubscribe();
        }
    }
    /**
     * Activate a widget. In itself, activating a widget doesn't render it but,
     * if an WorkspaceWidgetOutlet component is bound to this workspace, the widget will
     * show up.
     * @param widget Widget
     * @param inputs Inputs the widget will receive
     */
    activateWidget(widget, inputs = {}, subscribers = {}) {
        this.widget$.next(widget);
        this.widgetInputs$.next(inputs);
        this.widgetSubscribers$.next(subscribers);
        this.change.next();
    }
    /**
     * Deactivate a widget.
     */
    deactivateWidget() {
        this.widget$.next(undefined);
        this.change.next();
    }
    /**
     * When the state changes, update the actions availability.
     */
    onStateChange() {
        this.change.next();
    }
}

/*
 * Public API Surface of common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionStore, ActionbarComponent, ActionbarMode, BackdropComponent, ClickoutDirective, ClonePipe, CollapseDirective, CollapsibleComponent, ConfirmDialogComponent, ConfirmDialogService, ContextMenuDirective, CustomHtmlComponent, DragAndDropDirective, DynamicComponent, DynamicComponentService, DynamicOutletComponent, EntityOperationType, EntitySelectorComponent, EntityStateManager, EntityStore, EntityStoreFilterCustomFuncStrategy, EntityStoreFilterSelectionStrategy, EntityStoreStrategy, EntityStoreWatcher, EntityTableColumnRenderer, EntityTableComponent, EntityTablePaginatorComponent, EntityTableScrollBehavior, EntityTableSelectionState, EntityTransaction, EntityView, FlexibleComponent, FormComponent, FormFieldComponent, FormFieldSelectComponent, FormFieldService, FormFieldTextComponent, FormFieldTextareaComponent, FormGroupComponent, FormService, HomeButtonComponent, IgoActionModule, IgoActionbarModule, IgoBackdropModule, IgoBadgeIconDirective, IgoClickoutModule, IgoCloneModule, IgoCollapsibleModule, IgoConfirmDialogModule, IgoContextMenuModule, IgoCustomHtmlModule, IgoDrapDropModule, IgoDynamicComponentModule, IgoDynamicOutletModule, IgoEntityModule, IgoEntitySelectorModule, IgoEntityTableModule, IgoEntityTablePaginatorModule, IgoFlexibleModule, IgoFormFieldComponent, IgoFormFieldModule, IgoFormFormModule, IgoFormGroupModule, IgoFormModule, IgoHomeButtonModule, IgoImageModule, IgoInteractiveTourModule, IgoJsonDialogModule, IgoKeyValueModule, IgoListModule, IgoMatBadgeIconModule, IgoPanelModule, IgoSidenavModule, IgoSpinnerModule, IgoStopPropagationModule, IgoTableModule, IgoToolModule, IgoToolboxModule, IgoWidgetModule, IgoWidgetOutletModule, IgoWorkspaceModule, IgoWorkspaceSelectorModule, IgoWorkspaceWidgetOutletModule, InteractiveTourComponent, InteractiveTourLoader, InteractiveTourService, JsonDialogComponent, JsonDialogService, KeyValuePipe, ListComponent, ListItemDirective, PanelComponent, SanitizeHtmlPipe, SecureImagePipe, SidenavShimDirective, SpinnerActivityDirective, SpinnerComponent, StopDropPropagationDirective, StopPropagationDirective, TableActionColor, TableComponent, TableDataSource, TableDatabase, ToolComponent, ToolService, Toolbox, ToolboxColor, ToolboxComponent, Widget, WidgetOutletComponent, WidgetService, Workspace, WorkspaceSelectorComponent, WorkspaceStore, WorkspaceWidgetOutletComponent, formControlIsRequired, getAllFormFields, getControlErrorMessage, getDefaultErrorMessages, getEntityIcon, getEntityId, getEntityProperty, getEntityRevision, getEntityTitle, getEntityTitleHtml, getFormFieldByName };
//# sourceMappingURL=igo2-common.js.map
