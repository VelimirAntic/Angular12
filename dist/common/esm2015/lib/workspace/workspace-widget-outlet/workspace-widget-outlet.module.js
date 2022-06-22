import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgoWidgetOutletModule } from '../../widget/widget-outlet/widget-outlet.module';
import { WorkspaceWidgetOutletComponent } from './workspace-widget-outlet.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoWorkspaceWidgetOutletModule {
}
IgoWorkspaceWidgetOutletModule.ɵfac = function IgoWorkspaceWidgetOutletModule_Factory(t) { return new (t || IgoWorkspaceWidgetOutletModule)(); };
IgoWorkspaceWidgetOutletModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoWorkspaceWidgetOutletModule });
IgoWorkspaceWidgetOutletModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoWidgetOutletModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoWorkspaceWidgetOutletModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoWidgetOutletModule
                ],
                exports: [
                    WorkspaceWidgetOutletComponent
                ],
                declarations: [
                    WorkspaceWidgetOutletComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoWorkspaceWidgetOutletModule, { declarations: [WorkspaceWidgetOutletComponent], imports: [CommonModule,
        IgoWidgetOutletModule], exports: [WorkspaceWidgetOutletComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXdpZGdldC1vdXRsZXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvd29ya3NwYWNlL3dvcmtzcGFjZS13aWRnZXQtb3V0bGV0L3dvcmtzcGFjZS13aWRnZXQtb3V0bGV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUV4RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFckY7O0dBRUc7QUFhSCxNQUFNLE9BQU8sOEJBQThCOzs0R0FBOUIsOEJBQThCO2dGQUE5Qiw4QkFBOEI7b0ZBWGhDO1lBQ1AsWUFBWTtZQUNaLHFCQUFxQjtTQUN0Qjt1RkFRVSw4QkFBOEI7Y0FaMUMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLDhCQUE4QjtpQkFDL0I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLDhCQUE4QjtpQkFDL0I7YUFDRjs7d0ZBQ1ksOEJBQThCLG1CQUh2Qyw4QkFBOEIsYUFQOUIsWUFBWTtRQUNaLHFCQUFxQixhQUdyQiw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSWdvV2lkZ2V0T3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vd2lkZ2V0L3dpZGdldC1vdXRsZXQvd2lkZ2V0LW91dGxldC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBXb3Jrc3BhY2VXaWRnZXRPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzcGFjZS13aWRnZXQtb3V0bGV0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElnb1dpZGdldE91dGxldE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgV29ya3NwYWNlV2lkZ2V0T3V0bGV0Q29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFdvcmtzcGFjZVdpZGdldE91dGxldENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElnb1dvcmtzcGFjZVdpZGdldE91dGxldE1vZHVsZSB7fVxuIl19