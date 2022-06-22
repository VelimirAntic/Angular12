import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { IgoLanguageModule } from '@igo2/core';
import { InteractiveTourService } from './interactive-tour.service';
import { InteractiveTourComponent } from './interactive-tour.component';
import { InteractiveTourLoader } from './interactive-tour.loader';
import * as i0 from "@angular/core";
export class IgoInteractiveTourModule {
}
IgoInteractiveTourModule.ɵfac = function IgoInteractiveTourModule_Factory(t) { return new (t || IgoInteractiveTourModule)(); };
IgoInteractiveTourModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoInteractiveTourModule });
IgoInteractiveTourModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [InteractiveTourService, InteractiveTourLoader], imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoInteractiveTourModule, [{
        type: NgModule,
        args: [{
                declarations: [InteractiveTourComponent],
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTooltipModule,
                    IgoLanguageModule
                ],
                providers: [InteractiveTourService, InteractiveTourLoader],
                exports: [InteractiveTourComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoInteractiveTourModule, { declarations: [InteractiveTourComponent], imports: [CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        IgoLanguageModule], exports: [InteractiveTourComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3RpdmUtdG91ci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9pbnRlcmFjdGl2ZS10b3VyL2ludGVyYWN0aXZlLXRvdXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQWNsRSxNQUFNLE9BQU8sd0JBQXdCOztnR0FBeEIsd0JBQXdCOzBFQUF4Qix3QkFBd0I7K0VBSHhCLENBQUMsc0JBQXNCLEVBQUUscUJBQXFCLENBQUMsWUFQakQ7WUFDUCxZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsaUJBQWlCO1NBQ2xCO3VGQUlVLHdCQUF3QjtjQVpwQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsc0JBQXNCLEVBQUUscUJBQXFCLENBQUM7Z0JBQzFELE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3BDOzt3RkFDWSx3QkFBd0IsbUJBWHBCLHdCQUF3QixhQUVyQyxZQUFZO1FBQ1osYUFBYTtRQUNiLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCLGFBR1Qsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgSW50ZXJhY3RpdmVUb3VyU2VydmljZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUtdG91ci5zZXJ2aWNlJztcbmltcG9ydCB7IEludGVyYWN0aXZlVG91ckNvbXBvbmVudCB9IGZyb20gJy4vaW50ZXJhY3RpdmUtdG91ci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW50ZXJhY3RpdmVUb3VyTG9hZGVyIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS10b3VyLmxvYWRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ludGVyYWN0aXZlVG91ckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBJZ29MYW5ndWFnZU1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtJbnRlcmFjdGl2ZVRvdXJTZXJ2aWNlLCBJbnRlcmFjdGl2ZVRvdXJMb2FkZXJdLFxuICBleHBvcnRzOiBbSW50ZXJhY3RpdmVUb3VyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJZ29JbnRlcmFjdGl2ZVRvdXJNb2R1bGUge31cbiJdfQ==