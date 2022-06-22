import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/geo";
import * as i2 from "../catalog.state";
import * as i3 from "../../tool/tool.state";
import * as i4 from "@igo2/core";
/**
 * Tool to browse the list of available catalogs.
 */
let CatalogLibraryToolComponent = class CatalogLibraryToolComponent {
    constructor(catalogService, catalogState, toolState, storageService) {
        this.catalogService = catalogService;
        this.catalogState = catalogState;
        this.toolState = toolState;
        this.storageService = storageService;
        /**
         * Determine if the form to add a catalog is allowed
         */
        this.addCatalogAllowed = false;
        /**
         * List of predefined catalogs
         */
        this.predefinedCatalogs = [];
    }
    /**
     * Store that contains the catalogs
     * @internal
     */
    get store() {
        return this.catalogState.catalogStore;
    }
    /**
     * @internal
     */
    ngOnInit() {
        if (this.store.count === 0) {
            this.loadCatalogs();
        }
    }
    /**
     * When the selected catalog changes, toggle the the CatalogBrowser tool.
     * @internal
     * @param event Select event
     */
    onCatalogSelectChange(event) {
        if (event.selected === false) {
            return;
        }
        this.toolState.toolbox.activateTool('catalogBrowser');
    }
    /**
     * Get all the available catalogs from the CatalogService and
     * load them into the store.
     */
    loadCatalogs() {
        this.catalogService.loadCatalogs().pipe(take(1)).subscribe((catalogs) => {
            this.store.clear();
            this.store.load(catalogs.concat((this.storageService.get('addedCatalogs') || [])));
        });
    }
};
CatalogLibraryToolComponent.ɵfac = function CatalogLibraryToolComponent_Factory(t) { return new (t || CatalogLibraryToolComponent)(i0.ɵɵdirectiveInject(i1.CatalogService), i0.ɵɵdirectiveInject(i2.CatalogState), i0.ɵɵdirectiveInject(i3.ToolState), i0.ɵɵdirectiveInject(i4.StorageService)); };
CatalogLibraryToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CatalogLibraryToolComponent, selectors: [["igo-catalog-library-tool"]], inputs: { addCatalogAllowed: "addCatalogAllowed", predefinedCatalogs: "predefinedCatalogs" }, decls: 1, vars: 3, consts: [[3, "predefinedCatalogs", "addCatalogAllowed", "store", "catalogSelectChange"]], template: function CatalogLibraryToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-catalog-library", 0);
        i0.ɵɵlistener("catalogSelectChange", function CatalogLibraryToolComponent_Template_igo_catalog_library_catalogSelectChange_0_listener($event) { return ctx.onCatalogSelectChange($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("predefinedCatalogs", ctx.predefinedCatalogs)("addCatalogAllowed", ctx.addCatalogAllowed)("store", ctx.store);
    } }, directives: [i1.CatalogLibaryComponent], encapsulation: 2, changeDetection: 0 });
CatalogLibraryToolComponent = __decorate([
    ToolComponent({
        name: 'catalog',
        title: 'igo.integration.tools.catalog',
        icon: 'layers-plus'
    })
], CatalogLibraryToolComponent);
export { CatalogLibraryToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogLibraryToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-catalog-library-tool',
                templateUrl: './catalog-library-tool.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.CatalogService }, { type: i2.CatalogState }, { type: i3.ToolState }, { type: i4.StorageService }]; }, { addCatalogAllowed: [{
            type: Input
        }], predefinedCatalogs: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1saWJyYXJ5LXRvb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9jYXRhbG9nL2NhdGFsb2ctbGlicmFyeS10b29sL2NhdGFsb2ctbGlicmFyeS10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvY2F0YWxvZy9jYXRhbG9nLWxpYnJhcnktdG9vbC9jYXRhbG9nLWxpYnJhcnktdG9vbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7OztBQVM3Qzs7R0FFRztJQVdVLDJCQUEyQixTQUEzQiwyQkFBMkI7SUFtQnRDLFlBQ1UsY0FBOEIsRUFDOUIsWUFBMEIsRUFDMUIsU0FBb0IsRUFDcEIsY0FBOEI7UUFIOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBZHhDOztXQUVHO1FBQ00sc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBRTVDOztXQUVHO1FBQ00sdUJBQWtCLEdBQWMsRUFBRSxDQUFDO0lBT3pDLENBQUM7SUF2Qko7OztPQUdHO0lBQ0gsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztJQUN4QyxDQUFDO0lBbUJEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gscUJBQXFCLENBQUMsS0FBOEM7UUFDbEUsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssWUFBWTtRQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFtQixFQUFFLEVBQUU7WUFDakYsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7c0dBekRZLDJCQUEyQjs4RUFBM0IsMkJBQTJCO1FDekJ4Qyw4Q0FJd0Q7UUFBdEQsdUpBQXVCLGlDQUE2QixJQUFDO1FBQ3ZELGlCQUFzQjs7UUFKcEIsMkRBQXlDLDRDQUFBLG9CQUFBOztBRHdCOUIsMkJBQTJCO0lBVnZDLGFBQWEsQ0FBQztRQUNiLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLCtCQUErQjtRQUN0QyxJQUFJLEVBQUUsYUFBYTtLQUNwQixDQUFDO0dBTVcsMkJBQTJCLENBeUR2QztTQXpEWSwyQkFBMkI7dUZBQTNCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7aUpBYVUsaUJBQWlCO2tCQUF6QixLQUFLO1lBS0csa0JBQWtCO2tCQUExQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IEVudGl0eVN0b3JlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IENhdGFsb2csIENhdGFsb2dTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbmltcG9ydCB7IFRvb2xTdGF0ZSB9IGZyb20gJy4uLy4uL3Rvb2wvdG9vbC5zdGF0ZSc7XG5pbXBvcnQgeyBDYXRhbG9nU3RhdGUgfSBmcm9tICcuLi9jYXRhbG9nLnN0YXRlJztcblxuLyoqXG4gKiBUb29sIHRvIGJyb3dzZSB0aGUgbGlzdCBvZiBhdmFpbGFibGUgY2F0YWxvZ3MuXG4gKi9cbkBUb29sQ29tcG9uZW50KHtcbiAgbmFtZTogJ2NhdGFsb2cnLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5jYXRhbG9nJyxcbiAgaWNvbjogJ2xheWVycy1wbHVzJ1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1jYXRhbG9nLWxpYnJhcnktdG9vbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXRhbG9nLWxpYnJhcnktdG9vbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhdGFsb2dMaWJyYXJ5VG9vbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBTdG9yZSB0aGF0IGNvbnRhaW5zIHRoZSBjYXRhbG9nc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCBzdG9yZSgpOiBFbnRpdHlTdG9yZTxDYXRhbG9nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2F0YWxvZ1N0YXRlLmNhdGFsb2dTdG9yZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIGZvcm0gdG8gYWRkIGEgY2F0YWxvZyBpcyBhbGxvd2VkXG4gICAqL1xuICBASW5wdXQoKSBhZGRDYXRhbG9nQWxsb3dlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHByZWRlZmluZWQgY2F0YWxvZ3NcbiAgICovXG4gIEBJbnB1dCgpIHByZWRlZmluZWRDYXRhbG9nczogQ2F0YWxvZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXRhbG9nU2VydmljZTogQ2F0YWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXRhbG9nU3RhdGU6IENhdGFsb2dTdGF0ZSxcbiAgICBwcml2YXRlIHRvb2xTdGF0ZTogVG9vbFN0YXRlLFxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zdG9yZS5jb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5sb2FkQ2F0YWxvZ3MoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgc2VsZWN0ZWQgY2F0YWxvZyBjaGFuZ2VzLCB0b2dnbGUgdGhlIHRoZSBDYXRhbG9nQnJvd3NlciB0b29sLlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIGV2ZW50IFNlbGVjdCBldmVudFxuICAgKi9cbiAgb25DYXRhbG9nU2VsZWN0Q2hhbmdlKGV2ZW50OiB7IHNlbGVjdGVkOiBib29sZWFuOyBjYXRhbG9nOiBDYXRhbG9nIH0pIHtcbiAgICBpZiAoZXZlbnQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudG9vbFN0YXRlLnRvb2xib3guYWN0aXZhdGVUb29sKCdjYXRhbG9nQnJvd3NlcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIGF2YWlsYWJsZSBjYXRhbG9ncyBmcm9tIHRoZSBDYXRhbG9nU2VydmljZSBhbmRcbiAgICogbG9hZCB0aGVtIGludG8gdGhlIHN0b3JlLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkQ2F0YWxvZ3MoKSB7XG4gICAgdGhpcy5jYXRhbG9nU2VydmljZS5sb2FkQ2F0YWxvZ3MoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoY2F0YWxvZ3M6IENhdGFsb2dbXSkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5jbGVhcigpO1xuICAgICAgdGhpcy5zdG9yZS5sb2FkKGNhdGFsb2dzLmNvbmNhdCgodGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ2FkZGVkQ2F0YWxvZ3MnKSB8fCBbXSkgYXMgQ2F0YWxvZ1tdKSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxpZ28tY2F0YWxvZy1saWJyYXJ5XG4gIFtwcmVkZWZpbmVkQ2F0YWxvZ3NdPVwicHJlZGVmaW5lZENhdGFsb2dzXCJcbiAgW2FkZENhdGFsb2dBbGxvd2VkXT1cImFkZENhdGFsb2dBbGxvd2VkXCJcbiAgW3N0b3JlXT1cInN0b3JlXCJcbiAgKGNhdGFsb2dTZWxlY3RDaGFuZ2UpPVwib25DYXRhbG9nU2VsZWN0Q2hhbmdlKCRldmVudClcIj5cbjwvaWdvLWNhdGFsb2ctbGlicmFyeT5cbiJdfQ==