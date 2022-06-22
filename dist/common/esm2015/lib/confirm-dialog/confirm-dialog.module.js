import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IgoLanguageModule } from '@igo2/core';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmDialogService } from './confirm-dialog.service';
import * as i0 from "@angular/core";
export class IgoConfirmDialogModule {
    static forRoot() {
        return {
            ngModule: IgoConfirmDialogModule,
            providers: []
        };
    }
}
IgoConfirmDialogModule.ɵfac = function IgoConfirmDialogModule_Factory(t) { return new (t || IgoConfirmDialogModule)(); };
IgoConfirmDialogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoConfirmDialogModule });
IgoConfirmDialogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [ConfirmDialogService], imports: [[MatButtonModule, MatDialogModule, IgoLanguageModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoConfirmDialogModule, [{
        type: NgModule,
        args: [{
                imports: [MatButtonModule, MatDialogModule, IgoLanguageModule],
                declarations: [ConfirmDialogComponent],
                exports: [ConfirmDialogComponent],
                providers: [ConfirmDialogService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoConfirmDialogModule, { declarations: [ConfirmDialogComponent], imports: [MatButtonModule, MatDialogModule, IgoLanguageModule], exports: [ConfirmDialogComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQVFoRSxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7NEZBTlUsc0JBQXNCO3dFQUF0QixzQkFBc0I7NkVBRnRCLENBQUMsb0JBQW9CLENBQUMsWUFIeEIsQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDO3VGQUtuRCxzQkFBc0I7Y0FObEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzlELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDbEM7O3dGQUNZLHNCQUFzQixtQkFKbEIsc0JBQXNCLGFBRDNCLGVBQWUsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLGFBRW5ELHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuaW1wb3J0IHsgQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9jb25maXJtLWRpYWxvZy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBJZ29MYW5ndWFnZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NvbmZpcm1EaWFsb2dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29uZmlybURpYWxvZ0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0NvbmZpcm1EaWFsb2dTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29Db25maXJtRGlhbG9nTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29Db25maXJtRGlhbG9nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29Db25maXJtRGlhbG9nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==