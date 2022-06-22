import { getEntityId, EntityStore } from '@igo2/common';
import { FeatureMotion } from './feature.enums';
import { computeOlFeaturesDiff, featureFromOl, featureToOl, moveToOlFeatures } from './feature.utils';
/**
 * The class is a specialized version of an EntityStore that stores
 * features and the map layer to display them on. Synchronization
 * between the store and the layer is handled by strategies.
 */
export class FeatureStore extends EntityStore {
    constructor(entities, options) {
        super(entities, options);
        this.map = options.map;
    }
    /**
     * The layer's data source
     */
    get source() {
        return this.layer ? this.layer.dataSource : undefined;
    }
    /**
     * Bind this store to a vector layer
     * @param layer Vector layer
     * @returns Feature store
     */
    bindLayer(layer) {
        this.layer = layer;
        return this;
    }
    /**
     * Set the layer's features and perform a motion to make them visible. Strategies
     * make extensive use of that method.
     * @param features Features
     * @param motion Optional: The type of motion to perform
     */
    setLayerFeatures(features, motion = FeatureMotion.Default, viewScale, areaRatio, getId) {
        getId = getId ? getId : getEntityId;
        this.checkLayer();
        const olFeatures = features
            .map((feature) => featureToOl(feature, this.map.projection, getId));
        this.setLayerOlFeatures(olFeatures, motion, viewScale, areaRatio);
    }
    /**
     * Set the store's features from an array of OL features.
     * @param olFeatures Ol features
     */
    setStoreOlFeatures(olFeatures) {
        this.checkLayer();
        const features = olFeatures.map((olFeature) => {
            olFeature.set('_featureStore', this, true);
            return featureFromOl(olFeature, this.layer.map.projection);
        });
        this.load(features);
    }
    /**
     * Remove all features from the layer
     */
    clearLayer() {
        this.checkLayer();
        this.source.ol.clear();
    }
    /**
     * Check wether a layer is bound or not and throw an error if not.
     */
    checkLayer() {
        if (this.layer === undefined) {
            throw new Error('This FeatureStore is not bound to a layer.');
        }
    }
    /**
     * Set the layer's features and perform a motion to make them visible.
     * @param features Openlayers feature objects
     * @param motion Optional: The type of motion to perform
     */
    setLayerOlFeatures(olFeatures, motion = FeatureMotion.Default, viewScale, areaRatio) {
        const olSource = this.layer.ol.getSource();
        const diff = computeOlFeaturesDiff(olSource.getFeatures(), olFeatures);
        if (diff.remove.length > 0) {
            this.removeOlFeaturesFromLayer(diff.remove);
        }
        if (diff.add.length > 0) {
            this.addOlFeaturesToLayer(diff.add);
        }
        if (diff.add.length > 0) {
            // If features are added, do a motion toward the newly added features
            moveToOlFeatures(this.map, diff.add, motion, viewScale, areaRatio);
        }
        else if (diff.remove.length > 0) {
            // Else, do a motion toward all the features
            moveToOlFeatures(this.map, olFeatures, motion, viewScale, areaRatio);
        }
    }
    /**
     * Add features to the the layer
     * @param features Openlayers feature objects
     */
    addOlFeaturesToLayer(olFeatures) {
        olFeatures.forEach((olFeature) => {
            olFeature.set('_featureStore', this, true);
        });
        this.source.ol.addFeatures(olFeatures);
    }
    /**
     * Remove features from the the layer
     * @param features Openlayers feature objects
     */
    removeOlFeaturesFromLayer(olFeatures) {
        olFeatures.forEach((olFeature) => {
            this.source.ol.removeFeature(olFeature);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9mZWF0dXJlL3NoYXJlZC9zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQ0wsV0FBVyxFQUVYLFdBQVcsRUFDWixNQUFNLGNBQWMsQ0FBQztBQU10QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0Rzs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLFlBQTBDLFNBQVEsV0FBYztJQW1CM0UsWUFBWSxRQUFhLEVBQUUsT0FBNEI7UUFDckQsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDekIsQ0FBQztJQVZEOztPQUVHO0lBQ0gsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQStCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBT0Q7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxLQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGdCQUFnQixDQUNkLFFBQW1CLEVBQ25CLFNBQXdCLGFBQWEsQ0FBQyxPQUFPLEVBQzdDLFNBQTRDLEVBQzVDLFNBQWtCLEVBQ2xCLEtBQThCO1FBRTlCLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxV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O0lBQ3pDLENBQUM7SUFFRDs7O09BR0c7SUFDSyx5QkFBeUIsQ0FBQyxVQUFtQztRQUNuRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBZ0MsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnknO1xuXG5pbXBvcnQge1xuICBnZXRFbnRpdHlJZCxcbiAgRW50aXR5S2V5LFxuICBFbnRpdHlTdG9yZVxufSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgVmVjdG9yTGF5ZXIgfSBmcm9tICcuLi8uLi9sYXllcic7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi9tYXAnO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW90aW9uIH0gZnJvbSAnLi9mZWF0dXJlLmVudW1zJztcbmltcG9ydCB7IEZlYXR1cmUsIEZlYXR1cmVTdG9yZU9wdGlvbnMgfSBmcm9tICcuL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBjb21wdXRlT2xGZWF0dXJlc0RpZmYsIGZlYXR1cmVGcm9tT2wsIGZlYXR1cmVUb09sLCBtb3ZlVG9PbEZlYXR1cmVzIH0gZnJvbSAnLi9mZWF0dXJlLnV0aWxzJztcblxuLyoqXG4gKiBUaGUgY2xhc3MgaXMgYSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGFuIEVudGl0eVN0b3JlIHRoYXQgc3RvcmVzXG4gKiBmZWF0dXJlcyBhbmQgdGhlIG1hcCBsYXllciB0byBkaXNwbGF5IHRoZW0gb24uIFN5bmNocm9uaXphdGlvblxuICogYmV0d2VlbiB0aGUgc3RvcmUgYW5kIHRoZSBsYXllciBpcyBoYW5kbGVkIGJ5IHN0cmF0ZWdpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGZWF0dXJlU3RvcmU8VCBleHRlbmRzIEZlYXR1cmUgPSBGZWF0dXJlPiBleHRlbmRzIEVudGl0eVN0b3JlPFQ+IHtcblxuICAvKipcbiAgICogVmVjdG9yIGxheWVyIHRvIGRpc3BsYXkgdGhlIGZlYXR1cmVzIG9uXG4gICAqL1xuICBsYXllcjogVmVjdG9yTGF5ZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXAgdGhlIGxheWVyIGlzIGJvdW5kIHRvXG4gICAqL1xuICByZWFkb25seSBtYXA6IElnb01hcDtcblxuICAvKipcbiAgICogVGhlIGxheWVyJ3MgZGF0YSBzb3VyY2VcbiAgICovXG4gIGdldCBzb3VyY2UoKTogRmVhdHVyZURhdGFTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLmxheWVyID8gdGhpcy5sYXllci5kYXRhU291cmNlIGFzIEZlYXR1cmVEYXRhU291cmNlIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZW50aXRpZXM6IFRbXSwgb3B0aW9uczogRmVhdHVyZVN0b3JlT3B0aW9ucykge1xuICAgIHN1cGVyKGVudGl0aWVzLCBvcHRpb25zKTtcbiAgICB0aGlzLm1hcCA9IG9wdGlvbnMubWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhpcyBzdG9yZSB0byBhIHZlY3RvciBsYXllclxuICAgKiBAcGFyYW0gbGF5ZXIgVmVjdG9yIGxheWVyXG4gICAqIEByZXR1cm5zIEZlYXR1cmUgc3RvcmVcbiAgICovXG4gIGJpbmRMYXllcihsYXllcjogVmVjdG9yTGF5ZXIpOiBGZWF0dXJlU3RvcmUge1xuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGxheWVyJ3MgZmVhdHVyZXMgYW5kIHBlcmZvcm0gYSBtb3Rpb24gdG8gbWFrZSB0aGVtIHZpc2libGUuIFN0cmF0ZWdpZXNcbiAgICogbWFrZSBleHRlbnNpdmUgdXNlIG9mIHRoYXQgbWV0aG9kLlxuICAgKiBAcGFyYW0gZmVhdHVyZXMgRmVhdHVyZXNcbiAgICogQHBhcmFtIG1vdGlvbiBPcHRpb25hbDogVGhlIHR5cGUgb2YgbW90aW9uIHRvIHBlcmZvcm1cbiAgICovXG4gIHNldExheWVyRmVhdHVyZXMoXG4gICAgZmVhdHVyZXM6IEZlYXR1cmVbXSxcbiAgICBtb3Rpb246IEZlYXR1cmVNb3Rpb24gPSBGZWF0dXJlTW90aW9uLkRlZmF1bHQsXG4gICAgdmlld1NjYWxlPzogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXG4gICAgYXJlYVJhdGlvPzogbnVtYmVyLFxuICAgIGdldElkPzogKEZlYXR1cmUpID0+IEVudGl0eUtleVxuICApIHtcbiAgICBnZXRJZCA9IGdldElkID8gZ2V0SWQgOiBnZXRFbnRpdHlJZDtcbiAgICB0aGlzLmNoZWNrTGF5ZXIoKTtcblxuICAgIGNvbnN0IG9sRmVhdHVyZXMgPSBmZWF0dXJlc1xuICAgICAgLm1hcCgoZmVhdHVyZTogRmVhdHVyZSkgPT4gZmVhdHVyZVRvT2woZmVhdHVyZSwgdGhpcy5tYXAucHJvamVjdGlvbiwgZ2V0SWQpKTtcbiAgICB0aGlzLnNldExheWVyT2xGZWF0dXJlcyhvbEZlYXR1cmVzLCBtb3Rpb24sIHZpZXdTY2FsZSwgYXJlYVJhdGlvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0b3JlJ3MgZmVhdHVyZXMgZnJvbSBhbiBhcnJheSBvZiBPTCBmZWF0dXJlcy5cbiAgICogQHBhcmFtIG9sRmVhdHVyZXMgT2wgZmVhdHVyZXNcbiAgICovXG4gIHNldFN0b3JlT2xGZWF0dXJlcyhvbEZlYXR1cmVzOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT5bXSkge1xuICAgIHRoaXMuY2hlY2tMYXllcigpO1xuXG4gICAgY29uc3QgZmVhdHVyZXMgPSBvbEZlYXR1cmVzLm1hcCgob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pID0+IHtcbiAgICAgIG9sRmVhdHVyZS5zZXQoJ19mZWF0dXJlU3RvcmUnLCB0aGlzLCB0cnVlKTtcbiAgICAgIHJldHVybiBmZWF0dXJlRnJvbU9sKG9sRmVhdHVyZSwgdGhpcy5sYXllci5tYXAucHJvamVjdGlvbik7XG4gICAgfSk7XG4gICAgdGhpcy5sb2FkKGZlYXR1cmVzIGFzIFRbXSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBmZWF0dXJlcyBmcm9tIHRoZSBsYXllclxuICAgKi9cbiAgY2xlYXJMYXllcigpIHtcbiAgICB0aGlzLmNoZWNrTGF5ZXIoKTtcbiAgICB0aGlzLnNvdXJjZS5vbC5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdldGhlciBhIGxheWVyIGlzIGJvdW5kIG9yIG5vdCBhbmQgdGhyb3cgYW4gZXJyb3IgaWYgbm90LlxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0xheWVyKCkge1xuICAgIGlmICh0aGlzLmxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBGZWF0dXJlU3RvcmUgaXMgbm90IGJvdW5kIHRvIGEgbGF5ZXIuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbGF5ZXIncyBmZWF0dXJlcyBhbmQgcGVyZm9ybSBhIG1vdGlvbiB0byBtYWtlIHRoZW0gdmlzaWJsZS5cbiAgICogQHBhcmFtIGZlYXR1cmVzIE9wZW5sYXllcnMgZmVhdHVyZSBvYmplY3RzXG4gICAqIEBwYXJhbSBtb3Rpb24gT3B0aW9uYWw6IFRoZSB0eXBlIG9mIG1vdGlvbiB0byBwZXJmb3JtXG4gICAqL1xuICBwdWJsaWMgc2V0TGF5ZXJPbEZlYXR1cmVzKFxuICAgIG9sRmVhdHVyZXM6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdLFxuICAgIG1vdGlvbjogRmVhdHVyZU1vdGlvbiA9IEZlYXR1cmVNb3Rpb24uRGVmYXVsdCxcbiAgICB2aWV3U2NhbGU/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcbiAgICBhcmVhUmF0aW8/OiBudW1iZXJcbiAgKSB7XG4gICAgY29uc3Qgb2xTb3VyY2UgPSB0aGlzLmxheWVyLm9sLmdldFNvdXJjZSgpO1xuICAgIGNvbnN0IGRpZmYgPSBjb21wdXRlT2xGZWF0dXJlc0RpZmYob2xTb3VyY2UuZ2V0RmVhdHVyZXMoKSwgb2xGZWF0dXJlcyk7XG4gICAgaWYgKGRpZmYucmVtb3ZlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucmVtb3ZlT2xGZWF0dXJlc0Zyb21MYXllcihkaWZmLnJlbW92ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpZmYuYWRkLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYWRkT2xGZWF0dXJlc1RvTGF5ZXIoZGlmZi5hZGQpO1xuICAgIH1cblxuICAgIGlmIChkaWZmLmFkZC5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBJZiBmZWF0dXJlcyBhcmUgYWRkZWQsIGRvIGEgbW90aW9uIHRvd2FyZCB0aGUgbmV3bHkgYWRkZWQgZmVhdHVyZXNcbiAgICAgIG1vdmVUb09sRmVhdHVyZXModGhpcy5tYXAsIGRpZmYuYWRkLCBtb3Rpb24sIHZpZXdTY2FsZSwgYXJlYVJhdGlvKTtcbiAgICB9IGVsc2UgaWYgKGRpZmYucmVtb3ZlLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEVsc2UsIGRvIGEgbW90aW9uIHRvd2FyZCBhbGwgdGhlIGZlYXR1cmVzXG4gICAgICBtb3ZlVG9PbEZlYXR1cmVzKHRoaXMubWFwLCBvbEZlYXR1cmVzLCBtb3Rpb24sIHZpZXdTY2FsZSwgYXJlYVJhdGlvKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGZlYXR1cmVzIHRvIHRoZSB0aGUgbGF5ZXJcbiAgICogQHBhcmFtIGZlYXR1cmVzIE9wZW5sYXllcnMgZmVhdHVyZSBvYmplY3RzXG4gICAqL1xuICBwcml2YXRlIGFkZE9sRmVhdHVyZXNUb0xheWVyKG9sRmVhdHVyZXM6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdKSB7XG4gICAgb2xGZWF0dXJlcy5mb3JFYWNoKChvbEZlYXR1cmU6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PikgPT4ge1xuICAgICAgb2xGZWF0dXJlLnNldCgnX2ZlYXR1cmVTdG9yZScsIHRoaXMsIHRydWUpO1xuICAgIH0pO1xuICAgIHRoaXMuc291cmNlLm9sLmFkZEZlYXR1cmVzKG9sRmVhdHVyZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBmZWF0dXJlcyBmcm9tIHRoZSB0aGUgbGF5ZXJcbiAgICogQHBhcmFtIGZlYXR1cmVzIE9wZW5sYXllcnMgZmVhdHVyZSBvYmplY3RzXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZU9sRmVhdHVyZXNGcm9tTGF5ZXIob2xGZWF0dXJlczogT2xGZWF0dXJlPE9sR2VvbWV0cnk+W10pIHtcbiAgICBvbEZlYXR1cmVzLmZvckVhY2goKG9sRmVhdHVyZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+KSA9PiB7XG4gICAgICB0aGlzLnNvdXJjZS5vbC5yZW1vdmVGZWF0dXJlKG9sRmVhdHVyZSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19