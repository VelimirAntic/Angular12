import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../shared/download.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/material/icon";
import * as i6 from "@ngx-translate/core";
function DownloadButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function DownloadButtonComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.openDownload(ctx_r1.layer); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.geo.download.action"))("color", ctx_r0.color);
} }
export class DownloadButtonComponent {
    constructor(downloadService) {
        this.downloadService = downloadService;
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
    openDownload(layer) {
        this.downloadService.open(layer);
    }
    get options() {
        if (!this.layer) {
            return;
        }
        return this.layer.dataSource.options;
    }
}
DownloadButtonComponent.ɵfac = function DownloadButtonComponent_Factory(t) { return new (t || DownloadButtonComponent)(i0.ɵɵdirectiveInject(i1.DownloadService)); };
DownloadButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DownloadButtonComponent, selectors: [["igo-download-button"]], inputs: { layer: "layer", color: "color" }, decls: 1, vars: 1, consts: [["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], ["svgIcon", "download"]], template: function DownloadButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DownloadButtonComponent_button_0_Template, 3, 4, "button", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.options && ctx.options.download && (ctx.options.download["dynamicUrl"] || ctx.options.download["url"]));
    } }, directives: [i2.NgIf, i3.MatButton, i4.MatTooltip, i5.MatIcon], pipes: [i6.TranslatePipe], styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DownloadButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-download-button',
                templateUrl: './download-button.component.html',
                styleUrls: ['./download-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DownloadService }]; }, { layer: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2Rvd25sb2FkL2Rvd25sb2FkLWJ1dHRvbi9kb3dubG9hZC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZG93bmxvYWQvZG93bmxvYWQtYnV0dG9uL2Rvd25sb2FkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQ0ExRSxpQ0FPZ0M7SUFBOUIsNE1BQTZCOztJQUM3Qiw4QkFBd0M7SUFDMUMsaUJBQVM7OztJQUpQLDRFQUFvRCx1QkFBQTs7QURRdEQsTUFBTSxPQUFPLHVCQUF1QjtJQW1CbEMsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRjVDLFdBQU0sR0FBRyxTQUFTLENBQUM7SUFFNEIsQ0FBQztJQWxCeEQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFHRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUtELFlBQVksQ0FBQyxLQUFZO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLENBQUM7OzhGQTlCVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ2JwQyw4RUFTUzs7UUFSTixpSUFBZ0c7O3VGRFl0Rix1QkFBdUI7Y0FObkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtrRUFHSyxLQUFLO2tCQURSLEtBQUs7WUFVRixLQUFLO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9sYXllcnMvbGF5ZXInO1xuXG5pbXBvcnQgeyBEb3dubG9hZERhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vc2hhcmVkL2Rvd25sb2FkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEb3dubG9hZFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZG93bmxvYWQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1kb3dubG9hZC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERvd25sb2FkQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZ2V0IGxheWVyKCk6IExheWVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5ZXI7XG4gIH1cbiAgc2V0IGxheWVyKHZhbHVlOiBMYXllcikge1xuICAgIHRoaXMuX2xheWVyID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfbGF5ZXI6IExheWVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2NvbG9yID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG93bmxvYWRTZXJ2aWNlOiBEb3dubG9hZFNlcnZpY2UpIHt9XG5cbiAgb3BlbkRvd25sb2FkKGxheWVyOiBMYXllcikge1xuICAgIHRoaXMuZG93bmxvYWRTZXJ2aWNlLm9wZW4obGF5ZXIpO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKTogRG93bmxvYWREYXRhU291cmNlT3B0aW9ucyB7XG4gICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucztcbiAgfVxufVxuIiwiPGJ1dHRvblxuICAqbmdJZj1cIm9wdGlvbnMgJiYgb3B0aW9ucy5kb3dubG9hZCAmJiAob3B0aW9ucy5kb3dubG9hZFsnZHluYW1pY1VybCddIHx8IG9wdGlvbnMuZG93bmxvYWRbJ3VybCddKSBcIlxuICBtYXQtaWNvbi1idXR0b25cbiAgdG9vbHRpcC1wb3NpdGlvbj1cImJlbG93XCJcbiAgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiXG4gIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmRvd25sb2FkLmFjdGlvbicgfCB0cmFuc2xhdGVcIlxuICBbY29sb3JdPVwiY29sb3JcIlxuICAoY2xpY2spPVwib3BlbkRvd25sb2FkKGxheWVyKVwiPlxuICA8bWF0LWljb24gc3ZnSWNvbj1cImRvd25sb2FkXCI+PC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuIl19