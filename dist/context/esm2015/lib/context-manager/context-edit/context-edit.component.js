import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../context-form/context-form.component";
import * as i3 from "@ngx-translate/core";
function ContextEditComponent_igo_context_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "igo-context-form", 1);
    i0.ɵɵlistener("submitForm", function ContextEditComponent_igo_context_form_0_Template_igo_context_form_submitForm_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.submitForm.emit($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("btnSubmitText", i0.ɵɵpipeBind1(1, 2, "igo.context.contextManager.save"))("context", ctx_r0.context);
} }
export class ContextEditComponent {
    constructor(cd) {
        this.cd = cd;
        this.submitForm = new EventEmitter();
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
        this.refresh();
    }
    refresh() {
        this.cd.detectChanges();
    }
}
ContextEditComponent.ɵfac = function ContextEditComponent_Factory(t) { return new (t || ContextEditComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ContextEditComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextEditComponent, selectors: [["igo-context-edit"]], inputs: { context: "context" }, outputs: { submitForm: "submitForm" }, decls: 1, vars: 1, consts: [[3, "btnSubmitText", "context", "submitForm", 4, "ngIf"], [3, "btnSubmitText", "context", "submitForm"]], template: function ContextEditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ContextEditComponent_igo_context_form_0_Template, 2, 4, "igo-context-form", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.context);
    } }, directives: [i1.NgIf, i2.ContextFormComponent], pipes: [i3.TranslatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextEditComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-edit',
                templateUrl: './context-edit.component.html'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { context: [{
            type: Input
        }], submitForm: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LW1hbmFnZXIvY29udGV4dC1lZGl0L2NvbnRleHQtZWRpdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYW5hZ2VyL2NvbnRleHQtZWRpdC9jb250ZXh0LWVkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNBMUYsMkNBRzBDO0lBQXZDLHdNQUFjLDhCQUF1QixJQUFDOztJQUN6QyxpQkFBbUI7OztJQUhoQix1RkFBK0QsMkJBQUE7O0FET2xFLE1BQU0sT0FBTyxvQkFBb0I7SUFhL0IsWUFBb0IsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFGL0IsZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFaN0MsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBT0QsT0FBTztRQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7d0ZBakJVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDUmpDLCtGQUltQjs7UUFKQSxrQ0FBYTs7dUZEUW5CLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjthQUM3QztvRUFHSyxPQUFPO2tCQURWLEtBQUs7WUFVSSxVQUFVO2tCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9zaGFyZWQvY29udGV4dC5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tY29udGV4dC1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtZWRpdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dEVkaXRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBnZXQgY29udGV4dCgpOiBDb250ZXh0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuICBzZXQgY29udGV4dCh2YWx1ZTogQ29udGV4dCkge1xuICAgIHRoaXMuX2NvbnRleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuICBwcml2YXRlIF9jb250ZXh0OiBDb250ZXh0O1xuXG4gIEBPdXRwdXQoKSBzdWJtaXRGb3JtOiBFdmVudEVtaXR0ZXI8Q29udGV4dD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIiwiPGlnby1jb250ZXh0LWZvcm0gKm5nSWY9XCJjb250ZXh0XCJcbiAgIFtidG5TdWJtaXRUZXh0XT1cIidpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5zYXZlJyB8IHRyYW5zbGF0ZVwiXG4gICBbY29udGV4dF09XCJjb250ZXh0XCJcbiAgIChzdWJtaXRGb3JtKT1cInN1Ym1pdEZvcm0uZW1pdCgkZXZlbnQpXCI+XG48L2lnby1jb250ZXh0LWZvcm0+XG4iXX0=