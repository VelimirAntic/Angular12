import { Injectable } from '@angular/core';
import { StorageService, StorageScope } from '@igo2/core';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/common/http";
import * as i3 from "./auth.service";
import * as i4 from "./token.service";
export class AuthStorageService extends StorageService {
    constructor(config, http, authService, tokenService) {
        super(config);
        this.http = http;
        this.authService = authService;
        this.tokenService = tokenService;
        this.authService.authenticate$.subscribe(isAuthenticated => {
            if (isAuthenticated && this.options.url) {
                this.http
                    .get(this.options.url)
                    .subscribe((userIgo) => {
                    if (userIgo && userIgo.preference) {
                        for (const key of Object.keys(userIgo.preference)) {
                            const value = userIgo.preference[key];
                            super.set(key, value);
                        }
                    }
                });
            }
        });
    }
    set(key, value, scope = StorageScope.LOCAL) {
        if (scope === StorageScope.LOCAL &&
            this.authService.authenticated &&
            this.options.url) {
            const preference = {};
            preference[key] = value;
            this.http.patch(this.options.url, { preference }).subscribe();
        }
        super.set(key, value, scope);
    }
    remove(key, scope = StorageScope.LOCAL) {
        if (scope === StorageScope.LOCAL &&
            this.authService.authenticated &&
            this.options.url) {
            const preference = {};
            preference[key] = undefined;
            this.http.patch(this.options.url, { preference }).subscribe();
        }
        super.remove(key, scope);
    }
    clear(scope = StorageScope.LOCAL) {
        if (scope === StorageScope.LOCAL &&
            this.authService.authenticated &&
            this.options.url) {
            this.http.patch(this.options.url, { preference: {} }, {
                params: {
                    mergePreference: 'false'
                }
            }).subscribe();
        }
        let token;
        if (scope === StorageScope.LOCAL) {
            token = this.tokenService.get();
        }
        super.clear(scope);
        if (token) {
            this.tokenService.set(token);
        }
        if (scope === StorageScope.LOCAL &&
            this.authService.authenticated &&
            this.options.url) {
            this.http
                .get(this.options.url)
                .subscribe((userIgo) => {
                if (userIgo && userIgo.preference) {
                    for (const key of Object.keys(userIgo.preference)) {
                        const value = userIgo.preference[key];
                        super.set(key, value);
                    }
                }
            });
        }
    }
}
AuthStorageService.ɵfac = function AuthStorageService_Factory(t) { return new (t || AuthStorageService)(i0.ɵɵinject(i1.ConfigService), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i3.AuthService), i0.ɵɵinject(i4.TokenService)); };
AuthStorageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthStorageService, factory: AuthStorageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConfigService }, { type: i2.HttpClient }, { type: i3.AuthService }, { type: i4.TokenService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL3NoYXJlZC9zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBaUIsTUFBTSxZQUFZLENBQUM7Ozs7OztBQVF6RSxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsY0FBYztJQUdwRCxZQUNFLE1BQXFCLEVBQ2IsSUFBZ0IsRUFDaEIsV0FBd0IsRUFDeEIsWUFBMEI7UUFFbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSk4sU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUlsQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDekQsSUFBSSxlQUFlLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJO3FCQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztxQkFDckIsU0FBUyxDQUFDLENBQUMsT0FBK0IsRUFBRSxFQUFFO29CQUM3QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO3dCQUNqQyxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFOzRCQUNqRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUN0QyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzt5QkFDdkI7cUJB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QUN0QyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDdkI7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQzs7b0ZBakdVLGtCQUFrQjt3RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGakIsTUFBTTt1RkFFUCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UsIFN0b3JhZ2VTY29wZSwgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tICcuL3Rva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFN0b3JhZ2VPcHRpb25zIH0gZnJvbSAnLi9zdG9yYWdlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTdG9yYWdlU2VydmljZSBleHRlbmRzIFN0b3JhZ2VTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIG9wdGlvbnM6IEF1dGhTdG9yYWdlT3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBUb2tlblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aGVudGljYXRlJC5zdWJzY3JpYmUoaXNBdXRoZW50aWNhdGVkID0+IHtcbiAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQgJiYgdGhpcy5vcHRpb25zLnVybCkge1xuICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KHRoaXMub3B0aW9ucy51cmwpXG4gICAgICAgICAgLnN1YnNjcmliZSgodXNlcklnbzogeyBwcmVmZXJlbmNlOiBvYmplY3QgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJJZ28gJiYgdXNlcklnby5wcmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHVzZXJJZ28ucHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHVzZXJJZ28ucHJlZmVyZW5jZVtrZXldO1xuICAgICAgICAgICAgICAgIHN1cGVyLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlOiBzdHJpbmcgfCBvYmplY3QgfCBib29sZWFuIHwgbnVtYmVyLFxuICAgIHNjb3BlOiBTdG9yYWdlU2NvcGUgPSBTdG9yYWdlU2NvcGUuTE9DQUxcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgc2NvcGUgPT09IFN0b3JhZ2VTY29wZS5MT0NBTCAmJlxuICAgICAgdGhpcy5hdXRoU2VydmljZS5hdXRoZW50aWNhdGVkICYmXG4gICAgICB0aGlzLm9wdGlvbnMudXJsXG4gICAgKSB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlID0ge307XG4gICAgICBwcmVmZXJlbmNlW2tleV0gPSB2YWx1ZTtcbiAgICAgIHRoaXMuaHR0cC5wYXRjaCh0aGlzLm9wdGlvbnMudXJsLCB7IHByZWZlcmVuY2UgfSkuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHN1cGVyLnNldChrZXksIHZhbHVlLCBzY29wZSk7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcsIHNjb3BlOiBTdG9yYWdlU2NvcGUgPSBTdG9yYWdlU2NvcGUuTE9DQUwpIHtcbiAgICBpZiAoXG4gICAgICBzY29wZSA9PT0gU3RvcmFnZVNjb3BlLkxPQ0FMICYmXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZWQgJiZcbiAgICAgIHRoaXMub3B0aW9ucy51cmxcbiAgICApIHtcbiAgICAgIGNvbnN0IHByZWZlcmVuY2UgPSB7fTtcbiAgICAgIHByZWZlcmVuY2Vba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuaHR0cC5wYXRjaCh0aGlzLm9wdGlvbnMudXJsLCB7IHByZWZlcmVuY2UgfSkuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHN1cGVyLnJlbW92ZShrZXksIHNjb3BlKTtcbiAgfVxuXG4gIGNsZWFyKHNjb3BlOiBTdG9yYWdlU2NvcGUgPSBTdG9yYWdlU2NvcGUuTE9DQUwpIHtcbiAgICBpZiAoXG4gICAgICBzY29wZSA9PT0gU3RvcmFnZVNjb3BlLkxPQ0FMICYmXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZWQgJiZcbiAgICAgIHRoaXMub3B0aW9ucy51cmxcbiAgICApIHtcbiAgICAgIHRoaXMuaHR0cC5wYXRjaCh0aGlzLm9wdGlvbnMudXJsLCB7IHByZWZlcmVuY2U6IHt9fSwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBtZXJnZVByZWZlcmVuY2U6ICdmYWxzZSdcbiAgICAgICAgfVxuICAgICAgfSkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgbGV0IHRva2VuOiBzdHJpbmc7XG4gICAgaWYgKHNjb3BlID09PSBTdG9yYWdlU2NvcGUuTE9DQUwpIHtcbiAgICAgIHRva2VuID0gdGhpcy50b2tlblNlcnZpY2UuZ2V0KCk7XG4gICAgfVxuXG4gICAgc3VwZXIuY2xlYXIoc2NvcGUpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0aGlzLnRva2VuU2VydmljZS5zZXQodG9rZW4pO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHNjb3BlID09PSBTdG9yYWdlU2NvcGUuTE9DQUwgJiZcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aGVudGljYXRlZCAmJlxuICAgICAgdGhpcy5vcHRpb25zLnVybFxuICAgICkge1xuICAgICAgdGhpcy5odHRwXG4gICAgICAgIC5nZXQodGhpcy5vcHRpb25zLnVybClcbiAgICAgICAgLnN1YnNjcmliZSgodXNlcklnbzogeyBwcmVmZXJlbmNlOiBvYmplY3QgfSkgPT4ge1xuICAgICAgICAgIGlmICh1c2VySWdvICYmIHVzZXJJZ28ucHJlZmVyZW5jZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModXNlcklnby5wcmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHVzZXJJZ28ucHJlZmVyZW5jZVtrZXldO1xuICAgICAgICAgICAgICBzdXBlci5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==