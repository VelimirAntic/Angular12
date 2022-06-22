import { NgModule } from '@angular/core';
import { provideStyleListOptions, provideStyleListLoader } from './style-list.provider';
import * as i0 from "@angular/core";
export class IgoStyleListModule {
    static forRoot() {
        return {
            ngModule: IgoStyleListModule,
            providers: [provideStyleListOptions({}), provideStyleListLoader()]
        };
    }
}
IgoStyleListModule.ɵfac = function IgoStyleListModule_Factory(t) { return new (t || IgoStyleListModule)(); };
IgoStyleListModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoStyleListModule });
IgoStyleListModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoStyleListModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9pbXBvcnQtZXhwb3J0L3N0eWxlLWxpc3Qvc3R5bGUtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBT3hGLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxzQkFBc0IsRUFBRSxDQUFDO1NBQ25FLENBQUM7SUFDSixDQUFDOztvRkFOVSxrQkFBa0I7b0VBQWxCLGtCQUFrQjt3RUFKcEIsRUFBRTt1RkFJQSxrQkFBa0I7Y0FMOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVTdHlsZUxpc3RPcHRpb25zLCBwcm92aWRlU3R5bGVMaXN0TG9hZGVyIH0gZnJvbSAnLi9zdHlsZS1saXN0LnByb3ZpZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIElnb1N0eWxlTGlzdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SWdvU3R5bGVMaXN0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29TdHlsZUxpc3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlU3R5bGVMaXN0T3B0aW9ucyh7fSksIHByb3ZpZGVTdHlsZUxpc3RMb2FkZXIoKV1cbiAgICB9O1xuICB9XG59XG4iXX0=