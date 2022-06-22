import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { IgoLayerModule, IgoMetadataModule, IgoDownloadModule, IgoFilterModule, IgoImportExportModule } from '@igo2/geo';
import { IgoContextModule } from '@igo2/context';
import { MapDetailsToolComponent } from './map-details-tool/map-details-tool.component';
import { MapToolComponent } from './map-tool/map-tool.component';
import { MapToolsComponent } from './map-tools/map-tools.component';
import { MapLegendToolComponent } from './map-legend/map-legend-tool.component';
import { IgoAppWorkspaceModule } from '../workspace/workspace.module';
import { AdvancedMapToolComponent } from './advanced-map-tool/advanced-map-tool.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IgoSpinnerModule } from '@igo2/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvancedSwipeComponent } from './advanced-map-tool/advanced-swipe/advanced-swipe.component';
import { AdvancedCoordinatesComponent } from './advanced-map-tool/advanced-coordinates/advanced-coordinates.component';
import * as i0 from "@angular/core";
export class IgoAppMapModule {
    static forRoot() {
        return {
            ngModule: IgoAppMapModule,
            providers: []
        };
    }
}
IgoAppMapModule.ɵfac = function IgoAppMapModule_Factory(t) { return new (t || IgoAppMapModule)(); };
IgoAppMapModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppMapModule });
IgoAppMapModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            FormsModule,
            ReactiveFormsModule,
            MatButtonToggleModule,
            MatDividerModule,
            MatSelectModule,
            MatOptionModule,
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            IgoSpinnerModule,
            CommonModule,
            MatTabsModule,
            MatListModule,
            MatIconModule,
            IgoLanguageModule,
            IgoLayerModule,
            IgoMetadataModule,
            IgoDownloadModule,
            IgoImportExportModule,
            IgoFilterModule,
            IgoContextModule,
            IgoAppWorkspaceModule,
            MatSlideToggleModule,
            MatMenuModule,
            MatButtonModule,
            MatTooltipModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppMapModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    MatButtonToggleModule,
                    MatDividerModule,
                    MatSelectModule,
                    MatOptionModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatCheckboxModule,
                    IgoSpinnerModule,
                    CommonModule,
                    MatTabsModule,
                    MatListModule,
                    MatIconModule,
                    IgoLanguageModule,
                    IgoLayerModule,
                    IgoMetadataModule,
                    IgoDownloadModule,
                    IgoImportExportModule,
                    IgoFilterModule,
                    IgoContextModule,
                    IgoAppWorkspaceModule,
                    MatSlideToggleModule,
                    MatMenuModule,
                    MatButtonModule,
                    MatTooltipModule
                ],
                declarations: [AdvancedMapToolComponent, MapToolComponent,
                    MapToolsComponent, MapDetailsToolComponent, MapLegendToolComponent, AdvancedSwipeComponent, AdvancedCoordinatesComponent],
                exports: [AdvancedMapToolComponent, MapToolComponent, MapToolsComponent, MapDetailsToolComponent, MapLegendToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppMapModule, { declarations: [AdvancedMapToolComponent, MapToolComponent,
        MapToolsComponent, MapDetailsToolComponent, MapLegendToolComponent, AdvancedSwipeComponent, AdvancedCoordinatesComponent], imports: [FormsModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        IgoSpinnerModule,
        CommonModule,
        MatTabsModule,
        MatListModule,
        MatIconModule,
        IgoLanguageModule,
        IgoLayerModule,
        IgoMetadataModule,
        IgoDownloadModule,
        IgoImportExportModule,
        IgoFilterModule,
        IgoContextModule,
        IgoAppWorkspaceModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatButtonModule,
        MatTooltipModule], exports: [AdvancedMapToolComponent, MapToolComponent, MapToolsComponent, MapDetailsToolComponent, MapLegendToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvbWFwL21hcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFFBQVEsRUFFUixzQkFBc0IsRUFDdkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQy9DLE9BQU8sRUFDTCxjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YscUJBQXFCLEVBQ3RCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FB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Z0I7UUFDaEIsZUFBZTtRQUNmLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGFBQWE7UUFDYixhQUFhO1FBQ2IsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCLGFBSVIsd0JBQXdCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IElnb0xhbmd1YWdlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQge1xuICBJZ29MYXllck1vZHVsZSxcbiAgSWdvTWV0YWRhdGFNb2R1bGUsXG4gIElnb0Rvd25sb2FkTW9kdWxlLFxuICBJZ29GaWx0ZXJNb2R1bGUsXG4gIElnb0ltcG9ydEV4cG9ydE1vZHVsZVxufSBmcm9tICdAaWdvMi9nZW8nO1xuaW1wb3J0IHsgSWdvQ29udGV4dE1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvbnRleHQnO1xuaW1wb3J0IHsgTWFwRGV0YWlsc1Rvb2xDb21wb25lbnQgfSBmcm9tICcuL21hcC1kZXRhaWxzLXRvb2wvbWFwLWRldGFpbHMtdG9vbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwVG9vbENvbXBvbmVudCB9IGZyb20gJy4vbWFwLXRvb2wvbWFwLXRvb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcFRvb2xzQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAtdG9vbHMvbWFwLXRvb2xzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBMZWdlbmRUb29sQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAtbGVnZW5kL21hcC1sZWdlbmQtdG9vbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWdvQXBwV29ya3NwYWNlTW9kdWxlIH0gZnJvbSAnLi4vd29ya3NwYWNlL3dvcmtzcGFjZS5tb2R1bGUnO1xuaW1wb3J0IHsgQWR2YW5jZWRNYXBUb29sQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC1tYXAtdG9vbC9hZHZhbmNlZC1tYXAtdG9vbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Ub2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7IE1hdE9wdGlvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBJZ29TcGlubmVyTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWR2YW5jZWRTd2lwZUNvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQtbWFwLXRvb2wvYWR2YW5jZWQtc3dpcGUvYWR2YW5jZWQtc3dpcGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFkdmFuY2VkQ29vcmRpbmF0ZXNDb21wb25lbnQgfSBmcm9tICcuL2FkdmFuY2VkLW1hcC10b29sL2FkdmFuY2VkLWNvb3JkaW5hdGVzL2FkdmFuY2VkLWNvb3JkaW5hdGVzLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0T3B0aW9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBJZ29TcGlubmVyTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBJZ29MYW5ndWFnZU1vZHVsZSxcbiAgICBJZ29MYXllck1vZHVsZSxcbiAgICBJZ29NZXRhZGF0YU1vZHVsZSxcbiAgICBJZ29Eb3dubG9hZE1vZHVsZSxcbiAgICBJZ29JbXBvcnRFeHBvcnRNb2R1bGUsXG4gICAgSWdvRmlsdGVyTW9kdWxlLFxuICAgIElnb0NvbnRleHRNb2R1bGUsXG4gICAgSWdvQXBwV29ya3NwYWNlTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbIEFkdmFuY2VkTWFwVG9vbENvbXBvbmVudCwgTWFwVG9vbENvbXBvbmVudCxcbiAgICBNYXBUb29sc0NvbXBvbmVudCwgTWFwRGV0YWlsc1Rvb2xDb21wb25lbnQsIE1hcExlZ2VuZFRvb2xDb21wb25lbnQsIEFkdmFuY2VkU3dpcGVDb21wb25lbnQsIEFkdmFuY2VkQ29vcmRpbmF0ZXNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWR2YW5jZWRNYXBUb29sQ29tcG9uZW50LCBNYXBUb29sQ29tcG9uZW50LCBNYXBUb29sc0NvbXBvbmVudCwgTWFwRGV0YWlsc1Rvb2xDb21wb25lbnQsIE1hcExlZ2VuZFRvb2xDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgSWdvQXBwTWFwTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29BcHBNYXBNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0FwcE1hcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXX0=