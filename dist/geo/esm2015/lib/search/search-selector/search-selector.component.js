import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { SEARCH_TYPES } from '../shared/search.enums';
import * as i0 from "@angular/core";
import * as i1 from "../shared/search-source.service";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/material/menu";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/radio";
import * as i7 from "@angular/common";
import * as i8 from "@ngx-translate/core";
function SearchSelectorComponent_mat_radio_button_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 7);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const searchType_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", searchType_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx_r1.getSearchTypeTitle(searchType_r2)), " ");
} }
/**
 * This component allows a user to select a search type yo enable. In it's
 * current version, only one search type can be selected at once (radio). If
 * this component were to support more than one search source enabled (checkbox),
 * the searchbar component would require a small change to it's
 * placeholder getter. The search source service already supports having
 * more than one search source enabled.
 */
export class SearchSelectorComponent {
    constructor(searchSourceService) {
        this.searchSourceService = searchSourceService;
        this.searchType$ = new BehaviorSubject(undefined);
        /**
         * List of available search types
         */
        this.searchTypes = SEARCH_TYPES;
        /**
         * Event emitted when the enabled search type changes
         */
        this.searchTypeChange = new EventEmitter();
    }
    /**
     * The search type enabled
     */
    set searchType(value) { this.setSearchType(value); }
    get searchType() { return this.searchType$.value; }
    ngOnInit() {
        this.searchType$$ = this.searchType$
            .pipe(distinctUntilChanged())
            .subscribe((searchType) => this.onSetSearchType(searchType));
    }
    ngOnDestroy() {
        this.searchType$$.unsubscribe();
    }
    /**
     * Enable the selected search type
     * @param searchType Search type
     * @internal
     */
    onSearchTypeChange(searchType) {
        this.setSearchType(searchType);
    }
    /**
     * Get a search type's title. The title
     * for all availables search typers needs to be defined in the locale
     * files or an error will be thrown.
     * @param searchType Search type
     * @internal
     */
    getSearchTypeTitle(searchType) {
        return `igo.geo.search.${searchType.toLowerCase()}.title`;
    }
    /**
     * Emit an event and enable the search sources of the given type.
     * @param searchType Search type
     */
    setSearchType(searchType) {
        this.searchType$.next(searchType);
    }
    onSetSearchType(searchType) {
        if (searchType === undefined || searchType === null) {
            return;
        }
        this.searchSourceService.enableSourcesByType(searchType);
        this.searchTypeChange.emit(searchType);
    }
}
SearchSelectorComponent.ɵfac = function SearchSelectorComponent_Factory(t) { return new (t || SearchSelectorComponent)(i0.ɵɵdirectiveInject(i1.SearchSourceService)); };
SearchSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchSelectorComponent, selectors: [["igo-search-selector"]], inputs: { searchTypes: "searchTypes", searchType: "searchType" }, outputs: { searchTypeChange: "searchTypeChange" }, decls: 9, vars: 8, consts: [[1, "igo-search-selector"], ["mat-icon-button", "", "color", "primary", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "igo-search-selector-button", 3, "matTooltip", "matMenuTriggerFor"], ["svgIcon", "menu-down"], ["xPosition", "before", "yPosition", "above", 1, "no-border-radius"], ["searchSelectorMenu", "matMenu"], [1, "igo-search-selector-radio-group", 3, "value", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SearchSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelement(3, "mat-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-menu", 3, 4);
        i0.ɵɵelementStart(6, "mat-radio-group", 5);
        i0.ɵɵlistener("change", function SearchSelectorComponent_Template_mat_radio_group_change_6_listener($event) { return ctx.onSearchTypeChange($event.value); });
        i0.ɵɵpipe(7, "async");
        i0.ɵɵtemplate(8, SearchSelectorComponent_mat_radio_button_8_Template, 3, 4, "mat-radio-button", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 4, "igo.geo.search.menu.tooltip"))("matMenuTriggerFor", _r0);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("value", i0.ɵɵpipeBind1(7, 6, ctx.searchType$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.searchTypes);
    } }, directives: [i2.MatButton, i3.MatTooltip, i4.MatMenuTrigger, i5.MatIcon, i4.MatMenu, i6.MatRadioGroup, i7.NgForOf, i6.MatRadioButton], pipes: [i8.TranslatePipe, i7.AsyncPipe], styles: [".igo-search-selector-button[_ngcontent-%COMP%]     div.mat-button-ripple-round{border-radius:0}.igo-search-selector-radio-group[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column}.igo-search-selector-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{margin:5px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchSelectorComponent, [{
        type: Component,
        args: [{
                selector: 'igo-search-selector',
                templateUrl: './search-selector.component.html',
                styleUrls: ['./search-selector.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.SearchSourceService }]; }, { searchTypes: [{
            type: Input
        }], searchType: [{
            type: Input
        }], searchTypeChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3NlYXJjaC9zZWFyY2gtc2VsZWN0b3Ivc2VhcmNoLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3NlYXJjaC9zZWFyY2gtc2VsZWN0b3Ivc2VhcmNoLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7SUNRaEQsMkNBQThFO0lBQzVFLFlBQ0Y7O0lBQUEsaUJBQW1COzs7O0lBRnNDLHFDQUFvQjtJQUMzRSxlQUNGO0lBREUsK0ZBQ0Y7O0FEUE47Ozs7Ozs7R0FPRztBQU9ILE1BQU0sT0FBTyx1QkFBdUI7SUEwQmxDLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBeEJuRCxnQkFBVyxHQUE0QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQU8vRTs7V0FFRztRQUNNLGdCQUFXLEdBQWEsWUFBWSxDQUFDO1FBUzlDOztXQUVHO1FBQ08scUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUVPLENBQUM7SUFaaEU7O09BRUc7SUFDSCxJQUNJLFVBQVUsQ0FBQyxLQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsSUFBSSxVQUFVLEtBQWEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFTM0QsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDakMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsVUFBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGtCQUFrQixDQUFDLFVBQWtCO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGtCQUFrQixDQUFDLFVBQWtCO1FBQ25DLE9BQU8sa0JBQWtCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDO0lBQzVELENBQUM7SUFFRDs7O09BR0c7SUFDSyxhQUFhLENBQUMsVUFBOEI7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLGVBQWUsQ0FBQyxVQUFrQjtRQUN4QyxJQUFJLFVBQVUsS0FBSyxTQUFTLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtZQUNuRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs4RkF6RVUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUM5QnBDLDhCQUFpQztRQUMvQixpQ0FPMkM7O1FBQ3pDLDhCQUF5QztRQUMzQyxpQkFBUztRQUVULHNDQUlvQjtRQUNsQiwwQ0FHOEM7UUFBNUMscUhBQVUsb0NBQWdDLElBQUM7O1FBQzNDLGtHQUVtQjtRQUNyQixpQkFBa0I7UUFDcEIsaUJBQVc7UUFFYixpQkFBTTs7O1FBcEJGLGVBQXdEO1FBQXhELGdGQUF3RCwwQkFBQTtRQVl0RCxlQUE2QjtRQUE3Qiw2REFBNkI7UUFFWSxlQUFjO1FBQWQseUNBQWM7O3VGRFNoRCx1QkFBdUI7Y0FObkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtzRUFhVSxXQUFXO2tCQUFuQixLQUFLO1lBTUYsVUFBVTtrQkFEYixLQUFLO1lBT0ksZ0JBQWdCO2tCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTRUFSQ0hfVFlQRVMgfSBmcm9tICcuLi9zaGFyZWQvc2VhcmNoLmVudW1zJztcbmltcG9ydCB7IFNlYXJjaFNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VhcmNoLXNvdXJjZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBhbGxvd3MgYSB1c2VyIHRvIHNlbGVjdCBhIHNlYXJjaCB0eXBlIHlvIGVuYWJsZS4gSW4gaXQnc1xuICogY3VycmVudCB2ZXJzaW9uLCBvbmx5IG9uZSBzZWFyY2ggdHlwZSBjYW4gYmUgc2VsZWN0ZWQgYXQgb25jZSAocmFkaW8pLiBJZlxuICogdGhpcyBjb21wb25lbnQgd2VyZSB0byBzdXBwb3J0IG1vcmUgdGhhbiBvbmUgc2VhcmNoIHNvdXJjZSBlbmFibGVkIChjaGVja2JveCksXG4gKiB0aGUgc2VhcmNoYmFyIGNvbXBvbmVudCB3b3VsZCByZXF1aXJlIGEgc21hbGwgY2hhbmdlIHRvIGl0J3NcbiAqIHBsYWNlaG9sZGVyIGdldHRlci4gVGhlIHNlYXJjaCBzb3VyY2Ugc2VydmljZSBhbHJlYWR5IHN1cHBvcnRzIGhhdmluZ1xuICogbW9yZSB0aGFuIG9uZSBzZWFyY2ggc291cmNlIGVuYWJsZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1zZWFyY2gtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHJlYWRvbmx5IHNlYXJjaFR5cGUkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBzZWFyY2ggdHlwZVxuICAgKi9cbiAgcHJpdmF0ZSBzZWFyY2hUeXBlJCQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogTGlzdCBvZiBhdmFpbGFibGUgc2VhcmNoIHR5cGVzXG4gICAqL1xuICBASW5wdXQoKSBzZWFyY2hUeXBlczogc3RyaW5nW10gPSBTRUFSQ0hfVFlQRVM7XG5cbiAgLyoqXG4gICAqIFRoZSBzZWFyY2ggdHlwZSBlbmFibGVkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoVHlwZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMuc2V0U2VhcmNoVHlwZSh2YWx1ZSk7IH1cbiAgZ2V0IHNlYXJjaFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc2VhcmNoVHlwZSQudmFsdWU7IH1cblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBlbmFibGVkIHNlYXJjaCB0eXBlIGNoYW5nZXNcbiAgICovXG4gIEBPdXRwdXQoKSBzZWFyY2hUeXBlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWFyY2hTb3VyY2VTZXJ2aWNlOiBTZWFyY2hTb3VyY2VTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VhcmNoVHlwZSQkID0gdGhpcy5zZWFyY2hUeXBlJFxuICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHNlYXJjaFR5cGU6IHN0cmluZykgPT4gdGhpcy5vblNldFNlYXJjaFR5cGUoc2VhcmNoVHlwZSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zZWFyY2hUeXBlJCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIHNlbGVjdGVkIHNlYXJjaCB0eXBlXG4gICAqIEBwYXJhbSBzZWFyY2hUeXBlIFNlYXJjaCB0eXBlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25TZWFyY2hUeXBlQ2hhbmdlKHNlYXJjaFR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuc2V0U2VhcmNoVHlwZShzZWFyY2hUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBzZWFyY2ggdHlwZSdzIHRpdGxlLiBUaGUgdGl0bGVcbiAgICogZm9yIGFsbCBhdmFpbGFibGVzIHNlYXJjaCB0eXBlcnMgbmVlZHMgdG8gYmUgZGVmaW5lZCBpbiB0aGUgbG9jYWxlXG4gICAqIGZpbGVzIG9yIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICAgKiBAcGFyYW0gc2VhcmNoVHlwZSBTZWFyY2ggdHlwZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldFNlYXJjaFR5cGVUaXRsZShzZWFyY2hUeXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYGlnby5nZW8uc2VhcmNoLiR7c2VhcmNoVHlwZS50b0xvd2VyQ2FzZSgpfS50aXRsZWA7XG4gIH1cblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudCBhbmQgZW5hYmxlIHRoZSBzZWFyY2ggc291cmNlcyBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAgICogQHBhcmFtIHNlYXJjaFR5cGUgU2VhcmNoIHR5cGVcbiAgICovXG4gIHByaXZhdGUgc2V0U2VhcmNoVHlwZShzZWFyY2hUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNlYXJjaFR5cGUkLm5leHQoc2VhcmNoVHlwZSk7XG4gIH1cblxuICBwcml2YXRlIG9uU2V0U2VhcmNoVHlwZShzZWFyY2hUeXBlOiBzdHJpbmcpIHtcbiAgICBpZiAoc2VhcmNoVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHNlYXJjaFR5cGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaFNvdXJjZVNlcnZpY2UuZW5hYmxlU291cmNlc0J5VHlwZShzZWFyY2hUeXBlKTtcbiAgICB0aGlzLnNlYXJjaFR5cGVDaGFuZ2UuZW1pdChzZWFyY2hUeXBlKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiaWdvLXNlYXJjaC1zZWxlY3RvclwiPlxuICA8YnV0dG9uXG4gICAgbWF0LWljb24tYnV0dG9uXG4gICAgY2xhc3M9XCJpZ28tc2VhcmNoLXNlbGVjdG9yLWJ1dHRvblwiXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICAgIG1hdFRvb2x0aXBTaG93RGVsYXk9XCI1MDBcIlxuICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLnNlYXJjaC5tZW51LnRvb2x0aXAnIHwgdHJhbnNsYXRlXCJcbiAgICBbbWF0TWVudVRyaWdnZXJGb3JdPVwic2VhcmNoU2VsZWN0b3JNZW51XCI+XG4gICAgPG1hdC1pY29uIHN2Z0ljb249XCJtZW51LWRvd25cIj48L21hdC1pY29uPlxuICA8L2J1dHRvbj5cblxuICA8bWF0LW1lbnVcbiAgICAjc2VhcmNoU2VsZWN0b3JNZW51PVwibWF0TWVudVwiXG4gICAgY2xhc3M9XCJuby1ib3JkZXItcmFkaXVzXCJcbiAgICB4UG9zaXRpb249XCJiZWZvcmVcIlxuICAgIHlQb3NpdGlvbj1cImFib3ZlXCI+XG4gICAgPG1hdC1yYWRpby1ncm91cFxuICAgICAgY2xhc3M9XCJpZ28tc2VhcmNoLXNlbGVjdG9yLXJhZGlvLWdyb3VwXCJcbiAgICAgIFt2YWx1ZV09XCJzZWFyY2hUeXBlJCB8IGFzeW5jXCJcbiAgICAgIChjaGFuZ2UpPVwib25TZWFyY2hUeXBlQ2hhbmdlKCRldmVudC52YWx1ZSlcIj5cbiAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBzZWFyY2hUeXBlIG9mIHNlYXJjaFR5cGVzXCIgW3ZhbHVlXT1cInNlYXJjaFR5cGVcIj5cbiAgICAgICAge3tnZXRTZWFyY2hUeXBlVGl0bGUoc2VhcmNoVHlwZSkgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICA8L21hdC1tZW51PlxuXG48L2Rpdj5cbiJdfQ==