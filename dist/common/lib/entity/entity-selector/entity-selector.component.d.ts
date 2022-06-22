import { EventEmitter, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EntityStore } from '../shared/store';
import * as i0 from "@angular/core";
export declare class EntitySelectorComponent implements OnInit, OnDestroy {
    private cdRef;
    /**
     * The selected entity
     * @internal
     */
    readonly selected$: BehaviorSubject<object>;
    /**
     * The current multi select option text
     * @internal
     */
    readonly multiText$: BehaviorSubject<string>;
    readonly multiSelectValue: {
        id: string;
    };
    readonly emptyValue: {
        id: string;
    };
    /**
     * Subscription to the selected entity
     */
    private selected$$;
    /**
     * Store watcher
     */
    private watcher;
    /**
     * Entity store
     */
    store: EntityStore<object>;
    /**
     * Title accessor
     */
    titleAccessor: (object: any) => string;
    /**
     * Text to display when nothing is selected
     */
    emptyText: string;
    /**
     * Wheter selecting many entities is allowed
     */
    multi: boolean;
    /**
     * Text to display for the select all option
     */
    multiAllText: string;
    /**
     * Text to display for the select none option
     */
    multiNoneText: string;
    /**
     * Field placeholder
     */
    placeholder: string;
    /**
     * Wheter the selector is disabled or not
     */
    disabled: boolean;
    /**
     * Event emitted when the selection changes
     */
    selectedChange: EventEmitter<{
        selected: boolean;
        value: object | object[];
    }>;
    constructor(cdRef: ChangeDetectorRef);
    /**
     * Create a store watcher and subscribe to the selected entity
     * @internal
     */
    ngOnInit(): void;
    /**
     * Unsubscribe to the selected entity and destroy the store watcher
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * On selection change, update the store's state and emit an event
     * @internal
     */
    onSelectionChange(event: {
        value: object | undefined;
    }): void;
    private onSelectFromStore;
    private updateMultiToggleWithEntities;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitySelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntitySelectorComponent, "igo-entity-selector", never, { "store": "store"; "titleAccessor": "titleAccessor"; "emptyText": "emptyText"; "multi": "multi"; "multiAllText": "multiAllText"; "multiNoneText": "multiNoneText"; "placeholder": "placeholder"; "disabled": "disabled"; }, { "selectedChange": "selectedChange"; }, never, never>;
}
