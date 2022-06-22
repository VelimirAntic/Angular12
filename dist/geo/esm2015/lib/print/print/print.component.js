import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../shared/print.service";
import * as i2 from "../print-form/print-form.component";
export class PrintComponent {
    constructor(printService) {
        this.printService = printService;
        this.disabled$ = new BehaviorSubject(false);
    }
    get map() {
        return this._map;
    }
    set map(value) {
        this._map = value;
    }
    get outputFormat() {
        return this._outputFormat;
    }
    set outputFormat(value) {
        this._outputFormat = value;
    }
    get paperFormat() {
        return this._paperFormat;
    }
    set paperFormat(value) {
        this._paperFormat = value;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(value) {
        this._orientation = value;
    }
    get imageFormat() {
        return this._imageFormat;
    }
    set imageFormat(value) {
        this._imageFormat = value;
    }
    get legendPosition() {
        return this._legendPosition;
    }
    set legendPosition(value) {
        this._legendPosition = value;
    }
    get resolution() {
        return this._resolution;
    }
    set resolution(value) {
        this._resolution = value;
    }
    handleFormSubmit(data) {
        this.disabled$.next(true);
        if (data.isPrintService === true) {
            this.printService
                .print(this.map, data)
                .pipe(take(1))
                .subscribe(() => {
                this.disabled$.next(false);
            });
        }
        else {
            let nbFileToProcess = 1;
            if (data.showLegend) {
                nbFileToProcess++;
            }
            if (data.imageFormat.toLowerCase() === 'tiff') {
                nbFileToProcess++;
            }
            this.printService.defineNbFileToProcess(nbFileToProcess);
            const resolution = +data.resolution;
            let nbRequests = data.showLegend ? 2 : 1;
            this.printService
                .downloadMapImage(this.map, resolution, data.imageFormat, data.showProjection, data.showScale, data.showLegend, data.title, data.subtitle, data.comment, data.doZipFile)
                .pipe(take(1))
                .subscribe(() => {
                nbRequests--;
                if (!nbRequests) {
                    this.disabled$.next(false);
                }
            });
            if (data.showLegend) {
                this.printService
                    .getLayersLegendImage(this.map, data.imageFormat, data.doZipFile, +resolution)
                    .then(() => {
                    nbRequests--;
                    if (!nbRequests) {
                        this.disabled$.next(false);
                    }
                });
            }
        }
    }
}
PrintComponent.ɵfac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(i0.ɵɵdirectiveInject(i1.PrintService)); };
PrintComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PrintComponent, selectors: [["igo-print"]], inputs: { map: "map", outputFormat: "outputFormat", paperFormat: "paperFormat", orientation: "orientation", imageFormat: "imageFormat", legendPosition: "legendPosition", resolution: "resolution" }, decls: 1, vars: 7, consts: [[3, "outputFormat", "paperFormat", "orientation", "imageFormat", "resolution", "legendPosition", "disabled$", "submit"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "igo-print-form", 0);
        i0.ɵɵlistener("submit", function PrintComponent_Template_igo_print_form_submit_0_listener($event) { return ctx.handleFormSubmit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("outputFormat", ctx.outputFormat)("paperFormat", ctx.paperFormat)("orientation", ctx.orientation)("imageFormat", ctx.imageFormat)("resolution", ctx.resolution)("legendPosition", ctx.legendPosition)("disabled$", ctx.disabled$);
    } }, directives: [i2.PrintFormComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PrintComponent, [{
        type: Component,
        args: [{
                selector: 'igo-print',
                templateUrl: './print.component.html'
            }]
    }], function () { return [{ type: i1.PrintService }]; }, { map: [{
            type: Input
        }], outputFormat: [{
            type: Input
        }], paperFormat: [{
            type: Input
        }], orientation: [{
            type: Input
        }], imageFormat: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], resolution: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvcHJpbnQvcHJpbnQvcHJpbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvcHJpbnQvcHJpbnQvcHJpbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFvQnRDLE1BQU0sT0FBTyxjQUFjO0lBa0V6QixZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWpFdkMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBaUVHLENBQUM7SUEvRGxELElBQ0ksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBR0QsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUF3QjtRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBR0QsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUF1QjtRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBR0QsSUFDSSxX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LENBQUM7b0JBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDNUI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNGO0lBQ0gsQ0FBQzs7NEVBbElVLGNBQWM7aUVBQWQsY0FBYztRQ3RCM0IseUNBUXNDO1FBQXBDLDJHQUFVLDRCQUF3QixJQUFDO1FBQ3JDLGlCQUFpQjs7UUFSZiwrQ0FBNkIsZ0NBQUEsZ0NBQUEsZ0NBQUEsOEJBQUEsc0NBQUEsNEJBQUE7O3VGRHFCbEIsY0FBYztjQUoxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7YUFDdEM7K0RBS0ssR0FBRztrQkFETixLQUFLO1lBVUYsWUFBWTtrQkFEZixLQUFLO1lBVUYsV0FBVztrQkFEZCxLQUFLO1lBVUYsV0FBVztrQkFEZCxLQUFLO1lBVUYsV0FBVztrQkFEZCxLQUFLO1lBVUYsY0FBYztrQkFEakIsS0FBSztZQVVGLFVBQVU7a0JBRGIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSWdvTWFwIH0gZnJvbSAnLi4vLi4vbWFwL3NoYXJlZC9tYXAnO1xuaW1wb3J0IHsgUHJpbnRPcHRpb25zIH0gZnJvbSAnLi4vc2hhcmVkL3ByaW50LmludGVyZmFjZSc7XG5cbmltcG9ydCB7XG4gIFByaW50T3V0cHV0Rm9ybWF0LFxuICBQcmludFBhcGVyRm9ybWF0LFxuICBQcmludE9yaWVudGF0aW9uLFxuICBQcmludFJlc29sdXRpb24sXG4gIFByaW50U2F2ZUltYWdlRm9ybWF0LFxuICBQcmludExlZ2VuZFBvc2l0aW9uXG59IGZyb20gJy4uL3NoYXJlZC9wcmludC50eXBlJztcblxuaW1wb3J0IHsgUHJpbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3ByaW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tcHJpbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJpbnQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFByaW50Q29tcG9uZW50IHtcbiAgcHVibGljIGRpc2FibGVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBtYXAoKTogSWdvTWFwIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG4gIHNldCBtYXAodmFsdWU6IElnb01hcCkge1xuICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX21hcDogSWdvTWFwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBvdXRwdXRGb3JtYXQoKTogUHJpbnRPdXRwdXRGb3JtYXQge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRGb3JtYXQ7XG4gIH1cbiAgc2V0IG91dHB1dEZvcm1hdCh2YWx1ZTogUHJpbnRPdXRwdXRGb3JtYXQpIHtcbiAgICB0aGlzLl9vdXRwdXRGb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9vdXRwdXRGb3JtYXQ6IFByaW50T3V0cHV0Rm9ybWF0O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwYXBlckZvcm1hdCgpOiBQcmludFBhcGVyRm9ybWF0IHtcbiAgICByZXR1cm4gdGhpcy5fcGFwZXJGb3JtYXQ7XG4gIH1cbiAgc2V0IHBhcGVyRm9ybWF0KHZhbHVlOiBQcmludFBhcGVyRm9ybWF0KSB7XG4gICAgdGhpcy5fcGFwZXJGb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9wYXBlckZvcm1hdDogUHJpbnRQYXBlckZvcm1hdDtcblxuICBASW5wdXQoKVxuICBnZXQgb3JpZW50YXRpb24oKTogUHJpbnRPcmllbnRhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX29yaWVudGF0aW9uO1xuICB9XG4gIHNldCBvcmllbnRhdGlvbih2YWx1ZTogUHJpbnRPcmllbnRhdGlvbikge1xuICAgIHRoaXMuX29yaWVudGF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfb3JpZW50YXRpb246IFByaW50T3JpZW50YXRpb247XG5cbiAgQElucHV0KClcbiAgZ2V0IGltYWdlRm9ybWF0KCk6IFByaW50U2F2ZUltYWdlRm9ybWF0IHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VGb3JtYXQ7XG4gIH1cbiAgc2V0IGltYWdlRm9ybWF0KHZhbHVlOiBQcmludFNhdmVJbWFnZUZvcm1hdCkge1xuICAgIHRoaXMuX2ltYWdlRm9ybWF0ID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfaW1hZ2VGb3JtYXQ6IFByaW50U2F2ZUltYWdlRm9ybWF0O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsZWdlbmRQb3NpdGlvbigpOiBQcmludExlZ2VuZFBvc2l0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fbGVnZW5kUG9zaXRpb247XG4gIH1cbiAgc2V0IGxlZ2VuZFBvc2l0aW9uKHZhbHVlOiBQcmludExlZ2VuZFBvc2l0aW9uKSB7XG4gICAgdGhpcy5fbGVnZW5kUG9zaXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9sZWdlbmRQb3NpdGlvbjogUHJpbnRMZWdlbmRQb3NpdGlvbjtcblxuICBASW5wdXQoKVxuICBnZXQgcmVzb2x1dGlvbigpOiBQcmludFJlc29sdXRpb24ge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHV0aW9uO1xuICB9XG4gIHNldCByZXNvbHV0aW9uKHZhbHVlOiBQcmludFJlc29sdXRpb24pIHtcbiAgICB0aGlzLl9yZXNvbHV0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfcmVzb2x1dGlvbjogUHJpbnRSZXNvbHV0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpbnRTZXJ2aWNlOiBQcmludFNlcnZpY2UpIHt9XG5cbiAgaGFuZGxlRm9ybVN1Ym1pdChkYXRhOiBQcmludE9wdGlvbnMpIHtcblxuICAgIHRoaXMuZGlzYWJsZWQkLm5leHQodHJ1ZSk7XG5cbiAgICBpZiAoZGF0YS5pc1ByaW50U2VydmljZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5wcmludFNlcnZpY2VcbiAgICAgICAgLnByaW50KHRoaXMubWFwLCBkYXRhKVxuICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkJC5uZXh0KGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuYkZpbGVUb1Byb2Nlc3MgPSAxO1xuXG4gICAgICBpZiAoZGF0YS5zaG93TGVnZW5kKSB7XG4gICAgICAgIG5iRmlsZVRvUHJvY2VzcysrO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGEuaW1hZ2VGb3JtYXQudG9Mb3dlckNhc2UoKSA9PT0gJ3RpZmYnKSB7XG4gICAgICAgIG5iRmlsZVRvUHJvY2VzcysrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByaW50U2VydmljZS5kZWZpbmVOYkZpbGVUb1Byb2Nlc3MobmJGaWxlVG9Qcm9jZXNzKTtcblxuICAgICAgY29uc3QgcmVzb2x1dGlvbiA9ICtkYXRhLnJlc29sdXRpb247XG5cbiAgICAgIGxldCBuYlJlcXVlc3RzID0gZGF0YS5zaG93TGVnZW5kID8gMiA6IDE7XG4gICAgICB0aGlzLnByaW50U2VydmljZVxuICAgICAgICAuZG93bmxvYWRNYXBJbWFnZShcbiAgICAgICAgICB0aGlzLm1hcCxcbiAgICAgICAgICByZXNvbHV0aW9uLFxuICAgICAgICAgIGRhdGEuaW1hZ2VGb3JtYXQsXG4gICAgICAgICAgZGF0YS5zaG93UHJvamVjdGlvbixcbiAgICAgICAgICBkYXRhLnNob3dTY2FsZSxcbiAgICAgICAgICBkYXRhLnNob3dMZWdlbmQsXG4gICAgICAgICAgZGF0YS50aXRsZSxcbiAgICAgICAgICBkYXRhLnN1YnRpdGxlLFxuICAgICAgICAgIGRhdGEuY29tbWVudCxcbiAgICAgICAgICBkYXRhLmRvWmlwRmlsZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIG5iUmVxdWVzdHMtLTtcbiAgICAgICAgICBpZiAoIW5iUmVxdWVzdHMpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQkLm5leHQoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICBpZiAoZGF0YS5zaG93TGVnZW5kKSB7XG4gICAgICAgIHRoaXMucHJpbnRTZXJ2aWNlXG4gICAgICAgICAgLmdldExheWVyc0xlZ2VuZEltYWdlKFxuICAgICAgICAgICAgdGhpcy5tYXAsXG4gICAgICAgICAgICBkYXRhLmltYWdlRm9ybWF0LFxuICAgICAgICAgICAgZGF0YS5kb1ppcEZpbGUsXG4gICAgICAgICAgICArcmVzb2x1dGlvblxuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBuYlJlcXVlc3RzLS07XG4gICAgICAgICAgICBpZiAoIW5iUmVxdWVzdHMpIHtcbiAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCQubmV4dChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8aWdvLXByaW50LWZvcm1cbiAgW291dHB1dEZvcm1hdF09XCJvdXRwdXRGb3JtYXRcIlxuICBbcGFwZXJGb3JtYXRdPVwicGFwZXJGb3JtYXRcIlxuICBbb3JpZW50YXRpb25dPVwib3JpZW50YXRpb25cIlxuICBbaW1hZ2VGb3JtYXRdPVwiaW1hZ2VGb3JtYXRcIlxuICBbcmVzb2x1dGlvbl09XCJyZXNvbHV0aW9uXCJcbiAgW2xlZ2VuZFBvc2l0aW9uXT1cImxlZ2VuZFBvc2l0aW9uXCJcbiAgW2Rpc2FibGVkJF09XCJkaXNhYmxlZCRcIlxuICAoc3VibWl0KT1cImhhbmRsZUZvcm1TdWJtaXQoJGV2ZW50KVwiPlxuPC9pZ28tcHJpbnQtZm9ybT5cbiJdfQ==