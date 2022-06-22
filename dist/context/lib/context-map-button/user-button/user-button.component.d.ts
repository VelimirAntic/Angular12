import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from '@igo2/core';
import { AuthService } from '@igo2/auth';
import type { IgoMap } from '@igo2/geo';
import * as i0 from "@angular/core";
export declare class UserButtonComponent {
    private dialog;
    private config;
    auth: AuthService;
    get map(): IgoMap;
    set map(value: IgoMap);
    private _map;
    get color(): string;
    set color(value: string);
    private _color;
    expand: boolean;
    visible: boolean;
    hasApi: boolean;
    constructor(dialog: MatDialog, config: ConfigService, auth: AuthService);
    accountClick(): void;
    logout(): void;
    infoUser(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserButtonComponent, "igo-user-button", never, { "map": "map"; "color": "color"; }, {}, never, never>;
}
