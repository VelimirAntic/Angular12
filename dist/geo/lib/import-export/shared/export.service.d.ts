import { ConfigService } from '@igo2/core';
import { Observable, Observer } from 'rxjs';
import OlFeature from 'ol/Feature';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { ExportFormat, EncodingFormat } from './export.type';
import * as i0 from "@angular/core";
export declare class ExportService {
    private config;
    static ogreFormats: {
        GML: string;
        GPX: string;
        KML: string;
        Shapefile: string;
        CSVcomma: string;
        CSVsemicolon: string;
    };
    static noOgreFallbacks: string[];
    private ogreUrl;
    private aggregateInComment;
    constructor(config: ConfigService);
    export(olFeatures: OlFeature<OlGeometry>[], format: ExportFormat, title: string, encoding: EncodingFormat, projectionIn?: string, projectionOut?: string): Observable<void>;
    private generateFeature;
    private generateAggregatedFeature;
    private exportAsync;
    protected exportToFile(olFeatures: OlFeature<OlGeometry>[], observer: Observer<void>, format: ExportFormat, title: string, projectionIn: string, projectionOut: string): void;
    private exportWithOgre;
    private nothingToExport;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ExportService>;
}
