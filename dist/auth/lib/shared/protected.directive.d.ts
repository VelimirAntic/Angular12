import { ElementRef } from '@angular/core';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class ProtectedDirective {
    constructor(authentication: AuthService, el: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProtectedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ProtectedDirective, "[igoProtected]", never, {}, {}, never>;
}
