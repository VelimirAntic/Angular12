import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgoEntitySelectorModule } from '../../entity/entity-selector/entity-selector.module';
import { WorkspaceSelectorComponent } from './workspace-selector.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoWorkspaceSelectorModule {
}
IgoWorkspaceSelectorModule.ɵfac = function IgoWorkspaceSelectorModule_Factory(t) { return new (t || IgoWorkspaceSelectorModule)(); };
IgoWorkspaceSelectorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoWorkspaceSelectorModule });
IgoWorkspaceSelectorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoEntitySelectorModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoWorkspaceSelectorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoEntitySelectorModule
                ],
                exports: [
                    WorkspaceSelectorComponent
                ],
                declarations: [
                    WorkspaceSelectorComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoWorkspaceSelectorModule, { declarations: [WorkspaceSelectorComponent], imports: [CommonModule,
        IgoEntitySelectorModule], exports: [WorkspaceSelectorComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL3dvcmtzcGFjZS93b3Jrc3BhY2Utc2VsZWN0b3Ivd29ya3NwYWNlLXNlbGVjdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFNUU7O0dBRUc7QUFhSCxNQUFNLE9BQU8sMEJBQTBCOztvR0FBMUIsMEJBQTBCOzRFQUExQiwwQkFBMEI7Z0ZBWDVCO1lBQ1AsWUFBWTtZQUNaLHVCQUF1QjtTQUN4Qjt1RkFRVSwwQkFBMEI7Y0FadEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLDBCQUEwQjtpQkFDM0I7YUFDRjs7d0ZBQ1ksMEJBQTBCLG1CQUhuQywwQkFBMEIsYUFQMUIsWUFBWTtRQUNaLHVCQUF1QixhQUd2QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSWdvRW50aXR5U2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuLi8uLi9lbnRpdHkvZW50aXR5LXNlbGVjdG9yL2VudGl0eS1zZWxlY3Rvci5tb2R1bGUnO1xuaW1wb3J0IHsgV29ya3NwYWNlU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzcGFjZS1zZWxlY3Rvci5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJZ29FbnRpdHlTZWxlY3Rvck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgV29ya3NwYWNlU2VsZWN0b3JDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgV29ya3NwYWNlU2VsZWN0b3JDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29Xb3Jrc3BhY2VTZWxlY3Rvck1vZHVsZSB7fVxuIl19