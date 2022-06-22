import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Cacheable } from 'ts-cacheable';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SecureImagePipe {
    constructor(http) {
        this.http = http;
    }
    transform(url) {
        const headers = new HttpHeaders({
            'Content-Type': 'text/plain',
            activityInterceptor: 'false'
        });
        return this.http
            .get(url, {
            headers,
            responseType: 'blob'
        })
            .pipe(switchMap((blob) => {
            return new Observable((observer) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    observer.next(reader.result);
                    observer.complete();
                };
            });
        }));
    }
}
SecureImagePipe.ɵfac = function SecureImagePipe_Factory(t) { return new (t || SecureImagePipe)(i0.ɵɵdirectiveInject(i1.HttpClient, 16)); };
SecureImagePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "secureImage", type: SecureImagePipe, pure: true });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], SecureImagePipe.prototype, "transform", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SecureImagePipe, [{
        type: Pipe,
        args: [{
                name: 'secureImage'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, { transform: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLWltYWdlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9pbWFnZS9zZWN1cmUtaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUszQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUt4QyxTQUFTLENBQUMsR0FBVztRQUNuQixNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsWUFBWTtZQUM1QixtQkFBbUIsRUFBRSxPQUFPO1NBQzdCLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTztZQUNQLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUM7YUFDRCxJQUFJLENBQ0gsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2dCQUNoQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQixNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtvQkFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzdCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDbUIsQ0FBQztJQUM1QixDQUFDOzs4RUE3QlUsZUFBZTttRkFBZixlQUFlO0FBTTFCO0lBSEMsU0FBUyxDQUFDO1FBQ1QsYUFBYSxFQUFFLEVBQUU7S0FDbEIsQ0FBQztnREF3QkQ7dUZBN0JVLGVBQWU7Y0FIM0IsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxhQUFhO2FBQ3BCOzZEQU9DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgQ2FjaGVhYmxlIH0gZnJvbSAndHMtY2FjaGVhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQFBpcGUoe1xuICBuYW1lOiAnc2VjdXJlSW1hZ2UnXG59KVxuZXhwb3J0IGNsYXNzIFNlY3VyZUltYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgQENhY2hlYWJsZSh7XG4gICAgbWF4Q2FjaGVDb3VudDogMjBcbiAgfSlcbiAgdHJhbnNmb3JtKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbicsXG4gICAgICBhY3Rpdml0eUludGVyY2VwdG9yOiAnZmFsc2UnXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHVybCwge1xuICAgICAgICBoZWFkZXJzLFxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGJsb2IpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICkgYXMgT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICB9XG59XG4iXX0=