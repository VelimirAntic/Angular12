import { OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActionStore } from '../../action';
import { Tool } from '../shared/tool.interface';
import { ToolboxColor } from '../shared/toolbox.enums';
import { Toolbox } from '../shared/toolbox';
import * as i0 from "@angular/core";
export declare class ToolboxComponent implements OnInit, OnDestroy {
    /**
     * Observable of the active tool
     */
    activeTool$: BehaviorSubject<Tool>;
    /**
     * Store of actions that toggle tools
     */
    actionStore: ActionStore;
    /**
     * Observable of he anmation state
     */
    animation$: BehaviorSubject<string>;
    /**
     * Observable of the toolbar
     */
    toolbar$: BehaviorSubject<string[]>;
    /**
     * Whether the Toolbar should display actions' titles
     */
    toolbarWithTitle$: Observable<boolean>;
    /**
     * Subscription to the active tool
     */
    private activeTool$$;
    /**
     * Subscription to the toolbar
     */
    private toolbar$$;
    /**
     * Observable of the ongoing animation. This is useful when
     * multiple animations are triggered at once i.e. when the user clicks
     * too fast on different actions
     */
    private animating$;
    /**
     * Subscription to the ongoing animation
     */
    private animating$$;
    /**
     * Toolbox
     */
    toolbox: Toolbox;
    /**
     * Whether the toolbox should animate the first tool entering
     */
    animate: boolean;
    /**
     * Color of Toolbox
     */
    color: ToolboxColor;
    /**
     * @ignore
     */
    get classColorGrey(): boolean;
    /**
     * @ignore
     */
    get classColorPrimary(): boolean;
    /**
     * Initialize the toolbar and subscribe to the active tool
     * @internal
     */
    ngOnInit(): void;
    /**
     * Unsubscribe to the active tool and destroy the action store
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * Track the starting animation
     * @internal
     */
    onAnimationStart(): void;
    /**
     * Untrack the completed animation
     * @internal
     */
    onAnimationComplete(): void;
    /**
     * Return a tool's inputs
     * @param tool Tool
     * @returns Tool inputs
     * @internal
     */
    getToolInputs(tool: Tool): {
        [key: string]: any;
    };
    /**
     * Initialize an action store
     * @param toolbar Toolbar
     */
    private onToolbarChange;
    /**
     * Activate a tool and trigger an animation or not
     * @param tool Tool to activate
     */
    private onActiveToolChange;
    /**
     * Set the active tool
     * @param tool Tool to activate
     */
    private setActiveTool;
    /**
     * Initialize the toolbar
     */
    private setToolbar;
    /**
     * Observe the ongoing animation and ignore any incoming animation
     * while one is still ongoing.
     * @param callback Callback to execute when the animation completes
     */
    private onAnimate;
    /**
     * Stop observing an animation when it's complete
     */
    private unAnimate;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolboxComponent, "igo-toolbox", never, { "toolbox": "toolbox"; "animate": "animate"; "color": "color"; }, {}, never, never>;
}
