import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ObjectUtils } from '@igo2/utils';
import { version } from './version';
import * as i0 from "@angular/core";
export class ConfigService {
    constructor(injector) {
        this.injector = injector;
        this.config = {};
    }
    /**
     * Use to get the data found in config file
     */
    getConfig(key) {
        return ObjectUtils.resolve(this.config, key);
    }
    /**
     * This method loads "[path]" to get all config's variables
     */
    load(options) {
        const baseConfig = options.default || {};
        if (!options.path) {
            this.config = baseConfig;
            return true;
        }
        const http = this.injector.get(HttpClient);
        return new Promise((resolve, _reject) => {
            http
                .get(options.path)
                .pipe(catchError((error) => {
                console.log(`Configuration file ${options.path} could not be read`);
                resolve(true);
                return throwError(error.error || 'Server error');
            }))
                .subscribe((configResponse) => {
                this.config = ObjectUtils.mergeDeep(ObjectUtils.mergeDeep({ version }, baseConfig), configResponse);
                resolve(true);
            });
        });
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0.ɵɵinject(i0.Injector)); };
ConfigService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvY29uZmlnL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFLcEMsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUY5QixXQUFNLEdBQVcsRUFBRSxDQUFDO0lBRWEsQ0FBQztJQUUxQzs7T0FFRztJQUNJLFNBQVMsQ0FBQyxHQUFXO1FBQzFCLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7T0FFRztJQUNJLElBQUksQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUN0QyxJQUFJO2lCQUNELEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2lCQUNqQixJQUFJLENBQ0gsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFPLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLE9BQU8sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3BFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQyxDQUNIO2lCQUNBLFNBQVMsQ0FBQyxDQUFDLGNBQXNCLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQzlDLGNBQWMsQ0FDZixDQUFDO2dCQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7MEVBMUNVLGFBQWE7bUVBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTt1RkFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmltcG9ydCB7IENvbmZpZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIGNvbmZpZzogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBnZXQgdGhlIGRhdGEgZm91bmQgaW4gY29uZmlnIGZpbGVcbiAgICovXG4gIHB1YmxpYyBnZXRDb25maWcoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBPYmplY3RVdGlscy5yZXNvbHZlKHRoaXMuY29uZmlnLCBrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGxvYWRzIFwiW3BhdGhdXCIgdG8gZ2V0IGFsbCBjb25maWcncyB2YXJpYWJsZXNcbiAgICovXG4gIHB1YmxpYyBsb2FkKG9wdGlvbnM6IENvbmZpZ09wdGlvbnMpIHtcbiAgICBjb25zdCBiYXNlQ29uZmlnID0gb3B0aW9ucy5kZWZhdWx0IHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5wYXRoKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBodHRwID0gdGhpcy5pbmplY3Rvci5nZXQoSHR0cENsaWVudCk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIGh0dHBcbiAgICAgICAgLmdldChvcHRpb25zLnBhdGgpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYENvbmZpZ3VyYXRpb24gZmlsZSAke29wdGlvbnMucGF0aH0gY291bGQgbm90IGJlIHJlYWRgKTtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChjb25maWdSZXNwb25zZTogb2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3RVdGlscy5tZXJnZURlZXAoXG4gICAgICAgICAgICBPYmplY3RVdGlscy5tZXJnZURlZXAoeyB2ZXJzaW9uIH0sIGJhc2VDb25maWcpLFxuICAgICAgICAgICAgY29uZmlnUmVzcG9uc2VcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=