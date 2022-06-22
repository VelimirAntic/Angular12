import { Component, Input, ChangeDetectionStrategy, ViewChildren } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WMSDataSource } from '../../datasource';
import { SecureImagePipe } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "../../datasource/shared/capabilities.service";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/list";
import * as i6 from "@angular/material/icon";
import * as i7 from "@igo2/common";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/form-field";
import * as i10 from "@angular/material/select";
import * as i11 from "@angular/material/tooltip";
import * as i12 from "@angular/forms";
import * as i13 from "@ngx-translate/core";
const _c0 = ["renderedLegend"];
function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-icon", 7);
    i0.ɵɵlistener("toggle", function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_mat_list_item_1_Template_mat_icon_toggle_1_listener($event) { i0.ɵɵrestoreView(_r15); const item_r6 = i0.ɵɵnextContext(2).$implicit; const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.toggleLegendItem($event, item_r6); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "h4", 8);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r10 = i0.ɵɵreference(3);
    const item_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("target", _r10)("collapsed", item_r6.collapsed);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, ctx_r9.computeItemTitle(item_r6)), " ");
} }
function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_4_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const style_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", style_r18.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(style_r18.title);
} }
function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-select", 9);
    i0.ɵɵlistener("ngModelChange", function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_4_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(5); return ctx_r19.currentStyle = $event; })("selectionChange", function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_4_Template_mat_select_selectionChange_2_listener() { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(5); return ctx_r21.onChangeStyle(); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_4_mat_option_4_Template, 2, 2, "mat-option", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(3, 3, "igo.geo.layer.legend.selectStyle"))("ngModel", ctx_r11.currentStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r11.styles);
} }
function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_5_div_1_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.geo.layer.legend.noLegendScale"), " ");
} }
const _c1 = function (a0) { return [a0]; };
function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "img", 13, 14);
    i0.ɵɵlistener("load", function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_5_div_1_Template_img_load_1_listener() { i0.ɵɵrestoreView(_r28); const item_r6 = i0.ɵɵnextContext(3).$implicit; const ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.onLoadImage(item_r6.title); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_5_div_1_small_4_Template, 3, 3, "small", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("id", item_r6.title);
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpureFunction1(6, _c1, item_r6.imgGraphValue), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", i0.ɵɵpipeBind1(3, 4, "igo.geo.layer.legend.loadingLegendText"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r22.imagesHeight[item_r6.title] < 16);
} }
function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngStyle", item_r6.style)("innerHTML", i0.ɵɵpipeBind1(1, 2, item_r6.html), i0.ɵɵsanitizeHtml);
} }
function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_5_div_1_Template, 5, 8, "div", 0);
    i0.ɵɵtemplate(2, LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_5_div_2_Template, 2, 4, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.url);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.html);
} }
const _c2 = function (a0) { return { "with-title": a0 }; };
function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_mat_list_item_1_Template, 5, 5, "mat-list-item", 0);
    i0.ɵɵelementStart(2, "div", 5, 6);
    i0.ɵɵtemplate(4, LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_4_Template, 5, 5, "div", 0);
    i0.ɵɵtemplate(5, LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_div_5_Template, 3, 2, "div", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, item_r6.title));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.currentStyle !== undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.collapsed);
} }
function LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 4);
    i0.ɵɵtemplate(2, LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_div_2_Template, 6, 6, "div", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.getLegend)("ngIfElse", _r3);
} }
function LayerLegendComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LayerLegendComponent_ng_container_0_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const items_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", items_r1.slice().reverse());
} }
function LayerLegendComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "igo.geo.layer.legend.noLegendText"), " ");
} }
function LayerLegendComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LayerLegendComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵtemplate(2, LayerLegendComponent_ng_container_0_ng_template_2_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const items_r1 = ctx.ngIf;
    const _r3 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", items_r1.length)("ngIfElse", _r3);
} }
export class LayerLegendComponent {
    /**
     * activeLegend
     */
    constructor(capabilitiesService, languageService, http, cdRef) {
        this.capabilitiesService = capabilitiesService;
        this.languageService = languageService;
        this.http = http;
        this.cdRef = cdRef;
        this.updateLegendOnResolutionChange = false;
        /**
         * Observable of the legend items
         */
        this.legendItems$ = new BehaviorSubject([]);
        /**
         * The scale used to make the legend
         */
        this.scale = undefined;
        /**
         * The extent used to make the legend
         */
        this.view = undefined;
        /**
         * List of size of images displayed
         */
        this.imagesHeight = {};
        /**
         * if getLegendGraphic is authorized
         */
        this.getLegend = true;
    }
    /**
     * On init, subscribe to the map's resolution and update the legend accordingly
     */
    ngOnInit() {
        let lastlLegend = this.layer.legend;
        this.styles = this.listStyles();
        const sourceOptions = this.layer.options.source.options;
        if (sourceOptions && sourceOptions.params && sourceOptions.params.STYLES) {
            // if a styles is provided into the layers wms params
            this.currentStyle = this.styles.find(style => style.name === sourceOptions.params.STYLES).name;
        }
        else if (!lastlLegend) {
            // if no legend is manually provided
            if (this.styles && this.styles.length > 1) {
                this.currentStyle = this.styles[0].name;
            }
        }
        else if (this.styles && this.styles.length > 1) {
            this.currentStyle = lastlLegend[0].currentStyle;
        }
        if (typeof this.layer.options.legendOptions !== 'undefined' && this.layer.options.legendOptions.display === false) {
            lastlLegend = [];
        }
        else {
            lastlLegend = this.layer.dataSource.getLegend(this.currentStyle, this.view);
        }
        if (this.updateLegendOnResolutionChange || sourceOptions.contentDependentLegend) {
            const state$ = this.layer.map.viewController.state$;
            this.state$$ = state$.subscribe(() => this.onViewControllerStateChange());
        }
        else if (lastlLegend && lastlLegend.length !== 0) {
            this.legendItems$.next(lastlLegend);
            for (const legend of lastlLegend) {
                this.getLegendGraphic(legend);
            }
        }
    }
    /**
     * On destroy, unsubscribe to the map's view state
     */
    ngOnDestroy() {
        if (this.state$$ !== undefined) {
            this.state$$.unsubscribe();
        }
    }
    getLegendGraphic(item) {
        if (item.url) {
            const secureIMG = new SecureImagePipe(this.http);
            secureIMG.transform(item.url).pipe(catchError((err) => {
                if (err.error) {
                    err.error.caught = true;
                    this.getLegend = false;
                    this.cdRef.detectChanges();
                    return err;
                }
            })).subscribe(obsLegGraph => {
                const idx = this.legendItems$.value.findIndex(leg => leg.title === item.title);
                const legendGraph = obsLegGraph;
                this.legendItems$.value[idx].imgGraphValue = legendGraph;
                this.cdRef.detectChanges();
            });
        }
    }
    toggleLegendItem(collapsed, item) {
        item.collapsed = collapsed;
    }
    transfertToggleLegendItem(newLegends) {
        const outLegends = newLegends;
        const lastLegends = this.layer.legend;
        for (let i = 0; i < lastLegends.length; i++) {
            outLegends[i].collapsed = lastLegends[i].collapsed;
        }
        return outLegends;
    }
    computeItemTitle(layerLegend) {
        const layerOptions = this.layer.dataSource.options;
        if (layerOptions.type !== 'wms') {
            return of(layerLegend.title);
        }
        const layers = layerOptions.params.LAYERS.split(',');
        const localLayerOptions = JSON.parse(JSON.stringify(layerOptions)); // to avoid to alter the original options.
        localLayerOptions.params.LAYERS = layers.find(layer => layer === layerLegend.title);
        return this.capabilitiesService
            .getWMSOptions(localLayerOptions)
            .pipe(map(wmsDataSourceOptions => {
            return wmsDataSourceOptions._layerOptionsFromSource.title;
        }));
    }
    /**
     * On resolution change, compute the effective scale level and update the
     * legend accordingly.
     * @param resolution Map resolution
     */
    onViewControllerStateChange() {
        this.view = {
            resolution: this.layer.map.viewController.getResolution(),
            extent: this.layer.map.viewController.getExtent(),
            projection: this.layer.map.viewController.getOlProjection().getCode(),
            scale: this.layer.map.viewController.getScale(),
            size: this.layer.map.ol.getSize()
        };
        this.updateLegend();
    }
    /**
     * Update the legend with scale level and style define
     */
    updateLegend() {
        let legendItems = this.layer.dataSource.getLegend(this.currentStyle, this.view);
        if (this.layer.legend && this.layer.legend.length > 1) {
            legendItems = this.transfertToggleLegendItem(legendItems);
        }
        this.layer.legend = legendItems;
        if (legendItems.length === 0 && this.legendItems$.value.length === 0) {
            return;
        }
        this.legendItems$.next(legendItems);
        for (const legend of this.legendItems$.value) {
            this.getLegendGraphic(legend);
        }
    }
    listStyles() {
        const layerOptions = this.layer.options;
        if (layerOptions && layerOptions.legendOptions) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.geo.layer.legend.default');
            let stylesAvailable = [{ name: '', title }];
            if (layerOptions.legendOptions.stylesAvailable) {
                stylesAvailable = stylesAvailable.concat(layerOptions.legendOptions.stylesAvailable.filter(sA => (sA.name.normalize('NFD').replace(/[\u0300-\u036f]/gi, '') !== 'default' &&
                    sA.name.normalize('NFD').replace(/[\u0300-\u036f]/gi, '') !== 'defaut')));
            }
            stylesAvailable.filter(sa => !sa.title).map((sa) => sa.title = sa.name);
            stylesAvailable.map(s => s.title = s.title.charAt(0).toUpperCase() + s.title.slice(1).replace(/_/g, ' '));
            return stylesAvailable;
        }
        return;
    }
    onChangeStyle() {
        this.updateLegend();
        let STYLES = '';
        if (this.layer.dataSource instanceof WMSDataSource) {
            this.layer.dataSource.ol.getParams().LAYERS.split(',').map(layer => STYLES += this.currentStyle + ',');
            STYLES = STYLES.slice(0, -1);
            this.layer.dataSource.ol.updateParams({ STYLES });
        }
    }
    onLoadImage(id) {
        let elemRef;
        if (this.renderedLegends.length === 1) {
            elemRef = this.renderedLegends.first.nativeElement;
        }
        else {
            elemRef = this.renderedLegends.find(renderedLegend => renderedLegend.nativeElement.id === id).nativeElement;
        }
        this.imagesHeight[id] = elemRef.height;
    }
}
LayerLegendComponent.ɵfac = function LayerLegendComponent_Factory(t) { return new (t || LayerLegendComponent)(i0.ɵɵdirectiveInject(i1.CapabilitiesService), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i3.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
LayerLegendComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerLegendComponent, selectors: [["igo-layer-legend"]], viewQuery: function LayerLegendComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.renderedLegends = _t);
    } }, inputs: { updateLegendOnResolutionChange: "updateLegendOnResolutionChange", layer: "layer" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noItems", ""], [4, "ngFor", "ngForOf"], ["renderedLegends", ""], [1, "igo-layer-legend", 3, "ngClass"], ["legend", ""], ["id", "legend-toggle", "mat-list-avatar", "", "igoCollapse", "", "svgIcon", "chevron-up", 1, "igo-chevron", 3, "target", "collapsed", "toggle"], ["matLine", ""], ["tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "ngStyle", "innerHTML", 4, "ngIf"], [3, "id", "src", "alt", "load"], ["renderedLegend", ""], [3, "ngStyle", "innerHTML"]], template: function LayerLegendComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LayerLegendComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.legendItems$));
    } }, directives: [i4.NgIf, i4.NgForOf, i4.NgClass, i5.MatListItem, i6.MatIcon, i5.MatListAvatarCssMatStyler, i7.CollapseDirective, i8.MatLine, i9.MatFormField, i10.MatSelect, i11.MatTooltip, i12.NgControlStatus, i12.NgModel, i8.MatOption, i4.NgStyle], pipes: [i4.AsyncPipe, i13.TranslatePipe, i7.SanitizeHtmlPipe], styles: [".igo-layer-legend.with-title[_ngcontent-%COMP%]{padding-left:18px}img[_ngcontent-%COMP%]:after{content:\" \";position:relative;height:17px;float:left;width:17px;top:-3px;right:19px;background-color:#fff;border:3px solid #f3f3f3;border-radius:50%;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-moz-document url-prefix(){img:after{margin-left:19px}}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerLegendComponent, [{
        type: Component,
        args: [{
                selector: 'igo-layer-legend',
                templateUrl: './layer-legend.component.html',
                styleUrls: ['./layer-legend.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.CapabilitiesService }, { type: i2.LanguageService }, { type: i3.HttpClient }, { type: i0.ChangeDetectorRef }]; }, { updateLegendOnResolutionChange: [{
            type: Input
        }], renderedLegends: [{
            type: ViewChildren,
            args: ['renderedLegend']
        }], layer: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2xheWVyL2xheWVyLWxlZ2VuZC9sYXllci1sZWdlbmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvbGF5ZXItbGVnZW5kL2xheWVyLWxlZ2VuZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsdUJBQXVCLEVBQUUsWUFBWSxFQUFpQyxNQUFNLGVBQWUsQ0FBQztBQUcxSSxPQUFPLEVBQWdCLGVBQWUsRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFNckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUF3QixNQUFNLGtCQUFrQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1R2QyxxQ0FBa0M7SUFDaEMsbUNBUXVCO0lBRHJCLHVVQUF5QztJQUUzQyxpQkFBVztJQUNYLDZCQUFZO0lBQUEsWUFBbUM7O0lBQUEsaUJBQUs7SUFDdEQsaUJBQWdCOzs7Ozs7SUFOWixlQUFpQjtJQUFqQiw2QkFBaUIsZ0NBQUE7SUFLUCxlQUFtQztJQUFuQyxzRkFBbUM7OztJQVF2QyxzQ0FBOEQ7SUFBQSxZQUFlO0lBQUEsaUJBQWE7OztJQUFqRCxzQ0FBb0I7SUFBQyxlQUFlO0lBQWYscUNBQWU7Ozs7SUFMckYsMkJBQXdDO0lBQ3BDLHNDQUFnQjtJQUNkLHFDQUVzQztJQUQwQixrUkFBMEIsNlBBQUE7O0lBRXhGLDZJQUEwRjtJQUM1RixpQkFBYTtJQUNqQixpQkFBaUI7SUFDbkIsaUJBQU07OztJQUxF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Q0FBQztJQUVELFdBQVcsQ0FBQyxFQUFVO1FBQ3BCLElBQUksT0FBeUIsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsYUFBaUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsYUFBaUMsQ0FBQztTQUNqSTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDOzt3RkFyT1Usb0JBQW9CO3VFQUFwQixvQkFBb0I7Ozs7OztRQ3JCakMsdUZBcURlOzs7UUFyREEsNkRBQTJCOzt1RkRxQjdCLG9CQUFvQjtjQU5oQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzZKQUdVLDhCQUE4QjtrQkFBdEMsS0FBSztZQWtDMEIsZUFBZTtrQkFBOUMsWUFBWTttQkFBQyxnQkFBZ0I7WUFVckIsS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkcmVuLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBCZWhhdmlvclN1YmplY3QsIG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExlZ2VuZCB9IGZyb20gJy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL2RhdGFzb3VyY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IExheWVyLCBJdGVtU3R5bGVPcHRpb25zIH0gZnJvbSAnLi4vc2hhcmVkL2xheWVycyc7XG5pbXBvcnQgeyBMZWdlbmRNYXBWaWV3T3B0aW9ucyB9IGZyb20gJy4uL3NoYXJlZC9sYXllcnMvbGF5ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhcGFiaWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9jYXBhYmlsaXRpZXMuc2VydmljZSc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IFdNU0RhdGFTb3VyY2UsIFdNU0RhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBTZWN1cmVJbWFnZVBpcGUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tbGF5ZXItbGVnZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheWVyLWxlZ2VuZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xheWVyLWxlZ2VuZC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMYXllckxlZ2VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSB1cGRhdGVMZWdlbmRPblJlc29sdXRpb25DaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiB0aGUgbGVnZW5kIGl0ZW1zXG4gICAqL1xuICBsZWdlbmRJdGVtcyQ6IEJlaGF2aW9yU3ViamVjdDxMZWdlbmRbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBtYXAncyByZXNvbHV0aW9uXG4gICAqL1xuICBwcml2YXRlIHN0YXRlJCQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogVGhlIGF2YWlsYWJsZSBzdHlsZXNcbiAgICovXG4gIHB1YmxpYyBzdHlsZXM7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHlsZSB1c2VkIHRvIG1ha2UgdGhlIGxlZ2VuZFxuICAgKi9cbiAgcHVibGljIGN1cnJlbnRTdHlsZTtcblxuICAvKipcbiAgICogVGhlIHNjYWxlIHVzZWQgdG8gbWFrZSB0aGUgbGVnZW5kXG4gICAqL1xuICBwcml2YXRlIHNjYWxlOiBudW1iZXIgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBleHRlbnQgdXNlZCB0byBtYWtlIHRoZSBsZWdlbmRcbiAgICovXG4gIHByaXZhdGUgdmlldzogTGVnZW5kTWFwVmlld09wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBpbWFnZXMgZGlzcGxheVxuICAgKi9cbiAgQFZpZXdDaGlsZHJlbigncmVuZGVyZWRMZWdlbmQnKSByZW5kZXJlZExlZ2VuZHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICAvKipcbiAgICogTGlzdCBvZiBzaXplIG9mIGltYWdlcyBkaXNwbGF5ZWRcbiAgICovXG4gIHB1YmxpYyBpbWFnZXNIZWlnaHQ6IHsgW3NyY0tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcblxuICAvKipcbiAgICogTGF5ZXJcbiAgICovXG4gIEBJbnB1dCgpIGxheWVyOiBMYXllcjtcblxuICAvKipcbiAgICogaWYgZ2V0TGVnZW5kR3JhcGhpYyBpcyBhdXRob3JpemVkXG4gICAqL1xuICBwdWJsaWMgZ2V0TGVnZW5kID0gdHJ1ZTtcblxuICAvKipcbiAgICogYWN0aXZlTGVnZW5kXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2FwYWJpbGl0aWVzU2VydmljZTogQ2FwYWJpbGl0aWVzU2VydmljZSxcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAvKipcbiAgICogT24gaW5pdCwgc3Vic2NyaWJlIHRvIHRoZSBtYXAncyByZXNvbHV0aW9uIGFuZCB1cGRhdGUgdGhlIGxlZ2VuZCBhY2NvcmRpbmdseVxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGxhc3RsTGVnZW5kID0gdGhpcy5sYXllci5sZWdlbmQ7XG4gICAgdGhpcy5zdHlsZXMgPSB0aGlzLmxpc3RTdHlsZXMoKTtcbiAgICBjb25zdCBzb3VyY2VPcHRpb25zID0gdGhpcy5sYXllci5vcHRpb25zLnNvdXJjZS5vcHRpb25zIGFzIGFueTtcbiAgICBpZiAoc291cmNlT3B0aW9ucyAmJiBzb3VyY2VPcHRpb25zLnBhcmFtcyAmJiBzb3VyY2VPcHRpb25zLnBhcmFtcy5TVFlMRVMpIHtcbiAgICAgIC8vIGlmIGEgc3R5bGVzIGlzIHByb3ZpZGVkIGludG8gdGhlIGxheWVycyB3bXMgcGFyYW1zXG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZSA9IHRoaXMuc3R5bGVzLmZpbmQoc3R5bGUgPT4gc3R5bGUubmFtZSA9PT0gc291cmNlT3B0aW9ucy5wYXJhbXMuU1RZTEVTKS5uYW1lO1xuICAgIH0gZWxzZSBpZiAoIWxhc3RsTGVnZW5kKSB7XG4gICAgICAvLyBpZiBubyBsZWdlbmQgaXMgbWFudWFsbHkgcHJvdmlkZWRcbiAgICAgIGlmICh0aGlzLnN0eWxlcyAmJiB0aGlzLnN0eWxlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0eWxlID0gdGhpcy5zdHlsZXNbMF0ubmFtZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3R5bGVzICYmIHRoaXMuc3R5bGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlID0gbGFzdGxMZWdlbmRbMF0uY3VycmVudFN0eWxlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMubGF5ZXIub3B0aW9ucy5sZWdlbmRPcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmxheWVyLm9wdGlvbnMubGVnZW5kT3B0aW9ucy5kaXNwbGF5ID09PSBmYWxzZSkge1xuICAgICAgbGFzdGxMZWdlbmQgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdGxMZWdlbmQgPSB0aGlzLmxheWVyLmRhdGFTb3VyY2UuZ2V0TGVnZW5kKHRoaXMuY3VycmVudFN0eWxlLCB0aGlzLnZpZXcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVwZGF0ZUxlZ2VuZE9uUmVzb2x1dGlvbkNoYW5nZSB8fCAoc291cmNlT3B0aW9ucyBhcyBXTVNEYXRhU291cmNlT3B0aW9ucykuY29udGVudERlcGVuZGVudExlZ2VuZCkge1xuICAgICAgY29uc3Qgc3RhdGUkID0gdGhpcy5sYXllci5tYXAudmlld0NvbnRyb2xsZXIuc3RhdGUkO1xuICAgICAgdGhpcy5zdGF0ZSQkID0gc3RhdGUkLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uVmlld0NvbnRyb2xsZXJTdGF0ZUNoYW5nZSgpKTtcbiAgICB9IGVsc2UgaWYgKGxhc3RsTGVnZW5kICYmIGxhc3RsTGVnZW5kLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5sZWdlbmRJdGVtcyQubmV4dChsYXN0bExlZ2VuZCk7XG4gICAgICBmb3IgKGNvbnN0IGxlZ2VuZCBvZiBsYXN0bExlZ2VuZCkge1xuICAgICAgICB0aGlzLmdldExlZ2VuZEdyYXBoaWMobGVnZW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gZGVzdHJveSwgdW5zdWJzY3JpYmUgdG8gdGhlIG1hcCdzIHZpZXcgc3RhdGVcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN0YXRlJCQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdGF0ZSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TGVnZW5kR3JhcGhpYyhpdGVtOiBMZWdlbmQpIHtcbiAgICBpZiAoaXRlbS51cmwpIHtcbiAgICAgIGNvbnN0IHNlY3VyZUlNRyA9IG5ldyBTZWN1cmVJbWFnZVBpcGUodGhpcy5odHRwKTtcbiAgICAgIHNlY3VyZUlNRy50cmFuc2Zvcm0oaXRlbS51cmwpLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIuZXJyb3IpIHtcbiAgICAgICAgICAgIGVyci5lcnJvci5jYXVnaHQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nZXRMZWdlbmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICkuc3Vic2NyaWJlKG9ic0xlZ0dyYXBoID0+IHtcbiAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLmxlZ2VuZEl0ZW1zJC52YWx1ZS5maW5kSW5kZXgobGVnID0+IGxlZy50aXRsZSA9PT0gaXRlbS50aXRsZSk7XG4gICAgICAgICAgY29uc3QgbGVnZW5kR3JhcGggPSBvYnNMZWdHcmFwaCBhcyBzdHJpbmc7XG4gICAgICAgICAgdGhpcy5sZWdlbmRJdGVtcyQudmFsdWVbaWR4XS5pbWdHcmFwaFZhbHVlID0gbGVnZW5kR3JhcGg7XG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTGVnZW5kSXRlbShjb2xsYXBzZWQ6IGJvb2xlYW4sIGl0ZW06IExlZ2VuZCkge1xuICAgIGl0ZW0uY29sbGFwc2VkID0gY29sbGFwc2VkO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2ZlcnRUb2dnbGVMZWdlbmRJdGVtKG5ld0xlZ2VuZHM6IExlZ2VuZFtdKTogTGVnZW5kW10ge1xuICAgIGNvbnN0IG91dExlZ2VuZHM6IExlZ2VuZFtdID0gbmV3TGVnZW5kcztcbiAgICBjb25zdCBsYXN0TGVnZW5kcyA9IHRoaXMubGF5ZXIubGVnZW5kO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdExlZ2VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG91dExlZ2VuZHNbaV0uY29sbGFwc2VkID0gbGFzdExlZ2VuZHNbaV0uY29sbGFwc2VkO1xuICAgfVxuICAgIHJldHVybiBvdXRMZWdlbmRzO1xuICB9XG5cbiAgY29tcHV0ZUl0ZW1UaXRsZShsYXllckxlZ2VuZCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgbGF5ZXJPcHRpb25zID0gdGhpcy5sYXllci5kYXRhU291cmNlLm9wdGlvbnMgYXMgYW55O1xuICAgIGlmIChsYXllck9wdGlvbnMudHlwZSAhPT0gJ3dtcycpIHtcbiAgICAgIHJldHVybiBvZihsYXllckxlZ2VuZC50aXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGF5ZXJzID0gbGF5ZXJPcHRpb25zLnBhcmFtcy5MQVlFUlMuc3BsaXQoJywnKTtcbiAgICBjb25zdCBsb2NhbExheWVyT3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobGF5ZXJPcHRpb25zKSk7IC8vIHRvIGF2b2lkIHRvIGFsdGVyIHRoZSBvcmlnaW5hbCBvcHRpb25zLlxuICAgIGxvY2FsTGF5ZXJPcHRpb25zLnBhcmFtcy5MQVlFUlMgPSBsYXllcnMuZmluZChsYXllciA9PiBsYXllciA9PT0gbGF5ZXJMZWdlbmQudGl0bGUpO1xuICAgIHJldHVybiB0aGlzLmNhcGFiaWxpdGllc1NlcnZpY2VcbiAgICAgIC5nZXRXTVNPcHRpb25zKGxvY2FsTGF5ZXJPcHRpb25zKVxuICAgICAgLnBpcGUobWFwKHdtc0RhdGFTb3VyY2VPcHRpb25zID0+IHtcbiAgICAgICAgcmV0dXJuIHdtc0RhdGFTb3VyY2VPcHRpb25zLl9sYXllck9wdGlvbnNGcm9tU291cmNlLnRpdGxlO1xuICAgICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIHJlc29sdXRpb24gY2hhbmdlLCBjb21wdXRlIHRoZSBlZmZlY3RpdmUgc2NhbGUgbGV2ZWwgYW5kIHVwZGF0ZSB0aGVcbiAgICogbGVnZW5kIGFjY29yZGluZ2x5LlxuICAgKiBAcGFyYW0gcmVzb2x1dGlvbiBNYXAgcmVzb2x1dGlvblxuICAgKi9cbiAgcHJpdmF0ZSBvblZpZXdDb250cm9sbGVyU3RhdGVDaGFuZ2UoKSB7XG4gICAgdGhpcy52aWV3ID0ge1xuICAgICAgcmVzb2x1dGlvbjogdGhpcy5sYXllci5tYXAudmlld0NvbnRyb2xsZXIuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgZXh0ZW50OiB0aGlzLmxheWVyLm1hcC52aWV3Q29udHJvbGxlci5nZXRFeHRlbnQoKSxcbiAgICAgIHByb2plY3Rpb246IHRoaXMubGF5ZXIubWFwLnZpZXdDb250cm9sbGVyLmdldE9sUHJvamVjdGlvbigpLmdldENvZGUoKSxcbiAgICAgIHNjYWxlOiB0aGlzLmxheWVyLm1hcC52aWV3Q29udHJvbGxlci5nZXRTY2FsZSgpLFxuICAgICAgc2l6ZTogdGhpcy5sYXllci5tYXAub2wuZ2V0U2l6ZSgpXG4gICAgfSBhcyBMZWdlbmRNYXBWaWV3T3B0aW9ucztcbiAgICB0aGlzLnVwZGF0ZUxlZ2VuZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgbGVnZW5kIHdpdGggc2NhbGUgbGV2ZWwgYW5kIHN0eWxlIGRlZmluZVxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVMZWdlbmQoKSB7XG4gICAgbGV0IGxlZ2VuZEl0ZW1zID0gdGhpcy5sYXllci5kYXRhU291cmNlLmdldExlZ2VuZCh0aGlzLmN1cnJlbnRTdHlsZSwgdGhpcy52aWV3KTtcbiAgICBpZiAodGhpcy5sYXllci5sZWdlbmQgJiYgdGhpcy5sYXllci5sZWdlbmQubGVuZ3RoID4gMSkgeyBsZWdlbmRJdGVtcyA9IHRoaXMudHJhbnNmZXJ0VG9nZ2xlTGVnZW5kSXRlbShsZWdlbmRJdGVtcyk7IH1cbiAgICB0aGlzLmxheWVyLmxlZ2VuZCA9IGxlZ2VuZEl0ZW1zO1xuXG4gICAgaWYgKGxlZ2VuZEl0ZW1zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmxlZ2VuZEl0ZW1zJC52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5sZWdlbmRJdGVtcyQubmV4dChsZWdlbmRJdGVtcyk7XG4gICAgZm9yIChjb25zdCBsZWdlbmQgb2YgdGhpcy5sZWdlbmRJdGVtcyQudmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0TGVnZW5kR3JhcGhpYyhsZWdlbmQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbGlzdFN0eWxlcygpIHtcbiAgICBjb25zdCBsYXllck9wdGlvbnMgPSB0aGlzLmxheWVyLm9wdGlvbnM7XG4gICAgaWYgKGxheWVyT3B0aW9ucyAmJiBsYXllck9wdGlvbnMubGVnZW5kT3B0aW9ucykge1xuICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlO1xuICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5sYXllci5sZWdlbmQuZGVmYXVsdCcpO1xuICAgICAgbGV0IHN0eWxlc0F2YWlsYWJsZSA9IFt7IG5hbWU6ICcnLCB0aXRsZSB9IGFzIEl0ZW1TdHlsZU9wdGlvbnNdO1xuICAgICAgaWYgKGxheWVyT3B0aW9ucy5sZWdlbmRPcHRpb25zLnN0eWxlc0F2YWlsYWJsZSkge1xuICAgICAgICBzdHlsZXNBdmFpbGFibGUgPSBzdHlsZXNBdmFpbGFibGUuY29uY2F0KGxheWVyT3B0aW9ucy5sZWdlbmRPcHRpb25zLnN0eWxlc0F2YWlsYWJsZS5maWx0ZXIoc0EgPT4gKFxuICAgICAgICAgIHNBLm5hbWUubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9naSwgJycpICE9PSAnZGVmYXVsdCcgJiZcbiAgICAgICAgICBzQS5uYW1lLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZ2ksICcnKSAhPT0gJ2RlZmF1dCcpKSk7XG4gICAgICB9XG4gICAgICBzdHlsZXNBdmFpbGFibGUuZmlsdGVyKHNhID0+ICFzYS50aXRsZSkubWFwKChzYSkgPT4gc2EudGl0bGUgPSBzYS5uYW1lKTtcbiAgICAgIHN0eWxlc0F2YWlsYWJsZS5tYXAocyA9PiBzLnRpdGxlID0gcy50aXRsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMudGl0bGUuc2xpY2UoMSkucmVwbGFjZSgvXy9nLCAnICcpKTtcbiAgICAgIHJldHVybiBzdHlsZXNBdmFpbGFibGU7XG4gICAgfVxuICAgIHJldHVybiA7XG4gIH1cblxuICBvbkNoYW5nZVN0eWxlKCkge1xuICAgIHRoaXMudXBkYXRlTGVnZW5kKCk7XG4gICAgbGV0IFNUWUxFUyA9ICcnO1xuICAgIGlmICh0aGlzLmxheWVyLmRhdGFTb3VyY2UgaW5zdGFuY2VvZiBXTVNEYXRhU291cmNlKSB7XG4gICAgICB0aGlzLmxheWVyLmRhdGFTb3VyY2Uub2wuZ2V0UGFyYW1zKCkuTEFZRVJTLnNwbGl0KCcsJykubWFwKGxheWVyID0+XG4gICAgICAgIFNUWUxFUyArPSB0aGlzLmN1cnJlbnRTdHlsZSArICcsJ1xuICAgICAgKTtcbiAgICAgIFNUWUxFUyA9IFNUWUxFUy5zbGljZSgwLCAtMSk7XG4gICAgICB0aGlzLmxheWVyLmRhdGFTb3VyY2Uub2wudXBkYXRlUGFyYW1zKHsgU1RZTEVTIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZEltYWdlKGlkOiBzdHJpbmcpIHtcbiAgICBsZXQgZWxlbVJlZjogSFRNTEltYWdlRWxlbWVudDtcbiAgICBpZiAodGhpcy5yZW5kZXJlZExlZ2VuZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBlbGVtUmVmID0gdGhpcy5yZW5kZXJlZExlZ2VuZHMuZmlyc3QubmF0aXZlRWxlbWVudCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtUmVmID0gdGhpcy5yZW5kZXJlZExlZ2VuZHMuZmluZChyZW5kZXJlZExlZ2VuZCA9PiByZW5kZXJlZExlZ2VuZC5uYXRpdmVFbGVtZW50LmlkID09PSBpZCkubmF0aXZlRWxlbWVudCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIH1cbiAgICB0aGlzLmltYWdlc0hlaWdodFtpZF0gPSBlbGVtUmVmLmhlaWdodDtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImxlZ2VuZEl0ZW1zJCB8IGFzeW5jIGFzIGl0ZW1zXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtcy5sZW5ndGg7IGVsc2Ugbm9JdGVtc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXMuc2xpY2UoKS5yZXZlcnNlKClcIiAjcmVuZGVyZWRMZWdlbmRzPlxuICAgICAgPGRpdiAqbmdJZj1cImdldExlZ2VuZDsgZWxzZSBub0l0ZW1zXCI+XG4gICAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0lmPVwiaXRlbS50aXRsZVwiPlxuICAgICAgICAgIDxtYXQtaWNvblxuICAgICAgICAgICAgaWQ9XCJsZWdlbmQtdG9nZ2xlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaWdvLWNoZXZyb25cIlxuICAgICAgICAgICAgbWF0LWxpc3QtYXZhdGFyXG4gICAgICAgICAgICBpZ29Db2xsYXBzZVxuICAgICAgICAgICAgW3RhcmdldF09XCJsZWdlbmRcIlxuICAgICAgICAgICAgW2NvbGxhcHNlZF09XCIoaXRlbS5jb2xsYXBzZWQpXCJcbiAgICAgICAgICAgICh0b2dnbGUpPVwidG9nZ2xlTGVnZW5kSXRlbSgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgICAgICAgIHN2Z0ljb249XCJjaGV2cm9uLXVwXCI+XG4gICAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgICAgICA8aDQgbWF0TGluZT57e2NvbXB1dGVJdGVtVGl0bGUoaXRlbSkgfCBhc3luY319IDwvaDQ+XG4gICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgICAgICAgPGRpdiAjbGVnZW5kIGNsYXNzPVwiaWdvLWxheWVyLWxlZ2VuZFwiIFtuZ0NsYXNzXT1cInsnd2l0aC10aXRsZSc6IGl0ZW0udGl0bGV9XCI+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRTdHlsZSAhPT0gdW5kZWZpbmVkXCI+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAgICAgICAgICAgICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmxheWVyLmxlZ2VuZC5zZWxlY3RTdHlsZScgfCB0cmFuc2xhdGVcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uQ2hhbmdlU3R5bGUoKVwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHN0eWxlIG9mIHN0eWxlc1wiIFt2YWx1ZV09XCJzdHlsZS5uYW1lXCI+e3tzdHlsZS50aXRsZX19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cIiEoaXRlbS5jb2xsYXBzZWQpXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS51cmxcIj5cbiAgICAgICAgICAgICAgPGltZyAjcmVuZGVyZWRMZWdlbmQgaWQ9XCJ7e2l0ZW0udGl0bGV9fVwiIChsb2FkKT1cIm9uTG9hZEltYWdlKGl0ZW0udGl0bGUpXCJcbiAgICAgICAgICAgICAgICBzcmM9XCJ7e1tpdGVtLmltZ0dyYXBoVmFsdWVdfX1cIlxuICAgICAgICAgICAgICAgIGFsdD1cInt7J2lnby5nZW8ubGF5ZXIubGVnZW5kLmxvYWRpbmdMZWdlbmRUZXh0JyB8IHRyYW5zbGF0ZX19XCI+XG4gICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImltYWdlc0hlaWdodFtpdGVtLnRpdGxlXTwxNlwiPlxuICAgICAgICAgICAgICAgICAge3snaWdvLmdlby5sYXllci5sZWdlbmQubm9MZWdlbmRTY2FsZScgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIFtuZ1N0eWxlXT1cIml0ZW0uc3R5bGVcIlxuICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cIml0ZW0uaHRtbCB8IHNhbml0aXplSHRtbFwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS5odG1sXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLXRlbXBsYXRlICNub0l0ZW1zPlxuICAgIDxzbWFsbD5cbiAgICAgIHt7J2lnby5nZW8ubGF5ZXIubGVnZW5kLm5vTGVnZW5kVGV4dCcgfCB0cmFuc2xhdGV9fVxuICAgIDwvc21hbGw+XG4gIDwvbmctdGVtcGxhdGU+XG5cbjwvbmctY29udGFpbmVyPlxuIl19