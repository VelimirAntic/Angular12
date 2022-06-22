import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ContextListControlsEnum } from './context-list.enum';
import { BehaviorSubject, ReplaySubject, EMPTY, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { BookmarkDialogComponent } from '../../context-map-button/bookmark-button/bookmark-dialog.component';
import { debounce } from 'rxjs/operators';
import { ActionStore, ActionbarMode } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "../shared/context.service";
import * as i2 from "@igo2/core";
import * as i3 from "@igo2/auth";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@igo2/common";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/menu";
import * as i8 from "@angular/material/checkbox";
import * as i9 from "@angular/material/form-field";
import * as i10 from "@angular/material/input";
import * as i11 from "@angular/forms";
import * as i12 from "@angular/material/button";
import * as i13 from "@angular/material/icon";
import * as i14 from "@angular/material/tooltip";
import * as i15 from "../context-item/context-item.component";
import * as i16 from "@ngx-translate/core";
function ContextListComponent_mat_form_field_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function ContextListComponent_mat_form_field_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.clearFilter(); });
    i0.ɵɵelement(1, "mat-icon", 15);
    i0.ɵɵelementEnd();
} }
function ContextListComponent_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 11);
    i0.ɵɵelementStart(1, "input", 12);
    i0.ɵɵlistener("ngModelChange", function ContextListComponent_mat_form_field_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.term = $event; });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ContextListComponent_mat_form_field_1_button_3_Template, 2, 0, "button", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.auth.authenticated && ctx_r0.configService.getConfig("context") ? "context-filter-min-width" : "context-filter-max-width");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 4, "igo.context.contextManager.filterPlaceHolder"))("ngModel", ctx_r0.term);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.term.length);
} }
function ContextListComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function ContextListComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.toggleSort(true); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.contextManager.sortAlphabetically"));
} }
function ContextListComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function ContextListComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.toggleSort(false); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.context.contextManager.sortContextOrder"));
} }
function ContextListComponent_igo_actionbar_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-actionbar", 19);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("iconColor", ctx_r3.color)("store", ctx_r3.actionStore)("withIcon", true)("withTitle", ctx_r3.actionbarMode === "overlay")("horizontal", false)("mode", ctx_r3.actionbarMode);
} }
function ContextListComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(7);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.filterUser"))("matMenuTriggerFor", _r5);
} }
function ContextListComponent_ng_container_8_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r17 = i0.ɵɵnextContext().$implicit;
    const _r20 = i0.ɵɵreference(6);
    i0.ɵɵproperty("matMenuTriggerFor", _r20);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", user_r17.title, " ");
} }
function ContextListComponent_ng_container_8_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", user_r17.title, " ");
} }
function ContextListComponent_ng_container_8_mat_checkbox_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 8);
    i0.ɵɵlistener("click", function ContextListComponent_ng_container_8_mat_checkbox_7_Template_mat_checkbox_click_0_listener($event) { return $event.stopPropagation(); })("change", function ContextListComponent_ng_container_8_mat_checkbox_7_Template_mat_checkbox_change_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r27); const child_r24 = restoredCtx.$implicit; const user_r17 = i0.ɵɵnextContext().$implicit; const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.userSelection(child_r24, user_r17); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r24 = ctx.$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", ctx_r21.getPermission(child_r24).checked);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", child_r24.title, " ");
} }
function ContextListComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵelementStart(2, "mat-checkbox", 22);
    i0.ɵɵlistener("click", function ContextListComponent_ng_container_8_Template_mat_checkbox_click_2_listener($event) { return $event.stopPropagation(); })("change", function ContextListComponent_ng_container_8_Template_mat_checkbox_change_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r31); const user_r17 = restoredCtx.$implicit; const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.userSelection(user_r17); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ContextListComponent_ng_container_8_button_3_Template, 2, 2, "button", 23);
    i0.ɵɵtemplate(4, ContextListComponent_ng_container_8_button_4_Template, 2, 1, "button", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-menu", null, 25);
    i0.ɵɵtemplate(7, ContextListComponent_ng_container_8_mat_checkbox_7_Template, 2, 2, "mat-checkbox", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const user_r17 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r6.getPermission(user_r17).checked)("indeterminate", ctx_r6.getPermission(user_r17).indeterminate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", user_r17.childs);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !user_r17.childs);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", user_r17.childs);
} }
function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-context-item", 31);
    i0.ɵɵlistener("edit", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_edit_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.edit.emit(context_r36); })("delete", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_delete_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r39 = i0.ɵɵnextContext(3); return ctx_r39.delete.emit(context_r36); })("clone", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_clone_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.clone.emit(context_r36); })("save", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_save_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r41 = i0.ɵɵnextContext(3); return ctx_r41.save.emit(context_r36); })("hide", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_hide_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r42 = i0.ɵɵnextContext(3); return ctx_r42.hideContext(context_r36); })("show", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_show_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r43 = i0.ɵɵnextContext(3); return ctx_r43.showContext(context_r36); })("favorite", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_favorite_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r44 = i0.ɵɵnextContext(3); return ctx_r44.favorite.emit(context_r36); })("manageTools", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_manageTools_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r45 = i0.ɵɵnextContext(3); return ctx_r45.manageTools.emit(context_r36); })("managePermissions", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_managePermissions_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r46 = i0.ɵɵnextContext(3); return ctx_r46.managePermissions.emit(context_r36); })("select", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_select_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r47 = i0.ɵɵnextContext(3); return ctx_r47.select.emit(context_r36); })("unselect", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_unselect_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const context_r36 = restoredCtx.$implicit; const ctx_r48 = i0.ɵɵnextContext(3); return ctx_r48.unselect.emit(context_r36); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r36 = ctx.$implicit;
    const ctx_r35 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("selected", ctx_r35.selectedContext && ctx_r35.selectedContext.uri === context_r36.uri)("context", context_r36)("default", context_r36.id && ctx_r35.defaultContextId && ctx_r35.defaultContextId === context_r36.id);
} }
function ContextListComponent_ng_template_14_igo_collapsible_0_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-collapsible", 30);
    i0.ɵɵlistener("toggle", function ContextListComponent_ng_template_14_igo_collapsible_0_Template_igo_collapsible_toggle_0_listener($event) { i0.ɵɵrestoreView(_r50); const groupContexts_r32 = i0.ɵɵnextContext().$implicit; const ctx_r49 = i0.ɵɵnextContext(); return (ctx_r49.collapsed[ctx_r49.titleMapping[groupContexts_r32.key]] = $event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtemplate(2, ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template, 1, 3, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupContexts_r32 = i0.ɵɵnextContext().$implicit;
    const ctx_r33 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, ctx_r33.titleMapping[groupContexts_r32.key]))("collapsed", ctx_r33.collapsed[ctx_r33.titleMapping[groupContexts_r32.key]]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", groupContexts_r32.value);
} }
function ContextListComponent_ng_template_14_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-context-item", 32);
    i0.ɵɵlistener("select", function ContextListComponent_ng_template_14_1_ng_template_0_Template_igo_context_item_select_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r56); const context_r54 = restoredCtx.$implicit; const ctx_r55 = i0.ɵɵnextContext(3); return ctx_r55.select.emit(context_r54); })("unselect", function ContextListComponent_ng_template_14_1_ng_template_0_Template_igo_context_item_unselect_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r56); const context_r54 = restoredCtx.$implicit; const ctx_r57 = i0.ɵɵnextContext(3); return ctx_r57.unselect.emit(context_r54); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r54 = ctx.$implicit;
    const ctx_r53 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("selected", ctx_r53.selectedContext && ctx_r53.selectedContext.uri === context_r54.uri)("context", context_r54)("default", ctx_r53.defaultContextId === context_r54.id);
} }
function ContextListComponent_ng_template_14_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContextListComponent_ng_template_14_1_ng_template_0_Template, 1, 3, "ng-template", 10);
} if (rf & 2) {
    const groupContexts_r32 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngForOf", groupContexts_r32.value);
} }
function ContextListComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContextListComponent_ng_template_14_igo_collapsible_0_Template, 3, 5, "igo-collapsible", 28);
    i0.ɵɵtemplate(1, ContextListComponent_ng_template_14_1_Template, 1, 1, undefined, 29);
} if (rf & 2) {
    const groupContexts_r32 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", groupContexts_r32.value.length && ctx_r7.auth.authenticated);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", groupContexts_r32.value.length && !ctx_r7.auth.authenticated);
} }
export class ContextListComponent {
    constructor(cdRef, contextService, configService, auth, dialog, languageService, storageService) {
        this.cdRef = cdRef;
        this.contextService = contextService;
        this.configService = configService;
        this.auth = auth;
        this.dialog = dialog;
        this.languageService = languageService;
        this.storageService = storageService;
        this.contextsInitial = { ours: [] };
        this.contexts$ = new BehaviorSubject(this.contextsInitial);
        this.change$ = new ReplaySubject(1);
        this._contexts = { ours: [] };
        this.collapsed = [];
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.save = new EventEmitter();
        this.clone = new EventEmitter();
        this.create = new EventEmitter();
        this.hide = new EventEmitter();
        this.show = new EventEmitter();
        this.showHiddenContexts = new EventEmitter();
        this.favorite = new EventEmitter();
        this.managePermissions = new EventEmitter();
        this.manageTools = new EventEmitter();
        this.filterPermissionsChanged = new EventEmitter();
        this.titleMapping = {
            ours: 'igo.context.contextManager.ourContexts',
            shared: 'igo.context.contextManager.sharedContexts',
            public: 'igo.context.contextManager.publicContexts'
        };
        this.permissions = [];
        this.actionStore = new ActionStore([]);
        this.actionbarMode = ActionbarMode.Overlay;
        this.color = 'primary';
        this.showHidden = false;
        this._term = '';
        this._sortedAlpha = undefined;
        this.showContextFilter = ContextListControlsEnum.always;
        this.thresholdToFilter = 5;
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
        this.cdRef.detectChanges();
        this.next();
    }
    get selectedContext() {
        return this._selectedContext;
    }
    set selectedContext(value) {
        this._selectedContext = value;
        this.cdRef.detectChanges();
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get defaultContextId() {
        return this._defaultContextId;
    }
    set defaultContextId(value) {
        this._defaultContextId = value;
    }
    /**
     * Context filter term
     */
    set term(value) {
        this._term = value;
        this.next();
    }
    get term() {
        return this._term;
    }
    get sortedAlpha() {
        return this._sortedAlpha;
    }
    set sortedAlpha(value) {
        this._sortedAlpha = value;
        this.next();
    }
    ngOnInit() {
        this.change$$ = this.change$
            .pipe(debounce(() => {
            return this.contexts.ours.length === 0 ? EMPTY : timer(50);
        }))
            .subscribe(() => {
            this.contexts$.next(this.filterContextsList(this.contexts));
        });
        this.actionStore.load([
            {
                id: 'emptyContext',
                title: this.languageService.translate.instant('igo.context.contextManager.emptyContext'),
                icon: 'map-outline',
                tooltip: this.languageService.translate.instant('igo.context.contextManager.emptyContextTooltip'),
                handler: () => {
                    this.createContext(true);
                }
            },
            {
                id: 'contextFromMap',
                title: this.languageService.translate.instant('igo.context.contextManager.contextMap'),
                icon: 'map-check',
                tooltip: this.languageService.translate.instant('igo.context.contextManager.contextMapTooltip'),
                handler: () => {
                    this.createContext(false);
                }
            }
        ]);
    }
    next() {
        this.change$.next();
    }
    filterContextsList(contexts) {
        if (this.term === '') {
            if (this.sortedAlpha) {
                contexts = this.sortContextsList(contexts);
            }
            return contexts;
        }
        else {
            const ours = contexts.ours.filter((context) => {
                const filterNormalized = this.term
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');
                const contextTitleNormalized = context.title
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');
                return contextTitleNormalized.includes(filterNormalized);
            });
            let updateContexts = {
                ours
            };
            if (this.contexts.public) {
                const publics = contexts.public.filter((context) => {
                    const filterNormalized = this.term
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    const contextTitleNormalized = context.title
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    return contextTitleNormalized.includes(filterNormalized);
                });
                updateContexts.public = publics;
            }
            if (this.contexts.shared) {
                const shared = contexts.shared.filter((context) => {
                    const filterNormalized = this.term
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    const contextTitleNormalized = context.title
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    return contextTitleNormalized.includes(filterNormalized);
                });
                updateContexts.shared = shared;
            }
            if (this.sortedAlpha) {
                updateContexts = this.sortContextsList(updateContexts);
            }
            return updateContexts;
        }
    }
    ngOnDestroy() {
        this.change$$.unsubscribe();
    }
    showFilter() {
        switch (this.showContextFilter) {
            case ContextListControlsEnum.always:
                return true;
            case ContextListControlsEnum.never:
                return false;
            default:
                let totalLength = this.contexts.ours.length;
                this.contexts.public
                    ? (totalLength += this.contexts.public.length)
                    : (totalLength += 0);
                this.contexts.shared
                    ? (totalLength += this.contexts.shared.length)
                    : (totalLength += 0);
                if (totalLength >= this.thresholdToFilter) {
                    return true;
                }
                return false;
        }
    }
    sortContextsList(contexts) {
        if (contexts) {
            const contextsList = JSON.parse(JSON.stringify(contexts));
            contextsList.ours.sort((a, b) => {
                if (this.normalize(a.title) < this.normalize(b.title)) {
                    return -1;
                }
                if (this.normalize(a.title) > this.normalize(b.title)) {
                    return 1;
                }
                return 0;
            });
            if (contextsList.shared) {
                contextsList.shared.sort((a, b) => {
                    if (this.normalize(a.title) < this.normalize(b.title)) {
                        return -1;
                    }
                    if (this.normalize(a.title) > this.normalize(b.title)) {
                        return 1;
                    }
                    return 0;
                });
            }
            else if (contextsList.public) {
                contextsList.public.sort((a, b) => {
                    if (this.normalize(a.title) < this.normalize(b.title)) {
                        return -1;
                    }
                    if (this.normalize(a.title) > this.normalize(b.title)) {
                        return 1;
                    }
                    return 0;
                });
            }
            return contextsList;
        }
    }
    normalize(str) {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
    toggleSort(sortAlpha) {
        this.sortedAlpha = sortAlpha;
    }
    clearFilter() {
        this.term = '';
    }
    createContext(empty) {
        this.dialog
            .open(BookmarkDialogComponent, { disableClose: false })
            .afterClosed()
            .pipe(take(1))
            .subscribe((title) => {
            if (title) {
                this.create.emit({ title, empty });
            }
        });
    }
    getPermission(user) {
        if (user) {
            const permission = this.permissions.find((p) => p.name === user.name);
            return permission;
        }
    }
    userSelection(user, parent) {
        const permission = this.getPermission(user);
        if (permission) {
            permission.checked = !permission.checked;
            this.storageService.set('contexts.permissions.' + permission.name, permission.checked);
            permission.indeterminate = false;
        }
        if (parent) {
            let indeterminate = false;
            for (const c of parent.childs) {
                const cPermission = this.getPermission(c);
                if (cPermission.checked !== permission.checked) {
                    indeterminate = true;
                    break;
                }
            }
            const parentPermission = this.getPermission(parent);
            if (parentPermission) {
                parentPermission.checked = permission.checked;
                this.storageService.set('contexts.permissions.' + parentPermission.name, permission.checked);
                parentPermission.indeterminate = indeterminate;
            }
        }
        if (user.childs) {
            for (const c of user.childs) {
                const childrenPermission = this.getPermission(c);
                if (childrenPermission &&
                    childrenPermission.checked !== permission.checked) {
                    childrenPermission.checked = permission.checked;
                    this.storageService.set('contexts.permissions.' + childrenPermission.name, permission.checked);
                }
            }
        }
        this.filterPermissionsChanged.emit(this.permissions);
    }
    hideContext(context) {
        context.hidden = true;
        if (!this.showHidden) {
            const contexts = { ours: [], shared: [], public: [] };
            contexts.ours = this.contexts.ours.filter((c) => c.id !== context.id);
            contexts.shared = this.contexts.shared.filter((c) => c.id !== context.id);
            contexts.public = this.contexts.public.filter((c) => c.id !== context.id);
            this.contexts = contexts;
        }
        this.hide.emit(context);
    }
    showContext(context) {
        context.hidden = false;
        this.show.emit(context);
    }
}
ContextListComponent.ɵfac = function ContextListComponent_Factory(t) { return new (t || ContextListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.ContextService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.MatDialog), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i2.StorageService)); };
ContextListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextListComponent, selectors: [["igo-context-list"]], inputs: { contexts: "contexts", selectedContext: "selectedContext", map: "map", defaultContextId: "defaultContextId", term: "term" }, outputs: { select: "select", unselect: "unselect", edit: "edit", delete: "delete", save: "save", clone: "clone", create: "create", hide: "hide", show: "show", showHiddenContexts: "showHiddenContexts", favorite: "favorite", managePermissions: "managePermissions", manageTools: "manageTools", filterPermissionsChanged: "filterPermissionsChanged" }, decls: 17, vars: 16, consts: [[3, "navigation"], [3, "ngClass", 4, "ngIf"], ["class", "sort-alpha", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["class", "add-context-button", "icon", "plus", 3, "iconColor", "store", "withIcon", "withTitle", "horizontal", "mode", 4, "ngIf"], ["class", "users-filter", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "matMenuTriggerFor", 4, "ngIf"], ["accountMenu", "matMenu"], [4, "ngFor", "ngForOf"], [1, "profilsMenu"], [1, "mat-menu-item", 3, "checked", "click", "change"], ["mat-menu-item", ""], ["ngFor", "", 3, "ngForOf"], [3, "ngClass"], ["matInput", "", "type", "text", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "class", "clear-button", "aria-label", "Clear", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "aria-label", "Clear", "color", "warn", 1, "clear-button", 3, "click"], ["svgIcon", "close"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "sort-alpha", 3, "matTooltip", "click"], ["color", "primary", "svgIcon", "sort-alphabetical-variant"], ["color", "warn", "svgIcon", "sort-variant-remove"], ["icon", "plus", 1, "add-context-button", 3, "iconColor", "store", "withIcon", "withTitle", "horizontal", "mode"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "users-filter", 3, "matTooltip", "matMenuTriggerFor"], ["color", "primary", "svgIcon", "filter-menu"], [1, "mat-menu-item", 3, "checked", "indeterminate", "click", "change"], ["mat-menu-item", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", 4, "ngIf"], ["subAccountMenu", "matMenu"], ["class", "mat-menu-item", 3, "checked", "click", "change", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [3, "title", "collapsed", "toggle", 4, "ngIf"], [4, "ngIf"], [3, "title", "collapsed", "toggle"], ["igoListItem", "", "color", "accent", 3, "selected", "context", "default", "edit", "delete", "clone", "save", "hide", "show", "favorite", "manageTools", "managePermissions", "select", "unselect"], ["igoListItem", "", "color", "accent", 3, "selected", "context", "default", "select", "unselect"]], template: function ContextListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-list", 0);
        i0.ɵɵtemplate(1, ContextListComponent_mat_form_field_1_Template, 4, 6, "mat-form-field", 1);
        i0.ɵɵtemplate(2, ContextListComponent_button_2_Template, 3, 3, "button", 2);
        i0.ɵɵtemplate(3, ContextListComponent_button_3_Template, 3, 3, "button", 2);
        i0.ɵɵtemplate(4, ContextListComponent_igo_actionbar_4_Template, 1, 6, "igo-actionbar", 3);
        i0.ɵɵtemplate(5, ContextListComponent_button_5_Template, 3, 4, "button", 4);
        i0.ɵɵelementStart(6, "mat-menu", null, 5);
        i0.ɵɵtemplate(8, ContextListComponent_ng_container_8_Template, 8, 5, "ng-container", 6);
        i0.ɵɵelementStart(9, "span", 7);
        i0.ɵɵelementStart(10, "mat-checkbox", 8);
        i0.ɵɵlistener("click", function ContextListComponent_Template_mat_checkbox_click_10_listener($event) { return $event.stopPropagation(); })("change", function ContextListComponent_Template_mat_checkbox_change_10_listener() { return ctx.showHiddenContexts.emit(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 9);
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, ContextListComponent_ng_template_14_Template, 2, 2, "ng-template", 10);
        i0.ɵɵpipe(15, "keyvalue");
        i0.ɵɵpipe(16, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("navigation", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showFilter());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.sortedAlpha);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.sortedAlpha);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.configService.getConfig("context"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.configService.getConfig("context"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.users);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx.showHidden);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 10, "igo.context.contextManager.showHidden"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(15, 12, i0.ɵɵpipeBind1(16, 14, ctx.contexts$)));
    } }, directives: [i5.ListComponent, i6.NgIf, i7.MatMenu, i6.NgForOf, i8.MatCheckbox, i7.MatMenuItem, i9.MatFormField, i6.NgClass, i10.MatInput, i11.DefaultValueAccessor, i11.NgControlStatus, i11.NgModel, i12.MatButton, i9.MatSuffix, i13.MatIcon, i14.MatTooltip, i5.ActionbarComponent, i7.MatMenuTrigger, i5.CollapsibleComponent, i15.ContextItemComponent, i5.ListItemDirective], pipes: [i16.TranslatePipe, i5.KeyValuePipe, i6.AsyncPipe], styles: [".context-filter-max-width[_ngcontent-%COMP%]{width:calc(100% - 100px);margin:5px;padding-left:6px}.context-filter-min-width[_ngcontent-%COMP%]{width:calc(100% - 135px);margin:5px;padding-left:6px}.clear-button[_ngcontent-%COMP%]{padding-right:5px}mat-form-field[_ngcontent-%COMP%]{height:40px}.profilsMenu[_ngcontent-%COMP%]{display:flex}.profilsMenu[_ngcontent-%COMP%] > mat-checkbox[_ngcontent-%COMP%]{width:8px}.add-context-button[_ngcontent-%COMP%]{margin:0;width:40px;display:inline-flex;overflow:hidden}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextListComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-list',
                templateUrl: './context-list.component.html',
                styleUrls: ['./context-list.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.ContextService }, { type: i2.ConfigService }, { type: i3.AuthService }, { type: i4.MatDialog }, { type: i2.LanguageService }, { type: i2.StorageService }]; }, { contexts: [{
            type: Input
        }], selectedContext: [{
            type: Input
        }], map: [{
            type: Input
        }], defaultContextId: [{
            type: Input
        }], select: [{
            type: Output
        }], unselect: [{
            type: Output
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], save: [{
            type: Output
        }], clone: [{
            type: Output
        }], create: [{
            type: Output
        }], hide: [{
            type: Output
        }], show: [{
            type: Output
        }], showHiddenContexts: [{
            type: Output
        }], favorite: [{
            type: Output
        }], managePermissions: [{
            type: Output
        }], manageTools: [{
            type: Output
        }], filterPermissionsChanged: [{
            type: Output
        }], term: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LW1hbmFnZXIvY29udGV4dC1saXN0L2NvbnRleHQtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYW5hZ2VyL2NvbnRleHQtbGlzdC9jb250ZXh0LWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWix1QkFBdUIsRUFFeEIsTUFBTSxlQUFlLENBQUM7QUFZdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUVMLGVBQWUsRUFDZixhQUFhLEVBQ2IsS0FBSyxFQUNMLEtBQUssRUFDTixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDM0J0RCxrQ0FRMEI7SUFBeEIsK01BQXVCO0lBQ3ZCLCtCQUFxQztJQUN2QyxpQkFBUzs7OztJQWhCWCwwQ0FBb0s7SUFDbEssaUNBSXFCO0lBQW5CLDROQUFrQjs7SUFKcEIsaUJBSXFCO0lBQ3JCLDZGQVVTO0lBQ1gsaUJBQWlCOzs7SUFqQm9CLDBKQUE4SDtJQUkvSixlQUEwRTtJQUExRSxrR0FBMEUsd0JBQUE7SUFPekUsZUFBaUI7SUFBakIseUNB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ZUFBa0I7UUFBbEIsdUNBQWtCO1FBU2hCLGVBQWlCO1FBQWpCLHNDQUFpQjtRQVNKLGVBQThEO1FBQTlELHVGQUE4RDtRQVdyRSxlQUE4RDtRQUE5RCx1RkFBOEQ7UUFVdEMsZUFBUTtRQUFSLG1DQUFRO1FBbUNuQyxlQUFzQjtRQUF0Qix3Q0FBc0I7UUFLdEIsZUFDRjtRQURFLGdHQUNGO1FBSWlDLGVBQXdDO1FBQXhDLHVGQUF3Qzs7dUZEOURsRSxvQkFBb0I7Y0FOaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDswT0FZSyxRQUFRO2tCQURYLEtBQUs7WUFZRixlQUFlO2tCQURsQixLQUFLO1lBV0YsR0FBRztrQkFETixLQUFLO1lBVUYsZ0JBQWdCO2tCQURuQixLQUFLO1lBV0ksTUFBTTtrQkFBZixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLEtBQUs7a0JBQWQsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLGtCQUFrQjtrQkFBM0IsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxpQkFBaUI7a0JBQTFCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csd0JBQXdCO2tCQUFqQyxNQUFNO1lBd0JILElBQUk7a0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBJZ29NYXAgfSBmcm9tICdAaWdvMi9nZW8nO1xuXG5pbXBvcnQge1xuICBEZXRhaWxlZENvbnRleHQsXG4gIENvbnRleHRzTGlzdCxcbiAgQ29udGV4dFVzZXJQZXJtaXNzaW9uLFxuICBDb250ZXh0UHJvZmlsc1xufSBmcm9tICcuLi9zaGFyZWQvY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udGV4dExpc3RDb250cm9sc0VudW0gfSBmcm9tICcuL2NvbnRleHQtbGlzdC5lbnVtJztcbmltcG9ydCB7XG4gIFN1YnNjcmlwdGlvbixcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBSZXBsYXlTdWJqZWN0LFxuICBFTVBUWSxcbiAgdGltZXJcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQm9va21hcmtEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb250ZXh0LW1hcC1idXR0b24vYm9va21hcmstYnV0dG9uL2Jvb2ttYXJrLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBY3Rpb25TdG9yZSwgQWN0aW9uYmFyTW9kZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBDb250ZXh0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jb250ZXh0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tY29udGV4dC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRleHQtbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb250ZXh0c0luaXRpYWw6IENvbnRleHRzTGlzdCA9IHsgb3VyczogW10gfTtcbiAgY29udGV4dHMkOiBCZWhhdmlvclN1YmplY3Q8Q29udGV4dHNMaXN0PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoXG4gICAgdGhpcy5jb250ZXh0c0luaXRpYWxcbiAgKTtcblxuICBjaGFuZ2UkID0gbmV3IFJlcGxheVN1YmplY3Q8dm9pZD4oMSk7XG5cbiAgcHJpdmF0ZSBjaGFuZ2UkJDogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb250ZXh0cygpOiBDb250ZXh0c0xpc3Qge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0cztcbiAgfVxuICBzZXQgY29udGV4dHModmFsdWU6IENvbnRleHRzTGlzdCkge1xuICAgIHRoaXMuX2NvbnRleHRzID0gdmFsdWU7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfY29udGV4dHM6IENvbnRleHRzTGlzdCA9IHsgb3VyczogW10gfTtcblxuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0ZWRDb250ZXh0KCk6IERldGFpbGVkQ29udGV4dCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkQ29udGV4dDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRDb250ZXh0KHZhbHVlOiBEZXRhaWxlZENvbnRleHQpIHtcbiAgICB0aGlzLl9zZWxlY3RlZENvbnRleHQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBwcml2YXRlIF9zZWxlY3RlZENvbnRleHQ6IERldGFpbGVkQ29udGV4dDtcblxuICBASW5wdXQoKVxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuICBzZXQgbWFwKHZhbHVlOiBJZ29NYXApIHtcbiAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tYXA6IElnb01hcDtcblxuICBASW5wdXQoKVxuICBnZXQgZGVmYXVsdENvbnRleHRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q29udGV4dElkO1xuICB9XG4gIHNldCBkZWZhdWx0Q29udGV4dElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0Q29udGV4dElkID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfZGVmYXVsdENvbnRleHRJZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb2xsYXBzZWQ6IHsgY29udGV4dFNjb3BlIH1bXSA9IFtdO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPERldGFpbGVkQ29udGV4dD4oKTtcbiAgQE91dHB1dCgpIHVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxEZXRhaWxlZENvbnRleHQ+KCk7XG4gIEBPdXRwdXQoKSBlZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxEZXRhaWxlZENvbnRleHQ+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPERldGFpbGVkQ29udGV4dD4oKTtcbiAgQE91dHB1dCgpIHNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERldGFpbGVkQ29udGV4dD4oKTtcbiAgQE91dHB1dCgpIGNsb25lID0gbmV3IEV2ZW50RW1pdHRlcjxEZXRhaWxlZENvbnRleHQ+KCk7XG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdGl0bGU6IHN0cmluZzsgZW1wdHk6IGJvb2xlYW4gfT4oKTtcbiAgQE91dHB1dCgpIGhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPERldGFpbGVkQ29udGV4dD4oKTtcbiAgQE91dHB1dCgpIHNob3cgPSBuZXcgRXZlbnRFbWl0dGVyPERldGFpbGVkQ29udGV4dD4oKTtcbiAgQE91dHB1dCgpIHNob3dIaWRkZW5Db250ZXh0cyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGZhdm9yaXRlID0gbmV3IEV2ZW50RW1pdHRlcjxEZXRhaWxlZENvbnRleHQ+KCk7XG4gIEBPdXRwdXQoKSBtYW5hZ2VQZXJtaXNzaW9ucyA9IG5ldyBFdmVudEVtaXR0ZXI8RGV0YWlsZWRDb250ZXh0PigpO1xuICBAT3V0cHV0KCkgbWFuYWdlVG9vbHMgPSBuZXcgRXZlbnRFbWl0dGVyPERldGFpbGVkQ29udGV4dD4oKTtcbiAgQE91dHB1dCgpIGZpbHRlclBlcm1pc3Npb25zQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgQ29udGV4dFVzZXJQZXJtaXNzaW9uW11cbiAgPigpO1xuXG4gIHB1YmxpYyB0aXRsZU1hcHBpbmcgPSB7XG4gICAgb3VyczogJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLm91ckNvbnRleHRzJyxcbiAgICBzaGFyZWQ6ICdpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5zaGFyZWRDb250ZXh0cycsXG4gICAgcHVibGljOiAnaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIucHVibGljQ29udGV4dHMnXG4gIH07XG5cbiAgcHVibGljIHVzZXJzOiBDb250ZXh0UHJvZmlsc1tdO1xuICBwdWJsaWMgcGVybWlzc2lvbnM6IENvbnRleHRVc2VyUGVybWlzc2lvbltdID0gW107XG5cbiAgcHVibGljIGFjdGlvblN0b3JlID0gbmV3IEFjdGlvblN0b3JlKFtdKTtcbiAgcHVibGljIGFjdGlvbmJhck1vZGUgPSBBY3Rpb25iYXJNb2RlLk92ZXJsYXk7XG5cbiAgcHVibGljIGNvbG9yID0gJ3ByaW1hcnknO1xuXG4gIHB1YmxpYyBzaG93SGlkZGVuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENvbnRleHQgZmlsdGVyIHRlcm1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB0ZXJtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXJtID0gdmFsdWU7XG4gICAgdGhpcy5uZXh0KCk7XG4gIH1cbiAgZ2V0IHRlcm0oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGVybTtcbiAgfVxuICBwdWJsaWMgX3Rlcm06IHN0cmluZyA9ICcnO1xuXG4gIGdldCBzb3J0ZWRBbHBoYSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydGVkQWxwaGE7XG4gIH1cbiAgc2V0IHNvcnRlZEFscGhhKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc29ydGVkQWxwaGEgPSB2YWx1ZTtcbiAgICB0aGlzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9zb3J0ZWRBbHBoYTogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgc2hvd0NvbnRleHRGaWx0ZXIgPSBDb250ZXh0TGlzdENvbnRyb2xzRW51bS5hbHdheXM7XG5cbiAgcHVibGljIHRocmVzaG9sZFRvRmlsdGVyID0gNTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGNvbnRleHRTZXJ2aWNlOiBDb250ZXh0U2VydmljZSxcbiAgICBwdWJsaWMgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcbiAgICBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoYW5nZSQkID0gdGhpcy5jaGFuZ2UkXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzLm91cnMubGVuZ3RoID09PSAwID8gRU1QVFkgOiB0aW1lcig1MCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb250ZXh0cyQubmV4dCh0aGlzLmZpbHRlckNvbnRleHRzTGlzdCh0aGlzLmNvbnRleHRzKSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuYWN0aW9uU3RvcmUubG9hZChbXG4gICAgICB7XG4gICAgICAgIGlkOiAnZW1wdHlDb250ZXh0JyxcbiAgICAgICAgdGl0bGU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5lbXB0eUNvbnRleHQnXG4gICAgICAgICksXG4gICAgICAgIGljb246ICdtYXAtb3V0bGluZScsXG4gICAgICAgIHRvb2x0aXA6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5lbXB0eUNvbnRleHRUb29sdGlwJ1xuICAgICAgICApLFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVDb250ZXh0KHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2NvbnRleHRGcm9tTWFwJyxcbiAgICAgICAgdGl0bGU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5jb250ZXh0TWFwJ1xuICAgICAgICApLFxuICAgICAgICBpY29uOiAnbWFwLWNoZWNrJyxcbiAgICAgICAgdG9vbHRpcDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmNvbnRleHRNYXBUb29sdGlwJ1xuICAgICAgICApLFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVDb250ZXh0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0KCkge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckNvbnRleHRzTGlzdChjb250ZXh0czogQ29udGV4dHNMaXN0KSB7XG4gICAgaWYgKHRoaXMudGVybSA9PT0gJycpIHtcbiAgICAgIGlmICh0aGlzLnNvcnRlZEFscGhhKSB7XG4gICAgICAgIGNvbnRleHRzID0gdGhpcy5zb3J0Q29udGV4dHNMaXN0KGNvbnRleHRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZXh0cztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3VycyA9IGNvbnRleHRzLm91cnMuZmlsdGVyKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlck5vcm1hbGl6ZWQgPSB0aGlzLnRlcm1cbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbiAgICAgICAgY29uc3QgY29udGV4dFRpdGxlTm9ybWFsaXplZCA9IGNvbnRleHQudGl0bGVcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRUaXRsZU5vcm1hbGl6ZWQuaW5jbHVkZXMoZmlsdGVyTm9ybWFsaXplZCk7XG4gICAgICB9KTtcblxuICAgICAgbGV0IHVwZGF0ZUNvbnRleHRzOiBDb250ZXh0c0xpc3QgPSB7XG4gICAgICAgIG91cnNcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmNvbnRleHRzLnB1YmxpYykge1xuICAgICAgICBjb25zdCBwdWJsaWNzID0gY29udGV4dHMucHVibGljLmZpbHRlcigoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlck5vcm1hbGl6ZWQgPSB0aGlzLnRlcm1cbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAubm9ybWFsaXplKCdORkQnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbiAgICAgICAgICBjb25zdCBjb250ZXh0VGl0bGVOb3JtYWxpemVkID0gY29udGV4dC50aXRsZVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpO1xuICAgICAgICAgIHJldHVybiBjb250ZXh0VGl0bGVOb3JtYWxpemVkLmluY2x1ZGVzKGZpbHRlck5vcm1hbGl6ZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdXBkYXRlQ29udGV4dHMucHVibGljID0gcHVibGljcztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29udGV4dHMuc2hhcmVkKSB7XG4gICAgICAgIGNvbnN0IHNoYXJlZCA9IGNvbnRleHRzLnNoYXJlZC5maWx0ZXIoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJOb3JtYWxpemVkID0gdGhpcy50ZXJtXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJyk7XG4gICAgICAgICAgY29uc3QgY29udGV4dFRpdGxlTm9ybWFsaXplZCA9IGNvbnRleHQudGl0bGVcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAubm9ybWFsaXplKCdORkQnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbiAgICAgICAgICByZXR1cm4gY29udGV4dFRpdGxlTm9ybWFsaXplZC5pbmNsdWRlcyhmaWx0ZXJOb3JtYWxpemVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZUNvbnRleHRzLnNoYXJlZCA9IHNoYXJlZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc29ydGVkQWxwaGEpIHtcbiAgICAgICAgdXBkYXRlQ29udGV4dHMgPSB0aGlzLnNvcnRDb250ZXh0c0xpc3QodXBkYXRlQ29udGV4dHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVwZGF0ZUNvbnRleHRzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hhbmdlJCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93RmlsdGVyKCkge1xuICAgIHN3aXRjaCAodGhpcy5zaG93Q29udGV4dEZpbHRlcikge1xuICAgICAgY2FzZSBDb250ZXh0TGlzdENvbnRyb2xzRW51bS5hbHdheXM6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSBDb250ZXh0TGlzdENvbnRyb2xzRW51bS5uZXZlcjpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbGV0IHRvdGFsTGVuZ3RoID0gdGhpcy5jb250ZXh0cy5vdXJzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdWJsaWNcbiAgICAgICAgICA/ICh0b3RhbExlbmd0aCArPSB0aGlzLmNvbnRleHRzLnB1YmxpYy5sZW5ndGgpXG4gICAgICAgICAgOiAodG90YWxMZW5ndGggKz0gMCk7XG4gICAgICAgIHRoaXMuY29udGV4dHMuc2hhcmVkXG4gICAgICAgICAgPyAodG90YWxMZW5ndGggKz0gdGhpcy5jb250ZXh0cy5zaGFyZWQubGVuZ3RoKVxuICAgICAgICAgIDogKHRvdGFsTGVuZ3RoICs9IDApO1xuICAgICAgICBpZiAodG90YWxMZW5ndGggPj0gdGhpcy50aHJlc2hvbGRUb0ZpbHRlcikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzb3J0Q29udGV4dHNMaXN0KGNvbnRleHRzOiBDb250ZXh0c0xpc3QpIHtcbiAgICBpZiAoY29udGV4dHMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHRzTGlzdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGV4dHMpKTtcbiAgICAgIGNvbnRleHRzTGlzdC5vdXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubm9ybWFsaXplKGEudGl0bGUpIDwgdGhpcy5ub3JtYWxpemUoYi50aXRsZSkpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubm9ybWFsaXplKGEudGl0bGUpID4gdGhpcy5ub3JtYWxpemUoYi50aXRsZSkpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29udGV4dHNMaXN0LnNoYXJlZCkge1xuICAgICAgICBjb250ZXh0c0xpc3Quc2hhcmVkLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5ub3JtYWxpemUoYS50aXRsZSkgPCB0aGlzLm5vcm1hbGl6ZShiLnRpdGxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5ub3JtYWxpemUoYS50aXRsZSkgPiB0aGlzLm5vcm1hbGl6ZShiLnRpdGxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY29udGV4dHNMaXN0LnB1YmxpYykge1xuICAgICAgICBjb250ZXh0c0xpc3QucHVibGljLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5ub3JtYWxpemUoYS50aXRsZSkgPCB0aGlzLm5vcm1hbGl6ZShiLnRpdGxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5ub3JtYWxpemUoYS50aXRsZSkgPiB0aGlzLm5vcm1hbGl6ZShiLnRpdGxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZXh0c0xpc3Q7XG4gICAgfVxuICB9XG5cbiAgbm9ybWFsaXplKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJylcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdG9nZ2xlU29ydChzb3J0QWxwaGE6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNvcnRlZEFscGhhID0gc29ydEFscGhhO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgdGhpcy50ZXJtID0gJyc7XG4gIH1cblxuICBjcmVhdGVDb250ZXh0KGVtcHR5PzogYm9vbGVhbikge1xuICAgIHRoaXMuZGlhbG9nXG4gICAgICAub3BlbihCb29rbWFya0RpYWxvZ0NvbXBvbmVudCwgeyBkaXNhYmxlQ2xvc2U6IGZhbHNlIH0pXG4gICAgICAuYWZ0ZXJDbG9zZWQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGUuZW1pdCh7IHRpdGxlLCBlbXB0eSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRQZXJtaXNzaW9uKHVzZXI/KTogQ29udGV4dFVzZXJQZXJtaXNzaW9uIHtcbiAgICBpZiAodXNlcikge1xuICAgICAgY29uc3QgcGVybWlzc2lvbiA9IHRoaXMucGVybWlzc2lvbnMuZmluZCgocCkgPT4gcC5uYW1lID09PSB1c2VyLm5hbWUpO1xuICAgICAgcmV0dXJuIHBlcm1pc3Npb247XG4gICAgfVxuICB9XG5cbiAgdXNlclNlbGVjdGlvbih1c2VyLCBwYXJlbnQ/KSB7XG4gICAgY29uc3QgcGVybWlzc2lvbiA9IHRoaXMuZ2V0UGVybWlzc2lvbih1c2VyKTtcbiAgICBpZiAocGVybWlzc2lvbikge1xuICAgICAgcGVybWlzc2lvbi5jaGVja2VkID0gIXBlcm1pc3Npb24uY2hlY2tlZDtcbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KFxuICAgICAgICAnY29udGV4dHMucGVybWlzc2lvbnMuJyArIHBlcm1pc3Npb24ubmFtZSxcbiAgICAgICAgcGVybWlzc2lvbi5jaGVja2VkXG4gICAgICApO1xuICAgICAgcGVybWlzc2lvbi5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgbGV0IGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgICAgZm9yIChjb25zdCBjIG9mIHBhcmVudC5jaGlsZHMpIHtcbiAgICAgICAgY29uc3QgY1Blcm1pc3Npb24gPSB0aGlzLmdldFBlcm1pc3Npb24oYyk7XG4gICAgICAgIGlmIChjUGVybWlzc2lvbi5jaGVja2VkICE9PSBwZXJtaXNzaW9uLmNoZWNrZWQpIHtcbiAgICAgICAgICBpbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgcGFyZW50UGVybWlzc2lvbiA9IHRoaXMuZ2V0UGVybWlzc2lvbihwYXJlbnQpO1xuICAgICAgaWYgKHBhcmVudFBlcm1pc3Npb24pIHtcbiAgICAgICAgcGFyZW50UGVybWlzc2lvbi5jaGVja2VkID0gcGVybWlzc2lvbi5jaGVja2VkO1xuICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldChcbiAgICAgICAgICAnY29udGV4dHMucGVybWlzc2lvbnMuJyArIHBhcmVudFBlcm1pc3Npb24ubmFtZSxcbiAgICAgICAgICBwZXJtaXNzaW9uLmNoZWNrZWRcbiAgICAgICAgKTtcbiAgICAgICAgcGFyZW50UGVybWlzc2lvbi5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXNlci5jaGlsZHMpIHtcbiAgICAgIGZvciAoY29uc3QgYyBvZiB1c2VyLmNoaWxkcykge1xuICAgICAgICBjb25zdCBjaGlsZHJlblBlcm1pc3Npb24gPSB0aGlzLmdldFBlcm1pc3Npb24oYyk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaGlsZHJlblBlcm1pc3Npb24gJiZcbiAgICAgICAgICBjaGlsZHJlblBlcm1pc3Npb24uY2hlY2tlZCAhPT0gcGVybWlzc2lvbi5jaGVja2VkXG4gICAgICAgICkge1xuICAgICAgICAgIGNoaWxkcmVuUGVybWlzc2lvbi5jaGVja2VkID0gcGVybWlzc2lvbi5jaGVja2VkO1xuICAgICAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KFxuICAgICAgICAgICAgJ2NvbnRleHRzLnBlcm1pc3Npb25zLicgKyBjaGlsZHJlblBlcm1pc3Npb24ubmFtZSxcbiAgICAgICAgICAgIHBlcm1pc3Npb24uY2hlY2tlZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlclBlcm1pc3Npb25zQ2hhbmdlZC5lbWl0KHRoaXMucGVybWlzc2lvbnMpO1xuICB9XG5cbiAgaGlkZUNvbnRleHQoY29udGV4dDogRGV0YWlsZWRDb250ZXh0KSB7XG4gICAgY29udGV4dC5oaWRkZW4gPSB0cnVlO1xuICAgIGlmICghdGhpcy5zaG93SGlkZGVuKSB7XG4gICAgICBjb25zdCBjb250ZXh0czogQ29udGV4dHNMaXN0ID0geyBvdXJzOiBbXSwgc2hhcmVkOiBbXSwgcHVibGljOiBbXSB9O1xuICAgICAgY29udGV4dHMub3VycyA9IHRoaXMuY29udGV4dHMub3Vycy5maWx0ZXIoKGMpID0+IGMuaWQgIT09IGNvbnRleHQuaWQpO1xuICAgICAgY29udGV4dHMuc2hhcmVkID0gdGhpcy5jb250ZXh0cy5zaGFyZWQuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBjb250ZXh0LmlkKTtcbiAgICAgIGNvbnRleHRzLnB1YmxpYyA9IHRoaXMuY29udGV4dHMucHVibGljLmZpbHRlcigoYykgPT4gYy5pZCAhPT0gY29udGV4dC5pZCk7XG4gICAgICB0aGlzLmNvbnRleHRzID0gY29udGV4dHM7XG4gICAgfVxuICAgIHRoaXMuaGlkZS5lbWl0KGNvbnRleHQpO1xuICB9XG5cbiAgc2hvd0NvbnRleHQoY29udGV4dDogRGV0YWlsZWRDb250ZXh0KSB7XG4gICAgY29udGV4dC5oaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLnNob3cuZW1pdChjb250ZXh0KTtcbiAgfVxufVxuIiwiPGlnby1saXN0IFtuYXZpZ2F0aW9uXT1cInRydWVcIj5cbiAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwic2hvd0ZpbHRlcigpXCIgW25nQ2xhc3NdPVwiYXV0aC5hdXRoZW50aWNhdGVkICYmIGNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCdjb250ZXh0JykgPyAnY29udGV4dC1maWx0ZXItbWluLXdpZHRoJyA6ICdjb250ZXh0LWZpbHRlci1tYXgtd2lkdGgnXCI+XG4gICAgPGlucHV0XG4gICAgICBtYXRJbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cIidpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5maWx0ZXJQbGFjZUhvbGRlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ0ZXJtXCI+XG4gICAgPGJ1dHRvblxuICAgICAgbWF0LWJ1dHRvblxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICBtYXRTdWZmaXhcbiAgICAgIGNsYXNzPVwiY2xlYXItYnV0dG9uXCJcbiAgICAgICpuZ0lmPVwidGVybS5sZW5ndGhcIlxuICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyXCJcbiAgICAgIGNvbG9yPVwid2FyblwiXG4gICAgICAoY2xpY2spPVwiY2xlYXJGaWx0ZXIoKVwiPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJjbG9zZVwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPGJ1dHRvblxuICAqbmdJZj1cIiFzb3J0ZWRBbHBoYVwiXG4gIGNsYXNzPVwic29ydC1hbHBoYVwiXG4gIG1hdC1pY29uLWJ1dHRvblxuICBbbWF0VG9vbHRpcF09XCInaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuc29ydEFscGhhYmV0aWNhbGx5JyB8IHRyYW5zbGF0ZVwiXG4gIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAoY2xpY2spPVwidG9nZ2xlU29ydCh0cnVlKVwiPlxuICA8bWF0LWljb24gY29sb3I9XCJwcmltYXJ5XCIgc3ZnSWNvbj1cInNvcnQtYWxwaGFiZXRpY2FsLXZhcmlhbnRcIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgICpuZ0lmPVwic29ydGVkQWxwaGFcIlxuICAgIGNsYXNzPVwic29ydC1hbHBoYVwiXG4gICAgbWF0LWljb24tYnV0dG9uXG4gICAgW21hdFRvb2x0aXBdPVwiJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLnNvcnRDb250ZXh0T3JkZXInIHwgdHJhbnNsYXRlXCJcbiAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAoY2xpY2spPVwidG9nZ2xlU29ydChmYWxzZSlcIj5cbiAgICA8bWF0LWljb24gY29sb3I9XCJ3YXJuXCIgc3ZnSWNvbj1cInNvcnQtdmFyaWFudC1yZW1vdmVcIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cblxuICA8aWdvLWFjdGlvbmJhciAqbmdJZj1cImF1dGguYXV0aGVudGljYXRlZCAmJiBjb25maWdTZXJ2aWNlLmdldENvbmZpZygnY29udGV4dCcpXCJcbiAgICBjbGFzcz1cImFkZC1jb250ZXh0LWJ1dHRvblwiXG4gICAgW2ljb25Db2xvcl09XCJjb2xvclwiXG4gICAgW3N0b3JlXT1cImFjdGlvblN0b3JlXCJcbiAgICBbd2l0aEljb25dPVwidHJ1ZVwiXG4gICAgaWNvbj1cInBsdXNcIlxuICAgIFt3aXRoVGl0bGVdPVwiYWN0aW9uYmFyTW9kZSA9PT0gJ292ZXJsYXknXCJcbiAgICBbaG9yaXpvbnRhbF09XCJmYWxzZVwiXG4gICAgW21vZGVdPVwiYWN0aW9uYmFyTW9kZVwiPlxuICA8L2lnby1hY3Rpb25iYXI+XG5cbiAgPGJ1dHRvbiAqbmdJZj1cImF1dGguYXV0aGVudGljYXRlZCAmJiBjb25maWdTZXJ2aWNlLmdldENvbmZpZygnY29udGV4dCcpXCJcbiAgICBjbGFzcz1cInVzZXJzLWZpbHRlclwiXG4gICAgbWF0LWljb24tYnV0dG9uXG4gICAgW21hdFRvb2x0aXBdPVwiJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmZpbHRlclVzZXInIHwgdHJhbnNsYXRlXCJcbiAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYWNjb3VudE1lbnVcIj5cbiAgICA8bWF0LWljb24gY29sb3I9XCJwcmltYXJ5XCIgc3ZnSWNvbj1cImZpbHRlci1tZW51XCI+PC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG5cbiAgPG1hdC1tZW51ICNhY2NvdW50TWVudT1cIm1hdE1lbnVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB1c2VyIG9mIHVzZXJzXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInByb2ZpbHNNZW51XCI+XG4gICAgICAgIDxtYXQtY2hlY2tib3hcbiAgICAgICAgICBjbGFzcz1cIm1hdC1tZW51LWl0ZW1cIlxuICAgICAgICAgIFtjaGVja2VkXT1cImdldFBlcm1pc3Npb24odXNlcikuY2hlY2tlZFwiXG4gICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiZ2V0UGVybWlzc2lvbih1c2VyKS5pbmRldGVybWluYXRlXCJcbiAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICAoY2hhbmdlKT1cInVzZXJTZWxlY3Rpb24odXNlcilcIj5cbiAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJ1c2VyLmNoaWxkc1wiXG4gICAgICAgICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cInN1YkFjY291bnRNZW51XCJcbiAgICAgICAgICBtYXQtbWVudS1pdGVtPlxuICAgICAgICAgIHt7dXNlci50aXRsZX19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbWF0LW1lbnUtaXRlbVxuICAgICAgICAgICpuZ0lmPVwiIXVzZXIuY2hpbGRzXCI+XG4gICAgICAgICAge3t1c2VyLnRpdGxlfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDxtYXQtbWVudSAjc3ViQWNjb3VudE1lbnU9XCJtYXRNZW51XCI+XG4gICAgICAgIDxtYXQtY2hlY2tib3ggKm5nRm9yPVwibGV0IGNoaWxkIG9mIHVzZXIuY2hpbGRzXCJcbiAgICAgICAgICBjbGFzcz1cIm1hdC1tZW51LWl0ZW1cIlxuICAgICAgICAgIFtjaGVja2VkXT1cImdldFBlcm1pc3Npb24oY2hpbGQpLmNoZWNrZWRcIlxuICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAgIChjaGFuZ2UpPVwidXNlclNlbGVjdGlvbihjaGlsZCwgdXNlcilcIj5cbiAgICAgICAgICB7e2NoaWxkLnRpdGxlfX1cbiAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICA8L21hdC1tZW51PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJwcm9maWxzTWVudVwiPlxuICAgICAgPG1hdC1jaGVja2JveFxuICAgICAgICBjbGFzcz1cIm1hdC1tZW51LWl0ZW1cIlxuICAgICAgICBbY2hlY2tlZF09XCJzaG93SGlkZGVuXCJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgIChjaGFuZ2UpPVwic2hvd0hpZGRlbkNvbnRleHRzLmVtaXQoKVwiPlxuICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+XG4gICAgICAgIHt7ICdpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5zaG93SGlkZGVuJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9zcGFuPlxuICA8L21hdC1tZW51PlxuXG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtZ3JvdXBDb250ZXh0cyBbbmdGb3JPZl09XCJjb250ZXh0cyQgfCBhc3luYyB8IGtleXZhbHVlXCI+XG5cbiAgICA8aWdvLWNvbGxhcHNpYmxlICpuZ0lmPVwiZ3JvdXBDb250ZXh0cy52YWx1ZS5sZW5ndGggJiYgYXV0aC5hdXRoZW50aWNhdGVkXCIgW3RpdGxlXT1cInRpdGxlTWFwcGluZ1tncm91cENvbnRleHRzLmtleV0gfCB0cmFuc2xhdGVcIlxuICAgICAgW2NvbGxhcHNlZF09XCJjb2xsYXBzZWRbdGl0bGVNYXBwaW5nW2dyb3VwQ29udGV4dHMua2V5XV1cIiAodG9nZ2xlKT1cImNvbGxhcHNlZFt0aXRsZU1hcHBpbmdbZ3JvdXBDb250ZXh0cy5rZXldXSA9ICRldmVudFwiPlxuXG4gICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWNvbnRleHQgW25nRm9yT2ZdPVwiZ3JvdXBDb250ZXh0cy52YWx1ZVwiPlxuICAgICAgICA8aWdvLWNvbnRleHQtaXRlbVxuICAgICAgICAgIGlnb0xpc3RJdGVtXG4gICAgICAgICAgY29sb3I9XCJhY2NlbnRcIlxuICAgICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZENvbnRleHQgJiYgc2VsZWN0ZWRDb250ZXh0LnVyaSA9PT0gY29udGV4dC51cmlcIlxuICAgICAgICAgIFtjb250ZXh0XT1cImNvbnRleHRcIlxuICAgICAgICAgIFtkZWZhdWx0XT1cImNvbnRleHQuaWQgJiYgdGhpcy5kZWZhdWx0Q29udGV4dElkICYmIHRoaXMuZGVmYXVsdENvbnRleHRJZCA9PT0gY29udGV4dC5pZFwiXG4gICAgICAgICAgKGVkaXQpPVwiZWRpdC5lbWl0KGNvbnRleHQpXCJcbiAgICAgICAgICAoZGVsZXRlKT1cImRlbGV0ZS5lbWl0KGNvbnRleHQpXCJcbiAgICAgICAgICAoY2xvbmUpPVwiY2xvbmUuZW1pdChjb250ZXh0KVwiXG4gICAgICAgICAgKHNhdmUpPVwic2F2ZS5lbWl0KGNvbnRleHQpXCJcbiAgICAgICAgICAoaGlkZSk9XCJoaWRlQ29udGV4dChjb250ZXh0KVwiXG4gICAgICAgICAgKHNob3cpPVwic2hvd0NvbnRleHQoY29udGV4dClcIlxuICAgICAgICAgIChmYXZvcml0ZSk9XCJmYXZvcml0ZS5lbWl0KGNvbnRleHQpXCJcbiAgICAgICAgICAobWFuYWdlVG9vbHMpPVwibWFuYWdlVG9vbHMuZW1pdChjb250ZXh0KVwiXG4gICAgICAgICAgKG1hbmFnZVBlcm1pc3Npb25zKT1cIm1hbmFnZVBlcm1pc3Npb25zLmVtaXQoY29udGV4dClcIlxuICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0LmVtaXQoY29udGV4dClcIlxuICAgICAgICAgICh1bnNlbGVjdCk9XCJ1bnNlbGVjdC5lbWl0KGNvbnRleHQpXCI+XG4gICAgICAgIDwvaWdvLWNvbnRleHQtaXRlbT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8L2lnby1jb2xsYXBzaWJsZT5cblxuICAgIDxuZy10ZW1wbGF0ZSAqbmdJZj1cImdyb3VwQ29udGV4dHMudmFsdWUubGVuZ3RoICYmICFhdXRoLmF1dGhlbnRpY2F0ZWRcIiBuZ0ZvciBsZXQtY29udGV4dCBbbmdGb3JPZl09XCJncm91cENvbnRleHRzLnZhbHVlXCI+XG4gICAgICA8aWdvLWNvbnRleHQtaXRlbVxuICAgICAgICBpZ29MaXN0SXRlbVxuICAgICAgICBjb2xvcj1cImFjY2VudFwiXG4gICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZENvbnRleHQgJiYgc2VsZWN0ZWRDb250ZXh0LnVyaSA9PT0gY29udGV4dC51cmlcIlxuICAgICAgICBbY29udGV4dF09XCJjb250ZXh0XCJcbiAgICAgICAgW2RlZmF1bHRdPVwidGhpcy5kZWZhdWx0Q29udGV4dElkID09PSBjb250ZXh0LmlkXCJcbiAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QuZW1pdChjb250ZXh0KVwiXG4gICAgICAgICh1bnNlbGVjdCk9XCJ1bnNlbGVjdC5lbWl0KGNvbnRleHQpXCI+XG4gICAgICA8L2lnby1jb250ZXh0LWl0ZW0+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICA8L25nLXRlbXBsYXRlPlxuPC9pZ28tbGlzdD5cbiJdfQ==