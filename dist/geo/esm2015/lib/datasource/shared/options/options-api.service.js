import { Injectable, Inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OptionsService } from './options.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class OptionsApiService extends OptionsService {
    constructor(http, options = {}) {
        super();
        this.http = http;
        this.urlApi = options.url || this.urlApi;
        this.provideContextUri = options.provideContextUri || this.provideContextUri;
    }
    getWMSOptions(baseOptions, detailedContextUri) {
        if (!this.urlApi) {
            return of({});
        }
        let params = new HttpParams({
            fromObject: {
                type: baseOptions.type,
                url: baseOptions.url,
                layers: baseOptions.params.LAYERS
            }
        });
        if (detailedContextUri && this.provideContextUri) {
            params = params.append('context', detailedContextUri);
        }
        const request = this.http.get(this.urlApi, {
            params
        });
        return request.pipe(map((res) => {
            if (!res || !res.sourceOptions) {
                return {};
            }
            if (res.layerOptions) {
                res.sourceOptions._layerOptionsFromSource = res.layerOptions;
            }
            return res.sourceOptions;
        }));
    }
    getArcgisRestOptions(baseOptions, detailedContextUri) {
        if (!this.urlApi) {
            return of({});
        }
        let params = new HttpParams({
            fromObject: {
                type: baseOptions.type,
                url: baseOptions.url,
                layers: baseOptions.layer
            }
        });
        if (detailedContextUri && this.provideContextUri) {
            params = params.append('context', detailedContextUri);
        }
        const request = this.http.get(this.urlApi, {
            params
        });
        return request.pipe(map((res) => {
            if (!res || !res.sourceOptions) {
                return {};
            }
            if (res.layerOptions) {
                res.sourceOptions._layerOptionsFromSource = res.layerOptions;
            }
            return res.sourceOptions;
        }));
    }
}
OptionsApiService.ɵfac = function OptionsApiService_Factory(t) { return new (t || OptionsApiService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('options')); };
OptionsApiService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OptionsApiService, factory: OptionsApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OptionsApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['options']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy1hcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2RhdGFzb3VyY2Uvc2hhcmVkL29wdGlvbnMvb3B0aW9ucy1hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFNbkQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGNBQWM7SUFJbkQsWUFDVSxJQUFnQixFQUNMLFVBQTZCLEVBQUU7UUFFbEQsS0FBSyxFQUFFLENBQUM7UUFIQSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBSXhCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQy9FLENBQUM7SUFFRCxhQUFhLENBQ1gsV0FBaUMsRUFDakMsa0JBQTJCO1FBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLEVBQTBCLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzFCLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7Z0JBQ3RCLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRztnQkFDcEIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNsQztTQUNGLENBQUMsQ0FBQztRQUVILElBQUksa0JBQWtCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ2hELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QyxNQUFNO1NBQ1AsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUNqQixHQUFHLENBQ0QsQ0FBQyxHQUdBLEVBQUUsRUFBRTtZQUNILElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFO2dCQUM5QixPQUFPLEVBQTBCLENBQUM7YUFDbkM7WUFDRCxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLEdBQUcsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQzthQUM5RDtZQUNELE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUMzQixDQUFDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUdELG9CQUFvQixDQUNsQixXQUE2RyxFQUM3RyxrQkFBMkI7UUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxFQUFFLENBQUMsRUFBc0MsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDMUIsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtnQkFDdEIsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHO2dCQUNwQixNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUs7YUFDMUI7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLGtCQUFrQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNoRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUN2RDtRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekMsTUFBTTtTQUNQLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDakIsR0FBRyxDQUNELENBQUMsR0FHQSxFQUFFLEVBQUU7WUFDSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRTtnQkFDOUIsT0FBTyxFQUFzRyxDQUFDO2FBQy9HO1lBQ0QsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFO2dCQUNwQixHQUFHLENBQUMsYUFBYSxDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7YUFDOUQ7WUFDRCxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDM0IsQ0FBQyxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7O2tGQTlGVSxpQkFBaUIsMENBTWxCLFNBQVM7dUVBTlIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTt1RkFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFPSSxNQUFNO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBcmNHSVNSZXN0RGF0YVNvdXJjZU9wdGlvbnMsXG4gIEFyY0dJU1Jlc3RJbWFnZURhdGFTb3VyY2VPcHRpb25zLFxuICBUaWxlQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zLFxuICBXTVNEYXRhU291cmNlT3B0aW9uc1xufSBmcm9tICcuLi9kYXRhc291cmNlcyc7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gJy4vb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGlvbnNBcGlPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zLWFwaS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPcHRpb25zQXBpU2VydmljZSBleHRlbmRzIE9wdGlvbnNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB1cmxBcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBwcm92aWRlQ29udGV4dFVyaTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdCgnb3B0aW9ucycpIG9wdGlvbnM6IE9wdGlvbnNBcGlPcHRpb25zID0ge31cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVybEFwaSA9IG9wdGlvbnMudXJsIHx8IHRoaXMudXJsQXBpO1xuICAgIHRoaXMucHJvdmlkZUNvbnRleHRVcmkgPSBvcHRpb25zLnByb3ZpZGVDb250ZXh0VXJpIHx8IHRoaXMucHJvdmlkZUNvbnRleHRVcmk7XG4gIH1cblxuICBnZXRXTVNPcHRpb25zKFxuICAgIGJhc2VPcHRpb25zOiBXTVNEYXRhU291cmNlT3B0aW9ucyxcbiAgICBkZXRhaWxlZENvbnRleHRVcmk/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxXTVNEYXRhU291cmNlT3B0aW9ucz4ge1xuICAgIGlmICghdGhpcy51cmxBcGkpIHtcbiAgICAgIHJldHVybiBvZih7fSBhcyBXTVNEYXRhU291cmNlT3B0aW9ucyk7XG4gICAgfVxuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tT2JqZWN0OiB7XG4gICAgICAgIHR5cGU6IGJhc2VPcHRpb25zLnR5cGUsXG4gICAgICAgIHVybDogYmFzZU9wdGlvbnMudXJsLFxuICAgICAgICBsYXllcnM6IGJhc2VPcHRpb25zLnBhcmFtcy5MQVlFUlNcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkZXRhaWxlZENvbnRleHRVcmkgJiYgdGhpcy5wcm92aWRlQ29udGV4dFVyaSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY29udGV4dCcsIGRldGFpbGVkQ29udGV4dFVyaSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuaHR0cC5nZXQodGhpcy51cmxBcGksIHtcbiAgICAgIHBhcmFtc1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKHJlczoge1xuICAgICAgICAgIHNvdXJjZU9wdGlvbnM6IFdNU0RhdGFTb3VyY2VPcHRpb25zO1xuICAgICAgICAgIGxheWVyT3B0aW9uczogeyBba2V5czogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLnNvdXJjZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB7fSBhcyBXTVNEYXRhU291cmNlT3B0aW9ucztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlcy5sYXllck9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJlcy5zb3VyY2VPcHRpb25zLl9sYXllck9wdGlvbnNGcm9tU291cmNlID0gcmVzLmxheWVyT3B0aW9ucztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy5zb3VyY2VPcHRpb25zO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG5cbiAgZ2V0QXJjZ2lzUmVzdE9wdGlvbnMoXG4gICAgYmFzZU9wdGlvbnM6IEFyY0dJU1Jlc3REYXRhU291cmNlT3B0aW9ucyB8IEFyY0dJU1Jlc3RJbWFnZURhdGFTb3VyY2VPcHRpb25zIHwgVGlsZUFyY0dJU1Jlc3REYXRhU291cmNlT3B0aW9ucyxcbiAgICBkZXRhaWxlZENvbnRleHRVcmk/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxBcmNHSVNSZXN0RGF0YVNvdXJjZU9wdGlvbnMgfCBBcmNHSVNSZXN0SW1hZ2VEYXRhU291cmNlT3B0aW9ucyB8IFRpbGVBcmNHSVNSZXN0RGF0YVNvdXJjZU9wdGlvbnM+IHtcbiAgICBpZiAoIXRoaXMudXJsQXBpKSB7XG4gICAgICByZXR1cm4gb2Yoe30gYXMgQXJjR0lTUmVzdEltYWdlRGF0YVNvdXJjZU9wdGlvbnMpO1xuICAgIH1cbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbU9iamVjdDoge1xuICAgICAgICB0eXBlOiBiYXNlT3B0aW9ucy50eXBlLFxuICAgICAgICB1cmw6IGJhc2VPcHRpb25zLnVybCxcbiAgICAgICAgbGF5ZXJzOiBiYXNlT3B0aW9ucy5sYXllclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGRldGFpbGVkQ29udGV4dFVyaSAmJiB0aGlzLnByb3ZpZGVDb250ZXh0VXJpKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdjb250ZXh0JywgZGV0YWlsZWRDb250ZXh0VXJpKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5odHRwLmdldCh0aGlzLnVybEFwaSwge1xuICAgICAgcGFyYW1zXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAocmVzOiB7XG4gICAgICAgICAgc291cmNlT3B0aW9uczogQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zIHwgQXJjR0lTUmVzdEltYWdlRGF0YVNvdXJjZU9wdGlvbnMgfCBUaWxlQXJjR0lTUmVzdERhdGFTb3VyY2VPcHRpb25zO1xuICAgICAgICAgIGxheWVyT3B0aW9uczogeyBba2V5czogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLnNvdXJjZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB7fSBhcyBBcmNHSVNSZXN0RGF0YVNvdXJjZU9wdGlvbnMgfCBBcmNHSVNSZXN0SW1hZ2VEYXRhU291cmNlT3B0aW9ucyB8IFRpbGVBcmNHSVNSZXN0RGF0YVNvdXJjZU9wdGlvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXMubGF5ZXJPcHRpb25zKSB7XG4gICAgICAgICAgICByZXMuc291cmNlT3B0aW9ucy5fbGF5ZXJPcHRpb25zRnJvbVNvdXJjZSA9IHJlcy5sYXllck9wdGlvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMuc291cmNlT3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==