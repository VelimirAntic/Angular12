import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/context";
let ContextPermissionManagerToolComponent = class ContextPermissionManagerToolComponent {
};
ContextPermissionManagerToolComponent.ɵfac = function ContextPermissionManagerToolComponent_Factory(t) { return new (t || ContextPermissionManagerToolComponent)(); };
ContextPermissionManagerToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextPermissionManagerToolComponent, selectors: [["igo-context-permission-manager-tool"]], decls: 1, vars: 0, consts: [["igoContextPermissionsBinding", ""]], template: function ContextPermissionManagerToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-context-permissions", 0);
    } }, directives: [i1.ContextPermissionsComponent, i1.ContextPermissionsBindingDirective], encapsulation: 2 });
ContextPermissionManagerToolComponent = __decorate([
    ToolComponent({
        name: 'contextPermissionManager',
        title: 'igo.integration.tools.contexts',
        icon: 'star',
        parent: 'contextManager'
    })
], ContextPermissionManagerToolComponent);
export { ContextPermissionManagerToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextPermissionManagerToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-permission-manager-tool',
                templateUrl: './context-permission-manager-tool.component.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1wZXJtaXNzaW9uLW1hbmFnZXItdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2NvbnRleHQvY29udGV4dC1wZXJtaXNzaW9uLW1hbmFnZXItdG9vbC9jb250ZXh0LXBlcm1pc3Npb24tbWFuYWdlci10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvY29udGV4dC9jb250ZXh0LXBlcm1pc3Npb24tbWFuYWdlci10b29sL2NvbnRleHQtcGVybWlzc2lvbi1tYW5hZ2VyLXRvb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0lBWWhDLHFDQUFxQyxTQUFyQyxxQ0FBcUM7Q0FBRyxDQUFBOzBIQUF4QyxxQ0FBcUM7d0ZBQXJDLHFDQUFxQztRQ2RsRCw2Q0FBZ0Y7O0FEY25FLHFDQUFxQztJQVZqRCxhQUFhLENBQUM7UUFDYixJQUFJLEVBQUUsMEJBQTBCO1FBQ2hDLEtBQUssRUFBRSxnQ0FBZ0M7UUFDdkMsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsZ0JBQWdCO0tBQ3pCLENBQUM7R0FLVyxxQ0FBcUMsQ0FBRztTQUF4QyxxQ0FBcUM7dUZBQXJDLHFDQUFxQztjQUpqRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsV0FBVyxFQUFFLGtEQUFrRDthQUNoRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuQFRvb2xDb21wb25lbnQoe1xuICBuYW1lOiAnY29udGV4dFBlcm1pc3Npb25NYW5hZ2VyJyxcbiAgdGl0bGU6ICdpZ28uaW50ZWdyYXRpb24udG9vbHMuY29udGV4dHMnLFxuICBpY29uOiAnc3RhcicsXG4gIHBhcmVudDogJ2NvbnRleHRNYW5hZ2VyJ1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1jb250ZXh0LXBlcm1pc3Npb24tbWFuYWdlci10b29sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtcGVybWlzc2lvbi1tYW5hZ2VyLXRvb2wuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRQZXJtaXNzaW9uTWFuYWdlclRvb2xDb21wb25lbnQge31cbiIsIjxpZ28tY29udGV4dC1wZXJtaXNzaW9ucyBpZ29Db250ZXh0UGVybWlzc2lvbnNCaW5kaW5nPjwvaWdvLWNvbnRleHQtcGVybWlzc2lvbnM+XG4iXX0=