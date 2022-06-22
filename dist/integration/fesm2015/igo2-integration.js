import * as i0 from '@angular/core';
import { NgModule, Injectable, Component, Input, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Inject, ViewChild, Directive, Self, HostListener } from '@angular/core';
import * as i1 from '@igo2/context';
import { IgoContextModule, IgoContextImportExportModule } from '@igo2/context';
import { __decorate } from 'tslib';
import * as i4 from '@igo2/common';
import { ToolComponent, EntityStore, EntityStoreFilterCustomFuncStrategy, EntityStoreFilterSelectionStrategy, WorkspaceStore, IgoSpinnerModule, getEntityTitle, FlexibleComponent, IgoFlexibleModule, IgoPanelModule, IgoCustomHtmlModule, IgoInteractiveTourModule } from '@igo2/common';
import { BehaviorSubject, Subject, combineLatest, ReplaySubject, forkJoin, of } from 'rxjs';
import * as i1$1 from '@igo2/geo';
import { IgoMap, IgoCatalogLibraryModule, IgoCatalogBrowserModule, StopsStore, StopsFeatureStore, RoutesFeatureStore, StepFeatureStore, IgoDirectionsModule, FeatureStore, IgoDrawingToolModule, FeatureStoreSelectionStrategy, FeatureMotion, mapExtentStrategyActiveToolTip, noElementSelected, OgcFilterWidget, WfsWorkspace, FeatureWorkspace, EditionWorkspace, IgoImportExportModule, LayerListControlsEnum, sourceCanSearch, VectorLayer, zoneMtm, zoneUtm, formatScale, computeProjectionsConstraints, IgoLayerModule, IgoMetadataModule, IgoDownloadModule, IgoFilterModule, IgoMeasurerModule, IgoPrintModule, IgoSearchModule, FEATURE, getCommonVectorStyle, featureToOl, computeOlFeaturesExtent, featuresAreOutOfView, featuresAreTooDeepInView, featureFromOl, getCommonVectorSelectedStyle, moveToOlFeatures, IgoFeatureModule, IgoFeatureDetailsModule, SpatialFilterItemType, MeasureLengthUnit, SpatialFilterType, createOverlayMarkerStyle, IgoQueryModule } from '@igo2/geo';
import * as i4$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { take, skipWhile, map, debounceTime, takeUntil, tap, skip } from 'rxjs/operators';
import * as i2 from '@igo2/auth';
import * as i2$1 from '@igo2/core';
import { StorageScope, StorageServiceEventEnum, IgoLanguageModule } from '@igo2/core';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4$2 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i8 from '@ngx-translate/core';
import * as i5 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i7 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i10 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i6$2 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i8$1 from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import * as i3$1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i6$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i7$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i9 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import { Clipboard } from '@igo2/utils';
import * as olproj from 'ol/proj';
import * as i10$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i12 from '@angular/material/badge';
import { MatBadgeModule } from '@angular/material/badge';
import olFormatGeoJSON from 'ol/format/GeoJSON';
import olFeature from 'ol/Feature';
import olPoint from 'ol/geom/Point';
import pointOnFeature from '@turf/point-on-feature';
import * as olstyle from 'ol/style';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i3$2 from '@angular/common/http';

class IgoAppAnalyticsModule {
}
IgoAppAnalyticsModule.ɵfac = function IgoAppAnalyticsModule_Factory(t) { return new (t || IgoAppAnalyticsModule)(); };
IgoAppAnalyticsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppAnalyticsModule });
IgoAppAnalyticsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppAnalyticsModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: []
            }]
    }], null, null); })();

var ImportExportType;
(function (ImportExportType) {
    ImportExportType["layer"] = "layer";
    ImportExportType["context"] = "context";
})(ImportExportType || (ImportExportType = {}));
var ImportExportMode;
(function (ImportExportMode) {
    ImportExportMode["import"] = "import";
    ImportExportMode["export"] = "export";
})(ImportExportMode || (ImportExportMode = {}));
/**
 * Service that holds the state of the importExport module
 */
class ImportExportState {
    constructor() {
        this.importExportType$ = new BehaviorSubject(ImportExportType.layer);
        this.selectedMode$ = new BehaviorSubject(ImportExportMode.import);
        this.exportOptions$ = new BehaviorSubject(undefined);
    }
    setImportExportType(type) {
        this.importExportType$.next(type);
    }
    setMode(mode) {
        this.selectedMode$.next(mode);
    }
    setsExportOptions(exportOptions) {
        this.exportOptions$.next(exportOptions);
    }
}
ImportExportState.ɵfac = function ImportExportState_Factory(t) { return new (t || ImportExportState)(); };
ImportExportState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ImportExportState, factory: ImportExportState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportExportState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

/**
 * Service that holds the state of the search module
 */
class ToolState {
    constructor(toolService, importExportState) {
        this.toolService = toolService;
        this.importExportState = importExportState;
        this.openSidenav$ = new BehaviorSubject(undefined);
    }
    get toolbox() {
        return this.toolService.toolbox;
    }
    toolToActivateFromOptions(toolToActivate) {
        if (!toolToActivate) {
            return;
        }
        if (toolToActivate.tool === 'importExport') {
            let exportOptions = this.importExportState.exportOptions$.value;
            if (!exportOptions) {
                exportOptions = {
                    layers: toolToActivate.options.layers,
                    featureInMapExtent: toolToActivate.options.featureInMapExtent
                };
            }
            else {
                exportOptions.layers = toolToActivate.options.layers;
                exportOptions.featureInMapExtent = toolToActivate.options.featureInMapExtent;
            }
            this.importExportState.setsExportOptions(exportOptions);
            this.importExportState.setMode(ImportExportMode.export);
        }
        if (this.toolbox.getTool(toolToActivate.tool)) {
            this.toolbox.activateTool(toolToActivate.tool);
            this.openSidenav$.next(true);
        }
    }
}
ToolState.ɵfac = function ToolState_Factory(t) { return new (t || ToolState)(i0.ɵɵinject(i4.ToolService), i0.ɵɵinject(ImportExportState)); };
ToolState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ToolState, factory: ToolState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i4.ToolService }, { type: ImportExportState }]; }, null); })();

let ContextEditorToolComponent = class ContextEditorToolComponent {
    constructor(toolState) {
        this.toolState = toolState;
    }
    submitSuccessed() {
        this.toolState.toolbox.activatePreviousTool();
    }
};
ContextEditorToolComponent.ɵfac = function ContextEditorToolComponent_Factory(t) { return new (t || ContextEditorToolComponent)(i0.ɵɵdirectiveInject(ToolState)); };
ContextEditorToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextEditorToolComponent, selectors: [["igo-context-editor-tool"]], decls: 1, vars: 0, consts: [["igoContextEditBinding", "", 3, "submitSuccessed"]], template: function ContextEditorToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-context-edit", 0);
        i0.ɵɵlistener("submitSuccessed", function ContextEditorToolComponent_Template_igo_context_edit_submitSuccessed_0_listener() { return ctx.submitSuccessed(); });
        i0.ɵɵelementEnd();
    } }, directives: [i1.ContextEditComponent, i1.ContextEditBindingDirective], encapsulation: 2 });
ContextEditorToolComponent = __decorate([
    ToolComponent({
        name: 'contextEditor',
        title: 'igo.integration.tools.contexts',
        icon: 'star',
        parent: 'contextManager'
    })
], ContextEditorToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextEditorToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-editor-tool',
                templateUrl: './context-editor-tool.component.html'
            }]
    }], function () { return [{ type: ToolState }]; }, null); })();

// import { BehaviorSubject } from 'rxjs';
/**
 * Service that holds the state of the map module
 */
class MapState {
    constructor(mapService, projectionService // Don't remove this or it'll never be injected
    ) {
        this.mapService = mapService;
        this.projectionService = projectionService;
        this._map = new IgoMap({
            controls: {
                scaleLine: true,
                attribution: {
                    collapsed: true
                }
            }
        });
        this.mapService.setMap(this.map);
    }
    // public mapCenter$ = new BehaviorSubject<boolean>(false);
    get showAllLegendsValue() {
        return this._legendToolShowAll;
    }
    set showAllLegendsValue(value) {
        this._legendToolShowAll = value;
    }
    /**
     * Active map
     */
    get map() { return this._map; }
}
MapState.ɵfac = function MapState_Factory(t) { return new (t || MapState)(i0.ɵɵinject(i1$1.MapService), i0.ɵɵinject(i1$1.ProjectionService)); };
MapState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MapState, factory: MapState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1$1.MapService }, { type: i1$1.ProjectionService }]; }, null); })();

let ContextManagerToolComponent = class ContextManagerToolComponent {
    constructor(toolState, mapState) {
        this.toolState = toolState;
        this.mapState = mapState;
        this.toolToOpenOnContextChange = 'mapTools';
    }
    get map() { return this.mapState.map; }
    editContext() {
        this.toolState.toolbox.activateTool('contextEditor');
    }
    managePermissions() {
        this.toolState.toolbox.activateTool('contextPermissionManager');
    }
};
ContextManagerToolComponent.ɵfac = function ContextManagerToolComponent_Factory(t) { return new (t || ContextManagerToolComponent)(i0.ɵɵdirectiveInject(ToolState), i0.ɵɵdirectiveInject(MapState)); };
ContextManagerToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextManagerToolComponent, selectors: [["igo-context-manager-tool"]], inputs: { toolToOpenOnContextChange: "toolToOpenOnContextChange" }, decls: 1, vars: 1, consts: [["igoContextListBinding", "", 3, "map", "edit", "managePermissions"]], template: function ContextManagerToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-context-list", 0);
        i0.ɵɵlistener("edit", function ContextManagerToolComponent_Template_igo_context_list_edit_0_listener() { return ctx.editContext(); })("managePermissions", function ContextManagerToolComponent_Template_igo_context_list_managePermissions_0_listener() { return ctx.managePermissions(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("map", ctx.map);
    } }, directives: [i1.ContextListComponent, i1.ContextListBindingDirective], encapsulation: 2 });
ContextManagerToolComponent = __decorate([
    ToolComponent({
        name: 'contextManager',
        title: 'igo.integration.tools.contexts',
        icon: 'star'
    })
], ContextManagerToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextManagerToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-manager-tool',
                templateUrl: './context-manager-tool.component.html'
            }]
    }], function () { return [{ type: ToolState }, { type: MapState }]; }, { toolToOpenOnContextChange: [{
            type: Input
        }] }); })();

let ContextPermissionManagerToolComponent = class ContextPermissionManagerToolComponent {
};
ContextPermissionManagerToolComponent.ɵfac = function ContextPermissionManagerToolComponent_Factory(t) { return new (t || ContextPermissionManagerToolComponent)(); };
ContextPermissionManagerToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextPermissionManagerToolComponent, selectors: [["igo-context-permission-manager-tool"]], decls: 1, vars: 0, consts: [["igoContextPermissionsBinding", ""]], template: function ContextPermissionManagerToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-context-permissions", 0);
    } }, directives: [i1.ContextPermissionsComponent, i1.ContextPermissionsBindingDirective], encapsulation: 2 });
ContextPermissionManagerToolComponent = __decorate([
    ToolComponent({
        name: 'contextPermissionManager',
        title: 'igo.integration.tools.contexts',
        icon: 'star',
        parent: 'contextManager'
    })
], ContextPermissionManagerToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextPermissionManagerToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-permission-manager-tool',
                templateUrl: './context-permission-manager-tool.component.html'
            }]
    }], null, null); })();

/**
 * Service that holds the state of layer list tool values
 */
class LayerListToolState {
    constructor() {
        this.keyword$ = new BehaviorSubject('');
        this.sortAlpha$ = new BehaviorSubject(undefined);
        this.onlyVisible$ = new BehaviorSubject(undefined);
        this.selectedTab$ = new BehaviorSubject(undefined);
    }
    setKeyword(keyword) {
        this.keyword$.next(keyword);
    }
    setSortAlpha(sort) {
        this.sortAlpha$.next(sort);
    }
    setOnlyVisible(onlyVisible) {
        this.onlyVisible$.next(onlyVisible);
    }
    setSelectedTab(tab) {
        this.selectedTab$.next(tab);
    }
    getLayerListControls() {
        return {
            keyword: this.keyword$.value,
            onlyVisible: this.onlyVisible$.value,
            sortAlpha: this.sortAlpha$.value
        };
    }
}
LayerListToolState.ɵfac = function LayerListToolState_Factory(t) { return new (t || LayerListToolState)(); };
LayerListToolState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LayerListToolState, factory: LayerListToolState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerListToolState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

let ContextShareToolComponent = class ContextShareToolComponent {
    constructor(mapState, layerListToolState) {
        this.mapState = mapState;
        this.layerListToolState = layerListToolState;
    }
    get map() { return this.mapState.map; }
    get layerListControls() { return this.layerListToolState.getLayerListControls(); }
};
ContextShareToolComponent.ɵfac = function ContextShareToolComponent_Factory(t) { return new (t || ContextShareToolComponent)(i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(LayerListToolState)); };
ContextShareToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextShareToolComponent, selectors: [["igo-context-share-tool"]], decls: 1, vars: 1, consts: [[3, "map"]], template: function ContextShareToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-share-map", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("map", ctx.map);
    } }, directives: [i1.ShareMapComponent], encapsulation: 2 });
ContextShareToolComponent = __decorate([
    ToolComponent({
        name: 'shareMap',
        title: 'igo.integration.tools.shareMap',
        icon: 'share-variant'
    })
], ContextShareToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextShareToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-share-tool',
                templateUrl: './context-share-tool.component.html'
            }]
    }], function () { return [{ type: MapState }, { type: LayerListToolState }]; }, null); })();

class IgoAppContextModule {
}
IgoAppContextModule.ɵfac = function IgoAppContextModule_Factory(t) { return new (t || IgoAppContextModule)(); };
IgoAppContextModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppContextModule });
IgoAppContextModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoContextModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppContextModule, [{
        type: NgModule,
        args: [{
                imports: [IgoContextModule],
                declarations: [
                    ContextEditorToolComponent,
                    ContextManagerToolComponent,
                    ContextPermissionManagerToolComponent,
                    ContextShareToolComponent
                ],
                exports: [
                    ContextEditorToolComponent,
                    ContextManagerToolComponent,
                    ContextPermissionManagerToolComponent,
                    ContextShareToolComponent
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppContextModule, { declarations: [ContextEditorToolComponent,
        ContextManagerToolComponent,
        ContextPermissionManagerToolComponent,
        ContextShareToolComponent], imports: [IgoContextModule], exports: [ContextEditorToolComponent,
        ContextManagerToolComponent,
        ContextPermissionManagerToolComponent,
        ContextShareToolComponent] }); })();

/**
 * Service that holds the state of the catalog module
 */
class CatalogState {
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
CatalogState.ɵfac = function CatalogState_Factory(t) { return new (t || CatalogState)(i0.ɵɵinject(i2.AuthService)); };
CatalogState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CatalogState, factory: CatalogState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i2.AuthService }]; }, null); })();

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
CatalogLibraryToolComponent.ɵfac = function CatalogLibraryToolComponent_Factory(t) { return new (t || CatalogLibraryToolComponent)(i0.ɵɵdirectiveInject(i1$1.CatalogService), i0.ɵɵdirectiveInject(CatalogState), i0.ɵɵdirectiveInject(ToolState), i0.ɵɵdirectiveInject(i2$1.StorageService)); };
CatalogLibraryToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CatalogLibraryToolComponent, selectors: [["igo-catalog-library-tool"]], inputs: { addCatalogAllowed: "addCatalogAllowed", predefinedCatalogs: "predefinedCatalogs" }, decls: 1, vars: 3, consts: [[3, "predefinedCatalogs", "addCatalogAllowed", "store", "catalogSelectChange"]], template: function CatalogLibraryToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-catalog-library", 0);
        i0.ɵɵlistener("catalogSelectChange", function CatalogLibraryToolComponent_Template_igo_catalog_library_catalogSelectChange_0_listener($event) { return ctx.onCatalogSelectChange($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("predefinedCatalogs", ctx.predefinedCatalogs)("addCatalogAllowed", ctx.addCatalogAllowed)("store", ctx.store);
    } }, directives: [i1$1.CatalogLibaryComponent], encapsulation: 2, changeDetection: 0 });
CatalogLibraryToolComponent = __decorate([
    ToolComponent({
        name: 'catalog',
        title: 'igo.integration.tools.catalog',
        icon: 'layers-plus'
    })
], CatalogLibraryToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogLibraryToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-catalog-library-tool',
                templateUrl: './catalog-library-tool.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1$1.CatalogService }, { type: CatalogState }, { type: ToolState }, { type: i2$1.StorageService }]; }, { addCatalogAllowed: [{
            type: Input
        }], predefinedCatalogs: [{
            type: Input
        }] }); })();

/**
 * @ignore
 */
class IgoAppCatalogLibraryToolModule {
}
IgoAppCatalogLibraryToolModule.ɵfac = function IgoAppCatalogLibraryToolModule_Factory(t) { return new (t || IgoAppCatalogLibraryToolModule)(); };
IgoAppCatalogLibraryToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppCatalogLibraryToolModule });
IgoAppCatalogLibraryToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoCatalogLibraryModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppCatalogLibraryToolModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoCatalogLibraryModule
                ],
                declarations: [CatalogLibraryToolComponent],
                exports: [CatalogLibraryToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppCatalogLibraryToolModule, { declarations: [CatalogLibraryToolComponent], imports: [CommonModule,
        IgoCatalogLibraryModule], exports: [CatalogLibraryToolComponent] }); })();

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
CatalogBrowserToolComponent.ɵfac = function CatalogBrowserToolComponent_Factory(t) { return new (t || CatalogBrowserToolComponent)(i0.ɵɵdirectiveInject(i1$1.CatalogService), i0.ɵɵdirectiveInject(CatalogState), i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(i2.AuthService)); };
CatalogBrowserToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CatalogBrowserToolComponent, selectors: [["igo-catalog-browser-tool"]], inputs: { toggleCollapsedGroup: "toggleCollapsedGroup" }, decls: 2, vars: 3, consts: [[3, "catalog", "store", "map", "toggleCollapsedGroup", 4, "ngIf"], [3, "catalog", "store", "map", "toggleCollapsedGroup"]], template: function CatalogBrowserToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CatalogBrowserToolComponent_igo_catalog_browser_0_Template, 1, 4, "igo-catalog-browser", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.store$));
    } }, directives: [i4$1.NgIf, i1$1.CatalogBrowserComponent], pipes: [i4$1.AsyncPipe], encapsulation: 2, changeDetection: 0 });
CatalogBrowserToolComponent = __decorate([
    ToolComponent({
        name: 'catalogBrowser',
        title: 'igo.integration.tools.catalog',
        icon: 'photo-browser',
        parent: 'catalog'
    })
], CatalogBrowserToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogBrowserToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-catalog-browser-tool',
                templateUrl: './catalog-browser-tool.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1$1.CatalogService }, { type: CatalogState }, { type: MapState }, { type: i2.AuthService }]; }, { toggleCollapsedGroup: [{
            type: Input
        }] }); })();

/**
 * @ignore
 */
class IgoAppCatalogBrowserToolModule {
}
IgoAppCatalogBrowserToolModule.ɵfac = function IgoAppCatalogBrowserToolModule_Factory(t) { return new (t || IgoAppCatalogBrowserToolModule)(); };
IgoAppCatalogBrowserToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppCatalogBrowserToolModule });
IgoAppCatalogBrowserToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoCatalogBrowserModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppCatalogBrowserToolModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoCatalogBrowserModule
                ],
                declarations: [CatalogBrowserToolComponent],
                exports: [CatalogBrowserToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppCatalogBrowserToolModule, { declarations: [CatalogBrowserToolComponent], imports: [CommonModule,
        IgoCatalogBrowserModule], exports: [CatalogBrowserToolComponent] }); })();

class IgoAppCatalogModule {
}
IgoAppCatalogModule.ɵfac = function IgoAppCatalogModule_Factory(t) { return new (t || IgoAppCatalogModule)(); };
IgoAppCatalogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppCatalogModule });
IgoAppCatalogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[], IgoAppCatalogLibraryToolModule,
        IgoAppCatalogBrowserToolModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppCatalogModule, [{
        type: NgModule,
        args: [{
                imports: [],
                exports: [
                    IgoAppCatalogLibraryToolModule,
                    IgoAppCatalogBrowserToolModule
                ],
                declarations: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppCatalogModule, { exports: [IgoAppCatalogLibraryToolModule,
        IgoAppCatalogBrowserToolModule] }); })();

/**
 * Service that holds the state of the direction module
 */
class DirectionState {
    constructor(mapState) {
        this.mapState = mapState;
        this.zoomToActiveRoute$ = new Subject();
        /**
         * Store that holds the stop
         */
        this.stopsStore = new StopsStore([]);
        /**
         * Store that holds the driving stops as feature
         */
        this.stopsFeatureStore = new StopsFeatureStore([], {
            map: this.mapState.map
        });
        /**
         * Store that holds the driving route as feature
         */
        this.routesFeatureStore = new RoutesFeatureStore([], {
            map: this.mapState.map
        });
        this.stepFeatureStore = new StepFeatureStore([], {
            map: this.mapState.map
        });
        this.debounceTime = 200;
        this.mapState.map.ol.once('rendercomplete', () => {
            this.stopsFeatureStore.empty$.subscribe((empty) => {
                var _a;
                if ((_a = this.stopsFeatureStore.layer) === null || _a === void 0 ? void 0 : _a.options) {
                    this.stopsFeatureStore.layer.options.showInLayerList = !empty;
                }
            });
            this.routesFeatureStore.empty$.subscribe((empty) => {
                var _a;
                if ((_a = this.routesFeatureStore.layer) === null || _a === void 0 ? void 0 : _a.options) {
                    this.routesFeatureStore.layer.options.showInLayerList = !empty;
                }
            });
        });
        this.mapState.map.layers$.subscribe(() => {
            if (!this.mapState.map.getLayerById('igo-direction-stops-layer')) {
                this.stopsStore.deleteMany(this.stopsStore.all());
                this.stopsFeatureStore.deleteMany(this.stopsFeatureStore.all()); // not necessary
            }
            if (!this.mapState.map.getLayerById('igo-direction-route-layer')) {
                this.routesFeatureStore.deleteMany(this.routesFeatureStore.all());
            }
        });
    }
}
DirectionState.ɵfac = function DirectionState_Factory(t) { return new (t || DirectionState)(i0.ɵɵinject(MapState)); };
DirectionState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DirectionState, factory: DirectionState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectionState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: MapState }]; }, null); })();

/**
 * Service that holds the state of the context module
 */
class ContextState {
    constructor(contextService, toolService, toolState, languageService) {
        this.contextService = contextService;
        this.toolService = toolService;
        this.toolState = toolState;
        this.languageService = languageService;
        /**
         * Observable of the active context
         */
        this.context$ = new BehaviorSubject(undefined);
        this.contextService.context$.subscribe((context) => {
            this.onContextChange(context);
        });
        this.contextService.toolsChanged$.subscribe((context) => {
            this.updateTools(context);
        });
    }
    /**
     * Set the active context
     * @param context Detailed context
     */
    setContext(context) {
        this.updateTools(context);
        this.context$.next(context);
    }
    /**
     * Update the tool state with the context's tools
     * @param context Detailed context
     */
    updateTools(context) {
        const toolbox = this.toolState.toolbox;
        const tools = [];
        const contextTools = context.tools || [];
        contextTools.forEach((contextTool) => {
            const baseTool = this.toolService.getTool(contextTool.name);
            if (baseTool === undefined) {
                return;
            }
            const options = Object.assign({}, baseTool.options || {}, contextTool.options || {});
            const tool = Object.assign({}, baseTool, contextTool, { options });
            tools.push(tool);
        });
        tools.forEach((tool) => {
            if (tool.parent) {
                const parentIndex = tools.findIndex((el) => el.name === tool.parent);
                if (parentIndex !== -1) {
                    tools[parentIndex].children = [];
                    tools[parentIndex].children.push(tool.name);
                }
            }
        });
        toolbox.setTools(tools);
        toolbox.setToolbar(context.toolbar || []);
        // TODO: This is a patch so the context service can work without
        // injecting the ToolState or without being completely refactored
        this.contextService.setTools([].concat(tools));
        this.contextService.setToolbar(context.toolbar || []);
    }
    /**
     * Set a new context and update the tool state
     * @param context Detailed context
     */
    onContextChange(context) {
        if (context === undefined) {
            return;
        }
        this.setContext(context);
    }
}
ContextState.ɵfac = function ContextState_Factory(t) { return new (t || ContextState)(i0.ɵɵinject(i1.ContextService), i0.ɵɵinject(i4.ToolService), i0.ɵɵinject(ToolState), i0.ɵɵinject(i2$1.LanguageService)); };
ContextState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContextState, factory: ContextState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ContextService }, { type: i4.ToolService }, { type: ToolState }, { type: i2$1.LanguageService }]; }, null); })();

let DirectionsToolComponent = class DirectionsToolComponent {
    constructor(directionState, mapState, languageService, messageService, storageService, contextState, authService) {
        this.directionState = directionState;
        this.mapState = mapState;
        this.languageService = languageService;
        this.messageService = messageService;
        this.storageService = storageService;
        this.contextState = contextState;
        this.authService = authService;
    }
    /**
     * stops
     * @internal
     */
    get stopsStore() { return this.directionState.stopsStore; }
    get debounceTime() { return this.directionState.debounceTime; }
    /**
     * stops
     * @internal
     */
    get stopsFeatureStore() { return this.directionState.stopsFeatureStore; }
    /**
     * routes
     * @internal
     */
    get routesFeatureStore() { return this.directionState.routesFeatureStore; }
    /**
     * step store
     * @internal
     */
    get stepFeatureStore() { return this.directionState.stepFeatureStore; }
    /**
     * step store
     * @internal
     */
    get zoomToActiveRoute$() { return this.directionState.zoomToActiveRoute$; }
    /**
     * Map to measure on
     * @internal
     */
    get map() { return this.mapState.map; }
    ngOnInit() {
        const warningShown = this.storageService.get('direction.warning.shown');
        if (!warningShown) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.integration.directions.warning.title');
            const msg = translate.instant('igo.integration.directions.warning.message');
            this.messageService.info(msg, title, { timeOut: 20000 });
            this.storageService.set('direction.warning.shown', true, StorageScope.SESSION);
        }
        this.contextState.context$.subscribe(c => {
            if (!this.authService.authenticated) {
                this.currentContextUri = c.uri;
            }
        });
    }
};
DirectionsToolComponent.ɵfac = function DirectionsToolComponent_Factory(t) { return new (t || DirectionsToolComponent)(i0.ɵɵdirectiveInject(DirectionState), i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(i2$1.LanguageService), i0.ɵɵdirectiveInject(i2$1.MessageService), i0.ɵɵdirectiveInject(i2$1.StorageService), i0.ɵɵdirectiveInject(ContextState), i0.ɵɵdirectiveInject(i2.AuthService)); };
DirectionsToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DirectionsToolComponent, selectors: [["igo-directions-tool"]], decls: 1, vars: 7, consts: [[3, "contextUri", "debounceTime", "stopsStore", "stopsFeatureStore", "stepFeatureStore", "routesFeatureStore", "zoomToActiveRoute$"]], template: function DirectionsToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-directions", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("contextUri", ctx.currentContextUri)("debounceTime", ctx.debounceTime)("stopsStore", ctx.stopsStore)("stopsFeatureStore", ctx.stopsFeatureStore)("stepFeatureStore", ctx.stepFeatureStore)("routesFeatureStore", ctx.routesFeatureStore)("zoomToActiveRoute$", ctx.zoomToActiveRoute$);
    } }, directives: [i1$1.DirectionsComponent], encapsulation: 2 });
DirectionsToolComponent = __decorate([
    ToolComponent({
        name: 'directions',
        title: 'igo.integration.tools.directions',
        icon: 'directions'
    })
], DirectionsToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectionsToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-directions-tool',
                templateUrl: './directions-tool.component.html'
            }]
    }], function () { return [{ type: DirectionState }, { type: MapState }, { type: i2$1.LanguageService }, { type: i2$1.MessageService }, { type: i2$1.StorageService }, { type: ContextState }, { type: i2.AuthService }]; }, null); })();

class IgoAppDirectionsModule {
    static forRoot() {
        return {
            ngModule: IgoAppDirectionsModule,
            providers: []
        };
    }
}
IgoAppDirectionsModule.ɵfac = function IgoAppDirectionsModule_Factory(t) { return new (t || IgoAppDirectionsModule)(); };
IgoAppDirectionsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppDirectionsModule });
IgoAppDirectionsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoDirectionsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppDirectionsModule, [{
        type: NgModule,
        args: [{
                imports: [IgoDirectionsModule],
                declarations: [DirectionsToolComponent],
                exports: [DirectionsToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppDirectionsModule, { declarations: [DirectionsToolComponent], imports: [IgoDirectionsModule], exports: [DirectionsToolComponent] }); })();

/**
 * Service that holds the state of the measure module
 */
class DrawState {
    constructor(mapState) {
        this.mapState = mapState;
        /**
         * Store that holds the measures
         */
        this.store = new FeatureStore([], {
            map: this.mapState.map
        });
        this.mapState.map.layers$.subscribe(() => {
            if (!this.mapState.map.getLayerById('igo-draw-layer')) {
                this.store.deleteMany(this.store.all());
            }
        });
    }
}
DrawState.ɵfac = function DrawState_Factory(t) { return new (t || DrawState)(i0.ɵɵinject(MapState)); };
DrawState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DrawState, factory: DrawState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: MapState }]; }, null); })();

/**
 * Tool to measure lengths and areas
 */
let DrawingToolComponent = class DrawingToolComponent {
    constructor(drawState, mapState) {
        this.drawState = drawState;
        this.mapState = mapState;
    }
    /**
     * Map to measure on
     * @internal
     */
    get store() { return this.drawState.store; }
    /**
     * Map to measure on
     * @internal
     */
    get map() { return this.mapState.map; }
};
DrawingToolComponent.ɵfac = function DrawingToolComponent_Factory(t) { return new (t || DrawingToolComponent)(i0.ɵɵdirectiveInject(DrawState), i0.ɵɵdirectiveInject(MapState)); };
DrawingToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawingToolComponent, selectors: [["igo-drawing-tool"]], decls: 1, vars: 2, consts: [[3, "store", "map"]], template: function DrawingToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-draw", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("store", ctx.store)("map", ctx.map);
    } }, directives: [i1$1.DrawComponent], encapsulation: 2, changeDetection: 0 });
DrawingToolComponent = __decorate([
    ToolComponent({
        name: 'draw',
        title: 'igo.integration.tools.draw',
        icon: 'draw'
    })
], DrawingToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawingToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-drawing-tool',
                templateUrl: './drawing-tool.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: DrawState }, { type: MapState }]; }, null); })();

class IgoAppDrawModule {
}
IgoAppDrawModule.ɵfac = function IgoAppDrawModule_Factory(t) { return new (t || IgoAppDrawModule)(); };
IgoAppDrawModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppDrawModule });
IgoAppDrawModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoDrawingToolModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppDrawModule, [{
        type: NgModule,
        args: [{
                imports: [IgoDrawingToolModule],
                declarations: [DrawingToolComponent],
                exports: [
                    DrawingToolComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppDrawModule, { declarations: [DrawingToolComponent], imports: [IgoDrawingToolModule], exports: [DrawingToolComponent] }); })();

function handleZoomAuto(workspace, storageService) {
    const zoomStrategy = workspace.entityStore
        .getStrategyOfType(FeatureStoreSelectionStrategy);
    zoomStrategy.setMotion(storageService.get('zoomAuto') ? FeatureMotion.Default : FeatureMotion.None);
}

/**
 * Service that holds the state of storage service
 */
class StorageState {
    constructor(igoStorageService) {
        this.igoStorageService = igoStorageService;
    }
    get storageService() {
        return this.igoStorageService;
    }
}
StorageState.ɵfac = function StorageState_Factory(t) { return new (t || StorageState)(i0.ɵɵinject(i2$1.StorageService)); };
StorageState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StorageState, factory: StorageState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StorageState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i2$1.StorageService }]; }, null); })();

class FeatureActionsService {
    constructor(storageState, languageService, toolState, mediaService) {
        this.storageState = storageState;
        this.languageService = languageService;
        this.toolState = toolState;
        this.mediaService = mediaService;
        this.maximize$ = new BehaviorSubject(this.storageService.get('workspaceMaximize'));
        this.zoomAuto$ = new BehaviorSubject(false);
    }
    get storageService() {
        return this.storageState.storageService;
    }
    get zoomAuto() {
        return this.storageService.get('zoomAuto');
    }
    ngOnDestroy() {
        if (this.storageChange$$) {
            this.storageChange$$.unsubscribe();
        }
    }
    loadActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
        const actions = this.buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$);
        workspace.actionStore.load(actions);
    }
    buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
        this.zoomAuto$.next(this.zoomAuto);
        this.storageChange$$ = this.storageService.storageChange$
            .pipe(skipWhile((storageChange) => storageChange.key !== 'zoomAuto' || storageChange.event === StorageServiceEventEnum.CLEARED))
            .subscribe(() => {
            this.zoomAuto$.next(this.zoomAuto);
            handleZoomAuto(workspace, this.storageService);
        });
        return [
            {
                id: 'zoomAuto',
                checkbox: true,
                title: 'igo.integration.workspace.zoomAuto.title',
                tooltip: 'igo.integration.workspace.zoomAuto.tooltip',
                checkCondition: this.zoomAuto$,
                handler: () => {
                    handleZoomAuto(workspace, this.storageService);
                    this.storageService.set('zoomAuto', !this.storageService.get('zoomAuto'));
                }
            },
            {
                id: 'filterInMapExtent',
                checkbox: true,
                title: 'igo.integration.workspace.inMapExtent.title',
                tooltip: mapExtentStrategyActiveToolTip(workspace),
                checkCondition: rowsInMapExtentCheckCondition$,
                handler: () => rowsInMapExtentCheckCondition$.next(!rowsInMapExtentCheckCondition$.value)
            },
            {
                id: 'selectedOnly',
                checkbox: true,
                title: 'igo.integration.workspace.selected.title',
                tooltip: 'igo.integration.workspace.selected.tooltip',
                checkCondition: selectOnlyCheckCondition$,
                handler: () => selectOnlyCheckCondition$.next(!selectOnlyCheckCondition$.value)
            },
            {
                id: 'clearselection',
                icon: 'select-off',
                title: 'igo.integration.workspace.clearSelection.title',
                tooltip: 'igo.integration.workspace.clearSelection.tooltip',
                handler: (ws) => {
                    ws.entityStore.state.updateMany(ws.entityStore.view.all(), {
                        selected: false
                    });
                },
                args: [workspace],
                availability: (ws) => noElementSelected(ws)
            },
            {
                id: 'featureDownload',
                icon: 'file-export',
                title: 'igo.integration.workspace.download.title',
                tooltip: 'igo.integration.workspace.download.tooltip',
                handler: (ws) => {
                    const filterStrategy = ws.entityStore.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
                    const filterSelectionStrategy = ws.entityStore.getStrategyOfType(EntityStoreFilterSelectionStrategy);
                    const layersWithSelection = filterSelectionStrategy.active
                        ? [ws.layer.id]
                        : [];
                    this.toolState.toolToActivateFromOptions({
                        tool: 'importExport',
                        options: {
                            layers: [ws.layer.id],
                            featureInMapExtent: filterStrategy.active,
                            layersWithSelection
                        }
                    });
                },
                args: [workspace]
            },
            {
                id: 'maximize',
                title: this.languageService.translate.instant('igo.integration.workspace.maximize'),
                tooltip: this.languageService.translate.instant('igo.integration.workspace.maximizeTooltip'),
                icon: 'resize',
                display: () => {
                    return this.maximize$.pipe(map((v) => !v && !this.mediaService.isMobile()));
                },
                handler: () => {
                    if (!this.mediaService.isMobile()) {
                        this.maximize$.next(true);
                    }
                },
            },
            {
                id: 'standardExtent',
                title: this.languageService.translate.instant('igo.integration.workspace.standardExtent'),
                tooltip: this.languageService.translate.instant('igo.integration.workspace.standardExtentTooltip'),
                icon: 'resize',
                display: () => {
                    return this.maximize$.pipe(map((v) => v && !this.mediaService.isMobile()));
                },
                handler: () => {
                    this.maximize$.next(false);
                }
            }
        ];
    }
}
FeatureActionsService.ɵfac = function FeatureActionsService_Factory(t) { return new (t || FeatureActionsService)(i0.ɵɵinject(StorageState), i0.ɵɵinject(i2$1.LanguageService), i0.ɵɵinject(ToolState), i0.ɵɵinject(i2$1.MediaService)); };
FeatureActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FeatureActionsService, factory: FeatureActionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureActionsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: StorageState }, { type: i2$1.LanguageService }, { type: ToolState }, { type: i2$1.MediaService }]; }, null); })();

class WfsActionsService {
    constructor(ogcFilterWidget, storageState, languageService, mediaService, toolState) {
        this.ogcFilterWidget = ogcFilterWidget;
        this.storageState = storageState;
        this.languageService = languageService;
        this.mediaService = mediaService;
        this.toolState = toolState;
        this.maximize$ = new BehaviorSubject(this.storageService.get('workspaceMaximize'));
        this.selectOnlyCheckCondition$ = new BehaviorSubject(false);
        // rowsInMapExtentCheckCondition$: BehaviorSubject<boolean> = new BehaviorSubject(true);
        this.zoomAuto$ = new BehaviorSubject(false);
    }
    get storageService() {
        return this.storageState.storageService;
    }
    get zoomAuto() {
        return this.storageService.get('zoomAuto');
    }
    ngOnDestroy() {
        if (this.storageChange$$) {
            this.storageChange$$.unsubscribe();
        }
    }
    loadActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
        const actions = this.buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$);
        workspace.actionStore.load(actions);
    }
    buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
        var _a, _b;
        this.zoomAuto$.next(this.zoomAuto);
        this.storageChange$$ = this.storageService.storageChange$
            .pipe(skipWhile((storageChange) => (storageChange === null || storageChange === void 0 ? void 0 : storageChange.key) !== 'zoomAuto' || (storageChange === null || storageChange === void 0 ? void 0 : storageChange.event) === StorageServiceEventEnum.CLEARED))
            .subscribe(() => {
            this.zoomAuto$.next(this.zoomAuto);
            handleZoomAuto(workspace, this.storageService);
        });
        const actions = [
            {
                id: 'zoomAuto',
                checkbox: true,
                title: 'igo.integration.workspace.zoomAuto.title',
                tooltip: 'igo.integration.workspace.zoomAuto.tooltip',
                checkCondition: this.zoomAuto$,
                handler: () => {
                    handleZoomAuto(workspace, this.storageService);
                    this.storageService.set('zoomAuto', !this.storageService.get('zoomAuto'));
                }
            },
            {
                id: 'filterInMapExtent',
                checkbox: true,
                title: 'igo.integration.workspace.inMapExtent.title',
                tooltip: mapExtentStrategyActiveToolTip(workspace),
                checkCondition: rowsInMapExtentCheckCondition$,
                handler: () => rowsInMapExtentCheckCondition$.next(!rowsInMapExtentCheckCondition$.value)
            },
            {
                id: 'selectedOnly',
                checkbox: true,
                title: 'igo.integration.workspace.selected.title',
                tooltip: 'igo.integration.workspace.selected.title',
                checkCondition: selectOnlyCheckCondition$,
                handler: () => selectOnlyCheckCondition$.next(!selectOnlyCheckCondition$.value)
            },
            {
                id: 'clearselection',
                icon: 'select-off',
                title: 'igo.integration.workspace.clearSelection.title',
                tooltip: 'igo.integration.workspace.clearSelection.tooltip',
                handler: (ws) => {
                    ws.entityStore.state.updateMany(ws.entityStore.view.all(), { selected: false });
                },
                args: [workspace],
                availability: (ws) => noElementSelected(ws)
            },
            {
                id: 'wfsDownload',
                icon: 'file-export',
                title: 'igo.integration.workspace.download.title',
                tooltip: 'igo.integration.workspace.download.tooltip',
                handler: (ws) => {
                    const filterStrategy = ws.entityStore.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
                    const filterSelectionStrategy = ws.entityStore.getStrategyOfType(EntityStoreFilterSelectionStrategy);
                    const layersWithSelection = filterSelectionStrategy.active ? [ws.layer.id] : [];
                    this.toolState.toolToActivateFromOptions({
                        tool: 'importExport',
                        options: { layers: [ws.layer.id], featureInMapExtent: filterStrategy.active, layersWithSelection }
                    });
                },
                args: [workspace]
            },
            {
                id: 'ogcFilter',
                icon: 'filter',
                title: 'igo.integration.workspace.ogcFilter.title',
                tooltip: 'igo.integration.workspace.ogcFilter.tooltip',
                handler: (widget, ws) => {
                    ws.activateWidget(widget, {
                        map: ws.map,
                        layer: ws.layer
                    });
                },
                args: [this.ogcFilterWidget, workspace]
            },
            {
                id: 'maximize',
                title: this.languageService.translate.instant('igo.integration.workspace.maximize'),
                tooltip: this.languageService.translate.instant('igo.integration.workspace.maximizeTooltip'),
                icon: 'resize',
                display: () => {
                    return this.maximize$.pipe(map((v) => !v && !this.mediaService.isMobile()));
                },
                handler: () => {
                    if (!this.mediaService.isMobile()) {
                        this.maximize$.next(true);
                    }
                },
            },
            {
                id: 'standardExtent',
                title: this.languageService.translate.instant('igo.integration.workspace.standardExtent'),
                tooltip: this.languageService.translate.instant('igo.integration.workspace.standardExtentTooltip'),
                icon: 'resize',
                display: () => {
                    return this.maximize$.pipe(map((v) => v && !this.mediaService.isMobile()));
                },
                handler: () => {
                    this.maximize$.next(false);
                }
            }
        ];
        return ((_b = (_a = workspace.layer.dataSource.ogcFilters$) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.enabled) ?
            actions : actions.filter(action => action.id !== 'ogcFilter');
    }
}
WfsActionsService.ɵfac = function WfsActionsService_Factory(t) { return new (t || WfsActionsService)(i0.ɵɵinject(OgcFilterWidget), i0.ɵɵinject(StorageState), i0.ɵɵinject(i2$1.LanguageService), i0.ɵɵinject(i2$1.MediaService), i0.ɵɵinject(ToolState)); };
WfsActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WfsActionsService, factory: WfsActionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WfsActionsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i4.Widget, decorators: [{
                type: Inject,
                args: [OgcFilterWidget]
            }] }, { type: StorageState }, { type: i2$1.LanguageService }, { type: i2$1.MediaService }, { type: ToolState }]; }, null); })();

class EditionActionsService {
    constructor(ogcFilterWidget, storageState, languageService, mediaService, toolState) {
        this.ogcFilterWidget = ogcFilterWidget;
        this.storageState = storageState;
        this.languageService = languageService;
        this.mediaService = mediaService;
        this.toolState = toolState;
        this.maximize$ = new BehaviorSubject(this.storageService.get('workspaceMaximize'));
        this.zoomAuto$ = new BehaviorSubject(false);
    }
    get storageService() {
        return this.storageState.storageService;
    }
    get zoomAuto() {
        return this.storageService.get('zoomAuto');
    }
    ngOnDestroy() {
        if (this.storageChange$$) {
            this.storageChange$$.unsubscribe();
        }
    }
    loadActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
        const actions = this.buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$);
        workspace.actionStore.load(actions);
    }
    buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
        var _a, _b;
        this.zoomAuto$.next(this.zoomAuto);
        this.storageChange$$ = this.storageService.storageChange$
            .pipe(skipWhile((storageChange) => (storageChange === null || storageChange === void 0 ? void 0 : storageChange.key) !== 'zoomAuto' || (storageChange === null || storageChange === void 0 ? void 0 : storageChange.event) === StorageServiceEventEnum.CLEARED))
            .subscribe(() => {
            this.zoomAuto$.next(this.zoomAuto);
            handleZoomAuto(workspace, this.storageService);
        });
        const actions = [
            {
                id: 'zoomAuto',
                checkbox: true,
                title: 'igo.integration.workspace.zoomAuto.title',
                tooltip: 'igo.integration.workspace.zoomAuto.tooltip',
                checkCondition: this.zoomAuto$,
                handler: () => {
                    handleZoomAuto(workspace, this.storageService);
                    this.storageService.set('zoomAuto', !this.storageService.get('zoomAuto'));
                }
            },
            {
                id: 'filterInMapExtent',
                checkbox: true,
                title: 'igo.integration.workspace.inMapExtent.title',
                tooltip: mapExtentStrategyActiveToolTip(workspace),
                checkCondition: rowsInMapExtentCheckCondition$,
                handler: () => rowsInMapExtentCheckCondition$.next(!rowsInMapExtentCheckCondition$.value)
            },
            {
                id: 'selectedOnly',
                checkbox: true,
                title: 'igo.integration.workspace.selected.title',
                tooltip: 'igo.integration.workspace.selected.title',
                checkCondition: selectOnlyCheckCondition$,
                handler: () => selectOnlyCheckCondition$.next(!selectOnlyCheckCondition$.value)
            },
            {
                id: 'clearselection',
                icon: 'select-off',
                title: 'igo.integration.workspace.clearSelection.title',
                tooltip: 'igo.integration.workspace.clearSelection.tooltip',
                handler: (ws) => {
                    ws.entityStore.state.updateMany(ws.entityStore.view.all(), { selected: false });
                },
                args: [workspace],
                availability: (ws) => noElementSelected(ws)
            },
            {
                id: 'wfsDownload',
                icon: 'file-export',
                title: 'igo.integration.workspace.download.title',
                tooltip: 'igo.integration.workspace.download.tooltip',
                handler: (ws) => {
                    const filterStrategy = ws.entityStore.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
                    const filterSelectionStrategy = ws.entityStore.getStrategyOfType(EntityStoreFilterSelectionStrategy);
                    const layersWithSelection = filterSelectionStrategy.active ? [ws.layer.id] : [];
                    this.toolState.toolToActivateFromOptions({
                        tool: 'importExport',
                        options: { layers: [ws.layer.id], featureInMapExtent: filterStrategy.active, layersWithSelection }
                    });
                },
                args: [workspace]
            },
            {
                id: 'ogcFilter',
                icon: 'filter',
                title: 'igo.integration.workspace.ogcFilter.title',
                tooltip: 'igo.integration.workspace.ogcFilter.tooltip',
                handler: (widget, ws) => {
                    ws.activateWidget(widget, {
                        map: ws.map,
                        layer: ws.layer
                    });
                },
                args: [this.ogcFilterWidget, workspace]
            },
            {
                id: 'maximize',
                title: this.languageService.translate.instant('igo.integration.workspace.maximize'),
                tooltip: this.languageService.translate.instant('igo.integration.workspace.maximizeTooltip'),
                icon: 'resize',
                display: () => {
                    return this.maximize$.pipe(map((v) => !v && !this.mediaService.isMobile()));
                },
                handler: () => {
                    if (!this.mediaService.isMobile()) {
                        this.maximize$.next(true);
                    }
                },
            },
            {
                id: 'standardExtent',
                title: this.languageService.translate.instant('igo.integration.workspace.standardExtent'),
                tooltip: this.languageService.translate.instant('igo.integration.workspace.standardExtentTooltip'),
                icon: 'resize',
                display: () => {
                    return this.maximize$.pipe(map((v) => v && !this.mediaService.isMobile()));
                },
                handler: () => {
                    this.maximize$.next(false);
                }
            }
        ];
        return ((_b = (_a = workspace.layer.dataSource.ogcFilters$) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.enabled) ?
            actions : actions.filter(action => action.id !== 'ogcFilter');
    }
}
EditionActionsService.ɵfac = function EditionActionsService_Factory(t) { return new (t || EditionActionsService)(i0.ɵɵinject(OgcFilterWidget), i0.ɵɵinject(StorageState), i0.ɵɵinject(i2$1.LanguageService), i0.ɵɵinject(i2$1.MediaService), i0.ɵɵinject(ToolState)); };
EditionActionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EditionActionsService, factory: EditionActionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditionActionsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i4.Widget, decorators: [{
                type: Inject,
                args: [OgcFilterWidget]
            }] }, { type: StorageState }, { type: i2$1.LanguageService }, { type: i2$1.MediaService }, { type: ToolState }]; }, null); })();

/**
 * Service that holds the state of the workspace module
 */
class WorkspaceState {
    constructor(featureActionsService, wfsActionsService, editionActionsService, storageService) {
        this.featureActionsService = featureActionsService;
        this.wfsActionsService = wfsActionsService;
        this.editionActionsService = editionActionsService;
        this.storageService = storageService;
        this.workspacePanelExpanded = false;
        this.workspaceEnabled$ = new BehaviorSubject(false);
        this.rowsInMapExtentCheckCondition$ = new BehaviorSubject(true);
        this.selectOnlyCheckCondition$ = new BehaviorSubject(false);
        this.workspaceMaximize$ = new BehaviorSubject(this.storageService.get('workspaceMaximize'));
        this.actionMaximize$$ = [];
        /** Active widget observable. Only one may be active for all available workspaces */
        this.activeWorkspaceWidget$ = new BehaviorSubject(undefined);
        /**
         * Observable of the active workspace
         */
        this.workspace$ = new BehaviorSubject(undefined);
        this.initWorkspaces();
    }
    /**
     * Store that holds all the available workspaces
     */
    get store() { return this._store; }
    /**
     * Initialize the workspace store. Each time a workspace is activated,
     * subscribe to it's active widget. Tracking the active widget is useful
     * to make sure only one widget is active at a time.
     */
    initWorkspaces() {
        this._store = new WorkspaceStore([]);
        this._store.stateView
            .firstBy$((record) => record.state.active === true)
            .subscribe((record) => {
            const workspace = record ? record.entity : undefined;
            this.workspace$.next(workspace);
        });
        this._store.stateView.all$()
            .subscribe((workspaces) => {
            workspaces.map((wks) => {
                if (wks.entity.actionStore.empty) {
                    if (wks.entity instanceof WfsWorkspace) {
                        this.wfsActionsService.loadActions(wks.entity, this.rowsInMapExtentCheckCondition$, this.selectOnlyCheckCondition$);
                    }
                    else if (wks.entity instanceof FeatureWorkspace) {
                        this.featureActionsService.loadActions(wks.entity, this.rowsInMapExtentCheckCondition$, this.selectOnlyCheckCondition$);
                    }
                    else if (wks.entity instanceof EditionWorkspace) {
                        this.editionActionsService.loadActions(wks.entity, this.rowsInMapExtentCheckCondition$, this.selectOnlyCheckCondition$);
                    }
                }
            });
        });
        this.actionMaximize$$.push(this.featureActionsService.maximize$.subscribe(maximized => {
            this.setWorkspaceIsMaximized(maximized);
        }));
        this.actionMaximize$$.push(this.wfsActionsService.maximize$.subscribe(maximized => {
            this.setWorkspaceIsMaximized(maximized);
        }));
        this.actionMaximize$$.push(this.editionActionsService.maximize$.subscribe(maximized => {
            this.setWorkspaceIsMaximized(maximized);
        }));
        this.activeWorkspace$$ = this.workspace$
            .subscribe((workspace) => {
            if (this.activeWorkspaceWidget$$ !== undefined) {
                this.activeWorkspaceWidget$$.unsubscribe();
                this.activeWorkspaceWidget$$ = undefined;
            }
            if (workspace !== undefined) {
                this.activeWorkspaceWidget$$ = workspace.widget$
                    .subscribe((widget) => this.activeWorkspaceWidget$.next(widget));
            }
        });
        this.rowsInMapExtentCheckCondition$$ = this.rowsInMapExtentCheckCondition$.subscribe((rowsInMapExtent) => {
            this._store.stateView.all().map((wks) => {
                if (!wks.entity.actionStore.empty) {
                    const filterStrategy = wks.entity.entityStore.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
                    if (filterStrategy) {
                        if (rowsInMapExtent) {
                            filterStrategy.activate();
                        }
                        else {
                            filterStrategy.deactivate();
                        }
                    }
                }
            });
        });
        this.selectOnlyCheckCondition$$ = this.selectOnlyCheckCondition$.subscribe((selectOnly) => {
            this._store.stateView.all().map((wks) => {
                if (!wks.entity.actionStore.empty) {
                    const filterStrategy = wks.entity.entityStore.getStrategyOfType(EntityStoreFilterSelectionStrategy);
                    if (filterStrategy) {
                        if (selectOnly) {
                            filterStrategy.activate();
                        }
                        else {
                            filterStrategy.deactivate();
                        }
                    }
                }
            });
        });
    }
    setWorkspaceIsMaximized(maximized) {
        this.storageService.set('workspaceMaximize', maximized);
        this.workspaceMaximize$.next(maximized);
    }
    setActiveWorkspaceById(id) {
        const wksFromId = this.store
            .all()
            .find(workspace => workspace.id === id);
        if (wksFromId) {
            this.store.activateWorkspace(wksFromId);
        }
    }
    setActiveWorkspaceByTitle(title) {
        const wksFromTitle = this.store
            .all()
            .find(workspace => workspace.title === title);
        if (wksFromTitle) {
            this.store.activateWorkspace(wksFromTitle);
        }
    }
    /**
     * Teardown all the workspaces
     * @internal
     */
    ngOnDestroy() {
        this.teardownWorkspaces();
        this.actionMaximize$$.map(a => a.unsubscribe());
        if (this.rowsInMapExtentCheckCondition$$) {
            this.selectOnlyCheckCondition$$.unsubscribe();
        }
        if (this.selectOnlyCheckCondition$$) {
            this.selectOnlyCheckCondition$$.unsubscribe();
        }
    }
    /**
     * Teardown the workspace store and any subscribers
     */
    teardownWorkspaces() {
        this.store.clear();
        if (this.activeWorkspaceWidget$$ !== undefined) {
            this.activeWorkspaceWidget$$.unsubscribe();
        }
        if (this.activeWorkspace$$ !== undefined) {
            this.activeWorkspace$$.unsubscribe();
        }
    }
}
WorkspaceState.ɵfac = function WorkspaceState_Factory(t) { return new (t || WorkspaceState)(i0.ɵɵinject(FeatureActionsService), i0.ɵɵinject(WfsActionsService), i0.ɵɵinject(EditionActionsService), i0.ɵɵinject(i2$1.StorageService)); };
WorkspaceState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WorkspaceState, factory: WorkspaceState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkspaceState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: FeatureActionsService }, { type: WfsActionsService }, { type: EditionActionsService }, { type: i2$1.StorageService }]; }, null); })();

function WorkspaceButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function WorkspaceButtonComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.activateWorkspace(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.integration.workspace.toggleWorkspace"))("color", ctx_r0.color);
} }
class WorkspaceButtonComponent {
    constructor(workspaceState) {
        this.workspaceState = workspaceState;
        this.hasWorkspace$ = new BehaviorSubject(false);
        this.layer$ = new BehaviorSubject(undefined);
        this.color = 'primary';
    }
    set layer(value) {
        this._layer = value;
        this.layer$.next(this._layer);
    }
    get layer() {
        return this._layer;
    }
    ngOnInit() {
        this.hasWorkspace$$ = combineLatest([this.workspaceState.workspaceEnabled$, this.layer$])
            .subscribe(bunch => { var _a, _b; return this.hasWorkspace$.next(bunch[0] && ((_b = (_a = bunch[1]) === null || _a === void 0 ? void 0 : _a.options.workspace) === null || _b === void 0 ? void 0 : _b.enabled)); });
    }
    ngOnDestroy() {
        this.hasWorkspace$$.unsubscribe();
    }
    activateWorkspace() {
        if (this.workspaceState.workspace$.value &&
            this.workspaceState.workspace$.value.layer.id === this.layer.id &&
            this.workspaceState.workspacePanelExpanded) {
            this.workspaceState.workspacePanelExpanded = false;
        }
        else {
            this.workspaceState.workspacePanelExpanded = true;
            this.workspaceState.setActiveWorkspaceById(this.layer.id);
        }
    }
}
WorkspaceButtonComponent.ɵfac = function WorkspaceButtonComponent_Factory(t) { return new (t || WorkspaceButtonComponent)(i0.ɵɵdirectiveInject(WorkspaceState)); };
WorkspaceButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WorkspaceButtonComponent, selectors: [["igo-workspace-button"]], inputs: { layer: "layer", color: "color" }, decls: 2, vars: 3, consts: [["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], ["svgIcon", "table"]], template: function WorkspaceButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, WorkspaceButtonComponent_button_0_Template, 3, 4, "button", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.hasWorkspace$));
    } }, directives: [i4$1.NgIf, i3.MatButton, i4$2.MatTooltip, i6.MatIcon], pipes: [i4$1.AsyncPipe, i8.TranslatePipe], styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkspaceButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-workspace-button',
                templateUrl: './workspace-button.component.html',
                styleUrls: ['./workspace-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: WorkspaceState }]; }, { layer: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

class IgoAppWorkspaceModule {
}
IgoAppWorkspaceModule.ɵfac = function IgoAppWorkspaceModule_Factory(t) { return new (t || IgoAppWorkspaceModule)(); };
IgoAppWorkspaceModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppWorkspaceModule });
IgoAppWorkspaceModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppWorkspaceModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTooltipModule,
                    IgoLanguageModule
                ],
                declarations: [WorkspaceButtonComponent],
                exports: [WorkspaceButtonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppWorkspaceModule, { declarations: [WorkspaceButtonComponent], imports: [CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        IgoLanguageModule], exports: [WorkspaceButtonComponent] }); })();

function ImportExportToolComponent_mat_tab_group_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab-group");
    i0.ɵɵelementStart(1, "mat-tab", 3);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementStart(3, "igo-import-export", 4);
    i0.ɵɵlistener("selectMode", function ImportExportToolComponent_mat_tab_group_0_Template_igo_import_export_selectMode_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.modeChanged($event); })("exportOptionsChange", function ImportExportToolComponent_mat_tab_group_0_Template_igo_import_export_exportOptionsChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.exportOptionsChange($event); });
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-tab", 3);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelement(7, "igo-context-import-export", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(2, 9, "igo.integration.importExportTool.importExportData"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("map", ctx_r0.map)("selectFirstProj", ctx_r0.selectFirstProj)("projectionsLimitations", ctx_r0.projectionsLimitations)("store", ctx_r0.workspaceStore)("selectedMode", i0.ɵɵpipeBind1(4, 11, ctx_r0.importExportState.selectedMode$))("exportOptions$", ctx_r0.importExportState.exportOptions$);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(6, 13, "igo.integration.importExportTool.importExportContext"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("map", ctx_r0.map);
} }
function ImportExportToolComponent_igo_import_export_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-import-export", 6);
    i0.ɵɵlistener("selectMode", function ImportExportToolComponent_igo_import_export_1_Template_igo_import_export_selectMode_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.modeChanged($event); })("exportOptionsChange", function ImportExportToolComponent_igo_import_export_1_Template_igo_import_export_exportOptionsChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.exportOptionsChange($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("map", ctx_r1.map)("store", ctx_r1.workspaceStore)("selectedMode", i0.ɵɵpipeBind1(1, 4, ctx_r1.importExportState.selectedMode$))("exportOptions$", ctx_r1.importExportState.exportOptions$);
} }
function ImportExportToolComponent_igo_context_import_export_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-context-import-export", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("map", ctx_r2.map);
} }
let ImportExportToolComponent = class ImportExportToolComponent {
    constructor(mapState, importExportState, workspaceState) {
        this.mapState = mapState;
        this.importExportState = importExportState;
        this.workspaceState = workspaceState;
        this.selectFirstProj = false;
        this.importExportType = ImportExportType.layer;
        this.importExportShowBothType = true;
    }
    /**
     * Map to measure on
     * @internal
     */
    get map() { return this.mapState.map; }
    get workspaceStore() {
        return this.workspaceState.store;
    }
    ngOnInit() {
        this.selectType();
        this.selectMode();
    }
    selectType() {
        if (this.importExportType) {
            this.importExportState.importExportType$.next(this.importExportType);
        }
        const userSelectedType = this.importExportState.importExportType$.value;
        if (userSelectedType !== undefined) {
            this.importExportState.setImportExportType(userSelectedType);
        }
        else {
            this.importExportState.setImportExportType(ImportExportType.layer);
        }
    }
    selectMode() {
        const userSelectedMode = this.importExportState.selectedMode$.value;
        if (userSelectedMode !== undefined) {
            this.importExportState.setMode(userSelectedMode);
        }
        else {
            this.importExportState.setMode(ImportExportMode.import);
        }
    }
    modeChanged(mode) {
        this.importExportState.setMode(mode);
    }
    exportOptionsChange(exportOptions) {
        this.importExportState.setsExportOptions(exportOptions);
    }
    importExportTypeChange(event) {
        this.importExportType = event.value;
    }
};
ImportExportToolComponent.ɵfac = function ImportExportToolComponent_Factory(t) { return new (t || ImportExportToolComponent)(i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(ImportExportState), i0.ɵɵdirectiveInject(WorkspaceState)); };
ImportExportToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImportExportToolComponent, selectors: [["igo-import-export-tool"]], inputs: { projectionsLimitations: "projectionsLimitations", selectFirstProj: "selectFirstProj", importExportType: "importExportType", importExportShowBothType: "importExportShowBothType" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "map", "store", "selectedMode", "exportOptions$", "selectMode", "exportOptionsChange", 4, "ngIf"], [3, "map", 4, "ngIf"], [3, "label"], [3, "map", "selectFirstProj", "projectionsLimitations", "store", "selectedMode", "exportOptions$", "selectMode", "exportOptionsChange"], [3, "map"], [3, "map", "store", "selectedMode", "exportOptions$", "selectMode", "exportOptionsChange"]], template: function ImportExportToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ImportExportToolComponent_mat_tab_group_0_Template, 8, 15, "mat-tab-group", 0);
        i0.ɵɵtemplate(1, ImportExportToolComponent_igo_import_export_1_Template, 2, 6, "igo-import-export", 1);
        i0.ɵɵtemplate(2, ImportExportToolComponent_igo_context_import_export_2_Template, 1, 1, "igo-context-import-export", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.importExportShowBothType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.importExportShowBothType && ctx.importExportType === "layer");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.importExportShowBothType && ctx.importExportType === "context");
    } }, directives: [i4$1.NgIf, i5.MatTabGroup, i5.MatTab, i1$1.ImportExportComponent, i1.ContextImportExportComponent], pipes: [i8.TranslatePipe, i4$1.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
ImportExportToolComponent = __decorate([
    ToolComponent({
        name: 'importExport',
        title: 'igo.integration.tools.importExport',
        icon: 'file-move'
    })
], ImportExportToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportExportToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-import-export-tool',
                templateUrl: './import-export-tool.component.html',
                styleUrls: ['./import-export-tool.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MapState }, { type: ImportExportState }, { type: WorkspaceState }]; }, { projectionsLimitations: [{
            type: Input
        }], selectFirstProj: [{
            type: Input
        }], importExportType: [{
            type: Input
        }], importExportShowBothType: [{
            type: Input
        }] }); })();

class IgoAppImportExportModule {
    static forRoot() {
        return {
            ngModule: IgoAppImportExportModule,
            providers: []
        };
    }
}
IgoAppImportExportModule.ɵfac = function IgoAppImportExportModule_Factory(t) { return new (t || IgoAppImportExportModule)(); };
IgoAppImportExportModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppImportExportModule });
IgoAppImportExportModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            IgoImportExportModule,
            IgoContextImportExportModule,
            CommonModule,
            IgoLanguageModule,
            MatButtonToggleModule,
            MatTabsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppImportExportModule, [{
        type: NgModule,
        args: [{
                imports: [
                    IgoImportExportModule,
                    IgoContextImportExportModule,
                    CommonModule,
                    IgoLanguageModule,
                    MatButtonToggleModule,
                    MatTabsModule
                ],
                declarations: [ImportExportToolComponent],
                exports: [ImportExportToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppImportExportModule, { declarations: [ImportExportToolComponent], imports: [IgoImportExportModule,
        IgoContextImportExportModule,
        CommonModule,
        IgoLanguageModule,
        MatButtonToggleModule,
        MatTabsModule], exports: [ImportExportToolComponent] }); })();

function MapDetailsToolComponent_igo_layer_list_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "igo-workspace-button", 4);
    i0.ɵɵelementStart(1, "igo-export-button", 5);
    i0.ɵɵlistener("click", function MapDetailsToolComponent_igo_layer_list_0_ng_template_1_Template_igo_export_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const layer_r5 = restoredCtx.layer; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.activateExport(layer_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "igo-ogc-filter-button", 6);
    i0.ɵɵelement(3, "igo-time-filter-button", 6);
    i0.ɵɵelement(4, "igo-track-feature-button", 7);
    i0.ɵɵelement(5, "igo-metadata-button", 4);
} if (rf & 2) {
    const layer_r5 = ctx.layer;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("layer", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("header", ctx_r4.ogcButton)("layer", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("header", ctx_r4.timeButton)("layer", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("trackFeature", true)("layer", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", layer_r5);
} }
function MapDetailsToolComponent_igo_layer_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "igo-layer-list", 2);
    i0.ɵɵtemplate(1, MapDetailsToolComponent_igo_layer_list_0_ng_template_1_Template, 6, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("map", ctx_r0.map)("excludeBaseLayers", ctx_r0.excludeBaseLayers)("layerFilterAndSortOptions", ctx_r0.layerFilterAndSortOptions)("expandLegendOfVisibleLayers", ctx_r0.expandLegendOfVisibleLayers)("toggleLegendOnVisibilityChange", ctx_r0.toggleLegendOnVisibilityChange)("updateLegendOnResolutionChange", ctx_r0.updateLegendOnResolutionChange)("queryBadge", ctx_r0.queryBadge);
} }
function MapDetailsToolComponent_ng_template_2_mat_list_0_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.integration.mapTool.customize"), "");
} }
function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 12);
    i0.ɵɵelement(3, "path", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 14);
    i0.ɵɵlistener("click", function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_5_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.searchEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.search-tool"), " ");
} }
function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 12);
    i0.ɵɵelement(3, "path", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 16);
    i0.ɵɵlistener("click", function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_6_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.catalogEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.catalog-tool"), " ");
} }
function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 12);
    i0.ɵɵelement(3, "path", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 18);
    i0.ɵɵlistener("click", function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_7_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.contextEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.context-tool"), " ");
} }
function MapDetailsToolComponent_ng_template_2_mat_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵelementStart(1, "p", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MapDetailsToolComponent_ng_template_2_mat_list_0_p_4_Template, 3, 3, "p", 10);
    i0.ɵɵtemplate(5, MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_5_Template, 7, 3, "mat-list-item", 8);
    i0.ɵɵtemplate(6, MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_6_Template, 7, 3, "mat-list-item", 8);
    i0.ɵɵtemplate(7, MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_7_Template, 7, 3, "mat-list-item", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "igo.integration.mapTool.empty"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && (ctx_r8.searchToolInToolbar || ctx_r8.catalogToolInToolbar || ctx_r8.contextToolInToolbar));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.searchToolInToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.catalogToolInToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.contextToolInToolbar);
} }
function MapDetailsToolComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MapDetailsToolComponent_ng_template_2_mat_list_0_Template, 8, 7, "mat-list", 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2.delayedShowEmptyMapContent);
} }
let MapDetailsToolComponent = class MapDetailsToolComponent {
    constructor(mapState, toolState, searchSourceService, cdRef, importExportState) {
        this.mapState = mapState;
        this.toolState = toolState;
        this.searchSourceService = searchSourceService;
        this.cdRef = cdRef;
        this.importExportState = importExportState;
        this.delayedShowEmptyMapContent = false;
        this.toggleLegendOnVisibilityChange = false;
        this.expandLegendOfVisibleLayers = false;
        this.updateLegendOnResolutionChange = false;
        this.ogcButton = true;
        this.timeButton = true;
        this.layerListControls = {};
        this.queryBadge = false;
        this.layerAdditionAllowed = true;
    }
    get map() {
        return this.mapState.map;
    }
    get layers$() {
        return this.map.layers$.pipe(map((layers) => layers.filter((layer) => layer.showInLayerList !== false &&
            (!this.excludeBaseLayers || !layer.baseLayer))));
    }
    get excludeBaseLayers() {
        return this.layerListControls.excludeBaseLayers || false;
    }
    get layerFilterAndSortOptions() {
        const filterSortOptions = Object.assign({
            showToolbar: LayerListControlsEnum.default
        }, this.layerListControls);
        switch (this.layerListControls.showToolbar) {
            case LayerListControlsEnum.always:
                filterSortOptions.showToolbar = LayerListControlsEnum.always;
                break;
            case LayerListControlsEnum.never:
                filterSortOptions.showToolbar = LayerListControlsEnum.never;
                break;
            default:
                break;
        }
        return filterSortOptions;
    }
    get searchToolInToolbar() {
        return (this.toolState.toolbox.getToolbar().indexOf('searchResults') !== -1 &&
            this.searchSourceService
                .getSources()
                .filter(sourceCanSearch)
                .filter((s) => s.available && s.getType() === 'Layer').length > 0);
    }
    get catalogToolInToolbar() {
        return this.toolState.toolbox.getToolbar().indexOf('catalog') !== -1;
    }
    get contextToolInToolbar() {
        return this.toolState.toolbox.getToolbar().indexOf('contextManager') !== -1;
    }
    ngOnInit() {
        // prevent message to be shown too quickly. Waiting for layers
        setTimeout(() => {
            this.delayedShowEmptyMapContent = true;
            this.cdRef.detectChanges();
        }, 250);
    }
    searchEmit() {
        this.toolState.toolbox.activateTool('searchResults');
    }
    catalogEmit() {
        this.toolState.toolbox.activateTool('catalog');
    }
    contextEmit() {
        this.toolState.toolbox.activateTool('contextManager');
    }
    activateExport(layer) {
        var _a;
        let id = layer.id;
        if ((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.workspaceId) {
            id = layer.options.workspace.workspaceId !== layer.id ? layer.options.workspace.workspaceId : layer.id;
        }
        this.importExportState.setsExportOptions({ layers: [id] });
        this.importExportState.setMode(ImportExportMode.export);
        this.toolState.toolbox.activateTool('importExport');
    }
};
MapDetailsToolComponent.ɵfac = function MapDetailsToolComponent_Factory(t) { return new (t || MapDetailsToolComponent)(i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(ToolState), i0.ɵɵdirectiveInject(i1$1.SearchSourceService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(ImportExportState)); };
MapDetailsToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapDetailsToolComponent, selectors: [["igo-map-details-tool"]], inputs: { toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendOfVisibleLayers: "expandLegendOfVisibleLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", ogcButton: "ogcButton", timeButton: "timeButton", layerListControls: "layerListControls", queryBadge: "queryBadge", layerAdditionAllowed: "layerAdditionAllowed" }, decls: 4, vars: 4, consts: [["class", "mapDetailsList", "igoLayerListBinding", "", "floatLabel", "never", 3, "map", "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "queryBadge", 4, "ngIf", "ngIfElse"], ["empty", ""], ["igoLayerListBinding", "", "floatLabel", "never", 1, "mapDetailsList", 3, "map", "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "queryBadge"], ["igoLayerItemToolbar", ""], [3, "layer"], [3, "layer", "click"], [3, "header", "layer"], [3, "trackFeature", "layer"], [4, "ngIf"], [1, "map-empty", "mat-typography"], ["class", "map-empty mat-typography", 4, "ngIf"], ["mat-list-icon", ""], ["viewBox", "0 0 24 24", "fit", "", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["d", "M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["d", "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function MapDetailsToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MapDetailsToolComponent_igo_layer_list_0_Template, 3, 7, "igo-layer-list", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, MapDetailsToolComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.layers$).length)("ngIfElse", _r1);
    } }, directives: [i4$1.NgIf, i1$1.LayerListComponent, i1$1.LayerListBindingDirective, WorkspaceButtonComponent, i1$1.ExportButtonComponent, i1$1.OgcFilterButtonComponent, i1$1.TimeFilterButtonComponent, i1$1.TrackFeatureButtonComponent, i1$1.MetadataButtonComponent, i7.MatList, i7.MatListItem, i6.MatIcon, i7.MatListIconCssMatStyler, i8$1.MatLine], pipes: [i4$1.AsyncPipe, i8.TranslatePipe], styles: [".map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:10px}.map-empty[_ngcontent-%COMP%]{text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:5px}.mapDetailsList[_ngcontent-%COMP%]{overflow:hidden}"] });
MapDetailsToolComponent = __decorate([
    ToolComponent({
        name: 'mapDetails',
        title: 'igo.integration.tools.map',
        icon: 'map'
    })
], MapDetailsToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapDetailsToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-map-details-tool',
                templateUrl: './map-details-tool.component.html',
                styleUrls: ['./map-details-tool.component.scss']
            }]
    }], function () { return [{ type: MapState }, { type: ToolState }, { type: i1$1.SearchSourceService }, { type: i0.ChangeDetectorRef }, { type: ImportExportState }]; }, { toggleLegendOnVisibilityChange: [{
            type: Input
        }], expandLegendOfVisibleLayers: [{
            type: Input
        }], updateLegendOnResolutionChange: [{
            type: Input
        }], ogcButton: [{
            type: Input
        }], timeButton: [{
            type: Input
        }], layerListControls: [{
            type: Input
        }], queryBadge: [{
            type: Input
        }], layerAdditionAllowed: [{
            type: Input
        }] }); })();

function MapToolComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "igo-workspace-button", 4);
    i0.ɵɵelementStart(1, "igo-export-button", 5);
    i0.ɵɵlistener("click", function MapToolComponent_ng_template_4_Template_igo_export_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const layer_r2 = restoredCtx.layer; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.activateExport(layer_r2); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "igo-ogc-filter-button", 6);
    i0.ɵɵelement(3, "igo-time-filter-button", 6);
    i0.ɵɵelement(4, "igo-track-feature-button", 7);
    i0.ɵɵelement(5, "igo-metadata-button", 4);
} if (rf & 2) {
    const layer_r2 = ctx.layer;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("layer", layer_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", layer_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("header", ctx_r1.ogcButton)("layer", layer_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("header", ctx_r1.timeButton)("layer", layer_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("trackFeature", true)("layer", layer_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", layer_r2);
} }
/**
 * Tool to browse a map's layers or to choose a different map
 */
let MapToolComponent = class MapToolComponent {
    constructor(mapState, toolState, importExportState) {
        this.mapState = mapState;
        this.toolState = toolState;
        this.importExportState = importExportState;
        this.toggleLegendOnVisibilityChange = false;
        this.expandLegendOfVisibleLayers = false;
        this.updateLegendOnResolutionChange = false;
        this.ogcButton = true;
        this.timeButton = true;
        this.layerListControls = {};
        this.queryBadge = false;
    }
    get map() {
        return this.mapState.map;
    }
    get excludeBaseLayers() {
        return this.layerListControls.excludeBaseLayers || false;
    }
    get layerFilterAndSortOptions() {
        const filterSortOptions = Object.assign({
            showToolbar: LayerListControlsEnum.default
        }, this.layerListControls);
        switch (this.layerListControls.showToolbar) {
            case LayerListControlsEnum.always:
                filterSortOptions.showToolbar = LayerListControlsEnum.always;
                break;
            case LayerListControlsEnum.never:
                filterSortOptions.showToolbar = LayerListControlsEnum.never;
                break;
            default:
                break;
        }
        return filterSortOptions;
    }
    activateExport(layer) {
        var _a;
        let id = layer.id;
        if ((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.workspaceId) {
            id = layer.options.workspace.workspaceId !== layer.id ? layer.options.workspace.workspaceId : layer.id;
        }
        this.importExportState.setsExportOptions({ layers: [id] });
        this.importExportState.setMode(ImportExportMode.export);
        this.toolState.toolbox.activateTool('importExport');
    }
};
MapToolComponent.ɵfac = function MapToolComponent_Factory(t) { return new (t || MapToolComponent)(i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(ToolState), i0.ɵɵdirectiveInject(ImportExportState)); };
MapToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapToolComponent, selectors: [["igo-map-tool"]], inputs: { toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendOfVisibleLayers: "expandLegendOfVisibleLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", ogcButton: "ogcButton", timeButton: "timeButton", layerListControls: "layerListControls", queryBadge: "queryBadge" }, decls: 9, vars: 14, consts: [[3, "label"], ["igoLayerListBinding", "", 3, "map", "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "floatLabel", "queryBadge"], ["igoLayerItemToolbar", ""], ["igoContextListBinding", ""], [3, "layer"], [3, "layer", "click"], [3, "header", "layer"], [3, "trackFeature", "layer"]], template: function MapToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group");
        i0.ɵɵelementStart(1, "mat-tab", 0);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementStart(3, "igo-layer-list", 1);
        i0.ɵɵtemplate(4, MapToolComponent_ng_template_4_Template, 6, 9, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-tab", 0);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵelement(8, "igo-context-list", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(2, 10, "igo.integration.tools.map"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("map", ctx.map)("excludeBaseLayers", ctx.excludeBaseLayers)("layerFilterAndSortOptions", ctx.layerFilterAndSortOptions)("expandLegendOfVisibleLayers", ctx.expandLegendOfVisibleLayers)("toggleLegendOnVisibilityChange", ctx.toggleLegendOnVisibilityChange)("updateLegendOnResolutionChange", ctx.updateLegendOnResolutionChange)("floatLabel", false)("queryBadge", ctx.queryBadge);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(7, 12, "igo.integration.tools.contexts"));
    } }, directives: [i5.MatTabGroup, i5.MatTab, i1$1.LayerListComponent, i1$1.LayerListBindingDirective, i1.ContextListComponent, i1.ContextListBindingDirective, WorkspaceButtonComponent, i1$1.ExportButtonComponent, i1$1.OgcFilterButtonComponent, i1$1.TimeFilterButtonComponent, i1$1.TrackFeatureButtonComponent, i1$1.MetadataButtonComponent], pipes: [i8.TranslatePipe], styles: ["mat-tab-group[_ngcontent-%COMP%], mat-tab-group[_ngcontent-%COMP%]     .mat-tab-body-wrapper{height:100%;overflow:hidden}[_nghost-%COMP%]     .mat-tab-body-content{overflow:hidden}"], changeDetection: 0 });
MapToolComponent = __decorate([
    ToolComponent({
        name: 'map',
        title: 'igo.integration.tools.map',
        icon: 'map'
    })
], MapToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-map-tool',
                templateUrl: './map-tool.component.html',
                styleUrls: ['./map-tool.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MapState }, { type: ToolState }, { type: ImportExportState }]; }, { toggleLegendOnVisibilityChange: [{
            type: Input
        }], expandLegendOfVisibleLayers: [{
            type: Input
        }], updateLegendOnResolutionChange: [{
            type: Input
        }], ogcButton: [{
            type: Input
        }], timeButton: [{
            type: Input
        }], layerListControls: [{
            type: Input
        }], queryBadge: [{
            type: Input
        }] }); })();

const _c0$1 = ["tabGroup"];
function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_time_filter_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-time-filter-button", 14);
    i0.ɵɵlistener("click", function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_time_filter_button_2_Template_igo_time_filter_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.activateTimeFilter(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r9 = i0.ɵɵnextContext().layer;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("header", ctx_r10.timeButton)("layer", layer_r9);
} }
function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_ogc_filter_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-ogc-filter-button", 14);
    i0.ɵɵlistener("click", function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_ogc_filter_button_3_Template_igo_ogc_filter_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(3); return ctx_r16.activateOgcFilter(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r9 = i0.ɵɵnextContext().layer;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("header", ctx_r11.ogcButton)("layer", layer_r9);
} }
function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_export_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-export-button", 15);
    i0.ɵɵlistener("click", function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_export_button_4_Template_igo_export_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const layer_r9 = i0.ɵɵnextContext().layer; const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.activateExport(layer_r9); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r9 = i0.ɵɵnextContext().layer;
    i0.ɵɵproperty("layer", layer_r9);
} }
function MapToolsComponent_igo_layer_list_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-metadata-button", 10);
    i0.ɵɵelement(1, "igo-track-feature-button", 11);
    i0.ɵɵtemplate(2, MapToolsComponent_igo_layer_list_5_ng_template_1_igo_time_filter_button_2_Template, 1, 2, "igo-time-filter-button", 12);
    i0.ɵɵtemplate(3, MapToolsComponent_igo_layer_list_5_ng_template_1_igo_ogc_filter_button_3_Template, 1, 2, "igo-ogc-filter-button", 12);
    i0.ɵɵtemplate(4, MapToolsComponent_igo_layer_list_5_ng_template_1_igo_export_button_4_Template, 1, 1, "igo-export-button", 13);
    i0.ɵɵelement(5, "igo-workspace-button", 10);
} if (rf & 2) {
    const layer_r9 = ctx.layer;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("layer", layer_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("trackFeature", true)("layer", layer_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isTimeFilterButton(layer_r9));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isOGCFilterButton(layer_r9));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isExportButton(layer_r9));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("layer", layer_r9);
} }
function MapToolsComponent_igo_layer_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-layer-list", 8);
    i0.ɵɵlistener("appliedFilterAndSort", function MapToolsComponent_igo_layer_list_5_Template_igo_layer_list_appliedFilterAndSort_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onLayerListChange($event); });
    i0.ɵɵtemplate(1, MapToolsComponent_igo_layer_list_5_ng_template_1_Template, 6, 7, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("excludeBaseLayers", ctx_r1.excludeBaseLayers)("layerFilterAndSortOptions", ctx_r1.layerFilterAndSortOptions)("expandLegendOfVisibleLayers", ctx_r1.expandLegendOfVisibleLayers)("toggleLegendOnVisibilityChange", ctx_r1.toggleLegendOnVisibilityChange)("updateLegendOnResolutionChange", ctx_r1.updateLegendOnResolutionChange)("floatLabel", false)("queryBadge", ctx_r1.queryBadge)("map", ctx_r1.map);
} }
function MapToolsComponent_igo_layer_legend_list_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-layer-legend-list", 16);
    i0.ɵɵlistener("allLegendsShown", function MapToolsComponent_igo_layer_legend_list_9_Template_igo_layer_legend_list_allLegendsShown_0_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.onShowAllLegends($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("allowShowAllLegends", ctx_r2.allowShowAllLegends)("showAllLegendsValue", i0.ɵɵpipeBind1(1, 4, ctx_r2.showAllLegendsValue$))("excludeBaseLayers", ctx_r2.excludeBaseLayers)("updateLegendOnResolutionChange", ctx_r2.updateLegendOnResolutionChange);
} }
function MapToolsComponent_10_ng_template_0_Template(rf, ctx) { }
function MapToolsComponent_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MapToolsComponent_10_ng_template_0_Template, 0, 0, "ng-template");
} }
function MapToolsComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r4.visibleLayers$).length ? i0.ɵɵpipeBind1(3, 3, "igo.integration.mapTool.noLayersInRange") : i0.ɵɵpipeBind1(4, 5, "igo.integration.mapTool.noLayersVisible"), " ");
} }
function MapToolsComponent_ng_template_15_mat_list_0_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.integration.mapTool.customize"), "");
} }
function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 20);
    i0.ɵɵelement(3, "path", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 22);
    i0.ɵɵlistener("click", function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_5_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.searchEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.search-tool"), " ");
} }
function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 20);
    i0.ɵɵelement(3, "path", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 24);
    i0.ɵɵlistener("click", function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_6_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(3); return ctx_r35.catalogEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.catalog-tool"), " ");
} }
function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 20);
    i0.ɵɵelement(3, "path", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 26);
    i0.ɵɵlistener("click", function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_7_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.contextEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.context-tool"), " ");
} }
function MapToolsComponent_ng_template_15_mat_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵelementStart(1, "p", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MapToolsComponent_ng_template_15_mat_list_0_p_4_Template, 3, 3, "p", 6);
    i0.ɵɵtemplate(5, MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_5_Template, 7, 3, "mat-list-item", 18);
    i0.ɵɵtemplate(6, MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_6_Template, 7, 3, "mat-list-item", 18);
    i0.ɵɵtemplate(7, MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_7_Template, 7, 3, "mat-list-item", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "igo.integration.mapTool.empty"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && (ctx_r28.searchToolInToolbar || ctx_r28.catalogToolInToolbar || ctx_r28.contextToolInToolbar));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && ctx_r28.searchToolInToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && ctx_r28.catalogToolInToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && ctx_r28.contextToolInToolbar);
} }
function MapToolsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MapToolsComponent_ng_template_15_mat_list_0_Template, 8, 7, "mat-list", 18);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r6.delayedShowEmptyMapContent);
} }
/**
 * Tool to browse a map's layers or to choose a different map
 */
let MapToolsComponent = class MapToolsComponent {
    constructor(layerListToolState, toolState, mapState, searchSourceService, importExportState) {
        this.layerListToolState = layerListToolState;
        this.toolState = toolState;
        this.mapState = mapState;
        this.searchSourceService = searchSourceService;
        this.importExportState = importExportState;
        this.layers$ = new BehaviorSubject([]);
        this.showAllLegendsValue$ = new BehaviorSubject(false);
        this.delayedShowEmptyMapContent = false;
        this.allowShowAllLegends = false;
        this.showAllLegendsValue = false;
        this.toggleLegendOnVisibilityChange = false;
        this.expandLegendOfVisibleLayers = false;
        this.updateLegendOnResolutionChange = false;
        this.ogcButton = true;
        this.timeButton = true;
        this.layerAdditionAllowed = true;
        this._layerListControls = {};
        this.queryBadge = false;
    }
    get layerListControls() {
        return this._layerListControls;
    }
    set layerListControls(value) {
        const stateOptions = this.layerListToolState.getLayerListControls();
        const stateKeyword = stateOptions.keyword;
        const stateOnlyVisible = stateOptions.onlyVisible;
        const stateSortAlpha = stateOptions.sortAlpha;
        value.keyword = stateKeyword !== '' ? stateKeyword : value.keyword;
        value.onlyVisible =
            stateOnlyVisible !== undefined ? stateOnlyVisible : value.onlyVisible;
        value.sortAlpha =
            stateSortAlpha !== undefined ? stateSortAlpha : value.sortAlpha;
        value.onlyVisible =
            value.onlyVisible === undefined ? false : value.onlyVisible;
        value.sortAlpha = value.sortAlpha === undefined ? false : value.sortAlpha;
        this._layerListControls = value;
    }
    get map() {
        return this.mapState.map;
    }
    get visibleOrInRangeLayers$() {
        return this.layers$.pipe(map((layers) => layers.filter((layer) => layer.visible$.value && layer.isInResolutionsRange$.value)));
    }
    get visibleLayers$() {
        return this.layers$.pipe(map((layers) => layers.filter((layer) => layer.visible$.value)));
    }
    get excludeBaseLayers() {
        return this.layerListControls.excludeBaseLayers || false;
    }
    get layerFilterAndSortOptions() {
        const filterSortOptions = Object.assign({
            showToolbar: LayerListControlsEnum.default
        }, this.layerListControls);
        switch (this.layerListControls.showToolbar) {
            case LayerListControlsEnum.always:
                filterSortOptions.showToolbar = LayerListControlsEnum.always;
                break;
            case LayerListControlsEnum.never:
                filterSortOptions.showToolbar = LayerListControlsEnum.never;
                break;
            default:
                break;
        }
        return filterSortOptions;
    }
    get searchToolInToolbar() {
        return (this.toolState.toolbox.getToolbar().indexOf('searchResults') !== -1 &&
            this.searchSourceService
                .getSources()
                .filter(sourceCanSearch)
                .filter((s) => s.available && s.getType() === 'Layer').length > 0);
    }
    get catalogToolInToolbar() {
        return this.toolState.toolbox.getToolbar().indexOf('catalog') !== -1;
    }
    get contextToolInToolbar() {
        return this.toolState.toolbox.getToolbar().indexOf('contextManager') !== -1;
    }
    ngOnInit() {
        this.selectedTab();
        this.resolution$$ = combineLatest([
            this.map.layers$,
            this.map.viewController.resolution$
        ])
            .pipe(debounceTime(10))
            .subscribe((bunch) => {
            this.layers$.next(bunch[0].filter((layer) => layer.showInLayerList !== false &&
                (!this.excludeBaseLayers || !layer.baseLayer)));
        });
        if (this.allowShowAllLegends) {
            this.mapState.showAllLegendsValue =
                this.mapState.showAllLegendsValue !== undefined
                    ? this.mapState.showAllLegendsValue
                    : this.showAllLegendsValue || false;
            this.showAllLegendsValue$.next(this.mapState.showAllLegendsValue);
        }
        else {
            this.showAllLegendsValue$.next(false);
        }
        // prevent message to be shown too quickly. Waiting for layers
        setTimeout(() => (this.delayedShowEmptyMapContent = true), 250);
    }
    ngOnDestroy() {
        this.resolution$$.unsubscribe();
        if (this.visibleOrInRangeLayers$$) {
            this.visibleOrInRangeLayers$$.unsubscribe();
        }
    }
    onShowAllLegends(event) {
        this.mapState.showAllLegendsValue = event;
        this.showAllLegendsValue$.next(event);
    }
    selectedTab() {
        const userSelectedTab = this.layerListToolState.selectedTab$.value;
        if (userSelectedTab !== undefined) {
            this.layerListToolState.setSelectedTab(userSelectedTab);
        }
        else {
            if (this.selectedTabAtOpening === 'legend') {
                this.layerListToolState.setSelectedTab(1);
            }
            else {
                this.layerListToolState.setSelectedTab(0);
            }
        }
    }
    tabChanged(tab) {
        this.layerListToolState.setSelectedTab(tab.index);
        this.layers$.next(this.map.layers.filter((layer) => layer.showInLayerList !== false &&
            (!this.excludeBaseLayers || !layer.baseLayer)));
    }
    onLayerListChange(appliedFilters) {
        this.layerListToolState.setKeyword(appliedFilters.keyword);
        this.layerListToolState.setSortAlpha(appliedFilters.sortAlpha);
        this.layerListToolState.setOnlyVisible(appliedFilters.onlyVisible);
    }
    showAllLegend() {
        if (this.layers$.getValue().length === 0) {
            return false;
        }
        else if (this.layers$.getValue().length !== 0 &&
            this.allowShowAllLegends === false) {
            let visibleOrInRangeLayers;
            this.visibleOrInRangeLayers$$ = this.visibleOrInRangeLayers$.subscribe((value) => {
                value.length === 0
                    ? (visibleOrInRangeLayers = false)
                    : (visibleOrInRangeLayers = true);
            });
            if (visibleOrInRangeLayers === false) {
                return false;
            }
        }
        return true;
    }
    activateExport(layer) {
        var _a;
        let id = layer.id;
        if ((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.workspaceId) {
            id = layer.options.workspace.workspaceId !== layer.id ? layer.options.workspace.workspaceId : layer.id;
        }
        this.importExportState.setsExportOptions({ layers: [id] });
        this.importExportState.setMode(ImportExportMode.export);
        this.toolState.toolbox.activateTool('importExport');
    }
    activateTimeFilter() {
        this.toolState.toolbox.activateTool('activeTimeFilter');
    }
    activateOgcFilter() {
        this.toolState.toolbox.activateTool('activeOgcFilter');
    }
    searchEmit() {
        this.toolState.toolbox.activateTool('searchResults');
    }
    catalogEmit() {
        this.toolState.toolbox.activateTool('catalog');
    }
    contextEmit() {
        this.toolState.toolbox.activateTool('contextManager');
    }
    isTimeFilterButton(layer) {
        const options = layer.dataSource.options;
        return this.timeButton && options.timeFilterable && options.timeFilter;
    }
    isOGCFilterButton(layer) {
        const options = layer.dataSource.options;
        return this.ogcButton && options.ogcFilters && options.ogcFilters.enabled &&
            (options.ogcFilters.pushButtons || options.ogcFilters.checkboxes || options.ogcFilters.radioButtons
                || options.ogcFilters.select || options.ogcFilters.editable);
    }
    isExportButton(layer) {
        var _a, _b;
        if ((layer instanceof VectorLayer && layer.exportable === true) ||
            (layer.dataSource.options.download && layer.dataSource.options.download.url) ||
            (((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.enabled) && ((_b = layer.options.workspace) === null || _b === void 0 ? void 0 : _b.workspaceId) !== layer.id)) {
            return true;
        }
        return false;
    }
};
MapToolsComponent.ɵfac = function MapToolsComponent_Factory(t) { return new (t || MapToolsComponent)(i0.ɵɵdirectiveInject(LayerListToolState), i0.ɵɵdirectiveInject(ToolState), i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(i1$1.SearchSourceService), i0.ɵɵdirectiveInject(ImportExportState)); };
MapToolsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapToolsComponent, selectors: [["igo-map-tools"]], viewQuery: function MapToolsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabGroup = _t.first);
    } }, inputs: { allowShowAllLegends: "allowShowAllLegends", showAllLegendsValue: "showAllLegendsValue", toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendOfVisibleLayers: "expandLegendOfVisibleLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", selectedTabAtOpening: "selectedTabAtOpening", ogcButton: "ogcButton", timeButton: "timeButton", layerAdditionAllowed: "layerAdditionAllowed", layerListControls: "layerListControls", queryBadge: "queryBadge" }, decls: 17, vars: 23, consts: [[3, "selectedIndex", "selectedTabChange"], ["tabGroup", ""], [3, "label"], ["igoLayerListBinding", "", 3, "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "floatLabel", "queryBadge", "map", "appliedFilterAndSort", 4, "ngIf", "ngIfElse"], ["igoLayerLegendListBinding", "", 3, "allowShowAllLegends", "showAllLegendsValue", "excludeBaseLayers", "updateLegendOnResolutionChange", "allLegendsShown", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "map-empty mat-typography", 4, "ngIf"], ["emptyLayers", ""], ["igoLayerListBinding", "", 3, "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "floatLabel", "queryBadge", "map", "appliedFilterAndSort"], ["igoLayerItemToolbar", ""], [3, "layer"], [3, "trackFeature", "layer"], [3, "header", "layer", "click", 4, "ngIf"], [3, "layer", "click", 4, "ngIf"], [3, "header", "layer", "click"], [3, "layer", "click"], ["igoLayerLegendListBinding", "", 3, "allowShowAllLegends", "showAllLegendsValue", "excludeBaseLayers", "updateLegendOnResolutionChange", "allLegendsShown"], [1, "map-empty", "mat-typography"], [4, "ngIf"], ["mat-list-icon", ""], ["viewBox", "0 0 24 24", "fit", "", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["d", "M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["d", "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function MapToolsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group", 0, 1);
        i0.ɵɵlistener("selectedTabChange", function MapToolsComponent_Template_mat_tab_group_selectedTabChange_0_listener($event) { return ctx.tabChanged($event); });
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementStart(3, "mat-tab", 2);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵtemplate(5, MapToolsComponent_igo_layer_list_5_Template, 3, 8, "igo-layer-list", 3);
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-tab", 2);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵtemplate(9, MapToolsComponent_igo_layer_legend_list_9_Template, 2, 6, "igo-layer-legend-list", 4);
        i0.ɵɵtemplate(10, MapToolsComponent_10_Template, 1, 0, undefined, 5);
        i0.ɵɵpipe(11, "async");
        i0.ɵɵtemplate(12, MapToolsComponent_p_12_Template, 5, 7, "p", 6);
        i0.ɵɵpipe(13, "async");
        i0.ɵɵpipe(14, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, MapToolsComponent_ng_template_15_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r5 = i0.ɵɵreference(16);
        i0.ɵɵproperty("selectedIndex", i0.ɵɵpipeBind1(2, 9, ctx.layerListToolState.selectedTab$));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(4, 11, "igo.integration.tools.layers"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(6, 13, ctx.layers$).length !== 0)("ngIfElse", _r5);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("label", i0.ɵɵpipeBind1(8, 15, "igo.integration.tools.legend"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showAllLegend());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(11, 17, ctx.layers$).length !== 0)("ngIfElse", _r5);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.allowShowAllLegends && i0.ɵɵpipeBind1(13, 19, ctx.layers$).length !== 0 && i0.ɵɵpipeBind1(14, 21, ctx.visibleOrInRangeLayers$).length === 0);
    } }, directives: [i5.MatTabGroup, i5.MatTab, i4$1.NgIf, i1$1.LayerListComponent, i1$1.LayerListBindingDirective, i1$1.MetadataButtonComponent, i1$1.TrackFeatureButtonComponent, WorkspaceButtonComponent, i1$1.TimeFilterButtonComponent, i1$1.OgcFilterButtonComponent, i1$1.ExportButtonComponent, i1$1.LayerLegendListComponent, i1$1.LayerLegendListBindingDirective, i7.MatList, i7.MatListItem, i6.MatIcon, i7.MatListIconCssMatStyler, i8$1.MatLine], pipes: [i4$1.AsyncPipe, i8.TranslatePipe], styles: [".map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:10px}.map-empty[_ngcontent-%COMP%]{text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:5px}mat-tab-group[_ngcontent-%COMP%], mat-tab-group[_ngcontent-%COMP%]     .mat-tab-body-wrapper{height:100%;overflow:hidden}[_nghost-%COMP%]     .mat-tab-body-content{overflow:hidden}"], changeDetection: 0 });
MapToolsComponent = __decorate([
    ToolComponent({
        name: 'mapTools',
        title: 'igo.integration.tools.map',
        icon: 'map'
    })
], MapToolsComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapToolsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-map-tools',
                templateUrl: './map-tools.component.html',
                styleUrls: ['./map-tools.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: LayerListToolState }, { type: ToolState }, { type: MapState }, { type: i1$1.SearchSourceService }, { type: ImportExportState }]; }, { allowShowAllLegends: [{
            type: Input
        }], showAllLegendsValue: [{
            type: Input
        }], toggleLegendOnVisibilityChange: [{
            type: Input
        }], expandLegendOfVisibleLayers: [{
            type: Input
        }], updateLegendOnResolutionChange: [{
            type: Input
        }], selectedTabAtOpening: [{
            type: Input
        }], ogcButton: [{
            type: Input
        }], timeButton: [{
            type: Input
        }], layerAdditionAllowed: [{
            type: Input
        }], layerListControls: [{
            type: Input
        }], queryBadge: [{
            type: Input
        }], tabGroup: [{
            type: ViewChild,
            args: ['tabGroup', { static: true }]
        }] }); })();

function MapLegendToolComponent_igo_layer_legend_list_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-layer-legend-list", 4);
    i0.ɵɵlistener("allLegendsShown", function MapLegendToolComponent_igo_layer_legend_list_0_Template_igo_layer_legend_list_allLegendsShown_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onShowAllLegends($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("excludeBaseLayers", ctx_r0.excludeBaseLayers)("allowShowAllLegends", ctx_r0.allowShowAllLegends)("updateLegendOnResolutionChange", ctx_r0.updateLegendOnResolutionChange)("showAllLegendsValue", i0.ɵɵpipeBind1(1, 4, ctx_r0.showAllLegendsValue$));
} }
function MapLegendToolComponent_1_ng_template_0_Template(rf, ctx) { }
function MapLegendToolComponent_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MapLegendToolComponent_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function MapLegendToolComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.visibleLayers$).length ? i0.ɵɵpipeBind1(3, 3, "igo.integration.mapTool.noLayersInRange") : i0.ɵɵpipeBind1(4, 5, "igo.integration.mapTool.noLayersVisible"), "\n");
} }
function MapLegendToolComponent_ng_template_6_mat_list_0_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.integration.mapTool.customize"), "");
} }
function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 8);
    i0.ɵɵelement(3, "path", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 10);
    i0.ɵɵlistener("click", function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_5_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.searchEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.search-tool"), " ");
} }
function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 8);
    i0.ɵɵelement(3, "path", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 12);
    i0.ɵɵlistener("click", function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_6_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.catalogEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.catalog-tool"), " ");
} }
function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 8);
    i0.ɵɵelement(3, "path", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h4", 14);
    i0.ɵɵlistener("click", function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_7_Template_h4_click_4_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.contextEmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.context-tool"), " ");
} }
function MapLegendToolComponent_ng_template_6_mat_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵelementStart(1, "p", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MapLegendToolComponent_ng_template_6_mat_list_0_p_4_Template, 3, 3, "p", 2);
    i0.ɵɵtemplate(5, MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_5_Template, 7, 3, "mat-list-item", 6);
    i0.ɵɵtemplate(6, MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_6_Template, 7, 3, "mat-list-item", 6);
    i0.ɵɵtemplate(7, MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_7_Template, 7, 3, "mat-list-item", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "igo.integration.mapTool.empty"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && (ctx_r8.searchToolInToolbar || ctx_r8.catalogToolInToolbar || ctx_r8.contextToolInToolbar));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.searchToolInToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.catalogToolInToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.contextToolInToolbar);
} }
function MapLegendToolComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MapLegendToolComponent_ng_template_6_mat_list_0_Template, 8, 7, "mat-list", 6);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r4.delayedShowEmptyMapContent);
} }
let MapLegendToolComponent = class MapLegendToolComponent {
    constructor(mapState, toolState, searchSourceService, cdRef) {
        this.mapState = mapState;
        this.toolState = toolState;
        this.searchSourceService = searchSourceService;
        this.cdRef = cdRef;
        this.delayedShowEmptyMapContent = false;
        this.layers$ = new BehaviorSubject([]);
        this.showAllLegendsValue$ = new BehaviorSubject(false);
        this.change$ = new ReplaySubject(1);
        this.updateLegendOnResolutionChange = false;
        this.layerAdditionAllowed = true;
        this.allowShowAllLegends = false;
        this.showAllLegendsValue = false;
        this.layerListControls = {};
    }
    get map() {
        return this.mapState.map;
    }
    get visibleOrInRangeLayers$() {
        return this.layers$.pipe(map(layers => layers.filter(layer => layer.visible$.value && layer.isInResolutionsRange$.value)));
    }
    get visibleLayers$() {
        return this.layers$.pipe(map(layers => layers.filter(layer => layer.visible$.value)));
    }
    get excludeBaseLayers() {
        return this.layerListControls.excludeBaseLayers || false;
    }
    get searchToolInToolbar() {
        return (this.toolState.toolbox.getToolbar().indexOf('searchResults') !== -1 &&
            this.searchSourceService
                .getSources()
                .filter(sourceCanSearch)
                .filter(s => s.available && s.getType() === 'Layer').length > 0);
    }
    get catalogToolInToolbar() {
        return this.toolState.toolbox.getToolbar().indexOf('catalog') !== -1;
    }
    get contextToolInToolbar() {
        return this.toolState.toolbox.getToolbar().indexOf('contextManager') !== -1;
    }
    ngOnInit() {
        this.resolution$$ = combineLatest([
            this.map.layers$,
            this.map.viewController.resolution$
        ])
            .pipe(debounceTime(10))
            .subscribe((bunch) => {
            this.layers$.next(bunch[0].filter(layer => layer.showInLayerList !== false &&
                (!this.excludeBaseLayers || !layer.baseLayer)));
        });
        if (this.allowShowAllLegends) {
            this.mapState.showAllLegendsValue =
                this.mapState.showAllLegendsValue !== undefined
                    ? this.mapState.showAllLegendsValue
                    : this.showAllLegendsValue || false;
            this.showAllLegendsValue$.next(this.mapState.showAllLegendsValue);
        }
        else {
            this.showAllLegendsValue$.next(false);
        }
        // prevent message to be shown too quickly. Waiting for layers
        setTimeout(() => {
            this.delayedShowEmptyMapContent = true;
            this.cdRef.detectChanges();
        }, 250);
    }
    onShowAllLegends(event) {
        this.mapState.showAllLegendsValue = event;
        this.showAllLegendsValue$.next(event);
    }
    showAllLegend() {
        if (this.layers$.getValue().length === 0) {
            return false;
        }
        else if (this.layers$.getValue().length !== 0 &&
            this.allowShowAllLegends === false) {
            let visibleOrInRangeLayers;
            this.visibleOrInRangeLayers$$ = this.visibleOrInRangeLayers$.subscribe(value => {
                value.length === 0
                    ? (visibleOrInRangeLayers = false)
                    : (visibleOrInRangeLayers = true);
            });
            if (visibleOrInRangeLayers === false) {
                return false;
            }
        }
        return true;
    }
    ngOnDestroy() {
        this.resolution$$.unsubscribe();
        if (this.visibleOrInRangeLayers$$) {
            this.visibleOrInRangeLayers$$.unsubscribe();
        }
    }
    searchEmit() {
        this.toolState.toolbox.activateTool('searchResults');
    }
    catalogEmit() {
        this.toolState.toolbox.activateTool('catalog');
    }
    contextEmit() {
        this.toolState.toolbox.activateTool('contextManager');
    }
};
MapLegendToolComponent.ɵfac = function MapLegendToolComponent_Factory(t) { return new (t || MapLegendToolComponent)(i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(ToolState), i0.ɵɵdirectiveInject(i1$1.SearchSourceService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MapLegendToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapLegendToolComponent, selectors: [["igo-map-legend-tool"]], inputs: { updateLegendOnResolutionChange: "updateLegendOnResolutionChange", layerAdditionAllowed: "layerAdditionAllowed", allowShowAllLegends: "allowShowAllLegends", showAllLegendsValue: "showAllLegendsValue", layerListControls: "layerListControls" }, decls: 8, vars: 10, consts: [["igoLayerLegendListBinding", "", 3, "excludeBaseLayers", "allowShowAllLegends", "updateLegendOnResolutionChange", "showAllLegendsValue", "allLegendsShown", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "map-empty mat-typography", 4, "ngIf"], ["emptyLayers", ""], ["igoLayerLegendListBinding", "", 3, "excludeBaseLayers", "allowShowAllLegends", "updateLegendOnResolutionChange", "showAllLegendsValue", "allLegendsShown"], [1, "map-empty", "mat-typography"], [4, "ngIf"], ["mat-list-icon", ""], ["viewBox", "0 0 24 24", "fit", "", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["d", "M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["d", "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function MapLegendToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MapLegendToolComponent_igo_layer_legend_list_0_Template, 2, 6, "igo-layer-legend-list", 0);
        i0.ɵɵtemplate(1, MapLegendToolComponent_1_Template, 1, 0, undefined, 1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵtemplate(3, MapLegendToolComponent_p_3_Template, 5, 7, "p", 2);
        i0.ɵɵpipe(4, "async");
        i0.ɵɵpipe(5, "async");
        i0.ɵɵtemplate(6, MapLegendToolComponent_ng_template_6_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(7);
        i0.ɵɵproperty("ngIf", ctx.showAllLegend());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 4, ctx.layers$).length !== 0)("ngIfElse", _r3);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.allowShowAllLegends && i0.ɵɵpipeBind1(4, 6, ctx.layers$).length !== 0 && i0.ɵɵpipeBind1(5, 8, ctx.visibleOrInRangeLayers$).length === 0);
    } }, directives: [i4$1.NgIf, i1$1.LayerLegendListComponent, i1$1.LayerLegendListBindingDirective, i7.MatList, i7.MatListItem, i6.MatIcon, i7.MatListIconCssMatStyler, i8$1.MatLine], pipes: [i4$1.AsyncPipe, i8.TranslatePipe], styles: [".map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:10px}.map-empty[_ngcontent-%COMP%]{text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:5px}"] });
MapLegendToolComponent = __decorate([
    ToolComponent({
        name: 'mapLegend',
        title: 'igo.integration.tools.legend',
        icon: 'format-list-bulleted-type'
    })
], MapLegendToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapLegendToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-map-legend-tool',
                templateUrl: './map-legend-tool.component.html',
                styleUrls: ['./map-legend-tool.component.scss']
            }]
    }], function () { return [{ type: MapState }, { type: ToolState }, { type: i1$1.SearchSourceService }, { type: i0.ChangeDetectorRef }]; }, { updateLegendOnResolutionChange: [{
            type: Input
        }], layerAdditionAllowed: [{
            type: Input
        }], allowShowAllLegends: [{
            type: Input
        }], showAllLegendsValue: [{
            type: Input
        }], layerListControls: [{
            type: Input
        }] }); })();

function AdvancedSwipeComponent_div_0_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵlistener("click", function AdvancedSwipeComponent_div_0_mat_option_12_Template_mat_option_click_0_listener() { i0.ɵɵrestoreView(_r7); i0.ɵɵnextContext(); const _r3 = i0.ɵɵreference(8); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.applyNewLayers(_r3); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const layer_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", layer_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(layer_r5.title);
} }
function AdvancedSwipeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "form", 3);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-select", 4);
    i0.ɵɵelementStart(7, "mat-option", 5, 6);
    i0.ɵɵlistener("click", function AdvancedSwipeComponent_div_0_Template_mat_option_click_7_listener() { i0.ɵɵrestoreView(_r9); const _r3 = i0.ɵɵreference(8); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.selectAll(_r3); });
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "mat-divider");
    i0.ɵɵtemplate(12, AdvancedSwipeComponent_div_0_mat_option_12_Template, 2, 2, "mat-option", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-slide-toggle", 8);
    i0.ɵɵlistener("change", function AdvancedSwipeComponent_div_0_Template_mat_slide_toggle_change_13_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.startSwipe($event.checked); });
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 8, "igo.integration.advanced-map-tool.advanced-swipe.swipe-select"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 10, "igo.integration.advanced-map-tool.advanced-swipe.selectAll"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.userControlledLayerList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r0.swipe)("labelPosition", "before");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 12, "igo.integration.advanced-map-tool.advanced-swipe.swipe"), " ");
} }
function AdvancedSwipeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list");
    i0.ɵɵelementStart(1, "p", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 9);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-list-item");
    i0.ɵɵelement(8, "mat-icon", 10);
    i0.ɵɵelementStart(9, "h4", 11);
    i0.ɵɵlistener("click", function AdvancedSwipeComponent_ng_template_1_Template_h4_click_9_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.searchEmit(); });
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-list-item");
    i0.ɵɵelement(13, "mat-icon", 12);
    i0.ɵɵelementStart(14, "h4", 13);
    i0.ɵɵlistener("click", function AdvancedSwipeComponent_ng_template_1_Template_h4_click_14_listener() { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.catalogEmit(); });
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-list-item");
    i0.ɵɵelement(18, "mat-icon", 14);
    i0.ɵɵelementStart(19, "h4", 15);
    i0.ɵɵlistener("click", function AdvancedSwipeComponent_ng_template_1_Template_h4_click_19_listener() { i0.ɵɵrestoreView(_r12); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.contextEmit(); });
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "igo.integration.advanced-map-tool.advanced-swipe.empty"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 7, "igo.integration.advanced-map-tool.advanced-swipe.customize"), "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 9, "igo.integration.advanced-map-tool.advanced-swipe.search-tool"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 11, "igo.integration.advanced-map-tool.advanced-swipe.catalog-tool"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(21, 13, "igo.integration.advanced-map-tool.advanced-swipe.context-tool"), " ");
} }
class AdvancedSwipeComponent {
    constructor(mapState, contextService, formBuilder, toolState) {
        this.mapState = mapState;
        this.contextService = contextService;
        this.formBuilder = formBuilder;
        this.toolState = toolState;
        this.swipe = false;
        this.buildForm();
    }
    /**
     * Get an active map state
     */
    get map() {
        return this.mapState.map;
    }
    /**
     * Get the list of layers for swipe
     * @internal
     */
    ngOnInit() {
        this.map.layers$.subscribe(ll => this.userControlledLayerList = ll.filter(layer => (!layer.baseLayer && layer.showInLayerList && layer.displayed)));
    }
    /**
     * Desactivate the swipe
     * @internal
     */
    ngOnDestroy() {
        this.swipe = false;
        this.map.swipeEnabled$.next(this.swipe);
    }
    /**
     * Build a form for choise of the layers
     */
    buildForm() {
        this.form = this.formBuilder.group({
            layers: ['', [Validators.required]]
        });
    }
    /**
     * Activate the swipe, send a list of layers for a swipe-tool
     */
    startSwipe(toggle) {
        this.swipe = toggle;
        this.map.swipeEnabled$.next(toggle);
        this.listForSwipe = [];
        for (const layer of this.form.value.layers) {
            this.listForSwipe.push(layer);
        }
        this.map.selectedFeatures$.next(this.listForSwipe);
    }
    /**
     * Restart a swipe for a new layers-list
     */
    applyNewLayers(e) {
        this.startSwipe(false); // l'approche KISS
        this.startSwipe(true);
        if (e._selected) {
            e._selected = false;
        }
        const allLayers = this.userControlledLayerList.length;
        const selectedLayers = this.form.controls.layers.value.length;
        if (selectedLayers === allLayers) {
            e._selected = true;
        }
    }
    /**
     * Select all list of layers and restart a tool
     */
    selectAll(e) {
        if (e._selected) {
            this.form.controls.layers.setValue(this.userControlledLayerList);
            e._selected = true;
        }
        else {
            this.form.controls.layers.setValue([]);
        }
        this.startSwipe(false);
        this.startSwipe(true);
    }
    /**
     * Open search tool
     */
    searchEmit() {
        this.toolState.toolbox.activateTool('searchResults');
    }
    /**
     * Open catalog
     */
    catalogEmit() {
        this.toolState.toolbox.activateTool('catalog');
    }
    /**
     * Open context manager
     */
    contextEmit() {
        this.toolState.toolbox.activateTool('contextManager');
    }
}
AdvancedSwipeComponent.ɵfac = function AdvancedSwipeComponent_Factory(t) { return new (t || AdvancedSwipeComponent)(i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(i1.ContextService), i0.ɵɵdirectiveInject(i3$1.FormBuilder), i0.ɵɵdirectiveInject(ToolState)); };
AdvancedSwipeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdvancedSwipeComponent, selectors: [["igo-advanced-swipe"]], decls: 3, vars: 2, consts: [["class", "igo-swipe-select-container", 4, "ngIf", "ngIfElse"], ["noLayersBlock", ""], [1, "igo-swipe-select-container"], [1, "igo-form", 3, "formGroup"], ["formControlName", "layers", "multiple", ""], [3, "value", "click"], ["e", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "swipe-toggle", "mat-typography", 3, "checked", "labelPosition", "change"], [1, "map-empty", "mat-typography"], ["mat-list-icon", "", "svgIcon", "magnify"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["mat-list-icon", "", "svgIcon", "layers-plus"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["mat-list-icon", "", "svgIcon", "star"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function AdvancedSwipeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AdvancedSwipeComponent_div_0_Template, 16, 14, "div", 0);
        i0.ɵɵtemplate(1, AdvancedSwipeComponent_ng_template_1_Template, 22, 15, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.userControlledLayerList.length)("ngIfElse", _r1);
    } }, directives: [i4$1.NgIf, i3$1.ɵNgNoValidate, i3$1.NgControlStatusGroup, i3$1.FormGroupDirective, i6$1.MatFormField, i6$1.MatLabel, i7$1.MatSelect, i3$1.NgControlStatus, i3$1.FormControlName, i8$1.MatOption, i9.MatDivider, i4$1.NgForOf, i10.MatSlideToggle, i7.MatList, i7.MatListItem, i6.MatIcon, i7.MatListIconCssMatStyler, i8$1.MatLine], pipes: [i8.TranslatePipe], styles: [".nameOfTool[_ngcontent-%COMP%]{text-align:center;font-weight:bold;font-size:small;margin:15px 10px 0}.igo-swipe-select-container[_ngcontent-%COMP%]{padding:10px}.igo-swipe-select-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.igo-form[_ngcontent-%COMP%]{padding:1px 5px;width:100%}.swipe-toggle[_ngcontent-%COMP%]{padding:10px 5px 35px}.map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:5px}.map-empty[_ngcontent-%COMP%]{padding:10px;text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:15px}.advanced-tool-line[_ngcontent-%COMP%]{height:2px;background-color:gray}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdvancedSwipeComponent, [{
        type: Component,
        args: [{
                selector: 'igo-advanced-swipe',
                templateUrl: './advanced-swipe.component.html',
                styleUrls: ['./advanced-swipe.component.scss']
            }]
    }], function () { return [{ type: MapState }, { type: i1.ContextService }, { type: i3$1.FormBuilder }, { type: ToolState }]; }, null); })();

function AdvancedCoordinatesComponent_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 12);
    i0.ɵɵelement(1, "textarea", 13, 14);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.lon"))("value", ctx_r0.coordinates[0]);
} }
function AdvancedCoordinatesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 12);
    i0.ɵɵelement(1, "textarea", 13, 14);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.est"))("value", ctx_r2.coordinates[0]);
} }
function AdvancedCoordinatesComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 15);
    i0.ɵɵelement(1, "textarea", 13, 14);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.lat"))("value", ctx_r3.coordinates[1]);
} }
function AdvancedCoordinatesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 15);
    i0.ɵɵelement(1, "textarea", 13, 14);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.nord"))("value", ctx_r5.coordinates[1]);
} }
function AdvancedCoordinatesComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 16);
    i0.ɵɵlistener("click", function AdvancedCoordinatesComponent_mat_option_16_Template_mat_option_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", projection_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", projection_r11.translatedValue || projection_r11.alias, " ");
} }
/**
 * Tool to display the coordinates and a cursor of the center of the map
 */
class AdvancedCoordinatesComponent {
    constructor(mapState, languageService, messageService, cdRef, storageService, config, formBuilder) {
        this.mapState = mapState;
        this.languageService = languageService;
        this.messageService = messageService;
        this.cdRef = cdRef;
        this.storageService = storageService;
        this.config = config;
        this.formBuilder = formBuilder;
        this.formattedScale$ = new BehaviorSubject('');
        this.projections$ = new BehaviorSubject([]);
        this.center = this.storageService.get('centerToggle');
        this.inMtmZone = true;
        this.inLambert2 = { 32198: true, 3798: true };
        this._projectionsLimitations = {};
        this.defaultProj = {
            translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.wgs84', { code: 'EPSG:4326' }),
            translateKey: 'wgs84', alias: 'WGS84', code: 'EPSG:4326', zone: ''
        };
        this.currentZones = { utm: undefined, mtm: undefined };
        this.units = true;
        this.computeProjections();
        this.buildForm();
    }
    get map() {
        return this.mapState.map;
    }
    get inputProj() {
        return this.form.get('inputProj').value;
    }
    set inputProj(value) {
        this.form.patchValue({ inputProj: value });
    }
    get projectionsLimitations() {
        return this._projectionsLimitations || {};
    }
    set projectionsLimitations(value) {
        this._projectionsLimitations = value;
    }
    /**
     * Listen a state of the map, a state of a form, update the coordinates
     */
    ngOnInit() {
        this.mapState$$ = combineLatest([this.map.viewController.state$.pipe(debounceTime(50)), this.form.valueChanges])
            .subscribe(() => {
            this.setScaleValue(this.map);
            this.currentCenterDefaultProj = this.map.viewController.getCenter(this.defaultProj.code);
            const currentMtmZone = zoneMtm(this.currentCenterDefaultProj[0]);
            const currentUtmZone = zoneUtm(this.currentCenterDefaultProj[0]);
            if (!this.inMtmZone && currentMtmZone !== this.currentZones.mtm) {
                this.back2quebec();
            }
            let zoneChange = false;
            if (currentMtmZone !== this.currentZones.mtm) {
                this.currentZones.mtm = currentMtmZone;
                zoneChange = true;
            }
            if (currentUtmZone !== this.currentZones.utm) {
                this.currentZones.utm = currentUtmZone;
                zoneChange = true;
            }
            if (zoneChange) {
                this.updateProjectionsZoneChange();
            }
            this.checkLambert(this.currentCenterDefaultProj);
            this.coordinates = this.getCoordinates();
            this.cdRef.detectChanges();
            this.storageService.set('currentProjection', this.inputProj, StorageScope.SESSION);
        });
        const tempInputProj = this.storageService.get('currentProjection');
        this.inputProj = this.projections$.value[0];
        if (tempInputProj !== null) {
            const pos = this.positionInList(tempInputProj);
            this.inputProj = this.projections$.value[pos];
            this.updateZoneMtmUtm();
        }
        this.map.mapCenter$.next(this.center);
        this.coordinates = this.getCoordinates();
        this.currentCenterDefaultProj = this.map.viewController.getCenter(this.defaultProj.code);
    }
    ngOnDestroy() {
        this.map.mapCenter$.next(false);
        this.mapState$$.unsubscribe();
    }
    setScaleValue(map) {
        this.formattedScale$.next(': ~ 1 / ' + formatScale(map.viewController.getScale()));
    }
    /**
     * Coordinates of the center of the map on the appropriate systeme of coordinates
     * @returns Array of two numbers
     */
    getCoordinates() {
        this.currentZones.mtm = zoneMtm(this.currentCenterDefaultProj[0]);
        this.currentZones.utm = zoneUtm(this.currentCenterDefaultProj[0]);
        let coord;
        const code = this.inputProj.code;
        let decimal = 2;
        if (code.includes('EPSG:4326') || code.includes('EPSG:4269')) {
            decimal = 5;
        }
        this.units = (code === 'EPSG:4326' || code === 'EPSG:4269');
        coord = this.map.viewController.getCenter(code).map(c => c.toFixed(decimal));
        return coord;
    }
    /**
     * Copy the coordinates to a clipboard
     */
    copyTextToClipboard() {
        const successful = Clipboard.copy(this.coordinates.toString());
        if (successful) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.integration.advanced-map-tool.advanced-coordinates.copyTitle');
            const msg = translate.instant('igo.integration.advanced-map-tool.advanced-coordinates.copyMsg');
            this.messageService.success(msg, title);
        }
    }
    /**
     * Display a cursor on the center of the map
     */
    displayCenter(toggle) {
        this.center = toggle;
        this.map.mapCenter$.next(toggle);
        this.storageService.set('centerToggle', toggle, StorageScope.SESSION);
    }
    /**
     * Builder of the form
     */
    buildForm() {
        this.form = this.formBuilder.group({
            inputProj: ['', [Validators.required]]
        });
    }
    /**
     * Update list of projections after changing of the state of the map
     */
    updateProjectionsZoneChange() {
        let modifiedProj = this.projections$.value;
        const translate = this.languageService.translate;
        modifiedProj.map(p => {
            if (p.translateKey === 'mtm') {
                const zone = zoneMtm(this.currentCenterDefaultProj[0]);
                if (zone) {
                    const code = zone < 10 ? `EPSG:3218${zone}` : `EPSG:321${80 + zone}`;
                    p.alias = `MTM ${zone}`;
                    p.code = code;
                    p.zone = `${zone}`;
                    p.translatedValue = translate.instant('igo.geo.importExportForm.projections.mtm', p);
                }
                else {
                    p.alias = '';
                    this.inMtmZone = false;
                    if (this.inputProj.translateKey === 'mtm') {
                        this.inputProj = this.projections$.value[0];
                    }
                }
            }
            if (p.translateKey === 'utm') {
                const zone = zoneUtm(this.currentCenterDefaultProj[0]);
                const code = `EPSG:326${zone}`;
                p.alias = `UTM ${zone}`;
                p.code = code;
                p.zone = `${zone}`;
                p.translatedValue = translate.instant('igo.geo.importExportForm.projections.utm', p);
            }
        });
        modifiedProj = modifiedProj.filter(p => p.alias !== '');
        this.projections$.next(modifiedProj);
    }
    /**
     * Create a list of currents projections
     */
    computeProjections() {
        this.projectionsConstraints = computeProjectionsConstraints(this.projectionsLimitations);
        const projections = [];
        if (!this.currentCenterDefaultProj) {
            this.currentCenterDefaultProj = this.map.viewController.getCenter(this.defaultProj.code);
        }
        const translate = this.languageService.translate;
        if (this.projectionsConstraints.wgs84) {
            projections.push({
                translatedValue: translate.instant('igo.geo.importExportForm.projections.wgs84', { code: 'EPSG:4326' }),
                translateKey: 'wgs84', alias: 'WGS84', code: 'EPSG:4326', zone: ''
            });
        }
        if (this.projectionsConstraints.nad83) {
            projections.push({
                translatedValue: translate.instant('igo.geo.importExportForm.projections.nad83', { code: 'EPSG:4269' }),
                translateKey: 'nad83', alias: 'NAD83', code: 'EPSG:4269', zone: ''
            });
        }
        if (this.projectionsConstraints.webMercator) {
            projections.push({
                translatedValue: translate.instant('igo.geo.importExportForm.projections.webMercator', { code: 'EPSG:3857' }),
                translateKey: 'webMercator', alias: 'Web Mercator', code: 'EPSG:3857', zone: ''
            });
        }
        if (this.projectionsConstraints.mtm) {
            // Quebec
            const zone = zoneMtm(this.currentCenterDefaultProj[0]);
            if (zone) {
                this.inMtmZone = true;
                const code = zone < 10 ? `EPSG:3218${zone}` : `EPSG:321${80 + zone}`;
                projections.splice(3, 0, {
                    translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.mtm', { code, zone }),
                    translateKey: 'mtm', alias: `MTM ${zone}`, code, zone: `${zone}`
                });
            }
            else {
                this.inMtmZone = false;
            }
        }
        if (this.projectionsConstraints.utm) {
            const order = this.inMtmZone ? 4 : 3;
            const zone = zoneUtm(this.currentCenterDefaultProj[0]);
            const code = zone < 10 ? `EPSG:3260${zone}` : `EPSG:326${zone}`;
            projections.splice(order, 0, {
                translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.utm', { code, zone }),
                translateKey: 'utm', alias: `UTM ${zone}`, code, zone: `${zone}`
            });
        }
        let configProjection = [];
        if (this.projectionsConstraints.projFromConfig) {
            configProjection = this.config.getConfig('projections') || [];
        }
        this.projections$.next(projections.concat(configProjection));
    }
    /**
     * Push the MTM in the array of systeme of coordinates
     * @param projections Array of the InputProjections
     */
    pushMtm(projections) {
        if (this.projectionsConstraints.mtm) {
            const zone = zoneMtm(this.currentCenterDefaultProj[0]);
            const code = zone < 10 ? `EPSG:3218${zone}` : `EPSG:321${80 + zone}`;
            projections.splice(3, 0, {
                translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.mtm', { code, zone }),
                translateKey: 'mtm', alias: `MTM ${zone}`, code, zone: `${zone}`
            });
        }
    }
    /**
     * Updates the list of systems of coordinates for territory of Quebec
     * push MTM and UTM in the Array
     */
    back2quebec() {
        const projections = this.projections$.value;
        this.pushMtm(projections);
        this.inMtmZone = true;
    }
    /**
     * Update the numbers of the zones when application is restarted
     */
    updateZoneMtmUtm() {
        if (this.inputProj.translateKey === 'mtm') {
            const zone = zoneMtm(this.currentCenterDefaultProj[0]);
            this.inputProj.alias = `MTM ${zone}`;
            const code = zone < 10 ? `EPSG:3218${zone}` : `EPSG:321${80 + zone}`;
            this.inputProj.code = code;
            this.inputProj.zone = `${zone}`;
            this.inputProj.translatedValue = this.languageService.translate.instant('igo.geo.importExportForm.projections.mtm', { code, zone });
        }
        if (this.inputProj.translateKey === 'utm') {
            const zone = zoneUtm(this.currentCenterDefaultProj[0]);
            this.inputProj.alias = `UTM ${zone}`;
            const code = zone < 10 ? `EPSG:3260${zone}` : `EPSG:326${zone}`;
            this.inputProj.code = code;
            this.inputProj.zone = `${zone}`;
            this.inputProj.translatedValue = this.languageService.translate.instant('igo.geo.importExportForm.projections.utm', { code, zone });
        }
    }
    /**
     * Compute the position of a current projection in a list. 0 if the projection is not in the list
     * @param translateKey string, translate key of a projection
     * @returns numeric, position of an element in the array
     */
    positionInList(tempInputProj) {
        const tk = tempInputProj.translateKey;
        const alias = tempInputProj.alias;
        let position; // = undefined;
        let iter = 0;
        this.projections$.value.map((projection) => {
            if (tk) {
                if (tk === projection.translateKey) {
                    position = iter;
                }
            }
            else if (alias === projection.alias) {
                position = iter;
            }
            iter++;
        });
        position = position ? position : 0;
        return position;
    }
    /**
     * Change the list of projections depending on the projections of Lambert
     * @param coordinates An array of numbers, longitude and latitude
     */
    checkLambert(coordinates) {
        const lambertProjections = this.config.getConfig('projections');
        lambertProjections.forEach(projection => {
            let modifiedProj = this.projections$.value;
            const extent = projection.extent;
            const code = projection.code.match(/\d+/);
            const currentExtentWGS = olproj.transformExtent(extent, projection.code, this.defaultProj.code);
            if (coordinates[0] < currentExtentWGS[0] || coordinates[0] > currentExtentWGS[2] ||
                coordinates[1] < currentExtentWGS[1] || coordinates[1] > currentExtentWGS[3]) {
                this.inLambert2[code] = false;
                if (this.inputProj.alias === projection.alias) {
                    this.inputProj = this.projections$.value[0];
                }
                modifiedProj = modifiedProj.filter(p => p.alias !== projection.alias);
                this.projections$.next(modifiedProj);
            }
            else {
                if (!this.inLambert2[code]) {
                    this.projections$.next(modifiedProj.concat(projection));
                    this.inLambert2[code] = true;
                }
            }
        });
    }
}
AdvancedCoordinatesComponent.ɵfac = function AdvancedCoordinatesComponent_Factory(t) { return new (t || AdvancedCoordinatesComponent)(i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(i2$1.LanguageService), i0.ɵɵdirectiveInject(i2$1.MessageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2$1.StorageService), i0.ɵɵdirectiveInject(i2$1.ConfigService), i0.ɵɵdirectiveInject(i3$1.FormBuilder)); };
AdvancedCoordinatesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdvancedCoordinatesComponent, selectors: [["igo-advanced-coordinates"]], inputs: { projectionsLimitations: "projectionsLimitations" }, decls: 32, vars: 37, consts: [["class", "coordinates", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["class", "coordinates2", 4, "ngIf", "ngIfElse"], ["elseBlock2", ""], ["mat-raised-button", "", 1, "igo-form-button-group", 3, "click"], ["svgIcon", "content-copy"], [1, "igo-form", 3, "formGroup"], [1, "igo-input-container"], [3, "value", "valueChange"], ["matTooltipShowDelay", "500", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "center-toggle", "mat-typography", 3, "checked", "labelPosition", "change"], [1, "igo-zoom", "mat-typography"], [1, "coordinates"], ["matInput", "", "readonly", "", "rows", "1", 3, "placeholder", "value"], ["textArea", ""], [1, "coordinates2"], ["matTooltipShowDelay", "500", 3, "value", "click"]], template: function AdvancedCoordinatesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AdvancedCoordinatesComponent_mat_form_field_0_Template, 4, 4, "mat-form-field", 0);
        i0.ɵɵtemplate(1, AdvancedCoordinatesComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, AdvancedCoordinatesComponent_mat_form_field_3_Template, 4, 4, "mat-form-field", 2);
        i0.ɵɵtemplate(4, AdvancedCoordinatesComponent_ng_template_4_Template, 4, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function AdvancedCoordinatesComponent_Template_button_click_6_listener() { return ctx.copyTextToClipboard(); });
        i0.ɵɵelement(7, "mat-icon", 5);
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "form", 6);
        i0.ɵɵelementStart(11, "mat-form-field", 7);
        i0.ɵɵelementStart(12, "mat-label");
        i0.ɵɵtext(13);
        i0.ɵɵpipe(14, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-select", 8);
        i0.ɵɵlistener("valueChange", function AdvancedCoordinatesComponent_Template_mat_select_valueChange_15_listener($event) { return ctx.inputProj = $event; });
        i0.ɵɵtemplate(16, AdvancedCoordinatesComponent_mat_option_16_Template, 2, 2, "mat-option", 9);
        i0.ɵɵpipe(17, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-slide-toggle", 10);
        i0.ɵɵlistener("change", function AdvancedCoordinatesComponent_Template_mat_slide_toggle_change_18_listener($event) { return ctx.displayCenter($event.checked); });
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "p", 11);
        i0.ɵɵtext(22);
        i0.ɵɵpipe(23, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "p", 11);
        i0.ɵɵtext(25);
        i0.ɵɵpipe(26, "translate");
        i0.ɵɵpipe(27, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "p", 11);
        i0.ɵɵtext(29);
        i0.ɵɵpipe(30, "translate");
        i0.ɵɵpipe(31, "number");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r4 = i0.ɵɵreference(5);
        i0.ɵɵproperty("ngIf", ctx.units)("ngIfElse", _r1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.units)("ngIfElse", _r4);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 18, "igo.integration.advanced-map-tool.advanced-coordinates.copy"), "\n");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 20, "igo.integration.advanced-map-tool.advanced-coordinates.coordSystem"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.inputProj);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(17, 22, ctx.projections$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx.center)("labelPosition", "before");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 24, "igo.integration.advanced-map-tool.advanced-coordinates.center"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(23, 26, "igo.integration.advanced-map-tool.advanced-coordinates.zoom"), " ", ctx.map.viewController.getZoom(), "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(26, 28, "igo.integration.advanced-map-tool.advanced-coordinates.scale"), " ", i0.ɵɵpipeBind1(27, 30, ctx.formattedScale$), "");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(30, 32, "igo.integration.advanced-map-tool.advanced-coordinates.resolution"), " ", i0.ɵɵpipeBind2(31, 34, ctx.map.viewController.getResolution(), "1.0-0"), "");
    } }, directives: [i4$1.NgIf, i3.MatButton, i6.MatIcon, i3$1.ɵNgNoValidate, i3$1.NgControlStatusGroup, i3$1.FormGroupDirective, i6$1.MatFormField, i6$1.MatLabel, i7$1.MatSelect, i4$1.NgForOf, i10.MatSlideToggle, i10$1.MatInput, i8$1.MatOption], pipes: [i8.TranslatePipe, i4$1.AsyncPipe, i4$1.DecimalPipe], styles: ["textarea[_ngcontent-%COMP%]{resize:none}mat-form-field[_ngcontent-%COMP%]{padding:10px 15px}mat-form-field.coordinates[_ngcontent-%COMP%]{width:120px}mat-form-field.coordinates2[_ngcontent-%COMP%]{width:120px;padding:0 10px 0 3px}mat-form-field.igo-input-container[_ngcontent-%COMP%]{width:60%;padding:0 15px}.igo-form-button-group[_ngcontent-%COMP%]{padding:0 10px;margin:0 10px}.center-toggle[_ngcontent-%COMP%]{padding:10px 15px 35px}mat-slide-toggle[_ngcontent-%COMP%]{font-size:small}.igo-zoom[_ngcontent-%COMP%]{padding:0 15px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdvancedCoordinatesComponent, [{
        type: Component,
        args: [{
                selector: 'igo-advanced-coordinates',
                templateUrl: './advanced-coordinates.component.html',
                styleUrls: ['./advanced-coordinates.component.scss']
            }]
    }], function () { return [{ type: MapState }, { type: i2$1.LanguageService }, { type: i2$1.MessageService }, { type: i0.ChangeDetectorRef }, { type: i2$1.StorageService }, { type: i2$1.ConfigService }, { type: i3$1.FormBuilder }]; }, { projectionsLimitations: [{
            type: Input
        }] }); })();

let AdvancedMapToolComponent = class AdvancedMapToolComponent {
};
AdvancedMapToolComponent.ɵfac = function AdvancedMapToolComponent_Factory(t) { return new (t || AdvancedMapToolComponent)(); };
AdvancedMapToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdvancedMapToolComponent, selectors: [["igo-advanced-map-tool"]], decls: 10, vars: 6, consts: [[1, "nameOfTool"], [1, "advanced-tool-line"]], template: function AdvancedMapToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "igo-advanced-swipe");
        i0.ɵɵelement(4, "mat-divider", 1);
        i0.ɵɵelementStart(5, "h4", 0);
        i0.ɵɵtext(6);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "igo-advanced-coordinates");
        i0.ɵɵelement(9, "mat-divider", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, "igo.integration.advanced-map-tool.advanced-swipe.swipe-tool"));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 4, "igo.integration.advanced-map-tool.advanced-coordinates.coordinates"));
    } }, directives: [AdvancedSwipeComponent, i9.MatDivider, AdvancedCoordinatesComponent], pipes: [i8.TranslatePipe], styles: [".nameOfTool[_ngcontent-%COMP%]{text-align:center;font-weight:bold;font-size:small;margin:15px 10px 0}.advanced-tool-line[_ngcontent-%COMP%]{height:2px;background-color:gray}"] });
AdvancedMapToolComponent = __decorate([
    ToolComponent({
        name: 'advancedMap',
        title: 'igo.integration.tools.advancedMap',
        icon: 'toolbox'
    })
    /**
     * Tool to handle the advanced map tools
     */
], AdvancedMapToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdvancedMapToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-advanced-map-tool',
                templateUrl: './advanced-map-tool.component.html',
                styleUrls: ['./advanced-map-tool.component.scss']
            }]
    }], null, null); })();

class IgoAppMapModule {
    static forRoot() {
        return {
            ngModule: IgoAppMapModule,
            providers: []
        };
    }
}
IgoAppMapModule.ɵfac = function IgoAppMapModule_Factory(t) { return new (t || IgoAppMapModule)(); };
IgoAppMapModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppMapModule });
IgoAppMapModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            FormsModule,
            ReactiveFormsModule,
            MatButtonToggleModule,
            MatDividerModule,
            MatSelectModule,
            MatOptionModule,
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            IgoSpinnerModule,
            CommonModule,
            MatTabsModule,
            MatListModule,
            MatIconModule,
            IgoLanguageModule,
            IgoLayerModule,
            IgoMetadataModule,
            IgoDownloadModule,
            IgoImportExportModule,
            IgoFilterModule,
            IgoContextModule,
            IgoAppWorkspaceModule,
            MatSlideToggleModule,
            MatMenuModule,
            MatButtonModule,
            MatTooltipModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppMapModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    MatButtonToggleModule,
                    MatDividerModule,
                    MatSelectModule,
                    MatOptionModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatCheckboxModule,
                    IgoSpinnerModule,
                    CommonModule,
                    MatTabsModule,
                    MatListModule,
                    MatIconModule,
                    IgoLanguageModule,
                    IgoLayerModule,
                    IgoMetadataModule,
                    IgoDownloadModule,
                    IgoImportExportModule,
                    IgoFilterModule,
                    IgoContextModule,
                    IgoAppWorkspaceModule,
                    MatSlideToggleModule,
                    MatMenuModule,
                    MatButtonModule,
                    MatTooltipModule
                ],
                declarations: [AdvancedMapToolComponent, MapToolComponent,
                    MapToolsComponent, MapDetailsToolComponent, MapLegendToolComponent, AdvancedSwipeComponent, AdvancedCoordinatesComponent],
                exports: [AdvancedMapToolComponent, MapToolComponent, MapToolsComponent, MapDetailsToolComponent, MapLegendToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppMapModule, { declarations: [AdvancedMapToolComponent, MapToolComponent,
        MapToolsComponent, MapDetailsToolComponent, MapLegendToolComponent, AdvancedSwipeComponent, AdvancedCoordinatesComponent], imports: [FormsModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        IgoSpinnerModule,
        CommonModule,
        MatTabsModule,
        MatListModule,
        MatIconModule,
        IgoLanguageModule,
        IgoLayerModule,
        IgoMetadataModule,
        IgoDownloadModule,
        IgoImportExportModule,
        IgoFilterModule,
        IgoContextModule,
        IgoAppWorkspaceModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatButtonModule,
        MatTooltipModule], exports: [AdvancedMapToolComponent, MapToolComponent, MapToolsComponent, MapDetailsToolComponent, MapLegendToolComponent] }); })();

/**
 * Service that holds the state of the measure module
 */
class MeasureState {
    constructor(mapState) {
        this.mapState = mapState;
        /**
         * Store that holds the measures
         */
        this.store = new FeatureStore([], {
            map: this.mapState.map
        });
        this.mapState.map.layers$.subscribe((layers) => {
            if ((layers.filter(l => l.id.startsWith('igo-measures-')).length === 0)) {
                this.store.deleteMany(this.store.all());
                this.mapState.map.ol.getOverlays().getArray()
                    .filter(overlay => overlay.options.className.includes('igo-map-tooltip'))
                    .map(overlay => this.mapState.map.ol.removeOverlay(overlay));
            }
        });
    }
}
MeasureState.ɵfac = function MeasureState_Factory(t) { return new (t || MeasureState)(i0.ɵɵinject(MapState)); };
MeasureState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MeasureState, factory: MeasureState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeasureState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: MapState }]; }, null); })();

/**
 * Tool to measure lengths and areas
 */
let MeasurerToolComponent = class MeasurerToolComponent {
    constructor(measureState, mapState) {
        this.measureState = measureState;
        this.mapState = mapState;
    }
    /**
     * Map to measure on
     * @internal
     */
    get store() { return this.measureState.store; }
    /**
     * Map to measure on
     * @internal
     */
    get map() { return this.mapState.map; }
};
MeasurerToolComponent.ɵfac = function MeasurerToolComponent_Factory(t) { return new (t || MeasurerToolComponent)(i0.ɵɵdirectiveInject(MeasureState), i0.ɵɵdirectiveInject(MapState)); };
MeasurerToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MeasurerToolComponent, selectors: [["igo-measurer-tool"]], decls: 1, vars: 2, consts: [[3, "store", "map"]], template: function MeasurerToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-measurer", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("store", ctx.store)("map", ctx.map);
    } }, directives: [i1$1.MeasurerComponent], encapsulation: 2, changeDetection: 0 });
MeasurerToolComponent = __decorate([
    ToolComponent({
        name: 'measurer',
        title: 'igo.integration.tools.measurer',
        icon: 'ruler'
    })
], MeasurerToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeasurerToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-measurer-tool',
                templateUrl: './measurer-tool.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MeasureState }, { type: MapState }]; }, null); })();

/**
 * @ignore
 */
class IgoAppMeasurerToolModule {
}
IgoAppMeasurerToolModule.ɵfac = function IgoAppMeasurerToolModule_Factory(t) { return new (t || IgoAppMeasurerToolModule)(); };
IgoAppMeasurerToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppMeasurerToolModule });
IgoAppMeasurerToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            IgoMeasurerModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppMeasurerToolModule, [{
        type: NgModule,
        args: [{
                imports: [
                    IgoMeasurerModule
                ],
                declarations: [MeasurerToolComponent],
                exports: [MeasurerToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppMeasurerToolModule, { declarations: [MeasurerToolComponent], imports: [IgoMeasurerModule], exports: [MeasurerToolComponent] }); })();

class IgoAppMeasureModule {
}
IgoAppMeasureModule.ɵfac = function IgoAppMeasureModule_Factory(t) { return new (t || IgoAppMeasureModule)(); };
IgoAppMeasureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppMeasureModule });
IgoAppMeasureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[], IgoAppMeasurerToolModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppMeasureModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: [
                    IgoAppMeasurerToolModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppMeasureModule, { exports: [IgoAppMeasurerToolModule] }); })();

let PrintToolComponent = class PrintToolComponent {
    constructor(mapState) {
        this.mapState = mapState;
    }
    get map() {
        return this.mapState.map;
    }
};
PrintToolComponent.ɵfac = function PrintToolComponent_Factory(t) { return new (t || PrintToolComponent)(i0.ɵɵdirectiveInject(MapState)); };
PrintToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PrintToolComponent, selectors: [["igo-print-tool"]], decls: 1, vars: 1, consts: [[3, "map"]], template: function PrintToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-print", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("map", ctx.map);
    } }, directives: [i1$1.PrintComponent], encapsulation: 2 });
PrintToolComponent = __decorate([
    ToolComponent({
        name: 'print',
        title: 'igo.integration.tools.print',
        icon: 'printer'
    })
], PrintToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PrintToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-print-tool',
                templateUrl: './print-tool.component.html'
            }]
    }], function () { return [{ type: MapState }]; }, null); })();

class IgoAppPrintModule {
    static forRoot() {
        return {
            ngModule: IgoAppPrintModule,
            providers: []
        };
    }
}
IgoAppPrintModule.ɵfac = function IgoAppPrintModule_Factory(t) { return new (t || IgoAppPrintModule)(); };
IgoAppPrintModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppPrintModule });
IgoAppPrintModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoPrintModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppPrintModule, [{
        type: NgModule,
        args: [{
                imports: [IgoPrintModule],
                declarations: [PrintToolComponent],
                exports: [PrintToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppPrintModule, { declarations: [PrintToolComponent], imports: [IgoPrintModule], exports: [PrintToolComponent] }); })();

/**
 * Service that holds the state of the search module
 */
class SearchState {
    constructor(searchSourceService, storageService, configService) {
        this.searchSourceService = searchSourceService;
        this.storageService = storageService;
        this.configService = configService;
        this.searchOverlayStyle = {};
        this.searchOverlayStyleSelection = {};
        this.searchOverlayStyleFocus = {};
        this.searchTermSplitter$ = new BehaviorSubject('|');
        this.searchTerm$ = new BehaviorSubject(undefined);
        this.searchType$ = new BehaviorSubject(undefined);
        this.searchDisabled$ = new BehaviorSubject(false);
        this.searchResultsGeometryEnabled$ = new BehaviorSubject(false);
        this.searchSettingsChange$ = new BehaviorSubject(undefined);
        this.selectedResult$ = new BehaviorSubject(undefined);
        /**
         * Store that holds the search results
         */
        this.store = new EntityStore([]);
        const searchOverlayStyle = this.configService.getConfig('searchOverlayStyle');
        if (searchOverlayStyle) {
            this.searchOverlayStyle = searchOverlayStyle.base;
            this.searchOverlayStyleSelection = searchOverlayStyle.selection;
            this.searchOverlayStyleFocus = searchOverlayStyle.focus;
        }
        const searchResultsGeometryEnabled = this.storageService.get('searchResultsGeometryEnabled');
        if (searchResultsGeometryEnabled) {
            this.searchResultsGeometryEnabled$.next(searchResultsGeometryEnabled);
        }
        this.store.addStrategy(this.createCustomFilterTermStrategy(), false);
    }
    /**
     * Search types currently enabled in the search source service
     */
    get searchTypes() {
        return this.searchSourceService
            .getEnabledSources()
            .map((source) => source.constructor.type);
    }
    createCustomFilterTermStrategy() {
        const filterClauseFunc = (record) => {
            return record.entity.meta.score === 100;
        };
        return new EntityStoreFilterCustomFuncStrategy({ filterClauseFunc });
    }
    /**
     * Activate custom strategy
     *
     */
    activateCustomFilterTermStrategy() {
        const strategy = this.store.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
        if (strategy !== undefined) {
            strategy.activate();
        }
    }
    /**
     * Deactivate custom strategy
     *
     */
    deactivateCustomFilterTermStrategy() {
        const strategy = this.store.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
        if (strategy !== undefined) {
            strategy.deactivate();
        }
    }
    enableSearch() {
        this.searchDisabled$.next(false);
    }
    disableSearch() {
        this.searchDisabled$.next(true);
    }
    setSearchTerm(searchTerm) {
        this.searchTerm$.next(searchTerm);
    }
    setSearchType(searchType) {
        this.searchSourceService.enableSourcesByType(searchType);
        this.searchType$.next(searchType);
    }
    setSearchSettingsChange() {
        this.searchSettingsChange$.next(true);
    }
    setSelectedResult(result) {
        this.selectedResult$.next(result);
    }
    setSearchResultsGeometryStatus(value) {
        this.storageService.set('searchResultsGeometryEnabled', value);
        this.searchResultsGeometryEnabled$.next(value);
    }
}
SearchState.ɵfac = function SearchState_Factory(t) { return new (t || SearchState)(i0.ɵɵinject(i1$1.SearchSourceService), i0.ɵɵinject(i2$1.StorageService), i0.ɵɵinject(i2$1.ConfigService)); };
SearchState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SearchState, factory: SearchState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1$1.SearchSourceService }, { type: i2$1.StorageService }, { type: i2$1.ConfigService }]; }, null); })();

class SearchBarBindingDirective {
    constructor(component, searchState) {
        this.component = component;
        this.searchState = searchState;
    }
    get searchTerm() { return this.searchState.searchTerm$.value; }
    get searchType() { return this.searchState.searchType$.value; }
    ngOnInit() {
        this.searchTerm$$ = this.searchState.searchTerm$.subscribe((searchTerm) => {
            if (searchTerm !== undefined && searchTerm !== null) {
                this.component.setTerm(searchTerm);
            }
        });
        this.searchType$$ = this.searchState.searchType$.subscribe((searchType) => {
            if (searchType !== undefined && searchType !== null) {
                this.component.setSearchType(searchType);
            }
        });
        this.searchDisabled$$ = this.searchState.searchDisabled$.subscribe((searchDisabled) => {
            this.component.disabled = searchDisabled;
        });
    }
    ngOnDestroy() {
        this.searchTerm$$.unsubscribe();
        this.searchType$$.unsubscribe();
        this.searchDisabled$$.unsubscribe();
    }
    onSearchTermChange(searchTerm) {
        if (searchTerm !== this.searchTerm) {
            this.searchState.setSearchTerm(searchTerm);
        }
    }
    onSearchTypeChange(searchType) {
        if (searchType !== this.searchType) {
            this.searchState.setSearchType(searchType);
        }
    }
}
SearchBarBindingDirective.ɵfac = function SearchBarBindingDirective_Factory(t) { return new (t || SearchBarBindingDirective)(i0.ɵɵdirectiveInject(i1$1.SearchBarComponent, 2), i0.ɵɵdirectiveInject(SearchState)); };
SearchBarBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SearchBarBindingDirective, selectors: [["", "igoSearchBarBinding", ""]], hostBindings: function SearchBarBindingDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("searchTermChange", function SearchBarBindingDirective_searchTermChange_HostBindingHandler($event) { return ctx.onSearchTermChange($event); })("searchTypeChange", function SearchBarBindingDirective_searchTypeChange_HostBindingHandler($event) { return ctx.onSearchTypeChange($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchBarBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoSearchBarBinding]'
            }]
    }], function () { return [{ type: i1$1.SearchBarComponent, decorators: [{
                type: Self
            }] }, { type: SearchState }]; }, { onSearchTermChange: [{
            type: HostListener,
            args: ['searchTermChange', ['$event']]
        }], onSearchTypeChange: [{
            type: HostListener,
            args: ['searchTypeChange', ['$event']]
        }] }); })();

/**
 * @ignore
 */
class IgoAppSearchBarModule {
}
IgoAppSearchBarModule.ɵfac = function IgoAppSearchBarModule_Factory(t) { return new (t || IgoAppSearchBarModule)(); };
IgoAppSearchBarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppSearchBarModule });
IgoAppSearchBarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoSearchModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppSearchBarModule, [{
        type: NgModule,
        args: [{
                imports: [IgoSearchModule],
                declarations: [SearchBarBindingDirective],
                exports: [SearchBarBindingDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppSearchBarModule, { declarations: [SearchBarBindingDirective], imports: [IgoSearchModule], exports: [SearchBarBindingDirective] }); })();

function SearchResultsToolComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "section", 3);
    i0.ɵɵelementStart(2, "h4");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "div", 4);
    i0.ɵɵpipe(11, "sanitizeHtml");
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 3, "igo.integration.searchResultsTool.noResults"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 5, "igo.integration.searchResultsTool.doSearch"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(11, 7, i0.ɵɵpipeBind1(12, 9, "igo.integration.searchResultsTool.examples")), i0.ɵɵsanitizeHtml);
} }
function SearchResultsToolComponent_igo_flexible_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-search-add-button", 12);
} if (rf & 2) {
    const result_r6 = ctx.result;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("map", ctx_r4.map)("layer", result_r6);
} }
function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(3); return ctx_r8.zoomToFeatureExtent(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelement(3, "mat-icon", 19);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 3, i0.ɵɵpipeBind1(2, 5, ctx_r7.isSelectedResultOutOfView$) ? "igo.integration.searchResultsTool.zoomOnFeatureTooltipOutOfView" : "igo.integration.searchResultsTool.zoomOnFeatureTooltip"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matBadge", i0.ɵɵpipeBind1(4, 7, ctx_r7.isSelectedResultOutOfView$) ? "!" : "")("matBadgeHidden", i0.ɵɵpipeBind1(5, 9, ctx_r7.isSelectedResultOutOfView$) === false);
} }
function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-panel", 13);
    i0.ɵɵelementStart(1, "button", 14);
    i0.ɵɵlistener("click", function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.toggleTopPanel(); });
    i0.ɵɵelement(2, "mat-icon", 15);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SearchResultsToolComponent_igo_flexible_1_igo_panel_8_button_4_Template, 6, 11, "button", 16);
    i0.ɵɵelementStart(5, "igo-feature-details", 17);
    i0.ɵɵlistener("routingEvent", function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template_igo_feature_details_routingEvent_5_listener() { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.getRoute(); });
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r5.featureTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("svgIcon", i0.ɵɵpipeBind1(3, 6, ctx_r5.topPanelState$) === "collapsed" ? "arrow-up" : "arrow-down");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.feature.geometry);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("feature", i0.ɵɵpipeBind1(6, 8, ctx_r5.feature$))("map", ctx_r5.map)("toolbox", ctx_r5.toolState.toolbox);
} }
function SearchResultsToolComponent_igo_flexible_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-flexible", 5, 6);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵelementStart(4, "igo-search-results", 8);
    i0.ɵɵlistener("resultFocus", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultFocus_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onResultFocus($event); })("resultSelect", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultSelect_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onResultSelect($event); })("resultUnfocus", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultUnfocus_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.onResultUnfocus($event); })("resultMouseenter", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultMouseenter_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.onResultFocus($event); })("resultMouseleave", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultMouseleave_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onResultUnfocus($event); })("moreResults", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_moreResults_4_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onSearch($event); });
    i0.ɵɵtemplate(5, SearchResultsToolComponent_igo_flexible_1_ng_template_5_Template, 1, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 10);
    i0.ɵɵtemplate(8, SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template, 7, 10, "igo-panel", 11);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("state", i0.ɵɵpipeBind1(2, 7, ctx_r1.feature$) ? ctx_r1.topPanelState : "initial");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("store", ctx_r1.store)("showIcons", ctx_r1.showIcons)("term", ctx_r1.term)("termSplitter", ctx_r1.termSplitter)("settingsChange$", ctx_r1.settingsChange$);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(9, 9, ctx_r1.feature$));
} }
/**
 * Tool to browse the search results
 */
let SearchResultsToolComponent = class SearchResultsToolComponent {
    constructor(mapState, searchState, elRef, toolState, directionState, configService) {
        this.mapState = mapState;
        this.searchState = searchState;
        this.elRef = elRef;
        this.toolState = toolState;
        this.directionState = directionState;
        /**
         * to show hide results icons
         */
        this.showIcons = true;
        this.hasFeatureEmphasisOnSelection = false;
        this.shownResultsGeometries = [];
        this.shownResultsEmphasisGeometries = [];
        this.focusedResult$ = new BehaviorSubject(undefined);
        this.isSelectedResultOutOfView$ = new BehaviorSubject(false);
        this.term = '';
        this.settingsChange$ = new BehaviorSubject(undefined);
        this.topPanelState$ = new BehaviorSubject('initial');
        this.format = new olFormatGeoJSON();
        this.hasFeatureEmphasisOnSelection = configService.getConfig('hasFeatureEmphasisOnSelection');
    }
    /**
     * Store holding the search results
     * @internal
     */
    get store() {
        return this.searchState.store;
    }
    /**
     * Map to display the results on
     * @internal
     */
    get map() {
        return this.mapState.map;
    }
    get featureTitle() {
        return this.feature ? getEntityTitle(this.feature) : undefined;
    }
    get feature$() {
        return this.store.stateView
            .firstBy$((e) => e.state.focused)
            .pipe(map((element) => (this.feature = element
            ? element.entity.data
            : undefined)));
    }
    set topPanelState(value) {
        this.topPanelState$.next(value);
    }
    get topPanelState() {
        return this.topPanelState$.value;
    }
    get termSplitter() {
        return this.searchState.searchTermSplitter$.value;
    }
    ngOnInit() {
        this.searchTerm$$ = this.searchState.searchTerm$.subscribe((searchTerm) => {
            if (searchTerm !== undefined && searchTerm !== null) {
                this.term = searchTerm;
            }
        });
        for (const res of this.store.stateView.all$().value) {
            if (this.store.state.get(res.entity).selected === true) {
                this.topPanelState = 'expanded';
            }
        }
        this.searchState.searchSettingsChange$.subscribe(() => {
            this.settingsChange$.next(true);
        });
        this.topPanelState$$ = this.topPanelState$.subscribe(() => {
            const igoList = this.computeElementRef()[0];
            const selected = this.computeElementRef()[1];
            if (selected) {
                setTimeout(() => {
                    // To be sure the flexible component has been displayed yet
                    if (!this.isScrolledIntoView(igoList, selected)) {
                        this.adjustTopPanel(igoList, selected);
                    }
                }, FlexibleComponent.transitionTime + 50);
            }
        });
        if (this.hasFeatureEmphasisOnSelection) {
            if (!this.searchState.focusedOrResolution$$) {
                this.searchState.focusedOrResolution$$ = combineLatest([
                    this.focusedResult$,
                    this.map.viewController.resolution$
                ]).subscribe((bunch) => this.buildResultEmphasis(bunch[0], 'focused'));
            }
            if (!this.searchState.selectedOrResolution$$) {
                this.searchState.selectedOrResolution$$ = combineLatest([
                    this.searchState.selectedResult$,
                    this.map.viewController.resolution$
                ]).subscribe((bunch) => this.buildResultEmphasis(bunch[0], 'selected'));
            }
        }
        this.monitorResultOutOfView();
        this.showResultsGeometries$$ = combineLatest([
            this.searchState.searchResultsGeometryEnabled$,
            this.store.stateView.all$(),
            this.focusedResult$,
            this.searchState.selectedResult$,
            this.searchState.searchTerm$,
            this.map.viewController.resolution$
        ]).subscribe((bunch) => {
            const searchResultsGeometryEnabled = bunch[0];
            const searchResults = bunch[1];
            if (this.hasFeatureEmphasisOnSelection) {
                this.clearFeatureEmphasis('shown');
            }
            this.shownResultsGeometries.map(result => this.map.queryResultsOverlay.removeFeature(result));
            const featureToHandleGeom = searchResults
                .filter(result => result.entity.meta.dataType === FEATURE &&
                result.entity.data.geometry &&
                !result.state.selected &&
                !result.state.focused);
            featureToHandleGeom.map(result => {
                var _a;
                if (searchResultsGeometryEnabled) {
                    result.entity.data.meta.style =
                        getCommonVectorStyle(Object.assign({}, { feature: result.entity.data }, this.searchState.searchOverlayStyle, ((_a = result.entity.style) === null || _a === void 0 ? void 0 : _a.base) ? result.entity.style.base : {}));
                    this.shownResultsGeometries.push(result.entity.data);
                    this.map.queryResultsOverlay.addFeature(result.entity.data, FeatureMotion.None);
                    if (this.hasFeatureEmphasisOnSelection) {
                        this.buildResultEmphasis(result.entity, 'shown');
                    }
                }
            });
        });
    }
    monitorResultOutOfView() {
        this.isSelectedResultOutOfView$$ = combineLatest([
            this.map.viewController.state$,
            this.searchState.selectedResult$
        ])
            .pipe(debounceTime(100))
            .subscribe((bunch) => {
            const selectedResult = bunch[1];
            if (!selectedResult) {
                this.isSelectedResultOutOfView$.next(false);
                return;
            }
            if (selectedResult.data.geometry) {
                const selectedOlFeature = featureToOl(selectedResult.data, this.map.projection);
                const selectedOlFeatureExtent = computeOlFeaturesExtent(this.map, [
                    selectedOlFeature
                ]);
                this.isSelectedResultOutOfView$.next(featuresAreOutOfView(this.map, selectedOlFeatureExtent));
            }
        });
    }
    buildResultEmphasis(result, trigger) {
        var _a, _b, _c;
        if (trigger !== 'shown') {
            this.clearFeatureEmphasis(trigger);
        }
        if (!result || !result.data.geometry) {
            return;
        }
        const myOlFeature = featureToOl(result.data, this.map.projection);
        const olGeometry = myOlFeature.getGeometry();
        if (featuresAreTooDeepInView(this.map, olGeometry.getExtent(), 0.0025)) {
            const extent = olGeometry.getExtent();
            const x = extent[0] + (extent[2] - extent[0]) / 2;
            const y = extent[1] + (extent[3] - extent[1]) / 2;
            const feature1 = new olFeature({
                name: `${trigger}AbstractResult'`,
                geometry: new olPoint([x, y])
            });
            const abstractResult = featureFromOl(feature1, this.map.projection);
            let computedStyle;
            let zIndexOffset = 0;
            switch (trigger) {
                case 'focused':
                    computedStyle = getCommonVectorSelectedStyle(Object.assign({}, { feature: abstractResult }, this.searchState.searchOverlayStyleFocus, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.focus) ? result.style.focus : {}));
                    zIndexOffset = 2;
                    break;
                case 'shown':
                    computedStyle = getCommonVectorStyle(Object.assign({}, { feature: abstractResult }, this.searchState.searchOverlayStyle, ((_b = result.style) === null || _b === void 0 ? void 0 : _b.base) ? result.style.base : {}));
                    break;
                case 'selected':
                    computedStyle = getCommonVectorSelectedStyle(Object.assign({}, { feature: abstractResult }, this.searchState.searchOverlayStyleSelection, ((_c = result.style) === null || _c === void 0 ? void 0 : _c.selection) ? result.style.selection : {}));
                    zIndexOffset = 1;
                    break;
            }
            abstractResult.meta.style = computedStyle;
            abstractResult.meta.style.setZIndex(2000 + zIndexOffset);
            this.map.searchResultsOverlay.addFeature(abstractResult, FeatureMotion.None);
            if (trigger === 'focused') {
                this.abstractFocusedResult = abstractResult;
            }
            if (trigger === 'selected') {
                this.abstractSelectedResult = abstractResult;
            }
            if (trigger === 'shown') {
                this.shownResultsEmphasisGeometries.push(abstractResult);
            }
        }
        else {
            this.clearFeatureEmphasis(trigger);
        }
    }
    clearFeatureEmphasis(trigger) {
        if (trigger === 'focused' && this.abstractFocusedResult) {
            this.map.searchResultsOverlay.removeFeature(this.abstractFocusedResult);
            this.abstractFocusedResult = undefined;
        }
        if (trigger === 'selected' && this.abstractSelectedResult) {
            this.map.searchResultsOverlay.removeFeature(this.abstractSelectedResult);
            this.abstractSelectedResult = undefined;
        }
        if (trigger === 'shown') {
            this.shownResultsEmphasisGeometries.map(shownResult => this.map.searchResultsOverlay.removeFeature(shownResult));
            this.shownResultsEmphasisGeometries = [];
        }
    }
    ngOnDestroy() {
        this.topPanelState$$.unsubscribe();
        this.searchTerm$$.unsubscribe();
        if (this.isSelectedResultOutOfView$$) {
            this.isSelectedResultOutOfView$$.unsubscribe();
        }
        if (this.showResultsGeometries$$) {
            this.showResultsGeometries$$.unsubscribe();
        }
        if (this.getRoute$$) {
            this.getRoute$$.unsubscribe();
        }
    }
    /**
     * Try to add a feature to the map when it's being focused
     * @internal
     * @param result A search result that could be a feature
     */
    onResultFocus(result) {
        var _a;
        this.focusedResult$.next(result);
        if (result.meta.dataType === FEATURE && result.data.geometry) {
            result.data.meta.style = getCommonVectorSelectedStyle(Object.assign({}, { feature: result.data }, this.searchState.searchOverlayStyleFocus, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.focus) ? result.style.focus : {}));
            const feature = this.map.searchResultsOverlay.dataSource.ol.getFeatureById(result.meta.id);
            if (feature) {
                feature.setStyle(result.data.meta.style);
                return;
            }
            this.map.searchResultsOverlay.addFeature(result.data, FeatureMotion.None);
        }
    }
    onResultUnfocus(result) {
        var _a;
        this.focusedResult$.next(undefined);
        if (result.meta.dataType !== FEATURE) {
            return;
        }
        if (this.store.state.get(result).selected === true) {
            const feature = this.map.searchResultsOverlay.dataSource.ol.getFeatureById(result.meta.id);
            if (feature) {
                const style = getCommonVectorSelectedStyle(Object.assign({}, { feature: result.data }, this.searchState.searchOverlayStyleFocus, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.focus) ? result.style.focus : {}));
                feature.setStyle(style);
            }
            return;
        }
        this.map.searchResultsOverlay.removeFeature(result.data);
    }
    /**
     * Try to add a feature to the map when it's being selected
     * @internal
     * @param result A search result that could be a feature or some layer options
     */
    onResultSelect(result) {
        this.map.searchResultsOverlay.dataSource.ol.clear();
        this.tryAddFeatureToMap(result);
        this.searchState.setSelectedResult(result);
        if (this.topPanelState === 'expanded') {
            const igoList = this.computeElementRef()[0];
            const selected = this.computeElementRef()[1];
            setTimeout(() => {
                // To be sure the flexible component has been displayed yet
                if (!this.isScrolledIntoView(igoList, selected)) {
                    this.adjustTopPanel(igoList, selected);
                }
            }, FlexibleComponent.transitionTime + 50);
        }
        if (this.topPanelState === 'initial') {
            this.topPanelState = 'expanded';
        }
    }
    onSearch(event) {
        const results = event.results;
        const newResults = this.store.entities$.value
            .filter((result) => result.source !== event.research.source)
            .concat(results);
        this.store.load(newResults);
        for (const res of this.store.all()) {
            if (this.store.state.get(res).focused === true &&
                this.store.state.get(res).selected !== true) {
                this.store.state.update(res, { focused: false }, true);
            }
        }
        setTimeout(() => {
            const igoList = this.elRef.nativeElement.querySelector('igo-list');
            let moreResults;
            event.research.request.subscribe((source) => {
                if (!source[0] || !source[0].source) {
                    moreResults = null;
                }
                else if (source[0].source.getId() === 'icherche') {
                    moreResults = igoList.querySelector('.icherche .moreResults');
                }
                else if (source[0].source.getId() === 'ilayer') {
                    moreResults = igoList.querySelector('.ilayer .moreResults');
                }
                else if (source[0].source.getId() === 'nominatim') {
                    moreResults = igoList.querySelector('.nominatim .moreResults');
                }
                else {
                    moreResults = igoList.querySelector('.' + source[0].source.getId() + ' .moreResults');
                }
                if (moreResults !== null &&
                    !this.isScrolledIntoView(igoList, moreResults)) {
                    igoList.scrollTop =
                        moreResults.offsetTop +
                            moreResults.offsetHeight -
                            igoList.clientHeight;
                }
            });
        }, 250);
    }
    computeElementRef() {
        const items = document.getElementsByTagName('igo-search-results-item');
        const igoList = this.elRef.nativeElement.getElementsByTagName('igo-list')[0];
        let selectedItem;
        // eslint-disable-next-line
        for (let i = 0; i < items.length; i++) {
            if (items[i].className.includes('igo-list-item-selected')) {
                selectedItem = items[i];
            }
        }
        return [igoList, selectedItem];
    }
    adjustTopPanel(elemSource, elem) {
        if (!this.isScrolledIntoView(elemSource, elem)) {
            elemSource.scrollTop =
                elem.offsetTop +
                    elem.children[0].offsetHeight -
                    elemSource.clientHeight;
        }
    }
    toggleTopPanel() {
        if (this.topPanelState === 'expanded') {
            this.topPanelState = 'collapsed';
        }
        else {
            this.topPanelState = 'expanded';
        }
    }
    zoomToFeatureExtent() {
        if (this.feature.geometry) {
            const localOlFeature = this.format.readFeature(this.feature, {
                dataProjection: this.feature.projection,
                featureProjection: this.map.projection
            });
            moveToOlFeatures(this.map, [localOlFeature], FeatureMotion.Zoom);
        }
    }
    /**
     * Try to add a feature to the map overlay
     * @param result A search result that could be a feature
     */
    tryAddFeatureToMap(result) {
        var _a;
        if (result.meta.dataType !== FEATURE) {
            return undefined;
        }
        const feature = result.data;
        // Somethimes features have no geometry. It happens with some GetFeatureInfo
        if (!feature.geometry) {
            return;
        }
        feature.meta.style = getCommonVectorSelectedStyle(Object.assign({}, { feature }, this.searchState.searchOverlayStyleSelection, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.selection) ? result.style.selection : {}));
        this.map.searchResultsOverlay.addFeature(feature);
    }
    isScrolledIntoView(elemSource, elem) {
        const padding = 6;
        const docViewTop = elemSource.scrollTop;
        const docViewBottom = docViewTop + elemSource.clientHeight;
        const elemTop = elem.offsetTop;
        const elemBottom = elemTop + elem.clientHeight + padding;
        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
    getRoute() {
        this.toolState.toolbox.activateTool('directions');
        this.directionState.stopsStore.clearStops();
        setTimeout(() => {
            let routingCoordLoaded = false;
            if (this.getRoute$$) {
                this.getRoute$$.unsubscribe();
            }
            this.getRoute$$ = this.directionState.stopsStore.storeInitialized$.subscribe((init) => {
                if (this.directionState.stopsStore.storeInitialized$.value && !routingCoordLoaded) {
                    routingCoordLoaded = true;
                    const stop = this.directionState.stopsStore.all().find((e) => e.position === 1);
                    let coord;
                    if (this.feature.geometry) {
                        if (this.feature.geometry.type === 'Point') {
                            coord = [this.feature.geometry.coordinates[0], this.feature.geometry.coordinates[1]];
                        }
                        else {
                            const point = pointOnFeature(this.feature.geometry);
                            coord = [point.geometry.coordinates[0], point.geometry.coordinates[1]];
                        }
                    }
                    stop.text = this.featureTitle;
                    stop.coordinates = coord;
                    this.directionState.stopsStore.update(stop);
                }
            });
        }, 250);
    }
};
SearchResultsToolComponent.ɵfac = function SearchResultsToolComponent_Factory(t) { return new (t || SearchResultsToolComponent)(i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(SearchState), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(ToolState), i0.ɵɵdirectiveInject(DirectionState), i0.ɵɵdirectiveInject(i2$1.ConfigService)); };
SearchResultsToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchResultsToolComponent, selectors: [["igo-search-results-tool"]], inputs: { showIcons: "showIcons", topPanelState: "topPanelState" }, decls: 3, vars: 4, consts: [["style", "margin: 10px;", 4, "ngIf"], ["initial", "100%", "initialMobile", "100%", "collapsed", "calc(100% - 58px)", "collapsedMobile", "calc(100% - 58px)", "expanded", "60%", "expandedMobile", "60%", 3, "state", 4, "ngIf"], [2, "margin", "10px"], [1, "mat-typography"], [3, "innerHTML"], ["initial", "100%", "initialMobile", "100%", "collapsed", "calc(100% - 58px)", "collapsedMobile", "calc(100% - 58px)", "expanded", "60%", "expandedMobile", "60%", 3, "state"], ["topPanel", ""], [1, "igo-content"], ["placeholder", "false", 3, "store", "showIcons", "term", "termSplitter", "settingsChange$", "resultFocus", "resultSelect", "resultUnfocus", "resultMouseenter", "resultMouseleave", "moreResults"], ["igoSearchItemToolbar", ""], ["igoFlexibleFill", "", 1, "igo-content"], [3, "title", 4, "ngIf"], [3, "map", "layer"], [3, "title"], ["mat-icon-button", "", "panelLeftButton", "", 1, "igo-icon-button", 3, "click"], [3, "svgIcon"], ["mat-icon-button", "", "panelRightButton", "", "class", "igo-icon-button", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["igoFeatureDetailsDirective", "", 3, "feature", "map", "toolbox", "routingEvent"], ["mat-icon-button", "", "panelRightButton", "", "matTooltipShowDelay", "500", 1, "igo-icon-button", 3, "matTooltip", "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "svgIcon", "magnify-plus-outline", 3, "matBadge", "matBadgeHidden"]], template: function SearchResultsToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SearchResultsToolComponent_div_0_Template, 13, 11, "div", 0);
        i0.ɵɵtemplate(1, SearchResultsToolComponent_igo_flexible_1_Template, 10, 11, "igo-flexible", 1);
        i0.ɵɵpipe(2, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.store || ctx.store.stateView.empty);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.store && i0.ɵɵpipeBind1(2, 2, ctx.store.stateView.empty$) === false);
    } }, directives: [i4$1.NgIf, i4.FlexibleComponent, i1$1.SearchResultsComponent, i1$1.SearchResultAddButtonComponent, i4.PanelComponent, i3.MatButton, i6.MatIcon, i1$1.FeatureDetailsComponent, i1$1.FeatureDetailsDirective, i4$2.MatTooltip, i12.MatBadge], pipes: [i4$1.AsyncPipe, i8.TranslatePipe, i4.SanitizeHtmlPipe], encapsulation: 2, changeDetection: 0 });
SearchResultsToolComponent = __decorate([
    ToolComponent({
        name: 'searchResults',
        title: 'igo.integration.tools.searchResults',
        icon: 'magnify'
    })
], SearchResultsToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchResultsToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-search-results-tool',
                templateUrl: './search-results-tool.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MapState }, { type: SearchState }, { type: i0.ElementRef }, { type: ToolState }, { type: DirectionState }, { type: i2$1.ConfigService }]; }, { showIcons: [{
            type: Input
        }], topPanelState: [{
            type: Input
        }] }); })();

/**
 * @ignore
 */
class IgoAppSearchResultsToolModule {
}
IgoAppSearchResultsToolModule.ɵfac = function IgoAppSearchResultsToolModule_Factory(t) { return new (t || IgoAppSearchResultsToolModule)(); };
IgoAppSearchResultsToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppSearchResultsToolModule });
IgoAppSearchResultsToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatBadgeModule,
            MatTooltipModule,
            MatButtonModule,
            IgoLanguageModule,
            IgoFeatureModule,
            IgoSearchModule,
            IgoFlexibleModule,
            IgoPanelModule,
            IgoFeatureDetailsModule,
            IgoCustomHtmlModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppSearchResultsToolModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatBadgeModule,
                    MatTooltipModule,
                    MatButtonModule,
                    IgoLanguageModule,
                    IgoFeatureModule,
                    IgoSearchModule,
                    IgoFlexibleModule,
                    IgoPanelModule,
                    IgoFeatureDetailsModule,
                    IgoCustomHtmlModule
                ],
                declarations: [SearchResultsToolComponent],
                exports: [SearchResultsToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppSearchResultsToolModule, { declarations: [SearchResultsToolComponent], imports: [CommonModule,
        MatIconModule,
        MatBadgeModule,
        MatTooltipModule,
        MatButtonModule,
        IgoLanguageModule,
        IgoFeatureModule,
        IgoSearchModule,
        IgoFlexibleModule,
        IgoPanelModule,
        IgoFeatureDetailsModule,
        IgoCustomHtmlModule], exports: [SearchResultsToolComponent] }); })();

class IgoAppSearchModule {
}
IgoAppSearchModule.ɵfac = function IgoAppSearchModule_Factory(t) { return new (t || IgoAppSearchModule)(); };
IgoAppSearchModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppSearchModule });
IgoAppSearchModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[], IgoAppSearchBarModule,
        IgoAppSearchResultsToolModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppSearchModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: [
                    IgoAppSearchBarModule,
                    IgoAppSearchResultsToolModule
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppSearchModule, { exports: [IgoAppSearchBarModule,
        IgoAppSearchResultsToolModule] }); })();

let OgcFilterToolComponent = class OgcFilterToolComponent {
    constructor() { }
};
OgcFilterToolComponent.ɵfac = function OgcFilterToolComponent_Factory(t) { return new (t || OgcFilterToolComponent)(); };
OgcFilterToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OgcFilterToolComponent, selectors: [["igo-ogc-filter-tool"]], decls: 1, vars: 0, consts: [["igoOgcFilterableListBinding", ""]], template: function OgcFilterToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-ogc-filterable-list", 0);
    } }, directives: [i1$1.OgcFilterableListComponent, i1$1.OgcFilterableListBindingDirective], encapsulation: 2 });
OgcFilterToolComponent = __decorate([
    ToolComponent({
        name: 'ogcFilter',
        title: 'igo.integration.tools.ogcFilter',
        icon: 'filter'
    })
], OgcFilterToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-ogc-filter-tool',
                templateUrl: './ogc-filter-tool.component.html'
            }]
    }], function () { return []; }, null); })();

let TimeFilterToolComponent = class TimeFilterToolComponent {
    constructor() { }
};
TimeFilterToolComponent.ɵfac = function TimeFilterToolComponent_Factory(t) { return new (t || TimeFilterToolComponent)(); };
TimeFilterToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimeFilterToolComponent, selectors: [["igo-time-filter-tool"]], decls: 1, vars: 0, consts: [["igoTimeFilterListBinding", ""]], template: function TimeFilterToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-time-filter-list", 0);
    } }, directives: [i1$1.TimeFilterListComponent, i1$1.TimeFilterListBindingDirective], encapsulation: 2 });
TimeFilterToolComponent = __decorate([
    ToolComponent({
        name: 'timeFilter',
        title: 'igo.integration.tools.timeFilter',
        icon: 'history'
    })
], TimeFilterToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeFilterToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-time-filter-tool',
                templateUrl: './time-filter-tool.component.html'
            }]
    }], function () { return []; }, null); })();

function SpatialFilterToolComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "igo-feature-details", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const feature_r1 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("feature", feature_r1);
} }
/**
 * Tool to apply spatial filter
 */
let SpatialFilterToolComponent = class SpatialFilterToolComponent {
    constructor(matIconRegistry, spatialFilterService, dataSourceService, layerService, mapState, messageService, languageService, importExportState, toolState, workspaceState, cdRef) {
        this.matIconRegistry = matIconRegistry;
        this.spatialFilterService = spatialFilterService;
        this.dataSourceService = dataSourceService;
        this.layerService = layerService;
        this.mapState = mapState;
        this.messageService = messageService;
        this.languageService = languageService;
        this.importExportState = importExportState;
        this.toolState = toolState;
        this.workspaceState = workspaceState;
        this.cdRef = cdRef;
        this.itemType = SpatialFilterItemType.Address;
        this.layers = [];
        this.activeLayers = [];
        this.buffer = 0;
        this.iterator = 1;
        this.selectedFeature$ = new BehaviorSubject(undefined);
        this.format = new olFormatGeoJSON();
        this.store = new EntityStore([]); // Store to print results at the end
        this.spatialListStore = new EntityStore([]);
        this.loading = false;
        this.thematicLength = 0;
        this.measureUnit = MeasureLengthUnit.Meters;
        this.unsubscribe$ = new Subject();
    }
    get map() {
        return this.mapState.map;
    }
    ngOnInit() {
        for (const layer of this.map.layers) {
            if (layer.title && layer.title.includes(this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter'))) {
                this.layers.push(layer);
            }
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    getOutputType(event) {
        this.type = event;
        this.queryType = undefined;
    }
    getOutputQueryType(event) {
        this.queryType = event;
        if (this.queryType) {
            this.loadFilterList();
        }
    }
    activateExportTool() {
        const ids = [];
        const re = new RegExp('^Zone \\d+');
        for (const layer of this.layers) {
            if (!layer.title.match(re)) {
                ids.push(layer.id);
            }
        }
        this.importExportState.setMode(ImportExportMode.export);
        this.importExportState.setsExportOptions({ layers: ids });
        this.toolState.toolbox.activateTool('importExport');
    }
    activateWorkspace(record) {
        let layerToOpenWks;
        this.workspaceState.store.entities$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            if (!record && this.activeLayers.length && this.workspaceState.store.all().length > 1) {
                if (this.itemType === SpatialFilterItemType.Thematics) {
                    for (const thematic of this.thematics) {
                        if (!thematic.zeroResults) {
                            layerToOpenWks = this.activeLayers.find(layer => layer.title.includes(thematic.name + ' ' + this.iterator.toString()));
                            break;
                        }
                    }
                }
                else {
                    const title = 'Adresses ' + this.iterator.toString();
                    this.activeLayers.forEach((layer) => {
                        if (layer.title.includes(title)) {
                            layerToOpenWks = layer;
                        }
                    });
                }
                if (layerToOpenWks) {
                    this.workspaceState.workspacePanelExpanded = true;
                    this.workspaceState.setActiveWorkspaceById(layerToOpenWks.id);
                }
            }
            else if (record && this.activeLayers.length && this.workspaceState.store.all().length > 1) {
                this.selectWorkspaceEntity(record);
                this.moveendKey = this.map.ol.on('moveend', () => {
                    this.selectWorkspaceEntity(record);
                });
            }
        });
    }
    selectWorkspaceEntity(record) {
        this.workspaceState.store.all().forEach(workspace => {
            workspace.entityStore.state.updateAll({ selected: false });
            if (workspace.title.includes(record.added[0].meta.title)) {
                this.workspaceState.setActiveWorkspaceById(workspace.id);
                workspace.entityStore.state.updateMany(record.added, { selected: true });
            }
        });
    }
    loadFilterList() {
        this.spatialFilterService
            .loadFilterList(this.queryType)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((features) => {
            features.sort((a, b) => {
                if (a.properties.nom < b.properties.nom) {
                    return -1;
                }
                if (a.properties.nom > b.properties.nom) {
                    return 1;
                }
                return 0;
            });
            this.spatialListStore.clear();
            this.spatialListStore.load(features);
        });
    }
    getOutputToggleSearch() {
        this.loadThematics();
    }
    getOutputClearSearch() {
        this.zone = undefined;
        this.queryType = undefined;
    }
    clearMap() {
        this.map.removeLayers(this.layers);
        this.layers = [];
        this.activeLayers = [];
        this.thematicLength = 0;
        this.iterator = 1;
        if (this.type === SpatialFilterType.Predefined) {
            this.zone = undefined;
            this.queryType = undefined;
        }
    }
    loadThematics() {
        this.loading = true;
        let zeroResults = true;
        let thematics;
        if (this.buffer === 0 || this.type === SpatialFilterType.Point) {
            this.tryAddFeaturesToMap([this.zone]);
        }
        if (this.itemType !== SpatialFilterItemType.Thematics) {
            const theme = {
                name: ''
            };
            thematics = [theme];
        }
        else {
            thematics = this.thematics;
        }
        if (this.measureUnit === MeasureLengthUnit.Kilometers && this.type !== SpatialFilterType.Point) {
            this.buffer = this.buffer * 1000;
        }
        if (this.type === SpatialFilterType.Polygon) {
            this.buffer = 0; // to avoid buffer enter a second time in terrAPI
        }
        const observables$ = [];
        thematics.forEach(thematic => {
            observables$.push(this.spatialFilterService
                .loadFilterItem(this.zone, this.itemType, this.queryType, thematic, this.buffer)
                .pipe(tap((features) => {
                this.store.insertMany(features);
                const featuresPoint = [];
                const featuresLinePoly = [];
                let idPoint;
                let idLinePoly;
                features.forEach(feature => {
                    if (feature.geometry.type === 'Point') {
                        feature.properties.longitude = feature.geometry.coordinates[0];
                        feature.properties.latitude = feature.geometry.coordinates[1];
                        featuresPoint.push(feature);
                        idPoint = feature.meta.id;
                    }
                    else {
                        featuresLinePoly.push(feature);
                        idLinePoly = feature.meta.id;
                    }
                });
                this.tryAddPointToMap(featuresPoint, idPoint);
                this.tryAddLayerToMap(featuresLinePoly, idLinePoly);
                if (features.length) {
                    zeroResults = false;
                    this.thematicLength += 1;
                    thematic.zeroResults = false;
                    this.cdRef.detectChanges();
                }
                else {
                    thematic.zeroResults = true;
                }
                if (features.length >= 10000) {
                    this.messageService.alert(this.languageService.translate.instant('igo.geo.spatialFilter.maxSizeAlert'), this.languageService.translate.instant('igo.geo.spatialFilter.warning'), { timeOut: 10000 });
                }
            })));
        });
        forkJoin(observables$).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.loading = false;
            if (zeroResults) {
                this.messageService.alert(this.languageService.translate.instant('igo.geo.spatialFilter.zeroResults'), this.languageService.translate.instant('igo.geo.spatialFilter.warning'), { timeOut: 10000 });
            }
        });
    }
    onZoneChange(feature, buffer) {
        this.zone = feature;
        if (feature) {
            buffer ? this.tryAddFeaturesToMap([feature], true) : this.tryAddFeaturesToMap([feature]);
            this.zoomToFeatureExtent(feature);
        }
    }
    /**
     * Try to add zone feature to the map overlay
     */
    tryAddFeaturesToMap(features, buffer) {
        var _a, _b, _c, _d;
        let i = 1;
        for (const feature of features) {
            if (this.type === SpatialFilterType.Predefined) {
                for (const layer of this.layers) {
                    if (layer.options._internal &&
                        layer.options._internal.code === feature.properties.code &&
                        !buffer) {
                        if (!((_a = layer.title) === null || _a === void 0 ? void 0 : _a.startsWith('Zone'))) {
                            const index = this.layers.indexOf(layer);
                            this.layers.splice(index, 1);
                        }
                        return;
                    }
                    if ((_b = layer.title) === null || _b === void 0 ? void 0 : _b.startsWith('Zone')) {
                        this.activeLayers = [];
                        const index = this.layers.indexOf(layer);
                        this.layers.splice(index, 1);
                        this.map.removeLayer(layer);
                    }
                }
            }
            else {
                if (buffer) {
                    for (const layer of this.activeLayers) {
                        if (this.activeLayers.length === 1 && ((_c = layer.title) === null || _c === void 0 ? void 0 : _c.startsWith('Zone'))) {
                            const index = this.layers.indexOf(layer);
                            this.layers.splice(index, 1);
                            this.map.removeLayer(layer);
                        }
                    }
                }
                this.activeLayers = [];
            }
            for (const layer of this.layers) {
                if ((_d = layer.title) === null || _d === void 0 ? void 0 : _d.startsWith('Zone')) {
                    i++;
                }
            }
            this.dataSourceService
                .createAsyncDataSource({
                type: 'vector',
                queryable: true
            })
                .pipe(take(1))
                .subscribe((dataSource) => {
                const olLayer = this.layerService.createLayer({
                    isIgoInternalLayer: true,
                    title: ('Zone ' + i + ' - ' + this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter')),
                    workspace: { enabled: true },
                    _internal: {
                        code: this.type === SpatialFilterType.Predefined
                            ? feature.properties.code
                            : undefined
                    },
                    source: dataSource,
                    visible: true,
                    style: (_feature, resolution) => {
                        const coordinates = features[0].coordinates;
                        return new olstyle.Style({
                            image: new olstyle.Circle({
                                radius: coordinates
                                    ? this.buffer /
                                        Math.cos((Math.PI / 180) * coordinates[1]) /
                                        resolution
                                    : undefined,
                                fill: new olstyle.Fill({
                                    color: 'rgba(200, 200, 20, 0.2)'
                                }),
                                stroke: new olstyle.Stroke({
                                    width: 1,
                                    color: 'orange'
                                })
                            }),
                            stroke: new olstyle.Stroke({
                                width: 1,
                                color: 'orange'
                            }),
                            fill: new olstyle.Fill({
                                color: 'rgba(200, 200, 20, 0.2)'
                            })
                        });
                    }
                });
                const featuresOl = features.map(f => {
                    return featureToOl(f, this.map.projection);
                });
                if (this.type !== SpatialFilterType.Predefined) {
                    const type = this.type === SpatialFilterType.Point ? 'Cercle' : 'Polygone';
                    featuresOl[0].set('nom', 'Zone', true);
                    featuresOl[0].set('type', type, true);
                }
                const ol = dataSource.ol;
                ol.addFeatures(featuresOl);
                this.map.addLayer(olLayer);
                this.layers.push(olLayer);
                this.activeLayers.push(olLayer);
                this.cdRef.detectChanges();
            });
        }
    }
    /**
     * Try to add point features to the map
     * Necessary to create clusters
     */
    tryAddPointToMap(features, id) {
        var _a;
        let i = 1;
        if (features.length) {
            if (this.map === undefined) {
                return;
            }
            for (const layer of this.layers) {
                if ((_a = layer.title) === null || _a === void 0 ? void 0 : _a.startsWith(features[0].meta.title)) {
                    i++;
                }
            }
            this.dataSourceService
                .createAsyncDataSource({
                type: 'cluster',
                id,
                queryable: true,
                distance: 120,
                meta: {
                    title: 'Cluster'
                }
            })
                .pipe(take(1))
                .subscribe((dataSource) => {
                const icon = features[0].meta.icon;
                let style;
                if (!icon) {
                    style = createOverlayMarkerStyle();
                }
                else {
                    style = this.createSvgIcon(icon) || createOverlayMarkerStyle();
                }
                const olLayer = this.layerService.createLayer({
                    isIgoInternalLayer: true,
                    title: (features[0].meta.title + ' ' + i + ' - ' + this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter')),
                    source: dataSource,
                    visible: true,
                    style
                });
                const featuresOl = features.map(feature => {
                    return featureToOl(feature, this.map.projection);
                });
                const ol = dataSource.ol;
                ol.getSource().addFeatures(featuresOl);
                if (this.layers.find(layer => layer.id === olLayer.id)) {
                    this.map.removeLayer(this.layers.find(layer => layer.id === olLayer.id));
                    i = i - 1;
                    olLayer.title = (features[0].meta.title + ' ' + i + ' - ' + this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter'));
                    olLayer.options.title = olLayer.title;
                }
                this.iterator = i;
                this.map.addLayer(olLayer);
                this.layers.push(olLayer);
                this.pushLayer(olLayer);
                this.cdRef.detectChanges();
            });
        }
    }
    createSvgIcon(icon) {
        let style;
        this.matIconRegistry.getNamedSvgIcon(icon).subscribe(svgObj => {
            const xmlSerializer = new XMLSerializer();
            svgObj.setAttribute('width', '30');
            svgObj.setAttribute('height', '30');
            svgObj.setAttribute('fill', 'rgba(0, 128, 255)');
            svgObj.setAttribute('stroke', 'white');
            const svg = xmlSerializer.serializeToString(svgObj);
            style = new olstyle.Style({
                image: new olstyle.Icon({
                    src: 'data:image/svg+xml;utf8,' + svg
                })
            });
        });
        return style;
    }
    /**
     * Try to add line or polygon features to the map
     */
    tryAddLayerToMap(features, id) {
        var _a;
        let i = 1;
        if (features.length) {
            if (this.map === undefined) {
                return;
            }
            for (const layer of this.layers) {
                if ((_a = layer.title) === null || _a === void 0 ? void 0 : _a.startsWith(features[0].meta.title)) {
                    i++;
                }
            }
            this.dataSourceService
                .createAsyncDataSource({
                type: 'vector',
                id,
                queryable: true
            })
                .pipe(take(1))
                .subscribe((dataSource) => {
                const olLayer = this.layerService.createLayer({
                    isIgoInternalLayer: true,
                    title: (features[0].meta.title + ' ' + i + ' - ' + this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter')),
                    source: dataSource,
                    visible: true
                });
                const featuresOl = features.map(feature => {
                    return featureToOl(feature, this.map.projection);
                });
                const ol = dataSource.ol;
                ol.addFeatures(featuresOl);
                if (this.layers.find(layer => layer.id === olLayer.id)) {
                    this.map.removeLayer(this.layers.find(layer => layer.id === olLayer.id));
                    i = i - 1;
                    olLayer.title = (features[0].meta.title + ' ' + i + ' - ' + this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter'));
                    olLayer.options.title = olLayer.title;
                }
                this.map.addLayer(olLayer);
                this.layers.push(olLayer);
                this.pushLayer(olLayer);
                this.cdRef.detectChanges();
            });
        }
    }
    zoomToFeatureExtent(feature) {
        if (feature) {
            const olFeature = this.format.readFeature(feature, {
                dataProjection: feature.projection,
                featureProjection: this.map.projection
            });
            moveToOlFeatures(this.map, [olFeature], FeatureMotion.Zoom);
        }
    }
    pushLayer(layer) {
        for (const lay of this.activeLayers) {
            if (lay.id === layer.id) {
                return;
            }
        }
        this.activeLayers.push(layer);
    }
};
SpatialFilterToolComponent.ɵfac = function SpatialFilterToolComponent_Factory(t) { return new (t || SpatialFilterToolComponent)(i0.ɵɵdirectiveInject(i6.MatIconRegistry), i0.ɵɵdirectiveInject(i1$1.SpatialFilterService), i0.ɵɵdirectiveInject(i1$1.DataSourceService), i0.ɵɵdirectiveInject(i1$1.LayerService), i0.ɵɵdirectiveInject(MapState), i0.ɵɵdirectiveInject(i2$1.MessageService), i0.ɵɵdirectiveInject(i2$1.LanguageService), i0.ɵɵdirectiveInject(ImportExportState), i0.ɵɵdirectiveInject(ToolState), i0.ɵɵdirectiveInject(WorkspaceState), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
SpatialFilterToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SpatialFilterToolComponent, selectors: [["igo-spatial-filter-tool"]], inputs: { type: "type", itemType: "itemType", freehandDrawIsActive: "freehandDrawIsActive" }, decls: 6, vars: 16, consts: [[3, "store", "selectedQueryType", "zone", "layers", "eventType", "eventQueryType", "zoneChange", "zoneWithBufferChange", "bufferChange", "measureUnitChange"], [3, "type", "queryType", "map", "zone", "loading", "store", "layers", "allLayers", "thematicLength", "radiusEvent", "bufferEvent", "measureUnitChange", "freehandControl", "drawZoneEvent", "zoneWithBufferChange", "itemTypeChange", "thematicChange", "toggleSearch", "clearButtonEvent", "clearSearchEvent", "export", "openWorkspace", "entityChange"], [4, "ngIf"], [3, "feature"]], template: function SpatialFilterToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-panel");
        i0.ɵɵelementStart(1, "igo-spatial-filter-type", 0);
        i0.ɵɵlistener("eventType", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_eventType_1_listener($event) { return ctx.getOutputType($event); })("eventQueryType", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_eventQueryType_1_listener($event) { return ctx.getOutputQueryType($event); })("zoneChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_zoneChange_1_listener($event) { return ctx.onZoneChange($event); })("zoneWithBufferChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_zoneWithBufferChange_1_listener($event) { return ctx.onZoneChange($event, true); })("bufferChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_bufferChange_1_listener($event) { return ctx.buffer = $event; })("measureUnitChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_measureUnitChange_1_listener($event) { return ctx.measureUnit = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "igo-spatial-filter-item", 1);
        i0.ɵɵlistener("radiusEvent", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_radiusEvent_2_listener($event) { return ctx.buffer = $event; })("bufferEvent", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_bufferEvent_2_listener($event) { return ctx.buffer = $event; })("measureUnitChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_measureUnitChange_2_listener($event) { return ctx.measureUnit = $event; })("freehandControl", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_freehandControl_2_listener($event) { return ctx.freehandDrawIsActive = $event; })("drawZoneEvent", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_drawZoneEvent_2_listener($event) { return ctx.zone = $event; })("zoneWithBufferChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_zoneWithBufferChange_2_listener($event) { return ctx.onZoneChange($event, true); })("itemTypeChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_itemTypeChange_2_listener($event) { return ctx.itemType = $event; })("thematicChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_thematicChange_2_listener($event) { return ctx.thematics = $event; })("toggleSearch", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_toggleSearch_2_listener() { return ctx.getOutputToggleSearch(); })("clearButtonEvent", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_clearButtonEvent_2_listener() { return ctx.clearMap(); })("clearSearchEvent", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_clearSearchEvent_2_listener() { return ctx.getOutputClearSearch(); })("export", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_export_2_listener() { return ctx.activateExportTool(); })("openWorkspace", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_openWorkspace_2_listener() { return ctx.activateWorkspace(); })("entityChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_entityChange_2_listener($event) { return ctx.activateWorkspace($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "igo-panel");
        i0.ɵɵtemplate(4, SpatialFilterToolComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        i0.ɵɵpipe(5, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("store", ctx.spatialListStore)("selectedQueryType", ctx.queryType)("zone", ctx.zone)("layers", ctx.activeLayers);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("type", ctx.type)("queryType", ctx.queryType)("map", ctx.map)("zone", ctx.zone)("loading", ctx.loading)("store", ctx.store)("layers", ctx.activeLayers)("allLayers", ctx.layers)("thematicLength", ctx.thematicLength);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(5, 14, ctx.selectedFeature$));
    } }, directives: [i1$1.SpatialFilterTypeComponent, i1$1.SpatialFilterItemComponent, i4$1.NgIf], pipes: [i4$1.AsyncPipe], styles: [""], changeDetection: 0 });
SpatialFilterToolComponent = __decorate([
    ToolComponent({
        name: 'spatialFilter',
        title: 'igo.integration.tools.spatialFilter',
        icon: 'selection-marker'
    })
    /**
     * Spatial Filter Type
     */
], SpatialFilterToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpatialFilterToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-spatial-filter-tool',
                templateUrl: './spatial-filter-tool.component.html',
                styleUrls: ['./spatial-filter-tool.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i6.MatIconRegistry }, { type: i1$1.SpatialFilterService }, { type: i1$1.DataSourceService }, { type: i1$1.LayerService }, { type: MapState }, { type: i2$1.MessageService }, { type: i2$1.LanguageService }, { type: ImportExportState }, { type: ToolState }, { type: WorkspaceState }, { type: i0.ChangeDetectorRef }]; }, { type: [{
            type: Input
        }], itemType: [{
            type: Input
        }], freehandDrawIsActive: [{
            type: Input
        }] }); })();

function toolSlideInOut$1(speed = '300ms', type = 'ease-in-out') {
    return trigger('toolSlideInOut', [
        state('enter', style({
            transform: 'translateX(100%)'
        })),
        transition('void => enter', animate(speed + ' ' + type))
    ]);
}

let ActiveTimeFilterToolComponent = class ActiveTimeFilterToolComponent {
    constructor(mapState) {
        this.mapState = mapState;
        this.animate = 'enter';
    }
    get map() {
        return this.mapState.map;
    }
    get layer() {
        for (const lay of this.map.layers) {
            if (lay.options.active === true) {
                return lay;
            }
        }
        return;
    }
};
ActiveTimeFilterToolComponent.ɵfac = function ActiveTimeFilterToolComponent_Factory(t) { return new (t || ActiveTimeFilterToolComponent)(i0.ɵɵdirectiveInject(MapState)); };
ActiveTimeFilterToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActiveTimeFilterToolComponent, selectors: [["igo-active-time-filter-tool"]], decls: 1, vars: 4, consts: [[3, "map", "layer", "header"]], template: function ActiveTimeFilterToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-time-filter-item", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("map", ctx.map)("layer", ctx.layer)("header", false)("@toolSlideInOut", ctx.animate);
    } }, directives: [i1$1.TimeFilterItemComponent], encapsulation: 2, data: { animation: [toolSlideInOut$1()] } });
ActiveTimeFilterToolComponent = __decorate([
    ToolComponent({
        name: 'activeTimeFilter',
        title: 'igo.integration.tools.timeFilter',
        icon: 'history',
        parent: 'mapTools'
    })
], ActiveTimeFilterToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveTimeFilterToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-active-time-filter-tool',
                templateUrl: './active-time-filter-tool.component.html',
                animations: [toolSlideInOut$1()]
            }]
    }], function () { return [{ type: MapState }]; }, null); })();

function toolSlideInOut(speed = '300ms', type = 'ease-in-out') {
    return trigger('toolSlideInOut', [
        state('enter', style({
            transform: 'translateX(100%)'
        })),
        transition('void => enter', animate(speed + ' ' + type))
    ]);
}

let ActiveOgcFilterToolComponent = class ActiveOgcFilterToolComponent {
    constructor(mapState) {
        this.mapState = mapState;
        this.animate = 'enter';
    }
    get map() {
        return this.mapState.map;
    }
    get layer() {
        for (const lay of this.map.layers) {
            if (lay.options.active === true) {
                return lay;
            }
        }
        return;
    }
};
ActiveOgcFilterToolComponent.ɵfac = function ActiveOgcFilterToolComponent_Factory(t) { return new (t || ActiveOgcFilterToolComponent)(i0.ɵɵdirectiveInject(MapState)); };
ActiveOgcFilterToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActiveOgcFilterToolComponent, selectors: [["igo-active-ogc-filter-tool"]], decls: 1, vars: 4, consts: [[3, "map", "layer", "header"]], template: function ActiveOgcFilterToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-ogc-filterable-item", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("map", ctx.map)("layer", ctx.layer)("header", false)("@toolSlideInOut", ctx.animate);
    } }, directives: [i1$1.OgcFilterableItemComponent], encapsulation: 2, data: { animation: [toolSlideInOut()] } });
ActiveOgcFilterToolComponent = __decorate([
    ToolComponent({
        name: 'activeOgcFilter',
        title: 'igo.integration.tools.ogcFilter',
        icon: 'filter',
        parent: 'mapTools'
    })
], ActiveOgcFilterToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveOgcFilterToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-active-ogc-filter-tool',
                templateUrl: './active-ogc-filter-tool.component.html',
                animations: [toolSlideInOut()]
            }]
    }], function () { return [{ type: MapState }]; }, null); })();

class IgoAppFilterModule {
    static forRoot() {
        return {
            ngModule: IgoAppFilterModule,
            providers: []
        };
    }
}
IgoAppFilterModule.ɵfac = function IgoAppFilterModule_Factory(t) { return new (t || IgoAppFilterModule)(); };
IgoAppFilterModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppFilterModule });
IgoAppFilterModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoFilterModule, IgoQueryModule, CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppFilterModule, [{
        type: NgModule,
        args: [{
                imports: [IgoFilterModule, IgoQueryModule, CommonModule],
                declarations: [
                    OgcFilterToolComponent,
                    ActiveOgcFilterToolComponent,
                    TimeFilterToolComponent,
                    ActiveTimeFilterToolComponent,
                    SpatialFilterToolComponent
                ],
                exports: [
                    OgcFilterToolComponent,
                    ActiveOgcFilterToolComponent,
                    TimeFilterToolComponent,
                    ActiveTimeFilterToolComponent,
                    SpatialFilterToolComponent
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppFilterModule, { declarations: [OgcFilterToolComponent,
        ActiveOgcFilterToolComponent,
        TimeFilterToolComponent,
        ActiveTimeFilterToolComponent,
        SpatialFilterToolComponent], imports: [IgoFilterModule, IgoQueryModule, CommonModule], exports: [OgcFilterToolComponent,
        ActiveOgcFilterToolComponent,
        TimeFilterToolComponent,
        ActiveTimeFilterToolComponent,
        SpatialFilterToolComponent] }); })();

function AboutToolComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function AboutToolComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.openGuide(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "mat-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.loading)("matTooltip", i0.ɵɵpipeBind1(1, 3, "igo.integration.aboutTool.trainingGuideTooltip"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, "igo.integration.aboutTool.trainingGuide"));
} }
function AboutToolComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "mat-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(5);
    i0.ɵɵproperty("disabled", ctx_r1.loading)("matTooltip", i0.ɵɵpipeBind1(1, 4, "igo.integration.aboutTool.trainingGuideTooltip"))("matMenuTriggerFor", _r2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 6, "igo.integration.aboutTool.trainingGuide"));
} }
function AboutToolComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function AboutToolComponent_button_6_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const guide_r7 = restoredCtx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.openGuide(guide_r7); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const guide_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.formatFileName(guide_r7));
} }
function AboutToolComponent_igo_custom_html_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-custom-html", 6);
    i0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("html", i0.ɵɵpipeBind1(1, 1, ctx_r4.headerHtml));
} }
const _c0 = function (a0) { return { version: a0 }; };
let AboutToolComponent = class AboutToolComponent {
    constructor(configService, auth, http, cdRef, languageService) {
        this.configService = configService;
        this.auth = auth;
        this.http = http;
        this.cdRef = cdRef;
        this.languageService = languageService;
        this._discoverTitleInLocale = 'IGO';
        this.discoverTitleInLocale$ = of(this._discoverTitleInLocale);
        this._html = 'igo.integration.aboutTool.html';
        this._headerHtml = this.languageService.translate.instant('igo.integration.aboutTool.headerHtml');
        this.loading = false;
        this.version = configService.getConfig('version');
        this.baseUrlProfil = configService.getConfig('storage.url');
        this.baseUrlGuide = configService.getConfig('depot.url') + configService.getConfig('depot.guideUrl');
    }
    get headerHtml() {
        return this._headerHtml;
    }
    set headerHtml(value) {
        this._headerHtml = Array.isArray(value) ? value.join('\n') : value;
    }
    get html() {
        return this._html;
    }
    set html(value) {
        this._html = Array.isArray(value) ? value.join('\n') : value;
    }
    get discoverTitleInLocale() {
        return this._discoverTitleInLocale;
    }
    set discoverTitleInLocale(value) {
        this._discoverTitleInLocale = value;
        this.discoverTitleInLocale$ = of(value);
    }
    ngOnInit() {
        if (this.auth.authenticated && this.configService.getConfig('context.url')) {
            this.http.get(this.baseUrlProfil).subscribe((profil) => {
                const recast = profil;
                this.trainingGuideURLs = recast.guides;
                this.cdRef.detectChanges();
            });
        }
        else if (this.auth.authenticated &&
            !this.configService.getConfig('context.url') &&
            this.configService.getConfig('depot.trainingGuides')) {
            this.trainingGuideURLs = this.configService.getConfig('depot.trainingGuides');
        }
    }
    openGuide(guide) {
        this.loading = true;
        const url = guide ?
            this.baseUrlGuide + guide + '?' :
            this.baseUrlGuide + this.trainingGuideURLs[0] + '?';
        this.http
            .get(url, {
            responseType: 'blob'
        })
            .subscribe(() => {
            this.loading = false;
            window.open(url, '_blank');
            this.cdRef.detectChanges();
        });
    }
    formatFileName(name) {
        name = name.split('_').join(' ');
        const index = name.indexOf('.');
        name = name.slice(0, index);
        return name;
    }
};
AboutToolComponent.ɵfac = function AboutToolComponent_Factory(t) { return new (t || AboutToolComponent)(i0.ɵɵdirectiveInject(i2$1.ConfigService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3$2.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2$1.LanguageService)); };
AboutToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AboutToolComponent, selectors: [["igo-about-tool"]], inputs: { headerHtml: "headerHtml", html: "html", discoverTitleInLocale: "discoverTitleInLocale", trainingGuideURLs: "trainingGuideURLs" }, decls: 10, vars: 11, consts: [["mat-raised-button", "", "tourToStart", "global", "menuIsOpen", "true", "styleButton", "raised", 3, "discoverTitleInLocale$"], ["class", "training-guide-button", "mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "disabled", "matTooltip", "click", 4, "ngIf"], ["class", "training-guide-button", "mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "disabled", "matTooltip", "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "mat-typography", 3, "html", 4, "ngIf"], [1, "mat-typography", 3, "html"], ["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "training-guide-button", 3, "disabled", "matTooltip", "click"], ["svgIcon", "file-document"], ["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "training-guide-button", 3, "disabled", "matTooltip", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]], template: function AboutToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "p");
        i0.ɵɵelement(1, "igo-interactive-tour", 0);
        i0.ɵɵtemplate(2, AboutToolComponent_button_2_Template, 6, 7, "button", 1);
        i0.ɵɵtemplate(3, AboutToolComponent_button_3_Template, 6, 8, "button", 2);
        i0.ɵɵelementStart(4, "mat-menu", null, 3);
        i0.ɵɵtemplate(6, AboutToolComponent_button_6_Template, 2, 1, "button", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, AboutToolComponent_igo_custom_html_7_Template, 2, 3, "igo-custom-html", 5);
        i0.ɵɵelement(8, "igo-custom-html", 6);
        i0.ɵɵpipe(9, "translate");
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("discoverTitleInLocale$", ctx.discoverTitleInLocale$);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.trainingGuideURLs && ctx.trainingGuideURLs.length === 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.trainingGuideURLs && ctx.trainingGuideURLs.length > 1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.trainingGuideURLs);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.headerHtml !== "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("html", i0.ɵɵpipeBind2(9, 6, ctx.html, i0.ɵɵpureFunction1(9, _c0, ctx.version)));
    } }, directives: [i4.InteractiveTourComponent, i4$1.NgIf, i6$2.MatMenu, i4$1.NgForOf, i4.CustomHtmlComponent, i3.MatButton, i4$2.MatTooltip, i6.MatIcon, i6$2.MatMenuTrigger, i6$2.MatMenuItem], pipes: [i8.TranslatePipe], styles: ["igo-interactive-tour[_ngcontent-%COMP%]{margin-left:20px}.training-guide-button[_ngcontent-%COMP%]{margin-left:5px;background-color:#1976d2;color:#fff;padding:0 12px}"] });
AboutToolComponent = __decorate([
    ToolComponent({
        name: 'about',
        title: 'igo.integration.tools.about',
        icon: 'help-circle'
    })
], AboutToolComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-about-tool',
                templateUrl: './about-tool.component.html',
                styleUrls: ['./about-tool.component.scss']
            }]
    }], function () { return [{ type: i2$1.ConfigService }, { type: i2.AuthService }, { type: i3$2.HttpClient }, { type: i0.ChangeDetectorRef }, { type: i2$1.LanguageService }]; }, { headerHtml: [{
            type: Input
        }], html: [{
            type: Input
        }], discoverTitleInLocale: [{
            type: Input
        }], trainingGuideURLs: [{
            type: Input
        }] }); })();

class IgoAppAboutModule {
    static forRoot() {
        return {
            ngModule: IgoAppAboutModule,
            providers: []
        };
    }
}
IgoAppAboutModule.ɵfac = function IgoAppAboutModule_Factory(t) { return new (t || IgoAppAboutModule)(); };
IgoAppAboutModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppAboutModule });
IgoAppAboutModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            IgoLanguageModule,
            IgoCustomHtmlModule,
            MatButtonModule,
            MatTooltipModule,
            MatIconModule,
            MatMenuModule,
            IgoInteractiveTourModule,
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppAboutModule, [{
        type: NgModule,
        args: [{
                imports: [
                    IgoLanguageModule,
                    IgoCustomHtmlModule,
                    MatButtonModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatMenuModule,
                    IgoInteractiveTourModule,
                    CommonModule
                ],
                declarations: [AboutToolComponent],
                exports: [AboutToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppAboutModule, { declarations: [AboutToolComponent], imports: [IgoLanguageModule,
        IgoCustomHtmlModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatMenuModule,
        IgoInteractiveTourModule,
        CommonModule], exports: [AboutToolComponent] }); })();

class IgoAppStorageModule {
}
IgoAppStorageModule.ɵfac = function IgoAppStorageModule_Factory(t) { return new (t || IgoAppStorageModule)(); };
IgoAppStorageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppStorageModule });
IgoAppStorageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppStorageModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: []
            }]
    }], null, null); })();

class IgoIntegrationModule {
}
IgoIntegrationModule.ɵfac = function IgoIntegrationModule_Factory(t) { return new (t || IgoIntegrationModule)(); };
IgoIntegrationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoIntegrationModule });
IgoIntegrationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[], IgoAppStorageModule,
        IgoAppAnalyticsModule,
        IgoAppContextModule,
        IgoAppCatalogModule,
        IgoAppDirectionsModule,
        IgoAppDrawModule,
        IgoAppWorkspaceModule,
        IgoAppImportExportModule,
        IgoAppMapModule,
        IgoAppMeasureModule,
        IgoAppPrintModule,
        IgoAppSearchModule,
        IgoAppFilterModule,
        IgoAppAboutModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoIntegrationModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: [
                    IgoAppStorageModule,
                    IgoAppAnalyticsModule,
                    IgoAppContextModule,
                    IgoAppCatalogModule,
                    IgoAppDirectionsModule,
                    IgoAppDrawModule,
                    IgoAppWorkspaceModule,
                    IgoAppImportExportModule,
                    IgoAppMapModule,
                    IgoAppMeasureModule,
                    IgoAppPrintModule,
                    IgoAppSearchModule,
                    IgoAppFilterModule,
                    IgoAppAboutModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoIntegrationModule, { exports: [IgoAppStorageModule,
        IgoAppAnalyticsModule,
        IgoAppContextModule,
        IgoAppCatalogModule,
        IgoAppDirectionsModule,
        IgoAppDrawModule,
        IgoAppWorkspaceModule,
        IgoAppImportExportModule,
        IgoAppMapModule,
        IgoAppMeasureModule,
        IgoAppPrintModule,
        IgoAppSearchModule,
        IgoAppFilterModule,
        IgoAppAboutModule] }); })();

class IgoAppToolModule {
}
IgoAppToolModule.ɵfac = function IgoAppToolModule_Factory(t) { return new (t || IgoAppToolModule)(); };
IgoAppToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppToolModule });
IgoAppToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppToolModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: []
            }]
    }], null, null); })();

/**
 * Service that holds the state of the search module
 */
class AnalyticsListenerService {
    /**
     * Toolbox that holds main tools
     */
    constructor(analyticsService, authService, contextState, searchState, toolState) {
        this.analyticsService = analyticsService;
        this.authService = authService;
        this.contextState = contextState;
        this.searchState = searchState;
        this.toolState = toolState;
    }
    listen() {
        this.listenUser();
        this.listenContext();
        this.listenTool();
        this.listenSearch();
    }
    listenUser() {
        this.authService.authenticate$.subscribe(() => {
            const tokenDecoded = this.authService.decodeToken() || {};
            if (tokenDecoded.user) {
                this.authService
                    .getProfils()
                    .subscribe(profils => this.analyticsService.setUser(tokenDecoded.user, profils.profils));
            }
            else {
                this.analyticsService.setUser();
            }
        });
    }
    listenContext() {
        this.contextState.context$.subscribe(context => {
            if (context) {
                this.analyticsService.trackEvent('context', 'activateContext', context.id || context.uri);
            }
        });
    }
    listenTool() {
        this.toolState.toolbox.activeTool$.pipe(skip(1)).subscribe(tool => {
            if (tool) {
                this.analyticsService.trackEvent('tool', 'activateTool', tool.name);
            }
        });
    }
    listenSearch() {
        this.searchState.searchTerm$.pipe(skip(1)).subscribe((searchTerm) => {
            if (searchTerm !== undefined && searchTerm !== null) {
                this.analyticsService.trackSearch(searchTerm, this.searchState.store.count);
            }
        });
    }
}
AnalyticsListenerService.ɵfac = function AnalyticsListenerService_Factory(t) { return new (t || AnalyticsListenerService)(i0.ɵɵinject(i2$1.AnalyticsService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(ContextState), i0.ɵɵinject(SearchState), i0.ɵɵinject(ToolState)); };
AnalyticsListenerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AnalyticsListenerService, factory: AnalyticsListenerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnalyticsListenerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i2$1.AnalyticsService }, { type: i2.AuthService }, { type: ContextState }, { type: SearchState }, { type: ToolState }]; }, null); })();

/**
 * Service that holds the state of the query module
 */
class QueryState {
    constructor(configService) {
        this.configService = configService;
        /**
         * Store that holds the query results
         */
        this.store = new EntityStore([]);
        this.queryOverlayStyle = {};
        this.queryOverlayStyleSelection = {};
        this.queryOverlayStyleFocus = {};
        const queryOverlayStyle = this.configService.getConfig('queryOverlayStyle');
        if (queryOverlayStyle) {
            this.queryOverlayStyle = queryOverlayStyle.base;
            this.queryOverlayStyleSelection = queryOverlayStyle.selection;
            this.queryOverlayStyleFocus = queryOverlayStyle.focus;
        }
    }
}
QueryState.ɵfac = function QueryState_Factory(t) { return new (t || QueryState)(i0.ɵɵinject(i2$1.ConfigService)); };
QueryState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: QueryState, factory: QueryState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QueryState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i2$1.ConfigService }]; }, null); })();

/*
 * Public API Surface of tools
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AboutToolComponent, ActiveOgcFilterToolComponent, ActiveTimeFilterToolComponent, AdvancedMapToolComponent, AnalyticsListenerService, CatalogBrowserToolComponent, CatalogLibraryToolComponent, CatalogState, ContextEditorToolComponent, ContextManagerToolComponent, ContextPermissionManagerToolComponent, ContextShareToolComponent, ContextState, DirectionState, DirectionsToolComponent, DrawState, DrawingToolComponent, FeatureActionsService, IgoAppAboutModule, IgoAppAnalyticsModule, IgoAppCatalogBrowserToolModule, IgoAppCatalogLibraryToolModule, IgoAppCatalogModule, IgoAppContextModule, IgoAppDirectionsModule, IgoAppDrawModule, IgoAppFilterModule, IgoAppImportExportModule, IgoAppMapModule, IgoAppMeasureModule, IgoAppMeasurerToolModule, IgoAppPrintModule, IgoAppSearchBarModule, IgoAppSearchModule, IgoAppSearchResultsToolModule, IgoAppStorageModule, IgoAppToolModule, IgoAppWorkspaceModule, IgoIntegrationModule, ImportExportMode, ImportExportState, ImportExportToolComponent, ImportExportType, MapDetailsToolComponent, MapLegendToolComponent, MapState, MapToolComponent, MapToolsComponent, MeasureState, MeasurerToolComponent, OgcFilterToolComponent, PrintToolComponent, QueryState, SearchBarBindingDirective, SearchResultsToolComponent, SearchState, SpatialFilterToolComponent, StorageState, TimeFilterToolComponent, ToolState, WfsActionsService, WorkspaceButtonComponent, WorkspaceState };
//# sourceMappingURL=igo2-integration.js.map
