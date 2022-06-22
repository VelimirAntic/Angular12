import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CollapsibleComponent {
    get title(): string;
    set title(value: string);
    private _title;
    get collapsed(): boolean;
    set collapsed(value: boolean);
    private _collapsed;
    toggle: EventEmitter<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CollapsibleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CollapsibleComponent, "igo-collapsible", never, { "title": "title"; "collapsed": "collapsed"; }, { "toggle": "toggle"; }, never, ["*"]>;
}
