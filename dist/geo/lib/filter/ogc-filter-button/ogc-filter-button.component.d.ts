import { OnInit } from '@angular/core';
import { Layer } from '../../layer/shared/layers/layer';
import { IgoMap } from '../../map';
import { OgcFilterableDataSourceOptions } from '../shared/ogc-filter.interface';
import * as i0 from "@angular/core";
export declare class OgcFilterButtonComponent implements OnInit {
    options: OgcFilterableDataSourceOptions;
    get badge(): any;
    get layer(): Layer;
    set layer(value: Layer);
    private _layer;
    map: IgoMap;
    color: string;
    header: boolean;
    ogcFilterCollapse: boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OgcFilterButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OgcFilterButtonComponent, "igo-ogc-filter-button", never, { "layer": "layer"; "map": "map"; "color": "color"; "header": "header"; }, {}, never, never>;
}
