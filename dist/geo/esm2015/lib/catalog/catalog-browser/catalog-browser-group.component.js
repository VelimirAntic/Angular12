import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EntityStore } from '@igo2/common';
import { CatalogItemType } from '../shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/icon";
import * as i3 from "@igo2/common";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/button";
import * as i8 from "./catalog-browser-layer.component";
import * as i9 from "@ngx-translate/core";
function CatalogBrowserGroupComponent_button_4_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 9);
    i0.ɵɵlistener("click", function CatalogBrowserGroupComponent_button_4_mat_icon_1_Template_mat_icon_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.catalog.externalProvider.group"));
} }
function CatalogBrowserGroupComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵtemplate(1, CatalogBrowserGroupComponent_button_4_mat_icon_1_Template, 2, 3, "mat-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.group.externalProvider);
} }
function CatalogBrowserGroupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵlistener("click", function CatalogBrowserGroupComponent_ng_container_5_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onToggleClick(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelement(4, "mat-icon", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 2, "igo.geo.catalog.group.removeFromMap"))("disabled", i0.ɵɵpipeBind1(3, 4, ctx_r1.disabled$));
} }
function CatalogBrowserGroupComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function CatalogBrowserGroupComponent_ng_template_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onToggleClick(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelement(3, "mat-icon", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.geo.catalog.group.addToMap"))("disabled", i0.ɵɵpipeBind1(2, 4, ctx_r3.disabled$));
} }
function CatalogBrowserGroupComponent_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CatalogBrowserGroupComponent_ng_template_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "igo-catalog-browser-layer", 15);
    i0.ɵɵlistener("addedLayerIsPreview", function CatalogBrowserGroupComponent_ng_template_12_ng_container_1_Template_igo_catalog_browser_layer_addedLayerIsPreview_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onLayerPreview($event); })("addedChange", function CatalogBrowserGroupComponent_ng_template_12_ng_container_1_Template_igo_catalog_browser_layer_addedChange_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.onLayerAddedChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", item_r12)("resolution", ctx_r14.resolution)("catalogAllowLegend", ctx_r14.catalogAllowLegend)("added", ctx_r14.state.get(item_r12).added);
} }
function CatalogBrowserGroupComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CatalogBrowserGroupComponent_ng_template_12_ng_container_0_Template, 1, 0, "ng-container", 14);
    i0.ɵɵtemplate(1, CatalogBrowserGroupComponent_ng_template_12_ng_container_1_Template, 2, 4, "ng-container", 14);
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.isGroup(item_r12));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isLayer(item_r12));
} }
/**
 * Catalog browser group item
 */
export class CatalogBrowserGroupComponent {
    constructor() {
        /**
         * Group's items store
         * @internal
         */
        this.store = new EntityStore([]);
        /**
         * Whether all the layers of the group are added
         * @internal
         */
        this.added$ = new BehaviorSubject(false);
        this.preview$ = new BehaviorSubject(false);
        /**
         * Whether the toggle button is disabled
         * @internal
         */
        this.disabled$ = new BehaviorSubject(false);
        /**
         * Whether the group is collapsed
         */
        this.collapsed = true;
        this.catalogAllowLegend = false;
        /**
         * Whether the group can be toggled when it's collapsed
         */
        this.toggleCollapsed = true;
        /**
         * Event emitted when the add/remove button of the group is clicked
         */
        this.addedChange = new EventEmitter();
        /**
         * Event emitted when the add/remove button of a layer is clicked
         */
        this.layerAddedChange = new EventEmitter();
    }
    /**
     * @internal
     */
    get title() {
        return this.group.title;
    }
    /**
     * @internal
     */
    ngOnInit() {
        this.store.load(this.group.items);
        this.evaluateAdded();
        this.evaluateDisabled(this.collapsed);
        if (this.group.sortDirection !== undefined) {
            this.store.view.sort({
                direction: this.group.sortDirection,
                valueAccessor: (item) => item.title
            });
        }
    }
    ngOnDestroy() {
        this.store.destroy();
    }
    /**
     * @internal
     */
    isGroup(item) {
        return item.type === CatalogItemType.Group;
    }
    /**
     * @internal
     */
    isLayer(item) {
        return item.type === CatalogItemType.Layer;
    }
    /**
     * On toggle button click, emit the added change event
     * @internal
     */
    onToggleClick() {
        this.added$.value ? this.remove() : this.add();
    }
    /**
     * On toggle button click, emit the added change event
     * @internal
     */
    onToggleCollapsed(collapsed) {
        this.evaluateDisabled(collapsed);
    }
    /**
     * When a layer is added or removed, evaluate if all the layers of the group
     * are now added or removed. If so, consider that the group itself is added
     * or removed.
     * @internal
     * @param event Layer added change event
     */
    onLayerAddedChange(event) {
        this.layerAddedChange.emit(event);
        this.tryToggleGroup(event);
    }
    /**
     * Emit added change event with added = true
     */
    add() {
        this.added$.next(true);
        this.addedChange.emit({
            added: true,
            group: this.group
        });
    }
    /**
     * Emit added change event with added = true
     */
    remove() {
        this.added$.next(false);
        this.addedChange.emit({
            added: false,
            group: this.group
        });
    }
    onLayerPreview(event) {
        this.preview$.next(event);
    }
    /**
     * If all the layers of the group added or removed, add or remove the group itself.
     * @param event The last layer added change event to occur
     */
    tryToggleGroup(event) {
        const added = event.added;
        const layer = event.layer;
        const layersAdded = this.store.view
            .all()
            .filter((item) => item.id !== layer.id)
            .map((item) => this.state.get(item).added || false);
        if (layersAdded.every(value => value === added)) {
            added ? this.add() : this.remove();
        }
        else if (this.added$.value === true) {
            this.added$.next(false);
        }
    }
    evaluateAdded() {
        const added = this.store.all().every((item) => {
            return (this.state.get(item).added || false) === true;
        });
        this.added$.next(added);
    }
    evaluateDisabled(collapsed) {
        let disabled = false;
        if (this.toggleCollapsed === false) {
            disabled = collapsed;
        }
        this.disabled$.next(disabled);
    }
    onTitleClick() {
        this.collapsed = !this.collapsed;
    }
}
CatalogBrowserGroupComponent.ɵfac = function CatalogBrowserGroupComponent_Factory(t) { return new (t || CatalogBrowserGroupComponent)(); };
CatalogBrowserGroupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CatalogBrowserGroupComponent, selectors: [["igo-catalog-browser-group"]], inputs: { catalog: "catalog", group: "group", collapsed: "collapsed", resolution: "resolution", catalogAllowLegend: "catalogAllowLegend", toggleCollapsed: "toggleCollapsed", state: "state" }, outputs: { addedChange: "addedChange", layerAddedChange: "layerAddedChange" }, decls: 14, vars: 14, consts: [["mat-list-avatar", "", "svgIcon", "chevron-up", "igoCollapse", "", 1, "igo-chevron", 3, "target", "collapsed", "toggle"], ["id", "catalog-group-title", "mat-line", "", "matTooltipShowDelay", "500", 1, "igo-catalog-group-title", 3, "matTooltip", "click"], ["disabled", "true", "mat-icon-button", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["notadded", ""], ["items", ""], ["ngFor", "", 3, "ngForOf"], ["disabled", "true", "mat-icon-button", ""], ["class", "igo-cataloggroup-external-icon", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", "svgIcon", "earth-arrow-right", 3, "matTooltip", "click", 4, "ngIf"], ["tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", "svgIcon", "earth-arrow-right", 1, "igo-cataloggroup-external-icon", 3, "matTooltip", "click"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "disabled", "click"], ["svgIcon", "delete"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "disabled", "click"], ["svgIcon", "plus"], [4, "ngIf"], ["igoListItem", "", 3, "layer", "resolution", "catalogAllowLegend", "added", "addedLayerIsPreview", "addedChange"]], template: function CatalogBrowserGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list-item");
        i0.ɵɵelementStart(1, "mat-icon", 0);
        i0.ɵɵlistener("toggle", function CatalogBrowserGroupComponent_Template_mat_icon_toggle_1_listener($event) { return ctx.onToggleCollapsed($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "h4", 1);
        i0.ɵɵlistener("click", function CatalogBrowserGroupComponent_Template_h4_click_2_listener() { return ctx.onTitleClick(); });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, CatalogBrowserGroupComponent_button_4_Template, 2, 1, "button", 2);
        i0.ɵɵtemplate(5, CatalogBrowserGroupComponent_ng_container_5_Template, 5, 6, "ng-container", 3);
        i0.ɵɵpipe(6, "async");
        i0.ɵɵpipe(7, "async");
        i0.ɵɵtemplate(8, CatalogBrowserGroupComponent_ng_template_8_Template, 4, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", null, 5);
        i0.ɵɵtemplate(12, CatalogBrowserGroupComponent_ng_template_12_Template, 2, 2, "ng-template", 6);
        i0.ɵɵpipe(13, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(9);
        const _r4 = i0.ɵɵreference(11);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("target", _r4)("collapsed", ctx.collapsed);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.group.externalProvider);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(6, 8, ctx.added$) && i0.ɵɵpipeBind1(7, 10, ctx.preview$) === false)("ngIfElse", _r2);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(13, 12, ctx.store.view.all$()));
    } }, directives: [i1.MatListItem, i2.MatIcon, i1.MatListAvatarCssMatStyler, i3.CollapseDirective, i4.MatLine, i5.MatTooltip, i6.NgIf, i6.NgForOf, i7.MatButton, i8.CatalogBrowserLayerComponent, i3.ListItemDirective], pipes: [i6.AsyncPipe, i9.TranslatePipe], styles: [".igo-catalog-group-title[_ngcontent-%COMP%]{cursor:pointer;opacity:.9}#catalog-group-title[_ngcontent-%COMP%]{font-weight:bold}.igo-cataloggroup-external-icon[_ngcontent-%COMP%]{cursor:help}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogBrowserGroupComponent, [{
        type: Component,
        args: [{
                selector: 'igo-catalog-browser-group',
                templateUrl: './catalog-browser-group.component.html',
                styleUrls: ['./catalog-browser-group.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { catalog: [{
            type: Input
        }], group: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], resolution: [{
            type: Input
        }], catalogAllowLegend: [{
            type: Input
        }], toggleCollapsed: [{
            type: Input
        }], state: [{
            type: Input
        }], addedChange: [{
            type: Output
        }], layerAddedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1icm93c2VyLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2NhdGFsb2cvY2F0YWxvZy1icm93c2VyL2NhdGFsb2ctYnJvd3Nlci1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9jYXRhbG9nL2NhdGFsb2ctYnJvd3Nlci9jYXRhbG9nLWJyb3dzZXItZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFHeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRzNDLE9BQU8sRUFNTCxlQUFlLEVBQ2hCLE1BQU0sV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7SUNOZixtQ0FROEI7SUFENUIscUlBQVMsd0JBQXdCLElBQUM7O0lBRXBDLGlCQUFXOztJQUpULDJGQUFtRTs7O0lBUnZFLGlDQUVrQjtJQUNoQixnR0FTVztJQUNiLGlCQUFTOzs7SUFSSixlQUE0QjtJQUE1QixvREFBNEI7Ozs7SUFVakMsNkJBQXNGO0lBQ3BGLGtDQU80QjtJQUExQiw0TUFBeUI7OztJQUN6QiwrQkFBc0M7SUFDeEMsaUJBQVM7SUFDWCwwQkFBZTs7O0lBTlgsZUFBZ0U7SUFBaEUsd0ZBQWdFLG9EQUFBOzs7O0lBU2xFLGtDQU00QjtJQUExQiw4TUFBeUI7OztJQUN6QiwrQkFBb0M7SUFDdEMsaUJBQVM7OztJQUpQLG1GQUEyRCxvREFBQTs7O0lBVTdELHdCQUVlOzs7O0lBQ2YsNkJBQW9DO0lBQ2xDLHFEQU82QztJQUQzQywyUkFBOEMsa1FB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QUFnQiw0QkFBQTtRQUs4RSxlQUFvQjtRQUFwQixzQ0FBb0I7UUFBMEIsZUFBUztRQUFULCtCQUFTO1FBRTlJLGVBQTRCO1FBQTVCLGlEQUE0QjtRQWV0QixlQUF3RDtRQUF4RCx3R0FBd0QsaUJBQUE7UUEyQjNDLGVBQXFDO1FBQXJDLHVFQUFxQzs7dUZEdEJ0RCw0QkFBNEI7Y0FOeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2dCQUNyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkF3QlUsT0FBTztrQkFBZixLQUFLO1lBS0csS0FBSztrQkFBYixLQUFLO1lBS0csU0FBUztrQkFBakIsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFFRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFLRyxlQUFlO2tCQUF2QixLQUFLO1lBU0csS0FBSztrQkFBYixLQUFLO1lBS0ksV0FBVztrQkFBcEIsTUFBTTtZQVFHLGdCQUFnQjtrQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFbnRpdHlTdG9yZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7IEVudGl0eVN0YXRlTWFuYWdlciB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7XG4gIENhdGFsb2csXG4gIENhdGFsb2dJdGVtLFxuICBDYXRhbG9nSXRlbUdyb3VwLFxuICBDYXRhbG9nSXRlbUxheWVyLFxuICBDYXRhbG9nSXRlbVN0YXRlLFxuICBDYXRhbG9nSXRlbVR5cGVcbn0gZnJvbSAnLi4vc2hhcmVkJztcblxuLyoqXG4gKiBDYXRhbG9nIGJyb3dzZXIgZ3JvdXAgaXRlbVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tY2F0YWxvZy1icm93c2VyLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhdGFsb2ctYnJvd3Nlci1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhdGFsb2ctYnJvd3Nlci1ncm91cC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDYXRhbG9nQnJvd3Nlckdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBHcm91cCdzIGl0ZW1zIHN0b3JlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgc3RvcmUgPSBuZXcgRW50aXR5U3RvcmU8Q2F0YWxvZ0l0ZW0sIENhdGFsb2dJdGVtU3RhdGU+KFtdKTtcblxuICAvKipcbiAgICogV2hldGhlciBhbGwgdGhlIGxheWVycyBvZiB0aGUgZ3JvdXAgYXJlIGFkZGVkXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYWRkZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcHJldmlldyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAvKipcbiAgICogV2hldGhlciB0aGUgdG9nZ2xlIGJ1dHRvbiBpcyBkaXNhYmxlZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGRpc2FibGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgLyoqXG4gICAqIENhdGFsb2dcbiAgICovXG4gIEBJbnB1dCgpIGNhdGFsb2c6IENhdGFsb2c7XG5cbiAgLyoqXG4gICAqIENhdGFsb2cgZ3JvdXBcbiAgICovXG4gIEBJbnB1dCgpIGdyb3VwOiBDYXRhbG9nSXRlbUdyb3VwO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBncm91cCBpcyBjb2xsYXBzZWRcbiAgICovXG4gIEBJbnB1dCgpIGNvbGxhcHNlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgcmVzb2x1dGlvbjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGNhdGFsb2dBbGxvd0xlZ2VuZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBncm91cCBjYW4gYmUgdG9nZ2xlZCB3aGVuIGl0J3MgY29sbGFwc2VkXG4gICAqL1xuICBASW5wdXQoKSB0b2dnbGVDb2xsYXBzZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBQYXJlbnQgY2F0YWxvZydzIGl0ZW1zIHN0b3JlIHN0YXRlLiBHcm91cHMgc2hhcmUgYSB1bmlxdWVcbiAgICogRW50aXR5U3RhdGUgdGhhdCB0cmFja3MgdGhlIGdyb3VwIGFuZCBpdCdzIGxheWVycyBzdGF0ZSAod2hldGhlciB0aGV5IGFyZSBhZGRlZCBvciBub3QpLlxuICAgKiBTaGFyaW5nIGEgdW5pcXVlIHN0YXRlIHdvdWxkIGFsc28gYWxsb3cgdXMgdG8gZXhwYW5kIHRoaXMgY29tcG9uZW50IHRvIGFsbG93XG4gICAqIHRoZSBzZWxlY3Rpb24gb2YgYSBsYXllciB3aGlsZSB1bnNlbGVjdGluZyBhbnkgbGF5ZXIgYWxyZWFkeSBzZWxlY3RlZCBpbiBhbm90aGVyIGdyb3VwLlxuICAgKiBUaGlzIGNvdWxkIGJlIHVzZWZ1bCB0byBkaXNwbGF5IHNvbWUgbGF5ZXIgaW5mbyBiZWZvcmUgYWRkaW5nIGl0LCBmb3IgZXhhbXBsZS5cbiAgICovXG4gIEBJbnB1dCgpIHN0YXRlOiBFbnRpdHlTdGF0ZU1hbmFnZXI8Q2F0YWxvZ0l0ZW0sIENhdGFsb2dJdGVtU3RhdGU+O1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGFkZC9yZW1vdmUgYnV0dG9uIG9mIHRoZSBncm91cCBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KCkgYWRkZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBhZGRlZDogYm9vbGVhbjtcbiAgICBncm91cDogQ2F0YWxvZ0l0ZW1Hcm91cDtcbiAgfT4oKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBhZGQvcmVtb3ZlIGJ1dHRvbiBvZiBhIGxheWVyIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKSBsYXllckFkZGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgYWRkZWQ6IGJvb2xlYW47XG4gICAgbGF5ZXI6IENhdGFsb2dJdGVtTGF5ZXI7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAudGl0bGU7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0b3JlLmxvYWQodGhpcy5ncm91cC5pdGVtcyk7XG4gICAgdGhpcy5ldmFsdWF0ZUFkZGVkKCk7XG4gICAgdGhpcy5ldmFsdWF0ZURpc2FibGVkKHRoaXMuY29sbGFwc2VkKTtcbiAgICBpZiAodGhpcy5ncm91cC5zb3J0RGlyZWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3RvcmUudmlldy5zb3J0KHtcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmdyb3VwLnNvcnREaXJlY3Rpb24sXG4gICAgICAgIHZhbHVlQWNjZXNzb3I6IChpdGVtOiBDYXRhbG9nSXRlbSkgPT4gaXRlbS50aXRsZVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0b3JlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGlzR3JvdXAoaXRlbTogQ2F0YWxvZ0l0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS50eXBlID09PSBDYXRhbG9nSXRlbVR5cGUuR3JvdXA7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBpc0xheWVyKGl0ZW06IENhdGFsb2dJdGVtKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW0udHlwZSA9PT0gQ2F0YWxvZ0l0ZW1UeXBlLkxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIHRvZ2dsZSBidXR0b24gY2xpY2ssIGVtaXQgdGhlIGFkZGVkIGNoYW5nZSBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uVG9nZ2xlQ2xpY2soKSB7XG4gICAgdGhpcy5hZGRlZCQudmFsdWUgPyB0aGlzLnJlbW92ZSgpIDogdGhpcy5hZGQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiB0b2dnbGUgYnV0dG9uIGNsaWNrLCBlbWl0IHRoZSBhZGRlZCBjaGFuZ2UgZXZlbnRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvblRvZ2dsZUNvbGxhcHNlZChjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmV2YWx1YXRlRGlzYWJsZWQoY29sbGFwc2VkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgbGF5ZXIgaXMgYWRkZWQgb3IgcmVtb3ZlZCwgZXZhbHVhdGUgaWYgYWxsIHRoZSBsYXllcnMgb2YgdGhlIGdyb3VwXG4gICAqIGFyZSBub3cgYWRkZWQgb3IgcmVtb3ZlZC4gSWYgc28sIGNvbnNpZGVyIHRoYXQgdGhlIGdyb3VwIGl0c2VsZiBpcyBhZGRlZFxuICAgKiBvciByZW1vdmVkLlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIGV2ZW50IExheWVyIGFkZGVkIGNoYW5nZSBldmVudFxuICAgKi9cbiAgb25MYXllckFkZGVkQ2hhbmdlKGV2ZW50OiB7IGFkZGVkOiBib29sZWFuOyBsYXllcjogQ2F0YWxvZ0l0ZW1MYXllciB9KSB7XG4gICAgdGhpcy5sYXllckFkZGVkQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMudHJ5VG9nZ2xlR3JvdXAoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgYWRkZWQgY2hhbmdlIGV2ZW50IHdpdGggYWRkZWQgPSB0cnVlXG4gICAqL1xuICBwcml2YXRlIGFkZCgpIHtcbiAgICB0aGlzLmFkZGVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuYWRkZWRDaGFuZ2UuZW1pdCh7XG4gICAgICBhZGRlZDogdHJ1ZSxcbiAgICAgIGdyb3VwOiB0aGlzLmdyb3VwXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdCBhZGRlZCBjaGFuZ2UgZXZlbnQgd2l0aCBhZGRlZCA9IHRydWVcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlKCkge1xuICAgIHRoaXMuYWRkZWQkLm5leHQoZmFsc2UpO1xuICAgIHRoaXMuYWRkZWRDaGFuZ2UuZW1pdCh7XG4gICAgICBhZGRlZDogZmFsc2UsXG4gICAgICBncm91cDogdGhpcy5ncm91cFxuICAgIH0pO1xuICB9XG5cbiAgb25MYXllclByZXZpZXcoZXZlbnQpIHtcbiAgICB0aGlzLnByZXZpZXckLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGFsbCB0aGUgbGF5ZXJzIG9mIHRoZSBncm91cCBhZGRlZCBvciByZW1vdmVkLCBhZGQgb3IgcmVtb3ZlIHRoZSBncm91cCBpdHNlbGYuXG4gICAqIEBwYXJhbSBldmVudCBUaGUgbGFzdCBsYXllciBhZGRlZCBjaGFuZ2UgZXZlbnQgdG8gb2NjdXJcbiAgICovXG4gIHByaXZhdGUgdHJ5VG9nZ2xlR3JvdXAoZXZlbnQ6IHsgYWRkZWQ6IGJvb2xlYW47IGxheWVyOiBDYXRhbG9nSXRlbUxheWVyIH0pIHtcbiAgICBjb25zdCBhZGRlZCA9IGV2ZW50LmFkZGVkO1xuICAgIGNvbnN0IGxheWVyID0gZXZlbnQubGF5ZXI7XG5cbiAgICBjb25zdCBsYXllcnNBZGRlZCA9IHRoaXMuc3RvcmUudmlld1xuICAgICAgLmFsbCgpXG4gICAgICAuZmlsdGVyKChpdGVtOiBDYXRhbG9nSXRlbSkgPT4gaXRlbS5pZCAhPT0gbGF5ZXIuaWQpXG4gICAgICAubWFwKChpdGVtOiBDYXRhbG9nSXRlbSkgPT4gdGhpcy5zdGF0ZS5nZXQoaXRlbSkuYWRkZWQgfHwgZmFsc2UpO1xuXG4gICAgaWYgKGxheWVyc0FkZGVkLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09PSBhZGRlZCkpIHtcbiAgICAgIGFkZGVkID8gdGhpcy5hZGQoKSA6IHRoaXMucmVtb3ZlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFkZGVkJC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRlZCQubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBldmFsdWF0ZUFkZGVkKCkge1xuICAgIGNvbnN0IGFkZGVkID0gdGhpcy5zdG9yZS5hbGwoKS5ldmVyeSgoaXRlbTogQ2F0YWxvZ0l0ZW0pID0+IHtcbiAgICAgIHJldHVybiAodGhpcy5zdGF0ZS5nZXQoaXRlbSkuYWRkZWQgfHwgZmFsc2UpID09PSB0cnVlO1xuICAgIH0pO1xuICAgIHRoaXMuYWRkZWQkLm5leHQoYWRkZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBldmFsdWF0ZURpc2FibGVkKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnRvZ2dsZUNvbGxhcHNlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGRpc2FibGVkID0gY29sbGFwc2VkO1xuICAgIH1cbiAgICB0aGlzLmRpc2FibGVkJC5uZXh0KGRpc2FibGVkKTtcbiAgfVxuXG4gIG9uVGl0bGVDbGljaygpIHtcbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgfVxufVxuIiwiPG1hdC1saXN0LWl0ZW0+XG4gIDxtYXQtaWNvblxuICAgIG1hdC1saXN0LWF2YXRhclxuICAgIHN2Z0ljb249XCJjaGV2cm9uLXVwXCJcbiAgICBpZ29Db2xsYXBzZVxuICAgIGNsYXNzPVwiaWdvLWNoZXZyb25cIlxuICAgIFt0YXJnZXRdPVwiaXRlbXNcIlxuICAgIFtjb2xsYXBzZWRdPVwiY29sbGFwc2VkXCJcbiAgICAodG9nZ2xlKT1cIm9uVG9nZ2xlQ29sbGFwc2VkKCRldmVudClcIj5cbiAgPC9tYXQtaWNvbj5cblxuICA8aDQgY2xhc3M9XCJpZ28tY2F0YWxvZy1ncm91cC10aXRsZVwiIGlkPVwiY2F0YWxvZy1ncm91cC10aXRsZVwiIG1hdC1saW5lIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIiBbbWF0VG9vbHRpcF09XCJ0aXRsZVwiIChjbGljayk9XCJvblRpdGxlQ2xpY2soKVwiPnt7dGl0bGV9fTwvaDQ+XG5cbiAgPGJ1dHRvbiAqbmdJZj1cImdyb3VwLmV4dGVybmFsUHJvdmlkZXJcIlxuICAgIGRpc2FibGVkPVwidHJ1ZVwiXG4gICAgbWF0LWljb24tYnV0dG9uPlxuICAgIDxtYXQtaWNvblxuICAgICAgY2xhc3M9XCJpZ28tY2F0YWxvZ2dyb3VwLWV4dGVybmFsLWljb25cIlxuICAgICAgKm5nSWY9XCJncm91cC5leHRlcm5hbFByb3ZpZGVyXCJcbiAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmNhdGFsb2cuZXh0ZXJuYWxQcm92aWRlci5ncm91cCcgfCB0cmFuc2xhdGVcIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgc3ZnSWNvbj1cImVhcnRoLWFycm93LXJpZ2h0XCI+XG4gICAgPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihhZGRlZCQgfCBhc3luYykgJiYgKHByZXZpZXckIHwgYXN5bmMpID09PSBmYWxzZTsgZWxzZSBub3RhZGRlZFwiPlxuICAgIDxidXR0b25cbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uY2F0YWxvZy5ncm91cC5yZW1vdmVGcm9tTWFwJyB8IHRyYW5zbGF0ZVwiXG4gICAgICBjb2xvcj1cIndhcm5cIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkJCB8IGFzeW5jXCJcbiAgICAgIChjbGljayk9XCJvblRvZ2dsZUNsaWNrKClcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiZGVsZXRlXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLXRlbXBsYXRlICNub3RhZGRlZD5cbiAgICA8YnV0dG9uXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmNhdGFsb2cuZ3JvdXAuYWRkVG9NYXAnIHwgdHJhbnNsYXRlXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCQgfCBhc3luY1wiXG4gICAgICAoY2xpY2spPVwib25Ub2dnbGVDbGljaygpXCI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cInBsdXNcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L25nLXRlbXBsYXRlPlxuPC9tYXQtbGlzdC1pdGVtPlxuXG48ZGl2ICNpdGVtcz5cbiAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pdGVtIFtuZ0Zvck9mXT1cInN0b3JlLnZpZXcuYWxsJCgpIHwgYXN5bmNcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNHcm91cChpdGVtKVwiPlxuICAgICAgPCEtLSB0b2RvOiBhZGQgZGlzcGxheSBhbnMgbWFuYWdlIENhdGFsb2dJdGVtR3JvdXAgLS0+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTGF5ZXIoaXRlbSlcIj5cbiAgICAgIDxpZ28tY2F0YWxvZy1icm93c2VyLWxheWVyXG4gICAgICAgIGlnb0xpc3RJdGVtXG4gICAgICAgIFtsYXllcl09XCJpdGVtXCJcbiAgICAgICAgW3Jlc29sdXRpb25dPVwicmVzb2x1dGlvblwiXG4gICAgICAgIFtjYXRhbG9nQWxsb3dMZWdlbmRdPVwiY2F0YWxvZ0FsbG93TGVnZW5kXCJcbiAgICAgICAgW2FkZGVkXT1cInN0YXRlLmdldChpdGVtKS5hZGRlZFwiXG4gICAgICAgIChhZGRlZExheWVySXNQcmV2aWV3KT1cIm9uTGF5ZXJQcmV2aWV3KCRldmVudClcIlxuICAgICAgICAoYWRkZWRDaGFuZ2UpPVwib25MYXllckFkZGVkQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIDwvaWdvLWNhdGFsb2ctYnJvd3Nlci1sYXllcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuIl19