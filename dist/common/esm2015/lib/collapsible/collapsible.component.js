import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/icon";
import * as i3 from "./collapse.directive";
import * as i4 from "@angular/material/core";
const _c0 = ["*"];
export class CollapsibleComponent {
    constructor() {
        this._title = '';
        this._collapsed = false;
        this.toggle = new EventEmitter();
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get collapsed() {
        return this._collapsed;
    }
    set collapsed(value) {
        this._collapsed = value;
        this.toggle.emit(value);
    }
}
CollapsibleComponent.ɵfac = function CollapsibleComponent_Factory(t) { return new (t || CollapsibleComponent)(); };
CollapsibleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollapsibleComponent, selectors: [["igo-collapsible"]], inputs: { title: "title", collapsed: "collapsed" }, outputs: { toggle: "toggle" }, ngContentSelectors: _c0, decls: 7, vars: 3, consts: [["svgIcon", "chevron-up", "mat-list-avatar", "", "igoCollapse", "", 1, "igo-chevron", 3, "target", "collapsed", "toggle"], ["matLine", ""], ["content", ""]], template: function CollapsibleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "mat-list-item");
        i0.ɵɵelementStart(1, "mat-icon", 0);
        i0.ɵɵlistener("toggle", function CollapsibleComponent_Template_mat_icon_toggle_1_listener($event) { return ctx.collapsed = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "h4", 1);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", null, 2);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("target", _r0)("collapsed", ctx.collapsed);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
    } }, directives: [i1.MatListItem, i2.MatIcon, i1.MatListAvatarCssMatStyler, i3.CollapseDirective, i4.MatLine], styles: ["[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-avatar{height:auto;width:auto;padding:0}mat-list-item[_ngcontent-%COMP%]{overflow:hidden}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapsibleComponent, [{
        type: Component,
        args: [{
                selector: 'igo-collapsible',
                templateUrl: './collapsible.component.html',
                styleUrls: ['./collapsible.component.scss']
            }]
    }], null, { title: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], toggle: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY29sbGFwc2libGUvY29sbGFwc2libGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvY29sbGFwc2libGUvY29sbGFwc2libGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQU92RSxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBYVUsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQVVaLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFakIsV0FBTSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBQzlEO0lBcEJDLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBR0QsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7O3dGQWpCVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjs7UUNQakMscUNBQWU7UUFDYixtQ0FPZ0M7UUFBOUIscUlBQTZCO1FBQy9CLGlCQUFXO1FBQ1gsNkJBQVk7UUFBQSxZQUFTO1FBQUEsaUJBQUs7UUFDNUIsaUJBQWdCO1FBRWhCLG9DQUFjO1FBQ1osa0JBQXlCO1FBQzNCLGlCQUFNOzs7UUFURixlQUFrQjtRQUFsQiw0QkFBa0IsNEJBQUE7UUFJUixlQUFTO1FBQVQsK0JBQVM7O3VGREhWLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Z0JBR0ssS0FBSztrQkFEUixLQUFLO1lBVUYsU0FBUztrQkFEWixLQUFLO1lBVUksTUFBTTtrQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWNvbGxhcHNpYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbGxhcHNpYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29sbGFwc2libGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX3RpdGxlID0gJyc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbGxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sbGFwc2VkO1xuICB9XG4gIHNldCBjb2xsYXBzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb2xsYXBzZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9jb2xsYXBzZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iLCI8bWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1pY29uXG4gICAgc3ZnSWNvbj1cImNoZXZyb24tdXBcIiBcbiAgICBjbGFzcz1cImlnby1jaGV2cm9uXCJcbiAgICBtYXQtbGlzdC1hdmF0YXJcbiAgICBpZ29Db2xsYXBzZVxuICAgIFt0YXJnZXRdPVwiY29udGVudFwiXG4gICAgW2NvbGxhcHNlZF09XCJjb2xsYXBzZWRcIlxuICAgICh0b2dnbGUpPVwiY29sbGFwc2VkID0gJGV2ZW50XCI+XG4gIDwvbWF0LWljb24+XG4gIDxoNCBtYXRMaW5lPnt7dGl0bGV9fTwvaDQ+XG48L21hdC1saXN0LWl0ZW0+XG5cbjxkaXYgI2NvbnRlbnQ+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19