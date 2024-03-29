import { Injectable } from '@angular/core';
import olProjection from 'ol/proj/Projection';
import { OgcFilterWriter } from './ogc-filter';
import * as i0 from "@angular/core";
export class OGCFilterService {
    constructor() { }
    filterByOgc(wmsDatasource, filterString) {
        const appliedFilter = new OgcFilterWriter().formatProcessedOgcFilter(filterString, wmsDatasource.options.params.LAYERS);
        wmsDatasource.ol.updateParams({ FILTER: appliedFilter });
    }
    setOgcWFSFiltersOptions(wfsDatasource) {
        const options = wfsDatasource.options;
        const ogcFilterWriter = new OgcFilterWriter();
        if (options.ogcFilters.enabled && options.ogcFilters.filters) {
            options.ogcFilters.filters = ogcFilterWriter.checkIgoFiltersProperties(options.ogcFilters.filters, options.paramsWFS.fieldNameGeometry, new olProjection({ code: options.paramsWFS.srsName }), true);
            if (!options.ogcFilters.interfaceOgcFilters) {
                options.ogcFilters.interfaceOgcFilters = ogcFilterWriter.defineInterfaceFilterSequence(options.ogcFilters.filters, options.paramsWFS.fieldNameGeometry);
            }
        }
    }
    setOgcWMSFiltersOptions(wmsDatasource) {
        const options = wmsDatasource.options;
        const ogcFilterWriter = new OgcFilterWriter();
        if (options.ogcFilters.enabled && options.ogcFilters.filters) {
            options.ogcFilters.filters = ogcFilterWriter.checkIgoFiltersProperties(options.ogcFilters.filters, options.fieldNameGeometry, undefined, true);
            if (!options.ogcFilters.interfaceOgcFilters) {
                options.ogcFilters.interfaceOgcFilters = ogcFilterWriter.defineInterfaceFilterSequence(
                // With some wms server, this param must be set to make spatials call.
                options.ogcFilters.filters, options.fieldNameGeometry);
            }
            this.filterByOgc(wmsDatasource, ogcFilterWriter.buildFilter(options.ogcFilters.filters, undefined, undefined, undefined, wmsDatasource.options));
            options.filtered = true;
        }
        else {
            options.ogcFilters.filters = undefined;
            options.ogcFilters.interfaceOgcFilters = [];
            options.filtered = false;
        }
    }
}
OGCFilterService.ɵfac = function OGCFilterService_Factory(t) { return new (t || OGCFilterService)(); };
OGCFilterService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OGCFilterService, factory: OGCFilterService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OGCFilterService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZmlsdGVyL3NoYXJlZC9vZ2MtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUc5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUkvQyxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLGdCQUFlLENBQUM7SUFFVCxXQUFXLENBQUMsYUFBNEIsRUFBRSxZQUFvQjtRQUNuRSxNQUFNLGFBQWEsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4SCxhQUFhLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSx1QkFBdUIsQ0FBQyxhQUFzQztRQUNuRSxNQUFNLE9BQU8sR0FBUSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNDLE1BQU0sZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFFOUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUM1RCxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMseUJBQXlCLENBQ3BFLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUMxQixPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUNuQyxJQUFJLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQ3JELElBQUksQ0FDTCxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzNDLE9BQU8sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEdBQUcsZUFBZSxDQUFDLDZCQUE2QixDQUNwRixPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFDMUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FDcEMsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDO0lBRU0sdUJBQXVCLENBQUMsYUFBc0M7UUFDbkUsTUFBTSxPQUFPLEdBQVEsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxNQUFNLGVBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBRTlDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDNUQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLHlCQUF5QixDQUNwRSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFDMUIsT0FBTyxDQUFDLGlCQUFpQixFQUN6QixTQUFTLEVBQ1QsSUFBSSxDQUNMLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsR0FBRyxlQUFlLENBQUMsNkJBQTZCO2dCQUNwRixzRUFBc0U7Z0JBQ3RFLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUMxQixPQUFPLENBQUMsaUJBQWlCLENBQzFCLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxXQUFXLENBQ2QsYUFBOEIsRUFDOUIsZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFDdEQsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsYUFBYSxDQUFDLE9BQU8sQ0FDcEIsQ0FDRixDQUFDO1lBQ0YsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN2QyxPQUFPLENBQUMsVUFBVSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztZQUM1QyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUMxQjtJQUNILENBQUM7O2dGQTdEVSxnQkFBZ0I7c0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgb2xQcm9qZWN0aW9uIGZyb20gJ29sL3Byb2ovUHJvamVjdGlvbic7XG5cbmltcG9ydCB7IFdNU0RhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy93bXMtZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJXcml0ZXIgfSBmcm9tICcuL29nYy1maWx0ZXInO1xuaW1wb3J0IHsgT2djRmlsdGVyYWJsZURhdGFTb3VyY2UgfSBmcm9tICcuL29nYy1maWx0ZXIuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9HQ0ZpbHRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGZpbHRlckJ5T2djKHdtc0RhdGFzb3VyY2U6IFdNU0RhdGFTb3VyY2UsIGZpbHRlclN0cmluZzogc3RyaW5nKSB7XG4gICAgY29uc3QgYXBwbGllZEZpbHRlciA9IG5ldyBPZ2NGaWx0ZXJXcml0ZXIoKS5mb3JtYXRQcm9jZXNzZWRPZ2NGaWx0ZXIoZmlsdGVyU3RyaW5nLCB3bXNEYXRhc291cmNlLm9wdGlvbnMucGFyYW1zLkxBWUVSUyk7XG4gICAgd21zRGF0YXNvdXJjZS5vbC51cGRhdGVQYXJhbXMoeyBGSUxURVI6IGFwcGxpZWRGaWx0ZXIgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0T2djV0ZTRmlsdGVyc09wdGlvbnMod2ZzRGF0YXNvdXJjZTogT2djRmlsdGVyYWJsZURhdGFTb3VyY2UpIHtcbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB3ZnNEYXRhc291cmNlLm9wdGlvbnM7XG4gICAgY29uc3Qgb2djRmlsdGVyV3JpdGVyID0gbmV3IE9nY0ZpbHRlcldyaXRlcigpO1xuXG4gICAgaWYgKG9wdGlvbnMub2djRmlsdGVycy5lbmFibGVkICYmIG9wdGlvbnMub2djRmlsdGVycy5maWx0ZXJzKSB7XG4gICAgICBvcHRpb25zLm9nY0ZpbHRlcnMuZmlsdGVycyA9IG9nY0ZpbHRlcldyaXRlci5jaGVja0lnb0ZpbHRlcnNQcm9wZXJ0aWVzKFxuICAgICAgICBvcHRpb25zLm9nY0ZpbHRlcnMuZmlsdGVycyxcbiAgICAgICAgb3B0aW9ucy5wYXJhbXNXRlMuZmllbGROYW1lR2VvbWV0cnksXG4gICAgICAgIG5ldyBvbFByb2plY3Rpb24oeyBjb2RlOiBvcHRpb25zLnBhcmFtc1dGUy5zcnNOYW1lIH0pLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgICAgaWYgKCFvcHRpb25zLm9nY0ZpbHRlcnMuaW50ZXJmYWNlT2djRmlsdGVycykge1xuICAgICAgICBvcHRpb25zLm9nY0ZpbHRlcnMuaW50ZXJmYWNlT2djRmlsdGVycyA9IG9nY0ZpbHRlcldyaXRlci5kZWZpbmVJbnRlcmZhY2VGaWx0ZXJTZXF1ZW5jZShcbiAgICAgICAgICBvcHRpb25zLm9nY0ZpbHRlcnMuZmlsdGVycyxcbiAgICAgICAgICBvcHRpb25zLnBhcmFtc1dGUy5maWVsZE5hbWVHZW9tZXRyeVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRPZ2NXTVNGaWx0ZXJzT3B0aW9ucyh3bXNEYXRhc291cmNlOiBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZSkge1xuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHdtc0RhdGFzb3VyY2Uub3B0aW9ucztcbiAgICBjb25zdCBvZ2NGaWx0ZXJXcml0ZXIgPSBuZXcgT2djRmlsdGVyV3JpdGVyKCk7XG5cbiAgICBpZiAob3B0aW9ucy5vZ2NGaWx0ZXJzLmVuYWJsZWQgJiYgb3B0aW9ucy5vZ2NGaWx0ZXJzLmZpbHRlcnMpIHtcbiAgICAgIG9wdGlvbnMub2djRmlsdGVycy5maWx0ZXJzID0gb2djRmlsdGVyV3JpdGVyLmNoZWNrSWdvRmlsdGVyc1Byb3BlcnRpZXMoXG4gICAgICAgIG9wdGlvbnMub2djRmlsdGVycy5maWx0ZXJzLFxuICAgICAgICBvcHRpb25zLmZpZWxkTmFtZUdlb21ldHJ5LFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgICBpZiAoIW9wdGlvbnMub2djRmlsdGVycy5pbnRlcmZhY2VPZ2NGaWx0ZXJzKSB7XG4gICAgICAgIG9wdGlvbnMub2djRmlsdGVycy5pbnRlcmZhY2VPZ2NGaWx0ZXJzID0gb2djRmlsdGVyV3JpdGVyLmRlZmluZUludGVyZmFjZUZpbHRlclNlcXVlbmNlKFxuICAgICAgICAgIC8vIFdpdGggc29tZSB3bXMgc2VydmVyLCB0aGlzIHBhcmFtIG11c3QgYmUgc2V0IHRvIG1ha2Ugc3BhdGlhbHMgY2FsbC5cbiAgICAgICAgICBvcHRpb25zLm9nY0ZpbHRlcnMuZmlsdGVycyxcbiAgICAgICAgICBvcHRpb25zLmZpZWxkTmFtZUdlb21ldHJ5XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbHRlckJ5T2djKFxuICAgICAgICB3bXNEYXRhc291cmNlIGFzIFdNU0RhdGFTb3VyY2UsXG4gICAgICAgIG9nY0ZpbHRlcldyaXRlci5idWlsZEZpbHRlcihvcHRpb25zLm9nY0ZpbHRlcnMuZmlsdGVycyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgd21zRGF0YXNvdXJjZS5vcHRpb25zXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBvcHRpb25zLmZpbHRlcmVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5vZ2NGaWx0ZXJzLmZpbHRlcnMgPSB1bmRlZmluZWQ7XG4gICAgICBvcHRpb25zLm9nY0ZpbHRlcnMuaW50ZXJmYWNlT2djRmlsdGVycyA9IFtdO1xuICAgICAgb3B0aW9ucy5maWx0ZXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19