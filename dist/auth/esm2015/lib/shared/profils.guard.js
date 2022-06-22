import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@igo2/core";
import * as i3 from "@angular/router";
export class ProfilsGuard {
    constructor(authService, config, router) {
        this.authService = authService;
        this.config = config;
        this.router = router;
    }
    canActivate(_route, state) {
        return this.authService.getProfils().pipe(map((profils) => {
            const authConfig = this.config.getConfig('auth');
            if (profils &&
                profils.profils &&
                profils.profils.some(v => authConfig.profilsGuard.indexOf(v) !== -1)) {
                return true;
            }
            this.authService.redirectUrl = state.url;
            if (authConfig && authConfig.loginRoute) {
                this.router.navigateByUrl(authConfig.loginRoute);
            }
            return false;
        }));
    }
}
ProfilsGuard.ɵfac = function ProfilsGuard_Factory(t) { return new (t || ProfilsGuard)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i3.Router)); };
ProfilsGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProfilsGuard, factory: ProfilsGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilsGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.ConfigService }, { type: i3.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlscy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL2xpYi9zaGFyZWQvcHJvZmlscy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFRckMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsWUFDVSxXQUF3QixFQUN4QixNQUFxQixFQUNyQixNQUFjO1FBRmQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFFSixXQUFXLENBQUMsTUFBOEIsRUFBRSxLQUEwQjtRQUNwRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUN2QyxHQUFHLENBQUMsQ0FBQyxPQUE4QixFQUFFLEVBQUU7WUFDckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsSUFDRSxPQUFPO2dCQUNQLE9BQU8sQ0FBQyxPQUFPO2dCQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDcEU7Z0JBQ0EsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFFekMsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7d0VBNUJVLFlBQVk7a0VBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkFjdGl2YXRlLFxuICBSb3V0ZXIsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlclN0YXRlU25hcHNob3Rcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbHNHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFByb2ZpbHMoKS5waXBlKFxuICAgICAgbWFwKChwcm9maWxzOiB7IHByb2ZpbHM6IHN0cmluZ1tdIH0pID0+IHtcbiAgICAgICAgY29uc3QgYXV0aENvbmZpZyA9IHRoaXMuY29uZmlnLmdldENvbmZpZygnYXV0aCcpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvZmlscyAmJlxuICAgICAgICAgIHByb2ZpbHMucHJvZmlscyAmJlxuICAgICAgICAgIHByb2ZpbHMucHJvZmlscy5zb21lKHYgPT4gYXV0aENvbmZpZy5wcm9maWxzR3VhcmQuaW5kZXhPZih2KSAhPT0gLTEpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZWRpcmVjdFVybCA9IHN0YXRlLnVybDtcblxuICAgICAgICBpZiAoYXV0aENvbmZpZyAmJiBhdXRoQ29uZmlnLmxvZ2luUm91dGUpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGF1dGhDb25maWcubG9naW5Sb3V0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==