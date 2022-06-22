import { NgModule } from '@angular/core';
import { IgoBadgeIconDirective } from './badge-icon.directive';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class IgoMatBadgeIconModule {
    static forRoot() {
        return {
            ngModule: IgoMatBadgeIconModule,
            providers: []
        };
    }
}
IgoMatBadgeIconModule.ɵfac = function IgoMatBadgeIconModule_Factory(t) { return new (t || IgoMatBadgeIconModule)(); };
IgoMatBadgeIconModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoMatBadgeIconModule });
IgoMatBadgeIconModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[MatBadgeModule, MatIconModule], MatBadgeModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoMatBadgeIconModule, [{
        type: NgModule,
        args: [{
                imports: [MatBadgeModule, MatIconModule],
                declarations: [IgoBadgeIconDirective],
                exports: [MatBadgeModule, IgoBadgeIconDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoMatBadgeIconModule, { declarations: [IgoBadgeIconDirective], imports: [MatBadgeModule, MatIconModule], exports: [MatBadgeModule, IgoBadgeIconDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UtaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9iYWRnZS1pY29uL2JhZGdlLWljb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBT3ZELE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOzswRkFOVSxxQkFBcUI7dUVBQXJCLHFCQUFxQjsyRUFKdkIsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLEVBRTlCLGNBQWM7dUZBRWIscUJBQXFCO2NBTGpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDO2dCQUN4QyxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLHFCQUFxQixDQUFDO2FBQ2pEOzt3RkFDWSxxQkFBcUIsbUJBSGpCLHFCQUFxQixhQUQxQixjQUFjLEVBQUUsYUFBYSxhQUU3QixjQUFjLEVBQUUscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElnb0JhZGdlSWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vYmFkZ2UtaWNvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9iYWRnZSc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRCYWRnZU1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0lnb0JhZGdlSWNvbkRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtNYXRCYWRnZU1vZHVsZSwgSWdvQmFkZ2VJY29uRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29NYXRCYWRnZUljb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb01hdEJhZGdlSWNvbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSWdvTWF0QmFkZ2VJY29uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==