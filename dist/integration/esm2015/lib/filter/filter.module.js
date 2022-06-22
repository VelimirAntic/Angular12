import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgoFilterModule, IgoQueryModule } from '@igo2/geo';
import { OgcFilterToolComponent } from './ogc-filter-tool/ogc-filter-tool.component';
import { TimeFilterToolComponent } from './time-filter-tool/time-filter-tool.component';
import { SpatialFilterToolComponent } from './spatial-filter-tool/spatial-filter-tool.component';
import { ActiveTimeFilterToolComponent } from './active-time-filter-tool/active-time-filter-tool.component';
import { ActiveOgcFilterToolComponent } from './active-ogc-filter-tool/active-ogc-filter-tool.component';
import * as i0 from "@angular/core";
export class IgoAppFilterModule {
    static forRoot() {
        return {
            ngModule: IgoAppFilterModule,
            providers: []
        };
    }
}
IgoAppFilterModule.ɵfac = function IgoAppFilterModule_Factory(t) { return new (t || IgoAppFilterModule)(); };
IgoAppFilterModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppFilterModule });
IgoAppFilterModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoFilterModule, IgoQueryModule, CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppFilterModule, [{
        type: NgModule,
        args: [{
                imports: [IgoFilterModule, IgoQueryModule, CommonModule],
                declarations: [
                    OgcFilterToolComponent,
                    ActiveOgcFilterToolComponent,
                    TimeFilterToolComponent,
                    ActiveTimeFilterToolComponent,
                    SpatialFilterToolComponent
                ],
                exports: [
                    OgcFilterToolComponent,
                    ActiveOgcFilterToolComponent,
                    TimeFilterToolComponent,
                    ActiveTimeFilterToolComponent,
                    SpatialFilterToolComponent
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppFilterModule, { declarations: [OgcFilterToolComponent,
        ActiveOgcFilterToolComponent,
        TimeFilterToolComponent,
        ActiveTimeFilterToolComponent,
        SpatialFilterToolComponent], imports: [IgoFilterModule, IgoQueryModule, CommonModule], exports: [OgcFilterToolComponent,
        ActiveOgcFilterToolComponent,
        TimeFilterToolComponent,
        ActiveTimeFilterToolComponent,
        SpatialFilterToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvZmlsdGVyL2ZpbHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFFBQVEsRUFFUixzQkFBc0IsRUFDdkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOztBQW9CekcsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7O29GQU5VLGtCQUFrQjtvRUFBbEIsa0JBQWtCO3dFQWpCcEIsQ0FBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQzt1RkFpQjdDLGtCQUFrQjtjQWxCOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDO2dCQUN4RCxZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0Qiw0QkFBNEI7b0JBQzVCLHVCQUF1QjtvQkFDdkIsNkJBQTZCO29CQUM3QiwwQkFBMEI7aUJBQzNCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLDRCQUE0QjtvQkFDNUIsdUJBQXVCO29CQUN2Qiw2QkFBNkI7b0JBQzdCLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7O3dGQUNZLGtCQUFrQixtQkFmM0Isc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLDBCQUEwQixhQU5sQixlQUFlLEVBQUUsY0FBYyxFQUFFLFlBQVksYUFTckQsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSWdvRmlsdGVyTW9kdWxlLCBJZ29RdWVyeU1vZHVsZSB9IGZyb20gJ0BpZ28yL2dlbyc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJUb29sQ29tcG9uZW50IH0gZnJvbSAnLi9vZ2MtZmlsdGVyLXRvb2wvb2djLWZpbHRlci10b29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lRmlsdGVyVG9vbENvbXBvbmVudCB9IGZyb20gJy4vdGltZS1maWx0ZXItdG9vbC90aW1lLWZpbHRlci10b29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGF0aWFsRmlsdGVyVG9vbENvbXBvbmVudCB9IGZyb20gJy4vc3BhdGlhbC1maWx0ZXItdG9vbC9zcGF0aWFsLWZpbHRlci10b29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVUaW1lRmlsdGVyVG9vbENvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZlLXRpbWUtZmlsdGVyLXRvb2wvYWN0aXZlLXRpbWUtZmlsdGVyLXRvb2wuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZU9nY0ZpbHRlclRvb2xDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2ZS1vZ2MtZmlsdGVyLXRvb2wvYWN0aXZlLW9nYy1maWx0ZXItdG9vbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbSWdvRmlsdGVyTW9kdWxlLCBJZ29RdWVyeU1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgT2djRmlsdGVyVG9vbENvbXBvbmVudCxcbiAgICBBY3RpdmVPZ2NGaWx0ZXJUb29sQ29tcG9uZW50LFxuICAgIFRpbWVGaWx0ZXJUb29sQ29tcG9uZW50LFxuICAgIEFjdGl2ZVRpbWVGaWx0ZXJUb29sQ29tcG9uZW50LFxuICAgIFNwYXRpYWxGaWx0ZXJUb29sQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBPZ2NGaWx0ZXJUb29sQ29tcG9uZW50LFxuICAgIEFjdGl2ZU9nY0ZpbHRlclRvb2xDb21wb25lbnQsXG4gICAgVGltZUZpbHRlclRvb2xDb21wb25lbnQsXG4gICAgQWN0aXZlVGltZUZpbHRlclRvb2xDb21wb25lbnQsXG4gICAgU3BhdGlhbEZpbHRlclRvb2xDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIElnb0FwcEZpbHRlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SWdvQXBwRmlsdGVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29BcHBGaWx0ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuIl19