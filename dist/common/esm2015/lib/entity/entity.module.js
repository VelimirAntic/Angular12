import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgoEntitySelectorModule } from './entity-selector/entity-selector.module';
import { IgoEntityTableModule } from './entity-table/entity-table.module';
import { IgoEntityTablePaginatorModule } from './entity-table-paginator/entity-table-paginator.module';
import * as i0 from "@angular/core";
export class IgoEntityModule {
}
IgoEntityModule.ɵfac = function IgoEntityModule_Factory(t) { return new (t || IgoEntityModule)(); };
IgoEntityModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoEntityModule });
IgoEntityModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ], IgoEntitySelectorModule,
        IgoEntityTableModule,
        IgoEntityTablePaginatorModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoEntityModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    IgoEntitySelectorModule,
                    IgoEntityTableModule,
                    IgoEntityTablePaginatorModule
                ],
                declarations: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoEntityModule, { imports: [CommonModule], exports: [IgoEntitySelectorModule,
        IgoEntityTableModule,
        IgoEntityTablePaginatorModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9lbnRpdHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQWF2RyxNQUFNLE9BQU8sZUFBZTs7OEVBQWYsZUFBZTtpRUFBZixlQUFlO3FFQVZqQjtZQUNQLFlBQVk7U0FDYixFQUVDLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsNkJBQTZCO3VGQUlwQixlQUFlO2NBWDNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLDZCQUE2QjtpQkFDOUI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7YUFDakI7O3dGQUNZLGVBQWUsY0FUeEIsWUFBWSxhQUdaLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IElnb0VudGl0eVNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9lbnRpdHktc2VsZWN0b3IvZW50aXR5LXNlbGVjdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29FbnRpdHlUYWJsZU1vZHVsZSB9IGZyb20gJy4vZW50aXR5LXRhYmxlL2VudGl0eS10YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvRW50aXR5VGFibGVQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICcuL2VudGl0eS10YWJsZS1wYWdpbmF0b3IvZW50aXR5LXRhYmxlLXBhZ2luYXRvci5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJZ29FbnRpdHlTZWxlY3Rvck1vZHVsZSxcbiAgICBJZ29FbnRpdHlUYWJsZU1vZHVsZSxcbiAgICBJZ29FbnRpdHlUYWJsZVBhZ2luYXRvck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIElnb0VudGl0eU1vZHVsZSB7fVxuIl19