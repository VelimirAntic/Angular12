import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoListModule, IgoCollapsibleModule, IgoMatBadgeIconModule } from '@igo2/common';
import { IgoCatalogBrowserModule } from './catalog-browser/catalog-browser.module';
import { IgoCatalogLibraryModule } from './catalog-library/catalog-library.module';
import * as i0 from "@angular/core";
export class IgoCatalogModule {
}
IgoCatalogModule.ɵfac = function IgoCatalogModule_Factory(t) { return new (t || IgoCatalogModule)(); };
IgoCatalogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoCatalogModule });
IgoCatalogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatBadgeModule,
            MatIconModule,
            MatListModule,
            MatTooltipModule,
            IgoMatBadgeIconModule,
            IgoListModule,
            IgoCollapsibleModule
        ], IgoCatalogBrowserModule,
        IgoCatalogLibraryModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoCatalogModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatBadgeModule,
                    MatIconModule,
                    MatListModule,
                    MatTooltipModule,
                    IgoMatBadgeIconModule,
                    IgoListModule,
                    IgoCollapsibleModule
                ],
                exports: [
                    IgoCatalogBrowserModule,
                    IgoCatalogLibraryModule
                ],
                declarations: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoCatalogModule, { imports: [CommonModule,
        MatBadgeModule,
        MatIconModule,
        MatListModule,
        MatTooltipModule,
        IgoMatBadgeIconModule,
        IgoListModule,
        IgoCollapsibleModule], exports: [IgoCatalogBrowserModule,
        IgoCatalogLibraryModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9jYXRhbG9nL2NhdGFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBbUJuRixNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO2tFQUFoQixnQkFBZ0I7c0VBaEJsQjtZQUNQLFlBQVk7WUFDWixjQUFjO1lBQ2QsYUFBYTtZQUNiLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCLGFBQWE7WUFDYixvQkFBb0I7U0FDckIsRUFFQyx1QkFBdUI7UUFDdkIsdUJBQXVCO3VGQUlkLGdCQUFnQjtjQWpCNUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQixhQUFhO29CQUNiLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIsdUJBQXVCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUUsRUFBRTthQUNqQjs7d0ZBQ1ksZ0JBQWdCLGNBZnpCLFlBQVk7UUFDWixjQUFjO1FBQ2QsYUFBYTtRQUNiLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixvQkFBb0IsYUFHcEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9iYWRnZSc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7IElnb0xpc3RNb2R1bGUsIElnb0NvbGxhcHNpYmxlTW9kdWxlLCBJZ29NYXRCYWRnZUljb25Nb2R1bGUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBJZ29DYXRhbG9nQnJvd3Nlck1vZHVsZSB9IGZyb20gJy4vY2F0YWxvZy1icm93c2VyL2NhdGFsb2ctYnJvd3Nlci5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvQ2F0YWxvZ0xpYnJhcnlNb2R1bGUgfSBmcm9tICcuL2NhdGFsb2ctbGlicmFyeS9jYXRhbG9nLWxpYnJhcnkubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBJZ29NYXRCYWRnZUljb25Nb2R1bGUsXG4gICAgSWdvTGlzdE1vZHVsZSxcbiAgICBJZ29Db2xsYXBzaWJsZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSWdvQ2F0YWxvZ0Jyb3dzZXJNb2R1bGUsXG4gICAgSWdvQ2F0YWxvZ0xpYnJhcnlNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29DYXRhbG9nTW9kdWxlIHt9XG4iXX0=