import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface DialogData {
    label: string;
}
export declare class DrawPopupComponent {
    dialogRef: MatDialogRef<DrawPopupComponent>;
    data: {
        currentLabel: string;
    };
    constructor(dialogRef: MatDialogRef<DrawPopupComponent>, data: {
        currentLabel: string;
    });
    noLabel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawPopupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrawPopupComponent, "igo-draw-popup-component", never, {}, {}, never, never>;
}
