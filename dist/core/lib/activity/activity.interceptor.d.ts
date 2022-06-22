import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivityService } from './activity.service';
import * as i0 from "@angular/core";
export declare class ActivityInterceptor implements HttpInterceptor {
    private activityService;
    constructor(activityService: ActivityService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActivityInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActivityInterceptor>;
}
