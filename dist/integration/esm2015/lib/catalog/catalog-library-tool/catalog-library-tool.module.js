import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgoCatalogLibraryModule } from '@igo2/geo';
import { CatalogLibraryToolComponent } from './catalog-library-tool.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoAppCatalogLibraryToolModule {
}
IgoAppCatalogLibraryToolModule.ɵfac = function IgoAppCatalogLibraryToolModule_Factory(t) { return new (t || IgoAppCatalogLibraryToolModule)(); };
IgoAppCatalogLibraryToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppCatalogLibraryToolModule });
IgoAppCatalogLibraryToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoCatalogLibraryModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppCatalogLibraryToolModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoCatalogLibraryModule
                ],
                declarations: [CatalogLibraryToolComponent],
                exports: [CatalogLibraryToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppCatalogLibraryToolModule, { declarations: [CatalogLibraryToolComponent], imports: [CommonModule,
        IgoCatalogLibraryModule], exports: [CatalogLibraryToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1saWJyYXJ5LXRvb2wubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9jYXRhbG9nL2NhdGFsb2ctbGlicmFyeS10b29sL2NhdGFsb2ctbGlicmFyeS10b29sLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBRS9FOztHQUVHO0FBVUgsTUFBTSxPQUFPLDhCQUE4Qjs7NEdBQTlCLDhCQUE4QjtnRkFBOUIsOEJBQThCO29GQVJoQztZQUNQLFlBQVk7WUFDWix1QkFBdUI7U0FDeEI7dUZBS1UsOEJBQThCO2NBVDFDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWix1QkFBdUI7aUJBQ3hCO2dCQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7O3dGQUNZLDhCQUE4QixtQkFKMUIsMkJBQTJCLGFBSHhDLFlBQVk7UUFDWix1QkFBdUIsYUFHZiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSWdvQ2F0YWxvZ0xpYnJhcnlNb2R1bGUgfSBmcm9tICdAaWdvMi9nZW8nO1xuaW1wb3J0IHsgQ2F0YWxvZ0xpYnJhcnlUb29sQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRhbG9nLWxpYnJhcnktdG9vbC5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJZ29DYXRhbG9nTGlicmFyeU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXRhbG9nTGlicmFyeVRvb2xDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2F0YWxvZ0xpYnJhcnlUb29sQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIElnb0FwcENhdGFsb2dMaWJyYXJ5VG9vbE1vZHVsZSB7fVxuIl19