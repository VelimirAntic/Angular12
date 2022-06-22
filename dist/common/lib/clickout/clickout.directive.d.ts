import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ClickoutDirective {
    private el;
    clickout: EventEmitter<MouseEvent>;
    handleMouseClick(event: MouseEvent, target: HTMLElement): void;
    constructor(el: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ClickoutDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ClickoutDirective, "[igoClickout]", never, {}, { "clickout": "clickout"; }, never>;
}
