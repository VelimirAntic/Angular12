import OlFeature from 'ol/Feature';
import OlVectorSource from 'ol/source/Vector';
import OlVectorLayer from 'ol/layer/Vector';
import OlModify from 'ol/interaction/Modify';
import OlTranslate from 'ol/interaction/Translate';
import OlDraw from 'ol/interaction/Draw';
import OlPolygon from 'ol/geom/Polygon';
import OlLinearRing from 'ol/geom/LinearRing';
import OlDragBoxInteraction from 'ol/interaction/DragBox';
import { unByKey } from 'ol/Observable';
import { Subject, fromEvent } from 'rxjs';
import { addLinearRingToOlPolygon, createDrawHoleInteractionStyle, getMousePositionFromOlGeometryEvent } from '../geometry.utils';
/**
 * Control to modify geometries
 */
export class ModifyControl {
    constructor(options) {
        this.options = options;
        /**
         * Modify start observable
         */
        this.start$ = new Subject();
        /**
         * Modify end observable
         */
        this.end$ = new Subject();
        /**
         * Geometry changes observable
         */
        this.changes$ = new Subject();
        this.olModifyInteractionIsActive = false;
        this.olTranslateInteractionIsActive = false;
        this.olDrawInteractionIsActive = false;
        this.removedOlInteractions = [];
        /**
         * Whether a modify control should be available
         */
        this.modify = true;
        /**
         * Whether a translate control should be available
         */
        this.translate = true;
        if (options.modify !== undefined) {
            this.modify = options.modify;
        }
        if (options.translate !== undefined) {
            this.translate = options.translate;
        }
        if (options.layer !== undefined) {
            this.olOverlayLayer = options.layer;
        }
        else {
            this.olOverlayLayer = this.createOlInnerOverlayLayer();
        }
        this.olLinearRingsLayer = this.createOlLinearRingsLayer();
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
     * OL linear rings source
     * @internal
     */
    get olLinearRingsSource() {
        return this.olLinearRingsLayer.getSource();
    }
    /**
     * Add or remove this control to/from a map.
     * @param map OL Map
     */
    setOlMap(olMap) {
        if (olMap === undefined) {
            this.clearOlInnerOverlaySource();
            this.removeOlInnerOverlayLayer();
            this.removeOlModifyInteraction();
            this.removeOlTranslateInteraction();
            this.removeOlDrawInteraction();
            this.olMap = olMap;
            return;
        }
        this.olMap = olMap;
        this.addOlInnerOverlayLayer();
        // The order in which these interactions
        // are added is important
        if (this.modify === true) {
            this.addOlDrawInteraction();
        }
        if (this.translate === true) {
            this.addOlTranslateInteraction();
            this.activateTranslateInteraction();
        }
        if (this.modify === true) {
            this.addOlModifyInteraction();
            this.activateModifyInteraction();
        }
    }
    /**
     * Return the overlay source
     */
    getSource() {
        return this.olOverlaySource;
    }
    /**
     * Add an OL geometry to the overlay and start modifying it
     * @param olGeometry Ol Geometry
     */
    setOlGeometry(olGeometry) {
        const olFeature = new OlFeature({ geometry: olGeometry });
        this.olOverlaySource.clear();
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
     * Add the overlay layer if it wasn't defined in the options
     */
    addOlInnerOverlayLayer() {
        if (this.options.layer === undefined) {
            this.olMap.addLayer(this.olOverlayLayer);
        }
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
     * Clear the overlay source if it wasn't defined in the options
     */
    clearOlInnerOverlaySource() {
        if (this.options.layer === undefined && this.options.source === undefined) {
            this.olOverlaySource.clear(true);
        }
    }
    createOlLinearRingsLayer() {
        return new OlVectorLayer({
            source: new OlVectorSource(),
            style: createDrawHoleInteractionStyle(),
            zIndex: 500
        });
    }
    /**
     * Add the linear rings layer
     */
    addOlLinearRingsLayer() {
        this.olMap.addLayer(this.olLinearRingsLayer);
    }
    /**
     * Clear the linear rings layer
     */
    removeOlLinearRingsLayer() {
        this.olMap.removeLayer(this.olLinearRingsLayer);
    }
    /**
     * Clear the linear rings source
     */
    clearOlLinearRingsSource() {
        this.olLinearRingsSource.clear(true);
    }
    /**
     * Add a modify interaction to the map an set up some listeners
     */
    addOlModifyInteraction() {
        const olModifyInteraction = new OlModify({
            source: this.olOverlaySource,
            style: this.options.drawStyle
        });
        this.olModifyInteraction = olModifyInteraction;
    }
    /**
     * Remove the modify interaction
     */
    removeOlModifyInteraction() {
        if (this.olModifyInteraction === undefined) {
            return;
        }
        this.deactivateModifyInteraction();
        this.olModifyInteraction = undefined;
    }
    activateModifyInteraction() {
        if (this.olModifyInteractionIsActive === true) {
            return;
        }
        this.olModifyInteractionIsActive = true;
        this.onModifyStartKey = this.olModifyInteraction.on('modifystart', (event) => this.onModifyStart(event));
        this.onModifyEndKey = this.olModifyInteraction.on('modifyend', (event) => this.onModifyEnd(event));
        this.olMap.addInteraction(this.olModifyInteraction);
    }
    deactivateModifyInteraction() {
        if (this.olModifyInteractionIsActive === false) {
            return;
        }
        this.olModifyInteractionIsActive = false;
        unByKey([this.onModifyStartKey, this.onModifyEndKey, this.onModifyKey]);
        if (this.olMap !== undefined) {
            this.olMap.removeInteraction(this.olModifyInteraction);
        }
    }
    /**
     * When modifying starts, clear the overlay and start watching for changes
     * @param event Modify start event
     */
    onModifyStart(event) {
        const olGeometry = event.features.item(0).getGeometry();
        this.start$.next(olGeometry);
        this.onModifyKey = olGeometry.on('change', (olGeometryEvent) => {
            this.mousePosition = getMousePositionFromOlGeometryEvent(olGeometryEvent);
            this.changes$.next(olGeometryEvent.target);
        });
        this.subscribeToKeyDown();
    }
    /**
     * When modifying ends, update the geometry observable and stop watching for changes
     * @param event Modify end event
     */
    onModifyEnd(event) {
        unByKey(this.onModifyKey);
        this.end$.next(event.features.item(0).getGeometry());
        this.unsubscribeToKeyDown();
    }
    /**
     * Subscribe to space key down to pan the map
     */
    subscribeToKeyDown() {
        this.keyDown$$ = fromEvent(document, 'keydown').subscribe((event) => {
            if (event.key === ' ') {
                // On space bar, pan to the current mouse position
                this.olMap.getView().animate({
                    center: this.mousePosition,
                    duration: 0
                });
                return;
            }
        });
    }
    /**
     * Unsubscribe to key down
     */
    unsubscribeToKeyDown() {
        if (this.keyDown$$ !== undefined) {
            this.keyDown$$.unsubscribe();
        }
    }
    /**
     * Add a translate interaction to the map an set up some listeners
     */
    addOlTranslateInteraction() {
        const olTranslateInteraction = new OlTranslate({
            layers: [this.olOverlayLayer]
        });
        this.olTranslateInteraction = olTranslateInteraction;
    }
    /**
     * Remove the translate interaction
     */
    removeOlTranslateInteraction() {
        if (this.olTranslateInteraction === undefined) {
            return;
        }
        this.deactivateTranslateInteraction();
        this.olTranslateInteraction = undefined;
    }
    activateTranslateInteraction() {
        if (this.olTranslateInteractionIsActive === true) {
            return;
        }
        this.olTranslateInteractionIsActive = true;
        this.onTranslateStartKey = this.olTranslateInteraction.on('translatestart', (event) => this.onTranslateStart(event));
        this.onTranslateEndKey = this.olTranslateInteraction.on('translateend', (event) => this.onTranslateEnd(event));
        this.olMap.addInteraction(this.olTranslateInteraction);
    }
    deactivateTranslateInteraction() {
        if (this.olTranslateInteractionIsActive === false) {
            return;
        }
        this.olTranslateInteractionIsActive = false;
        unByKey([
            this.onTranslateStartKey,
            this.onTranslateEndKey,
            this.onTranslateKey
        ]);
        if (this.olMap !== undefined) {
            this.olMap.removeInteraction(this.olTranslateInteraction);
        }
    }
    /**
     * When translation starts, clear the overlay and start watching for changes
     * @param event Translate start event
     */
    onTranslateStart(event) {
        const olGeometry = event.features.item(0).getGeometry();
        this.start$.next(olGeometry);
        this.onTranslateKey = olGeometry.on('change', (olGeometryEvent) => {
            // this.changes$.next(olGeometryEvent.target);
        });
    }
    /**
     * When translation ends, update the geometry observable and stop watchign for changes
     * @param event Translate end event
     */
    onTranslateEnd(event) {
        unByKey(this.onTranslateKey);
        this.end$.next(event.features.item(0).getGeometry());
    }
    /**
     * Add a draw interaction to the map an set up some listeners
     */
    addOlDrawInteraction() {
        const olDrawInteraction = new OlDraw({
            type: 'Polygon',
            source: this.olLinearRingsSource,
            stopClick: true,
            style: createDrawHoleInteractionStyle(),
            condition: (event) => {
                const olOuterGeometry = this.olOuterGeometry || this.getOlGeometry();
                const intersects = olOuterGeometry.intersectsCoordinate(event.coordinate);
                return intersects;
            }
        });
        this.olDrawInteraction = olDrawInteraction;
        this.subscribeToDrawKeyDown();
    }
    /**
     * Subscribe to CTRL key down to activate the draw control
     */
    subscribeToDrawKeyDown() {
        this.drawKeyDown$$ = fromEvent(document, 'keydown').subscribe((event) => {
            if (event.key !== 'Control') {
                return;
            }
            this.unsubscribeToDrawKeyDown();
            const olGeometry = this.getOlGeometry();
            if (!olGeometry || !(olGeometry instanceof OlPolygon)) {
                return;
            }
            this.subscribeToDrawKeyUp();
            this.deactivateModifyInteraction();
            this.deactivateTranslateInteraction();
            this.activateDrawInteraction();
        });
    }
    /**
     * Subscribe to CTRL key up to deactivate the draw control
     */
    subscribeToDrawKeyUp() {
        this.drawKeyUp$$ = fromEvent(document, 'keyup').subscribe((event) => {
            if (event.key !== 'Control') {
                return;
            }
            this.unsubscribeToDrawKeyUp();
            this.unsubscribeToKeyDown();
            this.deactivateDrawInteraction();
            this.activateModifyInteraction();
            if (this.translate === true) {
                this.activateTranslateInteraction();
            }
            this.subscribeToDrawKeyDown();
            this.olOuterGeometry = undefined;
            this.clearOlLinearRingsSource();
            this.end$.next(this.getOlGeometry());
        });
    }
    /**
     * Unsubscribe to draw key down
     */
    unsubscribeToDrawKeyDown() {
        if (this.drawKeyDown$$ !== undefined) {
            this.drawKeyDown$$.unsubscribe();
        }
    }
    /**
     * Unsubscribe to key up
     */
    unsubscribeToDrawKeyUp() {
        if (this.drawKeyUp$$ !== undefined) {
            this.drawKeyUp$$.unsubscribe();
        }
    }
    /**
     * Remove the draw interaction
     */
    removeOlDrawInteraction() {
        if (this.olDrawInteraction === undefined) {
            return;
        }
        this.unsubscribeToKeyDown();
        this.unsubscribeToDrawKeyUp();
        this.unsubscribeToDrawKeyDown();
        this.deactivateDrawInteraction();
        this.clearOlLinearRingsSource();
        this.olDrawInteraction = undefined;
    }
    /**
     * Activate the draw interaction
     */
    activateDrawInteraction() {
        if (this.olDrawInteractionIsActive === true) {
            return;
        }
        this.clearOlLinearRingsSource();
        this.addOlLinearRingsLayer();
        this.olMap.getInteractions().forEach((olInteraction) => {
            if (olInteraction instanceof OlDragBoxInteraction) {
                this.olMap.removeInteraction(olInteraction);
                this.removedOlInteractions.push(olInteraction);
            }
        });
        this.olDrawInteractionIsActive = true;
        this.onDrawStartKey = this.olDrawInteraction.on('drawstart', (event) => this.onDrawStart(event));
        this.onDrawEndKey = this.olDrawInteraction.on('drawend', (event) => this.onDrawEnd(event));
        this.olMap.addInteraction(this.olDrawInteraction);
    }
    /**
     * Deactivate the draw interaction
     */
    deactivateDrawInteraction() {
        if (this.olDrawInteractionIsActive === false) {
            return;
        }
        this.removeOlLinearRingsLayer();
        this.removedOlInteractions.forEach((olInteraction) => {
            this.olMap.addInteraction(olInteraction);
        });
        this.removedOlInteractions = [];
        this.olDrawInteractionIsActive = false;
        unByKey([this.onDrawStartKey, this.onDrawEndKey, this.onDrawKey]);
        if (this.olMap !== undefined) {
            this.olMap.removeInteraction(this.olDrawInteraction);
        }
    }
    /**
     * When draw start, add a new linerar ring to the geometry and start watching for changes
     * @param event Draw start event
     */
    onDrawStart(event) {
        const olGeometry = event.feature.getGeometry();
        this.olOuterGeometry = this.getOlGeometry().clone();
        const linearRingCoordinates = olGeometry.getLinearRing().getCoordinates();
        this.addLinearRingToOlGeometry(linearRingCoordinates);
        this.start$.next(this.getOlGeometry());
        this.onDrawKey = olGeometry.on('change', (olGeometryEvent) => {
            this.mousePosition = getMousePositionFromOlGeometryEvent(olGeometryEvent);
            const olGeometryTarget = olGeometryEvent.target;
            const _linearRingCoordinates = olGeometryTarget
                .getLinearRing(0)
                .getCoordinates();
            this.updateLinearRingOfOlGeometry(_linearRingCoordinates);
            this.changes$.next(this.getOlGeometry());
        });
        this.subscribeToKeyDown();
    }
    /**
     * When translation ends, update the geometry observable and stop watchign for changes
     * @param event Draw end event
     */
    onDrawEnd(event) {
        unByKey(this.onDrawKey);
        this.olOuterGeometry = undefined;
        const linearRingCoordinates = event.feature
            .getGeometry()
            .getLinearRing()
            .getCoordinates();
        this.updateLinearRingOfOlGeometry(linearRingCoordinates);
        this.clearOlLinearRingsSource();
        this.end$.next(this.getOlGeometry());
        this.unsubscribeToKeyDown();
    }
    /**
     * Add a linear ring to the geometry being modified
     * @param coordinates Linear ring coordinates
     */
    addLinearRingToOlGeometry(coordinates) {
        const olGeometry = this.getOlGeometry();
        const olLinearRing = new OlLinearRing(coordinates);
        addLinearRingToOlPolygon(olGeometry, olLinearRing);
    }
    /**
     * Update the last linear ring of the geometry being modified
     * @param coordinates Linear ring coordinates
     */
    updateLinearRingOfOlGeometry(coordinates) {
        const olGeometry = this.getOlGeometry();
        // Remove the last linear ring (the one we are updating)
        const olLinearRings = olGeometry.getLinearRings().slice(0, -1);
        const newCoordinates = olLinearRings.map((olLinearRing) => {
            return olLinearRing.getCoordinates();
        });
        newCoordinates.push(coordinates);
        olGeometry.setCoordinates(newCoordinates);
    }
    /**
     * Get the geometry being modified
     * @returns OL Geometry
     */
    getOlGeometry() {
        const olFeatures = this.olOverlaySource.getFeatures();
        return olFeatures.length > 0 ? olFeatures[0].getGeometry() : undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZ2VvbWV0cnkvc2hhcmVkL2NvbnRyb2xzL21vZGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFHbkMsT0FBTyxjQUFjLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxhQUFhLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxRQUFRLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxXQUFXLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFHeEMsT0FBTyxZQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxvQkFBb0IsTUFBTSx3QkFBd0IsQ0FBQztBQU8xRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhDLE9BQU8sRUFBRSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV4RCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDhCQUE4QixFQUM5QixtQ0FBbUMsRUFDcEMsTUFBTSxtQkFBbUIsQ0FBQztBQVczQjs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFhO0lBK0V4QixZQUFvQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQTlFakQ7O1dBRUc7UUFDSSxXQUFNLEdBQXdCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFbkQ7O1dBRUc7UUFDSSxTQUFJLEdBQXdCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFakQ7O1dBRUc7UUFDSSxhQUFRLEdBQXdCLElBQUksT0FBTyxFQUFFLENBQUM7UUFRN0MsZ0NBQTJCLEdBQVksS0FBSyxDQUFDO1FBSzdDLG1DQUE4QixHQUFZLEtBQUssQ0FBQztRQUtoRCw4QkFBeUIsR0FBWSxLQUFLLENBQUM7UUFRM0MsMEJBQXFCLEdBQW9CLEVBQUUsQ0FBQztRQTZCcEQ7O1dBRUc7UUFDSyxXQUFNLEdBQVksSUFBSSxDQUFDO1FBRS9COztXQUVHO1FBQ0ssY0FBUyxHQUFZLElBQUksQ0FBQztRQUdoQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUM5QjtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQS9DRDs7T0FFRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUE0QkQ7OztPQUdHO0lBQ0gsUUFBUSxDQUFDLEtBQXdCO1FBQy9CLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUU5Qix3Q0FBd0M7UUFDeEMseUJBQXlCO1FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxVQUFzQjtRQUNsQyxNQUFNLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHO0lBQ0sseUJBQXlCO1FBQy9CLE9BQU8sSUFBSSxhQUFhLENBQUM7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxjQUFjLEVBQUU7WUFDeEUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUM5QixNQUFNLEVBQUUsR0FBRztTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNLLHNCQUFzQjtRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyx5QkFBeUI7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0sseUJBQXlCO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN6RSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFTyx3QkFBd0I7UUFDOUIsT0FBTyxJQUFJLGFBQWEsQ0FBQztZQUN2QixNQUFNLEVBQUUsSUFBSSxjQUFjLEVBQUU7WUFDNUIsS0FBSyxFQUFFLDhCQUE4QixFQUFFO1lBQ3ZDLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0sscUJBQXFCO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7T0FFRztJQUNLLHdCQUF3QjtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSyx3QkFBd0I7UUFDOUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxzQkFBc0I7UUFDNUIsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLFFBQVEsQ0FBQztZQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBMEI7U0FDL0MsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNLLHlCQUF5QjtRQUMvQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLEVBQUU7WUFDMUMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBRU8seUJBQXlCO1FBQy9CLElBQUksSUFBSSxDQUFDLDJCQUEyQixLQUFLLElBQUksRUFBRTtZQUM3QyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUNqRCxhQUFhLEVBQ2IsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUNwRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUMvQyxXQUFXLEVBQ1gsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUNsRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVPLDJCQUEyQjtRQUNqQyxJQUFJLElBQUksQ0FBQywyQkFBMkIsS0FBSyxLQUFLLEVBQUU7WUFDOUMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztRQUV6QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssYUFBYSxDQUFDLEtBQW9CO1FBQ3hDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBZ0IsQ0FBQztRQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQzlCLFFBQVEsRUFDUixDQUFDLGVBQTJCLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLG1DQUFtQyxDQUN0RCxlQUFlLENBQ2hCLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBNkMsQ0FBQyxDQUFDO1FBQ3BGLENBQUMsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFdBQVcsQ0FBQyxLQUFvQjtRQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBZ0IsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNLLGtCQUFrQjtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUN2RCxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUN2QixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUNyQixrREFBa0Q7Z0JBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUMzQixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7b0JBQzFCLFFBQVEsRUFBRSxDQUFDO2lCQUNaLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7UUFDSCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLG9CQUFvQjtRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyx5QkFBeUI7UUFDL0IsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM3QyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQzlCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7SUFDSyw0QkFBNEI7UUFDbEMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssU0FBUyxFQUFFO1lBQzdDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUVPLDRCQUE0QjtRQUNsQyxJQUFJLElBQUksQ0FBQyw4QkFBOEIsS0FBSyxJQUFJLEVBQUU7WUFDaEQsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FDdkQsZ0JBQWdCLEVBQ2hCLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUMxRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQ3JELGNBQWMsRUFDZCxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ3hELENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU8sOEJBQThCO1FBQ3BDLElBQUksSUFBSSxDQUFDLDhCQUE4QixLQUFLLEtBQUssRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsOEJBQThCLEdBQUcsS0FBSyxDQUFDO1FBQzVDLE9BQU8sQ0FBQztZQUNOLElBQUksQ0FBQyxtQkFBbUI7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQjtZQUN0QixJQUFJLENBQUMsY0FBYztTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssZ0JBQWdCLENBQUMsS0FBdUI7UUFDOUMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFnQixDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FDakMsUUFBUSxFQUNSLENBQUMsZUFBMkIsRUFBRSxFQUFFO1lBQzlCLDhDQUE4QztRQUNoRCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSyxjQUFjLENBQUMsS0FBdUI7UUFDNUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQWdCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7O09BRUc7SUFDSyxvQkFBb0I7UUFDMUIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQztZQUNuQyxJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRSxJQUFJO1lBQ2YsS0FBSyxFQUFFLDhCQUE4QixFQUFFO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEtBQTJCLEVBQUUsRUFBRTtnQkFDekMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JFLE1BQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxvQkFBb0IsQ0FDckQsS0FBSyxDQUFDLFVBQVUsQ0FDakIsQ0FBQztnQkFDRixPQUFPLFVBQVUsQ0FBQztZQUNwQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNLLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUMzRCxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUN2QixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUMzQixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUVoQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsVUFBVSxZQUFZLFNBQVMsQ0FBQyxFQUFFO2dCQUNyRCxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUU1QixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUN2RCxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUN2QixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUMzQixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUVqQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUMzQixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQzthQUNyQztZQUNELElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBRTlCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ssd0JBQXdCO1FBQzlCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLHNCQUFzQjtRQUM1QixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyx1QkFBdUI7UUFDN0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxFQUFFO1lBQ3hDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssdUJBQXVCO1FBQzdCLElBQUksSUFBSSxDQUFDLHlCQUF5QixLQUFLLElBQUksRUFBRTtZQUMzQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQTRCLEVBQUUsRUFBRTtZQUNwRSxJQUFJLGFBQWEsWUFBWSxvQkFBb0IsRUFBRTtnQkFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNoRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQzdDLFdBQVcsRUFDWCxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQ2hELENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQzNDLFNBQVMsRUFDVCxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQzlDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7O09BRUc7SUFDSyx5QkFBeUI7UUFDL0IsSUFBSSxJQUFJLENBQUMseUJBQXlCLEtBQUssS0FBSyxFQUFFO1lBQzVDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUE0QixFQUFFLEVBQUU7WUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSyxXQUFXLENBQUMsS0FBa0I7UUFDcEMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwRCxNQUFNLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxRSxJQUFJLENBQUMseUJBQXlCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQzVCLFFBQVEsRUFDUixDQUFDLGVBQTJCLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLG1DQUFtQyxDQUN0RCxlQUFlLENBQ2hCLENBQUM7WUFDRixNQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxNQUFtQixDQUFDO1lBQzdELE1BQU0sc0JBQXNCLEdBQUcsZ0JBQWdCO2lCQUM1QyxhQUFhLENBQUMsQ0FBQyxDQUFDO2lCQUNoQixjQUFjLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsNEJBQTRCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSyxTQUFTLENBQUMsS0FBa0I7UUFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUVqQyxNQUFNLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxPQUFPO2FBQ3hDLFdBQVcsRUFBRTthQUNiLGFBQWEsRUFBRTthQUNmLGNBQWMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7SUFDSyx5QkFBeUIsQ0FBQyxXQUFxQjtRQUNyRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFlLENBQUM7UUFDckQsTUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkQsd0JBQXdCLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7O09BR0c7SUFDSyw0QkFBNEIsQ0FBQyxXQUF1QjtRQUMxRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFlLENBQUM7UUFDckQsd0RBQXdEO1FBQ3hELE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxjQUFjLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQTBCLEVBQUUsRUFBRTtZQUN0RSxPQUFPLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssYUFBYTtRQUNuQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RELE9BQU8sVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPbE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IE9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCAqIGFzIE9sU3R5bGUgZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgU3R5bGVMaWtlIGFzIE9sU3R5bGVMaWtlIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IE9sVmVjdG9yU291cmNlIGZyb20gJ29sL3NvdXJjZS9WZWN0b3InO1xuaW1wb3J0IE9sVmVjdG9yTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yJztcbmltcG9ydCBPbE1vZGlmeSBmcm9tICdvbC9pbnRlcmFjdGlvbi9Nb2RpZnknO1xuaW1wb3J0IE9sVHJhbnNsYXRlIGZyb20gJ29sL2ludGVyYWN0aW9uL1RyYW5zbGF0ZSc7XG5pbXBvcnQgT2xEcmF3IGZyb20gJ29sL2ludGVyYWN0aW9uL0RyYXcnO1xuaW1wb3J0IE9sUG9seWdvbiBmcm9tICdvbC9nZW9tL1BvbHlnb24nO1xuaW1wb3J0IE9sTGluZVN0cmluZyBmcm9tICdvbC9nZW9tL0xpbmVTdHJpbmcnO1xuaW1wb3J0IE9sQ2lyY2xlIGZyb20gJ29sL2dlb20vQ2lyY2xlJztcbmltcG9ydCBPbExpbmVhclJpbmcgZnJvbSAnb2wvZ2VvbS9MaW5lYXJSaW5nJztcbmltcG9ydCBPbEludGVyYWN0aW9uIGZyb20gJ29sL2ludGVyYWN0aW9uL0ludGVyYWN0aW9uJztcbmltcG9ydCBPbERyYWdCb3hJbnRlcmFjdGlvbiBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmFnQm94JztcbmltcG9ydCBNYXBCcm93c2VyRXZlbnQgZnJvbSAnb2wvTWFwQnJvd3NlckV2ZW50JztcbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5pbXBvcnQgQmFzaWNFdmVudCBmcm9tICdvbC9ldmVudHMvRXZlbnQnO1xuaW1wb3J0IHsgTW9kaWZ5RXZlbnQgYXMgT2xNb2RpZnlFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL01vZGlmeSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVFdmVudCBhcyBPbFRyYW5zbGF0ZUV2ZW50IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vVHJhbnNsYXRlJztcbmltcG9ydCB7IERyYXdFdmVudCBhcyBPbERyYXdFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL0RyYXcnO1xuaW1wb3J0IHsgdW5CeUtleSB9IGZyb20gJ29sL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBhZGRMaW5lYXJSaW5nVG9PbFBvbHlnb24sXG4gIGNyZWF0ZURyYXdIb2xlSW50ZXJhY3Rpb25TdHlsZSxcbiAgZ2V0TW91c2VQb3NpdGlvbkZyb21PbEdlb21ldHJ5RXZlbnRcbn0gZnJvbSAnLi4vZ2VvbWV0cnkudXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGlmeUNvbnRyb2xPcHRpb25zIHtcbiAgc291cmNlPzogT2xWZWN0b3JTb3VyY2U8YW55PjtcbiAgbGF5ZXI/OiBPbFZlY3RvckxheWVyPGFueT47XG4gIGxheWVyU3R5bGU/OiBPbFN0eWxlTGlrZTtcbiAgZHJhd1N0eWxlPzogT2xTdHlsZUxpa2U7XG4gIG1vZGlmeT86IGJvb2xlYW47XG4gIHRyYW5zbGF0ZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29udHJvbCB0byBtb2RpZnkgZ2VvbWV0cmllc1xuICovXG5leHBvcnQgY2xhc3MgTW9kaWZ5Q29udHJvbCB7XG4gIC8qKlxuICAgKiBNb2RpZnkgc3RhcnQgb2JzZXJ2YWJsZVxuICAgKi9cbiAgcHVibGljIHN0YXJ0JDogU3ViamVjdDxPbEdlb21ldHJ5PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqXG4gICAqIE1vZGlmeSBlbmQgb2JzZXJ2YWJsZVxuICAgKi9cbiAgcHVibGljIGVuZCQ6IFN1YmplY3Q8T2xHZW9tZXRyeT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKlxuICAgKiBHZW9tZXRyeSBjaGFuZ2VzIG9ic2VydmFibGVcbiAgICovXG4gIHB1YmxpYyBjaGFuZ2VzJDogU3ViamVjdDxPbEdlb21ldHJ5PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBvbE1hcDogT2xNYXA7XG4gIHByaXZhdGUgb2xPdmVybGF5TGF5ZXI6IE9sVmVjdG9yTGF5ZXI8YW55PjtcbiAgcHVibGljIG9sTW9kaWZ5SW50ZXJhY3Rpb246IE9sTW9kaWZ5O1xuICBwcml2YXRlIG9uTW9kaWZ5U3RhcnRLZXk6IGFueTtcbiAgcHJpdmF0ZSBvbk1vZGlmeUVuZEtleTogYW55O1xuICBwcml2YXRlIG9uTW9kaWZ5S2V5OiBhbnk7XG4gIHByaXZhdGUgb2xNb2RpZnlJbnRlcmFjdGlvbklzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgb2xUcmFuc2xhdGVJbnRlcmFjdGlvbjogT2xUcmFuc2xhdGU7XG4gIHByaXZhdGUgb25UcmFuc2xhdGVTdGFydEtleTogYW55O1xuICBwcml2YXRlIG9uVHJhbnNsYXRlRW5kS2V5OiBhbnk7XG4gIHByaXZhdGUgb25UcmFuc2xhdGVLZXk6IGFueTtcbiAgcHJpdmF0ZSBvbFRyYW5zbGF0ZUludGVyYWN0aW9uSXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbERyYXdJbnRlcmFjdGlvbjogT2xEcmF3O1xuICBwcml2YXRlIG9uRHJhd1N0YXJ0S2V5OiBhbnk7XG4gIHByaXZhdGUgb25EcmF3RW5kS2V5OiBhbnk7XG4gIHByaXZhdGUgb25EcmF3S2V5OiBhbnk7XG4gIHByaXZhdGUgb2xEcmF3SW50ZXJhY3Rpb25Jc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgbW91c2VQb3NpdGlvbjogW251bWJlciwgbnVtYmVyXTtcblxuICBwcml2YXRlIGtleURvd24kJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRyYXdLZXlVcCQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZHJhd0tleURvd24kJDogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgcmVtb3ZlZE9sSW50ZXJhY3Rpb25zOiBPbEludGVyYWN0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBvbExpbmVhclJpbmdzTGF5ZXI6IE9sVmVjdG9yTGF5ZXI8YW55PjtcblxuICAvLyBUaGlzIGlzIHRoZSBnZW9tZXRyeSB0byB0ZXN0IGFnYWluc3Qgd2hlbiBkcmF3aW5nIGhvbGVzXG4gIHByaXZhdGUgb2xPdXRlckdlb21ldHJ5OiBPbEdlb21ldHJ5O1xuXG4gIC8qKlxuICAgKiBXaGV0ZXIgdGhlIGNvbnRyb2wgaXMgYWN0aXZlXG4gICAqL1xuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9sTWFwICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogT0wgb3ZlcmxheSBzb3VyY2VcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgb2xPdmVybGF5U291cmNlKCk6IE9sVmVjdG9yU291cmNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9sT3ZlcmxheUxheWVyLmdldFNvdXJjZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9MIGxpbmVhciByaW5ncyBzb3VyY2VcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgb2xMaW5lYXJSaW5nc1NvdXJjZSgpOiBPbFZlY3RvclNvdXJjZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vbExpbmVhclJpbmdzTGF5ZXIuZ2V0U291cmNlKCk7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBhIG1vZGlmeSBjb250cm9sIHNob3VsZCBiZSBhdmFpbGFibGVcbiAgICovXG4gIHByaXZhdGUgbW9kaWZ5OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciBhIHRyYW5zbGF0ZSBjb250cm9sIHNob3VsZCBiZSBhdmFpbGFibGVcbiAgICovXG4gIHByaXZhdGUgdHJhbnNsYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IE1vZGlmeUNvbnRyb2xPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMubW9kaWZ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubW9kaWZ5ID0gb3B0aW9ucy5tb2RpZnk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRyYW5zbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZSA9IG9wdGlvbnMudHJhbnNsYXRlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2xPdmVybGF5TGF5ZXIgPSBvcHRpb25zLmxheWVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9sT3ZlcmxheUxheWVyID0gdGhpcy5jcmVhdGVPbElubmVyT3ZlcmxheUxheWVyKCk7XG4gICAgfVxuICAgIHRoaXMub2xMaW5lYXJSaW5nc0xheWVyID0gdGhpcy5jcmVhdGVPbExpbmVhclJpbmdzTGF5ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgb3IgcmVtb3ZlIHRoaXMgY29udHJvbCB0by9mcm9tIGEgbWFwLlxuICAgKiBAcGFyYW0gbWFwIE9MIE1hcFxuICAgKi9cbiAgc2V0T2xNYXAob2xNYXA6IE9sTWFwIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKG9sTWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2xlYXJPbElubmVyT3ZlcmxheVNvdXJjZSgpO1xuICAgICAgdGhpcy5yZW1vdmVPbElubmVyT3ZlcmxheUxheWVyKCk7XG4gICAgICB0aGlzLnJlbW92ZU9sTW9kaWZ5SW50ZXJhY3Rpb24oKTtcbiAgICAgIHRoaXMucmVtb3ZlT2xUcmFuc2xhdGVJbnRlcmFjdGlvbigpO1xuICAgICAgdGhpcy5yZW1vdmVPbERyYXdJbnRlcmFjdGlvbigpO1xuICAgICAgdGhpcy5vbE1hcCA9IG9sTWFwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2xNYXAgPSBvbE1hcDtcbiAgICB0aGlzLmFkZE9sSW5uZXJPdmVybGF5TGF5ZXIoKTtcblxuICAgIC8vIFRoZSBvcmRlciBpbiB3aGljaCB0aGVzZSBpbnRlcmFjdGlvbnNcbiAgICAvLyBhcmUgYWRkZWQgaXMgaW1wb3J0YW50XG4gICAgaWYgKHRoaXMubW9kaWZ5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmFkZE9sRHJhd0ludGVyYWN0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhbnNsYXRlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmFkZE9sVHJhbnNsYXRlSW50ZXJhY3Rpb24oKTtcbiAgICAgIHRoaXMuYWN0aXZhdGVUcmFuc2xhdGVJbnRlcmFjdGlvbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGlmeSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRPbE1vZGlmeUludGVyYWN0aW9uKCk7XG4gICAgICB0aGlzLmFjdGl2YXRlTW9kaWZ5SW50ZXJhY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBvdmVybGF5IHNvdXJjZVxuICAgKi9cbiAgZ2V0U291cmNlKCk6IE9sVmVjdG9yU291cmNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9sT3ZlcmxheVNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW4gT0wgZ2VvbWV0cnkgdG8gdGhlIG92ZXJsYXkgYW5kIHN0YXJ0IG1vZGlmeWluZyBpdFxuICAgKiBAcGFyYW0gb2xHZW9tZXRyeSBPbCBHZW9tZXRyeVxuICAgKi9cbiAgc2V0T2xHZW9tZXRyeShvbEdlb21ldHJ5OiBPbEdlb21ldHJ5KSB7XG4gICAgY29uc3Qgb2xGZWF0dXJlID0gbmV3IE9sRmVhdHVyZSh7IGdlb21ldHJ5OiBvbEdlb21ldHJ5IH0pO1xuICAgIHRoaXMub2xPdmVybGF5U291cmNlLmNsZWFyKCk7XG4gICAgdGhpcy5vbE92ZXJsYXlTb3VyY2UuYWRkRmVhdHVyZShvbEZlYXR1cmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBvdmVybGF5IHNvdXJjZSBpZiBub25lIGlzIGRlZmluZWQgaW4gdGhlIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlT2xJbm5lck92ZXJsYXlMYXllcigpOiBPbFZlY3RvckxheWVyPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2xWZWN0b3JMYXllcih7XG4gICAgICBzb3VyY2U6IHRoaXMub3B0aW9ucy5zb3VyY2UgPyB0aGlzLm9wdGlvbnMuc291cmNlIDogbmV3IE9sVmVjdG9yU291cmNlKCksXG4gICAgICBzdHlsZTogdGhpcy5vcHRpb25zLmxheWVyU3R5bGUsXG4gICAgICB6SW5kZXg6IDUwMFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgb3ZlcmxheSBsYXllciBpZiBpdCB3YXNuJ3QgZGVmaW5lZCBpbiB0aGUgb3B0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBhZGRPbElubmVyT3ZlcmxheUxheWVyKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGF5ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbE1hcC5hZGRMYXllcih0aGlzLm9sT3ZlcmxheUxheWVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIG92ZXJsYXkgbGF5ZXIgaWYgaXQgd2Fzbid0IGRlZmluZWQgaW4gdGhlIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlT2xJbm5lck92ZXJsYXlMYXllcigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxheWVyID09PSB1bmRlZmluZWQgJiYgdGhpcy5vbE1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9sTWFwLnJlbW92ZUxheWVyKHRoaXMub2xPdmVybGF5TGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgb3ZlcmxheSBzb3VyY2UgaWYgaXQgd2Fzbid0IGRlZmluZWQgaW4gdGhlIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgY2xlYXJPbElubmVyT3ZlcmxheVNvdXJjZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxheWVyID09PSB1bmRlZmluZWQgJiYgdGhpcy5vcHRpb25zLnNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9sT3ZlcmxheVNvdXJjZS5jbGVhcih0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU9sTGluZWFyUmluZ3NMYXllcigpOiBPbFZlY3RvckxheWVyPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2xWZWN0b3JMYXllcih7XG4gICAgICBzb3VyY2U6IG5ldyBPbFZlY3RvclNvdXJjZSgpLFxuICAgICAgc3R5bGU6IGNyZWF0ZURyYXdIb2xlSW50ZXJhY3Rpb25TdHlsZSgpLFxuICAgICAgekluZGV4OiA1MDBcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGxpbmVhciByaW5ncyBsYXllclxuICAgKi9cbiAgcHJpdmF0ZSBhZGRPbExpbmVhclJpbmdzTGF5ZXIoKSB7XG4gICAgdGhpcy5vbE1hcC5hZGRMYXllcih0aGlzLm9sTGluZWFyUmluZ3NMYXllcik7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpbmVhciByaW5ncyBsYXllclxuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVPbExpbmVhclJpbmdzTGF5ZXIoKSB7XG4gICAgdGhpcy5vbE1hcC5yZW1vdmVMYXllcih0aGlzLm9sTGluZWFyUmluZ3NMYXllcik7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpbmVhciByaW5ncyBzb3VyY2VcbiAgICovXG4gIHByaXZhdGUgY2xlYXJPbExpbmVhclJpbmdzU291cmNlKCkge1xuICAgIHRoaXMub2xMaW5lYXJSaW5nc1NvdXJjZS5jbGVhcih0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBtb2RpZnkgaW50ZXJhY3Rpb24gdG8gdGhlIG1hcCBhbiBzZXQgdXAgc29tZSBsaXN0ZW5lcnNcbiAgICovXG4gIHByaXZhdGUgYWRkT2xNb2RpZnlJbnRlcmFjdGlvbigpIHtcbiAgICBjb25zdCBvbE1vZGlmeUludGVyYWN0aW9uID0gbmV3IE9sTW9kaWZ5KHtcbiAgICAgIHNvdXJjZTogdGhpcy5vbE92ZXJsYXlTb3VyY2UsXG4gICAgICBzdHlsZTogdGhpcy5vcHRpb25zLmRyYXdTdHlsZSBhcyBPbFN0eWxlLlN0eWxlXG4gICAgfSk7XG4gICAgdGhpcy5vbE1vZGlmeUludGVyYWN0aW9uID0gb2xNb2RpZnlJbnRlcmFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIG1vZGlmeSBpbnRlcmFjdGlvblxuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVPbE1vZGlmeUludGVyYWN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9sTW9kaWZ5SW50ZXJhY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGVhY3RpdmF0ZU1vZGlmeUludGVyYWN0aW9uKCk7XG4gICAgdGhpcy5vbE1vZGlmeUludGVyYWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZU1vZGlmeUludGVyYWN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9sTW9kaWZ5SW50ZXJhY3Rpb25Jc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2xNb2RpZnlJbnRlcmFjdGlvbklzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLm9uTW9kaWZ5U3RhcnRLZXkgPSB0aGlzLm9sTW9kaWZ5SW50ZXJhY3Rpb24ub24oXG4gICAgICAnbW9kaWZ5c3RhcnQnLFxuICAgICAgKGV2ZW50OiBPbE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9uTW9kaWZ5U3RhcnQoZXZlbnQpXG4gICAgKTtcbiAgICB0aGlzLm9uTW9kaWZ5RW5kS2V5ID0gdGhpcy5vbE1vZGlmeUludGVyYWN0aW9uLm9uKFxuICAgICAgJ21vZGlmeWVuZCcsXG4gICAgICAoZXZlbnQ6IE9sTW9kaWZ5RXZlbnQpID0+IHRoaXMub25Nb2RpZnlFbmQoZXZlbnQpXG4gICAgKTtcbiAgICB0aGlzLm9sTWFwLmFkZEludGVyYWN0aW9uKHRoaXMub2xNb2RpZnlJbnRlcmFjdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGRlYWN0aXZhdGVNb2RpZnlJbnRlcmFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5vbE1vZGlmeUludGVyYWN0aW9uSXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbE1vZGlmeUludGVyYWN0aW9uSXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIHVuQnlLZXkoW3RoaXMub25Nb2RpZnlTdGFydEtleSwgdGhpcy5vbk1vZGlmeUVuZEtleSwgdGhpcy5vbk1vZGlmeUtleV0pO1xuICAgIGlmICh0aGlzLm9sTWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2xNYXAucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5vbE1vZGlmeUludGVyYWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBtb2RpZnlpbmcgc3RhcnRzLCBjbGVhciB0aGUgb3ZlcmxheSBhbmQgc3RhcnQgd2F0Y2hpbmcgZm9yIGNoYW5nZXNcbiAgICogQHBhcmFtIGV2ZW50IE1vZGlmeSBzdGFydCBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbk1vZGlmeVN0YXJ0KGV2ZW50OiBPbE1vZGlmeUV2ZW50KSB7XG4gICAgY29uc3Qgb2xHZW9tZXRyeSA9IGV2ZW50LmZlYXR1cmVzLml0ZW0oMCkuZ2V0R2VvbWV0cnkoKSBhcyBPbEdlb21ldHJ5O1xuICAgIHRoaXMuc3RhcnQkLm5leHQob2xHZW9tZXRyeSk7XG4gICAgdGhpcy5vbk1vZGlmeUtleSA9IG9sR2VvbWV0cnkub24oXG4gICAgICAnY2hhbmdlJyxcbiAgICAgIChvbEdlb21ldHJ5RXZlbnQ6IEJhc2ljRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uID0gZ2V0TW91c2VQb3NpdGlvbkZyb21PbEdlb21ldHJ5RXZlbnQoXG4gICAgICAgICAgb2xHZW9tZXRyeUV2ZW50XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2hhbmdlcyQubmV4dChvbEdlb21ldHJ5RXZlbnQudGFyZ2V0IGFzIE9sTGluZVN0cmluZyB8IE9sQ2lyY2xlIHwgT2xQb2x5Z29uKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuc3Vic2NyaWJlVG9LZXlEb3duKCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBtb2RpZnlpbmcgZW5kcywgdXBkYXRlIHRoZSBnZW9tZXRyeSBvYnNlcnZhYmxlIGFuZCBzdG9wIHdhdGNoaW5nIGZvciBjaGFuZ2VzXG4gICAqIEBwYXJhbSBldmVudCBNb2RpZnkgZW5kIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uTW9kaWZ5RW5kKGV2ZW50OiBPbE1vZGlmeUV2ZW50KSB7XG4gICAgdW5CeUtleSh0aGlzLm9uTW9kaWZ5S2V5KTtcbiAgICB0aGlzLmVuZCQubmV4dChldmVudC5mZWF0dXJlcy5pdGVtKDApLmdldEdlb21ldHJ5KCkgYXMgT2xHZW9tZXRyeSk7XG4gICAgdGhpcy51bnN1YnNjcmliZVRvS2V5RG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBzcGFjZSBrZXkgZG93biB0byBwYW4gdGhlIG1hcFxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0tleURvd24oKSB7XG4gICAgdGhpcy5rZXlEb3duJCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXlkb3duJykuc3Vic2NyaWJlKFxuICAgICAgKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICcgJykge1xuICAgICAgICAgIC8vIE9uIHNwYWNlIGJhciwgcGFuIHRvIHRoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uXG4gICAgICAgICAgdGhpcy5vbE1hcC5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBjZW50ZXI6IHRoaXMubW91c2VQb3NpdGlvbixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSB0byBrZXkgZG93blxuICAgKi9cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZVRvS2V5RG93bigpIHtcbiAgICBpZiAodGhpcy5rZXlEb3duJCQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5rZXlEb3duJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgdHJhbnNsYXRlIGludGVyYWN0aW9uIHRvIHRoZSBtYXAgYW4gc2V0IHVwIHNvbWUgbGlzdGVuZXJzXG4gICAqL1xuICBwcml2YXRlIGFkZE9sVHJhbnNsYXRlSW50ZXJhY3Rpb24oKSB7XG4gICAgY29uc3Qgb2xUcmFuc2xhdGVJbnRlcmFjdGlvbiA9IG5ldyBPbFRyYW5zbGF0ZSh7XG4gICAgICBsYXllcnM6IFt0aGlzLm9sT3ZlcmxheUxheWVyXVxuICAgIH0pO1xuICAgIHRoaXMub2xUcmFuc2xhdGVJbnRlcmFjdGlvbiA9IG9sVHJhbnNsYXRlSW50ZXJhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0cmFuc2xhdGUgaW50ZXJhY3Rpb25cbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlT2xUcmFuc2xhdGVJbnRlcmFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5vbFRyYW5zbGF0ZUludGVyYWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRlYWN0aXZhdGVUcmFuc2xhdGVJbnRlcmFjdGlvbigpO1xuICAgIHRoaXMub2xUcmFuc2xhdGVJbnRlcmFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGVUcmFuc2xhdGVJbnRlcmFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5vbFRyYW5zbGF0ZUludGVyYWN0aW9uSXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9sVHJhbnNsYXRlSW50ZXJhY3Rpb25Jc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5vblRyYW5zbGF0ZVN0YXJ0S2V5ID0gdGhpcy5vbFRyYW5zbGF0ZUludGVyYWN0aW9uLm9uKFxuICAgICAgJ3RyYW5zbGF0ZXN0YXJ0JyxcbiAgICAgIChldmVudDogT2xUcmFuc2xhdGVFdmVudCkgPT4gdGhpcy5vblRyYW5zbGF0ZVN0YXJ0KGV2ZW50KVxuICAgICk7XG4gICAgdGhpcy5vblRyYW5zbGF0ZUVuZEtleSA9IHRoaXMub2xUcmFuc2xhdGVJbnRlcmFjdGlvbi5vbihcbiAgICAgICd0cmFuc2xhdGVlbmQnLFxuICAgICAgKGV2ZW50OiBPbFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uVHJhbnNsYXRlRW5kKGV2ZW50KVxuICAgICk7XG4gICAgdGhpcy5vbE1hcC5hZGRJbnRlcmFjdGlvbih0aGlzLm9sVHJhbnNsYXRlSW50ZXJhY3Rpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWFjdGl2YXRlVHJhbnNsYXRlSW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub2xUcmFuc2xhdGVJbnRlcmFjdGlvbklzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2xUcmFuc2xhdGVJbnRlcmFjdGlvbklzQWN0aXZlID0gZmFsc2U7XG4gICAgdW5CeUtleShbXG4gICAgICB0aGlzLm9uVHJhbnNsYXRlU3RhcnRLZXksXG4gICAgICB0aGlzLm9uVHJhbnNsYXRlRW5kS2V5LFxuICAgICAgdGhpcy5vblRyYW5zbGF0ZUtleVxuICAgIF0pO1xuICAgIGlmICh0aGlzLm9sTWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub2xNYXAucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5vbFRyYW5zbGF0ZUludGVyYWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0cmFuc2xhdGlvbiBzdGFydHMsIGNsZWFyIHRoZSBvdmVybGF5IGFuZCBzdGFydCB3YXRjaGluZyBmb3IgY2hhbmdlc1xuICAgKiBAcGFyYW0gZXZlbnQgVHJhbnNsYXRlIHN0YXJ0IGV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uVHJhbnNsYXRlU3RhcnQoZXZlbnQ6IE9sVHJhbnNsYXRlRXZlbnQpIHtcbiAgICBjb25zdCBvbEdlb21ldHJ5ID0gZXZlbnQuZmVhdHVyZXMuaXRlbSgwKS5nZXRHZW9tZXRyeSgpIGFzIE9sR2VvbWV0cnk7XG4gICAgdGhpcy5zdGFydCQubmV4dChvbEdlb21ldHJ5KTtcbiAgICB0aGlzLm9uVHJhbnNsYXRlS2V5ID0gb2xHZW9tZXRyeS5vbihcbiAgICAgICdjaGFuZ2UnLFxuICAgICAgKG9sR2VvbWV0cnlFdmVudDogQmFzaWNFdmVudCkgPT4ge1xuICAgICAgICAvLyB0aGlzLmNoYW5nZXMkLm5leHQob2xHZW9tZXRyeUV2ZW50LnRhcmdldCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRyYW5zbGF0aW9uIGVuZHMsIHVwZGF0ZSB0aGUgZ2VvbWV0cnkgb2JzZXJ2YWJsZSBhbmQgc3RvcCB3YXRjaGlnbiBmb3IgY2hhbmdlc1xuICAgKiBAcGFyYW0gZXZlbnQgVHJhbnNsYXRlIGVuZCBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvblRyYW5zbGF0ZUVuZChldmVudDogT2xUcmFuc2xhdGVFdmVudCkge1xuICAgIHVuQnlLZXkodGhpcy5vblRyYW5zbGF0ZUtleSk7XG4gICAgdGhpcy5lbmQkLm5leHQoZXZlbnQuZmVhdHVyZXMuaXRlbSgwKS5nZXRHZW9tZXRyeSgpIGFzIE9sR2VvbWV0cnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGRyYXcgaW50ZXJhY3Rpb24gdG8gdGhlIG1hcCBhbiBzZXQgdXAgc29tZSBsaXN0ZW5lcnNcbiAgICovXG4gIHByaXZhdGUgYWRkT2xEcmF3SW50ZXJhY3Rpb24oKSB7XG4gICAgY29uc3Qgb2xEcmF3SW50ZXJhY3Rpb24gPSBuZXcgT2xEcmF3KHtcbiAgICAgIHR5cGU6ICdQb2x5Z29uJyxcbiAgICAgIHNvdXJjZTogdGhpcy5vbExpbmVhclJpbmdzU291cmNlLFxuICAgICAgc3RvcENsaWNrOiB0cnVlLFxuICAgICAgc3R5bGU6IGNyZWF0ZURyYXdIb2xlSW50ZXJhY3Rpb25TdHlsZSgpLFxuICAgICAgY29uZGl0aW9uOiAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IG9sT3V0ZXJHZW9tZXRyeSA9IHRoaXMub2xPdXRlckdlb21ldHJ5IHx8IHRoaXMuZ2V0T2xHZW9tZXRyeSgpO1xuICAgICAgICBjb25zdCBpbnRlcnNlY3RzID0gb2xPdXRlckdlb21ldHJ5LmludGVyc2VjdHNDb29yZGluYXRlKFxuICAgICAgICAgIGV2ZW50LmNvb3JkaW5hdGVcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGludGVyc2VjdHM7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9sRHJhd0ludGVyYWN0aW9uID0gb2xEcmF3SW50ZXJhY3Rpb247XG4gICAgdGhpcy5zdWJzY3JpYmVUb0RyYXdLZXlEb3duKCk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIENUUkwga2V5IGRvd24gdG8gYWN0aXZhdGUgdGhlIGRyYXcgY29udHJvbFxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0RyYXdLZXlEb3duKCkge1xuICAgIHRoaXMuZHJhd0tleURvd24kJCA9IGZyb21FdmVudChkb2N1bWVudCwgJ2tleWRvd24nKS5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gJ0NvbnRyb2wnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZVRvRHJhd0tleURvd24oKTtcblxuICAgICAgICBjb25zdCBvbEdlb21ldHJ5ID0gdGhpcy5nZXRPbEdlb21ldHJ5KCk7XG4gICAgICAgIGlmICghb2xHZW9tZXRyeSB8fCAhKG9sR2VvbWV0cnkgaW5zdGFuY2VvZiBPbFBvbHlnb24pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0RyYXdLZXlVcCgpO1xuXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZU1vZGlmeUludGVyYWN0aW9uKCk7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVRyYW5zbGF0ZUludGVyYWN0aW9uKCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVEcmF3SW50ZXJhY3Rpb24oKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBDVFJMIGtleSB1cCB0byBkZWFjdGl2YXRlIHRoZSBkcmF3IGNvbnRyb2xcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9EcmF3S2V5VXAoKSB7XG4gICAgdGhpcy5kcmF3S2V5VXAkJCA9IGZyb21FdmVudChkb2N1bWVudCwgJ2tleXVwJykuc3Vic2NyaWJlKFxuICAgICAgKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT09ICdDb250cm9sJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0RyYXdLZXlVcCgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlVG9LZXlEb3duKCk7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZURyYXdJbnRlcmFjdGlvbigpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVNb2RpZnlJbnRlcmFjdGlvbigpO1xuICAgICAgICBpZiAodGhpcy50cmFuc2xhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlVHJhbnNsYXRlSW50ZXJhY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRHJhd0tleURvd24oKTtcblxuICAgICAgICB0aGlzLm9sT3V0ZXJHZW9tZXRyeSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jbGVhck9sTGluZWFyUmluZ3NTb3VyY2UoKTtcbiAgICAgICAgdGhpcy5lbmQkLm5leHQodGhpcy5nZXRPbEdlb21ldHJ5KCkpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdG8gZHJhdyBrZXkgZG93blxuICAgKi9cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZVRvRHJhd0tleURvd24oKSB7XG4gICAgaWYgKHRoaXMuZHJhd0tleURvd24kJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRyYXdLZXlEb3duJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdG8ga2V5IHVwXG4gICAqL1xuICBwcml2YXRlIHVuc3Vic2NyaWJlVG9EcmF3S2V5VXAoKSB7XG4gICAgaWYgKHRoaXMuZHJhd0tleVVwJCQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kcmF3S2V5VXAkJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGRyYXcgaW50ZXJhY3Rpb25cbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlT2xEcmF3SW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub2xEcmF3SW50ZXJhY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudW5zdWJzY3JpYmVUb0tleURvd24oKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlVG9EcmF3S2V5VXAoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlVG9EcmF3S2V5RG93bigpO1xuICAgIHRoaXMuZGVhY3RpdmF0ZURyYXdJbnRlcmFjdGlvbigpO1xuICAgIHRoaXMuY2xlYXJPbExpbmVhclJpbmdzU291cmNlKCk7XG4gICAgdGhpcy5vbERyYXdJbnRlcmFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSB0aGUgZHJhdyBpbnRlcmFjdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBhY3RpdmF0ZURyYXdJbnRlcmFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5vbERyYXdJbnRlcmFjdGlvbklzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhck9sTGluZWFyUmluZ3NTb3VyY2UoKTtcbiAgICB0aGlzLmFkZE9sTGluZWFyUmluZ3NMYXllcigpO1xuXG4gICAgdGhpcy5vbE1hcC5nZXRJbnRlcmFjdGlvbnMoKS5mb3JFYWNoKChvbEludGVyYWN0aW9uOiBPbEludGVyYWN0aW9uKSA9PiB7XG4gICAgICBpZiAob2xJbnRlcmFjdGlvbiBpbnN0YW5jZW9mIE9sRHJhZ0JveEludGVyYWN0aW9uKSB7XG4gICAgICAgIHRoaXMub2xNYXAucmVtb3ZlSW50ZXJhY3Rpb24ob2xJbnRlcmFjdGlvbik7XG4gICAgICAgIHRoaXMucmVtb3ZlZE9sSW50ZXJhY3Rpb25zLnB1c2gob2xJbnRlcmFjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9sRHJhd0ludGVyYWN0aW9uSXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMub25EcmF3U3RhcnRLZXkgPSB0aGlzLm9sRHJhd0ludGVyYWN0aW9uLm9uKFxuICAgICAgJ2RyYXdzdGFydCcsXG4gICAgICAoZXZlbnQ6IE9sRHJhd0V2ZW50KSA9PiB0aGlzLm9uRHJhd1N0YXJ0KGV2ZW50KVxuICAgICk7XG4gICAgdGhpcy5vbkRyYXdFbmRLZXkgPSB0aGlzLm9sRHJhd0ludGVyYWN0aW9uLm9uKFxuICAgICAgJ2RyYXdlbmQnLFxuICAgICAgKGV2ZW50OiBPbERyYXdFdmVudCkgPT4gdGhpcy5vbkRyYXdFbmQoZXZlbnQpXG4gICAgKTtcbiAgICB0aGlzLm9sTWFwLmFkZEludGVyYWN0aW9uKHRoaXMub2xEcmF3SW50ZXJhY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGUgdGhlIGRyYXcgaW50ZXJhY3Rpb25cbiAgICovXG4gIHByaXZhdGUgZGVhY3RpdmF0ZURyYXdJbnRlcmFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5vbERyYXdJbnRlcmFjdGlvbklzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlT2xMaW5lYXJSaW5nc0xheWVyKCk7XG5cbiAgICB0aGlzLnJlbW92ZWRPbEludGVyYWN0aW9ucy5mb3JFYWNoKChvbEludGVyYWN0aW9uOiBPbEludGVyYWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLm9sTWFwLmFkZEludGVyYWN0aW9uKG9sSW50ZXJhY3Rpb24pO1xuICAgIH0pO1xuICAgIHRoaXMucmVtb3ZlZE9sSW50ZXJhY3Rpb25zID0gW107XG5cbiAgICB0aGlzLm9sRHJhd0ludGVyYWN0aW9uSXNBY3RpdmUgPSBmYWxzZTtcbiAgICB1bkJ5S2V5KFt0aGlzLm9uRHJhd1N0YXJ0S2V5LCB0aGlzLm9uRHJhd0VuZEtleSwgdGhpcy5vbkRyYXdLZXldKTtcbiAgICBpZiAodGhpcy5vbE1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9sTWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMub2xEcmF3SW50ZXJhY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRyYXcgc3RhcnQsIGFkZCBhIG5ldyBsaW5lcmFyIHJpbmcgdG8gdGhlIGdlb21ldHJ5IGFuZCBzdGFydCB3YXRjaGluZyBmb3IgY2hhbmdlc1xuICAgKiBAcGFyYW0gZXZlbnQgRHJhdyBzdGFydCBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbkRyYXdTdGFydChldmVudDogT2xEcmF3RXZlbnQpIHtcbiAgICBjb25zdCBvbEdlb21ldHJ5ID0gZXZlbnQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgIHRoaXMub2xPdXRlckdlb21ldHJ5ID0gdGhpcy5nZXRPbEdlb21ldHJ5KCkuY2xvbmUoKTtcblxuICAgIGNvbnN0IGxpbmVhclJpbmdDb29yZGluYXRlcyA9IG9sR2VvbWV0cnkuZ2V0TGluZWFyUmluZygpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgdGhpcy5hZGRMaW5lYXJSaW5nVG9PbEdlb21ldHJ5KGxpbmVhclJpbmdDb29yZGluYXRlcyk7XG4gICAgdGhpcy5zdGFydCQubmV4dCh0aGlzLmdldE9sR2VvbWV0cnkoKSk7XG5cbiAgICB0aGlzLm9uRHJhd0tleSA9IG9sR2VvbWV0cnkub24oXG4gICAgICAnY2hhbmdlJyxcbiAgICAgIChvbEdlb21ldHJ5RXZlbnQ6IEJhc2ljRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uID0gZ2V0TW91c2VQb3NpdGlvbkZyb21PbEdlb21ldHJ5RXZlbnQoXG4gICAgICAgICAgb2xHZW9tZXRyeUV2ZW50XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG9sR2VvbWV0cnlUYXJnZXQgPSBvbEdlb21ldHJ5RXZlbnQudGFyZ2V0IGFzIE9sUG9seWdvbjtcbiAgICAgICAgY29uc3QgX2xpbmVhclJpbmdDb29yZGluYXRlcyA9IG9sR2VvbWV0cnlUYXJnZXRcbiAgICAgICAgICAuZ2V0TGluZWFyUmluZygwKVxuICAgICAgICAgIC5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpbmVhclJpbmdPZk9sR2VvbWV0cnkoX2xpbmVhclJpbmdDb29yZGluYXRlcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlcyQubmV4dCh0aGlzLmdldE9sR2VvbWV0cnkoKSk7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmliZVRvS2V5RG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJhbnNsYXRpb24gZW5kcywgdXBkYXRlIHRoZSBnZW9tZXRyeSBvYnNlcnZhYmxlIGFuZCBzdG9wIHdhdGNoaWduIGZvciBjaGFuZ2VzXG4gICAqIEBwYXJhbSBldmVudCBEcmF3IGVuZCBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbkRyYXdFbmQoZXZlbnQ6IE9sRHJhd0V2ZW50KSB7XG4gICAgdW5CeUtleSh0aGlzLm9uRHJhd0tleSk7XG4gICAgdGhpcy5vbE91dGVyR2VvbWV0cnkgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBsaW5lYXJSaW5nQ29vcmRpbmF0ZXMgPSBldmVudC5mZWF0dXJlXG4gICAgICAuZ2V0R2VvbWV0cnkoKVxuICAgICAgLmdldExpbmVhclJpbmcoKVxuICAgICAgLmdldENvb3JkaW5hdGVzKCk7XG4gICAgdGhpcy51cGRhdGVMaW5lYXJSaW5nT2ZPbEdlb21ldHJ5KGxpbmVhclJpbmdDb29yZGluYXRlcyk7XG4gICAgdGhpcy5jbGVhck9sTGluZWFyUmluZ3NTb3VyY2UoKTtcbiAgICB0aGlzLmVuZCQubmV4dCh0aGlzLmdldE9sR2VvbWV0cnkoKSk7XG4gICAgdGhpcy51bnN1YnNjcmliZVRvS2V5RG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpbmVhciByaW5nIHRvIHRoZSBnZW9tZXRyeSBiZWluZyBtb2RpZmllZFxuICAgKiBAcGFyYW0gY29vcmRpbmF0ZXMgTGluZWFyIHJpbmcgY29vcmRpbmF0ZXNcbiAgICovXG4gIHByaXZhdGUgYWRkTGluZWFyUmluZ1RvT2xHZW9tZXRyeShjb29yZGluYXRlczogbnVtYmVyW10pIHtcbiAgICBjb25zdCBvbEdlb21ldHJ5ID0gdGhpcy5nZXRPbEdlb21ldHJ5KCkgYXMgT2xQb2x5Z29uO1xuICAgIGNvbnN0IG9sTGluZWFyUmluZyA9IG5ldyBPbExpbmVhclJpbmcoY29vcmRpbmF0ZXMpO1xuICAgIGFkZExpbmVhclJpbmdUb09sUG9seWdvbihvbEdlb21ldHJ5LCBvbExpbmVhclJpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgbGFzdCBsaW5lYXIgcmluZyBvZiB0aGUgZ2VvbWV0cnkgYmVpbmcgbW9kaWZpZWRcbiAgICogQHBhcmFtIGNvb3JkaW5hdGVzIExpbmVhciByaW5nIGNvb3JkaW5hdGVzXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZUxpbmVhclJpbmdPZk9sR2VvbWV0cnkoY29vcmRpbmF0ZXM6IG51bWJlcltdW10pIHtcbiAgICBjb25zdCBvbEdlb21ldHJ5ID0gdGhpcy5nZXRPbEdlb21ldHJ5KCkgYXMgT2xQb2x5Z29uO1xuICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBsaW5lYXIgcmluZyAodGhlIG9uZSB3ZSBhcmUgdXBkYXRpbmcpXG4gICAgY29uc3Qgb2xMaW5lYXJSaW5ncyA9IG9sR2VvbWV0cnkuZ2V0TGluZWFyUmluZ3MoKS5zbGljZSgwLCAtMSk7XG4gICAgY29uc3QgbmV3Q29vcmRpbmF0ZXMgPSBvbExpbmVhclJpbmdzLm1hcCgob2xMaW5lYXJSaW5nOiBPbExpbmVhclJpbmcpID0+IHtcbiAgICAgIHJldHVybiBvbExpbmVhclJpbmcuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICB9KTtcbiAgICBuZXdDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICBvbEdlb21ldHJ5LnNldENvb3JkaW5hdGVzKG5ld0Nvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGdlb21ldHJ5IGJlaW5nIG1vZGlmaWVkXG4gICAqIEByZXR1cm5zIE9MIEdlb21ldHJ5XG4gICAqL1xuICBwcml2YXRlIGdldE9sR2VvbWV0cnkoKTogT2xHZW9tZXRyeSB7XG4gICAgY29uc3Qgb2xGZWF0dXJlcyA9IHRoaXMub2xPdmVybGF5U291cmNlLmdldEZlYXR1cmVzKCk7XG4gICAgcmV0dXJuIG9sRmVhdHVyZXMubGVuZ3RoID4gMCA/IG9sRmVhdHVyZXNbMF0uZ2V0R2VvbWV0cnkoKSA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19