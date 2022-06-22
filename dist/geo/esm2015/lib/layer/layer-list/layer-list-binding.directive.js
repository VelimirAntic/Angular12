import { Directive, Self, Optional } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./layer-list.component";
import * as i2 from "../../map/shared/map.service";
import * as i3 from "@igo2/core";
export class LayerListBindingDirective {
    constructor(component, mapService, route) {
        this.mapService = mapService;
        this.route = route;
        this.component = component;
    }
    ngOnInit() {
        // Override input layers
        // this.component.layers = [];
        this.layersOrResolutionChange$$ = combineLatest([
            this.mapService.getMap().layers$,
            this.mapService.getMap().viewController.resolution$
        ]).pipe(debounceTime(10)).subscribe((bunch) => {
            const shownLayers = bunch[0].filter((layer) => {
                return layer.showInLayerList === true;
            });
            this.component.layers = shownLayers;
            this.setLayersVisibilityStatus(shownLayers, this.component.excludeBaseLayers);
        });
    }
    setLayersVisibilityStatus(layers, excludeBaseLayers) {
        if (this.layersVisibility$$ !== undefined) {
            this.layersVisibility$$.unsubscribe();
            this.layersVisibility$$ = undefined;
        }
        this.layersVisibility$$ = combineLatest(layers
            .filter(layer => layer.baseLayer !== excludeBaseLayers)
            .map((layer) => layer.visible$))
            .pipe(map((visibles) => visibles.every(Boolean)))
            .subscribe((allLayersAreVisible) => this.component.layersAreAllVisible = allLayersAreVisible);
    }
    ngOnDestroy() {
        this.layersOrResolutionChange$$.unsubscribe();
        if (this.layersVisibility$$ !== undefined) {
            this.layersVisibility$$.unsubscribe();
            this.layersVisibility$$ = undefined;
        }
    }
}
LayerListBindingDirective.ɵfac = function LayerListBindingDirective_Factory(t) { return new (t || LayerListBindingDirective)(i0.ɵɵdirectiveInject(i1.LayerListComponent, 2), i0.ɵɵdirectiveInject(i2.MapService), i0.ɵɵdirectiveInject(i3.RouteService, 8)); };
LayerListBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LayerListBindingDirective, selectors: [["", "igoLayerListBinding", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerListBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoLayerListBinding]'
            }]
    }], function () { return [{ type: i1.LayerListComponent, decorators: [{
                type: Self
            }] }, { type: i2.MapService }, { type: i3.RouteService, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGlzdC1iaW5kaW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2xheWVyL2xheWVyLWxpc3QvbGF5ZXItbGlzdC1iaW5kaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBcUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBZ0IsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTW5ELE9BQU8sRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBS25ELE1BQU0sT0FBTyx5QkFBeUI7SUFLcEMsWUFDVSxTQUE2QixFQUM3QixVQUFzQixFQUNWLEtBQW1CO1FBRC9CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBRXZDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsMEJBQTBCLEdBQUcsYUFBYSxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTztZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXO1NBQUMsQ0FDckQsQ0FBQyxJQUFJLENBQ0osWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUNqQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUN2QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7Z0JBQ25ELE9BQU8sS0FBSyxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDcEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8seUJBQXlCLENBQUMsTUFBZSxFQUFFLGlCQUEwQjtRQUMzRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLEVBQUU7WUFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLE1BQU07YUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxpQkFBaUIsQ0FBRTthQUN2RCxHQUFHLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBbUIsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQzNELFNBQVMsQ0FBQyxDQUFDLG1CQUE0QixFQUFFLEVBQUUsQ0FDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztTQUNyQztJQUNILENBQUM7O2tHQWpEVSx5QkFBeUI7NEVBQXpCLHlCQUF5Qjt1RkFBekIseUJBQXlCO2NBSHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOztzQkFPSSxJQUFJOztzQkFFSixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBTZWxmLCBPbkluaXQsIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXAvc2hhcmVkL21hcC5zZXJ2aWNlJztcbmltcG9ydCB7IExheWVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi9zaGFyZWQvbGF5ZXJzL2xheWVyJztcbmltcG9ydCB7IG1hcCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaWdvTGF5ZXJMaXN0QmluZGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIExheWVyTGlzdEJpbmRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29tcG9uZW50OiBMYXllckxpc3RDb21wb25lbnQ7XG4gIHByaXZhdGUgbGF5ZXJzT3JSZXNvbHV0aW9uQ2hhbmdlJCQ6IFN1YnNjcmlwdGlvbjtcbiAgbGF5ZXJzVmlzaWJpbGl0eSQkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNlbGYoKSBjb21wb25lbnQ6IExheWVyTGlzdENvbXBvbmVudCxcbiAgICBwcml2YXRlIG1hcFNlcnZpY2U6IE1hcFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZTogUm91dGVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gT3ZlcnJpZGUgaW5wdXQgbGF5ZXJzXG4gICAgLy8gdGhpcy5jb21wb25lbnQubGF5ZXJzID0gW107XG4gICAgdGhpcy5sYXllcnNPclJlc29sdXRpb25DaGFuZ2UkJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5tYXBTZXJ2aWNlLmdldE1hcCgpLmxheWVycyQsXG4gICAgICB0aGlzLm1hcFNlcnZpY2UuZ2V0TWFwKCkudmlld0NvbnRyb2xsZXIucmVzb2x1dGlvbiRdXG4gICAgKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDEwKVxuICAgICkuc3Vic2NyaWJlKChidW5jaDogW0xheWVyW10sIG51bWJlcl0pID0+IHtcbiAgICAgIGNvbnN0IHNob3duTGF5ZXJzID0gYnVuY2hbMF0uZmlsdGVyKChsYXllcjogTGF5ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGxheWVyLnNob3dJbkxheWVyTGlzdCA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb21wb25lbnQubGF5ZXJzID0gc2hvd25MYXllcnM7XG4gICAgICB0aGlzLnNldExheWVyc1Zpc2liaWxpdHlTdGF0dXMoc2hvd25MYXllcnMsIHRoaXMuY29tcG9uZW50LmV4Y2x1ZGVCYXNlTGF5ZXJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TGF5ZXJzVmlzaWJpbGl0eVN0YXR1cyhsYXllcnM6IExheWVyW10sIGV4Y2x1ZGVCYXNlTGF5ZXJzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMubGF5ZXJzVmlzaWJpbGl0eSQkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubGF5ZXJzVmlzaWJpbGl0eSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmxheWVyc1Zpc2liaWxpdHkkJCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5sYXllcnNWaXNpYmlsaXR5JCQgPSBjb21iaW5lTGF0ZXN0KGxheWVyc1xuICAgICAgLmZpbHRlcihsYXllciA9PiBsYXllci5iYXNlTGF5ZXIgIT09IGV4Y2x1ZGVCYXNlTGF5ZXJzIClcbiAgICAgIC5tYXAoKGxheWVyOiBMYXllcikgPT4gbGF5ZXIudmlzaWJsZSQpKVxuICAgICAgLnBpcGUobWFwKCh2aXNpYmxlczogYm9vbGVhbltdKSA9PiB2aXNpYmxlcy5ldmVyeShCb29sZWFuKSkpXG4gICAgICAuc3Vic2NyaWJlKChhbGxMYXllcnNBcmVWaXNpYmxlOiBib29sZWFuKSA9PlxuICAgICAgICB0aGlzLmNvbXBvbmVudC5sYXllcnNBcmVBbGxWaXNpYmxlID0gYWxsTGF5ZXJzQXJlVmlzaWJsZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmxheWVyc09yUmVzb2x1dGlvbkNoYW5nZSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMubGF5ZXJzVmlzaWJpbGl0eSQkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubGF5ZXJzVmlzaWJpbGl0eSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmxheWVyc1Zpc2liaWxpdHkkJCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxufVxuIl19