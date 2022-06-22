import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/core";
export class InteractiveTourLoader {
    constructor(http, configService) {
        this.http = http;
        this.configService = configService;
        this.jsonURL = this.getPathToConfigFile();
    }
    loadConfigTour() {
        this.getJSON()
            .subscribe((data) => {
            this.allToursOptions = data;
        }, (err) => {
            throw new Error(`Problem with Interactive tour configuration file: interactiveTour.json not find. Check if the file and is path is set correctly.`);
        });
    }
    getPathToConfigFile() {
        return (this.configService.getConfig('interactiveTour.pathToConfigFile') ||
            './config/interactiveTour.json');
    }
    getJSON() {
        return this.http.get(this.jsonURL).pipe(catchError((e) => {
            e.error.caught = true;
            throw e;
        }));
    }
    getTourOptionData(toolName) {
        if (this.allToursOptions === undefined) {
            return undefined;
        }
        let nameInConfigFile = toolName;
        nameInConfigFile = nameInConfigFile.replace(/\s/g, '');
        return this.allToursOptions[nameInConfigFile];
    }
}
InteractiveTourLoader.ɵfac = function InteractiveTourLoader_Factory(t) { return new (t || InteractiveTourLoader)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); };
InteractiveTourLoader.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InteractiveTourLoader, factory: InteractiveTourLoader.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractiveTourLoader, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3RpdmUtdG91ci5sb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9pbnRlcmFjdGl2ZS10b3VyL2ludGVyYWN0aXZlLXRvdXIubG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSzNDLE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsWUFBb0IsSUFBZ0IsRUFBVSxhQUE0QjtRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU8sY0FBYztRQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFO2FBQ1gsU0FBUyxDQUNSLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDUCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsa0lBQWtJLENBQUMsQ0FBQztRQUN0SixDQUFDLENBQ0YsQ0FBQztJQUNQLENBQUM7SUFFSyxtQkFBbUI7UUFDeEIsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGtDQUFrQyxDQUFDO1lBQ2hFLCtCQUErQixDQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3JDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxRQUFRO1FBQy9CLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7WUFDdEMsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNoQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OzBGQTNDVSxxQkFBcUI7MkVBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnRlcmFjdGl2ZVRvdXJPcHRpb25zIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS10b3VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGl2ZVRvdXJMb2FkZXIge1xuICBwcml2YXRlIGpzb25VUkw6IHN0cmluZztcbiAgcHJpdmF0ZSBhbGxUb3Vyc09wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmpzb25VUkwgPSB0aGlzLmdldFBhdGhUb0NvbmZpZ0ZpbGUoKTtcbiAgfVxuXG4gICBwdWJsaWMgbG9hZENvbmZpZ1RvdXIoKSB7XG4gICAgICB0aGlzLmdldEpTT04oKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFsbFRvdXJzT3B0aW9ucyA9IGRhdGE7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFByb2JsZW0gd2l0aCBJbnRlcmFjdGl2ZSB0b3VyIGNvbmZpZ3VyYXRpb24gZmlsZTogaW50ZXJhY3RpdmVUb3VyLmpzb24gbm90IGZpbmQuIENoZWNrIGlmIHRoZSBmaWxlIGFuZCBpcyBwYXRoIGlzIHNldCBjb3JyZWN0bHkuYCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgfVxuXG4gIHB1YmxpYyBnZXRQYXRoVG9Db25maWdGaWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoJ2ludGVyYWN0aXZlVG91ci5wYXRoVG9Db25maWdGaWxlJykgfHxcbiAgICAgICcuL2NvbmZpZy9pbnRlcmFjdGl2ZVRvdXIuanNvbidcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldEpTT04oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmpzb25VUkwpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlKSA9PiB7XG4gICAgICAgIGUuZXJyb3IuY2F1Z2h0ID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUb3VyT3B0aW9uRGF0YSh0b29sTmFtZSk6IEludGVyYWN0aXZlVG91ck9wdGlvbnMge1xuICAgIGlmICh0aGlzLmFsbFRvdXJzT3B0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgbmFtZUluQ29uZmlnRmlsZSA9IHRvb2xOYW1lO1xuICAgIG5hbWVJbkNvbmZpZ0ZpbGUgPSBuYW1lSW5Db25maWdGaWxlLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMuYWxsVG91cnNPcHRpb25zW25hbWVJbkNvbmZpZ0ZpbGVdO1xuICB9XG59XG4iXX0=