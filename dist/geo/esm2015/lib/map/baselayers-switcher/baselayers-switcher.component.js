import { Component, Input } from '@angular/core';
import { Media } from '@igo2/core';
import { baseLayersSwitcherSlideInOut } from './baselayers-switcher.animation';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
function BaseLayersSwitcherComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "button", 7);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "mat-icon", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 1, "igo.geo.mapButtons.baselayerSwitcher"));
} }
function BaseLayersSwitcherComponent_div_0_igo_mini_basemap_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-mini-basemap", 9);
    i0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const baseLayer_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("map", ctx_r2.map)("baseLayer", baseLayer_r3)("title", ctx_r2.baseLayers.length > 2 && !ctx_r2.expand ? i0.ɵɵpipeBind1(1, 5, "igo.geo.baselayersSwitcher.title") : baseLayer_r3.title)("display", ctx_r2.expand || i_r4 === 0 && !ctx_r2.useStaticIcon)("disabled", !ctx_r2.expand && ctx_r2.baseLayers.length > 1);
} }
const _c0 = function (a0) { return { "container-expand": a0 }; };
function BaseLayersSwitcherComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("@baseLayerSwitcherState.start", function BaseLayersSwitcherComponent_div_0_Template_div_animation_baseLayerSwitcherState_start_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.showButton = false; })("@baseLayerSwitcherState.done", function BaseLayersSwitcherComponent_div_0_Template_div_animation_baseLayerSwitcherState_done_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.showButton = true; })("click", function BaseLayersSwitcherComponent_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.collapseOrExpand(); });
    i0.ɵɵtemplate(1, BaseLayersSwitcherComponent_div_0_div_1_Template, 4, 3, "div", 2);
    i0.ɵɵtemplate(2, BaseLayersSwitcherComponent_div_0_igo_mini_basemap_2_Template, 2, 7, "igo-mini-basemap", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelement(4, "mat-icon", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx_r0.expand))("@baseLayerSwitcherState", ctx_r0.expand ? "expand" : ctx_r0.useStaticIcon ? "collapseIcon" : "collapseMap");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.useStaticIcon && !ctx_r0.expand && ctx_r0.showButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.baseLayers);
} }
export class BaseLayersSwitcherComponent {
    constructor(mediaService) {
        this.mediaService = mediaService;
        this._baseLayers = [];
        this.expand = false;
        this.showButton = true;
        const media = this.mediaService.media$.value;
        if (media === Media.Mobile && this.useStaticIcon === undefined) {
            this.useStaticIcon = true;
        }
    }
    ngAfterViewInit() {
        this.layers$$ = this.map.layers$.subscribe(arrayLayers => {
            this._baseLayers = arrayLayers.filter(l => l.baseLayer);
        });
    }
    ngOnDestroy() {
        this.layers$$.unsubscribe();
    }
    collapseOrExpand() {
        if (this.baseLayers.length > 1 || this.useStaticIcon) {
            this.expand = !this.expand;
        }
        else {
            this.expand = false;
        }
    }
    get baseLayers() {
        const mapResolution = this.map.viewController.getResolution();
        const mapZoom = this.map.viewController.getZoom();
        const bl = this._baseLayers.filter(l => {
            return ((!l.options.maxResolution ||
                mapResolution <= l.options.maxResolution) &&
                (!l.options.minResolution || mapResolution >= l.options.minResolution) &&
                (!l.options.source.options.maxZoom || mapZoom <= l.options.source.options.maxZoom) &&
                (!l.options.source.options.minZoom || mapZoom >= l.options.source.options.minZoom));
        });
        const blHidden = bl.filter(l => !l.visible);
        return blHidden.length + 1 === bl.length ? blHidden : bl;
    }
}
BaseLayersSwitcherComponent.ɵfac = function BaseLayersSwitcherComponent_Factory(t) { return new (t || BaseLayersSwitcherComponent)(i0.ɵɵdirectiveInject(i1.MediaService)); };
BaseLayersSwitcherComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseLayersSwitcherComponent, selectors: [["igo-baselayers-switcher"]], inputs: { map: "map", useStaticIcon: "useStaticIcon" }, decls: 1, vars: 1, consts: [["class", "igo-baselayers-switcher-container", 3, "ngClass", "click", 4, "ngIf"], [1, "igo-baselayers-switcher-container", 3, "ngClass", "click"], ["class", "igo-baselayers-switcher-button-container", 4, "ngIf"], ["class", "mat-typography", 3, "map", "baseLayer", "title", "display", "disabled", 4, "ngFor", "ngForOf"], [1, "more-baselayers"], ["color", "primary", "svgIcon", "menu-down", 1, "material-icons", "mat-icon", "mat-list-avatar"], [1, "igo-baselayers-switcher-button-container"], ["mat-icon-button", "", "matTooltipPosition", "right", "color", "primary", 3, "matTooltip"], ["svgIcon", "image-multiple"], [1, "mat-typography", 3, "map", "baseLayer", "title", "display", "disabled"]], template: function BaseLayersSwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BaseLayersSwitcherComponent_div_0_Template, 5, 6, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.baseLayers.length > 0);
    } }, styles: [".igo-baselayers-switcher-container[_ngcontent-%COMP%]{height:auto;position:relative}.container-expand[_ngcontent-%COMP%]{overflow:hidden;border-width:0}.more-baselayers[_ngcontent-%COMP%]{width:80px;height:20px;background-color:#fff;text-align:center;cursor:pointer}.more-baselayers[_ngcontent-%COMP%]:hover{background-color:#efefef}.igo-baselayers-switcher-button-container[_ngcontent-%COMP%]{width:40px;background-color:#fff}.igo-baselayers-switcher-button-container[_ngcontent-%COMP%]:hover{background-color:#efefef}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"], data: { animation: [baseLayersSwitcherSlideInOut()] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseLayersSwitcherComponent, [{
        type: Component,
        args: [{
                selector: 'igo-baselayers-switcher',
                templateUrl: './baselayers-switcher.component.html',
                styleUrls: ['./baselayers-switcher.component.scss'],
                animations: [baseLayersSwitcherSlideInOut()]
            }]
    }], function () { return [{ type: i1.MediaService }]; }, { map: [{
            type: Input
        }], useStaticIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZWxheWVycy1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9tYXAvYmFzZWxheWVycy1zd2l0Y2hlci9iYXNlbGF5ZXJzLXN3aXRjaGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9iYXNlbGF5ZXJzLXN3aXRjaGVyL2Jhc2VsYXllcnMtc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRzNFLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR2pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0lDRTFFLDhCQUFxRztJQUNuRyxpQ0FJa0I7O0lBQ2hCLDhCQUE4QztJQUNoRCxpQkFBUztJQUNYLGlCQUFNOztJQUxGLGVBQWlFO0lBQWpFLHlGQUFpRTs7O0lBT3JFLHNDQU1tQjs7Ozs7O0lBTGpCLGdDQUFXLDJCQUFBLHlJQUFBLGlFQUFBLDREQUFBOzs7OztJQW5CbEIsOEJBTWtDO0lBRjdCLGtQQUE0QyxLQUFLLElBQUMsbU9BQ1AsSUFBSSxJQURHLHFMQUFBO0lBSWxELGtGQVFNO0lBRU4sNEdBTW1CO0lBRXBCLDhCQUE2QjtJQUMzQiw4QkFBeUc7SUFDM0csaUJBQU07SUFFVixpQkFBTTs7O0lBNUJELG1FQUF3Qyw2R0FBQTtJQU1sQyxlQUE0QztJQUE1QyxrRkFBNEM7SUFVYSxlQUFlO0lBQWYsMkNBQWU7O0FESm5GLE1BQU0sT0FBTywyQkFBMkI7SUFVdEMsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFOdkMsZ0JBQVcsR0FBWSxFQUFFLENBQUM7UUFDMUIsV0FBTSxH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LEVBQUUsQ0FBQzthQUM3QzsrREFFVSxHQUFHO2tCQUFYLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlLCBNZWRpYSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi8uLi9sYXllcic7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgYmFzZUxheWVyc1N3aXRjaGVyU2xpZGVJbk91dCB9IGZyb20gJy4vYmFzZWxheWVycy1zd2l0Y2hlci5hbmltYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tYmFzZWxheWVycy1zd2l0Y2hlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXNlbGF5ZXJzLXN3aXRjaGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFzZWxheWVycy1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbYmFzZUxheWVyc1N3aXRjaGVyU2xpZGVJbk91dCgpXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlTGF5ZXJzU3dpdGNoZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBtYXA6IElnb01hcDtcbiAgQElucHV0KCkgdXNlU3RhdGljSWNvbjogYm9vbGVhbjtcblxuICBwdWJsaWMgX2Jhc2VMYXllcnM6IExheWVyW10gPSBbXTtcbiAgcHVibGljIGV4cGFuZCA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd0J1dHRvbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBsYXllcnMkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2UpIHtcbiAgICBjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFTZXJ2aWNlLm1lZGlhJC52YWx1ZTtcbiAgICBpZiAobWVkaWEgPT09IE1lZGlhLk1vYmlsZSAmJiB0aGlzLnVzZVN0YXRpY0ljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51c2VTdGF0aWNJY29uID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5sYXllcnMkJCA9IHRoaXMubWFwLmxheWVycyQuc3Vic2NyaWJlKGFycmF5TGF5ZXJzID0+IHtcbiAgICAgIHRoaXMuX2Jhc2VMYXllcnMgPSBhcnJheUxheWVycy5maWx0ZXIobCA9PiBsLmJhc2VMYXllcik7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmxheWVycyQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBjb2xsYXBzZU9yRXhwYW5kKCkge1xuICAgIGlmICh0aGlzLmJhc2VMYXllcnMubGVuZ3RoID4gMSB8fCB0aGlzLnVzZVN0YXRpY0ljb24pIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gIXRoaXMuZXhwYW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGFuZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBiYXNlTGF5ZXJzKCk6IExheWVyW10ge1xuICAgIGNvbnN0IG1hcFJlc29sdXRpb24gPSB0aGlzLm1hcC52aWV3Q29udHJvbGxlci5nZXRSZXNvbHV0aW9uKCk7XG4gICAgY29uc3QgbWFwWm9vbSA9IHRoaXMubWFwLnZpZXdDb250cm9sbGVyLmdldFpvb20oKTtcblxuICAgIGNvbnN0IGJsID0gdGhpcy5fYmFzZUxheWVycy5maWx0ZXIobCA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoIWwub3B0aW9ucy5tYXhSZXNvbHV0aW9uIHx8XG4gICAgICAgICAgbWFwUmVzb2x1dGlvbiA8PSBsLm9wdGlvbnMubWF4UmVzb2x1dGlvbikgJiZcbiAgICAgICAgKCFsLm9wdGlvbnMubWluUmVzb2x1dGlvbiB8fCBtYXBSZXNvbHV0aW9uID49IGwub3B0aW9ucy5taW5SZXNvbHV0aW9uKSAmJlxuICAgICAgICAoIWwub3B0aW9ucy5zb3VyY2Uub3B0aW9ucy5tYXhab29tIHx8IG1hcFpvb20gPD0gbC5vcHRpb25zLnNvdXJjZS5vcHRpb25zLm1heFpvb20pICYmXG4gICAgICAgICghbC5vcHRpb25zLnNvdXJjZS5vcHRpb25zLm1pblpvb20gfHwgbWFwWm9vbSA+PSBsLm9wdGlvbnMuc291cmNlLm9wdGlvbnMubWluWm9vbSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBibEhpZGRlbiA9IGJsLmZpbHRlcihsID0+ICFsLnZpc2libGUpO1xuICAgIHJldHVybiBibEhpZGRlbi5sZW5ndGggKyAxID09PSBibC5sZW5ndGggPyBibEhpZGRlbiA6IGJsO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiYmFzZUxheWVycy5sZW5ndGggPiAwXCJcbiAgICAgY2xhc3M9XCJpZ28tYmFzZWxheWVycy1zd2l0Y2hlci1jb250YWluZXJcIlxuICAgICBbbmdDbGFzc109XCJ7J2NvbnRhaW5lci1leHBhbmQnOiBleHBhbmR9XCJcbiAgICAgW0BiYXNlTGF5ZXJTd2l0Y2hlclN0YXRlXT1cImV4cGFuZCA/ICdleHBhbmQnIDogdXNlU3RhdGljSWNvbiA/ICdjb2xsYXBzZUljb24nIDogJ2NvbGxhcHNlTWFwJ1wiXG4gICAgIChAYmFzZUxheWVyU3dpdGNoZXJTdGF0ZS5zdGFydCk9XCJzaG93QnV0dG9uPWZhbHNlXCJcbiAgICAgKEBiYXNlTGF5ZXJTd2l0Y2hlclN0YXRlLmRvbmUpPVwic2hvd0J1dHRvbj10cnVlXCJcbiAgICAgKGNsaWNrKT1cImNvbGxhcHNlT3JFeHBhbmQoKVwiPlxuXG4gICAgIDxkaXYgKm5nSWY9XCJ1c2VTdGF0aWNJY29uICYmICFleHBhbmQgJiYgc2hvd0J1dHRvblwiIGNsYXNzPVwiaWdvLWJhc2VsYXllcnMtc3dpdGNoZXItYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgIDxidXR0b25cbiAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8ubWFwQnV0dG9ucy5iYXNlbGF5ZXJTd2l0Y2hlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImltYWdlLW11bHRpcGxlXCI+PC9tYXQtaWNvbj5cbiAgICAgICA8L2J1dHRvbj5cbiAgICAgPC9kaXY+XG5cbiAgICAgPGlnby1taW5pLWJhc2VtYXAgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiICpuZ0Zvcj1cImxldCBiYXNlTGF5ZXIgb2YgYmFzZUxheWVyczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgW21hcF09XCJtYXBcIlxuICAgICAgIFtiYXNlTGF5ZXJdPVwiYmFzZUxheWVyXCJcbiAgICAgICBbdGl0bGVdPVwiKGJhc2VMYXllcnMubGVuZ3RoID4gMiAmJiAhZXhwYW5kKSA/ICgnaWdvLmdlby5iYXNlbGF5ZXJzU3dpdGNoZXIudGl0bGUnIHwgdHJhbnNsYXRlKSA6IGJhc2VMYXllci50aXRsZVwiXG4gICAgICAgW2Rpc3BsYXldPVwiZXhwYW5kIHx8IChpID09PSAwICYmICF1c2VTdGF0aWNJY29uKVwiXG4gICAgICAgW2Rpc2FibGVkXT1cIiFleHBhbmQgJiYgYmFzZUxheWVycy5sZW5ndGggPiAxXCI+XG4gICAgIDwvaWdvLW1pbmktYmFzZW1hcD5cblxuICAgIDxkaXYgY2xhc3M9XCJtb3JlLWJhc2VsYXllcnNcIj5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1hdC1pY29uIG1hdC1saXN0LWF2YXRhclwiIGNvbG9yPVwicHJpbWFyeVwiIHN2Z0ljb249XCJtZW51LWRvd25cIj48L21hdC1pY29uPlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cbiJdfQ==