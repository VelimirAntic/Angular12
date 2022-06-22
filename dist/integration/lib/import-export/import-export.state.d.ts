import { BehaviorSubject } from 'rxjs';
import { ExportOptions } from '@igo2/geo';
import * as i0 from "@angular/core";
export declare enum ImportExportType {
    layer = "layer",
    context = "context"
}
export declare enum ImportExportMode {
    import = "import",
    export = "export"
}
/**
 * Service that holds the state of the importExport module
 */
export declare class ImportExportState {
    readonly importExportType$: BehaviorSubject<ImportExportType>;
    readonly selectedMode$: BehaviorSubject<ImportExportMode>;
    readonly exportOptions$: BehaviorSubject<ExportOptions>;
    setImportExportType(type: ImportExportType): void;
    setMode(mode: ImportExportMode): void;
    setsExportOptions(exportOptions: ExportOptions): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportExportState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ImportExportState>;
}
