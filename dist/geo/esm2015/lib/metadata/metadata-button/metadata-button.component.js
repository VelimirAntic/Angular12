import { Component, Input, ChangeDetectionStrategy, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "../shared/metadata.service";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/material/icon";
import * as i7 from "@ngx-translate/core";
function MetadataButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function MetadataButtonComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.openMetadata(ctx_r1.options.metadata); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.geo.metadata.show"))("color", ctx_r0.color);
} }
function MetadataAbstractComponent_mat_dialog_content_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-dialog-content", 3);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.data.abstract);
} }
function MetadataAbstractComponent_mat_dialog_content_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-dialog-content", 3);
    i0.ɵɵelement(1, "h3", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1.data.abstract, i0.ɵɵsanitizeHtml);
} }
export class MetadataButtonComponent {
    constructor(metadataService, dialog) {
        this.metadataService = metadataService;
        this.dialog = dialog;
        this._color = 'primary';
    }
    get layer() {
        return this._layer;
    }
    set layer(value) {
        this._layer = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    openMetadata(metadata) {
        if (metadata.extern) {
            this.metadataService.open(metadata);
        }
        else if (!metadata.extern && metadata.abstract) {
            this.dialog.open(MetadataAbstractComponent, {
                data: {
                    layerTitle: this.layer.title,
                    abstract: metadata.abstract,
                    type: metadata.type
                }
            });
        }
    }
    get options() {
        if (!this.layer) {
            return;
        }
        return this.layer.options;
    }
}
MetadataButtonComponent.ɵfac = function MetadataButtonComponent_Factory(t) { return new (t || MetadataButtonComponent)(i0.ɵɵdirectiveInject(i1.MetadataService), i0.ɵɵdirectiveInject(i2.MatDialog)); };
MetadataButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MetadataButtonComponent, selectors: [["igo-metadata-button"]], inputs: { layer: "layer", color: "color" }, decls: 1, vars: 1, consts: [["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], ["svgIcon", "information-outline"]], template: function MetadataButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MetadataButtonComponent_button_0_Template, 3, 4, "button", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.options && ctx.options.metadata && ctx.options.metadata.url || ctx.options && ctx.options.metadata && ctx.options.metadata.abstract);
    } }, directives: [i3.NgIf, i4.MatButton, i5.MatTooltip, i6.MatIcon], pipes: [i7.TranslatePipe], styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MetadataButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-metadata-button',
                templateUrl: './metadata-button.component.html',
                styleUrls: ['./metadata-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.MetadataService }, { type: i2.MatDialog }]; }, { layer: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
export class MetadataAbstractComponent {
    constructor(data) {
        this.data = data;
    }
}
MetadataAbstractComponent.ɵfac = function MetadataAbstractComponent_Factory(t) { return new (t || MetadataAbstractComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
MetadataAbstractComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MetadataAbstractComponent, selectors: [["igo-metadata-abstract"]], decls: 6, vars: 3, consts: [["mat-dialog-title", ""], ["mat-button", "", "mat-dialog-close", "", 1, "close-button"], ["class", "mat-typography", 4, "ngIf"], [1, "mat-typography"], [3, "innerHTML"]], template: function MetadataAbstractComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵtext(3, "X");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, MetadataAbstractComponent_mat_dialog_content_4_Template, 3, 1, "mat-dialog-content", 2);
        i0.ɵɵtemplate(5, MetadataAbstractComponent_mat_dialog_content_5_Template, 2, 1, "mat-dialog-content", 2);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.data.layerTitle);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.data.type !== "arcgisrest");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data.type === "arcgisrest");
    } }, directives: [i2.MatDialogTitle, i4.MatButton, i2.MatDialogClose, i3.NgIf, i2.MatDialogContent], styles: [".close-button{top:5px;right:5px;padding:7px;line-height:10px;position:absolute!important;min-width:auto}mat-dialog-container{position:relative}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MetadataAbstractComponent, [{
        type: Component,
        args: [{
                selector: 'igo-metadata-abstract',
                templateUrl: './metadata-abstract.component.html',
                styleUrls: ['./metadata-abstract.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21ldGFkYXRhL21ldGFkYXRhLWJ1dHRvbi9tZXRhZGF0YS1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWV0YWRhdGEvbWV0YWRhdGEtYnV0dG9uL21ldGFkYXRhLWJ1dHRvbi5jb21wb25lbnQuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21ldGFkYXRhL21ldGFkYXRhLWJ1dHRvbi9tZXRhZGF0YS1hYnN0cmFjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFhLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7OztJQ0R0RSxpQ0FPMkM7SUFBekMsdU5BQXdDOztJQUN4Qyw4QkFBbUQ7SUFDckQsaUJBQVM7OztJQUpQLDBFQUFrRCx1QkFBQTs7O0lDSHBELDZDQUE4RTtJQUM1RSwwQkFBSTtJQUFBLFlBQW1CO0lBQUEsaUJBQUs7SUFDOUIsaUJBQXFCOzs7SUFEZixlQUFtQjtJQUFuQiwwQ0FBbUI7OztJQUV6Qiw2Q0FBOEU7SUFDNUUsd0JBQXFDO0lBQ3ZDLGlCQUFxQjs7O0lBRGYsZUFBMkI7SUFBM0IsbUVBQTJCOztBRldqQyxNQUFNLE9BQU8sdUJBQXVCO0lBbUJsQyxZQUNVLGVBQWdDLEVBQ2hDLE1BQWlCO1FBRGpCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBSm5CLFdBQU0sR0FBRyxTQUFTLENBQUM7SUFJRyxDQUFDO0lBcEIvQixJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUdELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBT0QsWUFBWSxDQUFDLFFBQXlCO1FBQ3BDLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQzFDLElBQUksRUFBRTtvQkFDSixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO29CQUM1QixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7b0JBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtpQkFDcEI7YUFDRixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQzs7OEZBMUNVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDakJwQyw4RUFTUzs7UUFSTiw4SkFBeUg7O3VGRGdCL0csdUJBQXVCO2NBTm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7MEZBR0ssS0FBSztrQkFEUixLQUFLO1lBVUYsS0FBSztrQkFEUixLQUFLOztBQXlDUixNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLFlBQTRDLElBQXFCO1FBQXJCLFNBQUksR0FBSixJQUFJLENBQWlCO0lBQUcsQ0FBQzs7a0dBRDFELHlCQUF5Qix1QkFDaEIsZUFBZTs0RUFEeEIseUJBQXlCO1FFcEV0Qyw2QkFBcUI7UUFBQSxZQUFxQjtRQUFBLGlCQUFLO1FBQy9DLGlDQUF5RDtRQUFBLGlCQUFDO1FBQUEsaUJBQVM7UUFDbkUsd0dBRXFCO1FBQ3JCLHdHQUVxQjs7UUFQQSxlQUFxQjtRQUFyQix5Q0FBcUI7UUFFckIsZUFBZ0M7UUFBaEMscURBQWdDO1FBR2hDLGVBQWdDO1FBQWhDLHFEQUFnQzs7dUZGK0R4Qyx5QkFBeUI7Y0FOckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2dCQUNqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7c0JBRWMsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEluamVjdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi8uLi9sYXllci9zaGFyZWQvbGF5ZXJzL2xheWVyJztcblxuaW1wb3J0IHtcbiAgTWV0YWRhdGFPcHRpb25zLFxuICBNZXRhZGF0YUxheWVyT3B0aW9uc1xufSBmcm9tICcuLi9zaGFyZWQvbWV0YWRhdGEuaW50ZXJmYWNlJztcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9tZXRhZGF0YS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLW1ldGFkYXRhLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRhZGF0YS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZXRhZGF0YS1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBnZXQgbGF5ZXIoKTogTGF5ZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXllcjtcbiAgfVxuICBzZXQgbGF5ZXIodmFsdWU6IExheWVyKSB7XG4gICAgdGhpcy5fbGF5ZXIgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9sYXllcjogTGF5ZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sb3IgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZXRhZGF0YVNlcnZpY2U6IE1ldGFkYXRhU2VydmljZSxcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5NZXRhZGF0YShtZXRhZGF0YTogTWV0YWRhdGFPcHRpb25zKSB7XG4gICAgaWYgKG1ldGFkYXRhLmV4dGVybikge1xuICAgICAgdGhpcy5tZXRhZGF0YVNlcnZpY2Uub3BlbihtZXRhZGF0YSk7XG4gICAgfSBlbHNlIGlmICghbWV0YWRhdGEuZXh0ZXJuICYmIG1ldGFkYXRhLmFic3RyYWN0KSB7XG4gICAgICB0aGlzLmRpYWxvZy5vcGVuKE1ldGFkYXRhQWJzdHJhY3RDb21wb25lbnQsIHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxheWVyVGl0bGU6IHRoaXMubGF5ZXIudGl0bGUsXG4gICAgICAgICAgYWJzdHJhY3Q6IG1ldGFkYXRhLmFic3RyYWN0LFxuICAgICAgICAgIHR5cGU6IG1ldGFkYXRhLnR5cGVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKTogTWV0YWRhdGFMYXllck9wdGlvbnMge1xuICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXllci5vcHRpb25zO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1tZXRhZGF0YS1hYnN0cmFjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRhZGF0YS1hYnN0cmFjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21ldGFkYXRhLWFic3RyYWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFBYnN0cmFjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogTWV0YWRhdGFPcHRpb25zKSB7fVxufVxuIiwiPGJ1dHRvblxuICAqbmdJZj1cIihvcHRpb25zICYmIG9wdGlvbnMubWV0YWRhdGEgJiYgb3B0aW9ucy5tZXRhZGF0YS51cmwpIHx8IChvcHRpb25zICYmIG9wdGlvbnMubWV0YWRhdGEgJiYgb3B0aW9ucy5tZXRhZGF0YS5hYnN0cmFjdClcIlxuICBtYXQtaWNvbi1idXR0b25cbiAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLm1ldGFkYXRhLnNob3cnIHwgdHJhbnNsYXRlXCJcbiAgW2NvbG9yXT1cImNvbG9yXCJcbiAgKGNsaWNrKT1cIm9wZW5NZXRhZGF0YShvcHRpb25zLm1ldGFkYXRhKVwiPlxuICA8bWF0LWljb24gc3ZnSWNvbj1cImluZm9ybWF0aW9uLW91dGxpbmVcIj48L21hdC1pY29uPlxuPC9idXR0b24+XG4iLCI8aDIgbWF0LWRpYWxvZy10aXRsZT57eyBkYXRhLmxheWVyVGl0bGUgfX08L2gyPlxuPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ1dHRvblwiIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZT5YPC9idXR0b24+XG48bWF0LWRpYWxvZy1jb250ZW50ICpuZ0lmPVwiZGF0YS50eXBlICE9PSAnYXJjZ2lzcmVzdCdcIiBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+XG4gIDxoMz57eyBkYXRhLmFic3RyYWN0IH19PC9oMz5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuPG1hdC1kaWFsb2ctY29udGVudCAqbmdJZj1cImRhdGEudHlwZSA9PT0gJ2FyY2dpc3Jlc3QnXCIgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPlxuICA8aDMgW2lubmVySFRNTF09XCJkYXRhLmFic3RyYWN0XCI+PC9oMz5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuIl19