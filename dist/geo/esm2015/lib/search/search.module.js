import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './shared/search.service';
import { provideSearchSourceService } from './shared/search-source-service.providers';
import { provideDefaultIChercheSearchResultFormatter } from './shared/sources/icherche.providers';
import { provideDefaultCoordinatesSearchResultFormatter } from './shared/sources/coordinates.providers';
import { provideILayerSearchResultFormatter } from './shared/sources/ilayer.providers';
import { IgoSearchBarModule } from './search-bar/search-bar.module';
import { IgoSearchSelectorModule } from './search-selector/search-selector.module';
import { IgoSearchResultsModule } from './search-results/search-results.module';
import { IgoSearchSettingsModule } from './search-settings/search-settings.module';
import { SearchPointerSummaryDirective } from './shared/search-pointer-summary.directive';
import * as i0 from "@angular/core";
export class IgoSearchModule {
    static forRoot() {
        return {
            ngModule: IgoSearchModule,
            providers: [
                SearchService,
                provideSearchSourceService(),
                provideDefaultIChercheSearchResultFormatter(),
                provideDefaultCoordinatesSearchResultFormatter(),
                provideILayerSearchResultFormatter()
            ]
        };
    }
}
IgoSearchModule.ɵfac = function IgoSearchModule_Factory(t) { return new (t || IgoSearchModule)(); };
IgoSearchModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoSearchModule });
IgoSearchModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoSearchBarModule,
            IgoSearchSelectorModule,
            IgoSearchResultsModule,
            IgoSearchSettingsModule
        ], IgoSearchBarModule,
        IgoSearchSelectorModule,
        IgoSearchResultsModule,
        IgoSearchSettingsModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoSearchModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoSearchBarModule,
                    IgoSearchSelectorModule,
                    IgoSearchResultsModule,
                    IgoSearchSettingsModule
                ],
                exports: [
                    IgoSearchBarModule,
                    IgoSearchSelectorModule,
                    IgoSearchResultsModule,
                    IgoSearchSettingsModule,
                    SearchPointerSummaryDirective
                ],
                declarations: [SearchPointerSummaryDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoSearchModule, { declarations: [SearchPointerSummaryDirective], imports: [CommonModule,
        IgoSearchBarModule,
        IgoSearchSelectorModule,
        IgoSearchResultsModule,
        IgoSearchSettingsModule], exports: [IgoSearchBarModule,
        IgoSearchSelectorModule,
        IgoSearchResultsModule,
        IgoSearchSettingsModule,
        SearchPointerSummaryDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3NlYXJjaC9zZWFyY2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEcsT0FBTyxFQUFFLDhDQUE4QyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBbUIxRixNQUFNLE9BQU8sZUFBZTtJQUMxQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsYUFBYTtnQkFDYiwwQkFBMEIsRUFBRTtnQkFDNUIsMkNBQTJDLEVBQUU7Z0JBQzdDLDhDQUE4QyxFQUFFO2dCQUNoRCxrQ0FBa0MsRUFBRTthQUNyQztTQUNGLENBQUM7SUFDSixDQUFDOzs4RUFaVSxlQUFlO2lFQUFmLGVBQWU7cUVBaEJqQjtZQUNQLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0Qix1QkFBdUI7U0FDeEIsRUFFQyxrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0Qix1QkFBdUI7dUZBS2QsZUFBZTtjQWpCM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIsNkJBQTZCO2lCQUM5QjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUM5Qzs7d0ZBQ1ksZUFBZSxtQkFGWCw2QkFBNkIsYUFiMUMsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLHVCQUF1QixhQUd2QixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBwcm92aWRlU2VhcmNoU291cmNlU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlYXJjaC1zb3VyY2Utc2VydmljZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRJQ2hlcmNoZVNlYXJjaFJlc3VsdEZvcm1hdHRlciB9IGZyb20gJy4vc2hhcmVkL3NvdXJjZXMvaWNoZXJjaGUucHJvdmlkZXJzJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29vcmRpbmF0ZXNTZWFyY2hSZXN1bHRGb3JtYXR0ZXIgfSBmcm9tICcuL3NoYXJlZC9zb3VyY2VzL2Nvb3JkaW5hdGVzLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBwcm92aWRlSUxheWVyU2VhcmNoUmVzdWx0Rm9ybWF0dGVyIH0gZnJvbSAnLi9zaGFyZWQvc291cmNlcy9pbGF5ZXIucHJvdmlkZXJzJztcblxuaW1wb3J0IHsgSWdvU2VhcmNoQmFyTW9kdWxlIH0gZnJvbSAnLi9zZWFyY2gtYmFyL3NlYXJjaC1iYXIubW9kdWxlJztcbmltcG9ydCB7IElnb1NlYXJjaFNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9zZWFyY2gtc2VsZWN0b3Ivc2VhcmNoLXNlbGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29TZWFyY2hSZXN1bHRzTW9kdWxlIH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvU2VhcmNoU2V0dGluZ3NNb2R1bGUgfSBmcm9tICcuL3NlYXJjaC1zZXR0aW5ncy9zZWFyY2gtc2V0dGluZ3MubW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaFBvaW50ZXJTdW1tYXJ5RGlyZWN0aXZlIH0gZnJvbSAnLi9zaGFyZWQvc2VhcmNoLXBvaW50ZXItc3VtbWFyeS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElnb1NlYXJjaEJhck1vZHVsZSxcbiAgICBJZ29TZWFyY2hTZWxlY3Rvck1vZHVsZSxcbiAgICBJZ29TZWFyY2hSZXN1bHRzTW9kdWxlLFxuICAgIElnb1NlYXJjaFNldHRpbmdzTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJZ29TZWFyY2hCYXJNb2R1bGUsXG4gICAgSWdvU2VhcmNoU2VsZWN0b3JNb2R1bGUsXG4gICAgSWdvU2VhcmNoUmVzdWx0c01vZHVsZSxcbiAgICBJZ29TZWFyY2hTZXR0aW5nc01vZHVsZSxcbiAgICBTZWFyY2hQb2ludGVyU3VtbWFyeURpcmVjdGl2ZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZWFyY2hQb2ludGVyU3VtbWFyeURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSWdvU2VhcmNoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29TZWFyY2hNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb1NlYXJjaE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTZWFyY2hTZXJ2aWNlLFxuICAgICAgICBwcm92aWRlU2VhcmNoU291cmNlU2VydmljZSgpLFxuICAgICAgICBwcm92aWRlRGVmYXVsdElDaGVyY2hlU2VhcmNoUmVzdWx0Rm9ybWF0dGVyKCksXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29vcmRpbmF0ZXNTZWFyY2hSZXN1bHRGb3JtYXR0ZXIoKSxcbiAgICAgICAgcHJvdmlkZUlMYXllclNlYXJjaFJlc3VsdEZvcm1hdHRlcigpXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19