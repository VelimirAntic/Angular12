import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { IgoLanguageModule } from '@igo2/core';
import { IgoCustomHtmlModule, IgoInteractiveTourModule } from '@igo2/common';
import { AboutToolComponent } from './about-tool/about-tool.component';
import * as i0 from "@angular/core";
export class IgoAppAboutModule {
    static forRoot() {
        return {
            ngModule: IgoAppAboutModule,
            providers: []
        };
    }
}
IgoAppAboutModule.ɵfac = function IgoAppAboutModule_Factory(t) { return new (t || IgoAppAboutModule)(); };
IgoAppAboutModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppAboutModule });
IgoAppAboutModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            IgoLanguageModule,
            IgoCustomHtmlModule,
            MatButtonModule,
            MatTooltipModule,
            MatIconModule,
            MatMenuModule,
            IgoInteractiveTourModule,
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppAboutModule, [{
        type: NgModule,
        args: [{
                imports: [
                    IgoLanguageModule,
                    IgoCustomHtmlModule,
                    MatButtonModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatMenuModule,
                    IgoInteractiveTourModule,
                    CommonModule
                ],
                declarations: [AboutToolComponent],
                exports: [AboutToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppAboutModule, { declarations: [AboutToolComponent], imports: [IgoLanguageModule,
        IgoCustomHtmlModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatMenuModule,
        IgoInteractiveTourModule,
        CommonModule], exports: [AboutToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9hYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFFBQVEsRUFFUixzQkFBc0IsRUFDdkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBaUJ2RSxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7a0ZBTlUsaUJBQWlCO21FQUFqQixpQkFBaUI7dUVBZG5CO1lBQ1AsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixhQUFhO1lBQ2Isd0JBQXdCO1lBQ3hCLFlBQVk7U0FDYjt1RkFLVSxpQkFBaUI7Y0FmN0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYix3QkFBd0I7b0JBQ3hCLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7d0ZBQ1ksaUJBQWlCLG1CQUpiLGtCQUFrQixhQVQvQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGFBQWE7UUFDYix3QkFBd0I7UUFDeEIsWUFBWSxhQUdKLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5cbmltcG9ydCB7IElnb0xhbmd1YWdlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBJZ29DdXN0b21IdG1sTW9kdWxlLCBJZ29JbnRlcmFjdGl2ZVRvdXJNb2R1bGUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBBYm91dFRvb2xDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0LXRvb2wvYWJvdXQtdG9vbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGUsXG4gICAgSWdvQ3VzdG9tSHRtbE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgSWdvSW50ZXJhY3RpdmVUb3VyTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBYm91dFRvb2xDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWJvdXRUb29sQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIElnb0FwcEFib3V0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29BcHBBYm91dE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSWdvQXBwQWJvdXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuIl19