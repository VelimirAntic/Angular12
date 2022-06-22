import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { IgoPanelModule, IgoFlexibleModule } from '@igo2/common';
import { IgoFeatureModule } from '@igo2/geo';
import { IgoContextManagerModule } from '../context-manager/context-manager.module';
import { SidenavComponent } from './sidenav.component';
import * as i0 from "@angular/core";
export class IgoSidenavModule {
    static forRoot() {
        return {
            ngModule: IgoSidenavModule
        };
    }
}
IgoSidenavModule.ɵfac = function IgoSidenavModule_Factory(t) { return new (t || IgoSidenavModule)(); };
IgoSidenavModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoSidenavModule });
IgoSidenavModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatSidenavModule,
            MatTooltipModule,
            IgoLanguageModule,
            IgoPanelModule,
            IgoFlexibleModule,
            IgoFeatureModule,
            IgoContextManagerModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoSidenavModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    MatSidenavModule,
                    MatTooltipModule,
                    IgoLanguageModule,
                    IgoPanelModule,
                    IgoFlexibleModule,
                    IgoFeatureModule,
                    IgoContextManagerModule
                ],
                exports: [SidenavComponent],
                declarations: [SidenavComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoSidenavModule, { declarations: [SidenavComponent], imports: [CommonModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatTooltipModule,
        IgoLanguageModule,
        IgoPanelModule,
        IgoFlexibleModule,
        IgoFeatureModule,
        IgoContextManagerModule], exports: [SidenavComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvc2lkZW5hdi9zaWRlbmF2Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBa0J2RCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7O2dGQUxVLGdCQUFnQjtrRUFBaEIsZ0JBQWdCO3NFQWZsQjtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2IsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLHVCQUF1QjtTQUN4Qjt1RkFJVSxnQkFBZ0I7Y0FoQjVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDM0IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDakM7O3dGQUNZLGdCQUFnQixtQkFGWixnQkFBZ0IsYUFaN0IsWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsdUJBQXVCLGFBRWYsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgSWdvUGFuZWxNb2R1bGUsIElnb0ZsZXhpYmxlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IElnb0ZlYXR1cmVNb2R1bGUgfSBmcm9tICdAaWdvMi9nZW8nO1xuXG5pbXBvcnQgeyBJZ29Db250ZXh0TWFuYWdlck1vZHVsZSB9IGZyb20gJy4uL2NvbnRleHQtbWFuYWdlci9jb250ZXh0LW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFNpZGVuYXZDb21wb25lbnQgfSBmcm9tICcuL3NpZGVuYXYuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGUsXG4gICAgSWdvUGFuZWxNb2R1bGUsXG4gICAgSWdvRmxleGlibGVNb2R1bGUsXG4gICAgSWdvRmVhdHVyZU1vZHVsZSxcbiAgICBJZ29Db250ZXh0TWFuYWdlck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbU2lkZW5hdkNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW1NpZGVuYXZDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIElnb1NpZGVuYXZNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb1NpZGVuYXZNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb1NpZGVuYXZNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=