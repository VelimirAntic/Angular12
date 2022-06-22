import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class IgoMessageModule {
    static forRoot() {
        return {
            ngModule: IgoMessageModule,
            providers: []
        };
    }
}
IgoMessageModule.ɵfac = function IgoMessageModule_Factory(t) { return new (t || IgoMessageModule)(); };
IgoMessageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoMessageModule });
IgoMessageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule,
            ToastrModule.forRoot({
                positionClass: 'toast-bottom-right',
                timeOut: 10000,
                extendedTimeOut: 10000,
                messageClass: 'toast-message mat-typography',
                closeButton: true,
                progressBar: true,
                enableHtml: true,
                tapToDismiss: true,
                maxOpened: 4,
                preventDuplicates: true,
                resetTimeoutOnDuplicate: true,
                countDuplicates: false,
                includeTitleDuplicates: true
            })]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoMessageModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule,
                    ToastrModule.forRoot({
                        positionClass: 'toast-bottom-right',
                        timeOut: 10000,
                        extendedTimeOut: 10000,
                        messageClass: 'toast-message mat-typography',
                        closeButton: true,
                        progressBar: true,
                        enableHtml: true,
                        tapToDismiss: true,
                        maxOpened: 4,
                        preventDuplicates: true,
                        resetTimeoutOnDuplicate: true,
                        countDuplicates: false,
                        includeTitleDuplicates: true
                    })],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoMessageModule, { imports: [CommonModule, i1.ToastrModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvbWVzc2FnZS9tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQXNCeEQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7O2dGQU5VLGdCQUFnQjtrRUFBaEIsZ0JBQWdCO3NFQW5CbEIsQ0FBQyxZQUFZO1lBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLGFBQWEsRUFBRSxvQkFBb0I7Z0JBQ25DLE9BQU8sRUFBRSxLQUFLO2dCQUNkLGVBQWUsRUFBRSxLQUFLO2dCQUN0QixZQUFZLEVBQUUsOEJBQThCO2dCQUM1QyxXQUFXLEVBQUUsSUFBSTtnQkFDakIsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsU0FBUyxFQUFFLENBQUM7Z0JBQ1osaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsdUJBQXVCLEVBQUUsSUFBSTtnQkFDN0IsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLHNCQUFzQixFQUFFLElBQUk7YUFDYixDQUFDLENBQUM7dUZBSVYsZ0JBQWdCO2NBcEI1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWTtvQkFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQzt3QkFDbkIsYUFBYSxFQUFFLG9CQUFvQjt3QkFDbkMsT0FBTyxFQUFFLEtBQUs7d0JBQ2QsZUFBZSxFQUFFLEtBQUs7d0JBQ3RCLFlBQVksRUFBRSw4QkFBOEI7d0JBQzVDLFdBQVcsRUFBRSxJQUFJO3dCQUNqQixXQUFXLEVBQUUsSUFBSTt3QkFDakIsVUFBVSxFQUFFLElBQUk7d0JBQ2hCLFlBQVksRUFBRSxJQUFJO3dCQUNsQixTQUFTLEVBQUUsQ0FBQzt3QkFDWixpQkFBaUIsRUFBRSxJQUFJO3dCQUN2Qix1QkFBdUIsRUFBRSxJQUFJO3dCQUM3QixlQUFlLEVBQUUsS0FBSzt3QkFDdEIsc0JBQXNCLEVBQUUsSUFBSTtxQkFDYixDQUFDLENBQUM7Z0JBQ3JCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNaOzt3RkFDWSxnQkFBZ0IsY0FuQmpCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR2xvYmFsQ29uZmlnLCBUb2FzdHJNb2R1bGUgfSBmcm9tICduZ3gtdG9hc3RyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxcbiAgICBUb2FzdHJNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBwb3NpdGlvbkNsYXNzOiAndG9hc3QtYm90dG9tLXJpZ2h0JyxcbiAgICAgIHRpbWVPdXQ6IDEwMDAwLFxuICAgICAgZXh0ZW5kZWRUaW1lT3V0OiAxMDAwMCxcbiAgICAgIG1lc3NhZ2VDbGFzczogJ3RvYXN0LW1lc3NhZ2UgbWF0LXR5cG9ncmFwaHknLFxuICAgICAgY2xvc2VCdXR0b246IHRydWUsXG4gICAgICBwcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgIGVuYWJsZUh0bWw6IHRydWUsXG4gICAgICB0YXBUb0Rpc21pc3M6IHRydWUsXG4gICAgICBtYXhPcGVuZWQ6IDQsXG4gICAgICBwcmV2ZW50RHVwbGljYXRlczogdHJ1ZSxcbiAgICAgIHJlc2V0VGltZW91dE9uRHVwbGljYXRlOiB0cnVlLFxuICAgICAgY291bnREdXBsaWNhdGVzOiBmYWxzZSxcbiAgICAgIGluY2x1ZGVUaXRsZUR1cGxpY2F0ZXM6IHRydWVcbiAgICB9IGFzIEdsb2JhbENvbmZpZyldLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJZ29NZXNzYWdlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29NZXNzYWdlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29NZXNzYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==