import { Injector } from '@angular/core';
import { StyleListOptions } from './style-list.interface';
import * as i0 from "@angular/core";
export declare class StyleListService {
    private injector;
    private styleList;
    constructor(injector: Injector);
    /**
     * Use to get the data found in styleList file
     */
    getStyleList(key: string): any;
    /**
     * This method loads "[path]" to get all styleList's variables
     */
    load(options: StyleListOptions): true | Promise<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StyleListService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StyleListService>;
}
