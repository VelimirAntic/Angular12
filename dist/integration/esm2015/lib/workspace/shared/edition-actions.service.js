import { Inject, Injectable } from '@angular/core';
import { EntityStoreFilterCustomFuncStrategy, EntityStoreFilterSelectionStrategy } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import { mapExtentStrategyActiveToolTip, noElementSelected, OgcFilterWidget, } from '@igo2/geo';
import { StorageServiceEventEnum } from '@igo2/core';
import { map, skipWhile } from 'rxjs/operators';
import { handleZoomAuto } from './workspace.utils';
import * as i0 from "@angular/core";
import * as i1 from "../../storage/storage.state";
import * as i2 from "@igo2/core";
import * as i3 from "../../tool/tool.state";
import * as i4 from "@igo2/common";
export class EditionActionsService {
    constructor(ogcFilterWidget, storageState, languageService, mediaService, toolState) {
        this.ogcFilterWidget = ogcFilterWidget;
        this.storageState = storageState;
        this.languageService = languageService;
        this.mediaService = mediaService;
        this.toolState = toolState;
        this.maximize$ = new BehaviorSubject(this.storageService.get('workspaceMaximize'));
        this.zoomAuto$ = new BehaviorSubject(false);
    }
    get storageService() {
        return this.storageState.storageService;
    }
    get zoomAuto() {
        return this.storageService.get('zoomAuto');
    }
    ngOnDestroy() {
        if (this.storageChange$$) {
            this.storageChange$$.unsubscribe();
        }
    }
    loadActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
        const actions = this.buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$);
        workspace.actionStore.load(actions);
    }
    buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
        var _a, _b;
        this.zoomAuto$.next(this.zoomAuto);
        this.storageChange$$ = this.storageService.storageChange$
            .pipe(skipWhile((storageChange) => (storageChange === null || storageChange === void 0 ? void 0 : storageChange.key) !== 'zoomAuto' || (storageChange === null || storageChange === void 0 ? void 0 : storageChange.event) === StorageServiceEventEnum.CLEARED))
            .subscribe(() => {
            this.zoomAuto$.next(this.zoomAuto);
            handleZoomAuto(workspace, this.storageService);
        });
        const actions = [
            {
                id: 'zoomAuto',
                checkbox: true,
                title: 'igo.integration.workspace.zoomAuto.title',
                tooltip: 'igo.integration.workspace.zoomAuto.tooltip',
                checkCondition: this.zoomAuto$,
                handler: () => {
                    handleZoomAuto(workspace, this.storageService);
                    this.storageService.set('zoomAuto', !this.storageService.get('zoomAuto'));
                }
            },
            {
                id: 'filterInMapExtent',
                checkbox: true,
                title: 'igo.integration.workspace.inMapExtent.title',
                tooltip: mapExtentStrategyActiveToolTip(workspace),
                checkCondition: rowsInMapExtentCheckCondition$,
                handler: () => rowsInMapExtentCheckCondition$.next(!rowsInMapExtentCheckCondition$.value)
            },
            {
                id: 'selectedOnly',
                checkbox: true,
                title: 'igo.integration.workspace.selected.title',
                tooltip: 'igo.integration.workspace.selected.title',
                checkCondition: selectOnlyCheckCondition$,
                handler: () => selectOnlyCheckCondition$.next(!selectOnlyCheckCondition$.value)
            },
            {
                id: 'clearselection',
                icon: 'select-off',
                title: 'igo.integration.workspace.clearSelection.title',
                tooltip: 'igo.integration.workspace.clearSelection.tooltip',
                handler: (ws) => {
                    ws.entityStore.state.updateMany(ws.entityStore.view.all(), { selected: false });
                },
                args: [workspace],
                availability: (ws) => noElementSelected(ws)
            },
            {
                id: 'wfsDownload',
                icon: 'file-export',
                title: 'igo.integration.workspace.download.title',
                tooltip: 'igo.integration.workspace.download.tooltip',
                handler: (ws) => {
                    const filterStrategy = ws.entityStore.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
                    const filterSelectionStrategy = ws.entityStore.getStrategyOfType(EntityStoreFilterSelectionStrategy);
                    const layersWithSelection = filterSelectionStrategy.active ? [ws.layer.id] : [];
                    this.toolState.toolToActivateFromOptions({
                        tool: 'importExport',
                        options: { layers: [ws.layer.id], featureInMapExtent: filterStrategy.active, layersWithSelection }
                    });
                },
                args: [workspace]
            },
            {
                id: 'ogcFilter',
                icon: 'filter',
                title: 'igo.integration.workspace.ogcFilter.title',
                tooltip: 'igo.integration.workspace.ogcFilter.tooltip',
                handler: (widget, ws) => {
                    ws.activateWidget(widget, {
                        map: ws.map,
                        layer: ws.layer
                    });
                },
                args: [this.ogcFilterWidget, workspace]
            },
            {
                id: 'maximize',
                title: this.languageService.translate.instant('igo.integration.workspace.maximize'),
                tooltip: this.languageService.translate.instant('igo.integration.workspace.maximizeTooltip'),
                icon: 'resize',
                display: () => {
                    return this.maximize$.pipe(map((v) => !v && !this.mediaService.isMobile()));
                },
                handler: () => {
                    if (!this.mediaService.isMobile()) {
                        this.maximize$.next(true);
                    }
                },
            },
            {
                id: 'standardExtent',
                title: this.languageService.translate.instant('igo.integration.workspace.standardExtent'),
                tooltip: this.languageService.translate.instant('igo.integration.workspace.standardExtentTooltip'),
                icon: 'resize',
                display: () => {
                    return this.maximize$.pipe(map((v) => v && !this.mediaService.isMobile()));
                },
                handler: () => {
                    this.maximize$.next(false);
                }
            }
        ];
        return ((_b = (_a = workspace.layer.dataSource.ogcFilters$) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.enabled) ?
            actions : actions.filter(action => action.id !== 'ogcFilter');
    }
}
EditionActionsService.ɵfac = function EditionActionsService_Factory(t) { return new (t || EditionActionsService)(i0.ɵɵinject(OgcFilterWidget), i0.ɵɵinject(i1.StorageState), i0.ɵɵinject(i2.LanguageService), i0.ɵɵinject(i2.MediaService), i0.ɵɵinject(i3.ToolState)); };
EditionActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EditionActionsService, factory: EditionActionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditionActionsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i4.Widget, decorators: [{
                type: Inject,
                args: [OgcFilterWidget]
            }] }, { type: i1.StorageState }, { type: i2.LanguageService }, { type: i2.MediaService }, { type: i3.ToolState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGlvbi1hY3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL3dvcmtzcGFjZS9zaGFyZWQvZWRpdGlvbi1hY3Rpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUVMLG1DQUFtQyxFQUNuQyxrQ0FBa0MsRUFFbkMsTUFBTSxjQUFjLENBQUM7QUFFdEIsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUVMLDhCQUE4QixFQUM5QixpQkFBaUIsRUFFakIsZUFBZSxHQUVoQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQXVDLHVCQUF1QixFQUFnQyxNQUFNLFlBQVksQ0FBQztBQUV4SCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7O0FBS25ELE1BQU0sT0FBTyxxQkFBcUI7SUFpQmhDLFlBQ21DLGVBQXVCLEVBQ2hELFlBQTBCLEVBQzNCLGVBQWdDLEVBQy9CLFlBQTBCLEVBQzFCLFNBQW9CO1FBSkssb0JBQWUsR0FBZixlQUFlLENBQVE7UUFDaEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDM0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFwQnZCLGNBQVMsR0FBNkIsSUFBSSxlQUFlLENBQzlELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFZLENBQ3hELENBQUM7UUFFRixjQUFTLEdBQTZCLElBQUksZUFBZSxDQUFDLEtB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Q0UsRUFBRSxFQUFFLGdCQUFnQjtnQkFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDM0MsMENBQTBDLENBQzNDO2dCQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQzdDLGlEQUFpRCxDQUNsRDtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztnQkFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2FBQ0Y7U0FDRixDQUFDO1FBQ0YsT0FBTyxDQUFBLE1BQUEsTUFBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQXNDLENBQUMsV0FBVywwQ0FBRSxLQUFLLDBDQUFFLE9BQU8sRUFBQyxDQUFDO1lBQzVGLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssV0FBVyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7MEZBL0pVLHFCQUFxQixjQWtCdEIsZUFBZTsyRUFsQmQscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFGcEIsTUFBTTt1RkFFUCxxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFtQkksTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBFbnRpdHlTdG9yZUZpbHRlckN1c3RvbUZ1bmNTdHJhdGVneSxcbiAgRW50aXR5U3RvcmVGaWx0ZXJTZWxlY3Rpb25TdHJhdGVneSxcbiAgV2lkZ2V0XG59IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBFZGl0aW9uV29ya3NwYWNlLFxuICBtYXBFeHRlbnRTdHJhdGVneUFjdGl2ZVRvb2xUaXAsXG4gIG5vRWxlbWVudFNlbGVjdGVkLFxuICBFeHBvcnRPcHRpb25zLFxuICBPZ2NGaWx0ZXJXaWRnZXQsXG4gIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlLFxufSBmcm9tICdAaWdvMi9nZW8nO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlRXZlbnQsIFN0b3JhZ2VTZXJ2aWNlRXZlbnRFbnVtLCBMYW5ndWFnZVNlcnZpY2UsIE1lZGlhU2VydmljZX0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlU3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yYWdlL3N0b3JhZ2Uuc3RhdGUnO1xuaW1wb3J0IHsgbWFwLCBza2lwV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUb29sU3RhdGUgfSBmcm9tICcuLi8uLi90b29sL3Rvb2wuc3RhdGUnO1xuaW1wb3J0IHsgaGFuZGxlWm9vbUF1dG8gfSBmcm9tICcuL3dvcmtzcGFjZS51dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRpb25BY3Rpb25zU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIG1heGltaXplJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnd29ya3NwYWNlTWF4aW1pemUnKSBhcyBib29sZWFuXG4gICk7XG5cbiAgem9vbUF1dG8kOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcHJpdmF0ZSBzdG9yYWdlQ2hhbmdlJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBnZXQgc3RvcmFnZVNlcnZpY2UoKTogU3RvcmFnZVNlcnZpY2Uge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VTdGF0ZS5zdG9yYWdlU2VydmljZTtcbiAgfVxuXG4gIGdldCB6b29tQXV0bygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3pvb21BdXRvJykgYXMgYm9vbGVhbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoT2djRmlsdGVyV2lkZ2V0KSBwcml2YXRlIG9nY0ZpbHRlcldpZGdldDogV2lkZ2V0LFxuICAgIHByaXZhdGUgc3RvcmFnZVN0YXRlOiBTdG9yYWdlU3RhdGUsXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b29sU3RhdGU6IFRvb2xTdGF0ZSkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlQ2hhbmdlJCQpIHtcbiAgICAgIHRoaXMuc3RvcmFnZUNoYW5nZSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEFjdGlvbnMoXG4gICAgd29ya3NwYWNlOiBFZGl0aW9uV29ya3NwYWNlLFxuICAgIHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+LFxuICAgIHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPlxuICAgICkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmJ1aWxkQWN0aW9ucyhcbiAgICAgIHdvcmtzcGFjZSxcbiAgICAgIHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJCxcbiAgICAgIHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiRcbiAgICAgICk7XG4gICAgd29ya3NwYWNlLmFjdGlvblN0b3JlLmxvYWQoYWN0aW9ucyk7XG4gIH1cblxuICBidWlsZEFjdGlvbnMoXG4gICAgd29ya3NwYWNlOiBFZGl0aW9uV29ya3NwYWNlLFxuICAgIHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+LFxuICAgIHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPlxuICAgICk6IEFjdGlvbltdIHtcbiAgICB0aGlzLnpvb21BdXRvJC5uZXh0KHRoaXMuem9vbUF1dG8pO1xuICAgIHRoaXMuc3RvcmFnZUNoYW5nZSQkID0gdGhpcy5zdG9yYWdlU2VydmljZS5zdG9yYWdlQ2hhbmdlJFxuICAgICAgLnBpcGUoc2tpcFdoaWxlKChzdG9yYWdlQ2hhbmdlOiBTdG9yYWdlU2VydmljZUV2ZW50KSA9PlxuICAgICAgICBzdG9yYWdlQ2hhbmdlPy5rZXkgIT09ICd6b29tQXV0bycgfHwgc3RvcmFnZUNoYW5nZT8uZXZlbnQgPT09IFN0b3JhZ2VTZXJ2aWNlRXZlbnRFbnVtLkNMRUFSRUQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9vbUF1dG8kLm5leHQodGhpcy56b29tQXV0byk7XG4gICAgICAgIGhhbmRsZVpvb21BdXRvKHdvcmtzcGFjZSwgdGhpcy5zdG9yYWdlU2VydmljZSk7XG4gICAgICB9KTtcbiAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAge1xuICAgICAgICBpZDogJ3pvb21BdXRvJyxcbiAgICAgICAgY2hlY2tib3g6IHRydWUsXG4gICAgICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS56b29tQXV0by50aXRsZScsXG4gICAgICAgIHRvb2x0aXA6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLnpvb21BdXRvLnRvb2x0aXAnLFxuICAgICAgICBjaGVja0NvbmRpdGlvbjogdGhpcy56b29tQXV0byQsXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICBoYW5kbGVab29tQXV0byh3b3Jrc3BhY2UsIHRoaXMuc3RvcmFnZVNlcnZpY2UpO1xuICAgICAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCd6b29tQXV0bycsICF0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnem9vbUF1dG8nKSBhcyBib29sZWFuKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdmaWx0ZXJJbk1hcEV4dGVudCcsXG4gICAgICAgIGNoZWNrYm94OiB0cnVlLFxuICAgICAgICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2UuaW5NYXBFeHRlbnQudGl0bGUnLFxuICAgICAgICB0b29sdGlwOiBtYXBFeHRlbnRTdHJhdGVneUFjdGl2ZVRvb2xUaXAod29ya3NwYWNlKSxcbiAgICAgICAgY2hlY2tDb25kaXRpb246IHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJCxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4gcm93c0luTWFwRXh0ZW50Q2hlY2tDb25kaXRpb24kLm5leHQoIXJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnc2VsZWN0ZWRPbmx5JyxcbiAgICAgICAgY2hlY2tib3g6IHRydWUsXG4gICAgICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5zZWxlY3RlZC50aXRsZScsXG4gICAgICAgIHRvb2x0aXA6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLnNlbGVjdGVkLnRpdGxlJyxcbiAgICAgICAgY2hlY2tDb25kaXRpb246IHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiQsXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiQubmV4dCghc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnY2xlYXJzZWxlY3Rpb24nLFxuICAgICAgICBpY29uOiAnc2VsZWN0LW9mZicsXG4gICAgICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5jbGVhclNlbGVjdGlvbi50aXRsZScsXG4gICAgICAgIHRvb2x0aXA6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLmNsZWFyU2VsZWN0aW9uLnRvb2x0aXAnLFxuICAgICAgICBoYW5kbGVyOiAod3M6IEVkaXRpb25Xb3Jrc3BhY2UpID0+IHtcbiAgICAgICAgICB3cy5lbnRpdHlTdG9yZS5zdGF0ZS51cGRhdGVNYW55KHdzLmVudGl0eVN0b3JlLnZpZXcuYWxsKCksIHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhcmdzOiBbd29ya3NwYWNlXSxcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAod3M6IEVkaXRpb25Xb3Jrc3BhY2UpID0+IG5vRWxlbWVudFNlbGVjdGVkKHdzKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICd3ZnNEb3dubG9hZCcsXG4gICAgICAgIGljb246ICdmaWxlLWV4cG9ydCcsXG4gICAgICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5kb3dubG9hZC50aXRsZScsXG4gICAgICAgIHRvb2x0aXA6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLmRvd25sb2FkLnRvb2x0aXAnLFxuICAgICAgICBoYW5kbGVyOiAod3M6IEVkaXRpb25Xb3Jrc3BhY2UpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJTdHJhdGVneSA9IHdzLmVudGl0eVN0b3JlLmdldFN0cmF0ZWd5T2ZUeXBlKEVudGl0eVN0b3JlRmlsdGVyQ3VzdG9tRnVuY1N0cmF0ZWd5KTtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJTZWxlY3Rpb25TdHJhdGVneSA9IHdzLmVudGl0eVN0b3JlLmdldFN0cmF0ZWd5T2ZUeXBlKEVudGl0eVN0b3JlRmlsdGVyU2VsZWN0aW9uU3RyYXRlZ3kpO1xuICAgICAgICAgIGNvbnN0IGxheWVyc1dpdGhTZWxlY3Rpb24gPSBmaWx0ZXJTZWxlY3Rpb25TdHJhdGVneS5hY3RpdmUgPyBbd3MubGF5ZXIuaWRdIDogW107XG4gICAgICAgICAgdGhpcy50b29sU3RhdGUudG9vbFRvQWN0aXZhdGVGcm9tT3B0aW9ucyh7XG4gICAgICAgICAgICB0b29sOiAnaW1wb3J0RXhwb3J0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHsgbGF5ZXJzOiBbd3MubGF5ZXIuaWRdLCBmZWF0dXJlSW5NYXBFeHRlbnQ6IGZpbHRlclN0cmF0ZWd5LmFjdGl2ZSwgbGF5ZXJzV2l0aFNlbGVjdGlvbiB9IGFzIEV4cG9ydE9wdGlvbnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXJnczogW3dvcmtzcGFjZV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnb2djRmlsdGVyJyxcbiAgICAgICAgaWNvbjogJ2ZpbHRlcicsXG4gICAgICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5vZ2NGaWx0ZXIudGl0bGUnLFxuICAgICAgICB0b29sdGlwOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5vZ2NGaWx0ZXIudG9vbHRpcCcsXG4gICAgICAgIGhhbmRsZXI6ICh3aWRnZXQ6IFdpZGdldCwgd3M6IEVkaXRpb25Xb3Jrc3BhY2UpID0+IHtcbiAgICAgICAgICB3cy5hY3RpdmF0ZVdpZGdldCh3aWRnZXQsIHtcbiAgICAgICAgICAgIG1hcDogd3MubWFwLFxuICAgICAgICAgICAgbGF5ZXI6IHdzLmxheWVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFyZ3M6IFt0aGlzLm9nY0ZpbHRlcldpZGdldCwgd29ya3NwYWNlXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdtYXhpbWl6ZScsXG4gICAgICAgIHRpdGxlOiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5tYXhpbWl6ZScpLFxuICAgICAgICB0b29sdGlwOiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5tYXhpbWl6ZVRvb2x0aXAnXG4gICAgICAgICksXG4gICAgICAgIGljb246ICdyZXNpemUnLFxuICAgICAgICBkaXNwbGF5OiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWF4aW1pemUkLnBpcGUobWFwKCh2KSA9PiAhdiAmJiAhdGhpcy5tZWRpYVNlcnZpY2UuaXNNb2JpbGUoKSkpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLm1lZGlhU2VydmljZS5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLm1heGltaXplJC5uZXh0KHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnc3RhbmRhcmRFeHRlbnQnLFxuICAgICAgICB0aXRsZTogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2Uuc3RhbmRhcmRFeHRlbnQnXG4gICAgICAgICksXG4gICAgICAgIHRvb2x0aXA6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLnN0YW5kYXJkRXh0ZW50VG9vbHRpcCdcbiAgICAgICAgKSxcbiAgICAgICAgaWNvbjogJ3Jlc2l6ZScsXG4gICAgICAgIGRpc3BsYXk6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tYXhpbWl6ZSQucGlwZShtYXAoKHYpID0+IHYgJiYgIXRoaXMubWVkaWFTZXJ2aWNlLmlzTW9iaWxlKCkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMubWF4aW1pemUkLm5leHQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gKHdvcmtzcGFjZS5sYXllci5kYXRhU291cmNlIGFzIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlKS5vZ2NGaWx0ZXJzJD8udmFsdWU/LmVuYWJsZWQgP1xuICAgIGFjdGlvbnMgOiBhY3Rpb25zLmZpbHRlcihhY3Rpb24gPT4gYWN0aW9uLmlkICE9PSAnb2djRmlsdGVyJyk7XG4gIH1cbn1cbiJdfQ==