import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import olFeature from 'ol/Feature';
import * as olgeom from 'ol/geom';
import { Feature } from '../../feature/shared/feature.interfaces';
import { Layer } from '../../layer/shared/layers/layer';
import { QueryOptions, QueryableDataSource } from './query.interfaces';
import { MapExtent } from '../../map/shared/map.interface';
import * as i0 from "@angular/core";
export declare class QueryService {
    private http;
    queryEnabled: boolean;
    constructor(http: HttpClient);
    query(layers: Layer[], options: QueryOptions): Observable<Feature[]>[];
    queryLayer(layer: Layer, options: QueryOptions): Observable<Feature[]>;
    private mergeGML;
    cross(a: any, b: any, o: any): number;
    /**
     * @param points An array of [X, Y] coordinates
     * This method is use instead of turf.js convexHull because Turf needs at least 3 point to make a hull.
     * https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain#JavaScript
     */
    convexHull(points: any): any[];
    private extractData;
    private createGeometryFromUrlClick;
    private extractGML2Data;
    private extractGML3Data;
    private extractGeoJSONData;
    private extractEsriJSONData;
    private extractTextData;
    private extractHtmlData;
    private getQueryParams;
    featureToResult(featureOL: olFeature<olgeom.Geometry>, zIndex: number, allowedFieldsAndAlias?: any): Feature;
    private getQueryUrl;
    private getMimeInfoFormat;
    getAllowedFieldsAndAlias(layer: any): any;
    getQueryTitle(feature: Feature, layer: Layer): string;
    getLabelMatch(feature: Feature, labelMatch: any): string;
    /**
     * @param datasource QueryableDataSource
     * @param options QueryOptions
     * @mapExtent extent of the map when click event
     *
     */
    getCustomQueryUrl(datasource: QueryableDataSource, options: QueryOptions, mapExtent?: MapExtent): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QueryService>;
}
