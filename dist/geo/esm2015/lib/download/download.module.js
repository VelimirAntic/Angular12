import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { DownloadButtonComponent } from './download-button/download-button.component';
import * as i0 from "@angular/core";
export class IgoDownloadModule {
    static forRoot() {
        return {
            ngModule: IgoDownloadModule
        };
    }
}
IgoDownloadModule.ɵfac = function IgoDownloadModule_Factory(t) { return new (t || IgoDownloadModule)(); };
IgoDownloadModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoDownloadModule });
IgoDownloadModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoDownloadModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTooltipModule,
                    IgoLanguageModule
                ],
                exports: [DownloadButtonComponent],
                declarations: [DownloadButtonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoDownloadModule, { declarations: [DownloadButtonComponent], imports: [CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        IgoLanguageModule], exports: [DownloadButtonComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZG93bmxvYWQvZG93bmxvYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFhdEYsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1NBQzVCLENBQUM7SUFDSixDQUFDOztrRkFMVSxpQkFBaUI7bUVBQWpCLGlCQUFpQjt1RUFWbkI7WUFDUCxZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsaUJBQWlCO1NBQ2xCO3VGQUlVLGlCQUFpQjtjQVg3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDbEMsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDeEM7O3dGQUNZLGlCQUFpQixtQkFGYix1QkFBdUIsYUFQcEMsWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQixhQUVULHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5pbXBvcnQgeyBEb3dubG9hZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZG93bmxvYWQtYnV0dG9uL2Rvd25sb2FkLWJ1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0Rvd25sb2FkQnV0dG9uQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbRG93bmxvYWRCdXR0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIElnb0Rvd25sb2FkTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29Eb3dubG9hZE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSWdvRG93bmxvYWRNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=