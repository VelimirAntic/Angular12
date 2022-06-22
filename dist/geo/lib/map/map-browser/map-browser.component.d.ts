import { OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivityService } from '@igo2/core';
import { IgoMap } from '../shared/map';
import { MapControlsOptions, MapViewOptions } from '../shared/map.interface';
import * as i0 from "@angular/core";
export declare class MapBrowserComponent implements OnInit, AfterViewInit, OnDestroy {
    private activityService;
    private activityId;
    private status$$;
    map: IgoMap;
    get view(): MapViewOptions;
    set view(value: MapViewOptions);
    private _view;
    get controls(): MapControlsOptions;
    set controls(value: MapControlsOptions);
    private _controls;
    id: string;
    constructor(activityService: ActivityService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private handleStatusChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapBrowserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapBrowserComponent, "igo-map-browser", never, { "map": "map"; "view": "view"; }, {}, never, ["*"]>;
}
