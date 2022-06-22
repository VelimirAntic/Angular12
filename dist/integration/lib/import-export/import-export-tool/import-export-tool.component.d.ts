import { OnInit } from '@angular/core';
import type { WorkspaceStore } from '@igo2/common';
import { IgoMap, ExportOptions, ProjectionsLimitationsOptions } from '@igo2/geo';
import { MapState } from '../../map/map.state';
import { ImportExportMode, ImportExportState, ImportExportType } from '../import-export.state';
import { WorkspaceState } from '../../workspace/workspace.state';
import * as i0 from "@angular/core";
export declare class ImportExportToolComponent implements OnInit {
    private mapState;
    importExportState: ImportExportState;
    private workspaceState;
    projectionsLimitations: ProjectionsLimitationsOptions;
    selectFirstProj: boolean;
    /**
     * Map to measure on
     * @internal
     */
    get map(): IgoMap;
    get workspaceStore(): WorkspaceStore;
    importExportType: ImportExportType;
    importExportShowBothType: boolean;
    constructor(mapState: MapState, importExportState: ImportExportState, workspaceState: WorkspaceState);
    ngOnInit(): void;
    private selectType;
    private selectMode;
    modeChanged(mode: ImportExportMode): void;
    exportOptionsChange(exportOptions: ExportOptions): void;
    importExportTypeChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportExportToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImportExportToolComponent, "igo-import-export-tool", never, { "projectionsLimitations": "projectionsLimitations"; "selectFirstProj": "selectFirstProj"; "importExportType": "importExportType"; "importExportShowBothType": "importExportShowBothType"; }, {}, never, never>;
}
