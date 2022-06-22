import { Renderer2 } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
/**
 * <igoSidenavShim> directive.
 *
 * This directive prevents a material sidenav with mode="side"
 * from focusing an element after it's closed
 */
export declare class SidenavShimDirective {
    private renderer;
    private focusedElement;
    private blurElement;
    onOpen(): void;
    onCloseStart(): void;
    onClose(): void;
    constructor(component: MatSidenav, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavShimDirective, [{ self: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SidenavShimDirective, "[igoSidenavShim]", never, {}, {}, never>;
}
