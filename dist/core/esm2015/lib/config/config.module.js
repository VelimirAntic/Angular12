import { NgModule } from '@angular/core';
import { provideConfigOptions, provideConfigLoader } from './config.provider';
import * as i0 from "@angular/core";
export class IgoConfigModule {
    static forRoot() {
        return {
            ngModule: IgoConfigModule,
            providers: [provideConfigOptions({}), provideConfigLoader()]
        };
    }
}
IgoConfigModule.ɵfac = function IgoConfigModule_Factory(t) { return new (t || IgoConfigModule)(); };
IgoConfigModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoConfigModule });
IgoConfigModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoConfigModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFPOUUsTUFBTSxPQUFPLGVBQWU7SUFDMUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztTQUM3RCxDQUFDO0lBQ0osQ0FBQzs7OEVBTlUsZUFBZTtpRUFBZixlQUFlO3FFQUpqQixFQUFFO3VGQUlBLGVBQWU7Y0FMM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdPcHRpb25zLCBwcm92aWRlQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi9jb25maWcucHJvdmlkZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgSWdvQ29uZmlnTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29Db25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0NvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWdPcHRpb25zKHt9KSwgcHJvdmlkZUNvbmZpZ0xvYWRlcigpXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==