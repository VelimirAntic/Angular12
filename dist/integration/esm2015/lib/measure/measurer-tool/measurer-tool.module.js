import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgoMeasurerModule } from '@igo2/geo';
import { MeasurerToolComponent } from './measurer-tool.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoAppMeasurerToolModule {
}
IgoAppMeasurerToolModule.ɵfac = function IgoAppMeasurerToolModule_Factory(t) { return new (t || IgoAppMeasurerToolModule)(); };
IgoAppMeasurerToolModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppMeasurerToolModule });
IgoAppMeasurerToolModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            IgoMeasurerModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppMeasurerToolModule, [{
        type: NgModule,
        args: [{
                imports: [
                    IgoMeasurerModule
                ],
                declarations: [MeasurerToolComponent],
                exports: [MeasurerToolComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppMeasurerToolModule, { declarations: [MeasurerToolComponent], imports: [IgoMeasurerModule], exports: [MeasurerToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZXItdG9vbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL21lYXN1cmUvbWVhc3VyZXItdG9vbC9tZWFzdXJlci10b29sLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU5QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFbEU7O0dBRUc7QUFTSCxNQUFNLE9BQU8sd0JBQXdCOztnR0FBeEIsd0JBQXdCOzBFQUF4Qix3QkFBd0I7OEVBUDFCO1lBQ1AsaUJBQWlCO1NBQ2xCO3VGQUtVLHdCQUF3QjtjQVJwQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7d0ZBQ1ksd0JBQXdCLG1CQUpwQixxQkFBcUIsYUFGbEMsaUJBQWlCLGFBR1QscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSWdvTWVhc3VyZXJNb2R1bGUgfSBmcm9tICdAaWdvMi9nZW8nO1xuXG5pbXBvcnQgeyBNZWFzdXJlclRvb2xDb21wb25lbnQgfSBmcm9tICcuL21lYXN1cmVyLXRvb2wuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJZ29NZWFzdXJlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNZWFzdXJlclRvb2xDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTWVhc3VyZXJUb29sQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIElnb0FwcE1lYXN1cmVyVG9vbE1vZHVsZSB7fVxuIl19