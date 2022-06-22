import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { userAgent } from '@igo2/utils';
import { getEntityTitle, getEntityIcon } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/icon";
import * as i5 from "@igo2/common";
import * as i6 from "@ngx-translate/core";
function FeatureDetailsComponent_table_0_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "mat-icon", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r4.icon);
} }
function FeatureDetailsComponent_table_0_tr_2_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "a", 8);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const property_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", property_r3.value, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(3, 3, "igo.geo.targetHtmlUrl"), " ", ctx_r5.title, "");
} }
function FeatureDetailsComponent_table_0_tr_2_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const property_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", property_r3.key, " ");
} }
function FeatureDetailsComponent_table_0_tr_2_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 10);
} if (rf & 2) {
    const property_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", property_r3.value, i0.ɵɵsanitizeHtml);
} }
function FeatureDetailsComponent_table_0_tr_2_td_5_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 13);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "secureImage");
} if (rf & 2) {
    const property_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(1, 1, i0.ɵɵpipeBind1(2, 3, property_r3.value)), i0.ɵɵsanitizeUrl);
} }
function FeatureDetailsComponent_table_0_tr_2_td_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 1, "igo.geo.targetHtmlUrl"), " ");
} }
function FeatureDetailsComponent_table_0_tr_2_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "a", 8);
    i0.ɵɵtemplate(2, FeatureDetailsComponent_table_0_tr_2_td_5_img_2_Template, 3, 5, "img", 11);
    i0.ɵɵtemplate(3, FeatureDetailsComponent_table_0_tr_2_td_5_ng_template_3_Template, 3, 3, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r14 = i0.ɵɵreference(4);
    const property_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", property_r3.value, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isImg(property_r3.value))("ngIfElse", _r14);
} }
function FeatureDetailsComponent_table_0_tr_2_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td", 10);
    i0.ɵɵpipe(1, "json");
} if (rf & 2) {
    const property_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, property_r3.value), i0.ɵɵsanitizeHtml);
} }
function FeatureDetailsComponent_table_0_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, FeatureDetailsComponent_table_0_tr_2_td_1_Template, 2, 1, "td", 4);
    i0.ɵɵtemplate(2, FeatureDetailsComponent_table_0_tr_2_td_2_Template, 4, 5, "td", 4);
    i0.ɵɵtemplate(3, FeatureDetailsComponent_table_0_tr_2_td_3_Template, 2, 1, "td", 5);
    i0.ɵɵtemplate(4, FeatureDetailsComponent_table_0_tr_2_td_4_Template, 1, 1, "td", 6);
    i0.ɵɵtemplate(5, FeatureDetailsComponent_table_0_tr_2_td_5_Template, 5, 3, "td", 4);
    i0.ɵɵtemplate(6, FeatureDetailsComponent_table_0_tr_2_td_6_Template, 2, 3, "td", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const property_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.feature.properties.target === "_blank" && property_r3.key === "url");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.feature.properties.target === "_blank" && property_r3.key === "url");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.feature.properties.target === undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.feature.properties.target === undefined && !ctx_r2.isObject(property_r3.value) && !ctx_r2.isUrl(property_r3.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.feature.properties.target === undefined && !ctx_r2.isObject(property_r3.value) && ctx_r2.isUrl(property_r3.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.feature.properties.target === undefined && ctx_r2.isObject(property_r3.value));
} }
function FeatureDetailsComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 2);
    i0.ɵɵelementStart(1, "tbody");
    i0.ɵɵtemplate(2, FeatureDetailsComponent_table_0_tr_2_Template, 7, 6, "tr", 3);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 1, ctx_r0.filterFeatureProperties(ctx_r0.feature)));
} }
function FeatureDetailsComponent_iframe_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 14);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("srcdoc", ctx_r1.htmlSanitizer(ctx_r1.feature.properties), i0.ɵɵsanitizeHtml)("src", ctx_r1.urlSanitizer(ctx_r1.feature.properties.url), i0.ɵɵsanitizeResourceUrl);
} }
export class FeatureDetailsComponent {
    constructor(cdRef, sanitizer, networkService) {
        this.cdRef = cdRef;
        this.sanitizer = sanitizer;
        this.networkService = networkService;
        this.unsubscribe$ = new Subject();
        this.ready = false;
        this.routeEvent = new EventEmitter();
        this.selectFeature = new EventEmitter();
        this.htmlDisplayEvent = new EventEmitter();
        this.networkService.currentState().pipe(takeUntil(this.unsubscribe$)).subscribe((state) => {
            this.state = state;
        });
    }
    get source() {
        return this._source;
    }
    set source(value) {
        this._source = value;
        this.cdRef.detectChanges();
    }
    get feature() {
        return this._feature;
    }
    set feature(value) {
        this._feature = value;
        this.cdRef.detectChanges();
        this.selectFeature.emit();
    }
    /**
     * @internal
     */
    get title() {
        return getEntityTitle(this.feature);
    }
    /**
     * @internal
     */
    get icon() {
        return getEntityIcon(this.feature) || 'link';
    }
    ngOnInit() {
        this.ready = true;
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    urlSanitizer(value) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    isHtmlDisplay() {
        if (this.feature && this.isObject(this.feature.properties) && this.feature.properties.target === 'iframe') {
            this.htmlDisplayEvent.emit(true);
            return true;
        }
        else {
            this.htmlDisplayEvent.emit(false);
            return false;
        }
    }
    htmlSanitizer(value) {
        if (!value.body || userAgent.getBrowserName() === 'Internet Explorer') {
            return;
        }
        const regexBase = /<base href="[\w:\/\.]+">/;
        if (!regexBase.test(value.body)) {
            const url = new URL(value.url, window.location.origin);
            value.body = value.body.replace('<head>', `<head><base href="${url.origin}">`);
        }
        return this.sanitizer.bypassSecurityTrustHtml(value.body);
    }
    isObject(value) {
        return typeof value === 'object';
    }
    isUrl(value) {
        if (typeof value === 'string') {
            return (value.slice(0, 8) === 'https://' || value.slice(0, 7) === 'http://');
        }
        else {
            return false;
        }
    }
    isImg(value) {
        if (this.isUrl(value)) {
            return (['jpg', 'png', 'gif'].includes(value.split('.').pop().toLowerCase()));
        }
        else {
            return false;
        }
    }
    filterFeatureProperties(feature) {
        const allowedFieldsAndAlias = feature.meta ? feature.meta.alias : undefined;
        const properties = {};
        let offlineButtonState;
        if (this.map) {
            this.map.offlineButtonToggle$.pipe(takeUntil(this.unsubscribe$)).subscribe(state => {
                offlineButtonState = state;
            });
        }
        if (feature.properties && feature.properties.Route && this.toolbox && !this.toolbox.getTool('directions')) {
            delete feature.properties.Route;
        }
        if (allowedFieldsAndAlias) {
            Object.keys(allowedFieldsAndAlias).forEach(field => {
                properties[allowedFieldsAndAlias[field]] = feature.properties[field];
            });
            return properties;
        }
        else if (offlineButtonState !== undefined) {
            if (!offlineButtonState) {
                if (this.state.connection && feature.meta && feature.meta.excludeAttribute) {
                    const excludeAttribute = feature.meta.excludeAttribute;
                    excludeAttribute.forEach(attribute => {
                        delete feature.properties[attribute];
                    });
                }
                else if (!this.state.connection && feature.meta && feature.meta.excludeAttributeOffline) {
                    const excludeAttributeOffline = feature.meta.excludeAttributeOffline;
                    excludeAttributeOffline.forEach(attribute => {
                        delete feature.properties[attribute];
                    });
                }
            }
            else {
                if (feature.meta && feature.meta.excludeAttributeOffline) {
                    const excludeAttributeOffline = feature.meta.excludeAttributeOffline;
                    excludeAttributeOffline.forEach(attribute => {
                        delete feature.properties[attribute];
                    });
                }
            }
        }
        else {
            if (this.state.connection && feature.meta && feature.meta.excludeAttribute) {
                const excludeAttribute = feature.meta.excludeAttribute;
                excludeAttribute.forEach(attribute => {
                    delete feature.properties[attribute];
                });
            }
            else if (!this.state.connection && feature.meta && feature.meta.excludeAttributeOffline) {
                const excludeAttributeOffline = feature.meta.excludeAttributeOffline;
                excludeAttributeOffline.forEach(attribute => {
                    delete feature.properties[attribute];
                });
            }
        }
        return feature.properties;
    }
}
FeatureDetailsComponent.ɵfac = function FeatureDetailsComponent_Factory(t) { return new (t || FeatureDetailsComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.NetworkService)); };
FeatureDetailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeatureDetailsComponent, selectors: [["igo-feature-details"]], inputs: { source: "source", map: "map", toolbox: "toolbox", feature: "feature" }, outputs: { routeEvent: "routeEvent", selectFeature: "selectFeature", htmlDisplayEvent: "htmlDisplayEvent" }, decls: 2, vars: 2, consts: [["class", "igo-striped mat-typography", 4, "ngIf"], [3, "srcdoc", "src", 4, "ngIf"], [1, "igo-striped", "mat-typography"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "keyValue", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["mat-list-avatar", "", 3, "svgIcon"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["id", "keyValue"], [3, "innerHTML"], ["width", "225", "heigth", "auto", 3, "src", 4, "ngIf", "ngIfElse"], ["notImg", ""], ["width", "225", "heigth", "auto", 3, "src"], [3, "srcdoc", "src"]], template: function FeatureDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FeatureDetailsComponent_table_0_Template, 4, 3, "table", 0);
        i0.ɵɵtemplate(1, FeatureDetailsComponent_iframe_1_Template, 1, 2, "iframe", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.ready && ctx.feature && ctx.isObject(ctx.feature.properties) && ctx.feature.properties.target !== "iframe");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isHtmlDisplay());
    } }, directives: [i3.NgIf, i3.NgForOf, i4.MatIcon], pipes: [i5.KeyValuePipe, i6.TranslatePipe, i3.AsyncPipe, i5.SecureImagePipe, i3.JsonPipe], styles: ["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px}#keyValue[_ngcontent-%COMP%]{width:30%}table[_ngcontent-%COMP%]     .routing{cursor:pointer}iframe[_ngcontent-%COMP%]{height:calc(100% - 4px);width:100%;border:0}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureDetailsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-feature-details',
                templateUrl: './feature-details.component.html',
                styleUrls: ['./feature-details.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DomSanitizer }, { type: i2.NetworkService }]; }, { source: [{
            type: Input
        }], map: [{
            type: Input
        }], toolbox: [{
            type: Input
        }], feature: [{
            type: Input
        }], routeEvent: [{
            type: Output
        }], selectFeature: [{
            type: Output
        }], htmlDisplayEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZlYXR1cmUvZmVhdHVyZS1kZXRhaWxzL2ZlYXR1cmUtZGV0YWlscy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9mZWF0dXJlL2ZlYXR1cmUtZGV0YWlscy9mZWF0dXJlLWRldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBRXZCLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7O0lDWnZELDBCQUE2RTtJQUMzRSw4QkFBd0Q7SUFDMUQsaUJBQUs7OztJQUR1QixlQUFrQjtJQUFsQixnREFBa0I7OztJQUc5QywwQkFBNkU7SUFDM0UsNEJBQXVFO0lBQUMsWUFBbUQ7O0lBQUEsaUJBQUk7SUFDakksaUJBQUs7Ozs7SUFEQSxlQUF5QjtJQUF6QixxRUFBeUI7SUFBNEMsZUFBbUQ7SUFBbkQsZ0dBQW1EOzs7SUFHN0gsNkJBQWtFO0lBQ2hFLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBREgsZUFDRjtJQURFLGdEQUNGOzs7SUFFQSx5QkFDSzs7O0lBRHNHLGdFQUE0Qjs7O0lBS25JLDBCQUEwSDs7Ozs7SUFBM0UsZ0hBQWdEOzs7SUFDMUUsNEJBQU07SUFBQSxZQUEwQzs7SUFBQSxpQkFBTzs7SUFBakQsZUFBMEM7SUFBMUMsNkVBQTBDOzs7SUFIekUsMEJBQTBHO0lBQ3hHLDRCQUF1RTtJQUNyRSwyRkFBMEg7SUFDMUgsNElBQTBGO0lBQzVGLGlCQUFJO0lBQ04saUJBQUs7Ozs7O0lBSkEsZUFBeUI7SUFBekIscUVBQXlCO0lBQ3BCLGVBQTRCO0lBQTVCLHNEQUE0QixrQkFBQTs7O0lBS3RDLHlCQUNLOzs7O0lBRDJFLHNGQUFtQzs7O0lBeEJySCwwQkFBeUU7SUFFdkUsbUZBRUs7SUFFTCxtRkFFSztJQUVMLG1GQUVLO0lBRUwsbUZBQ0s7SUFFTCxtRkFLSztJQUVMLG1GQUNLO0lBRVAsaUJBQUs7Ozs7SUF6QkUsZUFBc0U7SUFBdEUsaUdBQXNFO0lBSXRFLGVBQXNFO0lBQXRFLGlHQUFzRTtJQUl4RCxlQUE2QztJQUE3QyxxRUFBNkM7SUFJM0QsZUFBb0c7SUFBcEcsZ0pBQW9HO0lBR3BHLGVBQW1HO0lBQW5HLCtJQUFtRztJQU9uRyxlQUF5RTtJQUF6RSwyR0FBeUU7OztJQTFCcEYsZ0NBQTZJO0lBQzNJLDZCQUFPO0lBQ0wsOEVBMkJLOztJQUNQLGlCQUFRO0lBQ1YsaUJBQVE7OztJQTdCcUIsZUFBOEM7SUFBOUMsOEZBQThDOzs7SUErQjNFLDZCQUFtSTs7O0lBQW5HLDJGQUE0QyxxRkFBQTs7QURINUUsTUFBTSxPQUFPLHVCQUF1QjtJQWtEbEMsWUFDVSxLQUF3QixFQUN4QixTQUF1QixFQUN2QixjQUE4QjtRQUY5QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQW5EaEMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzNDLFVBQUssR0FBRyxLQUFLLENBQUM7UUE0QkosZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzVDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFzQnZELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFzQixFQUFFLEVBQUU7WUFDekcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBckRELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBbUI7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBTUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBU0Q7O09BRUc7SUFDSCxJQUFJLEtBQUs7UUFDUCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxJQUFJO1FBQ04sT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUMvQyxDQUFDO0lBYUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUdELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDekcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLG1CQUFtQixFQUFFO1lBQ3JFLE9BQU87U0FDUjtRQUNELE1BQU0sU0FBUyxHQUFHLDBCQUEwQixDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkQsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1NBQ2hGO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLENBQ0wsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssVUFBVSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FDcEUsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FDTCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FDckUsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELHVCQUF1QixDQUFDLE9BQU87UUFDN0IsTUFBTSxxQkFBcUIsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVFLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLGtCQUFrQixDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pGLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN6RyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxxQkFBcUIsRUFBRTtZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqRCxVQUFVLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxVQUFVLENBQUM7U0FDbkI7YUFBTSxJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUMzQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUMxRSxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7b0JBQ3ZELGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDbkMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztpQkFDSjtxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO29CQUN6RixNQUFNLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7b0JBQ3JFLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDMUMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztpQkFDSjthQUNGO2lCQUFNO2dCQUNMLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO29CQUN4RCxNQUFNLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7b0JBQ3JFLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDMUMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztpQkFDSjthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxRSxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3ZELGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDbkMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7Z0JBQ3pGLE1BQU0sdUJBQXVCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztnQkFDckUsdUJBQXVCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMxQyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM1QixDQUFDOzs4RkFoTFUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUM5QnBDLDRFQStCUTtRQUVSLDhFQUFtSTs7UUFqQ3hGLHFJQUFnRztRQWlDbEksZUFBcUI7UUFBckIsMENBQXFCOzt1RkRIakIsdUJBQXVCO2NBUG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7NEhBUUssTUFBTTtrQkFEVCxLQUFLO1lBU0csR0FBRztrQkFBWCxLQUFLO1lBRUcsT0FBTztrQkFBZixLQUFLO1lBR0YsT0FBTztrQkFEVixLQUFLO1lBYUksVUFBVTtrQkFBbkIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxnQkFBZ0I7a0JBQXpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHVzZXJBZ2VudCB9IGZyb20gJ0BpZ28yL3V0aWxzJztcbmltcG9ydCB7IE5ldHdvcmtTZXJ2aWNlLCBDb25uZWN0aW9uU3RhdGUgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IGdldEVudGl0eVRpdGxlLCBnZXRFbnRpdHlJY29uIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB0eXBlIHsgVG9vbGJveCB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgU2VhcmNoU291cmNlIH0gZnJvbSAnLi4vLi4vc2VhcmNoL3NoYXJlZC9zb3VyY2VzL3NvdXJjZSc7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi9tYXAvc2hhcmVkL21hcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1mZWF0dXJlLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZS1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVhdHVyZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgRmVhdHVyZURldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3RhdGU6IENvbm5lY3Rpb25TdGF0ZTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICByZWFkeSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzb3VyY2UoKTogU2VhcmNoU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlO1xuICB9XG4gIHNldCBzb3VyY2UodmFsdWU6IFNlYXJjaFNvdXJjZSkge1xuICAgIHRoaXMuX3NvdXJjZSA9IHZhbHVlO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgQElucHV0KCkgdG9vbGJveDogVG9vbGJveDtcblxuICBASW5wdXQoKVxuICBnZXQgZmVhdHVyZSgpOiBGZWF0dXJlIHtcbiAgICByZXR1cm4gdGhpcy5fZmVhdHVyZTtcbiAgfVxuICBzZXQgZmVhdHVyZSh2YWx1ZTogRmVhdHVyZSkge1xuICAgIHRoaXMuX2ZlYXR1cmUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnNlbGVjdEZlYXR1cmUuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmVhdHVyZTogRmVhdHVyZTtcbiAgcHJpdmF0ZSBfc291cmNlOiBTZWFyY2hTb3VyY2U7XG5cbiAgQE91dHB1dCgpIHJvdXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RGZWF0dXJlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgaHRtbERpc3BsYXlFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0RW50aXR5VGl0bGUodGhpcy5mZWF0dXJlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldEVudGl0eUljb24odGhpcy5mZWF0dXJlKSB8fCAnbGluayc7XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBuZXR3b3JrU2VydmljZTogTmV0d29ya1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5uZXR3b3JrU2VydmljZS5jdXJyZW50U3RhdGUoKS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoc3RhdGU6IENvbm5lY3Rpb25TdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHVybFNhbml0aXplcih2YWx1ZSk6IFNhZmVSZXNvdXJjZVVybCB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh2YWx1ZSk7XG4gIH1cblxuXG4gIGlzSHRtbERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZSAmJiB0aGlzLmlzT2JqZWN0KHRoaXMuZmVhdHVyZS5wcm9wZXJ0aWVzKSAmJiB0aGlzLmZlYXR1cmUucHJvcGVydGllcy50YXJnZXQgPT09ICdpZnJhbWUnKSB7XG4gICAgICB0aGlzLmh0bWxEaXNwbGF5RXZlbnQuZW1pdCh0cnVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmh0bWxEaXNwbGF5RXZlbnQuZW1pdChmYWxzZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaHRtbFNhbml0aXplcih2YWx1ZSk6IFNhZmVSZXNvdXJjZVVybCB7XG4gICAgaWYgKCF2YWx1ZS5ib2R5IHx8IHVzZXJBZ2VudC5nZXRCcm93c2VyTmFtZSgpID09PSAnSW50ZXJuZXQgRXhwbG9yZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlZ2V4QmFzZSA9IC88YmFzZSBocmVmPVwiW1xcdzpcXC9cXC5dK1wiPi87XG4gICAgaWYgKCFyZWdleEJhc2UudGVzdCh2YWx1ZS5ib2R5KSkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh2YWx1ZS51cmwsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xuICAgICAgdmFsdWUuYm9keSA9IHZhbHVlLmJvZHkucmVwbGFjZSgnPGhlYWQ+JywgYDxoZWFkPjxiYXNlIGhyZWY9XCIke3VybC5vcmlnaW59XCI+YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlLmJvZHkpO1xuICB9XG5cbiAgaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcbiAgfVxuXG4gIGlzVXJsKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbHVlLnNsaWNlKDAsIDgpID09PSAnaHR0cHM6Ly8nIHx8IHZhbHVlLnNsaWNlKDAsIDcpID09PSAnaHR0cDovLydcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpc0ltZyh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzVXJsKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgWydqcGcnLCAncG5nJywgJ2dpZiddLmluY2x1ZGVzKHZhbHVlLnNwbGl0KCcuJykucG9wKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJGZWF0dXJlUHJvcGVydGllcyhmZWF0dXJlKSB7XG4gICAgY29uc3QgYWxsb3dlZEZpZWxkc0FuZEFsaWFzID0gZmVhdHVyZS5tZXRhID8gZmVhdHVyZS5tZXRhLmFsaWFzIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcbiAgICBsZXQgb2ZmbGluZUJ1dHRvblN0YXRlO1xuXG4gICAgaWYgKHRoaXMubWFwKSB7XG4gICAgICB0aGlzLm1hcC5vZmZsaW5lQnV0dG9uVG9nZ2xlJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShzdGF0ZSA9PiB7XG4gICAgICAgIG9mZmxpbmVCdXR0b25TdGF0ZSA9IHN0YXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGZlYXR1cmUucHJvcGVydGllcyAmJiBmZWF0dXJlLnByb3BlcnRpZXMuUm91dGUgJiYgdGhpcy50b29sYm94ICYmICF0aGlzLnRvb2xib3guZ2V0VG9vbCgnZGlyZWN0aW9ucycpKSB7XG4gICAgICBkZWxldGUgZmVhdHVyZS5wcm9wZXJ0aWVzLlJvdXRlO1xuICAgIH1cblxuICAgIGlmIChhbGxvd2VkRmllbGRzQW5kQWxpYXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKGFsbG93ZWRGaWVsZHNBbmRBbGlhcykuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIHByb3BlcnRpZXNbYWxsb3dlZEZpZWxkc0FuZEFsaWFzW2ZpZWxkXV0gPSBmZWF0dXJlLnByb3BlcnRpZXNbZmllbGRdO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9IGVsc2UgaWYgKG9mZmxpbmVCdXR0b25TdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoIW9mZmxpbmVCdXR0b25TdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb25uZWN0aW9uICYmIGZlYXR1cmUubWV0YSAmJiBmZWF0dXJlLm1ldGEuZXhjbHVkZUF0dHJpYnV0ZSkge1xuICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVBdHRyaWJ1dGUgPSBmZWF0dXJlLm1ldGEuZXhjbHVkZUF0dHJpYnV0ZTtcbiAgICAgICAgICBleGNsdWRlQXR0cmlidXRlLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBmZWF0dXJlLnByb3BlcnRpZXNbYXR0cmlidXRlXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5jb25uZWN0aW9uICYmIGZlYXR1cmUubWV0YSAmJiBmZWF0dXJlLm1ldGEuZXhjbHVkZUF0dHJpYnV0ZU9mZmxpbmUpIHtcbiAgICAgICAgICBjb25zdCBleGNsdWRlQXR0cmlidXRlT2ZmbGluZSA9IGZlYXR1cmUubWV0YS5leGNsdWRlQXR0cmlidXRlT2ZmbGluZTtcbiAgICAgICAgICBleGNsdWRlQXR0cmlidXRlT2ZmbGluZS5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgZmVhdHVyZS5wcm9wZXJ0aWVzW2F0dHJpYnV0ZV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmZWF0dXJlLm1ldGEgJiYgZmVhdHVyZS5tZXRhLmV4Y2x1ZGVBdHRyaWJ1dGVPZmZsaW5lKSB7XG4gICAgICAgICAgY29uc3QgZXhjbHVkZUF0dHJpYnV0ZU9mZmxpbmUgPSBmZWF0dXJlLm1ldGEuZXhjbHVkZUF0dHJpYnV0ZU9mZmxpbmU7XG4gICAgICAgICAgZXhjbHVkZUF0dHJpYnV0ZU9mZmxpbmUuZm9yRWFjaChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGZlYXR1cmUucHJvcGVydGllc1thdHRyaWJ1dGVdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmNvbm5lY3Rpb24gJiYgZmVhdHVyZS5tZXRhICYmIGZlYXR1cmUubWV0YS5leGNsdWRlQXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVBdHRyaWJ1dGUgPSBmZWF0dXJlLm1ldGEuZXhjbHVkZUF0dHJpYnV0ZTtcbiAgICAgICAgZXhjbHVkZUF0dHJpYnV0ZS5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgZGVsZXRlIGZlYXR1cmUucHJvcGVydGllc1thdHRyaWJ1dGVdO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuY29ubmVjdGlvbiAmJiBmZWF0dXJlLm1ldGEgJiYgZmVhdHVyZS5tZXRhLmV4Y2x1ZGVBdHRyaWJ1dGVPZmZsaW5lKSB7XG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVBdHRyaWJ1dGVPZmZsaW5lID0gZmVhdHVyZS5tZXRhLmV4Y2x1ZGVBdHRyaWJ1dGVPZmZsaW5lO1xuICAgICAgICBleGNsdWRlQXR0cmlidXRlT2ZmbGluZS5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgZGVsZXRlIGZlYXR1cmUucHJvcGVydGllc1thdHRyaWJ1dGVdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcztcbiAgfVxufVxuIiwiPHRhYmxlIGNsYXNzPVwiaWdvLXN0cmlwZWQgbWF0LXR5cG9ncmFwaHlcIiAqbmdJZj1cInJlYWR5ICYmIGZlYXR1cmUgJiYgaXNPYmplY3QoZmVhdHVyZS5wcm9wZXJ0aWVzKSAmJiBmZWF0dXJlLnByb3BlcnRpZXMudGFyZ2V0ICE9PSAnaWZyYW1lJ1wiPlxuICA8dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBwcm9wZXJ0eSBvZiBmaWx0ZXJGZWF0dXJlUHJvcGVydGllcyhmZWF0dXJlKSB8IGtleXZhbHVlXCI+XG5cbiAgICAgIDx0ZCAqbmdJZj1cImZlYXR1cmUucHJvcGVydGllcy50YXJnZXQgPT09ICdfYmxhbmsnICYmIHByb3BlcnR5LmtleSA9PT0gJ3VybCdcIj5cbiAgICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWF2YXRhciBzdmdJY29uPVwie3tpY29ufX1cIj48L21hdC1pY29uPlxuICAgICAgPC90ZD5cblxuICAgICAgPHRkICpuZ0lmPVwiZmVhdHVyZS5wcm9wZXJ0aWVzLnRhcmdldCA9PT0gJ19ibGFuaycgJiYgcHJvcGVydHkua2V5ID09PSAndXJsJ1wiPlxuICAgICAgICA8YSBocmVmPVwie3twcm9wZXJ0eS52YWx1ZX19XCIgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4ge3sgJ2lnby5nZW8udGFyZ2V0SHRtbFVybCcgfCB0cmFuc2xhdGUgfX0ge3t0aXRsZX19PC9hPlxuICAgICAgPC90ZD5cblxuICAgICAgPHRkIGlkPVwia2V5VmFsdWVcIiAqbmdJZj1cImZlYXR1cmUucHJvcGVydGllcy50YXJnZXQgPT09IHVuZGVmaW5lZFwiPlxuICAgICAgICB7e3Byb3BlcnR5LmtleSB9fVxuICAgICAgPC90ZD5cblxuICAgICAgPHRkICpuZ0lmPVwiZmVhdHVyZS5wcm9wZXJ0aWVzLnRhcmdldCA9PT0gdW5kZWZpbmVkICYmICFpc09iamVjdChwcm9wZXJ0eS52YWx1ZSkgJiYgIWlzVXJsKHByb3BlcnR5LnZhbHVlKVwiIFtpbm5lckhUTUxdPVwicHJvcGVydHkudmFsdWVcIj5cbiAgICAgIDwvdGQ+XG5cbiAgICAgIDx0ZCAqbmdJZj1cImZlYXR1cmUucHJvcGVydGllcy50YXJnZXQgPT09IHVuZGVmaW5lZCAmJiAhaXNPYmplY3QocHJvcGVydHkudmFsdWUpICYmIGlzVXJsKHByb3BlcnR5LnZhbHVlKVwiPlxuICAgICAgICA8YSBocmVmPVwie3twcm9wZXJ0eS52YWx1ZX19XCIgdGFyZ2V0PSdfYmxhbmsnIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICA8aW1nICpuZ0lmPVwiaXNJbWcocHJvcGVydHkudmFsdWUpO2Vsc2Ugbm90SW1nXCIgc3JjPVwie3socHJvcGVydHkudmFsdWUgfCBzZWN1cmVJbWFnZSkgfMKgYXN5bmN9fVwiIHdpZHRoPVwiMjI1XCIgaGVpZ3RoPVwiYXV0b1wiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90SW1nPjxzcGFuPnt7ICdpZ28uZ2VvLnRhcmdldEh0bWxVcmwnIHwgdHJhbnNsYXRlIH19IDwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2E+XG4gICAgICA8L3RkPlxuXG4gICAgICA8dGQgKm5nSWY9XCJmZWF0dXJlLnByb3BlcnRpZXMudGFyZ2V0ID09PSB1bmRlZmluZWQgJiYgaXNPYmplY3QocHJvcGVydHkudmFsdWUpXCIgW2lubmVySFRNTF09XCJwcm9wZXJ0eS52YWx1ZSB8IGpzb25cIj5cbiAgICAgIDwvdGQ+XG5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cblxuPGlmcmFtZSAqbmdJZj1cImlzSHRtbERpc3BsYXkoKVwiIFtzcmNkb2NdPVwiaHRtbFNhbml0aXplcihmZWF0dXJlLnByb3BlcnRpZXMpXCIgW3NyY109XCJ1cmxTYW5pdGl6ZXIoZmVhdHVyZS5wcm9wZXJ0aWVzLnVybClcIj48L2lmcmFtZT5cbiJdfQ==