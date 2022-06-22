import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { IgoSearchSelectorModule } from '../search-selector/search-selector.module';
import { IgoSearchSettingsModule } from '../search-settings/search-settings.module';
import { SearchBarComponent } from './search-bar.component';
import { SearchUrlParamDirective } from './search-url-param.directive';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoSearchBarModule {
}
IgoSearchBarModule.ɵfac = function IgoSearchBarModule_Factory(t) { return new (t || IgoSearchBarModule)(); };
IgoSearchBarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoSearchBarModule });
IgoSearchBarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            MatTooltipModule,
            MatIconModule,
            MatButtonModule,
            MatMenuModule,
            MatRadioModule,
            MatFormFieldModule,
            MatInputModule,
            IgoLanguageModule,
            IgoSearchSelectorModule,
            IgoSearchSettingsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoSearchBarModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatButtonModule,
                    MatMenuModule,
                    MatRadioModule,
                    MatFormFieldModule,
                    MatInputModule,
                    IgoLanguageModule,
                    IgoSearchSelectorModule,
                    IgoSearchSettingsModule
                ],
                exports: [
                    SearchBarComponent,
                ],
                declarations: [
                    SearchBarComponent,
                    SearchUrlParamDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoSearchBarModule, { declarations: [SearchBarComponent,
        SearchUrlParamDirective], imports: [CommonModule,
        FormsModule,
        MatTooltipModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        IgoLanguageModule,
        IgoSearchSelectorModule,
        IgoSearchSettingsModule], exports: [SearchBarComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2VhcmNoLWJhci9zZWFyY2gtYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRXZFOztHQUVHO0FBd0JILE1BQU0sT0FBTyxrQkFBa0I7O29GQUFsQixrQkFBa0I7b0VBQWxCLGtCQUFrQjt3RUF0QnBCO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGVBQWU7WUFDZixhQUFhO1lBQ2IsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLHVCQUF1QjtZQUN2Qix1QkFBdUI7U0FDeEI7dUZBU1Usa0JBQWtCO2NBdkI5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUNiLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2Qix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDWixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtpQkFDeEI7YUFDRjs7d0ZBQ1ksa0JBQWtCLG1CQUozQixrQkFBa0I7UUFDbEIsdUJBQXVCLGFBbEJ2QixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHVCQUF1QixhQUd2QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5pbXBvcnQgeyBJZ29TZWFyY2hTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4uL3NlYXJjaC1zZWxlY3Rvci9zZWFyY2gtc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IElnb1NlYXJjaFNldHRpbmdzTW9kdWxlIH0gZnJvbSAnLi4vc2VhcmNoLXNldHRpbmdzL3NlYXJjaC1zZXR0aW5ncy5tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hVcmxQYXJhbURpcmVjdGl2ZSB9IGZyb20gJy4vc2VhcmNoLXVybC1wYXJhbS5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlLFxuICAgIElnb1NlYXJjaFNlbGVjdG9yTW9kdWxlLFxuICAgIElnb1NlYXJjaFNldHRpbmdzTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTZWFyY2hCYXJDb21wb25lbnQsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNlYXJjaEJhckNvbXBvbmVudCxcbiAgICBTZWFyY2hVcmxQYXJhbURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElnb1NlYXJjaEJhck1vZHVsZSB7fVxuIl19