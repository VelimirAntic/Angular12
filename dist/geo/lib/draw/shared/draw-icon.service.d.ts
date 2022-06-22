import { ConfigService } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class DrawIconService {
    protected config: ConfigService;
    protected icons: Array<string>;
    constructor(config: ConfigService);
    getIcons(): string[];
    getPath(): any;
    getIconsList(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawIconService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DrawIconService>;
}
