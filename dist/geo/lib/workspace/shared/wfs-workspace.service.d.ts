import { BehaviorSubject } from 'rxjs';
import { VectorLayer } from '../../layer';
import { IgoMap } from '../../map';
import { WfsWorkspace } from './wfs-workspace';
import { StorageService } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class WfsWorkspaceService {
    private storageService;
    get zoomAuto(): boolean;
    ws$: BehaviorSubject<string>;
    constructor(storageService: StorageService);
    createWorkspace(layer: VectorLayer, map: IgoMap): WfsWorkspace;
    private createFeatureStore;
    private createTableTemplate;
    private createFilterInMapExtentOrResolutionStrategy;
    static ɵfac: i0.ɵɵFactoryDeclaration<WfsWorkspaceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WfsWorkspaceService>;
}
