import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { VectorLayer } from '../../layer';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/material/icon";
import * as i5 from "@ngx-translate/core";
function ExportButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.geo.download.action"))("color", ctx_r0.color);
} }
export class ExportButtonComponent {
    constructor() {
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
    get options() {
        if (!this.layer) {
            return;
        }
        return this.layer.dataSource.options;
    }
    layerIsExportable() {
        var _a, _b;
        if ((this.layer instanceof VectorLayer && this.layer.exportable === true) ||
            (this.layer.dataSource.options.download && this.layer.dataSource.options.download.url) ||
            (((_a = this.layer.options.workspace) === null || _a === void 0 ? void 0 : _a.enabled) &&
                ((_b = this.layer.options.workspace) === null || _b === void 0 ? void 0 : _b.workspaceId) !== this.layer.id)) {
            return true;
        }
        return false;
    }
}
ExportButtonComponent.ɵfac = function ExportButtonComponent_Factory(t) { return new (t || ExportButtonComponent)(); };
ExportButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExportButtonComponent, selectors: [["igo-export-button"]], inputs: { layer: "layer", color: "color" }, decls: 1, vars: 1, consts: [["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color"], ["svgIcon", "file-export"]], template: function ExportButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ExportButtonComponent_button_0_Template, 3, 4, "button", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.layerIsExportable());
    } }, directives: [i1.NgIf, i2.MatButton, i3.MatTooltip, i4.MatIcon], pipes: [i5.TranslatePipe], styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExportButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-export-button',
                templateUrl: './export-button.component.html',
                styleUrls: ['./export-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { layer: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9pbXBvcnQtZXhwb3J0L2V4cG9ydC1idXR0b24vZXhwb3J0LWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9pbXBvcnQtZXhwb3J0L2V4cG9ydC1idXR0b24vZXhwb3J0LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7OztJQ0oxQyxpQ0FNa0I7O0lBRWhCLDhCQUEyQztJQUM3QyxpQkFBUzs7O0lBSlAsNEVBQW9ELHVCQUFBOztBRFF0RCxNQUFNLE9BQU8scUJBQXFCO0lBbUJoQztRQUZRLFdBQU0sR0FBRyxTQUFTLENBQUM7SUFFWixDQUFDO0lBbEJoQixJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUdELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBS0QsSUFBSSxPQUFPO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBRUQsaUJBQWlCOztRQUNmLElBQ0UsQ0FBQyxJQUFJLENBQUMsS0FBSyxZQUFZLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUM7WUFDckUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ3RGLENBQUMsQ0FBQSxNQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsMENBQUUsT0FBTztnQkFDcEMsQ0FBQSxNQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsMENBQUUsV0FBVyxNQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQzlEO1lBQ0EsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7MEZBdENVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDYmxDLDRFQVNTOztRQVJOLDhDQUF5Qjs7dUZEWWYscUJBQXFCO2NBTmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7c0NBR0ssS0FBSztrQkFEUixLQUFLO1lBVUYsS0FBSztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi8uLi9sYXllci9zaGFyZWQvbGF5ZXJzL2xheWVyJztcblxuaW1wb3J0IHsgVmVjdG9yTGF5ZXIgfSBmcm9tICcuLi8uLi9sYXllcic7XG5pbXBvcnQgeyBEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4uLy4uL2RhdGFzb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tZXhwb3J0LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBvcnQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwb3J0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFeHBvcnRCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBnZXQgbGF5ZXIoKTogTGF5ZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXllcjtcbiAgfVxuICBzZXQgbGF5ZXIodmFsdWU6IExheWVyKSB7XG4gICAgdGhpcy5fbGF5ZXIgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9sYXllcjogTGF5ZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sb3IgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldCBvcHRpb25zKCk6IERhdGFTb3VyY2VPcHRpb25zIHtcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zO1xuICB9XG5cbiAgbGF5ZXJJc0V4cG9ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgKHRoaXMubGF5ZXIgaW5zdGFuY2VvZiBWZWN0b3JMYXllciAmJiB0aGlzLmxheWVyLmV4cG9ydGFibGUgPT09IHRydWUpIHx8XG4gICAgICAodGhpcy5sYXllci5kYXRhU291cmNlLm9wdGlvbnMuZG93bmxvYWQgJiYgdGhpcy5sYXllci5kYXRhU291cmNlLm9wdGlvbnMuZG93bmxvYWQudXJsKSB8fFxuICAgICAgKHRoaXMubGF5ZXIub3B0aW9ucy53b3Jrc3BhY2U/LmVuYWJsZWQgJiZcbiAgICAgICAgdGhpcy5sYXllci5vcHRpb25zLndvcmtzcGFjZT8ud29ya3NwYWNlSWQgIT09IHRoaXMubGF5ZXIuaWQpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCI8YnV0dG9uXG4gICpuZ0lmPVwibGF5ZXJJc0V4cG9ydGFibGUoKVwiXG4gIG1hdC1pY29uLWJ1dHRvblxuICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uZG93bmxvYWQuYWN0aW9uJyB8IHRyYW5zbGF0ZVwiXG4gIFtjb2xvcl09XCJjb2xvclwiPlxuICA8IS0tIChjbGljayk9XCJvcGVuRG93bmxvYWQobGF5ZXIpXCI+IC0tPlxuICA8bWF0LWljb24gc3ZnSWNvbj1cImZpbGUtZXhwb3J0XCI+PC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuXG4iXX0=