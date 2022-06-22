import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "../../tool/tool.state";
import * as i2 from "@igo2/context";
let ContextEditorToolComponent = class ContextEditorToolComponent {
    constructor(toolState) {
        this.toolState = toolState;
    }
    submitSuccessed() {
        this.toolState.toolbox.activatePreviousTool();
    }
};
ContextEditorToolComponent.ɵfac = function ContextEditorToolComponent_Factory(t) { return new (t || ContextEditorToolComponent)(i0.ɵɵdirectiveInject(i1.ToolState)); };
ContextEditorToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextEditorToolComponent, selectors: [["igo-context-editor-tool"]], decls: 1, vars: 0, consts: [["igoContextEditBinding", "", 3, "submitSuccessed"]], template: function ContextEditorToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-context-edit", 0);
        i0.ɵɵlistener("submitSuccessed", function ContextEditorToolComponent_Template_igo_context_edit_submitSuccessed_0_listener() { return ctx.submitSuccessed(); });
        i0.ɵɵelementEnd();
    } }, directives: [i2.ContextEditComponent, i2.ContextEditBindingDirective], encapsulation: 2 });
ContextEditorToolComponent = __decorate([
    ToolComponent({
        name: 'contextEditor',
        title: 'igo.integration.tools.contexts',
        icon: 'star',
        parent: 'contextManager'
    })
], ContextEditorToolComponent);
export { ContextEditorToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextEditorToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-editor-tool',
                templateUrl: './context-editor-tool.component.html'
            }]
    }], function () { return [{ type: i1.ToolState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1lZGl0b3ItdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2NvbnRleHQvY29udGV4dC1lZGl0b3ItdG9vbC9jb250ZXh0LWVkaXRvci10b29sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvY29udGV4dC9jb250ZXh0LWVkaXRvci10b29sL2NvbnRleHQtZWRpdG9yLXRvb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztJQWFoQywwQkFBMEIsU0FBMUIsMEJBQTBCO0lBRXJDLFlBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBRyxDQUFDO0lBRTVDLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7Q0FDRixDQUFBO29HQVBZLDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FDZnZDLDJDQUdDO1FBREMscUlBQW1CLHFCQUFpQixJQUFDO1FBQ3RDLGlCQUFtQjs7QURZUCwwQkFBMEI7SUFWdEMsYUFBYSxDQUFDO1FBQ2IsSUFBSSxFQUFFLGVBQWU7UUFDckIsS0FBSyxFQUFFLGdDQUFnQztRQUN2QyxJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxnQkFBZ0I7S0FDekIsQ0FBQztHQUtXLDBCQUEwQixDQU90QztTQVBZLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBSnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsc0NBQXNDO2FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRvb2xDb21wb25lbnQgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgVG9vbFN0YXRlIH0gZnJvbSAnLi4vLi4vdG9vbC90b29sLnN0YXRlJztcblxuQFRvb2xDb21wb25lbnQoe1xuICBuYW1lOiAnY29udGV4dEVkaXRvcicsXG4gIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLnRvb2xzLmNvbnRleHRzJyxcbiAgaWNvbjogJ3N0YXInLFxuICBwYXJlbnQ6ICdjb250ZXh0TWFuYWdlcidcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tY29udGV4dC1lZGl0b3ItdG9vbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZXh0LWVkaXRvci10b29sLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0RWRpdG9yVG9vbENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b29sU3RhdGU6IFRvb2xTdGF0ZSkge31cblxuICBzdWJtaXRTdWNjZXNzZWQoKSB7XG4gICAgdGhpcy50b29sU3RhdGUudG9vbGJveC5hY3RpdmF0ZVByZXZpb3VzVG9vbCgpO1xuICB9XG59XG4iLCI8aWdvLWNvbnRleHQtZWRpdFxuICBpZ29Db250ZXh0RWRpdEJpbmRpbmdcbiAgKHN1Ym1pdFN1Y2Nlc3NlZCk9XCJzdWJtaXRTdWNjZXNzZWQoKVwiXG4+PC9pZ28tY29udGV4dC1lZGl0PlxuIl19