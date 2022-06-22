import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as oleasing from 'ol/easing';
import * as olproj from 'ol/proj';
import { MapViewAction } from '../map.enums';
import { getScaleFromResolution, viewStatesAreEqual } from '../map.utils';
import { MapController } from './controller';
/**
 * Controller to handle map view interactions
 */
export class MapViewController extends MapController {
    constructor(options) {
        super();
        this.options = options;
        /**
         * Observable of the current resolution
         */
        this.resolution$ = new BehaviorSubject(undefined);
        /**
         * Observable of the current state
         */
        this.state$ = new BehaviorSubject(undefined);
        /**
         * View Padding
         */
        this.padding = [0, 0, 0, 0];
        /**
         * Max zoom after set extent
         */
        this.maxZoomOnExtent = 19;
        /**
         * Extent stream
         */
        this.extent$ = new Subject();
        /**
         * History of states
         */
        this.states = [];
        /**
         * Current state index
         */
        this.stateIndex = 0;
    }
    /**
     * Whether the view controller should keep the view's state history
     */
    get stateHistory() {
        return this.options ? this.options.stateHistory === true : false;
    }
    /**
     * OL View
     */
    get olView() {
        return this.olMap.getView();
    }
    /**
     * Add or remove this controller to/from a map.
     * @param map OL Map
     */
    setOlMap(olMap) {
        super.setOlMap(olMap);
        this.setupObservers();
    }
    /**
     * Observe move moveend and subscribe to the extent stream
     */
    setupObservers() {
        if (this.stateHistory === true) {
            this.observerKeys.push(this.olMap.on('moveend', (event) => this.onMoveEnd(event)));
        }
        this.extent$$ = this.extent$
            .pipe(debounceTime(25))
            .subscribe((value) => {
            this.setExtent(value.extent, value.action);
        });
    }
    /**
     * Teardown any observers
     */
    teardownObservers() {
        super.teardownObservers();
        if (this.extent$$ !== undefined) {
            this.extent$$.unsubscribe();
            this.extent$$ = undefined;
        }
    }
    /**
     * Get the view's OL projection
     * @returns OL projection
     */
    getOlProjection() {
        return this.olView.getProjection();
    }
    /**
     * Get the current map view center
     * @param projection Output projection
     * @returns Center
     */
    getCenter(projection) {
        let center = this.olView.getCenter();
        if (projection && center) {
            center = olproj.transform(center, this.getOlProjection(), projection);
        }
        return center;
    }
    /**
     * Get the current view extent
     * @param projection Output projection
     * @returns Extent
     */
    getExtent(projection) {
        let extent = this.olView.calculateExtent(this.olMap.getSize());
        if (projection && extent) {
            extent = olproj.transformExtent(extent, this.getOlProjection(), projection);
        }
        return extent;
    }
    /**
     * Get the current scale
     * @param dpi Dot per inches
     * @returns View scale
     */
    getScale(dpi = 96) {
        return getScaleFromResolution(this.getResolution(), this.getOlProjection().getUnits(), dpi);
    }
    /**
     * Get the current resolution
     * @returns Projection denominator
     */
    getResolution() {
        return this.olView.getResolution();
    }
    /**
     * Get the current zoom level
     * @returns Zoom level
     */
    getZoom() {
        return Math.round(this.olView.getZoom());
    }
    /**
     * Zoom in
     */
    zoomIn() {
        this.zoomTo(this.olView.getZoom() + 1);
    }
    /**
     * Zoom out
     */
    zoomOut() {
        this.zoomTo(this.olView.getZoom() - 1);
    }
    /**
     * Zoom to specific zoom level
     * @param zoom Zoom level
     */
    zoomTo(zoom) {
        this.olView.cancelAnimations();
        this.olView.animate({
            zoom,
            duration: 250,
            easing: oleasing.easeOut
        });
    }
    /**
     * Move to extent after a short delay (100ms) unless
     * a new movement gets registered in the meantime.
     * @param extent Extent to move to
     */
    moveToExtent(extent) {
        this.extent$.next({ extent, action: MapViewAction.Move });
    }
    /**
     * Zoom to extent after a short delay (100ms) unless
     * a new movement gets registered in the meantime.
     * @param extent Extent to zoom to
     */
    zoomToExtent(extent) {
        this.extent$.next({ extent, action: MapViewAction.Zoom });
    }
    /**
     * Return the current view rotation
     * @returns Rotation angle in degrees
     */
    getRotation() {
        return this.olView.getRotation();
    }
    /**
     * Reset the view rotation to 0
     */
    resetRotation() {
        this.olView.animate({ rotation: 0 });
    }
    /**
     * Whether the view has a previous state
     * @returns True if the view has a previous state
     */
    hasPreviousState() {
        return this.states.length > 1 && this.stateIndex > 0;
    }
    /**
     * Whether the view has a next state
     * @returns True if the view has a next state
     */
    hasNextState() {
        return this.states.length > 1 && this.stateIndex < this.states.length - 1;
    }
    /**
     * Restore the previous view state
     */
    previousState() {
        if (this.hasPreviousState()) {
            this.setStateIndex(this.stateIndex - 1);
        }
    }
    /**
     * Restore the next view state
     */
    nextState() {
        if (this.hasNextState()) {
            this.setStateIndex(this.stateIndex + 1);
        }
    }
    /**
     * Clear the state history
     */
    clearStateHistory() {
        this.states = [];
        this.stateIndex = 0;
    }
    /**
     * Update the the view to it's intial state
     */
    setInitialState() {
        if (this.states.length > 0) {
            this.setStateIndex(0);
        }
    }
    /**
     * Move to the extent retrieved from the stream
     * @param extent Extent
     * @param action Either zoom or move
     * @param animation With or without animation to the target extent.
     */
    setExtent(extent, action, animation = true) {
        const olView = this.olView;
        olView.cancelAnimations();
        const duration = animation ? 500 : 0;
        const zoom = olView.getZoom();
        const fromCenter = olView.getCenter();
        const toCenter = [
            extent[0] + (extent[2] - extent[0]) / 2,
            extent[1] + (extent[3] - extent[1]) / 2
        ];
        const distCenter = Math.sqrt(Math.pow(fromCenter[0] - toCenter[0], 2) +
            Math.pow(fromCenter[1] - toCenter[1], 2));
        const fromExtent = olView.calculateExtent();
        const fromSize = Math.sqrt(Math.pow(fromExtent[2] - fromExtent[0], 2) +
            Math.pow(fromExtent[3] - fromExtent[1], 2));
        const toSize = Math.sqrt(Math.pow(extent[2] - extent[0], 2) + Math.pow(extent[3] - extent[1], 2));
        const moySize = (toSize + fromSize) / 2;
        const xSize = distCenter / moySize;
        const maxZoom = action === MapViewAction.Move || zoom > this.maxZoomOnExtent
            ? zoom
            : this.maxZoomOnExtent;
        olView.fit(extent, {
            size: this.olMap.getSize(),
            maxZoom,
            padding: this.padding,
            duration: xSize > 4 ? 0 : duration,
            callback: (isFinished) => {
                if (!isFinished) {
                    olView.fit(extent, {
                        size: this.olMap.getSize(),
                        maxZoom,
                        padding: this.padding,
                        duration: xSize > 4 ? 0 : duration
                    });
                }
            }
        });
    }
    /**
     * Set the view state index
     * @param index State index
     */
    setStateIndex(index) {
        this.stateIndex = index;
        this.setState(this.states[index]);
    }
    /**
     * Set the view state
     * @param state View state
     */
    setState(state) {
        this.olView.animate({
            resolution: state.resolution,
            center: state.center,
            duration: 0
        });
    }
    /**
     * On move end, get the view state and record it.
     * @param event Map event
     */
    onMoveEnd(event) {
        const resolution = this.getResolution();
        if (this.resolution$.value !== resolution) {
            this.resolution$.next(resolution);
        }
        const state = {
            resolution,
            center: this.getCenter(),
            zoom: this.getZoom()
        };
        if (this.stateHistory === true) {
            const stateIndex = this.stateIndex;
            const stateAtIndex = this.states.length === 0 ? undefined : this.states[stateIndex];
            if (!viewStatesAreEqual(state, stateAtIndex)) {
                this.states = this.states.slice(0, stateIndex + 1).concat([state]);
                this.stateIndex = this.states.length - 1;
            }
        }
        this.state$.next(state);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9zaGFyZWQvY29udHJvbGxlcnMvdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBSWxDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFPN0M7O0dBRUc7QUFDSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsYUFBYTtJQTREbEQsWUFBb0IsT0FBa0M7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEVSxZQUFPLEdBQVAsT0FBTyxDQUEyQjtRQTNEdEQ7O1dBRUc7UUFDSCxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFTLFNBQVMsQ0FBQyxDQUFDO1FBRXJEOztXQUVHO1FBQ0gsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFlLFNBQVMsQ0FBQyxDQUFDO1FBRXREOztXQUVHO1FBQ0gsWUFBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkI7O1dBRUc7UUFDSCxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQU9yQjs7V0FFRztRQUNLLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBZ0QsQ0FBQztRQU85RTs7V0FFRztRQUNLLFdBQU0sR0FBbUIsRUFBRSxDQUFDO1FBRXBDOztXQUVHO1FB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LENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUMxQztTQUNGO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9sTWFwIGZyb20gJ29sL01hcCc7XG5pbXBvcnQgT2xNYXBFdmVudCBmcm9tICdvbC9NYXBFdmVudCc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIG9sZWFzaW5nIGZyb20gJ29sL2Vhc2luZyc7XG5pbXBvcnQgKiBhcyBvbHByb2ogZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgT2xQcm9qZWN0aW9uIGZyb20gJ29sL3Byb2ovUHJvamVjdGlvbic7XG5pbXBvcnQgT2xWaWV3IGZyb20gJ29sL1ZpZXcnO1xuXG5pbXBvcnQgeyBNYXBWaWV3QWN0aW9uIH0gZnJvbSAnLi4vbWFwLmVudW1zJztcbmltcG9ydCB7IE1hcEV4dGVudCwgTWFwVmlld1N0YXRlIH0gZnJvbSAnLi4vbWFwLmludGVyZmFjZSc7XG5pbXBvcnQgeyBnZXRTY2FsZUZyb21SZXNvbHV0aW9uLCB2aWV3U3RhdGVzQXJlRXF1YWwgfSBmcm9tICcuLi9tYXAudXRpbHMnO1xuaW1wb3J0IHsgTWFwQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgeyBFdmVudHNLZXkgfSBmcm9tICdvbC9ldmVudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcFZpZXdDb250cm9sbGVyT3B0aW9ucyB7XG4gIHN0YXRlSGlzdG9yeTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDb250cm9sbGVyIHRvIGhhbmRsZSBtYXAgdmlldyBpbnRlcmFjdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIE1hcFZpZXdDb250cm9sbGVyIGV4dGVuZHMgTWFwQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIG9mIHRoZSBjdXJyZW50IHJlc29sdXRpb25cbiAgICovXG4gIHJlc29sdXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KHVuZGVmaW5lZCk7XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICovXG4gIHN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWFwVmlld1N0YXRlPih1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBWaWV3IFBhZGRpbmdcbiAgICovXG4gIHBhZGRpbmcgPSBbMCwgMCwgMCwgMF07XG5cbiAgLyoqXG4gICAqIE1heCB6b29tIGFmdGVyIHNldCBleHRlbnRcbiAgICovXG4gIG1heFpvb21PbkV4dGVudCA9IDE5O1xuXG4gIC8qKlxuICAgKiBNYXggZXh0ZW50IHBvc3NpYmxlIHdoZW4gem9vbWluZ1xuICAgKi9cbiAgbWF4TGF5ZXJab29tRXh0ZW50OiBNYXBFeHRlbnQ7XG5cbiAgLyoqXG4gICAqIEV4dGVudCBzdHJlYW1cbiAgICovXG4gIHByaXZhdGUgZXh0ZW50JCA9IG5ldyBTdWJqZWN0PHsgZXh0ZW50OiBNYXBFeHRlbnQ7IGFjdGlvbjogTWFwVmlld0FjdGlvbiB9PigpO1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIG1vdmVtZW50IHN0cmVhbVxuICAgKi9cbiAgcHJpdmF0ZSBleHRlbnQkJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBIaXN0b3J5IG9mIHN0YXRlc1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0ZXM6IE1hcFZpZXdTdGF0ZVtdID0gW107XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgc3RhdGUgaW5kZXhcbiAgICovXG4gIHByaXZhdGUgc3RhdGVJbmRleDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgdmlldyBjb250cm9sbGVyIHNob3VsZCBrZWVwIHRoZSB2aWV3J3Mgc3RhdGUgaGlzdG9yeVxuICAgKi9cbiAgZ2V0IHN0YXRlSGlzdG9yeSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zID8gdGhpcy5vcHRpb25zLnN0YXRlSGlzdG9yeSA9PT0gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE9MIFZpZXdcbiAgICovXG4gIGdldCBvbFZpZXcoKTogT2xWaWV3IHtcbiAgICByZXR1cm4gdGhpcy5vbE1hcC5nZXRWaWV3KCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM/OiBNYXBWaWV3Q29udHJvbGxlck9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvciByZW1vdmUgdGhpcyBjb250cm9sbGVyIHRvL2Zyb20gYSBtYXAuXG4gICAqIEBwYXJhbSBtYXAgT0wgTWFwXG4gICAqL1xuICBzZXRPbE1hcChvbE1hcDogT2xNYXAgfCB1bmRlZmluZWQpIHtcbiAgICBzdXBlci5zZXRPbE1hcChvbE1hcCk7XG4gICAgdGhpcy5zZXR1cE9ic2VydmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ic2VydmUgbW92ZSBtb3ZlZW5kIGFuZCBzdWJzY3JpYmUgdG8gdGhlIGV4dGVudCBzdHJlYW1cbiAgICovXG4gIHNldHVwT2JzZXJ2ZXJzKCkge1xuICAgIGlmICh0aGlzLnN0YXRlSGlzdG9yeSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5vYnNlcnZlcktleXMucHVzaChcbiAgICAgICAgdGhpcy5vbE1hcC5vbignbW92ZWVuZCcsIChldmVudDogT2xNYXBFdmVudCkgPT4gdGhpcy5vbk1vdmVFbmQoZXZlbnQpKSBhcyBFdmVudHNLZXlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5leHRlbnQkJCA9IHRoaXMuZXh0ZW50JFxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDI1KSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiB7IGV4dGVudDogTWFwRXh0ZW50OyBhY3Rpb246IE1hcFZpZXdBY3Rpb24gfSkgPT4ge1xuICAgICAgICB0aGlzLnNldEV4dGVudCh2YWx1ZS5leHRlbnQsIHZhbHVlLmFjdGlvbik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWFyZG93biBhbnkgb2JzZXJ2ZXJzXG4gICAqL1xuICB0ZWFyZG93bk9ic2VydmVycygpIHtcbiAgICBzdXBlci50ZWFyZG93bk9ic2VydmVycygpO1xuICAgIGlmICh0aGlzLmV4dGVudCQkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZXh0ZW50JCQudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZXh0ZW50JCQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmlldydzIE9MIHByb2plY3Rpb25cbiAgICogQHJldHVybnMgT0wgcHJvamVjdGlvblxuICAgKi9cbiAgZ2V0T2xQcm9qZWN0aW9uKCk6IE9sUHJvamVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMub2xWaWV3LmdldFByb2plY3Rpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgbWFwIHZpZXcgY2VudGVyXG4gICAqIEBwYXJhbSBwcm9qZWN0aW9uIE91dHB1dCBwcm9qZWN0aW9uXG4gICAqIEByZXR1cm5zIENlbnRlclxuICAgKi9cbiAgZ2V0Q2VudGVyKHByb2plY3Rpb24/OiBzdHJpbmcgfCBPbFByb2plY3Rpb24pOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICBsZXQgY2VudGVyID0gdGhpcy5vbFZpZXcuZ2V0Q2VudGVyKCkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICBpZiAocHJvamVjdGlvbiAmJiBjZW50ZXIpIHtcbiAgICAgIGNlbnRlciA9IG9scHJvai50cmFuc2Zvcm0oY2VudGVyLCB0aGlzLmdldE9sUHJvamVjdGlvbigpLCBwcm9qZWN0aW9uKSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICAgIH1cbiAgICByZXR1cm4gY2VudGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB2aWV3IGV4dGVudFxuICAgKiBAcGFyYW0gcHJvamVjdGlvbiBPdXRwdXQgcHJvamVjdGlvblxuICAgKiBAcmV0dXJucyBFeHRlbnRcbiAgICovXG4gIGdldEV4dGVudChwcm9qZWN0aW9uPzogc3RyaW5nIHwgT2xQcm9qZWN0aW9uKTogTWFwRXh0ZW50IHtcbiAgICBsZXQgZXh0ZW50ID0gdGhpcy5vbFZpZXcuY2FsY3VsYXRlRXh0ZW50KHRoaXMub2xNYXAuZ2V0U2l6ZSgpKTtcbiAgICBpZiAocHJvamVjdGlvbiAmJiBleHRlbnQpIHtcbiAgICAgIGV4dGVudCA9IG9scHJvai50cmFuc2Zvcm1FeHRlbnQoXG4gICAgICAgIGV4dGVudCxcbiAgICAgICAgdGhpcy5nZXRPbFByb2plY3Rpb24oKSxcbiAgICAgICAgcHJvamVjdGlvblxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4dGVudCBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgc2NhbGVcbiAgICogQHBhcmFtIGRwaSBEb3QgcGVyIGluY2hlc1xuICAgKiBAcmV0dXJucyBWaWV3IHNjYWxlXG4gICAqL1xuICBnZXRTY2FsZShkcGkgPSA5Nikge1xuICAgIHJldHVybiBnZXRTY2FsZUZyb21SZXNvbHV0aW9uKFxuICAgICAgdGhpcy5nZXRSZXNvbHV0aW9uKCksXG4gICAgICB0aGlzLmdldE9sUHJvamVjdGlvbigpLmdldFVuaXRzKCksXG4gICAgICBkcGlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCByZXNvbHV0aW9uXG4gICAqIEByZXR1cm5zIFByb2plY3Rpb24gZGVub21pbmF0b3JcbiAgICovXG4gIGdldFJlc29sdXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vbFZpZXcuZ2V0UmVzb2x1dGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB6b29tIGxldmVsXG4gICAqIEByZXR1cm5zIFpvb20gbGV2ZWxcbiAgICovXG4gIGdldFpvb20oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLm9sVmlldy5nZXRab29tKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb20gaW5cbiAgICovXG4gIHpvb21JbigpIHtcbiAgICB0aGlzLnpvb21Ubyh0aGlzLm9sVmlldy5nZXRab29tKCkgKyAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29tIG91dFxuICAgKi9cbiAgem9vbU91dCgpIHtcbiAgICB0aGlzLnpvb21Ubyh0aGlzLm9sVmlldy5nZXRab29tKCkgLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29tIHRvIHNwZWNpZmljIHpvb20gbGV2ZWxcbiAgICogQHBhcmFtIHpvb20gWm9vbSBsZXZlbFxuICAgKi9cbiAgem9vbVRvKHpvb206IG51bWJlcikge1xuICAgIHRoaXMub2xWaWV3LmNhbmNlbEFuaW1hdGlvbnMoKTtcbiAgICB0aGlzLm9sVmlldy5hbmltYXRlKHtcbiAgICAgIHpvb20sXG4gICAgICBkdXJhdGlvbjogMjUwLFxuICAgICAgZWFzaW5nOiBvbGVhc2luZy5lYXNlT3V0XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0byBleHRlbnQgYWZ0ZXIgYSBzaG9ydCBkZWxheSAoMTAwbXMpIHVubGVzc1xuICAgKiBhIG5ldyBtb3ZlbWVudCBnZXRzIHJlZ2lzdGVyZWQgaW4gdGhlIG1lYW50aW1lLlxuICAgKiBAcGFyYW0gZXh0ZW50IEV4dGVudCB0byBtb3ZlIHRvXG4gICAqL1xuICBtb3ZlVG9FeHRlbnQoZXh0ZW50OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSkge1xuICAgIHRoaXMuZXh0ZW50JC5uZXh0KHsgZXh0ZW50LCBhY3Rpb246IE1hcFZpZXdBY3Rpb24uTW92ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29tIHRvIGV4dGVudCBhZnRlciBhIHNob3J0IGRlbGF5ICgxMDBtcykgdW5sZXNzXG4gICAqIGEgbmV3IG1vdmVtZW50IGdldHMgcmVnaXN0ZXJlZCBpbiB0aGUgbWVhbnRpbWUuXG4gICAqIEBwYXJhbSBleHRlbnQgRXh0ZW50IHRvIHpvb20gdG9cbiAgICovXG4gIHpvb21Ub0V4dGVudChleHRlbnQ6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKSB7XG4gICAgdGhpcy5leHRlbnQkLm5leHQoeyBleHRlbnQsIGFjdGlvbjogTWFwVmlld0FjdGlvbi5ab29tIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCB2aWV3IHJvdGF0aW9uXG4gICAqIEByZXR1cm5zIFJvdGF0aW9uIGFuZ2xlIGluIGRlZ3JlZXNcbiAgICovXG4gIGdldFJvdGF0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub2xWaWV3LmdldFJvdGF0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHZpZXcgcm90YXRpb24gdG8gMFxuICAgKi9cbiAgcmVzZXRSb3RhdGlvbigpIHtcbiAgICB0aGlzLm9sVmlldy5hbmltYXRlKHsgcm90YXRpb246IDAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgdmlldyBoYXMgYSBwcmV2aW91cyBzdGF0ZVxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2aWV3IGhhcyBhIHByZXZpb3VzIHN0YXRlXG4gICAqL1xuICBoYXNQcmV2aW91c1N0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlcy5sZW5ndGggPiAxICYmIHRoaXMuc3RhdGVJbmRleCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgdmlldyBoYXMgYSBuZXh0IHN0YXRlXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZpZXcgaGFzIGEgbmV4dCBzdGF0ZVxuICAgKi9cbiAgaGFzTmV4dFN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlcy5sZW5ndGggPiAxICYmIHRoaXMuc3RhdGVJbmRleCA8IHRoaXMuc3RhdGVzLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogUmVzdG9yZSB0aGUgcHJldmlvdXMgdmlldyBzdGF0ZVxuICAgKi9cbiAgcHJldmlvdXNTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5oYXNQcmV2aW91c1N0YXRlKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGVJbmRleCh0aGlzLnN0YXRlSW5kZXggLSAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzdG9yZSB0aGUgbmV4dCB2aWV3IHN0YXRlXG4gICAqL1xuICBuZXh0U3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuaGFzTmV4dFN0YXRlKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGVJbmRleCh0aGlzLnN0YXRlSW5kZXggKyAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHN0YXRlIGhpc3RvcnlcbiAgICovXG4gIGNsZWFyU3RhdGVIaXN0b3J5KCkge1xuICAgIHRoaXMuc3RhdGVzID0gW107XG4gICAgdGhpcy5zdGF0ZUluZGV4ID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHRoZSB2aWV3IHRvIGl0J3MgaW50aWFsIHN0YXRlXG4gICAqL1xuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGVJbmRleCgwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0byB0aGUgZXh0ZW50IHJldHJpZXZlZCBmcm9tIHRoZSBzdHJlYW1cbiAgICogQHBhcmFtIGV4dGVudCBFeHRlbnRcbiAgICogQHBhcmFtIGFjdGlvbiBFaXRoZXIgem9vbSBvciBtb3ZlXG4gICAqIEBwYXJhbSBhbmltYXRpb24gV2l0aCBvciB3aXRob3V0IGFuaW1hdGlvbiB0byB0aGUgdGFyZ2V0IGV4dGVudC5cbiAgICovXG4gIHByaXZhdGUgc2V0RXh0ZW50KFxuICAgIGV4dGVudDogTWFwRXh0ZW50LFxuICAgIGFjdGlvbjogTWFwVmlld0FjdGlvbixcbiAgICBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGNvbnN0IG9sVmlldyA9IHRoaXMub2xWaWV3O1xuICAgIG9sVmlldy5jYW5jZWxBbmltYXRpb25zKCk7XG4gICAgY29uc3QgZHVyYXRpb24gPSBhbmltYXRpb24gPyA1MDAgOiAwO1xuICAgIGNvbnN0IHpvb20gPSBvbFZpZXcuZ2V0Wm9vbSgpO1xuXG4gICAgY29uc3QgZnJvbUNlbnRlciA9IG9sVmlldy5nZXRDZW50ZXIoKTtcbiAgICBjb25zdCB0b0NlbnRlciA9IFtcbiAgICAgIGV4dGVudFswXSArIChleHRlbnRbMl0gLSBleHRlbnRbMF0pIC8gMixcbiAgICAgIGV4dGVudFsxXSArIChleHRlbnRbM10gLSBleHRlbnRbMV0pIC8gMlxuICAgIF07XG4gICAgY29uc3QgZGlzdENlbnRlciA9IE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KGZyb21DZW50ZXJbMF0gLSB0b0NlbnRlclswXSwgMikgK1xuICAgICAgICBNYXRoLnBvdyhmcm9tQ2VudGVyWzFdIC0gdG9DZW50ZXJbMV0sIDIpXG4gICAgKTtcbiAgICBjb25zdCBmcm9tRXh0ZW50ID0gb2xWaWV3LmNhbGN1bGF0ZUV4dGVudCgpO1xuICAgIGNvbnN0IGZyb21TaXplID0gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3coZnJvbUV4dGVudFsyXSAtIGZyb21FeHRlbnRbMF0sIDIpICtcbiAgICAgICAgTWF0aC5wb3coZnJvbUV4dGVudFszXSAtIGZyb21FeHRlbnRbMV0sIDIpXG4gICAgKTtcbiAgICBjb25zdCB0b1NpemUgPSBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhleHRlbnRbMl0gLSBleHRlbnRbMF0sIDIpICsgTWF0aC5wb3coZXh0ZW50WzNdIC0gZXh0ZW50WzFdLCAyKVxuICAgICk7XG4gICAgY29uc3QgbW95U2l6ZSA9ICh0b1NpemUgKyBmcm9tU2l6ZSkgLyAyO1xuICAgIGNvbnN0IHhTaXplID0gZGlzdENlbnRlciAvIG1veVNpemU7XG5cbiAgICBjb25zdCBtYXhab29tID1cbiAgICAgIGFjdGlvbiA9PT0gTWFwVmlld0FjdGlvbi5Nb3ZlIHx8IHpvb20gPiB0aGlzLm1heFpvb21PbkV4dGVudFxuICAgICAgICA/IHpvb21cbiAgICAgICAgOiB0aGlzLm1heFpvb21PbkV4dGVudDtcblxuICAgIG9sVmlldy5maXQoZXh0ZW50LCB7XG4gICAgICBzaXplOiB0aGlzLm9sTWFwLmdldFNpemUoKSxcbiAgICAgIG1heFpvb20sXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBkdXJhdGlvbjogeFNpemUgPiA0ID8gMCA6IGR1cmF0aW9uLFxuICAgICAgY2FsbGJhY2s6IChpc0ZpbmlzaGVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmICghaXNGaW5pc2hlZCkge1xuICAgICAgICAgIG9sVmlldy5maXQoZXh0ZW50LCB7XG4gICAgICAgICAgICBzaXplOiB0aGlzLm9sTWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgIG1heFpvb20sXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICAgICAgICBkdXJhdGlvbjogeFNpemUgPiA0ID8gMCA6IGR1cmF0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZpZXcgc3RhdGUgaW5kZXhcbiAgICogQHBhcmFtIGluZGV4IFN0YXRlIGluZGV4XG4gICAqL1xuICBwcml2YXRlIHNldFN0YXRlSW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc3RhdGVJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZXNbaW5kZXhdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZpZXcgc3RhdGVcbiAgICogQHBhcmFtIHN0YXRlIFZpZXcgc3RhdGVcbiAgICovXG4gIHByaXZhdGUgc2V0U3RhdGUoc3RhdGU6IE1hcFZpZXdTdGF0ZSkge1xuICAgIHRoaXMub2xWaWV3LmFuaW1hdGUoe1xuICAgICAgcmVzb2x1dGlvbjogc3RhdGUucmVzb2x1dGlvbixcbiAgICAgIGNlbnRlcjogc3RhdGUuY2VudGVyLFxuICAgICAgZHVyYXRpb246IDBcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBtb3ZlIGVuZCwgZ2V0IHRoZSB2aWV3IHN0YXRlIGFuZCByZWNvcmQgaXQuXG4gICAqIEBwYXJhbSBldmVudCBNYXAgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25Nb3ZlRW5kKGV2ZW50OiBPbE1hcEV2ZW50KSB7XG4gICAgY29uc3QgcmVzb2x1dGlvbiA9IHRoaXMuZ2V0UmVzb2x1dGlvbigpO1xuICAgIGlmICh0aGlzLnJlc29sdXRpb24kLnZhbHVlICE9PSByZXNvbHV0aW9uKSB7XG4gICAgICB0aGlzLnJlc29sdXRpb24kLm5leHQocmVzb2x1dGlvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICByZXNvbHV0aW9uLFxuICAgICAgY2VudGVyOiB0aGlzLmdldENlbnRlcigpLFxuICAgICAgem9vbTogdGhpcy5nZXRab29tKClcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuc3RhdGVIaXN0b3J5ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBzdGF0ZUluZGV4ID0gdGhpcy5zdGF0ZUluZGV4O1xuICAgICAgY29uc3Qgc3RhdGVBdEluZGV4ID1cbiAgICAgICAgdGhpcy5zdGF0ZXMubGVuZ3RoID09PSAwID8gdW5kZWZpbmVkIDogdGhpcy5zdGF0ZXNbc3RhdGVJbmRleF07XG4gICAgICBpZiAoIXZpZXdTdGF0ZXNBcmVFcXVhbChzdGF0ZSwgc3RhdGVBdEluZGV4KSkge1xuICAgICAgICB0aGlzLnN0YXRlcyA9IHRoaXMuc3RhdGVzLnNsaWNlKDAsIHN0YXRlSW5kZXggKyAxKS5jb25jYXQoW3N0YXRlXSk7XG4gICAgICAgIHRoaXMuc3RhdGVJbmRleCA9IHRoaXMuc3RhdGVzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSQubmV4dChzdGF0ZSk7XG4gIH1cbn1cbiJdfQ==