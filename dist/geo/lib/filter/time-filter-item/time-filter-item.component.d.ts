import { OnDestroy, OnInit } from '@angular/core';
import { Layer } from '../../layer/shared/layers/layer';
import { TimeFilterableDataSource } from '../shared/time-filter.interface';
import { TimeFilterService } from '../shared/time-filter.service';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TimeFilterItemComponent implements OnInit, OnDestroy {
    private timeFilterService;
    color: string;
    showLegend$: BehaviorSubject<boolean>;
    inResolutionRange$: BehaviorSubject<boolean>;
    private resolution$$;
    filtersCollapsed: boolean;
    header: boolean;
    layer: Layer;
    get datasource(): TimeFilterableDataSource;
    constructor(timeFilterService: TimeFilterService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    handleYearChange(year: string | [string, string]): void;
    handleDateChange(date: Date | [Date, Date]): void;
    private toggleLegend;
    toggleLegendOnClick(): void;
    setVisible(): void;
    toggleFiltersCollapsed(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeFilterItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeFilterItemComponent, "igo-time-filter-item", never, { "header": "header"; "layer": "layer"; }, {}, never, never>;
}
