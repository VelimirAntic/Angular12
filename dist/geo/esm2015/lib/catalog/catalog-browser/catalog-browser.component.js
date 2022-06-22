import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { zip } from 'rxjs';
import { EntityStoreWatcher } from '@igo2/common';
import { CatalogItemType } from '../shared';
import * as i0 from "@angular/core";
import * as i1 from "../../layer/shared/layer.service";
function CatalogBrowserComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "igo-catalog-browser-group", 3);
    i0.ɵɵlistener("addedChange", function CatalogBrowserComponent_ng_template_1_ng_container_0_Template_igo_catalog_browser_group_addedChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.onGroupAddedChange($event); })("layerAddedChange", function CatalogBrowserComponent_ng_template_1_ng_container_0_Template_igo_catalog_browser_group_layerAddedChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.onLayerAddedChange($event); });
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("catalog", ctx_r2.catalog)("group", item_r1)("state", ctx_r2.store.state)("resolution", i0.ɵɵpipeBind1(2, 7, ctx_r2.resolution$))("catalogAllowLegend", ctx_r2.catalogAllowLegend)("collapsed", ctx_r2.store.count === 1 ? false : true)("toggleCollapsed", ctx_r2.toggleCollapsedGroup);
} }
function CatalogBrowserComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "igo-catalog-browser-layer", 4);
    i0.ɵɵlistener("addedChange", function CatalogBrowserComponent_ng_template_1_ng_container_1_Template_igo_catalog_browser_layer_addedChange_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onLayerAddedChange($event); });
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", item_r1)("resolution", i0.ɵɵpipeBind1(2, 4, ctx_r3.resolution$))("catalogAllowLegend", ctx_r3.catalogAllowLegend)("added", ctx_r3.store.state.get(item_r1).added);
} }
function CatalogBrowserComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CatalogBrowserComponent_ng_template_1_ng_container_0_Template, 3, 9, "ng-container", 2);
    i0.ɵɵtemplate(1, CatalogBrowserComponent_ng_template_1_ng_container_1_Template, 3, 6, "ng-container", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r0.isGroup(item_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isLayer(item_r1));
} }
/**
 * Component to browse a catalog's groups and layers and display them on a map.
 */
export class CatalogBrowserComponent {
    constructor(layerService, cdRef) {
        this.layerService = layerService;
        this.cdRef = cdRef;
        this.catalogAllowLegend = false;
        /**
         * Whether a group can be toggled when it's collapsed
         */
        this.toggleCollapsedGroup = true;
    }
    // private resolution$$: Subscription;
    get resolution$() { return this.map.viewController.resolution$; }
    /**
     * @internal
     */
    ngOnInit() {
        const currentItems = this.map.layers.map((layer) => {
            return {
                id: layer.options.source.id,
                title: layer.title,
                type: CatalogItemType.Layer
            };
        });
        this.store.state.updateMany(currentItems, { added: true }, true);
        if (this.catalog && this.catalog.sortDirection !== undefined) {
            this.store.view.sort({
                direction: this.catalog.sortDirection,
                valueAccessor: (item) => item.title
            });
        }
        const catalogShowLegend = this.catalog ? this.catalog.showLegend : false;
        this.catalogAllowLegend = catalogShowLegend ? catalogShowLegend : this.catalogAllowLegend;
        this.watcher = new EntityStoreWatcher(this.store, this.cdRef);
    }
    ngOnDestroy() {
        this.watcher.destroy();
    }
    /**
     * @internal
     */
    isGroup(item) {
        return item.type === CatalogItemType.Group;
    }
    /**
     * @internal
     */
    isLayer(item) {
        return item.type === CatalogItemType.Layer;
    }
    /**
     * When a layer is added or removed, add or remove it from the map
     * @internal
     * @param event Layer added event
     */
    onLayerAddedChange(event) {
        const layer = event.layer;
        this.store.state.update(layer, { added: event.added }, false);
        event.added ? this.addLayerToMap(layer) : this.removeLayerFromMap(layer);
    }
    /**
     * When a froup is added or removed, add or remove it from the map
     * @internal
     * @param event Group added event
     */
    onGroupAddedChange(event) {
        const group = event.group;
        this.store.state.update(group, { added: event.added }, false);
        event.added ? this.addGroupToMap(group) : this.removeGroupFromMap(group);
    }
    /**
     * Add layer to map
     * @param layer Catalog layer
     */
    addLayerToMap(layer) {
        this.addLayersToMap([layer]);
    }
    /**
     * Remove layer from map
     * @param layer Catalog layer
     */
    removeLayerFromMap(layer) {
        this.removeLayersFromMap([layer]);
    }
    /**
     * Add multiple layers to map
     * @param layers Catalog layers
     */
    addLayersToMap(layers) {
        const layers$ = layers.map((layer) => {
            if (!layer.options.sourceOptions.optionsFromApi) {
                layer.options.sourceOptions.optionsFromApi = true;
            }
            return this.layerService.createAsyncLayer(layer.options);
        });
        zip(...layers$).subscribe((oLayers) => {
            this.store.state.updateMany(layers, { added: true });
            this.map.addLayers(oLayers);
        });
    }
    /**
     * Remove multiple layers from map
     * @param layers Catalog layers
     */
    removeLayersFromMap(layers) {
        layers.forEach((layer) => {
            this.store.state.update(layer, { added: false });
            if (layer.options.baseLayer === true) {
                const oLayer = this.map.getLayerById(layer.options.id);
                if (oLayer !== undefined) {
                    this.map.removeLayer(oLayer);
                }
            }
            else {
                const oLayer = this.map.getLayerById(layer.id);
                if (oLayer !== undefined) {
                    this.map.removeLayer(oLayer);
                }
            }
        });
    }
    /**
     * Sort the layers by title. asc or desc.
     * @internal
     */
    sortCatalogItemsByTitle(items, direction) {
        const returnItem = items.sort((a, b) => {
            const titleA = a.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const titleB = b.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        });
        switch (direction) {
            case 'asc':
                return returnItem;
            case 'desc':
                return returnItem.reverse();
            default:
                return items;
        }
    }
    /**
     * Add all the layers of a group to map
     * @param group Catalog group
     */
    addGroupToMap(group) {
        let layers = group.items.filter((item) => {
            const added = this.store.state.get(item).added || false;
            return this.isLayer(item) && added === false;
        });
        if (group.sortDirection !== undefined) {
            layers = this.sortCatalogItemsByTitle(layers, group.sortDirection);
        }
        this.addLayersToMap(layers.reverse());
    }
    /**
     * Remove all the layers of a group from map
     * @param group Catalog group
     */
    removeGroupFromMap(group) {
        const layers = group.items.filter((item) => {
            const added = this.store.state.get(item).added || false;
            return this.isLayer(item) && added === true;
        });
        this.removeLayersFromMap(layers);
    }
}
CatalogBrowserComponent.ɵfac = function CatalogBrowserComponent_Factory(t) { return new (t || CatalogBrowserComponent)(i0.ɵɵdirectiveInject(i1.LayerService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CatalogBrowserComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CatalogBrowserComponent, selectors: [["igo-catalog-browser"]], inputs: { catalogAllowLegend: "catalogAllowLegend", catalog: "catalog", store: "store", map: "map", toggleCollapsedGroup: "toggleCollapsedGroup" }, decls: 3, vars: 5, consts: [[3, "navigation", "selection"], ["ngFor", "", 3, "ngForOf"], [4, "ngIf"], [3, "catalog", "group", "state", "resolution", "catalogAllowLegend", "collapsed", "toggleCollapsed", "addedChange", "layerAddedChange"], ["igoListItem", "", 3, "layer", "resolution", "catalogAllowLegend", "added", "addedChange"]], template: function CatalogBrowserComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-list", 0);
        i0.ɵɵtemplate(1, CatalogBrowserComponent_ng_template_1_Template, 2, 2, "ng-template", 1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("navigation", false)("selection", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 3, ctx.store.view.all$()));
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogBrowserComponent, [{
        type: Component,
        args: [{
                selector: 'igo-catalog-browser',
                templateUrl: './catalog-browser.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.LayerService }, { type: i0.ChangeDetectorRef }]; }, { catalogAllowLegend: [{
            type: Input
        }], catalog: [{
            type: Input
        }], store: [{
            type: Input
        }], map: [{
            type: Input
        }], toggleCollapsedGroup: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1icm93c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2NhdGFsb2cvY2F0YWxvZy1icm93c2VyL2NhdGFsb2ctYnJvd3Nlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9jYXRhbG9nL2NhdGFsb2ctYnJvd3Nlci9jYXRhbG9nLWJyb3dzZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBSXhCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQW1CLE1BQU0sTUFBTSxDQUFDO0FBRTVDLE9BQU8sRUFBZSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUsvRCxPQUFPLEVBTUwsZUFBZSxFQUNoQixNQUFNLFdBQVcsQ0FBQzs7Ozs7SUNyQmYsNkJBQW9DO0lBQ2xDLG9EQVNrRDtJQURoRCxzUUFBMEMsbVFBQUE7O0lBRTVDLGlCQUE0QjtJQUM5QiwwQkFBZTs7OztJQVZYLGVBQW1CO0lBQW5CLHdDQUFtQixrQkFBQSw2QkFBQSx3REFBQSxpREFBQSxzREFBQSxnREFBQTs7OztJQVl2Qiw2QkFBb0M7SUFDbEMsb0RBTTZDO0lBQTNDLHNRQUEwQzs7SUFDNUMsaUJBQTRCO0lBQzlCLDBCQUFlOzs7O0lBTlgsZUFBYztJQUFkLCtCQUFjLHdEQUFBLGlEQUFBLGdEQUFBOzs7SUFqQmxCLHdHQVllO0lBRWYsd0dBU2U7Ozs7SUF2QkEsOENBQW1CO0lBY25CLGVBQW1CO0lBQW5CLDhDQUFtQjs7QURTdEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBZ0NsQyxZQUNVLFlBQTBCLEVBQzFCLEtBQXdCO1FBRHhCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUss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LENBQUMsQ0FBQyxJQUFpQixFQUFFLEVBQUU7WUFDdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7WUFDeEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBNEIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OzhGQWxOVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ2pDcEMsbUNBQW1EO1FBQ2pELHdGQXlCYzs7UUFDaEIsaUJBQVc7O1FBM0JELGtDQUFvQixvQkFBQTtRQUNBLGVBQXFDO1FBQXJDLHFFQUFxQzs7dUZEZ0N0RCx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOytGQVdVLGtCQUFrQjtrQkFBMUIsS0FBSztZQUtHLE9BQU87a0JBQWYsS0FBSztZQUtHLEtBQUs7a0JBQWIsS0FBSztZQUtHLEdBQUc7a0JBQVgsS0FBSztZQUtHLG9CQUFvQjtrQkFBNUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHppcCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEVudGl0eVN0b3JlLCBFbnRpdHlTdG9yZVdhdGNoZXIgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi8uLi9sYXllci9zaGFyZWQvbGF5ZXJzL2xheWVyJztcbmltcG9ydCB7IExheWVyU2VydmljZSB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9sYXllci5zZXJ2aWNlJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcCc7XG5cbmltcG9ydCB7XG4gIENhdGFsb2csXG4gIENhdGFsb2dJdGVtLFxuICBDYXRhbG9nSXRlbUxheWVyLFxuICBDYXRhbG9nSXRlbUdyb3VwLFxuICBDYXRhbG9nSXRlbVN0YXRlLFxuICBDYXRhbG9nSXRlbVR5cGVcbn0gZnJvbSAnLi4vc2hhcmVkJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gYnJvd3NlIGEgY2F0YWxvZydzIGdyb3VwcyBhbmQgbGF5ZXJzIGFuZCBkaXNwbGF5IHRoZW0gb24gYSBtYXAuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1jYXRhbG9nLWJyb3dzZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0YWxvZy1icm93c2VyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2F0YWxvZ0Jyb3dzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBDYXRhbG9nIGl0ZW1zIHN0b3JlIHdhdGNoZXJcbiAgICovXG4gIHByaXZhdGUgd2F0Y2hlcjogRW50aXR5U3RvcmVXYXRjaGVyPENhdGFsb2dJdGVtPjtcblxuIC8vIHByaXZhdGUgcmVzb2x1dGlvbiQkOiBTdWJzY3JpcHRpb247XG5cbiAgZ2V0IHJlc29sdXRpb24kKCk6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+IHsgcmV0dXJuIHRoaXMubWFwLnZpZXdDb250cm9sbGVyLnJlc29sdXRpb24kOyB9XG5cbiAgQElucHV0KCkgY2F0YWxvZ0FsbG93TGVnZW5kID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENhdGFsb2dcbiAgICovXG4gIEBJbnB1dCgpIGNhdGFsb2c6IENhdGFsb2c7XG5cbiAgLyoqXG4gICAqIFN0b3JlIGhvbGRpbmcgdGhlIGNhdGFsb2cncyBpdGVtc1xuICAgKi9cbiAgQElucHV0KCkgc3RvcmU6IEVudGl0eVN0b3JlPENhdGFsb2dJdGVtLCBDYXRhbG9nSXRlbVN0YXRlPjtcblxuICAvKipcbiAgICogTWFwIHRvIGFkZCB0aGUgY2F0YWxvZyBpdGVtcyB0b1xuICAgKi9cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYSBncm91cCBjYW4gYmUgdG9nZ2xlZCB3aGVuIGl0J3MgY29sbGFwc2VkXG4gICAqL1xuICBASW5wdXQoKSB0b2dnbGVDb2xsYXBzZWRHcm91cDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsYXllclNlcnZpY2U6IExheWVyU2VydmljZSxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgY3VycmVudEl0ZW1zID0gdGhpcy5tYXAubGF5ZXJzLm1hcCgobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogbGF5ZXIub3B0aW9ucy5zb3VyY2UuaWQsXG4gICAgICAgIHRpdGxlOiBsYXllci50aXRsZSxcbiAgICAgICAgdHlwZTogQ2F0YWxvZ0l0ZW1UeXBlLkxheWVyXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHRoaXMuc3RvcmUuc3RhdGUudXBkYXRlTWFueShjdXJyZW50SXRlbXMsIHsgYWRkZWQ6IHRydWUgfSwgdHJ1ZSk7XG4gICAgaWYgKHRoaXMuY2F0YWxvZyAmJiB0aGlzLmNhdGFsb2cuc29ydERpcmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0b3JlLnZpZXcuc29ydCh7XG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5jYXRhbG9nLnNvcnREaXJlY3Rpb24sXG4gICAgICAgIHZhbHVlQWNjZXNzb3I6IChpdGVtOiBDYXRhbG9nSXRlbSkgPT4gaXRlbS50aXRsZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2F0YWxvZ1Nob3dMZWdlbmQgPSB0aGlzLmNhdGFsb2cgPyB0aGlzLmNhdGFsb2cuc2hvd0xlZ2VuZCA6IGZhbHNlO1xuICAgIHRoaXMuY2F0YWxvZ0FsbG93TGVnZW5kID0gY2F0YWxvZ1Nob3dMZWdlbmQgPyBjYXRhbG9nU2hvd0xlZ2VuZCA6IHRoaXMuY2F0YWxvZ0FsbG93TGVnZW5kO1xuXG4gICAgdGhpcy53YXRjaGVyID0gbmV3IEVudGl0eVN0b3JlV2F0Y2hlcih0aGlzLnN0b3JlLCB0aGlzLmNkUmVmKTtcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy53YXRjaGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGlzR3JvdXAoaXRlbTogQ2F0YWxvZ0l0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS50eXBlID09PSBDYXRhbG9nSXRlbVR5cGUuR3JvdXA7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBpc0xheWVyKGl0ZW06IENhdGFsb2dJdGVtKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW0udHlwZSA9PT0gQ2F0YWxvZ0l0ZW1UeXBlLkxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYSBsYXllciBpcyBhZGRlZCBvciByZW1vdmVkLCBhZGQgb3IgcmVtb3ZlIGl0IGZyb20gdGhlIG1hcFxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIGV2ZW50IExheWVyIGFkZGVkIGV2ZW50XG4gICAqL1xuICBvbkxheWVyQWRkZWRDaGFuZ2UoZXZlbnQ6IHsgYWRkZWQ6IGJvb2xlYW47IGxheWVyOiBDYXRhbG9nSXRlbUxheWVyIH0pIHtcbiAgICBjb25zdCBsYXllciA9IGV2ZW50LmxheWVyO1xuICAgIHRoaXMuc3RvcmUuc3RhdGUudXBkYXRlKGxheWVyLCB7IGFkZGVkOiBldmVudC5hZGRlZCB9LCBmYWxzZSk7XG4gICAgZXZlbnQuYWRkZWQgPyB0aGlzLmFkZExheWVyVG9NYXAobGF5ZXIpIDogdGhpcy5yZW1vdmVMYXllckZyb21NYXAobGF5ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYSBmcm91cCBpcyBhZGRlZCBvciByZW1vdmVkLCBhZGQgb3IgcmVtb3ZlIGl0IGZyb20gdGhlIG1hcFxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIGV2ZW50IEdyb3VwIGFkZGVkIGV2ZW50XG4gICAqL1xuICBvbkdyb3VwQWRkZWRDaGFuZ2UoZXZlbnQ6IHsgYWRkZWQ6IGJvb2xlYW47IGdyb3VwOiBDYXRhbG9nSXRlbUdyb3VwIH0pIHtcbiAgICBjb25zdCBncm91cCA9IGV2ZW50Lmdyb3VwO1xuICAgIHRoaXMuc3RvcmUuc3RhdGUudXBkYXRlKGdyb3VwLCB7IGFkZGVkOiBldmVudC5hZGRlZCB9LCBmYWxzZSk7XG4gICAgZXZlbnQuYWRkZWQgPyB0aGlzLmFkZEdyb3VwVG9NYXAoZ3JvdXApIDogdGhpcy5yZW1vdmVHcm91cEZyb21NYXAoZ3JvdXApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBsYXllciB0byBtYXBcbiAgICogQHBhcmFtIGxheWVyIENhdGFsb2cgbGF5ZXJcbiAgICovXG4gIHByaXZhdGUgYWRkTGF5ZXJUb01hcChsYXllcjogQ2F0YWxvZ0l0ZW1MYXllcikge1xuICAgIHRoaXMuYWRkTGF5ZXJzVG9NYXAoW2xheWVyXSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGxheWVyIGZyb20gbWFwXG4gICAqIEBwYXJhbSBsYXllciBDYXRhbG9nIGxheWVyXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZUxheWVyRnJvbU1hcChsYXllcjogQ2F0YWxvZ0l0ZW1MYXllcikge1xuICAgIHRoaXMucmVtb3ZlTGF5ZXJzRnJvbU1hcChbbGF5ZXJdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgbGF5ZXJzIHRvIG1hcFxuICAgKiBAcGFyYW0gbGF5ZXJzIENhdGFsb2cgbGF5ZXJzXG4gICAqL1xuICBwcml2YXRlIGFkZExheWVyc1RvTWFwKGxheWVyczogQ2F0YWxvZ0l0ZW1MYXllcltdKSB7XG4gICAgY29uc3QgbGF5ZXJzJCA9IGxheWVycy5tYXAoKGxheWVyOiBDYXRhbG9nSXRlbUxheWVyKSA9PiB7XG4gICAgICBpZiAoIWxheWVyLm9wdGlvbnMuc291cmNlT3B0aW9ucy5vcHRpb25zRnJvbUFwaSkge1xuICAgICAgICBsYXllci5vcHRpb25zLnNvdXJjZU9wdGlvbnMub3B0aW9uc0Zyb21BcGkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubGF5ZXJTZXJ2aWNlLmNyZWF0ZUFzeW5jTGF5ZXIobGF5ZXIub3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB6aXAoLi4ubGF5ZXJzJCkuc3Vic2NyaWJlKChvTGF5ZXJzOiBMYXllcltdKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLnN0YXRlLnVwZGF0ZU1hbnkobGF5ZXJzLCB7IGFkZGVkOiB0cnVlIH0pO1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXJzKG9MYXllcnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBtdWx0aXBsZSBsYXllcnMgZnJvbSBtYXBcbiAgICogQHBhcmFtIGxheWVycyBDYXRhbG9nIGxheWVyc1xuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVMYXllcnNGcm9tTWFwKGxheWVyczogQ2F0YWxvZ0l0ZW1MYXllcltdKSB7XG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyOiBDYXRhbG9nSXRlbUxheWVyKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLnN0YXRlLnVwZGF0ZShsYXllciwgeyBhZGRlZDogZmFsc2UgfSk7XG4gICAgICBpZiAobGF5ZXIub3B0aW9ucy5iYXNlTGF5ZXIgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb0xheWVyID0gdGhpcy5tYXAuZ2V0TGF5ZXJCeUlkKGxheWVyLm9wdGlvbnMuaWQpO1xuICAgICAgICBpZiAob0xheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcihvTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvTGF5ZXIgPSB0aGlzLm1hcC5nZXRMYXllckJ5SWQobGF5ZXIuaWQpO1xuICAgICAgICBpZiAob0xheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcihvTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU29ydCB0aGUgbGF5ZXJzIGJ5IHRpdGxlLiBhc2Mgb3IgZGVzYy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIHNvcnRDYXRhbG9nSXRlbXNCeVRpdGxlKGl0ZW1zOiBDYXRhbG9nSXRlbVtdLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCByZXR1cm5JdGVtID0gaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgdGl0bGVBID0gYS50aXRsZS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcbiAgICAgIGNvbnN0IHRpdGxlQiA9IGIudGl0bGUubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJyk7XG5cbiAgICAgIGlmICh0aXRsZUEgPCB0aXRsZUIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKHRpdGxlQSA+IHRpdGxlQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdhc2MnOlxuICAgICAgICByZXR1cm4gcmV0dXJuSXRlbTtcbiAgICAgIGNhc2UgJ2Rlc2MnOlxuICAgICAgICByZXR1cm4gcmV0dXJuSXRlbS5yZXZlcnNlKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbGwgdGhlIGxheWVycyBvZiBhIGdyb3VwIHRvIG1hcFxuICAgKiBAcGFyYW0gZ3JvdXAgQ2F0YWxvZyBncm91cFxuICAgKi9cbiAgcHJpdmF0ZSBhZGRHcm91cFRvTWFwKGdyb3VwOiBDYXRhbG9nSXRlbUdyb3VwKSB7XG4gICAgbGV0IGxheWVycyA9IGdyb3VwLml0ZW1zLmZpbHRlcigoaXRlbTogQ2F0YWxvZ0l0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGFkZGVkID0gdGhpcy5zdG9yZS5zdGF0ZS5nZXQoaXRlbSkuYWRkZWQgfHwgZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5pc0xheWVyKGl0ZW0pICYmIGFkZGVkID09PSBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoZ3JvdXAuc29ydERpcmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsYXllcnMgPSB0aGlzLnNvcnRDYXRhbG9nSXRlbXNCeVRpdGxlKGxheWVycywgZ3JvdXAuc29ydERpcmVjdGlvbik7XG4gICAgfVxuICAgIHRoaXMuYWRkTGF5ZXJzVG9NYXAobGF5ZXJzLnJldmVyc2UoKSBhcyBDYXRhbG9nSXRlbUxheWVyW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgdGhlIGxheWVycyBvZiBhIGdyb3VwIGZyb20gbWFwXG4gICAqIEBwYXJhbSBncm91cCBDYXRhbG9nIGdyb3VwXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZUdyb3VwRnJvbU1hcChncm91cDogQ2F0YWxvZ0l0ZW1Hcm91cCkge1xuICAgIGNvbnN0IGxheWVycyA9IGdyb3VwLml0ZW1zLmZpbHRlcigoaXRlbTogQ2F0YWxvZ0l0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGFkZGVkID0gdGhpcy5zdG9yZS5zdGF0ZS5nZXQoaXRlbSkuYWRkZWQgfHwgZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5pc0xheWVyKGl0ZW0pICYmIGFkZGVkID09PSB0cnVlO1xuICAgIH0pO1xuICAgIHRoaXMucmVtb3ZlTGF5ZXJzRnJvbU1hcChsYXllcnMgYXMgQ2F0YWxvZ0l0ZW1MYXllcltdKTtcbiAgfVxufVxuIiwiPGlnby1saXN0IFtuYXZpZ2F0aW9uXT1cImZhbHNlXCIgW3NlbGVjdGlvbl09XCJmYWxzZVwiPlxuICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWl0ZW0gW25nRm9yT2ZdPVwic3RvcmUudmlldy5hbGwkKCkgfCBhc3luY1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0dyb3VwKGl0ZW0pXCI+XG4gICAgICA8aWdvLWNhdGFsb2ctYnJvd3Nlci1ncm91cFxuICAgICAgICBbY2F0YWxvZ109XCJjYXRhbG9nXCJcbiAgICAgICAgW2dyb3VwXT1cIml0ZW1cIlxuICAgICAgICBbc3RhdGVdPVwic3RvcmUuc3RhdGVcIlxuICAgICAgICBbcmVzb2x1dGlvbl09XCJyZXNvbHV0aW9uJCB8IGFzeW5jXCJcbiAgICAgICAgW2NhdGFsb2dBbGxvd0xlZ2VuZF09XCJjYXRhbG9nQWxsb3dMZWdlbmRcIlxuICAgICAgICBbY29sbGFwc2VkXT1cIihzdG9yZS5jb3VudCA9PT0gMSkgPyBmYWxzZSA6IHRydWVcIlxuICAgICAgICBbdG9nZ2xlQ29sbGFwc2VkXT1cInRvZ2dsZUNvbGxhcHNlZEdyb3VwXCJcbiAgICAgICAgKGFkZGVkQ2hhbmdlKT1cIm9uR3JvdXBBZGRlZENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKGxheWVyQWRkZWRDaGFuZ2UpPVwib25MYXllckFkZGVkQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIDwvaWdvLWNhdGFsb2ctYnJvd3Nlci1ncm91cD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0xheWVyKGl0ZW0pXCI+XG4gICAgICA8aWdvLWNhdGFsb2ctYnJvd3Nlci1sYXllclxuICAgICAgICBpZ29MaXN0SXRlbVxuICAgICAgICBbbGF5ZXJdPVwiaXRlbVwiXG4gICAgICAgIFtyZXNvbHV0aW9uXT1cInJlc29sdXRpb24kIHwgYXN5bmNcIlxuICAgICAgICBbY2F0YWxvZ0FsbG93TGVnZW5kXT1cImNhdGFsb2dBbGxvd0xlZ2VuZFwiXG4gICAgICAgIFthZGRlZF09XCJzdG9yZS5zdGF0ZS5nZXQoaXRlbSkuYWRkZWRcIlxuICAgICAgICAoYWRkZWRDaGFuZ2UpPVwib25MYXllckFkZGVkQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIDwvaWdvLWNhdGFsb2ctYnJvd3Nlci1sYXllcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvaWdvLWxpc3Q+XG4iXX0=