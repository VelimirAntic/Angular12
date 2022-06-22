import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService, LanguageService } from '@igo2/core';
import { AuthService } from '@igo2/auth';
import type { IgoMap } from '@igo2/geo';
import { ShareMapService } from '../shared/share-map.service';
import * as i0 from "@angular/core";
export declare class ShareMapApiComponent implements OnInit {
    private languageService;
    private messageService;
    private auth;
    private shareMapService;
    private formBuilder;
    form: FormGroup;
    map: IgoMap;
    url: string;
    userId: string;
    idContextShared: string;
    constructor(languageService: LanguageService, messageService: MessageService, auth: AuthService, shareMapService: ShareMapService, formBuilder: FormBuilder);
    ngOnInit(): void;
    createUrl(values?: any): void;
    updateContextShared(values?: any): void;
    copyTextToClipboard(textArea: any): void;
    buildForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShareMapApiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShareMapApiComponent, "igo-share-map-api", never, { "map": "map"; }, {}, never, never>;
}
