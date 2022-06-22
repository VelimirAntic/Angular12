import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Widget } from '../../widget';
import { Workspace } from '../shared/workspace';
import * as i0 from "@angular/core";
/**
 * This component dynamically render an Workspace's active widget.
 * It also deactivate that widget whenever the widget's component
 * emit the 'cancel' or 'complete' event.
 */
export declare class WorkspaceWidgetOutletComponent {
    /**
     * Workspace
     */
    workspace: Workspace;
    /**
     * Event emitted when a widget is deactivate which happens
     * when the widget's component emits the 'cancel' or 'complete' event.
     */
    deactivateWidget: EventEmitter<Widget>;
    /**
     * Observable of the workspace's active widget
     * @internal
     */
    get widget$(): BehaviorSubject<Widget>;
    /**
     * Observable of the workspace's widget inputs
     * @internal
     */
    get widgetInputs$(): BehaviorSubject<{
        [key: string]: any;
    }>;
    /**
     * Observable of the workspace's widget inputs
     * @internal
     */
    get widgetSubscribers$(): BehaviorSubject<{
        [key: string]: (event: any) => void;
    }>;
    constructor();
    /**
     * When a widget's component emit the 'cancel' event,
     * deactivate that widget and emit the 'deactivateWidget' event.
     * @param widget Widget
     * @internal
     */
    onWidgetCancel(widget: Widget): void;
    /**
     * When a widget's component emit the 'cancel' event,
     * deactivate that widget and emit the 'deactivateWidget' event.
     * @param widget Widget
     * @internal
     */
    onWidgetComplete(widget: Widget): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkspaceWidgetOutletComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WorkspaceWidgetOutletComponent, "igo-workspace-widget-outlet", never, { "workspace": "workspace"; }, { "deactivateWidget": "deactivateWidget"; }, never, never>;
}
