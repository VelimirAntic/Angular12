import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ObjectUtils, Clipboard } from '@igo2/utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/tooltip";
import * as i8 from "@angular/material/icon";
import * as i9 from "@ngx-translate/core";
function ContextFormComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r0.prefix, "-");
} }
export class ContextFormComponent {
    constructor(formBuilder, languageService, messageService) {
        this.formBuilder = formBuilder;
        this.languageService = languageService;
        this.messageService = messageService;
        this._disabled = false;
        // TODO: replace any by ContextOptions or Context
        this.submitForm = new EventEmitter();
        this.clone = new EventEmitter();
        this.delete = new EventEmitter();
    }
    get btnSubmitText() {
        return this._btnSubmitText;
    }
    set btnSubmitText(value) {
        this._btnSubmitText = value;
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
        this.buildForm();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    ngOnInit() {
        this.buildForm();
    }
    handleFormSubmit(value) {
        let inputs = Object.assign({}, value);
        inputs = ObjectUtils.removeNull(inputs);
        inputs.uri = inputs.uri.replace(' ', '');
        if (inputs.uri) {
            inputs.uri = this.prefix + '-' + inputs.uri;
        }
        else {
            inputs.uri = this.prefix;
        }
        this.submitForm.emit(inputs);
    }
    copyTextToClipboard() {
        const text = this.prefix + '-' + this.form.value.uri.replace(' ', '');
        const successful = Clipboard.copy(text);
        if (successful) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.context.contextManager.dialog.copyTitle');
            const msg = translate.instant('igo.context.contextManager.dialog.copyMsg');
            this.messageService.success(msg, title);
        }
    }
    buildForm() {
        const context = this.context || {};
        const uriSplit = context.uri.split('-');
        this.prefix = uriSplit.shift();
        const uri = uriSplit.join('-');
        this.form = this.formBuilder.group({
            title: [context.title],
            uri: [uri || ' ']
        });
    }
}
ContextFormComponent.ɵfac = function ContextFormComponent_Factory(t) { return new (t || ContextFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i2.MessageService)); };
ContextFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextFormComponent, selectors: [["igo-context-form"]], inputs: { btnSubmitText: "btnSubmitText", context: "context", disabled: "disabled" }, outputs: { submitForm: "submitForm", clone: "clone", delete: "delete" }, decls: 19, vars: 18, consts: [[1, "igo-form", 3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "required", "", "maxlength", "128", "formControlName", "title", 3, "placeholder"], ["id", "uriInput", 1, "full-width"], ["class", "prefix", 4, "ngIf"], [1, "fieldWrapper"], ["matInput", "", "maxlength", "64", "floatLabel", "always", "formControlName", "uri", 3, "placeholder"], ["id", "copyButton", "type", "button", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", 3, "matTooltip", "click"], ["svgIcon", "content-copy"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], [1, "prefix"]], template: function ContextFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function ContextFormComponent_Template_form_ngSubmit_0_listener() { return ctx.handleFormSubmit(ctx.form.value); });
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵpipe(3, "translate");
        i0.ɵɵelementStart(4, "mat-error");
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-form-field", 3);
        i0.ɵɵtemplate(8, ContextFormComponent_span_8_Template, 2, 1, "span", 4);
        i0.ɵɵelementStart(9, "span", 5);
        i0.ɵɵelement(10, "input", 6);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 7);
        i0.ɵɵlistener("click", function ContextFormComponent_Template_button_click_12_listener() { return ctx.copyTextToClipboard(); });
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelement(14, "mat-icon", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 9);
        i0.ɵɵelementStart(16, "button", 10);
        i0.ɵɵtext(17);
        i0.ɵɵpipe(18, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 8, "igo.context.contextManager.form.title"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 10, "igo.context.contextManager.form.titleRequired"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.prefix);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(11, 12, "igo.context.contextManager.form.uri"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(13, 14, "igo.context.contextManager.form.copy"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", !ctx.form.valid || ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(18, 16, "igo.context.contextManager.form.edit"), " ");
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatFormField, i4.MatInput, i1.DefaultValueAccessor, i1.RequiredValidator, i1.MaxLengthValidator, i1.NgControlStatus, i1.FormControlName, i3.MatError, i5.NgIf, i6.MatButton, i7.MatTooltip, i8.MatIcon], pipes: [i9.TranslatePipe], styles: ["form[_ngcontent-%COMP%]{margin:10px}.full-width[_ngcontent-%COMP%]{width:100%}#uriInput[_ngcontent-%COMP%]   .fieldWrapper[_ngcontent-%COMP%]{display:block;overflow:hidden}#uriInput[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{float:left}#copyButton[_ngcontent-%COMP%]{width:24px;float:right;position:relative;top:-58px;left:5px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextFormComponent, [{
        type: Component,
        args: [{
                selector: 'igo-context-form',
                templateUrl: './context-form.component.html',
                styleUrls: ['./context-form.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.LanguageService }, { type: i2.MessageService }]; }, { btnSubmitText: [{
            type: Input
        }], context: [{
            type: Input
        }], disabled: [{
            type: Input
        }], submitForm: [{
            type: Output
        }], clone: [{
            type: Output
        }], delete: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LW1hbmFnZXIvY29udGV4dC1mb3JtL2NvbnRleHQtZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYW5hZ2VyL2NvbnRleHQtZm9ybS9jb250ZXh0LWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUcvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7O0lDV2pELGdDQUFvQztJQUFBLFlBQVc7SUFBQSxpQkFBTzs7O0lBQWxCLGVBQVc7SUFBWCw2Q0FBVzs7QURGbkQsTUFBTSxPQUFPLG9CQUFvQjtJQXFDL0IsWUFDVSxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxjQUE4QjtRQUY5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVmhDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFMUIsaURBQWlEO1FBQ3ZDLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUMsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXRELENBQUM7SUFyQ0osSUFDSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxj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O1FBQ2IsaUJBQWlCO1FBRWpCLHlDQUFpRDtRQUMvQyx1RUFBc0Q7UUFDdEQsK0JBQTJCO1FBQ3pCLDRCQUkyQjs7UUFDN0IsaUJBQU87UUFDVCxpQkFBaUI7UUFFakIsa0NBUWtDO1FBQWhDLGtHQUFTLHlCQUFxQixJQUFDOztRQUMvQiwrQkFBNEM7UUFDOUMsaUJBQVM7UUFFVCwrQkFBbUM7UUFDakMsbUNBR3VDO1FBQ3JDLGFBQ0Y7O1FBQUEsaUJBQVM7UUFDWCxpQkFBTTtRQUVSLGlCQUFPOztRQTdDZ0Isb0NBQWtCO1FBTTlCLGVBQW1FO1FBQW5FLDJGQUFtRTtRQUcxRSxlQUNEO1FBREMsdUdBQ0Q7UUFJUSxlQUFZO1FBQVosaUNBQVk7UUFLWixlQUFpRTtRQUFqRSwyRkFBaUU7UUFXeEUsZUFBaUU7UUFBakUsMkZBQWlFO1FBVS9ELGVBQW9DO1FBQXBDLDBEQUFvQztRQUNwQyxlQUNGO1FBREUsK0ZBQ0Y7O3VGRDlCUyxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDO3lIQU1LLGFBQWE7a0JBRGhCLEtBQUs7WUFVRixPQUFPO2tCQURWLEtBQUs7WUFXRixRQUFRO2tCQURYLEtBQUs7WUFVSSxVQUFVO2tCQUFuQixNQUFNO1lBQ0csS0FBSztrQkFBZCxNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgT2JqZWN0VXRpbHMsIENsaXBib2FyZCB9IGZyb20gJ0BpZ28yL3V0aWxzJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9zaGFyZWQvY29udGV4dC5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tY29udGV4dC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRleHQtZm9ybS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHByZWZpeDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBidG5TdWJtaXRUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2J0blN1Ym1pdFRleHQ7XG4gIH1cbiAgc2V0IGJ0blN1Ym1pdFRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J0blN1Ym1pdFRleHQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9idG5TdWJtaXRUZXh0OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbnRleHQoKTogQ29udGV4dCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gIH1cbiAgc2V0IGNvbnRleHQodmFsdWU6IENvbnRleHQpIHtcbiAgICB0aGlzLl9jb250ZXh0ID0gdmFsdWU7XG4gICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgfVxuICBwcml2YXRlIF9jb250ZXh0OiBDb250ZXh0O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8vIFRPRE86IHJlcGxhY2UgYW55IGJ5IENvbnRleHRPcHRpb25zIG9yIENvbnRleHRcbiAgQE91dHB1dCgpIHN1Ym1pdEZvcm06IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xvbmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUZvcm1TdWJtaXQodmFsdWUpIHtcbiAgICBsZXQgaW5wdXRzID0gT2JqZWN0LmFzc2lnbih7fSwgdmFsdWUpO1xuICAgIGlucHV0cyA9IE9iamVjdFV0aWxzLnJlbW92ZU51bGwoaW5wdXRzKTtcbiAgICBpbnB1dHMudXJpID0gaW5wdXRzLnVyaS5yZXBsYWNlKCcgJywgJycpO1xuICAgIGlmIChpbnB1dHMudXJpKSB7XG4gICAgICBpbnB1dHMudXJpID0gdGhpcy5wcmVmaXggKyAnLScgKyBpbnB1dHMudXJpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dHMudXJpID0gdGhpcy5wcmVmaXg7XG4gICAgfVxuICAgIHRoaXMuc3VibWl0Rm9ybS5lbWl0KGlucHV0cyk7XG4gIH1cblxuICBwdWJsaWMgY29weVRleHRUb0NsaXBib2FyZCgpIHtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5wcmVmaXggKyAnLScgKyB0aGlzLmZvcm0udmFsdWUudXJpLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgY29uc3Qgc3VjY2Vzc2Z1bCA9IENsaXBib2FyZC5jb3B5KHRleHQpO1xuICAgIGlmIChzdWNjZXNzZnVsKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgICBjb25zdCB0aXRsZSA9IHRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZGlhbG9nLmNvcHlUaXRsZSdcbiAgICAgICk7XG4gICAgICBjb25zdCBtc2cgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmRpYWxvZy5jb3B5TXNnJ1xuICAgICAgKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2Vzcyhtc2csIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybSgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZXh0OiBhbnkgPSB0aGlzLmNvbnRleHQgfHwge307XG5cbiAgICBjb25zdCB1cmlTcGxpdCA9IGNvbnRleHQudXJpLnNwbGl0KCctJyk7XG4gICAgdGhpcy5wcmVmaXggPSB1cmlTcGxpdC5zaGlmdCgpO1xuICAgIGNvbnN0IHVyaSA9IHVyaVNwbGl0LmpvaW4oJy0nKTtcblxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFtjb250ZXh0LnRpdGxlXSxcbiAgICAgIHVyaTogW3VyaSB8fCAnICddXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxmb3JtIGNsYXNzPVwiaWdvLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIlxuICAobmdTdWJtaXQpPVwiaGFuZGxlRm9ybVN1Ym1pdChmb3JtLnZhbHVlKVwiPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcmVxdWlyZWRcbiAgICAgICAgICAgbWF4bGVuZ3RoPVwiMTI4XCJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5mb3JtLnRpdGxlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XG4gICA8bWF0LWVycm9yPlxuICAgIHt7ICdpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5mb3JtLnRpdGxlUmVxdWlyZWQnIHwgdHJhbnNsYXRlIH19XG4gICA8L21hdC1lcnJvcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQgaWQ9XCJ1cmlJbnB1dFwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgIDxzcGFuICpuZ0lmPVwicHJlZml4XCIgY2xhc3M9XCJwcmVmaXhcIj57e3ByZWZpeH19LTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImZpZWxkV3JhcHBlclwiPlxuICAgICAgPGlucHV0IG1hdElucHV0XG4gICAgICAgICAgIG1heGxlbmd0aD1cIjY0XCJcbiAgICAgICAgICAgZmxvYXRMYWJlbCA9IFwiYWx3YXlzXCJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5mb3JtLnVyaScgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ1cmlcIj5cbiAgICA8L3NwYW4+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPGJ1dHRvblxuICAgIGlkPVwiY29weUJ1dHRvblwiXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgbWF0LWljb24tYnV0dG9uXG4gICAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICBbbWF0VG9vbHRpcF09XCInaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZm9ybS5jb3B5JyB8IHRyYW5zbGF0ZVwiXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAoY2xpY2spPVwiY29weVRleHRUb0NsaXBib2FyZCgpXCI+XG4gICAgPG1hdC1pY29uIHN2Z0ljb249XCJjb250ZW50LWNvcHlcIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cblxuICA8ZGl2IGNsYXNzPVwiaWdvLWZvcm0tYnV0dG9uLWdyb3VwXCI+XG4gICAgPGJ1dHRvblxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgW2Rpc2FibGVkXT1cIiFmb3JtLnZhbGlkIHx8IGRpc2FibGVkXCI+XG4gICAgICB7eyAnaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZm9ybS5lZGl0JyB8IHRyYW5zbGF0ZSB9fVxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuPC9mb3JtPlxuIl19