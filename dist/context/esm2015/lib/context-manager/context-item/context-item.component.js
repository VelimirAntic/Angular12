import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TypePermission } from '../shared/context.enum';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/auth";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/material/list";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/material/button";
import * as i7 from "@igo2/common";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/material/icon";
import * as i10 from "@ngx-translate/core";
function ContextItemComponent_button_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-icon", 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r2.context.icon ? ctx_r2.context.icon : ctx_r2.context.scope === "public" ? "earth" : "star");
} }
function ContextItemComponent_button_1_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 8);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.context.iconImage, i0.ɵɵsanitizeUrl);
} }
function ContextItemComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function ContextItemComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.favoriteClick(ctx_r4.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtemplate(2, ContextItemComponent_button_1_mat_icon_2_Template, 1, 1, "mat-icon", 5);
    i0.ɵɵtemplate(3, ContextItemComponent_button_1_img_3_Template, 1, 1, "img", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r0.auth.authenticated ? i0.ɵɵpipeBind1(1, 4, "igo.context.contextManager.favorite") : "")("color", ctx_r0.default ? "primary" : "default");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.context.iconImage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.context.iconImage);
} }
function ContextItemComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.save.emit(ctx_r14.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.save"))("color", ctx_r6.color);
} }
function ContextItemComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.managePermissions.emit(ctx_r16.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.managePermissions"))("color", ctx_r8.color);
} }
function ContextItemComponent_div_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.clone.emit(ctx_r18.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.clone"))("color", ctx_r9.color);
} }
function ContextItemComponent_div_4_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.edit.emit(ctx_r20.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r10.color)("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.edit"));
} }
function ContextItemComponent_div_4_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.hide.emit(ctx_r22.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r11.color)("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.hide"));
} }
function ContextItemComponent_div_4_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.show.emit(ctx_r24.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r12.color)("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.show"));
} }
function ContextItemComponent_div_4_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.delete.emit(ctx_r26.context); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.contextManager.delete"));
} }
function ContextItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, ContextItemComponent_div_4_button_1_Template, 3, 4, "button", 10);
    i0.ɵɵelementStart(2, "div", 11, 12);
    i0.ɵɵtemplate(4, ContextItemComponent_div_4_button_4_Template, 3, 4, "button", 13);
    i0.ɵɵtemplate(5, ContextItemComponent_div_4_button_5_Template, 3, 4, "button", 14);
    i0.ɵɵtemplate(6, ContextItemComponent_div_4_button_6_Template, 3, 4, "button", 15);
    i0.ɵɵtemplate(7, ContextItemComponent_div_4_button_7_Template, 3, 4, "button", 16);
    i0.ɵɵtemplate(8, ContextItemComponent_div_4_button_8_Template, 3, 4, "button", 16);
    i0.ɵɵtemplate(9, ContextItemComponent_div_4_button_9_Template, 3, 3, "button", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 18);
    i0.ɵɵlistener("click", function ContextItemComponent_div_4_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.collapsed = !ctx_r28.collapsed; });
    i0.ɵɵelement(11, "mat-icon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.collapsed && ctx_r1.selected && (ctx_r1.context.permission === ctx_r1.typePermission[ctx_r1.typePermission.write] || ctx_r1.context.imported));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.canShare && !ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.context.permission === ctx_r1.typePermission[ctx_r1.typePermission.write] && !ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.context.hidden && !ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.context.hidden && !ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.context.permission === ctx_r1.typePermission[ctx_r1.typePermission.write] || ctx_r1.context.imported);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", ctx_r1.color)("target", _r7)("collapsed", ctx_r1.collapsed);
} }
const _c0 = function (a0) { return { "mat-list-item-light": a0 }; };
export class ContextItemComponent {
    constructor(auth, storageService) {
        this.auth = auth;
        this.storageService = storageService;
        this.typePermission = TypePermission;
        this.color = 'primary';
        this.collapsed = true;
        this._default = false;
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.save = new EventEmitter();
        this.clone = new EventEmitter();
        this.hide = new EventEmitter();
        this.show = new EventEmitter();
        this.favorite = new EventEmitter();
        this.managePermissions = new EventEmitter();
        this.manageTools = new EventEmitter();
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    get default() {
        return this._default;
    }
    set default(value) {
        this._default = value;
    }
    get hidden() {
        return this.context.hidden;
    }
    get canShare() {
        return this.storageService.get('canShare') === true;
    }
    favoriteClick(context) {
        if (this.auth.authenticated) {
            this.favorite.emit(context);
        }
    }
}
ContextItemComponent.ɵfac = function ContextItemComponent_Factory(t) { return new (t || ContextItemComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.StorageService)); };
ContextItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextItemComponent, selectors: [["igo-context-item"]], inputs: { context: "context", default: "default", selected: "selected" }, outputs: { edit: "edit", delete: "delete", save: "save", clone: "clone", hide: "hide", show: "show", favorite: "favorite", managePermissions: "managePermissions", manageTools: "manageTools" }, decls: 5, vars: 6, consts: [[1, "mat-list-item", 3, "ngClass"], ["mat-list-avatar", "", "mat-icon-button", "", "igoStopPropagation", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["matLine", ""], ["igoStopPropagation", "", "class", "igo-actions-container", 4, "ngIf"], ["mat-list-avatar", "", "mat-icon-button", "", "igoStopPropagation", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], [3, "svgIcon", 4, "ngIf"], [3, "src", 4, "ngIf"], [3, "svgIcon"], [3, "src"], ["igoStopPropagation", "", 1, "igo-actions-container"], ["class", "save-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], [1, "igo-actions-expand-container"], ["actions", ""], ["mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["class", "clone-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["class", "edit-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click", 4, "ngIf"], ["class", "hide-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click", 4, "ngIf"], ["class", "delete-button", "mat-icon-button", "", "color", "warn", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "igoCollapse", "", 1, "actions-button", 3, "color", "target", "collapsed", "click"], ["svgIcon", "dots-horizontal"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "save-button", 3, "matTooltip", "color", "click"], ["svgIcon", "content-save"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], ["svgIcon", "account-arrow-right"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "clone-button", 3, "matTooltip", "color", "click"], ["svgIcon", "content-copy"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "edit-button", 3, "color", "matTooltip", "click"], ["svgIcon", "pencil"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "hide-button", 3, "color", "matTooltip", "click"], ["svgIcon", "eye"], ["svgIcon", "eye-off"], ["mat-icon-button", "", "color", "warn", "matTooltipShowDelay", "500", 1, "delete-button", 3, "matTooltip", "click"], ["svgIcon", "delete"]], template: function ContextItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list-item", 0);
        i0.ɵɵtemplate(1, ContextItemComponent_button_1_Template, 4, 6, "button", 1);
        i0.ɵɵelementStart(2, "h4", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, ContextItemComponent_div_4_Template, 12, 10, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx.hidden));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.context.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated);
    } }, directives: [i3.MatListItem, i4.NgClass, i4.NgIf, i5.MatLine, i6.MatButton, i3.MatListAvatarCssMatStyler, i7.StopPropagationDirective, i8.MatTooltip, i9.MatIcon, i7.CollapseDirective], pipes: [i10.TranslatePipe], styles: ["[_nghost-%COMP%]{overflow:hidden}.igo-actions-container[_ngcontent-%COMP%]{flex-shrink:0}.igo-actions-expand-container[_ngcontent-%COMP%]{display:inline-flex}mat-list-item[_ngcontent-%COMP%]     .mat-list-item-content .mat-list-text{padding:0}mat-icon.disabled[_ngcontent-%COMP%]{color:#00000061}mat-list-item.mat-list-item-light[_ngcontent-%COMP%]     .mat-list-item-content{color:#969696}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-item',
                templateUrl: './context-item.component.html',
                styleUrls: ['./context-item.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.StorageService }]; }, { context: [{
            type: Input
        }], default: [{
            type: Input
        }], selected: [{
            type: Input
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], save: [{
            type: Output
        }], clone: [{
            type: Output
        }], hide: [{
            type: Output
        }], show: [{
            type: Output
        }], favorite: [{
            type: Output
        }], managePermissions: [{
            type: Output
        }], manageTools: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LW1hbmFnZXIvY29udGV4dC1pdGVtL2NvbnRleHQtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYW5hZ2VyL2NvbnRleHQtaXRlbS9jb250ZXh0LWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0lDQ3BELDhCQUEwSTs7O0lBQXJHLHFJQUF5Rjs7O0lBQzlILHlCQUF5RDs7O0lBQTFCLGdFQUF5Qjs7OztJQVQxRCxpQ0FPbUM7SUFBakMsNE1BQWdDOztJQUNoQyx3RkFBMEk7SUFDMUksOEVBQXlEO0lBQzNELGlCQUFTOzs7SUFOUCx5SEFBNEYsaURBQUE7SUFJakYsZUFBd0I7SUFBeEIsZ0RBQXdCO0lBQzdCLGVBQXVCO0lBQXZCLCtDQUF1Qjs7OztJQVE1QixrQ0FNK0I7SUFBN0IsNktBQVMsa0NBQWtCLElBQUM7O0lBQzVCLCtCQUE0QztJQUM5QyxpQkFBUzs7O0lBTFAsb0ZBQTRELHVCQUFBOzs7O0lBUzdELGtDQUs0QztJQUExQyw2S0FBUywrQ0FBK0IsSUFBQzs7SUFDekMsK0JBQW1EO0lBQ3JELGlCQUFTOzs7SUFMUCxpR0FBeUUsdUJBQUE7Ozs7SUFlM0Usa0NBTWdDO0lBQTlCLDZLQUFTLG1DQUFtQixJQUFDOztJQUM3QiwrQkFBNEM7SUFDOUMsaUJBQVM7OztJQUxQLHFGQUE2RCx1QkFBQTs7OztJQU8v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QUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzt3RkFwRFUsb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNuQmpDLHdDQUU4QztRQUM1QywyRUFVUztRQUNULDZCQUFZO1FBQUEsWUFBaUI7UUFBQSxpQkFBSztRQUVsQyx1RUErRk07UUFFUixpQkFBZ0I7O1FBL0dkLGdFQUEyQztRQUV4QyxlQUF3QjtRQUF4Qiw2Q0FBd0I7UUFVZixlQUFpQjtRQUFqQix1Q0FBaUI7UUFFdkIsZUFBd0I7UUFBeEIsNkNBQXdCOzt1RkRHbkIsb0JBQW9CO2NBTmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7MkZBT0ssT0FBTztrQkFEVixLQUFLO1lBVUYsT0FBTztrQkFEVixLQUFLO1lBU0csUUFBUTtrQkFBaEIsS0FBSztZQUVJLElBQUk7a0JBQWIsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLEtBQUs7a0JBQWQsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxpQkFBaUI7a0JBQTFCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAaWdvMi9hdXRoJztcbmltcG9ydCB7IFR5cGVQZXJtaXNzaW9uIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnRleHQuZW51bSc7XG5pbXBvcnQgeyBEZXRhaWxlZENvbnRleHQgfSBmcm9tICcuLi9zaGFyZWQvY29udGV4dC5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tY29udGV4dC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRleHQtaXRlbS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0SXRlbUNvbXBvbmVudCB7XG4gIHB1YmxpYyB0eXBlUGVybWlzc2lvbiA9IFR5cGVQZXJtaXNzaW9uO1xuICBwdWJsaWMgY29sb3IgPSAncHJpbWFyeSc7XG4gIHB1YmxpYyBjb2xsYXBzZWQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb250ZXh0KCk6IERldGFpbGVkQ29udGV4dCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gIH1cbiAgc2V0IGNvbnRleHQodmFsdWU6IERldGFpbGVkQ29udGV4dCkge1xuICAgIHRoaXMuX2NvbnRleHQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9jb250ZXh0OiBEZXRhaWxlZENvbnRleHQ7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRlZmF1bHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHQ7XG4gIH1cbiAgc2V0IGRlZmF1bHQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWZhdWx0ID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfZGVmYXVsdCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBlZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxEZXRhaWxlZENvbnRleHQ+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPERldGFpbGVkQ29udGV4dD4oKTtcbiAgQE91dHB1dCgpIHNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERldGFpbGVkQ29udGV4dD4oKTtcbiAgQE91dHB1dCgpIGNsb25lID0gbmV3IEV2ZW50RW1pdHRlcjxEZXRhaWxlZENvbnRleHQ+KCk7XG4gIEBPdXRwdXQoKSBoaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxEZXRhaWxlZENvbnRleHQ+KCk7XG4gIEBPdXRwdXQoKSBzaG93ID0gbmV3IEV2ZW50RW1pdHRlcjxEZXRhaWxlZENvbnRleHQ+KCk7XG4gIEBPdXRwdXQoKSBmYXZvcml0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGV0YWlsZWRDb250ZXh0PigpO1xuICBAT3V0cHV0KCkgbWFuYWdlUGVybWlzc2lvbnMgPSBuZXcgRXZlbnRFbWl0dGVyPERldGFpbGVkQ29udGV4dD4oKTtcbiAgQE91dHB1dCgpIG1hbmFnZVRvb2xzID0gbmV3IEV2ZW50RW1pdHRlcjxEZXRhaWxlZENvbnRleHQ+KCk7XG5cbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmhpZGRlbjtcbiAgfVxuXG4gIGdldCBjYW5TaGFyZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ2NhblNoYXJlJykgPT09IHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIGZhdm9yaXRlQ2xpY2soY29udGV4dCkge1xuICAgIGlmICh0aGlzLmF1dGguYXV0aGVudGljYXRlZCkge1xuICAgICAgdGhpcy5mYXZvcml0ZS5lbWl0KGNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuIiwiPG1hdC1saXN0LWl0ZW1cbiAgY2xhc3M9XCJtYXQtbGlzdC1pdGVtXCJcbiAgW25nQ2xhc3NdPVwieydtYXQtbGlzdC1pdGVtLWxpZ2h0JzogaGlkZGVufVwiPlxuICA8YnV0dG9uIG1hdC1saXN0LWF2YXRhclxuICAgICpuZ0lmPVwiYXV0aC5hdXRoZW50aWNhdGVkXCJcbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICBpZ29TdG9wUHJvcGFnYXRpb25cbiAgICBbbWF0VG9vbHRpcF09XCJhdXRoLmF1dGhlbnRpY2F0ZWQgPyAoJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmZhdm9yaXRlJyB8IHRyYW5zbGF0ZSkgOiAnJ1wiXG4gICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgW2NvbG9yXT1cImRlZmF1bHQgPyAncHJpbWFyeScgOiAnZGVmYXVsdCdcIlxuICAgIChjbGljayk9XCJmYXZvcml0ZUNsaWNrKGNvbnRleHQpXCI+XG4gICAgPG1hdC1pY29uICpuZ0lmPVwiIWNvbnRleHQuaWNvbkltYWdlXCIgc3ZnSWNvbj1cInt7Y29udGV4dC5pY29uID8gY29udGV4dC5pY29uIDogY29udGV4dC5zY29wZSA9PT0gJ3B1YmxpYycgPyAnZWFydGgnIDogJ3N0YXInfX1cIj48L21hdC1pY29uPlxuICAgIDxpbWcgKm5nSWY9XCJjb250ZXh0Lmljb25JbWFnZVwiIFtzcmNdPVwiY29udGV4dC5pY29uSW1hZ2VcIj5cbiAgPC9idXR0b24+XG4gIDxoNCBtYXRMaW5lPnt7Y29udGV4dC50aXRsZX19PC9oND5cblxuICA8ZGl2ICpuZ0lmPVwiYXV0aC5hdXRoZW50aWNhdGVkXCJcbiAgICAgICBpZ29TdG9wUHJvcGFnYXRpb25cbiAgICAgICBjbGFzcz1cImlnby1hY3Rpb25zLWNvbnRhaW5lclwiPlxuXG4gICAgIDxidXR0b24gKm5nSWY9XCJjb2xsYXBzZWQgJiYgc2VsZWN0ZWQgJiYgKGNvbnRleHQucGVybWlzc2lvbiA9PT0gdHlwZVBlcm1pc3Npb25bdHlwZVBlcm1pc3Npb24ud3JpdGVdIHx8IGNvbnRleHQuaW1wb3J0ZWQpXCJcbiAgICAgICBjbGFzcz1cInNhdmUtYnV0dG9uXCJcbiAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuc2F2ZScgfCB0cmFuc2xhdGVcIlxuICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAgKGNsaWNrKT1cInNhdmUuZW1pdChjb250ZXh0KVwiPlxuICAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiY29udGVudC1zYXZlXCI+PC9tYXQtaWNvbj5cbiAgICAgPC9idXR0b24+XG5cbiAgICA8ZGl2ICNhY3Rpb25zIGNsYXNzPVwiaWdvLWFjdGlvbnMtZXhwYW5kLWNvbnRhaW5lclwiPlxuXG4gICAgICA8YnV0dG9uICpuZ0lmPVwiY2FuU2hhcmUgJiYgIWNvbnRleHQuaW1wb3J0ZWRcIlxuICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLm1hbmFnZVBlcm1pc3Npb25zJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAoY2xpY2spPVwibWFuYWdlUGVybWlzc2lvbnMuZW1pdChjb250ZXh0KVwiPlxuICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImFjY291bnQtYXJyb3ctcmlnaHRcIj48L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwhLS1idXR0b25cbiAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5tYW5hZ2VUb29scycgfCB0cmFuc2xhdGVcIlxuICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAoY2xpY2spPVwibWFuYWdlVG9vbHMuZW1pdChjb250ZXh0KVwiPlxuICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cIndpZGdldHNcIj48L21hdC1pY29uPlxuICAgICAgPC9idXR0b24tLT5cblxuICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFjb250ZXh0LmltcG9ydGVkXCJcbiAgICAgICAgY2xhc3M9XCJjbG9uZS1idXR0b25cIlxuICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmNsb25lJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAoY2xpY2spPVwiY2xvbmUuZW1pdChjb250ZXh0KVwiPlxuICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImNvbnRlbnQtY29weVwiPjwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiAqbmdJZj1cImNvbnRleHQucGVybWlzc2lvbiA9PT0gdHlwZVBlcm1pc3Npb25bdHlwZVBlcm1pc3Npb24ud3JpdGVdICYmICFjb250ZXh0LmltcG9ydGVkXCJcbiAgICAgICAgY2xhc3M9XCJlZGl0LWJ1dHRvblwiXG4gICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZWRpdCcgfCB0cmFuc2xhdGVcIlxuICAgICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgKGNsaWNrKT1cImVkaXQuZW1pdChjb250ZXh0KVwiPlxuICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cInBlbmNpbFwiPjwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFjb250ZXh0LmhpZGRlbiAmJiAhY29udGV4dC5pbXBvcnRlZFwiXG4gICAgICAgIGNsYXNzPVwiaGlkZS1idXR0b25cIlxuICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmhpZGUnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgIChjbGljayk9XCJoaWRlLmVtaXQoY29udGV4dClcIj5cbiAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJleWVcIj48L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJjb250ZXh0LmhpZGRlbiAmJiAhY29udGV4dC5pbXBvcnRlZFwiXG4gICAgICAgIGNsYXNzPVwiaGlkZS1idXR0b25cIlxuICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLnNob3cnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gICAgICAgIChjbGljayk9XCJzaG93LmVtaXQoY29udGV4dClcIj5cbiAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJleWUtb2ZmXCI+PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uICpuZ0lmPVwiY29udGV4dC5wZXJtaXNzaW9uID09PSB0eXBlUGVybWlzc2lvblt0eXBlUGVybWlzc2lvbi53cml0ZV0gfHwgY29udGV4dC5pbXBvcnRlZFwiXG4gICAgICAgIGNsYXNzPVwiZGVsZXRlLWJ1dHRvblwiXG4gICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICBjb2xvcj1cIndhcm5cIlxuICAgICAgICBbbWF0VG9vbHRpcF09XCInaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZGVsZXRlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgICAoY2xpY2spPVwiZGVsZXRlLmVtaXQoY29udGV4dClcIj5cbiAgICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJkZWxldGVcIj48L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImFjdGlvbnMtYnV0dG9uXCJcbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgaWdvQ29sbGFwc2VcbiAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICBbdGFyZ2V0XT1cImFjdGlvbnNcIlxuICAgICAgW2NvbGxhcHNlZF09Y29sbGFwc2VkXG4gICAgICAoY2xpY2spPVwiY29sbGFwc2VkID0gIWNvbGxhcHNlZFwiPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJkb3RzLWhvcml6b250YWxcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gIDwvZGl2PlxuXG48L21hdC1saXN0LWl0ZW0+XG4iXX0=