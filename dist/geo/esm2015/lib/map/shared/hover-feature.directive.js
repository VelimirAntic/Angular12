import { Directive, Input, Self, HostListener } from '@angular/core';
import olLayerVectorTile from 'ol/layer/VectorTile';
import olLayerVector from 'ol/layer/Vector';
import olVectorTileSource from 'ol/source/VectorTile';
import OlFeature from 'ol/Feature';
import * as OlStyle from 'ol/style';
import * as OlGeom from 'ol/geom';
import { EntityStore } from '@igo2/common';
import { FeatureDataSource } from '../../datasource/shared/datasources/feature-datasource';
import { VectorLayer } from '../../layer/shared/layers';
import { take } from 'rxjs/operators';
import { tryBindStoreLayer } from '../../feature/shared/feature.utils';
import { FeatureStore } from '../../feature/shared/store';
import { FeatureMotion } from '../../feature/shared/feature.enums';
import { unByKey } from 'ol/Observable';
import RenderFeature from 'ol/render/Feature';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map-browser/map-browser.component";
import * as i2 from "@igo2/core";
import * as i3 from "../../layer/shared/style.service";
/**
 * This directive makes the mouse coordinate trigger a reverse search on available search sources.
 * The search results are placed into a label, on a cross icon, representing the mouse coordinate.
 * By default, no search sources. Config in config file must be defined.
 * the layer level.
 */
export class HoverFeatureDirective {
    constructor(component, mediaService, styleService) {
        this.component = component;
        this.mediaService = mediaService;
        this.styleService = styleService;
        this.pointerHoverFeatureStore = new EntityStore([]);
        this.selectionMVT = {};
        this.hoverFeatureId = 'hoverFeatureId';
        /**
         * The delay where the mouse must be motionless before trigger the reverse search
         */
        this.igoHoverFeatureDelay = 1000;
        /**
         * If the user has enabled or not the directive
         */
        this.igoHoverFeatureEnabled = false;
    }
    mouseout() {
        clearTimeout(this.lastTimeoutRequest);
        this.clearLayer();
    }
    /**
     * IGO map
     * @internal
     */
    get map() {
        return this.component.map;
    }
    get mapProjection() {
        return this.component.map.projection;
    }
    /**
     * Start listening to pointermove and reverse search results.
     * @internal
     */
    ngOnInit() {
        this.listenToMapPointerMove();
        this.subscribeToPointerStore();
        this.listenToMapClick();
        this.map.status$.pipe(take(1)).subscribe(() => {
            this.store = new FeatureStore([], { map: this.map });
            this.initStore();
        });
        // To handle context change without using the contextService.
        this.layers$$ = this.map.layers$.subscribe((layers) => {
            if (this.store && !layers.find(l => l.id === 'hoverFeatureId')) {
                this.initStore();
            }
        });
    }
    /**
     * Initialize the pointer position store
     * @internal
     */
    initStore() {
        const store = this.store;
        const layer = new VectorLayer({
            isIgoInternalLayer: true,
            id: 'hoverFeatureId',
            title: 'hoverFeature',
            zIndex: 900,
            source: new FeatureDataSource(),
            showInLayerList: false,
            exportable: false,
            browsable: false,
            style: hoverFeatureMarker
        });
        tryBindStoreLayer(store, layer);
        this.selectionLayer = new olLayerVectorTile({
            map: this.map.ol,
            zIndex: 901,
            renderMode: "vector",
            declutter: true,
            source: new olVectorTileSource({}),
            style: (feature) => {
                if (this.mvtStyleOptions && feature.getId() in this.selectionMVT) {
                    return this.createHoverStyle(feature, this.mvtStyleOptions);
                }
            }
        });
    }
    createHoverStyle(feature, hoverStyle) {
        var _a;
        const localHoverStyle = Object.assign({}, hoverStyle);
        let label = hoverStyle.label ? hoverStyle.label.attribute : undefined;
        let hasLabelStyle = ((_a = hoverStyle.label) === null || _a === void 0 ? void 0 : _a.style) ? true : false;
        if (!feature.get('_isLabel')) {
            localHoverStyle.label = undefined;
            hasLabelStyle = false;
            label = undefined;
        }
        else {
            // clear the style for label....
            const size = localHoverStyle.data ? localHoverStyle.data.length : 0;
            const radius = [];
            const stroke = [];
            const width = [];
            const fill = [];
            for (let i = 0; i < size; i++) {
                radius.push(0);
                stroke.push('rgba(255, 255, 255, 0)');
                width.push(0);
                fill.push('rgba(255, 255, 255, 0)');
            }
            localHoverStyle.radius = radius;
            localHoverStyle.stroke = stroke;
            localHoverStyle.width = width;
            localHoverStyle.fill = fill;
        }
        if (!hasLabelStyle && label) {
            localHoverStyle.label.style =
                {
                    textAlign: 'left',
                    textBaseline: 'top',
                    font: '12px Calibri,sans-serif',
                    fill: { color: '#000' },
                    backgroundFill: { color: 'rgba(255, 255, 255, 0.5)' },
                    backgroundStroke: { color: 'rgba(200, 200, 200, 0.75)', width: 2 },
                    stroke: { color: '#fff', width: 3 },
                    overflow: true,
                    offsetX: 10,
                    offsetY: 20,
                    padding: [2.5, 2.5, 2.5, 2.5]
                };
        }
        return this.styleService.createStyleByAttribute(feature, localHoverStyle);
    }
    /**
     * Stop listening to pointermove and reverse search results.
     * @internal
     */
    ngOnDestroy() {
        this.unlistenToMapPointerMove();
        this.unsubscribeToPointerStore();
        this.unlistenToMapSingleClick();
        this.layers$$.unsubscribe();
    }
    /**
     * Subscribe to pointermove result store
     * @internal
     */
    subscribeToPointerStore() {
        this.store$$ = this.pointerHoverFeatureStore.entities$.subscribe(resultsUnderPointerPosition => {
            this.entitiesToPointerOverlay(resultsUnderPointerPosition);
        });
    }
    /**
     * convert store entities to a pointer position overlay with label summary on.
     * @param event OL map browser pointer event
     */
    entitiesToPointerOverlay(resultsUnderPointerPosition) {
        this.addFeatureOverlay(resultsUnderPointerPosition);
    }
    /**
     * On map pointermove
     */
    listenToMapPointerMove() {
        this.pointerMoveListener = this.map.ol.on('pointermove', (event) => this.onMapEvent(event));
    }
    /**
     * On map singleclick
     */
    listenToMapClick() {
        this.singleClickMapListener = this.map.ol.on('singleclick', (event) => this.onMapSingleClickEvent(event));
    }
    /**
     * Unsubscribe to pointer store.
     * @internal
     */
    unsubscribeToPointerStore() {
        this.store$$.unsubscribe();
    }
    /**
     * Stop listening for map pointermove
     * @internal
     */
    unlistenToMapPointerMove() {
        unByKey(this.pointerMoveListener);
        this.pointerMoveListener = undefined;
    }
    /**
     * Stop listening for map singleclick
     * @internal
     */
    unlistenToMapSingleClick() {
        unByKey(this.singleClickMapListener);
        this.singleClickMapListener = undefined;
    }
    /**
     * Trigger clear layer on singleclick.
     * @param event OL map browser singleclick event
     */
    onMapSingleClickEvent(event) {
        this.clearLayer();
    }
    /**
     * Trigger hover when the mouse is motionless during the defined delay (pointerMoveDelay).
     * @param event OL map browser pointer event
     */
    onMapEvent(event) {
        if (event.dragging || !this.igoHoverFeatureEnabled ||
            this.mediaService.isTouchScreen()) {
            this.clearLayer();
            return;
        }
        if (typeof this.lastTimeoutRequest !== 'undefined') { // cancel timeout when the mouse moves
            clearTimeout(this.lastTimeoutRequest);
        }
        this.clearLayer();
        let maximumZindex = -Infinity;
        let topMostOlLayer;
        const pixel = this.map.ol.getPixelFromCoordinate(event.coordinate);
        this.lastTimeoutRequest = setTimeout(() => {
            // retrieve the topmost layer with feature to only apply the hover on this layer.
            this.map.ol.forEachFeatureAtPixel(pixel, (mapFeature, layerOL) => {
                if (!layerOL) {
                    return;
                }
                const igoLayer = this.map.getLayerByOlUId(layerOL.ol_uid);
                if (!this.canProcessHover(igoLayer)) {
                    return;
                }
                if (igoLayer.zIndex <= maximumZindex) {
                    return;
                }
                maximumZindex = igoLayer.zIndex;
                topMostOlLayer = layerOL;
            }, {
                hitTolerance: 10, layerFilter: olLayer => olLayer instanceof olLayerVector || olLayer instanceof olLayerVectorTile
            });
            if (!topMostOlLayer) {
                return;
            }
            this.clearLayer();
            this.map.ol.forEachFeatureAtPixel(pixel, (mapFeature, layerOL) => {
                var _a, _b, _c;
                if (mapFeature.get('hoverSummary') === undefined) {
                    let igoLayer;
                    if (layerOL instanceof olLayerVector) {
                        igoLayer = this.map.getLayerByOlUId(layerOL.ol_uid);
                        if (!this.canProcessHover(igoLayer)) {
                            return;
                        }
                        let localOlFeature = this.handleRenderFeature(mapFeature);
                        this.setLayerStyleFromOptions(igoLayer, localOlFeature);
                        const featuresToLoad = [localOlFeature];
                        localOlFeature.set("_isLabel", false);
                        const myLabelOlFeature = new OlFeature();
                        myLabelOlFeature.setProperties(localOlFeature.getProperties());
                        const labelGeom = localOlFeature.getGeometry().getType() === 'Point' ? localOlFeature.getGeometry() : new OlGeom.Point(event.coordinate);
                        myLabelOlFeature.setGeometry(labelGeom);
                        myLabelOlFeature.setId(localOlFeature.getId());
                        myLabelOlFeature.set("_isLabel", true);
                        this.setLayerStyleFromOptions(igoLayer, myLabelOlFeature);
                        featuresToLoad.push(myLabelOlFeature);
                        this.pointerHoverFeatureStore.load(featuresToLoad);
                        return true;
                    }
                    if (layerOL instanceof olLayerVectorTile) {
                        igoLayer = this.map.getLayerByOlUId(layerOL.ol_uid);
                        if (!this.canProcessHover(igoLayer)) {
                            return;
                        }
                        if ((_b = (_a = igoLayer === null || igoLayer === void 0 ? void 0 : igoLayer.options) === null || _a === void 0 ? void 0 : _a.styleByAttribute) === null || _b === void 0 ? void 0 : _b.hoverStyle) {
                            this.mvtStyleOptions = igoLayer.options.styleByAttribute.hoverStyle;
                        }
                        else if ((_c = igoLayer === null || igoLayer === void 0 ? void 0 : igoLayer.options) === null || _c === void 0 ? void 0 : _c.hoverStyle) {
                            this.mvtStyleOptions = igoLayer.options.hoverStyle;
                        }
                        this.selectionLayer.setSource(layerOL.getSource());
                        layerOL.getFeatures(event.pixel).then((mvtFeatures) => {
                            if (!mvtFeatures.length) {
                                this.selectionMVT = {};
                                this.selectionLayer.changed();
                                this.clearLayer();
                                return;
                            }
                            const feature = mvtFeatures[0];
                            if (!feature) {
                                this.clearLayer();
                                return;
                            }
                            let localOlFeature = this.handleRenderFeature(feature);
                            localOlFeature.set("_isLabel", false);
                            const myLabelOlFeature = new OlFeature();
                            myLabelOlFeature.setProperties(localOlFeature.getProperties());
                            const labelGeom = localOlFeature.getGeometry().getType() === 'Point' ? localOlFeature.getGeometry() : new OlGeom.Point(event.coordinate);
                            myLabelOlFeature.setGeometry(labelGeom);
                            myLabelOlFeature.setId(localOlFeature.getId());
                            myLabelOlFeature.set("_isLabel", true);
                            this.setLayerStyleFromOptions(igoLayer, myLabelOlFeature);
                            this.pointerHoverFeatureStore.load([myLabelOlFeature]);
                            this.selectionMVT[feature.getId()] = localOlFeature;
                            this.selectionLayer.changed();
                        });
                    }
                }
                return true;
            }, {
                hitTolerance: 10, layerFilter: olLayer => olLayer === topMostOlLayer
            });
        }, this.igoHoverFeatureDelay);
    }
    canProcessHover(igoLayer) {
        if (!igoLayer) {
            return false;
        }
        if (!igoLayer.visible) {
            return false;
        }
        if (!igoLayer.options) {
            return false;
        }
        if (!igoLayer.options.styleByAttribute && !igoLayer.options.hoverStyle) {
            return false;
        }
        if ((igoLayer.options.styleByAttribute && !igoLayer.options.styleByAttribute.hoverStyle) &&
            !igoLayer.options.hoverStyle) {
            return false;
        }
        return true;
    }
    handleRenderFeature(feature) {
        let localFeature;
        if (feature instanceof RenderFeature) {
            localFeature = new OlFeature({
                geometry: this.getGeometry(feature)
            });
            localFeature.setId(feature.getId());
        }
        else if (feature instanceof OlFeature) {
            localFeature = feature;
        }
        return localFeature;
    }
    /**
     * Add a feature to the pointer store
     * @param text string
     */
    addFeatureOverlay(hoverEntity) {
        if (hoverEntity.length > 0) {
            const result = hoverEntity[0];
            this.clearLayer();
            const feature = new OlFeature({
                geometry: result.getGeometry(),
                meta: { id: this.hoverFeatureId },
                hoverSummary: this.getHoverSummary(result.getProperties())
            });
            this.store.setLayerOlFeatures([feature], FeatureMotion.None);
        }
    }
    setLayerStyleFromOptions(igoLayer, feature) {
        var _a, _b, _c;
        if ((_b = (_a = igoLayer === null || igoLayer === void 0 ? void 0 : igoLayer.options) === null || _a === void 0 ? void 0 : _a.styleByAttribute) === null || _b === void 0 ? void 0 : _b.hoverStyle) {
            this.store.layer.ol.setStyle(this.createHoverStyle(feature, igoLayer.options.styleByAttribute.hoverStyle));
            return;
        }
        if ((_c = igoLayer === null || igoLayer === void 0 ? void 0 : igoLayer.options) === null || _c === void 0 ? void 0 : _c.hoverStyle) {
            this.store.layer.ol.setStyle(this.createHoverStyle(feature, igoLayer.options.hoverStyle));
        }
    }
    getHoverSummary(properties) {
        let summary = '';
        for (const [key, value] of Object.entries(properties)) {
            if (!key.startsWith('_') && key !== 'geometry') {
                summary += `${key}: ${value}` + '\n';
            }
        }
        return summary.length >= 2 ? summary.slice(0, -2) : summary;
    }
    getGeometry(feature) {
        let geom;
        if (!feature.getOrientedFlatCoordinates) {
            geom = feature.getGeometry();
        }
        else {
            const coords = feature.getOrientedFlatCoordinates();
            const flatCoords = [];
            coords.forEach((c, idx) => {
                if (idx % 2 === 0) {
                    flatCoords.push([parseFloat(coords[idx]), parseFloat(coords[idx + 1])]);
                }
            });
            // TODO: test MultiX
            switch (feature.getType()) {
                case 'Point':
                    geom = new OlGeom.Point(flatCoords);
                    break;
                case 'Polygon':
                    geom = new OlGeom.Polygon([flatCoords]);
                    break;
                case 'LineString':
                    geom = new OlGeom.LineString([flatCoords]);
                    break;
            }
        }
        return geom;
    }
    /**
     * Clear the pointer store features
     */
    clearLayer() {
        this.selectionMVT = {};
        if (this.selectionLayer) {
            this.selectionLayer.changed();
        }
        if (this.store) {
            this.store.clearLayer();
        }
    }
}
HoverFeatureDirective.ɵfac = function HoverFeatureDirective_Factory(t) { return new (t || HoverFeatureDirective)(i0.ɵɵdirectiveInject(i1.MapBrowserComponent, 2), i0.ɵɵdirectiveInject(i2.MediaService), i0.ɵɵdirectiveInject(i3.StyleService)); };
HoverFeatureDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HoverFeatureDirective, selectors: [["", "igoHoverFeature", ""]], hostBindings: function HoverFeatureDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseout", function HoverFeatureDirective_mouseout_HostBindingHandler() { return ctx.mouseout(); });
    } }, inputs: { igoHoverFeatureDelay: "igoHoverFeatureDelay", igoHoverFeatureEnabled: "igoHoverFeatureEnabled" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HoverFeatureDirective, [{
        type: Directive,
        args: [{
                selector: '[igoHoverFeature]'
            }]
    }], function () { return [{ type: i1.MapBrowserComponent, decorators: [{
                type: Self
            }] }, { type: i2.MediaService }, { type: i3.StyleService }]; }, { igoHoverFeatureDelay: [{
            type: Input
        }], igoHoverFeatureEnabled: [{
            type: Input
        }], mouseout: [{
            type: HostListener,
            args: ['mouseout']
        }] }); })();
/**
 * Create a default style for the pointer position and it's label summary.
 * @param feature OlFeature
 * @returns OL style function
 */
export function hoverFeatureMarker(feature, resolution) {
    const olStyleText = new OlStyle.Style({
        text: new OlStyle.Text({
            text: feature.get('hoverSummary'),
            textAlign: 'left',
            textBaseline: 'top',
            font: '12px Calibri,sans-serif',
            fill: new OlStyle.Fill({ color: '#000' }),
            backgroundFill: new OlStyle.Fill({ color: 'rgba(255, 255, 255, 0.5)' }),
            backgroundStroke: new OlStyle.Stroke({ color: 'rgba(200, 200, 200, 0.75)', width: 2 }),
            stroke: new OlStyle.Stroke({ color: '#fff', width: 3 }),
            overflow: true,
            offsetX: 10,
            offsetY: 20,
            padding: [2.5, 2.5, 2.5, 2.5]
        })
    });
    const olStyle = [olStyleText];
    switch (feature.getGeometry().getType()) {
        case 'Point':
            olStyle.push(new OlStyle.Style({
                image: new OlStyle.Circle({
                    radius: 10,
                    stroke: new OlStyle.Stroke({
                        color: 'blue',
                        width: 3
                    })
                })
            }));
            break;
        default:
            olStyle.push(new OlStyle.Style({
                stroke: new OlStyle.Stroke({
                    color: 'white',
                    width: 5
                })
            }));
            olStyle.push(new OlStyle.Style({
                stroke: new OlStyle.Stroke({
                    color: 'blue',
                    width: 3
                })
            }));
    }
    return olStyle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItZmVhdHVyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9tYXAvc2hhcmVkL2hvdmVyLWZlYXR1cmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLElBQUksRUFFSixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQ25CO0FBQ0gsT0FBTyxpQkFBaUIsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLGFBQWEsTUFBTSxpQkFBaUIsQ0FBQztBQUc1QyxPQUFPLGtCQUFrQixNQUFNLHNCQUFzQixDQUFDO0FBU3RELE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEtBQUssTUFBTSxNQUFNLFNBQVMsQ0FBQztBQUVsQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQTBCLE1BQU0sMkJBQTJCLENBQUM7QUFDaEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLGFBQWEsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFHOUM7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8scUJBQXFCO0lBZ0RoQyxZQUNrQixTQUE4QixFQUN0QyxZ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N0IsTUFBTSxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsS0FBSyxFQUFFLE9BQU87b0JBQ2QsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQzdCLE1BQU0sRUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7YUFDSCxDQUFDLENBQUMsQ0FBQztLQUNQO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFFakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgU2VsZixcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbiAgO1xuaW1wb3J0IG9sTGF5ZXJWZWN0b3JUaWxlIGZyb20gJ29sL2xheWVyL1ZlY3RvclRpbGUnO1xuaW1wb3J0IG9sTGF5ZXJWZWN0b3IgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgb2xWZWN0b3JUaWxlU291cmNlIGZyb20gJ29sL3NvdXJjZS9WZWN0b3JUaWxlJztcblxuaW1wb3J0IHR5cGUgeyBkZWZhdWx0IGFzIE9sTWFwQnJvd3NlckV2ZW50IH0gZnJvbSAnb2wvTWFwQnJvd3NlckV2ZW50JztcblxuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwL3NoYXJlZC9tYXAnO1xuaW1wb3J0IHsgTWFwQnJvd3NlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hcC9tYXAtYnJvd3Nlci9tYXAtYnJvd3Nlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5pbXBvcnQgT2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0ICogYXMgT2xTdHlsZSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgKiBhcyBPbEdlb20gZnJvbSAnb2wvZ2VvbSc7XG5cbmltcG9ydCB7IEVudGl0eVN0b3JlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IEZlYXR1cmVEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvZmVhdHVyZS1kYXRhc291cmNlJztcbmltcG9ydCB7IFZlY3RvckxheWVyLCBMYXllciwgVmVjdG9yVGlsZUxheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgdHJ5QmluZFN0b3JlTGF5ZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NoYXJlZC9mZWF0dXJlLnV0aWxzJztcbmltcG9ydCB7IEZlYXR1cmVTdG9yZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL3N0b3JlJztcbmltcG9ydCB7IEZlYXR1cmVNb3Rpb24gfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NoYXJlZC9mZWF0dXJlLmVudW1zJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgU3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL3N0eWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgdW5CeUtleSB9IGZyb20gJ29sL09ic2VydmFibGUnO1xuaW1wb3J0IFJlbmRlckZlYXR1cmUgZnJvbSAnb2wvcmVuZGVyL0ZlYXR1cmUnO1xuaW1wb3J0IHsgU3R5bGVCeUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC92ZWN0b3Itc3R5bGUuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBtYWtlcyB0aGUgbW91c2UgY29vcmRpbmF0ZSB0cmlnZ2VyIGEgcmV2ZXJzZSBzZWFyY2ggb24gYXZhaWxhYmxlIHNlYXJjaCBzb3VyY2VzLlxuICogVGhlIHNlYXJjaCByZXN1bHRzIGFyZSBwbGFjZWQgaW50byBhIGxhYmVsLCBvbiBhIGNyb3NzIGljb24sIHJlcHJlc2VudGluZyB0aGUgbW91c2UgY29vcmRpbmF0ZS5cbiAqIEJ5IGRlZmF1bHQsIG5vIHNlYXJjaCBzb3VyY2VzLiBDb25maWcgaW4gY29uZmlnIGZpbGUgbXVzdCBiZSBkZWZpbmVkLlxuICogdGhlIGxheWVyIGxldmVsLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaWdvSG92ZXJGZWF0dXJlXSdcbn0pXG5leHBvcnQgY2xhc3MgSG92ZXJGZWF0dXJlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBzdG9yZTogRmVhdHVyZVN0b3JlPEZlYXR1cmU+O1xuICBwcml2YXRlIHBvaW50ZXJIb3ZlckZlYXR1cmVTdG9yZTogRW50aXR5U3RvcmU8T2xGZWF0dXJlPE9sR2VvbWV0cnk+PiA9IG5ldyBFbnRpdHlTdG9yZTxPbEZlYXR1cmU8T2xHZW9tZXRyeT4+KFtdKTtcbiAgcHJpdmF0ZSBsYXN0VGltZW91dFJlcXVlc3Q7XG4gIHByaXZhdGUgc3RvcmUkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGxheWVycyQkOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBzZWxlY3Rpb25MYXllcjogb2xMYXllclZlY3RvclRpbGU7XG4gIHByaXZhdGUgc2VsZWN0aW9uTVZUID0ge307XG4gIHByaXZhdGUgbXZ0U3R5bGVPcHRpb25zOiBTdHlsZUJ5QXR0cmlidXRlO1xuXG4gIC8qKlxuICAgKiBMaXN0ZW5lciB0byB0aGUgcG9pbnRlciBtb3ZlIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIHBvaW50ZXJNb3ZlTGlzdGVuZXI7XG5cbiAgcHJpdmF0ZSBzaW5nbGVDbGlja01hcExpc3RlbmVyO1xuXG4gIHByaXZhdGUgaG92ZXJGZWF0dXJlSWQ6IHN0cmluZyA9ICdob3ZlckZlYXR1cmVJZCc7XG4gIC8qKlxuICAgKiBUaGUgZGVsYXkgd2hlcmUgdGhlIG1vdXNlIG11c3QgYmUgbW90aW9ubGVzcyBiZWZvcmUgdHJpZ2dlciB0aGUgcmV2ZXJzZSBzZWFyY2hcbiAgICovXG4gIEBJbnB1dCgpIGlnb0hvdmVyRmVhdHVyZURlbGF5OiBudW1iZXIgPSAxMDAwO1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgdXNlciBoYXMgZW5hYmxlZCBvciBub3QgdGhlIGRpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgaWdvSG92ZXJGZWF0dXJlRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3V0JylcbiAgbW91c2VvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubGFzdFRpbWVvdXRSZXF1ZXN0KTtcbiAgICB0aGlzLmNsZWFyTGF5ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJR08gbWFwXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IG1hcCgpOiBJZ29NYXAge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5tYXA7XG4gIH1cblxuICBnZXQgbWFwUHJvamVjdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5jb21wb25lbnQubWFwIGFzIElnb01hcCkucHJvamVjdGlvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgcHJpdmF0ZSBjb21wb25lbnQ6IE1hcEJyb3dzZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSBtZWRpYVNlcnZpY2U6IE1lZGlhU2VydmljZSxcbiAgICBwcml2YXRlIHN0eWxlU2VydmljZTogU3R5bGVTZXJ2aWNlLFxuICApIHsgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBsaXN0ZW5pbmcgdG8gcG9pbnRlcm1vdmUgYW5kIHJldmVyc2Ugc2VhcmNoIHJlc3VsdHMuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saXN0ZW5Ub01hcFBvaW50ZXJNb3ZlKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVUb1BvaW50ZXJTdG9yZSgpO1xuICAgIHRoaXMubGlzdGVuVG9NYXBDbGljaygpO1xuXG4gICAgdGhpcy5tYXAuc3RhdHVzJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlID0gbmV3IEZlYXR1cmVTdG9yZTxGZWF0dXJlPihbXSwgeyBtYXA6IHRoaXMubWFwIH0pO1xuICAgICAgdGhpcy5pbml0U3RvcmUoKTtcbiAgICB9KTtcblxuICAgIC8vIFRvIGhhbmRsZSBjb250ZXh0IGNoYW5nZSB3aXRob3V0IHVzaW5nIHRoZSBjb250ZXh0U2VydmljZS5cbiAgICB0aGlzLmxheWVycyQkID0gdGhpcy5tYXAubGF5ZXJzJC5zdWJzY3JpYmUoKGxheWVyczogTGF5ZXJbXSkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RvcmUgJiYgIWxheWVycy5maW5kKGwgPT4gbC5pZCA9PT0gJ2hvdmVyRmVhdHVyZUlkJykpIHtcbiAgICAgICAgdGhpcy5pbml0U3RvcmUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHBvaW50ZXIgcG9zaXRpb24gc3RvcmVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIGluaXRTdG9yZSgpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuc3RvcmU7XG5cbiAgICBjb25zdCBsYXllciA9IG5ldyBWZWN0b3JMYXllcih7XG4gICAgICBpc0lnb0ludGVybmFsTGF5ZXI6IHRydWUsXG4gICAgICBpZDogJ2hvdmVyRmVhdHVyZUlkJyxcbiAgICAgIHRpdGxlOiAnaG92ZXJGZWF0dXJlJyxcbiAgICAgIHpJbmRleDogOTAwLFxuICAgICAgc291cmNlOiBuZXcgRmVhdHVyZURhdGFTb3VyY2UoKSxcbiAgICAgIHNob3dJbkxheWVyTGlzdDogZmFsc2UsXG4gICAgICBleHBvcnRhYmxlOiBmYWxzZSxcbiAgICAgIGJyb3dzYWJsZTogZmFsc2UsXG4gICAgICBzdHlsZTogaG92ZXJGZWF0dXJlTWFya2VyXG4gICAgfSk7XG4gICAgdHJ5QmluZFN0b3JlTGF5ZXIoc3RvcmUsIGxheWVyKTtcblxuICAgIHRoaXMuc2VsZWN0aW9uTGF5ZXIgPSBuZXcgb2xMYXllclZlY3RvclRpbGUoe1xuICAgICAgbWFwOiB0aGlzLm1hcC5vbCxcbiAgICAgIHpJbmRleDogOTAxLFxuICAgICAgcmVuZGVyTW9kZTogXCJ2ZWN0b3JcIixcbiAgICAgIGRlY2x1dHRlcjogdHJ1ZSxcbiAgICAgIHNvdXJjZTogbmV3IG9sVmVjdG9yVGlsZVNvdXJjZSh7fSksXG4gICAgICBzdHlsZTogKGZlYXR1cmUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubXZ0U3R5bGVPcHRpb25zICYmIGZlYXR1cmUuZ2V0SWQoKSBpbiB0aGlzLnNlbGVjdGlvbk1WVCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUhvdmVyU3R5bGUoZmVhdHVyZSwgdGhpcy5tdnRTdHlsZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVIb3ZlclN0eWxlKGZlYXR1cmU6IFJlbmRlckZlYXR1cmUgfCBPbEZlYXR1cmU8T2xHZW9tZXRyeT4sIGhvdmVyU3R5bGU6IFN0eWxlQnlBdHRyaWJ1dGUpIHtcbiAgICBjb25zdCBsb2NhbEhvdmVyU3R5bGUgPSB7IC4uLmhvdmVyU3R5bGUgfTtcbiAgICBsZXQgbGFiZWwgPSBob3ZlclN0eWxlLmxhYmVsID8gaG92ZXJTdHlsZS5sYWJlbC5hdHRyaWJ1dGUgOiB1bmRlZmluZWQ7XG4gICAgbGV0IGhhc0xhYmVsU3R5bGUgPSBob3ZlclN0eWxlLmxhYmVsPy5zdHlsZSA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmICghZmVhdHVyZS5nZXQoJ19pc0xhYmVsJykpIHtcbiAgICAgIGxvY2FsSG92ZXJTdHlsZS5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICAgIGhhc0xhYmVsU3R5bGUgPSBmYWxzZTtcbiAgICAgIGxhYmVsID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjbGVhciB0aGUgc3R5bGUgZm9yIGxhYmVsLi4uLlxuICAgICAgY29uc3Qgc2l6ZSA9IGxvY2FsSG92ZXJTdHlsZS5kYXRhID8gbG9jYWxIb3ZlclN0eWxlLmRhdGEubGVuZ3RoIDogMDtcbiAgICAgIGNvbnN0IHJhZGl1cyA9IFtdO1xuICAgICAgY29uc3Qgc3Ryb2tlID0gW107XG4gICAgICBjb25zdCB3aWR0aCA9IFtdO1xuICAgICAgY29uc3QgZmlsbCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgcmFkaXVzLnB1c2goMCk7XG4gICAgICAgIHN0cm9rZS5wdXNoKCdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyk7XG4gICAgICAgIHdpZHRoLnB1c2goMCk7XG4gICAgICAgIGZpbGwucHVzaCgncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScpO1xuICAgICAgfVxuICAgICAgbG9jYWxIb3ZlclN0eWxlLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgIGxvY2FsSG92ZXJTdHlsZS5zdHJva2UgPSBzdHJva2U7XG4gICAgICBsb2NhbEhvdmVyU3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgIGxvY2FsSG92ZXJTdHlsZS5maWxsID0gZmlsbDtcbiAgICB9XG4gICAgaWYgKCFoYXNMYWJlbFN0eWxlICYmIGxhYmVsKSB7XG4gICAgICBsb2NhbEhvdmVyU3R5bGUubGFiZWwuc3R5bGUgPVxuICAgICAge1xuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdGV4dEJhc2VsaW5lOiAndG9wJyxcbiAgICAgICAgZm9udDogJzEycHggQ2FsaWJyaSxzYW5zLXNlcmlmJyxcbiAgICAgICAgZmlsbDogeyBjb2xvcjogJyMwMDAnIH0sXG4gICAgICAgIGJhY2tncm91bmRGaWxsOiB7IGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyB9LFxuICAgICAgICBiYWNrZ3JvdW5kU3Ryb2tlOiB7IGNvbG9yOiAncmdiYSgyMDAsIDIwMCwgMjAwLCAwLjc1KScsIHdpZHRoOiAyIH0sXG4gICAgICAgIHN0cm9rZTogeyBjb2xvcjogJyNmZmYnLCB3aWR0aDogMyB9LFxuICAgICAgICBvdmVyZmxvdzogdHJ1ZSxcbiAgICAgICAgb2Zmc2V0WDogMTAsXG4gICAgICAgIG9mZnNldFk6IDIwLFxuICAgICAgICBwYWRkaW5nOiBbMi41LCAyLjUsIDIuNSwgMi41XVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3R5bGVTZXJ2aWNlLmNyZWF0ZVN0eWxlQnlBdHRyaWJ1dGUoZmVhdHVyZSwgbG9jYWxIb3ZlclN0eWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGxpc3RlbmluZyB0byBwb2ludGVybW92ZSBhbmQgcmV2ZXJzZSBzZWFyY2ggcmVzdWx0cy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVubGlzdGVuVG9NYXBQb2ludGVyTW92ZSgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVUb1BvaW50ZXJTdG9yZSgpO1xuICAgIHRoaXMudW5saXN0ZW5Ub01hcFNpbmdsZUNsaWNrKCk7XG4gICAgdGhpcy5sYXllcnMkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBwb2ludGVybW92ZSByZXN1bHQgc3RvcmVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBzdWJzY3JpYmVUb1BvaW50ZXJTdG9yZSgpIHtcbiAgICB0aGlzLnN0b3JlJCQgPSB0aGlzLnBvaW50ZXJIb3ZlckZlYXR1cmVTdG9yZS5lbnRpdGllcyQuc3Vic2NyaWJlKHJlc3VsdHNVbmRlclBvaW50ZXJQb3NpdGlvbiA9PiB7XG4gICAgICB0aGlzLmVudGl0aWVzVG9Qb2ludGVyT3ZlcmxheShyZXN1bHRzVW5kZXJQb2ludGVyUG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbnZlcnQgc3RvcmUgZW50aXRpZXMgdG8gYSBwb2ludGVyIHBvc2l0aW9uIG92ZXJsYXkgd2l0aCBsYWJlbCBzdW1tYXJ5IG9uLlxuICAgKiBAcGFyYW0gZXZlbnQgT0wgbWFwIGJyb3dzZXIgcG9pbnRlciBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBlbnRpdGllc1RvUG9pbnRlck92ZXJsYXkocmVzdWx0c1VuZGVyUG9pbnRlclBvc2l0aW9uOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT5bXSkge1xuXG4gICAgdGhpcy5hZGRGZWF0dXJlT3ZlcmxheShyZXN1bHRzVW5kZXJQb2ludGVyUG9zaXRpb24pO1xuXG4gIH1cblxuICAvKipcbiAgICogT24gbWFwIHBvaW50ZXJtb3ZlXG4gICAqL1xuICBwcml2YXRlIGxpc3RlblRvTWFwUG9pbnRlck1vdmUoKSB7XG4gICAgdGhpcy5wb2ludGVyTW92ZUxpc3RlbmVyID0gdGhpcy5tYXAub2wub24oXG4gICAgICAncG9pbnRlcm1vdmUnLFxuICAgICAgKGV2ZW50OiBPbE1hcEJyb3dzZXJFdmVudDxhbnk+KSA9PiB0aGlzLm9uTWFwRXZlbnQoZXZlbnQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBtYXAgc2luZ2xlY2xpY2tcbiAgICovXG4gIHByaXZhdGUgbGlzdGVuVG9NYXBDbGljaygpIHtcbiAgICB0aGlzLnNpbmdsZUNsaWNrTWFwTGlzdGVuZXIgPSB0aGlzLm1hcC5vbC5vbihcbiAgICAgICdzaW5nbGVjbGljaycsXG4gICAgICAoZXZlbnQ6IE9sTWFwQnJvd3NlckV2ZW50PGFueT4pID0+IHRoaXMub25NYXBTaW5nbGVDbGlja0V2ZW50KGV2ZW50KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdG8gcG9pbnRlciBzdG9yZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICB1bnN1YnNjcmliZVRvUG9pbnRlclN0b3JlKCkge1xuICAgIHRoaXMuc3RvcmUkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgbGlzdGVuaW5nIGZvciBtYXAgcG9pbnRlcm1vdmVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIHVubGlzdGVuVG9NYXBQb2ludGVyTW92ZSgpIHtcbiAgICB1bkJ5S2V5KHRoaXMucG9pbnRlck1vdmVMaXN0ZW5lcik7XG4gICAgdGhpcy5wb2ludGVyTW92ZUxpc3RlbmVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgbGlzdGVuaW5nIGZvciBtYXAgc2luZ2xlY2xpY2tcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIHVubGlzdGVuVG9NYXBTaW5nbGVDbGljaygpIHtcbiAgICB1bkJ5S2V5KHRoaXMuc2luZ2xlQ2xpY2tNYXBMaXN0ZW5lcik7XG4gICAgdGhpcy5zaW5nbGVDbGlja01hcExpc3RlbmVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgY2xlYXIgbGF5ZXIgb24gc2luZ2xlY2xpY2suXG4gICAqIEBwYXJhbSBldmVudCBPTCBtYXAgYnJvd3NlciBzaW5nbGVjbGljayBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbk1hcFNpbmdsZUNsaWNrRXZlbnQoZXZlbnQ6IE9sTWFwQnJvd3NlckV2ZW50PGFueT4pIHtcbiAgICB0aGlzLmNsZWFyTGF5ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGhvdmVyIHdoZW4gdGhlIG1vdXNlIGlzIG1vdGlvbmxlc3MgZHVyaW5nIHRoZSBkZWZpbmVkIGRlbGF5IChwb2ludGVyTW92ZURlbGF5KS5cbiAgICogQHBhcmFtIGV2ZW50IE9MIG1hcCBicm93c2VyIHBvaW50ZXIgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25NYXBFdmVudChldmVudDogT2xNYXBCcm93c2VyRXZlbnQ8YW55Pikge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LmRyYWdnaW5nIHx8ICF0aGlzLmlnb0hvdmVyRmVhdHVyZUVuYWJsZWQgfHxcbiAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLmlzVG91Y2hTY3JlZW4oKSkge1xuICAgICAgdGhpcy5jbGVhckxheWVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5sYXN0VGltZW91dFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7IC8vIGNhbmNlbCB0aW1lb3V0IHdoZW4gdGhlIG1vdXNlIG1vdmVzXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5sYXN0VGltZW91dFJlcXVlc3QpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyTGF5ZXIoKTtcbiAgICBsZXQgbWF4aW11bVppbmRleCA9IC1JbmZpbml0eTtcbiAgICBsZXQgdG9wTW9zdE9sTGF5ZXI7XG4gICAgY29uc3QgcGl4ZWwgPSB0aGlzLm1hcC5vbC5nZXRQaXhlbEZyb21Db29yZGluYXRlKGV2ZW50LmNvb3JkaW5hdGUpO1xuICAgIHRoaXMubGFzdFRpbWVvdXRSZXF1ZXN0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIC8vIHJldHJpZXZlIHRoZSB0b3Btb3N0IGxheWVyIHdpdGggZmVhdHVyZSB0byBvbmx5IGFwcGx5IHRoZSBob3ZlciBvbiB0aGlzIGxheWVyLlxuICAgICAgdGhpcy5tYXAub2wuZm9yRWFjaEZlYXR1cmVBdFBpeGVsKHBpeGVsLCAobWFwRmVhdHVyZTogUmVuZGVyRmVhdHVyZSB8IE9sRmVhdHVyZTxPbEdlb21ldHJ5PiwgbGF5ZXJPTDogYW55KSA9PiB7XG4gICAgICAgIGlmICghbGF5ZXJPTCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZ29MYXllciA9IHRoaXMubWFwLmdldExheWVyQnlPbFVJZCgobGF5ZXJPTCBhcyBhbnkpLm9sX3VpZCk7XG4gICAgICAgIGlmICghdGhpcy5jYW5Qcm9jZXNzSG92ZXIoaWdvTGF5ZXIgYXMgYW55KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWdvTGF5ZXIuekluZGV4IDw9IG1heGltdW1aaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWF4aW11bVppbmRleCA9IGlnb0xheWVyLnpJbmRleDtcbiAgICAgICAgdG9wTW9zdE9sTGF5ZXIgPSBsYXllck9MO1xuXG4gICAgICB9LCB7XG4gICAgICAgIGhpdFRvbGVyYW5jZTogMTAsIGxheWVyRmlsdGVyOiBvbExheWVyID0+IG9sTGF5ZXIgaW5zdGFuY2VvZiBvbExheWVyVmVjdG9yIHx8IG9sTGF5ZXIgaW5zdGFuY2VvZiBvbExheWVyVmVjdG9yVGlsZVxuICAgICAgfSk7XG4gICAgICBpZiAoIXRvcE1vc3RPbExheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbGVhckxheWVyKCk7XG4gICAgICB0aGlzLm1hcC5vbC5mb3JFYWNoRmVhdHVyZUF0UGl4ZWwocGl4ZWwsIChtYXBGZWF0dXJlOiBSZW5kZXJGZWF0dXJlIHwgT2xGZWF0dXJlPE9sR2VvbWV0cnk+LCBsYXllck9MOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG1hcEZlYXR1cmUuZ2V0KCdob3ZlclN1bW1hcnknKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGV0IGlnb0xheWVyO1xuICAgICAgICAgIGlmIChsYXllck9MIGluc3RhbmNlb2Ygb2xMYXllclZlY3Rvcikge1xuICAgICAgICAgICAgaWdvTGF5ZXIgPSB0aGlzLm1hcC5nZXRMYXllckJ5T2xVSWQoKGxheWVyT0wgYXMgYW55KS5vbF91aWQpIGFzIFZlY3RvckxheWVyO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3NIb3ZlcihpZ29MYXllcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGxvY2FsT2xGZWF0dXJlID0gdGhpcy5oYW5kbGVSZW5kZXJGZWF0dXJlKG1hcEZlYXR1cmUpO1xuICAgICAgICAgICAgdGhpcy5zZXRMYXllclN0eWxlRnJvbU9wdGlvbnMoaWdvTGF5ZXIsIGxvY2FsT2xGZWF0dXJlKTtcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVzVG9Mb2FkID0gW2xvY2FsT2xGZWF0dXJlXTtcbiAgICAgICAgICAgIGxvY2FsT2xGZWF0dXJlLnNldChcIl9pc0xhYmVsXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IG15TGFiZWxPbEZlYXR1cmUgPSBuZXcgT2xGZWF0dXJlKCk7XG4gICAgICAgICAgICBteUxhYmVsT2xGZWF0dXJlLnNldFByb3BlcnRpZXMobG9jYWxPbEZlYXR1cmUuZ2V0UHJvcGVydGllcygpKTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsR2VvbSA9XG4gICAgICAgICAgICAgIGxvY2FsT2xGZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnUG9pbnQnID8gbG9jYWxPbEZlYXR1cmUuZ2V0R2VvbWV0cnkoKSA6IG5ldyBPbEdlb20uUG9pbnQoZXZlbnQuY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBteUxhYmVsT2xGZWF0dXJlLnNldEdlb21ldHJ5KGxhYmVsR2VvbSk7XG4gICAgICAgICAgICBteUxhYmVsT2xGZWF0dXJlLnNldElkKGxvY2FsT2xGZWF0dXJlLmdldElkKCkpO1xuICAgICAgICAgICAgbXlMYWJlbE9sRmVhdHVyZS5zZXQoXCJfaXNMYWJlbFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TGF5ZXJTdHlsZUZyb21PcHRpb25zKGlnb0xheWVyLCBteUxhYmVsT2xGZWF0dXJlKTtcbiAgICAgICAgICAgIGZlYXR1cmVzVG9Mb2FkLnB1c2gobXlMYWJlbE9sRmVhdHVyZSk7XG4gICAgICAgICAgICB0aGlzLnBvaW50ZXJIb3ZlckZlYXR1cmVTdG9yZS5sb2FkKGZlYXR1cmVzVG9Mb2FkKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGF5ZXJPTCBpbnN0YW5jZW9mIG9sTGF5ZXJWZWN0b3JUaWxlKSB7XG4gICAgICAgICAgICBpZ29MYXllciA9IHRoaXMubWFwLmdldExheWVyQnlPbFVJZCgobGF5ZXJPTCBhcyBhbnkpLm9sX3VpZCkgYXMgVmVjdG9yVGlsZUxheWVyO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNhblByb2Nlc3NIb3ZlcihpZ29MYXllcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlnb0xheWVyPy5vcHRpb25zPy5zdHlsZUJ5QXR0cmlidXRlPy5ob3ZlclN0eWxlKSB7XG4gICAgICAgICAgICAgIHRoaXMubXZ0U3R5bGVPcHRpb25zID0gaWdvTGF5ZXIub3B0aW9ucy5zdHlsZUJ5QXR0cmlidXRlLmhvdmVyU3R5bGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlnb0xheWVyPy5vcHRpb25zPy5ob3ZlclN0eWxlKSB7XG4gICAgICAgICAgICAgIHRoaXMubXZ0U3R5bGVPcHRpb25zID0gaWdvTGF5ZXIub3B0aW9ucy5ob3ZlclN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25MYXllci5zZXRTb3VyY2UobGF5ZXJPTC5nZXRTb3VyY2UoKSk7XG4gICAgICAgICAgICBsYXllck9MLmdldEZlYXR1cmVzKGV2ZW50LnBpeGVsKS50aGVuKChtdnRGZWF0dXJlczogKFJlbmRlckZlYXR1cmUgfCBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pW10pID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFtdnRGZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1WVCA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTGF5ZXIuY2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJMYXllcigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlID0gbXZ0RmVhdHVyZXNbMF07XG4gICAgICAgICAgICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJMYXllcigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgbG9jYWxPbEZlYXR1cmUgPSB0aGlzLmhhbmRsZVJlbmRlckZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICAgIGxvY2FsT2xGZWF0dXJlLnNldChcIl9pc0xhYmVsXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgY29uc3QgbXlMYWJlbE9sRmVhdHVyZSA9IG5ldyBPbEZlYXR1cmUoKTtcbiAgICAgICAgICAgICAgbXlMYWJlbE9sRmVhdHVyZS5zZXRQcm9wZXJ0aWVzKGxvY2FsT2xGZWF0dXJlLmdldFByb3BlcnRpZXMoKSk7XG4gICAgICAgICAgICAgIGNvbnN0IGxhYmVsR2VvbSA9XG4gICAgICAgICAgICAgIGxvY2FsT2xGZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnUG9pbnQnID8gbG9jYWxPbEZlYXR1cmUuZ2V0R2VvbWV0cnkoKSA6IG5ldyBPbEdlb20uUG9pbnQoZXZlbnQuY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgIG15TGFiZWxPbEZlYXR1cmUuc2V0R2VvbWV0cnkobGFiZWxHZW9tKTtcbiAgICAgICAgICAgICAgbXlMYWJlbE9sRmVhdHVyZS5zZXRJZChsb2NhbE9sRmVhdHVyZS5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgbXlMYWJlbE9sRmVhdHVyZS5zZXQoXCJfaXNMYWJlbFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRMYXllclN0eWxlRnJvbU9wdGlvbnMoaWdvTGF5ZXIsIG15TGFiZWxPbEZlYXR1cmUpO1xuICAgICAgICAgICAgICB0aGlzLnBvaW50ZXJIb3ZlckZlYXR1cmVTdG9yZS5sb2FkKFtteUxhYmVsT2xGZWF0dXJlXSk7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTVZUW2ZlYXR1cmUuZ2V0SWQoKV0gPSBsb2NhbE9sRmVhdHVyZTtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25MYXllci5jaGFuZ2VkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LCB7XG4gICAgICAgIGhpdFRvbGVyYW5jZTogMTAsIGxheWVyRmlsdGVyOiBvbExheWVyID0+IG9sTGF5ZXIgPT09IHRvcE1vc3RPbExheWVyXG4gICAgICB9KTtcbiAgICB9LCB0aGlzLmlnb0hvdmVyRmVhdHVyZURlbGF5KTtcbiAgfVxuXG4gIGNhblByb2Nlc3NIb3ZlcihpZ29MYXllcjogVmVjdG9yTGF5ZXIgfCBWZWN0b3JUaWxlTGF5ZXIpOiBib29sZWFuIHtcbiAgICBpZiAoIWlnb0xheWVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghaWdvTGF5ZXIudmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWlnb0xheWVyLm9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlnb0xheWVyLm9wdGlvbnMuc3R5bGVCeUF0dHJpYnV0ZSAmJiAhaWdvTGF5ZXIub3B0aW9ucy5ob3ZlclN0eWxlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKGlnb0xheWVyLm9wdGlvbnMuc3R5bGVCeUF0dHJpYnV0ZSAmJiAhaWdvTGF5ZXIub3B0aW9ucy5zdHlsZUJ5QXR0cmlidXRlLmhvdmVyU3R5bGUpICYmXG4gICAgICAhaWdvTGF5ZXIub3B0aW9ucy5ob3ZlclN0eWxlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaGFuZGxlUmVuZGVyRmVhdHVyZShmZWF0dXJlOiBSZW5kZXJGZWF0dXJlIHwgT2xGZWF0dXJlPE9sR2VvbWV0cnk+KTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+IHtcbiAgICBsZXQgbG9jYWxGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT47XG4gICAgaWYgKGZlYXR1cmUgaW5zdGFuY2VvZiBSZW5kZXJGZWF0dXJlKSB7XG4gICAgICBsb2NhbEZlYXR1cmUgPSBuZXcgT2xGZWF0dXJlKHtcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2V0R2VvbWV0cnkoZmVhdHVyZSlcbiAgICAgIH0pO1xuICAgICAgbG9jYWxGZWF0dXJlLnNldElkKGZlYXR1cmUuZ2V0SWQoKSk7XG4gICAgfSBlbHNlIGlmIChmZWF0dXJlIGluc3RhbmNlb2YgT2xGZWF0dXJlKSB7XG4gICAgICBsb2NhbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxGZWF0dXJlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGZlYXR1cmUgdG8gdGhlIHBvaW50ZXIgc3RvcmVcbiAgICogQHBhcmFtIHRleHQgc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZEZlYXR1cmVPdmVybGF5KGhvdmVyRW50aXR5OiBPbEZlYXR1cmU8T2xHZW9tZXRyeT5bXSkge1xuXG4gICAgaWYgKGhvdmVyRW50aXR5Lmxlbmd0aCA+IDApIHtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gaG92ZXJFbnRpdHlbMF07XG4gICAgICB0aGlzLmNsZWFyTGF5ZXIoKTtcbiAgICAgIGNvbnN0IGZlYXR1cmUgPSBuZXcgT2xGZWF0dXJlKHtcbiAgICAgICAgZ2VvbWV0cnk6IHJlc3VsdC5nZXRHZW9tZXRyeSgpLFxuICAgICAgICBtZXRhOiB7IGlkOiB0aGlzLmhvdmVyRmVhdHVyZUlkIH0sXG4gICAgICAgIGhvdmVyU3VtbWFyeTogdGhpcy5nZXRIb3ZlclN1bW1hcnkocmVzdWx0LmdldFByb3BlcnRpZXMoKSlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN0b3JlLnNldExheWVyT2xGZWF0dXJlcyhbZmVhdHVyZV0sIEZlYXR1cmVNb3Rpb24uTm9uZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRMYXllclN0eWxlRnJvbU9wdGlvbnMoaWdvTGF5ZXI6IFZlY3RvckxheWVyIHwgVmVjdG9yVGlsZUxheWVyLCBmZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pIHtcbiAgICBpZiAoaWdvTGF5ZXI/Lm9wdGlvbnM/LnN0eWxlQnlBdHRyaWJ1dGU/LmhvdmVyU3R5bGUpIHtcbiAgICAgIHRoaXMuc3RvcmUubGF5ZXIub2wuc2V0U3R5bGUodGhpcy5jcmVhdGVIb3ZlclN0eWxlKGZlYXR1cmUsIGlnb0xheWVyLm9wdGlvbnMuc3R5bGVCeUF0dHJpYnV0ZS5ob3ZlclN0eWxlKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpZ29MYXllcj8ub3B0aW9ucz8uaG92ZXJTdHlsZSkge1xuICAgICAgdGhpcy5zdG9yZS5sYXllci5vbC5zZXRTdHlsZSh0aGlzLmNyZWF0ZUhvdmVyU3R5bGUoZmVhdHVyZSwgaWdvTGF5ZXIub3B0aW9ucy5ob3ZlclN0eWxlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIb3ZlclN1bW1hcnkocHJvcGVydGllcyk6IHN0cmluZyB7XG4gICAgbGV0IHN1bW1hcnkgPSAnJztcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wZXJ0aWVzKSkge1xuICAgICAgaWYgKCFrZXkuc3RhcnRzV2l0aCgnXycpICYmIGtleSAhPT0gJ2dlb21ldHJ5Jykge1xuICAgICAgICBzdW1tYXJ5ICs9IGAke2tleX06ICR7dmFsdWV9YCArICdcXG4nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtbWFyeS5sZW5ndGggPj0gMiA/IHN1bW1hcnkuc2xpY2UoMCwgLTIpIDogc3VtbWFyeTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R2VvbWV0cnkoZmVhdHVyZSk6IE9sR2VvbS5HZW9tZXRyeSB7XG4gICAgbGV0IGdlb207XG4gICAgaWYgKCFmZWF0dXJlLmdldE9yaWVudGVkRmxhdENvb3JkaW5hdGVzKSB7XG4gICAgICBnZW9tID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIGNvbnN0IGNvb3JkcyA9IGZlYXR1cmUuZ2V0T3JpZW50ZWRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIGNvbnN0IGZsYXRDb29yZHMgPSBbXTtcblxuICAgICAgY29vcmRzLmZvckVhY2goKGMsIGlkeCkgPT4ge1xuICAgICAgICBpZiAoaWR4ICUgMiA9PT0gMCkge1xuICAgICAgICAgIGZsYXRDb29yZHMucHVzaChbcGFyc2VGbG9hdChjb29yZHNbaWR4XSksIHBhcnNlRmxvYXQoY29vcmRzW2lkeCArIDFdKV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gVE9ETzogdGVzdCBNdWx0aVhcbiAgICAgIHN3aXRjaCAoZmVhdHVyZS5nZXRUeXBlKCkpIHtcbiAgICAgICAgY2FzZSAnUG9pbnQnOlxuICAgICAgICAgIGdlb20gPSBuZXcgT2xHZW9tLlBvaW50KGZsYXRDb29yZHMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgICAgICBnZW9tID0gbmV3IE9sR2VvbS5Qb2x5Z29uKFtmbGF0Q29vcmRzXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0xpbmVTdHJpbmcnOlxuICAgICAgICAgIGdlb20gPSBuZXcgT2xHZW9tLkxpbmVTdHJpbmcoW2ZsYXRDb29yZHNdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ2VvbTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBwb2ludGVyIHN0b3JlIGZlYXR1cmVzXG4gICAqL1xuICBwcml2YXRlIGNsZWFyTGF5ZXIoKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25NVlQgPSB7fTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25MYXllcikge1xuICAgICAgdGhpcy5zZWxlY3Rpb25MYXllci5jaGFuZ2VkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0b3JlKSB7XG4gICAgICB0aGlzLnN0b3JlLmNsZWFyTGF5ZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWZhdWx0IHN0eWxlIGZvciB0aGUgcG9pbnRlciBwb3NpdGlvbiBhbmQgaXQncyBsYWJlbCBzdW1tYXJ5LlxuICogQHBhcmFtIGZlYXR1cmUgT2xGZWF0dXJlXG4gKiBAcmV0dXJucyBPTCBzdHlsZSBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaG92ZXJGZWF0dXJlTWFya2VyKGZlYXR1cmU6IE9sRmVhdHVyZTxPbEdlb20uR2VvbWV0cnk+LCByZXNvbHV0aW9uOiBudW1iZXIpOiBPbFN0eWxlLlN0eWxlW10ge1xuXG4gIGNvbnN0IG9sU3R5bGVUZXh0ID0gbmV3IE9sU3R5bGUuU3R5bGUoe1xuICAgIHRleHQ6IG5ldyBPbFN0eWxlLlRleHQoe1xuICAgICAgdGV4dDogZmVhdHVyZS5nZXQoJ2hvdmVyU3VtbWFyeScpLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICB0ZXh0QmFzZWxpbmU6ICd0b3AnLFxuICAgICAgZm9udDogJzEycHggQ2FsaWJyaSxzYW5zLXNlcmlmJyxcbiAgICAgIGZpbGw6IG5ldyBPbFN0eWxlLkZpbGwoeyBjb2xvcjogJyMwMDAnIH0pLFxuICAgICAgYmFja2dyb3VuZEZpbGw6IG5ldyBPbFN0eWxlLkZpbGwoeyBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScgfSksXG4gICAgICBiYWNrZ3JvdW5kU3Ryb2tlOiBuZXcgT2xTdHlsZS5TdHJva2UoeyBjb2xvcjogJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC43NSknLCB3aWR0aDogMiB9KSxcbiAgICAgIHN0cm9rZTogbmV3IE9sU3R5bGUuU3Ryb2tlKHsgY29sb3I6ICcjZmZmJywgd2lkdGg6IDMgfSksXG4gICAgICBvdmVyZmxvdzogdHJ1ZSxcbiAgICAgIG9mZnNldFg6IDEwLFxuICAgICAgb2Zmc2V0WTogMjAsXG4gICAgICBwYWRkaW5nOiBbMi41LCAyLjUsIDIuNSwgMi41XVxuICAgIH0pXG4gIH0pO1xuXG4gIGNvbnN0IG9sU3R5bGUgPSBbb2xTdHlsZVRleHRdO1xuICBzd2l0Y2ggKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkpIHtcbiAgICBjYXNlICdQb2ludCc6XG4gICAgICBvbFN0eWxlLnB1c2gobmV3IE9sU3R5bGUuU3R5bGUoe1xuICAgICAgICBpbWFnZTogbmV3IE9sU3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICByYWRpdXM6IDEwLFxuICAgICAgICAgIHN0cm9rZTogbmV3IE9sU3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICB3aWR0aDogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgb2xTdHlsZS5wdXNoKG5ldyBPbFN0eWxlLlN0eWxlKHtcbiAgICAgICAgc3Ryb2tlOiBuZXcgT2xTdHlsZS5TdHJva2Uoe1xuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIHdpZHRoOiA1XG4gICAgICAgIH0pXG4gICAgICB9KSk7XG4gICAgICBvbFN0eWxlLnB1c2gobmV3IE9sU3R5bGUuU3R5bGUoe1xuICAgICAgICBzdHJva2U6IG5ldyBPbFN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgICB3aWR0aDogM1xuICAgICAgICB9KVxuICAgICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIG9sU3R5bGU7XG5cbn1cbiJdfQ==