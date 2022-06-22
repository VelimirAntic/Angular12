import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { CustomHtmlComponent } from './custom-html.component';
import { SanitizeHtmlPipe } from './custom-html.pipe';
import * as i0 from "@angular/core";
export class IgoCustomHtmlModule {
    static forRoot() {
        return {
            ngModule: IgoCustomHtmlModule
        };
    }
}
IgoCustomHtmlModule.ɵfac = function IgoCustomHtmlModule_Factory(t) { return new (t || IgoCustomHtmlModule)(); };
IgoCustomHtmlModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoCustomHtmlModule });
IgoCustomHtmlModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatTooltipModule,
            MatInputModule,
            MatButtonModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoCustomHtmlModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatTooltipModule,
                    MatInputModule,
                    MatButtonModule,
                    IgoLanguageModule
                ],
                exports: [SanitizeHtmlPipe, CustomHtmlComponent],
                declarations: [SanitizeHtmlPipe, CustomHtmlComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoCustomHtmlModule, { declarations: [SanitizeHtmlPipe, CustomHtmlComponent], imports: [CommonModule,
        MatIconModule,
        MatTooltipModule,
        MatInputModule,
        MatButtonModule,
        IgoLanguageModule], exports: [SanitizeHtmlPipe, CustomHtmlComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWh0bWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY3VzdG9tLWh0bWwvY3VzdG9tLWh0bWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBY3RELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtTQUM5QixDQUFDO0lBQ0osQ0FBQzs7c0ZBTFUsbUJBQW1CO3FFQUFuQixtQkFBbUI7eUVBWHJCO1lBQ1AsWUFBWTtZQUNaLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGVBQWU7WUFDZixpQkFBaUI7U0FDbEI7dUZBSVUsbUJBQW1CO2NBWi9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ2hELFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO2FBQ3REOzt3RkFDWSxtQkFBbUIsbUJBRmYsZ0JBQWdCLEVBQUUsbUJBQW1CLGFBUmxELFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsaUJBQWlCLGFBRVQsZ0JBQWdCLEVBQUUsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7IElnb0xhbmd1YWdlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbmltcG9ydCB7IEN1c3RvbUh0bWxDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbS1odG1sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYW5pdGl6ZUh0bWxQaXBlIH0gZnJvbSAnLi9jdXN0b20taHRtbC5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtTYW5pdGl6ZUh0bWxQaXBlLCBDdXN0b21IdG1sQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbU2FuaXRpemVIdG1sUGlwZSwgQ3VzdG9tSHRtbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSWdvQ3VzdG9tSHRtbE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SWdvQ3VzdG9tSHRtbE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSWdvQ3VzdG9tSHRtbE1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==