import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./shared/search-pointer-summary.directive";
import * as i2 from "@angular/common";
import * as i3 from "./search-bar/search-bar.module";
import * as i4 from "./search-selector/search-selector.module";
import * as i5 from "./search-results/search-results.module";
import * as i6 from "./search-settings/search-settings.module";
export declare class IgoSearchModule {
    static forRoot(): ModuleWithProviders<IgoSearchModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IgoSearchModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IgoSearchModule, [typeof i1.SearchPointerSummaryDirective], [typeof i2.CommonModule, typeof i3.IgoSearchBarModule, typeof i4.IgoSearchSelectorModule, typeof i5.IgoSearchResultsModule, typeof i6.IgoSearchSettingsModule], [typeof i3.IgoSearchBarModule, typeof i4.IgoSearchSelectorModule, typeof i5.IgoSearchResultsModule, typeof i6.IgoSearchSettingsModule, typeof i1.SearchPointerSummaryDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IgoSearchModule>;
}
