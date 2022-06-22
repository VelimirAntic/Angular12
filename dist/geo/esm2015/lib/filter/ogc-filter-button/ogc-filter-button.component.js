import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
function OgcFilterButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 3, "igo.geo.filter.filterBy"))("color", ctx_r0.color);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matBadge", ctx_r0.badge);
} }
function OgcFilterButtonComponent_div_1_igo_ogc_filterable_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-ogc-filterable-item", 7);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("header", false)("map", ctx_r3.layer.map)("layer", ctx_r3.layer);
} }
function OgcFilterButtonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4, 5);
    i0.ɵɵtemplate(2, OgcFilterButtonComponent_div_1_igo_ogc_filterable_item_2_Template, 1, 3, "igo-ogc-filterable-item", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.ogcFilterCollapse && ctx_r1.options.ogcFilters.enabled);
} }
export class OgcFilterButtonComponent {
    constructor() {
        this.color = 'primary';
        this.ogcFilterCollapse = false;
    }
    get badge() {
        const filter = this.options.ogcFilters;
        let cnt = 0;
        if (filter && !filter.advancedOgcFilters) {
            if (filter.pushButtons) {
                const pushButtons = filter.pushButtons;
                const currentPushButtonGroup = pushButtons.groups.find(gr => gr.enabled);
                let cntPushButtons = 0;
                if (currentPushButtonGroup) {
                    currentPushButtonGroup.computedSelectors.map(cb => cntPushButtons += cb.selectors.filter(button => button.enabled).length);
                }
                cnt += cntPushButtons;
            }
            if (filter.checkboxes) {
                const checkboxes = filter.checkboxes;
                const currentCheckboxGroup = checkboxes.groups.find(gr => gr.enabled);
                let cntCheckboxes = 0;
                if (currentCheckboxGroup) {
                    currentCheckboxGroup.computedSelectors.map(cb => cntCheckboxes += cb.selectors.filter(checkbox => checkbox.enabled).length);
                }
                cnt += cntCheckboxes;
            }
            if (filter.radioButtons) {
                const radioButtons = filter.radioButtons;
                const currentRadioButtonsGroup = radioButtons.groups.find(gr => gr.enabled);
                let cntRadioButtons = 0;
                if (currentRadioButtonsGroup) {
                    currentRadioButtonsGroup.computedSelectors.map(cb => cntRadioButtons += cb.selectors.filter(radio => radio.enabled).length);
                }
                cnt += cntRadioButtons;
            }
            if (filter.select) {
                const select = filter.select;
                const currentSelectGroup = select.groups.find(gr => gr.enabled);
                let cntSelect = 0;
                if (currentSelectGroup) {
                    currentSelectGroup.computedSelectors.map(cb => cntSelect += cb.selectors.filter(multi => multi.enabled).length);
                }
                cnt += cntSelect;
            }
        }
        else if (filter && filter.filters && !filter.filters.filters) {
            return 1;
        }
        else if (filter && filter.filters && filter.filters.filters) {
            return filter.filters.filters.length;
        }
        if (filter.filters && filter.filters.operator === 'During' && filter.filters.active &&
            filter.interfaceOgcFilters && filter.interfaceOgcFilters[0].active) {
            const filterActiveValue = filter.interfaceOgcFilters[0];
            if (filter.filters.calendarModeYear) {
                // year mode check just year
                if ((filterActiveValue.begin.substring(0, 4) !== this.options.minDate.substring(0, 4)) ||
                    (filterActiveValue.end.substring(0, 4) !== this.options.maxDate.substring(0, 4))) {
                    cnt += 1;
                }
            }
            else if ((filterActiveValue.begin !== this.options.minDate) || (filterActiveValue.end !== this.options.maxDate)) {
                cnt += 1;
            }
        }
        return cnt > 0 ? cnt : undefined;
    }
    get layer() {
        return this._layer;
    }
    set layer(value) {
        this._layer = value;
        if (value) {
            this.options = this.layer.dataSource.options;
        }
    }
    ngOnInit() {
        this.options = this.layer.dataSource.options;
    }
}
OgcFilterButtonComponent.ɵfac = function OgcFilterButtonComponent_Factory(t) { return new (t || OgcFilterButtonComponent)(); };
OgcFilterButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OgcFilterButtonComponent, selectors: [["igo-ogc-filter-button"]], inputs: { layer: "layer", map: "map", color: "color", header: "header" }, decls: 2, vars: 2, consts: [["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", 4, "ngIf"], ["class", "igo-layer-actions-container", 4, "ngIf"], ["mat-icon-button", "", "collapsibleButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color"], ["matBadgeColor", "warn", "matBadgeSize", "medium", "svgIcon", "filter", 3, "matBadge"], [1, "igo-layer-actions-container"], ["ogcFilter", ""], ["igoListItem", "", 3, "header", "map", "layer", 4, "ngIf"], ["igoListItem", "", 3, "header", "map", "layer"]], template: function OgcFilterButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, OgcFilterButtonComponent_button_0_Template, 3, 5, "button", 0);
        i0.ɵɵtemplate(1, OgcFilterButtonComponent_div_1_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.header && ctx.options.ogcFilters && ctx.options.ogcFilters.enabled && (ctx.options.ogcFilters.pushButtons || ctx.options.ogcFilters.checkboxes || ctx.options.ogcFilters.radioButtons || ctx.options.ogcFilters.select || ctx.options.ogcFilters.editable));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.ogcFilters && ctx.options.ogcFilters.enabled && (ctx.options.ogcFilters.pushButtons || ctx.options.ogcFilters.checkboxes || ctx.options.ogcFilters.radioButtons || ctx.options.ogcFilters.select || ctx.options.ogcFilters.editable));
    } }, styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OgcFilterButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-ogc-filter-button',
                templateUrl: './ogc-filter-button.component.html',
                styleUrls: ['./ogc-filter-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { layer: [{
            type: Input
        }], map: [{
            type: Input
        }], color: [{
            type: Input
        }], header: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZmlsdGVyL29nYy1maWx0ZXItYnV0dG9uL29nYy1maWx0ZXItYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9vZ2MtZmlsdGVyLWJ1dHRvbi9vZ2MtZmlsdGVyLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0lDQWxGLGlDQVFrQjs7SUFDaEIsOEJBQW9HO0lBQ3RHLGlCQUFTOzs7SUFIUCw0RUFBb0QsdUJBQUE7SUFFMUMsZUFBa0I7SUFBbEIsdUNBQWtCOzs7SUFNNUIsNkNBTTBCOzs7SUFIeEIsOEJBQWdCLHlCQUFBLHVCQUFBOzs7SUFOcEIsaUNBRWtLO0lBQ2hLLHVIQU0wQjtJQUM1QixpQkFBTTs7O0lBTkQsZUFBcUQ7SUFBckQsb0ZBQXFEOztBREoxRCxNQUFNLE9BQU8sd0JBQXdCO0lBeUZuQztRQU5TLFVBQUssR0FBVyxTQUFTLENBQUM7UUFJNUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBRWxCLENBQUM7SUFyRmhCLElBQUksS0FBSztRQUNQLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBaUIsQ0FBQztRQUM5QyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtZQUN4QyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQ3RCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUE2QixDQUFDO2dCQUN6RCxNQUFNLHNCQUFzQixHQUFHLFdBQVcs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QyxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUF5QyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQztJQWFELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQXlDLENBQUM7SUFDakYsQ0FBQzs7Z0dBN0ZVLHdCQUF3QjsyRUFBeEIsd0JBQXdCO1FDWnJDLCtFQVVTO1FBRVQseUVBVU07O1FBckJILHFSQUMrSjtRQVdqSyxlQUMrSjtRQUQvSix1UUFDK0o7O3VGREZuSix3QkFBd0I7Y0FOcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtzQ0F1RUssS0FBSztrQkFEUixLQUFLO1lBWUcsR0FBRztrQkFBWCxLQUFLO1lBRUcsS0FBSztrQkFBYixLQUFLO1lBRUcsTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9sYXllcnMvbGF5ZXInO1xuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwJztcbmltcG9ydCB7IE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucywgSWdvT2djU2VsZWN0b3IgfSBmcm9tICcuLi9zaGFyZWQvb2djLWZpbHRlci5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tb2djLWZpbHRlci1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vb2djLWZpbHRlci1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vZ2MtZmlsdGVyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBPZ2NGaWx0ZXJCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBvcHRpb25zOiBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnM7XG5cbiAgZ2V0IGJhZGdlKCkge1xuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMub3B0aW9ucy5vZ2NGaWx0ZXJzIGFzIGFueTtcbiAgICBsZXQgY250ID0gMDtcbiAgICBpZiAoZmlsdGVyICYmICFmaWx0ZXIuYWR2YW5jZWRPZ2NGaWx0ZXJzKSB7XG4gICAgICBpZiAoZmlsdGVyLnB1c2hCdXR0b25zKSB7XG4gICAgICAgIGNvbnN0IHB1c2hCdXR0b25zID0gZmlsdGVyLnB1c2hCdXR0b25zIGFzIElnb09nY1NlbGVjdG9yO1xuICAgICAgICBjb25zdCBjdXJyZW50UHVzaEJ1dHRvbkdyb3VwID0gcHVzaEJ1dHRvbnMuZ3JvdXBzLmZpbmQoZ3IgPT4gZ3IuZW5hYmxlZCk7XG4gICAgICAgIGxldCBjbnRQdXNoQnV0dG9ucyA9IDA7XG4gICAgICAgIGlmIChjdXJyZW50UHVzaEJ1dHRvbkdyb3VwKSB7XG4gICAgICAgICAgY3VycmVudFB1c2hCdXR0b25Hcm91cC5jb21wdXRlZFNlbGVjdG9ycy5tYXAoY2IgPT4gY250UHVzaEJ1dHRvbnMgKz0gKGNiLnNlbGVjdG9ycyBhcyBhbnkpLmZpbHRlcihcbiAgICAgICAgICAgIGJ1dHRvbiA9PiBidXR0b24uZW5hYmxlZCkubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBjbnQgKz0gY250UHVzaEJ1dHRvbnM7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLmNoZWNrYm94ZXMpIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGZpbHRlci5jaGVja2JveGVzIGFzIElnb09nY1NlbGVjdG9yO1xuICAgICAgICBjb25zdCBjdXJyZW50Q2hlY2tib3hHcm91cCA9IGNoZWNrYm94ZXMuZ3JvdXBzLmZpbmQoZ3IgPT4gZ3IuZW5hYmxlZCk7XG4gICAgICAgIGxldCBjbnRDaGVja2JveGVzID0gMDtcbiAgICAgICAgaWYgKGN1cnJlbnRDaGVja2JveEdyb3VwKSB7XG4gICAgICAgICAgY3VycmVudENoZWNrYm94R3JvdXAuY29tcHV0ZWRTZWxlY3RvcnMubWFwKGNiID0+IGNudENoZWNrYm94ZXMgKz0gKGNiLnNlbGVjdG9ycyBhcyBhbnkpLmZpbHRlcihcbiAgICAgICAgICAgIGNoZWNrYm94ID0+IGNoZWNrYm94LmVuYWJsZWQpLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY250ICs9IGNudENoZWNrYm94ZXM7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLnJhZGlvQnV0dG9ucykge1xuICAgICAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBmaWx0ZXIucmFkaW9CdXR0b25zIGFzIElnb09nY1NlbGVjdG9yO1xuICAgICAgICBjb25zdCBjdXJyZW50UmFkaW9CdXR0b25zR3JvdXAgPSByYWRpb0J1dHRvbnMuZ3JvdXBzLmZpbmQoZ3IgPT4gZ3IuZW5hYmxlZCk7XG4gICAgICAgIGxldCBjbnRSYWRpb0J1dHRvbnMgPSAwO1xuICAgICAgICBpZiAoY3VycmVudFJhZGlvQnV0dG9uc0dyb3VwKSB7XG4gICAgICAgICAgY3VycmVudFJhZGlvQnV0dG9uc0dyb3VwLmNvbXB1dGVkU2VsZWN0b3JzLm1hcChjYiA9PiBjbnRSYWRpb0J1dHRvbnMgKz0gKGNiLnNlbGVjdG9ycyBhcyBhbnkpLmZpbHRlcihcbiAgICAgICAgICAgIHJhZGlvID0+IHJhZGlvLmVuYWJsZWQpLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY250ICs9IGNudFJhZGlvQnV0dG9ucztcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXIuc2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGZpbHRlci5zZWxlY3QgYXMgSWdvT2djU2VsZWN0b3I7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RHcm91cCA9IHNlbGVjdC5ncm91cHMuZmluZChnciA9PiBnci5lbmFibGVkKTtcbiAgICAgICAgbGV0IGNudFNlbGVjdCA9IDA7XG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0R3JvdXApIHtcbiAgICAgICAgICBjdXJyZW50U2VsZWN0R3JvdXAuY29tcHV0ZWRTZWxlY3RvcnMubWFwKGNiID0+IGNudFNlbGVjdCArPSAoY2Iuc2VsZWN0b3JzIGFzIGFueSkuZmlsdGVyKFxuICAgICAgICAgICAgbXVsdGkgPT4gbXVsdGkuZW5hYmxlZCkubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBjbnQgKz0gY250U2VsZWN0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmlsdGVyICYmIGZpbHRlci5maWx0ZXJzICYmICFmaWx0ZXIuZmlsdGVycy5maWx0ZXJzKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlciAmJiBmaWx0ZXIuZmlsdGVycyAmJiBmaWx0ZXIuZmlsdGVycy5maWx0ZXJzKSB7XG4gICAgICByZXR1cm4gZmlsdGVyLmZpbHRlcnMuZmlsdGVycy5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChmaWx0ZXIuZmlsdGVycyAmJiBmaWx0ZXIuZmlsdGVycy5vcGVyYXRvciA9PT0gJ0R1cmluZycgJiYgZmlsdGVyLmZpbHRlcnMuYWN0aXZlICYmXG4gICAgICBmaWx0ZXIuaW50ZXJmYWNlT2djRmlsdGVycyAmJiBmaWx0ZXIuaW50ZXJmYWNlT2djRmlsdGVyc1swXS5hY3RpdmUpIHtcbiAgICAgIGNvbnN0IGZpbHRlckFjdGl2ZVZhbHVlID0gZmlsdGVyLmludGVyZmFjZU9nY0ZpbHRlcnNbMF07XG4gICAgICBpZiAoZmlsdGVyLmZpbHRlcnMuY2FsZW5kYXJNb2RlWWVhcikge1xuICAgICAgICAvLyB5ZWFyIG1vZGUgY2hlY2sganVzdCB5ZWFyXG4gICAgICAgIGlmICgoZmlsdGVyQWN0aXZlVmFsdWUuYmVnaW4uc3Vic3RyaW5nKDAsNCkgIT09IHRoaXMub3B0aW9ucy5taW5EYXRlLnN1YnN0cmluZygwLDQpICkgfHxcbiAgICAgICAgKGZpbHRlckFjdGl2ZVZhbHVlLmVuZC5zdWJzdHJpbmcoMCw0KSAhPT0gdGhpcy5vcHRpb25zLm1heERhdGUuc3Vic3RyaW5nKDAsNCkgKSkge1xuICAgICAgICAgIGNudCArPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKChmaWx0ZXJBY3RpdmVWYWx1ZS5iZWdpbiAhPT0gdGhpcy5vcHRpb25zLm1pbkRhdGUpIHx8IChmaWx0ZXJBY3RpdmVWYWx1ZS5lbmQgIT09IHRoaXMub3B0aW9ucy5tYXhEYXRlKSkge1xuICAgICAgICBjbnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNudCA+IDAgPyBjbnQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgbGF5ZXIoKTogTGF5ZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXllcjtcbiAgfVxuICBzZXQgbGF5ZXIodmFsdWU6IExheWVyKSB7XG4gICAgdGhpcy5fbGF5ZXIgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMubGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zIGFzIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbGF5ZXI7XG5cbiAgQElucHV0KCkgbWFwOiBJZ29NYXA7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdwcmltYXJ5JztcblxuICBASW5wdXQoKSBoZWFkZXI6IGJvb2xlYW47XG5cbiAgcHVibGljIG9nY0ZpbHRlckNvbGxhcHNlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMubGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zIGFzIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucztcbiAgfVxufVxuIiwiPGJ1dHRvblxuICAqbmdJZj1cImhlYWRlciAmJiBvcHRpb25zLm9nY0ZpbHRlcnMgJiYgb3B0aW9ucy5vZ2NGaWx0ZXJzLmVuYWJsZWQgJiZcbiAgKG9wdGlvbnMub2djRmlsdGVycy5wdXNoQnV0dG9ucyB8fCBvcHRpb25zLm9nY0ZpbHRlcnMuY2hlY2tib3hlcyB8fCBvcHRpb25zLm9nY0ZpbHRlcnMucmFkaW9CdXR0b25zIHx8IG9wdGlvbnMub2djRmlsdGVycy5zZWxlY3QgfHwgb3B0aW9ucy5vZ2NGaWx0ZXJzLmVkaXRhYmxlKVwiXG4gIG1hdC1pY29uLWJ1dHRvblxuICBjb2xsYXBzaWJsZUJ1dHRvblxuICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uZmlsdGVyLmZpbHRlckJ5JyB8IHRyYW5zbGF0ZVwiXG4gIFtjb2xvcl09XCJjb2xvclwiPlxuICA8bWF0LWljb24gW21hdEJhZGdlXT1cImJhZGdlXCIgbWF0QmFkZ2VDb2xvcj1cIndhcm5cIiBtYXRCYWRnZVNpemU9XCJtZWRpdW1cIiBzdmdJY29uPVwiZmlsdGVyXCI+PC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuXG48ZGl2ICNvZ2NGaWx0ZXIgY2xhc3M9XCJpZ28tbGF5ZXItYWN0aW9ucy1jb250YWluZXJcIlxuKm5nSWY9XCJvcHRpb25zLm9nY0ZpbHRlcnMgJiYgb3B0aW9ucy5vZ2NGaWx0ZXJzLmVuYWJsZWQgJiZcbihvcHRpb25zLm9nY0ZpbHRlcnMucHVzaEJ1dHRvbnMgfHwgb3B0aW9ucy5vZ2NGaWx0ZXJzLmNoZWNrYm94ZXMgfHwgb3B0aW9ucy5vZ2NGaWx0ZXJzLnJhZGlvQnV0dG9ucyB8fCBvcHRpb25zLm9nY0ZpbHRlcnMuc2VsZWN0IHx8IG9wdGlvbnMub2djRmlsdGVycy5lZGl0YWJsZSlcIj5cbiAgPGlnby1vZ2MtZmlsdGVyYWJsZS1pdGVtXG4gICAgKm5nSWY9XCJvZ2NGaWx0ZXJDb2xsYXBzZSAmJiBvcHRpb25zLm9nY0ZpbHRlcnMuZW5hYmxlZFwiXG4gICAgaWdvTGlzdEl0ZW1cbiAgICBbaGVhZGVyXT1cImZhbHNlXCJcbiAgICBbbWFwXT1cImxheWVyLm1hcFwiXG4gICAgW2xheWVyXT1cImxheWVyXCI+XG4gIDwvaWdvLW9nYy1maWx0ZXJhYmxlLWl0ZW0+XG48L2Rpdj5cbiJdfQ==