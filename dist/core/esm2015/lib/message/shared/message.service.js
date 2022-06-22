import { Injectable, Inject, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from './message.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.service";
import * as i2 from "../../language/shared/language.service";
export class MessageService {
    constructor(injector, configService, languageService) {
        this.injector = injector;
        this.configService = configService;
        this.languageService = languageService;
        this.messages$ = new BehaviorSubject([]);
        this.options = this.configService.getConfig('message') || {};
    }
    get toastr() {
        return this.injector.get(ToastrService);
    }
    showError(httpError) {
        httpError.error.caught = true;
        return this.error(httpError.error.message, httpError.error.title);
    }
    message(message) {
        this.messages$.next(this.messages$.value.concat([message]));
        message.options = message.options || {};
        const currentDate = new Date();
        message.options.from = message.options.from ? message.options.from : new Date('1 jan 1900');
        message.options.to = message.options.to ? message.options.to : new Date('1 jan 3000');
        if (typeof message.options.from === 'string') {
            message.options.from = new Date(Date.parse(message.options.from.replace(/-/g, ' ')));
        }
        if (typeof message.options.to === 'string') {
            message.options.to = new Date(Date.parse(message.options.to.replace(/-/g, ' ')));
        }
        if (currentDate > message.options.from && currentDate < message.options.to) {
            message = this.handleTemplate(message);
            if (message.text) {
                let messageShown;
                switch (message.type) {
                    case MessageType.SUCCESS:
                        messageShown = this.success(message.text, message.title, message.options);
                        break;
                    case MessageType.ERROR:
                        messageShown = this.error(message.text, message.title, message.options);
                        break;
                    case MessageType.INFO:
                        messageShown = this.info(message.text, message.title, message.options);
                        break;
                    case MessageType.ALERT:
                    case MessageType.WARNING:
                        messageShown = this.alert(message.text, message.title, message.options);
                        break;
                    default:
                        messageShown = this.info(message.text, message.title, message.options);
                        break;
                }
                message.options.id = messageShown.toastId;
            }
        }
    }
    success(text, title = 'igo.core.message.success', options = {}) {
        const message = this.languageService.translate.instant(text);
        const translatedTitle = this.languageService.translate.instant(title);
        return this.toastr.success(message, translatedTitle, options);
    }
    error(text, title = 'igo.core.message.error', options = {}) {
        const message = this.languageService.translate.instant(text);
        const translatedTitle = this.languageService.translate.instant(title);
        return this.toastr.error(message, translatedTitle, options);
    }
    info(text, title = 'igo.core.message.info', options = {}) {
        const message = this.languageService.translate.instant(text);
        const translatedTitle = this.languageService.translate.instant(title);
        return this.toastr.info(message, translatedTitle, options);
    }
    alert(text, title = 'igo.core.message.alert', options = {}) {
        const message = this.languageService.translate.instant(text);
        const translatedTitle = this.languageService.translate.instant(title);
        return this.toastr.warning(message, translatedTitle, options);
    }
    remove(id) {
        this.toastr.remove(id);
    }
    removeAllAreNotError() {
        for (const mess of this.messages$.value) {
            if (mess.type !== MessageType.ERROR) {
                this.remove(mess.options.id);
            }
        }
    }
    handleTemplate(message) {
        if (!this.options.template || message.html) {
            return message;
        }
        let html = this.options.template;
        html = html.replace('${text}', message.text);
        html = html.replace('${title}', message.title);
        message.html = undefined;
        message.text = html;
        message.title = undefined;
        return message;
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(i0.ɵɵinject(Injector), i0.ɵɵinject(i1.ConfigService), i0.ɵɵinject(i2.LanguageService)); };
MessageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector, decorators: [{
                type: Inject,
                args: [Injector]
            }] }, { type: i1.ConfigService }, { type: i2.LanguageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL21lc3NhZ2Uvc2hhcmVkL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUt2QyxPQUFPLEVBQWlDLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFPN0MsTUFBTSxPQUFPLGNBQWM7SUFJekIsWUFDNEIsUUFBa0IsRUFDcEMsYUFBNEIsRUFDNUIsZUFBZ0M7UUFGZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQU5uQyxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVksRUFBRSxDQUFDLENBQUM7UUFRcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQVksTUFBTTtRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxTQUFTLENBQUMsU0FBNEI7UUFDcEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZ0I7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVELE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFvQixDQUFDO1FBQzFELE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFL0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1RixPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RGLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RjtRQUNELElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDMUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcs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QUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQyxPQUFPLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN6QixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNwQixPQUFPLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUMxQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs0RUFsSFUsY0FBYyxjQUtmLFFBQVE7b0VBTFAsY0FBYyxXQUFkLGNBQWMsbUJBRmIsTUFBTTt1RkFFUCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBTUksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5cbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VPcHRpb25zIH0gZnJvbSAnLi9tZXNzYWdlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBY3RpdmVUb2FzdCwgSW5kaXZpZHVhbENvbmZpZywgVG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tICcuL21lc3NhZ2UuZW51bSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYW5ndWFnZS9zaGFyZWQvbGFuZ3VhZ2Uuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICBwdWJsaWMgbWVzc2FnZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZXNzYWdlW10+KFtdKTtcbiAgcHJpdmF0ZSBvcHRpb25zOiBNZXNzYWdlT3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEluamVjdG9yKSBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZVxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCdtZXNzYWdlJykgfHwge307XG4gIH1cblxuICBwcml2YXRlIGdldCB0b2FzdHIoKTogVG9hc3RyU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFRvYXN0clNlcnZpY2UpO1xuICB9XG5cbiAgc2hvd0Vycm9yKGh0dHBFcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBodHRwRXJyb3IuZXJyb3IuY2F1Z2h0ID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5lcnJvcihodHRwRXJyb3IuZXJyb3IubWVzc2FnZSwgaHR0cEVycm9yLmVycm9yLnRpdGxlKTtcbiAgfVxuXG4gIG1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZXMkLm5leHQodGhpcy5tZXNzYWdlcyQudmFsdWUuY29uY2F0KFttZXNzYWdlXSkpO1xuXG4gICAgbWVzc2FnZS5vcHRpb25zID0gbWVzc2FnZS5vcHRpb25zIHx8IHt9IGFzIE1lc3NhZ2VPcHRpb25zO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgIG1lc3NhZ2Uub3B0aW9ucy5mcm9tID0gbWVzc2FnZS5vcHRpb25zLmZyb20gPyBtZXNzYWdlLm9wdGlvbnMuZnJvbSA6IG5ldyBEYXRlKCcxIGphbiAxOTAwJyk7XG4gICAgbWVzc2FnZS5vcHRpb25zLnRvID0gbWVzc2FnZS5vcHRpb25zLnRvID8gbWVzc2FnZS5vcHRpb25zLnRvIDogbmV3IERhdGUoJzEgamFuIDMwMDAnKTtcbiAgICBpZiAodHlwZW9mIG1lc3NhZ2Uub3B0aW9ucy5mcm9tID09PSAnc3RyaW5nJykge1xuICAgICAgbWVzc2FnZS5vcHRpb25zLmZyb20gPSBuZXcgRGF0ZShEYXRlLnBhcnNlKG1lc3NhZ2Uub3B0aW9ucy5mcm9tLnJlcGxhY2UoLy0vZywgJyAnKSkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1lc3NhZ2Uub3B0aW9ucy50byA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1lc3NhZ2Uub3B0aW9ucy50byA9IG5ldyBEYXRlKERhdGUucGFyc2UobWVzc2FnZS5vcHRpb25zLnRvLnJlcGxhY2UoLy0vZywgJyAnKSkpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBjdXJyZW50RGF0ZSA+IG1lc3NhZ2Uub3B0aW9ucy5mcm9tICYmIGN1cnJlbnREYXRlIDwgbWVzc2FnZS5vcHRpb25zLnRvKSB7XG5cbiAgICAgIG1lc3NhZ2UgPSB0aGlzLmhhbmRsZVRlbXBsYXRlKG1lc3NhZ2UpO1xuXG4gICAgICBpZiAobWVzc2FnZS50ZXh0KSB7XG4gICAgICAgIGxldCBtZXNzYWdlU2hvd246IEFjdGl2ZVRvYXN0PGFueT47XG4gICAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5TVUNDRVNTOlxuICAgICAgICAgICAgbWVzc2FnZVNob3duID0gdGhpcy5zdWNjZXNzKG1lc3NhZ2UudGV4dCwgbWVzc2FnZS50aXRsZSwgbWVzc2FnZS5vcHRpb25zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRVJST1I6XG4gICAgICAgICAgICBtZXNzYWdlU2hvd24gPSB0aGlzLmVycm9yKG1lc3NhZ2UudGV4dCwgbWVzc2FnZS50aXRsZSwgbWVzc2FnZS5vcHRpb25zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSU5GTzpcbiAgICAgICAgICAgIG1lc3NhZ2VTaG93biA9IHRoaXMuaW5mbyhtZXNzYWdlLnRleHQsIG1lc3NhZ2UudGl0bGUsIG1lc3NhZ2Uub3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkFMRVJUOlxuICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuV0FSTklORzpcbiAgICAgICAgICAgIG1lc3NhZ2VTaG93biA9IHRoaXMuYWxlcnQobWVzc2FnZS50ZXh0LCBtZXNzYWdlLnRpdGxlLCBtZXNzYWdlLm9wdGlvbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1lc3NhZ2VTaG93biA9IHRoaXMuaW5mbyhtZXNzYWdlLnRleHQsIG1lc3NhZ2UudGl0bGUsIG1lc3NhZ2Uub3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlLm9wdGlvbnMuaWQgPSBtZXNzYWdlU2hvd24udG9hc3RJZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdWNjZXNzKHRleHQ6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9ICdpZ28uY29yZS5tZXNzYWdlLnN1Y2Nlc3MnLCBvcHRpb25zOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge30pOiBBY3RpdmVUb2FzdDxhbnk+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQodGV4dCk7XG4gICAgY29uc3QgdHJhbnNsYXRlZFRpdGxlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQodGl0bGUpO1xuICAgIHJldHVybiB0aGlzLnRvYXN0ci5zdWNjZXNzKG1lc3NhZ2UsIHRyYW5zbGF0ZWRUaXRsZSwgb3B0aW9ucyk7XG4gIH1cblxuICBlcnJvcih0ZXh0OiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgPSAnaWdvLmNvcmUubWVzc2FnZS5lcnJvcicsIG9wdGlvbnM6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fSk6IEFjdGl2ZVRvYXN0PGFueT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCh0ZXh0KTtcbiAgICBjb25zdCB0cmFuc2xhdGVkVGl0bGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCh0aXRsZSk7XG4gICAgcmV0dXJuIHRoaXMudG9hc3RyLmVycm9yKG1lc3NhZ2UsIHRyYW5zbGF0ZWRUaXRsZSwgb3B0aW9ucyk7XG4gIH1cblxuICBpbmZvKHRleHQ6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9ICdpZ28uY29yZS5tZXNzYWdlLmluZm8nLCBvcHRpb25zOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge30pOiBBY3RpdmVUb2FzdDxhbnk+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQodGV4dCk7XG4gICAgY29uc3QgdHJhbnNsYXRlZFRpdGxlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQodGl0bGUpO1xuICAgIHJldHVybiB0aGlzLnRvYXN0ci5pbmZvKG1lc3NhZ2UsIHRyYW5zbGF0ZWRUaXRsZSwgb3B0aW9ucyk7XG4gIH1cblxuICBhbGVydCh0ZXh0OiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgPSAnaWdvLmNvcmUubWVzc2FnZS5hbGVydCcsIG9wdGlvbnM6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fSk6IEFjdGl2ZVRvYXN0PGFueT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCh0ZXh0KTtcbiAgICBjb25zdCB0cmFuc2xhdGVkVGl0bGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudCh0aXRsZSk7XG4gICAgcmV0dXJuIHRoaXMudG9hc3RyLndhcm5pbmcobWVzc2FnZSwgdHJhbnNsYXRlZFRpdGxlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHJlbW92ZShpZD86IG51bWJlcikge1xuICAgIHRoaXMudG9hc3RyLnJlbW92ZShpZCk7XG4gIH1cblxuICByZW1vdmVBbGxBcmVOb3RFcnJvcigpIHtcbiAgICBmb3IgKGNvbnN0IG1lc3Mgb2YgdGhpcy5tZXNzYWdlcyQudmFsdWUpIHtcbiAgICAgIGlmIChtZXNzLnR5cGUgIT09IE1lc3NhZ2VUeXBlLkVSUk9SKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKG1lc3Mub3B0aW9ucy5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVUZW1wbGF0ZShtZXNzYWdlOiBNZXNzYWdlKTogTWVzc2FnZSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMudGVtcGxhdGUgfHwgbWVzc2FnZS5odG1sKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBsZXQgaHRtbCA9IHRoaXMub3B0aW9ucy50ZW1wbGF0ZTtcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKCcke3RleHR9JywgbWVzc2FnZS50ZXh0KTtcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKCcke3RpdGxlfScsIG1lc3NhZ2UudGl0bGUpO1xuXG4gICAgbWVzc2FnZS5odG1sID0gdW5kZWZpbmVkO1xuICAgIG1lc3NhZ2UudGV4dCA9IGh0bWw7XG4gICAgbWVzc2FnZS50aXRsZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxufVxuIl19