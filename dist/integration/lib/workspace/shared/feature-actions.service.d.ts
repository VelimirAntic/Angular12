import { OnDestroy } from '@angular/core';
import { Action } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import { FeatureWorkspace } from '@igo2/geo';
import { StorageService, LanguageService, MediaService } from '@igo2/core';
import { StorageState } from '../../storage/storage.state';
import { ToolState } from '../../tool/tool.state';
import * as i0 from "@angular/core";
export declare class FeatureActionsService implements OnDestroy {
    private storageState;
    languageService: LanguageService;
    private toolState;
    private mediaService;
    maximize$: BehaviorSubject<boolean>;
    zoomAuto$: BehaviorSubject<boolean>;
    private storageChange$$;
    get storageService(): StorageService;
    get zoomAuto(): boolean;
    constructor(storageState: StorageState, languageService: LanguageService, toolState: ToolState, mediaService: MediaService);
    ngOnDestroy(): void;
    loadActions(workspace: FeatureWorkspace, rowsInMapExtentCheckCondition$: BehaviorSubject<boolean>, selectOnlyCheckCondition$: BehaviorSubject<boolean>): void;
    buildActions(workspace: FeatureWorkspace, rowsInMapExtentCheckCondition$: BehaviorSubject<boolean>, selectOnlyCheckCondition$: BehaviorSubject<boolean>): Action[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureActionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FeatureActionsService>;
}
