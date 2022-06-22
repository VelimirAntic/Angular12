import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@ngx-translate/core";
export class ConfirmDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmDialogComponent, selectors: [["igo-confirm-dialog"]], decls: 12, vars: 10, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 2);
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.dialogRef.close(true); });
        i0.ɵɵtext(7);
        i0.ɵɵpipe(8, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 4);
        i0.ɵɵlistener("click", function ConfirmDialogComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(false); });
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 4, "igo.common.confirmDialog.title"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.confirmMessage);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 6, "igo.common.confirmDialog.confirmBtn"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 8, "igo.common.confirmDialog.cancelBtn"));
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i2.MatButton], pipes: [i3.TranslatePipe], styles: ["h2[_ngcontent-%COMP%]{margin:5px 0 10px}div[mat-dialog-content][_ngcontent-%COMP%]{max-width:200px}div[mat-dialog-actions][_ngcontent-%COMP%]{margin:10px 0 0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-confirm-dialog',
                templateUrl: './confirm-dialog.component.html',
                styleUrls: ['./confirm-dialog.component.scss']
            }]
    }], function () { return [{ type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRMUMsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxZQUFtQixTQUErQztRQUEvQyxjQUFTLEdBQVQsU0FBUyxDQUFzQztJQUFHLENBQUM7OzRGQUgzRCxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQ1JuQyw2QkFBNEM7UUFBQSxZQUFnRDs7UUFBQSxpQkFBSztRQUNqRyw4QkFBK0M7UUFBQSxZQUFrQjtRQUFBLGlCQUFNO1FBQ3ZFLDhCQUF3QjtRQUN0QixpQ0FBbUU7UUFBaEMsbUdBQVMsb0JBQWdCLElBQUksQ0FBQyxJQUFDO1FBQUMsWUFBcUQ7O1FBQUEsaUJBQVM7UUFDakksaUNBQW9EO1FBQWpDLG1HQUFTLG9CQUFnQixLQUFLLENBQUMsSUFBQztRQUFDLGFBQW9EOztRQUFBLGlCQUFTO1FBQ25ILGlCQUFNOztRQUxzQyxlQUFnRDtRQUFoRCw0RUFBZ0Q7UUFDN0MsZUFBa0I7UUFBbEIsd0NBQWtCO1FBRUksZUFBcUQ7UUFBckQsaUZBQXFEO1FBQ3BFLGVBQW9EO1FBQXBELGlGQUFvRDs7dUZESTdGLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1jb25maXJtLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybURpYWxvZ0NvbXBvbmVudCB7XG4gIHB1YmxpYyBjb25maXJtTWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maXJtRGlhbG9nQ29tcG9uZW50Pikge31cbn1cbiIsIjxoMiBtYXQtZGlhbG9nLXRpdGxlIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj57eydpZ28uY29tbW9uLmNvbmZpcm1EaWFsb2cudGl0bGUnIHzCoHRyYW5zbGF0ZX19PC9oMj5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj57e2NvbmZpcm1NZXNzYWdlfX08L2Rpdj5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImRpYWxvZ1JlZi5jbG9zZSh0cnVlKVwiPnt7J2lnby5jb21tb24uY29uZmlybURpYWxvZy5jb25maXJtQnRuJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiZGlhbG9nUmVmLmNsb3NlKGZhbHNlKVwiPnt7J2lnby5jb21tb24uY29uZmlybURpYWxvZy5jYW5jZWxCdG4nIHzCoHRyYW5zbGF0ZX19PC9idXR0b24+XG48L2Rpdj5cbiJdfQ==