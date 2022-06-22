import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@igo2/auth";
import * as i3 from "@igo2/core";
import * as i4 from "@angular/material/button";
import * as i5 from "@ngx-translate/core";
export class UserDialogComponent {
    constructor(dialogRef, auth, storageService) {
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.storageService = storageService;
        const decodeToken = this.auth.decodeToken();
        this.user = decodeToken.user;
        this.exp = new Date(decodeToken.exp * 1000).toLocaleString();
    }
    clearPreferences() {
        this.storageService.clear();
    }
}
UserDialogComponent.ɵfac = function UserDialogComponent_Factory(t) { return new (t || UserDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.StorageService)); };
UserDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserDialogComponent, selectors: [["igo-user-dialog"]], decls: 20, vars: 18, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-dialog-actions", "", 2, "justify-content", "center"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function UserDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "p");
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 2);
        i0.ɵɵlistener("click", function UserDialogComponent_Template_button_click_13_listener() { return ctx.clearPreferences(); });
        i0.ɵɵtext(14);
        i0.ɵɵpipe(15, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "br");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 3);
        i0.ɵɵelementStart(18, "button", 4);
        i0.ɵɵlistener("click", function UserDialogComponent_Template_button_click_18_listener() { return ctx.dialogRef.close(false); });
        i0.ɵɵtext(19, " OK ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 8, "igo.context.userButton.infoTitle"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(6, 10, "igo.context.userButton.dialog.user"), ": ", ctx.user.sourceId, "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(9, 12, "igo.context.userButton.dialog.email"), ": ", ctx.user.email, "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(12, 14, "igo.context.userButton.dialog.expiration"), ": ", ctx.exp, "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 16, "igo.context.userButton.dialog.clearPreferences"), " ");
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i4.MatButton, i1.MatDialogActions], pipes: [i5.TranslatePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-user-dialog',
                templateUrl: './user-dialog.component.html'
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: i2.AuthService }, { type: i3.StorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29udGV4dC9zcmMvbGliL2NvbnRleHQtbWFwLWJ1dHRvbi91c2VyLWJ1dHRvbi91c2VyLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYXAtYnV0dG9uL3VzZXItYnV0dG9uL3VzZXItZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFVMUMsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QixZQUNTLFNBQTRDLEVBQzNDLElBQWlCLEVBQ2pCLGNBQThCO1FBRi9CLGNBQVMsR0FBVCxTQUFTLENBQW1DO1FBQzNDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDOztzRkFoQlUsbUJBQW1CO3NFQUFuQixtQkFBbUI7UUNWaEMsNkJBQTRDO1FBQUEsWUFBa0Q7O1FBQUEsaUJBQUs7UUFDbkcsOEJBQStDO1FBQzdDLHlCQUFHO1FBQUEsWUFBdUU7O1FBQUEsaUJBQUk7UUFDOUUseUJBQUc7UUFBQSxZQUFxRTs7UUFBQSxpQkFBSTtRQUM1RSwwQkFBRztRQUFBLGFBQW1FOztRQUFBLGlCQUFJO1FBQzFFLGtDQUF3RTtRQUE3QixpR0FBUyxzQkFBa0IsSUFBQztRQUNyRSxhQUNGOztRQUFBLGlCQUFTO1FBQ1Qsc0JBQUk7UUFDTixpQkFBTTtRQUNOLCtCQUF3RDtRQUN0RCxrQ0FDd0M7UUFBakMsaUdBQVMsb0JBQWdCLEtBQUssQ0FBQyxJQUFDO1FBQ3JDLHFCQUNGO1FBQUEsaUJBQVM7UUFDWCxpQkFBTTs7UUFmc0MsZUFBa0Q7UUFBbEQsOEVBQWtEO1FBRXpGLGVBQXVFO1FBQXZFLG1IQUF1RTtRQUN2RSxlQUFxRTtRQUFyRSxpSEFBcUU7UUFDckUsZUFBbUU7UUFBbkUsZ0hBQW1FO1FBRXBFLGVBQ0Y7UUFERSx5R0FDRjs7dUZER1csbUJBQW1CO2NBSi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsOEJBQThCO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAaWdvMi9hdXRoJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXVzZXItZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGlhbG9nQ29tcG9uZW50IHtcbiAgcHVibGljIHVzZXI7XG4gIHB1YmxpYyBleHA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFVzZXJEaWFsb2dDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2VcbiAgKSB7XG4gICAgY29uc3QgZGVjb2RlVG9rZW4gPSB0aGlzLmF1dGguZGVjb2RlVG9rZW4oKTtcbiAgICB0aGlzLnVzZXIgPSBkZWNvZGVUb2tlbi51c2VyO1xuICAgIHRoaXMuZXhwID0gbmV3IERhdGUoZGVjb2RlVG9rZW4uZXhwICogMTAwMCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgfVxuXG4gIGNsZWFyUHJlZmVyZW5jZXMoKSB7XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZS5jbGVhcigpO1xuICB9XG59XG4iLCI8aDEgbWF0LWRpYWxvZy10aXRsZSBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+e3snaWdvLmNvbnRleHQudXNlckJ1dHRvbi5pbmZvVGl0bGUnIHwgdHJhbnNsYXRlfX08L2gxPlxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPlxuICA8cD57eydpZ28uY29udGV4dC51c2VyQnV0dG9uLmRpYWxvZy51c2VyJyB8IHRyYW5zbGF0ZX19OiB7e3VzZXIuc291cmNlSWR9fTwvcD5cbiAgPHA+e3snaWdvLmNvbnRleHQudXNlckJ1dHRvbi5kaWFsb2cuZW1haWwnIHwgdHJhbnNsYXRlfX06IHt7dXNlci5lbWFpbH19PC9wPlxuICA8cD57eydpZ28uY29udGV4dC51c2VyQnV0dG9uLmRpYWxvZy5leHBpcmF0aW9uJyB8IHRyYW5zbGF0ZX19OiB7e2V4cH19PC9wPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiY2xlYXJQcmVmZXJlbmNlcygpXCI+XG4gICAge3snaWdvLmNvbnRleHQudXNlckJ1dHRvbi5kaWFsb2cuY2xlYXJQcmVmZXJlbmNlcycgfCB0cmFuc2xhdGV9fVxuICA8L2J1dHRvbj5cbiAgPGJyPlxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyXCI+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UoZmFsc2UpXCI+XG4gICAgT0tcbiAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==