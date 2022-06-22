import { OnInit, ChangeDetectorRef } from '@angular/core';
import { RouteService } from '@igo2/core';
import { SearchBarComponent } from './search-bar.component';
import * as i0 from "@angular/core";
export declare class SearchUrlParamDirective implements OnInit {
    private component;
    private ref;
    private route;
    constructor(component: SearchBarComponent, ref: ChangeDetectorRef, route: RouteService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchUrlParamDirective, [{ self: true; }, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SearchUrlParamDirective, "[igoSearchUrlParam]", never, {}, {}, never>;
}
