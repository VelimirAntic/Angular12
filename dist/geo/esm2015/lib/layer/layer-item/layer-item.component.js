import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { layerIsQueryable } from '../../query/shared/query.utils';
import { TooltipType } from '../shared/layers';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
function LayerItemComponent_mat_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 9);
    i0.ɵɵlistener("change", function LayerItemComponent_mat_checkbox_1_Template_mat_checkbox_change_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.check(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r0.layerCheck);
} }
const _c0 = function (a0) { return { disabled: a0 }; };
function LayerItemComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function LayerItemComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.toggleVisibility(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 11);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r1.layer.visible ? "primary" : "default")("matTooltip", ctx_r1.layer.visible ? i0.ɵɵpipeBind1(1, 5, "igo.geo.layer.hideLayer") : i0.ɵɵpipeBind1(2, 7, "igo.geo.layer.showLayer"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matBadgeHidden", i0.ɵɵpipeBind1(4, 9, ctx_r1.queryBadgeHidden$))("ngClass", i0.ɵɵpureFunction1(15, _c0, i0.ɵɵpipeBind1(5, 11, ctx_r1.inResolutionRange$) === false))("svgIcon", i0.ɵɵpipeBind1(6, 13, ctx_r1.layer.visible$) ? "eye" : "eye-off");
} }
function LayerItemComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function LayerItemComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.toggleVisibility(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 11);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r2.layer.visible ? "primary" : "default")("matTooltip", ctx_r2.layer.visible ? i0.ɵɵpipeBind1(1, 5, "igo.geo.layer.hideLayer") : i0.ɵɵpipeBind1(2, 7, "igo.geo.layer.showLayer"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matBadgeHidden", i0.ɵɵpipeBind1(4, 9, ctx_r2.queryBadgeHidden$))("ngClass", i0.ɵɵpureFunction1(13, _c0, i0.ɵɵpipeBind1(5, 11, ctx_r2.inResolutionRange$) === false))("svgIcon", ctx_r2.layer.visible ? "eye" : "eye-off");
} }
function LayerItemComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function LayerItemComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.toggleLayerTool(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.layer.moreOptions"));
} }
function LayerItemComponent_igo_layer_legend_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-layer-legend", 15);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("layer", ctx_r5.layer)("updateLegendOnResolutionChange", ctx_r5.updateLegendOnResolutionChange);
} }
export class LayerItemComponent {
    constructor(networkService, renderer, elRef, cdRef) {
        this.networkService = networkService;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.focusedCls = 'igo-layer-item-focused';
        this.layerTool$ = new BehaviorSubject(false);
        this.showLegend$ = new BehaviorSubject(true);
        this.inResolutionRange$ = new BehaviorSubject(true);
        this.queryBadgeHidden$ = new BehaviorSubject(true);
        this._selectAll = false;
        this.layers$ = new BehaviorSubject(undefined);
        this.toggleLegendOnVisibilityChange = false;
        this.expandLegendIfVisible = false;
        this.updateLegendOnResolutionChange = false;
        this.orderable = true;
        this.lowerDisabled = false;
        this.raiseDisabled = false;
        this.queryBadge = false;
        this.action = new EventEmitter(undefined);
        this.checkbox = new EventEmitter();
    }
    get activeLayer() {
        return this._activeLayer;
    }
    set activeLayer(value) {
        if (value && this.layer && value.id === this.layer.id && !this.selectionMode) {
            this.layerTool$.next(true);
            this.renderer.addClass(this.elRef.nativeElement, this.focusedCls);
        }
        else {
            this.renderer.removeClass(this.elRef.nativeElement, this.focusedCls);
        }
    }
    get selectAll() {
        return this._selectAll;
    }
    set selectAll(value) {
        this._selectAll = value;
        if (value === true) {
            this.layerCheck = true;
        }
    }
    get layer() {
        return this._layer;
    }
    set layer(value) {
        this._layer = value;
        this.layers$.next(value);
    }
    get opacity() {
        return this.layer.opacity * 100;
    }
    set opacity(opacity) {
        this.layer.opacity = opacity / 100;
    }
    ngOnInit() {
        if (this.layer.visible &&
            this.expandLegendIfVisible &&
            this.layer.firstLoadComponent === true) {
            this.layer.firstLoadComponent = false;
            this.layer.legendCollapsed = false;
        }
        this.toggleLegend(this.layer.legendCollapsed);
        this.updateQueryBadge();
        const resolution$ = this.layer.map.viewController.resolution$;
        this.resolution$$ = resolution$.subscribe(() => {
            this.onResolutionChange();
        });
        this.tooltipText = this.computeTooltip();
        this.network$$ = this.networkService.currentState().subscribe((state) => {
            this.state = state;
            this.onResolutionChange();
        });
        this.layers$$ = this.layers$.subscribe(() => {
            if (this.layer && this.layer.options.active) {
                this.layerTool$.next(true);
                this.renderer.addClass(this.elRef.nativeElement, this.focusedCls);
            }
        });
        if (this.changeDetection) {
            this.changeDetection.subscribe(() => this.cdRef.detectChanges());
        }
    }
    ngOnDestroy() {
        this.resolution$$.unsubscribe();
        this.network$$.unsubscribe();
        this.layers$$.unsubscribe();
    }
    toggleLegend(collapsed) {
        this.layer.legendCollapsed = collapsed;
        this.showLegend$.next(!collapsed);
    }
    toggleLegendOnClick() {
        this.toggleLegend(this.showLegend$.value);
    }
    toggleVisibility() {
        this.layer.visible = !this.layer.visible;
        if (this.toggleLegendOnVisibilityChange) {
            this.toggleLegend(!this.layer.visible);
        }
        this.updateQueryBadge();
    }
    computeTooltip() {
        const layerOptions = this.layer.options;
        if (!layerOptions.tooltip) {
            return this.layer.title;
        }
        const layerTooltip = layerOptions.tooltip;
        const layerMetadata = layerOptions.metadata;
        switch (layerOptions.tooltip.type) {
            case TooltipType.TITLE:
                return this.layer.title;
            case TooltipType.ABSTRACT:
                if (layerMetadata && layerMetadata.abstract) {
                    return layerMetadata.abstract;
                }
                else {
                    return this.layer.title;
                }
            case TooltipType.CUSTOM:
                if (layerTooltip && layerTooltip.text) {
                    return layerTooltip.text;
                }
                else {
                    return this.layer.title;
                }
            default:
                return this.layer.title;
        }
    }
    onResolutionChange() {
        const inResolutionRange = this.layer.isInResolutionsRange;
        if (inResolutionRange === false &&
            this.updateLegendOnResolutionChange === true) {
            this.toggleLegend(true);
        }
        this.inResolutionRange$.next(inResolutionRange);
    }
    updateQueryBadge() {
        const hidden = this.queryBadge === false ||
            this.layer.visible === false ||
            !layerIsQueryable(this.layer);
        this.queryBadgeHidden$.next(hidden);
    }
    toggleLayerTool() {
        this.layerTool$.next(!this.layerTool$.getValue());
        if (this.layerTool$.getValue() === true) {
            this.renderer.addClass(this.elRef.nativeElement, this.focusedCls);
        }
        else {
            this.renderer.removeClass(this.elRef.nativeElement, this.focusedCls);
        }
        this.action.emit(this.layer);
    }
    check() {
        this.layerCheck = !this.layerCheck;
        this.checkbox.emit({ layer: this.layer, check: this.layerCheck });
    }
}
LayerItemComponent.ɵfac = function LayerItemComponent_Factory(t) { return new (t || LayerItemComponent)(i0.ɵɵdirectiveInject(i1.NetworkService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
LayerItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerItemComponent, selectors: [["igo-layer-item"]], inputs: { activeLayer: "activeLayer", selectAll: "selectAll", layerCheck: "layerCheck", layer: "layer", toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendIfVisible: "expandLegendIfVisible", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", orderable: "orderable", lowerDisabled: "lowerDisabled", raiseDisabled: "raiseDisabled", queryBadge: "queryBadge", selectionMode: "selectionMode", changeDetection: "changeDetection" }, outputs: { action: "action", checkbox: "checkbox" }, decls: 11, vars: 9, consts: [[1, "igo-layer-list-item"], ["class", "layerCheck", "mat-list-icon", "", 3, "checked", "change", 4, "ngIf"], ["matLine", "", "matTooltipShowDelay", "500", 1, "igo-layer-title", 3, "matTooltip", "click"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click", 4, "ngIf"], ["class", "selection-eye", "mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click", 4, "ngIf"], ["class", "actions-button", "tooltip-position", "below", "matTooltipShowDelay", "500", "mat-icon-button", "", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], [1, "igo-layer-legend-container"], ["legend", ""], [3, "layer", "updateLegendOnResolutionChange", 4, "ngIf"], ["mat-list-icon", "", 1, "layerCheck", 3, "checked", "change"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click"], ["matBadge", "?", "matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "after", 3, "matBadgeHidden", "ngClass", "svgIcon"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "selection-eye", 3, "color", "matTooltip", "click"], ["tooltip-position", "below", "matTooltipShowDelay", "500", "mat-icon-button", "", "color", "primary", 1, "actions-button", 3, "matTooltip", "click"], ["svgIcon", "dots-horizontal"], [3, "layer", "updateLegendOnResolutionChange"]], template: function LayerItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list-item", 0);
        i0.ɵɵtemplate(1, LayerItemComponent_mat_checkbox_1_Template, 1, 1, "mat-checkbox", 1);
        i0.ɵɵelementStart(2, "h4", 2);
        i0.ɵɵlistener("click", function LayerItemComponent_Template_h4_click_2_listener() { return ctx.toggleLegendOnClick(); });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, LayerItemComponent_button_4_Template, 7, 17, "button", 3);
        i0.ɵɵtemplate(5, LayerItemComponent_button_5_Template, 6, 15, "button", 4);
        i0.ɵɵtemplate(6, LayerItemComponent_button_6_Template, 3, 3, "button", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 6, 7);
        i0.ɵɵtemplate(9, LayerItemComponent_igo_layer_legend_9_Template, 1, 2, "igo-layer-legend", 8);
        i0.ɵɵpipe(10, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectionMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.tooltipText);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.layer.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.selectionMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectionMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.selectionMode);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(10, 7, ctx.showLegend$));
    } }, styles: ["[_nghost-%COMP%]{overflow:hidden}mat-list-item[_ngcontent-%COMP%]     .mat-list-item-content .layerCheck{align-self:baseline;width:16px;padding-right:0}.igo-layer-list-item[_ngcontent-%COMP%]{height:46px;clear:both}.igo-layer-title[_ngcontent-%COMP%]{cursor:pointer}.igo-layer-legend-container[_ngcontent-%COMP%]{padding-left:18px;width:calc(100% - 18px)}mat-icon.disabled[_ngcontent-%COMP%]{color:#00000061}mat-icon[matBadge][_ngcontent-%COMP%]     .mat-badge-content{font-size:12px}.selection-eye[_ngcontent-%COMP%]{padding-right:45px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-layer-item',
                templateUrl: './layer-item.component.html',
                styleUrls: ['./layer-item.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.NetworkService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { activeLayer: [{
            type: Input
        }], selectAll: [{
            type: Input
        }], layerCheck: [{
            type: Input
        }], layer: [{
            type: Input
        }], toggleLegendOnVisibilityChange: [{
            type: Input
        }], expandLegendIfVisible: [{
            type: Input
        }], updateLegendOnResolutionChange: [{
            type: Input
        }], orderable: [{
            type: Input
        }], lowerDisabled: [{
            type: Input
        }], raiseDisabled: [{
            type: Input
        }], queryBadge: [{
            type: Input
        }], selectionMode: [{
            type: Input
        }], changeDetection: [{
            type: Input
        }], action: [{
            type: Output
        }], checkbox: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9sYXllci9sYXllci1pdGVtL2xheWVyLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvbGF5ZXItaXRlbS9sYXllci1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLHVCQUF1QixFQUN2QixNQUFNLEVBQ04sWUFBWSxFQUliLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7SUNmcEQsdUNBSXlCO0lBRHZCLGtNQUFrQjtJQUVwQixpQkFBZTs7O0lBRGIsMkNBQXNCOzs7OztJQUl4QixrQ0FTK0I7SUFBN0IsK0xBQTRCOzs7SUFDNUIsK0JBUVc7Ozs7SUFDYixpQkFBUzs7O0lBakJQLG9FQUErQyx3SUFBQTtJQWE3QyxlQUE0QztJQUE1QywrRUFBNEMsb0dBQUEsNkVBQUE7Ozs7SUFNaEQsa0NBUzZCO0lBQTdCLGtNQUE0Qjs7O0lBQzVCLCtCQVFXOzs7SUFDYixpQkFBUzs7O0lBakJQLG9FQUErQyx3SUFBQTtJQWE3QyxlQUE0QztJQUE1QywrRUFBNEMsb0dBQUEscURBQUE7Ozs7SUFNOUMsa0NBTzhCO0lBQTVCLGlNQUEyQjs7SUFDM0IsK0JBQStDO0lBQ2pELGlCQUFTOztJQUxQLDhFQUF1RDs7O0lBU3pELHVDQUltQjs7O0lBRmpCLG9DQUFlLHlFQUFBOztBRHpDbkIsTUFBTSxPQUFPLGtCQUFrQjtJQTBGN0IsWUFD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TztRQUVQLHlFQVNTO1FBQ1gsaUJBQWdCO1FBRWhCLGlDQUFnRDtRQUM5Qyw2RkFJbUI7O1FBQ3JCLGlCQUFNOztRQXBFVyxlQUFtQjtRQUFuQix3Q0FBbUI7UUFNa0MsZUFBMEI7UUFBMUIsNENBQTBCO1FBQTJCLGVBQWU7UUFBZixxQ0FBZTtRQUUvSCxlQUFvQjtRQUFwQix5Q0FBb0I7UUFxQnBCLGVBQW1CO1FBQW5CLHdDQUFtQjtRQXFCbkIsZUFBb0I7UUFBcEIseUNBQW9CO1FBYzFCLGVBQXlCO1FBQXpCLDZEQUF5Qjs7dUZEeENqQixrQkFBa0I7Y0FOOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtrSkFLSyxXQUFXO2tCQURkLEtBQUs7WUEyQkYsU0FBUztrQkFEWixLQUFLO1lBWUcsVUFBVTtrQkFBbEIsS0FBSztZQVNGLEtBQUs7a0JBRFIsS0FBSztZQVVHLDhCQUE4QjtrQkFBdEMsS0FBSztZQUVHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUVHLDhCQUE4QjtrQkFBdEMsS0FBSztZQUVHLFNBQVM7a0JBQWpCLEtBQUs7WUFFRyxhQUFhO2tCQUFyQixLQUFLO1lBRUcsYUFBYTtrQkFBckIsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFFRyxhQUFhO2tCQUFyQixLQUFLO1lBRUcsZUFBZTtrQkFBdkIsS0FBSztZQVNJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWV0YWRhdGFMYXllck9wdGlvbnMgfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9zaGFyZWQvbWV0YWRhdGEuaW50ZXJmYWNlJztcbmltcG9ydCB7IGxheWVySXNRdWVyeWFibGUgfSBmcm9tICcuLi8uLi9xdWVyeS9zaGFyZWQvcXVlcnkudXRpbHMnO1xuaW1wb3J0IHsgTGF5ZXIsIFRvb2x0aXBUeXBlIH0gZnJvbSAnLi4vc2hhcmVkL2xheWVycyc7XG5pbXBvcnQgeyBOZXR3b3JrU2VydmljZSwgQ29ubmVjdGlvblN0YXRlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1sYXllci1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheWVyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYXllci1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExheWVySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGZvY3VzZWRDbHMgPSAnaWdvLWxheWVyLWl0ZW0tZm9jdXNlZCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZUxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVMYXllcjtcbiAgfVxuICBzZXQgYWN0aXZlTGF5ZXIodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5sYXllciAmJiB2YWx1ZS5pZCA9PT0gdGhpcy5sYXllci5pZCAmJiAhdGhpcy5zZWxlY3Rpb25Nb2RlKSB7XG4gICAgICB0aGlzLmxheWVyVG9vbCQubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmZvY3VzZWRDbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5mb2N1c2VkQ2xzKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfYWN0aXZlTGF5ZXI7XG5cbiAgbGF5ZXJUb29sJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgc2hvd0xlZ2VuZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XG5cbiAgaW5SZXNvbHV0aW9uUmFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xuXG4gIHF1ZXJ5QmFkZ2VIaWRkZW4kOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xuXG4gIHRvb2x0aXBUZXh0OiBzdHJpbmc7XG5cbiAgc3RhdGU6IENvbm5lY3Rpb25TdGF0ZTtcblxuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RBbGw7XG4gIH1cbiAgc2V0IHNlbGVjdEFsbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlbGVjdEFsbCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5sYXllckNoZWNrID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2VsZWN0QWxsID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbGF5ZXJDaGVjaztcblxuICBwcml2YXRlIHJlc29sdXRpb24kJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG5ldHdvcmskJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGxheWVycyQkOiBTdWJzY3JpcHRpb247XG5cbiAgbGF5ZXJzJDogQmVoYXZpb3JTdWJqZWN0PExheWVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGF5ZXI+KHVuZGVmaW5lZCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXllcjtcbiAgfVxuICBzZXQgbGF5ZXIodmFsdWUpIHtcbiAgICB0aGlzLl9sYXllciA9IHZhbHVlO1xuICAgIHRoaXMubGF5ZXJzJC5uZXh0KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9sYXllcjtcblxuICBASW5wdXQoKSB0b2dnbGVMZWdlbmRPblZpc2liaWxpdHlDaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBleHBhbmRMZWdlbmRJZlZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSB1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBvcmRlcmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGxvd2VyRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSByYWlzZURpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgcXVlcnlCYWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNlbGVjdGlvbk1vZGU7XG5cbiAgQElucHV0KCkgY2hhbmdlRGV0ZWN0aW9uO1xuXG4gIGdldCBvcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmxheWVyLm9wYWNpdHkgKiAxMDA7XG4gIH1cbiAgc2V0IG9wYWNpdHkob3BhY2l0eTogbnVtYmVyKSB7XG4gICAgdGhpcy5sYXllci5vcGFjaXR5ID0gb3BhY2l0eSAvIDEwMDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBhY3Rpb246IEV2ZW50RW1pdHRlcjxMYXllcj4gPSBuZXcgRXZlbnRFbWl0dGVyPExheWVyPih1bmRlZmluZWQpO1xuICBAT3V0cHV0KCkgY2hlY2tib3ggPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBsYXllcjogTGF5ZXI7XG4gICAgY2hlY2s6IGJvb2xlYW47XG4gIH0+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZXR3b3JrU2VydmljZTogTmV0d29ya1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5sYXllci52aXNpYmxlICYmXG4gICAgICB0aGlzLmV4cGFuZExlZ2VuZElmVmlzaWJsZSAmJlxuICAgICAgdGhpcy5sYXllci5maXJzdExvYWRDb21wb25lbnQgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHRoaXMubGF5ZXIuZmlyc3RMb2FkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLmxheWVyLmxlZ2VuZENvbGxhcHNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZUxlZ2VuZCh0aGlzLmxheWVyLmxlZ2VuZENvbGxhcHNlZCk7XG4gICAgdGhpcy51cGRhdGVRdWVyeUJhZGdlKCk7XG5cbiAgICBjb25zdCByZXNvbHV0aW9uJCA9IHRoaXMubGF5ZXIubWFwLnZpZXdDb250cm9sbGVyLnJlc29sdXRpb24kO1xuICAgIHRoaXMucmVzb2x1dGlvbiQkID0gcmVzb2x1dGlvbiQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub25SZXNvbHV0aW9uQ2hhbmdlKCk7XG4gICAgfSk7XG4gICAgdGhpcy50b29sdGlwVGV4dCA9IHRoaXMuY29tcHV0ZVRvb2x0aXAoKTtcblxuICAgIHRoaXMubmV0d29yayQkID0gdGhpcy5uZXR3b3JrU2VydmljZS5jdXJyZW50U3RhdGUoKS5zdWJzY3JpYmUoKHN0YXRlOiBDb25uZWN0aW9uU3RhdGUpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIHRoaXMub25SZXNvbHV0aW9uQ2hhbmdlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxheWVycyQkID0gdGhpcy5sYXllcnMkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5sYXllciAmJiB0aGlzLmxheWVyLm9wdGlvbnMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMubGF5ZXJUb29sJC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5mb2N1c2VkQ2xzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmNoYW5nZURldGVjdGlvbikge1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24uc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJlc29sdXRpb24kJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubmV0d29yayQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5sYXllcnMkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgdG9nZ2xlTGVnZW5kKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHRoaXMubGF5ZXIubGVnZW5kQ29sbGFwc2VkID0gY29sbGFwc2VkO1xuICAgIHRoaXMuc2hvd0xlZ2VuZCQubmV4dCghY29sbGFwc2VkKTtcbiAgfVxuXG4gIHRvZ2dsZUxlZ2VuZE9uQ2xpY2soKSB7XG4gICAgdGhpcy50b2dnbGVMZWdlbmQodGhpcy5zaG93TGVnZW5kJC52YWx1ZSk7XG4gIH1cblxuICB0b2dnbGVWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMubGF5ZXIudmlzaWJsZSA9ICF0aGlzLmxheWVyLnZpc2libGU7XG4gICAgaWYgKHRoaXMudG9nZ2xlTGVnZW5kT25WaXNpYmlsaXR5Q2hhbmdlKSB7XG4gICAgICB0aGlzLnRvZ2dsZUxlZ2VuZCghdGhpcy5sYXllci52aXNpYmxlKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVRdWVyeUJhZGdlKCk7XG4gIH1cblxuICBjb21wdXRlVG9vbHRpcCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxheWVyT3B0aW9ucyA9IHRoaXMubGF5ZXIub3B0aW9ucztcbiAgICBpZiAoIWxheWVyT3B0aW9ucy50b29sdGlwKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXllci50aXRsZTtcbiAgICB9XG4gICAgY29uc3QgbGF5ZXJUb29sdGlwID0gbGF5ZXJPcHRpb25zLnRvb2x0aXA7XG4gICAgY29uc3QgbGF5ZXJNZXRhZGF0YSA9IChsYXllck9wdGlvbnMgYXMgTWV0YWRhdGFMYXllck9wdGlvbnMpLm1ldGFkYXRhO1xuICAgIHN3aXRjaCAobGF5ZXJPcHRpb25zLnRvb2x0aXAudHlwZSkge1xuICAgICAgY2FzZSBUb29sdGlwVHlwZS5USVRMRTpcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXIudGl0bGU7XG4gICAgICBjYXNlIFRvb2x0aXBUeXBlLkFCU1RSQUNUOlxuICAgICAgICBpZiAobGF5ZXJNZXRhZGF0YSAmJiBsYXllck1ldGFkYXRhLmFic3RyYWN0KSB7XG4gICAgICAgICAgcmV0dXJuIGxheWVyTWV0YWRhdGEuYWJzdHJhY3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXIudGl0bGU7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgVG9vbHRpcFR5cGUuQ1VTVE9NOlxuICAgICAgICBpZiAobGF5ZXJUb29sdGlwICYmIGxheWVyVG9vbHRpcC50ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIGxheWVyVG9vbHRpcC50ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxheWVyLnRpdGxlO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5sYXllci50aXRsZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uUmVzb2x1dGlvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBpblJlc29sdXRpb25SYW5nZSA9IHRoaXMubGF5ZXIuaXNJblJlc29sdXRpb25zUmFuZ2U7XG4gICAgaWYgKFxuICAgICAgaW5SZXNvbHV0aW9uUmFuZ2UgPT09IGZhbHNlICYmXG4gICAgICB0aGlzLnVwZGF0ZUxlZ2VuZE9uUmVzb2x1dGlvbkNoYW5nZSA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgdGhpcy50b2dnbGVMZWdlbmQodHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuaW5SZXNvbHV0aW9uUmFuZ2UkLm5leHQoaW5SZXNvbHV0aW9uUmFuZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVRdWVyeUJhZGdlKCkge1xuICAgIGNvbnN0IGhpZGRlbiA9XG4gICAgICB0aGlzLnF1ZXJ5QmFkZ2UgPT09IGZhbHNlIHx8XG4gICAgICB0aGlzLmxheWVyLnZpc2libGUgPT09IGZhbHNlIHx8XG4gICAgICAhbGF5ZXJJc1F1ZXJ5YWJsZSh0aGlzLmxheWVyKTtcbiAgICB0aGlzLnF1ZXJ5QmFkZ2VIaWRkZW4kLm5leHQoaGlkZGVuKTtcbiAgfVxuXG4gIHRvZ2dsZUxheWVyVG9vbCgpIHtcbiAgICB0aGlzLmxheWVyVG9vbCQubmV4dCghdGhpcy5sYXllclRvb2wkLmdldFZhbHVlKCkpO1xuICAgIGlmICh0aGlzLmxheWVyVG9vbCQuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZm9jdXNlZENscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmZvY3VzZWRDbHMpO1xuICAgIH1cbiAgICB0aGlzLmFjdGlvbi5lbWl0KHRoaXMubGF5ZXIpO1xuICB9XG5cbiAgcHVibGljIGNoZWNrKCkge1xuICAgIHRoaXMubGF5ZXJDaGVjayA9ICF0aGlzLmxheWVyQ2hlY2s7XG4gICAgdGhpcy5jaGVja2JveC5lbWl0KHtsYXllcjogdGhpcy5sYXllciwgY2hlY2s6IHRoaXMubGF5ZXJDaGVja30pO1xuICB9XG59XG4iLCI8bWF0LWxpc3QtaXRlbSBjbGFzcz0gXCJpZ28tbGF5ZXItbGlzdC1pdGVtXCI+XG4gIDxtYXQtY2hlY2tib3ggKm5nSWY9XCJzZWxlY3Rpb25Nb2RlXCJcbiAgICBjbGFzcz1cImxheWVyQ2hlY2tcIlxuICAgIG1hdC1saXN0LWljb25cbiAgICAoY2hhbmdlKT1cImNoZWNrKClcIlxuICAgIFtjaGVja2VkXT1cImxheWVyQ2hlY2tcIj5cbiAgPC9tYXQtY2hlY2tib3g+XG4gIDxoNCAoY2xpY2spPVwidG9nZ2xlTGVnZW5kT25DbGljaygpXCIgbWF0TGluZSBjbGFzcz1cImlnby1sYXllci10aXRsZVwiIFttYXRUb29sdGlwXT1cInRvb2x0aXBUZXh0XCIgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiPnt7bGF5ZXIudGl0bGV9fTwvaDQ+XG5cbiAgPGJ1dHRvbiAqbmdJZj1cIiFzZWxlY3Rpb25Nb2RlXCJcbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICBbY29sb3JdPVwibGF5ZXIudmlzaWJsZSA/ICdwcmltYXJ5JyA6ICdkZWZhdWx0J1wiXG4gICAgY29sbGFwc2libGVCdXR0b25cbiAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgIFttYXRUb29sdGlwXT1cImxheWVyLnZpc2libGUgP1xuICAgICAgICAgICAgICAgICAgKCdpZ28uZ2VvLmxheWVyLmhpZGVMYXllcicgfCB0cmFuc2xhdGUpIDpcbiAgICAgICAgICAgICAgICAgICgnaWdvLmdlby5sYXllci5zaG93TGF5ZXInIHwgdHJhbnNsYXRlKVwiXG4gICAgKGNsaWNrKT1cInRvZ2dsZVZpc2liaWxpdHkoKVwiPlxuICAgIDxtYXQtaWNvblxuICAgICAgbWF0QmFkZ2U9XCI/XCJcbiAgICAgIG1hdEJhZGdlQ29sb3I9XCJhY2NlbnRcIlxuICAgICAgbWF0QmFkZ2VTaXplPVwic21hbGxcIlxuICAgICAgbWF0QmFkZ2VQb3NpdGlvbj1cImFmdGVyXCJcbiAgICAgIFttYXRCYWRnZUhpZGRlbl09XCJxdWVyeUJhZGdlSGlkZGVuJCB8IGFzeW5jXCJcbiAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogKGluUmVzb2x1dGlvblJhbmdlJCB8IGFzeW5jKT09PWZhbHNlfVwiXG4gICAgICBbc3ZnSWNvbl09XCIobGF5ZXIudmlzaWJsZSQgfCBhc3luYykgPyAnZXllJyA6ICdleWUtb2ZmJ1wiPlxuICAgIDwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuXG4gIDxidXR0b24gKm5nSWY9XCJzZWxlY3Rpb25Nb2RlXCIgY2xhc3M9XCJzZWxlY3Rpb24tZXllXCJcbiAgbWF0LWljb24tYnV0dG9uXG4gIFtjb2xvcl09XCJsYXllci52aXNpYmxlID8gJ3ByaW1hcnknIDogJ2RlZmF1bHQnXCJcbiAgY29sbGFwc2libGVCdXR0b25cbiAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gIFttYXRUb29sdGlwXT1cImxheWVyLnZpc2libGUgP1xuICAgICAgICAgICAgICAgICgnaWdvLmdlby5sYXllci5oaWRlTGF5ZXInIHwgdHJhbnNsYXRlKSA6XG4gICAgICAgICAgICAgICAgKCdpZ28uZ2VvLmxheWVyLnNob3dMYXllcicgfCB0cmFuc2xhdGUpXCJcbiAgKGNsaWNrKT1cInRvZ2dsZVZpc2liaWxpdHkoKVwiPlxuICA8bWF0LWljb25cbiAgICBtYXRCYWRnZT1cIj9cIlxuICAgIG1hdEJhZGdlQ29sb3I9XCJhY2NlbnRcIlxuICAgIG1hdEJhZGdlU2l6ZT1cInNtYWxsXCJcbiAgICBtYXRCYWRnZVBvc2l0aW9uPVwiYWZ0ZXJcIlxuICAgIFttYXRCYWRnZUhpZGRlbl09XCJxdWVyeUJhZGdlSGlkZGVuJCB8IGFzeW5jXCJcbiAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IChpblJlc29sdXRpb25SYW5nZSQgfCBhc3luYyk9PT1mYWxzZX1cIlxuICAgIFtzdmdJY29uXT1cImxheWVyLnZpc2libGUgPyAnZXllJyA6ICdleWUtb2ZmJ1wiPlxuICA8L21hdC1pY29uPlxuPC9idXR0b24+XG5cbiAgPGJ1dHRvbiAqbmdJZj1cIiFzZWxlY3Rpb25Nb2RlXCJcbiAgICBjbGFzcz1cImFjdGlvbnMtYnV0dG9uXCJcbiAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgIFttYXRUb29sdGlwXT0gXCInaWdvLmdlby5sYXllci5tb3JlT3B0aW9ucycgfCB0cmFuc2xhdGVcIlxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgKGNsaWNrKT1cInRvZ2dsZUxheWVyVG9vbCgpXCI+XG4gICAgPG1hdC1pY29uIHN2Z0ljb249XCJkb3RzLWhvcml6b250YWxcIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvbWF0LWxpc3QtaXRlbT5cblxuPGRpdiAjbGVnZW5kIGNsYXNzPVwiaWdvLWxheWVyLWxlZ2VuZC1jb250YWluZXJcIj5cbiAgPGlnby1sYXllci1sZWdlbmRcbiAgICAqbmdJZj1cInNob3dMZWdlbmQkIHwgYXN5bmNcIlxuICAgIFtsYXllcl09XCJsYXllclwiXG4gICAgW3VwZGF0ZUxlZ2VuZE9uUmVzb2x1dGlvbkNoYW5nZV09XCJ1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2VcIj5cbiAgPC9pZ28tbGF5ZXItbGVnZW5kPlxuPC9kaXY+XG4iXX0=