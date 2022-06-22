import OlDragBoxInteraction from 'ol/interaction/DragBox';
import { unByKey } from 'ol/Observable';
import { combineLatest } from 'rxjs';
import { map, debounceTime, skip } from 'rxjs/operators';
import { EntityStoreStrategy } from '@igo2/common';
import { FeatureDataSource } from '../../../datasource';
import { VectorLayer } from '../../../layer/shared/layers/vector-layer';
import { ctrlKeyDown } from '../../../map/shared/map.utils';
import { FeatureStore } from '../store';
import { FeatureMotion } from '../feature.enums';
export class OlDragSelectInteraction extends OlDragBoxInteraction {
    constructor(options) {
        super(options);
    }
}
/**
 * This strategy synchronizes a store and a layer selected entities.
 * The store <-> layer binding is a two-way binding.
 *
 * In many cases, a single strategy bound to multiple stores
 * will yield better results that multiple strategies with each their
 * own store. In the latter scenario, a click on overlapping features
 * would trigger the strategy of each layer and they would cancel
 * each other as well as move the map view around needlessly.
 */
export class FeatureStoreSelectionStrategy extends EntityStoreStrategy {
    constructor(options) {
        super(options);
        this.options = options;
        this.setMotion(options.motion);
        this._overlayStore = this.createOverlayStore();
    }
    /**
     * The map the layers belong to
     */
    get map() {
        return this.options.map;
    }
    /**
     * A feature store that'll contain the selected features. It has it's own
     * layer, shared by all the stores this staretgy is bound to.
     */
    get overlayStore() {
        return this._overlayStore;
    }
    /**
     * Bind this strategy to a store and force this strategy's
     * reactivation to properly setup watchers.
     * @param store Feature store
     */
    bindStore(store) {
        super.bindStore(store);
        if (this.active === true) {
            // Force reactivation
            this.activate();
        }
    }
    /**
     * Unbind this strategy from a store and force this strategy's
     * reactivation to properly setup watchers.
     * @param store Feature store
     */
    unbindStore(store) {
        super.unbindStore(store);
        if (this.active === true) {
            // Force reactivation
            this.activate();
        }
    }
    /**
     * Define the motion to apply on select
     * @param motion Feature motion
     */
    setMotion(motion) {
        this.motion = motion;
    }
    /**
     * Unselect all entities, from all stores
     */
    unselectAll() {
        this.stores.forEach((store) => {
            store.state.updateAll({ selected: false });
        });
    }
    /**
     * Clear the overlay
     */
    clear() {
        this.overlayStore.source.ol.clear();
        this.overlayStore.clear();
    }
    /**
     * Deactivate the selection without removing the selection
     * overlay.
     */
    deactivateSelection() {
        this.unlistenToMapClick();
        this.removeDragBoxInteraction();
        this.unwatchAll();
    }
    /**
     * Add the overlay layer, setup the map click lsitener and
     * start watching for stores selection
     * @internal
     */
    doActivate() {
        this.addOverlayLayer();
        this.listenToMapClick();
        if (this.options.dragBox === true) {
            this.addDragBoxInteraction();
        }
        this.watchAll();
    }
    /**
     * Remove the overlay layer, remove the map click lsitener and
     * stop watching for stores selection
     * @internal
     */
    doDeactivate() {
        this.deactivateSelection();
        this.removeOverlayLayer();
    }
    /**
     * Create a single observable of all the stores. With a single observable,
     * features can be added all at once to the overlay layer and a single
     * motion can be performed. Multiple observable would have
     * a cancelling effect on each other.
     */
    watchAll() {
        this.unwatchAll();
        const stores$ = this.stores.map((store) => {
            return store.stateView
                .manyBy$((record) => {
                return record.state.selected === true;
            })
                .pipe(map((records) => records.map((record) => record.entity)));
        });
        this.stores$$ = combineLatest(stores$)
            .pipe(debounceTime(5), skip(1), // Skip intial selection
        map((features) => features.reduce((a, b) => a.concat(b))))
            .subscribe((features) => this.onSelectFromStore(features));
    }
    /**
     * Stop watching for selection in all stores.
     */
    unwatchAll() {
        if (this.stores$$ !== undefined) {
            this.stores$$.unsubscribe();
        }
    }
    /**
     * Add a 'singleclick' listener to the map that'll allow selecting
     * features by clicking on the map. The selection will be performed
     * only on the layers bound to this strategy.
     */
    listenToMapClick() {
        this.mapClickListener = this.map.ol.on('singleclick', (event) => {
            this.onMapClick(event);
        });
    }
    /**
     * Remove the map click listener
     */
    unlistenToMapClick() {
        unByKey(this.mapClickListener);
    }
    /**
     * On map click, select feature at pixel
     * @param event OL MapBrowserPointerEvent
     */
    onMapClick(event) {
        const exclusive = !ctrlKeyDown(event);
        const reverse = !exclusive;
        const olFeatures = event.map.getFeaturesAtPixel(event.pixel, {
            hitTolerance: this.options.hitTolerance || 0,
            layerFilter: olLayer => {
                const storeOlLayer = this.stores.find((store) => {
                    return store.layer.ol === olLayer;
                });
                return storeOlLayer !== undefined;
            }
        });
        this.onSelectFromMap(olFeatures, exclusive, reverse);
    }
    /**
     * Add a drag box interaction and, on drag box end, select features
     */
    addDragBoxInteraction() {
        let olDragSelectInteraction;
        const olInteractions = this.map.ol.getInteractions().getArray();
        // There can only be one dragbox interaction, so find the current one, if any
        // Don't keep a reference to the current dragbox because we don't want
        // to remove it when this startegy is deactivated
        for (const olInteraction of olInteractions) {
            if (olInteraction instanceof OlDragSelectInteraction) {
                olDragSelectInteraction = olInteraction;
                break;
            }
        }
        // If no drag box interaction is found, create a new one and add it to the map
        if (olDragSelectInteraction === undefined) {
            olDragSelectInteraction = new OlDragSelectInteraction({
                condition: ctrlKeyDown
            });
            this.map.ol.addInteraction(olDragSelectInteraction);
            this.olDragSelectInteraction = olDragSelectInteraction;
        }
        this.olDragSelectInteractionEndKey = olDragSelectInteraction.on('boxend', (event) => this.onDragBoxEnd(event));
    }
    /**
     * Remove drag box interaction
     */
    removeDragBoxInteraction() {
        if (this.olDragSelectInteractionEndKey !== undefined) {
            unByKey(this.olDragSelectInteractionEndKey);
        }
        if (this.olDragSelectInteraction !== undefined) {
            this.map.ol.removeInteraction(this.olDragSelectInteraction);
        }
        this.olDragSelectInteraction = undefined;
    }
    /**
     * On dragbox end, select features in drag box
     * @param event OL MapBrowserPointerEvent
     */
    onDragBoxEnd(event) {
        const exclusive = !ctrlKeyDown(event.mapBrowserEvent);
        const target = event.target;
        const extent = target.getGeometry().getExtent();
        const olFeatures = this.stores.reduce((acc, store) => {
            const olSource = store.layer.ol.getSource();
            acc.push(...olSource.getFeaturesInExtent(extent));
            return acc;
        }, []);
        this.onSelectFromMap(olFeatures, exclusive, false);
    }
    /**
     * When features are selected from the store, add
     * them to this startegy's overlay layer (select on map)
     * @param features Store features
     */
    onSelectFromStore(features) {
        const motion = this.motion;
        const olOverlayFeatures = this.overlayStore.layer.ol
            .getSource()
            .getFeatures();
        const overlayFeaturesKeys = olOverlayFeatures.map((olFeature) => olFeature.getId());
        const featuresKeys = features.map(this.overlayStore.getKey);
        let doMotion;
        if (features.length === 0) {
            doMotion = false;
        }
        else {
            doMotion =
                overlayFeaturesKeys.length !== featuresKeys.length ||
                    !overlayFeaturesKeys.every((key) => featuresKeys.indexOf(key) >= 0);
        }
        this.overlayStore.setLayerFeatures(features, doMotion ? motion : FeatureMotion.None, this.options.viewScale, this.options.areaRatio, this.options.getFeatureId);
    }
    /**
     * When features are selected from the map, also select them
     * in their store.
     * @param olFeatures OL feature objects
     */
    onSelectFromMap(olFeatures, exclusive, reverse) {
        const groupedFeatures = this.groupFeaturesByStore(olFeatures);
        this.stores.forEach((store) => {
            const features = groupedFeatures.get(store);
            if (features === undefined && exclusive === true) {
                this.unselectAllFeaturesFromStore(store);
            }
            else if (features === undefined && exclusive === false) {
                // Do nothing
            }
            else {
                this.selectFeaturesFromStore(store, features, exclusive, reverse);
            }
        });
    }
    /**
     * Select features in store
     * @param store: Feature store
     * @param features Features
     */
    selectFeaturesFromStore(store, features, exclusive, reverse) {
        if (reverse === true) {
            store.state.reverseMany(features, ['selected']);
        }
        else {
            store.state.updateMany(features, { selected: true }, exclusive);
        }
    }
    /**
     * Unselect all features from store
     * @param store: Feature store
     */
    unselectAllFeaturesFromStore(store) {
        store.state.updateAll({ selected: false });
    }
    /**
     * This method returns a store -> features mapping from a list
     * of OL selected features. OL features keep a reference to the store
     * they are from.
     * @param olFeatures: OL feature objects
     * @returns Store -> features mapping
     */
    groupFeaturesByStore(olFeatures) {
        const groupedFeatures = new Map();
        if (olFeatures === null || olFeatures === undefined) {
            return groupedFeatures;
        }
        olFeatures.forEach((olFeature) => {
            const store = olFeature.get('_featureStore');
            if (store === undefined) {
                return;
            }
            let features = groupedFeatures.get(store);
            if (features === undefined) {
                features = [];
                groupedFeatures.set(store, features);
            }
            const feature = store.get(olFeature.getId());
            if (feature !== undefined) {
                features.push(feature);
            }
        });
        return groupedFeatures;
    }
    /**
     * Create an overlay store that'll contain the selected features.
     * @returns Overlay store
     */
    createOverlayStore() {
        const overlayLayer = this.options.layer
            ? this.options.layer
            : this.createOverlayLayer();
        return new FeatureStore([], { map: this.map }).bindLayer(overlayLayer);
    }
    /**
     * Create an overlay store that'll contain the selected features.
     * @returns Overlay layer
     */
    createOverlayLayer() {
        return new VectorLayer({
            zIndex: 300,
            source: new FeatureDataSource(),
            style: undefined,
            showInLayerList: false,
            exportable: false,
            browsable: false
        });
    }
    /**
     * Add the overlay store's layer to the map to display the selected
     * features.
     */
    addOverlayLayer() {
        if (this.overlayStore.layer.map === undefined) {
            this.map.addLayer(this.overlayStore.layer);
        }
    }
    /**
     * Remove the overlay layer from the map
     */
    removeOverlayLayer() {
        this.overlayStore.source.ol.clear();
        this.map.removeLayer(this.overlayStore.layer);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZmVhdHVyZS9zaGFyZWQvc3RyYXRlZ2llcy9zZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxvQkFBc0MsTUFBTSx3QkFBd0IsQ0FBQztBQUk1RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhDLE9BQU8sRUFBZ0IsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBMkIsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU01RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsb0JBQW9CO0lBQy9ELFlBQVksT0FBTztRQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxPQUFPLDZCQUE4QixTQUFRLG1CQUFtQjtJQWtDcEUsWUFBc0IsT0FBNkM7UUFDakUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREssWUFBTyxHQUFQLE9BQU8sQ0FBc0M7UUFFakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFD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QUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7O09BR0c7SUFDSyxrQkFBa0I7UUFDeEIsT0FBTyxJQUFJLFdBQVcsQ0FBQztZQUNyQixNQUFNLEVBQUUsR0FBRztZQUNYLE1BQU0sRUFBRSxJQUFJLGlCQUFpQixFQUFFO1lBQy9CLEtBQUssRUFBRSxTQUFTO1lBQ2hCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSyxlQUFlO1FBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ssa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnknO1xuaW1wb3J0IE9sRHJhZ0JveEludGVyYWN0aW9uLCB7IERyYWdCb3hFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL0RyYWdCb3gnO1xuaW1wb3J0IHsgRHJhZ0JveEV2ZW50IGFzIE9sRHJhZ0JveEV2ZW50IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhZ0JveCc7XG5pbXBvcnQgeyBFdmVudHNLZXkgfSBmcm9tICdvbC9ldmVudHMnO1xuaW1wb3J0IE1hcEJyb3dzZXJQb2ludGVyRXZlbnQgZnJvbSAnb2wvTWFwQnJvd3NlckV2ZW50JztcbmltcG9ydCB7IHVuQnlLZXkgfSBmcm9tICdvbC9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGRlYm91bmNlVGltZSwgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRW50aXR5S2V5LCBFbnRpdHlSZWNvcmQsIEVudGl0eVN0b3JlU3RyYXRlZ3kgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgVmVjdG9yTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9sYXllci9zaGFyZWQvbGF5ZXJzL3ZlY3Rvci1sYXllcic7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi8uLi9tYXAvc2hhcmVkL21hcCc7XG5pbXBvcnQgeyBjdHJsS2V5RG93biB9IGZyb20gJy4uLy4uLy4uL21hcC9zaGFyZWQvbWFwLnV0aWxzJztcblxuaW1wb3J0IHtcbiAgRmVhdHVyZSxcbiAgRmVhdHVyZVN0b3JlU2VsZWN0aW9uU3RyYXRlZ3lPcHRpb25zXG59IGZyb20gJy4uL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBGZWF0dXJlU3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBGZWF0dXJlTW90aW9uIH0gZnJvbSAnLi4vZmVhdHVyZS5lbnVtcyc7XG5cbmV4cG9ydCBjbGFzcyBPbERyYWdTZWxlY3RJbnRlcmFjdGlvbiBleHRlbmRzIE9sRHJhZ0JveEludGVyYWN0aW9uIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBzdHJhdGVneSBzeW5jaHJvbml6ZXMgYSBzdG9yZSBhbmQgYSBsYXllciBzZWxlY3RlZCBlbnRpdGllcy5cbiAqIFRoZSBzdG9yZSA8LT4gbGF5ZXIgYmluZGluZyBpcyBhIHR3by13YXkgYmluZGluZy5cbiAqXG4gKiBJbiBtYW55IGNhc2VzLCBhIHNpbmdsZSBzdHJhdGVneSBib3VuZCB0byBtdWx0aXBsZSBzdG9yZXNcbiAqIHdpbGwgeWllbGQgYmV0dGVyIHJlc3VsdHMgdGhhdCBtdWx0aXBsZSBzdHJhdGVnaWVzIHdpdGggZWFjaCB0aGVpclxuICogb3duIHN0b3JlLiBJbiB0aGUgbGF0dGVyIHNjZW5hcmlvLCBhIGNsaWNrIG9uIG92ZXJsYXBwaW5nIGZlYXR1cmVzXG4gKiB3b3VsZCB0cmlnZ2VyIHRoZSBzdHJhdGVneSBvZiBlYWNoIGxheWVyIGFuZCB0aGV5IHdvdWxkIGNhbmNlbFxuICogZWFjaCBvdGhlciBhcyB3ZWxsIGFzIG1vdmUgdGhlIG1hcCB2aWV3IGFyb3VuZCBuZWVkbGVzc2x5LlxuICovXG5leHBvcnQgY2xhc3MgRmVhdHVyZVN0b3JlU2VsZWN0aW9uU3RyYXRlZ3kgZXh0ZW5kcyBFbnRpdHlTdG9yZVN0cmF0ZWd5IHtcbiAgLyoqXG4gICAqIExpc3RlbmVyIHRvIHRoZSBtYXAgY2xpY2sgZXZlbnQgdGhhdCBhbGxvd3Mgc2VsZWN0aW5nIGEgZmVhdHVyZVxuICAgKiBieSBjbGlja2luZyBvbiB0aGUgbWFwXG4gICAqL1xuICBwcml2YXRlIG1hcENsaWNrTGlzdGVuZXI7XG5cbiAgcHJpdmF0ZSBvbERyYWdTZWxlY3RJbnRlcmFjdGlvbjogT2xEcmFnU2VsZWN0SW50ZXJhY3Rpb247XG5cbiAgcHJpdmF0ZSBvbERyYWdTZWxlY3RJbnRlcmFjdGlvbkVuZEtleTogRXZlbnRzS2V5IHwgRXZlbnRzS2V5W107XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byBhbGwgc3RvcmVzIHNlbGVjdGVkIGVudGl0aWVzXG4gICAqL1xuICBwcml2YXRlIHN0b3JlcyQkOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBtb3Rpb246IEZlYXR1cmVNb3Rpb247XG5cbiAgLyoqXG4gICAqIFRoZSBtYXAgdGhlIGxheWVycyBiZWxvbmcgdG9cbiAgICovXG4gIGdldCBtYXAoKTogSWdvTWFwIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGZlYXR1cmUgc3RvcmUgdGhhdCdsbCBjb250YWluIHRoZSBzZWxlY3RlZCBmZWF0dXJlcy4gSXQgaGFzIGl0J3Mgb3duXG4gICAqIGxheWVyLCBzaGFyZWQgYnkgYWxsIHRoZSBzdG9yZXMgdGhpcyBzdGFyZXRneSBpcyBib3VuZCB0by5cbiAgICovXG4gIGdldCBvdmVybGF5U3RvcmUoKTogRmVhdHVyZVN0b3JlIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVN0b3JlO1xuICB9XG4gIHByaXZhdGUgX292ZXJsYXlTdG9yZTogRmVhdHVyZVN0b3JlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcHRpb25zOiBGZWF0dXJlU3RvcmVTZWxlY3Rpb25TdHJhdGVneU9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnNldE1vdGlvbihvcHRpb25zLm1vdGlvbik7XG4gICAgdGhpcy5fb3ZlcmxheVN0b3JlID0gdGhpcy5jcmVhdGVPdmVybGF5U3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoaXMgc3RyYXRlZ3kgdG8gYSBzdG9yZSBhbmQgZm9yY2UgdGhpcyBzdHJhdGVneSdzXG4gICAqIHJlYWN0aXZhdGlvbiB0byBwcm9wZXJseSBzZXR1cCB3YXRjaGVycy5cbiAgICogQHBhcmFtIHN0b3JlIEZlYXR1cmUgc3RvcmVcbiAgICovXG4gIGJpbmRTdG9yZShzdG9yZTogRmVhdHVyZVN0b3JlKSB7XG4gICAgc3VwZXIuYmluZFN0b3JlKHN0b3JlKTtcbiAgICBpZiAodGhpcy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIC8vIEZvcmNlIHJlYWN0aXZhdGlvblxuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhpcyBzdHJhdGVneSBmcm9tIGEgc3RvcmUgYW5kIGZvcmNlIHRoaXMgc3RyYXRlZ3knc1xuICAgKiByZWFjdGl2YXRpb24gdG8gcHJvcGVybHkgc2V0dXAgd2F0Y2hlcnMuXG4gICAqIEBwYXJhbSBzdG9yZSBGZWF0dXJlIHN0b3JlXG4gICAqL1xuICB1bmJpbmRTdG9yZShzdG9yZTogRmVhdHVyZVN0b3JlKSB7XG4gICAgc3VwZXIudW5iaW5kU3RvcmUoc3RvcmUpO1xuICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gRm9yY2UgcmVhY3RpdmF0aW9uXG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgbW90aW9uIHRvIGFwcGx5IG9uIHNlbGVjdFxuICAgKiBAcGFyYW0gbW90aW9uIEZlYXR1cmUgbW90aW9uXG4gICAqL1xuICBzZXRNb3Rpb24obW90aW9uOiBGZWF0dXJlTW90aW9uKSB7XG4gICAgdGhpcy5tb3Rpb24gPSBtb3Rpb247XG4gIH1cblxuICAvKipcbiAgICogVW5zZWxlY3QgYWxsIGVudGl0aWVzLCBmcm9tIGFsbCBzdG9yZXNcbiAgICovXG4gIHVuc2VsZWN0QWxsKCkge1xuICAgIHRoaXMuc3RvcmVzLmZvckVhY2goKHN0b3JlOiBGZWF0dXJlU3RvcmUpID0+IHtcbiAgICAgIHN0b3JlLnN0YXRlLnVwZGF0ZUFsbCh7IHNlbGVjdGVkOiBmYWxzZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgb3ZlcmxheVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5vdmVybGF5U3RvcmUuc291cmNlLm9sLmNsZWFyKCk7XG4gICAgdGhpcy5vdmVybGF5U3RvcmUuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlIHRoZSBzZWxlY3Rpb24gd2l0aG91dCByZW1vdmluZyB0aGUgc2VsZWN0aW9uXG4gICAqIG92ZXJsYXkuXG4gICAqL1xuICBkZWFjdGl2YXRlU2VsZWN0aW9uKCkge1xuICAgIHRoaXMudW5saXN0ZW5Ub01hcENsaWNrKCk7XG4gICAgdGhpcy5yZW1vdmVEcmFnQm94SW50ZXJhY3Rpb24oKTtcbiAgICB0aGlzLnVud2F0Y2hBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIG92ZXJsYXkgbGF5ZXIsIHNldHVwIHRoZSBtYXAgY2xpY2sgbHNpdGVuZXIgYW5kXG4gICAqIHN0YXJ0IHdhdGNoaW5nIGZvciBzdG9yZXMgc2VsZWN0aW9uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIGRvQWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hZGRPdmVybGF5TGF5ZXIoKTtcbiAgICB0aGlzLmxpc3RlblRvTWFwQ2xpY2soKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRyYWdCb3ggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuYWRkRHJhZ0JveEludGVyYWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMud2F0Y2hBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIG92ZXJsYXkgbGF5ZXIsIHJlbW92ZSB0aGUgbWFwIGNsaWNrIGxzaXRlbmVyIGFuZFxuICAgKiBzdG9wIHdhdGNoaW5nIGZvciBzdG9yZXMgc2VsZWN0aW9uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIGRvRGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnJlbW92ZU92ZXJsYXlMYXllcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbmdsZSBvYnNlcnZhYmxlIG9mIGFsbCB0aGUgc3RvcmVzLiBXaXRoIGEgc2luZ2xlIG9ic2VydmFibGUsXG4gICAqIGZlYXR1cmVzIGNhbiBiZSBhZGRlZCBhbGwgYXQgb25jZSB0byB0aGUgb3ZlcmxheSBsYXllciBhbmQgYSBzaW5nbGVcbiAgICogbW90aW9uIGNhbiBiZSBwZXJmb3JtZWQuIE11bHRpcGxlIG9ic2VydmFibGUgd291bGQgaGF2ZVxuICAgKiBhIGNhbmNlbGxpbmcgZWZmZWN0IG9uIGVhY2ggb3RoZXIuXG4gICAqL1xuICBwcml2YXRlIHdhdGNoQWxsKCkge1xuICAgIHRoaXMudW53YXRjaEFsbCgpO1xuXG4gICAgY29uc3Qgc3RvcmVzJCA9IHRoaXMuc3RvcmVzLm1hcCgoc3RvcmU6IEZlYXR1cmVTdG9yZSkgPT4ge1xuICAgICAgcmV0dXJuIHN0b3JlLnN0YXRlVmlld1xuICAgICAgICAubWFueUJ5JCgocmVjb3JkOiBFbnRpdHlSZWNvcmQ8RmVhdHVyZT4pID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkLnN0YXRlLnNlbGVjdGVkID09PSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJlY29yZHM6IEVudGl0eVJlY29yZDxGZWF0dXJlPltdKSA9PlxuICAgICAgICAgICAgcmVjb3Jkcy5tYXAoKHJlY29yZCkgPT4gcmVjb3JkLmVudGl0eSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5zdG9yZXMkJCA9IGNvbWJpbmVMYXRlc3Qoc3RvcmVzJClcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoNSksXG4gICAgICAgIHNraXAoMSksIC8vIFNraXAgaW50aWFsIHNlbGVjdGlvblxuICAgICAgICBtYXAoKGZlYXR1cmVzOiBBcnJheTxGZWF0dXJlW10+KSA9PlxuICAgICAgICAgIGZlYXR1cmVzLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYikpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGZlYXR1cmVzOiBGZWF0dXJlW10pID0+IHRoaXMub25TZWxlY3RGcm9tU3RvcmUoZmVhdHVyZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHdhdGNoaW5nIGZvciBzZWxlY3Rpb24gaW4gYWxsIHN0b3Jlcy5cbiAgICovXG4gIHByaXZhdGUgdW53YXRjaEFsbCgpIHtcbiAgICBpZiAodGhpcy5zdG9yZXMkJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0b3JlcyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhICdzaW5nbGVjbGljaycgbGlzdGVuZXIgdG8gdGhlIG1hcCB0aGF0J2xsIGFsbG93IHNlbGVjdGluZ1xuICAgKiBmZWF0dXJlcyBieSBjbGlja2luZyBvbiB0aGUgbWFwLiBUaGUgc2VsZWN0aW9uIHdpbGwgYmUgcGVyZm9ybWVkXG4gICAqIG9ubHkgb24gdGhlIGxheWVycyBib3VuZCB0byB0aGlzIHN0cmF0ZWd5LlxuICAgKi9cbiAgcHJpdmF0ZSBsaXN0ZW5Ub01hcENsaWNrKCkge1xuICAgIHRoaXMubWFwQ2xpY2tMaXN0ZW5lciA9IHRoaXMubWFwLm9sLm9uKFxuICAgICAgJ3NpbmdsZWNsaWNrJyxcbiAgICAgIChldmVudDogTWFwQnJvd3NlclBvaW50ZXJFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgIHRoaXMub25NYXBDbGljayhldmVudCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIG1hcCBjbGljayBsaXN0ZW5lclxuICAgKi9cbiAgcHJpdmF0ZSB1bmxpc3RlblRvTWFwQ2xpY2soKSB7XG4gICAgdW5CeUtleSh0aGlzLm1hcENsaWNrTGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIG1hcCBjbGljaywgc2VsZWN0IGZlYXR1cmUgYXQgcGl4ZWxcbiAgICogQHBhcmFtIGV2ZW50IE9MIE1hcEJyb3dzZXJQb2ludGVyRXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25NYXBDbGljayhldmVudDogTWFwQnJvd3NlclBvaW50ZXJFdmVudDxhbnk+KSB7XG4gICAgY29uc3QgZXhjbHVzaXZlID0gIWN0cmxLZXlEb3duKGV2ZW50KTtcbiAgICBjb25zdCByZXZlcnNlID0gIWV4Y2x1c2l2ZTtcbiAgICBjb25zdCBvbEZlYXR1cmVzID0gZXZlbnQubWFwLmdldEZlYXR1cmVzQXRQaXhlbChldmVudC5waXhlbCwge1xuICAgICAgaGl0VG9sZXJhbmNlOiB0aGlzLm9wdGlvbnMuaGl0VG9sZXJhbmNlIHx8IDAsXG4gICAgICBsYXllckZpbHRlcjogb2xMYXllciA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlT2xMYXllciA9IHRoaXMuc3RvcmVzLmZpbmQoKHN0b3JlOiBGZWF0dXJlU3RvcmUpID0+IHtcbiAgICAgICAgICByZXR1cm4gc3RvcmUubGF5ZXIub2wgPT09IG9sTGF5ZXI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RvcmVPbExheWVyICE9PSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSkgYXMgT2xGZWF0dXJlPE9sR2VvbWV0cnk+W107XG4gICAgdGhpcy5vblNlbGVjdEZyb21NYXAob2xGZWF0dXJlcywgZXhjbHVzaXZlLCByZXZlcnNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBkcmFnIGJveCBpbnRlcmFjdGlvbiBhbmQsIG9uIGRyYWcgYm94IGVuZCwgc2VsZWN0IGZlYXR1cmVzXG4gICAqL1xuICBwcml2YXRlIGFkZERyYWdCb3hJbnRlcmFjdGlvbigpIHtcbiAgICBsZXQgb2xEcmFnU2VsZWN0SW50ZXJhY3Rpb247XG4gICAgY29uc3Qgb2xJbnRlcmFjdGlvbnMgPSB0aGlzLm1hcC5vbC5nZXRJbnRlcmFjdGlvbnMoKS5nZXRBcnJheSgpO1xuXG4gICAgLy8gVGhlcmUgY2FuIG9ubHkgYmUgb25lIGRyYWdib3ggaW50ZXJhY3Rpb24sIHNvIGZpbmQgdGhlIGN1cnJlbnQgb25lLCBpZiBhbnlcbiAgICAvLyBEb24ndCBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IGRyYWdib3ggYmVjYXVzZSB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gcmVtb3ZlIGl0IHdoZW4gdGhpcyBzdGFydGVneSBpcyBkZWFjdGl2YXRlZFxuICAgIGZvciAoY29uc3Qgb2xJbnRlcmFjdGlvbiBvZiBvbEludGVyYWN0aW9ucykge1xuICAgICAgaWYgKG9sSW50ZXJhY3Rpb24gaW5zdGFuY2VvZiBPbERyYWdTZWxlY3RJbnRlcmFjdGlvbikge1xuICAgICAgICBvbERyYWdTZWxlY3RJbnRlcmFjdGlvbiA9IG9sSW50ZXJhY3Rpb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiBubyBkcmFnIGJveCBpbnRlcmFjdGlvbiBpcyBmb3VuZCwgY3JlYXRlIGEgbmV3IG9uZSBhbmQgYWRkIGl0IHRvIHRoZSBtYXBcbiAgICBpZiAob2xEcmFnU2VsZWN0SW50ZXJhY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2xEcmFnU2VsZWN0SW50ZXJhY3Rpb24gPSBuZXcgT2xEcmFnU2VsZWN0SW50ZXJhY3Rpb24oe1xuICAgICAgICBjb25kaXRpb246IGN0cmxLZXlEb3duXG4gICAgICB9KTtcbiAgICAgIHRoaXMubWFwLm9sLmFkZEludGVyYWN0aW9uKG9sRHJhZ1NlbGVjdEludGVyYWN0aW9uKTtcbiAgICAgIHRoaXMub2xEcmFnU2VsZWN0SW50ZXJhY3Rpb24gPSBvbERyYWdTZWxlY3RJbnRlcmFjdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLm9sRHJhZ1NlbGVjdEludGVyYWN0aW9uRW5kS2V5ID0gb2xEcmFnU2VsZWN0SW50ZXJhY3Rpb24ub24oXG4gICAgICAnYm94ZW5kJyxcbiAgICAgIChldmVudDogRHJhZ0JveEV2ZW50KSA9PiB0aGlzLm9uRHJhZ0JveEVuZChldmVudClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkcmFnIGJveCBpbnRlcmFjdGlvblxuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVEcmFnQm94SW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub2xEcmFnU2VsZWN0SW50ZXJhY3Rpb25FbmRLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdW5CeUtleSh0aGlzLm9sRHJhZ1NlbGVjdEludGVyYWN0aW9uRW5kS2V5KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub2xEcmFnU2VsZWN0SW50ZXJhY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tYXAub2wucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5vbERyYWdTZWxlY3RJbnRlcmFjdGlvbik7XG4gICAgfVxuICAgIHRoaXMub2xEcmFnU2VsZWN0SW50ZXJhY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogT24gZHJhZ2JveCBlbmQsIHNlbGVjdCBmZWF0dXJlcyBpbiBkcmFnIGJveFxuICAgKiBAcGFyYW0gZXZlbnQgT0wgTWFwQnJvd3NlclBvaW50ZXJFdmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbkRyYWdCb3hFbmQoZXZlbnQ6IE9sRHJhZ0JveEV2ZW50KSB7XG4gICAgY29uc3QgZXhjbHVzaXZlID0gIWN0cmxLZXlEb3duKGV2ZW50Lm1hcEJyb3dzZXJFdmVudCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIGFueTtcbiAgICBjb25zdCBleHRlbnQgPSB0YXJnZXQuZ2V0R2VvbWV0cnkoKS5nZXRFeHRlbnQoKTtcbiAgICBjb25zdCBvbEZlYXR1cmVzID0gdGhpcy5zdG9yZXMucmVkdWNlKFxuICAgICAgKGFjYzogT2xGZWF0dXJlPE9sR2VvbWV0cnk+W10sIHN0b3JlOiBGZWF0dXJlU3RvcmUpID0+IHtcbiAgICAgICAgY29uc3Qgb2xTb3VyY2UgPSBzdG9yZS5sYXllci5vbC5nZXRTb3VyY2UoKTtcbiAgICAgICAgYWNjLnB1c2goLi4ub2xTb3VyY2UuZ2V0RmVhdHVyZXNJbkV4dGVudChleHRlbnQpKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sXG4gICAgICBbXVxuICAgICk7XG4gICAgdGhpcy5vblNlbGVjdEZyb21NYXAob2xGZWF0dXJlcywgZXhjbHVzaXZlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBmZWF0dXJlcyBhcmUgc2VsZWN0ZWQgZnJvbSB0aGUgc3RvcmUsIGFkZFxuICAgKiB0aGVtIHRvIHRoaXMgc3RhcnRlZ3kncyBvdmVybGF5IGxheWVyIChzZWxlY3Qgb24gbWFwKVxuICAgKiBAcGFyYW0gZmVhdHVyZXMgU3RvcmUgZmVhdHVyZXNcbiAgICovXG4gIHByaXZhdGUgb25TZWxlY3RGcm9tU3RvcmUoZmVhdHVyZXM6IEZlYXR1cmVbXSkge1xuICAgIGNvbnN0IG1vdGlvbiA9IHRoaXMubW90aW9uO1xuICAgIGNvbnN0IG9sT3ZlcmxheUZlYXR1cmVzID0gdGhpcy5vdmVybGF5U3RvcmUubGF5ZXIub2xcbiAgICAgIC5nZXRTb3VyY2UoKVxuICAgICAgLmdldEZlYXR1cmVzKCk7XG4gICAgY29uc3Qgb3ZlcmxheUZlYXR1cmVzS2V5cyA9IG9sT3ZlcmxheUZlYXR1cmVzLm1hcCgob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pID0+XG4gICAgICBvbEZlYXR1cmUuZ2V0SWQoKVxuICAgICk7XG4gICAgY29uc3QgZmVhdHVyZXNLZXlzID0gZmVhdHVyZXMubWFwKHRoaXMub3ZlcmxheVN0b3JlLmdldEtleSk7XG5cbiAgICBsZXQgZG9Nb3Rpb247XG4gICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9Nb3Rpb24gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9Nb3Rpb24gPVxuICAgICAgICBvdmVybGF5RmVhdHVyZXNLZXlzLmxlbmd0aCAhPT0gZmVhdHVyZXNLZXlzLmxlbmd0aCB8fFxuICAgICAgICAhb3ZlcmxheUZlYXR1cmVzS2V5cy5ldmVyeShcbiAgICAgICAgICAoa2V5OiBFbnRpdHlLZXkpID0+IGZlYXR1cmVzS2V5cy5pbmRleE9mKGtleSkgPj0gMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHRoaXMub3ZlcmxheVN0b3JlLnNldExheWVyRmVhdHVyZXMoXG4gICAgICBmZWF0dXJlcyxcbiAgICAgIGRvTW90aW9uID8gbW90aW9uIDogRmVhdHVyZU1vdGlvbi5Ob25lLFxuICAgICAgdGhpcy5vcHRpb25zLnZpZXdTY2FsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5hcmVhUmF0aW8sXG4gICAgICB0aGlzLm9wdGlvbnMuZ2V0RmVhdHVyZUlkXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGZlYXR1cmVzIGFyZSBzZWxlY3RlZCBmcm9tIHRoZSBtYXAsIGFsc28gc2VsZWN0IHRoZW1cbiAgICogaW4gdGhlaXIgc3RvcmUuXG4gICAqIEBwYXJhbSBvbEZlYXR1cmVzIE9MIGZlYXR1cmUgb2JqZWN0c1xuICAgKi9cbiAgcHJpdmF0ZSBvblNlbGVjdEZyb21NYXAoXG4gICAgb2xGZWF0dXJlczogT2xGZWF0dXJlPE9sR2VvbWV0cnk+W10sXG4gICAgZXhjbHVzaXZlOiBib29sZWFuLFxuICAgIHJldmVyc2U6IGJvb2xlYW5cbiAgKSB7XG4gICAgY29uc3QgZ3JvdXBlZEZlYXR1cmVzID0gdGhpcy5ncm91cEZlYXR1cmVzQnlTdG9yZShvbEZlYXR1cmVzKTtcblxuICAgIHRoaXMuc3RvcmVzLmZvckVhY2goKHN0b3JlOiBGZWF0dXJlU3RvcmUpID0+IHtcbiAgICAgIGNvbnN0IGZlYXR1cmVzID0gZ3JvdXBlZEZlYXR1cmVzLmdldChzdG9yZSk7XG4gICAgICBpZiAoZmVhdHVyZXMgPT09IHVuZGVmaW5lZCAmJiBleGNsdXNpdmUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy51bnNlbGVjdEFsbEZlYXR1cmVzRnJvbVN0b3JlKHN0b3JlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZXMgPT09IHVuZGVmaW5lZCAmJiBleGNsdXNpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIERvIG5vdGhpbmdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RmVhdHVyZXNGcm9tU3RvcmUoc3RvcmUsIGZlYXR1cmVzLCBleGNsdXNpdmUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBmZWF0dXJlcyBpbiBzdG9yZVxuICAgKiBAcGFyYW0gc3RvcmU6IEZlYXR1cmUgc3RvcmVcbiAgICogQHBhcmFtIGZlYXR1cmVzIEZlYXR1cmVzXG4gICAqL1xuICBwcml2YXRlIHNlbGVjdEZlYXR1cmVzRnJvbVN0b3JlKFxuICAgIHN0b3JlOiBGZWF0dXJlU3RvcmUsXG4gICAgZmVhdHVyZXM6IEZlYXR1cmVbXSxcbiAgICBleGNsdXNpdmU6IGJvb2xlYW4sXG4gICAgcmV2ZXJzZTogYm9vbGVhblxuICApIHtcbiAgICBpZiAocmV2ZXJzZSA9PT0gdHJ1ZSkge1xuICAgICAgc3RvcmUuc3RhdGUucmV2ZXJzZU1hbnkoZmVhdHVyZXMsIFsnc2VsZWN0ZWQnXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlLnN0YXRlLnVwZGF0ZU1hbnkoZmVhdHVyZXMsIHsgc2VsZWN0ZWQ6IHRydWUgfSwgZXhjbHVzaXZlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5zZWxlY3QgYWxsIGZlYXR1cmVzIGZyb20gc3RvcmVcbiAgICogQHBhcmFtIHN0b3JlOiBGZWF0dXJlIHN0b3JlXG4gICAqL1xuICBwcml2YXRlIHVuc2VsZWN0QWxsRmVhdHVyZXNGcm9tU3RvcmUoc3RvcmU6IEZlYXR1cmVTdG9yZSkge1xuICAgIHN0b3JlLnN0YXRlLnVwZGF0ZUFsbCh7IHNlbGVjdGVkOiBmYWxzZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgc3RvcmUgLT4gZmVhdHVyZXMgbWFwcGluZyBmcm9tIGEgbGlzdFxuICAgKiBvZiBPTCBzZWxlY3RlZCBmZWF0dXJlcy4gT0wgZmVhdHVyZXMga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc3RvcmVcbiAgICogdGhleSBhcmUgZnJvbS5cbiAgICogQHBhcmFtIG9sRmVhdHVyZXM6IE9MIGZlYXR1cmUgb2JqZWN0c1xuICAgKiBAcmV0dXJucyBTdG9yZSAtPiBmZWF0dXJlcyBtYXBwaW5nXG4gICAqL1xuICBwcml2YXRlIGdyb3VwRmVhdHVyZXNCeVN0b3JlKFxuICAgIG9sRmVhdHVyZXM6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdXG4gICk6IE1hcDxGZWF0dXJlU3RvcmUsIEZlYXR1cmVbXT4ge1xuICAgIGNvbnN0IGdyb3VwZWRGZWF0dXJlcyA9IG5ldyBNYXA8RmVhdHVyZVN0b3JlLCBGZWF0dXJlW10+KCk7XG4gICAgaWYgKG9sRmVhdHVyZXMgPT09IG51bGwgfHwgb2xGZWF0dXJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZ3JvdXBlZEZlYXR1cmVzO1xuICAgIH1cblxuICAgIG9sRmVhdHVyZXMuZm9yRWFjaCgob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pID0+IHtcbiAgICAgIGNvbnN0IHN0b3JlID0gb2xGZWF0dXJlLmdldCgnX2ZlYXR1cmVTdG9yZScpO1xuICAgICAgaWYgKHN0b3JlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZmVhdHVyZXMgPSBncm91cGVkRmVhdHVyZXMuZ2V0KHN0b3JlKTtcbiAgICAgIGlmIChmZWF0dXJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZlYXR1cmVzID0gW107XG4gICAgICAgIGdyb3VwZWRGZWF0dXJlcy5zZXQoc3RvcmUsIGZlYXR1cmVzKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmVhdHVyZSA9IHN0b3JlLmdldChvbEZlYXR1cmUuZ2V0SWQoKSk7XG4gICAgICBpZiAoZmVhdHVyZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ3JvdXBlZEZlYXR1cmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBvdmVybGF5IHN0b3JlIHRoYXQnbGwgY29udGFpbiB0aGUgc2VsZWN0ZWQgZmVhdHVyZXMuXG4gICAqIEByZXR1cm5zIE92ZXJsYXkgc3RvcmVcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheVN0b3JlKCk6IEZlYXR1cmVTdG9yZSB7XG4gICAgY29uc3Qgb3ZlcmxheUxheWVyID0gdGhpcy5vcHRpb25zLmxheWVyXG4gICAgICA/IHRoaXMub3B0aW9ucy5sYXllclxuICAgICAgOiB0aGlzLmNyZWF0ZU92ZXJsYXlMYXllcigpO1xuICAgIHJldHVybiBuZXcgRmVhdHVyZVN0b3JlKFtdLCB7IG1hcDogdGhpcy5tYXAgfSkuYmluZExheWVyKG92ZXJsYXlMYXllcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIG92ZXJsYXkgc3RvcmUgdGhhdCdsbCBjb250YWluIHRoZSBzZWxlY3RlZCBmZWF0dXJlcy5cbiAgICogQHJldHVybnMgT3ZlcmxheSBsYXllclxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5TGF5ZXIoKTogVmVjdG9yTGF5ZXIge1xuICAgIHJldHVybiBuZXcgVmVjdG9yTGF5ZXIoe1xuICAgICAgekluZGV4OiAzMDAsXG4gICAgICBzb3VyY2U6IG5ldyBGZWF0dXJlRGF0YVNvdXJjZSgpLFxuICAgICAgc3R5bGU6IHVuZGVmaW5lZCxcbiAgICAgIHNob3dJbkxheWVyTGlzdDogZmFsc2UsXG4gICAgICBleHBvcnRhYmxlOiBmYWxzZSxcbiAgICAgIGJyb3dzYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIG92ZXJsYXkgc3RvcmUncyBsYXllciB0byB0aGUgbWFwIHRvIGRpc3BsYXkgdGhlIHNlbGVjdGVkXG4gICAqIGZlYXR1cmVzLlxuICAgKi9cbiAgcHJpdmF0ZSBhZGRPdmVybGF5TGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVN0b3JlLmxheWVyLm1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLm92ZXJsYXlTdG9yZS5sYXllcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgb3ZlcmxheSBsYXllciBmcm9tIHRoZSBtYXBcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlT3ZlcmxheUxheWVyKCkge1xuICAgIHRoaXMub3ZlcmxheVN0b3JlLnNvdXJjZS5vbC5jbGVhcigpO1xuICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMub3ZlcmxheVN0b3JlLmxheWVyKTtcbiAgfVxufVxuIl19