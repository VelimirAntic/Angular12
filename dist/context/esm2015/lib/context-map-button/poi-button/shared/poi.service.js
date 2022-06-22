import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/core";
export class PoiService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.baseUrl = this.config.getConfig('context.url');
    }
    get() {
        if (!this.baseUrl) {
            return EMPTY;
        }
        const url = this.baseUrl + '/pois';
        return this.http.get(url);
    }
    delete(id) {
        const url = this.baseUrl + '/pois/' + id;
        return this.http.delete(url);
    }
    create(context) {
        const url = this.baseUrl + '/pois';
        return this.http.post(url, context);
    }
}
PoiService.ɵfac = function PoiService_Factory(t) { return new (t || PoiService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); };
PoiService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoiService, factory: PoiService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoiService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb250ZXh0L3NyYy9saWIvY29udGV4dC1tYXAtYnV0dG9uL3BvaS1idXR0b24vc2hhcmVkL3BvaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQU16QyxNQUFNLE9BQU8sVUFBVTtJQUdyQixZQUFvQixJQUFnQixFQUFVLE1BQXFCO1FBQS9DLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELEdBQUc7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQVU7UUFDZixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQVk7UUFDakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7b0VBeEJVLFVBQVU7Z0VBQVYsVUFBVSxXQUFWLFVBQVU7dUZBQVYsVUFBVTtjQUR0QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEVNUFRZIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IFBvaSB9IGZyb20gJy4vcG9pLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2lTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmdldENvbmZpZygnY29udGV4dC51cmwnKTtcbiAgfVxuXG4gIGdldCgpOiBPYnNlcnZhYmxlPFBvaVtdPiB7XG4gICAgaWYgKCF0aGlzLmJhc2VVcmwpIHtcbiAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL3BvaXMnO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBvaVtdPih1cmwpO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL3BvaXMvJyArIGlkO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHZvaWQ+KHVybCk7XG4gIH1cblxuICBjcmVhdGUoY29udGV4dDogUG9pKTogT2JzZXJ2YWJsZTxQb2k+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL3BvaXMnO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQb2k+KHVybCwgY29udGV4dCk7XG4gIH1cbn1cbiJdfQ==