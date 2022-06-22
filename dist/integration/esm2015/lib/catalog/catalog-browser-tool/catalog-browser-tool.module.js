import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgoCatalogBrowserModule } from '@igo2/geo';
import { CatalogBrowserToolComponent } from './catalog-browser-tool.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoAppCatalogBrowserToolModule {
}
IgoAppCatalogBrowserToolModule.ɵfac = function IgoAppCatalogBrowserToolModule_Factory(t) { return new (t || IgoAppCatalogBrowserToolModule)(); };
IgoAppCatalogBrowserToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppCatalogBrowserToolModule });
IgoAppCatalogBrowserToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoCatalogBrowserModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppCatalogBrowserToolModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoCatalogBrowserModule
                ],
                declarations: [CatalogBrowserToolComponent],
                exports: [CatalogBrowserToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppCatalogBrowserToolModule, { declarations: [CatalogBrowserToolComponent], imports: [CommonModule,
        IgoCatalogBrowserModule], exports: [CatalogBrowserToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1icm93c2VyLXRvb2wubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9jYXRhbG9nL2NhdGFsb2ctYnJvd3Nlci10b29sL2NhdGFsb2ctYnJvd3Nlci10b29sLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBRS9FOztHQUVHO0FBVUgsTUFBTSxPQUFPLDhCQUE4Qjs7NEdBQTlCLDhCQUE4QjtnRkFBOUIsOEJBQThCO29GQVJoQztZQUNQLFlBQVk7WUFDWix1QkFBdUI7U0FDeEI7dUZBS1UsOEJBQThCO2NBVDFDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWix1QkFBdUI7aUJBQ3hCO2dCQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7O3dGQUNZLDhCQUE4QixtQkFKMUIsMkJBQTJCLGFBSHhDLFlBQVk7UUFDWix1QkFBdUIsYUFHZiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSWdvQ2F0YWxvZ0Jyb3dzZXJNb2R1bGUgfSBmcm9tICdAaWdvMi9nZW8nO1xuaW1wb3J0IHsgQ2F0YWxvZ0Jyb3dzZXJUb29sQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRhbG9nLWJyb3dzZXItdG9vbC5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJZ29DYXRhbG9nQnJvd3Nlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXRhbG9nQnJvd3NlclRvb2xDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2F0YWxvZ0Jyb3dzZXJUb29sQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIElnb0FwcENhdGFsb2dCcm93c2VyVG9vbE1vZHVsZSB7fVxuIl19