import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LAYER } from '../../layer/shared/layer.enums';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../layer/shared/layer.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@igo2/common";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/badge";
import * as i8 from "@ngx-translate/core";
function SearchResultAddButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("mouseenter", function SearchResultAddButtonComponent_button_0_Template_button_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onMouseEvent($event); })("mouseleave", function SearchResultAddButtonComponent_button_0_Template_button_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onMouseEvent($event); })("click", function SearchResultAddButtonComponent_button_0_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onToggleClick($event); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelement(4, "mat-icon", 2);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 4, i0.ɵɵpipeBind1(2, 6, ctx_r0.tooltip$)))("color", i0.ɵɵpipeBind1(3, 8, ctx_r0.isPreview$) ? "" : ctx_r0.added ? "warn" : "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("matBadgeHidden", i0.ɵɵpipeBind1(5, 10, ctx_r0.inRange$))("svgIcon", i0.ɵɵpipeBind1(6, 12, ctx_r0.isPreview$) ? "plus" : ctx_r0.added ? "delete" : "plus");
} }
export class SearchResultAddButtonComponent {
    constructor(layerService) {
        this.layerService = layerService;
        this.tooltip$ = new BehaviorSubject('igo.geo.catalog.layer.addToMap');
        this.inRange$ = new BehaviorSubject(true);
        this.isPreview$ = new BehaviorSubject(false);
        this.layersSubcriptions = [];
        this.mouseInsideAdd = false;
        this._color = 'primary';
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    /**
     * @internal
     */
    ngOnInit() {
        if (this.layer.meta.dataType === 'Layer') {
            this.added =
                this.map.layers.findIndex(lay => lay.id === this.layer.data.sourceOptions.id) !== -1;
        }
        this.resolution$$ = this.map.viewController.resolution$.subscribe(value => {
            this.isInResolutionsRange(value);
            this.tooltip$.next(this.computeTooltip());
        });
    }
    ngOnDestroy() {
        this.resolution$$.unsubscribe();
    }
    /**
     * On mouse event, mouseenter /mouseleave
     * @internal
     */
    onMouseEvent(event) {
        this.onToggleClick(event);
    }
    /**
     * On toggle button click, emit the added change event
     * @internal
     */
    onToggleClick(event) {
        if (typeof this.lastTimeoutRequest !== 'undefined') {
            clearTimeout(this.lastTimeoutRequest);
        }
        if (event.type === 'mouseenter' && this.mouseInsideAdd) {
            return;
        }
        switch (event.type) {
            case 'click':
                if (!this.isPreview$.value) {
                    if (this.added) {
                        this.remove();
                    }
                    else {
                        this.add();
                    }
                }
                this.isPreview$.next(false);
                break;
            case 'mouseenter':
                if (!this.isPreview$.value && !this.added) {
                    this.lastTimeoutRequest = setTimeout(() => {
                        this.add();
                        this.isPreview$.next(true);
                    }, 500);
                }
                this.mouseInsideAdd = true;
                break;
            case 'mouseleave':
                if (this.isPreview$.value) {
                    this.remove();
                    this.isPreview$.next(false);
                }
                this.mouseInsideAdd = false;
                break;
            default:
                break;
        }
    }
    add() {
        if (!this.added) {
            this.added = true;
            this.addLayerToMap();
        }
    }
    remove() {
        if (this.added) {
            this.added = false;
            this.removeLayerFromMap();
            this.layersSubcriptions.map(s => s.unsubscribe());
            this.layersSubcriptions = [];
        }
    }
    /**
     * Emit added change event with added = true
     */
    addLayerToMap() {
        if (this.map === undefined) {
            return;
        }
        if (this.layer.meta.dataType !== LAYER) {
            return undefined;
        }
        const layerOptions = this.layer.data;
        if (layerOptions.sourceOptions.optionsFromApi === undefined) {
            layerOptions.sourceOptions.optionsFromApi = true;
        }
        this.layersSubcriptions.push(this.layerService
            .createAsyncLayer(layerOptions)
            .subscribe(layer => this.map.addLayer(layer)));
    }
    /**
     * Emit added change event with added = false
     */
    removeLayerFromMap() {
        if (this.map === undefined) {
            return;
        }
        if (this.layer.meta.dataType !== LAYER) {
            return undefined;
        }
        const oLayer = this.map.getLayerById(this.layer.data.sourceOptions.id);
        this.map.removeLayer(oLayer);
    }
    isInResolutionsRange(resolution) {
        const minResolution = this.layer.data.minResolution || 0;
        const maxResolution = this.layer.data.maxResolution || Infinity;
        this.inRange$.next(resolution >= minResolution && resolution <= maxResolution);
    }
    computeTooltip() {
        if (this.added) {
            return this.inRange$.value
                ? 'igo.geo.catalog.layer.removeFromMap'
                : 'igo.geo.catalog.layer.removeFromMapOutRange';
        }
        else {
            return this.inRange$.value
                ? 'igo.geo.catalog.layer.addToMap'
                : 'igo.geo.catalog.layer.addToMapOutRange';
        }
    }
}
SearchResultAddButtonComponent.ɵfac = function SearchResultAddButtonComponent_Factory(t) { return new (t || SearchResultAddButtonComponent)(i0.ɵɵdirectiveInject(i1.LayerService)); };
SearchResultAddButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchResultAddButtonComponent, selectors: [["igo-search-add-button"]], inputs: { layer: "layer", added: "added", map: "map", color: "color" }, decls: 1, vars: 1, consts: [["igoStopPropagation", "", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "mouseenter", "mouseleave", "click", 4, "ngIf"], ["igoStopPropagation", "", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "mouseenter", "mouseleave", "click"], ["matBadge", "icon", "igoMatBadgeIcon", "eye-off", "igoMatBadgeInverseColor", "true", "matBadgeDisabled", "true", "matBadgeSize", "small", "matBadgePosition", "after", 3, "matBadgeHidden", "svgIcon"]], template: function SearchResultAddButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SearchResultAddButtonComponent_button_0_Template, 7, 14, "button", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.layer.meta.dataType === "Layer");
    } }, directives: [i2.NgIf, i3.MatButton, i4.StopPropagationDirective, i5.MatTooltip, i6.MatIcon, i7.MatBadge, i4.IgoBadgeIconDirective], pipes: [i8.TranslatePipe, i2.AsyncPipe], styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchResultAddButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-search-add-button',
                templateUrl: './search-results-add-button.component.html',
                styleUrls: ['./search-results-add-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.LayerService }]; }, { layer: [{
            type: Input
        }], added: [{
            type: Input
        }], map: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMtYWRkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMtYWRkLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMtYWRkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFHeEIsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7SUNickQsaUNBU2dDO0lBUGhDLDZOQUFtQyxnTkFBQSx1TUFBQTs7OztJQVFuQyw4QkFTVzs7O0lBQ1gsaUJBQVM7OztJQWJULHdGQUE2QyxvRkFBQTtJQU8zQyxlQUFxQztJQUFyQyx1RUFBcUMsaUdBQUE7O0FET3ZDLE1BQU0sT0FBTyw4QkFBOEI7SUFzQ3pDLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBckN2QyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUM1RCxnQ0FBZ0MsQ0FDakMsQ0FBQztRQUlLLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0QsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqRSx1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFJeEIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFxQmhDLFdBQU0sR0FBRyxTQUFTLENBQUM7SUFFc0IsQ0FB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dUI7Z0JBQ2pDLFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2dCQUN6RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDsrREFrQlUsS0FBSztrQkFBYixLQUFLO1lBS0csS0FBSztrQkFBYixLQUFLO1lBS0csR0FBRztrQkFBWCxLQUFLO1lBR0YsS0FBSztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9zaGFyZWQvc2VhcmNoLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwL3NoYXJlZC9tYXAnO1xuaW1wb3J0IHsgTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9sYXllci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTEFZRVIgfSBmcm9tICcuLi8uLi9sYXllci9zaGFyZWQvbGF5ZXIuZW51bXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXNlYXJjaC1hZGQtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1yZXN1bHRzLWFkZC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtcmVzdWx0cy1hZGQtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdEFkZEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHRvb2x0aXAkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoXG4gICAgJ2lnby5nZW8uY2F0YWxvZy5sYXllci5hZGRUb01hcCdcbiAgKTtcblxuICBwcml2YXRlIHJlc29sdXRpb24kJDogU3Vic2NyaXB0aW9uO1xuXG4gIHB1YmxpYyBpblJhbmdlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcblxuICBwdWJsaWMgaXNQcmV2aWV3JDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgcHJpdmF0ZSBsYXllcnNTdWJjcmlwdGlvbnMgPSBbXTtcblxuICBwcml2YXRlIGxhc3RUaW1lb3V0UmVxdWVzdDtcblxuICBwcml2YXRlIG1vdXNlSW5zaWRlQWRkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbGF5ZXI6IFNlYXJjaFJlc3VsdDtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgbGF5ZXIgaXMgYWxyZWFkeSBhZGRlZCB0byB0aGUgbWFwXG4gICAqL1xuICBASW5wdXQoKSBhZGRlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIG1hcCB0byBhZGQgdGhlIHNlYXJjaCByZXN1bHQgbGF5ZXIgdG9cbiAgICovXG4gIEBJbnB1dCgpIG1hcDogSWdvTWFwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2NvbG9yID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGF5ZXJTZXJ2aWNlOiBMYXllclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGF5ZXIubWV0YS5kYXRhVHlwZSA9PT0gJ0xheWVyJykge1xuICAgICAgdGhpcy5hZGRlZCA9XG4gICAgICAgIHRoaXMubWFwLmxheWVycy5maW5kSW5kZXgoXG4gICAgICAgICAgbGF5ID0+IGxheS5pZCA9PT0gdGhpcy5sYXllci5kYXRhLnNvdXJjZU9wdGlvbnMuaWRcbiAgICAgICAgKSAhPT0gLTE7XG4gICAgfVxuICAgIHRoaXMucmVzb2x1dGlvbiQkID0gdGhpcy5tYXAudmlld0NvbnRyb2xsZXIucmVzb2x1dGlvbiQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuaXNJblJlc29sdXRpb25zUmFuZ2UodmFsdWUpO1xuICAgICAgdGhpcy50b29sdGlwJC5uZXh0KHRoaXMuY29tcHV0ZVRvb2x0aXAoKSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJlc29sdXRpb24kJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIG1vdXNlIGV2ZW50LCBtb3VzZWVudGVyIC9tb3VzZWxlYXZlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25Nb3VzZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5vblRvZ2dsZUNsaWNrKGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiB0b2dnbGUgYnV0dG9uIGNsaWNrLCBlbWl0IHRoZSBhZGRlZCBjaGFuZ2UgZXZlbnRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxhc3RUaW1lb3V0UmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxhc3RUaW1lb3V0UmVxdWVzdCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJyAmJiB0aGlzLm1vdXNlSW5zaWRlQWRkICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgaWYgKCF0aGlzLmlzUHJldmlldyQudmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5hZGRlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1ByZXZpZXckLm5leHQoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdXNlZW50ZXInOlxuICAgICAgICBpZiAoIXRoaXMuaXNQcmV2aWV3JC52YWx1ZSAmJiAhdGhpcy5hZGRlZCkge1xuICAgICAgICAgIHRoaXMubGFzdFRpbWVvdXRSZXF1ZXN0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZCgpO1xuICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXckLm5leHQodHJ1ZSk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdXNlSW5zaWRlQWRkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb3VzZWxlYXZlJzpcbiAgICAgICAgaWYgKHRoaXMuaXNQcmV2aWV3JC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy5pc1ByZXZpZXckLm5leHQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW91c2VJbnNpZGVBZGQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZCgpIHtcbiAgICBpZiAoIXRoaXMuYWRkZWQpIHtcbiAgICAgIHRoaXMuYWRkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5hZGRMYXllclRvTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmUoKSB7XG4gICAgaWYgKHRoaXMuYWRkZWQpIHtcbiAgICAgIHRoaXMuYWRkZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVtb3ZlTGF5ZXJGcm9tTWFwKCk7XG4gICAgICB0aGlzLmxheWVyc1N1YmNyaXB0aW9ucy5tYXAocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgdGhpcy5sYXllcnNTdWJjcmlwdGlvbnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdCBhZGRlZCBjaGFuZ2UgZXZlbnQgd2l0aCBhZGRlZCA9IHRydWVcbiAgICovXG4gIHByaXZhdGUgYWRkTGF5ZXJUb01hcCgpIHtcbiAgICBpZiAodGhpcy5tYXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxheWVyLm1ldGEuZGF0YVR5cGUgIT09IExBWUVSKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IGxheWVyT3B0aW9ucyA9ICh0aGlzLmxheWVyIGFzIFNlYXJjaFJlc3VsdDxMYXllck9wdGlvbnM+KS5kYXRhO1xuICAgIGlmIChsYXllck9wdGlvbnMuc291cmNlT3B0aW9ucy5vcHRpb25zRnJvbUFwaSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsYXllck9wdGlvbnMuc291cmNlT3B0aW9ucy5vcHRpb25zRnJvbUFwaSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubGF5ZXJzU3ViY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmxheWVyU2VydmljZVxuICAgICAgICAuY3JlYXRlQXN5bmNMYXllcihsYXllck9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUobGF5ZXIgPT4gdGhpcy5tYXAuYWRkTGF5ZXIobGF5ZXIpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdCBhZGRlZCBjaGFuZ2UgZXZlbnQgd2l0aCBhZGRlZCA9IGZhbHNlXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZUxheWVyRnJvbU1hcCgpIHtcbiAgICBpZiAodGhpcy5tYXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxheWVyLm1ldGEuZGF0YVR5cGUgIT09IExBWUVSKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IG9MYXllciA9IHRoaXMubWFwLmdldExheWVyQnlJZCh0aGlzLmxheWVyLmRhdGEuc291cmNlT3B0aW9ucy5pZCk7XG4gICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIob0xheWVyKTtcbiAgfVxuXG4gIGlzSW5SZXNvbHV0aW9uc1JhbmdlKHJlc29sdXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IG1pblJlc29sdXRpb24gPSB0aGlzLmxheWVyLmRhdGEubWluUmVzb2x1dGlvbiB8fCAwO1xuICAgIGNvbnN0IG1heFJlc29sdXRpb24gPSB0aGlzLmxheWVyLmRhdGEubWF4UmVzb2x1dGlvbiB8fCBJbmZpbml0eTtcbiAgICB0aGlzLmluUmFuZ2UkLm5leHQoXG4gICAgICByZXNvbHV0aW9uID49IG1pblJlc29sdXRpb24gJiYgcmVzb2x1dGlvbiA8PSBtYXhSZXNvbHV0aW9uXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVUb29sdGlwKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuYWRkZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmluUmFuZ2UkLnZhbHVlXG4gICAgICAgID8gJ2lnby5nZW8uY2F0YWxvZy5sYXllci5yZW1vdmVGcm9tTWFwJ1xuICAgICAgICA6ICdpZ28uZ2VvLmNhdGFsb2cubGF5ZXIucmVtb3ZlRnJvbU1hcE91dFJhbmdlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaW5SYW5nZSQudmFsdWVcbiAgICAgICAgPyAnaWdvLmdlby5jYXRhbG9nLmxheWVyLmFkZFRvTWFwJ1xuICAgICAgICA6ICdpZ28uZ2VvLmNhdGFsb2cubGF5ZXIuYWRkVG9NYXBPdXRSYW5nZSc7XG4gICAgfVxuICB9XG59XG4iLCI8YnV0dG9uXG5pZ29TdG9wUHJvcGFnYXRpb25cbihtb3VzZWVudGVyKT1cIm9uTW91c2VFdmVudCgkZXZlbnQpXCIgKG1vdXNlbGVhdmUpPVwib25Nb3VzZUV2ZW50KCRldmVudClcIlxuKm5nSWY9XCJsYXllci5tZXRhLmRhdGFUeXBlID09PSAnTGF5ZXInXCJcbm1hdC1pY29uLWJ1dHRvblxudG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbm1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuW21hdFRvb2x0aXBdPVwiKHRvb2x0aXAkIHwgYXN5bmMpIHwgdHJhbnNsYXRlXCJcbltjb2xvcl09XCIoaXNQcmV2aWV3JCB8IGFzeW5jKSA/ICcnIDogYWRkZWQgPyAnd2FybicgOiAnJ1wiXG4oY2xpY2spPVwib25Ub2dnbGVDbGljaygkZXZlbnQpXCI+XG48bWF0LWljb25cbiAgbWF0QmFkZ2U9XCJpY29uXCJcbiAgaWdvTWF0QmFkZ2VJY29uPVwiZXllLW9mZlwiXG4gIGlnb01hdEJhZGdlSW52ZXJzZUNvbG9yPVwidHJ1ZVwiXG4gIFttYXRCYWRnZUhpZGRlbl09XCIoaW5SYW5nZSQgfCBhc3luYylcIlxuICBtYXRCYWRnZURpc2FibGVkPVwidHJ1ZVwiXG4gIG1hdEJhZGdlU2l6ZT1cInNtYWxsXCJcbiAgbWF0QmFkZ2VQb3NpdGlvbj1cImFmdGVyXCJcbiAgW3N2Z0ljb25dPVwiKGlzUHJldmlldyQgfCBhc3luYykgPyAncGx1cycgOiBhZGRlZCA/ICdkZWxldGUnIDogJ3BsdXMnXCI+XG48L21hdC1pY29uPlxuPC9idXR0b24+XG4iXX0=