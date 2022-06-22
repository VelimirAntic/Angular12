import { Component, Input } from '@angular/core';
import { uuid, Clipboard } from '@igo2/utils';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@igo2/auth";
import * as i3 from "../shared/share-map.service";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/tooltip";
import * as i10 from "@angular/material/icon";
import * as i11 from "@ngx-translate/core";
function ShareMapApiComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r0.userId, "-");
} }
function ShareMapApiComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r1.form.valid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "igo.context.shareMap.button"), " ");
} }
function ShareMapApiComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function ShareMapApiComponent_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.updateContextShared(ctx_r4.form.value); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.context.shareMap.refreshBtn"), " ");
} }
function ShareMapApiComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelement(2, "textarea", 15, 16);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementStart(5, "button", 17);
    i0.ɵɵlistener("click", function ShareMapApiComponent_div_20_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8); const _r6 = i0.ɵɵreference(3); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.copyTextToClipboard(_r6); });
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelement(7, "mat-icon", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(4, 3, "igo.context.shareMap.placeholderLink"))("value", ctx_r3.url);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(6, 5, "igo.context.shareMap.copy"));
} }
export class ShareMapApiComponent {
    constructor(languageService, messageService, auth, shareMapService, formBuilder) {
        this.languageService = languageService;
        this.messageService = messageService;
        this.auth = auth;
        this.shareMapService = shareMapService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.auth.authenticate$.subscribe(auth => {
            const decodeToken = this.auth.decodeToken();
            this.userId = decodeToken.user ? decodeToken.user.id : undefined;
            this.buildForm();
        });
    }
    createUrl(values = {}) {
        const inputs = Object.assign({}, values);
        inputs.uri = this.userId ? `${this.userId}-${values.uri}` : values.uri;
        this.url = this.shareMapService.getUrlWithApi(inputs);
        this.shareMapService.createContextShared(this.map, inputs).subscribe(rep => {
            this.idContextShared = rep.id;
            const title = this.languageService.translate.instant('igo.context.contextManager.dialog.saveTitle');
            const msg = this.languageService.translate.instant('igo.context.contextManager.dialog.saveMsg', {
                value: inputs.title
            });
            this.messageService.success(msg, title);
        }, err => {
            err.error.title = this.languageService.translate.instant('igo.context.shareMap.errorTitle');
            this.messageService.showError(err);
        });
    }
    updateContextShared(values = {}) {
        const inputs = Object.assign({}, values);
        inputs.uri = this.userId ? `${this.userId}-${values.uri}` : values.uri;
        this.shareMapService.updateContextShared(this.map, inputs, this.idContextShared).subscribe(rep => {
            const title = this.languageService.translate.instant('igo.context.contextManager.dialog.saveTitle');
            const msg = this.languageService.translate.instant('igo.context.contextManager.dialog.saveMsg', {
                value: inputs.title
            });
            this.messageService.success(msg, title);
        }, err => {
            err.error.title = this.languageService.translate.instant('igo.context.shareMap.errorTitle');
            this.messageService.showError(err);
        });
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
    buildForm() {
        this.url = undefined;
        const id = uuid();
        let title = 'Partage ';
        title += this.userId ? `(${this.userId}-${id})` : `(${id})`;
        this.form = this.formBuilder.group({
            title: [title],
            uri: [id]
        });
    }
}
ShareMapApiComponent.ɵfac = function ShareMapApiComponent_Factory(t) { return new (t || ShareMapApiComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i1.MessageService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.ShareMapService), i0.ɵɵdirectiveInject(i4.FormBuilder)); };
ShareMapApiComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShareMapApiComponent, selectors: [["igo-share-map-api"]], inputs: { map: "map" }, decls: 21, vars: 18, consts: [[1, "igo-form", 3, "formGroup", "ngSubmit"], [1, "igo-input-container"], ["matInput", "", "required", "", "formControlName", "title", 3, "placeholder"], ["id", "uriInput", 1, "igo-input-container"], ["class", "prefix", 4, "ngIf"], [1, "fieldWrapper"], ["matInput", "", "required", "", "formControlName", "uri", 3, "readonly", "placeholder"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "submit", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"], ["class", "igo-input-container linkToShare", 4, "ngIf"], [1, "prefix"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "type", "button", 3, "click"], [1, "igo-input-container", "linkToShare"], ["matInput", "", "readonly", "", "rows", "3", 1, "textAreaWithButton", 3, "placeholder", "value"], ["textArea", ""], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", 3, "matTooltip", "click"], ["svgIcon", "content-copy"]], template: function ShareMapApiComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function ShareMapApiComponent_Template_form_ngSubmit_0_listener() { return ctx.createUrl(ctx.form.value); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementStart(5, "mat-error");
        i0.ɵɵtext(6);
        i0.ɵɵpipe(7, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 3);
        i0.ɵɵelementStart(9, "mat-form-field");
        i0.ɵɵtemplate(10, ShareMapApiComponent_span_10_Template, 2, 1, "span", 4);
        i0.ɵɵelementStart(11, "span", 5);
        i0.ɵɵelement(12, "input", 6);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-error");
        i0.ɵɵtext(15);
        i0.ɵɵpipe(16, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 7);
        i0.ɵɵtemplate(18, ShareMapApiComponent_button_18_Template, 3, 4, "button", 8);
        i0.ɵɵtemplate(19, ShareMapApiComponent_button_19_Template, 3, 3, "button", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, ShareMapApiComponent_div_20_Template, 9, 7, "div", 10);
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(4, 10, "igo.context.contextManager.form.title"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 12, "igo.context.contextManager.form.titleRequired"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.userId);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("readonly", !ctx.userId)("placeholder", i0.ɵɵpipeBind1(13, 14, "igo.context.contextManager.form.uri"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 16, "igo.context.contextManager.form.uriRequired"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.url);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.url);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.url);
    } }, directives: [i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.FormGroupDirective, i5.MatFormField, i6.MatInput, i4.DefaultValueAccessor, i4.RequiredValidator, i4.NgControlStatus, i4.FormControlName, i5.MatError, i7.NgIf, i8.MatButton, i9.MatTooltip, i10.MatIcon], pipes: [i11.TranslatePipe], styles: ["@charset \"UTF-8\";mat-form-field[_ngcontent-%COMP%]{width:100%}#uriInput[_ngcontent-%COMP%]   .fieldWrapper[_ngcontent-%COMP%]{display:block;overflow:hidden}#uriInput[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{float:left}.linkToShare\\a0[_ngcontent-%COMP%] {padding:25px 5px 5px}.linkToShare\\a0[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;width:100%;line-height:1.3;height:40px;overflow-y:hidden;word-wrap:normal;word-break:break-all}.linkToShare\\a0[_ngcontent-%COMP%]   textarea.textAreaWithButton[_ngcontent-%COMP%]{width:calc(100% - 60px)}.linkToShare\\a0[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{float:right;margin:-10px 0}.igo-form[_ngcontent-%COMP%]{padding:20px 5px 5px}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center;padding-top:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShareMapApiComponent, [{
        type: Component,
        args: [{
                selector: 'igo-share-map-api',
                templateUrl: './share-map-api.component.html',
                styleUrls: ['./share-map-api.component.scss']
            }]
    }], function () { return [{ type: i1.LanguageService }, { type: i1.MessageService }, { type: i2.AuthService }, { type: i3.ShareMapService }, { type: i4.FormBuilder }]; }, { map: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtbWFwLWFwaS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvc2hhcmUtbWFwL3NoYXJlLW1hcC9zaGFyZS1tYXAtYXBpLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9zaGFyZS1tYXAvc2hhcmUtbWFwL3NoYXJlLW1hcC1hcGkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDYXhDLGdDQUFvQztJQUFBLFlBQVc7SUFBQSxpQkFBTzs7O0lBQWxCLGVBQVc7SUFBWCw2Q0FBVzs7O0lBY2pELGtDQUcyQjtJQUN6QixZQUNGOztJQUFBLGlCQUFTOzs7SUFGUCw2Q0FBd0I7SUFDeEIsZUFDRjtJQURFLG9GQUNGOzs7O0lBQ0Esa0NBRzRDO0lBQTFDLHNOQUF5QztJQUN6QyxZQUNGOztJQUFBLGlCQUFTOztJQURQLGVBQ0Y7SUFERSx3RkFDRjs7OztJQUlKLCtCQUF5RDtJQUN2RCxzQ0FBZ0I7SUFDZCxtQ0FHMkI7O0lBQzNCLGtDQU0wQztJQUF4QyxvT0FBdUM7O0lBQ3ZDLCtCQUE0QztJQUM5QyxpQkFBUztJQUNYLGlCQUFpQjtJQUNuQixzQkFBSztJQWhCTCxpQkFBeUQ7OztJQUluRCxlQUFrRTtJQUFsRSwwRkFBa0UscUJBQUE7SUFNbEUsZUFBc0Q7SUFBdEQsOEVBQXNEOztBRHhDNUQsTUFBTSxPQUFPLG9CQUFvQjtJQVMvQixZQUNVLGVBQWdDLEVBQ2hDLGNBQThCLEVBQzlCLElBQWlCLEVBQ2pCLGVBQWdDLEVBQ2hDLFdBQXdCO1FBSnhCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDL0IsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDakUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxTQUFjLEVBQUU7UUFDeEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FDbEUsR0FBRyxDQUFDLEVBQUU7WUFDSixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDOUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUNsRCw2Q0FBNkMsQ0FDOUMsQ0FBQztZQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRTtnQkFDOUYsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2FBQ3BCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUU7WUFDSixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ3RELGlDQUFpQyxDQUNsQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsbUJBQW1CLENBQUMsU0FBYyxFQUFFO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN2RSxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQ3hGLEdBQUcsQ0FBQyxFQUFFO1lBQ0osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUNsRCw2Q0FBNkMsQ0FDOUMsQ0FBQztZQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRTtnQkFDOUYsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2FBQ3BCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUU7WUFDSixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ3RELGlDQUFpQyxDQUNsQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsbUJBQW1CLENBQUMsUUFBUTtRQUMxQixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksVUFBVSxFQUFFO1lBQ2QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDakQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDN0IsdUNBQXVDLENBQ3hDLENBQUM7WUFDRixNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUNyQixNQUFNLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNsQixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDdkIsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2pDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNWLENBQUMsQ0FBQztJQUNMLENBQUM7O3dGQTVGVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQ2ZqQywrQkFDcUM7UUFBbkMscUdBQVksNkJBQXFCLElBQUM7UUFFbEMsOEJBQWlDO1FBQy9CLHNDQUFnQjtRQUNkLDJCQUUrQjs7UUFDaEMsaUNBQVc7UUFDVixZQUNEOztRQUFBLGlCQUFZO1FBQ2IsaUJBQWlCO1FBQ25CLGlCQUFNO1FBRU4sOEJBQStDO1FBQzdDLHNDQUFnQjtRQUNkLHlFQUFzRDtRQUN0RCxnQ0FBMkI7UUFDekIsNEJBRzJCOztRQUM1QixpQkFBTztRQUNULGtDQUFXO1FBQ1YsYUFDRDs7UUFBQSxpQkFBWTtRQUNiLGlCQUFpQjtRQUNuQixpQkFBTTtRQUVOLCtCQUFtQztRQUNqQyw2RUFLUztRQUNULDZFQUtTO1FBQ1gsaUJBQU07UUFDUixpQkFBTztRQUVQLHdFQUF5RDs7UUE3Q2xDLG9DQUFrQjtRQU01QixlQUFtRTtRQUFuRSw0RkFBbUU7UUFHMUUsZUFDRDtRQURDLHVHQUNEO1FBTVEsZUFBWTtRQUFaLGlDQUFZO1FBR1osZUFBb0I7UUFBcEIsc0NBQW9CLDhFQUFBO1FBSzNCLGVBQ0Q7UUFEQyxzR0FDRDtRQUtRLGVBQVU7UUFBViwrQkFBVTtRQU1WLGVBQVM7UUFBVCw4QkFBUztRQVNoQixlQUFTO1FBQVQsOEJBQVM7O3VGRDlCRixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDO2lMQUlVLEdBQUc7a0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgdXVpZCwgQ2xpcGJvYXJkIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UsIExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAaWdvMi9hdXRoJztcbmltcG9ydCB0eXBlIHsgSWdvTWFwIH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuaW1wb3J0IHsgU2hhcmVNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlLW1hcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXNoYXJlLW1hcC1hcGknLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hhcmUtbWFwLWFwaS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NoYXJlLW1hcC1hcGkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZU1hcEFwaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgcHVibGljIHVybDogc3RyaW5nO1xuICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gIHB1YmxpYyBpZENvbnRleHRTaGFyZWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzaGFyZU1hcFNlcnZpY2U6IFNoYXJlTWFwU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZSQuc3Vic2NyaWJlKGF1dGggPT4ge1xuICAgICAgY29uc3QgZGVjb2RlVG9rZW4gPSB0aGlzLmF1dGguZGVjb2RlVG9rZW4oKTtcbiAgICAgIHRoaXMudXNlcklkID0gZGVjb2RlVG9rZW4udXNlciA/IGRlY29kZVRva2VuLnVzZXIuaWQgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlVXJsKHZhbHVlczogYW55ID0ge30pIHtcbiAgICBjb25zdCBpbnB1dHMgPSBPYmplY3QuYXNzaWduKHt9LCB2YWx1ZXMpO1xuICAgIGlucHV0cy51cmkgPSB0aGlzLnVzZXJJZCA/IGAke3RoaXMudXNlcklkfS0ke3ZhbHVlcy51cml9YCA6IHZhbHVlcy51cmk7XG4gICAgdGhpcy51cmwgPSB0aGlzLnNoYXJlTWFwU2VydmljZS5nZXRVcmxXaXRoQXBpKGlucHV0cyk7XG4gICAgdGhpcy5zaGFyZU1hcFNlcnZpY2UuY3JlYXRlQ29udGV4dFNoYXJlZCh0aGlzLm1hcCwgaW5wdXRzKS5zdWJzY3JpYmUoXG4gICAgICByZXAgPT4ge1xuICAgICAgICB0aGlzLmlkQ29udGV4dFNoYXJlZCA9IHJlcC5pZDtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZGlhbG9nLnNhdmVUaXRsZSdcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbXNnID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmRpYWxvZy5zYXZlTXNnJywge1xuICAgICAgICAgIHZhbHVlOiBpbnB1dHMudGl0bGVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2Vzcyhtc2csIHRpdGxlKTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBlcnIuZXJyb3IudGl0bGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmNvbnRleHQuc2hhcmVNYXAuZXJyb3JUaXRsZSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zaG93RXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgdXBkYXRlQ29udGV4dFNoYXJlZCh2YWx1ZXM6IGFueSA9IHt9KSB7XG4gICAgY29uc3QgaW5wdXRzID0gT2JqZWN0LmFzc2lnbih7fSwgdmFsdWVzKTtcbiAgICBpbnB1dHMudXJpID0gdGhpcy51c2VySWQgPyBgJHt0aGlzLnVzZXJJZH0tJHt2YWx1ZXMudXJpfWAgOiB2YWx1ZXMudXJpO1xuICAgIHRoaXMuc2hhcmVNYXBTZXJ2aWNlLnVwZGF0ZUNvbnRleHRTaGFyZWQodGhpcy5tYXAsIGlucHV0cywgdGhpcy5pZENvbnRleHRTaGFyZWQpLnN1YnNjcmliZShcbiAgICAgIHJlcCA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmRpYWxvZy5zYXZlVGl0bGUnXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1zZyA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5kaWFsb2cuc2F2ZU1zZycsIHtcbiAgICAgICAgICB2YWx1ZTogaW5wdXRzLnRpdGxlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnN1Y2Nlc3MobXNnLCB0aXRsZSk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IHtcbiAgICAgICAgZXJyLmVycm9yLnRpdGxlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgJ2lnby5jb250ZXh0LnNoYXJlTWFwLmVycm9yVGl0bGUnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2hvd0Vycm9yKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNvcHlUZXh0VG9DbGlwYm9hcmQodGV4dEFyZWEpIHtcbiAgICBjb25zdCBzdWNjZXNzZnVsID0gQ2xpcGJvYXJkLmNvcHkodGV4dEFyZWEpO1xuICAgIGlmIChzdWNjZXNzZnVsKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgICBjb25zdCB0aXRsZSA9IHRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnaWdvLmNvbnRleHQuc2hhcmVNYXAuZGlhbG9nLmNvcHlUaXRsZSdcbiAgICAgICk7XG4gICAgICBjb25zdCBtc2cgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmNvbnRleHQuc2hhcmVNYXAuZGlhbG9nLmNvcHlNc2cnKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2Vzcyhtc2csIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICBidWlsZEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy51cmwgPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQgPSB1dWlkKCk7XG4gICAgbGV0IHRpdGxlID0gJ1BhcnRhZ2UgJztcbiAgICB0aXRsZSArPSB0aGlzLnVzZXJJZCA/IGAoJHt0aGlzLnVzZXJJZH0tJHtpZH0pYCA6IGAoJHtpZH0pYDtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHRpdGxlOiBbdGl0bGVdLFxuICAgICAgdXJpOiBbaWRdXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxmb3JtIGNsYXNzPVwiaWdvLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIlxuICAobmdTdWJtaXQpPVwiY3JlYXRlVXJsKGZvcm0udmFsdWUpXCI+XG5cbiAgPGRpdiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXJcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcmVxdWlyZWRcbiAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmZvcm0udGl0bGUnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxuICAgICA8bWF0LWVycm9yPlxuICAgICAge3sgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmZvcm0udGl0bGVSZXF1aXJlZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgPC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBpZD1cInVyaUlucHV0XCIgY2xhc3M9XCJpZ28taW5wdXQtY29udGFpbmVyXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPHNwYW4gKm5nSWY9XCJ1c2VySWRcIiBjbGFzcz1cInByZWZpeFwiPnt7dXNlcklkfX0tPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmaWVsZFdyYXBwZXJcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHJlcXVpcmVkXG4gICAgICAgICAgICAgW3JlYWRvbmx5XT1cIiF1c2VySWRcIlxuICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZm9ybS51cmknIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ1cmlcIj5cbiAgICAgICA8L3NwYW4+XG4gICAgIDxtYXQtZXJyb3I+XG4gICAgICB7eyAnaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZm9ybS51cmlSZXF1aXJlZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgPC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImlnby1mb3JtLWJ1dHRvbi1ncm91cFwiPlxuICAgIDxidXR0b24gKm5nSWY9XCIhdXJsXCJcbiAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiPlxuICAgICAge3sgJ2lnby5jb250ZXh0LnNoYXJlTWFwLmJ1dHRvbicgfCB0cmFuc2xhdGUgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uICpuZ0lmPVwidXJsXCJcbiAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIChjbGljayk9XCJ1cGRhdGVDb250ZXh0U2hhcmVkKGZvcm0udmFsdWUpXCI+XG4gICAgICB7eyAnaWdvLmNvbnRleHQuc2hhcmVNYXAucmVmcmVzaEJ0bicgfCB0cmFuc2xhdGUgfX1cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Zvcm0+XG5cbjxkaXYgKm5nSWY9XCJ1cmxcIiBjbGFzcz1cImlnby1pbnB1dC1jb250YWluZXIgbGlua1RvU2hhcmVcIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDx0ZXh0YXJlYSAjdGV4dEFyZWEgbWF0SW5wdXQgcmVhZG9ubHkgcm93cz1cIjNcIlxuICAgICAgY2xhc3M9XCJ0ZXh0QXJlYVdpdGhCdXR0b25cIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cIidpZ28uY29udGV4dC5zaGFyZU1hcC5wbGFjZWhvbGRlckxpbmsnIHwgdHJhbnNsYXRlXCJcbiAgICAgIFt2YWx1ZV09XCJ1cmxcIj48L3RleHRhcmVhPlxuICAgIDxidXR0b25cbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgICAgW21hdFRvb2x0aXBdPVwiJ2lnby5jb250ZXh0LnNoYXJlTWFwLmNvcHknIHwgdHJhbnNsYXRlXCJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAoY2xpY2spPVwiY29weVRleHRUb0NsaXBib2FyZCh0ZXh0QXJlYSlcIj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiY29udGVudC1jb3B5XCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjxkaXY+XG4iXX0=