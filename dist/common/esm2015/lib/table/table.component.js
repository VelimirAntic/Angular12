import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { ObjectUtils } from '@igo2/utils';
import { TableDataSource } from './table-datasource';
import { TableActionColor } from './table-action-color.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/table";
import * as i3 from "@angular/material/sort";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/checkbox";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
import * as i9 from "@ngx-translate/core";
const _c0 = ["filter"];
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
export class TableComponent {
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
        i0.ɵɵviewQuery(_c0, 5);
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
    } }, directives: [i1.NgIf, i2.MatTable, i3.MatSort, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i1.NgForOf, i2.MatHeaderRowDef, i2.MatRowDef, i4.MatFormField, i5.MatInput, i2.MatHeaderCell, i6.MatCheckbox, i2.MatCell, i3.MatSortHeader, i1.NgClass, i7.MatButton, i8.MatIcon, i2.MatHeaderRow, i2.MatRow], pipes: [i9.TranslatePipe], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:block}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:auto;flex:1 1 auto}.table-box[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.table-header[_ngcontent-%COMP%]{min-height:64px;max-width:500px;display:flex;flex:0 1 auto;align-items:baseline;padding:8px 24px 0;font-size:20px;justify-content:space-between}tr[mat-header-row][_ngcontent-%COMP%], tr[mat-row][_ngcontent-%COMP%]{height:60px}.mat-cell-text[_ngcontent-%COMP%]{overflow:hidden;word-wrap:break-word}td[mat-cell][_ngcontent-%COMP%]{padding-right:15px}th.mat-header-cell[_ngcontent-%COMP%]{padding-right:5px}button[_ngcontent-%COMP%]{margin-right:10px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvdGFibGUvdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFJTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVqQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ3JCM0QsK0JBQWlEO0lBQy9DLDBDQUF5QztJQUN2QyxnQ0FBOEU7O0lBQ2hGLGlCQUFpQjtJQUNuQixpQkFBTTs7SUFGc0IsZUFBcUQ7SUFBckQsNkVBQXFEOzs7O0lBUzNFLDhCQUFzQztJQUNwQyx3Q0FFeUU7SUFGM0QsNE1BQW9DLElBQUksSUFBQztJQUd2RCxpQkFBZTtJQUNqQixpQkFBSzs7O0lBSFcsZUFBbUQ7SUFBbkQsK0VBQW1ELHlFQUFBOzs7O0lBSW5FLDhCQUFtQztJQUNqQyx3Q0FFb0Q7SUFGdEMsNEdBQVMsd0JBQXdCLElBQUMsaU9BQ2YsaUNBQXFCLEdBQUcs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aUJBQVE7UUFDVixpQkFBTTtRQUVSLGlCQUFNOztRQXhFdUIsZUFBb0I7UUFBcEIseUNBQW9CO1FBT3JCLGVBQXlCO1FBQXpCLDJDQUF5QjtRQWtCZSxlQUFnQjtRQUFoQiwyQ0FBZ0I7UUFxQzFELGVBQWtDO1FBQWxDLHNEQUFrQztRQUUvQixlQUEwQjtRQUExQix1REFBMEI7O3VGRHBDMUMsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDO2dCQUdLLFFBQVE7a0JBRFgsS0FBSztZQVVGLEtBQUs7a0JBRFIsS0FBSztZQVVGLGNBQWM7a0JBRGpCLEtBQUs7WUFjTixNQUFNO2tCQURMLE1BQU07WUFPYyxNQUFNO2tCQUExQixTQUFTO21CQUFDLFFBQVE7WUFDbUIsSUFBSTtrQkFBekMsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5cbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmltcG9ydCB7IFRhYmxlTW9kZWwgfSBmcm9tICcuL3RhYmxlLW1vZGVsLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUYWJsZURhdGFiYXNlIH0gZnJvbSAnLi90YWJsZS1kYXRhYmFzZSc7XG5pbXBvcnQgeyBUYWJsZURhdGFTb3VyY2UgfSBmcm9tICcuL3RhYmxlLWRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgVGFibGVBY3Rpb25Db2xvciB9IGZyb20gJy4vdGFibGUtYWN0aW9uLWNvbG9yLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBnZXQgZGF0YWJhc2UoKTogVGFibGVEYXRhYmFzZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFiYXNlO1xuICB9XG4gIHNldCBkYXRhYmFzZSh2YWx1ZTogVGFibGVEYXRhYmFzZSkge1xuICAgIHRoaXMuX2RhdGFiYXNlID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfZGF0YWJhc2U6IFRhYmxlRGF0YWJhc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IG1vZGVsKCk6IFRhYmxlTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgfVxuICBzZXQgbW9kZWwodmFsdWU6IFRhYmxlTW9kZWwpIHtcbiAgICB0aGlzLl9tb2RlbCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX21vZGVsOiBUYWJsZU1vZGVsO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoYXNGaWx0ZXJJbnB1dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzRklsdGVySW5wdXQ7XG4gIH1cbiAgc2V0IGhhc0ZpbHRlcklucHV0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzRklsdGVySW5wdXQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9oYXNGSWx0ZXJJbnB1dCA9IHRydWU7XG5cbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM7XG4gIHB1YmxpYyBkYXRhU291cmNlOiBUYWJsZURhdGFTb3VyY2UgfCBudWxsO1xuICBwdWJsaWMgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPGFueT4odHJ1ZSwgW10pO1xuXG4gIEBPdXRwdXQoKVxuICBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBhZGRlZDogYW55W107XG4gICAgcmVtb3ZlZDogYW55W107XG4gICAgc291cmNlOiBTZWxlY3Rpb25Nb2RlbDxhbnk+O1xuICB9PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcicpIGZpbHRlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0LCB7IHN0YXRpYzogdHJ1ZSB9KSBzb3J0OiBNYXRTb3J0O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBUYWJsZURhdGFTb3VyY2UodGhpcy5kYXRhYmFzZSwgdGhpcy5tb2RlbCwgdGhpcy5zb3J0KTtcblxuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLm1vZGVsLmNvbHVtbnNcbiAgICAgICAgLmZpbHRlcihjID0+IGMuZGlzcGxheWVkICE9PSBmYWxzZSlcbiAgICAgICAgLm1hcChjID0+IGMubmFtZSk7XG5cbiAgICAgIGlmICh0aGlzLm1vZGVsLnNlbGVjdGlvbkNoZWNrYm94KSB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy51bnNoaWZ0KCdzZWxlY3Rpb25DaGVja2JveCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubW9kZWwuYWN0aW9ucyAmJiB0aGlzLm1vZGVsLmFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5wdXNoKCdhY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5jaGFuZ2VkLnN1YnNjcmliZShlID0+IHRoaXMuc2VsZWN0LmVtaXQoZSkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgZnJvbUV2ZW50KHRoaXMuZmlsdGVyLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSgxNTApLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gdGhpcy5maWx0ZXIubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlKSB7XG4gICAgaWYgKGNoYW5nZS5kYXRhYmFzZSkge1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IFRhYmxlRGF0YVNvdXJjZShcbiAgICAgICAgdGhpcy5kYXRhYmFzZSxcbiAgICAgICAgdGhpcy5tb2RlbCxcbiAgICAgICAgdGhpcy5zb3J0XG4gICAgICApO1xuICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBnZXRBY3Rpb25Db2xvcihjb2xvcklkOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBUYWJsZUFjdGlvbkNvbG9yW2NvbG9ySWRdO1xuICB9XG5cbiAgZ2V0VmFsdWUocm93LCBrZXkpIHtcbiAgICByZXR1cm4gT2JqZWN0VXRpbHMucmVzb2x2ZShyb3csIGtleSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbnVtYmVyIG9mIHNlbGVjdGVkIGVsZW1lbnRzIG1hdGNoZXMgdGhlIHRvdGFsIG51bWJlciBvZiByb3dzLiAqL1xuICBpc0FsbFNlbGVjdGVkKCkge1xuICAgIGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFiYXNlLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKVxuICAgICAgPyB0aGlzLnNlbGVjdGlvbi5jbGVhcigpXG4gICAgICA6IHRoaXMuZGF0YWJhc2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cblxuICBoYW5kbGVDbGlja0FjdGlvbihldmVudCwgYWN0aW9uLCByb3cpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBhY3Rpb24uY2xpY2socm93KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz0ndGFibGUtYm94Jz5cbiAgPGRpdiBjbGFzcz0ndGFibGUtaGVhZGVyJyAqbmdJZj1cImhhc0ZpbHRlcklucHV0XCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGZsb2F0UGxhY2Vob2xkZXI9J25ldmVyJz5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCAjZmlsdGVyIFtwbGFjZWhvbGRlcl09XCInaWdvLmNvbW1vbi50YWJsZS5maWx0ZXInIHwgdHJhbnNsYXRlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz0ndGFibGUtY29udGFpbmVyJz5cbiAgICA8dGFibGUgbWF0LXRhYmxlICN0YWJsZSBbZGF0YVNvdXJjZV09J2RhdGFTb3VyY2UnIG1hdFNvcnQ+XG5cbiAgICAgIDwhLS0gQ2hlY2tib3ggQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzZWxlY3Rpb25DaGVja2JveFwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgaXNBbGxTZWxlY3RlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIj5cbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudCA/IHNlbGVjdGlvbi50b2dnbGUocm93KSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KVwiPlxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICA8L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXIgW21hdENvbHVtbkRlZl09J2NvbHVtbi5uYW1lJyAqbmdGb3I9J2xldCBjb2x1bW4gb2YgbW9kZWwuY29sdW1ucyc+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9J2NvbHVtbi5zb3J0YWJsZSc+XG4gICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IHt7Y29sdW1uLnRpdGxlfX0gPC90aD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj0nIWNvbHVtbi5zb3J0YWJsZSc+XG4gICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tjb2x1bW4udGl0bGV9fSA8L3RoPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5odG1sOyBlbHNlIGNlbGxIVE1MXCI+XG4gICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPSdsZXQgcm93JyBjbGFzcz1cIm1hdC1jZWxsLXRleHRcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwibW9kZWwuY2VsbENsYXNzRnVuYyA/IG1vZGVsLmNlbGxDbGFzc0Z1bmMocm93LCBjb2x1bW4pIDoge31cIj5cbiAgICAgICAgICAgIHt7Z2V0VmFsdWUocm93LCBjb2x1bW4ubmFtZSl9fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjY2VsbEhUTUw+XG4gICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPSdsZXQgcm93JyBjbGFzcz1cIm1hdC1jZWxsLXRleHRcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwibW9kZWwuY2VsbENsYXNzRnVuYyA/IG1vZGVsLmNlbGxDbGFzc0Z1bmMocm93LCBjb2x1bW4pIDoge31cIlxuICAgICAgICAgICAgW2lubmVySFRNTF09XCJnZXRWYWx1ZShyb3csIGNvbHVtbi5uYW1lKVwiPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPCEtLSBBY3Rpb24gQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9J2FjdGlvbic+XG4gICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+PC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPSdsZXQgcm93Jz5cbiAgICAgICAgICA8YnV0dG9uICpuZ0Zvcj0nbGV0IGFjdGlvbiBvZiBtb2RlbC5hY3Rpb25zJ1xuICAgICAgICAgIG1hdC1taW5pLWZhYlxuICAgICAgICAgIFtjb2xvcl09J2dldEFjdGlvbkNvbG9yKGFjdGlvbi5jb2xvciknXG4gICAgICAgICAgKGNsaWNrKT0naGFuZGxlQ2xpY2tBY3Rpb24oJGV2ZW50LCBhY3Rpb24sIHJvdyknPlxuICAgICAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJ7e2FjdGlvbi5pY29ufX1cIj48L21hdC1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPSdkaXNwbGF5ZWRDb2x1bW5zOyc+PC90cj5cbiAgICAgIDx0ciBtYXQtcm93XG4gICAgICAgICptYXRSb3dEZWY9J2xldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7J1xuICAgICAgICBbbmdDbGFzc109XCJtb2RlbC5yb3dDbGFzc0Z1bmMgPyBtb2RlbC5yb3dDbGFzc0Z1bmMocm93KSA6IHt9XCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdGlvbi50b2dnbGUocm93KVwiPlxuICAgICAgPC90cj5cblxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuXG48L2Rpdj5cbiJdfQ==