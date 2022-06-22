import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, ReplaySubject, EMPTY, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import * as i0 from "@angular/core";
function LayerLegendListComponent_mat_slide_toggle_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-slide-toggle", 6);
    i0.ɵɵlistener("change", function LayerLegendListComponent_mat_slide_toggle_1_Template_mat_slide_toggle_change_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.toggleShowAllLegends($event.checked); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 4, "igo.geo.layer.legend.showAll"))("checked", ctx_r0.showAllLegendsValue)("labelPosition", "before");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 6, "igo.geo.layer.legend.showAll"), " ");
} }
function LayerLegendListComponent_mat_divider_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function LayerLegendListComponent_ng_template_6_igo_layer_legend_item_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-layer-legend-item", 8);
} if (rf & 2) {
    const layer_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("layer", layer_r9)("updateLegendOnResolutionChange", ctx_r11.updateLegendOnResolutionChange);
} }
function LayerLegendListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, LayerLegendListComponent_ng_template_6_igo_layer_legend_item_0_Template, 1, 2, "igo-layer-legend-item", 7);
} if (rf & 2) {
    const layer_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !(ctx_r2.excludeBaseLayers && layer_r9.baseLayer));
} }
function LayerLegendListComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.geo.layer.legend.noLayersVisibleWithShowAllButton"), " ");
} }
function LayerLegendListComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.geo.layer.legend.noLayersVisibleWithShowAllButtonButZoom"), " ");
} }
function LayerLegendListComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.geo.layer.legend.noLayersVisible"), " ");
} }
function LayerLegendListComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.geo.layer.legend.noLayersVisibleButZoom"), " ");
} }
export class LayerLegendListComponent {
    constructor() {
        this.orderable = true;
        this.hasVisibleOrInRangeLayers$ = new BehaviorSubject(true);
        this.hasVisibleAndNotInRangeLayers$ = new BehaviorSubject(true);
        this.layersInUi$ = new BehaviorSubject([]);
        this.layers$ = new BehaviorSubject([]);
        this.showAllLegend = false;
        this.change$ = new ReplaySubject(1);
        this.excludeBaseLayers = false;
        this.updateLegendOnResolutionChange = false;
        this.allowShowAllLegends = false;
        this.showAllLegendsValue = false;
        this.allLegendsShown = new EventEmitter(false);
    }
    set layers(value) {
        this._layers = value;
        this.next();
    }
    get layers() {
        return this._layers;
    }
    ngOnInit() {
        this.change$$ = this.change$
            .pipe(debounce(() => {
            return this.layers.length === 0 ? EMPTY : timer(50);
        }))
            .subscribe(() => {
            const layers = this.computeShownLayers(this.layers.slice(0));
            this.layers$.next(layers);
            this.hasVisibleOrInRangeLayers$.next(this.layers.slice(0)
                .filter(layer => layer.baseLayer !== true)
                .filter(layer => layer.visible$.value && layer.isInResolutionsRange$.value).length > 0);
            this.hasVisibleAndNotInRangeLayers$.next(this.layers.slice(0)
                .filter(layer => layer.baseLayer !== true)
                .filter(layer => layer.visible$.value && !layer.isInResolutionsRange$.value).length > 0);
            this.layersInUi$.next(this.layers.slice(0).filter(layer => layer.showInLayerList !== false && (!this.excludeBaseLayers || !layer.baseLayer)));
        });
    }
    ngOnDestroy() {
        this.change$$.unsubscribe();
    }
    next() {
        this.change$.next();
    }
    computeShownLayers(layers) {
        let shownLayers = layers.filter((layer) => layer.visible && layer.isInResolutionsRange);
        if (this.showAllLegendsValue) {
            shownLayers = layers;
        }
        return this.sortLayersByZindex(shownLayers);
    }
    sortLayersByZindex(layers) {
        return layers.sort((layer1, layer2) => layer2.zIndex - layer1.zIndex);
    }
    toggleShowAllLegends(toggle) {
        this.showAllLegendsValue = toggle;
        this.next();
        this.allLegendsShown.emit(toggle);
    }
}
LayerLegendListComponent.ɵfac = function LayerLegendListComponent_Factory(t) { return new (t || LayerLegendListComponent)(); };
LayerLegendListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerLegendListComponent, selectors: [["igo-layer-legend-list"]], inputs: { layers: "layers", excludeBaseLayers: "excludeBaseLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", allowShowAllLegends: "allowShowAllLegends", showAllLegendsValue: "showAllLegendsValue" }, outputs: { allLegendsShown: "allLegendsShown" }, decls: 24, vars: 39, consts: [[1, "layer-legend-list-container"], ["tooltip-position", "above", "matTooltipShowDelay", "500", "class", "mat-typography", 3, "matTooltip", "checked", "labelPosition", "change", 4, "ngIf"], [4, "ngIf"], [3, "navigation", "selection"], ["ngFor", "", 3, "ngForOf"], ["class", "layers-empty mat-typography", 4, "ngIf"], ["tooltip-position", "above", "matTooltipShowDelay", "500", 1, "mat-typography", 3, "matTooltip", "checked", "labelPosition", "change"], ["igoListItem", "", 3, "layer", "updateLegendOnResolutionChange", 4, "ngIf"], ["igoListItem", "", 3, "layer", "updateLegendOnResolutionChange"], [1, "layers-empty", "mat-typography"]], template: function LayerLegendListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, LayerLegendListComponent_mat_slide_toggle_1_Template, 4, 8, "mat-slide-toggle", 1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵtemplate(3, LayerLegendListComponent_mat_divider_3_Template, 1, 0, "mat-divider", 2);
        i0.ɵɵpipe(4, "async");
        i0.ɵɵelementStart(5, "igo-list", 3);
        i0.ɵɵtemplate(6, LayerLegendListComponent_ng_template_6_Template, 1, 1, "ng-template", 4);
        i0.ɵɵpipe(7, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, LayerLegendListComponent_p_8_Template, 3, 3, "p", 5);
        i0.ɵɵpipe(9, "async");
        i0.ɵɵpipe(10, "async");
        i0.ɵɵpipe(11, "async");
        i0.ɵɵtemplate(12, LayerLegendListComponent_p_12_Template, 3, 3, "p", 5);
        i0.ɵɵpipe(13, "async");
        i0.ɵɵpipe(14, "async");
        i0.ɵɵpipe(15, "async");
        i0.ɵɵtemplate(16, LayerLegendListComponent_p_16_Template, 3, 3, "p", 5);
        i0.ɵɵpipe(17, "async");
        i0.ɵɵpipe(18, "async");
        i0.ɵɵpipe(19, "async");
        i0.ɵɵtemplate(20, LayerLegendListComponent_p_20_Template, 3, 3, "p", 5);
        i0.ɵɵpipe(21, "async");
        i0.ɵɵpipe(22, "async");
        i0.ɵɵpipe(23, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 9, ctx.layersInUi$).length && ctx.allowShowAllLegends);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(4, 11, ctx.layersInUi$).length && ctx.allowShowAllLegends);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("navigation", false)("selection", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(7, 13, ctx.layers$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.showAllLegendsValue && i0.ɵɵpipeBind1(9, 15, ctx.layersInUi$).length && i0.ɵɵpipeBind1(10, 17, ctx.hasVisibleOrInRangeLayers$) === false && i0.ɵɵpipeBind1(11, 19, ctx.hasVisibleAndNotInRangeLayers$) === false && ctx.allowShowAllLegends);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !ctx.showAllLegendsValue && i0.ɵɵpipeBind1(13, 21, ctx.layersInUi$).length && i0.ɵɵpipeBind1(14, 23, ctx.hasVisibleOrInRangeLayers$) === false && i0.ɵɵpipeBind1(15, 25, ctx.hasVisibleAndNotInRangeLayers$) && ctx.allowShowAllLegends);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(17, 27, ctx.layersInUi$).length && i0.ɵɵpipeBind1(18, 29, ctx.hasVisibleOrInRangeLayers$) === false && i0.ɵɵpipeBind1(19, 31, ctx.hasVisibleAndNotInRangeLayers$) === false && !ctx.allowShowAllLegends);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(21, 33, ctx.layersInUi$).length && i0.ɵɵpipeBind1(22, 35, ctx.hasVisibleOrInRangeLayers$) === false && i0.ɵɵpipeBind1(23, 37, ctx.hasVisibleAndNotInRangeLayers$) && !ctx.allowShowAllLegends);
    } }, styles: ["mat-slide-toggle[_ngcontent-%COMP%]{width:100%;margin:10px}mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-content{width:calc(100% - 60px)}igo-list[_ngcontent-%COMP%]{display:contents}.layers-empty[_ngcontent-%COMP%]{text-align:justify;margin:10px}.layer-legend-list-container[_ngcontent-%COMP%]{max-height:100%;overflow:auto}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerLegendListComponent, [{
        type: Component,
        args: [{
                selector: 'igo-layer-legend-list',
                templateUrl: './layer-legend-list.component.html',
                styleUrls: ['./layer-legend-list.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { layers: [{
            type: Input
        }], excludeBaseLayers: [{
            type: Input
        }], updateLegendOnResolutionChange: [{
            type: Input
        }], allowShowAllLegends: [{
            type: Input
        }], showAllLegendsValue: [{
            type: Input
        }], allLegendsShown: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGVnZW5kLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvbGF5ZXItbGVnZW5kLWxpc3QvbGF5ZXItbGVnZW5kLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvbGF5ZXItbGVnZW5kLWxpc3QvbGF5ZXItbGVnZW5kLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQXFCLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWdCLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0lDRHhDLDJDQUt1STtJQUFoRCxtUEFBK0M7O0lBQ3BJLFlBQ0Y7O0lBQUEsaUJBQW1COzs7SUFKbkIsaUZBQXlELHVDQUFBLDJCQUFBO0lBR3ZELGVBQ0Y7SUFERSxxRkFDRjs7O0lBQ0EsOEJBQXVGOzs7SUFHbkYsMkNBR3dCOzs7O0lBRlIsZ0NBQWUsMEVBQUE7OztJQUQvQiwySEFHd0I7Ozs7SUFIQSx3RUFBNkM7OztJQU16RSw0QkFDMEw7SUFDeEwsWUFDRjs7SUFBQSxpQkFBSTs7SUFERixlQUNGO0lBREUsOEdBQ0Y7OztJQUNBLDRCQUNrTDtJQUNoTCxZQUNGOztJQUFBLGlCQUFJOztJQURGLGVBQ0Y7SUFERSxxSEFDRjs7O0lBQ0EsNEJBQ21LO0lBQ2pLLFlBQ0Y7O0lBQUEsaUJBQUk7O0lBREYsZUFDRjtJQURFLDZGQUNGOzs7SUFDQSw0QkFDMko7SUFDekosWUFDRjs7SUFBQSxpQkFBSTs7SUFERixl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O1FBN0JILGVBQXlEO1FBQXpELDhGQUF5RDtRQUc1QyxlQUF5RDtRQUF6RCwrRkFBeUQ7UUFDN0QsZUFBb0I7UUFBcEIsa0NBQW9CLG9CQUFBO1FBQ2UsZUFBMkI7UUFBM0IsNERBQTJCO1FBUXJFLGVBQXFMO1FBQXJMLHVRQUFxTDtRQUlyTCxlQUE2SztRQUE3Syw4UEFBNks7UUFJN0ssZUFBOEo7UUFBOUosNk9BQThKO1FBSTlKLGVBQXNKO1FBQXRKLG1PQUFzSjs7dUZEckI5SSx3QkFBd0I7Y0FOcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtzQ0FZSyxNQUFNO2tCQURULEtBQUs7WUFTRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFFRyw4QkFBOEI7a0JBQXRDLEtBQUs7WUFFRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFFRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFFSSxlQUFlO2tCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBSZXBsYXlTdWJqZWN0LCBTdWJzY3JpcHRpb24sIEVNUFRZLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1sYXllci1sZWdlbmQtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXllci1sZWdlbmQtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xheWVyLWxlZ2VuZC1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExheWVyTGVnZW5kTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgb3JkZXJhYmxlID0gdHJ1ZTtcblxuICBoYXNWaXNpYmxlT3JJblJhbmdlTGF5ZXJzJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcbiAgaGFzVmlzaWJsZUFuZE5vdEluUmFuZ2VMYXllcnMkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xuICBsYXllcnNJblVpJDogQmVoYXZpb3JTdWJqZWN0PExheWVyW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIGxheWVycyQ6IEJlaGF2aW9yU3ViamVjdDxMYXllcltdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBzaG93QWxsTGVnZW5kOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjaGFuZ2UkID0gbmV3IFJlcGxheVN1YmplY3Q8dm9pZD4oMSk7XG4gIHByaXZhdGUgY2hhbmdlJCQ6IFN1YnNjcmlwdGlvbjtcbiAgQElucHV0KClcbiAgc2V0IGxheWVycyh2YWx1ZTogTGF5ZXJbXSkge1xuICAgIHRoaXMuX2xheWVycyA9IHZhbHVlO1xuICAgIHRoaXMubmV4dCgpO1xuICB9XG4gIGdldCBsYXllcnMoKTogTGF5ZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheWVycztcbiAgfVxuICBwcml2YXRlIF9sYXllcnM6IExheWVyW107XG4gIEBJbnB1dCgpIGV4Y2x1ZGVCYXNlTGF5ZXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdXBkYXRlTGVnZW5kT25SZXNvbHV0aW9uQ2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgYWxsb3dTaG93QWxsTGVnZW5kczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNob3dBbGxMZWdlbmRzVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgYWxsTGVnZW5kc1Nob3duID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkJCA9IHRoaXMuY2hhbmdlJFxuICAgICAgLnBpcGUoZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnMubGVuZ3RoID09PSAwID8gRU1QVFkgOiB0aW1lcig1MCk7XG4gICAgICB9KSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXllcnMgPSB0aGlzLmNvbXB1dGVTaG93bkxheWVycyh0aGlzLmxheWVycy5zbGljZSgwKSk7XG4gICAgICAgIHRoaXMubGF5ZXJzJC5uZXh0KGxheWVycyk7XG4gICAgICAgIHRoaXMuaGFzVmlzaWJsZU9ySW5SYW5nZUxheWVycyQubmV4dChcbiAgICAgICAgICB0aGlzLmxheWVycy5zbGljZSgwKVxuICAgICAgICAgICAgLmZpbHRlcihsYXllciA9PiBsYXllci5iYXNlTGF5ZXIgIT09IHRydWUpXG4gICAgICAgICAgICAuZmlsdGVyKGxheWVyID0+IGxheWVyLnZpc2libGUkLnZhbHVlICYmIGxheWVyLmlzSW5SZXNvbHV0aW9uc1JhbmdlJC52YWx1ZSkubGVuZ3RoID4gMFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmhhc1Zpc2libGVBbmROb3RJblJhbmdlTGF5ZXJzJC5uZXh0KFxuICAgICAgICAgIHRoaXMubGF5ZXJzLnNsaWNlKDApXG4gICAgICAgICAgICAuZmlsdGVyKGxheWVyID0+IGxheWVyLmJhc2VMYXllciAhPT0gdHJ1ZSlcbiAgICAgICAgICAgIC5maWx0ZXIobGF5ZXIgPT4gbGF5ZXIudmlzaWJsZSQudmFsdWUgJiYgIWxheWVyLmlzSW5SZXNvbHV0aW9uc1JhbmdlJC52YWx1ZSkubGVuZ3RoID4gMFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubGF5ZXJzSW5VaSQubmV4dChcbiAgICAgICAgICB0aGlzLmxheWVycy5zbGljZSgwKS5maWx0ZXIobGF5ZXIgPT4gbGF5ZXIuc2hvd0luTGF5ZXJMaXN0ICE9PSBmYWxzZSAmJiAoIXRoaXMuZXhjbHVkZUJhc2VMYXllcnMgfHwgIWxheWVyLmJhc2VMYXllcikpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hhbmdlJCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuICBwcml2YXRlIG5leHQoKSB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIGNvbXB1dGVTaG93bkxheWVycyhsYXllcnM6IExheWVyW10pIHtcbiAgICBsZXQgc2hvd25MYXllcnMgPSBsYXllcnMuZmlsdGVyKChsYXllcjogTGF5ZXIpID0+IGxheWVyLnZpc2libGUgJiYgbGF5ZXIuaXNJblJlc29sdXRpb25zUmFuZ2UpO1xuICAgIGlmICh0aGlzLnNob3dBbGxMZWdlbmRzVmFsdWUpIHtcbiAgICAgIHNob3duTGF5ZXJzID0gbGF5ZXJzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zb3J0TGF5ZXJzQnlaaW5kZXgoc2hvd25MYXllcnMpO1xuICB9XG4gIHByaXZhdGUgc29ydExheWVyc0J5WmluZGV4KGxheWVyczogTGF5ZXJbXSkge1xuICAgIHJldHVybiBsYXllcnMuc29ydCgobGF5ZXIxLCBsYXllcjIpID0+IGxheWVyMi56SW5kZXggLSBsYXllcjEuekluZGV4KTtcbiAgfVxuXG4gIHRvZ2dsZVNob3dBbGxMZWdlbmRzKHRvZ2dsZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5zaG93QWxsTGVnZW5kc1ZhbHVlID0gdG9nZ2xlO1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB0aGlzLmFsbExlZ2VuZHNTaG93bi5lbWl0KHRvZ2dsZSk7XG4gIH1cbn1cbiIsIlxuPGRpdiBjbGFzcz1cImxheWVyLWxlZ2VuZC1saXN0LWNvbnRhaW5lclwiPlxuICA8bWF0LXNsaWRlLXRvZ2dsZSBcbiAgdG9vbHRpcC1wb3NpdGlvbj1cImFib3ZlXCJcbiAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmxheWVyLmxlZ2VuZC5zaG93QWxsJyB8IHRyYW5zbGF0ZVwiXG4gIFtjaGVja2VkXT1cInNob3dBbGxMZWdlbmRzVmFsdWVcIiBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCIgXG4gICpuZ0lmPVwiKGxheWVyc0luVWkkIHwgYXN5bmMpLmxlbmd0aCAmJiBhbGxvd1Nob3dBbGxMZWdlbmRzXCIgW2xhYmVsUG9zaXRpb25dPVwiJ2JlZm9yZSdcIiAoY2hhbmdlKT1cInRvZ2dsZVNob3dBbGxMZWdlbmRzKCRldmVudC5jaGVja2VkKVwiPlxuICAgIHt7J2lnby5nZW8ubGF5ZXIubGVnZW5kLnNob3dBbGwnIHwgdHJhbnNsYXRlfX1cbiAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICA8bWF0LWRpdmlkZXIgKm5nSWY9XCIobGF5ZXJzSW5VaSQgfCBhc3luYykubGVuZ3RoICYmIGFsbG93U2hvd0FsbExlZ2VuZHNcIj48L21hdC1kaXZpZGVyPlxuICA8aWdvLWxpc3QgW25hdmlnYXRpb25dPVwiZmFsc2VcIiBbc2VsZWN0aW9uXT1cImZhbHNlXCI+XG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1sYXllciBsZXQtaT1cImluZGV4XCIgW25nRm9yT2ZdPVwibGF5ZXJzJCB8IGFzeW5jXCI+XG4gICAgICA8aWdvLWxheWVyLWxlZ2VuZC1pdGVtICpuZ0lmPVwiIShleGNsdWRlQmFzZUxheWVycyAmJiBsYXllci5iYXNlTGF5ZXIpXCJcbiAgICAgICAgICBpZ29MaXN0SXRlbSBbbGF5ZXJdPVwibGF5ZXJcIlxuICAgICAgICAgIFt1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2VdPVwidXBkYXRlTGVnZW5kT25SZXNvbHV0aW9uQ2hhbmdlXCI+XG4gICAgICA8L2lnby1sYXllci1sZWdlbmQtaXRlbT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L2lnby1saXN0PlxuICA8cCBjbGFzcz1cImxheWVycy1lbXB0eSBtYXQtdHlwb2dyYXBoeVwiIFxuICAgICpuZ0lmPVwiIXNob3dBbGxMZWdlbmRzVmFsdWUgJiYgKGxheWVyc0luVWkkIHwgYXN5bmMpLmxlbmd0aCAmJiAoaGFzVmlzaWJsZU9ySW5SYW5nZUxheWVycyQgfCBhc3luYyk9PT1mYWxzZSAmJiAoaGFzVmlzaWJsZUFuZE5vdEluUmFuZ2VMYXllcnMkIHwgYXN5bmMpPT09ZmFsc2UgJiYgYWxsb3dTaG93QWxsTGVnZW5kc1wiPlxuICAgIHt7J2lnby5nZW8ubGF5ZXIubGVnZW5kLm5vTGF5ZXJzVmlzaWJsZVdpdGhTaG93QWxsQnV0dG9uJyB8IHRyYW5zbGF0ZX19IFxuICA8L3A+XG4gIDxwIGNsYXNzPVwibGF5ZXJzLWVtcHR5IG1hdC10eXBvZ3JhcGh5XCIgXG4gICAgKm5nSWY9XCIhc2hvd0FsbExlZ2VuZHNWYWx1ZSAmJiAobGF5ZXJzSW5VaSQgfCBhc3luYykubGVuZ3RoICYmIChoYXNWaXNpYmxlT3JJblJhbmdlTGF5ZXJzJCB8IGFzeW5jKT09PWZhbHNlICYmIChoYXNWaXNpYmxlQW5kTm90SW5SYW5nZUxheWVycyQgfCBhc3luYykgJiYgYWxsb3dTaG93QWxsTGVnZW5kc1wiPlxuICAgIHt7J2lnby5nZW8ubGF5ZXIubGVnZW5kLm5vTGF5ZXJzVmlzaWJsZVdpdGhTaG93QWxsQnV0dG9uQnV0Wm9vbScgfCB0cmFuc2xhdGV9fSBcbiAgPC9wPlxuICA8cCBjbGFzcz1cImxheWVycy1lbXB0eSBtYXQtdHlwb2dyYXBoeVwiXG4gICAgKm5nSWY9XCIobGF5ZXJzSW5VaSQgfCBhc3luYykubGVuZ3RoICYmIChoYXNWaXNpYmxlT3JJblJhbmdlTGF5ZXJzJCB8IGFzeW5jKT09PWZhbHNlICYmIChoYXNWaXNpYmxlQW5kTm90SW5SYW5nZUxheWVycyQgfCBhc3luYyk9PT1mYWxzZSAmJiAhYWxsb3dTaG93QWxsTGVnZW5kc1wiPlxuICAgIHt7J2lnby5nZW8ubGF5ZXIubGVnZW5kLm5vTGF5ZXJzVmlzaWJsZScgfCB0cmFuc2xhdGV9fSBcbiAgPC9wPlxuICA8cCBjbGFzcz1cImxheWVycy1lbXB0eSBtYXQtdHlwb2dyYXBoeVwiXG4gICAgKm5nSWY9XCIobGF5ZXJzSW5VaSQgfCBhc3luYykubGVuZ3RoICYmIChoYXNWaXNpYmxlT3JJblJhbmdlTGF5ZXJzJCB8IGFzeW5jKT09PWZhbHNlICYmIChoYXNWaXNpYmxlQW5kTm90SW5SYW5nZUxheWVycyQgfCBhc3luYykgJiYgIWFsbG93U2hvd0FsbExlZ2VuZHNcIj5cbiAgICB7eydpZ28uZ2VvLmxheWVyLmxlZ2VuZC5ub0xheWVyc1Zpc2libGVCdXRab29tJyB8IHRyYW5zbGF0ZX19IFxuICA8L3A+XG5cbjwvZGl2PiJdfQ==