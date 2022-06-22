import { Workspace, WorkspaceOptions } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import { VectorLayer } from '../../layer';
import { IgoMap } from '../../map';
export interface WfsWorkspaceOptions extends WorkspaceOptions {
    layer: VectorLayer;
    map: IgoMap;
}
export declare class WfsWorkspace extends Workspace {
    protected options: WfsWorkspaceOptions;
    readonly inResolutionRange$: BehaviorSubject<boolean>;
    get layer(): VectorLayer;
    get map(): IgoMap;
    constructor(options: WfsWorkspaceOptions);
    getLayerWksOptionTabQuery(): boolean;
    getLayerWksOptionMapQuery(): boolean;
    private getInResolutionRange;
}
