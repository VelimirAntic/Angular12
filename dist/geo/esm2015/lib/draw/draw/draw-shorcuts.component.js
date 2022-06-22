import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/button";
import * as i4 from "@ngx-translate/core";
export class DrawShorcutsComponent {
}
DrawShorcutsComponent.ɵfac = function DrawShorcutsComponent_Factory(t) { return new (t || DrawShorcutsComponent)(); };
DrawShorcutsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawShorcutsComponent, selectors: [["igo-draw-shorcuts"]], decls: 24, vars: 12, consts: [[1, "shortcut", "mat-typography"], ["svgIcon", "keyboard-return", 1, "shortcut-icon"], ["svgIcon", "backspace-outline", 1, "shortcut-icon"], ["svgIcon", "keyboard-esc", 1, "shortcut-icon"], ["svgIcon", "keyboard-space", 1, "shortcut-icon"], [1, "shortcuts-close"], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary"]], template: function DrawShorcutsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content");
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "span", 0);
        i0.ɵɵelement(3, "mat-icon", 1);
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵelementStart(7, "span", 0);
        i0.ɵɵelement(8, "mat-icon", 2);
        i0.ɵɵtext(9);
        i0.ɵɵpipe(10, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div");
        i0.ɵɵelementStart(12, "span", 0);
        i0.ɵɵelement(13, "mat-icon", 3);
        i0.ɵɵtext(14);
        i0.ɵɵpipe(15, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div");
        i0.ɵɵelementStart(17, "span", 0);
        i0.ɵɵelement(18, "mat-icon", 4);
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "mat-dialog-actions", 5);
        i0.ɵɵelementStart(22, "button", 6);
        i0.ɵɵtext(23, "OK");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 4, "igo.geo.draw.finish"));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 6, "igo.geo.draw.undo"));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(15, 8, "igo.geo.draw.abort"));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 10, "igo.geo.draw.move"));
    } }, directives: [i1.MatDialogContent, i2.MatIcon, i1.MatDialogActions, i3.MatButton, i1.MatDialogClose], pipes: [i4.TranslatePipe], styles: [".shortcut[_ngcontent-%COMP%]{display:flex;align-items:center}.shortcut-icon[_ngcontent-%COMP%]{margin-right:10px}.shortcuts-close[_ngcontent-%COMP%]{display:flex;justify-content:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawShorcutsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-draw-shorcuts',
                templateUrl: './draw-shorcuts.component.html',
                styleUrls: ['./draw-shorcuts.component.scss']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy1zaG9yY3V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kcmF3L2RyYXcvZHJhdy1zaG9yY3V0cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kcmF3L2RyYXcvZHJhdy1zaG9yY3V0cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFRMUMsTUFBTSxPQUFPLHFCQUFxQjs7MEZBQXJCLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDUmxDLDBDQUFvQjtRQUNsQiwyQkFBSztRQUNILCtCQUFzQztRQUNwQyw4QkFBcUU7UUFBQSxZQUFxQzs7UUFBQSxpQkFBTztRQUNySCxpQkFBTTtRQUNOLDJCQUFLO1FBQ0gsK0JBQXNDO1FBQ3BDLDhCQUF1RTtRQUFBLFlBQW1DOztRQUFBLGlCQUFPO1FBQ3JILGlCQUFNO1FBQ04sNEJBQUs7UUFDSCxnQ0FBc0M7UUFDcEMsK0JBQWtFO1FBQUEsYUFBb0M7O1FBQUEsaUJBQU87UUFDakgsaUJBQU07UUFDTiw0QkFBSztRQUNILGdDQUFzQztRQUNwQywrQkFBb0U7UUFBQSxhQUFtQzs7UUFBQSxpQkFBTztRQUNsSCxpQkFBTTtRQUNSLGlCQUFxQjtRQUNyQiw4Q0FBNEM7UUFDMUMsa0NBQTJEO1FBQUEsbUJBQUU7UUFBQSxpQkFBUztRQUN4RSxpQkFBcUI7O1FBakJzRCxlQUFxQztRQUFyQyxpRUFBcUM7UUFJbkMsZUFBbUM7UUFBbkMsZ0VBQW1DO1FBSXhDLGVBQW9DO1FBQXBDLGlFQUFvQztRQUlsQyxlQUFtQztRQUFuQyxpRUFBbUM7O3VGRFBoRyxxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1kcmF3LXNob3JjdXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXctc2hvcmN1dHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcmF3LXNob3JjdXRzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEcmF3U2hvcmN1dHNDb21wb25lbnQge31cbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxkaXY+XG4gICAgPHNwYW4gY2xhc3M9XCJzaG9ydGN1dCBtYXQtdHlwb2dyYXBoeVwiPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwic2hvcnRjdXQtaWNvblwiIHN2Z0ljb249XCJrZXlib2FyZC1yZXR1cm5cIj48L21hdC1pY29uPnt7J2lnby5nZW8uZHJhdy5maW5pc2gnIHwgdHJhbnNsYXRlfX08L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxzcGFuIGNsYXNzPVwic2hvcnRjdXQgbWF0LXR5cG9ncmFwaHlcIj5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInNob3J0Y3V0LWljb25cIiBzdmdJY29uPVwiYmFja3NwYWNlLW91dGxpbmVcIj48L21hdC1pY29uPnt7J2lnby5nZW8uZHJhdy51bmRvJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8c3BhbiBjbGFzcz1cInNob3J0Y3V0IG1hdC10eXBvZ3JhcGh5XCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJzaG9ydGN1dC1pY29uXCIgc3ZnSWNvbj1cImtleWJvYXJkLWVzY1wiPjwvbWF0LWljb24+e3snaWdvLmdlby5kcmF3LmFib3J0JyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8c3BhbiBjbGFzcz1cInNob3J0Y3V0IG1hdC10eXBvZ3JhcGh5XCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJzaG9ydGN1dC1pY29uXCIgc3ZnSWNvbj1cImtleWJvYXJkLXNwYWNlXCI+PC9tYXQtaWNvbj57eydpZ28uZ2VvLmRyYXcubW92ZScgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cbiAgPC9kaXY+XG48L21hdC1kaWFsb2ctY29udGVudD5cbjxtYXQtZGlhbG9nLWFjdGlvbnMgY2xhc3M9XCJzaG9ydGN1dHMtY2xvc2VcIj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlIGNvbG9yPVwicHJpbWFyeVwiPk9LPC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz4iXX0=