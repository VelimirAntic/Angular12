import OlFeature from 'ol/Feature';
import OlVectorSource from 'ol/source/Vector';
import OlVectorLayer from 'ol/layer/Vector';
import { Subject } from 'rxjs';
import { GeometrySliceError } from '../geometry.errors';
import { sliceOlGeometry } from '../geometry.utils';
import { DrawControl } from './draw';
/**
 * Control to modify geometries
 */
export class SliceControl {
    constructor(options) {
        this.options = options;
        /**
         * Slice end observable
         */
        this.end$ = new Subject();
        /**
         * Slice error, if any
         */
        this.error$ = new Subject();
        if (options.layer !== undefined) {
            this.olOverlayLayer = options.layer;
        }
        else {
            this.olOverlayLayer = this.createOlInnerOverlayLayer();
        }
    }
    /**
     * Wheter the control is active
     */
    get active() {
        return this.olMap !== undefined;
    }
    /**
     * OL overlay source
     * @internal
     */
    get olOverlaySource() {
        return this.olOverlayLayer.getSource();
    }
    /**
     * Add or remove this control to/from a map.
     * @param map OL Map
     */
    setOlMap(olMap) {
        if (olMap === undefined) {
            this.clearOlInnerOverlaySource();
            this.removeOlInnerOverlayLayer();
            this.removeDrawLineControl();
            this.olMap = olMap;
            return;
        }
        this.olMap = olMap;
        this.addOlInnerOverlayLayer();
        this.addDrawLineControl();
    }
    /**
     * Return the overlay source
     */
    getSource() {
        return this.olOverlaySource;
    }
    /**
     * Add an OL geometry to the overlay for slicing
     * @param olGeometry Ol Geometry
     */
    setOlGeometry(olGeometry) {
        const olFeature = new OlFeature({ geometry: olGeometry });
        this.olOverlaySource.clear(true);
        this.olOverlaySource.addFeature(olFeature);
    }
    /**
     * Create an overlay source if none is defined in the options
     */
    createOlInnerOverlayLayer() {
        return new OlVectorLayer({
            source: this.options.source ? this.options.source : new OlVectorSource(),
            style: this.options.layerStyle,
            zIndex: 500
        });
    }
    /**
     * Clear the overlay layer if it wasn't defined in the options
     */
    removeOlInnerOverlayLayer() {
        if (this.options.layer === undefined && this.olMap !== undefined) {
            this.olMap.removeLayer(this.olOverlayLayer);
        }
    }
    /**
     * Add the overlay layer if it wasn't defined in the options
     */
    addOlInnerOverlayLayer() {
        if (this.options.layer === undefined) {
            this.olMap.addLayer(this.olOverlayLayer);
        }
    }
    /**
     * Clear the overlay source if it wasn't defined in the options
     */
    clearOlInnerOverlaySource() {
        if (this.options.layer === undefined && this.options.source === undefined) {
            this.olOverlaySource.clear(true);
        }
    }
    /**
     * Create a draw line control and add it to the map
     */
    addDrawLineControl() {
        this.drawLineControl = new DrawControl({
            geometryType: 'LineString',
            interactionStyle: this.options.drawStyle,
            maxPoints: 2
        });
        this.drawLineStart$$ = this.drawLineControl.start$
            .subscribe((olLine) => this.onDrawLineStart(olLine));
        this.drawLineEnd$$ = this.drawLineControl.end$
            .subscribe((olLine) => this.onDrawLineEnd(olLine));
        this.drawLineControl.setOlMap(this.olMap);
    }
    /**
     * Remove draw line control
     */
    removeDrawLineControl() {
        if (this.drawLineControl === undefined) {
            return;
        }
        this.drawLineStart$$.unsubscribe();
        this.drawLineEnd$$.unsubscribe();
        this.drawLineControl.getSource().clear(true);
        this.drawLineControl.setOlMap(undefined);
    }
    /**
     * Clear the draw source and track the geometry being draw
     * @param olLine Ol linestring or polygon
     */
    onDrawLineStart(olLine) {
        this.drawLineControl.getSource().clear(true);
    }
    /**
     * Slice the first geometry encountered with the drawn line
     * @param olLine Ol linestring
     */
    onDrawLineEnd(olLine) {
        const olSlicedGeometries = [];
        const lineExtent = olLine.getExtent();
        const olFeaturesToRemove = [];
        try {
            this.olOverlaySource.forEachFeatureInExtent(lineExtent, (olFeature) => {
                const olGeometry = olFeature.getGeometry();
                const olParts = sliceOlGeometry(olGeometry, olLine);
                if (olParts.length > 0) {
                    olSlicedGeometries.push(...olParts);
                    olFeaturesToRemove.push(olFeature);
                }
            });
        }
        catch (e) {
            if (e instanceof GeometrySliceError) {
                this.error$.next(e);
                return;
            }
            else {
                throw e;
            }
        }
        this.drawLineControl.getSource().clear(true);
        this.olOverlaySource.addFeatures(olSlicedGeometries.map((olGeometry) => new OlFeature(olGeometry)));
        olFeaturesToRemove.forEach((olFeature) => {
            this.olOverlaySource.removeFeature(olFeature);
        });
        this.error$.next(undefined);
        this.end$.next(olSlicedGeometries);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9nZW9tZXRyeS9zaGFyZWQvY29udHJvbHMvc2xpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBRW5DLE9BQU8sY0FBYyxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sYUFBYSxNQUFNLGlCQUFpQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBU3JDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQVk7SUE2Q3ZCLFlBQW9CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBM0NoRDs7V0FFRztRQUNJLFNBQUksR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVuRDs7V0FFRztRQUNJLFdBQU0sR0FBZ0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQW9DekQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBckJEOztPQUVHO0lBQ0gsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMs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LE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3BDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFlBQVksa0JBQWtCLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixPQUFPO2FBQ1I7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLENBQUM7YUFDVDtTQUNGO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQzlCLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQzlFLENBQUM7UUFDRixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFnQyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPbE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IE9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCB7IFN0eWxlTGlrZSBhcyBPbFN0eWxlTGlrZSB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCBPbFZlY3RvclNvdXJjZSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcbmltcG9ydCBPbFZlY3RvckxheWVyIGZyb20gJ29sL2xheWVyL1ZlY3Rvcic7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnknO1xuaW1wb3J0IE9sTGluZVN0cmluZyBmcm9tICdvbC9nZW9tL0xpbmVTdHJpbmcnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR2VvbWV0cnlTbGljZUVycm9yIH0gZnJvbSAnLi4vZ2VvbWV0cnkuZXJyb3JzJztcbmltcG9ydCB7IHNsaWNlT2xHZW9tZXRyeSB9IGZyb20gJy4uL2dlb21ldHJ5LnV0aWxzJztcbmltcG9ydCB7IERyYXdDb250cm9sIH0gZnJvbSAnLi9kcmF3JztcblxuZXhwb3J0IGludGVyZmFjZSBTbGljZUNvbnRyb2xPcHRpb25zIHtcbiAgc291cmNlPzogT2xWZWN0b3JTb3VyY2U8T2xHZW9tZXRyeT47XG4gIGxheWVyPzogT2xWZWN0b3JMYXllcjxPbFZlY3RvclNvdXJjZTxPbEdlb21ldHJ5Pj47XG4gIGxheWVyU3R5bGU/OiBPbFN0eWxlTGlrZTtcbiAgZHJhd1N0eWxlPzogT2xTdHlsZUxpa2U7XG59XG5cbi8qKlxuICogQ29udHJvbCB0byBtb2RpZnkgZ2VvbWV0cmllc1xuICovXG5leHBvcnQgY2xhc3MgU2xpY2VDb250cm9sIHtcblxuICAvKipcbiAgICogU2xpY2UgZW5kIG9ic2VydmFibGVcbiAgICovXG4gIHB1YmxpYyBlbmQkOiBTdWJqZWN0PE9sR2VvbWV0cnlbXT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKlxuICAgKiBTbGljZSBlcnJvciwgaWYgYW55XG4gICAqL1xuICBwdWJsaWMgZXJyb3IkOiBTdWJqZWN0PEdlb21ldHJ5U2xpY2VFcnJvcj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgb2xNYXA6IE9sTWFwO1xuICBwcml2YXRlIG9sT3ZlcmxheUxheWVyOiBPbFZlY3RvckxheWVyPE9sVmVjdG9yU291cmNlPE9sR2VvbWV0cnk+PjtcblxuICAvKipcbiAgICogRHJhdyBsaW5lIGNvbnRyb2xcbiAgICovXG4gIHByaXZhdGUgZHJhd0xpbmVDb250cm9sOiBEcmF3Q29udHJvbDtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIGRyYXcgc3RhcnRcbiAgICovXG4gIHByaXZhdGUgZHJhd0xpbmVTdGFydCQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byBkcmF3IGVuZFxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3TGluZUVuZCQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFdoZXRlciB0aGUgY29udHJvbCBpcyBhY3RpdmVcbiAgICovXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2xNYXAgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPTCBvdmVybGF5IHNvdXJjZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCBvbE92ZXJsYXlTb3VyY2UoKTogT2xWZWN0b3JTb3VyY2U8T2xHZW9tZXRyeT4ge1xuICAgIHJldHVybiB0aGlzLm9sT3ZlcmxheUxheWVyLmdldFNvdXJjZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiBTbGljZUNvbnRyb2xPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMubGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbE92ZXJsYXlMYXllciA9IG9wdGlvbnMubGF5ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2xPdmVybGF5TGF5ZXIgPSB0aGlzLmNyZWF0ZU9sSW5uZXJPdmVybGF5TGF5ZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9yIHJlbW92ZSB0aGlzIGNvbnRyb2wgdG8vZnJvbSBhIG1hcC5cbiAgICogQHBhcmFtIG1hcCBPTCBNYXBcbiAgICovXG4gIHNldE9sTWFwKG9sTWFwOiBPbE1hcCB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChvbE1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNsZWFyT2xJbm5lck92ZXJsYXlTb3VyY2UoKTtcbiAgICAgIHRoaXMucmVtb3ZlT2xJbm5lck92ZXJsYXlMYXllcigpO1xuICAgICAgdGhpcy5yZW1vdmVEcmF3TGluZUNvbnRyb2woKTtcbiAgICAgIHRoaXMub2xNYXAgPSBvbE1hcDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9sTWFwID0gb2xNYXA7XG4gICAgdGhpcy5hZGRPbElubmVyT3ZlcmxheUxheWVyKCk7XG4gICAgdGhpcy5hZGREcmF3TGluZUNvbnRyb2woKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG92ZXJsYXkgc291cmNlXG4gICAqL1xuICBnZXRTb3VyY2UoKTogT2xWZWN0b3JTb3VyY2U8T2xHZW9tZXRyeT4ge1xuICAgIHJldHVybiB0aGlzLm9sT3ZlcmxheVNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW4gT0wgZ2VvbWV0cnkgdG8gdGhlIG92ZXJsYXkgZm9yIHNsaWNpbmdcbiAgICogQHBhcmFtIG9sR2VvbWV0cnkgT2wgR2VvbWV0cnlcbiAgICovXG4gIHNldE9sR2VvbWV0cnkob2xHZW9tZXRyeTogT2xHZW9tZXRyeSkge1xuICAgIGNvbnN0IG9sRmVhdHVyZSA9IG5ldyBPbEZlYXR1cmUoe2dlb21ldHJ5OiBvbEdlb21ldHJ5fSk7XG4gICAgdGhpcy5vbE92ZXJsYXlTb3VyY2UuY2xlYXIodHJ1ZSk7XG4gICAgdGhpcy5vbE92ZXJsYXlTb3VyY2UuYWRkRmVhdHVyZShvbEZlYXR1cmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBvdmVybGF5IHNvdXJjZSBpZiBub25lIGlzIGRlZmluZWQgaW4gdGhlIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlT2xJbm5lck92ZXJsYXlMYXllcigpOiBPbFZlY3RvckxheWVyPE9sVmVjdG9yU291cmNlPE9sR2VvbWV0cnk+PiB7XG4gICAgcmV0dXJuIG5ldyBPbFZlY3RvckxheWVyKHtcbiAgICAgIHNvdXJjZTogdGhpcy5vcHRpb25zLnNvdXJjZSA/IHRoaXMub3B0aW9ucy5zb3VyY2UgOiBuZXcgT2xWZWN0b3JTb3VyY2UoKSxcbiAgICAgIHN0eWxlOiB0aGlzLm9wdGlvbnMubGF5ZXJTdHlsZSxcbiAgICAgIHpJbmRleDogNTAwXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIG92ZXJsYXkgbGF5ZXIgaWYgaXQgd2Fzbid0IGRlZmluZWQgaW4gdGhlIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlT2xJbm5lck92ZXJsYXlMYXllcigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxheWVyID09PSB1bmRlZmluZWQgJiYgdGhpcy5vbE1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9sTWFwLnJlbW92ZUxheWVyKHRoaXMub2xPdmVybGF5TGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIG92ZXJsYXkgbGF5ZXIgaWYgaXQgd2Fzbid0IGRlZmluZWQgaW4gdGhlIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgYWRkT2xJbm5lck92ZXJsYXlMYXllcigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2xNYXAuYWRkTGF5ZXIodGhpcy5vbE92ZXJsYXlMYXllcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBvdmVybGF5IHNvdXJjZSBpZiBpdCB3YXNuJ3QgZGVmaW5lZCBpbiB0aGUgb3B0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBjbGVhck9sSW5uZXJPdmVybGF5U291cmNlKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGF5ZXIgPT09IHVuZGVmaW5lZCAmJiB0aGlzLm9wdGlvbnMuc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2xPdmVybGF5U291cmNlLmNsZWFyKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkcmF3IGxpbmUgY29udHJvbCBhbmQgYWRkIGl0IHRvIHRoZSBtYXBcbiAgICovXG4gIHByaXZhdGUgYWRkRHJhd0xpbmVDb250cm9sKCkge1xuICAgIHRoaXMuZHJhd0xpbmVDb250cm9sID0gbmV3IERyYXdDb250cm9sKHtcbiAgICAgIGdlb21ldHJ5VHlwZTogJ0xpbmVTdHJpbmcnLFxuICAgICAgaW50ZXJhY3Rpb25TdHlsZTogdGhpcy5vcHRpb25zLmRyYXdTdHlsZSxcbiAgICAgIG1heFBvaW50czogMlxuICAgIH0pO1xuICAgIHRoaXMuZHJhd0xpbmVTdGFydCQkID0gdGhpcy5kcmF3TGluZUNvbnRyb2wuc3RhcnQkXG4gICAgICAuc3Vic2NyaWJlKChvbExpbmU6IE9sTGluZVN0cmluZykgPT4gdGhpcy5vbkRyYXdMaW5lU3RhcnQob2xMaW5lKSk7XG4gICAgdGhpcy5kcmF3TGluZUVuZCQkID0gdGhpcy5kcmF3TGluZUNvbnRyb2wuZW5kJFxuICAgICAgLnN1YnNjcmliZSgob2xMaW5lOiBPbExpbmVTdHJpbmcpID0+IHRoaXMub25EcmF3TGluZUVuZChvbExpbmUpKTtcbiAgICB0aGlzLmRyYXdMaW5lQ29udHJvbC5zZXRPbE1hcCh0aGlzLm9sTWFwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZHJhdyBsaW5lIGNvbnRyb2xcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlRHJhd0xpbmVDb250cm9sKCkge1xuICAgIGlmICh0aGlzLmRyYXdMaW5lQ29udHJvbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3TGluZVN0YXJ0JCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRyYXdMaW5lRW5kJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRyYXdMaW5lQ29udHJvbC5nZXRTb3VyY2UoKS5jbGVhcih0cnVlKTtcbiAgICB0aGlzLmRyYXdMaW5lQ29udHJvbC5zZXRPbE1hcCh1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBkcmF3IHNvdXJjZSBhbmQgdHJhY2sgdGhlIGdlb21ldHJ5IGJlaW5nIGRyYXdcbiAgICogQHBhcmFtIG9sTGluZSBPbCBsaW5lc3RyaW5nIG9yIHBvbHlnb25cbiAgICovXG4gIHByaXZhdGUgb25EcmF3TGluZVN0YXJ0KG9sTGluZTogT2xMaW5lU3RyaW5nKSB7XG4gICAgdGhpcy5kcmF3TGluZUNvbnRyb2wuZ2V0U291cmNlKCkuY2xlYXIodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2xpY2UgdGhlIGZpcnN0IGdlb21ldHJ5IGVuY291bnRlcmVkIHdpdGggdGhlIGRyYXduIGxpbmVcbiAgICogQHBhcmFtIG9sTGluZSBPbCBsaW5lc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIG9uRHJhd0xpbmVFbmQob2xMaW5lOiBPbExpbmVTdHJpbmcpIHtcbiAgICBjb25zdCBvbFNsaWNlZEdlb21ldHJpZXMgPSBbXTtcbiAgICBjb25zdCBsaW5lRXh0ZW50ID0gb2xMaW5lLmdldEV4dGVudCgpO1xuXG4gICAgY29uc3Qgb2xGZWF0dXJlc1RvUmVtb3ZlID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMub2xPdmVybGF5U291cmNlLmZvckVhY2hGZWF0dXJlSW5FeHRlbnQobGluZUV4dGVudCwgKG9sRmVhdHVyZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IG9sR2VvbWV0cnkgPSBvbEZlYXR1cmUuZ2V0R2VvbWV0cnkoKSBhcyBhbnk7XG4gICAgICAgIGNvbnN0IG9sUGFydHMgPSBzbGljZU9sR2VvbWV0cnkob2xHZW9tZXRyeSwgb2xMaW5lKTtcbiAgICAgICAgaWYgKG9sUGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG9sU2xpY2VkR2VvbWV0cmllcy5wdXNoKC4uLm9sUGFydHMpO1xuICAgICAgICAgIG9sRmVhdHVyZXNUb1JlbW92ZS5wdXNoKG9sRmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgR2VvbWV0cnlTbGljZUVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IkLm5leHQoZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3TGluZUNvbnRyb2wuZ2V0U291cmNlKCkuY2xlYXIodHJ1ZSk7XG5cbiAgICB0aGlzLm9sT3ZlcmxheVNvdXJjZS5hZGRGZWF0dXJlcyhcbiAgICAgIG9sU2xpY2VkR2VvbWV0cmllcy5tYXAoKG9sR2VvbWV0cnk6IE9sR2VvbWV0cnkpID0+IG5ldyBPbEZlYXR1cmUob2xHZW9tZXRyeSkpXG4gICAgKTtcbiAgICBvbEZlYXR1cmVzVG9SZW1vdmUuZm9yRWFjaCgob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pID0+IHtcbiAgICAgIHRoaXMub2xPdmVybGF5U291cmNlLnJlbW92ZUZlYXR1cmUob2xGZWF0dXJlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZXJyb3IkLm5leHQodW5kZWZpbmVkKTtcbiAgICB0aGlzLmVuZCQubmV4dChvbFNsaWNlZEdlb21ldHJpZXMpO1xuICB9XG59XG4iXX0=