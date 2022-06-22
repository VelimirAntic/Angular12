import { OnInit } from '@angular/core';
import { Layer } from '../../layer/shared/layers/layer';
import { IgoMap } from '../../map';
import { TimeFilterableDataSourceOptions } from '../shared/time-filter.interface';
import * as i0 from "@angular/core";
export declare class TimeFilterButtonComponent implements OnInit {
    options: TimeFilterableDataSourceOptions;
    get badge(): number;
    get layer(): Layer;
    set layer(value: Layer);
    private _layer;
    map: IgoMap;
    color: string;
    header: boolean;
    timeFilterCollapse: boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeFilterButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeFilterButtonComponent, "igo-time-filter-button", never, { "layer": "layer"; "map": "map"; "color": "color"; "header": "header"; }, {}, never, never>;
}
