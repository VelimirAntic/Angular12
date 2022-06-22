import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { IgoWidgetModule } from '@igo2/common';
import { provideOgcFilterWidget } from './widgets/widgets';
import { IgoLanguageModule } from '@igo2/core';
import { IgoOgcFilterModule } from './widgets/ogc-filter/ogc-filter.module';
import { IgoWorkspaceSelectorModule } from './workspace-selector/workspace-selector.module';
import { IgoWorkspaceUpdatorModule } from './workspace-updator/workspace-updator.module';
import { IgoConfirmationPopupModule } from './confirmation-popup/confirmation-popup.module';
import * as i0 from "@angular/core";
export class IgoGeoWorkspaceModule {
}
IgoGeoWorkspaceModule.ɵfac = function IgoGeoWorkspaceModule_Factory(t) { return new (t || IgoGeoWorkspaceModule)(); };
IgoGeoWorkspaceModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoGeoWorkspaceModule });
IgoGeoWorkspaceModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        provideOgcFilterWidget()
    ], imports: [[
            CommonModule,
            IgoLanguageModule,
            IgoWidgetModule,
            IgoWorkspaceSelectorModule,
            IgoWorkspaceUpdatorModule,
            IgoOgcFilterModule,
            MatDialogModule
        ], IgoWorkspaceSelectorModule,
        IgoWorkspaceUpdatorModule,
        IgoOgcFilterModule,
        IgoConfirmationPopupModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoGeoWorkspaceModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoLanguageModule,
                    IgoWidgetModule,
                    IgoWorkspaceSelectorModule,
                    IgoWorkspaceUpdatorModule,
                    IgoOgcFilterModule,
                    MatDialogModule
                ],
                exports: [
                    IgoWorkspaceSelectorModule,
                    IgoWorkspaceUpdatorModule,
                    IgoOgcFilterModule,
                    IgoConfirmationPopupModule
                ],
                declarations: [],
                providers: [
                    provideOgcFilterWidget()
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoGeoWorkspaceModule, { imports: [CommonModule,
        IgoLanguageModule,
        IgoWidgetModule,
        IgoWorkspaceSelectorModule,
        IgoWorkspaceUpdatorModule,
        IgoOgcFilterModule,
        MatDialogModule], exports: [IgoWorkspaceSelectorModule,
        IgoWorkspaceUpdatorModule,
        IgoOgcFilterModule,
        IgoConfirmationPopupModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3dvcmtzcGFjZS93b3Jrc3BhY2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUF1QjVGLE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7dUVBQXJCLHFCQUFxQjs0RUFKckI7UUFDVCxzQkFBc0IsRUFBRTtLQUN6QixZQWxCUTtZQUNQLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLDBCQUEwQjtZQUMxQix5QkFBeUI7WUFDekIsa0JBQWtCO1lBQ2xCLGVBQWU7U0FDaEIsRUFFQywwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQiwwQkFBMEI7dUZBT2pCLHFCQUFxQjtjQXJCakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZiwwQkFBMEI7b0JBQzFCLHlCQUF5QjtvQkFDekIsa0JBQWtCO29CQUNsQixlQUFlO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsMEJBQTBCO29CQUMxQix5QkFBeUI7b0JBQ3pCLGtCQUFrQjtvQkFDbEIsMEJBQTBCO2lCQUMzQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsU0FBUyxFQUFFO29CQUNULHNCQUFzQixFQUFFO2lCQUN6QjthQUNGOzt3RkFDWSxxQkFBcUIsY0FuQjlCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGVBQWUsYUFHZiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBJZ29XaWRnZXRNb2R1bGUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBwcm92aWRlT2djRmlsdGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3dpZGdldHMnO1xuXG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgSWdvT2djRmlsdGVyTW9kdWxlIH0gZnJvbSAnLi93aWRnZXRzL29nYy1maWx0ZXIvb2djLWZpbHRlci5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvV29ya3NwYWNlU2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuL3dvcmtzcGFjZS1zZWxlY3Rvci93b3Jrc3BhY2Utc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IElnb1dvcmtzcGFjZVVwZGF0b3JNb2R1bGUgfSBmcm9tICcuL3dvcmtzcGFjZS11cGRhdG9yL3dvcmtzcGFjZS11cGRhdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29Db25maXJtYXRpb25Qb3B1cE1vZHVsZSB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcHVwL2NvbmZpcm1hdGlvbi1wb3B1cC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlLFxuICAgIElnb1dpZGdldE1vZHVsZSxcbiAgICBJZ29Xb3Jrc3BhY2VTZWxlY3Rvck1vZHVsZSxcbiAgICBJZ29Xb3Jrc3BhY2VVcGRhdG9yTW9kdWxlLFxuICAgIElnb09nY0ZpbHRlck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIElnb1dvcmtzcGFjZVNlbGVjdG9yTW9kdWxlLFxuICAgIElnb1dvcmtzcGFjZVVwZGF0b3JNb2R1bGUsXG4gICAgSWdvT2djRmlsdGVyTW9kdWxlLFxuICAgIElnb0NvbmZpcm1hdGlvblBvcHVwTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVPZ2NGaWx0ZXJXaWRnZXQoKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElnb0dlb1dvcmtzcGFjZU1vZHVsZSB7fVxuIl19