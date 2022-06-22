import { ElementRef, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import * as i0 from "@angular/core";
/**
 * This directive allow to add an icon inside a matBadge.
 * A value must be set into the matBadge directive ex: matBadge="icon".
 * The badge content will be overrided by this current directive.
 */
export declare class IgoBadgeIconDirective implements OnInit {
    private el;
    private matIconRegistry;
    set igoMatBadgeIcon(value: string);
    private svg;
    set matBadgeHidden(value: boolean);
    private hidden;
    set matBadgeDisabled(value: boolean);
    private disabled;
    set igoMatBadgeInverseColor(value: boolean);
    private inverseColor;
    set igoMatBadgeInheritColor(value: boolean);
    private inheritColor;
    get badge(): any;
    private originalColor;
    constructor(el: ElementRef, matIconRegistry: MatIconRegistry);
    ngOnInit(): void;
    private updateSvg;
    private updateColor;
    private updateHidden;
    private updateDisabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<IgoBadgeIconDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IgoBadgeIconDirective, "[igoMatBadgeIcon]", never, { "igoMatBadgeIcon": "igoMatBadgeIcon"; "matBadgeHidden": "matBadgeHidden"; "matBadgeDisabled": "matBadgeDisabled"; "igoMatBadgeInverseColor": "igoMatBadgeInverseColor"; "igoMatBadgeInheritColor": "igoMatBadgeInheritColor"; }, {}, never>;
}
