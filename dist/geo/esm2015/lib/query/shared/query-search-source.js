import { Injectable, Inject } from '@angular/core';
import { FEATURE } from '../../feature/shared/feature.enums';
import { SearchSource } from '../../search/shared/sources/source';
import * as i0 from "@angular/core";
/**
 * Map search source. For now it has no search capability. All it does
 * is act as a placeholder for the map query results' "search source".
 */
export class QuerySearchSource extends SearchSource {
    constructor(options) {
        super(options);
    }
    getId() {
        return QuerySearchSource.id;
    }
    getType() {
        return QuerySearchSource.type;
    }
    getDefaultOptions() {
        return {
            title: 'Carte'
        };
    }
}
QuerySearchSource.id = 'map';
QuerySearchSource.type = FEATURE;
QuerySearchSource.ɵfac = function QuerySearchSource_Factory(t) { return new (t || QuerySearchSource)(i0.ɵɵinject('options')); };
QuerySearchSource.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: QuerySearchSource, factory: QuerySearchSource.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuerySearchSource, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['options']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktc2VhcmNoLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3F1ZXJ5L3NoYXJlZC9xdWVyeS1zZWFyY2gtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBRWxFOzs7R0FHRztBQUVILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxZQUFZO0lBSWpELFlBQStCLE9BQTRCO1FBQ3pELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSztRQUNILE9BQU8saUJBQWlCLENBQUMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVTLGlCQUFpQjtRQUN6QixPQUFPO1lBQ0wsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDO0lBQ0osQ0FBQzs7QUFuQk0sb0JBQUUsR0FBRyxLQUFLLENBQUM7QUFDWCxzQkFBSSxHQUFHLE9BQU8sQ0FBQztrRkFGWCxpQkFBaUIsY0FJUixTQUFTO3VFQUpsQixpQkFBaUIsV0FBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FEN0IsVUFBVTs7c0JBS0ksTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZFQVRVUkUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NoYXJlZC9mZWF0dXJlLmVudW1zJztcbmltcG9ydCB7IFNlYXJjaFNvdXJjZSB9IGZyb20gJy4uLy4uL3NlYXJjaC9zaGFyZWQvc291cmNlcy9zb3VyY2UnO1xuaW1wb3J0IHsgU2VhcmNoU291cmNlT3B0aW9ucyB9IGZyb20gJy4uLy4uL3NlYXJjaC9zaGFyZWQvc291cmNlcy9zb3VyY2UuaW50ZXJmYWNlcyc7XG4vKipcbiAqIE1hcCBzZWFyY2ggc291cmNlLiBGb3Igbm93IGl0IGhhcyBubyBzZWFyY2ggY2FwYWJpbGl0eS4gQWxsIGl0IGRvZXNcbiAqIGlzIGFjdCBhcyBhIHBsYWNlaG9sZGVyIGZvciB0aGUgbWFwIHF1ZXJ5IHJlc3VsdHMnIFwic2VhcmNoIHNvdXJjZVwiLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVlcnlTZWFyY2hTb3VyY2UgZXh0ZW5kcyBTZWFyY2hTb3VyY2Uge1xuICBzdGF0aWMgaWQgPSAnbWFwJztcbiAgc3RhdGljIHR5cGUgPSBGRUFUVVJFO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ29wdGlvbnMnKSBvcHRpb25zOiBTZWFyY2hTb3VyY2VPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gIH1cblxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBRdWVyeVNlYXJjaFNvdXJjZS5pZDtcbiAgfVxuXG4gIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gUXVlcnlTZWFyY2hTb3VyY2UudHlwZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXREZWZhdWx0T3B0aW9ucygpOiBTZWFyY2hTb3VyY2VPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdDYXJ0ZSdcbiAgICB9O1xuICB9XG59XG4iXX0=