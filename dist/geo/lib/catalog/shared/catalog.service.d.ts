import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService, MessageService, ConfigService } from '@igo2/core';
import { CapabilitiesService } from '../../datasource';
import { CatalogItem, CatalogItemGroup } from './catalog.interface';
import { Catalog } from './catalog.abstract';
import * as i0 from "@angular/core";
export declare class CatalogService {
    private http;
    private config;
    private languageService;
    private messageService;
    private capabilitiesService;
    constructor(http: HttpClient, config: ConfigService, languageService: LanguageService, messageService: MessageService, capabilitiesService: CapabilitiesService);
    loadCatalogs(): Observable<Catalog[]>;
    loadCatalogItems(catalog: Catalog): Observable<CatalogItem[]>;
    loadCatalogBaseLayerItems(catalog: Catalog): Observable<CatalogItemGroup[]>;
    private getCatalogBaseLayersOptions;
    loadCatalogWMSLayerItems(catalog: Catalog): Observable<CatalogItem[]>;
    flattenWmsCapabilities(parent: any, level: number, finalLayers: any, separator?: string): void;
    loadCatalogWMTSLayerItems(catalog: Catalog): Observable<CatalogItem[]>;
    loadCatalogArcGISRestItems(catalog: Catalog): Observable<CatalogItem[]>;
    loadCatalogCompositeLayerItems(catalog: Catalog): Observable<CatalogItem[]>;
    private getCatalogCapabilities;
    private prepareCatalogItemLayer;
    private prepareCatalogItemGroup;
    private includeRecursiveItems;
    private getWMTSItems;
    private getArcGISRESTItems;
    private testLayerRegexes;
    private retrieveLayerInfoFormat;
    private findCatalogInfoFormat;
    static ɵfac: i0.ɵɵFactoryDeclaration<CatalogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CatalogService>;
}
