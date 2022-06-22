import { MatDialogRef } from '@angular/material/dialog';
import { StorageService } from '@igo2/core';
import { AuthService } from '@igo2/auth';
import * as i0 from "@angular/core";
export declare class UserDialogComponent {
    dialogRef: MatDialogRef<UserDialogComponent>;
    private auth;
    private storageService;
    user: any;
    exp: any;
    constructor(dialogRef: MatDialogRef<UserDialogComponent>, auth: AuthService, storageService: StorageService);
    clearPreferences(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserDialogComponent, "igo-user-dialog", never, {}, {}, never, never>;
}
