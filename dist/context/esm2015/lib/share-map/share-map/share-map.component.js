import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/tabs";
import * as i4 from "./share-map-api.component";
import * as i5 from "./share-map-url.component";
import * as i6 from "@ngx-translate/core";
function ShareMapComponent_mat_tab_group_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab-group");
    i0.ɵɵelementStart(1, "mat-tab", 2);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "igo-share-map-api", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-tab", 2);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelement(6, "igo-share-map-url", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(2, 4, "igo.context.shareMap.shareWithApi"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("map", ctx_r0.map);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", i0.ɵɵpipeBind1(5, 6, "igo.context.shareMap.shareWithUrl"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("map", ctx_r0.map);
} }
function ShareMapComponent_igo_share_map_url_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-share-map-url", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("map", ctx_r1.map);
} }
export class ShareMapComponent {
    constructor(config) {
        this.config = config;
        this.hasApi = false;
        this.hasApi = this.config.getConfig('context.url') ? true : false;
    }
}
ShareMapComponent.ɵfac = function ShareMapComponent_Factory(t) { return new (t || ShareMapComponent)(i0.ɵɵdirectiveInject(i1.ConfigService)); };
ShareMapComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShareMapComponent, selectors: [["igo-share-map"]], inputs: { map: "map" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "map", 4, "ngIf"], [3, "label"], [3, "map"]], template: function ShareMapComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ShareMapComponent_mat_tab_group_0_Template, 7, 8, "mat-tab-group", 0);
        i0.ɵɵtemplate(1, ShareMapComponent_igo_share_map_url_1_Template, 1, 1, "igo-share-map-url", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hasApi);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hasApi);
    } }, directives: [i2.NgIf, i3.MatTabGroup, i3.MatTab, i4.ShareMapApiComponent, i5.ShareMapUrlComponent], pipes: [i6.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShareMapComponent, [{
        type: Component,
        args: [{
                selector: 'igo-share-map',
                templateUrl: './share-map.component.html',
                styleUrls: ['./share-map.component.scss']
            }]
    }], function () { return [{ type: i1.ConfigService }]; }, { map: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtbWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9zaGFyZS1tYXAvc2hhcmUtbWFwL3NoYXJlLW1hcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvc2hhcmUtbWFwL3NoYXJlLW1hcC9zaGFyZS1tYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0FqRCxxQ0FBK0I7SUFDN0Isa0NBQW1FOztJQUNqRSx1Q0FBbUQ7SUFDckQsaUJBQVU7SUFDVixrQ0FBbUU7O0lBQ2pFLHVDQUFtRDtJQUNyRCxpQkFBVTtJQUNaLGlCQUFnQjs7O0lBTkwsZUFBeUQ7SUFBekQsaUZBQXlEO0lBQzdDLGVBQVc7SUFBWCxnQ0FBVztJQUV2QixlQUF5RDtJQUF6RCxpRkFBeUQ7SUFDN0MsZUFBVztJQUFYLGdDQUFXOzs7SUFJbEMsdUNBQW1FOzs7SUFBaEMsZ0NBQVc7O0FEQzlDLE1BQU0sT0FBTyxpQkFBaUI7SUFNNUIsWUFDVSxNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBSHhCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFLcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDcEUsQ0FBQzs7a0ZBVlUsaUJBQWlCO29FQUFqQixpQkFBaUI7UUNWOUIsc0ZBT2dCO1FBRWhCLDhGQUFtRTs7UUFUbkQsaUNBQVk7UUFTUixlQUFhO1FBQWIsa0NBQWE7O3VGRENwQixpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUMxQztnRUFHVSxHQUFHO2tCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB0eXBlIHsgSWdvTWFwIH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLXNoYXJlLW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGFyZS1tYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaGFyZS1tYXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZU1hcENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgcHVibGljIGhhc0FwaSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaGFzQXBpID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdjb250ZXh0LnVybCcpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG59XG4iLCI8bWF0LXRhYi1ncm91cCAqbmdJZj1cImhhc0FwaVwiID5cbiAgPG1hdC10YWIgW2xhYmVsXT1cIidpZ28uY29udGV4dC5zaGFyZU1hcC5zaGFyZVdpdGhBcGknIHwgdHJhbnNsYXRlXCI+XG4gICAgPGlnby1zaGFyZS1tYXAtYXBpIFttYXBdPVwibWFwXCI+PC9pZ28tc2hhcmUtbWFwLWFwaT5cbiAgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBbbGFiZWxdPVwiJ2lnby5jb250ZXh0LnNoYXJlTWFwLnNoYXJlV2l0aFVybCcgfCB0cmFuc2xhdGVcIj5cbiAgICA8aWdvLXNoYXJlLW1hcC11cmwgW21hcF09XCJtYXBcIj48L2lnby1zaGFyZS1tYXAtdXJsPlxuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG5cbjxpZ28tc2hhcmUtbWFwLXVybCAqbmdJZj1cIiFoYXNBcGlcIiBbbWFwXT1cIm1hcFwiPjwvaWdvLXNoYXJlLW1hcC11cmw+XG4iXX0=