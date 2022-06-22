import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./custom-html.pipe";
export class CustomHtmlComponent {
    constructor() {
        this._html = '';
    }
    get html() {
        return this._html;
    }
    set html(value) {
        this._html = value;
    }
}
CustomHtmlComponent.ɵfac = function CustomHtmlComponent_Factory(t) { return new (t || CustomHtmlComponent)(); };
CustomHtmlComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomHtmlComponent, selectors: [["igo-custom-html"]], inputs: { html: "html" }, decls: 2, vars: 3, consts: [[1, "custom-html", 3, "innerHTML"]], template: function CustomHtmlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵpipe(1, "sanitizeHtml");
    } if (rf & 2) {
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx.html), i0.ɵɵsanitizeHtml);
    } }, pipes: [i1.SanitizeHtmlPipe], styles: [".custom-html[_ngcontent-%COMP%]{padding:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomHtmlComponent, [{
        type: Component,
        args: [{
                selector: 'igo-custom-html',
                templateUrl: './custom-html.component.html',
                styleUrls: ['./custom-html.component.scss']
            }]
    }], function () { return []; }, { html: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWh0bWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY3VzdG9tLWh0bWwvY3VzdG9tLWh0bWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY3VzdG9tLWh0bWwvY3VzdG9tLWh0bWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9qRCxNQUFNLE9BQU8sbUJBQW1CO0lBVTlCO1FBRlEsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUVKLENBQUM7SUFUaEIsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7O3NGQVBVLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FDUGhDLHlCQUFpRTs7O1FBQXhDLDZFQUFpQzs7dUZETzdDLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7c0NBR0ssSUFBSTtrQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tY3VzdG9tLWh0bWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWh0bWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b20taHRtbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUh0bWxDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBnZXQgaHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9odG1sO1xuICB9XG4gIHNldCBodG1sKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odG1sID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfaHRtbCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJjdXN0b20taHRtbFwiIFtpbm5lckhUTUxdPVwiaHRtbCB8IHNhbml0aXplSHRtbFwiPjwvZGl2PlxuIl19