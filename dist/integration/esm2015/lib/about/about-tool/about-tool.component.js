import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ToolComponent } from '@igo2/common';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@igo2/auth";
import * as i3 from "@angular/common/http";
import * as i4 from "@igo2/common";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/menu";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/material/icon";
import * as i10 from "@ngx-translate/core";
function AboutToolComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function AboutToolComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.openGuide(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "mat-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.loading)("matTooltip", i0.ɵɵpipeBind1(1, 3, "igo.integration.aboutTool.trainingGuideTooltip"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, "igo.integration.aboutTool.trainingGuide"));
} }
function AboutToolComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "mat-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(5);
    i0.ɵɵproperty("disabled", ctx_r1.loading)("matTooltip", i0.ɵɵpipeBind1(1, 4, "igo.integration.aboutTool.trainingGuideTooltip"))("matMenuTriggerFor", _r2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 6, "igo.integration.aboutTool.trainingGuide"));
} }
function AboutToolComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function AboutToolComponent_button_6_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const guide_r7 = restoredCtx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.openGuide(guide_r7); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const guide_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.formatFileName(guide_r7));
} }
function AboutToolComponent_igo_custom_html_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-custom-html", 6);
    i0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("html", i0.ɵɵpipeBind1(1, 1, ctx_r4.headerHtml));
} }
const _c0 = function (a0) { return { version: a0 }; };
let AboutToolComponent = class AboutToolComponent {
    constructor(configService, auth, http, cdRef, languageService) {
        this.configService = configService;
        this.auth = auth;
        this.http = http;
        this.cdRef = cdRef;
        this.languageService = languageService;
        this._discoverTitleInLocale = 'IGO';
        this.discoverTitleInLocale$ = of(this._discoverTitleInLocale);
        this._html = 'igo.integration.aboutTool.html';
        this._headerHtml = this.languageService.translate.instant('igo.integration.aboutTool.headerHtml');
        this.loading = false;
        this.version = configService.getConfig('version');
        this.baseUrlProfil = configService.getConfig('storage.url');
        this.baseUrlGuide = configService.getConfig('depot.url') + configService.getConfig('depot.guideUrl');
    }
    get headerHtml() {
        return this._headerHtml;
    }
    set headerHtml(value) {
        this._headerHtml = Array.isArray(value) ? value.join('\n') : value;
    }
    get html() {
        return this._html;
    }
    set html(value) {
        this._html = Array.isArray(value) ? value.join('\n') : value;
    }
    get discoverTitleInLocale() {
        return this._discoverTitleInLocale;
    }
    set discoverTitleInLocale(value) {
        this._discoverTitleInLocale = value;
        this.discoverTitleInLocale$ = of(value);
    }
    ngOnInit() {
        if (this.auth.authenticated && this.configService.getConfig('context.url')) {
            this.http.get(this.baseUrlProfil).subscribe((profil) => {
                const recast = profil;
                this.trainingGuideURLs = recast.guides;
                this.cdRef.detectChanges();
            });
        }
        else if (this.auth.authenticated &&
            !this.configService.getConfig('context.url') &&
            this.configService.getConfig('depot.trainingGuides')) {
            this.trainingGuideURLs = this.configService.getConfig('depot.trainingGuides');
        }
    }
    openGuide(guide) {
        this.loading = true;
        const url = guide ?
            this.baseUrlGuide + guide + '?' :
            this.baseUrlGuide + this.trainingGuideURLs[0] + '?';
        this.http
            .get(url, {
            responseType: 'blob'
        })
            .subscribe(() => {
            this.loading = false;
            window.open(url, '_blank');
            this.cdRef.detectChanges();
        });
    }
    formatFileName(name) {
        name = name.split('_').join(' ');
        const index = name.indexOf('.');
        name = name.slice(0, index);
        return name;
    }
};
AboutToolComponent.ɵfac = function AboutToolComponent_Factory(t) { return new (t || AboutToolComponent)(i0.ɵɵdirectiveInject(i1.ConfigService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.LanguageService)); };
AboutToolComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AboutToolComponent, selectors: [["igo-about-tool"]], inputs: { headerHtml: "headerHtml", html: "html", discoverTitleInLocale: "discoverTitleInLocale", trainingGuideURLs: "trainingGuideURLs" }, decls: 10, vars: 11, consts: [["mat-raised-button", "", "tourToStart", "global", "menuIsOpen", "true", "styleButton", "raised", 3, "discoverTitleInLocale$"], ["class", "training-guide-button", "mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "disabled", "matTooltip", "click", 4, "ngIf"], ["class", "training-guide-button", "mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "disabled", "matTooltip", "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "mat-typography", 3, "html", 4, "ngIf"], [1, "mat-typography", 3, "html"], ["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "training-guide-button", 3, "disabled", "matTooltip", "click"], ["svgIcon", "file-document"], ["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "training-guide-button", 3, "disabled", "matTooltip", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]], template: function AboutToolComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "p");
        i0.ɵɵelement(1, "igo-interactive-tour", 0);
        i0.ɵɵtemplate(2, AboutToolComponent_button_2_Template, 6, 7, "button", 1);
        i0.ɵɵtemplate(3, AboutToolComponent_button_3_Template, 6, 8, "button", 2);
        i0.ɵɵelementStart(4, "mat-menu", null, 3);
        i0.ɵɵtemplate(6, AboutToolComponent_button_6_Template, 2, 1, "button", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, AboutToolComponent_igo_custom_html_7_Template, 2, 3, "igo-custom-html", 5);
        i0.ɵɵelement(8, "igo-custom-html", 6);
        i0.ɵɵpipe(9, "translate");
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("discoverTitleInLocale$", ctx.discoverTitleInLocale$);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.trainingGuideURLs && ctx.trainingGuideURLs.length === 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.trainingGuideURLs && ctx.trainingGuideURLs.length > 1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.trainingGuideURLs);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.headerHtml !== "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("html", i0.ɵɵpipeBind2(9, 6, ctx.html, i0.ɵɵpureFunction1(9, _c0, ctx.version)));
    } }, directives: [i4.InteractiveTourComponent, i5.NgIf, i6.MatMenu, i5.NgForOf, i4.CustomHtmlComponent, i7.MatButton, i8.MatTooltip, i9.MatIcon, i6.MatMenuTrigger, i6.MatMenuItem], pipes: [i10.TranslatePipe], styles: ["igo-interactive-tour[_ngcontent-%COMP%]{margin-left:20px}.training-guide-button[_ngcontent-%COMP%]{margin-left:5px;background-color:#1976d2;color:#fff;padding:0 12px}"] });
AboutToolComponent = __decorate([
    ToolComponent({
        name: 'about',
        title: 'igo.integration.tools.about',
        icon: 'help-circle'
    })
], AboutToolComponent);
export { AboutToolComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutToolComponent, [{
        type: Component,
        args: [{
                selector: 'igo-about-tool',
                templateUrl: './about-tool.component.html',
                styleUrls: ['./about-tool.component.scss']
            }]
    }], function () { return [{ type: i1.ConfigService }, { type: i2.AuthService }, { type: i3.HttpClient }, { type: i0.ChangeDetectorRef }, { type: i1.LanguageService }]; }, { headerHtml: [{
            type: Input
        }], html: [{
            type: Input
        }], discoverTitleInLocale: [{
            type: Input
        }], trainingGuideURLs: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQtdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2Fib3V0L2Fib3V0LXRvb2wvYWJvdXQtdG9vbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2Fib3V0L2Fib3V0LXRvb2wvYWJvdXQtdG9vbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFxQixTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNLMUIsaUNBT3dCO0lBQXRCLHdMQUFxQjs7SUFDckIsNEJBQU07SUFBQSxZQUF5RDs7SUFBQSxpQkFBTztJQUN0RSw4QkFBNkM7SUFDL0MsaUJBQVM7OztJQUxQLHlDQUFvQixzRkFBQTtJQUdkLGVBQXlEO0lBQXpELHFGQUF5RDs7O0lBSWpFLGlDQU82Qjs7SUFDM0IsNEJBQU07SUFBQSxZQUF5RDs7SUFBQSxpQkFBTztJQUN0RSw4QkFBNkM7SUFDL0MsaUJBQVM7Ozs7SUFMUCx5Q0FBb0Isc0ZBQUEsMEJBQUE7SUFHZCxlQUF5RDtJQUF6RCxxRkFBeUQ7Ozs7SUFLL0Qsa0NBQXlGO0lBQTNCLDRQQUEwQjtJQUFDLFlBQXlCO0lBQUEsaUJBQVM7Ozs7SUFBbEMsZUFBeUI7SUFBekIscURBQXlCOzs7SUFHcEgscUNBRWtCOzs7O0lBRGhCLDhEQUErQjs7O0lEbkJwQixrQkFBa0IsU0FBbEIsa0JBQWtCO0lBdUM3QixZQUNTLGFBQTRCLEVBQzVCLElBQWlCLEVBQ2hCLElBQWdCLEVBQ2hCLEtBQXdCLEVBQ3hCLGVBQWdDO1FBSmpDLGtCQUFh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QUE2RTtRQWExRCxlQUFvQjtRQUFwQiwrQ0FBb0I7UUFHOUIsZUFBdUI7UUFBdkIsNENBQXVCO1FBS3ZDLGVBQTZDO1FBQTdDLDhGQUE2Qzs7QUR2QmxDLGtCQUFrQjtJQVY5QixhQUFhLENBQUM7UUFDYixJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSw2QkFBNkI7UUFDcEMsSUFBSSxFQUFFLGFBQWE7S0FDcEIsQ0FBQztHQU1XLGtCQUFrQixDQXVGOUI7U0F2Rlksa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDO2lMQUdLLFVBQVU7a0JBRGIsS0FBSztZQVNGLElBQUk7a0JBRFAsS0FBSztZQVdGLHFCQUFxQjtrQkFEeEIsS0FBSztZQVNHLGlCQUFpQjtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UsIFZlcnNpb24gfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgdHlwZSB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvYXV0aCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5AVG9vbENvbXBvbmVudCh7XG4gIG5hbWU6ICdhYm91dCcsXG4gIHRpdGxlOiAnaWdvLmludGVncmF0aW9uLnRvb2xzLmFib3V0JyxcbiAgaWNvbjogJ2hlbHAtY2lyY2xlJ1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1hYm91dC10b29sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0LXRvb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hYm91dC10b29sLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRUb29sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZ2V0IGhlYWRlckh0bWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlckh0bWw7XG4gIH1cbiAgc2V0IGhlYWRlckh0bWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hlYWRlckh0bWwgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJ1xcbicpIDogdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgaHRtbCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHRtbDtcbiAgfVxuICBzZXQgaHRtbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faHRtbCA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignXFxuJykgOiB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9kaXNjb3ZlclRpdGxlSW5Mb2NhbGU6IHN0cmluZyA9ICdJR08nO1xuICBwdWJsaWMgZGlzY292ZXJUaXRsZUluTG9jYWxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gb2YodGhpcy5fZGlzY292ZXJUaXRsZUluTG9jYWxlKTtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzY292ZXJUaXRsZUluTG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNjb3ZlclRpdGxlSW5Mb2NhbGU7XG4gIH1cbiAgc2V0IGRpc2NvdmVyVGl0bGVJbkxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzY292ZXJUaXRsZUluTG9jYWxlID0gdmFsdWU7XG4gICAgdGhpcy5kaXNjb3ZlclRpdGxlSW5Mb2NhbGUkID0gb2YodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KCkgdHJhaW5pbmdHdWlkZVVSTHM7XG5cbiAgcHVibGljIHZlcnNpb246IFZlcnNpb247XG4gIHByaXZhdGUgX2h0bWw6IHN0cmluZyA9ICdpZ28uaW50ZWdyYXRpb24uYWJvdXRUb29sLmh0bWwnO1xuICBwcml2YXRlIF9oZWFkZXJIdG1sOiBzdHJpbmcgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCgnaWdvLmludGVncmF0aW9uLmFib3V0VG9vbC5oZWFkZXJIdG1sJyk7XG5cbiAgcHJpdmF0ZSBiYXNlVXJsUHJvZmlsO1xuICBwcml2YXRlIGJhc2VVcmxHdWlkZTtcblxuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSkge1xuICAgIHRoaXMudmVyc2lvbiA9IGNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCd2ZXJzaW9uJyk7XG4gICAgdGhpcy5iYXNlVXJsUHJvZmlsID0gY29uZmlnU2VydmljZS5nZXRDb25maWcoJ3N0b3JhZ2UudXJsJyk7XG4gICAgdGhpcy5iYXNlVXJsR3VpZGUgPSBjb25maWdTZXJ2aWNlLmdldENvbmZpZygnZGVwb3QudXJsJykgKyBjb25maWdTZXJ2aWNlLmdldENvbmZpZygnZGVwb3QuZ3VpZGVVcmwnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmF1dGguYXV0aGVudGljYXRlZCAmJiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCdjb250ZXh0LnVybCcpKSB7XG4gICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybFByb2ZpbCkuc3Vic2NyaWJlKChwcm9maWwpID0+IHtcbiAgICAgICAgY29uc3QgcmVjYXN0ID0gcHJvZmlsIGFzIGFueTtcbiAgICAgICAgdGhpcy50cmFpbmluZ0d1aWRlVVJMcyA9IHJlY2FzdC5ndWlkZXM7XG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZWQgJiZcbiAgICAgICAgIXRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoJ2NvbnRleHQudXJsJykgJiZcbiAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygnZGVwb3QudHJhaW5pbmdHdWlkZXMnKSkge1xuICAgICAgICAgIHRoaXMudHJhaW5pbmdHdWlkZVVSTHMgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCdkZXBvdC50cmFpbmluZ0d1aWRlcycpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5HdWlkZShndWlkZT8pIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHVybCA9IGd1aWRlID9cbiAgICAgIHRoaXMuYmFzZVVybEd1aWRlICsgZ3VpZGUgKyAnPycgOlxuICAgICAgdGhpcy5iYXNlVXJsR3VpZGUgKyB0aGlzLnRyYWluaW5nR3VpZGVVUkxzWzBdICsgJz8nO1xuICAgIHRoaXMuaHR0cFxuICAgIC5nZXQodXJsLCB7XG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgIH0pXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JtYXRGaWxlTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICBuYW1lID0gbmFtZS5zcGxpdCgnXycpLmpvaW4oJyAnKTtcbiAgICBjb25zdCBpbmRleCA9IG5hbWUuaW5kZXhPZignLicpO1xuICAgIG5hbWUgPSBuYW1lLnNsaWNlKDAsIGluZGV4KTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxufVxuIiwiPHA+PC9wPlxuPGlnby1pbnRlcmFjdGl2ZS10b3VyXG4gIG1hdC1yYWlzZWQtYnV0dG9uXG4gIHRvdXJUb1N0YXJ0PVwiZ2xvYmFsXCJcbiAgbWVudUlzT3Blbj10cnVlXG4gIHN0eWxlQnV0dG9uPVwicmFpc2VkXCJcbiAgW2Rpc2NvdmVyVGl0bGVJbkxvY2FsZSRdPVwiZGlzY292ZXJUaXRsZUluTG9jYWxlJFwiPlxuPC9pZ28taW50ZXJhY3RpdmUtdG91cj5cblxuPGJ1dHRvbiAqbmdJZj1cImF1dGguYXV0aGVudGljYXRlZCAmJiB0cmFpbmluZ0d1aWRlVVJMcyAmJiB0cmFpbmluZ0d1aWRlVVJMcy5sZW5ndGggPT09IDFcIlxuICBjbGFzcz1cInRyYWluaW5nLWd1aWRlLWJ1dHRvblwiXG4gIG1hdC1yYWlzZWQtYnV0dG9uXG4gIHRvb2x0aXAtcG9zaXRpb249XCJiZWxvd1wiXG4gIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICBbZGlzYWJsZWRdPVwibG9hZGluZ1wiXG4gIFttYXRUb29sdGlwXT1cIidpZ28uaW50ZWdyYXRpb24uYWJvdXRUb29sLnRyYWluaW5nR3VpZGVUb29sdGlwJyB8IHRyYW5zbGF0ZVwiXG4gIChjbGljayk9XCJvcGVuR3VpZGUoKVwiPlxuICA8c3Bhbj57eydpZ28uaW50ZWdyYXRpb24uYWJvdXRUb29sLnRyYWluaW5nR3VpZGUnIHwgdHJhbnNsYXRlfX08L3NwYW4+XG4gIDxtYXQtaWNvbiBzdmdJY29uPVwiZmlsZS1kb2N1bWVudFwiPjwvbWF0LWljb24+XG48L2J1dHRvbj5cblxuPGJ1dHRvbiAqbmdJZj1cImF1dGguYXV0aGVudGljYXRlZCAmJiB0cmFpbmluZ0d1aWRlVVJMcyAmJiB0cmFpbmluZ0d1aWRlVVJMcy5sZW5ndGggPiAxXCJcbiAgY2xhc3M9XCJ0cmFpbmluZy1ndWlkZS1idXR0b25cIlxuICBtYXQtcmFpc2VkLWJ1dHRvblxuICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgW2Rpc2FibGVkXT1cImxvYWRpbmdcIlxuICBbbWF0VG9vbHRpcF09XCInaWdvLmludGVncmF0aW9uLmFib3V0VG9vbC50cmFpbmluZ0d1aWRlVG9vbHRpcCcgfCB0cmFuc2xhdGVcIlxuICBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPlxuICA8c3Bhbj57eydpZ28uaW50ZWdyYXRpb24uYWJvdXRUb29sLnRyYWluaW5nR3VpZGUnIHwgdHJhbnNsYXRlfX08L3NwYW4+XG4gIDxtYXQtaWNvbiBzdmdJY29uPVwiZmlsZS1kb2N1bWVudFwiPjwvbWF0LWljb24+XG48L2J1dHRvbj5cblxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxuICA8YnV0dG9uICpuZ0Zvcj1cImxldCBndWlkZSBvZiB0cmFpbmluZ0d1aWRlVVJMc1wiIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9wZW5HdWlkZShndWlkZSlcIj57e2Zvcm1hdEZpbGVOYW1lKGd1aWRlKX19PC9idXR0b24+XG48L21hdC1tZW51PlxuXG48aWdvLWN1c3RvbS1odG1sICpuZ0lmPVwiaGVhZGVySHRtbCAhPT0gJydcIiBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCJcbiAgW2h0bWxdPVwiaGVhZGVySHRtbCB8IHRyYW5zbGF0ZVwiPlxuPC9pZ28tY3VzdG9tLWh0bWw+XG5cbjxpZ28tY3VzdG9tLWh0bWwgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiXG4gIFtodG1sXT1cImh0bWwgfCB0cmFuc2xhdGU6IHt2ZXJzaW9uOiB2ZXJzaW9ufVwiPlxuPC9pZ28tY3VzdG9tLWh0bWw+XG4iXX0=