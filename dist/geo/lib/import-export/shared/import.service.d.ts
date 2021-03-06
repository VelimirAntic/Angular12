import { HttpClient } from '@angular/common/http';
import { ConfigService } from '@igo2/core';
import { Observable } from 'rxjs';
import { Feature } from '../../feature/shared/feature.interfaces';
import * as i0 from "@angular/core";
export declare class ImportService {
    private http;
    private config;
    static allowedMimeTypes: string[];
    static allowedZipMimeTypes: string[];
    static allowedExtensions: string[];
    private ogreUrl;
    private clientSideFileSizeMax;
    constructor(http: HttpClient, config: ConfigService);
    import(file: File, projectionIn?: string, projectionOut?: string): Observable<Feature[]>;
    private getFileImporter;
    private importAsync;
    private importFile;
    private importFileWithOgre;
    private parseFeaturesFromFile;
    private parseFeaturesFromGeoJSON;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ImportService>;
}
