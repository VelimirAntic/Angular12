import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgoImportExportModule } from '@igo2/geo';
import { ImportExportToolComponent } from './import-export-tool/import-export-tool.component';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { IgoLanguageModule } from '@igo2/core';
import { IgoContextImportExportModule } from '@igo2/context';
import * as i0 from "@angular/core";
export class IgoAppImportExportModule {
    static forRoot() {
        return {
            ngModule: IgoAppImportExportModule,
            providers: []
        };
    }
}
IgoAppImportExportModule.ɵfac = function IgoAppImportExportModule_Factory(t) { return new (t || IgoAppImportExportModule)(); };
IgoAppImportExportModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppImportExportModule });
IgoAppImportExportModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            IgoImportExportModule,
            IgoContextImportExportModule,
            CommonModule,
            IgoLanguageModule,
            MatButtonToggleModule,
            MatTabsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppImportExportModule, [{
        type: NgModule,
        args: [{
                imports: [
                    IgoImportExportModule,
                    IgoContextImportExportModule,
                    CommonModule,
                    IgoLanguageModule,
                    MatButtonToggleModule,
                    MatTabsModule
                ],
                declarations: [ImportExportToolComponent],
                exports: [ImportExportToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppImportExportModule, { declarations: [ImportExportToolComponent], imports: [IgoImportExportModule,
        IgoContextImportExportModule,
        CommonModule,
        IgoLanguageModule,
        MatButtonToggleModule,
        MatTabsModule], exports: [ImportExportToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWV4cG9ydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2ltcG9ydC1leHBvcnQvaW1wb3J0LWV4cG9ydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFFBQVEsRUFFUixzQkFBc0IsRUFDdkIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFlN0QsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7O2dHQU5VLHdCQUF3QjswRUFBeEIsd0JBQXdCOzhFQVoxQjtZQUNQLHFCQUFxQjtZQUNyQiw0QkFBNEI7WUFDNUIsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIsYUFBYTtTQUNkO3VGQUtVLHdCQUF3QjtjQWJwQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsNEJBQTRCO29CQUM1QixZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7O3dGQUNZLHdCQUF3QixtQkFKcEIseUJBQXlCLGFBUHRDLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsYUFBYSxhQUdMLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJZ29JbXBvcnRFeHBvcnRNb2R1bGUgfSBmcm9tICdAaWdvMi9nZW8nO1xuaW1wb3J0IHsgSW1wb3J0RXhwb3J0VG9vbENvbXBvbmVudCB9IGZyb20gJy4vaW1wb3J0LWV4cG9ydC10b29sL2ltcG9ydC1leHBvcnQtdG9vbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuXG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgSWdvQ29udGV4dEltcG9ydEV4cG9ydE1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvbnRleHQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSWdvSW1wb3J0RXhwb3J0TW9kdWxlLFxuICAgIElnb0NvbnRleHRJbXBvcnRFeHBvcnRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ltcG9ydEV4cG9ydFRvb2xDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSW1wb3J0RXhwb3J0VG9vbENvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29BcHBJbXBvcnRFeHBvcnRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb0FwcEltcG9ydEV4cG9ydE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSWdvQXBwSW1wb3J0RXhwb3J0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==