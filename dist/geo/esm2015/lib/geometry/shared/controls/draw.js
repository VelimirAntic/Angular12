import OlVectorSource from 'ol/source/Vector';
import OlVectorLayer from 'ol/layer/Vector';
import OlDraw from 'ol/interaction/Draw';
import OlModify from 'ol/interaction/Modify';
import OlSelect from 'ol/interaction/Select';
import { unByKey } from 'ol/Observable';
import { doubleClick } from 'ol/events/condition';
import { Subject, fromEvent, BehaviorSubject } from 'rxjs';
import { getMousePositionFromOlGeometryEvent } from '../geometry.utils';
/**
 * Control to draw entities
 */
export class DrawControl {
    constructor(options) {
        this.options = options;
        /**
         * Draw start observable
         */
        this.start$ = new Subject();
        /**
         * Draw end observable
         */
        this.end$ = new Subject();
        /**
         * Draw changes observable (while drawing)
         */
        this.changes$ = new Subject();
        /**
         * Draw modify observable (modify drawn features)
         */
        this.modify$ = new Subject();
        /**
         * Draw select observable (modify drawn features)
         */
        this.select$ = new Subject();
        /**
         * Draw abort observable (abort drawn features)
         */
        this.abort$ = new Subject();
        /**
         * Freehand mode observable (defaults to false)
         */
        this.freehand$ = new BehaviorSubject(false);
        this.olDrawingLayer = options.drawingLayer ? options.drawingLayer : this.createOlInnerOverlayLayer();
        this.olGeometryType = this.options.geometryType;
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
    get olDrawingLayerSource() {
        return this.olDrawingLayer.getSource();
    }
    /**
     * Add or remove this control to/from a map.
     * @param map OL Map
     */
    setOlMap(olMap, activateModifyAndSelect) {
        if (!olMap) {
            this.clearOlInnerOverlaySource();
            this.removeOlInnerOverlayLayer();
            this.removeOlInteractions();
            this.olMap = olMap;
            return;
        }
        this.olMap = olMap;
        this.addOlInnerOverlayLayer();
        this.addOlInteractions(activateModifyAndSelect);
    }
    /**
     * Return the drawing layer source
     */
    getSource() {
        return this.olDrawingLayerSource;
    }
    /**
     * Set the current geometry type
     * @param geometryType the geometry type
     */
    setGeometryType(geometryType) {
        this.olGeometryType = geometryType;
    }
    /**
     * Create a drawing source if none is defined in the options
     */
    createOlInnerOverlayLayer() {
        return new OlVectorLayer({
            source: this.options.drawingLayerSource ? this.options.drawingLayerSource : new OlVectorSource(),
            style: this.options.drawingLayerStyle,
            zIndex: 500
        });
    }
    /**
     * Clear the drawing layer if it wasn't defined in the options
     */
    removeOlInnerOverlayLayer() {
        if (!this.options.drawingLayer && this.olMap) {
            this.olMap.removeLayer(this.olDrawingLayer);
        }
    }
    /**
     * Add the drawing layer if it wasn't defined in the options
     */
    addOlInnerOverlayLayer() {
        if (!this.options.drawingLayer) {
            this.olMap.addLayer(this.olDrawingLayer);
        }
    }
    /**
     * Clear the drawing layer source if it wasn't defined in the options
     */
    clearOlInnerOverlaySource() {
        if (!this.options.drawingLayer && !this.options.drawingLayerSource) {
            this.olDrawingLayerSource.clear(true);
        }
    }
    /**
     * Add interactions to the map an set up some listeners
     */
    addOlInteractions(activateModifyAndSelect) {
        // Create Draw interaction
        let olDrawInteraction;
        if (!this.freehand$.getValue()) {
            olDrawInteraction = new OlDraw({
                type: this.olGeometryType,
                source: this.getSource(),
                stopClick: true,
                style: this.options.interactionStyle,
                maxPoints: this.options.maxPoints,
                freehand: false,
                freehandCondition: () => false
            });
        }
        else {
            if (this.olGeometryType === 'Point') {
                olDrawInteraction = new OlDraw({
                    type: 'Circle',
                    source: this.getSource(),
                    maxPoints: this.options.maxPoints,
                    freehand: true
                });
            }
            else {
                olDrawInteraction = new OlDraw({
                    type: this.olGeometryType,
                    source: this.getSource(),
                    maxPoints: this.options.maxPoints,
                    freehand: true
                });
            }
        }
        // Add Draw interaction to map and create listeners
        this.olMap.addInteraction(olDrawInteraction);
        this.olDrawInteraction = olDrawInteraction;
        this.onDrawStartKey = olDrawInteraction.on('drawstart', (event) => this.onDrawStart(event));
        this.onDrawEndKey = olDrawInteraction.on('drawend', (event) => this.onDrawEnd(event));
        this.onDrawAbortKey = olDrawInteraction.on('drawabort', (event) => this.abort$.next(event.feature.getGeometry()));
        if (activateModifyAndSelect) {
            // Create a Modify interaction, add it to map and create a listener
            const olModifyInteraction = new OlModify({
                source: this.getSource()
            });
            this.olMap.addInteraction(olModifyInteraction);
            this.olModifyInteraction = olModifyInteraction;
            // Create a select interaction and add it to map
            if (!this.olSelectInteraction) {
                const olSelectInteraction = new OlSelect({
                    condition: doubleClick,
                    style: undefined
                });
                this.olMap.addInteraction(olSelectInteraction);
                this.olSelectInteraction = olSelectInteraction;
                this.olSelectInteraction.on('select', (event) => this.onSelect(event));
            }
        }
    }
    /**
     * Remove interactions
     */
    removeOlInteractions() {
        this.unsubscribeKeyDown();
        unByKey([this.onDrawStartKey, this.onDrawEndKey, this.onDrawKey, this.onDrawAbortKey]);
        if (this.olMap) {
            this.olMap.removeInteraction(this.olDrawInteraction);
            this.olMap.removeInteraction(this.olModifyInteraction);
        }
        this.olDrawInteraction = undefined;
        this.olModifyInteraction = undefined;
    }
    /**
     * When drawing starts, clear the overlay and start watching for changes
     * @param event Draw start event
     */
    onDrawStart(event) {
        const olGeometry = event.feature.getGeometry();
        this.start$.next(olGeometry);
        this.clearOlInnerOverlaySource();
        this.onDrawKey = olGeometry.on('change', (olGeometryEvent) => {
            this.mousePosition = getMousePositionFromOlGeometryEvent(olGeometryEvent);
            this.changes$.next(olGeometryEvent.target);
        });
        this.subscribeKeyDown();
    }
    /**
     * When drawing ends, update the drawing (feature) geometry observable and add
     * @param event Draw event (drawend)
     */
    onDrawEnd(event) {
        this.unsubscribeKeyDown();
        unByKey(this.onDrawKey);
        const olGeometry = event.feature.getGeometry();
        olGeometry.on('change', () => {
            this.modify$.next(olGeometry);
        });
        this.end$.next(olGeometry);
    }
    /**
     * When a feature is selected, update the selected feature observable
     * @param event Modify event (modifyend)
     */
    onSelect(event) {
        if (event.selected.length === 1) {
            this.select$.next(event.selected[0]);
        }
    }
    /**
     * Subscribe to key downs used as drawing interaction shorcuts
     */
    subscribeKeyDown() {
        this.unsubscribeKeyDown();
        this.keyDown$$ = fromEvent(document, 'keydown').subscribe((event) => {
            // On Escape or 'c' keydowns, abort the current drawing
            if (event.key === 'Escape') {
                this.olDrawInteraction.abortDrawing();
                return;
            }
            // On Backspace or 'u' keydowns, remove last vertex of current drawing
            if (event.key === 'Backspace') {
                this.olDrawInteraction.removeLastPoint();
            }
            // On Enter or 'f' keydowns, finish current drawing
            if (event.key === 'Enter') {
                this.olDrawInteraction.finishDrawing();
            }
            // On space bar key down, pan to the current mouse position
            if (event.key === ' ') {
                this.olMap.getView().animate({
                    center: this.mousePosition,
                    duration: 100
                });
                return;
            }
        });
    }
    /**
     * Unsubscribe to key down
     */
    unsubscribeKeyDown() {
        if (this.keyDown$$) {
            this.keyDown$$.unsubscribe();
            this.keyDown$$ = undefined;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2dlb21ldHJ5L3NoYXJlZC9jb250cm9scy9kcmF3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sY0FBYyxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sYUFBYSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sTUFBTSxNQUFNLHFCQUFxQixDQUFDO0FBRXpDLE9BQU8sUUFBUSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sUUFBUSxNQUFNLHVCQUF1QixDQUFDO0FBSTdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxELE9BQU8sRUFBRSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFekUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFXeEU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sV0FBVztJQWtFdEIsWUFBb0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFqRS9DOztXQUVHO1FBQ0ksV0FBTSxHQUF3QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRW5EOztXQUVHO1FBQ0ksU0FBSSxHQUF3QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWpEOztXQUVHO1FBQ0ksYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTlDOztXQUVHO1FBQ0ksWUFBTyxHQUF3QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXBEOztXQUVHO1FBQ0ksWUFBTyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTdDOztXQUVHO1FBQ08sV0FBTSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRS9DOztXQUVHO1FBQ0gsY0FB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RDtZQUMzRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO29CQUMxQixRQUFRLEVBQUUsR0FBRztpQkFDZCxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxrQkFBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudHNLZXkgfSBmcm9tICdvbC9ldmVudHMnO1xuaW1wb3J0IE9sTWFwIGZyb20gJ29sL01hcCc7XG5pbXBvcnQgeyBTdHlsZUxpa2UgYXMgT2xTdHlsZUxpa2UgfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeVR5cGUgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5VHlwZSc7XG5pbXBvcnQgT2xWZWN0b3JTb3VyY2UgZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5pbXBvcnQgT2xWZWN0b3JMYXllciBmcm9tICdvbC9sYXllci9WZWN0b3InO1xuaW1wb3J0IE9sRHJhdyBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5pbXBvcnQgT2xNb2RpZnkgZnJvbSAnb2wvaW50ZXJhY3Rpb24vTW9kaWZ5JztcbmltcG9ydCBPbFNlbGVjdCBmcm9tICdvbC9pbnRlcmFjdGlvbi9TZWxlY3QnO1xuaW1wb3J0IEJhc2ljRXZlbnQgZnJvbSAnb2wvZXZlbnRzL0V2ZW50JztcbmltcG9ydCB7IERyYXdFdmVudCBhcyBPbERyYXdFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL0RyYXcnO1xuaW1wb3J0IHsgU2VsZWN0RXZlbnQgYXMgT2xTZWxlY3RFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL1NlbGVjdCc7XG5pbXBvcnQgeyB1bkJ5S2V5IH0gZnJvbSAnb2wvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBkb3VibGVDbGljayB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGdldE1vdXNlUG9zaXRpb25Gcm9tT2xHZW9tZXRyeUV2ZW50IH0gZnJvbSAnLi4vZ2VvbWV0cnkudXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdDb250cm9sT3B0aW9ucyB7XG4gIGdlb21ldHJ5VHlwZTogdHlwZW9mIE9sR2VvbWV0cnlUeXBlIHwgc3RyaW5nO1xuICBkcmF3aW5nTGF5ZXJTb3VyY2U/OiBPbFZlY3RvclNvdXJjZTxPbEdlb21ldHJ5PjtcbiAgZHJhd2luZ0xheWVyPzogT2xWZWN0b3JMYXllcjxPbFZlY3RvclNvdXJjZTxPbEdlb21ldHJ5Pj47XG4gIGRyYXdpbmdMYXllclN0eWxlPzogT2xTdHlsZUxpa2U7XG4gIGludGVyYWN0aW9uU3R5bGU/OiBPbFN0eWxlTGlrZTtcbiAgbWF4UG9pbnRzPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIENvbnRyb2wgdG8gZHJhdyBlbnRpdGllc1xuICovXG5leHBvcnQgY2xhc3MgRHJhd0NvbnRyb2wge1xuICAvKipcbiAgICogRHJhdyBzdGFydCBvYnNlcnZhYmxlXG4gICAqL1xuICBwdWJsaWMgc3RhcnQkOiBTdWJqZWN0PE9sR2VvbWV0cnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKipcbiAgICogRHJhdyBlbmQgb2JzZXJ2YWJsZVxuICAgKi9cbiAgcHVibGljIGVuZCQ6IFN1YmplY3Q8T2xHZW9tZXRyeT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKlxuICAgKiBEcmF3IGNoYW5nZXMgb2JzZXJ2YWJsZSAod2hpbGUgZHJhd2luZylcbiAgICovXG4gIHB1YmxpYyBjaGFuZ2VzJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKipcbiAgICogRHJhdyBtb2RpZnkgb2JzZXJ2YWJsZSAobW9kaWZ5IGRyYXduIGZlYXR1cmVzKVxuICAgKi9cbiAgcHVibGljIG1vZGlmeSQ6IFN1YmplY3Q8T2xHZW9tZXRyeT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKlxuICAgKiBEcmF3IHNlbGVjdCBvYnNlcnZhYmxlIChtb2RpZnkgZHJhd24gZmVhdHVyZXMpXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKipcbiAgICogRHJhdyBhYm9ydCBvYnNlcnZhYmxlIChhYm9ydCBkcmF3biBmZWF0dXJlcylcbiAgICovXG4gICAgIHB1YmxpYyBhYm9ydCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqXG4gICAqIEZyZWVoYW5kIG1vZGUgb2JzZXJ2YWJsZSAoZGVmYXVsdHMgdG8gZmFsc2UpXG4gICAqL1xuICBmcmVlaGFuZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIHByaXZhdGUga2V5RG93biQkOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBvbEdlb21ldHJ5VHlwZTogdHlwZW9mIE9sR2VvbWV0cnlUeXBlIHwgdW5kZWZpbmVkIHwgc3RyaW5nO1xuICBwcml2YXRlIG9sTWFwOiBPbE1hcDtcbiAgcHJpdmF0ZSBvbERyYXdpbmdMYXllcjogT2xWZWN0b3JMYXllcjxPbFZlY3RvclNvdXJjZTxPbEdlb21ldHJ5Pj47XG4gIHByaXZhdGUgb2xEcmF3SW50ZXJhY3Rpb246IE9sRHJhdztcbiAgcHJpdmF0ZSBvbFNlbGVjdEludGVyYWN0aW9uOiBPbFNlbGVjdDtcbiAgcHJpdmF0ZSBvbE1vZGlmeUludGVyYWN0aW9uOiBPbE1vZGlmeTtcbiAgcHJpdmF0ZSBvbkRyYXdTdGFydEtleTogRXZlbnRzS2V5O1xuICBwcml2YXRlIG9uRHJhd0VuZEtleTogRXZlbnRzS2V5O1xuICBwcml2YXRlIG9uRHJhd0Fib3J0S2V5OiBFdmVudHNLZXk7XG4gIHByaXZhdGUgb25EcmF3S2V5OiBFdmVudHNLZXk7XG5cbiAgcHJpdmF0ZSBtb3VzZVBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIC8qKlxuICAgKiBXaGV0ZXIgdGhlIGNvbnRyb2wgaXMgYWN0aXZlXG4gICAqL1xuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9sTWFwICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogT0wgb3ZlcmxheSBzb3VyY2VcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgb2xEcmF3aW5nTGF5ZXJTb3VyY2UoKTogT2xWZWN0b3JTb3VyY2U8T2xHZW9tZXRyeT4ge1xuICAgIHJldHVybiB0aGlzLm9sRHJhd2luZ0xheWVyLmdldFNvdXJjZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiBEcmF3Q29udHJvbE9wdGlvbnMpIHtcbiAgICB0aGlzLm9sRHJhd2luZ0xheWVyID0gb3B0aW9ucy5kcmF3aW5nTGF5ZXIgPyBvcHRpb25zLmRyYXdpbmdMYXllciA6IHRoaXMuY3JlYXRlT2xJbm5lck92ZXJsYXlMYXllcigpO1xuICAgIHRoaXMub2xHZW9tZXRyeVR5cGUgPSB0aGlzLm9wdGlvbnMuZ2VvbWV0cnlUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvciByZW1vdmUgdGhpcyBjb250cm9sIHRvL2Zyb20gYSBtYXAuXG4gICAqIEBwYXJhbSBtYXAgT0wgTWFwXG4gICAqL1xuICBzZXRPbE1hcChvbE1hcDogT2xNYXAgfCB1bmRlZmluZWQsIGFjdGl2YXRlTW9kaWZ5QW5kU2VsZWN0PzogYm9vbGVhbikge1xuICAgIGlmICghb2xNYXApIHtcbiAgICAgIHRoaXMuY2xlYXJPbElubmVyT3ZlcmxheVNvdXJjZSgpO1xuICAgICAgdGhpcy5yZW1vdmVPbElubmVyT3ZlcmxheUxheWVyKCk7XG4gICAgICB0aGlzLnJlbW92ZU9sSW50ZXJhY3Rpb25zKCk7XG4gICAgICB0aGlzLm9sTWFwID0gb2xNYXA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbE1hcCA9IG9sTWFwO1xuICAgIHRoaXMuYWRkT2xJbm5lck92ZXJsYXlMYXllcigpO1xuICAgIHRoaXMuYWRkT2xJbnRlcmFjdGlvbnMoYWN0aXZhdGVNb2RpZnlBbmRTZWxlY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZHJhd2luZyBsYXllciBzb3VyY2VcbiAgICovXG4gIGdldFNvdXJjZSgpOiBPbFZlY3RvclNvdXJjZTxPbEdlb21ldHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMub2xEcmF3aW5nTGF5ZXJTb3VyY2U7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjdXJyZW50IGdlb21ldHJ5IHR5cGVcbiAgICogQHBhcmFtIGdlb21ldHJ5VHlwZSB0aGUgZ2VvbWV0cnkgdHlwZVxuICAgKi9cbiAgc2V0R2VvbWV0cnlUeXBlKGdlb21ldHJ5VHlwZTogdHlwZW9mIE9sR2VvbWV0cnlUeXBlKSB7XG4gICAgdGhpcy5vbEdlb21ldHJ5VHlwZSA9IGdlb21ldHJ5VHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkcmF3aW5nIHNvdXJjZSBpZiBub25lIGlzIGRlZmluZWQgaW4gdGhlIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlT2xJbm5lck92ZXJsYXlMYXllcigpOiBPbFZlY3RvckxheWVyPE9sVmVjdG9yU291cmNlPE9sR2VvbWV0cnk+PiB7XG4gICAgcmV0dXJuIG5ldyBPbFZlY3RvckxheWVyKHtcbiAgICAgIHNvdXJjZTogdGhpcy5vcHRpb25zLmRyYXdpbmdMYXllclNvdXJjZSA/IHRoaXMub3B0aW9ucy5kcmF3aW5nTGF5ZXJTb3VyY2UgOiBuZXcgT2xWZWN0b3JTb3VyY2UoKSxcbiAgICAgIHN0eWxlOiB0aGlzLm9wdGlvbnMuZHJhd2luZ0xheWVyU3R5bGUsXG4gICAgICB6SW5kZXg6IDUwMFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBkcmF3aW5nIGxheWVyIGlmIGl0IHdhc24ndCBkZWZpbmVkIGluIHRoZSBvcHRpb25zXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZU9sSW5uZXJPdmVybGF5TGF5ZXIoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZHJhd2luZ0xheWVyICYmIHRoaXMub2xNYXApIHtcbiAgICAgIHRoaXMub2xNYXAucmVtb3ZlTGF5ZXIodGhpcy5vbERyYXdpbmdMYXllcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgZHJhd2luZyBsYXllciBpZiBpdCB3YXNuJ3QgZGVmaW5lZCBpbiB0aGUgb3B0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBhZGRPbElubmVyT3ZlcmxheUxheWVyKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmRyYXdpbmdMYXllcikge1xuICAgICAgdGhpcy5vbE1hcC5hZGRMYXllcih0aGlzLm9sRHJhd2luZ0xheWVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGRyYXdpbmcgbGF5ZXIgc291cmNlIGlmIGl0IHdhc24ndCBkZWZpbmVkIGluIHRoZSBvcHRpb25zXG4gICAqL1xuICBwcml2YXRlIGNsZWFyT2xJbm5lck92ZXJsYXlTb3VyY2UoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZHJhd2luZ0xheWVyICYmICF0aGlzLm9wdGlvbnMuZHJhd2luZ0xheWVyU291cmNlKSB7XG4gICAgICB0aGlzLm9sRHJhd2luZ0xheWVyU291cmNlLmNsZWFyKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaW50ZXJhY3Rpb25zIHRvIHRoZSBtYXAgYW4gc2V0IHVwIHNvbWUgbGlzdGVuZXJzXG4gICAqL1xuICBhZGRPbEludGVyYWN0aW9ucyhhY3RpdmF0ZU1vZGlmeUFuZFNlbGVjdD86IGJvb2xlYW4pIHtcbiAgICAvLyBDcmVhdGUgRHJhdyBpbnRlcmFjdGlvblxuICAgIGxldCBvbERyYXdJbnRlcmFjdGlvbjtcbiAgICBpZiAoIXRoaXMuZnJlZWhhbmQkLmdldFZhbHVlKCkpIHtcbiAgICAgIG9sRHJhd0ludGVyYWN0aW9uID0gbmV3IE9sRHJhdyh7XG4gICAgICAgIHR5cGU6IHRoaXMub2xHZW9tZXRyeVR5cGUsXG4gICAgICAgIHNvdXJjZTogdGhpcy5nZXRTb3VyY2UoKSxcbiAgICAgICAgc3RvcENsaWNrOiB0cnVlLFxuICAgICAgICBzdHlsZTogdGhpcy5vcHRpb25zLmludGVyYWN0aW9uU3R5bGUsXG4gICAgICAgIG1heFBvaW50czogdGhpcy5vcHRpb25zLm1heFBvaW50cyxcbiAgICAgICAgZnJlZWhhbmQ6IGZhbHNlLFxuICAgICAgICBmcmVlaGFuZENvbmRpdGlvbjogKCkgPT4gZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm9sR2VvbWV0cnlUeXBlID09PSAnUG9pbnQnKSB7XG4gICAgICAgIG9sRHJhd0ludGVyYWN0aW9uID0gbmV3IE9sRHJhdyh7XG4gICAgICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICAgICAgc291cmNlOiB0aGlzLmdldFNvdXJjZSgpLFxuICAgICAgICAgIG1heFBvaW50czogdGhpcy5vcHRpb25zLm1heFBvaW50cyxcbiAgICAgICAgICBmcmVlaGFuZDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2xEcmF3SW50ZXJhY3Rpb24gPSBuZXcgT2xEcmF3KHtcbiAgICAgICAgICB0eXBlOiB0aGlzLm9sR2VvbWV0cnlUeXBlLFxuICAgICAgICAgIHNvdXJjZTogdGhpcy5nZXRTb3VyY2UoKSxcbiAgICAgICAgICBtYXhQb2ludHM6IHRoaXMub3B0aW9ucy5tYXhQb2ludHMsXG4gICAgICAgICAgZnJlZWhhbmQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIERyYXcgaW50ZXJhY3Rpb24gdG8gbWFwIGFuZCBjcmVhdGUgbGlzdGVuZXJzXG4gICAgdGhpcy5vbE1hcC5hZGRJbnRlcmFjdGlvbihvbERyYXdJbnRlcmFjdGlvbik7XG4gICAgdGhpcy5vbERyYXdJbnRlcmFjdGlvbiA9IG9sRHJhd0ludGVyYWN0aW9uO1xuXG4gICAgdGhpcy5vbkRyYXdTdGFydEtleSA9IG9sRHJhd0ludGVyYWN0aW9uLm9uKCdkcmF3c3RhcnQnLCAoZXZlbnQ6IE9sRHJhd0V2ZW50KSA9PiB0aGlzLm9uRHJhd1N0YXJ0KGV2ZW50KSk7XG4gICAgdGhpcy5vbkRyYXdFbmRLZXkgPSBvbERyYXdJbnRlcmFjdGlvbi5vbignZHJhd2VuZCcsIChldmVudDogT2xEcmF3RXZlbnQpID0+IHRoaXMub25EcmF3RW5kKGV2ZW50KSk7XG4gICAgdGhpcy5vbkRyYXdBYm9ydEtleSA9IG9sRHJhd0ludGVyYWN0aW9uLm9uKCdkcmF3YWJvcnQnLCAoZXZlbnQ6IE9sRHJhd0V2ZW50KSA9PiB0aGlzLmFib3J0JC5uZXh0KGV2ZW50LmZlYXR1cmUuZ2V0R2VvbWV0cnkoKSkpO1xuXG4gICAgaWYgKGFjdGl2YXRlTW9kaWZ5QW5kU2VsZWN0KSB7XG4gICAgICAvLyBDcmVhdGUgYSBNb2RpZnkgaW50ZXJhY3Rpb24sIGFkZCBpdCB0byBtYXAgYW5kIGNyZWF0ZSBhIGxpc3RlbmVyXG4gICAgICBjb25zdCBvbE1vZGlmeUludGVyYWN0aW9uID0gbmV3IE9sTW9kaWZ5KHtcbiAgICAgICAgc291cmNlOiB0aGlzLmdldFNvdXJjZSgpXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5vbE1hcC5hZGRJbnRlcmFjdGlvbihvbE1vZGlmeUludGVyYWN0aW9uKTtcbiAgICAgIHRoaXMub2xNb2RpZnlJbnRlcmFjdGlvbiA9IG9sTW9kaWZ5SW50ZXJhY3Rpb247XG5cbiAgICAgIC8vIENyZWF0ZSBhIHNlbGVjdCBpbnRlcmFjdGlvbiBhbmQgYWRkIGl0IHRvIG1hcFxuICAgICAgaWYgKCF0aGlzLm9sU2VsZWN0SW50ZXJhY3Rpb24pIHtcbiAgICAgICAgY29uc3Qgb2xTZWxlY3RJbnRlcmFjdGlvbiA9IG5ldyBPbFNlbGVjdCh7XG4gICAgICAgICAgY29uZGl0aW9uOiBkb3VibGVDbGljayxcbiAgICAgICAgICBzdHlsZTogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9sTWFwLmFkZEludGVyYWN0aW9uKG9sU2VsZWN0SW50ZXJhY3Rpb24pO1xuICAgICAgICB0aGlzLm9sU2VsZWN0SW50ZXJhY3Rpb24gPSBvbFNlbGVjdEludGVyYWN0aW9uO1xuXG4gICAgICAgIHRoaXMub2xTZWxlY3RJbnRlcmFjdGlvbi5vbignc2VsZWN0JywgKGV2ZW50OiBPbFNlbGVjdEV2ZW50KSA9PiB0aGlzLm9uU2VsZWN0KGV2ZW50KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnRlcmFjdGlvbnNcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlT2xJbnRlcmFjdGlvbnMoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZUtleURvd24oKTtcbiAgICB1bkJ5S2V5KFt0aGlzLm9uRHJhd1N0YXJ0S2V5LCB0aGlzLm9uRHJhd0VuZEtleSwgdGhpcy5vbkRyYXdLZXksIHRoaXMub25EcmF3QWJvcnRLZXldKTtcblxuICAgIGlmICh0aGlzLm9sTWFwKSB7XG4gICAgICB0aGlzLm9sTWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMub2xEcmF3SW50ZXJhY3Rpb24pO1xuICAgICAgdGhpcy5vbE1hcC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLm9sTW9kaWZ5SW50ZXJhY3Rpb24pO1xuICAgIH1cblxuICAgIHRoaXMub2xEcmF3SW50ZXJhY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbE1vZGlmeUludGVyYWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZHJhd2luZyBzdGFydHMsIGNsZWFyIHRoZSBvdmVybGF5IGFuZCBzdGFydCB3YXRjaGluZyBmb3IgY2hhbmdlc1xuICAgKiBAcGFyYW0gZXZlbnQgRHJhdyBzdGFydCBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbkRyYXdTdGFydChldmVudDogT2xEcmF3RXZlbnQpIHtcbiAgICBjb25zdCBvbEdlb21ldHJ5ID0gZXZlbnQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgIHRoaXMuc3RhcnQkLm5leHQob2xHZW9tZXRyeSk7XG4gICAgdGhpcy5jbGVhck9sSW5uZXJPdmVybGF5U291cmNlKCk7XG4gICAgdGhpcy5vbkRyYXdLZXkgPSBvbEdlb21ldHJ5Lm9uKCdjaGFuZ2UnLCAob2xHZW9tZXRyeUV2ZW50OiBCYXNpY0V2ZW50KSA9PiB7XG4gICAgICB0aGlzLm1vdXNlUG9zaXRpb24gPSBnZXRNb3VzZVBvc2l0aW9uRnJvbU9sR2VvbWV0cnlFdmVudChvbEdlb21ldHJ5RXZlbnQpO1xuICAgICAgdGhpcy5jaGFuZ2VzJC5uZXh0KG9sR2VvbWV0cnlFdmVudC50YXJnZXQpO1xuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaWJlS2V5RG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZHJhd2luZyBlbmRzLCB1cGRhdGUgdGhlIGRyYXdpbmcgKGZlYXR1cmUpIGdlb21ldHJ5IG9ic2VydmFibGUgYW5kIGFkZFxuICAgKiBAcGFyYW0gZXZlbnQgRHJhdyBldmVudCAoZHJhd2VuZClcbiAgICovXG4gIHByaXZhdGUgb25EcmF3RW5kKGV2ZW50OiBPbERyYXdFdmVudCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmVLZXlEb3duKCk7XG4gICAgdW5CeUtleSh0aGlzLm9uRHJhd0tleSk7XG4gICAgY29uc3Qgb2xHZW9tZXRyeSA9IGV2ZW50LmZlYXR1cmUuZ2V0R2VvbWV0cnkoKTtcbiAgICBvbEdlb21ldHJ5Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLm1vZGlmeSQubmV4dChvbEdlb21ldHJ5KTtcbiAgICB9KTtcbiAgICB0aGlzLmVuZCQubmV4dChvbEdlb21ldHJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgZmVhdHVyZSBpcyBzZWxlY3RlZCwgdXBkYXRlIHRoZSBzZWxlY3RlZCBmZWF0dXJlIG9ic2VydmFibGVcbiAgICogQHBhcmFtIGV2ZW50IE1vZGlmeSBldmVudCAobW9kaWZ5ZW5kKVxuICAgKi9cbiAgcHJpdmF0ZSBvblNlbGVjdChldmVudDogT2xTZWxlY3RFdmVudCkge1xuICAgIGlmIChldmVudC5zZWxlY3RlZC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuc2VsZWN0JC5uZXh0KGV2ZW50LnNlbGVjdGVkWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGtleSBkb3ducyB1c2VkIGFzIGRyYXdpbmcgaW50ZXJhY3Rpb24gc2hvcmN1dHNcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaWJlS2V5RG93bigpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlS2V5RG93bigpO1xuICAgIHRoaXMua2V5RG93biQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5ZG93bicpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIC8vIE9uIEVzY2FwZSBvciAnYycga2V5ZG93bnMsIGFib3J0IHRoZSBjdXJyZW50IGRyYXdpbmdcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMub2xEcmF3SW50ZXJhY3Rpb24uYWJvcnREcmF3aW5nKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gT24gQmFja3NwYWNlIG9yICd1JyBrZXlkb3ducywgcmVtb3ZlIGxhc3QgdmVydGV4IG9mIGN1cnJlbnQgZHJhd2luZ1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgdGhpcy5vbERyYXdJbnRlcmFjdGlvbi5yZW1vdmVMYXN0UG9pbnQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gT24gRW50ZXIgb3IgJ2YnIGtleWRvd25zLCBmaW5pc2ggY3VycmVudCBkcmF3aW5nXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHRoaXMub2xEcmF3SW50ZXJhY3Rpb24uZmluaXNoRHJhd2luZygpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbiBzcGFjZSBiYXIga2V5IGRvd24sIHBhbiB0byB0aGUgY3VycmVudCBtb3VzZSBwb3NpdGlvblxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICAgIHRoaXMub2xNYXAuZ2V0VmlldygpLmFuaW1hdGUoe1xuICAgICAgICAgIGNlbnRlcjogdGhpcy5tb3VzZVBvc2l0aW9uLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSB0byBrZXkgZG93blxuICAgKi9cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUtleURvd24oKSB7XG4gICAgaWYgKHRoaXMua2V5RG93biQkKSB7XG4gICAgICB0aGlzLmtleURvd24kJC51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5rZXlEb3duJCQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=