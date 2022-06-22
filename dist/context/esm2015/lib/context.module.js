import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { IgoContextImportExportModule } from './context-import-export/context-import-export.module';
import { IgoContextManagerModule } from './context-manager/context-manager.module';
import { IgoContextMapButtonModule } from './context-map-button/context-map-button.module';
import { IgoShareMapModule } from './share-map/share-map.module';
import { IgoSidenavModule } from './sidenav/sidenav.module';
import * as i0 from "@angular/core";
export class IgoContextModule {
    static forRoot() {
        return {
            ngModule: IgoContextModule,
            providers: []
        };
    }
}
IgoContextModule.ɵfac = function IgoContextModule_Factory(t) { return new (t || IgoContextModule)(); };
IgoContextModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoContextModule });
IgoContextModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[MatInputModule, MatFormFieldModule, MatMenuModule], IgoContextImportExportModule,
        IgoContextManagerModule,
        IgoContextMapButtonModule,
        IgoShareMapModule,
        IgoSidenavModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoContextModule, [{
        type: NgModule,
        args: [{
                imports: [MatInputModule, MatFormFieldModule, MatMenuModule],
                declarations: [],
                exports: [
                    IgoContextImportExportModule,
                    IgoContextManagerModule,
                    IgoContextMapButtonModule,
                    IgoShareMapModule,
                    IgoSidenavModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoContextModule, { imports: [MatInputModule, MatFormFieldModule, MatMenuModule], exports: [IgoContextImportExportModule,
        IgoContextManagerModule,
        IgoContextMapButtonModule,
        IgoShareMapModule,
        IgoSidenavModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFhNUQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7O2dGQU5VLGdCQUFnQjtrRUFBaEIsZ0JBQWdCO3NFQVZsQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLENBQUMsRUFHMUQsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGdCQUFnQjt1RkFHUCxnQkFBZ0I7Y0FYNUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLENBQUM7Z0JBQzVELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUU7b0JBQ1AsNEJBQTRCO29CQUM1Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQixnQkFBZ0I7aUJBQ2pCO2FBQ0Y7O3dGQUNZLGdCQUFnQixjQVZqQixjQUFjLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxhQUd6RCw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5cbmltcG9ydCB7IElnb0NvbnRleHRJbXBvcnRFeHBvcnRNb2R1bGUgfSBmcm9tICcuL2NvbnRleHQtaW1wb3J0LWV4cG9ydC9jb250ZXh0LWltcG9ydC1leHBvcnQubW9kdWxlJztcbmltcG9ydCB7IElnb0NvbnRleHRNYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi9jb250ZXh0LW1hbmFnZXIvY29udGV4dC1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29Db250ZXh0TWFwQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9jb250ZXh0LW1hcC1idXR0b24vY29udGV4dC1tYXAtYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29TaGFyZU1hcE1vZHVsZSB9IGZyb20gJy4vc2hhcmUtbWFwL3NoYXJlLW1hcC5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvU2lkZW5hdk1vZHVsZSB9IGZyb20gJy4vc2lkZW5hdi9zaWRlbmF2Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRJbnB1dE1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRNZW51TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW1xuICAgIElnb0NvbnRleHRJbXBvcnRFeHBvcnRNb2R1bGUsXG4gICAgSWdvQ29udGV4dE1hbmFnZXJNb2R1bGUsXG4gICAgSWdvQ29udGV4dE1hcEJ1dHRvbk1vZHVsZSxcbiAgICBJZ29TaGFyZU1hcE1vZHVsZSxcbiAgICBJZ29TaWRlbmF2TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSWdvQ29udGV4dE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SWdvQ29udGV4dE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSWdvQ29udGV4dE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXX0=