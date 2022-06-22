import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgoActionModule } from '../../action/action.module';
import { IgoDynamicComponentModule } from '../../dynamic-component/dynamic-component.module';
import { ToolboxComponent } from './toolbox.component';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export class IgoToolboxModule {
}
IgoToolboxModule.ɵfac = function IgoToolboxModule_Factory(t) { return new (t || IgoToolboxModule)(); };
IgoToolboxModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoToolboxModule });
IgoToolboxModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            IgoActionModule,
            IgoDynamicComponentModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoToolboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    IgoActionModule,
                    IgoDynamicComponentModule
                ],
                exports: [
                    ToolboxComponent
                ],
                declarations: [
                    ToolboxComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoToolboxModule, { declarations: [ToolboxComponent], imports: [CommonModule,
        IgoActionModule,
        IgoDynamicComponentModule], exports: [ToolboxComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi90b29sL3Rvb2xib3gvdG9vbGJveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFDSCx5QkFBeUIsRUFDNUIsTUFBTSxrREFBa0QsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkQ7O0dBRUc7QUFjSCxNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO2tFQUFoQixnQkFBZ0I7c0VBWmxCO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZix5QkFBeUI7U0FDMUI7dUZBUVUsZ0JBQWdCO2NBYjVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtpQkFDakI7YUFDRjs7d0ZBQ1ksZ0JBQWdCLG1CQUh6QixnQkFBZ0IsYUFSaEIsWUFBWTtRQUNaLGVBQWU7UUFDZix5QkFBeUIsYUFHekIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IElnb0FjdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2FjdGlvbi9hY3Rpb24ubW9kdWxlJztcbmltcG9ydCB7XG4gICAgSWdvRHluYW1pY0NvbXBvbmVudE1vZHVsZVxufSBmcm9tICcuLi8uLi9keW5hbWljLWNvbXBvbmVudC9keW5hbWljLWNvbXBvbmVudC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBUb29sYm94Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYm94LmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElnb0FjdGlvbk1vZHVsZSxcbiAgICBJZ29EeW5hbWljQ29tcG9uZW50TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUb29sYm94Q29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRvb2xib3hDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29Ub29sYm94TW9kdWxlIHt9XG4iXX0=