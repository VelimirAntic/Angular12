import { Workspace, WorkspaceOptions } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import { VectorLayer } from '../../layer';
import { IgoMap } from '../../map';
export interface FeatureWorkspaceOptions extends WorkspaceOptions {
    layer: VectorLayer;
    map: IgoMap;
}
export declare class FeatureWorkspace extends Workspace {
    protected options: FeatureWorkspaceOptions;
    readonly inResolutionRange$: BehaviorSubject<boolean>;
    get layer(): VectorLayer;
    get map(): IgoMap;
    constructor(options: FeatureWorkspaceOptions);
    getLayerWksOptionTabQuery(): boolean;
    getLayerWksOptionMapQuery(): boolean;
    private getInResolutionRange;
}
