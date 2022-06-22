import { Component, Input } from '@angular/core';
import { Clipboard } from '@igo2/utils';
import { combineLatest } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "../shared/share-map.service";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/common";
import * as i8 from "@ngx-translate/core";
function ShareMapUrlComponent_h4_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.included"));
} }
function ShareMapUrlComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.context"));
} }
function ShareMapUrlComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.center"));
} }
function ShareMapUrlComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.zoom"));
} }
function ShareMapUrlComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.addedLayers"));
} }
function ShareMapUrlComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.visibleInvisible"));
} }
function ShareMapUrlComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.excluded"));
} }
function ShareMapUrlComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.order"));
} }
function ShareMapUrlComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.opacity"));
} }
function ShareMapUrlComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.filterOgc"));
} }
function ShareMapUrlComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.filterTime"));
} }
export class ShareMapUrlComponent {
    constructor(languageService, messageService, shareMapService, cdRef) {
        this.languageService = languageService;
        this.messageService = messageService;
        this.shareMapService = shareMapService;
        this.cdRef = cdRef;
        this.publicShareOption = {
            layerlistControls: { querystring: '' }
        };
    }
    ngOnInit() {
        this.resetUrl();
        this.mapState$$ = combineLatest([
            this.map.viewController.state$,
            this.map.status$
        ]).subscribe(c => {
            this.resetUrl();
            this.cdRef.detectChanges();
        });
    }
    ngAfterViewInit() {
        this.resetUrl();
    }
    ngOnDestroy() {
        this.mapState$$.unsubscribe();
    }
    resetUrl(values = {}) {
        this.url = this.shareMapService.getUrlWithoutApi(this.map, this.publicShareOption);
    }
    copyTextToClipboard(textArea) {
        const successful = Clipboard.copy(textArea);
        if (successful) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.context.shareMap.dialog.copyTitle');
            const msg = translate.instant('igo.context.shareMap.dialog.copyMsg');
            this.messageService.success(msg, title);
        }
    }
}
ShareMapUrlComponent.ɵfac = function ShareMapUrlComponent_Factory(t) { return new (t || ShareMapUrlComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i1.MessageService), i0.ɵɵdirectiveInject(i2.ShareMapService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ShareMapUrlComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShareMapUrlComponent, selectors: [["igo-share-map-url"]], inputs: { map: "map" }, decls: 37, vars: 40, consts: [[1, "igo-input-container", "linkToShare"], ["matInput", "", "readonly", "", "rows", "3", 3, "placeholder", "value"], ["textArea", ""], [1, "igo-form-button-group"], ["mat-raised-button", "", 3, "click"], ["svgIcon", "content-copy"], [1, "mat-typography"], [4, "ngIf"]], template: function ShareMapUrlComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelement(2, "textarea", 1, 2);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function ShareMapUrlComponent_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r12); const _r0 = i0.ɵɵreference(3); return ctx.copyTextToClipboard(_r0); });
        i0.ɵɵelement(7, "mat-icon", 5);
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div");
        i0.ɵɵelement(11, "br");
        i0.ɵɵelementStart(12, "section", 6);
        i0.ɵɵtemplate(13, ShareMapUrlComponent_h4_13_Template, 3, 3, "h4", 7);
        i0.ɵɵpipe(14, "translate");
        i0.ɵɵelementStart(15, "ul");
        i0.ɵɵtemplate(16, ShareMapUrlComponent_li_16_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(17, "translate");
        i0.ɵɵtemplate(18, ShareMapUrlComponent_li_18_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(19, "translate");
        i0.ɵɵtemplate(20, ShareMapUrlComponent_li_20_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(21, "translate");
        i0.ɵɵtemplate(22, ShareMapUrlComponent_li_22_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(23, "translate");
        i0.ɵɵtemplate(24, ShareMapUrlComponent_li_24_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(25, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(26, ShareMapUrlComponent_h4_26_Template, 3, 3, "h4", 7);
        i0.ɵɵpipe(27, "translate");
        i0.ɵɵelementStart(28, "ul");
        i0.ɵɵtemplate(29, ShareMapUrlComponent_li_29_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(30, "translate");
        i0.ɵɵtemplate(31, ShareMapUrlComponent_li_31_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(32, "translate");
        i0.ɵɵtemplate(33, ShareMapUrlComponent_li_33_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(34, "translate");
        i0.ɵɵtemplate(35, ShareMapUrlComponent_li_35_Template, 3, 3, "li", 7);
        i0.ɵɵpipe(36, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(4, 14, "igo.context.shareMap.placeholderLink"))("value", ctx.url);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 16, "igo.context.shareMap.copy"), " ");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(14, 18, "igo.context.shareMap.included") !== "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(17, 20, "igo.context.shareMap.context") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(19, 22, "igo.context.shareMap.center") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(21, 24, "igo.context.shareMap.zoom") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(23, 26, "igo.context.shareMap.addedLayers") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(25, 28, "igo.context.shareMap.visibleInvisible") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(27, 30, "igo.context.shareMap.excluded") !== "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(30, 32, "igo.context.shareMap.order") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(32, 34, "igo.context.shareMap.opacity") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(34, 36, "igo.context.shareMap.filterOgc") !== "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(36, 38, "igo.context.shareMap.filterTime") !== "");
    } }, directives: [i3.MatFormField, i4.MatInput, i5.MatButton, i6.MatIcon, i7.NgIf], pipes: [i8.TranslatePipe], styles: ["@charset \"UTF-8\";mat-form-field[_ngcontent-%COMP%]{width:100%}.linkToShare\\a0[_ngcontent-%COMP%] {padding:25px 5px 5px}.linkToShare\\a0[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;width:100%;line-height:1.3;height:40px;overflow-y:hidden;word-wrap:normal;word-break:break-all}.linkToShare\\a0[_ngcontent-%COMP%]   textarea.textAreaWithButton[_ngcontent-%COMP%]{width:calc(100% - 60px)}.linkToShare\\a0[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{float:right;margin:-10px 0}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center;padding-top:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShareMapUrlComponent, [{
        type: Component,
        args: [{
                selector: 'igo-share-map-url',
                templateUrl: './share-map-url.component.html',
                styleUrls: ['./share-map-url.component.scss']
            }]
    }], function () { return [{ type: i1.LanguageService }, { type: i1.MessageService }, { type: i2.ShareMapService }, { type: i0.ChangeDetectorRef }]; }, { map: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtbWFwLXVybC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvc2hhcmUtbWFwL3NoYXJlLW1hcC9zaGFyZS1tYXAtdXJsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9zaGFyZS1tYXAvc2hhcmUtbWFwL3NoYXJlLW1hcC11cmwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUF3QyxNQUFNLGVBQWUsQ0FBQztBQUV0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBS3hDLE9BQU8sRUFBRSxhQUFhLEVBQWdCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7OztJQ1czQywwQkFBK0Q7SUFBQSxZQUErQzs7SUFBQSxpQkFBSzs7SUFBcEQsZUFBK0M7SUFBL0MsMkVBQStDOzs7SUFFNUcsMEJBQThEO0lBQUEsWUFBOEM7O0lBQUEsaUJBQUs7O0lBQW5ELGVBQThDO0lBQTlDLDBFQUE4Qzs7O0lBQzVHLDBCQUE2RDtJQUFBLFlBQTZDOztJQUFBLGlCQUFLOztJQUFsRCxlQUE2QztJQUE3Qyx5RUFBNkM7OztJQUMxRywwQkFBMkQ7SUFBQSxZQUEyQzs7SUFBQSxpQkFBSzs7SUFBaEQsZUFBMkM7SUFBM0MsdUVBQTJDOzs7SUFDdEcsMEJBQWtFO0lBQUEsWUFBa0Q7O0lBQUEsaUJBQUs7O0lBQXZELGVBQWtEO0lBQWxELDhFQUFrRDs7O0lBQ3BILDBCQUF1RTtJQUFBLFlBQXVEOztJQUFBLGlCQUFLOztJQUE1RCxlQUF1RDtJQUF2RCxtRkFBdUQ7OztJQUdsSSwwQkFBK0Q7SUFBQSxZQUErQzs7SUFBQSxpQkFBSzs7SUFBcEQsZUFBK0M7SUFBL0MsMkVBQStDOzs7SUFFNUcsMEJBQTREO0lBQUEsWUFB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QUs7UUFDUCxpQkFBVTtRQUNaLGlCQUFNO1FBQ1IsaUJBQU07O1FBakNBLGVBQWtFO1FBQWxFLDJGQUFrRSxrQkFBQTtRQVNsRSxlQUNGO1FBREUsbUZBQ0Y7UUFLUyxlQUF3RDtRQUF4RCxxRkFBd0Q7UUFFdEQsZUFBdUQ7UUFBdkQsb0ZBQXVEO1FBQ3ZELGVBQXNEO1FBQXRELG1GQUFzRDtRQUN0RCxlQUFvRDtRQUFwRCxpRkFBb0Q7UUFDcEQsZUFBMkQ7UUFBM0Qsd0ZBQTJEO1FBQzNELGVBQWdFO1FBQWhFLDZGQUFnRTtRQUdwRSxlQUF3RDtRQUF4RCxxRkFBd0Q7UUFFdEQsZUFBcUQ7UUFBckQsa0ZBQXFEO1FBQ3JELGVBQXVEO1FBQXZELG9GQUF1RDtRQUN2RCxlQUF5RDtRQUF6RCxzRkFBeUQ7UUFDekQsZUFBMEQ7UUFBMUQsdUZBQTBEOzt1RkRsQjFELG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7NkpBSVUsR0FBRztrQkFBWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsaXBib2FyZCB9IGZyb20gJ0BpZ28yL3V0aWxzJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB0eXBlIHsgSWdvTWFwIH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuaW1wb3J0IHsgU2hhcmVNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlLW1hcC5zZXJ2aWNlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tc2hhcmUtbWFwLXVybCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGFyZS1tYXAtdXJsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2hhcmUtbWFwLXVybC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlTWFwVXJsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIG1hcFN0YXRlJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoKSBtYXA6IElnb01hcDtcblxuICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBwdWJsaWNTaGFyZU9wdGlvbiA9IHtcbiAgICBsYXllcmxpc3RDb250cm9sczogeyBxdWVyeXN0cmluZzogJycgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzaGFyZU1hcFNlcnZpY2U6IFNoYXJlTWFwU2VydmljZSxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldFVybCgpO1xuICAgIHRoaXMubWFwU3RhdGUkJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5tYXAudmlld0NvbnRyb2xsZXIuc3RhdGUkLFxuICAgICAgdGhpcy5tYXAuc3RhdHVzJF0pLnN1YnNjcmliZShjID0+IHtcbiAgICAgICAgdGhpcy5yZXNldFVybCgpO1xuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRVcmwoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubWFwU3RhdGUkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVzZXRVcmwodmFsdWVzOiBhbnkgPSB7fSkge1xuICAgIHRoaXMudXJsID0gdGhpcy5zaGFyZU1hcFNlcnZpY2UuZ2V0VXJsV2l0aG91dEFwaSh0aGlzLm1hcCwgdGhpcy5wdWJsaWNTaGFyZU9wdGlvbik7XG4gIH1cblxuICBjb3B5VGV4dFRvQ2xpcGJvYXJkKHRleHRBcmVhKSB7XG4gICAgY29uc3Qgc3VjY2Vzc2Z1bCA9IENsaXBib2FyZC5jb3B5KHRleHRBcmVhKTtcbiAgICBpZiAoc3VjY2Vzc2Z1bCkge1xuICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlO1xuICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LnNoYXJlTWFwLmRpYWxvZy5jb3B5VGl0bGUnXG4gICAgICApO1xuICAgICAgY29uc3QgbXNnID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5jb250ZXh0LnNoYXJlTWFwLmRpYWxvZy5jb3B5TXNnJyk7XG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnN1Y2Nlc3MobXNnLCB0aXRsZSk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaWdvLWlucHV0LWNvbnRhaW5lciBsaW5rVG9TaGFyZVwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPHRleHRhcmVhICN0ZXh0QXJlYSBtYXRJbnB1dCByZWFkb25seSByb3dzPVwiM1wiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiJ2lnby5jb250ZXh0LnNoYXJlTWFwLnBsYWNlaG9sZGVyTGluaycgfCB0cmFuc2xhdGVcIlxuICAgICAgW3ZhbHVlXT1cInVybFwiPjwvdGV4dGFyZWE+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPGRpdiBjbGFzcz1cImlnby1mb3JtLWJ1dHRvbi1ncm91cFwiPlxuICAgIDxidXR0b25cbiAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAoY2xpY2spPVwiY29weVRleHRUb0NsaXBib2FyZCh0ZXh0QXJlYSlcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiY29udGVudC1jb3B5XCI+PC9tYXQtaWNvbj5cbiAgICAgIHt7ICdpZ28uY29udGV4dC5zaGFyZU1hcC5jb3B5JyB8IHRyYW5zbGF0ZSB9fVxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8YnIvPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5cbiAgICAgICAgPGg0ICpuZ0lmPVwiKCdpZ28uY29udGV4dC5zaGFyZU1hcC5pbmNsdWRlZCcgfCB0cmFuc2xhdGUpIT09JydcIj57eydpZ28uY29udGV4dC5zaGFyZU1hcC5pbmNsdWRlZCcgfCB0cmFuc2xhdGV9fTwvaDQ+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgKm5nSWY9XCIoJ2lnby5jb250ZXh0LnNoYXJlTWFwLmNvbnRleHQnIHwgdHJhbnNsYXRlKSE9PScnXCI+e3snaWdvLmNvbnRleHQuc2hhcmVNYXAuY29udGV4dCcgfCB0cmFuc2xhdGV9fTwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiKCdpZ28uY29udGV4dC5zaGFyZU1hcC5jZW50ZXInIHwgdHJhbnNsYXRlKSE9PScnXCI+e3snaWdvLmNvbnRleHQuc2hhcmVNYXAuY2VudGVyJyB8IHRyYW5zbGF0ZX19PC9saT5cbiAgICAgICAgICA8bGkgKm5nSWY9XCIoJ2lnby5jb250ZXh0LnNoYXJlTWFwLnpvb20nIHwgdHJhbnNsYXRlKSE9PScnXCI+e3snaWdvLmNvbnRleHQuc2hhcmVNYXAuem9vbScgfCB0cmFuc2xhdGV9fTwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiKCdpZ28uY29udGV4dC5zaGFyZU1hcC5hZGRlZExheWVycycgfCB0cmFuc2xhdGUpIT09JydcIj57eydpZ28uY29udGV4dC5zaGFyZU1hcC5hZGRlZExheWVycycgfCB0cmFuc2xhdGV9fTwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiKCdpZ28uY29udGV4dC5zaGFyZU1hcC52aXNpYmxlSW52aXNpYmxlJyB8IHRyYW5zbGF0ZSkhPT0nJ1wiPnt7J2lnby5jb250ZXh0LnNoYXJlTWFwLnZpc2libGVJbnZpc2libGUnIHwgdHJhbnNsYXRlfX08L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICA8aDQgKm5nSWY9XCIoJ2lnby5jb250ZXh0LnNoYXJlTWFwLmV4Y2x1ZGVkJyB8IHRyYW5zbGF0ZSkhPT0nJ1wiPnt7J2lnby5jb250ZXh0LnNoYXJlTWFwLmV4Y2x1ZGVkJyB8IHRyYW5zbGF0ZX19PC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpICpuZ0lmPVwiKCdpZ28uY29udGV4dC5zaGFyZU1hcC5vcmRlcicgfCB0cmFuc2xhdGUpIT09JydcIj57eydpZ28uY29udGV4dC5zaGFyZU1hcC5vcmRlcicgfCB0cmFuc2xhdGV9fTwvbGk+XG4gICAgICAgIDxsaSAqbmdJZj1cIignaWdvLmNvbnRleHQuc2hhcmVNYXAub3BhY2l0eScgfCB0cmFuc2xhdGUpIT09JydcIj57eydpZ28uY29udGV4dC5zaGFyZU1hcC5vcGFjaXR5JyB8IHRyYW5zbGF0ZX19PC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiKCdpZ28uY29udGV4dC5zaGFyZU1hcC5maWx0ZXJPZ2MnIHwgdHJhbnNsYXRlKSE9PScnXCI+e3snaWdvLmNvbnRleHQuc2hhcmVNYXAuZmlsdGVyT2djJyB8IHRyYW5zbGF0ZX19PC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiKCdpZ28uY29udGV4dC5zaGFyZU1hcC5maWx0ZXJUaW1lJyB8IHRyYW5zbGF0ZSkhPT0nJ1wiPnt7J2lnby5jb250ZXh0LnNoYXJlTWFwLmZpbHRlclRpbWUnIHwgdHJhbnNsYXRlfX08L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=