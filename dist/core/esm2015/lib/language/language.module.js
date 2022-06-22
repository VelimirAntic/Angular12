import { NgModule } from '@angular/core';
import { TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import { provideDefaultLanguageLoader } from './shared/language.provider';
import { IgoMissingTranslationHandler } from './shared/missing-translation.guard';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class IgoLanguageModule {
    static forRoot() {
        return {
            ngModule: IgoLanguageModule,
            providers: [provideDefaultLanguageLoader()]
        };
    }
}
IgoLanguageModule.ɵfac = function IgoLanguageModule_Factory(t) { return new (t || IgoLanguageModule)(); };
IgoLanguageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoLanguageModule });
IgoLanguageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            TranslateModule.forRoot({
                missingTranslationHandler: {
                    provide: MissingTranslationHandler,
                    useClass: IgoMissingTranslationHandler
                }
            })
        ], TranslateModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoLanguageModule, [{
        type: NgModule,
        args: [{
                imports: [
                    TranslateModule.forRoot({
                        missingTranslationHandler: {
                            provide: MissingTranslationHandler,
                            useClass: IgoMissingTranslationHandler
                        }
                    })
                ],
                declarations: [],
                exports: [TranslateModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoLanguageModule, { imports: [i1.TranslateModule], exports: [TranslateModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2xhbmd1YWdlL2xhbmd1YWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsZUFBZSxFQUNmLHlCQUF5QixFQUMxQixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7QUFjbEYsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUM7O2tGQU5VLGlCQUFpQjttRUFBakIsaUJBQWlCO3VFQVhuQjtZQUNQLGVBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RCLHlCQUF5QixFQUFFO29CQUN6QixPQUFPLEVBQUUseUJBQXlCO29CQUNsQyxRQUFRLEVBQUUsNEJBQTRCO2lCQUN2QzthQUNGLENBQUM7U0FDSCxFQUVTLGVBQWU7dUZBRWQsaUJBQWlCO2NBWjdCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZSxDQUFDLE9BQU8sQ0FBQzt3QkFDdEIseUJBQXlCLEVBQUU7NEJBQ3pCLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFFBQVEsRUFBRSw0QkFBNEI7eUJBQ3ZDO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUMzQjs7d0ZBQ1ksaUJBQWlCLDZDQUZsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFRyYW5zbGF0ZU1vZHVsZSxcbiAgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclxufSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRMYW5ndWFnZUxvYWRlciB9IGZyb20gJy4vc2hhcmVkL2xhbmd1YWdlLnByb3ZpZGVyJztcbmltcG9ydCB7IElnb01pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfSBmcm9tICcuL3NoYXJlZC9taXNzaW5nLXRyYW5zbGF0aW9uLmd1YXJkJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI6IHtcbiAgICAgICAgcHJvdmlkZTogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcixcbiAgICAgICAgdXNlQ2xhc3M6IElnb01pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJcbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbVHJhbnNsYXRlTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29MYW5ndWFnZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SWdvTGFuZ3VhZ2VNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0xhbmd1YWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZURlZmF1bHRMYW5ndWFnZUxvYWRlcigpXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==