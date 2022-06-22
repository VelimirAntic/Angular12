import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { IgoConfirmDialogModule } from '@igo2/common';
import { MapBrowserComponent } from './map-browser/map-browser.component';
import { ZoomButtonComponent } from './zoom-button/zoom-button.component';
import { GeolocateButtonComponent } from './geolocate-button/geolocate-button.component';
import { HomeExtentButtonComponent } from './home-extent-button/home-extent-button.component';
import { RotationButtonComponent } from './rotation-button/rotation-button.component';
import { BaseLayersSwitcherComponent } from './baselayers-switcher/baselayers-switcher.component';
import { MiniBaseMapComponent } from './baselayers-switcher/mini-basemap.component';
import { MapOfflineDirective } from './shared/mapOffline.directive';
import { OfflineButtonComponent } from './offline-button/offline-button.component';
import { PointerPositionDirective } from './shared/map-pointer-position.directive';
import { HoverFeatureDirective } from './shared/hover-feature.directive';
import { SwipeControlComponent } from './swipe-control/swipe-control.component';
import { MapCenterComponent } from './map-center/map-center.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/material/icon";
import * as i5 from "@ngx-translate/core";
export class IgoMapModule {
}
IgoMapModule.ɵfac = function IgoMapModule_Factory(t) { return new (t || IgoMapModule)(); };
IgoMapModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoMapModule });
IgoMapModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoLanguageModule,
            IgoConfirmDialogModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoMapModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoLanguageModule,
                    IgoConfirmDialogModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTooltipModule
                ],
                exports: [
                    MapBrowserComponent,
                    ZoomButtonComponent,
                    GeolocateButtonComponent,
                    HomeExtentButtonComponent,
                    RotationButtonComponent,
                    InfoSectionComponent,
                    BaseLayersSwitcherComponent,
                    MiniBaseMapComponent,
                    MapOfflineDirective,
                    OfflineButtonComponent,
                    PointerPositionDirective,
                    HoverFeatureDirective,
                    SwipeControlComponent,
                    MapCenterComponent,
                    MenuButtonComponent
                ],
                declarations: [
                    MapBrowserComponent,
                    ZoomButtonComponent,
                    GeolocateButtonComponent,
                    HomeExtentButtonComponent,
                    RotationButtonComponent,
                    InfoSectionComponent,
                    BaseLayersSwitcherComponent,
                    MiniBaseMapComponent,
                    MapOfflineDirective,
                    OfflineButtonComponent,
                    PointerPositionDirective,
                    HoverFeatureDirective,
                    SwipeControlComponent,
                    MapCenterComponent,
                    MenuButtonComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoMapModule, { declarations: [MapBrowserComponent,
        ZoomButtonComponent,
        GeolocateButtonComponent,
        HomeExtentButtonComponent,
        RotationButtonComponent,
        InfoSectionComponent,
        BaseLayersSwitcherComponent,
        MiniBaseMapComponent,
        MapOfflineDirective,
        OfflineButtonComponent,
        PointerPositionDirective,
        HoverFeatureDirective,
        SwipeControlComponent,
        MapCenterComponent,
        MenuButtonComponent], imports: [CommonModule,
        IgoLanguageModule,
        IgoConfirmDialogModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule], exports: [MapBrowserComponent,
        ZoomButtonComponent,
        GeolocateButtonComponent,
        HomeExtentButtonComponent,
        RotationButtonComponent,
        InfoSectionComponent,
        BaseLayersSwitcherComponent,
        MiniBaseMapComponent,
        MapOfflineDirective,
        OfflineButtonComponent,
        PointerPositionDirective,
        HoverFeatureDirective,
        SwipeControlComponent,
        MapCenterComponent,
        MenuButtonComponent] }); })();
i0.ɵɵsetComponentScope(BaseLayersSwitcherComponent, [i1.NgIf, i1.NgClass, i2.MatButton, i3.MatTooltip, i4.MatIcon, i1.NgForOf, MiniBaseMapComponent], [i5.TranslatePipe]);
i0.ɵɵsetComponentScope(MiniBaseMapComponent, [i1.NgIf, MapBrowserComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9tYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7OztBQThDN0UsTUFBTSxPQUFPLFlBQVk7O3dFQUFaLFlBQVk7OERBQVosWUFBWTtrRUEzQ2Q7WUFDUCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLHNCQUFzQjtZQUN0QixhQUFhO1lBQ2IsZUFBZTtZQUNmLGdCQUFnQjtTQUNqQjt1RkFvQ1UsWUFBWTtjQTVDeEIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsc0JBQXNCO29CQUN0QixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLHdCQUF3QjtvQkFDeEIseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsMkJBQTJCO29CQUMzQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix3QkFBd0I7b0JBQ3hCLHlCQUF5QjtvQkFDekIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLDJCQUEyQjtvQkFDM0Isb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIsd0JBQXdCO29CQUN4QixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixtQkFBbUI7aUJBQ3BCO2FBQ0Y7O3dGQUNZLFlBQVksbUJBakJyQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLG1CQUFtQixhQXZDbkIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLGVBQWU7UUFDZixnQkFBZ0IsYUFHaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixtQkFBbUI7dUJBU25CLDJCQUEyQiw2RUFDM0Isb0JBQW9CO3VCQUFwQixvQkFBb0IsWUFQcEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IElnb0NvbmZpcm1EaWFsb2dNb2R1bGUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgTWFwQnJvd3NlckNvbXBvbmVudCB9IGZyb20gJy4vbWFwLWJyb3dzZXIvbWFwLWJyb3dzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFpvb21CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3pvb20tYnV0dG9uL3pvb20tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9sb2NhdGVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2dlb2xvY2F0ZS1idXR0b24vZ2VvbG9jYXRlLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUV4dGVudEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS1leHRlbnQtYnV0dG9uL2hvbWUtZXh0ZW50LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm90YXRpb25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3JvdGF0aW9uLWJ1dHRvbi9yb3RhdGlvbi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEJhc2VMYXllcnNTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vYmFzZWxheWVycy1zd2l0Y2hlci9iYXNlbGF5ZXJzLXN3aXRjaGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNaW5pQmFzZU1hcENvbXBvbmVudCB9IGZyb20gJy4vYmFzZWxheWVycy1zd2l0Y2hlci9taW5pLWJhc2VtYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcE9mZmxpbmVEaXJlY3RpdmUgfSBmcm9tICcuL3NoYXJlZC9tYXBPZmZsaW5lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPZmZsaW5lQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9vZmZsaW5lLWJ1dHRvbi9vZmZsaW5lLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9pbnRlclBvc2l0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9zaGFyZWQvbWFwLXBvaW50ZXItcG9zaXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEhvdmVyRmVhdHVyZURpcmVjdGl2ZSB9IGZyb20gJy4vc2hhcmVkL2hvdmVyLWZlYXR1cmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN3aXBlQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vc3dpcGUtY29udHJvbC9zd2lwZS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDZW50ZXJDb21wb25lbnQgfSBmcm9tICcuL21hcC1jZW50ZXIvbWFwLWNlbnRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbWVudS1idXR0b24vbWVudS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEluZm9TZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLXNlY3Rpb24vaW5mby1zZWN0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGUsXG4gICAgSWdvQ29uZmlybURpYWxvZ01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYXBCcm93c2VyQ29tcG9uZW50LFxuICAgIFpvb21CdXR0b25Db21wb25lbnQsXG4gICAgR2VvbG9jYXRlQnV0dG9uQ29tcG9uZW50LFxuICAgIEhvbWVFeHRlbnRCdXR0b25Db21wb25lbnQsXG4gICAgUm90YXRpb25CdXR0b25Db21wb25lbnQsXG4gICAgSW5mb1NlY3Rpb25Db21wb25lbnQsXG4gICAgQmFzZUxheWVyc1N3aXRjaGVyQ29tcG9uZW50LFxuICAgIE1pbmlCYXNlTWFwQ29tcG9uZW50LFxuICAgIE1hcE9mZmxpbmVEaXJlY3RpdmUsXG4gICAgT2ZmbGluZUJ1dHRvbkNvbXBvbmVudCxcbiAgICBQb2ludGVyUG9zaXRpb25EaXJlY3RpdmUsXG4gICAgSG92ZXJGZWF0dXJlRGlyZWN0aXZlLFxuICAgIFN3aXBlQ29udHJvbENvbXBvbmVudCxcbiAgICBNYXBDZW50ZXJDb21wb25lbnQsXG4gICAgTWVudUJ1dHRvbkNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXBCcm93c2VyQ29tcG9uZW50LFxuICAgIFpvb21CdXR0b25Db21wb25lbnQsXG4gICAgR2VvbG9jYXRlQnV0dG9uQ29tcG9uZW50LFxuICAgIEhvbWVFeHRlbnRCdXR0b25Db21wb25lbnQsXG4gICAgUm90YXRpb25CdXR0b25Db21wb25lbnQsXG4gICAgSW5mb1NlY3Rpb25Db21wb25lbnQsXG4gICAgQmFzZUxheWVyc1N3aXRjaGVyQ29tcG9uZW50LFxuICAgIE1pbmlCYXNlTWFwQ29tcG9uZW50LFxuICAgIE1hcE9mZmxpbmVEaXJlY3RpdmUsXG4gICAgT2ZmbGluZUJ1dHRvbkNvbXBvbmVudCxcbiAgICBQb2ludGVyUG9zaXRpb25EaXJlY3RpdmUsXG4gICAgSG92ZXJGZWF0dXJlRGlyZWN0aXZlLFxuICAgIFN3aXBlQ29udHJvbENvbXBvbmVudCxcbiAgICBNYXBDZW50ZXJDb21wb25lbnQsXG4gICAgTWVudUJ1dHRvbkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElnb01hcE1vZHVsZSB7fVxuIl19