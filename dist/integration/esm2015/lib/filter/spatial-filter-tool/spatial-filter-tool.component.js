import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { tap, take, takeUntil } from 'rxjs/operators';
import { moveToOlFeatures, FeatureMotion, featureToOl, SpatialFilterType, SpatialFilterItemType, createOverlayMarkerStyle, MeasureLengthUnit } from '@igo2/geo';
import { EntityStore, ToolComponent } from '@igo2/common';
import olFormatGeoJSON from 'ol/format/GeoJSON';
import { BehaviorSubject } from 'rxjs';
import { ImportExportMode } from './../../import-export/import-export.state';
import * as olstyle from 'ol/style';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@igo2/geo";
import * as i3 from "../../map/map.state";
import * as i4 from "@igo2/core";
import * as i5 from "./../../import-export/import-export.state";
import * as i6 from "../../tool/tool.state";
import * as i7 from "../../workspace/workspace.state";
import * as i8 from "@angular/common";
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
SpatialFilterToolComponent.ɵfac = function SpatialFilterToolComponent_Factory(t) { return new (t || SpatialFilterToolComponent)(i0.ɵɵdirectiveInject(i1.MatIconRegistry), i0.ɵɵdirectiveInject(i2.SpatialFilterService), i0.ɵɵdirectiveInject(i2.DataSourceService), i0.ɵɵdirectiveInject(i2.LayerService), i0.ɵɵdirectiveInject(i3.MapState), i0.ɵɵdirectiveInject(i4.MessageService), i0.ɵɵdirectiveInject(i4.LanguageService), i0.ɵɵdirectiveInject(i5.ImportExportState), i0.ɵɵdirectiveInject(i6.ToolState), i0.ɵɵdirectiveInject(i7.WorkspaceState), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
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
    } }, directives: [i2.SpatialFilterTypeComponent, i2.SpatialFilterItemComponent, i8.NgIf], pipes: [i8.AsyncPipe], styles: [""], changeDetection: 0 });
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
export { SpatialFilterToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpatialFilterToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-spatial-filter-tool',
                templateUrl: './spatial-filter-tool.component.html',
                styleUrls: ['./spatial-filter-tool.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.MatIconRegistry }, { type: i2.SpatialFilterService }, { type: i2.DataSourceService }, { type: i2.LayerService }, { type: i3.MapState }, { type: i4.MessageService }, { type: i4.LanguageService }, { type: i5.ImportExportState }, { type: i6.ToolState }, { type: i7.WorkspaceState }, { type: i0.ChangeDetectorRef }]; }, { type: [{
            type: Input
        }], itemType: [{
            type: Input
        }], freehandDrawIsActive: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhdGlhbC1maWx0ZXItdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2ZpbHRlci9zcGF0aWFsLWZpbHRlci10b29sL3NwYXRpYWwtZmlsdGVyLXRvb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9maWx0ZXIvc3BhdGlhbC1maWx0ZXItdG9vbC9zcGF0aWFsLWZpbHRlci10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBd0MsTUFBTSxlQUFlLENBQUM7QUFFaEgsT0FBTyxFQUFjLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUtMLGdCQUFnQixFQUNoQixhQUFhLEVBRWIsV0FBVyxFQUlYLGlCQUFpQixFQUNqQixxQkFBcUIsRUFJckIsd0JBQXdCLEVBRXhCLGlCQUFpQixFQUNsQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxRCxPQUFPLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQUloRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBcUIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7SUNRbEMsNkJBQTBEO0lBQ3hELHlDQUErRDtJQUNqRSwwQkFBZTs7O0lBRFEsZUFBbUI7SUFBbkIsb0NBQW1C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LHlCQUFBLHNDQUFBO1FBMkJBLGVBQStCO1FBQS9CLGtFQUErQjs7QURlbkMsMEJBQTBCO0lBZHRDLGFBQWEsQ0FBQztRQUNiLElBQUksRUFBRSxlQUFlO1FBQ3JCLEtBQUssRUFBRSxxQ0FBcUM7UUFDNUMsSUFBSSxFQUFFLGtCQUFrQjtLQUN6QixDQUFDO0lBQ0Y7O09BRUc7R0FPVSwwQkFBMEIsQ0FnaUJ0QztTQWhpQlksMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FOdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDt1V0FNVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0SWNvblJlZ2lzdHJ5IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmb3JrSm9pbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIElnb01hcCxcbiAgRGF0YVNvdXJjZVNlcnZpY2UsXG4gIExheWVyU2VydmljZSxcbiAgRmVhdHVyZSxcbiAgbW92ZVRvT2xGZWF0dXJlcyxcbiAgRmVhdHVyZU1vdGlvbixcbiAgQ2x1c3RlckRhdGFTb3VyY2UsXG4gIGZlYXR1cmVUb09sLFxuICBEYXRhU291cmNlLFxuICBRdWVyeWFibGVEYXRhU291cmNlT3B0aW9ucyxcbiAgU3BhdGlhbEZpbHRlclNlcnZpY2UsXG4gIFNwYXRpYWxGaWx0ZXJUeXBlLFxuICBTcGF0aWFsRmlsdGVySXRlbVR5cGUsXG4gIFNwYXRpYWxGaWx0ZXJRdWVyeVR5cGUsXG4gIFNwYXRpYWxGaWx0ZXJUaGVtYXRpYyxcbiAgTGF5ZXIsXG4gIGNyZWF0ZU92ZXJsYXlNYXJrZXJTdHlsZSxcbiAgRXhwb3J0T3B0aW9ucyxcbiAgTWVhc3VyZUxlbmd0aFVuaXRcbn0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB7IEVudGl0eVN0b3JlLCBUb29sQ29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCBvbEZvcm1hdEdlb0pTT04gZnJvbSAnb2wvZm9ybWF0L0dlb0pTT04nO1xuaW1wb3J0IG9sU291cmNlVmVjdG9yIGZyb20gJ29sL3NvdXJjZS9WZWN0b3InO1xuaW1wb3J0IG9sU291cmNlQ2x1c3RlciBmcm9tICdvbC9zb3VyY2UvQ2x1c3Rlcic7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnknO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNYXBTdGF0ZSB9IGZyb20gJy4uLy4uL21hcC9tYXAuc3RhdGUnO1xuaW1wb3J0IHsgSW1wb3J0RXhwb3J0TW9kZSwgSW1wb3J0RXhwb3J0U3RhdGUgfSBmcm9tICcuLy4uLy4uL2ltcG9ydC1leHBvcnQvaW1wb3J0LWV4cG9ydC5zdGF0ZSc7XG5pbXBvcnQgKiBhcyBvbHN0eWxlIGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IFRvb2xTdGF0ZSB9IGZyb20gJy4uLy4uL3Rvb2wvdG9vbC5zdGF0ZSc7XG5pbXBvcnQgeyBXb3Jrc3BhY2VTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmtzcGFjZS93b3Jrc3BhY2Uuc3RhdGUnO1xuaW1wb3J0IHsgRXZlbnRzS2V5IH0gZnJvbSAnb2wvZXZlbnRzJztcblxuLyoqXG4gKiBUb29sIHRvIGFwcGx5IHNwYXRpYWwgZmlsdGVyXG4gKi9cbkBUb29sQ29tcG9uZW50KHtcbiAgbmFtZTogJ3NwYXRpYWxGaWx0ZXInLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5zcGF0aWFsRmlsdGVyJyxcbiAgaWNvbjogJ3NlbGVjdGlvbi1tYXJrZXInXG59KVxuLyoqXG4gKiBTcGF0aWFsIEZpbHRlciBUeXBlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1zcGF0aWFsLWZpbHRlci10b29sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwYXRpYWwtZmlsdGVyLXRvb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zcGF0aWFsLWZpbHRlci10b29sLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNwYXRpYWxGaWx0ZXJUb29sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMubWFwU3RhdGUubWFwO1xuICB9XG5cbiAgQElucHV0KCkgdHlwZTogU3BhdGlhbEZpbHRlclR5cGU7XG4gIEBJbnB1dCgpIGl0ZW1UeXBlOiBTcGF0aWFsRmlsdGVySXRlbVR5cGUgPSBTcGF0aWFsRmlsdGVySXRlbVR5cGUuQWRkcmVzcztcbiAgQElucHV0KCkgZnJlZWhhbmREcmF3SXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgcHVibGljIGxheWVyczogTGF5ZXJbXSA9IFtdO1xuICBwdWJsaWMgYWN0aXZlTGF5ZXJzOiBMYXllcltdID0gW107XG5cbiAgcHVibGljIHF1ZXJ5VHlwZTogU3BhdGlhbEZpbHRlclF1ZXJ5VHlwZTtcbiAgcHVibGljIHRoZW1hdGljczogU3BhdGlhbEZpbHRlclRoZW1hdGljW107XG4gIHB1YmxpYyB6b25lOiBGZWF0dXJlO1xuICBwdWJsaWMgem9uZVdpdGhCdWZmZXI6IEZlYXR1cmU7XG4gIHB1YmxpYyBidWZmZXIgPSAwO1xuXG4gIHB1YmxpYyBpdGVyYXRvciA9IDE7XG5cbiAgcHVibGljIHNlbGVjdGVkRmVhdHVyZSQ6IEJlaGF2aW9yU3ViamVjdDxGZWF0dXJlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoXG4gICAgdW5kZWZpbmVkXG4gICk7XG5cbiAgcHJpdmF0ZSBmb3JtYXQgPSBuZXcgb2xGb3JtYXRHZW9KU09OKCk7XG5cbiAgcHVibGljIHN0b3JlOiBFbnRpdHlTdG9yZTxGZWF0dXJlPiA9IG5ldyBFbnRpdHlTdG9yZTxGZWF0dXJlPihbXSk7IC8vIFN0b3JlIHRvIHByaW50IHJlc3VsdHMgYXQgdGhlIGVuZFxuXG4gIHB1YmxpYyBzcGF0aWFsTGlzdFN0b3JlOiBFbnRpdHlTdG9yZTxGZWF0dXJlPiA9IG5ldyBFbnRpdHlTdG9yZTxGZWF0dXJlPihbXSk7XG5cbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcblxuICBwdWJsaWMgdGhlbWF0aWNMZW5ndGggPSAwO1xuXG4gIHB1YmxpYyBtZWFzdXJlVW5pdDogTWVhc3VyZUxlbmd0aFVuaXQgPSBNZWFzdXJlTGVuZ3RoVW5pdC5NZXRlcnM7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIG1vdmVlbmRLZXk6IEV2ZW50c0tleTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1hdEljb25SZWdpc3RyeTogTWF0SWNvblJlZ2lzdHJ5LFxuICAgIHByaXZhdGUgc3BhdGlhbEZpbHRlclNlcnZpY2U6IFNwYXRpYWxGaWx0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGF0YVNvdXJjZVNlcnZpY2U6IERhdGFTb3VyY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF5ZXJTZXJ2aWNlOiBMYXllclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYXBTdGF0ZTogTWFwU3RhdGUsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIGltcG9ydEV4cG9ydFN0YXRlOiBJbXBvcnRFeHBvcnRTdGF0ZSxcbiAgICBwcml2YXRlIHRvb2xTdGF0ZTogVG9vbFN0YXRlLFxuICAgIHByaXZhdGUgd29ya3NwYWNlU3RhdGU6IFdvcmtzcGFjZVN0YXRlLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubWFwLmxheWVycykge1xuICAgICAgaWYgKGxheWVyLnRpdGxlICYmIGxheWVyLnRpdGxlLmluY2x1ZGVzKHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuc3BhdGlhbEZpbHRlcicpKSkge1xuICAgICAgICB0aGlzLmxheWVycy5wdXNoKGxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGdldE91dHB1dFR5cGUoZXZlbnQ6IFNwYXRpYWxGaWx0ZXJUeXBlKSB7XG4gICAgdGhpcy50eXBlID0gZXZlbnQ7XG4gICAgdGhpcy5xdWVyeVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRPdXRwdXRRdWVyeVR5cGUoZXZlbnQ6IFNwYXRpYWxGaWx0ZXJRdWVyeVR5cGUpIHtcbiAgICB0aGlzLnF1ZXJ5VHlwZSA9IGV2ZW50O1xuICAgIGlmICh0aGlzLnF1ZXJ5VHlwZSkge1xuICAgICAgdGhpcy5sb2FkRmlsdGVyTGlzdCgpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2YXRlRXhwb3J0VG9vbCgpIHtcbiAgICBjb25zdCBpZHMgPSBbXTtcbiAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJ15ab25lIFxcXFxkKycpO1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgIGlmICghbGF5ZXIudGl0bGUubWF0Y2gocmUpKSB7XG4gICAgICAgIGlkcy5wdXNoKGxheWVyLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pbXBvcnRFeHBvcnRTdGF0ZS5zZXRNb2RlKEltcG9ydEV4cG9ydE1vZGUuZXhwb3J0KTtcbiAgICB0aGlzLmltcG9ydEV4cG9ydFN0YXRlLnNldHNFeHBvcnRPcHRpb25zKHsgbGF5ZXJzOiBpZHMgfSBhcyBFeHBvcnRPcHRpb25zKTtcbiAgICB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmFjdGl2YXRlVG9vbCgnaW1wb3J0RXhwb3J0Jyk7XG4gIH1cblxuICBhY3RpdmF0ZVdvcmtzcGFjZShyZWNvcmQ/KSB7XG4gICAgbGV0IGxheWVyVG9PcGVuV2tzO1xuICAgIHRoaXMud29ya3NwYWNlU3RhdGUuc3RvcmUuZW50aXRpZXMkLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghcmVjb3JkICYmIHRoaXMuYWN0aXZlTGF5ZXJzLmxlbmd0aCAmJiB0aGlzLndvcmtzcGFjZVN0YXRlLnN0b3JlLmFsbCgpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbVR5cGUgPT09IFNwYXRpYWxGaWx0ZXJJdGVtVHlwZS5UaGVtYXRpY3MpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGhlbWF0aWMgb2YgdGhpcy50aGVtYXRpY3MpIHtcbiAgICAgICAgICAgICAgaWYgKCF0aGVtYXRpYy56ZXJvUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGxheWVyVG9PcGVuV2tzID0gdGhpcy5hY3RpdmVMYXllcnMuZmluZChsYXllciA9PiBsYXllci50aXRsZS5pbmNsdWRlcyh0aGVtYXRpYy5uYW1lICsgJyAnICsgdGhpcy5pdGVyYXRvci50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9ICdBZHJlc3NlcyAnICsgdGhpcy5pdGVyYXRvci50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxheWVyLnRpdGxlLmluY2x1ZGVzKHRpdGxlKSkge1xuICAgICAgICAgICAgICAgIGxheWVyVG9PcGVuV2tzID0gbGF5ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxheWVyVG9PcGVuV2tzKSB7XG4gICAgICAgICAgdGhpcy53b3Jrc3BhY2VTdGF0ZS53b3Jrc3BhY2VQYW5lbEV4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLndvcmtzcGFjZVN0YXRlLnNldEFjdGl2ZVdvcmtzcGFjZUJ5SWQobGF5ZXJUb09wZW5Xa3MuaWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZCAmJiB0aGlzLmFjdGl2ZUxheWVycy5sZW5ndGggJiYgdGhpcy53b3Jrc3BhY2VTdGF0ZS5zdG9yZS5hbGwoKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0V29ya3NwYWNlRW50aXR5KHJlY29yZCk7XG4gICAgICAgIHRoaXMubW92ZWVuZEtleSA9IHRoaXMubWFwLm9sLm9uKCdtb3ZlZW5kJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0V29ya3NwYWNlRW50aXR5KHJlY29yZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RXb3Jrc3BhY2VFbnRpdHkocmVjb3JkKSB7XG4gICAgdGhpcy53b3Jrc3BhY2VTdGF0ZS5zdG9yZS5hbGwoKS5mb3JFYWNoKHdvcmtzcGFjZSA9PiB7XG4gICAgICB3b3Jrc3BhY2UuZW50aXR5U3RvcmUuc3RhdGUudXBkYXRlQWxsKHtzZWxlY3RlZDogZmFsc2V9KTtcbiAgICAgIGlmICh3b3Jrc3BhY2UudGl0bGUuaW5jbHVkZXMocmVjb3JkLmFkZGVkWzBdLm1ldGEudGl0bGUpKSB7XG4gICAgICAgIHRoaXMud29ya3NwYWNlU3RhdGUuc2V0QWN0aXZlV29ya3NwYWNlQnlJZCh3b3Jrc3BhY2UuaWQpO1xuICAgICAgICB3b3Jrc3BhY2UuZW50aXR5U3RvcmUuc3RhdGUudXBkYXRlTWFueShyZWNvcmQuYWRkZWQsIHtzZWxlY3RlZDogdHJ1ZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRmlsdGVyTGlzdCgpIHtcbiAgICB0aGlzLnNwYXRpYWxGaWx0ZXJTZXJ2aWNlXG4gICAgICAubG9hZEZpbHRlckxpc3QodGhpcy5xdWVyeVR5cGUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgoZmVhdHVyZXM6IEZlYXR1cmVbXSkgPT4ge1xuICAgICAgICBmZWF0dXJlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgaWYgKGEucHJvcGVydGllcy5ub20gPCBiLnByb3BlcnRpZXMubm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhLnByb3BlcnRpZXMubm9tID4gYi5wcm9wZXJ0aWVzLm5vbSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zcGF0aWFsTGlzdFN0b3JlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3BhdGlhbExpc3RTdG9yZS5sb2FkKGZlYXR1cmVzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0T3V0cHV0VG9nZ2xlU2VhcmNoKCkge1xuICAgIHRoaXMubG9hZFRoZW1hdGljcygpO1xuICB9XG5cbiAgZ2V0T3V0cHV0Q2xlYXJTZWFyY2goKSB7XG4gICAgdGhpcy56b25lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucXVlcnlUeXBlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgY2xlYXJNYXAoKSB7XG4gICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXJzKHRoaXMubGF5ZXJzKTtcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlTGF5ZXJzID0gW107XG4gICAgdGhpcy50aGVtYXRpY0xlbmd0aCA9IDA7XG4gICAgdGhpcy5pdGVyYXRvciA9IDE7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU3BhdGlhbEZpbHRlclR5cGUuUHJlZGVmaW5lZCkge1xuICAgICAgdGhpcy56b25lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5xdWVyeVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVGhlbWF0aWNzKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHplcm9SZXN1bHRzID0gdHJ1ZTtcbiAgICBsZXQgdGhlbWF0aWNzO1xuICAgIGlmICh0aGlzLmJ1ZmZlciA9PT0gMCB8fCB0aGlzLnR5cGUgPT09IFNwYXRpYWxGaWx0ZXJUeXBlLlBvaW50KSB7XG4gICAgICB0aGlzLnRyeUFkZEZlYXR1cmVzVG9NYXAoW3RoaXMuem9uZV0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5pdGVtVHlwZSAhPT0gU3BhdGlhbEZpbHRlckl0ZW1UeXBlLlRoZW1hdGljcykge1xuICAgICAgY29uc3QgdGhlbWU6IFNwYXRpYWxGaWx0ZXJUaGVtYXRpYyA9IHtcbiAgICAgICAgbmFtZTogJydcbiAgICAgIH07XG4gICAgICB0aGVtYXRpY3MgPSBbdGhlbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGVtYXRpY3MgPSB0aGlzLnRoZW1hdGljcztcbiAgICB9XG4gICAgaWYgKHRoaXMubWVhc3VyZVVuaXQgPT09IE1lYXN1cmVMZW5ndGhVbml0LktpbG9tZXRlcnMgJiYgdGhpcy50eXBlICE9PSBTcGF0aWFsRmlsdGVyVHlwZS5Qb2ludCkge1xuICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlciAqIDEwMDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09IFNwYXRpYWxGaWx0ZXJUeXBlLlBvbHlnb24pIHtcbiAgICAgIHRoaXMuYnVmZmVyID0gMDsgLy8gdG8gYXZvaWQgYnVmZmVyIGVudGVyIGEgc2Vjb25kIHRpbWUgaW4gdGVyckFQSVxuICAgIH1cblxuICAgIGNvbnN0IG9ic2VydmFibGVzJDogT2JzZXJ2YWJsZTxGZWF0dXJlW10+W10gPSBbXTtcbiAgICB0aGVtYXRpY3MuZm9yRWFjaCh0aGVtYXRpYyA9PiB7XG4gICAgICBvYnNlcnZhYmxlcyQucHVzaChcbiAgICAgICAgdGhpcy5zcGF0aWFsRmlsdGVyU2VydmljZVxuICAgICAgICAgIC5sb2FkRmlsdGVySXRlbShcbiAgICAgICAgICAgIHRoaXMuem9uZSxcbiAgICAgICAgICAgIHRoaXMuaXRlbVR5cGUsXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5VHlwZSxcbiAgICAgICAgICAgIHRoZW1hdGljLFxuICAgICAgICAgICAgdGhpcy5idWZmZXJcbiAgICAgICAgICApXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGZlYXR1cmVzOiBGZWF0dXJlW10pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5pbnNlcnRNYW55KGZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZXNQb2ludDogRmVhdHVyZVtdID0gW107XG4gICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVzTGluZVBvbHk6IEZlYXR1cmVbXSA9IFtdO1xuICAgICAgICAgICAgICBsZXQgaWRQb2ludDtcbiAgICAgICAgICAgICAgbGV0IGlkTGluZVBvbHk7XG4gICAgICAgICAgICAgIGZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gJ1BvaW50Jykge1xuICAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLmxvbmdpdHVkZSA9IGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF07XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXMubGF0aXR1ZGUgPSBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdO1xuICAgICAgICAgICAgICAgICAgZmVhdHVyZXNQb2ludC5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgaWRQb2ludCA9IGZlYXR1cmUubWV0YS5pZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZmVhdHVyZXNMaW5lUG9seS5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgaWRMaW5lUG9seSA9IGZlYXR1cmUubWV0YS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHRoaXMudHJ5QWRkUG9pbnRUb01hcChmZWF0dXJlc1BvaW50LCBpZFBvaW50KTtcbiAgICAgICAgICAgICAgdGhpcy50cnlBZGRMYXllclRvTWFwKGZlYXR1cmVzTGluZVBvbHksIGlkTGluZVBvbHkpO1xuICAgICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgemVyb1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW1hdGljTGVuZ3RoICs9IDE7XG4gICAgICAgICAgICAgICAgdGhlbWF0aWMuemVyb1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGVtYXRpYy56ZXJvUmVzdWx0cyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID49IDEwMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hbGVydChcbiAgICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICAgICAgICAgICAnaWdvLmdlby5zcGF0aWFsRmlsdGVyLm1heFNpemVBbGVydCdcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICAgICAgICAgJ2lnby5nZW8uc3BhdGlhbEZpbHRlci53YXJuaW5nJ1xuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIHsgdGltZU91dDogMTAwMDAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGZvcmtKb2luKG9ic2VydmFibGVzJCkucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBpZiAoemVyb1Jlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hbGVydChcbiAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICdpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuemVyb1Jlc3VsdHMnXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICdpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIud2FybmluZydcbiAgICAgICAgICApLFxuICAgICAgICAgIHsgdGltZU91dDogMTAwMDAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25ab25lQ2hhbmdlKGZlYXR1cmU6IEZlYXR1cmUsIGJ1ZmZlcj86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnpvbmUgPSBmZWF0dXJlO1xuICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICBidWZmZXIgPyB0aGlzLnRyeUFkZEZlYXR1cmVzVG9NYXAoW2ZlYXR1cmVdLCB0cnVlKSA6IHRoaXMudHJ5QWRkRmVhdHVyZXNUb01hcChbZmVhdHVyZV0pO1xuICAgICAgdGhpcy56b29tVG9GZWF0dXJlRXh0ZW50KGZlYXR1cmUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gYWRkIHpvbmUgZmVhdHVyZSB0byB0aGUgbWFwIG92ZXJsYXlcbiAgICovXG4gIHB1YmxpYyB0cnlBZGRGZWF0dXJlc1RvTWFwKGZlYXR1cmVzOiBGZWF0dXJlW10sIGJ1ZmZlcj86IGJvb2xlYW4pIHtcbiAgICBsZXQgaSA9IDE7XG4gICAgZm9yIChjb25zdCBmZWF0dXJlIG9mIGZlYXR1cmVzKSB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSBTcGF0aWFsRmlsdGVyVHlwZS5QcmVkZWZpbmVkKSB7XG4gICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBsYXllci5vcHRpb25zLl9pbnRlcm5hbCAmJlxuICAgICAgICAgICAgbGF5ZXIub3B0aW9ucy5faW50ZXJuYWwuY29kZSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzLmNvZGUgJiZcbiAgICAgICAgICAgICFidWZmZXJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghbGF5ZXIudGl0bGU/LnN0YXJ0c1dpdGgoJ1pvbmUnKSkge1xuICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGF5ZXJzLmluZGV4T2YobGF5ZXIpO1xuICAgICAgICAgICAgICB0aGlzLmxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGF5ZXIudGl0bGU/LnN0YXJ0c1dpdGgoJ1pvbmUnKSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVMYXllcnMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sYXllcnMuaW5kZXhPZihsYXllcik7XG4gICAgICAgICAgICB0aGlzLmxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIobGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5hY3RpdmVMYXllcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUxheWVycy5sZW5ndGggPT09IDEgJiYgbGF5ZXIudGl0bGU/LnN0YXJ0c1dpdGgoJ1pvbmUnKSkge1xuICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGF5ZXJzLmluZGV4T2YobGF5ZXIpO1xuICAgICAgICAgICAgICB0aGlzLmxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcihsYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlTGF5ZXJzID0gW107XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgIGlmIChsYXllci50aXRsZT8uc3RhcnRzV2l0aCgnWm9uZScpKSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFTb3VyY2VTZXJ2aWNlXG4gICAgICAgIC5jcmVhdGVBc3luY0RhdGFTb3VyY2Uoe1xuICAgICAgICAgIHR5cGU6ICd2ZWN0b3InLFxuICAgICAgICAgIHF1ZXJ5YWJsZTogdHJ1ZVxuICAgICAgICB9IGFzIFF1ZXJ5YWJsZURhdGFTb3VyY2VPcHRpb25zKVxuICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhU291cmNlOiBEYXRhU291cmNlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xMYXllciA9IHRoaXMubGF5ZXJTZXJ2aWNlLmNyZWF0ZUxheWVyKHtcbiAgICAgICAgICAgIGlzSWdvSW50ZXJuYWxMYXllcjogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAoJ1pvbmUgJyArIGkgKyAnIC0gJyArIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICAgICAnaWdvLmdlby5zcGF0aWFsRmlsdGVyLnNwYXRpYWxGaWx0ZXInXG4gICAgICAgICAgICApKSBhcyBzdHJpbmcsXG4gICAgICAgICAgICB3b3Jrc3BhY2U6IHsgZW5hYmxlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgX2ludGVybmFsOiB7XG4gICAgICAgICAgICAgIGNvZGU6XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID09PSBTcGF0aWFsRmlsdGVyVHlwZS5QcmVkZWZpbmVkXG4gICAgICAgICAgICAgICAgICA/IGZlYXR1cmUucHJvcGVydGllcy5jb2RlXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNvdXJjZTogZGF0YVNvdXJjZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBzdHlsZTogKF9mZWF0dXJlLCByZXNvbHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gKGZlYXR1cmVzWzBdIGFzIGFueSkuY29vcmRpbmF0ZXM7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgb2xzdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IG5ldyBvbHN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgICAgICAgICByYWRpdXM6IGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5idWZmZXIgL1xuICAgICAgICAgICAgICAgICAgICAgIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqIGNvb3JkaW5hdGVzWzFdKSAvXG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvblxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbHN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjAwLCAyMDAsIDIwLCAwLjIpJ1xuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbHN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ29yYW5nZSdcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2xzdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ29yYW5nZSdcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBmaWxsOiBuZXcgb2xzdHlsZS5GaWxsKHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyMDAsIDIwMCwgMjAsIDAuMiknXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgZmVhdHVyZXNPbCA9IGZlYXR1cmVzLm1hcChmID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlVG9PbChmLCB0aGlzLm1hcC5wcm9qZWN0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodGhpcy50eXBlICE9PSBTcGF0aWFsRmlsdGVyVHlwZS5QcmVkZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlID09PSBTcGF0aWFsRmlsdGVyVHlwZS5Qb2ludCA/ICdDZXJjbGUnIDogJ1BvbHlnb25lJztcbiAgICAgICAgICAgIGZlYXR1cmVzT2xbMF0uc2V0KCdub20nLCAnWm9uZScsIHRydWUpO1xuICAgICAgICAgICAgZmVhdHVyZXNPbFswXS5zZXQoJ3R5cGUnLCB0eXBlLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgb2wgPSBkYXRhU291cmNlLm9sIGFzIG9sU291cmNlVmVjdG9yPE9sR2VvbWV0cnk+IHwgb2xTb3VyY2VDbHVzdGVyO1xuICAgICAgICAgIG9sLmFkZEZlYXR1cmVzKGZlYXR1cmVzT2wpO1xuICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKG9sTGF5ZXIpO1xuICAgICAgICAgIHRoaXMubGF5ZXJzLnB1c2gob2xMYXllcik7XG4gICAgICAgICAgdGhpcy5hY3RpdmVMYXllcnMucHVzaChvbExheWVyKTtcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBhZGQgcG9pbnQgZmVhdHVyZXMgdG8gdGhlIG1hcFxuICAgKiBOZWNlc3NhcnkgdG8gY3JlYXRlIGNsdXN0ZXJzXG4gICAqL1xuICBwcml2YXRlIHRyeUFkZFBvaW50VG9NYXAoZmVhdHVyZXM6IEZlYXR1cmVbXSwgaWQpIHtcbiAgICBsZXQgaSA9IDE7XG4gICAgaWYgKGZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMubWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVycykge1xuICAgICAgICBpZiAobGF5ZXIudGl0bGU/LnN0YXJ0c1dpdGgoZmVhdHVyZXNbMF0ubWV0YS50aXRsZSkpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YVNvdXJjZVNlcnZpY2VcbiAgICAgICAgLmNyZWF0ZUFzeW5jRGF0YVNvdXJjZSh7XG4gICAgICAgICAgdHlwZTogJ2NsdXN0ZXInLFxuICAgICAgICAgIGlkLFxuICAgICAgICAgIHF1ZXJ5YWJsZTogdHJ1ZSxcbiAgICAgICAgICBkaXN0YW5jZTogMTIwLFxuICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ2x1c3RlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnMpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGFTb3VyY2U6IENsdXN0ZXJEYXRhU291cmNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaWNvbiA9IGZlYXR1cmVzWzBdLm1ldGEuaWNvbjtcbiAgICAgICAgICBsZXQgc3R5bGU6IG9sc3R5bGUuU3R5bGU7XG4gICAgICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgICAgICBzdHlsZSA9IGNyZWF0ZU92ZXJsYXlNYXJrZXJTdHlsZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZSA9IHRoaXMuY3JlYXRlU3ZnSWNvbihpY29uKSB8fCBjcmVhdGVPdmVybGF5TWFya2VyU3R5bGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBvbExheWVyID0gdGhpcy5sYXllclNlcnZpY2UuY3JlYXRlTGF5ZXIoe1xuICAgICAgICAgICAgaXNJZ29JbnRlcm5hbExheWVyOiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6IChmZWF0dXJlc1swXS5tZXRhLnRpdGxlICsgJyAnICsgaSArICcgLSAnICsgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAgICdpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuc3BhdGlhbEZpbHRlcidcbiAgICAgICAgICAgICkpIGFzIHN0cmluZyxcbiAgICAgICAgICAgIHNvdXJjZTogZGF0YVNvdXJjZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBzdHlsZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgZmVhdHVyZXNPbCA9IGZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlVG9PbChmZWF0dXJlLCB0aGlzLm1hcC5wcm9qZWN0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBvbCA9IGRhdGFTb3VyY2Uub2wgYXMgb2xTb3VyY2VDbHVzdGVyO1xuICAgICAgICAgIG9sLmdldFNvdXJjZSgpLmFkZEZlYXR1cmVzKGZlYXR1cmVzT2wpO1xuICAgICAgICAgIGlmICh0aGlzLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLmlkID09PSBvbExheWVyLmlkKSkge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIoXG4gICAgICAgICAgICAgIHRoaXMubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IG9sTGF5ZXIuaWQpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaSA9IGkgLSAxO1xuICAgICAgICAgICAgb2xMYXllci50aXRsZSA9IChmZWF0dXJlc1swXS5tZXRhLnRpdGxlICsgJyAnICsgaSArICcgLSAnICsgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAgICdpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuc3BhdGlhbEZpbHRlcidcbiAgICAgICAgICAgICkpIGFzIHN0cmluZztcbiAgICAgICAgICAgIG9sTGF5ZXIub3B0aW9ucy50aXRsZSA9IG9sTGF5ZXIudGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXRlcmF0b3IgPSBpO1xuICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKG9sTGF5ZXIpO1xuICAgICAgICAgIHRoaXMubGF5ZXJzLnB1c2gob2xMYXllcik7XG4gICAgICAgICAgdGhpcy5wdXNoTGF5ZXIob2xMYXllcik7XG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU3ZnSWNvbihpY29uKTogb2xzdHlsZS5TdHlsZSB7XG4gICAgbGV0IHN0eWxlOiBvbHN0eWxlLlN0eWxlO1xuICAgIHRoaXMubWF0SWNvblJlZ2lzdHJ5LmdldE5hbWVkU3ZnSWNvbihpY29uKS5zdWJzY3JpYmUoc3ZnT2JqID0+IHtcbiAgICAgIGNvbnN0IHhtbFNlcmlhbGl6ZXIgPSBuZXcgWE1MU2VyaWFsaXplcigpO1xuICAgICAgc3ZnT2JqLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMzAnKTtcbiAgICAgIHN2Z09iai5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICczMCcpO1xuICAgICAgc3ZnT2JqLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdyZ2JhKDAsIDEyOCwgMjU1KScpO1xuICAgICAgc3ZnT2JqLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3doaXRlJyk7XG4gICAgICBjb25zdCBzdmcgPSB4bWxTZXJpYWxpemVyLnNlcmlhbGl6ZVRvU3RyaW5nKHN2Z09iaik7XG4gICAgICBzdHlsZSA9IG5ldyBvbHN0eWxlLlN0eWxlKHtcbiAgICAgICAgaW1hZ2U6IG5ldyBvbHN0eWxlLkljb24oe1xuICAgICAgICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCcgKyBzdmdcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuICAvKipcbiAgICogVHJ5IHRvIGFkZCBsaW5lIG9yIHBvbHlnb24gZmVhdHVyZXMgdG8gdGhlIG1hcFxuICAgKi9cbiAgcHJpdmF0ZSB0cnlBZGRMYXllclRvTWFwKGZlYXR1cmVzOiBGZWF0dXJlW10sIGlkKSB7XG4gICAgbGV0IGkgPSAxO1xuICAgIGlmIChmZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLm1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgaWYgKGxheWVyLnRpdGxlPy5zdGFydHNXaXRoKGZlYXR1cmVzWzBdLm1ldGEudGl0bGUpKSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFTb3VyY2VTZXJ2aWNlXG4gICAgICAgIC5jcmVhdGVBc3luY0RhdGFTb3VyY2Uoe1xuICAgICAgICAgIHR5cGU6ICd2ZWN0b3InLFxuICAgICAgICAgIGlkLFxuICAgICAgICAgIHF1ZXJ5YWJsZTogdHJ1ZVxuICAgICAgICB9IGFzIFF1ZXJ5YWJsZURhdGFTb3VyY2VPcHRpb25zKVxuICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhU291cmNlOiBEYXRhU291cmNlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xMYXllciA9IHRoaXMubGF5ZXJTZXJ2aWNlLmNyZWF0ZUxheWVyKHtcbiAgICAgICAgICAgIGlzSWdvSW50ZXJuYWxMYXllcjogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAoZmVhdHVyZXNbMF0ubWV0YS50aXRsZSArICcgJyArIGkgKyAnIC0gJyArIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICAgICAnaWdvLmdlby5zcGF0aWFsRmlsdGVyLnNwYXRpYWxGaWx0ZXInXG4gICAgICAgICAgICApKSBhcyBzdHJpbmcsXG4gICAgICAgICAgICBzb3VyY2U6IGRhdGFTb3VyY2UsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgZmVhdHVyZXNPbCA9IGZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlVG9PbChmZWF0dXJlLCB0aGlzLm1hcC5wcm9qZWN0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBvbCA9IGRhdGFTb3VyY2Uub2wgYXMgb2xTb3VyY2VWZWN0b3I8T2xHZW9tZXRyeT47XG4gICAgICAgICAgb2wuYWRkRmVhdHVyZXMoZmVhdHVyZXNPbCk7XG4gICAgICAgICAgaWYgKHRoaXMubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IG9sTGF5ZXIuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcihcbiAgICAgICAgICAgICAgdGhpcy5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5pZCA9PT0gb2xMYXllci5pZClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpID0gaSAtIDE7XG4gICAgICAgICAgICBvbExheWVyLnRpdGxlID0gKGZlYXR1cmVzWzBdLm1ldGEudGl0bGUgKyAnICcgKyBpICsgJyAtICcgKyB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICAgJ2lnby5nZW8uc3BhdGlhbEZpbHRlci5zcGF0aWFsRmlsdGVyJ1xuICAgICAgICAgICAgKSkgYXMgc3RyaW5nO1xuICAgICAgICAgICAgb2xMYXllci5vcHRpb25zLnRpdGxlID0gb2xMYXllci50aXRsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIob2xMYXllcik7XG4gICAgICAgICAgdGhpcy5sYXllcnMucHVzaChvbExheWVyKTtcbiAgICAgICAgICB0aGlzLnB1c2hMYXllcihvbExheWVyKTtcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgem9vbVRvRmVhdHVyZUV4dGVudChmZWF0dXJlKSB7XG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIGNvbnN0IG9sRmVhdHVyZSA9IHRoaXMuZm9ybWF0LnJlYWRGZWF0dXJlKGZlYXR1cmUsIHtcbiAgICAgICAgZGF0YVByb2plY3Rpb246IGZlYXR1cmUucHJvamVjdGlvbixcbiAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IHRoaXMubWFwLnByb2plY3Rpb25cbiAgICAgIH0pO1xuICAgICAgbW92ZVRvT2xGZWF0dXJlcyh0aGlzLm1hcCwgW29sRmVhdHVyZV0sIEZlYXR1cmVNb3Rpb24uWm9vbSk7XG4gICAgfVxuICB9XG5cbiAgcHVzaExheWVyKGxheWVyKSB7XG4gICAgZm9yIChjb25zdCBsYXkgb2YgdGhpcy5hY3RpdmVMYXllcnMpIHtcbiAgICAgIGlmIChsYXkuaWQgPT09IGxheWVyLmlkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUxheWVycy5wdXNoKGxheWVyKTtcbiAgfVxufVxuIiwiPGlnby1wYW5lbD5cbiAgPGlnby1zcGF0aWFsLWZpbHRlci10eXBlXG4gICAgW3N0b3JlXT1cInNwYXRpYWxMaXN0U3RvcmVcIlxuICAgIFtzZWxlY3RlZFF1ZXJ5VHlwZV09XCJxdWVyeVR5cGVcIlxuICAgIFt6b25lXT1cInpvbmVcIlxuICAgIFtsYXllcnNdPVwiYWN0aXZlTGF5ZXJzXCJcbiAgICAoZXZlbnRUeXBlKT1cImdldE91dHB1dFR5cGUoJGV2ZW50KVwiXG4gICAgKGV2ZW50UXVlcnlUeXBlKT1cImdldE91dHB1dFF1ZXJ5VHlwZSgkZXZlbnQpXCJcbiAgICAoem9uZUNoYW5nZSk9XCJvblpvbmVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgKHpvbmVXaXRoQnVmZmVyQ2hhbmdlKT1cIm9uWm9uZUNoYW5nZSgkZXZlbnQsIHRydWUpXCJcbiAgICAoYnVmZmVyQ2hhbmdlKT1cImJ1ZmZlciA9ICRldmVudFwiXG4gICAgKG1lYXN1cmVVbml0Q2hhbmdlKT1cIm1lYXN1cmVVbml0ID0gJGV2ZW50XCI+XG4gIDwvaWdvLXNwYXRpYWwtZmlsdGVyLXR5cGU+XG5cbiAgPGlnby1zcGF0aWFsLWZpbHRlci1pdGVtXG4gICAgW3R5cGVdPVwidHlwZVwiXG4gICAgW3F1ZXJ5VHlwZV09XCJxdWVyeVR5cGVcIlxuICAgIFttYXBdPVwibWFwXCJcbiAgICBbem9uZV09XCJ6b25lXCJcbiAgICBbbG9hZGluZ109XCJsb2FkaW5nXCJcbiAgICBbc3RvcmVdPVwic3RvcmVcIlxuICAgIFtsYXllcnNdPVwiYWN0aXZlTGF5ZXJzXCJcbiAgICBbYWxsTGF5ZXJzXT1cImxheWVyc1wiXG4gICAgW3RoZW1hdGljTGVuZ3RoXT1cInRoZW1hdGljTGVuZ3RoXCJcbiAgICAocmFkaXVzRXZlbnQpPVwiYnVmZmVyID0gJGV2ZW50XCJcbiAgICAoYnVmZmVyRXZlbnQpPVwiYnVmZmVyID0gJGV2ZW50XCJcbiAgICAobWVhc3VyZVVuaXRDaGFuZ2UpPVwibWVhc3VyZVVuaXQgPSAkZXZlbnRcIlxuICAgIChmcmVlaGFuZENvbnRyb2wpPVwiZnJlZWhhbmREcmF3SXNBY3RpdmUgPSAkZXZlbnRcIlxuICAgIChkcmF3Wm9uZUV2ZW50KT1cInpvbmUgPSAkZXZlbnRcIlxuICAgICh6b25lV2l0aEJ1ZmZlckNoYW5nZSk9XCJvblpvbmVDaGFuZ2UoJGV2ZW50LCB0cnVlKVwiXG4gICAgKGl0ZW1UeXBlQ2hhbmdlKT1cIml0ZW1UeXBlID0gJGV2ZW50XCJcbiAgICAodGhlbWF0aWNDaGFuZ2UpPVwidGhlbWF0aWNzID0gJGV2ZW50XCJcbiAgICAodG9nZ2xlU2VhcmNoKT1cImdldE91dHB1dFRvZ2dsZVNlYXJjaCgpXCJcbiAgICAoY2xlYXJCdXR0b25FdmVudCk9XCJjbGVhck1hcCgpXCJcbiAgICAoY2xlYXJTZWFyY2hFdmVudCk9XCJnZXRPdXRwdXRDbGVhclNlYXJjaCgpXCJcbiAgICAoZXhwb3J0KT1cImFjdGl2YXRlRXhwb3J0VG9vbCgpXCJcbiAgICAob3BlbldvcmtzcGFjZSk9XCJhY3RpdmF0ZVdvcmtzcGFjZSgpXCJcbiAgICAoZW50aXR5Q2hhbmdlKT1cImFjdGl2YXRlV29ya3NwYWNlKCRldmVudClcIj5cbiAgPC9pZ28tc3BhdGlhbC1maWx0ZXItaXRlbT5cbjwvaWdvLXBhbmVsPlxuXG48aWdvLXBhbmVsPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRGZWF0dXJlJCB8IGFzeW5jIGFzIGZlYXR1cmVcIj5cbiAgICA8aWdvLWZlYXR1cmUtZGV0YWlscyBbZmVhdHVyZV09XCJmZWF0dXJlXCI+PC9pZ28tZmVhdHVyZS1kZXRhaWxzPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvaWdvLXBhbmVsPiJdfQ==