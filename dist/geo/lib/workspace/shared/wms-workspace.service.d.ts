import { BehaviorSubject } from 'rxjs';
import { StorageService } from '@igo2/core';
import { ImageLayer, LayerService } from '../../layer';
import { IgoMap } from '../../map';
import { WfsWorkspace } from './wfs-workspace';
import * as i0 from "@angular/core";
export declare class WmsWorkspaceService {
    private layerService;
    private storageService;
    get zoomAuto(): boolean;
    ws$: BehaviorSubject<string>;
    constructor(layerService: LayerService, storageService: StorageService);
    createWorkspace(layer: ImageLayer, map: IgoMap): WfsWorkspace;
    private createFeatureStore;
    private createTableTemplate;
    private createFilterInMapExtentOrResolutionStrategy;
    static ɵfac: i0.ɵɵFactoryDeclaration<WmsWorkspaceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WmsWorkspaceService>;
}
