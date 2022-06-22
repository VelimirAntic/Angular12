import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgoLanguageModule } from '@igo2/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeButtonComponent } from './home-button.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoHomeButtonModule {
}
IgoHomeButtonModule.ɵfac = function IgoHomeButtonModule_Factory(t) { return new (t || IgoHomeButtonModule)(); };
IgoHomeButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoHomeButtonModule });
IgoHomeButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoHomeButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTooltipModule,
                    IgoLanguageModule
                ],
                exports: [HomeButtonComponent],
                declarations: [HomeButtonComponent],
                providers: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoHomeButtonModule, { declarations: [HomeButtonComponent], imports: [CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        IgoLanguageModule], exports: [HomeButtonComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvaG9tZS1idXR0b24vaG9tZS1idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUU5RDs7R0FFRztBQWFILE1BQU0sT0FBTyxtQkFBbUI7O3NGQUFuQixtQkFBbUI7cUVBQW5CLG1CQUFtQjswRUFGbkIsRUFBRSxZQVRKO1lBQ1AsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtTQUNsQjt1RkFLVSxtQkFBbUI7Y0FaL0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxTQUFTLEVBQUUsRUFBRTthQUNkOzt3RkFDWSxtQkFBbUIsbUJBSGYsbUJBQW1CLGFBUGhDLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUIsYUFFVCxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElnb0xhbmd1YWdlTW9kdWxlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7IEhvbWVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2hvbWUtYnV0dG9uLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0hvbWVCdXR0b25Db21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtIb21lQnV0dG9uQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29Ib21lQnV0dG9uTW9kdWxlIHt9XG4iXX0=