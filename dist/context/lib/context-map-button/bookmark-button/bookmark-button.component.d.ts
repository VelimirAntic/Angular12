import { MatDialog } from '@angular/material/dialog';
import { MessageService, LanguageService } from '@igo2/core';
import type { IgoMap } from '@igo2/geo';
import { ContextService } from '../../context-manager/shared/context.service';
import * as i0 from "@angular/core";
export declare class BookmarkButtonComponent {
    private dialog;
    private contextService;
    private languageService;
    private messageService;
    get map(): IgoMap;
    set map(value: IgoMap);
    private _map;
    get color(): string;
    set color(value: string);
    private _color;
    constructor(dialog: MatDialog, contextService: ContextService, languageService: LanguageService, messageService: MessageService);
    createContext(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BookmarkButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BookmarkButtonComponent, "igo-bookmark-button", never, { "map": "map"; "color": "color"; }, {}, never, never>;
}
