import { EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CollapseDirective {
    private renderer;
    private el;
    get target(): Element;
    set target(value: Element);
    private _target;
    get collapsed(): boolean;
    set collapsed(collapsed: boolean);
    private _collapsed;
    toggle: EventEmitter<boolean>;
    click(): void;
    constructor(renderer: Renderer2, el: ElementRef);
    private collapseTarget;
    private expandTarget;
    static ɵfac: i0.ɵɵFactoryDeclaration<CollapseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CollapseDirective, "[igoCollapse]", never, { "target": "target"; "collapsed": "collapsed"; }, { "toggle": "toggle"; }, never>;
}
