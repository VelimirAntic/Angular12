import { Injectable, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../context-manager/shared/context.service";
import * as i2 from "@igo2/core";
export class ShareMapService {
    constructor(contextService, messageService, route) {
        this.contextService = contextService;
        this.messageService = messageService;
        this.route = route;
    }
    getUrlWithApi(formValues) {
        return `${location.origin + location.pathname}?context=${formValues.uri}`;
    }
    createContextShared(map, formValues) {
        const context = this.contextService.getContextFromMap(map);
        context.scope = 'public';
        context.title = formValues.title;
        context.uri = formValues.uri;
        return this.contextService.create(context);
    }
    updateContextShared(map, formValues, id) {
        const context = this.contextService.getContextFromMap(map);
        return this.contextService.update(id, {
            title: formValues.title,
            map: context.map
        });
    }
    getUrlWithoutApi(map, publicShareOption) {
        if (!this.route ||
            !this.route.options.visibleOnLayersKey ||
            !this.route.options.visibleOffLayersKey ||
            !map.viewController.getZoom()) {
            return;
        }
        const llc = publicShareOption.layerlistControls.querystring;
        let visibleKey = this.route.options.visibleOnLayersKey;
        let invisibleKey = this.route.options.visibleOffLayersKey;
        const layers = map.layers;
        const visibleLayers = layers.filter(lay => lay.visible && !lay.isIgoInternalLayer);
        const invisibleLayers = layers.filter(lay => !lay.visible && !lay.isIgoInternalLayer);
        if (visibleLayers.length === 0) {
            visibleKey = '';
        }
        if (invisibleLayers.length === 0) {
            invisibleKey = '';
        }
        let layersUrl = '';
        let layersToLoop = [];
        if (visibleLayers.length > invisibleLayers.length) {
            layersUrl = `${visibleKey}=*&${invisibleKey}=`;
            layersToLoop = invisibleLayers;
        }
        else {
            layersUrl = `${invisibleKey}=*&${visibleKey}=`;
            layersToLoop = visibleLayers;
        }
        for (const layer of layersToLoop) {
            if (layer.id) {
                layersUrl += layer.id + ',';
            }
        }
        const contextLayersID = [];
        const contextLayers = this.contextService.context$.value.layers;
        for (const contextLayer of contextLayers) {
            if (typeof contextLayer.id !== 'undefined' || typeof contextLayer.source !== 'undefined') {
                contextLayersID.push(contextLayer.id || contextLayer.source.id);
            }
        }
        const addedLayersQueryParamsWms = this.makeLayersByService(layers, contextLayersID, 'wms');
        const addedLayersQueryParamsWmts = this.makeLayersByService(layers, contextLayersID, 'wmts');
        const addedLayersQueryParamsArcgisRest = this.makeLayersByService(layers, contextLayersID, 'arcgisrest');
        const addedLayersQueryParamsImageArcgisRest = this.makeLayersByService(layers, contextLayersID, 'imagearcgisrest');
        const addedLayersQueryParamsTileArcgisRest = this.makeLayersByService(layers, contextLayersID, 'tilearcgisrest');
        layersUrl = layersUrl.substr(0, layersUrl.length - 1);
        const zoomKey = this.route.options.zoomKey;
        const centerKey = this.route.options.centerKey;
        const contextKey = this.route.options.contextKey;
        const zoom = `${zoomKey}=${map.viewController.getZoom()}`;
        const arrayCenter = map.viewController.getCenter('EPSG:4326') || [];
        const long = arrayCenter[0].toFixed(5).replace(/\.([^0]+)0+$/, '.$1');
        const lat = arrayCenter[1].toFixed(5).replace(/\.([^0]+)0+$/, '.$1');
        const center = `${centerKey}=${long},${lat}`.replace(/.00000/g, '');
        let context = '';
        if (this.contextService.context$.value) {
            context = `${contextKey}=${this.contextService.context$.value.uri}`;
        }
        let url = `${location.origin}${location.pathname}?${context}&${zoom}&${center}&${layersUrl}&${llc}&${addedLayersQueryParamsWms}&${llc}&${addedLayersQueryParamsWmts}&${addedLayersQueryParamsArcgisRest}&${addedLayersQueryParamsImageArcgisRest}&${addedLayersQueryParamsTileArcgisRest}`;
        for (let i = 0; i < 5; i++) {
            url = url.replace(/&&/g, '&');
            url = url.endsWith('&') ? url.slice(0, -1) : url;
        }
        url = url.endsWith('&') ? url.slice(0, -1) : url;
        url = url.replace('?&wm', '&wm');
        url = url.replace('?&', '?');
        return url;
    }
    makeLayersByService(layers, contextLayersID, typeService) {
        const addedLayersByService = [];
        for (const layer of layers.filter(l => { var _a; return ((_a = l.dataSource.options) === null || _a === void 0 ? void 0 : _a.type) === typeService; })) {
            if (contextLayersID.indexOf(layer.id) === -1) {
                let linkUrl = encodeURIComponent(layer.dataSource.options.url);
                let addedLayer = '';
                let layerVersion;
                switch (layer.dataSource.options.type.toLowerCase()) {
                    case 'wms':
                        const datasourceOptions = layer.dataSource.options;
                        addedLayer = encodeURIComponent(datasourceOptions.params.LAYERS);
                        layerVersion = datasourceOptions.params.VERSION === '1.3.0' ? layerVersion : datasourceOptions.params.VERSION;
                        break;
                    case 'wmts':
                    case 'arcgisrest':
                    case 'imagearcgisrest':
                    case 'tilearcgisrest':
                        addedLayer = encodeURIComponent(layer.dataSource.options.layer);
                        break;
                }
                const addedLayerPosition = `${addedLayer}:igoz${layer.zIndex}`;
                let version = '';
                if (layerVersion) {
                    const operator = layer.dataSource.options.url.indexOf('?') === -1 ? '?' : '&';
                    version = encodeURIComponent(`${operator}VERSION=${layerVersion}`);
                }
                linkUrl = `${linkUrl}${version}`;
                if (!addedLayersByService.find(definedUrl => definedUrl.url === linkUrl)) {
                    addedLayersByService.push({
                        url: linkUrl,
                        layers: [addedLayerPosition]
                    });
                }
                else {
                    addedLayersByService.forEach(service => {
                        if (service.url === linkUrl) {
                            service.layers.push(addedLayerPosition);
                        }
                    });
                }
            }
        }
        let addedLayersQueryParams = '';
        if (addedLayersByService.length >= 1) {
            let linkUrlKey;
            let layersKey;
            /*
            const linkUrlKey = (typeService === 'wms') ? this.route.options.wmsUrlKey :
              (typeService === 'wmts') ? this.route.options.wmtsUrlKey : '' ;
            const layersKey = (typeService === 'wms') ? this.route.options.wmsLayersKey :
              (typeService === 'wmts') ? this.route.options.wmtsLayersKey : '' ;
      */
            switch (typeService.toLowerCase()) {
                case 'wms':
                    linkUrlKey = this.route.options.wmsUrlKey;
                    layersKey = this.route.options.wmsLayersKey;
                    break;
                case 'wmts':
                    linkUrlKey = this.route.options.wmtsUrlKey;
                    layersKey = this.route.options.wmtsLayersKey;
                    break;
                case 'arcgisrest':
                    linkUrlKey = this.route.options.arcgisUrlKey;
                    layersKey = this.route.options.arcgisLayersKey;
                    break;
                case 'imagearcgisrest':
                    linkUrlKey = this.route.options.iarcgisUrlKey;
                    layersKey = this.route.options.iarcgisLayersKey;
                    break;
                case 'tilearcgisrest':
                    linkUrlKey = this.route.options.tarcgisUrlKey;
                    layersKey = this.route.options.tarcgisLayersKey;
                    break;
                default:
                    linkUrlKey = '';
                    layersKey = '';
            }
            let linkUrlQueryParams = '';
            let layersQueryParams = '';
            addedLayersByService.forEach(service => {
                linkUrlQueryParams += `${service.url},`;
                layersQueryParams += `(${service.layers.join(',')}),`;
            });
            linkUrlQueryParams = linkUrlQueryParams.endsWith(',')
                ? linkUrlQueryParams.slice(0, -1)
                : linkUrlQueryParams;
            layersQueryParams = layersQueryParams.endsWith(',')
                ? layersQueryParams.slice(0, -1)
                : layersQueryParams;
            addedLayersQueryParams = `${linkUrlKey}=${linkUrlQueryParams}&${layersKey}=${layersQueryParams}`;
        }
        return addedLayersQueryParams;
    }
}
ShareMapService.ɵfac = function ShareMapService_Factory(t) { return new (t || ShareMapService)(i0.ɵɵinject(i1.ContextService), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i2.RouteService, 8)); };
ShareMapService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ShareMapService, factory: ShareMapService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShareMapService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ContextService }, { type: i2.MessageService }, { type: i2.RouteService, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtbWFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvc2hhcmUtbWFwL3NoYXJlZC9zaGFyZS1tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVlyRCxNQUFNLE9BQU8sZUFBZTtJQUUxQixZQUNVLGNBQThCLEVBQzlCLGNBQThCLEVBQ2xCLEtBQW1CO1FBRi9CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUN0QyxDQUFDO0lBRUosYUFBYSxDQUFDLFVBQVU7UUFDdEIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsWUFBWSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDNUUsQ0FBQztJQUVELG1CQUFtQixDQUFDLEdBQVcsRUFBRSxVQUFVO1FBQ3pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxHQUFXLEVBQUUsVUFBVSxFQUFFLEVBQVU7UUFDckQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FB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QkFDUjtvQkFDRSxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNoQixTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ2xCO1lBRUQsSUFBSSxrQkFBa0IsR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7WUFDM0Isb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNyQyxrQkFBa0IsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDeEMsaUJBQWlCLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1lBQ0gsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztZQUN2QixpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBQ3RCLHNCQUFzQixHQUFHLEdBQUcsVUFBVSxJQUFJLGtCQUFrQixJQUFJLFNBQVMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1NBQ2xHO1FBRUQsT0FBTyxzQkFBc0IsQ0FBQztJQUNoQyxDQUFDOzs4RUFsTlUsZUFBZTtxRUFBZixlQUFlLFdBQWYsZUFBZSxtQkFGZCxNQUFNO3VGQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFNSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUm91dGVTZXJ2aWNlLCBNZXNzYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXIsIFdNU0RhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB0eXBlIHsgSWdvTWFwIH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuaW1wb3J0IHsgRGV0YWlsZWRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC1tYW5hZ2VyL3NoYXJlZC9jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250ZXh0U2VydmljZSB9IGZyb20gJy4uLy4uL2NvbnRleHQtbWFuYWdlci9zaGFyZWQvY29udGV4dC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVNYXBTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbnRleHRTZXJ2aWNlOiBDb250ZXh0U2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlOiBSb3V0ZVNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFVybFdpdGhBcGkoZm9ybVZhbHVlcykge1xuICAgIHJldHVybiBgJHtsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZX0/Y29udGV4dD0ke2Zvcm1WYWx1ZXMudXJpfWA7XG4gIH1cblxuICBjcmVhdGVDb250ZXh0U2hhcmVkKG1hcDogSWdvTWFwLCBmb3JtVmFsdWVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dFNlcnZpY2UuZ2V0Q29udGV4dEZyb21NYXAobWFwKTtcbiAgICBjb250ZXh0LnNjb3BlID0gJ3B1YmxpYyc7XG4gICAgY29udGV4dC50aXRsZSA9IGZvcm1WYWx1ZXMudGl0bGU7XG4gICAgY29udGV4dC51cmkgPSBmb3JtVmFsdWVzLnVyaTtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0U2VydmljZS5jcmVhdGUoY29udGV4dCk7XG4gIH1cblxuICB1cGRhdGVDb250ZXh0U2hhcmVkKG1hcDogSWdvTWFwLCBmb3JtVmFsdWVzLCBpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dFNlcnZpY2UuZ2V0Q29udGV4dEZyb21NYXAobWFwKTtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0U2VydmljZS51cGRhdGUoaWQsIHtcbiAgICAgIHRpdGxlOiBmb3JtVmFsdWVzLnRpdGxlLFxuICAgICAgbWFwOiBjb250ZXh0Lm1hcFxuICAgIH0gYXMgRGV0YWlsZWRDb250ZXh0KTtcbiAgfVxuXG4gIGdldFVybFdpdGhvdXRBcGkobWFwOiBJZ29NYXAsIHB1YmxpY1NoYXJlT3B0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMucm91dGUgfHxcbiAgICAgICF0aGlzLnJvdXRlLm9wdGlvbnMudmlzaWJsZU9uTGF5ZXJzS2V5IHx8XG4gICAgICAhdGhpcy5yb3V0ZS5vcHRpb25zLnZpc2libGVPZmZMYXllcnNLZXkgfHxcbiAgICAgICFtYXAudmlld0NvbnRyb2xsZXIuZ2V0Wm9vbSgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxsYyA9IHB1YmxpY1NoYXJlT3B0aW9uLmxheWVybGlzdENvbnRyb2xzLnF1ZXJ5c3RyaW5nO1xuXG4gICAgbGV0IHZpc2libGVLZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMudmlzaWJsZU9uTGF5ZXJzS2V5O1xuICAgIGxldCBpbnZpc2libGVLZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMudmlzaWJsZU9mZkxheWVyc0tleTtcbiAgICBjb25zdCBsYXllcnMgPSBtYXAubGF5ZXJzO1xuXG4gICAgY29uc3QgdmlzaWJsZUxheWVycyA9IGxheWVycy5maWx0ZXIobGF5ID0+IGxheS52aXNpYmxlICYmICFsYXkuaXNJZ29JbnRlcm5hbExheWVyKTtcbiAgICBjb25zdCBpbnZpc2libGVMYXllcnMgPSBsYXllcnMuZmlsdGVyKGxheSA9PiAhbGF5LnZpc2libGUgJiYgIWxheS5pc0lnb0ludGVybmFsTGF5ZXIpO1xuXG4gICAgaWYgKHZpc2libGVMYXllcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB2aXNpYmxlS2V5ID0gJyc7XG4gICAgfVxuICAgIGlmIChpbnZpc2libGVMYXllcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbnZpc2libGVLZXkgPSAnJztcbiAgICB9XG5cbiAgICBsZXQgbGF5ZXJzVXJsID0gJyc7XG4gICAgbGV0IGxheWVyc1RvTG9vcCA9IFtdO1xuICAgIGlmICh2aXNpYmxlTGF5ZXJzLmxlbmd0aCA+IGludmlzaWJsZUxheWVycy5sZW5ndGgpIHtcbiAgICAgIGxheWVyc1VybCA9IGAke3Zpc2libGVLZXl9PSomJHtpbnZpc2libGVLZXl9PWA7XG4gICAgICBsYXllcnNUb0xvb3AgPSBpbnZpc2libGVMYXllcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyc1VybCA9IGAke2ludmlzaWJsZUtleX09KiYke3Zpc2libGVLZXl9PWA7XG4gICAgICBsYXllcnNUb0xvb3AgPSB2aXNpYmxlTGF5ZXJzO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzVG9Mb29wKSB7XG4gICAgICBpZiAobGF5ZXIuaWQpIHtcbiAgICAgICAgbGF5ZXJzVXJsICs9IGxheWVyLmlkICsgJywnO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjb250ZXh0TGF5ZXJzSUQgPSBbXTtcbiAgICBjb25zdCBjb250ZXh0TGF5ZXJzID0gdGhpcy5jb250ZXh0U2VydmljZS5jb250ZXh0JC52YWx1ZS5sYXllcnM7XG4gICAgZm9yIChjb25zdCBjb250ZXh0TGF5ZXIgb2YgY29udGV4dExheWVycykge1xuICAgICAgaWYgKCB0eXBlb2YgY29udGV4dExheWVyLmlkICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgY29udGV4dExheWVyLnNvdXJjZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICAgIGNvbnRleHRMYXllcnNJRC5wdXNoKGNvbnRleHRMYXllci5pZCB8fCBjb250ZXh0TGF5ZXIuc291cmNlLmlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRlZExheWVyc1F1ZXJ5UGFyYW1zV21zID0gdGhpcy5tYWtlTGF5ZXJzQnlTZXJ2aWNlKGxheWVycywgY29udGV4dExheWVyc0lELCAnd21zJyk7XG4gICAgY29uc3QgYWRkZWRMYXllcnNRdWVyeVBhcmFtc1dtdHMgPSB0aGlzLm1ha2VMYXllcnNCeVNlcnZpY2UobGF5ZXJzLCBjb250ZXh0TGF5ZXJzSUQsICd3bXRzJyk7XG4gICAgY29uc3QgYWRkZWRMYXllcnNRdWVyeVBhcmFtc0FyY2dpc1Jlc3QgPSB0aGlzLm1ha2VMYXllcnNCeVNlcnZpY2UobGF5ZXJzLCBjb250ZXh0TGF5ZXJzSUQsICdhcmNnaXNyZXN0Jyk7XG4gICAgY29uc3QgYWRkZWRMYXllcnNRdWVyeVBhcmFtc0ltYWdlQXJjZ2lzUmVzdCA9IHRoaXMubWFrZUxheWVyc0J5U2VydmljZShsYXllcnMsIGNvbnRleHRMYXllcnNJRCwgJ2ltYWdlYXJjZ2lzcmVzdCcpO1xuICAgIGNvbnN0IGFkZGVkTGF5ZXJzUXVlcnlQYXJhbXNUaWxlQXJjZ2lzUmVzdCA9IHRoaXMubWFrZUxheWVyc0J5U2VydmljZShsYXllcnMsIGNvbnRleHRMYXllcnNJRCwgJ3RpbGVhcmNnaXNyZXN0Jyk7XG5cbiAgICBsYXllcnNVcmwgPSBsYXllcnNVcmwuc3Vic3RyKDAsIGxheWVyc1VybC5sZW5ndGggLSAxKTtcblxuICAgIGNvbnN0IHpvb21LZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMuem9vbUtleTtcbiAgICBjb25zdCBjZW50ZXJLZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMuY2VudGVyS2V5O1xuICAgIGNvbnN0IGNvbnRleHRLZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMuY29udGV4dEtleTtcblxuICAgIGNvbnN0IHpvb20gPSBgJHt6b29tS2V5fT0ke21hcC52aWV3Q29udHJvbGxlci5nZXRab29tKCl9YDtcbiAgICBjb25zdCBhcnJheUNlbnRlciA9IG1hcC52aWV3Q29udHJvbGxlci5nZXRDZW50ZXIoJ0VQU0c6NDMyNicpIHx8IFtdO1xuICAgIGNvbnN0IGxvbmcgPSBhcnJheUNlbnRlclswXS50b0ZpeGVkKDUpLnJlcGxhY2UoL1xcLihbXjBdKykwKyQvLCAnLiQxJyk7XG4gICAgY29uc3QgbGF0ID0gYXJyYXlDZW50ZXJbMV0udG9GaXhlZCg1KS5yZXBsYWNlKC9cXC4oW14wXSspMCskLywgJy4kMScpO1xuICAgIGNvbnN0IGNlbnRlciA9IGAke2NlbnRlcktleX09JHtsb25nfSwke2xhdH1gLnJlcGxhY2UoLy4wMDAwMC9nLCAnJyk7XG4gICAgbGV0IGNvbnRleHQgPSAnJztcbiAgICBpZiAodGhpcy5jb250ZXh0U2VydmljZS5jb250ZXh0JC52YWx1ZSkge1xuICAgICAgY29udGV4dCA9IGAke2NvbnRleHRLZXl9PSR7dGhpcy5jb250ZXh0U2VydmljZS5jb250ZXh0JC52YWx1ZS51cml9YDtcbiAgICB9XG5cbiAgICBsZXQgdXJsID0gYCR7bG9jYXRpb24ub3JpZ2lufSR7bG9jYXRpb24ucGF0aG5hbWV9PyR7Y29udGV4dH0mJHt6b29tfSYke2NlbnRlcn0mJHtsYXllcnNVcmx9JiR7bGxjfSYke2FkZGVkTGF5ZXJzUXVlcnlQYXJhbXNXbXN9JiR7bGxjfSYke2FkZGVkTGF5ZXJzUXVlcnlQYXJhbXNXbXRzfSYke2FkZGVkTGF5ZXJzUXVlcnlQYXJhbXNBcmNnaXNSZXN0fSYke2FkZGVkTGF5ZXJzUXVlcnlQYXJhbXNJbWFnZUFyY2dpc1Jlc3R9JiR7YWRkZWRMYXllcnNRdWVyeVBhcmFtc1RpbGVBcmNnaXNSZXN0fWA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoLyYmL2csICcmJyk7XG4gICAgICB1cmwgPSB1cmwuZW5kc1dpdGgoJyYnKSA/IHVybC5zbGljZSgwLCAtMSkgOiB1cmw7XG4gICAgfVxuICAgIHVybCA9IHVybC5lbmRzV2l0aCgnJicpID8gdXJsLnNsaWNlKDAsIC0xKSA6IHVybDtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgnPyZ3bScsICcmd20nKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgnPyYnLCAnPycpO1xuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZUxheWVyc0J5U2VydmljZShsYXllcnM6IExheWVyW10sIGNvbnRleHRMYXllcnNJRDogYW55W10sIHR5cGVTZXJ2aWNlOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgY29uc3QgYWRkZWRMYXllcnNCeVNlcnZpY2UgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVycy5maWx0ZXIobCA9PiBsLmRhdGFTb3VyY2Uub3B0aW9ucz8udHlwZSA9PT0gdHlwZVNlcnZpY2UpKSB7XG4gICAgICBpZiAoY29udGV4dExheWVyc0lELmluZGV4T2YobGF5ZXIuaWQpID09PSAtMSkge1xuICAgICAgICBsZXQgbGlua1VybCA9IGVuY29kZVVSSUNvbXBvbmVudCgobGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zIGFzIGFueSkudXJsKTtcbiAgICAgICAgbGV0IGFkZGVkTGF5ZXIgPSAnJztcbiAgICAgICAgbGV0IGxheWVyVmVyc2lvbjogc3RyaW5nO1xuICAgICAgICBzd2l0Y2ggKGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBjYXNlICd3bXMnOlxuICAgICAgICAgICAgY29uc3QgZGF0YXNvdXJjZU9wdGlvbnMgPSBsYXllci5kYXRhU291cmNlLm9wdGlvbnMgYXMgV01TRGF0YVNvdXJjZU9wdGlvbnM7XG4gICAgICAgICAgICBhZGRlZExheWVyID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFzb3VyY2VPcHRpb25zLnBhcmFtcy5MQVlFUlMpO1xuICAgICAgICAgICAgbGF5ZXJWZXJzaW9uID0gZGF0YXNvdXJjZU9wdGlvbnMucGFyYW1zLlZFUlNJT04gPT09ICcxLjMuMCcgPyBsYXllclZlcnNpb24gOiBkYXRhc291cmNlT3B0aW9ucy5wYXJhbXMuVkVSU0lPTjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3dtdHMnOlxuICAgICAgICAgIGNhc2UgJ2FyY2dpc3Jlc3QnOlxuICAgICAgICAgIGNhc2UgJ2ltYWdlYXJjZ2lzcmVzdCc6XG4gICAgICAgICAgY2FzZSAndGlsZWFyY2dpc3Jlc3QnOlxuICAgICAgICAgICAgYWRkZWRMYXllciA9IGVuY29kZVVSSUNvbXBvbmVudCgobGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zIGFzIGFueSkubGF5ZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRkZWRMYXllclBvc2l0aW9uID0gYCR7YWRkZWRMYXllcn06aWdveiR7bGF5ZXIuekluZGV4fWA7XG5cbiAgICAgICAgbGV0IHZlcnNpb24gPSAnJztcbiAgICAgICAgaWYgKGxheWVyVmVyc2lvbikge1xuICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gKGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucyBhcyBhbnkpLnVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnO1xuICAgICAgICAgIHZlcnNpb24gPSBlbmNvZGVVUklDb21wb25lbnQoYCR7b3BlcmF0b3J9VkVSU0lPTj0ke2xheWVyVmVyc2lvbn1gKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rVXJsID0gYCR7bGlua1VybH0ke3ZlcnNpb259YDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWFkZGVkTGF5ZXJzQnlTZXJ2aWNlLmZpbmQoZGVmaW5lZFVybCA9PiBkZWZpbmVkVXJsLnVybCA9PT0gbGlua1VybClcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWRkZWRMYXllcnNCeVNlcnZpY2UucHVzaCh7XG4gICAgICAgICAgICB1cmw6IGxpbmtVcmwsXG4gICAgICAgICAgICBsYXllcnM6IFthZGRlZExheWVyUG9zaXRpb25dXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkZWRMYXllcnNCeVNlcnZpY2UuZm9yRWFjaChzZXJ2aWNlID0+IHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnVybCA9PT0gbGlua1VybCkge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmxheWVycy5wdXNoKGFkZGVkTGF5ZXJQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYWRkZWRMYXllcnNRdWVyeVBhcmFtcyA9ICcnO1xuICAgIGlmIChhZGRlZExheWVyc0J5U2VydmljZS5sZW5ndGggPj0gMSkge1xuICAgICAgbGV0IGxpbmtVcmxLZXk7XG4gICAgICBsZXQgbGF5ZXJzS2V5O1xuICAgICAgLypcbiAgICAgIGNvbnN0IGxpbmtVcmxLZXkgPSAodHlwZVNlcnZpY2UgPT09ICd3bXMnKSA/IHRoaXMucm91dGUub3B0aW9ucy53bXNVcmxLZXkgOlxuICAgICAgICAodHlwZVNlcnZpY2UgPT09ICd3bXRzJykgPyB0aGlzLnJvdXRlLm9wdGlvbnMud210c1VybEtleSA6ICcnIDtcbiAgICAgIGNvbnN0IGxheWVyc0tleSA9ICh0eXBlU2VydmljZSA9PT0gJ3dtcycpID8gdGhpcy5yb3V0ZS5vcHRpb25zLndtc0xheWVyc0tleSA6XG4gICAgICAgICh0eXBlU2VydmljZSA9PT0gJ3dtdHMnKSA/IHRoaXMucm91dGUub3B0aW9ucy53bXRzTGF5ZXJzS2V5IDogJycgO1xuKi9cbiAgICAgIHN3aXRjaCAodHlwZVNlcnZpY2UudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICd3bXMnOlxuICAgICAgICAgIGxpbmtVcmxLZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMud21zVXJsS2V5O1xuICAgICAgICAgIGxheWVyc0tleSA9IHRoaXMucm91dGUub3B0aW9ucy53bXNMYXllcnNLZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dtdHMnOlxuICAgICAgICAgIGxpbmtVcmxLZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMud210c1VybEtleTtcbiAgICAgICAgICBsYXllcnNLZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMud210c0xheWVyc0tleTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJjZ2lzcmVzdCc6XG4gICAgICAgICAgbGlua1VybEtleSA9IHRoaXMucm91dGUub3B0aW9ucy5hcmNnaXNVcmxLZXk7XG4gICAgICAgICAgbGF5ZXJzS2V5ID0gdGhpcy5yb3V0ZS5vcHRpb25zLmFyY2dpc0xheWVyc0tleTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW1hZ2VhcmNnaXNyZXN0JzpcbiAgICAgICAgICBsaW5rVXJsS2V5ID0gdGhpcy5yb3V0ZS5vcHRpb25zLmlhcmNnaXNVcmxLZXk7XG4gICAgICAgICAgbGF5ZXJzS2V5ID0gdGhpcy5yb3V0ZS5vcHRpb25zLmlhcmNnaXNMYXllcnNLZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RpbGVhcmNnaXNyZXN0JzpcbiAgICAgICAgICBsaW5rVXJsS2V5ID0gdGhpcy5yb3V0ZS5vcHRpb25zLnRhcmNnaXNVcmxLZXk7XG4gICAgICAgICAgbGF5ZXJzS2V5ID0gdGhpcy5yb3V0ZS5vcHRpb25zLnRhcmNnaXNMYXllcnNLZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgbGlua1VybEtleSA9ICcnO1xuICAgICAgICAgIGxheWVyc0tleSA9ICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGlua1VybFF1ZXJ5UGFyYW1zID0gJyc7XG4gICAgICBsZXQgbGF5ZXJzUXVlcnlQYXJhbXMgPSAnJztcbiAgICAgIGFkZGVkTGF5ZXJzQnlTZXJ2aWNlLmZvckVhY2goc2VydmljZSA9PiB7XG4gICAgICAgIGxpbmtVcmxRdWVyeVBhcmFtcyArPSBgJHtzZXJ2aWNlLnVybH0sYDtcbiAgICAgICAgbGF5ZXJzUXVlcnlQYXJhbXMgKz0gYCgke3NlcnZpY2UubGF5ZXJzLmpvaW4oJywnKX0pLGA7XG4gICAgICB9KTtcbiAgICAgIGxpbmtVcmxRdWVyeVBhcmFtcyA9IGxpbmtVcmxRdWVyeVBhcmFtcy5lbmRzV2l0aCgnLCcpXG4gICAgICAgID8gbGlua1VybFF1ZXJ5UGFyYW1zLnNsaWNlKDAsIC0xKVxuICAgICAgICA6IGxpbmtVcmxRdWVyeVBhcmFtcztcbiAgICAgIGxheWVyc1F1ZXJ5UGFyYW1zID0gbGF5ZXJzUXVlcnlQYXJhbXMuZW5kc1dpdGgoJywnKVxuICAgICAgICA/IGxheWVyc1F1ZXJ5UGFyYW1zLnNsaWNlKDAsIC0xKVxuICAgICAgICA6IGxheWVyc1F1ZXJ5UGFyYW1zO1xuICAgICAgYWRkZWRMYXllcnNRdWVyeVBhcmFtcyA9IGAke2xpbmtVcmxLZXl9PSR7bGlua1VybFF1ZXJ5UGFyYW1zfSYke2xheWVyc0tleX09JHtsYXllcnNRdWVyeVBhcmFtc31gO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRlZExheWVyc1F1ZXJ5UGFyYW1zO1xuICB9XG59XG4iXX0=