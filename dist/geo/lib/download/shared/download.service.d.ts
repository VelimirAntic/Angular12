import { MessageService, LanguageService } from '@igo2/core';
import { Layer } from '../../layer/shared';
import * as i0 from "@angular/core";
export declare class DownloadService {
    private messageService;
    private languageService;
    constructor(messageService: MessageService, languageService: LanguageService);
    open(layer: Layer): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DownloadService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DownloadService>;
}
