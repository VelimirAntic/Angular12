import { BehaviorSubject } from 'rxjs';
import { VectorLayer } from '../../layer';
import { IgoMap } from '../../map';
import { FeatureWorkspace } from './feature-workspace';
import { StorageService } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class FeatureWorkspaceService {
    private storageService;
    get zoomAuto(): boolean;
    ws$: BehaviorSubject<string>;
    constructor(storageService: StorageService);
    createWorkspace(layer: VectorLayer, map: IgoMap): FeatureWorkspace;
    private createFeatureStore;
    private createTableTemplate;
    private createFilterInMapExtentOrResolutionStrategy;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureWorkspaceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FeatureWorkspaceService>;
}
