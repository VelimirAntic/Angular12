import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { IgoFlexibleModule, IgoCustomHtmlModule, IgoPanelModule } from '@igo2/common';
import { IgoFeatureModule, IgoSearchModule, IgoFeatureDetailsModule } from '@igo2/geo';
import { SearchResultsToolComponent } from './search-results-tool.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoAppSearchResultsToolModule {
}
IgoAppSearchResultsToolModule.ɵfac = function IgoAppSearchResultsToolModule_Factory(t) { return new (t || IgoAppSearchResultsToolModule)(); };
IgoAppSearchResultsToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppSearchResultsToolModule });
IgoAppSearchResultsToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatBadgeModule,
            MatTooltipModule,
            MatButtonModule,
            IgoLanguageModule,
            IgoFeatureModule,
            IgoSearchModule,
            IgoFlexibleModule,
            IgoPanelModule,
            IgoFeatureDetailsModule,
            IgoCustomHtmlModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppSearchResultsToolModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatBadgeModule,
                    MatTooltipModule,
                    MatButtonModule,
                    IgoLanguageModule,
                    IgoFeatureModule,
                    IgoSearchModule,
                    IgoFlexibleModule,
                    IgoPanelModule,
                    IgoFeatureDetailsModule,
                    IgoCustomHtmlModule
                ],
                declarations: [SearchResultsToolComponent],
                exports: [SearchResultsToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppSearchResultsToolModule, { declarations: [SearchResultsToolComponent], imports: [CommonModule,
        MatIconModule,
        MatBadgeModule,
        MatTooltipModule,
        MatButtonModule,
        IgoLanguageModule,
        IgoFeatureModule,
        IgoSearchModule,
        IgoFlexibleModule,
        IgoPanelModule,
        IgoFeatureDetailsModule,
        IgoCustomHtmlModule], exports: [SearchResultsToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMtdG9vbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy10b29sL3NlYXJjaC1yZXN1bHRzLXRvb2wubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RGLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLHVCQUF1QixFQUN4QixNQUFNLFdBQVcsQ0FBQztBQUVuQixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFFN0U7O0dBRUc7QUFvQkgsTUFBTSxPQUFPLDZCQUE2Qjs7MEdBQTdCLDZCQUE2QjsrRUFBN0IsNkJBQTZCO21GQWxCL0I7WUFDUCxZQUFZO1lBQ1osYUFBYTtZQUNiLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtTQUNwQjt1RkFLVSw2QkFBNkI7Y0FuQnpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCx1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7d0ZBQ1ksNkJBQTZCLG1CQUp6QiwwQkFBMEIsYUFidkMsWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixtQkFBbUIsYUFHWCwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdEJhZGdlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2UnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgSWdvRmxleGlibGVNb2R1bGUsIElnb0N1c3RvbUh0bWxNb2R1bGUsIElnb1BhbmVsTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7XG4gIElnb0ZlYXR1cmVNb2R1bGUsXG4gIElnb1NlYXJjaE1vZHVsZSxcbiAgSWdvRmVhdHVyZURldGFpbHNNb2R1bGVcbn0gZnJvbSAnQGlnbzIvZ2VvJztcblxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c1Rvb2xDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1yZXN1bHRzLXRvb2wuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBJZ29MYW5ndWFnZU1vZHVsZSxcbiAgICBJZ29GZWF0dXJlTW9kdWxlLFxuICAgIElnb1NlYXJjaE1vZHVsZSxcbiAgICBJZ29GbGV4aWJsZU1vZHVsZSxcbiAgICBJZ29QYW5lbE1vZHVsZSxcbiAgICBJZ29GZWF0dXJlRGV0YWlsc01vZHVsZSxcbiAgICBJZ29DdXN0b21IdG1sTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlYXJjaFJlc3VsdHNUb29sQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlYXJjaFJlc3VsdHNUb29sQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIElnb0FwcFNlYXJjaFJlc3VsdHNUb29sTW9kdWxlIHt9XG4iXX0=