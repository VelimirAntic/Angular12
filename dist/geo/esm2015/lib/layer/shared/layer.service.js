import { Injectable, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import stylefunction from 'ol-mapbox-style/dist/stylefunction';
import { ObjectUtils } from '@igo2/utils';
import { OSMDataSource, FeatureDataSource, XYZDataSource, TileDebugDataSource, WFSDataSource, WMTSDataSource, WMSDataSource, CartoDataSource, ImageArcGISRestDataSource, ArcGISRestDataSource, TileArcGISRestDataSource, WebSocketDataSource, MVTDataSource, ClusterDataSource } from '../../datasource';
import { ImageLayer, TileLayer, VectorLayer, VectorTileLayer } from './layers';
import { computeMVTOptionsOnHover } from '../utils/layer.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./style.service";
import * as i3 from "../../datasource/shared/datasource.service";
import * as i4 from "@igo2/core";
import * as i5 from "@igo2/auth";
export class LayerService {
    constructor(http, styleService, dataSourceService, messageService, languageService, authInterceptor) {
        this.http = http;
        this.styleService = styleService;
        this.dataSourceService = dataSourceService;
        this.messageService = messageService;
        this.languageService = languageService;
        this.authInterceptor = authInterceptor;
    }
    createLayer(layerOptions) {
        if (!layerOptions.source) {
            return;
        }
        if (layerOptions.source.options &&
            layerOptions.source.options._layerOptionsFromSource) {
            layerOptions = ObjectUtils.mergeDeep(layerOptions.source.options._layerOptionsFromSource, layerOptions || {});
        }
        let layer;
        switch (layerOptions.source.constructor) {
            case OSMDataSource:
            case WMTSDataSource:
            case XYZDataSource:
            case TileDebugDataSource:
            case CartoDataSource:
            case TileArcGISRestDataSource:
                layer = this.createTileLayer(layerOptions);
                break;
            case FeatureDataSource:
            case WFSDataSource:
            case ArcGISRestDataSource:
            case WebSocketDataSource:
            case ClusterDataSource:
                layer = this.createVectorLayer(layerOptions);
                break;
            case ImageArcGISRestDataSource:
            case WMSDataSource:
                layer = this.createImageLayer(layerOptions);
                break;
            case MVTDataSource:
                const _layerOptions = computeMVTOptionsOnHover(layerOptions);
                layer = this.createVectorTileLayer(_layerOptions);
                break;
            default:
                break;
        }
        return layer;
    }
    createAsyncLayer(_layerOptions, detailedContextUri) {
        const layerOptions = computeMVTOptionsOnHover(_layerOptions);
        if (layerOptions.source) {
            return new Observable(d => d.next(this.createLayer(layerOptions)));
        }
        return this.dataSourceService
            .createAsyncDataSource(layerOptions.sourceOptions, detailedContextUri)
            .pipe(map(source => {
            if (source === undefined) {
                return undefined;
            }
            return this.createLayer(Object.assign(layerOptions, { source }));
        }));
    }
    createImageLayer(layerOptions) {
        return new ImageLayer(layerOptions, this.messageService, this.languageService, this.authInterceptor);
    }
    createTileLayer(layerOptions) {
        return new TileLayer(layerOptions, this.messageService, this.authInterceptor);
    }
    createVectorLayer(layerOptions) {
        let style;
        let igoLayer;
        if (layerOptions.style !== undefined) {
            style = this.styleService.createStyle(layerOptions.style);
        }
        if (layerOptions.source instanceof ArcGISRestDataSource) {
            const source = layerOptions.source;
            style = source.options.params.style;
        }
        else if (layerOptions.styleByAttribute) {
            const serviceStyle = this.styleService;
            layerOptions.style = feature => {
                return serviceStyle.createStyleByAttribute(feature, layerOptions.styleByAttribute);
            };
            igoLayer = new VectorLayer(layerOptions, this.messageService, this.authInterceptor);
        }
        if (layerOptions.source instanceof ClusterDataSource) {
            const serviceStyle = this.styleService;
            const baseStyle = layerOptions.clusterBaseStyle;
            layerOptions.style = feature => {
                return serviceStyle.createClusterStyle(feature, layerOptions.clusterParam, baseStyle);
            };
            igoLayer = new VectorLayer(layerOptions, this.messageService, this.authInterceptor);
        }
        const layerOptionsOl = Object.assign({}, layerOptions, {
            style
        });
        if (!igoLayer) {
            igoLayer = new VectorLayer(layerOptionsOl, this.messageService, this.authInterceptor);
        }
        this.applyMapboxStyle(igoLayer, layerOptionsOl);
        return igoLayer;
    }
    createVectorTileLayer(layerOptions) {
        let style;
        let igoLayer;
        if (layerOptions.style !== undefined) {
            style = this.styleService.createStyle(layerOptions.style);
        }
        if (layerOptions.styleByAttribute) {
            const serviceStyle = this.styleService;
            layerOptions.style = feature => {
                return serviceStyle.createStyleByAttribute(feature, layerOptions.styleByAttribute);
            };
            igoLayer = new VectorTileLayer(layerOptions, this.messageService, this.authInterceptor);
        }
        const layerOptionsOl = Object.assign({}, layerOptions, {
            style
        });
        if (!igoLayer) {
            igoLayer = new VectorTileLayer(layerOptionsOl, this.messageService, this.authInterceptor);
        }
        this.applyMapboxStyle(igoLayer, layerOptionsOl);
        return igoLayer;
    }
    applyMapboxStyle(layer, layerOptions) {
        if (layerOptions.mapboxStyle) {
            this.getMapboxGlStyle(layerOptions.mapboxStyle.url).subscribe(res => {
                stylefunction(layer.ol, res, layerOptions.mapboxStyle.source);
            });
        }
    }
    getMapboxGlStyle(url) {
        return this.http.get(url).pipe(map((res) => res), catchError(err => {
            console.log('No style was found');
            return of(err);
        }));
    }
}
LayerService.ɵfac = function LayerService_Factory(t) { return new (t || LayerService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.StyleService), i0.ɵɵinject(i3.DataSourceService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i4.LanguageService), i0.ɵɵinject(i5.AuthInterceptor, 8)); };
LayerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LayerService, factory: LayerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.StyleService }, { type: i3.DataSourceService }, { type: i4.MessageService }, { type: i4.LanguageService }, { type: i5.AuthInterceptor, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2xheWVyL3NoYXJlZC9sYXllci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxhQUFhLE1BQU0sb0NBQW9DLENBQUM7QUFFL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUkxQyxPQUFPLEVBQ0wsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsbUJBQW1CLEVBQ25CLGFBQWEsRUFDYixjQUFjLEVBQ2QsYUFBYSxFQUNiLGVBQWUsRUFDZix5QkFBeUIsRUFDekIsb0JBQW9CLEVBQ3BCLHdCQUF3QixFQUN4QixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLGlCQUFpQixFQUNsQixNQUFNLGtCQUFrQixDQUFDO0FBSTFCLE9BQU8sRUFFTCxVQUFVLEVBRVYsU0FBUyxFQUVULFdBQVcsRUFHWCxlQUFlLEVBRWhCLE1BQU0sVUFBVSxDQUFDO0FBRWxCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0FBT2hFLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQ1UsSUFBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLGVBQWdDLEVBQ3BCLGVBQWdDO1FBTDVDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxtQkFB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VUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQVFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgc3R5bGVmdW5jdGlvbiBmcm9tICdvbC1tYXBib3gtc3R5bGUvZGlzdC9zdHlsZWZ1bmN0aW9uJztcbmltcG9ydCB7IEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xuXG5pbXBvcnQge1xuICBPU01EYXRhU291cmNlLFxuICBGZWF0dXJlRGF0YVNvdXJjZSxcbiAgWFlaRGF0YVNvdXJjZSxcbiAgVGlsZURlYnVnRGF0YVNvdXJjZSxcbiAgV0ZTRGF0YVNvdXJjZSxcbiAgV01UU0RhdGFTb3VyY2UsXG4gIFdNU0RhdGFTb3VyY2UsXG4gIENhcnRvRGF0YVNvdXJjZSxcbiAgSW1hZ2VBcmNHSVNSZXN0RGF0YVNvdXJjZSxcbiAgQXJjR0lTUmVzdERhdGFTb3VyY2UsXG4gIFRpbGVBcmNHSVNSZXN0RGF0YVNvdXJjZSxcbiAgV2ViU29ja2V0RGF0YVNvdXJjZSxcbiAgTVZURGF0YVNvdXJjZSxcbiAgQ2x1c3RlckRhdGFTb3VyY2Vcbn0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZS5zZXJ2aWNlJztcblxuaW1wb3J0IHtcbiAgTGF5ZXIsXG4gIEltYWdlTGF5ZXIsXG4gIEltYWdlTGF5ZXJPcHRpb25zLFxuICBUaWxlTGF5ZXIsXG4gIFRpbGVMYXllck9wdGlvbnMsXG4gIFZlY3RvckxheWVyLFxuICBWZWN0b3JMYXllck9wdGlvbnMsXG4gIEFueUxheWVyT3B0aW9ucyxcbiAgVmVjdG9yVGlsZUxheWVyLFxuICBWZWN0b3JUaWxlTGF5ZXJPcHRpb25zXG59IGZyb20gJy4vbGF5ZXJzJztcblxuaW1wb3J0IHsgY29tcHV0ZU1WVE9wdGlvbnNPbkhvdmVyIH0gZnJvbSAnLi4vdXRpbHMvbGF5ZXIudXRpbHMnO1xuaW1wb3J0IHsgU3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi9zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSwgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgc3R5bGVTZXJ2aWNlOiBTdHlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlU2VydmljZTogRGF0YVNvdXJjZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGF1dGhJbnRlcmNlcHRvcjogQXV0aEludGVyY2VwdG9yXG4gICkge31cblxuICBjcmVhdGVMYXllcihsYXllck9wdGlvbnM6IEFueUxheWVyT3B0aW9ucyk6IExheWVyIHtcbiAgICBpZiAoIWxheWVyT3B0aW9ucy5zb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBsYXllck9wdGlvbnMuc291cmNlLm9wdGlvbnMgJiZcbiAgICAgIGxheWVyT3B0aW9ucy5zb3VyY2Uub3B0aW9ucy5fbGF5ZXJPcHRpb25zRnJvbVNvdXJjZVxuICAgICkge1xuICAgICAgbGF5ZXJPcHRpb25zID0gT2JqZWN0VXRpbHMubWVyZ2VEZWVwKFxuICAgICAgICBsYXllck9wdGlvbnMuc291cmNlLm9wdGlvbnMuX2xheWVyT3B0aW9uc0Zyb21Tb3VyY2UsXG4gICAgICAgIGxheWVyT3B0aW9ucyB8fCB7fVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgbGF5ZXI7XG4gICAgc3dpdGNoIChsYXllck9wdGlvbnMuc291cmNlLmNvbnN0cnVjdG9yKSB7XG4gICAgICBjYXNlIE9TTURhdGFTb3VyY2U6XG4gICAgICBjYXNlIFdNVFNEYXRhU291cmNlOlxuICAgICAgY2FzZSBYWVpEYXRhU291cmNlOlxuICAgICAgY2FzZSBUaWxlRGVidWdEYXRhU291cmNlOlxuICAgICAgY2FzZSBDYXJ0b0RhdGFTb3VyY2U6XG4gICAgICBjYXNlIFRpbGVBcmNHSVNSZXN0RGF0YVNvdXJjZTpcbiAgICAgICAgbGF5ZXIgPSB0aGlzLmNyZWF0ZVRpbGVMYXllcihsYXllck9wdGlvbnMgYXMgVGlsZUxheWVyT3B0aW9ucyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGZWF0dXJlRGF0YVNvdXJjZTpcbiAgICAgIGNhc2UgV0ZTRGF0YVNvdXJjZTpcbiAgICAgIGNhc2UgQXJjR0lTUmVzdERhdGFTb3VyY2U6XG4gICAgICBjYXNlIFdlYlNvY2tldERhdGFTb3VyY2U6XG4gICAgICBjYXNlIENsdXN0ZXJEYXRhU291cmNlOlxuICAgICAgICBsYXllciA9IHRoaXMuY3JlYXRlVmVjdG9yTGF5ZXIobGF5ZXJPcHRpb25zIGFzIFZlY3RvckxheWVyT3B0aW9ucyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBJbWFnZUFyY0dJU1Jlc3REYXRhU291cmNlOlxuICAgICAgY2FzZSBXTVNEYXRhU291cmNlOlxuICAgICAgICBsYXllciA9IHRoaXMuY3JlYXRlSW1hZ2VMYXllcihsYXllck9wdGlvbnMgYXMgSW1hZ2VMYXllck9wdGlvbnMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTVZURGF0YVNvdXJjZTpcbiAgICAgICAgY29uc3QgX2xheWVyT3B0aW9ucyA9IGNvbXB1dGVNVlRPcHRpb25zT25Ib3ZlcihsYXllck9wdGlvbnMpO1xuICAgICAgICBsYXllciA9IHRoaXMuY3JlYXRlVmVjdG9yVGlsZUxheWVyKFxuICAgICAgICAgIF9sYXllck9wdGlvbnMgYXMgVmVjdG9yVGlsZUxheWVyT3B0aW9uc1xuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBsYXllcjtcbiAgfVxuXG4gIGNyZWF0ZUFzeW5jTGF5ZXIoX2xheWVyT3B0aW9uczogQW55TGF5ZXJPcHRpb25zLCBkZXRhaWxlZENvbnRleHRVcmk/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPExheWVyPiB7XG4gICAgY29uc3QgbGF5ZXJPcHRpb25zID0gY29tcHV0ZU1WVE9wdGlvbnNPbkhvdmVyKF9sYXllck9wdGlvbnMpO1xuICAgIGlmIChsYXllck9wdGlvbnMuc291cmNlKSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZCA9PiBkLm5leHQodGhpcy5jcmVhdGVMYXllcihsYXllck9wdGlvbnMpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZVNlcnZpY2VcbiAgICAgIC5jcmVhdGVBc3luY0RhdGFTb3VyY2UobGF5ZXJPcHRpb25zLnNvdXJjZU9wdGlvbnMsIGRldGFpbGVkQ29udGV4dFVyaSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoc291cmNlID0+IHtcbiAgICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUxheWVyKE9iamVjdC5hc3NpZ24obGF5ZXJPcHRpb25zLCB7IHNvdXJjZSB9KSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVJbWFnZUxheWVyKGxheWVyT3B0aW9uczogSW1hZ2VMYXllck9wdGlvbnMpOiBJbWFnZUxheWVyIHtcbiAgICByZXR1cm4gbmV3IEltYWdlTGF5ZXIobGF5ZXJPcHRpb25zLCB0aGlzLm1lc3NhZ2VTZXJ2aWNlLCB0aGlzLmxhbmd1YWdlU2VydmljZSwgdGhpcy5hdXRoSW50ZXJjZXB0b3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUaWxlTGF5ZXIobGF5ZXJPcHRpb25zOiBUaWxlTGF5ZXJPcHRpb25zKTogVGlsZUxheWVyIHtcbiAgICByZXR1cm4gbmV3IFRpbGVMYXllcihsYXllck9wdGlvbnMsIHRoaXMubWVzc2FnZVNlcnZpY2UsIHRoaXMuYXV0aEludGVyY2VwdG9yKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVmVjdG9yTGF5ZXIobGF5ZXJPcHRpb25zOiBWZWN0b3JMYXllck9wdGlvbnMpOiBWZWN0b3JMYXllciB7XG4gICAgbGV0IHN0eWxlOiBTdHlsZTtcbiAgICBsZXQgaWdvTGF5ZXI6IFZlY3RvckxheWVyO1xuICAgIGlmIChsYXllck9wdGlvbnMuc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc3R5bGUgPSB0aGlzLnN0eWxlU2VydmljZS5jcmVhdGVTdHlsZShsYXllck9wdGlvbnMuc3R5bGUpO1xuICAgIH1cblxuICAgIGlmIChsYXllck9wdGlvbnMuc291cmNlIGluc3RhbmNlb2YgQXJjR0lTUmVzdERhdGFTb3VyY2UpIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IGxheWVyT3B0aW9ucy5zb3VyY2UgYXMgQXJjR0lTUmVzdERhdGFTb3VyY2U7XG4gICAgICBzdHlsZSA9IHNvdXJjZS5vcHRpb25zLnBhcmFtcy5zdHlsZTtcbiAgICB9IGVsc2UgaWYgKGxheWVyT3B0aW9ucy5zdHlsZUJ5QXR0cmlidXRlKSB7XG4gICAgICBjb25zdCBzZXJ2aWNlU3R5bGUgPSB0aGlzLnN0eWxlU2VydmljZTtcbiAgICAgIGxheWVyT3B0aW9ucy5zdHlsZSA9IGZlYXR1cmUgPT4ge1xuICAgICAgICByZXR1cm4gc2VydmljZVN0eWxlLmNyZWF0ZVN0eWxlQnlBdHRyaWJ1dGUoXG4gICAgICAgICAgZmVhdHVyZSxcbiAgICAgICAgICBsYXllck9wdGlvbnMuc3R5bGVCeUF0dHJpYnV0ZVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGlnb0xheWVyID0gbmV3IFZlY3RvckxheWVyKGxheWVyT3B0aW9ucywgdGhpcy5tZXNzYWdlU2VydmljZSwgdGhpcy5hdXRoSW50ZXJjZXB0b3IpO1xuICAgIH1cblxuICAgIGlmIChsYXllck9wdGlvbnMuc291cmNlIGluc3RhbmNlb2YgQ2x1c3RlckRhdGFTb3VyY2UpIHtcbiAgICAgIGNvbnN0IHNlcnZpY2VTdHlsZSA9IHRoaXMuc3R5bGVTZXJ2aWNlO1xuICAgICAgY29uc3QgYmFzZVN0eWxlID0gbGF5ZXJPcHRpb25zLmNsdXN0ZXJCYXNlU3R5bGU7XG4gICAgICBsYXllck9wdGlvbnMuc3R5bGUgPSBmZWF0dXJlID0+IHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VTdHlsZS5jcmVhdGVDbHVzdGVyU3R5bGUoXG4gICAgICAgICAgZmVhdHVyZSxcbiAgICAgICAgICBsYXllck9wdGlvbnMuY2x1c3RlclBhcmFtLFxuICAgICAgICAgIGJhc2VTdHlsZVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGlnb0xheWVyID0gbmV3IFZlY3RvckxheWVyKGxheWVyT3B0aW9ucywgdGhpcy5tZXNzYWdlU2VydmljZSwgdGhpcy5hdXRoSW50ZXJjZXB0b3IpO1xuICAgIH1cblxuICAgIGNvbnN0IGxheWVyT3B0aW9uc09sID0gT2JqZWN0LmFzc2lnbih7fSwgbGF5ZXJPcHRpb25zLCB7XG4gICAgICBzdHlsZVxuICAgIH0pO1xuXG4gICAgaWYgKCFpZ29MYXllcikge1xuICAgICAgaWdvTGF5ZXIgPSBuZXcgVmVjdG9yTGF5ZXIobGF5ZXJPcHRpb25zT2wsIHRoaXMubWVzc2FnZVNlcnZpY2UsIHRoaXMuYXV0aEludGVyY2VwdG9yKTtcbiAgICB9XG5cbiAgICB0aGlzLmFwcGx5TWFwYm94U3R5bGUoaWdvTGF5ZXIsIGxheWVyT3B0aW9uc09sIGFzIGFueSk7XG5cbiAgICByZXR1cm4gaWdvTGF5ZXI7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVZlY3RvclRpbGVMYXllcihcbiAgICBsYXllck9wdGlvbnM6IFZlY3RvclRpbGVMYXllck9wdGlvbnNcbiAgKTogVmVjdG9yVGlsZUxheWVyIHtcbiAgICBsZXQgc3R5bGU6IFN0eWxlO1xuICAgIGxldCBpZ29MYXllcjogVmVjdG9yVGlsZUxheWVyO1xuXG4gICAgaWYgKGxheWVyT3B0aW9ucy5zdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdHlsZSA9IHRoaXMuc3R5bGVTZXJ2aWNlLmNyZWF0ZVN0eWxlKGxheWVyT3B0aW9ucy5zdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKGxheWVyT3B0aW9ucy5zdHlsZUJ5QXR0cmlidXRlKSB7XG4gICAgICBjb25zdCBzZXJ2aWNlU3R5bGUgPSB0aGlzLnN0eWxlU2VydmljZTtcbiAgICAgIGxheWVyT3B0aW9ucy5zdHlsZSA9IGZlYXR1cmUgPT4ge1xuICAgICAgICByZXR1cm4gc2VydmljZVN0eWxlLmNyZWF0ZVN0eWxlQnlBdHRyaWJ1dGUoXG4gICAgICAgICAgZmVhdHVyZSxcbiAgICAgICAgICBsYXllck9wdGlvbnMuc3R5bGVCeUF0dHJpYnV0ZVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGlnb0xheWVyID0gbmV3IFZlY3RvclRpbGVMYXllcihsYXllck9wdGlvbnMsIHRoaXMubWVzc2FnZVNlcnZpY2UsIHRoaXMuYXV0aEludGVyY2VwdG9yKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYXllck9wdGlvbnNPbCA9IE9iamVjdC5hc3NpZ24oe30sIGxheWVyT3B0aW9ucywge1xuICAgICAgc3R5bGVcbiAgICB9KTtcblxuICAgIGlmICghaWdvTGF5ZXIpIHtcbiAgICAgIGlnb0xheWVyID0gbmV3IFZlY3RvclRpbGVMYXllcihsYXllck9wdGlvbnNPbCwgdGhpcy5tZXNzYWdlU2VydmljZSwgdGhpcy5hdXRoSW50ZXJjZXB0b3IpO1xuICAgIH1cblxuICAgIHRoaXMuYXBwbHlNYXBib3hTdHlsZShpZ29MYXllciwgbGF5ZXJPcHRpb25zT2wpO1xuICAgIHJldHVybiBpZ29MYXllcjtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlNYXBib3hTdHlsZShsYXllcjogTGF5ZXIsIGxheWVyT3B0aW9uczogVmVjdG9yVGlsZUxheWVyT3B0aW9ucykge1xuICAgIGlmIChsYXllck9wdGlvbnMubWFwYm94U3R5bGUpIHtcbiAgICAgIHRoaXMuZ2V0TWFwYm94R2xTdHlsZShsYXllck9wdGlvbnMubWFwYm94U3R5bGUudXJsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgc3R5bGVmdW5jdGlvbihsYXllci5vbCwgcmVzLCBsYXllck9wdGlvbnMubWFwYm94U3R5bGUuc291cmNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXBib3hHbFN0eWxlKHVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxuICAgICAgbWFwKChyZXM6IGFueSkgPT4gcmVzKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHN0eWxlIHdhcyBmb3VuZCcpO1xuICAgICAgICByZXR1cm4gb2YoZXJyKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19