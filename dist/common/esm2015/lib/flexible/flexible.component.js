import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
const _c0 = ["flexibleMain"];
const _c1 = ["*", [["", "igoFlexibleFill", ""]]];
const _c2 = ["*", "[igoFlexibleFill]"];
export class FlexibleComponent {
    constructor(el, mediaService) {
        this.el = el;
        this.mediaService = mediaService;
        this._initial = '0';
        this._collapsed = '0';
        this._expanded = '100%';
        this._initialMobile = this.expanded;
        this._collapsedMobile = this.collapsed;
        this._expandedMobile = this.expanded;
        this._direction = 'column';
        this._state = 'initial';
    }
    get initial() {
        return this._initial;
    }
    set initial(value) {
        this._initial = value;
    }
    get collapsed() {
        return this._collapsed;
    }
    set collapsed(value) {
        this._collapsed = value;
    }
    get expanded() {
        return this._expanded;
    }
    set expanded(value) {
        this._expanded = value;
    }
    get initialMobile() {
        return this._initialMobile;
    }
    set initialMobile(value) {
        this._initialMobile = value;
    }
    get collapsedMobile() {
        return this._collapsedMobile;
    }
    set collapsedMobile(value) {
        this._collapsedMobile = value;
    }
    get expandedMobile() {
        return this._expandedMobile;
    }
    set expandedMobile(value) {
        this._expandedMobile = value;
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        const sizes = {
            initial: this.initial,
            collapsed: this.collapsed,
            expanded: this.expanded
        };
        if (this.mediaService.isMobile()) {
            Object.assign(sizes, {
                initial: this.initialMobile,
                collapsed: this.collapsedMobile,
                expanded: this.expandedMobile
            });
        }
        const size = sizes[value];
        if (size !== undefined) {
            this.setSize(size);
            setTimeout(() => {
                this._state = value;
            }, FlexibleComponent.transitionTime);
        }
    }
    ngOnInit() {
        this.el.nativeElement.className += this.direction;
        // Since this component supports different sizes
        // on mobile, force a redraw when the media changes
        this.mediaService$$ = this.mediaService.media$.subscribe((media) => (this.state = this.state));
    }
    ngOnDestroy() {
        if (this.mediaService$$) {
            this.mediaService$$.unsubscribe();
        }
    }
    setSize(size) {
        this._state = 'transition';
        if (this.direction === 'column') {
            this.main.nativeElement.style.height = size;
        }
        else if (this.direction === 'row') {
            this.main.nativeElement.style.width = size;
        }
    }
}
FlexibleComponent.transitionTime = 250;
FlexibleComponent.ɵfac = function FlexibleComponent_Factory(t) { return new (t || FlexibleComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.MediaService)); };
FlexibleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FlexibleComponent, selectors: [["igo-flexible"]], viewQuery: function FlexibleComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.main = _t.first);
    } }, inputs: { initial: "initial", collapsed: "collapsed", expanded: "expanded", initialMobile: "initialMobile", collapsedMobile: "collapsedMobile", expandedMobile: "expandedMobile", direction: "direction", state: "state" }, ngContentSelectors: _c2, decls: 8, vars: 4, consts: [["flexibleMain", ""], [1, "igo-container"], [1, "igo-flexible-fill"]], template: function FlexibleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "div", null, 0);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵelementStart(6, "div", 1);
        i0.ɵɵprojection(7, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("igo-flexible-main ", ctx.state, " ", ctx.direction, "");
    } }, styles: ["[_nghost-%COMP%]{display:flex;height:100%;width:100%}.column[_nghost-%COMP%]{flex-direction:column}.row[_nghost-%COMP%]{flex-direction:row}.igo-flexible-main[_ngcontent-%COMP%]{flex:0 0 auto;overflow:hidden}.igo-flexible-main.column[_ngcontent-%COMP%]{transition:height .25s ease-in}.igo-flexible-main.row[_ngcontent-%COMP%]{transition:width .25s ease-in}.igo-flexible-fill[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}.igo-container[_ngcontent-%COMP%]{width:calc(100% - 2 * 5px);height:100%;padding:5px 0;margin:0 5px;overflow:hidden;position:relative}  .igo-flexible-fill{flex:1 1 auto;overflow:hidden;position:relative}  .igo-content{height:100%;width:100%;overflow:auto}  igo-panel{height:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlexibleComponent, [{
        type: Component,
        args: [{
                selector: 'igo-flexible',
                templateUrl: './flexible.component.html',
                styleUrls: ['./flexible.component.scss']
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.MediaService }]; }, { main: [{
            type: ViewChild,
            args: ['flexibleMain', { static: true }]
        }], initial: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], expanded: [{
            type: Input
        }], initialMobile: [{
            type: Input
        }], collapsedMobile: [{
            type: Input
        }], expandedMobile: [{
            type: Input
        }], direction: [{
            type: Input
        }], state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleGlibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvZmxleGlibGUvZmxleGlibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvZmxleGlibGUvZmxleGlibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLFNBQVMsRUFBYyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBWTNGLE1BQU0sT0FBTyxpQkFBaUI7SUFtRzVCLFlBQW9CLEVBQWMsRUFBVSxZQUEwQjtRQUFsRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUF2RjlELGFBQVEsR0FBRyxHQUFHLENBQUM7UUFTZixlQUFVLEdBQUcsR0FBRyxDQUFDO1FBU2pCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFTbkIsbUJBQWMsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBU3ZDLHFCQUFnQixHQUFXLElBQUksQ0FBQyxTQUFTLENBQUM7UUFTMUMsb0JBQWUsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBU3hDLGVBQVUsR0FBc0IsUUFBUSxDQUFDO1FBNkJ6QyxXQUFNLEdBQWtCLFNBQVMsQ0FBQztJQUkrQixDQUFDO0lBOUYxRSxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUdELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxH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QUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDN0M7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7QUE1SE0sZ0NBQWMsR0FBRyxHQUFHLENBQUM7a0ZBRGpCLGlCQUFpQjtvRUFBakIsaUJBQWlCOzs7Ozs7O1FDWjlCLG9DQUFxRTtRQUNuRSw4QkFBMkI7UUFDekIsa0JBQXlCO1FBQzNCLGlCQUFNO1FBQ1IsaUJBQU07UUFDTiw4QkFBK0I7UUFDN0IsMkJBQUs7UUFDSiw4QkFBMkI7UUFDeEIscUJBQW9EO1FBQ3RELGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7UUFYYSxrRkFBaUQ7O3VGRFl2RCxpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6Qzt3RkFJOEMsSUFBSTtrQkFBaEQsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBR3ZDLE9BQU87a0JBRFYsS0FBSztZQVVGLFNBQVM7a0JBRFosS0FBSztZQVVGLFFBQVE7a0JBRFgsS0FBSztZQVVGLGFBQWE7a0JBRGhCLEtBQUs7WUFVRixlQUFlO2tCQURsQixLQUFLO1lBVUYsY0FBYztrQkFEakIsS0FBSztZQVVGLFNBQVM7a0JBRFosS0FBSztZQVVGLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNZWRpYSwgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbmltcG9ydCB7IEZsZXhpYmxlU3RhdGUsIEZsZXhpYmxlRGlyZWN0aW9uIH0gZnJvbSAnLi9mbGV4aWJsZS50eXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWZsZXhpYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZsZXhpYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmxleGlibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGbGV4aWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIHRyYW5zaXRpb25UaW1lID0gMjUwO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZsZXhpYmxlTWFpbicsIHsgc3RhdGljOiB0cnVlIH0pIG1haW47XG5cbiAgQElucHV0KClcbiAgZ2V0IGluaXRpYWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbDtcbiAgfVxuICBzZXQgaW5pdGlhbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5pdGlhbCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2luaXRpYWwgPSAnMCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbGxhcHNlZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzZWQ7XG4gIH1cbiAgc2V0IGNvbGxhcHNlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sbGFwc2VkID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sbGFwc2VkID0gJzAnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBleHBhbmRlZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcbiAgfVxuICBzZXQgZXhwYW5kZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4cGFuZGVkID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfZXhwYW5kZWQgPSAnMTAwJSc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGluaXRpYWxNb2JpbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbE1vYmlsZTtcbiAgfVxuICBzZXQgaW5pdGlhbE1vYmlsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5pdGlhbE1vYmlsZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2luaXRpYWxNb2JpbGU6IHN0cmluZyA9IHRoaXMuZXhwYW5kZWQ7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbGxhcHNlZE1vYmlsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzZWRNb2JpbGU7XG4gIH1cbiAgc2V0IGNvbGxhcHNlZE1vYmlsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sbGFwc2VkTW9iaWxlID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sbGFwc2VkTW9iaWxlOiBzdHJpbmcgPSB0aGlzLmNvbGxhcHNlZDtcblxuICBASW5wdXQoKVxuICBnZXQgZXhwYW5kZWRNb2JpbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWRNb2JpbGU7XG4gIH1cbiAgc2V0IGV4cGFuZGVkTW9iaWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leHBhbmRlZE1vYmlsZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2V4cGFuZGVkTW9iaWxlOiBzdHJpbmcgPSB0aGlzLmV4cGFuZGVkO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXJlY3Rpb24oKTogRmxleGlibGVEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cbiAgc2V0IGRpcmVjdGlvbih2YWx1ZTogRmxleGlibGVEaXJlY3Rpb24pIHtcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9kaXJlY3Rpb246IEZsZXhpYmxlRGlyZWN0aW9uID0gJ2NvbHVtbic7XG5cbiAgQElucHV0KClcbiAgZ2V0IHN0YXRlKCk6IEZsZXhpYmxlU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuICBzZXQgc3RhdGUodmFsdWU6IEZsZXhpYmxlU3RhdGUpIHtcbiAgICBjb25zdCBzaXplcyA9IHtcbiAgICAgIGluaXRpYWw6IHRoaXMuaW5pdGlhbCxcbiAgICAgIGNvbGxhcHNlZDogdGhpcy5jb2xsYXBzZWQsXG4gICAgICBleHBhbmRlZDogdGhpcy5leHBhbmRlZFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5tZWRpYVNlcnZpY2UuaXNNb2JpbGUoKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihzaXplcywge1xuICAgICAgICBpbml0aWFsOiB0aGlzLmluaXRpYWxNb2JpbGUsXG4gICAgICAgIGNvbGxhcHNlZDogdGhpcy5jb2xsYXBzZWRNb2JpbGUsXG4gICAgICAgIGV4cGFuZGVkOiB0aGlzLmV4cGFuZGVkTW9iaWxlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gc2l6ZXNbdmFsdWVdO1xuICAgIGlmIChzaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0U2l6ZShzaXplKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xuICAgICAgfSwgRmxleGlibGVDb21wb25lbnQudHJhbnNpdGlvblRpbWUpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9zdGF0ZTogRmxleGlibGVTdGF0ZSA9ICdpbml0aWFsJztcblxuICBwcml2YXRlIG1lZGlhU2VydmljZSQkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBtZWRpYVNlcnZpY2U6IE1lZGlhU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lICs9IHRoaXMuZGlyZWN0aW9uO1xuXG4gICAgLy8gU2luY2UgdGhpcyBjb21wb25lbnQgc3VwcG9ydHMgZGlmZmVyZW50IHNpemVzXG4gICAgLy8gb24gbW9iaWxlLCBmb3JjZSBhIHJlZHJhdyB3aGVuIHRoZSBtZWRpYSBjaGFuZ2VzXG4gICAgdGhpcy5tZWRpYVNlcnZpY2UkJCA9IHRoaXMubWVkaWFTZXJ2aWNlLm1lZGlhJC5zdWJzY3JpYmUoXG4gICAgICAobWVkaWE6IE1lZGlhKSA9PiAodGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLm1lZGlhU2VydmljZSQkKSB7XG4gICAgICB0aGlzLm1lZGlhU2VydmljZSQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaXplKHNpemU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXRlID0gJ3RyYW5zaXRpb24nO1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgdGhpcy5tYWluLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gc2l6ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncm93Jykge1xuICAgICAgdGhpcy5tYWluLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBzaXplO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiAjZmxleGlibGVNYWluIGNsYXNzPVwiaWdvLWZsZXhpYmxlLW1haW4ge3tzdGF0ZX19IHt7ZGlyZWN0aW9ufX1cIj5cbiAgPGRpdiBjbGFzcz1cImlnby1jb250YWluZXJcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiaWdvLWZsZXhpYmxlLWZpbGxcIj5cbiAgPGRpdj5cbiAgXHQ8ZGl2IGNsYXNzPVwiaWdvLWNvbnRhaW5lclwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2lnb0ZsZXhpYmxlRmlsbF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=