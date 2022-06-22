import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IgoPanelModule, IgoFlexibleModule } from '@igo2/common';
import { IgoFeatureModule } from '../feature/feature.module';
import { ToastComponent } from './toast.component';
import * as i0 from "@angular/core";
export class IgoToastModule {
    static forRoot() {
        return {
            ngModule: IgoToastModule
        };
    }
}
IgoToastModule.ɵfac = function IgoToastModule_Factory(t) { return new (t || IgoToastModule)(); };
IgoToastModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoToastModule });
IgoToastModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule,
            IgoPanelModule,
            IgoFlexibleModule,
            IgoFeatureModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoToastModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    IgoPanelModule,
                    IgoFlexibleModule,
                    IgoFeatureModule
                ],
                exports: [ToastComponent],
                declarations: [ToastComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoToastModule, { declarations: [ToastComponent], imports: [CommonModule,
        MatIconModule,
        MatButtonModule,
        IgoPanelModule,
        IgoFlexibleModule,
        IgoFeatureModule], exports: [ToastComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvdG9hc3QvdG9hc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQWNuRCxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFDO0lBQ0osQ0FBQzs7NEVBTFUsY0FBYztnRUFBZCxjQUFjO29FQVhoQjtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2IsZUFBZTtZQUNmLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsZ0JBQWdCO1NBQ2pCO3VGQUlVLGNBQWM7Y0FaMUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMvQjs7d0ZBQ1ksY0FBYyxtQkFGVixjQUFjLGFBUjNCLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZ0JBQWdCLGFBRVIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHsgSWdvUGFuZWxNb2R1bGUsIElnb0ZsZXhpYmxlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHsgSWdvRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uL2ZlYXR1cmUvZmVhdHVyZS5tb2R1bGUnO1xuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgSWdvUGFuZWxNb2R1bGUsXG4gICAgSWdvRmxleGlibGVNb2R1bGUsXG4gICAgSWdvRmVhdHVyZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbVG9hc3RDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSWdvVG9hc3RNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb1RvYXN0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29Ub2FzdE1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==