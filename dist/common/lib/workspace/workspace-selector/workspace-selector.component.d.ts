import { EventEmitter } from '@angular/core';
import { Workspace } from '../shared/workspace';
import { WorkspaceStore } from '../shared/store';
import * as i0 from "@angular/core";
/**
 * Drop list that activates the selected workspace emit an event.
 */
export declare class WorkspaceSelectorComponent {
    /**
     * Store that holds the available workspaces.
     */
    store: WorkspaceStore;
    /**
     * Wheither the selector must be disabled or not.
     */
    disabled: boolean;
    /**
     * Event emitted when an workspace is selected or unselected
     */
    selectedChange: EventEmitter<{
        selected: boolean;
        value: Workspace;
    }>;
    /**
     * @internal
     */
    getWorkspaceTitle(workspace: Workspace): string;
    /**
     * When an workspace is manually selected, select it into the
     * store and emit an event.
     * @internal
     * @param event The selection change event
     */
    onSelectedChange(event: {
        value: Workspace;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkspaceSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WorkspaceSelectorComponent, "igo-workspace-selector", never, { "store": "store"; "disabled": "disabled"; }, { "selectedChange": "selectedChange"; }, never, never>;
}
