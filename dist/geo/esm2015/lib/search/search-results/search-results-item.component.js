import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import olFormatGeoJSON from 'ol/format/GeoJSON';
import { getEntityTitle, getEntityTitleHtml, getEntityIcon } from '@igo2/common';
import { FeatureMotion, moveToOlFeatures } from '../../feature';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/material/button";
import * as i7 from "@igo2/common";
function SearchResultsItemComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-icon", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("svgIcon", ctx_r0.showIcons ? ctx_r0.icon : "blank");
} }
function SearchResultsItemComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h4", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r1.titleHtml, i0.ɵɵsanitizeHtml)("matTooltip", ctx_r1.tooltipHtml);
} }
function SearchResultsItemComponent_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r2.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.title);
} }
function SearchResultsItemComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function SearchResultsItemComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onZoomHandler(); });
    i0.ɵɵelement(1, "mat-icon", 8);
    i0.ɵɵelementEnd();
} }
const _c0 = [[["", "igoSearchItemToolbar", ""]]];
const _c1 = ["[igoSearchItemToolbar]"];
/**
 * Search results list item
 */
export class SearchResultsItemComponent {
    constructor() {
        /**
         * Whether there should be a zoom button
         */
        this.withZoomButton = false;
        this.zoomEvent = new EventEmitter();
        this.format = new olFormatGeoJSON();
    }
    get title() {
        return getEntityTitle(this.result);
    }
    /**
     * Search result HTML title
     * @internal
     */
    get titleHtml() {
        return getEntityTitleHtml(this.result);
    }
    /**
     * Search result tooltip
     * @internal
     */
    get tooltipHtml() {
        return this.titleHtml
            .replace(/<small?[^>]+(>|$)/g, '\n')
            .replace(/<\/?[^>]+(>|$)/g, '');
    }
    /**
     * Search result icon
     * @internal
     */
    get icon() {
        return getEntityIcon(this.result);
    }
    onZoomHandler() {
        const olFeature = this.format.readFeature(this.result.data, {
            dataProjection: this.result.data.projection,
            featureProjection: this.map.projection
        });
        moveToOlFeatures(this.map, [olFeature], FeatureMotion.Default);
    }
}
SearchResultsItemComponent.ɵfac = function SearchResultsItemComponent_Factory(t) { return new (t || SearchResultsItemComponent)(); };
SearchResultsItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchResultsItemComponent, selectors: [["igo-search-results-item"]], inputs: { result: "result", map: "map", showIcons: "showIcons", withZoomButton: "withZoomButton" }, outputs: { zoomEvent: "zoomEvent" }, ngContentSelectors: _c1, decls: 6, vars: 4, consts: [["mat-list-avatar", "", 3, "svgIcon", 4, "ngIf"], ["matLine", "", "matTooltipShowDelay", "500", "matTooltipClass", "search-result-tooltip", 3, "innerHtml", "matTooltip", 4, "ngIf"], ["matLine", "", "matTooltipShowDelay", "500", 3, "matTooltip", 4, "ngIf"], ["igoStopPropagation", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-list-avatar", "", 3, "svgIcon"], ["matLine", "", "matTooltipShowDelay", "500", "matTooltipClass", "search-result-tooltip", 3, "innerHtml", "matTooltip"], ["matLine", "", "matTooltipShowDelay", "500", 3, "matTooltip"], ["igoStopPropagation", "", "mat-icon-button", "", 3, "click"], ["svgIcon", "magnify"]], template: function SearchResultsItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "mat-list-item");
        i0.ɵɵtemplate(1, SearchResultsItemComponent_mat_icon_1_Template, 1, 1, "mat-icon", 0);
        i0.ɵɵtemplate(2, SearchResultsItemComponent_h4_2_Template, 1, 2, "h4", 1);
        i0.ɵɵtemplate(3, SearchResultsItemComponent_h4_3_Template, 2, 2, "h4", 2);
        i0.ɵɵtemplate(4, SearchResultsItemComponent_button_4_Template, 2, 0, "button", 3);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.titleHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.titleHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.withZoomButton);
    } }, directives: [i1.MatListItem, i2.NgIf, i3.MatIcon, i1.MatListAvatarCssMatStyler, i4.MatLine, i5.MatTooltip, i6.MatButton, i7.StopPropagationDirective], styles: ["[_nghost-%COMP%]     small{color:#8c8c8c}  .search-result-tooltip{white-space:pre-line}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchResultsItemComponent, [{
        type: Component,
        args: [{
                selector: 'igo-search-results-item',
                templateUrl: './search-results-item.component.html',
                styleUrls: ['./search-results-item.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { result: [{
            type: Input
        }], map: [{
            type: Input
        }], showIcons: [{
            type: Input
        }], withZoomButton: [{
            type: Input
        }], zoomEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9zZWFyY2gvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sZUFBZSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDZCxNQUFNLGNBQWMsQ0FBQztBQUd0QixPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lDVDlELDhCQUEyRjs7O0lBQXBELDZFQUF3Qzs7O0lBRS9FLHdCQUF3Sjs7O0lBQTFILCtEQUF1QixrQ0FBQTs7O0lBQ3JELDZCQUE4RTtJQUFBLFlBQVM7SUFBQSxpQkFBSzs7O0lBQW5DLHlDQUFvQjtJQUFDLGVBQVM7SUFBVCxrQ0FBUzs7OztJQUV2RixpQ0FHNEI7SUFBMUIsb01BQXlCO0lBQ3pCLDhCQUF1QztJQUN6QyxpQkFBUzs7OztBREVYOztHQUVHO0FBT0gsTUFBTSxPQUFPLDBCQUEwQjtJQXlEckM7UUF2Q0E7O1dBRUc7UUFDTSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV0QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQyxXQUFNLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztJQWdDeEIsQ0FBQztJQTlCaEIsSUFBSSxLQUFLO1FBQ1AsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLFNBQVM7UUFDWCxPQUFPLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUzthQUNsQixPQUFPLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDO2FBQ25DLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxJQUFJO1FBQ04sT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFJRCxhQUFhO1FBQ1gsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDMUQsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDM0MsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVO1NBQ3ZDLENBQUMsQ0FBQztRQUNILGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7b0dBakVVLDBCQUEwQjs2RUFBMUIsMEJBQTBCOztRQ3RCdkMscUNBQWU7UUFDYixxRkFBMkY7UUFFM0YseUVBQXdKO1FBQ3hKLHlFQUE0RjtRQUU1RixpRkFLUztRQUVULGtCQUVhO1FBRWYsaUJBQWdCOztRQWhCSCxlQUFVO1FBQVYsK0JBQVU7UUFFUixlQUFlO1FBQWYsb0NBQWU7UUFDZixlQUFnQjtRQUFoQixxQ0FBZ0I7UUFFcEIsZUFBb0I7UUFBcEIseUNBQW9COzt1RkRnQmxCLDBCQUEwQjtjQU50QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7Z0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3NDQUtVLE1BQU07a0JBQWQsS0FBSztZQUVHLEdBQUc7a0JBQVgsS0FBSztZQVVHLFNBQVM7a0JBQWpCLEtBQUs7WUFLRyxjQUFjO2tCQUF0QixLQUFLO1lBRUksU0FBUztrQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IG9sRm9ybWF0R2VvSlNPTiBmcm9tICdvbC9mb3JtYXQvR2VvSlNPTic7XG5cbmltcG9ydCB7XG4gIGdldEVudGl0eVRpdGxlLFxuICBnZXRFbnRpdHlUaXRsZUh0bWwsXG4gIGdldEVudGl0eUljb25cbn0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vc2hhcmVkL3NlYXJjaC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IEZlYXR1cmVNb3Rpb24sIG1vdmVUb09sRmVhdHVyZXMgfSBmcm9tICcuLi8uLi9mZWF0dXJlJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcCc7XG5cbi8qKlxuICogU2VhcmNoIHJlc3VsdHMgbGlzdCBpdGVtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1zZWFyY2gtcmVzdWx0cy1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1yZXN1bHRzLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtcmVzdWx0cy1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFNlYXJjaCByZXN1bHQgaXRlbVxuICAgKi9cbiAgQElucHV0KCkgcmVzdWx0OiBTZWFyY2hSZXN1bHQ7XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgLyoqXG4gICAqIFNlYXJjaCByZXN1bHQgdGl0bGVcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIC8qKlxuICAgKiB0byBzaG93IGhpZGUgcmVzdWx0cyBpY29uc1xuICAgKi9cbiAgQElucHV0KCkgc2hvd0ljb25zOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZXJlIHNob3VsZCBiZSBhIHpvb20gYnV0dG9uXG4gICAqL1xuICBASW5wdXQoKSB3aXRoWm9vbUJ1dHRvbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSB6b29tRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBmb3JtYXQgPSBuZXcgb2xGb3JtYXRHZW9KU09OKCk7XG5cbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldEVudGl0eVRpdGxlKHRoaXMucmVzdWx0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggcmVzdWx0IEhUTUwgdGl0bGVcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgdGl0bGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldEVudGl0eVRpdGxlSHRtbCh0aGlzLnJlc3VsdCk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIHJlc3VsdCB0b29sdGlwXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IHRvb2x0aXBIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVIdG1sXG4gICAgICAucmVwbGFjZSgvPHNtYWxsP1tePl0rKD58JCkvZywgJ1xcbicpXG4gICAgICAucmVwbGFjZSgvPFxcLz9bXj5dKyg+fCQpL2csICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggcmVzdWx0IGljb25cbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgaWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRFbnRpdHlJY29uKHRoaXMucmVzdWx0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBvblpvb21IYW5kbGVyKCkge1xuICAgIGNvbnN0IG9sRmVhdHVyZSA9IHRoaXMuZm9ybWF0LnJlYWRGZWF0dXJlKHRoaXMucmVzdWx0LmRhdGEsIHtcbiAgICAgIGRhdGFQcm9qZWN0aW9uOiB0aGlzLnJlc3VsdC5kYXRhLnByb2plY3Rpb24sXG4gICAgICBmZWF0dXJlUHJvamVjdGlvbjogdGhpcy5tYXAucHJvamVjdGlvblxuICAgIH0pO1xuICAgIG1vdmVUb09sRmVhdHVyZXModGhpcy5tYXAsIFtvbEZlYXR1cmVdLCBGZWF0dXJlTW90aW9uLkRlZmF1bHQpO1xuICB9XG59XG4iLCI8bWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1pY29uICpuZ0lmPVwiaWNvblwiIG1hdC1saXN0LWF2YXRhciBzdmdJY29uPVwie3tzaG93SWNvbnMgPyBpY29uIDogJ2JsYW5rJ319XCI+PC9tYXQtaWNvbj5cblxuICA8aDQgbWF0TGluZSAqbmdJZj1cInRpdGxlSHRtbFwiIFtpbm5lckh0bWxdPVwidGl0bGVIdG1sXCIgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiIFttYXRUb29sdGlwXT1cInRvb2x0aXBIdG1sXCIgbWF0VG9vbHRpcENsYXNzPVwic2VhcmNoLXJlc3VsdC10b29sdGlwXCI+PC9oND5cbiAgPGg0IG1hdExpbmUgKm5nSWY9XCIhdGl0bGVIdG1sXCIgbWF0VG9vbHRpcFNob3dEZWxheT1cIjUwMFwiIFttYXRUb29sdGlwXT1cInRpdGxlXCI+e3t0aXRsZX19PC9oND5cblxuICA8YnV0dG9uICpuZ0lmPVwid2l0aFpvb21CdXR0b25cIlxuICAgIGlnb1N0b3BQcm9wYWdhdGlvblxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIChjbGljayk9XCJvblpvb21IYW5kbGVyKClcIj5cbiAgICA8bWF0LWljb24gc3ZnSWNvbj1cIm1hZ25pZnlcIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cblxuICA8bmctY29udGVudFxuICAgIHNlbGVjdD1baWdvU2VhcmNoSXRlbVRvb2xiYXJdPlxuICA8L25nLWNvbnRlbnQ+XG5cbjwvbWF0LWxpc3QtaXRlbT5cbiJdfQ==