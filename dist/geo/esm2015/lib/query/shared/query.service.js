import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as striptags_ from 'striptags';
import * as olformat from 'ol/format';
import * as olextent from 'ol/extent';
import olFormatGML2 from 'ol/format/GML2';
import olFormatGML3 from 'ol/format/GML3';
import olFormatEsriJSON from 'ol/format/EsriJSON';
import * as olgeom from 'ol/geom';
import { uuid } from '@igo2/utils';
import { FEATURE } from '../../feature/shared/feature.enums';
import { WMSDataSource, CartoDataSource, TileArcGISRestDataSource, ImageArcGISRestDataSource } from '../../datasource';
import { QueryFormat, QueryFormatMimeType, QueryHtmlTarget } from './query.enums';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class QueryService {
    constructor(http) {
        this.http = http;
        this.queryEnabled = true;
    }
    query(layers, options) {
        return layers
            .filter((layer) => layer.visible && layer.isInResolutionsRange)
            .map((layer) => this.queryLayer(layer, options));
    }
    queryLayer(layer, options) {
        const url = this.getQueryUrl(layer.dataSource, options, false, layer.map.viewController.getExtent());
        if (!url) {
            return of([]);
        }
        if (layer.dataSource.options.queryFormat ===
            QueryFormat.HTMLGML2) {
            const urlGml = this.getQueryUrl(layer.dataSource, options, true);
            return this.http.get(urlGml, { responseType: 'text' }).pipe(mergeMap(gmlRes => {
                const mergedGML = this.mergeGML(gmlRes, url, layer);
                const imposedGeom = mergedGML[0];
                const imposedProperties = mergedGML[1];
                return this.http
                    .get(url, { responseType: 'text' })
                    .pipe(map(res => this.extractData(res, layer, options, url, imposedGeom, imposedProperties)));
            }));
        }
        const request = this.http.get(url, { responseType: 'text' });
        return request.pipe(map(res => this.extractData(res, layer, options, url)));
    }
    mergeGML(gmlRes, url, layer) {
        var _a, _b;
        const parser = new olFormatGML2();
        let features = parser.readFeatures(gmlRes);
        // Handle non standard GML output (MapServer)
        if (features.length === 0) {
            const wmsParser = new olformat.WMSGetFeatureInfo();
            features = wmsParser.readFeatures(gmlRes);
        }
        const olmline = new olgeom.MultiLineString([]);
        let pts;
        const ptsArray = [];
        let olmpoly = new olgeom.MultiPolygon([]);
        let firstFeatureType;
        const nbFeatures = features.length;
        // Check if geometry intersect bbox
        // for geoserver getfeatureinfo response in data projection, not call projection
        const searchParams = this.getQueryParams(url.toLowerCase());
        const bboxRaw = searchParams.bbox;
        const bbox = bboxRaw.split(',');
        const bboxExtent = olextent.createEmpty();
        olextent.extend(bboxExtent, bbox);
        const outBboxExtent = false;
        let titleContent;
        let queryTileField;
        if ((_b = (_a = layer.options) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.options) {
            const dataSourceOptions = layer.options.source
                .options;
            if (dataSourceOptions.queryTitle) {
                queryTileField = dataSourceOptions.queryTitle;
            }
        }
        features.map(feature => {
            if (queryTileField) {
                let queryTitleContent = feature.getProperties()[queryTileField];
                if (queryTitleContent) {
                    titleContent = !titleContent ? queryTitleContent : `${titleContent},${queryTitleContent}`;
                }
            }
            /*  if (!feature.getGeometry().simplify(100).intersectsExtent(bboxExtent)) {
              outBboxExtent = true;
              // TODO: Check to project the geometry?
            }*/
            const featureGeometryCoordinates = feature.getGeometry().getCoordinates();
            const featureGeometryType = feature.getGeometry().getType();
            if (!firstFeatureType && !outBboxExtent) {
                firstFeatureType = featureGeometryType;
            }
            if (!outBboxExtent) {
                switch (featureGeometryType) {
                    case 'Point':
                        if (nbFeatures === 1) {
                            pts = new olgeom.Point(featureGeometryCoordinates, 'XY');
                        }
                        else {
                            ptsArray.push(featureGeometryCoordinates);
                        }
                        break;
                    case 'LineString':
                        olmline.appendLineString(new olgeom.LineString(featureGeometryCoordinates, 'XY'));
                        break;
                    case 'Polygon':
                        olmpoly.appendPolygon(new olgeom.Polygon(featureGeometryCoordinates, 'XY'));
                        break;
                    case 'MultiPolygon':
                        olmpoly = new olgeom.MultiPolygon(featureGeometryCoordinates, 'XY');
                        break;
                    default:
                        return;
                }
            }
        });
        let olmpts;
        if (ptsArray.length === 0 && pts) {
            olmpts = {
                type: pts.getType(),
                coordinates: pts.getCoordinates()
            };
        }
        else {
            olmpts = {
                type: 'Polygon',
                coordinates: [this.convexHull(ptsArray)]
            };
        }
        let returnGeometry;
        switch (firstFeatureType) {
            case 'LineString':
                returnGeometry = {
                    type: olmline.getType(),
                    coordinates: olmline.getCoordinates()
                };
            case 'Point':
                return olmpts;
            case 'Polygon':
                returnGeometry = {
                    type: olmpoly.getType(),
                    coordinates: olmpoly.getCoordinates()
                };
            case 'MultiPolygon':
                returnGeometry = {
                    type: olmpoly.getType(),
                    coordinates: olmpoly.getCoordinates()
                };
        }
        const imposedProperties = {};
        if (queryTileField) {
            imposedProperties[queryTileField] = titleContent;
        }
        return [returnGeometry, imposedProperties];
    }
    cross(a, b, o) {
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    }
    /**
     * @param points An array of [X, Y] coordinates
     * This method is use instead of turf.js convexHull because Turf needs at least 3 point to make a hull.
     * https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain#JavaScript
     */
    convexHull(points) {
        points.sort((a, b) => {
            return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
        });
        const lower = [];
        for (const point of points) {
            while (lower.length >= 2 &&
                this.cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
                lower.pop();
            }
            lower.push(point);
        }
        const upper = [];
        for (let i = points.length - 1; i >= 0; i--) {
            while (upper.length >= 2 &&
                this.cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
                upper.pop();
            }
            upper.push(points[i]);
        }
        upper.pop();
        lower.pop();
        return lower.concat(upper);
    }
    extractData(res, layer, options, url, imposedGeometry, imposedProperties) {
        const queryDataSource = layer.dataSource;
        const allowedFieldsAndAlias = this.getAllowedFieldsAndAlias(layer);
        let features = [];
        switch (queryDataSource.options.queryFormat) {
            case QueryFormat.GML3:
                features = this.extractGML3Data(res, layer.zIndex, allowedFieldsAndAlias);
                break;
            case QueryFormat.JSON:
            case QueryFormat.GEOJSON:
            case QueryFormat.GEOJSON2:
                features = this.extractGeoJSONData(res, layer.zIndex, allowedFieldsAndAlias);
                break;
            case QueryFormat.ESRIJSON:
                features = this.extractEsriJSONData(res, layer.zIndex, allowedFieldsAndAlias);
                break;
            case QueryFormat.TEXT:
                features = this.extractTextData(res);
                break;
            case QueryFormat.HTML:
                features = this.extractHtmlData(res, queryDataSource.queryHtmlTarget, url);
                break;
            case QueryFormat.HTMLGML2:
                features = this.extractHtmlData(res, queryDataSource.queryHtmlTarget, url, imposedGeometry, imposedProperties);
                break;
            case QueryFormat.GML2:
            default:
                features = this.extractGML2Data(res, layer, allowedFieldsAndAlias);
                break;
        }
        if (features.length > 0 && features[0].geometry === null) {
            const geomToAdd = this.createGeometryFromUrlClick(url);
            for (const feature of features) {
                feature.geometry = geomToAdd;
            }
        }
        return features.map((feature, index) => {
            var _a;
            const mapLabel = feature.properties[queryDataSource.mapLabel];
            let exclude;
            if (((_a = layer.options.sourceOptions) === null || _a === void 0 ? void 0 : _a.type) === 'wms') {
                const sourceOptions = layer.options
                    .sourceOptions;
                exclude = sourceOptions ? sourceOptions.excludeAttribute : undefined;
            }
            let title = this.getQueryTitle(feature, layer);
            if (!title && features.length > 1) {
                title = `${layer.title} (${index + 1})`;
            }
            else if (!title) {
                title = layer.title;
            }
            const meta = Object.assign({}, feature.meta || {}, {
                id: uuid(),
                title,
                mapTitle: mapLabel,
                sourceTitle: layer.title,
                order: 1000 - layer.zIndex,
                excludeAttribute: exclude
            });
            return Object.assign(feature, {
                meta,
                projection: queryDataSource.options.type === 'carto'
                    ? 'EPSG:4326'
                    : options.projection
            });
        });
    }
    createGeometryFromUrlClick(url) {
        const searchParams = this.getQueryParams(url.toLowerCase());
        const bboxRaw = searchParams.bbox;
        const width = parseInt(searchParams.width, 10);
        const height = parseInt(searchParams.height, 10);
        const xPosition = parseInt(searchParams.i || searchParams.x, 10);
        const yPosition = parseInt(searchParams.j || searchParams.y, 10);
        const bbox = bboxRaw.split(',');
        let threshold = (Math.abs(parseFloat(bbox[0])) - Math.abs(parseFloat(bbox[2]))) * 0.05;
        // for context in degree (EPSG:4326,4269...)
        if (Math.abs(parseFloat(bbox[0])) < 180) {
            threshold = 0.045;
        }
        const clickx = parseFloat(bbox[0]) +
            (Math.abs(parseFloat(bbox[0]) - parseFloat(bbox[2])) * xPosition) /
                width -
            threshold;
        const clicky = parseFloat(bbox[1]) +
            (Math.abs(parseFloat(bbox[1]) - parseFloat(bbox[3])) * yPosition) /
                height -
            threshold;
        const clickx1 = clickx + threshold * 2;
        const clicky1 = clicky + threshold * 2;
        const wktPoly = 'POLYGON((' +
            clickx +
            ' ' +
            clicky +
            ', ' +
            clickx +
            ' ' +
            clicky1 +
            ', ' +
            clickx1 +
            ' ' +
            clicky1 +
            ', ' +
            clickx1 +
            ' ' +
            clicky +
            ', ' +
            clickx +
            ' ' +
            clicky +
            '))';
        const format = new olformat.WKT();
        const tenPercentWidthGeom = format.readFeature(wktPoly);
        const f = tenPercentWidthGeom.getGeometry();
        const newGeom = {
            type: f.getType(),
            coordinates: f.getCoordinates()
        };
        return newGeom;
    }
    extractGML2Data(res, zIndex, allowedFieldsAndAlias) {
        const parser = new olFormatGML2();
        let features = parser.readFeatures(res);
        // Handle non standard GML output (MapServer)
        if (features.length === 0) {
            const wmsParser = new olformat.WMSGetFeatureInfo();
            try {
                features = wmsParser.readFeatures(res);
            }
            catch (e) {
                console.warn('query.service: Multipolygons are badly managed in mapserver in GML2. Use another format.');
            }
        }
        return features.map(feature => this.featureToResult(feature, zIndex, allowedFieldsAndAlias));
    }
    extractGML3Data(res, zIndex, allowedFieldsAndAlias) {
        const parser = new olFormatGML3();
        let features = [];
        try {
            features = parser.readFeatures(res);
        }
        catch (e) {
            console.warn('query.service: GML3 is not well supported');
        }
        return features.map(feature => this.featureToResult(feature, zIndex, allowedFieldsAndAlias));
    }
    extractGeoJSONData(res, zIndex, allowedFieldsAndAlias) {
        let features = [];
        try {
            features = JSON.parse(res.replace(/(\r|\n)/g, ' ')).features;
        }
        catch (e) {
            console.warn('query.service: Unable to parse geojson', '\n', res);
        }
        features.map(feature => feature.meta = {
            id: uuid(),
            order: 1000 - zIndex,
            alias: allowedFieldsAndAlias
        });
        return features;
    }
    extractEsriJSONData(res, zIndex, allowedFieldsAndAlias) {
        if (res) {
            try {
                if (JSON.parse(res).error) {
                    return [];
                }
            }
            catch (e) { }
        }
        const parser = new olFormatEsriJSON();
        const features = parser.readFeatures(res);
        return features.map(feature => this.featureToResult(feature, zIndex, allowedFieldsAndAlias));
    }
    extractTextData(res) {
        // TODO
        return [];
    }
    extractHtmlData(res, htmlTarget, url, imposedGeometry, imposedProperties) {
        const searchParams = this.getQueryParams(url.toLowerCase());
        const projection = searchParams.crs || searchParams.srs || 'EPSG:3857';
        const geomToAdd = this.createGeometryFromUrlClick(url);
        if (htmlTarget !== QueryHtmlTarget.BLANK &&
            htmlTarget !== QueryHtmlTarget.IFRAME) {
            htmlTarget = QueryHtmlTarget.IFRAME;
        }
        const bodyTagStart = res.toLowerCase().indexOf('<body>');
        const bodyTagEnd = res.toLowerCase().lastIndexOf('</body>') + 7;
        // replace \r \n  and ' ' with '' to validate if the body is really empty. Clear all the html tags from body
        const striptags = striptags_;
        const body = striptags(res.slice(bodyTagStart, bodyTagEnd).replace(/(\r|\n|\s)/g, ''));
        if (body === '' || res === '') {
            return [];
        }
        return [
            {
                type: FEATURE,
                projection,
                properties: Object.assign({ target: htmlTarget, body: res, url }, imposedProperties),
                geometry: imposedGeometry || geomToAdd
            }
        ];
    }
    getQueryParams(url) {
        const queryString = url.split('?');
        if (!queryString[1]) {
            return;
        }
        const pairs = queryString[1].split('&');
        const result = {};
        pairs.forEach(pair => {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '');
        });
        return result;
    }
    featureToResult(featureOL, zIndex, allowedFieldsAndAlias) {
        const featureGeometry = featureOL.getGeometry();
        const properties = Object.assign({}, featureOL.getProperties());
        delete properties.geometry;
        delete properties.GEOMETRIE;
        delete properties.boundedBy;
        delete properties.shape;
        delete properties.SHAPE;
        delete properties.the_geom;
        delete properties.geom;
        let geometry;
        if (featureGeometry) {
            geometry = {
                type: featureGeometry.getType(),
                coordinates: featureGeometry.getCoordinates()
            };
        }
        return {
            type: FEATURE,
            projection: undefined,
            properties,
            geometry,
            meta: {
                id: uuid(),
                order: 1000 - zIndex,
                alias: allowedFieldsAndAlias
            }
        };
    }
    getQueryUrl(datasource, options, forceGML2 = false, mapExtent) {
        let url;
        if (datasource.options.queryUrl) {
            return this.getCustomQueryUrl(datasource, options, mapExtent);
        }
        switch (datasource.constructor) {
            case WMSDataSource:
                const wmsDatasource = datasource;
                const WMSGetFeatureInfoOptions = {
                    INFO_FORMAT: wmsDatasource.params.INFO_FORMAT ||
                        this.getMimeInfoFormat(datasource.options.queryFormat),
                    QUERY_LAYERS: wmsDatasource.params.LAYERS,
                    FEATURE_COUNT: wmsDatasource.params.FEATURE_COUNT || '5'
                };
                if (forceGML2) {
                    WMSGetFeatureInfoOptions.INFO_FORMAT = this.getMimeInfoFormat(QueryFormat.GML2);
                }
                url = wmsDatasource.ol.getFeatureInfoUrl(options.coordinates, options.resolution, options.projection, WMSGetFeatureInfoOptions);
                // const wmsVersion =
                //   wmsDatasource.params.VERSION ||
                //   wmsDatasource.params.version ||
                //   '1.3.0';
                // if (wmsVersion !== '1.3.0') {
                //   url = url.replace('&I=', '&X=');
                //   url = url.replace('&J=', '&Y=');
                // }
                break;
            case CartoDataSource:
                const cartoDatasource = datasource;
                const baseUrl = 'https://' +
                    cartoDatasource.options.account +
                    '.carto.com/api/v2/sql?';
                const format = 'format=GeoJSON';
                const sql = '&q=' + cartoDatasource.options.config.layers[0].options.sql;
                const clause = ' WHERE ST_Intersects(the_geom_webmercator,ST_BUFFER(ST_SetSRID(ST_POINT(';
                const meters = cartoDatasource.options.queryPrecision
                    ? cartoDatasource.options.queryPrecision
                    : '1000';
                const coordinates = options.coordinates[0] +
                    ',' +
                    options.coordinates[1] +
                    '),3857),' +
                    meters +
                    '))';
                url = `${baseUrl}${format}${sql}${clause}${coordinates}`;
                break;
            case ImageArcGISRestDataSource:
            case TileArcGISRestDataSource:
                const tileArcGISRestDatasource = datasource;
                const deltaX = Math.abs(mapExtent[0] - mapExtent[2]);
                const deltaY = Math.abs(mapExtent[1] - mapExtent[3]);
                const maxDelta = deltaX > deltaY ? deltaX : deltaY;
                const clickBuffer = maxDelta * 0.005;
                const threshold = tileArcGISRestDatasource.options.queryPrecision ? tileArcGISRestDatasource.options.queryPrecision : clickBuffer;
                const extent = olextent.buffer(olextent.boundingExtent([options.coordinates]), threshold);
                const serviceUrl = tileArcGISRestDatasource.options.url +
                    '/' +
                    tileArcGISRestDatasource.options.layer +
                    '/query/';
                const geometry = encodeURIComponent('{"xmin":' +
                    extent[0] +
                    ',"ymin":' +
                    extent[1] +
                    ',"xmax":' +
                    extent[2] +
                    ',"ymax":' +
                    extent[3] +
                    ',"spatialReference":{"wkid":102100}}');
                const params = [
                    'f=json',
                    `geometry=${geometry}`,
                    'geometryType=esriGeometryEnvelope',
                    'inSR=102100',
                    'spatialRel=esriSpatialRelIntersects',
                    'outFields=*',
                    'returnGeometry=true',
                    'outSR=102100'
                ];
                url = `${serviceUrl}?${params.join('&')}`;
                break;
            default:
                break;
        }
        return url;
    }
    getMimeInfoFormat(queryFormat) {
        let mime = 'application/vnd.ogc.gml';
        const keyEnum = Object.keys(QueryFormat).find(key => QueryFormat[key] === queryFormat);
        if (keyEnum) {
            mime = QueryFormatMimeType[keyEnum];
        }
        return mime;
    }
    getAllowedFieldsAndAlias(layer) {
        var _a, _b, _c;
        let allowedFieldsAndAlias;
        if (((_c = (_b = (_a = layer.options) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.sourceFields) &&
            layer.options.source.options.sourceFields.length >= 1) {
            allowedFieldsAndAlias = {};
            layer.options.source.options.sourceFields.forEach(sourceField => {
                const alias = sourceField.alias ? sourceField.alias : sourceField.name;
                allowedFieldsAndAlias[sourceField.name] = alias;
            });
        }
        return allowedFieldsAndAlias;
    }
    getQueryTitle(feature, layer) {
        var _a, _b;
        let title;
        if ((_b = (_a = layer.options) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.options) {
            const dataSourceOptions = layer.options.source
                .options;
            if (dataSourceOptions.queryTitle) {
                title = this.getLabelMatch(feature, dataSourceOptions.queryTitle);
            }
        }
        return title;
    }
    getLabelMatch(feature, labelMatch) {
        let label = labelMatch;
        const labelToGet = Array.from(labelMatch.matchAll(/\$\{([^\{\}]+)\}/g));
        labelToGet.forEach(v => {
            label = label.replace(v[0], feature.properties[v[1]]);
        });
        // Nothing done? check feature's attribute
        if (labelToGet.length === 0 && label === labelMatch) {
            label = feature.properties[labelMatch] || labelMatch;
        }
        return label;
    }
    /**
     * @param datasource QueryableDataSource
     * @param options QueryOptions
     * @mapExtent extent of the map when click event
     *
     */
    getCustomQueryUrl(datasource, options, mapExtent) {
        let url = datasource.options.queryUrl.replace(/\{xmin\}/g, mapExtent[0].toString())
            .replace(/\{ymin\}/g, mapExtent[1].toString())
            .replace(/\{xmax\}/g, mapExtent[2].toString())
            .replace(/\{ymax\}/g, mapExtent[3].toString())
            .replace(/\{x\}/g, options.coordinates[0].toString())
            .replace(/\{y\}/g, options.coordinates[1].toString())
            .replace(/\{resolution\}/g, options.resolution.toString())
            .replace(/\{srid\}/g, options.projection.replace('EPSG:', ''));
        return url;
    }
}
QueryService.ɵfac = function QueryService_Factory(t) { return new (t || QueryService)(i0.ɵɵinject(i1.HttpClient)); };
QueryService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: QueryService, factory: QueryService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QueryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3F1ZXJ5L3NoYXJlZC9xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxDQUFDO0FBRXhDLE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sWUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sWUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sZ0JBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFFbEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFN0QsT0FBTyxFQUNMLGFBQWEsRUFDYixlQUFlLEVBQ2Ysd0JBQXdCLEVBRXhCLHlCQUF5QixFQUMxQixNQUFNLGtCQUFrQixDQUFDO0FBRTFCLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7OztBQVd2QixNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjdCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO0lBRVksQ0FBQztJQUV4QyxLQUFLLENBQUMsTUFBZSxFQUFFLE9B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QUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDN0MsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3BELE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwRCxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN6RCxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTlELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7d0VBL3NCUSxZQUFZO2tFQUFaLFlBQVksV0FBWixZQUFZLG1CQUZYLE1BQU07dUZBRVAsWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIHN0cmlwdGFnc18gZnJvbSAnc3RyaXB0YWdzJztcblxuaW1wb3J0ICogYXMgb2xmb3JtYXQgZnJvbSAnb2wvZm9ybWF0JztcbmltcG9ydCAqIGFzIG9sZXh0ZW50IGZyb20gJ29sL2V4dGVudCc7XG5pbXBvcnQgb2xGb3JtYXRHTUwyIGZyb20gJ29sL2Zvcm1hdC9HTUwyJztcbmltcG9ydCBvbEZvcm1hdEdNTDMgZnJvbSAnb2wvZm9ybWF0L0dNTDMnO1xuaW1wb3J0IG9sRm9ybWF0RXNyaUpTT04gZnJvbSAnb2wvZm9ybWF0L0VzcmlKU09OJztcbmltcG9ydCBvbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQgKiBhcyBvbGdlb20gZnJvbSAnb2wvZ2VvbSc7XG5cbmltcG9ydCB7IHV1aWQgfSBmcm9tICdAaWdvMi91dGlscyc7XG5pbXBvcnQgeyBGZWF0dXJlLCBGZWF0dXJlR2VvbWV0cnkgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NoYXJlZC9mZWF0dXJlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgRkVBVFVSRSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUuZW51bXMnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi8uLi9sYXllci9zaGFyZWQvbGF5ZXJzL2xheWVyJztcbmltcG9ydCB7XG4gIFdNU0RhdGFTb3VyY2UsXG4gIENhcnRvRGF0YVNvdXJjZSxcbiAgVGlsZUFyY0dJU1Jlc3REYXRhU291cmNlLFxuICBXTVNEYXRhU291cmNlT3B0aW9ucyxcbiAgSW1hZ2VBcmNHSVNSZXN0RGF0YVNvdXJjZVxufSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcblxuaW1wb3J0IHtcbiAgUXVlcnlGb3JtYXQsXG4gIFF1ZXJ5Rm9ybWF0TWltZVR5cGUsXG4gIFF1ZXJ5SHRtbFRhcmdldFxufSBmcm9tICcuL3F1ZXJ5LmVudW1zJztcbmltcG9ydCB7XG4gIFF1ZXJ5T3B0aW9ucyxcbiAgUXVlcnlhYmxlRGF0YVNvdXJjZSxcbiAgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnNcbn0gZnJvbSAnLi9xdWVyeS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IE1hcEV4dGVudCB9IGZyb20gJy4uLy4uL21hcC9zaGFyZWQvbWFwLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFF1ZXJ5U2VydmljZSB7XG4gIHB1YmxpYyBxdWVyeUVuYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBxdWVyeShsYXllcnM6IExheWVyW10sIG9wdGlvbnM6IFF1ZXJ5T3B0aW9ucyk6IE9ic2VydmFibGU8RmVhdHVyZVtdPltdIHtcbiAgICByZXR1cm4gbGF5ZXJzXG4gICAgICAuZmlsdGVyKChsYXllcjogTGF5ZXIpID0+IGxheWVyLnZpc2libGUgJiYgbGF5ZXIuaXNJblJlc29sdXRpb25zUmFuZ2UpXG4gICAgICAubWFwKChsYXllcjogTGF5ZXIpID0+IHRoaXMucXVlcnlMYXllcihsYXllciwgb3B0aW9ucykpO1xuICB9XG5cbiAgcXVlcnlMYXllcihsYXllcjogTGF5ZXIsIG9wdGlvbnM6IFF1ZXJ5T3B0aW9ucyk6IE9ic2VydmFibGU8RmVhdHVyZVtdPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRRdWVyeVVybChsYXllci5kYXRhU291cmNlLCBvcHRpb25zLCBmYWxzZSwgbGF5ZXIubWFwLnZpZXdDb250cm9sbGVyLmdldEV4dGVudCgpKTtcbiAgICBpZiAoIXVybCkge1xuICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAobGF5ZXIuZGF0YVNvdXJjZSBhcyBRdWVyeWFibGVEYXRhU291cmNlKS5vcHRpb25zLnF1ZXJ5Rm9ybWF0ID09PVxuICAgICAgUXVlcnlGb3JtYXQuSFRNTEdNTDJcbiAgICApIHtcbiAgICAgIGNvbnN0IHVybEdtbCA9IHRoaXMuZ2V0UXVlcnlVcmwobGF5ZXIuZGF0YVNvdXJjZSwgb3B0aW9ucywgdHJ1ZSk7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmxHbWwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoZ21sUmVzID0+IHtcbiAgICAgICAgICBjb25zdCBtZXJnZWRHTUwgPSB0aGlzLm1lcmdlR01MKGdtbFJlcywgdXJsLCBsYXllcik7XG4gICAgICAgICAgY29uc3QgaW1wb3NlZEdlb20gPSBtZXJnZWRHTUxbMF07XG4gICAgICAgICAgY29uc3QgaW1wb3NlZFByb3BlcnRpZXMgPSBtZXJnZWRHTUxbMV07XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLmdldCh1cmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAocmVzID0+XG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0RGF0YShyZXMsIGxheWVyLCBvcHRpb25zLCB1cmwsIGltcG9zZWRHZW9tLCBpbXBvc2VkUHJvcGVydGllcylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuaHR0cC5nZXQodXJsLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pO1xuICAgIHJldHVybiByZXF1ZXN0LnBpcGUobWFwKHJlcyA9PiB0aGlzLmV4dHJhY3REYXRhKHJlcywgbGF5ZXIsIG9wdGlvbnMsIHVybCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VHTUwoZ21sUmVzLCB1cmwsIGxheWVyOiBMYXllcik6IFtGZWF0dXJlR2VvbWV0cnksIHsgW2tleTogc3RyaW5nXTogYW55IH1dIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgb2xGb3JtYXRHTUwyKCk7XG4gICAgbGV0IGZlYXR1cmVzID0gcGFyc2VyLnJlYWRGZWF0dXJlcyhnbWxSZXMpO1xuICAgIC8vIEhhbmRsZSBub24gc3RhbmRhcmQgR01MIG91dHB1dCAoTWFwU2VydmVyKVxuICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHdtc1BhcnNlciA9IG5ldyBvbGZvcm1hdC5XTVNHZXRGZWF0dXJlSW5mbygpO1xuICAgICAgZmVhdHVyZXMgPSB3bXNQYXJzZXIucmVhZEZlYXR1cmVzKGdtbFJlcyk7XG4gICAgfVxuICAgIGNvbnN0IG9sbWxpbmUgPSBuZXcgb2xnZW9tLk11bHRpTGluZVN0cmluZyhbXSk7XG4gICAgbGV0IHB0cztcbiAgICBjb25zdCBwdHNBcnJheSA9IFtdO1xuICAgIGxldCBvbG1wb2x5ID0gbmV3IG9sZ2VvbS5NdWx0aVBvbHlnb24oW10pO1xuICAgIGxldCBmaXJzdEZlYXR1cmVUeXBlO1xuICAgIGNvbnN0IG5iRmVhdHVyZXMgPSBmZWF0dXJlcy5sZW5ndGg7XG5cbiAgICAvLyBDaGVjayBpZiBnZW9tZXRyeSBpbnRlcnNlY3QgYmJveFxuICAgIC8vIGZvciBnZW9zZXJ2ZXIgZ2V0ZmVhdHVyZWluZm8gcmVzcG9uc2UgaW4gZGF0YSBwcm9qZWN0aW9uLCBub3QgY2FsbCBwcm9qZWN0aW9uXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zOiBhbnkgPSB0aGlzLmdldFF1ZXJ5UGFyYW1zKHVybC50b0xvd2VyQ2FzZSgpKTtcbiAgICBjb25zdCBiYm94UmF3ID0gc2VhcmNoUGFyYW1zLmJib3g7XG4gICAgY29uc3QgYmJveCA9IGJib3hSYXcuc3BsaXQoJywnKTtcbiAgICBjb25zdCBiYm94RXh0ZW50ID0gb2xleHRlbnQuY3JlYXRlRW1wdHkoKTtcbiAgICBvbGV4dGVudC5leHRlbmQoYmJveEV4dGVudCwgYmJveCk7XG4gICAgY29uc3Qgb3V0QmJveEV4dGVudCA9IGZhbHNlO1xuICAgIGxldCB0aXRsZUNvbnRlbnQ7XG4gICAgbGV0IHF1ZXJ5VGlsZUZpZWxkO1xuICAgIGlmIChsYXllci5vcHRpb25zPy5zb3VyY2U/Lm9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VPcHRpb25zID0gbGF5ZXIub3B0aW9ucy5zb3VyY2VcbiAgICAgICAgLm9wdGlvbnMgYXMgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnM7XG4gICAgICBpZiAoZGF0YVNvdXJjZU9wdGlvbnMucXVlcnlUaXRsZSkge1xuICAgICAgICBxdWVyeVRpbGVGaWVsZCA9IGRhdGFTb3VyY2VPcHRpb25zLnF1ZXJ5VGl0bGU7XG4gICAgICB9XG4gICAgfVxuICAgIGZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcblxuICAgICAgaWYgKHF1ZXJ5VGlsZUZpZWxkKSB7XG4gICAgICAgIGxldCBxdWVyeVRpdGxlQ29udGVudCA9IGZlYXR1cmUuZ2V0UHJvcGVydGllcygpW3F1ZXJ5VGlsZUZpZWxkXTtcbiAgICAgICAgaWYgKHF1ZXJ5VGl0bGVDb250ZW50KSB7XG4gICAgICAgICAgdGl0bGVDb250ZW50ID0gIXRpdGxlQ29udGVudCA/IHF1ZXJ5VGl0bGVDb250ZW50IDogYCR7dGl0bGVDb250ZW50fSwke3F1ZXJ5VGl0bGVDb250ZW50fWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qICBpZiAoIWZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5zaW1wbGlmeSgxMDApLmludGVyc2VjdHNFeHRlbnQoYmJveEV4dGVudCkpIHtcbiAgICAgICAgb3V0QmJveEV4dGVudCA9IHRydWU7XG4gICAgICAgIC8vIFRPRE86IENoZWNrIHRvIHByb2plY3QgdGhlIGdlb21ldHJ5P1xuICAgICAgfSovXG4gICAgICBjb25zdCBmZWF0dXJlR2VvbWV0cnlDb29yZGluYXRlcyA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgY29uc3QgZmVhdHVyZUdlb21ldHJ5VHlwZSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmICghZmlyc3RGZWF0dXJlVHlwZSAmJiAhb3V0QmJveEV4dGVudCkge1xuICAgICAgICBmaXJzdEZlYXR1cmVUeXBlID0gZmVhdHVyZUdlb21ldHJ5VHlwZTtcbiAgICAgIH1cbiAgICAgIGlmICghb3V0QmJveEV4dGVudCkge1xuICAgICAgICBzd2l0Y2ggKGZlYXR1cmVHZW9tZXRyeVR5cGUpIHtcbiAgICAgICAgICBjYXNlICdQb2ludCc6XG4gICAgICAgICAgICBpZiAobmJGZWF0dXJlcyA9PT0gMSkge1xuICAgICAgICAgICAgICBwdHMgPSBuZXcgb2xnZW9tLlBvaW50KGZlYXR1cmVHZW9tZXRyeUNvb3JkaW5hdGVzLCAnWFknKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHB0c0FycmF5LnB1c2goZmVhdHVyZUdlb21ldHJ5Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnTGluZVN0cmluZyc6XG4gICAgICAgICAgICBvbG1saW5lLmFwcGVuZExpbmVTdHJpbmcoXG4gICAgICAgICAgICAgIG5ldyBvbGdlb20uTGluZVN0cmluZyhmZWF0dXJlR2VvbWV0cnlDb29yZGluYXRlcywgJ1hZJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgICAgICAgIG9sbXBvbHkuYXBwZW5kUG9seWdvbihcbiAgICAgICAgICAgICAgbmV3IG9sZ2VvbS5Qb2x5Z29uKGZlYXR1cmVHZW9tZXRyeUNvb3JkaW5hdGVzLCAnWFknKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ011bHRpUG9seWdvbic6XG4gICAgICAgICAgICBvbG1wb2x5ID0gbmV3IG9sZ2VvbS5NdWx0aVBvbHlnb24oZmVhdHVyZUdlb21ldHJ5Q29vcmRpbmF0ZXMsICdYWScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IG9sbXB0cztcbiAgICBpZiAocHRzQXJyYXkubGVuZ3RoID09PSAwICYmIHB0cykge1xuICAgICAgb2xtcHRzID0ge1xuICAgICAgICB0eXBlOiBwdHMuZ2V0VHlwZSgpLFxuICAgICAgICBjb29yZGluYXRlczogcHRzLmdldENvb3JkaW5hdGVzKClcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sbXB0cyA9IHtcbiAgICAgICAgdHlwZTogJ1BvbHlnb24nLFxuICAgICAgICBjb29yZGluYXRlczogW3RoaXMuY29udmV4SHVsbChwdHNBcnJheSldXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCByZXR1cm5HZW9tZXRyeTtcbiAgICBzd2l0Y2ggKGZpcnN0RmVhdHVyZVR5cGUpIHtcbiAgICAgIGNhc2UgJ0xpbmVTdHJpbmcnOlxuICAgICAgICByZXR1cm5HZW9tZXRyeSA9IHtcbiAgICAgICAgICB0eXBlOiBvbG1saW5lLmdldFR5cGUoKSxcbiAgICAgICAgICBjb29yZGluYXRlczogb2xtbGluZS5nZXRDb29yZGluYXRlcygpXG4gICAgICAgIH07XG4gICAgICBjYXNlICdQb2ludCc6XG4gICAgICAgIHJldHVybiBvbG1wdHM7XG4gICAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgICAgcmV0dXJuR2VvbWV0cnkgPSB7XG4gICAgICAgICAgdHlwZTogb2xtcG9seS5nZXRUeXBlKCksXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IG9sbXBvbHkuZ2V0Q29vcmRpbmF0ZXMoKVxuICAgICAgICB9O1xuICAgICAgY2FzZSAnTXVsdGlQb2x5Z29uJzpcbiAgICAgICAgcmV0dXJuR2VvbWV0cnkgPSB7XG4gICAgICAgICAgdHlwZTogb2xtcG9seS5nZXRUeXBlKCksXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IG9sbXBvbHkuZ2V0Q29vcmRpbmF0ZXMoKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBpbXBvc2VkUHJvcGVydGllcyA9IHt9O1xuXG4gICAgaWYgKHF1ZXJ5VGlsZUZpZWxkKSB7XG4gICAgICBpbXBvc2VkUHJvcGVydGllc1txdWVyeVRpbGVGaWVsZF0gPSB0aXRsZUNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFsgcmV0dXJuR2VvbWV0cnksIGltcG9zZWRQcm9wZXJ0aWVzXTtcblxuXG4gIH1cblxuICBjcm9zcyhhLCBiLCBvKSB7XG4gICAgcmV0dXJuIChhWzBdIC0gb1swXSkgKiAoYlsxXSAtIG9bMV0pIC0gKGFbMV0gLSBvWzFdKSAqIChiWzBdIC0gb1swXSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHBvaW50cyBBbiBhcnJheSBvZiBbWCwgWV0gY29vcmRpbmF0ZXNcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlIGluc3RlYWQgb2YgdHVyZi5qcyBjb252ZXhIdWxsIGJlY2F1c2UgVHVyZiBuZWVkcyBhdCBsZWFzdCAzIHBvaW50IHRvIG1ha2UgYSBodWxsLlxuICAgKiBodHRwczovL2VuLndpa2lib29rcy5vcmcvd2lraS9BbGdvcml0aG1fSW1wbGVtZW50YXRpb24vR2VvbWV0cnkvQ29udmV4X2h1bGwvTW9ub3RvbmVfY2hhaW4jSmF2YVNjcmlwdFxuICAgKi9cbiAgY29udmV4SHVsbChwb2ludHMpIHtcbiAgICBwb2ludHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGFbMF0gPT09IGJbMF0gPyBhWzFdIC0gYlsxXSA6IGFbMF0gLSBiWzBdO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG93ZXIgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHBvaW50cykge1xuICAgICAgd2hpbGUgKFxuICAgICAgICBsb3dlci5sZW5ndGggPj0gMiAmJlxuICAgICAgICB0aGlzLmNyb3NzKGxvd2VyW2xvd2VyLmxlbmd0aCAtIDJdLCBsb3dlcltsb3dlci5sZW5ndGggLSAxXSwgcG9pbnQpIDw9IDBcbiAgICAgICkge1xuICAgICAgICBsb3dlci5wb3AoKTtcbiAgICAgIH1cbiAgICAgIGxvd2VyLnB1c2gocG9pbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyID0gW107XG4gICAgZm9yIChsZXQgaSA9IHBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgd2hpbGUgKFxuICAgICAgICB1cHBlci5sZW5ndGggPj0gMiAmJlxuICAgICAgICB0aGlzLmNyb3NzKFxuICAgICAgICAgIHVwcGVyW3VwcGVyLmxlbmd0aCAtIDJdLFxuICAgICAgICAgIHVwcGVyW3VwcGVyLmxlbmd0aCAtIDFdLFxuICAgICAgICAgIHBvaW50c1tpXVxuICAgICAgICApIDw9IDBcbiAgICAgICkge1xuICAgICAgICB1cHBlci5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHVwcGVyLnB1c2gocG9pbnRzW2ldKTtcbiAgICB9XG5cbiAgICB1cHBlci5wb3AoKTtcbiAgICBsb3dlci5wb3AoKTtcbiAgICByZXR1cm4gbG93ZXIuY29uY2F0KHVwcGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEoXG4gICAgcmVzLFxuICAgIGxheWVyOiBMYXllcixcbiAgICBvcHRpb25zOiBRdWVyeU9wdGlvbnMsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgaW1wb3NlZEdlb21ldHJ5PyxcbiAgICBpbXBvc2VkUHJvcGVydGllcz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgKTogRmVhdHVyZVtdIHtcbiAgICBjb25zdCBxdWVyeURhdGFTb3VyY2UgPSBsYXllci5kYXRhU291cmNlIGFzIFF1ZXJ5YWJsZURhdGFTb3VyY2U7XG5cbiAgICBjb25zdCBhbGxvd2VkRmllbGRzQW5kQWxpYXMgPSB0aGlzLmdldEFsbG93ZWRGaWVsZHNBbmRBbGlhcyhsYXllcik7XG4gICAgbGV0IGZlYXR1cmVzID0gW107XG4gICAgc3dpdGNoIChxdWVyeURhdGFTb3VyY2Uub3B0aW9ucy5xdWVyeUZvcm1hdCkge1xuICAgICAgY2FzZSBRdWVyeUZvcm1hdC5HTUwzOlxuICAgICAgICBmZWF0dXJlcyA9IHRoaXMuZXh0cmFjdEdNTDNEYXRhKFxuICAgICAgICAgIHJlcyxcbiAgICAgICAgICBsYXllci56SW5kZXgsXG4gICAgICAgICAgYWxsb3dlZEZpZWxkc0FuZEFsaWFzXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBRdWVyeUZvcm1hdC5KU09OOlxuICAgICAgY2FzZSBRdWVyeUZvcm1hdC5HRU9KU09OOlxuICAgICAgY2FzZSBRdWVyeUZvcm1hdC5HRU9KU09OMjpcbiAgICAgICAgZmVhdHVyZXMgPSB0aGlzLmV4dHJhY3RHZW9KU09ORGF0YShyZXMsIGxheWVyLnpJbmRleCwgYWxsb3dlZEZpZWxkc0FuZEFsaWFzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFF1ZXJ5Rm9ybWF0LkVTUklKU09OOlxuICAgICAgICBmZWF0dXJlcyA9IHRoaXMuZXh0cmFjdEVzcmlKU09ORGF0YShyZXMsIGxheWVyLnpJbmRleCwgYWxsb3dlZEZpZWxkc0FuZEFsaWFzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFF1ZXJ5Rm9ybWF0LlRFWFQ6XG4gICAgICAgIGZlYXR1cmVzID0gdGhpcy5leHRyYWN0VGV4dERhdGEocmVzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFF1ZXJ5Rm9ybWF0LkhUTUw6XG4gICAgICAgIGZlYXR1cmVzID0gdGhpcy5leHRyYWN0SHRtbERhdGEoXG4gICAgICAgICAgcmVzLFxuICAgICAgICAgIHF1ZXJ5RGF0YVNvdXJjZS5xdWVyeUh0bWxUYXJnZXQsXG4gICAgICAgICAgdXJsXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBRdWVyeUZvcm1hdC5IVE1MR01MMjpcbiAgICAgICAgZmVhdHVyZXMgPSB0aGlzLmV4dHJhY3RIdG1sRGF0YShcbiAgICAgICAgICByZXMsXG4gICAgICAgICAgcXVlcnlEYXRhU291cmNlLnF1ZXJ5SHRtbFRhcmdldCxcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgaW1wb3NlZEdlb21ldHJ5LFxuICAgICAgICAgIGltcG9zZWRQcm9wZXJ0aWVzXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBRdWVyeUZvcm1hdC5HTUwyOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZmVhdHVyZXMgPSB0aGlzLmV4dHJhY3RHTUwyRGF0YShyZXMsIGxheWVyLCBhbGxvd2VkRmllbGRzQW5kQWxpYXMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID4gMCAmJiBmZWF0dXJlc1swXS5nZW9tZXRyeSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZ2VvbVRvQWRkID0gdGhpcy5jcmVhdGVHZW9tZXRyeUZyb21VcmxDbGljayh1cmwpO1xuXG4gICAgICBmb3IgKGNvbnN0IGZlYXR1cmUgb2YgZmVhdHVyZXMpIHtcbiAgICAgICAgZmVhdHVyZS5nZW9tZXRyeSA9IGdlb21Ub0FkZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmVhdHVyZXMubWFwKChmZWF0dXJlOiBGZWF0dXJlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBtYXBMYWJlbCA9IGZlYXR1cmUucHJvcGVydGllc1txdWVyeURhdGFTb3VyY2UubWFwTGFiZWxdO1xuXG4gICAgICBsZXQgZXhjbHVkZTtcbiAgICAgIGlmIChsYXllci5vcHRpb25zLnNvdXJjZU9wdGlvbnM/LnR5cGUgPT09ICd3bXMnKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZU9wdGlvbnMgPSBsYXllci5vcHRpb25zXG4gICAgICAgICAgLnNvdXJjZU9wdGlvbnMgYXMgV01TRGF0YVNvdXJjZU9wdGlvbnM7XG4gICAgICAgIGV4Y2x1ZGUgPSBzb3VyY2VPcHRpb25zID8gc291cmNlT3B0aW9ucy5leGNsdWRlQXR0cmlidXRlIDogdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGl0bGUgPSB0aGlzLmdldFF1ZXJ5VGl0bGUoZmVhdHVyZSwgbGF5ZXIpO1xuICAgICAgaWYgKCF0aXRsZSAmJiBmZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRpdGxlID0gYCR7bGF5ZXIudGl0bGV9ICgke2luZGV4ICsgMX0pYDtcbiAgICAgIH0gZWxzZSBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gbGF5ZXIudGl0bGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1ldGEgPSBPYmplY3QuYXNzaWduKHt9LCBmZWF0dXJlLm1ldGEgfHwge30sIHtcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIG1hcFRpdGxlOiBtYXBMYWJlbCxcbiAgICAgICAgc291cmNlVGl0bGU6IGxheWVyLnRpdGxlLFxuICAgICAgICBvcmRlcjogMTAwMCAtIGxheWVyLnpJbmRleCxcbiAgICAgICAgZXhjbHVkZUF0dHJpYnV0ZTogZXhjbHVkZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGZlYXR1cmUsIHtcbiAgICAgICAgbWV0YSxcbiAgICAgICAgcHJvamVjdGlvbjpcbiAgICAgICAgICBxdWVyeURhdGFTb3VyY2Uub3B0aW9ucy50eXBlID09PSAnY2FydG8nXG4gICAgICAgICAgICA/ICdFUFNHOjQzMjYnXG4gICAgICAgICAgICA6IG9wdGlvbnMucHJvamVjdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUdlb21ldHJ5RnJvbVVybENsaWNrKHVybCkge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtczogYW55ID0gdGhpcy5nZXRRdWVyeVBhcmFtcyh1cmwudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgYmJveFJhdyA9IHNlYXJjaFBhcmFtcy5iYm94O1xuICAgIGNvbnN0IHdpZHRoID0gcGFyc2VJbnQoc2VhcmNoUGFyYW1zLndpZHRoLCAxMCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VJbnQoc2VhcmNoUGFyYW1zLmhlaWdodCwgMTApO1xuICAgIGNvbnN0IHhQb3NpdGlvbiA9IHBhcnNlSW50KHNlYXJjaFBhcmFtcy5pIHx8IHNlYXJjaFBhcmFtcy54LCAxMCk7XG4gICAgY29uc3QgeVBvc2l0aW9uID0gcGFyc2VJbnQoc2VhcmNoUGFyYW1zLmogfHwgc2VhcmNoUGFyYW1zLnksIDEwKTtcblxuICAgIGNvbnN0IGJib3ggPSBiYm94UmF3LnNwbGl0KCcsJyk7XG4gICAgbGV0IHRocmVzaG9sZCA9XG4gICAgICAoTWF0aC5hYnMocGFyc2VGbG9hdChiYm94WzBdKSkgLSBNYXRoLmFicyhwYXJzZUZsb2F0KGJib3hbMl0pKSkgKiAwLjA1O1xuXG4gICAgLy8gZm9yIGNvbnRleHQgaW4gZGVncmVlIChFUFNHOjQzMjYsNDI2OS4uLilcbiAgICBpZiAoTWF0aC5hYnMocGFyc2VGbG9hdChiYm94WzBdKSkgPCAxODApIHtcbiAgICAgIHRocmVzaG9sZCA9IDAuMDQ1O1xuICAgIH1cbiAgICBjb25zdCBjbGlja3ggPVxuICAgICAgcGFyc2VGbG9hdChiYm94WzBdKSArXG4gICAgICAoTWF0aC5hYnMocGFyc2VGbG9hdChiYm94WzBdKSAtIHBhcnNlRmxvYXQoYmJveFsyXSkpICogeFBvc2l0aW9uKSAvXG4gICAgICAgIHdpZHRoIC1cbiAgICAgIHRocmVzaG9sZDtcbiAgICBjb25zdCBjbGlja3kgPVxuICAgICAgcGFyc2VGbG9hdChiYm94WzFdKSArXG4gICAgICAoTWF0aC5hYnMocGFyc2VGbG9hdChiYm94WzFdKSAtIHBhcnNlRmxvYXQoYmJveFszXSkpICogeVBvc2l0aW9uKSAvXG4gICAgICAgIGhlaWdodCAtXG4gICAgICB0aHJlc2hvbGQ7XG4gICAgY29uc3QgY2xpY2t4MSA9IGNsaWNreCArIHRocmVzaG9sZCAqIDI7XG4gICAgY29uc3QgY2xpY2t5MSA9IGNsaWNreSArIHRocmVzaG9sZCAqIDI7XG5cbiAgICBjb25zdCB3a3RQb2x5ID1cbiAgICAgICdQT0xZR09OKCgnICtcbiAgICAgIGNsaWNreCArXG4gICAgICAnICcgK1xuICAgICAgY2xpY2t5ICtcbiAgICAgICcsICcgK1xuICAgICAgY2xpY2t4ICtcbiAgICAgICcgJyArXG4gICAgICBjbGlja3kxICtcbiAgICAgICcsICcgK1xuICAgICAgY2xpY2t4MSArXG4gICAgICAnICcgK1xuICAgICAgY2xpY2t5MSArXG4gICAgICAnLCAnICtcbiAgICAgIGNsaWNreDEgK1xuICAgICAgJyAnICtcbiAgICAgIGNsaWNreSArXG4gICAgICAnLCAnICtcbiAgICAgIGNsaWNreCArXG4gICAgICAnICcgK1xuICAgICAgY2xpY2t5ICtcbiAgICAgICcpKSc7XG5cbiAgICBjb25zdCBmb3JtYXQgPSBuZXcgb2xmb3JtYXQuV0tUKCk7XG4gICAgY29uc3QgdGVuUGVyY2VudFdpZHRoR2VvbSA9IGZvcm1hdC5yZWFkRmVhdHVyZSh3a3RQb2x5KTtcbiAgICBjb25zdCBmID0gdGVuUGVyY2VudFdpZHRoR2VvbS5nZXRHZW9tZXRyeSgpIGFzIGFueTtcblxuICAgIGNvbnN0IG5ld0dlb20gPSB7XG4gICAgICB0eXBlOiBmLmdldFR5cGUoKSxcbiAgICAgIGNvb3JkaW5hdGVzOiBmLmdldENvb3JkaW5hdGVzKClcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ld0dlb207XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RHTUwyRGF0YShyZXMsIHpJbmRleCwgYWxsb3dlZEZpZWxkc0FuZEFsaWFzPykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBvbEZvcm1hdEdNTDIoKTtcbiAgICBsZXQgZmVhdHVyZXMgPSBwYXJzZXIucmVhZEZlYXR1cmVzKHJlcyk7XG4gICAgLy8gSGFuZGxlIG5vbiBzdGFuZGFyZCBHTUwgb3V0cHV0IChNYXBTZXJ2ZXIpXG4gICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgd21zUGFyc2VyID0gbmV3IG9sZm9ybWF0LldNU0dldEZlYXR1cmVJbmZvKCk7XG4gICAgICB0cnkge1xuICAgICAgICBmZWF0dXJlcyA9IHdtc1BhcnNlci5yZWFkRmVhdHVyZXMocmVzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdxdWVyeS5zZXJ2aWNlOiBNdWx0aXBvbHlnb25zIGFyZSBiYWRseSBtYW5hZ2VkIGluIG1hcHNlcnZlciBpbiBHTUwyLiBVc2UgYW5vdGhlciBmb3JtYXQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZWF0dXJlcy5tYXAoZmVhdHVyZSA9PlxuICAgICAgdGhpcy5mZWF0dXJlVG9SZXN1bHQoZmVhdHVyZSwgekluZGV4LCBhbGxvd2VkRmllbGRzQW5kQWxpYXMpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdEdNTDNEYXRhKHJlcywgekluZGV4LCBhbGxvd2VkRmllbGRzQW5kQWxpYXM/KSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IG9sRm9ybWF0R01MMygpO1xuICAgIGxldCBmZWF0dXJlcyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmZWF0dXJlcyA9IHBhcnNlci5yZWFkRmVhdHVyZXMocmVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3F1ZXJ5LnNlcnZpY2U6IEdNTDMgaXMgbm90IHdlbGwgc3VwcG9ydGVkJyk7XG4gICAgfVxuICAgIHJldHVybiBmZWF0dXJlcy5tYXAoZmVhdHVyZSA9PlxuICAgICAgdGhpcy5mZWF0dXJlVG9SZXN1bHQoZmVhdHVyZSwgekluZGV4LCBhbGxvd2VkRmllbGRzQW5kQWxpYXMpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdEdlb0pTT05EYXRhKHJlcywgekluZGV4LCBhbGxvd2VkRmllbGRzQW5kQWxpYXM/KSB7XG4gICAgbGV0IGZlYXR1cmVzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZlYXR1cmVzID0gSlNPTi5wYXJzZShyZXMucmVwbGFjZSgvKFxccnxcXG4pL2csICcgJykpLmZlYXR1cmVzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybigncXVlcnkuc2VydmljZTogVW5hYmxlIHRvIHBhcnNlIGdlb2pzb24nLCAnXFxuJywgcmVzKTtcbiAgICB9XG4gICAgZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5tZXRhID0ge1xuICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgIG9yZGVyOiAxMDAwIC0gekluZGV4LFxuICAgICAgYWxpYXM6IGFsbG93ZWRGaWVsZHNBbmRBbGlhc1xuICAgIH0pO1xuICAgIHJldHVybiBmZWF0dXJlcztcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdEVzcmlKU09ORGF0YShyZXMsIHpJbmRleCwgYWxsb3dlZEZpZWxkc0FuZEFsaWFzKSB7XG4gICAgaWYgKHJlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKEpTT04ucGFyc2UocmVzKS5lcnJvcikge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IG9sRm9ybWF0RXNyaUpTT04oKTtcbiAgICBjb25zdCBmZWF0dXJlcyA9IHBhcnNlci5yZWFkRmVhdHVyZXMocmVzKTtcblxuICAgIHJldHVybiBmZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB0aGlzLmZlYXR1cmVUb1Jlc3VsdChmZWF0dXJlLCB6SW5kZXgsIGFsbG93ZWRGaWVsZHNBbmRBbGlhcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0VGV4dERhdGEocmVzKSB7XG4gICAgLy8gVE9ET1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdEh0bWxEYXRhKFxuICAgIHJlcyxcbiAgICBodG1sVGFyZ2V0OiBRdWVyeUh0bWxUYXJnZXQsXG4gICAgdXJsLFxuICAgIGltcG9zZWRHZW9tZXRyeT8sXG4gICAgaW1wb3NlZFByb3BlcnRpZXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gICkge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtczogYW55ID0gdGhpcy5nZXRRdWVyeVBhcmFtcyh1cmwudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IHNlYXJjaFBhcmFtcy5jcnMgfHwgc2VhcmNoUGFyYW1zLnNycyB8fCAnRVBTRzozODU3JztcbiAgICBjb25zdCBnZW9tVG9BZGQgPSB0aGlzLmNyZWF0ZUdlb21ldHJ5RnJvbVVybENsaWNrKHVybCk7XG5cbiAgICBpZiAoXG4gICAgICBodG1sVGFyZ2V0ICE9PSBRdWVyeUh0bWxUYXJnZXQuQkxBTksgJiZcbiAgICAgIGh0bWxUYXJnZXQgIT09IFF1ZXJ5SHRtbFRhcmdldC5JRlJBTUVcbiAgICApIHtcbiAgICAgIGh0bWxUYXJnZXQgPSBRdWVyeUh0bWxUYXJnZXQuSUZSQU1FO1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHlUYWdTdGFydCA9IHJlcy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJzxib2R5PicpO1xuICAgIGNvbnN0IGJvZHlUYWdFbmQgPSByZXMudG9Mb3dlckNhc2UoKS5sYXN0SW5kZXhPZignPC9ib2R5PicpICsgNztcbiAgICAvLyByZXBsYWNlIFxcciBcXG4gIGFuZCAnICcgd2l0aCAnJyB0byB2YWxpZGF0ZSBpZiB0aGUgYm9keSBpcyByZWFsbHkgZW1wdHkuIENsZWFyIGFsbCB0aGUgaHRtbCB0YWdzIGZyb20gYm9keVxuICAgIGNvbnN0IHN0cmlwdGFncyA9IHN0cmlwdGFnc187XG4gICAgY29uc3QgYm9keSA9IHN0cmlwdGFncyhyZXMuc2xpY2UoYm9keVRhZ1N0YXJ0LCBib2R5VGFnRW5kKS5yZXBsYWNlKC8oXFxyfFxcbnxcXHMpL2csICcnKSk7XG4gICAgaWYgKGJvZHkgPT09ICcnIHx8IHJlcyA9PT0gJycpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB0eXBlOiBGRUFUVVJFLFxuICAgICAgICBwcm9qZWN0aW9uLFxuICAgICAgICBwcm9wZXJ0aWVzOiBPYmplY3QuYXNzaWduKHsgdGFyZ2V0OiBodG1sVGFyZ2V0LCBib2R5OiByZXMsIHVybCB9LCBpbXBvc2VkUHJvcGVydGllcyksXG4gICAgICAgIGdlb21ldHJ5OiBpbXBvc2VkR2VvbWV0cnkgfHwgZ2VvbVRvQWRkXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVlcnlQYXJhbXModXJsKSB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB1cmwuc3BsaXQoJz8nKTtcbiAgICBpZiAoIXF1ZXJ5U3RyaW5nWzFdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhaXJzID0gcXVlcnlTdHJpbmdbMV0uc3BsaXQoJyYnKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIHBhaXJzLmZvckVhY2gocGFpciA9PiB7XG4gICAgICBwYWlyID0gcGFpci5zcGxpdCgnPScpO1xuICAgICAgcmVzdWx0W3BhaXJbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0gfHwgJycpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwdWJsaWMgZmVhdHVyZVRvUmVzdWx0KFxuICAgIGZlYXR1cmVPTDogb2xGZWF0dXJlPG9sZ2VvbS5HZW9tZXRyeT4sXG4gICAgekluZGV4OiBudW1iZXIsXG4gICAgYWxsb3dlZEZpZWxkc0FuZEFsaWFzP1xuICApOiBGZWF0dXJlIHtcbiAgICBjb25zdCBmZWF0dXJlR2VvbWV0cnkgPSBmZWF0dXJlT0wuZ2V0R2VvbWV0cnkoKSBhcyBhbnk7XG4gICAgY29uc3QgcHJvcGVydGllczogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgZmVhdHVyZU9MLmdldFByb3BlcnRpZXMoKSk7XG4gICAgZGVsZXRlIHByb3BlcnRpZXMuZ2VvbWV0cnk7XG4gICAgZGVsZXRlIHByb3BlcnRpZXMuR0VPTUVUUklFO1xuICAgIGRlbGV0ZSBwcm9wZXJ0aWVzLmJvdW5kZWRCeTtcbiAgICBkZWxldGUgcHJvcGVydGllcy5zaGFwZTtcbiAgICBkZWxldGUgcHJvcGVydGllcy5TSEFQRTtcbiAgICBkZWxldGUgcHJvcGVydGllcy50aGVfZ2VvbTtcbiAgICBkZWxldGUgcHJvcGVydGllcy5nZW9tO1xuXG4gICAgbGV0IGdlb21ldHJ5O1xuICAgIGlmIChmZWF0dXJlR2VvbWV0cnkpIHtcbiAgICAgIGdlb21ldHJ5ID0ge1xuICAgICAgICB0eXBlOiBmZWF0dXJlR2VvbWV0cnkuZ2V0VHlwZSgpLFxuICAgICAgICBjb29yZGluYXRlczogZmVhdHVyZUdlb21ldHJ5LmdldENvb3JkaW5hdGVzKClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZFQVRVUkUsXG4gICAgICBwcm9qZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICBwcm9wZXJ0aWVzLFxuICAgICAgZ2VvbWV0cnksXG4gICAgICBtZXRhOiB7XG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIG9yZGVyOiAxMDAwIC0gekluZGV4LFxuICAgICAgICBhbGlhczogYWxsb3dlZEZpZWxkc0FuZEFsaWFzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVlcnlVcmwoXG4gICAgZGF0YXNvdXJjZTogUXVlcnlhYmxlRGF0YVNvdXJjZSxcbiAgICBvcHRpb25zOiBRdWVyeU9wdGlvbnMsXG4gICAgZm9yY2VHTUwyID0gZmFsc2UsXG4gICAgbWFwRXh0ZW50PzogTWFwRXh0ZW50XG4gICk6IHN0cmluZyB7XG4gICAgbGV0IHVybDtcblxuICAgIGlmIChkYXRhc291cmNlLm9wdGlvbnMucXVlcnlVcmwpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEN1c3RvbVF1ZXJ5VXJsKGRhdGFzb3VyY2UsIG9wdGlvbnMsIG1hcEV4dGVudCk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChkYXRhc291cmNlLmNvbnN0cnVjdG9yKSB7XG4gICAgICBjYXNlIFdNU0RhdGFTb3VyY2U6XG4gICAgICAgIGNvbnN0IHdtc0RhdGFzb3VyY2UgPSBkYXRhc291cmNlIGFzIFdNU0RhdGFTb3VyY2U7XG5cbiAgICAgICAgY29uc3QgV01TR2V0RmVhdHVyZUluZm9PcHRpb25zID0ge1xuICAgICAgICAgIElORk9fRk9STUFUOlxuICAgICAgICAgICAgd21zRGF0YXNvdXJjZS5wYXJhbXMuSU5GT19GT1JNQVQgfHxcbiAgICAgICAgICAgIHRoaXMuZ2V0TWltZUluZm9Gb3JtYXQoZGF0YXNvdXJjZS5vcHRpb25zLnF1ZXJ5Rm9ybWF0KSxcbiAgICAgICAgICBRVUVSWV9MQVlFUlM6IHdtc0RhdGFzb3VyY2UucGFyYW1zLkxBWUVSUyxcbiAgICAgICAgICBGRUFUVVJFX0NPVU5UOiB3bXNEYXRhc291cmNlLnBhcmFtcy5GRUFUVVJFX0NPVU5UIHx8ICc1J1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChmb3JjZUdNTDIpIHtcbiAgICAgICAgICBXTVNHZXRGZWF0dXJlSW5mb09wdGlvbnMuSU5GT19GT1JNQVQgPSB0aGlzLmdldE1pbWVJbmZvRm9ybWF0KFxuICAgICAgICAgICAgUXVlcnlGb3JtYXQuR01MMlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB1cmwgPSB3bXNEYXRhc291cmNlLm9sLmdldEZlYXR1cmVJbmZvVXJsKFxuICAgICAgICAgIG9wdGlvbnMuY29vcmRpbmF0ZXMsXG4gICAgICAgICAgb3B0aW9ucy5yZXNvbHV0aW9uLFxuICAgICAgICAgIG9wdGlvbnMucHJvamVjdGlvbixcbiAgICAgICAgICBXTVNHZXRGZWF0dXJlSW5mb09wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY29uc3Qgd21zVmVyc2lvbiA9XG4gICAgICAgIC8vICAgd21zRGF0YXNvdXJjZS5wYXJhbXMuVkVSU0lPTiB8fFxuICAgICAgICAvLyAgIHdtc0RhdGFzb3VyY2UucGFyYW1zLnZlcnNpb24gfHxcbiAgICAgICAgLy8gICAnMS4zLjAnO1xuICAgICAgICAvLyBpZiAod21zVmVyc2lvbiAhPT0gJzEuMy4wJykge1xuICAgICAgICAvLyAgIHVybCA9IHVybC5yZXBsYWNlKCcmST0nLCAnJlg9Jyk7XG4gICAgICAgIC8vICAgdXJsID0gdXJsLnJlcGxhY2UoJyZKPScsICcmWT0nKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ2FydG9EYXRhU291cmNlOlxuICAgICAgICBjb25zdCBjYXJ0b0RhdGFzb3VyY2UgPSBkYXRhc291cmNlIGFzIENhcnRvRGF0YVNvdXJjZTtcbiAgICAgICAgY29uc3QgYmFzZVVybCA9XG4gICAgICAgICAgJ2h0dHBzOi8vJyArXG4gICAgICAgICAgY2FydG9EYXRhc291cmNlLm9wdGlvbnMuYWNjb3VudCArXG4gICAgICAgICAgJy5jYXJ0by5jb20vYXBpL3YyL3NxbD8nO1xuICAgICAgICBjb25zdCBmb3JtYXQgPSAnZm9ybWF0PUdlb0pTT04nO1xuICAgICAgICBjb25zdCBzcWwgPVxuICAgICAgICAgICcmcT0nICsgY2FydG9EYXRhc291cmNlLm9wdGlvbnMuY29uZmlnLmxheWVyc1swXS5vcHRpb25zLnNxbDtcbiAgICAgICAgY29uc3QgY2xhdXNlID1cbiAgICAgICAgICAnIFdIRVJFIFNUX0ludGVyc2VjdHModGhlX2dlb21fd2VibWVyY2F0b3IsU1RfQlVGRkVSKFNUX1NldFNSSUQoU1RfUE9JTlQoJztcbiAgICAgICAgY29uc3QgbWV0ZXJzID0gY2FydG9EYXRhc291cmNlLm9wdGlvbnMucXVlcnlQcmVjaXNpb25cbiAgICAgICAgICA/IGNhcnRvRGF0YXNvdXJjZS5vcHRpb25zLnF1ZXJ5UHJlY2lzaW9uXG4gICAgICAgICAgOiAnMTAwMCc7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID1cbiAgICAgICAgICBvcHRpb25zLmNvb3JkaW5hdGVzWzBdICtcbiAgICAgICAgICAnLCcgK1xuICAgICAgICAgIG9wdGlvbnMuY29vcmRpbmF0ZXNbMV0gK1xuICAgICAgICAgICcpLDM4NTcpLCcgK1xuICAgICAgICAgIG1ldGVycyArXG4gICAgICAgICAgJykpJztcblxuICAgICAgICB1cmwgPSBgJHtiYXNlVXJsfSR7Zm9ybWF0fSR7c3FsfSR7Y2xhdXNlfSR7Y29vcmRpbmF0ZXN9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEltYWdlQXJjR0lTUmVzdERhdGFTb3VyY2U6XG4gICAgICBjYXNlIFRpbGVBcmNHSVNSZXN0RGF0YVNvdXJjZTpcbiAgICAgICAgY29uc3QgdGlsZUFyY0dJU1Jlc3REYXRhc291cmNlID0gZGF0YXNvdXJjZSBhcyBUaWxlQXJjR0lTUmVzdERhdGFTb3VyY2U7XG4gICAgICAgIGNvbnN0IGRlbHRhWCA9IE1hdGguYWJzKG1hcEV4dGVudFswXSAtIG1hcEV4dGVudFsyXSk7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IE1hdGguYWJzKG1hcEV4dGVudFsxXSAtIG1hcEV4dGVudFszXSk7XG4gICAgICAgIGNvbnN0IG1heERlbHRhID0gZGVsdGFYID4gZGVsdGFZID8gZGVsdGFYIDogZGVsdGFZO1xuICAgICAgICBjb25zdCBjbGlja0J1ZmZlciA9IG1heERlbHRhICogMC4wMDU7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHRpbGVBcmNHSVNSZXN0RGF0YXNvdXJjZS5vcHRpb25zLnF1ZXJ5UHJlY2lzaW9uID8gdGlsZUFyY0dJU1Jlc3REYXRhc291cmNlLm9wdGlvbnMucXVlcnlQcmVjaXNpb24gOiBjbGlja0J1ZmZlcjtcbiAgICAgICAgY29uc3QgZXh0ZW50ID0gb2xleHRlbnQuYnVmZmVyKFxuICAgICAgICAgIG9sZXh0ZW50LmJvdW5kaW5nRXh0ZW50KFtvcHRpb25zLmNvb3JkaW5hdGVzXSksXG4gICAgICAgICAgdGhyZXNob2xkXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VVcmwgPVxuICAgICAgICAgIHRpbGVBcmNHSVNSZXN0RGF0YXNvdXJjZS5vcHRpb25zLnVybCArXG4gICAgICAgICAgJy8nICtcbiAgICAgICAgICB0aWxlQXJjR0lTUmVzdERhdGFzb3VyY2Uub3B0aW9ucy5sYXllciArXG4gICAgICAgICAgJy9xdWVyeS8nO1xuICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAne1wieG1pblwiOicgK1xuICAgICAgICAgICAgZXh0ZW50WzBdICtcbiAgICAgICAgICAgICcsXCJ5bWluXCI6JyArXG4gICAgICAgICAgICBleHRlbnRbMV0gK1xuICAgICAgICAgICAgJyxcInhtYXhcIjonICtcbiAgICAgICAgICAgIGV4dGVudFsyXSArXG4gICAgICAgICAgICAnLFwieW1heFwiOicgK1xuICAgICAgICAgICAgZXh0ZW50WzNdICtcbiAgICAgICAgICAgICcsXCJzcGF0aWFsUmVmZXJlbmNlXCI6e1wid2tpZFwiOjEwMjEwMH19J1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICAgJ2Y9anNvbicsXG4gICAgICAgICAgYGdlb21ldHJ5PSR7Z2VvbWV0cnl9YCxcbiAgICAgICAgICAnZ2VvbWV0cnlUeXBlPWVzcmlHZW9tZXRyeUVudmVsb3BlJyxcbiAgICAgICAgICAnaW5TUj0xMDIxMDAnLFxuICAgICAgICAgICdzcGF0aWFsUmVsPWVzcmlTcGF0aWFsUmVsSW50ZXJzZWN0cycsXG4gICAgICAgICAgJ291dEZpZWxkcz0qJyxcbiAgICAgICAgICAncmV0dXJuR2VvbWV0cnk9dHJ1ZScsXG4gICAgICAgICAgJ291dFNSPTEwMjEwMCdcbiAgICAgICAgXTtcbiAgICAgICAgdXJsID0gYCR7c2VydmljZVVybH0/JHtwYXJhbXMuam9pbignJicpfWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWltZUluZm9Gb3JtYXQocXVlcnlGb3JtYXQ6IHN0cmluZykge1xuICAgIGxldCBtaW1lID0gJ2FwcGxpY2F0aW9uL3ZuZC5vZ2MuZ21sJztcbiAgICBjb25zdCBrZXlFbnVtID0gT2JqZWN0LmtleXMoUXVlcnlGb3JtYXQpLmZpbmQoXG4gICAgICBrZXkgPT4gUXVlcnlGb3JtYXRba2V5XSA9PT0gcXVlcnlGb3JtYXRcbiAgICApO1xuICAgIGlmIChrZXlFbnVtKSB7XG4gICAgICBtaW1lID0gUXVlcnlGb3JtYXRNaW1lVHlwZVtrZXlFbnVtXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWltZTtcbiAgfVxuXG4gIGdldEFsbG93ZWRGaWVsZHNBbmRBbGlhcyhsYXllcjogYW55KSB7XG4gICAgbGV0IGFsbG93ZWRGaWVsZHNBbmRBbGlhcztcbiAgICBpZiAoXG4gICAgICBsYXllci5vcHRpb25zPy5zb3VyY2U/Lm9wdGlvbnM/LnNvdXJjZUZpZWxkcyAmJlxuICAgICAgbGF5ZXIub3B0aW9ucy5zb3VyY2Uub3B0aW9ucy5zb3VyY2VGaWVsZHMubGVuZ3RoID49IDFcbiAgICApIHtcbiAgICAgIGFsbG93ZWRGaWVsZHNBbmRBbGlhcyA9IHt9O1xuICAgICAgbGF5ZXIub3B0aW9ucy5zb3VyY2Uub3B0aW9ucy5zb3VyY2VGaWVsZHMuZm9yRWFjaChzb3VyY2VGaWVsZCA9PiB7XG4gICAgICAgIGNvbnN0IGFsaWFzID0gc291cmNlRmllbGQuYWxpYXMgPyBzb3VyY2VGaWVsZC5hbGlhcyA6IHNvdXJjZUZpZWxkLm5hbWU7XG4gICAgICAgIGFsbG93ZWRGaWVsZHNBbmRBbGlhc1tzb3VyY2VGaWVsZC5uYW1lXSA9IGFsaWFzO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxvd2VkRmllbGRzQW5kQWxpYXM7XG4gIH1cblxuICBnZXRRdWVyeVRpdGxlKGZlYXR1cmU6IEZlYXR1cmUsIGxheWVyOiBMYXllcik6IHN0cmluZyB7XG4gICAgbGV0IHRpdGxlO1xuICAgIGlmIChsYXllci5vcHRpb25zPy5zb3VyY2U/Lm9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VPcHRpb25zID0gbGF5ZXIub3B0aW9ucy5zb3VyY2VcbiAgICAgICAgLm9wdGlvbnMgYXMgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnM7XG4gICAgICBpZiAoZGF0YVNvdXJjZU9wdGlvbnMucXVlcnlUaXRsZSkge1xuICAgICAgICB0aXRsZSA9IHRoaXMuZ2V0TGFiZWxNYXRjaChmZWF0dXJlLCBkYXRhU291cmNlT3B0aW9ucy5xdWVyeVRpdGxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBnZXRMYWJlbE1hdGNoKGZlYXR1cmU6IEZlYXR1cmUsIGxhYmVsTWF0Y2gpOiBzdHJpbmcge1xuICAgIGxldCBsYWJlbCA9IGxhYmVsTWF0Y2g7XG4gICAgY29uc3QgbGFiZWxUb0dldCA9IEFycmF5LmZyb20obGFiZWxNYXRjaC5tYXRjaEFsbCgvXFwkXFx7KFteXFx7XFx9XSspXFx9L2cpKTtcblxuICAgIGxhYmVsVG9HZXQuZm9yRWFjaCh2ID0+IHtcbiAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSh2WzBdLCBmZWF0dXJlLnByb3BlcnRpZXNbdlsxXV0pO1xuICAgIH0pO1xuXG4gICAgLy8gTm90aGluZyBkb25lPyBjaGVjayBmZWF0dXJlJ3MgYXR0cmlidXRlXG4gICAgaWYgKGxhYmVsVG9HZXQubGVuZ3RoID09PSAwICYmIGxhYmVsID09PSBsYWJlbE1hdGNoKSB7XG4gICAgICBsYWJlbCA9IGZlYXR1cmUucHJvcGVydGllc1tsYWJlbE1hdGNoXSB8fCBsYWJlbE1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZGF0YXNvdXJjZSBRdWVyeWFibGVEYXRhU291cmNlXG4gICAqIEBwYXJhbSBvcHRpb25zIFF1ZXJ5T3B0aW9uc1xuICAgKiBAbWFwRXh0ZW50IGV4dGVudCBvZiB0aGUgbWFwIHdoZW4gY2xpY2sgZXZlbnRcbiAgICpcbiAgICovXG5cbiAgZ2V0Q3VzdG9tUXVlcnlVcmwoXG4gICAgZGF0YXNvdXJjZTogUXVlcnlhYmxlRGF0YVNvdXJjZSxcbiAgICBvcHRpb25zOiBRdWVyeU9wdGlvbnMsXG4gICAgbWFwRXh0ZW50PzogTWFwRXh0ZW50KTogc3RyaW5nIHtcblxuICAgICAgbGV0IHVybCA9IGRhdGFzb3VyY2Uub3B0aW9ucy5xdWVyeVVybC5yZXBsYWNlKC9cXHt4bWluXFx9L2csIG1hcEV4dGVudFswXS50b1N0cmluZygpKVxuICAgICAgLnJlcGxhY2UoL1xce3ltaW5cXH0vZywgbWFwRXh0ZW50WzFdLnRvU3RyaW5nKCkpXG4gICAgICAucmVwbGFjZSgvXFx7eG1heFxcfS9nLCBtYXBFeHRlbnRbMl0udG9TdHJpbmcoKSlcbiAgICAgIC5yZXBsYWNlKC9cXHt5bWF4XFx9L2csIG1hcEV4dGVudFszXS50b1N0cmluZygpKVxuICAgICAgLnJlcGxhY2UoL1xce3hcXH0vZywgb3B0aW9ucy5jb29yZGluYXRlc1swXS50b1N0cmluZygpKVxuICAgICAgLnJlcGxhY2UoL1xce3lcXH0vZywgb3B0aW9ucy5jb29yZGluYXRlc1sxXS50b1N0cmluZygpKVxuICAgICAgLnJlcGxhY2UoL1xce3Jlc29sdXRpb25cXH0vZywgb3B0aW9ucy5yZXNvbHV0aW9uLnRvU3RyaW5nKCkpXG4gICAgICAucmVwbGFjZSgvXFx7c3JpZFxcfS9nLCBvcHRpb25zLnByb2plY3Rpb24ucmVwbGFjZSgnRVBTRzonLCcnKSk7XG5cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxufVxuIl19