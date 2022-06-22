import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ConfigService } from '@igo2/core';
import * as i0 from "@angular/core";
export class TokenService {
    constructor(injector) {
        this.injector = injector;
    }
    set(token) {
        localStorage.setItem(this.tokenKey, token);
    }
    remove() {
        localStorage.removeItem(this.tokenKey);
    }
    get() {
        return localStorage.getItem(this.tokenKey);
    }
    decode() {
        const token = this.get();
        if (!token) {
            return;
        }
        return jwtDecode(token);
    }
    isExpired() {
        const jwt = this.decode();
        const currentTime = new Date().getTime() / 1000;
        if (jwt && currentTime < jwt.exp) {
            return false;
        }
        return true;
    }
    get tokenKey() {
        const config = this.injector.get(ConfigService);
        this.options = config.getConfig('auth') || {};
        return this.options.tokenKey;
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(i0.ɵɵinject(i0.Injector)); };
TokenService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TokenService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL2xpYi9zaGFyZWQvdG9rZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUVuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUUxQyxHQUFHLENBQUMsS0FBYTtRQUNmLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsTUFBTTtRQUNKLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxHQUFHO1FBQ0QsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBQ0QsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDaEQsSUFBSSxHQUFHLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDaEMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQVksUUFBUTtRQUNsQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBZ0IsYUFBYSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7O3dFQXRDVSxZQUFZO2tFQUFaLFlBQVksV0FBWixZQUFZLG1CQUZYLE1BQU07dUZBRVAsWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcblxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQXV0aE9wdGlvbnMgfSBmcm9tICcuL2F1dGguaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvcHRpb25zOiBBdXRoT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBzZXQodG9rZW46IHN0cmluZykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudG9rZW5LZXksIHRva2VuKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnRva2VuS2V5KTtcbiAgfVxuXG4gIGdldCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuS2V5KTtcbiAgfVxuXG4gIGRlY29kZSgpIHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gand0RGVjb2RlKHRva2VuKTtcbiAgfVxuXG4gIGlzRXhwaXJlZCgpIHtcbiAgICBjb25zdCBqd3QgPSB0aGlzLmRlY29kZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwO1xuICAgIGlmIChqd3QgJiYgY3VycmVudFRpbWUgPCBqd3QuZXhwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgdG9rZW5LZXkoKSB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5pbmplY3Rvci5nZXQ8Q29uZmlnU2VydmljZT4oQ29uZmlnU2VydmljZSk7XG4gICAgdGhpcy5vcHRpb25zID0gY29uZmlnLmdldENvbmZpZygnYXV0aCcpIHx8IHt9O1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudG9rZW5LZXk7XG4gIH1cbn1cbiJdfQ==