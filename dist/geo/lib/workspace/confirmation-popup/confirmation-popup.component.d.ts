import { LanguageService } from '@igo2/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface DialogData {
    type: string;
    cancel: boolean;
}
export declare class ConfirmationPopupComponent {
    dialogRef: MatDialogRef<ConfirmationPopupComponent>;
    languageService: LanguageService;
    data: {
        type: string;
        cancel: boolean;
    };
    constructor(dialogRef: MatDialogRef<ConfirmationPopupComponent>, languageService: LanguageService, data: {
        type: string;
        cancel: boolean;
    });
    cancelAction(): void;
    confirmedAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmationPopupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmationPopupComponent, "igo-confirmation-popup-component", never, {}, {}, never, never>;
}
