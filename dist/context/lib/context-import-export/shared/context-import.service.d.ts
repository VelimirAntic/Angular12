import { Observable } from 'rxjs';
import { ConfigService } from '@igo2/core';
import { DetailedContext } from '../../context-manager/shared/context.interface';
import * as i0 from "@angular/core";
export declare class ContextImportService {
    private config;
    static allowedMimeTypes: string[];
    static allowedExtensions: string;
    private clientSideFileSizeMax;
    constructor(config: ConfigService);
    import(file: File): Observable<DetailedContext>;
    private getFileImporter;
    private importAsync;
    private importFile;
    private parseContextFromFile;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextImportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContextImportService>;
}
