import { Toolbox, ToolService } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import { ImportExportState } from '../import-export/import-export.state';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of the search module
 */
export declare class ToolState {
    private toolService;
    private importExportState;
    get toolbox(): Toolbox;
    openSidenav$: BehaviorSubject<boolean>;
    constructor(toolService: ToolService, importExportState: ImportExportState);
    toolToActivateFromOptions(toolToActivate: {
        tool: string;
        options: {
            [key: string]: any;
        };
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToolState>;
}
