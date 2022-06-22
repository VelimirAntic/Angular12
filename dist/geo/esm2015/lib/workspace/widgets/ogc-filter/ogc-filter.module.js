import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { IgoLanguageModule } from '@igo2/core';
import { IgoFilterModule } from '../../../filter/filter.module';
import { OgcFilterComponent } from './ogc-filter.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoOgcFilterModule {
}
IgoOgcFilterModule.ɵfac = function IgoOgcFilterModule_Factory(t) { return new (t || IgoOgcFilterModule)(); };
IgoOgcFilterModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoOgcFilterModule });
IgoOgcFilterModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatButtonModule,
            IgoLanguageModule,
            IgoFilterModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoOgcFilterModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    IgoLanguageModule,
                    IgoFilterModule
                ],
                exports: [OgcFilterComponent],
                declarations: [OgcFilterComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoOgcFilterModule, { declarations: [OgcFilterComponent], imports: [CommonModule,
        MatButtonModule,
        IgoLanguageModule,
        IgoFilterModule], exports: [OgcFilterComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi93b3Jrc3BhY2Uvd2lkZ2V0cy9vZ2MtZmlsdGVyL29nYy1maWx0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU1RDs7R0FFRztBQVdILE1BQU0sT0FBTyxrQkFBa0I7O29GQUFsQixrQkFBa0I7b0VBQWxCLGtCQUFrQjt3RUFUcEI7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixlQUFlO1NBQ2hCO3VGQUlVLGtCQUFrQjtjQVY5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3QixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNuQzs7d0ZBQ1ksa0JBQWtCLG1CQUZkLGtCQUFrQixhQU4vQixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixlQUFlLGFBRVAsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5pbXBvcnQgeyBJZ29GaWx0ZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvZmlsdGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL29nYy1maWx0ZXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlLFxuICAgIElnb0ZpbHRlck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbT2djRmlsdGVyQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbT2djRmlsdGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJZ29PZ2NGaWx0ZXJNb2R1bGUge31cbiJdfQ==