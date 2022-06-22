import { ChangeDetectorRef, OnChanges, OnDestroy, SimpleChanges, ElementRef } from '@angular/core';
import { MediaService } from '@igo2/core';
import { Action } from '../shared/action.interfaces';
import { ActionbarMode } from '../shared/action.enums';
import { ActionStore } from '../shared/store';
import { Overlay } from '@angular/cdk/overlay';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * A list of action buttons.
 * This component can be displayed in one of two way: 'dock' or 'overlay'
 */
export declare class ActionbarComponent implements OnDestroy, OnChanges {
    overlay: Overlay;
    private elRef;
    private cdRef;
    mediaService: MediaService;
    /**
     * Reference to the ActionbarMode enum for use in the template
     * @internal
     */
    actionbarMode: typeof ActionbarMode;
    /**
     * Whether the actionbar is collapsed (Dock mode)
     * @internal
     */
    collapsed: boolean;
    /**
     * Toggle collapse action (Dock)
     * @internal
     */
    toggleCollapseAction: {
        id: string;
        icon: string;
        handler: () => void;
    };
    /**
     * Action store watcher
     * @internal
     */
    private watcher;
    /**
     * Height Condition for scroll button
     */
    heightCondition$: BehaviorSubject<boolean>;
    /**
     * Position Condition for top scroll button
     */
    positionConditionTop$: BehaviorSubject<boolean>;
    /**
     * Position Condition for low scroll button
     */
    positionConditionLow$: BehaviorSubject<boolean>;
    /**
     * Action store
     */
    store: ActionStore;
    /**
     * Actionbar mode
     */
    mode: ActionbarMode;
    /**
     * Whether a toggle button should be displayed (Dock mode)
     */
    withToggleButton: boolean;
    /**
     * Whether a the actionbar should display buttons horizontally
     */
    horizontal: boolean;
    /**
     * Color
     */
    color: string;
    /**
     * Color of the button if action mode === overlay
     */
    iconColor: string;
    /**
     * Whether action titles are displayed
     */
    withTitle: boolean;
    /**
     * Whether action tooltips are displayed
     */
    withTooltip: boolean;
    /**
     * Whether action titles are displayed (condition for scroll button)
     */
    scrollActive: boolean;
    /**
     * Whether action icons are displayed
     */
    withIcon: boolean;
    /**
     * Which icon want to be shown
     */
    icon: string;
    /**
     * Overlay X position
     */
    xPosition: string;
    /**
     * Overlay Y position
     */
    yPosition: string;
    /**
     * Class to add to the actionbar overlay
     */
    set overlayClass(value: string);
    get overlayClass(): string;
    private _overlayClass;
    /**
     * @ignore
     */
    get withTitleClass(): boolean;
    /**
     * @ignore
     */
    get withIconClass(): boolean;
    /**
     * @ignore
     */
    get horizontalClass(): boolean;
    get heightCondition(): boolean;
    get positionConditionTop(): boolean;
    get positionConditionLow(): boolean;
    get isDesktop(): boolean;
    constructor(overlay: Overlay, elRef: ElementRef, cdRef: ChangeDetectorRef, mediaService: MediaService);
    /**
     * @internal
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * Invoke the action handler
     * @internal
     */
    onTriggerAction(action: Action): void;
    scrollDown(): void;
    scrollUp(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionbarComponent, "igo-actionbar", never, { "store": "store"; "mode": "mode"; "withToggleButton": "withToggleButton"; "horizontal": "horizontal"; "color": "color"; "iconColor": "iconColor"; "withTitle": "withTitle"; "withTooltip": "withTooltip"; "scrollActive": "scrollActive"; "withIcon": "withIcon"; "icon": "icon"; "xPosition": "xPosition"; "yPosition": "yPosition"; "overlayClass": "overlayClass"; }, {}, never, never>;
}
