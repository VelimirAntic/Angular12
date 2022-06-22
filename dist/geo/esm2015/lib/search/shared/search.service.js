import { Injectable } from '@angular/core';
import { stringToLonLat } from '../../map';
import { sourceCanSearch, sourceCanReverseSearch, sourceCanReverseSearchAsSummary } from './search.utils';
import * as i0 from "@angular/core";
import * as i1 from "./search-source.service";
import * as i2 from "../../map/shared/map.service";
/**
 * This service perform researches in all the search sources enabled.
 * It returns Research objects who's 'request' property needs to be
 * subscribed to in order to trigger the research. This services has
 * keeps internal state of the researches it performed
 * and the results they yielded.
 */
export class SearchService {
    constructor(searchSourceService, mapService) {
        this.searchSourceService = searchSourceService;
        this.mapService = mapService;
    }
    /**
     * Perform a research by text
     * @param term Any text
     * @returns Researches
     */
    search(term, options = {}) {
        var _a, _b;
        if (!this.termIsValid(term)) {
            return [];
        }
        const proj = ((_a = this.mapService.getMap()) === null || _a === void 0 ? void 0 : _a.projection) || 'EPSG:3857';
        const response = stringToLonLat(term, proj, {
            forceNA: options.forceNA
        });
        if (response.lonLat) {
            return this.reverseSearch(response.lonLat, { distance: response.radius, conf: response.conf });
        }
        else if (response.message) {
            console.log(response.message);
        }
        options.extent = (_b = this.mapService
            .getMap()) === null || _b === void 0 ? void 0 : _b.viewController.getExtent('EPSG:4326');
        let sources;
        if (options.getEnabledOnly || options.getEnabledOnly === undefined) {
            sources = this.searchSourceService.getEnabledSources();
        }
        else {
            sources = this.searchSourceService.getSources();
        }
        if (options.sourceId) {
            sources = sources.filter((source) => source.getId() === options.sourceId);
        }
        else if (options.searchType) {
            sources = sources.filter((source) => source.getType() === options.searchType);
        }
        sources = sources.filter(sourceCanSearch);
        return this.searchSources(sources, term, options);
    }
    /**
     * Perform a research by lon/lat
     * @param lonLat Any lon/lat coordinates
     * @returns Researches
     */
    reverseSearch(lonLat, options, asPointerSummary = false) {
        const reverseSourceFonction = asPointerSummary
            ? sourceCanReverseSearchAsSummary
            : sourceCanReverseSearch;
        const sources = this.searchSourceService
            .getEnabledSources()
            .filter(reverseSourceFonction);
        return this.reverseSearchSources(sources, lonLat, options || {});
    }
    /**
     * Create a text research out of all given search sources
     * @param sources Search sources that implement TextSearch
     * @param term Search term
     * @returns Observable of Researches
     */
    searchSources(sources, term, options) {
        return sources.map((source) => {
            return {
                request: source.search(term, options),
                reverse: false,
                source
            };
        });
    }
    /**
     * Create a reverse research out of all given search sources
     * @param sources Search sources that implement ReverseSearch
     * @param lonLat Any lon/lat coordinates
     * @returns Observable of Researches
     */
    reverseSearchSources(sources, lonLat, options) {
        return sources.map((source) => {
            return {
                request: source.reverseSearch(lonLat, options),
                reverse: true,
                source
            };
        });
    }
    /**
     * Validate that a search term is valid
     * @param term Search term
     * @returns True if the search term is valid
     */
    termIsValid(term) {
        return typeof term === 'string' && term !== '';
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(i0.ɵɵinject(i1.SearchSourceService), i0.ɵɵinject(i2.MapService)); };
SearchService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SearchSourceService }, { type: i2.MapService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2hhcmVkL3NlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVUzQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLHNCQUFzQixFQUN0QiwrQkFBK0IsRUFDaEMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV4Qjs7Ozs7O0dBTUc7QUFJSCxNQUFNLE9BQU8sYUFBYTtJQUN4QixZQUNVLG1CQUF3QyxFQUN4QyxVQUFzQjtRQUR0Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDN0IsQ0FBQztJQUVKOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsSUFBWSxFQUFFLFVBQTZCLEVBQUU7O1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxNQUFNLElBQUksR0FBRyxDQUFBLE1BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsMENBQUUsVUFBVSxLQUFJLFdBQVcsQ0FBQztRQUNqRSxNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtZQUMxQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87U0FDekIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJ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QUFhLG1CQUZaLE1BQU07dUZBRVAsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHN0cmluZ1RvTG9uTGF0IH0gZnJvbSAnLi4vLi4vbWFwJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXAvc2hhcmVkL21hcC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgU2VhcmNoU291cmNlLCBUZXh0U2VhcmNoLCBSZXZlcnNlU2VhcmNoIH0gZnJvbSAnLi9zb3VyY2VzL3NvdXJjZSc7XG5pbXBvcnQge1xuICBUZXh0U2VhcmNoT3B0aW9ucyxcbiAgUmV2ZXJzZVNlYXJjaE9wdGlvbnNcbn0gZnJvbSAnLi9zb3VyY2VzL3NvdXJjZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNlYXJjaFNvdXJjZVNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1zb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBSZXNlYXJjaCB9IGZyb20gJy4vc2VhcmNoLmludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgc291cmNlQ2FuU2VhcmNoLFxuICBzb3VyY2VDYW5SZXZlcnNlU2VhcmNoLFxuICBzb3VyY2VDYW5SZXZlcnNlU2VhcmNoQXNTdW1tYXJ5XG59IGZyb20gJy4vc2VhcmNoLnV0aWxzJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgcGVyZm9ybSByZXNlYXJjaGVzIGluIGFsbCB0aGUgc2VhcmNoIHNvdXJjZXMgZW5hYmxlZC5cbiAqIEl0IHJldHVybnMgUmVzZWFyY2ggb2JqZWN0cyB3aG8ncyAncmVxdWVzdCcgcHJvcGVydHkgbmVlZHMgdG8gYmVcbiAqIHN1YnNjcmliZWQgdG8gaW4gb3JkZXIgdG8gdHJpZ2dlciB0aGUgcmVzZWFyY2guIFRoaXMgc2VydmljZXMgaGFzXG4gKiBrZWVwcyBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgcmVzZWFyY2hlcyBpdCBwZXJmb3JtZWRcbiAqIGFuZCB0aGUgcmVzdWx0cyB0aGV5IHlpZWxkZWQuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlYXJjaFNvdXJjZVNlcnZpY2U6IFNlYXJjaFNvdXJjZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHJlc2VhcmNoIGJ5IHRleHRcbiAgICogQHBhcmFtIHRlcm0gQW55IHRleHRcbiAgICogQHJldHVybnMgUmVzZWFyY2hlc1xuICAgKi9cbiAgc2VhcmNoKHRlcm06IHN0cmluZywgb3B0aW9uczogVGV4dFNlYXJjaE9wdGlvbnMgPSB7fSk6IFJlc2VhcmNoW10ge1xuICAgIGlmICghdGhpcy50ZXJtSXNWYWxpZCh0ZXJtKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2ogPSB0aGlzLm1hcFNlcnZpY2UuZ2V0TWFwKCk/LnByb2plY3Rpb24gfHwgJ0VQU0c6Mzg1Nyc7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBzdHJpbmdUb0xvbkxhdCh0ZXJtLCBwcm9qLCB7XG4gICAgICBmb3JjZU5BOiBvcHRpb25zLmZvcmNlTkFcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2UubG9uTGF0KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXZlcnNlU2VhcmNoKHJlc3BvbnNlLmxvbkxhdCwgeyBkaXN0YW5jZTogcmVzcG9uc2UucmFkaXVzLCBjb25mOiByZXNwb25zZS5jb25mIH0pO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5leHRlbnQgPSB0aGlzLm1hcFNlcnZpY2VcbiAgICAgIC5nZXRNYXAoKVxuICAgICAgPy52aWV3Q29udHJvbGxlci5nZXRFeHRlbnQoJ0VQU0c6NDMyNicpO1xuXG4gICAgbGV0IHNvdXJjZXM7XG5cbiAgICBpZiAob3B0aW9ucy5nZXRFbmFibGVkT25seSB8fCBvcHRpb25zLmdldEVuYWJsZWRPbmx5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNvdXJjZXMgPSB0aGlzLnNlYXJjaFNvdXJjZVNlcnZpY2UuZ2V0RW5hYmxlZFNvdXJjZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlcyA9IHRoaXMuc2VhcmNoU291cmNlU2VydmljZS5nZXRTb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc291cmNlSWQpIHtcbiAgICAgIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcigoc291cmNlKSA9PiBzb3VyY2UuZ2V0SWQoKSA9PT0gb3B0aW9ucy5zb3VyY2VJZCk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNlYXJjaFR5cGUpIHtcbiAgICAgIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihcbiAgICAgICAgKHNvdXJjZSkgPT4gc291cmNlLmdldFR5cGUoKSA9PT0gb3B0aW9ucy5zZWFyY2hUeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihzb3VyY2VDYW5TZWFyY2gpO1xuICAgIHJldHVybiB0aGlzLnNlYXJjaFNvdXJjZXMoc291cmNlcywgdGVybSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHJlc2VhcmNoIGJ5IGxvbi9sYXRcbiAgICogQHBhcmFtIGxvbkxhdCBBbnkgbG9uL2xhdCBjb29yZGluYXRlc1xuICAgKiBAcmV0dXJucyBSZXNlYXJjaGVzXG4gICAqL1xuICByZXZlcnNlU2VhcmNoKFxuICAgIGxvbkxhdDogW251bWJlciwgbnVtYmVyXSxcbiAgICBvcHRpb25zPzogUmV2ZXJzZVNlYXJjaE9wdGlvbnMsXG4gICAgYXNQb2ludGVyU3VtbWFyeTogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICAgIGNvbnN0IHJldmVyc2VTb3VyY2VGb25jdGlvbiA9IGFzUG9pbnRlclN1bW1hcnlcbiAgICAgID8gc291cmNlQ2FuUmV2ZXJzZVNlYXJjaEFzU3VtbWFyeVxuICAgICAgOiBzb3VyY2VDYW5SZXZlcnNlU2VhcmNoO1xuICAgIGNvbnN0IHNvdXJjZXMgPSB0aGlzLnNlYXJjaFNvdXJjZVNlcnZpY2VcbiAgICAgIC5nZXRFbmFibGVkU291cmNlcygpXG4gICAgICAuZmlsdGVyKHJldmVyc2VTb3VyY2VGb25jdGlvbik7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZVNlYXJjaFNvdXJjZXMoc291cmNlcywgbG9uTGF0LCBvcHRpb25zIHx8IHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0ZXh0IHJlc2VhcmNoIG91dCBvZiBhbGwgZ2l2ZW4gc2VhcmNoIHNvdXJjZXNcbiAgICogQHBhcmFtIHNvdXJjZXMgU2VhcmNoIHNvdXJjZXMgdGhhdCBpbXBsZW1lbnQgVGV4dFNlYXJjaFxuICAgKiBAcGFyYW0gdGVybSBTZWFyY2ggdGVybVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlIG9mIFJlc2VhcmNoZXNcbiAgICovXG4gIHByaXZhdGUgc2VhcmNoU291cmNlcyhcbiAgICBzb3VyY2VzOiBTZWFyY2hTb3VyY2VbXSxcbiAgICB0ZXJtOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVGV4dFNlYXJjaE9wdGlvbnNcbiAgKTogUmVzZWFyY2hbXSB7XG4gICAgcmV0dXJuIHNvdXJjZXMubWFwKChzb3VyY2U6IFNlYXJjaFNvdXJjZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWVzdDogKChzb3VyY2UgYXMgYW55KSBhcyBUZXh0U2VhcmNoKS5zZWFyY2godGVybSwgb3B0aW9ucyksXG4gICAgICAgIHJldmVyc2U6IGZhbHNlLFxuICAgICAgICBzb3VyY2VcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgcmV2ZXJzZSByZXNlYXJjaCBvdXQgb2YgYWxsIGdpdmVuIHNlYXJjaCBzb3VyY2VzXG4gICAqIEBwYXJhbSBzb3VyY2VzIFNlYXJjaCBzb3VyY2VzIHRoYXQgaW1wbGVtZW50IFJldmVyc2VTZWFyY2hcbiAgICogQHBhcmFtIGxvbkxhdCBBbnkgbG9uL2xhdCBjb29yZGluYXRlc1xuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlIG9mIFJlc2VhcmNoZXNcbiAgICovXG4gIHByaXZhdGUgcmV2ZXJzZVNlYXJjaFNvdXJjZXMoXG4gICAgc291cmNlczogU2VhcmNoU291cmNlW10sXG4gICAgbG9uTGF0OiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIG9wdGlvbnM6IFJldmVyc2VTZWFyY2hPcHRpb25zXG4gICk6IFJlc2VhcmNoW10ge1xuICAgIHJldHVybiBzb3VyY2VzLm1hcCgoc291cmNlOiBTZWFyY2hTb3VyY2UpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVlc3Q6ICgoc291cmNlIGFzIGFueSkgYXMgUmV2ZXJzZVNlYXJjaCkucmV2ZXJzZVNlYXJjaChcbiAgICAgICAgICBsb25MYXQsXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICApLFxuICAgICAgICByZXZlcnNlOiB0cnVlLFxuICAgICAgICBzb3VyY2VcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdGhhdCBhIHNlYXJjaCB0ZXJtIGlzIHZhbGlkXG4gICAqIEBwYXJhbSB0ZXJtIFNlYXJjaCB0ZXJtXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHNlYXJjaCB0ZXJtIGlzIHZhbGlkXG4gICAqL1xuICBwcml2YXRlIHRlcm1Jc1ZhbGlkKHRlcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgJiYgdGVybSAhPT0gJyc7XG4gIH1cbn1cbiJdfQ==