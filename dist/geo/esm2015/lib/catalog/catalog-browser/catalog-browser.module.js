import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { IgoMatBadgeIconModule, IgoCollapsibleModule, IgoListModule } from '@igo2/common';
import { IgoMetadataModule } from './../../metadata/metadata.module';
import { CatalogBrowserComponent } from './catalog-browser.component';
import { CatalogBrowserLayerComponent } from './catalog-browser-layer.component';
import { CatalogBrowserGroupComponent } from './catalog-browser-group.component';
import { IgoLayerModule } from '../../layer/layer.module';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/common";
import * as i2 from "@angular/common";
/**
 * @ignore
 */
export class IgoCatalogBrowserModule {
}
IgoCatalogBrowserModule.ɵfac = function IgoCatalogBrowserModule_Factory(t) { return new (t || IgoCatalogBrowserModule)(); };
IgoCatalogBrowserModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoCatalogBrowserModule });
IgoCatalogBrowserModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatBadgeModule,
            MatButtonModule,
            MatIconModule,
            MatListModule,
            MatTooltipModule,
            IgoMatBadgeIconModule,
            IgoLanguageModule,
            IgoListModule,
            IgoCollapsibleModule,
            IgoMetadataModule,
            IgoLayerModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoCatalogBrowserModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatBadgeModule,
                    MatButtonModule,
                    MatIconModule,
                    MatListModule,
                    MatTooltipModule,
                    IgoMatBadgeIconModule,
                    IgoLanguageModule,
                    IgoListModule,
                    IgoCollapsibleModule,
                    IgoMetadataModule,
                    IgoLayerModule
                ],
                exports: [
                    CatalogBrowserComponent
                ],
                declarations: [
                    CatalogBrowserComponent,
                    CatalogBrowserGroupComponent,
                    CatalogBrowserLayerComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoCatalogBrowserModule, { declarations: [CatalogBrowserComponent,
        CatalogBrowserGroupComponent,
        CatalogBrowserLayerComponent], imports: [CommonModule,
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTooltipModule,
        IgoMatBadgeIconModule,
        IgoLanguageModule,
        IgoListModule,
        IgoCollapsibleModule,
        IgoMetadataModule,
        IgoLayerModule], exports: [CatalogBrowserComponent] }); })();
i0.ɵɵsetComponentScope(CatalogBrowserComponent, [i1.ListComponent, i2.NgForOf, i2.NgIf, CatalogBrowserGroupComponent,
    CatalogBrowserLayerComponent, i1.ListItemDirective], [i2.AsyncPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1icm93c2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2NhdGFsb2cvY2F0YWxvZy1icm93c2VyL2NhdGFsb2ctYnJvd3Nlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2QsTUFBTSxjQUFjLENBQUM7QUFFdEIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRTFEOztHQUVHO0FBeUJILE1BQU0sT0FBTyx1QkFBdUI7OzhGQUF2Qix1QkFBdUI7eUVBQXZCLHVCQUF1Qjs2RUF2QnpCO1lBQ1AsWUFBWTtZQUNaLGNBQWM7WUFDZCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQixjQUFjO1NBQ2Y7dUZBVVUsdUJBQXVCO2NBeEJuQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7aUJBQ3hCO2dCQUNELFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLDRCQUE0QjtvQkFDNUIsNEJBQTRCO2lCQUM3QjthQUNGOzt3RkFDWSx1QkFBdUIsbUJBTGhDLHVCQUF1QjtRQUN2Qiw0QkFBNEI7UUFDNUIsNEJBQTRCLGFBbkI1QixZQUFZO1FBQ1osY0FBYztRQUNkLGVBQWU7UUFDZixhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGNBQWMsYUFHZCx1QkFBdUI7dUJBR3ZCLHVCQUF1QiwwQ0FDdkIsNEJBQTRCO0lBQzVCLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JhZGdlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7IElnb0xhbmd1YWdlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQge1xuICBJZ29NYXRCYWRnZUljb25Nb2R1bGUsXG4gIElnb0NvbGxhcHNpYmxlTW9kdWxlLFxuICBJZ29MaXN0TW9kdWxlXG59IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IElnb01ldGFkYXRhTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9tZXRhZGF0YS9tZXRhZGF0YS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2F0YWxvZ0Jyb3dzZXJDb21wb25lbnQgfSBmcm9tICcuL2NhdGFsb2ctYnJvd3Nlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2F0YWxvZ0Jyb3dzZXJMYXllckNvbXBvbmVudCB9IGZyb20gJy4vY2F0YWxvZy1icm93c2VyLWxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXRhbG9nQnJvd3Nlckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRhbG9nLWJyb3dzZXItZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IElnb0xheWVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vbGF5ZXIvbGF5ZXIubW9kdWxlJztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIElnb01hdEJhZGdlSWNvbk1vZHVsZSxcbiAgICBJZ29MYW5ndWFnZU1vZHVsZSxcbiAgICBJZ29MaXN0TW9kdWxlLFxuICAgIElnb0NvbGxhcHNpYmxlTW9kdWxlLFxuICAgIElnb01ldGFkYXRhTW9kdWxlLFxuICAgIElnb0xheWVyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYXRhbG9nQnJvd3NlckNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYXRhbG9nQnJvd3NlckNvbXBvbmVudCxcbiAgICBDYXRhbG9nQnJvd3Nlckdyb3VwQ29tcG9uZW50LFxuICAgIENhdGFsb2dCcm93c2VyTGF5ZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29DYXRhbG9nQnJvd3Nlck1vZHVsZSB7fVxuIl19