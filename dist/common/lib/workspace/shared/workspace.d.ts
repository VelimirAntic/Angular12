import { BehaviorSubject } from 'rxjs';
import { ActionStore } from '../../action';
import { Widget } from '../../widget';
import { EntityStore } from '../../entity';
import { WorkspaceOptions } from './workspace.interfaces';
/**
 * This class is responsible of managing the relations between
 * entities and the actions that consume them. It also defines an
 * entity table template that may be used by an entity table component.
 */
export declare class Workspace<E extends object = object> {
    protected options: WorkspaceOptions;
    /**
     * Observable of the selected widget
     */
    readonly widget$: BehaviorSubject<Widget>;
    /**
     * Observable of the selected widget's inputs
     */
    readonly widgetInputs$: BehaviorSubject<{
        [key: string]: any;
    }>;
    /**
     * Observable of the selected widget's subscribers
     */
    readonly widgetSubscribers$: BehaviorSubject<{
        [key: string]: (event: any) => void;
    }>;
    /**
     * Subscription to the selected entity
     */
    private entities$$;
    /**
     * State change that trigger an update of the actions availability
     */
    private change;
    /**
     * Subscription to state changes
     */
    private change$;
    /**
     * Workspace id
     */
    get id(): string;
    /**
     * Workspace title
     */
    get title(): string;
    /**
     * Workspace title
     */
    get meta(): {
        [key: string]: any;
    };
    /**
     * Entities store
     */
    get entityStore(): EntityStore<E>;
    /**
     * Actions store (some actions activate a widget)
     */
    get actionStore(): ActionStore;
    /**
     * Selected widget
     */
    get widget(): Widget;
    /**
     * Whether a widget is selected
     */
    get hasWidget(): boolean;
    constructor(options: WorkspaceOptions);
    /**
     * Whether this strategy is active
     * @internal
     */
    get active(): boolean;
    readonly active$: BehaviorSubject<boolean>;
    /**
     * Activate the workspace. By doing that, the workspace will observe
     * the selected entity (from the store) and update the actions availability.
     * For example, some actions require an entity to be selected.
     */
    activate(): void;
    /**
     * Deactivate the workspace. Unsubcribe to the selected entity.
     */
    deactivate(): void;
    /**
     * Activate a widget. In itself, activating a widget doesn't render it but,
     * if an WorkspaceWidgetOutlet component is bound to this workspace, the widget will
     * show up.
     * @param widget Widget
     * @param inputs Inputs the widget will receive
     */
    activateWidget(widget: Widget, inputs?: {
        [key: string]: any;
    }, subscribers?: {
        [key: string]: (event: any) => void;
    }): void;
    /**
     * Deactivate a widget.
     */
    deactivateWidget(): void;
    /**
     * When the state changes, update the actions availability.
     */
    private onStateChange;
}
