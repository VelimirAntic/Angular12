import { Directive, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { WFSDataSource, WMSDataSource, FeatureDataSource } from '../../datasource';
import { FeatureStoreInMapExtentStrategy } from '../../feature/shared/strategies/in-map-extent';
import * as i0 from "@angular/core";
import * as i1 from "../shared/wfs-workspace.service";
import * as i2 from "../shared/wms-workspace.service";
import * as i3 from "../shared/edition-workspace.service";
import * as i4 from "../shared/feature-workspace.service";
export class WorkspaceUpdatorDirective {
    constructor(wfsWorkspaceService, wmsWorkspaceService, editionWorkspaceService, featureWorkspaceService) {
        this.wfsWorkspaceService = wfsWorkspaceService;
        this.wmsWorkspaceService = wmsWorkspaceService;
        this.editionWorkspaceService = editionWorkspaceService;
        this.featureWorkspaceService = featureWorkspaceService;
        this.entities$$ = [];
    }
    ngOnInit() {
        this.layers$$ = this.map.layers$
            .pipe(debounceTime(50))
            .subscribe((layers) => this.onLayersChange(layers));
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
                var _a;
                if ((_a = layer.dataSource.options) === null || _a === void 0 ? void 0 : _a.queryFormatAsWms) {
                    wmsWks.layer.dataSource.options.queryable = true;
                    return wmsWks;
                }
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
WorkspaceUpdatorDirective.ɵfac = function WorkspaceUpdatorDirective_Factory(t) { return new (t || WorkspaceUpdatorDirective)(i0.ɵɵdirectiveInject(i1.WfsWorkspaceService), i0.ɵɵdirectiveInject(i2.WmsWorkspaceService), i0.ɵɵdirectiveInject(i3.EditionWorkspaceService), i0.ɵɵdirectiveInject(i4.FeatureWorkspaceService)); };
WorkspaceUpdatorDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: WorkspaceUpdatorDirective, selectors: [["", "igoWorkspaceUpdator", ""]], inputs: { map: "map", workspaceStore: "workspaceStore" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkspaceUpdatorDirective, [{
        type: Directive,
        args: [{
                selector: '[igoWorkspaceUpdator]'
            }]
    }], function () { return [{ type: i1.WfsWorkspaceService }, { type: i2.WmsWorkspaceService }, { type: i3.EditionWorkspaceService }, { type: i4.FeatureWorkspaceService }]; }, { map: [{
            type: Input
        }], workspaceStore: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXVwZGF0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvd29ya3NwYWNlL3dvcmtzcGFjZS11cGRhdG9yL3dvcmtzcGFjZS11cGRhdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFHcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPbkYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7OztBQU1oRyxNQUFNLE9BQU8seUJBQXlCO0lBU3BDLFlBQ1UsbUJBQXdDLEVBQ3hDLG1CQUF3QyxFQUN4Qyx1QkFBZ0QsRUFDaEQsdUJBQWdEO1FBSGhELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFWbEQsZUFBVSxHQUFtQixFQUFFLENBQUM7SUFXckMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTzthQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxDQUFDLE1BQWUsRUFBRSxFQUFFLENBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQzVCLENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENB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QjtRQUVELE9BQU87SUFDVCxDQUFDO0lBRU8sZUFBZSxDQUFDLEtBQVk7O1FBQ2xDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxVQUFVLFlBQVksYUFBYSxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLFVBQVUsWUFBWSxpQkFBaUIsRUFBRTtZQUMzQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxVQUFVLFlBQVksYUFBYSxFQUFFO1lBQ3ZDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTztnQkFDM0MsRUFBRSxDQUFtQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxDQUFBLE1BQUEsaUJBQWlCLENBQUMsVUFBVSwwQ0FBRSxPQUFPLEtBQUksQ0FBQSxNQUFBLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUywwQ0FBRSxZQUFZLE1BQUssU0FBUyxDQUFDLENBQUM7U0FDNUc7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2tHQTNHVSx5QkFBeUI7NEVBQXpCLHlCQUF5Qjt1RkFBekIseUJBQXlCO2NBSHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDO29MQU1VLEdBQUc7a0JBQVgsS0FBSztZQUVHLGNBQWM7a0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgV29ya3NwYWNlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB0eXBlIHsgV29ya3NwYWNlU3RvcmUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgTGF5ZXIsIEltYWdlTGF5ZXIsIFZlY3RvckxheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXInO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwJztcbmltcG9ydCB7IFdGU0RhdGFTb3VyY2UsIFdNU0RhdGFTb3VyY2UsIEZlYXR1cmVEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9maWx0ZXInO1xuXG5pbXBvcnQgeyBXZnNXb3Jrc3BhY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3dmcy13b3Jrc3BhY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBXbXNXb3Jrc3BhY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3dtcy13b3Jrc3BhY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBFZGl0aW9uV29ya3NwYWNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9lZGl0aW9uLXdvcmtzcGFjZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZlYXR1cmVXb3Jrc3BhY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2ZlYXR1cmUtd29ya3NwYWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmVhdHVyZVN0b3JlSW5NYXBFeHRlbnRTdHJhdGVneSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL3N0cmF0ZWdpZXMvaW4tbWFwLWV4dGVudCc7XG5pbXBvcnQgeyBRdWVyeWFibGVEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4uLy4uL3F1ZXJ5L3NoYXJlZC9xdWVyeS5pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lnb1dvcmtzcGFjZVVwZGF0b3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBXb3Jrc3BhY2VVcGRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgbGF5ZXJzJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBlbnRpdGllcyQkOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIEBJbnB1dCgpIG1hcDogSWdvTWFwO1xuXG4gIEBJbnB1dCgpIHdvcmtzcGFjZVN0b3JlOiBXb3Jrc3BhY2VTdG9yZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHdmc1dvcmtzcGFjZVNlcnZpY2U6IFdmc1dvcmtzcGFjZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB3bXNXb3Jrc3BhY2VTZXJ2aWNlOiBXbXNXb3Jrc3BhY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWRpdGlvbldvcmtzcGFjZVNlcnZpY2U6IEVkaXRpb25Xb3Jrc3BhY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmVhdHVyZVdvcmtzcGFjZVNlcnZpY2U6IEZlYXR1cmVXb3Jrc3BhY2VTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxheWVycyQkID0gdGhpcy5tYXAubGF5ZXJzJFxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDUwKSlcbiAgICAgIC5zdWJzY3JpYmUoKGxheWVyczogTGF5ZXJbXSkgPT5cbiAgICAgICAgdGhpcy5vbkxheWVyc0NoYW5nZShsYXllcnMpXG4gICAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5sYXllcnMkJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZW50aXRpZXMkJC5tYXAoZW50aXRpZXMgPT4gZW50aXRpZXMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBwcml2YXRlIG9uTGF5ZXJzQ2hhbmdlKGxheWVyczogTGF5ZXJbXSkge1xuICAgIGNvbnN0IGVkaXRhYmxlTGF5ZXJzID0gbGF5ZXJzLmZpbHRlcigobGF5ZXI6IExheWVyKSA9PlxuICAgICAgdGhpcy5sYXllcklzRWRpdGFibGUobGF5ZXIpXG4gICAgKTtcbiAgICBjb25zdCBlZGl0YWJsZUxheWVyc0lkcyA9IGVkaXRhYmxlTGF5ZXJzLm1hcCgobGF5ZXI6IExheWVyKSA9PiBsYXllci5pZCk7XG5cbiAgICBjb25zdCB3b3Jrc3BhY2VzVG9BZGQgPSBlZGl0YWJsZUxheWVyc1xuICAgICAgLm1hcCgobGF5ZXI6IFZlY3RvckxheWVyKSA9PiB0aGlzLmdldE9yQ3JlYXRlV29ya3NwYWNlKGxheWVyKSlcbiAgICAgIC5maWx0ZXIoKHdvcmtzcGFjZTogV29ya3NwYWNlIHwgdW5kZWZpbmVkKSA9PiB3b3Jrc3BhY2UgIT09IHVuZGVmaW5lZCk7XG5cbiAgICBjb25zdCB3b3Jrc3BhY2VzVG9SZW1vdmUgPSB0aGlzLndvcmtzcGFjZVN0b3JlLmFsbCgpXG4gICAgICAuZmlsdGVyKCh3b3Jrc3BhY2U6IFdvcmtzcGFjZSkgPT4ge1xuICAgICAgICByZXR1cm4gZWRpdGFibGVMYXllcnNJZHMuaW5kZXhPZih3b3Jrc3BhY2UuaWQpIDwgMDtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHdvcmtzcGFjZXNUb1JlbW92ZS5sZW5ndGggPiAwKSB7XG4gICAgICB3b3Jrc3BhY2VzVG9SZW1vdmUuZm9yRWFjaCgod29ya3NwYWNlOiBXb3Jrc3BhY2UpID0+IHtcbiAgICAgICAgd29ya3NwYWNlLmVudGl0eVN0b3JlLmRlYWN0aXZhdGVTdHJhdGVneU9mVHlwZShGZWF0dXJlU3RvcmVJbk1hcEV4dGVudFN0cmF0ZWd5KTtcbiAgICAgICAgd29ya3NwYWNlLmRlYWN0aXZhdGUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy53b3Jrc3BhY2VTdG9yZS5zdGF0ZS51cGRhdGVNYW55KHdvcmtzcGFjZXNUb1JlbW92ZSwge2FjdGl2ZTogZmFsc2UsIHNlbGVjdGVkOiBmYWxzZX0pO1xuICAgICAgdGhpcy53b3Jrc3BhY2VTdG9yZS5kZWxldGVNYW55KHdvcmtzcGFjZXNUb1JlbW92ZSk7XG4gICAgfVxuXG4gICAgaWYgKHdvcmtzcGFjZXNUb0FkZC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLndvcmtzcGFjZVN0b3JlLmluc2VydE1hbnkod29ya3NwYWNlc1RvQWRkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE9yQ3JlYXRlV29ya3NwYWNlKGxheWVyOiBWZWN0b3JMYXllciB8IEltYWdlTGF5ZXIpOiBXb3Jrc3BhY2UgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHdvcmtzcGFjZSA9IHRoaXMud29ya3NwYWNlU3RvcmUuZ2V0KGxheWVyLmlkKTtcbiAgICBpZiAod29ya3NwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGxheWVyLmRhdGFTb3VyY2UgaW5zdGFuY2VvZiBXRlNEYXRhU291cmNlICYmIGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uPy5lbmFibGVkICE9PSB0cnVlKSB7XG4gICAgICBjb25zdCB3ZnNXa3MgPSB0aGlzLndmc1dvcmtzcGFjZVNlcnZpY2UuY3JlYXRlV29ya3NwYWNlKGxheWVyIGFzIFZlY3RvckxheWVyLCB0aGlzLm1hcCk7XG4gICAgICByZXR1cm4gd2ZzV2tzO1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuZGF0YVNvdXJjZSBpbnN0YW5jZW9mIFdNU0RhdGFTb3VyY2UgJiYgbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmVkaXRpb24/LmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIGlmICghbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLnBhcmFtc1dGUykgeyByZXR1cm47IH1cbiAgICAgIGNvbnN0IHdtc1drcyA9IHRoaXMud21zV29ya3NwYWNlU2VydmljZS5jcmVhdGVXb3Jrc3BhY2UobGF5ZXIgYXMgSW1hZ2VMYXllciwgdGhpcy5tYXApO1xuICAgICAgd21zV2tzPy5pblJlc29sdXRpb25SYW5nZSQuc3Vic2NyaWJlKChpblJlc29sdXRpb25SYW5nZSkgPT4ge1xuICAgICAgICBpZiAoKGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucyBhcyBRdWVyeWFibGVEYXRhU291cmNlT3B0aW9ucyk/LnF1ZXJ5Rm9ybWF0QXNXbXMpIHtcbiAgICAgICAgICAod21zV2tzLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucyBhcyBRdWVyeWFibGVEYXRhU291cmNlT3B0aW9ucykucXVlcnlhYmxlID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gd21zV2tzO1xuICAgICAgICB9XG4gICAgICAgIChsYXllci5kYXRhU291cmNlLm9wdGlvbnMgYXMgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnMpLnF1ZXJ5YWJsZSA9ICFpblJlc29sdXRpb25SYW5nZTtcbiAgICAgICAgKHdtc1drcy5sYXllci5kYXRhU291cmNlLm9wdGlvbnMgYXMgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnMpLnF1ZXJ5YWJsZSA9IGluUmVzb2x1dGlvblJhbmdlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gd21zV2tzO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGxheWVyLmRhdGFTb3VyY2UgaW5zdGFuY2VvZiBGZWF0dXJlRGF0YVNvdXJjZSAmJlxuICAgICAgICAobGF5ZXIgYXMgVmVjdG9yTGF5ZXIpLmV4cG9ydGFibGUgPT09IHRydWUgJiZcbiAgICAgICAgbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmVkaXRpb24/LmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGZlYXR1cmVXa3MgPSB0aGlzLmZlYXR1cmVXb3Jrc3BhY2VTZXJ2aWNlLmNyZWF0ZVdvcmtzcGFjZShsYXllciBhcyBWZWN0b3JMYXllciwgdGhpcy5tYXApO1xuICAgICAgcmV0dXJuIGZlYXR1cmVXa3M7XG4gICAgfSBlbHNlIGlmIChsYXllci5kYXRhU291cmNlIGluc3RhbmNlb2YgV01TRGF0YVNvdXJjZSAmJiBsYXllci5kYXRhU291cmNlLm9wdGlvbnMuZWRpdGlvbj8uZW5hYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZWRpdGlvbldrcyA9IHRoaXMuZWRpdGlvbldvcmtzcGFjZVNlcnZpY2UuY3JlYXRlV29ya3NwYWNlKGxheWVyIGFzIEltYWdlTGF5ZXIsIHRoaXMubWFwKTtcbiAgICAgIHJldHVybiBlZGl0aW9uV2tzO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHByaXZhdGUgbGF5ZXJJc0VkaXRhYmxlKGxheWVyOiBMYXllcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBsYXllci5kYXRhU291cmNlO1xuICAgIGlmIChkYXRhU291cmNlIGluc3RhbmNlb2YgV0ZTRGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChkYXRhU291cmNlIGluc3RhbmNlb2YgRmVhdHVyZURhdGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoZGF0YVNvdXJjZSBpbnN0YW5jZW9mIFdNU0RhdGFTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VPcHRpb25zID0gKGRhdGFTb3VyY2Uub3B0aW9ucyB8fFxuICAgICAgICB7fSkgYXMgT2djRmlsdGVyYWJsZURhdGFTb3VyY2VPcHRpb25zO1xuICAgICAgcmV0dXJuIChkYXRhU291cmNlT3B0aW9ucy5vZ2NGaWx0ZXJzPy5lbmFibGVkIHx8IGRhdGFTb3VyY2Uub3B0aW9ucy5wYXJhbXNXRlM/LmZlYXR1cmVUeXBlcyAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==