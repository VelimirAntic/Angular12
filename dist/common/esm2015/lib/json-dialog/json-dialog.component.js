import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "../keyvalue/keyvalue.pipe";
function JsonDialogComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { obj: a0, baseKey: a1 }; };
function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const property_r6 = i0.ɵɵnextContext(2).$implicit;
    const baseKey_r4 = i0.ɵɵnextContext().baseKey;
    const ctx_r8 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, property_r6.value, ctx_r8.getKey(baseKey_r4, property_r6.key)));
} }
function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " : ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "span", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const property_r6 = i0.ɵɵnextContext(2).$implicit;
    const baseKey_r4 = i0.ɵɵnextContext().baseKey;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r10.getKey(baseKey_r4, property_r6.key));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", property_r6.value, i0.ɵɵsanitizeHtml);
} }
function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_Template, 2, 5, "ng-container", 8);
    i0.ɵɵtemplate(2, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_template_2_Template, 6, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r9 = i0.ɵɵreference(3);
    const property_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isObject(property_r6.value))("ngIfElse", _r9);
} }
function JsonDialogComponent_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const property_r6 = ctx.$implicit;
    const baseKey_r4 = i0.ɵɵnextContext().baseKey;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.ignoreKeys.indexOf(ctx_r5.getKey(baseKey_r4, property_r6.key)) === -1);
} }
function JsonDialogComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, JsonDialogComponent_ng_template_4_ng_container_0_Template, 2, 1, "ng-container", 6);
    i0.ɵɵpipe(1, "keyvalue");
} if (rf & 2) {
    const obj_r3 = ctx.obj;
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(1, 1, obj_r3));
} }
const _c1 = function (a0) { return { obj: a0 }; };
export class JsonDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    isObject(val) {
        return typeof val === 'object' && !Array.isArray(val);
    }
    getKey(baseKey, key) {
        return (baseKey ? baseKey + '.' : '') + key;
    }
}
JsonDialogComponent.ɵfac = function JsonDialogComponent_Factory(t) { return new (t || JsonDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
JsonDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: JsonDialogComponent, selectors: [["igo-json-dialog"]], decls: 9, vars: 5, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["loopObject", ""], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["notObject", ""], [1, "propertyValue", 3, "innerHtml"]], template: function JsonDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtemplate(3, JsonDialogComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        i0.ɵɵtemplate(4, JsonDialogComponent_ng_template_4_Template, 2, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelementStart(7, "button", 5);
        i0.ɵɵlistener("click", function JsonDialogComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(false); });
        i0.ɵɵtext(8, " OK ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c1, ctx.data));
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i2.NgTemplateOutlet, i1.MatDialogActions, i3.MatButton, i2.NgForOf, i2.NgIf], pipes: [i4.KeyValuePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonDialogComponent, [{
        type: Component,
        args: [{
                selector: 'igo-json-dialog',
                templateUrl: './json-dialog.component.html'
            }]
    }], function () { return [{ type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvanNvbi1kaWFsb2cvanNvbi1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvanNvbi1kaWFsb2cvanNvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0d4Qyx3QkFBa0Y7OztJQU8xRSx3QkFBb0k7Ozs7SUFEdEksNkJBQStEO0lBQzdELGlKQUFvSTtJQUN0SSwwQkFBZTs7Ozs7O0lBREUsZUFBNkI7SUFBN0Isc0NBQTZCLHNIQUFBOzs7SUFJNUMseUJBQUc7SUFBQSw0QkFBTTtJQUFBLHlCQUFHO0lBQUEsWUFBaUM7SUFBQSxpQkFBSTtJQUFDLG1CQUFFO0lBQUEsaUJBQU87SUFBQSwyQkFBZ0U7SUFBQSxpQkFBSTs7Ozs7SUFBbkgsZUFBaUM7SUFBakMsaUVBQWlDO0lBQTBDLGVBQTRCO0lBQTVCLGdFQUE0Qjs7O0lBUHZILDZCQUErRTtJQUU3RSxrSUFFZTtJQUVmLGlLQUVjO0lBRWhCLDBCQUFlOzs7OztJQVJFLGVBQWdDO0lBQWhDLHlEQUFnQyxpQkFBQTs7O0lBSG5ELDZCQUFzRDtJQUNwRCxtSEFVZTtJQUNqQiwwQkFBZTs7Ozs7SUFYRSxlQUE4RDtJQUE5RCxtR0FBOEQ7OztJQUQvRSxvR0FZZTs7OztJQVpvQixzREFBaUI7OztBREN4RCxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLFlBQW1CLFNBQTRDO1FBQTVDLGNBQVMsR0FBVCxTQUFTLENBQW1DO0lBQUcsQ0FBQztJQUVuRSxRQUFRLENBQUMsR0FBRztRQUNWLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHO1FBQ2pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM5QyxDQUFDOztzRkFiVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1BoQyw2QkFBNEM7UUFBQSxZQUFXO1FBQUEsaUJBQUs7UUFFNUQsOEJBQStDO1FBQzdDLHNGQUFrRjtRQUVsRixxSEFjYztRQUNoQixpQkFBTTtRQUVOLDhCQUF3QjtRQUN0QixpQ0FDeUM7UUFBakMsZ0dBQVMsb0JBQWdCLEtBQUssQ0FBQyxJQUFDO1FBQ3RDLG9CQUNGO1FBQUEsaUJBQVM7UUFDWCxpQkFBTTs7O1FBM0JzQyxlQUFXO1FBQVgsK0JBQVc7UUFHdEMsZUFBNkI7UUFBN0Isc0NBQTZCLGlFQUFBOzt1RkRJakMsbUJBQW1CO2NBSi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsOEJBQThCO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tanNvbi1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vanNvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpzb25EaWFsb2dDb21wb25lbnQge1xuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgcHVibGljIGRhdGE6IGFueTtcbiAgcHVibGljIGlnbm9yZUtleXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxKc29uRGlhbG9nQ29tcG9uZW50Pikge31cblxuICBpc09iamVjdCh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcbiAgfVxuXG4gIGdldEtleShiYXNlS2V5LCBrZXkpIHtcbiAgICByZXR1cm4gKGJhc2VLZXkgPyBiYXNlS2V5ICsgJy4nIDogJycpICsga2V5O1xuICB9XG59XG4iLCI8aDEgbWF0LWRpYWxvZy10aXRsZSBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+e3sgdGl0bGUgfX08L2gxPlxuXG48ZGl2IG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsb29wT2JqZWN0O2NvbnRleHQ6eyBvYmo6IGRhdGEgfVwiPjwvbmctY29udGFpbmVyPlxuXG4gIDxuZy10ZW1wbGF0ZSAjbG9vcE9iamVjdCBsZXQtb2JqPSdvYmonIGxldC1iYXNlS2V5PSdiYXNlS2V5Jz5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwcm9wZXJ0eSBvZiBvYmogfCBrZXl2YWx1ZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlnbm9yZUtleXMuaW5kZXhPZihnZXRLZXkoYmFzZUtleSwgcHJvcGVydHkua2V5KSkgPT09IC0xXCI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzT2JqZWN0KHByb3BlcnR5LnZhbHVlKTsgZWxzZSBub3RPYmplY3RcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibG9vcE9iamVjdDtjb250ZXh0Onsgb2JqOiBwcm9wZXJ0eS52YWx1ZSwgYmFzZUtleTogZ2V0S2V5KGJhc2VLZXksIHByb3BlcnR5LmtleSkgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI25vdE9iamVjdD5cbiAgICAgICAgICA8cD48c3Bhbj48Yj57e2dldEtleShiYXNlS2V5LCBwcm9wZXJ0eS5rZXkpfX08L2I+IDogPC9zcGFuPjxzcGFuIGNsYXNzPVwicHJvcGVydHlWYWx1ZVwiIFtpbm5lckh0bWxdPVwicHJvcGVydHkudmFsdWVcIj48L3NwYW4+PC9wPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuXG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgKGNsaWNrKT1cImRpYWxvZ1JlZi5jbG9zZShmYWxzZSlcIj5cbiAgICBPS1xuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19