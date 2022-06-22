import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "../../tool/tool.state";
import * as i2 from "../../map/map.state";
import * as i3 from "@igo2/context";
let ContextManagerToolComponent = class ContextManagerToolComponent {
    constructor(toolState, mapState) {
        this.toolState = toolState;
        this.mapState = mapState;
        this.toolToOpenOnContextChange = 'mapTools';
    }
    get map() { return this.mapState.map; }
    editContext() {
        this.toolState.toolbox.activateTool('contextEditor');
    }
    managePermissions() {
        this.toolState.toolbox.activateTool('contextPermissionManager');
    }
};
ContextManagerToolComponent.ɵfac = function ContextManagerToolComponent_Factory(t) { return new (t || ContextManagerToolComponent)(i0.ɵɵdirectiveInject(i1.ToolState), i0.ɵɵdirectiveInject(i2.MapState)); };
ContextManagerToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextManagerToolComponent, selectors: [["igo-context-manager-tool"]], inputs: { toolToOpenOnContextChange: "toolToOpenOnContextChange" }, decls: 1, vars: 1, consts: [["igoContextListBinding", "", 3, "map", "edit", "managePermissions"]], template: function ContextManagerToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-context-list", 0);
        i0.ɵɵlistener("edit", function ContextManagerToolComponent_Template_igo_context_list_edit_0_listener() { return ctx.editContext(); })("managePermissions", function ContextManagerToolComponent_Template_igo_context_list_managePermissions_0_listener() { return ctx.managePermissions(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("map", ctx.map);
    } }, directives: [i3.ContextListComponent, i3.ContextListBindingDirective], encapsulation: 2 });
ContextManagerToolComponent = __decorate([
    ToolComponent({
        name: 'contextManager',
        title: 'igo.integration.tools.contexts',
        icon: 'star'
    })
], ContextManagerToolComponent);
export { ContextManagerToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextManagerToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-manager-tool',
                templateUrl: './context-manager-tool.component.html'
            }]
    }], function () { return [{ type: i1.ToolState }, { type: i2.MapState }]; }, { toolToOpenOnContextChange: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tYW5hZ2VyLXRvb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9jb250ZXh0L2NvbnRleHQtbWFuYWdlci10b29sL2NvbnRleHQtbWFuYWdlci10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvY29udGV4dC9jb250ZXh0LW1hbmFnZXItdG9vbC9jb250ZXh0LW1hbmFnZXItdG9vbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7SUFlaEMsMkJBQTJCLFNBQTNCLDJCQUEyQjtJQU10QyxZQUFvQixTQUFvQixFQUFVLFFBQWtCO1FBQWhELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSjNELDhCQUF5QixHQUFXLFVBQVUsQ0FBQztJQUllLENBQUM7SUFGeEUsSUFBSSxHQUFHLEtBQWEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFJL0MsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbEUsQ0FBQztDQUNGLENBQUE7c0dBZlksMkJBQTJCOzhFQUEzQiwyQkFBMkI7UUNqQnhDLDJDQUk0QztRQUQxQyxnSEFBUSxpQkFBYSxJQUFDLDZIQUNELHVCQUFtQixJQURsQjtRQUV4QixpQkFBbUI7O1FBSGpCLDZCQUFXOztBRGVBLDJCQUEyQjtJQVR2QyxhQUFhLENBQUM7UUFDYixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLEtBQUssRUFBRSxnQ0FBZ0M7UUFDdkMsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0dBS1csMkJBQTJCLENBZXZDO1NBZlksMkJBQTJCO3VGQUEzQiwyQkFBMkI7Y0FKdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSx1Q0FBdUM7YUFDckQ7bUZBR1UseUJBQXlCO2tCQUFqQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHsgVG9vbFN0YXRlIH0gZnJvbSAnLi4vLi4vdG9vbC90b29sLnN0YXRlJztcbmltcG9ydCB7IE1hcFN0YXRlIH0gZnJvbSAnLi4vLi4vbWFwL21hcC5zdGF0ZSc7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICdAaWdvMi9nZW8nO1xuXG5AVG9vbENvbXBvbmVudCh7XG4gIG5hbWU6ICdjb250ZXh0TWFuYWdlcicsXG4gIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLnRvb2xzLmNvbnRleHRzJyxcbiAgaWNvbjogJ3N0YXInXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWNvbnRleHQtbWFuYWdlci10b29sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtbWFuYWdlci10b29sLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWFuYWdlclRvb2xDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHRvb2xUb09wZW5PbkNvbnRleHRDaGFuZ2U6IHN0cmluZyA9ICdtYXBUb29scyc7XG5cbiAgZ2V0IG1hcCgpOiBJZ29NYXAgeyByZXR1cm4gdGhpcy5tYXBTdGF0ZS5tYXA7IH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvb2xTdGF0ZTogVG9vbFN0YXRlLCBwcml2YXRlIG1hcFN0YXRlOiBNYXBTdGF0ZSkge31cblxuICBlZGl0Q29udGV4dCgpIHtcbiAgICB0aGlzLnRvb2xTdGF0ZS50b29sYm94LmFjdGl2YXRlVG9vbCgnY29udGV4dEVkaXRvcicpO1xuICB9XG5cbiAgbWFuYWdlUGVybWlzc2lvbnMoKSB7XG4gICAgdGhpcy50b29sU3RhdGUudG9vbGJveC5hY3RpdmF0ZVRvb2woJ2NvbnRleHRQZXJtaXNzaW9uTWFuYWdlcicpO1xuICB9XG59XG4iLCI8aWdvLWNvbnRleHQtbGlzdFxuICBpZ29Db250ZXh0TGlzdEJpbmRpbmdcbiAgW21hcF09XCJtYXBcIlxuICAoZWRpdCk9XCJlZGl0Q29udGV4dCgpXCJcbiAgKG1hbmFnZVBlcm1pc3Npb25zKT1cIm1hbmFnZVBlcm1pc3Npb25zKClcIj5cbjwvaWdvLWNvbnRleHQtbGlzdD5cbiJdfQ==