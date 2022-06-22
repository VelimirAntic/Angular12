import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/material/button";
export class ConfirmationPopupComponent {
    constructor(dialogRef, languageService, data) {
        this.dialogRef = dialogRef;
        this.languageService = languageService;
        this.data = data;
    }
    cancelAction() {
        this.data.cancel = true;
        this.dialogRef.close(this.data.cancel);
    }
    confirmedAction() {
        this.data.cancel = false;
        this.dialogRef.close(this.data.cancel);
    }
}
ConfirmationPopupComponent.ɵfac = function ConfirmationPopupComponent_Factory(t) { return new (t || ConfirmationPopupComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
ConfirmationPopupComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmationPopupComponent, selectors: [["igo-confirmation-popup-component"]], decls: 8, vars: 2, consts: [["mat-dialog-content", ""], [1, "mat-typography"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function ConfirmationPopupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "p", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function ConfirmationPopupComponent_Template_button_click_4_listener() { return ctx.confirmedAction(); });
        i0.ɵɵtext(5, "Ok ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function ConfirmationPopupComponent_Template_button_click_6_listener() { return ctx.cancelAction(); });
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.data.type === "add" ? ctx.languageService.translate.instant("igo.geo.workspace.addConfirmation") : ctx.languageService.translate.instant("igo.geo.workspace.deleteConfirmation"));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1("", ctx.languageService.translate.instant("igo.geo.workspace.cancel"), " ");
    } }, directives: [i1.MatDialogContent, i1.MatDialogActions, i3.MatButton], styles: ["div.mat-dialog-actions[_ngcontent-%COMP%]{justify-content:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmationPopupComponent, [{
        type: Component,
        args: [{
                selector: 'igo-confirmation-popup-component',
                templateUrl: './confirmation-popup.component.html',
                styleUrls: ['./confirmation-popup.component.scss']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: i2.LanguageService }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXBvcHVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3dvcmtzcGFjZS9jb25maXJtYXRpb24tcG9wdXAvY29uZmlybWF0aW9uLXBvcHVwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3dvcmtzcGFjZS9jb25maXJtYXRpb24tcG9wdXAvY29uZmlybWF0aW9uLXBvcHVwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBWXZFLE1BQU0sT0FBTywwQkFBMEI7SUFFckMsWUFDUyxTQUFtRCxFQUNuRCxlQUFnQyxFQUNQLElBQXFDO1FBRjlELGNBQVMsR0FBVCxTQUFTLENBQTBDO1FBQ25ELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNQLFNBQUksR0FBSixJQUFJLENBQWlDO0lBQUcsQ0FBQztJQUUzRSxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOztvR0FmVSwwQkFBMEIsd0dBSzNCLGVBQWU7NkVBTGQsMEJBQTBCO1FDZHpDLDhCQUF3QjtRQUN0Qiw0QkFBMEI7UUFBQSxZQUVtRDtRQUFBLGlCQUFJO1FBQ25GLGlCQUFNO1FBQ04sOEJBQXdCO1FBQ3RCLGlDQUc4QjtRQUE1Qix1R0FBUyxxQkFBaUIsSUFBQztRQUFDLG1CQUM5QjtRQUFBLGlCQUFTO1FBQ1QsaUNBRTJCO1FBQXpCLHVHQUFTLGtCQUFjLElBQUM7UUFBQyxZQUMzQjtRQUFBLGlCQUFTO1FBQ1gsaUJBQU07O1FBZHNCLGVBRW1EO1FBRm5ELDBNQUVtRDtRQVVsRCxlQUMzQjtRQUQyQixpR0FDM0I7O3VGREFhLDBCQUEwQjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQ7O3NCQU1JLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgdHlwZTogc3RyaW5nO1xuICBjYW5jZWw6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWdvLWNvbmZpcm1hdGlvbi1wb3B1cC1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtYXRpb24tcG9wdXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NvbmZpcm1hdGlvbi1wb3B1cC5jb21wb25lbnQuc2NzcyddXG4gIH0pXG4gIGV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Qb3B1cENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maXJtYXRpb25Qb3B1cENvbXBvbmVudD4sXG4gICAgICBwdWJsaWMgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IHt0eXBlOiBzdHJpbmcsIGNhbmNlbDogYm9vbGVhbn0pIHt9XG5cbiAgICBjYW5jZWxBY3Rpb24oKSB7XG4gICAgICB0aGlzLmRhdGEuY2FuY2VsID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YS5jYW5jZWwpO1xuICAgIH1cblxuICAgIGNvbmZpcm1lZEFjdGlvbigpIHtcbiAgICAgIHRoaXMuZGF0YS5jYW5jZWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMuZGF0YS5jYW5jZWwpO1xuICAgIH1cbiAgfVxuIiwiPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxwIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj57e2RhdGEudHlwZSA9PT0gJ2FkZCcgP1xuICAgIGxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby53b3Jrc3BhY2UuYWRkQ29uZmlybWF0aW9uJykgOlxuICAgIGxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby53b3Jrc3BhY2UuZGVsZXRlQ29uZmlybWF0aW9uJyl9fTwvcD5cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG4gIDxidXR0b25cbiAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgKGNsaWNrKT1cImNvbmZpcm1lZEFjdGlvbigpXCI+T2tcbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgIChjbGljayk9XCJjYW5jZWxBY3Rpb24oKVwiPnt7bGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLndvcmtzcGFjZS5jYW5jZWwnKX19XG4gIDwvYnV0dG9uPlxuPC9kaXY+Il19