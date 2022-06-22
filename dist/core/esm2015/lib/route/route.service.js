import { Injectable, Inject, InjectionToken, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export let ROUTE_SERVICE_OPTIONS = new InjectionToken('routeServiceOptions');
export function provideRouteServiceOptions(options) {
    return {
        provide: ROUTE_SERVICE_OPTIONS,
        useValue: options
    };
}
export class RouteService {
    constructor(router, route, options) {
        this.router = router;
        this.route = route;
        const defaultOptions = {
            centerKey: 'center',
            zoomKey: 'zoom',
            projectionKey: 'projection',
            contextKey: 'context',
            searchKey: 'search',
            visibleOnLayersKey: 'visiblelayers',
            visibleOffLayersKey: 'invisiblelayers',
            directionsCoordKey: 'routing',
            directionsOptionsKey: 'routingOptions',
            toolKey: 'tool',
            wmsUrlKey: 'wmsUrl',
            wmsLayersKey: 'wmsLayers',
            wmtsUrlKey: 'wmtsUrl',
            wmtsLayersKey: 'wmtsLayers',
            arcgisUrlKey: 'arcgisUrl',
            arcgisLayersKey: 'arcgisLayers',
            iarcgisUrlKey: 'iarcgisUrl',
            iarcgisLayersKey: 'iarcgisLayers',
            tarcgisUrlKey: 'tarcgisUrl',
            tarcgisLayersKey: 'tarcgisLayers',
            vectorKey: 'vector'
        };
        this.options = Object.assign({}, defaultOptions, options);
    }
    get queryParams() {
        let url = decodeURIComponent(location.search);
        if (url.includes('¢er=')) {
            url = url.replace('¢er', '&center');
            const queryParams = url
                .slice(1)
                .split('&')
                .map(p => p.split('='))
                .reduce((obj, pair) => {
                const [key, value] = pair.map(decodeURIComponent);
                obj[key] = value;
                return obj;
            }, {});
            this.router.navigate([], { queryParams });
        }
        return this.route.queryParams;
    }
}
RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i1.ActivatedRoute), i0.ɵɵinject(ROUTE_SERVICE_OPTIONS, 8)); };
RouteService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RouteService, factory: RouteService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouteService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: undefined, decorators: [{
                type: Inject,
                args: [ROUTE_SERVICE_OPTIONS]
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9yb3V0ZS9yb3V0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU03RSxNQUFNLENBQUMsSUFBSSxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FDbkQscUJBQXFCLENBQ3RCLENBQUM7QUFFRixNQUFNLFVBQVUsMEJBQTBCLENBQUMsT0FBNEI7SUFDckUsT0FBTztRQUNMLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsUUFBUSxFQUFFLE9BQU87S0FDbEIsQ0FBQztBQUNKLENBQUM7QUFLRCxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUNVLE1BQWMsRUFDZixLQUFxQixFQUc1QixPQUE0QjtRQUpwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFLNUIsTUFBTSxjQUFjLEdBQUc7WUFDckIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsT0FBTyxFQUFFLE1BQU07WUFDZixhQUFhLEVBQUUsWUFBWTtZQUMzQixVQUFVLEVBQUUsU0FBUztZQUNyQixTQUFTLEVBQUUsUUFBUTtZQUNuQixrQkFBa0IsRUFBRSxlQUFlO1lBQ25DLG1CQUFtQixFQUFFLGlCQUFpQjtZQUN0QyxrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLG9CQUFvQixFQUFFLGdCQUFnQjtZQUN0QyxPQUFPLEVBQUUsTUFBTTtZQUNmLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFlBQVksRUFBRyxXQUFXO1lBQzFCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLGFBQWEsRUFBRyxZQUFZO1lBQzVCLFlBQVksRUFBRSxXQUFXO1lBQ3pCLGVBQWUsRUFBRyxjQUFjO1lBQ2hDLGFBQWEsRUFBRSxZQUFZO1lBQzNCLGdCQUFnQixFQUFHLGVBQWU7WUFDbEMsYUFBYSxFQUFFLFlBQVk7WUFDM0IsZ0JBQWdCLEVBQUcsZUFBZTtZQUNsQyxTQUFTLEVBQUUsUUFBUTtTQUNwQixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLElBQUksR0FBRyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sV0FBVyxHQUFRLEdBQUc7aUJBQzNCLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDVixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNsRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ2hDLENBQUM7O3dFQXBEVSxZQUFZLHNFQU1iLHFCQUFxQjtrRUFOcEIsWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBT0ksTUFBTTt1QkFBQyxxQkFBcUI7O3NCQUM1QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJvdXRlU2VydmljZU9wdGlvbnMgfSBmcm9tICcuL3JvdXRlLmludGVyZmFjZSc7XG5cbmV4cG9ydCBsZXQgUk9VVEVfU0VSVklDRV9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPFJvdXRlU2VydmljZU9wdGlvbnM+KFxuICAncm91dGVTZXJ2aWNlT3B0aW9ucydcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlUm91dGVTZXJ2aWNlT3B0aW9ucyhvcHRpb25zOiBSb3V0ZVNlcnZpY2VPcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogUk9VVEVfU0VSVklDRV9PUFRJT05TLFxuICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gIH07XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlU2VydmljZSB7XG4gIHB1YmxpYyBvcHRpb25zOiBSb3V0ZVNlcnZpY2VPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBASW5qZWN0KFJPVVRFX1NFUlZJQ0VfT1BUSU9OUylcbiAgICBAT3B0aW9uYWwoKVxuICAgIG9wdGlvbnM6IFJvdXRlU2VydmljZU9wdGlvbnNcbiAgKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBjZW50ZXJLZXk6ICdjZW50ZXInLFxuICAgICAgem9vbUtleTogJ3pvb20nLFxuICAgICAgcHJvamVjdGlvbktleTogJ3Byb2plY3Rpb24nLFxuICAgICAgY29udGV4dEtleTogJ2NvbnRleHQnLFxuICAgICAgc2VhcmNoS2V5OiAnc2VhcmNoJyxcbiAgICAgIHZpc2libGVPbkxheWVyc0tleTogJ3Zpc2libGVsYXllcnMnLFxuICAgICAgdmlzaWJsZU9mZkxheWVyc0tleTogJ2ludmlzaWJsZWxheWVycycsXG4gICAgICBkaXJlY3Rpb25zQ29vcmRLZXk6ICdyb3V0aW5nJyxcbiAgICAgIGRpcmVjdGlvbnNPcHRpb25zS2V5OiAncm91dGluZ09wdGlvbnMnLFxuICAgICAgdG9vbEtleTogJ3Rvb2wnLFxuICAgICAgd21zVXJsS2V5OiAnd21zVXJsJyxcbiAgICAgIHdtc0xheWVyc0tleTogICd3bXNMYXllcnMnLFxuICAgICAgd210c1VybEtleTogJ3dtdHNVcmwnLFxuICAgICAgd210c0xheWVyc0tleTogICd3bXRzTGF5ZXJzJyxcbiAgICAgIGFyY2dpc1VybEtleTogJ2FyY2dpc1VybCcsXG4gICAgICBhcmNnaXNMYXllcnNLZXk6ICAnYXJjZ2lzTGF5ZXJzJyxcbiAgICAgIGlhcmNnaXNVcmxLZXk6ICdpYXJjZ2lzVXJsJyxcbiAgICAgIGlhcmNnaXNMYXllcnNLZXk6ICAnaWFyY2dpc0xheWVycycsXG4gICAgICB0YXJjZ2lzVXJsS2V5OiAndGFyY2dpc1VybCcsXG4gICAgICB0YXJjZ2lzTGF5ZXJzS2V5OiAgJ3RhcmNnaXNMYXllcnMnLFxuICAgICAgdmVjdG9yS2V5OiAndmVjdG9yJ1xuICAgIH07XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0IHF1ZXJ5UGFyYW1zKCk6IE9ic2VydmFibGU8UGFyYW1zPiB7XG4gICAgbGV0IHVybCA9IGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5zZWFyY2gpO1xuICAgIGlmICh1cmwuaW5jbHVkZXMoJ8KiZXI9JykpIHtcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKCfComVyJywgJyZjZW50ZXInKTtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBhbnkgPSB1cmxcbiAgICAgIC5zbGljZSgxKVxuICAgICAgLnNwbGl0KCcmJylcbiAgICAgIC5tYXAocCA9PiBwLnNwbGl0KCc9JykpXG4gICAgICAucmVkdWNlKChvYmosIHBhaXIpID0+IHtcbiAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gcGFpci5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KTtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7IHF1ZXJ5UGFyYW1zIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcztcbiAgfVxufVxuIl19