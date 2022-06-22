import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { getEntityTitle, getEntityIcon } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { TooltipType } from '../../layer/shared/layers';
import * as i0 from "@angular/core";
import * as i1 from "../../layer/shared/layer.service";
import * as i2 from "@angular/material/list";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "../../metadata/metadata-button/metadata-button.component";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/badge";
import * as i10 from "@igo2/common";
import * as i11 from "../../layer/layer-legend/layer-legend.component";
import * as i12 from "@ngx-translate/core";
function CatalogBrowserLayerComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-icon", 9);
} }
function CatalogBrowserLayerComponent_button_4_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 12);
    i0.ɵɵlistener("click", function CatalogBrowserLayerComponent_button_4_mat_icon_1_Template_mat_icon_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.catalog.externalProvider.layer"));
} }
function CatalogBrowserLayerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵtemplate(1, CatalogBrowserLayerComponent_button_4_mat_icon_1_Template, 2, 3, "mat-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.layer.externalProvider);
} }
function CatalogBrowserLayerComponent_igo_layer_legend_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-layer-legend", 3);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("layer", i0.ɵɵpipeBind1(1, 1, ctx_r3.igoLayer$));
} }
/**
 * Catalog browser layer item
 */
export class CatalogBrowserLayerComponent {
    constructor(layerService) {
        this.layerService = layerService;
        this.inRange$ = new BehaviorSubject(true);
        this.isPreview$ = new BehaviorSubject(false);
        this.layerLegendShown$ = new BehaviorSubject(false);
        this.igoLayer$ = new BehaviorSubject(undefined);
        this.mouseInsideAdd = false;
        this.catalogAllowLegend = false;
        /**
         * Whether the layer is already added to the map
         */
        this.added = false;
        /**
         * Event emitted when the add/remove button is clicked
         */
        this.addedChange = new EventEmitter();
        this.addedLayerIsPreview = new EventEmitter();
    }
    /**
     * @internal
     */
    get title() {
        return getEntityTitle(this.layer);
    }
    /**
     * @internal
     */
    get icon() {
        return getEntityIcon(this.layer) || 'layers';
    }
    ngOnInit() {
        this.isInResolutionsRange();
        this.isPreview$$ = this.isPreview$.subscribe(value => this.addedLayerIsPreview.emit(value));
    }
    ngOnDestroy() {
        this.isPreview$$.unsubscribe();
    }
    computeTitleTooltip() {
        const layerOptions = this.layer.options;
        if (!layerOptions.tooltip) {
            return getEntityTitle(this.layer);
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
    /**
     * On mouse event, mouseenter /mouseleave
     * @internal
     */
    onMouseEvent(event) {
        this.onToggleClick(event);
    }
    askForLegend(event) {
        this.layerLegendShown$.next(!this.layerLegendShown$.value);
        this.layerService.createAsyncLayer(this.layer.options).pipe(first())
            .subscribe(layer => this.igoLayer$.next(layer));
    }
    /**
     * On toggle button click, emit the added change event
     * @internal
     */
    onToggleClick(event) {
        if (typeof this.lastTimeoutRequest !== 'undefined') {
            clearTimeout(this.lastTimeoutRequest);
        }
        if (event.type === 'mouseenter' && this.mouseInsideAdd) {
            return;
        }
        switch (event.type) {
            case 'click':
                if (!this.isPreview$.value) {
                    if (this.added) {
                        this.remove();
                    }
                    else {
                        this.add();
                    }
                }
                this.isPreview$.next(false);
                break;
            case 'mouseenter':
                if (!this.isPreview$.value && !this.added) {
                    this.lastTimeoutRequest = setTimeout(() => {
                        this.add();
                        this.isPreview$.next(true);
                    }, 500);
                }
                this.mouseInsideAdd = true;
                break;
            case 'mouseleave':
                if (this.isPreview$.value) {
                    this.remove();
                    this.isPreview$.next(false);
                }
                this.mouseInsideAdd = false;
                break;
            default:
                break;
        }
    }
    /**
     * Emit added change event with added = true
     */
    add() {
        if (!this.added) {
            this.added = true;
            this.addedChange.emit({ added: true, layer: this.layer });
        }
    }
    /**
     * Emit added change event with added = false
     */
    remove() {
        if (this.added) {
            this.added = false;
            this.addedChange.emit({ added: false, layer: this.layer });
        }
    }
    haveGroup() {
        return !(!this.layer.address || this.layer.address.split('.').length === 1);
    }
    isInResolutionsRange() {
        const minResolution = this.layer.options.minResolution || 0;
        const maxResolution = this.layer.options.maxResolution || Infinity;
        this.inRange$.next(this.resolution >= minResolution && this.resolution <= maxResolution);
        return this.inRange$.value;
    }
    computeTooltip() {
        if (this.added) {
            return this.isPreview$.value
                ? 'igo.geo.catalog.layer.addToMap'
                : this.inRange$.value
                    ? 'igo.geo.catalog.layer.removeFromMap'
                    : 'igo.geo.catalog.layer.removeFromMapOutRange';
        }
        else {
            return this.inRange$.value
                ? 'igo.geo.catalog.layer.addToMap'
                : 'igo.geo.catalog.layer.addToMapOutRange';
        }
    }
}
CatalogBrowserLayerComponent.ɵfac = function CatalogBrowserLayerComponent_Factory(t) { return new (t || CatalogBrowserLayerComponent)(i0.ɵɵdirectiveInject(i1.LayerService)); };
CatalogBrowserLayerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CatalogBrowserLayerComponent, selectors: [["igo-catalog-browser-layer"]], inputs: { resolution: "resolution", catalogAllowLegend: "catalogAllowLegend", layer: "layer", added: "added" }, outputs: { addedChange: "addedChange", addedLayerIsPreview: "addedLayerIsPreview" }, decls: 16, vars: 21, consts: [["mat-list-avatar", "", "svgIcon", "blank", 4, "ngIf"], ["mat-line", "", "matTooltipShowDelay", "500", 3, "ngClass", "matTooltip", "click"], ["disabled", "true", "mat-icon-button", "", 4, "ngIf"], [3, "layer"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "mouseenter", "mouseleave", "click"], ["matBadge", "icon", "igoMatBadgeIcon", "eye-off", "igoMatBadgeInverseColor", "true", "matBadgeDisabled", "true", "matBadgeSize", "small", "matBadgePosition", "after", 3, "matBadgeHidden", "svgIcon"], [1, "igo-cataloglayer-legend-container"], ["legend", ""], [3, "layer", 4, "ngIf"], ["mat-list-avatar", "", "svgIcon", "blank"], ["disabled", "true", "mat-icon-button", ""], ["class", "igo-cataloglayer-external-icon", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", "svgIcon", "earth-arrow-right", 3, "matTooltip", "click", 4, "ngIf"], ["tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", "svgIcon", "earth-arrow-right", 1, "igo-cataloglayer-external-icon", 3, "matTooltip", "click"]], template: function CatalogBrowserLayerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list-item");
        i0.ɵɵtemplate(1, CatalogBrowserLayerComponent_mat_icon_1_Template, 1, 0, "mat-icon", 0);
        i0.ɵɵelementStart(2, "h4", 1);
        i0.ɵɵlistener("click", function CatalogBrowserLayerComponent_Template_h4_click_2_listener($event) { return ctx.askForLegend($event); });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, CatalogBrowserLayerComponent_button_4_Template, 2, 1, "button", 2);
        i0.ɵɵelement(5, "igo-metadata-button", 3);
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("mouseenter", function CatalogBrowserLayerComponent_Template_button_mouseenter_6_listener($event) { return ctx.onMouseEvent($event); })("mouseleave", function CatalogBrowserLayerComponent_Template_button_mouseleave_6_listener($event) { return ctx.onMouseEvent($event); })("click", function CatalogBrowserLayerComponent_Template_button_click_6_listener($event) { return ctx.onToggleClick($event); });
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵpipe(8, "async");
        i0.ɵɵelement(9, "mat-icon", 5);
        i0.ɵɵpipe(10, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 6, 7);
        i0.ɵɵtemplate(13, CatalogBrowserLayerComponent_igo_layer_legend_13_Template, 2, 3, "igo-layer-legend", 8);
        i0.ɵɵpipe(14, "async");
        i0.ɵɵpipe(15, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.haveGroup());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.catalogAllowLegend ? "igo-cataloglayer-title" : "")("matTooltip", ctx.computeTitleTooltip());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layer.externalProvider);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("layer", ctx.layer);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(7, 11, ctx.computeTooltip()))("color", i0.ɵɵpipeBind1(8, 13, ctx.isPreview$) ? "" : ctx.added ? "warn" : "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matBadgeHidden", ctx.isInResolutionsRange())("svgIcon", i0.ɵɵpipeBind1(10, 15, ctx.isPreview$) ? "plus" : ctx.added ? "delete" : "plus");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(14, 17, ctx.layerLegendShown$) && i0.ɵɵpipeBind1(15, 19, ctx.igoLayer$) && ctx.catalogAllowLegend);
    } }, directives: [i2.MatListItem, i3.NgIf, i4.MatLine, i3.NgClass, i5.MatTooltip, i6.MetadataButtonComponent, i7.MatButton, i8.MatIcon, i9.MatBadge, i10.IgoBadgeIconDirective, i2.MatListAvatarCssMatStyler, i11.LayerLegendComponent], pipes: [i12.TranslatePipe, i3.AsyncPipe], styles: [".igo-cataloglayer-title[_ngcontent-%COMP%]{cursor:pointer}.igo-cataloglayer-legend-container[_ngcontent-%COMP%]{padding-left:18px;width:calc(100% - 18px);margin-left:40px}.igo-cataloglayer-external-icon[_ngcontent-%COMP%]{cursor:help}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogBrowserLayerComponent, [{
        type: Component,
        args: [{
                selector: 'igo-catalog-browser-layer',
                templateUrl: './catalog-browser-layer.component.html',
                styleUrls: ['./catalog-browser-layer.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.LayerService }]; }, { resolution: [{
            type: Input
        }], catalogAllowLegend: [{
            type: Input
        }], layer: [{
            type: Input
        }], added: [{
            type: Input
        }], addedChange: [{
            type: Output
        }], addedLayerIsPreview: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1icm93c2VyLWxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2NhdGFsb2cvY2F0YWxvZy1icm93c2VyL2NhdGFsb2ctYnJvd3Nlci1sYXllci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9jYXRhbG9nL2NhdGFsb2ctYnJvd3Nlci9jYXRhbG9nLWJyb3dzZXItbGF5ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHN0QsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFckQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDZjdELDhCQUF5RTs7O0lBTXZFLG9DQVE4QjtJQUQ1QixxSUFBUyx3QkFBd0IsSUFBQzs7SUFFcEMsaUJBQVc7O0lBSlQsMkZBQW1FOzs7SUFSckUsa0NBRWtCO0lBQ2xCLGlHQVNXO0lBQ2IsaUJBQVM7OztJQVJKLGVBQTRCO0lBQTVCLG9EQUE0Qjs7O0lBa0NqQyxzQ0FHbUI7Ozs7SUFEakIsOERBQTJCOztBRDFCL0I7O0dBRUc7QUFPSCxNQUFNLE9BQU8sNEJBQTRCO0lBaUR2QyxZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWhEdkMsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxlQUFV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eUMsNEZBQUE7UUFZM0MsZUFBOEU7UUFBOUUsdUlBQThFOzt1RkRoQnRFLDRCQUE0QjtjQU54QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7Z0JBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOytEQVlVLFVBQVU7a0JBQWxCLEtBQUs7WUFFRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFLRyxLQUFLO2tCQUFiLEtBQUs7WUFLRyxLQUFLO2tCQUFiLEtBQUs7WUFLSSxXQUFXO2tCQUFwQixNQUFNO1lBS0csbUJBQW1CO2tCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZ2V0RW50aXR5VGl0bGUsIGdldEVudGl0eUljb24gfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBDYXRhbG9nSXRlbUxheWVyIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXllclNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYXllci9zaGFyZWQvbGF5ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExheWVyLCBUb29sdGlwVHlwZSB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9sYXllcnMnO1xuaW1wb3J0IHsgTWV0YWRhdGFMYXllck9wdGlvbnMgfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9zaGFyZWQvbWV0YWRhdGEuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBDYXRhbG9nIGJyb3dzZXIgbGF5ZXIgaXRlbVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tY2F0YWxvZy1icm93c2VyLWxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhdGFsb2ctYnJvd3Nlci1sYXllci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhdGFsb2ctYnJvd3Nlci1sYXllci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDYXRhbG9nQnJvd3NlckxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaW5SYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XG4gIHB1YmxpYyBpc1ByZXZpZXckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcHJpdmF0ZSBpc1ByZXZpZXckJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGxhc3RUaW1lb3V0UmVxdWVzdDtcblxuICBwdWJsaWMgbGF5ZXJMZWdlbmRTaG93biQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBwdWJsaWMgaWdvTGF5ZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMYXllcj4odW5kZWZpbmVkKTtcblxuICBwcml2YXRlIG1vdXNlSW5zaWRlQWRkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgcmVzb2x1dGlvbjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGNhdGFsb2dBbGxvd0xlZ2VuZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDYXRhbG9nIGxheWVyXG4gICAqL1xuICBASW5wdXQoKSBsYXllcjogQ2F0YWxvZ0l0ZW1MYXllcjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgbGF5ZXIgaXMgYWxyZWFkeSBhZGRlZCB0byB0aGUgbWFwXG4gICAqL1xuICBASW5wdXQoKSBhZGRlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGFkZC9yZW1vdmUgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKSBhZGRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGFkZGVkOiBib29sZWFuO1xuICAgIGxheWVyOiBDYXRhbG9nSXRlbUxheWVyO1xuICB9PigpO1xuXG4gIEBPdXRwdXQoKSBhZGRlZExheWVySXNQcmV2aWV3ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRFbnRpdHlUaXRsZSh0aGlzLmxheWVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldEVudGl0eUljb24odGhpcy5sYXllcikgfHwgJ2xheWVycyc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxheWVyU2VydmljZTogTGF5ZXJTZXJ2aWNlICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5SZXNvbHV0aW9uc1JhbmdlKCk7XG4gICAgdGhpcy5pc1ByZXZpZXckJCA9IHRoaXMuaXNQcmV2aWV3JC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5hZGRlZExheWVySXNQcmV2aWV3LmVtaXQodmFsdWUpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaXNQcmV2aWV3JCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGNvbXB1dGVUaXRsZVRvb2x0aXAoKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IGxheWVyT3B0aW9ucyA9IHRoaXMubGF5ZXIub3B0aW9ucztcbiAgICAgIGlmICghbGF5ZXJPcHRpb25zLnRvb2x0aXApIHtcbiAgICAgICAgcmV0dXJuIGdldEVudGl0eVRpdGxlKHRoaXMubGF5ZXIpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGF5ZXJUb29sdGlwID0gbGF5ZXJPcHRpb25zLnRvb2x0aXA7XG4gICAgICBjb25zdCBsYXllck1ldGFkYXRhID0gKGxheWVyT3B0aW9ucyBhcyBNZXRhZGF0YUxheWVyT3B0aW9ucykubWV0YWRhdGE7XG4gICAgICBzd2l0Y2ggKGxheWVyT3B0aW9ucy50b29sdGlwLnR5cGUpIHtcbiAgICAgICAgY2FzZSBUb29sdGlwVHlwZS5USVRMRTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5sYXllci50aXRsZTtcbiAgICAgICAgY2FzZSBUb29sdGlwVHlwZS5BQlNUUkFDVDpcbiAgICAgICAgICBpZiAobGF5ZXJNZXRhZGF0YSAmJiBsYXllck1ldGFkYXRhLmFic3RyYWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbGF5ZXJNZXRhZGF0YS5hYnN0cmFjdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXIudGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIFRvb2x0aXBUeXBlLkNVU1RPTTpcbiAgICAgICAgICBpZiAobGF5ZXJUb29sdGlwICYmIGxheWVyVG9vbHRpcC50ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gbGF5ZXJUb29sdGlwLnRleHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheWVyLnRpdGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5sYXllci50aXRsZTtcbiAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBtb3VzZSBldmVudCwgbW91c2VlbnRlciAvbW91c2VsZWF2ZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTW91c2VFdmVudChldmVudCkge1xuICAgIHRoaXMub25Ub2dnbGVDbGljayhldmVudCk7XG4gIH1cblxuICBhc2tGb3JMZWdlbmQoZXZlbnQpIHtcbiAgICB0aGlzLmxheWVyTGVnZW5kU2hvd24kLm5leHQoIXRoaXMubGF5ZXJMZWdlbmRTaG93biQudmFsdWUpO1xuICAgIHRoaXMubGF5ZXJTZXJ2aWNlLmNyZWF0ZUFzeW5jTGF5ZXIodGhpcy5sYXllci5vcHRpb25zKS5waXBlKGZpcnN0KCkpXG4gICAgLnN1YnNjcmliZShsYXllciA9PiB0aGlzLmlnb0xheWVyJC5uZXh0KGxheWVyKSk7XG4gIH1cblxuICAvKipcbiAgICogT24gdG9nZ2xlIGJ1dHRvbiBjbGljaywgZW1pdCB0aGUgYWRkZWQgY2hhbmdlIGV2ZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5sYXN0VGltZW91dFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5sYXN0VGltZW91dFJlcXVlc3QpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZW50ZXInICYmIHRoaXMubW91c2VJbnNpZGVBZGQgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICBpZiAoIXRoaXMuaXNQcmV2aWV3JC52YWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmFkZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUHJldmlldyQubmV4dChmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW91c2VlbnRlcic6XG4gICAgICAgIGlmICghdGhpcy5pc1ByZXZpZXckLnZhbHVlICYmICF0aGlzLmFkZGVkKSB7XG4gICAgICAgICAgdGhpcy5sYXN0VGltZW91dFJlcXVlc3QgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkKCk7XG4gICAgICAgICAgICB0aGlzLmlzUHJldmlldyQubmV4dCh0cnVlKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW91c2VJbnNpZGVBZGQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdXNlbGVhdmUnOlxuICAgICAgICBpZiAodGhpcy5pc1ByZXZpZXckLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLmlzUHJldmlldyQubmV4dChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3VzZUluc2lkZUFkZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0IGFkZGVkIGNoYW5nZSBldmVudCB3aXRoIGFkZGVkID0gdHJ1ZVxuICAgKi9cbiAgcHJpdmF0ZSBhZGQoKSB7XG4gICAgaWYgKCF0aGlzLmFkZGVkKSB7XG4gICAgICB0aGlzLmFkZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWRkZWRDaGFuZ2UuZW1pdCh7IGFkZGVkOiB0cnVlLCBsYXllcjogdGhpcy5sYXllciB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdCBhZGRlZCBjaGFuZ2UgZXZlbnQgd2l0aCBhZGRlZCA9IGZhbHNlXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5hZGRlZCkge1xuICAgICAgdGhpcy5hZGRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5hZGRlZENoYW5nZS5lbWl0KHsgYWRkZWQ6IGZhbHNlLCBsYXllcjogdGhpcy5sYXllciB9KTtcbiAgICB9XG4gIH1cblxuICBoYXZlR3JvdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEoIXRoaXMubGF5ZXIuYWRkcmVzcyB8fCB0aGlzLmxheWVyLmFkZHJlc3Muc3BsaXQoJy4nKS5sZW5ndGggPT09IDEpO1xuICB9XG5cbiAgaXNJblJlc29sdXRpb25zUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbWluUmVzb2x1dGlvbiA9IHRoaXMubGF5ZXIub3B0aW9ucy5taW5SZXNvbHV0aW9uIHx8IDA7XG4gICAgY29uc3QgbWF4UmVzb2x1dGlvbiA9IHRoaXMubGF5ZXIub3B0aW9ucy5tYXhSZXNvbHV0aW9uIHx8IEluZmluaXR5O1xuICAgIHRoaXMuaW5SYW5nZSQubmV4dChcbiAgICAgIHRoaXMucmVzb2x1dGlvbiA+PSBtaW5SZXNvbHV0aW9uICYmIHRoaXMucmVzb2x1dGlvbiA8PSBtYXhSZXNvbHV0aW9uXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5pblJhbmdlJC52YWx1ZTtcbiAgfVxuXG4gIGNvbXB1dGVUb29sdGlwKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuYWRkZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzUHJldmlldyQudmFsdWVcbiAgICAgICAgPyAnaWdvLmdlby5jYXRhbG9nLmxheWVyLmFkZFRvTWFwJ1xuICAgICAgICA6IHRoaXMuaW5SYW5nZSQudmFsdWVcbiAgICAgICAgPyAnaWdvLmdlby5jYXRhbG9nLmxheWVyLnJlbW92ZUZyb21NYXAnXG4gICAgICAgIDogJ2lnby5nZW8uY2F0YWxvZy5sYXllci5yZW1vdmVGcm9tTWFwT3V0UmFuZ2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pblJhbmdlJC52YWx1ZVxuICAgICAgICA/ICdpZ28uZ2VvLmNhdGFsb2cubGF5ZXIuYWRkVG9NYXAnXG4gICAgICAgIDogJ2lnby5nZW8uY2F0YWxvZy5sYXllci5hZGRUb01hcE91dFJhbmdlJztcbiAgICB9XG4gIH1cbn1cbiIsIjxtYXQtbGlzdC1pdGVtPlxuICA8bWF0LWljb24gKm5nSWY9XCJoYXZlR3JvdXAoKVwiIG1hdC1saXN0LWF2YXRhciBzdmdJY29uPVwiYmxhbmtcIj48L21hdC1pY29uPlxuICA8aDQgbWF0LWxpbmUgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiIFtuZ0NsYXNzXT1cIihjYXRhbG9nQWxsb3dMZWdlbmQpPydpZ28tY2F0YWxvZ2xheWVyLXRpdGxlJzonJ1wiIChjbGljayk9XCJhc2tGb3JMZWdlbmQoJGV2ZW50KVwiIFttYXRUb29sdGlwXT1cImNvbXB1dGVUaXRsZVRvb2x0aXAoKVwiPnt7dGl0bGV9fTwvaDQ+XG5cbiAgICA8YnV0dG9uICpuZ0lmPVwibGF5ZXIuZXh0ZXJuYWxQcm92aWRlclwiXG4gICAgICBkaXNhYmxlZD1cInRydWVcIlxuICAgICAgbWF0LWljb24tYnV0dG9uPlxuICAgIDxtYXQtaWNvblxuICAgICAgY2xhc3M9XCJpZ28tY2F0YWxvZ2xheWVyLWV4dGVybmFsLWljb25cIlxuICAgICAgKm5nSWY9XCJsYXllci5leHRlcm5hbFByb3ZpZGVyXCJcbiAgICAgIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmNhdGFsb2cuZXh0ZXJuYWxQcm92aWRlci5sYXllcicgfCB0cmFuc2xhdGVcIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgc3ZnSWNvbj1cImVhcnRoLWFycm93LXJpZ2h0XCI+XG4gICAgPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxpZ28tbWV0YWRhdGEtYnV0dG9uIFtsYXllcl09XCJsYXllclwiPjwvaWdvLW1ldGFkYXRhLWJ1dHRvbj5cblxuICA8YnV0dG9uXG4gICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUV2ZW50KCRldmVudClcIiAobW91c2VsZWF2ZSk9XCJvbk1vdXNlRXZlbnQoJGV2ZW50KVwiXG4gICAgbWF0LWljb24tYnV0dG9uXG4gICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICBbbWF0VG9vbHRpcF09XCJjb21wdXRlVG9vbHRpcCgpIHwgdHJhbnNsYXRlXCJcbiAgICBbY29sb3JdPVwiKGlzUHJldmlldyQgfCBhc3luYykgPyAnJyA6IGFkZGVkID8gJ3dhcm4nIDogJydcIlxuICAgIChjbGljayk9XCJvblRvZ2dsZUNsaWNrKCRldmVudClcIj5cbiAgICA8bWF0LWljb25cbiAgICAgICBtYXRCYWRnZT1cImljb25cIlxuICAgICAgIGlnb01hdEJhZGdlSWNvbj1cImV5ZS1vZmZcIlxuICAgICAgIGlnb01hdEJhZGdlSW52ZXJzZUNvbG9yPVwidHJ1ZVwiXG4gICAgICAgW21hdEJhZGdlSGlkZGVuXT1cImlzSW5SZXNvbHV0aW9uc1JhbmdlKClcIlxuICAgICAgIG1hdEJhZGdlRGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICBtYXRCYWRnZVNpemU9XCJzbWFsbFwiXG4gICAgICAgbWF0QmFkZ2VQb3NpdGlvbj1cImFmdGVyXCJcbiAgICAgICBbc3ZnSWNvbl09XCIoaXNQcmV2aWV3JCB8IGFzeW5jKSA/ICdwbHVzJyA6IGFkZGVkID8gJ2RlbGV0ZScgOiAncGx1cydcIj5cbiAgICA8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cblxuPC9tYXQtbGlzdC1pdGVtPlxuXG48ZGl2ICNsZWdlbmQgY2xhc3M9XCJpZ28tY2F0YWxvZ2xheWVyLWxlZ2VuZC1jb250YWluZXJcIj5cbiAgPGlnby1sYXllci1sZWdlbmRcbiAgICAqbmdJZj1cIihsYXllckxlZ2VuZFNob3duJCB8IGFzeW5jKSAmJiAoaWdvTGF5ZXIkIHwgYXN5bmMpICYmIGNhdGFsb2dBbGxvd0xlZ2VuZFwiXG4gICAgW2xheWVyXT1cImlnb0xheWVyJCB8IGFzeW5jXCI+XG4gIDwvaWdvLWxheWVyLWxlZ2VuZD5cbjwvZGl2PlxuIl19