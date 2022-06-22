import { EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { LanguageService } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class AuthInternComponent {
    auth: AuthService;
    private languageService;
    get allowAnonymous(): boolean;
    set allowAnonymous(value: boolean);
    private _allowAnonymous;
    error: string;
    form: FormGroup;
    loading: boolean;
    login: EventEmitter<boolean>;
    constructor(auth: AuthService, languageService: LanguageService, fb: FormBuilder);
    loginUser(values: any): boolean;
    loginAnonymous(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthInternComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuthInternComponent, "igo-auth-intern", never, { "allowAnonymous": "allowAnonymous"; }, { "login": "login"; }, never, never>;
}
