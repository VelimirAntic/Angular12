import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import { ImportExportMode, ImportExportType } from '../import-export.state';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map.state";
import * as i2 from "../import-export.state";
import * as i3 from "../../workspace/workspace.state";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/tabs";
import * as i6 from "@igo2/geo";
import * as i7 from "@igo2/context";
import * as i8 from "@ngx-translate/core";
function ImportExportToolComponent_mat_tab_group_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab-group");
    i0.ɵɵelementStart(1, "mat-tab", 3);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementStart(3, "igo-import-export", 4);
    i0.ɵɵlistener("selectMode", function ImportExportToolComponent_mat_tab_group_0_Template_igo_import_export_selectMode_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.modeChanged($event); })("exportOptionsChange", function ImportExportToolComponent_mat_tab_group_0_Template_igo_import_export_exportOptionsChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.exportOptionsChange($event); });
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-tab", 3);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelement(7, "igo-context-import-export", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(2, 9, "igo.integration.importExportTool.importExportData"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("map", ctx_r0.map)("selectFirstProj", ctx_r0.selectFirstProj)("projectionsLimitations", ctx_r0.projectionsLimitations)("store", ctx_r0.workspaceStore)("selectedMode", i0.ɵɵpipeBind1(4, 11, ctx_r0.importExportState.selectedMode$))("exportOptions$", ctx_r0.importExportState.exportOptions$);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(6, 13, "igo.integration.importExportTool.importExportContext"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("map", ctx_r0.map);
} }
function ImportExportToolComponent_igo_import_export_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-import-export", 6);
    i0.ɵɵlistener("selectMode", function ImportExportToolComponent_igo_import_export_1_Template_igo_import_export_selectMode_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.modeChanged($event); })("exportOptionsChange", function ImportExportToolComponent_igo_import_export_1_Template_igo_import_export_exportOptionsChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.exportOptionsChange($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("map", ctx_r1.map)("store", ctx_r1.workspaceStore)("selectedMode", i0.ɵɵpipeBind1(1, 4, ctx_r1.importExportState.selectedMode$))("exportOptions$", ctx_r1.importExportState.exportOptions$);
} }
function ImportExportToolComponent_igo_context_import_export_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-context-import-export", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("map", ctx_r2.map);
} }
let ImportExportToolComponent = class ImportExportToolComponent {
    constructor(mapState, importExportState, workspaceState) {
        this.mapState = mapState;
        this.importExportState = importExportState;
        this.workspaceState = workspaceState;
        this.selectFirstProj = false;
        this.importExportType = ImportExportType.layer;
        this.importExportShowBothType = true;
    }
    /**
     * Map to measure on
     * @internal
     */
    get map() { return this.mapState.map; }
    get workspaceStore() {
        return this.workspaceState.store;
    }
    ngOnInit() {
        this.selectType();
        this.selectMode();
    }
    selectType() {
        if (this.importExportType) {
            this.importExportState.importExportType$.next(this.importExportType);
        }
        const userSelectedType = this.importExportState.importExportType$.value;
        if (userSelectedType !== undefined) {
            this.importExportState.setImportExportType(userSelectedType);
        }
        else {
            this.importExportState.setImportExportType(ImportExportType.layer);
        }
    }
    selectMode() {
        const userSelectedMode = this.importExportState.selectedMode$.value;
        if (userSelectedMode !== undefined) {
            this.importExportState.setMode(userSelectedMode);
        }
        else {
            this.importExportState.setMode(ImportExportMode.import);
        }
    }
    modeChanged(mode) {
        this.importExportState.setMode(mode);
    }
    exportOptionsChange(exportOptions) {
        this.importExportState.setsExportOptions(exportOptions);
    }
    importExportTypeChange(event) {
        this.importExportType = event.value;
    }
};
ImportExportToolComponent.ɵfac = function ImportExportToolComponent_Factory(t) { return new (t || ImportExportToolComponent)(i0.ɵɵdirectiveInject(i1.MapState), i0.ɵɵdirectiveInject(i2.ImportExportState), i0.ɵɵdirectiveInject(i3.WorkspaceState)); };
ImportExportToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImportExportToolComponent, selectors: [["igo-import-export-tool"]], inputs: { projectionsLimitations: "projectionsLimitations", selectFirstProj: "selectFirstProj", importExportType: "importExportType", importExportShowBothType: "importExportShowBothType" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "map", "store", "selectedMode", "exportOptions$", "selectMode", "exportOptionsChange", 4, "ngIf"], [3, "map", 4, "ngIf"], [3, "label"], [3, "map", "selectFirstProj", "projectionsLimitations", "store", "selectedMode", "exportOptions$", "selectMode", "exportOptionsChange"], [3, "map"], [3, "map", "store", "selectedMode", "exportOptions$", "selectMode", "exportOptionsChange"]], template: function ImportExportToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ImportExportToolComponent_mat_tab_group_0_Template, 8, 15, "mat-tab-group", 0);
        i0.ɵɵtemplate(1, ImportExportToolComponent_igo_import_export_1_Template, 2, 6, "igo-import-export", 1);
        i0.ɵɵtemplate(2, ImportExportToolComponent_igo_context_import_export_2_Template, 1, 1, "igo-context-import-export", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.importExportShowBothType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.importExportShowBothType && ctx.importExportType === "layer");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.importExportShowBothType && ctx.importExportType === "context");
    } }, directives: [i4.NgIf, i5.MatTabGroup, i5.MatTab, i6.ImportExportComponent, i7.ContextImportExportComponent], pipes: [i8.TranslatePipe, i4.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
ImportExportToolComponent = __decorate([
    ToolComponent({
        name: 'importExport',
        title: 'igo.integration.tools.importExport',
        icon: 'file-move'
    })
], ImportExportToolComponent);
export { ImportExportToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportExportToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-import-export-tool',
                templateUrl: './import-export-tool.component.html',
                styleUrls: ['./import-export-tool.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.MapState }, { type: i2.ImportExportState }, { type: i3.WorkspaceState }]; }, { projectionsLimitations: [{
            type: Input
        }], selectFirstProj: [{
            type: Input
        }], importExportType: [{
            type: Input
        }], importExportShowBothType: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWV4cG9ydC10b29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvaW1wb3J0LWV4cG9ydC9pbXBvcnQtZXhwb3J0LXRvb2wvaW1wb3J0LWV4cG9ydC10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvaW1wb3J0LWV4cG9ydC9pbXBvcnQtZXhwb3J0LXRvb2wvaW1wb3J0LWV4cG9ydC10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBSzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBcUIsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lDUC9GLHFDQUFpRDtJQUMvQyxrQ0FBbUY7O0lBQ2pGLDRDQVFzRDtJQUZwRCx5T0FBa0Msc1BBQUE7O0lBR3BDLGlCQUFvQjtJQUN0QixpQkFBVTtJQUNWLGtDQUFzRjs7SUFDcEYsK0NBQW1FO0lBQ3JFLGlCQUFVO0lBQ1osaUJBQWdCOzs7SUFmTCxlQUF5RTtJQUF6RSxpR0FBeUU7SUFFOUUsZUFBVztJQUFYLGdDQUFXLDJDQUFBLHlEQUFBLGdDQUFBLCtFQUFBLDJEQUFBO0lBVU4sZUFBNEU7SUFBNUUscUdBQTRFO0lBQ3hELGVBQVc7SUFBWCxnQ0FBVzs7OztJQUkxQyw0Q0FPc0Q7SUFGcEQsNk9BQWtDLDBQQUFBOztJQUdwQyxpQkFBb0I7OztJQU5sQixnQ0FBVyxnQ0FBQSw4RUFBQSwyREFBQTs7O0lBUWIsK0NBRzRCOzs7SUFEMUIsZ0NBQVc7O0lEVEEseUJBQXlCLFNBQXpCLHlCQUF5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OUIsS0FBSztZQUVHLGVBQWU7a0JBQXZCLEtBQUs7WUFZRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyx3QkFBd0I7a0JBQWhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRvb2xDb21wb25lbnQgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHR5cGUgeyBXb3Jrc3BhY2VTdG9yZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBJZ29NYXAsIEV4cG9ydE9wdGlvbnMsIFByb2plY3Rpb25zTGltaXRhdGlvbnNPcHRpb25zIH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuaW1wb3J0IHsgTWFwU3RhdGUgfSBmcm9tICcuLi8uLi9tYXAvbWFwLnN0YXRlJztcbmltcG9ydCB7IEltcG9ydEV4cG9ydE1vZGUsIEltcG9ydEV4cG9ydFN0YXRlLCBJbXBvcnRFeHBvcnRUeXBlIH0gZnJvbSAnLi4vaW1wb3J0LWV4cG9ydC5zdGF0ZSc7XG5pbXBvcnQgeyBXb3Jrc3BhY2VTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmtzcGFjZS93b3Jrc3BhY2Uuc3RhdGUnO1xuXG5AVG9vbENvbXBvbmVudCh7XG4gIG5hbWU6ICdpbXBvcnRFeHBvcnQnLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5pbXBvcnRFeHBvcnQnLFxuICBpY29uOiAnZmlsZS1tb3ZlJ1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1pbXBvcnQtZXhwb3J0LXRvb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1wb3J0LWV4cG9ydC10b29sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1wb3J0LWV4cG9ydC10b29sLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEltcG9ydEV4cG9ydFRvb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHByb2plY3Rpb25zTGltaXRhdGlvbnM6IFByb2plY3Rpb25zTGltaXRhdGlvbnNPcHRpb25zO1xuXG4gIEBJbnB1dCgpIHNlbGVjdEZpcnN0UHJvajogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBNYXAgdG8gbWVhc3VyZSBvblxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCBtYXAoKTogSWdvTWFwIHsgcmV0dXJuIHRoaXMubWFwU3RhdGUubWFwOyB9XG5cbiAgZ2V0IHdvcmtzcGFjZVN0b3JlKCk6IFdvcmtzcGFjZVN0b3JlIHtcbiAgICByZXR1cm4gdGhpcy53b3Jrc3BhY2VTdGF0ZS5zdG9yZTtcbiAgfVxuXG4gIEBJbnB1dCgpIGltcG9ydEV4cG9ydFR5cGU6IEltcG9ydEV4cG9ydFR5cGUgPSBJbXBvcnRFeHBvcnRUeXBlLmxheWVyO1xuICBASW5wdXQoKSBpbXBvcnRFeHBvcnRTaG93Qm90aFR5cGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFwU3RhdGU6IE1hcFN0YXRlLFxuICAgIHB1YmxpYyBpbXBvcnRFeHBvcnRTdGF0ZTogSW1wb3J0RXhwb3J0U3RhdGUsXG4gICAgcHJpdmF0ZSB3b3Jrc3BhY2VTdGF0ZTogV29ya3NwYWNlU3RhdGUsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdFR5cGUoKTtcbiAgICB0aGlzLnNlbGVjdE1vZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0VHlwZSgpIHtcbiAgICBpZiAodGhpcy5pbXBvcnRFeHBvcnRUeXBlKSB7XG4gICAgICB0aGlzLmltcG9ydEV4cG9ydFN0YXRlLmltcG9ydEV4cG9ydFR5cGUkLm5leHQodGhpcy5pbXBvcnRFeHBvcnRUeXBlKTtcbiAgICB9XG4gICAgY29uc3QgdXNlclNlbGVjdGVkVHlwZSA9IHRoaXMuaW1wb3J0RXhwb3J0U3RhdGUuaW1wb3J0RXhwb3J0VHlwZSQudmFsdWU7XG4gICAgaWYgKHVzZXJTZWxlY3RlZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbXBvcnRFeHBvcnRTdGF0ZS5zZXRJbXBvcnRFeHBvcnRUeXBlKHVzZXJTZWxlY3RlZFR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltcG9ydEV4cG9ydFN0YXRlLnNldEltcG9ydEV4cG9ydFR5cGUoSW1wb3J0RXhwb3J0VHlwZS5sYXllcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RNb2RlKCkge1xuICAgIGNvbnN0IHVzZXJTZWxlY3RlZE1vZGUgPSB0aGlzLmltcG9ydEV4cG9ydFN0YXRlLnNlbGVjdGVkTW9kZSQudmFsdWU7XG4gICAgaWYgKHVzZXJTZWxlY3RlZE1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbXBvcnRFeHBvcnRTdGF0ZS5zZXRNb2RlKHVzZXJTZWxlY3RlZE1vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltcG9ydEV4cG9ydFN0YXRlLnNldE1vZGUoSW1wb3J0RXhwb3J0TW9kZS5pbXBvcnQpO1xuXG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1vZGVDaGFuZ2VkKG1vZGU6IEltcG9ydEV4cG9ydE1vZGUpIHtcbiAgICB0aGlzLmltcG9ydEV4cG9ydFN0YXRlLnNldE1vZGUobW9kZSk7XG4gIH1cblxuICBwdWJsaWMgZXhwb3J0T3B0aW9uc0NoYW5nZShleHBvcnRPcHRpb25zOiBFeHBvcnRPcHRpb25zKSB7XG4gICAgdGhpcy5pbXBvcnRFeHBvcnRTdGF0ZS5zZXRzRXhwb3J0T3B0aW9ucyhleHBvcnRPcHRpb25zKTtcbiAgfVxuXG4gIGltcG9ydEV4cG9ydFR5cGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLmltcG9ydEV4cG9ydFR5cGUgPSBldmVudC52YWx1ZTtcbiAgfVxufVxuIiwiPG1hdC10YWItZ3JvdXAgKm5nSWY9XCJpbXBvcnRFeHBvcnRTaG93Qm90aFR5cGVcIiA+XG4gIDxtYXQtdGFiIFtsYWJlbF09XCInaWdvLmludGVncmF0aW9uLmltcG9ydEV4cG9ydFRvb2wuaW1wb3J0RXhwb3J0RGF0YScgfCB0cmFuc2xhdGVcIj5cbiAgICA8aWdvLWltcG9ydC1leHBvcnQgIFxuICAgICAgW21hcF09XCJtYXBcIlxuICAgICAgW3NlbGVjdEZpcnN0UHJval09XCJzZWxlY3RGaXJzdFByb2pcIlxuICAgICAgW3Byb2plY3Rpb25zTGltaXRhdGlvbnNdPVwicHJvamVjdGlvbnNMaW1pdGF0aW9uc1wiXG4gICAgICBbc3RvcmVdPVwid29ya3NwYWNlU3RvcmVcIlxuICAgICAgW3NlbGVjdGVkTW9kZV09XCJpbXBvcnRFeHBvcnRTdGF0ZS5zZWxlY3RlZE1vZGUkIHwgYXN5bmNcIlxuICAgICAgKHNlbGVjdE1vZGUpPVwibW9kZUNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICBbZXhwb3J0T3B0aW9ucyRdPVwiaW1wb3J0RXhwb3J0U3RhdGUuZXhwb3J0T3B0aW9ucyRcIlxuICAgICAgKGV4cG9ydE9wdGlvbnNDaGFuZ2UpPVwiZXhwb3J0T3B0aW9uc0NoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9pZ28taW1wb3J0LWV4cG9ydD5cbiAgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBbbGFiZWxdPVwiJ2lnby5pbnRlZ3JhdGlvbi5pbXBvcnRFeHBvcnRUb29sLmltcG9ydEV4cG9ydENvbnRleHQnIHwgdHJhbnNsYXRlXCI+XG4gICAgPGlnby1jb250ZXh0LWltcG9ydC1leHBvcnQgW21hcF09XCJtYXBcIj48L2lnby1jb250ZXh0LWltcG9ydC1leHBvcnQ+XG4gIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cblxuPGlnby1pbXBvcnQtZXhwb3J0ICBcbiAgKm5nSWY9XCIhaW1wb3J0RXhwb3J0U2hvd0JvdGhUeXBlICYmIGltcG9ydEV4cG9ydFR5cGUgPT09ICdsYXllcidcIlxuICBbbWFwXT1cIm1hcFwiXG4gIFtzdG9yZV09XCJ3b3Jrc3BhY2VTdG9yZVwiXG4gIFtzZWxlY3RlZE1vZGVdPVwiaW1wb3J0RXhwb3J0U3RhdGUuc2VsZWN0ZWRNb2RlJCB8IGFzeW5jXCJcbiAgKHNlbGVjdE1vZGUpPVwibW9kZUNoYW5nZWQoJGV2ZW50KVwiXG4gIFtleHBvcnRPcHRpb25zJF09XCJpbXBvcnRFeHBvcnRTdGF0ZS5leHBvcnRPcHRpb25zJFwiXG4gIChleHBvcnRPcHRpb25zQ2hhbmdlKT1cImV4cG9ydE9wdGlvbnNDaGFuZ2UoJGV2ZW50KVwiPlxuPC9pZ28taW1wb3J0LWV4cG9ydD5cblxuPGlnby1jb250ZXh0LWltcG9ydC1leHBvcnQgXG4gICpuZ0lmPVwiIWltcG9ydEV4cG9ydFNob3dCb3RoVHlwZSAmJiBpbXBvcnRFeHBvcnRUeXBlID09PSAnY29udGV4dCdcIlxuICBbbWFwXT1cIm1hcFwiPlxuPC9pZ28tY29udGV4dC1pbXBvcnQtZXhwb3J0PiJdfQ==