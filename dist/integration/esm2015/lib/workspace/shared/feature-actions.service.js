import { Injectable } from '@angular/core';
import { EntityStoreFilterCustomFuncStrategy, EntityStoreFilterSelectionStrategy } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import { mapExtentStrategyActiveToolTip, noElementSelected } from '@igo2/geo';
import { StorageServiceEventEnum } from '@igo2/core';
import { map, skipWhile } from 'rxjs/operators';
import { handleZoomAuto } from './workspace.utils';
import * as i0 from "@angular/core";
import * as i1 from "../../storage/storage.state";
import * as i2 from "@igo2/core";
import * as i3 from "../../tool/tool.state";
export class FeatureActionsService {
    constructor(storageState, languageService, toolState, mediaService) {
        this.storageState = storageState;
        this.languageService = languageService;
        this.toolState = toolState;
        this.mediaService = mediaService;
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
        this.zoomAuto$.next(this.zoomAuto);
        this.storageChange$$ = this.storageService.storageChange$
            .pipe(skipWhile((storageChange) => storageChange.key !== 'zoomAuto' || storageChange.event === StorageServiceEventEnum.CLEARED))
            .subscribe(() => {
            this.zoomAuto$.next(this.zoomAuto);
            handleZoomAuto(workspace, this.storageService);
        });
        return [
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
                tooltip: 'igo.integration.workspace.selected.tooltip',
                checkCondition: selectOnlyCheckCondition$,
                handler: () => selectOnlyCheckCondition$.next(!selectOnlyCheckCondition$.value)
            },
            {
                id: 'clearselection',
                icon: 'select-off',
                title: 'igo.integration.workspace.clearSelection.title',
                tooltip: 'igo.integration.workspace.clearSelection.tooltip',
                handler: (ws) => {
                    ws.entityStore.state.updateMany(ws.entityStore.view.all(), {
                        selected: false
                    });
                },
                args: [workspace],
                availability: (ws) => noElementSelected(ws)
            },
            {
                id: 'featureDownload',
                icon: 'file-export',
                title: 'igo.integration.workspace.download.title',
                tooltip: 'igo.integration.workspace.download.tooltip',
                handler: (ws) => {
                    const filterStrategy = ws.entityStore.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
                    const filterSelectionStrategy = ws.entityStore.getStrategyOfType(EntityStoreFilterSelectionStrategy);
                    const layersWithSelection = filterSelectionStrategy.active
                        ? [ws.layer.id]
                        : [];
                    this.toolState.toolToActivateFromOptions({
                        tool: 'importExport',
                        options: {
                            layers: [ws.layer.id],
                            featureInMapExtent: filterStrategy.active,
                            layersWithSelection
                        }
                    });
                },
                args: [workspace]
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
    }
}
FeatureActionsService.ɵfac = function FeatureActionsService_Factory(t) { return new (t || FeatureActionsService)(i0.ɵɵinject(i1.StorageState), i0.ɵɵinject(i2.LanguageService), i0.ɵɵinject(i3.ToolState), i0.ɵɵinject(i2.MediaService)); };
FeatureActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FeatureActionsService, factory: FeatureActionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureActionsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.StorageState }, { type: i2.LanguageService }, { type: i3.ToolState }, { type: i2.MediaService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1hY3Rpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL3dvcmtzcGFjZS9zaGFyZWQvZmVhdHVyZS1hY3Rpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBRUwsbUNBQW1DLEVBQ25DLGtDQUFrQyxFQUNuQyxNQUFNLGNBQWMsQ0FBQztBQUV0QixPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBRUwsOEJBQThCLEVBQzlCLGlCQUFpQixFQUVsQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQXVDLHVCQUF1QixFQUFnQyxNQUFNLFlBQVksQ0FBQztBQUV4SCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFLbkQsTUFBTSxPQUFPLHFCQUFxQjtJQWlCaEMsWUFDVSxZQUEwQixFQUMzQixlQUFnQyxFQUMvQixTQUFvQixFQUNwQixZQUEwQjtRQUgxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQW5CN0IsY0FBUyxHQUE2QixJQUFJLGVBQWUsQ0FDOUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQVksQ0FDeEQsQ0FBQztRQUVGLGNBQVMsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFnQjlELENBQUM7SUFiSixJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMs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N0IsQ0FBQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzBGQW5LVSxxQkFBcUI7MkVBQXJCLHFCQUFxQixXQUFyQixxQkFBcUIsbUJBRnBCLE1BQU07dUZBRVAscUJBQXFCO2NBSGpDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBBY3Rpb24sXG4gIEVudGl0eVN0b3JlRmlsdGVyQ3VzdG9tRnVuY1N0cmF0ZWd5LFxuICBFbnRpdHlTdG9yZUZpbHRlclNlbGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBGZWF0dXJlV29ya3NwYWNlLFxuICBtYXBFeHRlbnRTdHJhdGVneUFjdGl2ZVRvb2xUaXAsXG4gIG5vRWxlbWVudFNlbGVjdGVkLFxuICBFeHBvcnRPcHRpb25zXG59IGZyb20gJ0BpZ28yL2dlbyc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSwgU3RvcmFnZVNlcnZpY2VFdmVudCwgU3RvcmFnZVNlcnZpY2VFdmVudEVudW0sIExhbmd1YWdlU2VydmljZSwgTWVkaWFTZXJ2aWNlfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IFN0b3JhZ2VTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JhZ2Uvc3RvcmFnZS5zdGF0ZSc7XG5pbXBvcnQgeyBtYXAsIHNraXBXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRvb2xTdGF0ZSB9IGZyb20gJy4uLy4uL3Rvb2wvdG9vbC5zdGF0ZSc7XG5pbXBvcnQgeyBoYW5kbGVab29tQXV0byB9IGZyb20gJy4vd29ya3NwYWNlLnV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZUFjdGlvbnNTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwdWJsaWMgbWF4aW1pemUkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFxuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCd3b3Jrc3BhY2VNYXhpbWl6ZScpIGFzIGJvb2xlYW5cbiAgKTtcblxuICB6b29tQXV0byQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBwcml2YXRlIHN0b3JhZ2VDaGFuZ2UkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGdldCBzdG9yYWdlU2VydmljZSgpOiBTdG9yYWdlU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZVN0YXRlLnN0b3JhZ2VTZXJ2aWNlO1xuICB9XG5cbiAgZ2V0IHpvb21BdXRvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnem9vbUF1dG8nKSBhcyBib29sZWFuO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yYWdlU3RhdGU6IFN0b3JhZ2VTdGF0ZSxcbiAgICBwdWJsaWMgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b29sU3RhdGU6IFRvb2xTdGF0ZSxcbiAgICBwcml2YXRlIG1lZGlhU2VydmljZTogTWVkaWFTZXJ2aWNlXG4gICkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlQ2hhbmdlJCQpIHtcbiAgICAgIHRoaXMuc3RvcmFnZUNoYW5nZSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEFjdGlvbnMoXG4gICAgd29ya3NwYWNlOiBGZWF0dXJlV29ya3NwYWNlLFxuICAgIHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+LFxuICAgIHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPlxuICAgICkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmJ1aWxkQWN0aW9ucyhcbiAgICAgIHdvcmtzcGFjZSxcbiAgICAgIHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJCxcbiAgICAgIHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiRcbiAgICAgICk7XG4gICAgd29ya3NwYWNlLmFjdGlvblN0b3JlLmxvYWQoYWN0aW9ucyk7XG4gIH1cblxuICBidWlsZEFjdGlvbnMoXG4gICAgd29ya3NwYWNlOiBGZWF0dXJlV29ya3NwYWNlLFxuICAgIHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+LFxuICAgIHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPlxuICAgICk6IEFjdGlvbltdIHtcbiAgICB0aGlzLnpvb21BdXRvJC5uZXh0KHRoaXMuem9vbUF1dG8pO1xuICAgIHRoaXMuc3RvcmFnZUNoYW5nZSQkID0gdGhpcy5zdG9yYWdlU2VydmljZS5zdG9yYWdlQ2hhbmdlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHNraXBXaGlsZShcbiAgICAgICAgICAoc3RvcmFnZUNoYW5nZTogU3RvcmFnZVNlcnZpY2VFdmVudCkgPT5cbiAgICAgICAgICAgIHN0b3JhZ2VDaGFuZ2Uua2V5ICE9PSAnem9vbUF1dG8nIHx8IHN0b3JhZ2VDaGFuZ2UuZXZlbnQgPT09IFN0b3JhZ2VTZXJ2aWNlRXZlbnRFbnVtLkNMRUFSRURcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9vbUF1dG8kLm5leHQodGhpcy56b29tQXV0byk7XG4gICAgICAgIGhhbmRsZVpvb21BdXRvKHdvcmtzcGFjZSwgdGhpcy5zdG9yYWdlU2VydmljZSk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBpZDogJ3pvb21BdXRvJyxcbiAgICAgICAgY2hlY2tib3g6IHRydWUsXG4gICAgICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS56b29tQXV0by50aXRsZScsXG4gICAgICAgIHRvb2x0aXA6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLnpvb21BdXRvLnRvb2x0aXAnLFxuICAgICAgICBjaGVja0NvbmRpdGlvbjogdGhpcy56b29tQXV0byQsXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICBoYW5kbGVab29tQXV0byh3b3Jrc3BhY2UsIHRoaXMuc3RvcmFnZVNlcnZpY2UpO1xuICAgICAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KFxuICAgICAgICAgICAgJ3pvb21BdXRvJyxcbiAgICAgICAgICAgICF0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnem9vbUF1dG8nKSBhcyBib29sZWFuXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdmaWx0ZXJJbk1hcEV4dGVudCcsXG4gICAgICAgIGNoZWNrYm94OiB0cnVlLFxuICAgICAgICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2UuaW5NYXBFeHRlbnQudGl0bGUnLFxuICAgICAgICB0b29sdGlwOiBtYXBFeHRlbnRTdHJhdGVneUFjdGl2ZVRvb2xUaXAod29ya3NwYWNlKSxcbiAgICAgICAgY2hlY2tDb25kaXRpb246IHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJCxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4gcm93c0luTWFwRXh0ZW50Q2hlY2tDb25kaXRpb24kLm5leHQoIXJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJC52YWx1ZSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnc2VsZWN0ZWRPbmx5JyxcbiAgICAgICAgY2hlY2tib3g6IHRydWUsXG4gICAgICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5zZWxlY3RlZC50aXRsZScsXG4gICAgICAgIHRvb2x0aXA6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLnNlbGVjdGVkLnRvb2x0aXAnLFxuICAgICAgICBjaGVja0NvbmRpdGlvbjogc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJCxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4gc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJC5uZXh0KCFzZWxlY3RPbmx5Q2hlY2tDb25kaXRpb24kLnZhbHVlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjbGVhcnNlbGVjdGlvbicsXG4gICAgICAgIGljb246ICdzZWxlY3Qtb2ZmJyxcbiAgICAgICAgdGl0bGU6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLmNsZWFyU2VsZWN0aW9uLnRpdGxlJyxcbiAgICAgICAgdG9vbHRpcDogJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2UuY2xlYXJTZWxlY3Rpb24udG9vbHRpcCcsXG4gICAgICAgIGhhbmRsZXI6ICh3czogRmVhdHVyZVdvcmtzcGFjZSkgPT4ge1xuICAgICAgICAgIHdzLmVudGl0eVN0b3JlLnN0YXRlLnVwZGF0ZU1hbnkod3MuZW50aXR5U3RvcmUudmlldy5hbGwoKSwge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFyZ3M6IFt3b3Jrc3BhY2VdLFxuICAgICAgICBhdmFpbGFiaWxpdHk6ICh3czogRmVhdHVyZVdvcmtzcGFjZSkgPT4gbm9FbGVtZW50U2VsZWN0ZWQod3MpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2ZlYXR1cmVEb3dubG9hZCcsXG4gICAgICAgIGljb246ICdmaWxlLWV4cG9ydCcsXG4gICAgICAgIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5kb3dubG9hZC50aXRsZScsXG4gICAgICAgIHRvb2x0aXA6ICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLmRvd25sb2FkLnRvb2x0aXAnLFxuICAgICAgICBoYW5kbGVyOiAod3M6IEZlYXR1cmVXb3Jrc3BhY2UpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJTdHJhdGVneSA9IHdzLmVudGl0eVN0b3JlLmdldFN0cmF0ZWd5T2ZUeXBlKFxuICAgICAgICAgICAgRW50aXR5U3RvcmVGaWx0ZXJDdXN0b21GdW5jU3RyYXRlZ3lcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGZpbHRlclNlbGVjdGlvblN0cmF0ZWd5ID0gd3MuZW50aXR5U3RvcmUuZ2V0U3RyYXRlZ3lPZlR5cGUoXG4gICAgICAgICAgICBFbnRpdHlTdG9yZUZpbHRlclNlbGVjdGlvblN0cmF0ZWd5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBsYXllcnNXaXRoU2VsZWN0aW9uID0gZmlsdGVyU2VsZWN0aW9uU3RyYXRlZ3kuYWN0aXZlXG4gICAgICAgICAgICA/IFt3cy5sYXllci5pZF1cbiAgICAgICAgICAgIDogW107XG4gICAgICAgICAgdGhpcy50b29sU3RhdGUudG9vbFRvQWN0aXZhdGVGcm9tT3B0aW9ucyh7XG4gICAgICAgICAgICB0b29sOiAnaW1wb3J0RXhwb3J0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgbGF5ZXJzOiBbd3MubGF5ZXIuaWRdLFxuICAgICAgICAgICAgICBmZWF0dXJlSW5NYXBFeHRlbnQ6IGZpbHRlclN0cmF0ZWd5LmFjdGl2ZSxcbiAgICAgICAgICAgICAgbGF5ZXJzV2l0aFNlbGVjdGlvblxuICAgICAgICAgICAgfSBhcyBFeHBvcnRPcHRpb25zXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFyZ3M6IFt3b3Jrc3BhY2VdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ21heGltaXplJyxcbiAgICAgICAgdGl0bGU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLm1heGltaXplJyksXG4gICAgICAgIHRvb2x0aXA6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uaW50ZWdyYXRpb24ud29ya3NwYWNlLm1heGltaXplVG9vbHRpcCdcbiAgICAgICAgKSxcbiAgICAgICAgaWNvbjogJ3Jlc2l6ZScsXG4gICAgICAgIGRpc3BsYXk6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tYXhpbWl6ZSQucGlwZShtYXAoKHYpID0+ICF2ICYmICF0aGlzLm1lZGlhU2VydmljZS5pc01vYmlsZSgpKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMubWVkaWFTZXJ2aWNlLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubWF4aW1pemUkLm5leHQodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzdGFuZGFyZEV4dGVudCcsXG4gICAgICAgIHRpdGxlOiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmludGVncmF0aW9uLndvcmtzcGFjZS5zdGFuZGFyZEV4dGVudCdcbiAgICAgICAgKSxcbiAgICAgICAgdG9vbHRpcDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2Uuc3RhbmRhcmRFeHRlbnRUb29sdGlwJ1xuICAgICAgICApLFxuICAgICAgICBpY29uOiAncmVzaXplJyxcbiAgICAgICAgZGlzcGxheTogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1heGltaXplJC5waXBlKG1hcCgodikgPT4gdiAmJiAhdGhpcy5tZWRpYVNlcnZpY2UuaXNNb2JpbGUoKSkpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXhpbWl6ZSQubmV4dChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuICB9XG59XG4iXX0=