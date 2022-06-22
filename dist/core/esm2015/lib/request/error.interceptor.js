import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LanguageService } from '../language/shared/language.service';
import * as i0 from "@angular/core";
import * as i1 from "../message/shared/message.service";
export class ErrorInterceptor {
    constructor(messageService, injector) {
        this.messageService = messageService;
        this.injector = injector;
    }
    intercept(req, next) {
        const errorContainer = { httpError: undefined };
        return next.handle(req).pipe(catchError(error => this.handleError(error, errorContainer)), finalize(() => {
            this.handleCaughtError(errorContainer);
            this.handleUncaughtError(errorContainer);
        }));
    }
    handleError(httpError, errorContainer) {
        if (httpError instanceof HttpErrorResponse) {
            const errorObj = httpError.error === 'object' ? httpError.error : {};
            errorObj.message = httpError.error.message || httpError.statusText;
            errorObj.caught = false;
            httpError = new HttpErrorResponse({
                error: errorObj,
                headers: httpError.headers,
                status: httpError.status,
                statusText: httpError.statusText,
                url: httpError.url
            });
        }
        errorContainer.httpError = httpError;
        return throwError(httpError);
    }
    handleCaughtError(errorContainer) {
        const httpError = errorContainer.httpError;
        if (httpError && httpError.error.toDisplay) {
            httpError.error.caught = true;
            this.messageService.error(httpError.error.message, httpError.error.title);
        }
    }
    handleUncaughtError(errorContainer) {
        const httpError = errorContainer.httpError;
        if (httpError && !httpError.error.caught) {
            const translate = this.injector.get(LanguageService).translate;
            const message = translate.instant('igo.core.errors.uncaught.message');
            const title = translate.instant('igo.core.errors.uncaught.title');
            httpError.error.caught = true;
            this.messageService.error(message, title);
        }
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i0.Injector)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorInterceptor, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvcmVxdWVzdC9lcnJvci5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFLTCxpQkFBaUIsRUFDbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7QUFLdEUsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUNVLGNBQThCLEVBQzlCLFFBQWtCO1FBRGxCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7SUFFSixTQUFTLENBQ1AsR0FBcUIsRUFDckIsSUFBaUI7UUFFakIsTUFBTSxjQUFjLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDMUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFDNUQsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxXQUFXLENBQ2pCLFNBQTRCLEVBQzVCLGNBQWdEO1FBRWhELElBQUksU0FBUyxZQUFZLGlCQUFpQixFQUFFO1lBQzFDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckUsUUFBUSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQ25FLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXhCLFNBQVMsR0FBRyxJQUFJLGlCQUFpQixDQUFDO2dCQUNoQyxLQUFLLEVBQUUsUUFBUTtnQkFDZixPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU87Z0JBQzFCLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtnQkFDeEIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVO2dCQUNoQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7YUFDbkIsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxjQUFjLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNyQyxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8saUJBQWlCLENBQUMsY0FBZ0Q7UUFDeEUsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUMxQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxjQUUzQjtRQUNDLE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN4QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0QsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUNsRSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7Z0ZBN0RVLGdCQUFnQjtzRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGZixNQUFNO3VGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEVycm9yUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9tZXNzYWdlL3NoYXJlZC9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vbGFuZ3VhZ2Uvc2hhcmVkL2xhbmd1YWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IGVycm9yQ29udGFpbmVyID0geyBodHRwRXJyb3I6IHVuZGVmaW5lZCB9O1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIGVycm9yQ29udGFpbmVyKSksXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2F1Z2h0RXJyb3IoZXJyb3JDb250YWluZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZVVuY2F1Z2h0RXJyb3IoZXJyb3JDb250YWluZXIpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihcbiAgICBodHRwRXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlLFxuICAgIGVycm9yQ29udGFpbmVyOiB7IGh0dHBFcnJvcjogSHR0cEVycm9yUmVzcG9uc2UgfVxuICApIHtcbiAgICBpZiAoaHR0cEVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGVycm9yT2JqID0gaHR0cEVycm9yLmVycm9yID09PSAnb2JqZWN0JyA/IGh0dHBFcnJvci5lcnJvciA6IHt9O1xuICAgICAgZXJyb3JPYmoubWVzc2FnZSA9IGh0dHBFcnJvci5lcnJvci5tZXNzYWdlIHx8IGh0dHBFcnJvci5zdGF0dXNUZXh0O1xuICAgICAgZXJyb3JPYmouY2F1Z2h0ID0gZmFsc2U7XG5cbiAgICAgIGh0dHBFcnJvciA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgIGVycm9yOiBlcnJvck9iaixcbiAgICAgICAgaGVhZGVyczogaHR0cEVycm9yLmhlYWRlcnMsXG4gICAgICAgIHN0YXR1czogaHR0cEVycm9yLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogaHR0cEVycm9yLnN0YXR1c1RleHQsXG4gICAgICAgIHVybDogaHR0cEVycm9yLnVybFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXJyb3JDb250YWluZXIuaHR0cEVycm9yID0gaHR0cEVycm9yO1xuICAgIHJldHVybiB0aHJvd0Vycm9yKGh0dHBFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNhdWdodEVycm9yKGVycm9yQ29udGFpbmVyOiB7IGh0dHBFcnJvcjogSHR0cEVycm9yUmVzcG9uc2UgfSkge1xuICAgIGNvbnN0IGh0dHBFcnJvciA9IGVycm9yQ29udGFpbmVyLmh0dHBFcnJvcjtcbiAgICBpZiAoaHR0cEVycm9yICYmIGh0dHBFcnJvci5lcnJvci50b0Rpc3BsYXkpIHtcbiAgICAgIGh0dHBFcnJvci5lcnJvci5jYXVnaHQgPSB0cnVlO1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5lcnJvcihodHRwRXJyb3IuZXJyb3IubWVzc2FnZSwgaHR0cEVycm9yLmVycm9yLnRpdGxlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVVuY2F1Z2h0RXJyb3IoZXJyb3JDb250YWluZXI6IHtcbiAgICBodHRwRXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlO1xuICB9KSB7XG4gICAgY29uc3QgaHR0cEVycm9yID0gZXJyb3JDb250YWluZXIuaHR0cEVycm9yO1xuICAgIGlmIChodHRwRXJyb3IgJiYgIWh0dHBFcnJvci5lcnJvci5jYXVnaHQpIHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KExhbmd1YWdlU2VydmljZSkudHJhbnNsYXRlO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uY29yZS5lcnJvcnMudW5jYXVnaHQubWVzc2FnZScpO1xuICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmNvcmUuZXJyb3JzLnVuY2F1Z2h0LnRpdGxlJyk7XG4gICAgICBodHRwRXJyb3IuZXJyb3IuY2F1Z2h0ID0gdHJ1ZTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IobWVzc2FnZSwgdGl0bGUpO1xuICAgIH1cbiAgfVxufVxuIl19