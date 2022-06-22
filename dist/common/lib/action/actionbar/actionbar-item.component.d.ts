import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Action } from '../shared/action.interfaces';
import * as i0 from "@angular/core";
/**
 * An action button
 */
export declare class ActionbarItemComponent implements OnInit, OnDestroy {
    readonly disabled$: BehaviorSubject<boolean>;
    readonly checkCondition$: BehaviorSubject<boolean>;
    readonly icon$: BehaviorSubject<string>;
    readonly tooltip$: BehaviorSubject<string>;
    readonly noDisplay$: BehaviorSubject<boolean>;
    readonly ngClass$: BehaviorSubject<{
        [key: string]: boolean;
    }>;
    private ngClass$$;
    private disabled$$;
    private availability$$;
    private icon$$;
    private checkCondition$$;
    private tooltip$$;
    private noDisplay$$;
    private display$$;
    /**
     * Action
     */
    action: Action;
    /**
     * Color
     */
    color: string;
    /**
     * Whether the action title is displayed
     */
    withTitle: boolean;
    /**
     * Whether the action icon is displayed
     */
    withIcon: boolean;
    /**
     * Whether a tooltip should be shown
     */
    withTooltip: boolean;
    /**
     * Whether the action is disabled
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    /**
     * Whether the action is display or not
     */
    set noDisplay(value: boolean);
    get noDisplay(): boolean;
    /**
     * Event emitted when the action button is clicked
     */
    trigger: EventEmitter<Action>;
    /**
     * @internal
     */
    get title(): string;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * When the action button is clicked, emit the 'trigger' event but don't
     * invoke the action handler. This is handled by the parent component.
     * @internal
     */
    onClick(): void;
    private updateNgClass;
    private updateTooltip;
    private updateCheckCondition;
    private updateIcon;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionbarItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionbarItemComponent, "igo-actionbar-item", never, { "action": "action"; "color": "color"; "withTitle": "withTitle"; "withIcon": "withIcon"; "withTooltip": "withTooltip"; "disabled": "disabled"; "noDisplay": "noDisplay"; }, { "trigger": "trigger"; }, never, never>;
}
