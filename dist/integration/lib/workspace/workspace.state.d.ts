import { OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Workspace, WorkspaceStore, Widget } from '@igo2/common';
import { FeatureActionsService } from './shared/feature-actions.service';
import { WfsActionsService } from './shared/wfs-actions.service';
import { StorageService } from '@igo2/core';
import { EditionActionsService } from './shared/edition-actions.service';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of the workspace module
 */
export declare class WorkspaceState implements OnDestroy {
    private featureActionsService;
    private wfsActionsService;
    private editionActionsService;
    private storageService;
    workspacePanelExpanded: boolean;
    readonly workspaceEnabled$: BehaviorSubject<boolean>;
    readonly rowsInMapExtentCheckCondition$: BehaviorSubject<boolean>;
    readonly selectOnlyCheckCondition$: BehaviorSubject<boolean>;
    readonly workspaceMaximize$: BehaviorSubject<boolean>;
    private actionMaximize$$;
    private rowsInMapExtentCheckCondition$$;
    private selectOnlyCheckCondition$$;
    /** Subscription to the active workspace */
    private activeWorkspace$$;
    /** Subscription to the active workspace widget */
    private activeWorkspaceWidget$$;
    /** Active widget observable. Only one may be active for all available workspaces */
    readonly activeWorkspaceWidget$: BehaviorSubject<Widget>;
    /**
     * Observable of the active workspace
     */
    workspace$: BehaviorSubject<Workspace<object>>;
    /**
     * Store that holds all the available workspaces
     */
    get store(): WorkspaceStore;
    private _store;
    constructor(featureActionsService: FeatureActionsService, wfsActionsService: WfsActionsService, editionActionsService: EditionActionsService, storageService: StorageService);
    /**
     * Initialize the workspace store. Each time a workspace is activated,
     * subscribe to it's active widget. Tracking the active widget is useful
     * to make sure only one widget is active at a time.
     */
    private initWorkspaces;
    private setWorkspaceIsMaximized;
    setActiveWorkspaceById(id: string): void;
    setActiveWorkspaceByTitle(title: string): void;
    /**
     * Teardown all the workspaces
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * Teardown the workspace store and any subscribers
     */
    private teardownWorkspaces;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkspaceState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WorkspaceState>;
}
