import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { EntityStore, ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/geo";
import * as i2 from "../catalog.state";
import * as i3 from "../../map/map.state";
import * as i4 from "@igo2/auth";
import * as i5 from "@angular/common";
function CatalogBrowserToolComponent_igo_catalog_browser_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-catalog-browser", 1);
} if (rf & 2) {
    const store_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("catalog", ctx_r0.catalog)("store", store_r1)("map", ctx_r0.map)("toggleCollapsedGroup", ctx_r0.toggleCollapsedGroup);
} }
/**
 * Tool to browse a catalog's groups and layers and display them to a map.
 */
let CatalogBrowserToolComponent = class CatalogBrowserToolComponent {
    constructor(catalogService, catalogState, mapState, authService) {
        this.catalogService = catalogService;
        this.catalogState = catalogState;
        this.mapState = mapState;
        this.authService = authService;
        /**
         * Store that contains the catalog items
         * @internal
         */
        this.store$ = new BehaviorSubject(undefined);
        /**
         * Whether a group can be toggled when it's collapsed
         */
        this.toggleCollapsedGroup = true;
    }
    /**
     * Map to add layers to
     * @internal
     */
    get map() {
        return this.mapState.map;
    }
    /**
     * @internal
     */
    ngOnInit() {
        const catalogStore = this.catalogState.catalogStore;
        this.catalog$$ = catalogStore.stateView
            .firstBy$((record) => record.state.selected === true)
            .subscribe((record) => {
            if (record && record.entity) {
                const catalog = record.entity;
                this.catalog = catalog;
            }
        });
        this.authenticate$$ = this.authService.authenticate$.subscribe(() => {
            this.loadCatalogItems(this.catalog);
        });
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this.catalog$$.unsubscribe();
        this.authenticate$$.unsubscribe();
    }
    /**
     * Get the selected catalog's items from the CatalogService and
     * load them into the store.
     * @param catalog Selected catalog
     */
    loadCatalogItems(catalog) {
        let store = this.catalogState.getCatalogItemsStore(catalog);
        if (store !== undefined) {
            this.store$.next(store);
            return;
        }
        store = new EntityStore([]);
        this.catalogState.setCatalogItemsStore(catalog, store);
        this.catalogService
            .loadCatalogItems(catalog)
            .pipe(take(1))
            .subscribe((items) => {
            store.load(items);
            this.store$.next(store);
        });
    }
};
CatalogBrowserToolComponent.ɵfac = function CatalogBrowserToolComponent_Factory(t) { return new (t || CatalogBrowserToolComponent)(i0.ɵɵdirectiveInject(i1.CatalogService), i0.ɵɵdirectiveInject(i2.CatalogState), i0.ɵɵdirectiveInject(i3.MapState), i0.ɵɵdirectiveInject(i4.AuthService)); };
CatalogBrowserToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CatalogBrowserToolComponent, selectors: [["igo-catalog-browser-tool"]], inputs: { toggleCollapsedGroup: "toggleCollapsedGroup" }, decls: 2, vars: 3, consts: [[3, "catalog", "store", "map", "toggleCollapsedGroup", 4, "ngIf"], [3, "catalog", "store", "map", "toggleCollapsedGroup"]], template: function CatalogBrowserToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CatalogBrowserToolComponent_igo_catalog_browser_0_Template, 1, 4, "igo-catalog-browser", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.store$));
    } }, directives: [i5.NgIf, i1.CatalogBrowserComponent], pipes: [i5.AsyncPipe], encapsulation: 2, changeDetection: 0 });
CatalogBrowserToolComponent = __decorate([
    ToolComponent({
        name: 'catalogBrowser',
        title: 'igo.integration.tools.catalog',
        icon: 'photo-browser',
        parent: 'catalog'
    })
], CatalogBrowserToolComponent);
export { CatalogBrowserToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogBrowserToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-catalog-browser-tool',
                templateUrl: './catalog-browser-tool.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.CatalogService }, { type: i2.CatalogState }, { type: i3.MapState }, { type: i4.AuthService }]; }, { toggleCollapsedGroup: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1icm93c2VyLXRvb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9jYXRhbG9nL2NhdGFsb2ctYnJvd3Nlci10b29sL2NhdGFsb2ctYnJvd3Nlci10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvY2F0YWxvZy9jYXRhbG9nLWJyb3dzZXItdG9vbC9jYXRhbG9nLWJyb3dzZXItdG9vbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxPQUFPLEVBQWdCLFdBQVcsRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7O0lDWHhFLHlDQU1zQjs7OztJQUpwQix3Q0FBbUIsbUJBQUEsbUJBQUEscURBQUE7O0FEdUJyQjs7R0FFRztJQVlVLDJCQUEyQixTQUEzQiwyQkFBMkI7SUFrQ3RDLFlBQ1UsY0FBOEIsRUFDOUIsWUFBMEIsRUFDMUIsUUFBa0IsRUFDbEIsV0FBd0I7UUFIeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFuQ2xDOzs7V0FHRztRQUNILFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FDMUIsU0FBUyxDQUNWLENBQUM7UUFZRjs7V0FFRztRQUNNLHlCQUFvQixHQUFZLElBQUksQ0FBQztJQWUzQyxDQUFDO0lBYko7OztPQUdHO0lBQ0gsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBU0Q7O09BRUc7SUFDSCxRQUFRO1FBQ04sTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUzthQUNwQyxRQUFRLENBQ1AsQ0FBQyxNQUE2QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQ2xFO2FBQ0EsU0FBUyxDQUFDLENBQUMsTUFBNkIsRUFBRSxFQUFFO1lBQzNDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDbEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxnQkFBZ0IsQ0FBQyxPQUFnQjtRQUN2QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixPQUFPO1NBQ1I7UUFFRCxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQWMsRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWM7YUFDaEIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO2FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRixDQUFBO3NHQTVGWSwyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQ3ZDeEMsNEdBTXNCOzs7UUFMbkIsdURBQXFCOztBRHNDWCwyQkFBMkI7SUFYdkMsYUFBYSxDQUFDO1FBQ2IsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixLQUFLLEVBQUUsK0JBQStCO1FBQ3RDLElBQUksRUFBRSxlQUFlO1FBQ3JCLE1BQU0sRUFBRSxTQUFTO0tBQ2xCLENBQUM7R0FNVywyQkFBMkIsQ0E0RnZDO1NBNUZZLDJCQUEyQjt1RkFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs2SUF5QlUsb0JBQW9CO2tCQUE1QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRW50aXR5UmVjb3JkLCBFbnRpdHlTdG9yZSwgVG9vbENvbXBvbmVudCB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuXG5pbXBvcnQge1xuICBJZ29NYXAsXG4gIENhdGFsb2csXG4gIENhdGFsb2dJdGVtLFxuICBDYXRhbG9nSXRlbVN0YXRlLFxuICBDYXRhbG9nU2VydmljZVxufSBmcm9tICdAaWdvMi9nZW8nO1xuXG5pbXBvcnQgeyBNYXBTdGF0ZSB9IGZyb20gJy4uLy4uL21hcC9tYXAuc3RhdGUnO1xuaW1wb3J0IHsgQ2F0YWxvZ1N0YXRlIH0gZnJvbSAnLi4vY2F0YWxvZy5zdGF0ZSc7XG5cbi8qKlxuICogVG9vbCB0byBicm93c2UgYSBjYXRhbG9nJ3MgZ3JvdXBzIGFuZCBsYXllcnMgYW5kIGRpc3BsYXkgdGhlbSB0byBhIG1hcC5cbiAqL1xuQFRvb2xDb21wb25lbnQoe1xuICBuYW1lOiAnY2F0YWxvZ0Jyb3dzZXInLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5jYXRhbG9nJyxcbiAgaWNvbjogJ3Bob3RvLWJyb3dzZXInLFxuICBwYXJlbnQ6ICdjYXRhbG9nJ1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1jYXRhbG9nLWJyb3dzZXItdG9vbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXRhbG9nLWJyb3dzZXItdG9vbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhdGFsb2dCcm93c2VyVG9vbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY2F0YWxvZzogQ2F0YWxvZztcblxuICAvKipcbiAgICogU3RvcmUgdGhhdCBjb250YWlucyB0aGUgY2F0YWxvZyBpdGVtc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHN0b3JlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RW50aXR5U3RvcmU8Q2F0YWxvZ0l0ZW0sIENhdGFsb2dJdGVtU3RhdGU+PihcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzZWxlY3RlZCBjYXRhbG9nXG4gICAqL1xuICBwcml2YXRlIGNhdGFsb2ckJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gZm9yIGF1dGhlbnRpY2F0aW9uXG4gICAqL1xuICBwcml2YXRlIGF1dGhlbnRpY2F0ZSQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYSBncm91cCBjYW4gYmUgdG9nZ2xlZCB3aGVuIGl0J3MgY29sbGFwc2VkXG4gICAqL1xuICBASW5wdXQoKSB0b2dnbGVDb2xsYXBzZWRHcm91cDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIE1hcCB0byBhZGQgbGF5ZXJzIHRvXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IG1hcCgpOiBJZ29NYXAge1xuICAgIHJldHVybiB0aGlzLm1hcFN0YXRlLm1hcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2F0YWxvZ1NlcnZpY2U6IENhdGFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2F0YWxvZ1N0YXRlOiBDYXRhbG9nU3RhdGUsXG4gICAgcHJpdmF0ZSBtYXBTdGF0ZTogTWFwU3RhdGUsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNhdGFsb2dTdG9yZSA9IHRoaXMuY2F0YWxvZ1N0YXRlLmNhdGFsb2dTdG9yZTtcbiAgICB0aGlzLmNhdGFsb2ckJCA9IGNhdGFsb2dTdG9yZS5zdGF0ZVZpZXdcbiAgICAgIC5maXJzdEJ5JChcbiAgICAgICAgKHJlY29yZDogRW50aXR5UmVjb3JkPENhdGFsb2c+KSA9PiByZWNvcmQuc3RhdGUuc2VsZWN0ZWQgPT09IHRydWVcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHJlY29yZDogRW50aXR5UmVjb3JkPENhdGFsb2c+KSA9PiB7XG4gICAgICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLmVudGl0eSkge1xuICAgICAgICAgIGNvbnN0IGNhdGFsb2cgPSByZWNvcmQuZW50aXR5O1xuICAgICAgICAgIHRoaXMuY2F0YWxvZyA9IGNhdGFsb2c7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5hdXRoZW50aWNhdGUkJCA9IHRoaXMuYXV0aFNlcnZpY2UuYXV0aGVudGljYXRlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQ2F0YWxvZ0l0ZW1zKHRoaXMuY2F0YWxvZyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNhdGFsb2ckJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuYXV0aGVudGljYXRlJCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlbGVjdGVkIGNhdGFsb2cncyBpdGVtcyBmcm9tIHRoZSBDYXRhbG9nU2VydmljZSBhbmRcbiAgICogbG9hZCB0aGVtIGludG8gdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gY2F0YWxvZyBTZWxlY3RlZCBjYXRhbG9nXG4gICAqL1xuICBwcml2YXRlIGxvYWRDYXRhbG9nSXRlbXMoY2F0YWxvZzogQ2F0YWxvZykge1xuICAgIGxldCBzdG9yZSA9IHRoaXMuY2F0YWxvZ1N0YXRlLmdldENhdGFsb2dJdGVtc1N0b3JlKGNhdGFsb2cpO1xuICAgIGlmIChzdG9yZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0b3JlJC5uZXh0KHN0b3JlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdG9yZSA9IG5ldyBFbnRpdHlTdG9yZTxDYXRhbG9nSXRlbT4oW10pO1xuICAgIHRoaXMuY2F0YWxvZ1N0YXRlLnNldENhdGFsb2dJdGVtc1N0b3JlKGNhdGFsb2csIHN0b3JlKTtcbiAgICB0aGlzLmNhdGFsb2dTZXJ2aWNlXG4gICAgICAubG9hZENhdGFsb2dJdGVtcyhjYXRhbG9nKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGl0ZW1zOiBDYXRhbG9nSXRlbVtdKSA9PiB7XG4gICAgICAgIHN0b3JlLmxvYWQoaXRlbXMpO1xuICAgICAgICB0aGlzLnN0b3JlJC5uZXh0KHN0b3JlKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCI8aWdvLWNhdGFsb2ctYnJvd3NlclxuICAqbmdJZj1cInN0b3JlJCB8IGFzeW5jIGFzIHN0b3JlXCJcbiAgW2NhdGFsb2ddPVwiY2F0YWxvZ1wiXG4gIFtzdG9yZV09XCJzdG9yZVwiXG4gIFttYXBdPVwibWFwXCJcbiAgW3RvZ2dsZUNvbGxhcHNlZEdyb3VwXT1cInRvZ2dsZUNvbGxhcHNlZEdyb3VwXCI+XG48L2lnby1jYXRhbG9nLWJyb3dzZXI+XG4iXX0=