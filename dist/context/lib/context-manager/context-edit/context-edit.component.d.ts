import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Context } from '../shared/context.interface';
import * as i0 from "@angular/core";
export declare class ContextEditComponent {
    private cd;
    get context(): Context;
    set context(value: Context);
    private _context;
    submitForm: EventEmitter<Context>;
    constructor(cd: ChangeDetectorRef);
    refresh(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextEditComponent, "igo-context-edit", never, { "context": "context"; }, { "submitForm": "submitForm"; }, never, never>;
}
