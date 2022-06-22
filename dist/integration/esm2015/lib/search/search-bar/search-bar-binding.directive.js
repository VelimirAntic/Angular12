import { Directive, Self, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/geo";
import * as i2 from "../search.state";
export class SearchBarBindingDirective {
    constructor(component, searchState) {
        this.component = component;
        this.searchState = searchState;
    }
    get searchTerm() { return this.searchState.searchTerm$.value; }
    get searchType() { return this.searchState.searchType$.value; }
    ngOnInit() {
        this.searchTerm$$ = this.searchState.searchTerm$.subscribe((searchTerm) => {
            if (searchTerm !== undefined && searchTerm !== null) {
                this.component.setTerm(searchTerm);
            }
        });
        this.searchType$$ = this.searchState.searchType$.subscribe((searchType) => {
            if (searchType !== undefined && searchType !== null) {
                this.component.setSearchType(searchType);
            }
        });
        this.searchDisabled$$ = this.searchState.searchDisabled$.subscribe((searchDisabled) => {
            this.component.disabled = searchDisabled;
        });
    }
    ngOnDestroy() {
        this.searchTerm$$.unsubscribe();
        this.searchType$$.unsubscribe();
        this.searchDisabled$$.unsubscribe();
    }
    onSearchTermChange(searchTerm) {
        if (searchTerm !== this.searchTerm) {
            this.searchState.setSearchTerm(searchTerm);
        }
    }
    onSearchTypeChange(searchType) {
        if (searchType !== this.searchType) {
            this.searchState.setSearchType(searchType);
        }
    }
}
SearchBarBindingDirective.ɵfac = function SearchBarBindingDirective_Factory(t) { return new (t || SearchBarBindingDirective)(i0.ɵɵdirectiveInject(i1.SearchBarComponent, 2), i0.ɵɵdirectiveInject(i2.SearchState)); };
SearchBarBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SearchBarBindingDirective, selectors: [["", "igoSearchBarBinding", ""]], hostBindings: function SearchBarBindingDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("searchTermChange", function SearchBarBindingDirective_searchTermChange_HostBindingHandler($event) { return ctx.onSearchTermChange($event); })("searchTypeChange", function SearchBarBindingDirective_searchTypeChange_HostBindingHandler($event) { return ctx.onSearchTypeChange($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchBarBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoSearchBarBinding]'
            }]
    }], function () { return [{ type: i1.SearchBarComponent, decorators: [{
                type: Self
            }] }, { type: i2.SearchState }]; }, { onSearchTermChange: [{
            type: HostListener,
            args: ['searchTermChange', ['$event']]
        }], onSearchTypeChange: [{
            type: HostListener,
            args: ['searchTypeChange', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci1iaW5kaW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvc2VhcmNoL3NlYXJjaC1iYXIvc2VhcmNoLWJhci1iaW5kaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBcUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBU2pGLE1BQU0sT0FBTyx5QkFBeUI7SUFTcEMsWUFDa0IsU0FBNkIsRUFDckMsV0FBd0I7UUFEaEIsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDL0IsQ0FBQztJQVZKLElBQUksVUFBVSxLQUFhLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxJQUFJLFVBQVUsS0FBYSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFXdkUsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBa0IsRUFBRSxFQUFFO1lBQ2hGLElBQUksVUFBVSxLQUFLLFNBQVMsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFrQixFQUFFLEVBQUU7WUFDaEYsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBdUIsRUFBRSxFQUFFO1lBQzdGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBR0Qsa0JBQWtCLENBQUMsVUFBbUI7UUFDcEMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFHRCxrQkFBa0IsQ0FBQyxVQUFtQjtRQUNwQyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7a0dBbERVLHlCQUF5Qjs0RUFBekIseUJBQXlCO2tJQUF6Qiw4QkFBMEIsaUhBQTFCLDhCQUEwQjs7dUZBQTFCLHlCQUF5QjtjQUhyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7c0JBV0ksSUFBSTtrREE2QlAsa0JBQWtCO2tCQURqQixZQUFZO21CQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBUTVDLGtCQUFrQjtrQkFEakIsWUFBWTttQkFBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgU2VsZiwgT25Jbml0LCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNlYXJjaEJhckNvbXBvbmVudCB9IGZyb20gJ0BpZ28yL2dlbyc7XG5pbXBvcnQgeyBTZWFyY2hTdGF0ZSB9IGZyb20gJy4uL3NlYXJjaC5zdGF0ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpZ29TZWFyY2hCYXJCaW5kaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQmFyQmluZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBnZXQgc2VhcmNoVGVybSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zZWFyY2hTdGF0ZS5zZWFyY2hUZXJtJC52YWx1ZTsgfVxuICBnZXQgc2VhcmNoVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zZWFyY2hTdGF0ZS5zZWFyY2hUeXBlJC52YWx1ZTsgfVxuXG4gIHByaXZhdGUgc2VhcmNoVGVybSQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc2VhcmNoVHlwZSQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc2VhcmNoRGlzYWJsZWQkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgcHJpdmF0ZSBjb21wb25lbnQ6IFNlYXJjaEJhckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWFyY2hUZXJtJCQgPSB0aGlzLnNlYXJjaFN0YXRlLnNlYXJjaFRlcm0kLnN1YnNjcmliZSgoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoc2VhcmNoVGVybSAhPT0gdW5kZWZpbmVkICYmIHNlYXJjaFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2V0VGVybShzZWFyY2hUZXJtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2VhcmNoVHlwZSQkID0gdGhpcy5zZWFyY2hTdGF0ZS5zZWFyY2hUeXBlJC5zdWJzY3JpYmUoKHNlYXJjaFR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHNlYXJjaFR5cGUgIT09IHVuZGVmaW5lZCAmJiBzZWFyY2hUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnNldFNlYXJjaFR5cGUoc2VhcmNoVHlwZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlYXJjaERpc2FibGVkJCQgPSB0aGlzLnNlYXJjaFN0YXRlLnNlYXJjaERpc2FibGVkJC5zdWJzY3JpYmUoKHNlYXJjaERpc2FibGVkOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmNvbXBvbmVudC5kaXNhYmxlZCA9IHNlYXJjaERpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zZWFyY2hUZXJtJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNlYXJjaFR5cGUkJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc2VhcmNoRGlzYWJsZWQkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignc2VhcmNoVGVybUNoYW5nZScsIFsnJGV2ZW50J10pXG4gIG9uU2VhcmNoVGVybUNoYW5nZShzZWFyY2hUZXJtPzogc3RyaW5nKSB7XG4gICAgaWYgKHNlYXJjaFRlcm0gIT09IHRoaXMuc2VhcmNoVGVybSkge1xuICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5zZXRTZWFyY2hUZXJtKHNlYXJjaFRlcm0pO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3NlYXJjaFR5cGVDaGFuZ2UnLCBbJyRldmVudCddKVxuICBvblNlYXJjaFR5cGVDaGFuZ2Uoc2VhcmNoVHlwZT86IHN0cmluZykge1xuICAgIGlmIChzZWFyY2hUeXBlICE9PSB0aGlzLnNlYXJjaFR5cGUpIHtcbiAgICAgIHRoaXMuc2VhcmNoU3RhdGUuc2V0U2VhcmNoVHlwZShzZWFyY2hUeXBlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==