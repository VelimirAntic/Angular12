import { Layer } from '../../layer/shared/layers/layer';
import { DataSourceOptions } from '../../datasource';
import * as i0 from "@angular/core";
export declare class ExportButtonComponent {
    get layer(): Layer;
    set layer(value: Layer);
    private _layer;
    get color(): string;
    set color(value: string);
    private _color;
    constructor();
    get options(): DataSourceOptions;
    layerIsExportable(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExportButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExportButtonComponent, "igo-export-button", never, { "layer": "layer"; "color": "color"; }, {}, never, never>;
}
