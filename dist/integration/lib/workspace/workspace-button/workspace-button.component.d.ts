import { OnInit, OnDestroy } from '@angular/core';
import type { Layer } from '@igo2/geo';
import { WorkspaceState } from '../workspace.state';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class WorkspaceButtonComponent implements OnInit, OnDestroy {
    private workspaceState;
    hasWorkspace$: BehaviorSubject<boolean>;
    private hasWorkspace$$;
    private _layer;
    private layer$;
    set layer(value: Layer);
    get layer(): Layer;
    color: string;
    constructor(workspaceState: WorkspaceState);
    ngOnInit(): void;
    ngOnDestroy(): void;
    activateWorkspace(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkspaceButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WorkspaceButtonComponent, "igo-workspace-button", never, { "layer": "layer"; "color": "color"; }, {}, never, never>;
}
