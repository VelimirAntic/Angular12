import { ElementRef, EventEmitter, ViewContainerRef } from '@angular/core';
import type { TemplateRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare class ContextMenuDirective {
    overlay: Overlay;
    viewContainerRef: ViewContainerRef;
    private elementRef;
    private overlayRef;
    private sub;
    menuContext: TemplateRef<any>;
    menuPosition: EventEmitter<{
        x: number;
        y: number;
    }>;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef, elementRef: ElementRef);
    onContextMenu(e: MouseEvent): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ContextMenuDirective, "[igoContextMenu]", never, { "menuContext": "igoContextMenu"; }, { "menuPosition": "menuPosition"; }, never>;
}
