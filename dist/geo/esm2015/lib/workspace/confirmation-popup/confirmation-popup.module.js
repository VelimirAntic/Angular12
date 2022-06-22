import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from './confirmation-popup.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoConfirmationPopupModule {
}
IgoConfirmationPopupModule.ɵfac = function IgoConfirmationPopupModule_Factory(t) { return new (t || IgoConfirmationPopupModule)(); };
IgoConfirmationPopupModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoConfirmationPopupModule });
IgoConfirmationPopupModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatButtonModule,
            MatDialogModule,
            MatButtonToggleModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoConfirmationPopupModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatButtonToggleModule
                ],
                exports: [ConfirmationPopupComponent],
                declarations: [ConfirmationPopupComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoConfirmationPopupModule, { declarations: [ConfirmationPopupComponent], imports: [CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatButtonToggleModule], exports: [ConfirmationPopupComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXBvcHVwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3dvcmtzcGFjZS9jb25maXJtYXRpb24tcG9wdXAvY29uZmlybWF0aW9uLXBvcHVwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUU1RTs7R0FFRztBQVdILE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7NEVBQTFCLDBCQUEwQjtnRkFUNUI7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLGVBQWU7WUFDZixxQkFBcUI7U0FDdEI7dUZBSVUsMEJBQTBCO2NBVnRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGVBQWU7b0JBQ2YscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDckMsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDM0M7O3dGQUNZLDBCQUEwQixtQkFGdEIsMEJBQTBCLGFBTnZDLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTtRQUNmLHFCQUFxQixhQUViLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3B1cC5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQ29uZmlybWF0aW9uUG9wdXBDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtDb25maXJtYXRpb25Qb3B1cENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSWdvQ29uZmlybWF0aW9uUG9wdXBNb2R1bGUge31cbiJdfQ==