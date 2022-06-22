import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IgoActivityModule } from './activity/activity.module';
import { IgoConfigModule } from './config/config.module';
import { IgoLanguageModule } from './language/language.module';
import { IgoMessageModule } from './message/message.module';
import { IgoErrorModule } from './request/error.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
import * as i3 from "./activity/activity.module";
import * as i4 from "./config/config.module";
import * as i5 from "./request/error.module";
import * as i6 from "./language/language.module";
import * as i7 from "./message/message.module";
export class IgoCoreModule {
    constructor(matIconRegistry, domSanitizer) {
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/igo2/core/icons/mdi.svg'));
    }
    static forRoot() {
        return {
            ngModule: IgoCoreModule,
            providers: []
        };
    }
}
IgoCoreModule.ɵfac = function IgoCoreModule_Factory(t) { return new (t || IgoCoreModule)(i0.ɵɵinject(i1.MatIconRegistry), i0.ɵɵinject(i2.DomSanitizer)); };
IgoCoreModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoCoreModule });
IgoCoreModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            HttpClientModule,
            IgoActivityModule.forRoot(),
            IgoConfigModule.forRoot(),
            IgoErrorModule.forRoot(),
            IgoLanguageModule.forRoot(),
            IgoMessageModule.forRoot()
        ], IgoActivityModule,
        IgoConfigModule,
        IgoErrorModule,
        IgoLanguageModule,
        IgoMessageModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoCoreModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    IgoActivityModule.forRoot(),
                    IgoConfigModule.forRoot(),
                    IgoErrorModule.forRoot(),
                    IgoLanguageModule.forRoot(),
                    IgoMessageModule.forRoot()
                ],
                declarations: [],
                exports: [
                    IgoActivityModule,
                    IgoConfigModule,
                    IgoErrorModule,
                    IgoLanguageModule,
                    IgoMessageModule
                ]
            }]
    }], function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoCoreModule, { imports: [CommonModule,
        HttpClientModule, i3.IgoActivityModule, i4.IgoConfigModule, i5.IgoErrorModule, i6.IgoLanguageModule, i7.IgoMessageModule], exports: [IgoActivityModule,
        IgoConfigModule,
        IgoErrorModule,
        IgoLanguageModule,
        IgoMessageModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7OztBQXFCeEQsTUFBTSxPQUFPLGFBQWE7SUFReEIsWUFBWSxlQUFnQyxFQUFFLFlBQTBCO1FBQ3RFLGVBQWUsQ0FBQyxhQUFhLENBQzNCLFlBQVksQ0FBQyw4QkFBOEIsQ0FDekMsa0NBQWtDLENBQ25DLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFiRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOzswRUFOVSxhQUFhOytEQUFiLGFBQWE7bUVBbEJmO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsZUFBZSxDQUFDLE9BQU8sRUFBRTtZQUN6QixjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtZQUMzQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7U0FDM0IsRUFHQyxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZ0JBQWdCO3VGQUdQLGFBQWE7Y0FuQnpCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtvQkFDM0IsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsY0FBYyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsaUJBQWlCLENBQUMsT0FBTyxFQUFFO29CQUMzQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7aUJBQzNCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixnQkFBZ0I7aUJBQ2pCO2FBQ0Y7O3dGQUNZLGFBQWEsY0FqQnRCLFlBQVk7UUFDWixnQkFBZ0IscUhBU2hCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1hdEljb25SZWdpc3RyeSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBJZ29BY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4vYWN0aXZpdHkvYWN0aXZpdHkubW9kdWxlJztcbmltcG9ydCB7IElnb0NvbmZpZ01vZHVsZSB9IGZyb20gJy4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICcuL2xhbmd1YWdlL2xhbmd1YWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29NZXNzYWdlTW9kdWxlIH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2UubW9kdWxlJztcbmltcG9ydCB7IElnb0Vycm9yTW9kdWxlIH0gZnJvbSAnLi9yZXF1ZXN0L2Vycm9yLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBJZ29BY3Rpdml0eU1vZHVsZS5mb3JSb290KCksXG4gICAgSWdvQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJZ29FcnJvck1vZHVsZS5mb3JSb290KCksXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIElnb01lc3NhZ2VNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtcbiAgICBJZ29BY3Rpdml0eU1vZHVsZSxcbiAgICBJZ29Db25maWdNb2R1bGUsXG4gICAgSWdvRXJyb3JNb2R1bGUsXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGUsXG4gICAgSWdvTWVzc2FnZU1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElnb0NvcmVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb0NvcmVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0NvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG1hdEljb25SZWdpc3RyeTogTWF0SWNvblJlZ2lzdHJ5LCBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIG1hdEljb25SZWdpc3RyeS5hZGRTdmdJY29uU2V0KFxuICAgICAgZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChcbiAgICAgICAgJy4vYXNzZXRzL2lnbzIvY29yZS9pY29ucy9tZGkuc3ZnJ1xuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==