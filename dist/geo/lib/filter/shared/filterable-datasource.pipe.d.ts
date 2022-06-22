import { PipeTransform } from '@angular/core';
import { Layer } from '../../layer/shared/layers/layer';
import * as i0 from "@angular/core";
export declare class FilterableDataSourcePipe implements PipeTransform {
    transform(value: Layer[], arg: string): Layer[];
    private isTimeFilterable;
    private isOgcFilterable;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterableDataSourcePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FilterableDataSourcePipe, "filterableDataSource">;
}
