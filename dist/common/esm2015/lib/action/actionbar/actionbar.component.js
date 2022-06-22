import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { Media } from '@igo2/core';
import { EntityStoreWatcher } from '../../entity';
import { ActionbarMode } from '../shared/action.enums';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/list";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@angular/material/icon";
import * as i8 from "./actionbar-item.component";
import * as i9 from "@angular/material/menu";
import * as i10 from "@angular/material/card";
import * as i11 from "@ngx-translate/core";
function ActionbarComponent_mat_list_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function ActionbarComponent_mat_list_0_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.scrollUp(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 1, "igo.common.actionbar.scrollUp"));
} }
function ActionbarComponent_mat_list_0_igo_actionbar_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-actionbar-item", 8);
    i0.ɵɵlistener("trigger", function ActionbarComponent_mat_list_0_igo_actionbar_item_2_Template_igo_actionbar_item_trigger_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.onTriggerAction(ctx_r9.toggleCollapseAction); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("withTitle", false)("withIcon", true)("color", ctx_r4.color)("disabled", ctx_r4.store.view.empty)("action", ctx_r4.toggleCollapseAction);
} }
function ActionbarComponent_mat_list_0_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-actionbar-item", 11);
    i0.ɵɵlistener("trigger", function ActionbarComponent_mat_list_0_3_ng_template_0_Template_igo_actionbar_item_trigger_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const action_r13 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onTriggerAction(action_r13); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r13 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("withTitle", ctx_r12.withTitle)("withIcon", ctx_r12.withIcon)("withTooltip", ctx_r12.withTooltip)("color", ctx_r12.color)("disabled", ctx_r12.store.state.get(action_r13).disabled)("action", action_r13);
} }
function ActionbarComponent_mat_list_0_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ActionbarComponent_mat_list_0_3_ng_template_0_Template, 1, 6, "ng-template", 9, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵpipe(2, "async");
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r5.store.view.all$()));
} }
function ActionbarComponent_mat_list_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "button", 6);
    i0.ɵɵlistener("click", function ActionbarComponent_mat_list_0_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.scrollDown(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 1, "igo.common.actionbar.scrollDown"));
} }
function ActionbarComponent_mat_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵtemplate(1, ActionbarComponent_mat_list_0_div_1_Template, 4, 3, "div", 2);
    i0.ɵɵtemplate(2, ActionbarComponent_mat_list_0_igo_actionbar_item_2_Template, 1, 5, "igo-actionbar-item", 3);
    i0.ɵɵtemplate(3, ActionbarComponent_mat_list_0_3_Template, 3, 3, undefined, 0);
    i0.ɵɵtemplate(4, ActionbarComponent_mat_list_0_div_4_Template, 4, 3, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.heightCondition && ctx_r0.positionConditionTop && ctx_r0.isDesktop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.withToggleButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.collapsed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.heightCondition && ctx_r0.positionConditionLow && ctx_r0.isDesktop);
} }
function ActionbarComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-actionbar-item", 18);
    i0.ɵɵlistener("trigger", function ActionbarComponent_div_1_ng_template_7_Template_igo_actionbar_item_trigger_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r22); const action_r20 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onTriggerAction(action_r20); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("withTitle", ctx_r19.withTitle)("withIcon", ctx_r19.withIcon)("color", ctx_r19.color)("action", action_r20);
} }
function ActionbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "button", 14);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", 16, 17);
    i0.ɵɵelementStart(6, "mat-list");
    i0.ɵɵtemplate(7, ActionbarComponent_div_1_ng_template_7_Template, 1, 4, "ng-template", 9);
    i0.ɵɵpipe(8, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r18 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 10, "igo.common.actionbar.icon"))("matMenuTriggerFor", _r18)("disabled", ctx_r1.store.view.empty)("color", ctx_r1.iconColor);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("svgIcon", ctx_r1.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r1.overlayClass);
    i0.ɵɵproperty("xPosition", ctx_r1.xPosition)("yPosition", ctx_r1.yPosition);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 12, ctx_r1.store.view.all$()));
} }
function ActionbarComponent_mat_card_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-actionbar-item", 18);
    i0.ɵɵlistener("trigger", function ActionbarComponent_mat_card_2_ng_template_2_Template_igo_actionbar_item_trigger_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r26); const action_r24 = restoredCtx.$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.onTriggerAction(action_r24); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(1, "br");
} if (rf & 2) {
    const action_r24 = ctx.$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("withTitle", ctx_r23.withTitle)("withIcon", ctx_r23.withIcon)("color", ctx_r23.color)("action", action_r24);
} }
function ActionbarComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card", 19);
    i0.ɵɵelementStart(1, "mat-list");
    i0.ɵɵtemplate(2, ActionbarComponent_mat_card_2_ng_template_2_Template, 2, 4, "ng-template", 9);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 1, ctx_r2.store.view.all$()));
} }
/**
 * A list of action buttons.
 * This component can be displayed in one of two way: 'dock' or 'overlay'
 */
export class ActionbarComponent {
    constructor(overlay, elRef, cdRef, mediaService) {
        this.overlay = overlay;
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.mediaService = mediaService;
        /**
         * Reference to the ActionbarMode enum for use in the template
         * @internal
         */
        this.actionbarMode = ActionbarMode;
        /**
         * Whether the actionbar is collapsed (Dock mode)
         * @internal
         */
        this.collapsed = false;
        /**
         * Toggle collapse action (Dock)
         * @internal
         */
        this.toggleCollapseAction = {
            id: 'actionbar_toggle',
            icon: 'dots-vertical',
            handler: () => {
                this.collapsed = !this.collapsed;
            }
        };
        /**
         * Height Condition for scroll button
         */
        this.heightCondition$ = new BehaviorSubject(false);
        /**
         * Position Condition for top scroll button
         */
        this.positionConditionTop$ = new BehaviorSubject(true);
        /**
         * Position Condition for low scroll button
         */
        this.positionConditionLow$ = new BehaviorSubject(true);
        /**
         * Actionbar mode
         */
        this.mode = ActionbarMode.Dock;
        /**
         * Whether a toggle button should be displayed (Dock mode)
         */
        this.withToggleButton = false;
        /**
         * Whether a the actionbar should display buttons horizontally
         */
        this.horizontal = false;
        /**
         * Color
         */
        this.color = 'default';
        /**
         * Color of the button if action mode === overlay
         */
        this.iconColor = 'default';
        /**
         * Whether action titles are displayed
         */
        this.withTitle = true;
        /**
         * Whether action tooltips are displayed
         */
        this.withTooltip = true;
        /**
         * Whether action titles are displayed (condition for scroll button)
         */
        this.scrollActive = true;
        /**
         * Whether action icons are displayed
         */
        this.withIcon = true;
        /**
         * Which icon want to be shown
         */
        this.icon = 'dots-horizontal';
        /**
         * Overlay X position
         */
        this.xPosition = 'before';
        /**
         * Overlay Y position
         */
        this.yPosition = 'above';
        this._overlayClass = '';
    }
    /**
     * Class to add to the actionbar overlay
     */
    set overlayClass(value) {
        this._overlayClass = value;
    }
    get overlayClass() {
        return [this._overlayClass, 'igo-actionbar-overlay'].join(' ');
    }
    /**
     * @ignore
     */
    get withTitleClass() {
        return this.withTitle;
    }
    /**
     * @ignore
     */
    get withIconClass() {
        return this.withIcon;
    }
    /**
     * @ignore
     */
    get horizontalClass() {
        return this.horizontal;
    }
    get heightCondition() {
        const el = this.elRef.nativeElement;
        if (this.scrollActive === false) {
            if (el.clientHeight < el.scrollHeight) {
                return true;
            }
        }
        return false;
    }
    get positionConditionTop() {
        if (this.elRef.nativeElement.scrollTop === 0) {
            return false;
        }
        return true;
    }
    get positionConditionLow() {
        const el = this.elRef.nativeElement;
        if (el.scrollTop >= (el.scrollHeight - el.clientHeight)) {
            return false;
        }
        return true;
    }
    get isDesktop() {
        return this.mediaService.getMedia() === Media.Desktop;
    }
    /**
     * @internal
     */
    ngOnChanges(changes) {
        const store = changes.store;
        if (store && store.currentValue !== store.previousValue) {
            if (this.watcher !== undefined) {
                this.watcher.destroy();
            }
            this.watcher = new EntityStoreWatcher(this.store, this.cdRef);
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this.watcher.destroy();
    }
    /**
     * Invoke the action handler
     * @internal
     */
    onTriggerAction(action) {
        const args = action.args || [];
        action.handler(...args);
    }
    scrollDown() {
        this.elRef.nativeElement.scrollBy(0, 52);
    }
    scrollUp() {
        this.elRef.nativeElement.scrollBy(0, -52);
    }
}
ActionbarComponent.ɵfac = function ActionbarComponent_Factory(t) { return new (t || ActionbarComponent)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.MediaService)); };
ActionbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionbarComponent, selectors: [["igo-actionbar"]], hostVars: 6, hostBindings: function ActionbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("with-title", ctx.withTitleClass)("with-icon", ctx.withIconClass)("horizontal", ctx.horizontalClass);
    } }, inputs: { store: "store", mode: "mode", withToggleButton: "withToggleButton", horizontal: "horizontal", color: "color", iconColor: "iconColor", withTitle: "withTitle", withTooltip: "withTooltip", scrollActive: "scrollActive", withIcon: "withIcon", icon: "icon", xPosition: "xPosition", yPosition: "yPosition", overlayClass: "overlayClass" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "context-menu-card mat-elevation-z4", 4, "ngIf"], ["id", "topChevron", 4, "ngIf"], ["color", "accent", 3, "withTitle", "withIcon", "color", "disabled", "action", "trigger", 4, "ngIf"], ["id", "lowChevron", 4, "ngIf"], ["id", "topChevron"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "click"], ["svgIcon", "chevron-up"], ["color", "accent", 3, "withTitle", "withIcon", "color", "disabled", "action", "trigger"], ["ngFor", "", 3, "ngForOf"], ["buttonContent", ""], ["color", "accent", 3, "withTitle", "withIcon", "withTooltip", "color", "disabled", "action", "trigger"], ["id", "lowChevron"], ["svgIcon", "chevron-down"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "buttonOverlay", 3, "matTooltip", "matMenuTriggerFor", "disabled", "color"], [3, "svgIcon"], ["overlapTrigger", "true", 1, "igo-compact-menu", "igo-no-min-width-menu", 3, "xPosition", "yPosition"], ["actionbarMenu", "matMenu"], ["color", "accent", 3, "withTitle", "withIcon", "color", "action", "trigger"], [1, "context-menu-card", "mat-elevation-z4"]], template: function ActionbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ActionbarComponent_mat_list_0_Template, 5, 4, "mat-list", 0);
        i0.ɵɵtemplate(1, ActionbarComponent_div_1_Template, 9, 14, "div", 0);
        i0.ɵɵtemplate(2, ActionbarComponent_mat_card_2_Template, 4, 3, "mat-card", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.mode === ctx.actionbarMode.Dock);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mode === ctx.actionbarMode.Overlay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mode === ctx.actionbarMode.Context);
    } }, directives: [i3.NgIf, i4.MatList, i5.MatButton, i6.MatTooltip, i7.MatIcon, i8.ActionbarItemComponent, i3.NgForOf, i9.MatMenuTrigger, i9.MatMenu, i10.MatCard], pipes: [i11.TranslatePipe, i3.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:auto;position:relative}button[_ngcontent-%COMP%]{margin:4px}.buttonOverlay[_ngcontent-%COMP%]{margin:0}mat-list[_ngcontent-%COMP%]{padding-top:0}.horizontal[_nghost-%COMP%]{max-width:100%;overflow:unset}.horizontal[_nghost-%COMP%]   mat-list[_ngcontent-%COMP%]{width:auto;white-space:nowrap}.horizontal[_nghost-%COMP%]   igo-actionbar-item[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]     .mat-list .mat-list-item .mat-list-text>*{white-space:normal;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;max-height:36px;line-height:18px;-webkit-box-orient:vertical;-webkit-line-clamp:2}[_nghost-%COMP%]     .mat-list-base .mat-list-item.mat-list-item-with-avatar{height:46px}[_nghost-%COMP%]     .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content{display:-webkit-flex;height:46px;padding:3px}[_nghost-%COMP%]     .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content>mat-icon{padding:8px}igo-actionbar-item[_ngcontent-%COMP%]     mat-list-item [mat-list-avatar]{height:auto;width:40px}igo-actionbar-item[_ngcontent-%COMP%]     mat-list-item:hover{cursor:pointer}.context-menu-card[_ngcontent-%COMP%]{padding:8px 3px;margin:10px}#topChevron[_ngcontent-%COMP%]{position:sticky;top:0;background-color:#fff;z-index:3}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){#topChevron[_ngcontent-%COMP%]{position:fixed;top:unset}}@supports (-ms-accelerator: true){#topChevron[_ngcontent-%COMP%]{position:fixed;top:unset}}#lowChevron[_ngcontent-%COMP%]{position:fixed;position:sticky;bottom:0;background-color:#fff;z-index:3}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionbarComponent, [{
        type: Component,
        args: [{
                selector: 'igo-actionbar',
                templateUrl: './actionbar.component.html',
                styleUrls: ['./actionbar.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.MediaService }]; }, { store: [{
            type: Input
        }], mode: [{
            type: Input
        }], withToggleButton: [{
            type: Input
        }], horizontal: [{
            type: Input
        }], color: [{
            type: Input
        }], iconColor: [{
            type: Input
        }], withTitle: [{
            type: Input
        }], withTooltip: [{
            type: Input
        }], scrollActive: [{
            type: Input
        }], withIcon: [{
            type: Input
        }], icon: [{
            type: Input
        }], xPosition: [{
            type: Input
        }], yPosition: [{
            type: Input
        }], overlayClass: [{
            type: Input
        }], withTitleClass: [{
            type: HostBinding,
            args: ['class.with-title']
        }], withIconClass: [{
            type: HostBinding,
            args: ['class.with-icon']
        }], horizontalClass: [{
            type: HostBinding,
            args: ['class.horizontal']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2FjdGlvbi9hY3Rpb25iYXIvYWN0aW9uYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2FjdGlvbi9hY3Rpb25iYXIvYWN0aW9uYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFFWCx1QkFBdUIsRUFLeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFnQixLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWxELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUd2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNoQm5DLDhCQUNrQjtJQUNoQixpQ0FLdUI7SUFBckIsZ01BQW9COztJQUNwQiw4QkFBMEM7SUFDNUMsaUJBQVM7SUFDWCxpQkFBTTs7SUFKRixlQUEwRDtJQUExRCxrRkFBMEQ7Ozs7SUFNOUQsNkNBUW9EO0lBQWxELGtRQUFpRDtJQUNuRCxpQkFBcUI7OztJQU5uQixpQ0FBbUIsa0JBQUEsdUJBQUEscUNBQUEsdUNBQUE7Ozs7SUFTbkIsOENBUXNDO0lBQXBDLDRTQUFtQztJQUNyQyxpQkFBcUI7Ozs7SUFQbkIsNkNBQXVCLDhCQUFBLG9DQUFBLHdCQUFBLDBEQUFBLHNCQUFBOzs7SUFIM0IsK0hBV2M7Ozs7SUFYa0Qsd0VBQXFDOzs7O0lBYXJHLCtCQUNrQjtJQUNoQixpQ0FLeUI7SUFBdkIscU1BQXNCOztJQUN0QiwrQkFBNEM7SUFDOUMsaUJBQVM7SUFDWCxpQkFB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QzVDLENBQUM7O29GQTFOVSxrQkFBa0I7cUVBQWxCLGtCQUFrQjs7O1FDOUIvQiw2RUFrRFc7UUFFWCxvRUFpQ007UUFDTiw2RUFjVzs7UUFwR0EsMERBQWlDO1FBb0R0QyxlQUFvQztRQUFwQyw2REFBb0M7UUFrQy9CLGVBQW9DO1FBQXBDLDZEQUFvQzs7dUZEeERsQyxrQkFBa0I7Y0FOOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OElBbURVLEtBQUs7a0JBQWIsS0FBSztZQUtHLElBQUk7a0JBQVosS0FBSztZQUtHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUtHLFVBQVU7a0JBQWxCLEtBQUs7WUFLRyxLQUFLO2tCQUFiLEtBQUs7WUFLRyxTQUFTO2tCQUFqQixLQUFLO1lBS0csU0FBUztrQkFBakIsS0FBSztZQUtHLFdBQVc7a0JBQW5CLEtBQUs7WUFLRyxZQUFZO2tCQUFwQixLQUFLO1lBS0csUUFBUTtrQkFBaEIsS0FBSztZQUtHLElBQUk7a0JBQVosS0FBSztZQUtHLFNBQVM7a0JBQWpCLEtBQUs7WUFLRyxTQUFTO2tCQUFqQixLQUFLO1lBTUYsWUFBWTtrQkFEZixLQUFLO1lBYUYsY0FBYztrQkFEakIsV0FBVzttQkFBQyxrQkFBa0I7WUFTM0IsYUFBYTtrQkFEaEIsV0FBVzttQkFBQyxpQkFBaUI7WUFTMUIsZUFBZTtrQkFEbEIsV0FBVzttQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlLCBNZWRpYSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgRW50aXR5U3RvcmVXYXRjaGVyIH0gZnJvbSAnLi4vLi4vZW50aXR5JztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9hY3Rpb24uaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBY3Rpb25iYXJNb2RlIH0gZnJvbSAnLi4vc2hhcmVkL2FjdGlvbi5lbnVtcyc7XG5pbXBvcnQgeyBBY3Rpb25TdG9yZSB9IGZyb20gJy4uL3NoYXJlZC9zdG9yZSc7XG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQSBsaXN0IG9mIGFjdGlvbiBidXR0b25zLlxuICogVGhpcyBjb21wb25lbnQgY2FuIGJlIGRpc3BsYXllZCBpbiBvbmUgb2YgdHdvIHdheTogJ2RvY2snIG9yICdvdmVybGF5J1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tYWN0aW9uYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbmJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbmJhci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25iYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgQWN0aW9uYmFyTW9kZSBlbnVtIGZvciB1c2UgaW4gdGhlIHRlbXBsYXRlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYWN0aW9uYmFyTW9kZSA9IEFjdGlvbmJhck1vZGU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGFjdGlvbmJhciBpcyBjb2xsYXBzZWQgKERvY2sgbW9kZSlcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjb2xsYXBzZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVG9nZ2xlIGNvbGxhcHNlIGFjdGlvbiAoRG9jaylcbiAgICogQGludGVybmFsXG4gICAqL1xuICB0b2dnbGVDb2xsYXBzZUFjdGlvbiA9IHtcbiAgICBpZDogJ2FjdGlvbmJhcl90b2dnbGUnLFxuICAgIGljb246ICdkb3RzLXZlcnRpY2FsJyxcbiAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFjdGlvbiBzdG9yZSB3YXRjaGVyXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJpdmF0ZSB3YXRjaGVyOiBFbnRpdHlTdG9yZVdhdGNoZXI8QWN0aW9uPjtcblxuICAvKipcbiAgICogSGVpZ2h0IENvbmRpdGlvbiBmb3Igc2Nyb2xsIGJ1dHRvblxuICAgKi9cbiAgaGVpZ2h0Q29uZGl0aW9uJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIENvbmRpdGlvbiBmb3IgdG9wIHNjcm9sbCBidXR0b25cbiAgICovXG4gIHBvc2l0aW9uQ29uZGl0aW9uVG9wJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0cnVlKTtcblxuICAvKipcbiAgICogUG9zaXRpb24gQ29uZGl0aW9uIGZvciBsb3cgc2Nyb2xsIGJ1dHRvblxuICAgKi9cbiAgcG9zaXRpb25Db25kaXRpb25Mb3ckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuXG4gIC8qKlxuICAgKiBBY3Rpb24gc3RvcmVcbiAgICovXG4gIEBJbnB1dCgpIHN0b3JlOiBBY3Rpb25TdG9yZTtcblxuICAvKipcbiAgICogQWN0aW9uYmFyIG1vZGVcbiAgICovXG4gIEBJbnB1dCgpIG1vZGU6IEFjdGlvbmJhck1vZGUgPSBBY3Rpb25iYXJNb2RlLkRvY2s7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYSB0b2dnbGUgYnV0dG9uIHNob3VsZCBiZSBkaXNwbGF5ZWQgKERvY2sgbW9kZSlcbiAgICovXG4gIEBJbnB1dCgpIHdpdGhUb2dnbGVCdXR0b24gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hldGhlciBhIHRoZSBhY3Rpb25iYXIgc2hvdWxkIGRpc3BsYXkgYnV0dG9ucyBob3Jpem9udGFsbHlcbiAgICovXG4gIEBJbnB1dCgpIGhvcml6b250YWwgPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29sb3JcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yID0gJ2RlZmF1bHQnO1xuXG4gIC8qKlxuICAgKiBDb2xvciBvZiB0aGUgYnV0dG9uIGlmIGFjdGlvbiBtb2RlID09PSBvdmVybGF5XG4gICAqL1xuICBASW5wdXQoKSBpY29uQ29sb3IgPSAnZGVmYXVsdCc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYWN0aW9uIHRpdGxlcyBhcmUgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSB3aXRoVGl0bGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGFjdGlvbiB0b29sdGlwcyBhcmUgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSB3aXRoVG9vbHRpcCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYWN0aW9uIHRpdGxlcyBhcmUgZGlzcGxheWVkIChjb25kaXRpb24gZm9yIHNjcm9sbCBidXR0b24pXG4gICAqL1xuICBASW5wdXQoKSBzY3JvbGxBY3RpdmUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGFjdGlvbiBpY29ucyBhcmUgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSB3aXRoSWNvbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoaWNoIGljb24gd2FudCB0byBiZSBzaG93blxuICAgKi9cbiAgQElucHV0KCkgaWNvbiA9ICdkb3RzLWhvcml6b250YWwnO1xuXG4gIC8qKlxuICAgKiBPdmVybGF5IFggcG9zaXRpb25cbiAgICovXG4gIEBJbnB1dCgpIHhQb3NpdGlvbiA9ICdiZWZvcmUnO1xuXG4gIC8qKlxuICAgKiBPdmVybGF5IFkgcG9zaXRpb25cbiAgICovXG4gIEBJbnB1dCgpIHlQb3NpdGlvbiA9ICdhYm92ZSc7XG5cbiAgLyoqXG4gICAqIENsYXNzIHRvIGFkZCB0byB0aGUgYWN0aW9uYmFyIG92ZXJsYXlcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBvdmVybGF5Q2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX292ZXJsYXlDbGFzcyA9IHZhbHVlO1xuICB9XG4gIGdldCBvdmVybGF5Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gW3RoaXMuX292ZXJsYXlDbGFzcywgJ2lnby1hY3Rpb25iYXItb3ZlcmxheSddLmpvaW4oJyAnKTtcbiAgfVxuICBwcml2YXRlIF9vdmVybGF5Q2xhc3MgPSAnJztcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy53aXRoLXRpdGxlJylcbiAgZ2V0IHdpdGhUaXRsZUNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLndpdGhUaXRsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLndpdGgtaWNvbicpXG4gIGdldCB3aXRoSWNvbkNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLndpdGhJY29uO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG9yaXpvbnRhbCcpXG4gIGdldCBob3Jpem9udGFsQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbDtcbiAgfVxuXG4gIGdldCBoZWlnaHRDb25kaXRpb24oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgaWYgKGVsLmNsaWVudEhlaWdodCA8IGVsLnNjcm9sbEhlaWdodCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uQ29uZGl0aW9uVG9wKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uQ29uZGl0aW9uTG93KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChlbC5zY3JvbGxUb3AgPj0gKGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXQgaXNEZXNrdG9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1lZGlhU2VydmljZS5nZXRNZWRpYSgpID09PSBNZWRpYS5EZXNrdG9wO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHN0b3JlID0gY2hhbmdlcy5zdG9yZTtcbiAgICBpZiAoc3RvcmUgJiYgc3RvcmUuY3VycmVudFZhbHVlICE9PSBzdG9yZS5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICBpZiAodGhpcy53YXRjaGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy53YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud2F0Y2hlciA9IG5ldyBFbnRpdHlTdG9yZVdhdGNoZXIodGhpcy5zdG9yZSwgdGhpcy5jZFJlZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy53YXRjaGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgdGhlIGFjdGlvbiBoYW5kbGVyXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25UcmlnZ2VyQWN0aW9uKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgY29uc3QgYXJncyA9IGFjdGlvbi5hcmdzIHx8IFtdO1xuICAgIGFjdGlvbi5oYW5kbGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgc2Nyb2xsRG93bigpIHtcbiAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsQnkoMCwgNTIpO1xuICB9XG5cbiAgc2Nyb2xsVXAoKSB7XG4gICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEJ5KDAsIC01Mik7XG4gIH1cblxufVxuIiwiPG1hdC1saXN0ICpuZ0lmPVwibW9kZSA9PT0gYWN0aW9uYmFyTW9kZS5Eb2NrXCI+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiaGVpZ2h0Q29uZGl0aW9uICYmIHBvc2l0aW9uQ29uZGl0aW9uVG9wICYmIGlzRGVza3RvcFwiXG4gICAgICBpZD1cInRvcENoZXZyb25cIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmNvbW1vbi5hY3Rpb25iYXIuc2Nyb2xsVXAnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgKGNsaWNrKT1cInNjcm9sbFVwKClcIj5cbiAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJjaGV2cm9uLXVwXCI+PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGlnby1hY3Rpb25iYXItaXRlbVxuICAgICAgKm5nSWY9XCJ3aXRoVG9nZ2xlQnV0dG9uXCJcbiAgICAgIGNvbG9yPVwiYWNjZW50XCJcbiAgICAgIFt3aXRoVGl0bGVdPVwiZmFsc2VcIlxuICAgICAgW3dpdGhJY29uXT1cInRydWVcIlxuICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgIFtkaXNhYmxlZF09XCJzdG9yZS52aWV3LmVtcHR5XCJcbiAgICAgIFthY3Rpb25dPVwidG9nZ2xlQ29sbGFwc2VBY3Rpb25cIlxuICAgICAgKHRyaWdnZXIpPVwib25UcmlnZ2VyQWN0aW9uKHRvZ2dsZUNvbGxhcHNlQWN0aW9uKVwiPlxuICAgIDwvaWdvLWFjdGlvbmJhci1pdGVtPlxuXG4gICAgPG5nLXRlbXBsYXRlICNidXR0b25Db250ZW50ICpuZ0lmPVwiIWNvbGxhcHNlZFwiIG5nRm9yIGxldC1hY3Rpb24gW25nRm9yT2ZdPVwic3RvcmUudmlldy5hbGwkKCkgfCBhc3luY1wiPlxuICAgICAgPGlnby1hY3Rpb25iYXItaXRlbVxuICAgICAgICBjb2xvcj1cImFjY2VudFwiXG4gICAgICAgIFt3aXRoVGl0bGVdPVwid2l0aFRpdGxlXCJcbiAgICAgICAgW3dpdGhJY29uXT1cIndpdGhJY29uXCJcbiAgICAgICAgW3dpdGhUb29sdGlwXT1cIndpdGhUb29sdGlwXCJcbiAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cInN0b3JlLnN0YXRlLmdldChhY3Rpb24pLmRpc2FibGVkXCJcbiAgICAgICAgW2FjdGlvbl09XCJhY3Rpb25cIlxuICAgICAgICAodHJpZ2dlcik9XCJvblRyaWdnZXJBY3Rpb24oYWN0aW9uKVwiPlxuICAgICAgPC9pZ28tYWN0aW9uYmFyLWl0ZW0+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxkaXYgKm5nSWY9XCJoZWlnaHRDb25kaXRpb24gJiYgcG9zaXRpb25Db25kaXRpb25Mb3cgJiYgaXNEZXNrdG9wXCJcbiAgICAgIGlkPVwibG93Q2hldnJvblwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uY29tbW9uLmFjdGlvbmJhci5zY3JvbGxEb3duJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgIChjbGljayk9XCJzY3JvbGxEb3duKClcIj5cbiAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJjaGV2cm9uLWRvd25cIj48L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbjwvbWF0LWxpc3Q+XG5cbjxkaXYgKm5nSWY9XCJtb2RlID09PSBhY3Rpb25iYXJNb2RlLk92ZXJsYXlcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbk92ZXJsYXlcIlxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgW21hdFRvb2x0aXBdPVwiJ2lnby5jb21tb24uYWN0aW9uYmFyLmljb24nIHwgdHJhbnNsYXRlXCJcbiAgICBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYWN0aW9uYmFyTWVudVwiXG4gICAgW2Rpc2FibGVkXT1cInN0b3JlLnZpZXcuZW1wdHlcIlxuICAgIFtjb2xvcl09XCJpY29uQ29sb3JcIj5cbiAgICA8bWF0LWljb24gW3N2Z0ljb25dPVwiaWNvblwiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuXG4gIDxtYXQtbWVudVxuICAgICNhY3Rpb25iYXJNZW51PVwibWF0TWVudVwiXG4gICAgY2xhc3M9XCJpZ28tY29tcGFjdC1tZW51IGlnby1uby1taW4td2lkdGgtbWVudVwiXG4gICAgb3ZlcmxhcFRyaWdnZXI9XCJ0cnVlXCJcbiAgICBbeFBvc2l0aW9uXT1cInhQb3NpdGlvblwiXG4gICAgW3lQb3NpdGlvbl09XCJ5UG9zaXRpb25cIlxuICAgIFtjbGFzc109XCJvdmVybGF5Q2xhc3NcIj5cblxuICAgIDxtYXQtbGlzdD5cbiAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtYWN0aW9uIFtuZ0Zvck9mXT1cInN0b3JlLnZpZXcuYWxsJCgpIHwgYXN5bmNcIj5cbiAgICAgICAgPGlnby1hY3Rpb25iYXItaXRlbVxuICAgICAgICAgIGNvbG9yPVwiYWNjZW50XCJcbiAgICAgICAgICBbd2l0aFRpdGxlXT1cIndpdGhUaXRsZVwiXG4gICAgICAgICAgW3dpdGhJY29uXT1cIndpdGhJY29uXCJcbiAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgIFthY3Rpb25dPVwiYWN0aW9uXCJcbiAgICAgICAgICAodHJpZ2dlcik9XCJvblRyaWdnZXJBY3Rpb24oYWN0aW9uKVwiPlxuICAgICAgICA8L2lnby1hY3Rpb25iYXItaXRlbT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9tYXQtbGlzdD5cbiAgPC9tYXQtbWVudT5cbjwvZGl2PlxuPG1hdC1jYXJkICpuZ0lmPVwibW9kZSA9PT0gYWN0aW9uYmFyTW9kZS5Db250ZXh0XCIgY2xhc3M9XCJjb250ZXh0LW1lbnUtY2FyZCBtYXQtZWxldmF0aW9uLXo0XCI+XG4gIDxtYXQtbGlzdD5cbiAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtYWN0aW9uIFtuZ0Zvck9mXT1cInN0b3JlLnZpZXcuYWxsJCgpIHwgYXN5bmNcIj5cbiAgICAgICAgICA8aWdvLWFjdGlvbmJhci1pdGVtXG4gICAgICAgICAgICBjb2xvcj1cImFjY2VudFwiXG4gICAgICAgICAgICBbd2l0aFRpdGxlXT1cIndpdGhUaXRsZVwiXG4gICAgICAgICAgICBbd2l0aEljb25dPVwid2l0aEljb25cIlxuICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgICAgIFthY3Rpb25dPVwiYWN0aW9uXCJcbiAgICAgICAgICAgICh0cmlnZ2VyKT1cIm9uVHJpZ2dlckFjdGlvbihhY3Rpb24pXCI+XG4gICAgICAgICAgPC9pZ28tYWN0aW9uYmFyLWl0ZW0+XG4gICAgICAgIDxici8+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC1saXN0PlxuPC9tYXQtY2FyZD5cbiJdfQ==