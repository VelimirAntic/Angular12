import { Component, Input } from '@angular/core';
import { getRenderPixel } from 'ol/render';
import * as i0 from "@angular/core";
/**
 * Tool to swipe the layers
 */
export class SwipeControlComponent {
    constructor() {
        /**
         * State of draggable action
         */
        this.inDragAction = false;
        /**
         * Binder of prerender on the same element
         */
        this.boundPrerender = this.prerender.bind(this);
    }
    /**
     * Get the list of layers for swipe and activate of deactivate the swipe
     * @internal
     */
    ngAfterViewInit() {
        this.getListOfLayers();
        this.swipeEnabled$$ = this.map.swipeEnabled$.subscribe(value => {
            value ? this.displaySwipe() : this.displaySwipeOff();
        });
        this.letZoom();
    }
    /**
     * Clear the overlay layer and any interaction added by this component.
     * @internal
     */
    ngOnDestroy() {
        this.swipeEnabled$$.unsubscribe();
        this.map.swipeEnabled$.unsubscribe();
        this.displaySwipeOff();
    }
    /**
     * Display a swipe-element and render the layers
     */
    displaySwipe() {
        this.swipeId.style.visibility = 'visible';
        this.layers.map(layer => layer.ol.on('prerender', this.boundPrerender));
        this.layers.map(layer => layer.ol.on('postrender', this.postrender));
        this.map.ol.render();
    }
    /**
     * Clear a swipe-element and render the layers on the initial state
     */
    displaySwipeOff() {
        this.swipeId.style.visibility = 'hidden';
        this.layers.map(layer => layer.ol.un('prerender', this.boundPrerender));
        this.layers.map(layer => layer.ol.un('postrender', this.postrender));
        this.map.ol.render();
        this.layers = [];
    }
    /**
     * Getter of element
     */
    get swipeId() {
        return document.getElementById('igo-layer-swipe');
    }
    /**
     * Get the list of layers for swipe
     */
    getListOfLayers() {
        this.map.selectedFeatures$.subscribe(layers => {
            this.layers = [];
            if (layers !== null) {
                for (const layer of layers) {
                    if (!this.layers.includes(layer)) {
                        this.layers.push(layer);
                    }
                }
            }
        });
    }
    /**
     * Get a position of click or touch
     */
    dragDown(event) {
        this.inDragAction = true;
        event.preventDefault();
        if (event.type === 'mousedown') {
            this.pos3 = event.clientX;
            this.mouseSwipe();
            document.onmouseup = this.closeDragMouseElement;
        }
        else if (event.type === 'touchstart') {
            document.getElementById('arrows').style.visibility = 'hidden';
            this.pos3 = event.touches[0].clientX;
            this.touchSwipe();
            document.ontouchend = this.closeDragTouchElement;
        }
    }
    /**
     * Moving a line with a mouse
     */
    mouseSwipe() {
        document.addEventListener('mousemove', event => {
            if (this.inDragAction) {
                event.preventDefault();
                this.pos1 = this.pos3 - event.clientX;
                this.pos3 = event.clientX;
                this.swipeId.style.left = (this.swipeId.offsetLeft - this.pos1) + 'px';
            }
            this.map.ol.render();
        });
    }
    /**
     * Moving a line with a touch
     */
    touchSwipe() {
        document.addEventListener('touchmove', event => {
            if (this.inDragAction) {
                event.preventDefault();
                document.getElementById('arrows').style.visibility = 'hidden';
                this.pos1 = this.pos3 - event.changedTouches[0].clientX;
                this.pos3 = event.changedTouches[0].clientX;
                this.swipeId.style.left = (this.swipeId.offsetLeft - this.pos1) + 'px';
            }
            this.map.ol.render();
        });
    }
    /**
     * Deactivate a listener of a mouse-action
     */
    closeDragMouseElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        this.inDragAction = false;
    }
    /**
     * Deactivate a listener of a touch-action
     */
    closeDragTouchElement() {
        document.ontouchend = null;
        document.ontouchmove = null;
        document.getElementById('arrows').style.visibility = 'visible';
        this.inDragAction = false;
    }
    /**
     * Cut the image of a layer by the position of swiped-element
     */
    prerender(event) {
        const ctx = event.context;
        const mapSize = this.map.ol.getSize();
        const width = this.swipeId.offsetLeft;
        const tl = getRenderPixel(event, [width, 0]);
        const tr = getRenderPixel(event, [0, 0]);
        const bl = getRenderPixel(event, [width, mapSize[1]]);
        const br = getRenderPixel(event, [0, mapSize[1]]);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tl[0], tl[1]);
        ctx.lineTo(bl[0], bl[1]);
        ctx.lineTo(br[0], br[1]);
        ctx.lineTo(tr[0], tr[1]);
        ctx.closePath();
        ctx.clip();
    }
    /**
     * Save a current state of the context
     */
    postrender(event) {
        event.context.restore();
        event.context.save();
    }
    /**
     * Zoom on div
     */
    letZoom() {
        document.getElementById('igo-layer-swipe').addEventListener('wheel', event => {
            event.deltaY > 0 ? this.map.viewController.zoomOut() : this.map.viewController.zoomIn();
        }, true);
    }
}
SwipeControlComponent.ɵfac = function SwipeControlComponent_Factory(t) { return new (t || SwipeControlComponent)(); };
SwipeControlComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SwipeControlComponent, selectors: [["igo-swipe-control"]], inputs: { map: "map" }, decls: 5, vars: 0, consts: [["id", "igo-layer-swipe", 1, "igo-swipe-control-container", 3, "mousedown", "mouseup", "touchstart", "touchend"], [1, "igo-swipe-control-line"], ["id", "arrows", 1, "igo-swipe-control-arrows"], [1, "igo-arrow-left"], [1, "igo-arrow-right"]], template: function SwipeControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("mousedown", function SwipeControlComponent_Template_div_mousedown_0_listener($event) { return ctx.dragDown($event); })("mouseup", function SwipeControlComponent_Template_div_mouseup_0_listener() { return ctx.closeDragMouseElement(); })("touchstart", function SwipeControlComponent_Template_div_touchstart_0_listener($event) { return ctx.dragDown($event); })("touchend", function SwipeControlComponent_Template_div_touchend_0_listener() { return ctx.closeDragTouchElement(); });
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelement(4, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: [".igo-swipe-control-container[_ngcontent-%COMP%]{position:absolute;width:80px;height:100%;top:0%;left:50%;cursor:-webkit-grab;cursor:grab;z-index:1;transform:translate(-40px)}.igo-swipe-control-container[_ngcontent-%COMP%]:active{cursor:-webkit-grabbing;cursor:grabbing}.igo-swipe-control-line[_ngcontent-%COMP%]{position:absolute;width:4px;height:100%;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#5e5a5a}.igo-swipe-control-arrows[_ngcontent-%COMP%]{position:absolute;width:32px;height:32px;left:50%;top:50%;transform:translate(-50%,-50%);margin-top:-16px;padding:5px 4px;background-color:#5e5a5a;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0)}.igo-swipe-control-arrows[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent}.igo-swipe-control-arrows[_ngcontent-%COMP%]   .igo-arrow-right[_ngcontent-%COMP%]{margin-left:4px;border-left:10px solid white}.igo-swipe-control-arrows[_ngcontent-%COMP%]   .igo-arrow-left[_ngcontent-%COMP%]{border-right:10px solid white}.igo-swipe-control-arrows[_ngcontent-%COMP%]:active{display:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SwipeControlComponent, [{
        type: Component,
        args: [{
                selector: 'igo-swipe-control',
                templateUrl: './swipe-control.component.html',
                styleUrls: ['./swipe-control.component.scss']
            }]
    }], function () { return []; }, { map: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9tYXAvc3dpcGUtY29udHJvbC9zd2lwZS1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9zd2lwZS1jb250cm9sL3N3aXBlLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBRzNDOztHQUVHO0FBT0gsTUFBTSxPQUFPLHFCQUFxQjtJQXNDaEM7UUFmQTs7V0FFRztRQUNLLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBT3RDOztXQUVHO1FBQ0ssbUJBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUdsRCxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzRCxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFB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QUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUYsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7MEZBcE5RLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDZmxDLDhCQUl1QztRQUhyQyw2R0FBYSxvQkFBZ0IsSUFBQyxzRkFDbkIsMkJBQXVCLElBREosa0dBRWhCLG9CQUFnQixJQUZBLHdGQUdsQiwyQkFBdUIsSUFITDtRQUk5Qix5QkFBMkM7UUFFM0MsOEJBQWtEO1FBQ2hELHlCQUFrQztRQUNsQyx5QkFBbUM7UUFDckMsaUJBQU07UUFDUixpQkFBTTs7dUZESU8scUJBQXFCO2NBTmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QztzQ0FRVSxHQUFHO2tCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vLi4vbGF5ZXInO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vc2hhcmVkL21hcCc7XG5pbXBvcnQgeyBnZXRSZW5kZXJQaXhlbCB9IGZyb20gJ29sL3JlbmRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBUb29sIHRvIHN3aXBlIHRoZSBsYXllcnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXN3aXBlLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpcGUtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N3aXBlLWNvbnRyb2wuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFN3aXBlQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cblxuICAvKipcbiAgICogR2V0IGFuIGFjdGl2ZSBtYXBcbiAgICovXG4gIEBJbnB1dCgpIG1hcDogSWdvTWFwO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBsYXllcnMgZm9yIHN3aXBlXG4gICAqL1xuICBwcml2YXRlIGxheWVyczogTGF5ZXJbXTtcblxuICAvKipcbiAgICogRmluYWwgcG9zaXRpb24gb2YgdGhlIHN3aXBlZCBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIHBvczE6IG51bWJlcjtcblxuICAvKipcbiAgICogSW50ZXJtZWRpYXRlIHBvc2l0aW9uIG9mIHRoZSBzd2lwZWQgZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBwb3MzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFN0YXRlIG9mIGRyYWdnYWJsZSBhY3Rpb25cbiAgICovXG4gIHByaXZhdGUgaW5EcmFnQWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyIG9mIHRvZ2dsZSBmcm9tIGFkdmFuY2VkLW1hcC10b29sXG4gICAqL1xuICBwcml2YXRlIHN3aXBlRW5hYmxlZCQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEJpbmRlciBvZiBwcmVyZW5kZXIgb24gdGhlIHNhbWUgZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBib3VuZFByZXJlbmRlciA9IHRoaXMucHJlcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBsYXllcnMgZm9yIHN3aXBlIGFuZCBhY3RpdmF0ZSBvZiBkZWFjdGl2YXRlIHRoZSBzd2lwZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldExpc3RPZkxheWVycygpO1xuICAgIHRoaXMuc3dpcGVFbmFibGVkJCQgPSB0aGlzLm1hcC5zd2lwZUVuYWJsZWQkLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIHZhbHVlID8gdGhpcy5kaXNwbGF5U3dpcGUoKSA6IHRoaXMuZGlzcGxheVN3aXBlT2ZmKCk7XG4gICAgICB9KTtcbiAgICB0aGlzLmxldFpvb20oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgb3ZlcmxheSBsYXllciBhbmQgYW55IGludGVyYWN0aW9uIGFkZGVkIGJ5IHRoaXMgY29tcG9uZW50LlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3dpcGVFbmFibGVkJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm1hcC5zd2lwZUVuYWJsZWQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5kaXNwbGF5U3dpcGVPZmYoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGEgc3dpcGUtZWxlbWVudCBhbmQgcmVuZGVyIHRoZSBsYXllcnNcbiAgICovXG4gIGRpc3BsYXlTd2lwZSgpIHtcbiAgICB0aGlzLnN3aXBlSWQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB0aGlzLmxheWVycy5tYXAobGF5ZXIgPT4gbGF5ZXIub2wub24oJ3ByZXJlbmRlcicsIHRoaXMuYm91bmRQcmVyZW5kZXIpKTtcbiAgICB0aGlzLmxheWVycy5tYXAobGF5ZXIgPT4gbGF5ZXIub2wub24oJ3Bvc3RyZW5kZXInLCB0aGlzLnBvc3RyZW5kZXIpKTtcbiAgICB0aGlzLm1hcC5vbC5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhIHN3aXBlLWVsZW1lbnQgYW5kIHJlbmRlciB0aGUgbGF5ZXJzIG9uIHRoZSBpbml0aWFsIHN0YXRlXG4gICAqL1xuICBkaXNwbGF5U3dpcGVPZmYoKSB7XG4gICAgdGhpcy5zd2lwZUlkLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB0aGlzLmxheWVycy5tYXAobGF5ZXIgPT4gbGF5ZXIub2wudW4oJ3ByZXJlbmRlcicsIHRoaXMuYm91bmRQcmVyZW5kZXIpKTtcbiAgICB0aGlzLmxheWVycy5tYXAobGF5ZXIgPT4gbGF5ZXIub2wudW4oJ3Bvc3RyZW5kZXInLCB0aGlzLnBvc3RyZW5kZXIpKTtcbiAgICB0aGlzLm1hcC5vbC5yZW5kZXIoKTtcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBvZiBlbGVtZW50XG4gICAqL1xuICBnZXQgc3dpcGVJZCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lnby1sYXllci1zd2lwZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBsYXllcnMgZm9yIHN3aXBlXG4gICAqL1xuICBnZXRMaXN0T2ZMYXllcnMoKSB7XG4gICAgdGhpcy5tYXAuc2VsZWN0ZWRGZWF0dXJlcyQuc3Vic2NyaWJlKGxheWVycyA9PiB7XG4gICAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgICAgaWYgKGxheWVycyAhPT0gbnVsbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVycykge1xuICAgICAgICAgIGlmICghdGhpcy5sYXllcnMuaW5jbHVkZXMobGF5ZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVycy5wdXNoKGxheWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb3NpdGlvbiBvZiBjbGljayBvciB0b3VjaFxuICAgKi9cbiAgZHJhZ0Rvd24oZXZlbnQpIHtcbiAgICB0aGlzLmluRHJhZ0FjdGlvbiA9IHRydWU7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpe1xuICAgICAgICB0aGlzLnBvczMgPSBldmVudC5jbGllbnRYO1xuICAgICAgICB0aGlzLm1vdXNlU3dpcGUoKTtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gdGhpcy5jbG9zZURyYWdNb3VzZUVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jyl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvd3MnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMucG9zMyA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgdGhpcy50b3VjaFN3aXBlKCk7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSB0aGlzLmNsb3NlRHJhZ1RvdWNoRWxlbWVudDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92aW5nIGEgbGluZSB3aXRoIGEgbW91c2VcbiAgICovXG4gIG1vdXNlU3dpcGUoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5pbkRyYWdBY3Rpb24pe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnBvczEgPSB0aGlzLnBvczMgLSBldmVudC5jbGllbnRYO1xuICAgICAgICB0aGlzLnBvczMgPSBldmVudC5jbGllbnRYO1xuICAgICAgICB0aGlzLnN3aXBlSWQuc3R5bGUubGVmdCA9ICh0aGlzLnN3aXBlSWQub2Zmc2V0TGVmdCAtIHRoaXMucG9zMSkgKyAncHgnO1xuICAgICAgfVxuICAgICAgdGhpcy5tYXAub2wucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92aW5nIGEgbGluZSB3aXRoIGEgdG91Y2hcbiAgICovXG4gIHRvdWNoU3dpcGUoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5pbkRyYWdBY3Rpb24pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93cycpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgdGhpcy5wb3MxID0gdGhpcy5wb3MzIC0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgdGhpcy5wb3MzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgdGhpcy5zd2lwZUlkLnN0eWxlLmxlZnQgPSAodGhpcy5zd2lwZUlkLm9mZnNldExlZnQgLSB0aGlzLnBvczEpICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIHRoaXMubWFwLm9sLnJlbmRlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGUgYSBsaXN0ZW5lciBvZiBhIG1vdXNlLWFjdGlvblxuICAgKi9cbiAgY2xvc2VEcmFnTW91c2VFbGVtZW50KCkge1xuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgIHRoaXMuaW5EcmFnQWN0aW9uID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZSBhIGxpc3RlbmVyIG9mIGEgdG91Y2gtYWN0aW9uXG4gICAqL1xuICBjbG9zZURyYWdUb3VjaEVsZW1lbnQoKSB7XG4gICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG51bGw7XG4gICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvd3MnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIHRoaXMuaW5EcmFnQWN0aW9uID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ3V0IHRoZSBpbWFnZSBvZiBhIGxheWVyIGJ5IHRoZSBwb3NpdGlvbiBvZiBzd2lwZWQtZWxlbWVudFxuICAgKi9cbiAgcHJlcmVuZGVyKGV2ZW50KSB7XG4gICAgICBjb25zdCBjdHggPSBldmVudC5jb250ZXh0O1xuICAgICAgY29uc3QgbWFwU2l6ZSA9IHRoaXMubWFwLm9sLmdldFNpemUoKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zd2lwZUlkLm9mZnNldExlZnQgO1xuICAgICAgY29uc3QgdGwgPSBnZXRSZW5kZXJQaXhlbChldmVudCwgW3dpZHRoLCAwXSk7XG4gICAgICBjb25zdCB0ciA9IGdldFJlbmRlclBpeGVsKGV2ZW50LCBbMCwgMF0pO1xuICAgICAgY29uc3QgYmwgPSBnZXRSZW5kZXJQaXhlbChldmVudCwgW3dpZHRoLCBtYXBTaXplWzFdXSk7XG4gICAgICBjb25zdCBiciA9IGdldFJlbmRlclBpeGVsKGV2ZW50LCBbMCwgbWFwU2l6ZVsxXV0pO1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGxbMF0sIHRsWzFdKTtcbiAgICAgIGN0eC5saW5lVG8oYmxbMF0sIGJsWzFdKTtcbiAgICAgIGN0eC5saW5lVG8oYnJbMF0sIGJyWzFdKTtcbiAgICAgIGN0eC5saW5lVG8odHJbMF0sIHRyWzFdKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5jbGlwKCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBhIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGNvbnRleHRcbiAgICovXG4gIHBvc3RyZW5kZXIoZXZlbnQpe1xuICAgIGV2ZW50LmNvbnRleHQucmVzdG9yZSgpO1xuICAgIGV2ZW50LmNvbnRleHQuc2F2ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb20gb24gZGl2XG4gICAqL1xuICAgICBwcml2YXRlIGxldFpvb20oKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWdvLWxheWVyLXN3aXBlJykuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LmRlbHRhWSA+IDAgPyB0aGlzLm1hcC52aWV3Q29udHJvbGxlci56b29tT3V0KCkgOiB0aGlzLm1hcC52aWV3Q29udHJvbGxlci56b29tSW4oKTtcbiAgICAgIH0sIHRydWUpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpZ28tc3dpcGUtY29udHJvbC1jb250YWluZXJcIiAgaWQ9XCJpZ28tbGF5ZXItc3dpcGVcIlxuICAobW91c2Vkb3duKT1cImRyYWdEb3duKCRldmVudClcIlxuICAobW91c2V1cCk9XCJjbG9zZURyYWdNb3VzZUVsZW1lbnQoKVwiXG4gICh0b3VjaHN0YXJ0KT1cImRyYWdEb3duKCRldmVudClcIlxuICAodG91Y2hlbmQpPVwiY2xvc2VEcmFnVG91Y2hFbGVtZW50KClcIj5cbiAgPGRpdiBjbGFzcz1cImlnby1zd2lwZS1jb250cm9sLWxpbmVcIiA+PC9kaXY+XG4gIFxuICA8ZGl2IGNsYXNzPVwiaWdvLXN3aXBlLWNvbnRyb2wtYXJyb3dzXCIgaWQ9XCJhcnJvd3NcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaWdvLWFycm93LWxlZnRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaWdvLWFycm93LXJpZ2h0XCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=