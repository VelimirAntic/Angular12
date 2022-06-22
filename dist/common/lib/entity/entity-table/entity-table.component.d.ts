import { EventEmitter, ChangeDetectorRef, OnInit, OnDestroy, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EntityRecord, EntityState, EntityStore, EntityTableTemplate, EntityTableColumn, EntityTableColumnRenderer, EntityTableSelectionState, EntityTableScrollBehavior } from '../shared';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EntityTablePaginatorOptions } from '../entity-table-paginator/entity-table-paginator.interface';
import { FormBuilder, NgControl, NgForm, FormControlName, FormGroup } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { DateAdapter, ErrorStateMatcher } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class EntityTableComponent implements OnInit, OnChanges, OnDestroy {
    private cdRef;
    private formBuilder;
    protected _focusMonitor: FocusMonitor;
    protected _elementRef: ElementRef<HTMLElement>;
    ngControl: NgControl;
    protected _parentForm: NgForm;
    protected _controlName: FormControlName;
    protected _defaultErrorStateMatcher: ErrorStateMatcher;
    private dateAdapter;
    entitySortChange$: BehaviorSubject<boolean>;
    formGroup: FormGroup;
    filteredOptions: Observable<any[]>;
    /**
     * Reference to the column renderer types
     * @internal
     */
    entityTableColumnRenderer: typeof EntityTableColumnRenderer;
    /**
     * Reference to the selection's state
     * @internal
     */
    entityTableSelectionState: typeof EntityTableSelectionState;
    /**
     * Observable of the selection,s state
     * @internal
     */
    readonly selectionState$: BehaviorSubject<EntityTableSelectionState>;
    /**
     * Subscription to the store's selection
     */
    private selection$$;
    /**
     * Subscription to the dataSource
     */
    private dataSource$$;
    /**
     * The last record checked. Useful for selecting
     * multiple records by holding the shift key and checking
     * checkboxes.
     */
    private lastRecordCheckedKey;
    /**
     * Entity store
     */
    store: EntityStore<object>;
    /**
     * Table paginator
     */
    set paginator(value: MatPaginator);
    get paginator(): MatPaginator;
    private _paginator;
    /**
     * Table template
     */
    template: EntityTableTemplate;
    /**
     * Scroll behavior on selection
     */
    scrollBehavior: EntityTableScrollBehavior;
    /**
     * Whether nulls should be first when sorting
     */
    sortNullsFirst: boolean;
    /**
     * Show the table paginator or not. False by default.
     */
    withPaginator: boolean;
    /**
     * Paginator options
     */
    paginatorOptions: EntityTablePaginatorOptions;
    /**
     * Event emitted when an entity (row) is clicked
     */
    entityClick: EventEmitter<object>;
    /**
     * Event emitted when an entity (row) is selected
     */
    entitySelectChange: EventEmitter<{
        added: object[];
    }>;
    /**
     * Event emitted when the table sort is changed.
     */
    entitySortChange: EventEmitter<{
        column: EntityTableColumn;
        direction: string;
    }>;
    /**
     * Table headers
     * @internal
     */
    get headers(): string[];
    /**
     * Data source consumable by the underlying material table
     * @internal
     */
    dataSource: MatTableDataSource<object>;
    /**
     * Whether selection is supported
     * @internal
     */
    get selection(): boolean;
    /**
     * Whether a selection checkbox should be displayed
     * @internal
     */
    get selectionCheckbox(): boolean;
    /**
     * Whether selection many entities should eb supported
     * @internal
     */
    get selectMany(): boolean;
    /**
     * Whether selection many entities should eb supported
     * @internal
     */
    get fixedHeader(): boolean;
    constructor(cdRef: ChangeDetectorRef, formBuilder: FormBuilder, _focusMonitor: FocusMonitor, _elementRef: ElementRef<HTMLElement>, ngControl: NgControl, _parentForm: NgForm, _controlName: FormControlName, _defaultErrorStateMatcher: ErrorStateMatcher, dateAdapter: DateAdapter<Date>);
    /**
     * Track the selection state to properly display the selection checkboxes
     * @internal
     */
    ngOnInit(): void;
    /**
     * @internal
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Process text or number value change (edition)
     */
    onValueChange(column: string, record: EntityRecord<any>, event: any): void;
    /**
     * Process boolean value change (edition)
     */
    onBooleanValueChange(column: string, record: EntityRecord<any>, event: any): void;
    /**
     * Process select value change (edition)
     */
    onSelectValueChange(column: string, record: EntityRecord<any>, event: any): void;
    /**
     * Process autocomplete value change (edition)
     */
    onAutocompleteValueChange(column: string, record: EntityRecord<any>, event: any): void;
    /**
     * Process date value change (edition)
     */
    onDateChange(column: string, record: EntityRecord<any>, event: any): void;
    /**
     * Enable edition mode for one row
     * More than one row can be edited at the same time
     */
    private enableEdit;
    private handleDatasource;
    /**
     * Unbind the store watcher
     * @internal
     */
    ngOnDestroy(): void;
    private unsubscribeStore;
    /**
     * Trackby function
     * @param record Record
     * @param index Record index
     * @internal
     */
    getTrackByFunction(): (index: number, record: EntityRecord<object, EntityState>) => string;
    /**
     * Trigger a refresh of thre table. This can be useful when
     * the data source doesn't emit a new value but for some reason
     * the records need an update.
     * @internal
     */
    refresh(): void;
    paginatorChange(event: MatPaginator): void;
    /**
     * On sort, sort the store
     * @param event Sort event
     * @internal
     */
    onSort(event: {
        active: string;
        direction: string;
    }): void;
    /**
     * When an entity is clicked, emit an event
     * @param record Record
     * @internal
     */
    onRowClick(record: EntityRecord<object>): void;
    /**
     * When an entity is selected, select it in the store and emit an event. Even if
     * "many" is set to true, this method always select a single, exclusive row. Selecting
     * multiple rows should be achieved by using the checkboxes.
     * @param record Record
     * @internal
     */
    onRowSelect(record: EntityRecord<object>): void;
    /**
     * Select or unselect all rows at once. On select, emit an event.
     * @param toggle Select or unselect
     * @internal
     */
    onToggleRows(toggle: boolean): void;
    /**
     * When an entity is toggled, select or unselect it in the store. On select,
     * emit an event.
     * @param toggle Select or unselect
     * @param record Record
     * @internal
     */
    onToggleRow(toggle: boolean, record: EntityRecord<object>): void;
    /**
     * When an entity is toggled, select or unselect it in the store. On select,
     * emit an event.
     * @param toggle Select or unselect
     * @param record Record
     * @internal
     */
    onShiftToggleRow(toggle: boolean, record: EntityRecord<object>, event: MouseEvent): void;
    /**
     * Compute the selection state
     * @returns Whether all, some or no rows are selected
     * @internal
     */
    private computeSelectionState;
    /**
     * Whether a column is sortable
     * @param column Column
     * @returns True if a column is sortable
     * @internal
     */
    columnIsSortable(column: EntityTableColumn): boolean;
    /**
     * Whether a row is should be selected based on the underlying entity state
     * @param record Record
     * @returns True if a row should be selected
     * @internal
     */
    rowIsSelected(record: EntityRecord<object>): boolean;
    isImg(value: any): boolean;
    isUrl(value: any): boolean;
    /**
     * Method to access an entity's values
     * @param record Record
     * @param column Column
     * @returns Any value
     * @internal
     */
    getValue(record: EntityRecord<object>, column: EntityTableColumn): any;
    /**
     * Method to access an entity's validation values
     * @param column Column
     * @param validationType string
     * @returns Any value (false if no validation or not the one concerned)
     * @internal
     */
    getValidationAttributeValue(column: EntityTableColumn, validationType: string): any;
    isEdition(record: any): boolean;
    /**
     * Return the type of renderer of a column
     * @param column Column
     * @returns Renderer type
     * @internal
     */
    getColumnRenderer(column: EntityTableColumn): EntityTableColumnRenderer;
    /**
     * Return the table ngClass
     * @returns ngClass
     * @internal
     */
    getTableClass(): {
        [key: string]: boolean;
    };
    /**
     * Return a header ngClass
     * @returns ngClass
     * @internal
     */
    getHeaderClass(): {
        [key: string]: boolean;
    };
    /**
     * Return a row ngClass
     * @param record Record
     * @returns ngClass
     * @internal
     */
    getRowClass(record: EntityRecord<object>): {
        [key: string]: boolean;
    };
    /**
     * Return a row ngClass
     * @param record Record
     * @param column Column
     * @returns ngClass
     * @internal
     */
    getCellClass(record: EntityRecord<object>, column: EntityTableColumn): {
        [key: string]: boolean;
    };
    /**
     * When a button is clicked
     * @param func Function
     * @param record Record
     * @internal
     */
    onButtonClick(clickFunc: (entity: object, record?: EntityRecord<object>) => void, record: EntityRecord<object>): void;
    /**
     * Retrieve column name without his "properties" tag (useful for edition workspace properties)
     */
    getColumnKeyWithoutPropertiesTag(column: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTableComponent, [null, null, null, null, { optional: true; self: true; }, { optional: true; }, { optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTableComponent, "igo-entity-table", never, { "store": "store"; "paginator": "paginator"; "template": "template"; "scrollBehavior": "scrollBehavior"; "sortNullsFirst": "sortNullsFirst"; "withPaginator": "withPaginator"; "paginatorOptions": "paginatorOptions"; }, { "entityClick": "entityClick"; "entitySelectChange": "entitySelectChange"; "entitySortChange": "entitySortChange"; }, never, never>;
}
