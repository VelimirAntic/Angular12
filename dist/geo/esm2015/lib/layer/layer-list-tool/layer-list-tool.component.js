import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/badge";
import * as i10 from "@igo2/common";
import * as i11 from "@ngx-translate/core";
function LayerListToolComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function LayerListToolComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.clearTerm(); });
    i0.ɵɵelement(1, "mat-icon", 10);
    i0.ɵɵelementEnd();
} }
export class LayerListToolComponent {
    constructor() {
        this.onlyVisible$ = new BehaviorSubject(false);
        this.sortAlpha$ = new BehaviorSubject(false);
        this.term$ = new BehaviorSubject(undefined);
        this.layersAreAllVisible = true;
        this.floatLabel = 'auto';
        this.selectionMode = false;
        this.appliedFilterAndSort = new EventEmitter();
        this.selection = new EventEmitter();
    }
    set onlyVisible(value) {
        this.onlyVisible$.next(value);
    }
    get onlyVisible() {
        return this.onlyVisible$.value;
    }
    set sortAlpha(value) {
        this.sortAlpha$.next(value);
    }
    get sortAlpha() {
        return this.sortAlpha$.value;
    }
    set term(value) {
        this.term$.next(value);
    }
    get term() {
        return this.term$.value;
    }
    ngOnInit() {
        this.term$$ = this.term$.subscribe(keyword => {
            this.appliedFilterAndSort.emit({
                keyword,
                onlyVisible: this.onlyVisible,
                sortAlpha: this.sortAlpha
            });
        });
        this.onlyVisible$$ = this.onlyVisible$.subscribe(onlyVisible => {
            this.appliedFilterAndSort.emit({
                keyword: this.term,
                onlyVisible,
                sortAlpha: this.sortAlpha
            });
        });
        this.sortAlpha$$ = this.sortAlpha$.subscribe(sortAlpha => {
            this.appliedFilterAndSort.emit({
                keyword: this.term,
                onlyVisible: this.onlyVisible,
                sortAlpha
            });
        });
    }
    ngOnDestroy() {
        this.onlyVisible$$.unsubscribe();
        this.sortAlpha$$.unsubscribe();
        this.term$$.unsubscribe();
    }
    clearTerm() {
        this.term = undefined;
    }
    toggleSortAlpha() {
        this.sortAlpha = !this.sortAlpha;
    }
    toggleOnlyVisible() {
        this.onlyVisible = !this.onlyVisible;
    }
    toggleSelectionMode() {
        this.selectionMode = !this.selectionMode;
        this.selection.emit(this.selectionMode);
    }
}
LayerListToolComponent.ɵfac = function LayerListToolComponent_Factory(t) { return new (t || LayerListToolComponent)(); };
LayerListToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerListToolComponent, selectors: [["igo-layer-list-tool"]], inputs: { layersAreAllVisible: "layersAreAllVisible", floatLabel: "floatLabel", onlyVisible: "onlyVisible", sortAlpha: "sortAlpha", term: "term" }, outputs: { appliedFilterAndSort: "appliedFilterAndSort", selection: "selection" }, decls: 21, vars: 30, consts: [[1, "inputFilter", 3, "floatLabel"], ["matInput", "", "matTooltipShowDelay", "500", "type", "text", 3, "placeholder", "matTooltip", "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", "color", "warn", 3, "click", 4, "ngIf"], ["matTooltipShowDelay", "500", 3, "matTooltip"], ["mat-icon-button", "", 1, "sort-alpha", 3, "color", "click"], [3, "svgIcon"], ["mat-icon-button", "", 1, "only-visible", 3, "disabled", "color", "click"], ["matBadge", "icon", "igoMatBadgeIcon", "eye", "igoMatBadgeInverseColor", "true", "igoMatBadgeInheritColor", "true", 3, "svgIcon"], ["mat-icon-button", "", "color", "primary", 1, "selection-mode", 3, "click"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", "color", "warn", 3, "click"], ["svgIcon", "close"]], template: function LayerListToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list-item");
        i0.ɵɵelementStart(1, "mat-form-field", 0);
        i0.ɵɵelementStart(2, "input", 1);
        i0.ɵɵlistener("ngModelChange", function LayerListToolComponent_Template_input_ngModelChange_2_listener($event) { return ctx.term = $event; });
        i0.ɵɵpipe(3, "translate");
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, LayerListToolComponent_button_5_Template, 2, 0, "button", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵelementStart(9, "button", 4);
        i0.ɵɵlistener("click", function LayerListToolComponent_Template_button_click_9_listener() { return ctx.toggleSortAlpha(); });
        i0.ɵɵelement(10, "mat-icon", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 3);
        i0.ɵɵpipe(12, "translate");
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementStart(14, "button", 6);
        i0.ɵɵlistener("click", function LayerListToolComponent_Template_button_click_14_listener() { return ctx.toggleOnlyVisible(); });
        i0.ɵɵelement(15, "mat-icon", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 3);
        i0.ɵɵpipe(17, "translate");
        i0.ɵɵpipe(18, "translate");
        i0.ɵɵelementStart(19, "button", 8);
        i0.ɵɵlistener("click", function LayerListToolComponent_Template_button_click_19_listener() { return ctx.toggleSelectionMode(); });
        i0.ɵɵelement(20, "mat-icon", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("floatLabel", ctx.floatLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 14, "igo.geo.layer.filterPlaceholder"))("matTooltip", i0.ɵɵpipeBind1(4, 16, "igo.geo.layer.subsetLayersListKeyword"))("ngModel", ctx.term);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.term);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.sortAlpha ? i0.ɵɵpipeBind1(7, 18, "igo.geo.layer.sortMapOrder") : i0.ɵɵpipeBind1(8, 20, "igo.geo.layer.sortAlphabetically"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("color", ctx.sortAlpha ? "warn" : "primary");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("svgIcon", ctx.sortAlpha ? "sort-ascending" : "sort-alphabetical-ascending");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.onlyVisible ? i0.ɵɵpipeBind1(12, 22, "igo.geo.layer.resetLayersList") : i0.ɵɵpipeBind1(13, 24, "igo.geo.layer.subsetLayersListOnlyVisible"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.layersAreAllVisible && !ctx.onlyVisible)("color", ctx.onlyVisible ? "warn" : "primary");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("svgIcon", ctx.onlyVisible ? "filter-remove" : "filter");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.selectionMode ? i0.ɵɵpipeBind1(17, 26, "igo.geo.layer.deactivateSelectionMode") : i0.ɵɵpipeBind1(18, 28, "igo.geo.layer.activateSelectionMode"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("svgIcon", ctx.selectionMode ? "checkbox-multiple-marked-outline" : "checkbox-multiple-blank-outline");
    } }, directives: [i1.MatListItem, i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i5.MatTooltip, i4.NgControlStatus, i4.NgModel, i6.NgIf, i7.MatButton, i8.MatIcon, i9.MatBadge, i10.IgoBadgeIconDirective, i2.MatSuffix], pipes: [i11.TranslatePipe], styles: ["mat-form-field.inputFilter[_ngcontent-%COMP%]{width:calc(100% - 100px);max-width:200px}.selection-mode[_ngcontent-%COMP%]{margin-left:5px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerListToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-layer-list-tool',
                templateUrl: './layer-list-tool.component.html',
                styleUrls: ['./layer-list-tool.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { layersAreAllVisible: [{
            type: Input
        }], floatLabel: [{
            type: Input
        }], onlyVisible: [{
            type: Input
        }], sortAlpha: [{
            type: Input
        }], term: [{
            type: Input
        }], appliedFilterAndSort: [{
            type: Output
        }], selection: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGlzdC10b29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2xheWVyL2xheWVyLWxpc3QtdG9vbC9sYXllci1saXN0LXRvb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvbGF5ZXItbGlzdC10b29sL2xheWVyLWxpc3QtdG9vbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFFdkIsWUFBWSxFQUNaLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDRjdDLGlDQU93QjtJQUF0Qiw0TEFBcUI7SUFDckIsK0JBQXFDO0lBQ3ZDLGlCQUFTOztBREVqQixNQUFNLE9BQU8sc0JBQXNCO0lBTm5DO1FBT1MsaUJBQVksR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBSzlELHdCQUFtQixHQUFZLElBQUksQ0FBQztRQUVwQyxlQUFVLEdBQW1CLE1BQU0sQ0FBQztRQTBCdEMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFbkIseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7UUFDcEUsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0FnRG5EO0lBM0VDLElBQ0ksV0FBVyxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FB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QUNiLGlCQUFTO1FBQ1gsaUJBQU07UUFFTiwrQkFFZ0Y7OztRQUM5RSxrQ0FDa0Q7UUFBaEMsb0dBQVMseUJBQXFCLElBQUM7UUFDL0MsK0JBQXdIO1FBQzFILGlCQUFTO1FBQ1gsaUJBQU07UUFFYixpQkFBZ0I7O1FBbkQwQixlQUF5QjtRQUF6QiwyQ0FBeUI7UUFHekQsZUFBNkQ7UUFBN0Qsc0ZBQTZELDhFQUFBLHFCQUFBO1FBTTVELGVBQVU7UUFBViwrQkFBVTtRQVVWLGVBRTRDO1FBRjVDLDRKQUU0QztRQUNwQixlQUF3QztRQUF4QywwREFBd0M7UUFDdkQsZUFBd0U7UUFBeEUsMEZBQXdFO1FBSWhGLGVBRXNEO1FBRnRELDRLQUVzRDtRQUNaLGVBQWdEO1FBQWhELHNFQUFnRCwrQ0FBQTtRQU96RixlQUFvRDtRQUFwRCxzRUFBb0Q7UUFLckQsZUFFZ0Q7UUFGaEQsZ0xBRWdEO1FBR3ZDLGVBQWtHO1FBQWxHLG9IQUFrRzs7dUZEN0IxRyxzQkFBc0I7Y0FObEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFTVSxtQkFBbUI7a0JBQTNCLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLO1lBR0YsV0FBVztrQkFEZCxLQUFLO1lBU0YsU0FBUztrQkFEWixLQUFLO1lBU0YsSUFBSTtrQkFEUCxLQUFLO1lBVUksb0JBQW9CO2tCQUE3QixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGbG9hdExhYmVsVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExheWVyTGlzdENvbnRyb2xzT3B0aW9ucyB9IGZyb20gJy4vbGF5ZXItbGlzdC10b29sLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1sYXllci1saXN0LXRvb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5ZXItbGlzdC10b29sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5ZXItbGlzdC10b29sLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExheWVyTGlzdFRvb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBvbmx5VmlzaWJsZSQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBwdWJsaWMgc29ydEFscGhhJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHB1YmxpYyB0ZXJtJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gIG9ubHlWaXNpYmxlJCQ6IFN1YnNjcmlwdGlvbjtcbiAgc29ydEFscGhhJCQ6IFN1YnNjcmlwdGlvbjtcbiAgdGVybSQkOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KCkgbGF5ZXJzQXJlQWxsVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgZmxvYXRMYWJlbDogRmxvYXRMYWJlbFR5cGUgPSAnYXV0byc7XG5cbiAgQElucHV0KClcbiAgc2V0IG9ubHlWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5vbmx5VmlzaWJsZSQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IG9ubHlWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9ubHlWaXNpYmxlJC52YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzb3J0QWxwaGEodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNvcnRBbHBoYSQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHNvcnRBbHBoYSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0QWxwaGEkLnZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHRlcm0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudGVybSQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHRlcm0oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtJC52YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3Rpb25Nb2RlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGFwcGxpZWRGaWx0ZXJBbmRTb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxMYXllckxpc3RDb250cm9sc09wdGlvbnM+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtJCQgPSB0aGlzLnRlcm0kLnN1YnNjcmliZShrZXl3b3JkID0+IHtcbiAgICAgIHRoaXMuYXBwbGllZEZpbHRlckFuZFNvcnQuZW1pdCh7XG4gICAgICAgIGtleXdvcmQsXG4gICAgICAgIG9ubHlWaXNpYmxlOiB0aGlzLm9ubHlWaXNpYmxlLFxuICAgICAgICBzb3J0QWxwaGE6IHRoaXMuc29ydEFscGhhXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub25seVZpc2libGUkJCA9IHRoaXMub25seVZpc2libGUkLnN1YnNjcmliZShvbmx5VmlzaWJsZSA9PiB7XG4gICAgICB0aGlzLmFwcGxpZWRGaWx0ZXJBbmRTb3J0LmVtaXQoe1xuICAgICAgICBrZXl3b3JkOiB0aGlzLnRlcm0sXG4gICAgICAgIG9ubHlWaXNpYmxlLFxuICAgICAgICBzb3J0QWxwaGE6IHRoaXMuc29ydEFscGhhXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNvcnRBbHBoYSQkID0gdGhpcy5zb3J0QWxwaGEkLnN1YnNjcmliZShzb3J0QWxwaGEgPT4ge1xuICAgICAgdGhpcy5hcHBsaWVkRmlsdGVyQW5kU29ydC5lbWl0KHtcbiAgICAgICAga2V5d29yZDogdGhpcy50ZXJtLFxuICAgICAgICBvbmx5VmlzaWJsZTogdGhpcy5vbmx5VmlzaWJsZSxcbiAgICAgICAgc29ydEFscGhhXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMub25seVZpc2libGUkJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc29ydEFscGhhJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnRlcm0kJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY2xlYXJUZXJtKCkge1xuICAgIHRoaXMudGVybSA9IHVuZGVmaW5lZDtcbiAgfVxuICB0b2dnbGVTb3J0QWxwaGEoKSB7XG4gICAgdGhpcy5zb3J0QWxwaGEgPSAhdGhpcy5zb3J0QWxwaGE7XG4gIH1cblxuICB0b2dnbGVPbmx5VmlzaWJsZSgpIHtcbiAgICB0aGlzLm9ubHlWaXNpYmxlID0gIXRoaXMub25seVZpc2libGU7XG4gIH1cblxuICB0b2dnbGVTZWxlY3Rpb25Nb2RlKCkge1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9ICF0aGlzLnNlbGVjdGlvbk1vZGU7XG4gICAgdGhpcy5zZWxlY3Rpb24uZW1pdCh0aGlzLnNlbGVjdGlvbk1vZGUpO1xuICB9XG59XG4iLCIgIDxtYXQtbGlzdC1pdGVtPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiaW5wdXRGaWx0ZXJcIiBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidpZ28uZ2VvLmxheWVyLmZpbHRlclBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8ubGF5ZXIuc3Vic2V0TGF5ZXJzTGlzdEtleXdvcmQnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwidGVybVwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICAgICpuZ0lmPVwidGVybVwiXG4gICAgICAgICAgbWF0U3VmZml4XG4gICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyXCJcbiAgICAgICAgICBjb2xvcj1cIndhcm5cIlxuICAgICAgICAgIChjbGljayk9XCJjbGVhclRlcm0oKVwiPlxuICAgICAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiY2xvc2VcIj48L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDxkaXYgW21hdFRvb2x0aXBdPVwic29ydEFscGhhID9cbiAgICAgICgnaWdvLmdlby5sYXllci5zb3J0TWFwT3JkZXInIHwgdHJhbnNsYXRlKSA6XG4gICAgICAoJ2lnby5nZW8ubGF5ZXIuc29ydEFscGhhYmV0aWNhbGx5JyB8IHRyYW5zbGF0ZSlcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzb3J0LWFscGhhXCIgW2NvbG9yXT1cInNvcnRBbHBoYSA/ICd3YXJuJyA6ICdwcmltYXJ5J1wiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlU29ydEFscGhhKClcIj5cbiAgICAgICAgICA8bWF0LWljb24gW3N2Z0ljb25dPVwic29ydEFscGhhID8gJ3NvcnQtYXNjZW5kaW5nJyA6ICdzb3J0LWFscGhhYmV0aWNhbC1hc2NlbmRpbmcnXCI+PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgIDxkaXYgW21hdFRvb2x0aXBdPVwib25seVZpc2libGUgP1xuICAgICAgICAoJ2lnby5nZW8ubGF5ZXIucmVzZXRMYXllcnNMaXN0JyB8IHRyYW5zbGF0ZSkgOlxuICAgICAgICAoJ2lnby5nZW8ubGF5ZXIuc3Vic2V0TGF5ZXJzTGlzdE9ubHlWaXNpYmxlJyB8IHRyYW5zbGF0ZSlcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCI+XG4gICAgICAgICA8YnV0dG9uIGNsYXNzPVwib25seS12aXNpYmxlXCIgbWF0LWljb24tYnV0dG9uIFtkaXNhYmxlZF09XCJsYXllcnNBcmVBbGxWaXNpYmxlICYmICFvbmx5VmlzaWJsZVwiXG4gICAgICAgICAgIFtjb2xvcl09XCJvbmx5VmlzaWJsZSA/ICd3YXJuJyA6ICdwcmltYXJ5J1wiIChjbGljayk9XCJ0b2dnbGVPbmx5VmlzaWJsZSgpXCI+XG4gICAgICAgICAgIDxtYXQtaWNvblxuICAgICAgICAgICAgIG1hdEJhZGdlPVwiaWNvblwiXG4gICAgICAgICAgICAgaWdvTWF0QmFkZ2VJY29uPVwiZXllXCJcbiAgICAgICAgICAgICBpZ29NYXRCYWRnZUludmVyc2VDb2xvcj1cInRydWVcIlxuICAgICAgICAgICAgIGlnb01hdEJhZGdlSW5oZXJpdENvbG9yPVwidHJ1ZVwiXG4gICAgICAgICAgICAgW3N2Z0ljb25dPVwib25seVZpc2libGUgPyAnZmlsdGVyLXJlbW92ZScgOiAnZmlsdGVyJ1wiPlxuICAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICAgPC9idXR0b24+XG4gICAgICAgPC9kaXY+XG5cbiAgICAgICA8ZGl2IFttYXRUb29sdGlwXT1cInNlbGVjdGlvbk1vZGUgP1xuICAgICAgICAoJ2lnby5nZW8ubGF5ZXIuZGVhY3RpdmF0ZVNlbGVjdGlvbk1vZGUnIHwgdHJhbnNsYXRlKSA6XG4gICAgICAgICgnaWdvLmdlby5sYXllci5hY3RpdmF0ZVNlbGVjdGlvbk1vZGUnIHwgdHJhbnNsYXRlKVwiIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIj5cbiAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWxlY3Rpb24tbW9kZVwiIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidG9nZ2xlU2VsZWN0aW9uTW9kZSgpXCI+XG4gICAgICAgICAgIDxtYXQtaWNvbiBbc3ZnSWNvbl09XCJzZWxlY3Rpb25Nb2RlID8gJ2NoZWNrYm94LW11bHRpcGxlLW1hcmtlZC1vdXRsaW5lJyA6ICdjaGVja2JveC1tdWx0aXBsZS1ibGFuay1vdXRsaW5lJ1wiPjwvbWF0LWljb24+XG4gICAgICAgICA8L2J1dHRvbj5cbiAgICAgICA8L2Rpdj5cblxuPC9tYXQtbGlzdC1pdGVtPlxuIl19