import { Directive } from '@angular/core';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/geo";
import * as i2 from "./context.service";
import * as i3 from "@igo2/core";
export class MapContextDirective {
    constructor(component, contextService, mediaService) {
        this.contextService = contextService;
        this.mediaService = mediaService;
        this.component = component;
    }
    get map() {
        return this.component.map;
    }
    ngOnInit() {
        this.context$$ = this.contextService.context$
            .pipe(filter(context => context !== undefined))
            .subscribe(context => this.handleContextChange(context));
    }
    ngOnDestroy() {
        this.context$$.unsubscribe();
    }
    handleContextChange(context) {
        if (context.map === undefined) {
            return;
        }
        // This creates a new ol.Map when the context changes. Doing that
        // allows the print tool to work properly even when the map's canvas
        // has been tainted (CORS) with the layers of another context. This could
        // have some side effects such as unbinding all listeners on the first map.
        // A better solution would be to create a new map (preview) before
        // printing and avoid the tainted canvas issue. This will come later so
        // this snippet of code is kept here in case it takes too long becomes
        // an issue
        // const target = this.component.map.ol.getTarget();
        // this.component.map.ol.setTarget(undefined);
        // this.component.map.init();
        // this.component.map.ol.setTarget(target);
        const viewContext = context.map.view;
        if (!this.component.view || viewContext.keepCurrentView !== true) {
            this.component.view = viewContext;
        }
        const controlsContext = context.map.controls;
        if (!this.component.controls && controlsContext) {
            if (this.mediaService.isMobile()) {
                if (typeof (controlsContext.scaleLine) !== 'boolean') {
                    const scaleLineOption = controlsContext.scaleLine;
                    if (!scaleLineOption.minWidth) {
                        scaleLineOption.minWidth = Math.min(64, scaleLineOption.minWidth);
                        controlsContext.scaleLine = scaleLineOption;
                    }
                }
            }
            this.component.controls = controlsContext;
        }
    }
}
MapContextDirective.ɵfac = function MapContextDirective_Factory(t) { return new (t || MapContextDirective)(i0.ɵɵdirectiveInject(i1.MapBrowserComponent), i0.ɵɵdirectiveInject(i2.ContextService), i0.ɵɵdirectiveInject(i3.MediaService)); };
MapContextDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MapContextDirective, selectors: [["", "igoMapContext", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapContextDirective, [{
        type: Directive,
        args: [{
                selector: '[igoMapContext]'
            }]
    }], function () { return [{ type: i1.MapBrowserComponent }, { type: i2.ContextService }, { type: i3.MediaService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvbnRleHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29udGV4dC9zcmMvbGliL2NvbnRleHQtbWFuYWdlci9zaGFyZWQvbWFwLWNvbnRleHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFZeEMsTUFBTSxPQUFPLG1CQUFtQjtJQVE5QixZQUNFLFNBQThCLEVBQ3RCLGNBQThCLEVBQzlCLFlBQTBCO1FBRDFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUVsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBVkQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBVUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRO2FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUM7YUFDOUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxPQUF3QjtRQUNsRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQzdCLE9BQU87U0FDUjtRQUVELGlFQUFpRTtRQUNqRSxvRUFBb0U7UUFDcEUseUVBQXlFO1FBQ3pFLDJFQUEyRTtRQUMzRSxrRUFBa0U7UUFDbEUsdUVBQXVFO1FBQ3ZFLHNFQUFzRTtRQUN0RSxXQUFXO1FBRVgsb0RBQW9EO1FBQ3BELDhDQUE4QztRQUM5Qyw2QkFBNkI7UUFDN0IsMkNBQTJDO1FBRTNDLE1BQU0sV0FBVyxHQUFtQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLGVBQWUsS0FBSyxJQUFJLEVBQUU7WUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsV0FBNkIsQ0FBQztTQUNyRDtRQUVELE1BQU0sZUFBZSxHQUF1QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksZUFBZSxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxPQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDbkQsTUFBTSxlQUFlLEdBQUcsZUFBZSxDQUFDLFNBQWdDLENBQUM7b0JBQ3pFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO3dCQUM3QixlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDbEUsZUFBZSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7cUJBQzdDO2lCQUNGO2FBQ0Y7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7U0FDM0M7SUFDSCxDQUFDOztzRkEvRFUsbUJBQW1CO3NFQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUgvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE1hcFZpZXdPcHRpb25zLCBNYXBCcm93c2VyQ29tcG9uZW50LCBNYXBDb250cm9sc09wdGlvbnMsIE1hcFNjYWxlTGluZU9wdGlvbnMgfSBmcm9tICdAaWdvMi9nZW8nO1xuaW1wb3J0IHR5cGUgeyBJZ29NYXAgfSBmcm9tICdAaWdvMi9nZW8nO1xuXG5pbXBvcnQgeyBDb250ZXh0U2VydmljZSB9IGZyb20gJy4vY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IERldGFpbGVkQ29udGV4dCwgQ29udGV4dE1hcFZpZXcgfSBmcm9tICcuL2NvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaWdvTWFwQ29udGV4dF0nXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbnRleHREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29tcG9uZW50OiBNYXBCcm93c2VyQ29tcG9uZW50O1xuICBwcml2YXRlIGNvbnRleHQkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGdldCBtYXAoKTogSWdvTWFwIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQubWFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50OiBNYXBCcm93c2VyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2U6IENvbnRleHRTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbnRleHQkJCA9IHRoaXMuY29udGV4dFNlcnZpY2UuY29udGV4dCRcbiAgICAgIC5waXBlKGZpbHRlcihjb250ZXh0ID0+IGNvbnRleHQgIT09IHVuZGVmaW5lZCkpXG4gICAgICAuc3Vic2NyaWJlKGNvbnRleHQgPT4gdGhpcy5oYW5kbGVDb250ZXh0Q2hhbmdlKGNvbnRleHQpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29udGV4dCQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbnRleHRDaGFuZ2UoY29udGV4dDogRGV0YWlsZWRDb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQubWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGNyZWF0ZXMgYSBuZXcgb2wuTWFwIHdoZW4gdGhlIGNvbnRleHQgY2hhbmdlcy4gRG9pbmcgdGhhdFxuICAgIC8vIGFsbG93cyB0aGUgcHJpbnQgdG9vbCB0byB3b3JrIHByb3Blcmx5IGV2ZW4gd2hlbiB0aGUgbWFwJ3MgY2FudmFzXG4gICAgLy8gaGFzIGJlZW4gdGFpbnRlZCAoQ09SUykgd2l0aCB0aGUgbGF5ZXJzIG9mIGFub3RoZXIgY29udGV4dC4gVGhpcyBjb3VsZFxuICAgIC8vIGhhdmUgc29tZSBzaWRlIGVmZmVjdHMgc3VjaCBhcyB1bmJpbmRpbmcgYWxsIGxpc3RlbmVycyBvbiB0aGUgZmlyc3QgbWFwLlxuICAgIC8vIEEgYmV0dGVyIHNvbHV0aW9uIHdvdWxkIGJlIHRvIGNyZWF0ZSBhIG5ldyBtYXAgKHByZXZpZXcpIGJlZm9yZVxuICAgIC8vIHByaW50aW5nIGFuZCBhdm9pZCB0aGUgdGFpbnRlZCBjYW52YXMgaXNzdWUuIFRoaXMgd2lsbCBjb21lIGxhdGVyIHNvXG4gICAgLy8gdGhpcyBzbmlwcGV0IG9mIGNvZGUgaXMga2VwdCBoZXJlIGluIGNhc2UgaXQgdGFrZXMgdG9vIGxvbmcgYmVjb21lc1xuICAgIC8vIGFuIGlzc3VlXG5cbiAgICAvLyBjb25zdCB0YXJnZXQgPSB0aGlzLmNvbXBvbmVudC5tYXAub2wuZ2V0VGFyZ2V0KCk7XG4gICAgLy8gdGhpcy5jb21wb25lbnQubWFwLm9sLnNldFRhcmdldCh1bmRlZmluZWQpO1xuICAgIC8vIHRoaXMuY29tcG9uZW50Lm1hcC5pbml0KCk7XG4gICAgLy8gdGhpcy5jb21wb25lbnQubWFwLm9sLnNldFRhcmdldCh0YXJnZXQpO1xuXG4gICAgY29uc3Qgdmlld0NvbnRleHQ6IENvbnRleHRNYXBWaWV3ID0gY29udGV4dC5tYXAudmlldztcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50LnZpZXcgfHwgdmlld0NvbnRleHQua2VlcEN1cnJlbnRWaWV3ICE9PSB0cnVlKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudC52aWV3ID0gdmlld0NvbnRleHQgYXMgTWFwVmlld09wdGlvbnM7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbHNDb250ZXh0OiBNYXBDb250cm9sc09wdGlvbnMgPSBjb250ZXh0Lm1hcC5jb250cm9scztcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50LmNvbnRyb2xzICYmIGNvbnRyb2xzQ29udGV4dCkge1xuICAgICAgaWYgKHRoaXMubWVkaWFTZXJ2aWNlLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgaWYgKHR5cGVvZihjb250cm9sc0NvbnRleHQuc2NhbGVMaW5lKSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgY29uc3Qgc2NhbGVMaW5lT3B0aW9uID0gY29udHJvbHNDb250ZXh0LnNjYWxlTGluZSBhcyBNYXBTY2FsZUxpbmVPcHRpb25zO1xuICAgICAgICAgIGlmICghc2NhbGVMaW5lT3B0aW9uLm1pbldpZHRoKSB7XG4gICAgICAgICAgICBzY2FsZUxpbmVPcHRpb24ubWluV2lkdGggPSBNYXRoLm1pbig2NCwgc2NhbGVMaW5lT3B0aW9uLm1pbldpZHRoKTtcbiAgICAgICAgICAgIGNvbnRyb2xzQ29udGV4dC5zY2FsZUxpbmUgPSBzY2FsZUxpbmVPcHRpb247XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNvbXBvbmVudC5jb250cm9scyA9IGNvbnRyb2xzQ29udGV4dDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==