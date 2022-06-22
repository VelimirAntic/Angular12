import { Component, Input, Optional } from '@angular/core';
import { Clipboard } from '@igo2/utils';
import { Subject } from 'rxjs';
import { roundCoordTo } from '../../map/shared/map.utils';
import { addStopToStore, formatDistance, formatDuration, formatInstruction } from '../shared/directions.utils';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/common";
import * as i6 from "@ngx-translate/core";
function DirectionsButtonsComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function DirectionsButtonsComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.resetStops(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.directionsForm.resetDirectionsBtn"));
} }
function DirectionsButtonsComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function DirectionsButtonsComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.zoomRoute(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.directionsForm.zoomRoute"));
} }
function DirectionsButtonsComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function DirectionsButtonsComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.copyDirectionsToClipboard(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.directionsForm.copy"));
} }
function DirectionsButtonsComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function DirectionsButtonsComponent_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.copyLinkToClipboard(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 1, "igo.geo.directionsForm.link"));
} }
export class DirectionsButtonsComponent {
    constructor(languageService, messageService, route) {
        this.languageService = languageService;
        this.messageService = messageService;
        this.route = route;
        this.zoomToActiveRoute$ = new Subject();
    }
    get activeRoute() {
        return this.routesFeatureStore.all().find(route => route.properties.active);
    }
    resetStops() {
        this.stopsStore.clearStops();
    }
    // stop are always added before the last stop.
    addStop() {
        addStopToStore(this.stopsStore);
    }
    copyLinkToClipboard() {
        const successful = Clipboard.copy(this.getUrl());
        if (successful) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.geo.directionsForm.dialog.copyTitle');
            const msg = translate.instant('igo.geo.directionsForm.dialog.copyMsgLink');
            this.messageService.success(msg, title);
        }
    }
    zoomRoute() {
        this.zoomToActiveRoute$.next();
    }
    copyDirectionsToClipboard() {
        const directionsBody = this.directionsToText();
        const successful = Clipboard.copy(directionsBody);
        if (successful) {
            const translate = this.languageService.translate;
            const title = translate.instant('igo.geo.directionsForm.dialog.copyTitle');
            const msg = translate.instant('igo.geo.directionsForm.dialog.copyMsg');
            this.messageService.success(msg, title);
        }
    }
    directionsToText() {
        const indent = '\t';
        let activeRouteDirective = this.languageService.translate.instant('igo.geo.directionsForm.instructions') + ':\n';
        let wayPointList = '';
        const summary = this.languageService.translate.instant('igo.geo.directionsForm.summary') +
            ': \n' +
            indent +
            this.activeRoute.properties.direction.title +
            '\n' +
            indent +
            formatDistance(this.activeRoute.properties.direction.distance) +
            '\n' +
            indent +
            formatDuration(this.activeRoute.properties.direction.duration) +
            '\n\n' +
            this.languageService.translate.instant('igo.geo.directionsForm.stopsList') +
            ':\n';
        const url = this.languageService.translate.instant('igo.geo.directionsForm.link') +
            ':\n' +
            indent +
            this.getUrl();
        let wayPointsCnt = 1;
        this.stopsStore.view.all().forEach(stop => {
            let coord = '';
            let stopText = '';
            if (stop.text !== roundCoordTo(stop.coordinates).join(',')) {
                stopText = stop.text;
                coord = ` ( ${roundCoordTo(stop.coordinates).join(',')} )`;
            }
            else {
                stopText = roundCoordTo(stop.coordinates).join(',');
            }
            wayPointList =
                wayPointList +
                    indent +
                    wayPointsCnt.toLocaleString() +
                    '. ' +
                    stopText +
                    coord +
                    '\n';
            wayPointsCnt++;
        });
        let localCnt = 0;
        this.activeRoute.properties.direction.steps.forEach(step => {
            const instruction = this.formatStep(step, localCnt).instruction;
            const distance = formatDistance(step.distance) === undefined
                ? ''
                : ' (' + formatDistance(step.distance) + ')';
            activeRouteDirective =
                activeRouteDirective +
                    indent +
                    (localCnt + 1).toLocaleString() +
                    '. ' +
                    instruction +
                    distance +
                    '\n';
            localCnt++;
        });
        const directionsBody = summary + wayPointList + '\n' + url + '\n\n' + activeRouteDirective;
        return directionsBody;
    }
    formatStep(step, cnt) {
        return formatInstruction(step.maneuver.type, step.maneuver.modifier, step.name, step.maneuver.bearing_after, cnt, step.maneuver.exit, this.languageService, cnt === this.activeRoute.properties.direction.steps.length - 1);
    }
    getUrl() {
        if (!this.route) {
            return;
        }
        let context = '';
        if (this.contextUri) {
            context = `context=${this.contextUri}&`;
        }
        const pos = this.routesFeatureStore.all()
            .map((direction) => direction.properties.id).indexOf(this.activeRoute.properties.id);
        let routingOptions = '';
        if (pos !== 0) {
            const routingOptionsKey = this.route.options.directionsOptionsKey;
            routingOptions = `&${routingOptionsKey}=result:${pos}`;
        }
        const directionsKey = this.route.options.directionsCoordKey;
        const stopsCoordinates = this.stopsStore.view.all().map(stop => roundCoordTo(stop.coordinates, 6));
        let directionsUrl = '';
        if (stopsCoordinates.length >= 2) {
            directionsUrl = `${directionsKey}=${stopsCoordinates.join(';')}`;
            return `${location.origin}${location.pathname}?${context}tool=directions&sidenav=1&${directionsUrl}${routingOptions}`;
        }
        return;
    }
}
DirectionsButtonsComponent.ɵfac = function DirectionsButtonsComponent_Factory(t) { return new (t || DirectionsButtonsComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i1.MessageService), i0.ɵɵdirectiveInject(i1.RouteService, 8)); };
DirectionsButtonsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DirectionsButtonsComponent, selectors: [["igo-directions-buttons"]], inputs: { contextUri: "contextUri", zoomToActiveRoute$: "zoomToActiveRoute$", stopsStore: "stopsStore", routesFeatureStore: "routesFeatureStore" }, decls: 13, vars: 17, consts: [[1, "igo-form-button-group"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", 3, "matTooltip", "click"], ["svgIcon", "map-marker-plus"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click"], ["svgIcon", "file-restore"], ["svgIcon", "magnify-plus-outline"], ["svgIcon", "content-copy"], ["svgIcon", "link"]], template: function DirectionsButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function DirectionsButtonsComponent_Template_button_click_1_listener() { return ctx.addStop(); });
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelement(3, "mat-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, DirectionsButtonsComponent_button_4_Template, 3, 3, "button", 3);
        i0.ɵɵpipe(5, "async");
        i0.ɵɵpipe(6, "async");
        i0.ɵɵtemplate(7, DirectionsButtonsComponent_button_7_Template, 3, 3, "button", 4);
        i0.ɵɵpipe(8, "async");
        i0.ɵɵtemplate(9, DirectionsButtonsComponent_button_9_Template, 3, 3, "button", 4);
        i0.ɵɵpipe(10, "async");
        i0.ɵɵtemplate(11, DirectionsButtonsComponent_button_11_Template, 3, 3, "button", 4);
        i0.ɵɵpipe(12, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(2, 5, "igo.geo.directionsForm.addStop"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(5, 7, ctx.routesFeatureStore.count$) >= 1 || i0.ɵɵpipeBind1(6, 9, ctx.stopsStore.count$) >= 1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(8, 11, ctx.routesFeatureStore.count$) >= 1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(10, 13, ctx.routesFeatureStore.count$) >= 1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(12, 15, ctx.routesFeatureStore.count$) >= 1);
    } }, directives: [i2.MatButton, i3.MatTooltip, i4.MatIcon, i5.NgIf], pipes: [i6.TranslatePipe, i5.AsyncPipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectionsButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-directions-buttons',
                templateUrl: './directions-buttons.component.html',
                styleUrls: ['./directions-buttons.component.scss']
            }]
    }], function () { return [{ type: i1.LanguageService }, { type: i1.MessageService }, { type: i1.RouteService, decorators: [{
                type: Optional
            }] }]; }, { contextUri: [{
            type: Input
        }], zoomToActiveRoute$: [{
            type: Input
        }], stopsStore: [{
            type: Input
        }], routesFeatureStore: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9ucy1idXR0b25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2RpcmVjdGlvbnMvZGlyZWN0aW9ucy1idXR0b25zL2RpcmVjdGlvbnMtYnV0dG9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kaXJlY3Rpb25zL2RpcmVjdGlvbnMtYnV0dG9ucy9kaXJlY3Rpb25zLWJ1dHRvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7SUNGN0csaUNBRTZHO0lBQXZCLGlNQUFzQjs7SUFDMUcsOEJBQTRDO0lBQzlDLGlCQUFTOztJQUZQLDhGQUFzRTs7OztJQUd4RSxpQ0FFZ0Y7SUFEL0IsZ01BQXFCOztJQUVwRSw4QkFBb0Q7SUFDdEQsaUJBQVM7O0lBRlAscUZBQTZEOzs7O0lBRy9ELGlDQUUyRTtJQUQxQixnTkFBcUM7O0lBRXBGLDhCQUE0QztJQUM5QyxpQkFBUzs7SUFGUCxnRkFBd0Q7Ozs7SUFHMUQsaUNBRTJFO0lBRDFCLDhNQUErQjs7SUFFOUUsOEJBQW9DO0lBQ3RDLGlCQUFTOztJQUZQLGdGQUF3RDs7QURQNUQsTUFBTSxPQUFPLDBCQUEwQjtJQVNyQyxZQUNVLGVBQWdDLEVBQ2hDLGNB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b0dBMUtVLDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FDZnZDLDhCQUFtQztRQUNqQyxpQ0FDa0c7UUFBcEIsdUdBQVMsYUFBUyxJQUFDOztRQUMvRiw4QkFBK0M7UUFDakQsaUJBQVM7UUFDVCxpRkFJUzs7O1FBQ1QsaUZBSVM7O1FBQ1QsaUZBSVM7O1FBQ1QsbUZBSVM7O1FBQ1gsaUJBQU07O1FBdkJGLGVBQTJEO1FBQTNELG1GQUEyRDtRQUkxRCxlQUE4RTtRQUE5RSxtSUFBOEU7UUFLOUUsZUFBNEM7UUFBNUMsZ0ZBQTRDO1FBSzVDLGVBQTRDO1FBQTVDLGlGQUE0QztRQUs1QyxlQUE0QztRQUE1QyxpRkFBNEM7O3VGRE5wQywwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2FBQ25EOztzQkFhSSxRQUFRO3dCQVBGLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSwgTWVzc2FnZVNlcnZpY2UsIFJvdXRlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQ2xpcGJvYXJkIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcm91bmRDb29yZFRvIH0gZnJvbSAnLi4vLi4vbWFwL3NoYXJlZC9tYXAudXRpbHMnO1xuaW1wb3J0IHsgRmVhdHVyZVdpdGhEaXJlY3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvZGlyZWN0aW9ucy5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBhZGRTdG9wVG9TdG9yZSwgZm9ybWF0RGlzdGFuY2UsIGZvcm1hdER1cmF0aW9uLCBmb3JtYXRJbnN0cnVjdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9kaXJlY3Rpb25zLnV0aWxzJztcbmltcG9ydCB7IFJvdXRlc0ZlYXR1cmVTdG9yZSwgU3RvcHNTdG9yZSB9IGZyb20gJy4uL3NoYXJlZC9zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby1kaXJlY3Rpb25zLWJ1dHRvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlyZWN0aW9ucy1idXR0b25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlyZWN0aW9ucy1idXR0b25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0aW9uc0J1dHRvbnNDb21wb25lbnQge1xuXG4gIGdldCBhY3RpdmVSb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXNGZWF0dXJlU3RvcmUuYWxsKCkuZmluZChyb3V0ZSA9PiByb3V0ZS5wcm9wZXJ0aWVzLmFjdGl2ZSk7XG4gIH1cbiAgQElucHV0KCkgY29udGV4dFVyaTogc3RyaW5nO1xuICBASW5wdXQoKSB6b29tVG9BY3RpdmVSb3V0ZSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICBASW5wdXQoKSBzdG9wc1N0b3JlOiBTdG9wc1N0b3JlO1xuICBASW5wdXQoKSByb3V0ZXNGZWF0dXJlU3RvcmU6IFJvdXRlc0ZlYXR1cmVTdG9yZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlOiBSb3V0ZVNlcnZpY2UpIHsgfVxuXG4gIHJlc2V0U3RvcHMoKSB7XG4gICAgdGhpcy5zdG9wc1N0b3JlLmNsZWFyU3RvcHMoKTtcbiAgfVxuXG4gIC8vIHN0b3AgYXJlIGFsd2F5cyBhZGRlZCBiZWZvcmUgdGhlIGxhc3Qgc3RvcC5cbiAgYWRkU3RvcCgpOiB2b2lkIHtcbiAgICBhZGRTdG9wVG9TdG9yZSh0aGlzLnN0b3BzU3RvcmUpO1xuICB9XG5cblxuICBjb3B5TGlua1RvQ2xpcGJvYXJkKCkge1xuICAgIGNvbnN0IHN1Y2Nlc3NmdWwgPSBDbGlwYm9hcmQuY29weSh0aGlzLmdldFVybCgpKTtcbiAgICBpZiAoc3VjY2Vzc2Z1bCkge1xuICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlO1xuICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5nZW8uZGlyZWN0aW9uc0Zvcm0uZGlhbG9nLmNvcHlUaXRsZSdcbiAgICAgICk7XG4gICAgICBjb25zdCBtc2cgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5nZW8uZGlyZWN0aW9uc0Zvcm0uZGlhbG9nLmNvcHlNc2dMaW5rJ1xuICAgICAgKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2Vzcyhtc2csIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICB6b29tUm91dGUoKSB7XG4gICAgdGhpcy56b29tVG9BY3RpdmVSb3V0ZSQubmV4dCgpO1xuICB9XG5cbiAgY29weURpcmVjdGlvbnNUb0NsaXBib2FyZCgpIHtcbiAgICBjb25zdCBkaXJlY3Rpb25zQm9keSA9IHRoaXMuZGlyZWN0aW9uc1RvVGV4dCgpO1xuICAgIGNvbnN0IHN1Y2Nlc3NmdWwgPSBDbGlwYm9hcmQuY29weShkaXJlY3Rpb25zQm9keSk7XG4gICAgaWYgKHN1Y2Nlc3NmdWwpIHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IHRpdGxlID0gdHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICdpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLmRpYWxvZy5jb3B5VGl0bGUnXG4gICAgICApO1xuICAgICAgY29uc3QgbXNnID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8uZGlyZWN0aW9uc0Zvcm0uZGlhbG9nLmNvcHlNc2cnKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2Vzcyhtc2csIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRpcmVjdGlvbnNUb1RleHQoKSB7XG4gICAgY29uc3QgaW5kZW50ID0gJ1xcdCc7XG4gICAgbGV0IGFjdGl2ZVJvdXRlRGlyZWN0aXZlID1cbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnaWdvLmdlby5kaXJlY3Rpb25zRm9ybS5pbnN0cnVjdGlvbnMnXG4gICAgICApICsgJzpcXG4nO1xuICAgIGxldCB3YXlQb2ludExpc3QgPSAnJztcbiAgICBjb25zdCBzdW1tYXJ5ID1cbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLnN1bW1hcnknKSArXG4gICAgICAnOiBcXG4nICtcbiAgICAgIGluZGVudCArXG4gICAgICB0aGlzLmFjdGl2ZVJvdXRlLnByb3BlcnRpZXMuZGlyZWN0aW9uLnRpdGxlICtcbiAgICAgICdcXG4nICtcbiAgICAgIGluZGVudCArXG4gICAgICBmb3JtYXREaXN0YW5jZSh0aGlzLmFjdGl2ZVJvdXRlLnByb3BlcnRpZXMuZGlyZWN0aW9uLmRpc3RhbmNlKSArXG4gICAgICAnXFxuJyArXG4gICAgICBpbmRlbnQgK1xuICAgICAgZm9ybWF0RHVyYXRpb24odGhpcy5hY3RpdmVSb3V0ZS5wcm9wZXJ0aWVzLmRpcmVjdGlvbi5kdXJhdGlvbikgK1xuICAgICAgJ1xcblxcbicgK1xuICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICdpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLnN0b3BzTGlzdCdcbiAgICAgICkgK1xuICAgICAgJzpcXG4nO1xuXG4gICAgY29uc3QgdXJsID1cbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLmxpbmsnKSArXG4gICAgICAnOlxcbicgK1xuICAgICAgaW5kZW50ICtcbiAgICAgIHRoaXMuZ2V0VXJsKCk7XG5cbiAgICBsZXQgd2F5UG9pbnRzQ250ID0gMTtcbiAgICB0aGlzLnN0b3BzU3RvcmUudmlldy5hbGwoKS5mb3JFYWNoKHN0b3AgPT4ge1xuICAgICAgbGV0IGNvb3JkID0gJyc7XG4gICAgICBsZXQgc3RvcFRleHQgPSAnJztcbiAgICAgIGlmIChzdG9wLnRleHQgIT09IHJvdW5kQ29vcmRUbyhzdG9wLmNvb3JkaW5hdGVzKS5qb2luKCcsJykpIHtcbiAgICAgICAgc3RvcFRleHQgPSBzdG9wLnRleHQ7XG4gICAgICAgIGNvb3JkID0gYCAoICR7cm91bmRDb29yZFRvKHN0b3AuY29vcmRpbmF0ZXMpLmpvaW4oJywnKX0gKWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9wVGV4dCA9IHJvdW5kQ29vcmRUbyhzdG9wLmNvb3JkaW5hdGVzKS5qb2luKFxuICAgICAgICAgICcsJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB3YXlQb2ludExpc3QgPVxuICAgICAgICB3YXlQb2ludExpc3QgK1xuICAgICAgICBpbmRlbnQgK1xuICAgICAgICB3YXlQb2ludHNDbnQudG9Mb2NhbGVTdHJpbmcoKSArXG4gICAgICAgICcuICcgK1xuICAgICAgICBzdG9wVGV4dCArXG4gICAgICAgIGNvb3JkICtcbiAgICAgICAgJ1xcbic7XG4gICAgICB3YXlQb2ludHNDbnQrKztcbiAgICB9KTtcblxuICAgIGxldCBsb2NhbENudCA9IDA7XG4gICAgdGhpcy5hY3RpdmVSb3V0ZS5wcm9wZXJ0aWVzLmRpcmVjdGlvbi5zdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSB0aGlzLmZvcm1hdFN0ZXAoc3RlcCwgbG9jYWxDbnQpLmluc3RydWN0aW9uO1xuICAgICAgY29uc3QgZGlzdGFuY2UgPVxuICAgICAgICBmb3JtYXREaXN0YW5jZShzdGVwLmRpc3RhbmNlKSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAnJ1xuICAgICAgICAgIDogJyAoJyArIGZvcm1hdERpc3RhbmNlKHN0ZXAuZGlzdGFuY2UpICsgJyknO1xuICAgICAgYWN0aXZlUm91dGVEaXJlY3RpdmUgPVxuICAgICAgICBhY3RpdmVSb3V0ZURpcmVjdGl2ZSArXG4gICAgICAgIGluZGVudCArXG4gICAgICAgIChsb2NhbENudCArIDEpLnRvTG9jYWxlU3RyaW5nKCkgK1xuICAgICAgICAnLiAnICtcbiAgICAgICAgaW5zdHJ1Y3Rpb24gK1xuICAgICAgICBkaXN0YW5jZSArXG4gICAgICAgICdcXG4nO1xuICAgICAgbG9jYWxDbnQrKztcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbnNCb2R5ID1cbiAgICAgIHN1bW1hcnkgKyB3YXlQb2ludExpc3QgKyAnXFxuJyArIHVybCArICdcXG5cXG4nICsgYWN0aXZlUm91dGVEaXJlY3RpdmU7XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uc0JvZHk7XG4gIH1cblxuICBmb3JtYXRTdGVwKHN0ZXAsIGNudCkge1xuICAgIHJldHVybiBmb3JtYXRJbnN0cnVjdGlvbihcbiAgICAgIHN0ZXAubWFuZXV2ZXIudHlwZSxcbiAgICAgIHN0ZXAubWFuZXV2ZXIubW9kaWZpZXIsXG4gICAgICBzdGVwLm5hbWUsXG4gICAgICBzdGVwLm1hbmV1dmVyLmJlYXJpbmdfYWZ0ZXIsXG4gICAgICBjbnQsXG4gICAgICBzdGVwLm1hbmV1dmVyLmV4aXQsXG4gICAgICB0aGlzLmxhbmd1YWdlU2VydmljZSxcbiAgICAgIGNudCA9PT0gdGhpcy5hY3RpdmVSb3V0ZS5wcm9wZXJ0aWVzLmRpcmVjdGlvbi5zdGVwcy5sZW5ndGggLSAxXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VXJsKCkge1xuICAgIGlmICghdGhpcy5yb3V0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgY29udGV4dCA9ICcnO1xuICAgIGlmICh0aGlzLmNvbnRleHRVcmkpIHtcbiAgICAgIGNvbnRleHQgPSBgY29udGV4dD0ke3RoaXMuY29udGV4dFVyaX0mYDtcbiAgICB9XG5cbiAgICBjb25zdCBwb3MgPSB0aGlzLnJvdXRlc0ZlYXR1cmVTdG9yZS5hbGwoKVxuICAgIC5tYXAoKGRpcmVjdGlvbjogRmVhdHVyZVdpdGhEaXJlY3Rpb24pID0+IGRpcmVjdGlvbi5wcm9wZXJ0aWVzLmlkKS5pbmRleE9mKHRoaXMuYWN0aXZlUm91dGUucHJvcGVydGllcy5pZCk7XG4gICAgbGV0IHJvdXRpbmdPcHRpb25zID0gJyc7XG4gICAgaWYgKHBvcyAhPT0gMCkge1xuICAgICAgY29uc3Qgcm91dGluZ09wdGlvbnNLZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMuZGlyZWN0aW9uc09wdGlvbnNLZXk7XG4gICAgICByb3V0aW5nT3B0aW9ucyA9IGAmJHtyb3V0aW5nT3B0aW9uc0tleX09cmVzdWx0OiR7cG9zfWA7XG4gICAgfVxuICAgIGNvbnN0IGRpcmVjdGlvbnNLZXkgPSB0aGlzLnJvdXRlLm9wdGlvbnMuZGlyZWN0aW9uc0Nvb3JkS2V5O1xuICAgIGNvbnN0IHN0b3BzQ29vcmRpbmF0ZXMgPSB0aGlzLnN0b3BzU3RvcmUudmlldy5hbGwoKS5tYXAoc3RvcCA9PiByb3VuZENvb3JkVG8oc3RvcC5jb29yZGluYXRlcywgNikpO1xuICAgIGxldCBkaXJlY3Rpb25zVXJsID0gJyc7XG4gICAgaWYgKHN0b3BzQ29vcmRpbmF0ZXMubGVuZ3RoID49IDIpIHtcbiAgICAgIGRpcmVjdGlvbnNVcmwgPSBgJHtkaXJlY3Rpb25zS2V5fT0ke3N0b3BzQ29vcmRpbmF0ZXMuam9pbignOycpfWA7XG4gICAgICByZXR1cm4gYCR7bG9jYXRpb24ub3JpZ2lufSR7bG9jYXRpb24ucGF0aG5hbWV9PyR7Y29udGV4dH10b29sPWRpcmVjdGlvbnMmc2lkZW5hdj0xJiR7ZGlyZWN0aW9uc1VybH0ke3JvdXRpbmdPcHRpb25zfWA7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImlnby1mb3JtLWJ1dHRvbi1ncm91cFwiPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5kaXJlY3Rpb25zRm9ybS5hZGRTdG9wJyB8IHRyYW5zbGF0ZVwiIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRTdG9wKClcIj5cbiAgICA8bWF0LWljb24gc3ZnSWNvbj1cIm1hcC1tYXJrZXItcGx1c1wiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAqbmdJZj1cIihyb3V0ZXNGZWF0dXJlU3RvcmUuY291bnQkIHwgYXN5bmMpPj0xIHx8IChzdG9wc1N0b3JlLmNvdW50JCB8IGFzeW5jKT49MVwiXG4gICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uZGlyZWN0aW9uc0Zvcm0ucmVzZXREaXJlY3Rpb25zQnRuJyB8IHRyYW5zbGF0ZVwiIGNvbG9yPVwid2FyblwiIChjbGljayk9XCJyZXNldFN0b3BzKClcIj5cbiAgICA8bWF0LWljb24gc3ZnSWNvbj1cImZpbGUtcmVzdG9yZVwiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAqbmdJZj1cIihyb3V0ZXNGZWF0dXJlU3RvcmUuY291bnQkIHwgYXN5bmMpPj0xXCIgKGNsaWNrKT1cInpvb21Sb3V0ZSgpXCJcbiAgICBbbWF0VG9vbHRpcF09XCInaWdvLmdlby5kaXJlY3Rpb25zRm9ybS56b29tUm91dGUnIHwgdHJhbnNsYXRlXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPG1hdC1pY29uIHN2Z0ljb249XCJtYWduaWZ5LXBsdXMtb3V0bGluZVwiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAqbmdJZj1cIihyb3V0ZXNGZWF0dXJlU3RvcmUuY291bnQkIHwgYXN5bmMpPj0xXCIgKGNsaWNrKT1cImNvcHlEaXJlY3Rpb25zVG9DbGlwYm9hcmQoKVwiXG4gICAgW21hdFRvb2x0aXBdPVwiJ2lnby5nZW8uZGlyZWN0aW9uc0Zvcm0uY29weScgfCB0cmFuc2xhdGVcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICA8bWF0LWljb24gc3ZnSWNvbj1cImNvbnRlbnQtY29weVwiPjwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIiBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgICAqbmdJZj1cIihyb3V0ZXNGZWF0dXJlU3RvcmUuY291bnQkIHwgYXN5bmMpPj0xXCIgKGNsaWNrKT1cImNvcHlMaW5rVG9DbGlwYm9hcmQoKVwiIFxuICAgIFttYXRUb29sdGlwXT1cIidpZ28uZ2VvLmRpcmVjdGlvbnNGb3JtLmxpbmsnIHwgdHJhbnNsYXRlXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPG1hdC1pY29uIHN2Z0ljb249XCJsaW5rXCI+PC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L2Rpdj4iXX0=