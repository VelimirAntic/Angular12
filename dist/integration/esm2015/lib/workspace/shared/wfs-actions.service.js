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
export class WfsActionsService {
    constructor(ogcFilterWidget, storageState, languageService, mediaService, toolState) {
        this.ogcFilterWidget = ogcFilterWidget;
        this.storageState = storageState;
        this.languageService = languageService;
        this.mediaService = mediaService;
        this.toolState = toolState;
        this.maximize$ = new BehaviorSubject(this.storageService.get('workspaceMaximize'));
        this.selectOnlyCheckCondition$ = new BehaviorSubject(false);
        // rowsInMapExtentCheckCondition$: BehaviorSubject<boolean> = new BehaviorSubject(true);
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
WfsActionsService.ɵfac = function WfsActionsService_Factory(t) { return new (t || WfsActionsService)(i0.ɵɵinject(OgcFilterWidget), i0.ɵɵinject(i1.StorageState), i0.ɵɵinject(i2.LanguageService), i0.ɵɵinject(i2.MediaService), i0.ɵɵinject(i3.ToolState)); };
WfsActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WfsActionsService, factory: WfsActionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WfsActionsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i4.Widget, decorators: [{
                type: Inject,
                args: [OgcFilterWidget]
            }] }, { type: i1.StorageState }, { type: i2.LanguageService }, { type: i2.MediaService }, { type: i3.ToolState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ZzLWFjdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvd29ya3NwYWNlL3NoYXJlZC93ZnMtYWN0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFFTCxtQ0FBbUMsRUFDbkMsa0NBQWtDLEVBRW5DLE1BQU0sY0FBYyxDQUFDO0FBRXRCLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFFTCw4QkFBOEIsRUFDOUIsaUJBQWlCLEVBRWpCLGVBQWUsR0FFaEIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUF1Qyx1QkFBdUIsRUFBZ0MsTUFBTSxZQUFZLENBQUM7QUFFeEgsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQUtuRCxNQUFNLE9BQU8saUJBQWlCO0lBbUI1QixZQUNtQyxlQUF1QixFQUNoRCxZQUEwQixFQUMzQixlQUFnQyxFQUMvQixZQUEwQixFQUMxQixTQUFvQjtRQUpLLG9CQUFlLEdBQWYsZUFBZSxDQUFRO1FBQ2hELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzNCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBdEJ2QixjQUFTLEdBQTZCLElBQUksZUFBZSxDQUM5RCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBWSxDQUN4RCxDQUFDO1FBRUYsOEJBQXlCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FB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LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBFbnRpdHlTdG9yZUZpbHRlckN1c3RvbUZ1bmNTdHJhdGVneSxcbiAgRW50aXR5U3RvcmVGaWx0ZXJTZWxlY3Rpb25TdHJhdGVneSxcbiAgV2lkZ2V0XG59IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBXZnNXb3Jrc3BhY2UsXG4gIG1hcEV4dGVudFN0cmF0ZWd5QWN0aXZlVG9vbFRpcCxcbiAgbm9FbGVtZW50U2VsZWN0ZWQsXG4gIEV4cG9ydE9wdGlvbnMsXG4gIE9nY0ZpbHRlcldpZGdldCxcbiAgT2djRmlsdGVyYWJsZURhdGFTb3VyY2UsXG59IGZyb20gJ0BpZ28yL2dlbyc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSwgU3RvcmFnZVNlcnZpY2VFdmVudCwgU3RvcmFnZVNlcnZpY2VFdmVudEVudW0sIExhbmd1YWdlU2VydmljZSwgTWVkaWFTZXJ2aWNlfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IFN0b3JhZ2VTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JhZ2Uvc3RvcmFnZS5zdGF0ZSc7XG5pbXBvcnQgeyBtYXAsIHNraXBXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRvb2xTdGF0ZSB9IGZyb20gJy4uLy4uL3Rvb2wvdG9vbC5zdGF0ZSc7XG5pbXBvcnQgeyBoYW5kbGVab29tQXV0byB9IGZyb20gJy4vd29ya3NwYWNlLnV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV2ZzQWN0aW9uc1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBtYXhpbWl6ZSQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoXG4gICAgdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3dvcmtzcGFjZU1heGltaXplJykgYXMgYm9vbGVhblxuICApO1xuXG4gIHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAvLyByb3dzSW5NYXBFeHRlbnRDaGVja0NvbmRpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XG4gIHpvb21BdXRvJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHByaXZhdGUgc3RvcmFnZUNoYW5nZSQkOiBTdWJzY3JpcHRpb247XG5cbiAgZ2V0IHN0b3JhZ2VTZXJ2aWNlKCk6IFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU3RhdGUuc3RvcmFnZVNlcnZpY2U7XG4gIH1cblxuICBnZXQgem9vbUF1dG8oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCd6b29tQXV0bycpIGFzIGJvb2xlYW47XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE9nY0ZpbHRlcldpZGdldCkgcHJpdmF0ZSBvZ2NGaWx0ZXJXaWRnZXQ6IFdpZGdldCxcbiAgICBwcml2YXRlIHN0b3JhZ2VTdGF0ZTogU3RvcmFnZVN0YXRlLFxuICAgIHB1YmxpYyBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIG1lZGlhU2VydmljZTogTWVkaWFTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9vbFN0YXRlOiBUb29sU3RhdGUpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RvcmFnZUNoYW5nZSQkKSB7XG4gICAgICB0aGlzLnN0b3JhZ2VDaGFuZ2UkJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRBY3Rpb25zKFxuICAgIHdvcmtzcGFjZTogV2ZzV29ya3NwYWNlLFxuICAgIHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+LFxuICAgIHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPlxuICAgICkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmJ1aWxkQWN0aW9ucyhcbiAgICAgIHdvcmtzcGFjZSxcbiAgICAgIHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJCxcbiAgICAgIHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiRcbiAgICAgICk7XG4gICAgd29ya3NwYWNlLmFjdGlvblN0b3JlLmxvYWQoYWN0aW9ucyk7XG4gIH1cblxuICBidWlsZEFjdGlvbnMoXG4gICAgd29ya3NwYWNlOiBXZnNXb3Jrc3BhY2UsXG4gICAgcm93c0luTWFwRXh0ZW50Q2hlY2tDb25kaXRpb24kOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4sXG4gICAgc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+XG4gICAgKTogQWN0aW9uW10ge1xuICAgIHRoaXMuem9vbUF1dG8kLm5leHQodGhpcy56b29tQXV0byk7XG4gICAgdGhpcy5zdG9yYWdlQ2hhbmdlJCQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnN0b3JhZ2VDaGFuZ2UkXG4gICAgICAucGlwZShza2lwV2hpbGUoKHN0b3JhZ2VDaGFuZ2U6IFN0b3JhZ2VTZXJ2aWNlRXZlbnQpID0+XG4gICAgICAgIHN0b3JhZ2VDaGFuZ2U/LmtleSAhPT0gJ3pvb21BdXRvJyB8fCBzdG9yYWdlQ2hhbmdlPy5ldmVudCA9PT0gU3RvcmFnZVNlcnZpY2VFdmVudEVudW0uQ0xFQVJFRCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy56b29tQXV0byQubmV4dCh0aGlzLnpvb21BdXRvKTtcbiAgICAgICAgaGFuZGxlWm9vbUF1dG8od29ya3NwYWNlLCB0aGlzLnN0b3JhZ2VTZXJ2aWNlKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnem9vbUF1dG8nLFxuICAgICAgICBjaGVja2JveDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLnpvb21BdXRvLnRpdGxlJyxcbiAgICAgICAgdG9vbHRpcDogJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2Uuem9vbUF1dG8udG9vbHRpcCcsXG4gICAgICAgIGNoZWNrQ29uZGl0aW9uOiB0aGlzLnpvb21BdXRvJCxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgIGhhbmRsZVpvb21BdXRvKHdvcmtzcGFjZSwgdGhpcy5zdG9yYWdlU2VydmljZSk7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ3pvb21BdXRvJywgIXRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCd6b29tQXV0bycpIGFzIGJvb2xlYW4pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2ZpbHRlckluTWFwRXh0ZW50JyxcbiAgICAgICAgY2hlY2tib3g6IHRydWUsXG4gICAgICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5pbk1hcEV4dGVudC50aXRsZScsXG4gICAgICAgIHRvb2x0aXA6IG1hcEV4dGVudFN0cmF0ZWd5QWN0aXZlVG9vbFRpcCh3b3Jrc3BhY2UpLFxuICAgICAgICBjaGVja0NvbmRpdGlvbjogcm93c0luTWFwRXh0ZW50Q2hlY2tDb25kaXRpb24kLFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiByb3dzSW5NYXBFeHRlbnRDaGVja0NvbmRpdGlvbiQubmV4dCghcm93c0luTWFwRXh0ZW50Q2hlY2tDb25kaXRpb24kLnZhbHVlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzZWxlY3RlZE9ubHknLFxuICAgICAgICBjaGVja2JveDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLnNlbGVjdGVkLnRpdGxlJyxcbiAgICAgICAgdG9vbHRpcDogJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2Uuc2VsZWN0ZWQudGl0bGUnLFxuICAgICAgICBjaGVja0NvbmRpdGlvbjogc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJCxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4gc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJC5uZXh0KCFzZWxlY3RPbmx5Q2hlY2tDb25kaXRpb24kLnZhbHVlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjbGVhcnNlbGVjdGlvbicsXG4gICAgICAgIGljb246ICdzZWxlY3Qtb2ZmJyxcbiAgICAgICAgdGl0bGU6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLmNsZWFyU2VsZWN0aW9uLnRpdGxlJyxcbiAgICAgICAgdG9vbHRpcDogJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2UuY2xlYXJTZWxlY3Rpb24udG9vbHRpcCcsXG4gICAgICAgIGhhbmRsZXI6ICh3czogV2ZzV29ya3NwYWNlKSA9PiB7XG4gICAgICAgICAgd3MuZW50aXR5U3RvcmUuc3RhdGUudXBkYXRlTWFueSh3cy5lbnRpdHlTdG9yZS52aWV3LmFsbCgpLCB7IHNlbGVjdGVkOiBmYWxzZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXJnczogW3dvcmtzcGFjZV0sXG4gICAgICAgIGF2YWlsYWJpbGl0eTogKHdzOiBXZnNXb3Jrc3BhY2UpID0+IG5vRWxlbWVudFNlbGVjdGVkKHdzKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICd3ZnNEb3dubG9hZCcsXG4gICAgICAgIGljb246ICdmaWxlLWV4cG9ydCcsXG4gICAgICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5kb3dubG9hZC50aXRsZScsXG4gICAgICAgIHRvb2x0aXA6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLmRvd25sb2FkLnRvb2x0aXAnLFxuICAgICAgICBoYW5kbGVyOiAod3M6IFdmc1dvcmtzcGFjZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlclN0cmF0ZWd5ID0gd3MuZW50aXR5U3RvcmUuZ2V0U3RyYXRlZ3lPZlR5cGUoRW50aXR5U3RvcmVGaWx0ZXJDdXN0b21GdW5jU3RyYXRlZ3kpO1xuICAgICAgICAgIGNvbnN0IGZpbHRlclNlbGVjdGlvblN0cmF0ZWd5ID0gd3MuZW50aXR5U3RvcmUuZ2V0U3RyYXRlZ3lPZlR5cGUoRW50aXR5U3RvcmVGaWx0ZXJTZWxlY3Rpb25TdHJhdGVneSk7XG4gICAgICAgICAgY29uc3QgbGF5ZXJzV2l0aFNlbGVjdGlvbiA9IGZpbHRlclNlbGVjdGlvblN0cmF0ZWd5LmFjdGl2ZSA/IFt3cy5sYXllci5pZF0gOiBbXTtcbiAgICAgICAgICB0aGlzLnRvb2xTdGF0ZS50b29sVG9BY3RpdmF0ZUZyb21PcHRpb25zKHtcbiAgICAgICAgICAgIHRvb2w6ICdpbXBvcnRFeHBvcnQnLFxuICAgICAgICAgICAgb3B0aW9uczogeyBsYXllcnM6IFt3cy5sYXllci5pZF0sIGZlYXR1cmVJbk1hcEV4dGVudDogZmlsdGVyU3RyYXRlZ3kuYWN0aXZlLCBsYXllcnNXaXRoU2VsZWN0aW9uIH0gYXMgRXhwb3J0T3B0aW9uc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhcmdzOiBbd29ya3NwYWNlXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdvZ2NGaWx0ZXInLFxuICAgICAgICBpY29uOiAnZmlsdGVyJyxcbiAgICAgICAgdGl0bGU6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLm9nY0ZpbHRlci50aXRsZScsXG4gICAgICAgIHRvb2x0aXA6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLm9nY0ZpbHRlci50b29sdGlwJyxcbiAgICAgICAgaGFuZGxlcjogKHdpZGdldDogV2lkZ2V0LCB3czogV2ZzV29ya3NwYWNlKSA9PiB7XG4gICAgICAgICAgd3MuYWN0aXZhdGVXaWRnZXQod2lkZ2V0LCB7XG4gICAgICAgICAgICBtYXA6IHdzLm1hcCxcbiAgICAgICAgICAgIGxheWVyOiB3cy5sYXllclxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhcmdzOiBbdGhpcy5vZ2NGaWx0ZXJXaWRnZXQsIHdvcmtzcGFjZV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnbWF4aW1pemUnLFxuICAgICAgICB0aXRsZTogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2UubWF4aW1pemUnKSxcbiAgICAgICAgdG9vbHRpcDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2UubWF4aW1pemVUb29sdGlwJ1xuICAgICAgICApLFxuICAgICAgICBpY29uOiAncmVzaXplJyxcbiAgICAgICAgZGlzcGxheTogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1heGltaXplJC5waXBlKG1hcCgodikgPT4gIXYgJiYgIXRoaXMubWVkaWFTZXJ2aWNlLmlzTW9iaWxlKCkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5tZWRpYVNlcnZpY2UuaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgdGhpcy5tYXhpbWl6ZSQubmV4dCh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3N0YW5kYXJkRXh0ZW50JyxcbiAgICAgICAgdGl0bGU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLnN0YW5kYXJkRXh0ZW50J1xuICAgICAgICApLFxuICAgICAgICB0b29sdGlwOiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5zdGFuZGFyZEV4dGVudFRvb2x0aXAnXG4gICAgICAgICksXG4gICAgICAgIGljb246ICdyZXNpemUnLFxuICAgICAgICBkaXNwbGF5OiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWF4aW1pemUkLnBpcGUobWFwKCh2KSA9PiB2ICYmICF0aGlzLm1lZGlhU2VydmljZS5pc01vYmlsZSgpKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1heGltaXplJC5uZXh0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG4gICAgcmV0dXJuICh3b3Jrc3BhY2UubGF5ZXIuZGF0YVNvdXJjZSBhcyBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZSkub2djRmlsdGVycyQ/LnZhbHVlPy5lbmFibGVkID9cbiAgICBhY3Rpb25zIDogYWN0aW9ucy5maWx0ZXIoYWN0aW9uID0+IGFjdGlvbi5pZCAhPT0gJ29nY0ZpbHRlcicpO1xuICB9XG59XG4iXX0=