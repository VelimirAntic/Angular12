import { Injectable } from '@angular/core';
import olProjection from 'ol/proj/Projection';
import * as olproj from 'ol/proj';
import { OgcFilterWriter } from '../../filter/shared';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
export class DownloadService {
    constructor(messageService, languageService) {
        this.messageService = messageService;
        this.languageService = languageService;
    }
    open(layer) {
        const translate = this.languageService.translate;
        const title = translate.instant('igo.geo.download.title');
        this.messageService.success(translate.instant('igo.geo.download.start'), title);
        const DSOptions = layer.dataSource.options;
        if (Object.keys(DSOptions.download).length > 0) {
            if (DSOptions.download.dynamicUrl &&
                DSOptions.download.url === undefined) {
                let wfsOptions;
                let currentProj = new olProjection({ code: layer.map.projection });
                const paramsWFS = layer.dataSource.options.paramsWFS;
                if (paramsWFS && Object.keys(paramsWFS).length > 0) {
                    currentProj = paramsWFS.srsName ? new olProjection({ code: paramsWFS.srsName }) : currentProj;
                    wfsOptions = layer.dataSource.options.paramsWFS;
                }
                else {
                    wfsOptions = layer.dataSource.options.params;
                }
                const currentExtent = olproj.transformExtent(layer.map.viewController.getExtent(), new olProjection({ code: layer.map.projection }), currentProj);
                const outputFormatDownload = wfsOptions.outputFormatDownload === undefined
                    ? wfsOptions.outputFormat === undefined ? '' : 'outputformat=' + wfsOptions.outputFormat
                    : 'outputformat=' + wfsOptions.outputFormatDownload;
                const baseurl = DSOptions.download.dynamicUrl
                    .replace(/&?outputformat=[^&]*/gi, '')
                    .replace(/&?filter=[^&]*/gi, '')
                    .replace(/&?bbox=[^&]*/gi, '');
                const ogcFilters = layer.dataSource.options.ogcFilters;
                let filterQueryString;
                filterQueryString = new OgcFilterWriter()
                    .handleOgcFiltersAppliedValue(layer.dataSource.options, ogcFilters.geometryName, currentExtent, currentProj);
                if (!filterQueryString) {
                    // Prevent getting all the features for empty filter
                    filterQueryString = new OgcFilterWriter().buildFilter(undefined, currentExtent, currentProj, ogcFilters.geometryName);
                }
                else {
                    filterQueryString = 'filter=' + encodeURIComponent(filterQueryString);
                }
                window.open(`${baseurl}&${filterQueryString}&${outputFormatDownload}`, '_blank');
            }
            else if (DSOptions.download) {
                window.open(DSOptions.download.url, '_blank');
            }
        }
    }
}
DownloadService.ɵfac = function DownloadService_Factory(t) { return new (t || DownloadService)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i1.LanguageService)); };
DownloadService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DownloadService, factory: DownloadService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DownloadService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }, { type: i1.LanguageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2Rvd25sb2FkL3NoYXJlZC9kb3dubG9hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxZQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFLbEMsT0FBTyxFQUFFLGVBQWUsRUFBa0MsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBT3RGLE1BQU0sT0FBTyxlQUFlO0lBRTFCLFlBQ1UsY0FBOEIsRUFDOUIsZUFBZ0M7UUFEaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN2QyxDQUFDO0lBRUosSUFBSSxDQUFDLEtBQVk7UUFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUNqRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQ3pCLFNBQVMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFDM0MsS0FBSyxDQUNOLENBQUM7UUFFRixNQUFNLFNBQVMsR0FBc0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDOUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlDLElBQ0UsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVO2dCQUM3QixTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQ3BDO2dCQUNBLElBQUksVUFBVSxDQUFDO2dCQUNmLElB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ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IG9sUHJvamVjdGlvbiBmcm9tICdvbC9wcm9qL1Byb2plY3Rpb24nO1xuaW1wb3J0ICogYXMgb2xwcm9qIGZyb20gJ29sL3Byb2onO1xuXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkJztcbmltcG9ydCB7IE9nY0ZpbHRlcldyaXRlciwgT2djRmlsdGVyYWJsZURhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vLi4vZmlsdGVyL3NoYXJlZCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvZGF0YXNvdXJjZS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEb3dubG9hZFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG9wZW4obGF5ZXI6IExheWVyKSB7XG4gICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlO1xuICAgIGNvbnN0IHRpdGxlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZG93bmxvYWQudGl0bGUnKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnN1Y2Nlc3MoXG4gICAgICB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5kb3dubG9hZC5zdGFydCcpLFxuICAgICAgdGl0bGVcbiAgICApO1xuXG4gICAgY29uc3QgRFNPcHRpb25zOiBEYXRhU291cmNlT3B0aW9ucyA9IGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucztcbiAgICBpZiAoT2JqZWN0LmtleXMoRFNPcHRpb25zLmRvd25sb2FkKS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIERTT3B0aW9ucy5kb3dubG9hZC5keW5hbWljVXJsICYmXG4gICAgICAgIERTT3B0aW9ucy5kb3dubG9hZC51cmwgPT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIGxldCB3ZnNPcHRpb25zO1xuICAgICAgICBsZXQgY3VycmVudFByb2ogPSBuZXcgb2xQcm9qZWN0aW9uKHsgY29kZTogbGF5ZXIubWFwLnByb2plY3Rpb24gfSk7XG4gICAgICAgIGNvbnN0IHBhcmFtc1dGUyA9IChsYXllci5kYXRhU291cmNlLm9wdGlvbnMgYXMgYW55KS5wYXJhbXNXRlM7XG4gICAgICAgIGlmIChwYXJhbXNXRlMgJiYgT2JqZWN0LmtleXMocGFyYW1zV0ZTKS5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGN1cnJlbnRQcm9qID0gcGFyYW1zV0ZTLnNyc05hbWUgPyBuZXcgb2xQcm9qZWN0aW9uKHsgY29kZTogcGFyYW1zV0ZTLnNyc05hbWUgfSkgOiBjdXJyZW50UHJvajtcbiAgICAgICAgICB3ZnNPcHRpb25zID0gKGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucyBhcyBhbnkpLnBhcmFtc1dGUztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZnNPcHRpb25zID0gKGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucyBhcyBhbnkpLnBhcmFtcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRFeHRlbnQgPSBvbHByb2oudHJhbnNmb3JtRXh0ZW50KFxuICAgICAgICAgIGxheWVyLm1hcC52aWV3Q29udHJvbGxlci5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBuZXcgb2xQcm9qZWN0aW9uKHsgY29kZTogbGF5ZXIubWFwLnByb2plY3Rpb24gfSksXG4gICAgICAgICAgY3VycmVudFByb2pcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0Rm9ybWF0RG93bmxvYWQgPVxuICAgICAgICAgIHdmc09wdGlvbnMub3V0cHV0Rm9ybWF0RG93bmxvYWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB3ZnNPcHRpb25zLm91dHB1dEZvcm1hdCA9PT0gdW5kZWZpbmVkID8gJycgOiAnb3V0cHV0Zm9ybWF0PScgKyB3ZnNPcHRpb25zLm91dHB1dEZvcm1hdFxuICAgICAgICAgICAgOiAnb3V0cHV0Zm9ybWF0PScgKyB3ZnNPcHRpb25zLm91dHB1dEZvcm1hdERvd25sb2FkO1xuXG4gICAgICAgIGNvbnN0IGJhc2V1cmwgPSBEU09wdGlvbnMuZG93bmxvYWQuZHluYW1pY1VybFxuICAgICAgICAgIC5yZXBsYWNlKC8mP291dHB1dGZvcm1hdD1bXiZdKi9naSwgJycpXG4gICAgICAgICAgLnJlcGxhY2UoLyY/ZmlsdGVyPVteJl0qL2dpLCAnJylcbiAgICAgICAgICAucmVwbGFjZSgvJj9iYm94PVteJl0qL2dpLCAnJyk7XG5cbiAgICAgICAgY29uc3Qgb2djRmlsdGVycyA9IChsYXllci5kYXRhU291cmNlLm9wdGlvbnMgYXMgT2djRmlsdGVyYWJsZURhdGFTb3VyY2VPcHRpb25zKS5vZ2NGaWx0ZXJzO1xuXG4gICAgICAgIGxldCBmaWx0ZXJRdWVyeVN0cmluZztcbiAgICAgICAgZmlsdGVyUXVlcnlTdHJpbmcgPSBuZXcgT2djRmlsdGVyV3JpdGVyKClcbiAgICAgICAgLmhhbmRsZU9nY0ZpbHRlcnNBcHBsaWVkVmFsdWUoXG4gICAgICAgICAgbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLFxuICAgICAgICAgIG9nY0ZpbHRlcnMuZ2VvbWV0cnlOYW1lLFxuICAgICAgICAgIGN1cnJlbnRFeHRlbnQgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXG4gICAgICAgICAgY3VycmVudFByb2opO1xuICAgICAgICBpZiAoIWZpbHRlclF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgLy8gUHJldmVudCBnZXR0aW5nIGFsbCB0aGUgZmVhdHVyZXMgZm9yIGVtcHR5IGZpbHRlclxuICAgICAgICAgICAgZmlsdGVyUXVlcnlTdHJpbmcgPSBuZXcgT2djRmlsdGVyV3JpdGVyKCkuYnVpbGRGaWx0ZXIoXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICBjdXJyZW50RXh0ZW50IGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICAgICAgICAgICAgY3VycmVudFByb2osXG4gICAgICAgICAgICBvZ2NGaWx0ZXJzLmdlb21ldHJ5TmFtZVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyUXVlcnlTdHJpbmcgPSAnZmlsdGVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZmlsdGVyUXVlcnlTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICAgIGAke2Jhc2V1cmx9JiR7ZmlsdGVyUXVlcnlTdHJpbmd9JiR7b3V0cHV0Rm9ybWF0RG93bmxvYWR9YCxcbiAgICAgICAgICAnX2JsYW5rJ1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChEU09wdGlvbnMuZG93bmxvYWQpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oRFNPcHRpb25zLmRvd25sb2FkLnVybCwgJ19ibGFuaycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19