import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgoWidgetOutletModule } from './widget-outlet/widget-outlet.module';
import { WidgetService } from './shared/widget.service';
import * as i0 from "@angular/core";
export class IgoWidgetModule {
}
IgoWidgetModule.ɵfac = function IgoWidgetModule_Factory(t) { return new (t || IgoWidgetModule)(); };
IgoWidgetModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoWidgetModule });
IgoWidgetModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        WidgetService
    ], imports: [[
            CommonModule,
            IgoWidgetOutletModule
        ], IgoWidgetOutletModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoWidgetModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoWidgetOutletModule
                ],
                exports: [
                    IgoWidgetOutletModule
                ],
                declarations: [],
                providers: [
                    WidgetService
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoWidgetModule, { imports: [CommonModule,
        IgoWidgetOutletModule], exports: [IgoWidgetOutletModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL3dpZGdldC93aWRnZXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFleEQsTUFBTSxPQUFPLGVBQWU7OzhFQUFmLGVBQWU7aUVBQWYsZUFBZTtzRUFKZjtRQUNULGFBQWE7S0FDZCxZQVZRO1lBQ1AsWUFBWTtZQUNaLHFCQUFxQjtTQUN0QixFQUVDLHFCQUFxQjt1RkFPWixlQUFlO2NBYjNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixxQkFBcUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7aUJBQ3RCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixTQUFTLEVBQUU7b0JBQ1QsYUFBYTtpQkFDZDthQUNGOzt3RkFDWSxlQUFlLGNBWHhCLFlBQVk7UUFDWixxQkFBcUIsYUFHckIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IElnb1dpZGdldE91dGxldE1vZHVsZSB9IGZyb20gJy4vd2lkZ2V0LW91dGxldC93aWRnZXQtb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvd2lkZ2V0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElnb1dpZGdldE91dGxldE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSWdvV2lkZ2V0T3V0bGV0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIFdpZGdldFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29XaWRnZXRNb2R1bGUge31cbiJdfQ==