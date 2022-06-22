import olMap from 'ol/Map';
import olView from 'ol/View';
import olFeature from 'ol/Feature';
import olGeolocation from 'ol/Geolocation';
import olControlAttribution from 'ol/control/Attribution';
import olControlScaleLine from 'ol/control/ScaleLine';
import * as olproj from 'ol/proj';
import * as olproj4 from 'ol/proj/proj4';
import olPoint from 'ol/geom/Point';
import * as olinteraction from 'ol/interaction';
import olCircle from 'ol/geom/Circle';
import * as olstyle from 'ol/style';
import proj4 from 'proj4';
import { BehaviorSubject } from 'rxjs';
import { Overlay } from '../../overlay/shared/overlay';
import { LayerWatcher } from '../utils/layer-watcher';
import { MapViewController } from './controllers/view';
import { FeatureMotion } from '../../feature/shared/feature.enums';
// TODO: This class is messy. Clearly define it's scope and the map browser's.
// Move some stuff into controllers.
export class IgoMap {
    constructor(options) {
        this.offlineButtonToggle$ = new BehaviorSubject(false);
        this.layers$ = new BehaviorSubject([]);
        this.positionFollower = true;
        this.geolocation$ = new BehaviorSubject(undefined);
        this.swipeEnabled$ = new BehaviorSubject(false);
        this.mapCenter$ = new BehaviorSubject(false);
        this.selectedFeatures$ = new BehaviorSubject(null);
        this.defaultOptions = {
            controls: { attribution: false }
        };
        this.options = Object.assign({}, this.defaultOptions, options);
        this.layerWatcher = new LayerWatcher();
        this.status$ = this.layerWatcher.status$;
        olproj4.register(proj4);
        this.init();
    }
    get layers() {
        return this.layers$.value;
    }
    get projection() {
        return this.viewController.getOlProjection().getCode();
    }
    init() {
        const controls = [];
        if (this.options.controls) {
            if (this.options.controls.attribution) {
                const attributionOpt = (this.options.controls.attribution === true
                    ? {}
                    : this.options.controls.attribution);
                controls.push(new olControlAttribution(attributionOpt));
            }
            if (this.options.controls.scaleLine) {
                const scaleLineOpt = (this.options.controls.scaleLine === true
                    ? {}
                    : this.options.controls.scaleLine);
                controls.push(new olControlScaleLine(scaleLineOpt));
            }
        }
        let interactions = {};
        if (this.options.interactions === false) {
            interactions = {
                altShiftDragRotate: false,
                doubleClickZoom: false,
                keyboard: false,
                mouseWheelZoom: false,
                shiftDragZoom: false,
                dragPan: false,
                pinchRotate: false,
                pinchZoom: false
            };
        }
        this.ol = new olMap({
            interactions: olinteraction.defaults(interactions),
            controls
        });
        this.setView(this.options.view || {});
        this.viewController = new MapViewController({
            stateHistory: true
        });
        this.viewController.setOlMap(this.ol);
        this.overlay = new Overlay(this);
        this.queryResultsOverlay = new Overlay(this);
        this.searchResultsOverlay = new Overlay(this);
        this.buffer = new Overlay(this);
    }
    setTarget(id) {
        this.ol.setTarget(id);
        if (id !== undefined) {
            this.layerWatcher.subscribe(() => { }, null);
        }
        else {
            this.layerWatcher.unsubscribe();
        }
    }
    updateView(options) {
        const currentView = this.ol.getView();
        const viewOptions = Object.assign({
            zoom: currentView.getZoom()
        }, currentView.getProperties());
        this.setView(Object.assign(viewOptions, options));
        if (options.maxZoomOnExtent) {
            this.viewController.maxZoomOnExtent = options.maxZoomOnExtent;
        }
    }
    /**
     * Set the map view
     * @param options Map view options
     */
    setView(options) {
        if (this.viewController !== undefined) {
            this.viewController.clearStateHistory();
        }
        options = Object.assign({ constrainResolution: true }, options);
        const view = new olView(options);
        this.ol.setView(view);
        this.unsubscribeGeolocate();
        if (options) {
            if (options.maxLayerZoomExtent) {
                this.viewController.maxLayerZoomExtent = options.maxLayerZoomExtent;
            }
            if (options.center) {
                const projection = view.getProjection().getCode();
                const center = olproj.fromLonLat(options.center, projection);
                view.setCenter(center);
            }
            if (options.geolocate) {
                this.geolocate(true);
            }
            if (options.alwaysTracking) {
                this.alwaysTracking = true;
            }
        }
    }
    updateControls(value) {
        if (value === undefined) {
            return;
        }
        const controls = [];
        if (value.attribution) {
            const attributionOpt = (value.attribution === true
                ? {}
                : value.attribution);
            controls.push(new olControlAttribution(attributionOpt));
        }
        if (value.scaleLine) {
            const scaleLineOpt = (value.scaleLine === true
                ? {}
                : value.scaleLine);
            controls.push(new olControlScaleLine(scaleLineOpt));
        }
        const currentControls = Object.assign([], this.ol.getControls().getArray());
        currentControls.forEach(control => {
            this.ol.removeControl(control);
        });
        controls.forEach(control => {
            this.ol.addControl(control);
        });
    }
    /**
     * Deprecated
     * TODO: Move to ViewController and update every place it's used
     */
    getCenter(projection) {
        return this.viewController.getCenter(projection);
    }
    /**
     * Deprecated
     * TODO: Move to ViewController and update every place it's used
     */
    getExtent(projection) {
        return this.viewController.getExtent(projection);
    }
    // TODO: Move to ViewController and update every place it's used
    getZoom() {
        return this.viewController.getZoom();
    }
    changeBaseLayer(baseLayer) {
        if (!baseLayer) {
            return;
        }
        for (const bl of this.getBaseLayers()) {
            bl.visible = false;
        }
        baseLayer.visible = true;
        this.viewController.olView.setMinZoom(baseLayer.dataSource.options.minZoom || (this.options.view || {}).minZoom);
        this.viewController.olView.setMaxZoom(baseLayer.dataSource.options.maxZoom || (this.options.view || {}).maxZoom);
    }
    getBaseLayers() {
        return this.layers.filter((layer) => layer.baseLayer === true);
    }
    getLayerById(id) {
        return this.layers.find((layer) => layer.id && layer.id === id);
    }
    getLayerByAlias(alias) {
        return this.layers.find((layer) => layer.alias && layer.alias === alias);
    }
    getLayerByOlUId(olUId) {
        return this.layers.find((layer) => layer.ol.ol_uid && layer.ol.ol_uid === olUId);
    }
    /**
     * Add a single layer
     * @param layer Layer to add
     * @param push DEPRECATED
     */
    addLayer(layer, push = true) {
        this.addLayers([layer]);
    }
    /**
     * Add many layers
     * @param layers Layers to add
     * @param push DEPRECATED
     */
    addLayers(layers, push = true) {
        let offsetZIndex = 0;
        let offsetBaseLayerZIndex = 0;
        const addedLayers = layers
            .map((layer) => {
            if (!layer) {
                return;
            }
            const offset = layer.zIndex
                ? 0
                : layer.baseLayer
                    ? offsetBaseLayerZIndex++
                    : offsetZIndex++;
            return this.doAddLayer(layer, offset);
        })
            .filter((layer) => layer !== undefined);
        this.setLayers([].concat(this.layers, addedLayers));
    }
    /**
     * Remove a single layer
     * @param layer Layer to remove
     */
    removeLayer(layer) {
        this.removeLayers([layer]);
    }
    /**
     * Remove many layers
     * @param layers Layers to remove
     */
    removeLayers(layers) {
        const newLayers = this.layers$.value.slice(0);
        const layersToRemove = [];
        layers.forEach((layer) => {
            const index = newLayers.indexOf(layer);
            if (index >= 0) {
                layersToRemove.push(layer);
                newLayers.splice(index, 1);
                this.handleLinkedLayersDeletion(layer, layersToRemove);
                layersToRemove.map(linkedLayer => {
                    layersToRemove.push(linkedLayer);
                    const linkedIndex = newLayers.indexOf(linkedLayer);
                    if (linkedIndex >= 0) {
                        newLayers.splice(linkedIndex, 1);
                    }
                });
            }
        });
        layersToRemove.forEach((layer) => this.doRemoveLayer(layer));
        this.setLayers(newLayers);
    }
    /**
     * Build a list of linked layers to delete
     * @param srcLayer Layer that has triggered the deletion
     * @param layersToRemove list to append the layer to delete into
     */
    handleLinkedLayersDeletion(srcLayer, layersToRemove) {
        const linkedLayers = srcLayer.options.linkedLayers;
        if (!linkedLayers) {
            return;
        }
        const currentLinkedId = linkedLayers.linkId;
        const currentLinks = linkedLayers.links;
        const isParentLayer = currentLinks ? true : false;
        if (isParentLayer) {
            // search for child layers
            currentLinks.map(link => {
                if (!link.syncedDelete) {
                    return;
                }
                link.linkedIds.map(linkedId => {
                    const layerToApply = this.layers.find(layer => { var _a; return ((_a = layer.options.linkedLayers) === null || _a === void 0 ? void 0 : _a.linkId) === linkedId; });
                    if (layerToApply) {
                        layersToRemove.push(layerToApply);
                    }
                });
            });
        }
        else {
            // search for parent layer
            this.layers.map(layer => {
                var _a;
                if ((_a = layer.options.linkedLayers) === null || _a === void 0 ? void 0 : _a.links) {
                    layer.options.linkedLayers.links.map(l => {
                        if (l.syncedDelete && l.bidirectionnal !== false &&
                            l.linkedIds.indexOf(currentLinkedId) !== -1) {
                            layersToRemove.push(layer);
                            this.handleLinkedLayersDeletion(layer, layersToRemove);
                        }
                    });
                }
            });
        }
    }
    /**
     * Remove all layers
     */
    removeAllLayers() {
        this.layers.forEach((layer) => this.doRemoveLayer(layer));
        this.layers$.next([]);
    }
    raiseLayer(layer) {
        const index = this.getLayerIndex(layer);
        if (index > 1) {
            this.moveLayer(layer, index, index - 1);
        }
    }
    raiseLayers(layers) {
        for (const layer of layers) {
            this.raiseLayer(layer);
        }
    }
    lowerLayer(layer) {
        const index = this.getLayerIndex(layer);
        if (index < this.layers.length - 1) {
            this.moveLayer(layer, index, index + 1);
        }
    }
    lowerLayers(layers) {
        const reverseLayers = layers.reverse();
        for (const layer of reverseLayers) {
            this.lowerLayer(layer);
        }
    }
    moveLayer(layer, from, to) {
        const layerTo = this.layers[to];
        const zIndexTo = layerTo.zIndex;
        const zIndexFrom = layer.zIndex;
        if (layerTo.baseLayer || layer.baseLayer) {
            return;
        }
        layer.zIndex = zIndexTo;
        layerTo.zIndex = zIndexFrom;
        this.layers[to] = layer;
        this.layers[from] = layerTo;
        this.layers$.next(this.layers.slice(0));
    }
    /**
     * Add a layer to the OL map and start watching. If the layer is already
     * added to this map, make it visible but don't add it one again.
     * @param layer Layer
     * @returns The layer added, if any
     */
    doAddLayer(layer, offsetZIndex) {
        if (layer.baseLayer && layer.visible) {
            this.changeBaseLayer(layer);
        }
        const existingLayer = this.getLayerById(layer.id);
        if (existingLayer !== undefined) {
            existingLayer.visible = true;
            return;
        }
        if (!layer.baseLayer && layer.zIndex) {
            layer.zIndex += 10;
        }
        if (layer.zIndex === undefined || layer.zIndex === 0) {
            const maxZIndex = Math.max(layer.baseLayer ? 0 : 10, ...this.layers
                .filter((l) => l.baseLayer === layer.baseLayer && l.zIndex < 200 // zIndex > 200 = system layer
            )
                .map((l) => l.zIndex));
            layer.zIndex = maxZIndex + 1 + offsetZIndex;
        }
        if (layer.baseLayer && layer.zIndex > 9) {
            layer.zIndex = 10; // baselayer must have zIndex < 10
        }
        layer.setMap(this);
        this.layerWatcher.watchLayer(layer);
        this.ol.addLayer(layer.ol);
        return layer;
    }
    /**
     * Remove a layer from the OL map and stop watching
     * @param layer Layer
     */
    doRemoveLayer(layer) {
        this.layerWatcher.unwatchLayer(layer);
        this.ol.removeLayer(layer.ol);
        layer.setMap(undefined);
    }
    /**
     * Update the layers observable
     * @param layers Layers
     */
    setLayers(layers) {
        this.layers$.next(this.sortLayersByZIndex(layers).slice(0));
    }
    /**
     * Sort layers by descending zIndex
     * @param layers Array of layers
     * @returns The original array, sorted by zIndex
     */
    sortLayersByZIndex(layers) {
        // Sort by descending zIndex
        return layers.sort((layer1, layer2) => layer2.zIndex - layer1.zIndex);
    }
    /**
     * Get layer index in the map's inenr array of layers
     * @param layer Layer
     * @returns The layer index
     */
    getLayerIndex(layer) {
        return this.layers.findIndex((_layer) => _layer === layer);
    }
    // TODO: Create a GeolocationController with everything below
    geolocate(track = false) {
        let first = true;
        if (this.geolocation$$) {
            track = this.geolocation.getTracking();
            this.unsubscribeGeolocate();
        }
        this.startGeolocation();
        this.geolocation$$ = this.geolocation$.subscribe((geolocation) => {
            var _a;
            if (!geolocation) {
                return;
            }
            const accuracy = geolocation.getAccuracy();
            const coordinates = geolocation.getPosition();
            if (accuracy < 10000) {
                const positionGeometry = coordinates ? new olPoint(coordinates) : null;
                const accuracyGeometry = geolocation.getAccuracyGeometry();
                const accuracyExtent = accuracyGeometry.getExtent();
                [this.geolocationPositionFeature, this.geolocationAccuracyFeature].map(feature => {
                    if (feature && this.overlay.dataSource.ol.getFeatureById(feature.getId())) {
                        this.overlay.dataSource.ol.removeFeature(feature);
                    }
                });
                if (this.bufferFeature) {
                    this.buffer.dataSource.ol.removeFeature(this.bufferFeature);
                }
                this.geolocationPositionFeature = new olFeature({ geometry: positionGeometry });
                this.geolocationPositionFeature.setId('geolocationPositionFeature');
                this.geolocationPositionFeature.setStyle(new olstyle.Style({
                    image: new olstyle.Circle({
                        radius: 6,
                        fill: new olstyle.Fill({
                            color: '#3399CC',
                        }),
                        stroke: new olstyle.Stroke({
                            color: '#fff',
                            width: 2,
                        }),
                    }),
                }));
                this.geolocationAccuracyFeature = new olFeature({ geometry: accuracyGeometry });
                this.geolocationAccuracyFeature.setId('geolocationAccuracyFeature');
                if (this.alwaysTracking) {
                    [this.geolocationPositionFeature, this.geolocationAccuracyFeature].map(feature => {
                        this.overlay.addOlFeature(feature, this.positionFollower ? FeatureMotion.Move : FeatureMotion.None);
                    });
                }
                else {
                    [this.geolocationPositionFeature, this.geolocationAccuracyFeature].map(feature => {
                        this.overlay.addOlFeature(feature);
                    });
                }
                if ((_a = this.ol.getView().get('options_')) === null || _a === void 0 ? void 0 : _a.buffer) {
                    const bufferRadius = this.ol.getView().get('options_').buffer.bufferRadius;
                    this.bufferGeom = new olCircle(coordinates, bufferRadius);
                    const bufferStroke = this.ol.getView().get('options_').buffer.bufferStroke;
                    const bufferFill = this.ol.getView().get('options_').buffer.bufferFill;
                    let bufferText;
                    if (this.ol.getView().get('options_').buffer.showBufferRadius) {
                        bufferText = bufferRadius.toString() + 'm';
                    }
                    else {
                        bufferText = '';
                    }
                    this.bufferFeature = new olFeature(this.bufferGeom);
                    this.bufferFeature.setId('bufferFeature');
                    this.bufferFeature.set('bufferStroke', bufferStroke);
                    this.bufferFeature.set('bufferFill', bufferFill);
                    this.bufferFeature.set('bufferText', bufferText);
                    this.buffer.addOlFeature(this.bufferFeature, FeatureMotion.None);
                }
                if (first) {
                    this.viewController.zoomToExtent(accuracyExtent);
                    this.positionFollower = !this.positionFollower;
                }
            }
            else if (first) {
                const view = this.ol.getView();
                view.setCenter(coordinates);
                view.setZoom(14);
            }
            if (track !== true && this.alwaysTracking !== true) {
                this.unsubscribeGeolocate();
            }
            first = false;
        });
    }
    unsubscribeGeolocate() {
        this.stopGeolocation();
        if (this.geolocation$$) {
            this.geolocation$$.unsubscribe();
            this.geolocation$$ = undefined;
        }
    }
    startGeolocation() {
        if (!this.geolocation) {
            this.geolocation = new olGeolocation({
                trackingOptions: {
                    enableHighAccuracy: true
                },
                projection: this.projection,
                tracking: true
            });
            this.geolocation.on('change', (evt) => {
                this.geolocation$.next(this.geolocation);
            });
        }
        else {
            this.geolocation.setTracking(true);
        }
    }
    stopGeolocation() {
        if (this.geolocation) {
            this.geolocation.setTracking(false);
        }
    }
    onOfflineToggle(offline) {
        this.offlineButtonToggle$.next(offline);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWFwL3NoYXJlZC9tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sUUFBUSxDQUFDO0FBQzNCLE9BQU8sTUFBTSxNQUFNLFNBQVMsQ0FBQztBQUM3QixPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFFbkMsT0FBTyxhQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxvQkFBb0IsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLGtCQUFrQixNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBQ2xDLE9BQU8sS0FBSyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sT0FBTyxNQUFNLGVBQWUsQ0FBQztBQUVwQyxPQUFPLEtBQUssYUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsZUFBZSxFQUF5QixNQUFNLE1BQU0sQ0FBQztBQUs5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBU3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVuRSw4RUFBOEU7QUFDOUUsb0NBQW9DO0FBQ3BDLE1BQU0sT0FBTyxNQUFNO0lBd0NqQixZQUFZLE9BQW9CO1FBdEN6Qix5QkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMs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TTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUFnQjtRQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IG9sVmlldyBmcm9tICdvbC9WaWV3JztcbmltcG9ydCBvbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnknO1xuaW1wb3J0IG9sR2VvbG9jYXRpb24gZnJvbSAnb2wvR2VvbG9jYXRpb24nO1xuaW1wb3J0IG9sQ29udHJvbEF0dHJpYnV0aW9uIGZyb20gJ29sL2NvbnRyb2wvQXR0cmlidXRpb24nO1xuaW1wb3J0IG9sQ29udHJvbFNjYWxlTGluZSBmcm9tICdvbC9jb250cm9sL1NjYWxlTGluZSc7XG5pbXBvcnQgKiBhcyBvbHByb2ogZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgKiBhcyBvbHByb2o0IGZyb20gJ29sL3Byb2ovcHJvajQnO1xuaW1wb3J0IG9sUG9pbnQgZnJvbSAnb2wvZ2VvbS9Qb2ludCc7XG5pbXBvcnQgT2xQcm9qZWN0aW9uIGZyb20gJ29sL3Byb2ovUHJvamVjdGlvbic7XG5pbXBvcnQgKiBhcyBvbGludGVyYWN0aW9uIGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCBvbENpcmNsZSBmcm9tICdvbC9nZW9tL0NpcmNsZSc7XG5pbXBvcnQgKiBhcyBvbHN0eWxlIGZyb20gJ29sL3N0eWxlJztcblxuaW1wb3J0IHByb2o0IGZyb20gJ3Byb2o0JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFN1YmplY3RTdGF0dXMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycyc7XG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vLi4vb3ZlcmxheS9zaGFyZWQvb3ZlcmxheSc7XG5cbmltcG9ydCB7IExheWVyV2F0Y2hlciB9IGZyb20gJy4uL3V0aWxzL2xheWVyLXdhdGNoZXInO1xuaW1wb3J0IHtcbiAgTWFwVmlld09wdGlvbnMsXG4gIE1hcE9wdGlvbnMsXG4gIE1hcEF0dHJpYnV0aW9uT3B0aW9ucyxcbiAgTWFwU2NhbGVMaW5lT3B0aW9ucyxcbiAgTWFwRXh0ZW50LFxuICBNYXBDb250cm9sc09wdGlvbnNcbn0gZnJvbSAnLi9tYXAuaW50ZXJmYWNlJztcbmltcG9ydCB7IE1hcFZpZXdDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy92aWV3JztcbmltcG9ydCB7IEZlYXR1cmVEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvZmVhdHVyZS1kYXRhc291cmNlJztcbmltcG9ydCB7IEZlYXR1cmVNb3Rpb24gfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NoYXJlZC9mZWF0dXJlLmVudW1zJztcblxuLy8gVE9ETzogVGhpcyBjbGFzcyBpcyBtZXNzeS4gQ2xlYXJseSBkZWZpbmUgaXQncyBzY29wZSBhbmQgdGhlIG1hcCBicm93c2VyJ3MuXG4vLyBNb3ZlIHNvbWUgc3R1ZmYgaW50byBjb250cm9sbGVycy5cbmV4cG9ydCBjbGFzcyBJZ29NYXAge1xuICBwdWJsaWMgb2w6IG9sTWFwO1xuICBwdWJsaWMgb2ZmbGluZUJ1dHRvblRvZ2dsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHVibGljIGxheWVycyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExheWVyW10+KFtdKTtcbiAgcHVibGljIHN0YXR1cyQ6IFN1YmplY3Q8U3ViamVjdFN0YXR1cz47XG4gIHB1YmxpYyBhbHdheXNUcmFja2luZzogYm9vbGVhbjtcbiAgcHVibGljIHBvc2l0aW9uRm9sbG93ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgZ2VvbG9jYXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxvbEdlb2xvY2F0aW9uPih1bmRlZmluZWQpO1xuICBwdWJsaWMgZ2VvbG9jYXRpb25Qb3NpdGlvbkZlYXR1cmU6IG9sRmVhdHVyZTxPbEdlb21ldHJ5PjtcbiAgcHVibGljIGdlb2xvY2F0aW9uQWNjdXJhY3lGZWF0dXJlOiBvbEZlYXR1cmU8T2xHZW9tZXRyeT47XG4gIHB1YmxpYyBidWZmZXJHZW9tOiBvbENpcmNsZTtcbiAgcHVibGljIGJ1ZmZlckZlYXR1cmU6IG9sRmVhdHVyZTxPbEdlb21ldHJ5PjtcbiAgcHVibGljIGJ1ZmZlcjogT3ZlcmxheTtcbiAgcHVibGljIG92ZXJsYXk6IE92ZXJsYXk7XG4gIHB1YmxpYyBxdWVyeVJlc3VsdHNPdmVybGF5OiBPdmVybGF5O1xuICBwdWJsaWMgc2VhcmNoUmVzdWx0c092ZXJsYXk6IE92ZXJsYXk7XG4gIHB1YmxpYyB2aWV3Q29udHJvbGxlcjogTWFwVmlld0NvbnRyb2xsZXI7XG4gIHB1YmxpYyBzd2lwZUVuYWJsZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHB1YmxpYyBtYXBDZW50ZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHB1YmxpYyBzZWxlY3RlZEZlYXR1cmVzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGF5ZXJbXT4obnVsbCk7XG5cbiAgcHVibGljIGJ1ZmZlckRhdGFTb3VyY2U6IEZlYXR1cmVEYXRhU291cmNlO1xuXG4gIHByaXZhdGUgbGF5ZXJXYXRjaGVyOiBMYXllcldhdGNoZXI7XG4gIHByaXZhdGUgZ2VvbG9jYXRpb246IG9sR2VvbG9jYXRpb247XG4gIHByaXZhdGUgZ2VvbG9jYXRpb24kJDogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgb3B0aW9uczogTWFwT3B0aW9ucztcbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogUGFydGlhbDxNYXBPcHRpb25zPiA9IHtcbiAgICBjb250cm9sczogeyBhdHRyaWJ1dGlvbjogZmFsc2UgfVxuICB9O1xuXG4gIGdldCBsYXllcnMoKTogTGF5ZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzJC52YWx1ZTtcbiAgfVxuXG4gIGdldCBwcm9qZWN0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmlld0NvbnRyb2xsZXIuZ2V0T2xQcm9qZWN0aW9uKCkuZ2V0Q29kZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IE1hcE9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICB0aGlzLmxheWVyV2F0Y2hlciA9IG5ldyBMYXllcldhdGNoZXIoKTtcbiAgICB0aGlzLnN0YXR1cyQgPSB0aGlzLmxheWVyV2F0Y2hlci5zdGF0dXMkO1xuICAgIG9scHJvajQucmVnaXN0ZXIocHJvajQpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBjb250cm9scyA9IFtdO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udHJvbHMpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29udHJvbHMuYXR0cmlidXRpb24pIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRpb25PcHQgPSAodGhpcy5vcHRpb25zLmNvbnRyb2xzLmF0dHJpYnV0aW9uID09PSB0cnVlXG4gICAgICAgICAgPyB7fVxuICAgICAgICAgIDogdGhpcy5vcHRpb25zLmNvbnRyb2xzLmF0dHJpYnV0aW9uKSBhcyBNYXBBdHRyaWJ1dGlvbk9wdGlvbnM7XG4gICAgICAgIGNvbnRyb2xzLnB1c2gobmV3IG9sQ29udHJvbEF0dHJpYnV0aW9uKGF0dHJpYnV0aW9uT3B0KSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRyb2xzLnNjYWxlTGluZSkge1xuICAgICAgICBjb25zdCBzY2FsZUxpbmVPcHQgPSAodGhpcy5vcHRpb25zLmNvbnRyb2xzLnNjYWxlTGluZSA9PT0gdHJ1ZVxuICAgICAgICAgID8ge31cbiAgICAgICAgICA6IHRoaXMub3B0aW9ucy5jb250cm9scy5zY2FsZUxpbmUpIGFzIE1hcFNjYWxlTGluZU9wdGlvbnM7XG4gICAgICAgIGNvbnRyb2xzLnB1c2gobmV3IG9sQ29udHJvbFNjYWxlTGluZShzY2FsZUxpbmVPcHQpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGludGVyYWN0aW9ucyA9IHt9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaW50ZXJhY3Rpb25zID09PSBmYWxzZSkge1xuICAgICAgaW50ZXJhY3Rpb25zID0ge1xuICAgICAgICBhbHRTaGlmdERyYWdSb3RhdGU6IGZhbHNlLFxuICAgICAgICBkb3VibGVDbGlja1pvb206IGZhbHNlLFxuICAgICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICAgIG1vdXNlV2hlZWxab29tOiBmYWxzZSxcbiAgICAgICAgc2hpZnREcmFnWm9vbTogZmFsc2UsXG4gICAgICAgIGRyYWdQYW46IGZhbHNlLFxuICAgICAgICBwaW5jaFJvdGF0ZTogZmFsc2UsXG4gICAgICAgIHBpbmNoWm9vbTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5vbCA9IG5ldyBvbE1hcCh7XG4gICAgICBpbnRlcmFjdGlvbnM6IG9saW50ZXJhY3Rpb24uZGVmYXVsdHMoaW50ZXJhY3Rpb25zKSxcbiAgICAgIGNvbnRyb2xzXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFZpZXcodGhpcy5vcHRpb25zLnZpZXcgfHwge30pO1xuICAgIHRoaXMudmlld0NvbnRyb2xsZXIgPSBuZXcgTWFwVmlld0NvbnRyb2xsZXIoe1xuICAgICAgc3RhdGVIaXN0b3J5OiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy52aWV3Q29udHJvbGxlci5zZXRPbE1hcCh0aGlzLm9sKTtcbiAgICB0aGlzLm92ZXJsYXkgPSBuZXcgT3ZlcmxheSh0aGlzKTtcbiAgICB0aGlzLnF1ZXJ5UmVzdWx0c092ZXJsYXkgPSBuZXcgT3ZlcmxheSh0aGlzKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHNPdmVybGF5ID0gbmV3IE92ZXJsYXkodGhpcyk7XG4gICAgdGhpcy5idWZmZXIgPSBuZXcgT3ZlcmxheSh0aGlzKTtcbiAgfVxuXG4gIHNldFRhcmdldChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5vbC5zZXRUYXJnZXQoaWQpO1xuICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxheWVyV2F0Y2hlci5zdWJzY3JpYmUoKCkgPT4geyB9LCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXllcldhdGNoZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWaWV3KG9wdGlvbnM6IE1hcFZpZXdPcHRpb25zKSB7XG4gICAgY29uc3QgY3VycmVudFZpZXcgPSB0aGlzLm9sLmdldFZpZXcoKTtcbiAgICBjb25zdCB2aWV3T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHpvb206IGN1cnJlbnRWaWV3LmdldFpvb20oKVxuICAgICAgfSxcbiAgICAgIGN1cnJlbnRWaWV3LmdldFByb3BlcnRpZXMoKVxuICAgICk7XG5cbiAgICB0aGlzLnNldFZpZXcoT2JqZWN0LmFzc2lnbih2aWV3T3B0aW9ucywgb3B0aW9ucykpO1xuICAgIGlmIChvcHRpb25zLm1heFpvb21PbkV4dGVudCkge1xuICAgICAgdGhpcy52aWV3Q29udHJvbGxlci5tYXhab29tT25FeHRlbnQgPSBvcHRpb25zLm1heFpvb21PbkV4dGVudDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXAgdmlld1xuICAgKiBAcGFyYW0gb3B0aW9ucyBNYXAgdmlldyBvcHRpb25zXG4gICAqL1xuICBzZXRWaWV3KG9wdGlvbnM6IE1hcFZpZXdPcHRpb25zKSB7XG4gICAgaWYgKHRoaXMudmlld0NvbnRyb2xsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy52aWV3Q29udHJvbGxlci5jbGVhclN0YXRlSGlzdG9yeSgpO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgY29uc3RyYWluUmVzb2x1dGlvbjogdHJ1ZSB9LCBvcHRpb25zKTtcbiAgICBjb25zdCB2aWV3ID0gbmV3IG9sVmlldyhvcHRpb25zKTtcbiAgICB0aGlzLm9sLnNldFZpZXcodmlldyk7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlR2VvbG9jYXRlKCk7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLm1heExheWVyWm9vbUV4dGVudCkge1xuICAgICAgICB0aGlzLnZpZXdDb250cm9sbGVyLm1heExheWVyWm9vbUV4dGVudCA9IG9wdGlvbnMubWF4TGF5ZXJab29tRXh0ZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jZW50ZXIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IHZpZXcuZ2V0UHJvamVjdGlvbigpLmdldENvZGUoKTtcbiAgICAgICAgY29uc3QgY2VudGVyID0gb2xwcm9qLmZyb21Mb25MYXQob3B0aW9ucy5jZW50ZXIsIHByb2plY3Rpb24pO1xuICAgICAgICB2aWV3LnNldENlbnRlcihjZW50ZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5nZW9sb2NhdGUpIHtcbiAgICAgICAgdGhpcy5nZW9sb2NhdGUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmFsd2F5c1RyYWNraW5nKSB7XG4gICAgICAgIHRoaXMuYWx3YXlzVHJhY2tpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNvbnRyb2xzKHZhbHVlOiBNYXBDb250cm9sc09wdGlvbnMpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2xzID0gW107XG4gICAgaWYgKHZhbHVlLmF0dHJpYnV0aW9uKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGlvbk9wdCA9ICh2YWx1ZS5hdHRyaWJ1dGlvbiA9PT0gdHJ1ZVxuICAgICAgICA/IHt9XG4gICAgICAgIDogdmFsdWUuYXR0cmlidXRpb24pIGFzIE1hcEF0dHJpYnV0aW9uT3B0aW9ucztcbiAgICAgIGNvbnRyb2xzLnB1c2gobmV3IG9sQ29udHJvbEF0dHJpYnV0aW9uKGF0dHJpYnV0aW9uT3B0KSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5zY2FsZUxpbmUpIHtcbiAgICAgIGNvbnN0IHNjYWxlTGluZU9wdCA9ICh2YWx1ZS5zY2FsZUxpbmUgPT09IHRydWVcbiAgICAgICAgPyB7fVxuICAgICAgICA6IHZhbHVlLnNjYWxlTGluZSkgYXMgTWFwU2NhbGVMaW5lT3B0aW9ucztcbiAgICAgIGNvbnRyb2xzLnB1c2gobmV3IG9sQ29udHJvbFNjYWxlTGluZShzY2FsZUxpbmVPcHQpKTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50Q29udHJvbHMgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLm9sLmdldENvbnRyb2xzKCkuZ2V0QXJyYXkoKSk7XG4gICAgY3VycmVudENvbnRyb2xzLmZvckVhY2goY29udHJvbCA9PiB7XG4gICAgICB0aGlzLm9sLnJlbW92ZUNvbnRyb2woY29udHJvbCk7XG4gICAgfSk7XG4gICAgY29udHJvbHMuZm9yRWFjaChjb250cm9sID0+IHtcbiAgICAgIHRoaXMub2wuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkXG4gICAqIFRPRE86IE1vdmUgdG8gVmlld0NvbnRyb2xsZXIgYW5kIHVwZGF0ZSBldmVyeSBwbGFjZSBpdCdzIHVzZWRcbiAgICovXG4gIGdldENlbnRlcihwcm9qZWN0aW9uPzogc3RyaW5nIHwgT2xQcm9qZWN0aW9uKTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgcmV0dXJuIHRoaXMudmlld0NvbnRyb2xsZXIuZ2V0Q2VudGVyKHByb2plY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlcHJlY2F0ZWRcbiAgICogVE9ETzogTW92ZSB0byBWaWV3Q29udHJvbGxlciBhbmQgdXBkYXRlIGV2ZXJ5IHBsYWNlIGl0J3MgdXNlZFxuICAgKi9cbiAgZ2V0RXh0ZW50KHByb2plY3Rpb24/OiBzdHJpbmcgfCBPbFByb2plY3Rpb24pOiBNYXBFeHRlbnQge1xuICAgIHJldHVybiB0aGlzLnZpZXdDb250cm9sbGVyLmdldEV4dGVudChwcm9qZWN0aW9uKTtcbiAgfVxuXG4gIC8vIFRPRE86IE1vdmUgdG8gVmlld0NvbnRyb2xsZXIgYW5kIHVwZGF0ZSBldmVyeSBwbGFjZSBpdCdzIHVzZWRcbiAgZ2V0Wm9vbSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZpZXdDb250cm9sbGVyLmdldFpvb20oKTtcbiAgfVxuXG4gIGNoYW5nZUJhc2VMYXllcihiYXNlTGF5ZXI6IExheWVyKSB7XG4gICAgaWYgKCFiYXNlTGF5ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGJsIG9mIHRoaXMuZ2V0QmFzZUxheWVycygpKSB7XG4gICAgICBibC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYmFzZUxheWVyLnZpc2libGUgPSB0cnVlO1xuXG4gICAgdGhpcy52aWV3Q29udHJvbGxlci5vbFZpZXcuc2V0TWluWm9vbShcbiAgICAgIGJhc2VMYXllci5kYXRhU291cmNlLm9wdGlvbnMubWluWm9vbSB8fCAodGhpcy5vcHRpb25zLnZpZXcgfHwge30pLm1pblpvb21cbiAgICApO1xuICAgIHRoaXMudmlld0NvbnRyb2xsZXIub2xWaWV3LnNldE1heFpvb20oXG4gICAgICBiYXNlTGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLm1heFpvb20gfHwgKHRoaXMub3B0aW9ucy52aWV3IHx8IHt9KS5tYXhab29tXG4gICAgKTtcbiAgfVxuXG4gIGdldEJhc2VMYXllcnMoKTogTGF5ZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzLmZpbHRlcigobGF5ZXI6IExheWVyKSA9PiBsYXllci5iYXNlTGF5ZXIgPT09IHRydWUpO1xuICB9XG5cbiAgZ2V0TGF5ZXJCeUlkKGlkOiBzdHJpbmcpOiBMYXllciB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzLmZpbmQoKGxheWVyOiBMYXllcikgPT4gbGF5ZXIuaWQgJiYgbGF5ZXIuaWQgPT09IGlkKTtcbiAgfVxuXG4gIGdldExheWVyQnlBbGlhcyhhbGlhczogc3RyaW5nKTogTGF5ZXIge1xuICAgIHJldHVybiB0aGlzLmxheWVycy5maW5kKFxuICAgICAgKGxheWVyOiBMYXllcikgPT4gbGF5ZXIuYWxpYXMgJiYgbGF5ZXIuYWxpYXMgPT09IGFsaWFzXG4gICAgKTtcbiAgfVxuXG4gIGdldExheWVyQnlPbFVJZChvbFVJZDogc3RyaW5nKTogTGF5ZXIge1xuICAgIHJldHVybiB0aGlzLmxheWVycy5maW5kKFxuICAgICAgKGxheWVyOiBMYXllcikgPT4gKGxheWVyLm9sIGFzIGFueSkub2xfdWlkICYmIChsYXllci5vbCBhcyBhbnkpLm9sX3VpZCA9PT0gb2xVSWRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNpbmdsZSBsYXllclxuICAgKiBAcGFyYW0gbGF5ZXIgTGF5ZXIgdG8gYWRkXG4gICAqIEBwYXJhbSBwdXNoIERFUFJFQ0FURURcbiAgICovXG4gIGFkZExheWVyKGxheWVyOiBMYXllciwgcHVzaCA9IHRydWUpIHtcbiAgICB0aGlzLmFkZExheWVycyhbbGF5ZXJdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbWFueSBsYXllcnNcbiAgICogQHBhcmFtIGxheWVycyBMYXllcnMgdG8gYWRkXG4gICAqIEBwYXJhbSBwdXNoIERFUFJFQ0FURURcbiAgICovXG4gIGFkZExheWVycyhsYXllcnM6IExheWVyW10sIHB1c2ggPSB0cnVlKSB7XG4gICAgbGV0IG9mZnNldFpJbmRleCA9IDA7XG4gICAgbGV0IG9mZnNldEJhc2VMYXllclpJbmRleCA9IDA7XG4gICAgY29uc3QgYWRkZWRMYXllcnMgPSBsYXllcnNcbiAgICAgIC5tYXAoKGxheWVyOiBMYXllcikgPT4ge1xuICAgICAgICBpZiAoIWxheWVyKSB7IHJldHVybjsgfVxuICAgICAgICBjb25zdCBvZmZzZXQgPSBsYXllci56SW5kZXhcbiAgICAgICAgICA/IDBcbiAgICAgICAgICA6IGxheWVyLmJhc2VMYXllclxuICAgICAgICAgICAgPyBvZmZzZXRCYXNlTGF5ZXJaSW5kZXgrK1xuICAgICAgICAgICAgOiBvZmZzZXRaSW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9BZGRMYXllcihsYXllciwgb2Zmc2V0KTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChsYXllcjogTGF5ZXIgfCB1bmRlZmluZWQpID0+IGxheWVyICE9PSB1bmRlZmluZWQpO1xuICAgIHRoaXMuc2V0TGF5ZXJzKFtdLmNvbmNhdCh0aGlzLmxheWVycywgYWRkZWRMYXllcnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzaW5nbGUgbGF5ZXJcbiAgICogQHBhcmFtIGxheWVyIExheWVyIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlTGF5ZXIobGF5ZXI6IExheWVyKSB7XG4gICAgdGhpcy5yZW1vdmVMYXllcnMoW2xheWVyXSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIG1hbnkgbGF5ZXJzXG4gICAqIEBwYXJhbSBsYXllcnMgTGF5ZXJzIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlTGF5ZXJzKGxheWVyczogTGF5ZXJbXSkge1xuICAgIGNvbnN0IG5ld0xheWVycyA9IHRoaXMubGF5ZXJzJC52YWx1ZS5zbGljZSgwKTtcbiAgICBjb25zdCBsYXllcnNUb1JlbW92ZSA9IFtdO1xuICAgIGxheWVycy5mb3JFYWNoKChsYXllcjogTGF5ZXIpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbmV3TGF5ZXJzLmluZGV4T2YobGF5ZXIpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgbGF5ZXJzVG9SZW1vdmUucHVzaChsYXllcik7XG4gICAgICAgIG5ld0xheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmhhbmRsZUxpbmtlZExheWVyc0RlbGV0aW9uKGxheWVyLCBsYXllcnNUb1JlbW92ZSk7XG4gICAgICAgIGxheWVyc1RvUmVtb3ZlLm1hcChsaW5rZWRMYXllciA9PiB7XG4gICAgICAgICAgbGF5ZXJzVG9SZW1vdmUucHVzaChsaW5rZWRMYXllcik7XG4gICAgICAgICAgY29uc3QgbGlua2VkSW5kZXggPSBuZXdMYXllcnMuaW5kZXhPZihsaW5rZWRMYXllcik7XG4gICAgICAgICAgaWYgKGxpbmtlZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgIG5ld0xheWVycy5zcGxpY2UobGlua2VkSW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsYXllcnNUb1JlbW92ZS5mb3JFYWNoKChsYXllcjogTGF5ZXIpID0+IHRoaXMuZG9SZW1vdmVMYXllcihsYXllcikpO1xuICAgIHRoaXMuc2V0TGF5ZXJzKG5ld0xheWVycyk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgYSBsaXN0IG9mIGxpbmtlZCBsYXllcnMgdG8gZGVsZXRlXG4gICAqIEBwYXJhbSBzcmNMYXllciBMYXllciB0aGF0IGhhcyB0cmlnZ2VyZWQgdGhlIGRlbGV0aW9uXG4gICAqIEBwYXJhbSBsYXllcnNUb1JlbW92ZSBsaXN0IHRvIGFwcGVuZCB0aGUgbGF5ZXIgdG8gZGVsZXRlIGludG9cbiAgICovXG4gIGhhbmRsZUxpbmtlZExheWVyc0RlbGV0aW9uKHNyY0xheWVyOiBMYXllciwgbGF5ZXJzVG9SZW1vdmU6IExheWVyW10pIHtcbiAgICBjb25zdCBsaW5rZWRMYXllcnMgPSBzcmNMYXllci5vcHRpb25zLmxpbmtlZExheWVycztcbiAgICBpZiAoIWxpbmtlZExheWVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50TGlua2VkSWQgPSBsaW5rZWRMYXllcnMubGlua0lkO1xuICAgIGNvbnN0IGN1cnJlbnRMaW5rcyA9IGxpbmtlZExheWVycy5saW5rcztcbiAgICBjb25zdCBpc1BhcmVudExheWVyID0gY3VycmVudExpbmtzID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGlmIChpc1BhcmVudExheWVyKSB7XG4gICAgICAvLyBzZWFyY2ggZm9yIGNoaWxkIGxheWVyc1xuICAgICAgY3VycmVudExpbmtzLm1hcChsaW5rID0+IHtcbiAgICAgICAgaWYgKCFsaW5rLnN5bmNlZERlbGV0ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsaW5rLmxpbmtlZElkcy5tYXAobGlua2VkSWQgPT4ge1xuICAgICAgICAgIGNvbnN0IGxheWVyVG9BcHBseSA9IHRoaXMubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnM/LmxpbmtJZCA9PT0gbGlua2VkSWQpO1xuICAgICAgICAgIGlmIChsYXllclRvQXBwbHkpIHtcbiAgICAgICAgICAgIGxheWVyc1RvUmVtb3ZlLnB1c2gobGF5ZXJUb0FwcGx5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNlYXJjaCBmb3IgcGFyZW50IGxheWVyXG4gICAgICB0aGlzLmxheWVycy5tYXAobGF5ZXIgPT4ge1xuICAgICAgICBpZiAobGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnM/LmxpbmtzKSB7XG4gICAgICAgICAgbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua3MubWFwKGwgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBsLnN5bmNlZERlbGV0ZSAmJiBsLmJpZGlyZWN0aW9ubmFsICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgICBsLmxpbmtlZElkcy5pbmRleE9mKGN1cnJlbnRMaW5rZWRJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGxheWVyc1RvUmVtb3ZlLnB1c2gobGF5ZXIpO1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxpbmtlZExheWVyc0RlbGV0aW9uKGxheWVyLCBsYXllcnNUb1JlbW92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGxheWVyc1xuICAgKi9cbiAgcmVtb3ZlQWxsTGF5ZXJzKCkge1xuICAgIHRoaXMubGF5ZXJzLmZvckVhY2goKGxheWVyOiBMYXllcikgPT4gdGhpcy5kb1JlbW92ZUxheWVyKGxheWVyKSk7XG4gICAgdGhpcy5sYXllcnMkLm5leHQoW10pO1xuICB9XG5cbiAgcmFpc2VMYXllcihsYXllcjogTGF5ZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGF5ZXJJbmRleChsYXllcik7XG4gICAgaWYgKGluZGV4ID4gMSkge1xuICAgICAgdGhpcy5tb3ZlTGF5ZXIobGF5ZXIsIGluZGV4LCBpbmRleCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJhaXNlTGF5ZXJzKGxheWVyczogTGF5ZXJbXSkge1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XG4gICAgICB0aGlzLnJhaXNlTGF5ZXIobGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIGxvd2VyTGF5ZXIobGF5ZXI6IExheWVyKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldExheWVySW5kZXgobGF5ZXIpO1xuICAgIGlmIChpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMubW92ZUxheWVyKGxheWVyLCBpbmRleCwgaW5kZXggKyAxKTtcbiAgICB9XG4gIH1cblxuICBsb3dlckxheWVycyhsYXllcnM6IExheWVyW10pIHtcbiAgICBjb25zdCByZXZlcnNlTGF5ZXJzID0gbGF5ZXJzLnJldmVyc2UoKTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHJldmVyc2VMYXllcnMpIHtcbiAgICAgIHRoaXMubG93ZXJMYXllcihsYXllcik7XG4gICAgfVxuICB9XG5cbiAgbW92ZUxheWVyKGxheWVyOiBMYXllciwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSB7XG4gICAgY29uc3QgbGF5ZXJUbyA9IHRoaXMubGF5ZXJzW3RvXTtcbiAgICBjb25zdCB6SW5kZXhUbyA9IGxheWVyVG8uekluZGV4O1xuICAgIGNvbnN0IHpJbmRleEZyb20gPSBsYXllci56SW5kZXg7XG5cbiAgICBpZiAobGF5ZXJUby5iYXNlTGF5ZXIgfHwgbGF5ZXIuYmFzZUxheWVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGF5ZXIuekluZGV4ID0gekluZGV4VG87XG4gICAgbGF5ZXJUby56SW5kZXggPSB6SW5kZXhGcm9tO1xuXG4gICAgdGhpcy5sYXllcnNbdG9dID0gbGF5ZXI7XG4gICAgdGhpcy5sYXllcnNbZnJvbV0gPSBsYXllclRvO1xuICAgIHRoaXMubGF5ZXJzJC5uZXh0KHRoaXMubGF5ZXJzLnNsaWNlKDApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsYXllciB0byB0aGUgT0wgbWFwIGFuZCBzdGFydCB3YXRjaGluZy4gSWYgdGhlIGxheWVyIGlzIGFscmVhZHlcbiAgICogYWRkZWQgdG8gdGhpcyBtYXAsIG1ha2UgaXQgdmlzaWJsZSBidXQgZG9uJ3QgYWRkIGl0IG9uZSBhZ2Fpbi5cbiAgICogQHBhcmFtIGxheWVyIExheWVyXG4gICAqIEByZXR1cm5zIFRoZSBsYXllciBhZGRlZCwgaWYgYW55XG4gICAqL1xuICBwcml2YXRlIGRvQWRkTGF5ZXIobGF5ZXI6IExheWVyLCBvZmZzZXRaSW5kZXg6IG51bWJlcikge1xuICAgIGlmIChsYXllci5iYXNlTGF5ZXIgJiYgbGF5ZXIudmlzaWJsZSkge1xuICAgICAgdGhpcy5jaGFuZ2VCYXNlTGF5ZXIobGF5ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGV4aXN0aW5nTGF5ZXIgPSB0aGlzLmdldExheWVyQnlJZChsYXllci5pZCk7XG4gICAgaWYgKGV4aXN0aW5nTGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXhpc3RpbmdMYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWxheWVyLmJhc2VMYXllciAmJiBsYXllci56SW5kZXgpIHtcbiAgICAgIGxheWVyLnpJbmRleCArPSAxMDtcbiAgICB9XG5cbiAgICBpZiAobGF5ZXIuekluZGV4ID09PSB1bmRlZmluZWQgfHwgbGF5ZXIuekluZGV4ID09PSAwKSB7XG4gICAgICBjb25zdCBtYXhaSW5kZXggPSBNYXRoLm1heChcbiAgICAgICAgbGF5ZXIuYmFzZUxheWVyID8gMCA6IDEwLFxuICAgICAgICAuLi50aGlzLmxheWVyc1xuICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAobCkgPT4gbC5iYXNlTGF5ZXIgPT09IGxheWVyLmJhc2VMYXllciAmJiBsLnpJbmRleCA8IDIwMCAvLyB6SW5kZXggPiAyMDAgPSBzeXN0ZW0gbGF5ZXJcbiAgICAgICAgICApXG4gICAgICAgICAgLm1hcCgobCkgPT4gbC56SW5kZXgpXG4gICAgICApO1xuICAgICAgbGF5ZXIuekluZGV4ID0gbWF4WkluZGV4ICsgMSArIG9mZnNldFpJbmRleDtcbiAgICB9XG5cbiAgICBpZiAobGF5ZXIuYmFzZUxheWVyICYmIGxheWVyLnpJbmRleCA+IDkpIHtcbiAgICAgIGxheWVyLnpJbmRleCA9IDEwOyAvLyBiYXNlbGF5ZXIgbXVzdCBoYXZlIHpJbmRleCA8IDEwXG4gICAgfVxuXG4gICAgbGF5ZXIuc2V0TWFwKHRoaXMpO1xuICAgIHRoaXMubGF5ZXJXYXRjaGVyLndhdGNoTGF5ZXIobGF5ZXIpO1xuICAgIHRoaXMub2wuYWRkTGF5ZXIobGF5ZXIub2wpO1xuXG4gICAgcmV0dXJuIGxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGxheWVyIGZyb20gdGhlIE9MIG1hcCBhbmQgc3RvcCB3YXRjaGluZ1xuICAgKiBAcGFyYW0gbGF5ZXIgTGF5ZXJcbiAgICovXG4gIHByaXZhdGUgZG9SZW1vdmVMYXllcihsYXllcjogTGF5ZXIpIHtcbiAgICB0aGlzLmxheWVyV2F0Y2hlci51bndhdGNoTGF5ZXIobGF5ZXIpO1xuICAgIHRoaXMub2wucmVtb3ZlTGF5ZXIobGF5ZXIub2wpO1xuICAgIGxheWVyLnNldE1hcCh1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgbGF5ZXJzIG9ic2VydmFibGVcbiAgICogQHBhcmFtIGxheWVycyBMYXllcnNcbiAgICovXG4gIHByaXZhdGUgc2V0TGF5ZXJzKGxheWVyczogTGF5ZXJbXSkge1xuICAgIHRoaXMubGF5ZXJzJC5uZXh0KHRoaXMuc29ydExheWVyc0J5WkluZGV4KGxheWVycykuc2xpY2UoMCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnQgbGF5ZXJzIGJ5IGRlc2NlbmRpbmcgekluZGV4XG4gICAqIEBwYXJhbSBsYXllcnMgQXJyYXkgb2YgbGF5ZXJzXG4gICAqIEByZXR1cm5zIFRoZSBvcmlnaW5hbCBhcnJheSwgc29ydGVkIGJ5IHpJbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBzb3J0TGF5ZXJzQnlaSW5kZXgobGF5ZXJzOiBMYXllcltdKSB7XG4gICAgLy8gU29ydCBieSBkZXNjZW5kaW5nIHpJbmRleFxuICAgIHJldHVybiBsYXllcnMuc29ydChcbiAgICAgIChsYXllcjE6IExheWVyLCBsYXllcjI6IExheWVyKSA9PiBsYXllcjIuekluZGV4IC0gbGF5ZXIxLnpJbmRleFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxheWVyIGluZGV4IGluIHRoZSBtYXAncyBpbmVuciBhcnJheSBvZiBsYXllcnNcbiAgICogQHBhcmFtIGxheWVyIExheWVyXG4gICAqIEByZXR1cm5zIFRoZSBsYXllciBpbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRMYXllckluZGV4KGxheWVyOiBMYXllcikge1xuICAgIHJldHVybiB0aGlzLmxheWVycy5maW5kSW5kZXgoKF9sYXllcjogTGF5ZXIpID0+IF9sYXllciA9PT0gbGF5ZXIpO1xuICB9XG5cbiAgLy8gVE9ETzogQ3JlYXRlIGEgR2VvbG9jYXRpb25Db250cm9sbGVyIHdpdGggZXZlcnl0aGluZyBiZWxvd1xuICBnZW9sb2NhdGUodHJhY2sgPSBmYWxzZSkge1xuICAgIGxldCBmaXJzdCA9IHRydWU7XG4gICAgaWYgKHRoaXMuZ2VvbG9jYXRpb24kJCkge1xuICAgICAgdHJhY2sgPSB0aGlzLmdlb2xvY2F0aW9uLmdldFRyYWNraW5nKCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlR2VvbG9jYXRlKCk7XG4gICAgfVxuICAgIHRoaXMuc3RhcnRHZW9sb2NhdGlvbigpO1xuXG4gICAgdGhpcy5nZW9sb2NhdGlvbiQkID0gdGhpcy5nZW9sb2NhdGlvbiQuc3Vic2NyaWJlKChnZW9sb2NhdGlvbikgPT4ge1xuICAgICAgaWYgKCFnZW9sb2NhdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhY2N1cmFjeSA9IGdlb2xvY2F0aW9uLmdldEFjY3VyYWN5KCk7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdlb2xvY2F0aW9uLmdldFBvc2l0aW9uKCk7XG4gICAgICBpZiAoYWNjdXJhY3kgPCAxMDAwMCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbkdlb21ldHJ5ID0gY29vcmRpbmF0ZXMgPyBuZXcgb2xQb2ludChjb29yZGluYXRlcykgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IGFjY3VyYWN5R2VvbWV0cnkgPSBnZW9sb2NhdGlvbi5nZXRBY2N1cmFjeUdlb21ldHJ5KCk7XG4gICAgICAgIGNvbnN0IGFjY3VyYWN5RXh0ZW50ID0gYWNjdXJhY3lHZW9tZXRyeS5nZXRFeHRlbnQoKTtcblxuICAgICAgICBbdGhpcy5nZW9sb2NhdGlvblBvc2l0aW9uRmVhdHVyZSwgdGhpcy5nZW9sb2NhdGlvbkFjY3VyYWN5RmVhdHVyZV0ubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgIGlmIChmZWF0dXJlICYmIHRoaXMub3ZlcmxheS5kYXRhU291cmNlLm9sLmdldEZlYXR1cmVCeUlkKGZlYXR1cmUuZ2V0SWQoKSkpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5kYXRhU291cmNlLm9sLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5idWZmZXJGZWF0dXJlKSB7XG4gICAgICAgICAgdGhpcy5idWZmZXIuZGF0YVNvdXJjZS5vbC5yZW1vdmVGZWF0dXJlKHRoaXMuYnVmZmVyRmVhdHVyZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdlb2xvY2F0aW9uUG9zaXRpb25GZWF0dXJlID0gbmV3IG9sRmVhdHVyZSh7IGdlb21ldHJ5OiBwb3NpdGlvbkdlb21ldHJ5IH0pO1xuICAgICAgICB0aGlzLmdlb2xvY2F0aW9uUG9zaXRpb25GZWF0dXJlLnNldElkKCdnZW9sb2NhdGlvblBvc2l0aW9uRmVhdHVyZScpO1xuXG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb25Qb3NpdGlvbkZlYXR1cmUuc2V0U3R5bGUoXG4gICAgICAgICAgbmV3IG9sc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgaW1hZ2U6IG5ldyBvbHN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgICAgIHJhZGl1czogNixcbiAgICAgICAgICAgICAgZmlsbDogbmV3IG9sc3R5bGUuRmlsbCh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMzM5OUNDJyxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cblxuICAgICAgICB0aGlzLmdlb2xvY2F0aW9uQWNjdXJhY3lGZWF0dXJlID0gbmV3IG9sRmVhdHVyZSh7IGdlb21ldHJ5OiBhY2N1cmFjeUdlb21ldHJ5IH0pO1xuICAgICAgICB0aGlzLmdlb2xvY2F0aW9uQWNjdXJhY3lGZWF0dXJlLnNldElkKCdnZW9sb2NhdGlvbkFjY3VyYWN5RmVhdHVyZScpO1xuICAgICAgICBpZiAodGhpcy5hbHdheXNUcmFja2luZykge1xuICAgICAgICAgIFt0aGlzLmdlb2xvY2F0aW9uUG9zaXRpb25GZWF0dXJlLCB0aGlzLmdlb2xvY2F0aW9uQWNjdXJhY3lGZWF0dXJlXS5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuYWRkT2xGZWF0dXJlKFxuICAgICAgICAgICAgICBmZWF0dXJlLFxuICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uRm9sbG93ZXIgPyBGZWF0dXJlTW90aW9uLk1vdmUgOiBGZWF0dXJlTW90aW9uLk5vbmVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBbdGhpcy5nZW9sb2NhdGlvblBvc2l0aW9uRmVhdHVyZSwgdGhpcy5nZW9sb2NhdGlvbkFjY3VyYWN5RmVhdHVyZV0ubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmFkZE9sRmVhdHVyZShcbiAgICAgICAgICAgICAgZmVhdHVyZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9sLmdldFZpZXcoKS5nZXQoJ29wdGlvbnNfJyk/LmJ1ZmZlcikge1xuICAgICAgICAgIGNvbnN0IGJ1ZmZlclJhZGl1cyA9IHRoaXMub2wuZ2V0VmlldygpLmdldCgnb3B0aW9uc18nKS5idWZmZXIuYnVmZmVyUmFkaXVzO1xuICAgICAgICAgIHRoaXMuYnVmZmVyR2VvbSA9IG5ldyBvbENpcmNsZShjb29yZGluYXRlcywgYnVmZmVyUmFkaXVzKTtcbiAgICAgICAgICBjb25zdCBidWZmZXJTdHJva2UgPSB0aGlzLm9sLmdldFZpZXcoKS5nZXQoJ29wdGlvbnNfJykuYnVmZmVyLmJ1ZmZlclN0cm9rZTtcbiAgICAgICAgICBjb25zdCBidWZmZXJGaWxsID0gdGhpcy5vbC5nZXRWaWV3KCkuZ2V0KCdvcHRpb25zXycpLmJ1ZmZlci5idWZmZXJGaWxsO1xuXG4gICAgICAgICAgbGV0IGJ1ZmZlclRleHQ7XG4gICAgICAgICAgaWYgKHRoaXMub2wuZ2V0VmlldygpLmdldCgnb3B0aW9uc18nKS5idWZmZXIuc2hvd0J1ZmZlclJhZGl1cykge1xuICAgICAgICAgICAgYnVmZmVyVGV4dCA9IGJ1ZmZlclJhZGl1cy50b1N0cmluZygpICsgJ20nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXJUZXh0ID0gJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5idWZmZXJGZWF0dXJlID0gbmV3IG9sRmVhdHVyZSh0aGlzLmJ1ZmZlckdlb20pO1xuICAgICAgICAgIHRoaXMuYnVmZmVyRmVhdHVyZS5zZXRJZCgnYnVmZmVyRmVhdHVyZScpO1xuICAgICAgICAgIHRoaXMuYnVmZmVyRmVhdHVyZS5zZXQoJ2J1ZmZlclN0cm9rZScsIGJ1ZmZlclN0cm9rZSk7XG4gICAgICAgICAgdGhpcy5idWZmZXJGZWF0dXJlLnNldCgnYnVmZmVyRmlsbCcsIGJ1ZmZlckZpbGwpO1xuICAgICAgICAgIHRoaXMuYnVmZmVyRmVhdHVyZS5zZXQoJ2J1ZmZlclRleHQnLCBidWZmZXJUZXh0KTtcbiAgICAgICAgICB0aGlzLmJ1ZmZlci5hZGRPbEZlYXR1cmUodGhpcy5idWZmZXJGZWF0dXJlLCBGZWF0dXJlTW90aW9uLk5vbmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgIHRoaXMudmlld0NvbnRyb2xsZXIuem9vbVRvRXh0ZW50KGFjY3VyYWN5RXh0ZW50IGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKTtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uRm9sbG93ZXIgPSAhdGhpcy5wb3NpdGlvbkZvbGxvd2VyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0KSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLm9sLmdldFZpZXcoKTtcbiAgICAgICAgdmlldy5zZXRDZW50ZXIoY29vcmRpbmF0ZXMpO1xuICAgICAgICB2aWV3LnNldFpvb20oMTQpO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrICE9PSB0cnVlICYmIHRoaXMuYWx3YXlzVHJhY2tpbmcgIT09IHRydWUpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUdlb2xvY2F0ZSgpO1xuICAgICAgfVxuICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlR2VvbG9jYXRlKCkge1xuICAgIHRoaXMuc3RvcEdlb2xvY2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZ2VvbG9jYXRpb24kJCkge1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbiQkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmdlb2xvY2F0aW9uJCQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFydEdlb2xvY2F0aW9uKCkge1xuICAgIGlmICghdGhpcy5nZW9sb2NhdGlvbikge1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbiA9IG5ldyBvbEdlb2xvY2F0aW9uKHtcbiAgICAgICAgdHJhY2tpbmdPcHRpb25zOiB7XG4gICAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3Rpb246IHRoaXMucHJvamVjdGlvbixcbiAgICAgICAgdHJhY2tpbmc6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmdlb2xvY2F0aW9uLm9uKCdjaGFuZ2UnLCAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb24kLm5leHQodGhpcy5nZW9sb2NhdGlvbik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbi5zZXRUcmFja2luZyh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0b3BHZW9sb2NhdGlvbigpIHtcbiAgICBpZiAodGhpcy5nZW9sb2NhdGlvbikge1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbi5zZXRUcmFja2luZyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgb25PZmZsaW5lVG9nZ2xlKG9mZmxpbmU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9mZmxpbmVCdXR0b25Ub2dnbGUkLm5leHQob2ZmbGluZSk7XG4gIH1cbn1cbiJdfQ==