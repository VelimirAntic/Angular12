import { Component, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import * as olproj from 'ol/proj';
import * as oleasing from 'ol/easing';
import olPoint from 'ol/geom/Point';
import { PoiDialogComponent } from './poi-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@igo2/auth";
import * as i3 from "./shared/poi.service";
import * as i4 from "@igo2/core";
import * as i5 from "@igo2/common";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/material/core";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/common";
import * as i11 from "@ngx-translate/core";
function PoiButtonComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵlistener("click", function PoiButtonComponent_mat_option_8_Template_mat_option_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const poi_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.zoomOnPoi(poi_r1.id); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 7);
    i0.ɵɵlistener("click", function PoiButtonComponent_mat_option_8_Template_button_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const poi_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.deletePoi(poi_r1); });
    i0.ɵɵelement(4, "mat-icon", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const poi_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", poi_r1.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(poi_r1.title);
} }
export class PoiButtonComponent {
    constructor(dialog, authService, poiService, messageService, languageService, confirmDialogService) {
        this.dialog = dialog;
        this.authService = authService;
        this.poiService = poiService;
        this.messageService = messageService;
        this.languageService = languageService;
        this.confirmDialogService = confirmDialogService;
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
    ngOnInit() {
        this.authenticate$$ = this.authService.authenticate$.subscribe(auth => {
            if (auth) {
                this.getPois();
            }
        });
    }
    ngOnDestroy() {
        this.authenticate$$.unsubscribe();
    }
    deletePoi(poi) {
        if (poi && poi.id) {
            const translate = this.languageService.translate;
            this.confirmDialogService
                .open(translate.instant('igo.context.poiButton.dialog.confirmDelete'))
                .subscribe(confirm => {
                if (confirm) {
                    this.poiService.delete(poi.id).subscribe(() => {
                        const title = translate.instant('igo.context.poiButton.dialog.deleteTitle');
                        const message = translate.instant('igo.context.poiButton.dialog.deleteMsg', {
                            value: poi.title
                        });
                        this.messageService.info(message, title);
                        this.pois = this.pois.filter(p => p.id !== poi.id);
                    }, err => {
                        err.error.title = 'DELETE Pois';
                        this.messageService.showError(err);
                    });
                }
            });
        }
    }
    getPois() {
        this.poiService.get().pipe(take(1)).subscribe(rep => {
            this.pois = rep;
        }, err => {
            err.error.title = 'GET Pois';
            this.messageService.showError(err);
        });
    }
    createPoi() {
        const view = this.map.ol.getView();
        const proj = view.getProjection().getCode();
        const center = new olPoint(view.getCenter()).transform(proj, 'EPSG:4326');
        const poi = {
            title: '',
            x: center.getCoordinates()[0],
            y: center.getCoordinates()[1],
            zoom: view.getZoom()
        };
        this.dialog
            .open(PoiDialogComponent, { disableClose: false })
            .afterClosed()
            .subscribe(title => {
            if (title) {
                poi.title = title;
                this.poiService.create(poi).subscribe(newPoi => {
                    const translate = this.languageService.translate;
                    const titleD = translate.instant('igo.context.poiButton.dialog.createTitle');
                    const message = translate.instant('igo.context.poiButton.dialog.createMsg', {
                        value: poi.title
                    });
                    this.messageService.success(message, titleD);
                    poi.id = newPoi.id;
                    this.pois.push(poi);
                }, err => {
                    err.error.title = 'POST Pois';
                    this.messageService.showError(err);
                });
            }
        });
    }
    zoomOnPoi(id) {
        const poi = this.pois.find(p => p.id === id);
        const center = olproj.fromLonLat([Number(poi.x), Number(poi.y)], this.map.projection);
        this.map.ol.getView().animate({
            center,
            zoom: poi.zoom,
            duration: 500,
            easing: oleasing.easeOut
        });
    }
}
PoiButtonComponent.ɵfac = function PoiButtonComponent_Factory(t) { return new (t || PoiButtonComponent)(i0.ɵɵdirectiveInject(i1.MatDialog), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.PoiService), i0.ɵɵdirectiveInject(i4.MessageService), i0.ɵɵdirectiveInject(i4.LanguageService), i0.ɵɵdirectiveInject(i5.ConfirmDialogService)); };
PoiButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoiButtonComponent, selectors: [["igo-poi-button"]], inputs: { map: "map", color: "color" }, decls: 9, vars: 7, consts: [["floatPlaceholder", "never", 3, "placeholder"], [3, "click"], [1, "titlePoi"], ["igoStopPropagation", "", "mat-icon-button", "", "color", "primary", 1, "addPoi", "buttonPoi", 3, "click"], ["svgIcon", "plus-circle"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["igoStopPropagation", "", "mat-icon-button", "", "color", "warn", 1, "deletePoi", "buttonPoi", 3, "click"], ["svgIcon", "delete"]], template: function PoiButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-select", 0);
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵelementStart(2, "mat-option", 1);
        i0.ɵɵlistener("click", function PoiButtonComponent_Template_mat_option_click_2_listener() { return ctx.createPoi(); });
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function PoiButtonComponent_Template_button_click_6_listener() { return ctx.createPoi(); });
        i0.ɵɵelement(7, "mat-icon", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, PoiButtonComponent_mat_option_8_Template, 5, 2, "mat-option", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(1, 3, "igo.context.poiButton.placeholder"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 5, "igo.context.poiButton.create"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.pois);
    } }, directives: [i6.MatSelect, i7.MatOption, i8.MatButton, i5.StopPropagationDirective, i9.MatIcon, i10.NgForOf], pipes: [i11.TranslatePipe], styles: ["mat-select[_ngcontent-%COMP%]{width:150px;background-color:#fff;height:40px;padding-top:0}mat-select[_ngcontent-%COMP%]     .mat-select-trigger{height:40px}mat-select[_ngcontent-%COMP%]     .mat-select-value-text, mat-select[_ngcontent-%COMP%]     .mat-select-placeholder{padding:5px;top:12px;position:relative}.mat-option[_ngcontent-%COMP%]{text-overflow:inherit}.titlePoi[_ngcontent-%COMP%]{max-width:135px;overflow:hidden;text-overflow:ellipsis;float:left}.buttonPoi[_ngcontent-%COMP%]{float:right;margin:4px -10px 4px 0}.buttonPoi[_ngcontent-%COMP%]     .mat-icon{margin:0 8px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoiButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-poi-button',
                templateUrl: './poi-button.component.html',
                styleUrls: ['./poi-button.component.scss']
            }]
    }], function () { return [{ type: i1.MatDialog }, { type: i2.AuthService }, { type: i3.PoiService }, { type: i4.MessageService }, { type: i4.LanguageService }, { type: i5.ConfirmDialogService }]; }, { map: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYXAtYnV0dG9uL3BvaS1idXR0b24vcG9pLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYXAtYnV0dG9uL3BvaS1idXR0b24vcG9pLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFHcEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBQ2xDLE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sT0FBTyxNQUFNLGVBQWUsQ0FBQztBQVNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDSjFELHFDQUFrRjtJQUE1QixtUUFBMkI7SUFDL0UsOEJBQXNCO0lBQUEsWUFBZTtJQUFBLGlCQUFNO0lBQzNDLGlDQUcyQjtJQUF6Qiw0UEFBd0I7SUFDeEIsOEJBQXNDO0lBQ3hDLGlCQUFTO0lBQ1gsaUJBQWE7OztJQVJ3QixpQ0FBZ0I7SUFDN0IsZUFBZTtJQUFmLGtDQUFlOztBRFV6QyxNQUFNLE9BQU8sa0JBQWtCO0lBc0I3QixZQUNVLE1BQWlCLEVBQ2pCLFdBQXdCLEVBQ3hCLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLG9CQUEwQztRQUwxQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIs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dEIsK0ZBQVMsZUFBVyxJQUFDO1FBQ3JCLDhCQUEyQztRQUM3QyxpQkFBUztRQUNYLGlCQUFhO1FBQ2IsaUZBUWE7UUFDZixpQkFBYTs7UUFyQkQsdUZBQStEO1FBSWpELGVBQWdEO1FBQWhELDBFQUFnRDtRQVE1QyxlQUFPO1FBQVAsa0NBQU87O3VGRFd4QixrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzZNQUdLLEdBQUc7a0JBRE4sS0FBSztZQVVGLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBvbHByb2ogZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgKiBhcyBvbGVhc2luZyBmcm9tICdvbC9lYXNpbmcnO1xuaW1wb3J0IG9sUG9pbnQgZnJvbSAnb2wvZ2VvbS9Qb2ludCc7XG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvYXV0aCc7XG5pbXBvcnQgdHlwZSB7IElnb01hcCB9IGZyb20gJ0BpZ28yL2dlbyc7XG5cbmltcG9ydCB7IFBvaVNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9wb2kuc2VydmljZSc7XG5pbXBvcnQgeyBQb2kgfSBmcm9tICcuL3NoYXJlZC9wb2kuaW50ZXJmYWNlJztcbmltcG9ydCB7IFBvaURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcG9pLWRpYWxvZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tcG9pLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb2ktYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9pLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBvaUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgZ2V0IG1hcCgpOiBJZ29NYXAge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cbiAgc2V0IG1hcCh2YWx1ZTogSWdvTWFwKSB7XG4gICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfbWFwOiBJZ29NYXA7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuXG4gIHB1YmxpYyBwb2lzOiBQb2lbXTtcbiAgcHJpdmF0ZSBhdXRoZW50aWNhdGUkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwb2lTZXJ2aWNlOiBQb2lTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maXJtRGlhbG9nU2VydmljZTogQ29uZmlybURpYWxvZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXV0aGVudGljYXRlJCQgPSB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZSQuc3Vic2NyaWJlKGF1dGggPT4ge1xuICAgICAgaWYgKGF1dGgpIHtcbiAgICAgICAgdGhpcy5nZXRQb2lzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZSQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBkZWxldGVQb2kocG9pOiBQb2kpIHtcbiAgICBpZiAocG9pICYmIHBvaS5pZCkge1xuICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlO1xuICAgICAgdGhpcy5jb25maXJtRGlhbG9nU2VydmljZVxuICAgICAgICAub3Blbih0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmNvbnRleHQucG9pQnV0dG9uLmRpYWxvZy5jb25maXJtRGVsZXRlJykpXG4gICAgICAgIC5zdWJzY3JpYmUoY29uZmlybSA9PiB7XG4gICAgICAgICAgaWYgKGNvbmZpcm0pIHtcbiAgICAgICAgICAgIHRoaXMucG9pU2VydmljZS5kZWxldGUocG9pLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICAgICAgICAgJ2lnby5jb250ZXh0LnBvaUJ1dHRvbi5kaWFsb2cuZGVsZXRlVGl0bGUnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAgICAgICAnaWdvLmNvbnRleHQucG9pQnV0dG9uLmRpYWxvZy5kZWxldGVNc2cnLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcG9pLnRpdGxlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmluZm8obWVzc2FnZSwgdGl0bGUpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9pcyA9IHRoaXMucG9pcy5maWx0ZXIocCA9PiBwLmlkICE9PSBwb2kuaWQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGVyci5lcnJvci50aXRsZSA9ICdERUxFVEUgUG9pcyc7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zaG93RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UG9pcygpIHtcbiAgICB0aGlzLnBvaVNlcnZpY2UuZ2V0KCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoXG4gICAgICByZXAgPT4ge1xuICAgICAgICB0aGlzLnBvaXMgPSByZXA7XG4gICAgICB9LFxuICAgICAgZXJyID0+IHtcbiAgICAgICAgZXJyLmVycm9yLnRpdGxlID0gJ0dFVCBQb2lzJztcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zaG93RXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY3JlYXRlUG9pKCkge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLm1hcC5vbC5nZXRWaWV3KCk7XG4gICAgY29uc3QgcHJvaiA9IHZpZXcuZ2V0UHJvamVjdGlvbigpLmdldENvZGUoKTtcbiAgICBjb25zdCBjZW50ZXI6IGFueSA9IG5ldyBvbFBvaW50KHZpZXcuZ2V0Q2VudGVyKCkpLnRyYW5zZm9ybShcbiAgICAgIHByb2osXG4gICAgICAnRVBTRzo0MzI2J1xuICAgICk7XG5cbiAgICBjb25zdCBwb2k6IFBvaSA9IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHg6IGNlbnRlci5nZXRDb29yZGluYXRlcygpWzBdLFxuICAgICAgeTogY2VudGVyLmdldENvb3JkaW5hdGVzKClbMV0sXG4gICAgICB6b29tOiB2aWV3LmdldFpvb20oKVxuICAgIH07XG5cbiAgICB0aGlzLmRpYWxvZ1xuICAgICAgLm9wZW4oUG9pRGlhbG9nQ29tcG9uZW50LCB7IGRpc2FibGVDbG9zZTogZmFsc2UgfSlcbiAgICAgIC5hZnRlckNsb3NlZCgpXG4gICAgICAuc3Vic2NyaWJlKHRpdGxlID0+IHtcbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgcG9pLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgdGhpcy5wb2lTZXJ2aWNlLmNyZWF0ZShwb2kpLnN1YnNjcmliZShcbiAgICAgICAgICAgIG5ld1BvaSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGVEID0gdHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAgICAgJ2lnby5jb250ZXh0LnBvaUJ1dHRvbi5kaWFsb2cuY3JlYXRlVGl0bGUnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICAgICAnaWdvLmNvbnRleHQucG9pQnV0dG9uLmRpYWxvZy5jcmVhdGVNc2cnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBwb2kudGl0bGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2VzcyhtZXNzYWdlLCB0aXRsZUQpO1xuICAgICAgICAgICAgICBwb2kuaWQgPSBuZXdQb2kuaWQ7XG4gICAgICAgICAgICAgIHRoaXMucG9pcy5wdXNoKHBvaSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgZXJyLmVycm9yLnRpdGxlID0gJ1BPU1QgUG9pcyc7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2hvd0Vycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICB6b29tT25Qb2koaWQpIHtcbiAgICBjb25zdCBwb2kgPSB0aGlzLnBvaXMuZmluZChwID0+IHAuaWQgPT09IGlkKTtcblxuICAgIGNvbnN0IGNlbnRlciA9IG9scHJvai5mcm9tTG9uTGF0KFxuICAgICAgW051bWJlcihwb2kueCksIE51bWJlcihwb2kueSldLFxuICAgICAgdGhpcy5tYXAucHJvamVjdGlvblxuICAgICk7XG5cbiAgICB0aGlzLm1hcC5vbC5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4gICAgICBjZW50ZXIsXG4gICAgICB6b29tOiBwb2kuem9vbSxcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICBlYXNpbmc6IG9sZWFzaW5nLmVhc2VPdXRcbiAgICB9KTtcbiAgfVxufVxuIiwiPG1hdC1zZWxlY3QgW3BsYWNlaG9sZGVyXT1cIidpZ28uY29udGV4dC5wb2lCdXR0b24ucGxhY2Vob2xkZXInIHzCoHRyYW5zbGF0ZVwiXG4gICAgICAgICAgIGZsb2F0UGxhY2Vob2xkZXI9XCJuZXZlclwiPlxuXG4gIDxtYXQtb3B0aW9uIChjbGljayk9XCJjcmVhdGVQb2koKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVBvaVwiPnt7ICdpZ28uY29udGV4dC5wb2lCdXR0b24uY3JlYXRlJyB8wqB0cmFuc2xhdGUgfX08L2Rpdj5cbiAgICA8YnV0dG9uIGlnb1N0b3BQcm9wYWdhdGlvbiBjbGFzcz1cImFkZFBvaSBidXR0b25Qb2lcIlxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgKGNsaWNrKT1cImNyZWF0ZVBvaSgpXCI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cInBsdXMtY2lyY2xlXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtb3B0aW9uPlxuICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcG9pIG9mIHBvaXNcIiBbdmFsdWVdPVwicG9pLmlkXCIgKGNsaWNrKT1cInpvb21PblBvaShwb2kuaWQpXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlUG9pXCI+e3sgcG9pLnRpdGxlIH19PC9kaXY+XG4gICAgPGJ1dHRvbiBpZ29TdG9wUHJvcGFnYXRpb24gY2xhc3M9XCJkZWxldGVQb2kgYnV0dG9uUG9pXCJcbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgIChjbGljayk9XCJkZWxldGVQb2kocG9pKVwiPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJkZWxldGVcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC1vcHRpb24+XG48L21hdC1zZWxlY3Q+XG4iXX0=