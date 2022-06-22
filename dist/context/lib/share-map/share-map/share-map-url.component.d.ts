import { AfterViewInit, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MessageService, LanguageService } from '@igo2/core';
import type { IgoMap } from '@igo2/geo';
import { ShareMapService } from '../shared/share-map.service';
import * as i0 from "@angular/core";
export declare class ShareMapUrlComponent implements AfterViewInit, OnInit, OnDestroy {
    private languageService;
    private messageService;
    private shareMapService;
    private cdRef;
    private mapState$$;
    map: IgoMap;
    url: string;
    publicShareOption: {
        layerlistControls: {
            querystring: string;
        };
    };
    constructor(languageService: LanguageService, messageService: MessageService, shareMapService: ShareMapService, cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    resetUrl(values?: any): void;
    copyTextToClipboard(textArea: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShareMapUrlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShareMapUrlComponent, "igo-share-map-url", never, { "map": "map"; }, {}, never, never>;
}
