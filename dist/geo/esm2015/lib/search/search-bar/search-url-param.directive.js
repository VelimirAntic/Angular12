import { Directive, Self, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./search-bar.component";
import * as i2 from "@igo2/core";
export class SearchUrlParamDirective {
    constructor(component, ref, route) {
        this.component = component;
        this.ref = ref;
        this.route = route;
    }
    ngOnInit() {
        if (this.route && this.route.options.searchKey) {
            this.route.queryParams.subscribe(params => {
                const searchParams = params[this.route.options.searchKey];
                if (searchParams) {
                    this.component.setTerm(searchParams);
                    this.ref.detectChanges();
                }
            });
        }
    }
}
SearchUrlParamDirective.ɵfac = function SearchUrlParamDirective_Factory(t) { return new (t || SearchUrlParamDirective)(i0.ɵɵdirectiveInject(i1.SearchBarComponent, 2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.RouteService, 8)); };
SearchUrlParamDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SearchUrlParamDirective, selectors: [["", "igoSearchUrlParam", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchUrlParamDirective, [{
        type: Directive,
        args: [{
                selector: '[igoSearchUrlParam]'
            }]
    }], function () { return [{ type: i1.SearchBarComponent, decorators: [{
                type: Self
            }] }, { type: i0.ChangeDetectorRef }, { type: i2.RouteService, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXVybC1wYXJhbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2VhcmNoLWJhci9zZWFyY2gtdXJsLXBhcmFtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFFSixRQUFRLEVBRVQsTUFBTSxlQUFlLENBQUM7Ozs7QUFTdkIsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUNrQixTQUE2QixFQUNyQyxHQUFzQixFQUNWLEtBQW1CO1FBRnZCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQ3JDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUN0QyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN4QyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBbUIsQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLFlBQVksRUFBRTtvQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQzFCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OzhGQWpCVSx1QkFBdUI7MEVBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBSG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOztzQkFHSSxJQUFJOztzQkFFSixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBTZWxmLFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbmltcG9ydCB7IFNlYXJjaEJhckNvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWJhci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaWdvU2VhcmNoVXJsUGFyYW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hVcmxQYXJhbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgcHJpdmF0ZSBjb21wb25lbnQ6IFNlYXJjaEJhckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZTogUm91dGVTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yb3V0ZSAmJiB0aGlzLnJvdXRlLm9wdGlvbnMuc2VhcmNoS2V5KSB7XG4gICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBwYXJhbXNbdGhpcy5yb3V0ZS5vcHRpb25zLnNlYXJjaEtleSBhcyBzdHJpbmddO1xuICAgICAgICBpZiAoc2VhcmNoUGFyYW1zKSB7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnQuc2V0VGVybShzZWFyY2hQYXJhbXMpO1xuICAgICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=