import { Injectable, Optional } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { globalCacheBusterNotifier } from 'ts-cacheable';
import { Base64 } from '@igo2/utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./token.service";
import * as i3 from "@igo2/core";
import * as i4 from "@angular/router";
export class AuthService {
    constructor(http, tokenService, config, languageService, messageService, router) {
        this.http = http;
        this.tokenService = tokenService;
        this.config = config;
        this.languageService = languageService;
        this.messageService = messageService;
        this.router = router;
        this.authenticate$ = new BehaviorSubject(undefined);
        this.logged$ = new BehaviorSubject(undefined);
        this.anonymous = false;
        this.authenticate$.next(this.authenticated);
        this.authenticate$.subscribe((authenticated) => {
            this.logged$.next(authenticated);
            globalCacheBusterNotifier.next();
        });
    }
    get hasAuthService() {
        return this.config.getConfig('auth.url') !== undefined;
    }
    login(username, password) {
        const myHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = {
            username,
            password: this.encodePassword(password)
        };
        return this.loginCall(body, myHeader);
    }
    loginWithToken(token, type, infosUser) {
        const myHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = {
            token,
            typeConnection: type,
            infosUser
        };
        return this.loginCall(body, myHeader);
    }
    loginAnonymous() {
        this.anonymous = true;
        this.logged$.next(true);
        return of(true);
    }
    refresh() {
        const url = this.config.getConfig('auth.url');
        return this.http.post(`${url}/refresh`, {}).pipe(tap((data) => {
            this.tokenService.set(data.token);
        }), catchError((err) => {
            err.error.caught = true;
            throw err;
        }));
    }
    logout() {
        this.anonymous = false;
        this.tokenService.remove();
        this.authenticate$.next(false);
        return of(true);
    }
    isAuthenticated() {
        return !this.tokenService.isExpired();
    }
    getToken() {
        return this.tokenService.get();
    }
    decodeToken() {
        if (this.isAuthenticated()) {
            return this.tokenService.decode();
        }
        return false;
    }
    goToRedirectUrl() {
        if (!this.router) {
            return;
        }
        const redirectUrl = this.redirectUrl || this.router.url;
        const options = this.config.getConfig('auth') || {};
        if (redirectUrl === options.loginRoute) {
            const homeRoute = options.homeRoute || '/';
            this.router.navigateByUrl(homeRoute);
        }
        else if (redirectUrl) {
            this.router.navigateByUrl(redirectUrl);
        }
    }
    getUserInfo() {
        const url = this.config.getConfig('auth.url') + '/info';
        return this.http.get(url);
    }
    getProfils() {
        const url = this.config.getConfig('auth.url');
        return this.http.get(`${url}/profils`);
    }
    updateUser(user) {
        const url = this.config.getConfig('auth.url');
        return this.http.patch(url, user);
    }
    encodePassword(password) {
        return Base64.encode(password);
    }
    // authenticated or anonymous
    get logged() {
        return this.authenticated || this.isAnonymous;
    }
    get isAnonymous() {
        return this.anonymous;
    }
    get authenticated() {
        return this.isAuthenticated();
    }
    get isAdmin() {
        const token = this.decodeToken();
        if (token && token.user && token.user.isAdmin) {
            return true;
        }
        return false;
    }
    loginCall(body, headers) {
        const url = this.config.getConfig('auth.url');
        return this.http.post(`${url}/login`, body, { headers }).pipe(tap((data) => {
            this.tokenService.set(data.token);
            const tokenDecoded = this.decodeToken();
            if (tokenDecoded && tokenDecoded.user) {
                if (tokenDecoded.user.locale) {
                    this.languageService.setLanguage(tokenDecoded.user.locale);
                }
                if (tokenDecoded.user.isExpired) {
                    this.languageService.translate
                        .get('igo.auth.error.Password expired')
                        .subscribe((expiredAlert) => this.messageService.alert(expiredAlert));
                }
            }
            this.authenticate$.next(true);
        }), catchError((err) => {
            err.error.caught = true;
            throw err;
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.TokenService), i0.ɵɵinject(i3.ConfigService), i0.ɵɵinject(i3.LanguageService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.Router, 8)); };
AuthService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.TokenService }, { type: i3.ConfigService }, { type: i3.LanguageService }, { type: i3.MessageService }, { type: i4.Router, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL3NoYXJlZC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRy9ELE9BQU8sRUFBYyxlQUFlLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQVFyQyxNQUFNLE9BQU8sV0FBVztJQVV0QixZQUNVLElBQWdCLEVBQ2hCLFlBQTBCLEVBQzFCLE1BQXFCLEVBQ3JCLGVBQWdDLEVBQ2hDLGNBQThCLEVBQ2xCLE1BQWM7UUFMMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWY3QixrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFVLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBVSxTQUFTLENBQUMsQ0FBQztRQUVqRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBY3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pDLHlCQUF5QixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpCRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLENBQUM7SUFDekQsQ0FBQztJQWlCRCxLQUFLLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUN0QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFFekUsTUFBTSxJQUFJLEdBQUc7WUFDWCxRQUFRO1lBQ1IsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1NBQ3hDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBYSxFQUFFLElBQVksRUFBRSxTQUFzQjtRQUNoRSxNQUFNLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFFekUsTUFBTSxJQUFJLEdBQUc7WUFDWCxLQUFLO1lBQ0wsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUztTQUNWLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakIsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLE1BQU0sR0FBRyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFFeEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BELElBQUksV0FBVyxLQUFLLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEM7YUFBTSxJQUFJLFdBQVcsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8sR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQU8sR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTyxjQUFjLENBQUMsUUFBZ0I7UUFDckMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBNkI7SUFDN0IsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMzRCxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3hDLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVEO2dCQUNELElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUzt5QkFDM0IsR0FBRyxDQUFDLGlDQUFpQyxDQUFDO3lCQUN0QyxTQUFTLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FDeEMsQ0FBQztpQkFDTDthQUNGO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakIsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLE1BQU0sR0FBRyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O3NFQXpLVSxXQUFXO2lFQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZWLE1BQU07dUZBRVAsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQWlCSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZ2xvYmFsQ2FjaGVCdXN0ZXJOb3RpZmllciB9IGZyb20gJ3RzLWNhY2hlYWJsZSc7XG5cbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UsIExhbmd1YWdlU2VydmljZSwgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IEJhc2U2NCB9IGZyb20gJ0BpZ28yL3V0aWxzJztcblxuaW1wb3J0IHsgVXNlciwgSUluZm9zVXNlciB9IGZyb20gJy4vYXV0aC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi90b2tlbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBwdWJsaWMgYXV0aGVudGljYXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odW5kZWZpbmVkKTtcbiAgcHVibGljIGxvZ2dlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHVuZGVmaW5lZCk7XG4gIHB1YmxpYyByZWRpcmVjdFVybDogc3RyaW5nO1xuICBwcml2YXRlIGFub255bW91cyA9IGZhbHNlO1xuXG4gIGdldCBoYXNBdXRoU2VydmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdhdXRoLnVybCcpICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7XG4gICAgdGhpcy5hdXRoZW50aWNhdGUkLm5leHQodGhpcy5hdXRoZW50aWNhdGVkKTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZSQuc3Vic2NyaWJlKChhdXRoZW50aWNhdGVkKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlZCQubmV4dChhdXRoZW50aWNhdGVkKTtcbiAgICAgIGdsb2JhbENhY2hlQnVzdGVyTm90aWZpZXIubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IG15SGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLmVuY29kZVBhc3N3b3JkKHBhc3N3b3JkKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5sb2dpbkNhbGwoYm9keSwgbXlIZWFkZXIpO1xuICB9XG5cbiAgbG9naW5XaXRoVG9rZW4odG9rZW46IHN0cmluZywgdHlwZTogc3RyaW5nLCBpbmZvc1VzZXI/OiBJSW5mb3NVc2VyKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgY29uc3QgbXlIZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIHRva2VuLFxuICAgICAgdHlwZUNvbm5lY3Rpb246IHR5cGUsXG4gICAgICBpbmZvc1VzZXJcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMubG9naW5DYWxsKGJvZHksIG15SGVhZGVyKTtcbiAgfVxuXG4gIGxvZ2luQW5vbnltb3VzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHRoaXMuYW5vbnltb3VzID0gdHJ1ZTtcbiAgICB0aGlzLmxvZ2dlZCQubmV4dCh0cnVlKTtcbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cblxuICByZWZyZXNoKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY29uZmlnLmdldENvbmZpZygnYXV0aC51cmwnKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dXJsfS9yZWZyZXNoYCwge30pLnBpcGUoXG4gICAgICB0YXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnRva2VuU2VydmljZS5zZXQoZGF0YS50b2tlbik7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBlcnIuZXJyb3IuY2F1Z2h0ID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbG9nb3V0KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHRoaXMuYW5vbnltb3VzID0gZmFsc2U7XG4gICAgdGhpcy50b2tlblNlcnZpY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGUkLm5leHQoZmFsc2UpO1xuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxuXG4gIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudG9rZW5TZXJ2aWNlLmlzRXhwaXJlZCgpO1xuICB9XG5cbiAgZ2V0VG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50b2tlblNlcnZpY2UuZ2V0KCk7XG4gIH1cblxuICBkZWNvZGVUb2tlbigpIHtcbiAgICBpZiAodGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMudG9rZW5TZXJ2aWNlLmRlY29kZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnb1RvUmVkaXJlY3RVcmwoKSB7XG4gICAgaWYgKCF0aGlzLnJvdXRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWRpcmVjdFVybCA9IHRoaXMucmVkaXJlY3RVcmwgfHwgdGhpcy5yb3V0ZXIudXJsO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29uZmlnLmdldENvbmZpZygnYXV0aCcpIHx8IHt9O1xuICAgIGlmIChyZWRpcmVjdFVybCA9PT0gb3B0aW9ucy5sb2dpblJvdXRlKSB7XG4gICAgICBjb25zdCBob21lUm91dGUgPSBvcHRpb25zLmhvbWVSb3V0ZSB8fCAnLyc7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGhvbWVSb3V0ZSk7XG4gICAgfSBlbHNlIGlmIChyZWRpcmVjdFVybCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZWRpcmVjdFVybCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VXNlckluZm8oKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdhdXRoLnVybCcpICsgJy9pbmZvJztcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2VyPih1cmwpO1xuICB9XG5cbiAgZ2V0UHJvZmlscygpOiBPYnNlcnZhYmxlPHsgcHJvZmlsczogc3RyaW5nW10gfT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY29uZmlnLmdldENvbmZpZygnYXV0aC51cmwnKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDx7IHByb2ZpbHM6IHN0cmluZ1tdIH0+KGAke3VybH0vcHJvZmlsc2ApO1xuICB9XG5cbiAgdXBkYXRlVXNlcih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdhdXRoLnVybCcpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2g8VXNlcj4odXJsLCB1c2VyKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5jb2RlUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiBCYXNlNjQuZW5jb2RlKHBhc3N3b3JkKTtcbiAgfVxuXG4gIC8vIGF1dGhlbnRpY2F0ZWQgb3IgYW5vbnltb3VzXG4gIGdldCBsb2dnZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZCB8fCB0aGlzLmlzQW5vbnltb3VzO1xuICB9XG5cbiAgZ2V0IGlzQW5vbnltb3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFub255bW91cztcbiAgfVxuXG4gIGdldCBhdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQXV0aGVudGljYXRlZCgpO1xuICB9XG5cbiAgZ2V0IGlzQWRtaW4oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmRlY29kZVRva2VuKCk7XG4gICAgaWYgKHRva2VuICYmIHRva2VuLnVzZXIgJiYgdG9rZW4udXNlci5pc0FkbWluKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2dpbkNhbGwoYm9keSwgaGVhZGVycykge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuY29uZmlnLmdldENvbmZpZygnYXV0aC51cmwnKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dXJsfS9sb2dpbmAsIGJvZHksIHsgaGVhZGVycyB9KS5waXBlKFxuICAgICAgdGFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KGRhdGEudG9rZW4pO1xuICAgICAgICBjb25zdCB0b2tlbkRlY29kZWQgPSB0aGlzLmRlY29kZVRva2VuKCk7XG4gICAgICAgIGlmICh0b2tlbkRlY29kZWQgJiYgdG9rZW5EZWNvZGVkLnVzZXIpIHtcbiAgICAgICAgICBpZiAodG9rZW5EZWNvZGVkLnVzZXIubG9jYWxlKSB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5zZXRMYW5ndWFnZSh0b2tlbkRlY29kZWQudXNlci5sb2NhbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodG9rZW5EZWNvZGVkLnVzZXIuaXNFeHBpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGVcbiAgICAgICAgICAgICAgLmdldCgnaWdvLmF1dGguZXJyb3IuUGFzc3dvcmQgZXhwaXJlZCcpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV4cGlyZWRBbGVydCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFsZXJ0KGV4cGlyZWRBbGVydClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGUkLm5leHQodHJ1ZSk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBlcnIuZXJyb3IuY2F1Z2h0ID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=