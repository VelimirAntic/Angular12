import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class JsonDialogService {
    private dialog;
    constructor(dialog: MatDialog);
    open(title: any, data: any, ignoreKeys?: string[]): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JsonDialogService>;
}
