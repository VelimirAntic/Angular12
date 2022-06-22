import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ObjectUtils } from '@igo2/utils';
import { catchError } from 'rxjs/operators';
import { Md5 } from 'ts-md5';
import { standardizeUrl } from '../../utils/id-generator';
import { AddCatalogDialogComponent } from './add-catalog-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "../../datasource";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/material/dialog";
function CatalogLibaryComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-catalog-library-item", 3);
    i0.ɵɵlistener("catalogRemove", function CatalogLibaryComponent_ng_template_1_Template_igo_catalog_library_item_catalogRemove_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const catalog_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onCatalogRemove(catalog_r2); })("select", function CatalogLibaryComponent_ng_template_1_Template_igo_catalog_library_item_select_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const catalog_r2 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onCatalogSelect(catalog_r2); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const catalog_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("map", ctx_r0.map)("catalog", catalog_r2);
} }
function CatalogLibaryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function CatalogLibaryComponent_div_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.addCatalogDialog(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelement(5, "mat-icon", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 2, "igo.geo.catalog.library.addBtn"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 4, "igo.geo.catalog.library.addBtn"), " ");
} }
/**
 * Component to browse a list of available catalogs
 */
export class CatalogLibaryComponent {
    constructor(capabilitiesService, messageService, languageService, storageService, dialog) {
        this.capabilitiesService = capabilitiesService;
        this.messageService = messageService;
        this.languageService = languageService;
        this.storageService = storageService;
        this.dialog = dialog;
        /**
         * Determine if the form to add a catalog is allowed
         */
        this.addCatalogAllowed = false;
        /**
         * Determine if the form to add a catalog is allowed
         */
        this.predefinedCatalogs = [];
        /**
         * Event emitted a catalog is selected or unselected
         */
        this.catalogSelectChange = new EventEmitter();
        this.submitDisabled = true;
    }
    get addedCatalogs() {
        return (this.storageService.get('addedCatalogs') || []);
    }
    set addedCatalogs(catalogs) {
        this.storageService.set('addedCatalogs', catalogs);
    }
    /**
     * @internal
     */
    ngOnInit() {
        this.store.state.clear();
        this.predefinedCatalogs = this.predefinedCatalogs.map(c => {
            c.id = Md5.hashStr((c.type || 'wms') + standardizeUrl(c.url));
            c.title = c.title === '' || !c.title ? c.url : c.title;
            return c;
        });
    }
    getCatalogs() {
        return this.store.view.all$();
    }
    /**
     * When a catalog is selected, update it's state in the store
     * and emit the catalog select change event
     * @internal
     */
    onCatalogSelect(catalog) {
        this.store.state.update(catalog, {
            selected: true,
            focused: true
        }, true);
        this.catalogSelectChange.emit({ selected: true, catalog });
    }
    unsubscribeAddingCatalog() {
        if (this.addingCatalog$$) {
            this.addingCatalog$$.unsubscribe();
        }
    }
    addCatalog(addedCatalog) {
        if (!addedCatalog) {
            return;
        }
        let id = Md5.hashStr(addedCatalog.type + standardizeUrl(addedCatalog.url));
        const predefinedCatalog = this.predefinedCatalogs.find((c) => c.id === addedCatalog.id);
        if (predefinedCatalog) {
            addedCatalog.version = predefinedCatalog.version;
            addedCatalog.externalProvider = predefinedCatalog.externalProvider;
            id = predefinedCatalog.id;
        }
        if (this.store.get(id)) {
            const title = this.languageService.translate.instant('igo.geo.catalog.library.inlist.title');
            const message = this.languageService.translate.instant('igo.geo.catalog.library.inlist.message');
            this.messageService.alert(message, title);
            return;
        }
        this.unsubscribeAddingCatalog();
        this.addingCatalog$$ = this.capabilitiesService
            .getCapabilities(addedCatalog.type, addedCatalog.url, addedCatalog.version)
            .pipe(catchError((e) => {
            const title = this.languageService.translate.instant('igo.geo.catalog.unavailableTitle');
            if (e.error) {
                this.addCatalogDialog(true, addedCatalog);
                e.error.caught = true;
                return e;
            }
            const message = this.languageService.translate.instant('igo.geo.catalog.unavailable', { value: addedCatalog.url });
            this.messageService.error(message, title);
            throw e;
        }))
            .subscribe((capabilities) => {
            let title;
            let version;
            switch (addedCatalog.type) {
                case 'wms':
                    title = addedCatalog.title || capabilities.Service.Title;
                    version = addedCatalog.version || capabilities.version;
                    break;
                case 'arcgisrest':
                case 'imagearcgisrest':
                case 'tilearcgisrest':
                    title = addedCatalog.title || capabilities.mapName;
                    break;
                case 'wmts':
                    title =
                        addedCatalog.title ||
                            capabilities.ServiceIdentification.ServiceType;
                    break;
                default:
                    title = addedCatalog.title;
            }
            const catalogToAdd = ObjectUtils.removeUndefined(Object.assign({}, predefinedCatalog, ObjectUtils.removeUndefined({
                id,
                title,
                url: addedCatalog.url,
                type: addedCatalog.type || 'wms',
                externalProvider: addedCatalog.externalProvider || false,
                removable: true,
                version
            })));
            this.store.insert(catalogToAdd);
            const newCatalogs = this.addedCatalogs.slice(0);
            newCatalogs.push(catalogToAdd);
            this.addedCatalogs = newCatalogs;
            this.unsubscribeAddingCatalog();
        });
    }
    ngOnDestroy() {
        this.unsubscribeAddingCatalog();
    }
    onCatalogRemove(catalog) {
        this.store.delete(catalog);
        this.addedCatalogs = this.addedCatalogs
            .slice(0)
            .filter((c) => c.id !== catalog.id);
    }
    addCatalogDialog(error, addedCatalog) {
        const dialogRef = this.dialog.open(AddCatalogDialogComponent, {
            width: '700px',
            data: {
                predefinedCatalogs: this.predefinedCatalogs,
                store: this.store,
                error,
                addedCatalog
            }
        });
        dialogRef.afterClosed().subscribe((catalog) => {
            this.addCatalog(catalog);
        });
    }
}
CatalogLibaryComponent.ɵfac = function CatalogLibaryComponent_Factory(t) { return new (t || CatalogLibaryComponent)(i0.ɵɵdirectiveInject(i1.CapabilitiesService), i0.ɵɵdirectiveInject(i2.MessageService), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i2.StorageService), i0.ɵɵdirectiveInject(i3.MatDialog)); };
CatalogLibaryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CatalogLibaryComponent, selectors: [["igo-catalog-library"]], inputs: { store: "store", map: "map", addCatalogAllowed: "addCatalogAllowed", predefinedCatalogs: "predefinedCatalogs" }, outputs: { catalogSelectChange: "catalogSelectChange" }, decls: 4, vars: 5, consts: [[3, "navigation"], ["ngFor", "", 3, "ngForOf"], ["class", "btnAddCatalog", 4, "ngIf"], ["igoListItem", "", "color", "accent", 3, "map", "catalog", "catalogRemove", "select"], [1, "btnAddCatalog"], ["mat-raised-button", "", "matTooltipPosition", "above", "color", "primary", 3, "matTooltip", "click"], ["svgIcon", "earth-plus"]], template: function CatalogLibaryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-list", 0);
        i0.ɵɵtemplate(1, CatalogLibaryComponent_ng_template_1_Template, 1, 2, "ng-template", 1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CatalogLibaryComponent_div_3_Template, 6, 6, "div", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("navigation", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 3, ctx.getCatalogs()));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.addCatalogAllowed);
    } }, styles: ["igo-list[_ngcontent-%COMP%]{height:auto}.btnAddCatalog[_ngcontent-%COMP%]{justify-content:center;display:flex;margin:30px 0}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogLibaryComponent, [{
        type: Component,
        args: [{
                selector: 'igo-catalog-library',
                templateUrl: './catalog-library.component.html',
                styleUrls: ['./catalog-library.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.CapabilitiesService }, { type: i2.MessageService }, { type: i2.LanguageService }, { type: i2.StorageService }, { type: i3.MatDialog }]; }, { store: [{
            type: Input
        }], map: [{
            type: Input
        }], addCatalogAllowed: [{
            type: Input
        }], predefinedCatalogs: [{
            type: Input
        }], catalogSelectChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1saWJyYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2NhdGFsb2cvY2F0YWxvZy1saWJyYXJ5L2NhdGFsb2ctbGlicmFyeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9jYXRhbG9nL2NhdGFsb2ctbGlicmFyeS9jYXRhbG9nLWxpYnJhcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFHeEIsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUc3QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7SUNuQnZFLG1EQU1zQztJQURwQyxpVEFBMEMsc1JBQUE7SUFFNUMsaUJBQTJCOzs7O0lBSnpCLGdDQUFXLHVCQUFBOzs7O0lBUWpCLDhCQUFtRDtJQUNqRCxpQ0FLK0I7SUFBN0IsZ01BQTRCOztJQUM1QixZQUNBOztJQUFBLDhCQUEwQztJQUM1QyxpQkFBUztJQUNYLGlCQUFNOztJQVBGLGVBQTJEO0lBQTNELG1GQUEyRDtJQUkzRCxlQUNBO0lBREEsdUZBQ0E7O0FERUo7O0dBRUc7QUFPSCxNQUFNLE9BQU8sc0JBQXNCO0lBdUNqQyxZQUNVLG1CQUF3QyxFQUN4QyxjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxjQUE4QixFQUM5QixNQUFpQjtR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VUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NEZBeE1VLHNCQUFzQjt5RUFBdEIsc0JBQXNCO1FDaENuQyxtQ0FBK0I7UUFDN0IsdUZBU2M7O1FBQ2hCLGlCQUFXO1FBRVgsdUVBVU07O1FBdkJJLGtDQUFvQjtRQUNHLGVBQWlDO1FBQWpDLGlFQUFpQztRQVk1RCxlQUF1QjtRQUF2Qiw0Q0FBdUI7O3VGRG1CaEIsc0JBQXNCO2NBTmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7c0xBS1UsS0FBSztrQkFBYixLQUFLO1lBS0csR0FBRztrQkFBWCxLQUFLO1lBS0csaUJBQWlCO2tCQUF6QixLQUFLO1lBS0csa0JBQWtCO2tCQUExQixLQUFLO1lBS0ksbUJBQW1CO2tCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IEVudGl0eVN0b3JlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSwgTWVzc2FnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBPYmplY3RVdGlscyB9IGZyb20gJ0BpZ28yL3V0aWxzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1kNSB9IGZyb20gJ3RzLW1kNSc7XG5pbXBvcnQgeyBDYXBhYmlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi9tYXAnO1xuaW1wb3J0IHsgc3RhbmRhcmRpemVVcmwgfSBmcm9tICcuLi8uLi91dGlscy9pZC1nZW5lcmF0b3InO1xuaW1wb3J0IHsgQ2F0YWxvZyB9IGZyb20gJy4uL3NoYXJlZC9jYXRhbG9nLmFic3RyYWN0JztcbmltcG9ydCB7IEFkZENhdGFsb2dEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2FkZC1jYXRhbG9nLWRpYWxvZy5jb21wb25lbnQnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBicm93c2UgYSBsaXN0IG9mIGF2YWlsYWJsZSBjYXRhbG9nc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tY2F0YWxvZy1saWJyYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhdGFsb2ctbGlicmFyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhdGFsb2ctbGlicmFyeS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDYXRhbG9nTGliYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogU3RvcmUgaG9sZGluZyB0aGUgY2F0YWxvZ3NcbiAgICovXG4gIEBJbnB1dCgpIHN0b3JlOiBFbnRpdHlTdG9yZTxDYXRhbG9nPjtcblxuICAvKipcbiAgICogTWFwIHRvIGFkZCB0aGUgY2F0YWxvZyBpdGVtcyB0b1xuICAgKi9cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgZm9ybSB0byBhZGQgYSBjYXRhbG9nIGlzIGFsbG93ZWRcbiAgICovXG4gIEBJbnB1dCgpIGFkZENhdGFsb2dBbGxvd2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgZm9ybSB0byBhZGQgYSBjYXRhbG9nIGlzIGFsbG93ZWRcbiAgICovXG4gIEBJbnB1dCgpIHByZWRlZmluZWRDYXRhbG9nczogQ2F0YWxvZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgYSBjYXRhbG9nIGlzIHNlbGVjdGVkIG9yIHVuc2VsZWN0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBjYXRhbG9nU2VsZWN0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgY2F0YWxvZzogQ2F0YWxvZztcbiAgfT4oKTtcblxuICBzdWJtaXREaXNhYmxlZCA9IHRydWU7XG4gIHByaXZhdGUgYWRkaW5nQ2F0YWxvZyQkOiBTdWJzY3JpcHRpb247XG5cbiAgZ2V0IGFkZGVkQ2F0YWxvZ3MoKTogQ2F0YWxvZ1tdIHtcbiAgICByZXR1cm4gKHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCdhZGRlZENhdGFsb2dzJykgfHwgW10pIGFzIENhdGFsb2dbXTtcbiAgfVxuICBzZXQgYWRkZWRDYXRhbG9ncyhjYXRhbG9nczogQ2F0YWxvZ1tdKSB7XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ2FkZGVkQ2F0YWxvZ3MnLCBjYXRhbG9ncyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcGFiaWxpdGllc1NlcnZpY2U6IENhcGFiaWxpdGllc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXG4gICkge31cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0b3JlLnN0YXRlLmNsZWFyKCk7XG5cbiAgICB0aGlzLnByZWRlZmluZWRDYXRhbG9ncyA9IHRoaXMucHJlZGVmaW5lZENhdGFsb2dzLm1hcChjID0+IHtcbiAgICAgIGMuaWQgPSBNZDUuaGFzaFN0cihcbiAgICAgICAgKGMudHlwZSB8fCAnd21zJykgKyBzdGFuZGFyZGl6ZVVybChjLnVybClcbiAgICAgICkgYXMgc3RyaW5nO1xuICAgICAgYy50aXRsZSA9IGMudGl0bGUgPT09ICcnIHx8ICFjLnRpdGxlID8gYy51cmwgOiBjLnRpdGxlO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDYXRhbG9ncygpOiBPYnNlcnZhYmxlPENhdGFsb2dbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnZpZXcuYWxsJCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYSBjYXRhbG9nIGlzIHNlbGVjdGVkLCB1cGRhdGUgaXQncyBzdGF0ZSBpbiB0aGUgc3RvcmVcbiAgICogYW5kIGVtaXQgdGhlIGNhdGFsb2cgc2VsZWN0IGNoYW5nZSBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uQ2F0YWxvZ1NlbGVjdChjYXRhbG9nOiBDYXRhbG9nKSB7XG4gICAgdGhpcy5zdG9yZS5zdGF0ZS51cGRhdGUoXG4gICAgICBjYXRhbG9nLFxuICAgICAge1xuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgZm9jdXNlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIHRoaXMuY2F0YWxvZ1NlbGVjdENoYW5nZS5lbWl0KHsgc2VsZWN0ZWQ6IHRydWUsIGNhdGFsb2cgfSk7XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlQWRkaW5nQ2F0YWxvZygpIHtcbiAgICBpZiAodGhpcy5hZGRpbmdDYXRhbG9nJCQpIHtcbiAgICAgIHRoaXMuYWRkaW5nQ2F0YWxvZyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ2F0YWxvZyhhZGRlZENhdGFsb2c6IENhdGFsb2cpIHtcbiAgICBpZiAoIWFkZGVkQ2F0YWxvZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaWQgPSBNZDUuaGFzaFN0cihcbiAgICAgIGFkZGVkQ2F0YWxvZy50eXBlICsgc3RhbmRhcmRpemVVcmwoYWRkZWRDYXRhbG9nLnVybClcbiAgICApIGFzIHN0cmluZztcbiAgICBjb25zdCBwcmVkZWZpbmVkQ2F0YWxvZyA9IHRoaXMucHJlZGVmaW5lZENhdGFsb2dzLmZpbmQoXG4gICAgICAoYykgPT4gYy5pZCA9PT0gYWRkZWRDYXRhbG9nLmlkXG4gICAgKTtcblxuICAgIGlmIChwcmVkZWZpbmVkQ2F0YWxvZykge1xuICAgICAgYWRkZWRDYXRhbG9nLnZlcnNpb24gPSBwcmVkZWZpbmVkQ2F0YWxvZy52ZXJzaW9uO1xuICAgICAgYWRkZWRDYXRhbG9nLmV4dGVybmFsUHJvdmlkZXIgPSBwcmVkZWZpbmVkQ2F0YWxvZy5leHRlcm5hbFByb3ZpZGVyO1xuICAgICAgaWQgPSBwcmVkZWZpbmVkQ2F0YWxvZy5pZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdG9yZS5nZXQoaWQpKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnaWdvLmdlby5jYXRhbG9nLmxpYnJhcnkuaW5saXN0LnRpdGxlJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5nZW8uY2F0YWxvZy5saWJyYXJ5LmlubGlzdC5tZXNzYWdlJ1xuICAgICAgKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWxlcnQobWVzc2FnZSwgdGl0bGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVuc3Vic2NyaWJlQWRkaW5nQ2F0YWxvZygpO1xuXG4gICAgdGhpcy5hZGRpbmdDYXRhbG9nJCQgPSB0aGlzLmNhcGFiaWxpdGllc1NlcnZpY2VcbiAgICAuZ2V0Q2FwYWJpbGl0aWVzKGFkZGVkQ2F0YWxvZy50eXBlIGFzIGFueSwgYWRkZWRDYXRhbG9nLnVybCwgYWRkZWRDYXRhbG9nLnZlcnNpb24pXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uY2F0YWxvZy51bmF2YWlsYWJsZVRpdGxlJyk7XG4gICAgICAgICAgaWYgKGUuZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2F0YWxvZ0RpYWxvZyh0cnVlLCBhZGRlZENhdGFsb2cpO1xuICAgICAgICAgICAgZS5lcnJvci5jYXVnaHQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5jYXRhbG9nLnVuYXZhaWxhYmxlJywgeyB2YWx1ZTogYWRkZWRDYXRhbG9nLnVybCB9KTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKG1lc3NhZ2UsIHRpdGxlKTtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoY2FwYWJpbGl0aWVzKSA9PiB7XG4gICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgbGV0IHZlcnNpb247XG4gICAgICAgIHN3aXRjaCAoYWRkZWRDYXRhbG9nLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICd3bXMnOlxuICAgICAgICAgICAgdGl0bGUgPSBhZGRlZENhdGFsb2cudGl0bGUgfHwgY2FwYWJpbGl0aWVzLlNlcnZpY2UuVGl0bGU7XG4gICAgICAgICAgICB2ZXJzaW9uID0gYWRkZWRDYXRhbG9nLnZlcnNpb24gfHwgY2FwYWJpbGl0aWVzLnZlcnNpb247XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhcmNnaXNyZXN0JzpcbiAgICAgICAgICBjYXNlICdpbWFnZWFyY2dpc3Jlc3QnOlxuICAgICAgICAgIGNhc2UgJ3RpbGVhcmNnaXNyZXN0JzpcbiAgICAgICAgICAgIHRpdGxlID0gYWRkZWRDYXRhbG9nLnRpdGxlIHx8IGNhcGFiaWxpdGllcy5tYXBOYW1lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnd210cyc6XG4gICAgICAgICAgICB0aXRsZSA9XG4gICAgICAgICAgICAgIGFkZGVkQ2F0YWxvZy50aXRsZSB8fFxuICAgICAgICAgICAgICBjYXBhYmlsaXRpZXMuU2VydmljZUlkZW50aWZpY2F0aW9uLlNlcnZpY2VUeXBlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRpdGxlID0gYWRkZWRDYXRhbG9nLnRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2F0YWxvZ1RvQWRkID0gT2JqZWN0VXRpbHMucmVtb3ZlVW5kZWZpbmVkKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgICAgICBwcmVkZWZpbmVkQ2F0YWxvZyxcbiAgICAgICAgICAgIE9iamVjdFV0aWxzLnJlbW92ZVVuZGVmaW5lZCh7XG4gICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgdXJsOiBhZGRlZENhdGFsb2cudXJsLFxuICAgICAgICAgICAgICB0eXBlOiBhZGRlZENhdGFsb2cudHlwZSB8fCAnd21zJyxcbiAgICAgICAgICAgICAgZXh0ZXJuYWxQcm92aWRlcjogYWRkZWRDYXRhbG9nLmV4dGVybmFsUHJvdmlkZXIgfHwgZmFsc2UsXG4gICAgICAgICAgICAgIHJlbW92YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmVyc2lvblxuICAgICAgICAgICAgfSkpIGFzIENhdGFsb2cpO1xuICAgICAgICB0aGlzLnN0b3JlLmluc2VydChjYXRhbG9nVG9BZGQpO1xuICAgICAgICBjb25zdCBuZXdDYXRhbG9ncyA9IHRoaXMuYWRkZWRDYXRhbG9ncy5zbGljZSgwKTtcbiAgICAgICAgbmV3Q2F0YWxvZ3MucHVzaChjYXRhbG9nVG9BZGQpO1xuICAgICAgICB0aGlzLmFkZGVkQ2F0YWxvZ3MgPSBuZXdDYXRhbG9ncztcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUFkZGluZ0NhdGFsb2coKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZUFkZGluZ0NhdGFsb2coKTtcbiAgfVxuXG4gIG9uQ2F0YWxvZ1JlbW92ZShjYXRhbG9nKSB7XG4gICAgdGhpcy5zdG9yZS5kZWxldGUoY2F0YWxvZyk7XG4gICAgdGhpcy5hZGRlZENhdGFsb2dzID0gdGhpcy5hZGRlZENhdGFsb2dzXG4gICAgICAuc2xpY2UoMClcbiAgICAgIC5maWx0ZXIoKGMpID0+IGMuaWQgIT09IGNhdGFsb2cuaWQpO1xuICB9XG5cbiAgYWRkQ2F0YWxvZ0RpYWxvZyhlcnJvcj8sIGFkZGVkQ2F0YWxvZz86IENhdGFsb2cpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFkZENhdGFsb2dEaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNzAwcHgnLFxuICAgICAgZGF0YToge1xuICAgICAgICBwcmVkZWZpbmVkQ2F0YWxvZ3M6IHRoaXMucHJlZGVmaW5lZENhdGFsb2dzLFxuICAgICAgICBzdG9yZTogdGhpcy5zdG9yZSxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGFkZGVkQ2F0YWxvZ1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjYXRhbG9nKSA9PiB7XG4gICAgICB0aGlzLmFkZENhdGFsb2coY2F0YWxvZyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxpZ28tbGlzdCBbbmF2aWdhdGlvbl09XCJmYWxzZVwiPlxuICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWNhdGFsb2cgW25nRm9yT2ZdPVwiZ2V0Q2F0YWxvZ3MoKSB8IGFzeW5jXCI+XG4gICAgPGlnby1jYXRhbG9nLWxpYnJhcnktaXRlbVxuICAgICAgaWdvTGlzdEl0ZW1cbiAgICAgIGNvbG9yPVwiYWNjZW50XCJcbiAgICAgIFttYXBdPVwibWFwXCJcbiAgICAgIFtjYXRhbG9nXT1cImNhdGFsb2dcIlxuICAgICAgKGNhdGFsb2dSZW1vdmUpPVwib25DYXRhbG9nUmVtb3ZlKGNhdGFsb2cpXCJcbiAgICAgIChzZWxlY3QpPVwib25DYXRhbG9nU2VsZWN0KGNhdGFsb2cpXCI+XG4gICAgPC9pZ28tY2F0YWxvZy1saWJyYXJ5LWl0ZW0+XG4gIDwvbmctdGVtcGxhdGU+XG48L2lnby1saXN0PlxuXG48ZGl2ICpuZ0lmPVwiYWRkQ2F0YWxvZ0FsbG93ZWRcIiBjbGFzcz1idG5BZGRDYXRhbG9nPlxuICA8YnV0dG9uXG4gICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5jYXRhbG9nLmxpYnJhcnkuYWRkQnRuJyB8IHRyYW5zbGF0ZVwiXG4gICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwiYWJvdmVcIlxuICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgKGNsaWNrKT1cImFkZENhdGFsb2dEaWFsb2coKVwiPlxuICAgIHt7J2lnby5nZW8uY2F0YWxvZy5saWJyYXJ5LmFkZEJ0bicgfCB0cmFuc2xhdGV9fVxuICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiZWFydGgtcGx1c1wiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=