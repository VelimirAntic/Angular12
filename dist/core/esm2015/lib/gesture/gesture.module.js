import { NgModule } from '@angular/core';
import { HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { IgoGestureConfig } from './gesture.provider';
import * as i0 from "@angular/core";
export class IgoGestureModule {
    static forRoot() {
        return {
            ngModule: IgoGestureModule,
            providers: [
                {
                    provide: HAMMER_GESTURE_CONFIG,
                    useClass: IgoGestureConfig
                }
            ]
        };
    }
}
IgoGestureModule.ɵfac = function IgoGestureModule_Factory(t) { return new (t || IgoGestureModule)(); };
IgoGestureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoGestureModule });
IgoGestureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[HammerModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoGestureModule, [{
        type: NgModule,
        args: [{
                imports: [HammerModule],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoGestureModule, { imports: [HammerModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZ2VzdHVyZS9nZXN0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBT3RELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnRkFYVSxnQkFBZ0I7a0VBQWhCLGdCQUFnQjtzRUFKbEIsQ0FBQyxZQUFZLENBQUM7dUZBSVosZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNaOzt3RkFDWSxnQkFBZ0IsY0FKakIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIYW1tZXJNb2R1bGUsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBJZ29HZXN0dXJlQ29uZmlnIH0gZnJvbSAnLi9nZXN0dXJlLnByb3ZpZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0hhbW1lck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIElnb0dlc3R1cmVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb0dlc3R1cmVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0dlc3R1cmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcbiAgICAgICAgICB1c2VDbGFzczogSWdvR2VzdHVyZUNvbmZpZ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19