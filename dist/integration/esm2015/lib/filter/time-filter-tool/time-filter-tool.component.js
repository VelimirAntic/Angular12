import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/geo";
let TimeFilterToolComponent = class TimeFilterToolComponent {
    constructor() { }
};
TimeFilterToolComponent.ɵfac = function TimeFilterToolComponent_Factory(t) { return new (t || TimeFilterToolComponent)(); };
TimeFilterToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimeFilterToolComponent, selectors: [["igo-time-filter-tool"]], decls: 1, vars: 0, consts: [["igoTimeFilterListBinding", ""]], template: function TimeFilterToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-time-filter-list", 0);
    } }, directives: [i1.TimeFilterListComponent, i1.TimeFilterListBindingDirective], encapsulation: 2 });
TimeFilterToolComponent = __decorate([
    ToolComponent({
        name: 'timeFilter',
        title: 'igo.integration.tools.timeFilter',
        icon: 'history'
    })
], TimeFilterToolComponent);
export { TimeFilterToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeFilterToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-time-filter-tool',
                templateUrl: './time-filter-tool.component.html'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1maWx0ZXItdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2ZpbHRlci90aW1lLWZpbHRlci10b29sL3RpbWUtZmlsdGVyLXRvb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9maWx0ZXIvdGltZS1maWx0ZXItdG9vbC90aW1lLWZpbHRlci10b29sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7OztJQVdoQyx1QkFBdUIsU0FBdkIsdUJBQXVCO0lBQ2xDLGdCQUFlLENBQUM7Q0FDakIsQ0FBQTs4RkFGWSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ2JwQywwQ0FBc0U7O0FEYXpELHVCQUF1QjtJQVRuQyxhQUFhLENBQUM7UUFDYixJQUFJLEVBQUUsWUFBWTtRQUNsQixLQUFLLEVBQUUsa0NBQWtDO1FBQ3pDLElBQUksRUFBRSxTQUFTO0tBQ2hCLENBQUM7R0FLVyx1QkFBdUIsQ0FFbkM7U0FGWSx1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQUpuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLG1DQUFtQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuQFRvb2xDb21wb25lbnQoe1xuICBuYW1lOiAndGltZUZpbHRlcicsXG4gIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLnRvb2xzLnRpbWVGaWx0ZXInLFxuICBpY29uOiAnaGlzdG9yeSdcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tdGltZS1maWx0ZXItdG9vbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLWZpbHRlci10b29sLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUaW1lRmlsdGVyVG9vbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsIjxpZ28tdGltZS1maWx0ZXItbGlzdCBpZ29UaW1lRmlsdGVyTGlzdEJpbmRpbmc+PC9pZ28tdGltZS1maWx0ZXItbGlzdD5cbiJdfQ==