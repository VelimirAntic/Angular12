import { FeatureMotion, featureToOl, moveToOlFeatures } from '../../feature/shared';
import { createOverlayLayer } from './overlay.utils';
/**
 * This class is simply a shortcut for adding features to a map.
 * It does nothing more than a standard layer but it's shipped with
 * a defautl style based on the geometry type of the features it contains.
 * @todo Enhance that by using a FeatureStore and strategies.
 */
export class Overlay {
    constructor(map) {
        this.layer = createOverlayLayer();
        this.setMap(map);
    }
    /**
     * Overlay layer's data source
     */
    get dataSource() {
        return this.layer.dataSource;
    }
    /**
     * Bind this to a map and add the overlay layer to that map
     * @param map Map
     */
    setMap(map) {
        if (map === undefined) {
            if (this.map !== undefined) {
                this.map.ol.removeLayer(this.layer.ol);
            }
        }
        else {
            map.ol.addLayer(this.layer.ol);
        }
        this.map = map;
    }
    /**
     * Set the overlay features and, optionally, move to them
     * @param features Features
     * @param motion Optional: Apply this motion to the map view
     * @param sourceId Optional: Remove features of certain sourceId (ex: 'Map' for query features)
     */
    setFeatures(features, motion = FeatureMotion.Default, sourceId) {
        if (sourceId) {
            for (const olFeature of this.dataSource.ol.getFeatures()) {
                if (olFeature.get('_sourceId') === sourceId) {
                    this.removeOlFeature(olFeature);
                }
            }
        }
        else {
            this.clear();
        }
        this.addFeatures(features, motion);
    }
    /**
     * Add a feature to the  overlay and, optionally, move to it
     * @param feature Feature
     * @param motion Optional: Apply this motion to the map view
     */
    addFeature(feature, motion = FeatureMotion.Default) {
        this.addFeatures([feature], motion);
    }
    /**
     * Add features to the  overlay and, optionally, move to them
     * @param features Features
     * @param motion Optional: Apply this motion to the map view
     */
    addFeatures(features, motion = FeatureMotion.Default) {
        const olFeatures = [];
        features.forEach((feature) => {
            const olFeature = featureToOl(feature, this.map.projection);
            const olGeometry = olFeature.getGeometry();
            if (olGeometry === null) {
                return;
            }
            olFeatures.push(olFeature);
        });
        this.addOlFeatures(olFeatures, motion);
    }
    /**
     * Add a OpenLayers feature to the  overlay and, optionally, move to it
     * @param olFeature OpenLayers Feature
     * @param motion Optional: Apply this motion to the map view
     */
    addOlFeature(olFeature, motion = FeatureMotion.Default) {
        this.addOlFeatures([olFeature], motion);
    }
    /**
     * Add OpenLayers features to the overlay and, optionally, move to them
     * @param olFeatures OpenLayers Features
     * @param motion Optional: Apply this motion to the map view
     */
    addOlFeatures(olFeatures, motion = FeatureMotion.Default) {
        this.dataSource.ol.addFeatures(olFeatures);
        moveToOlFeatures(this.map, olFeatures, motion);
    }
    /**
     * Remove a feature from the overlay
     * @param feature Feature
     */
    removeFeature(feature) {
        this.removeFeatures([feature]);
    }
    /**
     * Remove features from the overlay
     * @param features Features
     */
    removeFeatures(features) {
        features.forEach((feature) => {
            if (feature.meta) {
                if (this.dataSource.ol.getFeatureById(feature.meta.id)) {
                    this.removeOlFeature(this.dataSource.ol.getFeatureById(feature.meta.id));
                }
            }
        });
    }
    /**
     * Remove an OpenLayers feature from the overlay
     * @param olFeature OpenLayers Feature
     */
    removeOlFeature(olFeature) {
        this.dataSource.ol.removeFeature(olFeature);
    }
    /**
     * Clear the overlay
     */
    clear() {
        this.dataSource.ol.clear();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL292ZXJsYXkvc2hhcmVkL292ZXJsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUVMLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFLOUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFckQ7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU8sT0FBTztJQWtCbEIsWUFBWSxHQUFZO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFWRDs7T0FFRztJQUNILElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUErQixDQUFDO0lBQ3BELENBQUM7SUFPRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDeEM7U0FDRjthQUFNO1lBQ0wsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVcsQ0FDVCxRQUFtQixFQUNuQixTQUF3QixhQUFhLENBQUMsT0FBTyxFQUM3QyxRQUFpQjtRQUVqQixJQUFJLFFBQVEs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QztJQUM3QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHR5cGUgeyBkZWZhdWx0IGFzIE9sR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcblxuaW1wb3J0IHtcbiAgRmVhdHVyZSxcbiAgRmVhdHVyZU1vdGlvbixcbiAgZmVhdHVyZVRvT2wsXG4gIG1vdmVUb09sRmVhdHVyZXNcbn0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQnO1xuaW1wb3J0IHsgRmVhdHVyZURhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcbmltcG9ydCB7IFZlY3RvckxheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy92ZWN0b3ItbGF5ZXInO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwL3NoYXJlZC9tYXAnO1xuXG5pbXBvcnQgeyBjcmVhdGVPdmVybGF5TGF5ZXIgfSBmcm9tICcuL292ZXJsYXkudXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgc2ltcGx5IGEgc2hvcnRjdXQgZm9yIGFkZGluZyBmZWF0dXJlcyB0byBhIG1hcC5cbiAqIEl0IGRvZXMgbm90aGluZyBtb3JlIHRoYW4gYSBzdGFuZGFyZCBsYXllciBidXQgaXQncyBzaGlwcGVkIHdpdGhcbiAqIGEgZGVmYXV0bCBzdHlsZSBiYXNlZCBvbiB0aGUgZ2VvbWV0cnkgdHlwZSBvZiB0aGUgZmVhdHVyZXMgaXQgY29udGFpbnMuXG4gKiBAdG9kbyBFbmhhbmNlIHRoYXQgYnkgdXNpbmcgYSBGZWF0dXJlU3RvcmUgYW5kIHN0cmF0ZWdpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5IHtcbiAgLyoqXG4gICAqIFRoZSBtYXAgdG8gYWRkIHRoZSBsYXllciB0b1xuICAgKi9cbiAgcHJpdmF0ZSBtYXA6IElnb01hcDtcblxuICAvKipcbiAgICogT3ZlcmxheSBsYXllclxuICAgKi9cbiAgcHJpdmF0ZSBsYXllcjogVmVjdG9yTGF5ZXI7XG5cbiAgLyoqXG4gICAqIE92ZXJsYXkgbGF5ZXIncyBkYXRhIHNvdXJjZVxuICAgKi9cbiAgZ2V0IGRhdGFTb3VyY2UoKTogRmVhdHVyZURhdGFTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLmxheWVyLmRhdGFTb3VyY2UgYXMgRmVhdHVyZURhdGFTb3VyY2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihtYXA/OiBJZ29NYXApIHtcbiAgICB0aGlzLmxheWVyID0gY3JlYXRlT3ZlcmxheUxheWVyKCk7XG4gICAgdGhpcy5zZXRNYXAobWFwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoaXMgdG8gYSBtYXAgYW5kIGFkZCB0aGUgb3ZlcmxheSBsYXllciB0byB0aGF0IG1hcFxuICAgKiBAcGFyYW0gbWFwIE1hcFxuICAgKi9cbiAgc2V0TWFwKG1hcDogSWdvTWFwKSB7XG4gICAgaWYgKG1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1hcC5vbC5yZW1vdmVMYXllcih0aGlzLmxheWVyLm9sKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFwLm9sLmFkZExheWVyKHRoaXMubGF5ZXIub2wpO1xuICAgIH1cbiAgICB0aGlzLm1hcCA9IG1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG92ZXJsYXkgZmVhdHVyZXMgYW5kLCBvcHRpb25hbGx5LCBtb3ZlIHRvIHRoZW1cbiAgICogQHBhcmFtIGZlYXR1cmVzIEZlYXR1cmVzXG4gICAqIEBwYXJhbSBtb3Rpb24gT3B0aW9uYWw6IEFwcGx5IHRoaXMgbW90aW9uIHRvIHRoZSBtYXAgdmlld1xuICAgKiBAcGFyYW0gc291cmNlSWQgT3B0aW9uYWw6IFJlbW92ZSBmZWF0dXJlcyBvZiBjZXJ0YWluIHNvdXJjZUlkIChleDogJ01hcCcgZm9yIHF1ZXJ5IGZlYXR1cmVzKVxuICAgKi9cbiAgc2V0RmVhdHVyZXMoXG4gICAgZmVhdHVyZXM6IEZlYXR1cmVbXSxcbiAgICBtb3Rpb246IEZlYXR1cmVNb3Rpb24gPSBGZWF0dXJlTW90aW9uLkRlZmF1bHQsXG4gICAgc291cmNlSWQ/OiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKHNvdXJjZUlkKSB7XG4gICAgICBmb3IgKGNvbnN0IG9sRmVhdHVyZSBvZiB0aGlzLmRhdGFTb3VyY2Uub2wuZ2V0RmVhdHVyZXMoKSkge1xuICAgICAgICBpZiAob2xGZWF0dXJlLmdldCgnX3NvdXJjZUlkJykgPT09IHNvdXJjZUlkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVPbEZlYXR1cmUob2xGZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkRmVhdHVyZXMoZmVhdHVyZXMsIG1vdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgZmVhdHVyZSB0byB0aGUgIG92ZXJsYXkgYW5kLCBvcHRpb25hbGx5LCBtb3ZlIHRvIGl0XG4gICAqIEBwYXJhbSBmZWF0dXJlIEZlYXR1cmVcbiAgICogQHBhcmFtIG1vdGlvbiBPcHRpb25hbDogQXBwbHkgdGhpcyBtb3Rpb24gdG8gdGhlIG1hcCB2aWV3XG4gICAqL1xuICBhZGRGZWF0dXJlKGZlYXR1cmU6IEZlYXR1cmUsIG1vdGlvbjogRmVhdHVyZU1vdGlvbiA9IEZlYXR1cmVNb3Rpb24uRGVmYXVsdCkge1xuICAgIHRoaXMuYWRkRmVhdHVyZXMoW2ZlYXR1cmVdLCBtb3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBmZWF0dXJlcyB0byB0aGUgIG92ZXJsYXkgYW5kLCBvcHRpb25hbGx5LCBtb3ZlIHRvIHRoZW1cbiAgICogQHBhcmFtIGZlYXR1cmVzIEZlYXR1cmVzXG4gICAqIEBwYXJhbSBtb3Rpb24gT3B0aW9uYWw6IEFwcGx5IHRoaXMgbW90aW9uIHRvIHRoZSBtYXAgdmlld1xuICAgKi9cbiAgYWRkRmVhdHVyZXMoXG4gICAgZmVhdHVyZXM6IEZlYXR1cmVbXSxcbiAgICBtb3Rpb246IEZlYXR1cmVNb3Rpb24gPSBGZWF0dXJlTW90aW9uLkRlZmF1bHRcbiAgKSB7XG4gICAgY29uc3Qgb2xGZWF0dXJlcyA9IFtdO1xuICAgIGZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IEZlYXR1cmUpID0+IHtcbiAgICAgIGNvbnN0IG9sRmVhdHVyZSA9IGZlYXR1cmVUb09sKGZlYXR1cmUsIHRoaXMubWFwLnByb2plY3Rpb24pO1xuICAgICAgY29uc3Qgb2xHZW9tZXRyeSA9IG9sRmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgICAgaWYgKG9sR2VvbWV0cnkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgb2xGZWF0dXJlcy5wdXNoKG9sRmVhdHVyZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZE9sRmVhdHVyZXMob2xGZWF0dXJlcywgbW90aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBPcGVuTGF5ZXJzIGZlYXR1cmUgdG8gdGhlICBvdmVybGF5IGFuZCwgb3B0aW9uYWxseSwgbW92ZSB0byBpdFxuICAgKiBAcGFyYW0gb2xGZWF0dXJlIE9wZW5MYXllcnMgRmVhdHVyZVxuICAgKiBAcGFyYW0gbW90aW9uIE9wdGlvbmFsOiBBcHBseSB0aGlzIG1vdGlvbiB0byB0aGUgbWFwIHZpZXdcbiAgICovXG4gIGFkZE9sRmVhdHVyZShcbiAgICBvbEZlYXR1cmU6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PixcbiAgICBtb3Rpb246IEZlYXR1cmVNb3Rpb24gPSBGZWF0dXJlTW90aW9uLkRlZmF1bHRcbiAgKSB7XG4gICAgdGhpcy5hZGRPbEZlYXR1cmVzKFtvbEZlYXR1cmVdLCBtb3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBPcGVuTGF5ZXJzIGZlYXR1cmVzIHRvIHRoZSBvdmVybGF5IGFuZCwgb3B0aW9uYWxseSwgbW92ZSB0byB0aGVtXG4gICAqIEBwYXJhbSBvbEZlYXR1cmVzIE9wZW5MYXllcnMgRmVhdHVyZXNcbiAgICogQHBhcmFtIG1vdGlvbiBPcHRpb25hbDogQXBwbHkgdGhpcyBtb3Rpb24gdG8gdGhlIG1hcCB2aWV3XG4gICAqL1xuICBhZGRPbEZlYXR1cmVzKFxuICAgIG9sRmVhdHVyZXM6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdLFxuICAgIG1vdGlvbjogRmVhdHVyZU1vdGlvbiA9IEZlYXR1cmVNb3Rpb24uRGVmYXVsdFxuICApIHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uub2wuYWRkRmVhdHVyZXMob2xGZWF0dXJlcyk7XG4gICAgbW92ZVRvT2xGZWF0dXJlcyh0aGlzLm1hcCwgb2xGZWF0dXJlcywgbW90aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBmZWF0dXJlIGZyb20gdGhlIG92ZXJsYXlcbiAgICogQHBhcmFtIGZlYXR1cmUgRmVhdHVyZVxuICAgKi9cbiAgcmVtb3ZlRmVhdHVyZShmZWF0dXJlOiBGZWF0dXJlKSB7XG4gICAgdGhpcy5yZW1vdmVGZWF0dXJlcyhbZmVhdHVyZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBmZWF0dXJlcyBmcm9tIHRoZSBvdmVybGF5XG4gICAqIEBwYXJhbSBmZWF0dXJlcyBGZWF0dXJlc1xuICAgKi9cbiAgcmVtb3ZlRmVhdHVyZXMoZmVhdHVyZXM6IEZlYXR1cmVbXSkge1xuICAgIGZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IEZlYXR1cmUpID0+IHtcbiAgICAgIGlmIChmZWF0dXJlLm1ldGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5vbC5nZXRGZWF0dXJlQnlJZChmZWF0dXJlLm1ldGEuaWQpKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVPbEZlYXR1cmUodGhpcy5kYXRhU291cmNlLm9sLmdldEZlYXR1cmVCeUlkKGZlYXR1cmUubWV0YS5pZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIE9wZW5MYXllcnMgZmVhdHVyZSBmcm9tIHRoZSBvdmVybGF5XG4gICAqIEBwYXJhbSBvbEZlYXR1cmUgT3BlbkxheWVycyBGZWF0dXJlXG4gICAqL1xuICByZW1vdmVPbEZlYXR1cmUob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pIHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uub2wucmVtb3ZlRmVhdHVyZShvbEZlYXR1cmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBvdmVybGF5XG4gICAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uub2wuY2xlYXIoKTtcbiAgfVxufVxuIl19