import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { WFSDataSource, WMSDataSource, FeatureDataSource } from '../../datasource';
import { FeatureStoreInMapExtentStrategy } from '../../feature/shared/strategies/in-map-extent';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/common";
import * as i2 from "../shared/wfs-workspace.service";
import * as i3 from "../shared/wms-workspace.service";
import * as i4 from "../shared/edition-workspace.service";
import * as i5 from "../shared/feature-workspace.service";
export class WorkspaceSelectorDirective {
    constructor(component, wfsWorkspaceService, wmsWorkspaceService, editionWorkspaceService, featureWorkspaceService) {
        this.component = component;
        this.wfsWorkspaceService = wfsWorkspaceService;
        this.wmsWorkspaceService = wmsWorkspaceService;
        this.editionWorkspaceService = editionWorkspaceService;
        this.featureWorkspaceService = featureWorkspaceService;
        this.entities$$ = [];
        this.changeWorkspace = new EventEmitter();
        this.disableSwitch = new EventEmitter();
        this.relationLayers = new EventEmitter();
        this.rowsInMapExtentCheckCondition = new EventEmitter();
    }
    get workspaceStore() {
        return this.component.store;
    }
    ngOnInit() {
        this.layers$$ = this.map.layers$
            .pipe(debounceTime(50))
            .subscribe((layers) => this.onLayersChange(layers));
        this.featureWorkspaceService.ws$.subscribe((ws) => { this.changeWorkspace.emit(ws); });
        this.wmsWorkspaceService.ws$.subscribe((ws) => { this.changeWorkspace.emit(ws); });
        this.wfsWorkspaceService.ws$.subscribe((ws) => { this.changeWorkspace.emit(ws); });
        this.editionWorkspaceService.ws$.subscribe((ws) => { this.changeWorkspace.emit(ws); });
        this.editionWorkspaceService.adding$.subscribe((adding) => { this.disableSwitch.emit(adding); });
        this.editionWorkspaceService.relationLayers$.subscribe((layers) => { this.relationLayers.emit(layers); });
        this.editionWorkspaceService.rowsInMapExtentCheckCondition$.subscribe((condition) => {
            this.rowsInMapExtentCheckCondition.emit(condition);
        });
    }
    ngOnDestroy() {
        this.layers$$.unsubscribe();
        this.entities$$.map(entities => entities.unsubscribe());
    }
    onLayersChange(layers) {
        const editableLayers = layers.filter((layer) => this.layerIsEditable(layer));
        const editableLayersIds = editableLayers.map((layer) => layer.id);
        const workspacesToAdd = editableLayers
            .map((layer) => this.getOrCreateWorkspace(layer))
            .filter((workspace) => workspace !== undefined);
        const workspacesToRemove = this.workspaceStore.all()
            .filter((workspace) => {
            return editableLayersIds.indexOf(workspace.id) < 0;
        });
        if (workspacesToRemove.length > 0) {
            workspacesToRemove.forEach((workspace) => {
                workspace.entityStore.deactivateStrategyOfType(FeatureStoreInMapExtentStrategy);
                workspace.deactivate();
            });
            this.workspaceStore.state.updateMany(workspacesToRemove, { active: false, selected: false });
            this.workspaceStore.deleteMany(workspacesToRemove);
        }
        if (workspacesToAdd.length > 0) {
            this.workspaceStore.insertMany(workspacesToAdd);
        }
    }
    getOrCreateWorkspace(layer) {
        var _a, _b, _c, _d;
        const workspace = this.workspaceStore.get(layer.id);
        if (workspace !== undefined) {
            return;
        }
        if (layer.dataSource instanceof WFSDataSource && ((_a = layer.dataSource.options.edition) === null || _a === void 0 ? void 0 : _a.enabled) !== true) {
            const wfsWks = this.wfsWorkspaceService.createWorkspace(layer, this.map);
            return wfsWks;
        }
        else if (layer.dataSource instanceof WMSDataSource && ((_b = layer.dataSource.options.edition) === null || _b === void 0 ? void 0 : _b.enabled) !== true) {
            if (!layer.dataSource.options.paramsWFS) {
                return;
            }
            const wmsWks = this.wmsWorkspaceService.createWorkspace(layer, this.map);
            wmsWks === null || wmsWks === void 0 ? void 0 : wmsWks.inResolutionRange$.subscribe((inResolutionRange) => {
                layer.dataSource.options.queryable = !inResolutionRange;
                wmsWks.layer.dataSource.options.queryable = inResolutionRange;
            });
            return wmsWks;
        }
        else if (layer.dataSource instanceof FeatureDataSource &&
            layer.exportable === true &&
            ((_c = layer.dataSource.options.edition) === null || _c === void 0 ? void 0 : _c.enabled) !== true) {
            const featureWks = this.featureWorkspaceService.createWorkspace(layer, this.map);
            return featureWks;
        }
        else if (layer.dataSource instanceof WMSDataSource && ((_d = layer.dataSource.options.edition) === null || _d === void 0 ? void 0 : _d.enabled) === true) {
            const editionWks = this.editionWorkspaceService.createWorkspace(layer, this.map);
            return editionWks;
        }
        return;
    }
    layerIsEditable(layer) {
        var _a, _b;
        const dataSource = layer.dataSource;
        if (dataSource instanceof WFSDataSource) {
            return true;
        }
        if (dataSource instanceof FeatureDataSource) {
            return true;
        }
        if (dataSource instanceof WMSDataSource) {
            const dataSourceOptions = (dataSource.options ||
                {});
            return (((_a = dataSourceOptions.ogcFilters) === null || _a === void 0 ? void 0 : _a.enabled) || ((_b = dataSource.options.paramsWFS) === null || _b === void 0 ? void 0 : _b.featureTypes) !== undefined);
        }
        return false;
    }
}
WorkspaceSelectorDirective.ɵfac = function WorkspaceSelectorDirective_Factory(t) { return new (t || WorkspaceSelectorDirective)(i0.ɵɵdirectiveInject(i1.WorkspaceSelectorComponent), i0.ɵɵdirectiveInject(i2.WfsWorkspaceService), i0.ɵɵdirectiveInject(i3.WmsWorkspaceService), i0.ɵɵdirectiveInject(i4.EditionWorkspaceService), i0.ɵɵdirectiveInject(i5.FeatureWorkspaceService)); };
WorkspaceSelectorDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: WorkspaceSelectorDirective, selectors: [["", "igoWorkspaceSelector", ""]], inputs: { map: "map" }, outputs: { changeWorkspace: "changeWorkspace", disableSwitch: "disableSwitch", relationLayers: "relationLayers", rowsInMapExtentCheckCondition: "rowsInMapExtentCheckCondition" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkspaceSelectorDirective, [{
        type: Directive,
        args: [{
                selector: '[igoWorkspaceSelector]'
            }]
    }], function () { return [{ type: i1.WorkspaceSelectorComponent }, { type: i2.WfsWorkspaceService }, { type: i3.WmsWorkspaceService }, { type: i4.EditionWorkspaceService }, { type: i5.FeatureWorkspaceService }]; }, { map: [{
            type: Input
        }], changeWorkspace: [{
            type: Output
        }], disableSwitch: [{
            type: Output
        }], relationLayers: [{
            type: Output
        }], rowsInMapExtentCheckCondition: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXNlbGVjdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3dvcmtzcGFjZS93b3Jrc3BhY2Utc2VsZWN0b3Ivd29ya3NwYWNlLXNlbGVjdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU9uRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7OztBQU1oRyxNQUFNLE9BQU8sMEJBQTBCO0lBZ0JyQyxZQUNVLFNBQXFDLEVBQ3JDLG1CQUF3QyxFQUN4QyxtQkFBd0MsRUFDeEMsdUJBQWdELEVBQ2hELHVCQUFnRDtRQUpoRCxjQUFTLEdBQVQsU0FBUyxDQUE0QjtRQUNyQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBbEJsRCxlQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUk5QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0Msa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzVDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWdDLENBQUM7UUFDbEUsa0NBQTZCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQVluRSxDQUFDO0lBVkosSUFBSSxjQUFjO1FBQ2hCLE9BQU8s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bkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFdvcmtzcGFjZSwgV29ya3NwYWNlU3RvcmUsIFdvcmtzcGFjZVNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHsgTGF5ZXIsIEltYWdlTGF5ZXIsIFZlY3RvckxheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXInO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwJztcbmltcG9ydCB7IFdGU0RhdGFTb3VyY2UsIFdNU0RhdGFTb3VyY2UsIEZlYXR1cmVEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9maWx0ZXInO1xuXG5pbXBvcnQgeyBXZnNXb3Jrc3BhY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3dmcy13b3Jrc3BhY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBXbXNXb3Jrc3BhY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3dtcy13b3Jrc3BhY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBFZGl0aW9uV29ya3NwYWNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9lZGl0aW9uLXdvcmtzcGFjZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZlYXR1cmVXb3Jrc3BhY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2ZlYXR1cmUtd29ya3NwYWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmVhdHVyZVN0b3JlSW5NYXBFeHRlbnRTdHJhdGVneSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL3N0cmF0ZWdpZXMvaW4tbWFwLWV4dGVudCc7XG5pbXBvcnQgeyBRdWVyeWFibGVEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4uLy4uL3F1ZXJ5L3NoYXJlZC9xdWVyeS5pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lnb1dvcmtzcGFjZVNlbGVjdG9yXSdcbn0pXG5leHBvcnQgY2xhc3MgV29ya3NwYWNlU2VsZWN0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBsYXllcnMkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGVudGl0aWVzJCQ6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgQE91dHB1dCgpIGNoYW5nZVdvcmtzcGFjZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgZGlzYWJsZVN3aXRjaCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHJlbGF0aW9uTGF5ZXJzID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZUxheWVyW10gfCBWZWN0b3JMYXllcltdPigpO1xuICBAT3V0cHV0KCkgcm93c0luTWFwRXh0ZW50Q2hlY2tDb25kaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZ2V0IHdvcmtzcGFjZVN0b3JlKCk6IFdvcmtzcGFjZVN0b3JlIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuc3RvcmU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudDogV29ya3NwYWNlU2VsZWN0b3JDb21wb25lbnQsXG4gICAgcHJpdmF0ZSB3ZnNXb3Jrc3BhY2VTZXJ2aWNlOiBXZnNXb3Jrc3BhY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgd21zV29ya3NwYWNlU2VydmljZTogV21zV29ya3NwYWNlU2VydmljZSxcbiAgICBwcml2YXRlIGVkaXRpb25Xb3Jrc3BhY2VTZXJ2aWNlOiBFZGl0aW9uV29ya3NwYWNlU2VydmljZSxcbiAgICBwcml2YXRlIGZlYXR1cmVXb3Jrc3BhY2VTZXJ2aWNlOiBGZWF0dXJlV29ya3NwYWNlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXllcnMkJCA9IHRoaXMubWFwLmxheWVycyRcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSg1MCkpXG4gICAgICAuc3Vic2NyaWJlKChsYXllcnM6IExheWVyW10pID0+XG4gICAgICAgIHRoaXMub25MYXllcnNDaGFuZ2UobGF5ZXJzKVxuICAgICAgKTtcblxuICAgIHRoaXMuZmVhdHVyZVdvcmtzcGFjZVNlcnZpY2Uud3MkLnN1YnNjcmliZSgod3MpID0+IHsgdGhpcy5jaGFuZ2VXb3Jrc3BhY2UuZW1pdCh3cyk7IH0pO1xuICAgIHRoaXMud21zV29ya3NwYWNlU2VydmljZS53cyQuc3Vic2NyaWJlKCh3cykgPT4geyB0aGlzLmNoYW5nZVdvcmtzcGFjZS5lbWl0KHdzKTsgfSk7XG4gICAgdGhpcy53ZnNXb3Jrc3BhY2VTZXJ2aWNlLndzJC5zdWJzY3JpYmUoKHdzKSA9PiB7IHRoaXMuY2hhbmdlV29ya3NwYWNlLmVtaXQod3MpOyB9KTtcbiAgICB0aGlzLmVkaXRpb25Xb3Jrc3BhY2VTZXJ2aWNlLndzJC5zdWJzY3JpYmUoKHdzKSA9PiB7IHRoaXMuY2hhbmdlV29ya3NwYWNlLmVtaXQod3MpOyB9KTtcbiAgICB0aGlzLmVkaXRpb25Xb3Jrc3BhY2VTZXJ2aWNlLmFkZGluZyQuc3Vic2NyaWJlKChhZGRpbmcpID0+IHsgdGhpcy5kaXNhYmxlU3dpdGNoLmVtaXQoYWRkaW5nKTsgfSk7XG4gICAgdGhpcy5lZGl0aW9uV29ya3NwYWNlU2VydmljZS5yZWxhdGlvbkxheWVycyQuc3Vic2NyaWJlKChsYXllcnMpID0+IHsgdGhpcy5yZWxhdGlvbkxheWVycy5lbWl0KGxheWVycyk7IH0pO1xuICAgIHRoaXMuZWRpdGlvbldvcmtzcGFjZVNlcnZpY2Uucm93c0luTWFwRXh0ZW50Q2hlY2tDb25kaXRpb24kLnN1YnNjcmliZSgoY29uZGl0aW9uKSA9PiB7XG4gICAgICB0aGlzLnJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uLmVtaXQoY29uZGl0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubGF5ZXJzJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmVudGl0aWVzJCQubWFwKGVudGl0aWVzID0+IGVudGl0aWVzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkxheWVyc0NoYW5nZShsYXllcnM6IExheWVyW10pIHtcbiAgICBjb25zdCBlZGl0YWJsZUxheWVycyA9IGxheWVycy5maWx0ZXIoKGxheWVyOiBMYXllcikgPT5cbiAgICAgIHRoaXMubGF5ZXJJc0VkaXRhYmxlKGxheWVyKVxuICAgICk7XG4gICAgY29uc3QgZWRpdGFibGVMYXllcnNJZHMgPSBlZGl0YWJsZUxheWVycy5tYXAoKGxheWVyOiBMYXllcikgPT4gbGF5ZXIuaWQpO1xuXG4gICAgY29uc3Qgd29ya3NwYWNlc1RvQWRkID0gZWRpdGFibGVMYXllcnNcbiAgICAgIC5tYXAoKGxheWVyOiBWZWN0b3JMYXllcikgPT4gdGhpcy5nZXRPckNyZWF0ZVdvcmtzcGFjZShsYXllcikpXG4gICAgICAuZmlsdGVyKCh3b3Jrc3BhY2U6IFdvcmtzcGFjZSB8IHVuZGVmaW5lZCkgPT4gd29ya3NwYWNlICE9PSB1bmRlZmluZWQpO1xuXG4gICAgY29uc3Qgd29ya3NwYWNlc1RvUmVtb3ZlID0gdGhpcy53b3Jrc3BhY2VTdG9yZS5hbGwoKVxuICAgICAgLmZpbHRlcigod29ya3NwYWNlOiBXb3Jrc3BhY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIGVkaXRhYmxlTGF5ZXJzSWRzLmluZGV4T2Yod29ya3NwYWNlLmlkKSA8IDA7XG4gICAgICB9KTtcblxuICAgIGlmICh3b3Jrc3BhY2VzVG9SZW1vdmUubGVuZ3RoID4gMCkge1xuICAgICAgd29ya3NwYWNlc1RvUmVtb3ZlLmZvckVhY2goKHdvcmtzcGFjZTogV29ya3NwYWNlKSA9PiB7XG4gICAgICAgIHdvcmtzcGFjZS5lbnRpdHlTdG9yZS5kZWFjdGl2YXRlU3RyYXRlZ3lPZlR5cGUoRmVhdHVyZVN0b3JlSW5NYXBFeHRlbnRTdHJhdGVneSk7XG4gICAgICAgIHdvcmtzcGFjZS5kZWFjdGl2YXRlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMud29ya3NwYWNlU3RvcmUuc3RhdGUudXBkYXRlTWFueSh3b3Jrc3BhY2VzVG9SZW1vdmUsIHthY3RpdmU6IGZhbHNlLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICAgIHRoaXMud29ya3NwYWNlU3RvcmUuZGVsZXRlTWFueSh3b3Jrc3BhY2VzVG9SZW1vdmUpO1xuICAgIH1cblxuICAgIGlmICh3b3Jrc3BhY2VzVG9BZGQubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy53b3Jrc3BhY2VTdG9yZS5pbnNlcnRNYW55KHdvcmtzcGFjZXNUb0FkZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPckNyZWF0ZVdvcmtzcGFjZShsYXllcjogVmVjdG9yTGF5ZXIgfCBJbWFnZUxheWVyKTogV29ya3NwYWNlIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLndvcmtzcGFjZVN0b3JlLmdldChsYXllci5pZCk7XG4gICAgaWYgKHdvcmtzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsYXllci5kYXRhU291cmNlIGluc3RhbmNlb2YgV0ZTRGF0YVNvdXJjZSAmJiBsYXllci5kYXRhU291cmNlLm9wdGlvbnMuZWRpdGlvbj8uZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgY29uc3Qgd2ZzV2tzID0gdGhpcy53ZnNXb3Jrc3BhY2VTZXJ2aWNlLmNyZWF0ZVdvcmtzcGFjZShsYXllciBhcyBWZWN0b3JMYXllciwgdGhpcy5tYXApO1xuICAgICAgcmV0dXJuIHdmc1drcztcbiAgICB9IGVsc2UgaWYgKGxheWVyLmRhdGFTb3VyY2UgaW5zdGFuY2VvZiBXTVNEYXRhU291cmNlICYmIGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uPy5lbmFibGVkICE9PSB0cnVlKSB7XG4gICAgICBpZiAoIWxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5wYXJhbXNXRlMpIHsgcmV0dXJuOyB9XG4gICAgICBjb25zdCB3bXNXa3MgPSB0aGlzLndtc1dvcmtzcGFjZVNlcnZpY2UuY3JlYXRlV29ya3NwYWNlKGxheWVyIGFzIEltYWdlTGF5ZXIsIHRoaXMubWFwKTtcbiAgICAgIHdtc1drcz8uaW5SZXNvbHV0aW9uUmFuZ2UkLnN1YnNjcmliZSgoaW5SZXNvbHV0aW9uUmFuZ2UpID0+IHtcbiAgICAgICAgKGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucyBhcyBRdWVyeWFibGVEYXRhU291cmNlT3B0aW9ucykucXVlcnlhYmxlID0gIWluUmVzb2x1dGlvblJhbmdlO1xuICAgICAgICAod21zV2tzLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucyBhcyBRdWVyeWFibGVEYXRhU291cmNlT3B0aW9ucykucXVlcnlhYmxlID0gaW5SZXNvbHV0aW9uUmFuZ2U7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB3bXNXa3M7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgbGF5ZXIuZGF0YVNvdXJjZSBpbnN0YW5jZW9mIEZlYXR1cmVEYXRhU291cmNlICYmXG4gICAgICAgIChsYXllciBhcyBWZWN0b3JMYXllcikuZXhwb3J0YWJsZSA9PT0gdHJ1ZSAmJlxuICAgICAgICBsYXllci5kYXRhU291cmNlLm9wdGlvbnMuZWRpdGlvbj8uZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZmVhdHVyZVdrcyA9IHRoaXMuZmVhdHVyZVdvcmtzcGFjZVNlcnZpY2UuY3JlYXRlV29ya3NwYWNlKGxheWVyIGFzIFZlY3RvckxheWVyLCB0aGlzLm1hcCk7XG4gICAgICByZXR1cm4gZmVhdHVyZVdrcztcbiAgICB9IGVsc2UgaWYgKGxheWVyLmRhdGFTb3VyY2UgaW5zdGFuY2VvZiBXTVNEYXRhU291cmNlICYmIGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uPy5lbmFibGVkID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBlZGl0aW9uV2tzID0gdGhpcy5lZGl0aW9uV29ya3NwYWNlU2VydmljZS5jcmVhdGVXb3Jrc3BhY2UobGF5ZXIgYXMgSW1hZ2VMYXllciwgdGhpcy5tYXApO1xuICAgICAgcmV0dXJuIGVkaXRpb25Xa3M7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBsYXllcklzRWRpdGFibGUobGF5ZXI6IExheWVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGxheWVyLmRhdGFTb3VyY2U7XG4gICAgaWYgKGRhdGFTb3VyY2UgaW5zdGFuY2VvZiBXRlNEYXRhU291cmNlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGRhdGFTb3VyY2UgaW5zdGFuY2VvZiBGZWF0dXJlRGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChkYXRhU291cmNlIGluc3RhbmNlb2YgV01TRGF0YVNvdXJjZSkge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZU9wdGlvbnMgPSAoZGF0YVNvdXJjZS5vcHRpb25zIHx8XG4gICAgICAgIHt9KSBhcyBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnM7XG4gICAgICByZXR1cm4gKGRhdGFTb3VyY2VPcHRpb25zLm9nY0ZpbHRlcnM/LmVuYWJsZWQgfHwgZGF0YVNvdXJjZS5vcHRpb25zLnBhcmFtc1dGUz8uZmVhdHVyZVR5cGVzICE9PSB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19