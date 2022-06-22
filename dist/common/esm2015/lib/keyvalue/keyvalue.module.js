import { NgModule } from '@angular/core';
import { KeyValuePipe } from './keyvalue.pipe';
import * as i0 from "@angular/core";
export class IgoKeyValueModule {
    static forRoot() {
        return {
            ngModule: IgoKeyValueModule,
            providers: []
        };
    }
}
IgoKeyValueModule.ɵfac = function IgoKeyValueModule_Factory(t) { return new (t || IgoKeyValueModule)(); };
IgoKeyValueModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoKeyValueModule });
IgoKeyValueModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoKeyValueModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [KeyValuePipe],
                exports: [KeyValuePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoKeyValueModule, { declarations: [KeyValuePipe], exports: [KeyValuePipe] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5dmFsdWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIva2V5dmFsdWUva2V5dmFsdWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFPL0MsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7O2tGQU5VLGlCQUFpQjttRUFBakIsaUJBQWlCO3VFQUpuQixFQUFFO3VGQUlBLGlCQUFpQjtjQUw3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEI7O3dGQUNZLGlCQUFpQixtQkFIYixZQUFZLGFBQ2pCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgS2V5VmFsdWVQaXBlIH0gZnJvbSAnLi9rZXl2YWx1ZS5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW0tleVZhbHVlUGlwZV0sXG4gIGV4cG9ydHM6IFtLZXlWYWx1ZVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIElnb0tleVZhbHVlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29LZXlWYWx1ZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSWdvS2V5VmFsdWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuIl19