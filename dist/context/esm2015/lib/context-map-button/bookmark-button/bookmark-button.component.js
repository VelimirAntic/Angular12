import { Component, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { BookmarkDialogComponent } from './bookmark-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../context-manager/shared/context.service";
import * as i3 from "@igo2/core";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/material/icon";
import * as i7 from "@ngx-translate/core";
export class BookmarkButtonComponent {
    constructor(dialog, contextService, languageService, messageService) {
        this.dialog = dialog;
        this.contextService = contextService;
        this.languageService = languageService;
        this.messageService = messageService;
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    createContext() {
        this.dialog
            .open(BookmarkDialogComponent, { disableClose: false })
            .afterClosed()
            .pipe(take(1))
            .subscribe(title => {
            if (title) {
                const context = this.contextService.getContextFromMap(this.map);
                context.title = title;
                this.contextService.create(context).subscribe(() => {
                    const translate = this.languageService.translate;
                    const titleD = translate.instant('igo.context.bookmarkButton.dialog.createTitle');
                    const message = translate.instant('igo.context.bookmarkButton.dialog.createMsg', {
                        value: context.title
                    });
                    this.messageService.success(message, titleD);
                    this.contextService.loadContext(context.uri);
                });
            }
        });
    }
}
BookmarkButtonComponent.ɵfac = function BookmarkButtonComponent_Factory(t) { return new (t || BookmarkButtonComponent)(i0.ɵɵdirectiveInject(i1.MatDialog), i0.ɵɵdirectiveInject(i2.ContextService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService)); };
BookmarkButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BookmarkButtonComponent, selectors: [["igo-bookmark-button"]], inputs: { map: "map", color: "color" }, decls: 4, vars: 4, consts: [[1, "igo-bookmark-button-container"], ["mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "color", "click"], ["svgIcon", "star"]], template: function BookmarkButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function BookmarkButtonComponent_Template_button_click_1_listener() { return ctx.createContext(); });
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelement(3, "mat-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 2, "igo.context.bookmarkButton.create"))("color", ctx.color);
    } }, directives: [i4.MatButton, i5.MatTooltip, i6.MatIcon], pipes: [i7.TranslatePipe], styles: [".igo-bookmark-button-container[_ngcontent-%COMP%]{width:40px}.igo-bookmark-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff}.igo-bookmark-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#efefef}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BookmarkButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-bookmark-button',
                templateUrl: './bookmark-button.component.html',
                styleUrls: ['./bookmark-button.component.scss']
            }]
    }], function () { return [{ type: i1.MatDialog }, { type: i2.ContextService }, { type: i3.LanguageService }, { type: i3.MessageService }]; }, { map: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va21hcmstYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LW1hcC1idXR0b24vYm9va21hcmstYnV0dG9uL2Jvb2ttYXJrLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYXAtYnV0dG9uL2Jvb2ttYXJrLWJ1dHRvbi9ib29rbWFyay1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXRDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7QUFPdEUsTUFBTSxPQUFPLHVCQUF1QjtJQW1CbEMsWUFDVSxNQUFpQixFQUNqQixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxjQUE4QjtRQUg5QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7SUF2QkosSUFDSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFHRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQVVELGFBQWE7UUFDWCxJQUFJLENBQUMsTUFBTTthQUNSLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUN0RCxXQUFXLEVBQUU7YUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksS0FBSyxFQUFFO2dCQUNULE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtvQkFDakQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7b0JBQ2pELE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQzlCLCtDQUErQyxDQUNoRCxDQUFDO29CQUNGLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQy9CLDZDQUE2QyxFQUM3Qzt3QkFDRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7cUJBQ3JCLENBQ0YsQ0FBQztvQkFDRixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OEZBbkRVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDZnBDLDhCQUEyQztRQUN6QyxpQ0FLNEI7UUFBMUIsb0dBQVMsbUJBQWUsSUFBQzs7UUFDekIsOEJBQW9DO1FBQ3RDLGlCQUFTO1FBQ1gsaUJBQU07O1FBTkYsZUFBOEQ7UUFBOUQsc0ZBQThELG9CQUFBOzt1RkRZckQsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDtvSkFHSyxHQUFHO2tCQUROLEtBQUs7WUFVRixLQUFLO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UsIExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBJZ29NYXAgfSBmcm9tICdAaWdvMi9nZW8nO1xuXG5pbXBvcnQgeyBDb250ZXh0U2VydmljZSB9IGZyb20gJy4uLy4uL2NvbnRleHQtbWFuYWdlci9zaGFyZWQvY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IEJvb2ttYXJrRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9ib29rbWFyay1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWJvb2ttYXJrLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ib29rbWFyay1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib29rbWFyay1idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCb29rbWFya0J1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGdldCBtYXAoKTogSWdvTWFwIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG4gIHNldCBtYXAodmFsdWU6IElnb01hcCkge1xuICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX21hcDogSWdvTWFwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2U6IENvbnRleHRTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIGNyZWF0ZUNvbnRleHQoKSB7XG4gICAgdGhpcy5kaWFsb2dcbiAgICAgIC5vcGVuKEJvb2ttYXJrRGlhbG9nQ29tcG9uZW50LCB7IGRpc2FibGVDbG9zZTogZmFsc2UgfSlcbiAgICAgIC5hZnRlckNsb3NlZCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSh0aXRsZSA9PiB7XG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRTZXJ2aWNlLmdldENvbnRleHRGcm9tTWFwKHRoaXMubWFwKTtcbiAgICAgICAgICBjb250ZXh0LnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgdGhpcy5jb250ZXh0U2VydmljZS5jcmVhdGUoY29udGV4dCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRCA9IHRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICAgICAnaWdvLmNvbnRleHQuYm9va21hcmtCdXR0b24uZGlhbG9nLmNyZWF0ZVRpdGxlJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICAgJ2lnby5jb250ZXh0LmJvb2ttYXJrQnV0dG9uLmRpYWxvZy5jcmVhdGVNc2cnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvbnRleHQudGl0bGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2VzcyhtZXNzYWdlLCB0aXRsZUQpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0U2VydmljZS5sb2FkQ29udGV4dChjb250ZXh0LnVyaSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaWdvLWJvb2ttYXJrLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgPGJ1dHRvblxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIFttYXRUb29sdGlwXT1cIidpZ28uY29udGV4dC5ib29rbWFya0J1dHRvbi5jcmVhdGUnIHwgdHJhbnNsYXRlXCJcbiAgICBtYXRUb29sdGlwUG9zaXRpb249XCJhYm92ZVwiXG4gICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAoY2xpY2spPVwiY3JlYXRlQ29udGV4dCgpXCI+XG4gICAgPG1hdC1pY29uIHN2Z0ljb249XCJzdGFyXCI+PC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==