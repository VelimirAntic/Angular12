import { HttpClient } from '@angular/common/http';
import { ConfigService, LanguageService } from '@igo2/core';
import { Observable } from 'rxjs';
import { Feature } from '../../feature/shared';
import { SpatialFilterQueryType, SpatialFilterItemType, SpatialFilterType } from './spatial-filter.enum';
import { SpatialFilterThematic } from './spatial-filter.interface';
import * as i0 from "@angular/core";
export declare class SpatialFilterService {
    private http;
    private languageService;
    private configService;
    baseUrl: string;
    urlFilterList: {
        AdmRegion: string;
        Arrond: string;
        CircFed: string;
        CircProv: string;
        DirReg: string;
        MRC: string;
        Mun: string;
        RegTour: string;
        bornes: string;
        hydro: string;
        routes: string;
    };
    constructor(http: HttpClient, languageService: LanguageService, configService: ConfigService);
    getKeyByValue(object: any, value: any): string;
    loadFilterList(type: SpatialFilterQueryType): Observable<Feature[]>;
    loadThematicsList(): Observable<SpatialFilterThematic[]>;
    loadFilterItem(feature: any, itemType: SpatialFilterItemType, type?: SpatialFilterQueryType, thematic?: SpatialFilterThematic, buffer?: number): Observable<Feature<{
        [key: string]: any;
    }>[]>;
    loadItemById(feature: Feature, type: SpatialFilterQueryType): Observable<Feature>;
    loadBufferGeometry(feature: Feature, filterType: SpatialFilterType, buffer?: number, type?: SpatialFilterQueryType): Observable<Feature>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpatialFilterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SpatialFilterService>;
}
