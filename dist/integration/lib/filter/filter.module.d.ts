import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ogc-filter-tool/ogc-filter-tool.component";
import * as i2 from "./active-ogc-filter-tool/active-ogc-filter-tool.component";
import * as i3 from "./time-filter-tool/time-filter-tool.component";
import * as i4 from "./active-time-filter-tool/active-time-filter-tool.component";
import * as i5 from "./spatial-filter-tool/spatial-filter-tool.component";
import * as i6 from "@igo2/geo";
import * as i7 from "@angular/common";
export declare class IgoAppFilterModule {
    static forRoot(): ModuleWithProviders<IgoAppFilterModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IgoAppFilterModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IgoAppFilterModule, [typeof i1.OgcFilterToolComponent, typeof i2.ActiveOgcFilterToolComponent, typeof i3.TimeFilterToolComponent, typeof i4.ActiveTimeFilterToolComponent, typeof i5.SpatialFilterToolComponent], [typeof i6.IgoFilterModule, typeof i6.IgoQueryModule, typeof i7.CommonModule], [typeof i1.OgcFilterToolComponent, typeof i2.ActiveOgcFilterToolComponent, typeof i3.TimeFilterToolComponent, typeof i4.ActiveTimeFilterToolComponent, typeof i5.SpatialFilterToolComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IgoAppFilterModule>;
}
