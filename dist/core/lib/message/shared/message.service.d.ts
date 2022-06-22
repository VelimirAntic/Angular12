import { Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from '../../config/config.service';
import { Message } from './message.interface';
import { ActiveToast, IndividualConfig } from 'ngx-toastr';
import { LanguageService } from '../../language/shared/language.service';
import * as i0 from "@angular/core";
export declare class MessageService {
    private injector;
    private configService;
    private languageService;
    messages$: BehaviorSubject<Message[]>;
    private options;
    constructor(injector: Injector, configService: ConfigService, languageService: LanguageService);
    private get toastr();
    showError(httpError: HttpErrorResponse): ActiveToast<any>;
    message(message: Message): void;
    success(text: string, title?: string, options?: Partial<IndividualConfig>): ActiveToast<any>;
    error(text: string, title?: string, options?: Partial<IndividualConfig>): ActiveToast<any>;
    info(text: string, title?: string, options?: Partial<IndividualConfig>): ActiveToast<any>;
    alert(text: string, title?: string, options?: Partial<IndividualConfig>): ActiveToast<any>;
    remove(id?: number): void;
    removeAllAreNotError(): void;
    private handleTemplate;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessageService>;
}
