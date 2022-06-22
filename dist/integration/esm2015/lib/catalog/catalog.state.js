import { Injectable } from '@angular/core';
import { EntityStore } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/auth";
/**
 * Service that holds the state of the catalog module
 */
export class CatalogState {
    constructor(authService) {
        /**
         * Catalog -> Catalog items store mapping
         */
        this.catalogItemsStores = new Map();
        this._catalogStore = new EntityStore([]);
        authService.authenticate$.subscribe(() => {
            this.clearCatalogItemsStores();
        });
    }
    /**
     * Store that contains all the catalogs
     */
    get catalogStore() { return this._catalogStore; }
    /**
     * Get a catalog's items store
     * @param catalog Catalog
     * @returns Store that contains the catalog items
     */
    getCatalogItemsStore(catalog) {
        return this.catalogItemsStores.get(catalog.id);
    }
    /**
     * Bind a catalog items store to a catalog
     * @param catalog Catalog
     * @param store Catalog items store
     */
    setCatalogItemsStore(catalog, store) {
        this.catalogItemsStores.set(catalog.id, store);
    }
    /**
     * Clear all catalog items stores
     */
    clearCatalogItemsStores() {
        this.catalogItemsStores.clear();
    }
}
CatalogState.ɵfac = function CatalogState_Factory(t) { return new (t || CatalogState)(i0.ɵɵinject(i1.AuthService)); };
CatalogState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CatalogState, factory: CatalogState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvY2F0YWxvZy9jYXRhbG9nLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBRzNDOztHQUVHO0FBSUgsTUFBTSxPQUFPLFlBQVk7SUFhdkIsWUFBWSxXQUF3QjtRQUxwQzs7V0FFRztRQUNLLHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUFvQyxDQUFDO1FBR3ZFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpCRDs7T0FFRztJQUNILElBQUksWUFBWSxLQUEyQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBZ0J2RTs7OztPQUlHO0lBQ0gsb0JBQW9CLENBQUMsT0FBZ0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFZLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQixDQUFDLE9BQWdCLEVBQUUsS0FBK0I7UUFDcEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRztJQUNILHVCQUF1QjtRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7d0VBNUNVLFlBQVk7a0VBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAaWdvMi9hdXRoJztcbmltcG9ydCB7IEVudGl0eVN0b3JlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IENhdGFsb2csIENhdGFsb2dJdGVtIH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIG9mIHRoZSBjYXRhbG9nIG1vZHVsZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYXRhbG9nU3RhdGUge1xuXG4gIC8qKlxuICAgKiBTdG9yZSB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgY2F0YWxvZ3NcbiAgICovXG4gIGdldCBjYXRhbG9nU3RvcmUoKTogRW50aXR5U3RvcmU8Q2F0YWxvZz4geyByZXR1cm4gdGhpcy5fY2F0YWxvZ1N0b3JlOyB9XG4gIHByaXZhdGUgX2NhdGFsb2dTdG9yZTogRW50aXR5U3RvcmU8Q2F0YWxvZz47XG5cbiAgLyoqXG4gICAqIENhdGFsb2cgLT4gQ2F0YWxvZyBpdGVtcyBzdG9yZSBtYXBwaW5nXG4gICAqL1xuICBwcml2YXRlIGNhdGFsb2dJdGVtc1N0b3JlcyA9IG5ldyBNYXA8c3RyaW5nLCBFbnRpdHlTdG9yZTxDYXRhbG9nSXRlbT4+KCk7XG5cbiAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgdGhpcy5fY2F0YWxvZ1N0b3JlID0gbmV3IEVudGl0eVN0b3JlKFtdKTtcblxuICAgIGF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2xlYXJDYXRhbG9nSXRlbXNTdG9yZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBjYXRhbG9nJ3MgaXRlbXMgc3RvcmVcbiAgICogQHBhcmFtIGNhdGFsb2cgQ2F0YWxvZ1xuICAgKiBAcmV0dXJucyBTdG9yZSB0aGF0IGNvbnRhaW5zIHRoZSBjYXRhbG9nIGl0ZW1zXG4gICAqL1xuICBnZXRDYXRhbG9nSXRlbXNTdG9yZShjYXRhbG9nOiBDYXRhbG9nKTogRW50aXR5U3RvcmU8Q2F0YWxvZ0l0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5jYXRhbG9nSXRlbXNTdG9yZXMuZ2V0KGNhdGFsb2cuaWQgYXMgc3RyaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGEgY2F0YWxvZyBpdGVtcyBzdG9yZSB0byBhIGNhdGFsb2dcbiAgICogQHBhcmFtIGNhdGFsb2cgQ2F0YWxvZ1xuICAgKiBAcGFyYW0gc3RvcmUgQ2F0YWxvZyBpdGVtcyBzdG9yZVxuICAgKi9cbiAgc2V0Q2F0YWxvZ0l0ZW1zU3RvcmUoY2F0YWxvZzogQ2F0YWxvZywgc3RvcmU6IEVudGl0eVN0b3JlPENhdGFsb2dJdGVtPikge1xuICAgIHRoaXMuY2F0YWxvZ0l0ZW1zU3RvcmVzLnNldChjYXRhbG9nLmlkIGFzIHN0cmluZywgc3RvcmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBjYXRhbG9nIGl0ZW1zIHN0b3Jlc1xuICAgKi9cbiAgY2xlYXJDYXRhbG9nSXRlbXNTdG9yZXMoKSB7XG4gICAgdGhpcy5jYXRhbG9nSXRlbXNTdG9yZXMuY2xlYXIoKTtcbiAgfVxufVxuIl19