import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "./token.service";
import * as i3 from "@angular/common/http";
export class AuthInterceptor {
    constructor(config, tokenService, http) {
        this.config = config;
        this.tokenService = tokenService;
        this.http = http;
        this.refreshInProgress = false;
    }
    get trustHosts() {
        const trustHosts = this.config.getConfig('auth.trustHosts') || [];
        trustHosts.push(window.location.hostname);
        return trustHosts;
    }
    get hostsWithCredentials() {
        return this.config.getConfig('auth.hostsWithCredentials') || [];
    }
    get hostsWithAuthByKey() {
        return this.config.getConfig('auth.hostsByKey') || [];
    }
    intercept(originalReq, next) {
        const withCredentials = this.handleHostsWithCredentials(originalReq.url);
        let req = originalReq.clone();
        const hostWithKey = this.handleHostsAuthByKey(originalReq.url);
        if (hostWithKey) {
            req = req.clone({
                params: req.params.set(hostWithKey.key, hostWithKey.value)
            });
        }
        if (withCredentials) {
            req = originalReq.clone({
                withCredentials
            });
        }
        this.refreshToken();
        const token = this.tokenService.get();
        const element = document.createElement('a');
        element.href = req.url;
        if (element.host === '') {
            element.href = element.href; // FIX IE11, DO NOT REMOVE
        }
        if (!token || this.trustHosts.indexOf(element.hostname) === -1) {
            return next.handle(req);
        }
        const authHeader = `Bearer ${token}`;
        let authReq = req.clone({
            headers: req.headers.set('Authorization', authHeader)
        });
        const tokenDecoded = this.tokenService.decode();
        if (authReq.params.get('_i') === 'true' &&
            tokenDecoded &&
            tokenDecoded.user &&
            tokenDecoded.user.sourceId) {
            const hashUser = Md5.hashStr(tokenDecoded.user.sourceId);
            authReq = authReq.clone({
                params: authReq.params.set('_i', hashUser)
            });
        }
        else if (authReq.params.get('_i') === 'true') {
            authReq = authReq.clone({
                params: authReq.params.delete('_i')
            });
        }
        return next.handle(authReq);
    }
    interceptXhr(xhr, url) {
        const withCredentials = this.handleHostsWithCredentials(url);
        if (withCredentials) {
            xhr.withCredentials = withCredentials;
            return true;
        }
        this.refreshToken();
        const element = document.createElement('a');
        element.href = url;
        const token = this.tokenService.get();
        if (!token || this.trustHosts.indexOf(element.hostname) === -1) {
            return false;
        }
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        return true;
    }
    alterUrlWithKeyAuth(url) {
        const hostWithKey = this.handleHostsAuthByKey(url);
        let interceptedUrl = url;
        if (hostWithKey) {
            const urlDecomposed = interceptedUrl.split(/[?&]/);
            let urlWithKeyAdded = urlDecomposed.shift();
            const paramsToKeep = urlDecomposed.filter(p => p.length !== 0);
            paramsToKeep.push(`${hostWithKey.key}=${hostWithKey.value}`);
            if (paramsToKeep.length) {
                urlWithKeyAdded += '?' + paramsToKeep.join('&');
            }
            return urlWithKeyAdded;
        }
        return;
    }
    handleHostsWithCredentials(reqUrl) {
        let withCredentials = false;
        for (const hostWithCredentials of this.hostsWithCredentials) {
            const domainRegex = new RegExp(hostWithCredentials.domainRegFilters);
            if (domainRegex.test(reqUrl)) {
                withCredentials = hostWithCredentials.withCredentials !== undefined ? hostWithCredentials.withCredentials : undefined;
                break;
            }
        }
        return withCredentials;
    }
    handleHostsAuthByKey(reqUrl) {
        let hostWithKey;
        for (const hostWithAuthByKey of this.hostsWithAuthByKey) {
            const domainRegex = new RegExp(hostWithAuthByKey.domainRegFilters);
            if (domainRegex.test(reqUrl)) {
                var replace = `${hostWithAuthByKey.keyProperty}=${hostWithAuthByKey.keyValue}`;
                var keyAdded = new RegExp(replace, "gm");
                if (!keyAdded.test(reqUrl)) {
                    hostWithKey = { key: hostWithAuthByKey.keyProperty, value: hostWithAuthByKey.keyValue };
                    break;
                }
            }
        }
        return hostWithKey;
    }
    refreshToken() {
        const jwt = this.tokenService.decode();
        const currentTime = new Date().getTime() / 1000;
        if (!this.refreshInProgress &&
            jwt &&
            currentTime < jwt.exp &&
            currentTime > jwt.exp - 1800) {
            this.refreshInProgress = true;
            const url = this.config.getConfig('auth.url');
            return this.http.post(`${url}/refresh`, {}).subscribe((data) => {
                this.tokenService.set(data.token);
                this.refreshInProgress = false;
            }, err => {
                err.error.caught = true;
                return err;
            });
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(i0.ɵɵinject(i1.ConfigService), i0.ɵɵinject(i2.TokenService), i0.ɵɵinject(i3.HttpClient)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthInterceptor, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConfigService }, { type: i2.TokenService }, { type: i3.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL2xpYi9zaGFyZWQvYXV0aC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7O0FBUzdCLE1BQU0sT0FBTyxlQUFlO0lBaUIxQixZQUNVLE1BQXFCLEVBQ3JCLFlBQTBCLEVBQzFCLElBQWdCO1FBRmhCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQW5CbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBb0IvQixDQUFDO0lBbEJKLElBQVksVUFBVTtRQUNwQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQVksb0JBQW9CO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsMkJBQTJCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQVksa0JBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQVFELFNBQVMsQ0FDUCxXQUE2QixFQUM3QixJQUFpQjtRQUVqQixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FB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QUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkMsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFaEQsSUFDRSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDdkIsR0FBRztZQUNILFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRztZQUNyQixXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQzVCO1lBQ0EsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUU5QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNuRCxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUNqQyxDQUFDLEVBQ0QsR0FBRyxDQUFDLEVBQUU7Z0JBQ0osR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs4RUFwS1UsZUFBZTtxRUFBZixlQUFlLFdBQWYsZUFBZSxtQkFGZCxNQUFNO3VGQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFJlcXVlc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1JztcblxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi90b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhCeUtleU9wdGlvbnMsIFdpdGhDcmVkZW50aWFsc09wdGlvbnMgfSBmcm9tICcuL2F1dGguaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSByZWZyZXNoSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZ2V0IHRydXN0SG9zdHMoKSB7XG4gICAgY29uc3QgdHJ1c3RIb3N0cyA9IHRoaXMuY29uZmlnLmdldENvbmZpZygnYXV0aC50cnVzdEhvc3RzJykgfHwgW107XG4gICAgdHJ1c3RIb3N0cy5wdXNoKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgcmV0dXJuIHRydXN0SG9zdHM7XG4gIH1cblxuICBwcml2YXRlIGdldCBob3N0c1dpdGhDcmVkZW50aWFscygpOiBXaXRoQ3JlZGVudGlhbHNPcHRpb25zW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2F1dGguaG9zdHNXaXRoQ3JlZGVudGlhbHMnKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGhvc3RzV2l0aEF1dGhCeUtleSgpOiBBdXRoQnlLZXlPcHRpb25zW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2F1dGguaG9zdHNCeUtleScpIHx8IFtdO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICBvcmlnaW5hbFJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3Qgd2l0aENyZWRlbnRpYWxzID0gdGhpcy5oYW5kbGVIb3N0c1dpdGhDcmVkZW50aWFscyhvcmlnaW5hbFJlcS51cmwpO1xuICAgIGxldCByZXEgPSBvcmlnaW5hbFJlcS5jbG9uZSgpO1xuICAgIGNvbnN0IGhvc3RXaXRoS2V5ID0gdGhpcy5oYW5kbGVIb3N0c0F1dGhCeUtleShvcmlnaW5hbFJlcS51cmwpO1xuICAgIGlmIChob3N0V2l0aEtleSkge1xuICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgcGFyYW1zOiByZXEucGFyYW1zLnNldChob3N0V2l0aEtleS5rZXksIGhvc3RXaXRoS2V5LnZhbHVlKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh3aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcSA9IG9yaWdpbmFsUmVxLmNsb25lKHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoVG9rZW4oKTtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5TZXJ2aWNlLmdldCgpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZWxlbWVudC5ocmVmID0gcmVxLnVybDtcbiAgICBpZiAoZWxlbWVudC5ob3N0ID09PSAnJykge1xuICAgICAgZWxlbWVudC5ocmVmID0gZWxlbWVudC5ocmVmOyAvLyBGSVggSUUxMSwgRE8gTk9UIFJFTU9WRVxuICAgIH1cblxuICAgIGlmICghdG9rZW4gfHwgdGhpcy50cnVzdEhvc3RzLmluZGV4T2YoZWxlbWVudC5ob3N0bmFtZSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdXRoSGVhZGVyID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgbGV0IGF1dGhSZXEgPSByZXEuY2xvbmUoe1xuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgYXV0aEhlYWRlcilcbiAgICB9KTtcblxuICAgIGNvbnN0IHRva2VuRGVjb2RlZDogYW55ID0gdGhpcy50b2tlblNlcnZpY2UuZGVjb2RlKCk7XG4gICAgaWYgKFxuICAgICAgYXV0aFJlcS5wYXJhbXMuZ2V0KCdfaScpID09PSAndHJ1ZScgJiZcbiAgICAgIHRva2VuRGVjb2RlZCAmJlxuICAgICAgdG9rZW5EZWNvZGVkLnVzZXIgJiZcbiAgICAgIHRva2VuRGVjb2RlZC51c2VyLnNvdXJjZUlkXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXNoVXNlciA9IE1kNS5oYXNoU3RyKHRva2VuRGVjb2RlZC51c2VyLnNvdXJjZUlkKSBhcyBzdHJpbmc7XG4gICAgICBhdXRoUmVxID0gYXV0aFJlcS5jbG9uZSh7XG4gICAgICAgIHBhcmFtczogYXV0aFJlcS5wYXJhbXMuc2V0KCdfaScsIGhhc2hVc2VyKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhdXRoUmVxLnBhcmFtcy5nZXQoJ19pJykgPT09ICd0cnVlJykge1xuICAgICAgYXV0aFJlcSA9IGF1dGhSZXEuY2xvbmUoe1xuICAgICAgICBwYXJhbXM6IGF1dGhSZXEucGFyYW1zLmRlbGV0ZSgnX2knKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKGF1dGhSZXEpO1xuICB9XG5cbiAgaW50ZXJjZXB0WGhyKHhociwgdXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB3aXRoQ3JlZGVudGlhbHMgPSB0aGlzLmhhbmRsZUhvc3RzV2l0aENyZWRlbnRpYWxzKHVybCk7XG4gICAgaWYgKHdpdGhDcmVkZW50aWFscykge1xuICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHM7XG4gICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoVG9rZW4oKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGVsZW1lbnQuaHJlZiA9IHVybDtcblxuICAgIGNvbnN0IHRva2VuID0gdGhpcy50b2tlblNlcnZpY2UuZ2V0KCk7XG4gICAgaWYgKCF0b2tlbiB8fCB0aGlzLnRydXN0SG9zdHMuaW5kZXhPZihlbGVtZW50Lmhvc3RuYW1lKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhbHRlclVybFdpdGhLZXlBdXRoKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBob3N0V2l0aEtleSA9IHRoaXMuaGFuZGxlSG9zdHNBdXRoQnlLZXkodXJsKTtcbiAgICBsZXQgaW50ZXJjZXB0ZWRVcmwgPSB1cmw7XG4gICAgaWYgKGhvc3RXaXRoS2V5KSB7XG4gICAgICBjb25zdCB1cmxEZWNvbXBvc2VkID0gaW50ZXJjZXB0ZWRVcmwuc3BsaXQoL1s/Jl0vKTtcbiAgICAgIGxldCB1cmxXaXRoS2V5QWRkZWQgPSB1cmxEZWNvbXBvc2VkLnNoaWZ0KCk7XG4gICAgICBjb25zdCBwYXJhbXNUb0tlZXAgPSB1cmxEZWNvbXBvc2VkLmZpbHRlcihwID0+IHAubGVuZ3RoICE9PSAwKTtcbiAgICAgIHBhcmFtc1RvS2VlcC5wdXNoKGAke2hvc3RXaXRoS2V5LmtleX09JHtob3N0V2l0aEtleS52YWx1ZX1gKTtcbiAgICAgIGlmIChwYXJhbXNUb0tlZXAubGVuZ3RoKSB7XG4gICAgICAgIHVybFdpdGhLZXlBZGRlZCArPSAnPycgKyBwYXJhbXNUb0tlZXAuam9pbignJicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybFdpdGhLZXlBZGRlZDtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVIb3N0c1dpdGhDcmVkZW50aWFscyhyZXFVcmw6IHN0cmluZykge1xuICAgIGxldCB3aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGhvc3RXaXRoQ3JlZGVudGlhbHMgb2YgdGhpcy5ob3N0c1dpdGhDcmVkZW50aWFscykge1xuICAgICAgY29uc3QgZG9tYWluUmVnZXggPSBuZXcgUmVnRXhwKGhvc3RXaXRoQ3JlZGVudGlhbHMuZG9tYWluUmVnRmlsdGVycyk7XG4gICAgICBpZiAoZG9tYWluUmVnZXgudGVzdChyZXFVcmwpKSB7XG4gICAgICAgIHdpdGhDcmVkZW50aWFscyA9IGhvc3RXaXRoQ3JlZGVudGlhbHMud2l0aENyZWRlbnRpYWxzICE9PSB1bmRlZmluZWQgPyBob3N0V2l0aENyZWRlbnRpYWxzLndpdGhDcmVkZW50aWFscyA6IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3aXRoQ3JlZGVudGlhbHM7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUhvc3RzQXV0aEJ5S2V5KHJlcVVybDogc3RyaW5nKToge2tleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfSB7XG4gICAgbGV0IGhvc3RXaXRoS2V5O1xuICAgIGZvciAoY29uc3QgaG9zdFdpdGhBdXRoQnlLZXkgb2YgdGhpcy5ob3N0c1dpdGhBdXRoQnlLZXkpIHtcbiAgICAgIGNvbnN0IGRvbWFpblJlZ2V4ID0gbmV3IFJlZ0V4cChob3N0V2l0aEF1dGhCeUtleS5kb21haW5SZWdGaWx0ZXJzKTtcbiAgICAgIGlmIChkb21haW5SZWdleC50ZXN0KHJlcVVybCkpIHtcbiAgICAgICAgdmFyIHJlcGxhY2UgPSBgJHtob3N0V2l0aEF1dGhCeUtleS5rZXlQcm9wZXJ0eX09JHtob3N0V2l0aEF1dGhCeUtleS5rZXlWYWx1ZX1gO1xuICAgICAgICB2YXIga2V5QWRkZWQgPSBuZXcgUmVnRXhwKHJlcGxhY2UsXCJnbVwiKTtcbiAgICAgICAgaWYgKCFrZXlBZGRlZC50ZXN0KHJlcVVybCkpIHtcbiAgICAgICAgICBob3N0V2l0aEtleSA9IHtrZXkgOiBob3N0V2l0aEF1dGhCeUtleS5rZXlQcm9wZXJ0eSwgdmFsdWU6IGhvc3RXaXRoQXV0aEJ5S2V5LmtleVZhbHVlfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaG9zdFdpdGhLZXk7XG4gIH1cblxuICByZWZyZXNoVG9rZW4oKSB7XG4gICAgY29uc3Qgand0ID0gdGhpcy50b2tlblNlcnZpY2UuZGVjb2RlKCk7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDA7XG5cbiAgICBpZiAoXG4gICAgICAhdGhpcy5yZWZyZXNoSW5Qcm9ncmVzcyAmJlxuICAgICAgand0ICYmXG4gICAgICBjdXJyZW50VGltZSA8IGp3dC5leHAgJiZcbiAgICAgIGN1cnJlbnRUaW1lID4gand0LmV4cCAtIDE4MDBcbiAgICApIHtcbiAgICAgIHRoaXMucmVmcmVzaEluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2F1dGgudXJsJyk7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dXJsfS9yZWZyZXNoYCwge30pLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNldChkYXRhLnRva2VuKTtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgZXJyLmVycm9yLmNhdWdodCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==