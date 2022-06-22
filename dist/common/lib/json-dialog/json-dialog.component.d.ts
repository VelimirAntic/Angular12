import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class JsonDialogComponent {
    dialogRef: MatDialogRef<JsonDialogComponent>;
    title: string;
    data: any;
    ignoreKeys: string[];
    constructor(dialogRef: MatDialogRef<JsonDialogComponent>);
    isObject(val: any): boolean;
    getKey(baseKey: any, key: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonDialogComponent, "igo-json-dialog", never, {}, {}, never, never>;
}
