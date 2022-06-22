import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WorkspaceStore, EntityStoreFilterCustomFuncStrategy, EntityStoreFilterSelectionStrategy } from '@igo2/common';
import { WfsWorkspace, FeatureWorkspace, EditionWorkspace } from '@igo2/geo';
import * as i0 from "@angular/core";
import * as i1 from "./shared/feature-actions.service";
import * as i2 from "./shared/wfs-actions.service";
import * as i3 from "./shared/edition-actions.service";
import * as i4 from "@igo2/core";
/**
 * Service that holds the state of the workspace module
 */
export class WorkspaceState {
    constructor(featureActionsService, wfsActionsService, editionActionsService, storageService) {
        this.featureActionsService = featureActionsService;
        this.wfsActionsService = wfsActionsService;
        this.editionActionsService = editionActionsService;
        this.storageService = storageService;
        this.workspacePanelExpanded = false;
        this.workspaceEnabled$ = new BehaviorSubject(false);
        this.rowsInMapExtentCheckCondition$ = new BehaviorSubject(true);
        this.selectOnlyCheckCondition$ = new BehaviorSubject(false);
        this.workspaceMaximize$ = new BehaviorSubject(this.storageService.get('workspaceMaximize'));
        this.actionMaximize$$ = [];
        /** Active widget observable. Only one may be active for all available workspaces */
        this.activeWorkspaceWidget$ = new BehaviorSubject(undefined);
        /**
         * Observable of the active workspace
         */
        this.workspace$ = new BehaviorSubject(undefined);
        this.initWorkspaces();
    }
    /**
     * Store that holds all the available workspaces
     */
    get store() { return this._store; }
    /**
     * Initialize the workspace store. Each time a workspace is activated,
     * subscribe to it's active widget. Tracking the active widget is useful
     * to make sure only one widget is active at a time.
     */
    initWorkspaces() {
        this._store = new WorkspaceStore([]);
        this._store.stateView
            .firstBy$((record) => record.state.active === true)
            .subscribe((record) => {
            const workspace = record ? record.entity : undefined;
            this.workspace$.next(workspace);
        });
        this._store.stateView.all$()
            .subscribe((workspaces) => {
            workspaces.map((wks) => {
                if (wks.entity.actionStore.empty) {
                    if (wks.entity instanceof WfsWorkspace) {
                        this.wfsActionsService.loadActions(wks.entity, this.rowsInMapExtentCheckCondition$, this.selectOnlyCheckCondition$);
                    }
                    else if (wks.entity instanceof FeatureWorkspace) {
                        this.featureActionsService.loadActions(wks.entity, this.rowsInMapExtentCheckCondition$, this.selectOnlyCheckCondition$);
                    }
                    else if (wks.entity instanceof EditionWorkspace) {
                        this.editionActionsService.loadActions(wks.entity, this.rowsInMapExtentCheckCondition$, this.selectOnlyCheckCondition$);
                    }
                }
            });
        });
        this.actionMaximize$$.push(this.featureActionsService.maximize$.subscribe(maximized => {
            this.setWorkspaceIsMaximized(maximized);
        }));
        this.actionMaximize$$.push(this.wfsActionsService.maximize$.subscribe(maximized => {
            this.setWorkspaceIsMaximized(maximized);
        }));
        this.actionMaximize$$.push(this.editionActionsService.maximize$.subscribe(maximized => {
            this.setWorkspaceIsMaximized(maximized);
        }));
        this.activeWorkspace$$ = this.workspace$
            .subscribe((workspace) => {
            if (this.activeWorkspaceWidget$$ !== undefined) {
                this.activeWorkspaceWidget$$.unsubscribe();
                this.activeWorkspaceWidget$$ = undefined;
            }
            if (workspace !== undefined) {
                this.activeWorkspaceWidget$$ = workspace.widget$
                    .subscribe((widget) => this.activeWorkspaceWidget$.next(widget));
            }
        });
        this.rowsInMapExtentCheckCondition$$ = this.rowsInMapExtentCheckCondition$.subscribe((rowsInMapExtent) => {
            this._store.stateView.all().map((wks) => {
                if (!wks.entity.actionStore.empty) {
                    const filterStrategy = wks.entity.entityStore.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
                    if (filterStrategy) {
                        if (rowsInMapExtent) {
                            filterStrategy.activate();
                        }
                        else {
                            filterStrategy.deactivate();
                        }
                    }
                }
            });
        });
        this.selectOnlyCheckCondition$$ = this.selectOnlyCheckCondition$.subscribe((selectOnly) => {
            this._store.stateView.all().map((wks) => {
                if (!wks.entity.actionStore.empty) {
                    const filterStrategy = wks.entity.entityStore.getStrategyOfType(EntityStoreFilterSelectionStrategy);
                    if (filterStrategy) {
                        if (selectOnly) {
                            filterStrategy.activate();
                        }
                        else {
                            filterStrategy.deactivate();
                        }
                    }
                }
            });
        });
    }
    setWorkspaceIsMaximized(maximized) {
        this.storageService.set('workspaceMaximize', maximized);
        this.workspaceMaximize$.next(maximized);
    }
    setActiveWorkspaceById(id) {
        const wksFromId = this.store
            .all()
            .find(workspace => workspace.id === id);
        if (wksFromId) {
            this.store.activateWorkspace(wksFromId);
        }
    }
    setActiveWorkspaceByTitle(title) {
        const wksFromTitle = this.store
            .all()
            .find(workspace => workspace.title === title);
        if (wksFromTitle) {
            this.store.activateWorkspace(wksFromTitle);
        }
    }
    /**
     * Teardown all the workspaces
     * @internal
     */
    ngOnDestroy() {
        this.teardownWorkspaces();
        this.actionMaximize$$.map(a => a.unsubscribe());
        if (this.rowsInMapExtentCheckCondition$$) {
            this.selectOnlyCheckCondition$$.unsubscribe();
        }
        if (this.selectOnlyCheckCondition$$) {
            this.selectOnlyCheckCondition$$.unsubscribe();
        }
    }
    /**
     * Teardown the workspace store and any subscribers
     */
    teardownWorkspaces() {
        this.store.clear();
        if (this.activeWorkspaceWidget$$ !== undefined) {
            this.activeWorkspaceWidget$$.unsubscribe();
        }
        if (this.activeWorkspace$$ !== undefined) {
            this.activeWorkspace$$.unsubscribe();
        }
    }
}
WorkspaceState.ɵfac = function WorkspaceState_Factory(t) { return new (t || WorkspaceState)(i0.ɵɵinject(i1.FeatureActionsService), i0.ɵɵinject(i2.WfsActionsService), i0.ɵɵinject(i3.EditionActionsService), i0.ɵɵinject(i4.StorageService)); };
WorkspaceState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WorkspaceState, factory: WorkspaceState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkspaceState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FeatureActionsService }, { type: i2.WfsActionsService }, { type: i3.EditionActionsService }, { type: i4.StorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi93b3Jrc3BhY2Uvd29ya3NwYWNlLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFckQsT0FBTyxFQUdMLGNBQWMsRUFFZCxtQ0FBbUMsRUFDbkMsa0NBQWtDLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7O0FBTTdFOztHQUVHO0FBSUgsTUFBTSxPQUFPLGNBQWM7SUFvQ3pCLFlBQ1UscUJBQTRDLEVBQzVDLGlCQUFvQyxFQUNwQyxxQkFBNEMsRUFDNUMsY0FBOEI7UUFIOUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdENqQywyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFFdEMsc0JBQWlCLEdBQTZCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ2xGLG1DQUE4QixHQUE2QixJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUM5Riw4QkFBeUIsR0FBNkIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFMUYsdUJBQWtCLEdBQTZCLElBQUksZUFBZSxDQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBWSxDQUN4RCxDQUFDO1FBQ00scUJBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQVc5QyxvRkFB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dHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBFbnRpdHlSZWNvcmQsXG4gIFdvcmtzcGFjZSxcbiAgV29ya3NwYWNlU3RvcmUsXG4gIFdpZGdldCxcbiAgRW50aXR5U3RvcmVGaWx0ZXJDdXN0b21GdW5jU3RyYXRlZ3ksXG4gIEVudGl0eVN0b3JlRmlsdGVyU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgV2ZzV29ya3NwYWNlLCBGZWF0dXJlV29ya3NwYWNlLCBFZGl0aW9uV29ya3NwYWNlIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB7IEZlYXR1cmVBY3Rpb25zU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2ZlYXR1cmUtYWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFdmc0FjdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvd2ZzLWFjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgRWRpdGlvbkFjdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvZWRpdGlvbi1hY3Rpb25zLnNlcnZpY2UnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBob2xkcyB0aGUgc3RhdGUgb2YgdGhlIHdvcmtzcGFjZSBtb2R1bGVcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV29ya3NwYWNlU3RhdGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyB3b3Jrc3BhY2VQYW5lbEV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcmVhZG9ubHkgd29ya3NwYWNlRW5hYmxlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICByZWFkb25seSByb3dzSW5NYXBFeHRlbnRDaGVja0NvbmRpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHJlYWRvbmx5IHNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHJlYWRvbmx5IHdvcmtzcGFjZU1heGltaXplJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnd29ya3NwYWNlTWF4aW1pemUnKSBhcyBib29sZWFuXG4gICk7XG4gIHByaXZhdGUgYWN0aW9uTWF4aW1pemUkJDogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIHJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzZWxlY3RPbmx5Q2hlY2tDb25kaXRpb24kJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gdGhlIGFjdGl2ZSB3b3Jrc3BhY2UgKi9cbiAgcHJpdmF0ZSBhY3RpdmVXb3Jrc3BhY2UkJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gdGhlIGFjdGl2ZSB3b3Jrc3BhY2Ugd2lkZ2V0ICovXG4gIHByaXZhdGUgYWN0aXZlV29ya3NwYWNlV2lkZ2V0JCQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKiogQWN0aXZlIHdpZGdldCBvYnNlcnZhYmxlLiBPbmx5IG9uZSBtYXkgYmUgYWN0aXZlIGZvciBhbGwgYXZhaWxhYmxlIHdvcmtzcGFjZXMgKi9cbiAgcmVhZG9ubHkgYWN0aXZlV29ya3NwYWNlV2lkZ2V0JDogQmVoYXZpb3JTdWJqZWN0PFdpZGdldD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFdpZGdldD4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiB0aGUgYWN0aXZlIHdvcmtzcGFjZVxuICAgKi9cbiAgcHVibGljIHdvcmtzcGFjZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFdvcmtzcGFjZT4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogU3RvcmUgdGhhdCBob2xkcyBhbGwgdGhlIGF2YWlsYWJsZSB3b3Jrc3BhY2VzXG4gICAqL1xuICBnZXQgc3RvcmUoKTogV29ya3NwYWNlU3RvcmUgeyByZXR1cm4gdGhpcy5fc3RvcmU7IH1cbiAgcHJpdmF0ZSBfc3RvcmU6IFdvcmtzcGFjZVN0b3JlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmVhdHVyZUFjdGlvbnNTZXJ2aWNlOiBGZWF0dXJlQWN0aW9uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB3ZnNBY3Rpb25zU2VydmljZTogV2ZzQWN0aW9uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlZGl0aW9uQWN0aW9uc1NlcnZpY2U6IEVkaXRpb25BY3Rpb25zU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmluaXRXb3Jrc3BhY2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgd29ya3NwYWNlIHN0b3JlLiBFYWNoIHRpbWUgYSB3b3Jrc3BhY2UgaXMgYWN0aXZhdGVkLFxuICAgKiBzdWJzY3JpYmUgdG8gaXQncyBhY3RpdmUgd2lkZ2V0LiBUcmFja2luZyB0aGUgYWN0aXZlIHdpZGdldCBpcyB1c2VmdWxcbiAgICogdG8gbWFrZSBzdXJlIG9ubHkgb25lIHdpZGdldCBpcyBhY3RpdmUgYXQgYSB0aW1lLlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0V29ya3NwYWNlcygpIHtcbiAgICB0aGlzLl9zdG9yZSA9IG5ldyBXb3Jrc3BhY2VTdG9yZShbXSk7XG4gICAgdGhpcy5fc3RvcmUuc3RhdGVWaWV3XG4gICAgICAuZmlyc3RCeSQoKHJlY29yZDogRW50aXR5UmVjb3JkPFdvcmtzcGFjZT4pID0+IHJlY29yZC5zdGF0ZS5hY3RpdmUgPT09IHRydWUpXG4gICAgICAuc3Vic2NyaWJlKChyZWNvcmQ6IEVudGl0eVJlY29yZDxXb3Jrc3BhY2U+KSA9PiB7XG4gICAgICAgIGNvbnN0IHdvcmtzcGFjZSA9IHJlY29yZCA/IHJlY29yZC5lbnRpdHkgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMud29ya3NwYWNlJC5uZXh0KHdvcmtzcGFjZSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX3N0b3JlLnN0YXRlVmlldy5hbGwkKClcbiAgICAuc3Vic2NyaWJlKCh3b3Jrc3BhY2VzOiBFbnRpdHlSZWNvcmQ8V29ya3NwYWNlPltdKSA9PiB7XG4gICAgICB3b3Jrc3BhY2VzLm1hcCgod2tzOiBFbnRpdHlSZWNvcmQ8V29ya3NwYWNlPikgPT4ge1xuICAgICAgICBpZiAod2tzLmVudGl0eS5hY3Rpb25TdG9yZS5lbXB0eSkge1xuICAgICAgICAgIGlmICh3a3MuZW50aXR5IGluc3RhbmNlb2YgV2ZzV29ya3NwYWNlKSB7XG4gICAgICAgICAgICB0aGlzLndmc0FjdGlvbnNTZXJ2aWNlLmxvYWRBY3Rpb25zKFxuICAgICAgICAgICAgICB3a3MuZW50aXR5LFxuICAgICAgICAgICAgICB0aGlzLnJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJCxcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RPbmx5Q2hlY2tDb25kaXRpb24kKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdrcy5lbnRpdHkgaW5zdGFuY2VvZiBGZWF0dXJlV29ya3NwYWNlKSB7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVBY3Rpb25zU2VydmljZS5sb2FkQWN0aW9ucyhcbiAgICAgICAgICAgICAgd2tzLmVudGl0eSxcbiAgICAgICAgICAgICAgdGhpcy5yb3dzSW5NYXBFeHRlbnRDaGVja0NvbmRpdGlvbiQsXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh3a3MuZW50aXR5IGluc3RhbmNlb2YgRWRpdGlvbldvcmtzcGFjZSkge1xuICAgICAgICAgICAgdGhpcy5lZGl0aW9uQWN0aW9uc1NlcnZpY2UubG9hZEFjdGlvbnMoXG4gICAgICAgICAgICAgIHdrcy5lbnRpdHksXG4gICAgICAgICAgICAgIHRoaXMucm93c0luTWFwRXh0ZW50Q2hlY2tDb25kaXRpb24kLFxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdE9ubHlDaGVja0NvbmRpdGlvbiQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWN0aW9uTWF4aW1pemUkJC5wdXNoKHRoaXMuZmVhdHVyZUFjdGlvbnNTZXJ2aWNlLm1heGltaXplJC5zdWJzY3JpYmUobWF4aW1pemVkID0+IHtcbiAgICAgIHRoaXMuc2V0V29ya3NwYWNlSXNNYXhpbWl6ZWQobWF4aW1pemVkKTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLmFjdGlvbk1heGltaXplJCQucHVzaCh0aGlzLndmc0FjdGlvbnNTZXJ2aWNlLm1heGltaXplJC5zdWJzY3JpYmUobWF4aW1pemVkID0+IHtcbiAgICAgIHRoaXMuc2V0V29ya3NwYWNlSXNNYXhpbWl6ZWQobWF4aW1pemVkKTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLmFjdGlvbk1heGltaXplJCQucHVzaCh0aGlzLmVkaXRpb25BY3Rpb25zU2VydmljZS5tYXhpbWl6ZSQuc3Vic2NyaWJlKG1heGltaXplZCA9PiB7XG4gICAgICB0aGlzLnNldFdvcmtzcGFjZUlzTWF4aW1pemVkKG1heGltaXplZCk7XG4gICAgfSkpO1xuXG4gICAgdGhpcy5hY3RpdmVXb3Jrc3BhY2UkJCA9IHRoaXMud29ya3NwYWNlJFxuICAgICAgLnN1YnNjcmliZSgod29ya3NwYWNlOiBXb3Jrc3BhY2UpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlV29ya3NwYWNlV2lkZ2V0JCQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlV29ya3NwYWNlV2lkZ2V0JCQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVdvcmtzcGFjZVdpZGdldCQkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdvcmtzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVXb3Jrc3BhY2VXaWRnZXQkJCA9IHdvcmtzcGFjZS53aWRnZXQkXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh3aWRnZXQ6IFdpZGdldCkgPT4gdGhpcy5hY3RpdmVXb3Jrc3BhY2VXaWRnZXQkLm5leHQod2lkZ2V0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5yb3dzSW5NYXBFeHRlbnRDaGVja0NvbmRpdGlvbiQkID0gdGhpcy5yb3dzSW5NYXBFeHRlbnRDaGVja0NvbmRpdGlvbiQuc3Vic2NyaWJlKChyb3dzSW5NYXBFeHRlbnQpID0+IHtcbiAgICAgIHRoaXMuX3N0b3JlLnN0YXRlVmlldy5hbGwoKS5tYXAoKHdrczogRW50aXR5UmVjb3JkPFdvcmtzcGFjZT4pID0+IHtcbiAgICAgICAgaWYgKCF3a3MuZW50aXR5LmFjdGlvblN0b3JlLmVtcHR5KSB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyU3RyYXRlZ3kgPSB3a3MuZW50aXR5LmVudGl0eVN0b3JlLmdldFN0cmF0ZWd5T2ZUeXBlKEVudGl0eVN0b3JlRmlsdGVyQ3VzdG9tRnVuY1N0cmF0ZWd5KTtcbiAgICAgICAgICBpZiAoZmlsdGVyU3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIGlmIChyb3dzSW5NYXBFeHRlbnQpIHtcbiAgICAgICAgICAgICAgZmlsdGVyU3RyYXRlZ3kuYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpbHRlclN0cmF0ZWd5LmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3RPbmx5Q2hlY2tDb25kaXRpb24kJCA9IHRoaXMuc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJC5zdWJzY3JpYmUoKHNlbGVjdE9ubHkpID0+IHtcbiAgICAgIHRoaXMuX3N0b3JlLnN0YXRlVmlldy5hbGwoKS5tYXAoKHdrczogRW50aXR5UmVjb3JkPFdvcmtzcGFjZT4pID0+IHtcbiAgICAgICAgaWYgKCF3a3MuZW50aXR5LmFjdGlvblN0b3JlLmVtcHR5KSB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyU3RyYXRlZ3kgPSB3a3MuZW50aXR5LmVudGl0eVN0b3JlLmdldFN0cmF0ZWd5T2ZUeXBlKEVudGl0eVN0b3JlRmlsdGVyU2VsZWN0aW9uU3RyYXRlZ3kpO1xuICAgICAgICAgIGlmIChmaWx0ZXJTdHJhdGVneSkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdE9ubHkpIHtcbiAgICAgICAgICAgICAgZmlsdGVyU3RyYXRlZ3kuYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpbHRlclN0cmF0ZWd5LmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRXb3Jrc3BhY2VJc01heGltaXplZChtYXhpbWl6ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgnd29ya3NwYWNlTWF4aW1pemUnLCBtYXhpbWl6ZWQpO1xuICAgIHRoaXMud29ya3NwYWNlTWF4aW1pemUkLm5leHQobWF4aW1pemVkKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmVXb3Jrc3BhY2VCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCB3a3NGcm9tSWQgPSB0aGlzLnN0b3JlXG4gICAgLmFsbCgpXG4gICAgLmZpbmQod29ya3NwYWNlID0+IHdvcmtzcGFjZS5pZCA9PT0gaWQpO1xuICAgIGlmICh3a3NGcm9tSWQpIHtcbiAgICAgIHRoaXMuc3RvcmUuYWN0aXZhdGVXb3Jrc3BhY2Uod2tzRnJvbUlkKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlV29ya3NwYWNlQnlUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgd2tzRnJvbVRpdGxlID0gdGhpcy5zdG9yZVxuICAgICAgLmFsbCgpXG4gICAgICAuZmluZCh3b3Jrc3BhY2UgPT4gd29ya3NwYWNlLnRpdGxlID09PSB0aXRsZSk7XG4gICAgaWYgKHdrc0Zyb21UaXRsZSkge1xuICAgICAgdGhpcy5zdG9yZS5hY3RpdmF0ZVdvcmtzcGFjZSh3a3NGcm9tVGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUZWFyZG93biBhbGwgdGhlIHdvcmtzcGFjZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnRlYXJkb3duV29ya3NwYWNlcygpO1xuICAgIHRoaXMuYWN0aW9uTWF4aW1pemUkJC5tYXAoYSA9PiBhLnVuc3Vic2NyaWJlKCkpO1xuICAgIGlmICh0aGlzLnJvd3NJbk1hcEV4dGVudENoZWNrQ29uZGl0aW9uJCQpIHtcbiAgICAgIHRoaXMuc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJCQpIHtcbiAgICAgIHRoaXMuc2VsZWN0T25seUNoZWNrQ29uZGl0aW9uJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGVhcmRvd24gdGhlIHdvcmtzcGFjZSBzdG9yZSBhbmQgYW55IHN1YnNjcmliZXJzXG4gICAqL1xuICBwcml2YXRlIHRlYXJkb3duV29ya3NwYWNlcygpIHtcbiAgICB0aGlzLnN0b3JlLmNsZWFyKCk7XG4gICAgaWYgKHRoaXMuYWN0aXZlV29ya3NwYWNlV2lkZ2V0JCQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5hY3RpdmVXb3Jrc3BhY2VXaWRnZXQkJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmVXb3Jrc3BhY2UkJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZVdvcmtzcGFjZSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==