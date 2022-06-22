import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Tool to display the center of the map
 */
export class MapCenterComponent {
    constructor() { }
    /**
     * Set a visibility for cursor of the center of the map
     */
    ngAfterViewInit() {
        if (this.map) {
            this.displayCenter$$ = this.map.mapCenter$.subscribe(value => {
                value ?
                    document.getElementById('mapCenter').style.visibility = 'visible' :
                    document.getElementById('mapCenter').style.visibility = 'hidden';
            });
        }
        this.letZoom();
    }
    /**
     * Destroyer of a component
     */
    ngOnDestroy() {
        if (this.displayCenter$$) {
            this.displayCenter$$.unsubscribe();
        }
    }
    /**
     * Zoom on div
     */
    letZoom() {
        document.getElementById('mapCenter').addEventListener('wheel', event => {
            event.deltaY > 0 ? this.map.viewController.zoomOut() : this.map.viewController.zoomIn();
        }, true);
    }
}
MapCenterComponent.ɵfac = function MapCenterComponent_Factory(t) { return new (t || MapCenterComponent)(); };
MapCenterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapCenterComponent, selectors: [["igo-map-center"]], inputs: { map: "map" }, decls: 3, vars: 0, consts: [["id", "mapCenter", 1, "mapCenter"], [1, "vertical"], [1, "horizontal"]], template: function MapCenterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelementEnd();
    } }, styles: [".mapCenter[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;top:50%;left:50%;transform:translate(-15px,-15px);pointer-events:none}.mapCenter[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%], .mapCenter[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]{width:4px;height:30px;position:absolute;left:13px;background-color:#000}.mapCenter[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]{transform:rotate(90deg)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapCenterComponent, [{
        type: Component,
        args: [{
                selector: 'igo-map-center',
                templateUrl: './map-center.component.html',
                styleUrls: ['./map-center.component.scss']
            }]
    }], function () { return []; }, { map: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNlbnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9tYXAvbWFwLWNlbnRlci9tYXAtY2VudGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9tYXAtY2VudGVyL21hcC1jZW50ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQUkzRTs7R0FFRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUFXN0IsZ0JBQWdCLENBQUM7SUFFakI7O09BRUc7SUFDSCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNELEtBQUssQ0FBQyxDQUFDO29CQUNMLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQztvQkFDbkUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNyRSxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLE9BQU87UUFDYixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNyRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFGLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7O29GQTNDVSxrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQ2IvQiw4QkFFbUI7UUFDZix5QkFBNEI7UUFDNUIseUJBQThCO1FBQ2xDLGlCQUFNOzt1RkRRTyxrQkFBa0I7Y0FOOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDO3NDQU9VLEdBQUc7a0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vc2hhcmVkL21hcCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBUb29sIHRvIGRpc3BsYXkgdGhlIGNlbnRlciBvZiB0aGUgbWFwXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1tYXAtY2VudGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC1jZW50ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXAtY2VudGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXBDZW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBHZXQgYW4gYWN0aXZlIG1hcFxuICAgKi9cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyIG9mIHRvZ2dsZSBmcm9tIGFkdmFuY2VkLW1hcC10b29sXG4gICAqL1xuICBwcml2YXRlIGRpc3BsYXlDZW50ZXIkJDogU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSB2aXNpYmlsaXR5IGZvciBjdXJzb3Igb2YgdGhlIGNlbnRlciBvZiB0aGUgbWFwXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMubWFwKSB7XG4gICAgICB0aGlzLmRpc3BsYXlDZW50ZXIkJCA9IHRoaXMubWFwLm1hcENlbnRlciQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgdmFsdWUgP1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBDZW50ZXInKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnIDpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwQ2VudGVyJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubGV0Wm9vbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3llciBvZiBhIGNvbXBvbmVudFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheUNlbnRlciQkKSB7XG4gICAgICB0aGlzLmRpc3BsYXlDZW50ZXIkJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBab29tIG9uIGRpdlxuICAgKi9cbiAgcHJpdmF0ZSBsZXRab29tKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBDZW50ZXInKS5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LmRlbHRhWSA+IDAgPyB0aGlzLm1hcC52aWV3Q29udHJvbGxlci56b29tT3V0KCkgOiB0aGlzLm1hcC52aWV3Q29udHJvbGxlci56b29tSW4oKTtcbiAgICB9LCB0cnVlKTtcbiAgfVxufVxuIiwiPGRpdlxuICAgIGNsYXNzPVwibWFwQ2VudGVyXCJcbiAgICBpZD1cIm1hcENlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ2ZXJ0aWNhbFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsXCI+PC9kaXY+XG48L2Rpdj5cbiJdfQ==