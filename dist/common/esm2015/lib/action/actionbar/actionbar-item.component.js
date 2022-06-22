import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, isObservable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/list";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/checkbox";
import * as i8 from "@ngx-translate/core";
function ActionbarItemComponent_mat_list_item_0_button_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-icon", 7);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("svgIcon", i0.ɵɵpipeBind1(1, 1, ctx_r4.icon$));
} }
function ActionbarItemComponent_mat_list_item_0_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtemplate(2, ActionbarItemComponent_mat_list_item_0_button_4_mat_icon_2_Template, 2, 3, "mat-icon", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r2.color)("disabled", i0.ɵɵpipeBind1(1, 3, ctx_r2.disabled$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.withIcon);
} }
function ActionbarItemComponent_mat_list_item_0_h4_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 8);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r3.title));
} }
function ActionbarItemComponent_mat_list_item_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item", 2);
    i0.ɵɵlistener("click", function ActionbarItemComponent_mat_list_item_0_Template_mat_list_item_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onClick(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtemplate(4, ActionbarItemComponent_mat_list_item_0_button_4_Template, 3, 5, "button", 3);
    i0.ɵɵtemplate(5, ActionbarItemComponent_mat_list_item_0_h4_5_Template, 3, 3, "h4", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r0.withTooltip ? i0.ɵɵpipeBind1(1, 4, i0.ɵɵpipeBind1(2, 6, ctx_r0.tooltip$) || ctx_r0.title) : "")("ngClass", i0.ɵɵpipeBind1(3, 8, ctx_r0.ngClass$));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.withIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.withTitle);
} }
function ActionbarItemComponent_mat_list_item_1_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 11);
    i0.ɵɵlistener("change", function ActionbarItemComponent_mat_list_item_1_mat_checkbox_4_Template_mat_checkbox_change_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.action.handler(); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", i0.ɵɵpipeBind1(1, 2, ctx_r7.checkCondition$));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, ctx_r7.title), " ");
} }
function ActionbarItemComponent_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-item", 9);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtemplate(4, ActionbarItemComponent_mat_list_item_1_mat_checkbox_4_Template, 4, 6, "mat-checkbox", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r1.withTooltip ? i0.ɵɵpipeBind1(1, 3, i0.ɵɵpipeBind1(2, 5, ctx_r1.tooltip$) || ctx_r1.title) : "")("ngClass", i0.ɵɵpipeBind1(3, 7, ctx_r1.ngClass$));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.withTitle);
} }
/**
 * An action button
 */
export class ActionbarItemComponent {
    constructor() {
        this.disabled$ = new BehaviorSubject(false);
        this.checkCondition$ = new BehaviorSubject(undefined);
        this.icon$ = new BehaviorSubject(undefined);
        this.tooltip$ = new BehaviorSubject(undefined);
        this.noDisplay$ = new BehaviorSubject(false);
        this.ngClass$ = new BehaviorSubject({});
        /**
         * Color
         */
        this.color = 'default';
        /**
         * Whether the action title is displayed
         */
        this.withTitle = true;
        /**
         * Whether the action icon is displayed
         */
        this.withIcon = true;
        /**
         * Whether a tooltip should be shown
         */
        this.withTooltip = true;
        /**
         * Event emitted when the action button is clicked
         */
        this.trigger = new EventEmitter();
    }
    /**
     * Whether the action is disabled
     */
    set disabled(value) { this.disabled$.next(value); }
    get disabled() { return this.disabled$.value; }
    /**
     * Whether the action is display or not
     */
    set noDisplay(value) { this.noDisplay$.next(value); }
    get noDisplay() { return this.noDisplay$.value; }
    /**
     * @internal
     */
    get title() { return this.action.title; }
    ngOnInit() {
        const args = this.action.args || [];
        if (this.action.ngClass !== undefined) {
            this.ngClass$$ = this.action.ngClass(...args)
                .subscribe((ngClass) => this.updateNgClass(ngClass));
        }
        if (isObservable(this.action.icon)) {
            this.icon$$ = this.action.icon
                .subscribe((icon) => this.updateIcon(icon));
        }
        else {
            this.updateIcon(this.action.icon);
        }
        if (isObservable(this.action.checkCondition)) {
            this.checkCondition$$ = this.action.checkCondition
                .subscribe((checkCondition) => this.updateCheckCondition(checkCondition));
        }
        else {
            this.updateCheckCondition(this.action.checkCondition);
        }
        if (isObservable(this.action.tooltip)) {
            this.tooltip$$ = this.action.tooltip
                .subscribe((tooltip) => this.updateTooltip(tooltip));
        }
        else {
            this.updateTooltip(this.action.tooltip);
        }
        if (this.action.availability !== undefined) {
            this.availability$$ = this.action.availability(...args)
                .subscribe((available) => this.disabled = !available);
        }
        this.disabled$$ = this.disabled$
            .subscribe((disabled) => this.updateNgClass({ 'igo-actionbar-item-disabled': disabled }));
        if (this.action.display !== undefined) {
            this.display$$ = this.action.display(...args)
                .subscribe((display) => this.noDisplay = !display);
        }
        this.noDisplay$$ = this.noDisplay$
            .subscribe((noDisplay) => this.updateNgClass({ 'igo-actionbar-item-no-display': noDisplay }));
    }
    ngOnDestroy() {
        if (this.ngClass$$ !== undefined) {
            this.ngClass$$.unsubscribe();
            this.ngClass$$ = undefined;
        }
        if (this.availability$$ !== undefined) {
            this.availability$$.unsubscribe();
            this.availability$$ = undefined;
        }
        if (this.display$$ !== undefined) {
            this.display$$.unsubscribe();
            this.display$$ = undefined;
        }
        if (this.checkCondition$$ !== undefined) {
            this.checkCondition$$.unsubscribe();
            this.checkCondition$$ = undefined;
        }
        if (this.icon$$ !== undefined) {
            this.icon$$.unsubscribe();
            this.icon$$ = undefined;
        }
        if (this.tooltip$$ !== undefined) {
            this.tooltip$$.unsubscribe();
            this.tooltip$$ = undefined;
        }
        this.disabled$$.unsubscribe();
        this.noDisplay$$.unsubscribe();
    }
    /**
     * When the action button is clicked, emit the 'trigger' event but don't
     * invoke the action handler. This is handled by the parent component.
     * @internal
     */
    onClick() {
        if (this.disabled === true) {
            return;
        }
        this.trigger.emit(this.action);
    }
    updateNgClass(ngClass) {
        this.ngClass$.next(Object.assign({}, this.ngClass$.value, ngClass));
    }
    updateTooltip(tooltip) {
        this.tooltip$.next(tooltip);
    }
    updateCheckCondition(checkCondition) {
        this.checkCondition$.next(checkCondition);
    }
    updateIcon(icon) {
        this.icon$.next(icon);
    }
}
ActionbarItemComponent.ɵfac = function ActionbarItemComponent_Factory(t) { return new (t || ActionbarItemComponent)(); };
ActionbarItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionbarItemComponent, selectors: [["igo-actionbar-item"]], inputs: { action: "action", color: "color", withTitle: "withTitle", withIcon: "withIcon", withTooltip: "withTooltip", disabled: "disabled", noDisplay: "noDisplay" }, outputs: { trigger: "trigger" }, decls: 2, vars: 2, consts: [["matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 3, "matTooltip", "ngClass", "click", 4, "ngIf"], ["class", "item-checkbox", "matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 3, "matTooltip", "ngClass", 4, "ngIf"], ["matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 3, "matTooltip", "ngClass", "click"], ["mat-list-avatar", "", "mat-icon-button", "", 3, "color", "disabled", 4, "ngIf"], ["matLine", "", 4, "ngIf"], ["mat-list-avatar", "", "mat-icon-button", "", 3, "color", "disabled"], [3, "svgIcon", 4, "ngIf"], [3, "svgIcon"], ["matLine", ""], ["matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 1, "item-checkbox", 3, "matTooltip", "ngClass"], [3, "checked", "change", 4, "ngIf"], [3, "checked", "change"]], template: function ActionbarItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ActionbarItemComponent_mat_list_item_0_Template, 6, 10, "mat-list-item", 0);
        i0.ɵɵtemplate(1, ActionbarItemComponent_mat_list_item_1_Template, 5, 9, "mat-list-item", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.action.checkbox);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.action.checkbox);
    } }, directives: [i1.NgIf, i2.MatListItem, i3.MatTooltip, i1.NgClass, i4.MatButton, i2.MatListAvatarCssMatStyler, i5.MatIcon, i6.MatLine, i7.MatCheckbox], pipes: [i8.TranslatePipe, i1.AsyncPipe], styles: ["mat-list-item.igo-actionbar-item-disabled[_ngcontent-%COMP%]{color:#00000042;cursor:default!important}mat-list-item.igo-actionbar-item-no-display[_ngcontent-%COMP%]{display:none}mat-checkbox[_ngcontent-%COMP%]{padding:12px}.item-checkbox[_ngcontent-%COMP%]{height:56px}.item-checkbox[_ngcontent-%COMP%]     .mat-checkbox-label{margin-left:20px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionbarItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-actionbar-item',
                templateUrl: './actionbar-item.component.html',
                styleUrls: ['./actionbar-item.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { action: [{
            type: Input
        }], color: [{
            type: Input
        }], withTitle: [{
            type: Input
        }], withIcon: [{
            type: Input
        }], withTooltip: [{
            type: Input
        }], disabled: [{
            type: Input
        }], noDisplay: [{
            type: Input
        }], trigger: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uYmFyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvYWN0aW9uL2FjdGlvbmJhci9hY3Rpb25iYXItaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9hY3Rpb24vYWN0aW9uYmFyL2FjdGlvbmJhci1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQWdCLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7SUNDL0QsOEJBQWtFOzs7O0lBQXZDLHVFQUEyQjs7O0lBTHhELGlDQUlpQzs7SUFDL0IsMEdBQWtFO0lBQ3BFLGlCQUFTOzs7SUFIUCxvQ0FBZSxvREFBQTtJQUVKLGVBQWM7SUFBZCxzQ0FBYzs7O0lBRTNCLDZCQUE4QjtJQUFBLFlBQXFCOztJQUFBLGlCQUFLOzs7SUFBMUIsZUFBcUI7SUFBckIsd0RBQXFCOzs7O0lBYnJELHdDQUtzQjtJQUFwQix3TUFBbUI7Ozs7SUFDbkIsNkZBTVM7SUFDVCxxRkFBd0Q7SUFDMUQsaUJBQWdCOzs7SUFYZCxrSUFBMkUsa0RBQUE7SUFHbEUsZUFBYztJQUFkLHNDQUFjO0lBT2xCLGVBQWU7SUFBZix1Q0FBZTs7OztJQVFwQix3Q0FFd0M7SUFEcEMscU1BQVUsdUJBQWdCLElBQUM7O0lBRTNCLFlBQ0o7O0lBQUEsaUJBQWU7OztJQUZYLHNFQUFtQztJQUNuQyxlQUNKO0lBREksbUVBQ0o7OztJQVRGLHdDQUkrQjs7OztJQUM3QiwwR0FJZTtJQUNqQixpQkFBZ0I7OztJQVBkLGtJQUEyRSxrREFBQTtJQUU1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QkFBbkIsS0FBSztZQU1GLFFBQVE7a0JBRFgsS0FBSztZQVFGLFNBQVM7a0JBRFosS0FBSztZQU9JLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiwgaXNPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9hY3Rpb24uaW50ZXJmYWNlcyc7XG5cbiAvKipcbiAgKiBBbiBhY3Rpb24gYnV0dG9uXG4gICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tYWN0aW9uYmFyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uYmFyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb25iYXItaXRlbS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25iYXJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHJlYWRvbmx5IGRpc2FibGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgcmVhZG9ubHkgY2hlY2tDb25kaXRpb24kOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgcmVhZG9ubHkgaWNvbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIHJlYWRvbmx5IHRvb2x0aXAkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICByZWFkb25seSBub0Rpc3BsYXkkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICByZWFkb25seSBuZ0NsYXNzJDogQmVoYXZpb3JTdWJqZWN0PHtba2V5OiBzdHJpbmddOiBib29sZWFufT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblxuICBwcml2YXRlIG5nQ2xhc3MkJDogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZGlzYWJsZWQkJDogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgYXZhaWxhYmlsaXR5JCQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGljb24kJDogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgY2hlY2tDb25kaXRpb24kJDogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgdG9vbHRpcCQkOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBub0Rpc3BsYXkkJDogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZGlzcGxheSQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEFjdGlvblxuICAgKi9cbiAgQElucHV0KCkgYWN0aW9uOiBBY3Rpb247XG5cbiAgLyoqXG4gICAqIENvbG9yXG4gICAqL1xuICBASW5wdXQoKSBjb2xvciA9ICdkZWZhdWx0JztcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYWN0aW9uIHRpdGxlIGlzIGRpc3BsYXllZFxuICAgKi9cbiAgQElucHV0KCkgd2l0aFRpdGxlID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYWN0aW9uIGljb24gaXMgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSB3aXRoSWNvbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYSB0b29sdGlwIHNob3VsZCBiZSBzaG93blxuICAgKi9cbiAgQElucHV0KCkgd2l0aFRvb2x0aXAgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhY3Rpb24gaXMgZGlzYWJsZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLmRpc2FibGVkJC5uZXh0KHZhbHVlKTsgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmRpc2FibGVkJC52YWx1ZTsgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhY3Rpb24gaXMgZGlzcGxheSBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBub0Rpc3BsYXkodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5ub0Rpc3BsYXkkLm5leHQodmFsdWUpOyB9XG4gIGdldCBub0Rpc3BsYXkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm5vRGlzcGxheSQudmFsdWU7IH1cblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBhY3Rpb24gYnV0dG9uIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKSB0cmlnZ2VyOiBFdmVudEVtaXR0ZXI8QWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgdGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYWN0aW9uLnRpdGxlOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmFjdGlvbi5hcmdzIHx8IFtdO1xuXG4gICAgaWYgKHRoaXMuYWN0aW9uLm5nQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZ0NsYXNzJCQgPSB0aGlzLmFjdGlvbi5uZ0NsYXNzKC4uLmFyZ3MpXG4gICAgICAgIC5zdWJzY3JpYmUoKG5nQ2xhc3M6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSkgPT4gdGhpcy51cGRhdGVOZ0NsYXNzKG5nQ2xhc3MpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlKHRoaXMuYWN0aW9uLmljb24pKSB7XG4gICAgICB0aGlzLmljb24kJCA9IHRoaXMuYWN0aW9uLmljb25cbiAgICAgICAgLnN1YnNjcmliZSgoaWNvbjogc3RyaW5nKSA9PiB0aGlzLnVwZGF0ZUljb24oaWNvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZUljb24odGhpcy5hY3Rpb24uaWNvbik7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh0aGlzLmFjdGlvbi5jaGVja0NvbmRpdGlvbikpIHtcbiAgICAgIHRoaXMuY2hlY2tDb25kaXRpb24kJCA9IHRoaXMuYWN0aW9uLmNoZWNrQ29uZGl0aW9uXG4gICAgICAgIC5zdWJzY3JpYmUoKGNoZWNrQ29uZGl0aW9uOiBib29sZWFuKSA9PiB0aGlzLnVwZGF0ZUNoZWNrQ29uZGl0aW9uKGNoZWNrQ29uZGl0aW9uKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tDb25kaXRpb24odGhpcy5hY3Rpb24uY2hlY2tDb25kaXRpb24pO1xuICAgIH1cblxuICAgIGlmIChpc09ic2VydmFibGUodGhpcy5hY3Rpb24udG9vbHRpcCkpIHtcbiAgICAgIHRoaXMudG9vbHRpcCQkID0gdGhpcy5hY3Rpb24udG9vbHRpcFxuICAgICAgICAuc3Vic2NyaWJlKCh0b29sdGlwOiBzdHJpbmcpID0+IHRoaXMudXBkYXRlVG9vbHRpcCh0b29sdGlwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLmFjdGlvbi50b29sdGlwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3Rpb24uYXZhaWxhYmlsaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYXZhaWxhYmlsaXR5JCQgPSB0aGlzLmFjdGlvbi5hdmFpbGFiaWxpdHkoLi4uYXJncylcbiAgICAgICAgLnN1YnNjcmliZSgoYXZhaWxhYmxlOiBib29sZWFuKSA9PiB0aGlzLmRpc2FibGVkID0gIWF2YWlsYWJsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNhYmxlZCQkID0gdGhpcy5kaXNhYmxlZCRcbiAgICAgIC5zdWJzY3JpYmUoKGRpc2FibGVkOiBib29sZWFuKSA9PiB0aGlzLnVwZGF0ZU5nQ2xhc3MoeydpZ28tYWN0aW9uYmFyLWl0ZW0tZGlzYWJsZWQnOiBkaXNhYmxlZH0pKTtcblxuICAgIGlmICh0aGlzLmFjdGlvbi5kaXNwbGF5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGlzcGxheSQkID0gdGhpcy5hY3Rpb24uZGlzcGxheSguLi5hcmdzKVxuICAgICAgICAuc3Vic2NyaWJlKChkaXNwbGF5OiBib29sZWFuKSA9PiB0aGlzLm5vRGlzcGxheSA9ICFkaXNwbGF5KTtcbiAgICB9XG5cbiAgICB0aGlzLm5vRGlzcGxheSQkID0gdGhpcy5ub0Rpc3BsYXkkXG4gICAgICAuc3Vic2NyaWJlKChub0Rpc3BsYXk6IGJvb2xlYW4pID0+IHRoaXMudXBkYXRlTmdDbGFzcyh7J2lnby1hY3Rpb25iYXItaXRlbS1uby1kaXNwbGF5Jzogbm9EaXNwbGF5fSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMubmdDbGFzcyQkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmdDbGFzcyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLm5nQ2xhc3MkJCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdmFpbGFiaWxpdHkkJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmF2YWlsYWJpbGl0eSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmF2YWlsYWJpbGl0eSQkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc3BsYXkkJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRpc3BsYXkkJC51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kaXNwbGF5JCQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hlY2tDb25kaXRpb24kJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNoZWNrQ29uZGl0aW9uJCQudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY2hlY2tDb25kaXRpb24kJCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pY29uJCQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pY29uJCQudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuaWNvbiQkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvb2x0aXAkJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRvb2x0aXAkJC51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy50b29sdGlwJCQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNhYmxlZCQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5ub0Rpc3BsYXkkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGFjdGlvbiBidXR0b24gaXMgY2xpY2tlZCwgZW1pdCB0aGUgJ3RyaWdnZXInIGV2ZW50IGJ1dCBkb24ndFxuICAgKiBpbnZva2UgdGhlIGFjdGlvbiBoYW5kbGVyLiBUaGlzIGlzIGhhbmRsZWQgYnkgdGhlIHBhcmVudCBjb21wb25lbnQuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRyaWdnZXIuZW1pdCh0aGlzLmFjdGlvbik7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU5nQ2xhc3MobmdDbGFzczoge1trZXk6IHN0cmluZ106IGJvb2xlYW59KSB7XG4gICAgdGhpcy5uZ0NsYXNzJC5uZXh0KE9iamVjdC5hc3NpZ24oe30sIHRoaXMubmdDbGFzcyQudmFsdWUsIG5nQ2xhc3MpKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVG9vbHRpcCh0b29sdGlwOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRvb2x0aXAkLm5leHQodG9vbHRpcCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoZWNrQ29uZGl0aW9uKGNoZWNrQ29uZGl0aW9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5jaGVja0NvbmRpdGlvbiQubmV4dChjaGVja0NvbmRpdGlvbik7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uJC5uZXh0KGljb24pO1xuICB9XG59XG4iLCI8bWF0LWxpc3QtaXRlbSAqbmdJZj1cIiFhY3Rpb24uY2hlY2tib3hcIlxuICBtYXRUb29sdGlwQ2xhc3M9XCJhY3Rpb25iYXJJdGVtVG9vbHRpcFwiXG4gIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICBbbWF0VG9vbHRpcF09XCJ3aXRoVG9vbHRpcCA/ICgodG9vbHRpcCQgfCBhc3luYykgfHwgdGl0bGUgfCB0cmFuc2xhdGUpIDogJydcIlxuICBbbmdDbGFzc109XCJuZ0NsYXNzJCB8IGFzeW5jXCJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPlxuICA8YnV0dG9uICpuZ0lmPVwid2l0aEljb25cIlxuICAgIG1hdC1saXN0LWF2YXRhclxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkJCB8IGFzeW5jXCI+XG4gICAgPG1hdC1pY29uICpuZ0lmPVwid2l0aEljb25cIiBzdmdJY29uPVwie3tpY29uJCB8IGFzeW5jfX1cIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGg0ICpuZ0lmPVwid2l0aFRpdGxlXCIgbWF0TGluZT57e3RpdGxlIHwgdHJhbnNsYXRlfX08L2g0PlxuPC9tYXQtbGlzdC1pdGVtPlxuXG48bWF0LWxpc3QtaXRlbSBjbGFzcz1cIml0ZW0tY2hlY2tib3hcIiAqbmdJZj1cImFjdGlvbi5jaGVja2JveFwiXG4gIG1hdFRvb2x0aXBDbGFzcz1cImFjdGlvbmJhckl0ZW1Ub29sdGlwXCJcbiAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gIFttYXRUb29sdGlwXT1cIndpdGhUb29sdGlwID8gKCh0b29sdGlwJCB8IGFzeW5jKSB8fCB0aXRsZSB8IHRyYW5zbGF0ZSkgOiAnJ1wiXG4gIFtuZ0NsYXNzXT1cIm5nQ2xhc3MkIHwgYXN5bmNcIj5cbiAgPG1hdC1jaGVja2JveCAqbmdJZj1cIndpdGhUaXRsZVwiXG4gICAgICAoY2hhbmdlKT1cImFjdGlvbi5oYW5kbGVyKClcIlxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tDb25kaXRpb24kIHwgYXN5bmNcIj5cbiAgICAgIHt7dGl0bGUgfCB0cmFuc2xhdGV9fVxuICA8L21hdC1jaGVja2JveD5cbjwvbWF0LWxpc3QtaXRlbT5cbiJdfQ==