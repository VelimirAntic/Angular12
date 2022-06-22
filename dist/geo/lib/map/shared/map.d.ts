import olMap from 'ol/Map';
import olFeature from 'ol/Feature';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import olGeolocation from 'ol/Geolocation';
import OlProjection from 'ol/proj/Projection';
import olCircle from 'ol/geom/Circle';
import { BehaviorSubject, Subject } from 'rxjs';
import { SubjectStatus } from '@igo2/utils';
import { Layer } from '../../layer/shared/layers';
import { Overlay } from '../../overlay/shared/overlay';
import { MapViewOptions, MapOptions, MapExtent, MapControlsOptions } from './map.interface';
import { MapViewController } from './controllers/view';
import { FeatureDataSource } from '../../datasource/shared/datasources/feature-datasource';
export declare class IgoMap {
    ol: olMap;
    offlineButtonToggle$: BehaviorSubject<boolean>;
    layers$: BehaviorSubject<Layer[]>;
    status$: Subject<SubjectStatus>;
    alwaysTracking: boolean;
    positionFollower: boolean;
    geolocation$: BehaviorSubject<olGeolocation>;
    geolocationPositionFeature: olFeature<OlGeometry>;
    geolocationAccuracyFeature: olFeature<OlGeometry>;
    bufferGeom: olCircle;
    bufferFeature: olFeature<OlGeometry>;
    buffer: Overlay;
    overlay: Overlay;
    queryResultsOverlay: Overlay;
    searchResultsOverlay: Overlay;
    viewController: MapViewController;
    swipeEnabled$: BehaviorSubject<boolean>;
    mapCenter$: BehaviorSubject<boolean>;
    selectedFeatures$: BehaviorSubject<Layer[]>;
    bufferDataSource: FeatureDataSource;
    private layerWatcher;
    private geolocation;
    private geolocation$$;
    private options;
    private defaultOptions;
    get layers(): Layer[];
    get projection(): string;
    constructor(options?: MapOptions);
    init(): void;
    setTarget(id: string): void;
    updateView(options: MapViewOptions): void;
    /**
     * Set the map view
     * @param options Map view options
     */
    setView(options: MapViewOptions): void;
    updateControls(value: MapControlsOptions): void;
    /**
     * Deprecated
     * TODO: Move to ViewController and update every place it's used
     */
    getCenter(projection?: string | OlProjection): [number, number];
    /**
     * Deprecated
     * TODO: Move to ViewController and update every place it's used
     */
    getExtent(projection?: string | OlProjection): MapExtent;
    getZoom(): number;
    changeBaseLayer(baseLayer: Layer): void;
    getBaseLayers(): Layer[];
    getLayerById(id: string): Layer;
    getLayerByAlias(alias: string): Layer;
    getLayerByOlUId(olUId: string): Layer;
    /**
     * Add a single layer
     * @param layer Layer to add
     * @param push DEPRECATED
     */
    addLayer(layer: Layer, push?: boolean): void;
    /**
     * Add many layers
     * @param layers Layers to add
     * @param push DEPRECATED
     */
    addLayers(layers: Layer[], push?: boolean): void;
    /**
     * Remove a single layer
     * @param layer Layer to remove
     */
    removeLayer(layer: Layer): void;
    /**
     * Remove many layers
     * @param layers Layers to remove
     */
    removeLayers(layers: Layer[]): void;
    /**
     * Build a list of linked layers to delete
     * @param srcLayer Layer that has triggered the deletion
     * @param layersToRemove list to append the layer to delete into
     */
    handleLinkedLayersDeletion(srcLayer: Layer, layersToRemove: Layer[]): void;
    /**
     * Remove all layers
     */
    removeAllLayers(): void;
    raiseLayer(layer: Layer): void;
    raiseLayers(layers: Layer[]): void;
    lowerLayer(layer: Layer): void;
    lowerLayers(layers: Layer[]): void;
    moveLayer(layer: Layer, from: number, to: number): void;
    /**
     * Add a layer to the OL map and start watching. If the layer is already
     * added to this map, make it visible but don't add it one again.
     * @param layer Layer
     * @returns The layer added, if any
     */
    private doAddLayer;
    /**
     * Remove a layer from the OL map and stop watching
     * @param layer Layer
     */
    private doRemoveLayer;
    /**
     * Update the layers observable
     * @param layers Layers
     */
    private setLayers;
    /**
     * Sort layers by descending zIndex
     * @param layers Array of layers
     * @returns The original array, sorted by zIndex
     */
    private sortLayersByZIndex;
    /**
     * Get layer index in the map's inenr array of layers
     * @param layer Layer
     * @returns The layer index
     */
    private getLayerIndex;
    geolocate(track?: boolean): void;
    unsubscribeGeolocate(): void;
    private startGeolocation;
    private stopGeolocation;
    onOfflineToggle(offline: boolean): void;
}
