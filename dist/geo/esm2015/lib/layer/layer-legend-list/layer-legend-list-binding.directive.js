import { Directive, Self } from '@angular/core';
import { combineLatest } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./layer-legend-list.component";
import * as i2 from "../../map/shared/map.service";
export class LayerLegendListBindingDirective {
    constructor(component, mapService) {
        this.mapService = mapService;
        this.component = component;
    }
    ngOnInit() {
        // Override input layers
        this.component.layers = [];
        this.layersOrResolutionChange$$ = combineLatest([
            this.mapService.getMap().layers$,
            this.mapService.getMap().viewController.resolution$
        ]).pipe(debounceTime(10)).subscribe((bunch) => {
            const shownLayers = bunch[0].filter((layer) => {
                return layer.showInLayerList === true;
            });
            this.component.layers = shownLayers;
            this.layersVisibility$$ = combineLatest(shownLayers
                .map((layer) => layer.visible$))
                .subscribe((r) => {
                this.component.change$.next();
            });
        });
    }
    ngOnDestroy() {
        this.layersOrResolutionChange$$.unsubscribe();
        if (this.layersVisibility$$ !== undefined) {
            this.layersVisibility$$.unsubscribe();
            this.layersVisibility$$ = undefined;
        }
    }
}
LayerLegendListBindingDirective.ɵfac = function LayerLegendListBindingDirective_Factory(t) { return new (t || LayerLegendListBindingDirective)(i0.ɵɵdirectiveInject(i1.LayerLegendListComponent, 2), i0.ɵɵdirectiveInject(i2.MapService)); };
LayerLegendListBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LayerLegendListBindingDirective, selectors: [["", "igoLayerLegendListBinding", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerLegendListBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoLayerLegendListBinding]'
            }]
    }], function () { return [{ type: i1.LayerLegendListComponent, decorators: [{
                type: Self
            }] }, { type: i2.MapService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGVnZW5kLWxpc3QtYmluZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9sYXllci9sYXllci1sZWdlbmQtbGlzdC9sYXllci1sZWdlbmQtbGlzdC1iaW5kaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTTlDLE1BQU0sT0FBTywrQkFBK0I7SUFLMUMsWUFDVSxTQUFtQyxFQUNuQyxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsMEJBQTBCLEdBQUcsYUFBYSxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTztZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXO1NBQUMsQ0FDckQsQ0FBQyxJQUFJLENBQ0osWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUNqQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUN2QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7Z0JBQ25ELE9BQU8sS0FBSyxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFFcEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxXQUFXO2lCQUNoRCxHQUFHLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdEMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEMsQ0FBQyxDQUNBLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztTQUNyQztJQUNILENBQUM7OzhHQXpDVSwrQkFBK0I7a0ZBQS9CLCtCQUErQjt1RkFBL0IsK0JBQStCO2NBSDNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOztzQkFPSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBTZWxmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXAvc2hhcmVkL21hcC5zZXJ2aWNlJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vc2hhcmVkL2xheWVycy9sYXllcic7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYXllckxlZ2VuZExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLWxlZ2VuZC1saXN0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpZ29MYXllckxlZ2VuZExpc3RCaW5kaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJMZWdlbmRMaXN0QmluZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb21wb25lbnQ6IExheWVyTGVnZW5kTGlzdENvbXBvbmVudDtcbiAgcHJpdmF0ZSBsYXllcnNPclJlc29sdXRpb25DaGFuZ2UkJDogU3Vic2NyaXB0aW9uO1xuICBsYXllcnNWaXNpYmlsaXR5JCQ6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2VsZigpIGNvbXBvbmVudDogTGF5ZXJMZWdlbmRMaXN0Q29tcG9uZW50LFxuICAgIHByaXZhdGUgbWFwU2VydmljZTogTWFwU2VydmljZVxuICApIHtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIE92ZXJyaWRlIGlucHV0IGxheWVyc1xuICAgIHRoaXMuY29tcG9uZW50LmxheWVycyA9IFtdO1xuICAgIHRoaXMubGF5ZXJzT3JSZXNvbHV0aW9uQ2hhbmdlJCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMubWFwU2VydmljZS5nZXRNYXAoKS5sYXllcnMkLFxuICAgICAgdGhpcy5tYXBTZXJ2aWNlLmdldE1hcCgpLnZpZXdDb250cm9sbGVyLnJlc29sdXRpb24kXVxuICAgICkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgxMClcbiAgICApLnN1YnNjcmliZSgoYnVuY2g6IFtMYXllcltdLCBudW1iZXJdKSA9PiB7XG4gICAgICBjb25zdCBzaG93bkxheWVycyA9IGJ1bmNoWzBdLmZpbHRlcigobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICAgIHJldHVybiBsYXllci5zaG93SW5MYXllckxpc3QgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29tcG9uZW50LmxheWVycyA9IHNob3duTGF5ZXJzO1xuXG4gICAgICB0aGlzLmxheWVyc1Zpc2liaWxpdHkkJCA9IGNvbWJpbmVMYXRlc3Qoc2hvd25MYXllcnNcbiAgICAgICAgLm1hcCgobGF5ZXI6IExheWVyKSA9PiBsYXllci52aXNpYmxlJCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5sYXllcnNPclJlc29sdXRpb25DaGFuZ2UkJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmxheWVyc1Zpc2liaWxpdHkkJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxheWVyc1Zpc2liaWxpdHkkJC51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5sYXllcnNWaXNpYmlsaXR5JCQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==