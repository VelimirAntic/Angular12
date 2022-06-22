import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
/**
 * Service that holds the state of storage service
 */
export class StorageState {
    constructor(igoStorageService) {
        this.igoStorageService = igoStorageService;
    }
    get storageService() {
        return this.igoStorageService;
    }
}
StorageState.ɵfac = function StorageState_Factory(t) { return new (t || StorageState)(i0.ɵɵinject(i1.StorageService)); };
StorageState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StorageState, factory: StorageState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StorageState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.StorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvc3RvcmFnZS9zdG9yYWdlLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUkzQzs7R0FFRztBQUlILE1BQU0sT0FBTyxZQUFZO0lBS3ZCLFlBQW9CLGlCQUFpQztRQUFqQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWdCO0lBQUcsQ0FBQztJQUp6RCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7d0VBSFUsWUFBWTtrRUFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO3VGQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBob2xkcyB0aGUgc3RhdGUgb2Ygc3RvcmFnZSBzZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTdGF0ZSB7XG4gIGdldCBzdG9yYWdlU2VydmljZSgpOiBTdG9yYWdlU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuaWdvU3RvcmFnZVNlcnZpY2U7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGlnb1N0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSkge31cbn1cbiJdfQ==