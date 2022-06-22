import { Component, Input, ContentChildren, HostListener } from '@angular/core';
import { ListItemDirective } from './list-item.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "../clickout/clickout.directive";
import * as i3 from "@angular/common";
const _c0 = function (a0) { return { "selectable": a0 }; };
const _c1 = ["*"];
export class ListComponent {
    constructor(el) {
        this.el = el;
        this._navigation = true;
        this._selection = true;
        this.subscriptions = [];
    }
    get navigation() {
        return this._navigation;
    }
    set navigation(value) {
        this._navigation = value;
    }
    get selection() {
        return this._selection;
    }
    set selection(value) {
        this._selection = value;
    }
    get selectedItem() {
        return this._selectedItem;
    }
    set selectedItem(value) {
        this.focusedItem = value;
        this._selectedItem = value;
    }
    get focusedItem() {
        return this._focusedItem;
    }
    set focusedItem(value) {
        this._focusedItem = value;
    }
    handleKeyboardEvent(event) {
        // It would be nice to be able to unsubscribe to the event
        // completely but until ES7 this won't be possible because
        // document events are not observables
        if (this.navigationEnabled) {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                event.preventDefault();
                this.navigate(event.key);
            }
            else if (event.key === 'Enter') {
                this.select(this.focusedItem);
            }
        }
    }
    ngOnInit() {
        this.enableNavigation();
    }
    ngAfterViewInit() {
        if (this.listItems.length) {
            this.init();
        }
        this.listItems$$ = this.listItems.changes.subscribe((items) => this.init());
    }
    ngOnDestroy() {
        this.listItems$$.unsubscribe();
    }
    focus(item) {
        if (!this.selection) {
            return;
        }
        this.unfocus();
        // We need to make this check because dynamic
        // lists such as in the search results list may fail
        if (item !== undefined) {
            item.focused = true;
        }
    }
    unfocus() {
        if (this.focusedItem !== undefined) {
            this.focusedItem.focused = false;
        }
        this.focusedItem = undefined;
    }
    focusNext() {
        const items = this.listItems.toArray();
        let item;
        const igoList = this.el.nativeElement;
        let disabled = true;
        let index = this.getFocusedIndex();
        if (index === undefined) {
            index = -1;
        }
        while (disabled && index < items.length - 1) {
            index += 1;
            item = items[index];
            disabled = item.disabled;
        }
        if (item !== undefined) {
            this.focus(item);
        }
        if (!items[index + 1]) {
            igoList.scrollTop = igoList.scrollHeight - igoList.clientHeight;
            return;
        }
        if (item !== undefined && !this.isScrolledIntoView(item.el.nativeElement)) {
            igoList.scrollTop =
                item.el.nativeElement.offsetTop +
                    item.el.nativeElement.children[0].offsetHeight -
                    igoList.clientHeight;
        }
    }
    focusPrevious() {
        const items = this.listItems.toArray();
        let item;
        const igoList = this.el.nativeElement;
        let disabled = true;
        let index = this.getFocusedIndex();
        while (disabled && index > 0) {
            index -= 1;
            item = items[index];
            disabled = item.disabled;
        }
        if (item !== undefined) {
            this.focus(item);
        }
        if (!items[index - 1]) {
            igoList.scrollTop = 0;
            return;
        }
        if (item !== undefined && !this.isScrolledIntoView(item.el.nativeElement)) {
            const padding = 3;
            igoList.scrollTop = item.el.nativeElement.offsetTop - padding;
        }
    }
    select(item) {
        if (!this.selection) {
            return;
        }
        this.unselect();
        if (item !== undefined) {
            item.selected = true;
        }
    }
    unselect() {
        this.unfocus();
        if (this.selectedItem !== undefined) {
            this.selectedItem.selected = false;
        }
        this.selectedItem = undefined;
    }
    enableNavigation() {
        if (this.navigation) {
            this.navigationEnabled = true;
        }
    }
    disableNavigation() {
        this.navigationEnabled = false;
    }
    scrollToItem(item) {
        this.el.nativeElement.scrollTop = item.getOffsetTop();
    }
    isScrolledIntoView(elem) {
        const docViewTop = this.el.nativeElement.scrollTop + this.el.nativeElement.offsetTop;
        const docViewBottom = docViewTop + this.el.nativeElement.clientHeight;
        const elemTop = elem.offsetTop;
        const elemBottom = elemTop + elem.children[0].offsetHeight;
        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
    init() {
        this.subscribe();
        this.selectedItem = this.findSelectedItem();
        this.focusedItem = this.findFocusedItem();
        this.enableNavigation();
    }
    subscribe() {
        this.unsubscribe();
        this.listItems.toArray().forEach(item => {
            this.subscriptions.push(item.beforeSelect.subscribe((item2) => this.handleItemBeforeSelect(item2)));
            this.subscriptions.push(item.select.subscribe((item2) => this.handleItemSelect(item2)));
            this.subscriptions.push(item.beforeFocus.subscribe((item2) => this.handleItemBeforeFocus(item2)));
            this.subscriptions.push(item.focus.subscribe((item2) => this.handleItemFocus(item2)));
        }, this);
    }
    unsubscribe() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
        this.subscriptions = [];
    }
    handleItemBeforeFocus(item) {
        if (item !== this.focusedItem) {
            this.unfocus();
        }
    }
    handleItemFocus(item) {
        this.focusedItem = item;
    }
    handleItemBeforeSelect(item) {
        if (item !== this.focusedItem) {
            this.unselect();
        }
    }
    handleItemSelect(item) {
        this.selectedItem = item;
    }
    findSelectedItem() {
        return this.listItems.toArray().find(item => item.selected);
    }
    findFocusedItem() {
        return this.listItems.toArray().find(item => item.focused);
    }
    getFocusedIndex() {
        return this.listItems
            .toArray()
            .findIndex(item => item === this.focusedItem);
    }
    navigate(key) {
        switch (key) {
            case 'ArrowUp':
                this.focusPrevious();
                break;
            case 'ArrowDown':
                this.focusNext();
                break;
            default:
                break;
        }
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["igo-list"]], contentQueries: function ListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, ListItemDirective, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listItems = _t);
    } }, hostBindings: function ListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function ListComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, i0.ɵɵresolveDocument)("enter", function ListComponent_enter_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { navigation: "navigation", selection: "selection" }, ngContentSelectors: _c1, decls: 2, vars: 3, consts: [["igoClickout", "", 3, "ngClass", "clickout", "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "mat-list", 0);
        i0.ɵɵlistener("clickout", function ListComponent_Template_mat_list_clickout_0_listener() { return ctx.disableNavigation(); })("click", function ListComponent_Template_mat_list_click_0_listener() { return ctx.enableNavigation(); });
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c0, ctx.selection));
    } }, directives: [i1.MatList, i2.ClickoutDirective, i3.NgClass], styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:auto;position:relative}mat-list[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]{position:static}[_nghost-%COMP%]     .mat-list .mat-list-item .mat-list-text>*{white-space:normal;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;max-height:36px;line-height:18px;-webkit-box-orient:vertical;-webkit-line-clamp:2}[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-item-avatar .mat-list-item-content{display:-webkit-flex;height:46px;padding:3px}[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-item-avatar{height:46px}[_nghost-%COMP%]     .mat-list   igo-collapsible>.mat-list-item>.mat-list-item-content>.mat-list-text>.mat-line{font-weight:bold;opacity:.9}[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-item-avatar .mat-list-item-content>mat-icon{padding:8px}[_nghost-%COMP%]     [igolistitem] mat-list-item [mat-list-avatar]{height:auto;width:40px}[_nghost-%COMP%]   mat-list.selectable[_ngcontent-%COMP%]     [igolistitem]:not(.igo-list-item-disabled) mat-list-item:hover{cursor:pointer}[_nghost-%COMP%]     [igolistitem]:focus{outline:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'igo-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { navigation: [{
            type: Input
        }], selection: [{
            type: Input
        }], listItems: [{
            type: ContentChildren,
            args: [ListItemDirective, { descendants: true }]
        }], handleKeyboardEvent: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }, {
            type: HostListener,
            args: ['document:enter', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxFQUNMLGVBQWUsRUFDZixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFPMUQsTUFBTSxPQUFPLGFBQWE7SUEyRHhCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBbkQxQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQVNuQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBcUJsQixrQkFBYSxHQUFtQixFQUFFLENBQUM7SUFxQk4sQ0FBQztJQTFEdEMsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFHRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUdELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBd0I7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FB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LFFBQVEsQ0FBQzs7a0JBQzNDLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBIb3N0TGlzdGVuZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7IFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTGlzdEl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2xpc3QtaXRlbS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIGdldCBuYXZpZ2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uO1xuICB9XG4gIHNldCBuYXZpZ2F0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbmF2aWdhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX25hdmlnYXRpb24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbjtcbiAgfVxuICBzZXQgc2VsZWN0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfc2VsZWN0aW9uID0gdHJ1ZTtcblxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW07XG4gIH1cbiAgc2V0IHNlbGVjdGVkSXRlbSh2YWx1ZTogTGlzdEl0ZW1EaXJlY3RpdmUpIHtcbiAgICB0aGlzLmZvY3VzZWRJdGVtID0gdmFsdWU7XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbURpcmVjdGl2ZTtcblxuICBnZXQgZm9jdXNlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWRJdGVtO1xuICB9XG4gIHNldCBmb2N1c2VkSXRlbSh2YWx1ZTogTGlzdEl0ZW1EaXJlY3RpdmUpIHtcbiAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2ZvY3VzZWRJdGVtOiBMaXN0SXRlbURpcmVjdGl2ZTtcblxuICBwcml2YXRlIG5hdmlnYXRpb25FbmFibGVkOiBib29sZWFuO1xuICBwcml2YXRlIGxpc3RJdGVtcyQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBAQ29udGVudENoaWxkcmVuKExpc3RJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIGxpc3RJdGVtczogUXVlcnlMaXN0PExpc3RJdGVtRGlyZWN0aXZlPjtcblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZW50ZXInLCBbJyRldmVudCddKVxuICBoYW5kbGVLZXlib2FyZEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gSXQgd291bGQgYmUgbmljZSB0byBiZSBhYmxlIHRvIHVuc3Vic2NyaWJlIHRvIHRoZSBldmVudFxuICAgIC8vIGNvbXBsZXRlbHkgYnV0IHVudGlsIEVTNyB0aGlzIHdvbid0IGJlIHBvc3NpYmxlIGJlY2F1c2VcbiAgICAvLyBkb2N1bWVudCBldmVudHMgYXJlIG5vdCBvYnNlcnZhYmxlc1xuICAgIGlmICh0aGlzLm5hdmlnYXRpb25FbmFibGVkKSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm5hdmlnYXRlKGV2ZW50LmtleSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLmZvY3VzZWRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZW5hYmxlTmF2aWdhdGlvbigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmxpc3RJdGVtcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHRoaXMubGlzdEl0ZW1zJCQgPSB0aGlzLmxpc3RJdGVtcy5jaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgIChpdGVtczogTGlzdEl0ZW1EaXJlY3RpdmVbXSkgPT4gdGhpcy5pbml0KClcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5saXN0SXRlbXMkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZm9jdXMoaXRlbT86IExpc3RJdGVtRGlyZWN0aXZlKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudW5mb2N1cygpO1xuXG4gICAgLy8gV2UgbmVlZCB0byBtYWtlIHRoaXMgY2hlY2sgYmVjYXVzZSBkeW5hbWljXG4gICAgLy8gbGlzdHMgc3VjaCBhcyBpbiB0aGUgc2VhcmNoIHJlc3VsdHMgbGlzdCBtYXkgZmFpbFxuICAgIGlmIChpdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGl0ZW0uZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdW5mb2N1cygpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZvY3VzZWRJdGVtLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzZWRJdGVtID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZm9jdXNOZXh0KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5saXN0SXRlbXMudG9BcnJheSgpO1xuICAgIGxldCBpdGVtO1xuICAgIGNvbnN0IGlnb0xpc3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGRpc2FibGVkID0gdHJ1ZTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmdldEZvY3VzZWRJbmRleCgpO1xuICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRleCA9IC0xO1xuICAgIH1cblxuICAgIHdoaWxlIChkaXNhYmxlZCAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgICAgZGlzYWJsZWQgPSBpdGVtLmRpc2FibGVkO1xuICAgIH1cblxuICAgIGlmIChpdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZm9jdXMoaXRlbSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtc1tpbmRleCArIDFdKSB7XG4gICAgICBpZ29MaXN0LnNjcm9sbFRvcCA9IGlnb0xpc3Quc2Nyb2xsSGVpZ2h0IC0gaWdvTGlzdC5jbGllbnRIZWlnaHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5pc1Njcm9sbGVkSW50b1ZpZXcoaXRlbS5lbC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgaWdvTGlzdC5zY3JvbGxUb3AgPVxuICAgICAgICBpdGVtLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wICtcbiAgICAgICAgaXRlbS5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLm9mZnNldEhlaWdodCAtXG4gICAgICAgIGlnb0xpc3QuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzUHJldmlvdXMoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmxpc3RJdGVtcy50b0FycmF5KCk7XG4gICAgbGV0IGl0ZW06IExpc3RJdGVtRGlyZWN0aXZlO1xuICAgIGNvbnN0IGlnb0xpc3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGRpc2FibGVkID0gdHJ1ZTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmdldEZvY3VzZWRJbmRleCgpO1xuXG4gICAgd2hpbGUgKGRpc2FibGVkICYmIGluZGV4ID4gMCkge1xuICAgICAgaW5kZXggLT0gMTtcbiAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgICBkaXNhYmxlZCA9IGl0ZW0uZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5mb2N1cyhpdGVtKTtcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW1zW2luZGV4IC0gMV0pIHtcbiAgICAgIGlnb0xpc3Quc2Nyb2xsVG9wID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXRlbSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLmlzU2Nyb2xsZWRJbnRvVmlldyhpdGVtLmVsLm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBwYWRkaW5nID0gMztcbiAgICAgIGlnb0xpc3Quc2Nyb2xsVG9wID0gaXRlbS5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIHBhZGRpbmc7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0KGl0ZW0/OiBMaXN0SXRlbURpcmVjdGl2ZSkge1xuICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVuc2VsZWN0KCk7XG5cbiAgICBpZiAoaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1bnNlbGVjdCgpIHtcbiAgICB0aGlzLnVuZm9jdXMoKTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZW5hYmxlTmF2aWdhdGlvbigpIHtcbiAgICBpZiAodGhpcy5uYXZpZ2F0aW9uKSB7XG4gICAgICB0aGlzLm5hdmlnYXRpb25FbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkaXNhYmxlTmF2aWdhdGlvbigpIHtcbiAgICB0aGlzLm5hdmlnYXRpb25FbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBzY3JvbGxUb0l0ZW0oaXRlbTogTGlzdEl0ZW1EaXJlY3RpdmUpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gaXRlbS5nZXRPZmZzZXRUb3AoKTtcbiAgfVxuXG4gIGlzU2Nyb2xsZWRJbnRvVmlldyhlbGVtKSB7XG4gICAgY29uc3QgZG9jVmlld1RvcCA9XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcbiAgICBjb25zdCBkb2NWaWV3Qm90dG9tID0gZG9jVmlld1RvcCArIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICBjb25zdCBlbGVtVG9wID0gZWxlbS5vZmZzZXRUb3A7XG4gICAgY29uc3QgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyBlbGVtLmNoaWxkcmVuWzBdLm9mZnNldEhlaWdodDtcbiAgICByZXR1cm4gZWxlbUJvdHRvbSA8PSBkb2NWaWV3Qm90dG9tICYmIGVsZW1Ub3AgPj0gZG9jVmlld1RvcDtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmZpbmRTZWxlY3RlZEl0ZW0oKTtcbiAgICB0aGlzLmZvY3VzZWRJdGVtID0gdGhpcy5maW5kRm9jdXNlZEl0ZW0oKTtcblxuICAgIHRoaXMuZW5hYmxlTmF2aWdhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmUoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5saXN0SXRlbXMudG9BcnJheSgpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgICAgaXRlbS5iZWZvcmVTZWxlY3Quc3Vic2NyaWJlKChpdGVtMjogTGlzdEl0ZW1EaXJlY3RpdmUpID0+XG4gICAgICAgICAgdGhpcy5oYW5kbGVJdGVtQmVmb3JlU2VsZWN0KGl0ZW0yKVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgICAgaXRlbS5zZWxlY3Quc3Vic2NyaWJlKChpdGVtMjogTGlzdEl0ZW1EaXJlY3RpdmUpID0+XG4gICAgICAgICAgdGhpcy5oYW5kbGVJdGVtU2VsZWN0KGl0ZW0yKVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgICAgaXRlbS5iZWZvcmVGb2N1cy5zdWJzY3JpYmUoKGl0ZW0yOiBMaXN0SXRlbURpcmVjdGl2ZSkgPT5cbiAgICAgICAgICB0aGlzLmhhbmRsZUl0ZW1CZWZvcmVGb2N1cyhpdGVtMilcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAgIGl0ZW0uZm9jdXMuc3Vic2NyaWJlKChpdGVtMjogTGlzdEl0ZW1EaXJlY3RpdmUpID0+XG4gICAgICAgICAgdGhpcy5oYW5kbGVJdGVtRm9jdXMoaXRlbTIpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJdGVtQmVmb3JlRm9jdXMoaXRlbTogTGlzdEl0ZW1EaXJlY3RpdmUpIHtcbiAgICBpZiAoaXRlbSAhPT0gdGhpcy5mb2N1c2VkSXRlbSkge1xuICAgICAgdGhpcy51bmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJdGVtRm9jdXMoaXRlbTogTGlzdEl0ZW1EaXJlY3RpdmUpIHtcbiAgICB0aGlzLmZvY3VzZWRJdGVtID0gaXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSXRlbUJlZm9yZVNlbGVjdChpdGVtOiBMaXN0SXRlbURpcmVjdGl2ZSkge1xuICAgIGlmIChpdGVtICE9PSB0aGlzLmZvY3VzZWRJdGVtKSB7XG4gICAgICB0aGlzLnVuc2VsZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJdGVtU2VsZWN0KGl0ZW06IExpc3RJdGVtRGlyZWN0aXZlKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RJdGVtcy50b0FycmF5KCkuZmluZChpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kRm9jdXNlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLnRvQXJyYXkoKS5maW5kKGl0ZW0gPT4gaXRlbS5mb2N1c2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9jdXNlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RJdGVtc1xuICAgICAgLnRvQXJyYXkoKVxuICAgICAgLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHRoaXMuZm9jdXNlZEl0ZW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBuYXZpZ2F0ZShrZXk6IHN0cmluZykge1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgdGhpcy5mb2N1c1ByZXZpb3VzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5mb2N1c05leHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsIjxtYXQtbGlzdFxuICBpZ29DbGlja291dFxuICBbbmdDbGFzc109XCJ7J3NlbGVjdGFibGUnOiBzZWxlY3Rpb259XCJcbiAgKGNsaWNrb3V0KT1cImRpc2FibGVOYXZpZ2F0aW9uKClcIlxuICAoY2xpY2spPVwiZW5hYmxlTmF2aWdhdGlvbigpXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbWF0LWxpc3Q+XG4iXX0=