import { NgModule } from '@angular/core';
import { WorkspaceButtonComponent } from './workspace-button/workspace-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { IgoLanguageModule } from '@igo2/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class IgoAppWorkspaceModule {
}
IgoAppWorkspaceModule.ɵfac = function IgoAppWorkspaceModule_Factory(t) { return new (t || IgoAppWorkspaceModule)(); };
IgoAppWorkspaceModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppWorkspaceModule });
IgoAppWorkspaceModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            IgoLanguageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppWorkspaceModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTooltipModule,
                    IgoLanguageModule
                ],
                declarations: [WorkspaceButtonComponent],
                exports: [WorkspaceButtonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppWorkspaceModule, { declarations: [WorkspaceButtonComponent], imports: [CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        IgoLanguageModule], exports: [WorkspaceButtonComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvd29ya3NwYWNlL3dvcmtzcGFjZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBYS9DLE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7dUVBQXJCLHFCQUFxQjsyRUFWdkI7WUFDUCxZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsaUJBQWlCO1NBQ2xCO3VGQUlVLHFCQUFxQjtjQVhqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDcEM7O3dGQUNZLHFCQUFxQixtQkFIakIsd0JBQXdCLGFBTnJDLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUIsYUFHVCx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV29ya3NwYWNlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jrc3BhY2UtYnV0dG9uL3dvcmtzcGFjZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1dvcmtzcGFjZUJ1dHRvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtXb3Jrc3BhY2VCdXR0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIElnb0FwcFdvcmtzcGFjZU1vZHVsZSB7fVxuIl19