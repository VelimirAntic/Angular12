import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ObjectUtils } from '@igo2/utils';
import * as i0 from "@angular/core";
export class StyleListService {
    constructor(injector) {
        this.injector = injector;
        this.styleList = {};
    }
    /**
     * Use to get the data found in styleList file
     */
    getStyleList(key) {
        return ObjectUtils.resolve(this.styleList, key);
    }
    /**
     * This method loads "[path]" to get all styleList's variables
     */
    load(options) {
        const baseStyleList = options.default || {};
        if (!options.path) {
            this.styleList = baseStyleList;
            return true;
        }
        const http = this.injector.get(HttpClient);
        return new Promise((resolve, _reject) => {
            http
                .get(options.path)
                .pipe(catchError((error) => {
                console.log(`StyleList file ${options.path} could not be read`);
                resolve(true);
                return throwError(error.error || 'Server error');
            }))
                .subscribe((styleListResponse) => {
                this.styleList = ObjectUtils.mergeDeep(baseStyleList, styleListResponse);
                resolve(true);
            });
        });
    }
}
StyleListService.ɵfac = function StyleListService_Factory(t) { return new (t || StyleListService)(i0.ɵɵinject(i0.Injector)); };
StyleListService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StyleListService, factory: StyleListService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleListService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvaW1wb3J0LWV4cG9ydC9zdHlsZS1saXN0L3N0eWxlLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQU8xQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRzNCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGOUIsY0FBUyxHQUFXLEVBQUUsQ0FBQztJQUVVLENBQUM7SUFFMUM7O09BRUc7SUFDSSxZQUFZLENBQUMsR0FBVztRQUM3QixPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxJQUFJLENBQUMsT0FBeUI7UUFDbkMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDdEMsSUFBSTtpQkFDRCxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztpQkFDakIsSUFBSSxDQUNILFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBTyxFQUFFO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixPQUFPLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FDSDtpQkFDQSxTQUFTLENBQUMsQ0FBQyxpQkFBeUIsRUFBRSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0ZBdkNVLGdCQUFnQjtzRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGZixNQUFNO3VGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9iamVjdFV0aWxzIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuXG5pbXBvcnQgeyBTdHlsZUxpc3RPcHRpb25zIH0gZnJvbSAnLi9zdHlsZS1saXN0LmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlTGlzdFNlcnZpY2Uge1xuICBwcml2YXRlIHN0eWxlTGlzdDogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBnZXQgdGhlIGRhdGEgZm91bmQgaW4gc3R5bGVMaXN0IGZpbGVcbiAgICovXG4gIHB1YmxpYyBnZXRTdHlsZUxpc3Qoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBPYmplY3RVdGlscy5yZXNvbHZlKHRoaXMuc3R5bGVMaXN0LCBrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGxvYWRzIFwiW3BhdGhdXCIgdG8gZ2V0IGFsbCBzdHlsZUxpc3QncyB2YXJpYWJsZXNcbiAgICovXG4gIHB1YmxpYyBsb2FkKG9wdGlvbnM6IFN0eWxlTGlzdE9wdGlvbnMpIHtcbiAgICBjb25zdCBiYXNlU3R5bGVMaXN0ID0gb3B0aW9ucy5kZWZhdWx0IHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5wYXRoKSB7XG4gICAgICB0aGlzLnN0eWxlTGlzdCA9IGJhc2VTdHlsZUxpc3Q7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBodHRwID0gdGhpcy5pbmplY3Rvci5nZXQoSHR0cENsaWVudCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIGh0dHBcbiAgICAgICAgLmdldChvcHRpb25zLnBhdGgpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFN0eWxlTGlzdCBmaWxlICR7b3B0aW9ucy5wYXRofSBjb3VsZCBub3QgYmUgcmVhZGApO1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHN0eWxlTGlzdFJlc3BvbnNlOiBvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLnN0eWxlTGlzdCA9IE9iamVjdFV0aWxzLm1lcmdlRGVlcChiYXNlU3R5bGVMaXN0LCBzdHlsZUxpc3RSZXNwb25zZSk7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==