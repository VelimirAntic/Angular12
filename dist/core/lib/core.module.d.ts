import { ModuleWithProviders } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/common/http";
import * as i3 from "./activity/activity.module";
import * as i4 from "./config/config.module";
import * as i5 from "./request/error.module";
import * as i6 from "./language/language.module";
import * as i7 from "./message/message.module";
export declare class IgoCoreModule {
    static forRoot(): ModuleWithProviders<IgoCoreModule>;
    constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer);
    static ɵfac: i0.ɵɵFactoryDeclaration<IgoCoreModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IgoCoreModule, never, [typeof i1.CommonModule, typeof i2.HttpClientModule, typeof i3.IgoActivityModule, typeof i4.IgoConfigModule, typeof i5.IgoErrorModule, typeof i6.IgoLanguageModule, typeof i7.IgoMessageModule], [typeof i3.IgoActivityModule, typeof i4.IgoConfigModule, typeof i5.IgoErrorModule, typeof i6.IgoLanguageModule, typeof i7.IgoMessageModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IgoCoreModule>;
}
