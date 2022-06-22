import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MetadataService {
    constructor() { }
    open(metadata) {
        if (metadata.extern) {
            window.open(metadata.url, '_blank');
        }
    }
}
MetadataService.ɵfac = function MetadataService_Factory(t) { return new (t || MetadataService)(); };
MetadataService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MetadataService, factory: MetadataService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MetadataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21ldGFkYXRhL3NoYXJlZC9tZXRhZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzNDLE1BQU0sT0FBTyxlQUFlO0lBQzFCLGdCQUFlLENBQUM7SUFFaEIsSUFBSSxDQUFDLFFBQXlCO1FBQzVCLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs4RUFQVSxlQUFlO3FFQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07dUZBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1ldGFkYXRhT3B0aW9ucyB9IGZyb20gJy4vbWV0YWRhdGEuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG9wZW4obWV0YWRhdGE6IE1ldGFkYXRhT3B0aW9ucykge1xuICAgIGlmIChtZXRhZGF0YS5leHRlcm4pIHtcbiAgICAgIHdpbmRvdy5vcGVuKG1ldGFkYXRhLnVybCwgJ19ibGFuaycpO1xuICAgIH1cbiAgfVxufVxuIl19