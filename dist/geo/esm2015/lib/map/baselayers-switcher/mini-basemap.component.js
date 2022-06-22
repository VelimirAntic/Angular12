import { Component, Input } from '@angular/core';
import { IgoMap } from '../shared';
import * as i0 from "@angular/core";
import * as i1 from "../../layer/shared/layer.service";
function MiniBaseMapComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.title, " ");
} }
function MiniBaseMapComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function MiniBaseMapComponent_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.changeBaseLayer(ctx_r2.baseLayer); });
    i0.ɵɵelement(1, "igo-map-browser", 3);
    i0.ɵɵtemplate(2, MiniBaseMapComponent_div_1_div_2_Template, 2, 1, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("map", ctx_r0.basemap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.title);
} }
export class MiniBaseMapComponent {
    constructor(layerService, appRef) {
        this.layerService = layerService;
        this.appRef = appRef;
        this.basemap = new IgoMap({
            controls: {},
            interactions: false
        });
    }
    get baseLayer() {
        return this._baseLayer;
    }
    set baseLayer(value) {
        this._baseLayer = value;
        this.handleBaseLayerChanged(value);
    }
    ngAfterViewInit() {
        this.handleMainMapViewChange(this.map.ol.getView());
        this.map.viewController.olView.on('change', change => {
            this.handleMainMapViewChange(change.target);
        });
        this.map.ol.on('pointerdrag', change => {
            this.handleMainMapViewChange(change.target.getView());
        });
    }
    ngOnDestroy() {
        this.map.viewController.olView.un('change', change => {
            this.handleMainMapViewChange(change.target);
        });
        this.map.ol.un('pointerdrag', change => {
            this.handleMainMapViewChange(change.target.getView());
        });
    }
    changeBaseLayer(baseLayer) {
        if (this.disabled) {
            return;
        }
        this.map.changeBaseLayer(baseLayer);
        this.appRef.tick();
    }
    handleMainMapViewChange(mainMapView) {
        const mainMapViewProperties = mainMapView.getProperties();
        this.basemap.viewController.olView.setResolution(mainMapViewProperties.resolution);
        this.basemap.viewController.olView.setRotation(mainMapViewProperties.rotation);
        this.basemap.viewController.olView.setCenter(this.map.viewController.getCenter());
    }
    handleBaseLayerChanged(baselayer) {
        this.basemap.removeAllLayers();
        const options = Object.assign(Object.create(baselayer.options), baselayer.options, {
            visible: true,
            baseLayer: false
        });
        const layer = this.layerService.createLayer(options);
        this.basemap.addLayer(layer);
        this.handleLinkedBaseLayer(layer);
    }
    handleLinkedBaseLayer(baselayer) {
        const linkedLayers = baselayer.options.linkedLayers;
        if (!linkedLayers) {
            return;
        }
        const currentLinkedId = linkedLayers.linkId;
        const currentLinks = linkedLayers.links;
        const isParentLayer = currentLinks ? true : false;
        if (isParentLayer && currentLinkedId === baselayer.options.linkedLayers.linkId) {
            // search for child layers
            currentLinks.map(link => {
                link.linkedIds.map(linkedId => {
                    const layerToApply = this.map.layers.find(l => { var _a; return ((_a = l.options.linkedLayers) === null || _a === void 0 ? void 0 : _a.linkId) === linkedId; });
                    if (layerToApply) {
                        const linkedLayerOptions = Object.assign(Object.create(layerToApply.options), layerToApply.options, {
                            zIndex: 9000,
                            visible: true,
                            baseLayer: false,
                        });
                        this.basemap.addLayer(this.layerService.createLayer(linkedLayerOptions));
                    }
                });
            });
        }
    }
}
MiniBaseMapComponent.ɵfac = function MiniBaseMapComponent_Factory(t) { return new (t || MiniBaseMapComponent)(i0.ɵɵdirectiveInject(i1.LayerService), i0.ɵɵdirectiveInject(i0.ApplicationRef)); };
MiniBaseMapComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MiniBaseMapComponent, selectors: [["igo-mini-basemap"]], inputs: { map: "map", disabled: "disabled", display: "display", title: "title", baseLayer: "baseLayer" }, decls: 2, vars: 1, consts: [[1, "igo-mini-basemap-container"], [3, "click", 4, "ngIf"], [3, "click"], [3, "map"], ["class", "igo-mini-basemap-title", 4, "ngIf"], [1, "igo-mini-basemap-title"]], template: function MiniBaseMapComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, MiniBaseMapComponent_div_1_Template, 3, 2, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.display);
    } }, styles: [".igo-mini-basemap-container[_ngcontent-%COMP%]{width:calc(40px * 2);height:calc(40px * 2);background-color:#ffffff03;border:2px solid white;box-shadow:0 1px 4px #0000004d;cursor:pointer;margin-top:5px}.igo-mini-basemap-container[_ngcontent-%COMP%]:hover   .igo-mini-basemap-title[_ngcontent-%COMP%]{color:#000;text-shadow:0 0 5px white}.igo-mini-basemap-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%}.igo-mini-basemap-title[_ngcontent-%COMP%]{position:relative;top:-76px;height:76px;width:76px;text-align:center;vertical-align:bottom;color:#fff;text-shadow:0 0 5px black;white-space:normal;display:flex;align-items:flex-end;justify-content:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MiniBaseMapComponent, [{
        type: Component,
        args: [{
                selector: 'igo-mini-basemap',
                templateUrl: './mini-basemap.component.html',
                styleUrls: ['./mini-basemap.component.scss']
            }]
    }], function () { return [{ type: i1.LayerService }, { type: i0.ApplicationRef }]; }, { map: [{
            type: Input
        }], disabled: [{
            type: Input
        }], display: [{
            type: Input
        }], title: [{
            type: Input
        }], baseLayer: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXNlbWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9iYXNlbGF5ZXJzLXN3aXRjaGVyL21pbmktYmFzZW1hcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9tYXAvYmFzZWxheWVycy1zd2l0Y2hlci9taW5pLWJhc2VtYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztJQ04vQiw4QkFBa0Q7SUFBQyxZQUFVO0lBQUEsaUJBQU07OztJQUFoQixlQUFVO0lBQVYsNkNBQVU7Ozs7SUFGL0QsOEJBQTBEO0lBQXJDLDBNQUFvQztJQUN2RCxxQ0FBbUQ7SUFDbkQsMkVBQW1FO0lBQ3JFLGlCQUFNOzs7SUFGYSxlQUFlO0lBQWYsb0NBQWU7SUFDMUIsZUFBVztJQUFYLG1DQUFXOztBRGdCckIsTUFBTSxPQUFPLG9CQUFvQjtJQXNCL0IsWUFDVSxZQUEwQixFQUMxQixNQUFzQjtRQUR0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVB6QixZQUFPLEdBQUcsSUFBSSxNQUFNLENBQUM7WUFDMUIsUUFBUSxFQUFFLEVBQUU7WUFDWixZQUFZLEVBQUUsS0FBSztTQUNwQixDQUFDLENBQUM7SUFLQyxDQUFDO0lBbEJMLElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBWTtRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMs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cEJqQyw4QkFBd0M7UUFFdEMscUVBR007UUFFUixpQkFBTTs7UUFMRSxlQUFhO1FBQWIsa0NBQWE7O3VGRGtCUixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzRGQUdVLEdBQUc7a0JBQVgsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFHRixTQUFTO2tCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEFwcGxpY2F0aW9uUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYXllciwgTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkJztcbmltcG9ydCB7IExheWVyU2VydmljZSB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9sYXllci5zZXJ2aWNlJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmltcG9ydCBPbE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IE9sVmlldyBmcm9tICdvbC9WaWV3JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLW1pbmktYmFzZW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9taW5pLWJhc2VtYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9taW5pLWJhc2VtYXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNaW5pQmFzZU1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNwbGF5OiBib29sZWFuO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBiYXNlTGF5ZXIoKTogTGF5ZXIge1xuICAgIHJldHVybiB0aGlzLl9iYXNlTGF5ZXI7XG4gIH1cbiAgc2V0IGJhc2VMYXllcih2YWx1ZTogTGF5ZXIpIHtcbiAgICB0aGlzLl9iYXNlTGF5ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLmhhbmRsZUJhc2VMYXllckNoYW5nZWQodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Jhc2VMYXllcjogTGF5ZXI7XG5cbiAgcHVibGljIGJhc2VtYXAgPSBuZXcgSWdvTWFwKHtcbiAgICBjb250cm9sczoge30sXG4gICAgaW50ZXJhY3Rpb25zOiBmYWxzZVxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxheWVyU2VydmljZTogTGF5ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZlxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmhhbmRsZU1haW5NYXBWaWV3Q2hhbmdlKHRoaXMubWFwLm9sLmdldFZpZXcoKSk7XG4gICAgdGhpcy5tYXAudmlld0NvbnRyb2xsZXIub2xWaWV3Lm9uKCdjaGFuZ2UnLCBjaGFuZ2UgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVNYWluTWFwVmlld0NoYW5nZSgoY2hhbmdlLnRhcmdldCBhcyBPbFZpZXcpKTtcbiAgICB9KTtcbiAgICB0aGlzLm1hcC5vbC5vbigncG9pbnRlcmRyYWcnLCBjaGFuZ2UgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVNYWluTWFwVmlld0NoYW5nZSgoY2hhbmdlLnRhcmdldCBhcyBPbE1hcCkuZ2V0VmlldygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLnZpZXdDb250cm9sbGVyLm9sVmlldy51bignY2hhbmdlJywgY2hhbmdlID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTWFpbk1hcFZpZXdDaGFuZ2UoKGNoYW5nZS50YXJnZXQgYXMgT2xWaWV3KSk7XG4gICAgfSk7XG4gICAgdGhpcy5tYXAub2wudW4oJ3BvaW50ZXJkcmFnJywgY2hhbmdlID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTWFpbk1hcFZpZXdDaGFuZ2UoKGNoYW5nZS50YXJnZXQgYXMgT2xNYXApLmdldFZpZXcoKSk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VCYXNlTGF5ZXIoYmFzZUxheWVyOiBMYXllcikge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubWFwLmNoYW5nZUJhc2VMYXllcihiYXNlTGF5ZXIpO1xuICAgIHRoaXMuYXBwUmVmLnRpY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTWFpbk1hcFZpZXdDaGFuZ2UobWFpbk1hcFZpZXcpIHtcbiAgICBjb25zdCBtYWluTWFwVmlld1Byb3BlcnRpZXMgPSBtYWluTWFwVmlldy5nZXRQcm9wZXJ0aWVzKCk7XG4gICAgdGhpcy5iYXNlbWFwLnZpZXdDb250cm9sbGVyLm9sVmlldy5zZXRSZXNvbHV0aW9uKG1haW5NYXBWaWV3UHJvcGVydGllcy5yZXNvbHV0aW9uKTtcbiAgICB0aGlzLmJhc2VtYXAudmlld0NvbnRyb2xsZXIub2xWaWV3LnNldFJvdGF0aW9uKG1haW5NYXBWaWV3UHJvcGVydGllcy5yb3RhdGlvbik7XG4gICAgdGhpcy5iYXNlbWFwLnZpZXdDb250cm9sbGVyLm9sVmlldy5zZXRDZW50ZXIodGhpcy5tYXAudmlld0NvbnRyb2xsZXIuZ2V0Q2VudGVyKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVCYXNlTGF5ZXJDaGFuZ2VkKGJhc2VsYXllcjogTGF5ZXIpIHtcbiAgICB0aGlzLmJhc2VtYXAucmVtb3ZlQWxsTGF5ZXJzKCk7XG5cbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSBPYmplY3QuYXNzaWduKFxuICAgICAgT2JqZWN0LmNyZWF0ZShiYXNlbGF5ZXIub3B0aW9ucyksXG4gICAgICBiYXNlbGF5ZXIub3B0aW9ucyxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgYmFzZUxheWVyOiBmYWxzZVxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBsYXllciA9IHRoaXMubGF5ZXJTZXJ2aWNlLmNyZWF0ZUxheWVyKG9wdGlvbnMpO1xuICAgIHRoaXMuYmFzZW1hcC5hZGRMYXllcihsYXllcik7XG4gICAgdGhpcy5oYW5kbGVMaW5rZWRCYXNlTGF5ZXIobGF5ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVMaW5rZWRCYXNlTGF5ZXIoYmFzZWxheWVyOiBMYXllcikge1xuICAgIGNvbnN0IGxpbmtlZExheWVycyA9IGJhc2VsYXllci5vcHRpb25zLmxpbmtlZExheWVycztcbiAgICBpZiAoIWxpbmtlZExheWVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50TGlua2VkSWQgPSBsaW5rZWRMYXllcnMubGlua0lkO1xuICAgIGNvbnN0IGN1cnJlbnRMaW5rcyA9IGxpbmtlZExheWVycy5saW5rcztcbiAgICBjb25zdCBpc1BhcmVudExheWVyID0gY3VycmVudExpbmtzID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGlmIChpc1BhcmVudExheWVyICYmIGN1cnJlbnRMaW5rZWRJZCA9PT0gYmFzZWxheWVyLm9wdGlvbnMubGlua2VkTGF5ZXJzLmxpbmtJZCkge1xuICAgICAgLy8gc2VhcmNoIGZvciBjaGlsZCBsYXllcnNcbiAgICAgIGN1cnJlbnRMaW5rcy5tYXAobGluayA9PiB7XG4gICAgICAgIGxpbmsubGlua2VkSWRzLm1hcChsaW5rZWRJZCA9PiB7XG4gICAgICAgICAgY29uc3QgbGF5ZXJUb0FwcGx5ID0gdGhpcy5tYXAubGF5ZXJzLmZpbmQobCA9PiBsLm9wdGlvbnMubGlua2VkTGF5ZXJzPy5saW5rSWQgPT09IGxpbmtlZElkKTtcbiAgICAgICAgICBpZiAobGF5ZXJUb0FwcGx5KSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rZWRMYXllck9wdGlvbnM6IGFueSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIE9iamVjdC5jcmVhdGUobGF5ZXJUb0FwcGx5Lm9wdGlvbnMpLFxuICAgICAgICAgICAgICBsYXllclRvQXBwbHkub3B0aW9ucyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHpJbmRleDogOTAwMCxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhc2VMYXllcjogZmFsc2UsXG4gICAgICAgICAgICAgIH0gYXMgTGF5ZXJPcHRpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5iYXNlbWFwLmFkZExheWVyKHRoaXMubGF5ZXJTZXJ2aWNlLmNyZWF0ZUxheWVyKGxpbmtlZExheWVyT3B0aW9ucykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpZ28tbWluaS1iYXNlbWFwLWNvbnRhaW5lclwiPlxuXG4gIDxkaXYgKm5nSWY9XCJkaXNwbGF5XCIgKGNsaWNrKT1cImNoYW5nZUJhc2VMYXllcihiYXNlTGF5ZXIpXCI+XG4gICAgPGlnby1tYXAtYnJvd3NlciBbbWFwXT1cImJhc2VtYXBcIj48L2lnby1tYXAtYnJvd3Nlcj5cbiAgICA8ZGl2ICpuZ0lmPSd0aXRsZScgY2xhc3M9J2lnby1taW5pLWJhc2VtYXAtdGl0bGUnPiB7e3RpdGxlfX0gPC9kaXY+XG4gIDwvZGl2PlxuXG48L2Rpdj5cbiJdfQ==