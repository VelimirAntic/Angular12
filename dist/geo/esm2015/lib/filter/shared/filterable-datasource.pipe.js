import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class FilterableDataSourcePipe {
    transform(value, arg) {
        let layers;
        if (arg === 'time') {
            layers = value.filter((layer) => {
                const datasource = layer.dataSource;
                return (this.isTimeFilterable(datasource) &&
                    datasource.options.timeFilter !== undefined &&
                    Object.keys(datasource.options.timeFilter).length);
            });
        }
        if (arg === 'ogc') {
            layers = value.filter((layer) => {
                const datasource = layer.dataSource;
                return this.isOgcFilterable(datasource);
            });
        }
        return layers;
    }
    isTimeFilterable(dataSource) {
        if (dataSource.options.type !== 'wms') {
            return false;
        }
        return dataSource.options.timeFilterable;
    }
    isOgcFilterable(dataSource) {
        let isOgcFilterable = false;
        if (dataSource.options.ogcFilters &&
            dataSource.options.ogcFilters.enabled &&
            dataSource.options.ogcFilters.editable) {
            isOgcFilterable = true;
        }
        if (dataSource.options.ogcFilters &&
            dataSource.options.ogcFilters.enabled &&
            (dataSource.options.ogcFilters.pushButtons ||
                dataSource.options.ogcFilters.checkboxes ||
                dataSource.options.ogcFilters.radioButtons ||
                dataSource.options.ogcFilters.select)) {
            isOgcFilterable = true;
        }
        return isOgcFilterable;
    }
}
FilterableDataSourcePipe.ɵfac = function FilterableDataSourcePipe_Factory(t) { return new (t || FilterableDataSourcePipe)(); };
FilterableDataSourcePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "filterableDataSource", type: FilterableDataSourcePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterableDataSourcePipe, [{
        type: Pipe,
        args: [{
                name: 'filterableDataSource'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyYWJsZS1kYXRhc291cmNlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9maWx0ZXIvc2hhcmVkL2ZpbHRlcmFibGUtZGF0YXNvdXJjZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQVVwRCxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFNBQVMsQ0FBQyxLQUFjLEVBQUUsR0FBVztRQUNuQyxJQUFJLE1BQU0sQ0FBQztRQUVYLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtZQUNsQixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO2dCQUNyQyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBc0MsQ0FBQztnQkFDaEUsT0FBTyxDQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7b0JBQ2pDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLFNBQVM7b0JBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQ2xELENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxHQUFHLEtBQUssS0FBSyxFQUFFO1lBQ2pCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7Z0JBQ3JDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFxQyxDQUFDO2dCQUMvRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxVQUFvQztRQUMzRCxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sZUFBZSxDQUFDLFVBQW1DO1FBQ3pELElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUNFLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUM3QixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1lBQ3JDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFDdEM7WUFDQSxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsSUFDRSxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDN0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxDQUNFLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVc7Z0JBQ3pDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVU7Z0JBQ3hDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVk7Z0JBQzFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDMUI7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDOztnR0FsRFUsd0JBQXdCO3FHQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUhwQyxJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLHNCQUFzQjthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi8uLi9sYXllci9zaGFyZWQvbGF5ZXJzL2xheWVyJztcblxuaW1wb3J0IHsgT2djRmlsdGVyYWJsZURhdGFTb3VyY2UgfSBmcm9tICcuL29nYy1maWx0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRpbWVGaWx0ZXJhYmxlRGF0YVNvdXJjZSB9IGZyb20gJy4vdGltZS1maWx0ZXIuaW50ZXJmYWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmlsdGVyYWJsZURhdGFTb3VyY2UnXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlcmFibGVEYXRhU291cmNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IExheWVyW10sIGFyZzogc3RyaW5nKTogTGF5ZXJbXSB7XG4gICAgbGV0IGxheWVycztcblxuICAgIGlmIChhcmcgPT09ICd0aW1lJykge1xuICAgICAgbGF5ZXJzID0gdmFsdWUuZmlsdGVyKChsYXllcjogTGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YXNvdXJjZSA9IGxheWVyLmRhdGFTb3VyY2UgYXMgVGltZUZpbHRlcmFibGVEYXRhU291cmNlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMuaXNUaW1lRmlsdGVyYWJsZShkYXRhc291cmNlKSAmJlxuICAgICAgICAgIGRhdGFzb3VyY2Uub3B0aW9ucy50aW1lRmlsdGVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhc291cmNlLm9wdGlvbnMudGltZUZpbHRlcikubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFyZyA9PT0gJ29nYycpIHtcbiAgICAgIGxheWVycyA9IHZhbHVlLmZpbHRlcigobGF5ZXI6IExheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFzb3VyY2UgPSBsYXllci5kYXRhU291cmNlIGFzIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlO1xuICAgICAgICByZXR1cm4gdGhpcy5pc09nY0ZpbHRlcmFibGUoZGF0YXNvdXJjZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVycztcbiAgfVxuXG4gIHByaXZhdGUgaXNUaW1lRmlsdGVyYWJsZShkYXRhU291cmNlOiBUaW1lRmlsdGVyYWJsZURhdGFTb3VyY2UpIHtcbiAgICBpZiAoZGF0YVNvdXJjZS5vcHRpb25zLnR5cGUgIT09ICd3bXMnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBkYXRhU291cmNlLm9wdGlvbnMudGltZUZpbHRlcmFibGU7XG4gIH1cblxuICBwcml2YXRlIGlzT2djRmlsdGVyYWJsZShkYXRhU291cmNlOiBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZSk6IGJvb2xlYW4ge1xuICAgIGxldCBpc09nY0ZpbHRlcmFibGUgPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICBkYXRhU291cmNlLm9wdGlvbnMub2djRmlsdGVycyAmJlxuICAgICAgZGF0YVNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMuZW5hYmxlZCAmJlxuICAgICAgZGF0YVNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMuZWRpdGFibGVcbiAgICApIHtcbiAgICAgIGlzT2djRmlsdGVyYWJsZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGRhdGFTb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzICYmXG4gICAgICBkYXRhU291cmNlLm9wdGlvbnMub2djRmlsdGVycy5lbmFibGVkICYmXG4gICAgICAoXG4gICAgICAgIGRhdGFTb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLnB1c2hCdXR0b25zIHx8XG4gICAgICAgIGRhdGFTb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLmNoZWNrYm94ZXMgfHxcbiAgICAgICAgZGF0YVNvdXJjZS5vcHRpb25zLm9nY0ZpbHRlcnMucmFkaW9CdXR0b25zIHx8XG4gICAgICAgIGRhdGFTb3VyY2Uub3B0aW9ucy5vZ2NGaWx0ZXJzLnNlbGVjdCkpIHtcbiAgICAgICAgaXNPZ2NGaWx0ZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzT2djRmlsdGVyYWJsZTtcbiAgfVxufVxuIl19