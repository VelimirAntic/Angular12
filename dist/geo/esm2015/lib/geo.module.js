import { NgModule } from '@angular/core';
import { IgoCatalogModule } from './catalog/catalog.module';
import { IgoDataSourceModule } from './datasource/datasource.module';
import { IgoDownloadModule } from './download/download.module';
import { IgoDrawingToolModule } from './draw/drawingTool.module';
import { IgoFeatureModule } from './feature/feature.module';
import { IgoFilterModule } from './filter/filter.module';
import { IgoGeometryModule } from './geometry/geometry.module';
import { IgoImportExportModule } from './import-export/import-export.module';
import { IgoLayerModule } from './layer/layer.module';
import { IgoMapModule } from './map/map.module';
import { IgoMeasureModule } from './measure/measure.module';
import { IgoMetadataModule } from './metadata/metadata.module';
import { IgoOverlayModule } from './overlay/overlay.module';
import { IgoPrintModule } from './print/print.module';
import { IgoQueryModule } from './query/query.module';
import { IgoDirectionsModule } from './directions/directions.module';
import { IgoSearchModule } from './search/search.module';
import { IgoToastModule } from './toast/toast.module';
import { IgoGeoWorkspaceModule } from './workspace/workspace.module';
import { IgoWktModule } from './wkt/wkt.module';
import * as i0 from "@angular/core";
export class IgoGeoModule {
    static forRoot() {
        return {
            ngModule: IgoGeoModule,
            providers: []
        };
    }
}
IgoGeoModule.ɵfac = function IgoGeoModule_Factory(t) { return new (t || IgoGeoModule)(); };
IgoGeoModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoGeoModule });
IgoGeoModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[], IgoCatalogModule,
        IgoDataSourceModule,
        IgoDownloadModule,
        IgoDrawingToolModule,
        IgoFeatureModule,
        IgoFilterModule,
        IgoGeometryModule,
        IgoImportExportModule,
        IgoLayerModule,
        IgoMapModule,
        IgoMeasureModule,
        IgoMetadataModule,
        IgoOverlayModule,
        IgoPrintModule,
        IgoQueryModule,
        IgoDirectionsModule,
        IgoSearchModule,
        IgoToastModule,
        IgoGeoWorkspaceModule,
        IgoWktModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoGeoModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: [
                    IgoCatalogModule,
                    IgoDataSourceModule,
                    IgoDownloadModule,
                    IgoDrawingToolModule,
                    IgoFeatureModule,
                    IgoFilterModule,
                    IgoGeometryModule,
                    IgoImportExportModule,
                    IgoLayerModule,
                    IgoMapModule,
                    IgoMeasureModule,
                    IgoMetadataModule,
                    IgoOverlayModule,
                    IgoPrintModule,
                    IgoQueryModule,
                    IgoDirectionsModule,
                    IgoSearchModule,
                    IgoToastModule,
                    IgoGeoWorkspaceModule,
                    IgoWktModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoGeoModule, { exports: [IgoCatalogModule,
        IgoDataSourceModule,
        IgoDownloadModule,
        IgoDrawingToolModule,
        IgoFeatureModule,
        IgoFilterModule,
        IgoGeometryModule,
        IgoImportExportModule,
        IgoLayerModule,
        IgoMapModule,
        IgoMeasureModule,
        IgoMetadataModule,
        IgoOverlayModule,
        IgoPrintModule,
        IgoQueryModule,
        IgoDirectionsModule,
        IgoSearchModule,
        IgoToastModule,
        IgoGeoWorkspaceModule,
        IgoWktModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2dlby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUE0QmhELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7O3dFQU5VLFlBQVk7OERBQVosWUFBWTtrRUF6QmQsRUFBRSxFQUdULGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsY0FBYztRQUNkLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixZQUFZO3VGQUdILFlBQVk7Y0ExQnhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsRUFBRTtnQkFDWCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixjQUFjO29CQUNkLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsWUFBWTtpQkFDYjthQUNGOzt3RkFDWSxZQUFZLGNBdEJyQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElnb0NhdGFsb2dNb2R1bGUgfSBmcm9tICcuL2NhdGFsb2cvY2F0YWxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvRGF0YVNvdXJjZU1vZHVsZSB9IGZyb20gJy4vZGF0YXNvdXJjZS9kYXRhc291cmNlLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29Eb3dubG9hZE1vZHVsZSB9IGZyb20gJy4vZG93bmxvYWQvZG93bmxvYWQubW9kdWxlJztcbmltcG9ydCB7IElnb0RyYXdpbmdUb29sTW9kdWxlIH0gZnJvbSAnLi9kcmF3L2RyYXdpbmdUb29sLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi9mZWF0dXJlL2ZlYXR1cmUubW9kdWxlJztcbmltcG9ydCB7IElnb0ZpbHRlck1vZHVsZSB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvR2VvbWV0cnlNb2R1bGUgfSBmcm9tICcuL2dlb21ldHJ5L2dlb21ldHJ5Lm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29JbXBvcnRFeHBvcnRNb2R1bGUgfSBmcm9tICcuL2ltcG9ydC1leHBvcnQvaW1wb3J0LWV4cG9ydC5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvTGF5ZXJNb2R1bGUgfSBmcm9tICcuL2xheWVyL2xheWVyLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29NYXBNb2R1bGUgfSBmcm9tICcuL21hcC9tYXAubW9kdWxlJztcbmltcG9ydCB7IElnb01lYXN1cmVNb2R1bGUgfSBmcm9tICcuL21lYXN1cmUvbWVhc3VyZS5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvTWV0YWRhdGFNb2R1bGUgfSBmcm9tICcuL21ldGFkYXRhL21ldGFkYXRhLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29PdmVybGF5TW9kdWxlIH0gZnJvbSAnLi9vdmVybGF5L292ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IElnb1ByaW50TW9kdWxlIH0gZnJvbSAnLi9wcmludC9wcmludC5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvUXVlcnlNb2R1bGUgfSBmcm9tICcuL3F1ZXJ5L3F1ZXJ5Lm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29EaXJlY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9kaXJlY3Rpb25zL2RpcmVjdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IElnb1NlYXJjaE1vZHVsZSB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvVG9hc3RNb2R1bGUgfSBmcm9tICcuL3RvYXN0L3RvYXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29HZW9Xb3Jrc3BhY2VNb2R1bGUgfSBmcm9tICcuL3dvcmtzcGFjZS93b3Jrc3BhY2UubW9kdWxlJztcbmltcG9ydCB7IElnb1drdE1vZHVsZSB9IGZyb20gJy4vd2t0L3drdC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW1xuICAgIElnb0NhdGFsb2dNb2R1bGUsXG4gICAgSWdvRGF0YVNvdXJjZU1vZHVsZSxcbiAgICBJZ29Eb3dubG9hZE1vZHVsZSxcbiAgICBJZ29EcmF3aW5nVG9vbE1vZHVsZSxcbiAgICBJZ29GZWF0dXJlTW9kdWxlLFxuICAgIElnb0ZpbHRlck1vZHVsZSxcbiAgICBJZ29HZW9tZXRyeU1vZHVsZSxcbiAgICBJZ29JbXBvcnRFeHBvcnRNb2R1bGUsXG4gICAgSWdvTGF5ZXJNb2R1bGUsXG4gICAgSWdvTWFwTW9kdWxlLFxuICAgIElnb01lYXN1cmVNb2R1bGUsXG4gICAgSWdvTWV0YWRhdGFNb2R1bGUsXG4gICAgSWdvT3ZlcmxheU1vZHVsZSxcbiAgICBJZ29QcmludE1vZHVsZSxcbiAgICBJZ29RdWVyeU1vZHVsZSxcbiAgICBJZ29EaXJlY3Rpb25zTW9kdWxlLFxuICAgIElnb1NlYXJjaE1vZHVsZSxcbiAgICBJZ29Ub2FzdE1vZHVsZSxcbiAgICBJZ29HZW9Xb3Jrc3BhY2VNb2R1bGUsXG4gICAgSWdvV2t0TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSWdvR2VvTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29HZW9Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0dlb01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXX0=