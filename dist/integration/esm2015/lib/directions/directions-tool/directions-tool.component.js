import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import { StorageScope } from '@igo2/core';
import * as i0 from "@angular/core";
import * as i1 from "../directions.state";
import * as i2 from "../../map/map.state";
import * as i3 from "@igo2/core";
import * as i4 from "../../context/context.state";
import * as i5 from "@igo2/auth";
import * as i6 from "@igo2/geo";
let DirectionsToolComponent = class DirectionsToolComponent {
    constructor(directionState, mapState, languageService, messageService, storageService, contextState, authService) {
        this.directionState = directionState;
        this.mapState = mapState;
        this.languageService = languageService;
        this.messageService = messageService;
        this.storageService = storageService;
        this.contextState = contextState;
        this.authService = authService;
    }
    /**
     * stops
     * @internal
     */
    get stopsStore() { return this.directionState.stopsStore; }
    get debounceTime() { return this.directionState.debounceTime; }
    /**
     * stops
     * @internal
     */
    get stopsFeatureStore() { return this.directionState.stopsFeatureStore; }
    /**
     * routes
     * @internal
     */
    get routesFeatureStore() { return this.directionState.routesFeatureStore; }
    /**
     * step store
     * @internal
     */
    get stepFeatureStore() { return this.directionState.stepFeatureStore; }
    /**
     * step store
     * @internal
     */
    get zoomToActiveRoute$() { return this.directionState.zoomToActiveRoute$; }
    /**
     * Map to measure on
     * @internal
     */
    get map() { return this.mapState.map; }
    ngOnInit() {
        const warningShown = this.storageService.get('direction.warning.shown');
        if (!warningShown) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.integration.directions.warning.title');
            const msg = translate.instant('igo.integration.directions.warning.message');
            this.messageService.info(msg, title, { timeOut: 20000 });
            this.storageService.set('direction.warning.shown', true, StorageScope.SESSION);
        }
        this.contextState.context$.subscribe(c => {
            if (!this.authService.authenticated) {
                this.currentContextUri = c.uri;
            }
        });
    }
};
DirectionsToolComponent.ɵfac = function DirectionsToolComponent_Factory(t) { return new (t || DirectionsToolComponent)(i0.ɵɵdirectiveInject(i1.DirectionState), i0.ɵɵdirectiveInject(i2.MapState), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i3.StorageService), i0.ɵɵdirectiveInject(i4.ContextState), i0.ɵɵdirectiveInject(i5.AuthService)); };
DirectionsToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DirectionsToolComponent, selectors: [["igo-directions-tool"]], decls: 1, vars: 7, consts: [[3, "contextUri", "debounceTime", "stopsStore", "stopsFeatureStore", "stepFeatureStore", "routesFeatureStore", "zoomToActiveRoute$"]], template: function DirectionsToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-directions", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("contextUri", ctx.currentContextUri)("debounceTime", ctx.debounceTime)("stopsStore", ctx.stopsStore)("stopsFeatureStore", ctx.stopsFeatureStore)("stepFeatureStore", ctx.stepFeatureStore)("routesFeatureStore", ctx.routesFeatureStore)("zoomToActiveRoute$", ctx.zoomToActiveRoute$);
    } }, directives: [i6.DirectionsComponent], encapsulation: 2 });
DirectionsToolComponent = __decorate([
    ToolComponent({
        name: 'directions',
        title: 'igo.integration.tools.directions',
        icon: 'directions'
    })
], DirectionsToolComponent);
export { DirectionsToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectionsToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-directions-tool',
                templateUrl: './directions-tool.component.html'
            }]
    }], function () { return [{ type: i1.DirectionState }, { type: i2.MapState }, { type: i3.LanguageService }, { type: i3.MessageService }, { type: i3.StorageService }, { type: i4.ContextState }, { type: i5.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9ucy10b29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvZGlyZWN0aW9ucy9kaXJlY3Rpb25zLXRvb2wvZGlyZWN0aW9ucy10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvZGlyZWN0aW9ucy9kaXJlY3Rpb25zLXRvb2wvZGlyZWN0aW9ucy10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFtQyxZQUFZLEVBQWtCLE1BQU0sWUFBWSxDQUFDOzs7Ozs7OztJQWlCOUUsdUJBQXVCLFNBQXZCLHVCQUF1QjtJQTBDbEMsWUFDVSxjQUE4QixFQUM5QixRQUFrQixFQUNsQixlQUFnQyxFQUNoQyxjQUE4QixFQUM5QixjQUE4QixFQUMvQixZQUEwQixFQUN6QixXQUF3QjtRQU54QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUMvQixDQUFDO0lBL0NKOzs7T0FHRztJQUNILElBQUksVUFBVSxLQUFpQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUV2RSxJQUFJLFlBQVksS0FBYSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUV2RTs7O09BR0c7SUFDRixJQUFJLGlCQUFpQixLQUF3QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBRTdGOzs7T0FHRztJQUNILElBQUksa0JBQWtCLEtBQXlCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFFL0Y7OztPQUdHO0lBQ0YsSUFBSSxnQkFBZ0IsS0FBdUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUUxRjs7O09BR0c7SUFDRixJQUFJLGtCQUFrQixLQUFvQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBRzNGOzs7T0FHRztJQUNILElBQUksR0FBRyxLQUFhLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBWS9DLFFBQVE7UUFDTixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBWSxDQUFDO1FBQ25GLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDakQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDN0IsMENBQTBDLENBQzNDLENBQUM7WUFDRixNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEY7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUNoQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGLENBQUE7OEZBdEVZLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDckJwQyxvQ0FRaUI7O1FBUGIsa0RBQWdDLGtDQUFBLDhCQUFBLDRDQUFBLDBDQUFBLDhDQUFBLDhDQUFBOztBRG9CdkIsdUJBQXVCO0lBVG5DLGFBQWEsQ0FBQztRQUNiLElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxrQ0FBa0M7UUFDekMsSUFBSSxFQUFFLFlBQVk7S0FDbkIsQ0FBQztHQUtXLHVCQUF1QixDQXNFbkM7U0F0RVksdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FKbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAaWdvMi9hdXRoJztcblxuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UsIE1lc3NhZ2VTZXJ2aWNlLCBTdG9yYWdlU2NvcGUsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBJZ29NYXAsIFJvdXRlc0ZlYXR1cmVTdG9yZSwgU3RvcHNGZWF0dXJlU3RvcmUsIFN0b3BzU3RvcmUsIFN0ZXBGZWF0dXJlU3RvcmUgfSBmcm9tICdAaWdvMi9nZW8nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vLi4vY29udGV4dC9jb250ZXh0LnN0YXRlJztcblxuaW1wb3J0IHsgTWFwU3RhdGUgfSBmcm9tICcuLi8uLi9tYXAvbWFwLnN0YXRlJztcbmltcG9ydCB7IERpcmVjdGlvblN0YXRlIH0gZnJvbSAnLi4vZGlyZWN0aW9ucy5zdGF0ZSc7XG5cbkBUb29sQ29tcG9uZW50KHtcbiAgbmFtZTogJ2RpcmVjdGlvbnMnLFxuICB0aXRsZTogJ2lnby5pbnRlZ3JhdGlvbi50b29scy5kaXJlY3Rpb25zJyxcbiAgaWNvbjogJ2RpcmVjdGlvbnMnXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWRpcmVjdGlvbnMtdG9vbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXJlY3Rpb25zLXRvb2wuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERpcmVjdGlvbnNUb29sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgY3VycmVudENvbnRleHRVcmk6IHN0cmluZztcbiAgLyoqXG4gICAqIHN0b3BzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IHN0b3BzU3RvcmUoKTogU3RvcHNTdG9yZSB7IHJldHVybiB0aGlzLmRpcmVjdGlvblN0YXRlLnN0b3BzU3RvcmU7IH1cblxuICBnZXQgZGVib3VuY2VUaW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLmRpcmVjdGlvblN0YXRlLmRlYm91bmNlVGltZTsgfVxuXG4gIC8qKlxuICAgKiBzdG9wc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gICBnZXQgc3RvcHNGZWF0dXJlU3RvcmUoKTogU3RvcHNGZWF0dXJlU3RvcmUgeyByZXR1cm4gdGhpcy5kaXJlY3Rpb25TdGF0ZS5zdG9wc0ZlYXR1cmVTdG9yZTsgfVxuXG4gIC8qKlxuICAgKiByb3V0ZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgcm91dGVzRmVhdHVyZVN0b3JlKCk6IFJvdXRlc0ZlYXR1cmVTdG9yZSB7IHJldHVybiB0aGlzLmRpcmVjdGlvblN0YXRlLnJvdXRlc0ZlYXR1cmVTdG9yZTsgfVxuXG4gIC8qKlxuICAgKiBzdGVwIHN0b3JlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgIGdldCBzdGVwRmVhdHVyZVN0b3JlKCk6IFN0ZXBGZWF0dXJlU3RvcmUgeyByZXR1cm4gdGhpcy5kaXJlY3Rpb25TdGF0ZS5zdGVwRmVhdHVyZVN0b3JlOyB9XG5cbiAgLyoqXG4gICAqIHN0ZXAgc3RvcmVcbiAgICogQGludGVybmFsXG4gICAqL1xuICAgZ2V0IHpvb21Ub0FjdGl2ZVJvdXRlJCgpOiBTdWJqZWN0PHZvaWQ+IHsgcmV0dXJuIHRoaXMuZGlyZWN0aW9uU3RhdGUuem9vbVRvQWN0aXZlUm91dGUkOyB9XG5cblxuICAvKipcbiAgICogTWFwIHRvIG1lYXN1cmUgb25cbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgbWFwKCk6IElnb01hcCB7IHJldHVybiB0aGlzLm1hcFN0YXRlLm1hcDsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlyZWN0aW9uU3RhdGU6IERpcmVjdGlvblN0YXRlLFxuICAgIHByaXZhdGUgbWFwU3RhdGU6IE1hcFN0YXRlLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHVibGljIGNvbnRleHRTdGF0ZTogQ29udGV4dFN0YXRlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB3YXJuaW5nU2hvd24gPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnZGlyZWN0aW9uLndhcm5pbmcuc2hvd24nKSBhcyBib29sZWFuO1xuICAgIGlmICghd2FybmluZ1Nob3duKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgICBjb25zdCB0aXRsZSA9IHRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnaWdvLmludGVncmF0aW9uLmRpcmVjdGlvbnMud2FybmluZy50aXRsZSdcbiAgICAgICk7XG4gICAgICBjb25zdCBtc2cgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmludGVncmF0aW9uLmRpcmVjdGlvbnMud2FybmluZy5tZXNzYWdlJyk7XG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmluZm8obXNnLCB0aXRsZSwgeyB0aW1lT3V0OiAyMDAwMCB9KTtcbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCdkaXJlY3Rpb24ud2FybmluZy5zaG93bicsIHRydWUsIFN0b3JhZ2VTY29wZS5TRVNTSU9OKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0U3RhdGUuY29udGV4dCQuc3Vic2NyaWJlKGMgPT4ge1xuICAgICAgaWYgKCF0aGlzLmF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udGV4dFVyaSA9IGMudXJpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiIsIjxpZ28tZGlyZWN0aW9uc1xuICAgIFtjb250ZXh0VXJpXT1cImN1cnJlbnRDb250ZXh0VXJpXCJcbiAgICBbZGVib3VuY2VUaW1lXT1cImRlYm91bmNlVGltZVwiXG4gICAgW3N0b3BzU3RvcmVdPVwic3RvcHNTdG9yZVwiXG4gICAgW3N0b3BzRmVhdHVyZVN0b3JlXT1cInN0b3BzRmVhdHVyZVN0b3JlXCJcbiAgICBbc3RlcEZlYXR1cmVTdG9yZV09XCJzdGVwRmVhdHVyZVN0b3JlXCJcbiAgICBbcm91dGVzRmVhdHVyZVN0b3JlXT1cInJvdXRlc0ZlYXR1cmVTdG9yZVwiXG4gICAgW3pvb21Ub0FjdGl2ZVJvdXRlJF09XCJ6b29tVG9BY3RpdmVSb3V0ZSRcIj4gIFxuPC9pZ28tZGlyZWN0aW9ucz4iXX0=