import { EventEmitter } from '@angular/core';
import { ConfigService } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class MenuButtonComponent {
    configService: ConfigService;
    get sidenavOpened(): boolean;
    set sidenavOpened(value: boolean);
    private _sidenavOpenend;
    openSidenav: EventEmitter<any>;
    menuButtonReverseColor: boolean;
    menuButtonClass: any;
    constructor(configService: ConfigService);
    getClassMenuButton(): void;
    onToggleSidenavClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuButtonComponent, "igo-menu-button", never, { "sidenavOpened": "sidenavOpened"; }, { "openSidenav": "openSidenav"; }, never, never>;
}
