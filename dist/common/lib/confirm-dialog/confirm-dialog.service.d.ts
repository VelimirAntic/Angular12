import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ConfirmDialogService {
    private dialog;
    constructor(dialog: MatDialog);
    open(message: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfirmDialogService>;
}
