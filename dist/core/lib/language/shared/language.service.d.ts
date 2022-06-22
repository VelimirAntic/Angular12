import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class LanguageService {
    translate: TranslateService;
    private language;
    constructor(translate: TranslateService);
    getLanguage(): string;
    setLanguage(language: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LanguageService>;
}
