import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DragAndDropDirective {
    allowedExtensions: Array<string>;
    protected filesDropped: EventEmitter<File[]>;
    protected filesInvalid: EventEmitter<File[]>;
    private background;
    onDragOver(evt: any): void;
    onDragLeave(evt: any): void;
    onDrop(evt: any): void;
    private validExtensions;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragAndDropDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DragAndDropDirective, "[igoDragAndDrop]", never, { "allowedExtensions": "allowedExtensions"; }, { "filesDropped": "filesDropped"; "filesInvalid": "filesInvalid"; }, never>;
}
