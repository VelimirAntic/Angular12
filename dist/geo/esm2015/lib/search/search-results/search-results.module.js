import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoCollapsibleModule, IgoListModule, IgoMatBadgeIconModule, IgoStopPropagationModule } from '@igo2/common';
import { IgoLanguageModule } from '@igo2/core';
import { IgoMetadataModule } from './../../metadata/metadata.module';
import { SearchResultsComponent } from './search-results.component';
import { SearchResultsItemComponent } from './search-results-item.component';
import { SearchResultAddButtonComponent } from './search-results-add-button.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoSearchResultsModule {
}
IgoSearchResultsModule.ɵfac = function IgoSearchResultsModule_Factory(t) { return new (t || IgoSearchResultsModule)(); };
IgoSearchResultsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoSearchResultsModule });
IgoSearchResultsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatBadgeModule,
            MatTooltipModule,
            MatIconModule,
            MatListModule,
            MatButtonModule,
            IgoCollapsibleModule,
            IgoListModule,
            IgoStopPropagationModule,
            IgoLanguageModule,
            IgoMatBadgeIconModule,
            IgoMetadataModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoSearchResultsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatBadgeModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatListModule,
                    MatButtonModule,
                    IgoCollapsibleModule,
                    IgoListModule,
                    IgoStopPropagationModule,
                    IgoLanguageModule,
                    IgoMatBadgeIconModule,
                    IgoMetadataModule,
                ],
                exports: [
                    SearchResultsComponent,
                    SearchResultAddButtonComponent
                ],
                declarations: [
                    SearchResultsComponent,
                    SearchResultsItemComponent,
                    SearchResultAddButtonComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoSearchResultsModule, { declarations: [SearchResultsComponent,
        SearchResultsItemComponent,
        SearchResultAddButtonComponent], imports: [CommonModule,
        MatBadgeModule,
        MatTooltipModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        IgoCollapsibleModule,
        IgoListModule,
        IgoStopPropagationModule,
        IgoLanguageModule,
        IgoMatBadgeIconModule,
        IgoMetadataModule], exports: [SearchResultsComponent,
        SearchResultAddButtonComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvc2VhcmNoL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFN0QsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN6QixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRXZGOztHQUVHO0FBMEJILE1BQU0sT0FBTyxzQkFBc0I7OzRGQUF0QixzQkFBc0I7d0VBQXRCLHNCQUFzQjs0RUF4QnhCO1lBQ1AsWUFBWTtZQUNaLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGFBQWE7WUFDYixlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLGFBQWE7WUFDYix3QkFBd0I7WUFDeEIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixpQkFBaUI7U0FDbEI7dUZBV1Usc0JBQXNCO2NBekJsQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsYUFBYTtvQkFDYix3QkFBd0I7b0JBQ3hCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixpQkFBaUI7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLDhCQUE4QjtpQkFDL0I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtvQkFDdEIsMEJBQTBCO29CQUMxQiw4QkFBOEI7aUJBQy9CO2FBQ0Y7O3dGQUNZLHNCQUFzQixtQkFML0Isc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQiw4QkFBOEIsYUFwQjlCLFlBQVk7UUFDWixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixhQUFhO1FBQ2IsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsaUJBQWlCLGFBR2pCLHNCQUFzQjtRQUN0Qiw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9iYWRnZSc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5pbXBvcnQge1xuICBJZ29Db2xsYXBzaWJsZU1vZHVsZSxcbiAgSWdvTGlzdE1vZHVsZSxcbiAgSWdvTWF0QmFkZ2VJY29uTW9kdWxlLFxuICBJZ29TdG9wUHJvcGFnYXRpb25Nb2R1bGVcbn0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IElnb0xhbmd1YWdlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbmltcG9ydCB7IElnb01ldGFkYXRhTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9tZXRhZGF0YS9tZXRhZGF0YS5tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRBZGRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1yZXN1bHRzLWFkZC1idXR0b24uY29tcG9uZW50JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIElnb0NvbGxhcHNpYmxlTW9kdWxlLFxuICAgIElnb0xpc3RNb2R1bGUsXG4gICAgSWdvU3RvcFByb3BhZ2F0aW9uTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlLFxuICAgIElnb01hdEJhZGdlSWNvbk1vZHVsZSxcbiAgICBJZ29NZXRhZGF0YU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNlYXJjaFJlc3VsdHNDb21wb25lbnQsXG4gICAgU2VhcmNoUmVzdWx0QWRkQnV0dG9uQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNlYXJjaFJlc3VsdHNDb21wb25lbnQsXG4gICAgU2VhcmNoUmVzdWx0c0l0ZW1Db21wb25lbnQsXG4gICAgU2VhcmNoUmVzdWx0QWRkQnV0dG9uQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSWdvU2VhcmNoUmVzdWx0c01vZHVsZSB7fVxuIl19