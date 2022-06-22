import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../map.state";
import * as i2 from "@igo2/context";
import * as i3 from "@angular/forms";
import * as i4 from "../../../tool/tool.state";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/divider";
import * as i10 from "@angular/material/slide-toggle";
import * as i11 from "@angular/material/list";
import * as i12 from "@angular/material/icon";
import * as i13 from "@ngx-translate/core";
function AdvancedSwipeComponent_div_0_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵlistener("click", function AdvancedSwipeComponent_div_0_mat_option_12_Template_mat_option_click_0_listener() { i0.ɵɵrestoreView(_r7); i0.ɵɵnextContext(); const _r3 = i0.ɵɵreference(8); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.applyNewLayers(_r3); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(layer_r5.title);
} }
function AdvancedSwipeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "form", 3);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-select", 4);
    i0.ɵɵelementStart(7, "mat-option", 5, 6);
    i0.ɵɵlistener("click", function AdvancedSwipeComponent_div_0_Template_mat_option_click_7_listener() { i0.ɵɵrestoreView(_r9); const _r3 = i0.ɵɵreference(8); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.selectAll(_r3); });
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "mat-divider");
    i0.ɵɵtemplate(12, AdvancedSwipeComponent_div_0_mat_option_12_Template, 2, 2, "mat-option", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-slide-toggle", 8);
    i0.ɵɵlistener("change", function AdvancedSwipeComponent_div_0_Template_mat_slide_toggle_change_13_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.startSwipe($event.checked); });
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 8, "igo.integration.advanced-map-tool.advanced-swipe.swipe-select"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 10, "igo.integration.advanced-map-tool.advanced-swipe.selectAll"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.userControlledLayerList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r0.swipe)("labelPosition", "before");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 12, "igo.integration.advanced-map-tool.advanced-swipe.swipe"), " ");
} }
function AdvancedSwipeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵelementStart(1, "p", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 9);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-list-item");
    i0.ɵɵelement(8, "mat-icon", 10);
    i0.ɵɵelementStart(9, "h4", 11);
    i0.ɵɵlistener("click", function AdvancedSwipeComponent_ng_template_1_Template_h4_click_9_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.searchEmit(); });
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-list-item");
    i0.ɵɵelement(13, "mat-icon", 12);
    i0.ɵɵelementStart(14, "h4", 13);
    i0.ɵɵlistener("click", function AdvancedSwipeComponent_ng_template_1_Template_h4_click_14_listener() { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.catalogEmit(); });
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-list-item");
    i0.ɵɵelement(18, "mat-icon", 14);
    i0.ɵɵelementStart(19, "h4", 15);
    i0.ɵɵlistener("click", function AdvancedSwipeComponent_ng_template_1_Template_h4_click_19_listener() { i0.ɵɵrestoreView(_r12); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.contextEmit(); });
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "igo.integration.advanced-map-tool.advanced-swipe.empty"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 7, "igo.integration.advanced-map-tool.advanced-swipe.customize"), "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 9, "igo.integration.advanced-map-tool.advanced-swipe.search-tool"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 11, "igo.integration.advanced-map-tool.advanced-swipe.catalog-tool"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(21, 13, "igo.integration.advanced-map-tool.advanced-swipe.context-tool"), " ");
} }
export class AdvancedSwipeComponent {
    constructor(mapState, contextService, formBuilder, toolState) {
        this.mapState = mapState;
        this.contextService = contextService;
        this.formBuilder = formBuilder;
        this.toolState = toolState;
        this.swipe = false;
        this.buildForm();
    }
    /**
     * Get an active map state
     */
    get map() {
        return this.mapState.map;
    }
    /**
     * Get the list of layers for swipe
     * @internal
     */
    ngOnInit() {
        this.map.layers$.subscribe(ll => this.userControlledLayerList = ll.filter(layer => (!layer.baseLayer && layer.showInLayerList && layer.displayed)));
    }
    /**
     * Desactivate the swipe
     * @internal
     */
    ngOnDestroy() {
        this.swipe = false;
        this.map.swipeEnabled$.next(this.swipe);
    }
    /**
     * Build a form for choise of the layers
     */
    buildForm() {
        this.form = this.formBuilder.group({
            layers: ['', [Validators.required]]
        });
    }
    /**
     * Activate the swipe, send a list of layers for a swipe-tool
     */
    startSwipe(toggle) {
        this.swipe = toggle;
        this.map.swipeEnabled$.next(toggle);
        this.listForSwipe = [];
        for (const layer of this.form.value.layers) {
            this.listForSwipe.push(layer);
        }
        this.map.selectedFeatures$.next(this.listForSwipe);
    }
    /**
     * Restart a swipe for a new layers-list
     */
    applyNewLayers(e) {
        this.startSwipe(false); // l'approche KISS
        this.startSwipe(true);
        if (e._selected) {
            e._selected = false;
        }
        const allLayers = this.userControlledLayerList.length;
        const selectedLayers = this.form.controls.layers.value.length;
        if (selectedLayers === allLayers) {
            e._selected = true;
        }
    }
    /**
     * Select all list of layers and restart a tool
     */
    selectAll(e) {
        if (e._selected) {
            this.form.controls.layers.setValue(this.userControlledLayerList);
            e._selected = true;
        }
        else {
            this.form.controls.layers.setValue([]);
        }
        this.startSwipe(false);
        this.startSwipe(true);
    }
    /**
     * Open search tool
     */
    searchEmit() {
        this.toolState.toolbox.activateTool('searchResults');
    }
    /**
     * Open catalog
     */
    catalogEmit() {
        this.toolState.toolbox.activateTool('catalog');
    }
    /**
     * Open context manager
     */
    contextEmit() {
        this.toolState.toolbox.activateTool('contextManager');
    }
}
AdvancedSwipeComponent.ɵfac = function AdvancedSwipeComponent_Factory(t) { return new (t || AdvancedSwipeComponent)(i0.ɵɵdirectiveInject(i1.MapState), i0.ɵɵdirectiveInject(i2.ContextService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.ToolState)); };
AdvancedSwipeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdvancedSwipeComponent, selectors: [["igo-advanced-swipe"]], decls: 3, vars: 2, consts: [["class", "igo-swipe-select-container", 4, "ngIf", "ngIfElse"], ["noLayersBlock", ""], [1, "igo-swipe-select-container"], [1, "igo-form", 3, "formGroup"], ["formControlName", "layers", "multiple", ""], [3, "value", "click"], ["e", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "swipe-toggle", "mat-typography", 3, "checked", "labelPosition", "change"], [1, "map-empty", "mat-typography"], ["mat-list-icon", "", "svgIcon", "magnify"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["mat-list-icon", "", "svgIcon", "layers-plus"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["mat-list-icon", "", "svgIcon", "star"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function AdvancedSwipeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AdvancedSwipeComponent_div_0_Template, 16, 14, "div", 0);
        i0.ɵɵtemplate(1, AdvancedSwipeComponent_ng_template_1_Template, 22, 15, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.userControlledLayerList.length)("ngIfElse", _r1);
    } }, directives: [i5.NgIf, i3.ɵNgNoValidate, i3.NgControlStatusGroup, i3.FormGroupDirective, i6.MatFormField, i6.MatLabel, i7.MatSelect, i3.NgControlStatus, i3.FormControlName, i8.MatOption, i9.MatDivider, i5.NgForOf, i10.MatSlideToggle, i11.MatList, i11.MatListItem, i12.MatIcon, i11.MatListIconCssMatStyler, i8.MatLine], pipes: [i13.TranslatePipe], styles: [".nameOfTool[_ngcontent-%COMP%]{text-align:center;font-weight:bold;font-size:small;margin:15px 10px 0}.igo-swipe-select-container[_ngcontent-%COMP%]{padding:10px}.igo-swipe-select-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.igo-form[_ngcontent-%COMP%]{padding:1px 5px;width:100%}.swipe-toggle[_ngcontent-%COMP%]{padding:10px 5px 35px}.map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:5px}.map-empty[_ngcontent-%COMP%]{padding:10px;text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:15px}.advanced-tool-line[_ngcontent-%COMP%]{height:2px;background-color:gray}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdvancedSwipeComponent, [{
        type: Component,
        args: [{
                selector: 'igo-advanced-swipe',
                templateUrl: './advanced-swipe.component.html',
                styleUrls: ['./advanced-swipe.component.scss']
            }]
    }], function () { return [{ type: i1.MapState }, { type: i2.ContextService }, { type: i3.FormBuilder }, { type: i4.ToolState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc3dpcGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvYWR2YW5jZWQtbWFwLXRvb2wvYWR2YW5jZWQtc3dpcGUvYWR2YW5jZWQtc3dpcGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvYWR2YW5jZWQtbWFwLXRvb2wvYWR2YW5jZWQtc3dpcGUvYWR2YW5jZWQtc3dpcGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNRcEQscUNBQXNHO0lBQTVCLHNRQUEyQjtJQUFDLFlBQWU7SUFBQSxpQkFBYTs7O0lBQXhFLGdDQUFlO0lBQTZCLGVBQWU7SUFBZixvQ0FBZTs7OztJQVRySSw4QkFBbUc7SUFDL0YsK0JBQTBDO0lBQ3RDLHNDQUFnQjtJQUNaLGlDQUFXO0lBQUEsWUFBK0U7O0lBQUEsaUJBQVk7SUFDdEcscUNBQThDO0lBQzFDLHdDQUFrRDtJQUExQiwrTkFBc0I7SUFDMUMsWUFDSjs7SUFBQSxpQkFBYTtJQUNiLCtCQUEyQjtJQUMzQiw2RkFBa0k7SUFDdEksaUJBQWE7SUFDakIsaUJBQWlCO0lBQ3JCLGlCQUFPO0lBRVAsNENBRzBDO0lBQXRDLDZOQUFxQztJQUNyQyxhQUNKOztJQUFBLGlCQUFtQjtJQUN2QixpQkFBTTs7O0lBbkJxQixlQUFrQjtJQUFsQix1Q0FBa0I7SUFFdEIsZUFBK0U7SUFBL0UsMkdBQStFO0lBRTFFLGVBQVc7SUFBWCx5QkFBVztJQUNuQixlQUNKO0lBREkscUhBQ0o7SUFFOEIsZUFBMEI7SUFBMUIsd0RB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QUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs0RkFoSFUsc0JBQXNCO3lFQUF0QixzQkFBc0I7UUNibkMseUVBb0JNO1FBRU4sMEhBeUJjOzs7UUEvQ1IseURBQXNDLGlCQUFBOzt1RkRhL0Isc0JBQXNCO2NBTmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250ZXh0U2VydmljZSwgRGV0YWlsZWRDb250ZXh0IH0gZnJvbSAnQGlnbzIvY29udGV4dCc7XG5pbXBvcnQgeyBJZ29NYXAsIExheWVyLCBWZWN0b3JMYXllciB9IGZyb20gJ0BpZ28yL2dlbyc7XG5pbXBvcnQgeyBNYXBTdGF0ZSB9IGZyb20gJy4uLy4uL21hcC5zdGF0ZSc7XG5pbXBvcnQgeyBUb29sU3RhdGUgfSBmcm9tICcuLi8uLi8uLi90b29sL3Rvb2wuc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tYWR2YW5jZWQtc3dpcGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWR2YW5jZWQtc3dpcGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZHZhbmNlZC1zd2lwZS5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRTd2lwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHN3aXBlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsYXllckxpc3Q6IExheWVyW107XG4gIHB1YmxpYyB1c2VyQ29udHJvbGxlZExheWVyTGlzdDogTGF5ZXJbXTtcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIGxheWVyczogVmVjdG9yTGF5ZXJbXTtcbiAgcHVibGljIHJlczogRGV0YWlsZWRDb250ZXh0O1xuICBwdWJsaWMgbGlzdEZvclN3aXBlOiBMYXllcltdO1xuXG4gIC8qKlxuICAgKiBHZXQgYW4gYWN0aXZlIG1hcCBzdGF0ZVxuICAgKi9cbiAgZ2V0IG1hcCgpOiBJZ29NYXAge1xuICAgIHJldHVybiB0aGlzLm1hcFN0YXRlLm1hcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtYXBTdGF0ZTogTWFwU3RhdGUsXG4gICAgcHJpdmF0ZSBjb250ZXh0U2VydmljZTogQ29udGV4dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSB0b29sU3RhdGU6IFRvb2xTdGF0ZSkge1xuICAgICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3Qgb2YgbGF5ZXJzIGZvciBzd2lwZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1hcC5sYXllcnMkLnN1YnNjcmliZShsbCA9PiB0aGlzLnVzZXJDb250cm9sbGVkTGF5ZXJMaXN0ID0gbGwuZmlsdGVyKGxheWVyID0+XG4gICAgICAoIWxheWVyLmJhc2VMYXllciAmJiBsYXllci5zaG93SW5MYXllckxpc3QgJiYgbGF5ZXIuZGlzcGxheWVkKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2FjdGl2YXRlIHRoZSBzd2lwZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5zd2lwZSA9IGZhbHNlO1xuICAgIHRoaXMubWFwLnN3aXBlRW5hYmxlZCQubmV4dCh0aGlzLnN3aXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBhIGZvcm0gZm9yIGNob2lzZSBvZiB0aGUgbGF5ZXJzXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkRm9ybSgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGxheWVyczogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGUgdGhlIHN3aXBlLCBzZW5kIGEgbGlzdCBvZiBsYXllcnMgZm9yIGEgc3dpcGUtdG9vbFxuICAgKi9cbiAgc3RhcnRTd2lwZSh0b2dnbGU6IGJvb2xlYW4pe1xuICAgIHRoaXMuc3dpcGUgPSB0b2dnbGU7XG4gICAgdGhpcy5tYXAuc3dpcGVFbmFibGVkJC5uZXh0KHRvZ2dsZSk7XG4gICAgdGhpcy5saXN0Rm9yU3dpcGUgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMuZm9ybS52YWx1ZS5sYXllcnMpIHtcbiAgICAgIHRoaXMubGlzdEZvclN3aXBlLnB1c2gobGF5ZXIpO1xuICAgIH1cbiAgICB0aGlzLm1hcC5zZWxlY3RlZEZlYXR1cmVzJC5uZXh0KHRoaXMubGlzdEZvclN3aXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN0YXJ0IGEgc3dpcGUgZm9yIGEgbmV3IGxheWVycy1saXN0XG4gICAqL1xuICBhcHBseU5ld0xheWVycyhlKSB7XG4gICAgdGhpcy5zdGFydFN3aXBlKGZhbHNlKTsgLy8gbCdhcHByb2NoZSBLSVNTXG4gICAgdGhpcy5zdGFydFN3aXBlKHRydWUpO1xuICAgIGlmIChlLl9zZWxlY3RlZCkge2UuX3NlbGVjdGVkID0gZmFsc2U7IH1cbiAgICBjb25zdCBhbGxMYXllcnMgPSB0aGlzLnVzZXJDb250cm9sbGVkTGF5ZXJMaXN0Lmxlbmd0aDtcbiAgICBjb25zdCBzZWxlY3RlZExheWVycyA9IHRoaXMuZm9ybS5jb250cm9scy5sYXllcnMudmFsdWUubGVuZ3RoO1xuICAgIGlmIChzZWxlY3RlZExheWVycyA9PT0gYWxsTGF5ZXJzKXtcbiAgICAgIGUuX3NlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGFsbCBsaXN0IG9mIGxheWVycyBhbmQgcmVzdGFydCBhIHRvb2xcbiAgICovXG4gIHNlbGVjdEFsbChlKSB7XG4gICAgaWYgKGUuX3NlbGVjdGVkKSB7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHMubGF5ZXJzLnNldFZhbHVlKHRoaXMudXNlckNvbnRyb2xsZWRMYXllckxpc3QpO1xuICAgICAgZS5fc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9scy5sYXllcnMuc2V0VmFsdWUoW10pO1xuICAgIH1cbiAgICB0aGlzLnN0YXJ0U3dpcGUoZmFsc2UpO1xuICAgIHRoaXMuc3RhcnRTd2lwZSh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIHNlYXJjaCB0b29sXG4gICAqL1xuICBzZWFyY2hFbWl0KCkge1xuICAgIHRoaXMudG9vbFN0YXRlLnRvb2xib3guYWN0aXZhdGVUb29sKCdzZWFyY2hSZXN1bHRzJyk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBjYXRhbG9nXG4gICAqL1xuICBjYXRhbG9nRW1pdCgpIHtcbiAgICB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmFjdGl2YXRlVG9vbCgnY2F0YWxvZycpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gY29udGV4dCBtYW5hZ2VyXG4gICAqL1xuICBjb250ZXh0RW1pdCgpIHtcbiAgICB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmFjdGl2YXRlVG9vbCgnY29udGV4dE1hbmFnZXInKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cInVzZXJDb250cm9sbGVkTGF5ZXJMaXN0Lmxlbmd0aDsgZWxzZSBub0xheWVyc0Jsb2NrXCIgY2xhc3M9XCJpZ28tc3dpcGUtc2VsZWN0LWNvbnRhaW5lclwiPlxuICAgIDxmb3JtIGNsYXNzPVwiaWdvLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD57eydpZ28uaW50ZWdyYXRpb24uYWR2YW5jZWQtbWFwLXRvb2wuYWR2YW5jZWQtc3dpcGUuc3dpcGUtc2VsZWN0JyB8IHRyYW5zbGF0ZX19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJsYXllcnNcIiBtdWx0aXBsZT5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwiMVwiIChjbGljayk9XCJzZWxlY3RBbGwoZSlcIiAjZT5cbiAgICAgICAgICAgICAgICAgICAge3snaWdvLmludGVncmF0aW9uLmFkdmFuY2VkLW1hcC10b29sLmFkdmFuY2VkLXN3aXBlLnNlbGVjdEFsbCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbGF5ZXIgb2YgdXNlckNvbnRyb2xsZWRMYXllckxpc3RcIiBbdmFsdWVdPVwibGF5ZXJcIiAoY2xpY2spPVwiYXBwbHlOZXdMYXllcnMoZSlcIj57e2xheWVyLnRpdGxlfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9mb3JtPlxuXG4gICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJzd2lwZS10b2dnbGUgbWF0LXR5cG9ncmFwaHlcIlxuICAgICAgICBbY2hlY2tlZF09XCJzd2lwZVwiXG4gICAgICAgIFtsYWJlbFBvc2l0aW9uXT1cIidiZWZvcmUnXCJcbiAgICAgICAgKGNoYW5nZSk9XCJzdGFydFN3aXBlKCRldmVudC5jaGVja2VkKVwiPlxuICAgICAgICB7eydpZ28uaW50ZWdyYXRpb24uYWR2YW5jZWQtbWFwLXRvb2wuYWR2YW5jZWQtc3dpcGUuc3dpcGUnIHwgdHJhbnNsYXRlfX1cbiAgICA8L21hdC1zbGlkZS10b2dnbGU+IFxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjbm9MYXllcnNCbG9jaz5cbiAgICA8bWF0LWxpc3Q+XG4gICAgICAgIDxwIGNsYXNzPVwibWFwLWVtcHR5IG1hdC10eXBvZ3JhcGh5XCI+XG4gICAgICAgICAgICB7eydpZ28uaW50ZWdyYXRpb24uYWR2YW5jZWQtbWFwLXRvb2wuYWR2YW5jZWQtc3dpcGUuZW1wdHknIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwibWFwLWVtcHR5IG1hdC10eXBvZ3JhcGh5XCI+XG4gICAgICAgICAgICB7eydpZ28uaW50ZWdyYXRpb24uYWR2YW5jZWQtbWFwLXRvb2wuYWR2YW5jZWQtc3dpcGUuY3VzdG9taXplJyB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICA8bWF0LWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uIHN2Z0ljb249XCJtYWduaWZ5XCI+PC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDxoNCBtYXRMaW5lIGNsYXNzPVwic2VhcmNoLXRvb2wgbWF0LXR5cG9ncmFwaHlcIiAoY2xpY2spPVwic2VhcmNoRW1pdCgpXCI+XG4gICAgICAgICAgICAgICAge3snaWdvLmludGVncmF0aW9uLmFkdmFuY2VkLW1hcC10b29sLmFkdmFuY2VkLXN3aXBlLnNlYXJjaC10b29sJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICAgIDxtYXQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24gc3ZnSWNvbj1cImxheWVycy1wbHVzXCI+PC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDxoNCBtYXRMaW5lIGNsYXNzPVwiY2F0YWxvZy10b29sIG1hdC10eXBvZ3JhcGh5XCIgKGNsaWNrKT1cImNhdGFsb2dFbWl0KClcIj5cbiAgICAgICAgICAgICAgICB7eydpZ28uaW50ZWdyYXRpb24uYWR2YW5jZWQtbWFwLXRvb2wuYWR2YW5jZWQtc3dpcGUuY2F0YWxvZy10b29sJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICAgIDxtYXQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24gc3ZnSWNvbj1cInN0YXJcIj48L21hdC1pY29uPlxuICAgICAgICAgICAgPGg0IG1hdExpbmUgY2xhc3M9XCJjb250ZXh0LXRvb2wgbWF0LXR5cG9ncmFwaHlcIiAoY2xpY2spPVwiY29udGV4dEVtaXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7J2lnby5pbnRlZ3JhdGlvbi5hZHZhbmNlZC1tYXAtdG9vbC5hZHZhbmNlZC1zd2lwZS5jb250ZXh0LXRvb2wnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgICA8L21hdC1saXN0PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==