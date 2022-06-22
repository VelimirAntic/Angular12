import { Directive, Optional, Input } from '@angular/core';
import { merge } from 'rxjs';
import { buffer, debounceTime, filter } from 'rxjs/operators';
import { addImportedFeaturesToMap, addImportedFeaturesStyledToMap } from '../../context-import-export/shared/context-import.utils';
import GeoJSON from 'ol/format/GeoJSON';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/geo";
import * as i2 from "./context.service";
import * as i3 from "@igo2/core";
export class LayerContextDirective {
    constructor(component, contextService, layerService, configService, styleListService, styleService, route) {
        this.component = component;
        this.contextService = contextService;
        this.layerService = layerService;
        this.configService = configService;
        this.styleListService = styleListService;
        this.styleService = styleService;
        this.route = route;
        this.contextLayers = [];
        this.removeLayersOnContextChange = true;
    }
    get map() {
        return this.component.map;
    }
    ngOnInit() {
        this.context$$ = this.contextService.context$
            .pipe(filter((context) => context !== undefined))
            .subscribe((context) => this.handleContextChange(context));
        if (this.route &&
            this.route.options.visibleOnLayersKey &&
            this.route.options.visibleOffLayersKey &&
            this.route.options.contextKey) {
            const queryParams$$ = this.route.queryParams.subscribe((params) => {
                if (Object.keys(params).length > 0) {
                    this.queryParams = params;
                    queryParams$$.unsubscribe();
                }
            });
        }
    }
    ngOnDestroy() {
        this.context$$.unsubscribe();
    }
    handleContextChange(context) {
        if (context.layers === undefined) {
            return;
        }
        if (this.removeLayersOnContextChange === true) {
            this.map.removeAllLayers();
        }
        else {
            this.map.removeLayers(this.contextLayers);
        }
        this.contextLayers = [];
        const layersAndIndex$ = merge(...context.layers.map((layerOptions, index) => {
            return this.layerService.createAsyncLayer(layerOptions, context.uri);
        }));
        layersAndIndex$
            .pipe(buffer(layersAndIndex$.pipe(debounceTime(500))))
            .subscribe((layers) => {
            layers = layers
                .filter((layer) => layer !== undefined)
                .map((layer) => {
                layer.visible = this.computeLayerVisibilityFromUrl(layer);
                layer.zIndex = layer.zIndex;
                return layer;
            });
            this.contextLayers.concat(layers);
            this.map.addLayers(layers);
            if (context.extraFeatures) {
                context.extraFeatures.forEach((featureCollection) => {
                    const format = new GeoJSON();
                    const title = featureCollection.name;
                    featureCollection = JSON.stringify(featureCollection);
                    featureCollection = format.readFeatures(featureCollection, {
                        dataProjection: 'EPSG:4326',
                        featureProjection: 'EPSG:3857'
                    });
                    if (!this.configService.getConfig('importWithStyle')) {
                        addImportedFeaturesToMap(featureCollection, this.map, title);
                    }
                    else {
                        addImportedFeaturesStyledToMap(featureCollection, this.map, title, this.styleListService, this.styleService);
                    }
                });
            }
        });
    }
    computeLayerVisibilityFromUrl(layer) {
        const params = this.queryParams;
        const currentContext = this.contextService.context$.value.uri;
        const currentLayerid = layer.id;
        let visible = layer.visible;
        if (!params || !currentLayerid) {
            return visible;
        }
        const contextParams = params[this.route.options.contextKey];
        if (contextParams === currentContext || !contextParams) {
            let visibleOnLayersParams = '';
            let visibleOffLayersParams = '';
            let visiblelayers = [];
            let invisiblelayers = [];
            if (this.route.options.visibleOnLayersKey &&
                params[this.route.options.visibleOnLayersKey]) {
                visibleOnLayersParams =
                    params[this.route.options.visibleOnLayersKey];
            }
            if (this.route.options.visibleOffLayersKey &&
                params[this.route.options.visibleOffLayersKey]) {
                visibleOffLayersParams =
                    params[this.route.options.visibleOffLayersKey];
            }
            /* This order is important because to control whichever
             the order of * param. First whe open and close everything.*/
            if (visibleOnLayersParams === '*') {
                visible = true;
            }
            if (visibleOffLayersParams === '*') {
                visible = false;
            }
            // After, managing named layer by id (context.json OR id from datasource)
            visiblelayers = visibleOnLayersParams.split(',');
            invisiblelayers = visibleOffLayersParams.split(',');
            if (visiblelayers.indexOf(currentLayerid) > -1 || visiblelayers.indexOf(currentLayerid.toString()) > -1) {
                visible = true;
            }
            if (invisiblelayers.indexOf(currentLayerid) > -1 || invisiblelayers.indexOf(currentLayerid.toString()) > -1) {
                visible = false;
            }
        }
        return visible;
    }
}
LayerContextDirective.ɵfac = function LayerContextDirective_Factory(t) { return new (t || LayerContextDirective)(i0.ɵɵdirectiveInject(i1.MapBrowserComponent), i0.ɵɵdirectiveInject(i2.ContextService), i0.ɵɵdirectiveInject(i1.LayerService), i0.ɵɵdirectiveInject(i3.ConfigService), i0.ɵɵdirectiveInject(i1.StyleListService), i0.ɵɵdirectiveInject(i1.StyleService), i0.ɵɵdirectiveInject(i3.RouteService, 8)); };
LayerContextDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LayerContextDirective, selectors: [["", "igoLayerContext", ""]], inputs: { removeLayersOnContextChange: "removeLayersOnContextChange" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerContextDirective, [{
        type: Directive,
        args: [{
                selector: '[igoLayerContext]'
            }]
    }], function () { return [{ type: i1.MapBrowserComponent }, { type: i2.ContextService }, { type: i1.LayerService }, { type: i3.ConfigService }, { type: i1.StyleListService }, { type: i1.StyleService }, { type: i3.RouteService, decorators: [{
                type: Optional
            }] }]; }, { removeLayersOnContextChange: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItY29udGV4dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYW5hZ2VyL3NoYXJlZC9sYXllci1jb250ZXh0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlFLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZTlELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsOEJBQThCLEVBQy9CLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBS3hDLE1BQU0sT0FBTyxxQkFBcUI7SUFZaEMsWUFDVSxTQUE4QixFQUM5QixjQUE4QixFQUM5QixZQUEwQixFQUMxQixhQUE0QixFQUM1QixnQkFBa0MsRUFDbEMsWUFBMEIsRUFDZCxLQUFtQjtRQU4vQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNkLFVBQUssR0FBTCxLQUFLLENBQWM7UUFmakMsa0JBQWEsR0FBWSxFQUFFLENBQUM7UUFFM0IsZ0NBQTJCLEdBQVksSUFBSSxDQUFDO0lBY2xELENBQUM7SUFaSixJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFZRCxR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QUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDdkcsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNoQjtZQUNELElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMzRyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ2pCO1NBQ0Y7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzswRkE1SlUscUJBQXFCO3dFQUFyQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQUhqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7c0JBb0JJLFFBQVE7d0JBYkYsMkJBQTJCO2tCQUFuQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGJ1ZmZlciwgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJvdXRlU2VydmljZSwgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWFwQnJvd3NlckNvbXBvbmVudCxcbiAgTGF5ZXIsXG4gIExheWVyU2VydmljZSxcbiAgTGF5ZXJPcHRpb25zLFxuICBTdHlsZUxpc3RTZXJ2aWNlLFxuICBTdHlsZVNlcnZpY2Vcbn0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB0eXBlIHsgSWdvTWFwIH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuaW1wb3J0IHsgQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL2NvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBEZXRhaWxlZENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7XG4gIGFkZEltcG9ydGVkRmVhdHVyZXNUb01hcCxcbiAgYWRkSW1wb3J0ZWRGZWF0dXJlc1N0eWxlZFRvTWFwXG59IGZyb20gJy4uLy4uL2NvbnRleHQtaW1wb3J0LWV4cG9ydC9zaGFyZWQvY29udGV4dC1pbXBvcnQudXRpbHMnO1xuaW1wb3J0IEdlb0pTT04gZnJvbSAnb2wvZm9ybWF0L0dlb0pTT04nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaWdvTGF5ZXJDb250ZXh0XSdcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJDb250ZXh0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbnRleHQkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHF1ZXJ5UGFyYW1zOiBhbnk7XG5cbiAgcHJpdmF0ZSBjb250ZXh0TGF5ZXJzOiBMYXllcltdID0gW107XG5cbiAgQElucHV0KCkgcmVtb3ZlTGF5ZXJzT25Db250ZXh0Q2hhbmdlOiBib29sZWFuID0gdHJ1ZTtcblxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50Lm1hcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50OiBNYXBCcm93c2VyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2U6IENvbnRleHRTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF5ZXJTZXJ2aWNlOiBMYXllclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3R5bGVMaXN0U2VydmljZTogU3R5bGVMaXN0U2VydmljZSxcbiAgICBwcml2YXRlIHN0eWxlU2VydmljZTogU3R5bGVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGU6IFJvdXRlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb250ZXh0JCQgPSB0aGlzLmNvbnRleHRTZXJ2aWNlLmNvbnRleHQkXG4gICAgICAucGlwZShmaWx0ZXIoKGNvbnRleHQpID0+IGNvbnRleHQgIT09IHVuZGVmaW5lZCkpXG4gICAgICAuc3Vic2NyaWJlKChjb250ZXh0KSA9PiB0aGlzLmhhbmRsZUNvbnRleHRDaGFuZ2UoY29udGV4dCkpO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5yb3V0ZSAmJlxuICAgICAgdGhpcy5yb3V0ZS5vcHRpb25zLnZpc2libGVPbkxheWVyc0tleSAmJlxuICAgICAgdGhpcy5yb3V0ZS5vcHRpb25zLnZpc2libGVPZmZMYXllcnNLZXkgJiZcbiAgICAgIHRoaXMucm91dGUub3B0aW9ucy5jb250ZXh0S2V5XG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyQkID0gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5xdWVyeVBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgICBxdWVyeVBhcmFtcyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29udGV4dCQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbnRleHRDaGFuZ2UoY29udGV4dDogRGV0YWlsZWRDb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQubGF5ZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVtb3ZlTGF5ZXJzT25Db250ZXh0Q2hhbmdlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVBbGxMYXllcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXJzKHRoaXMuY29udGV4dExheWVycyk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dExheWVycyA9IFtdO1xuXG4gICAgY29uc3QgbGF5ZXJzQW5kSW5kZXgkID0gbWVyZ2UoXG4gICAgICAuLi5jb250ZXh0LmxheWVycy5tYXAoKGxheWVyT3B0aW9uczogTGF5ZXJPcHRpb25zLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyU2VydmljZS5jcmVhdGVBc3luY0xheWVyKGxheWVyT3B0aW9ucywgY29udGV4dC51cmkpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgbGF5ZXJzQW5kSW5kZXgkXG4gICAgICAucGlwZShidWZmZXIobGF5ZXJzQW5kSW5kZXgkLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpKSlcbiAgICAgIC5zdWJzY3JpYmUoKGxheWVyczogTGF5ZXJbXSkgPT4ge1xuICAgICAgICBsYXllcnMgPSBsYXllcnNcbiAgICAgICAgICAuZmlsdGVyKChsYXllcjogTGF5ZXIpID0+IGxheWVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgICAgICAgIGxheWVyLnZpc2libGUgPSB0aGlzLmNvbXB1dGVMYXllclZpc2liaWxpdHlGcm9tVXJsKGxheWVyKTtcbiAgICAgICAgICAgIGxheWVyLnpJbmRleCA9IGxheWVyLnpJbmRleDtcblxuICAgICAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGV4dExheWVycy5jb25jYXQobGF5ZXJzKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXJzKGxheWVycyk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuZXh0cmFGZWF0dXJlcykge1xuICAgICAgICAgIGNvbnRleHQuZXh0cmFGZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlQ29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gbmV3IEdlb0pTT04oKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZmVhdHVyZUNvbGxlY3Rpb24ubmFtZTtcbiAgICAgICAgICAgIGZlYXR1cmVDb2xsZWN0aW9uID0gSlNPTi5zdHJpbmdpZnkoZmVhdHVyZUNvbGxlY3Rpb24pO1xuICAgICAgICAgICAgZmVhdHVyZUNvbGxlY3Rpb24gPSBmb3JtYXQucmVhZEZlYXR1cmVzKGZlYXR1cmVDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246ICdFUFNHOjM4NTcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygnaW1wb3J0V2l0aFN0eWxlJykpIHtcbiAgICAgICAgICAgICAgYWRkSW1wb3J0ZWRGZWF0dXJlc1RvTWFwKGZlYXR1cmVDb2xsZWN0aW9uLCB0aGlzLm1hcCwgdGl0bGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWRkSW1wb3J0ZWRGZWF0dXJlc1N0eWxlZFRvTWFwKFxuICAgICAgICAgICAgICAgIGZlYXR1cmVDb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHRoaXMubWFwLFxuICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVMaXN0U2VydmljZSxcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlU2VydmljZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZUxheWVyVmlzaWJpbGl0eUZyb21VcmwobGF5ZXI6IExheWVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5xdWVyeVBhcmFtcztcbiAgICBjb25zdCBjdXJyZW50Q29udGV4dCA9IHRoaXMuY29udGV4dFNlcnZpY2UuY29udGV4dCQudmFsdWUudXJpO1xuICAgIGNvbnN0IGN1cnJlbnRMYXllcmlkOiBzdHJpbmcgPSBsYXllci5pZDtcblxuICAgIGxldCB2aXNpYmxlID0gbGF5ZXIudmlzaWJsZTtcbiAgICBpZiAoIXBhcmFtcyB8fCAhY3VycmVudExheWVyaWQpIHtcbiAgICAgIHJldHVybiB2aXNpYmxlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHRQYXJhbXMgPSBwYXJhbXNbdGhpcy5yb3V0ZS5vcHRpb25zLmNvbnRleHRLZXkgYXMgc3RyaW5nXTtcbiAgICBpZiAoY29udGV4dFBhcmFtcyA9PT0gY3VycmVudENvbnRleHQgfHwgIWNvbnRleHRQYXJhbXMpIHtcbiAgICAgIGxldCB2aXNpYmxlT25MYXllcnNQYXJhbXMgPSAnJztcbiAgICAgIGxldCB2aXNpYmxlT2ZmTGF5ZXJzUGFyYW1zID0gJyc7XG4gICAgICBsZXQgdmlzaWJsZWxheWVyczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBpbnZpc2libGVsYXllcnM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5yb3V0ZS5vcHRpb25zLnZpc2libGVPbkxheWVyc0tleSAmJlxuICAgICAgICBwYXJhbXNbdGhpcy5yb3V0ZS5vcHRpb25zLnZpc2libGVPbkxheWVyc0tleSBhcyBzdHJpbmddXG4gICAgICApIHtcbiAgICAgICAgdmlzaWJsZU9uTGF5ZXJzUGFyYW1zID1cbiAgICAgICAgICBwYXJhbXNbdGhpcy5yb3V0ZS5vcHRpb25zLnZpc2libGVPbkxheWVyc0tleSBhcyBzdHJpbmddO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnJvdXRlLm9wdGlvbnMudmlzaWJsZU9mZkxheWVyc0tleSAmJlxuICAgICAgICBwYXJhbXNbdGhpcy5yb3V0ZS5vcHRpb25zLnZpc2libGVPZmZMYXllcnNLZXkgYXMgc3RyaW5nXVxuICAgICAgKSB7XG4gICAgICAgIHZpc2libGVPZmZMYXllcnNQYXJhbXMgPVxuICAgICAgICAgIHBhcmFtc1t0aGlzLnJvdXRlLm9wdGlvbnMudmlzaWJsZU9mZkxheWVyc0tleSBhcyBzdHJpbmddO1xuICAgICAgfVxuXG4gICAgICAvKiBUaGlzIG9yZGVyIGlzIGltcG9ydGFudCBiZWNhdXNlIHRvIGNvbnRyb2wgd2hpY2hldmVyXG4gICAgICAgdGhlIG9yZGVyIG9mICogcGFyYW0uIEZpcnN0IHdoZSBvcGVuIGFuZCBjbG9zZSBldmVyeXRoaW5nLiovXG4gICAgICBpZiAodmlzaWJsZU9uTGF5ZXJzUGFyYW1zID09PSAnKicpIHtcbiAgICAgICAgdmlzaWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodmlzaWJsZU9mZkxheWVyc1BhcmFtcyA9PT0gJyonKSB7XG4gICAgICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQWZ0ZXIsIG1hbmFnaW5nIG5hbWVkIGxheWVyIGJ5IGlkIChjb250ZXh0Lmpzb24gT1IgaWQgZnJvbSBkYXRhc291cmNlKVxuICAgICAgdmlzaWJsZWxheWVycyA9IHZpc2libGVPbkxheWVyc1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgICAgaW52aXNpYmxlbGF5ZXJzID0gdmlzaWJsZU9mZkxheWVyc1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgICAgaWYgKHZpc2libGVsYXllcnMuaW5kZXhPZihjdXJyZW50TGF5ZXJpZCkgPiAtMSB8fCB2aXNpYmxlbGF5ZXJzLmluZGV4T2YoY3VycmVudExheWVyaWQudG9TdHJpbmcoKSkgPiAtMSkge1xuICAgICAgICB2aXNpYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnZpc2libGVsYXllcnMuaW5kZXhPZihjdXJyZW50TGF5ZXJpZCkgPiAtMSB8fCBpbnZpc2libGVsYXllcnMuaW5kZXhPZihjdXJyZW50TGF5ZXJpZC50b1N0cmluZygpKSA+IC0xKSB7XG4gICAgICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaWJsZTtcbiAgfVxufVxuIl19