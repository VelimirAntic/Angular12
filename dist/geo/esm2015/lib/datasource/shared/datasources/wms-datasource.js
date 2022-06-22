import olSourceImageWMS from 'ol/source/ImageWMS';
import { DataSource } from './datasource';
import { OgcFilterWriter } from '../../../filter/shared/ogc-filter';
import { QueryHtmlTarget } from '../../../query/shared/query.enums';
import { formatWFSQueryString, checkWfsParams, defaultFieldNameGeometry } from './wms-wfs.utils';
import { ObjectUtils } from '@igo2/utils';
import { BehaviorSubject } from 'rxjs';
export class WMSDataSource extends DataSource {
    constructor(options, wfsService) {
        super(options);
        this.options = options;
        this.wfsService = wfsService;
        this.ogcFilters$ = new BehaviorSubject(undefined);
        this.timeFilter$ = new BehaviorSubject(undefined);
        const sourceParams = options.params;
        const dpi = sourceParams.DPI || 96;
        sourceParams.DPI = dpi;
        sourceParams.MAP_RESOLUTION = dpi;
        sourceParams.FORMAT_OPTIONS = 'dpi:' + dpi;
        if (options.refreshIntervalSec && options.refreshIntervalSec > 0) {
            setInterval(() => {
                this.refresh();
            }, options.refreshIntervalSec * 1000); // Convert seconds to MS
        }
        let fieldNameGeometry = defaultFieldNameGeometry;
        // ####   START if paramsWFS
        if (options.paramsWFS) {
            const wfsCheckup = checkWfsParams(options, 'wms');
            ObjectUtils.mergeDeep(options.paramsWFS, wfsCheckup.paramsWFS);
            fieldNameGeometry =
                options.paramsWFS.fieldNameGeometry || fieldNameGeometry;
            options.download = Object.assign({}, options.download, {
                dynamicUrl: this.buildDynamicDownloadUrlFromParamsWFS(options)
            });
        } //  ####   END  if paramsWFS
        if (!options.sourceFields || options.sourceFields.length === 0) {
            options.sourceFields = [];
        }
        else {
            options.sourceFields.forEach(sourceField => {
                sourceField.alias = sourceField.alias
                    ? sourceField.alias
                    : sourceField.name;
                // to allow only a list of sourcefield with names
            });
        }
        const initOgcFilters = options
            .ogcFilters;
        const ogcFilterWriter = new OgcFilterWriter();
        if (!initOgcFilters) {
            options.ogcFilters = ogcFilterWriter.defineOgcFiltersDefaultOptions(initOgcFilters, fieldNameGeometry, 'wms');
        }
        else {
            initOgcFilters.advancedOgcFilters = (initOgcFilters.pushButtons || initOgcFilters.checkboxes
                || initOgcFilters.radioButtons || initOgcFilters.select)
                ? false
                : true;
            if (initOgcFilters.advancedOgcFilters && initOgcFilters.filters) {
                const filterDuring = initOgcFilters.filters;
                if (filterDuring.calendarModeYear) {
                    initOgcFilters.advancedOgcFilters = false;
                }
            }
            if (initOgcFilters.pushButtons) {
                initOgcFilters.pushButtons.selectorType = 'pushButton';
            }
            if (initOgcFilters.checkboxes) {
                initOgcFilters.checkboxes.selectorType = 'checkbox';
            }
            if (initOgcFilters.radioButtons) {
                initOgcFilters.radioButtons.selectorType = 'radioButton';
            }
            if (initOgcFilters.select) {
                initOgcFilters.select.selectorType = 'select';
            }
        }
        if (sourceParams.LAYERS.split(',').length > 1 &&
            initOgcFilters &&
            initOgcFilters.enabled) {
            console.log('*******************************');
            console.log('BE CAREFULL, YOUR WMS LAYERS (' +
                sourceParams.LAYERS +
                ') MUST SHARE THE SAME FIELDS TO ALLOW ogcFilters TO WORK !! ');
            console.log('*******************************');
        }
        if (options.paramsWFS &&
            initOgcFilters &&
            initOgcFilters.enabled &&
            initOgcFilters.editable &&
            (options.sourceFields || []).filter(sf => !sf.values).length > 0) {
            this.wfsService.getSourceFieldsFromWFS(options);
        }
        const filterQueryString = ogcFilterWriter.handleOgcFiltersAppliedValue(options, fieldNameGeometry);
        sourceParams.FILTER = filterQueryString;
        this.setOgcFilters(initOgcFilters, true);
        const timeFilterableDataSourceOptions = options;
        if ((timeFilterableDataSourceOptions === null || timeFilterableDataSourceOptions === void 0 ? void 0 : timeFilterableDataSourceOptions.timeFilterable) &&
            (timeFilterableDataSourceOptions === null || timeFilterableDataSourceOptions === void 0 ? void 0 : timeFilterableDataSourceOptions.timeFilter)) {
            this.setTimeFilter(timeFilterableDataSourceOptions.timeFilter, true);
        }
    }
    get params() {
        return this.options.params;
    }
    get queryTitle() {
        return this.options.queryTitle
            ? this.options.queryTitle
            : 'title';
    }
    get mapLabel() {
        return this.options.mapLabel;
    }
    get queryHtmlTarget() {
        return this.options.queryHtmlTarget
            ? this.options.queryHtmlTarget
            : QueryHtmlTarget.BLANK;
    }
    set ogcFilters(value) {
        this.options.ogcFilters = value;
    }
    get ogcFilters() {
        return this.options.ogcFilters;
    }
    set timeFilter(value) {
        this.options.timeFilter = value;
    }
    get timeFilter() {
        return this.options.timeFilter;
    }
    refresh() {
        this.ol.updateParams({ igoRefresh: Math.random() });
    }
    buildDynamicDownloadUrlFromParamsWFS(asWFSDataSourceOptions) {
        const queryStringValues = formatWFSQueryString(asWFSDataSourceOptions);
        const downloadUrl = queryStringValues.find(f => f.name === 'getfeature')
            .value;
        return downloadUrl;
    }
    createOlSource() {
        return new olSourceImageWMS(Object.assign({ ratio: 1 }, this.options));
    }
    setOgcFilters(ogcFilters, triggerEvent = false) {
        this.ogcFilters = ogcFilters;
        if (triggerEvent) {
            this.ogcFilters$.next(this.ogcFilters);
        }
    }
    setTimeFilter(timeFilter, triggerEvent = false) {
        this.timeFilter = timeFilter;
        if (triggerEvent) {
            this.timeFilter$.next(this.timeFilter);
        }
    }
    getLegend(style, view) {
        let legend = super.getLegend();
        if (legend.length > 0 && (style === undefined && !(view === null || view === void 0 ? void 0 : view.scale))) {
            return legend;
        }
        let contentDependent = false;
        let projParam;
        if ((view === null || view === void 0 ? void 0 : view.size) && (view === null || view === void 0 ? void 0 : view.extent) && (view === null || view === void 0 ? void 0 : view.projection) && this.options.contentDependentLegend) {
            projParam = this.params.VERSION === '1.3.0' || this.params.VERSION === undefined ? 'CRS' : 'SRS';
            contentDependent = true;
        }
        const sourceParams = this.params;
        let layers = [];
        if (sourceParams.LAYERS !== undefined) {
            layers = sourceParams.LAYERS.split(',');
        }
        const baseUrl = this.options.url.replace(/\?$/, '');
        const params = [
            'REQUEST=GetLegendGraphic',
            'SERVICE=WMS',
            'FORMAT=image/png',
            'SLD_VERSION=1.1.0',
            `VERSION=${sourceParams.VERSION || '1.3.0'}`
        ];
        if (style !== undefined) {
            params.push(`STYLE=${style}`);
        }
        if ((view === null || view === void 0 ? void 0 : view.scale) !== undefined) {
            params.push(`SCALE=${view.scale}`);
        }
        if (contentDependent) {
            params.push(`WIDTH=${view.size[0]}`);
            params.push(`HEIGHT=${view.size[1]}`);
            params.push(`BBOX=${view.extent.join(',')}`);
            params.push(`${projParam}=${view.projection}`);
        }
        legend = layers.map((layer) => {
            const separator = baseUrl.match(/\?/) ? '&' : '?';
            return {
                url: `${baseUrl}${separator}${params.join('&')}&LAYER=${layer}`,
                title: layers.length > 1 ? layer : undefined,
                currentStyle: style === undefined ? undefined : style
            };
        });
        return legend;
    }
    onUnwatch() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid21zLWRhdGFzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy93bXMtZGF0YXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGdCQUFnQixNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFLMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCx3QkFBd0IsRUFDekIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdkMsTUFBTSxPQUFPLGFBQWMsU0FBUSxVQUFVO0lBd0MzQyxZQUNTLE9BQTZCLEVBQzFCLFVBQXNCO1FBRWhDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUhSLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFaekIsZ0JBQVcsR0FBdUMsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFRakYsZ0JBQVcsR0FBdUMsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFPeEYsTUFBTSxZQUFZLEdBQVEsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUV6QyxNQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxZQUFZLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN2QixZQUFZLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztR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QUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU0sU0FBUyxLQUFJLENBQUM7Q0FDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2xTb3VyY2VJbWFnZVdNUyBmcm9tICdvbC9zb3VyY2UvSW1hZ2VXTVMnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IExlZ2VuZCB9IGZyb20gJy4vZGF0YXNvdXJjZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgV01TRGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuL3dtcy1kYXRhc291cmNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBXRlNTZXJ2aWNlIH0gZnJvbSAnLi93ZnMuc2VydmljZSc7XG5cbmltcG9ydCB7IE9nY0ZpbHRlcldyaXRlciB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9zaGFyZWQvb2djLWZpbHRlcic7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnMsIE9nY0ZpbHRlcnNPcHRpb25zLCBPZ2NGaWx0ZXJEdXJpbmdPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL3NoYXJlZC9vZ2MtZmlsdGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBRdWVyeUh0bWxUYXJnZXQgfSBmcm9tICcuLi8uLi8uLi9xdWVyeS9zaGFyZWQvcXVlcnkuZW51bXMnO1xuaW1wb3J0IHtcbiAgZm9ybWF0V0ZTUXVlcnlTdHJpbmcsXG4gIGNoZWNrV2ZzUGFyYW1zLFxuICBkZWZhdWx0RmllbGROYW1lR2VvbWV0cnlcbn0gZnJvbSAnLi93bXMtd2ZzLnV0aWxzJztcblxuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5pbXBvcnQgeyBMZWdlbmRNYXBWaWV3T3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xheWVyL3NoYXJlZC9sYXllcnMvbGF5ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGltZUZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucywgVGltZUZpbHRlck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc2hhcmVkL3RpbWUtZmlsdGVyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBXTVNEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBvbDogb2xTb3VyY2VJbWFnZVdNUztcblxuICBnZXQgcGFyYW1zKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wYXJhbXMgYXMgYW55O1xuICB9XG5cbiAgZ2V0IHF1ZXJ5VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMub3B0aW9ucyBhcyBhbnkpLnF1ZXJ5VGl0bGVcbiAgICAgID8gKHRoaXMub3B0aW9ucyBhcyBhbnkpLnF1ZXJ5VGl0bGVcbiAgICAgIDogJ3RpdGxlJztcbiAgfVxuXG4gIGdldCBtYXBMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5vcHRpb25zIGFzIGFueSkubWFwTGFiZWw7XG4gIH1cblxuICBnZXQgcXVlcnlIdG1sVGFyZ2V0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLm9wdGlvbnMgYXMgYW55KS5xdWVyeUh0bWxUYXJnZXRcbiAgICAgID8gKHRoaXMub3B0aW9ucyBhcyBhbnkpLnF1ZXJ5SHRtbFRhcmdldFxuICAgICAgOiBRdWVyeUh0bWxUYXJnZXQuQkxBTks7XG4gIH1cblxuICBzZXQgb2djRmlsdGVycyh2YWx1ZTogT2djRmlsdGVyc09wdGlvbnMpIHtcbiAgICAodGhpcy5vcHRpb25zIGFzIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucykub2djRmlsdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBvZ2NGaWx0ZXJzKCk6IE9nY0ZpbHRlcnNPcHRpb25zIHtcbiAgICByZXR1cm4gKHRoaXMub3B0aW9ucyBhcyBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnMpLm9nY0ZpbHRlcnM7XG4gIH1cblxuICByZWFkb25seSBvZ2NGaWx0ZXJzJDogQmVoYXZpb3JTdWJqZWN0PE9nY0ZpbHRlcnNPcHRpb25zPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICBzZXQgdGltZUZpbHRlcih2YWx1ZTogVGltZUZpbHRlck9wdGlvbnMgKSB7XG4gICAgKHRoaXMub3B0aW9ucyBhcyBUaW1lRmlsdGVyYWJsZURhdGFTb3VyY2VPcHRpb25zKS50aW1lRmlsdGVyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRpbWVGaWx0ZXIoKTogVGltZUZpbHRlck9wdGlvbnMge1xuICAgIHJldHVybiAodGhpcy5vcHRpb25zIGFzIFRpbWVGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnMpLnRpbWVGaWx0ZXI7XG4gIH1cbiAgcmVhZG9ubHkgdGltZUZpbHRlciQ6IEJlaGF2aW9yU3ViamVjdDxUaW1lRmlsdGVyT3B0aW9ucz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG9wdGlvbnM6IFdNU0RhdGFTb3VyY2VPcHRpb25zLFxuICAgIHByb3RlY3RlZCB3ZnNTZXJ2aWNlOiBXRlNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIGNvbnN0IHNvdXJjZVBhcmFtczogYW55ID0gb3B0aW9ucy5wYXJhbXM7XG5cbiAgICBjb25zdCBkcGkgPSBzb3VyY2VQYXJhbXMuRFBJIHx8IDk2O1xuICAgIHNvdXJjZVBhcmFtcy5EUEkgPSBkcGk7XG4gICAgc291cmNlUGFyYW1zLk1BUF9SRVNPTFVUSU9OID0gZHBpO1xuICAgIHNvdXJjZVBhcmFtcy5GT1JNQVRfT1BUSU9OUyA9ICdkcGk6JyArIGRwaTtcblxuICAgIGlmIChvcHRpb25zLnJlZnJlc2hJbnRlcnZhbFNlYyAmJiBvcHRpb25zLnJlZnJlc2hJbnRlcnZhbFNlYyA+IDApIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICB9LCBvcHRpb25zLnJlZnJlc2hJbnRlcnZhbFNlYyAqIDEwMDApOyAvLyBDb252ZXJ0IHNlY29uZHMgdG8gTVNcbiAgICB9XG5cbiAgICBsZXQgZmllbGROYW1lR2VvbWV0cnkgPSBkZWZhdWx0RmllbGROYW1lR2VvbWV0cnk7XG5cbiAgICAvLyAjIyMjICAgU1RBUlQgaWYgcGFyYW1zV0ZTXG4gICAgaWYgKG9wdGlvbnMucGFyYW1zV0ZTKSB7XG4gICAgICBjb25zdCB3ZnNDaGVja3VwID0gY2hlY2tXZnNQYXJhbXMob3B0aW9ucywgJ3dtcycpO1xuICAgICAgT2JqZWN0VXRpbHMubWVyZ2VEZWVwKG9wdGlvbnMucGFyYW1zV0ZTLCB3ZnNDaGVja3VwLnBhcmFtc1dGUyk7XG5cbiAgICAgIGZpZWxkTmFtZUdlb21ldHJ5ID1cbiAgICAgICAgb3B0aW9ucy5wYXJhbXNXRlMuZmllbGROYW1lR2VvbWV0cnkgfHwgZmllbGROYW1lR2VvbWV0cnk7XG5cbiAgICAgIG9wdGlvbnMuZG93bmxvYWQgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLmRvd25sb2FkLCB7XG4gICAgICAgIGR5bmFtaWNVcmw6IHRoaXMuYnVpbGREeW5hbWljRG93bmxvYWRVcmxGcm9tUGFyYW1zV0ZTKG9wdGlvbnMpXG4gICAgICB9KTtcbiAgICB9IC8vICAjIyMjICAgRU5EICBpZiBwYXJhbXNXRlNcblxuICAgIGlmICghb3B0aW9ucy5zb3VyY2VGaWVsZHMgfHwgb3B0aW9ucy5zb3VyY2VGaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBvcHRpb25zLnNvdXJjZUZpZWxkcyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnNvdXJjZUZpZWxkcy5mb3JFYWNoKHNvdXJjZUZpZWxkID0+IHtcbiAgICAgICAgc291cmNlRmllbGQuYWxpYXMgPSBzb3VyY2VGaWVsZC5hbGlhc1xuICAgICAgICAgID8gc291cmNlRmllbGQuYWxpYXNcbiAgICAgICAgICA6IHNvdXJjZUZpZWxkLm5hbWU7XG4gICAgICAgIC8vIHRvIGFsbG93IG9ubHkgYSBsaXN0IG9mIHNvdXJjZWZpZWxkIHdpdGggbmFtZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBpbml0T2djRmlsdGVycyA9IChvcHRpb25zIGFzIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucylcbiAgICAgIC5vZ2NGaWx0ZXJzO1xuICAgIGNvbnN0IG9nY0ZpbHRlcldyaXRlciA9IG5ldyBPZ2NGaWx0ZXJXcml0ZXIoKTtcblxuICAgIGlmICghaW5pdE9nY0ZpbHRlcnMpIHtcbiAgICAgIChvcHRpb25zIGFzIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucykub2djRmlsdGVycyA9IG9nY0ZpbHRlcldyaXRlci5kZWZpbmVPZ2NGaWx0ZXJzRGVmYXVsdE9wdGlvbnMoXG4gICAgICAgIGluaXRPZ2NGaWx0ZXJzLFxuICAgICAgICBmaWVsZE5hbWVHZW9tZXRyeSxcbiAgICAgICAgJ3dtcydcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRPZ2NGaWx0ZXJzLmFkdmFuY2VkT2djRmlsdGVycyA9IChpbml0T2djRmlsdGVycy5wdXNoQnV0dG9ucyB8fCBpbml0T2djRmlsdGVycy5jaGVja2JveGVzXG4gICAgICAgIHx8IGluaXRPZ2NGaWx0ZXJzLnJhZGlvQnV0dG9ucyB8fCBpbml0T2djRmlsdGVycy5zZWxlY3QpXG4gICAgICAgID8gZmFsc2VcbiAgICAgICAgOiB0cnVlO1xuICAgICAgaWYgKGluaXRPZ2NGaWx0ZXJzLmFkdmFuY2VkT2djRmlsdGVycyAmJiBpbml0T2djRmlsdGVycy5maWx0ZXJzKSB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyRHVyaW5nID0gaW5pdE9nY0ZpbHRlcnMuZmlsdGVycyBhcyBPZ2NGaWx0ZXJEdXJpbmdPcHRpb25zO1xuICAgICAgICAgIGlmKGZpbHRlckR1cmluZy5jYWxlbmRhck1vZGVZZWFyKSB7XG4gICAgICAgICAgICBpbml0T2djRmlsdGVycy5hZHZhbmNlZE9nY0ZpbHRlcnMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaW5pdE9nY0ZpbHRlcnMucHVzaEJ1dHRvbnMpe1xuICAgICAgICBpbml0T2djRmlsdGVycy5wdXNoQnV0dG9ucy5zZWxlY3RvclR5cGUgPSAncHVzaEJ1dHRvbic7XG4gICAgICB9XG4gICAgICBpZiAoaW5pdE9nY0ZpbHRlcnMuY2hlY2tib3hlcyl7XG4gICAgICAgIGluaXRPZ2NGaWx0ZXJzLmNoZWNrYm94ZXMuc2VsZWN0b3JUeXBlID0gJ2NoZWNrYm94JztcbiAgICAgIH1cbiAgICAgIGlmIChpbml0T2djRmlsdGVycy5yYWRpb0J1dHRvbnMpe1xuICAgICAgICBpbml0T2djRmlsdGVycy5yYWRpb0J1dHRvbnMuc2VsZWN0b3JUeXBlID0gJ3JhZGlvQnV0dG9uJztcbiAgICAgIH1cbiAgICAgIGlmIChpbml0T2djRmlsdGVycy5zZWxlY3Qpe1xuICAgICAgICBpbml0T2djRmlsdGVycy5zZWxlY3Quc2VsZWN0b3JUeXBlID0gJ3NlbGVjdCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc291cmNlUGFyYW1zLkxBWUVSUy5zcGxpdCgnLCcpLmxlbmd0aCA+IDEgJiZcbiAgICAgIGluaXRPZ2NGaWx0ZXJzICYmXG4gICAgICBpbml0T2djRmlsdGVycy5lbmFibGVkXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKicpO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdCRSBDQVJFRlVMTCwgWU9VUiBXTVMgTEFZRVJTICgnICtcbiAgICAgICAgICBzb3VyY2VQYXJhbXMuTEFZRVJTICtcbiAgICAgICAgICAnKSBNVVNUIFNIQVJFIFRIRSBTQU1FIEZJRUxEUyBUTyBBTExPVyBvZ2NGaWx0ZXJzIFRPIFdPUksgISEgJ1xuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy5wYXJhbXNXRlMgJiZcbiAgICAgIGluaXRPZ2NGaWx0ZXJzICYmXG4gICAgICBpbml0T2djRmlsdGVycy5lbmFibGVkICYmXG4gICAgICBpbml0T2djRmlsdGVycy5lZGl0YWJsZSAmJlxuICAgICAgKG9wdGlvbnMuc291cmNlRmllbGRzIHx8IFtdKS5maWx0ZXIoc2YgPT4gIXNmLnZhbHVlcykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy53ZnNTZXJ2aWNlLmdldFNvdXJjZUZpZWxkc0Zyb21XRlMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyUXVlcnlTdHJpbmcgPSBvZ2NGaWx0ZXJXcml0ZXIuaGFuZGxlT2djRmlsdGVyc0FwcGxpZWRWYWx1ZShcbiAgICAgIG9wdGlvbnMsXG4gICAgICBmaWVsZE5hbWVHZW9tZXRyeVxuICAgICk7XG4gICAgc291cmNlUGFyYW1zLkZJTFRFUiA9IGZpbHRlclF1ZXJ5U3RyaW5nO1xuICAgIHRoaXMuc2V0T2djRmlsdGVycyhpbml0T2djRmlsdGVycywgdHJ1ZSk7XG5cbiAgICBjb25zdCB0aW1lRmlsdGVyYWJsZURhdGFTb3VyY2VPcHRpb25zID0gKG9wdGlvbnMgYXMgVGltZUZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucyk7XG4gICAgaWYgKFxuICAgICAgdGltZUZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucz8udGltZUZpbHRlcmFibGUgJiZcbiAgICAgIHRpbWVGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnM/LnRpbWVGaWx0ZXIpIHtcbiAgICAgIHRoaXMuc2V0VGltZUZpbHRlcih0aW1lRmlsdGVyYWJsZURhdGFTb3VyY2VPcHRpb25zLnRpbWVGaWx0ZXIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5vbC51cGRhdGVQYXJhbXMoeyBpZ29SZWZyZXNoOiBNYXRoLnJhbmRvbSgpIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZER5bmFtaWNEb3dubG9hZFVybEZyb21QYXJhbXNXRlMoYXNXRlNEYXRhU291cmNlT3B0aW9ucykge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nVmFsdWVzID0gZm9ybWF0V0ZTUXVlcnlTdHJpbmcoYXNXRlNEYXRhU291cmNlT3B0aW9ucyk7XG4gICAgY29uc3QgZG93bmxvYWRVcmwgPSBxdWVyeVN0cmluZ1ZhbHVlcy5maW5kKGYgPT4gZi5uYW1lID09PSAnZ2V0ZmVhdHVyZScpXG4gICAgICAudmFsdWU7XG4gICAgcmV0dXJuIGRvd25sb2FkVXJsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU9sU291cmNlKCk6IG9sU291cmNlSW1hZ2VXTVMge1xuICAgIHJldHVybiBuZXcgb2xTb3VyY2VJbWFnZVdNUyhPYmplY3QuYXNzaWduKHtyYXRpbzogMX0sIHRoaXMub3B0aW9ucykpO1xuICB9XG5cbiAgc2V0T2djRmlsdGVycyhvZ2NGaWx0ZXJzOiBPZ2NGaWx0ZXJzT3B0aW9ucywgdHJpZ2dlckV2ZW50OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICB0aGlzLm9nY0ZpbHRlcnMgPSBvZ2NGaWx0ZXJzO1xuICAgIGlmICh0cmlnZ2VyRXZlbnQpIHtcbiAgICAgIHRoaXMub2djRmlsdGVycyQubmV4dCh0aGlzLm9nY0ZpbHRlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRpbWVGaWx0ZXIodGltZUZpbHRlcjogVGltZUZpbHRlck9wdGlvbnMsIHRyaWdnZXJFdmVudDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgdGhpcy50aW1lRmlsdGVyID0gdGltZUZpbHRlcjtcbiAgICBpZiAodHJpZ2dlckV2ZW50KSB7XG4gICAgICB0aGlzLnRpbWVGaWx0ZXIkLm5leHQodGhpcy50aW1lRmlsdGVyKTtcbiAgICB9XG4gIH1cblxuICBnZXRMZWdlbmQoc3R5bGU/OiBzdHJpbmcsIHZpZXc/OiBMZWdlbmRNYXBWaWV3T3B0aW9ucyk6IExlZ2VuZFtdIHtcbiAgICBsZXQgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKCk7XG4gICAgaWYgKGxlZ2VuZC5sZW5ndGggPiAwICYmIChzdHlsZSA9PT0gdW5kZWZpbmVkICYmICF2aWV3Py5zY2FsZSkpIHtcbiAgICAgIHJldHVybiBsZWdlbmQ7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnREZXBlbmRlbnQgPSBmYWxzZTtcbiAgICBsZXQgcHJvalBhcmFtO1xuXG4gICAgaWYgKHZpZXc/LnNpemUgJiYgdmlldz8uZXh0ZW50ICYmIHZpZXc/LnByb2plY3Rpb24gJiYgdGhpcy5vcHRpb25zLmNvbnRlbnREZXBlbmRlbnRMZWdlbmQpIHtcbiAgICAgIHByb2pQYXJhbSA9IHRoaXMucGFyYW1zLlZFUlNJT04gPT09ICcxLjMuMCcgfHwgdGhpcy5wYXJhbXMuVkVSU0lPTiA9PT0gdW5kZWZpbmVkID8gJ0NSUycgOiAnU1JTJztcbiAgICAgIGNvbnRlbnREZXBlbmRlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVBhcmFtcyA9IHRoaXMucGFyYW1zO1xuXG4gICAgbGV0IGxheWVycyA9IFtdO1xuICAgIGlmIChzb3VyY2VQYXJhbXMuTEFZRVJTICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxheWVycyA9IHNvdXJjZVBhcmFtcy5MQVlFUlMuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5vcHRpb25zLnVybC5yZXBsYWNlKC9cXD8kLywgJycpO1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICdSRVFVRVNUPUdldExlZ2VuZEdyYXBoaWMnLFxuICAgICAgJ1NFUlZJQ0U9V01TJyxcbiAgICAgICdGT1JNQVQ9aW1hZ2UvcG5nJyxcbiAgICAgICdTTERfVkVSU0lPTj0xLjEuMCcsXG4gICAgICBgVkVSU0lPTj0ke3NvdXJjZVBhcmFtcy5WRVJTSU9OIHx8ICcxLjMuMCd9YFxuICAgIF07XG4gICAgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5wdXNoKGBTVFlMRT0ke3N0eWxlfWApO1xuICAgIH1cbiAgICBpZiAodmlldz8uc2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLnB1c2goYFNDQUxFPSR7dmlldy5zY2FsZX1gKTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnREZXBlbmRlbnQpIHtcbiAgICAgIHBhcmFtcy5wdXNoKGBXSURUSD0ke3ZpZXcuc2l6ZVswXX1gKTtcbiAgICAgIHBhcmFtcy5wdXNoKGBIRUlHSFQ9JHt2aWV3LnNpemVbMV19YCk7XG4gICAgICBwYXJhbXMucHVzaChgQkJPWD0ke3ZpZXcuZXh0ZW50LmpvaW4oJywnKX1gKTtcbiAgICAgIHBhcmFtcy5wdXNoKGAke3Byb2pQYXJhbX09JHt2aWV3LnByb2plY3Rpb259YCk7XG4gICAgfVxuXG4gICAgbGVnZW5kID0gbGF5ZXJzLm1hcCgobGF5ZXI6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgc2VwYXJhdG9yID0gYmFzZVVybC5tYXRjaCgvXFw/LykgPyAnJicgOiAnPyc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IGAke2Jhc2VVcmx9JHtzZXBhcmF0b3J9JHtwYXJhbXMuam9pbignJicpfSZMQVlFUj0ke2xheWVyfWAsXG4gICAgICAgIHRpdGxlOiBsYXllcnMubGVuZ3RoID4gMSA/IGxheWVyIDogdW5kZWZpbmVkLFxuICAgICAgICBjdXJyZW50U3R5bGU6IHN0eWxlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzdHlsZSBhcyBzdHJpbmdcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGVnZW5kO1xuICB9XG5cbiAgcHVibGljIG9uVW53YXRjaCgpIHt9XG59XG4iXX0=