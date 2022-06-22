import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
export class DrawIconService {
    constructor(config) {
        this.config = config;
        this.getIconsList();
    }
    getIcons() {
        return this.icons;
    }
    getPath() {
        return this.config.getConfig('drawingTool.icons') || [];
    }
    getIconsList() {
        this.icons = this.getPath();
    }
}
DrawIconService.ɵfac = function DrawIconService_Factory(t) { return new (t || DrawIconService)(i0.ɵɵinject(i1.ConfigService)); };
DrawIconService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DrawIconService, factory: DrawIconService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawIconService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy1pY29uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kcmF3L3NoYXJlZC9kcmF3LWljb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPM0MsTUFBTSxPQUFPLGVBQWU7SUFJeEIsWUFDWSxNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBRTdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs4RUFwQlEsZUFBZTtxRUFBZixlQUFlLFdBQWYsZUFBZSxtQkFGWixNQUFNO3VGQUVULGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgfSlcbmV4cG9ydCBjbGFzcyBEcmF3SWNvblNlcnZpY2Uge1xuXG4gICAgcHJvdGVjdGVkIGljb25zOiBBcnJheTxzdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcm90ZWN0ZWQgY29uZmlnOiBDb25maWdTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZ2V0SWNvbnNMaXN0KCk7XG4gICAgfVxuXG4gICAgZ2V0SWNvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmljb25zO1xuICAgIH1cblxuICAgIGdldFBhdGgoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2RyYXdpbmdUb29sLmljb25zJykgfHwgW107XG4gICAgfVxuXG4gICAgZ2V0SWNvbnNMaXN0KCkge1xuICAgICAgdGhpcy5pY29ucyA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgIH1cbn1cbiJdfQ==