import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TooltipType } from '../shared/layers';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
export class LayerLegendItemComponent {
    constructor(networkService) {
        this.networkService = networkService;
        this.inResolutionRange$ = new BehaviorSubject(true);
        this.updateLegendOnResolutionChange = false;
    }
    ngOnInit() {
        const resolution$ = this.layer.map.viewController.resolution$;
        this.resolution$$ = resolution$.subscribe(() => {
            this.onResolutionChange();
        });
        this.tooltipText = this.computeTooltip();
        this.network$$ = this.networkService.currentState().subscribe((state) => {
            this.state = state;
            this.onResolutionChange();
        });
    }
    ngOnDestroy() {
        this.resolution$$.unsubscribe();
        this.network$$.unsubscribe();
    }
    computeTooltip() {
        const layerOptions = this.layer.options;
        if (!layerOptions.tooltip) {
            return this.layer.title;
        }
        const layerTooltip = layerOptions.tooltip;
        const layerMetadata = layerOptions.metadata;
        switch (layerOptions.tooltip.type) {
            case TooltipType.TITLE:
                return this.layer.title;
            case TooltipType.ABSTRACT:
                if (layerMetadata && layerMetadata.abstract) {
                    return layerMetadata.abstract;
                }
                else {
                    return this.layer.title;
                }
            case TooltipType.CUSTOM:
                if (layerTooltip && layerTooltip.text) {
                    return layerTooltip.text;
                }
                else {
                    return this.layer.title;
                }
            default:
                return this.layer.title;
        }
    }
    onResolutionChange() {
        const inResolutionRange = this.layer.isInResolutionsRange;
        this.inResolutionRange$.next(inResolutionRange);
    }
}
LayerLegendItemComponent.ɵfac = function LayerLegendItemComponent_Factory(t) { return new (t || LayerLegendItemComponent)(i0.ɵɵdirectiveInject(i1.NetworkService)); };
LayerLegendItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerLegendItemComponent, selectors: [["igo-layer-legend-item"]], inputs: { layer: "layer", updateLegendOnResolutionChange: "updateLegendOnResolutionChange" }, decls: 6, vars: 4, consts: [[1, "igo-layer-list-item"], ["matLine", "", "matTooltipShowDelay", "500", 1, "igo-layer-title", 3, "matTooltip"], [1, "igo-layer-legend-container"], ["legend", ""], [3, "layer", "updateLegendOnResolutionChange"]], template: function LayerLegendItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list-item", 0);
        i0.ɵɵelementStart(1, "h4", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2, 3);
        i0.ɵɵelement(5, "igo-layer-legend", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.tooltipText);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.layer.title);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("layer", ctx.layer)("updateLegendOnResolutionChange", ctx.updateLegendOnResolutionChange);
    } }, styles: ["[_nghost-%COMP%]{overflow:hidden}.igo-layer-list-item[_ngcontent-%COMP%]{height:46px;clear:both}.igo-layer-legend-container[_ngcontent-%COMP%]{padding-left:18px;width:calc(100% - 18px)}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerLegendItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-layer-legend-item',
                templateUrl: './layer-legend-item.component.html',
                styleUrls: ['./layer-legend-item.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.NetworkService }]; }, { layer: [{
            type: Input
        }], updateLegendOnResolutionChange: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGVnZW5kLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvbGF5ZXItbGVnZW5kLWl0ZW0vbGF5ZXItbGVnZW5kLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvbGF5ZXItbGVnZW5kLWl0ZW0vbGF5ZXItbGVnZW5kLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3JELE9BQU8sRUFBUyxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBU3RELE1BQU0sT0FBTyx3QkFBd0I7SUFlbkMsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBYmxELHVCQUFrQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVdoRSxtQ0FBOEIsR0FBWSxLQUFLLENBQUM7SUFFSixDQUFDO0lBRXRELFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBc0IsRUFBRSxFQUFFO1lBQ3ZGLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGNBQWM7UUFDWixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBQ0QsTUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxNQUFNLGFBQWEsR0FBSSxZQUFxQyxDQUFDLFFBQVEsQ0FBQztRQUN0RSxRQUFRLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2pDLEtBQUssV0FBVyxDQUFDLEtBQUs7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDMUIsS0FBSyxXQUFXLENBQUMsUUFBUTtnQkFDdkIsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLFFBQVEsRUFBRTtvQkFDM0MsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO2lCQUMvQjtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUN6QjtZQUNILEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3JCLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUU7b0JBQ3JDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztpQkFDMUI7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDekI7WUFDSDtnQkFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dHQWpFVSx3QkFBd0I7MkVBQXhCLHdCQUF3QjtRQ25CckMsd0NBQTRDO1FBQzFDLDZCQUF5RjtRQUFBLFlBQWU7UUFBQSxpQkFBSztRQUMvRyxpQkFBZ0I7UUFFaEIsaUNBQWdEO1FBQzlDLHNDQUdtQjtRQUNyQixpQkFBTTs7UUFSZ0MsZUFBMEI7UUFBMUIsNENBQTBCO1FBQTJCLGVBQWU7UUFBZixxQ0FBZTtRQUt0RyxlQUFlO1FBQWYsaUNBQWUsc0VBQUE7O3VGRGFOLHdCQUF3QjtjQU5wQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2lFQVlVLEtBQUs7a0JBQWIsS0FBSztZQUVHLDhCQUE4QjtrQkFBdEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1ldGFkYXRhTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvc2hhcmVkL21ldGFkYXRhLmludGVyZmFjZSc7XG5pbXBvcnQgeyBMYXllciwgVG9vbHRpcFR5cGUgfSBmcm9tICcuLi9zaGFyZWQvbGF5ZXJzJztcbmltcG9ydCB7IE5ldHdvcmtTZXJ2aWNlLCBDb25uZWN0aW9uU3RhdGUgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWxheWVyLWxlZ2VuZC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheWVyLWxlZ2VuZC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5ZXItbGVnZW5kLWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJMZWdlbmRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGluUmVzb2x1dGlvblJhbmdlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcblxuICB0b29sdGlwVGV4dDogc3RyaW5nO1xuXG4gIHN0YXRlOiBDb25uZWN0aW9uU3RhdGU7XG5cbiAgcHJpdmF0ZSByZXNvbHV0aW9uJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBuZXR3b3JrJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoKSBsYXllcjogTGF5ZXI7XG5cbiAgQElucHV0KCkgdXBkYXRlTGVnZW5kT25SZXNvbHV0aW9uQ2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrU2VydmljZTogTmV0d29ya1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgcmVzb2x1dGlvbiQgPSB0aGlzLmxheWVyLm1hcC52aWV3Q29udHJvbGxlci5yZXNvbHV0aW9uJDtcbiAgICB0aGlzLnJlc29sdXRpb24kJCA9IHJlc29sdXRpb24kLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm9uUmVzb2x1dGlvbkNoYW5nZSgpO1xuICAgIH0pO1xuICAgIHRoaXMudG9vbHRpcFRleHQgPSB0aGlzLmNvbXB1dGVUb29sdGlwKCk7XG5cbiAgICB0aGlzLm5ldHdvcmskJCA9IHRoaXMubmV0d29ya1NlcnZpY2UuY3VycmVudFN0YXRlKCkuc3Vic2NyaWJlKChzdGF0ZTogQ29ubmVjdGlvblN0YXRlKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICB0aGlzLm9uUmVzb2x1dGlvbkNoYW5nZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5yZXNvbHV0aW9uJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5ldHdvcmskJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY29tcHV0ZVRvb2x0aXAoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsYXllck9wdGlvbnMgPSB0aGlzLmxheWVyLm9wdGlvbnM7XG4gICAgaWYgKCFsYXllck9wdGlvbnMudG9vbHRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMubGF5ZXIudGl0bGU7XG4gICAgfVxuICAgIGNvbnN0IGxheWVyVG9vbHRpcCA9IGxheWVyT3B0aW9ucy50b29sdGlwO1xuICAgIGNvbnN0IGxheWVyTWV0YWRhdGEgPSAobGF5ZXJPcHRpb25zIGFzIE1ldGFkYXRhTGF5ZXJPcHRpb25zKS5tZXRhZGF0YTtcbiAgICBzd2l0Y2ggKGxheWVyT3B0aW9ucy50b29sdGlwLnR5cGUpIHtcbiAgICAgIGNhc2UgVG9vbHRpcFR5cGUuVElUTEU6XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyLnRpdGxlO1xuICAgICAgY2FzZSBUb29sdGlwVHlwZS5BQlNUUkFDVDpcbiAgICAgICAgaWYgKGxheWVyTWV0YWRhdGEgJiYgbGF5ZXJNZXRhZGF0YS5hYnN0cmFjdCkge1xuICAgICAgICAgIHJldHVybiBsYXllck1ldGFkYXRhLmFic3RyYWN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxheWVyLnRpdGxlO1xuICAgICAgICB9XG4gICAgICBjYXNlIFRvb2x0aXBUeXBlLkNVU1RPTTpcbiAgICAgICAgaWYgKGxheWVyVG9vbHRpcCAmJiBsYXllclRvb2x0aXAudGV4dCkge1xuICAgICAgICAgIHJldHVybiBsYXllclRvb2x0aXAudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5sYXllci50aXRsZTtcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXIudGl0bGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblJlc29sdXRpb25DaGFuZ2UoKSB7XG4gICAgY29uc3QgaW5SZXNvbHV0aW9uUmFuZ2UgPSB0aGlzLmxheWVyLmlzSW5SZXNvbHV0aW9uc1JhbmdlO1xuICAgIHRoaXMuaW5SZXNvbHV0aW9uUmFuZ2UkLm5leHQoaW5SZXNvbHV0aW9uUmFuZ2UpO1xuICB9XG59XG4iLCI8bWF0LWxpc3QtaXRlbSBjbGFzcz0gXCJpZ28tbGF5ZXItbGlzdC1pdGVtXCI+XG4gIDxoNCBtYXRMaW5lIGNsYXNzPVwiaWdvLWxheWVyLXRpdGxlXCIgW21hdFRvb2x0aXBdPVwidG9vbHRpcFRleHRcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCI+e3tsYXllci50aXRsZX19PC9oND5cbjwvbWF0LWxpc3QtaXRlbT5cblxuPGRpdiAjbGVnZW5kIGNsYXNzPVwiaWdvLWxheWVyLWxlZ2VuZC1jb250YWluZXJcIj5cbiAgPGlnby1sYXllci1sZWdlbmRcbiAgICBbbGF5ZXJdPVwibGF5ZXJcIlxuICAgIFt1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2VdPVwidXBkYXRlTGVnZW5kT25SZXNvbHV0aW9uQ2hhbmdlXCI+XG4gIDwvaWdvLWxheWVyLWxlZ2VuZD5cbjwvZGl2PlxuIl19