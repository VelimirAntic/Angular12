import { Directive, Input, Output, EventEmitter, Self } from '@angular/core';
import { transform } from 'ol/proj';
import { unByKey } from 'ol/Observable';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map-browser/map-browser.component";
import * as i2 from "@igo2/core";
/**
 * This directive return the pointer coordinate (on click or pointermove)
 * in [longitude, latitude], delayed by in input (pointerMoveDelay)
 * to avoid too many emitted values.
 */
export class PointerPositionDirective {
    constructor(component, mediaService) {
        this.component = component;
        this.mediaService = mediaService;
        /**
         * Delay before emitting an event
         */
        this.pointerPositionDelay = 1000;
        /**
         * Event emitted when the pointer move, delayed by pointerMoveDelay
         */
        this.pointerPositionCoord = new EventEmitter();
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
     * Start listening to pointermove
     * @internal
     */
    ngOnInit() {
        this.listenToMapPointerMove();
        this.listenToMapClick();
    }
    /**
     * Stop listening to pointermove
     * @internal
     */
    ngOnDestroy() {
        this.unlistenToMapPointerMove();
        this.unlistenToMapClick();
    }
    /**
     * On map pointermove
     */
    listenToMapPointerMove() {
        this.pointerMoveListener = this.map.ol.on('pointermove', (event) => this.onPointerEvent(event, this.pointerPositionDelay));
    }
    /**
     * On map click
     */
    listenToMapClick() {
        this.mapClickListener = this.map.ol.on('singleclick', (event) => this.onPointerEvent(event, 0));
    }
    /**
     * Stop listening for map pointermove
     */
    unlistenToMapPointerMove() {
        unByKey(this.pointerMoveListener);
        this.pointerMoveListener = undefined;
    }
    /**
     * Stop listening for map clicks
     */
    unlistenToMapClick() {
        this.mapClickListener = undefined;
    }
    /**
     * emit delayed coordinate (longitude, latitude array) based on pointerMoveDelay or on click
     * @param event OL map browser pointer event
     */
    onPointerEvent(event, delay) {
        if (event.dragging || this.mediaService.isTouchScreen()) {
            return;
        }
        if (typeof this.lastTimeoutRequest !== 'undefined') { // cancel timeout when the mouse moves
            clearTimeout(this.lastTimeoutRequest);
        }
        const lonlat = transform(event.coordinate, this.mapProjection, 'EPSG:4326');
        this.lastTimeoutRequest = setTimeout(() => {
            this.pointerPositionCoord.emit(lonlat);
        }, delay);
    }
}
PointerPositionDirective.ɵfac = function PointerPositionDirective_Factory(t) { return new (t || PointerPositionDirective)(i0.ɵɵdirectiveInject(i1.MapBrowserComponent, 2), i0.ɵɵdirectiveInject(i2.MediaService)); };
PointerPositionDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PointerPositionDirective, selectors: [["", "igoPointerPosition", ""]], inputs: { pointerPositionDelay: "pointerPositionDelay" }, outputs: { pointerPositionCoord: "pointerPositionCoord" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PointerPositionDirective, [{
        type: Directive,
        args: [{
                selector: '[igoPointerPosition]'
            }]
    }], function () { return [{ type: i1.MapBrowserComponent, decorators: [{
                type: Self
            }] }, { type: i2.MediaService }]; }, { pointerPositionDelay: [{
            type: Input
        }], pointerPositionCoord: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXBvaW50ZXItcG9zaXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWFwL3NoYXJlZC9tYXAtcG9pbnRlci1wb3NpdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWixJQUFJLEVBRUwsTUFBTSxlQUFlLENBQUM7QUFPdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBQ3hDOzs7O0dBSUc7QUFJSCxNQUFNLE9BQU8sd0JBQXdCO0lBb0NuQyxZQUNrQixTQUE4QixFQUN0QyxZQUEwQjtRQURsQixjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUN0QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXhCcEM7O1dBRUc7UUFDTSx5QkFBb0IsR0FBVyxJQUFJLENBQUM7UUFFN0M7O1dBRUc7UUFDTyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztJQWlCbEUsQ0FBQztJQWZMOzs7T0FHRztJQUNILElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFjLENBQUMsVUFBVSxDQUFDO0lBQ25ELENBQUM7SUFPRDs7O09BR0c7SUFDSCxRQUFRO1FBQ04sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxzQkFBc0I7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FDdkMsYUFBYSxFQUNiLENBQUMsS0FBa0MsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQzlGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FDcEMsYUFBYSxFQUNiLENBQUMsS0FBa0MsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQ3RFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSyx3QkFBd0I7UUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGNBQWMsQ0FBQyxLQUFrQyxFQUFFLEtBQWE7UUFDdEUsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFBQyxPQUFPO1NBQUU7UUFDbkUsSUFBSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxXQUFXLEVBQUUsRUFBRSxzQ0FBc0M7WUFDMUYsWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQXFCLENBQUM7UUFDaEcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDeEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDWixDQUFDOztnR0E1R1Usd0JBQXdCOzJFQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUhwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjthQUNqQzs7c0JBc0NJLElBQUk7bURBcEJFLG9CQUFvQjtrQkFBNUIsS0FBSztZQUtJLG9CQUFvQjtrQkFBN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIFNlbGYsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IE1hcEJyb3dzZXJQb2ludGVyRXZlbnQgZnJvbSAnb2wvTWFwQnJvd3NlckV2ZW50JztcblxuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwL3NoYXJlZC9tYXAnO1xuaW1wb3J0IHsgTWFwQnJvd3NlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hcC9tYXAtYnJvd3Nlci9tYXAtYnJvd3Nlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgdW5CeUtleSB9IGZyb20gJ29sL09ic2VydmFibGUnO1xuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSByZXR1cm4gdGhlIHBvaW50ZXIgY29vcmRpbmF0ZSAob24gY2xpY2sgb3IgcG9pbnRlcm1vdmUpXG4gKiBpbiBbbG9uZ2l0dWRlLCBsYXRpdHVkZV0sIGRlbGF5ZWQgYnkgaW4gaW5wdXQgKHBvaW50ZXJNb3ZlRGVsYXkpXG4gKiB0byBhdm9pZCB0b28gbWFueSBlbWl0dGVkIHZhbHVlcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lnb1BvaW50ZXJQb3NpdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFBvaW50ZXJQb3NpdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIGxhc3RUaW1lb3V0UmVxdWVzdDtcblxuICAvKipcbiAgICogTGlzdGVuZXIgdG8gdGhlIHBvaW50ZXIgbW92ZSBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBwb2ludGVyTW92ZUxpc3RlbmVyO1xuXG4gIC8qKlxuICAgKiBMaXN0ZW5lciB0byB0aGUgbWFwIGNsaWNrIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIG1hcENsaWNrTGlzdGVuZXI7XG5cbiAgLyoqXG4gICAqIERlbGF5IGJlZm9yZSBlbWl0dGluZyBhbiBldmVudFxuICAgKi9cbiAgQElucHV0KCkgcG9pbnRlclBvc2l0aW9uRGVsYXk6IG51bWJlciA9IDEwMDA7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcG9pbnRlciBtb3ZlLCBkZWxheWVkIGJ5IHBvaW50ZXJNb3ZlRGVsYXlcbiAgICovXG4gIEBPdXRwdXQoKSBwb2ludGVyUG9zaXRpb25Db29yZCA9IG5ldyBFdmVudEVtaXR0ZXI8W251bWJlciwgbnVtYmVyXT4oKTtcblxuICAvKipcbiAgICogSUdPIG1hcFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCBtYXAoKTogSWdvTWFwIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQubWFwO1xuICB9XG5cbiAgZ2V0IG1hcFByb2plY3Rpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMuY29tcG9uZW50Lm1hcCBhcyBJZ29NYXApLnByb2plY3Rpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2VsZigpIHByaXZhdGUgY29tcG9uZW50OiBNYXBCcm93c2VyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2VcbiAgKSB7IH1cblxuICAvKipcbiAgICogU3RhcnQgbGlzdGVuaW5nIHRvIHBvaW50ZXJtb3ZlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5Ub01hcFBvaW50ZXJNb3ZlKCk7XG4gICAgdGhpcy5saXN0ZW5Ub01hcENsaWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBsaXN0ZW5pbmcgdG8gcG9pbnRlcm1vdmVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVubGlzdGVuVG9NYXBQb2ludGVyTW92ZSgpO1xuICAgIHRoaXMudW5saXN0ZW5Ub01hcENsaWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogT24gbWFwIHBvaW50ZXJtb3ZlXG4gICAqL1xuICBwcml2YXRlIGxpc3RlblRvTWFwUG9pbnRlck1vdmUoKSB7XG4gICAgdGhpcy5wb2ludGVyTW92ZUxpc3RlbmVyID0gdGhpcy5tYXAub2wub24oXG4gICAgICAncG9pbnRlcm1vdmUnLFxuICAgICAgKGV2ZW50OiBNYXBCcm93c2VyUG9pbnRlckV2ZW50PGFueT4pID0+IHRoaXMub25Qb2ludGVyRXZlbnQoZXZlbnQsIHRoaXMucG9pbnRlclBvc2l0aW9uRGVsYXkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBtYXAgY2xpY2tcbiAgICovXG4gIHByaXZhdGUgbGlzdGVuVG9NYXBDbGljaygpIHtcbiAgICB0aGlzLm1hcENsaWNrTGlzdGVuZXIgPSB0aGlzLm1hcC5vbC5vbihcbiAgICAgICdzaW5nbGVjbGljaycsXG4gICAgICAoZXZlbnQ6IE1hcEJyb3dzZXJQb2ludGVyRXZlbnQ8YW55PikgPT4gdGhpcy5vblBvaW50ZXJFdmVudChldmVudCwgMClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgbGlzdGVuaW5nIGZvciBtYXAgcG9pbnRlcm1vdmVcbiAgICovXG4gIHByaXZhdGUgdW5saXN0ZW5Ub01hcFBvaW50ZXJNb3ZlKCkge1xuICAgIHVuQnlLZXkodGhpcy5wb2ludGVyTW92ZUxpc3RlbmVyKTtcbiAgICB0aGlzLnBvaW50ZXJNb3ZlTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBsaXN0ZW5pbmcgZm9yIG1hcCBjbGlja3NcbiAgICovXG4gIHByaXZhdGUgdW5saXN0ZW5Ub01hcENsaWNrKCkge1xuICAgIHRoaXMubWFwQ2xpY2tMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0IGRlbGF5ZWQgY29vcmRpbmF0ZSAobG9uZ2l0dWRlLCBsYXRpdHVkZSBhcnJheSkgYmFzZWQgb24gcG9pbnRlck1vdmVEZWxheSBvciBvbiBjbGlja1xuICAgKiBAcGFyYW0gZXZlbnQgT0wgbWFwIGJyb3dzZXIgcG9pbnRlciBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvblBvaW50ZXJFdmVudChldmVudDogTWFwQnJvd3NlclBvaW50ZXJFdmVudDxhbnk+LCBkZWxheTogbnVtYmVyKSB7XG4gICAgaWYgKGV2ZW50LmRyYWdnaW5nIHx8IHRoaXMubWVkaWFTZXJ2aWNlLmlzVG91Y2hTY3JlZW4oKSkge3JldHVybjsgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5sYXN0VGltZW91dFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7IC8vIGNhbmNlbCB0aW1lb3V0IHdoZW4gdGhlIG1vdXNlIG1vdmVzXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5sYXN0VGltZW91dFJlcXVlc3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvbmxhdCA9IHRyYW5zZm9ybShldmVudC5jb29yZGluYXRlLCB0aGlzLm1hcFByb2plY3Rpb24sICdFUFNHOjQzMjYnKSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHRoaXMubGFzdFRpbWVvdXRSZXF1ZXN0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnBvaW50ZXJQb3NpdGlvbkNvb3JkLmVtaXQobG9ubGF0KTtcbiAgICB9LCBkZWxheSk7XG4gIH1cbn1cbiJdfQ==