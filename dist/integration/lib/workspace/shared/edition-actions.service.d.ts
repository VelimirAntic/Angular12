import { OnDestroy } from '@angular/core';
import { Action, Widget } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import { EditionWorkspace } from '@igo2/geo';
import { StorageService, LanguageService, MediaService } from '@igo2/core';
import { StorageState } from '../../storage/storage.state';
import { ToolState } from '../../tool/tool.state';
import * as i0 from "@angular/core";
export declare class EditionActionsService implements OnDestroy {
    private ogcFilterWidget;
    private storageState;
    languageService: LanguageService;
    private mediaService;
    private toolState;
    maximize$: BehaviorSubject<boolean>;
    zoomAuto$: BehaviorSubject<boolean>;
    private storageChange$$;
    get storageService(): StorageService;
    get zoomAuto(): boolean;
    constructor(ogcFilterWidget: Widget, storageState: StorageState, languageService: LanguageService, mediaService: MediaService, toolState: ToolState);
    ngOnDestroy(): void;
    loadActions(workspace: EditionWorkspace, rowsInMapExtentCheckCondition$: BehaviorSubject<boolean>, selectOnlyCheckCondition$: BehaviorSubject<boolean>): void;
    buildActions(workspace: EditionWorkspace, rowsInMapExtentCheckCondition$: BehaviorSubject<boolean>, selectOnlyCheckCondition$: BehaviorSubject<boolean>): Action[];
    static ɵfac: i0.ɵɵFactoryDeclaration<EditionActionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EditionActionsService>;
}
