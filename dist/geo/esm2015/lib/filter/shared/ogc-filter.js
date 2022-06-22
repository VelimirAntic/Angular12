import * as olfilter from 'ol/format/filter';
import olFormatWKT from 'ol/format/WKT';
import olFormatWFS from 'ol/format/WFS';
import { uuid, ObjectUtils } from '@igo2/utils';
import { OgcFilterOperatorType, OgcFilterOperator } from './ogc-filter.enum';
import * as moment_ from 'moment';
const moment = moment_;
export class OgcFilterWriter {
    constructor() {
        this.filterSequence = [];
        this.operators = {
            [OgcFilterOperator.PropertyIsEqualTo]: {
                spatial: false,
                fieldRestrict: []
            },
            [OgcFilterOperator.PropertyIsNotEqualTo]: {
                spatial: false,
                fieldRestrict: []
            },
            [OgcFilterOperator.PropertyIsLike]: {
                spatial: false,
                fieldRestrict: ['string']
            },
            [OgcFilterOperator.PropertyIsGreaterThan]: {
                spatial: false,
                fieldRestrict: ['number']
            },
            [OgcFilterOperator.PropertyIsGreaterThanOrEqualTo]: {
                spatial: false,
                fieldRestrict: ['number']
            },
            [OgcFilterOperator.PropertyIsLessThan]: {
                spatial: false,
                fieldRestrict: ['number']
            },
            [OgcFilterOperator.PropertyIsLessThanOrEqualTo]: {
                spatial: false,
                fieldRestrict: ['number']
            },
            [OgcFilterOperator.PropertyIsBetween]: {
                spatial: false,
                fieldRestrict: ['number']
            },
            [OgcFilterOperator.During]: { spatial: false, fieldRestrict: [] },
            [OgcFilterOperator.PropertyIsNull]: {
                spatial: false,
                fieldRestrict: []
            },
            [OgcFilterOperator.Intersects]: {
                spatial: true,
                fieldRestrict: []
            },
            [OgcFilterOperator.Within]: { spatial: true, fieldRestrict: [] },
            [OgcFilterOperator.Contains]: { spatial: true, fieldRestrict: [] }
        };
    }
    defineOgcFiltersDefaultOptions(ogcFiltersOptions, fieldNameGeometry, srcType) {
        let ogcFiltersDefaultValue = true; // default values for wfs.
        if (srcType && srcType === 'wms') {
            ogcFiltersDefaultValue = false;
        }
        ogcFiltersOptions = ogcFiltersOptions || {};
        ogcFiltersOptions.enabled =
            ogcFiltersOptions.enabled === undefined
                ? ogcFiltersDefaultValue
                : ogcFiltersOptions.enabled;
        ogcFiltersOptions.editable =
            ogcFiltersOptions.editable === undefined
                ? ogcFiltersDefaultValue
                : ogcFiltersOptions.editable;
        ogcFiltersOptions.geometryName = fieldNameGeometry;
        ogcFiltersOptions.advancedOgcFilters = true;
        if (ogcFiltersOptions.enabled && (ogcFiltersOptions.pushButtons || ogcFiltersOptions.checkboxes
            || ogcFiltersOptions.radioButtons || ogcFiltersOptions.select)) {
            ogcFiltersOptions.advancedOgcFilters = false;
        }
        return ogcFiltersOptions;
    }
    buildFilter(filters, extent, proj, fieldNameGeometry, options) {
        let ourBboxFilter;
        let enableBbox;
        if (/intersects|contains|within/gi.test(JSON.stringify(filters))) {
            enableBbox = false;
        }
        else {
            enableBbox = true;
        }
        if (filters) {
            fieldNameGeometry =
                filters.geometryName !== undefined
                    ? filters.geometryName
                    : fieldNameGeometry;
        }
        if (extent && filters) {
            ourBboxFilter = olfilter.bbox(fieldNameGeometry, extent, proj.getCode());
        }
        let filterAssembly;
        if (filters) {
            filters = this.checkIgoFiltersProperties(filters, fieldNameGeometry, proj);
            if (extent && enableBbox) {
                filterAssembly = olfilter.and(ourBboxFilter, this.bundleFilter(filters, options));
            }
            else {
                filterAssembly = this.bundleFilter(filters, options);
            }
        }
        else {
            return 'bbox=' + extent.join(',') + ',' + proj.getCode();
        }
        const wfsOptions = {
            srsName: '',
            featureNS: '',
            featurePrefix: '',
            featureTypes: ['featureTypes'],
            filter: filterAssembly,
            outputFormat: '',
            geometryName: fieldNameGeometry
        };
        const query = new olFormatWFS().writeGetFeature(wfsOptions);
        const str = new XMLSerializer().serializeToString(query);
        const regexp1 = /typenames *=|typename *=\"featureTypes\" *>/gi;
        const regexp2 = /<\/Query><\/GetFeature>/gi;
        return 'filter=' + str.split(regexp1)[1].split(regexp2)[0];
    }
    bundleFilter(filterObject, options) {
        if (filterObject instanceof Array) {
            const logicalArray = [];
            filterObject.forEach((element) => {
                logicalArray.push(this.bundleFilter(element, options));
            });
            return logicalArray;
        }
        else {
            if (filterObject.hasOwnProperty('logical')) {
                return this.createFilter({
                    operator: filterObject.logical,
                    logicalArray: this.bundleFilter(filterObject.filters, options)
                }, options);
            }
            else if (filterObject.hasOwnProperty('operator')) {
                return this.createFilter(filterObject, options);
            }
        }
    }
    createFilter(filterOptions, options) {
        const operator = filterOptions.operator;
        const logicalArray = filterOptions.logicalArray;
        const wfsPropertyName = filterOptions.propertyName;
        const wfsPattern = filterOptions.pattern;
        const wfsMatchCase = filterOptions.matchCase
            ? filterOptions.matchCase
            : true;
        const wfsWildCard = filterOptions.wildCard ? filterOptions.wildCard : '*';
        const wfsSingleChar = filterOptions.singleChar
            ? filterOptions.singleChar
            : '.';
        const wfsEscapeChar = filterOptions.escapeChar
            ? filterOptions.escapeChar
            : '!';
        const wfsLowerBoundary = filterOptions.lowerBoundary;
        const wfsUpperBoundary = filterOptions.upperBoundary;
        const wfsGeometryName = filterOptions.geometryName;
        const wfsExtent = filterOptions.extent;
        const wfsWktGeometry = filterOptions.wkt_geometry;
        const wfsSrsName = filterOptions.srsName
            ? filterOptions.srsName
            : 'EPSG:3857';
        const wfsBegin = this.parseFilterOptionDate(filterOptions.begin, options ? options.minDate : undefined);
        const wfsEnd = this.parseFilterOptionDate(filterOptions.end, options ? options.maxDate : undefined);
        const wfsExpression = filterOptions.expression;
        let geometry;
        if (wfsWktGeometry) {
            const wkt = new olFormatWKT();
            geometry = wkt.readGeometry(wfsWktGeometry, {
                dataProjection: wfsSrsName,
                featureProjection: wfsSrsName || 'EPSG:3857'
            });
        }
        switch (operator.toLowerCase()) {
            case OgcFilterOperator.BBOX.toLowerCase():
                return olfilter.bbox(wfsGeometryName, wfsExtent, wfsSrsName);
            case OgcFilterOperator.PropertyIsBetween.toLowerCase():
                return olfilter.between(wfsPropertyName, wfsLowerBoundary, wfsUpperBoundary);
            case OgcFilterOperator.Contains.toLowerCase():
                return olfilter.contains(wfsGeometryName, geometry, wfsSrsName);
            case OgcFilterOperator.During.toLowerCase():
                return olfilter.during(wfsPropertyName, wfsBegin, wfsEnd);
            case OgcFilterOperator.PropertyIsEqualTo.toLowerCase():
                return olfilter.equalTo(wfsPropertyName, wfsExpression, wfsMatchCase);
            case OgcFilterOperator.PropertyIsGreaterThan.toLowerCase():
                return olfilter.greaterThan(wfsPropertyName, wfsExpression);
            case OgcFilterOperator.PropertyIsGreaterThanOrEqualTo.toLowerCase():
                return olfilter.greaterThanOrEqualTo(wfsPropertyName, wfsExpression);
            case OgcFilterOperator.Intersects.toLowerCase():
                return olfilter.intersects(wfsGeometryName, geometry, wfsSrsName);
            case OgcFilterOperator.PropertyIsNull.toLowerCase():
                return olfilter.isNull(wfsPropertyName);
            case OgcFilterOperator.PropertyIsLessThan.toLowerCase():
                return olfilter.lessThan(wfsPropertyName, wfsExpression);
            case OgcFilterOperator.PropertyIsLessThanOrEqualTo.toLowerCase():
                return olfilter.lessThanOrEqualTo(wfsPropertyName, wfsExpression);
            case OgcFilterOperator.PropertyIsLike.toLowerCase():
                return olfilter.like(wfsPropertyName, wfsPattern.replace(/[()_]/gi, wfsSingleChar), wfsWildCard, wfsSingleChar, wfsEscapeChar, wfsMatchCase);
            case OgcFilterOperator.PropertyIsNotEqualTo.toLowerCase():
                return olfilter.notEqualTo(wfsPropertyName, wfsExpression, wfsMatchCase);
            case OgcFilterOperator.Within.toLowerCase():
                return olfilter.within(wfsGeometryName, geometry, wfsSrsName);
            // LOGICAL
            case OgcFilterOperator.And.toLowerCase():
                return olfilter.and.apply(null, logicalArray);
            case OgcFilterOperator.Or.toLowerCase():
                return olfilter.or.apply(null, logicalArray);
            case OgcFilterOperator.Not.toLowerCase():
                return olfilter.not.apply(null, logicalArray);
            default:
                return undefined;
        }
    }
    defineInterfaceFilterSequence(filterObject, geometryName, logical = '', level = -1) {
        if (filterObject instanceof Array) {
            filterObject.forEach((element) => {
                this.filterSequence.concat(this.defineInterfaceFilterSequence(element, geometryName, logical, level));
            });
        }
        else {
            if (filterObject.hasOwnProperty('logical')) {
                level = level + 1;
                this.filterSequence.concat(this.defineInterfaceFilterSequence(filterObject.filters, geometryName, filterObject.logical, level));
            }
            else if (filterObject.hasOwnProperty('operator')) {
                this.filterSequence.push(this.addInterfaceFilter(filterObject, geometryName, level, logical));
            }
        }
        return this.filterSequence;
    }
    computeAllowedOperators(fields, propertyName, defaultOperatorsType) {
        let effectiveOperators = {};
        let allowedOperators;
        let fieldsHasSpatialOperator;
        let includeContains;
        if (fields && propertyName) {
            const srcField = fields.find((field) => field.name === propertyName);
            allowedOperators =
                srcField && srcField.allowedOperatorsType
                    ? srcField.allowedOperatorsType
                    : defaultOperatorsType;
        }
        if (fields) {
            fields.map((field) => {
                if (!field.allowedOperatorsType) {
                    return;
                }
                const allowedOperatorsType = field.allowedOperatorsType.toLowerCase();
                if (allowedOperatorsType === OgcFilterOperatorType.All.toLowerCase() ||
                    allowedOperatorsType ===
                        OgcFilterOperatorType.Spatial.toLowerCase() ||
                    allowedOperatorsType ===
                        OgcFilterOperatorType.BasicAndSpatial.toLowerCase()) {
                    fieldsHasSpatialOperator = true;
                    if (allowedOperatorsType === OgcFilterOperatorType.All.toLowerCase()) {
                        includeContains = true;
                    }
                }
            });
        }
        allowedOperators = allowedOperators
            ? allowedOperators
            : OgcFilterOperatorType.BasicAndSpatial;
        switch (allowedOperators.toLowerCase()) {
            case OgcFilterOperatorType.All:
                effectiveOperators = this.operators;
                break;
            case OgcFilterOperatorType.Spatial:
                effectiveOperators = {
                    [OgcFilterOperator.Intersects]: { spatial: true, fieldRestrict: [] },
                    [OgcFilterOperator.Within]: { spatial: true, fieldRestrict: [] }
                };
                break;
            case OgcFilterOperatorType.BasicAndSpatial:
                effectiveOperators = {
                    [OgcFilterOperator.PropertyIsEqualTo]: {
                        spatial: false,
                        fieldRestrict: []
                    },
                    [OgcFilterOperator.PropertyIsNotEqualTo]: {
                        spatial: false,
                        fieldRestrict: []
                    },
                    [OgcFilterOperator.Intersects]: { spatial: true, fieldRestrict: [] },
                    [OgcFilterOperator.Within]: { spatial: true, fieldRestrict: [] }
                };
                break;
            case OgcFilterOperatorType.Basic:
                effectiveOperators = {
                    [OgcFilterOperator.PropertyIsEqualTo]: {
                        spatial: false,
                        fieldRestrict: []
                    },
                    [OgcFilterOperator.PropertyIsNotEqualTo]: {
                        spatial: false,
                        fieldRestrict: []
                    }
                };
                break;
            case OgcFilterOperatorType.Time:
                effectiveOperators = {
                    [OgcFilterOperator.During]: { spatial: false, fieldRestrict: [] }
                };
                break;
            case OgcFilterOperatorType.BasicNumericOperator:
                effectiveOperators = {
                    [OgcFilterOperator.PropertyIsEqualTo]: {
                        spatial: false,
                        fieldRestrict: []
                    },
                    [OgcFilterOperator.PropertyIsNotEqualTo]: {
                        spatial: false,
                        fieldRestrict: []
                    },
                    [OgcFilterOperator.PropertyIsGreaterThan]: {
                        spatial: false,
                        fieldRestrict: ['number']
                    },
                    [OgcFilterOperator.PropertyIsGreaterThanOrEqualTo]: {
                        spatial: false,
                        fieldRestrict: ['number']
                    },
                    [OgcFilterOperator.PropertyIsLessThan]: {
                        spatial: false,
                        fieldRestrict: ['number']
                    },
                    [OgcFilterOperator.PropertyIsLessThanOrEqualTo]: {
                        spatial: false,
                        fieldRestrict: ['number']
                    }
                };
                break;
            default:
                effectiveOperators = {
                    [OgcFilterOperator.PropertyIsEqualTo]: {
                        spatial: false,
                        fieldRestrict: []
                    },
                    [OgcFilterOperator.PropertyIsNotEqualTo]: {
                        spatial: false,
                        fieldRestrict: []
                    },
                    [OgcFilterOperator.Intersects]: { spatial: true, fieldRestrict: [] },
                    [OgcFilterOperator.Within]: { spatial: true, fieldRestrict: [] }
                };
        }
        if (fieldsHasSpatialOperator) {
            effectiveOperators.Intersects = {
                spatial: true,
                fieldRestrict: []
            };
            effectiveOperators.Within = { spatial: true, fieldRestrict: [] };
            if (includeContains) {
                effectiveOperators.Contains = {
                    spatial: true,
                    fieldRestrict: []
                };
            }
        }
        return effectiveOperators;
    }
    addInterfaceFilter(igoOgcFilterObject, geometryName, level = 0, parentLogical = 'Or') {
        if (!igoOgcFilterObject) {
            igoOgcFilterObject = { operator: 'PropertyIsEqualTo' };
        }
        const f = {
            propertyName: '',
            operator: '',
            active: '',
            filterid: uuid(),
            step: '',
            begin: '',
            end: '',
            sliderOptions: {},
            lowerBoundary: '',
            upperBoundary: '',
            expression: '',
            pattern: '',
            wildCard: '*',
            singleChar: '.',
            escapeChar: '!',
            matchCase: true,
            igoSpatialSelector: '',
            igoSNRC: '',
            geometryName: '',
            geometry: '',
            wkt_geometry: '',
            extent: '',
            srsName: '',
            parentLogical: '',
            level: 0
        };
        return Object.assign(f, {
            parentLogical,
            level,
            geometryName
        }, igoOgcFilterObject);
    }
    checkIgoFiltersProperties(filterObject, fieldNameGeometry, proj, active = false) {
        const filterArray = [];
        if (filterObject instanceof Array) {
            filterObject.forEach((element) => {
                filterArray.push(this.checkIgoFiltersProperties(element, fieldNameGeometry, proj, active));
            });
            return filterArray;
        }
        else {
            if (filterObject.hasOwnProperty('logical')) {
                return Object.assign({}, {
                    logical: filterObject.logical,
                    filters: this.checkIgoFiltersProperties(filterObject.filters, fieldNameGeometry, proj, active)
                });
            }
            else if (filterObject.hasOwnProperty('operator')) {
                return this.addFilterProperties(filterObject, fieldNameGeometry, proj, active);
            }
        }
    }
    addFilterProperties(igoOgcFilterObject, fieldNameGeometry, proj, active = false) {
        const filterid = igoOgcFilterObject.hasOwnProperty('filterid')
            ? igoOgcFilterObject.filterid
            : uuid();
        const status = igoOgcFilterObject.hasOwnProperty('active')
            ? igoOgcFilterObject.active
            : active;
        const srsName = igoOgcFilterObject.hasOwnProperty('srsName')
            ? igoOgcFilterObject.srsName
            : proj
                ? proj.getCode()
                : 'EPSG:3857';
        return Object.assign({}, {
            filterid,
            active: status,
            igoSpatialSelector: 'fixedExtent',
            srsName
        }, igoOgcFilterObject, { geometryName: fieldNameGeometry });
    }
    rebuiltIgoOgcFilterObjectFromSequence(sequence) {
        if (sequence instanceof Array) {
            if (sequence.length >= 1) {
                let lastParentLogical = sequence[0].parentLogical;
                let nextElement;
                let logicalArray = [];
                let lastProcessedFilter;
                sequence.forEach((uiFilter) => {
                    const element = Object.assign({}, uiFilter);
                    const index = sequence.indexOf(uiFilter);
                    if (index >= 0 && index < sequence.length - 1) {
                        nextElement = sequence[index + 1];
                    }
                    else {
                        nextElement = element;
                    }
                    delete element.active;
                    delete element.filterid;
                    delete element.parentLogical;
                    logicalArray.push(element);
                    if (sequence.length === 1) {
                        lastProcessedFilter = element;
                    }
                    else if (lastParentLogical !== nextElement.parentLogical) {
                        if (logicalArray.length === 1) {
                            console.log('You must set at ' +
                                'least two operator in a logical (' +
                                lastParentLogical +
                                ')');
                        }
                        else {
                            lastProcessedFilter = Object.assign({}, { logical: lastParentLogical, filters: logicalArray });
                            logicalArray = [lastProcessedFilter];
                            lastParentLogical = nextElement.parentLogical;
                        }
                    }
                });
                return lastProcessedFilter;
            }
            else {
                return undefined;
            }
        }
        else {
            return undefined;
        }
    }
    computeIgoSelector(selectors) {
        if (selectors.groups.every((group) => group.computedSelectors !== undefined)) {
            return selectors;
        }
        let selector;
        if (selectors.groups && selectors.bundles) {
            if (!selectors.bundles.every((bundle) => bundle.id !== undefined)) {
                throw new Error('You must set an id for each of your bundles');
            }
            selector = ObjectUtils.copyDeep(selectors);
            selector.groups.forEach((group) => {
                group.title = group.title ? group.title : group.name;
                group.enabled = group.enabled ? group.enabled : false;
                group.computedSelectors = ObjectUtils.copyDeep(selector.bundles.filter((b) => group.ids.includes(b.id)));
            });
        }
        else if (!selectors.groups && selectors.bundles) {
            selector = ObjectUtils.copyDeep(selectors);
            selector.groups = [
                {
                    title: 'group1',
                    name: 'group1',
                    computedSelectors: ObjectUtils.copyDeep(selector.bundles)
                }
            ];
        }
        else {
            selector = {
                bundles: selectors,
                groups: [
                    {
                        title: 'group1',
                        name: 'group1',
                        computedSelectors: ObjectUtils.copyDeep(selectors)
                    }
                ],
                selectorType: selector.selectorType
            };
        }
        if (!selector.groups.find((selectorGroup) => selectorGroup.enabled)) {
            selector.groups[0].enabled = true;
        }
        return selector;
    }
    handleOgcFiltersAppliedValue(options, fieldNameGeometry, extent, proj) {
        const ogcFilters = options.ogcFilters;
        if (!ogcFilters) {
            return;
        }
        const conditions = [];
        let filterQueryStringSelector = '';
        let filterQueryStringAdvancedFilters = '';
        if (ogcFilters.enabled && (ogcFilters.pushButtons || ogcFilters.checkboxes || ogcFilters.radioButtons || ogcFilters.select)) {
            let selectors;
            if (ogcFilters.pushButtons) {
                selectors = ogcFilters.pushButtons;
                const pushConditions = this.formatGroupAndFilter(ogcFilters, selectors);
                for (const condition of pushConditions) {
                    conditions.push(condition);
                }
            }
            if (ogcFilters.checkboxes) {
                selectors = ogcFilters.checkboxes;
                const checkboxConditions = this.formatGroupAndFilter(ogcFilters, selectors);
                for (const condition of checkboxConditions) {
                    conditions.push(condition);
                }
            }
            if (ogcFilters.radioButtons) {
                selectors = ogcFilters.radioButtons;
                const selectorsCorr = this.verifyMultipleEnableds(selectors);
                const radioConditions = this.formatGroupAndFilter(ogcFilters, selectorsCorr);
                for (const condition of radioConditions) {
                    conditions.push(condition);
                }
            }
            if (ogcFilters.select) {
                selectors = ogcFilters.select;
                const selectorsCorr = this.verifyMultipleEnableds(selectors);
                const selectConditions = this.formatGroupAndFilter(ogcFilters, selectorsCorr);
                for (const condition of selectConditions) {
                    conditions.push(condition);
                }
            }
            if (conditions.length >= 1) {
                filterQueryStringSelector = this.buildFilter(conditions.length === 1
                    ? conditions[0]
                    : { logical: 'And', filters: conditions }, extent, proj, ogcFilters.geometryName);
            }
        }
        if (ogcFilters.enabled && ogcFilters.filters) {
            ogcFilters.geometryName = ogcFilters.geometryName || fieldNameGeometry;
            const igoFilters = ogcFilters.filters;
            filterQueryStringAdvancedFilters = this.buildFilter(igoFilters, extent, proj, ogcFilters.geometryName, options);
        }
        let filterQueryString = ogcFilters.advancedOgcFilters
            ? filterQueryStringAdvancedFilters
            : filterQueryStringSelector;
        if (options.type === 'wms') {
            filterQueryString = this.formatProcessedOgcFilter(filterQueryString, options.params.LAYERS);
        }
        if (options.type === 'wfs') {
            filterQueryString = this.formatProcessedOgcFilter(filterQueryString, options.params.featureTypes);
        }
        return filterQueryString;
    }
    verifyMultipleEnableds(selectors) {
        selectors.bundles.forEach(bundle => {
            if (!bundle.multiple) {
                const enableds = bundle.selectors.reduce((list, filter, index) => (filter.enabled) === true ? list.concat(index) : list, []);
                if (enableds.length > 1) {
                    enableds.splice(0, 1);
                    enableds.forEach(index => {
                        bundle.selectors[index].enabled = false;
                    });
                }
            }
        });
        return selectors;
    }
    formatGroupAndFilter(ogcFilters, selectors) {
        selectors = this.computeIgoSelector(selectors);
        const selectorBundle = selectors.groups.find((g) => g.enabled).computedSelectors;
        const conditions = [];
        selectorBundle.map((bundle) => {
            const bundleCondition = [];
            const selectorsType = bundle.selectors;
            if (!selectorsType) {
                return;
            }
            selectorsType
                .filter((ogcselector) => ogcselector.enabled === true)
                .forEach((enabledSelector) => bundleCondition.push(enabledSelector.filters));
            if (bundleCondition.length === 1) {
                conditions.push(bundleCondition[0]);
            }
            else if (bundleCondition.length > 1) {
                conditions.push({
                    logical: bundle.logical,
                    filters: bundleCondition
                });
            }
        });
        if (selectors.selectorType === 'pushButton') {
            ogcFilters.pushButtons = selectors;
        }
        else if (selectors.selectorType === 'checkbox') {
            ogcFilters.checkboxes = selectors;
        }
        else if (selectors.selectorType === 'radioButton') {
            ogcFilters.radioButtons = selectors;
        }
        else if (selectors.selectorType === 'select') {
            ogcFilters.select = selectors;
        }
        return conditions;
    }
    formatProcessedOgcFilter(processedFilter, layersOrTypenames) {
        if (!processedFilter) {
            return undefined;
        }
        ;
        let appliedFilter = '';
        if (processedFilter.length === 0 && layersOrTypenames.indexOf(',') === -1) {
            appliedFilter = processedFilter;
        }
        else {
            layersOrTypenames.split(',').forEach((layerOrTypenames) => {
                appliedFilter = `${appliedFilter}(${processedFilter.replace('filter=', '')})`;
            });
        }
        appliedFilter = appliedFilter.replace(/\(\)/g, '');
        const filterValue = appliedFilter.length > 0
            ? appliedFilter.replace('filter=', '')
            : undefined;
        return filterValue;
    }
    parseFilterOptionDate(value, defaultValue) {
        if (!value) {
            return defaultValue;
        }
        else if (value === 'today') {
            return undefined;
        }
        else if (moment(value).isValid()) {
            return value;
        }
        else {
            return undefined;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2djLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9zaGFyZWQvb2djLWZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBQzdDLE9BQU8sV0FBVyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLFdBQXVDLE1BQU0sZUFBZSxDQUFDO0FBS3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBYWhELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdFLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUV2QixNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUNVLG1CQUFjLEdBQWdDLEVBQUUsQ0FBQztRQUNsRCxjQUFTLEdBQUc7WUFDakIsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBMkIsQ0FBQyxFQUFFO2dCQUMvQyxPQUFPLEVBQUUsS0FBSztnQkFDZCxhQUFhLEVBQUUsRUFBRTthQUNsQjtZQUNELENBQUMsaUJBQWlCLENBQUMsb0JBQThCLENBQUMsRUFBRTtnQkFDbEQsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsYUFBYSxFQUFFLEVBQUU7YUFDbEI7WUFDRCxDQUFDLGlCQUFpQixDQUFDLGNBQXdCLENBQUMsRUFBRTtnQkFDNUMsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQzFCO1lBQ0QsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBK0IsQ0FBQyxFQUFFO2dCQUNuRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDMUI7WUFDRCxDQUFDLGlCQUFpQixDQUFDLDhCQUF3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Z0JBQWdCLEVBQUUsRUFBRTtnQkFDeEQsYUFBYSxHQUFHLEdBQUcsYUFBYSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQ3pELFNBQVMsRUFDVCxFQUFFLENBQ0gsR0FBRyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuRCxNQUFNLFdBQVcsR0FDZixhQUFhLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDdEIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUN0QyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hCLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxxQkFBcUIsQ0FBQyxLQUFhLEVBQUUsWUFBcUI7UUFDL0QsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxLQUFLLEtBQUssT0FBTyxFQUFFO1lBQzVCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBvbGZpbHRlciBmcm9tICdvbC9mb3JtYXQvZmlsdGVyJztcbmltcG9ydCBvbEZvcm1hdFdLVCBmcm9tICdvbC9mb3JtYXQvV0tUJztcbmltcG9ydCBvbEZvcm1hdFdGUywgeyBXcml0ZUdldEZlYXR1cmVPcHRpb25zIH0gZnJvbSAnb2wvZm9ybWF0L1dGUyc7XG5pbXBvcnQgb2xHZW9tZXRyeSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcblxuaW1wb3J0IG9sUHJvamVjdGlvbiBmcm9tICdvbC9wcm9qL1Byb2plY3Rpb24nO1xuXG5pbXBvcnQgeyB1dWlkLCBPYmplY3RVdGlscyB9IGZyb20gJ0BpZ28yL3V0aWxzJztcblxuaW1wb3J0IHtcbiAgT2djRmlsdGVyLFxuICBJZ29PZ2NGaWx0ZXJPYmplY3QsXG4gIEFueUJhc2VPZ2NGaWx0ZXJPcHRpb25zLFxuICBPZ2NJbnRlcmZhY2VGaWx0ZXJPcHRpb25zLFxuICBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnMsXG4gIE9nY0ZpbHRlcnNPcHRpb25zLFxuICBJZ29PZ2NTZWxlY3RvcixcbiAgU2VsZWN0b3JHcm91cCxcbiAgT2djU2VsZWN0b3JCdW5kbGVcbn0gZnJvbSAnLi9vZ2MtZmlsdGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJPcGVyYXRvclR5cGUsIE9nY0ZpbHRlck9wZXJhdG9yIH0gZnJvbSAnLi9vZ2MtZmlsdGVyLmVudW0nO1xuaW1wb3J0IHsgU291cmNlRmllbGRzT3B0aW9uc1BhcmFtcyB9IGZyb20gJy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL2RhdGFzb3VyY2UuaW50ZXJmYWNlJztcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbmV4cG9ydCBjbGFzcyBPZ2NGaWx0ZXJXcml0ZXIge1xuICBwcml2YXRlIGZpbHRlclNlcXVlbmNlOiBPZ2NJbnRlcmZhY2VGaWx0ZXJPcHRpb25zW10gPSBbXTtcbiAgcHVibGljIG9wZXJhdG9ycyA9IHtcbiAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0VxdWFsVG8gYXMgc3RyaW5nXToge1xuICAgICAgc3BhdGlhbDogZmFsc2UsXG4gICAgICBmaWVsZFJlc3RyaWN0OiBbXVxuICAgIH0sXG4gICAgW09nY0ZpbHRlck9wZXJhdG9yLlByb3BlcnR5SXNOb3RFcXVhbFRvIGFzIHN0cmluZ106IHtcbiAgICAgIHNwYXRpYWw6IGZhbHNlLFxuICAgICAgZmllbGRSZXN0cmljdDogW11cbiAgICB9LFxuICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzTGlrZSBhcyBzdHJpbmddOiB7XG4gICAgICBzcGF0aWFsOiBmYWxzZSxcbiAgICAgIGZpZWxkUmVzdHJpY3Q6IFsnc3RyaW5nJ11cbiAgICB9LFxuICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzR3JlYXRlclRoYW4gYXMgc3RyaW5nXToge1xuICAgICAgc3BhdGlhbDogZmFsc2UsXG4gICAgICBmaWVsZFJlc3RyaWN0OiBbJ251bWJlciddXG4gICAgfSxcbiAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0dyZWF0ZXJUaGFuT3JFcXVhbFRvIGFzIHN0cmluZ106IHtcbiAgICAgIHNwYXRpYWw6IGZhbHNlLFxuICAgICAgZmllbGRSZXN0cmljdDogWydudW1iZXInXVxuICAgIH0sXG4gICAgW09nY0ZpbHRlck9wZXJhdG9yLlByb3BlcnR5SXNMZXNzVGhhbiBhcyBzdHJpbmddOiB7XG4gICAgICBzcGF0aWFsOiBmYWxzZSxcbiAgICAgIGZpZWxkUmVzdHJpY3Q6IFsnbnVtYmVyJ11cbiAgICB9LFxuICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzTGVzc1RoYW5PckVxdWFsVG8gYXMgc3RyaW5nXToge1xuICAgICAgc3BhdGlhbDogZmFsc2UsXG4gICAgICBmaWVsZFJlc3RyaWN0OiBbJ251bWJlciddXG4gICAgfSxcbiAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0JldHdlZW4gYXMgc3RyaW5nXToge1xuICAgICAgc3BhdGlhbDogZmFsc2UsXG4gICAgICBmaWVsZFJlc3RyaWN0OiBbJ251bWJlciddXG4gICAgfSxcbiAgICBbT2djRmlsdGVyT3BlcmF0b3IuRHVyaW5nIGFzIHN0cmluZ106IHsgc3BhdGlhbDogZmFsc2UsIGZpZWxkUmVzdHJpY3Q6IFtdIH0sXG4gICAgW09nY0ZpbHRlck9wZXJhdG9yLlByb3BlcnR5SXNOdWxsIGFzIHN0cmluZ106IHtcbiAgICAgIHNwYXRpYWw6IGZhbHNlLFxuICAgICAgZmllbGRSZXN0cmljdDogW11cbiAgICB9LFxuICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5JbnRlcnNlY3RzIGFzIHN0cmluZ106IHtcbiAgICAgIHNwYXRpYWw6IHRydWUsXG4gICAgICBmaWVsZFJlc3RyaWN0OiBbXVxuICAgIH0sXG4gICAgW09nY0ZpbHRlck9wZXJhdG9yLldpdGhpbiBhcyBzdHJpbmddOiB7IHNwYXRpYWw6IHRydWUsIGZpZWxkUmVzdHJpY3Q6IFtdIH0sXG4gICAgW09nY0ZpbHRlck9wZXJhdG9yLkNvbnRhaW5zIGFzIHN0cmluZ106IHsgc3BhdGlhbDogdHJ1ZSwgZmllbGRSZXN0cmljdDogW10gfVxuICB9O1xuXG4gIGRlZmluZU9nY0ZpbHRlcnNEZWZhdWx0T3B0aW9ucyhcbiAgICBvZ2NGaWx0ZXJzT3B0aW9uczogT2djRmlsdGVyc09wdGlvbnMsXG4gICAgZmllbGROYW1lR2VvbWV0cnk6IHN0cmluZyxcbiAgICBzcmNUeXBlPzogc3RyaW5nXG4gICk6IE9nY0ZpbHRlcnNPcHRpb25zIHtcbiAgICBsZXQgb2djRmlsdGVyc0RlZmF1bHRWYWx1ZSA9IHRydWU7IC8vIGRlZmF1bHQgdmFsdWVzIGZvciB3ZnMuXG4gICAgaWYgKHNyY1R5cGUgJiYgc3JjVHlwZSA9PT0gJ3dtcycpIHtcbiAgICAgIG9nY0ZpbHRlcnNEZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvZ2NGaWx0ZXJzT3B0aW9ucyA9IG9nY0ZpbHRlcnNPcHRpb25zIHx8IHt9O1xuICAgIG9nY0ZpbHRlcnNPcHRpb25zLmVuYWJsZWQgPVxuICAgICAgb2djRmlsdGVyc09wdGlvbnMuZW5hYmxlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gb2djRmlsdGVyc0RlZmF1bHRWYWx1ZVxuICAgICAgICA6IG9nY0ZpbHRlcnNPcHRpb25zLmVuYWJsZWQ7XG4gICAgb2djRmlsdGVyc09wdGlvbnMuZWRpdGFibGUgPVxuICAgICAgb2djRmlsdGVyc09wdGlvbnMuZWRpdGFibGUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/IG9nY0ZpbHRlcnNEZWZhdWx0VmFsdWVcbiAgICAgICAgOiBvZ2NGaWx0ZXJzT3B0aW9ucy5lZGl0YWJsZTtcbiAgICBvZ2NGaWx0ZXJzT3B0aW9ucy5nZW9tZXRyeU5hbWUgPSBmaWVsZE5hbWVHZW9tZXRyeTtcblxuICAgIG9nY0ZpbHRlcnNPcHRpb25zLmFkdmFuY2VkT2djRmlsdGVycyA9IHRydWU7XG4gICAgaWYgKG9nY0ZpbHRlcnNPcHRpb25zLmVuYWJsZWQgJiYgKG9nY0ZpbHRlcnNPcHRpb25zLnB1c2hCdXR0b25zIHx8IG9nY0ZpbHRlcnNPcHRpb25zLmNoZWNrYm94ZXNcbiAgICAgIHx8IG9nY0ZpbHRlcnNPcHRpb25zLnJhZGlvQnV0dG9ucyB8fCBvZ2NGaWx0ZXJzT3B0aW9ucy5zZWxlY3QpKSB7XG4gICAgICBvZ2NGaWx0ZXJzT3B0aW9ucy5hZHZhbmNlZE9nY0ZpbHRlcnMgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9nY0ZpbHRlcnNPcHRpb25zO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkRmlsdGVyKFxuICAgIGZpbHRlcnM/OiBJZ29PZ2NGaWx0ZXJPYmplY3QsXG4gICAgZXh0ZW50PzogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0sXG4gICAgcHJvaj86IG9sUHJvamVjdGlvbixcbiAgICBmaWVsZE5hbWVHZW9tZXRyeT86IHN0cmluZyxcbiAgICBvcHRpb25zPzogT2djRmlsdGVyYWJsZURhdGFTb3VyY2VPcHRpb25zXG4gICk6IHN0cmluZyB7XG4gICAgbGV0IG91ckJib3hGaWx0ZXI7XG4gICAgbGV0IGVuYWJsZUJib3g6IGJvb2xlYW47XG4gICAgaWYgKC9pbnRlcnNlY3RzfGNvbnRhaW5zfHdpdGhpbi9naS50ZXN0KEpTT04uc3RyaW5naWZ5KGZpbHRlcnMpKSkge1xuICAgICAgZW5hYmxlQmJveCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmFibGVCYm94ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGZpbHRlcnMpIHtcbiAgICAgIGZpZWxkTmFtZUdlb21ldHJ5ID1cbiAgICAgICAgKGZpbHRlcnMgYXMgYW55KS5nZW9tZXRyeU5hbWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKGZpbHRlcnMgYXMgYW55KS5nZW9tZXRyeU5hbWVcbiAgICAgICAgICA6IGZpZWxkTmFtZUdlb21ldHJ5O1xuICAgIH1cbiAgICBpZiAoZXh0ZW50ICYmIGZpbHRlcnMpIHtcbiAgICAgIG91ckJib3hGaWx0ZXIgPSBvbGZpbHRlci5iYm94KGZpZWxkTmFtZUdlb21ldHJ5LCBleHRlbnQsIHByb2ouZ2V0Q29kZSgpKTtcbiAgICB9XG4gICAgbGV0IGZpbHRlckFzc2VtYmx5OiBPZ2NGaWx0ZXI7XG4gICAgaWYgKGZpbHRlcnMpIHtcbiAgICAgIGZpbHRlcnMgPSB0aGlzLmNoZWNrSWdvRmlsdGVyc1Byb3BlcnRpZXMoXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIGZpZWxkTmFtZUdlb21ldHJ5LFxuICAgICAgICBwcm9qXG4gICAgICApO1xuICAgICAgaWYgKGV4dGVudCAmJiBlbmFibGVCYm94KSB7XG4gICAgICAgIGZpbHRlckFzc2VtYmx5ID0gb2xmaWx0ZXIuYW5kKFxuICAgICAgICAgIG91ckJib3hGaWx0ZXIsXG4gICAgICAgICAgdGhpcy5idW5kbGVGaWx0ZXIoZmlsdGVycywgb3B0aW9ucylcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbHRlckFzc2VtYmx5ID0gdGhpcy5idW5kbGVGaWx0ZXIoZmlsdGVycywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnYmJveD0nICsgZXh0ZW50LmpvaW4oJywnKSArICcsJyArIHByb2ouZ2V0Q29kZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHdmc09wdGlvbnM6IFdyaXRlR2V0RmVhdHVyZU9wdGlvbnMgPSB7XG4gICAgICBzcnNOYW1lOiAnJyxcbiAgICAgIGZlYXR1cmVOUzogJycsXG4gICAgICBmZWF0dXJlUHJlZml4OiAnJyxcbiAgICAgIGZlYXR1cmVUeXBlczogWydmZWF0dXJlVHlwZXMnXSxcbiAgICAgIGZpbHRlcjogZmlsdGVyQXNzZW1ibHksXG4gICAgICBvdXRwdXRGb3JtYXQ6ICcnLFxuICAgICAgZ2VvbWV0cnlOYW1lOiBmaWVsZE5hbWVHZW9tZXRyeVxuICAgIH07XG5cbiAgICBjb25zdCBxdWVyeSA9IG5ldyBvbEZvcm1hdFdGUygpLndyaXRlR2V0RmVhdHVyZSh3ZnNPcHRpb25zKTtcbiAgICBjb25zdCBzdHIgPSBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKHF1ZXJ5KTtcbiAgICBjb25zdCByZWdleHAxID0gL3R5cGVuYW1lcyAqPXx0eXBlbmFtZSAqPVxcXCJmZWF0dXJlVHlwZXNcXFwiICo+L2dpO1xuICAgIGNvbnN0IHJlZ2V4cDIgPSAvPFxcL1F1ZXJ5PjxcXC9HZXRGZWF0dXJlPi9naTtcblxuICAgIHJldHVybiAnZmlsdGVyPScgKyBzdHIuc3BsaXQocmVnZXhwMSlbMV0uc3BsaXQocmVnZXhwMilbMF07XG4gIH1cblxuICBwcml2YXRlIGJ1bmRsZUZpbHRlcihcbiAgICBmaWx0ZXJPYmplY3Q6IGFueSxcbiAgICBvcHRpb25zPzogT2djRmlsdGVyYWJsZURhdGFTb3VyY2VPcHRpb25zXG4gICkge1xuICAgIGlmIChmaWx0ZXJPYmplY3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgY29uc3QgbG9naWNhbEFycmF5ID0gW107XG4gICAgICBmaWx0ZXJPYmplY3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBsb2dpY2FsQXJyYXkucHVzaCh0aGlzLmJ1bmRsZUZpbHRlcihlbGVtZW50LCBvcHRpb25zKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBsb2dpY2FsQXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmaWx0ZXJPYmplY3QuaGFzT3duUHJvcGVydHkoJ2xvZ2ljYWwnKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVGaWx0ZXIoXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3BlcmF0b3I6IGZpbHRlck9iamVjdC5sb2dpY2FsLFxuICAgICAgICAgICAgbG9naWNhbEFycmF5OiB0aGlzLmJ1bmRsZUZpbHRlcihmaWx0ZXJPYmplY3QuZmlsdGVycywgb3B0aW9ucylcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyT2JqZWN0Lmhhc093blByb3BlcnR5KCdvcGVyYXRvcicpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZpbHRlcihcbiAgICAgICAgICBmaWx0ZXJPYmplY3QgYXMgQW55QmFzZU9nY0ZpbHRlck9wdGlvbnMsXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRmlsdGVyKFxuICAgIGZpbHRlck9wdGlvbnMsXG4gICAgb3B0aW9ucz86IE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9uc1xuICApOiBPZ2NGaWx0ZXIge1xuICAgIGNvbnN0IG9wZXJhdG9yID0gZmlsdGVyT3B0aW9ucy5vcGVyYXRvcjtcbiAgICBjb25zdCBsb2dpY2FsQXJyYXkgPSBmaWx0ZXJPcHRpb25zLmxvZ2ljYWxBcnJheTtcblxuICAgIGNvbnN0IHdmc1Byb3BlcnR5TmFtZSA9IGZpbHRlck9wdGlvbnMucHJvcGVydHlOYW1lO1xuICAgIGNvbnN0IHdmc1BhdHRlcm4gPSBmaWx0ZXJPcHRpb25zLnBhdHRlcm47XG4gICAgY29uc3Qgd2ZzTWF0Y2hDYXNlID0gZmlsdGVyT3B0aW9ucy5tYXRjaENhc2VcbiAgICAgID8gZmlsdGVyT3B0aW9ucy5tYXRjaENhc2VcbiAgICAgIDogdHJ1ZTtcbiAgICBjb25zdCB3ZnNXaWxkQ2FyZCA9IGZpbHRlck9wdGlvbnMud2lsZENhcmQgPyBmaWx0ZXJPcHRpb25zLndpbGRDYXJkIDogJyonO1xuICAgIGNvbnN0IHdmc1NpbmdsZUNoYXIgPSBmaWx0ZXJPcHRpb25zLnNpbmdsZUNoYXJcbiAgICAgID8gZmlsdGVyT3B0aW9ucy5zaW5nbGVDaGFyXG4gICAgICA6ICcuJztcbiAgICBjb25zdCB3ZnNFc2NhcGVDaGFyID0gZmlsdGVyT3B0aW9ucy5lc2NhcGVDaGFyXG4gICAgICA/IGZpbHRlck9wdGlvbnMuZXNjYXBlQ2hhclxuICAgICAgOiAnISc7XG5cbiAgICBjb25zdCB3ZnNMb3dlckJvdW5kYXJ5ID0gZmlsdGVyT3B0aW9ucy5sb3dlckJvdW5kYXJ5O1xuICAgIGNvbnN0IHdmc1VwcGVyQm91bmRhcnkgPSBmaWx0ZXJPcHRpb25zLnVwcGVyQm91bmRhcnk7XG5cbiAgICBjb25zdCB3ZnNHZW9tZXRyeU5hbWUgPSBmaWx0ZXJPcHRpb25zLmdlb21ldHJ5TmFtZTtcbiAgICBjb25zdCB3ZnNFeHRlbnQgPSBmaWx0ZXJPcHRpb25zLmV4dGVudDtcbiAgICBjb25zdCB3ZnNXa3RHZW9tZXRyeSA9IGZpbHRlck9wdGlvbnMud2t0X2dlb21ldHJ5O1xuICAgIGNvbnN0IHdmc1Nyc05hbWUgPSBmaWx0ZXJPcHRpb25zLnNyc05hbWVcbiAgICAgID8gZmlsdGVyT3B0aW9ucy5zcnNOYW1lXG4gICAgICA6ICdFUFNHOjM4NTcnO1xuXG4gICAgY29uc3Qgd2ZzQmVnaW4gPSB0aGlzLnBhcnNlRmlsdGVyT3B0aW9uRGF0ZShcbiAgICAgIGZpbHRlck9wdGlvbnMuYmVnaW4sXG4gICAgICBvcHRpb25zID8gb3B0aW9ucy5taW5EYXRlIDogdW5kZWZpbmVkXG4gICAgKTtcbiAgICBjb25zdCB3ZnNFbmQgPSB0aGlzLnBhcnNlRmlsdGVyT3B0aW9uRGF0ZShcbiAgICAgIGZpbHRlck9wdGlvbnMuZW5kLFxuICAgICAgb3B0aW9ucyA/IG9wdGlvbnMubWF4RGF0ZSA6IHVuZGVmaW5lZFxuICAgICk7XG5cbiAgICBjb25zdCB3ZnNFeHByZXNzaW9uID0gZmlsdGVyT3B0aW9ucy5leHByZXNzaW9uO1xuXG4gICAgbGV0IGdlb21ldHJ5OiBvbEdlb21ldHJ5O1xuICAgIGlmICh3ZnNXa3RHZW9tZXRyeSkge1xuICAgICAgY29uc3Qgd2t0ID0gbmV3IG9sRm9ybWF0V0tUKCk7XG4gICAgICBnZW9tZXRyeSA9IHdrdC5yZWFkR2VvbWV0cnkod2ZzV2t0R2VvbWV0cnksIHtcbiAgICAgICAgZGF0YVByb2plY3Rpb246IHdmc1Nyc05hbWUsXG4gICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiB3ZnNTcnNOYW1lIHx8ICdFUFNHOjM4NTcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuQkJPWC50b0xvd2VyQ2FzZSgpOlxuICAgICAgICByZXR1cm4gb2xmaWx0ZXIuYmJveCh3ZnNHZW9tZXRyeU5hbWUsIHdmc0V4dGVudCwgd2ZzU3JzTmFtZSk7XG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yLlByb3BlcnR5SXNCZXR3ZWVuLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgIHJldHVybiBvbGZpbHRlci5iZXR3ZWVuKFxuICAgICAgICAgIHdmc1Byb3BlcnR5TmFtZSxcbiAgICAgICAgICB3ZnNMb3dlckJvdW5kYXJ5LFxuICAgICAgICAgIHdmc1VwcGVyQm91bmRhcnlcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuQ29udGFpbnMudG9Mb3dlckNhc2UoKTpcbiAgICAgICAgcmV0dXJuIG9sZmlsdGVyLmNvbnRhaW5zKHdmc0dlb21ldHJ5TmFtZSwgZ2VvbWV0cnksIHdmc1Nyc05hbWUpO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5EdXJpbmcudG9Mb3dlckNhc2UoKTpcbiAgICAgICAgcmV0dXJuIG9sZmlsdGVyLmR1cmluZyh3ZnNQcm9wZXJ0eU5hbWUsIHdmc0JlZ2luLCB3ZnNFbmQpO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzRXF1YWxUby50b0xvd2VyQ2FzZSgpOlxuICAgICAgICByZXR1cm4gb2xmaWx0ZXIuZXF1YWxUbyh3ZnNQcm9wZXJ0eU5hbWUsIHdmc0V4cHJlc3Npb24sIHdmc01hdGNoQ2FzZSk7XG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yLlByb3BlcnR5SXNHcmVhdGVyVGhhbi50b0xvd2VyQ2FzZSgpOlxuICAgICAgICByZXR1cm4gb2xmaWx0ZXIuZ3JlYXRlclRoYW4od2ZzUHJvcGVydHlOYW1lLCB3ZnNFeHByZXNzaW9uKTtcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0dyZWF0ZXJUaGFuT3JFcXVhbFRvLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgIHJldHVybiBvbGZpbHRlci5ncmVhdGVyVGhhbk9yRXF1YWxUbyh3ZnNQcm9wZXJ0eU5hbWUsIHdmc0V4cHJlc3Npb24pO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5JbnRlcnNlY3RzLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgIHJldHVybiBvbGZpbHRlci5pbnRlcnNlY3RzKHdmc0dlb21ldHJ5TmFtZSwgZ2VvbWV0cnksIHdmc1Nyc05hbWUpO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzTnVsbC50b0xvd2VyQ2FzZSgpOlxuICAgICAgICByZXR1cm4gb2xmaWx0ZXIuaXNOdWxsKHdmc1Byb3BlcnR5TmFtZSk7XG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yLlByb3BlcnR5SXNMZXNzVGhhbi50b0xvd2VyQ2FzZSgpOlxuICAgICAgICByZXR1cm4gb2xmaWx0ZXIubGVzc1RoYW4od2ZzUHJvcGVydHlOYW1lLCB3ZnNFeHByZXNzaW9uKTtcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0xlc3NUaGFuT3JFcXVhbFRvLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgIHJldHVybiBvbGZpbHRlci5sZXNzVGhhbk9yRXF1YWxUbyh3ZnNQcm9wZXJ0eU5hbWUsIHdmc0V4cHJlc3Npb24pO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzTGlrZS50b0xvd2VyQ2FzZSgpOlxuICAgICAgICByZXR1cm4gb2xmaWx0ZXIubGlrZShcbiAgICAgICAgICB3ZnNQcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgd2ZzUGF0dGVybi5yZXBsYWNlKC9bKClfXS9naSwgd2ZzU2luZ2xlQ2hhciksXG4gICAgICAgICAgd2ZzV2lsZENhcmQsXG4gICAgICAgICAgd2ZzU2luZ2xlQ2hhcixcbiAgICAgICAgICB3ZnNFc2NhcGVDaGFyLFxuICAgICAgICAgIHdmc01hdGNoQ2FzZVxuICAgICAgICApO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzTm90RXF1YWxUby50b0xvd2VyQ2FzZSgpOlxuICAgICAgICByZXR1cm4gb2xmaWx0ZXIubm90RXF1YWxUbyhcbiAgICAgICAgICB3ZnNQcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgd2ZzRXhwcmVzc2lvbixcbiAgICAgICAgICB3ZnNNYXRjaENhc2VcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3IuV2l0aGluLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgIHJldHVybiBvbGZpbHRlci53aXRoaW4od2ZzR2VvbWV0cnlOYW1lLCBnZW9tZXRyeSwgd2ZzU3JzTmFtZSk7XG4gICAgICAvLyBMT0dJQ0FMXG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yLkFuZC50b0xvd2VyQ2FzZSgpOlxuICAgICAgICByZXR1cm4gb2xmaWx0ZXIuYW5kLmFwcGx5KG51bGwsIGxvZ2ljYWxBcnJheSk7XG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yLk9yLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgIHJldHVybiBvbGZpbHRlci5vci5hcHBseShudWxsLCBsb2dpY2FsQXJyYXkpO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvci5Ob3QudG9Mb3dlckNhc2UoKTpcbiAgICAgICAgcmV0dXJuIG9sZmlsdGVyLm5vdC5hcHBseShudWxsLCBsb2dpY2FsQXJyYXkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZWZpbmVJbnRlcmZhY2VGaWx0ZXJTZXF1ZW5jZShcbiAgICBmaWx0ZXJPYmplY3Q6IGFueSxcbiAgICBnZW9tZXRyeU5hbWUsXG4gICAgbG9naWNhbCA9ICcnLFxuICAgIGxldmVsID0gLTFcbiAgKTogT2djSW50ZXJmYWNlRmlsdGVyT3B0aW9uc1tdIHtcbiAgICBpZiAoZmlsdGVyT2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGZpbHRlck9iamVjdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyU2VxdWVuY2UuY29uY2F0KFxuICAgICAgICAgIHRoaXMuZGVmaW5lSW50ZXJmYWNlRmlsdGVyU2VxdWVuY2UoXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgZ2VvbWV0cnlOYW1lLFxuICAgICAgICAgICAgbG9naWNhbCxcbiAgICAgICAgICAgIGxldmVsXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmaWx0ZXJPYmplY3QuaGFzT3duUHJvcGVydHkoJ2xvZ2ljYWwnKSkge1xuICAgICAgICBsZXZlbCA9IGxldmVsICsgMTtcbiAgICAgICAgdGhpcy5maWx0ZXJTZXF1ZW5jZS5jb25jYXQoXG4gICAgICAgICAgdGhpcy5kZWZpbmVJbnRlcmZhY2VGaWx0ZXJTZXF1ZW5jZShcbiAgICAgICAgICAgIGZpbHRlck9iamVjdC5maWx0ZXJzLFxuICAgICAgICAgICAgZ2VvbWV0cnlOYW1lLFxuICAgICAgICAgICAgZmlsdGVyT2JqZWN0LmxvZ2ljYWwsXG4gICAgICAgICAgICBsZXZlbFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyT2JqZWN0Lmhhc093blByb3BlcnR5KCdvcGVyYXRvcicpKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyU2VxdWVuY2UucHVzaChcbiAgICAgICAgICB0aGlzLmFkZEludGVyZmFjZUZpbHRlcihmaWx0ZXJPYmplY3QsIGdlb21ldHJ5TmFtZSwgbGV2ZWwsIGxvZ2ljYWwpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbHRlclNlcXVlbmNlO1xuICB9XG5cbiAgcHVibGljIGNvbXB1dGVBbGxvd2VkT3BlcmF0b3JzKFxuICAgIGZpZWxkcz86IFNvdXJjZUZpZWxkc09wdGlvbnNQYXJhbXNbXSxcbiAgICBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcsXG4gICAgZGVmYXVsdE9wZXJhdG9yc1R5cGU/OiBPZ2NGaWx0ZXJPcGVyYXRvclR5cGVcbiAgKSB7XG4gICAgbGV0IGVmZmVjdGl2ZU9wZXJhdG9yczoge30gPSB7fTtcbiAgICBsZXQgYWxsb3dlZE9wZXJhdG9ycztcbiAgICBsZXQgZmllbGRzSGFzU3BhdGlhbE9wZXJhdG9yOiBib29sZWFuO1xuICAgIGxldCBpbmNsdWRlQ29udGFpbnM6IGJvb2xlYW47XG5cbiAgICBpZiAoZmllbGRzICYmIHByb3BlcnR5TmFtZSkge1xuICAgICAgY29uc3Qgc3JjRmllbGQgPSBmaWVsZHMuZmluZCgoZmllbGQpID0+IGZpZWxkLm5hbWUgPT09IHByb3BlcnR5TmFtZSk7XG4gICAgICBhbGxvd2VkT3BlcmF0b3JzID1cbiAgICAgICAgc3JjRmllbGQgJiYgc3JjRmllbGQuYWxsb3dlZE9wZXJhdG9yc1R5cGVcbiAgICAgICAgICA/IHNyY0ZpZWxkLmFsbG93ZWRPcGVyYXRvcnNUeXBlXG4gICAgICAgICAgOiBkZWZhdWx0T3BlcmF0b3JzVHlwZTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGRzKSB7XG4gICAgICBmaWVsZHMubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoIWZpZWxkLmFsbG93ZWRPcGVyYXRvcnNUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbG93ZWRPcGVyYXRvcnNUeXBlID0gZmllbGQuYWxsb3dlZE9wZXJhdG9yc1R5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGFsbG93ZWRPcGVyYXRvcnNUeXBlID09PSBPZ2NGaWx0ZXJPcGVyYXRvclR5cGUuQWxsLnRvTG93ZXJDYXNlKCkgfHxcbiAgICAgICAgICBhbGxvd2VkT3BlcmF0b3JzVHlwZSA9PT1cbiAgICAgICAgICAgIE9nY0ZpbHRlck9wZXJhdG9yVHlwZS5TcGF0aWFsLnRvTG93ZXJDYXNlKCkgfHxcbiAgICAgICAgICBhbGxvd2VkT3BlcmF0b3JzVHlwZSA9PT1cbiAgICAgICAgICAgIE9nY0ZpbHRlck9wZXJhdG9yVHlwZS5CYXNpY0FuZFNwYXRpYWwudG9Mb3dlckNhc2UoKVxuICAgICAgICApIHtcbiAgICAgICAgICBmaWVsZHNIYXNTcGF0aWFsT3BlcmF0b3IgPSB0cnVlO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGFsbG93ZWRPcGVyYXRvcnNUeXBlID09PSBPZ2NGaWx0ZXJPcGVyYXRvclR5cGUuQWxsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGluY2x1ZGVDb250YWlucyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhbGxvd2VkT3BlcmF0b3JzID0gYWxsb3dlZE9wZXJhdG9yc1xuICAgICAgPyBhbGxvd2VkT3BlcmF0b3JzXG4gICAgICA6IE9nY0ZpbHRlck9wZXJhdG9yVHlwZS5CYXNpY0FuZFNwYXRpYWw7XG5cbiAgICBzd2l0Y2ggKGFsbG93ZWRPcGVyYXRvcnMudG9Mb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvclR5cGUuQWxsOlxuICAgICAgICBlZmZlY3RpdmVPcGVyYXRvcnMgPSB0aGlzLm9wZXJhdG9ycztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yVHlwZS5TcGF0aWFsOlxuICAgICAgICBlZmZlY3RpdmVPcGVyYXRvcnMgPSB7XG4gICAgICAgICAgW09nY0ZpbHRlck9wZXJhdG9yLkludGVyc2VjdHNdOiB7IHNwYXRpYWw6IHRydWUsIGZpZWxkUmVzdHJpY3Q6IFtdIH0sXG4gICAgICAgICAgW09nY0ZpbHRlck9wZXJhdG9yLldpdGhpbl06IHsgc3BhdGlhbDogdHJ1ZSwgZmllbGRSZXN0cmljdDogW10gfVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgT2djRmlsdGVyT3BlcmF0b3JUeXBlLkJhc2ljQW5kU3BhdGlhbDpcbiAgICAgICAgZWZmZWN0aXZlT3BlcmF0b3JzID0ge1xuICAgICAgICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzRXF1YWxUb106IHtcbiAgICAgICAgICAgIHNwYXRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgZmllbGRSZXN0cmljdDogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzTm90RXF1YWxUb106IHtcbiAgICAgICAgICAgIHNwYXRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgZmllbGRSZXN0cmljdDogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5JbnRlcnNlY3RzXTogeyBzcGF0aWFsOiB0cnVlLCBmaWVsZFJlc3RyaWN0OiBbXSB9LFxuICAgICAgICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5XaXRoaW5dOiB7IHNwYXRpYWw6IHRydWUsIGZpZWxkUmVzdHJpY3Q6IFtdIH1cbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE9nY0ZpbHRlck9wZXJhdG9yVHlwZS5CYXNpYzpcbiAgICAgICAgZWZmZWN0aXZlT3BlcmF0b3JzID0ge1xuICAgICAgICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzRXF1YWxUb106IHtcbiAgICAgICAgICAgIHNwYXRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgZmllbGRSZXN0cmljdDogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5Qcm9wZXJ0eUlzTm90RXF1YWxUb106IHtcbiAgICAgICAgICAgIHNwYXRpYWw6IGZhbHNlLFxuICAgICAgICAgICAgZmllbGRSZXN0cmljdDogW11cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvclR5cGUuVGltZTpcbiAgICAgICAgZWZmZWN0aXZlT3BlcmF0b3JzID0ge1xuICAgICAgICAgIFtPZ2NGaWx0ZXJPcGVyYXRvci5EdXJpbmddOiB7IHNwYXRpYWw6IGZhbHNlLCBmaWVsZFJlc3RyaWN0OiBbXSB9XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPZ2NGaWx0ZXJPcGVyYXRvclR5cGUuQmFzaWNOdW1lcmljT3BlcmF0b3I6XG4gICAgICAgIGVmZmVjdGl2ZU9wZXJhdG9ycyA9IHtcbiAgICAgICAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0VxdWFsVG9dOiB7XG4gICAgICAgICAgICBzcGF0aWFsOiBmYWxzZSxcbiAgICAgICAgICAgIGZpZWxkUmVzdHJpY3Q6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc05vdEVxdWFsVG9dOiB7XG4gICAgICAgICAgICBzcGF0aWFsOiBmYWxzZSxcbiAgICAgICAgICAgIGZpZWxkUmVzdHJpY3Q6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0dyZWF0ZXJUaGFuXToge1xuICAgICAgICAgICAgc3BhdGlhbDogZmFsc2UsXG4gICAgICAgICAgICBmaWVsZFJlc3RyaWN0OiBbJ251bWJlciddXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0dyZWF0ZXJUaGFuT3JFcXVhbFRvXToge1xuICAgICAgICAgICAgc3BhdGlhbDogZmFsc2UsXG4gICAgICAgICAgICBmaWVsZFJlc3RyaWN0OiBbJ251bWJlciddXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0xlc3NUaGFuXToge1xuICAgICAgICAgICAgc3BhdGlhbDogZmFsc2UsXG4gICAgICAgICAgICBmaWVsZFJlc3RyaWN0OiBbJ251bWJlciddXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0xlc3NUaGFuT3JFcXVhbFRvXToge1xuICAgICAgICAgICAgc3BhdGlhbDogZmFsc2UsXG4gICAgICAgICAgICBmaWVsZFJlc3RyaWN0OiBbJ251bWJlciddXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVmZmVjdGl2ZU9wZXJhdG9ycyA9IHtcbiAgICAgICAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc0VxdWFsVG9dOiB7XG4gICAgICAgICAgICBzcGF0aWFsOiBmYWxzZSxcbiAgICAgICAgICAgIGZpZWxkUmVzdHJpY3Q6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbT2djRmlsdGVyT3BlcmF0b3IuUHJvcGVydHlJc05vdEVxdWFsVG9dOiB7XG4gICAgICAgICAgICBzcGF0aWFsOiBmYWxzZSxcbiAgICAgICAgICAgIGZpZWxkUmVzdHJpY3Q6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbT2djRmlsdGVyT3BlcmF0b3IuSW50ZXJzZWN0c106IHsgc3BhdGlhbDogdHJ1ZSwgZmllbGRSZXN0cmljdDogW10gfSxcbiAgICAgICAgICBbT2djRmlsdGVyT3BlcmF0b3IuV2l0aGluXTogeyBzcGF0aWFsOiB0cnVlLCBmaWVsZFJlc3RyaWN0OiBbXSB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkc0hhc1NwYXRpYWxPcGVyYXRvcikge1xuICAgICAgKGVmZmVjdGl2ZU9wZXJhdG9ycyBhcyBhbnkpLkludGVyc2VjdHMgPSB7XG4gICAgICAgIHNwYXRpYWw6IHRydWUsXG4gICAgICAgIGZpZWxkUmVzdHJpY3Q6IFtdXG4gICAgICB9O1xuICAgICAgKGVmZmVjdGl2ZU9wZXJhdG9ycyBhcyBhbnkpLldpdGhpbiA9IHsgc3BhdGlhbDogdHJ1ZSwgZmllbGRSZXN0cmljdDogW10gfTtcbiAgICAgIGlmIChpbmNsdWRlQ29udGFpbnMpIHtcbiAgICAgICAgKGVmZmVjdGl2ZU9wZXJhdG9ycyBhcyBhbnkpLkNvbnRhaW5zID0ge1xuICAgICAgICAgIHNwYXRpYWw6IHRydWUsXG4gICAgICAgICAgZmllbGRSZXN0cmljdDogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWZmZWN0aXZlT3BlcmF0b3JzO1xuICB9XG5cbiAgcHVibGljIGFkZEludGVyZmFjZUZpbHRlcihcbiAgICBpZ29PZ2NGaWx0ZXJPYmplY3Q/LFxuICAgIGdlb21ldHJ5TmFtZT8sXG4gICAgbGV2ZWwgPSAwLFxuICAgIHBhcmVudExvZ2ljYWwgPSAnT3InXG4gICk6IE9nY0ludGVyZmFjZUZpbHRlck9wdGlvbnMge1xuICAgIGlmICghaWdvT2djRmlsdGVyT2JqZWN0KSB7XG4gICAgICBpZ29PZ2NGaWx0ZXJPYmplY3QgPSB7IG9wZXJhdG9yOiAnUHJvcGVydHlJc0VxdWFsVG8nIH07XG4gICAgfVxuICAgIGNvbnN0IGYgPSB7XG4gICAgICBwcm9wZXJ0eU5hbWU6ICcnLFxuICAgICAgb3BlcmF0b3I6ICcnLFxuICAgICAgYWN0aXZlOiAnJyxcbiAgICAgIGZpbHRlcmlkOiB1dWlkKCksXG4gICAgICBzdGVwOiAnJyxcbiAgICAgIGJlZ2luOiAnJyxcbiAgICAgIGVuZDogJycsXG4gICAgICBzbGlkZXJPcHRpb25zOiB7fSxcbiAgICAgIGxvd2VyQm91bmRhcnk6ICcnLFxuICAgICAgdXBwZXJCb3VuZGFyeTogJycsXG4gICAgICBleHByZXNzaW9uOiAnJyxcbiAgICAgIHBhdHRlcm46ICcnLFxuICAgICAgd2lsZENhcmQ6ICcqJyxcbiAgICAgIHNpbmdsZUNoYXI6ICcuJyxcbiAgICAgIGVzY2FwZUNoYXI6ICchJyxcbiAgICAgIG1hdGNoQ2FzZTogdHJ1ZSxcbiAgICAgIGlnb1NwYXRpYWxTZWxlY3RvcjogJycsXG4gICAgICBpZ29TTlJDOiAnJyxcbiAgICAgIGdlb21ldHJ5TmFtZTogJycsXG4gICAgICBnZW9tZXRyeTogJycsXG4gICAgICB3a3RfZ2VvbWV0cnk6ICcnLFxuICAgICAgZXh0ZW50OiAnJyxcbiAgICAgIHNyc05hbWU6ICcnLFxuICAgICAgcGFyZW50TG9naWNhbDogJycsXG4gICAgICBsZXZlbDogMFxuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgIGYsXG4gICAgICB7XG4gICAgICAgIHBhcmVudExvZ2ljYWwsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBnZW9tZXRyeU5hbWVcbiAgICAgIH0sXG4gICAgICBpZ29PZ2NGaWx0ZXJPYmplY3RcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNoZWNrSWdvRmlsdGVyc1Byb3BlcnRpZXMoXG4gICAgZmlsdGVyT2JqZWN0OiBhbnksXG4gICAgZmllbGROYW1lR2VvbWV0cnksXG4gICAgcHJvajogb2xQcm9qZWN0aW9uLFxuICAgIGFjdGl2ZSA9IGZhbHNlXG4gICkge1xuICAgIGNvbnN0IGZpbHRlckFycmF5ID0gW107XG4gICAgaWYgKGZpbHRlck9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmaWx0ZXJPYmplY3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBmaWx0ZXJBcnJheS5wdXNoKFxuICAgICAgICAgIHRoaXMuY2hlY2tJZ29GaWx0ZXJzUHJvcGVydGllcyhcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICBmaWVsZE5hbWVHZW9tZXRyeSxcbiAgICAgICAgICAgIHByb2osXG4gICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmaWx0ZXJBcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbHRlck9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnbG9naWNhbCcpKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvZ2ljYWw6IGZpbHRlck9iamVjdC5sb2dpY2FsLFxuICAgICAgICAgICAgZmlsdGVyczogdGhpcy5jaGVja0lnb0ZpbHRlcnNQcm9wZXJ0aWVzKFxuICAgICAgICAgICAgICBmaWx0ZXJPYmplY3QuZmlsdGVycyxcbiAgICAgICAgICAgICAgZmllbGROYW1lR2VvbWV0cnksXG4gICAgICAgICAgICAgIHByb2osXG4gICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyT2JqZWN0Lmhhc093blByb3BlcnR5KCdvcGVyYXRvcicpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEZpbHRlclByb3BlcnRpZXMoXG4gICAgICAgICAgZmlsdGVyT2JqZWN0IGFzIE9nY0ludGVyZmFjZUZpbHRlck9wdGlvbnMsXG4gICAgICAgICAgZmllbGROYW1lR2VvbWV0cnksXG4gICAgICAgICAgcHJvaixcbiAgICAgICAgICBhY3RpdmVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEZpbHRlclByb3BlcnRpZXMoXG4gICAgaWdvT2djRmlsdGVyT2JqZWN0OiBPZ2NJbnRlcmZhY2VGaWx0ZXJPcHRpb25zLFxuICAgIGZpZWxkTmFtZUdlb21ldHJ5LFxuICAgIHByb2o6IG9sUHJvamVjdGlvbixcbiAgICBhY3RpdmUgPSBmYWxzZVxuICApIHtcbiAgICBjb25zdCBmaWx0ZXJpZCA9IGlnb09nY0ZpbHRlck9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnZmlsdGVyaWQnKVxuICAgICAgPyBpZ29PZ2NGaWx0ZXJPYmplY3QuZmlsdGVyaWRcbiAgICAgIDogdXVpZCgpO1xuICAgIGNvbnN0IHN0YXR1cyA9IGlnb09nY0ZpbHRlck9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnYWN0aXZlJylcbiAgICAgID8gaWdvT2djRmlsdGVyT2JqZWN0LmFjdGl2ZVxuICAgICAgOiBhY3RpdmU7XG5cbiAgICBjb25zdCBzcnNOYW1lID0gaWdvT2djRmlsdGVyT2JqZWN0Lmhhc093blByb3BlcnR5KCdzcnNOYW1lJylcbiAgICAgID8gaWdvT2djRmlsdGVyT2JqZWN0LnNyc05hbWVcbiAgICAgIDogcHJvalxuICAgICAgPyBwcm9qLmdldENvZGUoKVxuICAgICAgOiAnRVBTRzozODU3JztcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIGZpbHRlcmlkLFxuICAgICAgICBhY3RpdmU6IHN0YXR1cyxcbiAgICAgICAgaWdvU3BhdGlhbFNlbGVjdG9yOiAnZml4ZWRFeHRlbnQnLFxuICAgICAgICBzcnNOYW1lXG4gICAgICB9LFxuICAgICAgaWdvT2djRmlsdGVyT2JqZWN0LFxuICAgICAgeyBnZW9tZXRyeU5hbWU6IGZpZWxkTmFtZUdlb21ldHJ5IH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHJlYnVpbHRJZ29PZ2NGaWx0ZXJPYmplY3RGcm9tU2VxdWVuY2UoXG4gICAgc2VxdWVuY2U6IE9nY0ludGVyZmFjZUZpbHRlck9wdGlvbnNbXVxuICApOiBJZ29PZ2NGaWx0ZXJPYmplY3Qge1xuICAgIGlmIChzZXF1ZW5jZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID49IDEpIHtcbiAgICAgICAgbGV0IGxhc3RQYXJlbnRMb2dpY2FsID0gc2VxdWVuY2VbMF0ucGFyZW50TG9naWNhbDtcbiAgICAgICAgbGV0IG5leHRFbGVtZW50OiBhbnk7XG4gICAgICAgIGxldCBsb2dpY2FsQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RQcm9jZXNzZWRGaWx0ZXI7XG4gICAgICAgIHNlcXVlbmNlLmZvckVhY2goKHVpRmlsdGVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IE9iamVjdC5hc3NpZ24oe30sIHVpRmlsdGVyKTtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHNlcXVlbmNlLmluZGV4T2YodWlGaWx0ZXIpO1xuICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgc2VxdWVuY2UubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbmV4dEVsZW1lbnQgPSBzZXF1ZW5jZVtpbmRleCArIDFdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmFjdGl2ZTtcbiAgICAgICAgICBkZWxldGUgZWxlbWVudC5maWx0ZXJpZDtcbiAgICAgICAgICBkZWxldGUgZWxlbWVudC5wYXJlbnRMb2dpY2FsO1xuICAgICAgICAgIGxvZ2ljYWxBcnJheS5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGFzdFByb2Nlc3NlZEZpbHRlciA9IGVsZW1lbnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChsYXN0UGFyZW50TG9naWNhbCAhPT0gbmV4dEVsZW1lbnQucGFyZW50TG9naWNhbCkge1xuICAgICAgICAgICAgaWYgKGxvZ2ljYWxBcnJheS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ1lvdSBtdXN0IHNldCBhdCAnICtcbiAgICAgICAgICAgICAgICAgICdsZWFzdCB0d28gb3BlcmF0b3IgaW4gYSBsb2dpY2FsICgnICtcbiAgICAgICAgICAgICAgICAgIGxhc3RQYXJlbnRMb2dpY2FsICtcbiAgICAgICAgICAgICAgICAgICcpJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGFzdFByb2Nlc3NlZEZpbHRlciA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgeyBsb2dpY2FsOiBsYXN0UGFyZW50TG9naWNhbCwgZmlsdGVyczogbG9naWNhbEFycmF5IH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgbG9naWNhbEFycmF5ID0gW2xhc3RQcm9jZXNzZWRGaWx0ZXJdO1xuICAgICAgICAgICAgICBsYXN0UGFyZW50TG9naWNhbCA9IG5leHRFbGVtZW50LnBhcmVudExvZ2ljYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxhc3RQcm9jZXNzZWRGaWx0ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZUlnb1NlbGVjdG9yKHNlbGVjdG9yczogSWdvT2djU2VsZWN0b3IpOiBJZ29PZ2NTZWxlY3RvciB7XG4gICAgaWYgKFxuICAgICAgc2VsZWN0b3JzLmdyb3Vwcy5ldmVyeSgoZ3JvdXApID0+IGdyb3VwLmNvbXB1dGVkU2VsZWN0b3JzICE9PSB1bmRlZmluZWQpXG4gICAgKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0b3I6IElnb09nY1NlbGVjdG9yO1xuICAgIGlmIChzZWxlY3RvcnMuZ3JvdXBzICYmIHNlbGVjdG9ycy5idW5kbGVzKSB7XG4gICAgICBpZiAoIXNlbGVjdG9ycy5idW5kbGVzLmV2ZXJ5KChidW5kbGUpID0+IGJ1bmRsZS5pZCAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1lvdSBtdXN0IHNldCBhbiBpZCBmb3IgZWFjaCBvZiB5b3VyIGJ1bmRsZXMnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBzZWxlY3RvciA9IE9iamVjdFV0aWxzLmNvcHlEZWVwKHNlbGVjdG9ycyk7XG4gICAgICBzZWxlY3Rvci5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgZ3JvdXAudGl0bGUgPSBncm91cC50aXRsZSA/IGdyb3VwLnRpdGxlIDogZ3JvdXAubmFtZTtcbiAgICAgICAgZ3JvdXAuZW5hYmxlZCA9IGdyb3VwLmVuYWJsZWQgPyBncm91cC5lbmFibGVkIDogZmFsc2U7XG4gICAgICAgIGdyb3VwLmNvbXB1dGVkU2VsZWN0b3JzID0gT2JqZWN0VXRpbHMuY29weURlZXAoXG4gICAgICAgICAgc2VsZWN0b3IuYnVuZGxlcy5maWx0ZXIoKGIpID0+IGdyb3VwLmlkcy5pbmNsdWRlcyhiLmlkKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXNlbGVjdG9ycy5ncm91cHMgJiYgc2VsZWN0b3JzLmJ1bmRsZXMpIHtcbiAgICAgIHNlbGVjdG9yID0gT2JqZWN0VXRpbHMuY29weURlZXAoc2VsZWN0b3JzKTtcbiAgICAgIHNlbGVjdG9yLmdyb3VwcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnZ3JvdXAxJyxcbiAgICAgICAgICBuYW1lOiAnZ3JvdXAxJyxcbiAgICAgICAgICBjb21wdXRlZFNlbGVjdG9yczogT2JqZWN0VXRpbHMuY29weURlZXAoc2VsZWN0b3IuYnVuZGxlcylcbiAgICAgICAgfSBhcyBTZWxlY3Rvckdyb3VwXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RvciA9IHtcbiAgICAgICAgYnVuZGxlczogc2VsZWN0b3JzIGFzIGFueSxcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdncm91cDEnLFxuICAgICAgICAgICAgbmFtZTogJ2dyb3VwMScsXG4gICAgICAgICAgICBjb21wdXRlZFNlbGVjdG9yczogT2JqZWN0VXRpbHMuY29weURlZXAoXG4gICAgICAgICAgICAgIHNlbGVjdG9yc1xuICAgICAgICAgICAgKSBhcyBPZ2NTZWxlY3RvckJ1bmRsZVtdXG4gICAgICAgICAgfSBhcyBTZWxlY3Rvckdyb3VwXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9yVHlwZTogc2VsZWN0b3Iuc2VsZWN0b3JUeXBlXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoIXNlbGVjdG9yLmdyb3Vwcy5maW5kKChzZWxlY3Rvckdyb3VwKSA9PiBzZWxlY3Rvckdyb3VwLmVuYWJsZWQpKSB7XG4gICAgICBzZWxlY3Rvci5ncm91cHNbMF0uZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVPZ2NGaWx0ZXJzQXBwbGllZFZhbHVlKFxuICAgIG9wdGlvbnM6IE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucyxcbiAgICBmaWVsZE5hbWVHZW9tZXRyeTogc3RyaW5nLFxuICAgIGV4dGVudD86IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICAgIHByb2o/OiBvbFByb2plY3Rpb25cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBvZ2NGaWx0ZXJzID0gb3B0aW9ucy5vZ2NGaWx0ZXJzO1xuICAgIGlmICghb2djRmlsdGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25kaXRpb25zID0gW107XG4gICAgbGV0IGZpbHRlclF1ZXJ5U3RyaW5nU2VsZWN0b3IgPSAnJztcbiAgICBsZXQgZmlsdGVyUXVlcnlTdHJpbmdBZHZhbmNlZEZpbHRlcnMgPSAnJztcbiAgICBpZiAob2djRmlsdGVycy5lbmFibGVkICYmIChvZ2NGaWx0ZXJzLnB1c2hCdXR0b25zIHx8IG9nY0ZpbHRlcnMuY2hlY2tib3hlcyB8fCBvZ2NGaWx0ZXJzLnJhZGlvQnV0dG9ucyB8fCBvZ2NGaWx0ZXJzLnNlbGVjdCkpIHtcbiAgICAgIGxldCBzZWxlY3RvcnM7XG4gICAgICBpZiAob2djRmlsdGVycy5wdXNoQnV0dG9ucykge1xuICAgICAgICBzZWxlY3RvcnMgPSBvZ2NGaWx0ZXJzLnB1c2hCdXR0b25zO1xuICAgICAgICBjb25zdCBwdXNoQ29uZGl0aW9ucyA9IHRoaXMuZm9ybWF0R3JvdXBBbmRGaWx0ZXIob2djRmlsdGVycywgc2VsZWN0b3JzKTtcbiAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2YgcHVzaENvbmRpdGlvbnMpIHtcbiAgICAgICAgICBjb25kaXRpb25zLnB1c2goY29uZGl0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9nY0ZpbHRlcnMuY2hlY2tib3hlcykge1xuICAgICAgICBzZWxlY3RvcnMgPSBvZ2NGaWx0ZXJzLmNoZWNrYm94ZXM7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94Q29uZGl0aW9ucyA9IHRoaXMuZm9ybWF0R3JvdXBBbmRGaWx0ZXIob2djRmlsdGVycywgc2VsZWN0b3JzKTtcbiAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2YgY2hlY2tib3hDb25kaXRpb25zKSB7XG4gICAgICAgICAgY29uZGl0aW9ucy5wdXNoKGNvbmRpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvZ2NGaWx0ZXJzLnJhZGlvQnV0dG9ucykge1xuICAgICAgICBzZWxlY3RvcnMgPSBvZ2NGaWx0ZXJzLnJhZGlvQnV0dG9ucztcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzQ29yciA9IHRoaXMudmVyaWZ5TXVsdGlwbGVFbmFibGVkcyhzZWxlY3RvcnMpO1xuICAgICAgICBjb25zdCByYWRpb0NvbmRpdGlvbnMgPSB0aGlzLmZvcm1hdEdyb3VwQW5kRmlsdGVyKG9nY0ZpbHRlcnMsIHNlbGVjdG9yc0NvcnIpO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbmRpdGlvbiBvZiByYWRpb0NvbmRpdGlvbnMpIHtcbiAgICAgICAgICBjb25kaXRpb25zLnB1c2goY29uZGl0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9nY0ZpbHRlcnMuc2VsZWN0KSB7XG4gICAgICAgIHNlbGVjdG9ycyA9IG9nY0ZpbHRlcnMuc2VsZWN0O1xuICAgICAgICBjb25zdCBzZWxlY3RvcnNDb3JyID0gdGhpcy52ZXJpZnlNdWx0aXBsZUVuYWJsZWRzKHNlbGVjdG9ycyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdENvbmRpdGlvbnMgPSB0aGlzLmZvcm1hdEdyb3VwQW5kRmlsdGVyKG9nY0ZpbHRlcnMsIHNlbGVjdG9yc0NvcnIpO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbmRpdGlvbiBvZiBzZWxlY3RDb25kaXRpb25zKSB7XG4gICAgICAgICAgY29uZGl0aW9ucy5wdXNoKGNvbmRpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmRpdGlvbnMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgZmlsdGVyUXVlcnlTdHJpbmdTZWxlY3RvciA9IHRoaXMuYnVpbGRGaWx0ZXIoXG4gICAgICAgICAgY29uZGl0aW9ucy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgID8gY29uZGl0aW9uc1swXVxuICAgICAgICAgICAgOiB7IGxvZ2ljYWw6ICdBbmQnLCBmaWx0ZXJzOiBjb25kaXRpb25zIH0sXG4gICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgIHByb2osXG4gICAgICAgICAgb2djRmlsdGVycy5nZW9tZXRyeU5hbWVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9nY0ZpbHRlcnMuZW5hYmxlZCAmJiBvZ2NGaWx0ZXJzLmZpbHRlcnMpIHtcbiAgICAgIG9nY0ZpbHRlcnMuZ2VvbWV0cnlOYW1lID0gb2djRmlsdGVycy5nZW9tZXRyeU5hbWUgfHwgZmllbGROYW1lR2VvbWV0cnk7XG4gICAgICBjb25zdCBpZ29GaWx0ZXJzID0gb2djRmlsdGVycy5maWx0ZXJzO1xuICAgICAgZmlsdGVyUXVlcnlTdHJpbmdBZHZhbmNlZEZpbHRlcnMgPSB0aGlzLmJ1aWxkRmlsdGVyKFxuICAgICAgICBpZ29GaWx0ZXJzLFxuICAgICAgICBleHRlbnQsXG4gICAgICAgIHByb2osXG4gICAgICAgIG9nY0ZpbHRlcnMuZ2VvbWV0cnlOYW1lLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBmaWx0ZXJRdWVyeVN0cmluZyA9IG9nY0ZpbHRlcnMuYWR2YW5jZWRPZ2NGaWx0ZXJzXG4gICAgICA/IGZpbHRlclF1ZXJ5U3RyaW5nQWR2YW5jZWRGaWx0ZXJzXG4gICAgICA6IGZpbHRlclF1ZXJ5U3RyaW5nU2VsZWN0b3I7XG4gICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ3dtcycpIHtcbiAgICAgIGZpbHRlclF1ZXJ5U3RyaW5nID0gdGhpcy5mb3JtYXRQcm9jZXNzZWRPZ2NGaWx0ZXIoXG4gICAgICAgIGZpbHRlclF1ZXJ5U3RyaW5nLFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLnBhcmFtcy5MQVlFUlNcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICd3ZnMnKSB7XG4gICAgICBmaWx0ZXJRdWVyeVN0cmluZyA9IHRoaXMuZm9ybWF0UHJvY2Vzc2VkT2djRmlsdGVyKFxuICAgICAgICBmaWx0ZXJRdWVyeVN0cmluZyxcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5wYXJhbXMuZmVhdHVyZVR5cGVzXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXJRdWVyeVN0cmluZztcbiAgfVxuXG4gIHB1YmxpYyB2ZXJpZnlNdWx0aXBsZUVuYWJsZWRzKHNlbGVjdG9ycykge1xuICAgIHNlbGVjdG9ycy5idW5kbGVzLmZvckVhY2goYnVuZGxlID0+IHtcbiAgICAgIGlmICghYnVuZGxlLm11bHRpcGxlKSB7XG4gICAgICAgIGNvbnN0IGVuYWJsZWRzID0gYnVuZGxlLnNlbGVjdG9ycy5yZWR1Y2UoKGxpc3QsIGZpbHRlciwgaW5kZXgpID0+IChmaWx0ZXIuZW5hYmxlZCkgPT09IHRydWUgPyBsaXN0LmNvbmNhdChpbmRleCkgOiBsaXN0LCBbXSk7XG4gICAgICAgIGlmIChlbmFibGVkcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZW5hYmxlZHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgIGVuYWJsZWRzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgYnVuZGxlLnNlbGVjdG9yc1tpbmRleF0uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRHcm91cEFuZEZpbHRlcihvZ2NGaWx0ZXJzOiBPZ2NGaWx0ZXJzT3B0aW9ucywgc2VsZWN0b3JzKSB7XG4gICAgc2VsZWN0b3JzID0gdGhpcy5jb21wdXRlSWdvU2VsZWN0b3IoXG4gICAgICBzZWxlY3RvcnNcbiAgICApO1xuICAgIGNvbnN0IHNlbGVjdG9yQnVuZGxlID0gc2VsZWN0b3JzLmdyb3Vwcy5maW5kKFxuICAgICAgKGcpID0+IGcuZW5hYmxlZFxuICAgICkuY29tcHV0ZWRTZWxlY3RvcnM7XG4gICAgY29uc3QgY29uZGl0aW9ucyA9IFtdO1xuICAgIHNlbGVjdG9yQnVuZGxlLm1hcCgoYnVuZGxlKSA9PiB7XG4gICAgICBjb25zdCBidW5kbGVDb25kaXRpb24gPSBbXTtcbiAgICAgIGNvbnN0IHNlbGVjdG9yc1R5cGUgPSBidW5kbGUuc2VsZWN0b3JzIGFzIGFueTtcbiAgICAgIGlmICghc2VsZWN0b3JzVHlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWxlY3RvcnNUeXBlXG4gICAgICAgIC5maWx0ZXIoKG9nY3NlbGVjdG9yKSA9PiBvZ2NzZWxlY3Rvci5lbmFibGVkID09PSB0cnVlKVxuICAgICAgICAuZm9yRWFjaCgoZW5hYmxlZFNlbGVjdG9yKSA9PiBidW5kbGVDb25kaXRpb24ucHVzaChlbmFibGVkU2VsZWN0b3IuZmlsdGVycykpO1xuICAgICAgaWYgKGJ1bmRsZUNvbmRpdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uZGl0aW9ucy5wdXNoKGJ1bmRsZUNvbmRpdGlvblswXSk7XG4gICAgICB9IGVsc2UgaWYgKGJ1bmRsZUNvbmRpdGlvbi5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbmRpdGlvbnMucHVzaCh7XG4gICAgICAgICAgbG9naWNhbDogYnVuZGxlLmxvZ2ljYWwsXG4gICAgICAgICAgZmlsdGVyczogYnVuZGxlQ29uZGl0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHNlbGVjdG9ycy5zZWxlY3RvclR5cGUgPT09ICdwdXNoQnV0dG9uJykge1xuICAgICAgb2djRmlsdGVycy5wdXNoQnV0dG9ucyA9IHNlbGVjdG9ycztcbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9ycy5zZWxlY3RvclR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIG9nY0ZpbHRlcnMuY2hlY2tib3hlcyA9IHNlbGVjdG9ycztcbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9ycy5zZWxlY3RvclR5cGUgPT09ICdyYWRpb0J1dHRvbicpIHtcbiAgICAgIG9nY0ZpbHRlcnMucmFkaW9CdXR0b25zID0gc2VsZWN0b3JzO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3JzLnNlbGVjdG9yVHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIG9nY0ZpbHRlcnMuc2VsZWN0ID0gc2VsZWN0b3JzO1xuICAgIH1cbiAgICByZXR1cm4gY29uZGl0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRQcm9jZXNzZWRPZ2NGaWx0ZXIoXG4gICAgcHJvY2Vzc2VkRmlsdGVyOiBzdHJpbmcsXG4gICAgbGF5ZXJzT3JUeXBlbmFtZXM6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuXG4gICAgaWYgKCFwcm9jZXNzZWRGaWx0ZXIpIHtyZXR1cm4gdW5kZWZpbmVkO307XG4gICAgbGV0IGFwcGxpZWRGaWx0ZXIgPSAnJztcbiAgICBpZiAocHJvY2Vzc2VkRmlsdGVyLmxlbmd0aCA9PT0gMCAmJiBsYXllcnNPclR5cGVuYW1lcy5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgICBhcHBsaWVkRmlsdGVyID0gcHJvY2Vzc2VkRmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllcnNPclR5cGVuYW1lcy5zcGxpdCgnLCcpLmZvckVhY2goKGxheWVyT3JUeXBlbmFtZXMpID0+IHtcbiAgICAgICAgYXBwbGllZEZpbHRlciA9IGAke2FwcGxpZWRGaWx0ZXJ9KCR7cHJvY2Vzc2VkRmlsdGVyLnJlcGxhY2UoXG4gICAgICAgICAgJ2ZpbHRlcj0nLFxuICAgICAgICAgICcnXG4gICAgICAgICl9KWA7XG4gICAgICB9KTtcbiAgICB9XG4gICAgYXBwbGllZEZpbHRlciA9IGFwcGxpZWRGaWx0ZXIucmVwbGFjZSgvXFwoXFwpL2csICcnKTtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9XG4gICAgICBhcHBsaWVkRmlsdGVyLmxlbmd0aCA+IDBcbiAgICAgICAgPyBhcHBsaWVkRmlsdGVyLnJlcGxhY2UoJ2ZpbHRlcj0nLCAnJylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGZpbHRlclZhbHVlO1xuICB9XG5cbiAgcHVibGljIHBhcnNlRmlsdGVyT3B0aW9uRGF0ZSh2YWx1ZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3RvZGF5Jykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKG1vbWVudCh2YWx1ZSkuaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=