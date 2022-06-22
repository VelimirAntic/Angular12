import { OnInit, OnDestroy } from '@angular/core';
import type { WorkspaceStore } from '@igo2/common';
import { IgoMap } from '../../map';
import { WfsWorkspaceService } from '../shared/wfs-workspace.service';
import { WmsWorkspaceService } from '../shared/wms-workspace.service';
import { EditionWorkspaceService } from '../shared/edition-workspace.service';
import { FeatureWorkspaceService } from '../shared/feature-workspace.service';
import * as i0 from "@angular/core";
export declare class WorkspaceUpdatorDirective implements OnInit, OnDestroy {
    private wfsWorkspaceService;
    private wmsWorkspaceService;
    private editionWorkspaceService;
    private featureWorkspaceService;
    private layers$$;
    private entities$$;
    map: IgoMap;
    workspaceStore: WorkspaceStore;
    constructor(wfsWorkspaceService: WfsWorkspaceService, wmsWorkspaceService: WmsWorkspaceService, editionWorkspaceService: EditionWorkspaceService, featureWorkspaceService: FeatureWorkspaceService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private onLayersChange;
    private getOrCreateWorkspace;
    private layerIsEditable;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkspaceUpdatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<WorkspaceUpdatorDirective, "[igoWorkspaceUpdator]", never, { "map": "map"; "workspaceStore": "workspaceStore"; }, {}, never>;
}
